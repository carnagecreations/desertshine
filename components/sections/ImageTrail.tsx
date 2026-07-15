'use client';
import { useRef } from 'react';

const IMAGES = ['/t1.jpg', '/t2.jpg', '/t3.jpg', '/t4.jpg', '/t5.jpg', '/t6.jpg'];  // CUSTOMIZE
const SPACING = 85, LIFETIME = 800, MAX = 12;             // CUSTOMIZE: feel

export default function ImageTrail({ children }: { children?: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const state = useRef({ x: 0, y: 0, i: 0, z: 1 });
  const onMove = (e: React.MouseEvent) => {
    const s = state.current, rect = ref.current!.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    if (Math.hypot(x - s.x, y - s.y) < SPACING) return;
    s.x = x; s.y = y;
    if (ref.current!.querySelectorAll('img[data-trail]').length >= MAX)
      ref.current!.querySelector('img[data-trail]')?.remove();
    const img = document.createElement('img');
    img.dataset.trail = '';
    img.src = IMAGES[s.i++ % IMAGES.length];
    img.className = 'pointer-events-none absolute w-44 rounded-lg shadow-2xl will-change-transform';
    img.style.cssText += `left:${x}px;top:${y}px;z-index:${s.z++};opacity:0;
      transform:translate(-50%,-50%) scale(0.5) rotate(${(Math.random() - 0.5) * 24}deg);
      transition:transform .45s cubic-bezier(.22,1,.36,1),opacity .3s`;
    ref.current!.appendChild(img);
    requestAnimationFrame(() => {
      img.style.opacity = '1';
      img.style.transform = img.style.transform.replace('scale(0.5)', 'scale(1)');
    });
    setTimeout(() => {
      img.style.opacity = '0';
      img.style.transform += ' scale(0.7)';
      setTimeout(() => img.remove(), 350);
    }, LIFETIME);
  };
  return (
    <section ref={ref} onMouseMove={onMove}
      className="relative flex h-[85svh] items-center justify-center overflow-hidden bg-[var(--paper)]">
      <div className="pointer-events-none relative z-[999] text-center px-6">
        {children ?? <h2 className="text-5xl md:text-8xl text-[var(--ink)] mix-blend-difference">Ten years of work.<br />Move around.</h2>}  {/* CUSTOMIZE */}
      </div>
    </section>
  );
}
