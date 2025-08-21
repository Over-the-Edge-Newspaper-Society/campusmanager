// Utility functions for handling category colors and variants across all calendar views

export type CategoryVariant = 
  | 'default'  // Gray
  | 'primary'  // Purple
  | 'success'  // Green
  | 'danger'   // Red
  | 'warning'  // Blue
  | 'orange'   // Orange
  | 'cyan'     // Cyan
  | 'pink'     // Pink
  | 'indigo'   // Indigo
  | 'yellow';  // Yellow

export interface EventCategoryInfo {
  id: number;
  name: string;
  slug: string;
  variant?: CategoryVariant;
}

// Helper function to get color class from variant for badges/dots with dark mode support
export function getVariantColorClass(variant: CategoryVariant = 'default', darkMode: boolean = false): string {
  const colorMap: { [key in CategoryVariant]: { light: string, dark: string } } = {
    'default': { light: 'bg-gray-500', dark: 'dark:bg-gray-400' },      // #6b7280 / #9ca3af
    'primary': { light: 'bg-purple-500', dark: 'dark:bg-purple-400' },   // #8b5cf6 / #a78bfa
    'success': { light: 'bg-green-500', dark: 'dark:bg-green-400' },     // #22c55e / #4ade80
    'danger': { light: 'bg-red-500', dark: 'dark:bg-red-400' },          // #ef4444 / #f87171
    'warning': { light: 'bg-blue-500', dark: 'dark:bg-blue-400' },       // #3b82f6 / #60a5fa
    'orange': { light: 'bg-orange-500', dark: 'dark:bg-orange-400' },    // #f97316 / #fb923c
    'cyan': { light: 'bg-cyan-500', dark: 'dark:bg-cyan-400' },          // #06b6d4 / #22d3ee
    'pink': { light: 'bg-pink-500', dark: 'dark:bg-pink-400' },          // #ec4899 / #f472b6
    'indigo': { light: 'bg-indigo-500', dark: 'dark:bg-indigo-400' },    // #6366f1 / #818cf8
    'yellow': { light: 'bg-yellow-500', dark: 'dark:bg-yellow-400' }     // #eab308 / #facc15
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