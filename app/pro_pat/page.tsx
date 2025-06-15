//app/pro_pat/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";          
import { User, Calendar, UtensilsCrossed, Activity, Cigarette, Heart, AlertTriangle, RefreshCw, LogOut, Shield, Phone, Plus, Download, MessageCircle, FileText, Edit3, Pill } from "lucide-react";

// Type definitions
interface PatientData {
  aadhaar: string;
  fullName: string;
  dob: string;
  gender: string;
  bloodGroup: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactRelation: string;
  allergies: string;
  chronicConditions: string;
  dietType: string;
  activityLevel: string;
  smokingAlcohol: string;
  updatedAt: string;
}

interface Report {
  name: string;
  date: string;
  type: string;
}

export default function PatientDashboard() {
  const [patientData, setPatientData] = useState<PatientData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [activeTab, setActiveTab] = useState("profile");
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    // Get Aadhaar from URL params or localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const aadhaarFromUrl = urlParams.get('aadhaar');
    const storedName = localStorage.getItem("userFullName");
    if (storedName) setFirstName(storedName.split(" ")[0]);

    if (aadhaarFromUrl) {
      setAadhaar(aadhaarFromUrl);
      fetchPatientData(aadhaarFromUrl);
    } else {
      const storedAadhaar = localStorage.getItem('userAadhaar');
      if (storedAadhaar) {
        setAadhaar(storedAadhaar);
        fetchPatientData(storedAadhaar);
      } else {
        setError("No patient data found. Please register first.");
        setLoading(false);
      }
    }
  }, []);

  const fetchPatientData = async (aadhaarNumber: string) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/patient_profile?aadhaar=${aadhaarNumber}`);
      const data = await response.json();

      if (response.ok) {
        setPatientData(data.data);
        setError("");
      } else {
        setError(data.error || "Failed to fetch patient data");
      }
    } catch (error) {
      console.error("Error fetching patient data:", error);
      setError("Failed to load patient data");
    } finally {
      setLoading(false);
    }
  };

  const handleEditProfile = () => {
    window.location.href = `/patient_register?aadhaar=${aadhaar}`;
  };

  const handleLogout = () => {
    localStorage.removeItem('userAadhaar');
    window.location.href = '/register';
  };

  const handleRefreshData = () => {
    if (aadhaar) {
      fetchPatientData(aadhaar);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E7EFC7 0%, #AEC8A4 50%, #E7EFC7 100%)' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{ borderColor: '#8A784E' }}></div>
          <p style={{ color: '#3B3B1A' }}>Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E7EFC7 0%, #AEC8A4 50%, #E7EFC7 100%)' }}>
        <div className="text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-4" style={{ color: '#8A784E' }} />
          <h2 className="text-2xl font-bold mb-2" style={{ color: '#3B3B1A' }}>Error</h2>
          <p className="mb-4" style={{ color: '#8A784E' }}>{error}</p>
          <div className="space-x-4">
            <button
              onClick={handleRefreshData}
              className="px-6 py-2 rounded-xl text-white font-semibold mr-2"
              style={{ background: 'linear-gradient(135deg, #8A784E, #AEC8A4)' }}
            >
              Try Again
            </button>
            <button
              onClick={() => window.location.href = '/register'}
              className="px-6 py-2 rounded-xl border-2 font-semibold"
              style={{ borderColor: '#8A784E', color: '#8A784E' }}
            >
              Go to Registration
            </button>
          </div>
        </div>
      </div>
    );
  }

  const reports: Report[] = [
    { name: "LASIK Report", date: "2024-05-12", type: "Surgery" },
    { name: "Typhoid Test", date: "2024-04-20", type: "Lab" },
    { name: "Dengue Test", date: "2024-03-15", type: "Lab" },
    { name: "Full Body Checkup", date: "2024-05-12", type: "Comprehensive" }
  ];

  // Extract allergies and conditions from patient data
  const allergiesList = patientData?.allergies 
    ? patientData.allergies.split(',').map((item: string) => item.trim()).filter((item: string) => item)
    : ['No allergies reported'];
  
  const conditionsList = patientData?.chronicConditions 
    ? patientData.chronicConditions.split(',').map((item: string) => item.trim()).filter((item: string) => item)
    : ['No conditions reported'];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E7EFC7' }}>
      {/* Header */}
      <header className="shadow-sm border-b" style={{ backgroundColor: '#AEC8A4', borderColor: '#8A784E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#3B3B1A' }}>
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold" style={{ color: '#3B3B1A' }}>Healthease</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
                <Link
                  href="/after_login"
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors"
                  style={{ color: "#3B3B1A" }}
                >
                  <span>Dashboard</span>
                </Link>

              {['Medications', 'Prescriptions'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item.toLowerCase())}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === item.toLowerCase() 
                      ? 'text-white' 
                      : 'hover:bg-white hover:bg-opacity-20'
                  }`}
                  style={{ 
                    backgroundColor: activeTab === item.toLowerCase() ? '#8A784E' : 'transparent',
                    color: activeTab === item.toLowerCase() ? 'white' : '#3B3B1A'
                  }}
                >
                  {item}
                </button>
              ))}

              <Link
                href="/records"
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors"
                style={{ color: "#3B3B1A" }}
              >
                <span>Reports</span>
              </Link>

              <button 
                onClick={handleLogout}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors" 
                style={{ color: '#3B3B1A' }}
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Profile & Emergency */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border" style={{ borderColor: '#AEC8A4' }}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#AEC8A4' }}>
                    <User className="w-8 h-8" style={{ color: '#3B3B1A' }} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold flex items-center space-x-2" style={{ color: '#3B3B1A' }}>
                      <span>{`${firstName || "Friend"}`}</span>
                      <span className="text-sm font-normal px-2 py-1 rounded-full" style={{ backgroundColor: '#E7EFC7', color: '#8A784E' }}>
                        {patientData?.dob ? new Date().getFullYear() - new Date(patientData.dob).getFullYear() : '--'}
                      </span>
                    </h2>
                    <p className="text-gray-600">{patientData?.gender || 'Not specified'}</p>
                  </div>
                </div>
                <button 
                  onClick={handleEditProfile}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Edit3 className="w-4 h-4" style={{ color: '#8A784E' }} />
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">{patientData?.emergencyContactPhone || '+91 XXXXXXXXXX'}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Activity className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-medium">Blood Group: {patientData?.bloodGroup || 'Not specified'}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">Aadhaar: ****-****-{aadhaar.slice(-4)}</span>
                </div>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border" style={{ borderColor: '#AEC8A4' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center space-x-2" style={{ color: '#3B3B1A' }}>
                  <Shield className="w-5 h-5 text-red-500" />
                  <span>Emergency Contacts</span>
                </h3>
                <button className="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                  <Plus className="w-4 h-4" style={{ color: '#8A784E' }} />
                </button>
              </div>
              
              <div className="space-y-3">
                {patientData?.emergencyContactName ? (
                  <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#E7EFC7' }}>
                    <div>
                      <p className="font-medium" style={{ color: '#3B3B1A' }}>{patientData.emergencyContactName}</p>
                      <p className="text-sm text-gray-600">{patientData.emergencyContactRelation || 'Contact'}</p>
                    </div>
                    <Phone className="w-4 h-4" style={{ color: '#8A784E' }} />
                  </div>
                ) : (
                  <div className="text-center py-4" style={{ color: '#8A784E' }}>
                    <p className="text-sm">No emergency contacts added</p>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border" style={{ borderColor: '#AEC8A4' }}>
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#3B3B1A' }}>Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left">
                  <Download className="w-4 h-4" style={{ color: '#8A784E' }} />
                  <span className="font-medium" style={{ color: '#3B3B1A' }}>Download Health Summary</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left">
                  <MessageCircle className="w-4 h-4" style={{ color: '#8A784E' }} />
                  <span className="font-medium" style={{ color: '#3B3B1A' }}>Chat with AI Assistant</span>
                </button>
                <button 
                  onClick={handleRefreshData}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                >
                  <RefreshCw className="w-4 h-4" style={{ color: '#8A784E' }} />
                  <span className="font-medium" style={{ color: '#3B3B1A' }}>Refresh Data</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Health Details & Reports */}
          <div className="lg:col-span-2 space-y-6">
            {/* Health Overview */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border" style={{ borderColor: '#AEC8A4' }}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold" style={{ color: '#3B3B1A' }}>Health Overview</h3>
                <button 
                  onClick={handleEditProfile}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Edit3 className="w-4 h-4" style={{ color: '#8A784E' }} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="w-4 h-4 text-red-500" />
                      <h4 className="font-semibold" style={{ color: '#3B3B1A' }}>Allergies</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {allergiesList.map((allergy: string, index: number) => (
                        <span key={index} className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#E7EFC7', color: '#8A784E' }}>
                          {allergy}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Heart className="w-4 h-4 text-red-500" />
                      <h4 className="font-semibold" style={{ color: '#3B3B1A' }}>Conditions</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {conditionsList.map((condition: string, index: number) => (
                        <span key={index} className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#AEC8A4', color: '#3B3B1A' }}>
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Activity className="w-4 h-4 text-blue-500" />
                      <h4 className="font-semibold" style={{ color: '#3B3B1A' }}>Lifestyle</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: '#E7EFC7' }}>
                        <span className="text-sm font-medium" style={{ color: '#3B3B1A' }}>
                          Diet: {patientData?.dietType || 'Not specified'}
                        </span>
                      </div>
                      <div className="p-2 rounded-lg" style={{ backgroundColor: '#E7EFC7' }}>
                        <span className="text-sm font-medium" style={{ color: '#3B3B1A' }}>
                          Activity: {patientData?.activityLevel || 'Not specified'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-4 h-4 text-green-500" />
                      <h4 className="font-semibold" style={{ color: '#3B3B1A' }}>Last Updated</h4>
                    </div>
                    <p className="text-sm" style={{ color: '#8A784E' }}>
                      {patientData?.updatedAt ? new Date(patientData.updatedAt).toLocaleDateString() : 'Not available'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vaccination Status */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border" style={{ borderColor: '#AEC8A4' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#3B3B1A' }}>Lifestyle Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#E7EFC7' }}>
                  <div className="flex items-center space-x-3">
                    <Cigarette className="w-5 h-5" style={{ color: '#8A784E' }} />
                    <span className="font-medium" style={{ color: '#3B3B1A' }}>Smoking/Alcohol</span>
                  </div>
                  <span className="text-sm font-medium" style={{ color: '#8A784E' }}>
                    {patientData?.smokingAlcohol || 'Not specified'}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#E7EFC7' }}>
                  <div className="flex items-center space-x-3">
                    <UtensilsCrossed className="w-5 h-5" style={{ color: '#8A784E' }} />
                    <span className="font-medium" style={{ color: '#3B3B1A' }}>Diet Type</span>
                  </div>
                  <span className="text-sm font-medium" style={{ color: '#8A784E' }}>
                    {patientData?.dietType || 'Not specified'}
                  </span>
                </div>
              </div>
            </div>

            {/* Reports */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border" style={{ borderColor: '#AEC8A4' }}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold" style={{ color: '#3B3B1A' }}>Medical Reports</h3>
                <button className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors" style={{ backgroundColor: '#8A784E', color: 'white' }}>
                  <MessageCircle className="w-4 h-4" />
                  <span>AI Analysis</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {reports.map((report, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-opacity-60 transition-all group-hover:shadow-md" style={{ borderColor: '#AEC8A4' }}>
                      <div className="flex flex-col items-center text-center">
                        <FileText className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" style={{ color: '#8A784E' }} />
                        <h4 className="font-medium text-sm mb-1" style={{ color: '#3B3B1A' }}>{report.name}</h4>
                        <p className="text-xs text-gray-500 mb-1">{report.date}</p>
                        <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#E7EFC7', color: '#8A784E' }}>
                          {report.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t" style={{ backgroundColor: '#AEC8A4', borderColor: '#8A784E' }}>
        <div className="flex justify-around py-2">
          {[
            { icon: User, label: 'Profile' },
            { icon: Pill, label: 'Meds' },
            { icon: FileText, label: 'Reports' },
            { icon: Download, label: 'Download' }
          ].map((item, index) => (
            <button key={index} className="flex flex-col items-center py-2 px-3">
              <item.icon className="w-5 h-5 mb-1" style={{ color: '#3B3B1A' }} />
              <span className="text-xs" style={{ color: '#3B3B1A' }}>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}