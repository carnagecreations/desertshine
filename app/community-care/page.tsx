import type { Metadata } from 'next';
import CommunityCareForm from '@/components/CommunityCareForm';
import RevealFooter from '@/components/sections/RevealFooter';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Community Care — A Free, Confidential Clean',
  description: 'Once a month we quietly clean one home, free, for a Yuma-area neighbor going through a hard stretch. Completely confidential — no photos, no names, no strings.',
};

export default function CommunityCarePage() {
  return (
    <>
      <main className="relative z-10 bg-[var(--paper)]">
        {/* Hero */}
        <section className="pt-40 pb-10 px-6 md:px-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-sm font-medium tracking-[0.2em] text-[var(--accent)] uppercase">Community Care</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--ink)] mb-6 leading-tight">
              Life gets heavy. One clean is on us.
            </h1>
            <p className="text-lg text-[var(--body)] leading-relaxed">
              Once a month, we clean one home in the Yuma area completely free, for a neighbor going through a
              hard stretch. Illness, a new baby, a loss, recovery, a rough season — you don&apos;t have to
              explain, and you don&apos;t have to prove anything.
            </p>
          </div>
        </section>

        {/* The promise — confidentiality is the whole point */}
        <section className="px-6 pb-12 md:px-16">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-[var(--line)] bg-white p-6 md:p-8">
              <h2 className="text-xl font-semibold text-[var(--ink)] mb-5">This stays between us. Always.</h2>
              <ul className="space-y-4 text-[var(--body)]">
                <li className="flex gap-3">
                  <span className="shrink-0 text-xl">🔒</span>
                  <span><span className="font-medium text-[var(--ink)]">We never show anyone.</span> No before/after photos, no names, no social media posts. Not now, not ever. We don&apos;t use this for marketing — that would defeat the point.</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 text-xl">🤍</span>
                  <span><span className="font-medium text-[var(--ink)]">No judgment, no hoops.</span> We don&apos;t ask for proof, income, or a hard-luck story. If you&apos;re reaching out, that&apos;s enough for us.</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 text-xl">🎁</span>
                  <span><span className="font-medium text-[var(--ink)]">Truly free.</span> No catch, no upsell, no obligation to ever book us. Just a clean home for a little while.</span>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 text-xl">👐</span>
                  <span><span className="font-medium text-[var(--ink)]">You can ask for someone else.</span> Worried about a friend, parent, or neighbor who&apos;d never ask themselves? You can quietly reach out on their behalf.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="px-6 pb-20 md:px-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-[var(--ink)] mb-2">Reach out — quietly.</h2>
            <p className="text-[var(--body)] mb-6">
              A first name and one way to reach you is all we need. Everything else is optional.
            </p>
            <CommunityCareForm />
          </div>
        </section>

        {/* Gentle close */}
        <section className="px-6 py-16 md:px-16 bg-[var(--paper-light)]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-lg text-[var(--body)] leading-relaxed">
              Asking for help can be the hardest part. If a form feels like too much, just call or text us —
              a real person answers.
            </p>
            <a href={SITE.phoneHref} className="mt-4 inline-block text-xl font-medium text-[var(--accent)] hover:underline">
              {SITE.phone}
            </a>
          </div>
        </section>
      </main>
      <RevealFooter />
    </>
  );
}
