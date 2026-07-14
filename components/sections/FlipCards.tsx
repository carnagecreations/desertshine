'use client';
import { motion } from 'framer-motion';

const CARDS = [                                           // CUSTOMIZE: real pricing
  { front: 'Standard', price: 'from $129', back: 'Kitchens, baths, floors, dusting, and tidying — every visit, every room on the checklist.', href: '/pricing' },
  { front: 'Deep Clean', price: 'from $249', back: 'Everything in Standard plus baseboards, blinds, grout, inside oven and fridge, and door frames.', href: '/pricing' },
  { front: 'Move-Out', price: 'from $299', back: 'Landlord-checklist clean for empty homes. Inside every cabinet, appliance, and closet. Deposit-back focused.', href: '/pricing' },
];

export default function FlipCards() {
  return (
    <section className="grid gap-6 px-6 py-24 md:grid-cols-3 md:px-16">
      {CARDS.map((c) => (
        <div key={c.front} className="group h-80 [perspective:1400px]">
          <motion.div
            whileHover={{ rotateY: 180, scale: [1, 1.04, 1] }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="relative h-full w-full [transform-style:preserve-3d]">
            <div className="absolute inset-0 flex flex-col justify-between rounded-2xl bg-[var(--ink)] p-8 [backface-visibility:hidden]">
              <span className="text-xs tracking-widest text-[var(--accent)] uppercase">{c.price}</span>
              <h3 className="text-4xl text-[var(--paper)]">{c.front}</h3>
              <span className="text-sm text-[var(--paper)]/50">Hover to flip →</span>
            </div>
            <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-8 [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <p className="text-[var(--body)] leading-relaxed">{c.back}</p>
              <a href={c.href} className="text-sm text-[var(--accent)] underline underline-offset-4">See full pricing ↗</a>
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
