import type { Event, EventMetadata } from '@/types';

interface WordPressEvent {
  id: number;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  start_time: string;
  end_time: string;
  location: string;
  building: string;
  room: string;
  full_location: string;
  cost: string;
  organization: string;
  organization_id: string;  // Add organization_id field
  categories: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  featured_image: string;
  registration_required: boolean;
  registration_link: string;
  contact_email: string;
  is_virtual: boolean;
  virtual_link: string;
  capacity: string;
  featured: boolean;
  permalink: string;
}

interface EventsApiResponse {
  events: WordPressEvent[];
  total: number;
  pages: number;
}

interface EventFilters {
  per_page?: number;
  page?: number;
  start_date?: string;
  end_date?: string;
  category?: string;
  organization?: string;
  featured?: boolean;
  search?: string;
}

class EventsAPI {
  private baseUrl: string;

  constructor() {
    // Use WordPress localized data if available, otherwise fallback
    const wpData = (window as any).unbcCalendarData;
    this.baseUrl = wpData?.apiUrl || '/wp-json/unbc-events/v1';
  }

  async fetchEvents(filters: EventFilters = {}): Promise<EventsApiResponse> {
    try {
      const queryString = new URLSearchParams();
      
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          queryString.append(key, value.toString());
        }
      });

      // Ensure proper URL construction
      const baseUrl = this.baseUrl.endsWith('/') ? this.baseUrl.slice(0, -1) : this.baseUrl;
      const url = `${baseUrl}/events${queryString.toString() ? '?' + queryString.toString() : ''}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, response: ${errorText}`);
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  transformWordPressEventToEvent(wpEvent: WordPressEvent): Event {
    const startDate = this.parseDateTime(wpEvent.date, wpEvent.start_time);
    const endDate = this.parseDateTime(wpEvent.date, wpEvent.end_time);
    
    return {
      id: wpEvent.id.toString(),
      title: wpEvent.title,
      description: wpEvent.excerpt || this.stripHtml(wpEvent.description),
      startDate: startDate,
      endDate: endDate,
      variant: this.getCategoryVariant(wpEvent.categories)
    };
  }

  transformWordPressEventToMetadata(wpEvent: WordPressEvent): EventMetadata {
    return {
      category: this.mapWordPressCategory(wpEvent.categories),
      organization: wpEvent.organization,
      organization_id: wpEvent.organization_id,  // Include organization_id
      location: wpEvent.full_location,
      cost: wpEvent.cost,
      registrationRequired: wpEvent.registration_required,
      posterUrl: wpEvent.featured_image,
      registrationLink: wpEvent.registration_link,
      contactEmail: wpEvent.contact_email,
      isVirtual: wpEvent.is_virtual,
      virtualLink: wpEvent.virtual_link,
      capacity: wpEvent.capacity,
      featured: wpEvent.featured
    };
  }

  private parseDateTime(date: string, time: string): Date {
    const dateTime = new Date(`${date}T${time}`);
    return isNaN(dateTime.getTime()) ? new Date() : dateTime;
  }

  private stripHtml(html: string): string {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  }

  private getCategoryVariant(categories: Array<{name: string; slug: string}>): 'default' | 'primary' | 'success' | 'warning' | 'danger' {
    if (categories.length === 0) return 'default'; // Gray for uncategorized
    
    // Map categories to variants based on new category system
    const categoryMap: {[key: string]: 'default' | 'primary' | 'success' | 'warning' | 'danger'} = {
      'clubs': 'primary',      // Purple for clubs
      'club': 'primary',
      'student-clubs': 'primary',
      'unbc': 'success',       // Green for UNBC
      'university': 'success',
      'academic': 'success',
      'organizations': 'danger', // Red for organizations
      'organization': 'danger',
      'community': 'danger',   // Red for community (same as organizations)
      'comm': 'danger',
      'sports': 'warning',     // Blue/Orange for sports
      'athletics': 'warning',
      'recreation': 'warning'
    };
    
    return categoryMap[categories[0].slug] || 'default'; // Gray for unknown categories
  }

  private mapWordPressCategory(categories: Array<{name: string; slug: string}>): string | null {
    if (categories.length === 0) return null; // No category = show as uncategorized
    
    // Return the first category slug directly from WordPress
    return categories[0].slug;
  }
}

export const eventsAPI = new EventsAPI();
export type { WordPressEvent, EventsApiResponse, EventFilters };