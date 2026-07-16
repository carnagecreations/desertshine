import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import GiantCTA from '@/components/sections/GiantCTA';

export const metadata: Metadata = {
  title: 'Transparent Cleaning Prices in Yuma, AZ | Flat-Rate Pricing',
  description: 'See our published prices for house and office cleaning in Yuma. Recurring from $129, deep cleans from $249, move-outs from $299. No hidden fees—flat rates every time.',
};

const FAQ = [
  { q: 'Are these prices final?', a: 'The "from" price covers homes up to about 1,500 sq ft with 2 bathrooms. Larger homes get an exact flat quote before we book — never a surprise after.' },
  { q: 'Do I need to be home?', a: 'No. Most recurring clients give us a garage code or lockbox key, and we lock up when we leave.' },
  { q: 'Do you bring supplies?', a: 'Yes — everything, including cleaning supplies and equipment. Prefer your own products? Just let us know.' },
  { q: 'What if something isn\'t cleaned right?', a: 'Tell us within 24 hours and we come back and re-clean it free. That\'s the guarantee, no fine print.' },
  { q: 'How do recurring discounts work?', a: 'Weekly saves 20%, bi-weekly 15%, and monthly 10% off the standard rate — starting from the first recurring visit.' },
];

export default function PricingPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Pricing', url: '/pricing' },
  ];

  return (
    <main className="relative z-10 bg-[var(--paper)]">
      <section className="pt-40 pb-12 px-6 md:px-16">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="mt-8 text-5xl md:text-6xl font-bold text-[var(--ink)] mb-6">
            Prices we publish. Quotes we keep.
          </h1>
          <p className="text-lg text-[var(--body)] leading-relaxed max-w-3xl">
            Flat rates, listed in the open. Your quoted price is the price on the invoice — every time. No surprises, no hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 py-20 md:px-16 bg-[var(--paper-light)]">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Recurring */}
            <div className="bg-white/50 backdrop-blur-sm border border-[var(--line)] rounded-2xl p-6 hover:border-[var(--accent)] transition-colors">
              <h3 className="text-xl font-bold text-[var(--ink)] mb-2">Recurring Home Cleaning</h3>
              <p className="text-sm text-[var(--body)] mb-6">Weekly, bi-weekly, or monthly</p>
              <div className="mb-6">
                <p className="text-4xl font-bold text-[var(--accent)]">$129</p>
                <p className="text-sm text-[var(--body)]">from per visit</p>
              </div>
              <ul className="text-sm text-[var(--body)] space-y-2 mb-6">
                <li>✓ Same cleaner every visit</li>
                <li>✓ 20% discount on weekly</li>
                <li>✓ Full room-by-room checklist</li>
              </ul>
              <a href="/services/breakdown" className="text-[var(--accent)] font-semibold text-sm hover:underline">See what is included →</a>
            </div>

            {/* Deep Clean */}
            <div className="bg-white/50 backdrop-blur-sm border border-[var(--line)] rounded-2xl p-6 hover:border-[var(--accent)] transition-colors">
              <h3 className="text-xl font-bold text-[var(--ink)] mb-2">Deep Cleaning</h3>
              <p className="text-sm text-[var(--body)] mb-6">Seasonal reset</p>
              <div className="mb-6">
                <p className="text-4xl font-bold text-[var(--accent)]">$249</p>
                <p className="text-sm text-[var(--body)]">from per visit</p>
              </div>
              <ul className="text-sm text-[var(--body)] space-y-2 mb-6">
                <li>✓ Everything in recurring</li>
                <li>✓ Inside appliances</li>
                <li>✓ Grout & detail work</li>
              </ul>
              <a href="/services/breakdown" className="text-[var(--accent)] font-semibold text-sm hover:underline">See what is included →</a>
            </div>

            {/* Move-Out */}
            <div className="bg-white/50 backdrop-blur-sm border border-[var(--line)] rounded-2xl p-6 hover:border-[var(--accent)] transition-colors">
              <h3 className="text-xl font-bold text-[var(--ink)] mb-2">Move-In / Move-Out</h3>
              <p className="text-sm text-[var(--body)] mb-6">Inspection-ready</p>
              <div className="mb-6">
                <p className="text-4xl font-bold text-[var(--accent)]">$299</p>
                <p className="text-sm text-[var(--body)]">from per visit</p>
              </div>
              <ul className="text-sm text-[var(--body)] space-y-2 mb-6">
                <li>✓ Everything in deep clean</li>
                <li>✓ Every cabinet inside</li>
                <li>✓ Deposit-ready standard</li>
              </ul>
              <a href="/services/breakdown" className="text-[var(--accent)] font-semibold text-sm hover:underline">See what is included →</a>
            </div>

            {/* Commercial */}
            <div className="bg-white/50 backdrop-blur-sm border border-[var(--line)] rounded-2xl p-6 hover:border-[var(--accent)] transition-colors">
              <h3 className="text-xl font-bold text-[var(--ink)] mb-2">Office & Commercial</h3>
              <p className="text-sm text-[var(--body)] mb-6">After-hours janitorial</p>
              <div className="mb-6">
                <p className="text-3xl font-bold text-[var(--accent)]">Custom</p>
                <p className="text-sm text-[var(--body)]">based on size and schedule</p>
              </div>
              <ul className="text-sm text-[var(--body)] space-y-2 mb-6">
                <li>✓ Nightly or weekly</li>
                <li>✓ Keyed access available</li>
                <li>✓ Walk-through reports</li>
              </ul>
              <a href="/contact" className="text-[var(--accent)] font-semibold text-sm hover:underline">Get custom quote →</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-12">Common questions</h2>
          <div className="divide-y divide-[var(--line)]">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors">
                  {f.q}
                  <span className="text-[var(--accent)] transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[var(--body)]">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-10 text-[var(--body)]">
            Still have questions? <Link href="/contact" className="text-[var(--accent)] font-semibold hover:underline">Get a free quote</Link> — we reply within one business hour.
          </p>
        </div>
      </section>

      {/* CTA */}
      <GiantCTA />
    </main>
  );
}
