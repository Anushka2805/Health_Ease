"use client";
import React, { useState, useEffect } from "react";
import { User, Building2, FileCheck, ArrowLeft, ArrowRight, CheckCircle, Shield, Clock, Award } from "lucide-react";

interface PersonalInfo {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
}

interface ProfessionalInfo {
  license?: string;
  specialization?: string;
  experience?: string;
  hospital?: string;
  bio?: string;
}

interface Verification {
  medicalLicense?: File;
  photo?: File;
}

interface FormData {
  personalInfo: PersonalInfo;
  professionalInfo: ProfessionalInfo;
  verification: Verification;
}

export default function DoctorRegistration() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {},
    professionalInfo: {},
    verification: {}
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (section: keyof FormData, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // This is where you'd actually use the formData
    console.log('Form submitted:', formData);
    // Add your submission logic here
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #E7EFC7 0%, #AEC8A4 100%)' }}>
      {/* Organic background shapes */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full opacity-20 animate-pulse" style={{ background: 'radial-gradient(circle, #8A784E, #AEC8A4)' }}></div>
      <div className="absolute top-60 right-20 w-56 h-56 rounded-full opacity-15 animate-pulse" style={{ background: 'radial-gradient(circle, #3B3B1A, #8A784E)', animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-1/3 w-32 h-32 rounded-full opacity-25 animate-pulse" style={{ background: 'radial-gradient(circle, #AEC8A4, #E7EFC7)', animationDelay: '4s' }}></div>

      {/* Enhanced Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-xl shadow-2xl border-b' 
          : 'bg-transparent'
      }`} style={{ 
        backgroundColor: isScrolled ? 'rgba(231, 239, 199, 0.95)' : 'transparent',
        borderBottomColor: isScrolled ? '#AEC8A4' : 'transparent'
      }}>
        <div className="flex justify-between items-center px-6 lg:px-12 py-5">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #8A784E, #3B3B1A)' }}>
              <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#E7EFC7' }}></div>
            </div>
            <h1 className="text-3xl font-bold" style={{ color: '#3B3B1A' }}>
              Healthease
            </h1>
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="text-sm font-medium" style={{ color: '#8A784E' }}>Already registered?</span>
            <button className="px-8 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #8A784E, #3B3B1A)' }}>
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-28 pb-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 rounded-full text-sm font-semibold mb-8 shadow-lg" style={{ backgroundColor: 'rgba(138, 120, 78, 0.15)', color: '#3B3B1A' }}>
              <User className="w-5 h-5 mr-3" />
              Doctor Registration Portal
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#3B3B1A' }}>
              Join Our Elite
              <span className="block mt-2" style={{ background: 'linear-gradient(135deg, #8A784E, #AEC8A4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Medical Network
              </span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#8A784E' }}>
              Transform healthcare delivery with cutting-edge technology and join thousands of doctors providing exceptional patient care
            </p>
          </div>

          {/* Enhanced Progress Indicator */}
          <div className="mb-16">
            <div className="flex items-center justify-center space-x-12">
              {[
                { step: 1, title: "Personal Details", icon: User },
                { step: 2, title: "Professional Info", icon: Building2 },
                { step: 3, title: "Verification", icon: FileCheck }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="flex items-center">
                    <div className={`flex flex-col items-center space-y-3 transition-all duration-500 ${
                      currentStep >= item.step ? 'scale-110' : 'scale-100 opacity-60'
                    }`}>
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-xl transition-all duration-500 ${
                        currentStep >= item.step 
                          ? 'shadow-2xl transform rotate-3' 
                          : ''
                      }`} style={{ 
                        background: currentStep >= item.step 
                          ? 'linear-gradient(135deg, #8A784E, #3B3B1A)' 
                          : '#AEC8A4'
                      }}>
                        {currentStep > item.step ? <CheckCircle className="w-8 h-8" /> : <Icon className="w-8 h-8" />}
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold" style={{ color: currentStep >= item.step ? '#3B3B1A' : '#8A784E' }}>
                          Step {item.step}
                        </div>
                        <div className="text-xs font-medium" style={{ color: '#8A784E' }}>
                          {item.title}
                        </div>
                      </div>
                    </div>
                    {index < 2 && (
                      <div className={`w-24 h-1 mx-8 rounded-full transition-all duration-500 ${
                        currentStep > item.step ? 'shadow-md' : ''
                      }`} style={{ 
                        backgroundColor: currentStep > item.step ? '#8A784E' : '#AEC8A4'
                      }}></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enhanced Form Container */}
          <div className="rounded-3xl shadow-2xl border overflow-hidden backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderColor: '#AEC8A4' }}>
            <div className="p-12 lg:p-16">
              
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-8 animate-fade-in">
                  <div className="flex items-center space-x-4 mb-10">
                    <User className="w-8 h-8" style={{ color: '#8A784E' }} />
                    <h2 className="text-3xl font-bold" style={{ color: '#3B3B1A' }}>Personal Information</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { label: "First Name", field: "firstName", type: "text", placeholder: "Enter your first name" },
                      { label: "Last Name", field: "lastName", type: "text", placeholder: "Enter your last name" },
                      { label: "Email Address", field: "email", type: "email", placeholder: "doctor@example.com" },
                      { label: "Phone Number", field: "phone", type: "tel", placeholder: "+1 (555) 123-4567" }
                    ].map((input) => (
                      <div key={input.field} className="space-y-3">
                        <label className="block text-sm font-bold" style={{ color: '#3B3B1A' }}>
                          {input.label} <span style={{ color: '#8A784E' }}>*</span>
                        </label>
                        <input
                          type={input.type}
                          className={`w-full px-6 py-4 rounded-2xl border-2 font-medium transition-all duration-300 focus:outline-none ${
                            focusedField === input.field 
                              ? 'shadow-lg scale-105' 
                              : 'hover:shadow-md'
                          }`}
                          style={{ 
                            borderColor: focusedField === input.field ? '#8A784E' : '#AEC8A4',
                            backgroundColor: focusedField === input.field ? 'rgba(231, 239, 199, 0.3)' : 'white'
                          }}
                          placeholder={input.placeholder}
                          onFocus={() => setFocusedField(input.field)}
                          onBlur={() => setFocusedField('')}
                          onChange={(e) => handleInputChange('personalInfo', input.field, e.target.value)}
                        />
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-sm font-bold" style={{ color: '#3B3B1A' }}>
                      Complete Address <span style={{ color: '#8A784E' }}>*</span>
                    </label>
                    <textarea
                      className={`w-full px-6 py-4 rounded-2xl border-2 font-medium transition-all duration-300 focus:outline-none resize-none ${
                        focusedField === 'address' 
                          ? 'shadow-lg scale-105' 
                          : 'hover:shadow-md'
                      }`}
                      style={{ 
                        borderColor: focusedField === 'address' ? '#8A784E' : '#AEC8A4',
                        backgroundColor: focusedField === 'address' ? 'rgba(231, 239, 199, 0.3)' : 'white'
                      }}
                      rows={4}
                      placeholder="Enter your complete address including city, state, and postal code"
                      onFocus={() => setFocusedField('address')}
                      onBlur={() => setFocusedField('')}
                      onChange={(e) => handleInputChange('personalInfo', 'address', e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Professional Information */}
              {currentStep === 2 && (
                <div className="space-y-8 animate-fade-in">
                  <div className="flex items-center space-x-4 mb-10">
                    <Building2 className="w-8 h-8" style={{ color: '#8A784E' }} />
                    <h2 className="text-3xl font-bold" style={{ color: '#3B3B1A' }}>Professional Details</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="block text-sm font-bold" style={{ color: '#3B3B1A' }}>
                        Medical License Number <span style={{ color: '#8A784E' }}>*</span>
                      </label>
                      <input
                        type="text"
                        className={`w-full px-6 py-4 rounded-2xl border-2 font-medium transition-all duration-300 focus:outline-none ${
                          focusedField === 'license' 
                            ? 'shadow-lg scale-105' 
                            : 'hover:shadow-md'
                        }`}
                        style={{ 
                          borderColor: focusedField === 'license' ? '#8A784E' : '#AEC8A4',
                          backgroundColor: focusedField === 'license' ? 'rgba(231, 239, 199, 0.3)' : 'white'
                        }}
                        placeholder="Enter your license number"
                        onFocus={() => setFocusedField('license')}
                        onBlur={() => setFocusedField('')}
                        onChange={(e) => handleInputChange('professionalInfo', 'license', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <label className="block text-sm font-bold" style={{ color: '#3B3B1A' }}>
                        Medical Specialization <span style={{ color: '#8A784E' }}>*</span>
                      </label>
                      <select
                        className={`w-full px-6 py-4 rounded-2xl border-2 font-medium transition-all duration-300 focus:outline-none ${
                          focusedField === 'specialization' 
                            ? 'shadow-lg scale-105' 
                            : 'hover:shadow-md'
                        }`}
                        style={{ 
                          borderColor: focusedField === 'specialization' ? '#8A784E' : '#AEC8A4',
                          backgroundColor: focusedField === 'specialization' ? 'rgba(231, 239, 199, 0.3)' : 'white'
                        }}
                        onFocus={() => setFocusedField('specialization')}
                        onBlur={() => setFocusedField('')}
                        onChange={(e) => handleInputChange('professionalInfo', 'specialization', e.target.value)}
                      >
                        <option value="">Choose your specialization</option>
                        <option value="cardiology">Cardiology</option>
                        <option value="dermatology">Dermatology</option>
                        <option value="neurology">Neurology</option>
                        <option value="pediatrics">Pediatrics</option>
                        <option value="psychiatry">Psychiatry</option>
                        <option value="orthopedics">Orthopedics</option>
                        <option value="gynecology">Gynecology</option>
                        <option value="general">General Medicine</option>
                      </select>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="block text-sm font-bold" style={{ color: '#3B3B1A' }}>
                        Years of Experience <span style={{ color: '#8A784E' }}>*</span>
                      </label>
                      <input
                        type="number"
                        className={`w-full px-6 py-4 rounded-2xl border-2 font-medium transition-all duration-300 focus:outline-none ${
                          focusedField === 'experience' 
                            ? 'shadow-lg scale-105' 
                            : 'hover:shadow-md'
                        }`}
                        style={{ 
                          borderColor: focusedField === 'experience' ? '#8A784E' : '#AEC8A4',
                          backgroundColor: focusedField === 'experience' ? 'rgba(231, 239, 199, 0.3)' : 'white'
                        }}
                        placeholder="Years of practice"
                        min="0"
                        onFocus={() => setFocusedField('experience')}
                        onBlur={() => setFocusedField('')}
                        onChange={(e) => handleInputChange('professionalInfo', 'experience', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <label className="block text-sm font-bold" style={{ color: '#3B3B1A' }}>
                        Primary Hospital/Clinic <span style={{ color: '#8A784E' }}>*</span>
                      </label>
                      <input
                        type="text"
                        className={`w-full px-6 py-4 rounded-2xl border-2 font-medium transition-all duration-300 focus:outline-none ${
                          focusedField === 'hospital' 
                            ? 'shadow-lg scale-105' 
                            : 'hover:shadow-md'
                        }`}
                        style={{ 
                          borderColor: focusedField === 'hospital' ? '#8A784E' : '#AEC8A4',
                          backgroundColor: focusedField === 'hospital' ? 'rgba(231, 239, 199, 0.3)' : 'white'
                        }}
                        placeholder="Enter institution name"
                        onFocus={() => setFocusedField('hospital')}
                        onBlur={() => setFocusedField('')}
                        onChange={(e) => handleInputChange('professionalInfo', 'hospital', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-sm font-bold" style={{ color: '#3B3B1A' }}>
                      Professional Biography
                    </label>
                    <textarea
                      className={`w-full px-6 py-4 rounded-2xl border-2 font-medium transition-all duration-300 focus:outline-none resize-none ${
                        focusedField === 'bio' 
                          ? 'shadow-lg scale-105' 
                          : 'hover:shadow-md'
                      }`}
                      style={{ 
                        borderColor: focusedField === 'bio' ? '#8A784E' : '#AEC8A4',
                        backgroundColor: focusedField === 'bio' ? 'rgba(231, 239, 199, 0.3)' : 'white'
                      }}
                      rows={5}
                      placeholder="Share your medical background, expertise, achievements, and what drives your passion for healthcare..."
                      onFocus={() => setFocusedField('bio')}
                      onBlur={() => setFocusedField('')}
                      onChange={(e) => handleInputChange('professionalInfo', 'bio', e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Verification */}
              {currentStep === 3 && (
                <div className="space-y-8 animate-fade-in">
                  <div className="flex items-center space-x-4 mb-10">
                    <FileCheck className="w-8 h-8" style={{ color: '#8A784E' }} />
                    <h2 className="text-3xl font-bold" style={{ color: '#3B3B1A' }}>Document Verification</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="border-2 border-dashed rounded-3xl p-10 text-center transition-all duration-300 hover:shadow-lg group cursor-pointer" style={{ borderColor: '#AEC8A4' }}>
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(138, 120, 78, 0.1)' }}>
                        <FileCheck className="w-8 h-8" style={{ color: '#8A784E' }} />
                      </div>
                      <h3 className="text-xl font-bold mb-3" style={{ color: '#3B3B1A' }}>Medical License</h3>
                      <p className="text-sm mb-6 leading-relaxed" style={{ color: '#8A784E' }}>
                        Upload a clear, high-resolution image of your medical license
                      </p>
                      <button className="px-8 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #AEC8A4, #8A784E)' }}>
                        Upload License
                      </button>
                    </div>
                    
                    <div className="border-2 border-dashed rounded-3xl p-10 text-center transition-all duration-300 hover:shadow-lg group cursor-pointer" style={{ borderColor: '#AEC8A4' }}>
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(138, 120, 78, 0.1)' }}>
                        <User className="w-8 h-8" style={{ color: '#8A784E' }} />
                      </div>
                      <h3 className="text-xl font-bold mb-3" style={{ color: '#3B3B1A' }}>Professional Photo</h3>
                      <p className="text-sm mb-6 leading-relaxed" style={{ color: '#8A784E' }}>
                        Upload a professional headshot for your profile
                      </p>
                      <button className="px-8 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #AEC8A4, #8A784E)' }}>
                        Upload Photo
                      </button>
                    </div>
                  </div>
                  
                  <div className="rounded-2xl p-8" style={{ backgroundColor: 'rgba(174, 200, 164, 0.2)' }}>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(138, 120, 78, 0.2)' }}>
                        <Clock className="w-5 h-5" style={{ color: '#8A784E' }} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2" style={{ color: '#3B3B1A' }}>Verification Timeline</h4>
                        <p className="leading-relaxed" style={{ color: '#8A784E' }}>
                          Our medical verification team will review your credentials within 24-48 hours. 
                          You&apos;ll receive email updates throughout the process and full approval notification once complete.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Enhanced Navigation */}
              <div className="flex justify-between items-center mt-16 pt-10" style={{ borderTop: '2px solid #AEC8A4' }}>
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    currentStep === 1
                      ? 'cursor-not-allowed opacity-40'
                      : 'hover:shadow-lg transform hover:scale-105'
                  }`}
                  style={{ 
                    backgroundColor: currentStep === 1 ? '#AEC8A4' : 'white',
                    color: currentStep === 1 ? '#8A784E' : '#3B3B1A',
                    border: `2px solid ${currentStep === 1 ? '#AEC8A4' : '#8A784E'}`
                  }}
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Previous</span>
                </button>
                
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-sm font-medium" style={{ color: '#8A784E' }}>
                      Step {currentStep} of 3
                    </div>
                    <div className="text-xs" style={{ color: '#AEC8A4' }}>
                      {Math.round((currentStep / 3) * 100)}% Complete
                    </div>
                  </div>
                  
                  {currentStep < 3 ? (
                    <button
                      onClick={nextStep}
                      className="flex items-center space-x-3 px-10 py-4 rounded-2xl font-bold text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                      style={{ background: 'linear-gradient(135deg, #8A784E, #3B3B1A)' }}
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <button 
                      onClick={handleSubmit}
                      className="flex items-center space-x-3 px-10 py-4 rounded-2xl font-bold text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300" 
                      style={{ background: 'linear-gradient(135deg, #AEC8A4, #8A784E)' }}
                    >
                      <span>Complete Registration</span>
                      <CheckCircle className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Trust Section */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Shield, title: "Bank-Level Security", desc: "256-bit encryption & HIPAA compliance" },
                { icon: Award, title: "Trusted Platform", desc: "Used by 50,000+ healthcare professionals" },
                { icon: Clock, title: "Quick Approval", desc: "Most applications approved within 24 hours" }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex flex-col items-center space-y-4 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgba(138, 120, 78, 0.15)' }}>
                      <Icon className="w-7 h-7" style={{ color: '#8A784E' }} />
                    </div>
                    <h4 className="font-bold text-lg" style={{ color: '#3B3B1A' }}>{item.title}</h4>
                    <p className="text-sm text-center" style={{ color: '#8A784E' }}>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}