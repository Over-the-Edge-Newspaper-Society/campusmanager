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
- **Organization Manager Role**: Custom user role for delegated organization management

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
   - Plugin automatically creates the Organization Manager role

### Quick Start: Organization Manager Setup

**For Administrators:**
1. Create some organizations first: **Organizations > Add New Organization**
2. Set up organization managers: **Organizations > Managers**
3. Either create new users or assign existing users to organizations
4. Users receive email with login credentials (for new accounts)

**For Organization Managers:**
1. Log in with provided credentials
2. Automatically redirected to organization edit page
3. Update organization information (contact details, description, social media)
4. Create events: **Events > Add New Event** (automatically linked to your organization)

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

### Organization Manager Role System

The plugin includes a powerful **Organization Manager** role system that allows you to delegate organization management to club presidents or designated members while maintaining administrative control.

#### 🎯 What Organization Managers Can Do

**✅ Allowed Actions:**
- Edit their assigned organization's profile (with restrictions)
- Create and manage events for their organization
- Update contact information (president, primary contact, office location)
- Manage social media links and website information
- Edit organization description and membership requirements
- Upload and change organization logo/featured image
- Update organization size and meeting schedule
- Change organization status (Established/New/Inactive)

**❌ Restricted Actions:**
- Cannot create new organizations
- Cannot edit other organizations
- Cannot change organization name/title
- Cannot modify organization slug/permalink
- Cannot change visibility status
- Cannot edit administrative fields (UNBC Department status, founded date, approval date, registration date)
- Cannot access WordPress posts, pages, or comments
- Cannot access themes, plugins, or site settings
- Cannot manage users or access admin tools

#### 🔧 Setting Up Organization Managers

**Method 1: Create New User**
1. Go to **Organizations > Managers**
2. Use the "Create New Organization Manager" form:
   - Enter username, email, first name, last name
   - Select the organization to assign
   - User account is automatically created with random password
   - Login credentials are emailed to the user

**Method 2: Convert Existing User**
1. Go to **Organizations > Managers**
2. Use the "Assign Existing User as Organization Manager" form:
   - Select an existing WordPress user
   - Choose the organization to assign
   - User role is automatically converted

#### 🏛️ Organization Manager Experience

When an organization manager logs in:

**Streamlined Interface:**
- **No Dashboard**: Automatically redirected to their organization edit page
- **Clean Menu**: Only sees "My Organization" and "My Organization Events"
- **Focused Workflow**: Direct access to what they need to manage

**Organization Editing:**
- Can edit most organization fields with clear restrictions
- Restricted fields are shown as read-only with explanatory text
- JavaScript prevents editing of title and permalink fields
- Server-side validation ensures security

**Event Management:**
- Can create new events that automatically link to their organization
- Can edit/delete only events belonging to their organization
- Cannot see or modify events from other organizations
- Full access to event creation and management tools

#### 🔒 Security Features

**Access Control:**
- Custom capability system with granular permissions
- Server-side validation prevents unauthorized changes
- Direct URL access blocked for restricted pages
- Role-based menu restrictions

**Field Restrictions:**
- Administrative fields are hidden or shown as read-only
- Client-side JavaScript prevents form manipulation
- Backend validation ensures data integrity
- Clear visual indicators for restricted content

**Session Management:**
- Automatic redirects from unauthorized pages
- Clean error messages for blocked actions
- Maintains user experience while enforcing security

#### 🛠️ Administrative Management

**User Management Interface:**
- View all organization managers in one place
- See which organization each manager is assigned to
- Easy role removal and reassignment
- Direct links to edit user profiles

**Assignment Features:**
- One manager per organization (can be changed)
- Automatic role creation and capability assignment
- Email notifications for new accounts
- Role verification and status reporting

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
├── unbc-events.php                           # Main plugin file
├── includes/
│   ├── class-post-types.php                 # Post type registration & admin restrictions
│   ├── class-meta-boxes.php                 # Custom meta fields & field restrictions
│   ├── class-rest-api.php                   # REST API endpoints
│   ├── class-user-roles.php                 # Organization Manager role system
│   └── class-organization-manager-admin.php # Admin interface for managing roles
├── js/
│   └── organization-restrictions.js         # Client-side restrictions for org managers
└── admin/                                    # Admin interface files
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

### Version 2.1.0 (Latest)
- **NEW**: Organization Manager role system
- **NEW**: Delegated organization management with field restrictions
- **NEW**: Organization manager admin interface (Organizations > Managers)
- **NEW**: Automatic dashboard redirect for organization managers
- **NEW**: Client-side and server-side access controls
- **NEW**: Custom capability system for granular permissions
- **ENHANCEMENT**: Improved admin menu organization
- **ENHANCEMENT**: Better user experience for organization managers
- **SECURITY**: Comprehensive access restriction system

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