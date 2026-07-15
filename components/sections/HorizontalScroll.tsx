'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PANELS = [                                          // CUSTOMIZE
  { title: 'Yuma Reptiles', tag: 'E-commerce', img: '/p1.jpg' },
  { title: 'SanctuaryBase', tag: 'SaaS', img: '/p2.jpg' },
  { title: 'Desert Trails', tag: 'Tourism', img: '/p3.jpg' },
  { title: 'Mesa Legal', tag: 'Professional', img: '/p4.jpg' },
];

export default function HorizontalScroll() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const total = () => track.current!.scrollWidth - window.innerWidth;
      const tween = gsap.to(track.current, {
        x: () => -total(), ease: 'none',
        scrollTrigger: {
          trigger: wrap.current, start: 'top top', end: () => `+=${total()}`,
          scrub: 1, pin: true, invalidateOnRefresh: true,
          onUpdate: (self) => gsap.set(bar.current, { scaleX: self.progress }),
        },
      });
      // inner parallax: each image drifts opposite the track
      gsap.utils.toArray<HTMLElement>('[data-hpx]').forEach((img) => {
        gsap.fromTo(img, { xPercent: -8 }, { xPercent: 8, ease: 'none',
          scrollTrigger: { containerAnimation: tween, trigger: img, start: 'left right', end: 'right left', scrub: true } });
      });
    }, wrap);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={wrap} className="relative overflow-hidden bg-[var(--paper)]">
      <div className="absolute left-8 right-8 top-8 z-10 h-px bg-[var(--line)]">
        <div ref={bar} className="h-full w-full origin-left scale-x-0 bg-[var(--ink)]" />
      </div>
      <div ref={track} className="flex h-[100svh] w-max items-center gap-6 px-8 md:gap-10">
        {PANELS.map((p, i) => (
          <article key={p.title} className="group relative h-[68svh] w-[84vw] shrink-0 overflow-hidden rounded-xl md:w-[46vw]">
            <img data-hpx src={p.img} alt="" className="absolute inset-0 h-full w-[120%] max-w-none object-cover will-change-transform" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
              <div>
                <p className="text-xs tracking-widest uppercase opacity-70">{p.tag}</p>
                <h3 className="mt-1 text-3xl md:text-4xl">{p.title}</h3>
              </div>
              <span className="text-sm opacity-60">0{i + 1} — 0{PANELS.length}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
