// import React from 'react';
// import { FaSearch, FaMicrophone, FaCamera } from 'react-icons/fa';

// const DoctorDashboard = () => {
//   return (
//     <div className="min-h-screen bg-[#f9f9f3] text-[#2b2b2b] font-sans">
//       {/* Header */}
//       <header className="flex justify-between items-center p-4 bg-white shadow-md">
//         <h1 className="text-2xl font-semibold">Healthease</h1>
//         <nav className="space-x-4">
//           <button className="text-sm text-gray-700 hover:text-black">View Profile</button>
//           <button className="text-sm text-gray-700 hover:text-black">Patients</button>
//           <button className="text-sm text-gray-700 hover:text-black">Upload Report</button>
//           <button className="text-sm text-gray-700 hover:text-black">Summarize Case</button>
//           <button className="text-sm text-red-600 hover:text-red-800">Logout</button>
//         </nav>
//       </header>

//       {/* Welcome Section */}
//       <section className="flex flex-col md:flex-row justify-between items-center px-8 py-10">
//         <div className="max-w-xl">
//           <div className="mb-2 bg-[#e8e4db] inline-block px-3 py-1 rounded-full text-sm">Health Matters 💖</div>
//           <h2 className="text-3xl font-bold mt-4">Welcome, Dr. Alia</h2>
//           <h3 className="text-xl text-green-600 font-semibold mt-2">Smarter Patient Tracking Starts Here</h3>
//           <p className="mt-3 text-gray-700">Access records, upload reports, and let AI assist your care.</p>

//           {/* Search */}
//           <div className="mt-6 flex items-center gap-2 bg-white border rounded-full px-4 py-2 shadow-sm w-full max-w-lg">
//             <input
//               type="text"
//               placeholder="Search your patient"
//               className="flex-1 outline-none"
//             />
//             <FaSearch className="text-gray-600 cursor-pointer" />
//             <FaMicrophone className="text-gray-600 cursor-pointer" />
//             <FaCamera className="text-gray-600 cursor-pointer" />
//           </div>
//         </div>

//         <div className="mt-10 md:mt-0">
//           <img src="/doctor-illustration.png" alt="Doctor Illustration" className="w-64 h-auto" />
//         </div>
//       </section>

//       {/* What We Offer */}
//       <section className="px-8 py-10">
//         <h3 className="text-lg font-semibold mb-6 bg-[#ecf0e0] inline-block px-4 py-2 rounded-full">WHAT WE OFFER</h3>
//         <div className="grid md:grid-cols-3 gap-6">
//           <div className="bg-[#dce2e0] p-6 rounded-xl shadow-md">
//             <h4 className="text-xl font-semibold mb-2">View Patients</h4>
//             <p className="text-sm text-gray-700">Access patient history, allergies, and documents.</p>
//             <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">VIEW</button>
//           </div>

//           <div className="bg-[#dce2e0] p-6 rounded-xl shadow-md">
//             <h4 className="text-xl font-semibold mb-2">Upload Reports</h4>
//             <p className="text-sm text-gray-700">Upload test results, prescriptions to patient records.</p>
//             <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">UPLOAD</button>
//           </div>

//           <div className="bg-[#dce2e0] p-6 rounded-xl shadow-md">
//             <h4 className="text-xl font-semibold mb-2">AI Case Summary</h4>
//             <p className="text-sm text-gray-700">Generate quick case summaries using AI.</p>
//             <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">TRY AI TOOL</button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#e2e4d9] px-8 py-10 mt-10">
//         <div className="flex flex-col md:flex-row justify-between">
//           <div>
//             <h4 className="font-bold text-lg mb-2">Healthease</h4>
//             <p className="text-sm text-gray-700 max-w-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam.</p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 md:mt-0">
//             <div>
//               <h5 className="font-semibold mb-2">Product</h5>
//               <ul className="space-y-1 text-sm text-gray-700">
//                 <li>About</li>
//                 <li>Features</li>
//                 <li>Pricing</li>
//                 <li>Reviews</li>
//               </ul>
//             </div>
//             <div>
//               <h5 className="font-semibold mb-2">Company</h5>
//               <ul className="space-y-1 text-sm text-gray-700">
//                 <li>Contact us</li>
//                 <li>Careers</li>
//                 <li>Blog</li>
//               </ul>
//             </div>
//             <div>
//               <h5 className="font-semibold mb-2">Support</h5>
//               <ul className="space-y-1 text-sm text-gray-700">
//                 <li>Getting started</li>
//                 <li>Help center</li>
//                 <li>Report a bug</li>
//                 <li>Chat support</li>
//               </ul>
//             </div>
//             <div>
//               <h5 className="font-semibold mb-2">Contact us</h5>
//               <ul className="space-y-1 text-sm text-gray-700">
//                 <li>📧 contact@company.com</li>
//                 <li>📞 (346) 687 - 5821</li>
//                 <li>📍 794 Mcallister St, San Francisco, 94102</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default DoctorDashboard;

"use client";
import React, { useState } from 'react';
import { Search, Mic, Camera, Calendar, Users, FileText, Brain, Bell, Settings, ChevronRight, Activity, Clock, Star, TrendingUp } from 'lucide-react';

const DoctorDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

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
                <p className="text-sm font-medium text-[#3B3B1A]">Dr. Alia Rahman</p>
                <p className="text-xs text-[#8A784E]">Cardiologist</p>
              </div>
              <div className="w-10 h-10 bg-[#8A784E] rounded-full flex items-center justify-center">
                <span className="text-[#E7EFC7] font-semibold">A</span>
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
              <span className="text-[#8A784E]">Dr. Alia</span>
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
      <footer className="bg-[#AEC8A4] mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-[#8A784E] rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-[#E7EFC7]" />
                </div>
                <h4 className="text-xl font-bold text-[#3B3B1A]">Healthease</h4>
              </div>
              <p className="text-[#8A784E] mb-4 max-w-md">
                Empowering healthcare professionals with intelligent tools for better patient care and streamlined workflows.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-[#8A784E]">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  <span className="text-sm">4.9/5 Rating</span>
                </div>
                <div className="flex items-center text-[#8A784E]">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span className="text-sm">99% Uptime</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-[#3B3B1A] mb-4">Product</h5>
              <ul className="space-y-2">
                {['Features', 'Pricing', 'Security', 'API'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[#8A784E] hover:text-[#3B3B1A] transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-[#3B3B1A] mb-4">Support</h5>
              <ul className="space-y-2">
                {['Help Center', 'Contact Us', 'Documentation', 'Community'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[#8A784E] hover:text-[#3B3B1A] transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#8A784E]/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#8A784E] text-sm">© 2024 Healthease. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-[#8A784E] hover:text-[#3B3B1A] text-sm">Privacy Policy</a>
              <a href="#" className="text-[#8A784E] hover:text-[#3B3B1A] text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DoctorDashboard;