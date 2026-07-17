import { SITE } from '@/lib/site';

// Opens the Google review dialog directly (SITE.googleReviewLink).
// Reviews are the top local-pack ranking lever, so keep this one tap away.
export default function ReviewButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={SITE.googleReviewLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <span aria-hidden="true">⭐</span> Leave us a review on Google
    </a>
  );
}
