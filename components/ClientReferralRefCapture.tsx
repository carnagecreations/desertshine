'use client';
import { useEffect } from 'react';
import { captureClientReferralRef } from '@/lib/clientReferralRef';

// Rendered once in the root layout so a ?rc=CODE lands on ANY page (a
// client might share their referral link on the homepage, the /referrals
// page, or straight to /book) and still gets carried through to the quote
// form's "Referred by a friend?" field.
export default function ClientReferralRefCapture() {
  useEffect(() => {
    captureClientReferralRef();
  }, []);
  return null;
}
