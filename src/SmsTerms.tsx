import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import unitrustLogo from './assets/unitrust-logo.png';

export default function SmsTerms() {
  const [isConsented, setIsConsented] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-100 font-sans selection:bg-[#C5A059]/30 selection:text-white flex flex-col">
      <nav className="w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10 py-4 md:py-6 px-4 md:px-8 lg:px-12 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C5A059] to-[#8C6D33] flex items-center justify-center shadow-[0_0_20px_rgba(197,160,89,0.3)]">
            <span className="font-heading font-bold text-black text-sm">CF</span>
          </div>
          <span className="font-heading font-bold tracking-tight text-white text-lg group-hover:text-[#C5A059] transition-colors">Current Financial Group</span>
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
          <p className="text-base text-gray-400 max-w-xl text-center mb-6">
            Current Financial Group sends SMS messages related to career opportunities in the life insurance industry.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C5A059] to-transparent rounded-full mx-auto"></div>
        </div>

        <div className="w-full max-w-2xl glass-panel p-8 md:p-12 rounded-[24px] border border-white/5 bg-[#0A0A0A]/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/5 blur-3xl pointer-events-none rounded-full -mr-32 -mt-32"></div>
          
          <div className="relative z-10 text-gray-300 font-light leading-relaxed space-y-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center mt-2">
              <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
                <strong>Current Financial Group</strong> sends SMS messages related to career opportunities in the life insurance industry. Message frequency varies. Message and data rates may apply.
              </p>
              <div className="inline-block px-4 py-2 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-lg">
                <p className="text-sm md:text-base text-[#C5A059] font-medium">
                  Reply <strong className="text-white">STOP</strong> to opt out. Reply <strong className="text-white">HELP</strong> for help.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col items-center text-left">
                <div className="w-full space-y-4 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#C5A059]/50 focus:ring-1 focus:ring-[#C5A059]/50 transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1 ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#C5A059]/50 focus:ring-1 focus:ring-[#C5A059]/50 transition-all"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#C5A059]/50 focus:ring-1 focus:ring-[#C5A059]/50 transition-all"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="w-full relative">
                  <label className={`flex items-start gap-4 cursor-pointer group p-3 md:p-4 rounded-xl border transition-all duration-300 active:scale-[0.98] ${isConsented ? 'border-[#C5A059]/20 bg-[#C5A059]/[0.02]' : 'border-transparent hover:border-white/5 hover:bg-white/[0.02]'}`}>
                    <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                      <input 
                        type="checkbox" 
                        className="sr-only" 
                        checked={isConsented}
                        onChange={(e) => setIsConsented(e.target.checked)}
                      />
                      <div className={`w-6 h-6 rounded-md border flex items-center justify-center transition-all duration-300 ease-out ${
                        isConsented 
                          ? 'bg-[#C5A059] border-[#C5A059] shadow-[0_0_15px_rgba(197,160,89,0.4)] scale-105' 
                          : 'bg-black/50 border-white/30 group-hover:border-[#C5A059]/70 scale-100'
                      }`}>
                        <Check className={`w-4 h-4 text-black transition-all duration-300 ${isConsented ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} strokeWidth={3.5} />
                      </div>
                    </div>
                    <span className={`text-sm transition-colors leading-relaxed ${isConsented ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                      I agree to receive SMS messages from Current Financial Group about career opportunities. Message frequency varies. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help.
                    </span>
                  </label>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-out ${isConsented ? 'max-h-24 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}>
                    <div className="px-4 py-3 mx-2 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center gap-3 transform transition-transform duration-500">
                      <div className="w-8 h-8 shrink-0 rounded-full bg-[#C5A059]/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#C5A059]" strokeWidth={3} />
                      </div>
                      <p className="text-sm text-[#E2C792] font-medium leading-tight">
                        Great! We will send you a text message to confirm your enrollment here shortly.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="w-full mt-8 pt-6 border-t border-white/10 text-center">
                  <p className="text-sm text-gray-400">
                    For support contact us at <a href="mailto:steven@currentfinancialgroup.com" className="text-white hover:text-[#C5A059] transition-colors underline underline-offset-2">steven@currentfinancialgroup.com</a>
                  </p>
                </div>
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
            <p className="text-[10px] md:text-xs text-gray-500 hover:text-gray-400 transition-colors uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Current Financial Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
