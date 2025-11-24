import React from 'react';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      icon: 'fa-laptop-medical',
      title: 'IT Support Onsite',
      description: 'Penanganan masalah hardware dan software komputer secara menyeluruh di lokasi Anda.',
      features: ['Troubleshooting PC/Mac', 'Virus Removal', 'Data Recovery', 'Hardware Upgrade']
    },
    {
      icon: 'fa-network-wired',
      title: 'Network Solutions',
      description: 'Perancangan dan instalasi infrastruktur jaringan yang stabil dan aman.',
      features: ['LAN Cabling (Cat6)', 'MikroTik Config', 'Wi-Fi Management', 'VPN Server']
    },
    {
      icon: 'fa-shield-halved',
      title: 'Security Systems',
      description: 'Sistem keamanan modern yang dapat dipantau kapan saja dari mana saja.',
      features: ['IP Camera CCTV', 'Access Control', 'Remote Monitoring', 'Smart Detection']
    },
    {
      icon: 'fa-server',
      title: 'Infrastructure',
      description: 'Penataan ruang server dan manajemen kabel untuk efisiensi dan estetika.',
      features: ['Rack Server Setup', 'Cable Management', 'Labeling System', 'Cooling Advice']
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-brand-pink uppercase tracking-widest mb-2">Our Capabilities</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-brand-navy">Comprehensive IT Solutions</h3>
        <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-lg">
          Layanan terintegrasi untuk memastikan operasional bisnis Anda berjalan tanpa hambatan teknis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white p-6 rounded-xl border border-gray-100 shadow-card hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-brand-surface rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-navy transition-colors duration-300">
              <i className={`fas ${service.icon} text-2xl text-brand-navy group-hover:text-brand-pink transition-colors`}></i>
            </div>
            
            <h3 className="text-xl font-bold text-brand-navy mb-3">
              {service.title}
            </h3>
            
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              {service.description}
            </p>
            
            <div className="space-y-2 border-t border-gray-100 pt-4">
              {service.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-center text-xs text-gray-600">
                  <span className="w-1.5 h-1.5 bg-brand-pink rounded-full mr-2"></span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};