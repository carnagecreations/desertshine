import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import RevealFooter from '@/components/sections/RevealFooter';

export const metadata: Metadata = {
  title: 'Monsoon Season Home Prep for Yuma — Dust & Water Protection Guide',
  description: 'Protect your Yuma home from monsoon storms. Prep checklist, cleanup steps, and when to call a professional. Same-week availability during peak season.',
  alternates: { canonical: `${SITE.url}/seasonal/monsoon-prep` },
  openGraph: {
    title: 'Monsoon Season Home Prep for Yuma',
    description: 'Complete guide to preparing and cleaning up after monsoon season in Yuma, AZ.',
    url: `${SITE.url}/seasonal/monsoon-prep`,
  },
};

export default function MonsoonPrepPage() {
  return (
    <>
      <main className="relative z-10 bg-[var(--paper)]">
        <section className="pt-40 pb-12 px-6 md:px-16">
          <div className="mx-auto max-w-3xl">
            <div className="inline-block rounded-full bg-[var(--accent)]/10 px-4 py-2 mb-6 text-sm font-semibold text-[var(--accent)] uppercase tracking-widest">
              Seasonal Guide
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--ink)] mb-6">
              Monsoon Season Home Prep
            </h1>
            <p className="text-xl text-[var(--body)] leading-relaxed mb-8">
              Monsoon season runs June through September in Yuma. Prepare your home for dust storms and heavy rain—and know exactly what to do when they hit.
            </p>
          </div>
        </section>

        <section className="px-6 py-20 md:px-16">
          <div className="mx-auto max-w-3xl space-y-12">
            {/* Before the Season */}
            <div className="rounded-2xl border border-[var(--line)] bg-white/70 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-[var(--ink)] mb-6">Before Monsoon Season Starts</h2>
              <div className="space-y-6 text-[var(--body)]">
                <div>
                  <h3 className="font-semibold text-[var(--ink)] mb-3 text-lg">🛡️ Seal the Gaps</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                    <li>Replace worn weatherstripping on exterior doors</li>
                    <li>Re-caulk gaps around windows</li>
                    <li>Check garage door bottom seal (common dust entry point)</li>
                    <li>Confirm attic and crawlspace vent screens are intact</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--ink)] mb-3 text-lg">💧 Handle Water Flow</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                    <li>Clean gutters and downspouts completely</li>
                    <li>Ensure ground slopes away from foundation</li>
                    <li>Move garage-stored boxes onto shelves (off the floor)</li>
                    <li>Check rooftop AC drain lines are clear</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--ink)] mb-3 text-lg">✨ Reset Your Baseline</h3>
                  <p className="text-sm mb-3">
                    Start monsoon season with a professional deep clean so blown-in dust settles on clean surfaces, not layered onto old grime.
                  </p>
                  <Link
                    href="/book"
                    className="inline-block rounded-full bg-[var(--accent)] px-6 py-2 text-white font-medium text-sm transition-all hover:shadow-lg hover:shadow-[var(--accent)]/30"
                  >
                    Book Pre-Season Deep Clean
                  </Link>
                  <p className="text-xs text-[var(--body)] mt-2">Available same-week • Typical cost: $249</p>
                </div>
              </div>
            </div>

            {/* Storm Day */}
            <div className="rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-[var(--ink)] mb-6">When a Storm is Coming</h2>
              <div className="space-y-3 text-[var(--body)] text-sm">
                <p className="flex gap-3"><span className="text-lg">🪟</span> Close every window and door, including interior doors</p>
                <p className="flex gap-3"><span className="text-lg">🌬️</span> Set HVAC to recirculate, not fresh-air intake</p>
                <p className="flex gap-3"><span className="text-lg">🪑</span> Bring in or cover patio furniture and cushions</p>
                <p className="flex gap-3"><span className="text-lg">❄️</span> Close damper on any evaporative (swamp) cooler</p>
                <p className="flex gap-3"><span className="text-lg">🚗</span> Never drive into a dust wall — pull over and wait</p>
              </div>
            </div>

            {/* Cleanup Steps */}
            <div className="rounded-2xl border border-[var(--line)] bg-white/70 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-[var(--ink)] mb-6">The Fast Cleanup (After the Storm)</h2>
              <p className="text-[var(--body)] mb-8 text-sm italic">Order matters. Do it right and you clean each surface once.</p>
              <div className="space-y-6">
                {[
                  { n: '1', title: 'Outside (while damp)', desc: 'Hose windows, patios, and entryways before dust dries. Lightly rinse AC condenser fins.' },
                  { n: '2', title: 'Dust top to bottom', desc: 'Fans and shelves first, floors last. Vacuuming first just launches dust back into the air.' },
                  { n: '3', title: 'Windows & tracks', desc: 'Vinegar and microfiber cut the monsoon film. Vacuum mud out of slider tracks.' },
                  { n: '4', title: 'Swap HVAC filter', desc: 'Change it once indoor dust settles. Stock up now—you\'ll swap more often during the season.' },
                ].map((step) => (
                  <div key={step.n} className="flex gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--accent)] text-white font-bold flex-shrink-0">
                      {step.n}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--ink)] mb-1">{step.title}</h3>
                      <p className="text-sm text-[var(--body)]">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Water Check */}
            <div className="rounded-2xl border border-[var(--line)] bg-white/70 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-[var(--ink)] mb-4">🚨 Don't Skip the Water Check</h2>
              <p className="text-[var(--body)] mb-6 text-sm">
                Dust is visible; water damage is expensive. After heavy rain, check:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-[var(--body)]">
                <li>Door thresholds and window sills for pooling or dampness</li>
                <li>Ceilings under rooftop AC units and roof penetrations</li>
                <li>Garage corners and low closet walls for musty smells</li>
              </ul>
              <p className="mt-4 text-sm text-[var(--accent)] font-semibold">
                In our heat, trapped moisture turns to mold fast. Dry any damp area quickly.
              </p>
            </div>

            {/* Professional Cleanup */}
            <div className="rounded-2xl border border-[var(--accent)]/30 bg-gradient-to-br from-[var(--accent)]/5 to-transparent p-8 md:p-10">
              <h2 className="text-3xl font-bold text-[var(--ink)] mb-6">Let Us Handle the Heavy Lifting</h2>
              <p className="text-[var(--body)] mb-6 text-sm">
                After a major dust storm, dust gets into places you can't see: AC vents, window tracks, light fixtures, range hood filters. A professional deep clean pulls it from everywhere and resets your home.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <span className="text-[var(--accent)] font-bold">✓</span>
                  <span className="text-sm text-[var(--body)]"><strong>Professional-grade equipment</strong> for vents, tracks, and hard-to-reach areas</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[var(--accent)] font-bold">✓</span>
                  <span className="text-sm text-[var(--body)]"><strong>Same-week availability</strong> even during peak monsoon season</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[var(--accent)] font-bold">✓</span>
                  <span className="text-sm text-[var(--body)]"><strong>100% re-clean guarantee</strong> — not happy within 24 hours, we return free</span>
                </div>
              </div>
              <Link
                href="/book"
                className="inline-block rounded-full bg-[var(--accent)] px-8 py-4 text-white font-medium transition-all hover:shadow-lg hover:shadow-[var(--accent)]/30 hover:scale-105"
              >
                Schedule Post-Storm Deep Clean
              </Link>
              <p className="text-xs text-[var(--body)] mt-3">Deep clean: typically $249 • Get a free quote in 60 seconds</p>
            </div>

            {/* Living With Monsoon */}
            <div>
              <h2 className="text-3xl font-bold text-[var(--ink)] mb-6">Living With Monsoon Season</h2>
              <p className="text-[var(--body)] mb-6 text-sm">
                You can't stop the storms, but a rhythm keeps your home ahead of them:
              </p>
              <div className="bg-[var(--paper-light)] rounded-lg p-6 space-y-4">
                <div className="flex gap-4">
                  <div className="text-2xl">📅</div>
                  <div>
                    <p className="font-semibold text-[var(--ink)]">Before Season (May–June)</p>
                    <p className="text-sm text-[var(--body)]">Deep clean + seal gaps</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl">🔄</div>
                  <div>
                    <p className="font-semibold text-[var(--ink)]">During Season (June–Sept)</p>
                    <p className="text-sm text-[var(--body))]">Recurring cleaning every 1–2 weeks to stay ahead of dust</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl">🧹</div>
                  <div>
                    <p className="font-semibold text-[var(--ink)]">After Major Storms</p>
                    <p className="text-sm text-[var(--body)]">Targeted cleanup, plus deep clean after the worst ones</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 md:px-16 bg-[var(--paper-light)]">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-6">Ready for Monsoon Season?</h2>
            <p className="text-lg text-[var(--body)] mb-8">
              Book your pre-season deep clean now. Same-week availability across Yuma County.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/book"
                className="rounded-full bg-[var(--accent)] px-8 py-4 text-white font-medium transition-all hover:shadow-lg hover:shadow-[var(--accent)]/30 hover:scale-105"
              >
                Book a Deep Clean
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-2 border-[var(--accent)] px-8 py-4 text-[var(--accent)] font-medium transition-all hover:bg-[var(--accent)]/10"
              >
                Get a Free Quote
              </Link>
            </div>
            <p className="mt-6 text-sm text-[var(--body)]">Call (928) 298-5509 or text — we reply same day, even during peak season.</p>
          </div>
        </section>
      </main>
      <RevealFooter />
    </>
  );
}
