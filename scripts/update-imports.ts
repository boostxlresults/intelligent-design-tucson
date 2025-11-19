#!/usr/bin/env tsx
/**
 * Import Updater Script
 * 
 * Updates imports from React Router (wouter) to Next.js navigation.
 * 
 * Replacements:
 * - import { Link } from 'wouter' → import Link from 'next/link'
 * - import { useLocation } from 'wouter' → import { usePathname } from 'next/navigation'
 * - import { useParams } from 'wouter' → Extract from Next.js page props
 * 
 * Usage:
 *   tsx scripts/update-imports.ts <input-file> <output-file>
 *   
 * Example:
 *   tsx scripts/update-imports.ts client/src/components/Header.tsx components/layout/Header.tsx
 */

import { readFileSync, writeFileSync } from 'fs';
import { dirname } from 'path';
import { mkdirSync } from 'fs';

interface ImportReplacement {
  from: RegExp;
  to: string;
  description: string;
}

const replacements: ImportReplacement[] = [
  {
    from: /import\s+{\s*Link\s*}\s+from\s+['"]wouter['"]/g,
    to: "import Link from 'next/link'",
    description: 'Link component'
  },
  {
    from: /import\s+{\s*useLocation\s*}\s+from\s+['"]wouter['"]/g,
    to: "import { usePathname } from 'next/navigation'",
    description: 'useLocation → usePathname'
  },
  {
    from: /import\s+{\s*Route,\s*Switch\s*}\s+from\s+['"]wouter['"]/g,
    to: '// Routing handled by Next.js App Router',
    description: 'Route/Switch (removed - handled by App Router)'
  },
  {
    from: /const\s+\[location,\s*setLocation\]\s*=\s*useLocation\(\);?/g,
    to: 'const pathname = usePathname();',
    description: 'useLocation hook usage'
  },
  {
    from: /import\s+{\s*MetaHead\s*}\s+from\s+['"]@\/components\/MetaHead['"]/g,
    to: "// MetaHead replaced by generateMetadata()",
    description: 'MetaHead component (removed)'
  }
];

function updateImports(inputPath: string, outputPath: string): void {
  console.log(`Updating imports: ${inputPath} -> ${outputPath}`);
  
  // Read input file
  let fileContent = readFileSync(inputPath, 'utf-8');
  
  const appliedReplacements: string[] = [];
  
  // Apply all replacements
  for (const replacement of replacements) {
    const before = fileContent;
    fileContent = fileContent.replace(replacement.from, replacement.to);
    
    if (before !== fileContent) {
      appliedReplacements.push(replacement.description);
    }
  }
  
  // Additional replacements for common patterns
  
  // Replace <Link href="/path">
  fileContent = fileContent.replace(/<Link\s+to=/g, '<Link href=');
  
  // Replace setLocation('/path') with router.push('/path')
  if (fileContent.includes('setLocation(')) {
    fileContent = fileContent.replace(/setLocation\(/g, 'router.push(');
    
    // Add router import if not present
    if (!fileContent.includes("from 'next/navigation'")) {
      fileContent = fileContent.replace(
        /import Link from 'next\/link'/,
        "import Link from 'next/link';\nimport { useRouter } from 'next/navigation'"
      );
    }
    
    appliedReplacements.push('setLocation → router.push');
  }
  
  // Ensure output directory exists
  mkdirSync(dirname(outputPath), { recursive: true });
  
  // Write output file
  writeFileSync(outputPath, fileContent, 'utf-8');
  
  console.log('✓ Import update complete');
  
  if (appliedReplacements.length > 0) {
    console.log('');
    console.log('Applied replacements:');
    appliedReplacements.forEach(r => console.log(`  - ${r}`));
  } else {
    console.log('  (No changes needed)');
  }
}

// Main execution
const args = process.argv.slice(2);

if (args.length < 2) {
  console.error('Usage: tsx update-imports.ts <input-file> <output-file>');
  process.exit(1);
}

const [inputPath, outputPath] = args;

try {
  updateImports(inputPath, outputPath);
} catch (error) {
  console.error('Error:', error);
  process.exit(1);
}
