#!/usr/bin/env tsx

/**
 * Automation Script: Convert Wouter Routing to Next.js
 * 
 * Converts all components from wouter patterns to Next.js patterns:
 * - Link component from wouter → Link from next/link
 * - useLocation hook → usePathname from next/navigation
 * - Route/Switch → Next.js App Router pages
 * - Adds 'use client' directive where needed
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

interface ConversionStats {
  filesProcessed: number;
  linkConverted: number;
  useLocationConverted: number;
  useClientAdded: number;
  errors: string[];
}

const stats: ConversionStats = {
  filesProcessed: 0,
  linkConverted: 0,
  useLocationConverted: 0,
  useClientAdded: 0,
  errors: []
};

// Components that need 'use client' directive (interactive)
const CLIENT_COMPONENT_PATTERNS = [
  /useState/,
  /useEffect/,
  /onClick/,
  /onChange/,
  /onSubmit/,
  /useForm/,
  /useQuery/,
  /useMutation/,
  /useToast/,
  /Carousel/,
  /Dialog/,
  /Modal/,
  /Accordion/,
  /Tabs/,
  /Slider/,
  /Switch/,
  /Checkbox/,
  /RadioGroup/,
  /Select/,
  /Input/,
  /Textarea/,
  /Button.*onClick/,
  /Form/,
  /localStorage/,
  /sessionStorage/,
  /window\./,
  /document\./,
  /addEventListener/,
];

function needsClientDirective(content: string): boolean {
  // Already has 'use client'
  if (content.includes("'use client'") || content.includes('"use client"')) {
    return false;
  }
  
  // Check if any client-side patterns exist
  return CLIENT_COMPONENT_PATTERNS.some(pattern => pattern.test(content));
}

function convertWouterToNextLink(content: string): string {
  let converted = content;
  
  // Convert wouter Link import to next/link
  if (converted.includes('from "wouter"') || converted.includes("from 'wouter'")) {
    // Remove wouter import
    converted = converted.replace(
      /import\s+\{[^}]*Link[^}]*\}\s+from\s+['"]wouter['"]/g,
      ''
    );
    
    // Remove useLocation import from wouter
    converted = converted.replace(
      /import\s+\{[^}]*useLocation[^}]*\}\s+from\s+['"]wouter['"]/g,
      ''
    );
    
    // Add Next.js imports
    const hasLink = /\bLink\b/.test(content);
    const hasUseLocation = /\buseLocation\b/.test(content);
    
    let nextImports = [];
    if (hasLink) {
      nextImports.push("import Link from 'next/link';");
    }
    if (hasUseLocation) {
      nextImports.push("import { usePathname } from 'next/navigation';");
    }
    
    if (nextImports.length > 0) {
      // Add after existing imports
      const importMatch = converted.match(/import[^;]+;/);
      if (importMatch) {
        const lastImportIndex = converted.lastIndexOf(importMatch[0]);
        converted = 
          converted.slice(0, lastImportIndex + importMatch[0].length) + 
          '\n' + nextImports.join('\n') + 
          converted.slice(lastImportIndex + importMatch[0].length);
      }
    }
    
    stats.linkConverted++;
  }
  
  // Convert useLocation to usePathname
  if (converted.includes('useLocation')) {
    converted = converted.replace(
      /const\s+\[location(?:,\s*setLocation)?\]\s*=\s*useLocation\(\)/g,
      'const pathname = usePathname()'
    );
    converted = converted.replace(/\blocation\b/g, 'pathname');
    stats.useLocationConverted++;
  }
  
  // Convert Link href patterns (wouter uses href="/path", Next.js also uses href)
  // No changes needed, both use href prop
  
  return converted;
}

function addUseClientDirective(content: string): string {
  // Check if already has any directive
  if (content.trim().startsWith("'use") || content.trim().startsWith('"use')) {
    return content;
  }
  
  // Add 'use client' at the top
  stats.useClientAdded++;
  return `'use client';\n\n${content}`;
}

async function processFile(filePath: string): Promise<void> {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;
    
    // Convert wouter to next routing
    const convertedContent = convertWouterToNextLink(content);
    if (convertedContent !== content) {
      content = convertedContent;
      modified = true;
    }
    
    // Add 'use client' if needed
    if (needsClientDirective(content)) {
      content = addUseClientDirective(content);
      modified = true;
    }
    
    // Write back if modified
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf-8');
      stats.filesProcessed++;
    }
  } catch (error) {
    stats.errors.push(`${filePath}: ${error}`);
  }
}

async function main() {
  console.log('🚀 Converting Wouter routing to Next.js...\n');
  
  // Process all component files
  const componentFiles = await glob('nextjs-app/components/**/*.{ts,tsx}', {
    ignore: ['**/node_modules/**']
  });
  
  console.log(`Found ${componentFiles.length} component files\n`);
  
  for (const file of componentFiles) {
    await processFile(file);
  }
  
  // Print results
  console.log('\n✅ Conversion Complete!\n');
  console.log('Statistics:');
  console.log(`  Files processed: ${stats.filesProcessed}`);
  console.log(`  Link conversions: ${stats.linkConverted}`);
  console.log(`  useLocation conversions: ${stats.useLocationConverted}`);
  console.log(`  'use client' directives added: ${stats.useClientAdded}`);
  
  if (stats.errors.length > 0) {
    console.log(`\n⚠️  Errors: ${stats.errors.length}`);
    stats.errors.forEach(err => console.log(`  ${err}`));
  }
}

main().catch(console.error);
