"use client";

import React, { useState } from "react";
import Link from 'next/link';

export default function PatientRegistration() {
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [dietType, setDietType] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [smokingAlcohol, setSmokingAlcohol] = useState("");
  const [chronicConditions, setChronicConditions] = useState("");
  const [allergies, setAllergies] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    // TODO: handle API call
  };

  return (
    <div className="min-h-screen flex">
      {/* Left section */}
      <div className="flex-1 bg-green-100 p-10 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-6">Welcome Shaivi</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="p-2 rounded-full border border-gray-300 text-sm"
            required
          >
            <option value="">Gender</option>
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>

          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="p-2 rounded-full border border-gray-300 text-sm"
            placeholder="DOB"
            required
          />

          <select
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            className="p-2 rounded-full border border-gray-300 text-sm"
            required
          >
            <option value="">Blood Group</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>

          <select
            value={dietType}
            onChange={(e) => setDietType(e.target.value)}
            className="p-2 rounded-full border border-gray-300 text-sm"
            required
          >
            <option value="">Diet Type</option>
            <option>Vegetarian</option>
            <option>Non-Vegetarian</option>
            <option>Vegan</option>
          </select>

          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            className="p-2 rounded-full border border-gray-300 text-sm"
            required
          >
            <option value="">Physical Activity Level</option>
            <option>Sedentary</option>
            <option>Moderate</option>
            <option>Active</option>
          </select>

          <select
            value={smokingAlcohol}
            onChange={(e) => setSmokingAlcohol(e.target.value)}
            className="p-2 rounded-full border border-gray-300 text-sm"
            required
          >
            <option value="">Smoking / Alcohol</option>
            <option>No</option>
            <option>Yes - Occasionally</option>
            <option>Yes - Regularly</option>
          </select>

          <input
            type="text"
            value={chronicConditions}
            onChange={(e) => setChronicConditions(e.target.value)}
            placeholder="Chronic Conditions"
            className="p-2 rounded-full border border-gray-300 text-sm"
          />

          <input
            type="text"
            value={allergies}
            onChange={(e) => setAllergies(e.target.value)}
            placeholder="Allergies"
            className="p-2 rounded-full border border-gray-300 text-sm"
          />
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

      {/* Right section */}
      <div className="flex-1 bg-gradient-to-b from-[#b79859] to-[#94743c] text-white p-10 flex flex-col justify-center">
        <h2 className="font-bold text-lg mb-4">Your privacy matters to us.</h2>
        <p className="text-sm">
          All your health data is encrypted and stored securely. Only you and
          the doctors you choose to share it with can access your information.
          HealthEase will never sell your data or use it for marketing without
          your explicit consent. You are in control of your health records —
          anytime, anywhere.
        </p>
      </div>
    </div>
  );
}