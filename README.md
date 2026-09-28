# UNBC Campus Manager

Current stable release: [**Campus Manager 2.3.1**](https://github.com/Over-the-Edge-Newspaper-Society/campusmanager/releases/tag/v2.3.1), published September 28, 2026. [Download the installable ZIP](https://github.com/Over-the-Edge-Newspaper-Society/campusmanager/releases/download/v2.3.1/campus-manager.zip) or use the stable WordPress updater. See [review fixes and verification](FIXES-2026-09-28.md) for all 21 resolved findings and test evidence.

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
- WordPress 5.8 or higher
- PHP 7.4 or higher

### Installation Steps

1. Download [`campus-manager.zip`](https://github.com/Over-the-Edge-Newspaper-Society/campusmanager/releases/download/v2.3.1/campus-manager.zip) from the stable release. Use the release asset, which contains the built frontend files.
2. In WordPress, go to **Plugins > Add New > Upload Plugin**, select the ZIP, and install or replace the existing Campus Manager plugin.
3. Activate **Campus Manager**. Activation creates the Organization Manager role; version upgrades apply the plugin's schema changes.

Existing installations using the default updater receive version 2.3.1 from `plugin-manifest.json`. A site configured with a custom manifest URL must select the stable manifest to receive stable updates. Publishing a release does not automatically install it on every site; check the installed version in WordPress after updating.

Developers working from a Git checkout must install and build the frontend dependencies using the commands under [build and verification](#build-and-verification).

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
- `per_page`: Number of projected events/occurrences per page (default: 10; maximum: 100)
- `page`: Page number (default: 1)
- `start_date`: Filter events from this date (YYYY-MM-DD)
- `end_date`: Filter events until this date (YYYY-MM-DD)
- `category`: Filter by event category slug
- `organization`: Filter by organization ID
- `featured`: Show only featured events (true/false)
- `search`: Search events by title/content

#### Protected Event Import Endpoint
```
POST /wp-json/unbc-events/v1/import-event
```

This endpoint is intentionally not public. Requests must use one of these paths:

1. A WordPress user authenticated through an application password over HTTPS, or an authenticated WordPress session, with the event capabilities required for the requested create/update/status change.
2. An `X-API-Key` header that matches the stored `unbc_eventscrape_api_key` option.

Example API key setup with WP-CLI:
```bash
wp option update unbc_eventscrape_api_key 'replace-with-a-long-random-secret'
```

Example request:
```bash
curl -X POST https://example.com/wp-json/unbc-events/v1/import-event \
  -H "Content-Type: application/json" \
  -H "X-API-Key: replace-with-a-long-random-secret" \
  -d @event-payload.json
```

Remote `featured_media_url` sideloading is disabled by default for API-key-authenticated imports. If you explicitly trust a media source, allowlist it in code:
```php
add_filter('unbc_events_allowed_remote_media_hosts', function ($hosts) {
    $hosts[] = 'media.eventscrape.example';
    return $hosts;
});
```

#### Organizations Endpoint
```
GET /wp-json/wp/v2/organization
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
- **event**: Campus events with scheduling and location data
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
- WordPress 5.8+
- PHP 7.4+
- MySQL 5.6+

## License

This plugin is licensed under the GPL v2 or later.

## Changelog

### Version 2.3.1 — stable, September 28, 2026

- Enforce event ownership, organization-manager restrictions, and publishing permissions across imports and REST writes.
- Validate and transactionally replace recurring schedules; preserve recurrence and organization relationships in exports.
- Correct calendar caching, pagination, date navigation, timezone handling, and keyboard access.
- Report image-import warnings and preserve EventScrape compatibility.
- Add checked builds, disposable WordPress integration tests, package inspection, and separate stable/beta manifests.

### Version 2.3.0

- Assign event categories by their correct term IDs during imports.

### Version 2.1.0
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

## Event import image results

`POST /wp-json/unbc-events/v1/import-event` now reports featured-image outcomes independently of saving the event. `success: true` means the event was saved (or a duplicate was skipped); callers must also inspect `warnings` and `media` before describing an import as fully successful.

| `media.status` | Meaning |
| --- | --- |
| `not_requested` | No image URL was supplied. |
| `not_attempted` | An existing event was skipped. |
| `imported` | Image attached successfully; `attachment_id` is included. |
| `failed` | Download, sideload, validation, or attachment failed; `error_code` is included. |
| `skipped` | Request was not permitted to import remote media. |

For example, a Zoer local copy can save the event while blocking the outbound image download:

```json
{
  "success": true,
  "action": "updated",
  "post_id": 22384,
  "warnings": ["The event was saved, but its featured image was not imported because outbound requests are disabled in this local copy."],
  "media": {"status": "failed", "error_code": "local_copy"}
}
```

Warnings from the latest performed import are retained privately on the event and shown to authorized editors on its edit screen. A successful subsequent import clears them; a skipped duplicate leaves the stored warning unchanged. Provider errors are replaced with safe messages so signed URLs and server paths are not exposed. Failed downloads and invalid images preserve any existing featured image. Authentication and Zoer's outbound protection remain enforced.

The endpoint honors `event.status`. EventScrape's manual upload defaults to `draft`. Publishing requires both sending `publish` and an application-password account with `publish_events`; valid authentication alone does not grant publishing permission. The initial local integration account was draft-only. It was subsequently granted local event publishing permissions for an authorized 14-event publication; see the [publication follow-up](https://github.com/Over-the-Edge-Newspaper-Society/EventScrape/blob/main/docs/wordpress-integration.md#local-publication-follow-up--september-28-2026).

Run the standalone regression suite with PHP 7.4 or later:

```sh
php tests/event-import-media.php
```

### Calendar contrast follow-up

The September 28 [calendar contrast fix](docs/calendar-contrast-2026-09-28.md) is on `main` and applied to the local development site. It corrects gray text utilities that used pale background colors. It is a later patch and is not included in the published v2.3.1 ZIP.

### EventScrape compatibility and authentication

The tested beta.2 code was promoted to [stable 2.3.1](https://github.com/Over-the-Edge-Newspaper-Society/campusmanager/releases/tag/v2.3.1). The local-clone replay updated **14 events, with 0 failures, 0 skips, and 5 image warnings**, preserving all 18 occurrences and the existing post IDs, content, categories, images, and draft status. EventScrape now displays returned warnings and per-event failures in its upload summary; see its [verification report](https://github.com/Over-the-Edge-Newspaper-Society/EventScrape/blob/main/docs/wordpress-upload-warnings-2026-09-28.md).

**Incorrect credentials returning HTTP 401 is expected and needs no fix.** The same existing application password succeeded in the positive test. HTTP 403 for an authenticated account indicates a permission issue, such as missing publishing rights or access to another organization's event. Image warnings with `media.error_code: local_copy` indicate the local clone blocked outbound image requests; the event can still be saved. These are separate outcomes.

The live compatibility replay used the beta.2 candidate on the local clone. The stable artifact then passed clean CI and archive verification; release publication is not a production-site deployment.

### 2.3.1 compatibility changes

All 21 numbered findings in [the original review](REVIEW-2026-09-28.md) are addressed. See [fixes and verification](FIXES-2026-09-28.md) for evidence and validation limits.

- Application-password imports require `edit_events` for creation, permission to edit the actual target for updates, and `publish_events` for published/private/future events. Organization managers are restricted to their assigned organization. The administrator-configured legacy `X-API-Key` remains an explicit trusted integration policy. Remote-media restrictions still apply independently.
- Omitted `occurrences` preserves the schedule; `occurrences: []` removes it. All replacements are validated before a checked transaction changes the parent, metadata, categories, series or occurrences. Transactional WordPress/custom tables are required. Exact UTC instants accompany site-local range columns for new occurrence writes; older rows retain their established site-time interpretation.
- Export schema 2 includes recurrence and source identities. Organization references resolve to destination IDs; unresolved references are reported as failed records rather than copied as stale IDs. Keep content/meta/image options enabled for a complete backup. Legacy exports cannot recover recurrence they never contained.
- Calendar API pages are capped at 100 occurrences/events. Two-sided date ranges are capped at 366 days. Upcoming lists accept an independent start bound; calendar views retrieve every page of their visible range.
- Beta tags publish `plugin-manifest-beta.json` and are marked prereleases. Stable tags alone update `plugin-manifest.json`. Stable installations keep their default manifest; beta opt-in uses `UNBC_EVENTS_UPDATE_MANIFEST_URL` with the beta manifest URL. No release/tag is created by local packaging.

### Build and verification

Build with Node 22.14.0 and npm 10.9.4. Install dependencies in `assets/react`
and each of `blocks/{calendar-view,events-list,today-events-widget,organization-field}`
with `npm ci`, then run:

```sh
npm --prefix assets/react run lint
npm --prefix assets/react run typecheck
npm --prefix assets/react test
npm --prefix assets/react run build:all
php tests/event-import-media.php
```

`wp eval-file tests/wordpress-integration.php` runs the WordPress regressions on an
explicitly selected disposable/local test site. It creates and cleans up fixture
posts/users and temporarily substitutes the test site's API-key option; do not run
it on production. `bash scripts/test-wordpress.sh` creates disposable Docker
WordPress/MariaDB containers for CI. GitHub packaging runs these gates, rebuilds
all five frontend packages, lints PHP and inspects ZIP contents.

The [v2.3.1 release workflow](https://github.com/Over-the-Edge-Newspaper-Society/campusmanager/actions/runs/36456035565) passed all gates and published both the ZIP and `plugin-manifest.json`. CI used WordPress 6.9 and PHP 8.4; the declared minimum versions above were not separately exercised in this release run.

The [local import concurrency follow-up](docs/import-concurrency-2026-09-28.md) documents safeguards and live catalogue recovery added after stable 2.3.1. They are deployed on the local DDEV test site and included in the local recovery package; the existing stable release ZIP is unchanged.
