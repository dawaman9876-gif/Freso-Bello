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
  ShoppingCart,
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xl cursor-pointer"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[540px] bg-brand-bg flex flex-col shadow-2xl h-screen overflow-hidden border-l border-brand-ink/5"
          >
            {/* Header */}
            <div className="p-10 border-b border-brand-ink/5 flex justify-between items-center bg-brand-bg-soft shrink-0">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-bg premium-shadow flex items-center justify-center text-brand-gold border border-brand-ink/5">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brand-ink leading-tight">
                    Inquiry Basket
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">
                    {cartItems.length} SELEZIONI
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-ink premium-shadow hover:scale-110 transition-transform cursor-pointer border border-brand-ink/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-10 space-y-8 min-h-0">
              {isSimulating ? (
                <div className="space-y-10 py-4">
                  <div className="text-center space-y-4 pb-8 border-b border-brand-ink/5">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-bg-soft premium-shadow text-brand-gold relative border border-brand-ink/5">
                      {simulationCompleted ? (
                        <Check className="w-8 h-8" />
                      ) : (
                        <Loader2 className="w-8 h-8 animate-spin" />
                      )}
                      {!simulationCompleted && <span className="absolute -inset-2 rounded-full border border-brand-gold/20 animate-ping" />}
                    </div>
                    <h4 className="font-serif text-3xl font-bold text-brand-ink tracking-tight">
                      {simulationCompleted ? 'Simulation Finalized.' : 'Optimizing B2B Logistics...'}
                    </h4>
                    <p className="text-sm text-brand-ink/50 max-w-sm mx-auto font-medium leading-relaxed">
                      {simulationCompleted 
                        ? 'Your procurement dossier is approved and ready for dispatch coordination.' 
                        : 'Engaging real-time machinery and scheduling state-of-the-art curing...'}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold text-brand-gold uppercase tracking-[0.4em]">
                      <span>Pipeline Progress</span>
                      <span>{Math.round((currentSimStep / 4) * 100)}%</span>
                    </div>
                    <div className="w-full h-2 bg-brand-bg-soft rounded-full overflow-hidden border border-brand-ink/5">
                      <motion.div 
                        className="h-full bg-brand-gold" 
                        animate={{ width: `${(currentSimStep / 4) * 100}%` }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    {SIMULATION_STEPS.map((stepItem, idx) => {
                      const StepIcon = stepItem.icon;
                      const isCompleted = currentSimStep > idx;
                      const isActive = currentSimStep === idx;

                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className={`p-6 rounded-[2rem] border flex gap-6 items-start transition-all duration-500 ${
                            isActive 
                              ? 'bg-brand-ink text-white premium-shadow border-brand-ink' 
                              : isCompleted 
                              ? 'bg-brand-bg-soft border-brand-gold/20' 
                              : 'bg-brand-bg border-brand-ink/5 opacity-40'
                          }`}
                        >
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                            isActive 
                              ? 'bg-brand-gold text-white' 
                              : isCompleted 
                              ? 'bg-brand-olive text-white' 
                              : 'bg-brand-bg-soft text-brand-ink/20'
                          }`}>
                            <StepIcon className="w-6 h-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <h5 className="text-sm font-bold tracking-tight">
                                {stepItem.title}
                              </h5>
                              {isCompleted && (
                                <span className="text-[9px] uppercase font-bold text-brand-gold tracking-[0.2em] flex items-center gap-1">
                                  <Check className="w-3 h-3" /> Verified
                                </span>
                              )}
                            </div>
                            <p className={`text-[11px] leading-relaxed font-medium ${isActive ? 'text-white/60' : 'text-brand-ink/40'}`}>
                              {stepItem.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={cancelSimulation}
                      className="flex-1 py-5 rounded-full border border-brand-ink/10 text-[10px] font-bold text-brand-ink uppercase tracking-[0.2em] transition-all hover:bg-brand-bg-soft"
                    >
                      Return to Basket
                    </button>
                    {simulationCompleted && (
                      <button
                        onClick={startSimulation}
                        className="w-16 h-16 rounded-full bg-brand-gold text-white flex items-center justify-center premium-shadow hover:scale-110 transition-transform"
                        title="Run Simulation Again"
                      >
                        <Play className="w-6 h-6" />
                      </button>
                    )}
                  </div>
                </div>
              ) : cartItems.length > 0 ? (
                <>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">
                      Pasta Selections
                    </span>
                    <button
                      onClick={onClearCart}
                      className="text-[10px] uppercase tracking-[0.4em] text-brand-ink/40 font-bold hover:text-brand-gold transition-colors"
                    >
                      Clear All
                    </button>
                  </div>

                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        key={item.id}
                        className="p-6 rounded-[2rem] bg-brand-bg-soft border border-brand-ink/5 flex gap-6 items-center relative group hover:border-brand-gold/20 transition-all duration-500"
                      >
                        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-brand-bg premium-shadow shrink-0 border border-brand-ink/5">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://placehold.co/100x100/FBF9F6/B49157?text=Pasta';
                            }}
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-lg font-bold text-brand-ink tracking-tight mb-1">
                            {item.name}
                          </h4>
                          <p className="text-[10px] text-brand-gold uppercase tracking-[0.2em] font-bold">
                            {item.tag}
                          </p>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-brand-ink/20 hover:text-brand-gold premium-shadow transition-all group-hover:scale-110 border border-brand-ink/5"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  <OrderSummary cartItems={cartItems} />

                  <div className="pt-8 border-t border-brand-ink/10 space-y-4">
                    <label className="block text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold ml-6">
                      Procurement Notes
                    </label>
                    <textarea
                      value={customMessage}
                      onChange={(e) => setCustomMessage(e.target.value)}
                      placeholder="Specify estimated wholesale targets, catering dropoff times, or special requests..."
                      className="w-full h-32 bg-brand-bg-soft text-brand-ink placeholder:text-brand-ink/20 p-8 rounded-[2.5rem] border border-brand-ink/5 focus:border-brand-gold/40 focus:outline-none text-sm font-medium premium-shadow resize-none"
                    />
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-40 text-center space-y-8">
                  <div className="w-24 h-24 rounded-full bg-brand-bg-soft premium-shadow flex items-center justify-center text-brand-gold border border-brand-ink/5">
                    <ShoppingBag className="w-10 h-10" />
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-serif text-3xl font-bold text-brand-ink tracking-tight">
                      Empty Basket.
                    </h4>
                    <p className="text-sm text-brand-ink/50 max-w-xs mx-auto font-medium leading-relaxed">
                      Browse our premium collections to construct your custom supply request.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="px-10 py-5 rounded-full bg-brand-ink text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-brand-gold transition-all shadow-2xl border border-white/10"
                  >
                    Start Browsing
                  </button>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            {cartItems.length > 0 && (
              <div className="p-10 border-t border-brand-ink/5 bg-brand-bg space-y-4 shrink-0">
                {!isSimulating ? (
                  <>
                    <button
                      onClick={startSimulation}
                      className="w-full py-6 rounded-full bg-brand-gold text-white font-bold tracking-[0.2em] uppercase text-sm flex items-center justify-center gap-4 transition-all shadow-2xl hover:bg-brand-ink"
                    >
                      <ShoppingCart className="w-5 h-5 animate-spin" />
                      Initialize Simulation
                    </button>

                    <div className="flex items-center gap-4 py-2">
                      <div className="h-px bg-brand-gold/20 flex-1"></div>
                      <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">Diretto</span>
                      <div className="h-px bg-brand-gold/20 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={handleWhatsAppSubmit}
                        className="py-5 rounded-full bg-brand-ink text-white text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all hover:bg-brand-gold border border-white/10"
                      >
                        <MessageSquare className="w-4 h-4" /> WhatsApp
                      </button>
                      <button
                        onClick={handleTelegramSubmit}
                        className="py-5 rounded-full border border-brand-ink/10 bg-brand-bg-soft text-brand-ink text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all hover:border-brand-gold"
                      >
                        <Send className="w-4 h-4" /> Telegram
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={handleEmailSubmit}
                        className="py-5 rounded-full border border-brand-ink/10 bg-brand-bg-soft text-brand-ink text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all hover:border-brand-gold"
                      >
                        <Mail className="w-4 h-4" /> Email Hub
                      </button>
                      <button
                        onClick={handleCopyClipboard}
                        className={`py-5 rounded-full border text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all ${
                          isCopied
                            ? 'bg-brand-olive text-white border-brand-olive'
                            : 'border-brand-ink/10 bg-brand-bg-soft text-brand-ink hover:border-brand-gold'
                        }`}
                      >
                        <Clipboard className="w-4 h-4" />
                        {isCopied ? 'Copied' : 'Copy Text'}
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="space-y-4">
                    <p className="text-[10px] text-brand-gold text-center font-bold uppercase tracking-[0.4em] animate-pulse">
                      Simulation Active — Do not close
                    </p>
                    {simulationCompleted && (
                      <div className="grid grid-cols-1 gap-4">
                        <button
                          onClick={handleWhatsAppSubmit}
                          className="w-full py-6 rounded-full bg-brand-gold text-white font-bold tracking-[0.2em] uppercase text-sm flex items-center justify-center gap-4 transition-all shadow-2xl hover:bg-brand-ink"
                        >
                          <MessageSquare className="w-5 h-5" /> Dispatch via WhatsApp
                        </button>
                      </div>
                    )}
                  </div>
                )}
                <p className="text-[9px] text-brand-ink/40 text-center font-bold uppercase tracking-[0.2em]">
                  Handled directly by dispatch manager Tadiyos Belete.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

