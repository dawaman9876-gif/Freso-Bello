import { motion } from 'motion/react';
import { Heart, UserCheck, MessageSquare, Send, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-medium-green border-t border-brand-gold/15 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Left Column: Brand & Heritage */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-brand-gold flex items-center justify-center overflow-hidden bg-brand-dark-green">
              <img
                src="https://i.postimg.cc/gjzYxvF4/frasko.jpg"
                alt="FrescoBello Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/100x100/14291a/d4af37?text=FB';
                }}
              />
            </div>
            <span className="font-serif text-2xl font-extrabold tracking-widest block leading-none">
              <span className="text-brand-red">FRESCO</span>
              <span className="text-brand-gold">BELLO</span>
            </span>
          </div>
          
          <p className="text-xs text-brand-gray leading-relaxed font-light">
            Premium Pasta Production & Catering Solutions in Addis Ababa, Ethiopia.
            Merging strict authentic Italian craftsmanship with reliable commercial logistics workflows.
          </p>
          
          <div className="text-[10px] text-brand-gold/80 flex items-center gap-1.5 font-sans">
            <Heart className="w-3.5 h-3.5 text-brand-gold fill-brand-gold/10" />
            <span>Guided by God's Divine Grace.</span>
          </div>
        </div>

        {/* Middle Column: Quick Navigation */}
        <div className="md:col-span-4 space-y-4" id="footer-navigation">
          <h4 className="font-serif text-sm font-bold text-brand-cream uppercase tracking-wider border-b border-brand-gold/10 pb-2">
            Quick Navigation
          </h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs text-brand-gray font-light">
            <a href="#hero" className="hover:text-brand-gold transition-colors block py-0.5">
              Home
            </a>
            <a href="#story" className="hover:text-brand-gold transition-colors block py-0.5">
              Our Story
            </a>
            <a href="#why-choose-us" className="hover:text-brand-gold transition-colors block py-0.5">
              Why Us
            </a>
            <a href="#products" className="hover:text-brand-gold transition-colors block py-0.5">
              Our Products
            </a>
            <a href="#contacts" className="hover:text-brand-gold transition-colors block py-0.5 col-span-2">
              Direct Contacts
            </a>
          </div>
        </div>

        {/* Right Column: Direct Contacts Directory */}
        <div className="md:col-span-4 space-y-4" id="footer-contacts">
          <h4 className="font-serif text-sm font-bold text-brand-cream uppercase tracking-wider border-b border-brand-gold/10 pb-2">
            Procurement Contacts
          </h4>
          <div className="space-y-3 text-xs text-brand-gray font-light">
            <div className="flex items-center gap-2.5">
              <UserCheck className="w-4 h-4 text-brand-gold shrink-0" />
              <span>Tadiyos Belete (Operations Mgr.)</span>
            </div>
            
            <a
              href="https://wa.me/251970715463"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 hover:text-brand-gold transition-colors group"
            >
              <MessageSquare className="w-4 h-4 text-brand-gold shrink-0 fill-current group-hover:scale-105 transition-transform" />
              <span>WhatsApp Logistics</span>
            </a>

            <a
              href="https://t.me/Woldab12"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 hover:text-brand-gold transition-colors group"
            >
              <Send className="w-4 h-4 text-brand-gold shrink-0 group-hover:scale-105 transition-transform" />
              <span>Telegram Channel</span>
            </a>

            <a
              href="mailto:frescobellopasta@gmail.com"
              className="flex items-center gap-2.5 hover:text-brand-gold transition-colors group"
            >
              <Mail className="w-4 h-4 text-brand-gold shrink-0 group-hover:scale-105 transition-transform" />
              <span className="break-all font-mono">frescobellopasta@gmail.com</span>
            </a>

            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 pt-8 border-t border-brand-gold/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-brand-gray/80 font-light">
        <p>&copy; {currentYear} FRESCOBELLO Pasta. All Rights Reserved.</p>
        <p className="tracking-wider uppercase text-[10px] text-brand-gold/60 font-mono">
          Ethiopian Industrial Culinary Heritage.
        </p>
      </div>
    </footer>
  );
}
