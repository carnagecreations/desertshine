'use client';
import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { SPRING_SOFT, EASE_SNAP } from '@/lib/motion';

export default function MagneticButton({
  children = 'Start a project', href = '/contact',       // CUSTOMIZE
}: { children?: React.ReactNode; href?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [hover, setHover] = useState(false);
  const bx = useSpring(useMotionValue(0), SPRING_SOFT);
  const by = useSpring(useMotionValue(0), SPRING_SOFT);
  const tx = useSpring(useMotionValue(0), SPRING_SOFT);
  const ty = useSpring(useMotionValue(0), SPRING_SOFT);
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    const dx = e.clientX - r.left - r.width / 2, dy = e.clientY - r.top - r.height / 2;
    bx.set(dx * 0.35); by.set(dy * 0.35); tx.set(dx * 0.15); ty.set(dy * 0.15);
  };
  const reset = () => { bx.set(0); by.set(0); tx.set(0); ty.set(0); setHover(false); };
  return (
    <motion.a ref={ref} href={href} style={{ x: bx, y: by }}
      onMouseMove={onMove} onMouseEnter={() => setHover(true)} onMouseLeave={reset}
      className="relative inline-flex overflow-hidden rounded-full border border-[var(--ink)] px-10 py-5 text-lg">
      <motion.span
        animate={{ scale: hover ? 2.5 : 0 }} transition={{ duration: 0.5, ease: EASE_SNAP }}
        className="absolute inset-0 m-auto h-full w-full rounded-full bg-[var(--ink)]" />
      <motion.span style={{ x: tx, y: ty }}
        className={`relative z-10 transition-colors duration-300 ${hover ? 'text-[var(--paper)]' : 'text-[var(--ink)]'}`}>
        {children}
      </motion.span>
    </motion.a>
  );
}
