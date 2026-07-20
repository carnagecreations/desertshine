// Single source of truth for the giveaway.
//
// The countdown and copy stay honest: when the clock hits zero, entries
// genuinely close — no fake "ending soon" pressure.
//
// To run it:
//   1. Set `opensAt` / `closesAt` to your window (Arizona time).
//   2. Optionally swap `formId` for a dedicated Formspree form (see below).
//   3. Rebuild and deploy.
// To end it: set `active: false` and rebuild — the nav link and sitemap entry
// disappear, and the page shows the closed state.

import { SITE } from './site';

export const GIVEAWAY = {
  // Master switch. false = pulled from nav + sitemap, page shows closed state.
  active: true,

  // The entry window. Arizona observes no daylight saving, so MST is always
  // UTC-07:00. Edit both timestamps to reschedule.
  opensAt: '2026-07-20T00:00:00-07:00',
  closesAt: '2026-08-20T23:59:00-07:00', // one month later

  // The prize is chosen to self-select real local customers — only someone
  // with a home in the service area wants a free deep clean.
  prize: 'a free deep clean',
  prizeValue: 179, // published base rate for a deep clean, in USD
  winners: 1,
  runnerUpOffer: '15% off your first clean', // consolation for everyone who enters

  // Dedicated Formspree endpoint for giveaway entries — kept separate from the
  // quote form (xvzekkjj) so entries land in their own inbox.
  formId: 'xvzerlqy',

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

/**
 * Human-readable entry window. Adapts to the window length:
 *  - same day  → "Saturday, July 25, 9:00 AM – 1:00 PM MST"
 *  - multi-day → "July 20 – August 20, 2026"
 */
export function formatWindow(): string {
  const tz = 'America/Phoenix';
  const opens = new Date(GIVEAWAY.opensAt);
  const closes = new Date(GIVEAWAY.closesAt);
  const sameDay =
    opens.toLocaleDateString('en-US', { timeZone: tz }) ===
    closes.toLocaleDateString('en-US', { timeZone: tz });

  if (sameDay) {
    const day = opens.toLocaleString('en-US', { timeZone: tz, weekday: 'long', month: 'long', day: 'numeric' });
    const from = opens.toLocaleString('en-US', { timeZone: tz, hour: 'numeric', minute: '2-digit' });
    const to = closes.toLocaleString('en-US', { timeZone: tz, hour: 'numeric', minute: '2-digit', timeZoneName: 'short' });
    return `${day}, ${from} – ${to}`;
  }

  const from = opens.toLocaleString('en-US', { timeZone: tz, month: 'long', day: 'numeric' });
  const to = closes.toLocaleString('en-US', { timeZone: tz, month: 'long', day: 'numeric', year: 'numeric' });
  return `${from} – ${to}`;
}
