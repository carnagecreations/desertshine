import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import GiveawayForm from '@/components/GiveawayForm';
import RevealFooter from '@/components/sections/RevealFooter';
import { SITE } from '@/lib/site';
import { GIVEAWAY, formatWindow } from '@/lib/giveaway';

export const metadata: Metadata = {
  title: 'Win a Free Deep Clean — Yuma Giveaway',
  description: `We're giving away ${GIVEAWAY.prize} (a $${GIVEAWAY.prizeValue} value) to one Yuma-area neighbor. Free to enter, one winner drawn at random. Enter before the window closes.`,
  alternates: { canonical: `${SITE.url}/giveaway` },
};

const STEPS = [
  { n: '1', title: 'Enter free', body: 'Drop your name and the best way to reach you. Takes about 20 seconds — no purchase, no catch.' },
  { n: '2', title: 'We draw at random', body: 'The moment entries close, we pick one winner at random from everyone who entered.' },
  { n: '3', title: 'You get the clean', body: `We reach out the same day and schedule ${GIVEAWAY.prize} at a time that works for you.` },
];

export default function GiveawayPage() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Giveaway', href: '/giveaway' },
  ];

  return (
    <>
      <main className="relative z-10 bg-[var(--paper)]">
        {/* Hero */}
        <section className="relative overflow-hidden pt-40 pb-10 px-6 md:px-16">
          <div aria-hidden className="pointer-events-none absolute -top-24 right-[8%] h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl" />
          <div className="relative mx-auto max-w-3xl">
            <Breadcrumbs items={breadcrumbs} />
            <p className="mt-8 mb-4 text-sm font-medium tracking-[0.2em] text-[var(--accent)] uppercase">
              Free giveaway · one lucky winner
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--ink)] mb-6 leading-tight">
              Win {GIVEAWAY.prize}. <span className="italic text-[var(--accent)]">On the house.</span>
            </h1>
            <p className="text-lg text-[var(--body)] leading-relaxed">
              One Yuma-area home is getting {GIVEAWAY.prize} — a ${GIVEAWAY.prizeValue} value — top to bottom,
              baseboards to blinds, completely free. Entry costs nothing and takes seconds. Get your name in
              before the window closes.
            </p>
            <p className="mt-4 text-sm text-[var(--body)]">
              Entry window: <span className="font-medium text-[var(--ink)]">{formatWindow()}</span>
            </p>
          </div>
        </section>

        {/* Countdown + entry form */}
        <section className="px-6 pb-8 md:px-16">
          <div className="mx-auto max-w-2xl">
            <GiveawayForm />
          </div>
        </section>

        {/* How it works */}
        <section className="px-6 py-16 md:px-16 bg-[var(--paper-light)]">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold text-[var(--ink)] mb-10">How it works</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {STEPS.map((step) => (
                <div key={step.n} className="rounded-2xl border border-[var(--line)] bg-white p-6 text-center">
                  <div className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-full border-2 border-[var(--accent)] text-lg font-bold text-[var(--accent)]">
                    {step.n}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--ink)] mb-2">{step.title}</h3>
                  <p className="text-sm text-[var(--body)]">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Honest fine print — matches the brand's transparency */}
        <section className="px-6 py-16 md:px-16">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-[var(--line)] bg-white p-6 md:p-8">
              <h2 className="text-xl font-semibold text-[var(--ink)] mb-5">Straight with you, as always</h2>
              <ul className="space-y-4 text-[var(--body)]">
                <li className="flex gap-3">
                  <span className="shrink-0 text-xl">🎁</span>
                  <span><span className="font-medium text-[var(--ink)]">Genuinely free.</span> No purchase, no obligation to ever book us. Win and you get {GIVEAWAY.prize}, no invoice.</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 text-xl">🎲</span>
                  <span><span className="font-medium text-[var(--ink)]">A fair, random draw.</span> Every valid entry has the same odds. We pick the winner at random the moment the window closes.</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 text-xl">🔒</span>
                  <span><span className="font-medium text-[var(--ink)]">Your info stays yours.</span> We only use it to contact you about the giveaway and a one-time {GIVEAWAY.runnerUpOffer} offer. No spam, no reselling, unsubscribe anytime.</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 text-xl">📍</span>
                  <span><span className="font-medium text-[var(--ink)]">Local, by design.</span> Open to adults who live in the Yuma-area communities we serve: {GIVEAWAY.eligibility.join(', ')}.</span>
                </li>
              </ul>
              <p className="mt-5 text-sm text-[var(--body)]">
                Full details are in the{' '}
                <Link href="/giveaway/rules" className="font-medium text-[var(--accent)] hover:underline">official rules</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <RevealFooter />
    </>
  );
}
