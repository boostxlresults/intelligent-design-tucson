#!/usr/bin/env python3
"""
Location-Variant Service Page Content Generator
Generates truly unique content for each location+service combination
to achieve <50% overlap and enable Google indexation.
"""

import json
import os
import sys
import time
import re
from openai import OpenAI

client = OpenAI()

# Load location data
with open('/home/ubuntu/intelligent-design-tucson/scripts/location_data.json') as f:
    LOCATION_DATA = json.load(f)

# Service categories and their details
SERVICE_CATEGORIES = {
    "hvac": {
        "serviceName": "HVAC",
        "category": "HVAC",
        "coreServices": ["AC repair", "AC replacement", "AC installation", "heating repair", "ductwork", "maintenance", "indoor air quality"],
        "faqImport": "hvacFAQs",
        "faqFile": "hvac"
    },
    "roofing": {
        "serviceName": "Roofing",
        "category": "Roofing",
        "coreServices": ["roof repair", "roof replacement", "roof inspection", "tile roofing", "shingle roofing", "flat roofs", "roof coating"],
        "faqImport": "residentialRoofRepairFAQs",
        "faqFile": "roofing"
    },
    "plumbing": {
        "serviceName": "Plumbing",
        "category": "Plumbing",
        "coreServices": ["leak repair", "pipe repair", "water heater", "repiping", "fixture installation", "water filtration", "slab leak detection"],
        "faqImport": "plumbingFAQs",
        "faqFile": "plumbing"
    },
    "electrical": {
        "serviceName": "Electrical",
        "category": "Electrical",
        "coreServices": ["panel upgrades", "wiring", "outlet installation", "lighting", "EV chargers", "generators", "smart home"],
        "faqImport": "electricalFAQs",
        "faqFile": "electrical"
    },
    "solar": {
        "serviceName": "Solar Installation",
        "category": "Solar",
        "coreServices": ["solar panel installation", "solar battery", "solar maintenance", "grid-tie systems", "off-grid solar", "solar monitoring"],
        "faqImport": "solarFAQs",
        "faqFile": "solar"
    },
    "drain-clearing": {
        "serviceName": "Drain Clearing",
        "category": "Plumbing",
        "coreServices": ["drain cleaning", "clog removal", "hydro jetting", "camera inspection", "root removal", "preventive maintenance"],
        "faqImport": "drainClearingFAQs",
        "faqFile": "drainClearing"
    },
    "drain-sewer": {
        "serviceName": "Drain & Sewer",
        "category": "Plumbing",
        "coreServices": ["sewer line repair", "sewer replacement", "trenchless repair", "drain cleaning", "camera inspection", "root intrusion"],
        "faqImport": "drainSewerFAQs",
        "faqFile": "drainSewer"
    },
    "heating": {
        "serviceName": "Heating",
        "category": "HVAC",
        "coreServices": ["furnace repair", "heat pump", "heating installation", "heating maintenance", "ductwork", "thermostat"],
        "faqImport": "heatingFAQs",
        "faqFile": "heating"
    }
}

def generate_page_content(service_key, location_key, location_data, service_info):
    """Generate unique content for a specific service+location page."""
    
    display_name = location_data["displayName"]
    service_name = service_info["serviceName"]
    category = service_info["category"]
    common_issues = location_data["commonIssues"].get(
        service_key.replace("-clearing", "").replace("-sewer", "").replace("solar", "solar").replace("heating", "hvac"),
        location_data["commonIssues"].get("hvac", "")
    )
    
    # Map service keys to the correct commonIssues key
    issue_key_map = {
        "hvac": "hvac",
        "roofing": "roofing",
        "plumbing": "plumbing",
        "electrical": "electrical",
        "solar": "solar",
        "drain-clearing": "drain",
        "drain-sewer": "drain",
        "heating": "hvac"
    }
    common_issues = location_data["commonIssues"].get(issue_key_map.get(service_key, "hvac"), "")
    
    prompt = f"""You are writing a service page for Intelligent Design Air Conditioning, Plumbing, Solar, & Electric - a home services company in Tucson, AZ with 46+ years experience and a 4.97-star Google rating from 3,600+ reviews.

Write UNIQUE content for the {service_name} service page targeting {display_name}, AZ.

LOCATION DATA:
- Display Name: {display_name}
- Zip Codes: {', '.join(location_data['zipCodes'])}
- Population: {location_data['population']}
- Elevation: {location_data['elevation']}
- Median Home Age: {location_data['medianHomeAge']}
- Median Home Value: {location_data['medianHomeValue']}
- Housing Stock: {location_data['housingStock']}
- Climate Notes: {location_data['climateNotes']}
- Common {service_name} Issues: {common_issues}
- Local Landmarks: {', '.join(location_data['landmarks'])}
- Neighborhoods: {', '.join(location_data['neighborhoods'])}
- Local Restaurants: {', '.join(location_data['localRestaurants'])}
- Unique Facts: {', '.join(location_data['uniqueFacts'])}
- Common Roof Types: {location_data.get('commonRoofTypes', 'N/A')}
- Water Hardness: {location_data.get('waterHardness', 'N/A')}
- Electrical Grid: {location_data.get('electricalGrid', 'N/A')}
- Solar Potential: {location_data.get('solarPotential', 'N/A')}

REQUIREMENTS:
1. Write content that is COMPLETELY UNIQUE to this location - do NOT use generic phrases that could apply to any Tucson suburb
2. Reference specific local details: housing stock age, common building materials, local climate micro-variations, neighborhood character
3. Include specific scenarios homeowners in THIS location face (e.g., "homes built in the 1970s in {display_name} commonly have...")
4. Keep total word count under 1,500 words
5. Do NOT mention metal roofs (company restriction)
6. Use natural, authoritative tone - not salesy
7. Include location-specific pricing context where relevant
8. Reference specific zip codes naturally in content

OUTPUT FORMAT (respond with valid JSON only, no markdown):
{{
  "title": "SEO-optimized title tag (60 chars max) - include {display_name} and {service_name}",
  "description": "Meta description (155 chars max) with {display_name}, {service_name}, and a call to action",
  "h1": "Primary heading including {display_name} and {service_name}",
  "h2Subheading": "Supporting subheading with unique value prop for this location",
  "tagline": "Brief tagline with key stats relevant to this area",
  "highlights": [
    {{"title": "Highlight 1 title (unique to this location)", "description": "2-sentence description specific to {display_name}"}},
    {{"title": "Highlight 2 title", "description": "Description"}},
    {{"title": "Highlight 3 title", "description": "Description"}},
    {{"title": "Highlight 4 title", "description": "Description"}},
    {{"title": "Highlight 5 title", "description": "Description"}},
    {{"title": "Highlight 6 title", "description": "Description"}}
  ],
  "contentSections": [
    {{"type": "heading", "heading": "H2 heading unique to this location+service", "level": 2, "content": "Same as heading"}},
    {{"type": "paragraph", "content": "Detailed paragraph about this specific service in this specific location (150-200 words, highly specific to local conditions)"}},
    {{"type": "paragraph", "content": "Second paragraph with different angle - local housing stock, common issues, etc."}},
    {{"type": "cta", "heading": "CTA heading mentioning {display_name}", "content": "CTA body text", "buttonText": "Call (520) 333-2665", "buttonLink": "tel:+15203332665"}},
    {{"type": "heading", "heading": "Second H2 - different angle on service for this location", "level": 2, "content": "Same as heading"}},
    {{"type": "paragraph", "content": "Detailed paragraph (150-200 words)"}},
    {{"type": "paragraph", "content": "Another detailed paragraph"}},
    {{"type": "heading", "heading": "Third H2 - community/local focus", "level": 2, "content": "Same as heading"}},
    {{"type": "paragraph", "content": "Community-focused paragraph with local landmarks and context"}},
    {{"type": "cta", "heading": "Final CTA with {display_name}", "content": "Closing CTA", "buttonText": "Call (520) 333-2665", "buttonLink": "tel:+15203332665"}}
  ],
  "faqs": [
    {{"question": "Location-specific FAQ 1 mentioning {display_name}", "answer": "Detailed answer specific to this location (80-120 words)"}},
    {{"question": "Location-specific FAQ 2", "answer": "Answer"}},
    {{"question": "Location-specific FAQ 3", "answer": "Answer"}},
    {{"question": "Location-specific FAQ 4", "answer": "Answer"}},
    {{"question": "Location-specific FAQ 5", "answer": "Answer"}},
    {{"question": "Location-specific FAQ 6", "answer": "Answer"}},
    {{"question": "Location-specific FAQ 7", "answer": "Answer"}},
    {{"question": "Location-specific FAQ 8", "answer": "Answer"}}
  ],
  "refinementQuestions": [
    {{"question": "Refinement Q1 for {service_name} in {display_name}", "answer": "Specific answer (60-100 words)"}},
    {{"question": "Refinement Q2", "answer": "Answer"}},
    {{"question": "Refinement Q3", "answer": "Answer"}},
    {{"question": "Refinement Q4", "answer": "Answer"}},
    {{"question": "Refinement Q5", "answer": "Answer"}},
    {{"question": "Refinement Q6", "answer": "Answer"}}
  ]
}}

CRITICAL: Every piece of content must be UNIQUE to {display_name}. Do not write anything that could be copy-pasted to another location page. Reference specific local details, housing ages, elevation effects, neighborhood names, and community character."""

    try:
        response = client.chat.completions.create(
            model="gpt-5-mini",
            messages=[
                {"role": "system", "content": "You are an expert SEO content writer specializing in local service pages for home services companies. You write highly specific, location-targeted content that Google values for local search. Always respond with valid JSON only - no markdown formatting, no code blocks."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.8,
            max_tokens=4000
        )
        
        content = response.choices[0].message.content.strip()
        # Remove markdown code blocks if present
        if content.startswith("```"):
            content = re.sub(r'^```(?:json)?\s*', '', content)
            content = re.sub(r'\s*```$', '', content)
        
        return json.loads(content)
    except json.JSONDecodeError as e:
        print(f"  JSON parse error for {service_key}-{location_key}: {e}")
        print(f"  Raw content: {content[:200]}...")
        return None
    except Exception as e:
        print(f"  API error for {service_key}-{location_key}: {e}")
        return None


def generate_typescript_file(slug, service_key, location_key, content_data, service_info, location_data):
    """Generate the TypeScript data file for a service page."""
    
    display_name = location_data["displayName"]
    service_name = service_info["serviceName"]
    category = service_info["category"]
    
    # Build the highlights array
    highlights_str = json.dumps(content_data["highlights"], indent=2)
    
    # Build the content sections
    sections_str = json.dumps(content_data["contentSections"], indent=6)
    
    # Build FAQs as inline (not shared)
    faqs_str = json.dumps(content_data["faqs"], indent=4)
    
    # Build refinement questions
    refinement_str = json.dumps(content_data["refinementQuestions"], indent=4)
    
    # Escape backticks in content for template literals
    title = content_data["title"].replace('"', '\\"')
    description = content_data["description"].replace('"', '\\"')
    h1 = content_data["h1"].replace('"', '\\"')
    h2 = content_data["h2Subheading"].replace('"', '\\"')
    tagline = content_data["tagline"].replace('"', '\\"')
    
    ts_content = f'''import type {{ ServicePageData }} from "@/types/services";

// Unique location-specific content for {service_name} in {display_name}
// Generated with location-specific data - NOT a template swap

const data: ServicePageData = {{
  // SEO & Meta
  title: "{title}",
  description: "{description}",
  slug: "{slug}",
  
  // Hero Section
  h1: "{h1}",
  h2Subheading: "{h2}",
  tagline: "{tagline}",
  heroImage: "/images/placeholder.webp",
  heroImageAlt: "{service_name} services in {display_name}, Arizona",
  
  // Service Info
  serviceName: "{service_name}",
  category: "{category}",
  
  // Content - Unique highlights for {display_name}
  highlights: {highlights_str},
  content: {{
    mainHeading: "{h1}",
    sections: {sections_str}
  }},
  
  // Location-specific FAQs (unique to {display_name})
  faqs: {{
    category: "{service_name} in {display_name}",
    items: {faqs_str}
  }},
  
  // Location-specific refinement questions
  commonQuestions: {refinement_str},
  
  // Service Area
  serviceArea: {{
    primary: "{display_name}",
    nearby: {json.dumps(location_data.get("neighborhoods", []))}
  }}
}};

export default data;
'''
    return ts_content


def process_category(service_key, locations=None):
    """Process all locations for a given service category."""
    
    service_info = SERVICE_CATEGORIES[service_key]
    
    if locations is None:
        locations = list(LOCATION_DATA.keys())
    
    results = {"success": [], "failed": []}
    
    for i, location_key in enumerate(locations):
        location_data = LOCATION_DATA[location_key]
        display_name = location_data["displayName"]
        
        # Determine slug
        if service_key == "solar":
            slug = f"solar-installation-{location_key}"
        else:
            slug = f"{service_key}-{location_key}"
        
        # Determine filename
        filename = slug.replace("-", "") + ".ts"
        filepath = f"/home/ubuntu/intelligent-design-tucson/data/pages/services/{filename}"
        
        print(f"  [{i+1}/{len(locations)}] Generating {service_info['serviceName']} - {display_name}...")
        
        # Generate content via LLM
        content_data = generate_page_content(service_key, location_key, location_data, service_info)
        
        if content_data is None:
            print(f"    FAILED - retrying once...")
            time.sleep(2)
            content_data = generate_page_content(service_key, location_key, location_data, service_info)
        
        if content_data is None:
            results["failed"].append(slug)
            print(f"    FAILED after retry")
            continue
        
        # Generate TypeScript file
        ts_content = generate_typescript_file(slug, service_key, location_key, content_data, service_info, location_data)
        
        # Write file
        with open(filepath, 'w') as f:
            f.write(ts_content)
        
        results["success"].append(slug)
        print(f"    SUCCESS -> {filename}")
        
        # Small delay to avoid rate limiting
        time.sleep(0.5)
    
    return results


if __name__ == "__main__":
    # Accept category as argument, or process all
    if len(sys.argv) > 1:
        category = sys.argv[1]
        if category not in SERVICE_CATEGORIES:
            print(f"Unknown category: {category}")
            print(f"Available: {', '.join(SERVICE_CATEGORIES.keys())}")
            sys.exit(1)
        
        print(f"\n{'='*60}")
        print(f"Processing category: {SERVICE_CATEGORIES[category]['serviceName']}")
        print(f"{'='*60}\n")
        
        results = process_category(category)
        
        print(f"\n{'='*60}")
        print(f"RESULTS: {len(results['success'])} success, {len(results['failed'])} failed")
        if results['failed']:
            print(f"Failed: {results['failed']}")
        print(f"{'='*60}\n")
    else:
        # Process all categories
        all_results = {}
        for cat_key in SERVICE_CATEGORIES:
            print(f"\n{'='*60}")
            print(f"Processing category: {SERVICE_CATEGORIES[cat_key]['serviceName']}")
            print(f"{'='*60}\n")
            
            results = process_category(cat_key)
            all_results[cat_key] = results
            
            print(f"\n  Category complete: {len(results['success'])} success, {len(results['failed'])} failed")
        
        # Final summary
        print(f"\n{'='*60}")
        print("FINAL SUMMARY")
        print(f"{'='*60}")
        total_success = sum(len(r['success']) for r in all_results.values())
        total_failed = sum(len(r['failed']) for r in all_results.values())
        print(f"Total: {total_success} success, {total_failed} failed")
        for cat, r in all_results.items():
            if r['failed']:
                print(f"  {cat} failures: {r['failed']}")
