import { useState, useEffect } from 'react';
import type { Event, EventMetadata } from '@/types';
import { unbcEvents, eventMetadata as unbcEventMetadata } from '@/data/events';

// Generate sample events for development
const generateSampleEvents = (): Event[] => {
  const events: Event[] = [];
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  
  // Academic events
  events.push({
    id: '1',
    title: 'Computer Science Seminar',
    description: 'Advanced Machine Learning Topics',
    startDate: new Date(year, month, 5, 14, 0),
    endDate: new Date(year, month, 5, 16, 0),
  });
  
  events.push({
    id: '2',
    title: 'Mathematics Workshop',
    description: 'Calculus Study Group',
    startDate: new Date(year, month, 5, 10, 0),
    endDate: new Date(year, month, 5, 12, 0),
  });
  
  // Social events
  events.push({
    id: '3',
    title: 'Campus Movie Night',
    description: 'Outdoor movie screening',
    startDate: new Date(year, month, 8, 19, 0),
    endDate: new Date(year, month, 8, 22, 0),
  });
  
  events.push({
    id: '4',
    title: 'Student Mixer',
    description: 'Meet new friends',
    startDate: new Date(year, month, 12, 18, 0),
    endDate: new Date(year, month, 12, 20, 0),
  });
  
  // Sports events
  events.push({
    id: '5',
    title: 'Basketball Tournament',
    description: 'Intramural championship',
    startDate: new Date(year, month, 15, 17, 0),
    endDate: new Date(year, month, 15, 21, 0),
  });
  
  events.push({
    id: '6',
    title: 'Soccer Practice',
    description: 'Team practice session',
    startDate: new Date(year, month, 15, 15, 0),
    endDate: new Date(year, month, 15, 17, 0),
  });
  
  // Cultural events
  events.push({
    id: '7',
    title: 'International Food Festival',
    description: 'Celebrate diverse cuisines',
    startDate: new Date(year, month, 20, 11, 0),
    endDate: new Date(year, month, 20, 15, 0),
  });
  
  // Professional events
  events.push({
    id: '8',
    title: 'Career Fair',
    description: 'Connect with employers',
    startDate: new Date(year, month, 22, 10, 0),
    endDate: new Date(year, month, 22, 16, 0),
  });
  
  events.push({
    id: '9',
    title: 'Resume Workshop',
    description: 'Professional development',
    startDate: new Date(year, month, 22, 13, 0),
    endDate: new Date(year, month, 22, 14, 30),
  });
  
  // Wellness events
  events.push({
    id: '10',
    title: 'Yoga Session',
    description: 'Morning wellness class',
    startDate: new Date(year, month, 25, 7, 0),
    endDate: new Date(year, month, 25, 8, 0),
  });
  
  // Arts events
  events.push({
    id: '11',
    title: 'Art Exhibition Opening',
    description: 'Student artwork showcase',
    startDate: new Date(year, month, 28, 18, 0),
    endDate: new Date(year, month, 28, 20, 0),
  });
  
  // Today's events
  events.push({
    id: '12',
    title: 'Emergency Meeting',
    description: 'Important announcement',
    startDate: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 0),
    endDate: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 0),
  });
  
  events.push({
    id: '13',
    title: 'Study Group',
    description: 'Physics review session',
    startDate: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 16, 0),
    endDate: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 18, 0),
  });
  
  // Add some events for next month
  events.push({
    id: '14',
    title: 'Next Month: Orientation',
    description: 'New student orientation',
    startDate: new Date(year, month + 1, 3, 9, 0),
    endDate: new Date(year, month + 1, 3, 17, 0),
  });
  
  events.push({
    id: '15',
    title: 'Next Month: Concert',
    description: 'Campus band performance',
    startDate: new Date(year, month + 1, 10, 19, 0),
    endDate: new Date(year, month + 1, 10, 22, 0),
  });
  
  // Add events for previous month
  events.push({
    id: '16',
    title: 'Last Month: Workshop',
    description: 'Previous workshop',
    startDate: new Date(year, month - 1, 15, 14, 0),
    endDate: new Date(year, month - 1, 15, 16, 0),
  });
  
  return events;
};

// Generate sample event metadata
const generateEventMetadata = (events: Event[]): Record<string, EventMetadata> => {
  const metadata: Record<string, EventMetadata> = {};
  const locations = ['Main Auditorium', 'Student Center', 'Library Room 201', 'Sports Complex', 'Outdoor Field', 'Conference Hall', 'Room 301'];
  const organizations = ['Student Union', 'Computer Science Club', 'Athletics Department', 'Cultural Society', 'Career Services'];
  
  events.forEach((event, index) => {
    let category: any = 'academic';
    
    // Assign categories based on event title
    if (event.title.toLowerCase().includes('sport') || event.title.toLowerCase().includes('basketball') || event.title.toLowerCase().includes('soccer')) {
      category = 'sports';
    } else if (event.title.toLowerCase().includes('movie') || event.title.toLowerCase().includes('mixer')) {
      category = 'social';
    } else if (event.title.toLowerCase().includes('food') || event.title.toLowerCase().includes('international')) {
      category = 'cultural';
    } else if (event.title.toLowerCase().includes('career') || event.title.toLowerCase().includes('resume')) {
      category = 'professional';
    } else if (event.title.toLowerCase().includes('yoga') || event.title.toLowerCase().includes('wellness')) {
      category = 'wellness';
    } else if (event.title.toLowerCase().includes('art') || event.title.toLowerCase().includes('exhibition')) {
      category = 'arts';
    } else if (event.title.toLowerCase().includes('concert') || event.title.toLowerCase().includes('band')) {
      category = 'arts';
    }
    
    metadata[event.id] = {
      category,
      organization: organizations[index % organizations.length],
      location: locations[index % locations.length],
      cost: index % 3 === 0 ? 'Free' : `$${(index + 1) * 5}`,
      registrationRequired: index % 2 === 0,
      capacity: `${(index + 1) * 20} people`,
      featured: index % 4 === 0,
      categories: [{ slug: category, name: category }],
      description: event.description,
    } as EventMetadata;
  });
  
  return metadata;
};

export function useEventsDev() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Use the imported events from data/events.ts instead of generating them
  const events = unbcEvents;
  const eventMetadata = unbcEventMetadata;
  
  return {
    events,
    eventMetadata,
    loading,
    error: null,
    total: events.length,
    setFilters: () => {},
  };
}