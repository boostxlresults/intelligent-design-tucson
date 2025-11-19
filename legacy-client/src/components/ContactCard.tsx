import { MapPin, Phone, Clock, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import SchedulerEmbed from "./SchedulerEmbed";

const serviceAreas = [
  "Tucson",
  "Oro Valley",
  "Marana",
  "Vail",
  "Sahuarita",
  "Green Valley",
  "Catalina Foothills",
  "SaddleBrooke",
  "Gladden Farms",
];

export default function ContactCard() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-8">
              Get in Touch
            </h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground" data-testid="text-address">
                    1145 E Fort Lowell Rd
                    <br />
                    Tucson, AZ 85719
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-1">Phone</h3>
                  <a
                    href="tel:+15203332665"
                    className="text-lg font-bold text-primary hover-elevate px-2 py-1 rounded-md inline-block"
                    data-testid="link-contact-phone"
                  >
                    (520) 333-2665
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-1">Service Hours</h3>
                  <p className="text-muted-foreground" data-testid="text-hours">
                    Open 24/7 for Emergencies
                    <br />
                    <span className="text-sm">Regular business hours: Mon-Fri 7am-6pm</span>
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <SchedulerEmbed
                  triggerText="Schedule Service Online"
                  variant="default"
                  size="lg"
                  className="w-full sm:w-auto"
                />
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Areas We Serve
            </h3>
            <p className="text-muted-foreground mb-6">
              Proudly serving Tucson and the surrounding communities:
            </p>
            <ul className="grid grid-cols-2 gap-3">
              {serviceAreas.map((area, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-foreground"
                  data-testid={`area-${index}`}
                >
                  <CheckCircle className="w-5 h-5 text-ring flex-shrink-0" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mt-6">
              Don't see your area listed? Give us a call! We may still be able to help.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
