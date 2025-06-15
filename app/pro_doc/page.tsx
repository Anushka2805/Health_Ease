//app/pro_doc/page.tsx
"use client";
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { User, Calendar, Clock, Globe, MessageCircle, Users, FileText, Pill, Bell, Search, Settings, LogOut, Activity, Heart } from 'lucide-react';

const DoctorDashboard: React.FC = () => {
  const [doctorData, setDoctorData] = useState<{ firstName: string; lastName: string; email: string; specialization?: string; experience?: string; bio?: string }>({
    firstName: '',
    lastName: '',
    email: '',
  });

  useEffect(() => {
    const storedData = localStorage.getItem("doctorProfile");
    if (storedData) {
      setDoctorData(JSON.parse(storedData));
    }
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E7EFC7] via-[#E7EFC7] to-[#AEC8A4]/30">
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-[#AEC8A4]/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#AEC8A4] to-[#8A784E] rounded-xl flex items-center justify-center shadow-lg">
                  <User className="text-white text-xl" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#3B3B1A] tracking-tight">Healthease</h1>
                <p className="text-sm text-[#8A784E]">Medical Profile</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8A784E]/60 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Search patients, reports..." 
                  className="pl-12 pr-6 py-3 w-80 rounded-2xl bg-[#E7EFC7]/50 border border-[#AEC8A4]/30 text-[#3B3B1A] placeholder-[#8A784E]/60 focus:outline-none focus:ring-2 focus:ring-[#AEC8A4] focus:bg-white transition-all"
                />
              </div>
              <button className="relative p-3 hover:bg-[#E7EFC7] rounded-xl transition-all duration-200 group">
                <Bell className="w-5 h-5 text-[#8A784E] group-hover:text-[#3B3B1A]" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-3 hover:bg-[#E7EFC7] rounded-xl transition-all duration-200 group">
                <Settings className="w-5 h-5 text-[#8A784E] group-hover:text-[#3B3B1A]" />
              </button>
            </div>
          </div>

          <nav className="flex gap-2 mt-6">
            <button className="bg-gradient-to-r from-[#AEC8A4] to-[#8A784E] text-white px-6 py-3 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-medium">
              Profile
            </button>
            <Link href="/after_login_doctor">
              <button className="bg-white/60 backdrop-blur text-[#3B3B1A] px-6 py-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200 font-medium border border-[#AEC8A4]/20">
                Dashboard
              </button>
            </Link>
            <button className="bg-white/60 backdrop-blur text-[#3B3B1A] px-6 py-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200 font-medium border border-[#AEC8A4]/20">
              Patients
            </button>
            <Link href="/pro_doc/reports">
              <button className="bg-white/60 backdrop-blur text-[#3B3B1A] px-6 py-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200 font-medium border border-[#AEC8A4]/20">
                Reports
              </button>
            </Link>

            <button className="bg-white/60 backdrop-blur text-[#3B3B1A] px-6 py-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200 font-medium border border-[#AEC8A4]/20">
              Analytics
            </button>
            <button className="bg-red-50 text-red-600 px-6 py-3 rounded-xl hover:bg-red-100 transition-all duration-200 font-medium ml-auto flex items-center gap-2 border border-red-200">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-[#3B3B1A] mb-2">Good Morning</h2>
          <p className="text-lg text-[#8A784E]/80">Ready to make a difference in your patients lives today</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="group">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-[#AEC8A4]/20 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Users className="text-white w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+12%</span>
              </div>
              <h3 className="text-2xl font-bold text-[#3B3B1A] mb-1">342</h3>
              <p className="text-sm text-[#8A784E] font-medium">Total Patients</p>
              <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" style={{width: '78%'}}></div>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-[#AEC8A4]/20 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <FileText className="text-white w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+8%</span>
              </div>
              <h3 className="text-2xl font-bold text-[#3B3B1A] mb-1">76</h3>
              <p className="text-sm text-[#8A784E] font-medium">Reports Generated</p>
              <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full" style={{width: '65%'}}></div>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-[#AEC8A4]/20 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Pill className="text-white w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">+15%</span>
              </div>
              <h3 className="text-2xl font-bold text-[#3B3B1A] mb-1">150</h3>
              <p className="text-sm text-[#8A784E] font-medium">Prescriptions</p>
              <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-[#AEC8A4]/20 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Activity className="text-white w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">+5%</span>
              </div>
              <h3 className="text-2xl font-bold text-[#3B3B1A] mb-1">95%</h3>
              <p className="text-sm text-[#8A784E] font-medium">Success Rate</p>
              <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" style={{width: '95%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Profile Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-[#AEC8A4]/20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#AEC8A4]/10 to-[#8A784E]/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#E7EFC7]/20 to-[#AEC8A4]/20 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Profile Picture */}
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-[#AEC8A4] to-[#8A784E] rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                  <User className="text-white w-16 h-16" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 w-full">
                <div className="text-center lg:text-left mb-8">
                  <h3 className="text-4xl font-bold text-[#3B3B1A] mb-3">
                    Dr. {doctorData.firstName} {doctorData.lastName}
                  </h3>

                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-[#AEC8A4] to-[#8A784E] text-white rounded-full text-sm font-medium shadow-lg">
                      Dermatologist
                    </span>
                    <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                      5+ Years Experience
                    </span>
                  </div>
                  <p className="text-[#8A784E]/80 max-w-md mx-auto lg:mx-0">
                    Specialized in advanced dermatological treatments with a focus on patient-centered care
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-white to-[#E7EFC7]/30 rounded-2xl border border-[#AEC8A4]/20 shadow-sm">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                        <span className="text-blue-600 text-xl">✉️</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-[#8A784E] font-medium uppercase tracking-wide">Email Address</p>
                        <p className="text-[#8A784E]/80">{doctorData.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-white to-[#E7EFC7]/30 rounded-2xl border border-[#AEC8A4]/20 shadow-sm">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                        <span className="text-green-600 text-xl">📞</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-[#8A784E] font-medium uppercase tracking-wide">Phone Number</p>
                        <p className="font-semibold text-[#3B3B1A] text-sm">+91-XXXXXXXXXX</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-white to-[#E7EFC7]/30 rounded-2xl border border-[#AEC8A4]/20 shadow-sm">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                        <Calendar className="text-purple-600 w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-[#8A784E] font-medium uppercase tracking-wide">Working Days</p>
                        <p className="font-semibold text-[#3B3B1A] text-sm">Monday – Friday</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-white to-[#E7EFC7]/30 rounded-2xl border border-[#AEC8A4]/20 shadow-sm">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center">
                        <Clock className="text-orange-600 w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-[#8A784E] font-medium uppercase tracking-wide">Working Hours</p>
                        <p className="font-semibold text-[#3B3B1A] text-sm">10:00 AM – 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-[#AEC8A4]/10 to-[#AEC8A4]/20 rounded-2xl border border-[#AEC8A4]/30">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#AEC8A4] to-[#8A784E] rounded-2xl flex items-center justify-center shadow-lg">
                      <Globe className="text-white w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8A784E] font-medium uppercase tracking-wide mb-1">Consultation Mode</p>
                      <p className="text-[#3B3B1A] font-bold text-sm">In-person & Teleconsultation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-[#8A784E]/10 to-[#8A784E]/20 rounded-2xl border border-[#8A784E]/30">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#8A784E] to-[#3B3B1A] rounded-2xl flex items-center justify-center shadow-lg">
                      <MessageCircle className="text-white w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8A784E] font-medium uppercase tracking-wide mb-1">Languages</p>
                      <p className="text-[#3B3B1A] font-bold text-sm">English, Hindi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-16 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-5 gap-6">
            {/* About Healthease */}
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] bg-clip-text text-transparent">
                  Healthease
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
Healthease is your digital health companion—securely store and manage medical records for smarter, organized healthcare              </p>
            </div>
            
            {/* Product */}
            <div className="col-span-1">
              <h4 className="font-bold text-gray-900 mb-6">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-[#7f6b39] transition-colors text-sm">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#7f6b39] transition-colors text-sm">How it Works</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#7f6b39] transition-colors text-sm">Mobile App (Coming Soon)</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#7f6b39] transition-colors text-sm">Health Record Organizer</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#7f6b39] transition-colors text-sm">Symptom Checker</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#7f6b39] transition-colors text-sm">Reminders & Alerts</a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div className="col-span-1">
              <h4 className="font-bold text-gray-900 mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-[#7f6b39] transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#7f6b39] transition-colors text-sm">Careers at Healthease</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#7f6b39] transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#7f6b39] transition-colors text-sm">Terms & Conditions</a></li>
              </ul>
            </div>
            
            {/* Support */}
            <div className="col-span-1">
              <h4 className="font-bold text-gray-900 mb-6">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-[#7f6b39] transition-colors text-sm">FAQs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#7f6b39] transition-colors text-sm">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#7f6b39] transition-colors text-sm">Contact Support</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#7f6b39] transition-colors text-sm">Report an Issue</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#7f6b39] transition-colors text-sm">User Guides</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#7f6b39] transition-colors text-sm">Doctor Onboarding</a></li>
              </ul>
            </div>
            
            {/* Contact Us */}
            <div className="col-span-1">
              <h4 className="font-bold text-gray-900 mb-6">Contact Us</h4>
              <div className="space-y-3 text-gray-600">
                <p>
                  <a href="mailto:support@healthease.com" className="hover:text-[#7f6b39] transition-colors text-sm">
                    support@healthease.com
                  </a>
                </p>
                <p>
                  <a href="tel:+919876543210" className="hover:text-[#7f6b39] transition-colors text-sm">
                    +91XXXXXXXXXX
                  </a>
                </p>
                <p className="text-sm">IGDTUW Incubation Center</p>
                <p className="text-sm">Delhi, India</p>
                <p className="pt-2 text-sm">Mon–Fri, 9am–6pm IST</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-300 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-500">
              &copy; 2025 Healthease. All rights reserved. | 
              <a href="#" className="hover:text-[#7f6b39] transition-colors mx-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-[#7f6b39] transition-colors mx-1">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DoctorDashboard;