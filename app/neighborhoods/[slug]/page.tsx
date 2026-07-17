import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getNeighborhoodBySlug, NEIGHBORHOODS } from '@/lib/neighborhoods';
import { breadcrumbSchema } from '@/lib/schema';
import { SITE } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceShowcase from '@/components/sections/ServiceShowcase';
import FaqSection from '@/components/sections/FaqSection';
import GiantCTA from '@/components/sections/GiantCTA';

export function generateStaticParams() {
  return NEIGHBORHOODS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const neighborhood = getNeighborhoodBySlug(slug);
  if (!neighborhood) return {};

  return {
    title: `House Cleaning in ${neighborhood.name}, ${neighborhood.city} AZ | Clean Convictions`,
    description: `House, deep, and move-out cleaning near ${neighborhood.name} in ${neighborhood.city}, AZ. Flat-rate pricing from $89, same-week availability, and a 100% re-clean guarantee. ${neighborhood.description}`,
    alternates: { canonical: `${SITE.url}/neighborhoods/${neighborhood.slug}` },
  };
}

export default async function NeighborhoodPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const neighborhood = getNeighborhoodBySlug(slug);
  if (!neighborhood) notFound();

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Neighborhoods', url: '/neighborhoods' },
    { name: neighborhood.name, url: `/neighborhoods/${neighborhood.slug}` },
  ];

  const services = [
    {
      id: 'recurring',
      name: 'Recurring Home Cleaning',
      price: 'from $89/visit',
      blurb: `Weekly, bi-weekly, or monthly service for ${neighborhood.name} residents. Same cleaner every visit ensures consistency and familiarity with your home.`,
      image: '/images/service-recurring.webp',
      includes: ['Kitchens: counters, sinks, exterior appliances, floors', 'Bathrooms: showers, tubs, toilets, mirrors, floors', 'All rooms: dusting, surfaces, floors, trash, tidying', 'Same cleaner, same checklist, every visit'],
    },
    {
      id: 'deep',
      name: 'Deep Cleaning',
      price: 'from $179',
      blurb: `Seasonal reset for ${neighborhood.name} properties. Everything in a standard clean, plus baseboards, blinds, vents, grout, and inside appliances.`,
      image: '/images/service-deep.webp',
      includes: ['Baseboards, door frames, and light switches', 'Blinds, ceiling fans, and vents', 'Inside oven and refrigerator', 'Tile grout and shower glass detail'],
    },
    {
      id: 'move',
      name: 'Move-In / Move-Out',
      price: 'from $199',
      blurb: `Landlord inspection-ready cleaning for ${neighborhood.name} turnover. Perfect for renters, sellers, and landlords.`,
      image: '/images/service-move.webp',
      includes: ['Inside every cabinet, drawer, and closet', 'All appliances inside and out', 'Windows, tracks, and sills', 'Garage sweep-out on request'],
    },
    {
      id: 'office',
      name: 'Office & Commercial',
      price: 'custom quote',
      blurb: `After-hours janitorial service for ${neighborhood.name} businesses. Keyed access, supply management, and walk-through reports.`,
      image: '/images/service-office.webp',
      includes: ['Nightly, weekly, or custom schedules', 'Restrooms, breakrooms, and floors', 'Trash, recycling, and consumables restock', 'Walk-through report after every service'],
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Clean Convictions — ${neighborhood.name}`,
    url: `${SITE.url}/neighborhoods/${neighborhood.slug}`,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: neighborhood.city,
      addressRegion: 'AZ',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: neighborhood.latitude,
      longitude: neighborhood.longitude,
    },
    areaServed: {
      '@type': 'City',
      name: neighborhood.name,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <main className="relative z-10 bg-[var(--paper)]">
        <section className="pt-40 pb-12 px-6 md:px-16">
          <div className="mx-auto max-w-6xl">
            <Breadcrumbs items={breadcrumbs} />
            <div className="mt-8">
              <p className="text-sm tracking-widest uppercase text-[var(--body)] mb-4">{neighborhood.city}, Arizona</p>
              <h1 className="text-5xl md:text-6xl font-bold text-[var(--ink)] mb-6">{neighborhood.name}</h1>
              <p className="text-lg text-[var(--body)] leading-relaxed max-w-2xl">{neighborhood.description}</p>
              <p className="text-base text-[var(--body)]/80 mt-4">{neighborhood.audience}</p>
            </div>
          </div>
        </section>

        <ServiceShowcase services={services} />

        <section className="px-6 py-20 md:px-16 bg-[var(--paper-light)]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-4xl md:text-5xl text-[var(--ink)]">Why {neighborhood.name} residents choose us</h2>
            <ul className="space-y-4 text-lg text-[var(--body)] leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] font-bold mt-1">✓</span>
                <span>Flat-rate pricing — no surprises, same price every time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] font-bold mt-1">✓</span>
                <span>100% re-clean guarantee — not happy within 24 hours, we return free</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] font-bold mt-1">✓</span>
                <span>Same cleaner every visit — builds trust and knows your home</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] font-bold mt-1">✓</span>
                <span>Locally owned — we live and work in the Yuma area</span>
              </li>
            </ul>
          </div>
        </section>

        <FaqSection />

        <GiantCTA />
      </main>
    </>
  );
}
