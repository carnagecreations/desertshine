'use client';
import { useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { SPRING_SOFT } from '@/lib/motion';

const PROJECTS = [                                        // CUSTOMIZE
  { name: 'Yuma Reptiles', meta: 'E-commerce · 2025', preview: '/prev1.jpg', href: '/work/yuma-reptiles' },
  { name: 'SanctuaryBase', meta: 'SaaS · 2025', preview: '/prev2.jpg', href: '/work/sanctuarybase' },
  { name: 'Desert Trails Co.', meta: 'Tourism · 2024', preview: '/prev3.jpg', href: '/work/desert-trails' },
  { name: 'Mesa Legal Group', meta: 'Professional · 2024', preview: '/prev4.jpg', href: '/work/mesa-legal' },
];

export default function HoverPreviewList() {
  const [active, setActive] = useState<number | null>(null);
  const x = useSpring(useMotionValue(0), SPRING_SOFT);
  const y = useSpring(useMotionValue(0), SPRING_SOFT);
  return (
    <section className="relative px-6 py-24 md:px-16"
      onMouseMove={(e) => { x.set(e.clientX + 28); y.set(e.clientY - 110); }}
      onMouseLeave={() => setActive(null)}>
      {PROJECTS.map((p, i) => (
        <a key={p.name} href={p.href} onMouseEnter={() => setActive(i)}
          className={`group flex items-baseline justify-between gap-6 border-t border-[var(--line)] py-7 transition-opacity duration-300 last:border-b md:py-9 ${active !== null && active !== i ? 'opacity-30' : ''}`}>
          <div className="flex items-baseline gap-5">
            <span className="text-xs text-[var(--body)]">0{i + 1}</span>
            <h3 className="text-3xl text-[var(--ink)] transition-transform duration-500 ease-out group-hover:translate-x-3 md:text-6xl">{p.name}</h3>
          </div>
          <div className="flex shrink-0 items-baseline gap-4">
            <span className="hidden text-sm text-[var(--body)] md:inline">{p.meta}</span>
            <span className="translate-x-2 text-xl text-[var(--accent)] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">↗</span>
          </div>
        </a>
      ))}
      <motion.div style={{ x, y, position: 'fixed', top: 0, left: 0 }}
        className="pointer-events-none z-50 hidden md:block">
        <AnimatePresence>
          {active !== null && (
            <motion.div key="frame" initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }} exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }} className="relative h-48 w-72 overflow-hidden rounded-lg shadow-2xl">
              {PROJECTS.map((p, i) => (
                <img key={p.name} src={p.preview} alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
                  style={{ opacity: active === i ? 1 : 0 }} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
