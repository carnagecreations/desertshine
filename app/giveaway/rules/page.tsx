import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE } from '@/lib/site';
import { GIVEAWAY, formatWindow } from '@/lib/giveaway';

export const metadata: Metadata = {
  title: 'Giveaway Official Rules',
  description: `Official rules for the Clean Convictions Free Deep Clean flash giveaway: eligibility, entry period, winner selection, and prize details.`,
  alternates: { canonical: `${SITE.url}/giveaway/rules` },
  robots: { index: false, follow: true },
};

export default function GiveawayRulesPage() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Giveaway', href: '/giveaway' },
    { name: 'Official Rules', href: '/giveaway/rules' },
  ];

  return (
    <main className="relative z-10 bg-[var(--paper)]">
      <section className="pt-40 pb-12 px-6 md:px-16">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="mt-8 text-4xl md:text-5xl font-bold text-[var(--ink)] mb-3">Giveaway Official Rules</h1>
          <p className="text-lg text-[var(--body)] mb-8">
            &ldquo;Free Deep Clean&rdquo; Flash Giveaway — {SITE.name}
          </p>

          <div className="space-y-6 text-[var(--body)]">
            <p className="text-sm">
              NO PURCHASE NECESSARY TO ENTER OR WIN. A PURCHASE WILL NOT IMPROVE YOUR CHANCES OF WINNING.
              VOID WHERE PROHIBITED.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">1. Sponsor</h2>
              <p>
                This giveaway is sponsored by {SITE.name}, {SITE.address} (&ldquo;Sponsor&rdquo;). Questions can be
                directed to {SITE.email} or {SITE.phone}.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">2. Entry Period</h2>
              <p>
                The giveaway is open for entries during the following period:{' '}
                <span className="font-medium text-[var(--ink)]">{formatWindow()}</span>. Entries submitted before it
                opens or after it closes will not be eligible. Sponsor&apos;s clock is the official timekeeper.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">3. Eligibility</h2>
              <p>
                Open to legal residents of Arizona who are 18 years or older at the time of entry and who reside in
                one of the communities Sponsor serves: {GIVEAWAY.eligibility.join(', ')}. Employees of Sponsor and
                their immediate family members are not eligible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">4. How to Enter</h2>
              <p>
                During the entry period, complete the entry form at{' '}
                <Link href="/giveaway" className="font-medium text-[var(--accent)] hover:underline">{SITE.url}/giveaway</Link>{' '}
                with your name, email, phone number, and area. Limit one (1) entry per person. Entries that are
                incomplete, illegible, or submitted by automated means are void.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">5. Winner Selection &amp; Notification</h2>
              <p>
                {GIVEAWAY.winners === 1 ? 'One (1) winner' : `${GIVEAWAY.winners} winners`} will be selected in a
                random drawing from all eligible entries promptly after the entry period closes. The winner will be
                notified by phone or email within one (1) business day. If the winner cannot be reached or does not
                respond within three (3) days, Sponsor may select an alternate winner at random.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">6. Prize</h2>
              <p>
                The prize is {GIVEAWAY.prize} at the winner&apos;s residence within Sponsor&apos;s service area
                (approximate retail value ${GIVEAWAY.prizeValue}). The prize is non-transferable, and no cash
                equivalent or substitution is offered, except that Sponsor may substitute a prize of equal or greater
                value if necessary. The cleaning will be scheduled at a mutually agreeable time and is subject to
                Sponsor&apos;s standard{' '}
                <Link href="/terms" className="font-medium text-[var(--accent)] hover:underline">terms of service</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">7. Odds</h2>
              <p>Odds of winning depend on the number of eligible entries received during the entry period.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">8. Privacy</h2>
              <p>
                Information you submit is used only to administer this giveaway and to send you a one-time{' '}
                {GIVEAWAY.runnerUpOffer} offer. We do not sell or share your information, and you can opt out of the
                offer at any time. See our{' '}
                <Link href="/privacy" className="font-medium text-[var(--accent)] hover:underline">privacy policy</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">9. General Conditions</h2>
              <p>
                By entering, you agree to these rules and to the decisions of Sponsor, which are final and binding.
                This giveaway is not sponsored, endorsed, or administered by, or associated with, any social media
                platform. Sponsor reserves the right to cancel or modify the giveaway if fraud or a technical failure
                compromises its fairness.
              </p>
            </section>
          </div>

          <p className="mt-10 text-sm text-[var(--body)]">
            <Link href="/giveaway" className="font-medium text-[var(--accent)] hover:underline">← Back to the giveaway</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
