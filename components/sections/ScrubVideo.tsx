'use client';
import { useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';

export default function ScrubVideo({
  src = '/scrub.mp4', lengthSvh = 300,                   // CUSTOMIZE: video + scrub distance
}: { src?: string; lengthSvh?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  useEffect(() => {
    const vid = videoRef.current!;
    vid.pause();
    let raf = 0, current = 0;
    const tick = () => {
      const target = scrollYProgress.get() * (vid.duration || 0);
      current += (target - current) * 0.12;              // CUSTOMIZE: 0.08 = floatier, 0.2 = tighter
      if (vid.duration && Math.abs(vid.currentTime - current) > 0.01) vid.currentTime = current;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [scrollYProgress]);

  return (
    <div ref={ref} style={{ height: `${lengthSvh}svh` }}>
      <div className="sticky top-0 h-[100svh] bg-[var(--paper-dark)]">
        <video ref={videoRef} src={src} muted playsInline preload="auto"
          className="h-full w-full object-cover" />
      </div>
    </div>
  );
}
