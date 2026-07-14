import { motion } from 'motion/react';
import { Heart, UserCheck, MessageSquare, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-bg pt-40 pb-16 relative overflow-hidden transition-colors duration-500">
      {/* Decorative Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-20 relative z-20">
        
        {/* Left Column: Brand & Heritage */}
        <div className="md:col-span-5 space-y-12">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 flex items-center justify-center overflow-hidden rounded-full bg-brand-bg-soft premium-shadow p-3 border border-brand-gold/10">
              <img
                src="https://raw.githubusercontent.com/dawaman9876-gif/Fres-Bello/main/public/logos/brand-logo.png"
                alt="FrescoBello Brand Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/100x100/FBF9F6/B49157?text=FB';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-4xl font-bold tracking-tighter block leading-none text-brand-ink">
                Fresco<span className="text-brand-gold italic">Bello</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.6em] text-brand-gold font-bold mt-2">ALCHIMIA CULINARIA</span>
            </div>
          </div>
          
          <p className="text-brand-ink/50 text-xl font-medium leading-relaxed max-w-sm">
            Merging authentic Italian engineering with artisanal soul. 
            The premier partner for culinary distinction in East Africa.
          </p>
          
          <div className="flex items-center gap-4 group">
            <div className="w-3 h-3 rounded-full bg-brand-gold animate-pulse"></div>
            <span className="text-[11px] font-bold text-brand-gold uppercase tracking-[0.4em] group-hover:text-brand-ink transition-colors cursor-default">
              Domino Italy Engineering Certified
            </span>
          </div>
        </div>

        {/* Middle Column: Quick Navigation */}
        <div className="md:col-span-3 space-y-10">
          <h4 className="font-serif text-sm font-bold text-brand-ink uppercase tracking-[0.4em]">
            La Navigazione
          </h4>
          <div className="flex flex-col gap-6 text-sm font-bold text-brand-ink/40 uppercase tracking-[0.2em]">
            <a href="#hero" className="hover:text-brand-gold transition-colors flex items-center gap-4 group">
              <span className="w-0 h-px bg-brand-gold transition-all duration-500 group-hover:w-8"></span> Home
            </a>
            <a href="#story" className="hover:text-brand-gold transition-colors flex items-center gap-4 group">
              <span className="w-0 h-px bg-brand-gold transition-all duration-500 group-hover:w-8"></span> Heritage
            </a>
            <a href="#why-choose-us" className="hover:text-brand-gold transition-colors flex items-center gap-4 group">
              <span className="w-0 h-px bg-brand-gold transition-all duration-500 group-hover:w-8"></span> Excellence
            </a>
            <a href="#products" className="hover:text-brand-gold transition-colors flex items-center gap-4 group">
              <span className="w-0 h-px bg-brand-gold transition-all duration-500 group-hover:w-8"></span> Collection
            </a>
          </div>
        </div>

        {/* Right Column: Direct Contacts Directory */}
        <div className="md:col-span-4 space-y-10">
          <h4 className="font-serif text-sm font-bold text-brand-ink uppercase tracking-[0.4em]">
            Infrastruttura
          </h4>
          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full bg-brand-bg-soft flex items-center justify-center text-brand-gold premium-shadow group-hover:scale-110 transition-transform border border-brand-ink/5">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-1">Operations</p>
                <p className="text-brand-ink font-bold">Tadiyos Belete</p>
              </div>
            </div>
            
            <a href="https://wa.me/251970715463" target="_blank" className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full bg-brand-bg-soft flex items-center justify-center text-brand-gold premium-shadow group-hover:scale-110 transition-transform border border-brand-ink/5">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-1">Direct</p>
                <p className="text-brand-ink font-bold">WhatsApp Dispatch</p>
              </div>
            </a>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full bg-brand-bg-soft flex items-center justify-center text-brand-gold premium-shadow group-hover:scale-110 transition-transform border border-brand-ink/5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-1">Location</p>
                <p className="text-brand-ink font-bold">Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Brand Watermark */}
      <div className="mt-40 opacity-[0.02] select-none pointer-events-none overflow-hidden whitespace-nowrap">
        <h2 className="font-serif text-[18vw] font-bold leading-none tracking-tighter text-brand-gold text-center">
          FRESCOBELLO
        </h2>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-16 border-t border-brand-ink/5 flex flex-col sm:row justify-between items-center gap-8">
        <p className="text-[10px] font-bold text-brand-ink/40 uppercase tracking-[0.4em]">
          &copy; {currentYear} FRESCOBELLO PASTA. ALL RIGHTS RESERVED.
        </p>
        <div className="flex items-center gap-3 text-[10px] font-bold text-brand-gold uppercase tracking-[0.4em]">
          <Heart className="w-4 h-4 fill-brand-gold animate-pulse" />
          <span>Divine Grace in Production</span>
        </div>
      </div>
    </footer>
  );
}

