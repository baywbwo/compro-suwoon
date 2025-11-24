import React, { useState, useEffect } from 'react';

// Tipe data untuk props Dropdown
interface NavItem {
  label: string;
  targetId: string; // Menggunakan ID section bukan URL
  icon: string;
}

const NavDropdown: React.FC<{ title: string; items: NavItem[]; onNavigate: (id: string) => void }> = ({ title, items, onNavigate }) => (
  <div className="group relative">
    <button className="flex items-center gap-1 text-gray-300 hover:text-white font-medium py-4 transition-colors focus:outline-none">
      {title}
      <i className="fas fa-chevron-down text-xs ml-1 transition-transform group-hover:rotate-180 text-brand-pink"></i>
    </button>
    {/* Dropdown Menu */}
    <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border-t-4 border-brand-pink opacity-0 invisible transform translate-y-2 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 z-50">
      <div className="py-2">
        {items.map((item, idx) => (
          <button 
            key={idx} 
            onClick={() => onNavigate(item.targetId)}
            className="w-full text-left flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-brand-pink transition-colors"
          >
            <div className="w-8 h-8 rounded bg-brand-surface flex items-center justify-center text-brand-pink">
              <i className={`fas ${item.icon}`}></i>
            </div>
            <div>
              <span className="block text-sm font-semibold">{item.label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  </div>
);

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);

  // Deteksi Scroll untuk ubah warna navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // FUNGSI UTAMA: Scroll Halus & Akurat
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Hitung offset agar tidak tertutup navbar sticky (80px buffer)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    // Tutup menu mobile setelah klik
    setIsOpen(false);
    setMobileSubMenu(null);
  };

  const toggleMobileSubMenu = (menu: string) => {
    setMobileSubMenu(mobileSubMenu === menu ? null : menu);
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-brand-navyLight border-b border-gray-800 text-xs text-gray-400 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="mailto:admin@suwoontech.com" className="hover:text-white transition-colors"><i className="fas fa-envelope mr-2"></i> admin@suwoontech.com</a>
            <a href="https://wa.me/6289618451510" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><i className="fab fa-whatsapp mr-2"></i> +62 896-1845-1510</a>
          </div>
          <div className="flex space-x-4">
             <button onClick={() => handleScrollTo('contact')} className="hover:text-brand-pink transition-colors">Support</button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-brand-navy shadow-lg py-2' : 'bg-brand-navy py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo - Scroll ke paling atas */}
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group z-50 relative focus:outline-none">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-pink to-brand-pinkDark rounded flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <i className="fas fa-server text-white text-lg"></i>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-white font-bold text-xl tracking-wide leading-none">SUWOON</span>
                <span className="text-brand-pink font-semibold text-xs tracking-[0.3em] uppercase">TECHWORK!</span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button onClick={() => handleScrollTo('home')} className="text-gray-300 hover:text-white font-medium py-2 border-b-2 border-transparent hover:border-brand-pink transition-all">
                Home
              </button>
              
              <NavDropdown 
                title="Solutions" 
                onNavigate={handleScrollTo}
                items={[
                  { label: 'IT Support Onsite', targetId: 'services', icon: 'fa-laptop-medical' },
                  { label: 'Network Infrastructure', targetId: 'services', icon: 'fa-network-wired' },
                  { label: 'Security Systems', targetId: 'services', icon: 'fa-shield-halved' }
                ]} 
              />
              
              <NavDropdown 
                title="Company" 
                onNavigate={handleScrollTo}
                items={[
                  { label: 'About Us', targetId: 'about', icon: 'fa-building' },
                  { label: 'Portfolio', targetId: 'portfolio', icon: 'fa-images' },
                  { label: 'Pricing', targetId: 'pricing', icon: 'fa-tags' }
                ]} 
              />

              <a 
                href="https://wa.me/6289618451510?text=Halo,%20saya%20ingin%20konsultasi%20layanan%20IT" 
                target="_blank" 
                rel="noreferrer"
                className="bg-brand-pink hover:bg-brand-pinkDark text-white px-6 py-2.5 rounded font-bold transition-all shadow-glow hover:shadow-lg transform hover:-translate-y-0.5 text-sm"
              >
                Get Started
              </a>
            </nav>

            {/* Mobile Burger */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden text-white p-2 focus:outline-none z-50"
              aria-label="Toggle Menu"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-brand-navy z-40 transform transition-transform duration-300 ease-in-out lg:hidden pt-24 px-6 overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col space-y-2 pb-10">
            <button onClick={() => handleScrollTo('home')} className="text-left text-xl font-bold text-white py-3 border-b border-gray-800">
              Home
            </button>
            
            {/* Mobile Accordion 1 */}
            <div>
              <button onClick={() => toggleMobileSubMenu('solutions')} className="flex justify-between items-center w-full text-xl font-bold text-white py-3 border-b border-gray-800">
                <span>Solutions</span>
                <i className={`fas fa-chevron-down text-sm transition-transform ${mobileSubMenu === 'solutions' ? 'rotate-180' : ''}`}></i>
              </button>
              <div className={`pl-4 flex flex-col space-y-3 mt-2 overflow-hidden transition-all duration-300 ${mobileSubMenu === 'solutions' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <button onClick={() => handleScrollTo('services')} className="text-left text-gray-400 hover:text-brand-pink">IT Support</button>
                <button onClick={() => handleScrollTo('services')} className="text-left text-gray-400 hover:text-brand-pink">Networking</button>
                <button onClick={() => handleScrollTo('services')} className="text-left text-gray-400 hover:text-brand-pink">CCTV Security</button>
              </div>
            </div>

            {/* Mobile Accordion 2 */}
            <div>
              <button onClick={() => toggleMobileSubMenu('company')} className="flex justify-between items-center w-full text-xl font-bold text-white py-3 border-b border-gray-800">
                <span>Company</span>
                <i className={`fas fa-chevron-down text-sm transition-transform ${mobileSubMenu === 'company' ? 'rotate-180' : ''}`}></i>
              </button>
              <div className={`pl-4 flex flex-col space-y-3 mt-2 overflow-hidden transition-all duration-300 ${mobileSubMenu === 'company' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <button onClick={() => handleScrollTo('about')} className="text-left text-gray-400 hover:text-brand-pink">About Us</button>
                <button onClick={() => handleScrollTo('portfolio')} className="text-left text-gray-400 hover:text-brand-pink">Portfolio</button>
                <button onClick={() => handleScrollTo('pricing')} className="text-left text-gray-400 hover:text-brand-pink">Pricing</button>
              </div>
            </div>

             <a 
               href="https://wa.me/6289618451510?text=Halo,%20saya%20ingin%20konsultasi%20layanan%20IT" 
               target="_blank"
               rel="noreferrer"
               className="mt-8 block w-full bg-brand-pink text-white text-center py-4 rounded-lg font-bold text-lg shadow-glow"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </header>
    </>
  );
};