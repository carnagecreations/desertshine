'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

function Word({ children, progress, range, accent }: {
  children: string; progress: MotionValue<number>; range: [number, number]; accent: boolean;
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const blur = useTransform(progress, range, [3, 0]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);
  return (
    <motion.span style={{ opacity, filter }}
      className={`mr-[0.3em] inline-block will-change-[opacity,filter] ${accent ? 'text-[var(--accent)] italic font-serif' : ''}`}>
      {children}
    </motion.span>
  );
}

export default function ManifestoFill({
  text = 'A clean house isn’t a luxury. It’s *two* hours of your weekend, every week, handed *back* to you.',
}: { text?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] });
  const words = text.split(' ');
  return (
    <section ref={ref} className="mx-auto max-w-4xl px-6 py-40">
      <p className="flex flex-wrap text-3xl leading-[1.4] font-medium text-[var(--ink)] md:text-5xl">
        {words.map((raw, i) => {
          const accent = raw.startsWith('*');
          return (
            <Word key={i} progress={scrollYProgress} accent={accent}
              range={[i / words.length, (i + 1.5) / words.length]}>
              {raw.replaceAll('*', '')}
            </Word>
          );
        })}
      </p>
    </section>
  );
}
