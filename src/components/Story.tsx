import { motion } from 'motion/react';
import { Settings, MessageSquare, Heart, ChevronRight } from 'lucide-react';

export default function Story() {
  return (
    <section id="story" className="py-40 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="parallax-container rounded-[3rem] premium-shadow border border-brand-ink/5"
            >
              <img
                src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=1200"
                alt="Artisanal Process"
                className="parallax-img aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
            
            {/* Floating Detail Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-12 -right-12 bg-brand-olive text-white p-12 rounded-[2.5rem] shadow-2xl max-w-[280px]"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold block mb-4 opacity-60">Matricola 001</span>
              <h4 className="font-serif text-3xl font-bold tracking-tighter leading-none italic mb-4">
                Domino Italy Precision.
              </h4>
              <p className="text-xs font-medium leading-relaxed opacity-80">
                Utilizing authentic bronze extrusion dies for a rough, porous surface that captures the soul of every sauce.
              </p>
            </motion.div>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-px bg-brand-gold"></span>
                <span className="text-[11px] uppercase tracking-[0.5em] text-brand-gold font-bold">
                  La Nostra Storia
                </span>
              </div>
              
              <h2 className="font-serif text-6xl md:text-8xl font-bold text-brand-ink leading-[0.85] tracking-tighter mb-10">
                Heritage <br />
                meets <span className="text-brand-gold italic">Vision.</span>
              </h2>

              <div className="space-y-8 text-brand-ink/70 text-lg font-medium leading-relaxed max-w-2xl">
                <p>
                  FrescoBello was born from a singular vision: to bridge the gap between Italian artisanal pasta craft and the dynamic energy of Addis Ababa. We believe that true quality is never accidental—it is architected through precision, passion, and the finest ingredients.
                </p>
                <p>
                  Our laboratory is a sanctuary of culinary science, where high-tech Italian extrusion machinery meets nutrient-rich, locally sourced grains. Every ribbon, every fold, and every shape is a testament to our commitment to excellence.
                </p>
              </div>

              {/* Leadership Spotlight */}
              <div className="mt-16 pt-12 border-t border-brand-ink/5 flex items-center gap-8">
                <div className="w-20 h-20 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                  <span className="font-serif text-3xl font-bold text-brand-gold">TB</span>
                </div>
                <div>
                  <h4 className="font-serif text-2xl font-bold text-brand-ink tracking-tight">Tadiyos Belete</h4>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mt-1">Operations Director</p>
                </div>
                <div className="ml-auto hidden sm:block">
                  <button
                    onClick={() => window.open('https://wa.me/251970715463', '_blank')}
                    className="p-5 rounded-full border border-brand-ink/10 hover:border-brand-gold hover:text-brand-gold transition-all group"
                  >
                    <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative Brand Mark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
        <h2 className="font-serif text-[20vw] font-bold leading-none tracking-tighter -rotate-90 origin-left">
          ARTIGIANO
        </h2>
      </div>
    </section>
  );
}

