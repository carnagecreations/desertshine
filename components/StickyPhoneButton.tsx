'use client';
import { SITE } from '@/lib/site';

export default function StickyPhoneButton() {
  return (
    <a
      href={SITE.phoneHref}
      className="fixed bottom-6 right-6 z-50 md:hidden"
      aria-label={`Call ${SITE.phone}`}>
      <div className="group relative flex items-center justify-center">
        {/* Ripple effect background */}
        <div className="absolute inset-0 rounded-full bg-[var(--accent)] animate-pulse" />

        {/* Button */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-xl transition-all active:scale-95">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 whitespace-nowrap rounded-lg bg-black/90 px-3 py-2 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          Tap to call
        </div>
      </div>
    </a>
  );
}
