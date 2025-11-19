import { fetchWordPressPost, saveBlogPost } from './bulkMigrateBlog.ts';

const url = 'https://www.idesignac.com/what-are-some-effective-strategies-to-reduce-ac-noise/';
const post = await fetchWordPressPost(url);

if (post) {
  console.log('Fetched post:', post.title);
  console.log('Saving to:', `public/content/blog/${post.category}/${post.slug}.md`);
  try {
    await saveBlogPost(post);
    console.log('✓ Save successful!');
  } catch (error) {
    console.error('✗ Save failed:', error);
  }
} else {
  console.log('Failed to fetch post');
}
