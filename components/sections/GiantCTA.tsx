'use client';
import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { SPRING_SOFT, EASE_SNAP } from '@/lib/motion';

export default function GiantCTA({
  label = 'Get your quote', href = '/contact',
  sub = 'Free, flat-rate, 60 seconds online — or call/text and we reply the same day.',
}: { label?: string; href?: string; sub?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [hover, setHover] = useState(false);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotate = useSpring(useTransform(mx, [0, 1], [-2.5, 2.5]), SPRING_SOFT);
  const lift = useSpring(useTransform(my, [0, 1], [8, -8]), SPRING_SOFT);
  return (
    <motion.a ref={ref} href={href}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width); my.set((e.clientY - r.top) / r.height);
        ref.current!.style.setProperty('--ox', `${((e.clientX - r.left) / r.width) * 100}%`);
        ref.current!.style.setProperty('--oy', `${((e.clientY - r.top) / r.height) * 100}%`);
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); mx.set(0.5); my.set(0.5); }}
      className="relative z-10 flex min-h-[75svh] flex-col items-center justify-center gap-6 overflow-hidden bg-[var(--paper)] shadow-[0_40px_80px_rgba(0,0,0,0.35)]">
      <motion.span aria-hidden
        animate={{ scale: hover ? 1 : 0 }} transition={{ duration: 0.7, ease: EASE_SNAP }}
        style={{ left: 'var(--ox, 50%)', top: 'var(--oy, 50%)' }}
        className="absolute h-[170vmax] w-[170vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--ink)]" />
      <motion.h2 style={{ rotate, y: lift }}
        className={`relative z-10 flex items-baseline gap-4 text-center text-6xl leading-none transition-colors duration-500 md:text-[10vw] ${hover ? 'text-[var(--paper)]' : 'text-[var(--ink)]'}`}>
        {label}
        <motion.span animate={{ x: hover ? 8 : 0, y: hover ? -8 : 0 }} className="text-[0.6em]">↗</motion.span>
      </motion.h2>
      <p className={`relative z-10 text-sm transition-colors duration-500 ${hover ? 'text-[var(--paper)]/60' : 'text-[var(--body)]'}`}>{sub}</p>
    </motion.a>
  );
}
