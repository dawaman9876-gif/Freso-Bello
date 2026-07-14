import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Plus,
  Check,
  Info,
  Minus,
  X,
  ShoppingCart,
  ShoppingBag,
  MessageSquare,
} from 'lucide-react';
import { PRODUCTS_DATA, Product } from '../data';

interface ProductsProps {
  onAddProduct: (product: Product) => void;
  addedProductIds: string[];
}

export default function Products({ onAddProduct, addedProductIds }: ProductsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const [selectedOrderProduct, setSelectedOrderProduct] = useState<Product | null>(null);
  const [orderQuantity, setOrderQuantity] = useState<number>(1);
  const [selectedVariant, setSelectedVariant] = useState<string>('classic');
  const [isOrderSubmitted, setIsOrderSubmitted] = useState<boolean>(false);

  const VARIANTS = [
    { id: 'classic', label: 'Artisanal Batch', sub: '500g Retail', weight: 0.5, desc: 'Authentic extruded bronze-die dry cure.' },
    { id: 'bulk', label: 'Commercial Bulk', sub: '5.0kg Case', weight: 5.0, desc: 'Large catering trays tailored for commercial kitchens.' },
    { id: 'premium', label: 'Double Hydration', sub: '1.0kg Spec', weight: 1.0, desc: 'High moisture absorption cut for premium al dente bite.' },
  ];

  const currentVariantObj = VARIANTS.find(v => v.id === selectedVariant) || VARIANTS[0];
  const numericTotalWeight = orderQuantity * currentVariantObj.weight;
  const totalWeight = numericTotalWeight.toFixed(1);

  const handleOpenBuyModal = (product: Product) => {
    setSelectedOrderProduct(product);
    setOrderQuantity(1);
    setSelectedVariant(product.category === 'stuffed' ? 'bulk' : 'classic');
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
    { id: 'grains', name: 'Ancient Grains' },
  ];

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

  return (
    <section id="products" className="py-40 bg-brand-bg relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-brand-gold"></span>
              <span className="text-[11px] uppercase tracking-[0.5em] text-brand-gold font-bold">
                Il Catalogo
              </span>
            </div>
            <h2 className="font-serif text-6xl md:text-8xl font-bold text-brand-ink leading-[0.85] tracking-tighter">
              Curated <br />
              <span className="text-brand-gold italic">Collections.</span>
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-brand-ink/60 max-w-sm ml-auto font-medium text-lg leading-relaxed">
              Explore our laboratory-crafted shapes. Architected for consistency and superior texture.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold transition-transform group-focus-within:scale-110" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search shapes..."
              className="w-full bg-brand-bg-soft border border-brand-ink/5 rounded-full pl-14 pr-8 py-5 text-sm font-medium focus:outline-none focus:border-brand-gold/30 transition-all premium-shadow text-brand-ink placeholder:text-brand-ink/30"
            />
          </div>

          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-8 py-4 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-brand-gold text-white premium-shadow'
                    : 'bg-brand-bg-soft text-brand-ink/40 border border-brand-ink/5 hover:border-brand-gold hover:text-brand-gold'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product: Product) => {
              const isAdded = addedProductIds.includes(product.id);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={product.id}
                  className="group"
                >
                  <div className="parallax-container rounded-[3.5rem] overflow-hidden premium-shadow bg-brand-bg-soft mb-8 border border-brand-ink/5 aspect-[4/5] relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="parallax-img w-full h-full object-cover transition-transform duration-1000"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://placehold.co/600x800/FBF9F6/141414?text=${encodeURIComponent(product.name)}`;
                      }}
                    />
                    
                    {/* Badge */}
                    <div className="absolute top-8 left-8">
                      <span className="frosted-glass px-5 py-2.5 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase text-brand-gold premium-shadow">
                        {product.tag}
                      </span>
                    </div>

                    {/* Actions Overlay */}
                    <div className="absolute inset-0 bg-brand-ink/20 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onAddProduct(product)}
                        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 premium-shadow ${
                          isAdded ? 'bg-brand-olive text-white' : 'bg-brand-bg text-brand-ink'
                        }`}
                      >
                        {isAdded ? <Check className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleOpenBuyModal(product)}
                        className="w-16 h-16 rounded-full bg-brand-gold text-white flex items-center justify-center premium-shadow"
                      >
                        <ShoppingBag className="w-6 h-6" />
                      </motion.button>
                    </div>
                  </div>

                  <div className="px-4">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-serif text-3xl font-bold text-brand-ink tracking-tight group-hover:text-brand-gold transition-colors duration-500">
                        {product.name}
                      </h3>
                      <span className="font-serif text-lg font-bold text-brand-gold italic">
                        ETB {product.basePricePerKg}/kg
                      </span>
                    </div>
                    <p className="text-brand-ink/50 text-sm font-medium leading-relaxed mb-8 line-clamp-2">
                      {product.description}
                    </p>
                    <button
                      onClick={() => handleOpenBuyModal(product)}
                      className="w-full py-5 rounded-full border border-brand-ink/10 text-[10px] font-bold tracking-[0.2em] uppercase text-brand-ink hover:bg-brand-ink hover:text-white transition-all duration-500"
                    >
                      Configure Production
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </motion.div>

      {/* Configuration Modal */}
      <AnimatePresence>
        {selectedOrderProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseBuyModal}
              className="absolute inset-0 bg-brand-ink/40 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-brand-bg w-full max-w-4xl rounded-[4rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] border border-brand-ink/5"
            >
              {/* Modal Visual */}
              <div className="md:w-1/2 relative bg-brand-bg-soft hidden md:block">
                <img
                  src={selectedOrderProduct.image}
                  alt={selectedOrderProduct.name}
                  className="w-full h-full object-cover grayscale brightness-90"
                />
                <div className="absolute inset-0 bg-brand-gold/10 mix-blend-multiply"></div>
                <button
                  onClick={handleCloseBuyModal}
                  className="absolute top-10 left-10 w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-ink premium-shadow hover:scale-110 transition-transform border border-brand-ink/5"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 p-12 md:p-16 overflow-y-auto bg-brand-bg">
                {!isOrderSubmitted ? (
                  <div className="space-y-12">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold block mb-4">Specificazione</span>
                        <h4 className="font-serif text-5xl font-bold text-brand-ink leading-none tracking-tighter">
                          {selectedOrderProduct.name}
                        </h4>
                      </div>
                      <button onClick={handleCloseBuyModal} className="md:hidden p-4">
                        <X className="w-6 h-6" />
                      </button>
                    </div>

                    <div className="space-y-6">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold block">Select Spec</span>
                      <div className="grid grid-cols-1 gap-4">
                        {VARIANTS.map((v) => {
                          const isSelected = selectedVariant === v.id;
                          return (
                            <button
                              key={v.id}
                              onClick={() => setSelectedVariant(v.id)}
                              className={`p-8 rounded-[2rem] text-left transition-all flex items-center justify-between group ${
                                isSelected
                                  ? 'bg-brand-ink text-white premium-shadow'
                                  : 'bg-brand-bg border border-brand-ink/5 text-brand-ink hover:border-brand-gold'
                              }`}
                            >
                              <div>
                                <span className="text-sm font-bold block mb-1 group-hover:text-brand-gold transition-colors">{v.label}</span>
                                <span className={`text-xs opacity-60 font-medium ${isSelected ? 'text-white' : ''}`}>{v.desc}</span>
                              </div>
                              <span className={`text-[10px] font-mono font-bold px-4 py-2 rounded-full border ${isSelected ? 'border-white/20' : 'border-brand-ink/10'}`}>
                                {v.sub}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-10 rounded-[2.5rem] bg-brand-bg-soft border border-brand-ink/5">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold block mb-1">Quantity</span>
                        <span className="text-sm font-bold text-brand-ink opacity-60">Production Units</span>
                      </div>
                      <div className="flex items-center gap-8">
                        <button
                          onClick={() => setOrderQuantity(prev => Math.max(1, prev - 1))}
                          className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-ink hover:text-brand-gold premium-shadow transition-colors"
                        >
                          <Minus className="w-5 h-5" />
                        </button>
                        <span className="text-4xl font-serif font-bold text-brand-ink italic">{orderQuantity}</span>
                        <button
                          onClick={() => setOrderQuantity(prev => prev + 1)}
                          className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-ink hover:text-brand-gold premium-shadow transition-colors"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-brand-ink/10 flex justify-between items-end">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold block mb-2">Total Yield</span>
                        <span className="text-3xl font-serif font-bold text-brand-ink">{totalWeight} <span className="text-lg">kg</span></span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold block mb-2">Production Estimate</span>
                        <span className="text-4xl font-serif font-bold text-brand-ink">
                          ETB {( (numericTotalWeight * selectedOrderProduct.basePricePerKg) * 1.15 + (numericTotalWeight >= 20 ? 0 : 2500) ).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsOrderSubmitted(true)}
                      className="w-full py-6 bg-brand-gold text-white rounded-full font-bold tracking-[0.2em] uppercase text-sm hover:bg-brand-ink transition-all duration-500 shadow-2xl flex items-center justify-center gap-4"
                    >
                      <ShoppingCart className="w-5 h-5" /> Initialize Production
                    </button>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20 space-y-12"
                  >
                    <div className="w-32 h-32 bg-brand-olive text-white flex items-center justify-center mx-auto rounded-full shadow-2xl">
                      <Check className="w-16 h-16 stroke-[3]" />
                    </div>
                    <div className="space-y-6">
                      <h4 className="font-serif text-5xl font-bold text-brand-ink tracking-tighter">Order Logged.</h4>
                      <p className="text-brand-ink/60 max-w-sm mx-auto font-medium text-lg">
                        Your specifications have been queued for the <span className="text-brand-gold">Domino Italy</span> line. Logistics pending.
                      </p>
                    </div>

                    <div className="flex flex-col gap-4 max-w-sm mx-auto">
                      <button
                        onClick={() => {
                          const text = `Hello FrescoBello,\n\nI am interested in placing an order for "${selectedOrderProduct.name}".\n\nSpecifications:\n- Spec: ${currentVariantObj.label}\n- Quantity: ${orderQuantity} units\n- Estimated Weight: ${totalWeight} kg\n\nPlease coordinate with dispatch manager Tadiyos Belete. Thank you!`;
                          window.open(`https://wa.me/251970715463?text=${encodeURIComponent(text)}`, '_blank');
                        }}
                        className="w-full py-6 bg-brand-ink text-white rounded-full font-bold tracking-[0.2em] uppercase text-xs flex items-center justify-center gap-4 hover:bg-brand-gold transition-all duration-500"
                      >
                        <MessageSquare className="w-5 h-5" /> Dispatch via WhatsApp
                      </button>
                      <button
                        onClick={handleCloseBuyModal}
                        className="w-full py-4 text-brand-gold font-bold uppercase tracking-[0.2em] text-[10px] hover:text-brand-ink transition-colors"
                      >
                        Continue Collection
                      </button>
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

