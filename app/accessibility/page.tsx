import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Accessibility statement for the Clean Convictions website.',
  alternates: { canonical: `${SITE.url}/accessibility` },
};

export default function AccessibilityPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Accessibility', url: '/accessibility' },
  ];

  return (
    <main className="relative z-10 bg-[var(--paper)]">
      <section className="pt-40 pb-12 px-6 md:px-16">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="mt-8 text-5xl font-bold text-[var(--ink)] mb-6">Accessibility Statement</h1>
          <p className="text-lg text-[var(--body)] mb-8">Last updated: September 2026</p>

          <div className="space-y-6 text-[var(--body)]">
            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">Our Commitment</h2>
              <p>
                Clean Convictions is committed to making cleanconvictions.com usable by everyone, including people who use assistive technology such as screen readers, voice control, or keyboard-only navigation. We are working toward conformance with the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, as a general standard of good practice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">What We&apos;re Doing</h2>
              <p className="mb-3">Ongoing efforts on this site include:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Semantic HTML structure and heading order intended to work with screen readers</li>
                <li>Descriptive text alternatives for meaningful images</li>
                <li>Sufficient color contrast in our text and interface elements</li>
                <li>Forms with associated labels and clear error messaging</li>
                <li>Keyboard-navigable menus, forms, and interactive elements</li>
                <li>Responsive layout that works at different zoom levels and screen sizes</li>
              </ul>
              <p>
                Accessibility is an ongoing process, not a one-time fix — as we add or change pages, we review them against these same standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">Known Limitations</h2>
              <p>
                Despite our efforts, no website is perfectly accessible to everyone, all the time. Some pages built with third-party embeds, older content, or interactive widgets may not yet fully meet this standard. If you encounter a barrier, we want to know about it — see below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">Alternative Ways to Reach Us</h2>
              <p>
                If any part of this website is difficult for you to use, you don&apos;t have to rely on it — you can always request a quote, ask a question, or book a cleaning by phone, text, or email instead:
              </p>
              <ul className="space-y-1 mt-3">
                <li>Call or text: {SITE.phone}</li>
                <li>Email: {SITE.email}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">Feedback</h2>
              <p>
                If you experience any difficulty accessing content or using any feature on this website, please let us know — including the page, what happened, and the browser or assistive technology you were using. We take accessibility feedback seriously and will work to address reported issues.
              </p>
              <ul className="space-y-1 mt-3">
                <li>Email: {SITE.email}</li>
                <li>Phone: {SITE.phone}</li>
                <li>Address: {SITE.address}</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
