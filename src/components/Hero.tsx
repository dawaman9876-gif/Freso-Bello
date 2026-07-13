import { motion } from 'motion/react';
import { ArrowDown, FolderOpen, Mail, Award, Plane, Hotel, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-brand-dark-green"
    >
      {/* Background Image Layer with Atmospheric Filtering */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.pinimg.com/736x/9d/81/47/9d8147c45e741e6e2593d52047f8bca5.jpg"
          alt="Atmospheric Pasta Backdrop"
          className="w-full h-full object-cover hero-bg-img"
        />
        {/* Dark/Light Vignette Overlays for high-contrast legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-green via-transparent to-brand-dark-green/90 hero-vignette"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-green/95 via-transparent to-brand-dark-green/90 hero-vignette opacity-75"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Narrative Column */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 self-center lg:self-start"
            id="hero-badge"
          >
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-brand-gold-light font-bold">
              Ethiopia's Premier Fresh Pasta Production
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-brand-cream leading-none"
            id="hero-title"
          >
            Freshly Crafted. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-gold-light italic">
              Professionally Trusted.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-brand-gray max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
            id="hero-description"
          >
            Elevating Ethiopia’s culinary scene with high-capacity, premium authentic Italian fresh pasta.
            Crafted utilizing state-of-the-art Italian Domino machinery for consistent five-star perfection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4"
            id="hero-actions"
          >
            <a
              href="#products"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-gold text-brand-dark-green font-bold tracking-wide uppercase text-xs sm:text-sm hover:bg-brand-gold-light hover:-translate-y-1 transition-all duration-300 text-center gold-glow flex items-center justify-center gap-2"
            >
              <FolderOpen className="w-4 h-4" /> Browse Our Products
            </a>
            <a
              href="#contacts"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border-2 border-brand-gold/40 text-brand-cream hover:bg-brand-gold/10 font-bold tracking-wide uppercase text-xs sm:text-sm hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" /> Get In Touch
            </a>
          </motion.div>

          {/* Trusted Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-8 border-t border-brand-gold/15 flex flex-wrap justify-center lg:justify-start gap-6 items-center"
            id="hero-trusted-by"
          >
            <span className="text-xs text-brand-gray tracking-widest uppercase font-semibold">Trusted By:</span>
            <div className="flex items-center gap-2 text-brand-cream font-serif text-xs md:text-sm tracking-widest font-bold">
              <Hotel className="w-4 h-4 text-brand-gold" />
              <span>5-STAR HOTELS</span>
            </div>
            <div className="flex items-center gap-2 text-brand-cream font-serif text-xs md:text-sm tracking-widest font-bold">
              <Plane className="w-4 h-4 text-brand-gold" />
              <span>AIRLINES</span>
            </div>
            <div className="flex items-center gap-2 text-brand-cream font-serif text-xs md:text-sm tracking-widest font-bold">
              <Award className="w-4 h-4 text-brand-gold" />
              <span>FINE RESTAURANTS</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Premium Interactive Pasta Dish */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-8 lg:py-0">
          {/* Golden glow halo backplate */}
          <div className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full bg-brand-gold/5 blur-3xl -z-10"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] flex items-center justify-center"
            id="hero-plate-container"
          >
            {/* Spinning Dashed Border */}
            <div className="absolute inset-0 border border-dashed border-brand-gold/20 rounded-full animate-rotate-slow pointer-events-none"></div>

            {/* Vector Basil Leaf SVG 1 - Floating Left */}
            <motion.div
              animate={{
                y: [0, -6, 0],
                rotate: [0, 4, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-10 left-6 w-12 h-12 md:w-16 md:h-16 select-none pointer-events-none z-20"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_10px_15px_rgba(0,0,0,0.6)]">
                <path d="M10 50 C20 10, 80 10, 90 50 C80 90, 20 90, 10 50 Z" fill="#2E6F40" />
                <path d="M10 50 C40 45, 60 45, 90 50" stroke="#4F9D62" strokeWidth="2" fill="none" />
              </svg>
            </motion.div>

            {/* Vector Basil Leaf SVG 2 - Floating Right */}
            <motion.div
              animate={{
                y: [0, 8, 0],
                rotate: [45, 38, 45],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute bottom-16 right-4 w-10 h-10 md:w-14 md:h-14 select-none pointer-events-none z-20"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_10px_15px_rgba(0,0,0,0.6)] transform rotate-45">
                <path d="M15 45 C25 15, 75 15, 85 45 C75 75, 25 75, 15 45 Z" fill="#1E4D2B" />
              </svg>
            </motion.div>

            {/* Main Premium Pasta Dish Image with scale/float effect */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 z-10 drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)]"
            >
              <img
                src="https://i.postimg.cc/dVh5yBdy/p.png"
                alt="FrescoBello Premium Pasta Platter"
                className="w-full h-full object-contain animate-float-slow"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/400x400/14291a/d4af37?text=FrescoBello+Pasta';
                }}
              />
            </motion.div>

            {/* Flour dusting and particle overlays */}
            <div className="absolute w-2 h-2 rounded-full bg-white/40 blur-[1px] top-1/4 right-8"></div>
            <div className="absolute w-3 h-3 rounded-full bg-brand-gold/30 blur-[2px] bottom-1/4 left-4"></div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Wave Divider at Section Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-12 md:h-16 text-brand-medium-green" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,16.63,83.17,22.76,143.27,35.79,206.58,41.92,267.38,36.57A857.06,857.06,0,0,0,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
}
