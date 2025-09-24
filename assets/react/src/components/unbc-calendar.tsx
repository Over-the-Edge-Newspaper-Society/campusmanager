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
  const [calendarViewDate, setCalendarViewDate] = useState(new Date()); // Separate state for calendar navigation
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

      /* FORCE calendar tabs styling with maximum specificity - isolate from theme CSS */
      #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"] {
        background-color: rgb(243 244 246) !important; /* bg-gray-100 */
        border: none !important;
        box-shadow: none !important;
      }
      
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"] {
        background-color: rgb(55 65 81) !important; /* dark:bg-gray-700 */
      }
      
      /* Force tab text colors with high specificity */
      #unbc-calendar-react-component[data-calendar-isolated] button[data-slot="tabs-trigger"] {
        color: rgb(107 114 128) !important; /* text-gray-500 */
        background: transparent !important;
      }
      
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] button[data-slot="tabs-trigger"] {
        color: rgb(209 213 219) !important; /* dark:text-gray-300 */
      }
      
      /* Force active tab styling */
      #unbc-calendar-react-component[data-calendar-isolated] button[data-slot="tabs-trigger"][data-state="active"] {
        background-color: white !important;
        color: rgb(17 24 39) !important; /* text-gray-900 */
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05) !important;
      }
      
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] button[data-slot="tabs-trigger"][data-state="active"] {
        background-color: rgb(75 85 99) !important; /* dark:bg-gray-600 */
        color: white !important;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.25) !important;
      }
      
      /* Nuclear option: completely isolate calendar styling with theme CSS variable support */
      #unbc-calendar-react-component[data-calendar-isolated] {
        --calendar-tab-bg: var(--wp--preset--color--base, var(--background, rgb(243 244 246)));
        --calendar-tab-bg-dark: var(--wp--preset--color--contrast, var(--background-dark, rgb(55 65 81)));
        --calendar-tab-text: var(--wp--preset--color--contrast, var(--foreground, rgb(107 114 128)));
        --calendar-tab-text-dark: var(--wp--preset--color--base, var(--foreground-dark, rgb(209 213 219)));
        --calendar-tab-active-bg: var(--wp--preset--color--surface, var(--card, white));
        --calendar-tab-active-bg-dark: var(--wp--preset--color--surface-dark, var(--card-dark, rgb(75 85 99)));
        --calendar-tab-active-text: var(--wp--preset--color--heading, var(--card-foreground, rgb(17 24 39)));
        --calendar-tab-active-text-dark: var(--wp--preset--color--heading-dark, var(--card-foreground-dark, white));
        font-family: inherit !important;
        
        /* Override theme variables within calendar scope */
        --muted: var(--wp--preset--color--tertiary, var(--muted, rgb(55 65 81))) !important;
        --tw-bg-opacity: 1 !important;
      }
      
      /* Dynamic theme detection support */
      @media (prefers-color-scheme: dark) {
        #unbc-calendar-react-component[data-calendar-isolated]:not([data-theme-override]) {
          --calendar-tab-bg: var(--calendar-tab-bg-dark);
          --calendar-tab-text: var(--calendar-tab-text-dark);
          --calendar-tab-active-bg: var(--calendar-tab-active-bg-dark);
          --calendar-tab-active-text: var(--calendar-tab-active-text-dark);
        }
      }
      
      /* JavaScript-detected theme support */
      #unbc-calendar-react-component[data-detected-theme="dark"] [data-slot="tabs-list"] {
        background-color: var(--calendar-tab-bg-dark) !important;
        background: var(--calendar-tab-bg-dark) !important;
      }
      
      #unbc-calendar-react-component[data-detected-theme="dark"] [data-slot="tabs-trigger"] {
        color: var(--calendar-tab-text-dark) !important;
      }
      
      #unbc-calendar-react-component[data-detected-theme="dark"] [data-slot="tabs-trigger"][data-state="active"] {
        background-color: var(--calendar-tab-active-bg-dark) !important;
        color: var(--calendar-tab-active-text-dark) !important;
      }
      
      /* Override any nested theme selectors - support multiple theme detection patterns */
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"],
      html.dark #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"],
      body.dark #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"],
      [data-color-scheme="dark"] #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"],
      .is-dark-theme #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"],
      html[data-theme="dark"] body #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"],
      html[data-theme="dark"] body div #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"] {
        background-color: var(--calendar-tab-bg-dark) !important;
        background: var(--calendar-tab-bg-dark) !important;
      }
      
      html[data-theme="light"] #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"],
      html.light #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"],
      body.light #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"],
      [data-color-scheme="light"] #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"],
      .is-light-theme #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"],
      body #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"],
      #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"] {
        background-color: var(--calendar-tab-bg) !important;
        background: var(--calendar-tab-bg) !important;
      }
      
      /* ULTRA NUCLEAR: Override the specific theme selector that's causing issues */
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] .bg-gray-100,
      html.dark #unbc-calendar-react-component[data-calendar-isolated] .bg-gray-100,
      body.dark #unbc-calendar-react-component[data-calendar-isolated] .bg-gray-100,
      [data-color-scheme="dark"] #unbc-calendar-react-component[data-calendar-isolated] .bg-gray-100,
      .is-dark-theme #unbc-calendar-react-component[data-calendar-isolated] .bg-gray-100,
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] .dark\\:bg-gray-700,
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] [data-slot="tabs-list"].bg-gray-100,
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] [data-slot="tabs-list"].dark\\:bg-gray-700,
      html[data-theme="dark"] body #unbc-calendar-react-component[data-calendar-isolated] .bg-gray-100,
      html[data-theme="dark"] body #unbc-calendar-react-component[data-calendar-isolated] .dark\\:bg-gray-700,
      html[data-theme="dark"] body #unbc-calendar-react-component[data-calendar-isolated] [data-slot="tabs-list"] {
        background-color: var(--calendar-tab-bg-dark) !important;
        background: var(--calendar-tab-bg-dark) !important;
        --muted: var(--calendar-tab-bg-dark) !important;
      }
      
      /* Force exact Tailwind color values */
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] [role="tablist"] {
        background-color: rgb(55 65 81) !important;
        background: rgb(55 65 81) !important;
      }
      
      /* Protect dropdown/select components from theme interference */
      #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-content"] {
        background-color: white !important;
        border-color: rgb(229 231 235) !important; /* border-gray-200 */
        color: rgb(17 24 39) !important; /* text-gray-900 */
      }
      
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-content"],
      html[data-theme="dark"] body #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-content"] {
        background-color: rgb(31 41 55) !important; /* dark:bg-gray-800 */
        border-color: rgb(75 85 99) !important; /* dark:border-gray-600 */
        color: rgb(243 244 246) !important; /* dark:text-gray-100 */
      }
      
      /* Protect select items */
      #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-item"] {
        background-color: transparent !important;
        color: rgb(17 24 39) !important; /* text-gray-900 */
      }
      
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-item"],
      html[data-theme="dark"] body #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-item"] {
        background-color: transparent !important;
        color: rgb(243 244 246) !important; /* dark:text-gray-100 */
      }
      
      /* Protect select item hover states */
      #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-item"]:hover,
      #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-item"][data-highlighted] {
        background-color: rgb(243 244 246) !important; /* hover:bg-gray-100 */
        color: rgb(17 24 39) !important;
      }
      
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-item"]:hover,
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-item"][data-highlighted],
      html[data-theme="dark"] body #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-item"]:hover,
      html[data-theme="dark"] body #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-item"][data-highlighted] {
        background-color: rgb(55 65 81) !important; /* dark:hover:bg-gray-700 */
        color: rgb(243 244 246) !important;
      }
      
      /* Protect select trigger */
      #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-trigger"] {
        background-color: transparent !important;
        border-color: rgb(229 231 235) !important; /* border-gray-200 */
        color: rgb(17 24 39) !important; /* text-gray-900 */
      }
      
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-trigger"],
      html[data-theme="dark"] body #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-trigger"] {
        background-color: rgb(55 65 81 / 0.3) !important; /* dark:bg-gray-700/30 */
        border-color: rgb(75 85 99) !important; /* dark:border-gray-600 */
        color: rgb(243 244 246) !important; /* dark:text-gray-100 */
      }
    `;
    document.head.appendChild(style);
    
    // Dynamic theme detection for WordPress themes that don't use standard selectors
    const detectTheme = () => {
      const calendarComponent = document.getElementById('unbc-calendar-react-component');
      if (!calendarComponent) return;
      
      // Check various theme detection methods
      const isDark = 
        // Standard selectors
        document.documentElement.hasAttribute('data-theme') && document.documentElement.getAttribute('data-theme') === 'dark' ||
        document.documentElement.classList.contains('dark') ||
        document.body.classList.contains('dark') ||
        document.documentElement.hasAttribute('data-color-scheme') && document.documentElement.getAttribute('data-color-scheme') === 'dark' ||
        document.documentElement.classList.contains('is-dark-theme') ||
        document.body.classList.contains('is-dark-theme') ||
        // Check computed styles
        getComputedStyle(document.documentElement).getPropertyValue('--wp--preset--color--background')?.includes('0, 0, 0') ||
        getComputedStyle(document.body).backgroundColor === 'rgb(0, 0, 0)' ||
        // Media query fallback
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      calendarComponent.setAttribute('data-detected-theme', isDark ? 'dark' : 'light');
    };
    
    // Run detection initially and on changes
    detectTheme();
    const observer = new MutationObserver(detectTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'class'] });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    // Also listen for media query changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', detectTheme);
    
    return () => {
      document.head.removeChild(style);
      observer.disconnect();
      mediaQuery.removeEventListener('change', detectTheme);
    };
  }, []);
  
  // Check if we're in development mode - use Vite's environment detection
  const isDev = import.meta.env.DEV;
  
  // Filters
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [organizationFilter, setOrganizationFilter] = useState("all");
  const [searchFilter, setSearchFilter] = useState("");
  const [searchInput, setSearchInput] = useState("");

  // Calculate month-based date range like Calendar Plus approach
  const dateFilters = React.useMemo(() => {
    // Use calendarViewDate for month-based loading
    const baseDate = new Date(calendarViewDate.getTime());
    const year = baseDate.getFullYear();
    const month = baseDate.getMonth();
    
    // Start: First day of current month
    const startDate = new Date(year, month, 1);
    
    // End: Last day of current month
    const endDate = new Date(year, month + 1, 0);
    
    return {
      per_page: 500,
      start_date: startDate.toISOString().split('T')[0],
      end_date: endDate.toISOString().split('T')[0],
      year: year,
      month: month + 1, // Calendar Plus uses 1-based months
      category: categoryFilter === "all" ? "" : categoryFilter,
      search: searchFilter
    };
  }, [calendarViewDate, categoryFilter, searchFilter]); // Depends on navigation date and filters

  // Use appropriate hooks based on environment
  const devData = useEventsDev(dateFilters);
  const prodEventsData = useEvents(dateFilters);
  const prodOrgsData = useOrganizations();
  const categoriesData = useEventCategories();
  const categoryConfigData = useCategoryConfig();

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
    setFilters,
    hasMore,
    loadMore,
    loadingMore,
    pagination
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

  // Note: Date range filtering is now handled automatically by the dateFilters useMemo above

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

  const handleMonthChange = React.useCallback((date: Date) => {
    setCalendarViewDate(date); // Only update calendar navigation, not API calls
  }, []);

  const handleEventClick = React.useCallback((event: Event) => {
    setSelectedEvent(event);
    setShowEventDialog(true);
  }, []);

  const handleLoadMore = React.useCallback(() => {
    // Use client-side pagination to maintain consistent data across views
    setListDisplayCount(prev => prev + listLoadMoreCount);
  }, [listLoadMoreCount]);

  // Reset display count when switching to list view or when filters change
  React.useEffect(() => {
    if (activeTab === "list") {
      setListDisplayCount(listInitialItems);
    }
  }, [activeTab, categoryFilter, organizationFilter, searchFilter, listInitialItems]);


  // Show loading state only on initial load (when we have no events yet)
  if ((loading || orgLoading || categoriesLoading) && (!allEvents || allEvents.length === 0)) {
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
    <div id="unbc-calendar-react-component" data-calendar-isolated="true" className="w-full space-y-6">

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

              {/* Right side - Search input and loading indicator */}
              <div className="flex-shrink-0 flex items-center gap-2">
                {loading && allEvents && allEvents.length > 0 && (
                  <Loader2 className="h-4 w-4 animate-spin text-gray-500" />
                )}
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

              {/* Right side - Loading indicator and Search Button */}
              <div className="flex-shrink-0 flex items-center gap-2">
                {loading && allEvents && allEvents.length > 0 && (
                  <Loader2 className="h-4 w-4 animate-spin text-gray-500" />
                )}
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
                onMonthChange={handleMonthChange}
                currentDate={calendarViewDate}
              />
            </div>
            <div className="block md:hidden mobile-calendar">
              <MobileMonthView 
                events={events} 
                eventMetadata={eventMetadata}
                categoryMappings={categoryMappings}
                onEventClick={handleEventClick}
                onMonthChange={handleMonthChange}
                currentDate={calendarViewDate}
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