import React from 'react';
import { FaSearch, FaMicrophone, FaCamera } from 'react-icons/fa';

const DoctorDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f3] text-[#2b2b2b] font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-2xl font-semibold">Healthease</h1>
        <nav className="space-x-4">
          <button className="text-sm text-gray-700 hover:text-black">View Profile</button>
          <button className="text-sm text-gray-700 hover:text-black">Patients</button>
          <button className="text-sm text-gray-700 hover:text-black">Upload Report</button>
          <button className="text-sm text-gray-700 hover:text-black">Summarize Case</button>
          <button className="text-sm text-red-600 hover:text-red-800">Logout</button>
        </nav>
      </header>

      {/* Welcome Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-8 py-10">
        <div className="max-w-xl">
          <div className="mb-2 bg-[#e8e4db] inline-block px-3 py-1 rounded-full text-sm">Health Matters 💖</div>
          <h2 className="text-3xl font-bold mt-4">Welcome, Dr. Alia</h2>
          <h3 className="text-xl text-green-600 font-semibold mt-2">Smarter Patient Tracking Starts Here</h3>
          <p className="mt-3 text-gray-700">Access records, upload reports, and let AI assist your care.</p>

          {/* Search */}
          <div className="mt-6 flex items-center gap-2 bg-white border rounded-full px-4 py-2 shadow-sm w-full max-w-lg">
            <input
              type="text"
              placeholder="Search your patient"
              className="flex-1 outline-none"
            />
            <FaSearch className="text-gray-600 cursor-pointer" />
            <FaMicrophone className="text-gray-600 cursor-pointer" />
            <FaCamera className="text-gray-600 cursor-pointer" />
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <img src="/doctor-illustration.png" alt="Doctor Illustration" className="w-64 h-auto" />
        </div>
      </section>

      {/* What We Offer */}
      <section className="px-8 py-10">
        <h3 className="text-lg font-semibold mb-6 bg-[#ecf0e0] inline-block px-4 py-2 rounded-full">WHAT WE OFFER</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#dce2e0] p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold mb-2">View Patients</h4>
            <p className="text-sm text-gray-700">Access patient history, allergies, and documents.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">VIEW</button>
          </div>

          <div className="bg-[#dce2e0] p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold mb-2">Upload Reports</h4>
            <p className="text-sm text-gray-700">Upload test results, prescriptions to patient records.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">UPLOAD</button>
          </div>

          <div className="bg-[#dce2e0] p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold mb-2">AI Case Summary</h4>
            <p className="text-sm text-gray-700">Generate quick case summaries using AI.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">TRY AI TOOL</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#e2e4d9] px-8 py-10 mt-10">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h4 className="font-bold text-lg mb-2">Healthease</h4>
            <p className="text-sm text-gray-700 max-w-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 md:mt-0">
            <div>
              <h5 className="font-semibold mb-2">Product</h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>About</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Reviews</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Company</h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>Contact us</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Support</h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>Getting started</li>
                <li>Help center</li>
                <li>Report a bug</li>
                <li>Chat support</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Contact us</h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>📧 contact@company.com</li>
                <li>📞 (346) 687 - 5821</li>
                <li>📍 794 Mcallister St, San Francisco, 94102</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DoctorDashboard;