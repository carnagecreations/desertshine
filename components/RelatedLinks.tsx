import Link from 'next/link';

// Several content pages (the seasonal guides, /faq, /checklist) were near
// dead ends — their only outbound links were the conversion CTAs, so a
// visitor who wasn't ready to book had nowhere to go and the pages passed no
// link equity to the service pages they support.
//
// Links are hand-picked per page rather than generated, so each one is
// genuinely relevant instead of a boilerplate link farm.
export default function RelatedLinks({
  heading = 'Keep reading',
  intro,
  links,
}: {
  heading?: string;
  intro?: string;
  links: { href: string; label: string; blurb: string }[];
}) {
  return (
    <section className="px-6 py-16 md:px-16 md:py-20 bg-[var(--paper-light)]">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-3 text-3xl text-[var(--ink)] md:text-4xl">{heading}</h2>
        {intro && <p className="mb-8 max-w-2xl text-[var(--body)]">{intro}</p>}
        <ul className="grid gap-4 sm:grid-cols-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="card-lift flex h-full flex-col rounded-2xl border border-[var(--line)] bg-white p-6 hover:border-[var(--accent)]">
                <span className="font-semibold text-[var(--ink)]">{l.label}</span>
                <span className="mt-1.5 text-sm leading-relaxed text-[var(--body)]">{l.blurb}</span>
                <span aria-hidden className="mt-3 text-sm font-medium text-[var(--accent)]">Read more →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
