import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RevealFooter from '@/components/sections/RevealFooter';
import PartnerStickyCta from '@/components/partners/PartnerStickyCta';
import { PartnerTrustChips, PartnerTierLadder, PartnerFaq } from '@/components/partners/PartnerSections';
import { SITE } from '@/lib/site';
import { faqSchemaFrom, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Give $25, Get $25 — Referral Program',
  description:
    'Share your personal referral code with friends in Yuma: they get $25 off their first cleaning, and you get a $25 credit toward your next one. No limit, no expiration, no signup fee.',
  alternates: { canonical: `${SITE.url}/referrals` },
};

const FAQS = [
  {
    q: 'Do I need to already be a client to get a code?',
    a: "No. The moment you request a quote on our site, you get your own referral code — even before your first cleaning happens. You don't have to wait to become a customer to start sharing.",
  },
  {
    q: 'When do I actually get my $25?',
    a: "As a credit toward your next cleaning invoice, applied once the friend you referred completes their first clean with us. Your friend's $25 off is automatic and immediate — yours shows up right after theirs is done.",
  },
  {
    q: 'Is there a limit on how many friends I can refer?',
    a: "No cap, no expiration. Refer 2 friends, get $50 off your next clean. Refer 10, that's $250 in credit — stack it as high as you want.",
  },
  {
    q: 'What if my friend forgets to use my code?',
    a: `Ask them to mention your name when they book, or text/call us at ${SITE.phone} — we'll match it up by hand. It's easiest if they just enter the code when they request their quote, though.`,
  },
  {
    q: 'Does my credit expire?',
    a: "No. It sits on your account until you use it — we'll automatically apply it to your next invoice.",
  },
  {
    q: 'Can I stack referral credit with a recurring discount or the military discount?',
    a: 'Yes. Referral credit comes off the invoice after any discount you already have — recurring, military, whatever applies. It never cancels out something else you earned.',
  },
  {
    q: 'What if the friend I refer is unhappy with their clean?',
    a: "They tell us within 24 hours and we come back and redo it free. You put your name on the recommendation, so making it right is on us, not on you.",
  },
];

export default function ReferralsPage() {
  const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Referrals' }];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaFrom(FAQS)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE.url },
              { name: 'Referrals', url: `${SITE.url}/referrals` },
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
              🎁 Referral Program
            </span>
            <h1 className="mb-6 text-4xl font-bold text-[var(--ink)] md:text-6xl">
              Give $25. Get $25. <span className="italic text-[var(--accent)]">Every time.</span>
            </h1>
            <p className="mb-5 max-w-3xl text-lg leading-relaxed text-[var(--body)] md:text-xl">
              Know someone in Yuma who needs their home cleaned? Send them your code. They save $25
              on their first clean, you bank a $25 credit toward yours — and there&apos;s no limit on
              how many times you can do it.
            </p>
            <p className="text-sm uppercase tracking-widest text-[var(--body)]/70">
              No cost, no signup, no catch — it&apos;s free money for a text message
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/book"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent)] to-[#812b0e] px-8 py-4 text-lg font-medium text-white shadow-[0_4px_14px_-4px_rgba(232,93,47,0.5)] transition-all hover:scale-105">
                Get my referral code
              </Link>
              <a href={SITE.smsHref}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--accent)] px-8 py-[14px] text-lg font-medium text-[var(--accent)] transition-all hover:bg-[var(--accent)]/10">
                Text us instead
              </a>
            </div>

            <PartnerTrustChips
              items={[
                'Code generated instantly',
                'No booking required to get one',
                'Credit never expires',
                'No cap on referrals',
              ]}
            />
          </div>
        </section>

        {/* How it works */}
        <section className="px-6 py-16 md:px-16 md:py-20 bg-[var(--paper-light)]">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-[var(--ink)] md:text-4xl">How it works</h2>
            <div className="relative space-y-10">
              <span aria-hidden className="absolute left-1/2 top-6 h-[calc(100%-3rem)] w-px -translate-x-1/2 bg-gradient-to-b from-[var(--accent)]/40 via-[var(--line)] to-[var(--accent)]/40" />
              {[
                "Request a quote on our site — takes about a minute, and your own referral code is generated instantly. You don't need to have booked a clean yet.",
                'Share your code with a friend, neighbor, or coworker in Yuma — text, call, or just tell them the code out loud.',
                'They use it when they book and get $25 off their first clean. The moment their first clean is done, a $25 credit lands on your account toward your next one.',
              ].map((step, i) => (
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

        {/* The math — make the upside concrete */}
        <PartnerTierLadder
          unitLabel="friend"
          tiers={[
            { count: 1, reward: '$25 credit — basically a free add-on for your next clean' },
            { count: 4, reward: "$100 credit — that's a whole cleaning, on us" },
            { count: 10, reward: '$250 credit — most people never pay for a clean again' },
          ]}
        />

        {/* Fine print, stated plainly */}
        <section className="px-6 py-16 md:px-16 md:py-20 bg-[var(--paper-dark)]">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-3 text-center text-3xl font-bold text-white md:text-4xl">The catch, in full</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-white/70">
              There isn&apos;t one. Here are all the terms.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { t: 'No cap', b: 'Refer as many people as you know. Every single one earns you $25.' },
                { t: 'No expiration', b: 'Credit sits on your account until you use it. We apply it automatically.' },
                { t: 'No booking required', b: 'Request a quote and you have a code — you never have to buy anything to start.' },
                { t: 'Stacks with other discounts', b: 'Recurring and military discounts still apply. Credit comes off after them.' },
                { t: 'They save too', b: "Your friend gets $25 off their first clean. You're handing over a gift, not a sales pitch." },
                { t: 'Backed by the guarantee', b: 'Anyone unhappy gets a free re-clean within 24 hours. Your recommendation is safe.' },
              ].map((g) => (
                <div key={g.t} className="rounded-2xl border border-white/15 bg-white/[0.06] p-6">
                  <p className="flex items-center gap-2 font-semibold text-white">
                    <span aria-hidden className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--accent)] text-[11px] font-bold text-white">
                      ✓
                    </span>
                    {g.t}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{g.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <PartnerFaq items={FAQS} />

        {/* CTA */}
        <section id="referral-cta" className="scroll-mt-24 px-6 pb-24 pt-8 md:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-[var(--ink)] md:text-4xl">Your code is one form away.</h2>
            <p className="mb-8 text-lg text-[var(--body)]">
              Request a quote and we&apos;ll generate your personal code on the spot — no booking
              required to start sharing it.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/book"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent)] to-[#812b0e] px-8 py-4 text-lg font-medium text-white transition-all hover:scale-105">
                Get my code
              </Link>
              <a href={SITE.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--accent)] px-8 py-[14px] text-lg font-medium text-[var(--accent)] transition-all hover:bg-[var(--accent)]/10">
                Call {SITE.phone}
              </a>
            </div>
            <p className="mt-10 text-sm text-[var(--body)]">
              Run a property, brokerage, or business that sends us people regularly?{' '}
              <Link href="/partners" className="font-medium text-[var(--accent)] hover:underline">
                Check out the partner program →
              </Link>
            </p>
          </div>
        </section>
      </main>

      <PartnerStickyCta
        label="Give $25, get $25"
        note="no cap, no expiration, and you don't have to book anything to get your code."
        ctaLabel="Get my code"
        href="/book"
        hideNearId="referral-cta"
      />
      <RevealFooter />
    </>
  );
}
