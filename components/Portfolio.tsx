import React, { useState } from 'react';

// Reusable Image Comparison Component
const ImageComparison: React.FC<{ beforeImg: string; afterImg: string; label: string }> = ({ beforeImg, afterImg, label }) => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };

  return (
    <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden shadow-2xl select-none group border border-slate-200">
      {/* 
        LOGIC: 
        1. Both images are absolutely positioned and fill the container.
        2. The 'Before' image is on top.
        3. We use clip-path to crop the 'Before' image based on slider value.
        This ensures both images stay perfectly aligned regardless of container size.
      */}
      
      {/* After Image (Background/Bottom Layer) */}
      <img
        src={afterImg}
        alt="After Result"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 bg-brand-pink text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
        SESUDAH
      </div>

      {/* Before Image (Top Layer with Clip Path) */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          clipPath: `inset(0 ${100 - sliderValue}% 0 0)` 
        }}
      >
         <img
          src={beforeImg}
          alt="Before Result"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-gray-900/80 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
          SEBELUM
        </div>
      </div>

      {/* Slider Input Range (Invisible but functional overlay) */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleInput}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0 p-0"
        aria-label={`Comparison slider for ${label}`}
      />

      {/* Visual Slider Handle (Line + Circle) */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ left: `${sliderValue}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center border-4 border-white shadow-lg">
          <i className="fas fa-arrows-alt-h text-white text-sm"></i>
        </div>
      </div>
    </div>
  );
};

export const Portfolio: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-16">
        <h2 className="text-base text-brand-pink font-semibold tracking-wide uppercase">Portfolio</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-navy sm:text-4xl">
          Bukti Kualitas Kerja Kami
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Geser slider untuk melihat perbedaan kondisi sebelum dan sesudah pengerjaan tim Suwoon Techwork.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <h3 className="text-xl font-bold text-brand-navy mb-4 text-center">Rack Server Organization</h3>
          <ImageComparison 
            beforeImg="https://placehold.co/600x400/333/FFF?text=BEFORE+(Messy+Rack)" 
            afterImg="https://placehold.co/600x400/0f172a/db2777?text=AFTER+(Clean+Setup)" 
            label="Server Rack"
          />
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <h3 className="text-xl font-bold text-brand-navy mb-4 text-center">Office LAN Installation</h3>
           <ImageComparison 
            beforeImg="https://placehold.co/600x400/555/FFF?text=BEFORE+(Loose+Cables)" 
            afterImg="https://placehold.co/600x400/db2777/FFF?text=AFTER+(Structured+Cabling)" 
            label="Office LAN"
          />
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <a href="https://wa.me/6289618451510" className="inline-flex items-center text-brand-pink font-bold hover:text-brand-navy transition-colors text-lg">
          Lihat lebih banyak dokumentasi di Instagram <i className="fab fa-instagram ml-2 text-2xl"></i>
        </a>
      </div>
    </div>
  );
};