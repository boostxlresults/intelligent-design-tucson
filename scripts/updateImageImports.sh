#!/bin/bash

# Update all PNG imports to WebP in TypeScript/TSX files
# Replaces: from "@assets/generated_images/filename.png"
# With:     from "@assets/generated_images/filename.webp"

echo "🔄 Updating image imports from .png to .webp..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Find all TypeScript/TSX files with PNG imports
files=$(grep -rl 'from "@assets/generated_images/.*\.png"' client/src --include="*.tsx" --include="*.ts")

count=0
for file in $files; do
  # Replace .png" with .webp" in import statements
  sed -i 's/from "@assets\/generated_images\/\(.*\)\.png"/from "@assets\/generated_images\/\1.webp"/g' "$file"
  count=$((count + 1))
  echo "✓ Updated: $file"
done

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Updated $count files"
echo ""
echo "🎯 Next step: Verify imports and test the application"
