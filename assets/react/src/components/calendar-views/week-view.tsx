import { occursOn, dayHours } from '@/utils/eventRange';
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Event, EventMetadata } from "@/types";
import { getCategoryVariant, getVariantEventBackgroundClass, type CategoryVariant } from "@/utils/categoryColors";

interface WeekViewProps {
  events: Event[];
  eventMetadata: Record<string, EventMetadata>;
  categoryMappings: { [slug: string]: CategoryVariant };
  currentDate: Date;
  onDateChange: (date: Date) => void;
  onEventClick?: (event: Event) => void;
}

export function WeekView({ events, eventMetadata, categoryMappings, currentDate, onDateChange, onEventClick }: WeekViewProps) {
  const getWeekDates = (date: Date) => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());
    
    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      return day;
    });
  };

  const weekDates = getWeekDates(currentDate);
  const hours = Array.from({ length: 24 }, (_, i) => i);

  const getEventsForDay = (date: Date) => {
    return events.filter(event => {
      return occursOn(event, date);
    });
  };

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + (direction === 'next' ? 7 : -7));
    onDateChange(newDate);
  };

  const getEventPosition = (event: Event, dayEvents: Event[], eventIndex: number, date: Date) => {
    const [startPosition, endPosition] = dayHours(event, date);
    const duration = endPosition - startPosition;
    const overlappingEvents = dayEvents.filter(otherEvent => {
      const [otherStart, otherEnd] = dayHours(otherEvent, date);
      return startPosition < otherEnd && endPosition > otherStart;
    });

    const overlapCount = overlappingEvents.length;
    const eventPosition = overlappingEvents.findIndex(e => e.id === event.id);
    const widthPercentage = overlapCount > 1 ? 100 / overlapCount : 100;
    const leftPercentage = overlapCount > 1 ? (eventPosition * widthPercentage) : 0;
    
    return {
      top: `${startPosition * 80}px`, // 80px per hour for better readability
      height: `${duration * 80}px`, // Accurate height based on actual duration
      left: `${leftPercentage}%`,
      width: `${widthPercentage}%`,
    };
  };


  return (
    <div className="space-y-4">
      {/* Week Navigation */}
      <div className="flex items-center justify-between">
        <button
          aria-label="Previous week"
          onClick={() => navigateWeek('prev')}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {weekDates[0].toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - {weekDates[6].toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </h2>
        <button
          aria-label="Next week"
          onClick={() => navigateWeek('next')}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Week Grid */}
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
        {/* Header */}
        <div className="grid grid-cols-8 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
          <div className="p-3 text-xs font-medium text-gray-500 dark:text-gray-400 border-r border-gray-200 dark:border-gray-600">Time</div>
          {weekDates.map((date, index) => (
            <div key={index} className="p-3 text-center border-r border-gray-200 dark:border-gray-600 last:border-r-0">
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                {date.toLocaleDateString('en-US', { weekday: 'short' })}
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {date.getDate()}
              </div>
            </div>
          ))}
        </div>

        {/* Time grid */}
        <div className="grid grid-cols-8 relative">
          {/* Time labels column */}
          <div className="border-r border-gray-200 dark:border-gray-600">
            {hours.map((hour) => (
              <div key={hour} className="h-[80px] p-2 text-xs text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600 flex items-start">
                {hour === 0 ? '12 AM' : hour === 12 ? '12 PM' : hour > 12 ? `${hour - 12} PM` : `${hour} AM`}
              </div>
            ))}
          </div>
          
          {/* Day columns with events */}
          {weekDates.map((date, dayIndex) => {
            const dayEvents = getEventsForDay(date);
            
            return (
              <div key={dayIndex} className="relative border-r border-gray-200 dark:border-gray-600 last:border-r-0">
                {/* Hour grid lines */}
                {hours.map((hour) => (
                  <div key={hour} className="h-[80px] border-b border-gray-200 dark:border-gray-600"></div>
                ))}
                
                {/* Events positioned absolutely */}
                {dayEvents.map((event, eventIndex) => {
                  const metadata = eventMetadata[event.id];
                  const variant = getCategoryVariant(metadata?.category, categoryMappings);
                  const colorClass = getVariantEventBackgroundClass(variant);
                  const position = getEventPosition(event, dayEvents, eventIndex, date);
                  
                  return (
                    <div
                      key={event.id}
                  role="button" tabIndex={0} aria-label={`View ${event.title}`}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); onEventClick?.(event); } }}
                      className={`absolute ${colorClass} border rounded p-2 text-sm z-20 overflow-hidden flex flex-col cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary hover:shadow-md transition-shadow event-card`}
                      style={{
                        ...position,
                        margin: '1px',
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        onEventClick?.(event);
                      }}
                    >
                      <div className="font-medium leading-tight truncate text-sm">{event.title}</div>
                      <div className="text-xs opacity-75 leading-tight">
                        {event.startDate.toLocaleTimeString('en-US', { 
                          hour: 'numeric', 
                          minute: '2-digit', 
                          hour12: true 
                        })}
                      </div>
                      {metadata && (
                        <div className="text-xs leading-tight">
                          <div className="truncate">{metadata.location}</div>
                          {metadata.organization && (
                            <div className="truncate opacity-75">{metadata.organization}</div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}