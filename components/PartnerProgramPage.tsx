import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RevealFooter from '@/components/sections/RevealFooter';
import PartnerLeadForm from '@/components/PartnerLeadForm';
import { SITE } from '@/lib/site';
import { PartnerCategory } from '@/lib/partnerProgram';

// Shared template for every /partners/<category> page — keeps the layout and
// tone consistent while each category supplies its own copy and numbers.
export default function PartnerProgramPage({ category }: { category: PartnerCategory }) {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Partners', href: '/partners' },
    { name: category.navLabel },
  ];

  return (
    <>
      <main className="relative z-10 bg-[var(--paper)]">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="relative overflow-hidden px-6 pb-12 pt-8 md:px-16">
          <div aria-hidden className="pointer-events-none absolute -top-24 right-[8%] h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl" />
          <div className="relative mx-auto max-w-4xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-3 py-1 text-sm font-medium text-[var(--accent)]">
              {category.emoji} Partner Program
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--ink)] mb-6">{category.title}</h1>
            <p className="text-lg md:text-xl text-[var(--body)] leading-relaxed max-w-3xl mb-4">{category.tagline}</p>
            <p className="text-sm uppercase tracking-widest text-[var(--body)]/70">For {category.audience}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#partner-form"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent)] to-orange-600 px-8 py-4 text-lg font-medium text-white shadow-[0_4px_14px_-4px_rgba(232,93,47,0.5)] transition-all hover:scale-105">
                Become a Partner
              </a>
              <a href={SITE.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--accent)] px-8 py-[14px] text-lg font-medium text-[var(--accent)] transition-all hover:bg-[var(--accent)]/10">
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="px-6 py-12 md:px-16">
          <div className="mx-auto max-w-3xl space-y-5">
            {category.intro.map((p, i) => (
              <p key={i} className="text-lg text-[var(--body)] leading-relaxed">{p}</p>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="px-6 py-16 md:px-16 bg-[var(--paper-light)]">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-10 text-center">How it works</h2>
            <div className="relative space-y-10">
              <span aria-hidden className="absolute left-1/2 top-6 h-[calc(100%-3rem)] w-px -translate-x-1/2 bg-gradient-to-b from-[var(--accent)]/40 via-[var(--line)] to-[var(--accent)]/40" />
              {category.howItWorks.map((step, i) => (
                <div key={i} className="relative text-center">
                  <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full border-2 border-[var(--accent)] bg-[var(--paper-light)] text-xl font-bold text-[var(--accent)]">
                    {i + 1}
                  </div>
                  <p className="mx-auto max-w-xl text-[var(--body)]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reward tiers */}
        <section className="px-6 py-20 md:px-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-3 text-center">What you earn</h2>
            <p className="text-center text-[var(--body)] mb-12 max-w-2xl mx-auto">
              Every booking through your code counts. Rewards stack as referrals add up — no expiration, no catch.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {category.tiers.map((tier, i) => (
                <div key={i} className="card-lift rounded-2xl border border-[var(--line)] bg-white p-6 hover:border-[var(--accent)]">
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-[var(--accent)]/10 text-lg font-bold text-[var(--accent)]">
                    {tier.count}
                  </div>
                  <p className="text-xs tracking-widest uppercase opacity-60 mb-2">
                    {tier.count} referral{tier.count === 1 ? '' : 's'}
                  </p>
                  <p className="text-[var(--ink)] font-medium leading-snug">{tier.reward}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-16 md:px-16 bg-[var(--paper-light)]">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-10 text-center">Questions</h2>
            <div className="space-y-6">
              {category.faq.map((item, i) => (
                <div key={i} className="rounded-2xl border border-[var(--line)] bg-white p-6">
                  <p className="font-semibold text-[var(--ink)] mb-2">{item.q}</p>
                  <p className="text-[var(--body)]">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 md:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-4">Ready to partner up?</h2>
          </div>
          <div className="mx-auto mt-2 max-w-xl">
            <PartnerLeadForm sourceLabel={category.navLabel} ctaNote={category.ctaNote} />
            <p className="mt-6 text-center text-sm text-[var(--body)]">
              Rather talk it through? <a href={SITE.smsHref} className="font-medium text-[var(--accent)] hover:underline">Text us</a> or{' '}
              <a href={SITE.phoneHref} className="font-medium text-[var(--accent)] hover:underline">call {SITE.phone}</a>.
            </p>
            <p className="mt-4 text-center text-sm text-[var(--body)]">
              Not sure this is the right fit?{' '}
              <Link href="/partners" className="font-medium text-[var(--accent)] hover:underline">See all partner programs →</Link>
            </p>
          </div>
        </section>
      </main>
      <RevealFooter />
    </>
  );
}
