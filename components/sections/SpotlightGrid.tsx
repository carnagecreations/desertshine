'use client';

const FEATURES = [                                        // CUSTOMIZE
  { title: 'Fast by default', body: 'Sub-second loads on real phones, not lab tests.' },
  { title: 'Secure', body: 'Hardened hosting, automatic updates, daily backups.' },
  { title: 'Fully managed', body: 'You run the business. We run the website.' },
  { title: 'Built to grow', body: 'Add pages, products, or bookings without a rebuild.' },
  { title: 'Findable', body: 'Technical SEO baked into every page from day one.' },
  { title: 'Yours, always', body: 'Your domain, your content, no lock-in. Ever.' },
];

export default function SpotlightGrid() {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    for (const card of e.currentTarget.querySelectorAll<HTMLElement>('[data-spot]')) {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    }
  };
  return (
    <section className="bg-[var(--paper-dark)] px-6 py-28 md:px-16">
      <h2 className="mb-14 max-w-xl text-4xl text-white md:text-5xl">Everything a serious website needs.</h2>  {/* CUSTOMIZE */}
      <div onMouseMove={onMove} className="grid gap-3 md:grid-cols-3">
        {FEATURES.map((f) => (
          <div key={f.title} data-spot className="group relative rounded-xl p-px"
            style={{ background: 'radial-gradient(280px circle at var(--mx) var(--my), rgba(255,255,255,0.35), rgba(255,255,255,0.06) 55%)' }}>
            <div className="relative h-full overflow-hidden rounded-[11px] bg-[#141310] p-8">
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: 'radial-gradient(360px circle at var(--mx) var(--my), rgba(255,255,255,0.06), transparent 60%)' }} />
              <h3 className="text-lg text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{f.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
