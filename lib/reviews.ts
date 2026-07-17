// Single source of truth for REAL customer reviews.
//
// Both the on-page testimonial slider (TestimonialTheater) and the
// LocalBusiness aggregateRating/review structured data read from here.
// When this array is empty, the testimonial section renders nothing and
// NO rating schema is emitted — so we never fabricate social proof or
// risk a Google manual action for fake review markup.
//
// To add a real review, copy a verifiable one (e.g. from your Google
// Business Profile) into the array below. Keep `date` as YYYY-MM-DD.

export interface Review {
  quote: string;
  name: string;
  role: string; // e.g. "Bi-weekly service, Fortuna Foothills"
  rating: number; // 1–5
  date: string; // YYYY-MM-DD
}

export const REVIEWS: Review[] = [
  // { quote: 'They had my rental spotless in two days…', name: 'Maria G.', role: 'Move-out clean, Yuma', rating: 5, date: '2026-07-20' },
];

/** Returns aggregate rating stats, or null when there are no reviews yet. */
export function aggregateRating(): { ratingValue: number; reviewCount: number } | null {
  if (REVIEWS.length === 0) return null;
  const sum = REVIEWS.reduce((s, r) => s + r.rating, 0);
  return {
    ratingValue: Math.round((sum / REVIEWS.length) * 10) / 10,
    reviewCount: REVIEWS.length,
  };
}
