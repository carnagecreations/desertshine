'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY } from '@/lib/gallery';

export default function BeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAfter, setIsAfter] = useState(true);

  const current = GALLERY[currentIndex];
  const total = GALLERY.length;

  const next = () => setCurrentIndex((i) => (i + 1) % total);
  const prev = () => setCurrentIndex((i) => (i - 1 + total) % total);

  return (
    <section className="flex flex-col items-center px-6 py-24 md:py-32">
      <h2 className="mb-3 text-center text-4xl md:text-5xl font-bold text-[var(--ink)]">
        See the difference.
      </h2>
      <p className="mb-12 max-w-md text-center text-[var(--body)]">
        Every photo here is our own work — no stock images, no staging.
      </p>

      <div className="w-full max-w-4xl">
        {/* Before/After Slider */}
        <motion.button
          onClick={() => setIsAfter(!isAfter)}
          aria-label={`Show ${isAfter ? 'before' : 'after'} photo of ${current.title}`}
          className="group relative aspect-video w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-[var(--line)] outline-offset-4 focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentIndex}-${isAfter}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <img
                src={isAfter ? current.after : current.before}
                alt={isAfter ? `${current.title} - After` : `${current.title} - Before`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
            </motion.div>
          </AnimatePresence>

          {/* State badge */}
          <div className="absolute bottom-6 left-6 rounded-full bg-black/70 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md">
            {isAfter ? '✨ After' : '🔍 Before'}
          </div>

          {/* Hover prompt */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm font-medium text-white">Click to toggle</p>
          </motion.div>
        </motion.button>

        {/* Photo counter and title */}
        <div className="mt-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-[var(--ink)]">
              {current.title}
            </h3>
            <p className="text-sm text-[var(--body)]">
              {currentIndex + 1} of {total}
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="grid h-12 w-12 place-items-center rounded-full border border-[var(--line)] bg-white text-lg text-[var(--ink)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-lg hover:shadow-[var(--accent)]/20"
            aria-label="Previous photo"
          >
            ←
          </motion.button>

          {/* Dot indicators */}
          <div className="flex gap-2">
            {GALLERY.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex ? 'bg-[var(--accent)] w-8' : 'bg-[var(--line)] w-2'
                }`}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>

          <motion.button
            onClick={next}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="grid h-12 w-12 place-items-center rounded-full bg-[var(--accent)] text-lg text-white transition-all hover:shadow-lg hover:shadow-[var(--accent)]/30"
            aria-label="Next photo"
          >
            →
          </motion.button>
        </div>
      </div>
    </section>
  );
}
