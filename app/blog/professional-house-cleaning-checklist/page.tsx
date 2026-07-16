import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'The Ultimate House Cleaning Checklist | Clean Conviction',
  description: 'Professional house cleaning checklist based on what expert cleaners never skip. Room-by-room guide for a spotless home in Yuma.',
};

export default function BlogPost() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Cleaning Checklist', url: '/blog/professional-house-cleaning-checklist' },
  ];

  return (
    <main className="relative z-10 bg-[var(--paper)]">
      <article className="mx-auto max-w-3xl px-6 py-20 md:px-10">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--ink)] mb-4">
            The Ultimate House Cleaning Checklist: What Professionals Never Skip
          </h1>
          <p className="text-sm text-[var(--body)]/70 mb-8">
            Published on July 16, 2026 • In <span className="text-[var(--accent)]">Cleaning Tips</span>, <span className="text-[var(--accent)]">House Cleaning</span>
          </p>

          <div className="prose prose-invert max-w-none space-y-6 text-[var(--body)]">
            <p className="text-lg">
              Ever wonder how professional cleaners leave a home looking so spotless, so quickly?
            </p>

            <p>
              At Clean Conviction, our expert cleaning teams follow proven systems that make every visit thorough, consistent, and efficient. Whether you're cleaning up before guests arrive or trying to stay on top of your home between professional cleanings, having a checklist makes a big difference.
            </p>

            <p>
              Below, we're sharing the ultimate house cleaning checklist based on what we never skip—so you don't have to second-guess your own routine.
            </p>

            {/* Living Room */}
            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mt-8 mb-4">Living Room & Common Areas</h2>
              <p>These are the most used and most seen areas of the home, so we always focus on surfaces, dust buildup, and details.</p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>Dust all furniture, lamps, shelves, and décor</li>
                <li>Vacuum upholstery and under couch cushions</li>
                <li>Wipe baseboards and light switches</li>
                <li>Clean smudges from windows and glass doors</li>
                <li>Vacuum or mop floors (including corners and edges)</li>
                <li>Straighten pillows, blankets, and other soft items</li>
              </ul>
              <div className="bg-[var(--accent)]/10 border-l-4 border-[var(--accent)] p-4 my-6">
                <p className="font-semibold text-[var(--ink)]">Pro Tip:</p>
                <p>We use microfiber cloths to trap dust instead of just pushing it around. It makes a real difference in air quality and surface cleanliness.</p>
              </div>
            </section>

            {/* Kitchen */}
            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mt-8 mb-4">Kitchen</h2>
              <p>The kitchen is a high-traffic zone that needs more than a quick wipe-down. We make sure every surface is food-safe and spotless.</p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>Wipe and sanitize countertops</li>
                <li>Clean sink, faucet, and drain</li>
                <li>Wipe exterior of all appliances (fridge, microwave, oven)</li>
                <li>Clean stovetop and control knobs</li>
                <li>Spot clean cabinet fronts and handles</li>
                <li>Mop floors thoroughly</li>
              </ul>
              <div className="bg-[var(--accent)]/10 border-l-4 border-[var(--accent)] p-4 my-6">
                <p className="font-semibold text-[var(--ink)]">Bonus Tip:</p>
                <p>Ask about our deep-clean add-ons for inside appliances like ovens, refrigerators, and dishwashers. These catch the grime that daily cleaning misses.</p>
              </div>
            </section>

            {/* Bathrooms */}
            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mt-8 mb-4">Bathrooms</h2>
              <p>Bathrooms can collect grime quickly—so we never skimp here. Disinfection and attention to detail are key.</p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>Scrub and disinfect toilet (inside and out)</li>
                <li>Clean and sanitize sinks, tubs, and showers</li>
                <li>Polish mirrors and chrome fixtures</li>
                <li>Wipe cabinets and vanity fronts</li>
                <li>Sanitize high-touch areas (light switches, door handles)</li>
                <li>Empty trash and replace liners</li>
                <li>Mop floors with a disinfecting solution</li>
              </ul>
              <div className="bg-[var(--accent)]/10 border-l-4 border-[var(--accent)] p-4 my-6">
                <p className="font-semibold text-[var(--ink)]">Did You Know?</p>
                <p>In Yuma's desert climate, bathrooms collect hard water stains and soap scum faster than in humid regions. We use specialized techniques to keep your fixtures spotless year-round.</p>
              </div>
            </section>

            {/* Bedrooms */}
            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mt-8 mb-4">Bedrooms</h2>
              <p>A clean bedroom promotes better sleep and peace of mind. Here's what we do:</p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>Dust all surfaces and décor</li>
                <li>Make beds with fresh linens (if provided)</li>
                <li>Wipe nightstands and furniture</li>
                <li>Clean mirrors and windows</li>
                <li>Vacuum or mop floors</li>
                <li>Lightly freshen air or spray fabric-safe refresher</li>
              </ul>
              <div className="bg-[var(--accent)]/10 border-l-4 border-[var(--accent)] p-4 my-6">
                <p className="font-semibold text-[var(--ink)]">Level Up:</p>
                <p>Try a full-bedroom deep clean seasonally, including baseboard scrubbing, ceiling fan cleaning, and closet organization. We offer this as an add-on to your regular cleaning.</p>
              </div>
            </section>

            {/* Bonus Touches */}
            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mt-8 mb-4">Bonus Touches That Make a Big Impact</h2>
              <p>These are small details that often go unnoticed—unless they're skipped!</p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>Wipe down light switch plates and doorknobs</li>
                <li>Dust ceiling fans and vents</li>
                <li>Clean behind doors and under furniture</li>
                <li>Empty small trash bins</li>
                <li>Tidy entryways and wipe door glass</li>
                <li>Check for spider webs in corners and ceilings</li>
              </ul>
            </section>

            {/* CTA Section */}
            <section className="bg-[var(--accent)]/5 border border-[var(--accent)]/20 rounded-lg p-6 mt-10">
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-3">Prefer to Skip the Checklist? We've Got You Covered.</h2>
              <p className="mb-4">
                There's no shame in outsourcing the cleaning—especially to a team that's trained, trusted, and meticulous.
              </p>
              <p className="mb-4">
                At Clean Conviction, we're proud to serve Yuma and surrounding areas with flexible cleaning plans that fit your schedule and lifestyle. Whether it's weekly, bi-weekly, monthly, or a one-time deep clean, we follow this exact checklist (and more) on every visit.
              </p>
              <p className="mb-6">
                <strong>Here's what sets us apart:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Flat-rate pricing</strong> — no surprises, same price every time</li>
                <li><strong>Same cleaner every visit</strong> — they learn your home and your preferences</li>
                <li><strong>100% re-clean guarantee</strong> — not happy within 24 hours, we return free</li>
                <li><strong>Locally owned</strong> — we live and work in Yuma</li>
              </ul>
              <p className="mb-6">
                Get started today by <Link href="/contact" className="text-[var(--accent)] font-semibold hover:underline">requesting a free quote</Link> or calling us at <a href="tel:9282985509" className="text-[var(--accent)] font-semibold hover:underline">(928) 298-5509</a>.
              </p>
            </section>

            {/* Bottom CTA */}
            <div className="mt-10 pt-6 border-t border-[var(--line)]">
              <p className="text-center mb-4">Ready to enjoy a spotless home without the work?</p>
              <div className="flex justify-center gap-4">
                <Link href="/book" className="rounded-full bg-[var(--accent)] px-6 py-3 text-white font-medium hover:shadow-lg hover:shadow-[var(--accent)]/30 transition-all">
                  Book Your Cleaning
                </Link>
                <a href="/neighborhoods" className="rounded-full border border-[var(--accent)] px-6 py-3 text-[var(--accent)] font-medium hover:bg-[var(--accent)]/5 transition-all">
                  See Your Area
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
