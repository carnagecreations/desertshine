import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import RevealFooter from '@/components/sections/RevealFooter';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Get a Free Quote',
  description: 'Get a flat-rate cleaning quote for your Yuma home or office. No surprise charges. Dial in the Estimate Engine at /pricing or fill out a quick quote form here.',
};

export default function ContactPage() {
  return (
    <>
      <main className="relative z-10 bg-[var(--paper)] shadow-[0_40px_80px_rgba(0,0,0,0.35)]">
        <section className="mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-40 md:grid-cols-[1fr_1.2fr] md:px-10">
          <div>
            <h1 className="text-4xl leading-tight md:text-6xl">Your quote, in 60 seconds.</h1>
            <p className="mt-6 max-w-sm text-lg text-[var(--body)]">
              Fill this out to lock in your flat price and book a date. We'll confirm details and square footage the day before, and again at your door.
            </p>
            <div className="mt-10 space-y-4 text-[var(--body)]">
              <p>
                <span className="block text-xs tracking-widest uppercase opacity-60">Prefer to talk?</span>
                <a href={SITE.phoneHref} className="text-2xl font-medium text-[var(--ink)] hover:text-[var(--accent)]">{SITE.phone}</a>
              </p>
              <p>
                <span className="block text-xs tracking-widest uppercase opacity-60">Email</span>
                <a href={`mailto:${SITE.email}`} className="text-[var(--ink)] hover:text-[var(--accent)]">{SITE.email}</a>
              </p>
              <p>
                <span className="block text-xs tracking-widest uppercase opacity-60">Hours</span>
                {SITE.hours}
              </p>
              <p>
                <span className="block text-xs tracking-widest uppercase opacity-60">Service area</span>
                {SITE.serviceAreas.join(', ')}
              </p>
            </div>
          </div>
          <QuoteForm />
        </section>
      </main>
      <RevealFooter />
    </>
  );
}
