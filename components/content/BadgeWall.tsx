import { Shield, Award, CreditCard, Clock } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully certified technicians",
  },
  {
    icon: Award,
    title: "45+ Years Experience",
    description: "Serving Tucson since 1979",
  },
  {
    icon: CreditCard,
    title: "Flexible Financing",
    description: "Payment plans available",
  },
  {
    icon: Clock,
    title: "24/7 Emergency",
    description: "Always here when you need us",
  },
];

export default function BadgeWall() {
  return (
    <section className="py-16 md:py-20 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
              data-testid={`badge-${index}`}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <badge.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-1">
                {badge.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
