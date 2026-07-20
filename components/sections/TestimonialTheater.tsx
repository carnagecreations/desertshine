'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EASE_OUT } from '@/lib/motion';
import { REVIEWS } from '@/lib/reviews';

// Reads real reviews from lib/reviews.ts. Renders nothing until real
// reviews exist — we never show fabricated testimonials.
const QUOTES = REVIEWS;
const DURATION = 6000;

export default function TestimonialTheater() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || QUOTES.length === 0) return;
    const t = setTimeout(() => setI((v) => (v + 1) % QUOTES.length), DURATION);
    return () => clearTimeout(t);
  }, [i, paused]);
  // Render nothing until real reviews exist — we never show fabricated
  // testimonials. Hooks run first so their order stays consistent.
  if (QUOTES.length === 0) return null;
  return (
    <section onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      className="mx-auto max-w-4xl px-6 py-28 text-center">
      <p className="mb-10 text-xs tracking-[0.3em] text-[var(--body)] uppercase">What Yuma says</p>
      <div className="min-h-[16rem] md:min-h-[14rem]">
        <AnimatePresence mode="wait">
          <motion.blockquote key={i} drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) setI((v) => (v + 1) % QUOTES.length);
              if (info.offset.x > 60) setI((v) => (v - 1 + QUOTES.length) % QUOTES.length);
            }}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5, ease: EASE_OUT }} className="cursor-grab active:cursor-grabbing">
            <p className="text-2xl leading-snug text-[var(--ink)] md:text-4xl">“{QUOTES[i].quote}”</p>
            <footer className="mt-8 text-sm text-[var(--body)]">
              <span className="text-[var(--ink)]">{QUOTES[i].name}</span> · {QUOTES[i].role}
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>
      <div className="mt-10 flex items-center justify-center gap-3">
        {QUOTES.map((_, d) => (
          <button key={d} onClick={() => setI(d)} aria-label={`Testimonial ${d + 1}`}
            className="relative h-1 w-12 overflow-hidden rounded-full bg-[var(--line)]">
            {d === i && (
              <motion.span key={`${i}-${paused}`} className="absolute inset-0 origin-left bg-[var(--ink)]"
                initial={{ scaleX: 0 }} animate={{ scaleX: paused ? 0 : 1 }}
                transition={{ duration: DURATION / 1000, ease: 'linear' }} />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
