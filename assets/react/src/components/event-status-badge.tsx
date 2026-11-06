import React from "react";
import { eventScheduleStatus, eventStatusLabel } from "@/utils/eventStatus";

interface EventStatusBadgeProps {
  status?: string | null;
  className?: string;
}

/** Small "Cancelled"/"Postponed" pill; renders nothing for scheduled events. */
export function EventStatusBadge({ status, className = "" }: EventStatusBadgeProps) {
  const label = eventStatusLabel(status);
  if (!label) return null;
  const tone = eventScheduleStatus(status) === 'canceled'
    ? "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-200"
    : "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200";
  return (
    <span className={`inline-block rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide align-middle ${tone} ${className}`}>
      {label}
    </span>
  );
}

/** Classes for an event title: cancelled events are struck through. */
export function eventTitleClass(status?: string | null): string {
  return eventScheduleStatus(status) === 'canceled' ? "line-through decoration-2 opacity-75" : "";
}
