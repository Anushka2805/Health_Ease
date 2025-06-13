// "use client";

// import React, { useState } from "react";
// import Link from 'next/link';

// export default function DoctorRegistration() {
//   const [fullName, setFullName] = useState("");
//   const [medicalRegNumber, setMedicalRegNumber] = useState("");
//   const [specialization, setSpecialization] = useState("");
//   const [experience, setExperience] = useState("");
//   const [qualification, setQualification] = useState("");
//   const [clinicName, setClinicName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log({
//       fullName,
//       medicalRegNumber,
//       specialization,
//       experience,
//       qualification,
//       clinicName,
//       email,
//       phone,
//     });
//     // TODO: integrate API or backend
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* Left form section */}
//       <div className="flex-1 bg-green-100 p-10 flex flex-col justify-center">
//         <h1 className="text-3xl font-bold mb-6">Welcome Dr. Shaivi</h1>
//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Full Name"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             className="p-2 rounded-full border border-gray-300 text-sm"
//             required
//           />

//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Medical Registration Number"
//               value={medicalRegNumber}
//               onChange={(e) => setMedicalRegNumber(e.target.value)}
//               className="p-2 rounded-full border border-gray-300 text-sm w-full"
//               required
//             />
//             {medicalRegNumber && (
//               <span className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-500 text-xs">
//                 Verified
//               </span>
//             )}
//           </div>

//           <input
//             type="text"
//             placeholder="Specialization"
//             value={specialization}
//             onChange={(e) => setSpecialization(e.target.value)}
//             className="p-2 rounded-full border border-gray-300 text-sm"
//             required
//           />

//           <input
//             type="number"
//             placeholder="Years of Experience"
//             value={experience}
//             onChange={(e) => setExperience(e.target.value)}
//             className="p-2 rounded-full border border-gray-300 text-sm"
//             required
//           />

//           <input
//             type="text"
//             placeholder="Latest Qualification"
//             value={qualification}
//             onChange={(e) => setQualification(e.target.value)}
//             className="p-2 rounded-full border border-gray-300 text-sm"
//             required
//           />

//           <input
//             type="text"
//             placeholder="Primary Clinic / Hospital Name"
//             value={clinicName}
//             onChange={(e) => setClinicName(e.target.value)}
//             className="p-2 rounded-full border border-gray-300 text-sm"
//             required
//           />

//           <div className="flex gap-2">
//             <label className="text-sm flex items-center">Official Email :</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="p-2 rounded-full border border-gray-300 text-sm flex-1"
//               required
//             />
//           </div>

//           <div className="flex gap-2">
//             <label className="text-sm flex items-center">
//               Official Phone Number :
//             </label>
//             <input
//               type="tel"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="p-2 rounded-full border border-gray-300 text-sm flex-1"
//               required
//             />
//           </div>
//             <Link href="/register">
//             <button
//             type="submit"
//             className="bg-[#3f3418] text-white py-2 rounded-full mt-2 hover:bg-[#2e2612]"
//           >
//             Complete Registration
//           </button>
//           </Link>
          
//         </form>
//       </div>

//       {/* Right privacy section */}
//       <div className="flex-1 bg-gradient-to-b from-[#b79859] to-[#94743c] text-white p-10 flex flex-col justify-center">
//         <h2 className="font-bold text-lg mb-4">Your privacy matters to us.</h2>
//         <p className="text-sm">
//           HealthEase verifies all doctors to ensure patient safety. Your details
//           will be securely stored and not shared without consent.
//         </p>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function DoctorRegistration() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
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

  const handleInputChange = (section, field, value) => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-indigo-300/40 to-blue-300/40 rounded-full blur-lg animate-pulse delay-2000"></div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-xl border-b border-white/20' 
          : 'bg-transparent'
      }`}>
        <div className="flex justify-between items-center px-6 lg:px-10 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Healthease
            </h1>
          </Link>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Already have an account?</span>
            <Link href="/login" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200">
              Sign In
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-24 pb-12 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-sm font-medium rounded-full px-6 py-3 mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              Doctor Registration
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Join Our Medical
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Community
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Become part of a revolutionary healthcare platform that empowers both doctors and patients
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-8">
              {[
                { step: 1, title: "Personal Info", icon: "👤" },
                { step: 2, title: "Professional Details", icon: "🏥" },
                { step: 3, title: "Verification", icon: "✅" }
              ].map((item, index) => (
                <div key={item.step} className="flex items-center">
                  <div className={`flex items-center space-x-3 ${
                    currentStep >= item.step ? 'text-blue-600' : 'text-gray-400'
                  }`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-all duration-300 ${
                      currentStep >= item.step 
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {currentStep > item.step ? '✓' : item.step}
                    </div>
                    <div className="hidden md:block">
                      <div className="text-sm font-medium">{item.title}</div>
                      <div className="text-2xl">{item.icon}</div>
                    </div>
                  </div>
                  {index < 2 && (
                    <div className={`w-20 h-1 mx-4 rounded-full transition-all duration-300 ${
                      currentStep > item.step ? 'bg-blue-500' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="p-8 lg:p-12">
              
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl font-bold text-gray-800 mb-8">Personal Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">First Name *</label>
                      <input
                        type="text"
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                          focusedField === 'firstName' 
                            ? 'border-blue-500 bg-blue-50/50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="Enter your first name"
                        onFocus={() => setFocusedField('firstName')}
                        onBlur={() => setFocusedField('')}
                        onChange={(e) => handleInputChange('personalInfo', 'firstName', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Last Name *</label>
                      <input
                        type="text"
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                          focusedField === 'lastName' 
                            ? 'border-blue-500 bg-blue-50/50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="Enter your last name"
                        onFocus={() => setFocusedField('lastName')}
                        onBlur={() => setFocusedField('')}
                        onChange={(e) => handleInputChange('personalInfo', 'lastName', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email Address *</label>
                      <input
                        type="email"
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                          focusedField === 'email' 
                            ? 'border-blue-500 bg-blue-50/50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="doctor@example.com"
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField('')}
                        onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone Number *</label>
                      <input
                        type="tel"
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                          focusedField === 'phone' 
                            ? 'border-blue-500 bg-blue-50/50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="+1 (555) 123-4567"
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField('')}
                        onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Address *</label>
                    <textarea
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 resize-none ${
                        focusedField === 'address' 
                          ? 'border-blue-500 bg-blue-50/50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      rows="3"
                      placeholder="Enter your complete address"
                      onFocus={() => setFocusedField('address')}
                      onBlur={() => setFocusedField('')}
                      onChange={(e) => handleInputChange('personalInfo', 'address', e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Professional Information */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl font-bold text-gray-800 mb-8">Professional Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Medical License Number *</label>
                      <input
                        type="text"
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                          focusedField === 'license' 
                            ? 'border-blue-500 bg-blue-50/50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="Enter license number"
                        onFocus={() => setFocusedField('license')}
                        onBlur={() => setFocusedField('')}
                        onChange={(e) => handleInputChange('professionalInfo', 'license', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Specialization *</label>
                      <select
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                          focusedField === 'specialization' 
                            ? 'border-blue-500 bg-blue-50/50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onFocus={() => setFocusedField('specialization')}
                        onBlur={() => setFocusedField('')}
                        onChange={(e) => handleInputChange('professionalInfo', 'specialization', e.target.value)}
                      >
                        <option value="">Select specialization</option>
                        <option value="cardiology">Cardiology</option>
                        <option value="dermatology">Dermatology</option>
                        <option value="neurology">Neurology</option>
                        <option value="pediatrics">Pediatrics</option>
                        <option value="psychiatry">Psychiatry</option>
                        <option value="general">General Medicine</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Years of Experience *</label>
                      <input
                        type="number"
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                          focusedField === 'experience' 
                            ? 'border-blue-500 bg-blue-50/50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="5"
                        min="0"
                        onFocus={() => setFocusedField('experience')}
                        onBlur={() => setFocusedField('')}
                        onChange={(e) => handleInputChange('professionalInfo', 'experience', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Hospital/Clinic Name *</label>
                      <input
                        type="text"
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                          focusedField === 'hospital' 
                            ? 'border-blue-500 bg-blue-50/50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="Enter hospital/clinic name"
                        onFocus={() => setFocusedField('hospital')}
                        onBlur={() => setFocusedField('')}
                        onChange={(e) => handleInputChange('professionalInfo', 'hospital', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Professional Bio</label>
                    <textarea
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 resize-none ${
                        focusedField === 'bio' 
                          ? 'border-blue-500 bg-blue-50/50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      rows="4"
                      placeholder="Tell us about your medical background and expertise..."
                      onFocus={() => setFocusedField('bio')}
                      onBlur={() => setFocusedField('')}
                      onChange={(e) => handleInputChange('professionalInfo', 'bio', e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Verification */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl font-bold text-gray-800 mb-8">Document Verification</h2>
                  
                  <div className="space-y-6">
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                      <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">Upload Medical License</h3>
                      <p className="text-gray-500 mb-4">Upload a clear image of your medical license (PDF, JPG, PNG)</p>
                      <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        Choose File
                      </button>
                    </div>
                    
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                      <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">Upload Profile Photo</h3>
                      <p className="text-gray-500 mb-4">Upload a professional headshot (JPG, PNG)</p>
                      <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        Choose File
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-6">
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-1">Verification Process</h4>
                        <p className="text-blue-700 text-sm">
                          Your documents will be reviewed within 24-48 hours. You'll receive an email confirmation once approved.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    currentStep === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  ← Previous
                </button>
                
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">
                    Step {currentStep} of 3
                  </span>
                  
                  {currentStep < 3 ? (
                    <button
                      onClick={nextStep}
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                      Next Step →
                    </button>
                  ) : (
                    <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-xl font-medium hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                      Complete Registration ✓
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Secure & Encrypted</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}