# Agency Owner Setup Guide
## How to Initiate a New Website Rebuild Project in Replit

This step-by-step guide walks you through setting up a new Replit project for a client website rebuild using our proven framework.

---

## Pre-Project Preparation (Before Opening Replit)

### Step 1: Gather Client Information
Before starting the Replit project, collect this information from your client:

**Required:**
- [ ] Live website URL
- [ ] Business name (exact legal name for schema markup)
- [ ] Business address (full street address, city, state, zip)
- [ ] Primary phone number
- [ ] Business email
- [ ] Business hours
- [ ] List of services offered
- [ ] Service areas/locations served
- [ ] Google Business Profile URL (if exists)
- [ ] Social media links

**If Available:**
- [ ] Sitemap.xml URL (usually `domain.com/sitemap.xml`)
- [ ] Google Analytics/GTM account access
- [ ] Google Search Console access
- [ ] Existing logo files (PNG/SVG preferred)
- [ ] Brand colors (hex codes)
- [ ] Existing content they want to preserve
- [ ] Competitor websites to reference

**Strategic Questions:**
- [ ] Are we migrating existing content or creating new?
- [ ] Are we expanding for SEO/AI SEO purposes?
- [ ] What are the primary conversion goals? (calls, forms, bookings)
- [ ] Any third-party integrations needed? (scheduling, payments, chat)
- [ ] Target keywords/services to prioritize?

---

## Project Setup in Replit

### Step 2: Create New Replit Project

**IMPORTANT:** Replit's default Next.js template uses App Router, but our framework requires **Pages Router**. Follow these instructions carefully.

#### Option A: Clone Your Starter Template (RECOMMENDED)

If you have set up the agency starter template repository:

1. **Log into Replit** at [replit.com](https://replit.com)
2. **Import from GitHub:**
   - Click "Create Repl" or "+" button
   - Select "Import from GitHub"
   - Enter your starter template repository URL
   - Name the project: `[ClientName]-website-rebuild`
   - Click "Import from GitHub"
3. **Verify Pages Router:**
   - Confirm you see a `/pages` folder (NOT `/app`)
   - If you see `/app` folder, you imported the wrong template

#### Option B: Start Fresh with Blank Project

If you don't have a starter template yet:

1. **Log into Replit** at [replit.com](https://replit.com)
2. **Create Blank Project:**
   - Click "Create Repl" or "+" button
   - Select "Node.js" (NOT Next.js template)
   - Name the project: `[ClientName]-website-rebuild`
   - Click "Create Repl"
3. **First Prompt to Agent:**
   ```
   Set up a Next.js project using Pages Router (NOT App Router). 
   Install: next, react, react-dom, typescript, tailwindcss, @types/react, @types/node.
   Create the following folder structure:
   - /pages (for routing - NOT /app)
   - /components
   - /lib
   - /styles
   - /public
   - /data
   
   Configure TypeScript, Tailwind CSS, and create a basic _app.tsx and index.tsx.
   Do NOT use App Router or create an /app directory.
   ```
4. **Verify Setup:**
   - Confirm `/pages` folder exists
   - Confirm NO `/app` folder exists
   - If agent created `/app` folder, delete it and redirect agent to GUARDRAILS.md

#### If You Accidentally Started with App Router

If you created a project and it has an `/app` folder:

1. **Stop immediately** - don't build anything yet
2. **Tell the agent:**
   ```
   This project was set up with App Router but we require Pages Router.
   Please convert to Pages Router:
   1. Delete the /app directory
   2. Create /pages directory
   3. Move routing to /pages folder structure
   4. Update next.config.js if needed
   5. Verify no App Router patterns remain
   ```
3. **Verify conversion before proceeding**

### Step 3: Upload Framework Files

1. **Download the framework files** from your master folder:
   - `replit.md` (will be customized)
   - `MASTER-DISCOVERY-PROMPT.md`
   - `BUILD-CHECKLIST.md`
   - `GUARDRAILS.md`

2. **Upload to project root:**
   - In Replit, click the three dots menu in the Files panel
   - Select "Upload file" or drag files into the file tree
   - Upload all framework files to the root directory

### Step 4: Customize replit.md

Before engaging the agent, edit `replit.md` with client-specific information:

```markdown
# [Client Business Name] - Website Rebuild

## Project Overview
- **Client:** [Business Name]
- **Live Site:** [current-domain.com]
- **Industry:** [e.g., Home Services, Legal, Medical, etc.]
- **Primary Goal:** [e.g., Lead generation, bookings, sales]

## Business Information
- **Business Name:** [Exact legal name]
- **Address:** [Full address]
- **Phone:** [Primary number]
- **Email:** [Business email]
- **Hours:** [Business hours]

## Services
[List all services]

## Service Areas
[List all locations/areas served]

## Brand Assets
- **Primary Color:** [Hex code]
- **Secondary Color:** [Hex code]
- **Logo:** [Path to uploaded logo]

## Integrations Required
- [ ] Google Analytics 4
- [ ] Google Tag Manager
- [ ] Google Search Console
- [ ] [Other: ServiceTitan, Calendly, etc.]

## Content Strategy
- [ ] Migrate existing content
- [ ] Create new SEO-optimized content
- [ ] Expand with location pages
- [ ] Add blog/resource center
```

### Step 5: Initiate the Build

1. **Start a conversation with the Replit Agent**

2. **Paste the Master Discovery Prompt:**
   - Open `MASTER-DISCOVERY-PROMPT.md`
   - Copy the entire prompt
   - Paste it into the chat

3. **Answer any follow-up questions** the agent asks

4. **Confirm the build plan** before the agent begins

---

## During the Build

### Step 6: Monitor Progress

- **Check the task list** regularly - the agent should be working through the BUILD-CHECKLIST items
- **Review the webview** as pages are created
- **Test on mobile** using browser dev tools
- **Verify all links work** as sections are completed

### Step 7: Quality Checkpoints

At each major milestone, verify:

**After Homepage:**
- [ ] Mobile responsive
- [ ] Fast loading (check Lighthouse)
- [ ] CTAs working
- [ ] Schema markup present

**After Service Pages:**
- [ ] All services have dedicated pages
- [ ] Internal linking in place
- [ ] FAQs included
- [ ] Schema markup for each

**After Location Pages:**
- [ ] All service areas covered
- [ ] LocalBusiness schema per location
- [ ] Consistent NAP information

**After Blog/Resources:**
- [ ] Content migrated successfully
- [ ] Categories organized
- [ ] Internal links added
- [ ] Images optimized

### Step 8: Final Review

Before delivery, ensure:

- [ ] All pages from BUILD-CHECKLIST complete
- [ ] Redirects configured (if migrating from old URL structure)
- [ ] llms.txt created and accurate
- [ ] Knowledge Hub / Resource Center complete
- [ ] All forms tested
- [ ] Mobile testing complete
- [ ] PageSpeed Insights score acceptable (90+)
- [ ] Schema validation passes (schema.org validator)
- [ ] robots.txt configured
- [ ] Sitemap generates correctly

---

## Post-Build

### Step 9: Client Handoff Preparation

1. **Document any client-specific customizations**
2. **Update replit.md with final architecture notes**
3. **Test the publish/deploy process**
4. **Prepare training notes for client if needed**

### Step 10: Deployment

1. **Run final tests**
2. **Use Replit's deploy/publish feature**
3. **Configure custom domain if needed**
4. **Set up Google Search Console for new site**
5. **Submit sitemap to Google**
6. **Monitor for 48-72 hours post-launch**

---

## Troubleshooting Common Issues

### Agent Tries to Change Architecture
- Remind it to check GUARDRAILS.md
- Paste the relevant guardrail rule
- Be firm: "Do not change the router type. Use Pages Router as specified."

### Build Gets Stuck
- Check the workflow logs for errors
- Restart the workflow if needed
- Provide more specific instructions

### Content Migration Issues
- Verify the source URL is accessible
- Check if robots.txt blocks scraping
- May need manual content entry for protected sites

### Performance Issues
- Check for unoptimized images
- Verify no unnecessary API calls
- Review bundle size

---

## Quick Reference Commands

**Start fresh conversation:**
"Please review replit.md and GUARDRAILS.md, then proceed with the build according to BUILD-CHECKLIST.md"

**Reset if agent veers off course:**
"Stop. Review GUARDRAILS.md. You are not following the established rules. [Specific issue]"

**Check progress:**
"What items from BUILD-CHECKLIST.md are complete? What's remaining?"

**Force a specific approach:**
"Per GUARDRAILS.md, you must [specific requirement]. Do not deviate."

---

## File Locations Reference

After setup, your project should have:

```
/
├── replit.md                    # Project-specific configuration
├── MASTER-DISCOVERY-PROMPT.md   # Initial prompt for agent
├── BUILD-CHECKLIST.md           # Comprehensive build requirements  
├── GUARDRAILS.md                # Hard rules - do not violate
├── pages/                       # Next.js Pages Router
├── components/                  # React components
├── styles/                      # CSS/Tailwind
├── public/                      # Static assets
│   ├── llms.txt                # AI search optimization
│   ├── robots.txt              # Search engine directives
│   └── images/                 # Optimized images
├── lib/                        # Utilities and helpers
│   ├── seo/                    # Schema generators
│   └── redirects.ts            # URL redirect management
└── data/                       # Content data files
```
