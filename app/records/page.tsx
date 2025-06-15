"use client";

import React, { useState } from "react";
import { Upload, FileText, Calendar, User, Stethoscope, Plus, Eye, X } from "lucide-react";

const HealthRecordOrganizer = () => {
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState({
    title: "",
    doctor: "",
    date: "",
    type: "",
    bodySystem: "",
    file: null as File | null,
    filePreview: null as string | null,
  });
  const [error, setError] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setForm((prev) => ({
        ...prev,
        file,
        filePreview: previewURL,
      }));
    }
  };

  const handleUpload = () => {
    if (!form.title || !form.file) {
      setError("Please fill in the title and select a file.");
      return;
    }

    setRecords((prev) => [...prev, { ...form, id: Date.now() }]);

    if (form.filePreview) URL.revokeObjectURL(form.filePreview);
    setForm({
      title: "",
      doctor: "",
      date: "",
      type: "",
      bodySystem: "",
      file: null,
      filePreview: null,
    });
    setError("");
    setIsFormVisible(false);
  };

  const getTypeIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'lab report':
        return <FileText className="w-5 h-5" style={{ color: '#3B3B1A' }} />;
      case 'scan':
        return <Eye className="w-5 h-5" style={{ color: '#3B3B1A' }} />;
      default:
        return <FileText className="w-5 h-5" style={{ color: '#3B3B1A' }} />;
    }
  };

  const getSystemBadgeColor = (system) => {
    const colors = {
      'neuro': 'bg-[#8A784E] text-[#E7EFC7]',
      'cardio': 'bg-[#AEC8A4] text-[#3B3B1A]',
      'respiratory': 'bg-[#E7EFC7] text-[#3B3B1A]',
      'digestive': 'bg-[#8A784E] text-[#E7EFC7]',
      'musculoskeletal': 'bg-[#AEC8A4] text-[#3B3B1A]',
      'default': 'bg-[#AEC8A4] text-[#3B3B1A]'
    };
    return colors[system?.toLowerCase()] || colors.default;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E7EFC7' }}>
      {/* Header */}
      <header className="sticky top-0 z-50" style={{ backgroundColor: '#AEC8A4' }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#3B3B1A' }}>
                <Stethoscope className="w-6 h-6" style={{ color: '#E7EFC7' }} />
              </div>
              <h1 className="text-2xl font-bold" style={{ color: '#3B3B1A' }}>Healthease</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              {['View Profile', 'Patients', 'Upload Report', 'Summarize Case'].map((item) => (
                <button key={item} className="font-medium transition-opacity duration-200 hover:opacity-70" style={{ color: '#3B3B1A' }}>
                  {item}
                </button>
              ))}
              <button className="px-4 py-2 rounded-full font-medium transition-all duration-200 hover:opacity-90" style={{ backgroundColor: '#8A784E', color: '#E7EFC7' }}>
                Logout
              </button>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#3B3B1A' }}>
            Your Health Records, Organized
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#8A784E' }}>
            Upload, organize, and access your medical records with ease. Keep your health journey documented and accessible.
          </p>
        </div>

        {/* Add Record Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsFormVisible(!isFormVisible)}
            className="group px-8 py-4 rounded-2xl flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold text-lg"
            style={{ backgroundColor: '#3B3B1A', color: '#E7EFC7' }}
          >
            {isFormVisible ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
            <span>
              {isFormVisible ? 'Close Form' : 'Add New Record'}
            </span>
          </button>
        </div>

        {/* Upload Form */}
        <div className={`transition-all duration-500 overflow-hidden ${isFormVisible ? 'max-h-screen opacity-100 mb-12' : 'max-h-0 opacity-0'}`}>
          <div className="rounded-3xl p-8 shadow-xl" style={{ backgroundColor: '#AEC8A4' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form Fields */}
              <div className="space-y-6">
                <div className="relative">
                  <label className="block font-semibold mb-2" style={{ color: '#3B3B1A' }}>Record Title *</label>
                  <input
                    className="w-full border-2 rounded-xl px-4 py-3 focus:outline-none transition-colors duration-200"
                    style={{ 
                      backgroundColor: '#E7EFC7', 
                      borderColor: '#8A784E', 
                      color: '#3B3B1A' 
                    }}
                    name="title"
                    value={form.title}
                    onChange={handleInputChange}
                    placeholder="Enter record title..."
                  />
                </div>

                <div className="relative">
                  <label className="block font-semibold mb-2" style={{ color: '#3B3B1A' }}>Doctor's Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 w-5 h-5" style={{ color: '#8A784E' }} />
                    <input
                      className="w-full border-2 rounded-xl pl-12 pr-4 py-3 focus:outline-none transition-colors duration-200"
                      style={{ 
                        backgroundColor: '#E7EFC7', 
                        borderColor: '#8A784E', 
                        color: '#3B3B1A' 
                      }}
                      name="doctor"
                      value={form.doctor}
                      onChange={handleInputChange}
                      placeholder="Dr. Smith"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-2" style={{ color: '#3B3B1A' }}>Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3.5 w-5 h-5" style={{ color: '#8A784E' }} />
                      <input
                        type="date"
                        className="w-full border-2 rounded-xl pl-12 pr-4 py-3 focus:outline-none transition-colors duration-200"
                        style={{ 
                          backgroundColor: '#E7EFC7', 
                          borderColor: '#8A784E', 
                          color: '#3B3B1A' 
                        }}
                        name="date"
                        value={form.date}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold mb-2" style={{ color: '#3B3B1A' }}>Type</label>
                    <select
                      className="w-full border-2 rounded-xl px-4 py-3 focus:outline-none transition-colors duration-200"
                      style={{ 
                        backgroundColor: '#E7EFC7', 
                        borderColor: '#8A784E', 
                        color: '#3B3B1A' 
                      }}
                      name="type"
                      value={form.type}
                      onChange={handleInputChange}
                    >
                      <option value="">Select type...</option>
                      <option value="Lab Report">Lab Report</option>
                      <option value="Scan">Scan</option>
                      <option value="Prescription">Prescription</option>
                      <option value="Consultation">Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-2" style={{ color: '#3B3B1A' }}>Body System</label>
                  <select
                    className="w-full border-2 rounded-xl px-4 py-3 focus:outline-none transition-colors duration-200"
                    style={{ 
                      backgroundColor: '#E7EFC7', 
                      borderColor: '#8A784E', 
                      color: '#3B3B1A' 
                    }}
                    name="bodySystem"
                    value={form.bodySystem}
                    onChange={handleInputChange}
                  >
                    <option value="">Select system...</option>
                    <option value="Neuro">Neurological</option>
                    <option value="Cardio">Cardiovascular</option>
                    <option value="Respiratory">Respiratory</option>
                    <option value="Digestive">Digestive</option>
                    <option value="Musculoskeletal">Musculoskeletal</option>
                  </select>
                </div>
              </div>

              {/* File Upload Area */}
              <div className="space-y-6">
                <div>
                  <label className="block font-semibold mb-2" style={{ color: '#3B3B1A' }}>Attach File *</label>
                  <div className="relative">
                    <input
                      type="file"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      onChange={handleFileChange}
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    />
                    <div className="border-2 border-dashed rounded-xl p-8 text-center hover:opacity-80 transition-all duration-300" style={{ borderColor: '#8A784E', backgroundColor: '#E7EFC7' }}>
                      <Upload className="w-12 h-12 mx-auto mb-4" style={{ color: '#3B3B1A' }} />
                      <p className="font-semibold" style={{ color: '#3B3B1A' }}>
                        {form.file ? form.file.name : 'Drop files here or click to browse'}
                      </p>
                      <p className="text-sm mt-2" style={{ color: '#8A784E' }}>
                        PDF, Images, Word documents
                      </p>
                    </div>
                  </div>
                  
                  {form.filePreview && (
                    <div className="mt-4 p-4 rounded-xl" style={{ backgroundColor: '#E7EFC7' }}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-6 h-6" style={{ color: '#8A784E' }} />
                          <span className="font-medium" style={{ color: '#3B3B1A' }}>{form.file?.name}</span>
                        </div>
                        <a
                          href={form.filePreview}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-opacity duration-200 hover:opacity-70"
                          style={{ color: '#8A784E' }}
                        >
                          <Eye className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {error && (
                  <div className="px-4 py-3 rounded-xl border" style={{ backgroundColor: '#E7EFC7', borderColor: '#8A784E', color: '#3B3B1A' }}>
                    {error}
                  </div>
                )}

                <button
                  onClick={handleUpload}
                  className="w-full font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  style={{ backgroundColor: '#8A784E', color: '#E7EFC7' }}
                >
                  Upload Record
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Records Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {records.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <FileText className="w-16 h-16 mx-auto mb-4" style={{ color: '#AEC8A4' }} />
              <p className="text-xl font-semibold" style={{ color: '#8A784E' }}>No records uploaded yet</p>
              <p className="mt-2" style={{ color: '#8A784E' }}>Click "Add New Record" to get started</p>
            </div>
          ) : (
            records.map((record, index) => (
              <div
                key={record.id}
                className="group rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ backgroundColor: '#AEC8A4' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: '#E7EFC7' }}>
                    <FileText className="w-5 h-5" style={{ color: '#3B3B1A' }} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getSystemBadgeColor(record.bodySystem)}`}>
                    {record.bodySystem || 'General'}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:opacity-70 transition-opacity duration-200" style={{ color: '#3B3B1A' }}>
                  {record.title}
                </h3>

                <div className="space-y-2 text-sm">
                  {record.doctor && (
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" style={{ color: '#8A784E' }} />
                      <span style={{ color: '#3B3B1A' }}>{record.doctor}</span>
                    </div>
                  )}
                  {record.date && (
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" style={{ color: '#8A784E' }} />
                      <span style={{ color: '#3B3B1A' }}>{new Date(record.date).toLocaleDateString()}</span>
                    </div>
                  )}
                  {record.type && (
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4" style={{ color: '#8A784E' }} />
                      <span style={{ color: '#3B3B1A' }}>{record.type}</span>
                    </div>
                  )}
                </div>

                {record.filePreview && (
                  <div className="mt-4 pt-4" style={{ borderTop: '1px solid #8A784E' }}>
                    <a
                      href={record.filePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 font-medium transition-opacity duration-200 hover:opacity-70"
                      style={{ color: '#8A784E' }}
                    >
                      <Eye className="w-4 h-4" />
                      <span>View File</span>
                    </a>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthRecordOrganizer;