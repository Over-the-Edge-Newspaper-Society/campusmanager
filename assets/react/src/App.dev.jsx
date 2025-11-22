import React, { useState, useEffect } from 'react';
import UNBCCalendar from './components/unbc-calendar';
import { TodayEventsWidget } from './components/today-events-widget';
import { OrganizationEventsList } from './components/organization-events-list';
import { EventListView, MobileListView } from './components/list-views';
import { EventDialog } from './components/event-dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs';
import { useEventsDev } from './hooks/useEventsDev';
import { Moon, Sun, Calendar, List, Smartphone } from 'lucide-react';

function AppDev() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if dark mode was previously set
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const [showWeekView, setShowWeekView] = useState(true);
  const [showDayView, setShowDayView] = useState(true);
  const [showCost, setShowCost] = useState(true);
  const [monthDisplayMode, setMonthDisplayMode] = useState('popover');
  const [sidebarPosition, setSidebarPosition] = useState('right');

  // State for events list demo
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventDialog, setShowEventDialog] = useState(false);

  // State for Load More demo
  const [displayedCount, setDisplayedCount] = useState(10);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Use dev events hook for sample data
  const { events, eventMetadata, categoryMappings, loading } = useEventsDev();
  
  useEffect(() => {
    // Apply dark mode class to html element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save preference
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowEventDialog(true);
  };

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    // Simulate loading delay
    setTimeout(() => {
      setDisplayedCount(prev => prev + 10);
      setIsLoadingMore(false);
    }, 1000);
  };

  const resetLoadMore = () => {
    setDisplayedCount(10);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 py-8">
        {/* Header with controls */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Campus Manager Calendar
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Development Mode - Using Sample Data
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            {/* View Toggle Controls */}
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  checked={showWeekView}
                  onChange={(e) => setShowWeekView(e.target.checked)}
                  className="rounded"
                />
                Show Week View
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  checked={showDayView}
                  onChange={(e) => setShowDayView(e.target.checked)}
                  className="rounded"
                />
                Show Day View
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  checked={showCost}
                  onChange={(e) => setShowCost(e.target.checked)}
                  className="rounded"
                />
                Show Cost
              </label>
            </div>

            {/* Sidebar Controls */}
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Sidebar</span>
                <select
                  value={monthDisplayMode}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === 'popover' || value === 'dropdown' || value === 'sidebar') {
                      setMonthDisplayMode(value);
                    }
                  }}
                  className="rounded border border-gray-300 bg-white px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                >
                  <option value="popover">Hover card</option>
                  <option value="dropdown">Dropdown</option>
                  <option value="sidebar">Sidebar</option>
                </select>
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Right side</span>
                <select
                  value={sidebarPosition}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === 'left' || value === 'right') {
                      setSidebarPosition(value);
                    }
                  }}
                  disabled={monthDisplayMode !== 'sidebar'}
                  className="rounded border border-gray-300 bg-white px-2 py-1 text-sm disabled:opacity-60 disabled:cursor-not-allowed dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                >
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                </select>
              </label>
            </div>

            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
        
        {/* Info Banner */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 text-blue-900 dark:text-blue-200 px-4 py-3 rounded-lg mb-6">
          <div className="flex items-start">
            <svg className="flex-shrink-0 h-5 w-5 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <strong className="font-semibold">Development Mode:</strong>
              <ul className="mt-1 text-sm list-disc list-inside space-y-0.5">
                <li>Sample events are distributed throughout the current month</li>
                <li>Click on any day or event to see details</li>
                <li>All calendar views and components are available in the tabs below</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tabs for different components */}
        <Tabs defaultValue="calendar" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="calendar">
              <Calendar className="w-4 h-4 mr-2" />
              Full Calendar
            </TabsTrigger>
            <TabsTrigger value="list-views">
              <List className="w-4 h-4 mr-2" />
              List Views
            </TabsTrigger>
            <TabsTrigger value="mobile">
              <Smartphone className="w-4 h-4 mr-2" />
              Mobile View
            </TabsTrigger>
          </TabsList>

          {/* Calendar Tab */}
          <TabsContent value="calendar">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
              <div>
                <UNBCCalendar
                  showWeekView={showWeekView}
                  showDayView={showDayView}
                  showCost={showCost}
                  initialMonthDisplayMode={monthDisplayMode}
                  initialMonthSidebarPosition={sidebarPosition}
                />
              </div>

              {/* Widget Demo */}
              <div className="space-y-4">
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 text-amber-900 dark:text-amber-200 px-4 py-3 rounded-lg">
                  <div className="font-semibold mb-1">Today's Events Widget</div>
                  <p className="text-xs">Widget for WordPress sidebar</p>
                </div>
                <TodayEventsWidget />
              </div>
            </div>
          </TabsContent>

          {/* List Views Tab */}
          <TabsContent value="list-views">
            <div className="space-y-8">
              {/* Organization Events List */}
              <div>
                <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 text-purple-900 dark:text-purple-200 px-4 py-3 rounded-lg mb-4">
                  <div className="font-semibold mb-1">Organization Events List</div>
                  <p className="text-xs">Block for organization pages (limit: 10 events)</p>
                </div>
                {loading ? (
                  <div className="text-center py-8 text-gray-600 dark:text-gray-400">
                    Loading events...
                  </div>
                ) : (
                  <OrganizationEventsList
                    events={events}
                    eventMetadata={eventMetadata}
                    categoryMappings={categoryMappings}
                    limit={10}
                    showPastEvents={false}
                    onEventClick={handleEventClick}
                  />
                )}
              </div>

              {/* Desktop List View with Load More */}
              <div>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 text-green-900 dark:text-green-200 px-4 py-3 rounded-lg mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold mb-1">Desktop List View (Load More)</div>
                      <p className="text-xs">Showing {displayedCount} of {events.length} events</p>
                    </div>
                    <button
                      onClick={resetLoadMore}
                      className="text-xs px-3 py-1 bg-green-200 dark:bg-green-800 rounded hover:bg-green-300 dark:hover:bg-green-700 transition-colors"
                    >
                      Reset
                    </button>
                  </div>
                </div>
                {loading ? (
                  <div className="text-center py-8 text-gray-600 dark:text-gray-400">
                    Loading events...
                  </div>
                ) : (
                  <EventListView
                    events={events.slice(0, displayedCount)}
                    eventMetadata={eventMetadata}
                    categoryMappings={categoryMappings}
                    onEventClick={handleEventClick}
                    onLoadMore={handleLoadMore}
                    hasMore={displayedCount < events.length}
                    loading={isLoadingMore}
                    showCost={showCost}
                  />
                )}
              </div>
            </div>
          </TabsContent>

          {/* Mobile View Tab */}
          <TabsContent value="mobile">
            <div>
              <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-700 text-teal-900 dark:text-teal-200 px-4 py-3 rounded-lg mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold mb-1">Mobile List View (Load More)</div>
                    <p className="text-xs">Optimized for mobile devices - Showing {displayedCount} events</p>
                  </div>
                  <button
                    onClick={resetLoadMore}
                    className="text-xs px-3 py-1 bg-teal-200 dark:bg-teal-800 rounded hover:bg-teal-300 dark:hover:bg-teal-700 transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </div>
              {loading ? (
                <div className="text-center py-8 text-gray-600 dark:text-gray-400">
                  Loading events...
                </div>
              ) : (
                <div className="max-w-md mx-auto">
                  <MobileListView
                    events={events.slice(0, displayedCount)}
                    eventMetadata={eventMetadata}
                    categoryMappings={categoryMappings}
                    onEventClick={handleEventClick}
                    onLoadMore={handleLoadMore}
                    hasMore={displayedCount < events.length}
                    loading={isLoadingMore}
                    showCost={showCost}
                  />
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        {/* Event Dialog */}
        <EventDialog
          event={selectedEvent}
          eventMetadata={eventMetadata}
          open={showEventDialog}
          onOpenChange={setShowEventDialog}
        />
      </div>
    </div>
  );
}

export default AppDev;
