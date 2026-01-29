'use client';

import { Badge } from '@/components/ui/badge';

interface Category {
  slug: string;
  name: string;
  count?: number;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export default function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" data-testid="category-filter-container">
      <Badge
        variant={selectedCategory === null ? "default" : "outline"}
        className="cursor-pointer"
        onClick={() => onSelectCategory(null)}
        data-testid="button-filter-all"
      >
        All
      </Badge>
      {categories.map((category) => (
        <Badge
          key={category.slug}
          variant={selectedCategory === category.slug ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => onSelectCategory(category.slug)}
          data-testid={`button-filter-${category.slug}`}
        >
          {category.name}
          {category.count !== undefined && (
            <span className="ml-1 text-xs opacity-70">({category.count})</span>
          )}
        </Badge>
      ))}
    </div>
  );
}
