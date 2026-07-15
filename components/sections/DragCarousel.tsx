'use client';
import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { SPRING_SOFT } from '@/lib/motion';

const ITEMS = [                                           // CUSTOMIZE
  { img: '/g1.jpg', label: 'Terrarium builds' }, { img: '/g2.jpg', label: 'Retail space' },
  { img: '/g3.jpg', label: 'Breeding program' }, { img: '/g4.jpg', label: 'Events' },
  { img: '/g5.jpg', label: 'Community' }, { img: '/g6.jpg', label: 'The team' },
];

export default function DragCarousel() {
  const constraint = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const x = useMotionValue(0);
  const progress = useTransform(x, () => {
    const max = (track.current?.scrollWidth ?? 1) - (constraint.current?.offsetWidth ?? 0);
    return max > 0 ? Math.min(1, Math.max(0, -x.get() / max)) : 0;
  });
  const cx = useSpring(useMotionValue(0), SPRING_SOFT);
  const cy = useSpring(useMotionValue(0), SPRING_SOFT);
  return (
    <section ref={constraint} className="relative overflow-hidden py-20"
      onMouseMove={(e) => { cx.set(e.clientX); cy.set(e.clientY); }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <motion.div ref={track} drag="x" dragConstraints={constraint} dragElastic={0.07} style={{ x }}
        className="flex w-max cursor-none gap-6 px-8">
        {ITEMS.map((item) => (
          <figure key={item.label} className="w-[72vw] shrink-0 md:w-[30vw]">
            <div className="h-[46svh] overflow-hidden rounded-xl">
              <img src={item.img} alt="" draggable={false} className="h-full w-full object-cover" />
            </div>
            <figcaption className="mt-3 text-sm text-[var(--body)]">{item.label}</figcaption>
          </figure>
        ))}
      </motion.div>
      <div className="mx-8 mt-8 h-px bg-[var(--line)]">
        <motion.div style={{ scaleX: progress }} className="h-full origin-left bg-[var(--ink)]" />
      </div>
      {hover && (
        <motion.div style={{ x: cx, y: cy, position: 'fixed', top: -28, left: -28 }}
          className="pointer-events-none z-50 grid h-14 w-14 place-items-center rounded-full bg-[var(--ink)] text-[10px] tracking-widest text-[var(--paper)]">
          DRAG
        </motion.div>
      )}
    </section>
  );
}
