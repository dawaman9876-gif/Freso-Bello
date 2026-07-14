import { motion } from 'motion/react';
import { Cpu, Scale, Leaf, Award, Building2, ChefHat } from 'lucide-react';
import { WHY_CARDS, WhyCard } from '../data';

const iconMap = {
  Cpu: Cpu,
  Scale: Scale,
  Leaf: Leaf,
  Award: Award,
  Building: Building2,
  ChefHat: ChefHat,
};

const CARD_IMAGES = [
  'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800', // Precision
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800', // Scale
  'https://images.unsplash.com/photo-1595187123982-f59787e91f09?auto=format&fit=crop&q=80&w=800', // Organic
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800', // Certified
  'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800', // Strategic
  'https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&q=80&w=800', // Empower
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="why-choose-us" className="py-40 bg-brand-bg relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-brand-gold"></span>
              <span className="text-[11px] uppercase tracking-[0.5em] text-brand-gold font-bold">
                Le Nostre Eccellenze
              </span>
            </div>
            <h2 className="font-serif text-6xl md:text-8xl font-bold text-brand-ink leading-[0.85] tracking-tighter">
              The pillars of <br />
              our <span className="text-brand-gold italic">Excellence.</span>
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-brand-ink/60 max-w-sm ml-auto font-medium text-lg leading-relaxed">
              Industrial scale meeting artisanal soul. We provide the infrastructure for culinary distinction.
            </p>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          {WHY_CARDS.map((card: WhyCard, index: number) => {
            const IconComponent = iconMap[card.iconName];
            const isWide = index === 0 || index === 3;
            
            return (
              <motion.div
                variants={itemVariants}
                key={card.id}
                className={`group relative p-12 rounded-[3rem] bg-brand-bg-soft border border-brand-ink/5 hover:border-brand-gold/20 transition-all duration-700 flex flex-col justify-between overflow-hidden ${
                  isWide ? 'md:col-span-7' : 'md:col-span-5'
                }`}
              >
                {/* Background Image Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000">
                  <img 
                    src={CARD_IMAGES[index]} 
                    alt="" 
                    className="w-full h-full object-cover grayscale"
                  />
                </div>

                {/* Background Ornament */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl group-hover:bg-brand-gold/10 transition-colors duration-700"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-brand-bg premium-shadow flex items-center justify-center text-brand-gold mb-12 group-hover:scale-110 transition-transform duration-700 border border-brand-ink/5">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <h3 className="font-serif text-4xl font-bold text-brand-ink mb-6 tracking-tight leading-none group-hover:text-brand-gold transition-colors duration-500">
                    {card.title}
                  </h3>
                  <p className="text-brand-ink/60 leading-relaxed font-medium text-lg">
                    {card.description}
                  </p>
                </div>

                <div className="relative z-10 mt-16 flex items-center justify-between border-t border-brand-ink/5 pt-8">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">
                    Capitolo {card.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-brand-gold scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

