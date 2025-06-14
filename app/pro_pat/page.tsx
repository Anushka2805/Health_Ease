import React from "react";
import { FaUserCircle, FaPlus, FaFilePdf } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import { MdLogout } from "react-icons/md";

const PatientProfile: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-100 flex flex-col justify-between font-sans">
      {/* Header */}
      <header className="bg-green-200 text-center py-4 border-b border-green-400">
        <h1 className="text-2xl font-bold text-gray-800">Healthease</h1>
      </header>

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center sm:justify-around bg-green-300 text-white font-medium py-2">
        <button className="hover:underline px-2">Edit Profile</button>
        <button className="hover:underline px-2">View Medication</button>
        <button className="hover:underline px-2">View Prescription</button>
        <button className="hover:underline px-2">Download summary</button>
        <button className="hover:text-red-500 flex items-center gap-1 px-2">
          <MdLogout /> Logout
        </button>
      </nav>

      {/* Main Content */}
      <main className="px-6 py-6 space-y-6">
        {/* Emergency + Profile */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="bg-green-50 rounded-lg p-4 shadow w-full sm:w-1/3 relative">
            <h2 className="font-bold mb-2">Emergency contact</h2>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>1. Shreya Jain (Sister) - +91 XXXXXXXXXX</li>
              <li>2. Isha Jain (Mother) - +91 XXXXXXXXXX</li>
            </ul>
            <FaPlus className="absolute bottom-2 right-2 text-green-400 cursor-pointer" />
          </div>

          <div className="bg-green-50 rounded-lg p-4 shadow w-full sm:w-2/3 relative flex items-center gap-4">
            <FaUserCircle className="text-5xl text-gray-500" />
            <div>
              <h3 className="font-bold text-lg">
                SHAIVI JAIN <sup className="text-xs">18</sup>
              </h3>
              <p className="text-sm text-gray-700">Female</p>
              <p className="text-sm text-gray-700">+91 XXXXXXXXXX</p>
              <p className="text-sm text-gray-700">Blood Group - A+</p>
            </div>
            <FiEdit className="absolute bottom-2 right-2 text-green-400 cursor-pointer" />
          </div>
        </div>

        {/* Health Details */}
        <div className="bg-green-50 rounded-lg p-4 shadow relative">
          <h2 className="font-bold mb-3">Health Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1 font-medium text-gray-800">
              <p>Allergies</p>
              <p>Conditions</p>
              <p>Meds</p>
              <p>Vaccines</p>
              <p>Last Checkup</p>
            </div>
            <div className="space-y-1 text-gray-700">
              <p>Penicillin, Peanuts</p>
              <p>Asthma, PCOS</p>
              <p>Seroflo Inhaler, Metformin</p>
              <p>COVID-19 (✔), Tetanus (✔)</p>
              <p>12 May 2024</p>
            </div>
          </div>
          <FaPlus className="absolute bottom-2 right-2 text-green-400 cursor-pointer" />
        </div>

        {/* Reports */}
        <div className="bg-green-50 rounded-lg p-4 shadow">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold">Reports</h2>
            <BsChatDots className="text-pink-400 text-2xl" />
          </div>
          <div className="flex gap-4 overflow-x-auto">
            {["LASIK report.pdf", "Typhoid.pdf", "Dengue.pdf", "Full body.pdf"].map((file, index) => (
              <div key={index} className="flex flex-col items-center min-w-[100px]">
                <FaFilePdf className="text-blue-400 text-4xl" />
                <p className="text-xs mt-1 text-center">{file}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-4">
          <button className="font-bold underline">DOWNLOAD HEALTH SUMMARY</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-200 text-gray-700 text-sm px-6 py-6 mt-auto">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold mb-2">Product</h3>
            <ul className="space-y-1">
              <li>Features</li>
              <li>Pricing</li>
              <li>Case studies</li>
              <li>Reviews</li>
              <li>Updates</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Company</h3>
            <ul className="space-y-1">
              <li>About</li>
              <li>Contact us</li>
              <li>Careers</li>
              <li>Culture</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Support</h3>
            <ul className="space-y-1">
              <li>Getting started</li>
              <li>Help center</li>
              <li>Server status</li>
              <li>Report a bug</li>
              <li>Chat support</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact us</h3>
            <ul className="space-y-1">
              <li>contact@company.com</li>
              <li>(414) 687 – 5892</li>
              <li>794 Mcallister St, San Francisco, 94102</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PatientProfile;