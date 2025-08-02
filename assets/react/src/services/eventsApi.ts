import type { Event, EventMetadata, EventCategory } from '@/types';

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
      console.log('Fetching events from:', url); // Debug log
      const response = await fetch(url);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`HTTP error! status: ${response.status} - ${errorText.substring(0, 200)}`);
      }
      
      const responseText = await response.text();
      console.log('API Response (first 200 chars):', responseText.substring(0, 200));
      
      try {
        return JSON.parse(responseText);
      } catch (parseError) {
        console.error('Failed to parse JSON response:', responseText.substring(0, 500));
        throw new Error('Invalid JSON response from API');
      }
    } catch (error) {
      console.error('Error fetching events:', error);
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

  private getCategoryVariant(categories: Array<{name: string; slug: string}>): string {
    if (categories.length === 0) return 'default';
    
    const categoryMap: {[key: string]: string} = {
      'academic': 'success',
      'social': 'warning',
      'cultural': 'primary',
      'sports': 'danger',
      'professional': 'success',
      'wellness': 'primary',
      'volunteer': 'warning',
      'arts': 'primary'
    };
    
    return categoryMap[categories[0].slug] || 'default';
  }

  private mapWordPressCategory(categories: Array<{name: string; slug: string}>): EventCategory {
    if (categories.length === 0) return 'academic';
    
    const categoryMap: {[key: string]: EventCategory} = {
      'academic': 'academic',
      'social': 'social',
      'cultural': 'cultural',
      'sports': 'sports',
      'professional': 'professional',
      'wellness': 'wellness',
      'volunteer': 'volunteer',
      'arts': 'arts'
    };
    
    return categoryMap[categories[0].slug] || 'academic';
  }
}

export const eventsAPI = new EventsAPI();
export type { WordPressEvent, EventsApiResponse, EventFilters };