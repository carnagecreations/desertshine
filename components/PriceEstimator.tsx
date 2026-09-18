'use client';
import { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { track } from '@/lib/track';
import { getPartnerRef } from '@/lib/partnerRef';
import { ADDONS, FROM_PRICE, calcEstimate, type AddOnKey, type ConditionKey, type FreqKey, type ServiceKey } from '@/lib/estimatorPricing';

/* ————— Pricing engine —————
   The math lives in lib/estimatorPricing.ts, calibrated to match Clean
   Convictions' actual invoicing engine (the business-manager app) exactly —
   what you see here is what you'll be quoted, not a rough guess.

   The layout below mirrors the estimator inside that same business-manager
   app: white step cards, numbered sections, and a sticky quote card —
   familiar to Riot and easy for a first-time visitor to scan.            */

const SERVICES: { key: ServiceKey | 'office'; label: string; desc: string; tag: string; icon: string }[] = [
  { key: 'standard', label: 'Regular Clean', desc: 'Maintenance & upkeep', tag: `from $${FROM_PRICE.standard}`, icon: '🏠' },
  { key: 'deep', label: 'Deep Clean', desc: 'Grout, baseboards, buildup', tag: `from $${FROM_PRICE.deep}`, icon: '✨' },
  { key: 'move', label: 'Move In/Out', desc: 'Empty home & inside detail', tag: `from $${FROM_PRICE.move}`, icon: '📦' },
  { key: 'office', label: 'Office Clean', desc: 'Workspaces & commercial', tag: 'custom', icon: '🏢' },
];

const FREQUENCIES: { key: FreqKey; label: string; tag: string }[] = [
  { key: 'weekly', label: 'Weekly', tag: 'Save 20%' },
  { key: 'biweekly', label: 'Every Other Week', tag: 'Save 15%' },
  { key: 'monthly', label: 'Monthly', tag: 'Save 10%' },
  { key: 'one', label: 'One-Time', tag: 'Standard' },
];

const CONDITIONS: { key: ConditionKey; label: string; desc: string; tag: string }[] = [
  { key: 'kept', label: 'Clean Standard', desc: 'Regular upkeep, light dusting', tag: '+0%' },
  { key: 'average', label: 'Normal Wear', desc: 'Average daily living grime', tag: '+15%' },
  { key: 'love', label: 'Needs Work', desc: 'Heavy soap scum, grease, pet hair', tag: '+30%' },
];

const SIZE_PRESETS = [
  { label: 'Apartment', sub: '900 sqft · 1bd/1ba', sqft: 900, beds: 1, baths: 1 },
  { label: 'Condo', sub: '1,400 sqft · 2bd/2ba', sqft: 1400, beds: 2, baths: 2 },
  { label: 'Ranch', sub: '1,850 sqft · 3bd/2ba', sqft: 1850, beds: 3, baths: 2 },
  { label: 'Large Home', sub: '2,600 sqft · 4bd/3ba', sqft: 2600, beds: 4, baths: 3 },
];

function Stepper({ label, value, min, max, onChange, suffix }: { label: string; value: number; min: number; max: number; onChange: (v: number) => void; suffix: string }) {
  return (
    <div className="bg-[var(--paper-light)] p-3.5 rounded-lg border border-[var(--line)]">
      <span className="text-xs font-semibold text-[var(--body)] block mb-2">{label}:</span>
      <div className="flex items-center justify-between">
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))} aria-label={`Decrease ${label}`}
          className="w-8 h-8 rounded bg-white border border-[var(--line)] font-bold text-[var(--ink)] hover:bg-[var(--paper-light)] flex items-center justify-center cursor-pointer disabled:opacity-30"
          disabled={value <= min}>&minus;</button>
        <span className="text-lg font-bold text-[var(--ink)]">{value} {value === 1 ? suffix : `${suffix}s`}</span>
        <button type="button" onClick={() => onChange(Math.min(max, value + 1))} aria-label={`Increase ${label}`}
          className="w-8 h-8 rounded bg-white border border-[var(--line)] font-bold text-[var(--ink)] hover:bg-[var(--paper-light)] flex items-center justify-center cursor-pointer disabled:opacity-30"
          disabled={value >= max}>+</button>
      </div>
    </div>
  );
}

function SectionLabel({ children, hint }: { children: React.ReactNode; hint?: string }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <label className="text-xs font-bold uppercase tracking-wider text-[var(--body)]">{children}</label>
      {hint && <span className="text-xs text-[var(--body)]/70">{hint}</span>}
    </div>
  );
}

/* ————— The estimator ————— */
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

  const applyPreset = (preset: (typeof SIZE_PRESETS)[number]) => {
    setSqft(preset.sqft);
    setBeds(preset.beds);
    setBaths(preset.baths);
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

  const price = result?.finalPrice ?? 0;
  const perVisit = !isOffice && freq !== 'one';
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
    <div className="rounded-2xl md:rounded-3xl border border-[var(--line)] bg-white shadow-[0_4px_24px_-8px_rgba(13,59,92,0.15)] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--line)] px-6 py-4 md:px-8 bg-[var(--paper-light)]">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.2em] text-[var(--accent)] uppercase">Estimate Engine</p>
          <h2 className="text-lg font-bold text-[var(--ink)]">Instant Flat-Rate Estimator</h2>
        </div>
        <span className="hidden sm:block text-xs text-[var(--body)]">Yuma-calibrated</span>
      </div>

      <div className="grid gap-8 p-6 md:grid-cols-[1fr_360px] md:gap-10 md:p-10">
        {/* ——— Controls ——— */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-5 border border-[var(--line)]">
            <SectionLabel>1. Select Cleaning Program</SectionLabel>
            <div className="grid grid-cols-2 gap-2.5">
              {SERVICES.map((s) => {
                const active = service === s.key;
                return (
                  <button key={s.key} type="button" onClick={() => setService(s.key)}
                    className={`p-3 rounded-lg border text-left transition cursor-pointer flex flex-col justify-between ${
                      active
                        ? 'border-[var(--accent)] bg-[var(--accent)]/10 ring-2 ring-[var(--accent)]/20'
                        : 'border-[var(--line)] hover:border-[var(--ink)]/20 bg-[var(--paper-light)]/50'
                    }`}>
                    <div>
                      <span className="text-xs font-semibold text-[var(--accent)] bg-[var(--accent)]/10 px-1.5 py-0.5 rounded">
                        {s.tag}
                      </span>
                      <h4 className="font-bold text-[var(--ink)] text-sm mt-1.5 flex items-center gap-1.5">
                        <span>{s.icon}</span> {s.label}
                      </h4>
                      <p className="text-[11px] text-[var(--body)] leading-tight mt-0.5">{s.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {isOffice ? (
            <div className="rounded-xl border border-dashed border-[var(--line)] bg-[var(--paper-light)] p-6">
              <p className="text-[var(--ink)]">Commercial spaces run on their own calibration — square footage, schedule, and scope vary too much to guess honestly.</p>
              <p className="mt-3 text-sm text-[var(--body)]">A quick walk-through (usually same day) gets you an exact flat rate for nightly, weekly, or custom schedules.</p>
            </div>
          ) : (
            <>
              <div className="bg-white rounded-xl p-5 border border-[var(--line)]">
                <SectionLabel hint="Base rate covers up to 1,500 sq ft">2. Home Size & Rooms</SectionLabel>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {SIZE_PRESETS.map((p) => (
                    <button key={p.label} type="button" onClick={() => applyPreset(p)}
                      className="px-2.5 py-1 text-xs rounded-full bg-[var(--paper-light)] hover:bg-[var(--line)] text-[var(--ink)] transition cursor-pointer">
                      {p.label} <span className="text-[var(--body)]">· {p.sub}</span>
                    </button>
                  ))}
                </div>

                <div className="mb-4 bg-[var(--paper-light)] p-3.5 rounded-lg border border-[var(--line)]">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-[var(--ink)]">Approximate Square Footage:</span>
                    <span className="font-bold text-[var(--ink)]">{sqft.toLocaleString()} sq ft</span>
                  </div>
                  <input
                    type="range" min={500} max={4000} step={50} value={sqft}
                    onChange={(e) => setSqft(Number(e.target.value))}
                    aria-label="Home size in square feet"
                    className="w-full h-2 bg-[var(--line)] rounded-lg appearance-none cursor-pointer"
                    style={{ accentColor: 'var(--accent)' }}
                  />
                  <div className="flex justify-between text-[11px] text-[var(--body)] mt-1">
                    <span>500</span><span>1,500 (base)</span><span>2,750</span><span>4,000+</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Stepper label="Bedrooms" value={beds} min={1} max={6} onChange={setBeds} suffix="Bed" />
                  <Stepper label="Bathrooms" value={baths} min={1} max={5} onChange={setBaths} suffix="Bath" />
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[var(--line)]">
                <SectionLabel>3. Home Condition & Cleaning Frequency</SectionLabel>

                <div className="mb-4">
                  <span className="text-xs font-semibold text-[var(--body)] block mb-2">Current Home Condition:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {CONDITIONS.map((c) => (
                      <button key={c.key} type="button" onClick={() => setCondition(c.key)}
                        className={`p-3 rounded-lg border text-left transition cursor-pointer ${
                          condition === c.key
                            ? 'border-[var(--accent)] bg-[var(--accent)]/10 ring-2 ring-[var(--accent)]/20'
                            : 'border-[var(--line)] hover:border-[var(--ink)]/20 bg-[var(--paper-light)]/50'
                        }`}>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-[var(--ink)] text-sm">{c.label}</span>
                          <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-[var(--paper-light)] text-[var(--body)]">{c.tag}</span>
                        </div>
                        <p className="text-[11px] text-[var(--body)] mt-1">{c.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-semibold text-[var(--body)] block mb-2">Service Frequency & Loyalty Discount:</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {FREQUENCIES.map((f) => (
                      <button key={f.key} type="button" onClick={() => setFreq(f.key)}
                        className={`p-2.5 rounded-lg border text-center transition cursor-pointer ${
                          freq === f.key
                            ? 'border-[var(--accent)] bg-[var(--accent)]/10 ring-2 ring-[var(--accent)]/20'
                            : 'border-[var(--line)] hover:border-[var(--ink)]/20 bg-[var(--paper-light)]/50'
                        }`}>
                        <span className="block text-xs font-bold text-[var(--ink)]">{f.label}</span>
                        <span className="text-[11px] font-medium text-emerald-600">{f.tag}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--line)] flex items-center justify-between">
                  <label className="flex items-center cursor-pointer select-none space-x-2">
                    <input type="checkbox" checked={military} onChange={(e) => setMilitary(e.target.checked)}
                      className="w-4 h-4 rounded cursor-pointer" style={{ accentColor: 'var(--accent)' }} />
                    <span className="text-xs font-semibold text-[var(--ink)]">🇺🇸 Military / Veteran Discount</span>
                  </label>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">&minus;10% Off</span>
                </div>

                <div className="mt-3 pt-3 border-t border-[var(--line)] flex items-center justify-between">
                  <label className="flex items-center cursor-pointer select-none space-x-2">
                    <input type="checkbox" checked={pets} onChange={(e) => setPets(e.target.checked)}
                      className="w-4 h-4 rounded cursor-pointer" style={{ accentColor: 'var(--accent)' }} />
                    <span className="text-xs font-semibold text-[var(--ink)]">🐾 Pets in the Home (pet-safe products)</span>
                  </label>
                  <span className="text-xs font-bold text-[var(--ink)] bg-[var(--paper-light)] px-2 py-0.5 rounded">+$15</span>
                </div>
                {pets && (
                  <p className="mt-2 text-xs text-emerald-700">We&apos;re experienced with all animals — from horses to reptiles — and use pet-safe products.</p>
                )}
                {military && (
                  <p className="mt-2 text-xs text-[var(--body)]">Military verification required at time of cleaning.</p>
                )}
              </div>

              <div className="bg-white rounded-xl p-5 border border-[var(--line)]">
                <SectionLabel hint={`${addons.size} selected`}>4. Special Requests & Add-Ons</SectionLabel>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ADDONS.map((a) => {
                    const checked = addons.has(a.key);
                    return (
                      <div key={a.key} onClick={() => toggleAddon(a.key)}
                        className={`p-3 rounded-lg border flex items-start justify-between cursor-pointer transition ${
                          checked
                            ? 'border-[var(--accent)] bg-[var(--accent)]/10 ring-1 ring-[var(--accent)]/20'
                            : 'border-[var(--line)] hover:border-[var(--ink)]/20 bg-[var(--paper-light)]/30'
                        }`}>
                        <div className="flex items-start space-x-2.5">
                          <div className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center border shrink-0 ${
                            checked ? 'bg-[var(--accent)] border-[var(--accent)] text-white' : 'border-[var(--line)] bg-white'
                          }`}>
                            {checked && <span className="text-[10px] leading-none">✓</span>}
                          </div>
                          <div>
                            <span className="text-xs font-bold text-[var(--ink)]">{a.label}</span>
                            <p className="text-[10px] text-[var(--body)] mt-0.5">+{a.minutes} mins</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-[var(--ink)] bg-white border border-[var(--line)] px-1.5 py-0.5 rounded shrink-0">
                          +${a.price}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>

        {/* ——— Live Estimate ——— */}
        <div className="md:sticky md:top-28 md:self-start">
          <div className="bg-white rounded-2xl border-2 border-[var(--accent)]/30 shadow-md p-6">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--line)]">
              <div className="flex items-center gap-1.5 text-[var(--accent)] text-xs font-bold">
                🛡️ <span>Clean Convictions Guaranteed</span>
              </div>
              <span className="text-[11px] text-[var(--body)]">Live Flat-Rate</span>
            </div>

            <div className="py-5 text-center bg-gradient-to-b from-[var(--accent)]/5 to-white rounded-xl my-4 border border-[var(--accent)]/15">
              <span className="text-xs font-medium text-[var(--body)] uppercase tracking-wider block">
                {isOffice ? 'Commercial Quote' : 'Estimated Flat Rate'}
              </span>
              <div className="flex items-center justify-center mt-1">
                {isOffice ? (
                  <span className="text-4xl sm:text-5xl font-extrabold text-[var(--accent)]">CUSTOM</span>
                ) : (
                  <>
                    <span className="text-4xl sm:text-5xl font-extrabold text-[var(--ink)]">${price.toLocaleString()}</span>
                    {perVisit && <span className="text-xs text-[var(--body)] ml-2 self-end mb-2">/ visit</span>}
                  </>
                )}
              </div>
              {!isOffice && perVisitSavings > 0 && (
                <div className="mt-2 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                  Saving ${perVisitSavings} every visit vs one-time
                </div>
              )}
            </div>

            {!isOffice && result && (
              <div className="bg-[var(--paper-dark)] text-white rounded-xl p-4 mb-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/60">⏱ Estimated On-Site Time:</span>
                  <span className="font-bold text-white">{result.hoursMin}&ndash;{result.hoursMax} hrs</span>
                </div>
              </div>
            )}

            {!isOffice && result && (
              <div className="space-y-2 text-xs border-t border-[var(--line)] pt-4 mb-6">
                {result.lines.map((l, i) => (
                  <div key={`${l.label}-${i}`} className={`flex justify-between ${l.neg ? 'text-emerald-700 font-medium' : 'text-[var(--body)]'}`}>
                    <span>{l.label}:</span>
                    <span className={l.neg ? '' : 'font-medium text-[var(--ink)]'}>{l.amount}</span>
                  </div>
                ))}
              </div>
            )}

            {!isOffice && (
              <div className="mb-5 flex items-start gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2.5">
                <span className="text-sm">✓</span>
                <p className="text-[11px] leading-snug text-emerald-900">
                  Miss a spot? Say so within 24 hours and we re-clean it <span className="font-semibold">free</span>. Every visit, no fine print.
                </p>
              </div>
            )}

            <Link href={`/${targetPage}?${estParams}`} onClick={lockIn}
              className="block rounded-full px-6 py-3.5 text-center text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.02]"
              style={{ background: 'var(--accent)' }}>
              {isOffice ? 'Book my walk-through →' : 'Lock in this quote →'}
            </Link>
            {!isOffice && (
              <p className="mx-auto mt-2 max-w-[240px] text-center text-[11px] leading-relaxed text-[var(--body)]">
                Your setup carries straight to booking — nothing to re-type.
              </p>
            )}
            <a href={SITE.phoneHref} onClick={() => track('phone_click', { location: 'estimator' })}
              className="mt-3 block text-center text-xs text-[var(--body)] hover:text-[var(--ink)] transition-colors">
              or call/text {SITE.phone}
            </a>
          </div>

          <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-[10px] font-bold tracking-[0.15em] text-amber-700 uppercase">⚠ Estimate, not a contract</p>
            <p className="mt-2 text-xs leading-relaxed text-amber-900/80">
              This is our best read on what you dialed in. We confirm a flat quote before we book, and it holds —
              unless the home we walk into doesn&apos;t match the home you described: significantly more square footage,
              heavy buildup that needs first-visit deep-clean time, or rooms we didn&apos;t count. If that happens, we give
              you the adjusted number before any work starts — you approve it, or we reschedule. No mid-job surprises.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--line)] px-6 py-3.5 text-center bg-[var(--paper-light)]">
        <p className="text-[10px] font-semibold tracking-[0.2em] text-[var(--body)] uppercase">Rarely the cheapest · Never a surprise</p>
      </div>
    </div>
  );
}
