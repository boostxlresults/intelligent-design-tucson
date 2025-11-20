import { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { SchedulerCluster } from "@/components/SchedulerCluster";
import { generateMetadata, generateLocalBusinessSchema } from "@/lib/seo";
import WhoHireWidget from "@/components/integrations/WhoHireWidget";

export const metadata: Metadata = generateMetadata({
  title: "Careers | Join Our Team | Intelligent Design Tucson",
  description: "Join Tucson's #1 home services company. Family & veteran-owned since 1979. Competitive pay, benefits, and growth opportunities for HVAC, plumbing, electrical, solar, and roofing professionals.",
  path: "/careers",
});

export default function CareersPage() {
  const structuredData = [generateLocalBusinessSchema()];

  return (
    <>
      <StructuredData data={structuredData} />
      <article className="min-h-screen">
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-h1">
              Join the Intelligent Design Team
            </h1>
            <p className="text-2xl font-semibold text-primary mb-6" data-testid="text-hero-ownership">
              Family & Veteran-Owned Since 1979
            </p>
            <p className="text-lg text-muted-foreground mb-8" data-testid="text-hero-pitch">
              Build your career with Tucson's #1 home services company. We're always looking for talented HVAC, plumbing, electrical, solar, and roofing professionals.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8" data-testid="heading-benefits">Why Work With Us?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card border border-border rounded-lg p-6" data-testid="card-benefit-compensation">
                <h3 className="text-xl font-semibold mb-3">Competitive Compensation</h3>
                <p className="text-muted-foreground">Top pay in the industry with performance bonuses and commission opportunities</p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6" data-testid="card-benefit-health">
                <h3 className="text-xl font-semibold mb-3">Comprehensive Benefits</h3>
                <p className="text-muted-foreground">Health insurance, 401(k), paid time off, and more</p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6" data-testid="card-benefit-growth">
                <h3 className="text-xl font-semibold mb-3">Career Growth</h3>
                <p className="text-muted-foreground">Ongoing training, certifications, and advancement opportunities</p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6" data-testid="card-benefit-culture">
                <h3 className="text-xl font-semibold mb-3">Company Culture</h3>
                <p className="text-muted-foreground">Family-owned company with 45+ years of stability and growth</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6" data-testid="heading-positions">Open Positions</h2>
            <div className="bg-card border border-border rounded-lg p-8 mb-8">
              <p className="text-lg mb-6" data-testid="text-hiring-intro">
                Browse our current job openings below and apply directly through our hiring portal.
              </p>
              
              {/* WhoHire Job Board Integration */}
              <WhoHireWidget />

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-lg font-semibold mb-2" data-testid="text-contact-careers">
                  Questions about a position?
                </p>
                <p className="text-muted-foreground">
                  Contact us at <a href="tel:+1520-333-2665" className="text-primary hover:underline font-semibold">(520) 333-2665</a> to speak with our hiring team.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4" data-testid="heading-apply">Ready to Apply?</h2>
              <p className="text-lg mb-6" data-testid="text-apply-cta">Call us to discuss career opportunities</p>
            </div>
            <SchedulerCluster position="bottom" />
          </div>
        </section>
      </article>
    </>
  );
}
