'use client';
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function DrawnSpine({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] });
  const pathLength = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const headY = useTransform(pathLength, [0, 1], ['0%', '100%']);
  return (
    <section ref={ref} className="relative">
      <svg className="absolute left-8 top-0 h-full w-16 md:left-1/2 md:-translate-x-1/2"
        viewBox="0 0 100 1000" preserveAspectRatio="none" fill="none">
        <defs>
          <linearGradient id="spine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--ink)" /><stop offset="1" stopColor="var(--accent)" />
          </linearGradient>
        </defs>
        <path d="M50 0 C 20 200, 80 300, 50 500 C 20 700, 80 800, 50 1000" stroke="var(--line)" strokeWidth="2" />
        <motion.path d="M50 0 C 20 200, 80 300, 50 500 C 20 700, 80 800, 50 1000"  // CUSTOMIZE: path shape
          stroke="url(#spine)" strokeWidth="2.5" style={{ pathLength }} />
      </svg>
      <motion.div style={{ top: headY }}
        className="absolute left-8 z-10 h-3 w-3 -translate-x-[5px] rounded-full bg-[var(--accent)] shadow-[0_0_16px_var(--accent)] md:left-1/2" />
      <div className="relative z-10">{children}</div>   {/* timeline items */}
    </section>
  );
}
