'use client';
import { useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, wrap } from 'framer-motion';

export default function VelocityMarquee({
  text = 'HOMES — OFFICES — DEEP CLEANS — MOVE-OUTS — ',
  baseSpeed = 2,
}: { text?: string; baseSpeed?: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [-1500, 0, 1500], [-4, 1, 4], { clamp: false });
  const skew = useTransform(smooth, [-1500, 1500], [6, -6]);
  const dir = useRef(1);
  useAnimationFrame((_, delta) => {
    let move = dir.current * baseSpeed * (delta / 1000);
    const f = factor.get();
    if (f < 0) dir.current = -1; else if (f > 0) dir.current = 1;
    move += dir.current * Math.abs(f) * baseSpeed * (delta / 1000);
    baseX.set(baseX.get() + move);
  });
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);
  return (
    <section className="overflow-hidden border-y border-[var(--line)] py-5" aria-hidden>
      <motion.div style={{ x, skewX: skew }} className="flex w-max whitespace-nowrap will-change-transform">
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i}
            className={`text-5xl md:text-7xl tracking-tight font-[family-name:var(--font-display)] ${i % 2 ? 'text-outline' : 'text-[var(--ink)]/85'}`}>
            {text}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
