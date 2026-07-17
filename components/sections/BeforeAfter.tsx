'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BeforeAfter({
  before = '/images/before.webp', after = '/images/after.webp',
}: { before?: string; after?: string }) {
  const [isClean, setIsClean] = useState(true);

  const toggleState = () => {
    setIsClean(!isClean);
  };

  return (
    <section className="flex flex-col items-center px-6 py-24">
      <h2 className="mb-3 text-center text-4xl md:text-5xl">The Clean Convictions difference.</h2>
      <p className="mb-10 max-w-md text-center text-[var(--body)]">Click to toggle dirty ↔ clean.</p>

      <motion.button
        onClick={toggleState}
        className="group relative aspect-video w-full max-w-4xl overflow-hidden rounded-xl outline-offset-4 focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isClean ? 'clean' : 'dirty'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <img
              src={isClean ? after : before}
              alt={isClean ? "Sparkling clean space" : "Before cleaning"}
              className="h-full w-full object-cover"
            />

            {/* Overlay with shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />

            {/* Sparkle particles on transition */}
            <>
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="pointer-events-none absolute h-2 w-2 rounded-full bg-white"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 0, scale: 0, y: -20 }}
                  transition={{ duration: 0.8, delay: Math.random() * 0.3 }}
                />
              ))}
            </>
          </motion.div>
        </AnimatePresence>

        {/* State label */}
        <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
          {isClean ? '✨ Clean' : '🗑️ Dirty'}
        </div>

        {/* Hover prompt */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/15"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-sm font-medium text-white">Click to toggle</p>
        </motion.div>
      </motion.button>
    </section>
  );
}
