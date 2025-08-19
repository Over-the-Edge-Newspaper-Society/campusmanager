export interface Event {
  id: string;
  title: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  variant?: 'success' | 'primary' | 'default' | 'warning' | 'danger';
}

export interface EventMetadata {
  category: EventCategory | null; // Allow null for uncategorized events
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

export type EventCategory = 
  | 'clubs'
  | 'unbc'
  | 'organizations'
  | 'sports';

export type ViewType = 'month' | 'week' | 'day' | 'list';