import Link from 'next/link';

// Visible breadcrumb trail. Pair with breadcrumbSchema() so the on-page trail and
// structured data match. The last item is the current page (not linked).
export default function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="px-6 pt-28 md:px-16">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--body)]">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-2">
              {item.href && !last ? (
                <Link href={item.href} className="hover:text-[var(--accent)] hover:underline underline-offset-4">
                  {item.name}
                </Link>
              ) : (
                <span aria-current={last ? 'page' : undefined} className={last ? 'text-[var(--ink)]' : ''}>
                  {item.name}
                </span>
              )}
              {!last && <span className="text-[var(--line)]">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
