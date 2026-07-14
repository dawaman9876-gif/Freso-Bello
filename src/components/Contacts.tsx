import { motion } from 'motion/react';
import { Truck, MessageSquare, Send, Mail, MapPin, ChevronRight } from 'lucide-react';

export default function Contacts() {
  return (
    <section id="contacts" className="py-40 bg-brand-bg relative overflow-hidden transition-colors duration-500">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--brand-ink) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        
        {/* Section Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-brand-gold"></span>
            <span className="text-[11px] uppercase tracking-[0.5em] text-brand-gold font-bold">
              Contatti Diretti
            </span>
          </div>
          <h2 className="font-serif text-6xl md:text-8xl font-bold text-brand-ink mt-4 leading-[0.85] tracking-tighter">
            Let's discuss <br /> your <span className="text-brand-gold italic">Vision.</span>
          </h2>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* WhatsApp Card */}
          <motion.a
            href="https://wa.me/251970715463"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -10 }}
            className="group relative p-12 bg-brand-bg-soft border border-brand-ink/5 rounded-[3rem] hover:bg-brand-gold/5 transition-all duration-700 flex flex-col gap-12 premium-shadow"
          >
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 rounded-full bg-brand-gold text-white flex items-center justify-center premium-shadow group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-bold text-brand-gold tracking-[0.4em]">CANALE 01</span>
            </div>
            <div>
              <h3 className="text-brand-ink font-serif font-bold text-4xl tracking-tight mb-4">WhatsApp</h3>
              <p className="text-brand-ink/40 text-sm font-medium uppercase tracking-widest leading-loose">Instant Logistics & Private Support</p>
            </div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">
              Dispatch Request <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.a>

          {/* Telegram Card */}
          <motion.a
            href="https://t.me/Woldab12"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -10 }}
            className="group relative p-12 bg-brand-bg-soft border border-brand-ink/5 rounded-[3rem] hover:bg-brand-gold/5 transition-all duration-700 flex flex-col gap-12 premium-shadow"
          >
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 rounded-full bg-brand-gold text-white flex items-center justify-center premium-shadow group-hover:scale-110 transition-transform">
                <Send className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-bold text-brand-gold tracking-[0.4em]">CANALE 02</span>
            </div>
            <div>
              <h3 className="text-brand-ink font-serif font-bold text-4xl tracking-tight mb-4">Telegram</h3>
              <p className="text-brand-ink/40 text-sm font-medium uppercase tracking-widest leading-loose">Automated Production Feeds</p>
            </div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">
              Access Pipeline <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.a>

          {/* Email Card */}
          <motion.a
            href="mailto:frescobellopasta@gmail.com"
            whileHover={{ y: -10 }}
            className="group relative p-12 bg-brand-bg-soft border border-brand-ink/5 rounded-[3rem] hover:bg-brand-gold/5 transition-all duration-700 flex flex-col gap-12 premium-shadow"
          >
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 rounded-full bg-brand-gold text-white flex items-center justify-center premium-shadow group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-bold text-brand-gold tracking-[0.4em]">CANALE 03</span>
            </div>
            <div>
              <h3 className="text-brand-ink font-serif font-bold text-4xl tracking-tight mb-4">Inquiries</h3>
              <p className="text-brand-ink/40 text-sm font-medium uppercase tracking-widest leading-loose">Corporate & B2B Procurements</p>
            </div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">
              Submit Dossier <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.a>

        </div>

        {/* Location & Delivery Info */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-ink/10 border border-brand-ink/5 rounded-[3rem] overflow-hidden premium-shadow">
          <div className="p-12 bg-brand-bg-soft/80 backdrop-blur-md flex items-center gap-10">
            <div className="w-20 h-20 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
              <MapPin className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h4 className="text-brand-ink font-serif font-bold text-2xl tracking-tight">Addis Ababa Laboratory</h4>
              <p className="text-brand-ink/40 text-[10px] uppercase tracking-[0.4em] font-bold">Production Hub, Ethiopia</p>
            </div>
          </div>
          <div className="p-12 bg-brand-bg-soft/80 backdrop-blur-md flex items-center gap-10 border-l border-brand-ink/5">
            <div className="w-20 h-20 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
              <Truck className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h4 className="text-brand-ink font-serif font-bold text-2xl tracking-tight">Fleet Logistics</h4>
              <p className="text-brand-ink/40 text-[10px] uppercase tracking-[0.4em] font-bold">Bespoke Cold-Chain Dispatch</p>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
}

