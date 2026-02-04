
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#004481] mb-4">Expert Infrastructure Solutions</h2>
          <div className="h-1.5 w-24 bg-[#00c2cb] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Utilizing the most advanced plumbing technology to preserve and restore luxury assets in the Fort Lauderdale market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group bg-gray-50 p-10 rounded-2xl border-b-8 border-[#004481] hover:shadow-2xl hover:-translate-y-2 transition duration-500"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition duration-300 transform inline-block">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#004481] mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#advisor" className="text-[#00c2cb] font-bold text-sm uppercase tracking-widest flex items-center hover:translate-x-2 transition">
                Learn More 
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
