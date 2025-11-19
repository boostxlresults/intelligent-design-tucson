import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Intelligent Design Tucson';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Privacy Policy for Intelligent Design Air Conditioning, Plumbing, Solar, & Electric. Learn how we collect, use, and protect your personal information.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-background">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <h1 className="text-4xl font-bold mb-6" data-testid="text-privacy-policy-title">
            Privacy Policy
          </h1>
          
          <p className="text-muted-foreground mb-8">
            Last Updated: November 5, 2025
          </p>

          <div className="space-y-6">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle>Introduction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Intelligent Design Air Conditioning, Plumbing, Solar, & Electric ("we," "our," or "us") respects your privacy 
                  and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, 
                  disclose, and safeguard your information when you visit our website www.idesignac.com.
                </p>
                <p>
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                  please do not access the site.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card>
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold">Personal Information</h3>
                <p>
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Schedule a service appointment</li>
                  <li>Request a quote or consultation</li>
                  <li>Contact us via phone, email, or contact form</li>
                  <li>Sign up for our newsletter or promotional emails</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p>This information may include:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Mailing address</li>
                  <li>Service address (if different)</li>
                  <li>Payment information (processed securely through third-party payment processors)</li>
                </ul>

                <h3 className="font-semibold mt-6">Automatically Collected Information</h3>
                <p>
                  When you visit our website, we may automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Referring website</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Device type and screen resolution</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card>
              <CardHeader>
                <CardTitle>Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold">What Are Cookies?</h3>
                <p>
                  Cookies are small text files placed on your device when you visit our website. They help us recognize 
                  your browser and capture certain information.
                </p>

                <h3 className="font-semibold mt-6">Types of Cookies We Use</h3>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Essential Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Required for the website to function properly. These cookies enable basic functions like page 
                      navigation and access to secure areas. The website cannot function properly without these cookies.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium">Analytics Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Help us understand how visitors interact with our website by collecting and reporting information 
                      anonymously. We use Google Analytics to track website traffic and user behavior.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium">Marketing Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Used to track visitors across websites and display ads that are relevant and engaging. These cookies 
                      are used by Google Tag Manager and may be shared with third-party advertisers.
                    </p>
                  </div>
                </div>

                <h3 className="font-semibold mt-6">Managing Your Cookie Preferences</h3>
                <p>
                  You can manage your cookie preferences at any time by clicking the "Cookie Preferences" link in the 
                  footer of our website. You can choose to accept all cookies or only essential cookies.
                </p>
                <p>
                  Most web browsers automatically accept cookies, but you can usually modify your browser settings to 
                  decline cookies if you prefer. However, this may prevent you from taking full advantage of the website.
                </p>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card>
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, operate, and maintain our website and services</li>
                  <li>Schedule and manage service appointments</li>
                  <li>Process payments and send invoices</li>
                  <li>Communicate with you about services, appointments, and promotions</li>
                  <li>Respond to your inquiries and customer service requests</li>
                  <li>Send you marketing and promotional communications (with your consent)</li>
                  <li>Improve our website, products, and services</li>
                  <li>Analyze website usage and trends</li>
                  <li>Prevent fraudulent transactions and protect against security threats</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            {/* Third-Party Services */}
            <Card>
              <CardHeader>
                <CardTitle>Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We may use third-party services that collect, monitor, and analyze data. These include:</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Google Analytics</h4>
                    <p className="text-sm text-muted-foreground">
                      Tracks website traffic and user behavior. Google Analytics may use cookies and similar tracking 
                      technologies. You can opt out of Google Analytics by visiting{' '}
                      <a 
                        href="https://tools.google.com/dlpage/gaoptout" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline hover:text-foreground"
                      >
                        https://tools.google.com/dlpage/gaoptout
                      </a>
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium">Google Tag Manager</h4>
                    <p className="text-sm text-muted-foreground">
                      Manages website tags and tracking codes for analytics and marketing purposes.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium">ServiceTitan</h4>
                    <p className="text-sm text-muted-foreground">
                      Scheduling and customer relationship management platform used to manage service appointments.
                    </p>
                  </div>
                </div>

                <p className="mt-4">
                  These third-party services have their own privacy policies. We encourage you to review their policies 
                  to understand how they handle your data.
                </p>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                  the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle>Your Privacy Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Depending on your location, you may have the following rights:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Opt-out:</strong> Opt out of marketing communications at any time</li>
                  <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                  <li><strong>Object:</strong> Object to our processing of your personal information</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at{' '}
                  <a href="mailto:info@idesignac.com" className="underline hover:text-foreground">
                    info@idesignac.com
                  </a>{' '}
                  or call{' '}
                  <a href="tel:+15203332665" className="underline hover:text-foreground">
                    (520) 333-2665
                  </a>
                  .
                </p>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card>
              <CardHeader>
                <CardTitle>Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our website is not intended for children under 13 years of age. We do not knowingly collect personal 
                  information from children under 13. If you believe we have collected information from a child under 13, 
                  please contact us immediately.
                </p>
              </CardContent>
            </Card>

            {/* California Privacy Rights */}
            <Card>
              <CardHeader>
                <CardTitle>California Privacy Rights (CCPA)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Right to know what personal information is collected, used, shared, or sold</li>
                  <li>Right to delete personal information</li>
                  <li>Right to opt-out of the sale of personal information</li>
                  <li>Right to non-discrimination for exercising your rights</li>
                </ul>
                <p className="mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card>
              <CardHeader>
                <CardTitle>Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We may update this Privacy Policy from time to time. The updated version will be indicated by an updated 
                  "Last Updated" date. We encourage you to review this Privacy Policy periodically to stay informed about 
                  how we are protecting your information.
                </p>
              </CardContent>
            </Card>

            {/* Contact Us */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p>
                    <strong>Intelligent Design Air Conditioning, Plumbing, Solar, & Electric</strong>
                  </p>
                  <p>
                    1145 E Fort Lowell Rd<br />
                    Tucson, AZ 85719
                  </p>
                  <p>
                    Phone:{' '}
                    <a href="tel:+15203332665" className="underline hover:text-foreground">
                      (520) 333-2665
                    </a>
                  </p>
                  <p>
                    Email:{' '}
                    <a href="mailto:info@idesignac.com" className="underline hover:text-foreground">
                      info@idesignac.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
