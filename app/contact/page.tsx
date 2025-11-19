import { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { SchedulerCluster } from "@/components/SchedulerCluster";
import { generateMetadata, generateLocalBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Contact Us | Intelligent Design Tucson",
  description: "Contact Intelligent Design for HVAC, plumbing, solar, electrical, and roofing services in Tucson. 24/7 emergency service. Call (520) 333-2665 or schedule online.",
  path: "/contact",
});

export default function ContactPage() {
  const structuredData = [generateLocalBusinessSchema()];

  return (
    <>
      <StructuredData data={structuredData} />
      <article className="min-h-screen">
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-h1">
              Contact Intelligent Design
            </h1>
            <p className="text-2xl font-semibold text-primary mb-6" data-testid="text-hero-tagline">
              24/7 Service | Fast Response | Expert Technicians
            </p>
            
            <SchedulerCluster position="hero" />
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4" data-testid="heading-contact-phone">Call or Text Us</h2>
                <p className="text-3xl font-bold text-primary mb-4" data-testid="text-phone-number">(520) 333-2665</p>
                <p className="text-muted-foreground mb-6" data-testid="text-emergency-availability">
                  Available 24/7 for emergencies
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8" data-testid="heading-location">Our Location</h2>
                <address className="not-italic text-lg mb-2" data-testid="text-address">
                  1145 E Fort Lowell Rd<br />
                  Tucson, AZ 85719
                </address>

                <h2 className="text-2xl font-bold mb-4 mt-8" data-testid="heading-hours">Service Hours</h2>
                <p className="text-lg" data-testid="text-hours-247">24/7 Emergency Service Available</p>
                <p className="text-muted-foreground" data-testid="text-no-overtime">No overtime charges</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4" data-testid="heading-service-areas">Service Areas</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li data-testid="area-tucson">Tucson</li>
                  <li data-testid="area-oro-valley">Oro Valley</li>
                  <li data-testid="area-marana">Marana</li>
                  <li data-testid="area-sahuarita">Sahuarita</li>
                  <li data-testid="area-vail">Vail</li>
                  <li data-testid="area-green-valley">Green Valley</li>
                  <li data-testid="area-catalina">Catalina Foothills</li>
                  <li data-testid="area-surrounding">And surrounding areas</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <SchedulerCluster position="bottom" />
          </div>
        </section>
      </article>
    </>
  );
}
