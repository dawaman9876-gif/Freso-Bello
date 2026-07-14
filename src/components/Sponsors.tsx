import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const SPONSORS = [
  { 
    name: 'Ethiopian Airlines', 
    logo: '/logos/12.png',
    photo: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&q=80&w=800',
    description: 'Official In-flight Culinary Partner'
  },
  { 
    name: 'Hilton Addis Ababa', 
    logo: '/logos/23.png',
    photo: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    description: 'Preferred Luxury Hospitality Supplier'
  },
  { 
    name: 'Sheraton Addis', 
    logo: '/logos/34.png',
    photo: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800',
    description: 'Exclusive Banquet Pasta Provider'
  },
  { 
    name: 'Hyatt Regency', 
    logo: '/logos/56.jpg',
    photo: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800',
    description: 'Artisanal Selection for Signature Dining'
  },
  { 
    name: 'Emirates', 
    logo: '/logos/45.png',
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
    <section className="py-32 bg-brand-bg relative overflow-hidden border-t border-brand-ink/5 transition-colors duration-500">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        
        <div className="flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-brand-gold text-xs uppercase tracking-[0.4em] font-black block">
                STRATEGIC ALLIANCES
              </span>
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-brand-ink mt-4 leading-[0.9] tracking-tighter">
                Industry <span className="text-brand-gold italic">Titans.</span>
              </h2>
            </div>
            
            {/* Quick Logo Bar */}
            <div className="flex flex-wrap gap-8 items-center opacity-40">
              {SPONSORS.map((sponsor, i) => (
                <button 
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-6 transition-all duration-500 ${i === index ? 'opacity-100 scale-110' : 'hover:opacity-100 grayscale'}`}
                >
                  <img src={sponsor.logo} alt={sponsor.name} className="h-full object-contain brightness-0 dark:brightness-200" />
                </button>
              ))}
            </div>
          </div>

          <div className="relative w-full h-[500px] md:h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.8, ease: 'circOut' }}
                className="absolute inset-0 grid grid-cols-1 md:grid-cols-12 bg-brand-bg-soft border border-brand-ink/5 overflow-hidden shadow-2xl rounded-[3rem] premium-shadow"
              >
                {/* Visual Frame */}
                <div className="md:col-span-7 relative h-64 md:h-full overflow-hidden">
                  <motion.img 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 6 }}
                    src={SPONSORS[index].photo} 
                    alt={SPONSORS[index].name}
                    className="w-full h-full object-cover grayscale brightness-50"
                  />
                  <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay"></div>
                  
                  {/* Floating ID Card */}
                  <div className="absolute top-8 left-8 bg-brand-bg-soft p-4 shadow-2xl border border-brand-ink/5 rounded-2xl">
                    <img src={SPONSORS[index].logo} alt={SPONSORS[index].name} className="h-10 object-contain brightness-0 dark:brightness-200" />
                  </div>
                </div>

                {/* Data Frame */}
                <div className="md:col-span-5 p-12 flex flex-col justify-between border-l border-brand-ink/5">
                  <div className="space-y-8">
                    <span className="font-mono text-[10px] text-brand-gold uppercase tracking-[0.5em] font-bold">Partnership {index.toString().padStart(2, '0')}</span>
                    <h4 className="font-serif text-4xl font-bold text-brand-ink tracking-tighter leading-[0.9]">
                      {SPONSORS[index].name}
                    </h4>
                    <p className="text-brand-ink/50 text-sm font-medium leading-relaxed">
                      {SPONSORS[index].description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-8 border-t border-brand-ink/10">
                    <div className="w-2 h-2 bg-brand-gold animate-pulse"></div>
                    <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.3em]">Operational Logistics Hub</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Timeline Indicators */}
          <div className="flex gap-2 justify-center">
            {SPONSORS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="group relative h-1 w-16 bg-brand-ink/10 overflow-hidden rounded-full"
              >
                {i === index && (
                  <motion.div
                    layoutId="sponsor-progress"
                    className="absolute inset-0 bg-brand-gold"
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 5, ease: "linear" }}
                  />
                )}
                <div className={`absolute inset-0 bg-brand-gold transition-opacity duration-300 ${i === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'}`} />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
