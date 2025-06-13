"use client";

import React, { useState } from "react";
import Link from 'next/link';

export default function DoctorRegistration() {
  const [fullName, setFullName] = useState("");
  const [medicalRegNumber, setMedicalRegNumber] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [qualification, setQualification] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      fullName,
      medicalRegNumber,
      specialization,
      experience,
      qualification,
      clinicName,
      email,
      phone,
    });
    // TODO: integrate API or backend
  };

  return (
    <div className="min-h-screen flex">
      {/* Left form section */}
      <div className="flex-1 bg-green-100 p-10 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-6">Welcome Dr. Shaivi</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="p-2 rounded-full border border-gray-300 text-sm"
            required
          />

          <div className="relative">
            <input
              type="text"
              placeholder="Medical Registration Number"
              value={medicalRegNumber}
              onChange={(e) => setMedicalRegNumber(e.target.value)}
              className="p-2 rounded-full border border-gray-300 text-sm w-full"
              required
            />
            {medicalRegNumber && (
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-500 text-xs">
                Verified
              </span>
            )}
          </div>

          <input
            type="text"
            placeholder="Specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="p-2 rounded-full border border-gray-300 text-sm"
            required
          />

          <input
            type="number"
            placeholder="Years of Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="p-2 rounded-full border border-gray-300 text-sm"
            required
          />

          <input
            type="text"
            placeholder="Latest Qualification"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            className="p-2 rounded-full border border-gray-300 text-sm"
            required
          />

          <input
            type="text"
            placeholder="Primary Clinic / Hospital Name"
            value={clinicName}
            onChange={(e) => setClinicName(e.target.value)}
            className="p-2 rounded-full border border-gray-300 text-sm"
            required
          />

          <div className="flex gap-2">
            <label className="text-sm flex items-center">Official Email :</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded-full border border-gray-300 text-sm flex-1"
              required
            />
          </div>

          <div className="flex gap-2">
            <label className="text-sm flex items-center">
              Official Phone Number :
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-2 rounded-full border border-gray-300 text-sm flex-1"
              required
            />
          </div>
            <Link href="/register">
            <button
            type="submit"
            className="bg-[#3f3418] text-white py-2 rounded-full mt-2 hover:bg-[#2e2612]"
          >
            Complete Registration
          </button>
          </Link>
          
        </form>
      </div>

      {/* Right privacy section */}
      <div className="flex-1 bg-gradient-to-b from-[#b79859] to-[#94743c] text-white p-10 flex flex-col justify-center">
        <h2 className="font-bold text-lg mb-4">Your privacy matters to us.</h2>
        <p className="text-sm">
          HealthEase verifies all doctors to ensure patient safety. Your details
          will be securely stored and not shared without consent.
        </p>
      </div>
    </div>
  );
}