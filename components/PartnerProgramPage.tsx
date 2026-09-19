import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RevealFooter from '@/components/sections/RevealFooter';
import PartnerLeadForm from '@/components/PartnerLeadForm';
import PartnerStickyCta from '@/components/partners/PartnerStickyCta';
import {
  PartnerTrustChips,
  PartnerProblem,
  PartnerValueSplit,
  PartnerToolkit,
  PartnerTierLadder,
  PartnerComparison,
  PartnerWhyUs,
  PartnerGuarantees,
  PartnerFaq,
} from '@/components/partners/PartnerSections';
import { SITE } from '@/lib/site';
import { PartnerCategory } from '@/lib/partnerProgram';
import { faqSchemaFrom, breadcrumbSchema } from '@/lib/schema';

// Shared template for every /partners/<category> page — keeps the layout and
// tone consistent while each category supplies its own copy and numbers.
//
// The page is ordered as an argument, not a brochure: name the problem, show
// both sides of the payoff, make the kit concrete, show the ladder, answer
// "why you" and "what's the catch", then ask. Everything above the form
// exists to remove one specific reason to close the tab.
export default function PartnerProgramPage({ category }: { category: PartnerCategory }) {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Partners', href: '/partners' },
    { name: category.navLabel },
  ];

  // "residents" / "clients" — whose discount it is, in the partner's language.
  const audienceNoun = category.slug === 'property-managers' ? 'residents' : 'clients';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaFrom(category.faq)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE.url },
              { name: 'Partners', url: `${SITE.url}/partners` },
              { name: category.navLabel, url: `${SITE.url}/partners/${category.slug}` },
            ])
          ),
        }}
      />

      <main className="relative z-10 bg-[var(--paper)]">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="relative overflow-hidden px-6 pb-14 pt-8 md:px-16">
          <div aria-hidden className="pointer-events-none absolute -top-24 right-[8%] h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl" />
          <div className="relative mx-auto max-w-4xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-3 py-1 text-sm font-medium text-[var(--accent)]">
              {category.emoji} Partner Program
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--ink)] mb-6">{category.title}</h1>
            <p className="text-lg md:text-xl text-[var(--body)] leading-relaxed max-w-3xl mb-5">{category.tagline}</p>
            <p className="text-sm uppercase tracking-widest text-[var(--body)]/70">For {category.audience}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#partner-form"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent)] to-[#812b0e] px-8 py-4 text-lg font-medium text-white shadow-[0_4px_14px_-4px_rgba(232,93,47,0.5)] transition-all hover:scale-105">
                Become a Partner
              </a>
              <a href={SITE.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--accent)] px-8 py-[14px] text-lg font-medium text-[var(--accent)] transition-all hover:bg-[var(--accent)]/10">
                Call {SITE.phone}
              </a>
            </div>

            <PartnerTrustChips
              items={[
                'Free to join',
                'About 2 minutes to sign up',
                'No exclusivity, nothing to sign',
                'Your code is live in one business day',
              ]}
            />
          </div>
        </section>

        {/* The problem this actually solves */}
        <PartnerProblem heading={category.problem.heading} body={category.problem.body} />

        {/* Framing paragraphs */}
        <section className="px-6 pb-4 md:px-16">
          <div className="mx-auto max-w-3xl space-y-5">
            {category.intro.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-[var(--body)]">{p}</p>
            ))}
          </div>
        </section>

        {/* Two-sided payoff */}
        <PartnerValueSplit
          clientWins={category.clientWins}
          partnerWins={category.partnerWins}
          audienceNoun={audienceNoun}
        />

        {/* How it works */}
        <section className="px-6 py-16 md:px-16 md:py-20 bg-[var(--paper-light)]">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-3 text-center">How it works</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--body)]">
              Three steps, and only one of them is yours.
            </p>
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

        {/* Day-one kit */}
        <PartnerToolkit />

        {/* Reward ladder */}
        <PartnerTierLadder tiers={category.tiers} />

        {/* Why us, specifically */}
        <PartnerWhyUs />

        {/* Versus the usual arrangement */}
        <PartnerComparison />

        {/* Risk reversal */}
        <PartnerGuarantees />

        {/* FAQ */}
        <PartnerFaq items={category.faq} />

        {/* CTA */}
        <section className="px-6 pb-24 pt-8 md:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-4">{category.ctaHeadline}</h2>
            <p className="mb-10 text-lg text-[var(--body)]">
              Two minutes now, and your code and link are working by tomorrow. Nothing to sign, and
              you can stop any time.
            </p>
          </div>
          <div className="mx-auto max-w-xl">
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

      <PartnerStickyCta label={category.navLabel} />
      <RevealFooter />
    </>
  );
}
