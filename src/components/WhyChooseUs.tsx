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

export default function WhyChooseUs() {
  // Stagger container for list item animations
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
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="why-choose-us" className="py-24 bg-brand-dark-green relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-gold text-xs uppercase tracking-widest font-bold block premium-ornament">
            Uncompromising Standards
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-cream mt-2 leading-tight">
            The Science of Freshness <br />& The Art of Scale
          </h2>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto mt-4"></div>
        </div>

        {/* 6-Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="why-us-grid"
        >
          {WHY_CARDS.map((card: WhyCard) => {
            const IconComponent = iconMap[card.iconName];
            return (
              <motion.div
                variants={itemVariants}
                key={card.id}
                className="p-8 rounded-2xl bg-brand-medium-green/60 border border-brand-gold/10 hover:border-brand-gold/40 transition-all duration-300 hover:-translate-y-2 gold-glow-hover flex flex-col h-full justify-between group"
              >
                <div>
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-brand-dark-green transition-all duration-500">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  {/* Card Title & Text */}
                  <h3 className="font-serif text-xl font-bold text-brand-cream mb-2 group-hover:text-brand-gold transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-sm text-brand-gray leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>
                
                {/* Number Accent */}
                <span className="text-[10px] uppercase tracking-widest text-brand-gold/30 mt-6 block font-mono font-bold group-hover:text-brand-gold/60 transition-colors">
                  {card.number} / {card.iconName === 'Cpu' ? 'Technology' : card.iconName === 'Scale' ? 'Scale Capacity' : card.iconName === 'Leaf' ? 'Purity' : card.iconName === 'Award' ? 'Assurance' : card.iconName === 'Building' ? 'B2B Authority' : 'B2C Comfort'}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
