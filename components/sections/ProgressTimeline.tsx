'use client';
import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { EASE_OUT } from '@/lib/motion';

const STEPS = [                                           // CUSTOMIZE
  { title: 'Get your quote', body: 'Sixty seconds online or one phone call. Flat rate, no walkthrough required for most homes.' },
  { title: 'Pick your day', body: 'Same-week slots in most of Yuma County. Evenings available for offices.' },
  { title: 'We clean, you check', body: 'A room-by-room checklist, photographed when we finish. You approve before we leave.' },
  { title: 'Guaranteed', body: 'Anything not right within 24 hours, we come back and re-clean it free. No forms, no fuss.' },
];

export default function ProgressTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.65', 'end 0.65'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <section ref={ref} className="relative mx-auto max-w-4xl px-6 py-28">
      <h2 className="mb-20 text-center text-4xl md:text-5xl">Booked to sparkling in four steps.</h2>
      <div className="absolute bottom-28 left-8 top-52 w-px bg-[var(--line)] md:left-1/2">
        <motion.div style={{ scaleY }}
          className="h-full w-full origin-top bg-gradient-to-b from-[var(--ink)] to-[var(--accent)]" />
      </div>
      <div className="space-y-24">
        {STEPS.map((s, i) => (
          <motion.article key={s.title}
            initial={{ opacity: 0, x: i % 2 ? 48 : -48 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-25%' }} transition={{ duration: 0.7, ease: EASE_OUT }}
            className={`relative w-full pl-16 md:w-1/2 md:pl-0 ${i % 2 ? 'md:ml-auto md:pl-14' : 'md:pr-14 md:text-right'}`}>
            <motion.span
              initial={{ scale: 0.5, backgroundColor: 'var(--paper)' }}
              whileInView={{ scale: 1, backgroundColor: 'var(--accent)' }}
              viewport={{ once: true, margin: '-40%' }} transition={{ duration: 0.4 }}
              className={`absolute top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--accent)] ${i % 2 ? 'left-[26px] md:-left-[7px]' : 'left-[26px] md:-right-[7px] md:left-auto'}`} />
            <p className="text-xs tracking-widest text-[var(--accent)] uppercase">Step 0{i + 1}</p>
            <h3 className="mt-2 text-2xl text-[var(--ink)] md:text-3xl">{s.title}</h3>
            <p className="mt-2 text-[var(--body)]">{s.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
