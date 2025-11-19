import { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import GoogleReviewsBadge from '@/components/GoogleReviewsBadge';
import SchedulerEmbed from '@/components/SchedulerEmbed';

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Intelligent Design Tucson | Call (520) 333-2665";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Contact Intelligent Design for HVAC, plumbing, solar, electrical, and roofing services in Tucson. Call (520) 333-2665 or visit us at 1145 E Fort Lowell Rd. 24/7 emergency service available."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact Intelligent Design
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Tucson's trusted home services experts since 1979. We're here to help with all your HVAC, plumbing, solar, electrical, and roofing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SchedulerEmbed
              triggerText="Schedule Service"
              size="lg"
              variant="default"
              className="bg-accent border border-accent-border text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8"
              data-testid="button-schedule-service"
            />
            <Button
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 font-bold text-lg px-8"
              asChild
              data-testid="button-call-now"
            >
              <a href="tel:+15203332665">
                <Phone className="w-5 h-5 mr-2" />
                Call (520) 333-2665
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info & Map Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
              
              {/* Contact Cards */}
              <div className="space-y-6 mb-8">
                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg hover-elevate">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <a
                      href="tel:+15203332665"
                      className="text-primary text-xl font-semibold hover:underline"
                      data-testid="link-phone"
                    >
                      (520) 333-2665
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      24/7 Emergency Service Available
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg hover-elevate">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a
                      href="mailto:info@idesignac.com"
                      className="text-primary text-lg hover:underline"
                      data-testid="link-email"
                    >
                      info@idesignac.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg hover-elevate">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                    <address className="not-italic text-foreground">
                      1145 E Fort Lowell Rd<br />
                      Tucson, AZ 85719
                    </address>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg hover-elevate">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                    <div className="text-foreground space-y-1">
                      <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
                      <p>Saturday: 8:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p className="text-sm text-primary font-semibold mt-2">
                        Emergency service available 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Reviews Badge */}
              <GoogleReviewsBadge variant="full" className="mb-8" />

              {/* License Info */}
              <div className="p-6 bg-muted/50 border border-border rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong className="text-foreground">Licensed, Bonded & Insured</strong>
                </p>
                <p className="text-xs text-muted-foreground">
                  AZ ROC 340962, ROC 322375, ROC 296386, ROC 276673
                </p>
                <p className="text-xs text-muted-foreground mt-3">
                  Family and veteran-owned, locally operated since 1979
                </p>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Location</h2>
              <GoogleMapEmbed height="600" className="mb-6" />
              
              {/* Service Areas */}
              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="font-bold text-lg mb-3">Areas We Serve</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tucson, Marana, Oro Valley, Sahuarita, Vail, Green Valley, Catalina, 
                  Casas Adobes, Flowing Wells, Tanque Verde, Corona de Tucson, 
                  Drexel Heights, and all surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Schedule your service online or call us today. We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SchedulerEmbed
              triggerText="Schedule Online"
              size="lg"
              variant="default"
              className="bg-accent border border-accent-border text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8"
              data-testid="button-schedule-bottom"
            />
            <Button
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 font-bold text-lg px-8"
              asChild
              data-testid="button-call-bottom"
            >
              <a href="tel:+15203332665">
                <Phone className="w-5 h-5 mr-2" />
                (520) 333-2665
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
