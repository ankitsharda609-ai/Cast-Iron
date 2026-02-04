
import React, { useState, useRef, useEffect } from 'react';
import { getPipeAdvisorResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const PipeAdvisorAI: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to Las Olas Pipe Restoration. I'm your Technical Advisor. Do you have concerns about your building's cast iron pipes or recurring vertical stack leaks?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const response = await getPipeAdvisorResponse(userText, messages);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <section id="advisor" className="py-24 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-[#004481] p-6 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#00c2cb] rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl">🤖</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">AI Infrastructure Advisor</h3>
                <p className="text-cyan-100 text-xs">Expert Insights for Condo Plumbing</p>
              </div>
            </div>
            <div className="hidden sm:block px-3 py-1 bg-white/10 rounded-full text-white text-[10px] uppercase font-bold">
              Powered by Gemini 3
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="h-96 overflow-y-auto p-6 space-y-6 bg-gray-50"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-4 rounded-2xl shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-[#004481] text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex space-x-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="p-4 border-t bg-white flex items-center gap-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about descaling, repiping, or building age..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00c2cb] transition"
              disabled={isLoading}
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-[#00c2cb] text-white p-3 rounded-full hover:bg-[#004481] transition disabled:opacity-50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
          <div className="bg-gray-50 px-6 py-3 text-[10px] text-gray-400 text-center uppercase tracking-widest font-semibold border-t">
            For urgent issues call (844) 340-6413
          </div>
        </div>
      </div>
    </section>
  );
};

export default PipeAdvisorAI;
