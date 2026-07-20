'use client';
import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

function Counter({ value, decimals = 0, prefix = '', suffix = '' }: {
  value: number; decimals?: number; prefix?: string; suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 2, bounce: 0 });
  useEffect(() => { if (inView) mv.set(value); }, [inView, mv, value]);
  useEffect(() => spring.on('change', (v) => {
    if (ref.current)
      ref.current.textContent = prefix + v.toLocaleString('en-US', {
        minimumFractionDigits: decimals, maximumFractionDigits: decimals,
      }) + suffix;
  }), [spring, prefix, suffix, decimals]);
  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export default function StatCounters() {
  return (
    <section className="flex items-center justify-center px-6 py-16 md:py-24 md:px-16 bg-gradient-to-b from-transparent via-[var(--accent)]/5 to-transparent">
      <div className="relative text-center">
        <span aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/10 blur-3xl" />
        <span aria-hidden className="pointer-events-none absolute left-1/2 top-8 h-40 w-40 -translate-x-1/2 rounded-full border border-[var(--accent)]/20" />
        <p className="relative text-7xl md:text-8xl lg:text-9xl font-medium text-[var(--accent)]">
          <Counter value={100} suffix="%" />
        </p>
        <p className="mx-auto mt-4 max-w-sm text-base md:text-lg text-[var(--body)]">
          Re-clean guarantee — tell us within 24 hours and we come back free
        </p>
      </div>
    </section>
  );
}
