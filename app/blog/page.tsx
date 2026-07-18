import type { Metadata } from 'next';
import Link from 'next/link';
import { GUIDES } from '@/lib/guides';
import { SITE } from '@/lib/site';
import GiantCTA from '@/components/sections/GiantCTA';
import RevealFooter from '@/components/sections/RevealFooter';

export const metadata: Metadata = {
  title: 'Cleaning Tips & Guides for Yuma Homes',
  description:
    'Learn how to clean grout, prep for haboob season, open your snowbird home, and more. Expert guides from a Yuma cleaning company.',
  alternates: { canonical: `${SITE.url}/blog` },
};

export default function BlogPage() {
  const byCategory = GUIDES.reduce(
    (acc, guide) => {
      if (!acc[guide.category]) acc[guide.category] = [];
      acc[guide.category].push(guide);
      return acc;
    },
    {} as Record<string, typeof GUIDES>
  );

  return (
    <>
      <main className="relative z-10 bg-[var(--paper)]">
        <section className="px-6 pb-4 pt-40 md:px-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--ink)] mb-4">
            Cleaning guides for Yuma homes
          </h1>
          <p className="max-w-2xl text-lg text-[var(--body)]">
            Expert advice on haboob cleanup, snowbird home prep, grout cleaning, and more. Written by local Yuma cleaners who've seen it all.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          {Object.entries(byCategory).map(([category, guides]) => (
            <div key={category} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-8">{category}</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {guides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/blog/${guide.slug}`}
                    className="group card-lift rounded-2xl border border-[var(--line)] bg-white/50 p-8 hover:border-[var(--accent)]"
                  >
                    <p className="mb-3 inline-block rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs tracking-[0.2em] uppercase text-[var(--accent)]">{guide.readTime} min read</p>
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--ink)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-[var(--body)] line-clamp-2 mb-4">{guide.excerpt}</p>
                    <p className="text-sm font-semibold text-[var(--accent)]">
                      Read article <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>

        <GiantCTA />
      </main>
      <RevealFooter />
    </>
  );
}
