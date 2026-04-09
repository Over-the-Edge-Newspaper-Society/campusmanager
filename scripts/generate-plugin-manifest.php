<?php

declare(strict_types=1);

$options = getopt(
    '',
    array(
        'plugin-file:',
        'output:',
        'slug:',
        'template::',
        'download-url::',
        'homepage::',
        'last-updated::',
        'tested::',
        'expected-version::',
    )
);

$required = array('plugin-file', 'output', 'slug');
foreach ($required as $argument) {
    if (empty($options[$argument])) {
        fwrite(STDERR, "Missing required argument: --{$argument}\n");
        exit(1);
    }
}

$pluginFile = $options['plugin-file'];
$outputFile = $options['output'];
$slug = $options['slug'];
$templateFile = $options['template'] ?? $outputFile;
$downloadUrl = $options['download-url'] ?? null;
$homepage = $options['homepage'] ?? null;
$lastUpdated = $options['last-updated'] ?? gmdate('Y-m-d H:i:s');
$tested = $options['tested'] ?? null;
$expectedVersion = $options['expected-version'] ?? null;

$headers = parse_plugin_headers($pluginFile);
if ($expectedVersion !== null && $headers['Version'] !== $expectedVersion) {
    fwrite(STDERR, "Plugin version {$headers['Version']} does not match expected version {$expectedVersion}.\n");
    exit(1);
}

$template = load_existing_manifest($templateFile);

$manifest = $template;
$manifest['name'] = $headers['Plugin Name'];
$manifest['slug'] = $slug;
$manifest['author'] = $headers['Author'];
$manifest['author_profile'] = $headers['Author URI'];
$manifest['version'] = $headers['Version'];
$manifest['download_url'] = $downloadUrl ?: ($template['download_url'] ?? '');
$manifest['requires'] = $headers['Requires at least'];
$manifest['tested'] = $tested ?: ($template['tested'] ?? '');
$manifest['requires_php'] = $headers['Requires PHP'];
$manifest['last_updated'] = $lastUpdated;
$manifest['homepage'] = $homepage ?: $headers['Plugin URI'];

if (!isset($manifest['sections']) || !is_array($manifest['sections'])) {
    $manifest['sections'] = array();
}

if (empty($manifest['sections']['description'])) {
    $manifest['sections']['description'] = $headers['Description'];
}

if (empty($manifest['sections']['installation'])) {
    $manifest['sections']['installation'] = 'Upload the plugin zip through Plugins > Add New or copy the plugin directory into wp-content/plugins, then activate Campus Manager.';
}

if (empty($manifest['sections']['changelog'])) {
    $manifest['sections']['changelog'] = sprintf(
        '<h4>%s</h4><ul><li>Release %s.</li></ul>',
        htmlspecialchars($headers['Version'], ENT_QUOTES, 'UTF-8'),
        htmlspecialchars($headers['Version'], ENT_QUOTES, 'UTF-8')
    );
}

write_manifest($outputFile, $manifest);

function parse_plugin_headers(string $pluginFile): array {
    if (!is_file($pluginFile)) {
        fwrite(STDERR, "Plugin file not found: {$pluginFile}\n");
        exit(1);
    }

    $contents = file_get_contents($pluginFile);
    if ($contents === false) {
        fwrite(STDERR, "Unable to read plugin file: {$pluginFile}\n");
        exit(1);
    }

    $headerNames = array(
        'Plugin Name',
        'Plugin URI',
        'Description',
        'Version',
        'Requires at least',
        'Requires PHP',
        'Author',
        'Author URI',
    );

    $headers = array_fill_keys($headerNames, '');

    foreach ($headerNames as $headerName) {
        $pattern = '/^[ \t\/*#@]*' . preg_quote($headerName, '/') . ':\s*(.+)$/mi';
        if (preg_match($pattern, $contents, $matches)) {
            $headers[$headerName] = trim($matches[1]);
        }
    }

    foreach (array('Plugin Name', 'Version') as $requiredHeader) {
        if ($headers[$requiredHeader] === '') {
            fwrite(STDERR, "Missing required plugin header: {$requiredHeader}\n");
            exit(1);
        }
    }

    return $headers;
}

function load_existing_manifest(string $manifestFile): array {
    if ($manifestFile === '' || !is_file($manifestFile)) {
        return array();
    }

    $raw = file_get_contents($manifestFile);
    if ($raw === false || trim($raw) === '') {
        return array();
    }

    $decoded = json_decode($raw, true);
    if (!is_array($decoded)) {
        fwrite(STDERR, "Manifest template is not valid JSON: {$manifestFile}\n");
        exit(1);
    }

    return $decoded;
}

function write_manifest(string $outputFile, array $manifest): void {
    $directory = dirname($outputFile);
    if (!is_dir($directory) && !mkdir($directory, 0777, true) && !is_dir($directory)) {
        fwrite(STDERR, "Unable to create directory: {$directory}\n");
        exit(1);
    }

    $json = json_encode($manifest, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    if ($json === false) {
        fwrite(STDERR, "Unable to encode plugin manifest JSON.\n");
        exit(1);
    }

    if (file_put_contents($outputFile, $json . PHP_EOL) === false) {
        fwrite(STDERR, "Unable to write manifest: {$outputFile}\n");
        exit(1);
    }
}
