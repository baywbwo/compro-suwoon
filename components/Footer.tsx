import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10 border-t border-brand-navyLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-pink rounded flex items-center justify-center">
                 <i className="fas fa-server text-white text-sm"></i>
              </div>
              <span className="font-bold text-xl tracking-wide">SUWOON <span className="text-brand-pink">TECHWORK!</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dedicated to providing top-tier IT infrastructure solutions. We build reliable networks and security systems for businesses and homes across Indonesia.
            </p>
            <div className="flex space-x-4">
              {['facebook-f', 'instagram', 'linkedin-in', 'twitter'].map((icon) => (
                <a key={icon} href="#" className="w-10 h-10 rounded-full bg-brand-navyLight flex items-center justify-center text-gray-400 hover:bg-brand-pink hover:text-white transition-all duration-300">
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-brand-pink pl-3">Solutions</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-brand-pink transition-colors">Managed IT Support</a></li>
              <li><a href="#services" className="hover:text-brand-pink transition-colors">Network Cabling</a></li>
              <li><a href="#services" className="hover:text-brand-pink transition-colors">CCTV Surveillance</a></li>
              <li><a href="#services" className="hover:text-brand-pink transition-colors">Access Control</a></li>
              <li><a href="#services" className="hover:text-brand-pink transition-colors">Server Rack Setup</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-brand-pink pl-3">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-brand-pink transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-brand-pink transition-colors">Our Projects</a></li>
              <li><a href="#pricing" className="hover:text-brand-pink transition-colors">Pricing Models</a></li>
              <li><a href="#" className="hover:text-brand-pink transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-pink transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
             <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-brand-pink pl-3">Contact</h4>
             <ul className="space-y-4 text-gray-400 text-sm">
               <li className="flex items-start">
                 <i className="fas fa-map-marker-alt mt-1 mr-3 text-brand-pink w-4"></i>
                 <span>Jawa Timur Area,<br/>Indonesia</span>
               </li>
               <li className="flex items-center">
                 <i className="fas fa-phone-alt mr-3 text-brand-pink w-4"></i>
                 <span>+62 896-1845-1510</span>
               </li>
               <li className="flex items-center">
                 <i className="fas fa-envelope mr-3 text-brand-pink w-4"></i>
                 <span>admin@suwoontech.com</span>
               </li>
               <li className="flex items-center">
                 <i className="fab fa-whatsapp mr-3 text-brand-pink w-4"></i>
                 <span>Chat via WhatsApp</span>
               </li>
             </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} SUWOON TECHWORK! All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">SLA</a>
          </div>
        </div>
      </div>
    </footer>
  );
};