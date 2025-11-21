import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';
import { generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Privacy Policy | Intelligent Design',
  description: 'Privacy Policy for Intelligent Design Air Conditioning, Plumbing, Solar & Electric. Learn how we protect and handle your personal information in Tucson, AZ.',
  canonicalUrl: '/privacy-policy',
  keywords: ['privacy policy', 'data protection', 'tucson hvac privacy', 'customer information security'],
});

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Privacy Policy', path: '/privacy-policy' }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <nav className="text-sm text-muted-foreground mb-6" data-testid="breadcrumb-nav">
            <a href="/" className="hover:text-primary" data-testid="link-breadcrumb-home">Home</a>
            <span className="mx-2">/</span>
            <span className="text-foreground">Privacy Policy</span>
          </nav>

          <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-page-title">
            Privacy Policy
          </h1>
          
          <p className="text-muted-foreground mb-8">
            Last Updated: November 11, 2025
          </p>

          <div className="prose prose-lg max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Commitment to Your Privacy</h2>
              <p className="mb-4">
                At Intelligent Design Air Conditioning, Plumbing, Solar & Electric, we are committed to protecting your privacy and ensuring the security of your personal information. As a family and veteran-owned company serving Tucson and surrounding areas, we value the trust our customers place in us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Contact Information:</strong> Name, address, phone number, and email address</li>
                <li><strong>Service Information:</strong> Details about your HVAC, plumbing, electrical, solar, or roofing needs</li>
                <li><strong>Property Information:</strong> Address and details necessary to provide accurate service estimates</li>
                <li><strong>Payment Information:</strong> Billing address and payment details (processed securely through ServiceTitan)</li>
                <li><strong>Communication Records:</strong> Records of your communications with our team</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Schedule and provide HVAC, plumbing, electrical, solar, and roofing services</li>
                <li>Send service reminders and maintenance notifications</li>
                <li>Process payments and manage billing</li>
                <li>Respond to your questions and service requests</li>
                <li>Improve our services and customer experience</li>
                <li>Send promotional offers and special deals (you may opt out at any time)</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
              <p className="mb-4">
                We do not sell, rent, or trade your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Service Providers:</strong> Third-party vendors who help us deliver services (e.g., ServiceTitan for scheduling and payments)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="mb-4">
                We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse. This includes secure data transmission, encrypted payment processing, and restricted access to personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Access the personal information we hold about you</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent for data processing where applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
              <p className="mb-4">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and deliver personalized content. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
              <p className="mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <p className="mb-4">
                Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
              </p>
              <div className="bg-card p-6 rounded-md border space-y-2">
                <p><strong>Intelligent Design Air Conditioning, Plumbing, Solar & Electric</strong></p>
                <p>Phone: <a href="tel:520-333-2665" className="text-primary hover:underline" data-testid="link-phone">520-333-2665</a></p>
                <p>Email: <a href="mailto:info@idesignac.com" className="text-primary hover:underline" data-testid="link-email">info@idesignac.com</a></p>
                <p>Address: Tucson, AZ 85701</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
