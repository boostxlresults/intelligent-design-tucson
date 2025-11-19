#!/bin/bash

# SEO Verification Script for Next.js SSR
# Run this after starting the dev server on port 3000

echo "🔍 Next.js SSR SEO Verification"
echo "================================"
echo ""

PORT=3000
BASE_URL="http://localhost:$PORT"

# Test URLs
URLS=(
  "/ac-repair-tucson"
  "/duct-cleaning"
  "/furnaces"
  "/tucson"
  "/oro-valley"
)

echo "Testing $BASE_URL"
echo ""

for url in "${URLS[@]}"; do
  echo "📄 Testing: $url"
  echo "---"
  
  # Check if page returns 200
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL$url")
  
  if [ "$STATUS" = "200" ]; then
    echo "✅ Status: $STATUS"
    
    # Check for meta description
    if curl -s "$BASE_URL$url" | grep -q '<meta name="description"'; then
      echo "✅ Meta description found"
    else
      echo "❌ Meta description MISSING"
    fi
    
    # Check for title tag
    if curl -s "$BASE_URL$url" | grep -q '<title>'; then
      echo "✅ Title tag found"
    else
      echo "❌ Title tag MISSING"
    fi
    
    # Check for JSON-LD schema
    if curl -s "$BASE_URL$url" | grep -q 'application/ld+json'; then
      echo "✅ JSON-LD schema found"
    else
      echo "❌ JSON-LD schema MISSING"
    fi
    
    # Check for body content (SSR proof)
    RESPONSE=$(curl -s "$BASE_URL$url")
    if echo "$RESPONSE" | grep -q -i "intelligent design"; then
      WORD_COUNT=$(echo "$RESPONSE" | wc -w)
      echo "✅ Body content rendered (~$WORD_COUNT words in HTML)"
    else
      echo "❌ Body content NOT in initial HTML (CSR issue!)"
    fi
    
  else
    echo "❌ Status: $STATUS (FAILED)"
  fi
  
  echo ""
done

echo "================================"
echo "✅ Verification complete!"
echo ""
echo "Expected Results:"
echo "- All pages return 200 status"
echo "- Meta tags present in initial HTML"
echo "- JSON-LD schemas present"
echo "- Body content server-rendered (500+ words in HTML)"
echo ""
echo "If any checks failed, investigate before proceeding."
