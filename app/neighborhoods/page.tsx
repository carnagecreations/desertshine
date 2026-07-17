import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';

export const metadata: Metadata = {
  title: 'Neighborhoods & Communities | Clean Convictions',
  description: 'Professional cleaning services for Yuma neighborhoods, RV parks, and mobile home communities. Serving Mesa Del Sol, The Palms, Country Roads, and more.',
};

export default function NeighborhoodsPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Neighborhoods', url: '/neighborhoods' },
  ];

  const neighborhoods = NEIGHBORHOODS.filter((n) => n.type === 'neighborhood');
  const rvParks = NEIGHBORHOODS.filter((n) => n.type === 'rv-park');
  const familyParks = NEIGHBORHOODS.filter((n) => n.type === 'family-park');

  const NeighborhoodCard = ({ item }: { item: typeof NEIGHBORHOODS[0] }) => (
    <Link href={`/neighborhoods/${item.slug}`} className="group">
      <div className="relative overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm border border-[var(--line)] transition-all hover:border-[var(--accent)] hover:shadow-lg hover:shadow-[var(--accent)]/10 h-full">
        <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[var(--accent)]/20 via-[var(--accent)]/10 to-transparent flex items-center justify-center">
          <div className="text-center px-4">
            <p className="text-xs text-[var(--body)] uppercase tracking-widest mb-2">{item.type === 'neighborhood' ? 'Neighborhood' : item.type === 'rv-park' ? 'RV Park' : 'Family Community'}</p>
            <h3 className="text-xl md:text-2xl font-bold text-[var(--ink)] leading-tight">{item.name}</h3>
            <p className="text-xs text-[var(--body)]/70 mt-1">{item.city}</p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-sm text-[var(--body)] leading-relaxed mb-4 line-clamp-2">{item.description}</p>
          <p className="text-xs text-[var(--body)]/60 group-hover:text-[var(--accent)] transition-colors">
            View services →
          </p>
        </div>
      </div>
    </Link>
  );

  return (
    <main className="relative z-10 bg-[var(--paper)]">
      <section className="pt-40 pb-12 px-6 md:px-16">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--ink)] mb-6">
              Cleaning for Yuma neighborhoods & communities
            </h1>
            <p className="text-lg text-[var(--body)] leading-relaxed max-w-2xl">
              From upscale foothills neighborhoods to RV resorts and family parks, we serve all of Yuma County with the same flat-rate pricing and 100% re-clean guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      {neighborhoods.length > 0 && (
        <section className="px-6 py-20 md:px-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-12">Neighborhoods</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {neighborhoods.map((item) => (
                <NeighborhoodCard key={item.slug} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RV Parks & Resorts */}
      {rvParks.length > 0 && (
        <section className="px-6 py-20 md:px-16 bg-[var(--paper-light)]">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-12">RV Parks & Resorts</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rvParks.map((item) => (
                <NeighborhoodCard key={item.slug} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Family Parks */}
      {familyParks.length > 0 && (
        <section className="px-6 py-20 md:px-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-12">Family Communities</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {familyParks.map((item) => (
                <NeighborhoodCard key={item.slug} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl md:text-5xl text-[var(--ink)]">Not your neighborhood listed?</h2>
          <p className="mb-8 text-lg text-[var(--body)] leading-relaxed">
            We serve all of Yuma County at the same flat rates. Call or get a quote for your specific location.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 text-lg font-medium text-white transition-all hover:shadow-lg hover:shadow-[var(--accent)]/30 hover:scale-105"
          >
            Get a free quote ↗
          </a>
        </div>
      </section>
    </main>
  );
}
