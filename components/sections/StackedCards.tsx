'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const CARDS = [                                           // CUSTOMIZE
  { k: '01', title: 'Strategy', body: 'We start with the business, not the pixels — goals, customers, and what "working" means.', img: '/s1.jpg' },
  { k: '02', title: 'Design', body: 'Custom design built around your content and brand. No templates, ever.', img: '/s2.jpg' },
  { k: '03', title: 'Build', body: 'Hand-coded, fast, accessible. The kind of site Google rewards.', img: '/s3.jpg' },
  { k: '04', title: 'Care', body: 'Updates, monitoring, improvements. We stay after launch.', img: '/s4.jpg' },
];

function Card({ i, total, progress, card }: { i: number; total: number; progress: MotionValue<number>; card: typeof CARDS[0] }) {
  const start = i / total;
  const scale = useTransform(progress, [start, 1], [1, 1 - (total - i) * 0.045]);
  const dim = useTransform(progress, [start, start + 1 / total], [0, 0.35]);
  const rotate = (i % 2 ? 1 : -1) * 0.6;
  return (
    <div className="sticky top-0 flex h-[100svh] items-center justify-center px-4">
      <motion.article style={{ scale, top: `calc(4svh + ${i * 22}px)` }}
        initial={{ rotate: 0 }} whileInView={{ rotate }} viewport={{ margin: '-40%' }}
        className="relative grid h-[74svh] w-full max-w-5xl grid-rows-[auto_1fr] overflow-hidden rounded-3xl bg-[var(--ink)] text-[var(--paper)] md:grid-cols-2 md:grid-rows-1">
        <div className="flex flex-col justify-between p-8 md:p-14">
          <span className="text-sm tracking-widest text-[var(--accent)]">{card.k}</span>
          <div>
            <h3 className="text-4xl md:text-6xl text-[var(--paper)]">{card.title}</h3>
            <p className="mt-4 max-w-sm text-base opacity-75">{card.body}</p>
          </div>
        </div>
        <div className="relative min-h-[30svh]">
          <img src={card.img} alt="" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <motion.div style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-black" />
      </motion.article>
    </div>
  );
}

export default function StackedCards() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  return (
    <div ref={ref} className="bg-[var(--paper)]">
      {CARDS.map((c, i) => <Card key={c.k} i={i} total={CARDS.length} progress={scrollYProgress} card={c} />)}
    </div>
  );
}
