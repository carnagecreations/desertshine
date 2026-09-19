import { SITE } from '@/lib/site';
import {
  PARTNER_TOOLKIT,
  PARTNER_GUARANTEES,
  PARTNER_WHY_US,
  PARTNER_COMPARISON,
} from '@/lib/partnerProgram';

/* Shared building blocks for /partners and /partners/<category>. Server
   components on purpose — this is persuasion copy and a form, not an app, so
   none of it needs to ship JavaScript to make its point. */

/** Short reassurance chips. Used directly under a hero CTA. */
export function PartnerTrustChips({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--body)]">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <span aria-hidden className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[var(--accent)]/15 text-[10px] font-bold text-[var(--accent)]">
            ✓
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/** "Here's the thing this actually fixes." Framed in the partner's words. */
export function PartnerProblem({ heading, body }: { heading: string; body: string }) {
  return (
    <section className="px-6 py-16 md:px-16">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl border border-[var(--line)] bg-[var(--paper-light)] p-8 md:p-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
            The situation
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--ink)] mb-4">{heading}</h2>
          <p className="text-lg leading-relaxed text-[var(--body)]">{body}</p>
        </div>
      </div>
    </section>
  );
}

/** The two-sided value grid — what their people get, what they get. */
export function PartnerValueSplit({
  clientWins,
  partnerWins,
  audienceNoun,
}: {
  clientWins: { icon: string; title: string; body: string }[];
  partnerWins: { icon: string; title: string; body: string }[];
  audienceNoun: string;
}) {
  const columns = [
    { label: `What your ${audienceNoun} get`, items: clientWins, tone: 'client' as const },
    { label: 'What you get', items: partnerWins, tone: 'partner' as const },
  ];

  return (
    <section className="px-6 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-3 text-center">
          It has to be worth it on both sides
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--body)]">
          A referral program only works if the person you hand the card to is glad you did. So this
          is built to pay off in both directions.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {columns.map((col) => (
            <div
              key={col.label}
              className={
                col.tone === 'partner'
                  ? 'rounded-3xl border-2 border-[var(--accent)]/40 bg-[var(--accent)]/[0.04] p-7 md:p-8'
                  : 'rounded-3xl border border-[var(--line)] bg-white p-7 md:p-8'
              }>
              <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-[var(--ink)]">
                {col.label}
              </h3>
              <ul className="space-y-6">
                {col.items.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span aria-hidden className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--accent)]/10 text-lg">
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-semibold text-[var(--ink)]">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--body)]">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Day-one kit. Makes an abstract "program" into a stack of physical things. */
export function PartnerToolkit() {
  return (
    <section className="px-6 py-16 md:px-16 md:py-20 bg-[var(--paper-light)]">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-3 text-center">
          What lands in your hands on day one
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--body)]">
          Not a login and a PDF of terms. Actual things you can put on a counter and hand to people.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNER_TOOLKIT.map((item) => (
            <div
              key={item.title}
              className="card-lift rounded-2xl border border-[var(--line)] bg-white p-6 hover:border-[var(--accent)]">
              <div aria-hidden className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-[var(--accent)]/10 text-xl">
                {item.icon}
              </div>
              <p className="font-semibold text-[var(--ink)]">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--body)]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Reward ladder with a connecting rail, so the tiers read as progress. */
export function PartnerTierLadder({
  tiers,
  unitLabel = 'referral',
}: {
  tiers: { count: number; reward: string }[];
  unitLabel?: string;
}) {
  return (
    <section className="px-6 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-3 text-center">
          What you earn
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-[var(--body)]">
          Rewards stack as referrals add up. Nothing resets, nothing expires, and you keep every tier
          you pass.
        </p>

        <div className="relative">
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[22px] hidden h-px bg-gradient-to-r from-[var(--accent)]/20 via-[var(--accent)]/50 to-[var(--accent)] md:block"
          />
          <ol className="grid gap-6 md:grid-cols-3">
            {tiers.map((tier, i) => (
              // The <li> is a stretched grid item, so the card must grow with
              // flex — `h-full` here would resolve 100% against the whole cell
              // (badge included) and overflow the section by the badge height.
              <li key={tier.count} className="relative flex flex-col">
                <div className="mb-5 flex shrink-0 justify-center">
                  <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-[var(--accent)] bg-[var(--paper)] text-base font-bold text-[var(--accent)]">
                    {tier.count}
                  </span>
                </div>
                <div
                  className={
                    'card-lift flex flex-1 flex-col justify-center rounded-2xl border bg-white p-6 text-center ' +
                    (i === tiers.length - 1
                      ? 'border-[var(--accent)] shadow-[0_8px_30px_-12px_rgba(175,58,19,0.35)]'
                      : 'border-[var(--line)] hover:border-[var(--accent)]')
                  }>
                  {i === tiers.length - 1 && (
                    <p className="mx-auto mb-3 w-fit rounded-full bg-[var(--accent)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                      Best tier
                    </p>
                  )}
                  <p className="mb-2 text-xs uppercase tracking-widest text-[var(--body)]/70">
                    {tier.count} {unitLabel}
                    {tier.count === 1 ? '' : 's'}
                  </p>
                  <p className="font-medium leading-snug text-[var(--ink)]">{tier.reward}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-[var(--body)]">
          Past the top tier? Everything keeps going — we just start a conversation about what
          actually helps your business instead of handing you another free clean.
        </p>
      </div>
    </section>
  );
}

/** The honest side-by-side against a typical arrangement. */
export function PartnerComparison() {
  return (
    <section className="px-6 py-16 md:px-16 md:py-20 bg-[var(--paper-light)]">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-3 text-center">
          How this differs from the usual arrangement
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--body)]">
          Most of what makes a referral program annoying is paperwork and portals. We took those out.
        </p>

        <div className="overflow-hidden rounded-3xl border border-[var(--line)] bg-white">
          <div className="hidden grid-cols-[1.1fr_1fr_1fr] gap-px bg-[var(--line)] md:grid">
            <div className="bg-white p-4" />
            <div className="bg-white p-4 text-center text-sm font-semibold uppercase tracking-wide text-[var(--body)]">
              Typical setup
            </div>
            <div className="bg-[var(--accent)]/[0.06] p-4 text-center text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
              {SITE.name}
            </div>
          </div>

          <dl className="divide-y divide-[var(--line)] md:divide-y-0">
            {PARTNER_COMPARISON.map((row) => (
              <div key={row.point} className="md:grid md:grid-cols-[1.1fr_1fr_1fr] md:gap-px md:bg-[var(--line)]">
                <dt className="bg-white px-5 pt-5 text-sm font-semibold text-[var(--ink)] md:px-4 md:py-5 md:pt-5">
                  {row.point}
                </dt>
                <dd className="bg-white px-5 pb-1 pt-2 text-sm text-[var(--body)] md:px-4 md:py-5 md:pb-5 md:pt-5 md:text-center">
                  <span className="mr-2 font-semibold uppercase tracking-wide text-[var(--body)]/60 md:hidden">
                    Typical:
                  </span>
                  {row.typical}
                </dd>
                <dd className="bg-white px-5 pb-5 pt-1 text-sm font-medium text-[var(--ink)] md:bg-[var(--accent)]/[0.06] md:px-4 md:py-5 md:text-center">
                  <span className="mr-2 font-semibold uppercase tracking-wide text-[var(--accent)] md:hidden">
                    Us:
                  </span>
                  {row.ours}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/** Why a partner should trust us with their reputation. */
export function PartnerWhyUs() {
  return (
    <section className="px-6 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-3 text-center">
          You&apos;re lending us your reputation
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--body)]">
          We know that&apos;s the real risk in recommending anyone. Here&apos;s what backs it up.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNER_WHY_US.map((s) => (
            <div key={s.label} className="card-lift rounded-2xl border border-[var(--line)] bg-white p-6 hover:border-[var(--accent)]">
              <p className="text-2xl font-bold text-[var(--accent)]">{s.metric}</p>
              <p className="mt-1 font-semibold text-[var(--ink)]">{s.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--body)]">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-[var(--body)]">
          We launched recently and we&apos;re not going to fake reviews to look older than we are.
          What we&apos;ll do instead is let you test us on one job before you put your name on
          anything — <a href={SITE.phoneHref} className="font-medium text-[var(--accent)] hover:underline">call {SITE.phone}</a> and set it up.
        </p>
      </div>
    </section>
  );
}

/** Risk reversal. The last wall between interest and signing up. */
export function PartnerGuarantees() {
  return (
    <section className="px-6 py-16 md:px-16 md:py-20 bg-[var(--paper-dark)]">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
          The catch, in full
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-white/70">
          There isn&apos;t one. Here is every term of the program, written out.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNER_GUARANTEES.map((g) => (
            <div key={g.title} className="rounded-2xl border border-white/15 bg-white/[0.06] p-6">
              <p className="flex items-center gap-2 font-semibold text-white">
                <span aria-hidden className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--accent)] text-[11px] font-bold text-white">
                  ✓
                </span>
                {g.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{g.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** FAQ as native disclosure elements — keyboard-accessible, zero JS. */
export function PartnerFaq({ items, heading = 'Questions' }: { items: { q: string; a: string }[]; heading?: string }) {
  return (
    <section className="px-6 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-10 text-center">{heading}</h2>
        <div className="space-y-4">
          {items.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-[var(--line)] bg-white transition-colors open:border-[var(--accent)]/50">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-semibold text-[var(--ink)] [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[var(--line)] text-lg leading-none text-[var(--accent)] transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="px-6 pb-6 leading-relaxed text-[var(--body)]">{item.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-[var(--body)]">
          Something not answered here?{' '}
          <a href={SITE.smsHref} className="font-medium text-[var(--accent)] hover:underline">Text us</a>{' '}
          — a real answer beats a brochure.
        </p>
      </div>
    </section>
  );
}
