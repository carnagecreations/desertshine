import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="grid min-h-[100svh] place-items-center bg-[var(--paper)] px-6 text-center">
      <div>
        <p className="text-xs tracking-[0.3em] text-[var(--accent)] uppercase">404</p>
        <h1 className="mt-4 text-4xl md:text-6xl">This page got swept away.</h1>
        <p className="mt-4 text-[var(--body)]">The page you’re looking for doesn’t exist.</p>
        <Link href="/" className="mt-8 inline-block rounded-full bg-[var(--accent)] px-8 py-4 font-medium text-white">
          Back home
        </Link>
      </div>
    </main>
  );
}
