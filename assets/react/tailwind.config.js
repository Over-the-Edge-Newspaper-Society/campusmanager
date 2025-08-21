/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
  safelist: [
    // Color variants for calendar categories
    'bg-gray-500', 'dark:bg-gray-400',
    'bg-purple-500', 'dark:bg-purple-400',
    'bg-green-500', 'dark:bg-green-400',
    'bg-red-500', 'dark:bg-red-400',
    'bg-blue-500', 'dark:bg-blue-400',
    'bg-orange-500', 'dark:bg-orange-400',
    'bg-cyan-500', 'dark:bg-cyan-400',
    'bg-pink-500', 'dark:bg-pink-400',
    'bg-indigo-500', 'dark:bg-indigo-400',
    'bg-yellow-500', 'dark:bg-yellow-400',
    // Hover states and text colors for better contrast
    'dark:hover:bg-gray-600',
    'dark:text-white',
    'dark:text-gray-200',
    '!text-gray-800',
    'dark:!text-white',
    '!text-gray-600',
    'dark:!text-gray-200',
  ]
}