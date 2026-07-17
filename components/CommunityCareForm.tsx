'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { SITE } from '@/lib/site';

// Dedicated Formspree endpoint for confidential Community Care requests —
// kept separate from the quote-request form (xvzekkjj) so sensitive
// submissions land in their own channel.
const FORM_ID = 'mqerpnlj';

export default function CommunityCareForm() {
  const [state, handleSubmit] = useForm(FORM_ID);
  const [forWho, setForWho] = useState<'self' | 'other'>('self');

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border border-[var(--line)] bg-white p-10 text-center">
        <div className="mb-4 text-5xl">🤍</div>
        <h2 className="text-2xl font-bold text-[var(--ink)]">Thank you for trusting us.</h2>
        <p className="mx-auto mt-3 max-w-md text-[var(--body)]">
          We&apos;ve received your message and we&apos;ll reach out privately and gently. However this turns
          out, we&apos;re glad you reached out — that took courage.
        </p>
        <p className="mt-4 text-sm text-[var(--body)]">
          Keep an eye out for a quiet message from us. We&apos;ll keep it between us.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} method="POST" className="rounded-3xl border border-[var(--line)] bg-white p-6 md:p-8">
      {/* Routes this submission to a clearly-labeled subject line */}
      <input type="hidden" name="_subject" value="CONFIDENTIAL — Community Care request" />
      <input type="hidden" name="request_type" value="Community Care (free monthly clean)" />
      <input type="hidden" name="requesting_for" value={forWho === 'self' ? 'Themselves' : 'Someone they care about'} />

      {/* Who is this for */}
      <fieldset className="mb-6">
        <legend className="mb-3 text-sm font-medium text-[var(--ink)]">Who is this for?</legend>
        <div className="grid grid-cols-2 gap-3">
          <button type="button" onClick={() => setForWho('self')}
            className={`rounded-xl border-2 px-4 py-3 text-sm transition-all ${
              forWho === 'self' ? 'border-[var(--accent)] bg-[var(--accent)]/5 text-[var(--ink)]' : 'border-[var(--line)] text-[var(--body)] hover:border-[var(--accent)]/50'
            }`}>
            It&apos;s for me
          </button>
          <button type="button" onClick={() => setForWho('other')}
            className={`rounded-xl border-2 px-4 py-3 text-sm transition-all ${
              forWho === 'other' ? 'border-[var(--accent)] bg-[var(--accent)]/5 text-[var(--ink)]' : 'border-[var(--line)] text-[var(--body)] hover:border-[var(--accent)]/50'
            }`}>
            For someone I care about
          </button>
        </div>
      </fieldset>

      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--ink)]">
            {forWho === 'self' ? 'Your first name' : 'Your first name'}
            <span className="ml-1 font-normal text-[var(--body)]">— first name is fine</span>
          </label>
          <input id="name" name="name" type="text" required autoComplete="given-name"
            placeholder="First name"
            className="w-full rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(232,93,47,0.1)]" />
          <ValidationError field="name" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="contact" className="mb-2 block text-sm font-medium text-[var(--ink)]">
            Best way to reach you
          </label>
          <input id="contact" name="contact" type="text" required autoComplete="tel"
            placeholder="Phone or email"
            className="w-full rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(232,93,47,0.1)]" />
          <ValidationError field="contact" errors={state.errors} />
          <p className="mt-1.5 text-xs text-[var(--body)]">We&apos;ll only use this to reach you about this. Never shared, never added to a list.</p>
        </div>

        <div>
          <label htmlFor="area" className="mb-2 block text-sm font-medium text-[var(--ink)]">Which area?</label>
          <select id="area" name="area"
            className="w-full rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(232,93,47,0.1)]">
            {SITE.serviceAreas.map((a) => <option key={a} value={a}>{a}</option>)}
            <option value="Nearby / not sure">Nearby / not sure</option>
          </select>
          <p className="mt-1.5 text-xs text-[var(--body)]">We&apos;ll sort out the exact address privately, later — not on this form.</p>
        </div>

        {forWho === 'other' && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="overflow-hidden">
            <label htmlFor="their_situation" className="mb-2 block text-sm font-medium text-[var(--ink)]">
              Do they know you&apos;re reaching out? <span className="font-normal text-[var(--body)]">— optional</span>
            </label>
            <input id="their_situation" name="they_know" type="text"
              placeholder="e.g. Yes, or I'd like to keep it a surprise"
              className="w-full rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(232,93,47,0.1)]" />
          </motion.div>
        )}

        <div>
          <label htmlFor="message" className="mb-2 flex items-center justify-between text-sm font-medium text-[var(--ink)]">
            <span>Anything you&apos;d like us to know?</span>
            <span className="font-normal text-[var(--body)]">optional</span>
          </label>
          <textarea id="message" name="message" rows={3}
            placeholder="Only if you want to. You don't have to explain or justify anything."
            className="w-full rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(232,93,47,0.1)]" />
        </div>
      </div>

      <button type="submit" disabled={state.submitting}
        className="mt-6 w-full rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.02] disabled:opacity-60">
        {state.submitting ? 'Sending…' : 'Send it privately'}
      </button>

      {state.errors && Object.keys(state.errors).length > 0 && (
        <p className="mt-3 text-center text-sm text-red-600">
          Something went wrong — please try again, or email us privately at{' '}
          <a href={`mailto:${SITE.email}`} className="font-medium hover:underline">{SITE.email}</a>.
        </p>
      )}

      <p className="mt-4 text-center text-xs text-[var(--body)]">
        🔒 This goes straight to the owners. No photos, no names shared, no social posts — ever.
      </p>
    </form>
  );
}
