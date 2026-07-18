'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface Service {
  id: string;
  name: string;
  price: string;
  blurb: string;
  includes: string[];
  image: string;
}

interface Props {
  services: Service[];
}

export default function ServiceShowcase({ services }: Props) {
  const [expandedId, setExpandedId] = useState<string | null>(services[0]?.id || null);

  return (
    <div className="px-6 py-20 md:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Grid on desktop, stack on mobile */}
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
          {services.map((service, idx) => {
            const isExpanded = expandedId === service.id;
            return (
              <motion.div
                key={service.id}
                layout
                onClick={() => setExpandedId(service.id)}
                className="group card-lift relative cursor-pointer overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm border border-[var(--line)] hover:border-[var(--accent)]"
              >
                {/* Image section */}
                <motion.div
                  className="relative h-64 md:h-80 overflow-hidden"
                  animate={{ height: isExpanded ? 'auto' : 'auto' }}
                >
                  <motion.img
                    src={service.image}
                    alt={`${service.name} in Yuma, AZ — Clean Convictions`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                    animate={{ scale: isExpanded ? 1.05 : 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Price badge */}
                  <motion.div
                    className="absolute top-4 left-4 rounded-full bg-[var(--paper-dark)]/85 backdrop-blur-sm px-4 py-2 text-xs font-medium tracking-widest uppercase text-white ring-1 ring-white/20"
                    animate={{ scale: isExpanded ? 1.1 : 1 }}
                  >
                    {service.price}
                  </motion.div>
                </motion.div>

                {/* Content section */}
                <motion.div
                  className="relative p-6 md:p-8"
                  animate={{
                    minHeight: isExpanded ? 'auto' : '200px',
                  }}
                >
                  {/* Header always visible */}
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--ink)] leading-tight">
                      {service.name}
                    </h3>
                  </div>

                  {/* Blurb - always visible */}
                  <p className="text-[var(--body)] text-sm md:text-base leading-relaxed group-hover:text-[var(--ink)] transition-colors">
                    {service.blurb}
                  </p>

                  {/* Checklist - always visible */}
                  <div className="mt-6 space-y-3 pt-6 border-t border-[var(--line)]">
                    {service.includes.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--accent)]/15 text-xs text-[var(--accent)] font-bold">
                          ✓
                        </span>
                        <span className="text-sm text-[var(--body)]">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA button - only on expanded */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 pt-6 border-t border-[var(--line)]"
                      >
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-[var(--accent)]/30 hover:scale-105"
                        >
                          Get a quote ↗
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* All services grid below (for context) */}
        <div className="mt-16 pt-16 border-t border-[var(--line)]">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-sm text-[var(--body)] uppercase tracking-widest font-medium mb-8"
          >
            Why clients choose us
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: '✓', label: 'Flat rates' },
              { icon: '✓', label: '24-hr re-clean guarantee' },
              { icon: '✓', label: 'Same cleaner, every time' },
              { icon: '✓', label: 'Locally owned & operated' },
            ].map((feature) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="card-lift rounded-xl bg-white/30 p-4 backdrop-blur-sm border border-[var(--line)] hover:border-[var(--accent)]"
              >
                <div className="mx-auto mb-2 grid h-8 w-8 place-items-center rounded-full bg-[var(--accent)]/10 text-sm font-bold text-[var(--accent)]">{feature.icon}</div>
                <p className="text-xs text-[var(--body)] font-medium">{feature.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
