'use client';
import { motion } from 'framer-motion';
import { EASE_OUT } from '@/lib/motion';

const signals = [
  {
    icon: '⭐',
    metric: '100%',
    label: 'Satisfaction Guaranteed',
    description: "Free re-clean if you're not completely satisfied",
  },
  {
    icon: '⚡',
    metric: '1 hour',
    label: 'Quote Response',
    description: 'Flat price quote within one business hour',
  },
  {
    icon: '🔄',
    metric: '6+ years',
    label: 'Local Trusted',
    description: 'Serving Yuma families and businesses',
  },
  {
    icon: '📅',
    metric: 'Same-week',
    label: 'Availability',
    description: 'Schedule at a time that works for you',
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
            Transparent pricing, real guarantees, no surprises
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
              className="rounded-2xl border border-[var(--line)] bg-white/70 p-8 backdrop-blur-sm hover:border-[var(--accent)] transition-colors">
              <div className="text-5xl mb-4">{signal.icon}</div>
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
            Real reviews from real Yuma families. We're building our reputation one satisfied customer at a time.
          </p>
          <p className="mt-4 text-sm text-[var(--body)]">
            ⭐ Check back soon for verified reviews on Google Business Profile
          </p>
        </motion.div>
      </div>
    </section>
  );
}
