#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';

// Find all TypeScript files in data/pages/
const files = glob.sync('data/pages/**/*.ts');

console.log(`Found ${files.length} data files to check...`);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  try {
    let content = readFileSync(file, 'utf-8');
    const original = content;
    
    // Fix common syntax errors in object literals
    // Replace semicolons with commas in object properties (but not at end of statements)
    content = content.replace(/:\s*"([^"]*)";\s*$/gm, ': "$1",');
    content = content.replace(/:\s*'([^']*)';\s*$/gm, ': \'$1\',');
    content = content.replace(/:\s*(\d+);\s*$/gm, ': $1,');
    content = content.replace(/:\s*(true|false);\s*$/gm, ': $1,');
    content = content.replace(/:\s*\[([^\]]*)\];\s*$/gm, ': [$1],');
    
    // Fix missing commas between object properties
    content = content.replace(/"\s*\n\s*([a-zA-Z_])/g, '",\n  $1');
    
    // Fix trailing commas before closing braces (this is actually okay in modern JS but clean it up)
    content = content.replace(/,(\s*})/g, '$1');
    
    if (content !== original) {
      writeFileSync(file, content, 'utf-8');
      fixedCount++;
      console.log(`✓ Fixed: ${file}`);
    }
  } catch (error) {
    console.error(`✗ Error in ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\nCompleted: ${fixedCount} files fixed, ${errorCount} errors`);
