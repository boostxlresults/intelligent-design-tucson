"""
AI Description Generator for Service Map Check-ins
Uses OpenAI gpt-4.1-mini to generate professional service descriptions
for each check-in that currently only has a raw ST summary.
"""

import os
import json
import time
import psycopg2
from openai import OpenAI

DATABASE_URL = "postgresql://neondb_owner:npg_8NFGXWZL3nSe@ep-floral-credit-ajcy34x0-pooler.c-3.us-east-2.aws.neon.tech/neondb?sslmode=require"

client = OpenAI()  # Uses OPENAI_API_KEY env var

SYSTEM_PROMPT = """You are writing professional service completion summaries for Intelligent Design Air Conditioning, Plumbing, Solar, & Electric — a family-owned, veteran-owned home services company serving Tucson, AZ and surrounding areas since 1979.

Write a 100-180 word description that:
- Describes the specific service performed in professional language
- Naturally mentions the city/neighborhood where the work was done
- Includes relevant technical details appropriate for homeowners
- Mentions common problems this service addresses
- Sounds natural and informative (NOT salesy or keyword-stuffed)
- Does NOT include customer names or exact addresses
- Does NOT mention pricing or costs
- Does NOT include any call-to-action

Write in third person past tense. Be specific and technical but accessible to homeowners."""


def generate_description(service_type, city, short_desc, business_unit):
    """Generate a professional description using AI."""
    
    user_prompt = f"""Service Type: {service_type}
Location: {city}, AZ
Business Unit: {business_unit}
Original Job Notes: {short_desc}

Write the service completion summary."""

    try:
        response = client.chat.completions.create(
            model="gpt-4.1-mini",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_prompt},
            ],
            max_tokens=300,
            temperature=0.7,
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        print(f"  Error generating description: {e}")
        return None


def main():
    conn = psycopg2.connect(DATABASE_URL)
    cur = conn.cursor()
    
    # Get check-ins without AI descriptions (description is NULL)
    cur.execute("""
        SELECT id, service_type, city, short_description, business_unit 
        FROM job_checkins 
        WHERE description IS NULL 
        ORDER BY completed_at DESC 
        LIMIT 100
    """)
    
    rows = cur.fetchall()
    print(f"Generating descriptions for {len(rows)} check-ins...")
    
    generated = 0
    for i, (checkin_id, service_type, city, short_desc, bu) in enumerate(rows):
        desc = generate_description(service_type, city, short_desc, bu)
        
        if desc:
            cur.execute(
                "UPDATE job_checkins SET description = %s WHERE id = %s",
                (desc, checkin_id)
            )
            generated += 1
        
        # Commit every 10
        if (i + 1) % 10 == 0:
            conn.commit()
            print(f"  Generated {generated}/{i+1}...")
        
        # Rate limiting
        time.sleep(0.3)
    
    conn.commit()
    cur.close()
    conn.close()
    
    print(f"\nDone! Generated {generated} descriptions.")


if __name__ == "__main__":
    main()
