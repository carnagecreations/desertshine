// City landing page data — one page per service area for local SEO.
// Each entry gets a unique, genuinely local description (no doorway-page boilerplate).
export type Area = {
  slug: string;
  name: string;
  zip: string;
  headline: string;
  intro: string;
  localNotes: string[];
  faqs: { q: string; a: string }[];
};

export const AREAS: Area[] = [
  {
    slug: 'yuma',
    name: 'Yuma',
    zip: '85364',
    headline: 'House cleaning in Yuma, AZ',
    intro:
      'We are based in Yuma, so most of the county gets same-week availability — and homes inside the city often get next-day slots. From the Mesa del Sol golf homes to historic downtown bungalows, we clean around one constant: desert dust that never quits.',
    localNotes: [
      'Dust management for monsoon season and haboob cleanup',
      'Snowbird open/close cleans for winter visitors (October–April)',
      'Rental turnover cleans near MCAS Yuma for PCS season',
      'Hard-water mineral removal — Colorado River water is tough on glass and fixtures',
    ],
    faqs: [
      {
        q: 'How fast can you clean my home in Yuma?',
        a: 'Inside Yuma city limits we can usually schedule within 2–3 days, often next-day for standard cleans booked before noon.',
      },
      {
        q: 'Do you clean snowbird homes in Yuma?',
        a: 'Yes — arrival deep cleans before you fly in, and closing cleans with appliance shutdown checks when you head north for summer.',
      },
    ],
  },
  {
    slug: 'fortuna-foothills',
    name: 'Fortuna Foothills',
    zip: '85367',
    headline: 'House cleaning in Fortuna Foothills, AZ',
    intro:
      'Fortuna Foothills is our busiest service area outside Yuma proper. Larger lots and open desert mean more dust intrusion than city homes — we build extra time into every Foothills checklist for window tracks, sills, and entryways.',
    localNotes: [
      'Extra dust-control detail for homes backing open desert',
      'Winter-visitor scheduling around the Foothills snowbird season',
      'RV pad and Arizona-room cleaning on request',
      'Golf community homes: flexible scheduling around HOA quiet hours',
    ],
    faqs: [
      {
        q: 'Do you charge extra to drive to Fortuna Foothills?',
        a: 'No. The Foothills is a core service area — same flat rates as Yuma, no travel fee.',
      },
      {
        q: 'Can you clean my Arizona room?',
        a: 'Yes. Arizona rooms and enclosed patios can be added to any clean — just mention it when you book.',
      },
    ],
  },
  {
    slug: 'somerton',
    name: 'Somerton',
    zip: '85350',
    headline: 'House cleaning in Somerton, AZ',
    intro:
      'Somerton families keep us busy with recurring cleans and move-out work. We serve everything from Main Street to the newer subdivisions south of town, with bilingual scheduling available — se habla español.',
    localNotes: [
      'Se habla español — booking and day-of communication in Spanish',
      'Move-in/move-out cleans for the growing subdivisions',
      'Flexible scheduling for agricultural work schedules (early starts available)',
      'Recurring family-home cleans are our most-booked Somerton service',
    ],
    faqs: [
      {
        q: '¿Hablan español?',
        a: 'Sí. Puede llamar o enviar el formulario en español y coordinamos su limpieza sin problema.',
      },
      {
        q: 'Do you serve the county areas around Somerton?',
        a: 'Yes — we cover Somerton proper plus the surrounding county roads between Somerton and San Luis.',
      },
    ],
  },
  {
    slug: 'san-luis',
    name: 'San Luis',
    zip: '85349',
    headline: 'House cleaning in San Luis, AZ',
    intro:
      'San Luis is the fastest-growing city in the county, and we grew with it. New-construction homes need different care than established ones — post-construction dust lingers in vents and window tracks for months, and our deep clean is built to pull it out.',
    localNotes: [
      'Post-construction and new-build move-in cleans',
      'Se habla español — full service in Spanish',
      'Early-morning scheduling for cross-border work commutes',
      'Deep cleans targeting construction dust in newer subdivisions',
    ],
    faqs: [
      {
        q: 'Do you do move-in cleans for brand-new houses in San Luis?',
        a: 'Yes — new-build move-in cleans are one of our most common San Luis jobs. We pull construction dust from vents, tracks, and cabinets before you unpack.',
      },
      {
        q: 'What hours do you work in San Luis?',
        a: 'We clean on your schedule — mornings, evenings, weekends, whenever works best for you. Same-week availability.',
      },
    ],
  },
  {
    slug: 'wellton',
    name: 'Wellton',
    zip: '85356',
    headline: 'House cleaning in Wellton, AZ',
    intro:
      'Out east on the I-8 corridor, Wellton homes deal with more open-desert dust than anywhere else we serve. We batch Wellton routes so you get big-company scheduling reliability with small-town service — no travel surcharge.',
    localNotes: [
      'No travel fee — Wellton is on our regular weekly route',
      'Winter-visitor and RV-community cleaning',
      'Deep dust remediation for homes near open desert and farmland',
      'Golf community homes around Coyote Wash',
    ],
    faqs: [
      {
        q: 'Do you really come out to Wellton?',
        a: 'Every week. We batch Wellton appointments on set route days, so recurring clients get a consistent day and time.',
      },
      {
        q: 'Can you clean my park model or RV?',
        a: 'Yes — park models, casitas, and RVs in Wellton’s winter communities are all fair game. Ask for a custom quote.',
      },
    ],
  },
  {
    slug: 'winterhaven',
    name: 'Winterhaven',
    zip: '92283',
    headline: 'House cleaning in Winterhaven, CA',
    intro:
      'Just across the river, Winterhaven is minutes from our Yuma base — closer than most of our Arizona routes. California side of the bridge, same flat Yuma rates.',
    localNotes: [
      'Same flat rates as Yuma — the river is not a surcharge',
      'Winter-visitor and seasonal-home cleans along the Colorado',
      'Move-out cleans for rental properties',
      'Quick response times — often our fastest service area',
    ],
    faqs: [
      {
        q: 'You serve California?',
        a: 'Just Winterhaven and the immediate river communities — it’s a ten-minute drive from our Yuma base, closer than half of Yuma itself.',
      },
      {
        q: 'Are rates different in California?',
        a: 'No. Winterhaven gets the same published flat rates as every Yuma County service area.',
      },
    ],
  },
];
