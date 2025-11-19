// Quick script to add missing "content" fields to heading sections
import { readFileSync, writeFileSync } from 'fs';

const filePath = 'data/pages/services/acrepair.ts';
let content = readFileSync(filePath, 'utf8');

// Regex to match heading sections without content field
// Matches: { "type": "heading", "heading": "...", "level": N }
// Replaces with: { "type": "heading", "heading": "...", "level": N, "content": "..." }

const headingPattern = /(\{[\s\n]*"type": "heading",[\s\n]*"heading": "([^"]+)",[\s\n]*"level": (\d+)[\s\n]*\})/g;

content = content.replace(headingPattern, (match, fullMatch, heading, level) => {
  return `{
            "type": "heading",
            "heading": "${heading}",
            "level": ${level},
            "content": "${heading}"
      }`;
});

writeFileSync(filePath, content, 'utf8');
console.log('✅ Fixed all heading sections in acrepair.ts');
