import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import { GUIDES } from '@/lib/guides';
import { SITE } from '@/lib/site';
import { breadcrumbSchema } from '@/lib/schema';
import GiantCTA from '@/components/sections/GiantCTA';
import RevealFooter from '@/components/sections/RevealFooter';

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = GUIDES.find((g) => g.slug === slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | Clean Conviction Blog`,
    description: guide.excerpt,
    alternates: { canonical: `${SITE.url}/blog/${guide.slug}` },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = GUIDES.find((g) => g.slug === slug);
  if (!guide) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: guide.title,
    description: guide.excerpt,
    image: `${SITE.url}/opengraph-image`,
    datePublished: guide.published,
    dateModified: guide.published,
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: { '@type': 'Organization', name: SITE.name },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}/blog/${guide.slug}` },
  };

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: SITE.url },
    { name: 'Blog', url: `${SITE.url}/blog` },
    { name: guide.title, url: `${SITE.url}/blog/${guide.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <main className="relative z-10 bg-[var(--paper)]">
        <article className="mx-auto max-w-3xl px-6 py-20">
          <nav className="mb-8 text-sm">
            <Link href="/blog" className="text-[var(--accent)] hover:underline">
              ← Back to Blog
            </Link>
          </nav>

          <header className="mb-8">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--accent)] mb-4">
              {guide.category} • {guide.readTime} min read
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--ink)] mb-4">{guide.title}</h1>
            <p className="text-lg text-[var(--body)]">{guide.excerpt}</p>
          </header>

          <div className="prose prose-sm md:prose-base prose-headings:text-[var(--ink)] prose-a:text-[var(--accent)] max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: marked.parse(guide.content, { async: false }) as string }} />
          </div>

          <aside className="rounded-2xl border border-[var(--line)] bg-white/50 p-8 mb-12">
            <h3 className="text-2xl font-bold text-[var(--ink)] mb-4">Related Services</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {guide.relatedServices.map((service) => {
                const serviceMap: Record<string, { name: string; href: string }> = {
                  'house-cleaning': { name: 'House Cleaning', href: '/services/house-cleaning' },
                  'deep-cleaning': { name: 'Deep Cleaning', href: '/services/deep-cleaning' },
                  'move-out-cleaning': { name: 'Move-Out Cleaning', href: '/services/move-out-cleaning' },
                  'office-cleaning': { name: 'Office & Commercial Cleaning', href: '/services/office-cleaning' },
                };
                const s = serviceMap[service];
                return (
                  <Link key={service} href={s.href} className="text-[var(--accent)] hover:underline font-semibold">
                    {s.name} →
                  </Link>
                );
              })}
            </div>
          </aside>

          <aside className="rounded-2xl border border-[var(--line)] bg-white/50 p-8">
            <h3 className="text-2xl font-bold text-[var(--ink)] mb-4">Service Areas</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {guide.relatedAreas.map((area) => {
                const areaMap: Record<string, { name: string; href: string }> = {
                  yuma: { name: 'Yuma', href: '/areas/yuma' },
                  'fortuna-foothills': { name: 'Fortuna Foothills', href: '/areas/fortuna-foothills' },
                  somerton: { name: 'Somerton', href: '/areas/somerton' },
                  'san-luis': { name: 'San Luis', href: '/areas/san-luis' },
                  wellton: { name: 'Wellton', href: '/areas/wellton' },
                  winterhaven: { name: 'Winterhaven', href: '/areas/winterhaven' },
                };
                const a = areaMap[area];
                return (
                  <Link key={area} href={a.href} className="text-[var(--accent)] hover:underline font-semibold">
                    {a.name} →
                  </Link>
                );
              })}
            </div>
          </aside>
        </article>

        <GiantCTA />
      </main>
      <RevealFooter />
    </>
  );
}
