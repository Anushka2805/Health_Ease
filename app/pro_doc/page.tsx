import React from 'react';
import { FaUserMd, FaCalendarAlt, FaClock, FaGlobe, FaComments, FaUserFriends, FaFileAlt, FaPills } from 'react-icons/fa';

const DoctorDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f3] text-[#2b2b2b] font-sans">
      
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold">Healthease</h1>
        <nav className="flex gap-3">
          <button className="bg-[#6e6b4f] text-white px-3 py-1 rounded-md hover:bg-[#57543f]">Edit Profile</button>
          <button className="bg-[#6e6b4f] text-white px-3 py-1 rounded-md hover:bg-[#57543f]">Patients</button>
          <button className="bg-[#6e6b4f] text-white px-3 py-1 rounded-md hover:bg-[#57543f]">Upload Report</button>
          <button className="bg-[#6e6b4f] text-white px-3 py-1 rounded-md hover:bg-[#57543f]">Summarize Case</button>
          <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">Logout</button>
        </nav>
      </header>

      {/* Welcome */}
      <section className="text-center my-8">
        <h2 className="text-4xl font-bold">Welcome, Dr. Shaivi</h2>
      </section>

      {/* Card */}
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#dcd2b2] to-[#e6d9ba] rounded-2xl p-6 shadow-lg relative">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
            <FaUserMd className="text-4xl text-white" />
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="font-semibold">Name:</div>
              <div>Dr. Shaivi Mehta</div>
              <div className="font-semibold">Specialization:</div>
              <div>Dermatologist</div>
              <div className="font-semibold">Email:</div>
              <div>dr.shaivi@healthease.com</div>
              <div className="font-semibold">Phone:</div>
              <div>+91-XXXXXXXXXX</div>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <h3 className="text-center font-bold text-lg mb-4">Practice Info</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
          <div className="flex gap-2 items-center">
            <FaCalendarAlt /> <span className="font-semibold">Days:</span> <span className="ml-1">Mon – Fri</span>
          </div>
          <div className="flex gap-2 items-center">
            <FaClock /> <span className="font-semibold">Timings:</span> <span className="ml-1">10 AM – 5 PM</span>
          </div>
          <div className="flex gap-2 items-center">
            <FaGlobe /> <span className="font-semibold">Mode:</span> <span className="ml-1">In-person, Teleconsultation</span>
          </div>
          <div className="flex gap-2 items-center">
            <FaComments /> <span className="font-semibold">Languages:</span> <span className="ml-1">English, Hindi</span>
          </div>
        </div>

        <hr className="my-4" />

        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          <div className="flex items-center gap-1">
            <FaUserFriends /> Patients: 342
          </div>
          <div className="flex items-center gap-1">
            <FaFileAlt /> Reports: 76
          </div>
          <div className="flex items-center gap-1">
            <FaPills /> Prescriptions: 150
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 bg-[#e2e4d9] p-6">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h4 className="font-bold mb-2">Healthease</h4>
            <p className="text-sm text-gray-700 max-w-xs">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
            <div>
              <h5 className="font-semibold mb-1">Product</h5>
              <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Case studies</li>
                <li>Updates</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-1">Company</h5>
              <ul>
                <li>About</li>
                <li>Contact us</li>
                <li>Careers</li>
                <li>Culture</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-1">Support</h5>
              <ul>
                <li>Getting started</li>
                <li>Help center</li>
                <li>Server status</li>
                <li>Report a bug</li>
                <li>Chat support</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-1">Contacts us</h5>
              <ul>
                <li>📧 contact@company.com</li>
                <li>📞 (414) 687 - 5892</li>
                <li>📍 794 Mcallister St San Francisco, 94102</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DoctorDashboard;