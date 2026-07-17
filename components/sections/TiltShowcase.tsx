'use client';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

export default function TiltShowcase({
  src = '/showcase.png',                                 // CUSTOMIZE
  badge = 'Featured work',                               // CUSTOMIZE
  caption = 'Clean Convictions — bookings up 240%',     // CUSTOMIZE
}: { src?: string; badge?: string; caption?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current!;
    VanillaTilt.init(el, { max: 9, speed: 700, glare: true, 'max-glare': 0.2, scale: 1.015, gyroscope: true });
    return () => (el as HTMLDivElement & { vanillaTilt?: { destroy(): void } }).vanillaTilt?.destroy();
  }, []);
  return (
    <section className="flex justify-center px-6 py-28 md:py-40 [perspective:1200px]">
      <div ref={ref} className="relative w-full max-w-3xl rounded-2xl bg-[var(--ink)] p-2 shadow-2xl [transform-style:preserve-3d]">
        <img src={src} alt="" className="w-full rounded-xl" />
        <span className="absolute -top-4 left-8 rounded-full bg-[var(--accent)] px-4 py-1.5 text-xs tracking-widest text-white uppercase"
          style={{ transform: 'translateZ(60px)' }}>{badge}</span>
        <p className="absolute -bottom-5 right-8 rounded-lg bg-[var(--paper)] px-4 py-2 text-sm text-[var(--ink)] shadow-lg"
          style={{ transform: 'translateZ(80px)' }}>{caption}</p>
      </div>
    </section>
  );
}
