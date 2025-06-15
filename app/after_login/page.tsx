"use client";
import React, { useState, useEffect } from "react";
import {Heart} from "lucide-react";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#E7EFC7] via-[#AEC8A4] to-[#8A784E] min-h-screen font-sans relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#E7EFC7]/40 to-[#AEC8A4]/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-[#AEC8A4]/30 to-[#8A784E]/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-[#8A784E]/40 to-[#3B3B1A]/30 rounded-full blur-lg animate-pulse delay-2000"></div>
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-[#E7EFC7]/50 to-[#AEC8A4]/40 rounded-full blur-md animate-pulse delay-3000"></div>

      {/* Top Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#E7EFC7]/90 backdrop-blur-xl shadow-xl border-b border-[#AEC8A4]/30' 
          : 'bg-transparent'
      }`}>
        <div className="flex justify-between items-center px-6 lg:px-10 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#8A784E] to-[#3B3B1A] rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
              <svg className="w-6 h-6 text-[#E7EFC7]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#8A784E] to-[#3B3B1A] bg-clip-text text-transparent">
              Healthease
            </h1>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { href: "/pro_pat", label: "Profile" },
              { href: "/medication", label: "Medication" },
              { href: "/prescription", label: "Prescription" },
              { href: "/download-summary", label: "Summary" },
              { href: "/logout", label: "Logout" }
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href} 
                className="relative font-medium text-[#3B3B1A] hover:text-[#8A784E] transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8A784E] to-[#3B3B1A] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button className="lg:hidden p-2 rounded-lg hover:bg-[#AEC8A4]/20 transition-colors">
            <svg className="w-6 h-6 text-[#3B3B1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 lg:px-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center bg-gradient-to-r from-[#E7EFC7] to-[#AEC8A4] text-[#3B3B1A] text-sm font-medium rounded-full px-6 py-3 mb-6 shadow-lg border border-[#AEC8A4]/30">
                  <span className="w-2 h-2 bg-[#8A784E] rounded-full mr-3 animate-pulse"></span>
                  Health Matters
                </div>
                
                <h2 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                  <span className="block text-[#3B3B1A] mb-2">More than</span>
                  <span className="block bg-gradient-to-r from-[#8A784E] via-[#3B3B1A] to-[#8A784E] bg-clip-text text-transparent">
                    Records.
                  </span>
                </h2>
                
                <p className="text-xl text-[#3B3B1A]/80 mb-8 leading-relaxed max-w-lg">
                  It&#39;s Your Complete Health Story - Intelligently organized, beautifully presented, and always accessible.
                </p>
              </div>

              <div className={`relative transition-all duration-300 ${searchFocused ? 'scale-105' : ''}`}>
                <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-[#AEC8A4]/30 hover:shadow-[#8A784E]/20 hover:shadow-2xl transition-all duration-300">
                  <svg className="w-5 h-5 text-[#8A784E] ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search your reports, medications, or health data..."
                    className="bg-transparent flex-1 outline-none px-4 py-2 text-[#3B3B1A] placeholder-[#8A784E]/60"
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                  />
                  <button className="bg-gradient-to-r from-[#8A784E] to-[#3B3B1A] text-[#E7EFC7] rounded-xl px-8 py-3 font-medium hover:from-[#3B3B1A] hover:to-[#8A784E] transform hover:scale-105 transition-all duration-200 shadow-lg">
                    Search
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 bg-gradient-to-br from-[#8A784E] to-[#3B3B1A] rounded-full border-3 border-white flex items-center justify-center text-[#E7EFC7] text-xs font-bold shadow-lg">
                        {i}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-[#3B3B1A]/70 font-medium">Trusted by 10,000+ patients</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-[#AEC8A4]/30 to-[#8A784E]/20 rounded-3xl blur-3xl opacity-60 animate-pulse"></div>
                <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-2xl">
                  <div className="aspect-square bg-gradient-to-br from-[#E7EFC7]/80 to-[#AEC8A4]/60 rounded-2xl flex items-center justify-center shadow-inner">
                    <img
                  src="https://t3.ftcdn.net/jpg/06/44/85/72/360_F_644857286_zVtIH5KLEYR4mhDLcrbPl5ZYnuuUYurA.jpg"
                  alt="Doctor illustration"
                  width={600}
                  height={400}
                  className="relative rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 border-4 border-white"
                />
                  </div>
                  {/* Floating mini cards */}
                  <div className="absolute -top-4 -right-4 bg-white/90 rounded-2xl p-3 shadow-lg border border-[#AEC8A4]/30 animate-pulse delay-500">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#8A784E] to-[#3B3B1A] rounded-lg flex items-center justify-center">
                      <span className="text-xs text-[#E7EFC7] font-bold">AI</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-white/90 rounded-2xl p-4 shadow-lg border border-[#AEC8A4]/30 animate-pulse delay-1000">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-[#8A784E] rounded-full"></div>
                      <div className="w-3 h-3 bg-[#AEC8A4] rounded-full"></div>
                      <div className="w-3 h-3 bg-[#E7EFC7] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 lg:px-10 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-[#E7EFC7] to-[#AEC8A4] text-[#3B3B1A] text-sm font-medium rounded-full px-6 py-3 mb-6 shadow-lg border border-[#AEC8A4]/30">
              <span className="w-2 h-2 bg-[#8A784E] rounded-full mr-3 animate-pulse"></span>
              WHAT WE OFFER
            </div>
            <h3 className="text-4xl font-bold text-[#3B3B1A] mb-4">
              Revolutionizing Your Health Journey
            </h3>
            <p className="text-xl text-[#3B3B1A]/80 max-w-2xl mx-auto">
              Experience the future of healthcare management with our AI-powered platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Health Record Organizer",
                description: "Securely store and access all your medical records in one organized, intelligent timeline with AI-powered insights.",
                icon: "",
                gradient: "from-[#E7EFC7] to-[#AEC8A4]",
                accent: "[#8A784E]"
              },
              {
                title: "AI-Powered Symptom Checker",
                description: "Describe your symptoms and get instant, intelligent suggestions powered by advanced medical AI algorithms.",
                icon: "",
                gradient: "from-[#AEC8A4] to-[#8A784E]",
                accent: "[#3B3B1A]"
              },
              {
                title: "Smart Reminders & Alerts",
                description: "Never miss important health milestones with personalized, context-aware reminders and notifications.",
                icon: "",
                gradient: "from-[#8A784E] to-[#3B3B1A]",
                accent: "[#E7EFC7]"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#AEC8A4]/30 hover:shadow-2xl hover:shadow-[#8A784E]/10 transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h4 className="text-xl font-bold text-[#3B3B1A] mb-4">{feature.title}</h4>
                  <p className="text-[#3B3B1A]/80 mb-6 leading-relaxed">{feature.description}</p>
                  <button className={`bg-gradient-to-r ${feature.gradient} text-[#3B3B1A] px-6 py-3 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 border border-[#AEC8A4]/30`}>
                    Explore Feature
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 lg:px-10 py-16 relative">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-12 border border-white/30 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "10,000+", label: "Active Users", icon: "" },
                { number: "50,000+", label: "Records Managed", icon: "" },
                { number: "99.9%", label: "Uptime", icon: "" },
                { number: "24/7", label: "Support", icon: "" }
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-3xl">{stat.icon}</div>
                  <div className="text-3xl font-bold text-[#3B3B1A]">{stat.number}</div>
                  <div className="text-[#3B3B1A]/80 font-medium">{stat.label}</div>
                </div>
              ))}
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

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}