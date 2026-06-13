import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { smoothScrollToTop } from '../lib/smoothScroll';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ y: -4, scale: 1.04 }}
          whileTap={{ scale: 0.94 }}
          onClick={smoothScrollToTop}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-300/20 bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-2xl shadow-violet-700/30"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
