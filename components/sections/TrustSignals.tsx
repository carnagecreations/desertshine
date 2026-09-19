'use client';
import { motion } from 'framer-motion';
import { EASE_OUT } from '@/lib/motion';
import { SITE } from '@/lib/site';
import { aggregateRating } from '@/lib/reviews';

const signals = [
  {
    icon: '⭐',
    metric: '100%',
    label: 'Satisfaction Guaranteed',
    description: 'Not happy? Tell us within 24 hours and we re-clean it free',
  },
  {
    icon: '⚡',
    metric: 'Instant',
    label: 'Flat-Rate Pricing',
    description: 'Rates published in the open — your exact flat quote confirmed before we book',
  },
  {
    icon: '🏜️',
    metric: 'Yuma, AZ',
    label: 'Locally Owned & Operated',
    description: 'We live here, work here, and answer to our neighbors',
  },
  {
    icon: '📅',
    metric: 'Same-week',
    label: 'Availability',
    description: 'Mornings, evenings, weekends — your schedule, not ours',
  },
];

export default function TrustSignals() {
  const rating = aggregateRating();

  return (
    <section className="relative bg-gradient-to-b from-[var(--paper)] to-[var(--paper-dark)]/5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-[var(--ink)] md:text-4xl">
            Why Yuma families trust us
          </h2>
          <p className="mt-4 text-lg text-[var(--body)]">
            Published rates, a real guarantee, and no surprises at the door
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {signals.map((signal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE_OUT }}
              className="card-lift rounded-2xl border border-[var(--line)] bg-white/70 p-8 backdrop-blur-sm hover:border-[var(--accent)]">
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-[var(--accent)]/10 text-3xl">{signal.icon}</div>
              <div className="mb-3 text-3xl font-bold text-[var(--accent)]">
                {signal.metric}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[var(--ink)]">
                {signal.label}
              </h3>
              <p className="text-sm text-[var(--body)]">{signal.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Proof panel. While lib/reviews.ts is empty we say so plainly and
            lead with commitments instead — "coming soon" reads as "no proof",
            which is worse than owning it. The moment a real review is added
            this swaps to the rating automatically; nothing is fabricated. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: EASE_OUT }}
          className="mt-16 rounded-3xl border border-[var(--line)] bg-white p-8 md:p-12">
          {rating ? (
            <div className="text-center">
              <p className="text-4xl font-bold text-[var(--accent)]">
                {rating.ratingValue.toFixed(1)} <span aria-hidden>★</span>
              </p>
              <h3 className="mt-2 text-2xl font-bold text-[var(--ink)]">
                {rating.reviewCount} verified review{rating.reviewCount === 1 ? '' : 's'} from your neighbors
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-[var(--body)]">
                Every one of these is a real Yuma customer on our Google Business Profile — we don&apos;t
                write our own.
              </p>
              <a
                href={SITE.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full border-2 border-[var(--accent)] px-6 py-2.5 text-sm font-medium text-[var(--accent)] transition-colors hover:bg-[var(--accent)]/10">
                Read them on Google
              </a>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                  Straight with you
                </p>
                <h3 className="mt-2 text-2xl font-bold text-[var(--ink)] md:text-3xl">
                  We&apos;re new, so we don&apos;t have a wall of reviews yet
                </h3>
                <p className="mt-4 leading-relaxed text-[var(--body)]">
                  Plenty of cleaning companies buy them. We&apos;d rather earn them, which means right
                  now you&apos;re deciding on something other than star ratings. So here is exactly
                  what we commit to on your first clean — and what it costs you if we get it wrong.
                </p>
                <p className="mt-4 leading-relaxed text-[var(--body)]">
                  Already had us out?{' '}
                  <a
                    href={SITE.googleReviewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--accent)] hover:underline">
                    Leaving an honest review
                  </a>{' '}
                  is the single most useful thing you can do for us.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  ['You see the price before we book', 'An exact flat number, agreed up front. Not an hourly rate that grows while you watch.'],
                  ['You pay nothing if we get it wrong', 'Tell us within 24 hours and we come back and redo it. No invoice, no argument.'],
                  ['You are never locked in', 'No contract and no cancellation fee on recurring service. Stop whenever you want.'],
                  ['You talk to the owner', `Not a call center — ${SITE.phone} reaches the person responsible for the work.`],
                ].map(([title, body]) => (
                  <li key={title} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--accent)] text-[11px] font-bold text-white">
                      ✓
                    </span>
                    <div>
                      <p className="font-semibold text-[var(--ink)]">{title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-[var(--body)]">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
