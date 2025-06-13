"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [aadhaar, setAadhaar] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isDoctor, setIsDoctor] = useState<boolean>(false);

  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(isDoctor ? "Doctor registration" : "Patient registration", {
      aadhaar,
      otp,
      password,
    });

    // TODO: Replace this with your real registration API call
    setTimeout(() => {
      if (isDoctor) {
        router.push("/doctor_register"); // Example route after doctor registration
      } else {
        router.push("/patient_register"); // Example route after patient registration
      }
    }, 500);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-[#b7c7a3] to-[#6b572f] font-sans">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col w-[350px]">
        <h1 className="text-xl font-bold text-center mb-4">
          {isDoctor ? "Register as Doctor" : "Register as Patient"}
        </h1>
        <form onSubmit={handleRegister} className="flex flex-col">
          <input
            type="text"
            placeholder="Aadhaar Number"
            value={aadhaar}
            onChange={(e) => setAadhaar(e.target.value)}
            className="mb-3 p-2 border border-gray-300 rounded-full text-sm outline-none"
            required
          />
          <div className="flex justify-between mb-1">
            <button
              type="button"
              className="text-xs text-[#3f3418] underline"
            >
              Generate OTP
            </button>
            <button
              type="button"
              className="text-xs text-[#3f3418] underline"
            >
              Resend OTP
            </button>
          </div>
          <input
            type="text"
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="mb-3 p-2 border border-gray-300 rounded-full text-sm outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-3 p-2 border border-gray-300 rounded-full text-sm outline-none"
            required
          />
          <button
            type="submit"
            className="bg-[#3f3418] text-white py-2 rounded-full hover:bg-[#2e2612] mt-2"
          >
            REGISTER
          </button>
        </form>
        <p className="text-xs text-center mt-2">
          {isDoctor ? "Want to register as Patient?" : "Want to register as Doctor?"}{" "}
          <button
            className="text-[#3f3418] underline"
            onClick={() => setIsDoctor(!isDoctor)}
          >
            Switch
          </button>
        </p>
        <p className="text-xs text-center mt-2">
          Already have an account?{" "}
          <Link href="/login" className="text-[#3f3418] underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}