import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import RevealFooter from '@/components/sections/RevealFooter';

export const metadata: Metadata = {
  title: 'Snowbird Home Opening & Closing Guide for Yuma — Seasonal Prep',
  description: 'Opening your Yuma winter home? Closing it for summer? Complete checklist for seasonal snowbird cleaning and maintenance.',
  alternates: { canonical: `${SITE.url}/seasonal/snowbird-prep` },
  openGraph: {
    title: 'Snowbird Home Prep for Yuma',
    description: 'Complete guide for seasonal snowbird home opening and closing in Yuma, AZ.',
    url: `${SITE.url}/seasonal/snowbird-prep`,
  },
};

export default function SnowbirdPrepPage() {
  return (
    <>
      <main className="relative z-10 bg-[var(--paper)]">
        <section className="pt-40 pb-12 px-6 md:px-16">
          <div className="mx-auto max-w-3xl">
            <div className="inline-block rounded-full bg-[var(--accent)]/10 px-4 py-2 mb-6 text-sm font-semibold text-[var(--accent)] uppercase tracking-widest">
              Seasonal Maintenance
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--ink)] mb-6">
              Snowbird Home Opening & Closing
            </h1>
            <p className="text-xl text-[var(--body)] leading-relaxed">
              Half the year in Yuma, half elsewhere. Make sure your seasonal home is ready when you arrive—and protected when you leave.
            </p>
          </div>
        </section>

        <section className="px-6 py-20 md:px-16">
          <div className="mx-auto max-w-3xl space-y-12">
            {/* Opening Section */}
            <div className="rounded-2xl border border-[var(--accent)]/30 bg-gradient-to-r from-[var(--accent)]/5 to-transparent p-8 md:p-10">
              <h2 className="text-3xl font-bold text-[var(--ink)] mb-6">Opening Your Yuma Home (October)</h2>
              <p className="text-[var(--body)] mb-8 text-sm">
                Your home sat empty for 6 months. It needs more than a quick wipe-down.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-[var(--ink)] text-lg mb-4 flex gap-2">
                    <span className="text-2xl">1–2 Weeks Before Arrival</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-semibold text-[var(--ink)] mb-2">🔄 Outside</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-[var(--body)] ml-2">
                        <li>Check AC condenser for dust and debris</li>
                        <li>Hose down exterior if dusty</li>
                        <li>Check outdoor water is turned on</li>
                        <li>Inspect screen doors and windows</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-semibold text-[var(--ink)] mb-2">✨ Deep Clean Everything</p>
                      <p className="text-sm text-[var(--body)] mb-2">
                        This is not negotiable. A home sitting empty for 6 months collects dust, spiderwebs, and insects.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-[var(--body)] ml-2">
                        <li>Wipe down all surfaces (especially ceiling fans)</li>
                        <li>Clean light fixtures</li>
                        <li>Vacuum and mop thoroughly</li>
                        <li>Clean windows and glass</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-semibold text-[var(--ink)] mb-2">🍳 Kitchen</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-[var(--body)] ml-2">
                        <li>Wipe down all appliances (inside and outside)</li>
                        <li>Clean inside the fridge before stocking</li>
                        <li>Wipe cabinet fronts and tops</li>
                        <li>Clean stovetop and exhaust hood</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-semibold text-[var(--ink)] mb-2">🚿 Bathrooms</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-[var(--body)] ml-2">
                        <li>Scrub toilets, tubs, showers</li>
                        <li>Wipe mirrors and fixtures</li>
                        <li>Clean tile and grout</li>
                        <li>Wipe all surfaces</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-semibold text-[var(--ink)] mb-2">⚙️ Systems</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-[var(--body)] ml-2">
                        <li>Run dishwasher empty (cleaning cycle)</li>
                        <li>Run washing machine empty</li>
                        <li>Check and replace HVAC filter</li>
                        <li>Check water heater</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[var(--accent)]/20 pt-6">
                  <p className="font-semibold text-[var(--ink)] mb-4 text-lg">Day Before Arrival</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[var(--body)] ml-2">
                    <li>Final walkthrough</li>
                    <li>Stock water, toilet paper, paper towels</li>
                    <li>Set thermostat to comfortable temperature</li>
                    <li>Ensure entry lights work</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg border border-[var(--line)]">
                <p className="font-semibold text-[var(--ink)] mb-3">🎯 We handle snowbird opening cleans</p>
                <p className="text-sm text-[var(--body)] mb-4">
                  Come home to a spotless house. We'll have everything cleaned and ready within 48 hours of your arrival.
                </p>
                <Link
                  href="/book"
                  className="inline-block rounded-full bg-[var(--accent)] px-6 py-2 text-white font-medium text-sm transition-all hover:shadow-lg hover:shadow-[var(--accent)]/30"
                >
                  Schedule Opening Clean
                </Link>
              </div>
            </div>

            {/* Closing Section */}
            <div className="rounded-2xl border border-[var(--line)] bg-white/70 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-[var(--ink)] mb-6">Closing Your Yuma Home (April)</h2>
              <p className="text-[var(--body)] mb-8 text-sm">
                Your goal: Leave the home protected for 6 months of desert heat without damage.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-[var(--ink)] text-lg mb-4">2 Weeks Before Departure</h3>
                  <div className="space-y-4">
                    <div className="bg-[var(--paper-light)] rounded-lg p-4">
                      <p className="font-semibold text-[var(--ink)] mb-2">🧹 Cleaning Strategy</p>
                      <p className="text-sm text-[var(--body)]">
                        <strong>Do NOT deep clean before you leave.</strong> You'll dust and then not be there to see it. Light cleaning only.
                      </p>
                    </div>
                    <div className="bg-[var(--paper-light)] rounded-lg p-4">
                      <p className="font-semibold text-[var(--ink)] mb-2">🍳 Kitchen Prep</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-[var(--body)] ml-2">
                        <li>Empty and wipe fridge completely</li>
                        <li>Leave baking soda inside (absorbs odors)</li>
                        <li>Clean out pantry—remove anything that spoils</li>
                        <li>Leave oven door open slightly</li>
                      </ul>
                    </div>
                    <div className="bg-[var(--paper-light)] rounded-lg p-4">
                      <p className="font-semibold text-[var(--ink)] mb-2">🚿 Bathrooms</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-[var(--body)] ml-2">
                        <li>Drain all standing water from tubs/showers</li>
                        <li>Leave cabinet doors cracked (air circulation)</li>
                      </ul>
                    </div>
                    <div className="bg-[var(--paper-light)] rounded-lg p-4">
                      <p className="font-semibold text-[var(--ink)] mb-2">🛏️ Linens</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-[var(--body)] ml-2">
                        <li>Wash all bedding and linens</li>
                        <li>Leave beds stripped (prevents dust settling)</li>
                        <li>Wash towels and leave in dryer or folded openly</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[var(--line)] pt-6">
                  <h3 className="font-semibold text-[var(--ink)] text-lg mb-4">AC & Temperature Control</h3>
                  <div className="bg-[var(--accent)]/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-[var(--body)] font-semibold mb-2">⚠️ Critical: Don't turn AC off</p>
                    <p className="text-sm text-[var(--body)]">
                      Set thermostat to 82°F (or higher). An empty home in Yuma heat can reach 130°F+, which damages furnishings, warps wood, and creates moisture/mold issues. Running AC at 82°F prevents extreme temperatures while saving electricity.
                    </p>
                  </div>
                </div>

                <div className="border-t border-[var(--line)] pt-6">
                  <h3 className="font-semibold text-[var(--ink)] text-lg mb-4">Final Walkthrough</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[var(--body)] ml-2">
                    <li>All doors and windows locked</li>
                    <li>All windows closed</li>
                    <li>Lights off (except maybe one on timer)</li>
                    <li>AC set to 82°F</li>
                    <li>Interior doors open (air circulation)</li>
                    <li>No perishables in kitchen</li>
                    <li>No standing water anywhere</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Professional Services */}
            <div className="rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-[var(--ink)] mb-6">Let Us Handle It</h2>
              <p className="text-[var(--body)] mb-6 text-sm">
                The difference between "looks clean" and "actually is clean" matters when you're gone for 6 months.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6">
                  <p className="font-semibold text-[var(--ink)] mb-3">🏠 Opening Clean</p>
                  <p className="text-sm text-[var(--body)]">
                    Deep clean before you arrive — you move in to a dust-free, fresh-smelling home ready to use immediately.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <p className="font-semibold text-[var(--ink)] mb-3">🔒 Closing Clean</p>
                  <p className="text-sm text-[var(--body)]">
                    Light refresh before you leave — we handle spiderwebs, dust, and potential mold sources professionally.
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-block rounded-full bg-[var(--accent)] px-8 py-4 text-white font-medium transition-all hover:shadow-lg hover:shadow-[var(--accent)]/30 hover:scale-105"
              >
                Schedule Seasonal Clean
              </Link>
              <p className="text-xs text-[var(--body)] mt-3">
                Opening: typically $249 deep clean • Closing: custom quote • Call (928) 298-5509
              </p>
            </div>

            {/* Why Yuma is Different */}
            <div className="rounded-2xl border border-[var(--line)] bg-white/70 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-[var(--ink)] mb-6">Why Yuma Snowbird Homes Need Extra Care</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-2xl">🌡️</span>
                  <div>
                    <p className="font-semibold text-[var(--ink)]">Extreme Summer Heat</p>
                    <p className="text-sm text-[var(--body)]">130°F+ inside an empty home damages wood, electronics, and creates moisture damage opportunities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">🌪️</span>
                  <div>
                    <p className="font-semibold text-[var(--ink)]">Haboob & Monsoon Dust</p>
                    <p className="text-sm text-[var(--body)]">Fine dust settles deeper in Arizona heat. Sealed homes can still infiltrate fine particles through tiny gaps.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">🏜️</span>
                  <div>
                    <p className="font-semibold text-[var(--ink)]">Desert Pests</p>
                    <p className="text-sm text-[var(--body)]">Scorpions, spiders, and insects find their way into closed homes. A clean home before closing prevents them from nesting.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">💧</span>
                  <div>
                    <p className="font-semibold text-[var(--ink)]">Mold Risk</p>
                    <p className="text-sm text-[var(--body)]">Even in the desert, AC runoff and moisture can create mold in closed bathrooms. Ventilation (leaving doors open) prevents it.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 md:px-16 bg-[var(--paper-light)]">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-6">Seasonal Home Ready?</h2>
            <p className="text-lg text-[var(--body)] mb-8">
              Let us handle the opening and closing. You focus on enjoying your winter home.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[var(--accent)] px-8 py-4 text-white font-medium transition-all hover:shadow-lg hover:shadow-[var(--accent)]/30 hover:scale-105"
            >
              Get a Free Seasonal Quote
            </Link>
            <p className="mt-6 text-sm text-[var(--body)]">
              Serving snowbird homeowners across Yuma County. Call (928) 298-5509 or text.
            </p>
          </div>
        </section>
      </main>
      <RevealFooter />
    </>
  );
}
