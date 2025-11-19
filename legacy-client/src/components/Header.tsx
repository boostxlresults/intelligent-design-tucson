import { useState } from "react";
import { Link } from "wouter";
import { 
  Phone, 
  Menu, 
  X, 
  ChevronDown, 
  Wrench, 
  Settings, 
  Package, 
  Gauge, 
  Wind, 
  Shield, 
  Droplets, 
  Thermometer, 
  Sun,
  Flame,
  Zap,
  Waves,
  Search,
  Filter,
  Radio,
  Bath,
  CircleDot,
  AlertCircle,
  Home,
  Building2,
  Layers,
  Lightbulb,
  Info,
  DollarSign,
  Star,
  MapPin,
  Users,
  ShieldCheck,
  BookOpen,
  Award,
  FileText,
  Video,
  CheckCircle,
  Gift,
  GraduationCap,
  MessageSquare,
  Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SchedulerEmbed from "./SchedulerEmbed";
import logoUrl from "@assets/Intelligent-Design-Air-Conditioning-Plumbing-Solar-Electric-Tucson-Logo_1760650828238.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openPopover, setOpenPopover] = useState<string | null>(null);
  const [mobileAreasServedExpanded, setMobileAreasServedExpanded] = useState(false);
  const [mobileExpandedSections, setMobileExpandedSections] = useState<Record<string, boolean>>({});
  const [mobileExpandedSubsections, setMobileExpandedSubsections] = useState<Record<string, boolean>>({});
  const [expandedAreas, setExpandedAreas] = useState<Record<string, boolean>>({});

  const toggleMobileSection = (sectionName: string) => {
    setMobileExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  const toggleMobileSubsection = (subsectionName: string) => {
    setMobileExpandedSubsections(prev => ({
      ...prev,
      [subsectionName]: !prev[subsectionName]
    }));
  };

  const toggleArea = (areaName: string) => {
    setExpandedAreas(prev => ({
      ...prev,
      [areaName]: !prev[areaName]
    }));
  };

  const acSubItems = {
    column1: [
      { name: "AC Repair", href: "/ac-repair-tucson", icon: Wrench },
      { name: "AC Service", href: "/ac-service-tucson", icon: Settings },
      { name: "AC Installation", href: "/ac-installation-tucson", icon: Package },
      { name: "AC Tune-up", href: "/ac-tuneup-tucson", icon: Gauge },
      { name: "Ductless Mini Split Repair", href: "/ductless-repair-tucson", icon: Wrench },
      { name: "Ductless Mini Split Installation", href: "/ductless-installation-tucson", icon: Package },
    ],
    column2: [
      { name: "Duct Cleaning", href: "/duct-cleaning-tucson", icon: Wind },
      { name: "Duct Repair", href: "/duct-repair-tucson", icon: Wrench },
      { name: "Duct Installation", href: "/duct-installation-tucson", icon: Package },
      { name: "Duct Sealing", href: "/duct-sealing-tucson", icon: Shield },
      { name: "Indoor Air Quality / Humidifiers", href: "/indoor-air-quality-tucson", icon: Droplets },
    ],
    column3: [
      { name: "Smart Thermostat Installation", href: "/smart-thermostat-installation-tucson", icon: Thermometer },
      { name: "Solar AC", href: "/solar-ac-tucson", icon: Sun },
    ]
  };

  const heatingSubItems = {
    column1: [
      { name: "Heater Repair", href: "/heater-repair-tucson", icon: Wrench },
      { name: "Heater Service", href: "/heater-service-tucson", icon: Settings },
      { name: "Heater Installation", href: "/heater-installation-tucson", icon: Package },
    ],
    column2: [
      { name: "Heater Tune-Up", href: "/heater-tuneup-tucson", icon: Gauge },
      { name: "Heat Pumps", href: "/heat-pumps-tucson", icon: Zap },
      { name: "Furnaces", href: "/furnaces-tucson", icon: Flame },
    ]
  };

  const plumbingSubItems = {
    column1: [
      { name: "Plumbing Repair & Installation", href: "/plumbing-repair-installation-tucson", icon: Wrench },
      { name: "Brita PRO® Water Filtration Systems", href: "/water-filtration-tucson", icon: Filter },
      { name: "Water Heaters", href: "/water-heaters-tucson", icon: Flame },
      { name: "Water Heater Repair", href: "/water-heater-repair-tucson", icon: AlertCircle },
      { name: "Water Heater Installation", href: "/water-heater-installation-tucson", icon: Package },
      { name: "Hybrid Water Heater Services", href: "/hybrid-water-heaters-tucson", icon: Zap },
      { name: "Water Heater Flush", href: "/water-heater-flush-tucson", icon: Waves },
      { name: "Plumbing Maintenance", href: "/plumbing-maintenance-tucson", icon: Gauge },
      { name: "Sink Repair & Installation", href: "/sink-repair-installation-tucson", icon: CircleDot },
      { name: "Bidet Installation Tucson", href: "/bidet-installation-tucson", icon: Bath },
    ],
    column2: [
      { name: "Drain Clearing Tucson", href: "/drain-clearing-tucson", icon: Waves },
      { name: "Rooter Special", href: "/rooter-services-tucson", icon: Wind },
      { name: "Leak Detection", href: "/leak-detection-tucson", icon: Search },
      { name: "Water Leak Repair", href: "/water-leak-repair-tucson", icon: Droplets },
      { name: "Sewer Line Repair", href: "/sewer-line-repair-tucson", icon: Wrench },
      { name: "Sewer Camera Inspection", href: "/sewer-camera-inspection-tucson", icon: Radio },
      { name: "Repipe Specialist Tucson", href: "/repipe-specialist-tucson", icon: Settings },
      { name: "Trenchless Repair", href: "/trenchless-repair-tucson", icon: Settings },
      { name: "Burst Pipe Repair", href: "/burst-pipe-repair-tucson", icon: AlertCircle },
      { name: "Water Softeners", href: "/water-softeners-tucson", icon: Droplets },
    ]
  };

  const roofingSubItems = {
    column1: [
      { name: "Residential Roof Repair", href: "/residential-roof-repair-tucson", icon: Wrench },
      { name: "Residential Roof Installation", href: "/residential-roof-installation-tucson", icon: Package },
      { name: "Residential Roof Replacement", href: "/residential-roof-replacement-tucson", icon: Settings },
      { name: "Residential Roof Coating", href: "/residential-roof-coating-tucson", icon: Shield },
      { name: "Residential Roof Inspection", href: "/residential-roof-inspection-tucson", icon: Search },
      { name: "Solar Tubular Lights", href: "/solar-tubular-lights-tucson", icon: Sun },
      { name: "Skylights", href: "/skylights-tucson", icon: Lightbulb },
    ],
    column2: [
      { name: "Commercial Roof Repair", href: "/commercial-roof-repair-tucson", icon: Wrench },
      { name: "Commercial Roof Installation", href: "/commercial-roof-installation-tucson", icon: Package },
      { name: "Commercial Roof Replacement", href: "/commercial-roof-replacement-tucson", icon: Settings },
      { name: "Commercial Roof Coating", href: "/commercial-roof-coating-tucson", icon: Shield },
      { name: "Commercial Roof Inspections", href: "/commercial-roof-inspection-tucson", icon: Search },
    ],
    column3: [
      { name: "Flat Roofs", href: "/flat-roof-repair-tucson", icon: Layers },
      { name: "Shingle Roofs", href: "/shingle-roofs-tucson", icon: Layers },
      { name: "Tile Roofs", href: "/tile-roofing-tucson", icon: Layers },
      { name: "Pitched Roofs", href: "/pitched-roofs-tucson", icon: Home },
      { name: "Metal Roofs", href: "/metal-roofing-tucson", icon: Layers },
    ]
  };

  const solarSubItems = {
    column1: [
      { name: "Residential Solar Panel Installation", href: "/residential-solar-installation-tucson", icon: Package },
      { name: "Commercial Solar Panel Installation", href: "/commercial-solar-installation-tucson", icon: Building2 },
      { name: "Solar Energy Monitoring & Maintenance Plans", href: "/solar-maintenance-tucson", icon: Gauge },
    ],
    column2: [
      { name: "Home Energy Audit & Consultation", href: "/home-energy-audit-tucson", icon: Search },
      { name: "Solar Tax Credits", href: "/solar-tax-credits-tucson", icon: CircleDot },
      { name: "Solar Panel Costs", href: "/solar-panel-costs-tucson", icon: Zap },
    ]
  };

  const electricalSubItems = {
    column1: [
      { name: "Electrical Repair", href: "/electrical-repair-tucson", icon: Wrench },
      { name: "GENERAC® Home Generator Installation", href: "/generac-installation-tucson", icon: Package },
      { name: "GENERAC® Home Generator Repair", href: "/generac-repair-tucson", icon: Settings },
      { name: "Electrical Panel Upgrades", href: "/electrical-panel-upgrades-tucson", icon: Zap },
      { name: "Home Energy Upgrades", href: "/home-energy-upgrades-tucson", icon: Gauge },
    ],
    column2: [
      { name: "Ceiling Fan Installation", href: "/ceiling-fan-installation-tucson", icon: Wind },
      { name: "Outdoor and Motion Lighting", href: "/outdoor-motion-lighting-tucson", icon: Lightbulb },
      { name: "Lighting Upgrades", href: "/lighting-upgrades-tucson", icon: Sun },
      { name: "Circuit Breakers", href: "/circuit-breakers-tucson", icon: Shield },
      { name: "Outlets & Switches", href: "/outlets-switches-tucson", icon: CircleDot },
    ]
  };

  const services = [
    { 
      name: "AC", 
      href: "#ac",
      hasColumns: true,
      acColumns: acSubItems
    },
    { 
      name: "Heating", 
      href: "#heating",
      hasColumns: true,
      heatingColumns: heatingSubItems
    },
    { 
      name: "Plumbing", 
      href: "#plumbing",
      hasColumns: true,
      plumbingColumns: plumbingSubItems
    },
    { 
      name: "Roofing", 
      href: "#roofing",
      hasColumns: true,
      roofingColumns: roofingSubItems
    },
    { 
      name: "Solar", 
      href: "#solar",
      hasColumns: true,
      solarColumns: solarSubItems
    },
    { 
      name: "Electrical", 
      href: "#electrical",
      hasColumns: true,
      electricalColumns: electricalSubItems
    },
  ];

  const infoSubItems = {
    column1: [
      { name: "About Us", href: "/about-us", icon: Info },
      { name: "Financing", href: "/financing", icon: DollarSign },
      { name: "Careers", href: "/careers", icon: Users },
      { name: "Family Protection Plans", href: "/family-protection-plans", icon: ShieldCheck },
    ],
    column2: [
      {
        name: "Why Tucson Chooses Intelligent Design",
        href: "/why-tucson-chooses-intelligent-design",
        icon: Star,
        subItems: [
          { name: "Customer Reviews", href: "/customer-reviews", icon: Star },
          { name: "Video Testimonials", href: "/video-testimonials", icon: Video },
          { name: "Recent Projects", href: "/recent-projects", icon: CheckCircle },
          { name: "Guarantees", href: "/guarantees", icon: ShieldCheck },
          { name: "New Homebuyer Offer", href: "/new-homebuyer-offer", icon: Gift },
          { name: "REALTORS® Offer", href: "/realtors-offer", icon: Home },
        ]
      },
    ],
    column3: [
      {
        name: "Areas We Serve",
        href: "/areas-served",
        icon: MapPin,
        subItems: [
          { 
            name: "Tucson", 
            href: "/tucson", 
            icon: MapPin,
            subItems: [
              { name: "Tucson Estates", href: "/tucson-estates", icon: MapPin },
              { name: "Casas Adobes", href: "/casas-adobes", icon: MapPin },
              { name: "Tortolita", href: "/tortolita", icon: MapPin },
              { name: "Drexel Heights", href: "/drexel-heights", icon: MapPin },
            ]
          },
          { name: "Oro Valley", href: "/oro-valley", icon: MapPin },
          { 
            name: "Marana", 
            href: "/marana", 
            icon: MapPin,
            subItems: [
              { name: "Gladden Farms", href: "/gladden-farms", icon: MapPin },
              { name: "Avra Valley", href: "/avra-valley", icon: MapPin },
              { name: "Picture Rocks", href: "/picture-rocks", icon: MapPin },
            ]
          },
          { name: "Sahuarita", href: "/sahuarita", icon: MapPin },
          { name: "Vail", href: "/vail", icon: MapPin },
          { name: "Green Valley", href: "/green-valley", icon: MapPin },
          { name: "Saddlebrooke / Catalina", href: "/saddlebrooke-catalina", icon: MapPin },
          { 
            name: "East Tucson", 
            href: "/east-tucson", 
            icon: MapPin,
            subItems: [
              { name: "Catalina Foothills", href: "/catalina-foothills", icon: MapPin },
              { name: "Tanque Verde", href: "/tanque-verde", icon: MapPin },
              { name: "Rita Ranch", href: "/rita-ranch", icon: MapPin },
              { name: "Corona De Tucson", href: "/corona-de-tucson", icon: MapPin },
            ]
          },
          { name: "Red Rock / Casa Grande", href: "/red-rock-casa-grande", icon: MapPin },
        ]
      },
    ],
    column4: [
      {
        name: "Resources",
        href: "/resources",
        icon: BookOpen,
        subItems: [
          { name: "Educational Home Service Blogs", href: "/blog", icon: FileText },
          { name: "Video Education Library", href: "/education-library", icon: Video },
          { name: "Air Conditioning System FAQs", href: "/ac-system-faqs", icon: MessageSquare },
          { name: "R22 Phaseout", href: "/r22-phaseout", icon: AlertCircle },
          { name: "Privacy Policy", href: "/privacy-policy", icon: Lock },
          { name: "Intelligent Design Knowledge Hub", href: "/about-intelligent-design", icon: BookOpen },
        ]
      },
    ],
  };

  const additionalNavItems = [
    { 
      name: "Info", 
      href: "#info",
      hasColumns: true,
      infoColumns: infoSubItems
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-primary shadow-md">
      <div className="pr-4 md:pr-6 lg:pr-8 pl-2 md:pl-3 lg:pl-4">
        <div className="flex items-center py-4 md:py-6 gap-8">
          {/* Logo */}
          <div className="flex-shrink-0 ml-6 md:ml-10 lg:ml-12">
            <a href="/" className="block" data-testid="link-home">
              <img
                src={logoUrl}
                alt="Intelligent Design Tucson Logo"
                className="h-16 md:h-20 w-auto"
                width={280}
                height={56}
              />
            </a>
          </div>

          {/* Desktop Navigation with Dropdown Ready - shows at 1024px+ */}
          <nav className="hidden lg:flex items-center gap-1">
            {services.map((service) => (
              <div
                key={service.name}
                onMouseEnter={() => setOpenPopover(service.name)}
                onMouseLeave={() => setOpenPopover(null)}
              >
                <Popover open={openPopover === service.name}>
                  <PopoverTrigger asChild>
                    <a
                      href={service.href}
                      className="inline-flex items-center justify-center bg-transparent text-primary-foreground hover:bg-primary-foreground/10 h-auto px-2 py-2 text-lg rounded-md transition-colors"
                      data-testid={`link-${service.name.toLowerCase()}`}
                    >
                      {service.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </a>
                  </PopoverTrigger>
                  <PopoverContent align="start" className={
                    service.acColumns ? "w-[820px] p-4" : 
                    service.heatingColumns ? "w-[540px] p-4" : 
                    service.plumbingColumns ? "w-[680px] p-4" : 
                    service.roofingColumns ? "w-[820px] p-4" : 
                    service.solarColumns ? "w-[540px] p-4" : 
                    service.electricalColumns ? "w-[540px] p-4" : 
                    "w-[280px] p-2"
                  }>
                    {service.acColumns ? (
                      <div className="grid grid-cols-3 gap-6">
                        {/* Column 1 */}
                        <div className="space-y-1">
                          {service.acColumns.column1.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2.5 text-base text-foreground hover:bg-accent rounded-md transition-colors group"
                                data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <Icon className="w-5 h-5 text-primary flex-shrink-0 group-hover:text-primary/80" />
                                <span>{item.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                        {/* Column 2 */}
                        <div className="space-y-1">
                          {service.acColumns.column2.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2.5 text-base text-foreground hover:bg-accent rounded-md transition-colors group"
                                data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <Icon className="w-5 h-5 text-primary flex-shrink-0 group-hover:text-primary/80" />
                                <span>{item.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                        {/* Column 3 */}
                        <div className="space-y-1">
                          {service.acColumns.column3.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2.5 text-base text-foreground hover:bg-accent rounded-md transition-colors group"
                                data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <Icon className="w-5 h-5 text-primary flex-shrink-0 group-hover:text-primary/80" />
                                <span>{item.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ) : service.heatingColumns ? (
                      <div className="grid grid-cols-2 gap-6">
                        {/* Column 1 - Core Services */}
                        <div className="space-y-1">
                          {service.heatingColumns.column1.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2.5 text-base text-foreground hover:bg-accent rounded-md transition-colors group"
                                data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <Icon className="w-5 h-5 text-primary flex-shrink-0 group-hover:text-primary/80" />
                                <span>{item.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                        {/* Column 2 - Maintenance & Equipment */}
                        <div className="space-y-1">
                          {service.heatingColumns.column2.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2.5 text-base text-foreground hover:bg-accent rounded-md transition-colors group"
                                data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <Icon className="w-5 h-5 text-primary flex-shrink-0 group-hover:text-primary/80" />
                                <span>{item.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ) : service.plumbingColumns ? (
                      <div className="grid grid-cols-2 gap-6">
                        {/* Column 1 - Plumbing Services */}
                        <div className="space-y-1">
                          <h3 className="px-3 py-2 text-base font-bold text-yellow-600 uppercase tracking-wide">
                            Plumbing Services
                          </h3>
                          {service.plumbingColumns.column1.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2.5 text-base text-foreground hover:bg-accent rounded-md transition-colors group"
                                data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <Icon className="w-5 h-5 text-primary flex-shrink-0 group-hover:text-primary/80" />
                                <span>{item.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                        {/* Column 2 - Drain & Sewer Services */}
                        <div className="space-y-1">
                          <h3 className="px-3 py-2 text-base font-bold text-yellow-600 uppercase tracking-wide">
                            Drain & Sewer Services
                          </h3>
                          {service.plumbingColumns.column2.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2.5 text-base text-foreground hover:bg-accent rounded-md transition-colors group"
                                data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <Icon className="w-5 h-5 text-primary flex-shrink-0 group-hover:text-primary/80" />
                                <span>{item.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ) : service.roofingColumns ? (
                      <div className="grid grid-cols-3 gap-6">
                        {/* Column 1 - Residential Roofing */}
                        <div className="space-y-1">
                          <h3 className="px-3 py-2 text-base font-bold text-yellow-600 uppercase tracking-wide">
                            Residential Roofing
                          </h3>
                          {service.roofingColumns.column1.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2.5 text-base text-foreground hover:bg-accent rounded-md transition-colors group"
                                data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <Icon className="w-5 h-5 text-primary flex-shrink-0 group-hover:text-primary/80" />
                                <span>{item.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                        {/* Column 2 - Commercial Roofing */}
                        <div className="space-y-1">
                          <h3 className="px-3 py-2 text-base font-bold text-yellow-600 uppercase tracking-wide">
                            Commercial Roofing
                          </h3>
                          {service.roofingColumns.column2.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2.5 text-base text-foreground hover:bg-accent rounded-md transition-colors group"
                                data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <Icon className="w-5 h-5 text-primary flex-shrink-0 group-hover:text-primary/80" />
                                <span>{item.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                        {/* Column 3 - Roof Types We Service */}
                        <div className="space-y-1">
                          <h3 className="px-3 py-2 text-base font-bold text-yellow-600 uppercase tracking-wide">
                            Roof Types We Service
                          </h3>
                          {service.roofingColumns.column3.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2.5 text-base text-foreground hover:bg-accent rounded-md transition-colors group"
                                data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <Icon className="w-5 h-5 text-primary flex-shrink-0 group-hover:text-primary/80" />
                                <span>{item.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ) : service.solarColumns ? (
                      <div className="grid grid-cols-2 gap-6">
                        {/* Column 1 - Installation & Services */}
                        <div className="space-y-1">
                          {service.solarColumns.column1.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2.5 text-base text-foreground hover:bg-accent rounded-md transition-colors group"
                                data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <Icon className="w-5 h-5 text-primary flex-shrink-0 group-hover:text-primary/80" />
                                <span>{item.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                        {/* Column 2 - Consulting & Information */}
                        <div className="space-y-1">
                          {service.solarColumns.column2.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2.5 text-base text-foreground hover:bg-accent rounded-md transition-colors group"
                                data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <Icon className="w-5 h-5 text-primary flex-shrink-0 group-hover:text-primary/80" />
                                <span>{item.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ) : service.electricalColumns ? (
                      <div className="grid grid-cols-2 gap-6">
                        {/* Column 1 - Repair & Generator Services */}
                        <div className="space-y-1">
                          {service.electricalColumns.column1.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2.5 text-base text-foreground hover:bg-accent rounded-md transition-colors group"
                                data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <Icon className="w-5 h-5 text-primary flex-shrink-0 group-hover:text-primary/80" />
                                <span>{item.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                        {/* Column 2 - Lighting & Installations */}
                        <div className="space-y-1">
                          {service.electricalColumns.column2.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2.5 text-base text-foreground hover:bg-accent rounded-md transition-colors group"
                                data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <Icon className="w-5 h-5 text-primary flex-shrink-0 group-hover:text-primary/80" />
                                <span>{item.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ) : null}
                  </PopoverContent>
                </Popover>
              </div>
            ))}
            {additionalNavItems.map((item) => (
              <div
                key={item.name}
                onMouseEnter={() => setOpenPopover(item.name)}
                onMouseLeave={() => setOpenPopover(null)}
              >
                <Popover open={openPopover === item.name}>
                  <PopoverTrigger asChild>
                    <a
                      href={item.href}
                      className="inline-flex items-center justify-center bg-transparent text-primary-foreground hover:bg-primary-foreground/10 h-auto px-2 py-2 text-lg rounded-md transition-colors"
                      data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </a>
                  </PopoverTrigger>
                  <PopoverContent align="start" className={
                    item.infoColumns ? "w-[1020px] p-4" : "w-[200px] p-2"
                  }>
                    {item.infoColumns ? (
                      <div className="grid grid-cols-4 gap-6">
                        {/* Column 1 - About, Financing, Careers, Family Plans */}
                        <div className="space-y-1">
                          {item.infoColumns.column1.map((navItem) => {
                            const Icon = navItem.icon;
                            return (
                              <div key={navItem.name}>
                                <Link
                                  href={navItem.href}
                                  className="flex items-center gap-3 px-3 py-2.5 text-base text-foreground hover:bg-accent rounded-md transition-colors group"
                                  data-testid={`link-${navItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                >
                                  <Icon className="w-5 h-5 text-primary flex-shrink-0 group-hover:text-primary/80" />
                                  <span>{navItem.name}</span>
                                </Link>
                                {navItem.subItems && (
                                  <div className="ml-8 mt-1 space-y-1">
                                    {navItem.subItems.map((subItem) => {
                                      const SubIcon = subItem.icon;
                                      return (
                                        <Link
                                          key={subItem.name}
                                          href={subItem.href}
                                          className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                                          data-testid={`link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                        >
                                          <SubIcon className="w-4 h-4 flex-shrink-0" />
                                          <span>{subItem.name}</span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                        {/* Column 2 - Why Tucson Chooses ID */}
                        <div className="space-y-1">
                          {item.infoColumns.column2.map((navItem) => {
                            const Icon = navItem.icon;
                            return (
                              <div key={navItem.name}>
                                <h3 className="text-base font-bold text-yellow-600 px-3 py-1.5">
                                  {navItem.name}
                                </h3>
                                {navItem.subItems && (
                                  <div className="space-y-1">
                                    {navItem.subItems.map((subItem) => {
                                      const SubIcon = subItem.icon;
                                      return (
                                        <Link
                                          key={subItem.name}
                                          href={subItem.href}
                                          className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                                          data-testid={`link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                        >
                                          <SubIcon className="w-4 h-4 flex-shrink-0" />
                                          <span>{subItem.name}</span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                        {/* Column 3 - Areas We Serve */}
                        <div className="space-y-1">
                          {item.infoColumns.column3.map((navItem) => {
                            const Icon = navItem.icon;
                            return (
                              <div key={navItem.name}>
                                <h3 className="text-base font-bold text-yellow-600 px-3 py-1.5">
                                  {navItem.name}
                                </h3>
                                {navItem.subItems && (
                                  <div className="space-y-1">
                                    {navItem.subItems.map((subItem) => {
                                      const SubIcon = subItem.icon;
                                      const hasSubItems = subItem.subItems && subItem.subItems.length > 0;
                                      return (
                                        <div key={subItem.name}>
                                          {hasSubItems ? (
                                            <button
                                              onClick={() => toggleArea(subItem.name)}
                                              className="w-full flex items-center justify-between gap-2 px-3 py-1.5 text-sm font-medium hover:text-foreground hover:bg-accent rounded-md transition-colors"
                                              data-testid={`button-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                            >
                                              <div className="flex items-center gap-2">
                                                <SubIcon className="w-4 h-4 flex-shrink-0" />
                                                <span>{subItem.name}</span>
                                              </div>
                                              <ChevronDown className={`w-3 h-3 transition-transform ${expandedAreas[subItem.name] ? 'rotate-180' : ''}`} />
                                            </button>
                                          ) : (
                                            <Link
                                              href={subItem.href}
                                              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium hover:text-foreground hover:bg-accent rounded-md transition-colors"
                                              data-testid={`link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                            >
                                              <SubIcon className="w-4 h-4 flex-shrink-0" />
                                              <span>{subItem.name}</span>
                                            </Link>
                                          )}
                                          {hasSubItems && expandedAreas[subItem.name] && (
                                            <div className="pl-6 space-y-0.5">
                                              {subItem.subItems.map((subSubItem: any) => {
                                                const SubSubIcon = subSubItem.icon;
                                                return (
                                                  <Link
                                                    key={subSubItem.name}
                                                    href={subSubItem.href}
                                                    className="flex items-center gap-2 px-2 py-1 text-xs text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                                                    data-testid={`link-${subSubItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                                  >
                                                    <SubSubIcon className="w-3 h-3 flex-shrink-0" />
                                                    <span>{subSubItem.name}</span>
                                                  </Link>
                                                );
                                              })}
                                            </div>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                        {/* Column 4 - Resources */}
                        <div className="space-y-3">
                          {item.infoColumns.column4.map((navItem) => {
                            const Icon = navItem.icon;
                            return (
                              <div key={navItem.name}>
                                <h3 className="text-base font-bold text-yellow-600 px-3 py-1.5">
                                  {navItem.name}
                                </h3>
                                {navItem.subItems && (
                                  <div className="space-y-1">
                                    {navItem.subItems.map((subItem) => {
                                      const SubIcon = subItem.icon;
                                      return (
                                        <Link
                                          key={subItem.name}
                                          href={subItem.href}
                                          className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                                          data-testid={`link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                        >
                                          <SubIcon className="w-4 h-4 flex-shrink-0" />
                                          <span>{subItem.name}</span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <p className="text-lg text-muted-foreground p-3">
                        Coming soon: {item.name}
                      </p>
                    )}
                  </PopoverContent>
                </Popover>
              </div>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="flex items-center gap-2 ml-1">
            <a
              href="tel:+15203332665"
              className="hidden lg:flex items-center gap-2 bg-yellow-400 border-2 border-yellow-500 text-gray-900 hover:bg-yellow-500 px-4 py-2 rounded-md font-bold transition-colors whitespace-nowrap"
              data-testid="link-phone"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span className="text-lg">(520) 333-2665</span>
            </a>
            
            <div className="hidden lg:block">
              <SchedulerEmbed
                triggerText="Schedule Service"
                variant="destructive"
                size="default"
                data-testid="button-schedule-header"
              />
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="lg:hidden text-primary-foreground hover:bg-primary-foreground/10 h-20 w-20 p-0 flex items-center justify-center"
                  data-testid="button-menu"
                >
                  {mobileMenuOpen ? (
                    <X className="!w-16 !h-16" />
                  ) : (
                    <Menu className="!w-16 !h-16" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col">
                <nav className="flex flex-col gap-4 mt-8 overflow-y-auto flex-1 pr-2">
                  {services.map((service) => (
                    <div key={service.name}>
                      <button
                        onClick={() => toggleMobileSection(service.name)}
                        className="w-full text-left flex items-center justify-between text-lg font-medium hover-elevate px-4 py-3 rounded-md transition-colors"
                        data-testid={`button-mobile-${service.name.toLowerCase()}`}
                      >
                        <span>{service.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSections[service.name] ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileExpandedSections[service.name] && service.hasColumns && service.acColumns ? (
                        <div className="pl-6 mt-2 space-y-1">
                          {[...service.acColumns.column1, ...service.acColumns.column2, ...service.acColumns.column3].map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-4 py-2 text-base hover-elevate rounded-md transition-colors"
                                data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>{item.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      ) : mobileExpandedSections[service.name] && service.hasColumns && service.heatingColumns ? (
                        <div className="pl-6 mt-2 space-y-1">
                          {[...service.heatingColumns.column1, ...service.heatingColumns.column2].map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-4 py-2 text-base hover-elevate rounded-md transition-colors"
                                data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>{item.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      ) : mobileExpandedSections[service.name] && service.hasColumns && service.plumbingColumns ? (
                        <div className="pl-4 mt-2 space-y-2">
                          {/* Plumbing Services Subsection */}
                          <div>
                            <button
                              onClick={() => toggleMobileSubsection('Plumbing Services')}
                              className="w-full text-left flex items-center justify-between text-base font-medium hover-elevate px-4 py-2 rounded-md transition-colors"
                              data-testid="button-mobile-plumbing-services"
                            >
                              <span>Plumbing Services</span>
                              <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSubsections['Plumbing Services'] ? 'rotate-180' : ''}`} />
                            </button>
                            {mobileExpandedSubsections['Plumbing Services'] && (
                              <div className="pl-4 mt-1 space-y-1">
                                {service.plumbingColumns.column1.map((item) => {
                                  const Icon = item.icon;
                                  return (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="flex items-center gap-3 px-4 py-2 text-sm hover-elevate rounded-md transition-colors"
                                      data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    >
                                      <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                                      <span>{item.name}</span>
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                          {/* Drain & Sewer Services Subsection */}
                          <div>
                            <button
                              onClick={() => toggleMobileSubsection('Drain & Sewer Services')}
                              className="w-full text-left flex items-center justify-between text-base font-medium hover-elevate px-4 py-2 rounded-md transition-colors"
                              data-testid="button-mobile-drain-sewer-services"
                            >
                              <span>Drain & Sewer Services</span>
                              <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSubsections['Drain & Sewer Services'] ? 'rotate-180' : ''}`} />
                            </button>
                            {mobileExpandedSubsections['Drain & Sewer Services'] && (
                              <div className="pl-4 mt-1 space-y-1">
                                {service.plumbingColumns.column2.map((item) => {
                                  const Icon = item.icon;
                                  return (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="flex items-center gap-3 px-4 py-2 text-sm hover-elevate rounded-md transition-colors"
                                      data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    >
                                      <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                                      <span>{item.name}</span>
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      ) : mobileExpandedSections[service.name] && service.hasColumns && service.roofingColumns ? (
                        <div className="pl-6 mt-2 space-y-1">
                          {[...service.roofingColumns.column1, ...service.roofingColumns.column2, ...service.roofingColumns.column3].map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-4 py-2 text-base hover-elevate rounded-md transition-colors"
                                data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>{item.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      ) : mobileExpandedSections[service.name] && service.hasColumns && service.solarColumns ? (
                        <div className="pl-6 mt-2 space-y-1">
                          {[...service.solarColumns.column1, ...service.solarColumns.column2].map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-4 py-2 text-base hover-elevate rounded-md transition-colors"
                                data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>{item.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      ) : mobileExpandedSections[service.name] && service.hasColumns && service.electricalColumns ? (
                        <div className="pl-6 mt-2 space-y-1">
                          {[...service.electricalColumns.column1, ...service.electricalColumns.column2].map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-4 py-2 text-base hover-elevate rounded-md transition-colors"
                                data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>{item.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
                  ))}
                  {additionalNavItems.map((item) => (
                    <div key={item.name}>
                      <button
                        onClick={() => toggleMobileSection(item.name)}
                        className="w-full text-left flex items-center justify-between text-lg font-medium hover-elevate px-4 py-3 rounded-md transition-colors"
                        data-testid={`button-mobile-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSections[item.name] ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileExpandedSections[item.name] && item.hasColumns && item.infoColumns && (
                        <div className="pl-6 mt-2 space-y-2">
                          {/* Column 1 items */}
                          {item.infoColumns.column1.map((navItem) => {
                            const Icon = navItem.icon;
                            return (
                              <div key={navItem.name} className="space-y-1">
                                <Link
                                  href={navItem.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center gap-3 px-4 py-2 text-base hover-elevate rounded-md transition-colors"
                                  data-testid={`link-mobile-${navItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                >
                                  <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                                  <span>{navItem.name}</span>
                                </Link>
                                {navItem.subItems && (
                                  <div className="pl-8 space-y-1">
                                    {navItem.subItems.map((subItem) => {
                                      const SubIcon = subItem.icon;
                                      return (
                                        <Link
                                          key={subItem.name}
                                          href={subItem.href}
                                          onClick={() => setMobileMenuOpen(false)}
                                          className="flex items-center gap-2 px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground hover-elevate rounded-md transition-colors"
                                          data-testid={`link-mobile-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                        >
                                          <SubIcon className="w-3 h-3 flex-shrink-0" />
                                          <span>{subItem.name}</span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                          {/* Column 2 items - Why Tucson */}
                          {item.infoColumns.column2.map((navItem) => (
                            <div key={navItem.name} className="space-y-1">
                              <div className="px-4 py-1 text-sm font-bold text-yellow-600">
                                {navItem.name}
                              </div>
                              {navItem.subItems && (
                                <div className="pl-4 space-y-1">
                                  {navItem.subItems.map((subItem) => {
                                    const SubIcon = subItem.icon;
                                    return (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center gap-2 px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground hover-elevate rounded-md transition-colors"
                                        data-testid={`link-mobile-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                      >
                                        <SubIcon className="w-3 h-3 flex-shrink-0" />
                                        <span>{subItem.name}</span>
                                      </Link>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          ))}
                          {/* Column 3 & 4 items - Areas We Serve + Resources */}
                          {(() => {
                            const allItems = [...item.infoColumns.column3, ...item.infoColumns.column4];
                            const areasWeServeItems = allItems.filter(navItem => navItem.name.includes("Areas We Serve"));
                            const otherItems = allItems.filter(navItem => !navItem.name.includes("Areas We Serve"));
                            
                            return (
                              <>
                                {/* Single Areas We Serve collapsible */}
                                {areasWeServeItems.length > 0 && (
                                  <div className="space-y-1">
                                    <button
                                      onClick={() => setMobileAreasServedExpanded(!mobileAreasServedExpanded)}
                                      className="w-full flex items-center justify-between px-4 py-1 text-sm font-bold text-yellow-600 hover-elevate rounded-md transition-colors"
                                      data-testid="button-mobile-areas-served-toggle"
                                    >
                                      <span>Areas We Serve</span>
                                      <ChevronDown className={`w-3 h-3 transition-transform ${mobileAreasServedExpanded ? 'rotate-180' : ''}`} />
                                    </button>
                                    {mobileAreasServedExpanded && (
                                      <div className="pl-4 space-y-1">
                                        {areasWeServeItems.flatMap(navItem => navItem.subItems || []).map((subItem: any) => {
                                          const SubIcon = subItem.icon;
                                          return (
                                            <div key={subItem.name}>
                                              <Link
                                                href={subItem.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium hover:text-foreground hover-elevate rounded-md transition-colors"
                                                data-testid={`link-mobile-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                              >
                                                <SubIcon className="w-3 h-3 flex-shrink-0" />
                                                <span>{subItem.name}</span>
                                              </Link>
                                              {subItem.subItems && (
                                                <div className="pl-6 space-y-0.5">
                                                  {subItem.subItems.map((subSubItem: any) => {
                                                    const SubSubIcon = subSubItem.icon;
                                                    return (
                                                      <Link
                                                        key={subSubItem.name}
                                                        href={subSubItem.href}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        className="flex items-center gap-2 px-2 py-1 text-xs text-muted-foreground hover:text-foreground hover-elevate rounded-md transition-colors"
                                                        data-testid={`link-mobile-${subSubItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                                      >
                                                        <SubSubIcon className="w-2.5 h-2.5 flex-shrink-0" />
                                                        <span>{subSubItem.name}</span>
                                                      </Link>
                                                    );
                                                  })}
                                                </div>
                                              )}
                                            </div>
                                          );
                                        })}
                                      </div>
                                    )}
                                  </div>
                                )}
                                {/* Other items (Resources, etc.) */}
                                {otherItems.map((navItem) => (
                                  <div key={navItem.name} className="space-y-1">
                                    <div className="px-4 py-1 text-sm font-bold text-yellow-600">
                                      {navItem.name}
                                    </div>
                                    {navItem.subItems && (
                                      <div className="pl-4 space-y-1">
                                        {navItem.subItems.map((subItem) => {
                                          const SubIcon = subItem.icon;
                                          return (
                                            <Link
                                              key={subItem.name}
                                              href={subItem.href}
                                              onClick={() => setMobileMenuOpen(false)}
                                              className="flex items-center gap-2 px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground hover-elevate rounded-md transition-colors"
                                              data-testid={`link-mobile-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                            >
                                              <SubIcon className="w-3 h-3 flex-shrink-0" />
                                              <span>{subItem.name}</span>
                                            </Link>
                                          );
                                        })}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </>
                            );
                          })()}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="border-t border-border my-4" />
                  <a
                    href="tel:+15203332665"
                    className="flex items-center gap-2 text-lg font-semibold hover-elevate px-4 py-3 rounded-md transition-colors"
                    data-testid="link-mobile-phone"
                  >
                    <Phone className="w-5 h-5" />
                    (520) 333-2665
                  </a>
                  <SchedulerEmbed
                    triggerText="Schedule Service"
                    variant="default"
                    size="lg"
                    className="w-full"
                    data-testid="button-schedule-mobile"
                  />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
