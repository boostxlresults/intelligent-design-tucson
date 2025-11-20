#!/usr/bin/env node
/**
 * Remove non-service pages from the services manifest
 * These pages have their own dedicated app routes and shouldn't be under /services/
 */

const fs = require('fs');
const path = require('path');

// Pages to remove from services manifest
const NON_SERVICE_PAGES = [
  'family-protection-plans',
  'new-homebuyer-offer',
  'realtors-offer',
  'recent-projects'
];

// Data file names to remove
const DATA_FILES_TO_REMOVE = [
  'familyprotectionplans.ts',
  'newhomebuyeroffer.ts',
  'realtorsoffer.ts',
  'recentprojects.ts'
];

const manifestPath = path.join(process.cwd(), 'data', 'pages', 'services', 'manifest.json');
const servicesDataDir = path.join(process.cwd(), 'data', 'pages', 'services');

console.log('🧹 Cleaning up non-service pages from services manifest...\n');

try {
  // 1. Load and update manifest
  console.log('📄 Loading manifest.json...');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  
  let removedServices = 0;
  let removedAliases = 0;
  
  // Remove from services section
  NON_SERVICE_PAGES.forEach(slug => {
    if (manifest.services && manifest.services[slug]) {
      delete manifest.services[slug];
      removedServices++;
      console.log(`   ✓ Removed "${slug}" from services`);
    }
  });
  
  // Remove from aliases section
  const aliasesToRemove = Object.keys(manifest.aliases || {}).filter(alias => {
    const canonical = manifest.aliases[alias];
    return NON_SERVICE_PAGES.includes(canonical);
  });
  
  aliasesToRemove.forEach(alias => {
    if (manifest.aliases && manifest.aliases[alias]) {
      const canonical = manifest.aliases[alias];
      delete manifest.aliases[alias];
      removedAliases++;
      console.log(`   ✓ Removed alias "${alias}" → "${canonical}"`);
    }
  });
  
  // Save updated manifest
  console.log('\n💾 Saving updated manifest.json...');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
  console.log(`   ✓ Removed ${removedServices} services and ${removedAliases} aliases`);
  
  // 2. Delete data files
  console.log('\n🗑️  Deleting data files...');
  let deletedFiles = 0;
  
  DATA_FILES_TO_REMOVE.forEach(filename => {
    const filePath = path.join(servicesDataDir, filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      deletedFiles++;
      console.log(`   ✓ Deleted ${filename}`);
    }
  });
  
  console.log(`\n✅ Cleanup complete!`);
  console.log(`   - Removed ${removedServices} service entries`);
  console.log(`   - Removed ${removedAliases} alias entries`);
  console.log(`   - Deleted ${deletedFiles} data files`);
  console.log(`\nThese pages are now only accessible at their root URLs:`);
  NON_SERVICE_PAGES.forEach(slug => {
    console.log(`   - /${slug}`);
  });
  
} catch (error) {
  console.error('❌ Error during cleanup:', error.message);
  process.exit(1);
}
