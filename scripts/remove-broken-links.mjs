import fs from 'fs';
import path from 'path';

const brokenLinks = [
  'about',
  'air-quality',
  'air-sealing',
  'attic-insulation',
  'battery-storage-tucson',
  'duct-inspection-tucson',
  'duct-services',
  'family-protection-plans',
  'furnaces',
  'generac-installation-green-valley',
  'generac-repair-green-valley',
  'hvac-tucson-plans',
  'hybrid-water-heaters-tucson',
  'insurance-claim-assistance',
  'irrigation-repair',
  'knowledgehub',
  'metal-roofs-tucson',
  'new-home-buyer-offer',
  'plumbing-armory-park',
  'plumbing-flowing-wells',
  'plumbing-iron-horse',
  'plumbing-midtown-tucson',
  'plumbing-rebates-tucson',
  'plumbing-sam-hughes',
  'plumbing-south-tucson',
  'preventative-maintenance',
  'preventative-maintenance-plans',
  'realtor-offer',
  'realtors-offer',
  'recent-projects',
  'roof-insurance-claims',
  'solar-ac',
  'tankless-water-heater-installation'
];

const servicesDir = 'data/pages/services';
let totalFixed = 0;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;
  let fileFixed = 0;
  
  for (const slug of brokenLinks) {
    const linkPattern = new RegExp(`\\[link:/services/${slug}\\|([^\\]]+)\\]`, 'g');
    
    const matches = content.match(linkPattern);
    if (matches) {
      fileFixed += matches.length;
      content = content.replace(linkPattern, '$1');
    }
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed ${fileFixed} broken links in ${path.basename(filePath)}`);
    totalFixed += fileFixed;
    return true;
  }
  return false;
}

const files = fs.readdirSync(servicesDir)
  .filter(f => f.endsWith('.ts'))
  .map(f => path.join(servicesDir, f));

console.log(`Processing ${files.length} files...`);
console.log('');

let filesModified = 0;
for (const file of files) {
  if (processFile(file)) {
    filesModified++;
  }
}

console.log('');
console.log('=== Summary ===');
console.log(`Total broken links removed: ${totalFixed}`);
console.log(`Files modified: ${filesModified}`);
