const fs = require('fs');
const path = require('path');

const manifest = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/pages/service-locations/manifest.json'), 'utf8')
);

// Generate TypeScript index file
let indexContent = `// Auto-generated service×location combinations index
// This file exports all 102 service×location data combinations
// Generated from data/pages/services/* files matching service+location pattern

`;

// Add imports
manifest.forEach(item => {
  const varName = item.file.replace('.ts', 'Data');
  indexContent += `export { ${varName} } from '../services/${item.file.replace('.ts', '')}';\n`;
});

indexContent += `\n// Service×Location manifest for dynamic route generation\n`;
indexContent += `export const serviceLocationManifest = ${JSON.stringify(manifest, null, 2)};\n`;

fs.writeFileSync(
  path.join(__dirname, '../data/pages/service-locations/index.ts'),
  indexContent
);

console.log('✅ Generated data/pages/service-locations/index.ts with 102 exports');
