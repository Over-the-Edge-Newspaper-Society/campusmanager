import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Building2, DollarSign, Calendar, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import type { Event, EventMetadata } from "@/types";

interface EventDialogProps {
  event: Event | null;
  eventMetadata: Record<string, EventMetadata>;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EventDialog({ event, eventMetadata, open, onOpenChange }: EventDialogProps) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = React.useState(false);
  
  // Debug website URL
  React.useEffect(() => {
    if (event && eventMetadata[event.id]?.website) {
      console.log('Event website URL:', eventMetadata[event.id].website);
    }
  }, [event, eventMetadata]);

  if (!event) return null;

  const metadata = eventMetadata[event.id];
  
  // Function to create excerpt from description
  const createExcerpt = (text: string, maxLength: number = 180) => {
    if (!text || text.length <= maxLength) return text;
    
    // Find a good break point near the max length (prefer sentence end)
    const truncated = text.substring(0, maxLength);
    const lastSentence = truncated.lastIndexOf('.');
    const lastSpace = truncated.lastIndexOf(' ');
    
    // Use sentence end if it's reasonably close, otherwise use last space
    const breakPoint = lastSentence > maxLength - 50 ? lastSentence + 1 : lastSpace;
    return text.substring(0, breakPoint > 0 ? breakPoint : maxLength).trim();
  };

  // Generate calendar links
  const generateCalendarLink = (type: 'google' | 'outlook' | 'apple') => {
    const startDate = event.startDate;
    const endDate = event.endDate || new Date(startDate.getTime() + 60 * 60 * 1000);
    
    const formatDateForGoogle = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d\d\d/g, '');
    };
    
    const formatDateForOutlook = (date: Date) => {
      return date.toISOString();
    };

    switch (type) {
      case 'google':
        const googleUrl = new URL('https://calendar.google.com/calendar/render');
        googleUrl.searchParams.append('action', 'TEMPLATE');
        googleUrl.searchParams.append('text', event.title);
        googleUrl.searchParams.append('dates', `${formatDateForGoogle(startDate)}/${formatDateForGoogle(endDate)}`);
        googleUrl.searchParams.append('details', event.description || '');
        if (metadata?.location) {
          googleUrl.searchParams.append('location', metadata.location);
        }
        return googleUrl.toString();
        
      case 'outlook':
        const outlookUrl = new URL('https://outlook.live.com/calendar/0/deeplink/compose');
        outlookUrl.searchParams.append('subject', event.title);
        outlookUrl.searchParams.append('body', event.description || '');
        outlookUrl.searchParams.append('startdt', formatDateForOutlook(startDate));
        outlookUrl.searchParams.append('enddt', formatDateForOutlook(endDate));
        if (metadata?.location) {
          outlookUrl.searchParams.append('location', metadata.location);
        }
        return outlookUrl.toString();
        
      case 'apple':
        const icsContent = [
          'BEGIN:VCALENDAR',
          'VERSION:2.0',
          'BEGIN:VEVENT',
          `DTSTART:${formatDateForGoogle(startDate)}`,
          `DTEND:${formatDateForGoogle(endDate)}`,
          `SUMMARY:${event.title}`,
          `DESCRIPTION:${event.description || ''}`,
          metadata?.location ? `LOCATION:${metadata.location}` : '',
          'END:VEVENT',
          'END:VCALENDAR'
        ].filter(line => line).join('\n');
        
        return `data:text/calendar;charset=utf8,${encodeURIComponent(icsContent)}`;
    }
  };

  const categoryStyles = {
    clubs: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    unbc: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    organizations: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    sports: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 sm:w-full p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-xl text-gray-900 dark:text-gray-100">{event.title}</DialogTitle>
          {event.description && (
            <div className="mt-2">
              <DialogDescription className={`text-gray-600 dark:text-gray-400 leading-relaxed break-words ${isDescriptionExpanded ? 'max-h-[40vh] overflow-y-auto pr-2' : ''}`}>
                {isDescriptionExpanded ? event.description : createExcerpt(event.description)}
              </DialogDescription>
              {event.description.length > 180 && (
                <button
                  onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                  className="inline-flex items-center gap-1 mt-3 px-3 py-2 text-sm text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100 hover:bg-blue-50 dark:hover:bg-blue-900/20 active:bg-blue-100 dark:active:bg-blue-900/30 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {isDescriptionExpanded ? (
                    <>
                      Show less
                      <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Read more
                      <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          )}
        </DialogHeader>
        
        <div className="space-y-4 my-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Clock className="h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
              <div>
                <div className="font-medium text-gray-900 dark:text-gray-100">
                  {event.startDate.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
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
              </div>
            </div>
            
            {metadata && (
              <>
                {metadata.location && (
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                    <span className="text-gray-900 dark:text-gray-100">{metadata.location}</span>
                  </div>
                )}
                
                {metadata.organization && (
                  <div className="flex items-center gap-3 text-sm">
                    <Building2 className="h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                    <span className="text-gray-900 dark:text-gray-100">{metadata.organization}</span>
                  </div>
                )}
                
                {metadata.cost && (
                  <div className="flex items-center gap-3 text-sm">
                    <DollarSign className="h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                    <span className="text-gray-900 dark:text-gray-100">{metadata.cost}</span>
                  </div>
                )}
                
                {metadata.website && (
                  <div className="flex items-center gap-3 text-sm">
                    <ExternalLink className="h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                    <a 
                      href={metadata.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100 hover:underline transition-colors break-all cursor-pointer"
                      style={{ pointerEvents: 'auto', position: 'relative', zIndex: 10 }}
                    >
                      Event Website
                    </a>
                  </div>
                )}
                
                <div className="flex items-center gap-3">
                  {metadata.category && (
                    <Badge className={categoryStyles[metadata.category as keyof typeof categoryStyles] || 'bg-gray-100 text-gray-800'}>
                      {metadata.category.charAt(0).toUpperCase() + metadata.category.slice(1)}
                    </Badge>
                  )}
                  {metadata.registrationRequired && (
                    <Badge variant="outline" className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">Registration Required</Badge>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
        
        <DialogFooter className="flex-col sm:flex-col gap-2">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Add to your calendar:</div>
          <div className="flex gap-2 w-full">
            <Button
              variant="outline"
              className="flex-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 text-xs sm:text-sm"
              onClick={() => window.open(generateCalendarLink('google'), '_blank')}
            >
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              Google
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 text-xs sm:text-sm"
              onClick={() => window.open(generateCalendarLink('outlook'), '_blank')}
            >
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              Outlook
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 text-xs sm:text-sm"
              onClick={() => {
                const link = generateCalendarLink('apple');
                const a = document.createElement('a');
                a.href = link;
                a.download = `${event.title.replace(/[^a-z0-9]/gi, '_')}.ics`;
                a.click();
              }}
            >
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              Apple
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}