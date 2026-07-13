import React from 'react';
import { motion } from 'motion/react';
import { Truck, MessageSquare, Send, Mail, MapPin, Sparkles, ChevronRight } from 'lucide-react';

export default function Contacts() {
  return (
    <section id="contacts" className="py-24 bg-brand-dark-green relative overflow-hidden">
      {/* Decorative vector background shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl -ml-64 -mb-64"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-brand-gold text-[10px] uppercase tracking-[0.4em] font-bold block mb-3">
            Direct Access
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-brand-cream leading-[1.1]">
            Connect with Our <br/> <span className="text-brand-gold italic">Concierge</span>
          </h2>
          <p className="mt-6 text-brand-gray text-sm md:text-base font-light max-w-lg mx-auto">
            Our specialized teams are ready to assist with high-volume procurement, bespoke catering, or culinary inquiries.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* WhatsApp Card */}
          <motion.a
            href="https://wa.me/251911409015"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative p-8 rounded-3xl bg-brand-medium-green/40 border border-brand-gold/10 hover:border-[#25D366]/40 transition-all duration-500 overflow-hidden flex flex-col items-center text-center gap-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all duration-500 shadow-lg shadow-[#25D366]/5">
              <MessageSquare className="w-8 h-8 fill-current" />
            </div>
            <div className="space-y-2 relative z-10">
              <h3 className="text-brand-cream font-bold text-lg">WhatsApp</h3>
              <p className="text-brand-gray text-xs font-light">Instant Procurement Support</p>
              <div className="pt-2">
                <span className="text-brand-gold text-sm font-mono tracking-tight font-medium">+251 911 409 015</span>
              </div>
            </div>
            <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#25D366] font-bold group-hover:gap-3 transition-all">
              Chat Now <ChevronRight className="w-3 h-3" />
            </div>
          </motion.a>

          {/* Telegram Card */}
          <motion.a
            href="https://t.me/frescobellopasta"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative p-8 rounded-3xl bg-brand-medium-green/40 border border-brand-gold/10 hover:border-[#0088cc]/40 transition-all duration-500 overflow-hidden flex flex-col items-center text-center gap-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0088cc]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 rounded-2xl bg-[#0088cc]/10 flex items-center justify-center text-[#0088cc] group-hover:bg-[#0088cc] group-hover:text-white transition-all duration-500 shadow-lg shadow-[#0088cc]/5">
              <Send className="w-8 h-8" />
            </div>
            <div className="space-y-2 relative z-10">
              <h3 className="text-brand-cream font-bold text-lg">Telegram</h3>
              <p className="text-brand-gray text-xs font-light">Direct Channel Access</p>
              <div className="pt-2">
                <span className="text-brand-gold text-sm font-mono tracking-tight font-medium">@frescobellopasta</span>
              </div>
            </div>
            <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#0088cc] font-bold group-hover:gap-3 transition-all">
              Join Channel <ChevronRight className="w-3 h-3" />
            </div>
          </motion.a>

          {/* Email Card */}
          <motion.a
            href="mailto:frescobellopasta@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative p-8 rounded-3xl bg-brand-medium-green/40 border border-brand-gold/10 hover:border-[#EA4335]/40 transition-all duration-500 overflow-hidden flex flex-col items-center text-center gap-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#EA4335]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 rounded-2xl bg-[#EA4335]/10 flex items-center justify-center text-[#EA4335] group-hover:bg-[#EA4335] group-hover:text-white transition-all duration-500 shadow-lg shadow-[#EA4335]/5">
              <Mail className="w-8 h-8" />
            </div>
            <div className="space-y-2 relative z-10">
              <h3 className="text-brand-cream font-bold text-lg">Email</h3>
              <p className="text-brand-gray text-xs font-light">Official Correspondence</p>
              <div className="pt-2">
                <span className="text-brand-gold text-sm font-mono tracking-tight font-medium">frescobellopasta</span>
              </div>
            </div>
            <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#EA4335] font-bold group-hover:gap-3 transition-all">
              Inquire <ChevronRight className="w-3 h-3" />
            </div>
          </motion.a>

        </div>

        {/* Location & Delivery Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="p-6 rounded-3xl bg-brand-medium-green/20 border border-brand-gold/5 flex items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-brand-cream font-bold text-sm">Addis Ababa Laboratory</h4>
              <p className="text-brand-gray text-xs font-light">Premium Production Facility & Distribution Hub, Ethiopia</p>
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-brand-medium-green/20 border border-brand-gold/5 flex items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-brand-cream font-bold text-sm">Commercial Logistics</h4>
              <p className="text-brand-gray text-xs font-light">Temperature-monitored fleet serving major hotels & airlines.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
