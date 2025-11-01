import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'primary' | 'warning' | 'danger'
  size?: 'default' | 'sm'
}

function Badge({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 dark:focus:ring-slate-300 focus:ring-offset-2",
        {
          'default': "border-transparent bg-gray-500 text-white hover:bg-gray-500/80", // Gray for uncategorized
          'secondary': "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80",
          'destructive': "border-transparent bg-red-500 text-slate-50 hover:bg-red-500/80",
          'outline': "text-slate-950 dark:text-slate-50 border-slate-200 dark:border-slate-600",
          'success': "border-transparent bg-green-500 text-white hover:bg-green-500/80", // Green for UNBC
          'primary': "border-transparent bg-purple-500 text-white hover:bg-purple-500/80", // Purple for Clubs  
          'warning': "border-transparent bg-blue-500 text-white hover:bg-blue-500/80", // Blue for Sports
          'danger': "border-transparent bg-red-500 text-white hover:bg-red-500/80", // Red for Organizations
        }[variant],
        {
          'default': "px-2.5 py-0.5 text-xs",
          'sm': "px-2 py-0.5 text-[10px]",
        }[size],
        className
      )}
      {...props}
    />
  )
}

export { Badge }