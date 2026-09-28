"""Validate the installable plugin, without dependency trees or test fixtures."""
import sys, zipfile
with zipfile.ZipFile(sys.argv[1]) as archive:
    names = archive.namelist()
    assert all(name.startswith('campus-manager/') for name in names)
    assert not any('/node_modules/' in name or '/tests/' in name or '/.git/' in name for name in names)
    for path in ['unbc-events.php', 'includes/class-write-policy.php', 'includes/class-event-store.php', 'includes/class-event-query.php',
                 'assets/react/dist/unbc-calendar.umd.js', 'assets/react/dist/unbc-today-events-widget.umd.js',
                 'blocks/calendar-view/build/index.js', 'blocks/events-list/build/index.js',
                 'blocks/today-events-widget/build/index.js', 'blocks/organization-field/build/index.js']:
        assert 'campus-manager/' + path in names, path
print('Plugin archive contents passed')
