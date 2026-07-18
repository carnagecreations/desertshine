import Link from 'next/link';
import { SITE } from '@/lib/site';

const POPULAR = [
  { label: 'Get an instant estimate', href: '/pricing' },
  { label: 'See our services', href: '/services' },
  { label: 'Book a cleaning', href: '/book' },
  { label: 'Get a free quote', href: '/contact' },
];

export default function NotFound() {
  return (
    <main className="relative grid min-h-[100svh] place-items-center overflow-hidden bg-[var(--paper)] px-6 text-center">
      <span aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[42vw] font-bold leading-none text-[var(--ink)]/[0.04] font-[family-name:var(--font-display)]">
        404
      </span>
      <div className="relative">
        <p className="text-xs tracking-[0.3em] text-[var(--accent)] uppercase">404</p>
        <h1 className="mt-4 text-4xl md:text-6xl">This page got swept away.</h1>
        <p className="mt-4 text-[var(--body)]">The page you&apos;re looking for doesn&apos;t exist — but these do:</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {POPULAR.map((l) => (
            <Link key={l.href} href={l.href}
              className="rounded-full border border-[var(--line)] px-5 py-2.5 text-sm text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">
              {l.label}
            </Link>
          ))}
        </div>
        <Link href="/" className="mt-8 inline-block rounded-full bg-[var(--accent)] px-8 py-4 font-medium text-white">
          Back home
        </Link>
        <p className="mt-6 text-sm text-[var(--body)]">
          Or call/text <a href={SITE.phoneHref} className="font-medium text-[var(--accent)] hover:underline">{SITE.phone}</a>
        </p>
      </div>
    </main>
  );
}
