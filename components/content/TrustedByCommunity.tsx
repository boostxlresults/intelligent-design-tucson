import { Users, Award, Heart, Shield, CheckCircle, Star } from "lucide-react";

export default function TrustedByCommunity() {
  const stats = [
    {
      icon: Users,
      value: "100,000+",
      label: "Tucson Families Served",
      description: "Since 1979"
    },
    {
      icon: Star,
      value: "22,000+",
      label: "Five-Star Reviews",
      description: "4.97 average rating"
    },
    {
      icon: Award,
      value: "45+",
      label: "Years of Excellence",
      description: "Family & veteran-owned"
    },
    {
      icon: Shield,
      value: "A+",
      label: "BBB Rating",
      description: "Trusted & verified"
    }
  ];

  const communityImpact = [
    {
      title: "Supporting Local Families",
      description: "We're not a national franchise—we're your neighbors. Every technician, installer, and support team member lives right here in Tucson and surrounding communities."
    },
    {
      title: "Giving Back to Tucson",
      description: "We actively support Tucson Community Food Bank, Make-A-Wish Arizona, and various veteran support programs because this community has supported us for over 45 years."
    },
    {
      title: "Creating Local Jobs",
      description: "With 80+ year-round team members, we provide stable, well-paying careers to Tucson families—complete with benefits, ongoing training, and opportunities for growth."
    },
    {
      title: "Protecting What Matters Most",
      description: "Your family's comfort, health, and safety aren't just our business—they're our responsibility. We bring the same care to your home that we bring to our own."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-4 text-sm">
              <Heart className="h-4 w-4 text-primary" data-testid="icon-heart" />
              <span className="font-medium">Trusted by the Community</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Tucson's Most Trusted<br className="hidden sm:block" /> Home Services Company
            </h2>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              For over four decades, Tucson families have trusted us to protect their homes, comfort, and peace of mind. Here's why.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="rounded-xl border bg-card p-6 text-center hover-elevate transition"
                  data-testid={`stat-card-${index}`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-6 w-6 text-primary" data-testid={`icon-stat-${index}`} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-1" data-testid={`stat-value-${index}`}>
                    {stat.value}
                  </div>
                  <div className="font-semibold text-foreground mb-1" data-testid={`stat-label-${index}`}>
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid={`stat-description-${index}`}>
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {communityImpact.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border bg-card p-6 hover-elevate transition"
                data-testid={`community-card-${index}`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" data-testid={`icon-check-${index}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2" data-testid={`community-title-${index}`}>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground" data-testid={`community-description-${index}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-xl border bg-primary/5">
              <div className="flex items-center gap-2">
                <Shield className="h-8 w-8 text-primary" data-testid="icon-veteran" />
                <div className="text-left">
                  <div className="font-semibold text-lg">Veteran-Owned & Operated</div>
                  <div className="text-sm text-muted-foreground">Founded by U.S. Marine Corps veteran Andrew Dobbins</div>
                </div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-border"></div>
              <div className="flex items-center gap-2">
                <Heart className="h-8 w-8 text-primary" data-testid="icon-family" />
                <div className="text-left">
                  <div className="font-semibold text-lg">Family-Owned Since 2009</div>
                  <div className="text-sm text-muted-foreground">Building on a family legacy dating back to 1979</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
