// Captures a partner referral code from the URL (?ref=CODE or ?partner=CODE)
// on whichever page a visitor lands on, and keeps it around in sessionStorage
// so it survives navigating from the homepage/pricing page through to /book —
// without needing any backend. Codes are generated in the business manager
// app from the partner's business name (e.g. "Desert Skies RV Resort" ->
// "DESERT-SKIES-RV-RESORT"), so they double as a human-readable label here.
const STORAGE_KEY = 'cc_partner_ref';

export function capturePartnerRef(): void {
  if (typeof window === 'undefined') return;
  try {
    const q = new URLSearchParams(window.location.search);
    const ref = q.get('ref') || q.get('partner');
    if (ref && ref.trim()) {
      sessionStorage.setItem(STORAGE_KEY, ref.trim().toUpperCase());
    }
  } catch {
    /* sessionStorage can throw in private browsing — never block the page for it */
  }
}

export function getPartnerRef(): string {
  if (typeof window === 'undefined') return '';
  try {
    return sessionStorage.getItem(STORAGE_KEY) || '';
  } catch {
    return '';
  }
}

// "DESERT-SKIES-RV-RESORT" -> "Desert Skies Rv Resort" — good enough for a
// banner without calling anywhere to look up the real business name.
export function prettifyPartnerRef(ref: string): string {
  return ref
    .toLowerCase()
    .split(/[-_]+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
