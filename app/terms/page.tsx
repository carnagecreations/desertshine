import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms of Service | Clean Conviction',
  description: 'Terms of service for Clean Conviction cleaning services in Yuma, Arizona.',
};

export default function TermsPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Terms', url: '/terms' },
  ];

  return (
    <main className="relative z-10 bg-[var(--paper)]">
      <section className="pt-40 pb-12 px-6 md:px-16">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="mt-8 text-5xl font-bold text-[var(--ink)] mb-6">Terms of Service</h1>
          <p className="text-lg text-[var(--body)] mb-8">Last updated: July 2026</p>

          <div className="space-y-6 text-[var(--body)]">
            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">Acceptance of Terms</h2>
              <p>
                By booking or using Clean Conviction cleaning services, you agree to be bound by these Terms of Service. If you do not agree to any of these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">Service Description</h2>
              <p>
                Clean Conviction provides professional cleaning services including recurring home cleaning, deep cleaning, move-in/move-out cleaning, and commercial office cleaning in Yuma County, Arizona. We perform services on a flat-rate basis with transparent pricing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">Pricing and Payment</h2>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>All pricing is flat-rate and provided before service confirmation</li>
                <li>Payment is due upon completion of service unless other arrangements are made</li>
                <li>We accept standard payment methods as discussed during your quote</li>
                <li>Cancellations must be made 24 hours in advance for full refund eligibility</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">100% Re-Clean Guarantee</h2>
              <p className="mb-3">
                If you are not completely satisfied with your cleaning within 24 hours of service completion:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Contact us immediately with specific concerns</li>
                <li>We will return and re-clean affected areas at no charge</li>
                <li>No paperwork or forms required—your satisfaction is our priority</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">Access to Property</h2>
              <p>
                You grant Clean Conviction access to your property during scheduled service times. Clients may provide access codes, keys, or be present during service. We take reasonable precautions to protect your property.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">Liability Limitations</h2>
              <p>
                While we take care to protect your property, Clean Conviction is not responsible for damage caused by pre-existing conditions, client negligence, or circumstances beyond our control. Please disclose any fragile items before service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">Contact Us</h2>
              <p className="mb-3">If you have questions about these Terms of Service, please contact us at:</p>
              <ul className="space-y-1">
                <li>Email: hello@cleanconvictions.com</li>
                <li>Phone: (928) 298-5509</li>
                <li>Address: Yuma, Arizona</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
