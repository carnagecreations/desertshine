import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RevealFooter from '@/components/sections/RevealFooter';
import { SITE } from '@/lib/site';
import { PARTNER_CATEGORIES } from '@/lib/partnerProgram';

export const metadata: Metadata = {
  title: 'Partner & Referral Program',
  description: 'Partner with Clean Convictions — property managers, realtors, movers, and vacation rental managers earn free cleanings and credit for every referral.',
  alternates: { canonical: `${SITE.url}/partners` },
};

export default function PartnersHub() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Partners' },
  ];

  return (
    <>
      <main className="relative z-10 bg-[var(--paper)]">
        <Breadcrumbs items={breadcrumbs} />

        <section className="relative overflow-hidden px-6 pb-12 pt-8 md:px-16">
          <div aria-hidden className="pointer-events-none absolute -top-24 left-[10%] h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl" />
          <div className="relative mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--ink)] mb-6">
              Send us your people. <span className="italic text-[var(--accent)]">We&apos;ll take care of them.</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--body)] leading-relaxed max-w-3xl">
              If your business puts you in front of people who need a home cleaned — moving in, moving out, listing a home, or settling into Yuma for the season — we want to partner with you. Your people get a discount, you get real rewards, and it costs you nothing to join.
            </p>
          </div>
        </section>

        {/* How the program works, in general */}
        <section className="px-6 py-16 md:px-16 bg-[var(--paper-light)]">
          <div className="mx-auto max-w-4xl grid gap-8 md:grid-cols-3 text-center">
            <div>
              <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full border-2 border-[var(--accent)] bg-[var(--paper-light)] text-xl font-bold text-[var(--accent)]">1</div>
              <h3 className="font-semibold text-[var(--ink)] mb-2">Get your code</h3>
              <p className="text-sm text-[var(--body)]">We set you up with a personal referral code, booking link, and a printable QR flyer.</p>
            </div>
            <div>
              <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full border-2 border-[var(--accent)] bg-[var(--paper-light)] text-xl font-bold text-[var(--accent)]">2</div>
              <h3 className="font-semibold text-[var(--ink)] mb-2">Share it</h3>
              <p className="text-sm text-[var(--body)]">A flyer, a QR code, a mention when it's relevant — however's easiest for you.</p>
            </div>
            <div>
              <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full border-2 border-[var(--accent)] bg-[var(--paper-light)] text-xl font-bold text-[var(--accent)]">3</div>
              <h3 className="font-semibold text-[var(--ink)] mb-2">Earn rewards</h3>
              <p className="text-sm text-[var(--body)]">Every booking counts toward free cleanings, service credit, and priority scheduling.</p>
            </div>
          </div>
        </section>

        {/* Category cards */}
        <section className="px-6 py-20 md:px-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-10 text-center">Find your program</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {PARTNER_CATEGORIES.map((c) => (
                <Link key={c.slug} href={`/partners/${c.slug}`}
                  className="card-lift group rounded-2xl border border-[var(--line)] bg-white p-8 hover:border-[var(--accent)]">
                  <div className="mb-4 text-3xl">{c.emoji}</div>
                  <h3 className="text-xl font-bold text-[var(--ink)] mb-2 group-hover:text-[var(--accent)]">{c.navLabel}</h3>
                  <p className="text-sm text-[var(--body)] mb-4">{c.tagline}</p>
                  <span className="text-sm font-medium text-[var(--accent)]">See the program →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 md:px-16 bg-[var(--paper-light)]">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-4">Don&apos;t see your business type?</h2>
            <p className="text-lg text-[var(--body)] mb-8">
              If you regularly meet people who need a home cleaned, let&apos;s talk — we&apos;ll build a program that fits.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href={`mailto:${SITE.email}?subject=${encodeURIComponent('Partner Program Inquiry')}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent)] to-orange-600 px-8 py-4 text-lg font-medium text-white transition-all hover:scale-105">
                Email us
              </a>
              <a href={SITE.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--accent)] px-8 py-[14px] text-lg font-medium text-[var(--accent)] transition-all hover:bg-[var(--accent)]/10">
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <RevealFooter />
    </>
  );
}
