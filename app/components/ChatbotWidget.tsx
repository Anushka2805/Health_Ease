"use client";
import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Minimize2 } from 'lucide-react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setHasNewMessage(false);
    if (isMinimized) setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  // Simulate new message notification
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setHasNewMessage(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Main Toggle Button */}
      <div className="relative">
        <button
          onClick={toggleChat}
          className="group relative bg-gradient-to-br from-[#AEC8A4] via-[#9BB894] to-[#8A784E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ease-out border-2 border-white/20"
        >
          <MessageCircle className="w-6 h-6 transition-transform group-hover:rotate-12" />
          
          {/* Pulse animation for new messages */}
          {hasNewMessage && !isOpen && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#AEC8A4] to-[#8A784E] animate-ping opacity-75"></div>
          )}
          
          {/* New message indicator */}
          {hasNewMessage && !isOpen && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-bounce">
              <div className="w-full h-full bg-red-400 rounded-full animate-pulse"></div>
            </div>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className={`absolute bottom-16 right-0 transition-all duration-300 ease-out ${
          isMinimized ? 'transform scale-y-0 origin-bottom' : 'transform scale-100'
        }`}>
          <div className="w-[380px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50 backdrop-blur-sm">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#AEC8A4] to-[#8A784E] px-6 py-4 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="relative flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">HealBot</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-white/90">Online</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={minimizeChat}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <Minimize2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={closeChat}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Chat Content */}
            {!isMinimized && (
              <div className="h-[480px] relative">
                <iframe
                  src="https://healbot-client-rouge.vercel.app/"
                  className="w-full h-full border-none"
                  title="Healbot Chat"
                  allow="microphone;"
                />
                
                {/* Loading overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300">
                  <div className="text-center">
                    <div className="w-8 h-8 border-3 border-[#AEC8A4] border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                    <p className="text-gray-600 text-sm">Loading HealBot...</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-[#AEC8A4] to-[#8A784E] rounded-full opacity-20"></div>
          <div className="absolute -top-1 -left-1 w-4 h-4 bg-gradient-to-br from-[#AEC8A4] to-[#8A784E] rounded-full opacity-30"></div>
        </div>
      )}
      
      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden -z-10"
          onClick={closeChat}
        ></div>
      )}
    </div>
  );
};

export default ChatbotWidget;
