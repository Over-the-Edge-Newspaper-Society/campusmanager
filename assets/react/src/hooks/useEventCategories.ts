import { useState, useEffect } from 'react';

interface EventCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'orange' | 'cyan' | 'pink' | 'indigo' | 'yellow';
}

interface EventCategoriesHook {
  categories: EventCategory[];
  loading: boolean;
  error: string | null;
}

export function useEventCategories(): EventCategoriesHook {
  const [categories, setCategories] = useState<EventCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      // Skip API calls in dev mode and use fallback categories with dynamic counts
      if (import.meta.env.DEV) {
        // Import test data to calculate counts
        import('../data/events').then(({ eventMetadata }) => {
          // Calculate counts based on test event metadata
          const categoryCounts = {
            academic: 0,
            social: 0,
            sports: 0,
            workshop: 0,
            cultural: 0
          };
          
          // Count events per category
          Object.values(eventMetadata).forEach((metadata) => {
            if (metadata.category && categoryCounts[metadata.category as keyof typeof categoryCounts] !== undefined) {
              categoryCounts[metadata.category as keyof typeof categoryCounts]++;
            }
          });
          
          setCategories([
            { id: 1, name: 'Academic', slug: 'academic', count: categoryCounts.academic, variant: 'primary' },
            { id: 2, name: 'Social', slug: 'social', count: categoryCounts.social, variant: 'success' },
            { id: 3, name: 'Sports', slug: 'sports', count: categoryCounts.sports, variant: 'warning' },
            { id: 4, name: 'Workshop', slug: 'workshop', count: categoryCounts.workshop, variant: 'danger' },
            { id: 5, name: 'Cultural', slug: 'cultural', count: categoryCounts.cultural, variant: 'orange' }
          ]);
          setLoading(false);
        });
        return;
      }
      
      try {
        setLoading(true);
        setError(null);

        // Fetch categories and custom variants in parallel
        const [categoriesResponse, variantsResponse] = await Promise.all([
          fetch('/wp-json/wp/v2/event_category?per_page=100&orderby=name&order=asc'),
          fetch('/wp-json/unbc-events/v1/category-colors')
        ]);
        
        if (!categoriesResponse.ok) {
          throw new Error(`HTTP error! status: ${categoriesResponse.status}`);
        }

        const wpCategories = await categoriesResponse.json();
        let customVariants: { [key: string]: string } = {};
        
        // Try to get custom variants, but don't fail if the endpoint is not available
        if (variantsResponse.ok) {
          const variantsData = await variantsResponse.json();
          customVariants = variantsData.colors || {};
        }
        
        // Transform WordPress categories to our format and use custom or default variants
        const transformedCategories: EventCategory[] = wpCategories.map((cat: any) => ({
          id: cat.id,
          name: cat.name,
          slug: cat.slug,
          count: cat.count,
          variant: customVariants[cat.slug] || getDefaultCategoryVariant(cat.slug)
        }));

        setCategories(transformedCategories);
      } catch (err) {
        console.error('Error fetching event categories:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch categories');
        
        // Fallback to hardcoded categories if API fails
        setCategories([
          { id: 1, name: 'Clubs', slug: 'clubs', count: 0, variant: 'primary' },
          { id: 2, name: 'UNBC', slug: 'unbc', count: 0, variant: 'success' },
          { id: 3, name: 'Organizations', slug: 'organizations', count: 0, variant: 'danger' },
          { id: 4, name: 'Sports', slug: 'sports', count: 0, variant: 'warning' }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
}

// Helper function to assign default variants to categories
function getDefaultCategoryVariant(slug: string): 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'orange' | 'cyan' | 'pink' | 'indigo' | 'yellow' {
  const variantMap: { [key: string]: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'orange' | 'cyan' | 'pink' | 'indigo' | 'yellow' } = {
    'clubs': 'primary',      // Purple
    'club': 'primary',
    'student-clubs': 'primary',
    'unbc': 'success',       // Green
    'university': 'success',
    'academic': 'success',
    'organizations': 'danger', // Red
    'organization': 'danger',
    'community': 'danger',
    'sports': 'warning',     // Blue/Orange
    'athletics': 'warning',
    'recreation': 'warning'
  };
  
  return variantMap[slug] || 'default'; // Default gray
}