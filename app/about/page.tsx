import type { Metadata } from 'next';
import Link from 'next/link';
import ReviewButton from '@/components/ReviewButton';
import SplitHeadline from '@/components/sections/SplitHeadline';
import ManifestoFill from '@/components/sections/ManifestoFill';
import StatCounters from '@/components/sections/StatCounters';
import TestimonialTheater from '@/components/sections/TestimonialTheater';
import GiantCTA from '@/components/sections/GiantCTA';
import RevealFooter from '@/components/sections/RevealFooter';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Clean Convictions is a locally owned cleaning company serving Yuma, Fortuna Foothills, Somerton, and the surrounding valley. No Compromise. No Dust.',
  alternates: { canonical: `${SITE.url}/about` },
};

const VALUES = [
  { title: 'Same faces, every time', body: 'You get a dedicated cleaner or pair, not whoever’s on shift. They learn your home once and keep it that way.' },
  { title: 'Checklists, not vibes', body: 'Every clean runs a printed room-by-room checklist, photographed at the end. Quality you can verify, not just feel.' },
  { title: 'Yuma-based, desert-tested', body: 'We live and work here. We know what desert dust does to blinds and what monsoon season does to floors — and we clean for it.' },
];

export default function AboutPage() {
  return (
    <>
      <main className="relative z-10 bg-[var(--paper)]">
        <section className="px-6 pb-16 pt-40 md:px-16">
          <SplitHeadline text="A local crew that treats your home like a *reputation*." />
          <p className="mt-6 max-w-lg text-lg text-[var(--body)]">
            {SITE.name} is locally owned and operated — built on repeat clients and referrals, not ad spend.
          </p>
        </section>

        <ManifestoFill />

        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl border border-[var(--line)] bg-white/60 p-8">
              <h3 className="text-2xl">{v.title}</h3>
              <p className="mt-3 text-[var(--body)]">{v.body}</p>
              {v.title === 'Checklists, not vibes' && (
                <a href="/cleaning-checklists.pdf" download className="mt-4 inline-block text-sm font-semibold text-[var(--accent)] hover:underline">
                  ↓ Download our checklists
                </a>
              )}
            </div>
          ))}
        </section>

        <StatCounters />

        {/* Community Care — quiet, dignified mention */}
        <section className="px-6 py-20 md:px-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-sm font-medium tracking-[0.2em] text-[var(--accent)] uppercase">Community Care</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-5 leading-tight">
              Once a month, one clean is on us.
            </h2>
            <p className="text-lg text-[var(--body)] leading-relaxed">
              Being local means more than knowing the dust. Every month we quietly clean one home in the valley,
              free, for a neighbor going through a hard stretch — illness, a loss, a new baby, a rough season.
              It&apos;s completely confidential: we never show the home or the person, and we never use it for
              marketing. That&apos;s the whole point.
            </p>
            <Link href="/community-care" className="mt-5 inline-block text-base font-semibold text-[var(--accent)] hover:underline">
              How Community Care works, or reach out for someone →
            </Link>
          </div>
        </section>

        <TestimonialTheater />

        {/* Review invitation for existing customers */}
        <section className="px-6 py-16 md:px-16 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--ink)] mb-3">Cleaned by us already?</h2>
            <p className="text-[var(--body)] mb-6">
              A quick, honest review helps other Yuma neighbors find us — and it means a lot to a brand-new local business.
            </p>
            <ReviewButton />
          </div>
        </section>

        <GiantCTA />
      </main>
      <RevealFooter />
    </>
  );
}
