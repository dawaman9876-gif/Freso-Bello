import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-brand-bg transition-colors duration-500" id="hero">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 clip-path-hero"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-brand-olive/5 rounded-tr-[20vw] blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-brand-gold"></span>
              <span className="text-[11px] uppercase tracking-[0.5em] text-brand-gold font-bold">
                Dall'Italia all'Etiopia
              </span>
            </div>

            <h1 className="font-serif text-6xl md:text-8xl xl:text-9xl font-bold text-brand-ink leading-[0.85] tracking-tighter">
              L'arte <br />
              della <span className="text-brand-gold italic">Pasta.</span>
            </h1>

            <p className="max-w-xl mt-10 text-brand-ink/60 text-lg md:text-xl font-medium leading-relaxed">
              Where Italian engineering meets the heart of Ethiopia. We craft the nation's most refined pasta, architected for the sophisticated palate.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-12 py-5 bg-brand-ink text-white rounded-full font-bold tracking-[0.1em] text-sm hover:bg-brand-gold transition-all duration-500 shadow-2xl flex items-center justify-center gap-3 group"
              >
                The Collection <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-12 py-5 border border-brand-ink/10 text-brand-ink rounded-full font-bold tracking-[0.1em] text-sm hover:border-brand-gold hover:text-brand-gold transition-all duration-500 flex items-center justify-center"
              >
                Our Heritage
              </motion.button>
            </div>

            {/* Floating Stats */}
            <div className="mt-20 flex gap-16 border-t border-brand-ink/5 pt-12">
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-2">Since</span>
                <span className="text-3xl font-serif font-bold text-brand-ink italic">2024</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-2">Production</span>
                <span className="text-3xl font-serif font-bold text-brand-ink italic">5.0 <span className="text-lg">Tons/Day</span></span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-2">Source</span>
                <span className="text-3xl font-serif font-bold text-brand-ink italic">Italia</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden premium-shadow group">
              <img
                src="/src/assets/images/hero_pasta_premium_1784021814626.jpg"
                alt="Artisanal Pasta"
                className="w-full h-full object-cover parallax-img"
              />
              <div className="absolute inset-0 bg-brand-ink/10 group-hover:bg-transparent transition-all duration-700"></div>
            </div>
            
            {/* Abstract Decorative Card */}
            <div className="absolute -bottom-10 -left-10 bg-brand-bg-soft p-10 rounded-[3rem] premium-shadow hidden xl:block max-w-xs border border-brand-ink/5">
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold block mb-4">Materia Prima</span>
              <p className="text-sm font-medium text-brand-ink/70 leading-relaxed italic">
                "We import only the finest semolina, processed through bronze dies for that perfect al dente texture."
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Vertical Watermark */}
      <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden 2xl:block opacity-5 select-none pointer-events-none">
        <span className="text-[12rem] font-serif font-bold text-brand-ink rotate-90 block leading-none">
          FRESCO
        </span>
      </div>
    </section>
  );
}

