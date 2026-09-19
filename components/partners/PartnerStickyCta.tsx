'use client';
import { useEffect, useState } from 'react';
import { SITE } from '@/lib/site';
import { track } from '@/lib/track';

// Desktop-only sticky bar. Appears once the visitor is past the hero and
// hides again near the footer form, so it never competes with the real CTA.
// Mobile is deliberately excluded — the global sticky call/text/quote bubbles
// already own that corner of the screen.
export default function PartnerStickyCta({
  label,
  note = 'free to join, no exclusivity, live within one business day.',
  ctaLabel = 'Become a partner',
  href = '#partner-form',
  hideNearId = 'partner-form',
}: {
  label: string;
  note?: string;
  ctaLabel?: string;
  href?: string;
  hideNearId?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const target = document.getElementById(hideNearId);
      const pastHero = window.scrollY > 700;
      const atTarget = target ? target.getBoundingClientRect().top < window.innerHeight : false;
      setVisible(pastHero && !atTarget);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [hideNearId]);

  return (
    <div
      aria-hidden={!visible}
      className={
        'fixed inset-x-0 bottom-0 z-40 hidden border-t border-[var(--line)] bg-white/95 backdrop-blur-md transition-transform duration-300 md:block ' +
        (visible ? 'translate-y-0' : 'translate-y-full')
      }>
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-3.5">
        <p className="text-sm text-[var(--body)]">
          <span className="font-semibold text-[var(--ink)]">{label}</span> — {note}
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={SITE.phoneHref}
            onClick={() => track('phone_click', { location: 'partner_sticky' })}
            className="text-sm font-medium text-[var(--accent)] hover:underline">
            {SITE.phone}
          </a>
          <a
            href={href}
            onClick={() => track('partner_sticky_cta', { category: label })}
            tabIndex={visible ? 0 : -1}
            className="rounded-full bg-gradient-to-r from-[var(--accent)] to-[#812b0e] px-6 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105">
            {ctaLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
