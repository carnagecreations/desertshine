import Link from 'next/link';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';
import { SERVICES } from '@/lib/services';

// Neighborhood pages were internal-link dead ends: the only outbound link was
// the shared CTA to /contact. They're the pages most likely to rank for
// "<service> in <neighborhood>", so every one of them passing nothing to the
// service pages or to its siblings wasted the whole cluster.
//
// Same-city siblings come first so the links stay locally relevant, and the
// list is deterministic (sorted, sliced) rather than random — a static export
// must produce the same HTML on every build.
export default function NearbyAreas({ slug, city }: { slug: string; city: string }) {
  const siblings = NEIGHBORHOODS.filter((n) => n.slug !== slug);
  const sameCity = siblings.filter((n) => n.city === city).sort((a, b) => a.name.localeCompare(b.name));
  const elsewhere = siblings.filter((n) => n.city !== city).sort((a, b) => a.name.localeCompare(b.name));
  const nearby = [...sameCity, ...elsewhere].slice(0, 8);
  const here = NEIGHBORHOODS.find((n) => n.slug === slug);
  const name = here?.name ?? city;

  return (
    <section className="px-6 py-20 md:px-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-3 text-3xl text-[var(--ink)] md:text-4xl">What we clean in {name}</h2>
        <p className="mb-8 text-[var(--body)]">
          Every service runs at the same flat rate here as everywhere else in Yuma County — there
          is no travel fee to {name}.
        </p>
        <ul className="mb-14 grid gap-3 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="card-lift flex items-center justify-between gap-4 rounded-xl border border-[var(--line)] bg-white px-5 py-4 text-[var(--ink)] hover:border-[var(--accent)]">
                <span className="font-medium">{s.name}</span>
                <span aria-hidden className="text-[var(--accent)]">→</span>
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="mb-3 text-3xl text-[var(--ink)] md:text-4xl">Nearby areas we serve</h2>
        <p className="mb-6 text-[var(--body)]">
          We cover all of Yuma County at the same rates.
        </p>
        <ul className="flex flex-wrap gap-2.5">
          {nearby.map((n) => (
            <li key={n.slug}>
              <Link
                href={`/neighborhoods/${n.slug}`}
                className="inline-flex rounded-full border border-[var(--line)] px-4 py-2 text-sm text-[var(--body)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">
                {n.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/neighborhoods"
              className="inline-flex rounded-full border border-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent)] transition-colors hover:bg-[var(--accent)]/10">
              All areas →
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
