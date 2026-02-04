
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PipeAdvisorAI from './components/PipeAdvisorAI';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        
        {/* Education Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://picsum.photos/seed/pipe1/800/1000" 
                alt="Pipe Descaling Technology" 
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#00c2cb] font-extrabold uppercase tracking-widest text-sm mb-4 block">Building Infrastructure</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#004481] mb-8 leading-tight">
                The Critical Guide to Cast Iron in Florida
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                If your home or condo was built before 1975, your sewer system is likely made of <strong>cast iron</strong>. In our humid, salty Fort Lauderdale climate, these pipes undergo a process called <strong>tuberculation</strong>.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-[#004481] font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-xl">Mechanical Removal</h4>
                    <p className="text-gray-500">Our specialized machinery uses carbide-tipped chains to scrape walls back to smooth metal.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-[#004481] font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-xl">Non-Destructive</h4>
                    <p className="text-gray-500">Accessing pipes via cleanouts means no trenching through your luxury flooring or common areas.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-[#004481] font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-xl">HD Video Verification</h4>
                    <p className="text-gray-500">We provide full recording of the lines before and after to ensure total restoration.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <PipeAdvisorAI />
        <FAQ />
      </main>
      <Contact />
    </div>
  );
};

export default App;
