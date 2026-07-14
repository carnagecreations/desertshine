// Single source of truth for business facts. Update here, changes everywhere.
export const SITE = {
  name: 'Desert Shine Cleaning Co.',
  shortName: 'Desert Shine',
  tagline: 'House & office cleaning in Yuma, AZ',
  phone: '(928) 555-0148',            // CUSTOMIZE: real phone number
  phoneHref: 'tel:+19285550148',      // CUSTOMIZE: real phone number
  email: 'hello@desertshineyuma.com', // CUSTOMIZE: real email
  address: 'Yuma, AZ 85364',
  url: 'https://www.desertshineyuma.com', // CUSTOMIZE: real domain
  hours: 'Mon–Sat, 7am–6pm',
  serviceAreas: ['Yuma', 'Fortuna Foothills', 'Somerton', 'San Luis', 'Wellton', 'Winterhaven'],
} as const;
