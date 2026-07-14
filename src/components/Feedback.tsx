import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Send, CheckCircle2, MessageSquareQuote } from 'lucide-react';

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;
    setSubmitted(true);
  };

  return (
    <section id="feedback" className="py-40 bg-brand-bg relative overflow-hidden transition-colors duration-500">
      {/* Decorative Ornaments */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto px-6"
      >
        <div className="relative bg-brand-bg-soft rounded-[4rem] overflow-hidden border border-brand-ink/5 premium-shadow">
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="p-12 md:p-20 relative z-10">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-12"
                >
                  <div className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-bg premium-shadow text-brand-gold mb-4 border border-brand-ink/5">
                      <MessageSquareQuote className="w-8 h-8" />
                    </div>
                    <h2 className="font-serif text-5xl md:text-6xl font-bold text-brand-ink tracking-tighter">
                      Share your <span className="text-brand-gold italic">Experience.</span>
                    </h2>
                    <p className="text-brand-ink/60 max-w-md mx-auto text-lg font-medium leading-relaxed">
                      Your feedback fuels our culinary innovation. Tell us about your journey with our pasta.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-12">
                    {/* Rating Stars */}
                    <div className="flex flex-col items-center gap-6">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">
                        Le Nostre Stelle
                      </span>
                      <div className="flex gap-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onMouseEnter={() => setHoveredRating(star)}
                            onMouseLeave={() => setHoveredRating(0)}
                            onClick={() => setRating(star)}
                            className="transition-all duration-300 transform hover:scale-125 focus:outline-none"
                          >
                            <Star
                              className={`w-12 h-12 transition-all duration-500 ${
                                star <= (hoveredRating || rating)
                                  ? 'fill-brand-gold text-brand-gold drop-shadow-[0_0_10px_rgba(180,145,87,0.3)]'
                                  : 'text-brand-gold/20'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                      <AnimatePresence>
                        {rating > 0 && (
                          <motion.span 
                            initial={{ opacity: 0, y: -10 }} 
                            animate={{ opacity: 1, y: 0 }}
                            className="text-brand-gold text-sm font-bold uppercase tracking-widest"
                          >
                            {rating === 5 ? 'Eccellente' : rating === 4 ? 'Ottimo' : rating === 3 ? 'Buono' : rating === 2 ? 'Discreto' : 'Migliorabile'}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Comment Area */}
                    <div className="space-y-4">
                      <label htmlFor="feedback-comment" className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold ml-6">
                        Pensieri e Commenti
                      </label>
                      <textarea
                        id="feedback-comment"
                        rows={5}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Tell us about the texture, the al dente bite, or our service..."
                        className="w-full bg-brand-bg border border-brand-ink/5 rounded-[2.5rem] p-8 text-brand-ink placeholder:text-brand-ink/20 focus:border-brand-gold/40 focus:ring-0 transition-all outline-none text-lg font-medium premium-shadow"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={rating === 0}
                      className="w-full py-6 rounded-full bg-brand-ink text-white font-bold uppercase tracking-[0.2em] text-sm hover:bg-brand-gold transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-2xl flex items-center justify-center gap-4 group border border-white/10"
                    >
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Invia Feedback
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-8"
                >
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-olive text-white mb-4 premium-shadow border border-white/10">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-serif text-5xl font-bold text-brand-ink tracking-tighter">
                      Grazie Mille.
                    </h3>
                    <p className="text-brand-ink/60 max-w-sm mx-auto text-lg font-medium leading-relaxed">
                      Your contribution has been recorded. We appreciate your role in the FrescoBello legacy.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setRating(0);
                      setComment('');
                    }}
                    className="text-brand-gold text-[10px] uppercase tracking-[0.4em] font-bold border-b border-brand-gold/20 hover:border-brand-gold transition-all pb-2"
                  >
                    Scrivi un altro
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

