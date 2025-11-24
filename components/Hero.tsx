import React from 'react';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative bg-brand-navy overflow-hidden min-h-[600px] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558494949-efdeb6bf80c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Data Center"
          className="w-full h-full object-cover opacity-10 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/70"></div>
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-blue rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-pink rounded-full filter blur-[80px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navyLight border border-brand-blue/30 text-brand-pink text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse"></span>
              IT Solutions Partner
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Enterprise Grade <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-purple-400">Network Solutions</span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              Kami menghadirkan standar infrastruktur IT korporat ke kantor dan rumah Anda. Layanan profesional untuk Instalasi LAN, CCTV, dan Maintenance System.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={(e) => handleScrollTo(e, 'services')}
                className="px-8 py-4 bg-brand-pink hover:bg-brand-pinkDark text-white font-bold rounded shadow-glow transition-all duration-300 text-center cursor-pointer"
              >
                Explore Solutions
              </button>
              <a
                href="https://wa.me/6289618451510"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 border border-gray-600 hover:border-white text-gray-300 hover:text-white font-bold rounded transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <i className="fab fa-whatsapp"></i> Chat Engineer
              </a>
            </div>

            <div className="pt-8 border-t border-gray-800 flex gap-8">
              <div>
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-xs text-gray-500 uppercase">Projects Done</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">99%</p>
                <p className="text-xs text-gray-500 uppercase">Satisfaction</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-xs text-gray-500 uppercase">Support Ready</p>
              </div>
            </div>
          </div>

          {/* Visual Element (Server/Rack Illustration or Image) */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-lg overflow-hidden border border-gray-700 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Server Rack" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-brand-navy/20"></div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-brand-navyLight p-4 rounded border border-gray-700 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-green-500"></i>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">System Online</p>
                  <p className="text-gray-400 text-xs">Latency 2ms</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};