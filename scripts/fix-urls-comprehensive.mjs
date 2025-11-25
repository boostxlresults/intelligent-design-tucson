import fs from 'fs';
import path from 'path';

// URL corrections mapping: what was wrong -> what it should be
const urlCorrections = {
  // Service pages that need URL correction (were linked incorrectly)
  '/services/furnaces': '/services/furnaces-tucson',
  '/services/solar-ac': '/services/solar-a-c',
  '/services/air-quality': '/services/indoor-air-quality-tucson',
  '/services/hvac-tucson-plans': '/services/hvac-tucson',
  '/services/hybrid-water-heaters-tucson': '/services/hybrid-water-heaters',
  '/services/metal-roofs-tucson': '/services/metal-roofs',
  '/services/generac-installation-green-valley': '/services/generac-installation',
  '/services/generac-repair-green-valley': '/services/generac-repair',
  '/services/tankless-water-heater-installation': '/services/water-heater-installation',
  
  // Standalone pages incorrectly under /services/
  '/services/new-home-buyer-offer': '/new-homebuyer-offer',
  '/services/realtor-offer': '/realtors-offer',
  '/services/realtors-offer': '/realtors-offer',
  '/services/recent-projects': '/recent-projects',
  '/services/knowledgehub': '/knowledge-hub',
  '/services/knowledge-hub': '/knowledge-hub',
  '/services/family-protection-plans': '/family-protection-plans',
  '/services/guarantees': '/guarantees',
  '/services/guarantee': '/guarantees',
  '/services/financing': '/financing',
  
  // Other corrections
  '/services/hvac': '/services/hvac-tucson',
  '/services/solar': '/services/residential-solar-installation',
  '/services/hvac-repair': '/services/ac-repair-tucson',
  '/areas-served': '/service-areas',
  
  // Plumbing neighborhood pages that don't exist - redirect to main plumbing page
  '/services/plumbing-armory-park': '/services/plumbing-tucson',
  '/services/plumbing-flowing-wells': '/services/plumbing-tucson',
  '/services/plumbing-iron-horse': '/services/plumbing-tucson',
  '/services/plumbing-midtown-tucson': '/services/plumbing-tucson',
  '/services/plumbing-rebates-tucson': '/services/plumbing-tucson',
  '/services/plumbing-sam-hughes': '/services/plumbing-tucson',
  '/services/plumbing-south-tucson': '/services/plumbing-tucson',
  
  // Pages without good replacements - these will be converted back to plain text with note
  '/services/about': null,
  '/services/air-sealing': null,
  '/services/attic-insulation': null,
  '/services/battery-storage-tucson': null,
  '/services/duct-inspection-tucson': '/services/duct-services-tucson',
  '/services/duct-services': '/services/duct-services-tucson',
  '/services/insurance-claim-assistance': '/services/residential-roof-repair',
  '/services/irrigation-repair': '/services/leak-detection-tucson',
  '/services/roof-insurance-claims': '/services/residential-roof-repair',
  '/services/preventative-maintenance': '/services/ac-tuneup-tucson',
  '/services/preventative-maintenance-plans': '/services/ac-tuneup-tucson',
};

// Process service data files to restore links with correct URLs
function processServiceDataFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;
  let changes = [];
  
  // For each correction, find plain text that was a link and restore it with correct URL
  for (const [wrongUrl, correctUrl] of Object.entries(urlCorrections)) {
    if (correctUrl === null) continue; // Skip removals
    
    const wrongSlug = wrongUrl.replace('/services/', '');
    
    // Pattern to find the display text that used to be a link
    // Common display texts for various services
    const displayTexts = getDisplayTextsForSlug(wrongSlug);
    
    for (const displayText of displayTexts) {
      // Only replace if it's NOT already a link (plain text that was de-linked)
      // Look for the text NOT surrounded by link syntax
      const escapedText = displayText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      
      // Find plain text that should be a link (not already a link)
      // This is tricky - we need to match text that is NOT inside [link:...|...]
      // For now, let's just fix known patterns in the content
      
      const plainTextPattern = new RegExp(`(?<!\\[link:[^\\]]*\\|)\\b${escapedText}\\b(?![^\\[]*\\])`, 'g');
      
      // Only restore if this text appears as plain text in a context where it makes sense
      // This is conservative to avoid false positives
    }
  }
  
  return { changed: content !== originalContent, changes };
}

// Get likely display texts for a slug
function getDisplayTextsForSlug(slug) {
  const mappings = {
    'furnaces': ['furnaces', 'Furnaces', 'furnace systems', 'Furnace Systems'],
    'solar-ac': ['solar AC', 'Solar AC', 'solar-powered AC', 'solar air conditioning'],
    'solar-a-c': ['solar AC', 'Solar AC', 'solar-powered AC', 'solar air conditioning'],
    'family-protection-plans': ['Family Protection Plan', 'Family Protection Plans', 'protection plan', 'protection plans'],
    'air-quality': ['air quality', 'Air Quality', 'indoor air quality'],
    'hvac-tucson-plans': ['HVAC plans', 'HVAC maintenance plans'],
    'hybrid-water-heaters-tucson': ['hybrid water heaters', 'Hybrid Water Heaters'],
    'metal-roofs-tucson': ['metal roofs', 'Metal Roofs', 'metal roofing'],
    'generac-installation-green-valley': ['Generac installation', 'generator installation'],
    'generac-repair-green-valley': ['Generac repair', 'generator repair'],
    'tankless-water-heater-installation': ['tankless water heater installation', 'tankless installation'],
    'new-home-buyer-offer': ['new homebuyer offer', 'New Homebuyer Offer'],
    'realtor-offer': ['realtor offer', 'Realtor Offer', 'REALTORS offer'],
    'realtors-offer': ['realtor offer', 'Realtor Offer', 'REALTORS offer'],
    'recent-projects': ['recent projects', 'Recent Projects'],
    'knowledgehub': ['knowledge hub', 'Knowledge Hub'],
    'knowledge-hub': ['knowledge hub', 'Knowledge Hub'],
    'preventative-maintenance': ['preventative maintenance', 'preventive maintenance'],
    'preventative-maintenance-plans': ['preventative maintenance plans', 'maintenance plans'],
  };
  
  return mappings[slug] || [slug.replace(/-/g, ' ')];
}

// Fix known broken URLs in app/ and components/
function fixAppFiles() {
  const filesToFix = [
    'app/ac-system-faqs/page.tsx',
    'app/education-library/page.tsx',
    'app/r22-phaseout/page.tsx',
    'app/schedule/page.tsx'
  ];
  
  let totalFixed = 0;
  
  for (const filePath of filesToFix) {
    if (!fs.existsSync(filePath)) continue;
    
    let content = fs.readFileSync(filePath, 'utf-8');
    let originalContent = content;
    
    // Apply corrections
    for (const [wrongUrl, correctUrl] of Object.entries(urlCorrections)) {
      if (correctUrl === null) continue;
      
      // Fix href="wrongUrl" -> href="correctUrl"
      const hrefPattern = new RegExp(`href="${wrongUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g');
      content = content.replace(hrefPattern, `href="${correctUrl}"`);
      
      // Fix to="wrongUrl" -> to="correctUrl"
      const toPattern = new RegExp(`to="${wrongUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g');
      content = content.replace(toPattern, `to="${correctUrl}"`);
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Fixed URLs in ${filePath}`);
      totalFixed++;
    }
  }
  
  return totalFixed;
}

// Fix blog link in service data
function fixBlogLink() {
  const filePath = 'data/pages/services/acrepair.ts';
  if (!fs.existsSync(filePath)) return 0;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Fix the broken blog link
  content = content.replace(
    /\[link:\/blog\/energy-efficiency-tips\|([^\]]+)\]/g,
    '$1'  // Just keep the text for now since that blog post may not exist
  );
  
  fs.writeFileSync(filePath, content, 'utf-8');
  return 1;
}

console.log('=== Fixing URLs in app files ===');
const appFixed = fixAppFiles();
console.log(`Fixed ${appFixed} app files\n`);

console.log('=== Fixing blog link ===');
const blogFixed = fixBlogLink();
console.log(`Fixed ${blogFixed} blog links\n`);

console.log('=== Summary ===');
console.log(`Total files fixed: ${appFixed + blogFixed}`);
