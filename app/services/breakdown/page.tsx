import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'What\'s Included in Our Cleaning Services | Clean Convictions',
  description: 'Detailed breakdown of what\'s included in each of our cleaning services: recurring, deep clean, move-out, and commercial.',
  alternates: { canonical: `${SITE.url}/services/breakdown` },
};

export default function ServicesBreakdown() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'What\'s Included', url: '/services/breakdown' },
  ];

  return (
    <main className="relative z-10 bg-[var(--paper)]">
      <section className="pt-40 pb-12 px-6 md:px-16">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="mt-8 text-5xl md:text-6xl font-bold text-[var(--ink)] mb-6">
            What's Included in Every Clean
          </h1>
          <p className="text-lg text-[var(--body)] leading-relaxed max-w-3xl mb-8">
            We believe in transparency. Here's exactly what your Clean Convictions team handles on every visit—no surprises, no upsell surprises.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16 bg-[var(--paper-light)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-12">Recurring Home Cleaning</h2>
          <p className="text-lg text-[var(--body)] mb-8">Weekly, bi-weekly, or monthly service. Same cleaner every visit. Starting at $89/visit.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Living Areas & Bedrooms */}
            <div>
              <h3 className="text-xl font-bold text-[var(--accent)] mb-6">Living Areas & Bedrooms</h3>
              <ul className="space-y-3">
                {[
                  'Carpets vacuumed and edged',
                  'Windows and window tracks cleaned',
                  'Base boards dusted and wiped down',
                  'Vacuum, mop and dry hard floor surfaces',
                  'Stairs vacuumed',
                  'Flat areas damp cloth dusted',
                  'Mop and dry wood floors',
                  'Make beds',
                  'General dusting',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[var(--accent)] font-bold mt-1">›</span>
                    <span className="text-[var(--body)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bathroom */}
            <div>
              <h3 className="text-xl font-bold text-[var(--accent)] mb-6">Bathroom</h3>
              <ul className="space-y-3">
                {[
                  'Floors washed and disinfected',
                  'Mats vacuumed and edged',
                  'Mirrors cleaned and shined',
                  'Sink and counters cleaned and disinfected',
                  'Clean and disinfect toilet',
                  'Shine and clean chrome fixtures',
                  'Base boards dusted and wiped down',
                  'Wipe down outside and inside cabinets and drawers',
                  'General dusting',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[var(--accent)] font-bold mt-1">›</span>
                    <span className="text-[var(--body)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kitchen */}
            <div>
              <h3 className="text-xl font-bold text-[var(--accent)] mb-6">Kitchen</h3>
              <ul className="space-y-3">
                {[
                  'Sinks cleaned and disinfected, chrome shined',
                  'Clean windows and window tracks',
                  'Base boards dusted and wiped down',
                  'Clean small countertop appliances',
                  'Clean refrigerator exterior and interior',
                  'Wipe down inside and outside of microwave',
                  'Countertops cleaned and disinfected',
                  'Clean table and chairs',
                  'Trash emptied',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[var(--accent)] font-bold mt-1">›</span>
                    <span className="text-[var(--body)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Clean */}
      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-12">Deep Cleaning</h2>
          <p className="text-lg text-[var(--body)] mb-8">Everything in Recurring Cleaning, PLUS seasonal deep-clean items. Starting at $179.</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[var(--ink)] mb-6">Additional Deep Clean Includes:</h3>
              <ul className="space-y-3">
                {[
                  'Inside oven and refrigerator',
                  'Tile grout scrubbing',
                  'Shower glass detail cleaning',
                  'Baseboards and trim detailed scrub',
                  'Ceiling fans and vents cleaned',
                  'Inside cabinets and drawers',
                  'Blinds and window sills',
                  'Light switches and door handles (detailed)',
                  'Crown molding and corners',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[var(--accent)] font-bold mt-1">›</span>
                    <span className="text-[var(--body)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--accent)]/5 border border-[var(--accent)]/20 rounded-lg p-6">
              <h4 className="font-bold text-[var(--ink)] mb-4">Why Deep Clean?</h4>
              <p className="text-[var(--body)] mb-4">
                Deep cleaning targets areas that regular weekly cleaning can't reach. We recommend quarterly or semi-annual deep cleans to keep your home in pristine condition year-round.
              </p>
              <p className="text-sm text-[var(--body)]/80">
                Perfect for seasonal resets, preparing for guests, or when you notice buildup in hard-to-reach places.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Move-Out */}
      <section className="px-6 py-20 md:px-16 bg-[var(--paper-light)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-12">Move-In / Move-Out Cleaning</h2>
          <p className="text-lg text-[var(--body)] mb-8">Landlord inspection-ready. Built around deposit return and listing standards. Starting at $199.</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[var(--ink)] mb-6">Everything Includes:</h3>
              <ul className="space-y-3">
                {[
                  'All recurring cleaning items',
                  'All deep clean items',
                  'Inside every cabinet and drawer',
                  'All appliances inside and out (including oven)',
                  'Windows, tracks, and sills',
                  'Garage sweep-out (on request)',
                  'Baseboards and trim scrubbed',
                  'Grout and tile detail',
                  'Blinds and vents cleaned',
                  'Light fixtures cleaned',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[var(--accent)] font-bold mt-1">›</span>
                    <span className="text-[var(--body)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--accent)]/5 border border-[var(--accent)]/20 rounded-lg p-6">
              <h4 className="font-bold text-[var(--ink)] mb-4">Perfect For:</h4>
              <ul className="space-y-3 text-[var(--body)]">
                <li className="flex items-start gap-3">
                  <span className="font-bold">🏠</span>
                  <span><strong>Renters</strong> chasing their security deposit back</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">🔑</span>
                  <span><strong>Sellers</strong> prepping a home for listing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">🏘️</span>
                  <span><strong>Landlords</strong> turning units between tenants</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial */}
      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-12">Office & Commercial Cleaning</h2>
          <p className="text-lg text-[var(--body)] mb-8">After-hours janitorial service customized to your business. Custom pricing.</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[var(--ink)] mb-6">Standard Commercial Includes:</h3>
              <ul className="space-y-3">
                {[
                  'Nightly or weekly scheduling',
                  'Restrooms cleaned and disinfected',
                  'Breakrooms and common areas',
                  'Floors vacuumed and mopped',
                  'Trash removal and recycling',
                  'Consumables restocked (soap, towels)',
                  'Surface disinfection of high-touch areas',
                  'Walk-through report after every service',
                  'Keyed or fob access available',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[var(--accent)] font-bold mt-1">›</span>
                    <span className="text-[var(--body)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--accent)]/5 border border-[var(--accent)]/20 rounded-lg p-6">
              <h4 className="font-bold text-[var(--ink)] mb-4">Customizable For:</h4>
              <ul className="space-y-3 text-[var(--body)]">
                <li className="flex items-start gap-3">
                  <span className="font-bold">💼</span>
                  <span>Corporate offices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">🏥</span>
                  <span>Medical / dental clinics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">🏪</span>
                  <span>Retail storefronts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">🏢</span>
                  <span>Warehouse spaces</span>
                </li>
              </ul>
              <p className="text-sm text-[var(--body)]/80 mt-4">
                Contact us for a custom quote based on your square footage and cleaning needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="px-6 py-20 md:px-16 bg-[var(--paper-light)]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-8">Our Quality Promise</h2>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg border border-[var(--line)] p-8">
            <p className="text-lg text-[var(--body)] mb-6">
              Every member of the Clean Convictions team goes through rigorous, ongoing training to master the specialized cleaning techniques needed for our high standards. We require all employees to use our proven systems and methods that have built a track record of satisfied customers across Yuma County.
            </p>
            <p className="text-lg text-[var(--body)] mb-6">
              We use state-of-the-art products and equipment, and every cleaner follows the exact same checklist on every visit—ensuring consistency, quality, and peace of mind.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] font-bold">✓</span>
                <span><strong>Trained professionals</strong> — rigorous ongoing training program</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] font-bold">✓</span>
                <span><strong>Standardized systems</strong> — same checklist, every time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] font-bold">✓</span>
                <span><strong>Quality products</strong> — effective and safe for your home</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] font-bold">✓</span>
                <span><strong>100% guarantee</strong> — not happy within 24 hours, we return free</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-6">Ready to Experience the Difference?</h2>
          <p className="text-lg text-[var(--body)] mb-8">
            See exactly what we'll do for your home. Get a free quote tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="rounded-full bg-[var(--accent)] px-8 py-4 text-lg font-medium text-white hover:shadow-lg hover:shadow-[var(--accent)]/30 transition-all">
              Get a Free Quote
            </Link>
            <Link href="/book" className="rounded-full border-2 border-[var(--accent)] px-8 py-4 text-lg font-medium text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all">
              Book Your Cleaning
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
