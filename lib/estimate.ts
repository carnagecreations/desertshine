const SVC_MAP: Record<string, string> = {
  standard: 'Recurring home cleaning',
  deep: 'Deep clean',
  move: 'Move-in / move-out',
  office: 'Office / commercial',
};
const FREQ_MAP: Record<string, string> = { one: 'one-time', weekly: 'weekly', biweekly: 'bi-weekly', monthly: 'monthly' };
const COND_MAP: Record<string, string> = { kept: 'well kept', average: 'lived in', love: 'needs love' };
const SIZE_OPTIONS = ['Under 1,500 sq ft', '1,500 – 2,500 sq ft', 'Over 2,500 sq ft', 'Commercial space'] as const;

export type ParsedEstimate = {
  service: string;
  size: (typeof SIZE_OPTIONS)[number];
  details: string;
  summaryLine: string;
};

// Reads the `est` query string the Estimate Engine (components/PriceEstimator.tsx)
// appends to its "lock in this quote" link, so /book and QuoteForm can both
// carry the dialed-in setup over without re-parsing it independently.
export function parseEstimateFromSearch(search: string): ParsedEstimate | null {
  const q = new URLSearchParams(search);
  const est = q.get('est');
  if (!est) return null;

  const svc = q.get('svc') ?? '';
  const service = SVC_MAP[svc] ?? SVC_MAP.standard;
  const sqft = Number(q.get('sqft') || 0);
  const size: (typeof SIZE_OPTIONS)[number] = svc === 'office'
    ? SIZE_OPTIONS[3]
    : sqft < 1500 ? SIZE_OPTIONS[0] : sqft <= 2500 ? SIZE_OPTIONS[1] : SIZE_OPTIONS[2];

  if (svc === 'office') {
    return {
      service,
      size,
      details: 'From the Estimate Engine: commercial walk-through requested.',
      summaryLine: 'Custom walk-through quote requested',
    };
  }

  const addons = (q.get('add') ?? '').split(',').filter(Boolean);
  const addonNotes = addons.map((a) => {
    if (a === 'disinfect') return `pet illness disinfect (${q.get('disinfectRooms') ?? 1} room(s))`;
    if (a === 'garage-organize') return `garage organizing (${q.get('garageOrgHours') ?? 1} hr(s))`;
    return a.replace(/-/g, ' ');
  });

  const summaryParts = [
    `${sqft.toLocaleString()} sq ft`,
    `${q.get('bd')} bed / ${q.get('ba')} bath`,
    FREQ_MAP[q.get('freq') ?? ''],
    COND_MAP[q.get('cond') ?? ''],
    q.get('pets') === '1' ? 'pets in the home' : '',
    addonNotes.length ? `add-ons: ${addonNotes.join(', ')}` : '',
  ].filter(Boolean).join(' · ');

  return {
    service,
    size,
    details: `From the Estimate Engine: ≈ $${est} — ${summaryParts}`,
    summaryLine: `≈ $${est} for ${service.toLowerCase()} — ${summaryParts}`,
  };
}
