# UNBC Campus Manager

A comprehensive WordPress plugin for managing campus events and organizations at the University of Northern British Columbia (UNBC).

## Features

### 🗓️ Event Management
- Create and manage campus events with detailed information
- Event date and time scheduling with start/end times
- Location tracking (building, room, general location)
- Event categories and taxonomies
- Featured events highlighting
- Registration management with links and requirements
- Virtual event support with meeting links
- Event capacity tracking
- Contact information for event organizers
- REST API endpoints for external integrations

### 🏛️ Organization Management
- Manage campus clubs and organizations
- Organization profiles with descriptions and logos
- Department vs. club categorization
- Organization categories and tags
- Custom permalink structure (`/clubs/name` for clubs, `/organization/name` for departments)
- Featured image support for organization logos
- Rich content editing with WordPress editor

### 🔧 Technical Features
- **Smart Post Type Detection**: Automatically detects existing post types to prevent conflicts
- **Gutenberg Integration**: Disabled for streamlined content entry
- **REST API Ready**: Full REST API support for frontend integrations
- **Custom Taxonomies**: Event categories, organization categories, and tags
- **Meta Box System**: Comprehensive meta fields for events and organizations
- **Rewrite Rules**: Custom URL structures for better SEO
- **Admin Interface**: Clean, intuitive admin panels with custom icons

## Installation

### Requirements
- WordPress 5.0 or higher
- PHP 7.4 or higher

### Installation Steps

1. **Download the Plugin**
   ```bash
   git clone https://github.com/your-username/campusmanager.git
   ```

2. **Upload to WordPress**
   - Copy the `unbc-events` folder to your WordPress `wp-content/plugins/` directory
   - Or upload the zip file through WordPress Admin > Plugins > Add New

3. **Activate the Plugin**
   - Go to WordPress Admin > Plugins
   - Find "UNBC Campus Manager" and click "Activate"
   - You should see a success message confirming post types are registered

## Usage

### Creating Events

1. Navigate to **Events > Add New Event** in your WordPress admin
2. Fill in the event details:
   - **Title**: Event name
   - **Description**: Full event description
   - **Date & Time**: Event date, start time, end time
   - **Location**: Building, room, or general location
   - **Organization**: Link to organizing club/department
   - **Categories**: Select relevant event categories
   - **Registration**: Add registration links if required
   - **Virtual Options**: Add meeting links for online events

### Managing Organizations

1. Go to **Organizations > Add New Organization**
2. Complete the organization profile:
   - **Name**: Organization or club name
   - **Description**: About the organization
   - **Logo**: Upload organization logo/image
   - **Categories**: Classify the organization type
   - **Tags**: Add relevant tags
   - **Department Flag**: Mark if it's a university department

### API Integration

The plugin provides REST API endpoints for external applications:

#### Events Endpoint
```
GET /wp-json/unbc-events/v1/events
```

**Parameters:**
- `per_page`: Number of events per page (default: 10)
- `page`: Page number (default: 1)
- `start_date`: Filter events from this date (YYYY-MM-DD)
- `end_date`: Filter events until this date (YYYY-MM-DD)
- `category`: Filter by event category slug
- `organization`: Filter by organization ID
- `featured`: Show only featured events (true/false)
- `search`: Search events by title/content

#### Organizations Endpoint
```
GET /wp-json/wp/v2/organizations
```

## Plugin Architecture

### File Structure
```
unbc-events/
├── unbc-events.php              # Main plugin file
├── includes/
│   ├── class-post-types.php     # Post type registration
│   ├── class-meta-boxes.php     # Custom meta fields
│   └── class-rest-api.php       # REST API endpoints
└── admin/                       # Admin interface files
```

### Post Types
- **unbc_event**: Campus events with scheduling and location data
- **organization**: Campus clubs, departments, and organizations

### Taxonomies
- **event_category**: Hierarchical event categorization
- **org_category**: Organization categories
- **org_tag**: Organization tags (non-hierarchical)

### Custom Fields

#### Event Meta Fields
- `event_date`: Event date (YYYY-MM-DD)
- `start_time`: Start time (HH:MM)
- `end_time`: End time (HH:MM)
- `location`: General location
- `building`: Building name
- `room`: Room number
- `organization_id`: Associated organization
- `cost`: Event cost (default: "Free")
- `registration_required`: Boolean flag
- `registration_link`: Registration URL
- `contact_email`: Contact information
- `is_virtual`: Virtual event flag
- `virtual_link`: Meeting/stream URL
- `capacity`: Maximum attendees
- `featured`: Featured event flag

#### Organization Meta Fields
- `org_is_department`: Department vs. club flag
- Custom logo support via featured images

## Compatibility

### Multi-Site Compatibility
The plugin is designed to work across different WordPress installations:

- **Existing Sites**: Detects and works alongside existing post types
- **New Sites**: Automatically registers all required post types and taxonomies
- **Transfer Ready**: Can be easily moved between sites without data loss

### Theme Integration
- Works with any WordPress theme
- Provides REST API for custom frontend implementations
- Custom permalink structures for SEO optimization

## Development

### Debugging
The plugin includes built-in debugging notices that display in the WordPress admin:
- ✅ Success: "Post types available (Events: Yes, Organizations: Yes)"
- ❌ Error: Shows which post types are missing

### Hooks and Filters
The plugin respects WordPress standards and provides hooks for customization:
- Custom permalink filters for organizations
- Gutenberg editor controls
- Meta box registration hooks

### Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

### Common Issues

**Post Types Not Showing**
- Check if the plugin is activated
- Verify file permissions
- Look for PHP errors in error logs

**Existing Post Types Conflict**
- The plugin automatically detects existing post types
- Safe to install on sites with existing event/organization systems

**API Not Working**
- Ensure permalinks are flushed (Settings > Permalinks > Save)
- Check that REST API is enabled

### System Requirements
- WordPress 5.0+
- PHP 7.4+
- MySQL 5.6+

## License

This plugin is licensed under the GPL v2 or later.

## Changelog

### Version 2.0.0
- Smart post type detection
- Improved compatibility with existing installations
- Enhanced REST API endpoints
- Better admin interface
- Custom permalink structures
- Meta box system improvements

---

**Developed for UNBC Campus Community** 🐾

For questions or support, please open an issue in this repository.