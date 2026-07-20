'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { EASE_OUT } from '@/lib/motion';
import { SITE } from '@/lib/site';
import { track } from '@/lib/track';

const LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Neighborhoods', href: '/neighborhoods' },
  { label: 'Book', href: '/book' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on Escape — keyboard users shouldn't get trapped.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] bg-[var(--paper)]/85 backdrop-blur-md transition-shadow duration-500 ${
        scrolled ? 'shadow-[0_1px_0_var(--line)]' : ''
      }`}>
      <nav className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-[padding] duration-500 md:px-10 ${scrolled ? 'py-2.5' : 'py-4'}`}>
        <Link href="/" aria-label="Clean Convictions — home" className="flex items-center hover:opacity-75 transition-opacity">
          <Image src="/clean-conviction-logo.webp" alt="Clean Convictions" width={695} height={480} priority className="h-10 w-auto md:h-12" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => {
            const active = pathname === l.href || pathname.startsWith(`${l.href}/`);
            return (
              <Link key={l.href} href={l.href} aria-current={active ? 'page' : undefined}
                className={`relative text-sm transition-colors hover:text-[var(--ink)] ${active ? 'font-medium text-[var(--ink)]' : 'text-[var(--body)]'}`}>
                {l.label}
                {active && <span aria-hidden className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--accent)]" />}
              </Link>
            );
          })}
          <a href={SITE.phoneHref} onClick={() => track('phone_click', { location: 'nav' })}
            className="text-sm font-medium text-[var(--ink)]">{SITE.phone}</a>
          <Link href="/contact"
            className="rounded-full bg-gradient-to-r from-[var(--accent)] to-orange-600 px-5 py-2.5 text-sm font-medium text-white shadow-[0_4px_14px_-4px_rgba(232,93,47,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_20px_-4px_rgba(232,93,47,0.65)]">
            Get a free quote
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden">
          <span className={`h-0.5 w-6 bg-[var(--ink)] transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-[var(--ink)] transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-[var(--ink)] transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.35, ease: EASE_OUT }}
            className="overflow-hidden border-t border-[var(--line)] bg-[var(--paper)] md:hidden">
            <div className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="py-3 text-lg text-[var(--ink)]">
                  {l.label}
                </Link>
              ))}
              <a href={SITE.phoneHref} onClick={() => track('phone_click', { location: 'mobile_menu' })}
                className="py-3 text-lg font-medium text-[var(--ink)]">
                Call {SITE.phone}
              </a>
              <a href={SITE.smsHref} onClick={() => track('sms_click', { location: 'mobile_menu' })}
                className="py-3 text-lg font-medium text-[var(--ink)]">
                Text us
              </a>
              <Link href="/contact" onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-[var(--accent)] px-5 py-3.5 text-center font-medium text-white">
                Get a free quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
