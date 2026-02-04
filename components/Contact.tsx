
import React from 'react';
import { PHONE_NUMBER, PHONE_LINK, OFFICE_ADDRESS } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div>
            <div className="flex flex-col mb-8">
              <span className="text-2xl font-extrabold text-[#00c2cb] tracking-tighter uppercase">Las Olas</span>
              <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase">Pipe Restoration</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              The premier destination for plumbing infrastructure restoration in high-rise condominiums and waterfront estates across Fort Lauderdale.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-[#00c2cb]">Visit Our Office</h4>
            <p className="text-gray-400 mb-4">{OFFICE_ADDRESS}</p>
            <p className="text-gray-400">Serving Victoria Park, Harbor Beach, & Galt Ocean Mile.</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-[#00c2cb]">Immediate Service</h4>
            <a 
              href={PHONE_LINK} 
              className="text-3xl md:text-4xl font-extrabold hover:text-[#00c2cb] transition block mb-4"
            >
              {PHONE_NUMBER}
            </a>
            <p className="text-gray-500 text-sm">Emergency dispatch for HOA managers and property owners available 24/7.</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 text-center text-gray-500 text-xs">
          <div className="flex flex-wrap justify-center gap-6 mb-6 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Licensed & Insured</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Las Olas Pipe Restoration. All Rights Reserved. Licensed Florida Plumbing Contractor.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
