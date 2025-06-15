//app/patient_register/page.tsx
"use client";
import React, { useState, useEffect } from "react";
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
  const [aadhaar, setAadhaar] = useState("");
  const [emergencyContactName, setEmergencyContactName] = useState("");
const [emergencyContactPhone, setEmergencyContactPhone] = useState("");
const [firstName, setFirstName] = useState("");
const [emergencyContactRelation, setEmergencyContactRelation] = useState("");
  const [floatingIcons, setFloatingIcons] = useState<Array<{
    id: number;
    left: number;
    top: number;
    delay: number;
    duration: number;
  }>>([]);

  // Get Aadhaar from localStorage or URL params on component mount
  useEffect(() => {
    // Try to get Aadhaar from URL params first
    const urlParams = new URLSearchParams(window.location.search);
    const aadhaarFromUrl = urlParams.get('aadhaar');

    const storedName = localStorage.getItem("userFullName");
if (storedName) setFirstName(storedName.split(" ")[0]);
    
    if (aadhaarFromUrl) {
      setAadhaar(aadhaarFromUrl);
    } else {
      // Fallback to localStorage if available
      const storedAadhaar = localStorage.getItem('userAadhaar');
      if (storedAadhaar) {
        setAadhaar(storedAadhaar);
      }
    }
  }, []);

  // Generate floating icons positions only on client side
  useEffect(() => {
    const icons = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2
    }));
    setFloatingIcons(icons);
  }, []);

  const handleSubmit = async () => {
    if (!aadhaar) {
      alert('Aadhaar number not found. Please register first.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/patient_profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          aadhaar,
          gender,
          dob,
          bloodGroup,
          dietType,
          activityLevel,
          smokingAlcohol,
          chronicConditions,
          allergies,
          emergencyContactName,
          emergencyContactPhone,
          emergencyContactRelation,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Health profile saved successfully:", data);
        alert('Health profile completed successfully!');
        
        // Redirect to patient dashboard
        window.location.href = `/pro_pat?aadhaar=${aadhaar}`;
      } else {
        console.error("Failed to save health profile:", data.error);
        alert(data.error || "Failed to save health profile");
      }
    } catch (error) {
      console.error("Health profile save error:", error);
      alert("Failed to save health profile. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldProgress = () => {
    const totalFields = 8;
    const filledFields = [gender, dob, bloodGroup, dietType, activityLevel, smokingAlcohol, chronicConditions, allergies].filter(field => field !== "").length;
    return (filledFields / totalFields) * 100;
  };

  // Show loading if Aadhaar is not available
  if (!aadhaar) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E7EFC7 0%, #AEC8A4 50%, #E7EFC7 100%)' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{ borderColor: '#8A784E' }}></div>
          <p style={{ color: '#3B3B1A' }}>Loading your profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #E7EFC7 0%, #AEC8A4 50%, #E7EFC7 100%)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-xl animate-pulse" style={{ backgroundColor: '#AEC8A4', opacity: 0.3 }}></div>
        <div className="absolute top-40 right-20 w-48 h-48 rounded-full blur-2xl animate-pulse" style={{ backgroundColor: '#8A784E', opacity: 0.2 }}></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 rounded-full blur-xl animate-pulse" style={{ backgroundColor: '#AEC8A4', opacity: 0.25 }}></div>
        
        {/* Floating icons - only render after client hydration */}
        {floatingIcons.map((icon) => (
          <div
            key={icon.id}
            className="absolute opacity-10 animate-bounce"
            style={{
              left: `${icon.left}%`,
              top: `${icon.top}%`,
              animationDelay: `${icon.delay}s`,
              animationDuration: `${icon.duration}s`
            }}
          >
            <Heart className="w-4 h-4" style={{ color: '#8A784E' }} />
          </div>
        ))}
      </div>

      <div className="flex min-h-screen relative z-10 flex-col lg:flex-row">
        {/* Left section - Form */}
        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-2xl mx-auto w-full">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transform hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #8A784E, #AEC8A4)' }}>
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-2" style={{ color: '#3B3B1A' }}>
                {`Welcome ${firstName || "Friend"}`}
              </h1>
              <p className="text-lg" style={{ color: '#8A784E' }}>Complete your health profile to get started</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium" style={{ color: '#3B3B1A' }}>Profile Completion</span>
                <span className="text-sm font-semibold" style={{ color: '#8A784E' }}>{Math.round(getFieldProgress())}%</span>
              </div>
              <div className="w-full rounded-full h-3 overflow-hidden" style={{ backgroundColor: '#E7EFC7' }}>
                <div 
                  className="h-full rounded-full transition-all duration-500 ease-out relative overflow-hidden"
                  style={{ 
                    width: `${getFieldProgress()}%`,
                    background: 'linear-gradient(90deg, #8A784E, #AEC8A4)'
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="backdrop-blur-sm rounded-3xl p-8 border shadow-xl" style={{ backgroundColor: 'rgba(231, 239, 199, 0.6)', borderColor: 'rgba(174, 200, 164, 0.5)' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Gender */}
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300" style={{ color: '#8A784E' }} />
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border rounded-2xl appearance-none focus:outline-none focus:ring-2 transition-all duration-300 hover:bg-white/90"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                      borderColor: '#AEC8A4',
                      color: '#3B3B1A'
                    }}
                  >
                    <option value="">Select Gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Date of Birth */}
                <div className="relative group">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300" style={{ color: '#8A784E' }} />
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border rounded-2xl focus:outline-none focus:ring-2 transition-all duration-300 hover:bg-white/90"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                      borderColor: '#AEC8A4',
                      color: '#3B3B1A'
                    }}
                  />
                </div>

                {/* Blood Group */}
                <div className="relative group">
                  <Droplets className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300" style={{ color: '#8A784E' }} />
                  <select
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border rounded-2xl appearance-none focus:outline-none focus:ring-2 transition-all duration-300 hover:bg-white/90"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                      borderColor: '#AEC8A4',
                      color: '#3B3B1A'
                    }}
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
                </div>

                {/* Diet Type */}
                <div className="relative group">
                  <UtensilsCrossed className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300" style={{ color: '#8A784E' }} />
                  <select
                    value={dietType}
                    onChange={(e) => setDietType(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border rounded-2xl appearance-none focus:outline-none focus:ring-2 transition-all duration-300 hover:bg-white/90"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                      borderColor: '#AEC8A4',
                      color: '#3B3B1A'
                    }}
                  >
                    <option value="">Select Diet Type</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Non-Vegetarian">Non-Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                  </select>
                </div>

                {/* Activity Level */}
                <div className="relative group">
                  <Activity className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300" style={{ color: '#8A784E' }} />
                  <select
                    value={activityLevel}
                    onChange={(e) => setActivityLevel(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border rounded-2xl appearance-none focus:outline-none focus:ring-2 transition-all duration-300 hover:bg-white/90"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                      borderColor: '#AEC8A4',
                      color: '#3B3B1A'
                    }}
                  >
                    <option value="">Physical Activity Level</option>
                    <option value="Sedentary">Sedentary</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Active">Active</option>
                  </select>
                </div>

                {/* Smoking/Alcohol */}
                <div className="relative group">
                  <Cigarette className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300" style={{ color: '#8A784E' }} />
                  <select
                    value={smokingAlcohol}
                    onChange={(e) => setSmokingAlcohol(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border rounded-2xl appearance-none focus:outline-none focus:ring-2 transition-all duration-300 hover:bg-white/90"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                      borderColor: '#AEC8A4',
                      color: '#3B3B1A'
                    }}
                  >
                    <option value="">Smoking / Alcohol</option>
                    <option value="No">No</option>
                    <option value="Yes - Occasionally">Yes - Occasionally</option>
                    <option value="Yes - Regularly">Yes - Regularly</option>
                  </select>
                </div>
              </div>

              {/* Text Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="relative group">
                  <Heart className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300" style={{ color: '#8A784E' }} />
                  <input
                    type="text"
                    value={chronicConditions}
                    onChange={(e) => setChronicConditions(e.target.value)}
                    placeholder="Chronic Conditions (Optional)"
                    className="w-full pl-12 pr-4 py-4 border rounded-2xl focus:outline-none focus:ring-2 transition-all duration-300 hover:bg-white/90"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                      borderColor: '#AEC8A4',
                      color: '#3B3B1A'
                    }}
                  />
                </div>

                <div className="relative group">
                  <AlertTriangle className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300" style={{ color: '#8A784E' }} />
                  <input
                    type="text"
                    value={allergies}
                    onChange={(e) => setAllergies(e.target.value)}
                    placeholder="Allergies (Optional)"
                    className="w-full pl-12 pr-4 py-4 border rounded-2xl focus:outline-none focus:ring-2 transition-all duration-300 hover:bg-white/90"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                      borderColor: '#AEC8A4',
                      color: '#3B3B1A'
                    }}
                  />
                </div>
              </div>

              {/* Emergency Contact Name */}
              <div className="relative group">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300" style={{ color: '#8A784E' }} />
                <input
                  type="text"
                  value={emergencyContactName}
                  onChange={(e) => setEmergencyContactName(e.target.value)}
                  placeholder="Emergency Contact Name"
                  className="w-full pl-12 pr-4 py-4 border rounded-2xl focus:outline-none focus:ring-2 transition-all duration-300 hover:bg-white/90"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                    borderColor: '#AEC8A4',
                    color: '#3B3B1A'
                  }}
                />
              </div>

              {/* Emergency Contact Phone */}
              <div className="relative group">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300" style={{ color: '#8A784E' }} />
                <input
                  type="tel"
                  value={emergencyContactPhone}
                  onChange={(e) => setEmergencyContactPhone(e.target.value)}
                  placeholder="Emergency Contact Phone"
                  className="w-full pl-12 pr-4 py-4 border rounded-2xl focus:outline-none focus:ring-2 transition-all duration-300 hover:bg-white/90"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                    borderColor: '#AEC8A4',
                    color: '#3B3B1A'
                  }}
                />
              </div>

              {/* Emergency Contact Relation */}
              <div className="relative group">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300" style={{ color: '#8A784E' }} />
                <select
                  value={emergencyContactRelation}
                  onChange={(e) => setEmergencyContactRelation(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border rounded-2xl appearance-none focus:outline-none focus:ring-2 transition-all duration-300 hover:bg-white/90"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                    borderColor: '#AEC8A4',
                    color: '#3B3B1A'
                  }}
                >
                  <option value="">Emergency Contact Relation</option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Friend">Friend</option>
                  <option value="Other">Other</option>
                </select>
              </div>

                            {/* Submit Button */}
              <div
                onClick={handleSubmit}
                className="w-full py-4 px-6 text-white font-bold rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] cursor-pointer relative overflow-hidden group"
                style={{ 
                  background: 'linear-gradient(135deg, #8A784E, #AEC8A4)',
                  boxShadow: '0 10px 25px rgba(138, 120, 78, 0.25)'
                }}
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Saving Profile...</span>
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
        <div className="flex-1 text-white p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #3B3B1A, #8A784E)' }}>
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

            <div className="mt-8 p-4 rounded-2xl border border-white/20" style={{ backgroundColor: 'rgba(174, 200, 164, 0.1)' }}>
              <p className="text-sm text-white/90 italic">
                Your health records are available anytime, anywhere — completely under your control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}