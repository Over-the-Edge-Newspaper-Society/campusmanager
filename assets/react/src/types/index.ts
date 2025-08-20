export interface Event {
  id: string;
  title: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  variant?: 'success' | 'primary' | 'default' | 'warning' | 'danger';
}

export interface EventMetadata {
  category: string | null; // Allow any category string from WordPress
  organization: string;
  organization_id?: string;  // Add organization_id field
  location: string;
  cost: string;
  registrationRequired: boolean;
  posterUrl?: string;
  registrationLink?: string;
  contactEmail?: string;
  website?: string;
  isVirtual?: boolean;
  virtualLink?: string;
  capacity?: string;
  featured?: boolean;
}

// EventCategory is now just a string - determined by WordPress categories

export type ViewType = 'month' | 'week' | 'day' | 'list';