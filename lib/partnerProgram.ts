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
  /** One-line summary used on the hub cards and the comparison strip. */
  headline: string;
  /** The pain this program actually solves, in the partner's own terms. */
  problem: { heading: string; body: string };
  intro: string[];
  /** What the people they send us walk away with. */
  clientWins: { icon: string; title: string; body: string }[];
  /** What the partner gets that isn't a reward tier — the standing perks. */
  partnerWins: { icon: string; title: string; body: string }[];
  howItWorks: string[];
  tiers: { count: number; reward: string }[];
  /** Plain-language summary of the best tier, for hub cards. */
  topReward: string;
  faq: { q: string; a: string }[];
  ctaSubject: string;
  ctaNote: string;
  ctaHeadline: string;
};

/** Everything a new partner is handed on day one — the same for every program. */
export const PARTNER_TOOLKIT: { icon: string; title: string; body: string }[] = [
  {
    icon: '🔖',
    title: 'Your own referral code',
    body: 'Built from your business name, so it reads like you — DESERT-SKIES-RV, not a random string. People can say it out loud.',
  },
  {
    icon: '🔗',
    title: 'A personal booking link',
    body: 'Sends people straight to our quote form with your code already attached. The $25 off shows up on their screen before they type a thing.',
  },
  {
    icon: '📱',
    title: 'A printable QR flyer',
    body: 'Print-ready PDF for your front desk, welcome packet, or listing folder. Your name on it, our number on it, scan and done.',
  },
  {
    icon: '📇',
    title: 'Cards to hand out',
    body: 'A stack of business cards with your code printed on them, dropped off to you — no cost, no minimum, more whenever you run out.',
  },
  {
    icon: '📊',
    title: 'A referral count you can check',
    body: "Text us any time and we'll tell you exactly where you stand and what's next. No dashboard to log into, no points to decode.",
  },
  {
    icon: '📞',
    title: 'A direct line to the owner',
    body: `Not a call center. You text ${SITE.phone} and Riot answers — same number, same person, every time.`,
  },
];

/** Risk reversal. Every objection a reasonable person would raise, answered up front. */
export const PARTNER_GUARANTEES: { title: string; body: string }[] = [
  { title: 'Free to join', body: 'No fee, no buy-in, no minimum volume to stay in the program.' },
  { title: 'No exclusivity', body: "Keep whoever you already use. We're a second option, not a replacement." },
  { title: 'No contract', body: 'Nothing to sign. Stop sending people whenever you want, for any reason.' },
  { title: 'Live in one business day', body: 'Tell us your business name today, your code and link work tomorrow.' },
  { title: 'Rewards never expire', body: "Earned is earned. Use a free cleaning whenever it's useful to you." },
  { title: 'Your name stays protected', body: "Anyone unhappy gets a free re-clean within 24 hours. You'll never eat a bad recommendation." },
];

/** Why a partner should trust us with their reputation — facts, not adjectives. */
export const PARTNER_WHY_US: { metric: string; label: string; body: string }[] = [
  {
    metric: '24 hrs',
    label: 'Re-clean guarantee',
    body: "If anyone you send us isn't happy, they tell us within 24 hours and we come back and redo it free. No argument, no invoice.",
  },
  {
    metric: 'Flat',
    label: 'Published pricing',
    body: 'Rates are on the site in the open. Your people get an exact quote before we book — nothing changes at the door.',
  },
  {
    metric: 'Same week',
    label: 'Typical turnaround',
    body: 'Mornings, evenings, weekends. Tight move-out and turnover windows are the normal case for us, not a favor.',
  },
  {
    metric: 'Yuma',
    label: 'Locally owned',
    body: 'Same flat rates across Yuma, Fortuna Foothills, Somerton, San Luis, Wellton, and Winterhaven — no travel fee anywhere in the county.',
  },
];

/** The honest side-by-side. What makes this different from the usual arrangement. */
export const PARTNER_COMPARISON: { point: string; typical: string; ours: string }[] = [
  { point: 'Cost to join', typical: 'Sometimes a fee, a packet, or a minimum', ours: 'Free, and there is no minimum' },
  { point: 'What your people get', typical: 'Nothing — the discount is yours, not theirs', ours: '$25 off their first clean, automatically' },
  { point: 'Exclusivity', typical: 'Drop your current vendor to qualify', ours: 'Keep whoever you use. No exclusivity, ever' },
  { point: 'Tracking', typical: 'A portal, a login, and a points balance', ours: 'Text us and a human tells you your count' },
  { point: 'Paperwork', typical: 'An agreement, a W-9, a vendor packet', ours: 'One conversation. Nothing to sign' },
  { point: 'Who answers when something goes wrong', typical: 'A dispatcher or a ticket queue', ours: `The owner, at ${SITE.phone}` },
];

export const PARTNER_CATEGORIES: PartnerCategory[] = [
  {
    slug: 'property-managers',
    navLabel: 'Property Managers & RV Parks',
    emoji: '🏘️',
    title: 'Partner Program for Property Managers, RV Parks & HOAs',
    tagline: 'Give residents a reason to love move-in day — and earn free cleaning for your property.',
    audience: 'Property managers, RV & mobile home parks, and HOAs',
    headline: 'A vendor answer for every resident who asks — and a clean office out of it.',
    problem: {
      heading: 'You get asked the same question every season',
      body: "Someone's unit needs a deep clean before they move in, a snowbird is opening up for the winter, or a tenant moved out and left the place rough. Right now that question costs you a phone call, a vendor you half-trust, and the risk that a bad job lands on your desk instead of theirs. This turns that into a card you hand over.",
    },
    intro: [
      "Every season, residents arrive to homes and units that need a deep clean before they can really settle in. We handle that — and give you a real reason for residents to book through you specifically.",
      "There's no cost to you, no exclusivity required, and no paperwork beyond a quick conversation to get set up.",
    ],
    clientWins: [
      { icon: '💵', title: '$25 off, automatically', body: 'Applied the moment they use your code — no coupon to remember, no asking at the door.' },
      { icon: '📋', title: 'A flat quote before we book', body: 'They know the exact number up front. Nobody comes back to you about a surprise bill.' },
      { icon: '🛡️', title: 'A guarantee that protects you', body: "Unhappy within 24 hours means a free re-clean. Your recommendation can't blow up in your face." },
    ],
    partnerWins: [
      { icon: '🏢', title: 'Free cleaning for your office', body: 'Your clubhouse, leasing office, or common area gets cleaned on us as referrals add up.' },
      { icon: '⏱️', title: 'Turnover priority', body: 'Unit turns get scheduled ahead of the general queue once you are a partner — vacancy days cost you more than they cost us.' },
      { icon: '🗂️', title: 'One vendor answer, on paper', body: 'A flyer for the welcome packet and cards for the front desk, so any staff member can answer the question without calling you.' },
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
    topReward: 'Quarterly free office cleaning, ongoing',
    faq: [
      { q: 'Does this cost us anything?', a: "No. There's no fee to join, and the $25 resident discount comes out of our side, not yours." },
      { q: 'Do we have to do anything ongoing?', a: 'Just share your code however is easiest — a flyer at the office, a QR code in a welcome packet, or a mention when residents ask about local services.' },
      { q: 'We already recommend another cleaning company — is that a problem?', a: "Not at all. We're not asking for exclusivity, just the chance to be a second option residents can choose." },
      { q: 'What happens if a resident is unhappy with the clean?', a: "They tell us within 24 hours and we come back and redo it free — and you hear about it from us, not from them. A bad job is our problem to fix, not a mark against your office." },
      { q: 'Can we use this for unit turns, not just residents?', a: 'Yes, and most partners do. Move-out and turnover cleans are the bulk of what we do for properties — your own turn work counts toward your tiers the same as a resident booking.' },
      { q: 'How fast can you take a unit?', a: `Usually same week, often sooner on a turn. Tight windows are normal for us — call ${SITE.phone} with the date and we'll tell you straight whether we can hold it.` },
    ],
    ctaSubject: 'Partner Program — Property Manager / RV Park',
    ctaNote: "Tell us your property name and we'll set up your code within a day.",
    ctaHeadline: 'Give your residents a better answer.',
  },
  {
    slug: 'realtors',
    navLabel: 'Realtors',
    emoji: '🏡',
    title: 'Cleaning Partner Program for Yuma Realtors',
    tagline: 'Homes that show clean sell faster. Give your clients a discount — and earn free cleanings for your listings.',
    audience: 'Real estate agents and brokers',
    headline: 'Listing-prep and closing-gift cleans, on a code your clients can actually use.',
    problem: {
      heading: 'Photos are Thursday and the house is not ready',
      body: "Every agent has the same week: the listing needs to shoot clean, the seller is overwhelmed, and the cleaner you called is booked out ten days. Or you close on Friday and want to hand your buyer something better than a bottle of wine. This is a code you keep in your phone for both of those.",
    },
    intro: [
      'A spotless home shows better, photographs better, and sells faster. We handle the listing-prep clean before photos and showings, and the move-in clean for your buyers at closing.',
      'This is a service partnership, not a referral fee arrangement — nothing cash changes hands. The rewards are cleaning services you can use yourself or pass along to clients.',
    ],
    clientWins: [
      { icon: '💵', title: '$25 off their first clean', body: 'Seller prepping to list or buyer moving in — either way your code takes $25 off, automatically.' },
      { icon: '📸', title: 'Ready before the shoot', body: 'Tell us the photo date. Listing-prep cleans get scheduled around your timeline, not the other way around.' },
      { icon: '🎁', title: 'A closing gift that gets used', body: 'A clean home on day one beats a gift basket. Your name is on it every time they notice it.' },
    ],
    partnerWins: [
      { icon: '🏠', title: 'Free cleans for your own listings', body: 'Earn listing-prep cleans you can spend on whichever property needs it most that month.' },
      { icon: '⚡', title: 'Priority same-week scheduling', body: 'Partnered agents get slotted ahead of the general queue. Days on market are expensive; a clean should not add to them.' },
      { icon: '🤝', title: 'No commission, no compliance headache', body: "Nothing cash moves between us, so there's no referral fee to disclose and nothing for your broker to review. Rewards are services." },
    ],
    howItWorks: [
      'We set you up with a unique referral code and booking link for your clients.',
      'Any client who books through your code or link gets $25 off — for a listing-prep clean or a move-in clean.',
      'Every referral earns you real rewards: free cleanings for your own listings, a closing-gift clean for clients, and priority scheduling.',
    ],
    tiers: [
      { count: 5, reward: 'A free move-out/listing-prep cleaning for your next listing' },
      { count: 8, reward: 'A free "closing gift" cleaning to hand any client at closing' },
      { count: 12, reward: 'Priority same-week scheduling on every listing, plus a shoutout as a Preferred Cleaning Partner on our site & social' },
    ],
    topReward: 'Priority scheduling + Preferred Partner listing',
    faq: [
      { q: 'Is this a referral fee or kickback?', a: "No — nothing cash changes hands with you directly. Rewards are cleaning services: a free listing-prep clean, a closing-gift clean, priority scheduling. It's a service perk, not a commission split." },
      { q: 'Do I have to switch from my current cleaner?', a: 'Not at all — this just gives you a second option with a built-in discount for your clients.' },
      { q: 'What if my clients pick their own vendors?', a: "That's fine — this isn't an endorsement, just a card or link you can pass along if it's useful to a seller who needs a fast turnaround." },
      { q: 'How fast can you turn a listing around?', a: `Usually same week, and we will tell you honestly if we can't hit your photo date rather than taking the job and running late. Call ${SITE.phone} with the date.` },
      { q: 'Do you handle occupied homes and vacant ones differently?', a: 'Yes. Occupied listing-prep is a show-ready clean that works around a family still living there. Vacant is a full move-out clean — baseboards, inside appliances, blinds, the whole thing.' },
      { q: 'What if a seller complains about the clean?', a: 'They tell us within 24 hours and we redo it free. You hear it from us first. Your recommendation is the thing we are protecting.' },
    ],
    ctaSubject: 'Cleaning Partner Program — Realtor',
    ctaNote: "Tell us your brokerage and we'll set up your code within a day.",
    ctaHeadline: 'Put a cleaner in your phone you can actually count on.',
  },
  {
    slug: 'movers',
    navLabel: 'Movers & Move Managers',
    emoji: '📦',
    title: 'Partner Program for Movers & Senior Move Managers',
    tagline: "You're already there for the move. Give your clients one less thing to worry about.",
    audience: 'Moving companies, senior move managers, and downsizing specialists',
    headline: 'The clean on either end of the move, handled — and rewarded.',
    problem: {
      heading: 'The clean is the part nobody planned for',
      body: "The truck is loaded, the old place has to be broom-clean for a deposit, and the new place hasn't been touched in a month. Your client asks you who to call, on the most stressful day of their year. Handing them a card with $25 already on it is a better answer than \"try Google.\"",
    },
    intro: [
      "A move is already stressful — a fresh, clean home on the other end (or a spotless handoff on the way out) makes it easier. We handle the move-out clean and the move-in clean, so your clients don't have to.",
      "There's no cost to you, and it's an easy thing to mention right when clients are booking their move.",
    ],
    clientWins: [
      { icon: '💵', title: '$25 off either end', body: 'Move-out or move-in, the discount applies the same. No fine print about which one.' },
      { icon: '🔑', title: 'Deposit-ready move-outs', body: 'Inspection-standard clean — appliances, baseboards, blinds — so the deposit conversation is short.' },
      { icon: '🗓️', title: 'Scheduled around the truck', body: 'We work the day after load-out or the day before arrival. Tell us the move date, we build around it.' },
    ],
    partnerWins: [
      { icon: '🧹', title: 'A free clean for yourself', body: 'Your own home or your office, on us, once referrals add up. No strings on when you use it.' },
      { icon: '📦', title: 'A bundle you can advertise', body: 'A standing movers-plus-cleaners deal you can quote as part of your own package — a real differentiator against the other guys.' },
      { icon: '↩️', title: 'Reciprocal referrals', body: "Every client of ours who needs a mover hears your name. We get asked constantly and we'd rather have someone to point at." },
    ],
    howItWorks: [
      'We set you up with a unique referral code and booking link.',
      'Any client who books through your code or link gets $25 off their move-out or move-in cleaning.',
      'Referrals earn you real rewards — free cleanings, service credit, and eventually a standing bundle deal you can offer your own customers.',
    ],
    tiers: [
      { count: 5, reward: 'A free move-out/move-in cleaning for your own home or office' },
      { count: 8, reward: '$75 service credit, plus we hand your card to every client who books through you' },
      { count: 12, reward: 'A standing "movers + cleaners" bundle deal to offer your customers, and a shoutout as a Preferred Cleaning Partner' },
    ],
    topReward: 'A bundle deal you can sell + reciprocal referrals',
    faq: [
      { q: 'Does this cost us anything?', a: "No — there's no fee to join or refer clients." },
      { q: 'My clients are already stressed — will this feel like an upsell?', a: "It's framed as a convenience, not a pitch — just a card or link in case a clean home is one less thing they want to worry about." },
      { q: "My clients are elderly — I'm careful who I refer.", a: "Understandable. We're happy to do a walkthrough or a trial cleaning first so you can see how we work before recommending us." },
      { q: 'Do you send business back our way?', a: "Yes, and we'd like to. We get asked for a mover almost as often as we get asked for a cleaner, and right now we don't have a good answer. Partners are who we name." },
      { q: 'Can you clean the same day as the move?', a: `Often, yes — day-of and next-day are the normal ask for move work. Give us the load-out date when you book and call ${SITE.phone} if it shifts.` },
      { q: 'What if the place is worse than expected?', a: "We tell you before we start, not after. If a move-out needs more than a standard clean, you get a revised flat number to approve first — your client never gets an ambush invoice." },
    ],
    ctaSubject: 'Partner Program — Mover / Move Manager',
    ctaNote: "Tell us about your business and we'll set up your code within a day.",
    ctaHeadline: 'Give your clients a better answer on moving day.',
  },
  {
    slug: 'vacation-rentals',
    navLabel: 'Vacation Rental Managers',
    emoji: '🔑',
    title: 'Turnover Cleaning Partner Program for Vacation Rental Managers',
    tagline: 'Same-day turnovers, guest-ready every time — plus rewards for every owner you send our way.',
    audience: 'Vacation rental and short-term rental property managers',
    headline: 'A turnover crew that holds the window — prove it on one property.',
    problem: {
      heading: 'Checkout at 10, check-in at 4',
      body: "One cleaner cancels and the whole day collapses: a guest walks into an unmade bed, you eat a refund, and the review stays up forever. What you need isn't a cheaper clean, it's one that shows up inside the window every single time. That's a thing you should make us prove, not promise.",
    },
    intro: [
      "This one's a little different: instead of a resident discount, we're offering to become your turnover cleaning provider — beds made, bathrooms spotless, a guest-ready check before every arrival — at a locked-in partner rate instead of one-off invoices.",
      'If you manage more than one property, or know other owners, referring them in earns you real rewards on top of your own rate.',
    ],
    clientWins: [
      { icon: '🧪', title: 'A free trial turnover', body: 'One property, no commitment, no rate discussion. Watch us hit the window before anything else is agreed.' },
      { icon: '🛏️', title: 'A guest-ready check, not just a clean', body: 'Beds made, linens fresh, amenities restocked, and a walkthrough with the guest\'s eyes before we lock up.' },
      { icon: '📷', title: 'Photo confirmation on request', body: 'Managing remotely? We send finished-room photos so you know it is ready without driving out there.' },
    ],
    partnerWins: [
      { icon: '💲', title: 'A locked-in partner rate', body: 'Priced on property count and turnover frequency instead of one-off invoices — the more volume, the better the per-clean number.' },
      { icon: '🚨', title: 'Priority same-day scheduling', body: 'Your turnovers get held ahead of general bookings. A tight window is the job, not an exception we charge extra for.' },
      { icon: '🔐', title: 'Access however you already do it', body: 'Lockbox, smart lock, or a key we hold securely. We fit your system rather than asking you to change it.' },
    ],
    howItWorks: [
      'Start with a trial turnover on one property, no commitment — see the quality and turnaround for yourself.',
      'We lock in a partner rate for your ongoing turnovers, scaled to your property count and turnover frequency.',
      'Refer other property owners in and earn rewards for every one who books with us.',
    ],
    tiers: [
      { count: 3, reward: 'A free turnover on us, plus a locked-in partner rate on recurring turnovers' },
      { count: 6, reward: '$75 credit toward your own unit or office cleaning' },
      { count: 10, reward: "Priority same-day turnover scheduling across all your listings, for as long as we're partnered" },
    ],
    topReward: 'Priority same-day turnovers across every listing',
    faq: [
      { q: 'Our turnaround windows are really tight — same-day, a few hours.', a: "That's exactly what we're built for. Give us one property to prove it on." },
      { q: 'How do you handle key/lockbox access?', a: 'However you already manage it for other vendors — lockbox code, smart lock, or a securely held key.' },
      { q: 'What does it cost?', a: "It depends on property size and turnover frequency — the more properties or turnovers, the better the per-clean rate. Let's start with one property and go from there." },
      { q: 'What happens if a guest complains about cleanliness?', a: "Tell us and we go back out the same day where the schedule allows, free. A cleanliness review is more expensive to you than any clean is to us, so we treat it that way." },
      { q: 'Do you restock supplies and linens?', a: 'Yes — we restock what you stage for us and flag anything running low. If you use a linen service we work with their schedule instead of yours.' },
      { q: 'What if our volume is seasonal?', a: "That's most of Yuma. The partner rate holds through the slow months — we'd rather keep the relationship than re-quote you every October." },
    ],
    ctaSubject: 'Turnover Cleaning Partnership — Vacation Rental Manager',
    ctaNote: "Tell us how many properties you manage and we'll put together a rate.",
    ctaHeadline: 'Start with one property. Make us prove it.',
  },
];

export function getPartnerCategory(slug: string): PartnerCategory | undefined {
  return PARTNER_CATEGORIES.find((c) => c.slug === slug);
}

export function mailtoFor(category: PartnerCategory): string {
  const body = `Hi Riot,\n\nI'd like to talk about the ${category.audience.toLowerCase()} partner program.\n\nBusiness name:\nBest phone/email to reach me:\n\n`;
  return `mailto:${SITE.email}?subject=${encodeURIComponent(category.ctaSubject)}&body=${encodeURIComponent(body)}`;
}
