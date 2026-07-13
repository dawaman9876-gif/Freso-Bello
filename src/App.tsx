import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Check, X, ArrowUp } from 'lucide-react';

import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import Sponsors from './components/Sponsors';
import Feedback from './components/Feedback';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import InquiryCart from './components/InquiryCart';
import { Product } from './data';

export default function App() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Load cart and theme from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('frescobello_inquiry_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse saved cart items', e);
      }
    }

    const savedTheme = localStorage.getItem('frescobello_theme');
    if (savedTheme === 'light') {
      setTheme('light');
    }
  }, []);

  // Update HTML element class on theme changes
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('frescobello_theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Sync cart to localStorage on changes
  const saveCart = (items: Product[]) => {
    setCartItems(items);
    localStorage.setItem('frescobello_inquiry_cart', JSON.stringify(items));
  };

  // Scroll visibility handler
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Add Item to Inquiry Basket
  const handleAddItem = (product: Product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (!exists) {
      const updated = [...cartItems, product];
      saveCart(updated);
      triggerToast(`"${product.name}" added to your inquiry basket!`);
    } else {
      // Toggle off if already in basket (or just notify user)
      const updated = cartItems.filter((item) => item.id !== product.id);
      saveCart(updated);
      triggerToast(`Removed "${product.name}" from your inquiry basket.`);
    }
  };

  // Remove Item from Inquiry Basket
  const handleRemoveItem = (id: string) => {
    const updated = cartItems.filter((item) => item.id !== id);
    saveCart(updated);
  };

  // Clear all items
  const handleClearCart = () => {
    saveCart([]);
    triggerToast('Inquiry basket cleared.');
  };

  // Simple feedback toast trigger
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`bg-brand-dark-green text-brand-cream font-sans antialiased selection:bg-brand-gold selection:text-brand-dark-green min-h-screen flex flex-col justify-between overflow-x-hidden grain-overlay ${theme}`}>
      
      {/* Fixed Branded Header */}
      <Header
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Single-Screen Scrollable Layout */}
      <main className="flex-1">
        {/* Dynamic Hero Area */}
        <Hero />

        {/* Narrative / History Spotlight */}
        <Story />

        {/* Dynamic Grid of Value Statements */}
        <WhyChooseUs />

        {/* Global Partners Carousel */}
        <Sponsors />

        {/* Interactive Products Directory with Search and Basket triggers */}
        <Products
          onAddProduct={handleAddItem}
          addedProductIds={cartItems.map((item) => item.id)}
        />

        {/* Customer Voice Section */}
        <Feedback />

        {/* Direct Contact Grids & Headquarter Information */}
        <Contacts />
      </main>

      {/* Structured Footer */}
      <Footer />

      {/* Interactive Floating Inquiry Cart Drawer */}
      <InquiryCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Toast Notification HUD */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-6 z-50 p-4 rounded-xl bg-brand-medium-green/95 border border-brand-gold/30 text-brand-cream text-xs font-semibold tracking-wider uppercase flex items-center gap-3 shadow-2xl glass-panel max-w-sm"
            id="app-toast-hud"
          >
            <div className="w-5 h-5 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
              <Check className="w-3.5 h-3.5" />
            </div>
            <span className="flex-1 text-left">{toastMessage}</span>
            <button
              onClick={() => setToastMessage(null)}
              className="text-brand-gray hover:text-brand-cream transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action HUD - Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-brand-medium-green/80 border border-brand-gold/20 text-brand-gold hover:bg-brand-gold hover:text-brand-dark-green transition-all duration-300 shadow-xl cursor-pointer"
            title="Scroll to Top"
            id="scroll-to-top-btn"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
