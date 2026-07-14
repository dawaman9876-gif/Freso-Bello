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
import OrderStatus from './components/OrderStatus';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import InquiryCart from './components/InquiryCart';
import { Product } from './data';

export default function App() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('frescobello_theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    }
  }, []);

  // Update root class and localStorage when theme changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('frescobello_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('frescobello_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('frescobello_inquiry_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        // Silently handle error
      }
    }
  }, []);

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
    <div className="bg-brand-bg text-brand-ink font-sans antialiased min-h-screen flex flex-col justify-between overflow-x-hidden relative">
      <div className="fixed inset-0 texture-overlay pointer-events-none opacity-20 z-[1]"></div>
      
      {/* Fixed Branded Header */}
      <Header
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

      {/* Main Single-Screen Scrollable Layout */}
      <main className="flex-1 relative z-10">
        <Hero />
        <Story />
        <WhyChooseUs />
        <Sponsors />
        <Products
          onAddProduct={handleAddItem}
          addedProductIds={cartItems.map((item) => item.id)}
        />
        <Feedback />
        <OrderStatus />
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
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 left-8 z-[100] p-5 rounded-2xl bg-brand-bg border border-brand-gold/20 text-brand-ink text-sm font-medium flex items-center gap-4 shadow-2xl premium-shadow max-w-sm"
            id="app-toast-hud"
          >
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
              <Check className="w-5 h-5" />
            </div>
            <span className="flex-1">{toastMessage}</span>
            <button
              onClick={() => setToastMessage(null)}
              className="text-brand-ink/30 hover:text-brand-gold transition-colors cursor-pointer p-2"
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[90] p-5 rounded-full bg-brand-ink text-white shadow-2xl cursor-pointer hover:bg-brand-gold transition-all duration-500 group border border-white/10"
            title="Scroll to Top"
            id="scroll-to-top-btn"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
