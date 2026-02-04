
import React, { useState } from 'react';
import { PHONE_NUMBER, PHONE_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex flex-col">
            <span className="text-xl font-extrabold text-[#004481] tracking-tighter">LAS OLAS</span>
            <span className="text-xs font-semibold text-gray-500 tracking-widest uppercase -mt-1">Pipe Restoration</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-gray-600 hover:text-[#004481] font-bold text-sm uppercase transition">Services</a>
            <a href="#faq" className="text-gray-600 hover:text-[#004481] font-bold text-sm uppercase transition">FAQ</a>
            <a href="#advisor" className="text-gray-600 hover:text-[#004481] font-bold text-sm uppercase transition underline decoration-cyan-400">AI Advisor</a>
            <a 
              href={PHONE_LINK} 
              className="bg-[#004481] text-white px-6 py-3 rounded-full font-bold hover:bg-[#00c2cb] transition duration-300 shadow-lg"
            >
              {PHONE_NUMBER}
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-[#004481] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-2 font-bold text-gray-700">Services</a>
          <a href="#faq" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-2 font-bold text-gray-700">FAQ</a>
          <a href="#advisor" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-2 font-bold text-gray-700">AI Advisor</a>
          <a href={PHONE_LINK} className="w-full text-center bg-[#004481] text-white py-3 rounded-md font-bold">{PHONE_NUMBER}</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
