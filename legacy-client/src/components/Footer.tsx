import { MapPin, Phone, Mail } from "lucide-react";
import logoUrl from "@assets/Intelligent-Design-Air-Conditioning-Plumbing-Solar-Electric-Tucson-Logo_1760650828238.png";
import CookiePreferences from "@/components/CookiePreferences";
import LazyImage from "@/components/LazyImage";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "HVAC Services", href: "#hvac" },
    { name: "Plumbing Services", href: "#plumbing" },
    { name: "Roofing Services", href: "#roofing" },
    { name: "Solar Solutions", href: "#solar" },
    { name: "Electrical Services", href: "#electric" },
  ];

  const company = [
    { name: "About Us", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ];

  const legal = [
    { name: "Company Knowledge Hub", href: "/about-intelligent-design" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <LazyImage
              src={logoUrl}
              alt="Intelligent Design Tucson"
              className="h-12 w-auto mb-4"
              width={240}
              height={48}
            />
            <p className="text-sm text-primary-foreground/80 mb-4">
              Tucson's trusted home services experts since 1979. Family and veteran-owned, locally operated.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover-elevate px-2 py-1 rounded-md inline-block transition-colors"
                    data-testid={`link-footer-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover-elevate px-2 py-1 rounded-md inline-block transition-colors"
                    data-testid={`link-footer-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  1145 E Fort Lowell Rd<br />
                  Tucson, AZ 85719
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:+15203332665"
                  className="hover-elevate px-2 py-1 rounded-md inline-block font-semibold"
                  data-testid="link-footer-phone"
                >
                  (520) 333-2665
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:info@idesignac.com"
                  className="hover-elevate px-2 py-1 rounded-md inline-block"
                  data-testid="link-footer-email"
                >
                  info@idesignac.com
                </a>
              </li>
              <li className="mt-4 text-xs">
                Licensed, Bonded & Insured<br />
                AZ ROC 340962, ROC 322375, ROC 296386, ROC 276673
              </li>
              <li className="mt-3">
                <div className="text-xs">
                  <strong>Service Areas:</strong><br />
                  Tucson, Marana, Oro Valley, Sahuarita, Vail, Green Valley, Catalina, Casas Adobes, Flowing Wells, Tanque Verde, Corona de Tucson, Drexel Heights, and all surrounding areas.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Intelligent Design Air Conditioning, Plumbing, Solar, & Electric. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {legal.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-primary-foreground/60 hover-elevate px-2 py-1 rounded-md transition-colors"
                data-testid={`link-footer-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.name}
              </a>
            ))}
            <CookiePreferences />
          </div>
        </div>
      </div>
    </footer>
  );
}
