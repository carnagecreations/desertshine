import type { Metadata } from 'next';
import Link from 'next/link';
import RevealFooter from '@/components/sections/RevealFooter';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Book Your Cleaning',
  description: "Schedule your cleaning appointment. Pick a time, and we'll confirm details and send your flat-rate invoice.",
  alternates: { canonical: `${SITE.url}/book` },
};

export default function BookPage() {
  return (
    <>
      <main className="relative z-10 bg-[var(--paper)]">
      <section className="pt-40 pb-12 px-6 md:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--ink)] mb-6">Book your cleaning</h1>
          <p className="text-lg text-[var(--body)] leading-relaxed mb-8">
            Pick a service and time below. We'll call or text to confirm details, square footage, and any special requests — then send your flat-rate invoice within one business day.
          </p>
          <div className="space-y-3 text-sm text-[var(--body)]/80">
            <p>✓ Free quote, no obligation</p>
            <p>✓ Same-week availability</p>
            <p>✓ 100% re-clean guarantee</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-[var(--line)] bg-white/50 backdrop-blur-sm overflow-hidden">
            <iframe
              src="https://calendly.com/cleanconviction"
              width="100%"
              height="700"
              frameBorder="0"
              loading="lazy"
              title="Book your cleaning appointment"
              className="block"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16 bg-[var(--paper-light)]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[var(--ink)] mb-6">What happens next?</h2>
          <div className="relative space-y-10">
            {/* Connector line behind the number circles */}
            <span aria-hidden className="absolute left-1/2 top-6 h-[calc(100%-3rem)] w-px -translate-x-1/2 bg-gradient-to-b from-[var(--accent)]/40 via-[var(--line)] to-[var(--accent)]/40" />
            {[
              { n: '1', title: 'You book', body: 'Pick your service and preferred time.' },
              { n: '2', title: 'We confirm', body: "We'll text or call to confirm details, square footage, pets, special requests." },
              { n: '3', title: 'You get your invoice', body: "Flat-rate quote via email. Pay on your terms, we'll schedule your cleaning." },
            ].map((step) => (
              <div key={step.n} className="relative">
                <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full border-2 border-[var(--accent)] bg-[var(--paper-light)] text-xl font-bold text-[var(--accent)]">
                  {step.n}
                </div>
                <h3 className="text-lg font-semibold text-[var(--ink)] mb-2">{step.title}</h3>
                <p className="text-[var(--body)]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[var(--ink)] mb-6">Prefer to talk it through?</h2>
          <p className="text-lg text-[var(--body)] mb-8">
            Call or text us. If we&apos;re mid-clean the phone stays in the pocket — but we reply the same day, every day.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 text-lg font-medium text-white transition-all hover:shadow-lg hover:shadow-[var(--accent)]/30 hover:scale-105"
            >
              Call {SITE.phone}
            </a>
            <a
              href={SITE.smsHref}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--accent)] px-8 py-[14px] text-lg font-medium text-[var(--accent)] transition-all hover:bg-[var(--accent)]/10"
            >
              Text us
            </a>
          </div>
          <p className="mt-10 text-sm text-[var(--body)]">
            Want a number before you book?{' '}
            <Link href="/pricing" className="font-medium text-[var(--accent)] hover:underline">
              Run the instant estimator →
            </Link>
          </p>
        </div>
      </section>
      </main>
      <RevealFooter />
    </>
  );
}
