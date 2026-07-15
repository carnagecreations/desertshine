import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SERVICES, getService } from '@/lib/services';
import { AREAS } from '@/lib/areas';
import { GUIDES } from '@/lib/guides';
import { SITE } from '@/lib/site';
import { serviceSchema, faqSchemaFrom, breadcrumbSchema } from '@/lib/schema';
import SplitHeadline from '@/components/sections/SplitHeadline';
import GiantCTA from '@/components/sections/GiantCTA';
import RevealFooter from '@/components/sections/RevealFooter';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service } = await params;
  const s = getService(service);
  if (!s) return {};
  return {
    title: `${s.name} in Yuma, AZ | ${s.price}`,
    description: `${s.tagline} ${s.intro.slice(0, 90)}…`,
    keywords: s.keywords,
    alternates: { canonical: `${SITE.url}/services/${s.slug}` },
    openGraph: {
      title: `${s.name} in Yuma, AZ`,
      description: s.tagline,
      url: `${SITE.url}/services/${s.slug}`,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const s = getService(service);
  if (!s) notFound();

  const url = `${SITE.url}/services/${s.slug}`;
  const guides = GUIDES.filter((g) => s.relatedGuides.includes(g.slug));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: s.name, description: s.intro, url, price: s.price.replace(/[^0-9]/g, '') || '0', serviceType: s.shortName })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaFrom(s.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Home', url: SITE.url },
        { name: 'Services', url: `${SITE.url}/services` },
        { name: s.shortName, url },
      ])) }} />

      <main className="relative z-10 bg-[var(--paper)]">
        <section className="px-6 pb-4 pt-40 md:px-16">
          <p className="mb-4 text-sm tracking-[0.25em] uppercase text-[var(--accent)]">{s.eyebrow} · {s.price}</p>
          <SplitHeadline text={`${s.name} in *Yuma*.`} />
          <p className="mt-6 max-w-2xl text-lg text-[var(--body)]">{s.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-[var(--accent)] px-6 py-3 font-medium text-white transition-transform duration-300 hover:scale-105">
              Get a free quote
            </Link>
            <a href={SITE.phoneHref} className="rounded-full border border-[var(--line)] px-6 py-3 font-medium text-[var(--ink)]">
              Call {SITE.phone}
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="mb-8 text-3xl md:text-4xl">What’s included</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {s.includes.map((item) => (
              <li key={item} className="flex gap-3 rounded-xl border border-[var(--line)] bg-white/50 p-5 text-[var(--body)]">
                <span className="font-bold text-[var(--accent)]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-8">
          <h2 className="mb-8 text-3xl md:text-4xl">How it works</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {s.process.map((p, i) => (
              <div key={p.step} className="rounded-2xl border border-[var(--line)] bg-white/50 p-6">
                <span className="text-3xl font-bold text-[var(--accent)]">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-xl text-[var(--ink)]">{p.step}</h3>
                <p className="mt-2 text-sm text-[var(--body)]">{p.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="mb-3 text-3xl md:text-4xl">{s.shortName} across Yuma County</h2>
          <p className="mb-8 max-w-2xl text-[var(--body)]">Same flat rate in every service area — never a travel fee.</p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {AREAS.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}/${s.slug}`}
                className="group flex items-center justify-between rounded-xl border border-[var(--line)] bg-white/50 p-5 transition-colors hover:border-[var(--accent)]"
              >
                <span className="text-[var(--ink)]">{s.shortName} in {a.name}</span>
                <span className="text-[var(--accent)]">→</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="mb-10 text-3xl md:text-4xl">Common questions</h2>
          <div className="divide-y divide-[var(--line)]">
            {s.faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg text-[var(--ink)]">
                  {f.q}
                  <span className="text-[var(--accent)] transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-xl text-[var(--body)]">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {guides.length > 0 && (
          <section className="mx-auto max-w-5xl px-6 py-8">
            <h2 className="mb-8 text-3xl md:text-4xl">Related reading</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {guides.map((g) => (
                <Link key={g.slug} href={`/blog/${g.slug}`} className="group rounded-2xl border border-[var(--line)] bg-white/50 p-6 transition-colors hover:border-[var(--accent)]">
                  <p className="text-xs tracking-[0.2em] uppercase text-[var(--accent)]">{g.category}</p>
                  <h3 className="mt-2 text-lg text-[var(--ink)]">{g.title}</h3>
                  <p className="mt-2 text-sm text-[var(--body)]">{g.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mx-auto max-w-5xl px-6 py-8">
          <h2 className="mb-8 text-3xl md:text-4xl">Other services</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {SERVICES.filter((o) => o.slug !== s.slug).map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="group flex items-center justify-between rounded-xl border border-[var(--line)] bg-white/50 p-5 transition-colors hover:border-[var(--accent)]">
                <span className="text-[var(--ink)]">{o.shortName}</span>
                <span className="text-sm font-semibold text-[var(--accent)]">{o.price} →</span>
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
