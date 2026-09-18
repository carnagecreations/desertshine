'use client';
import { useState } from 'react';
import { track } from '@/lib/track';

const LEADS_ENDPOINT = 'https://casefiles.shiann.workers.dev/leads/other';
const CHECKLIST_PDF = '/cleaning-checklists.pdf';

// Free-checklist email capture — posts straight to the Worker (creates a
// Lead tagged "Checklist Download" in the app so these don't get lost)
// and, since the PDF is just a static public file, hands it to the visitor
// immediately instead of waiting on an email autoresponder.
export default function ChecklistLeadForm() {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;

    setSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch(LEADS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'checklist',
          sourceLabel: 'Free checklist download',
          contactName: name,
          email,
          _gotcha: '',
        }),
      });
      if (!res.ok) throw new Error('Checklist lead submission failed');
      setSucceeded(true);
      track('checklist_download', {});
      window.open(CHECKLIST_PDF, '_blank');
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (succeeded) {
    return (
      <div className="space-y-4 text-center">
        <div className="text-4xl">📋</div>
        <h3 className="text-lg font-semibold text-[var(--ink)]">Your checklist should be opening now.</h3>
        <p className="text-sm text-[var(--body)]">
          If it didn&apos;t pop up,{' '}
          <a href={CHECKLIST_PDF} target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--accent)] hover:underline">
            click here to open it directly
          </a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <h3 className="text-lg font-semibold text-[var(--ink)]">Get it free (instant download)</h3>
      <p className="text-sm text-[var(--body)]">
        Enter your email below and it opens right away — plus occasional cleaning tips and seasonal advice. Unsubscribe anytime.
      </p>
      <div>
        <label htmlFor="cl-email" className="block text-sm font-medium text-[var(--ink)] mb-2">
          Your email
        </label>
        <input
          id="cl-email"
          type="email"
          required
          autoComplete="email"
          placeholder="jane@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(232,93,47,0.4)]"
        />
      </div>
      <div>
        <label htmlFor="cl-name" className="block text-sm font-medium text-[var(--ink)] mb-2">
          Your name (optional)
        </label>
        <input
          id="cl-name"
          type="text"
          autoComplete="name"
          placeholder="Jane Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(232,93,47,0.4)]"
        />
      </div>
      {submitError && (
        <p className="text-sm text-red-600">
          Something went wrong — you can still{' '}
          <a href={CHECKLIST_PDF} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
            grab the checklist directly
          </a>.
        </p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-lg bg-[var(--accent)] px-6 py-3 text-white font-semibold transition-all hover:shadow-lg hover:shadow-[var(--accent)]/30 disabled:opacity-60"
      >
        {submitting ? 'Sending…' : 'Send Me the Checklist'}
      </button>
      <p className="text-xs text-[var(--body)]/70">✓ Instant PDF download • ✓ No spam • ✓ Unsubscribe anytime</p>
    </form>
  );
}
