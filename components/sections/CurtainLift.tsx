'use client';

export default function CurtainLift({ behind, front }: { behind: React.ReactNode; front: React.ReactNode }) {
  return (
    <>
      <div className="sticky top-0 h-[100svh] overflow-hidden">{behind}</div>
      <div className="relative z-10 rounded-t-[2.5rem] bg-[var(--paper)] shadow-[0_-40px_80px_rgba(0,0,0,0.3)]">
        {front}
      </div>
    </>
  );
}
// Usage: <CurtainLift behind={<VideoHero />} front={<ServicesSection />} />
// Chain: give each successive `front` a higher z-index (z-10, z-20, ...) to stack scenes.
