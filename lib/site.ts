// Single source of truth for business facts. Update here, changes everywhere.
export const SITE = {
  name: 'Clean Conviction',
  shortName: 'Clean Conviction',
  tagline: 'House & office cleaning in Yuma, AZ — No Compromise. No Dust.',
  phone: '(928) 298-5509',
  phoneHref: 'tel:+19282985509',
  email: 'hello@cleanconvictions.com',
  address: 'Yuma, AZ 85364',
  url: 'https://www.cleanconvictions.com',
  hours: 'Your schedule, not ours',
  serviceAreas: ['Yuma', 'Fortuna Foothills', 'Somerton', 'San Luis', 'Wellton', 'Winterhaven'],
  gaId: 'G-C83BRJPSMR',
  // Public profiles — fed into schema.org `sameAs` so Google links them as
  // one business entity. Add each URL here as the profile goes live.
  social: {
    facebook: 'https://www.facebook.com/cleanconvictions',
    // google: '',   // your Google Business Profile URL
    // yelp: '',
    // nextdoor: '',
    // instagram: '',
  } as Record<string, string>,
} as const;
