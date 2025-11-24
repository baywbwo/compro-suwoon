import React from 'react';

export const Stats: React.FC = () => {
  return (
    <div className="bg-brand-navyLight border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-widest mb-6">
          Teknologi Yang Kami Gunakan & Maintenance
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-300">
          {/* Tech Placeholders - Using Text/Icons for simplicity but representing brands */}
          <div className="flex items-center gap-2 text-gray-400 font-bold text-xl">
            <i className="fas fa-network-wired"></i> MikroTik
          </div>
          <div className="flex items-center gap-2 text-gray-400 font-bold text-xl">
            <i className="fas fa-wifi"></i> Ubiquiti
          </div>
          <div className="flex items-center gap-2 text-gray-400 font-bold text-xl">
            <i className="fas fa-server"></i> Cisco
          </div>
          <div className="flex items-center gap-2 text-gray-400 font-bold text-xl">
            <i className="fas fa-camera"></i> Hikvision
          </div>
          <div className="flex items-center gap-2 text-gray-400 font-bold text-xl">
            <i className="fab fa-windows"></i> Microsoft
          </div>
        </div>
      </div>
    </div>
  );
};