import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AREAS } from '@/lib/areas';
import { SITE } from '@/lib/site';
import { breadcrumbSchema } from '@/lib/schema';
import SplitHeadline from '@/components/sections/SplitHeadline';
import GiantCTA from '@/components/sections/GiantCTA';
import RevealFooter from '@/components/sections/RevealFooter';

export function generateStaticParams() {
  return AREAS.map((area) => ({ city: area.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const area = AREAS.find((a) => a.slug === city);
  if (!area) return {};
  return {
    title: `${area.headline} | Flat Rates & Free Quotes`,
    description: `${area.intro.slice(0, 140)}…`,
    alternates: { canonical: `${SITE.url}/areas/${area.slug}` },
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const area = AREAS.find((a) => a.slug === city);
  if (!area) notFound();

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: area.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'House cleaning',
    name: area.headline,
    provider: { '@type': 'LocalBusiness', name: SITE.name, url: SITE.url, telephone: SITE.phone },
    areaServed: { '@type': 'City', name: area.name },
    url: `${SITE.url}/areas/${area.slug}`,
  };

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: SITE.url },
    { name: 'Service Areas', url: `${SITE.url}/areas` },
    { name: area.name, url: `${SITE.url}/areas/${area.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <main className="relative z-10 bg-[var(--paper)]">
        <section className="px-6 pb-4 pt-40 md:px-16">
          <p className="mb-4 text-sm tracking-[0.25em] uppercase text-[var(--accent)]">
            Serving {area.name}, {area.zip}
          </p>
          <SplitHeadline text={`Cleaning that knows *${area.name}*.`} />
          <p className="mt-6 max-w-2xl text-lg text-[var(--body)]">{area.intro}</p>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="mb-8 text-3xl md:text-4xl">What {area.name} homes need</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {area.localNotes.map((note) => (
              <li key={note} className="flex gap-3 rounded-xl border border-[var(--line)] bg-white/50 p-5 text-[var(--body)]">
                <span className="font-bold text-[var(--accent)]">✓</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-8">
          <h2 className="mb-8 text-3xl md:text-4xl">Services in {area.name}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { name: 'Recurring Home Cleaning', price: 'from $129/visit' },
              { name: 'Deep Cleaning', price: 'from $249' },
              { name: 'Move-In / Move-Out', price: 'from $299' },
              { name: 'Office & Commercial', price: 'custom quote' },
            ].map((s) => (
              <Link
                key={s.name}
                href="/services"
                className="group flex items-center justify-between rounded-xl border border-[var(--line)] bg-white/50 p-5 transition-colors hover:border-[var(--accent)]"
              >
                <span className="text-[var(--ink)]">{s.name}</span>
                <span className="text-sm font-semibold text-[var(--accent)]">{s.price} →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="mb-10 text-3xl md:text-4xl">{area.name} questions</h2>
          <div className="divide-y divide-[var(--line)]">
            {area.faqs.map((f) => (
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
            We also serve{' '}
            {AREAS.filter((a) => a.slug !== area.slug).map((a, i, arr) => (
              <span key={a.slug}>
                <Link href={`/areas/${a.slug}`} className="text-[var(--accent)] underline underline-offset-4">
                  {a.name}
                </Link>
                {i < arr.length - 1 ? ' · ' : '.'}
              </span>
            ))}
          </p>
        </section>

        <GiantCTA />
      </main>
      <RevealFooter />
    </>
  );
}
