'use client';
import { useEffect } from 'react';
import { capturePartnerRef } from '@/lib/partnerRef';

// Rendered once in the root layout so a ?ref=CODE lands on ANY page (a
// partner's flyer/QR could point at the homepage, /pricing, or /book
// directly) and still gets carried through to the quote form.
export default function PartnerRefCapture() {
  useEffect(() => {
    capturePartnerRef();
  }, []);
  return null;
}
