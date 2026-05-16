import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import unitrustLogo from './assets/unitrust-logo.png';

export default function SmsTerms() {
  const [isOptedOut, setIsOptedOut] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-100 font-sans selection:bg-[#C5A059]/30 selection:text-white flex flex-col">
      <nav className="w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10 py-4 md:py-6 px-4 md:px-8 lg:px-12 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C5A059] to-[#8C6D33] flex items-center justify-center shadow-[0_0_20px_rgba(197,160,89,0.3)]">
            <span className="font-heading font-bold text-black text-sm">CF</span>
          </div>
          <span className="font-heading font-bold tracking-tight text-white text-lg group-hover:text-[#C5A059] transition-colors">Current Financial</span>
        </a>
        <a href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to Home
        </a>
      </nav>

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 pt-16 pb-16 md:pt-24 md:pb-24 flex flex-col items-center justify-center text-center">
        <div className="mb-10 flex flex-col items-center">
          <span className="text-[#C5A059] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 block">Legal & Compliance</span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">SMS Terms & Conditions</h1>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C5A059] to-transparent rounded-full mx-auto"></div>
        </div>

        <div className="w-full max-w-2xl glass-panel p-8 md:p-12 rounded-[24px] border border-white/5 bg-[#0A0A0A]/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/5 blur-3xl pointer-events-none rounded-full -mr-32 -mt-32"></div>
          
          <div className="relative z-10 text-gray-300 font-light leading-relaxed space-y-8">
            <p className="text-lg md:text-xl text-white font-medium">
              Current Financial Group may send SMS messages to individuals who have expressed interest in career opportunities.
            </p>
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <p className="text-base md:text-lg mb-3">
                Message frequency varies.
              </p>
              <div className="inline-block px-4 py-2 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-lg mb-3">
                <p className="text-base md:text-lg text-[#C5A059] font-medium">
                  Reply <strong className="text-white">STOP</strong> to unsubscribe.
                </p>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Message and data rates may apply.
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col items-center text-left md:text-center">
                <label className="flex items-start md:items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-1 md:mt-0">
                    <input 
                      type="checkbox" 
                      className="sr-only" 
                      checked={isOptedOut}
                      onChange={(e) => setIsOptedOut(e.target.checked)}
                    />
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all duration-200 ${
                      isOptedOut 
                        ? 'bg-[#C5A059] border-[#C5A059]' 
                        : 'bg-black/50 border-white/30 group-hover:border-[#C5A059]/70'
                    }`}>
                      {isOptedOut && <Check className="w-3.5 h-3.5 text-black" strokeWidth={4} />}
                    </div>
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    I wish to opt out of receiving SMS messages from Current Financial.
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full relative z-10 border-t border-white/5 bg-[#030303] pt-8 pb-8 overflow-hidden mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-600 font-medium">Powered by</span>
              <img src={unitrustLogo} alt="UniTrust Financial Group" className="h-4 mix-blend-multiply brightness-75 contrast-125" />
            </div>
            <p className="text-[10px] md:text-xs text-gray-600 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Current Financial. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
