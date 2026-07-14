'use client';
import { useEffect, useRef } from 'react';

export default function DarkInterlude({
  line = 'Life is too short to spend Saturdays scrubbing.',
  sub = 'Get your weekends back — from $129 per visit.',
}: { line?: string; sub?: string }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const target = { x: 0.5, y: 0.5 }, cur = { x: 0.5, y: 0.5 };
    let raf = 0;
    const tick = () => {
      cur.x += (target.x - cur.x) * 0.07; cur.y += (target.y - cur.y) * 0.07;
      el.style.setProperty('--tx', `${cur.x * 100}%`);
      el.style.setProperty('--ty', `${cur.y * 100}%`);
      raf = requestAnimationFrame(tick);
    };
    tick();
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      target.x = (e.clientX - r.left) / r.width; target.y = (e.clientY - r.top) / r.height;
    };
    el.addEventListener('mousemove', onMove);
    return () => { cancelAnimationFrame(raf); el.removeEventListener('mousemove', onMove); };
  }, []);
  return (
    <section ref={ref}
      className="relative flex min-h-[85svh] flex-col items-center justify-center gap-4 overflow-hidden bg-[var(--paper-dark)] px-6 text-center">
      <div className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(560px circle at var(--tx, 50%) var(--ty, 50%), rgba(246,251,250,0.08), transparent 70%)' }} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
      <h2 className="relative z-10 max-w-3xl text-3xl leading-tight text-[var(--paper)] md:text-6xl">{line}</h2>
      <p className="relative z-10 text-[var(--paper)]/50 md:text-lg">{sub}</p>
    </section>
  );
}
