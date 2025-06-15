"use client";
import React, { useState } from "react";
import { 
  User, 
  Plus, 
  FileText, 
  Edit3, 
  MessageCircle, 
  LogOut,
  Phone,
  Calendar,
  Download,
  Heart,
  Shield,
  Pill,
  Activity
} from "lucide-react";

const PatientProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const reports = [
    { name: "LASIK Report", date: "2024-05-12", type: "Surgery" },
    { name: "Typhoid Test", date: "2024-04-20", type: "Lab" },
    { name: "Dengue Test", date: "2024-03-15", type: "Lab" },
    { name: "Full Body Checkup", date: "2024-05-12", type: "Comprehensive" }
  ];

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
              {['Profile', 'Medications', 'Prescriptions', 'Reports'].map((item) => (
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
              <button className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors" style={{ color: '#3B3B1A' }}>
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
                      <span>SHAIVI JAIN</span>
                      <span className="text-sm font-normal px-2 py-1 rounded-full" style={{ backgroundColor: '#E7EFC7', color: '#8A784E' }}>18</span>
                    </h2>
                    <p className="text-gray-600">Female</p>
                  </div>
                </div>
                <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <Edit3 className="w-4 h-4" style={{ color: '#8A784E' }} />
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">+91 XXXXXXXXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Activity className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-medium">Blood Group: A+</span>
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
                <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#E7EFC7' }}>
                  <div>
                    <p className="font-medium" style={{ color: '#3B3B1A' }}>Shreya Jain</p>
                    <p className="text-sm text-gray-600">Sister</p>
                  </div>
                  <Phone className="w-4 h-4" style={{ color: '#8A784E' }} />
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#E7EFC7' }}>
                  <div>
                    <p className="font-medium" style={{ color: '#3B3B1A' }}>Isha Jain</p>
                    <p className="text-sm text-gray-600">Mother</p>
                  </div>
                  <Phone className="w-4 h-4" style={{ color: '#8A784E' }} />
                </div>
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
              </div>
            </div>
          </div>

          {/* Right Column - Health Details & Reports */}
          <div className="lg:col-span-2 space-y-6">
            {/* Health Overview */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border" style={{ borderColor: '#AEC8A4' }}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold" style={{ color: '#3B3B1A' }}>Health Overview</h3>
                <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
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
                      {['Penicillin', 'Peanuts'].map((allergy) => (
                        <span key={allergy} className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#E7EFC7', color: '#8A784E' }}>
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
                      {['Asthma', 'PCOS'].map((condition) => (
                        <span key={condition} className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#AEC8A4', color: '#3B3B1A' }}>
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Pill className="w-4 h-4 text-blue-500" />
                      <h4 className="font-semibold" style={{ color: '#3B3B1A' }}>Current Medications</h4>
                    </div>
                    <div className="space-y-2">
                      {['Seroflo Inhaler', 'Metformin'].map((med) => (
                        <div key={med} className="p-2 rounded-lg" style={{ backgroundColor: '#E7EFC7' }}>
                          <span className="text-sm font-medium" style={{ color: '#3B3B1A' }}>{med}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-4 h-4 text-green-500" />
                      <h4 className="font-semibold" style={{ color: '#3B3B1A' }}>Last Checkup</h4>
                    </div>
                    <p className="text-sm" style={{ color: '#8A784E' }}>May 12, 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vaccination Status */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border" style={{ borderColor: '#AEC8A4' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#3B3B1A' }}>Vaccination Status</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'COVID-19', status: 'Complete', color: 'text-green-600' },
                  { name: 'Tetanus', status: 'Complete', color: 'text-green-600' }
                ].map((vaccine) => (
                  <div key={vaccine.name} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#E7EFC7' }}>
                    <span className="font-medium" style={{ color: '#3B3B1A' }}>{vaccine.name}</span>
                    <span className={`text-sm font-medium ${vaccine.color}`}>✓ {vaccine.status}</span>
                  </div>
                ))}
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
};

export default PatientProfile;