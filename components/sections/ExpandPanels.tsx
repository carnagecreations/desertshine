'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EASE_SNAP } from '@/lib/motion';

const PANELS = [                                          // CUSTOMIZE
  { title: 'Recurring Home Cleaning', body: 'Weekly, bi-weekly, or monthly. Same cleaner every visit, same checklist every time.', img: '/images/service-recurring.webp', href: '/services#recurring' },
  { title: 'Deep Cleaning', body: 'Baseboards, blinds, grout, inside appliances — the reset your house needs once a season.', img: '/images/service-deep.webp', href: '/services#deep' },
  { title: 'Move-In / Move-Out', body: 'Deposit-back cleaning for renters and turn-key handoffs for sellers and landlords.', img: '/images/service-move.webp', href: '/services#move' },
  { title: 'Office & Commercial', body: 'After-hours janitorial for offices, clinics, and storefronts across Yuma.', img: '/images/service-office.webp', href: '/services#office' },
];

export default function ExpandPanels() {
  const [active, setActive] = useState(0);
  return (
    <section className="flex h-auto flex-col gap-2 p-4 md:h-[82svh] md:flex-row md:p-8">
      {PANELS.map((p, i) => {
        const isActive = active === i;
        return (
          <motion.a key={p.title} href={p.href}
            onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}
            animate={{ flex: isActive ? 4 : 1 }}
            transition={{ duration: 0.65, ease: EASE_SNAP }}
            className="group relative min-h-[16svh] cursor-pointer overflow-hidden rounded-xl md:min-h-0">
            <motion.img src={p.img} alt="" animate={{ scale: isActive ? 1 : 1.15 }}
              transition={{ duration: 0.9, ease: EASE_SNAP }}
              className="absolute inset-0 h-full w-full object-cover will-change-transform" />
            <div className={`absolute inset-0 transition-colors duration-500 ${isActive ? 'bg-black/25' : 'bg-black/55'}`} />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="flex items-end justify-between gap-4">
                <h3 className={`text-white transition-all duration-500 ${isActive ? 'text-3xl md:text-4xl' : 'text-lg md:text-xl'}`}>{p.title}</h3>
                <AnimatePresence>
                  {isActive && (
                    <motion.span initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                      className="mb-1 text-2xl text-white">↗</motion.span>
                  )}
                </AnimatePresence>
              </div>
              <AnimatePresence>
                {isActive && (
                  <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="mt-2 max-w-sm text-sm text-white/80">{p.body}</motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.a>
        );
      })}
    </section>
  );
}
