#!/bin/bash

# Batch convert PNG images to WebP format
# Quality: 80 (good balance between size and quality)
# Target: 60-80% file size reduction

INPUT_DIR="attached_assets/generated_images"
TOTAL_ORIGINAL_SIZE=0
TOTAL_WEBP_SIZE=0
COUNT=0

echo "🚀 Starting WebP conversion..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

for img in "$INPUT_DIR"/*.png; do
  # Skip if no PNG files found
  [ -e "$img" ] || continue
  
  filename=$(basename "$img" .png)
  output="$INPUT_DIR/$filename.webp"
  
  # Get original file size
  original_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
  TOTAL_ORIGINAL_SIZE=$((TOTAL_ORIGINAL_SIZE + original_size))
  
  # Convert to WebP
  cwebp -q 80 "$img" -o "$output" > /dev/null 2>&1
  
  if [ $? -eq 0 ]; then
    # Get WebP file size
    webp_size=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output" 2>/dev/null)
    TOTAL_WEBP_SIZE=$((TOTAL_WEBP_SIZE + webp_size))
    
    # Calculate reduction percentage
    reduction=$(( 100 - (webp_size * 100 / original_size) ))
    
    COUNT=$((COUNT + 1))
    
    # Show progress every 10 images
    if [ $((COUNT % 10)) -eq 0 ]; then
      echo "✓ Converted $COUNT images..."
    fi
  else
    echo "❌ Failed: $filename"
  fi
done

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Conversion complete!"
echo ""
echo "📊 Results:"
echo "   Images converted: $COUNT"
echo "   Original total: $(numfmt --to=iec-i --suffix=B $TOTAL_ORIGINAL_SIZE 2>/dev/null || echo "${TOTAL_ORIGINAL_SIZE} bytes")"
echo "   WebP total: $(numfmt --to=iec-i --suffix=B $TOTAL_WEBP_SIZE 2>/dev/null || echo "${TOTAL_WEBP_SIZE} bytes")"

if [ $TOTAL_ORIGINAL_SIZE -gt 0 ]; then
  reduction=$(( 100 - (TOTAL_WEBP_SIZE * 100 / TOTAL_ORIGINAL_SIZE) ))
  echo "   Size reduction: ${reduction}%"
fi

echo ""
echo "🎯 Next step: Update image imports from .png to .webp"
