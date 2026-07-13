import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingCart, MessageSquare, ChevronRight, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export default function Header({ cartCount, onOpenCart, theme, onToggleTheme }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Smooth background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Story', href: '#story' },
    { name: 'Why FrescoBello', href: '#why-choose-us' },
    { name: 'Our Products', href: '#products' },
    { name: 'Direct Contacts', href: '#contacts' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-brand-dark-green/95 backdrop-blur-md py-3 shadow-lg border-brand-gold/10'
            : 'bg-brand-dark-green/80 backdrop-blur-sm py-4 border-transparent'
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Brand Identity with Red & Gold logo alignment */}
          <a href="#" className="flex items-center gap-3 md:gap-4 group shrink-0" id="header-logo">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-brand-gold flex items-center justify-center overflow-hidden bg-brand-medium-green gold-glow transition-transform duration-500 group-hover:scale-105">
              <img
                src="https://i.postimg.cc/gjzYxvF4/frasko.jpg"
                alt="FrescoBello Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/100x100/14291a/d4af37?text=FB';
                }}
              />
            </div>
            <div>
              <span className="font-serif text-xl md:text-2xl lg:text-3xl font-extrabold tracking-widest block leading-tight">
                <span className="text-brand-red">FRESCO</span>
                <span className="text-brand-gold">BELLO</span>
              </span>
              <span className="block text-[8px] md:text-[9px] uppercase tracking-[0.25em] text-brand-cream/70 font-sans">
                Premium Pasta & Catering
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-end flex-1 gap-6 lg:gap-10 pl-8 lg:pl-16">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-cream/80 text-xs lg:text-sm font-medium tracking-wider uppercase hover:text-brand-gold transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions & Basket */}
          <div className="flex items-center gap-2 md:gap-4 shrink-0 ml-4">
            {/* Theme Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onToggleTheme}
              className="p-2.5 rounded-full bg-brand-medium-green/80 border border-brand-gold/20 hover:border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark-green transition-all duration-300 cursor-pointer flex items-center justify-center"
              title={theme === 'dark' ? 'Switch to Accessible Light Theme' : 'Switch to Default Dark Theme'}
              id="header-theme-toggle-btn"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            {/* Inquiry Cart Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-brand-medium-green/80 border border-brand-gold/20 hover:border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark-green transition-all duration-300 cursor-pointer flex items-center justify-center"
              title="View Inquiry Basket"
              id="header-cart-btn"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-red text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-brand-dark-green animate-pulse">
                  {cartCount}
                </span>
              )}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-brand-cream hover:text-brand-gold transition-colors cursor-pointer"
              id="mobile-menu-toggle-btn"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-brand-dark-green/98 backdrop-blur-md flex flex-col justify-center items-center gap-6 md:hidden"
            id="mobile-menu-overlay"
          >
            {/* Close button inside mobile menu */}
            <button
              onClick={toggleMobileMenu}
              className="absolute top-5 right-5 p-2 text-brand-cream hover:text-brand-gold transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Links with staggered visual animation */}
            <div className="flex flex-col items-center gap-6" id="mobile-nav-links">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-brand-cream text-2xl font-serif tracking-wide hover:text-brand-gold transition-colors block py-2"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-brand-medium-green/80 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark-green text-sm font-bold tracking-wider flex items-center gap-2 transition-all"
              >
                <ShoppingCart className="w-4 h-4" /> View Inquiry Basket ({cartCount})
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + 0.5) * 0.1 }}
                onClick={() => {
                  onToggleTheme();
                }}
                className="mt-2 px-6 py-2.5 rounded-full bg-brand-medium-green/80 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark-green text-sm font-bold tracking-wider flex items-center gap-2 transition-all cursor-pointer"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-4 h-4" /> Light Contrast Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4" /> Default Dark Mode
                  </>
                )}
              </motion.button>

              <motion.a
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.1 }}
                href="https://wa.me/251970715463"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-8 py-3 rounded-full bg-brand-gold text-brand-dark-green font-bold tracking-wider hover:bg-brand-gold-light transition-all text-sm flex items-center gap-2 mt-2"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp Inquiry
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
