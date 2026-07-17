'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { SITE } from '@/lib/site';

const LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Pet-Safe Cleaning', href: '/pet-safe-cleaning' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Neighborhoods', href: '/neighborhoods' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Community Care', href: '/community-care' },
  { label: 'Get a quote', href: '/contact' },
];

export default function RevealFooter() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'America/Phoenix', hour: '2-digit', minute: '2-digit' }));
    tick();
    const t = setInterval(tick, 30_000);
    return () => clearInterval(t);
  }, []);
  return (
    <footer className="sticky bottom-0 z-0 flex min-h-screen flex-col justify-between bg-[var(--paper-dark)] px-6 pb-6 pt-24 text-[var(--paper)] md:px-16 md:pb-10 md:pt-28">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <nav className="flex flex-col gap-1.5 text-lg md:gap-2 md:text-2xl order-2 md:order-1">
          {LINKS.map((l) => (
            <Link key={l.label} href={l.href} className="w-fit opacity-70 transition-all duration-300 hover:translate-x-2 hover:opacity-100">{l.label}</Link>
          ))}
        </nav>
        <div className="text-left text-xs md:text-right md:text-sm opacity-60 order-1 md:order-2">
          <p>{SITE.address}</p>
          <p suppressHydrationWarning>{time}</p>
          <p className="mt-3 md:mt-4"><a href={SITE.phoneHref} className="hover:opacity-100">{SITE.phone}</a></p>
          <p><a href={`mailto:${SITE.email}`} className="hover:opacity-100">{SITE.email}</a></p>
          <p className="mt-3 md:mt-4 text-xs">{SITE.hours}</p>
        </div>
      </div>
      <div className="relative z-10">
        <p className="mb-4 text-sm opacity-40">
          Serving {SITE.serviceAreas.join(' · ')} and surrounding communities
        </p>
        <h2 className="text-[9.5vw] leading-[0.85] tracking-tight text-[var(--paper)] select-none font-[family-name:var(--font-display)]">Clean Conviction</h2>
        <div className="mt-6 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-xs opacity-40">
          <p>© {new Date().getFullYear()} {SITE.name} All rights reserved. Locally owned · Yuma, AZ.</p>
          <p><Link href="/privacy" className="hover:opacity-100">Privacy</Link> · <Link href="/terms" className="hover:opacity-100">Terms</Link></p>
        </div>
      </div>
    </footer>
  );
}
