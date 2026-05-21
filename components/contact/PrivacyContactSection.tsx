'use client';

import { ObfuscatedEmail } from '@/components/ui/obfuscated-email';

export default function PrivacyContactSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
      </p>
      <div className="bg-card p-6 rounded-md border space-y-2">
        <p><strong>Intelligent Design Air Conditioning, Plumbing, Solar, & Electric</strong></p>
        <p>Phone: <a href="tel:+15203332665" className="text-primary hover:underline" data-testid="link-phone">520-333-2665</a></p>
        <p className="flex items-center gap-1">
          Email: <ObfuscatedEmail className="text-primary hover:underline p-0" data-testid="link-email" />
        </p>
        <p>Address: Tucson, AZ 85701</p>
      </div>
    </section>
  );
}
