import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Package, CheckCircle2, Clock, Truck, ChefHat, ShieldCheck, Activity } from 'lucide-react';

interface TrackingStep {
  id: string;
  label: string;
  description: string;
  icon: React.ElementType;
}

const TRACKING_STEPS: TrackingStep[] = [
  { id: 'production', label: 'Production', description: 'Artisanal extruding & drying', icon: ChefHat },
  { id: 'quality', label: 'Quality Check', description: 'Bronze-die texture verification', icon: ShieldCheck },
  { id: 'packaging', label: 'Packaging', description: 'Hermetic eco-sealing', icon: Package },
  { id: 'delivery', label: 'Delivery', description: 'Cold-chain dispatch', icon: Truck },
];

const MOCK_ORDERS: Record<string, { step: number; status: string; date: string; items: string }> = {
  'FB-7742': { step: 1, status: 'In Production', date: 'July 14, 2026', items: 'Tagliatelle Classic (x50)' },
  'FB-8851': { step: 3, status: 'Out for Delivery', date: 'July 13, 2026', items: 'Fusilli Bronze (x120)' },
  'FB-9920': { step: 0, status: 'Batch Scheduled', date: 'July 14, 2026', items: 'Penne Rigate (x200)' },
};

export default function OrderStatus() {
  const [orderId, setOrderId] = useState('');
  const [trackingData, setTrackingData] = useState<typeof MOCK_ORDERS[string] | null>(null);
  const [error, setError] = useState(false);

  // Simulate "Live" updates
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (trackingData && trackingData.step < TRACKING_STEPS.length - 1) {
      interval = setInterval(() => {
        setTrackingData(prev => {
          if (!prev || prev.step >= TRACKING_STEPS.length - 1) return prev;
          return {
            ...prev,
            step: prev.step + 1,
            status: TRACKING_STEPS[prev.step + 1].label
          };
        });
      }, 5000); // Progress every 5 seconds
    }
    return () => clearInterval(interval);
  }, [trackingData?.step]);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const id = orderId.toUpperCase().trim();
    if (MOCK_ORDERS[id]) {
      setTrackingData(MOCK_ORDERS[id]);
      setError(false);
    } else {
      setTrackingData(null);
      setError(true);
    }
  };

  return (
    <section id="order-tracking" className="py-40 bg-brand-bg relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 clip-path-hero opacity-50"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20">
            <Clock className="w-4 h-4 text-brand-gold" />
            <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.4em]">Real-Time Logistics</span>
          </div>
          <h2 className="font-serif text-6xl md:text-7xl font-bold text-brand-ink tracking-tighter leading-none">
            Track Your <span className="text-brand-gold italic">Batch.</span>
          </h2>
          <p className="text-brand-ink-soft text-lg max-w-xl mx-auto leading-relaxed">
            Monitor the journey of your artisanal selection from our Addis Ababa laboratory to your kitchen.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <form onSubmit={handleTrack} className="relative mb-16 group">
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Enter Order ID (e.g., FB-7742)"
              className="w-full bg-brand-bg-soft border border-brand-ink/10 rounded-[3rem] pl-16 pr-40 py-8 text-lg font-medium text-brand-ink placeholder:text-brand-ink/20 focus:outline-none focus:border-brand-gold/40 transition-all premium-shadow"
            />
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 w-6 h-6 text-brand-ink/30 group-focus-within:text-brand-gold transition-colors" />
            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 px-10 py-4 bg-brand-ink text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-brand-gold transition-all duration-500 border border-white/10"
            >
              Trace Batch
            </button>
          </form>

          <AnimatePresence mode="wait">
            {trackingData ? (
              <motion.div
                key="tracking-result"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-brand-bg-soft border border-brand-ink/5 rounded-[4rem] p-12 md:p-20 premium-shadow relative overflow-hidden"
              >
                {/* Header Info */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20 pb-12 border-b border-brand-ink/5">
                  <div className="flex items-center gap-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold block mb-2">Order Identification</span>
                      <h3 className="text-4xl font-serif font-bold text-brand-ink">{orderId.toUpperCase()}</h3>
                    </div>
                    {trackingData.step < TRACKING_STEPS.length - 1 && (
                      <div className="flex items-center gap-2 px-3 py-1 bg-brand-gold/10 rounded-full border border-brand-gold/20 animate-pulse">
                        <Activity className="w-3 h-3 text-brand-gold" />
                        <span className="text-[8px] font-bold text-brand-gold uppercase tracking-[0.2em]">Live Tracking</span>
                      </div>
                    )}
                  </div>
                  <div className="text-left md:text-right">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold block mb-2">Scheduled Batch</span>
                    <p className="text-xl font-medium text-brand-ink/60">{trackingData.items}</p>
                  </div>
                </div>

                {/* Progress Steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                  {/* Connection Line */}
                  <div className="absolute top-10 left-0 w-full h-0.5 bg-brand-ink/5 hidden md:block">
                    <motion.div 
                      className="h-full bg-brand-gold"
                      initial={{ width: 0 }}
                      animate={{ width: `${(trackingData.step / (TRACKING_STEPS.length - 1)) * 100}%` }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                    />
                  </div>

                  {TRACKING_STEPS.map((step, idx) => {
                    const isCompleted = idx < trackingData.step;
                    const isActive = idx === trackingData.step;
                    const Icon = step.icon;

                    return (
                      <div key={step.id} className="relative flex flex-col items-center text-center group">
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-700 premium-shadow mb-8 relative z-10 ${
                          isCompleted 
                            ? 'bg-brand-olive text-white' 
                            : isActive 
                            ? 'bg-brand-gold text-white scale-110' 
                            : 'bg-brand-bg text-brand-ink/20 border border-brand-ink/5'
                        }`}>
                          {isCompleted ? <CheckCircle2 className="w-8 h-8" /> : <Icon className="w-8 h-8" />}
                          
                          {isActive && (
                            <motion.div 
                              className="absolute inset-0 rounded-full border-2 border-brand-gold"
                              animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          )}
                        </div>
                        <h4 className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-2 ${
                          isActive ? 'text-brand-gold' : 'text-brand-ink'
                        }`}>
                          {step.label}
                        </h4>
                        <p className="text-xs text-brand-ink/40 font-medium leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ) : error ? (
              <motion.div
                key="tracking-error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-brand-gold/5 border border-brand-gold/20 rounded-[3rem] p-12 text-center"
              >
                <Clock className="w-12 h-12 text-brand-gold mx-auto mb-6 opacity-40" />
                <h3 className="text-2xl font-serif font-bold text-brand-ink mb-2">Unrecognized Batch ID</h3>
                <p className="text-brand-ink/60">We couldn't find a current batch with that ID. Please check your confirmation email.</p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-40">
                {['FB-7742', 'FB-8851', 'FB-9920'].map((id) => (
                  <div key={id} className="p-8 border border-brand-ink/5 rounded-[2.5rem] flex items-center justify-between">
                    <span className="font-mono text-sm">{id}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Available Trace</span>
                  </div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
