# Local EventScrape import recovery — September 28, 2026

The local calendar's bulk import exposed successful responses whose post IDs were absent from both public REST and the database. This occurred with overlapping import batches. The site's database user could not read the InnoDB deadlock diagnostic, so the precise server error was not confirmed.

The REST import service now obtains a site-scoped advisory lock before duplicate lookup and holds it through transactional writes. It releases the lock on success, skip, validation failure, or exception. Waiting imports time out after 15 seconds with a retryable failure message. Media fetching occurs after the transaction and lock release.

A transaction-scoped query filter detects SQL errors left unchecked by WordPress hooks before the next query clears them. Such failures now return HTTP 500 and roll back. If `wp_update_post()` throws before returning an ID, rollback still clears the known existing post's cache. Permission checks, invalid-credential rejection, and recurrence validation remain intact.

Validation on the authorized local DDEV site passed PHP syntax checking, all 11 standalone media tests, and all 57 WordPress integration checks. The new regression injects an ignored SQL failure from a save hook and verifies a failure response with unchanged parent and recurrence data. The next successful import verifies lock cleanup. Integration fixtures were cleaned up.

The maintained service was deployed to the local site with a saved baseline and byte-for-byte read-back. The published stable 2.3.1 ZIP predates this patch and the earlier calendar contrast fix; this document does not claim a new tagged release or production deployment.

See [EventScrape's catalogue audit and final publication results](https://github.com/Over-the-Edge-Newspaper-Society/EventScrape/blob/main/docs/upcoming-publication-2026-09-28.md). The completed recovery published 1,145 new events and added 80 dates to 42 existing events, preserving all 96 previous occurrence rows and the original posts. Public verification covered all 1,258 valid groups; one malformed source placeholder was held back. Two SQL errors were correctly surfaced during recovery and succeeded on retry. Orphan rows from the earlier absent post IDs were backed up and removed after baseline and missing-parent checks.

The local package `build/campus-manager-2.3.1-import-recovery.zip` includes this service and the earlier contrast patch and passed package inspection.
