# UNBC Campus Manager - Calendar Integration

The UNBC Campus Manager now includes integrated React-based calendar and events list views, eliminating the need for a separate ReactPress installation.

## Features

✅ **Full Calendar View** - Month, week, and day views with event filtering
✅ **Events List View** - Clean list view with organization filtering  
✅ **Organization-Specific Events** - Display events for specific clubs/organizations
✅ **WordPress Blocks** - Native Gutenberg block support
✅ **Shortcodes** - Legacy shortcode support for any theme
✅ **Responsive Design** - Works on desktop and mobile
✅ **Dark Mode** - Built-in dark/light mode toggle

## Usage

### 1. Full Calendar Block/Shortcode

**Gutenberg Block:**
Add the "UNBC Calendar" block in the block editor.

**Shortcode:**
```
[unbc_calendar view="month" category="all" organization="all"]
```

**Parameters:**
- `view`: month, week, day, list (default: month)
- `category`: all, academic, social, cultural, sports, professional, wellness, volunteer, arts (default: all)
- `organization`: all, or specific organization ID (default: all)

### 2. Events List Block/Shortcode

**Gutenberg Block:**
Add the "UNBC Events List" block in the block editor.

**Shortcode:**
```
[unbc_events_list limit="5" show_past="false"]
```

**Parameters:**
- `organization_id`: Filter by organization ID
- `organization_name`: Filter by organization name
- `limit`: Number of events to show (default: 5)
- `show_past`: Include past events (default: false)

### 3. Organization-Specific Events (Loopable)

This is perfect for club landing pages to show their upcoming events.

**Shortcode:**
```
[organization_events limit="10"]
```

**Parameters:**
- `organization_id`: Specific organization ID (auto-detects from current page if empty)
- `organization_name`: Specific organization name
- `limit`: Number of events to show (default: 5)
- `show_past`: Include past events (default: false)

**Auto-detection:** When used on an organization post type page, it automatically shows that organization's events.

## Examples

### Club Landing Page
```html
<h2>Upcoming Events</h2>
[organization_events limit="5"]
```

### Campus Events Page
```html
<h1>Campus Calendar</h1>
[unbc_calendar view="month"]

<h2>Upcoming Events</h2>
[unbc_events_list limit="10"]
```

### Department Events
```html
[organization_events organization_name="Computer Science Department" limit="8"]
```

### Sports Events Only
```html
[unbc_calendar view="list" category="sports"]
```

## Building React Components

If you modify the React components, rebuild them:

```bash
cd wp-content/plugins/campusmanager/assets/react
npm install
npm run build
```

## File Structure

```
wp-content/plugins/campusmanager/
├── assets/react/           # React source code
│   ├── src/
│   │   ├── components/     # Calendar and list components
│   │   └── wordpress-integration.jsx  # WordPress bridge
│   ├── dist/              # Built files (auto-generated)
│   └── package.json
├── includes/
│   └── class-calendar-blocks.php  # WordPress integration
└── unbc-events.php        # Main plugin file
```

## Integration Benefits

- **No ReactPress dependency** - Everything is self-contained in the campus manager plugin
- **Better performance** - Optimized build specifically for WordPress
- **Unified management** - All campus functionality in one plugin
- **Easy customization** - Modify React components and rebuild as needed
- **Organization filtering** - Perfect for club pages and department sites

The calendar views and event lists automatically connect to your existing UNBC events and organizations data through the WordPress REST API.