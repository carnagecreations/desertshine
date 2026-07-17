// Canonical service definitions — single source of truth for /services/[service]
// and the /areas/[city]/[service] local matrix pages. Slugs are URL-friendly and
// used everywhere (service pages, area pages, blog relatedServices).
export type Service = {
  slug: string;
  name: string;
  shortName: string;
  price: string;
  eyebrow: string;
  tagline: string;          // one-line value prop
  intro: string;            // 2-3 sentence lead paragraph
  keywords: string[];
  includes: string[];       // what the clean covers
  process: { step: string; detail: string }[];
  faqs: { q: string; a: string }[];
  // Used to build "<Service> in <City>" matrix copy — {city} is replaced at render.
  localAngle: string;
  relatedGuides: string[];  // guide slugs
};

export const SERVICES: Service[] = [
  {
    slug: 'house-cleaning',
    name: 'Recurring House Cleaning',
    shortName: 'House Cleaning',
    price: 'from $89/visit',
    eyebrow: 'Weekly · Bi-weekly · Monthly',
    tagline: 'The same cleaner, the same checklist, every single visit.',
    intro:
      'Recurring house cleaning keeps your home consistently done instead of occasionally rescued. You get a dedicated cleaner who learns your home once and keeps it that way — running the same room-by-room checklist on a schedule that fits your life, day or evening.',
    keywords: [
      'house cleaning yuma',
      'maid service yuma az',
      'recurring cleaning yuma',
      'residential cleaning yuma',
      'weekly house cleaning',
      'cleaning service near me',
    ],
    includes: [
      'Kitchens: counters, sinks, exterior appliances, floors',
      'Bathrooms: showers, tubs, toilets, mirrors, floors',
      'All rooms: dusting, surfaces, floors, trash, tidying',
      'Same cleaner and same checklist on every visit',
    ],
    process: [
      { step: 'Free flat quote', detail: 'Tell us your home size and we lock in a flat per-visit price — no hourly surprises.' },
      { step: 'Pick your rhythm', detail: 'Weekly saves 20%, bi-weekly 15%, monthly 10% — starting from your first recurring visit.' },
      { step: 'Same faces, every time', detail: 'A dedicated cleaner learns your preferences and keeps a photographed checklist.' },
    ],
    faqs: [
      {
        q: 'Do I have to sign a contract?',
        a: 'No. Recurring cleaning is month-to-month — pause, reschedule, or cancel anytime with 48 hours notice.',
      },
      {
        q: 'How do recurring discounts work?',
        a: 'Weekly saves 20%, bi-weekly 15%, and monthly 10% off the standard rate, starting from the first recurring visit.',
      },
      {
        q: 'Do I need to be home?',
        a: 'No. Most recurring clients give us a garage code or lockbox key, and we lock up when we leave.',
      },
    ],
    localAngle:
      'Desert dust never quits in {city}, which is exactly why a set cleaning rhythm beats one-off scrambles — we stay ahead of the dust instead of chasing it.',
    relatedGuides: ['recurring-cleaning-worth-the-cost', 'is-maid-service-worth-the-cost', 'standard-house-cleaning-checklist'],
  },
  {
    slug: 'deep-cleaning',
    name: 'Deep Cleaning',
    shortName: 'Deep Cleaning',
    price: 'from $179',
    eyebrow: 'The seasonal reset',
    tagline: 'Everything in a standard clean, plus the places dust hides in a desert town.',
    intro:
      'A deep clean is the full reset your home needs a few times a year. On top of a standard clean, we get into the spots routine cleaning skips — baseboards, blinds, vents, tile grout, shower glass, and inside the oven and refrigerator.',
    keywords: [
      'deep cleaning yuma',
      'deep clean service yuma az',
      'spring cleaning yuma',
      'grout cleaning yuma',
      'detailed house cleaning',
      'move in deep clean',
    ],
    includes: [
      'Baseboards, door frames, and light switches',
      'Blinds, ceiling fans, and air vents',
      'Inside oven and refrigerator',
      'Tile grout and shower glass detail',
    ],
    process: [
      { step: 'Walk-through quote', detail: 'Deep cleans are quoted on square footage and condition so the price is exact before we start.' },
      { step: 'Top-down detail', detail: 'We work high to low so dust falls onto surfaces we clean last, never onto finished work.' },
      { step: 'Photographed finish', detail: 'You get end-of-clean photos of the detail areas — grout, vents, and appliance interiors.' },
    ],
    faqs: [
      {
        q: 'How often should I get a deep clean?',
        a: 'Most Yuma homes benefit from a deep clean 2-4 times a year — more during haboob and monsoon season when dust load spikes.',
      },
      {
        q: 'Is a deep clean required before recurring service?',
        a: 'Not required, but for homes that have not had a professional clean in a while, starting with a deep clean gets everything to a baseline we can then maintain.',
      },
      {
        q: 'Do you clean inside the oven and fridge?',
        a: 'Yes — interior oven and refrigerator cleaning are included in every deep clean.',
      },
    ],
    localAngle:
      'Hard Colorado River water and fine desert dust are brutal on grout, glass, and vents in {city} homes. Our deep clean targets exactly those trouble spots.',
    relatedGuides: ['how-often-should-you-deep-clean', 'deep-cleaning-vs-regular-cleaning', 'how-to-clean-grout-like-a-pro'],
  },
  {
    slug: 'move-out-cleaning',
    name: 'Move-In / Move-Out Cleaning',
    shortName: 'Move-Out Cleaning',
    price: 'from $199',
    eyebrow: 'Deposit-ready, inspection-ready',
    tagline: 'Built around landlord inspection checklists — so you get your deposit back.',
    intro:
      'Move-out cleaning is built around the checklists landlords actually inspect against. Whether you are a renter chasing a deposit, a seller prepping a listing, or a landlord turning a unit fast, we clean the empty home top to bottom, inside every cabinet and appliance.',
    keywords: [
      'move out cleaning yuma',
      'move in cleaning yuma az',
      'rental turnover cleaning',
      'deposit cleaning yuma',
      'apartment cleaning yuma',
      'end of lease cleaning',
    ],
    includes: [
      'Inside every cabinet, drawer, and closet',
      'All appliances inside and out',
      'Windows, tracks, and sills',
      'Garage sweep-out on request',
    ],
    process: [
      { step: 'Book 2-3 days out', detail: 'Schedule the clean a couple days before your walkthrough so there is time for any touch-ups.' },
      { step: 'Checklist-driven clean', detail: 'We run a landlord-style inspection checklist so nothing that costs deposits gets missed.' },
      { step: 'Move-in ready', detail: 'Empty homes come back spotless — vents, tracks, and cabinet interiors included.' },
    ],
    faqs: [
      {
        q: 'Can you clean around my moving schedule?',
        a: 'Yes. We work mornings, evenings, and weekends, so we can clean after the truck is loaded or before new tenants arrive.',
      },
      {
        q: 'Do you clean inside cabinets and appliances?',
        a: 'Always — move-out cleans include inside every cabinet, drawer, closet, and appliance. That is where deposits are won or lost.',
      },
      {
        q: 'What if my landlord finds something?',
        a: 'Tell us within 24 hours and we return to re-clean the flagged areas free. That is our re-clean guarantee.',
      },
    ],
    localAngle:
      'Rental turnover near MCAS {city} moves fast during PCS season. We turn empty units inspection-ready on short notice, with no travel fee anywhere in the county.',
    relatedGuides: ['move-out-cleaning-checklist'],
  },
  {
    slug: 'office-cleaning',
    name: 'Office & Commercial Cleaning',
    shortName: 'Office & Commercial',
    price: 'custom quote',
    eyebrow: 'After-hours janitorial',
    tagline: 'Keyed access, supply management, and a walk-through report after every service.',
    intro:
      'Commercial cleaning for offices, clinics, and storefronts, scheduled around your business — not the other way around. We work after hours or on weekends so your team walks into a clean space every morning, with a walk-through report after every service.',
    keywords: [
      'office cleaning yuma',
      'commercial cleaning yuma az',
      'janitorial services yuma',
      'business cleaning yuma',
      'medical office cleaning',
      'after hours cleaning',
    ],
    includes: [
      'Nightly, weekly, or custom schedules',
      'Restrooms, breakrooms, and floors',
      'Trash, recycling, and consumables restock',
      'Walk-through report after every service',
    ],
    process: [
      { step: 'Site walk-through', detail: 'We tour your space and build a scope and flat monthly price around your square footage and traffic.' },
      { step: 'Keyed, after-hours access', detail: 'We clean when you are closed — evenings or weekends — so there is zero disruption to your team.' },
      { step: 'Reported every visit', detail: 'A short walk-through report after each service tells you exactly what was done.' },
    ],
    faqs: [
      {
        q: 'Do you clean after business hours?',
        a: 'Yes — nights and weekends are our standard for commercial accounts so your business is never disrupted.',
      },
      {
        q: 'Can you handle medical or clinical spaces?',
        a: 'Yes. We tailor scope and products for clinics and medical offices, including restroom and high-touch disinfection.',
      },
      {
        q: 'How is commercial cleaning priced?',
        a: 'Commercial work is a custom flat monthly rate based on square footage, frequency, and scope — quoted after a quick site walk-through.',
      },
    ],
    localAngle:
      'From downtown {city} storefronts to Foothills clinics, we build after-hours janitorial routes that keep your space presentable without ever getting in your team’s way.',
    relatedGuides: ['office-cleaning-guide-yuma-businesses'],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
