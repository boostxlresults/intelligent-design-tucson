#!/usr/bin/env tsx

/**
 * Update Page Templates to Use Data Indexes
 * 
 * Updates Next.js page templates to import from generated data indexes
 * instead of using hardcoded placeholder data.
 */

import * as fs from 'fs';

async function main() {
  console.log('📝 UPDATING PAGE TEMPLATES');
  console.log('=' .repeat(80));
  
  // Update service page template
  console.log('Updating service page template...');
  
  const servicePage = `nextjs-app/app/[service]/page.tsx`;
  let serviceContent = fs.readFileSync(servicePage, 'utf-8');
  
  // Replace the hardcoded serviceData with import + mapping
  serviceContent = serviceContent.replace(
    /import type { ServicePageData } from '@\/types\/services';/,
    `import type { ServicePageData } from '@/types/services';\nimport * as serviceExports from '@/data/pages/services';`
  );
  
  serviceContent = serviceContent.replace(
    /\/\/ This will be populated from React pages - template only\nconst serviceData: Record<string, ServicePageData> = \{[\s\S]*?\n\};/,
    `// Map all service data exports by slug\nconst serviceData: Record<string, ServicePageData> = Object.values(serviceExports).reduce((acc, data: ServicePageData) => {\n  acc[data.slug] = data;\n  return acc;\n}, {} as Record<string, ServicePageData>);`
  );
  
  fs.writeFileSync(servicePage, serviceContent);
  console.log('✅ Service page template updated');
  
  // Update location page template
  console.log('Updating location page template...');
  
  const locationPage = `nextjs-app/app/[location]/page.tsx`;
  let locationContent = fs.readFileSync(locationPage, 'utf-8');
  
  // Replace the hardcoded locationData with import + mapping
  locationContent = locationContent.replace(
    /import type { LocationPageData } from '@\/types\/services';/,
    `import type { LocationPageData } from '@/types/services';\nimport * as locationExports from '@/data/pages/locations';`
  );
  
  locationContent = locationContent.replace(
    /\/\/ This will be populated from React pages - template only\nconst locationData: Record<string, LocationPageData> = \{[\s\S]*?\n\};/,
    `// Map all location data exports by slug\nconst locationData: Record<string, LocationPageData> = Object.values(locationExports).reduce((acc, data: LocationPageData) => {\n  acc[data.slug] = data;\n  return acc;\n}, {} as Record<string, LocationPageData>);`
  );
  
  fs.writeFileSync(locationPage, locationContent);
  console.log('✅ Location page template updated');
  
  console.log('\n' + '=' .repeat(80));
  console.log('TEMPLATE UPDATE COMPLETE');
  console.log('=' .repeat(80));
  console.log('✅ Service page: Imports from @/data/pages/services');
  console.log('✅ Location page: Imports from @/data/pages/locations');
  console.log('\nNext steps:');
  console.log('1. Run npm install in nextjs-app/');
  console.log('2. Start Next.js dev server (port 3000)');
  console.log('3. Test rendering of sample pages');
}

main().catch(console.error);
