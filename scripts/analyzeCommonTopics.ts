/**
 * Analyze blog posts to identify common topics for image generation
 * Creates a curated list of 35-40 image themes that cover all 231 posts
 */

import * as fs from 'fs';
import * as path from 'path';

const rootDir = process.cwd();

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
}

interface ImageTheme {
  id: string;
  category: string;
  name: string;
  keywords: string[];
  prompt: string;
  summary: string;
  matchedPosts: string[];
}

// Define 35-40 curated image themes covering all common topics
const imageThemes: Omit<ImageTheme, 'matchedPosts'>[] = [
  // HVAC Category (15 themes)
  { id: 'hvac-ac-repair', category: 'hvac', name: 'AC Repair Service', keywords: ['ac repair', 'air conditioning repair', 'hvac repair', 'fix ac', 'broken ac'], prompt: 'Professional HVAC technician in royal blue uniform with American flag patch repairing residential air conditioning unit in modern Tucson home, tools and diagnostic equipment visible, bright natural lighting, clean professional setting', summary: 'AC repair service Tucson' },
  { id: 'hvac-ac-install', category: 'hvac', name: 'AC Installation', keywords: ['ac installation', 'install ac', 'new ac', 'ac replacement', 'hvac installation'], prompt: 'HVAC technicians in royal blue uniforms installing new modern air conditioning system in Tucson home, equipment and tools visible, professional installation work, bright setting', summary: 'AC installation Tucson home' },
  { id: 'hvac-maintenance', category: 'hvac', name: 'AC Maintenance', keywords: ['ac maintenance', 'tune-up', 'ac service', 'preventive', 'inspection'], prompt: 'Technician in blue uniform performing air conditioning maintenance tune-up in Tucson home, checking filters and components, professional service work, clean modern setting', summary: 'AC maintenance service' },
  { id: 'hvac-heating', category: 'hvac', name: 'Heating Service', keywords: ['heating', 'heater', 'furnace', 'heat pump', 'winter'], prompt: 'HVAC technician servicing residential heating system in Tucson home, blue uniform with flag patch, professional heating repair work, modern equipment', summary: 'Heating service Tucson' },
  { id: 'hvac-emergency', category: 'hvac', name: 'Emergency HVAC', keywords: ['emergency', 'urgent', '24/7', 'immediate', 'breakdown'], prompt: 'HVAC technician responding to emergency service call in Tucson home, blue uniform, urgent professional response, service truck visible, quick action', summary: 'Emergency HVAC service' },
  { id: 'hvac-energy', category: 'hvac', name: 'Energy Efficient HVAC', keywords: ['energy efficient', 'energy savings', 'efficiency', 'seer', 'cost savings'], prompt: 'Modern energy-efficient air conditioning system in Tucson home with technician explaining energy ratings, blue uniform, high-efficiency equipment, professional presentation', summary: 'Energy efficient AC system' },
  { id: 'hvac-airquality', category: 'hvac', name: 'Air Quality', keywords: ['air quality', 'indoor air', 'filtration', 'purification', 'allergens', 'duct cleaning'], prompt: 'HVAC technician installing air quality improvement system in Tucson home, blue uniform, air filtration equipment, clean modern interior, health focus', summary: 'Indoor air quality service' },
  { id: 'hvac-ductwork', category: 'hvac', name: 'Ductwork Service', keywords: ['ductwork', 'duct', 'vents', 'airflow', 'distribution'], prompt: 'Technician inspecting and sealing ductwork in Tucson home attic, blue uniform, professional duct work, modern HVAC system visible', summary: 'Ductwork inspection service' },
  { id: 'hvac-thermostat', category: 'hvac', name: 'Smart Thermostat', keywords: ['thermostat', 'smart thermostat', 'control', 'temperature', 'wifi'], prompt: 'Technician installing modern smart thermostat on wall in Tucson home, blue uniform, digital display visible, clean modern interior, technology focus', summary: 'Smart thermostat installation' },
  { id: 'hvac-commercial', category: 'hvac', name: 'Commercial HVAC', keywords: ['commercial', 'business', 'office', 'industrial'], prompt: 'HVAC technicians servicing large commercial air conditioning system in Tucson business, blue uniforms, professional commercial equipment, large-scale installation', summary: 'Commercial HVAC service' },
  { id: 'hvac-noisy', category: 'hvac', name: 'AC Noise Issues', keywords: ['noise', 'noisy', 'loud', 'sound', 'quiet'], prompt: 'Technician diagnosing noisy air conditioning unit in Tucson home, blue uniform, diagnostic tools, focusing on AC outdoor unit, professional troubleshooting', summary: 'AC noise diagnosis' },
  { id: 'hvac-airflow', category: 'hvac', name: 'Airflow Problems', keywords: ['airflow', 'weak airflow', 'circulation', 'cooling issues', 'not cooling'], prompt: 'HVAC technician checking air vents and airflow in Tucson home, blue uniform, measuring instruments, professional diagnostic work, modern interior', summary: 'Airflow problem diagnosis' },
  { id: 'hvac-refrigerant', category: 'hvac', name: 'Refrigerant Service', keywords: ['refrigerant', 'freon', 'coolant', 'leak', 'charge'], prompt: 'Technician adding refrigerant to AC system in Tucson, blue uniform with flag patch, specialized equipment for refrigerant handling, professional outdoor service', summary: 'Refrigerant service work' },
  { id: 'hvac-upgrade', category: 'hvac', name: 'HVAC System Upgrade', keywords: ['upgrade', 'replace', 'new system', 'modernize'], prompt: 'Side-by-side comparison of old and new HVAC systems in Tucson home with technician, blue uniform, modern efficient equipment, upgrade showcase', summary: 'HVAC system upgrade' },
  { id: 'hvac-seasonal', category: 'hvac', name: 'Seasonal Preparation', keywords: ['seasonal', 'prepare', 'summer', 'spring', 'checklist'], prompt: 'Technician performing seasonal AC preparation in Tucson home, blue uniform, spring maintenance checklist, outdoor unit service, preparation work', summary: 'Seasonal AC preparation' },

  // Solar Category (10 themes)
  { id: 'solar-residential', category: 'solar', name: 'Residential Solar Installation', keywords: ['residential solar', 'home solar', 'rooftop solar', 'solar panels home'], prompt: 'Solar installation crew in blue uniforms installing solar panels on residential roof in sunny Tucson, modern solar array, professional rooftop work, clear blue sky', summary: 'Residential solar installation' },
  { id: 'solar-commercial', category: 'solar', name: 'Commercial Solar', keywords: ['commercial solar', 'business solar', 'industrial solar'], prompt: 'Large-scale commercial solar panel installation on business building in Tucson, blue-uniformed crew, extensive solar array, professional commercial installation', summary: 'Commercial solar installation' },
  { id: 'solar-maintenance', category: 'solar', name: 'Solar Maintenance', keywords: ['solar maintenance', 'solar cleaning', 'solar inspection', 'panel maintenance'], prompt: 'Technician performing maintenance on solar panels on Tucson roof, blue uniform with flag patch, cleaning and inspecting panels, sunny Arizona day', summary: 'Solar panel maintenance' },
  { id: 'solar-battery', category: 'solar', name: 'Solar Battery Storage', keywords: ['battery', 'storage', 'backup', 'powerwall', 'energy storage'], prompt: 'Technician installing solar battery storage system in Tucson home garage, blue uniform, modern battery unit, professional electrical work, energy independence', summary: 'Solar battery installation' },
  { id: 'solar-savings', category: 'solar', name: 'Solar Cost Savings', keywords: ['cost', 'savings', 'roi', 'price', 'investment', 'worth'], prompt: 'Modern solar panels on Tucson home rooftop with beautiful sunset, professional installation, energy savings concept, residential neighborhood visible', summary: 'Solar panel cost savings' },
  { id: 'solar-tax', category: 'solar', name: 'Solar Tax Credits', keywords: ['tax credit', 'incentive', 'rebate', 'itc', 'federal credit'], prompt: 'Beautiful solar installation on Tucson home with financial documents overlay concept, blue sky, professional solar array, investment benefit visualization', summary: 'Solar tax credit benefits' },
  { id: 'solar-audit', category: 'solar', name: 'Home Energy Audit', keywords: ['energy audit', 'assessment', 'evaluation', 'solar assessment'], prompt: 'Energy auditor with tablet examining Tucson home for solar potential, blue uniform, professional assessment, rooftop evaluation, modern technology', summary: 'Home energy audit service' },
  { id: 'solar-hvac', category: 'solar', name: 'Solar-Powered HVAC', keywords: ['solar ac', 'solar hvac', 'solar powered', 'solar cooling'], prompt: 'Solar panels on roof powering modern AC unit in Tucson home, integrated system, blue-uniformed technician, sustainable energy solution, sunny day', summary: 'Solar powered AC system' },
  { id: 'solar-monitoring', category: 'solar', name: 'Solar Monitoring', keywords: ['monitoring', 'tracking', 'performance', 'production', 'app'], prompt: 'Homeowner and technician reviewing solar system performance on tablet in Tucson, blue uniform, monitoring dashboard visible, modern solar panels background', summary: 'Solar system monitoring' },
  { id: 'solar-repair', category: 'solar', name: 'Solar Repair', keywords: ['solar repair', 'solar fix', 'panel repair', 'inverter repair'], prompt: 'Technician repairing solar panel system on Tucson roof, blue uniform with flag patch, diagnostic equipment, professional solar repair work, sunny day', summary: 'Solar panel repair service' },

  // Plumbing Category (10 themes)
  { id: 'plumbing-drain', category: 'plumbing', name: 'Drain Cleaning', keywords: ['drain', 'clog', 'unclog', 'drain cleaning', 'blocked drain'], prompt: 'Plumber in blue uniform using professional drain cleaning equipment in Tucson home, snake tool visible, sink or drain work, clean modern bathroom', summary: 'Drain cleaning service' },
  { id: 'plumbing-waterheater', category: 'plumbing', name: 'Water Heater Service', keywords: ['water heater', 'hot water', 'tankless', 'water heating'], prompt: 'Plumber servicing residential water heater in Tucson home garage, blue uniform with flag patch, modern tank or tankless unit, professional installation', summary: 'Water heater repair service' },
  { id: 'plumbing-leak', category: 'plumbing', name: 'Leak Detection', keywords: ['leak', 'leak detection', 'water leak', 'pipe leak', 'leaking'], prompt: 'Plumber using advanced leak detection equipment in Tucson home, blue uniform, thermal imaging or moisture meter, professional diagnostic technology', summary: 'Leak detection service' },
  { id: 'plumbing-repipe', category: 'plumbing', name: 'Repiping Service', keywords: ['repipe', 'repiping', 'pipe replacement', 'new pipes'], prompt: 'Plumbers installing new copper or PEX piping in Tucson home, blue uniforms, exposed plumbing work, professional repiping project, modern materials', summary: 'Home repiping service' },
  { id: 'plumbing-emergency', category: 'plumbing', name: 'Emergency Plumbing', keywords: ['emergency', 'urgent', 'plumbing emergency', '24/7'], prompt: 'Plumber responding to emergency call in Tucson home, blue uniform, urgent professional response, plumbing tools ready, quick action service', summary: 'Emergency plumbing service' },
  { id: 'plumbing-sewer', category: 'plumbing', name: 'Sewer Service', keywords: ['sewer', 'sewer line', 'main line', 'sewer repair'], prompt: 'Plumber using sewer camera inspection equipment in Tucson, blue uniform, professional sewer line diagnostic, underground pipe inspection technology', summary: 'Sewer line inspection' },
  { id: 'plumbing-fixture', category: 'plumbing', name: 'Fixture Installation', keywords: ['fixture', 'toilet', 'sink', 'faucet', 'shower', 'tub'], prompt: 'Plumber installing modern bathroom fixture in Tucson home, blue uniform with flag patch, new faucet or toilet, clean bathroom, professional installation', summary: 'Fixture installation service' },
  { id: 'plumbing-water-quality', category: 'plumbing', name: 'Water Filtration', keywords: ['water filter', 'filtration', 'purification', 'water softener', 'water quality'], prompt: 'Plumber installing whole-home water filtration system in Tucson, blue uniform, modern filtration equipment, clean installation, water quality focus', summary: 'Water filtration installation' },
  { id: 'plumbing-gas', category: 'plumbing', name: 'Gas Line Service', keywords: ['gas line', 'gas', 'natural gas', 'gas piping'], prompt: 'Licensed plumber working on gas line installation in Tucson home, blue uniform, professional gas pipe work, safety focus, outdoor meter visible', summary: 'Gas line service' },
  { id: 'plumbing-backflow', category: 'plumbing', name: 'Backflow Prevention', keywords: ['backflow', 'prevention', 'testing', 'backflow preventer'], prompt: 'Plumber testing backflow prevention device in Tucson, blue uniform with flag patch, professional testing equipment, outdoor installation, safety compliance', summary: 'Backflow prevention testing' },

  // Home Tips Category (6 themes)
  { id: 'tips-energy', category: 'home-tips', name: 'Energy Saving Tips', keywords: ['energy', 'save energy', 'efficiency', 'reduce costs', 'lower bills'], prompt: 'Modern energy-efficient Tucson home interior showing smart thermostat, LED lights, and efficient appliances, clean contemporary design, energy savings concept', summary: 'Energy saving tips' },
  { id: 'tips-maintenance', category: 'home-tips', name: 'Home Maintenance', keywords: ['maintenance', 'care', 'upkeep', 'prevent', 'checklist'], prompt: 'Homeowner performing routine home maintenance tasks in Tucson, modern interior, maintenance checklist visible, preventive care, organized home care', summary: 'Home maintenance tips' },
  { id: 'tips-seasonal', category: 'home-tips', name: 'Seasonal Home Prep', keywords: ['seasonal', 'prepare', 'summer', 'winter', 'monsoon'], prompt: 'Tucson home prepared for seasonal changes, weatherproofing visible, modern exterior, seasonal preparation, Arizona climate focus, professional appearance', summary: 'Seasonal home preparation' },
  { id: 'tips-diy', category: 'home-tips', name: 'DIY vs Professional', keywords: ['diy', 'yourself', 'professional', 'when to call'], prompt: 'Split scene showing DIY home project vs professional technician in blue uniform in Tucson home, comparison concept, decision-making visualization', summary: 'DIY vs professional help' },
  { id: 'tips-water', category: 'home-tips', name: 'Water Conservation', keywords: ['water', 'conservation', 'save water', 'drought', 'arizona water'], prompt: 'Water-efficient fixtures and systems in modern Tucson home, conservation technology, desert landscaping visible through window, sustainability focus', summary: 'Water conservation tips' },
  { id: 'tips-comfort', category: 'home-tips', name: 'Home Comfort', keywords: ['comfort', 'indoor comfort', 'temperature', 'air quality', 'healthy home'], prompt: 'Comfortable modern Tucson home interior with family, good air quality and temperature control visible, cozy professional setting, healthy home environment', summary: 'Home comfort improvement' },

  // Roofing Category (2 themes)
  { id: 'roofing-repair', category: 'roofing', name: 'Roof Repair', keywords: ['roof repair', 'roofing', 'leak repair', 'roof damage'], prompt: 'Roofing crew in blue uniforms repairing residential roof in Tucson, professional roof work, safety equipment, tile or shingle repair, sunny Arizona day', summary: 'Roof repair Tucson' },
  { id: 'roofing-install', category: 'roofing', name: 'Roof Installation', keywords: ['roof installation', 'new roof', 'roof replacement', 'reroof'], prompt: 'Professional roofing team installing new roof on Tucson home, blue uniforms with flag patches, modern roofing materials, large-scale installation project', summary: 'Roof installation service' },

  // Electrical Category (2 themes)
  { id: 'electrical-service', category: 'electrical', name: 'Electrical Service', keywords: ['electrical', 'electrician', 'wiring', 'electric'], prompt: 'Licensed electrician in blue uniform with flag patch working on electrical panel in Tucson home, professional electrical work, modern circuit breaker, safety focus', summary: 'Electrical service work' },
  { id: 'electrical-generator', category: 'electrical', name: 'Generator Installation', keywords: ['generator', 'generac', 'backup power', 'standby'], prompt: 'Electrician installing GENERAC backup generator at Tucson home, blue uniform, professional generator installation, modern standby power unit, outdoor installation', summary: 'Generator installation service' },
];

/**
 * Match blog posts to image themes based on keywords
 */
function matchPostToTheme(post: BlogPost, themes: Omit<ImageTheme, 'matchedPosts'>[]): string {
  const titleLower = post.title.toLowerCase();
  const descLower = post.description.toLowerCase();
  const tagsLower = post.tags.join(' ').toLowerCase();
  const combinedText = `${titleLower} ${descLower} ${tagsLower}`;
  
  // Filter themes by category first
  const categoryThemes = themes.filter(t => t.category === post.category);
  
  // Score each theme based on keyword matches
  let bestMatch = categoryThemes[0];
  let bestScore = 0;
  
  for (const theme of categoryThemes) {
    let score = 0;
    for (const keyword of theme.keywords) {
      if (combinedText.includes(keyword)) {
        score += keyword.length; // Longer keywords get more weight
      }
    }
    
    if (score > bestScore) {
      bestScore = score;
      bestMatch = theme;
    }
  }
  
  return bestMatch.id;
}

/**
 * Main execution
 */
async function main() {
  console.log('🔍 Analyzing Blog Posts for Common Topics');
  console.log('==========================================\n');
  
  // Read blog index
  const blogIndexPath = path.join(rootDir, 'client', 'src', 'data', 'blogIndex.json');
  const blogIndex = JSON.parse(fs.readFileSync(blogIndexPath, 'utf-8'));
  
  console.log(`📚 Analyzing ${blogIndex.posts.length} blog posts...`);
  console.log(`🎨 Defined ${imageThemes.length} unique image themes\n`);
  
  // Match posts to themes
  const themesWithMatches: ImageTheme[] = imageThemes.map(theme => ({
    ...theme,
    matchedPosts: []
  }));
  
  const postToThemeMap: Record<string, string> = {};
  
  for (const post of blogIndex.posts) {
    const themeId = matchPostToTheme(post, imageThemes);
    postToThemeMap[post.slug] = themeId;
    
    const theme = themesWithMatches.find(t => t.id === themeId);
    if (theme) {
      theme.matchedPosts.push(post.slug);
    }
  }
  
  // Display results
  console.log('📊 Theme Distribution:');
  console.log('======================\n');
  
  const byCategory: Record<string, ImageTheme[]> = {};
  for (const theme of themesWithMatches) {
    if (!byCategory[theme.category]) {
      byCategory[theme.category] = [];
    }
    byCategory[theme.category].push(theme);
  }
  
  for (const [category, themes] of Object.entries(byCategory)) {
    console.log(`\n📁 ${category.toUpperCase()}`);
    console.log(`   ${themes.length} image themes`);
    for (const theme of themes) {
      console.log(`   - ${theme.name}: ${theme.matchedPosts.length} posts`);
    }
  }
  
  // Save mapping for later use
  const outputData = {
    themes: themesWithMatches,
    postToThemeMap
  };
  
  const outputPath = path.join(rootDir, 'scripts', 'imageThemeMapping.json');
  fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));
  
  console.log(`\n\n✅ Analysis complete!`);
  console.log(`📝 Saved mapping to: scripts/imageThemeMapping.json`);
  console.log(`\n🎨 Next step: Generate ${imageThemes.length} AI images using the prompts defined above`);
}

main().catch(console.error);
