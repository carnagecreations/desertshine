'use client';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

export default function PricingCalculator() {
  const [sqft, setSqft] = useState(2000);
  const [rooms, setRooms] = useState(3);

  const calculatePrice = (basePrice: number, sqft: number, rooms: number) => {
    const sqftFactor = sqft / 1000;
    const roomFactor = rooms / 3;
    return Math.round(basePrice * (0.7 + sqftFactor * 0.2 + roomFactor * 0.1));
  };

  const prices = useMemo(
    () => ({
      recurring: calculatePrice(129, sqft, rooms),
      deep: calculatePrice(249, sqft, rooms),
      moveout: calculatePrice(299, sqft, rooms),
      commercial: calculatePrice(399, sqft, rooms),
    }),
    [sqft, rooms]
  );

  const AnimatedPrice = ({ value }: { value: number }) => (
    <motion.span
      key={value}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
    >
      ${value}
    </motion.span>
  );

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[var(--paper)] via-[var(--paper)] to-[var(--accent)]/5 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[var(--ink)] mb-4">
            Price it your way
          </h2>
          <p className="text-xl text-[var(--body)] max-w-2xl mx-auto">
            Adjust your home size and we'll calculate your exact rate. Flat pricing, no surprises.
          </p>
        </div>

        {/* Calculator Controls */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Square Footage */}
          <div className="bg-white/50 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
            <label className="block text-sm font-semibold text-[var(--ink)] mb-6">
              Home Size
            </label>
            <div className="space-y-4">
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                className="w-full h-2 bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/50 rounded-lg appearance-none cursor-pointer accent-[var(--accent)]"
              />
              <motion.div
                className="flex items-baseline justify-between"
                animate={{ scale: 1 }}
                key={sqft}
              >
                <span className="text-4xl font-bold text-[var(--ink)]">{sqft.toLocaleString()}</span>
                <span className="text-lg text-[var(--body)]">sq ft</span>
              </motion.div>
            </div>
          </div>

          {/* Rooms */}
          <div className="bg-white/50 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
            <label className="block text-sm font-semibold text-[var(--ink)] mb-6">
              Number of Rooms
            </label>
            <div className="space-y-4">
              <input
                type="range"
                min="1"
                max="8"
                step="1"
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value))}
                className="w-full h-2 bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/50 rounded-lg appearance-none cursor-pointer accent-[var(--accent)]"
              />
              <motion.div
                className="flex items-baseline justify-between"
                animate={{ scale: 1 }}
                key={rooms}
              >
                <span className="text-4xl font-bold text-[var(--ink)]">{rooms}</span>
                <span className="text-lg text-[var(--body)]">rooms</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: 'Recurring',
              desc: 'Weekly, bi-weekly, or monthly',
              price: prices.recurring,
              isCustom: false,
              includes: ['Same cleaner every visit', 'Consistent schedule', 'Maintenance focused'],
            },
            {
              name: 'Deep Clean',
              desc: 'The seasonal reset',
              price: prices.deep,
              isCustom: false,
              includes: ['Everything in Recurring', 'Inside appliances', 'Baseboards & vents', 'Grout detail'],
            },
            {
              name: 'Move-In / Out',
              desc: 'Landlord-checklist ready',
              price: prices.moveout,
              isCustom: false,
              includes: ['Every cabinet & closet', 'All appliances inside/out', 'Windows & tracks', 'Move-ready clean'],
            },
            {
              name: 'Commercial',
              desc: 'After-hours janitorial',
              price: 0,
              isCustom: true,
              includes: ['Custom schedule', 'Supply management', 'Walk-through report', 'Restrooms & common areas'],
            },
          ].map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-xl border border-white/30 rounded-2xl p-8 hover:border-[var(--accent)]/50 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[var(--ink)] mb-2">{service.name}</h3>
                <p className="text-sm text-[var(--body)] mb-6">{service.desc}</p>

                <div className="mb-8 py-6 border-y border-white/20">
                  {service.isCustom ? (
                    <div>
                      <div className="text-4xl font-bold text-[var(--accent)] mb-2">Custom</div>
                      <p className="text-sm text-[var(--body)]">Tailored to your location, hours, and needs</p>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-[var(--body)]">from</span>
                        <motion.span
                          className="text-5xl font-bold text-[var(--accent)]"
                          key={service.price}
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <AnimatedPrice value={service.price} />
                        </motion.span>
                      </div>
                      <p className="text-xs text-[var(--body)] mt-2">based on your home size</p>
                    </div>
                  )}
                </div>

                <ul className="space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-[var(--body)]">
                      <span className="text-[var(--accent)] font-bold flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full mt-8 px-6 py-3 bg-[var(--accent)] text-white rounded-lg font-semibold hover:bg-[var(--accent)]/90 transition-colors">
                  Get a quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
