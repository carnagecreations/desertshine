'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { SITE } from '@/lib/site';

const FORM_ID = 'xvzekkjj';

const SERVICES = [
  { name: 'Recurring home cleaning', emoji: '🏠', color: 'from-blue-50 to-blue-100/50' },
  { name: 'Deep clean', emoji: '✨', color: 'from-amber-50 to-amber-100/50' },
  { name: 'Move-in / move-out', emoji: '📦', color: 'from-purple-50 to-purple-100/50' },
  { name: 'Office / commercial', emoji: '🏢', color: 'from-slate-50 to-slate-100/50' },
];

const SIZE_OPTIONS = [
  { value: 'Under 1,500 sq ft', label: 'Cozy' },
  { value: '1,500 – 2,500 sq ft', label: 'Standard' },
  { value: 'Over 2,500 sq ft', label: 'Spacious' },
  { value: 'Commercial space', label: 'Commercial' },
];

export default function QuoteForm() {
  const [state, handleSubmit] = useForm(FORM_ID);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: SERVICES[0].name,
    name: '',
    phone: '',
    size: SIZE_OPTIONS[0].value,
    details: '',
  });

  // Prefill from the Estimate Engine (/pricing) — the CTA there carries the
  // dialed-in setup over as query params so visitors never re-type it.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const est = q.get('est');
    if (!est) return;
    const svcMap: Record<string, string> = {
      standard: 'Recurring home cleaning',
      deep: 'Deep clean',
      move: 'Move-in / move-out',
      office: 'Office / commercial',
    };
    const freqMap: Record<string, string> = { one: 'one-time', weekly: 'weekly', biweekly: 'bi-weekly', monthly: 'monthly' };
    const condMap: Record<string, string> = { kept: 'well kept', average: 'lived in', love: 'needs love' };
    const svc = q.get('svc') ?? '';
    const sqft = Number(q.get('sqft') || 0);
    const size = svc === 'office'
      ? SIZE_OPTIONS[3].value
      : sqft < 1500 ? SIZE_OPTIONS[0].value : sqft <= 2500 ? SIZE_OPTIONS[1].value : SIZE_OPTIONS[2].value;
    const details = svc === 'office'
      ? 'From the Estimate Engine: commercial walk-through requested.'
      : `From the Estimate Engine: ≈ $${est} — ${[
          `${sqft.toLocaleString()} sq ft`,
          `${q.get('bd')} bed / ${q.get('ba')} bath`,
          freqMap[q.get('freq') ?? ''],
          condMap[q.get('cond') ?? ''],
          q.get('pets') === '1' ? 'pets in the home' : '',
          q.get('add') ? `add-ons: ${q.get('add')!.split(',').join(', ')}` : '',
        ].filter(Boolean).join(' · ')}`;
    setFormData((prev) => ({ ...prev, service: svcMap[svc] ?? prev.service, size, details }));
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Formspree handles the submission with the form fields
    await handleSubmit(e);
  };

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border border-[var(--line)] bg-gradient-to-br from-white to-white/80 p-12 text-center backdrop-blur-sm">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mb-4 text-6xl">✨</motion.div>
        <h2 className="text-3xl font-bold text-[var(--ink)]">Quote request locked in!</h2>
        <p className="mt-3 text-lg text-[var(--body)]">We'll email your flat price within one business hour. Check your inbox or spam folder just in case.</p>
        <p className="mt-4 text-sm text-[var(--body)]">Or call us right now: <a href={SITE.phoneHref} className="font-medium text-[var(--accent)] hover:underline">{SITE.phone}</a></p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-[var(--line)] bg-white/70 backdrop-blur-sm" method="POST">
      <div className="overflow-hidden">
        {/* Hidden fields for multi-step form */}
        <input type="hidden" name="service" value={formData.service} />

        {/* Progress bar */}
        <div className="border-b border-[var(--line)] px-8 pt-8 pb-6">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-widest text-[var(--body)]">Step {step} of 3</span>
            <span className="text-xs text-[var(--body)]">{Math.round((step / 3) * 100)}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-[var(--line)]">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--accent)] to-orange-600"
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Form content */}
        <div className="p-8 min-h-[400px]">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}>

            {step === 1 && (
              <div>
                <h3 className="text-xl font-semibold text-[var(--ink)]">What do you need?</h3>
                <p className="mt-1 mb-6 text-sm text-[var(--body)]">Pick the service that fits your home.</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {SERVICES.map((s) => (
                    <motion.button
                      key={s.name}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, service: s.name }))}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative rounded-xl border-2 p-4 text-left transition-all ${
                        formData.service === s.name
                          ? `border-[var(--accent)] bg-gradient-to-br ${s.color}`
                          : 'border-[var(--line)] hover:border-[var(--accent)] hover:bg-white/50'
                      }`}>
                      <div className="text-2xl mb-2">{s.emoji}</div>
                      <div className="font-medium text-[var(--ink)]">{s.name}</div>
                      {formData.service === s.name && (
                        <div className="absolute top-2 right-2 h-5 w-5 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-xs font-bold">
                          ✓
                        </div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="text-xl font-semibold text-[var(--ink)]">Tell us who you are.</h3>
                <p className="mt-1 mb-6 text-sm text-[var(--body)]">So we can send your quote and follow up.</p>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--ink)]">Your name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(232,93,47,0.1)]"
                    />
                    <ValidationError field="name" errors={state.errors} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[var(--ink)]">Phone number</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      autoComplete="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(232,93,47,0.1)]"
                    />
                    <ValidationError field="phone" errors={state.errors} />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="text-xl font-semibold text-[var(--ink)]">Almost there!</h3>
                <p className="mt-1 mb-6 text-sm text-[var(--body)]">One more thing to get your quote.</p>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="size" className="mb-2 block text-sm font-medium text-[var(--ink)]">Space size</label>
                    <select
                      id="size"
                      name="size"
                      value={formData.size}
                      onChange={(e) => setFormData(prev => ({ ...prev, size: e.target.value }))}
                      className="w-full rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(232,93,47,0.1)]">
                      {SIZE_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label} ({opt.value})</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="details" className="mb-2 flex items-center justify-between text-sm font-medium text-[var(--ink)]">
                      <span>Anything special?</span>
                      <span className="font-normal text-[var(--body)]">optional</span>
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={3}
                      placeholder="Pets, problem areas, preferred days, gate codes, etc."
                      value={formData.details}
                      onChange={(e) => setFormData(prev => ({ ...prev, details: e.target.value }))}
                      className="w-full rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(232,93,47,0.1)]"
                    />
                    <ValidationError field="details" errors={state.errors} />
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {state.errors && Object.keys(state.errors).length > 0 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-sm text-red-600">
              Something went wrong — please call <a href={SITE.phoneHref} className="font-medium hover:underline">{SITE.phone}</a> instead.
            </motion.p>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-[var(--line)] bg-white/30 px-8 py-6">
          <motion.button
            type="button"
            onClick={() => setStep(step - 1)}
            disabled={step === 1}
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm font-medium text-[var(--body)] transition-colors hover:text-[var(--ink)] disabled:opacity-30">
            ← Back
          </motion.button>

          <div className="hidden text-xs text-[var(--body)] sm:block">
            {step < 3 ? `Step ${step} of 3` : 'Ready to send'}
          </div>

          {step < 3 ? (
            <motion.button
              type="button"
              onClick={() => setStep(step + 1)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-[var(--accent)]/30">
              Next →
            </motion.button>
          ) : (
            <motion.button
              type="submit"
              disabled={state.submitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-[var(--accent)] px-8 py-2.5 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-[var(--accent)]/30 disabled:opacity-60">
              {state.submitting ? 'Sending…' : 'Get my quote'}
            </motion.button>
          )}
        </div>
      </div>

      {/* Trust message */}
      <div className="border-t border-[var(--line)] bg-white/50 px-8 py-4 text-center text-xs text-[var(--body)]">
        <p>✓ No spam • ✓ No obligation • ✓ Free quote in 1 hour</p>
      </div>
    </form>
  );
}
