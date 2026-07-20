import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import RevealFooter from '@/components/sections/RevealFooter';

export const metadata: Metadata = {
  title: 'Free Cleaning Checklist — Download for Your Yuma Home',
  description: 'Download the professional cleaning checklist that experts use. Room-by-room guide to a spotless home. Enter your email and get the PDF instantly.',
  alternates: { canonical: `${SITE.url}/checklist` },
  openGraph: {
    title: 'Free Professional Cleaning Checklist',
    description: 'Download the room-by-room checklist used by cleaning professionals in Yuma.',
    url: `${SITE.url}/checklist`,
  },
};

export default function ChecklistPage() {
  return (
    <>
      <main className="relative z-10 bg-[var(--paper)]">
        <section className="pt-40 pb-12 px-6 md:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-block rounded-full bg-[var(--accent)]/10 px-4 py-2 mb-6 text-sm font-semibold text-[var(--accent)] uppercase tracking-widest">
              Free Resource
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--ink)] mb-4">
              The Professional Cleaning Checklist
            </h1>
            <p className="text-lg text-[var(--body)] mb-8">
              The exact room-by-room checklist our cleaning team uses on every visit. Download it free — no strings attached.
            </p>
            <div className="inline-flex items-center gap-3 text-sm text-[var(--body)]">
              <span className="text-xl">📋</span>
              <span>PDF format • Works on phone or tablet</span>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-16">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-3xl border border-[var(--line)] bg-white/70 backdrop-blur-sm overflow-hidden">
              {/* Left side: preview */}
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-10">
                <div>
                  <h2 className="text-2xl font-bold text-[var(--ink)] mb-6">What&apos;s inside</h2>
                  <ul className="space-y-3 text-[var(--body)]">
                    <li className="flex gap-3">
                      <span className="text-[var(--accent)] font-bold">✓</span>
                      <span><strong>Kitchen checklist</strong> — counters, appliances, floors, grease removal</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[var(--accent)] font-bold">✓</span>
                      <span><strong>Bathroom deep-dive</strong> — toilets, grout, hard-water deposits, fixtures</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[var(--accent)] font-bold">✓</span>
                      <span><strong>Bedroom &amp; living areas</strong> — dusting, vacuuming, windows, baseboards</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[var(--accent)] font-bold">✓</span>
                      <span><strong>Desert-specific tips</strong> — Yuma hard water, haboob dust, AC maintenance</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[var(--accent)] font-bold">✓</span>
                      <span><strong>Checkboxes</strong> — print or fill digital to track your progress</span>
                    </li>
                  </ul>
                  <p className="mt-8 text-sm text-[var(--body)] italic">
                    Used by professional cleaners in Yuma, Arizona.
                  </p>
                </div>

                {/* Right side: signup form */}
                <div>
                  <form action="https://formspree.io/f/meoqpqwb" method="POST" className="space-y-4">
                    <h3 className="text-lg font-semibold text-[var(--ink)]">Get it free (instant download)</h3>
                    <p className="text-sm text-[var(--body)]">
                      Enter your email below. We&apos;ll send you the PDF immediately — plus occasional cleaning tips and seasonal advice. Unsubscribe anytime.
                    </p>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--ink)] mb-2">
                        Your email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="jane@example.com"
                        className="w-full rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(232,93,47,0.4)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[var(--ink)] mb-2">
                        Your name (optional)
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Jane Doe"
                        className="w-full rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(232,93,47,0.4)]"
                      />
                    </div>
                    <input type="hidden" name="_subject" value="Cleaning Checklist Download" />
                    <input type="hidden" name="_captcha" value="false" />
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-[var(--accent)] px-6 py-3 text-white font-semibold transition-all hover:shadow-lg hover:shadow-[var(--accent)]/30"
                    >
                      Send Me the Checklist
                    </button>
                    <p className="text-xs text-[var(--body)]/70">
                      ✓ Instant PDF download • ✓ No spam • ✓ Unsubscribe anytime
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="px-6 py-16 md:px-16 bg-[var(--paper-light)]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[var(--body)] mb-6">
              Join over <strong>200+ Yuma homeowners</strong> who use this checklist to keep their homes consistently clean.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[var(--body)]">
              <span>⭐ Works for renters and homeowners</span>
              <span>⭐ DIY or hire cleaners</span>
              <span>⭐ Updated for Yuma&apos;s climate</span>
            </div>
          </div>
        </section>

        {/* Why we made this */}
        <section className="px-6 py-20 md:px-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-8">Why we created this</h2>
            <div className="prose prose-invert max-w-none space-y-4 text-[var(--body)]">
              <p>
                When you clean your own home, it&apos;s easy to miss spots. You skip the baseboards, forget the oven interior, let grout stains sit. Then you feel like you have to hire a professional anyway.
              </p>
              <p>
                This checklist is built from the same room-by-room process our cleaning team uses on every single visit. Follow it—actually follow it—and your home will look and feel professionally cleaned.
              </p>
              <p>
                If you decide you&apos;d rather have someone else handle it, you&apos;ll understand exactly what a professional clean includes and why it&apos;s worth the cost. And you&apos;ll be ready to describe what you need when you call or book.
              </p>
              <p>
                For Yuma specifically, we included tips on dealing with hard-water stains from the Colorado River and dust management during haboob and monsoon season—challenges most generic cleaning advice misses.
              </p>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-8">
              <h3 className="text-xl font-bold text-[var(--ink)] mb-4">Already decided to hire help?</h3>
              <p className="text-[var(--body)] mb-6">
                No need to download the checklist. We handle it all—just book and we&apos;ll take care of everything on the list, every visit.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="rounded-full bg-[var(--accent)] px-6 py-3 text-white font-medium transition-all hover:shadow-lg hover:shadow-[var(--accent)]/30"
                >
                  Book a cleaning
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border-2 border-[var(--accent)] px-6 py-3 text-[var(--accent)] font-medium transition-all hover:bg-[var(--accent)]/10"
                >
                  Get a free quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blog CTA */}
        <section className="px-6 py-20 md:px-16 bg-[var(--paper-light)]">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-6">Still have questions?</h2>
            <p className="text-lg text-[var(--body)] mb-8">
              Our blog has everything from haboob cleanup to move-out inspection prep to dealing with Yuma hard water.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--accent)] px-6 py-3 text-[var(--accent)] font-medium transition-all hover:bg-[var(--accent)]/10"
            >
              Read cleaning guides →
            </Link>
          </div>
        </section>
      </main>
      <RevealFooter />
    </>
  );
}
