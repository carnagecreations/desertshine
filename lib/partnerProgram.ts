// Shared content for the /partners program pages. Kept in one place so the
// hub page and each audience page stay in sync, and so the reward numbers
// here match what's actually configured in the business manager app.
import { SITE } from './site';

export type PartnerCategory = {
  slug: string;
  navLabel: string;
  emoji: string;
  title: string;
  tagline: string;
  audience: string;
  intro: string[];
  howItWorks: string[];
  tiers: { count: number; reward: string }[];
  faq: { q: string; a: string }[];
  ctaSubject: string;
  ctaNote: string;
};

export const PARTNER_CATEGORIES: PartnerCategory[] = [
  {
    slug: 'property-managers',
    navLabel: 'Property Managers & RV Parks',
    emoji: '🏘️',
    title: 'Partner Program for Property Managers, RV Parks & HOAs',
    tagline: 'Give residents a reason to love move-in day — and earn free cleaning for your property.',
    audience: 'Property managers, RV & mobile home parks, and HOAs',
    intro: [
      "Every season, residents arrive to homes and units that need a deep clean before they can really settle in. We handle that — and give you a real reason for residents to book through you specifically.",
      "There's no cost to you, no exclusivity required, and no paperwork beyond a quick conversation to get set up.",
    ],
    howItWorks: [
      'We set you up with a unique referral code and a personal booking link — plus a printable QR code for flyers or a welcome packet.',
      'Any resident who books using your code or link gets $25 off their first cleaning, automatically.',
      'Every booking counts toward reward tiers for your office or clubhouse — the more residents you send our way, the more you earn.',
    ],
    tiers: [
      { count: 3, reward: 'A free standard cleaning for your office or clubhouse' },
      { count: 6, reward: '$75 credit toward your common-area cleaning' },
      { count: 10, reward: "Ongoing quarterly free cleaning for your office, for as long as we're partnered" },
    ],
    faq: [
      { q: 'Does this cost us anything?', a: 'No. There\'s no fee to join, and the $25 resident discount comes out of our side, not yours.' },
      { q: 'Do we have to do anything ongoing?', a: 'Just share your code however is easiest — a flyer at the office, a QR code in a welcome packet, or a mention when residents ask about local services.' },
      { q: 'We already recommend another cleaning company — is that a problem?', a: "Not at all. We're not asking for exclusivity, just the chance to be a second option residents can choose." },
    ],
    ctaSubject: 'Partner Program — Property Manager / RV Park',
    ctaNote: "Tell us your property name and we'll set up your code within a day.",
  },
  {
    slug: 'realtors',
    navLabel: 'Realtors',
    emoji: '🏡',
    title: 'Cleaning Partner Program for Yuma Realtors',
    tagline: 'Homes that show clean sell faster. Give your clients a discount — and earn free cleanings for your listings.',
    audience: 'Real estate agents and brokers',
    intro: [
      "A spotless home shows better, photographs better, and sells faster. We handle the listing-prep clean before photos and showings, and the move-in clean for your buyers at closing.",
      'This is a service partnership, not a referral fee arrangement — nothing cash changes hands. The rewards are cleaning services you can use yourself or pass along to clients.',
    ],
    howItWorks: [
      'We set you up with a unique referral code and booking link for your clients.',
      'Any client who books through your code or link gets $25 off — for a listing-prep clean or a move-in clean.',
      'Every referral earns you real rewards: free cleanings for your own listings, a closing-gift clean for clients, and priority scheduling.',
    ],
    tiers: [
      { count: 2, reward: 'A free move-out/listing-prep cleaning for your next listing' },
      { count: 5, reward: 'A free "closing gift" cleaning to hand any client at closing' },
      { count: 10, reward: 'Priority same-week scheduling on every listing, plus a shoutout as a Preferred Cleaning Partner on our site & social' },
    ],
    faq: [
      { q: 'Is this a referral fee or kickback?', a: "No — nothing cash changes hands with you directly. Rewards are cleaning services: a free listing-prep clean, a closing-gift clean, priority scheduling. It's a service perk, not a commission split." },
      { q: 'Do I have to switch from my current cleaner?', a: "Not at all — this just gives you a second option with a built-in discount for your clients." },
      { q: 'What if my clients pick their own vendors?', a: "That's fine — this isn't an endorsement, just a card or link you can pass along if it's useful to a seller who needs a fast turnaround." },
    ],
    ctaSubject: 'Cleaning Partner Program — Realtor',
    ctaNote: "Tell us your brokerage and we'll set up your code within a day.",
  },
  {
    slug: 'movers',
    navLabel: 'Movers & Move Managers',
    emoji: '📦',
    title: 'Partner Program for Movers & Senior Move Managers',
    tagline: "You're already there for the move. Give your clients one less thing to worry about.",
    audience: 'Moving companies, senior move managers, and downsizing specialists',
    intro: [
      'A move is already stressful — a fresh, clean home on the other end (or a spotless handoff on the way out) makes it easier. We handle the move-out clean and the move-in clean, so your clients don\'t have to.',
      "There's no cost to you, and it's an easy thing to mention right when clients are booking their move.",
    ],
    howItWorks: [
      'We set you up with a unique referral code and booking link.',
      'Any client who books through your code or link gets $25 off their move-out or move-in cleaning.',
      'Referrals earn you real rewards — free cleanings, service credit, and eventually a standing bundle deal you can offer your own customers.',
    ],
    tiers: [
      { count: 2, reward: 'A free move-out/move-in cleaning for your own home or office' },
      { count: 5, reward: '$75 service credit, plus we hand your card to every client who books through you' },
      { count: 10, reward: 'A standing "movers + cleaners" bundle deal to offer your customers, and a shoutout as a Preferred Cleaning Partner' },
    ],
    faq: [
      { q: 'Does this cost us anything?', a: 'No — there\'s no fee to join or refer clients.' },
      { q: 'My clients are already stressed — will this feel like an upsell?', a: "It's framed as a convenience, not a pitch — just a card or link in case a clean home is one less thing they want to worry about." },
      { q: 'My clients are elderly — I\'m careful who I refer.', a: "Understandable. We're happy to do a walkthrough or a trial cleaning first so you can see how we work before recommending us." },
    ],
    ctaSubject: 'Partner Program — Mover / Move Manager',
    ctaNote: "Tell us about your business and we'll set up your code within a day.",
  },
  {
    slug: 'vacation-rentals',
    navLabel: 'Vacation Rental Managers',
    emoji: '🔑',
    title: 'Turnover Cleaning Partner Program for Vacation Rental Managers',
    tagline: 'Same-day turnovers, guest-ready every time — plus rewards for every owner you send our way.',
    audience: 'Vacation rental and short-term rental property managers',
    intro: [
      "This one's a little different: instead of a resident discount, we're offering to become your turnover cleaning provider — beds made, bathrooms spotless, a guest-ready check before every arrival — at a locked-in partner rate instead of one-off invoices.",
      "If you manage more than one property, or know other owners, referring them in earns you real rewards on top of your own rate.",
    ],
    howItWorks: [
      'Start with a trial turnover on one property, no commitment — see the quality and turnaround for yourself.',
      "We lock in a partner rate for your ongoing turnovers, scaled to your property count and turnover frequency.",
      'Refer other property owners in and earn rewards for every one who books with us.',
    ],
    tiers: [
      { count: 3, reward: 'A free turnover on us, plus a locked-in partner rate on recurring turnovers' },
      { count: 6, reward: '$75 credit toward your own unit or office cleaning' },
      { count: 10, reward: "Priority same-day turnover scheduling across all your listings, for as long as we're partnered" },
    ],
    faq: [
      { q: 'Our turnaround windows are really tight — same-day, a few hours.', a: "That's exactly what we're built for. Give us one property to prove it on." },
      { q: 'How do you handle key/lockbox access?', a: 'However you already manage it for other vendors — lockbox code, smart lock, or a securely held key.' },
      { q: 'What does it cost?', a: 'It depends on property size and turnover frequency — the more properties or turnovers, the better the per-clean rate. Let\'s start with one property and go from there.' },
    ],
    ctaSubject: 'Turnover Cleaning Partnership — Vacation Rental Manager',
    ctaNote: "Tell us how many properties you manage and we'll put together a rate.",
  },
];

export function getPartnerCategory(slug: string): PartnerCategory | undefined {
  return PARTNER_CATEGORIES.find((c) => c.slug === slug);
}

export function mailtoFor(category: PartnerCategory): string {
  const body = `Hi Riot,\n\nI'd like to talk about the ${category.audience.toLowerCase()} partner program.\n\nBusiness name:\nBest phone/email to reach me:\n\n`;
  return `mailto:${SITE.email}?subject=${encodeURIComponent(category.ctaSubject)}&body=${encodeURIComponent(body)}`;
}
