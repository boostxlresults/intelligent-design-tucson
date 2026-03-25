// Server Component — no 'use client' directive
// Only FooterPhoneLink (thin client wrapper) handles the onClick tracking.
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { SiFacebook, SiInstagram, SiYoutube, SiGoogle } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { ObfuscatedEmail } from "@/components/ui/obfuscated-email";
import FooterPhoneLink from "@/components/layout/FooterPhoneLink";

const logoUrl = "/logo.png";

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/IDesignAC", icon: SiFacebook },
  { name: "Instagram", href: "https://www.instagram.com/intelligentdesigntucson/", icon: SiInstagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/intelligent-design-air-conditioning-plumbing-solar-electric/", icon: FaLinkedin },
  { name: "YouTube", href: "https://www.youtube.com/@Idesignac", icon: SiYoutube },
  { name: "Google Business", href: "https://g.page/r/CajVBZOPuZ56EBE/", icon: SiGoogle },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "HVAC Services", href: "/services/hvac" },
    { name: "Plumbing Services", href: "/services/plumbing" },
    { name: "Roofing Services", href: "/services/roofing" },
    { name: "Solar Solutions", href: "/services/solar" },
    { name: "Electrical Services", href: "/services/electrical" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Reviews", href: "/customer-reviews" },
    { name: "Careers", href: "/careers" },
    { name: "Customer Service & Scheduling", href: "/schedule" },
    { name: "Contact", href: "/contact" },
  ];

  const legal = [
    { name: "Company Knowledge Hub", href: "/services/knowledge-hub" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Image
              src={logoUrl}
              alt="Intelligent Design Tucson"
              width={240}
              height={48}
              className="h-12 w-auto mb-4"
              style={{ width: 'auto' }}
              loading="lazy"
            />
            <p className="text-sm text-primary-foreground/80 mb-4">
              Intelligent Design (est. 2011) united with Wood's Plumbing (est. 1979) to bring you 46+ years of combined home services expertise. Family and veteran-owned.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.name}`}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  data-testid={`link-social-${social.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            {/* BBB Badge Link */}
            <a
              href="https://www.bbb.org/us/az/tucson/profile/air-conditioning-contractor/intelligent-design-air-conditioning-plumbing-solar-electric-1286-20032256"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              data-testid="link-bbb-profile"
            >
              <Image
                src="/bbb-logo.png"
                alt="BBB A+ Rated"
                width={40}
                height={20}
                className="h-5 w-auto"
                style={{ width: 'auto' }}
              />
              <span>BBB A+ Rated</span>
            </a>
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
                <FooterPhoneLink />
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <ObfuscatedEmail data-testid="link-footer-email" />
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
          <p className="text-sm text-primary-foreground/60" suppressHydrationWarning>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
