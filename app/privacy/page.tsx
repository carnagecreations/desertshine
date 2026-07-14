import type { Metadata } from 'next';
import RevealFooter from '@/components/sections/RevealFooter';
import { SITE } from '@/lib/site';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <>
      <main className="relative z-10 bg-[var(--paper)] shadow-[0_40px_80px_rgba(0,0,0,0.35)]">
        <section className="mx-auto max-w-3xl px-6 pb-24 pt-40">
          <h1 className="text-4xl md:text-5xl">Privacy Policy</h1>
          <div className="mt-8 space-y-6 text-[var(--body)]">
            <p>We collect only what you give us: your name, phone number, and the details you share when requesting a quote. We use it to respond to your request and schedule your service — nothing else.</p>
            <p>We never sell, rent, or share your information with third parties for marketing. Quote requests are stored securely and deleted on request.</p>
            <p>This site does not use advertising trackers.</p>
            <p>Questions? Email <a href={`mailto:${SITE.email}`} className="text-[var(--accent)] underline underline-offset-4">{SITE.email}</a> or call {SITE.phone}.</p>
          </div>
        </section>
      </main>
      <RevealFooter />
    </>
  );
}
