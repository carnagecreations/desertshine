import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import RevealFooter from '@/components/sections/RevealFooter';

export const metadata: Metadata = {
  title: 'Haboob Cleanup Guide for Yuma Homes — Dust Storm Recovery',
  description: "Haboob dumps tons of dust in minutes. Here's exactly how to clean up after a dust storm in Yuma—and prevent it next time.",
  alternates: { canonical: `${SITE.url}/seasonal/haboob-cleanup` },
  openGraph: {
    title: 'Haboob Cleanup Guide for Yuma',
    description: 'Complete cleanup guide after a haboob (dust storm) hits your Yuma home.',
    url: `${SITE.url}/seasonal/haboob-cleanup`,
  },
};

export default function HaboobCleanupPage() {
  return (
    <>
      <main className="relative z-10 bg-[var(--paper)]">
        <section className="pt-40 pb-12 px-6 md:px-16">
          <div className="mx-auto max-w-3xl">
            <div className="inline-block rounded-full bg-[var(--accent)]/10 px-4 py-2 mb-6 text-sm font-semibold text-[var(--accent)] uppercase tracking-widest">
              Dust Storm Recovery
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--ink)] mb-6">
              Haboob Cleanup Guide
            </h1>
            <p className="text-xl text-[var(--body)] leading-relaxed">
              A haboob isn't rain—it's billions of tons of dust moving at 40+ mph. One haboob can undo weeks of cleaning. Here's what to do after.
            </p>
          </div>
        </section>

        <section className="px-6 py-20 md:px-16">
          <div className="mx-auto max-w-3xl space-y-12">
            {/* What a Haboob Does */}
            <div className="rounded-2xl border border-[var(--line)] bg-white/70 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-[var(--ink)] mb-6">What a Haboob Actually Does to Your Home</h2>
              <p className="text-[var(--body)] mb-6 text-sm">
                In 10 minutes, a haboob deposits:
              </p>
              <ul className="space-y-3 text-sm text-[var(--body)]">
                <li className="flex gap-3"><span className="text-lg">🌪️</span> Dust on every surface, inside and outside</li>
                <li className="flex gap-3"><span className="text-lg">🌬️</span> Fine particles in your HVAC filter and ducts</li>
                <li className="flex gap-3"><span className="text-lg">🪟</span> Red coating on windows and glass</li>
                <li className="flex gap-3"><span className="text-lg">🚪</span> Grit in door seals and thresholds</li>
                <li className="flex gap-3"><span className="text-lg">🛋️</span> Dust infiltration into closed cabinets and furniture</li>
              </ul>
              <p className="text-[var(--body)] mt-8 text-sm italic">
                The dust is fine enough to find its way into places you didn't think dust could reach.
              </p>
            </div>

            {/* Cleanup Steps */}
            <div className="rounded-2xl border border-[var(--line)] bg-white/70 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-[var(--ink)] mb-6">The Cleanup (6–48 Hours After)</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-[var(--ink)] text-lg mb-4 flex gap-2">
                    <span className="text-2xl">🏠</span>
                    Phase 1: Outside (6–12 Hours)
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[var(--body)] ml-2">
                    <li>Hose down the roof and gutters (gentle spray, don't blast)</li>
                    <li>Rinse windows and glass</li>
                    <li>Dust off AC condenser carefully (no high pressure—damages fins)</li>
                    <li>Sweep and rinse front door and entryways</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-[var(--ink)] text-lg mb-4 flex gap-2">
                    <span className="text-2xl">🧹</span>
                    Phase 2: Inside (24–48 Hours)
                  </h3>
                  <p className="text-sm text-[var(--body)] mb-3">Order matters:</p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-[var(--body)] ml-2">
                    <li><strong>Dust first, vacuum second</strong> — Dust falls onto surfaces, then vacuums it up</li>
                    <li><strong>Start high, go low</strong> — Top shelves, ceiling fans, then furniture, then floors</li>
                    <li><strong>Don't vacuum immediately</strong> — Let dust settle or you're just stirring it around</li>
                    <li><strong>Sealed containers</strong> — Wipe down canned goods and sealed items</li>
                    <li><strong>Change HVAC filter</strong> — After dust settles but before running AC heavily</li>
                    <li><strong>Windows and glass</strong> — Vinegar + microfiber cuts haboob film</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-[var(--ink)] text-lg mb-4 flex gap-2">
                    <span className="text-2xl">✨</span>
                    Phase 3: Deep Surfaces
                  </h3>
                  <p className="text-sm text-[var(--body)] mb-3">These are easy to miss but collect heavy dust:</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[var(--body)] ml-2">
                    <li>Baseboards and door frames</li>
                    <li>Light fixtures and ceiling corners</li>
                    <li>Cabinet tops and shelves</li>
                    <li>Window tracks (where mud collects)</li>
                    <li>Inside vents and returns</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Professional Cleanup */}
            <div className="rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-[var(--ink)] mb-6">Why Professional Haboob Cleanup is Worth It</h2>
              <p className="text-[var(--body)] mb-6 text-sm">
                After a major haboob, there's dust in places you can't see. Inside air vents, inside your range hood filter, in window tracks, on top of cabinet frames—places DIY cleaning misses.
              </p>
              <div className="space-y-4 mb-8 bg-white rounded-lg p-6">
                <div className="flex gap-3">
                  <span className="text-[var(--accent)] font-bold">✓</span>
                  <span className="text-sm text-[var(--body)]"><strong>Gets dust you missed</strong> (and the dust you didn't see)</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[var(--accent)] font-bold">✓</span>
                  <span className="text-sm text-[var(--body)]"><strong>Cleans HVAC vents</strong> and returns where dust accumulates</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[var(--accent)] font-bold">✓</span>
                  <span className="text-sm text-[var(--body)]"><strong>Details window tracks</strong> and frames</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[var(--accent)] font-bold">✓</span>
                  <span className="text-sm text-[var(--body)]"><strong>Cleans inside appliances</strong> (range hood, oven exterior)</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[var(--accent)] font-bold">✓</span>
                  <span className="text-sm text-[var(--body)]"><strong>Best timing: within 48 hours</strong> — dust is easier to remove fresh</span>
                </div>
              </div>
              <Link
                href="/book"
                className="inline-block rounded-full bg-[var(--accent)] px-8 py-4 text-white font-medium transition-all hover:shadow-lg hover:shadow-[var(--accent)]/30 hover:scale-105"
              >
                Book Post-Haboob Deep Clean
              </Link>
              <p className="text-xs text-[var(--body)] mt-3">Same-week availability • Deep clean typically $249</p>
            </div>

            {/* Prevention */}
            <div className="rounded-2xl border border-[var(--line)] bg-white/70 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-[var(--ink)] mb-6">Preventing the Next One</h2>
              <p className="text-[var(--body)] mb-6 text-sm">
                You can't stop a haboob, but you can minimize damage and recovery time:
              </p>
              <div className="space-y-4">
                <div className="bg-[var(--paper-light)] rounded-lg p-4">
                  <p className="font-semibold text-[var(--ink)] mb-2">📅 Before Haboob Season (May)</p>
                  <p className="text-sm text-[var(--body)]">Deep clean your home so new dust settles on clean surfaces, not layered grime. Check weatherstripping and caulk around windows.</p>
                </div>
                <div className="bg-[var(--paper-light)] rounded-lg p-4">
                  <p className="font-semibold text-[var(--ink)] mb-2">🔄 During Season (May–Sept)</p>
                  <p className="text-sm text-[var(--body)]">Bi-weekly recurring cleans keep dust from ever really building up. Most Yuma homes benefit from more frequent cleaning during haboob season.</p>
                </div>
                <div className="bg-[var(--paper-light)] rounded-lg p-4">
                  <p className="font-semibold text-[var(--ink)] mb-2">🛠️ HVAC Maintenance</p>
                  <p className="text-sm text-[var(--body)]">Change filters monthly (or more often) during haboob season. A clogged filter means your AC works harder and dust circulates inside.</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-lg bg-[var(--accent)]/10 p-6 text-center">
                <p className="text-3xl font-bold text-[var(--accent)] mb-2">40+</p>
                <p className="text-sm text-[var(--body)]">mph wind speed</p>
              </div>
              <div className="rounded-lg bg-[var(--accent)]/10 p-6 text-center">
                <p className="text-3xl font-bold text-[var(--accent)] mb-2">10</p>
                <p className="text-sm text-[var(--body)]">minutes to coat entire home</p>
              </div>
              <div className="rounded-lg bg-[var(--accent)]/10 p-6 text-center">
                <p className="text-3xl font-bold text-[var(--accent)] mb-2">Billions</p>
                <p className="text-sm text-[var(--body)]">tons of dust per storm</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 md:px-16 bg-[var(--paper-light)]">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-6">Just Hit by a Haboob?</h2>
            <p className="text-lg text-[var(--body)] mb-8">
              We handle haboob cleanup every summer. Same-week availability, even during peak season.
            </p>
            <Link
              href="/book"
              className="inline-block rounded-full bg-[var(--accent)] px-8 py-4 text-white font-medium transition-all hover:shadow-lg hover:shadow-[var(--accent)]/30 hover:scale-105"
            >
              Schedule Cleanup Now
            </Link>
            <p className="mt-6 text-sm text-[var(--body)]">
              Call (928) 298-5509 or <a href="sms:+19282985509" className="text-[var(--accent)] hover:underline">text us</a> — we reply same day.
            </p>
          </div>
        </section>
      </main>
      <RevealFooter />
    </>
  );
}
