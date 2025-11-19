#!/usr/bin/env tsx
/**
 * Schema Converter Script
 * 
 * Converts client-side schema injection (useEffect) to server-side
 * schema injection (JSX <script> tags).
 * 
 * Usage:
 *   tsx scripts/convert-schemas.ts <input-file> <output-file>
 *   
 * Example:
 *   tsx scripts/convert-schemas.ts client/src/pages/HVACTucson.tsx app/hvac-tucson/page.tsx
 */

import { readFileSync, writeFileSync } from 'fs';
import { dirname } from 'path';
import { mkdirSync } from 'fs';

interface SchemaInfo {
  name: string;
  content: string;
}

function extractUseEffectSchemas(fileContent: string): SchemaInfo[] {
  const schemas: SchemaInfo[] = [];
  
  // Find all useEffect blocks that contain schema injection
  const useEffectRegex = /useEffect\(\(\)\s*=>\s*{([^}]+document\.createElement\('script'\)[^}]+)},\s*\[\]\);?/gs;
  
  let match;
  while ((match = useEffectRegex.exec(fileContent)) !== null) {
    const effectBody = match[1];
    
    // Extract schema object
    const schemaRegex = /const\s+(\w+Schema)\s*=\s*({[\s\S]+?});/;
    const schemaMatch = effectBody.match(schemaRegex);
    
    if (schemaMatch) {
      schemas.push({
        name: schemaMatch[1],
        content: schemaMatch[2]
      });
    }
  }
  
  return schemas;
}

function generateSchemaJSX(schemas: SchemaInfo[]): string {
  return schemas.map(schema => {
    return `      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(${schema.name}) }}
      />`;
  }).join('\n');
}

function convertSchemas(inputPath: string, outputPath: string): void {
  console.log(`Converting schemas: ${inputPath} -> ${outputPath}`);
  
  // Read input file
  let fileContent = readFileSync(inputPath, 'utf-8');
  
  // Extract schemas from useEffect
  const schemas = extractUseEffectSchemas(fileContent);
  
  if (schemas.length === 0) {
    console.warn('No schemas found in useEffect blocks');
    console.log('File will be copied as-is');
  } else {
    console.log(`Found ${schemas.length} schema(s)`);
    
    // Remove useEffect import if only used for schemas
    fileContent = fileContent.replace(/import\s+{\s*useEffect\s*}\s+from\s+["']react["'];?\n?/g, '');
    
    // Remove all useEffect blocks with schema injection
    fileContent = fileContent.replace(/useEffect\(\(\)\s*=>\s*{[^}]*document\.createElement\('script'\)[^}]+},\s*\[\]\);?\n?/gs, '');
    
    // Generate schema variable declarations
    const schemaDeclarations = schemas.map(s => `  const ${s.name} = ${s.content};`).join('\n\n');
    
    // Generate JSX for schemas
    const schemaJSX = generateSchemaJSX(schemas);
    
    // Find the component return statement
    const returnRegex = /return\s*\(\s*<>/;
    const returnMatch = fileContent.match(returnRegex);
    
    if (returnMatch) {
      // Insert schema declarations before return
      fileContent = fileContent.replace(returnRegex, `${schemaDeclarations}\n\n  return (\n    <>`);
      
      // Insert schema JSX after opening fragment
      fileContent = fileContent.replace(/return\s*\(\s*<>\s*\n/, `return (\n    <>\n${schemaJSX}\n`);
    }
  }
  
  // Ensure output directory exists
  mkdirSync(dirname(outputPath), { recursive: true });
  
  // Write output file
  writeFileSync(outputPath, fileContent, 'utf-8');
  
  console.log('✓ Schema conversion complete');
  
  if (schemas.length > 0) {
    console.log('');
    console.log('Converted schemas:');
    schemas.forEach(s => console.log(`  - ${s.name}`));
  }
}

// Main execution
const args = process.argv.slice(2);

if (args.length < 2) {
  console.error('Usage: tsx convert-schemas.ts <input-file> <output-file>');
  process.exit(1);
}

const [inputPath, outputPath] = args;

try {
  convertSchemas(inputPath, outputPath);
} catch (error) {
  console.error('Error:', error);
  process.exit(1);
}
