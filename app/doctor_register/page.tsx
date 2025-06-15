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
// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";

// export default function DoctorRegistration() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     personalInfo: {},
//     professionalInfo: {},
//     verification: {}
//   });
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [focusedField, setFocusedField] = useState('');

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

// //   const handleInputChange = (section, field, value) => {
// //     setFormData(prev => ({
// //       ...prev,
// //       [section]: {
// //         ...prev[section],
// //         [field]: value
// //       }
// //     }));
// //   };

//     type FormSection = 'personalInfo' | 'professionalInfo' | 'verification';

//     const handleInputChange = (
//     section: FormSection,
//     field: string,
//     value: any
//     ) => {
//     setFormData(prev => ({
//         ...prev,
//         [section]: {
//         ...prev[section],
//         [field]: value
//         }
//     }));
//     };

//   const nextStep = () => {
//     if (currentStep < 3) setCurrentStep(currentStep + 1);
//   };

//   const prevStep = () => {
//     if (currentStep > 1) setCurrentStep(currentStep - 1);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-xl animate-pulse"></div>
//       <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
//       <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-indigo-300/40 to-blue-300/40 rounded-full blur-lg animate-pulse delay-2000"></div>

//       {/* Header */}
//       <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         isScrolled 
//           ? 'bg-white/80 backdrop-blur-xl shadow-xl border-b border-white/20' 
//           : 'bg-transparent'
//       }`}>
//         <div className="flex justify-between items-center px-6 lg:px-10 py-4">
//           <Link href="/" className="flex items-center space-x-2">
//             <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
//               <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
//               </svg>
//             </div>
//             <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//               Healthease
//             </h1>
//           </Link>
          
//           <div className="flex items-center space-x-4">
//             <span className="text-sm text-gray-600">Already have an account?</span>
//             <Link href="/login" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200">
//               Log In
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className="pt-24 pb-12 px-6 lg:px-10">
//         <div className="max-w-4xl mx-auto">
//           {/* Header Section */}
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-sm font-medium rounded-full px-6 py-3 mb-6">
//               <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
//               </svg>
//               Doctor Registration
//             </div>
//             <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
//               Join Our Medical
//               <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                 Community
//               </span>
//             </h1>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Become part of a revolutionary healthcare platform that empowers both doctors and patients
//             </p>
//           </div>

//           {/* Progress Indicator */}
//           <div className="mb-12">
//             <div className="flex items-center justify-center space-x-8">
//               {[
//                 { step: 1, title: "Personal Info", icon: "👤" },
//                 { step: 2, title: "Professional Details", icon: "🏥" },
//                 { step: 3, title: "Verification", icon: "✅" }
//               ].map((item, index) => (
//                 <div key={item.step} className="flex items-center">
//                   <div className={`flex items-center space-x-3 ${
//                     currentStep >= item.step ? 'text-blue-600' : 'text-gray-400'
//                   }`}>
//                     <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-all duration-300 ${
//                       currentStep >= item.step 
//                         ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg' 
//                         : 'bg-gray-200 text-gray-500'
//                     }`}>
//                       {currentStep > item.step ? '✓' : item.step}
//                     </div>
//                     <div className="hidden md:block">
//                       <div className="text-sm font-medium">{item.title}</div>
//                       <div className="text-2xl">{item.icon}</div>
//                     </div>
//                   </div>
//                   {index < 2 && (
//                     <div className={`w-20 h-1 mx-4 rounded-full transition-all duration-300 ${
//                       currentStep > item.step ? 'bg-blue-500' : 'bg-gray-200'
//                     }`}></div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Form Container */}
//           <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
//             <div className="p-8 lg:p-12">
              
//               {/* Step 1: Personal Information */}
//               {currentStep === 1 && (
//                 <div className="space-y-6 animate-fade-in">
//                   <h2 className="text-2xl font-bold text-gray-800 mb-8">Personal Information</h2>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-gray-700">First Name *</label>
//                       <input
//                         type="text"
//                         className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
//                           focusedField === 'firstName' 
//                             ? 'border-blue-500 bg-blue-50/50' 
//                             : 'border-gray-200 hover:border-gray-300'
//                         }`}
//                         placeholder="Enter your first name"
//                         onFocus={() => setFocusedField('firstName')}
//                         onBlur={() => setFocusedField('')}
//                         onChange={(e) => handleInputChange('personalInfo', 'firstName', e.target.value)}
//                       />
//                     </div>
                    
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-gray-700">Last Name *</label>
//                       <input
//                         type="text"
//                         className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
//                           focusedField === 'lastName' 
//                             ? 'border-blue-500 bg-blue-50/50' 
//                             : 'border-gray-200 hover:border-gray-300'
//                         }`}
//                         placeholder="Enter your last name"
//                         onFocus={() => setFocusedField('lastName')}
//                         onBlur={() => setFocusedField('')}
//                         onChange={(e) => handleInputChange('personalInfo', 'lastName', e.target.value)}
//                       />
//                     </div>
                    
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-gray-700">Email Address *</label>
//                       <input
//                         type="email"
//                         className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
//                           focusedField === 'email' 
//                             ? 'border-blue-500 bg-blue-50/50' 
//                             : 'border-gray-200 hover:border-gray-300'
//                         }`}
//                         placeholder="doctor@example.com"
//                         onFocus={() => setFocusedField('email')}
//                         onBlur={() => setFocusedField('')}
//                         onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
//                       />
//                     </div>
                    
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-gray-700">Phone Number *</label>
//                       <input
//                         type="tel"
//                         className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
//                           focusedField === 'phone' 
//                             ? 'border-blue-500 bg-blue-50/50' 
//                             : 'border-gray-200 hover:border-gray-300'
//                         }`}
//                         placeholder="+1 (555) 123-4567"
//                         onFocus={() => setFocusedField('phone')}
//                         onBlur={() => setFocusedField('')}
//                         onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
//                       />
//                     </div>
//                   </div>
                  
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-gray-700">Address *</label>
//                     <textarea
//                       className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 resize-none ${
//                         focusedField === 'address' 
//                           ? 'border-blue-500 bg-blue-50/50' 
//                           : 'border-gray-200 hover:border-gray-300'
//                       }`}
//                       rows={3}
//                       placeholder="Enter your complete address"
//                       onFocus={() => setFocusedField('address')}
//                       onBlur={() => setFocusedField('')}
//                       onChange={(e) => handleInputChange('personalInfo', 'address', e.target.value)}
//                     />
//                   </div>
//                 </div>
//               )}

//               {/* Step 2: Professional Information */}
//               {currentStep === 2 && (
//                 <div className="space-y-6 animate-fade-in">
//                   <h2 className="text-2xl font-bold text-gray-800 mb-8">Professional Details</h2>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-gray-700">Medical License Number *</label>
//                       <input
//                         type="text"
//                         className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
//                           focusedField === 'license' 
//                             ? 'border-blue-500 bg-blue-50/50' 
//                             : 'border-gray-200 hover:border-gray-300'
//                         }`}
//                         placeholder="Enter license number"
//                         onFocus={() => setFocusedField('license')}
//                         onBlur={() => setFocusedField('')}
//                         onChange={(e) => handleInputChange('professionalInfo', 'license', e.target.value)}
//                       />
//                     </div>
                    
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-gray-700">Specialization *</label>
//                       <select
//                         className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
//                           focusedField === 'specialization' 
//                             ? 'border-blue-500 bg-blue-50/50' 
//                             : 'border-gray-200 hover:border-gray-300'
//                         }`}
//                         onFocus={() => setFocusedField('specialization')}
//                         onBlur={() => setFocusedField('')}
//                         onChange={(e) => handleInputChange('professionalInfo', 'specialization', e.target.value)}
//                       >
//                         <option value="">Select specialization</option>
//                         <option value="cardiology">Cardiology</option>
//                         <option value="dermatology">Dermatology</option>
//                         <option value="neurology">Neurology</option>
//                         <option value="pediatrics">Pediatrics</option>
//                         <option value="psychiatry">Psychiatry</option>
//                         <option value="general">General Medicine</option>
//                       </select>
//                     </div>
                    
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-gray-700">Years of Experience *</label>
//                       <input
//                         type="number"
//                         className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
//                           focusedField === 'experience' 
//                             ? 'border-blue-500 bg-blue-50/50' 
//                             : 'border-gray-200 hover:border-gray-300'
//                         }`}
//                         placeholder="5"
//                         min="0"
//                         onFocus={() => setFocusedField('experience')}
//                         onBlur={() => setFocusedField('')}
//                         onChange={(e) => handleInputChange('professionalInfo', 'experience', e.target.value)}
//                       />
//                     </div>
                    
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-gray-700">Hospital/Clinic Name *</label>
//                       <input
//                         type="text"
//                         className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
//                           focusedField === 'hospital' 
//                             ? 'border-blue-500 bg-blue-50/50' 
//                             : 'border-gray-200 hover:border-gray-300'
//                         }`}
//                         placeholder="Enter hospital/clinic name"
//                         onFocus={() => setFocusedField('hospital')}
//                         onBlur={() => setFocusedField('')}
//                         onChange={(e) => handleInputChange('professionalInfo', 'hospital', e.target.value)}
//                       />
//                     </div>
//                   </div>
                  
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-gray-700">Professional Bio</label>
//                     <textarea
//                       className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 resize-none ${
//                         focusedField === 'bio' 
//                           ? 'border-blue-500 bg-blue-50/50' 
//                           : 'border-gray-200 hover:border-gray-300'
//                       }`}
//                       rows={4}
//                       placeholder="Tell us about your medical background and expertise..."
//                       onFocus={() => setFocusedField('bio')}
//                       onBlur={() => setFocusedField('')}
//                       onChange={(e) => handleInputChange('professionalInfo', 'bio', e.target.value)}
//                     />
//                   </div>
//                 </div>
//               )}

//               {/* Step 3: Verification */}
//               {currentStep === 3 && (
//                 <div className="space-y-6 animate-fade-in">
//                   <h2 className="text-2xl font-bold text-gray-800 mb-8">Document Verification</h2>
                  
//                   <div className="space-y-6">
//                     <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
//                       <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
//                       </svg>
//                       <h3 className="text-lg font-semibold text-gray-700 mb-2">Upload Medical License</h3>
//                       <p className="text-gray-500 mb-4">Upload a clear image of your medical license (PDF, JPG, PNG)</p>
//                       <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
//                         Choose File
//                       </button>
//                     </div>
                    
//                     <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
//                       <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                       </svg>
//                       <h3 className="text-lg font-semibold text-gray-700 mb-2">Upload Profile Photo</h3>
//                       <p className="text-gray-500 mb-4">Upload a professional headshot (JPG, PNG)</p>
//                       <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
//                         Choose File
//                       </button>
//                     </div>
//                   </div>
                  
//                   <div className="bg-blue-50 rounded-xl p-6">
//                     <div className="flex items-start space-x-3">
//                       <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
//                       </svg>
//                       <div>
//                         <h4 className="font-semibold text-blue-800 mb-1">Verification Process</h4>
//                         <p className="text-blue-700 text-sm">
//                           Your documents will be reviewed within 24-48 hours. You'll receive an email confirmation once approved.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Navigation Buttons */}
//               <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
//                 <button
//                   onClick={prevStep}
//                   disabled={currentStep === 1}
//                   className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
//                     currentStep === 1
//                       ? 'text-gray-400 cursor-not-allowed'
//                       : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
//                   }`}
//                 >
//                   ← Previous
//                 </button>
                
//                 <div className="flex items-center space-x-4">
//                   <span className="text-sm text-gray-500">
//                     Step {currentStep} of 3
//                   </span>
                  
//                   {currentStep < 3 ? (
//                     <button
//                       onClick={nextStep}
//                       className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
//                     >
//                       Next Step →
//                     </button>
//                   ) : (
//                     <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-xl font-medium hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
//                       Complete Registration ✓
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Trust Indicators */}
//           <div className="mt-12 text-center">
//             <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
//               <div className="flex items-center space-x-2">
//                 <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
//                 </svg>
//                 <span>Secure & Encrypted</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                 </svg>
//                 <span>HIPAA Compliant</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <span>24/7 Support</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fade-in {
//           animation: fade-in 0.5s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";
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
                          You'll receive email updates throughout the process and full approval notification once complete.
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
                    <button className="flex items-center space-x-3 px-10 py-4 rounded-2xl font-bold text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #AEC8A4, #8A784E)' }}>
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