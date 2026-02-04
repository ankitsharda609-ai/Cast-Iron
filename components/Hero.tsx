
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#004481]/95 to-[#004481]/70"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          Restore Your Pipes <br/><span className="text-[#00c2cb]">Without Destruction</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light max-w-2xl mx-auto">
          Advanced Cast Iron Descaling and High-Rise Stack Replacement for Fort Lauderdale's Premier Condominiums.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#services" 
            className="bg-white text-[#004481] px-10 py-4 rounded-md font-bold text-lg hover:bg-[#00c2cb] hover:text-white transition duration-300 shadow-xl"
          >
            View Technology
          </a>
          <a 
            href="#advisor" 
            className="border-2 border-white text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition duration-300"
          >
            AI Infrastructure Advisor
          </a>
        </div>
      </div>

      {/* Trust badge */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center opacity-70">
        <div className="flex items-center space-x-8 text-white text-xs tracking-widest uppercase font-bold">
          <span>Licensed Contractor</span>
          <span className="h-1 w-1 bg-white rounded-full"></span>
          <span>Insured & Bonded</span>
          <span className="h-1 w-1 bg-white rounded-full"></span>
          <span>50+ Years Experience</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
