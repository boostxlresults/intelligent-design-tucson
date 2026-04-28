import type { LucideIcon } from 'lucide-react';
import {
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

export interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
  subItems?: NavItem[];
}

export interface ServiceColumns {
  column1: NavItem[];
  column2?: NavItem[];
  column3?: NavItem[];
  column4?: NavItem[];
}

export interface ServiceCategory {
  name: string;
  href: string;
  hasColumns: boolean;
  columns: ServiceColumns;
}

export const acSubItems: ServiceColumns = {
  column1: [
    { name: "AC Repair", href: "/services/ac-repair-tucson", icon: Wrench },
    { name: "AC Service", href: "/services/ac-service-tucson", icon: Settings },
    { name: "AC Installation", href: "/services/ac-installation-tucson", icon: Package },
    { name: "AC Tune-up", href: "/services/ac-tuneup-tucson", icon: Gauge },
    { name: "Ductless Mini Split Repair", href: "/services/ductless-repair-tucson", icon: Wrench },
    { name: "Ductless Mini Split Installation", href: "/services/ductless-installation-tucson", icon: Package },
  ],
  column2: [
    { name: "Duct Cleaning", href: "/services/duct-cleaning-tucson", icon: Wind },
    { name: "Duct Repair", href: "/services/duct-repair-tucson", icon: Wrench },
    { name: "Duct Installation", href: "/services/duct-installation-tucson", icon: Package },
    { name: "Duct Sealing", href: "/services/duct-sealing-tucson", icon: Shield },
    { name: "Indoor Air Quality / Humidifiers", href: "/services/indoor-air-quality-tucson", icon: Droplets },
  ],
  column3: [
    { name: "Smart Thermostat Installation", href: "/services/smart-thermostat-installation-tucson", icon: Thermometer },
    { name: "SmartAC Monitoring", href: "/services/smartac-tucson", icon: Radio },
    { name: "Solar AC", href: "/services/solar-ac-tucson", icon: Sun },
  ]
};

export const heatingSubItems: ServiceColumns = {
  column1: [
    { name: "Heater Repair", href: "/services/heater-repair-tucson", icon: Wrench },
    { name: "Heater Service", href: "/services/heater-service-tucson", icon: Settings },
    { name: "Heater Installation", href: "/services/heater-installation-tucson", icon: Package },
  ],
  column2: [
    { name: "Heater Tune-Up", href: "/services/heater-tuneup-tucson", icon: Gauge },
    { name: "Heat Pumps", href: "/services/heat-pumps-tucson", icon: Zap },
    { name: "Furnaces", href: "/services/furnaces-tucson", icon: Flame },
  ]
};

export const plumbingSubItems: ServiceColumns = {
  column1: [
    { name: "Plumbing Repair & Installation", href: "/services/plumbing-tucson", icon: Wrench },
    { name: "Brita PRO® Water Filtration Systems", href: "/services/water-filtration", icon: Filter },
    { name: "Water Heaters", href: "/services/water-heaters", icon: Flame },
    { name: "Water Heater Repair", href: "/services/water-heater-repair", icon: AlertCircle },
    { name: "Water Heater Installation", href: "/services/water-heater-installation", icon: Package },
    { name: "Hybrid Water Heater Services", href: "/services/hybrid-water-heaters", icon: Zap },
    { name: "Water Heater Flush", href: "/services/water-heater-flush", icon: Waves },
    { name: "Tankless Water Heaters", href: "/services/tankless-water-heaters", icon: Zap },
    { name: "Plumbing Maintenance", href: "/services/plumbing-maintenance", icon: Gauge },
    { name: "Sink Repair & Installation", href: "/services/sink-repair-installation", icon: CircleDot },
    { name: "Bidet Installation Tucson", href: "/services/bidet-installation", icon: Bath },
    { name: "Repipe Specialist", href: "/services/repipe-tucson", icon: Wrench },
  ],
  column2: [
    { name: "Drain Clearing Tucson", href: "/services/drain-clearing", icon: Waves },
    { name: "$28.88 Drain Clearing Special", href: "/drain-clearing-special", icon: DollarSign },
    { name: "Rooter Special", href: "/services/rooter-special", icon: Wind },
    { name: "Leak Detection", href: "/services/leak-detection", icon: Search },
    { name: "Water Leak Repair", href: "/services/water-leak-repair", icon: Droplets },
    { name: "Sewer Line Repair", href: "/services/sewer-line-repair", icon: Wrench },
    { name: "Sewer Camera Inspection", href: "/services/sewer-camera-inspection", icon: Radio },
    { name: "Trenchless Repair", href: "/services/trenchless-repair", icon: Settings },
    { name: "Water Softeners", href: "/services/water-softeners", icon: Droplets },
    { name: "Septic Tank Repair", href: "/services/septic-repair", icon: Wrench },
    { name: "Septic Tank Installation", href: "/services/septic-tank-installation", icon: Package },
    { name: "Septic Tank Replacement", href: "/services/septic-tank-replacement", icon: Settings },
    { name: "Septic Permitting", href: "/services/septic-permitting", icon: Shield },
  ]
};

export const roofingSubItems: ServiceColumns = {
  column1: [
    { name: "Residential Roof Repair", href: "/services/residential-roof-repair", icon: Wrench },
    { name: "Residential Roof Installation", href: "/services/residential-roof-installation", icon: Package },
    { name: "Residential Roof Replacement", href: "/services/residential-roof-replacement", icon: Settings },
    { name: "Residential Roof Coating", href: "/services/residential-roof-coating", icon: Shield },
    { name: "Residential Roof Inspection", href: "/services/residential-roof-inspection", icon: Search },
    { name: "Solar Tubular Lights", href: "/services/solar-tubular-lights", icon: Sun },
    { name: "Skylights", href: "/services/skylights", icon: Lightbulb },
  ],
  column2: [
    { name: "Commercial Roof Repair", href: "/services/commercial-roof-repair", icon: Wrench },
    { name: "Commercial Roof Installation", href: "/services/commercial-roof-installation", icon: Package },
    { name: "Commercial Roof Replacement", href: "/services/commercial-roof-replacement", icon: Settings },
    { name: "Commercial Roof Coating", href: "/services/commercial-roof-coating", icon: Shield },
    { name: "Commercial Roof Inspections", href: "/services/commercial-roof-inspection", icon: Search },
  ],
  column3: [
    { name: "Flat Roofs", href: "/services/flat-roofs", icon: Layers },
    { name: "Shingle Roofs", href: "/services/shingle-roofs", icon: Layers },
    { name: "Tile Roofs", href: "/services/tile-roofs", icon: Layers },
    { name: "Pitched Roofs", href: "/services/pitched-roofs", icon: Home },
    { name: "Metal Roofs", href: "/services/metal-roofs", icon: Layers },
    { name: "ThermalCork Coating", href: "/services/thermalcork-roof-coating", icon: Shield },
  ]
};

export const solarSubItems: ServiceColumns = {
  column1: [
    { name: "Residential Solar Panel Installation", href: "/services/residential-solar-installation", icon: Package },
    { name: "Commercial Solar Panel Installation", href: "/services/commercial-solar-installation", icon: Building2 },
    { name: "Solar Energy Monitoring & Maintenance Plans", href: "/services/solar-maintenance", icon: Gauge },
  ],
  column2: [
    { name: "Home Energy Audit & Consultation", href: "/services/home-energy-audit-tucson", icon: Search },
    { name: "Solar Tax Credits", href: "/services/solar-tax-credits", icon: CircleDot },
    { name: "Solar Panel Costs", href: "/services/solar-panel-costs", icon: Zap },
  ]
};

export const electricalSubItems: ServiceColumns = {
  column1: [
    { name: "Electrical Repair", href: "/services/electrical-repair", icon: Wrench },
    { name: "GENERAC® Home Generator Installation", href: "/services/generac-installation", icon: Package },
    { name: "GENERAC® Home Generator Repair", href: "/services/generac-repair", icon: Settings },
    { name: "Electrical Panel Upgrades", href: "/services/electrical-panel-upgrades", icon: Zap },
    { name: "Home Energy Upgrades", href: "/services/home-energy-upgrades-tucson", icon: Gauge },
  ],
  column2: [
    { name: "Ceiling Fan Installation", href: "/services/ceiling-fan-installation", icon: Wind },
    { name: "Outdoor and Motion Lighting", href: "/services/outdoor-motion-lighting", icon: Lightbulb },
    { name: "Lighting Upgrades", href: "/services/lighting-upgrades", icon: Sun },
    { name: "Circuit Breakers", href: "/services/circuit-breakers", icon: Shield },
    { name: "Outlets & Switches", href: "/services/outlets-switches", icon: CircleDot },
  ]
};

export const serviceCategories = [
  { name: "AC", href: "#ac", columns: acSubItems },
  { name: "Heating", href: "#heating", columns: heatingSubItems },
  { name: "Plumbing", href: "#plumbing", columns: plumbingSubItems },
  { name: "Roofing", href: "#roofing", columns: roofingSubItems },
  { name: "Solar", href: "#solar", columns: solarSubItems },
  { name: "Electrical", href: "#electrical", columns: electricalSubItems },
];

export const serviceAreasData: NavItem[] = [
  { 
    name: "Tucson", 
    href: "/service-areas/tucson", 
    icon: MapPin,
    subItems: [
      { name: "Tucson Estates", href: "/service-areas/tucson-estates", icon: MapPin },
      { name: "Casas Adobes", href: "/service-areas/casas-adobes", icon: MapPin },
      { name: "Tortolita", href: "/service-areas/tortolita", icon: MapPin },
      { name: "Drexel Heights", href: "/service-areas/drexel-heights", icon: MapPin },
    ]
  },
  { name: "Oro Valley", href: "/service-areas/oro-valley", icon: MapPin },
  { 
    name: "Marana", 
    href: "/service-areas/marana", 
    icon: MapPin,
    subItems: [
      { name: "Gladden Farms", href: "/service-areas/gladden-farms", icon: MapPin },
      { name: "Avra Valley", href: "/service-areas/avra-valley", icon: MapPin },
      { name: "Picture Rocks", href: "/service-areas/picture-rocks", icon: MapPin },
    ]
  },
  { name: "Sahuarita", href: "/service-areas/sahuarita", icon: MapPin },
  { name: "Vail", href: "/service-areas/vail", icon: MapPin },
  { name: "Green Valley", href: "/service-areas/green-valley", icon: MapPin },
  { name: "Saddlebrooke / Catalina", href: "/service-areas/saddle-brooke-catalina", icon: MapPin },
  { 
    name: "East Tucson", 
    href: "/service-areas/east-tucson", 
    icon: MapPin,
    subItems: [
      { name: "Catalina Foothills", href: "/service-areas/catalina-foothills", icon: MapPin },
      { name: "Tanque Verde", href: "/service-areas/tanque-verde", icon: MapPin },
      { name: "Rita Ranch", href: "/service-areas/rita-ranch", icon: MapPin },
      { name: "Corona De Tucson", href: "/service-areas/corona-de-tucson", icon: MapPin },
    ]
  },
  { name: "Red Rock / Casa Grande", href: "/service-areas/red-rock-casa-grande", icon: MapPin },
];

export const infoSubItems: ServiceColumns = {
  column1: [
    { name: "About Us", href: "/about", icon: Info },
    { name: "Financing", href: "/financing", icon: DollarSign },
    { name: "Careers", href: "/careers", icon: Users },
    { name: "Family Protection Plans", href: "/family-protection-plans", icon: ShieldCheck },
    { name: "Commercial Maintenance", href: "/services/commercial-maintenance", icon: Building2 },
  ],
  column2: [
    {
      name: "Why Tucson Chooses Intelligent Design",
      href: "/about",
      icon: Star,
      subItems: [
        { name: "Customer Reviews", href: "/customer-reviews", icon: Star },
        { name: "Video Testimonials", href: "/video-testimonials", icon: Video },
        { name: "Recent Projects", href: "/recent-projects", icon: CheckCircle },
        { name: "Guarantees", href: "/guarantees", icon: ShieldCheck },
        { name: "New Homebuyer Offer", href: "/new-homebuyer-offer", icon: Gift },
        { name: "REALTORS® Offer", href: "/realtors-offer", icon: Home },
        { name: "Special Offers", href: "/special-offers", icon: Gift },
      ]
    },
  ],
  column3: [
    {
      name: "Areas We Serve",
      href: "/service-areas",
      icon: MapPin,
      subItems: serviceAreasData
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
        { name: "Intelligent Design Knowledge Hub", href: "/knowledge-hub", icon: BookOpen },
      ]
    },
  ],
};

export function getPopoverWidth(categoryName: string): string {
  switch (categoryName) {
    case 'AC':
    case 'Roofing':
      return 'w-[820px]';
    case 'Heating':
    case 'Solar':
    case 'Electrical':
      return 'w-[540px]';
    case 'Plumbing':
      return 'w-[680px]';
    case 'Info':
      return 'w-[1000px]';
    default:
      return 'w-[280px]';
  }
}

export function getGridCols(columns: ServiceColumns): string {
  if (columns.column4) return 'grid-cols-4';
  if (columns.column3) return 'grid-cols-3';
  if (columns.column2) return 'grid-cols-2';
  return 'grid-cols-1';
}
