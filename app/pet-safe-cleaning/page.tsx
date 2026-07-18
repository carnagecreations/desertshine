import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Pet-Safe Cleaning in Yuma, AZ | Non-Toxic Home Cleaning',
  description: 'Cleaning products safe for cats, dogs, horses, reptiles, and all pets. We use pet-safe cleaners with no VOCs, no residue, no hidden chemicals. 24-hour re-clean guarantee.',
  alternates: { canonical: `${SITE.url}/pet-safe-cleaning` },
};

export default function PetSafeCleaningPage() {
  return (
    <main className="relative z-10 bg-[var(--paper)]">
      {/* Hero */}
      <section className="pt-40 pb-12 px-6 md:px-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--ink)] mb-6">
            Cleaning that's safe for your animals.
          </h1>
          <p className="text-xl text-[var(--body)] leading-relaxed max-w-3xl">
            72% of pet owners worry about chemical residue in their homes. We eliminate that worry.
            Experienced with all animals—from horses to reptiles—using only pet-safe products with
            transparent ingredients and zero hidden toxins.
          </p>
        </div>
      </section>

      {/* The problem: why standard cleaners aren't safe */}
      <section className="px-6 py-20 md:px-16 bg-red-50/40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[var(--ink)] mb-8">Why standard cleaners harm pets</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-[var(--ink)] mb-3">🫁 Airborne toxins (VOCs)</h3>
              <p className="text-[var(--body)]">
                Standard cleaners release volatile organic compounds that linger in the air for hours. Pets
                breathe them in continuously—their lungs are smaller, their exposure per pound of body weight is
                higher. Studies link VOC exposure to respiratory issues and neurological effects in animals.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--ink)] mb-3">🐾 Skin & paw contact</h3>
              <p className="text-[var(--body)]">
                Pets walk on cleaned surfaces barefoot. Chemical residue is absorbed through paws and ingested
                during grooming. Ammonia, bleach, and phenols accumulate in the body over time, causing chronic
                inflammation and organ stress.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--ink)] mb-3">⚕️ Vet data confirms it</h3>
              <p className="text-[var(--body)]">
                The ASPCA reports 10,000+ poisoning calls yearly from household chemicals. Most preventable.
                Vets increasingly recommend pet-safe homes as first-line prevention for allergies, asthma, and
                liver issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our approach: specificity = trust */}
      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[var(--ink)] mb-8">Our approach: transparency first</h2>

          <div className="space-y-6">
            <div className="rounded-2xl border border-[var(--line)] p-6 bg-white/50">
              <h3 className="text-lg font-semibold text-[var(--ink)] mb-2">1. We name every product</h3>
              <p className="text-[var(--body)]">
                No "proprietary blend" mystery. Before we arrive, you get a list of exactly what we're using.
                You can look up the SDS (safety data sheet) yourself. Transparency is the antidote to anxiety.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--line)] p-6 bg-white/50">
              <h3 className="text-lg font-semibold text-[var(--ink)] mb-2">2. Zero VOCs, zero residue</h3>
              <p className="text-[var(--body)]">
                Every product is either water-based or plant-based with verified safety data. No ammonia,
                bleach, phenols, or synthetic fragrances. We test surfaces after cleaning to confirm no
                chemical residue remains.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--line)] p-6 bg-white/50">
              <h3 className="text-lg font-semibold text-[var(--ink)] mb-2">3. We know animals</h3>
              <p className="text-[var(--body)]">
                Experience matters. We've cleaned homes with dogs, cats, horses, rabbits, ferrets, reptiles,
                and birds. We know which products can irritate which species, how to avoid stress during
                cleaning, and how to handle special cases (respiratory issues, skin sensitivities, elderly pets).
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--line)] p-6 bg-white/50">
              <h3 className="text-lg font-semibold text-[var(--ink)] mb-2">4. We take longer, on purpose</h3>
              <p className="text-[var(--body)]">
                Pet-safe cleaning can't be rushed. We use extra ventilation time, allow longer drying periods,
                and work around your animal's comfort. Where a standard clean might take 2–3 hours, a pet-safe
                clean takes 3–4. That's not inefficiency—it's care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sick-pet disinfection service */}
      <section className="px-6 py-20 md:px-16 bg-emerald-50/40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[var(--ink)] mb-4">After your pet has been sick</h2>
          <p className="text-lg text-[var(--body)] leading-relaxed max-w-3xl mb-8">
            A vomiting or diarrhea episode isn&apos;t just a mess—it can be contagious. Parvovirus, giardia,
            and feline panleukopenia survive on floors and fabric for weeks and standard mopping doesn&apos;t
            touch them. We disinfect the way a vet clinic does, then leave the home safe for every animal in it.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[var(--line)] bg-white/60 p-6">
              <h3 className="font-semibold text-[var(--ink)] mb-2">Kills what mopping misses</h3>
              <p className="text-sm text-[var(--body)]">
                Vet-grade disinfectants with proven kill-times against parvo, giardia, and common pathogens—
                applied at the correct dwell time, not just wiped on and off.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--line)] bg-white/60 p-6">
              <h3 className="font-semibold text-[var(--ink)] mb-2">Safe once dry</h3>
              <p className="text-sm text-[var(--body)]">
                We rinse and neutralize treated surfaces so the disinfectant does its job during cleaning,
                then leaves nothing behind for paws or tongues afterward.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--line)] bg-white/60 p-6">
              <h3 className="font-semibold text-[var(--ink)] mb-2">Stops the spread</h3>
              <p className="text-sm text-[var(--body)]">
                In a multi-pet home, one sick animal can infect the rest. Prompt, thorough disinfection is
                the difference between one vet bill and several.
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm text-[var(--body)]">
            Add it to any clean in the estimator (typically +$40), or call us for a same-week visit if it&apos;s urgent.
          </p>
        </div>
      </section>

      {/* The honest trade-off */}
      <section className="px-6 py-20 md:px-16 bg-amber-50/40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[var(--ink)] mb-6">The trade-off (and why it's worth it)</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-[var(--ink)] mb-3">Pet-safe costs more upfront</h3>
              <p className="text-[var(--body)] text-sm">
                Certified pet-safe products cost 2–3× standard cleaners. We pass that cost on honestly.
                No markup—just real ingredient prices. Pet-safe adds about $15–30 to any clean, depending on
                home size and product needs.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-emerald-700 mb-3">But the ROI is clear</h3>
              <p className="text-[var(--body)] text-sm">
                Vet visits for respiratory issues: $300–800 per visit. Pet medications: $50–200/month.
                Vet-recommended cleaning at $150? That's preventive medicine, not an expense. Most pet owners
                save money in the first year.
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-[var(--body)] italic">
            We're rarely the cheapest option. We're the safest one.
          </p>
        </div>
      </section>

      {/* Why we can make this claim */}
      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[var(--ink)] mb-8">Why trust our expertise</h2>

          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-3xl">🏥</span>
              <div>
                <h3 className="font-semibold text-[var(--ink)]">Veterinary alignment</h3>
                <p className="text-[var(--body)] text-sm">
                  We use products recommended by veterinary toxicologists. Our protocols align with ASPCA
                  and Pet Poison Helpline guidelines.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-3xl">🔬</span>
              <div>
                <h3 className="font-semibold text-[var(--ink)]">Ingredient verification</h3>
                <p className="text-[var(--body)] text-sm">
                  Every product has published SDS (safety data sheet) and third-party toxicology testing.
                  We can show you the data.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-3xl">🐴</span>
              <div>
                <h3 className="font-semibold text-[var(--ink)]">Real-world experience</h3>
                <p className="text-[var(--body)] text-sm">
                  Years working with diverse animals: horses (sensitive respiratory systems), reptiles
                  (thin permeable skin), elderly pets (compromised immune systems). We've learned what works.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-3xl">🛡️</span>
              <div>
                <h3 className="font-semibold text-[var(--ink)]">24-hour re-clean guarantee</h3>
                <p className="text-[var(--body)] text-sm">
                  If your pet has an adverse reaction within 24 hours, we re-clean the affected areas free.
                  We stand behind this promise because we're confident in our work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 md:px-16 bg-white/50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-[var(--ink)] mb-12">Questions pet owners ask</h2>

          <div className="divide-y divide-[var(--line)]">
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors">
                Are your products truly non-toxic?
                <span className="text-[var(--accent)] transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[var(--body)]">
                Yes. "Non-toxic" means LD50 (lethal dose for 50% of test subjects) is not achieved at realistic
                exposure levels. Every product we use has published toxicology data proving this. We can send you
                the safety sheets before we arrive.
              </p>
            </details>

            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors">
                What about pets with respiratory issues or allergies?
                <span className="text-[var(--accent)] transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[var(--body)]">
                Pet-safe cleaning often *improves* their symptoms because we're removing the irritants causing
                flare-ups. We can customize further: pre-warn us about sensitivities, and we'll avoid even mild
                irritants. In severe cases, we use only distilled water and enzyme-based cleaners with zero
                additives.
              </p>
            </details>

            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors">
                Do you charge differently for pet-safe cleaning?
                <span className="text-[var(--accent)] transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[var(--body)]">
                Yes, but not as a hidden "pet fee." It's transparent: pet-safe products add about $15–30 to
                your clean, depending on home size and product needs. You see the breakdown in the estimator
                before we arrive, no surprises.
              </p>
            </details>

            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors">
                What if my pet has a specific reaction during cleaning?
                <span className="text-[var(--accent)] transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[var(--body)]">
                We stop immediately, ventilate, and remove the offending product. If a reaction occurs within
                24 hours (itching, sneezing, vomiting, breathing changes), call us and we re-clean those areas
                at no cost. Our 24-hour re-clean guarantee covers pet reactions specifically.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[var(--ink)] mb-6">
            Your animals deserve better than average.
          </h2>
          <p className="text-lg text-[var(--body)] mb-8">
            Dial in your pet-safe cleaning in the estimator. Tell us about your animals, and we'll handle
            the rest with care and transparency.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 text-lg font-medium text-white transition-all hover:shadow-lg hover:shadow-[var(--accent)]/30 hover:scale-105"
          >
            Get a pet-safe quote
          </Link>
          <p className="mt-4 text-sm text-[var(--body)]">
            Or call/text {SITE.phone}
          </p>
        </div>
      </section>
    </main>
  );
}
