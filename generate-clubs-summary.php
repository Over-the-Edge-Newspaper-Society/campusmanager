<?php
/**
 * Generate a summary table of all clubs/organizations
 * Run this file once by visiting: /wp-content/plugins/campusmanager/generate-clubs-summary.php
 */

// Load WordPress
$wp_load_path = dirname(dirname(dirname(__DIR__))) . '/wp-load.php';
if (!file_exists($wp_load_path)) {
    die("Could not find wp-load.php at: $wp_load_path");
}
require_once($wp_load_path);

// Check if user is admin
if (!current_user_can('manage_options')) {
    die('You must be an administrator to view this report.');
}

// Get all organizations
$organizations = get_posts(array(
    'post_type' => 'organization',
    'posts_per_page' => -1,
    'post_status' => 'publish',
    'orderby' => 'title',
    'order' => 'ASC'
));

?>
<!DOCTYPE html>
<html>
<head>
    <title>Summary Table of Clubs</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            max-width: 1400px;
            margin: 0 auto;
        }
        h1 {
            color: #333;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
            vertical-align: top;
        }
        th {
            background-color: #0073aa;
            color: white;
            font-weight: bold;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        tr:hover {
            background-color: #f5f5f5;
        }
        .status-established { color: #46b450; }
        .status-probationary { color: #ffb900; }
        .status-new { color: #00a0d2; }
        .type-badge {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 3px;
            font-size: 11px;
            font-weight: bold;
            margin-left: 5px;
        }
        .type-slo {
            background-color: #e7f5fe;
            color: #0073aa;
        }
        .type-non-slo {
            background-color: #fef7e7;
            color: #826200;
        }
        .notes-line {
            margin: 3px 0;
            font-size: 13px;
        }
        .export-buttons {
            margin: 20px 0;
        }
        .export-buttons button {
            padding: 10px 20px;
            margin-right: 10px;
            cursor: pointer;
            background-color: #0073aa;
            color: white;
            border: none;
            border-radius: 3px;
        }
        .export-buttons button:hover {
            background-color: #005a87;
        }
        .summary {
            background-color: #f0f0f1;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .summary strong {
            color: #0073aa;
        }
    </style>
</head>
<body>
    <h1>Summary Table of Clubs</h1>

    <?php
    // Count statistics
    $total_count = count($organizations);
    $slo_count = 0;
    $non_slo_count = 0;
    $status_counts = array();

    foreach ($organizations as $org) {
        $type_terms = wp_get_post_terms($org->ID, 'org_type');
        if (!empty($type_terms) && $type_terms[0]->slug === 'slo') {
            $slo_count++;
        } elseif (!empty($type_terms) && $type_terms[0]->slug === 'non-slo') {
            $non_slo_count++;
        }

        $status_terms = wp_get_post_terms($org->ID, 'org_status');
        if (!empty($status_terms)) {
            $status_slug = $status_terms[0]->slug;
            if (!isset($status_counts[$status_slug])) {
                $status_counts[$status_slug] = 0;
            }
            $status_counts[$status_slug]++;
        }
    }
    ?>

    <div class="summary">
        <strong>Total Organizations:</strong> <?php echo $total_count; ?> |
        <strong>SLOs:</strong> <?php echo $slo_count; ?> |
        <strong>Non-SLOs:</strong> <?php echo $non_slo_count; ?>
        <?php if (!empty($status_counts)): ?>
            | <strong>By Status:</strong>
            <?php foreach ($status_counts as $status => $count): ?>
                <?php echo ucfirst($status) . ': ' . $count; ?>
            <?php endforeach; ?>
        <?php endif; ?>
    </div>

    <div class="export-buttons">
        <button onclick="copyToClipboard()">📋 Copy to Clipboard</button>
        <button onclick="exportToCSV()">📥 Export to CSV</button>
        <button onclick="window.print()">🖨️ Print</button>
    </div>

    <table id="clubsTable">
        <thead>
            <tr>
                <th style="width: 30%;">Club (SLO)</th>
                <th style="width: 15%;">Status</th>
                <th style="width: 55%;">Notes/Dates</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($organizations as $org):
                // Get organization type
                $type_terms = wp_get_post_terms($org->ID, 'org_type');
                $type_name = !empty($type_terms) ? $type_terms[0]->name : 'Unknown';
                $type_slug = !empty($type_terms) ? $type_terms[0]->slug : 'unknown';

                // Get organization status
                $status_terms = wp_get_post_terms($org->ID, 'org_status');
                $status_name = !empty($status_terms) ? $status_terms[0]->name : '-';
                $status_slug = !empty($status_terms) ? $status_terms[0]->slug : '';

                // Get organization size
                $size_terms = wp_get_post_terms($org->ID, 'org_size');
                $size_name = !empty($size_terms) ? $size_terms[0]->name : '';

                // Get dates
                $founded_date = get_post_meta($org->ID, 'org_founded_date', true);
                $approval_date = get_post_meta($org->ID, 'org_approval_date', true);
                $registration_date = get_post_meta($org->ID, 'org_registration_date', true);
                $dissolution_date = get_post_meta($org->ID, 'org_dissolution_date', true);

                // Build notes
                $notes = array();

                if ($approval_date) {
                    $notes[] = 'Approval date: ' . date('d M Y', strtotime($approval_date));
                }
                if ($founded_date) {
                    $notes[] = 'Founded: ' . date('d M Y', strtotime($founded_date));
                }
                if ($registration_date) {
                    $notes[] = 'Registration date: ' . date('d M Y', strtotime($registration_date));
                }
                if ($dissolution_date) {
                    $notes[] = 'Dissolved: ' . date('d M Y', strtotime($dissolution_date));
                }
                if ($size_name) {
                    $notes[] = 'Size: ' . $size_name;
                }
            ?>
            <tr>
                <td>
                    <strong><?php echo esc_html($org->post_title); ?></strong>
                    <span class="type-badge type-<?php echo esc_attr($type_slug); ?>">
                        <?php echo esc_html($type_name); ?>
                    </span>
                </td>
                <td class="status-<?php echo esc_attr($status_slug); ?>">
                    <?php echo esc_html($status_name); ?>
                </td>
                <td>
                    <?php if (!empty($notes)): ?>
                        <?php foreach ($notes as $note): ?>
                            <div class="notes-line"><?php echo esc_html($note); ?></div>
                        <?php endforeach; ?>
                    <?php else: ?>
                        <div class="notes-line">-</div>
                    <?php endif; ?>
                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>

    <script>
        function copyToClipboard() {
            const table = document.getElementById('clubsTable');
            let text = 'Club (SLO)\tStatus\tNotes/Dates\n';

            const rows = table.querySelectorAll('tbody tr');
            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                const club = cells[0].textContent.trim();
                const status = cells[1].textContent.trim();
                const notes = cells[2].textContent.trim().replace(/\n/g, '; ');
                text += `${club}\t${status}\t${notes}\n`;
            });

            navigator.clipboard.writeText(text).then(() => {
                alert('Table copied to clipboard! You can paste it into Excel or Google Sheets.');
            });
        }

        function exportToCSV() {
            const table = document.getElementById('clubsTable');
            let csv = '"Club (SLO)","Status","Notes/Dates"\n';

            const rows = table.querySelectorAll('tbody tr');
            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                const club = cells[0].textContent.trim().replace(/"/g, '""');
                const status = cells[1].textContent.trim().replace(/"/g, '""');
                const notes = cells[2].textContent.trim().replace(/\n/g, '; ').replace(/"/g, '""');
                csv += `"${club}","${status}","${notes}"\n`;
            });

            const blob = new Blob([csv], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'clubs-summary-' + new Date().toISOString().split('T')[0] + '.csv';
            a.click();
        }
    </script>

    <p style="margin-top: 40px; color: #666;">
        <a href="/wp-admin/edit.php?post_type=organization">← Back to Organizations</a>
    </p>
</body>
</html>
