import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES as SERVICE_LINKS } from '@/lib/services';
import SplitHeadline from '@/components/sections/SplitHeadline';
import ServiceShowcase from '@/components/sections/ServiceShowcase';
import ProgressTimeline from '@/components/sections/ProgressTimeline';
import GiantCTA from '@/components/sections/GiantCTA';
import RevealFooter from '@/components/sections/RevealFooter';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'House & Office Cleaning Services | Yuma, Arizona',
  description: 'Professional cleaning services in Yuma: recurring house cleaning, deep cleaning, move-in/move-out, and commercial janitorial. Flat rates, same-week availability, guaranteed.',
  alternates: { canonical: `${SITE.url}/services` },
};

const SERVICES = [
  {
    id: 'recurring',
    name: 'Recurring Home Cleaning',
    price: 'from $89/visit',
    blurb: 'Weekly, bi-weekly, or monthly. The same cleaner every visit, working the same room-by-room checklist so your home stays consistently done, not occasionally rescued.',
    image: '/images/service-recurring.webp',
    includes: ['Kitchens: counters, sinks, exterior appliances, floors', 'Bathrooms: showers, tubs, toilets, mirrors, floors', 'All rooms: dusting, surfaces, floors, trash, tidying', 'Same cleaner, same checklist, every visit'],
  },
  {
    id: 'deep',
    name: 'Deep Cleaning',
    price: 'from $179',
    blurb: 'The seasonal reset. Everything in a standard clean, plus the places dust hides in a desert town baseboards, blinds, vents, grout, and inside the appliances.',
    image: '/images/service-deep.webp',
    includes: ['Baseboards, door frames, and light switches', 'Blinds, ceiling fans, and vents', 'Inside oven and refrigerator', 'Tile grout and shower glass detail'],
  },
  {
    id: 'move',
    name: 'Move-In / Move-Out',
    price: 'from $199',
    blurb: 'Built around landlord inspection checklists. For renters chasing a deposit, sellers prepping a listing, or landlords turning a unit fast.',
    image: '/images/service-move.webp',
    includes: ['Inside every cabinet, drawer, and closet', 'All appliances inside and out', 'Windows, tracks, and sills', 'Garage sweep-out on request'],
  },
  {
    id: 'office',
    name: 'Office & Commercial',
    price: 'custom quote',
    blurb: 'After-hours janitorial for offices, clinics, and storefronts. Keyed access, supply management, and a walk-through report after every service.',
    image: '/images/service-office.webp',
    includes: ['Nightly, weekly, or custom schedules', 'Restrooms, breakrooms, and floors', 'Trash, recycling, and consumables restock', 'Walk-through report after every service'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <main className="relative z-10 bg-[var(--paper)]">
        <section className="px-6 pb-16 pt-40 md:px-16">
          <SplitHeadline text="Every mess has a *plan*." />
          <p className="mt-6 max-w-lg text-lg text-[var(--body)]">
            Four services, flat rates, one guarantee: if anything isn't right, we re-clean it free within 24 hours.
          </p>
        </section>

        <ServiceShowcase services={SERVICES} />

        {/* Pet-safe specialization highlight */}
        <section className="px-6 py-12 md:px-16 bg-gradient-to-r from-emerald-50 to-blue-50">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-2xl border border-emerald-200 bg-white/80 p-8">
              <h3 className="text-2xl font-bold text-[var(--ink)] mb-3">🐾 Pet-safe cleaning available</h3>
              <p className="text-[var(--body)] mb-4">
                All our services work with pet-safe products (typically +$15–30 depending on home size).
                If you have animals—horses, dogs, cats, reptiles, birds—we use only non-toxic, zero-VOC cleaners
                verified safe by veterinary toxicologists.
              </p>
              <Link href="/pet-safe-cleaning"
                className="text-sm font-semibold text-[var(--accent)] hover:underline">
                Learn about our pet-safe approach →
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="mb-8 text-3xl md:text-4xl">Explore each service</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {SERVICE_LINKS.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group card-lift flex items-center justify-between rounded-xl border border-[var(--line)] bg-white/50 p-6 hover:border-[var(--accent)]"
              >
                <span className="text-lg text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">{s.shortName}</span>
                <span className="text-sm font-semibold text-[var(--accent)]">{s.price} <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span></span>
              </Link>
            ))}
          </div>
        </section>

        <ProgressTimeline />

        {/* Service Details Section */}
        <section className="px-6 py-20 md:px-16 bg-[var(--paper-light)]">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-12">What's included in each service</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {SERVICES.map((s) => (
                <div key={s.id} className="bg-white/50 backdrop-blur-sm border border-[var(--line)] rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[var(--ink)] mb-4">{s.name}</h3>
                  <ul className="space-y-2 mb-6">
                    {s.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[var(--body)]">
                        <span className="text-[var(--accent)] font-bold mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/services/breakdown" className="text-[var(--accent)] font-semibold hover:underline text-sm">
                    See full breakdown →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GiantCTA />
      </main>
      <RevealFooter />
    </>
  );
}
