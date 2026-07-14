import { useMemo } from 'react';
import { motion } from 'motion/react';
import { Clock, Layers, Flame, CheckCircle2, AlertCircle } from 'lucide-react';
import { Product } from '../data';

interface OrderSummaryProps {
  cartItems: Product[];
}

export default function OrderSummary({ cartItems }: OrderSummaryProps) {
  // Category-specific preparation base times (in hours)
  const categoryTimes: Record<string, number> = {
    classic: 24,  // Standard pasta needs 24h
    infused: 36,  // Infused shapes require extrusion plus color-drying checks
    grains: 48,   // Ancient grains need specialized hydration/aging
    stuffed: 72,  // Stuffed catering trays require rich layering & flash freezing
  };

  const { totalCount, totalHours, days, remainingHours, weightEstimateKg } = useMemo(() => {
    if (cartItems.length === 0) {
      return { totalCount: 0, totalHours: 0, days: 0, remainingHours: 0, weightEstimateKg: 0 };
    }

    // 1. Total unique item count
    const totalCount = cartItems.length;

    // 2. Base prep time is governed by the most complex shape in the selection
    const basePrepTimes = cartItems.map((item) => categoryTimes[item.category] || 24);
    const maxBasePrepTime = Math.max(...basePrepTimes);

    // 3. Scale modifier: each additional shape adds 4 hours for bronze die resets & machinery recalibration
    const dieResetHours = (totalCount - 1) * 4;
    const totalHours = maxBasePrepTime + dieResetHours;

    // 4. Split into Days & Hours for natural human reading
    const days = Math.floor(totalHours / 24);
    const remainingHours = totalHours % 24;

    // 5. Build dynamic weight estimation based on pasta tags
    const weightEstimateKg = cartItems.reduce((acc, item) => {
      if (item.category === 'stuffed' || item.tag.toLowerCase().includes('bulk')) {
        return acc + 5.0; // Bulk tray ~ 5kg
      }
      return acc + 0.5;   // Retail packets are 500g (0.5kg)
    }, 0);

    return { totalCount, totalHours, days, remainingHours, weightEstimateKg };
  }, [cartItems]);

  if (cartItems.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-5 rounded-none bg-brand-charcoal/30 border border-brand-red/15 space-y-4"
      id="order-summary-container"
    >
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-widest text-brand-red font-bold flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 animate-pulse text-brand-red" /> B2B Batch Insights
        </span>
        <span className="text-[10px] text-brand-silver/80 font-mono font-medium bg-brand-dark/60 px-2 py-0.5 rounded border border-brand-red/5">
          PROSPECTIVE
        </span>
      </div>

      {/* Grid containing calculated summaries */}
      <div className="grid grid-cols-2 gap-3" id="order-summary-metrics">
        {/* Metric 1: Count and weight */}
        <div className="p-3.5 rounded-none bg-brand-dark/80 border border-brand-red/5 space-y-1">
          <span className="text-[9px] uppercase tracking-wider text-brand-silver block">
            Selected Shapes
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif text-xl sm:text-2xl font-bold text-brand-white">
              {totalCount}
            </span>
            <span className="text-xs text-brand-red font-serif italic">
              ({weightEstimateKg.toFixed(1)} kg est.)
            </span>
          </div>
        </div>

        {/* Metric 2: Estimated prep time */}
        <div className="p-3.5 rounded-none bg-brand-dark/80 border border-brand-red/5 space-y-1">
          <span className="text-[9px] uppercase tracking-wider text-brand-silver block">
            Est. Dispatch Time
          </span>
          <div className="flex items-baseline gap-1">
            <span className="font-serif text-lg sm:text-xl font-bold text-brand-white">
              {days > 0 ? `${days}d ` : ''}
              {remainingHours > 0 ? `${remainingHours}h` : ''}
            </span>
            <span className="text-[9px] text-brand-red/80 font-mono">
              ({totalHours}h)
            </span>
          </div>
        </div>
      </div>

      {/* Projected production pipeline timeline */}
      <div className="space-y-2.5 pt-2 border-t border-brand-red/10" id="order-summary-pipeline">
        <span className="text-[9px] uppercase tracking-wider text-brand-silver font-semibold block">
          Artisanal Production Pipeline (Projected)
        </span>
        
        <div className="relative pl-4 border-l border-brand-red/15 space-y-4 text-left">
          {/* Step 1: Mixing */}
          <div className="relative" id="pipeline-step-mixing">
            <span className="absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-none bg-brand-red border border-brand-dark"></span>
            <h5 className="text-[11px] font-bold text-brand-white leading-tight">
              1. Blending & Hydration
            </h5>
            <p className="text-[10px] text-brand-silver leading-tight">
              Slow hydration of premium durum semolina under Italian standards.
            </p>
          </div>

          {/* Step 2: Extrusion */}
          <div className="relative" id="pipeline-step-extrusion">
            <span className="absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-none bg-brand-red border border-brand-dark"></span>
            <h5 className="text-[11px] font-bold text-brand-white leading-tight">
              2. Bronze Die Extrusion
            </h5>
            <p className="text-[10px] text-brand-silver leading-tight">
              Continuous uniform extrusion using our Domino Italy machinery.
            </p>
          </div>

          {/* Step 3: Curing */}
          <div className="relative" id="pipeline-step-curing">
            <span className="absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-none bg-brand-red/30 border border-brand-dark animate-pulse"></span>
            <h5 className="text-[11px] font-bold text-brand-white leading-tight flex items-center gap-1.5">
              3. Slow Temperature Curing <Clock className="w-3 h-3 text-brand-red animate-spin" />
            </h5>
            <p className="text-[10px] text-brand-silver leading-tight">
              Controlled curing phase for optimal al dente texture elasticity.
            </p>
          </div>

          {/* Step 4: Dispatch */}
          <div className="relative" id="pipeline-step-dispatch">
            <span className="absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-none bg-brand-red/15 border border-brand-dark"></span>
            <h5 className="text-[11px] font-bold text-brand-white/60 leading-tight">
              4. Cold-Pack & Addis Ababa Delivery
            </h5>
            <p className="text-[10px] text-brand-silver/50 leading-tight">
              Quality assurance inspection and direct chilled dispatch routing.
            </p>
          </div>
        </div>
      </div>

      {/* Dynamic friendly advisory info block */}
      <div className="p-3 rounded-none bg-brand-red/5 border border-brand-red/10 flex items-start gap-2.5" id="order-summary-advisory">
        <AlertCircle className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
        <p className="text-[10px] text-brand-silver leading-relaxed font-light">
          Production speeds are optimized via our imported <strong>Domino</strong> machine. Timelines are finalized during coordination with Business Development Manager <strong className="text-brand-white">Tadiyos Belete</strong>.
        </p>
      </div>
    </motion.div>
  );
}
