// "use client";

// import React, { useState } from "react";
// import Link from "next/link";

// export default function LoginPage() {
//   const [aadhaar, setAadhaar] = useState<string>("");
//   const [otp, setOtp] = useState<string>("");
//   const [password, setPassword] = useState<string>("");

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Login data:", { aadhaar, otp, password });
//     // TODO: Add login logic
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#b7c7a3] to-[#6b572f] font-sans">
//       <div className="bg-white p-10 rounded-lg shadow-lg w-80 flex flex-col">
//         <h1 className="text-center text-2xl font-bold mb-5">Welcome Back</h1>
//         <form onSubmit={handleLogin} className="flex flex-col">
//           <input
//             type="text"
//             placeholder="Aadhaar Number"
//             value={aadhaar}
//             onChange={(e) => setAadhaar(e.target.value)}
//             className="mb-3 p-2 border border-gray-400 rounded-full text-sm outline-none"
//             required
//           />
//           <input
//             type="text"
//             placeholder="OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             className="mb-3 p-2 border border-gray-400 rounded-full text-sm outline-none"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="mb-3 p-2 border border-gray-400 rounded-full text-sm outline-none"
//             required
//           />
//           <button
//             type="submit"
//             className="bg-[#3f3418] text-white py-2 rounded-full mt-2 hover:bg-[#2e2612] transition-colors"
//           >
//             LOGIN
//           </button>
//         </form>
//         <p className="text-center text-sm mt-3">
//           Don&apos;t have an account?{" "}
//           <Link href="/register" className="text-blue-600 underline">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Shield, Fingerprint, Lock } from "lucide-react";

export default function LoginPage() {
  const [aadhaar, setAadhaar] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<string>("patient");

  const handleLogin = () => {
    setIsLoading(true);
    console.log("Login data:", { aadhaar, otp, password, userRole });
    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main login container */}
      <div className="relative w-full max-w-md">
        {/* Glassmorphism card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden group hover:shadow-purple-500/25 transition-all duration-700">
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          
          {/* Header */}
          <div className="text-center mb-8 relative z-10">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
              Welcome Back
            </h1>
            <p className="text-gray-300 text-sm">
              Secure access to your account
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6 relative z-10">
            {/* Role Selection */}
            <div className="flex bg-white/10 rounded-2xl p-1 backdrop-blur-sm">
              <button
                onClick={() => setUserRole("patient")}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                  userRole === "patient"
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Patient
              </button>
              <button
                onClick={() => setUserRole("doctor")}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                  userRole === "doctor"
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Doctor
              </button>
            </div>
            {/* Aadhaar Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Fingerprint className="h-5 w-5 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
              </div>
              <input
                type="text"
                placeholder="Aadhaar Number"
                value={aadhaar}
                onChange={(e) => setAadhaar(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/20 rounded-2xl text-gray-900 placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/30 transition-all duration-300 backdrop-blur-sm hover:bg-white/25 font-medium"
                required
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-focus-within:from-purple-500/20 group-focus-within:via-transparent group-focus-within:to-cyan-500/20 transition-all duration-500 pointer-events-none"></div>
            </div>

            {/* OTP Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
              </div>
              <input
                type="text"
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/20 rounded-2xl text-gray-900 placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/30 transition-all duration-300 backdrop-blur-sm hover:bg-white/25 font-medium"
                required
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-focus-within:from-purple-500/20 group-focus-within:via-transparent group-focus-within:to-cyan-500/20 transition-all duration-500 pointer-events-none"></div>
            </div>

            {/* Password Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-white/20 border border-white/20 rounded-2xl text-gray-900 placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/30 transition-all duration-300 backdrop-blur-sm hover:bg-white/25 font-medium"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors duration-300"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-focus-within:from-purple-500/20 group-focus-within:via-transparent group-focus-within:to-cyan-500/20 transition-all duration-500 pointer-events-none"></div>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-[1.02] hover:from-purple-500 hover:to-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              <span className="relative z-10 flex items-center justify-center space-x-2">
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Signing In...</span>
                  </>
                ) : (
                  <span>LOGIN</span>
                )}
              </span>
            </button>
          </div>

          {/* Register link */}
          <div className="text-center mt-8 relative z-10">
            <p className="text-gray-300 text-sm">
              Don't have an account?{" "}
              <Link 
                href="/register" 
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 hover:from-purple-300 hover:to-cyan-300 font-semibold transition-all duration-300 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-purple-500/30 rounded-full animate-ping"></div>
        <div className="absolute -bottom-4 -right-4 w-6 h-6 border-2 border-cyan-500/30 rounded-full animate-ping"></div>
      </div>
    </div>
  );
}