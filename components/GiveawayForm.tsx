'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { SITE } from '@/lib/site';
import { GIVEAWAY, giveawayStatus, type GiveawayStatus } from '@/lib/giveaway';
import { track } from '@/lib/track';

// Splits a millisecond remainder into padded time parts for the countdown.
function parts(ms: number) {
  const clamp = Math.max(0, ms);
  const s = Math.floor(clamp / 1000);
  return {
    h: String(Math.floor(s / 3600)).padStart(2, '0'),
    m: String(Math.floor((s % 3600) / 60)).padStart(2, '0'),
    s: String(s % 60).padStart(2, '0'),
  };
}

function Countdown({ target, label }: { target: number; label: string }) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const update = () => setNow(Date.now());
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  // Render a stable placeholder until mounted, so server and client match.
  const { h, m, s } = parts(now === null ? 0 : target - now);
  return (
    <div className="text-center">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--body)]">{label}</p>
      <div className="flex items-center justify-center gap-2 tabular-nums" suppressHydrationWarning>
        {[{ v: h, l: 'hrs' }, { v: m, l: 'min' }, { v: s, l: 'sec' }].map((u, i) => (
          <div key={u.l} className="flex items-center gap-2">
            {i > 0 && <span className="text-2xl text-[var(--line)]">:</span>}
            <div className="min-w-[3.5rem] rounded-xl bg-[var(--ink)] px-3 py-2 text-3xl font-bold text-[var(--paper)] md:text-4xl">
              {u.v}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GiveawayForm() {
  const [state, handleSubmit] = useForm(GIVEAWAY.formId);
  const [agreed, setAgreed] = useState(false);

  // Compute status on the client so it's accurate at view time (the page
  // itself is statically exported). null until mounted to avoid a mismatch.
  const [status, setStatus] = useState<GiveawayStatus | null>(null);
  useEffect(() => {
    const tick = () => setStatus(giveawayStatus(Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (state.succeeded) track('giveaway_entered', {});
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border border-[var(--line)] bg-white p-10 text-center">
        <div className="mb-4 text-5xl">🎉</div>
        <h2 className="text-2xl font-bold text-[var(--ink)]">You&apos;re entered!</h2>
        <p className="mx-auto mt-3 max-w-md text-[var(--body)]">
          That&apos;s it — no purchase, no strings. We draw the winner at random right after entries close and
          reach out by phone or email the same day. Watch for a message from us.
        </p>
        <p className="mt-4 text-sm text-[var(--body)]">
          Didn&apos;t want to wait on luck?{' '}
          <Link href="/pricing" className="font-medium text-[var(--accent)] hover:underline">
            Run the instant estimator →
          </Link>
        </p>
      </motion.div>
    );
  }

  if (status === 'closed') {
    return (
      <div className="rounded-3xl border border-[var(--line)] bg-white p-10 text-center">
        <div className="mb-4 text-5xl">⏰</div>
        <h2 className="text-2xl font-bold text-[var(--ink)]">Entries are closed.</h2>
        <p className="mx-auto mt-3 max-w-md text-[var(--body)]">
          This one wrapped up — thank you to everyone who entered. The winner will hear from us directly.
        </p>
        <p className="mx-auto mt-4 max-w-md text-[var(--body)]">
          You don&apos;t have to win to get a spotless home. New clients still get{' '}
          <span className="font-medium text-[var(--ink)]">{GIVEAWAY.runnerUpOffer}</span>.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/book" className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105">
            Book a cleaning
          </Link>
          <a href={SITE.smsHref} className="rounded-full border-2 border-[var(--accent)] px-6 py-[10px] text-sm font-medium text-[var(--accent)] transition-colors hover:bg-[var(--accent)]/5">
            Text us
          </a>
        </div>
      </div>
    );
  }

  const opensAt = new Date(GIVEAWAY.opensAt).getTime();
  const closesAt = new Date(GIVEAWAY.closesAt).getTime();

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-[var(--line)] bg-white/60 p-6 backdrop-blur-sm">
        {status === 'upcoming'
          ? <Countdown target={opensAt} label="Entries open in" />
          : <Countdown target={closesAt} label="Entries close in" />}
      </div>

      <form onSubmit={handleSubmit} method="POST" className="rounded-3xl border border-[var(--line)] bg-white p-6 md:p-8">
        {/* Tags the submission so entries are easy to filter in Formspree */}
        <input type="hidden" name="_subject" value="GIVEAWAY ENTRY — Free Deep Clean" />
        <input type="hidden" name="entry_type" value="Free Deep Clean giveaway" />
        {/* Honeypot — bots fill this, humans never see it (Formspree drops those) */}
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

        <div className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--ink)]">Your name</label>
            <input id="name" name="name" type="text" required autoComplete="name" placeholder="Jane Doe"
              className="w-full rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(232,93,47,0.1)]" />
            <ValidationError field="name" errors={state.errors} />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--ink)]">Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@email.com"
                className="w-full rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(232,93,47,0.1)]" />
              <ValidationError field="email" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[var(--ink)]">Phone</label>
              <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="(555) 123-4567"
                className="w-full rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(232,93,47,0.1)]" />
              <ValidationError field="phone" errors={state.errors} />
            </div>
          </div>

          <div>
            <label htmlFor="area" className="mb-2 block text-sm font-medium text-[var(--ink)]">Your area</label>
            <select id="area" name="area" required
              className="w-full rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(232,93,47,0.1)]">
              {GIVEAWAY.eligibility.map((a) => <option key={a} value={a}>{a}</option>)}
            </select>
            <p className="mt-1.5 text-xs text-[var(--body)]">Open to residents of the Yuma-area communities we serve.</p>
          </div>

          <label className="flex items-start gap-3 text-sm text-[var(--body)]">
            <input type="checkbox" required checked={agreed} onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--accent)]" />
            <span>
              I&apos;m 18 or older and agree to the{' '}
              <Link href="/giveaway/rules" className="font-medium text-[var(--accent)] hover:underline">official rules</Link>.
            </span>
          </label>
        </div>

        <button type="submit" disabled={state.submitting || status === 'upcoming' || !agreed}
          className="mt-6 w-full rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50">
          {status === 'upcoming' ? 'Entries not open yet' : state.submitting ? 'Entering…' : 'Enter the giveaway'}
        </button>

        {state.errors && Object.keys(state.errors).length > 0 && (
          <p className="mt-3 text-center text-sm text-red-600">
            Something went wrong — please try again, or text us at{' '}
            <a href={SITE.smsHref} className="font-medium hover:underline">{SITE.phone}</a>.
          </p>
        )}

        <p className="mt-4 text-center text-xs text-[var(--body)]">
          ✓ Free to enter · ✓ No purchase necessary · ✓ One entry per person
        </p>
      </form>
    </div>
  );
}
