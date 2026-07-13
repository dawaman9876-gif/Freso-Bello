import { motion } from 'motion/react';
import { Cross, Settings, ChevronRight, MessageSquare, ShieldCheck, Heart } from 'lucide-react';

export default function Story() {
  return (
    <section id="story" className="py-24 bg-brand-medium-green relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Industrial Excellence & Faith Collage */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden border border-brand-gold/20 gold-glow p-6 sm:p-8 bg-brand-dark-green/90"
            id="story-blueprint-card"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl"></div>

            <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold flex items-center gap-2">
              <Settings className="w-3 h-3 animate-spin" /> Industrial Excellence
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold mt-2 text-brand-cream">
              Our Technical Engine
            </h3>
            <p className="text-xs sm:text-sm text-brand-gray mt-2 leading-relaxed">
              To match the strict volume and precision requirements of Ethiopia's premier commercial buyers,
              we utilize our Italian-imported professional <strong className="text-brand-gold-light">Domino Pasta Machine</strong>.
              Every extrusion is flawlessly synchronized.
            </p>

            {/* Technical Blueprint Specifications */}
            <div className="mt-6 p-4 rounded-xl bg-brand-dark-green border border-brand-gold/10 font-mono text-[10px] sm:text-[11px] text-brand-gold/85 space-y-2.5">
              <div className="flex justify-between border-b border-brand-gold/5 pb-1.5">
                <span className="text-brand-gray">MACHINE PORTFOLIO:</span>
                <span className="text-brand-cream font-medium">DOMINO ITALY</span>
              </div>
              <div className="flex justify-between border-b border-brand-gold/5 pb-1.5">
                <span className="text-brand-gray">EXTRUSION SYSTEM:</span>
                <span className="text-brand-cream font-medium">PNEUMATIC OPTIMIZED</span>
              </div>
              <div className="flex justify-between border-b border-brand-gold/5 pb-1.5">
                <span className="text-brand-gray">DIE CONFIGURATION:</span>
                <span className="text-brand-cream font-medium">BRONZE (TRAFILATA IN BRONZO)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-gray">PRODUCTION SPEED:</span>
                <span className="text-brand-cream font-medium">CONTINUOUS UNIFORM EXTRACT</span>
              </div>
            </div>

            {/* Gold Stamp of Authenticity */}
            <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full border border-dashed border-brand-gold/30 flex items-center justify-center animate-rotate-slow select-none pointer-events-none hidden sm:flex">
              <span className="text-[8px] uppercase tracking-widest text-brand-gold font-bold text-center leading-tight">
                DOMINO<br />TECH
              </span>
            </div>
          </motion.div>

          {/* Story Sub-Card: Journey of Faith */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="p-5 sm:p-6 rounded-2xl bg-brand-dark-green border border-brand-gold/10 flex gap-4 items-start"
            id="story-faith-card"
          >
            <div className="p-3 bg-brand-gold/10 rounded-xl text-brand-gold shrink-0">
              {/* Custom Cross icon */}
              <Heart className="w-5 h-5 fill-brand-gold/20" />
            </div>
            <div>
              <h4 className="font-serif text-base sm:text-lg font-bold text-brand-cream">
                Divine Grace & Dedication
              </h4>
              <p className="text-xs text-brand-gray mt-1 leading-relaxed">
                FrescoBello stands as a true testament to vision, hard work, and guidance by God's infinite grace.
                What started from local restaurant roots has expanded to feed the nation's elite establishments.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Narrative Text */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="text-brand-gold text-xs uppercase tracking-widest font-bold block premium-ornament">
              Our New Chapter
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-cream leading-tight">
              Where Italian Tradition <br />
              <span className="italic text-brand-gold-light">Meets Ethiopian Spirit</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brand-gray leading-relaxed text-sm sm:text-base space-y-4 font-light"
            id="story-narrative"
          >
            <p>
              FrescoBello was born from a simple obsession: to bring the uncompromising quality of Italian pasta craft to the vibrant heart of Ethiopia. We didn't just want to import a recipe; we wanted to build a legacy of freshness.
            </p>
            <p>
              Today, our laboratory in Addis Ababa combines high-tech Italian extrusion machinery with local, nutrient-rich grains. Every ribbon of pasta we produce is a testament to our commitment to culinary excellence and local sustainability.
            </p>
            <p>
              From the bustling kitchens of major airlines to the intimate dining tables of pasta enthusiasts, FrescoBello is redefining what "fresh" means in the East African culinary landscape.
            </p>
          </motion.div>

          {/* Key Leadership Spotlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-5 sm:p-6 rounded-2xl glass-panel flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-l-4 border-brand-gold"
            id="story-leadership-spotlight"
          >
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-brand-gold font-bold">
                Operations & Partnership
              </span>
              <h4 className="font-serif text-xl font-bold text-brand-cream mt-1">
                Tadiyos Belete
              </h4>
              <p className="text-xs text-brand-gray">
                Business Development & Operations Manager
              </p>
            </div>
            <div className="flex items-center">
              <a
                href="https://wa.me/251970715463"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full bg-green-950/40 text-green-400 hover:bg-green-500 hover:text-black transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-green-500/20"
              >
                <MessageSquare className="w-4 h-4 fill-current" /> WhatsApp Inquiry
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
