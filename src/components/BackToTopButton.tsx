import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { Language } from '../types';

interface BackToTopButtonProps {
  language?: Language;
}

export const BackToTopButton: React.FC<BackToTopButtonProps> = ({ language = 'en' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Hero section height is roughly 400px - 500px depending on screen
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility(); // Check initial state

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const isBn = language === 'bn';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="back-to-top-btn"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={scrollToTop}
          aria-label={isBn ? 'উপরে যান' : 'Back to top'}
          title={isBn ? 'উপরে যান' : 'Back to top'}
          className="fixed bottom-20 right-5 sm:right-8 z-50 p-3.5 rounded-full bg-slate-900/90 text-cyan-400 border border-cyan-500/40 shadow-xl shadow-cyan-950/50 backdrop-blur-md hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 hover:scale-110 active:scale-95 transition-all duration-200 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          <span className="sr-only">{isBn ? 'উপরে যান' : 'Back to top'}</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
