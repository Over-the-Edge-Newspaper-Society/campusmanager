// Utility functions for handling category colors and variants across all calendar views

export type CategoryVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger';

export interface EventCategoryInfo {
  id: number;
  name: string;
  slug: string;
  variant?: CategoryVariant;
}

// Helper function to get color class from variant for badges/dots with dark mode support
export function getVariantColorClass(variant: CategoryVariant = 'default', darkMode: boolean = false): string {
  const colorMap: { [key in CategoryVariant]: { light: string, dark: string } } = {
    'default': { light: 'bg-gray-500', dark: 'dark:bg-gray-400' },
    'primary': { light: 'bg-purple-500', dark: 'dark:bg-purple-400' }, 
    'success': { light: 'bg-green-500', dark: 'dark:bg-green-400' },
    'warning': { light: 'bg-blue-500', dark: 'dark:bg-blue-400' },
    'danger': { light: 'bg-red-500', dark: 'dark:bg-red-400' }
  };
  
  const colors = colorMap[variant] || colorMap['default'];
  return `${colors.light} ${colors.dark}`;
}

// Helper function to get variant from category slug using custom mappings
export function getCategoryVariant(
  categorySlug: string | null | undefined, 
  categoryMappings: { [slug: string]: CategoryVariant } = {}
): CategoryVariant {
  if (!categorySlug) return 'default';
  
  // Check custom mappings first
  if (categoryMappings[categorySlug]) {
    return categoryMappings[categorySlug];
  }
  
  // Fallback to default mappings
  const defaultMappings: { [key: string]: CategoryVariant } = {
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
  
  return defaultMappings[categorySlug] || 'default';
}

// Helper function to create category mappings from event categories array
export function createCategoryMappings(eventCategories: EventCategoryInfo[]): { [slug: string]: CategoryVariant } {
  const mappings: { [slug: string]: CategoryVariant } = {};
  eventCategories.forEach(category => {
    if (category.variant) {
      mappings[category.slug] = category.variant;
    }
  });
  return mappings;
}