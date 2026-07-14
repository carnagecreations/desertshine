'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { EASE_OUT } from '@/lib/motion';
import { SITE } from '@/lib/site';

const LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] bg-[var(--paper)]/85 backdrop-blur-md transition-shadow duration-500 ${
        scrolled ? 'shadow-[0_1px_0_var(--line)]' : ''
      }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-[var(--ink)]">
          Desert<span className="text-[var(--accent)]">Shine</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}
              className="text-sm text-[var(--body)] transition-colors hover:text-[var(--ink)]">
              {l.label}
            </Link>
          ))}
          <a href={SITE.phoneHref} className="text-sm font-medium text-[var(--ink)]">{SITE.phone}</a>
          <Link href="/contact"
            className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition-transform duration-300 hover:scale-105">
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
              <a href={SITE.phoneHref} className="py-3 text-lg font-medium text-[var(--ink)]">
                Call {SITE.phone}
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
