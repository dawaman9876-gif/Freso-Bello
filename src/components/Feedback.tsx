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
    <section id="feedback" className="py-24 bg-brand-medium-green/30 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass-panel rounded-3xl overflow-hidden shadow-2xl relative">
          {/* Decorative background accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          
          <div className="p-8 md:p-12 relative z-10">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-10"
                >
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-gold/10 text-brand-gold mb-2">
                      <MessageSquareQuote className="w-6 h-6" />
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-cream">
                      Share Your Experience
                    </h2>
                    <p className="text-brand-gray max-w-md mx-auto text-sm md:text-base font-light">
                      Your feedback fuels our culinary innovation. Tell us how we are doing.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Rating Stars */}
                    <div className="flex flex-col items-center gap-3">
                      <span className="text-[10px] uppercase tracking-widest text-brand-gold/60 font-bold">
                        Rate our Quality
                      </span>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onMouseEnter={() => setHoveredRating(star)}
                            onMouseLeave={() => setHoveredRating(0)}
                            onClick={() => setRating(star)}
                            className="transition-all duration-300 transform hover:scale-125"
                          >
                            <Star
                              className={`w-10 h-10 md:w-12 md:h-12 ${
                                star <= (hoveredRating || rating)
                                  ? 'fill-brand-gold text-brand-gold'
                                  : 'text-brand-gold/20'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                      {rating > 0 && (
                        <motion.span 
                          initial={{ opacity: 0 }} 
                          animate={{ opacity: 1 }}
                          className="text-brand-gold text-xs font-mono"
                        >
                          {rating === 5 ? 'Exceptional' : rating === 4 ? 'Great' : rating === 3 ? 'Good' : rating === 2 ? 'Fair' : 'Needs Improvement'}
                        </motion.span>
                      )}
                    </div>

                    {/* Comment Area */}
                    <div className="space-y-2">
                      <label htmlFor="feedback-comment" className="text-[10px] uppercase tracking-widest text-brand-gold/60 font-bold ml-1">
                        Any specific thoughts?
                      </label>
                      <textarea
                        id="feedback-comment"
                        rows={4}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Tell us about the texture, flavor, or service..."
                        className="w-full bg-brand-dark-green/50 border border-brand-gold/10 rounded-2xl p-4 text-brand-cream placeholder:text-brand-gray/30 focus:border-brand-gold/40 focus:ring-0 transition-all outline-none text-sm md:text-base"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={rating === 0}
                      className="w-full py-4 rounded-2xl bg-brand-gold text-brand-dark-green font-bold uppercase tracking-widest text-sm hover:bg-brand-gold-light transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-brand-gold/10 flex items-center justify-center gap-2 group"
                    >
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      Submit Review
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-gold/10 text-brand-gold mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-brand-cream">
                    Thank You!
                  </h3>
                  <p className="text-brand-gray max-w-sm mx-auto leading-relaxed">
                    Your feedback has been recorded in our quality control logs. We appreciate your contribution to the FrescoBello legacy.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setRating(0);
                      setComment('');
                    }}
                    className="text-brand-gold text-xs uppercase tracking-widest font-bold border-b border-brand-gold/20 hover:border-brand-gold transition-all pb-1"
                  >
                    Send another response
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
