'use client';
import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { EASE_OUT } from '@/lib/motion';

const CHAPTERS = [                                        // CUSTOMIZE
  { title: 'Discover', body: 'A deep-dive into your business, customers, and competition before anything is designed.', img: '/c1.jpg' },
  { title: 'Define', body: 'Sitemap, copy direction, and a visual language — agreed before build starts.', img: '/c2.jpg' },
  { title: 'Deliver', body: 'Weekly builds you can click. Launch is a formality, not a reveal.', img: '/c3.jpg' },
];

export default function ChapterNarrative() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  useMotionValueEvent(scrollYProgress, 'change', (v) =>
    setActive(Math.min(CHAPTERS.length - 1, Math.floor(v * CHAPTERS.length))));

  const jumpTo = (i: number) => {
    const el = ref.current!;
    const top = el.offsetTop + (el.scrollHeight - window.innerHeight) * ((i + 0.5) / CHAPTERS.length);
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div ref={ref} style={{ height: `${CHAPTERS.length * 120}svh` }} className="bg-[var(--paper)]">
      <div className="sticky top-0 grid h-[100svh] grid-cols-1 items-center gap-10 px-6 md:grid-cols-[auto_1fr_1fr] md:px-16">
        <div className="hidden flex-col gap-4 md:flex">
          {CHAPTERS.map((c, i) => (
            <button key={c.title} onClick={() => jumpTo(i)} aria-label={c.title}
              className="group flex items-center gap-3">
              <span className={`h-2 w-2 rounded-full transition-all duration-500 ${i === active ? 'scale-150 bg-[var(--accent)]' : 'bg-[var(--ink)]/25 group-hover:bg-[var(--ink)]/50'}`} />
              <span className={`text-xs tracking-widest uppercase transition-opacity duration-500 ${i === active ? 'opacity-100' : 'opacity-30'}`}>{c.title}</span>
            </button>
          ))}
        </div>
        <div>
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -28 }} transition={{ duration: 0.45, ease: EASE_OUT }}>
              <p className="text-sm tracking-widest text-[var(--accent)]">0{active + 1} / 0{CHAPTERS.length}</p>
              <h3 className="mt-3 text-4xl md:text-6xl text-[var(--ink)]">{CHAPTERS[active].title}</h3>
              <p className="mt-5 max-w-md text-lg text-[var(--body)]">{CHAPTERS[active].body}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="relative hidden h-[62svh] overflow-hidden rounded-2xl md:block">
          <AnimatePresence mode="popLayout">
            <motion.img key={active} src={CHAPTERS[active].img} alt=""
              initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: EASE_OUT }}
              className="absolute inset-0 h-full w-full object-cover" />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
