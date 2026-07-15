import type { Metadata } from 'next';
import RevealFooter from '@/components/sections/RevealFooter';
import { SITE } from '@/lib/site';

export const metadata: Metadata = { title: 'Terms of Service' };

export default function TermsPage() {
  return (
    <>
      <main className="relative z-10 bg-[var(--paper)] shadow-[0_40px_80px_rgba(0,0,0,0.35)]">
        <section className="mx-auto max-w-3xl px-6 pb-24 pt-40">
          <h1 className="text-4xl md:text-5xl">Terms of Service</h1>
          <div className="mt-8 space-y-6 text-[var(--body)]">
            <p><strong className="text-[var(--ink)]">Quotes.</strong> Quoted prices are flat rates based on the information you provide. If your home differs significantly from what was described, we’ll confirm a revised price with you before starting — never after.</p>
            <p><strong className="text-[var(--ink)]">Guarantee.</strong> If anything on the service checklist isn’t completed to standard, report it within 24 hours and we will return and re-clean the affected areas at no charge.</p>
            <p><strong className="text-[var(--ink)]">Cancellations.</strong> Reschedule or cancel free of charge up to 24 hours before your appointment. Later cancellations may incur a $50 fee.</p>
            <p><strong className="text-[var(--ink)]">Damage claims.</strong> Any damage claims must be reported within 48 hours of service. We make it right — that&apos;s the standard we hold ourselves to.</p>
            <p>Questions? Call {SITE.phone}.</p>
          </div>
        </section>
      </main>
      <RevealFooter />
    </>
  );
}
