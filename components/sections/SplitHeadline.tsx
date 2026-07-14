'use client';
import { motion } from 'framer-motion';
import { EASE_OUT } from '@/lib/motion';

export default function SplitHeadline({
  text = 'Cleaning that *earns* its keep.',   // *word* = accent italic
  as: Tag = 'h1',
  className = 'text-5xl md:text-8xl leading-[1.05]',
  delay = 0.2,
}: { text?: string; as?: 'h1' | 'h2'; className?: string; delay?: number }) {
  const words = text.split(' ');
  return (
    <Tag className={`flex flex-wrap gap-x-[0.28em] text-[var(--ink)] ${className}`}>
      {words.map((raw, i) => {
        const accent = raw.startsWith('*') && raw.endsWith('*');
        const word = accent ? raw.slice(1, -1) : raw;
        return (
          <span key={i} className="overflow-hidden pb-[0.08em] -mb-[0.08em]">
            <motion.span
              className={`inline-block will-change-transform ${accent ? 'italic text-[var(--accent)]' : ''}`}
              initial={{ y: '115%', filter: 'blur(6px)' }}
              whileInView={{ y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.9, delay: delay + i * 0.055, ease: EASE_OUT }}>
              {word}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
