#!/usr/bin/env tsx
/**
 * Structure Migration Script
 * 
 * Copies files from current React structure to Next.js structure.
 * Applies all conversions in sequence:
 * 1. Copy file
 * 2. Update imports (wouter → next/link)
 * 3. Convert metadata (MetaHead → generateMetadata)
 * 4. Convert schemas (useEffect → JSX)
 * 
 * Usage:
 *   tsx scripts/migrate-structure.ts <source-dir> <dest-dir>
 *   
 * Example:
 *   tsx scripts/migrate-structure.ts client/src/pages app
 */

import { readdirSync, statSync, copyFileSync, readFileSync, writeFileSync } from 'fs';
import { join, relative, dirname, extname } from 'path';
import { mkdirSync, existsSync } from 'fs';

interface FileMapping {
  source: string;
  destination: string;
  type: 'page' | 'component' | 'data' | 'utility' | 'asset';
}

// File type classification
function classifyFile(filePath: string): 'page' | 'component' | 'data' | 'utility' | 'asset' {
  if (filePath.includes('/pages/')) return 'page';
  if (filePath.includes('/components/')) return 'component';
  if (filePath.includes('/data/')) return 'data';
  if (filePath.includes('/lib/')) return 'utility';
  return 'asset';
}

// Generate Next.js path from React path
function mapReactPathToNextJS(reactPath: string): string {
  // Pages mapping
  if (reactPath.includes('/pages/')) {
    const pageName = reactPath.split('/pages/')[1].replace('.tsx', '');
    
    // Home page
    if (pageName === 'Home') return 'app/page.tsx';
    
    // Blog pages
    if (pageName === 'BlogPost') return 'app/blog/[category]/[slug]/page.tsx';
    if (pageName === 'BlogIndex') return 'app/blog/page.tsx';
    if (pageName === 'BlogCategory') return 'app/blog/[category]/page.tsx';
    
    // Service + Location pages (120 pages → keep separate for now)
    if (pageName.startsWith('HVAC') || pageName.startsWith('Heating') || 
        pageName.startsWith('Plumbing') || pageName.startsWith('Solar') ||
        pageName.startsWith('Electrical') || pageName.startsWith('Roofing')) {
      const kebabName = pageName
        .replace(/([A-Z])/g, '-$1')
        .toLowerCase()
        .replace(/^-/, '');
      return `app/(service-locations)/${kebabName}/page.tsx`;
    }
    
    // Other pages
    const kebabName = pageName
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
      .replace(/^-/, '');
    return `app/${kebabName}/page.tsx`;
  }
  
  // Components mapping
  if (reactPath.includes('/components/')) {
    return reactPath.replace('client/src/components/', 'components/');
  }
  
  // Data files mapping
  if (reactPath.includes('/data/')) {
    return reactPath.replace('client/src/data/', 'data/');
  }
  
  // Lib files mapping
  if (reactPath.includes('/lib/')) {
    return reactPath.replace('client/src/lib/', 'lib/');
  }
  
  // Default: copy as-is
  return reactPath.replace('client/src/', '');
}

function getAllFiles(dir: string, fileList: string[] = []): string[] {
  const files = readdirSync(dir);
  
  files.forEach(file => {
    const filePath = join(dir, file);
    
    if (statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

function migrateFiles(sourceDir: string, destDir: string): void {
  console.log(`Migrating files from ${sourceDir} to ${destDir}...`);
  console.log('');
  
  // Get all files
  const allFiles = getAllFiles(sourceDir);
  
  // Create file mappings
  const mappings: FileMapping[] = allFiles.map(source => ({
    source,
    destination: join(destDir, mapReactPathToNextJS(source)),
    type: classifyFile(source)
  }));
  
  // Group by type
  const byType: Record<string, FileMapping[]> = {
    page: [],
    component: [],
    data: [],
    utility: [],
    asset: []
  };
  
  mappings.forEach(m => byType[m.type].push(m));
  
  // Report
  console.log('Migration Plan:');
  console.log(`  Pages:      ${byType.page.length} files`);
  console.log(`  Components: ${byType.component.length} files`);
  console.log(`  Data:       ${byType.data.length} files`);
  console.log(`  Utilities:  ${byType.utility.length} files`);
  console.log(`  Assets:     ${byType.asset.length} files`);
  console.log(`  TOTAL:      ${mappings.length} files`);
  console.log('');
  
  // Migrate each file
  let migrated = 0;
  
  for (const mapping of mappings) {
    try {
      // Create destination directory
      mkdirSync(dirname(mapping.destination), { recursive: true });
      
      // Copy file
      let content = readFileSync(mapping.source, 'utf-8');
      
      // Apply conversions for TypeScript files
      if (mapping.source.endsWith('.tsx') || mapping.source.endsWith('.ts')) {
        // Update imports
        content = applyImportUpdates(content);
        
        // For pages, apply additional conversions
        if (mapping.type === 'page') {
          content = applyMetadataConversion(content);
          content = applySchemaConversion(content);
        }
      }
      
      // Write file
      writeFileSync(mapping.destination, content, 'utf-8');
      
      migrated++;
      
      if (migrated % 10 === 0) {
        console.log(`  Migrated ${migrated}/${mappings.length} files...`);
      }
    } catch (error) {
      console.error(`  Error migrating ${mapping.source}: ${error}`);
    }
  }
  
  console.log('');
  console.log(`✓ Migration complete: ${migrated}/${mappings.length} files migrated`);
}

function applyImportUpdates(content: string): string {
  // Replace wouter imports
  content = content.replace(/import\s+{\s*Link\s*}\s+from\s+['"]wouter['"]/g, "import Link from 'next/link'");
  content = content.replace(/import\s+{\s*useLocation\s*}\s+from\s+['"]wouter['"]/g, "import { usePathname } from 'next/navigation'");
  
  // Replace Link props
  content = content.replace(/<Link\s+to=/g, '<Link href=');
  
  return content;
}

function applyMetadataConversion(content: string): string {
  // Check if MetaHead present
  if (!content.includes('<MetaHead')) return content;
  
  // Add Metadata import
  if (!content.includes("import { Metadata } from 'next'")) {
    content = `import { Metadata } from 'next';\nimport { generateMetadata } from '@/lib/seo';\n\n${content}`;
  }
  
  // Note: Full conversion requires parsing - this is a placeholder
  // Real conversion handled by convert-metadata.ts script
  
  return content;
}

function applySchemaConversion(content: string): string {
  // Note: Full conversion requires parsing - this is a placeholder
  // Real conversion handled by convert-schemas.ts script
  
  return content;
}

// Main execution
const args = process.argv.slice(2);

if (args.length < 2) {
  console.error('Usage: tsx migrate-structure.ts <source-dir> <dest-dir>');
  console.error('');
  console.error('Example: tsx migrate-structure.ts client/src app');
  process.exit(1);
}

const [sourceDir, destDir] = args;

if (!existsSync(sourceDir)) {
  console.error(`Source directory not found: ${sourceDir}`);
  process.exit(1);
}

try {
  migrateFiles(sourceDir, destDir);
} catch (error) {
  console.error('Error:', error);
  process.exit(1);
}
