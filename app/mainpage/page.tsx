import React from "react";
import Link from "next/link";

export default function App() {
  return (
    <div className="bg-[#f5f6ef] min-h-screen font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold">Healthease</h1>
        <nav className="flex gap-6 items-center">
          <Link href="#" className="text-[#1e1e1e] font-medium">Home</Link>
          <Link href="#" className="text-[#1e1e1e] font-medium">About Us</Link>
          <Link href="#" className="text-[#1e1e1e] font-medium">How to use</Link>
          <Link href="/login">
            <button className="bg-[#e6ebd9] text-sm px-4 py-2 rounded-full font-semibold">Login</button>
          </Link>
          <Link href="/register">
            <button className="bg-[#e6ebd9] text-sm px-4 py-2 rounded-full font-semibold">Register</button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-10 py-12 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="md:w-1/2">
          <div className="inline-block bg-[#d6d4b6] text-sm rounded-full px-3 py-1 mb-4">
            Health Matters
          </div>
          <h2 className="text-4xl font-bold leading-snug">
            More than Records.<br />
            <span className="text-[#7f6b39]">It’s Your Health Story</span>
          </h2>
          <div className="mt-6 flex items-center rounded-full bg-[#e6ebd9] p-2 shadow-inner">
            <input
              type="text"
              placeholder="Search your report"
              className="bg-transparent flex-1 outline-none px-2"
            />
            <button className="bg-[#3f3a1e] text-white rounded-full w-8 h-8 flex items-center justify-center mr-1">
              <span className="sr-only">Upload</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5 5 5M12 15V3" />
              </svg>
            </button>
            <button className="bg-[#3f3a1e] text-white rounded-full w-8 h-8 flex items-center justify-center">
              <span className="sr-only">Search</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://cdn.pixabay.com/photo/2020/04/27/20/23/doctor-5106768_1280.png"
            alt="Doctor illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* What We Offer */}
      <section className="px-10 py-12">
        <div className="bg-[#e6ebd9] inline-block px-4 py-2 rounded-full font-medium mb-6">
          WHAT WE OFFER
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#a3b38c] rounded-lg p-6 shadow-lg">
            <h4 className="font-bold mb-2">Health Record Organizer</h4>
            <p className="text-sm mb-4">Securely store and access all your medical records in one organized, easy-to-navigate timeline.</p>
            <button className="bg-[#3f3a1e] text-white text-xs px-4 py-2 rounded-full">EXPLORE THIS FEATURE</button>
          </div>
          <div className="bg-[#a3b38c] rounded-lg p-6 shadow-lg">
            <h4 className="font-bold mb-2">AI-Powered Symptom Checker & Triage Bot</h4>
            <p className="text-sm mb-4">Describe your symptoms and get instant, intelligent suggestions on remedies or when to see a doctor.</p>
            <button className="bg-[#3f3a1e] text-white text-xs px-4 py-2 rounded-full">EXPLORE THIS FEATURE</button>
          </div>
          <div className="bg-[#a3b38c] rounded-lg p-6 shadow-lg">
            <h4 className="font-bold mb-2">Intelligent Reminders & Alerts</h4>
            <p className="text-sm mb-4">Never miss a follow-up, checkup, or medication with personalized health reminders and alerts.</p>
            <button className="bg-[#3f3a1e] text-white text-xs px-4 py-2 rounded-full">EXPLORE THIS FEATURE</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#e6ebd9] py-8 px-10 mt-10 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold mb-2">Healthease</h3>
            <p className="mb-2 text-xs">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Product</h4>
            <ul className="space-y-1">
              <li>Features</li>
              <li>Pricing</li>
              <li>Case studies</li>
              <li>Reviews</li>
              <li>Updates</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li>About</li>
              <li>Contact us</li>
              <li>Careers</li>
              <li>Culture</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="space-y-1">
              <li>Getting started</li>
              <li>Help center</li>
              <li>Server status</li>
              <li>Report a bug</li>
              <li>Chat support</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-2">Contact us</h4>
            <p>contact@company.com</p>
            <p>(414) 687 - 5892</p>
            <p>794 McAllister St, San Francisco, 94102</p>
          </div>
        </div>
      </footer>
    </div>
  );
}