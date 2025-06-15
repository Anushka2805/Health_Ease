//app/register/page.tsx
"use client";
import React, { useState } from "react";

import { User, UserCheck, Shield, Eye, EyeOff, CreditCard, Lock, CheckCircle } from "lucide-react";

export default function RegisterPage() {
  const [aadhaar, setAadhaar] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [isDoctor, setIsDoctor] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [aadhaarVerified, setAadhaarVerified] = useState(false);
  const [isVerifyingAadhaar, setIsVerifyingAadhaar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  setIsLoading(true);
  
  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        aadhaar: aadhaar.replace(/\s/g, ''),
        fullName,
        password,
        userType: isDoctor ? 'doctor' : 'patient'
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Registration successful:", data);
      
      // Store Aadhaar in localStorage for next step
      localStorage.setItem('userAadhaar', aadhaar.replace(/\s/g, ''));
      
      // Redirect based on user type
      if (isDoctor) {
        console.log("Redirecting to doctor registration");
        // after successful registration, right before redirect
        localStorage.setItem("userFullName", fullName.trim());
        window.location.href = '/doctor_register';
      } else {
        console.log("Redirecting to patient health profile");
        localStorage.setItem("userFullName", fullName.trim());
        window.location.href = `/patient_register?aadhaar=${aadhaar.replace(/\s/g, '')}`;
      }
    } else {
      console.error("Registration failed:", data.error);
      alert(data.error || "Registration failed");
    }
  } catch (error) {
    console.error("Registration error:", error);
    alert("Registration failed. Please try again.");
  } finally {
    setIsLoading(false);
  }
};

  const handleVerifyAadhaar = async () => {
    const cleanAadhaar = aadhaar.replace(/\s/g, '');
    if (cleanAadhaar.length !== 12) {
      alert("Please enter a valid 12-digit Aadhaar number");
      return;
    }

    setIsVerifyingAadhaar(true);
    
    try {
      console.log("Making request to /api/verify-aadhaar with:", cleanAadhaar);
      
      const response = await fetch('/api/verify-aadhaar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          aadhaar: cleanAadhaar
        }),
      });

      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);

      const responseText = await response.text();
      console.log("Raw response:", responseText);

      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error("Failed to parse JSON:", parseError);
        console.error("Response was:", responseText);
        alert("Server error: Invalid response format");
        return;
      }

      if (response.ok) {
        setAadhaarVerified(true);
        console.log("Aadhaar verified:", data);
      } else {
        console.error("Aadhaar verification failed:", data.error);
        alert(data.error || "Aadhaar verification failed");
      }
    } catch (error) {
      console.error("Aadhaar verification error:", error);
      alert("Aadhaar verification failed. Please try again.");
    } finally {
      setIsVerifyingAadhaar(false);
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
      // Reset verification status when Aadhaar changes
      if (aadhaarVerified) {
        setAadhaarVerified(false);
      }
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
                    border: `2px solid ${aadhaarVerified ? '#22c55e' : '#AEC8A4'}`,
                    backgroundColor: '#FEFFFE',
                    color: '#3B3B1A'
                  }}
                  required
                />
                {aadhaarVerified && (
                  <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
                )}
              </div>
            </div>

            {/* Aadhaar Verification Section */}
            <div className="space-y-4">
              <button
                type="button"
                onClick={handleVerifyAadhaar}
                disabled={aadhaar.replace(/\s/g, '').length !== 12 || aadhaarVerified || isVerifyingAadhaar}
                className="w-full text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                style={{
                  background: aadhaarVerified ? 'linear-gradient(135deg, #22c55e, #16a34a)' : 'linear-gradient(135deg, #AEC8A4, #8A784E)',
                }}
              >
                {isVerifyingAadhaar ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Verifying...
                  </div>
                ) : aadhaarVerified ? (
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Aadhaar Verified
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Shield className="w-4 h-4 mr-2" />
                    Verify Aadhaar
                  </div>
                )}
              </button>

              {aadhaarVerified && (
                <div 
                  className="rounded-xl p-4"
                  style={{backgroundColor: '#dcfce7', borderColor: '#22c55e', borderWidth: '1px'}}
                >
                  <p className="text-sm font-medium text-green-700">
                    ✓ Aadhaar number verified successfully
                  </p>
                </div>
              )}
            </div>

            {/* Full Name Input */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold" style={{color: '#3B3B1A'}}>
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{color: '#8A784E'}} />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2"
                  style={{
                    border: '2px solid #AEC8A4',
                    backgroundColor: '#FEFFFE',
                    color: '#3B3B1A'
                  }}
                  required
                />
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
            {/* <button
              
              style={{
                
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
            </button> */}

            <button
              type="submit"
              onClick={handleRegister}
              disabled={isLoading || !aadhaarVerified || !fullName.trim() || !password.trim()}
              className="w-full text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              style={{
                background: 'linear-gradient(135deg, #8A784E, #3B3B1A)',
              }}
            >
              Register
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