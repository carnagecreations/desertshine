'use client';
import { motion } from 'framer-motion';
import { EASE_INOUT, EASE_OUT } from '@/lib/motion';

const CLIPS = {
  up: 'inset(100% 0% 0% 0%)', down: 'inset(0% 0% 100% 0%)',
  left: 'inset(0% 100% 0% 0%)', center: 'inset(46% 46% 46% 46%)',
};

export default function ClipReveal({
  src = '/reveal.jpg', caption = 'The new tasting room — opened spring 2026',  // CUSTOMIZE
  direction = 'up' as keyof typeof CLIPS,
}: { src?: string; caption?: string; direction?: keyof typeof CLIPS }) {
  return (
    <figure className="mx-auto max-w-5xl px-6 py-20">
      <motion.div
        initial={{ clipPath: CLIPS[direction] }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        viewport={{ once: true, margin: '-15%' }}
        transition={{ duration: 1.2, ease: EASE_INOUT }}
        className="overflow-hidden rounded-xl">
        <motion.img src={src} alt="" className="w-full will-change-transform"
          initial={{ scale: 1.35 }} whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 1.4, ease: EASE_INOUT }} />
      </motion.div>
      <motion.figcaption
        initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ delay: 0.7, duration: 0.6, ease: EASE_OUT }}
        className="mt-4 text-sm text-[var(--body)]">{caption}</motion.figcaption>
    </figure>
  );
}
