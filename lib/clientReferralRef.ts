// Captures a CLIENT referral code from the URL (?rc=CODE — a client's own
// personal code, e.g. JANED-123) on whichever page a visitor lands on, and
// keeps it around in sessionStorage so it survives navigating from the
// homepage/referrals page through to /book — without needing any backend.
//
// Deliberately a different param name than partnerRef.ts's ?ref=/?partner=
// (partner/business referrals) so the two never collide if someone somehow
// has both in a link. A shareable client referral link looks like:
//   https://cleanconvictions.com/book?rc=JANED-123
const STORAGE_KEY = 'cc_client_referral_ref';

export function captureClientReferralRef(): void {
  if (typeof window === 'undefined') return;
  try {
    const q = new URLSearchParams(window.location.search);
    const rc = q.get('rc');
    if (rc && rc.trim()) {
      sessionStorage.setItem(STORAGE_KEY, rc.trim().toUpperCase());
    }
  } catch {
    /* sessionStorage can throw in private browsing — never block the page for it */
  }
}

export function getClientReferralRef(): string {
  if (typeof window === 'undefined') return '';
  try {
    return sessionStorage.getItem(STORAGE_KEY) || '';
  } catch {
    return '';
  }
}
