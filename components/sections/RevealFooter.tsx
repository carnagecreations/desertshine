'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { AREAS } from '@/lib/areas';

const LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Service areas', href: '/areas' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
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
    <footer className="sticky bottom-0 -z-10 flex min-h-[85svh] flex-col justify-between bg-[var(--paper-dark)] p-8 text-[var(--paper)] md:p-16">
      <div className="flex items-start justify-between gap-8">
        <nav className="flex flex-col gap-3 text-2xl md:text-3xl">
          {LINKS.map((l) => (
            <Link key={l.label} href={l.href} className="w-fit opacity-70 transition-all duration-300 hover:translate-x-2 hover:opacity-100">{l.label}</Link>
          ))}
        </nav>
        <div className="text-right text-sm opacity-60">
          <p>{SITE.address}</p>
          <p suppressHydrationWarning>{time}</p>
          <p className="mt-4"><a href={SITE.phoneHref} className="hover:opacity-100">{SITE.phone}</a></p>
          <p><a href={`mailto:${SITE.email}`} className="hover:opacity-100">{SITE.email}</a></p>
          <p className="mt-4">{SITE.hours}</p>
        </div>
      </div>
      <div>
        <p className="mb-4 text-sm opacity-40">
          Serving{' '}
          {AREAS.map((a, i) => (
            <span key={a.slug}>
              <Link href={`/areas/${a.slug}`} className="underline-offset-4 hover:underline hover:opacity-100">{a.name}</Link>
              {i < AREAS.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </p>
        <h2 className="text-[13vw] leading-[0.85] tracking-tight text-[var(--paper)] select-none font-[family-name:var(--font-display)]">Clean Conviction</h2>
        <div className="mt-6 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-xs opacity-40">
          <p>© {new Date().getFullYear()} {SITE.name} All rights reserved. Locally owned · Yuma, AZ.</p>
          <p><Link href="/privacy" className="hover:opacity-100">Privacy</Link> · <Link href="/terms" className="hover:opacity-100">Terms</Link></p>
        </div>
      </div>
    </footer>
  );
}
