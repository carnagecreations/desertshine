/**
 * The Estimate Engine's pricing math — calibrated to match Clean
 * Convictions' actual invoicing engine (the business-manager app) exactly,
 * so the number shown here is the number on the invoice, not a rough
 * marketing guess. Keep this in sync with the app's src/utils/pricingEngine.ts
 * calculateEstimate() if either side's rates change.
 */

export type ServiceKey = 'standard' | 'deep' | 'move';
export type FreqKey = 'one' | 'weekly' | 'biweekly' | 'monthly';
export type ConditionKey = 'kept' | 'average' | 'love';

export const BASE_PRICE: Record<ServiceKey, number> = {
  standard: 129,
  deep: 179,
  move: 199,
};

// The true "from" price per program: the cheapest a one-time visit can
// actually come out to (smallest home, 1 bed / 1 bath, no condition
// surcharge, no add-ons, no recurring discount). Regular cleaning gets a
// flat credit for compact homes under 1,100 sq ft; deep/move don't, so
// their floor is just the base rate. Use this everywhere the site quotes
// a "from $X" price so the marketing copy can never drift from what the
// estimator (and the app) would actually charge.
export const FROM_PRICE: Record<ServiceKey, number> = {
  standard: 109,
  deep: 179,
  move: 199,
};

const SQFT_RATE: Record<ServiceKey, number> = {
  standard: 18,
  deep: 30,
  move: 35,
};

const BASE_HOURS: Record<ServiceKey, number> = {
  standard: 2.5,
  deep: 3.5,
  move: 4.0,
};

const BATH_INCREMENT = 15; // per bathroom beyond 1
const BED_INCREMENT = 10; // per bedroom beyond 1

const CONDITION_RATE: Record<ConditionKey, number> = {
  kept: 0,
  average: 0.15,
  love: 0.3,
};

const FREQUENCY_DISCOUNT: Record<FreqKey, number> = {
  one: 0,
  monthly: 0.1,
  biweekly: 0.15,
  weekly: 0.2,
};

const MILITARY_DISCOUNT = 0.1;
const PET_SAFE_PRICE = 15;

export type AddOnKey =
  | 'fridge'
  | 'oven'
  | 'windows'
  | 'garage'
  | 'laundry'
  | 'closet-organize'
  | 'garage-organize'
  | 'disinfect'
  | 'cabinets'
  | 'dishes';

export const ADDONS: { key: AddOnKey; label: string; price: number; minutes: number }[] = [
  { key: 'fridge', label: 'Fridge (inside)', price: 30, minutes: 30 },
  { key: 'oven', label: 'Oven (inside)', price: 30, minutes: 40 },
  { key: 'windows', label: 'Windows (inside)', price: 40, minutes: 45 },
  { key: 'garage', label: 'Garage sweep & tidy', price: 25, minutes: 25 },
  { key: 'laundry', label: 'Laundry room detail', price: 15, minutes: 20 },
  { key: 'closet-organize', label: 'Closet organizing', price: 60, minutes: 60 },
  { key: 'garage-organize', label: 'Garage organizing', price: 50, minutes: 60 },
  { key: 'disinfect', label: 'Pet illness disinfect', price: 40, minutes: 30 },
  { key: 'cabinets', label: 'Inside cabinets & drawers', price: 35, minutes: 45 },
  { key: 'dishes', label: 'Dishes / kitchen prep', price: 25, minutes: 30 },
];

export interface EstimateLine {
  label: string;
  amount: string;
  neg?: boolean;
}

export interface EstimateInput {
  service: ServiceKey;
  sqft: number;
  beds: number;
  baths: number;
  condition: ConditionKey;
  freq: FreqKey;
  pets: boolean;
  military: boolean;
  addons: Set<AddOnKey>;
}

export interface EstimateResult {
  finalPrice: number;
  preFrequencyPrice: number;
  lines: EstimateLine[];
  hoursMin: number;
  hoursMax: number;
}

function freqLabel(freq: FreqKey): string {
  switch (freq) {
    case 'monthly':
      return 'monthly';
    case 'biweekly':
      return 'every other week';
    case 'weekly':
      return 'weekly';
    default:
      return 'one-time';
  }
}

export function calcEstimate(input: EstimateInput): EstimateResult {
  const { service, sqft, beds, baths, condition, freq, pets, military, addons } = input;
  const lines: EstimateLine[] = [];

  const basePrice = BASE_PRICE[service];
  lines.push({ label: `Base — ${service === 'standard' ? 'regular cleaning' : service === 'deep' ? 'deep clean' : 'move cleaning'}`, amount: `$${basePrice}` });

  // Square footage: baseline 1,500 sq ft. A compact regular-clean home
  // under 1,100 sq ft gets a flat credit; anything over 1,500 sq ft costs
  // more per 500 sq ft block. (Matches the app exactly.)
  let sqftPrice = 0;
  if (sqft < 1100 && service === 'standard') {
    sqftPrice = -20;
  } else if (sqft > 1500) {
    const extraBlocks = Math.ceil((sqft - 1500) / 500);
    sqftPrice = extraBlocks * SQFT_RATE[service];
  }
  if (sqftPrice !== 0) {
    lines.push({
      label: `Size · ${sqft.toLocaleString()} sq ft`,
      amount: sqftPrice > 0 ? `+$${sqftPrice}` : `−$${Math.abs(sqftPrice)}`,
      neg: sqftPrice < 0,
    });
  }

  const extraBaths = Math.max(0, baths - 1);
  const extraBeds = Math.max(0, beds - 1);
  const bedBathPrice = extraBaths * BATH_INCREMENT + extraBeds * BED_INCREMENT;
  if (bedBathPrice > 0) {
    lines.push({ label: `Bed/bath · ${beds} bed / ${baths} bath`, amount: `+$${bedBathPrice}` });
  }

  const spaceSubtotal = Math.max(79, basePrice + sqftPrice + bedBathPrice);

  const conditionPct = CONDITION_RATE[condition];
  const conditionSurcharge = Math.round(spaceSubtotal * conditionPct);
  if (conditionSurcharge > 0) {
    const condLabel = condition === 'love' ? 'needs work' : 'normal wear';
    lines.push({ label: `Condition · ${condLabel} (+${Math.round(conditionPct * 100)}%)`, amount: `+$${conditionSurcharge}` });
  }

  let addOnsTotal = 0;
  let addOnsMinutes = 0;
  if (pets) {
    addOnsTotal += PET_SAFE_PRICE;
    lines.push({ label: 'Pet-safe products', amount: `+$${PET_SAFE_PRICE}` });
  }
  for (const a of ADDONS) {
    if (addons.has(a.key)) {
      addOnsTotal += a.price;
      addOnsMinutes += a.minutes;
      lines.push({ label: `Add-on · ${a.label.toLowerCase()}`, amount: `+$${a.price}` });
    }
  }

  const subtotal = spaceSubtotal + conditionSurcharge + addOnsTotal;

  const servicePortion = spaceSubtotal + conditionSurcharge;
  const freqPct = FREQUENCY_DISCOUNT[freq];
  const frequencyDiscount = Math.round(servicePortion * freqPct);
  if (frequencyDiscount > 0) {
    lines.push({ label: `Loyalty discount · ${freqLabel(freq)}`, amount: `−$${frequencyDiscount}`, neg: true });
  }

  const afterFrequency = subtotal - frequencyDiscount;
  const militaryDiscount = military ? Math.round(afterFrequency * MILITARY_DISCOUNT) : 0;
  if (militaryDiscount > 0) {
    lines.push({ label: 'Military / veteran discount · 10%', amount: `−$${militaryDiscount}`, neg: true });
  }

  const rawFinal = subtotal - frequencyDiscount - militaryDiscount;
  const finalPrice = Math.max(50, rawFinal);
  if (rawFinal < 50) {
    lines.push({ label: 'Minimum visit rate applied', amount: '$50' });
  }

  // Estimated on-site time (solo cleaner), matching the app's hours formula.
  const extraSqftHours = Math.max(0, (sqft - 1500) / 750) * 0.4;
  const extraRoomsHours = extraBaths * 0.35 + extraBeds * 0.15;
  const conditionMultiplier = condition === 'love' ? 1.35 : condition === 'average' ? 1.15 : 1.0;
  const addOnsHours = addOnsMinutes / 60;
  const calculatedHours = (BASE_HOURS[service] + extraSqftHours + extraRoomsHours) * conditionMultiplier + addOnsHours;
  const hoursMin = Math.max(1.5, Math.round((calculatedHours - 0.5) * 10) / 10);
  const hoursMax = Math.round((calculatedHours + 0.5) * 10) / 10;

  return { finalPrice, preFrequencyPrice: subtotal, lines, hoursMin, hoursMax };
}
