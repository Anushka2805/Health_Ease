// import React from "react";
// import Link from "next/link";

// export default function App() {
//   return (
//     <div className="bg-[#f5f6ef] min-h-screen font-sans">
//       {/* Navbar */}
//       <header className="flex justify-between items-center px-10 py-6">
//         <h1 className="text-2xl font-bold">Healthease</h1>
//         <nav className="flex gap-6 items-center">
//           <Link href="#" className="text-[#1e1e1e] font-medium">Home</Link>
//           <Link href="#" className="text-[#1e1e1e] font-medium">About Us</Link>
//           <Link href="#" className="text-[#1e1e1e] font-medium">How to use</Link>
//           <Link href="/login">
//             <button className="bg-[#e6ebd9] text-sm px-4 py-2 rounded-full font-semibold">Login</button>
//           </Link>
//           <Link href="/register">
//             <button className="bg-[#e6ebd9] text-sm px-4 py-2 rounded-full font-semibold">Register</button>
//           </Link>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section className="px-10 py-12 flex flex-col md:flex-row justify-between items-center gap-10">
//         <div className="md:w-1/2">
//           <div className="inline-block bg-[#d6d4b6] text-sm rounded-full px-3 py-1 mb-4">
//             Health Matters
//           </div>
//           <h2 className="text-4xl font-bold leading-snug">
//             More than Records.<br />
//             <span className="text-[#7f6b39]">It’s Your Health Story</span>
//           </h2>
//           <div className="mt-6 flex items-center rounded-full bg-[#e6ebd9] p-2 shadow-inner">
//             <input
//               type="text"
//               placeholder="Search your report"
//               className="bg-transparent flex-1 outline-none px-2"
//             />
//             <button className="bg-[#3f3a1e] text-white rounded-full w-8 h-8 flex items-center justify-center mr-1">
//               <span className="sr-only">Upload</span>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5 5 5M12 15V3" />
//               </svg>
//             </button>
//             <button className="bg-[#3f3a1e] text-white rounded-full w-8 h-8 flex items-center justify-center">
//               <span className="sr-only">Search</span>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//         <div className="md:w-1/2">
//           <img
//             src="https://t3.ftcdn.net/jpg/06/44/85/72/360_F_644857286_zVtIH5KLEYR4mhDLcrbPl5ZYnuuUYurA.jpg"
//             alt="Doctor illustration"
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//       </section>

//       {/* What We Offer */}
//       <section className="px-10 py-12">
//         <div className="bg-[#e6ebd9] inline-block px-4 py-2 rounded-full font-medium mb-6">
//           WHAT WE OFFER
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-[#a3b38c] rounded-lg p-6 shadow-lg">
//             <h4 className="font-bold mb-2">Digital Health Records for Patients</h4>
//             <p className="text-sm mb-4">Patients can log in to view appointments, prescriptions, and health alerts — all in one place.</p>
//             <button className="bg-[#3f3a1e] text-white text-xs px-4 py-2 rounded-full">EXPLORE THIS FEATURE</button>
//           </div>
//           <div className="bg-[#a3b38c] rounded-lg p-6 shadow-lg">
//             <h4 className="font-bold mb-2">AI Symptom Chatbot</h4>
//             <p className="text-sm mb-4">The chatbot gives instant advice for minor issues (like cough or fatigue), including home remedies.</p>
//             <button className="bg-[#3f3a1e] text-white text-xs px-4 py-2 rounded-full">EXPLORE THIS FEATURE</button>
//           </div>
//           <div className="bg-[#a3b38c] rounded-lg p-6 shadow-lg">
//             <h4 className="font-bold mb-2">Smart Reminders</h4>
//             <p className="text-sm mb-4">Automatic alerts for appointments, vaccinations, or missed checkups via email or mobile.</p>
//             <button className="bg-[#3f3a1e] text-white text-xs px-4 py-2 rounded-full">EXPLORE THIS FEATURE</button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#e6ebd9] py-8 px-10 mt-10 text-sm">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           <div>
//             <h3 className="font-bold mb-2">Healthease</h3>
//             <p className="mb-2 text-xs">More than records. It’s your healthstory</p>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-2">Product</h4>
//             <ul className="space-y-1">
//               <li>Features</li>
//               <li>Pricing</li>
//               <li>Case studies</li>
//               <li>Reviews</li>
//               <li>Updates</li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-2">Company</h4>
//             <ul className="space-y-1">
//               <li>About</li>
//               <li>Contact us</li>
//               <li>Careers</li>
//               <li>Culture</li>
//               <li>Blog</li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-2">Support</h4>
//             <ul className="space-y-1">
//               <li>Getting started</li>
//               <li>Help center</li>
//               <li>Server status</li>
//               <li>Report a bug</li>
//               <li>Chat support</li>
//             </ul>
//             <h4 className="font-semibold mt-4 mb-2">Contact us</h4>
//             <p>📧contact@healthease.com</p>
//             <p>📞 (+91) 48392-93013</p>
//             <p>📍 New Delhi, India</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

"use client"
import React, { useState, useEffect } from "react";
import { Heart, Search, Upload, Menu, X, Shield, Clock, Users, ChevronRight, Star, Play } from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#f5f6ef] via-[#f8f9f2] to-[#f2f4eb] min-h-screen font-sans">
      {/* Navbar */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] bg-clip-text text-transparent">
                Healthease
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-[#7f6b39] transition-colors font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-[#7f6b39] transition-colors font-medium">About Us</a>
              <a href="#" className="text-gray-700 hover:text-[#7f6b39] transition-colors font-medium">How to use</a>
              <div className="flex items-center space-x-3">
                <a href="/login" className="text-[#7f6b39] hover:text-[#5d4c29] transition-colors font-semibold">
                  Login
                </a>
                <a href="/register" className="bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-semibold">
                  Register
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4 pt-4">
                <a href="#" className="text-gray-700 hover:text-[#7f6b39] transition-colors">Home</a>
                <a href="#" className="text-gray-700 hover:text-[#7f6b39] transition-colors">About Us</a>
                <a href="#" className="text-gray-700 hover:text-[#7f6b39] transition-colors">How to use</a>
                <div className="flex flex-col space-y-2 pt-2">
                  <a href="/login" className="text-[#7f6b39] font-semibold text-left">Login</a>
                  <a href="/register" className="bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] text-white px-4 py-2 rounded-full text-center">
                    Register
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center bg-gradient-to-r from-[#d6d4b6] to-[#e2e0c3] text-sm rounded-full px-4 py-2 shadow-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Health Matters
              </div>
              
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                  More than Records.
                </h2>
                <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] bg-clip-text text-transparent">
                    It's Your Health Story
                  </span>
                </h2>
              </div>

              <p className="text-lg text-gray-600 max-w-lg">
                Transform your healthcare experience with AI-powered insights, seamless record management, and personalized health monitoring.
              </p>

              {/* Enhanced Search Bar */}
              <div className="relative">
                <div className="flex items-center bg-white rounded-2xl p-3 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <input
                    type="text"
                    placeholder="Search your health records..."
                    className="flex-1 outline-none px-4 py-2 text-gray-700 placeholder-gray-400"
                  />
                  <div className="flex items-center space-x-2">
                    <button className="bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] text-white p-3 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 group">
                      <Upload className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                    <button className="bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] text-white p-3 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 group">
                      <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#7f6b39]">50K+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#7f6b39]">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#7f6b39]">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7f6b39]/20 to-[#a3b38c]/20 rounded-3xl blur-2xl"></div>
                <img
                  src="https://t3.ftcdn.net/jpg/06/44/85/72/360_F_644857286_zVtIH5KLEYR4mhDLcrbPl5ZYnuuUYurA.jpg"
                  alt="Doctor illustration"
                  className="relative rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 border-4 border-white"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 animate-pulse">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Health Status: Good</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="text-sm font-medium">Heart Rate: 72 BPM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-medium text-gray-700">HIPAA Compliant</div>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-medium text-gray-700">24/7 Access</div>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-medium text-gray-700">Expert Team</div>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-sm font-medium text-gray-700">5-Star Rated</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-[#e6ebd9] to-[#f0f4e8] px-6 py-3 rounded-full font-medium mb-6 shadow-sm">
              <span className="text-[#7f6b39] font-semibold">WHAT WE OFFER</span>
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Everything you need for better health
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare solutions designed to keep you healthy and informed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Health Records for Patients",
                description: "Patients can log in to view appointments, prescriptions, and health alerts — all in one secure, easy-to-use platform.",
                icon: "📋",
                gradient: "from-[#a3b38c] to-[#8ea278]"
              },
              {
                title: "AI Symptom Chatbot",
                description: "Get instant, personalized advice for minor health issues with our advanced AI chatbot, available 24/7 for your convenience.",
                icon: "🤖",
                gradient: "from-[#7f6b39] to-[#6b5a32]"
              },
              {
                title: "Smart Reminders",
                description: "Never miss important health appointments or medications with intelligent, customizable reminders via email and mobile.",
                icon: "⏰",
                gradient: "from-[#a3b38c] to-[#8ea278]"
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-white/20`}>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h4 className="font-bold text-xl mb-4 text-white">{feature.title}</h4>
                  <p className="text-white/90 mb-6 leading-relaxed">{feature.description}</p>
                  <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-200 font-semibold flex items-center space-x-2 group-hover:shadow-lg">
                    <span>EXPLORE THIS FEATURE</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#7f6b39] to-[#a3b38c]">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to take control of your health?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users who trust Healthease with their healthcare management
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/register" className="bg-white text-[#7f6b39] px-8 py-4 rounded-full font-bold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center space-x-2">
              <span>Get Started Free</span>
              <ChevronRight className="w-5 h-5" />
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#7f6b39] transition-all duration-200 flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#e6ebd9] to-[#f0f4e8] py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#7f6b39] to-[#a3b38c] bg-clip-text text-transparent">
                  Healthease
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                More than records. It's your health story. Experience the future of healthcare management.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors cursor-pointer"></div>
                <div className="w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors cursor-pointer"></div>
                <div className="w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors cursor-pointer"></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-800 mb-6">Product</h4>
              <ul className="space-y-3">
                {['Features', 'Pricing', 'Case studies', 'Reviews', 'Updates'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-[#7f6b39] transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-800 mb-6">Company</h4>
              <ul className="space-y-3">
                {['About', 'Contact us', 'Careers', 'Culture', 'Blog'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-[#7f6b39] transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-800 mb-6">Support</h4>
              <ul className="space-y-3 mb-6">
                {['Getting started', 'Help center', 'Server status', 'Report a bug', 'Chat support'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-[#7f6b39] transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
              
              <h4 className="font-bold text-gray-800 mb-4">Contact us</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center space-x-2">
                  <span>📧</span>
                  <a href="mailto:contact@healthease.com" className="hover:text-[#7f6b39] transition-colors">
                    contact@healthease.com
                  </a>
                </p>
                <p className="flex items-center space-x-2">
                  <span>📞</span>
                  <a href="tel:+914839293013" className="hover:text-[#7f6b39] transition-colors">
                    (+91) 48392-93013
                  </a>
                </p>
                <p className="flex items-center space-x-2">
                  <span>📍</span>
                  <span>New Delhi, India</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-300 mt-12 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2025 Healthease. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}