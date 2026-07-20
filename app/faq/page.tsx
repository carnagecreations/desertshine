import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE } from '@/lib/site';
import { faqSchemaFrom } from '@/lib/schema';
import RevealFooter from '@/components/sections/RevealFooter';

export const metadata: Metadata = {
  title: 'Cleaning FAQs — Questions About House Cleaning in Yuma',
  description: 'Answers to common questions about house cleaning, pricing, our guarantee, scheduling, and how we work in Yuma, AZ.',
  alternates: { canonical: `${SITE.url}/faq` },
  openGraph: {
    title: 'Cleaning FAQs',
    description: 'Common questions about cleaning services, pricing, and how Clean Convictions works.',
    url: `${SITE.url}/faq`,
  },
};

const FAQ_GROUPS = [
  {
    category: 'Pricing & Costs',
    questions: [
      {
        q: 'How much does house cleaning cost?',
        a: 'Recurring home cleaning typically runs $129 per visit for a home up to about 1,500 sq ft with two bathrooms (compact homes start at $89). Deep cleans typically run $249, and move-out cleans typically run $299. Larger homes get an exact flat quote before we start—no surprises.',
      },
      {
        q: 'Do you charge travel fees?',
        a: 'No. Our flat rates are identical across Yuma, Somerton, San Luis, and surrounding areas. No travel surcharges, no matter where you are in the county.',
      },
      {
        q: 'What if my home is larger than 1,500 sq ft?',
        a: 'We quote larger homes individually based on square footage and bathrooms, but it\'s always a flat rate you know upfront—never "time and materials." You\'ll know the final cost before we start.',
      },
      {
        q: 'How do recurring discounts work?',
        a: 'Weekly service saves 20% off the standard rate, bi-weekly saves 15%, and monthly saves 10%—starting from the first recurring visit. So bi-weekly runs about $110 instead of $129.',
      },
      {
        q: 'Do you offer package deals?',
        a: 'We focus on consistency over discounting—the same clean, same checklist, same rate every visit. But we do offer recurring discounts for standing schedules.',
      },
    ],
  },
  {
    category: 'Scheduling & Availability',
    questions: [
      {
        q: 'How far in advance do I need to book?',
        a: 'We typically have same-week availability, even during peak seasons (haboob and monsoon). For one-time cleans, a few days works. For recurring service, we can usually start within a week.',
      },
      {
        q: 'Do you clean evenings or weekends?',
        a: 'Yes. Mornings, afternoons, evenings, and weekends—we work around your schedule. Just tell us what time works.',
      },
      {
        q: 'Do I need to be home?',
        a: 'No. Most recurring clients give us a garage code or a lockbox key. We let ourselves in, clean, and lock up when we leave. You\'ll get a confirmation text when we\'re done.',
      },
      {
        q: 'What if I need to reschedule?',
        a: 'No problem. Give us 48 hours notice and we\'ll find you a different time. Less notice and you might lose that slot, but we\'ll do our best to fit you in.',
      },
      {
        q: 'Do you clean holidays?',
        a: 'We take major holidays off (Thanksgiving, Christmas, New Year\'s), but we\'re available most other days. Let us know your preferences when you book.',
      },
    ],
  },
  {
    category: 'What\'s Included & Guarantees',
    questions: [
      {
        q: 'What exactly does a standard clean include?',
        a: 'Dusting all surfaces, vacuuming and mopping floors, cleaning kitchen counters and sinks, scrubbing bathrooms, wiping light switches and door handles, emptying trash. We publish the full checklist on our services page so you know exactly what to expect.',
      },
      {
        q: 'What\'s NOT included in a standard clean?',
        a: 'Inside the oven and fridge, inside cabinets, hand-scrubbed baseboards, washing blinds, grout detail, and cleaning behind/under heavy furniture. Those are part of a deep clean instead.',
      },
      {
        q: 'What about dishes? Do you wash them?',
        a: 'For recurring cleaning, we clean the sink and counters but not dishes inside. We ask clients to load the dishwasher before we arrive, or we can hand-wash and put away dirty dishes for a $25 add-on per visit. For deep cleans and move-in/move-out service, washing and putting away all dishes is included in the price.',
      },
      {
        q: 'What if something isn\'t cleaned right?',
        a: 'Tell us within 24 hours and we come back and re-clean it free. That\'s the guarantee—no forms, no fuss. You get what you paid for.',
      },
      {
        q: 'Do you bring your own supplies?',
        a: 'Yes—everything. Professional-grade cleaners, microfiber cloths, mops, vacuums. If you have specific products you prefer, just let us know and we\'ll use those instead.',
      },
      {
        q: 'Are you insured?',
        a: 'Yes. We carry standard liability coverage. If your business requires additional bonding or certificates, ask us directly and we\'ll tell you straight.',
      },
    ],
  },
  {
    category: 'Yuma-Specific Questions',
    questions: [
      {
        q: 'What makes cleaning in Yuma different?',
        a: 'Our Colorado River water is mineral-heavy, leaving hard-water stains on glass and fixtures. Plus haboob and monsoon dust settles faster here than most places. We know how to handle both.',
      },
      {
        q: 'How often should I clean during haboob season?',
        a: 'Most Yuma homes benefit from bi-weekly cleaning during May–September instead of monthly. Dust settles quickly in our climate, so frequent, light cleaning works better than occasional deep cleaning.',
      },
      {
        q: 'Do you clean before and after haboobs?',
        a: 'Yes. We recommend a deep clean before haboob season starts (May), then maintain bi-weekly during the season. After a major haboob, a deep clean within 48 hours pulls dust from vents and hidden corners.',
      },
      {
        q: 'Can you remove hard-water stains from shower glass?',
        a: 'Yes, but they often need a deep clean (hand-scrubbing and sealing) rather than regular cleaning. Hard-water deposits in our water are stubborn. A deep clean includes this detail.',
      },
      {
        q: 'Do you work with snowbird homeowners?',
        a: 'Absolutely. We specialize in seasonal snowbird cleans—opening homes in October (deep clean) and closing in April (light refresh) so your winter home is always ready or protected.',
      },
    ],
  },
  {
    category: 'Special Services',
    questions: [
      {
        q: 'What\'s a move-out clean?',
        a: 'Built to pass landlord inspections. Includes everything in a deep clean plus inside every cabinet, closet, and appliance. Typically $299 for homes up to 1,500 sq ft—and worth every dollar if it saves your security deposit.',
      },
      {
        q: 'Do you do commercial office cleaning?',
        a: 'Yes. We offer after-hours janitorial service for offices, clinics, and storefronts. Schedule daily, weekly, or custom. Get a quote by calling us at (928) 298-5509.',
      },
      {
        q: 'Do you clean pet homes?',
        a: 'Yes. We clean homes with pets every day. Hair, dander, and litter dust need more attention—we handle all of it. Tell us about your pets when you book and we\'ll use pet-safe products if you prefer.',
      },
      {
        q: 'Can you help prepare a home before guests arrive?',
        a: 'Yes. Many clients book a one-time clean before hosting or entertaining. We can do a quick refresh or a full deep clean depending on what you need.',
      },
      {
        q: 'Do you organize or declutter?',
        a: 'We tidy and straighten during cleans, but heavy organizing or decluttering isn\'t our service. We focus on cleaning.',
      },
    ],
  },
  {
    category: 'Green & Safety',
    questions: [
      {
        q: 'Do you use eco-friendly products?',
        a: 'We use professional-grade cleaners that work. If you prefer green or pet-safe products, just let us know when you book and we\'ll bring those instead.',
      },
      {
        q: 'Are your products safe for pets and kids?',
        a: 'We use cleaners that are safe when used and rinsed properly. If you have pets or kids with sensitivities, tell us upfront and we\'ll use gentler options.',
      },
      {
        q: 'What if someone in my home has allergies?',
        a: 'Let us know. We use HEPA-filter vacuums and microfiber cloths that trap dust instead of spreading it. We\'re happy to avoid certain products if you have sensitivities.',
      },
    ],
  },
  {
    category: 'Reviews & Reputation',
    questions: [
      {
        q: 'Can I see reviews?',
        a: 'Yes. We\'re on Google—search "Clean Convictions Yuma" to see our reviews and rating. We\'re also happy to provide references if you ask.',
      },
      {
        q: 'How long have you been in business?',
        a: 'We just launched in 2026, so we\'re new and still ramping up. That means we\'re hungry to do great work and get established reviews from clients like you.',
      },
      {
        q: 'What if I want to leave a review?',
        a: 'We\'d love that. You can leave a review on our Google Business Profile (search "Clean Convictions Yuma"), or just tell us directly. Reviews from real clients are how we grow.',
      },
    ],
  },
];

export default function FAQPage() {
  const allQuestions = FAQ_GROUPS.flatMap((g) => g.questions);
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaFrom(allQuestions)) }} />

      <main className="relative z-10 bg-[var(--paper)]">
        <section className="pt-40 pb-12 px-6 md:px-16">
          <div className="mx-auto max-w-3xl">
            <Breadcrumbs items={breadcrumbs} />
            <h1 className="mt-8 text-5xl md:text-6xl font-bold text-[var(--ink)] mb-6">
              Questions, answered.
            </h1>
            <p className="text-lg text-[var(--body)] leading-relaxed max-w-2xl">
              Everything you need to know about how we work, pricing, scheduling, and what to expect from Clean Convictions in Yuma.
            </p>
          </div>
        </section>

        <section className="px-6 py-20 md:px-16">
          <div className="mx-auto max-w-3xl">
            {FAQ_GROUPS.map((group) => (
              <div key={group.category} className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--ink)] mb-8 pb-4 border-b border-[var(--line)]">
                  {group.category}
                </h2>
                <div className="divide-y divide-[var(--line)]">
                  {group.questions.map((item) => (
                    <details key={item.q} className="group py-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors">
                        {item.q}
                        <span className="text-[var(--accent)] transition-transform duration-300 group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-4 text-sm text-[var(--body)] leading-relaxed">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 md:px-16 bg-[var(--paper-light)]">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-6">Still have questions?</h2>
            <p className="text-lg text-[var(--body)] mb-8">
              We answer our own phone and reply to texts same day. Seriously.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={SITE.phoneHref}
                className="rounded-full bg-[var(--accent)] px-8 py-4 text-white font-medium transition-all hover:shadow-lg hover:shadow-[var(--accent)]/30 hover:scale-105"
              >
                Call {SITE.phone}
              </a>
              <a
                href={SITE.smsHref}
                className="rounded-full border-2 border-[var(--accent)] px-8 py-4 text-[var(--accent)] font-medium transition-all hover:bg-[var(--accent)]/10"
              >
                Text Us
              </a>
              <Link
                href="/contact"
                className="rounded-full border-2 border-[var(--accent)] px-8 py-4 text-[var(--accent)] font-medium transition-all hover:bg-[var(--accent)]/10"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <RevealFooter />
    </>
  );
}
