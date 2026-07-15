import { HOME_FAQS, faqSchema } from '@/lib/schema';

// Visible FAQ section + matching FAQPage JSON-LD. Rendered on the homepage so the
// structured data has on-page content behind it (Google guideline compliance) and
// answers are lift-able as featured snippets / AI answers.
export default function FaqSection({
  heading = 'Questions, answered.',
  faqs = HOME_FAQS,
}: {
  heading?: string;
  faqs?: { q: string; a: string }[];
}) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h2 className="mb-10 text-4xl md:text-5xl">{heading}</h2>
      <div className="divide-y divide-[var(--line)]">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg text-[var(--ink)]">
              {f.q}
              <span className="text-[var(--accent)] transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-[var(--body)]">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
