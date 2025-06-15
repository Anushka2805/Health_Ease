"use client";
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className="bg-gradient-to-br from-[#AEC8A4] to-[#8A784E] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="mt-3 w-[350px] h-[500px] bg-white border rounded-xl shadow-2xl overflow-hidden">
          <iframe
            src="https://healbot-client-rouge.vercel.app/"
            className="w-full h-full border-none"
            title="Healbot Chat"
            allow="microphone;"
          />
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
