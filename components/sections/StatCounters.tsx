'use client';
import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

const STATS = [                                           // CUSTOMIZE: real numbers
  { value: 1400, suffix: '+', label: 'Cleans completed across Yuma County' },
  { value: 4.9, decimals: 1, suffix: '★', label: 'Average rating from local clients' },
  { value: 100, suffix: '%', label: 'Re-clean guarantee — not happy, we return free' },
];

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
    <section className="grid divide-y divide-[var(--line)] px-6 py-24 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-16">
      {STATS.map((s) => (
        <div key={s.label} className="py-10 text-center md:py-4">
          <p className="text-6xl font-medium text-[var(--ink)] md:text-7xl lg:text-8xl">
            <Counter {...s} />
          </p>
          <p className="mx-auto mt-3 max-w-[22ch] text-sm tracking-wide text-[var(--body)]">{s.label}</p>
        </div>
      ))}
    </section>
  );
}
