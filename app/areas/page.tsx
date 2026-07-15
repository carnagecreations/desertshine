import type { Metadata } from 'next';
import Link from 'next/link';
import { AREAS } from '@/lib/areas';
import { SITE } from '@/lib/site';
import SplitHeadline from '@/components/sections/SplitHeadline';
import GiantCTA from '@/components/sections/GiantCTA';
import RevealFooter from '@/components/sections/RevealFooter';

export const metadata: Metadata = {
  title: 'Service Areas — Cleaning Across Yuma County, AZ',
  description:
    'Desert Shine cleans homes and offices in Yuma, Fortuna Foothills, Somerton, San Luis, Wellton, and Winterhaven. Same flat rates everywhere — no travel fees.',
  alternates: { canonical: `${SITE.url}/areas` },
};

export default function AreasPage() {
  return (
    <>
      <main className="relative z-10 bg-[var(--paper)]">
        <section className="px-6 pb-4 pt-40 md:px-16">
          <SplitHeadline text="One flat rate. *Every* corner of the county." />
          <p className="mt-6 max-w-2xl text-lg text-[var(--body)]">
            From the river to the foothills, we run weekly routes across Yuma County — same published prices in every
            zip code, never a travel fee.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group rounded-2xl border border-[var(--line)] bg-white/50 p-8 transition-colors hover:border-[var(--accent)]"
              >
                <p className="mb-2 text-xs tracking-[0.2em] uppercase text-[var(--accent)]">{area.zip}</p>
                <h2 className="mb-3 text-2xl text-[var(--ink)]">{area.name}</h2>
                <p className="text-sm text-[var(--body)] line-clamp-2">{area.intro}</p>
                <p className="mt-4 text-sm font-semibold text-[var(--accent)]">
                  See {area.name} services <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </p>
              </Link>
            ))}
          </div>
        </section>

        <GiantCTA />
      </main>
      <RevealFooter />
    </>
  );
}
