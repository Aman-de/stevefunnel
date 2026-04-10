import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Play, Target, Clock, Shield, ChevronRight, ChevronDown, CheckCircle2, ArrowRight, X } from 'lucide-react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = "", direction = 'up' }) => {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-white/10 last:border-0 relative overflow-hidden group">
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
      <button 
        onClick={onClick}
        className="w-full py-5 md:py-6 px-4 flex justify-between items-center text-left focus:outline-none group hover:text-[#C5A059] transition-all duration-300 relative z-10"
      >
        <h4 className="text-base md:text-lg font-medium text-white group-hover:text-[#C5A059] transition-colors pr-2 md:pr-8">{question}</h4>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }} 
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-[#C5A059] group-hover:bg-[#C5A059]/10 transition-colors ml-2"
        >
          <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden relative z-10 px-4"
          >
            <p className="pb-5 md:pb-6 pt-2 text-sm md:text-base text-gray-400 font-light leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formState, setFormState] = useState({ state: 'idle' });
  const { scrollYProgress } = useScroll();
  const opacityGradient = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ state: 'submitting' });
    setTimeout(() => {
      setFormState({ state: 'success' });
      setTimeout(() => {
        setIsFormOpen(false);
        setFormState({ state: 'idle' });
      }, 2000);
    }, 1500);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    {
      q: "Is this a multi-level marketing (MLM) structure?",
      a: "Absolutely not. We are a direct-to-consumer agency. Your baseline income comes from your own pen, not recruiting your warm market."
    },
    {
      q: "Do I have to cold call?",
      a: "No. We utilize high-intent leads who have proactively requested information. No recycled sheets or knocking on doors."
    },
    {
      q: "How does the 100% Virtual model work?",
      a: "No driving. We operate a virtual telesales model via Zoom. You dial from 8 AM to 11 AM, train with the team, and close from your home office."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-100 font-sans selection:bg-[#C5A059]/30 selection:text-white pb-24 md:pb-0 overflow-x-hidden">
      
      {/* Background Effects */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <motion.div 
          style={{ opacity: opacityGradient }}
          className="absolute top-[-5%] md:top-[-10%] left-1/2 -translate-x-1/2 w-[300px] md:w-[1000px] h-[300px] md:h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1B4986]/30 via-[#0A0A0A]/0 to-transparent blur-3xl rounded-[100%] transition-opacity duration-1000"
        ></motion.div>
        {/* Subtle grid pattern map */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDEwaDQwTTAgMjBoNDBNMCAzMGg0ME0xMCAwdjQwTTIwIDB2NDBTMzAgMHY0MCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAuMDUiIGZpbGw9Im5vbmUiIC8+Cjwvc3ZnPg==')] opacity-[0.1] mix-blend-overlay"></div>
      </div>
      
      {/* SECTION 1: HEADER & NAVIGATION */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-500 border-b ${
          scrolled ? "bg-[#0A0A0A]/85 backdrop-blur-xl border-white/10 py-3 md:py-4 shadow-2xl" : "bg-transparent border-transparent py-4 md:py-6"
        } px-4 md:px-12 flex justify-between items-center`}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C5A059] to-[#8C6D33] flex items-center justify-center shadow-lg">
            <span className="font-heading font-bold text-black text-sm">CF</span>
          </div>
          <span className="font-heading font-bold tracking-tight text-white text-base md:text-lg hidden sm:block">Current Financial</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[9px] md:text-xs uppercase tracking-widest text-gray-500 font-medium">Powered by</span>
          <div className="h-3 w-[1px] bg-white/10"></div>
          <span className="text-[9px] md:text-xs uppercase tracking-widest text-[#1B4986] font-bold drop-shadow-[0_0_10px_rgba(27,73,134,0.5)]">InsuraTec</span>
        </div>
      </motion.nav>

      <main className="relative z-10 flex flex-col items-center">
        
        {/* SECTION 2: THE HERO & VSL */}
        <section className="w-full flex flex-col items-center px-4 pt-32 pb-16 md:pt-48 md:pb-24 text-center max-w-5xl mx-auto relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] h-[300px] md:h-[500px] bg-[#C5A059]/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none"></div>

          <FadeIn direction="up">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-sm tracking-wide mb-8 md:mb-10 cursor-pointer"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse"></div>
              <span className="text-[10px] md:text-xs text-gray-300 font-medium uppercase tracking-[0.1em]">The Modern Agency Standard</span>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-[42px] leading-[1.05] md:text-6xl lg:text-[80px] font-bold tracking-tight text-white mb-6 md:mb-8 px-2">
              Stop Starting at Zero.<br/>
              Build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF68] to-[#C5A059]">100% Virtual</span>,<br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF68] to-[#C5A059]">Residual-Income</span> Business.
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-[15px] md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 md:mb-14 font-light leading-relaxed px-4 md:px-0">
              Plug into the industry’s most advanced proprietary lead ecosystem. No cold calling. No recycled leads. Watch the corporate overview below.
            </p>
          </FadeIn>

          {/* VSL Container */}
          <FadeIn delay={0.3} className="w-full max-w-4xl relative group cursor-pointer mb-12 md:mb-16">
             {/* Dynamic Glow */}
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-[#C5A059]/30 to-[#1B4986]/30 rounded-[28px] md:rounded-[36px] blur-xl md:blur-2xl opacity-50 md:opacity-40 group-hover:opacity-80 transition-opacity duration-700"></div>
            
            <div className="relative isolate w-full aspect-video rounded-2xl md:rounded-3xl bg-[#050505] overflow-hidden border border-white/10 md:border-white/20 shadow-[-10px_10px_50px_rgba(0,0,0,0.8)]">
              {/* Poster Image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-[#0A0A0A]/50 to-[#1B4986]/20">
                <motion.div 
                  className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay grayscale origin-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                ></motion.div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 glass-panel rounded-full flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_30px_rgba(197,160,89,0.2)] transition-all duration-300 relative group-hover:border-[#C5A059]/40 group-hover:shadow-[0_0_50px_rgba(197,160,89,0.5)]"
                >
                   {/* Ripple Effect base */}
                  <div className="absolute inset-0 rounded-full border border-[#C5A059]/50 animate-ping opacity-20"></div>
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#C5A059] ml-1 sm:ml-2" fill="currentColor" />
                </motion.div>
              </div>
            </div>
          </FadeIn>

          {/* CTA & Trust Bar */}
          <FadeIn delay={0.4} className="w-full flex flex-col items-center relative z-20">
             <motion.a 
              href="#apply"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-br from-[#C5A059] via-[#D4AF68] to-[#AA8542] text-black px-8 py-4 md:px-12 md:py-5 rounded-full font-bold text-base md:text-lg transition-all shadow-[0_0_30px_rgba(197,160,89,0.25)] hover:shadow-[0_0_40px_rgba(197,160,89,0.4)] w-full sm:w-auto overflow-hidden group relative"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              <span className="relative z-10 flex items-center gap-2">Apply For The Agency <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" /></span>
            </motion.a>

            <div className="mt-16 md:mt-24 text-center w-full px-4 border-t border-white/5 pt-10">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 font-medium mb-6 block">Our Exclusive Partnership Ecosystem</span>
              <div className="flex flex-row flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                <span className="font-heading font-extrabold text-xl md:text-2xl tracking-tighter text-white">UNITRUST<span className="font-light text-gray-400">FINANCIAL</span></span>
                <span className="font-sans font-bold text-lg md:text-xl tracking-wide text-white">InsuraTec <span className="text-[#1B4986]">■</span></span>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* SECTION 3: THE MENTOR & THE PROOF */}
        <section className="w-full px-4 sm:px-6 py-20 md:py-32 bg-[#030303] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#C5A059]/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2 md:translate-x-1/3"></div>
          
          <div className="max-w-6xl mx-auto relative z-10 border border-white/5 rounded-[32px] md:rounded-[48px] p-4 md:p-8 lg:p-12 glass-panel bg-[#0A0A0A]/30">
             <FadeIn>
                <div className="text-center mb-12 md:mb-16">
                  <span className="text-[#C5A059] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 block">Executive Mentorship</span>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Direct Access to the Top</h2>
                  <p className="text-gray-400 font-light max-w-2xl mx-auto text-sm md:text-base leading-relaxed px-4">Learn practically from a producing founder who leads from the front.</p>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Image Area */}
              <FadeIn className="lg:col-span-5 relative h-[400px] sm:h-[450px] lg:h-[650px] rounded-[24px] md:rounded-[40px] overflow-hidden p-1 group bg-gradient-to-b from-white/10 to-transparent" direction="right">
                <div className="w-full h-full rounded-[20px] md:rounded-[36px] bg-[#0A0A0A] overflow-hidden relative isolate">
                   <motion.div 
                     whileHover={{ scale: 1.05 }}
                     transition={{ duration: 1.2, ease: "easeOut" }}
                     className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale mix-blend-luminosity opacity-70"
                   ></motion.div>
                   
                   <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/50 to-transparent"></div>
                   
                   <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 glass-panel p-4 md:p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                     <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">Steven</h3>
                     <p className="text-[#C5A059] font-medium tracking-wider uppercase text-[10px] md:text-xs">Founder, Current Financial</p>
                   </div>
                </div>
              </FadeIn>

              {/* Widgets Area */}
              <div className="lg:col-span-7 flex flex-col justify-center gap-4 md:gap-6">
                
                <FadeIn delay={0.1} direction="left">
                  <div className="glass-panel glass-panel-hover p-6 md:p-8 rounded-[20px] md:rounded-[32px] relative overflow-hidden group bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-[#C5A059]/30">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#C5A059]/10 to-transparent rounded-full blur-2xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="flex items-start gap-4 md:gap-6">
                      <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C5A059]/10 group-hover:border-[#C5A059]/40 transition-all duration-300 shadow-inner group-hover:shadow-[0_0_20px_rgba(197,160,89,0.2)]">
                        <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-[#C5A059] transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-lg md:text-xl font-heading font-semibold text-white mb-2 md:mb-3">Direct Mentorship</h4>
                        <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
                          You aren't just getting a portal login. You get direct coaching from a leader who actually writes business, not a recruiter who sells hype.
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.2} direction="left">
                  <div className="glass-panel glass-panel-hover p-6 md:p-8 rounded-[20px] md:rounded-[32px] relative overflow-hidden group bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-[#1B4986]/40">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1B4986]/20 to-transparent rounded-full blur-2xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="flex flex-col gap-4 md:gap-5">
                      <h4 className="text-lg md:text-xl font-heading font-semibold text-white">The 90-Day Standard</h4>
                      <div className="w-full h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent my-1"></div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                           <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mb-1 md:mb-2 font-medium">Production</p>
                           <p className="number-stat text-2xl md:text-4xl font-bold text-white tracking-tight group-hover:text-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all">$32,000</p>
                        </div>
                        <div>
                           <p className="text-[10px] md:text-xs text-[#C5A059]/70 uppercase tracking-widest mb-1 md:mb-2 font-medium">Pure Profit</p>
                           <p className="number-stat text-2xl md:text-4xl font-bold text-[#C5A059] tracking-tight group-hover:text-shadow-[0_0_15px_rgba(197,160,89,0.4)] transition-all">$24,000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3} direction="left">
                  <div className="glass-panel glass-panel-hover p-6 md:p-8 rounded-[20px] md:rounded-[32px] relative overflow-hidden group bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-[#C5A059]/30">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#C5A059]/10 to-transparent rounded-full blur-2xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="flex items-start gap-4 md:gap-6">
                      <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C5A059]/10 group-hover:border-[#C5A059]/40 transition-all duration-300 shadow-inner group-hover:shadow-[0_0_20px_rgba(197,160,89,0.2)]">
                        <Target className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-[#C5A059] transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-lg md:text-xl font-heading font-semibold text-white mb-2 md:mb-3">Consistent Volume</h4>
                        <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
                          Recognized in the elite $5K Club. We teach the exact scripts and daily schedule to scale efficiently to multi-six figures.
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>

              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: THE SYSTEM */}
        <section className="w-full px-4 sm:px-6 py-20 md:py-32 relative bg-[#070707] border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12 md:mb-20">
                <span className="text-[#C5A059] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 block">Infrastructure</span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-white">
                  The Unfair Advantage
                </h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {/* Card 1 */}
              <FadeIn delay={0.1} className="h-full">
                 <div className="h-full glass-panel glass-panel-hover p-6 md:p-8 rounded-[24px] md:rounded-[32px] flex flex-col group relative overflow-hidden border border-white/5 hover:border-[#1B4986]/30">
                   <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#1B4986]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                   <div className="relative z-10">
                     <div className="w-12 h-12 md:w-16 md:h-16 rounded-[18px] bg-[#1B4986]/10 border border-[#1B4986]/30 flex items-center justify-center mb-6 text-[#1B4986] group-hover:bg-[#1B4986] group-hover:text-white group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(27,73,134,0.3)] transition-all duration-300">
                       <Target strokeWidth={1.5} className="w-6 h-6 md:w-7 md:h-7" />
                     </div>
                     <h3 className="text-xl md:text-2xl font-heading font-semibold text-white mb-3 md:mb-4">Proprietary Lead Flow</h3>
                     <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed flex-1">
                       High-intent Mortgage Protection and Life leads. Families who actually requested help. <span className="text-white font-medium">Zero cold calling.</span>
                     </p>
                   </div>
                 </div>
              </FadeIn>

              {/* Card 2 */}
              <FadeIn delay={0.2} className="h-full">
                 <div className="h-full glass-panel glass-panel-hover p-6 md:p-8 rounded-[24px] md:rounded-[32px] flex flex-col group relative overflow-hidden border border-white/5 hover:border-white/20">
                   <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                   <div className="relative z-10">
                     <div className="w-12 h-12 md:w-16 md:h-16 rounded-[18px] bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)] transition-all duration-300">
                       <Clock strokeWidth={1.5} className="w-6 h-6 md:w-7 md:h-7" />
                     </div>
                     <h3 className="text-xl md:text-2xl font-heading font-semibold text-white mb-3 md:mb-4">48-Hour Pay Cycle</h3>
                     <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed flex-1">
                       Stop waiting for funding. Our A-rated carriers pay commissions within 2 business days of policy issuance.
                     </p>
                   </div>
                 </div>
              </FadeIn>

              {/* Card 3 */}
              <FadeIn delay={0.3} className="h-full sm:col-span-2 md:col-span-1">
                 <div className="h-full glass-panel glass-panel-hover p-6 md:p-8 rounded-[24px] md:rounded-[32px] flex flex-col group relative overflow-hidden border border-white/5 hover:border-[#C5A059]/30">
                   <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#C5A059]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                   <div className="relative z-10">
                     <div className="w-12 h-12 md:w-16 md:h-16 rounded-[18px] bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center mb-6 text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(197,160,89,0.2)] transition-all duration-300">
                       <Shield strokeWidth={1.5} className="w-6 h-6 md:w-7 md:h-7" />
                     </div>
                     <h3 className="text-xl md:text-2xl font-heading font-semibold text-white mb-3 md:mb-4">Vested Residuals</h3>
                     <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed flex-1">
                       Own your book of business from day one. Earn overrides and build an asset that pays you every single year.
                     </p>
                   </div>
                 </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* SECTION 5: FAQ & FILTER */}
        <section id="apply" className="w-full px-4 sm:px-6 pt-16 pb-20 md:py-32 relative bg-[#050505]">
          <div className="max-w-4xl mx-auto">
            
            <FadeIn className="text-center mb-12 md:mb-20">
              <span className="text-[#C5A059] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 block">Application</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-white mb-4 md:mb-6">Who We Partner With</h2>
              <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-2xl mx-auto px-2">
                We are looking for licensed, experienced producers tired of bad splits and terrible leads. We also mentor highly coachable, unlicensed individuals through our 70%-pass-rate Xcel program.
              </p>
            </FadeIn>

            {/* Accordion FAQ */}
            <FadeIn delay={0.1} className="mb-12 md:mb-16">
              <div className="glass-panel border-white/5 bg-[#0A0A0A]/40 rounded-[20px] md:rounded-[32px] p-2 md:p-4">
                <h3 className="text-lg md:text-xl font-heading font-medium text-white mb-2 md:mb-4 px-6 pt-6">Frequently Asked Questions</h3>
                <div className="px-2">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      question={faq.q} 
                      answer={faq.a} 
                      isOpen={openFaq === index} 
                      onClick={() => setOpenFaq(openFaq === index ? null : index)} 
                    />
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Application Form Banner */}
            <FadeIn delay={0.2}>
              <div className="glass-panel p-[1px] rounded-[24px] md:rounded-[40px] group bg-gradient-to-b from-white/10 to-transparent overflow-hidden">
                <div className="w-full bg-[#0A0A0A] rounded-[23px] md:rounded-[39px] min-h-[400px] md:min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-[#0C0C0C] transition-colors duration-500">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-96 h-48 md:h-96 bg-[#C5A059]/10 blur-[80px] rounded-full group-hover:bg-[#C5A059]/20 transition-colors duration-700"></div>
                  
                  <div className="text-center z-10 px-6 py-12 md:py-16">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-[20px] bg-gradient-to-br from-[#C5A059]/10 to-transparent border border-[#C5A059]/30 flex items-center justify-center mx-auto mb-6 md:mb-8 cursor-pointer shadow-[0_0_30px_rgba(197,160,89,0.15)] group-hover:border-[#C5A059]/60 transition-all duration-300"
                    >
                      <ChevronRight className="text-[#C5A059] w-8 h-8 md:w-10 md:h-10 ml-1" />
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-heading font-medium text-white mb-3 md:mb-4">Begin Your Application</h3>
                    <p className="text-sm md:text-base text-gray-500 font-light max-w-sm md:max-w-md mx-auto mb-8 md:mb-10 leading-relaxed">
                      Click below to open the form. Ensure you have 5-10 minutes to complete the initial filter. We review applications daily.
                    </p>
                    
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsFormOpen(true)}
                      className="px-8 py-4 md:px-10 md:py-4 bg-[#C5A059] text-black hover:bg-[#D4AF68] rounded-full font-bold transition-all flex items-center justify-center gap-2 mx-auto text-sm md:text-base shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_40px_rgba(197,160,89,0.5)]"
                    >
                      Start Filter Form <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <AnimatePresence>
          {scrolled && (
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="fixed bottom-0 left-0 w-full p-4 md:hidden z-50 pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-t before:from-[#0A0A0A] before:via-[#0A0A0A]/95 before:to-transparent before:-z-10"
            >
              <motion.a 
                href="#apply"
                whileTap={{ scale: 0.96 }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#C5A059] to-[#D4AF68] text-black px-6 py-4 rounded-2xl font-bold pointer-events-auto shadow-[0_10px_30px_rgba(197,160,89,0.3)] text-base overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center gap-2">Apply For The Agency <ArrowRight className="w-4 h-4" /></span>
                <div className="absolute inset-0 bg-white/20 opacity-0 active:opacity-100 transition-opacity"></div>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form Modal */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            >
              <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                onClick={() => setIsFormOpen(false)}
              ></div>
              
              <motion.div
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                className="relative w-full max-w-xl glass-panel bg-[#0A0A0A]/90 border border-white/10 rounded-[32px] p-6 sm:p-10 shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32"></div>

                <div className="flex justify-between items-center mb-8 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Agency Application</h3>
                    <p className="text-sm text-gray-400">Complete this filter to see if you're a fit.</p>
                  </div>
                  <button 
                    onClick={() => setIsFormOpen(false)}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {formState.state === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center text-center relative z-10"
                  >
                    <div className="w-20 h-20 bg-[#C5A059]/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-[#C5A059]" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-3">Application Received</h4>
                    <p className="text-gray-400 max-w-sm">We'll review your details and reach out within 24 hours if there's a mutual fit.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-medium ml-2">First Name</label>
                        <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-[#C5A059]/50 transition-colors" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-medium ml-2">Last Name</label>
                        <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-[#C5A059]/50 transition-colors" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-medium ml-2">Email Address</label>
                        <input required type="email" className="w-full bg-black/50 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-[#C5A059]/50 transition-colors" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-medium ml-2">Phone Number</label>
                        <input required type="tel" className="w-full bg-black/50 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-[#C5A059]/50 transition-colors" placeholder="(555) 000-0000" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gray-500 font-medium ml-2">Are you currently licensed?</label>
                      <select required className="w-full bg-black/50 border border-white/10 rounded-2xl px-4 py-3 text-white filter-none focus:outline-none focus:border-[#C5A059]/50 transition-colors appearance-none">
                        <option value="" className="bg-[#0A0A0A]">Select an option</option>
                        <option value="yes" className="bg-[#0A0A0A]">Yes, I am currently licensed</option>
                        <option value="no" className="bg-[#0A0A0A]">No, I am not licensed yet</option>
                        <option value="course" className="bg-[#0A0A0A]">No, but I am in a course</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gray-500 font-medium ml-2">Why are you a good fit?</label>
                      <textarea required rows={3} className="w-full bg-black/50 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-[#C5A059]/50 transition-colors resize-none" placeholder="Briefly explain your background..."></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={formState.state === 'submitting'}
                      className="w-full mt-6 bg-gradient-to-r from-[#C5A059] to-[#D4AF68] text-black font-bold py-4 rounded-2xl hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {formState.state === 'submitting' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                          Submitting...
                        </>
                      ) : (
                        'Submit Application'
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </div>
  );
}

export default App;
