import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Trash2,
  Send,
  MessageSquare,
  Clipboard,
  Mail,
  ArrowRight,
  ShoppingBag,
  Sparkles,
  Loader2,
  Play,
  Check,
  Truck,
  FileText,
  CheckCircle2,
  Clock,
  Flame,
  Layers,
} from 'lucide-react';
import { Product } from '../data';
import OrderSummary from './OrderSummary';

interface InquiryCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export default function InquiryCart({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onClearCart,
}: InquiryCartProps) {
  const [customMessage, setCustomMessage] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentSimStep, setCurrentSimStep] = useState(0);
  const [simulationCompleted, setSimulationCompleted] = useState(false);

  const SIMULATION_STEPS = [
    {
      title: 'Compiling B2B Specifications',
      description: 'Analyzing selected shapes, volume requirements, and formulating moisture tolerances.',
      icon: Layers,
    },
    {
      title: 'Domino Extrusion Slot Check',
      description: 'Consulting continuous-extrusion scheduler & validating bronze die availability.',
      icon: Flame,
    },
    {
      title: 'Addis Ababa Cold-Chain Logistics',
      description: 'Assigning refrigerated dispatch slots for optimal fresh pasta preservation.',
      icon: Truck,
    },
    {
      title: 'Tadiyos Belete Handshake Protocol',
      description: 'Structuring B2B dossier specs and finalizing the direct coordinator pipeline.',
      icon: CheckCircle2,
    },
  ];

  const startSimulation = () => {
    setIsSimulating(true);
    setCurrentSimStep(0);
    setSimulationCompleted(false);

    // Simulated timing intervals for status updates
    const timer1 = setTimeout(() => setCurrentSimStep(1), 1500);
    const timer2 = setTimeout(() => setCurrentSimStep(2), 3000);
    const timer3 = setTimeout(() => setCurrentSimStep(3), 4500);
    const timer4 = setTimeout(() => {
      setCurrentSimStep(4);
      setSimulationCompleted(true);
    }, 6000);

    (window as any).simTimers = [timer1, timer2, timer3, timer4];
  };

  const cancelSimulation = () => {
    if ((window as any).simTimers) {
      (window as any).simTimers.forEach((t: any) => clearTimeout(t));
    }
    setIsSimulating(false);
    setCurrentSimStep(0);
    setSimulationCompleted(false);
  };

  useEffect(() => {
    if (!isOpen) {
      cancelSimulation();
    }
    return () => {
      if ((window as any).simTimers) {
        (window as any).simTimers.forEach((t: any) => clearTimeout(t));
      }
    };
  }, [isOpen]);

  // Compile beautifully formatted inquiry body
  const compileInquiryText = () => {
    let text = `Hello FrescoBello,\n\nI am compiling a B2B procurement inquiry for your premium fresh pasta offerings:\n`;
    cartItems.forEach((item, index) => {
      text += `${index + 1}. ${item.name} (${item.tag})\n`;
    });

    if (customMessage.trim()) {
      text += `\nAdditional requirements / details:\n"${customMessage}"\n`;
    }

    text += `\nPlease share details regarding production schedules, minimum order quantities, and wholesale pricing. Thank you!`;
    return text;
  };

  const handleWhatsAppSubmit = () => {
    const text = compileInquiryText();
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/251970715463?text=${encodedText}`, '_blank');
  };

  const handleTelegramSubmit = () => {
    // Copy text first for convenient pasting, then open Telegram link
    const text = compileInquiryText();
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
    window.open('https://t.me/Woldab12', '_blank');
  };

  const handleEmailSubmit = () => {
    const subject = encodeURIComponent('FrescoBello Pasta Procurement Inquiry');
    const body = encodeURIComponent(compileInquiryText());
    window.open(`mailto:frescobellopasta@gmail.com?subject=${subject}&body=${body}`);
  };

  const handleCopyClipboard = () => {
    const text = compileInquiryText();
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black backdrop-blur-sm cursor-pointer"
            id="cart-backdrop"
          />

          {/* Cart Sidebar Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[480px] bg-brand-dark-green border-l border-brand-gold/15 flex flex-col justify-between shadow-2xl h-screen overflow-hidden"
            id="cart-sidebar"
          >
            {/* Header */}
            <div className="p-5 border-b border-brand-gold/10 flex justify-between items-center bg-brand-medium-green/30 shrink-0">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-brand-gold" />
                <h3 className="font-serif text-xl font-bold text-brand-cream">
                  Inquiry Basket
                </h3>
                <span className="bg-brand-gold/15 text-brand-gold text-[10px] font-bold px-2 py-0.5 rounded-full font-mono border border-brand-gold/10">
                  {cartItems.length}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-brand-medium-green text-brand-gray hover:text-brand-cream transition-colors cursor-pointer"
                id="close-cart-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Items Container */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 min-h-0" id="cart-items-container">
              {isSimulating ? (
                <div className="space-y-6 py-4" id="simulation-panel">
                  {/* Glowing header */}
                  <div className="text-center space-y-2 pb-4 border-b border-brand-gold/15">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-gold/10 border border-brand-gold text-brand-gold relative">
                      {simulationCompleted ? (
                        <Check className="w-5 h-5 text-brand-gold" />
                      ) : (
                        <Loader2 className="w-5 h-5 animate-spin text-brand-gold" />
                      )}
                      <span className="absolute -inset-1 rounded-full border border-brand-gold/20 animate-ping" />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-brand-cream">
                      {simulationCompleted ? 'B2B Simulation Finalized' : 'Processing Custom B2B Order'}
                    </h4>
                    <p className="text-xs text-brand-gray max-w-sm mx-auto leading-relaxed">
                      {simulationCompleted 
                        ? 'Your procurement dossier is approved and ready for dispatch coordination.' 
                        : 'Engaging real-time machinery and scheduling state-of-the-art curing...'}
                    </p>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-1.5" id="simulation-progressbar">
                    <div className="flex justify-between text-[10px] font-mono text-brand-gray uppercase">
                      <span>Pipeline Progress</span>
                      <span className="text-brand-gold font-bold">{Math.round((currentSimStep / 4) * 100)}%</span>
                    </div>
                    <div className="w-full h-2 bg-brand-medium-green/30 rounded-full overflow-hidden border border-brand-gold/5">
                      <motion.div 
                        className="h-full bg-brand-gold" 
                        animate={{ width: `${(currentSimStep / 4) * 100}%` }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                      />
                    </div>
                  </div>

                  {/* Steps list */}
                  <div className="space-y-4 pt-2" id="simulation-steps">
                    {SIMULATION_STEPS.map((stepItem, idx) => {
                      const StepIcon = stepItem.icon;
                      const isCompleted = currentSimStep > idx;
                      const isActive = currentSimStep === idx;

                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className={`p-3.5 rounded-xl border flex gap-3.5 items-start transition-all duration-300 ${
                            isActive 
                              ? 'bg-brand-medium-green/50 border-brand-gold text-brand-cream ring-1 ring-brand-gold/20' 
                              : isCompleted 
                              ? 'bg-brand-medium-green/10 border-brand-gold/20 text-brand-cream/80' 
                              : 'bg-transparent border-brand-gold/5 text-brand-gray/40'
                          }`}
                        >
                          <div className={`p-2 rounded-lg shrink-0 ${
                            isActive 
                              ? 'bg-brand-gold text-brand-dark-green animate-pulse' 
                              : isCompleted 
                              ? 'bg-brand-gold/25 text-brand-gold' 
                              : 'bg-brand-medium-green/20 text-brand-gray/30'
                          }`}>
                            <StepIcon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h5 className={`text-xs font-bold ${isActive ? 'text-brand-gold' : isCompleted ? 'text-brand-cream' : 'text-brand-cream/40'}`}>
                                {stepItem.title}
                              </h5>
                              {isCompleted && (
                                <span className="text-[9px] uppercase font-mono text-brand-gold font-bold flex items-center gap-1">
                                  <Check className="w-3 h-3" /> VERIFIED
                                </span>
                              )}
                              {isActive && (
                                <span className="text-[9px] uppercase font-mono text-brand-gold animate-pulse">
                                  RUNNING...
                                </span>
                              )}
                            </div>
                            <p className="text-[10px] leading-relaxed mt-1 font-light text-brand-gray">
                              {stepItem.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Live Simulation Console */}
                  <div className="p-3.5 rounded-xl bg-black/40 border border-brand-gold/10 font-mono text-[10px] space-y-1 text-left" id="simulation-console">
                    <span className="text-brand-gold-light/60 font-bold block border-b border-brand-gold/5 pb-1 mb-1.5 uppercase tracking-wider text-[9px]">
                      Live Simulation Log Stream
                    </span>
                    <div className="space-y-1 leading-normal text-brand-cream/90">
                      <div><span className="text-brand-gold/50">[03:47:03]</span> INIT: B2B Pipeline session requested.</div>
                      {currentSimStep >= 0 && (
                        <div><span className="text-brand-gold/50">[03:47:04]</span> SPEC: Compiling {cartItems.length} custom-extruded shape layouts.</div>
                      )}
                      {currentSimStep >= 1 && (
                        <div className="text-brand-gold-light"><span className="text-brand-gold/50">[03:47:05]</span> DOMINO: Contacting Domino Italy system interface. Slot secured.</div>
                      )}
                      {currentSimStep >= 2 && (
                        <div className="text-brand-gold-light"><span className="text-brand-gold/50">[03:47:07]</span> COLD_CHAIN: Chilled courier dispatcher reserved to Addis Ababa hub.</div>
                      )}
                      {currentSimStep >= 3 && (
                        <div className="text-green-400"><span className="text-brand-gold/50">[03:47:09]</span> COORD: Transmitting specifications folder to Tadiyos Belete.</div>
                      )}
                      {simulationCompleted && (
                        <div className="text-brand-gold font-bold mt-1"><span className="text-brand-gold/50">[03:47:11]</span> COMPLETE: Pipeline simulation successful. B2B Specs validated.</div>
                      )}
                    </div>
                  </div>

                  {/* Return Button inside simulation */}
                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={cancelSimulation}
                      className="flex-1 py-2.5 rounded-xl border border-brand-gold/20 hover:border-brand-gold text-brand-gold text-xs font-bold uppercase tracking-wider transition-all cursor-pointer bg-brand-medium-green/10"
                    >
                      Return to Basket
                    </button>
                    {simulationCompleted && (
                      <button
                        onClick={startSimulation}
                        className="py-2.5 px-4 rounded-xl bg-brand-gold text-brand-dark-green hover:bg-brand-gold-light text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                        title="Run Simulation Again"
                      >
                        Re-run
                      </button>
                    )}
                  </div>
                </div>
              ) : cartItems.length > 0 ? (
                <>
                  <div className="flex justify-between items-center" id="cart-actions-row">
                    <span className="text-[10px] uppercase tracking-wider text-brand-gray font-semibold">
                      Selected Pasta Shapes
                    </span>
                    <button
                      onClick={onClearCart}
                      className="text-[10px] uppercase tracking-wider text-brand-red font-bold flex items-center gap-1 hover:underline transition cursor-pointer"
                    >
                      <Trash2 className="w-3 h-3" /> Clear Basket
                    </button>
                  </div>

                  <div className="space-y-3" id="cart-items-list">
                    {cartItems.map((item) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        key={item.id}
                        className="p-3.5 rounded-xl bg-brand-medium-green/40 border border-brand-gold/10 flex gap-3.5 items-center relative group hover:border-brand-gold/30 transition-all duration-300"
                      >
                        {/* Thumbnail */}
                        <div className="w-14 h-14 rounded-lg overflow-hidden bg-brand-dark-green shrink-0 border border-brand-gold/10">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://placehold.co/100x100/14291a/d4af37?text=PB';
                            }}
                          />
                        </div>

                        {/* Title details */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-sm font-semibold text-brand-cream truncate">
                            {item.name}
                          </h4>
                          <p className="text-[10px] text-brand-gold truncate italic font-serif">
                            {item.subtitle}
                          </p>
                          <span className="text-[9px] uppercase tracking-wider text-brand-gray bg-brand-dark-green/50 px-2 py-0.5 rounded border border-brand-gold/5 mt-1 inline-block">
                            {item.tag}
                          </span>
                        </div>

                        {/* Remove Action */}
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1.5 rounded-full hover:bg-brand-red/10 text-brand-gray hover:text-brand-red transition-all cursor-pointer opacity-80 group-hover:opacity-100"
                          title="Remove item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  {/* Batch Insights / Order Summary */}
                  <OrderSummary cartItems={cartItems} />

                  {/* Custom notes card */}
                  <div className="pt-4 border-t border-brand-gold/10" id="cart-notes-wrapper">
                    <label className="block text-[10px] uppercase tracking-wider text-brand-gray font-semibold mb-2">
                      Inquiry Notes / Specific Requirements
                    </label>
                    <textarea
                      value={customMessage}
                      onChange={(e) => setCustomMessage(e.target.value)}
                      placeholder="Specify estimated wholesale targets (e.g. 50kg weekly Pappardelle, customized extrusion, catering dropoff times, or sample delivery requests)..."
                      className="w-full h-24 bg-brand-medium-green/20 text-brand-cream placeholder-brand-gray/40 p-3 rounded-xl border border-brand-gold/10 focus:border-brand-gold focus:outline-none text-xs leading-relaxed font-sans shadow-inner resize-none"
                    />
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center space-y-4" id="empty-cart-view">
                  <div className="w-16 h-16 rounded-full bg-brand-medium-green/30 border border-brand-gold/15 flex items-center justify-center text-brand-gold">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-brand-cream">
                      Inquiry Basket is Empty
                    </h4>
                    <p className="text-xs text-brand-gray mt-1 max-w-xs mx-auto leading-relaxed font-light">
                      Browse our premium selections of authentic durum semolina, vegetable-infused, and ancient grain pastas to construct your custom supply request!
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="px-5 py-2 rounded-full bg-brand-gold text-brand-dark-green text-xs font-bold uppercase tracking-wider hover:bg-brand-gold-light transition-all cursor-pointer"
                  >
                    Start Browsing
                  </button>
                </div>
              )}
            </div>

            {/* Bottom Actions Panel */}
            {cartItems.length > 0 && (
              <div className="p-5 border-t border-brand-gold/10 bg-brand-medium-green/20 space-y-3 shrink-0">
                {!isSimulating ? (
                  <>
                    {/* Primary Simulation CTA Button */}
                    <button
                      onClick={startSimulation}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold hover:from-brand-gold-light hover:to-brand-gold text-brand-dark-green text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg border border-brand-gold-light/20 hover:scale-[1.01] duration-300"
                      id="simulate-b2b-checkout-btn"
                    >
                      <Sparkles className="w-4 h-4 animate-spin text-brand-dark-green" />
                      Simulate Real-Time B2B Checkout
                    </button>

                    <div className="flex items-center gap-3 py-1">
                      <div className="h-[1px] bg-brand-gold/10 flex-1"></div>
                      <span className="text-[9px] uppercase tracking-widest text-brand-gray font-mono">Or direct channels</span>
                      <div className="h-[1px] bg-brand-gold/10 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {/* WhatsApp Action */}
                      <button
                        onClick={handleWhatsAppSubmit}
                        className="py-3 px-4 rounded-xl bg-brand-red hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                      >
                        <MessageSquare className="w-4 h-4 fill-current" /> WhatsApp
                      </button>

                      {/* Telegram Action */}
                      <button
                        onClick={handleTelegramSubmit}
                        className="py-3 px-4 rounded-xl bg-sky-950/40 text-sky-400 border border-sky-500/20 hover:bg-sky-500 hover:text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                      >
                        <Send className="w-4 h-4" /> Telegram
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {/* Email Action */}
                      <button
                        onClick={handleEmailSubmit}
                        className="py-3 px-4 rounded-xl bg-brand-dark-green border border-brand-gold/10 hover:border-brand-gold text-brand-cream text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <Mail className="w-4 h-4" /> Email Hub
                      </button>

                      {/* Clipboard Action */}
                      <button
                        onClick={handleCopyClipboard}
                        className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer border ${
                          isCopied
                            ? 'bg-green-950/40 text-green-400 border-green-500/30'
                            : 'bg-brand-medium-green/40 border border-brand-gold/10 hover:border-brand-gold text-brand-cream'
                        }`}
                      >
                        <Clipboard className="w-4 h-4" />
                        {isCopied ? 'Copied!' : 'Copy Text'}
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="space-y-3">
                    <p className="text-[10px] text-brand-gold text-center font-bold uppercase tracking-wider animate-pulse">
                      Simulation Active — Do not close drawer
                    </p>
                    {simulationCompleted && (
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={handleWhatsAppSubmit}
                          className="py-3 px-4 rounded-xl bg-brand-red hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                        >
                          <MessageSquare className="w-4 h-4 fill-current" /> WhatsApp Dispatch
                        </button>
                        <button
                          onClick={handleTelegramSubmit}
                          className="py-3 px-4 rounded-xl bg-sky-950/40 text-sky-400 border border-sky-500/20 hover:bg-sky-500 hover:text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                        >
                          <Send className="w-4 h-4" /> Telegram Dispatch
                        </button>
                      </div>
                    )}
                  </div>
                )}

                <p className="text-[10px] text-brand-gray text-center pt-2 leading-tight">
                  Tadiyos Belete handles all procurement orders directly. Tapping WhatsApp or Telegram establishes active chat windows.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
