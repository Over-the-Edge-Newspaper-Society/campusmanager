import React from "react";
import { Badge } from "./ui/badge";
import { CalendarDays } from "lucide-react";
import type { Event, EventMetadata } from "../types";

interface OrganizationEventsListProps {
  events: Event[];
  eventMetadata: Record<string, EventMetadata>;
  organizationId?: string;
  organizationName?: string;
  limit?: number;
  showPastEvents?: boolean;
  onEventClick?: (event: Event) => void;
}

export function OrganizationEventsList({ 
  events, 
  eventMetadata, 
  organizationId,
  organizationName,
  limit,
  showPastEvents = false,
  onEventClick 
}: OrganizationEventsListProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  // Filter events by organization and date
  const filteredEvents = React.useMemo(() => {
    let filtered = events;
    const now = new Date();

    // Filter by organization if specified
    if (organizationId || organizationName) {
      filtered = filtered.filter(event => {
        const metadata = eventMetadata[event.id];
        if (organizationId) {
          return metadata?.organization_id?.toString() === organizationId;
        }
        if (organizationName) {
          return metadata?.organization === organizationName;
        }
        return true;
      });
    }

    // Filter by date unless showPastEvents is true
    if (!showPastEvents) {
      filtered = filtered.filter(event => event.startDate >= now);
    }

    // Sort by date
    filtered.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

    // Apply limit if specified
    if (limit && limit > 0) {
      filtered = filtered.slice(0, limit);
    }

    return filtered;
  }, [events, eventMetadata, organizationId, organizationName, limit, showPastEvents]);

  if (filteredEvents.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        <CalendarDays className="mx-auto h-8 w-8 mb-3 opacity-50" />
        <h3 className="text-base font-medium mb-1">No upcoming events</h3>
        <p className="text-sm">
          {organizationName ? `${organizationName} has no upcoming events.` : 'No events found for this organization.'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {organizationName && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {organizationName} Events
          </h3>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {filteredEvents.length} upcoming event{filteredEvents.length !== 1 ? 's' : ''}
          </div>
        </div>
      )}
      
      {filteredEvents.map((event) => {
        const metadata = eventMetadata[event.id];
        const categoryColors = {
          academic: "after:bg-green-500",
          social: "after:bg-orange-500",
          cultural: "after:bg-purple-500",
          sports: "after:bg-red-500",
          professional: "after:bg-teal-500",
          wellness: "after:bg-blue-500",
          volunteer: "after:bg-yellow-500",
          arts: "after:bg-pink-500"
        };
        const categoryColor = metadata ? categoryColors[metadata.category as keyof typeof categoryColors] : "after:bg-gray-500";

        return (
          <div
            key={event.id}
            className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 relative rounded-lg p-4 pl-6 hover:shadow-md transition-all cursor-pointer after:absolute after:inset-y-3 after:left-3 after:w-1 after:rounded-full ${categoryColor}`}
            onClick={() => onEventClick?.(event)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-grow min-w-0">
                <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {event.title}
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span className="font-medium">{formatDate(event.startDate)}</span>
                  <span>{formatTime(event.startDate)} - {formatTime(event.endDate)}</span>
                </div>
                
                {metadata && (
                  <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {metadata.location && (
                      <div>📍 {metadata.location}</div>
                    )}
                    {!organizationName && metadata.organization && (
                      <div>🏢 {metadata.organization}</div>
                    )}
                  </div>
                )}
              </div>
              
              <div className="flex flex-col items-end gap-2 flex-shrink-0 ml-4">
                {metadata?.cost && (
                  <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {metadata.cost}
                  </div>
                )}
                {metadata?.category && (
                  <Badge variant="secondary" size="sm" className="text-xs">
                    {metadata.category.charAt(0).toUpperCase() + metadata.category.slice(1)}
                  </Badge>
                )}
              </div>
            </div>
            
            {metadata?.registrationRequired && (
              <div className="mt-3 pt-2 border-t border-gray-100 dark:border-gray-700">
                <Badge variant="outline" size="sm">📝 Registration Required</Badge>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}