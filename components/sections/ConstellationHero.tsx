'use client';
import { useEffect, useRef } from 'react';

export default function ConstellationHero({
  count = 70,
  linkDist = 110,
  children,
}: { count?: number; linkDist?: number; children?: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const dpr = Math.min(devicePixelRatio, 2);
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0,
      running = true;
    const mouse = { x: -9999, y: -9999 };
    const ink = getComputedStyle(document.documentElement).getPropertyValue('--ink').trim() || '#0d3b5c';

    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const W = () => canvas.offsetWidth,
      H = () => canvas.offsetHeight;
    const pts = Array.from({ length: count }, () => ({
      x: Math.random() * W(),
      y: Math.random() * H(),
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }));

    const frame = () => {
      ctx.clearRect(0, 0, W(), H());
      for (const p of pts) {
        const dx = p.x - mouse.x,
          dy = p.y - mouse.y,
          d = Math.hypot(dx, dy) || 1;
        if (d < 130) {
          p.vx += (dx / d) * 0.12;
          p.vy += (dy / d) * 0.12;
        }
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.x = (p.x + p.vx + W()) % W();
        p.y = (p.y + p.vy + H()) % H();
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d < linkDist) {
            ctx.strokeStyle = ink;
            ctx.globalAlpha = (1 - d / linkDist) * 0.18;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 0.55;
      ctx.fillStyle = ink;
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (!reduced && running) raf = requestAnimationFrame(frame);
    };
    frame();

    const io = new IntersectionObserver(([e]) => {
      running = e.isIntersecting;
      if (running && !reduced) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(frame);
      }
    });
    io.observe(canvas);
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
    };
  }, [count, linkDist]);

  return (
    <div className="relative h-[100svh]">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        {children ?? <h1 className="text-5xl md:text-8xl text-[var(--ink)]">Connected by design.</h1>}
      </div>
    </div>
  );
}
