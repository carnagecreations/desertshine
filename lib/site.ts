// Single source of truth for business facts. Update here, changes everywhere.
export const SITE = {
  name: 'Clean Conviction',
  shortName: 'Clean Conviction',
  tagline: 'House & office cleaning in Yuma, AZ — No Compromise. No Dust.',
  phone: '(928) 555-0148',            // CUSTOMIZE: real phone number
  phoneHref: 'tel:+19285550148',      // CUSTOMIZE: real phone number
  email: 'hello@cleanconviction.com', // CUSTOMIZE: real email
  address: 'Yuma, AZ 85364',
  url: 'https://www.cleanconviction.com', // CUSTOMIZE: real domain
  hours: 'Mon–Sat, 7am–6pm',
  serviceAreas: ['Yuma', 'Fortuna Foothills', 'Somerton', 'San Luis', 'Wellton', 'Winterhaven'],
} as const;
