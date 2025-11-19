import fs from 'fs';
import path from 'path';

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  heroImage: string;
  publishedAt: string;
  author: string;
  readingTime: number;
  featured: boolean;
}

interface BlogIndex {
  posts: BlogPost[];
  categories: any[];
}

// Helper function to generate SEO-optimized tags based on title and category
function generateTags(title: string, category: string): string[] {
  const commonTags = ['tucson', 'arizona'];
  const categoryTags: Record<string, string[]> = {
    'hvac': ['hvac', 'air-conditioning', 'heating', 'cooling', 'energy-efficiency', 'maintenance'],
    'plumbing': ['plumbing', 'water-heater', 'leak-repair', 'drain-cleaning', 'pipe-repair'],
    'solar': ['solar-energy', 'solar-panels', 'renewable-energy', 'solar-installation', 'energy-savings'],
    'roofing': ['roofing', 'roof-repair', 'roof-replacement', 'roof-maintenance', 'commercial-roofing'],
    'electrical': ['electrical', 'electrical-repair', 'panel-upgrades', 'lighting', 'generator'],
    'home-tips': ['home-improvement', 'maintenance-tips', 'energy-savings', 'home-comfort', 'diy'],
  };

  const tags: Set<string> = new Set();
  
  // Add category-specific tags
  const catTags = categoryTags[category] || categoryTags['home-tips'];
  tags.add(catTags[0]); // Always add primary category tag
  
  // Add Tucson if not already there
  tags.add('tucson');
  
  // Analyze title for specific keywords
  const titleLower = title.toLowerCase();
  
  // HVAC-related
  if (titleLower.includes('ac') || titleLower.includes('air condition') || titleLower.includes('cooling')) {
    tags.add('air-conditioning');
    tags.add('cooling');
  }
  if (titleLower.includes('heat') || titleLower.includes('furnace')) {
    tags.add('heating');
    tags.add('heater-repair');
  }
  if (titleLower.includes('hvac') || titleLower.includes('maintenance')) {
    tags.add('hvac-maintenance');
  }
  if (titleLower.includes('energy') || titleLower.includes('efficient')) {
    tags.add('energy-efficiency');
  }
  
  // Plumbing-related
  if (titleLower.includes('water') || titleLower.includes('plumb') || titleLower.includes('pipe')) {
    tags.add('plumbing');
  }
  if (titleLower.includes('leak')) {
    tags.add('leak-detection');
    tags.add('leak-repair');
  }
  if (titleLower.includes('drain') || titleLower.includes('clog')) {
    tags.add('drain-cleaning');
  }
  if (titleLower.includes('water heater')) {
    tags.add('water-heater');
    tags.add('water-heater-repair');
  }
  if (titleLower.includes('sewer')) {
    tags.add('sewer-repair');
  }
  if (titleLower.includes('repiping') || titleLower.includes('repipe')) {
    tags.add('repiping');
    tags.add('pipe-replacement');
  }
  
  // Solar-related
  if (titleLower.includes('solar')) {
    tags.add('solar-energy');
    tags.add('solar-panels');
  }
  if (titleLower.includes('renewable')) {
    tags.add('renewable-energy');
  }
  
  // Roofing-related
  if (titleLower.includes('roof')) {
    tags.add('roofing');
  }
  if (titleLower.includes('commercial roof')) {
    tags.add('commercial-roofing');
  }
  if (titleLower.includes('residential roof')) {
    tags.add('residential-roofing');
  }
  
  // Electrical-related
  if (titleLower.includes('electric') || titleLower.includes('panel')) {
    tags.add('electrical');
  }
  if (titleLower.includes('generator') || titleLower.includes('generac')) {
    tags.add('generator');
    tags.add('backup-power');
  }
  
  // Home improvement
  if (titleLower.includes('diy') || titleLower.includes('yourself')) {
    tags.add('diy');
  }
  if (titleLower.includes('comfort')) {
    tags.add('home-comfort');
  }
  if (titleLower.includes('smart') || titleLower.includes('thermostat')) {
    tags.add('smart-home');
  }
  if (titleLower.includes('tip') || titleLower.includes('guide')) {
    tags.add('maintenance-tips');
  }
  
  // Seasonal
  if (titleLower.includes('summer') || titleLower.includes('cool')) {
    tags.add('summer');
  }
  if (titleLower.includes('winter') || titleLower.includes('cold')) {
    tags.add('winter');
  }
  if (titleLower.includes('monsoon')) {
    tags.add('monsoon');
  }
  
  // Location-specific (besides Tucson)
  const locations = ['oro valley', 'marana', 'sahuarita', 'green valley', 'vail', 'casas adobes'];
  for (const loc of locations) {
    if (titleLower.includes(loc)) {
      tags.add(loc.replace(' ', '-'));
    }
  }
  
  // Ensure we have 5-8 tags total
  const tagsArray = Array.from(tags);
  if (tagsArray.length < 5) {
    // Add more category-specific tags
    catTags.forEach(tag => {
      if (tagsArray.length < 6 && !tags.has(tag)) {
        tagsArray.push(tag);
      }
    });
  }
  
  // Limit to 8 tags max
  return tagsArray.slice(0, 8);
}

// Helper function to create clean, SEO-optimized descriptions
function generateDescription(title: string, category: string): string {
  // Extract key concepts from title for more specific descriptions
  const titleLower = title.toLowerCase();
  
  // If title is already short enough and descriptive, use it with a suffix
  if (title.length >= 100 && title.length <= 160) {
    return title;
  }
  
  // Create unique descriptions based on title keywords and category
  let description = '';
  
  // Try to extract the essence and create a compelling summary
  if (titleLower.includes('guide') || titleLower.includes('complete') || titleLower.includes('ultimate')) {
    description = `${title} Professional insights from Intelligent Design's Tucson HVAC, plumbing, solar & electrical experts. Free estimates available.`;
  } else if (titleLower.includes('why') || titleLower.includes('when') || titleLower.includes('how')) {
    description = `${title} Get expert answers from Intelligent Design, Tucson's trusted home services provider since 1979. Call today!`;
  } else if (titleLower.includes('troubleshoot') || titleLower.includes('fix') || titleLower.includes('repair')) {
    description = `${title} Professional help from Intelligent Design. Serving Tucson with expert HVAC, plumbing & electrical repairs. 24/7 emergency service.`;
  } else if (titleLower.includes('tips') || titleLower.includes('advice')) {
    description = `${title} Expert tips from Intelligent Design's certified technicians. Serving Tucson homeowners since 1979. BBB A+ rated.`;
  } else if (titleLower.includes('solar') || titleLower.includes('energy')) {
    description = `${title} Expert guidance from Intelligent Design's solar specialists. Tucson's premier renewable energy & home services provider.`;
  } else if (category === 'hvac') {
    description = `${title} Professional HVAC insights from Intelligent Design. Tucson's trusted air conditioning & heating experts since 1979.`;
  } else if (category === 'plumbing') {
    description = `${title} Expert plumbing advice from Intelligent Design. Tucson's reliable plumbing services provider. Same-day appointments available.`;
  } else if (category === 'solar') {
    description = `${title} Solar expertise from Intelligent Design. Tucson's premier solar installation & renewable energy provider. Free consultations.`;
  } else if (category === 'roofing') {
    description = `${title} Professional roofing guidance from Intelligent Design. Tucson's trusted roofing contractor. Quality workmanship guaranteed.`;
  } else if (category === 'electrical') {
    description = `${title} Licensed electrician advice from Intelligent Design. Tucson's reliable electrical services. Safe, code-compliant solutions.`;
  } else {
    description = `${title} Helpful information from Intelligent Design, Tucson's family-owned home services company. HVAC, plumbing, solar & electrical.`;
  }
  
  // Ensure it's 150-160 characters
  if (description.length > 160) {
    // Find last complete sentence or phrase before 157 chars
    let truncated = description.substring(0, 157);
    const lastPeriod = truncated.lastIndexOf('.');
    const lastComma = truncated.lastIndexOf(',');
    
    if (lastPeriod > 100) {
      description = truncated.substring(0, lastPeriod + 1);
    } else if (lastComma > 100) {
      description = truncated.substring(0, lastComma) + '...';
    } else {
      description = truncated + '...';
    }
  } else if (description.length < 140) {
    // Add call to action if too short
    if (!description.includes('Call') && !description.includes('Free')) {
      description = description.replace(/\.$/, '. Call 520-333-2665.');
    }
  }
  
  return description;
}

// Verify and potentially correct category
function verifyCategory(title: string, currentCategory: string): string {
  const titleLower = title.toLowerCase();
  
  // Strong category indicators
  if ((titleLower.includes('hvac') || titleLower.includes('air condition') || titleLower.includes('heating') || titleLower.includes('furnace')) && 
      !titleLower.includes('solar ac')) {
    return 'hvac';
  }
  if (titleLower.includes('plumb') || titleLower.includes('water heater') || titleLower.includes('drain') || 
      titleLower.includes('sewer') || titleLower.includes('leak') || titleLower.includes('pipe')) {
    return 'plumbing';
  }
  if (titleLower.includes('solar') || titleLower.includes('renewable energy')) {
    return 'solar';
  }
  if (titleLower.includes('roof')) {
    return 'roofing';
  }
  if (titleLower.includes('electric') || titleLower.includes('generator') || titleLower.includes('panel') ||
      titleLower.includes('circuit')) {
    return 'electrical';
  }
  
  // If no strong indicator, keep current category
  return currentCategory;
}

// Determine if post should be featured based on quality signals
function shouldBeFeatured(post: BlogPost, allPosts: BlogPost[]): boolean {
  // Quality signals:
  // 1. Longer reading time (8+ minutes suggests comprehensive content)
  // 2. Not a location-specific promotional post
  // 3. Practical, actionable content
  
  const titleLower = post.title.toLowerCase();
  
  // Exclude location-specific promotional posts
  if (titleLower.includes('serving') || titleLower.includes('your neighborhood') || 
      titleLower.includes('community commitment') || titleLower.includes('we\'re your neighbors')) {
    return false;
  }
  
  // Favor comprehensive guides and how-tos
  if (post.readingTime >= 8 && (
    titleLower.includes('guide') || 
    titleLower.includes('how to') || 
    titleLower.includes('what to expect') ||
    titleLower.includes('complete') ||
    titleLower.includes('comprehensive') ||
    titleLower.includes('everything you need')
  )) {
    return true;
  }
  
  // Favor important maintenance and safety content
  if (post.readingTime >= 6 && (
    titleLower.includes('maintenance') ||
    titleLower.includes('troubleshoot') ||
    titleLower.includes('common mistakes') ||
    titleLower.includes('avoid') ||
    titleLower.includes('when to call')
  )) {
    return true;
  }
  
  return false;
}

async function optimizeBlogPosts() {
  console.log('🚀 Starting blog post optimization...\n');
  
  // Read the current blog index
  const blogIndexPath = path.join(process.cwd(), 'client/src/data/blogIndex.json');
  const blogData: BlogIndex = JSON.parse(fs.readFileSync(blogIndexPath, 'utf-8'));
  
  console.log(`📚 Found ${blogData.posts.length} blog posts to optimize\n`);
  
  // Track changes
  let tagsAdded = 0;
  let descriptionsRewritten = 0;
  let categoriesChanged = 0;
  let postsMarkedFeatured = 0;
  
  // Process each post
  blogData.posts = blogData.posts.map(post => {
    // Generate tags if empty
    if (!post.tags || post.tags.length === 0) {
      post.tags = generateTags(post.title, post.category);
      tagsAdded++;
    }
    
    // Always rewrite descriptions to ensure uniqueness and quality
    const newDescription = generateDescription(post.title, post.category);
    if (post.description !== newDescription) {
      post.description = newDescription;
      descriptionsRewritten++;
    }
    
    // Verify category
    const newCategory = verifyCategory(post.title, post.category);
    if (newCategory !== post.category) {
      console.log(`📝 Category change: "${post.title}" from ${post.category} to ${newCategory}`);
      post.category = newCategory;
      categoriesChanged++;
    }
    
    return post;
  });
  
  // Mark featured posts (aim for 10-15 total)
  const candidatePosts = blogData.posts.filter(post => shouldBeFeatured(post, blogData.posts));
  
  // Sort candidates by reading time (longer = more comprehensive)
  candidatePosts.sort((a, b) => b.readingTime - a.readingTime);
  
  // Mark top 12 as featured
  const featuredCount = Math.min(12, candidatePosts.length);
  for (let i = 0; i < featuredCount; i++) {
    const post = blogData.posts.find(p => p.slug === candidatePosts[i].slug);
    if (post) {
      post.featured = true;
      postsMarkedFeatured++;
      console.log(`⭐ Featured: "${post.title}" (${post.readingTime} min read)`);
    }
  }
  
  // Write back the optimized data
  fs.writeFileSync(blogIndexPath, JSON.stringify(blogData, null, 2), 'utf-8');
  
  console.log('\n✅ Blog optimization complete!');
  console.log(`\n📊 Summary:`);
  console.log(`   • ${tagsAdded} posts received new tags`);
  console.log(`   • ${descriptionsRewritten} descriptions rewritten`);
  console.log(`   • ${categoriesChanged} categories corrected`);
  console.log(`   • ${postsMarkedFeatured} posts marked as featured\n`);
}

optimizeBlogPosts().catch(console.error);
