import React from 'react';

export const WhyChooseUs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
         <h2 className="text-brand-pink font-bold uppercase tracking-widest text-sm mb-2">Why Suwoon Techwork?</h2>
         <h3 className="text-3xl md:text-4xl font-extrabold text-brand-navy">Standar Kualitas Tanpa Kompromi</h3>
      </div>

      {/* Feature 1 */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cable Management" className="w-full" />
             <div className="absolute inset-0 bg-brand-navy/10 hover:bg-transparent transition-colors"></div>
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="bg-white p-2">
            <div className="w-12 h-12 bg-brand-navy rounded-lg flex items-center justify-center mb-6">
               <i className="fas fa-bezier-curve text-brand-pink text-2xl"></i>
            </div>
            <h4 className="text-2xl font-bold text-brand-navy mb-4">Structured Cabling Mastery</h4>
            <p className="text-gray-600 leading-relaxed mb-6">
              Kami tidak hanya "menyambung kabel". Kami menerapkan standar manajemen kabel yang rapi, terlabel, dan terdokumentasi. Ini memudahkan maintenance jangka panjang dan mengurangi risiko downtime akibat human error.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700 font-medium"><i className="fas fa-check-circle text-brand-pink mr-3"></i> Tampilan Profesional & Rapi</li>
              <li className="flex items-center text-gray-700 font-medium"><i className="fas fa-check-circle text-brand-pink mr-3"></i> Mudah ditelusuri (Tracing)</li>
              <li className="flex items-center text-gray-700 font-medium"><i className="fas fa-check-circle text-brand-pink mr-3"></i> Mengurangi risiko kebakaran/korsleting</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <div className="bg-white p-2">
            <div className="w-12 h-12 bg-brand-navy rounded-lg flex items-center justify-center mb-6">
               <i className="fas fa-headset text-brand-pink text-2xl"></i>
            </div>
            <h4 className="text-2xl font-bold text-brand-navy mb-4">Responsif & Solutif</h4>
            <p className="text-gray-600 leading-relaxed mb-6">
              Masalah IT tidak mengenal waktu. Tim kami siap memberikan respons cepat baik melalui remote support maupun kunjungan onsite. Kami fokus pada solusi permanen, bukan sekadar penanganan sementara.
            </p>
            <a href="#portfolio" className="text-brand-pink font-bold hover:text-brand-navy transition-colors inline-flex items-center">
              Lihat Hasil Kerja Kami <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
           <div className="relative rounded-xl overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1520869562399-e772f042f422?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Support" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};