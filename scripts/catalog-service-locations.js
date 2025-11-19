const fs = require('fs');
const path = require('path');

// Known locations from our location pages
const locations = [
  'avravalley', 'casasadobes', 'catalinafoothills', 'coronadetucson', 'cortaro',
  'drexelheights', 'easttucson', 'flolucasanchez', 'gladdenfarms', 'greenvalley',
  'marana', 'orovalley', 'picturerocks', 'rillito', 'ritaranch',
  'sahuarita', 'tanqueverde', 'tucson', 'vail'
];

// Service categories
const services = ['plumbing', 'electrical', 'roofing', 'solarinstallation', 'hvac', 'heating'];

const servicesDir = path.join(__dirname, '../data/pages/services');
const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

const serviceLocationFiles = [];

files.forEach(file => {
  const fileName = file.replace('.ts', '');
  
  // Check if file matches serviceCategory + location pattern
  for (const service of services) {
    for (const location of locations) {
      if (fileName === service + location) {
        serviceLocationFiles.push({
          file,
          service,
          location,
          slug: fileName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
        });
        break;
      }
    }
  }
});

console.log('\n🎯 Service×Location Combinations Found\n' + '='.repeat(60));
console.log(`\nTotal: ${serviceLocationFiles.length} combinations\n`);

// Group by service category
const byCategory = {};
serviceLocationFiles.forEach(item => {
  if (!byCategory[item.service]) byCategory[item.service] = [];
  byCategory[item.service].push(item);
});

Object.keys(byCategory).sort().forEach(category => {
  console.log(`${category}: ${byCategory[category].length} files`);
});

console.log('\n' + '='.repeat(60));
console.log('\nSample entries:');
serviceLocationFiles.slice(0, 10).forEach(item => {
  console.log(`  ${item.file.padEnd(40)} → service: ${item.service.padEnd(18)} location: ${item.location}`);
});

// Save manifest
fs.writeFileSync(
  path.join(__dirname, '../data/pages/service-locations/manifest.json'),
  JSON.stringify(serviceLocationFiles, null, 2)
);

console.log(`\n✅ Manifest saved to data/pages/service-locations/manifest.json`);
