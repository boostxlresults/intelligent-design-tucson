import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AirVent, Wrench, Sun, Zap, Home, Check } from "lucide-react";

const services = [
  {
    id: "hvac",
    icon: AirVent,
    title: "HVAC Services",
    benefits: [
      "AC installation & repair",
      "Heating system maintenance",
      "Air quality solutions",
      "24/7 emergency service",
    ],
  },
  {
    id: "plumbing",
    icon: Wrench,
    title: "Plumbing Services",
    benefits: [
      "Water heater repair & replacement",
      "Leak detection & repair",
      "Water softener systems",
      "Drain cleaning & maintenance",
    ],
  },
  {
    id: "solar",
    icon: Sun,
    title: "Solar Solutions",
    benefits: [
      "Solar panel installation",
      "Energy efficiency audits",
      "Roof coating services",
      "Monsoon preparation",
    ],
  },
  {
    id: "electric",
    icon: Zap,
    title: "Electrical Services",
    benefits: [
      "Panel upgrades & repairs",
      "Electrical safety inspections",
      "Outlet & switch installation",
      "Whole-home surge protection",
    ],
  },
  {
    id: "roofing",
    icon: Home,
    title: "Roofing Services",
    benefits: [
      "Roof repair & replacement",
      "Roof coating & sealing",
      "Leak detection & repair",
      "Storm damage inspection",
    ],
  },
];

export default function ServiceTiles() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Home Services for Tucson
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From HVAC to electrical work, we're your one-stop solution for all home comfort and safety needs.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="p-6 md:p-8 hover-elevate transition-all duration-300 hover:-translate-y-1"
              data-testid={`card-service-${service.id}`}
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>

              {/* Benefits */}
              <ul className="space-y-2 mb-6">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-ring flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <Button
                variant="ghost"
                className="w-full justify-center"
                asChild
              >
                <a
                  href={`#${service.id}`}
                  data-testid={`button-learn-more-${service.id}`}
                >
                  Learn More
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
