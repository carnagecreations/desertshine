import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RevealFooter from '@/components/sections/RevealFooter';
import { SITE } from '@/lib/site';
import { faqSchemaFrom, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Give $25, Get $25 — Referral Program',
  description: 'Share your personal referral code with friends in Yuma: they get $25 off their first cleaning, and you get a $25 credit toward your next one. No limit on how many times you can earn.',
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
    q: "What if my friend forgets to use my code?",
    a: "Ask them to mention your name when they book, or text/call us at " + SITE.phone + " — we'll match it up by hand. It's easiest if they just enter the code when they request their quote, though.",
  },
  {
    q: 'Does my credit expire?',
    a: "No. It sits on your account until you use it — we'll automatically apply it to your next invoice.",
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
        <section className="relative overflow-hidden px-6 pb-12 pt-8 md:px-16">
          <div aria-hidden className="pointer-events-none absolute -top-24 right-[8%] h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl" />
          <div className="relative mx-auto max-w-4xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-3 py-1 text-sm font-medium text-[var(--accent)]">
              🎁 Referral Program
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--ink)] mb-6">
              Give $25. Get $25. <span className="italic text-[var(--accent)]">Every time.</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--body)] leading-relaxed max-w-3xl mb-4">
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
          </div>
        </section>

        {/* How it works */}
        <section className="px-6 py-16 md:px-16 bg-[var(--paper-light)]">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-10 text-center">How it works</h2>
            <div className="relative space-y-10">
              <span aria-hidden className="absolute left-1/2 top-6 h-[calc(100%-3rem)] w-px -translate-x-1/2 bg-gradient-to-b from-[var(--accent)]/40 via-[var(--line)] to-[var(--accent)]/40" />
              {[
                'Request a quote on our site — takes about a minute, and your own referral code is generated instantly. You don\'t need to have booked a clean yet.',
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
        <section className="px-6 py-20 md:px-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-3 text-center">It adds up fast</h2>
            <p className="text-center text-[var(--body)] mb-12 max-w-2xl mx-auto">
              There&apos;s no cap and credit never expires — refer as many people as you know.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { count: 1, reward: '$25 credit — basically a free add-on for your next clean' },
                { count: 4, reward: '$100 credit — that\'s a whole cleaning, on us' },
                { count: 10, reward: '$250 credit — most people never pay for a clean again' },
              ].map((tier) => (
                <div key={tier.count} className="card-lift rounded-2xl border border-[var(--line)] bg-white p-6 hover:border-[var(--accent)]">
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-[var(--accent)]/10 text-lg font-bold text-[var(--accent)]">
                    {tier.count}
                  </div>
                  <p className="text-xs tracking-widest uppercase opacity-60 mb-2">
                    friend{tier.count === 1 ? '' : 's'} referred
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
              {FAQS.map((item, i) => (
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
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-4">Your code is one form away.</h2>
            <p className="text-lg text-[var(--body)] mb-8">
              Request a quote and we&apos;ll generate your personal code on the spot — no booking required to start sharing it.
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
              <Link href="/partners" className="font-medium text-[var(--accent)] hover:underline">Check out the partner program →</Link>
            </p>
          </div>
        </section>
      </main>
      <RevealFooter />
    </>
  );
}
