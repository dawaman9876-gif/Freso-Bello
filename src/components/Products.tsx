import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  ShoppingCart,
  MessageSquare,
  Plus,
  Check,
  SlidersHorizontal,
  Info,
  Minus,
  X,
  Sparkles,
  ShoppingBag,
  CheckCircle2,
  Package,
  Clock,
  Truck,
} from 'lucide-react';
import { PRODUCTS_DATA, Product } from '../data';

interface ProductsProps {
  onAddProduct: (product: Product) => void;
  addedProductIds: string[];
}

export default function Products({ onAddProduct, addedProductIds }: ProductsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // AliExpress-style Buy Modal States
  const [selectedOrderProduct, setSelectedOrderProduct] = useState<Product | null>(null);
  const [orderQuantity, setOrderQuantity] = useState<number>(1);
  const [selectedVariant, setSelectedVariant] = useState<string>('classic');
  const [isOrderSubmitted, setIsOrderSubmitted] = useState<boolean>(false);

  const VARIANTS = [
    { id: 'classic', label: 'Classic Artisanal', sub: '500g Pack', weight: 0.5, desc: 'Authentic extruded bronze-die dry cure.' },
    { id: 'bulk', label: 'Restaurateur Bulk', sub: '5.0kg Case', weight: 5.0, desc: 'Large catering trays tailored for commercial kitchens.' },
    { id: 'premium', label: 'Double Hydration', sub: '1.0kg Spec', weight: 1.0, desc: 'High moisture absorption cut for premium al dente bite.' },
  ];

  const currentVariantObj = VARIANTS.find(v => v.id === selectedVariant) || VARIANTS[0];
  const numericTotalWeight = orderQuantity * currentVariantObj.weight;
  const totalWeight = numericTotalWeight.toFixed(1);

  const handleOpenBuyModal = (product: Product) => {
    setSelectedOrderProduct(product);
    setOrderQuantity(1);
    if (product.category === 'stuffed' || product.tag.toLowerCase().includes('bulk')) {
      setSelectedVariant('bulk');
    } else {
      setSelectedVariant('classic');
    }
    setIsOrderSubmitted(false);
  };

  const handleCloseBuyModal = () => {
    setSelectedOrderProduct(null);
  };

  const categories = [
    { id: 'all', name: 'All Collections' },
    { id: 'pasta', name: 'Fresh Pasta' },
    { id: 'sauce', name: 'Gourmet Sauces' },
    { id: 'stuffed', name: 'Catering Kits' },
    { id: 'infused', name: 'Infused' },
    { id: 'grains', name: 'Ancient Grains' },
  ];

  // Filtering logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const triggerDirectInquiry = (productName: string) => {
    const baseText = `Hello FrescoBello, I am interested in placing an inquiry for your premium "${productName}". Please share details regarding production schedules and minimum wholesale/retail quantities. Thank you!`;
    const encodedText = encodeURIComponent(baseText);
    const targetUrl = `https://wa.me/251970715463?text=${encodedText}`;
    window.open(targetUrl, '_blank');
  };

  return (
    <section id="products" className="py-24 bg-brand-medium-green relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-brand-gold text-xs uppercase tracking-widest font-bold block premium-ornament">
            Chef's Curated Selection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-cream mt-2 leading-tight">
            Our Products
          </h2>
          <p className="text-xs sm:text-sm text-brand-gray mt-2 font-light">
            Explore our premium selection. Customize your commercial supply pipeline,
            add multiple varieties to your custom inquiry cart, or place a direct WhatsApp request.
          </p>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto mt-4"></div>
        </div>

        {/* Search and Filters Hub */}
        <div className="mb-12 space-y-6 max-w-5xl mx-auto" id="products-controls">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-brand-dark-green/60 p-4 rounded-2xl border border-brand-gold/15 shadow-inner">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-brand-gray">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search premium shapes..."
                className="w-full bg-brand-dark-green text-brand-cream pl-10 pr-4 py-2.5 rounded-xl border border-brand-gold/10 focus:border-brand-gold focus:outline-none placeholder-brand-gray/50 text-sm transition-all shadow-md font-sans"
              />
            </div>

            {/* Category Filter Pills (Desktop and Scrollable Mobile) */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto py-1 scrollbar-none justify-start md:justify-end no-scrollbar">
              {categories.map((cat) => {
                const count = cat.id === 'all' 
                  ? PRODUCTS_DATA.length 
                  : PRODUCTS_DATA.filter(p => p.category === cat.id).length;
                
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-[10px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer shrink-0 border flex items-center gap-2 ${
                      selectedCategory === cat.id
                        ? 'bg-brand-gold text-brand-dark-green border-brand-gold shadow-md shadow-brand-gold/20 scale-[1.02]'
                        : 'bg-brand-dark-green/50 text-brand-cream/60 border-brand-gold/10 hover:text-brand-gold hover:border-brand-gold/30'
                    }`}
                  >
                    {cat.name}
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                      selectedCategory === cat.id ? 'bg-brand-dark-green/20 text-brand-dark-green' : 'bg-brand-gold/10 text-brand-gold/60'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Grid display with layout animations */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          id="products-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product: Product) => {
              const isAdded = addedProductIds.includes(product.id);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  key={product.id}
                  className="rounded-2xl bg-brand-dark-green/95 border border-brand-gold/15 overflow-hidden hover:border-brand-red/50 group flex flex-col h-full shadow-lg transition-all duration-300 relative"
                >
                  {/* Image Container with tag */}
                  <div className="relative h-60 sm:h-64 overflow-hidden bg-brand-dark-green flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://placehold.co/400x300/14291a/d4af37?text=${encodeURIComponent(product.name)}`;
                      }}
                    />
                    {/* Shadow gradient for visual contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 pointer-events-none"></div>

                    {/* Weight tag */}
                    <span className="absolute top-4 right-4 bg-brand-gold text-brand-dark-green text-[9px] sm:text-[10px] tracking-widest font-extrabold px-3 py-1 rounded-full uppercase shadow-md">
                      {product.tag}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-cream group-hover:text-brand-gold transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-[11px] text-brand-gold-light font-serif italic mt-1 leading-tight">
                        "{product.subtitle}"
                      </p>
                      <p className="text-xs text-brand-gray mt-3 leading-relaxed font-light">
                        {product.description}
                      </p>
                    </div>

                    {/* Dual Actions Footer */}
                    <div className="mt-6 pt-4 border-t border-brand-gold/10 space-y-2.5">
                      {/* Interactive Inquiry Basket Addition */}
                      <button
                        onClick={() => onAddProduct(product)}
                        className={`w-full py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer border ${
                          isAdded
                            ? 'bg-green-950/40 text-green-400 border-green-500/30'
                            : 'bg-brand-medium-green/80 text-brand-gold border-brand-gold/20 hover:border-brand-gold hover:bg-brand-gold/10'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-4 h-4 text-green-400" /> In Inquiry Basket
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" /> Add to Inquiry Basket
                          </>
                        )}
                      </button>

                      {/* Direct WhatsApp Ordering */}
                      <button
                        onClick={() => handleOpenBuyModal(product)}
                        className="w-full py-2.5 bg-brand-red hover:bg-red-700 text-white font-bold uppercase text-[11px] tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                        id={`product-order-btn-${product.id}`}
                      >
                        <MessageSquare className="w-4 h-4 fill-current" /> Order
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Fallback empty view */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 bg-brand-dark-green/40 rounded-2xl border border-dashed border-brand-gold/10 p-8"
              id="no-products-fallback"
            >
              <Info className="w-12 h-12 text-brand-gold/55 mx-auto mb-4" />
              <h3 className="font-serif text-lg font-semibold text-brand-cream">No shapes found</h3>
              <p className="text-xs text-brand-gray mt-1 max-w-sm mx-auto font-light">
                No matching products found for "{searchTerm}". Try clearing your filters or testing other Italian pasta tags.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-6 py-2 bg-brand-gold text-brand-dark-green text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-brand-gold-light transition-all cursor-pointer"
              >
                Reset Search
              </button>
            </motion.div>
          )}
        </motion.div>

      </div>

      {/* AliExpress-style B2B Quick Order Modal */}
      <AnimatePresence>
        {selectedOrderProduct && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center overflow-hidden" id="quick-buy-modal-wrapper">
            {/* Dark Blurred Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseBuyModal}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
              id="quick-buy-backdrop"
            />

            {/* Modal Body: Slide-up on mobile, Centered zoom on desktop */}
            <motion.div
              initial={{ y: '100%', opacity: 0.5, scale: 1 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: '100%', opacity: 0.5 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative bg-brand-dark-green text-brand-cream border-t sm:border border-brand-gold/25 w-full max-w-lg rounded-t-[2.2rem] sm:rounded-3xl shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[85vh] z-10 overflow-hidden"
              id="quick-buy-panel"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-brand-gold/10 bg-brand-dark-green/95 relative z-20">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-brand-gold" />
                  <span className="font-serif text-sm font-bold tracking-widest text-brand-gold uppercase">
                    B2B Quick Order Express
                  </span>
                </div>
                <button
                  onClick={handleCloseBuyModal}
                  className="p-2 rounded-full hover:bg-brand-medium-green text-brand-gray hover:text-brand-cream transition-colors cursor-pointer"
                  id="close-quick-buy-modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {!isOrderSubmitted ? (
                  <>
                    {/* Image and Meta Row */}
                    <div className="flex gap-4 sm:gap-6 items-start" id="modal-product-identity">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-brand-gold/20 shrink-0 bg-brand-medium-green">
                        <img
                          src={selectedOrderProduct.image}
                          alt={selectedOrderProduct.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://placehold.co/150x150/14291a/d4af37?text=${encodeURIComponent(selectedOrderProduct.name)}`;
                          }}
                        />
                      </div>
                      <div className="flex-1 space-y-1">
                        <span className="text-[9px] uppercase tracking-wider text-brand-gold-light bg-brand-medium-green/60 px-2 py-0.5 rounded border border-brand-gold/10 font-mono">
                          {selectedOrderProduct.category}
                        </span>
                        <h4 className="font-serif text-lg sm:text-xl font-bold text-brand-cream">
                          {selectedOrderProduct.name}
                        </h4>
                        <p className="text-[11px] text-brand-gold-light font-serif italic">
                          "{selectedOrderProduct.subtitle}"
                        </p>
                        <p className="text-[10px] text-brand-gray/80 leading-relaxed font-light mt-1 max-h-12 overflow-hidden text-ellipsis line-clamp-2">
                          {selectedOrderProduct.description}
                        </p>
                      </div>
                    </div>

                    {/* AliExpress Option Selection Matrix */}
                    <div className="space-y-2.5" id="modal-variant-selection">
                      <span className="text-[10px] uppercase tracking-widest text-brand-gray font-bold block">
                        Select Procurement Spec
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {VARIANTS.map((v) => {
                          const isSelected = selectedVariant === v.id;
                          return (
                            <button
                              key={v.id}
                              onClick={() => setSelectedVariant(v.id)}
                              className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                                isSelected
                                  ? 'bg-brand-medium-green/80 border-brand-gold ring-1 ring-brand-gold/25 text-brand-cream'
                                  : 'bg-brand-dark-green border-brand-gold/10 text-brand-gray hover:border-brand-gold/30 hover:text-brand-cream'
                              }`}
                            >
                              <span className={`text-[11px] font-bold block ${isSelected ? 'text-brand-gold' : ''}`}>
                                {v.label}
                              </span>
                              <span className="text-[9px] font-mono mt-0.5 opacity-80">
                                {v.sub}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                      <p className="text-[10px] text-brand-gray leading-normal italic font-light pt-1">
                        {currentVariantObj.desc}
                      </p>
                    </div>

                    {/* AliExpress Quantity Selector */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-brand-medium-green/20 border border-brand-gold/10" id="modal-quantity-control">
                      <div className="space-y-0.5">
                        <span className="text-[10px] uppercase tracking-wider text-brand-gray font-bold block">
                          Procurement Quantity
                        </span>
                        <span className="text-[11px] text-brand-gold font-serif">
                          {currentVariantObj.sub} unit size
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setOrderQuantity(prev => Math.max(1, prev - 1))}
                          className="w-8 h-8 rounded-lg bg-brand-medium-green hover:bg-brand-gold hover:text-brand-dark-green text-brand-gold flex items-center justify-center transition-colors font-bold cursor-pointer border border-brand-gold/10"
                          disabled={orderQuantity <= 1}
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={orderQuantity}
                          onChange={(e) => {
                            const val = parseInt(e.target.value);
                            if (!isNaN(val) && val >= 1) setOrderQuantity(val);
                          }}
                          className="w-12 h-8 bg-brand-dark-green border border-brand-gold/20 rounded-lg text-center font-mono text-xs focus:outline-none focus:border-brand-gold text-brand-cream animate-none"
                        />
                        <button
                          onClick={() => setOrderQuantity(prev => prev + 1)}
                          className="w-8 h-8 rounded-lg bg-brand-medium-green hover:bg-brand-gold hover:text-brand-dark-green text-brand-gold flex items-center justify-center transition-colors font-bold cursor-pointer border border-brand-gold/10"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Dynamic Batch / Spec Calculation Details */}
                    <div className="p-4 rounded-xl bg-brand-dark-green/80 border border-brand-gold/5 space-y-2 text-xs" id="modal-calculations">
                      <div className="flex justify-between items-center text-brand-gray">
                        <span>Unit Weight Spec:</span>
                        <span className="font-mono text-brand-cream">{currentVariantObj.weight} kg</span>
                      </div>
                      <div className="flex justify-between items-center text-brand-gray">
                        <span>Total Est. Volume:</span>
                        <span className="font-mono font-bold text-brand-gold">{totalWeight} kg</span>
                      </div>
                      <div className="flex justify-between items-center text-brand-gray">
                        <span>Est. Production Speed:</span>
                        <span className="text-brand-cream flex items-center gap-1">
                          <Clock className="w-3 h-3 text-brand-gold animate-pulse" /> ~{orderQuantity > 5 ? '48' : '24'} Hours
                        </span>
                      </div>
                    </div>

                    {/* Price Breakdown Calculation */}
                    <div className="p-4 rounded-xl border border-brand-gold/10 bg-brand-medium-green/10 space-y-3" id="modal-pricing-breakdown">
                      <span className="text-[10px] uppercase tracking-widest text-brand-gray font-bold block">
                        Estimated Quotation Breakdown
                      </span>
                      <div className="space-y-1.5 text-[11px]">
                        <div className="flex justify-between items-center text-brand-cream/80">
                          <span className="flex items-center gap-1.5">
                            Subtotal <span className="text-[9px] text-brand-gray">(ETB {selectedOrderProduct.basePricePerKg.toLocaleString()}/kg)</span>
                          </span>
                          <span className="font-mono text-brand-cream">
                            ETB {(numericTotalWeight * selectedOrderProduct.basePricePerKg).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-brand-cream/80">
                          <span>Institutional Tax (15%)</span>
                          <span className="font-mono text-brand-cream">
                            ETB {(numericTotalWeight * selectedOrderProduct.basePricePerKg * 0.15).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-brand-cream/80">
                          <span className="flex items-center gap-1.5">
                            Logistics & Handling
                            {numericTotalWeight >= 20 && <span className="text-[9px] text-green-500 uppercase font-bold">Bulk Discount</span>}
                          </span>
                          <span className="font-mono text-brand-cream">
                            {numericTotalWeight >= 20 ? 'ETB 0.00' : 'ETB 2,500.00'}
                          </span>
                        </div>
                        <div className="pt-2 border-t border-brand-gold/10 flex justify-between items-center text-brand-gold">
                          <span className="font-bold uppercase tracking-wider">Total Est. Contract Value</span>
                          <span className="font-mono text-lg font-bold">
                            ETB {(
                              (numericTotalWeight * selectedOrderProduct.basePricePerKg) * 1.15 + 
                              (numericTotalWeight >= 20 ? 0 : 2500)
                            ).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Final CTA Button */}
                    <button
                      onClick={() => setIsOrderSubmitted(true)}
                      className="w-full py-3.5 bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-dark-green font-bold uppercase text-xs tracking-widest rounded-xl transition-all duration-300 hover:opacity-90 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                      id="modal-confirm-order-btn"
                    >
                      <Sparkles className="w-4 h-4" /> Confirm Order
                    </button>
                  </>
                ) : (
                  /* Success/Confimation screen mirroring seamless B2B logistics */
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-6 space-y-6"
                    id="modal-success-screen"
                  >
                    {/* Morphing Success Animation */}
                    <div className="flex justify-center py-2">
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        {/* Background Pulsing Rings */}
                        <motion.div 
                          className="absolute inset-0 rounded-full bg-brand-gold/5 border border-brand-gold/10"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: [0.8, 1.2, 1], opacity: [0, 1, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        
                        {/* Main Animating Container */}
                        <motion.div
                          initial={{ borderRadius: "50%", scale: 0 }}
                          animate={{ 
                            scale: 1,
                            borderRadius: ["50%", "50%", "20%"],
                            rotate: [0, 0, 90, 0]
                          }}
                          transition={{ 
                            duration: 1.2, 
                            times: [0, 0.6, 1],
                            ease: "easeInOut" 
                          }}
                          className="w-16 h-16 bg-brand-gold flex items-center justify-center shadow-xl shadow-brand-gold/20 relative z-10"
                        >
                          <AnimatePresence mode="wait">
                            <motion.div
                              key="checkmark"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0, rotate: -45 }}
                              transition={{ duration: 0.4, delay: 0.3 }}
                              className="absolute"
                            >
                              <Check className="w-8 h-8 text-brand-dark-green stroke-[3]" />
                            </motion.div>
                            
                            <motion.div
                              key="box"
                              initial={{ opacity: 0, scale: 0, rotate: 45 }}
                              animate={{ opacity: 1, scale: 1, rotate: 0 }}
                              transition={{ duration: 0.5, delay: 1.4 }}
                              className="absolute"
                            >
                              <Package className="w-8 h-8 text-brand-dark-green stroke-[2.5]" />
                            </motion.div>
                          </AnimatePresence>

                          {/* Detail: Floating Sparkles during transition */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ delay: 1.2, duration: 1 }}
                            className="absolute -top-2 -right-2"
                          >
                            <Sparkles className="w-6 h-6 text-brand-cream" />
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-brand-cream">
                        Order Formulated & Sealed
                      </h4>
                      <p className="text-xs text-brand-gray max-w-sm mx-auto leading-relaxed font-light">
                        Your specifications are locked into the <strong>Domino Italy</strong> extrusion queue. Dispatch coordination is now active.
                      </p>
                    </div>

                    {/* Summary Card */}
                    <div className="p-4 rounded-xl bg-brand-medium-green/20 border border-brand-gold/15 text-left space-y-2.5 max-w-sm mx-auto">
                      <span className="text-[9px] uppercase tracking-widest text-brand-gold font-bold block border-b border-brand-gold/10 pb-1 font-mono">
                        Procurement Spec Sheet
                      </span>
                      <div className="grid grid-cols-2 gap-y-1.5 text-xs text-brand-cream font-sans">
                        <span className="text-brand-gray">Pasta Shape:</span>
                        <span className="font-bold text-right">{selectedOrderProduct.name}</span>
                        
                        <span className="text-brand-gray">Spec Grade:</span>
                        <span className="font-bold text-right">{currentVariantObj.label}</span>
                        
                        <span className="text-brand-gray">Total Quantity:</span>
                        <span className="font-mono text-brand-gold font-bold text-right">{orderQuantity}x</span>
                        
                        <span className="text-brand-gray">Total Batch:</span>
                        <span className="font-mono text-brand-gold font-bold text-right">{totalWeight} kg</span>
                      </div>
                    </div>

                    {/* Next Action Directives */}
                    <div className="space-y-3 pt-2">
                      <p className="text-[10px] text-brand-gray max-w-xs mx-auto leading-relaxed italic">
                        Coordinate execution or proceed directly with B2B Dispatch Manager <strong className="text-brand-cream">Tadiyos Belete</strong> via our verified channels:
                      </p>

                      <div className="flex flex-col gap-2 max-w-xs mx-auto">
                        <button
                          onClick={() => {
                            const text = `Hello FrescoBello,\n\nI am placing a direct order for your premium "${selectedOrderProduct.name}" shape!\n\nSpecifications:\n- Variant: ${currentVariantObj.label} (${currentVariantObj.sub})\n- Quantity: ${orderQuantity} units\n- Estimated Total Weight: ${totalWeight} kg\n- Custom request specs processed via B2B checkout simulation.\n\nPlease coordinate with dispatch manager Tadiyos Belete for extrusion schedules in Addis Ababa. Thank you!`;
                            const encodedText = encodeURIComponent(text);
                            window.open(`https://wa.me/251970715463?text=${encodedText}`, '_blank');
                          }}
                          className="w-full py-2.5 bg-brand-red hover:bg-red-700 text-white font-bold uppercase text-[11px] tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                        >
                          <MessageSquare className="w-4 h-4 fill-current" /> Dispatch via WhatsApp
                        </button>

                        <button
                          onClick={() => {
                            onAddProduct(selectedOrderProduct);
                            handleCloseBuyModal();
                          }}
                          className="w-full py-2.5 bg-brand-medium-green border border-brand-gold/20 hover:border-brand-gold text-brand-gold font-bold uppercase text-[10px] tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" /> Back up in Inquiry Basket
                        </button>

                        <button
                          onClick={handleCloseBuyModal}
                          className="w-full py-2 bg-transparent text-brand-gray hover:text-brand-cream text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          Continue Exploring
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
