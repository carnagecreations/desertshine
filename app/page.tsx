import ScrollZoomHero from '@/components/sections/ScrollZoomHero';
import VelocityMarquee from '@/components/sections/VelocityMarquee';
import ConstellationHero from '@/components/sections/ConstellationHero';
import StatCounters from '@/components/sections/StatCounters';
import BeforeAfter from '@/components/sections/BeforeAfter';
import ServiceShowcase from '@/components/sections/ServiceShowcase';
import ManifestoFill from '@/components/sections/ManifestoFill';
import ParallaxScene from '@/components/sections/ParallaxScene';
import ProgressTimeline from '@/components/sections/ProgressTimeline';
import SpotlightGrid from '@/components/sections/SpotlightGrid';
import DragCarousel from '@/components/sections/DragCarousel';
import TiltShowcase from '@/components/sections/TiltShowcase';
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

        {/* Enhanced services with immersive sections */}
        <ServiceShowcase services={[
          {
            id: 'recurring',
            name: 'Recurring Home Cleaning',
            price: 'from $129/visit',
            blurb: 'Weekly, bi-weekly, or monthly. The same cleaner every visit, working the same room-by-room checklist so your home stays consistently done.',
            image: '/images/service-recurring.webp',
            includes: ['Kitchens: counters, sinks, exterior appliances, floors', 'Bathrooms: showers, tubs, toilets, mirrors, floors', 'All rooms: dusting, surfaces, floors, trash, tidying', 'Same cleaner, same checklist, every visit'],
          },
          {
            id: 'deep',
            name: 'Deep Cleaning',
            price: 'from $249',
            blurb: 'The seasonal reset. Everything in a standard clean, plus the places dust hides in a desert town baseboards, blinds, vents, grout, and inside the appliances.',
            image: '/images/service-deep.webp',
            includes: ['Baseboards, door frames, and light switches', 'Blinds, ceiling fans, and vents', 'Inside oven and refrigerator', 'Tile grout and shower glass detail'],
          },
          {
            id: 'move',
            name: 'Move-In / Move-Out',
            price: 'from $299',
            blurb: 'Built around landlord inspection checklists. For renters chasing a deposit, sellers prepping a listing, or landlords turning a unit fast.',
            image: '/images/service-move.webp',
            includes: ['Inside every cabinet, drawer, and closet', 'All appliances inside and out', 'Windows, tracks, and sills', 'Garage sweep-out on request'],
          },
          {
            id: 'office',
            name: 'Office & Commercial',
            price: 'custom quote',
            blurb: 'After-hours janitorial for offices, clinics, and storefronts. Keyed access, supply management, and a walk-through report after every service.',
            image: '/images/service-office.webp',
            includes: ['Nightly, weekly, or custom schedules', 'Restrooms, breakrooms, and floors', 'Trash, recycling, and consumables restock', 'Insured and background-checked staff'],
          },
        ]} />

        {/* Manifesto section with ink fill */}
        <ManifestoFill text="Most cleaning companies rush through. We *tended* your home like it matters, because it *does*." />

        {/* Parallax interlude */}
        <ParallaxScene word="SPOTLESS" />

        {/* Progress timeline */}
        <ProgressTimeline />

        {/* Spotlight grid for features */}
        <SpotlightGrid />

        {/* Testimonials with 3D tilt */}
        <section className="px-6 py-28 md:px-16">
          <h2 className="mb-16 text-center text-4xl md:text-5xl text-[var(--ink)]">What our clients say</h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <TiltShowcase
              src="/images/testimonial-1.webp"
              badge="Deep Clean"
              caption="Before looked impossible. They made it spotless."
            />
            <TiltShowcase
              src="/images/testimonial-2.webp"
              badge="Attention to Detail"
              caption="Every corner perfect. Worth every penny."
            />
          </div>
        </section>

        {/* Call to action */}
        <GiantCTA />
      </main>
      <RevealFooter />
    </>
  );
}
