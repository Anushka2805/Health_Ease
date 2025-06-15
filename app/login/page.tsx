"use client";
import React, { useState, useEffect } from "react";
import { Eye, EyeOff, Shield, Fingerprint, Lock, Leaf } from "lucide-react";
import Link from "next/link";

interface FloatingElement {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  rotation: number;
}

export default function LoginPage() {
  const [aadhaar, setAadhaar] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<string>("patient");
  const [loginError, setLoginError] = useState<string>("");
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);

  // Generate floating elements only on client side to avoid hydration mismatch
  useEffect(() => {
    const elements = [...Array(8)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
      rotation: Math.random() * 360,
    }));
    setFloatingElements(elements);
  }, []);

  const handleAadhaarChange = (value: string) => {
    // Remove non-digit chars and limit to 12 digits
    const cleaned = value.replace(/\D/g, "").slice(0, 12);
    setAadhaar(cleaned);
    setLoginError(""); // Clear error on edit
  };

  const handleLogin = () => {
    if (aadhaar.length !== 12) {
      setLoginError("Please enter full 12-digit Aadhaar number");
      return;
    }
    setIsLoading(true);
    setLoginError(""); // Clear previous error
    console.log("Login data:", { aadhaar, otp, password, userRole });
    // Simulate no user found
    setTimeout(() => {
      setIsLoading(false);
      setLoginError("No user found");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3B3B1A] via-[#8A784E] to-[#3B3B1A] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#AEC8A4] rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#E7EFC7] rounded-full mix-blend-overlay filter blur-2xl opacity-15 animate-pulse"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#8A784E] rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      {/* Floating organic elements - only render after client-side mount */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute animate-float"
            style={{
              left: `${element.left}%`,
              top: `${element.top}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            <Leaf 
              className="w-4 h-4 text-[#E7EFC7] opacity-20 transform rotate-12" 
              style={{ transform: `rotate(${element.rotation}deg)` }}
            />
          </div>
        ))}
      </div>

      {/* Main login container */}
      <div className="relative w-full max-w-md">
        {/* Natural glassmorphism card */}
        <div className="backdrop-blur-xl bg-[#E7EFC7]/20 border border-[#E7EFC7]/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden group hover:shadow-[#AEC8A4]/20 transition-all duration-700">
          {/* Subtle shimmer effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 bg-gradient-to-r from-transparent via-[#E7EFC7]/10 to-transparent"></div>
          
          {/* Header */}
          <div className="text-center mb-8 relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-[#AEC8A4] to-[#8A784E] rounded-2xl mx-auto mb-4 flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-lg">
              <Shield className="w-10 h-10 text-[#E7EFC7]" />
            </div>
            <h1 className="text-3xl font-bold text-[#E7EFC7] mb-2 tracking-tight">
              Welcome Back
            </h1>
            <p className="text-[#AEC8A4] text-sm">
              Your health, secured naturally
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6 relative z-10">
            {/* Role Selection */}
            <div className="flex bg-[#3B3B1A]/30 rounded-2xl p-1 backdrop-blur-sm border border-[#8A784E]/20">
              <button
                onClick={() => setUserRole("patient")}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                  userRole === "patient"
                    ? "bg-gradient-to-r from-[#AEC8A4] to-[#8A784E] text-[#3B3B1A] shadow-lg"
                    : "text-[#AEC8A4] hover:text-[#E7EFC7] hover:bg-[#8A784E]/20"
                }`}
              >
                Patient
              </button>
              <button
                onClick={() => setUserRole("doctor")}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                  userRole === "doctor"
                    ? "bg-gradient-to-r from-[#AEC8A4] to-[#8A784E] text-[#3B3B1A] shadow-lg"
                    : "text-[#AEC8A4] hover:text-[#E7EFC7] hover:bg-[#8A784E]/20"
                }`}
              >
                Doctor
              </button>
            </div>

            {/* Aadhaar Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Fingerprint className="h-5 w-5 text-[#8A784E] group-focus-within:text-[#AEC8A4] transition-colors duration-300" />
              </div>
              <input
              type="text"
              placeholder="Aadhaar Number"
              value={aadhaar}
              onChange={(e) => handleAadhaarChange(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-[#E7EFC7]/30 border border-[#AEC8A4]/30 rounded-2xl text-[#3B3B1A] placeholder-[#8A784E] focus:outline-none focus:border-[#AEC8A4] focus:bg-[#E7EFC7]/40 transition-all duration-300 backdrop-blur-sm hover:bg-[#E7EFC7]/35 font-medium"
              required
            />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#AEC8A4]/0 via-[#AEC8A4]/0 to-[#8A784E]/0 group-focus-within:from-[#AEC8A4]/20 group-focus-within:via-transparent group-focus-within:to-[#8A784E]/20 transition-all duration-500 pointer-events-none"></div>
            </div>

            {/* OTP Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-[#8A784E] group-focus-within:text-[#AEC8A4] transition-colors duration-300" />
              </div>
              <input
                type="text"
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-[#E7EFC7]/30 border border-[#AEC8A4]/30 rounded-2xl text-[#3B3B1A] placeholder-[#8A784E] focus:outline-none focus:border-[#AEC8A4] focus:bg-[#E7EFC7]/40 transition-all duration-300 backdrop-blur-sm hover:bg-[#E7EFC7]/35 font-medium"
                required
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#AEC8A4]/0 via-[#AEC8A4]/0 to-[#8A784E]/0 group-focus-within:from-[#AEC8A4]/20 group-focus-within:via-transparent group-focus-within:to-[#8A784E]/20 transition-all duration-500 pointer-events-none"></div>
            </div>

            {/* Password Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-[#8A784E] group-focus-within:text-[#AEC8A4] transition-colors duration-300" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-[#E7EFC7]/30 border border-[#AEC8A4]/30 rounded-2xl text-[#3B3B1A] placeholder-[#8A784E] focus:outline-none focus:border-[#AEC8A4] focus:bg-[#E7EFC7]/40 transition-all duration-300 backdrop-blur-sm hover:bg-[#E7EFC7]/35 font-medium"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#8A784E] hover:text-[#AEC8A4] transition-colors duration-300"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#AEC8A4]/0 via-[#AEC8A4]/0 to-[#8A784E]/0 group-focus-within:from-[#AEC8A4]/20 group-focus-within:via-transparent group-focus-within:to-[#8A784E]/20 transition-all duration-500 pointer-events-none"></div>
            </div>

            {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={isLoading || aadhaar.length !== 12}
            className="w-full py-4 px-6 bg-gradient-to-r from-[#AEC8A4] to-[#8A784E] text-[#3B3B1A] font-semibold rounded-2xl shadow-lg hover:shadow-[#AEC8A4]/30 transition-all duration-300 transform hover:scale-[1.02] hover:from-[#E7EFC7] hover:to-[#AEC8A4] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            <span className="relative z-10 flex items-center justify-center space-x-2">
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-[#3B3B1A]/30 border-t-[#3B3B1A] rounded-full animate-spin"></div>
                  <span>Signing In...</span>
                </>
              ) : (
                <span>LOGIN</span>
              )}
            </span>
          </button>

          {/* Error Message */}
          {loginError && (
            <p className="mt-2 text-center text-sm text-[#E7EFC7] bg-[#3B3B1A]/40 rounded-xl py-2 px-4">
              {loginError}
            </p>
          )}
          </div>

          {/* Register link */}
          <div className="text-center mt-8 relative z-10">
            <p className="text-[#AEC8A4] text-sm">
              Don&apos;t have an account?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E7EFC7] to-[#AEC8A4] hover:from-[#E7EFC7] hover:to-[#8A784E] font-semibold transition-all duration-300 hover:underline cursor-pointer">
                <Link href="/register">
                Register</Link>
              </span>
            </p>
          </div>
        </div>

        {/* Natural decorative elements */}
        <div className="absolute -top-6 -left-6 w-12 h-12 border-2 border-[#AEC8A4]/40 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-2 border-[#E7EFC7]/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 -left-8 w-6 h-6 bg-[#8A784E]/20 rounded-full animate-bounce"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}