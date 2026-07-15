import type { Metadata } from 'next';
import Link from 'next/link';
import SplitHeadline from '@/components/sections/SplitHeadline';
import FlipCards from '@/components/sections/FlipCards';
import PricingCalculator from '@/components/sections/PricingCalculator';
import ComparisonMatrix from '@/components/sections/ComparisonMatrix';
import TestimonialTheater from '@/components/sections/TestimonialTheater';
import GiantCTA from '@/components/sections/GiantCTA';
import RevealFooter from '@/components/sections/RevealFooter';

export const metadata: Metadata = {
  title: 'Cleaning Prices in Yuma, AZ',
  description: 'Published flat-rate cleaning prices for Yuma, Arizona. Standard cleans from $129, deep cleans from $249, move-out cleans from $299. No surprises.',
};

const FAQ = [
  { q: 'Are these prices final?', a: 'The "from" price covers homes up to about 1,500 sq ft with 2 bathrooms. Larger homes get an exact flat quote before we book — never a surprise after.' },
  { q: 'Do I need to be home?', a: 'No. Most recurring clients give us a garage code or lockbox key. Every cleaner is background-checked, bonded, and insured.' },
  { q: 'Do you bring supplies?', a: 'Yes — everything, including a HEPA vacuum. Prefer your own products? Just leave them out and tell us once.' },
  { q: 'What if something isn’t cleaned right?', a: 'Tell us within 24 hours and we come back and re-clean it free. That’s the guarantee, no fine print.' },
  { q: 'How do recurring discounts work?', a: 'Weekly saves 20%, bi-weekly 15%, and monthly 10% off the standard rate — starting from the first recurring visit.' },
];

export default function PricingPage() {
  return (
    <>
      <main className="relative z-10 bg-[var(--paper)]">
        <section className="px-6 pb-4 pt-40 md:px-16">
          <SplitHeadline text="Prices we *publish*. Quotes we keep." />
          <p className="mt-6 max-w-lg text-lg text-[var(--body)]">
            Flat rates, listed in the open. Your quoted price is the price on the invoice — every time.
          </p>
        </section>

        <FlipCards />

        <PricingCalculator />

        <ComparisonMatrix />

        <section className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="mb-10 text-3xl md:text-4xl">Common questions</h2>
          <div className="divide-y divide-[var(--line)]">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg text-[var(--ink)]">
                  {f.q}
                  <span className="text-[var(--accent)] transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-xl text-[var(--body)]">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-10 text-sm text-[var(--body)]">
            Still unsure what your home needs? <Link href="/contact" className="text-[var(--accent)] underline underline-offset-4">Send the quote form</Link> — we reply within one business hour.
          </p>
        </section>

        <TestimonialTheater />
        <GiantCTA />
      </main>
      <RevealFooter />
    </>
  );
}
