'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { SITE } from '@/lib/site';
import { track } from '@/lib/track';
import HoneypotField from '@/components/HoneypotField';

const LEADS_ENDPOINT = 'https://casefiles.shiann.workers.dev/leads/other';

// Shared intake form for every partner-program source — the four category
// pages (property managers, realtors, movers, vacation rentals) and the
// hub page's "don't see your business type?" catch-all. Posts straight to
// the Worker instead of opening a mailto:, so every inquiry lands in the
// app's Clients tab as a Lead (tagged "Partner Inquiry") instead of relying
// on someone actually hitting send in their mail client.
export default function PartnerLeadForm({
  sourceLabel,
  ctaNote,
}: {
  sourceLabel: string;
  ctaNote?: string;
}) {
  const [submitting, setSubmitting] = useState(false);
  // Spam trap — see components/HoneypotField.tsx. Real users never fill this.
  const [botField, setBotField] = useState('');
  const [succeeded, setSucceeded] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!businessName.trim() && !contactName.trim()) return;
    if (!phone.trim() && !email.trim()) return;
    // A filled trap means a bot: drop it silently rather than
    // letting it through to the app as a lead.
    if (botField) return;

    setSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch(LEADS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'partner',
          sourceLabel,
          businessName,
          contactName,
          phone,
          email,
          message,
          _gotcha: botField,
        }),
      });
      if (!res.ok) throw new Error('Partner lead submission failed');
      setSucceeded(true);
      track('partner_inquiry_submitted', { category: sourceLabel });
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        role="status"
        aria-live="polite"
        className="rounded-3xl border border-[var(--line)] bg-white p-8 text-center md:p-10">
        <div className="mb-3 text-4xl">🤝</div>
        <h3 className="text-2xl font-bold text-[var(--ink)]">Got it — thanks for reaching out.</h3>
        <p className="mx-auto mt-3 max-w-md text-[var(--body)]">
          We&apos;ll be in touch within a business day to get your referral code and link set up.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      id="partner-form"
      onSubmit={onSubmit}
      className="relative rounded-3xl border border-[var(--line)] bg-white p-6 text-left md:p-8">
      <HoneypotField value={botField} onChange={setBotField} id="pl-company-website" />
      <h3 className="text-lg font-semibold text-[var(--ink)]">Tell us about your business</h3>
      {ctaNote && <p className="mt-1 mb-6 text-sm text-[var(--body)]">{ctaNote}</p>}
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="pl-business" className="mb-2 block text-sm font-medium text-[var(--ink)]">
              Business / property name
            </label>
            <input
              id="pl-business"
              type="text"
              autoComplete="organization"
              placeholder="e.g. Desert Skies RV Park"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(232,93,47,0.1)]"
            />
          </div>
          <div>
            <label htmlFor="pl-contact" className="mb-2 block text-sm font-medium text-[var(--ink)]">
              Your name
            </label>
            <input
              id="pl-contact"
              type="text"
              autoComplete="name"
              placeholder="Jane Doe"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              className="w-full rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(232,93,47,0.1)]"
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="pl-phone" className="mb-2 block text-sm font-medium text-[var(--ink)]">
              Phone
            </label>
            <input
              id="pl-phone"
              type="tel"
              autoComplete="tel"
              placeholder="(555) 123-4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(232,93,47,0.1)]"
            />
          </div>
          <div>
            <label htmlFor="pl-email" className="mb-2 block text-sm font-medium text-[var(--ink)]">
              Email
            </label>
            <input
              id="pl-email"
              type="email"
              autoComplete="email"
              placeholder="jane@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(232,93,47,0.1)]"
            />
          </div>
        </div>
        <p className="text-xs text-[var(--body)]">Phone or email — whichever&apos;s easiest for us to reach you.</p>
        <div>
          <label htmlFor="pl-message" className="mb-2 flex items-center justify-between text-sm font-medium text-[var(--ink)]">
            <span>Anything else?</span>
            <span className="font-normal text-[var(--body)]">optional</span>
          </label>
          <textarea
            id="pl-message"
            rows={3}
            placeholder="Property count, timing, questions — whatever's useful."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(232,93,47,0.1)]"
          />
        </div>
      </div>

      {submitError && (
        <motion.p role="alert" aria-live="assertive" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-sm text-red-600">
          Something went wrong — please call or text{' '}
          <a href={SITE.phoneHref} className="font-medium hover:underline">{SITE.phone}</a> instead.
        </motion.p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 w-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[#812b0e] px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.02] disabled:opacity-60 sm:w-auto sm:px-8">
        {submitting ? 'Sending…' : 'Send it'}
      </button>
    </form>
  );
}
