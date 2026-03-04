export interface ProjectReview {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
  serviceType: string;
  projectDescription: string;
}

const SERVICE_TYPES = ['HVAC', 'Plumbing', 'Solar', 'Electrical', 'Roofing', 'Drain & Sewer'] as const;

const locationProjectReviews: Record<string, ProjectReview[]> = {
  "tucson": [
    { author: "Carlos M.", rating: 5, reviewBody: "Complete AC replacement in our midtown Tucson home. The crew removed our old 3-ton unit and installed a high-efficiency Lennox system. Our energy bills dropped by 35% the first month. Installation was clean and professional.", datePublished: "2025-01-15", serviceType: "HVAC", projectDescription: "Central AC replacement with high-efficiency Lennox system in midtown Tucson" },
    { author: "Sandra H.", rating: 5, reviewBody: "Emergency plumbing repair after a pipe burst under our kitchen sink. Technician arrived within 90 minutes, identified the corroded copper fitting, and replaced the entire section. No water damage thanks to quick response.", datePublished: "2025-02-08", serviceType: "Plumbing", projectDescription: "Emergency copper pipe repair and replacement in central Tucson kitchen" },
    { author: "Derek J.", rating: 5, reviewBody: "14-panel solar installation on our south-facing roof. System is generating more power than expected. The team handled all permits and HOA approvals. We're now producing 95% of our electricity needs.", datePublished: "2024-11-20", serviceType: "Solar", projectDescription: "14-panel residential solar installation with permit coordination in Tucson" },
    { author: "Rachel T.", rating: 5, reviewBody: "Electrical panel upgrade from 100 to 200 amps for our older Tucson home. Inspector praised the quality of work. We can now run our new AC and EV charger without any issues.", datePublished: "2024-12-05", serviceType: "Electrical", projectDescription: "200-amp electrical panel upgrade for older Tucson residence" },
    { author: "Brian K.", rating: 5, reviewBody: "Full roof replacement after monsoon damage. TPO membrane on flat sections and architectural shingles on pitched areas. Zero leaks through two monsoon seasons. Exceptional craftsmanship.", datePublished: "2025-01-22", serviceType: "Roofing", projectDescription: "Complete roof replacement with TPO membrane and architectural shingles in Tucson" },
    { author: "Angela F.", rating: 5, reviewBody: "Main sewer line cleaning and camera inspection revealed tree root intrusion. They cleared the blockage and installed a root barrier. Drainage has been perfect since the repair.", datePublished: "2024-10-30", serviceType: "Drain & Sewer", projectDescription: "Sewer line root removal and root barrier installation in Tucson" },
  ],
  "oro-valley": [
    { author: "Jim P.", rating: 5, reviewBody: "Ductless mini-split installation for our Oro Valley casita. Perfect temperature control without running ductwork. The unit is whisper-quiet and the wall mount looks clean and modern.", datePublished: "2025-01-10", serviceType: "HVAC", projectDescription: "Ductless mini-split AC installation for casita in Oro Valley" },
    { author: "Diane L.", rating: 5, reviewBody: "Tankless water heater upgrade in our Rancho Vistoso home. Endless hot water and our gas bill decreased noticeably. Installation was completed in one day with minimal disruption.", datePublished: "2024-12-18", serviceType: "Plumbing", projectDescription: "Tankless water heater installation in Rancho Vistoso, Oro Valley" },
    { author: "Steve R.", rating: 5, reviewBody: "20-panel solar system on our Oro Valley home. Excellent production even during winter months. The monitoring app shows real-time generation. Already seeing significant utility savings.", datePublished: "2025-02-01", serviceType: "Solar", projectDescription: "20-panel solar energy system installation in Oro Valley" },
  ],
  "marana": [
    { author: "Tyler W.", rating: 5, reviewBody: "New construction HVAC installation for our Gladden Farms home. They sized the system perfectly for our floor plan. Even cooling throughout every room, even during 115-degree days.", datePublished: "2025-01-25", serviceType: "HVAC", projectDescription: "New construction HVAC system design and installation in Gladden Farms, Marana" },
    { author: "Nicole D.", rating: 5, reviewBody: "Whole-house repiping in our Continental Ranch home. Replaced all the old polybutylene pipes with PEX. Water pressure improved dramatically and we have peace of mind.", datePublished: "2024-11-12", serviceType: "Plumbing", projectDescription: "Whole-house PEX repiping in Continental Ranch, Marana" },
    { author: "Greg A.", rating: 5, reviewBody: "New roof installation on our Dove Mountain home. The crew protected all our landscaping and desert plants. Beautiful tile roof that matches the desert aesthetic perfectly.", datePublished: "2024-12-20", serviceType: "Roofing", projectDescription: "Tile roof installation on Dove Mountain home in Marana" },
  ],
  "sahuarita": [
    { author: "Laura B.", rating: 5, reviewBody: "Heat pump installation replaced our old AC and gas furnace with one efficient system. Heating and cooling from a single unit. Energy savings have been remarkable in Sahuarita's climate.", datePublished: "2025-01-05", serviceType: "HVAC", projectDescription: "Heat pump system installation replacing AC and furnace in Sahuarita" },
    { author: "Mark S.", rating: 5, reviewBody: "Slab leak detection and repair in our Rancho Sahuarita home. They used electronic detection to pinpoint the leak without tearing up our floors. Minimally invasive repair saved our tile.", datePublished: "2024-11-28", serviceType: "Plumbing", projectDescription: "Electronic slab leak detection and repair in Rancho Sahuarita" },
    { author: "Karen T.", rating: 5, reviewBody: "Solar panel installation with battery backup. During last summer's grid outages, our home stayed powered and cool. Best investment we've made for our Sahuarita home.", datePublished: "2024-12-15", serviceType: "Solar", projectDescription: "Solar panel system with battery backup installation in Sahuarita" },
  ],
  "vail": [
    { author: "Dan M.", rating: 5, reviewBody: "Complete HVAC system replacement in our Vail home. Upgraded from a 14 SEER to a 20 SEER variable-speed system. The difference in comfort and noise level is incredible.", datePublished: "2025-02-10", serviceType: "HVAC", projectDescription: "20 SEER variable-speed HVAC system upgrade in Vail" },
    { author: "Jessica C.", rating: 5, reviewBody: "Water softener and whole-house filtration installation. The hard water in Vail was destroying our fixtures. Water quality is now excellent and our appliances will last much longer.", datePublished: "2024-11-05", serviceType: "Plumbing", projectDescription: "Water softener and whole-house filtration system in Vail" },
  ],
  "green-valley": [
    { author: "Robert N.", rating: 5, reviewBody: "AC replacement in our Green Valley retirement home. The technician was patient in explaining all options. New system keeps our home at a perfect 74 degrees even when it's 112 outside.", datePublished: "2025-01-18", serviceType: "HVAC", projectDescription: "High-efficiency AC replacement for Green Valley retirement home" },
    { author: "Carol W.", rating: 5, reviewBody: "Complete electrical rewiring of our 1980s Green Valley home. Brought everything up to current code with GFCI outlets and arc-fault breakers. Feel much safer now.", datePublished: "2024-12-22", serviceType: "Electrical", projectDescription: "Complete home electrical rewiring with code upgrades in Green Valley" },
    { author: "Harold P.", rating: 5, reviewBody: "Roof coating application on our flat-roof Green Valley home. Reflective coating reduced our attic temperature by 20 degrees. AC runs much less now. Great investment.", datePublished: "2024-10-15", serviceType: "Roofing", projectDescription: "Reflective roof coating application for flat-roof home in Green Valley" },
  ],
  "catalina-foothills": [
    { author: "Elizabeth M.", rating: 5, reviewBody: "Zoned HVAC system for our large Catalina Foothills home. Different temperatures in different rooms finally possible. The smart thermostat integration is a game changer.", datePublished: "2025-01-30", serviceType: "HVAC", projectDescription: "Multi-zone HVAC system with smart thermostat in Catalina Foothills" },
    { author: "William H.", rating: 5, reviewBody: "Gas line installation for our new outdoor kitchen. Permits, trenching, and connection all handled professionally. Now enjoying our built-in grill and fire pit year-round.", datePublished: "2024-11-15", serviceType: "Plumbing", projectDescription: "Gas line installation for outdoor kitchen in Catalina Foothills" },
  ],
  "tanque-verde": [
    { author: "Susan R.", rating: 5, reviewBody: "Whole-house surge protection and EV charger installation. Professional electrician handled both in one visit. Our electronics are protected and our Tesla charges overnight.", datePublished: "2025-02-05", serviceType: "Electrical", projectDescription: "Whole-house surge protection and EV charger installation in Tanque Verde" },
    { author: "Michael B.", rating: 5, reviewBody: "AC maintenance and duct cleaning revealed significant duct leaks. They sealed everything and our AC efficiency improved by 30%. Home cools evenly now instead of hot spots.", datePublished: "2024-12-10", serviceType: "HVAC", projectDescription: "Duct sealing and AC maintenance improving efficiency in Tanque Verde" },
  ],
  "casas-adobes": [
    { author: "Nancy K.", rating: 5, reviewBody: "Emergency AC repair during a July heatwave. Technician diagnosed a failed compressor and had a replacement same day. Family was cool again by evening. True professionals.", datePublished: "2024-07-20", serviceType: "HVAC", projectDescription: "Same-day emergency AC compressor replacement in Casas Adobes" },
    { author: "Paul D.", rating: 5, reviewBody: "Bathroom remodel plumbing including new shower valve, toilet, and vanity connections. Everything lined up perfectly with our contractor's tile work. No leaks, no callbacks.", datePublished: "2024-11-08", serviceType: "Plumbing", projectDescription: "Complete bathroom remodel plumbing in Casas Adobes" },
  ],
  "east-tucson": [
    { author: "Christina V.", rating: 5, reviewBody: "Evaporative cooler to refrigerated AC conversion. Best decision for our east Tucson home. Consistent cooling without the humidity. Installation team was knowledgeable and efficient.", datePublished: "2025-01-12", serviceType: "HVAC", projectDescription: "Evaporative cooler to refrigerated AC conversion in east Tucson" },
    { author: "Andrew L.", rating: 5, reviewBody: "Main drain line hydro-jetting cleared years of buildup. Camera inspection showed the line is now clear. Included a maintenance plan to prevent future blockages.", datePublished: "2024-10-25", serviceType: "Drain & Sewer", projectDescription: "Hydro-jetting drain cleaning with camera inspection in east Tucson" },
  ],
  "rita-ranch": [
    { author: "Michelle G.", rating: 5, reviewBody: "Smart thermostat installation and AC tune-up. The Ecobee integrates perfectly with our system. Remote control and energy reports help us optimize our usage in Rita Ranch.", datePublished: "2024-12-01", serviceType: "HVAC", projectDescription: "Smart thermostat installation and AC optimization in Rita Ranch" },
    { author: "Jason T.", rating: 5, reviewBody: "Solar installation on our Rita Ranch home exceeded production estimates. 18 panels generating enough for our entire household including pool pump. Outstanding workmanship.", datePublished: "2025-01-08", serviceType: "Solar", projectDescription: "18-panel solar installation for Rita Ranch home with pool" },
  ],
};

const defaultReviews: ProjectReview[] = [
  { author: "Alex M.", rating: 5, reviewBody: "Professional HVAC service from start to finish. Technician was punctual, diagnosed the issue quickly, and completed the repair same day. Highly recommend for any home comfort needs.", datePublished: "2025-01-20", serviceType: "HVAC", projectDescription: "Same-day HVAC diagnostic and repair service" },
  { author: "Jennifer S.", rating: 5, reviewBody: "Excellent plumbing work. Fixed our water heater and upgraded our bathroom fixtures. Clean, professional, and reasonably priced. Will definitely use again.", datePublished: "2024-12-08", serviceType: "Plumbing", projectDescription: "Water heater repair and bathroom fixture upgrade" },
  { author: "Mike R.", rating: 5, reviewBody: "Roof inspection and repair completed quickly after monsoon damage. Found and fixed issues we didn't even know about. Thorough and trustworthy team.", datePublished: "2024-11-15", serviceType: "Roofing", projectDescription: "Post-monsoon roof inspection and repair" },
];

export function getLocationProjectReviews(locationSlug: string): ProjectReview[] {
  return locationProjectReviews[locationSlug] || defaultReviews;
}

export function getAllServiceTypes(): string[] {
  return [...SERVICE_TYPES];
}
