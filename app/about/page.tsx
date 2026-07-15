import type { Metadata } from 'next';
import SplitHeadline from '@/components/sections/SplitHeadline';
import ManifestoFill from '@/components/sections/ManifestoFill';
import StatCounters from '@/components/sections/StatCounters';
import TestimonialTheater from '@/components/sections/TestimonialTheater';
import GiantCTA from '@/components/sections/GiantCTA';
import RevealFooter from '@/components/sections/RevealFooter';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Clean Conviction is a locally owned cleaning company serving Yuma, Fortuna Foothills, Somerton, and the surrounding valley. No Compromise. No Dust.',
};

const VALUES = [
  { title: 'Same faces, every time', body: 'You get a dedicated cleaner or pair, not whoever’s on shift. They learn your home once and keep it that way.' },
  { title: 'Checklists, not vibes', body: 'Every clean runs a printed room-by-room checklist, photographed at the end. Quality you can verify, not just feel.' },
  { title: 'Yuma born and based', body: 'We live here. We know what desert dust does to blinds and what monsoon season does to floors — and we clean for it.' },
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
            </div>
          ))}
        </section>

        <StatCounters />
        <TestimonialTheater />
        <GiantCTA />
      </main>
      <RevealFooter />
    </>
  );
}
