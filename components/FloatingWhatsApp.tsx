import React from 'react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/6289618451510?text=Halo%20Suwoon%20Techwork,%20saya%20ingin%20konsultasi%20IT"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat via WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping group-hover:animate-none"></span>
      <div className="relative bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-300">
        <i className="fab fa-whatsapp text-3xl"></i>
      </div>
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Hubungi Kami
      </span>
    </a>
  );
};