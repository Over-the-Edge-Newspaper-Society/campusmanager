# Calendar text contrast fix — September 28, 2026

The local `/calendar/` Selected Day message used `text-gray-600`, which the plugin's Tailwind palette mapped to `--accent`. The active theme defines that token as a pale green surface color. Its contrast against the cream background was approximately **1.06:1**.

The Tailwind configuration now defines separate foreground mappings for text utilities `gray-600` through `gray-900`. These utilities use `--foreground`; background and border utilities keep their existing palette. This fixes the empty-day message and other text using the same incorrect surface mappings. Dark-mode `text-muted-foreground` overrides continue to work.

## Local WordPress update

Target: `ddev-over-the-edge-local-393fed40`, managed URL https://over-the-edge-local-393fed40.wp.k8s.overtheedgepaper.ca/calendar/.

Zoer's managed update created backup `2026-09-28T17-31-04-003Z-10a10395` and retained zero critical health checks before/after. It reported “Plugin already updated,” although the installed version was beta.2. A hash comparison against all 58 files in the published stable 2.3.1 ZIP found only `unbc-events.php` differed. Updating that file to the stable source brought the local installation to 2.3.1. PHP lint passed and WP-CLI confirmed the plugin remained active.

The rebuilt calendar and widget CSS files were then applied through the authorized DDEV file API. Every write compared the existing baseline first and verified exact bytes afterward. Backups of the three changed live files are under `/tmp/campusmanager-contrast-2026-09-28/`; [recorded hashes](verification/calendar-contrast-hashes-2026-09-28.json) identify the changes.

## Verification

- Calendar and widget production builds passed; generated CSS uses the foreground token while background mappings remain unchanged.
- Live browser inspection verified the empty-day message in light mode, and dark mode using browser color-scheme emulation. Computed-color contrast is approximately **9.06:1 light** and **8.05:1 dark** (both exceed 4.5:1).
- Mobile layout checked at 390 CSS pixels; document width was 388 pixels with no horizontal overflow. Temporary browser emulation was cleared afterward.
- [Light screenshot](verification/calendar-contrast-light-2026-09-28.png) and [dark screenshot](verification/calendar-contrast-dark-2026-09-28.png) record the live appearance.
- A local installable package, `build/campus-manager-2.3.1-calendar-contrast.zip`, was rebuilt from the patched source and passed archive inspection.

This is a source/build patch applied to the local development site. The published v2.3.1 release ZIP was not replaced and does not contain this later contrast fix. Reinstalling that published ZIP would remove the patch until a subsequent plugin release includes it. No production site, event content, credentials, or WordPress permissions were changed.
