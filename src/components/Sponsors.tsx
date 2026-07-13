import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const SPONSORS = [
  { 
    name: 'Ethiopian Airlines', 
    logo: 'input_file_4.png',
    photo: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&q=80&w=800',
    description: 'Official In-flight Culinary Partner'
  },
  { 
    name: 'Hilton Addis Ababa', 
    logo: 'input_file_3.png',
    photo: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    description: 'Preferred Luxury Hospitality Supplier'
  },
  { 
    name: 'Sheraton Addis', 
    logo: 'input_file_2.png',
    photo: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800',
    description: 'Exclusive Banquet Pasta Provider'
  },
  { 
    name: 'Hyatt Regency', 
    logo: 'input_file_0.png',
    photo: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800',
    description: 'Artisanal Selection for Signature Dining'
  },
  { 
    name: 'Emirates', 
    logo: 'input_file_1.png',
    photo: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800',
    description: 'Global Export Logistics Associate'
  },
];

export default function Sponsors() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SPONSORS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-brand-dark-green relative overflow-hidden border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-12">
          
          {/* Section Header & Persistent Logo Bar */}
          <div className="text-center space-y-8 w-full">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold/60 font-bold block">
                Strategic Alliances
              </span>
              <h3 className="text-brand-cream font-serif text-2xl md:text-3xl font-bold">
                Trusted by Global Industry Titans
              </h3>
            </div>

            {/* Original Logos Row */}
            <div className="max-w-4xl mx-auto px-8 py-6 rounded-[2rem] bg-brand-medium-green/10 border border-brand-gold/5 flex flex-wrap justify-center items-center gap-8 md:gap-16 transition-all duration-500 backdrop-blur-sm">
              {SPONSORS.map((sponsor, i) => (
                <button 
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-8 md:h-10 transition-all duration-500 relative group/logo ${i === index ? 'scale-110 opacity-100' : 'opacity-30 hover:opacity-100'}`}
                >
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className={`h-full object-contain transition-all duration-500 ${i === index ? 'drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]' : 'grayscale brightness-200'}`}
                    referrerPolicy="no-referrer"
                  />
                  {i === index && (
                    <motion.div 
                      layoutId="active-logo-glow"
                      className="absolute -inset-4 bg-brand-gold/5 rounded-2xl -z-10"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
          
          <div className="relative w-full max-w-5xl h-[500px] md:h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.02, x: -20 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="w-full h-full flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-brand-medium-green/20 rounded-[3rem] p-8 md:p-10 border border-brand-gold/10 overflow-hidden group shadow-[0_32px_64px_-15px_rgba(0,0,0,0.5)]"
              >
                {/* Photo Section with Logo Overlay */}
                <div className="w-full md:w-1/2 h-56 md:h-full rounded-[2.5rem] overflow-hidden relative shrink-0 shadow-2xl">
                  <motion.img 
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 5 }}
                    src={SPONSORS[index].photo} 
                    alt={SPONSORS[index].name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-green/60 via-transparent to-transparent"></div>
                  
                  {/* Floating Logo Overlay */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="absolute top-6 left-6 md:top-8 md:left-8 w-20 h-20 md:w-24 md:h-24 bg-white/95 backdrop-blur-xl rounded-3xl p-4 shadow-2xl flex items-center justify-center"
                  >
                    <img 
                      src={SPONSORS[index].logo} 
                      alt={SPONSORS[index].name}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </div>

                {/* Info Section */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6 md:gap-8">
                  <div className="space-y-6 w-full">
                    <div className="flex flex-col items-center md:items-start gap-4">
                      <div className="h-12 md:h-16">
                        <img 
                          src={SPONSORS[index].logo} 
                          alt={SPONSORS[index].name}
                          className="h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[10px] uppercase tracking-widest font-bold">
                        <span className="w-1 h-1 rounded-full bg-brand-gold animate-pulse"></span>
                        Verified Partner
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-3xl md:text-5xl font-serif font-bold text-brand-gold leading-tight">
                        {SPONSORS[index].name}
                      </h4>
                      <p className="text-brand-cream/90 text-lg md:text-xl font-light tracking-wide italic leading-relaxed max-w-lg">
                        "{SPONSORS[index].description}"
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 pt-4 border-t border-brand-gold/10 w-full justify-center md:justify-start">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gray font-bold">
                      Strategic <br/> Alliances
                    </span>
                    <div className="w-[1px] h-8 bg-brand-gold/20"></div>
                    <div className="flex gap-4">
                      {/* Small decorative indicators */}
                      <div className="w-2 h-2 rounded-full bg-brand-gold/20"></div>
                      <div className="w-2 h-2 rounded-full bg-brand-gold/40"></div>
                      <div className="w-2 h-2 rounded-full bg-brand-gold/60"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Indicators */}
          <div className="flex gap-4">
            {SPONSORS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="relative h-1 w-12 bg-brand-gold/10 rounded-full overflow-hidden transition-all group"
              >
                {i === index && (
                  <motion.div
                    layoutId="progress"
                    className="absolute inset-0 bg-brand-gold"
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 5, ease: "linear" }}
                  />
                )}
                <div className={`absolute inset-0 bg-brand-gold transition-opacity duration-300 ${i === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'}`} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
}
