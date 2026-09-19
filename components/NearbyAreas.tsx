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
  const here = NEIGHBORHOODS.find((n) => n.slug === slug);
  const name = here?.name ?? city;

  // Rank by how much like *this* place the other one is: same kind of
  // community first, then same city. Sorting on name alone put seven RV
  // parks under a residential neighborhood simply because their names
  // start with A.
  //
  // Within a tier, rotate the window by this page's own position instead of
  // always taking the alphabetical first eight — otherwise all 69 pages
  // link to the same handful of areas and the rest of the cluster receives
  // nothing. Rotation is derived from a fixed index, so the export is still
  // byte-identical on every build.
  const index = Math.max(0, NEIGHBORHOODS.findIndex((n) => n.slug === slug));
  const tierOf = (n: (typeof NEIGHBORHOODS)[number]) =>
    (here && n.type === here.type ? 2 : 0) + (n.city === city ? 1 : 0);

  const others = NEIGHBORHOODS.filter((n) => n.slug !== slug);
  const nearby = [2, 3, 1, 0]
    .flatMap((tier) => {
      const group = others
        .filter((n) => tierOf(n) === tier)
        .sort((a, b) => a.name.localeCompare(b.name));
      if (!group.length) return group;
      const start = index % group.length;
      return [...group.slice(start), ...group.slice(0, start)];
    })
    .slice(0, 8);

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
