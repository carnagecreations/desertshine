'use client';
import { motion } from 'framer-motion';
import { EASE_OUT } from '@/lib/motion';

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

        {/* Review teaser — update this when Google Business Profile is set up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: EASE_OUT }}
          className="mt-16 rounded-3xl border border-[var(--line)] bg-gradient-to-br from-amber-50/80 to-orange-50/80 p-8 md:p-12 text-center backdrop-blur-sm">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
            Coming soon
          </p>
          <h3 className="text-2xl font-bold text-[var(--ink)]">
            Google reviews from your neighbors
          </h3>
          <p className="mt-3 text-[var(--body)]">
            We just launched — reviews will appear here as real customers leave them, never before.
          </p>
          <p className="mt-4 text-sm text-[var(--body)]">
            ⭐ Verified reviews on our Google Business Profile
          </p>
        </motion.div>
      </div>
    </section>
  );
}
