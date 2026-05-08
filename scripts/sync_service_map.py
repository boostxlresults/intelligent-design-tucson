"""
ServiceTitan → Service Map Sync Pipeline
Pulls completed jobs from ServiceTitan, resolves locations, and populates
the Neon database for the /service-map page on idesignac.com.

Run: python3 scripts/sync_service_map.py [--days 30] [--limit 500]
"""

import os
import sys
import json
import time
import requests
from datetime import datetime, timedelta
import psycopg2

# ServiceTitan API Credentials
ST_CLIENT_ID = "cid.05yuzql8drftq70qsr0p92kv1"
ST_CLIENT_SECRET = "cs1.9493galthwyaggnfde4j2qn9iws6guwmjm65eatcg18n1c3dbw"
ST_APP_KEY = "ak1.pokzkxlhneuoybksiclx7s3ke"
ST_TENANT_ID = "227669022"
ST_AUTH_URL = "https://auth.servicetitan.io/connect/token"
ST_API_BASE = f"https://api.servicetitan.io"

# Neon Database
DATABASE_URL = "postgresql://neondb_owner:npg_8NFGXWZL3nSe@ep-floral-credit-ajcy34x0-pooler.c-3.us-east-2.aws.neon.tech/neondb?sslmode=require"

# Business Unit ID → Name mapping
BU_ID_MAP = {
    38050: "HVAC Sales",
    38177: "HVAC Install",
    38296: "Plumbing",
    38297: "G & A",
    38298: "HVAC Service Repair",
    100004: "HVAC Scheduled Service",
    63273843: "Electrical",
    63273971: "PV Solar",
    70034293: "Roofing",
}

# BU Name → Service Category mapping
BU_SERVICE_MAP = {
    "HVAC Sales": "HVAC Consultation",
    "HVAC Install": "HVAC Installation",
    "HVAC Service Repair": "AC Repair",
    "HVAC Scheduled Service": "AC Maintenance",
    "Plumbing": "Plumbing",
    "Electrical": "Electrical",
    "PV Solar": "Solar Installation",
    "Roofing": "Roofing",
    "G & A": "General Service",
}

# Location cache to avoid repeated API calls
location_cache = {}


def get_st_token():
    """Get ServiceTitan API access token."""
    resp = requests.post(ST_AUTH_URL, data={
        "grant_type": "client_credentials",
        "client_id": ST_CLIENT_ID,
        "client_secret": ST_CLIENT_SECRET,
    })
    resp.raise_for_status()
    return resp.json()["access_token"]


def get_headers(token):
    return {
        "Authorization": f"Bearer {token}",
        "ST-App-Key": ST_APP_KEY,
    }


def get_completed_jobs(token, days_back=30, limit=2000):
    """Pull completed jobs from ServiceTitan for the last N days."""
    headers = get_headers(token)
    
    # Use completedOnOrAfter filter
    start_date = (datetime.utcnow() - timedelta(days=days_back)).strftime("%Y-%m-%dT00:00:00Z")
    
    all_jobs = []
    page = 1
    
    while len(all_jobs) < limit:
        params = {
            "completedOnOrAfter": start_date,
            "jobStatus": "Completed",
            "page": page,
            "pageSize": 100,
        }
        
        resp = requests.get(
            f"{ST_API_BASE}/jpm/v2/tenant/{ST_TENANT_ID}/jobs",
            headers=headers,
            params=params,
            timeout=30,
        )
        
        if resp.status_code != 200:
            print(f"  Error page {page}: {resp.status_code} - {resp.text[:200]}")
            break
        
        data = resp.json()
        jobs = data.get("data", [])
        all_jobs.extend(jobs)
        
        has_more = data.get("hasMore", False)
        if not has_more or not jobs:
            break
        
        page += 1
        if page > 30:  # Safety limit
            break
    
    print(f"  Fetched {len(all_jobs)} completed jobs from last {days_back} days")
    return all_jobs[:limit]


def get_location_details(token, location_id):
    """Fetch location address from ServiceTitan CRM API. Uses cache."""
    if location_id in location_cache:
        return location_cache[location_id]
    
    headers = get_headers(token)
    resp = requests.get(
        f"{ST_API_BASE}/crm/v2/tenant/{ST_TENANT_ID}/locations/{location_id}",
        headers=headers,
        timeout=15,
    )
    
    if resp.status_code != 200:
        location_cache[location_id] = None
        return None
    
    loc_data = resp.json()
    address = loc_data.get("address", {}) or {}
    
    result = {
        "address_full": f"{address.get('street', '').strip()} {address.get('city', '')}, {address.get('state', '')} {address.get('zip', '')}".strip(),
        "city": address.get("city", ""),
        "state": address.get("state", "AZ"),
        "zip": address.get("zip", ""),
        "latitude": address.get("latitude"),
        "longitude": address.get("longitude"),
    }
    
    location_cache[location_id] = result
    return result


def get_customer_name(token, customer_id):
    """Fetch customer name from ServiceTitan."""
    headers = get_headers(token)
    resp = requests.get(
        f"{ST_API_BASE}/crm/v2/tenant/{ST_TENANT_ID}/customers/{customer_id}",
        headers=headers,
        timeout=15,
    )
    
    if resp.status_code != 200:
        return "", ""
    
    data = resp.json()
    name = data.get("name", "") or ""
    parts = name.split()
    
    if len(parts) >= 2:
        return parts[0], parts[-1][0]
    elif len(parts) == 1:
        return parts[0], ""
    return "", ""


def categorize_service(job):
    """Determine the service type from job details."""
    bu_id = job.get("businessUnitId")
    bu_name = BU_ID_MAP.get(bu_id, "")
    summary = (job.get("summary", "") or "").lower()
    
    # Check keywords in summary for more specific categorization
    if "install" in summary or "replacement" in summary:
        if bu_id in [38298, 100004, 38050, 38177]:
            return "HVAC Installation"
        elif bu_id == 38296:
            return "Plumbing Installation"
        elif bu_id == 63273843:
            return "Electrical Installation"
    
    if "tune" in summary or "maintenance" in summary or "cleaning" in summary:
        return "AC Maintenance"
    
    if "drain" in summary or "sewer" in summary:
        return "Drain & Sewer"
    
    if "water heater" in summary:
        return "Water Heater Service"
    
    if "solar" in summary or "panel" in summary:
        return "Solar Installation"
    
    if "roof" in summary or "coating" in summary:
        return "Roofing"
    
    # Fallback to BU mapping
    return BU_SERVICE_MAP.get(bu_name, bu_name or "General Service")


def sync_jobs_to_db(jobs, token):
    """Insert new jobs into the Neon database, resolving locations."""
    conn = psycopg2.connect(DATABASE_URL)
    cur = conn.cursor()
    
    inserted = 0
    skipped = 0
    errors = 0
    
    # Get existing job IDs to avoid redundant checks
    cur.execute("SELECT servicetitan_job_id FROM job_checkins")
    existing_ids = set(row[0] for row in cur.fetchall())
    
    for i, job in enumerate(jobs):
        job_id = str(job.get("id", ""))
        if not job_id or job_id in existing_ids:
            skipped += 1
            continue
        
        # Skip G&A jobs (internal)
        bu_id = job.get("businessUnitId")
        if bu_id == 38297:
            skipped += 1
            continue
        
        # Resolve location
        location_id = job.get("locationId")
        if not location_id:
            skipped += 1
            continue
        
        location = get_location_details(token, location_id)
        if not location or not location["city"]:
            skipped += 1
            continue
        
        # Categorize service
        service_type = categorize_service(job)
        bu_name = BU_ID_MAP.get(bu_id, "")
        
        # Get customer info (batch later for performance)
        customer_id = job.get("customerId")
        customer_first, customer_last = "", ""
        if customer_id and inserted < 50:  # Only fetch for first 50 to avoid rate limiting
            customer_first, customer_last = get_customer_name(token, customer_id)
        
        # Completed date
        completed_at = job.get("completedOn") or job.get("modifiedOn") or datetime.utcnow().isoformat()
        
        # Build short description
        summary = job.get("summary", "") or ""
        # Clean up the summary - remove internal notes
        clean_summary = summary.split("Notes added by")[0].strip()
        clean_summary = clean_summary.replace("***do not move these calls****", "").strip()
        short_desc = clean_summary[:500] if clean_summary else f"{service_type} service completed in {location['city']}, AZ"
        
        try:
            cur.execute("""
                INSERT INTO job_checkins 
                (servicetitan_job_id, service_type, business_unit, short_description,
                 address_full, city, state, zip, latitude, longitude,
                 technician_name, customer_first_name, customer_last_initial,
                 completed_at, images, tags)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """, (
                job_id, service_type, bu_name, short_desc,
                location["address_full"], location["city"], location["state"], location["zip"],
                location.get("latitude"), location.get("longitude"),
                "",  # technician_name - will be populated later
                customer_first, customer_last,
                completed_at, json.dumps([]), json.dumps([service_type, bu_name])
            ))
            inserted += 1
            existing_ids.add(job_id)
        except Exception as e:
            errors += 1
            if errors < 5:
                print(f"  Error inserting job {job_id}: {e}")
            conn.rollback()
            continue
        
        # Commit every 50 records
        if inserted % 50 == 0:
            conn.commit()
            print(f"  Progress: {inserted} inserted, {skipped} skipped...")
        
        # Rate limiting - don't hammer the locations API
        if i % 20 == 0:
            time.sleep(0.5)
    
    conn.commit()
    cur.close()
    conn.close()
    
    print(f"  Sync complete: {inserted} inserted, {skipped} skipped, {errors} errors")
    return inserted


def main():
    # Parse args
    days_back = 30
    limit = 2000
    
    for i, arg in enumerate(sys.argv):
        if arg == "--days" and i + 1 < len(sys.argv):
            days_back = int(sys.argv[i + 1])
        if arg == "--limit" and i + 1 < len(sys.argv):
            limit = int(sys.argv[i + 1])
    
    print(f"=== Service Map Sync - {datetime.utcnow().strftime('%Y-%m-%d %H:%M UTC')} ===")
    print(f"  Config: last {days_back} days, limit {limit} jobs")
    
    # Authenticate
    print("  Authenticating with ServiceTitan...")
    token = get_st_token()
    print("  ✓ Authenticated")
    
    # Pull completed jobs
    print("  Fetching completed jobs...")
    jobs = get_completed_jobs(token, days_back=days_back, limit=limit)
    
    if not jobs:
        print("  No jobs found")
        return
    
    # Sync to database (resolving locations)
    print("  Syncing to database (resolving locations)...")
    inserted = sync_jobs_to_db(jobs, token)
    
    print(f"\n=== Done! {inserted} new check-ins added to service map ===")
    print(f"  Location cache hits: {len(location_cache)} unique locations resolved")


if __name__ == "__main__":
    main()
