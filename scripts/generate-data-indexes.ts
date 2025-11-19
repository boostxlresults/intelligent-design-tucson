#!/usr/bin/env tsx

/**
 * Generate Data Index Files
 * 
 * Creates index.ts files that export all page data objects:
 * - nextjs-app/data/pages/services/index.ts (215 service pages)
 * - nextjs-app/data/pages/locations/index.ts (13 location pages)
 * 
 * This enables clean imports in Next.js pages:
 * import { acrepairData } from '@/data/pages/services';
 */

import * as fs from 'fs';
import * as path from 'path';

interface PageExport {
  fileName: string;
  exportName: string;
  importName: string;
}

function generateIndex(directory: string, indexPath: string, category: string): number {
  const files = fs.readdirSync(directory)
    .filter(f => f.endsWith('.ts') && f !== 'index.ts')
    .sort();

  const exports: PageExport[] = files.map(file => {
    const baseName = file.replace('.ts', '');
    return {
      fileName: baseName,
      exportName: `${baseName}Data`,
      importName: baseName
    };
  });

  // Generate index.ts content
  const imports = exports
    .map(exp => `export { ${exp.exportName} } from './${exp.importName}';`)
    .join('\n');

  const indexContent = `/**
 * ${category} Page Data Index
 * 
 * Auto-generated exports for all ${category.toLowerCase()} pages.
 * Total exports: ${exports.length}
 * 
 * Usage in Next.js pages:
 * import { acrepairData } from '@/data/pages/${category.toLowerCase()}s';
 */

${imports}
`;

  fs.writeFileSync(indexPath, indexContent);
  console.log(`✅ Generated ${indexPath}: ${exports.length} exports`);
  
  return exports.length;
}

async function main() {
  console.log('📦 GENERATING DATA INDEX FILES');
  console.log('=' .repeat(80));
  
  // Generate service index
  const serviceDir = 'nextjs-app/data/pages/services';
  const serviceIndex = path.join(serviceDir, 'index.ts');
  const serviceCount = generateIndex(serviceDir, serviceIndex, 'Service');
  
  // Generate location index
  const locationDir = 'nextjs-app/data/pages/locations';
  const locationIndex = path.join(locationDir, 'index.ts');
  const locationCount = generateIndex(locationDir, locationIndex, 'Location');
  
  console.log('\n' + '=' .repeat(80));
  console.log('INDEX GENERATION COMPLETE');
  console.log('=' .repeat(80));
  console.log(`✅ Service pages: ${serviceCount} exports`);
  console.log(`✅ Location pages: ${locationCount} exports`);
  console.log(`✅ Total exports: ${serviceCount + locationCount}`);
  console.log();
  console.log('Next step: Update page templates to import from these indexes');
}

main().catch(console.error);
