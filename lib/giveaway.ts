// Single source of truth for the flash giveaway.
//
// It's a deliberately SHORT window — a few hours only — to create real
// urgency without any fake "ending soon" pressure: when the clock says it's
// closing, it genuinely is.
//
// To run it:
//   1. Set `opensAt` / `closesAt` to your launch window (Arizona time).
//   2. Optionally swap `formId` for a dedicated Formspree form (see below).
//   3. Rebuild and deploy.
// To end it: set `active: false` and rebuild — the nav link and sitemap entry
// disappear, and the page shows the closed state.

import { SITE } from './site';

export const GIVEAWAY = {
  // Master switch. false = pulled from nav + sitemap, page shows closed state.
  active: true,

  // The flash window. Arizona observes no daylight saving, so MST is always
  // UTC-07:00. Edit both timestamps before you launch.
  opensAt: '2026-07-25T09:00:00-07:00',
  closesAt: '2026-07-25T13:00:00-07:00', // ~4 hours later

  // The prize is chosen to self-select real local customers — only someone
  // with a home in the service area wants a free deep clean.
  prize: 'a free deep clean',
  prizeValue: 179, // published base rate for a deep clean, in USD
  winners: 1,
  runnerUpOffer: '15% off your first clean', // consolation for everyone who enters

  // Formspree endpoint for entries. Defaults to the main quote form so the
  // giveaway works the moment you deploy; every entry is tagged with a
  // GIVEAWAY subject line so it's easy to filter. If you'd rather keep
  // entries in their own inbox, create a new Formspree form and paste its id.
  formId: 'xvzekkjj',

  // Only residents of the service area are eligible (keeps the list local).
  eligibility: SITE.serviceAreas,
} as const;

export type GiveawayStatus = 'upcoming' | 'open' | 'closed';

/** Status at a given moment (pass Date.now() from the client). */
export function giveawayStatus(now: number): GiveawayStatus {
  const opens = new Date(GIVEAWAY.opensAt).getTime();
  const closes = new Date(GIVEAWAY.closesAt).getTime();
  if (now < opens) return 'upcoming';
  if (now >= closes) return 'closed';
  return 'open';
}

/** Human-readable entry window, e.g. "Saturday, July 25, 9:00 AM – 1:00 PM MST". */
export function formatWindow(): string {
  const opens = new Date(GIVEAWAY.opensAt).toLocaleString('en-US', {
    timeZone: 'America/Phoenix',
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
  const closes = new Date(GIVEAWAY.closesAt).toLocaleString('en-US', {
    timeZone: 'America/Phoenix',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  });
  return `${opens} – ${closes}`;
}
