"use client";
import React, { useState, useRef } from "react";
import { FileText, User, Send, Stethoscope, Bold, Italic, List } from "lucide-react";

export default function ReportsPage() {
  const [aadhaarId, setAadhaarId] = useState("");
  const [reportContent, setReportContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const insertText = (before: string, after: string = "") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart || 0;
    const end = textarea.selectionEnd || 0;
    const selectedText = reportContent.substring(start, end);
    const newText = reportContent.substring(0, start) + before + selectedText + after + reportContent.substring(end);
    
    setReportContent(newText);
    
    // Reset cursor position
    setTimeout(() => {
      if (textarea) {
        textarea.focus();
        textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length);
      }
    }, 0);
  };

  const formatBold = () => insertText("**", "**");
  const formatItalic = () => insertText("*", "*");
  const insertBullet = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    
    const start = textarea.selectionStart || 0;
    const beforeCursor = reportContent.substring(0, start);
    const afterCursor = reportContent.substring(start);
    
    // Check if we're at the beginning of a line
    const atLineStart = start === 0 || reportContent[start - 1] === '\n';
    const bullet = atLineStart ? "• " : "\n• ";
    
    setReportContent(beforeCursor + bullet + afterCursor);
    setTimeout(() => {
      if (textarea) {
        textarea.focus();
        textarea.setSelectionRange(start + bullet.length, start + bullet.length);
      }
    }, 0);
  };

  const insertTemplate = () => {
    const template = `PATIENT ASSESSMENT REPORT

Patient Details:
• Name: 
• Age: 
• Gender: 

Chief Complaint:


Present History:


Clinical Examination:


Diagnosis:


Treatment Plan:


Follow-up Instructions:


Doctor's Signature: ________________
Date: ${new Date().toLocaleDateString()}`;
    
    setReportContent(template);
  };

  const handleSubmit = async () => {
    if (!aadhaarId.trim() || !reportContent.trim()) return;
    
    setIsSubmitting(true);
    console.log("Aadhaar ID:", aadhaarId);
    console.log("Report:", reportContent);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    
    // Reset form
    setAadhaarId("");
    setReportContent("");
  };

  const getWordCount = () => {
    return reportContent.trim() ? reportContent.trim().split(/\s+/).length : 0;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E7EFC7' }}>
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl" style={{ backgroundColor: '#3B3B1A' }}>
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Medical Reports</h1>
              <p className="text-sm text-gray-600">Create and manage patient documentation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-6">
          {/* Patient ID Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100" style={{ backgroundColor: '#AEC8A4' }}>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-gray-700" />
                <span className="font-semibold text-gray-800">Patient Information</span>
              </div>
            </div>
            <div className="p-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter 12-digit Aadhaar ID"
                  className="w-full px-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:border-opacity-50 transition-all duration-200 placeholder-gray-400"
                  style={{ 
                    borderColor: aadhaarId ? '#8A784E' : '#e5e7eb'
                  }}
                  value={aadhaarId}
                  onChange={(e) => setAadhaarId(e.target.value)}
                  maxLength={12}
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-2 h-2 rounded-full" style={{ 
                    backgroundColor: aadhaarId.length === 12 ? '#8A784E' : '#d1d5db' 
                  }}></div>
                </div>
              </div>
              {aadhaarId && (
                <p className="mt-2 text-sm text-gray-600">
                  ID Length: {aadhaarId.length}/12
                </p>
              )}
            </div>
          </div>

          {/* Report Editor Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100" style={{ backgroundColor: '#AEC8A4' }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-gray-700" />
                  <span className="font-semibold text-gray-800">Medical Report</span>
                </div>
                <div className="text-sm text-gray-600">
                  {getWordCount()} words
                </div>
              </div>
            </div>
            
            {/* Formatting Toolbar */}
            <div className="px-6 py-3 bg-gray-50/50 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <button
                  onClick={formatBold}
                  className="p-2 rounded-lg hover:bg-white/60 transition-colors"
                  title="Bold (**text**)"
                >
                  <Bold className="h-4 w-4 text-gray-600" />
                </button>
                <button
                  onClick={formatItalic}
                  className="p-2 rounded-lg hover:bg-white/60 transition-colors"
                  title="Italic (*text*)"
                >
                  <Italic className="h-4 w-4 text-gray-600" />
                </button>
                <button
                  onClick={insertBullet}
                  className="p-2 rounded-lg hover:bg-white/60 transition-colors"
                  title="Bullet Point"
                >
                  <List className="h-4 w-4 text-gray-600" />
                </button>
                <div className="w-px h-6 bg-gray-300 mx-2"></div>
                <button
                  onClick={insertTemplate}
                  className="px-3 py-2 text-sm rounded-lg hover:bg-white/60 transition-colors text-gray-600"
                  title="Insert Report Template"
                >
                  Template
                </button>
              </div>
            </div>
            
            <div className="relative">
              <textarea
                ref={textareaRef}
                value={reportContent}
                onChange={(e) => setReportContent(e.target.value)}
                placeholder="Document your patient assessment, diagnosis, and treatment recommendations here...

Use the formatting tools above to structure your report:
• **Bold text** for important information
• *Italic text* for emphasis
• Bullet points for lists
• Or click 'Template' for a structured format"
                className="w-full min-h-[350px] p-6 bg-white/50 focus:bg-white transition-colors duration-200 border-0 resize-none focus:outline-none text-gray-800 leading-relaxed"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              />
              <div className="absolute bottom-4 right-4 opacity-30">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8A784E' }}>
                  <FileText className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              onClick={handleSubmit}
              disabled={!aadhaarId.trim() || !reportContent.trim() || isSubmitting}
              className="group relative px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none flex items-center gap-3"
              style={{ 
                backgroundColor: aadhaarId.trim() && reportContent.trim() ? '#3B3B1A' : '#9ca3af',
                boxShadow: aadhaarId.trim() && reportContent.trim() ? '0 10px 30px rgba(59, 59, 26, 0.3)' : 'none'
              }}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Submitting Report...</span>
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  <span>Submit Medical Report</span>
                </>
              )}
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Completion Status</span>
              <span>{aadhaarId && reportContent.trim() ? '100%' : aadhaarId || reportContent.trim() ? '50%' : '0%'}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 rounded-full transition-all duration-500 ease-out"
                style={{ 
                  backgroundColor: '#8A784E',
                  width: aadhaarId && reportContent.trim() ? '100%' : aadhaarId || reportContent.trim() ? '50%' : '0%'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}