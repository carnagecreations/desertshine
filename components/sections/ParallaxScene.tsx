'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxScene({
  bg = '/bg.jpg', fg = '/fg.png', word = 'CRAFT',        // CUSTOMIZE
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
      <motion.div style={{ y: midY }} className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-[18vw] leading-none text-white mix-blend-difference select-none">{word}</h2>
      </motion.div>
      <motion.img src={fg} alt="" style={{ y: fgY }}
        className="absolute bottom-[-10%] left-1/2 w-[55%] -translate-x-1/2 will-change-transform" />
    </section>
  );
}
