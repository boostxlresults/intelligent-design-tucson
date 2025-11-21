/**
 * VideoObject Schema Generator
 * Creates structured data for embedded YouTube videos
 * Helps with video rich snippets and AI search
 */

export interface VideoObjectSchemaOptions {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string; // ISO 8601 format (YYYY-MM-DD)
  duration?: string; // ISO 8601 duration format (e.g., "PT5M30S")
  contentUrl?: string; // YouTube watch URL
  embedUrl: string; // YouTube embed URL
  canonicalUrl?: string; // Page URL where video appears
}

/**
 * Generates VideoObject schema for YouTube embeds
 */
export function generateVideoObjectSchema(options: VideoObjectSchemaOptions) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": options.name,
    "description": options.description,
    "thumbnailUrl": options.thumbnailUrl,
    "uploadDate": options.uploadDate,
    "embedUrl": options.embedUrl
  };

  // Add duration if provided
  if (options.duration) {
    schema.duration = options.duration;
  }

  // Add contentUrl (watch URL) if provided
  if (options.contentUrl) {
    schema.contentUrl = options.contentUrl;
  }

  // Add publisher (Intelligent Design)
  schema.publisher = {
    "@type": "Organization",
    "@id": "https://www.idesignac.com/#organization",
    "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.idesignac.com/logo.png"
    }
  };

  return schema;
}

/**
 * Generates multiple VideoObject schemas from YouTube playlist
 */
export function generatePlaylistVideoSchemas(
  playlistId: string,
  playlistName: string,
  playlistDescription: string,
  videoCount: number = 10
): any[] {
  // For playlists, we return a single ItemList schema containing VideoObjects
  return [{
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": playlistName,
    "description": playlistDescription,
    "itemListElement": Array.from({ length: videoCount }, (_, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "VideoObject",
        "name": `${playlistName} - Video ${i + 1}`,
        "embedUrl": `https://www.youtube.com/embed/videoseries?list=${playlistId}`,
        "publisher": {
          "@type": "Organization",
          "@id": "https://www.idesignac.com/#organization"
        }
      }
    }))
  }];
}
