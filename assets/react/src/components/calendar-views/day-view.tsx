import { occursOn, dayHours } from '@/utils/eventRange';
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MapPin, Building } from "lucide-react";
import type { Event, EventMetadata } from "@/types";
import { getCategoryVariant, getVariantEventBackgroundClass, type CategoryVariant } from "@/utils/categoryColors";

interface DayViewProps {
  events: Event[];
  eventMetadata: Record<string, EventMetadata>;
  categoryMappings: { [slug: string]: CategoryVariant };
  initialDate?: Date;
  currentDate: Date;
  onDateChange: (date: Date) => void;
  onEventClick?: (event: Event) => void;
}

export function DayView({ events, eventMetadata, categoryMappings, currentDate, onDateChange, onEventClick }: DayViewProps) {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  
  const getEventsForDay = () => {
    return events.filter(event => {
      return occursOn(event, currentDate);
    });
  };

  const navigateDay = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + (direction === 'next' ? 1 : -1));
    onDateChange(newDate);
  };

  const getEventPosition = (event: Event, dayEvents: Event[], eventIndex: number) => {
    const [startPosition, endPosition] = dayHours(event, currentDate);
    const duration = endPosition - startPosition;
    const overlappingEvents = dayEvents.filter(otherEvent => {
      const [otherStart, otherEnd] = dayHours(otherEvent, currentDate);
      return startPosition < otherEnd && endPosition > otherStart;
    });

    const overlapCount = overlappingEvents.length;
    const eventPosition = overlappingEvents.findIndex(e => e.id === event.id);
    const widthPercentage = overlapCount > 1 ? 100 / overlapCount : 100;
    const leftPercentage = overlapCount > 1 ? (eventPosition * widthPercentage) : 0;
    
    return {
      top: `${startPosition * 80}px`, // 80px per hour for day view
      height: `${duration * 80}px`, // Accurate height based on actual duration
      left: `${leftPercentage}%`,
      width: `${widthPercentage}%`,
    };
  };

  const dayEvents = getEventsForDay();


  return (
    <div className="space-y-4">
      {/* Day Navigation */}
      <div className="flex items-center justify-between">
        <button
          aria-label="Previous day"
          onClick={() => navigateDay('prev')}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {currentDate.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
          })}
        </h2>
        <button
          aria-label="Next day"
          onClick={() => navigateDay('next')}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Day Schedule */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="flex">
          {/* Time column */}
          <div className="w-20 border-r border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
            {hours.map((hour) => (
              <div key={hour} className="h-[80px] p-3 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600 flex items-start">
                {hour === 0 ? '12 AM' : hour === 12 ? '12 PM' : hour > 12 ? `${hour - 12} PM` : `${hour} AM`}
              </div>
            ))}
          </div>
          
          {/* Events column */}
          <div className="flex-1 relative">
            {/* Hour grid lines */}
            {hours.map((hour) => (
              <div key={hour} className="h-[80px] border-b border-gray-200 dark:border-gray-600"></div>
            ))}
            
            {/* Events positioned absolutely */}
            {dayEvents.map((event, eventIndex) => {
              const metadata = eventMetadata[event.id];
              const variant = getCategoryVariant(metadata?.category, categoryMappings);
              const colorClass = getVariantEventBackgroundClass(variant);
              const position = getEventPosition(event, dayEvents, eventIndex);
              
              return (
                <div
                  key={event.id}
                  role="button" tabIndex={0} aria-label={`View ${event.title}`}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); onEventClick?.(event); } }}
                  className={`absolute ${colorClass} border rounded-lg p-2 text-sm z-20 overflow-hidden flex flex-col cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary hover:shadow-md transition-shadow event-card`}
                  style={{
                    ...position,
                    margin: '2px',
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onEventClick?.(event);
                  }}
                >
                  <div className="font-semibold leading-tight truncate">{event.title}</div>
                  <div className="text-xs opacity-75 leading-tight">
                    {event.startDate.toLocaleTimeString('en-US', { 
                      hour: 'numeric', 
                      minute: '2-digit', 
                      hour12: true 
                    })}
                    {event.endDate && ` - ${event.endDate.toLocaleTimeString('en-US', { 
                      hour: 'numeric', 
                      minute: '2-digit', 
                      hour12: true 
                    })}`}
                  </div>
                  {metadata && (
                    <div className="text-xs leading-tight">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-2.5 w-2.5" />
                        <span className="truncate">{metadata.location}</span>
                      </div>
                      {metadata.organization && (
                        <div className="flex items-center gap-1">
                          <Building className="h-2.5 w-2.5" />
                          <span className="truncate opacity-75">{metadata.organization}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}