'use client';
import { useEffect, useState } from 'react';
import { getPartnerRef, prettifyPartnerRef } from '@/lib/partnerRef';

// Shows on /book when a visitor arrived via a partner's referral link/QR
// code, so the $25-off promise on the flyer is visibly honored on the page.
export default function PartnerBanner() {
  const [ref, setRef] = useState('');

  useEffect(() => {
    // One-time read of sessionStorage on mount — not a render-loop concern.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRef(getPartnerRef());
  }, []);

  if (!ref) return null;

  return (
    <div className="mx-auto mb-8 max-w-2xl rounded-2xl border-2 border-[var(--accent)] bg-[var(--accent)]/10 px-6 py-4 text-center">
      <p className="text-sm font-semibold text-[var(--ink)]">
        🎉 Special rate for {prettifyPartnerRef(ref)} residents — $25 off your first cleaning, applied automatically.
      </p>
    </div>
  );
}
