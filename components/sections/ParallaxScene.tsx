'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxScene({
  bg = '/images/hero.webp', fg = '', word = 'CRAFT',    // CUSTOMIZE (fg optional)
}: { bg?: string; fg?: string; word?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  const midY = useTransform(scrollYProgress, [0, 1], ['30%', '-30%']);
  const fgY = useTransform(scrollYProgress, [0, 1], ['25%', '-25%']);
  return (
    <section ref={ref} className="relative h-[110svh] overflow-hidden">
      <motion.img src={bg} alt="" style={{ y: bgY }}
        className="absolute inset-0 h-[125%] w-full object-cover will-change-transform" />
      {/* darken bg so the SPOTLESS wordmark stays legible */}
      <div className="pointer-events-none absolute inset-0 bg-[var(--paper-dark)]/55" />
      <motion.div style={{ y: midY }} className="absolute inset-0 flex items-center justify-center">
        <h2
          className="text-[18vw] leading-none text-transparent select-none font-bold tracking-tighter"
          style={{
            backgroundImage: 'linear-gradient(135deg, #ffd700, #ffed4e, #ffd700)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.6)) drop-shadow(0 0 40px rgba(255, 215, 0, 0.3))',
            textShadow: '0 0 30px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.4)',
            paintOrder: 'stroke fill',
            stroke: 'rgba(255, 215, 0, 0.4)',
            strokeWidth: '0.5px',
          }}
        >
          {word}
        </h2>
      </motion.div>
      {fg && (
        <motion.img src={fg} alt="" style={{ y: fgY }}
          className="absolute bottom-[-10%] left-1/2 w-[55%] -translate-x-1/2 will-change-transform" />
      )}
    </section>
  );
}
