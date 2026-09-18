'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { SITE } from '@/lib/site';
import { track } from '@/lib/track';
import { getPartnerRef } from '@/lib/partnerRef';
import { ADDONS, BASE_PRICE, calcEstimate, type AddOnKey, type ConditionKey, type FreqKey, type ServiceKey } from '@/lib/estimatorPricing';

/* ————— Pricing engine —————
   The math lives in lib/estimatorPricing.ts, calibrated to match Clean
   Convictions' actual invoicing engine (the business-manager app) exactly —
   what you see here is what you'll be quoted, not a rough guess.          */

const SERVICES: { key: ServiceKey | 'office'; label: string; tag: string; icon: string }[] = [
  { key: 'standard', label: 'Regular Cleaning', tag: `from $${BASE_PRICE.standard}`, icon: '🏠' },
  { key: 'deep', label: 'Deep Clean', tag: `from $${BASE_PRICE.deep}`, icon: '✨' },
  { key: 'move', label: 'Move Cleaning', tag: `from $${BASE_PRICE.move}`, icon: '📦' },
  { key: 'office', label: 'Office Cleaning', tag: 'custom', icon: '🏢' },
];

const FREQUENCIES: { key: FreqKey; label: string; tag?: string }[] = [
  { key: 'one', label: 'Just once' },
  { key: 'weekly', label: 'Weekly', tag: '−20%' },
  { key: 'biweekly', label: 'Every other week', tag: '−15%' },
  { key: 'monthly', label: 'Monthly', tag: '−10%' },
];

const CONDITIONS: { key: ConditionKey; label: string; tag: string }[] = [
  { key: 'kept', label: 'Clean', tag: 'standard' },
  { key: 'average', label: 'Normal wear', tag: '+15%' },
  { key: 'love', label: 'Needs work', tag: '+30%' },
];

/* ————— Animated odometer readout ————— */
function Odometer({ value }: { value: number }) {
  const mv = useMotionValue(value);
  useEffect(() => {
    const controls = animate(mv, value, { duration: 0.7, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [value, mv]);
  const text = useTransform(mv, (v) => Math.round(v).toLocaleString('en-US'));
  return <motion.span>{text}</motion.span>;
}

/* ————— Small control primitives ————— */
function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
        active
          ? 'border-[var(--accent)] bg-[var(--accent)]/20 text-white shadow-[0_0_18px_-4px_var(--accent)]'
          : 'border-white/15 bg-white/5 text-white/70 hover:border-white/40 hover:text-white'
      }`}>
      {children}
    </button>
  );
}

function Stepper({ label, value, min, max, onChange }: { label: string; value: number; min: number; max: number; onChange: (v: number) => void }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <span className="text-sm text-white/70">{label}</span>
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))} aria-label={`Decrease ${label}`}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[var(--accent)] hover:text-white disabled:opacity-30"
          disabled={value <= min}>−</button>
        <span className="w-8 text-center font-mono text-lg text-white">{value}{value === max ? '+' : ''}</span>
        <button type="button" onClick={() => onChange(Math.min(max, value + 1))} aria-label={`Increase ${label}`}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[var(--accent)] hover:text-white disabled:opacity-30"
          disabled={value >= max}>+</button>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <p className="shrink-0 font-mono text-[11px] tracking-[0.25em] text-[var(--accent)] uppercase">{children}</p>
      <span className="h-px flex-1 bg-gradient-to-r from-[var(--accent)]/40 via-[var(--accent)]/10 to-transparent" />
    </div>
  );
}

/* ————— The machine ————— */
export default function PriceEstimator({ targetPage = 'contact' }: { targetPage?: 'contact' | 'book' } = {}) {
  const [service, setService] = useState<ServiceKey | 'office'>('standard');
  const [sqft, setSqft] = useState(1500);
  const [beds, setBeds] = useState(3);
  const [baths, setBaths] = useState(2);
  const [freq, setFreq] = useState<FreqKey>('biweekly');
  const [condition, setCondition] = useState<ConditionKey>('kept');
  const [pets, setPets] = useState(false);
  const [military, setMilitary] = useState(false);
  const [addons, setAddons] = useState<Set<AddOnKey>>(new Set());
  // Read only in an effect (never during render) so server and first client
  // render match — sessionStorage isn't available during SSR anyway.
  const [partnerRef, setPartnerRef] = useState('');
  useEffect(() => {
    // One-time read of sessionStorage on mount — not a render-loop concern.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPartnerRef(getPartnerRef());
  }, []);

  const toggleAddon = (key: AddOnKey) => {
    setAddons((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  };

  const isOffice = service === 'office';

  const result = useMemo(() => {
    if (isOffice) return null;
    return calcEstimate({ service, sqft, beds, baths, condition, freq, pets, military, addons });
  }, [isOffice, service, sqft, beds, baths, condition, freq, pets, military, addons]);

  const oneTimeResult = useMemo(() => {
    if (isOffice || freq === 'one') return null;
    return calcEstimate({ service: service as ServiceKey, sqft, beds, baths, condition, freq: 'one', pets, military, addons });
  }, [isOffice, service, sqft, beds, baths, condition, freq, pets, military, addons]);

  const biweeklyResult = useMemo(() => {
    if (isOffice || freq !== 'one') return null;
    return calcEstimate({ service: service as ServiceKey, sqft, beds, baths, condition, freq: 'biweekly', pets, military, addons });
  }, [isOffice, service, sqft, beds, baths, condition, freq, pets, military, addons]);

  const price = result?.finalPrice ?? 0;
  const perVisit = !isOffice && freq !== 'one';
  const sliderPct = ((sqft - 600) / (4000 - 600)) * 100;
  const perVisitSavings = oneTimeResult ? oneTimeResult.finalPrice - price : 0;

  // Carry the dialed-in estimate to the quote form so nothing gets re-typed.
  // Also carry along a partner referral code if one was captured earlier
  // (e.g. someone landed on the homepage via a partner's QR code, then
  // clicked through to run the estimator before booking).
  const estParamsObj: Record<string, string> = {
    est: isOffice ? 'custom' : String(price),
    svc: service,
    sqft: String(sqft),
    bd: String(beds),
    ba: String(baths),
    freq,
    cond: condition,
    pets: pets ? '1' : '0',
    mil: military ? '1' : '0',
    add: [...addons].join(','),
  };
  if (partnerRef) estParamsObj.ref = partnerRef;
  const estParams = new URLSearchParams(estParamsObj).toString();

  const lockIn = () => track('estimator_lock_in', { value: price, service, frequency: freq });

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--paper-dark)] shadow-[0_0_90px_-25px_rgba(232,93,47,0.55)] ring-1 ring-inset ring-white/5">
      {/* Ambient grid + scanlines */}
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background:repeating-linear-gradient(0deg,transparent,transparent_2px,#fff_2px,#fff_3px)]" />
      <div className="pointer-events-none absolute -top-32 right-0 h-64 w-64 rounded-full bg-[var(--accent)]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

      {/* Console header */}
      <div className="relative flex items-center justify-between border-b border-white/10 px-6 py-4 md:px-8">
        <div className="flex items-center gap-2">
          <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
        </div>
        <p className="font-mono text-[11px] tracking-[0.3em] text-white/50 uppercase">CC Estimate Engine · v3.0 · Yuma-calibrated</p>
        <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1.1 }} className="hidden font-mono text-sm text-[var(--accent)] md:block">▌</motion.span>
      </div>
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.25, 0.7, 0.25] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        className="relative h-px bg-gradient-to-r from-transparent via-[var(--accent)]/70 to-transparent"
      />

      <div className="relative grid gap-8 p-6 md:grid-cols-[1fr_360px] md:gap-10 md:p-10">
        {/* ——— Controls ——— */}
        <div className="space-y-8">
          <div>
            <SectionLabel>01 · Select program</SectionLabel>
            <div className="grid gap-2 sm:grid-cols-2">
              {SERVICES.map((s) => {
                const active = service === s.key;
                return (
                  <button key={s.key} type="button" onClick={() => setService(s.key)}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 ${
                      active
                        ? 'border-[var(--accent)] bg-[var(--accent)]/15 shadow-[0_0_28px_-8px_var(--accent)]'
                        : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/[0.08]'
                    }`}>
                    <span className="text-xl">{s.icon}</span>
                    <span className="flex-1 min-w-0">
                      <span className={`block truncate text-sm transition-colors ${active ? 'text-white' : 'text-white/75'}`}>{s.label}</span>
                      <span className="font-mono text-[11px] text-white/45">{s.tag}</span>
                    </span>
                    <span className={`h-2 w-2 shrink-0 rounded-full transition-all duration-300 ${active ? 'bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]' : 'bg-white/15'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {isOffice ? (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-dashed border-white/20 bg-white/5 p-6">
              <p className="text-white/85">Commercial spaces run on their own calibration — square footage, schedule, and scope vary too much to guess honestly.</p>
              <p className="mt-3 text-sm text-white/60">A quick walk-through (usually same day) gets you an exact flat rate for nightly, weekly, or custom schedules.</p>
            </motion.div>
          ) : (
            <>
              <div>
                <SectionLabel>02 · How big?</SectionLabel>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-4">
                  <div className="mb-3 flex items-baseline justify-between">
                    <span className="font-mono text-2xl text-white">{sqft.toLocaleString()}<span className="ml-1 text-sm text-white/50">sq ft</span></span>
                    <span className="font-mono text-[11px] tracking-widest text-white/40 uppercase">{sqft < 1100 ? 'compact · credit applied' : sqft <= 1500 ? 'base range' : 'extended range'}</span>
                  </div>
                  <input
                    type="range" min={600} max={4000} step={50} value={sqft}
                    onChange={(e) => setSqft(Number(e.target.value))}
                    aria-label="Home size in square feet"
                    className="est-slider w-full"
                    style={{ background: `linear-gradient(90deg, var(--accent) ${sliderPct}%, rgba(255,255,255,0.12) ${sliderPct}%)` }}
                  />
                  <div className="relative mt-1.5 h-1.5">
                    {[600, 1500, 2500, 4000].map((v) => (
                      <span key={v} style={{ left: `${((v - 600) / 3400) * 100}%` }}
                        className={`absolute top-0 h-1.5 w-px -translate-x-1/2 ${sqft >= v ? 'bg-[var(--accent)]/60' : 'bg-white/20'}`} />
                    ))}
                  </div>
                  <div className="mt-1 flex justify-between font-mono text-[10px] text-white/35">
                    <span>600</span><span>1,500</span><span>2,500</span><span>4,000+</span>
                  </div>
                </div>
              </div>

              <div>
                <SectionLabel>03 · Bedrooms & baths</SectionLabel>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Stepper label="Bedrooms" value={beds} min={1} max={6} onChange={setBeds} />
                  <Stepper label="Bathrooms" value={baths} min={1} max={5} onChange={setBaths} />
                </div>
              </div>

              <div>
                <SectionLabel>04 · How often?</SectionLabel>
                <div className="flex flex-wrap gap-2">
                  {FREQUENCIES.map((f) => (
                    <Chip key={f.key} active={freq === f.key} onClick={() => setFreq(f.key)}>
                      {f.label}{f.tag && <span className="ml-1.5 font-mono text-xs text-emerald-300">{f.tag}</span>}
                    </Chip>
                  ))}
                </div>
              </div>

              <div>
                <SectionLabel>05 · What shape is it in?</SectionLabel>
                <div className="flex flex-wrap gap-2">
                  {CONDITIONS.map((c) => (
                    <Chip key={c.key} active={condition === c.key} onClick={() => setCondition(c.key)}>
                      {c.label} <span className="ml-1 font-mono text-xs opacity-60">{c.tag}</span>
                    </Chip>
                  ))}
                </div>
                <p className="mt-2 font-mono text-[10px] tracking-wider text-white/35 uppercase">Self-reported — crew calibrates on arrival</p>
              </div>

              <div>
                <SectionLabel>06 · Anything special?</SectionLabel>
                <div className="flex flex-wrap gap-2">
                  <Chip active={pets} onClick={() => setPets(!pets)}>
                    🐾 Pets (pet-safe products) <span className="ml-1 font-mono text-xs opacity-60">+$15</span>
                  </Chip>
                  <Chip active={military} onClick={() => setMilitary(!military)}>
                    🇺🇸 Military / Veteran <span className="ml-1 font-mono text-xs opacity-60">−10%</span>
                  </Chip>
                  {ADDONS.map((a) => (
                    <Chip key={a.key} active={addons.has(a.key)} onClick={() => toggleAddon(a.key)}>
                      {a.label} <span className="ml-1 font-mono text-xs opacity-60">+${a.price}</span>
                    </Chip>
                  ))}
                </div>
                {pets && (
                  <p className="mt-2 text-xs text-emerald-300/80">We&apos;re experienced with all animals — from horses to reptiles — and use pet-safe products.</p>
                )}
                {addons.has('disinfect') && (
                  <p className="mt-2 text-xs text-emerald-300/80">Vet-grade sanitizing after a sick pet — safe for the whole household once dry.</p>
                )}
                {addons.has('garage-organize') && (
                  <p className="mt-2 text-xs text-emerald-300/80">Sort, organize, and arrange the garage — bins grouped, tools staged.</p>
                )}
                {military && (
                  <p className="mt-2 text-xs text-white/50">Military verification required at time of cleaning</p>
                )}
              </div>
            </>
          )}
        </div>

        {/* ——— Readout ——— */}
        <div className="md:sticky md:top-28 md:self-start">
          <div className="relative overflow-hidden rounded-2xl border border-[var(--accent)]/30 bg-gradient-to-b from-black/50 to-black/25 p-6 backdrop-blur-sm">
            {/* HUD corner brackets */}
            <span className="pointer-events-none absolute left-2 top-2 h-3 w-3 border-l-2 border-t-2 border-[var(--accent)]/60" />
            <span className="pointer-events-none absolute right-2 top-2 h-3 w-3 border-r-2 border-t-2 border-[var(--accent)]/60" />
            <span className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-[var(--accent)]/60" />
            <span className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-[var(--accent)]/60" />
            {/* Light sweep on every recompute */}
            <motion.span
              key={isOffice ? 'office' : price}
              initial={{ x: '-140%' }}
              animate={{ x: '340%' }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-[var(--accent)]/10 to-transparent"
            />

            <div className="flex items-center justify-between">
              <p className="font-mono text-[11px] tracking-[0.25em] text-white/40 uppercase">Estimated flat rate</p>
              <div className="flex items-end gap-0.5" aria-hidden="true">
                {[0, 1, 2].map((i) => (
                  <motion.span key={i}
                    animate={{ scaleY: [0.35, 1, 0.35] }}
                    transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2, ease: 'easeInOut' }}
                    className="h-2.5 w-0.5 origin-bottom rounded-full bg-[var(--accent)]/70" />
                ))}
              </div>
            </div>

            <div className="mt-3 flex items-baseline gap-2" aria-live="polite">
              {isOffice ? (
                <span className="font-mono text-5xl font-bold text-[var(--accent)] [text-shadow:0_0_24px_rgba(232,93,47,0.6)]">CUSTOM</span>
              ) : (
                <>
                  <span className="font-mono text-6xl font-bold text-[var(--accent)] [font-variant-numeric:tabular-nums] [text-shadow:0_0_24px_rgba(232,93,47,0.6)]">
                    $<Odometer value={price} />
                  </span>
                  {perVisit && <span className="font-mono text-sm text-white/50">/ visit</span>}
                </>
              )}
            </div>

            {!isOffice && result && (
              <p className="mt-2 font-mono text-[11px] tracking-wider text-white/40">≈ {result.hoursMin}–{result.hoursMax} crew-hours on site</p>
            )}

            {!isOffice && freq === 'one' && biweeklyResult && biweeklyResult.finalPrice < price && (
              <button type="button" onClick={() => setFreq('biweekly')}
                className="mt-2 text-left text-xs text-emerald-300/90 transition-colors hover:text-emerald-200">
                💡 Bi-weekly would run ${biweeklyResult.finalPrice}/visit — tap to try it
              </button>
            )}
            {!isOffice && freq !== 'one' && perVisitSavings > 0 && (
              <p className="mt-2 text-xs text-emerald-300/90">Saving ${perVisitSavings} every visit vs one-time.</p>
            )}

            {/* Receipt breakdown — operational transparency: seeing the work builds trust */}
            {!isOffice && result && (
              <div className="mt-5 border-t border-dashed border-white/15 pt-4">
                <p className="mb-2 font-mono text-[10px] tracking-[0.2em] text-white/35 uppercase">The math · nothing hidden</p>
                <div className="space-y-1.5">
                <AnimatePresence initial={false}>
                  {result.lines.map((l, i) => (
                    <motion.div
                      key={`${l.label}-${i}`}
                      layout
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-baseline justify-between gap-3 font-mono text-xs">
                      <span className="text-white/55">{l.label}</span>
                      <span className={l.neg ? 'text-emerald-300' : 'text-white/85'}>{l.amount}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
                </div>
              </div>
            )}

            {/* Risk reversal, placed exactly at the decision point */}
            {!isOffice && (
              <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-3 py-2.5">
                <span className="text-sm">🛡️</span>
                <p className="text-[11px] leading-snug text-white/70">
                  Miss a spot? Say so within 24 hours and we re-clean it <span className="font-medium text-emerald-300">free</span>. Every visit, no fine print.
                </p>
              </div>
            )}

            <Link href={`/${targetPage}?${estParams}`} onClick={lockIn}
              className="mt-5 block rounded-full bg-[var(--accent)] px-6 py-3.5 text-center text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.03]">
              {isOffice ? 'Book my walk-through →' : 'Lock in this quote →'}
            </Link>
            {!isOffice && (
              <p className="mx-auto mt-2 max-w-[240px] text-center text-[11px] leading-relaxed text-white/45">
                Your setup carries straight to booking — nothing to re-type.
              </p>
            )}
            <a href={SITE.phoneHref} onClick={() => track('phone_click', { location: 'estimator' })}
              className="mt-3 block text-center text-xs text-white/50 hover:text-white/80 transition-colors">
              or call/text {SITE.phone}
            </a>

            {/* Certainty: what happens after the button */}
            {!isOffice && (
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="mb-2.5 font-mono text-[10px] tracking-[0.2em] text-white/35 uppercase">What happens next</p>
                <ol className="space-y-2">
                  {[
                    'Your estimate carries over to booking',
                    'You pick the date and time to schedule',
                    'We confirm your flat quote before the visit — then it holds',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[11px] leading-snug text-white/60">
                      <span className="mt-px flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[var(--accent)]/40 font-mono text-[9px] text-[var(--accent)]">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <div className="mt-4 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4">
            <p className="font-mono text-[10px] tracking-[0.2em] text-amber-300/80 uppercase">⚠ Estimate, not a contract</p>
            <p className="mt-2 text-xs leading-relaxed text-white/60">
              This is our best read on what you dialed in. We confirm a flat quote before we book, and it holds —
              <span className="text-white/85"> unless the home we walk into doesn&apos;t match the home you described</span>: significantly more
              square footage, heavy buildup that needs first-visit deep-clean time, or rooms we didn&apos;t count. If that happens,
              we give you the adjusted number <span className="text-white/85">before any work starts</span> — you approve it, or we reschedule.
              No mid-job surprises, ever. That&apos;s the conviction.
            </p>
          </div>
        </div>
      </div>

      {/* Console footer — honest positioning (two-sided claims read as credible) */}
      <div className="relative border-t border-white/10 px-6 py-3.5 text-center">
        <p className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase">Rarely the cheapest · Never a surprise</p>
      </div>
    </div>
  );
}
