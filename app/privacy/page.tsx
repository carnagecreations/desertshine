import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy | Clean Convictions',
  description: 'Privacy policy for Clean Convictions cleaning services in Yuma, Arizona.',
  alternates: { canonical: `${SITE.url}/privacy` },
};

export default function PrivacyPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Privacy', url: '/privacy' },
  ];

  return (
    <main className="relative z-10 bg-[var(--paper)]">
      <section className="pt-40 pb-12 px-6 md:px-16">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="mt-8 text-5xl font-bold text-[var(--ink)] mb-6">Privacy Policy</h1>
          <p className="text-lg text-[var(--body)] mb-8">Last updated: July 2026</p>

          <div className="space-y-6 text-[var(--body)]">
            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">Introduction</h2>
              <p>
                Clean Convictions ("we," "us," or "our") operates the cleanconvictions.com website and related services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our cleaning services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">Information We Collect</h2>
              <p className="mb-3">We collect information you voluntarily provide when you:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Request a free quote or booking</li>
                <li>Contact us via phone, email, or form submission</li>
                <li>Sign up for our newsletter or promotions</li>
                <li>Use our website and services</li>
              </ul>
              <p>
                This information may include your name, email address, phone number, home address, and service preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Process and deliver your cleaning service requests</li>
                <li>Communicate with you about your service</li>
                <li>Send you promotional materials (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">Data Security</h2>
              <p>
                We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">Contact Us</h2>
              <p className="mb-3">If you have questions about this Privacy Policy, please contact us at:</p>
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
