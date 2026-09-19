import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RevealFooter from '@/components/sections/RevealFooter';
import PartnerLeadForm from '@/components/PartnerLeadForm';
import PartnerStickyCta from '@/components/partners/PartnerStickyCta';
import {
  PartnerTrustChips,
  PartnerToolkit,
  PartnerComparison,
  PartnerWhyUs,
  PartnerGuarantees,
  PartnerFaq,
} from '@/components/partners/PartnerSections';
import { SITE } from '@/lib/site';
import { PARTNER_CATEGORIES } from '@/lib/partnerProgram';
import { faqSchemaFrom, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Partner & Referral Program',
  description:
    'Partner with Clean Convictions — property managers, realtors, movers, and vacation rental managers earn free cleanings and credit for every referral. Free to join, no exclusivity, no contract.',
  alternates: { canonical: `${SITE.url}/partners` },
};

// Cross-category questions. The audience pages answer their own specifics;
// these are the ones everybody asks before they'll pick a program at all.
const HUB_FAQS = [
  {
    q: 'What does it cost to join?',
    a: "Nothing. There's no fee, no buy-in, and no minimum number of referrals to stay in the program. The $25 your people save comes out of our margin, not yours.",
  },
  {
    q: 'Do I have to stop using my current cleaner?',
    a: "No. We don't ask for exclusivity and we never will. Most partners keep whoever they already use and hand out our code as a second option — especially for the jobs their usual cleaner can't fit in.",
  },
  {
    q: 'Is there a contract?',
    a: "No. Nothing to sign, nothing to cancel. If you stop sending people, the program just goes quiet — no call, no penalty, and your earned rewards stay earned.",
  },
  {
    q: 'How long does setup take?',
    a: 'About two minutes on your end. Tell us your business name and how to reach you, and your code, booking link, and printable QR flyer are ready within one business day.',
  },
  {
    q: 'How do I know how many referrals I have?',
    a: `Text ${SITE.phone} and a person tells you your count and what tier you're closest to. There's no dashboard to log into and no points system to decode.`,
  },
  {
    q: 'What if someone I refer has a bad experience?',
    a: "They tell us within 24 hours and we go back and re-clean it free — and you hear about it from us rather than from them. The whole point of the guarantee is that recommending us can't cost you your credibility.",
  },
  {
    q: "My business isn't one of the four listed. Can I still partner?",
    a: "Yes. If your work regularly puts you in front of people who need a home cleaned — insurance adjusters, home inspectors, contractors, senior care, storage facilities — send us a note and we'll build the tiers around what's actually useful to you.",
  },
];

export default function PartnersHub() {
  const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Partners' }];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaFrom(HUB_FAQS)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE.url },
              { name: 'Partners', url: `${SITE.url}/partners` },
            ])
          ),
        }}
      />

      <main className="relative z-10 bg-[var(--paper)]">
        <Breadcrumbs items={breadcrumbs} />

        <section className="relative overflow-hidden px-6 pb-14 pt-8 md:px-16">
          <div aria-hidden className="pointer-events-none absolute -top-24 left-[10%] h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl" />
          <div className="relative mx-auto max-w-4xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-3 py-1 text-sm font-medium text-[var(--accent)]">
              🤝 Partner Program
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--ink)] mb-6">
              Send us your people. <span className="italic text-[var(--accent)]">We&apos;ll take care of them.</span>
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-[var(--body)] md:text-xl">
              If your business puts you in front of people who need a home cleaned — moving in, moving
              out, listing a home, or settling into Yuma for the season — we want to partner with you.
              Your people get $25 off, you earn free cleanings and credit, and it costs you nothing to
              join.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#programs"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent)] to-[#812b0e] px-8 py-4 text-lg font-medium text-white shadow-[0_4px_14px_-4px_rgba(232,93,47,0.5)] transition-all hover:scale-105">
                Find your program
              </a>
              <a href={SITE.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--accent)] px-8 py-[14px] text-lg font-medium text-[var(--accent)] transition-all hover:bg-[var(--accent)]/10">
                Call {SITE.phone}
              </a>
            </div>

            <PartnerTrustChips
              items={[
                'Free to join',
                'No exclusivity',
                'No contract',
                'Live in one business day',
              ]}
            />
          </div>
        </section>

        {/* How the program works, in general */}
        <section className="px-6 py-16 md:px-16 md:py-20 bg-[var(--paper-light)]">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-[var(--ink)] md:text-4xl">
              The whole program in three steps
            </h2>
            <div className="grid gap-8 text-center md:grid-cols-3">
              {[
                { n: 1, t: 'Get your code', d: 'We set you up with a personal referral code, booking link, and a printable QR flyer — usually within a day.' },
                { n: 2, t: 'Share it', d: "A flyer, a QR code, a card, a mention when it's relevant — however's easiest for you. This is the only part that's yours." },
                { n: 3, t: 'Earn rewards', d: 'Every booking counts toward free cleanings, service credit, and priority scheduling. Nothing expires.' },
              ].map((s) => (
                <div key={s.n}>
                  <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full border-2 border-[var(--accent)] bg-[var(--paper-light)] text-xl font-bold text-[var(--accent)]">
                    {s.n}
                  </div>
                  <h3 className="mb-2 font-semibold text-[var(--ink)]">{s.t}</h3>
                  <p className="text-sm text-[var(--body)]">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category cards */}
        <section id="programs" className="scroll-mt-24 px-6 py-16 md:px-16 md:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-3 text-center text-3xl font-bold text-[var(--ink)] md:text-4xl">Find your program</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--body)]">
              Same code, same $25 for your people — the rewards are tuned to what each business
              actually needs.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {PARTNER_CATEGORIES.map((c) => (
                <Link key={c.slug} href={`/partners/${c.slug}`}
                  className="card-lift group flex flex-col rounded-2xl border border-[var(--line)] bg-white p-8 hover:border-[var(--accent)]">
                  <div aria-hidden className="mb-4 text-3xl">{c.emoji}</div>
                  <h3 className="mb-2 text-xl font-bold text-[var(--ink)] group-hover:text-[var(--accent)]">{c.navLabel}</h3>
                  <p className="mb-5 text-sm text-[var(--body)]">{c.headline}</p>
                  <div className="mb-5 mt-auto rounded-xl bg-[var(--accent)]/[0.07] px-4 py-3">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--accent)]">
                      Top reward
                    </p>
                    <p className="mt-1 text-sm font-medium text-[var(--ink)]">{c.topReward}</p>
                  </div>
                  <span className="text-sm font-medium text-[var(--accent)]">See the program →</span>
                </Link>
              ))}
            </div>
            <p className="mt-10 text-center text-sm text-[var(--body)]">
              Not one of these?{' '}
              <a href="#partner-form" className="font-medium text-[var(--accent)] hover:underline">
                Tell us what you do
              </a>{' '}
              — we&apos;ll build the tiers around it.
            </p>
          </div>
        </section>

        {/* Day-one kit */}
        <PartnerToolkit />

        {/* Why us */}
        <PartnerWhyUs />

        {/* Versus the usual arrangement */}
        <PartnerComparison />

        {/* Risk reversal */}
        <PartnerGuarantees />

        {/* FAQ */}
        <PartnerFaq items={HUB_FAQS} heading="Before you decide" />

        {/* CTA */}
        <section className="px-6 pb-24 pt-8 md:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-[var(--ink)] md:text-4xl">Don&apos;t see your business type?</h2>
            <p className="mb-10 text-lg text-[var(--body)]">
              Inspectors, contractors, insurance adjusters, storage, senior care — if you meet people
              who need a home cleaned, there&apos;s a version of this that fits.
            </p>
          </div>
          <div className="mx-auto max-w-xl">
            <PartnerLeadForm
              sourceLabel="Not listed / general inquiry"
              ctaNote="If you regularly meet people who need a home cleaned, let's talk — we'll build a program that fits."
            />
            <p className="mt-6 text-center text-sm text-[var(--body)]">
              Rather talk it through?{' '}
              <a href={SITE.smsHref} className="font-medium text-[var(--accent)] hover:underline">Text us</a> or{' '}
              <a href={SITE.phoneHref} className="font-medium text-[var(--accent)] hover:underline">call {SITE.phone}</a>.
            </p>
            <p className="mt-4 text-center text-sm text-[var(--body)]">
              Just referring a friend, not a business?{' '}
              <Link href="/referrals" className="font-medium text-[var(--accent)] hover:underline">
                Give $25, get $25 →
              </Link>
            </p>
          </div>
        </section>
      </main>

      <PartnerStickyCta label="Partner program" />
      <RevealFooter />
    </>
  );
}
