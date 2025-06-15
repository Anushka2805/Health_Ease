"use client";
import React, { useState } from 'react';
import { Search, Mic, Camera, Calendar, Users, FileText, Brain, Bell, Settings, ChevronRight, Activity, Clock, Star, TrendingUp, Heart } from 'lucide-react';

interface Doctor {
  name: string;
  specialty?: string;
}

const DoctorDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock doctor data - in a real app, this would come from authentication/session
  const pro_doc: Doctor = {
    name: 'Sarah Anderson',
    specialty: 'Cardiologist'
  };

  const recentPatients = [
    { name: 'Sarah Johnson', condition: 'Hypertension', lastVisit: '2 hours ago', priority: 'high' },
    { name: 'Michael Chen', condition: 'Diabetes', lastVisit: '1 day ago', priority: 'medium' },
    { name: 'Emma Davis', condition: 'Asthma', lastVisit: '3 days ago', priority: 'low' },
  ];

  const todayStats = [
    { label: 'Patients Today', value: '12', icon: Users, trend: '+2' },
    { label: 'Appointments', value: '8', icon: Calendar, trend: '+1' },
    { label: 'Reports Pending', value: '3', icon: FileText, trend: '-1' },
    { label: 'AI Summaries', value: '5', icon: Brain, trend: '+3' },
  ];

  return (
    <div className="min-h-screen bg-[#E7EFC7] text-[#3B3B1A]">
      {/* Header */}
      <header className="bg-[#AEC8A4] shadow-lg border-b border-[#8A784E]/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#8A784E] rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-[#E7EFC7]" />
              </div>
              <h1 className="text-2xl font-bold text-[#3B3B1A]">Healthease</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-[#8A784E]/10 transition-colors">
                <Users className="w-4 h-4" />
                <span>Patients</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-[#8A784E]/10 transition-colors">
                <FileText className="w-4 h-4" />
                <span>Reports</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-[#8A784E]/10 transition-colors">
                <Brain className="w-4 h-4" />
                <span>AI Tools</span>
              </button>
              <button className="p-2 rounded-lg hover:bg-[#8A784E]/10 transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 rounded-lg hover:bg-[#8A784E]/10 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </nav>

            <div className="flex items-center space-x-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-[#3B3B1A]">Dr. {pro_doc?.name || 'Unknown'}</p>
                <p className="text-xs text-[#8A784E]">{pro_doc?.specialty || 'General Practitioner'}</p>
              </div>
              <div className="w-10 h-10 bg-[#8A784E] rounded-full flex items-center justify-center">
                <span className="text-[#E7EFC7] font-semibold">
                  {pro_doc?.name?.charAt(0) || 'D'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-[#AEC8A4] px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium text-[#3B3B1A]">Health Matters</span>
              <span className="text-red-500">💖</span>
            </div>
            
            <h2 className="text-4xl font-bold text-[#3B3B1A] mb-3">
              Good Morning, <br />
              <span className="text-[#8A784E]">Dr. {pro_doc?.name?.split(' ')[0] || 'Doctor'}</span>
            </h2>
            
            <p className="text-lg text-[#8A784E] mb-6 leading-relaxed">
              Ready to make a difference today? Your patients are counting on your expertise.
            </p>

            {/* Enhanced Search */}
            <div className="relative">
              <div className="flex items-center bg-white rounded-2xl shadow-lg border border-[#AEC8A4]/30 p-2">
                <Search className="w-5 h-5 text-[#8A784E] ml-3" />
                <input
                  type="text"
                  placeholder="Search patients, conditions, or records..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-3 outline-none text-[#3B3B1A] placeholder-[#8A784E]/60"
                />
                <div className="flex items-center space-x-2 pr-2">
                  <button className="p-2 hover:bg-[#E7EFC7] rounded-lg transition-colors">
                    <Mic className="w-5 h-5 text-[#8A784E]" />
                  </button>
                  <button className="p-2 hover:bg-[#E7EFC7] rounded-lg transition-colors">
                    <Camera className="w-5 h-5 text-[#8A784E]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {todayStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-[#AEC8A4]/30 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#E7EFC7] rounded-xl">
                    <stat.icon className="w-6 h-6 text-[#8A784E]" />
                  </div>
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                    stat.trend.startsWith('+') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {stat.trend}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#3B3B1A] mb-1">{stat.value}</h3>
                <p className="text-[#8A784E] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-[#3B3B1A] mb-6">Quick Actions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group bg-white rounded-2xl p-6 shadow-lg border border-[#AEC8A4]/30 hover:shadow-xl transition-all hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#E7EFC7] rounded-xl group-hover:bg-[#AEC8A4] transition-colors">
                    <Users className="w-8 h-8 text-[#8A784E]" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#8A784E] group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="text-lg font-semibold text-[#3B3B1A] mb-2">View Patients</h4>
                <p className="text-[#8A784E] text-sm mb-4">Access comprehensive patient records, medical history, and treatment plans</p>
                <button className="w-full bg-[#8A784E] text-[#E7EFC7] py-3 rounded-xl font-medium hover:bg-[#3B3B1A] transition-colors">
                  Manage Patients
                </button>
              </div>

              <div className="group bg-white rounded-2xl p-6 shadow-lg border border-[#AEC8A4]/30 hover:shadow-xl transition-all hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#E7EFC7] rounded-xl group-hover:bg-[#AEC8A4] transition-colors">
                    <FileText className="w-8 h-8 text-[#8A784E]" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#8A784E] group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="text-lg font-semibold text-[#3B3B1A] mb-2">Upload Reports</h4>
                <p className="text-[#8A784E] text-sm mb-4">Seamlessly upload lab results, prescriptions, and medical documents</p>
                <button className="w-full bg-[#8A784E] text-[#E7EFC7] py-3 rounded-xl font-medium hover:bg-[#3B3B1A] transition-colors">
                  Upload Files
                </button>
              </div>

              <div className="group bg-white rounded-2xl p-6 shadow-lg border border-[#AEC8A4]/30 hover:shadow-xl transition-all hover:scale-105 md:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#E7EFC7] rounded-xl group-hover:bg-[#AEC8A4] transition-colors">
                    <Brain className="w-8 h-8 text-[#8A784E]" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-[#8A784E] text-[#E7EFC7] text-xs px-2 py-1 rounded-full">AI Powered</span>
                    <ChevronRight className="w-5 h-5 text-[#8A784E] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-[#3B3B1A] mb-2">AI Case Summary</h4>
                <p className="text-[#8A784E] text-sm mb-4">Generate intelligent case summaries, treatment recommendations, and diagnostic insights</p>
                <button className="bg-[#8A784E] text-[#E7EFC7] px-6 py-3 rounded-xl font-medium hover:bg-[#3B3B1A] transition-colors">
                  Try AI Assistant
                </button>
              </div>
            </div>
          </div>

          {/* Recent Patients */}
          <div>
            <h3 className="text-xl font-bold text-[#3B3B1A] mb-6">Recent Patients</h3>
            <div className="bg-white rounded-2xl shadow-lg border border-[#AEC8A4]/30 overflow-hidden">
              {recentPatients.map((patient, index) => (
                <div key={index} className="p-4 border-b border-[#E7EFC7] last:border-b-0 hover:bg-[#E7EFC7]/30 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-[#3B3B1A]">{patient.name}</h4>
                    <span className={`w-3 h-3 rounded-full ${
                      patient.priority === 'high' ? 'bg-red-500' :
                      patient.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></span>
                  </div>
                  <p className="text-[#8A784E] text-sm mb-1">{patient.condition}</p>
                  <div className="flex items-center text-xs text-[#8A784E]">
                    <Clock className="w-3 h-3 mr-1" />
                    {patient.lastVisit}
                  </div>
                </div>
              ))}
              <div className="p-4">
                <button className="w-full text-[#8A784E] text-sm font-medium hover:text-[#3B3B1A] transition-colors">
                  View All Patients →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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