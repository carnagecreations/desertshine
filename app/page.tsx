import ScrollZoomHero from '@/components/sections/ScrollZoomHero';
import VelocityMarquee from '@/components/sections/VelocityMarquee';
import StatCounters from '@/components/sections/StatCounters';
import BeforeAfter from '@/components/sections/BeforeAfter';
import ExpandPanels from '@/components/sections/ExpandPanels';
import ProgressTimeline from '@/components/sections/ProgressTimeline';
import TestimonialTheater from '@/components/sections/TestimonialTheater';
import DarkInterlude from '@/components/sections/DarkInterlude';
import GiantCTA from '@/components/sections/GiantCTA';
import RevealFooter from '@/components/sections/RevealFooter';

export default function Home() {
  return (
    <>
      <main className="relative z-10 bg-[var(--paper)]">
        <ScrollZoomHero />
        <VelocityMarquee />
        <StatCounters />
        <BeforeAfter />
        <ExpandPanels />
        <ProgressTimeline />
        <TestimonialTheater />
        <DarkInterlude />
        <GiantCTA />
      </main>
      <RevealFooter />
    </>
  );
}
