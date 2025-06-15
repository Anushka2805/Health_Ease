"use client";
import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function ReportsPage() {
  const [aadhaarId, setAadhaarId] = useState("");

  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Write the patient report here...</p>",
  });

  const handleSubmit = () => {
    const reportHtml = editor?.getHTML();
    console.log("Aadhaar ID:", aadhaarId);
    console.log("Report:", reportHtml);
    // Here you'd send to your backend
  };

  return (
    <div className="p-10 space-y-4 max-w-3xl mx-auto">
      <input
        type="text"
        placeholder="Enter Aadhaar ID"
        className="border p-2 w-full rounded-md"
        value={aadhaarId}
        onChange={(e) => setAadhaarId(e.target.value)}
      />
      <EditorContent
        editor={editor}
        className="min-h-[200px] border rounded-md p-4 bg-white"
      />
      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Submit Report
      </button>
    </div>
  );
}
