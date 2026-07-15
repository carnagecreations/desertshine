'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ZoomPortal({
  src = '/portal.jpg', headline = 'Step inside the work.',   // CUSTOMIZE
}: { src?: string; headline?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const scale = useTransform(scrollYProgress, [0, 0.65], [0.22, 1]);
  const radius = useTransform(scrollYProgress, [0, 0.65], ['28px', '0px']);
  const imgScale = useTransform(scrollYProgress, [0, 0.65], [1.6, 1]);   // counter-zoom
  const textOpacity = useTransform(scrollYProgress, [0.68, 0.88], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.68, 0.88], [40, 0]);
  return (
    <div ref={ref} className="h-[260svh] bg-[var(--paper)]">
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden">
        <motion.div style={{ scale, borderRadius: radius }} className="relative h-full w-full overflow-hidden will-change-transform">
          <motion.img src={src} alt="" style={{ scale: imgScale }}
            className="h-full w-full object-cover will-change-transform" />
          <motion.div style={{ opacity: textOpacity }} className="absolute inset-0 bg-black/45" />
          <motion.h2 style={{ opacity: textOpacity, y: textY }}
            className="absolute inset-0 flex items-center justify-center px-6 text-center text-4xl text-white md:text-7xl">
            {headline}
          </motion.h2>
        </motion.div>
      </div>
    </div>
  );
}
