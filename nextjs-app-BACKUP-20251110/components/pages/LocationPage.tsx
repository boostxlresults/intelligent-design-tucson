import type { LocationPageData } from '@/types/services';

export default function LocationPage({ data }: { data: LocationPageData }) {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">{data.h1}</h1>
      <p className="text-xl mb-8">{data.description}</p>
      
      <div className="prose max-w-none">
        <h2>Location Content</h2>
        {data.content?.sections?.map((section, idx) => (
          <div key={idx} className="mb-6">
            {section.type === 'heading' && section.heading && (
              <h3 className="text-2xl font-bold mt-6 mb-3">{section.heading}</h3>
            )}
            {section.type === 'paragraph' && (
              <p className="mb-4">{section.content}</p>
            )}
            {section.type === 'list' && section.items && (
              <ul className="list-disc ml-6 mb-4">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      
      <p className="mt-8 text-sm text-gray-500">
        Location Page: {data.slug} | {data.content?.sections?.length || 0} sections
      </p>
    </div>
  );
}
