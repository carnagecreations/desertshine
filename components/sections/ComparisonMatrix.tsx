'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  { name: 'Same cleaner every visit', recurring: true, deep: true, moveout: true, commercial: false },
  { name: 'Consistent schedule', recurring: true, deep: true, moveout: false, commercial: true },
  { name: 'Inside appliances', recurring: false, deep: true, moveout: true, commercial: true },
  { name: 'Baseboards & light switches', recurring: false, deep: true, moveout: true, commercial: false },
  { name: 'Blinds, ceiling fans, vents', recurring: false, deep: true, moveout: true, commercial: true },
  { name: 'Every cabinet & closet', recurring: false, deep: false, moveout: true, commercial: false },
  { name: 'Windows & tracks detail', recurring: false, deep: false, moveout: true, commercial: true },
  { name: '24-hour re-clean guarantee', recurring: true, deep: true, moveout: true, commercial: true },
  { name: 'Landlord inspection ready', recurring: false, deep: false, moveout: true, commercial: false },
  { name: 'Custom schedules', recurring: false, deep: false, moveout: false, commercial: true },
  { name: 'Supply management', recurring: false, deep: false, moveout: false, commercial: true },
  { name: 'After-hours service', recurring: false, deep: false, moveout: false, commercial: true },
];

const services = [
  { key: 'recurring', name: 'Recurring', price: 'from $129', desc: 'Weekly/Bi-weekly/Monthly' },
  { key: 'deep', name: 'Deep Clean', price: 'from $249', desc: 'Seasonal reset' },
  { key: 'moveout', name: 'Move-In/Out', price: 'from $299', desc: 'Inspection ready' },
  { key: 'commercial', name: 'Commercial', price: 'Custom', desc: 'After-hours janitorial' },
];

export default function ComparisonMatrix() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[var(--paper)] to-[var(--paper)]/95 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[var(--ink)] mb-4">
            What's included
          </h2>
          <p className="text-xl text-[var(--body)] max-w-2xl mx-auto">
            Compare our service tiers. Click any feature to see details.
          </p>
        </div>

        {/* Comparison Matrix */}
        <div className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-5 gap-0 border-b border-white/20">
            <div className="p-6 col-span-1" />
            {services.map((service) => (
              <div
                key={service.key}
                className="p-6 text-center border-l border-white/20 bg-gradient-to-b from-[var(--accent)]/10 to-transparent"
              >
                <h3 className="font-bold text-lg text-[var(--ink)] mb-1">{service.name}</h3>
                <p className="text-xs text-[var(--body)] mb-2">{service.desc}</p>
                <p className="text-sm font-semibold text-[var(--accent)]">{service.price}</p>
              </div>
            ))}
          </div>

          {/* Feature Rows */}
          {features.map((feature, idx) => (
            <div key={feature.name} className="border-b border-white/10 last:border-b-0">
              <motion.button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className="w-full grid grid-cols-5 gap-0 text-left hover:bg-white/5 transition-colors"
              >
                {/* Feature Name */}
                <div className="p-6 col-span-1 flex items-center justify-between pr-4 border-r border-white/20">
                  <span className="font-medium text-[var(--ink)]">{feature.name}</span>
                  <motion.span
                    animate={{ rotate: expanded === idx ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[var(--accent)]"
                  >
                    ▼
                  </motion.span>
                </div>

                {/* Checkmarks */}
                {services.map((service) => {
                  const hasFeature = feature[service.key as keyof typeof feature];
                  return (
                    <div
                      key={service.key}
                      className="p-6 flex items-center justify-center border-l border-white/20"
                    >
                      <motion.div
                        initial={false}
                        animate={{
                          scale: hasFeature ? 1 : 0.8,
                          opacity: hasFeature ? 1 : 0.3,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {hasFeature ? (
                          <span className="text-2xl text-[var(--accent)]">✓</span>
                        ) : (
                          <span className="text-2xl text-[var(--body)]/30">—</span>
                        )}
                      </motion.div>
                    </div>
                  );
                })}
              </motion.button>

              {/* Expanded Details */}
              <AnimatePresence>
                {expanded === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-5 gap-0 overflow-hidden border-t border-white/10 bg-[var(--accent)]/5"
                  >
                    <div className="p-6 col-span-1" />
                    {services.map((service) => {
                      const hasFeature = feature[service.key as keyof typeof feature];
                      return (
                        <div
                          key={service.key}
                          className="p-6 border-l border-white/20 text-sm text-[var(--body)]"
                        >
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            {hasFeature ? (
                              <div>
                                <p className="font-semibold text-[var(--ink)] mb-2">
                                  ✓ Included
                                </p>
                                <p className="text-xs text-[var(--body)]/70">
                                  {service.name === 'Recurring' &&
                                    feature.name === 'Same cleaner every visit' &&
                                    'Your dedicated cleaner knows your home.'}
                                  {service.name === 'Recurring' &&
                                    feature.name === 'Consistent schedule' &&
                                    'Same day and time, every visit.'}
                                  {service.name === 'Deep Clean' &&
                                    feature.name === 'Inside appliances' &&
                                    'Oven, fridge, microwave interiors.'}
                                  {service.name === 'Move-In/Out' &&
                                    feature.name === 'Every cabinet & closet' &&
                                    'Landlord inspection ready.'}
                                  {service.name === 'Commercial' &&
                                    feature.name === 'Custom schedules' &&
                                    'Fit your office hours exactly.'}
                                  {!hasFeature && feature.name && 'Not available in this tier.'}
                                </p>
                              </div>
                            ) : (
                              <div>
                                <p className="font-semibold text-[var(--body)]/50 mb-2">
                                  Not included
                                </p>
                                <p className="text-xs text-[var(--body)]/50">
                                  Upgrade to a higher tier for this feature.
                                </p>
                              </div>
                            )}
                          </motion.div>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-[var(--body)] mb-6">
            Not sure which service is right for you?
          </p>
          <button className="px-8 py-4 bg-[var(--accent)] text-white rounded-lg font-semibold hover:bg-[var(--accent)]/90 transition-colors">
            Get a free quote
          </button>
        </div>
      </div>
    </section>
  );
}
