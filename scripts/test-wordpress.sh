#!/usr/bin/env bash
# Disposable WordPress + MariaDB, isolated from any configured/live database.
set -euo pipefail
network="campus-manager-test-${GITHUB_RUN_ID:-$$}"
cleanup() { docker rm -f "$network-wp" "$network-db" >/dev/null 2>&1 || true; docker network rm "$network" >/dev/null 2>&1 || true; }
trap cleanup EXIT
docker network create "$network" >/dev/null
docker run -d --name "$network-db" --network "$network" -e MARIADB_ROOT_PASSWORD=test-only -e MARIADB_DATABASE=wordpress mariadb:11.4 >/dev/null
for attempt in {1..60}; do
  if docker exec "$network-db" mariadb-admin ping -ptest-only --silent; then break; fi
  sleep 1
done
docker run -d --name "$network-wp" --network "$network" -e WORDPRESS_DB_HOST="$network-db" -e WORDPRESS_DB_USER=root -e WORDPRESS_DB_PASSWORD=test-only -e WORDPRESS_DB_NAME=wordpress wordpress:6.9-php8.4-apache >/dev/null
for attempt in {1..60}; do
  if docker exec "$network-wp" test -f /var/www/html/wp-config.php; then break; fi
  sleep 1
done
docker exec "$network-wp" sh -c 'curl -fsSL https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar -o /tmp/wp'
docker exec "$network-wp" php /tmp/wp core install --allow-root --url=http://localhost --title=Test --admin_user=testadmin --admin_password=test-only --admin_email=test@example.test --skip-email
package_dir="$(mktemp -d)"
rsync -a --exclude-from=.distignore ./ "$package_dir/"
mkdir -p "$package_dir/tests"
cp tests/wordpress-integration.php "$package_dir/tests/"
docker cp "$package_dir/." "$network-wp:/var/www/html/wp-content/plugins/campus-manager"
rm -rf "$package_dir"
docker exec "$network-wp" php /tmp/wp plugin activate campus-manager --allow-root
docker exec "$network-wp" php /tmp/wp eval-file wp-content/plugins/campus-manager/tests/wordpress-integration.php --allow-root
