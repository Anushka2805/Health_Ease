"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [aadhaar, setAadhaar] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login data:", { aadhaar, otp, password });
    // TODO: Add login logic
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#b7c7a3] to-[#6b572f] font-sans">
      <div className="bg-white p-10 rounded-lg shadow-lg w-80 flex flex-col">
        <h1 className="text-center text-2xl font-bold mb-5">Welcome Back</h1>
        <form onSubmit={handleLogin} className="flex flex-col">
          <input
            type="text"
            placeholder="Aadhaar Number"
            value={aadhaar}
            onChange={(e) => setAadhaar(e.target.value)}
            className="mb-3 p-2 border border-gray-400 rounded-full text-sm outline-none"
            required
          />
          <input
            type="text"
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="mb-3 p-2 border border-gray-400 rounded-full text-sm outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-3 p-2 border border-gray-400 rounded-full text-sm outline-none"
            required
          />
          <button
            type="submit"
            className="bg-[#3f3418] text-white py-2 rounded-full mt-2 hover:bg-[#2e2612] transition-colors"
          >
            LOGIN
          </button>
        </form>
        <p className="text-center text-sm mt-3">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-600 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}