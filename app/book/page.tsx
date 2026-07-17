import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Book Your Cleaning',
  description: "Schedule your cleaning appointment. Pick a time, and we'll confirm details and send your invoice within 24 hours.",
};

export default function BookPage() {
  return (
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
              title="Book your cleaning appointment"
              className="block"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16 bg-[var(--paper-light)]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[var(--ink)] mb-6">What happens next?</h2>
          <div className="space-y-8">
            <div>
              <div className="text-4xl font-bold text-[var(--accent)] mb-2">1</div>
              <h3 className="text-lg font-semibold text-[var(--ink)] mb-2">You book</h3>
              <p className="text-[var(--body)]">Pick your service and preferred time.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--accent)] mb-2">2</div>
              <h3 className="text-lg font-semibold text-[var(--ink)] mb-2">We confirm</h3>
              <p className="text-[var(--body)]">We'll text or call to confirm details, square footage, pets, special requests.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--accent)] mb-2">3</div>
              <h3 className="text-lg font-semibold text-[var(--ink)] mb-2">You get your invoice</h3>
              <p className="text-[var(--body)]">Flat-rate quote via email. Pay on your terms, we'll schedule your cleaning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[var(--ink)] mb-6">Prefer to call?</h2>
          <p className="text-lg text-[var(--body)] mb-8">
            We answer our phone and respond fast. No voicemail hell.
          </p>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 text-lg font-medium text-white transition-all hover:shadow-lg hover:shadow-[var(--accent)]/30 hover:scale-105"
          >
            Call {SITE.phone}
          </a>
        </div>
      </section>
    </main>
  );
}
