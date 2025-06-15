// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function RegisterPage() {
//   const [aadhaar, setAadhaar] = useState<string>("");
//   const [otp, setOtp] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [isDoctor, setIsDoctor] = useState<boolean>(false);

//   const router = useRouter();

//   const handleRegister = (e: React.FormEvent) => {
//     e.preventDefault();

//     console.log(isDoctor ? "Doctor registration" : "Patient registration", {
//       aadhaar,
//       otp,
//       password,
//     });

//     // TODO: Replace this with your real registration API call
//     setTimeout(() => {
//       if (isDoctor) {
//         router.push("/doctor_register"); // Example route after doctor registration
//       } else {
//         router.push("/patient_register"); // Example route after patient registration
//       }
//     }, 500);
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-[#b7c7a3] to-[#6b572f] font-sans">
//       <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col w-[350px]">
//         <h1 className="text-xl font-bold text-center mb-4">
//           {isDoctor ? "Register as Doctor" : "Register as Patient"}
//         </h1>
//         <form onSubmit={handleRegister} className="flex flex-col">
//           <input
//             type="text"
//             placeholder="Aadhaar Number"
//             value={aadhaar}
//             onChange={(e) => setAadhaar(e.target.value)}
//             className="mb-3 p-2 border border-gray-300 rounded-full text-sm outline-none"
//             required
//           />
//           <div className="flex justify-between mb-1">
//             <button
//               type="button"
//               className="text-xs text-[#3f3418] underline"
//             >
//               Generate OTP
//             </button>
//             <button
//               type="button"
//               className="text-xs text-[#3f3418] underline"
//             >
//               Resend OTP
//             </button>
//           </div>
//           <input
//             type="text"
//             placeholder="OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             className="mb-3 p-2 border border-gray-300 rounded-full text-sm outline-none"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="mb-3 p-2 border border-gray-300 rounded-full text-sm outline-none"
//             required
//           />
//           <button
//             type="submit"
//             className="bg-[#3f3418] text-white py-2 rounded-full hover:bg-[#2e2612] mt-2"
//           >
//             REGISTER
//           </button>
//         </form>
//         <p className="text-xs text-center mt-2">
//           {isDoctor ? "Want to register as Patient?" : "Want to register as Doctor?"}{" "}
//           <button
//             className="text-[#3f3418] underline"
//             onClick={() => setIsDoctor(!isDoctor)}
//           >
//             Switch
//           </button>
//         </p>
//         <p className="text-xs text-center mt-2">
//           Already have an account?{" "}
//           <Link href="/login" className="text-[#3f3418] underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
// import Link from "next/link";

import { User, UserCheck, Shield, Eye, EyeOff, Phone, Lock, CreditCard } from "lucide-react";

export default function RegisterPage() {
  const [aadhaar, setAadhaar] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [isDoctor, setIsDoctor] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    console.log(isDoctor ? "Doctor registration" : "Patient registration", {
      aadhaar,
      otp,
      password,
    });

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (isDoctor) {
        console.log("Redirecting to doctor dashboard");
      } else {
        console.log("Redirecting to patient dashboard");
      }
    }, 2000);
  };

  const handleGenerateOTP = () => {
    if (aadhaar.length === 12) {
      setOtpSent(true);
      console.log("OTP sent to registered mobile number");
    }
  };

  const formatAadhaar = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,4})(\d{0,4})(\d{0,4})$/);
    if (match) {
      return [match[1], match[2], match[3]].filter(Boolean).join(' ');
    }
    return cleaned;
  };

  const handleAadhaarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatAadhaar(e.target.value);
    if (formatted.replace(/\s/g, '').length <= 12) {
      setAadhaar(formatted);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{background: 'linear-gradient(135deg, #E7EFC7 0%, #AEC8A4 50%, #8A784E 100%)'}}
    >
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 shadow-lg"
            style={{background: 'linear-gradient(135deg, #8A784E, #3B3B1A)'}}
          >
            {isDoctor ? (
              <UserCheck className="w-8 h-8 text-white" />
            ) : (
              <User className="w-8 h-8 text-white" />
            )}
          </div>
          <h1 className="text-3xl font-bold mb-2" style={{color: '#3B3B1A'}}>
            {isDoctor ? "Doctor Registration" : "Patient Registration"}
          </h1>
          <p style={{color: '#8A784E'}}>
            {isDoctor ? "Join as a healthcare provider" : "Create your patient account"}
          </p>
        </div>

        {/* Registration Form */}
        <div 
          className="bg-white rounded-2xl shadow-xl p-8"
          style={{backgroundColor: '#FEFFFE', borderColor: '#E7EFC7', borderWidth: '2px'}}
        >
          <div className="space-y-6">
            {/* Aadhaar Input */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold" style={{color: '#3B3B1A'}}>
                Aadhaar Number
              </label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{color: '#8A784E'}} />
                <input
                  type="text"
                  placeholder="0000 0000 0000"
                  value={aadhaar}
                  onChange={handleAadhaarChange}
                  className="w-full pl-10 pr-4 py-3 rounded-xl transition-all duration-200 text-lg tracking-wider focus:outline-none focus:ring-2"
                  style={{
                    border: '2px solid #AEC8A4',
                    backgroundColor: '#FEFFFE',
                    color: '#3B3B1A'
                  }}
                  required
                />
              </div>
            </div>

            {/* OTP Section */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleGenerateOTP}
                  disabled={aadhaar.replace(/\s/g, '').length !== 12}
                  className="flex-1 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(135deg, #AEC8A4, #8A784E)',
                  }}
                >
                  <Phone className="w-4 h-4 inline mr-2" />
                  Generate OTP
                </button>
                
                {otpSent && (
                  <button
                    type="button"
                    onClick={() => console.log("Resending OTP...")}
                    className="px-6 py-3 rounded-xl font-semibold transition-all duration-200"
                    style={{
                      border: '2px solid #8A784E',
                      color: '#8A784E',
                      backgroundColor: '#E7EFC7'
                    }}
                  >
                    Resend
                  </button>
                )}
              </div>

              {otpSent && (
                <div 
                  className="rounded-xl p-4"
                  style={{backgroundColor: '#E7EFC7', borderColor: '#AEC8A4', borderWidth: '1px'}}
                >
                  <p className="text-sm font-medium" style={{color: '#3B3B1A'}}>
                    ✓ OTP sent to your registered mobile number
                  </p>
                </div>
              )}

              <div className="space-y-2">
                <label className="block text-sm font-semibold" style={{color: '#3B3B1A'}}>
                  Enter OTP
                </label>
                <div className="relative">
                  <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{color: '#8A784E'}} />
                  <input
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className="w-full pl-10 pr-4 py-3 rounded-xl transition-all duration-200 text-lg tracking-widest text-center focus:outline-none focus:ring-2"
                    style={{
                      border: '2px solid #AEC8A4',
                      backgroundColor: '#FEFFFE',
                      color: '#3B3B1A'
                    }}
                    maxLength={6}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold" style={{color: '#3B3B1A'}}>
                Create Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{color: '#8A784E'}} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2"
                  style={{
                    border: '2px solid #AEC8A4',
                    backgroundColor: '#FEFFFE',
                    color: '#3B3B1A'
                  }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors"
                  style={{color: '#8A784E'}}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              onClick={handleRegister}
              disabled={isLoading}
              className="w-full text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              style={{
                background: 'linear-gradient(135deg, #8A784E, #3B3B1A)',
              }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Creating Account...
                </div>
              ) : (
                "REGISTER"
              )}
            </button>
          </div>
        </div>

        {/* Role Switch */}
        <div className="mt-6 text-center">
          <div 
            className="bg-white rounded-xl p-4 shadow-lg"
            style={{backgroundColor: '#FEFFFE', borderColor: '#E7EFC7', borderWidth: '2px'}}
          >
            <p className="mb-3" style={{color: '#8A784E'}}>
              {isDoctor ? "Want to register as a Patient?" : "Want to register as a Doctor?"}
            </p>
            <button
              onClick={() => setIsDoctor(!isDoctor)}
              className="inline-flex items-center px-6 py-2 rounded-full font-semibold transition-all duration-200"
              style={{
                border: '2px solid #8A784E',
                color: '#8A784E',
                backgroundColor: '#E7EFC7'
              }}
            >
              {isDoctor ? <User className="w-4 h-4 mr-2" /> : <UserCheck className="w-4 h-4 mr-2" />}
              Switch to {isDoctor ? "Patient" : "Doctor"}
            </button>
          </div>
        </div>

        {/* Login Link */}
        <div className="mt-4 text-center">
          <p style={{color: '#8A784E'}}>
            Already have an account?{" "}
            <button 
              className="font-semibold transition-colors" 
              style={{color: '#3B3B1A'}}
            >
              Login here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}