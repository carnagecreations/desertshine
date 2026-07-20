import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import GiantCTA from '@/components/sections/GiantCTA';
import PriceEstimator from '@/components/PriceEstimator';
import { SITE } from '@/lib/site';
import { faqSchemaFrom } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'House Cleaning Prices in Yuma, AZ — Instant Flat-Rate Estimator',
  description: 'See house cleaning prices for Yuma up front: recurring from $89, deep cleans from $179, move-outs from $199. Dial in your home for an instant flat-rate estimate.',
  alternates: { canonical: `${SITE.url}/pricing` },
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
      {/* FAQPage schema for the visible FAQ below — eligible for rich results */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaFrom(FAQ)) }} />
      <section className="relative overflow-hidden pt-40 pb-12 px-6 md:px-16">
        {/* Ambient backdrop — echoes the estimator console below */}
        <div aria-hidden className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(13,59,92,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(13,59,92,.04)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div aria-hidden className="pointer-events-none absolute -top-24 right-[10%] h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="mt-8 text-5xl md:text-6xl font-bold text-[var(--ink)] mb-6">
            Dial in your home. <span className="italic text-[var(--accent)]">Watch the number.</span>
          </h1>
          <p className="text-lg text-[var(--body)] leading-relaxed max-w-3xl">
            No &ldquo;request a quote and wait&rdquo; games. Feed the machine your details and get a live flat-rate estimate —
            built on the same published rates we quote by phone.
          </p>
          <p className="mt-4 text-lg text-[var(--body)] leading-relaxed max-w-3xl">
            Most companies hide their prices until they&apos;ve sized you up.
            We publish ours — <span className="font-semibold text-[var(--ink)]">so you can size us up</span>.
          </p>
        </div>
      </section>

      {/* Estimate Engine */}
      <section className="px-4 pb-8 md:px-16">
        <div className="mx-auto max-w-5xl">
          <PriceEstimator targetPage="book" />
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-[var(--body)]">
            <span className="flex items-center gap-2"><span className="text-[var(--accent)]">✓</span> Rates published in the open</span>
            <span className="flex items-center gap-2"><span className="text-[var(--accent)]">✓</span> Math shown line by line</span>
            <span className="flex items-center gap-2"><span className="text-[var(--accent)]">✓</span> 24-hour re-clean guarantee</span>
          </div>
          <p className="mt-4 text-center text-sm text-[var(--body)]">
            Published base rates: Standard from $89 · Deep clean from $179 · Move-in/out from $199 · Commercial custom ·{' '}
            <Link href="/services/breakdown" className="text-[var(--accent)] font-semibold hover:underline">See everything included →</Link>
          </p>
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
            Still have questions? <Link href="/contact" className="text-[var(--accent)] font-semibold hover:underline">Contact us</Link> — or call <a href={SITE.phoneHref} className="text-[var(--accent)] hover:underline">{SITE.phone}</a>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <GiantCTA />
    </main>
  );
}
