// "use client";

// import React, { useState } from "react";
// import Link from 'next/link';

// export default function PatientRegistration() {
//   const [gender, setGender] = useState("");
//   const [dob, setDob] = useState("");
//   const [bloodGroup, setBloodGroup] = useState("");
//   const [dietType, setDietType] = useState("");
//   const [activityLevel, setActivityLevel] = useState("");
//   const [smokingAlcohol, setSmokingAlcohol] = useState("");
//   const [chronicConditions, setChronicConditions] = useState("");
//   const [allergies, setAllergies] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log({
//       gender,
//       dob,
//       bloodGroup,
//       dietType,
//       activityLevel,
//       smokingAlcohol,
//       chronicConditions,
//       allergies,
//     });
//     // TODO: handle API call
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* Left section */}
//       <div className="flex-1 bg-green-100 p-10 flex flex-col justify-center">
//         <h1 className="text-3xl font-bold mb-6">Welcome Shaivi</h1>
//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           <select
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//             className="p-2 rounded-full border border-gray-300 text-sm"
//             required
//           >
//             <option value="">Gender</option>
//             <option>Female</option>
//             <option>Male</option>
//             <option>Other</option>
//           </select>

//           <input
//             type="date"
//             value={dob}
//             onChange={(e) => setDob(e.target.value)}
//             className="p-2 rounded-full border border-gray-300 text-sm"
//             placeholder="DOB"
//             required
//           />

//           <select
//             value={bloodGroup}
//             onChange={(e) => setBloodGroup(e.target.value)}
//             className="p-2 rounded-full border border-gray-300 text-sm"
//             required
//           >
//             <option value="">Blood Group</option>
//             <option>A+</option>
//             <option>A-</option>
//             <option>B+</option>
//             <option>B-</option>
//             <option>AB+</option>
//             <option>AB-</option>
//             <option>O+</option>
//             <option>O-</option>
//           </select>

//           <select
//             value={dietType}
//             onChange={(e) => setDietType(e.target.value)}
//             className="p-2 rounded-full border border-gray-300 text-sm"
//             required
//           >
//             <option value="">Diet Type</option>
//             <option>Vegetarian</option>
//             <option>Non-Vegetarian</option>
//             <option>Vegan</option>
//           </select>

//           <select
//             value={activityLevel}
//             onChange={(e) => setActivityLevel(e.target.value)}
//             className="p-2 rounded-full border border-gray-300 text-sm"
//             required
//           >
//             <option value="">Physical Activity Level</option>
//             <option>Sedentary</option>
//             <option>Moderate</option>
//             <option>Active</option>
//           </select>

//           <select
//             value={smokingAlcohol}
//             onChange={(e) => setSmokingAlcohol(e.target.value)}
//             className="p-2 rounded-full border border-gray-300 text-sm"
//             required
//           >
//             <option value="">Smoking / Alcohol</option>
//             <option>No</option>
//             <option>Yes - Occasionally</option>
//             <option>Yes - Regularly</option>
//           </select>

//           <input
//             type="text"
//             value={chronicConditions}
//             onChange={(e) => setChronicConditions(e.target.value)}
//             placeholder="Chronic Conditions"
//             className="p-2 rounded-full border border-gray-300 text-sm"
//           />

//           <input
//             type="text"
//             value={allergies}
//             onChange={(e) => setAllergies(e.target.value)}
//             placeholder="Allergies"
//             className="p-2 rounded-full border border-gray-300 text-sm"
//           />
//           <Link href="/after_login">
//             <button
//               type="submit"
//               className="bg-[#3f3418] text-white py-2 rounded-full mt-2 hover:bg-[#2e2612]"
//             >
//               Complete Registration
//             </button>
//           </Link>
//         </form>
//       </div>

//       {/* Right section */}
//       <div className="flex-1 bg-gradient-to-b from-[#b79859] to-[#94743c] text-white p-10 flex flex-col justify-center">
//         <h2 className="font-bold text-lg mb-4">Your privacy matters to us.</h2>
//         <p className="text-sm">
//           All your health data is encrypted and stored securely. Only you and
//           the doctors you choose to share it with can access your information.
//           HealthEase will never sell your data or use it for marketing without
//           your explicit consent. You are in control of your health records —
//           anytime, anywhere.
//         </p>
//       </div>
//     </div>
//   );
// }



// "use client";
// import React, { useState } from "react";
// import Link from 'next/link';
// import { User, Calendar, Droplets, UtensilsCrossed, Activity, Cigarette, Heart, AlertTriangle, Shield, Lock, CheckCircle, Sparkles } from "lucide-react";

// export default function PatientRegistration() {
//   const [gender, setGender] = useState("");
//   const [dob, setDob] = useState("");
//   const [bloodGroup, setBloodGroup] = useState("");
//   const [dietType, setDietType] = useState("");
//   const [activityLevel, setActivityLevel] = useState("");
//   const [smokingAlcohol, setSmokingAlcohol] = useState("");
//   const [chronicConditions, setChronicConditions] = useState("");
//   const [allergies, setAllergies] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     console.log({
//       gender,
//       dob,
//       bloodGroup,
//       dietType,
//       activityLevel,
//       smokingAlcohol,
//       chronicConditions,
//       allergies,
//     });
//     // Simulate API call
//     setTimeout(() => setIsSubmitting(false), 2000);
//   };

//   const formFields = [
//     { value: gender, setter: setGender, icon: User, label: "Gender" },
//     { value: dob, setter: setDob, icon: Calendar, label: "Date of Birth", type: "date" },
//     { value: bloodGroup, setter: setBloodGroup, icon: Droplets, label: "Blood Group" },
//     { value: dietType, setter: setDietType, icon: UtensilsCrossed, label: "Diet Type" },
//     { value: activityLevel, setter: setActivityLevel, icon: Activity, label: "Activity Level" },
//     { value: smokingAlcohol, setter: setSmokingAlcohol, icon: Cigarette, label: "Smoking/Alcohol" }
//   ];

//   const getFieldProgress = () => {
//     const totalFields = 8;
//     const filledFields = [gender, dob, bloodGroup, dietType, activityLevel, smokingAlcohol, chronicConditions, allergies].filter(field => field !== "").length;
//     return (filledFields / totalFields) * 100;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-xl animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-48 h-48 bg-cyan-200/20 rounded-full blur-2xl animate-pulse"></div>
//         <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-blue-200/25 rounded-full blur-xl animate-pulse"></div>
        
//         {/* Floating icons */}
//         {[...Array(12)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute opacity-10 animate-bounce"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${2 + Math.random() * 2}s`
//             }}
//           >
//             <Heart className="w-4 h-4 text-emerald-500" />
//           </div>
//         ))}
//       </div>

//       <div className="flex min-h-screen relative z-10">
//         {/* Left section - Form */}
//         <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
//           <div className="max-w-2xl mx-auto w-full">
//             {/* Header */}
//             <div className="text-center mb-8">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl mb-4 transform hover:scale-110 transition-transform duration-300">
//                 <Sparkles className="w-8 h-8 text-white" />
//               </div>
//               <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-2">
//                 Welcome Shaivi
//               </h1>
//               <p className="text-gray-600 text-lg">Complete your health profile to get started</p>
//             </div>

//             {/* Progress Bar */}
//             <div className="mb-8">
//               <div className="flex items-center justify-between mb-2">
//                 <span className="text-sm font-medium text-gray-700">Profile Completion</span>
//                 <span className="text-sm font-semibold text-emerald-600">{Math.round(getFieldProgress())}%</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//                 <div 
//                   className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
//                   style={{ width: `${getFieldProgress()}%` }}
//                 >
//                   <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Form */}
//             <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-8 border border-white/50 shadow-xl">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 {/* Gender */}
//                 <div className="relative group">
//                   <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-300" />
//                   <select
//                     value={gender}
//                     onChange={(e) => setGender(e.target.value)}
//                     className="w-full pl-12 pr-4 py-4 bg-white/80 border border-gray-200 rounded-2xl text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 hover:bg-white/90"
//                     required
//                   >
//                     <option value="">Select Gender</option>
//                     <option value="Female">Female</option>
//                     <option value="Male">Male</option>
//                     <option value="Other">Other</option>
//                   </select>
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-focus-within:from-emerald-500/10 group-focus-within:to-cyan-500/10 transition-all duration-300 pointer-events-none"></div>
//                 </div>

//                 {/* Date of Birth */}
//                 <div className="relative group">
//                   <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-300" />
//                   <input
//                     type="date"
//                     value={dob}
//                     onChange={(e) => setDob(e.target.value)}
//                     className="w-full pl-12 pr-4 py-4 bg-white/80 border border-gray-200 rounded-2xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 hover:bg-white/90"
//                     required
//                   />
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-focus-within:from-emerald-500/10 group-focus-within:to-cyan-500/10 transition-all duration-300 pointer-events-none"></div>
//                 </div>

//                 {/* Blood Group */}
//                 <div className="relative group">
//                   <Droplets className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-300" />
//                   <select
//                     value={bloodGroup}
//                     onChange={(e) => setBloodGroup(e.target.value)}
//                     className="w-full pl-12 pr-4 py-4 bg-white/80 border border-gray-200 rounded-2xl text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 hover:bg-white/90"
//                     required
//                   >
//                     <option value="">Select Blood Group</option>
//                     <option value="A+">A+</option>
//                     <option value="A-">A-</option>
//                     <option value="B+">B+</option>
//                     <option value="B-">B-</option>
//                     <option value="AB+">AB+</option>
//                     <option value="AB-">AB-</option>
//                     <option value="O+">O+</option>
//                     <option value="O-">O-</option>
//                   </select>
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-focus-within:from-emerald-500/10 group-focus-within:to-cyan-500/10 transition-all duration-300 pointer-events-none"></div>
//                 </div>

//                 {/* Diet Type */}
//                 <div className="relative group">
//                   <UtensilsCrossed className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-300" />
//                   <select
//                     value={dietType}
//                     onChange={(e) => setDietType(e.target.value)}
//                     className="w-full pl-12 pr-4 py-4 bg-white/80 border border-gray-200 rounded-2xl text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 hover:bg-white/90"
//                     required
//                   >
//                     <option value="">Select Diet Type</option>
//                     <option value="Vegetarian">Vegetarian</option>
//                     <option value="Non-Vegetarian">Non-Vegetarian</option>
//                     <option value="Vegan">Vegan</option>
//                   </select>
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-focus-within:from-emerald-500/10 group-focus-within:to-cyan-500/10 transition-all duration-300 pointer-events-none"></div>
//                 </div>

//                 {/* Activity Level */}
//                 <div className="relative group">
//                   <Activity className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-300" />
//                   <select
//                     value={activityLevel}
//                     onChange={(e) => setActivityLevel(e.target.value)}
//                     className="w-full pl-12 pr-4 py-4 bg-white/80 border border-gray-200 rounded-2xl text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 hover:bg-white/90"
//                     required
//                   >
//                     <option value="">Physical Activity Level</option>
//                     <option value="Sedentary">Sedentary</option>
//                     <option value="Moderate">Moderate</option>
//                     <option value="Active">Active</option>
//                   </select>
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-focus-within:from-emerald-500/10 group-focus-within:to-cyan-500/10 transition-all duration-300 pointer-events-none"></div>
//                 </div>

//                 {/* Smoking/Alcohol */}
//                 <div className="relative group">
//                   <Cigarette className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-300" />
//                   <select
//                     value={smokingAlcohol}
//                     onChange={(e) => setSmokingAlcohol(e.target.value)}
//                     className="w-full pl-12 pr-4 py-4 bg-white/80 border border-gray-200 rounded-2xl text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 hover:bg-white/90"
//                     required
//                   >
//                     <option value="">Smoking / Alcohol</option>
//                     <option value="No">No</option>
//                     <option value="Yes - Occasionally">Yes - Occasionally</option>
//                     <option value="Yes - Regularly">Yes - Regularly</option>
//                   </select>
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-focus-within:from-emerald-500/10 group-focus-within:to-cyan-500/10 transition-all duration-300 pointer-events-none"></div>
//                 </div>
//               </div>

//               {/* Text Inputs */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                 <div className="relative group">
//                   <Heart className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-300" />
//                   <input
//                     type="text"
//                     value={chronicConditions}
//                     onChange={(e) => setChronicConditions(e.target.value)}
//                     placeholder="Chronic Conditions (Optional)"
//                     className="w-full pl-12 pr-4 py-4 bg-white/80 border border-gray-200 rounded-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 hover:bg-white/90"
//                   />
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-focus-within:from-emerald-500/10 group-focus-within:to-cyan-500/10 transition-all duration-300 pointer-events-none"></div>
//                 </div>

//                 <div className="relative group">
//                   <AlertTriangle className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-300" />
//                   <input
//                     type="text"
//                     value={allergies}
//                     onChange={(e) => setAllergies(e.target.value)}
//                     placeholder="Allergies (Optional)"
//                     className="w-full pl-12 pr-4 py-4 bg-white/80 border border-gray-200 rounded-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 hover:bg-white/90"
//                   />
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-focus-within:from-emerald-500/10 group-focus-within:to-cyan-500/10 transition-all duration-300 pointer-events-none"></div>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <Link href="/after_login">
//                 <div
//                   onClick={handleSubmit}
//                   className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer relative overflow-hidden group"
//                 >
//                   <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
//                   <span className="relative z-10 flex items-center justify-center space-x-2">
//                     {isSubmitting ? (
//                       <>
//                         <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                         <span>Creating Profile...</span>
//                       </>
//                     ) : (
//                       <>
//                         <CheckCircle className="w-5 h-5" />
//                         <span>Complete Registration</span>
//                       </>
//                     )}
//                   </span>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Right section - Privacy Info */}
//         <div className="flex-1 bg-gradient-to-br from-emerald-600 via-cyan-600 to-blue-600 text-white p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
//           {/* Background decorations */}
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full"></div>
//             <div className="absolute bottom-20 left-10 w-24 h-24 border border-white/20 rounded-full"></div>
//             <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
//           </div>

//           <div className="relative z-10 max-w-lg">
//             <div className="flex items-center mb-6">
//               <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
//                 <Shield className="w-6 h-6 text-white" />
//               </div>
//               <h2 className="font-bold text-2xl">Your Privacy Matters</h2>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-start space-x-4">
//                 <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
//                   <Lock className="w-4 h-4 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-2">End-to-End Encryption</h3>
//                   <p className="text-white/90 text-sm leading-relaxed">
//                     Your health data is encrypted with military-grade security before it leaves your device.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
//                   <User className="w-4 h-4 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-2">You Control Access</h3>
//                   <p className="text-white/90 text-sm leading-relaxed">
//                     Only you and doctors you explicitly approve can access your information.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
//                   <Heart className="w-4 h-4 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-2">Never Sold or Shared</h3>
//                   <p className="text-white/90 text-sm leading-relaxed">
//                     HealthEase will never sell your data or use it for marketing without your consent.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8 p-4 bg-white/10 rounded-2xl border border-white/20">
//               <p className="text-sm text-white/90 italic">
//                 "Your health records are available anytime, anywhere — completely under your control."
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import Link from 'next/link';
import { User, Calendar, Droplets, UtensilsCrossed, Activity, Cigarette, Heart, AlertTriangle, Shield, Lock, CheckCircle, Sparkles } from "lucide-react";

export default function PatientRegistration() {
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [dietType, setDietType] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [smokingAlcohol, setSmokingAlcohol] = useState("");
  const [chronicConditions, setChronicConditions] = useState("");
  const [allergies, setAllergies] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    console.log({
      gender,
      dob,
      bloodGroup,
      dietType,
      activityLevel,
      smokingAlcohol,
      chronicConditions,
      allergies,
    });
    // Simulate API call
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  const getFieldProgress = () => {
    const totalFields = 8;
    const filledFields = [gender, dob, bloodGroup, dietType, activityLevel, smokingAlcohol, chronicConditions, allergies].filter(field => field !== "").length;
    return (filledFields / totalFields) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-cyan-200/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-blue-200/25 rounded-full blur-xl animate-pulse"></div>
        
        {/* Floating icons */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <Heart className="w-4 h-4 text-emerald-500" />
          </div>
        ))}
      </div>

      <div className="flex min-h-screen relative z-10 flex-col lg:flex-row">
        {/* Left section - Form */}
        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-2xl mx-auto w-full">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl mb-4 transform hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                Welcome Shaivi
              </h1>
              <p className="text-gray-600 text-lg">Complete your health profile to get started</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Profile Completion</span>
                <span className="text-sm font-semibold text-emerald-600">{Math.round(getFieldProgress())}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
                  style={{ width: `${getFieldProgress()}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-8 border border-white/50 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Gender */}
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-300" />
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/80 border border-gray-200 rounded-2xl text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 hover:bg-white/90"
                  >
                    <option value="">Select Gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-focus-within:from-emerald-500/10 group-focus-within:to-cyan-500/10 transition-all duration-300 pointer-events-none"></div>
                </div>

                {/* Date of Birth */}
                <div className="relative group">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-300" />
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/80 border border-gray-200 rounded-2xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 hover:bg-white/90"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-focus-within:from-emerald-500/10 group-focus-within:to-cyan-500/10 transition-all duration-300 pointer-events-none"></div>
                </div>

                {/* Blood Group */}
                <div className="relative group">
                  <Droplets className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-300" />
                  <select
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/80 border border-gray-200 rounded-2xl text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 hover:bg-white/90"
                  >
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-focus-within:from-emerald-500/10 group-focus-within:to-cyan-500/10 transition-all duration-300 pointer-events-none"></div>
                </div>

                {/* Diet Type */}
                <div className="relative group">
                  <UtensilsCrossed className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-300" />
                  <select
                    value={dietType}
                    onChange={(e) => setDietType(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/80 border border-gray-200 rounded-2xl text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 hover:bg-white/90"
                  >
                    <option value="">Select Diet Type</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Non-Vegetarian">Non-Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                  </select>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-focus-within:from-emerald-500/10 group-focus-within:to-cyan-500/10 transition-all duration-300 pointer-events-none"></div>
                </div>

                {/* Activity Level */}
                <div className="relative group">
                  <Activity className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-300" />
                  <select
                    value={activityLevel}
                    onChange={(e) => setActivityLevel(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/80 border border-gray-200 rounded-2xl text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 hover:bg-white/90"
                  >
                    <option value="">Physical Activity Level</option>
                    <option value="Sedentary">Sedentary</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Active">Active</option>
                  </select>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-focus-within:from-emerald-500/10 group-focus-within:to-cyan-500/10 transition-all duration-300 pointer-events-none"></div>
                </div>

                {/* Smoking/Alcohol */}
                <div className="relative group">
                  <Cigarette className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-300" />
                  <select
                    value={smokingAlcohol}
                    onChange={(e) => setSmokingAlcohol(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/80 border border-gray-200 rounded-2xl text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 hover:bg-white/90"
                  >
                    <option value="">Smoking / Alcohol</option>
                    <option value="No">No</option>
                    <option value="Yes - Occasionally">Yes - Occasionally</option>
                    <option value="Yes - Regularly">Yes - Regularly</option>
                  </select>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-focus-within:from-emerald-500/10 group-focus-within:to-cyan-500/10 transition-all duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Text Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="relative group">
                  <Heart className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-300" />
                  <input
                    type="text"
                    value={chronicConditions}
                    onChange={(e) => setChronicConditions(e.target.value)}
                    placeholder="Chronic Conditions (Optional)"
                    className="w-full pl-12 pr-4 py-4 bg-white/80 border border-gray-200 rounded-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 hover:bg-white/90"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-focus-within:from-emerald-500/10 group-focus-within:to-cyan-500/10 transition-all duration-300 pointer-events-none"></div>
                </div>

                <div className="relative group">
                  <AlertTriangle className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-300" />
                  <input
                    type="text"
                    value={allergies}
                    onChange={(e) => setAllergies(e.target.value)}
                    placeholder="Allergies (Optional)"
                    className="w-full pl-12 pr-4 py-4 bg-white/80 border border-gray-200 rounded-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 hover:bg-white/90"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-focus-within:from-emerald-500/10 group-focus-within:to-cyan-500/10 transition-all duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Submit Button */}
              <div
                onClick={handleSubmit}
                className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Creating Profile...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Complete Registration</span>
                    </>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right section - Privacy Info */}
        <div className="flex-1 bg-gradient-to-br from-emerald-600 via-cyan-600 to-blue-600 text-white p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-20 left-10 w-24 h-24 border border-white/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
          </div>

          <div className="relative z-10 max-w-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-bold text-2xl">Your Privacy Matters</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Lock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">End-to-End Encryption</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Your health data is encrypted with military-grade security before it leaves your device.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">You Control Access</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Only you and doctors you explicitly approve can access your information.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Never Sold or Shared</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    HealthEase will never sell your data or use it for marketing without your consent.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/10 rounded-2xl border border-white/20">
              <p className="text-sm text-white/90 italic">
                "Your health records are available anytime, anywhere — completely under your control."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}