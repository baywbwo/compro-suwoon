import React from 'react';

export const Pricing: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-base text-brand-pink font-semibold tracking-wide uppercase">Harga Transparan</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-navy sm:text-4xl">
          Penawaran Terbaik
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Basic Plan */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Basic Visit</h3>
            <div className="mt-4 flex justify-center items-baseline">
              <span className="text-3xl font-extrabold text-brand-navy">Rp 150k</span>
              <span className="ml-1 text-gray-500">/visit</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">Start from</p>
          </div>
          <ul className="mt-8 space-y-4 flex-grow">
            <li className="flex items-center text-gray-600">
              <i className="fas fa-check text-brand-pink mr-3"></i>
              Kunjungan Teknisi
            </li>
            <li className="flex items-center text-gray-600">
              <i className="fas fa-check text-brand-pink mr-3"></i>
              Cek Kerusakan
            </li>
            <li className="flex items-center text-gray-600">
              <i className="fas fa-check text-brand-pink mr-3"></i>
              Konsultasi Solusi
            </li>
            <li className="flex items-center text-gray-600">
              <i className="fas fa-check text-brand-pink mr-3"></i>
              Transport (Area Terjangkau)
            </li>
          </ul>
          <div className="mt-8">
            <a 
              href="https://wa.me/6289618451510?text=Halo%20Admin,%20saya%20tertarik%20dengan%20paket%20Basic%20Visit%20(Rp150k)."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white border-2 border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white text-center font-bold py-3 rounded-lg transition-all duration-300"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>

        {/* Installation Plan (Featured) */}
        <div className="bg-white rounded-2xl p-8 border-2 border-brand-pink shadow-xl relative transform md:-translate-y-4 flex flex-col">
          <div className="absolute top-0 right-0 left-0 bg-brand-pink h-2 rounded-t-xl"></div>
          <div className="text-center">
             <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-pink/10 text-brand-pink mb-2">
              Most Popular
            </span>
            <h3 className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Instalasi LAN/CCTV</h3>
            <div className="mt-4 flex justify-center items-baseline">
              <span className="text-3xl font-extrabold text-brand-navy">Rp 250k</span>
              <span className="ml-1 text-gray-500">/titik</span>
            </div>
             <p className="mt-2 text-sm text-gray-500">Start from (Nego Qty)</p>
          </div>
          <ul className="mt-8 space-y-4 flex-grow">
            <li className="flex items-center text-gray-600">
              <i className="fas fa-check text-brand-pink mr-3"></i>
              Penarikan Kabel
            </li>
            <li className="flex items-center text-gray-600">
              <i className="fas fa-check text-brand-pink mr-3"></i>
              Terminating & Labeling
            </li>
            <li className="flex items-center text-gray-600">
              <i className="fas fa-check text-brand-pink mr-3"></i>
              Setting Perangkat
            </li>
            <li className="flex items-center text-gray-600">
              <i className="fas fa-check text-brand-pink mr-3"></i>
              Garansi Instalasi
            </li>
          </ul>
          <div className="mt-8">
            <a 
              href="https://wa.me/6289618451510?text=Halo%20Admin,%20saya%20butuh%20jasa%20Instalasi%20LAN/CCTV."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-brand-pink border border-transparent text-white hover:bg-brand-pinkDark text-center font-bold py-3 rounded-lg transition-colors duration-300 shadow-lg shadow-pink-500/30"
            >
              Hubungi Sales
            </a>
          </div>
        </div>

        {/* Maintenance Plan */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Maintenance</h3>
            <div className="mt-4 flex justify-center items-baseline">
              <span className="text-2xl font-extrabold text-brand-navy">Custom</span>
            </div>
             <p className="mt-2 text-sm text-gray-500">Bulanan / Kontrak</p>
          </div>
          <ul className="mt-8 space-y-4 flex-grow">
            <li className="flex items-center text-gray-600">
              <i className="fas fa-check text-brand-pink mr-3"></i>
              Monitoring Rutin
            </li>
            <li className="flex items-center text-gray-600">
              <i className="fas fa-check text-brand-pink mr-3"></i>
              Prioritas Layanan
            </li>
            <li className="flex items-center text-gray-600">
              <i className="fas fa-check text-brand-pink mr-3"></i>
              Laporan Bulanan
            </li>
            <li className="flex items-center text-gray-600">
              <i className="fas fa-check text-brand-pink mr-3"></i>
              Backup Data
            </li>
          </ul>
          <div className="mt-8">
            <a 
              href="https://wa.me/6289618451510?text=Halo%20Admin,%20saya%20tertarik%20untuk%20kontrak%20Maintenance%20IT."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white border-2 border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white text-center font-bold py-3 rounded-lg transition-all duration-300"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};