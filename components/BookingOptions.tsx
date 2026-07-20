'use client';
import { useEffect, useRef, useState } from 'react';
import { parseEstimateFromSearch } from '@/lib/estimate';
import QuoteForm from '@/components/QuoteForm';
import { SITE } from '@/lib/site';

const FORM_ID = 'xvzekkjj';
const CALENDLY_URL = 'https://calendly.com/cleanconviction';
const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement | null }) => void;
    };
  }
}

// Calendly only dispatches `calendly.event_scheduled` postMessages when the
// widget is initialized through its own script — a bare <iframe src="...">shows
// the calendar and lets people book, but never wires up that messaging.
function loadCalendlyScript(onReady: () => void) {
  if (window.Calendly) { onReady(); return; }
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_SCRIPT_SRC}"]`);
  if (existing) { existing.addEventListener('load', onReady, { once: true }); return; }
  const script = document.createElement('script');
  script.src = CALENDLY_SCRIPT_SRC;
  script.async = true;
  script.addEventListener('load', onReady, { once: true });
  document.head.appendChild(script);
}

function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    loadCalendlyScript(() => {
      if (!cancelled) window.Calendly?.initInlineWidget({ url: CALENDLY_URL, parentElement: containerRef.current });
    });
    return () => { cancelled = true; };
  }, []);

  return <div ref={containerRef} style={{ minWidth: 320, height: 700 }} />;
}

export default function BookingOptions() {
  const [estimate] = useState(() => (typeof window === 'undefined' ? null : parseEstimateFromSearch(window.location.search)));
  const [mode, setMode] = useState<'calendar' | 'form'>('calendar');
  const [sentToCalendlyBooking, setSentToCalendlyBooking] = useState(false);
  const sent = useRef(false);

  // Calendly is a separate system — the estimate never reaches it. When the
  // embed reports a completed booking, relay the quote to Formspree so it
  // still lands in the inbox next to that booking.
  useEffect(() => {
    if (!estimate) return;
    const onMessage = (e: MessageEvent) => {
      if (typeof e.data !== 'object' || e.data?.event !== 'calendly.event_scheduled') return;
      if (sent.current) return;
      sent.current = true;
      fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'Quote reference for a new Calendly booking',
          source: 'Calendly booking',
          service: estimate.service,
          size: estimate.size,
          details: estimate.details,
        }),
      }).then(() => setSentToCalendlyBooking(true)).catch(() => {});
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [estimate]);

  return (
    <div>
      {estimate && (
        <div role="status" className="mb-6 rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-5">
          <p className="text-sm font-medium text-[var(--ink)]">Your quote carried over — nothing to re-type below.</p>
          <p className="mt-1 text-sm text-[var(--body)]">{estimate.summaryLine}</p>
        </div>
      )}

      <div className="mb-6 inline-flex rounded-full border border-[var(--line)] bg-white/50 p-1">
        <button
          type="button"
          onClick={() => setMode('calendar')}
          aria-pressed={mode === 'calendar'}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${mode === 'calendar' ? 'bg-[var(--accent)] text-white' : 'text-[var(--body)] hover:text-[var(--ink)]'}`}
        >
          Pick a time
        </button>
        <button
          type="button"
          onClick={() => setMode('form')}
          aria-pressed={mode === 'form'}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${mode === 'form' ? 'bg-[var(--accent)] text-white' : 'text-[var(--body)] hover:text-[var(--ink)]'}`}
        >
          Send us your details
        </button>
      </div>

      {mode === 'calendar' ? (
        <>
          <div className="rounded-2xl border border-[var(--line)] bg-white/50 backdrop-blur-sm overflow-hidden">
            <CalendlyEmbed />
          </div>
          {sentToCalendlyBooking && (
            <p role="status" className="mt-4 text-center text-sm font-medium text-[var(--accent)]">
              Booked — we&apos;ve sent your quote details along with it.
            </p>
          )}
          <p className="mt-4 text-center text-sm text-[var(--body)]">
            Calendar not loading?{' '}
            <a href={SITE.phoneHref} className="font-medium text-[var(--accent)] hover:underline">Call</a> or{' '}
            <a href={SITE.smsHref} className="font-medium text-[var(--accent)] hover:underline">text {SITE.phone}</a>, or{' '}
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--accent)] hover:underline">open Calendly directly</a>.
          </p>
        </>
      ) : (
        <QuoteForm />
      )}
    </div>
  );
}
