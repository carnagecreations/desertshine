'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { SITE } from '@/lib/site';

/* ————— Pricing engine (calibrated to published rates) —————
   Base rates cover ~1,500 sq ft with 2 bathrooms, matching the
   "from" prices on the cards this machine replaced.            */

type ServiceKey = 'standard' | 'deep' | 'move' | 'office';
type FreqKey = 'one' | 'weekly' | 'biweekly' | 'monthly';
type ConditionKey = 'kept' | 'average' | 'love';

const SERVICES: { key: ServiceKey; label: string; base: number; tag: string }[] = [
  { key: 'standard', label: 'Standard / Recurring', base: 129, tag: 'from $129' },
  { key: 'deep', label: 'Deep Clean', base: 249, tag: 'from $249' },
  { key: 'move', label: 'Move-In / Move-Out', base: 299, tag: 'from $299' },
  { key: 'office', label: 'Office / Commercial', base: 0, tag: 'custom' },
];

const FREQUENCIES: { key: FreqKey; label: string; mult: number; tag?: string }[] = [
  { key: 'one', label: 'One-time', mult: 1 },
  { key: 'weekly', label: 'Weekly', mult: 0.8, tag: '−20%' },
  { key: 'biweekly', label: 'Bi-weekly', mult: 0.85, tag: '−15%' },
  { key: 'monthly', label: 'Monthly', mult: 0.9, tag: '−10%' },
];

const CONDITIONS: { key: ConditionKey; label: string; mult: number; tag: string }[] = [
  { key: 'kept', label: 'Well kept', mult: 1, tag: 'standard' },
  { key: 'average', label: 'Lived in', mult: 1.15, tag: '+15%' },
  { key: 'love', label: 'Needs love', mult: 1.3, tag: '+30%' },
];

const ADDONS: { key: string; label: string; price: number; includedIn: ServiceKey[] }[] = [
  { key: 'fridge', label: 'Inside fridge', price: 30, includedIn: ['deep', 'move'] },
  { key: 'oven', label: 'Inside oven', price: 30, includedIn: ['deep', 'move'] },
  { key: 'windows', label: 'Interior windows', price: 40, includedIn: [] },
  { key: 'garage', label: 'Garage sweep-out', price: 25, includedIn: ['move'] },
  { key: 'laundry', label: 'Laundry & linens', price: 15, includedIn: [] },
];

const round5 = (n: number) => Math.round(n / 5) * 5;

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
  return <p className="mb-3 font-mono text-[11px] tracking-[0.25em] text-[var(--accent)] uppercase">{children}</p>;
}

/* ————— The machine ————— */
export default function PriceEstimator() {
  const [service, setService] = useState<ServiceKey>('standard');
  const [sqft, setSqft] = useState(1500);
  const [beds, setBeds] = useState(3);
  const [baths, setBaths] = useState(2);
  const [freq, setFreq] = useState<FreqKey>('biweekly');
  const [condition, setCondition] = useState<ConditionKey>('kept');
  const [pets, setPets] = useState(false);
  const [addons, setAddons] = useState<Set<string>>(new Set());

  const toggleAddon = (key: string) => {
    setAddons((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  };

  const isOffice = service === 'office';
  const svc = SERVICES.find((s) => s.key === service)!;

  const { price, lines } = useMemo(() => {
    if (isOffice) return { price: 0, lines: [] as { label: string; amount: string; neg?: boolean }[] };

    const lines: { label: string; amount: string; neg?: boolean }[] = [];
    let subtotal = svc.base;
    lines.push({ label: `Base — ${svc.label}`, amount: `$${svc.base}` });

    // Size prices continuously in BOTH directions from the 1,500 sq ft
    // baseline: extra footage costs more per block than compact footage
    // credits back (fixed setup time means small homes aren't linearly cheap).
    const blocks = Math.round((sqft - 1500) / 250);
    const sizeAdd = blocks >= 0
      ? blocks * (service === 'standard' ? 12 : 18)
      : blocks * (service === 'standard' ? 8 : 12);
    if (sizeAdd !== 0) {
      subtotal += sizeAdd;
      lines.push({
        label: `Size calibration · ${sqft.toLocaleString()} sq ft`,
        amount: sizeAdd > 0 ? `+$${sizeAdd}` : `−$${Math.abs(sizeAdd)}`,
        neg: sizeAdd < 0,
      });
    }

    // Bathrooms: baseline 2. Extra baths are heavy scrub-time; a single
    // bath credits a little back.
    const bathDelta = baths - 2;
    const bathAdd = bathDelta >= 0
      ? bathDelta * (service === 'standard' ? 20 : 30)
      : bathDelta * (service === 'standard' ? 10 : 15);
    if (bathAdd !== 0) {
      subtotal += bathAdd;
      lines.push({
        label: `Bath modules × ${baths}`,
        amount: bathAdd > 0 ? `+$${bathAdd}` : `−$${Math.abs(bathAdd)}`,
        neg: bathAdd < 0,
      });
    }

    // Bedrooms: baseline 3, scaling both directions.
    const bedDelta = beds - 3;
    const bedAdd = bedDelta >= 0
      ? bedDelta * (service === 'standard' ? 10 : 15)
      : bedDelta * (service === 'standard' ? 8 : 10);
    if (bedAdd !== 0) {
      subtotal += bedAdd;
      lines.push({
        label: `Bedroom count × ${beds}`,
        amount: bedAdd > 0 ? `+$${bedAdd}` : `−$${Math.abs(bedAdd)}`,
        neg: bedAdd < 0,
      });
    }

    const cond = CONDITIONS.find((c) => c.key === condition)!;
    if (cond.mult > 1) {
      const condAdd = Math.round(subtotal * (cond.mult - 1));
      subtotal += condAdd;
      lines.push({ label: `Condition factor · ${cond.label.toLowerCase()}`, amount: `+$${condAdd}` });
    }

    if (pets) { subtotal += 15; lines.push({ label: 'Pet-hair protocol', amount: '+$15' }); }

    for (const a of ADDONS) {
      if (a.includedIn.includes(service)) continue;
      if (addons.has(a.key)) { subtotal += a.price; lines.push({ label: `Add-on · ${a.label.toLowerCase()}`, amount: `+$${a.price}` }); }
    }

    const f = FREQUENCIES.find((x) => x.key === freq)!;
    if (service === 'standard' && f.mult < 1) {
      const discount = Math.round(subtotal * (1 - f.mult));
      subtotal -= discount;
      lines.push({ label: `Loyalty discount · ${f.label.toLowerCase()}`, amount: `−$${discount}`, neg: true });
    }

    // Hard minimum per program — small-home credits and loyalty discounts
    // never stack below the cost of showing up with a full kit.
    const MIN: Record<Exclude<ServiceKey, 'office'>, number> = { standard: 89, deep: 179, move: 199 };
    let final = round5(subtotal);
    const floor = MIN[service as Exclude<ServiceKey, 'office'>];
    if (final < floor) {
      final = floor;
      lines.push({ label: 'Minimum visit rate applied', amount: `$${floor}` });
    }

    return { price: final, lines };
  }, [isOffice, svc, service, sqft, beds, baths, condition, pets, addons, freq]);

  const perVisit = service === 'standard' && freq !== 'one';
  const sliderPct = ((sqft - 600) / (4000 - 600)) * 100;

  const lockIn = () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag?.('event', 'estimator_lock_in', { value: price, service, frequency: freq });
    } catch { /* analytics is best-effort */ }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--paper-dark)] shadow-[0_0_90px_-25px_rgba(232,93,47,0.55)]">
      {/* Ambient grid + scanlines */}
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background:repeating-linear-gradient(0deg,transparent,transparent_2px,#fff_2px,#fff_3px)]" />
      <div className="pointer-events-none absolute -top-32 right-0 h-64 w-64 rounded-full bg-[var(--accent)]/25 blur-3xl" />

      {/* Console header */}
      <div className="relative flex items-center justify-between border-b border-white/10 px-6 py-4 md:px-8">
        <div className="flex items-center gap-2">
          <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
        </div>
        <p className="font-mono text-[11px] tracking-[0.3em] text-white/50 uppercase">CC Estimate Engine · v2.0 · Yuma-calibrated</p>
        <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1.1 }} className="hidden font-mono text-sm text-[var(--accent)] md:block">▌</motion.span>
      </div>

      <div className="relative grid gap-8 p-6 md:grid-cols-[1fr_360px] md:gap-10 md:p-10">
        {/* ——— Controls ——— */}
        <div className="space-y-8">
          <div>
            <SectionLabel>01 · Select program</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <Chip key={s.key} active={service === s.key} onClick={() => setService(s.key)}>
                  {s.label} <span className="ml-1 font-mono text-xs opacity-60">{s.tag}</span>
                </Chip>
              ))}
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
                <SectionLabel>02 · Home size</SectionLabel>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-4">
                  <div className="mb-3 flex items-baseline justify-between">
                    <span className="font-mono text-2xl text-white">{sqft.toLocaleString()}<span className="ml-1 text-sm text-white/50">sq ft</span></span>
                    <span className="font-mono text-[11px] tracking-widest text-white/40 uppercase">{sqft < 1400 ? 'compact · credits on' : sqft <= 1600 ? 'base range' : 'extended range'}</span>
                  </div>
                  <input
                    type="range" min={600} max={4000} step={50} value={sqft}
                    onChange={(e) => setSqft(Number(e.target.value))}
                    aria-label="Home size in square feet"
                    className="est-slider w-full"
                    style={{ background: `linear-gradient(90deg, var(--accent) ${sliderPct}%, rgba(255,255,255,0.12) ${sliderPct}%)` }}
                  />
                  <div className="mt-2 flex justify-between font-mono text-[10px] text-white/35">
                    <span>600</span><span>1,500</span><span>2,500</span><span>4,000+</span>
                  </div>
                </div>
              </div>

              <div>
                <SectionLabel>03 · Rooms</SectionLabel>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Stepper label="Bedrooms" value={beds} min={1} max={6} onChange={setBeds} />
                  <Stepper label="Bathrooms" value={baths} min={1} max={5} onChange={setBaths} />
                </div>
              </div>

              {service === 'standard' && (
                <div>
                  <SectionLabel>04 · Frequency</SectionLabel>
                  <div className="flex flex-wrap gap-2">
                    {FREQUENCIES.map((f) => (
                      <Chip key={f.key} active={freq === f.key} onClick={() => setFreq(f.key)}>
                        {f.label}{f.tag && <span className="ml-1.5 font-mono text-xs text-emerald-300">{f.tag}</span>}
                      </Chip>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <SectionLabel>{service === 'standard' ? '05' : '04'} · Current condition</SectionLabel>
                <div className="flex flex-wrap gap-2">
                  {CONDITIONS.map((c) => (
                    <Chip key={c.key} active={condition === c.key} onClick={() => setCondition(c.key)}>
                      {c.label} <span className="ml-1 font-mono text-xs opacity-60">{c.tag}</span>
                    </Chip>
                  ))}
                </div>
              </div>

              <div>
                <SectionLabel>{service === 'standard' ? '06' : '05'} · Extras</SectionLabel>
                <div className="flex flex-wrap gap-2">
                  <Chip active={pets} onClick={() => setPets(!pets)}>
                    🐾 Pets in the home <span className="ml-1 font-mono text-xs opacity-60">+$15</span>
                  </Chip>
                  {ADDONS.map((a) => {
                    const included = a.includedIn.includes(service);
                    if (included) {
                      return (
                        <span key={a.key} className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
                          {a.label} · included
                        </span>
                      );
                    }
                    return (
                      <Chip key={a.key} active={addons.has(a.key)} onClick={() => toggleAddon(a.key)}>
                        {a.label} <span className="ml-1 font-mono text-xs opacity-60">+${a.price}</span>
                      </Chip>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>

        {/* ——— Readout ——— */}
        <div className="md:sticky md:top-28 md:self-start">
          <div className="rounded-2xl border border-[var(--accent)]/30 bg-black/30 p-6 backdrop-blur-sm">
            <p className="font-mono text-[11px] tracking-[0.25em] text-white/40 uppercase">Estimated flat rate</p>

            <div className="mt-3 flex items-baseline gap-2">
              {isOffice ? (
                <span className="font-mono text-5xl font-bold text-[var(--accent)] [text-shadow:0_0_24px_rgba(232,93,47,0.6)]">CUSTOM</span>
              ) : (
                <>
                  <span className="font-mono text-6xl font-bold text-[var(--accent)] [text-shadow:0_0_24px_rgba(232,93,47,0.6)]">
                    $<Odometer value={price} />
                  </span>
                  {perVisit && <span className="font-mono text-sm text-white/50">/ visit</span>}
                </>
              )}
            </div>

            {/* Receipt breakdown */}
            {!isOffice && (
              <div className="mt-5 space-y-1.5 border-t border-dashed border-white/15 pt-4">
                <AnimatePresence initial={false}>
                  {lines.map((l) => (
                    <motion.div
                      key={l.label}
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
            )}

            <Link href="/contact" onClick={lockIn}
              className="mt-6 block rounded-full bg-[var(--accent)] px-6 py-3.5 text-center text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.03]">
              {isOffice ? 'Book my walk-through →' : 'Lock in my exact quote →'}
            </Link>
            <a href={SITE.phoneHref} className="mt-3 block text-center text-xs text-white/50 hover:text-white/80 transition-colors">
              or call {SITE.phone}
            </a>
          </div>

          {/* Disclaimer */}
          <div className="mt-4 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4">
            <p className="font-mono text-[10px] tracking-[0.2em] text-amber-300/80 uppercase">⚠ Estimate, not a contract</p>
            <p className="mt-2 text-xs leading-relaxed text-white/60">
              This number can shift once we confirm details — actual square footage or layout, heavy buildup that needs a first-visit deep clean,
              rooms or baths beyond what you dialed in, or special requests on arrival. Your <span className="text-white/85">final flat quote is confirmed before we book</span> —
              and once quoted, it never changes. That&apos;s the conviction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
