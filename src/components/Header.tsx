import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingCart, MessageSquare, ChevronRight, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Header({ cartCount, onOpenCart, isDarkMode, toggleTheme }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Heritage', href: '#story' },
    { name: 'Craft', href: '#why-choose-us' },
    { name: 'Collection', href: '#products' },
    { name: 'Inquiry', href: '#contacts' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled ? 'py-4' : 'py-8'
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-6">
          <nav
            className={`flex items-center justify-between px-8 py-3 rounded-full transition-all duration-700 ${
              isScrolled 
                ? 'frosted-glass premium-shadow' 
                : 'bg-transparent border border-transparent'
            }`}
          >
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 overflow-hidden transition-transform duration-500 group-hover:rotate-12">
                <img
                  src="/logos/brand-logo.png"
                  alt="FrescoBello"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/100x100/141414/B49157?text=FB';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tighter leading-none text-brand-ink">
                  Fresco<span className="text-brand-gold italic">Bello</span>
                </span>
                <span className="text-[8px] uppercase tracking-[0.3em] font-semibold text-brand-gold">
                  Artigianato Italiano
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-ink/60 hover:text-brand-gold transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-brand-gold transition-all duration-500 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 md:gap-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2.5 rounded-full bg-brand-bg-soft border border-brand-ink/5 text-brand-gold premium-shadow hover:bg-brand-ink hover:text-white transition-all duration-500 cursor-pointer"
                title={isDarkMode ? 'Switch to Light' : 'Switch to Dark'}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onOpenCart}
                className="relative p-2.5 rounded-full bg-brand-bg-soft border border-brand-ink/5 text-brand-ink hover:text-brand-gold transition-colors cursor-pointer"
              >
                <ShoppingCart className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-gold text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </motion.button>

              <button
                onClick={() => window.open('https://wa.me/251970715463', '_blank')}
                className="hidden lg:block px-8 py-3 bg-brand-ink text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-brand-gold transition-all duration-500 border border-white/10"
              >
                Direct Inquiry
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 text-brand-ink"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-bg/98 backdrop-blur-xl flex flex-col items-center justify-center p-12 text-center"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-12 right-12 p-4 text-brand-ink"
            >
              <X className="w-10 h-10" />
            </button>

            <div className="space-y-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block font-serif text-5xl font-bold tracking-tighter text-brand-ink hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="mt-12 flex items-center gap-4 text-brand-gold font-bold uppercase tracking-widest text-sm"
              >
                <ShoppingCart className="w-5 h-5" /> Basket ({cartCount})
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

