'use client';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { SPRING_SOFT } from '@/lib/motion';

function Letter({ char, mouseX }: { char: string; mouseX: MotionValue<number> }) {
  const ref = useRef<HTMLSpanElement>(null);
  const dist = useTransform(mouseX, (x: number) => {
    const r = ref.current?.getBoundingClientRect();
    return r ? x - (r.left + r.width / 2) : 9999;
  });
  const rotate = useSpring(useTransform(dist, [-160, 0, 160], [10, 0, -10]), SPRING_SOFT);
  const y = useSpring(useTransform(dist, [-160, 0, 160], [0, -18, 0]), SPRING_SOFT);
  const weight = useSpring(useTransform(dist, [-160, 0, 160], [400, 900, 400]), SPRING_SOFT);
  const fontVariationSettings = useTransform(weight, (w) => `'wght' ${Math.round(w)}`);
  return (
    <motion.span ref={ref} style={{ rotate, y, fontVariationSettings }} className="inline-block will-change-transform">
      {char === ' ' ? ' ' : char}
    </motion.span>
  );
}

export default function KineticHeadline({ text = 'We Make Spotless Homes' }: { text?: string }) {
  const mouseX = useMotionValue(9999);
  return (
    <section
      className="flex h-[70svh] items-center justify-center overflow-hidden"
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(9999)}>
      <h2 className="select-none text-6xl md:text-[10vw] tracking-tight text-[var(--ink)]">
        {text.split('').map((c, i) => <Letter key={i} char={c} mouseX={mouseX} />)}
      </h2>
    </section>
  );
}
