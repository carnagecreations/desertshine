'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EASE_OUT, EASE_INOUT } from '@/lib/motion';
import { SITE } from '@/lib/site';

export default function ScrollZoomHero({
  src = '/images/hero.webp',
  eyebrow = 'Locally owned — Yuma, AZ',
  lines = ['Come home to', 'a *spotless* house.'],
  sub = 'Flat-rate cleaning on your schedule — mornings, evenings, weekends, whenever you need. 100% re-clean guarantee.',
}: { src?: string; eyebrow?: string; lines?: string[]; sub?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const fade = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const cueFade = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <div ref={ref} className="relative h-[100svh] overflow-hidden bg-[var(--paper-dark)]">
      <motion.div
        initial={{ scale: 1.15 }} animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: EASE_INOUT }}
        style={{ scale }} className="absolute inset-0 will-change-transform">
        <img src={src} alt="A freshly cleaned, sunlit living room" fetchPriority="high" decoding="async" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/25" />
      </motion.div>

      <motion.div style={{ y: textY, opacity: fade }}
        className="relative z-10 flex h-full flex-col justify-end p-6 pb-24 md:p-16 md:pb-28">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: EASE_OUT }}
          className="mb-4 text-sm tracking-[0.25em] uppercase text-white/70">{eyebrow}</motion.p>
        <h1 className="max-w-4xl text-5xl leading-[1.02] text-white md:text-8xl">
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span className="block will-change-transform"
                initial={{ y: '110%' }} animate={{ y: 0 }}
                transition={{ delay: 0.4 + i * 0.14, duration: 1, ease: EASE_OUT }}>
                {/* *word* renders as the accent-italic highlight */}
                {line.split(/(\*[^*]+\*)/).map((part, j) =>
                  part.startsWith('*') ? (
                    <em key={j} className="italic text-[var(--accent)]">{part.slice(1, -1)}</em>
                  ) : (
                    <span key={j}>{part}</span>
                  )
                )}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7, ease: EASE_OUT }}
          className="mt-6 max-w-md text-lg text-white/80">{sub}</motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.7, ease: EASE_OUT }}
          className="mt-8 flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact"
              className="group rounded-full bg-[var(--accent)] px-8 py-4 text-base font-medium text-white shadow-[0_8px_30px_-8px_rgba(232,93,47,0.7)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_36px_-8px_rgba(232,93,47,0.85)]">
              Get a free quote <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <a href={SITE.phoneHref} className="text-white/85 underline underline-offset-4 hover:text-white">
              or call {SITE.phone}
            </a>
          </div>
          <Link href="/pricing"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm transition-colors hover:bg-white/20">
            <span className="text-sm font-medium text-white">⚡ Get your flat-rate estimate instantly →</span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div style={{ opacity: cueFade }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-xs tracking-widest">
          <span>SCROLL</span><span className="h-8 w-px bg-white/50" />
        </motion.div>
      </motion.div>
    </div>
  );
}
