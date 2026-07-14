import type { Metadata } from 'next';
import SplitHeadline from '@/components/sections/SplitHeadline';
import ServiceShowcase from '@/components/sections/ServiceShowcase';
import ProgressTimeline from '@/components/sections/ProgressTimeline';
import GiantCTA from '@/components/sections/GiantCTA';
import RevealFooter from '@/components/sections/RevealFooter';

export const metadata: Metadata = {
  title: 'Cleaning Services in Yuma, AZ',
  description: 'Recurring house cleaning, deep cleaning, move-in/move-out cleaning, and commercial janitorial in Yuma, Arizona. Flat rates, checklists, guaranteed.',
};

const SERVICES = [
  {
    id: 'recurring',
    name: 'Recurring Home Cleaning',
    price: 'from $129/visit',
    blurb: 'Weekly, bi-weekly, or monthly. The same cleaner every visit, working the same room-by-room checklist so your home stays consistently done, not occasionally rescued.',
    image: '/images/service-recurring.webp',
    includes: ['Kitchens: counters, sinks, exterior appliances, floors', 'Bathrooms: showers, tubs, toilets, mirrors, floors', 'All rooms: dusting, surfaces, floors, trash, tidying', 'Same cleaner, same checklist, every visit'],
  },
  {
    id: 'deep',
    name: 'Deep Cleaning',
    price: 'from $249',
    blurb: 'The seasonal reset. Everything in a standard clean, plus the places dust hides in a desert town baseboards, blinds, vents, grout, and inside the appliances.',
    image: '/images/service-deep.webp',
    includes: ['Baseboards, door frames, and light switches', 'Blinds, ceiling fans, and vents', 'Inside oven and refrigerator', 'Tile grout and shower glass detail'],
  },
  {
    id: 'move',
    name: 'Move-In / Move-Out',
    price: 'from $299',
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
    includes: ['Nightly, weekly, or custom schedules', 'Restrooms, breakrooms, and floors', 'Trash, recycling, and consumables restock', 'Insured and background-checked staff'],
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

        <ProgressTimeline />
        <GiantCTA />
      </main>
      <RevealFooter />
    </>
  );
}
