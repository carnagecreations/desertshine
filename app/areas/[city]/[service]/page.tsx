import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AREAS } from '@/lib/areas';
import { SERVICES, getService } from '@/lib/services';
import { SITE } from '@/lib/site';
import { serviceSchema, faqSchemaFrom, breadcrumbSchema } from '@/lib/schema';
import Breadcrumbs from '@/components/Breadcrumbs';
import SplitHeadline from '@/components/sections/SplitHeadline';
import GiantCTA from '@/components/sections/GiantCTA';
import RevealFooter from '@/components/sections/RevealFooter';

// 6 cities × 4 services = 24 hyper-local landing pages.
export function generateStaticParams() {
  return AREAS.flatMap((area) => SERVICES.map((s) => ({ city: area.slug, service: s.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string; service: string }> }): Promise<Metadata> {
  const { city, service } = await params;
  const area = AREAS.find((a) => a.slug === city);
  const s = getService(service);
  if (!area || !s) return {};
  return {
    title: `${s.shortName} in ${area.name}, AZ | ${s.price}`,
    description: `${s.shortName} in ${area.name} — ${s.tagline} Flat rates, flexible scheduling, 100% re-clean guarantee. Free quote.`,
    keywords: [...s.keywords, `${s.shortName.toLowerCase()} ${area.name.toLowerCase()}`, `cleaning ${area.name.toLowerCase()}`],
    alternates: { canonical: `${SITE.url}/areas/${area.slug}/${s.slug}` },
    openGraph: {
      title: `${s.shortName} in ${area.name}, AZ`,
      description: s.tagline,
      url: `${SITE.url}/areas/${area.slug}/${s.slug}`,
    },
  };
}

export default async function AreaServicePage({ params }: { params: Promise<{ city: string; service: string }> }) {
  const { city, service } = await params;
  const area = AREAS.find((a) => a.slug === city);
  const s = getService(service);
  if (!area || !s) notFound();

  const url = `${SITE.url}/areas/${area.slug}/${s.slug}`;
  const localAngle = s.localAngle.replace(/\{city\}/g, area.name);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `${s.shortName} in ${area.name}`, description: `${s.intro} ${localAngle}`, url, price: s.price.replace(/[^0-9]/g, '') || '0', serviceType: s.shortName, city: area.name })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaFrom(s.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Home', url: SITE.url },
        { name: 'Service Areas', url: `${SITE.url}/areas` },
        { name: area.name, url: `${SITE.url}/areas/${area.slug}` },
        { name: s.shortName, url },
      ])) }} />

      <main className="relative z-10 bg-[var(--paper)]">
        <Breadcrumbs items={[
          { name: 'Home', href: '/' },
          { name: 'Service Areas', href: '/areas' },
          { name: area.name, href: `/areas/${area.slug}` },
          { name: s.shortName },
        ]} />
        <section className="px-6 pb-4 pt-8 md:px-16">
          <p className="mb-4 text-sm tracking-[0.25em] uppercase text-[var(--accent)]">
            {area.name}, {area.zip} · {s.price}
          </p>
          <SplitHeadline text={`${s.shortName} in *${area.name}*.`} />
          <p className="mt-6 max-w-2xl text-lg text-[var(--body)]">{s.intro}</p>
          <p className="mt-4 max-w-2xl text-lg text-[var(--body)]">{localAngle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-[var(--accent)] px-6 py-3 font-medium text-white transition-transform duration-300 hover:scale-105">
              Get a free quote in {area.name}
            </Link>
            <a href={SITE.phoneHref} className="rounded-full border border-[var(--line)] px-6 py-3 font-medium text-[var(--ink)]">
              Call {SITE.phone}
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="mb-8 text-3xl md:text-4xl">What’s included in {area.name}</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {s.includes.map((item) => (
              <li key={item} className="flex gap-3 rounded-xl border border-[var(--line)] bg-white/50 p-5 text-[var(--body)]">
                <span className="font-bold text-[var(--accent)]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-[var(--body)]">
            {area.name} is a core service area — the same flat {s.price} rate as everywhere in Yuma County, never a travel fee.
          </p>
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

        <section className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="mb-10 text-3xl md:text-4xl">{s.shortName} questions</h2>
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

        <section className="mx-auto max-w-5xl px-6 py-8">
          <h2 className="mb-8 text-3xl md:text-4xl">Other services in {area.name}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {SERVICES.filter((o) => o.slug !== s.slug).map((o) => (
              <Link key={o.slug} href={`/areas/${area.slug}/${o.slug}`} className="group flex items-center justify-between rounded-xl border border-[var(--line)] bg-white/50 p-5 transition-colors hover:border-[var(--accent)]">
                <span className="text-[var(--ink)]">{o.shortName}</span>
                <span className="text-sm font-semibold text-[var(--accent)]">{o.price} →</span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm text-[var(--body)]">
            {s.shortName} also available in{' '}
            {AREAS.filter((a) => a.slug !== area.slug).map((a, i, arr) => (
              <span key={a.slug}>
                <Link href={`/areas/${a.slug}/${s.slug}`} className="text-[var(--accent)] underline underline-offset-4">
                  {a.name}
                </Link>
                {i < arr.length - 1 ? ' · ' : '.'}
              </span>
            ))}
          </p>
          <p className="mt-4 text-sm text-[var(--body)]">
            <Link href={`/areas/${area.slug}`} className="text-[var(--accent)] underline underline-offset-4">
              All cleaning services in {area.name} →
            </Link>
          </p>
        </section>

        <GiantCTA />
      </main>
      <RevealFooter />
    </>
  );
}
