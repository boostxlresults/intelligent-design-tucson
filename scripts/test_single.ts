import { fetchWordPressPost } from './bulkMigrateBlog.ts';

const url = 'https://www.idesignac.com/what-are-some-effective-strategies-to-reduce-ac-noise/';
const post = await fetchWordPressPost(url);

if (post) {
  console.log('Title:', post.title);
  console.log('Slug:', post.slug);
  console.log('Category:', post.category);
  console.log('Tags:', post.tags);
  console.log('Excerpt:', post.excerpt.substring(0, 100) + '...');
  console.log('Content length:', post.content.length);
} else {
  console.log('Failed to fetch post');
}
