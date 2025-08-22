"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, List, Calendar, Clock } from "lucide-react";
import type { Event } from "@/types";
import { useEventsDev } from "@/hooks/useEventsDev";
import { useEvents } from "@/hooks/useEvents";
import { useOrganizations } from "@/hooks/useOrganizations";
import { useEventCategories } from "@/hooks/useEventCategories";
import { useCategoryConfig } from "@/hooks/useCategoryConfig";
import { EventDialog } from "@/components/event-dialog";
import { MonthView, WeekView, DayView } from "@/components/calendar-views";
import { MobileMonthView } from "./mobile-month-view";
import { EventListView, MobileListView } from "./list-views";
import { Loader2 } from "lucide-react";
import { createCategoryMappings, getVariantColorClass, getCategoryVariant } from "@/utils/categoryColors";

// Mock organizations for development
const mockOrganizations = [
  { id: 1, title: { rendered: 'Student Union' } },
  { id: 2, title: { rendered: 'Computer Science Club' } },
  { id: 3, title: { rendered: 'Athletics Department' } },
  { id: 4, title: { rendered: 'Cultural Society' } },
  { id: 5, title: { rendered: 'Career Services' } },
];



interface UNBCCalendarProps {
  initialView?: string;
  initialCategoryFilter?: string;
  initialOrganizationFilter?: string;
  showWeekView?: boolean;
  showDayView?: boolean;
}

export default function UNBCCalendar({ 
  initialView = "month", 
  initialCategoryFilter = "all", 
  initialOrganizationFilter = "all",
  showWeekView = true,
  showDayView = true 
}: UNBCCalendarProps = {}) {
  const [activeTab, setActiveTab] = useState(initialView);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showEventDialog, setShowEventDialog] = useState(false);
  
  // List view pagination state
  const [listDisplayCount, setListDisplayCount] = useState(30);
  const [listInitialItems, setListInitialItems] = useState(30);
  const [listLoadMoreCount, setListLoadMoreCount] = useState(15);
  
  // Initialize list view settings from block attributes
  React.useEffect(() => {
    const container = document.querySelector('.unbc-calendar-container');
    if (container) {
      const initialItems = parseInt(container.getAttribute('data-list-initial-items') || '30');
      const loadMoreCount = parseInt(container.getAttribute('data-list-load-more-count') || '15');
      
      setListInitialItems(initialItems);
      setListLoadMoreCount(loadMoreCount);
      setListDisplayCount(initialItems);
    }
  }, []);

  // Minimal CSS for view-only calendar
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Hide any add event hover text */
      .unbc-calendar-view .absolute.bg-accent.flex.items-center.justify-center {
        display: none !important;
      }
      
      /* Disable click events on some elements but not on interactive ones */
      .unbc-calendar-view .cursor-pointer.disable-clicks {
        cursor: default !important;
        pointer-events: none !important;
      }
      
      /* Explicitly ensure navigation buttons work */
      .unbc-calendar-view button,
      .mobile-calendar button {
        pointer-events: auto !important;
        cursor: pointer !important;
      }
      
      /* Ensure day cards are clickable */
      .unbc-calendar-view .day-card {
        pointer-events: auto !important;
        cursor: pointer !important;
      }
      
      /* Ensure event cards in day/week view are clickable */
      .unbc-calendar-view .event-card {
        pointer-events: auto !important;
        cursor: pointer !important;
      }
      
      /* Ensure the grid doesn't block events */
      .unbc-calendar-view [role="tabpanel"] > div > div {
        pointer-events: none;
      }
      
      .unbc-calendar-view [role="tabpanel"] > div > div > * {
        pointer-events: auto;
      }
      
      /* Fix select dropdowns - ensure they work properly */
      .unbc-calendar-view [data-slot="select-trigger"] {
        pointer-events: auto !important;
        cursor: pointer !important;
        z-index: 10 !important;
      }
      
      /* Ensure select content is visible and accessible */
      [data-slot="select-content"] {
        z-index: 999999 !important;
        position: fixed !important;
        pointer-events: auto !important;
      }
      
      /* Ensure select items are clickable */
      [data-slot="select-item"] {
        pointer-events: auto !important;
        cursor: pointer !important;
      }
      
      /* Override any WordPress admin styles that might interfere */
      .unbc-calendar-view [role="combobox"] {
        pointer-events: auto !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  // Check if we're in development mode - use Vite's environment detection
  const isDev = import.meta.env.DEV;
  
  // Use appropriate hooks based on environment
  const devData = useEventsDev();
  const prodEventsData = useEvents();
  const prodOrgsData = useOrganizations();
  const categoriesData = useEventCategories();
  const categoryConfigData = useCategoryConfig();
  
  // Filters
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [organizationFilter, setOrganizationFilter] = useState("all");
  const [searchFilter, setSearchFilter] = useState("");
  const [searchInput, setSearchInput] = useState("");

  // Debounce search input to improve performance
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchFilter(searchInput);
    }, 300);
    
    return () => clearTimeout(timeoutId);
  }, [searchInput]);

  // Categories that should show organization dropdown
  const categoriesWithOrganizations = React.useMemo(() => {
    return categoryConfigData.config?.categoriesWithOrganizations || [];
  }, [categoryConfigData.config]);

  // Reset organization filter when category changes to something that doesn't support organizations
  React.useEffect(() => {
    if (!categoriesWithOrganizations.includes(categoryFilter) && categoryFilter !== "all") {
      setOrganizationFilter("all");
    }
  }, [categoryFilter, categoriesWithOrganizations]);
  
  // Select data source based on environment
  const { 
    events: allEvents, 
    eventMetadata, 
    loading, 
    error, 
    total, 
    setFilters 
  } = isDev ? devData : prodEventsData;

  const organizations = isDev ? mockOrganizations : prodOrgsData.organizations;
  const orgLoading = isDev ? false : prodOrgsData.loading;
  
  // Event categories are always loaded from WordPress (even in dev mode)
  const { categories: eventCategories, loading: categoriesLoading } = categoriesData;
  
  
  // Create category mappings for use in all calendar views
  const categoryMappings = React.useMemo(() => createCategoryMappings(eventCategories), [eventCategories]);

  // Memoize organization lookup for better performance
  const organizationLookup = React.useMemo(() => {
    const lookup = new Map();
    organizations.forEach(org => {
      lookup.set(org.id.toString(), org.title.rendered);
    });
    return lookup;
  }, [organizations]);

  // Load all events initially and handle all filtering client-side
  React.useEffect(() => {
    if (!isDev && setFilters) {
      // Load more events but keep it simple
      setFilters({
        per_page: 500 // Load more events to cover more time periods
      });
    }
  }, [setFilters, isDev]);

  // Helper function to check if event should show for category (handles category relationships)
  const eventMatchesCategory = React.useCallback((event: any, categorySlug: string) => {
    const metadata = eventMetadata[event.id];
    if (!metadata) return false;
    
    // Check if this category has relationships defined
    const relatedCategories = categoryConfigData.config?.categoryRelationships?.[categorySlug];
    
    if (relatedCategories) {
      // This category shows events from multiple categories
      return relatedCategories.includes(metadata.category);
    } else {
      // Direct category match
      return metadata.category === categorySlug;
    }
  }, [eventMetadata, categoryConfigData.config]);

  // Filter events client-side for better UX and to handle server-side limitations
  const events = React.useMemo(() => {
    let filtered = allEvents;
    
    // First, filter out past events and sort chronologically for list view
    if (activeTab === "list") {
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Start of today
      
      filtered = filtered.filter(event => {
        const eventDate = new Date(event.startDate);
        eventDate.setHours(0, 0, 0, 0); // Start of event day
        return eventDate >= today; // Only today and future events
      });
      
      // Sort chronologically (earliest first)
      filtered = filtered.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
    }

    // Category filter - always client-side since server-side filtering is too strict
    if (categoryFilter !== "all") {
      filtered = filtered.filter(event => eventMatchesCategory(event, categoryFilter));
    }

    // Organization filter - always client-side for better UX
    if (organizationFilter !== "all") {
      const orgName = organizationLookup.get(organizationFilter);
      filtered = filtered.filter(event => {
        const metadata = eventMetadata[event.id];
        return orgName && metadata?.organization === orgName;
      });
    }

    // Search filter - always client-side for better UX
    if (searchFilter) {
      const searchLower = searchFilter.toLowerCase();
      filtered = filtered.filter(event => {
        const metadata = eventMetadata[event.id];
        return (
          event.title.toLowerCase().includes(searchLower) ||
          metadata?.description?.toLowerCase().includes(searchLower) ||
          metadata?.location?.toLowerCase().includes(searchLower) ||
          metadata?.organization?.toLowerCase().includes(searchLower)
        );
      });
    }

    return filtered;
  }, [allEvents, eventMetadata, categoryFilter, organizationFilter, searchFilter, organizationLookup, activeTab, eventMatchesCategory]);

  const handleDateClick = React.useCallback((date: Date) => {
    setSelectedDate(date);
    setActiveTab("day");
  }, []);

  const handleEventClick = React.useCallback((event: Event) => {
    setSelectedEvent(event);
    setShowEventDialog(true);
  }, []);

  const handleLoadMore = React.useCallback(() => {
    setListDisplayCount(prev => prev + listLoadMoreCount);
  }, [listLoadMoreCount]);

  // Reset display count when switching to list view or when filters change
  React.useEffect(() => {
    if (activeTab === "list") {
      setListDisplayCount(listInitialItems);
    }
  }, [activeTab, categoryFilter, organizationFilter, searchFilter, listInitialItems]);


  // Show loading state
  if (loading || orgLoading || categoriesLoading) {
    return (
      <div className="w-full flex items-center justify-center py-12">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">{isDev ? 'Loading sample events...' : 'Loading calendar...'}</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="w-full py-12">
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6 text-center">
            <p className="text-red-600 mb-4">Error loading events: {error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Retry
            </button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">

      {/* Calendar Views */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm unbc-calendar-view">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Desktop: Responsive layout with stacked filters */}
          <div className="hidden md:block p-6 pb-0">
            {/* Combined tabs and filters in single row */}
            <div className="flex items-center justify-between gap-4">
              {/* Left side - Category filter and organization filter */}
              <div className="flex items-center gap-3">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-40 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full flex-shrink-0 ${categoryFilter === 'all' ? 'bg-gray-400' : getVariantColorClass(eventCategories.find(cat => cat.slug === categoryFilter)?.variant || 'default')}`}></span>
                      <span>{categoryFilter === 'all' ? 'All Categories' : eventCategories.find(cat => cat.slug === categoryFilter)?.name || 'All Categories'}</span>
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 z-[9999] shadow-lg">
                    <SelectItem value="all" className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700 focus:outline-none">
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <span className="w-3 h-3 rounded-full flex-shrink-0 bg-gray-400"></span>
                        <span>All</span>
                      </div>
                    </SelectItem>
                    {eventCategories.map((category) => (
                      <SelectItem 
                        key={category.id} 
                        value={category.slug} 
                        className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700 focus:outline-none"
                      >
                        <div className="flex items-center gap-2 whitespace-nowrap">
                          <span className={`w-3 h-3 rounded-full flex-shrink-0 ${getVariantColorClass(category.variant || 'default')}`}></span>
                          <span>{category.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {(categoriesWithOrganizations.includes(categoryFilter)) && (
                  <Select value={organizationFilter} onValueChange={setOrganizationFilter}>
                    <SelectTrigger className="w-44 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 [&>span]:truncate [&>span]:block">
                      <SelectValue placeholder="All Organizations" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 max-h-[200px] overflow-y-auto">
                      <SelectItem value="all" className="text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600">All Organizations</SelectItem>
                      {organizations.map((org) => (
                        <SelectItem 
                          key={org.id} 
                          value={org.id.toString()} 
                          className="text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600"
                        >
                          {org.title.rendered}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>

              {/* Center - Tabs */}
              <div className="flex-1 flex justify-center">
                <TabsList className="h-9 bg-gray-100 dark:bg-gray-700 p-1">
                  {showDayView && (
                    <TabsTrigger value="day" className="text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300">
                      <Clock className="h-3 w-3" />
                      Day
                    </TabsTrigger>
                  )}
                  {showWeekView && (
                    <TabsTrigger value="week" className="text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300">
                      <Calendar className="h-3 w-3" />
                      Week
                    </TabsTrigger>
                  )}
                  <TabsTrigger value="month" className="text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300">
                    <CalendarDays className="h-3 w-3" />
                    Month
                  </TabsTrigger>
                  <TabsTrigger value="list" className="text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300">
                    <List className="h-3 w-3" />
                    List
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Right side - Search input */}
              <div className="flex-shrink-0">
                <Input
                  placeholder="Search events..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-40 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Mobile: Single row with buttons on sides of tabs */}
          <div className="md:hidden">
            <div className="px-4 py-4 flex items-center justify-between gap-3">
              {/* Left side - Category Filter Button */}
              <div className="flex-shrink-0">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-auto min-w-[60px] h-9 px-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                    <div className="flex items-center gap-1">
                      <span className={`w-3 h-3 rounded-full flex-shrink-0 ${categoryFilter === 'all' ? 'bg-gray-400' : getVariantColorClass(eventCategories.find(cat => cat.slug === categoryFilter)?.variant || 'default')}`}></span>
                      <span className="text-xs truncate max-w-[60px]">
                        {categoryFilter === 'all' ? 'All' : eventCategories.find(cat => cat.slug === categoryFilter)?.name || 'All'}
                      </span>
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 z-[9999]">
                    <SelectItem value="all" className="text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600">
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <span className="w-3 h-3 rounded-full flex-shrink-0 bg-gray-400"></span>
                        <span>All</span>
                      </div>
                    </SelectItem>
                    {eventCategories.map((category) => (
                      <SelectItem 
                        key={category.id} 
                        value={category.slug} 
                        className="text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600"
                      >
                        <div className="flex items-center gap-2 whitespace-nowrap">
                          <span className={`w-3 h-3 rounded-full flex-shrink-0 ${getVariantColorClass(category.variant || 'default')}`}></span>
                          <span>{category.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Center - Tabs (growing to fill available space) */}
              <div className="flex-1 flex justify-center">
                <TabsList className="h-9 bg-gray-100 dark:bg-gray-700 p-1">
                  {showDayView && (
                    <TabsTrigger value="day" className="text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300 flex-1">
                      <Clock className="h-3 w-3" />
                      <span className="hidden xs:inline">Day</span>
                    </TabsTrigger>
                  )}
                  <TabsTrigger value="month" className="text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300 flex-1">
                    <CalendarDays className="h-3 w-3" />
                    <span className="hidden xs:inline">Month</span>
                  </TabsTrigger>
                  <TabsTrigger value="list" className="text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300 flex-1">
                    <List className="h-3 w-3" />
                    <span className="hidden xs:inline">List</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Right side - Search Button */}
              <div className="flex-shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 px-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                onClick={() => {
                  const searchInput = document.querySelector('.mobile-search-input') as HTMLInputElement;
                  if (searchInput) {
                    searchInput.style.display = searchInput.style.display === 'none' ? 'block' : 'none';
                    if (searchInput.style.display !== 'none') {
                      searchInput.focus();
                    }
                  }
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 dark:text-gray-300">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </Button>
              </div>
            </div>

            {/* Hidden search input that appears when search button is clicked */}
            <div className="px-4 pb-4">
              <Input
                placeholder="Search events..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="mobile-search-input w-full h-9 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                style={{ display: 'none' }}
              />
            </div>

            {/* Organization filter (if needed) - appears below */}
            {(categoriesWithOrganizations.includes(categoryFilter)) && (
              <div className="px-4 pb-4">
                <Select value={organizationFilter} onValueChange={setOrganizationFilter}>
                  <SelectTrigger className="w-full h-9 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                    <SelectValue placeholder="All Organizations" className="truncate" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 max-h-[200px] overflow-y-auto">
                    <SelectItem value="all" className="text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600">All Organizations</SelectItem>
                    {organizations.map((org) => (
                      <SelectItem 
                        key={org.id} 
                        value={org.id.toString()} 
                        className="text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600"
                      >
                        {org.title.rendered}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          <TabsContent value="month" className="px-6 pb-6 md:p-6">
            <div className="hidden md:block">
              <MonthView 
                events={events} 
                eventMetadata={eventMetadata}
                categoryMappings={categoryMappings}
                onDateClick={handleDateClick} 
                onEventClick={handleEventClick}
              />
            </div>
            <div className="block md:hidden mobile-calendar">
              <MobileMonthView 
                events={events} 
                eventMetadata={eventMetadata}
                categoryMappings={categoryMappings}
                onEventClick={handleEventClick}
              />
            </div>
          </TabsContent>

          <TabsContent value="week" className="px-6 pb-6 md:p-6">
            <WeekView 
              events={events} 
              eventMetadata={eventMetadata}
              categoryMappings={categoryMappings}
              onEventClick={handleEventClick} 
            />
          </TabsContent>

          <TabsContent value="day" className="px-6 pb-6 md:p-6">
            <DayView 
              events={events} 
              eventMetadata={eventMetadata}
              categoryMappings={categoryMappings}
              initialDate={selectedDate} 
              onEventClick={handleEventClick} 
            />
          </TabsContent>

          <TabsContent value="list" className="px-6 pb-6 md:p-6">
            <div className="hidden md:block">
              <EventListView 
                events={events.slice(0, listDisplayCount)} 
                eventMetadata={eventMetadata} 
                categoryMappings={categoryMappings} 
                onEventClick={handleEventClick}
                onLoadMore={handleLoadMore}
                hasMore={events.length > listDisplayCount}
                loading={loading}
              />
            </div>
            <div className="block md:hidden">
              <MobileListView 
                events={events.slice(0, listDisplayCount)} 
                eventMetadata={eventMetadata} 
                categoryMappings={categoryMappings} 
                onEventClick={handleEventClick}
                onLoadMore={handleLoadMore}
                hasMore={events.length > listDisplayCount}
                loading={loading}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>


      {/* Event Details Dialog */}
      <EventDialog 
        event={selectedEvent}
        eventMetadata={eventMetadata}
        open={showEventDialog}
        onOpenChange={setShowEventDialog}
      />
    </div>
  );
}