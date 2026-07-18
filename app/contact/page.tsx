import type { Metadata } from 'next';
import PriceEstimator from '@/components/PriceEstimator';
import RevealFooter from '@/components/sections/RevealFooter';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Get a Free Quote',
  description: 'Get a flat-rate cleaning quote for your Yuma home or office. Dial in your home details and see your estimate instantly.',
  alternates: { canonical: `${SITE.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <main className="relative z-10 bg-[var(--paper)]">
        <section className="pt-40 pb-12 px-6 md:px-16">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--ink)] mb-6">
              Get your flat rate.
            </h1>
            <p className="text-lg text-[var(--body)] leading-relaxed max-w-3xl">
              Dial in your home details below and see your flat-rate estimate instantly. Then pick a time on the scheduling page.
            </p>
          </div>
        </section>

        {/* Estimate Engine */}
        <section className="px-4 pb-8 md:px-16">
          <div className="mx-auto max-w-5xl">
            <PriceEstimator targetPage="book" />
          </div>
        </section>

        {/* Quick contact options */}
        <section className="px-6 py-16 md:px-16 bg-[var(--paper-light)]">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-8">Prefer another way?</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-xs tracking-widest uppercase opacity-60 mb-2">Call or text</p>
                <a href={SITE.phoneHref} className="text-2xl font-medium text-[var(--accent)] hover:underline">{SITE.phone}</a>
                <p className="text-sm text-[var(--body)] mt-1">If we&apos;re mid-clean we can&apos;t pick up — text us and we reply the same day</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase opacity-60 mb-2">Email</p>
                <a href={`mailto:${SITE.email}`} className="text-lg font-medium text-[var(--ink)] hover:text-[var(--accent)]">{SITE.email}</a>
                <p className="text-sm text-[var(--body)] mt-1">Message us anytime</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase opacity-60 mb-2">Service area</p>
                <p className="text-lg font-medium text-[var(--ink)]">{SITE.serviceAreas.slice(0, 2).join(', ')}</p>
                <p className="text-sm text-[var(--body)] mt-1">+ {SITE.serviceAreas.length - 2} more areas</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <RevealFooter />
    </>
  );
}
