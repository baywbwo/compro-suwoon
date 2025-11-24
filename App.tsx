import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* ID 'home' untuk tombol Home/Logo */}
        <section id="home">
          <Hero />
        </section>

        <Stats />

        {/* ID 'services' untuk menu Solutions */}
        <section id="services" className="py-24 bg-white scroll-mt-20">
          <Services />
        </section>

        {/* ID 'about' untuk menu About Us */}
        <section id="about" className="py-24 bg-brand-surface relative overflow-hidden scroll-mt-20">
          <WhyChooseUs />
        </section>

        {/* ID 'portfolio' untuk menu Portfolio */}
        <section id="portfolio" className="py-24 bg-white scroll-mt-20">
          <Portfolio />
        </section>

        {/* ID 'pricing' untuk menu Pricing */}
        <section id="pricing" className="py-24 bg-brand-surface scroll-mt-20">
          <Pricing />
        </section>

        {/* ID 'contact' untuk tombol Support/Hubungi Kami */}
        <section id="contact" className="py-20 bg-brand-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Siap Mengoptimalkan Infrastruktur IT Anda?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">Konsultasikan kebutuhan jaringan dan keamanan kantor Anda bersama ahli kami. Gratis survei awal.</p>
            <a 
              href="https://wa.me/6289618451510?text=Halo%20Suwoon%20Techwork,%20saya%20tertarik%20untuk%20konsultasi%20project" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-pink hover:bg-brand-pinkDark text-white font-bold py-4 px-10 rounded-lg shadow-glow transition-all duration-300 transform hover:-translate-y-1"
            >
              Hubungi Kami Sekarang
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;