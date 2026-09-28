<?php
/** Run with wp eval-file; creates and removes only its own fixtures. */
if (!defined('ABSPATH')) throw new RuntimeException('Run inside WordPress.');
function cm_check($condition, $message) {
    if (!$condition) throw new RuntimeException($message);
    echo "PASS $message\n";
}
function cm_request($route, $body = array(), $method = 'POST', $headers = array()) {
    $request = new WP_REST_Request($method, $route);
    foreach ($body as $key=>$value) $request->set_param($key, $value);
    foreach ($headers as $key=>$value) $request->set_header($key, $value);
    return rest_do_request($request);
}
function cm_import($event, $headers = array()) { return cm_request('/unbc-events/v1/import-event', array('event'=>$event, 'update_if_exists'=>true), 'POST', $headers); }
function cm_private($object, $method, ...$args) { $ref = new ReflectionMethod($object, $method); $ref->setAccessible(true); return $ref->invokeArgs($object, $args); }
$admin = get_users(array('role'=>'administrator','number'=>1))[0]->ID;
$original_user = get_current_user_id(); $posts = array(); $users = array(); $prefix = 'cm-review-' . wp_generate_uuid4();
$original_key = get_option('unbc_eventscrape_api_key', null);
$original_zone = get_option('timezone_string');
global $wpdb;
try {
    wp_set_current_user($admin);
    UNBC_Events_User_Roles::sync_roles();
    UNBC_Event_Series::create_tables();
    $newpost = function($type='event', $status='draft', $org=0, $author=0) use (&$posts,$prefix,$admin) {
        $id = wp_insert_post(array('post_type'=>$type,'post_status'=>$status,'post_title'=>$prefix, 'post_author'=>$author ?: $admin),true);
        if (is_wp_error($id) || !$id) throw new RuntimeException('Fixture creation failed');
        $posts[]=$id; if ($org) update_post_meta($id,'organization_id',$org); return $id;
    };
    $orga=$newpost('organization','publish'); $orgb=$newpost('organization','publish');
    foreach (array('contributor','organization_manager','organization_manager','editor') as $i=>$role) {
        $id=wp_insert_user(array('user_login'=>$prefix.'-'.$i,'user_pass'=>wp_generate_password(32),'role'=>$role));
        if(is_wp_error($id)) throw new RuntimeException($id->get_error_message()); $users[]=$id;
    }
    list($contributor,$managera,$managerb,$editor)=$users;
    update_user_meta($managera,'assigned_organization',$orga); update_user_meta($managerb,'assigned_organization',$orgb);
    $editor_user=new WP_User($editor); foreach(array('edit_events','edit_others_events','edit_published_events','publish_events') as $cap) $editor_user->add_cap($cap);
    $foreign=$newpost('event','draft',$orgb,$managerb); update_post_meta($foreign,'external_id',$prefix.'-foreign');
    $unassigned=$newpost('event','draft',0,$managerb);
    $event=array('title'=>$prefix.' import','external_id'=>$prefix.'-import','status'=>'draft','meta'=>array('date'=>'2026-10-01','start_time'=>'23:00','end_time'=>'01:00','organization_id'=>$orga),
        'series_data'=>array('occurrence_type'=>'recurring','recurrence_type'=>'custom'),
        'occurrences'=>array(array('start_datetime'=>'2026-10-01 23:00:00','end_datetime'=>'2026-10-02 01:00:00'),array('start_datetime'=>'2026-10-08 23:00:00','end_datetime'=>'2026-10-09 01:00:00')));
    wp_set_current_user($contributor);
    cm_check(cm_import($event)->get_status()===403,'contributor cannot import without event capability');
    wp_set_current_user($managera);
    cm_check(!current_user_can('edit_post',$foreign) && !current_user_can('edit_post',$unassigned),'manager cannot edit foreign or other-author unassigned events');
    $r=cm_import($event); cm_check($r->get_status()===200,'manager can import assigned-organization event');
    $id=$r->get_data()['post_id']; $posts[]=$id;
    $bad=$event; $bad['external_id']=$prefix.'-foreign';
    cm_check(cm_import($bad)->get_status()===403,'import duplicate requires target ownership');
    $bad=$event; $bad['meta']['organization_id']=$orgb;
    cm_check(cm_import($bad)->get_status()===403,'import cannot reassign manager event to another organization');
    cm_check(cm_request('/wp/v2/events/'.$id,array('event_meta'=>array('organization_id'=>$orgb)))->get_status()===403,'REST metadata cannot reassign organization');
    cm_check(cm_request('/wp/v2/events',array('title'=>'duplicate','external_id'=>$prefix.'-foreign','status'=>'draft'))->get_status()===409,'REST external ID cannot redirect create to foreign post');
    cm_check(cm_request('/wp/v2/events/'.$id,array('external_id'=>$prefix.'-foreign'))->get_status()===409,'REST external ID cannot redirect update');
    cm_check(cm_request('/wp/v2/organization',array('title'=>'Forbidden','status'=>'draft'))->get_status()===403,'manager cannot create organization through REST');
    cm_check(cm_request('/wp/v2/organization/'.$orga,array('title'=>'Forbidden'))->get_status()===403,'manager cannot rename organization through REST');
    cm_check(cm_request('/wp/v2/organization/'.$orga,array('status'=>'draft'))->get_status()===403,'manager cannot unpublish organization through REST');
    cm_check(cm_request('/wp/v2/organization/'.$orga,array('content'=>'Allowed fixture description'))->get_status()===200,'manager can update allowed organization content');
    wp_set_current_user($admin);
    $getrows=function()use($wpdb,$id){return $wpdb->get_results($wpdb->prepare("SELECT * FROM {$wpdb->prefix}event_occurrences WHERE post_id=%d ORDER BY sequence",$id),ARRAY_A);};
    $before=$getrows(); $before_title=get_the_title($id);
    $bad=$event; $bad['title']='Must not persist'; $bad['occurrences'][1]['start_datetime']='2026-02-30 10:00:00';
    cm_check(cm_import($bad)->get_status()===400 && $getrows()===$before && get_the_title($id)===$before_title,'malformed second occurrence preserves complete schedule and parent');
    $bad=$event; $bad['occurrences'][1]=$bad['occurrences'][0];
    cm_check(cm_import($bad)->get_status()===400 && $getrows()===$before,'duplicate occurrence rejects before deleting schedule');
    $fail=function($sql)use($wpdb){return str_starts_with($sql,"INSERT INTO `{$wpdb->prefix}event_occurrences`") ? 'INSERT INTO cm_nonexistent_failure_table VALUES (1)' : $sql;};
    $old_suppress=$wpdb->suppress_errors(true); add_filter('query',$fail);
    $bad=$event;$bad['title']='Rollback me';$r=cm_import($bad);
    remove_filter('query',$fail);$wpdb->suppress_errors($old_suppress);
    cm_check($r->get_status()===500 && $getrows()===$before && get_the_title($id)===$before_title,'database failure rolls back parent, series and occurrences');
    $omit=$event;unset($omit['occurrences']);
    cm_check(cm_import($omit)->get_status()===200 && $getrows()===$before,'omitted occurrences preserve existing schedule');
    $empty=$event;$empty['occurrences']=array();
    cm_check(cm_import($empty)->get_status()===200 && !$getrows(),'explicit empty occurrence array removes schedule');
    cm_check(cm_import($event)->get_status()===200,'schedule restores after intentional removal');
    // A failed parent write must not be counted as a successful import.
    $fail_parent=function($empty,$data)use($prefix){return str_starts_with($data['post_title']??'',$prefix.' fail-parent') ? true : $empty;};
    add_filter('wp_insert_post_empty_content',$fail_parent,99,2);
    $bad=$event;$bad['title']=$prefix.' fail-parent';$bad['external_id']=$prefix.'-failed-parent';unset($bad['meta']['date']);
    cm_check(cm_import($bad)->get_status()===500,'failed parent post write returns failure');remove_filter('wp_insert_post_empty_content',$fail_parent,99);
    (new WP_User($contributor))->add_cap('edit_events');wp_set_current_user(0);wp_set_current_user($contributor);
    $draft=$event;$draft['external_id']=$prefix.'-draft-publisher';unset($draft['meta']['date']);$draft['status']='publish';
    cm_check(cm_import($draft)->get_status()===403,'draft-only integration account cannot publish');
    $draft['status']='draft';$r=cm_import($draft);cm_check($r->get_status()===200,'draft-only integration can still import drafts');$posts[]=$r->get_data()['post_id'];
    wp_set_current_user($editor);$draft['status']='publish';$draft['external_id']=$prefix.'-editor';$r=cm_import($draft);cm_check($r->get_status()===200,'authorized editor can publish');$posts[]=$r->get_data()['post_id'];
    wp_set_current_user($admin);$testkey=wp_generate_password(40,false);update_option('unbc_eventscrape_api_key',$testkey);
    wp_set_current_user(0);$draft['external_id']=$prefix.'-api-key';
    cm_check(cm_import($draft,array('X-API-Key'=>'invalid'))->get_status()===401,'invalid API key is rejected');
    $r=cm_import($draft,array('X-API-Key'=>$testkey));cm_check($r->get_status()===200,'trusted API-key import retains explicit integration policy');$posts[]=$r->get_data()['post_id'];
    wp_set_current_user($admin);
    // Bounded projection, >500 occurrences, overnight status/overrides and cache invalidation.
    $benchmark_org=$newpost('organization','publish'); $fixture=$newpost('event','publish',$benchmark_org);$rows=array();
    for($i=0;$i<505;$i++){$date=(new DateTimeImmutable('2026-10-01 12:00:00',wp_timezone()))->modify("+$i minutes");$rows[]=array('start_datetime'=>$date->format(DATE_ATOM),'end_datetime'=>$date->modify('+1 hour')->format(DATE_ATOM));}
    cm_check(!is_wp_error(UNBC_Event_Store::replace($fixture,array(),$rows)),'stores large recurrence fixture');
    $args=array('organization'=>$benchmark_org,'start_date'=>'2026-10-01','end_date'=>'2026-10-01','per_page'=>100,'page'=>1);
    $seen=array();$started=microtime(true);$queries=$wpdb->num_queries;
    do{$r=cm_request('/unbc-events/v1/events',$args,'GET');$data=$r->get_data();cm_check($r->get_status()===200,'bounded occurrence page loads');foreach($data['events'] as $e)$seen[]=$e['id'];$args['page']++;}while($data['pagination']['hasMore']);
    cm_check(count($seen)===505 && count(array_unique($seen))===505,'pagination retrieves every occurrence beyond 500 without duplicates');
    echo 'BENCHMARK 505 rows: '.round((microtime(true)-$started)*1000).'ms, '.($wpdb->num_queries-$queries)." queries over 6 requests\n";
    $args['per_page']=999999;$args['page']=1;$data=cm_request('/unbc-events/v1/events',$args,'GET')->get_data();cm_check(count($data['events'])===100,'public page size is bounded');
    $args['start_date']='2026-01-01';$args['end_date']='2030-01-01';cm_check(cm_request('/unbc-events/v1/events',$args,'GET')->get_status()===400,'excessive date range rejected');
    $single=$newpost('event','publish',$orgb);
    UNBC_Event_Store::replace($single,array('is_all_day'=>1,'event_status'=>'canceled'),array(array('start_datetime'=>'2026-11-01T00:00:00-07:00','end_datetime'=>'2026-11-02T01:00:00-08:00','title_override'=>'Overnight override','location_override'=>'Room fixture')));
    $args=array('organization'=>$orgb,'start_date'=>'2026-11-01','end_date'=>'2026-11-02','per_page'=>10);
    $data=cm_request('/unbc-events/v1/events',$args,'GET')->get_data();$e=$data['events'][0];
    cm_check(str_starts_with($e['id'], $single.'_occ_') && $e['title']==='Overnight override' && strtotime($e['endDate'])>strtotime($e['startDate']) && $e['status']==='canceled' && $e['isAllDay'],'single occurrence retains overnight dates, overrides, cancellation and all-day state');
    $cached=cm_request('/unbc-events/v1/events',$args,'GET')->get_data();cm_check($cached['performance']['cache_hit'],'calendar response is cached');
    wp_update_post(array('ID'=>$orgb,'post_title'=>$prefix.' renamed'));
    $fresh=cm_request('/unbc-events/v1/events',$args,'GET')->get_data();cm_check(!$fresh['performance']['cache_hit'] && $fresh['eventMetadata'][$e['id']]['organization']===$prefix.' renamed','organization edit invalidates cached metadata');
    $using_external_cache = wp_using_ext_object_cache();
    wp_using_ext_object_cache(true);
    UNBC_Events_REST_API::bump_cache_generation();
    cm_request('/unbc-events/v1/events',$args,'GET');
    cm_check(cm_request('/unbc-events/v1/events',$args,'GET')->get_data()['performance']['cache_hit'],'object-cache transient path caches responses');
    wp_update_post(array('ID'=>$orgb,'post_title'=>$prefix.' object-cache renamed'));
    cm_check(!cm_request('/unbc-events/v1/events',$args,'GET')->get_data()['performance']['cache_hit'],'generation invalidation works through object-cache transient path');
    wp_using_ext_object_cache($using_external_cache);
    cm_check(strtotime($e['endDate'])-strtotime($e['startDate'])===26*3600,'DST overnight occurrence preserves elapsed duration');
    $list=cm_request('/unbc-events/v1/events',array('organization'=>$orgb,'view'=>'list','start_date'=>'2026-11-03','per_page'=>1),'GET')->get_data();
    cm_check($list['total']===0 && !$list['pagination']['hasMore'],'independent upcoming start bound excludes past occurrences');
    $list=cm_request('/unbc-events/v1/events',array('organization'=>$orgb,'view'=>'list','start_date'=>'2026-11-01','per_page'=>1),'GET')->get_data();
    cm_check($list['total']===1 && !$list['pagination']['hasMore'],'exactly full last page does not report another page');
    $ambiguous=UNBC_Event_Store::normalize_occurrences(array(array('start_datetime'=>'2026-11-01T01:30:00-07:00','end_datetime'=>'2026-11-01T01:15:00-08:00')));
    cm_check($ambiguous[0]['duration_seconds']===2700 && $ambiguous[0]['start_utc']==='2026-11-01 08:30:00' && $ambiguous[0]['end_utc']==='2026-11-01 09:15:00','repeated DST hour preserves exact instants');
    // Export into a fresh fixture graph with distinct destination IDs.
    $exporter=new UNBC_Organization_Import_Export();
    $opts=array('export_content'=>true,'export_images'=>false,'export_meta'=>true,'export_relations'=>true);
    $club=cm_private($exporter,'build_export_record',get_post($orgb),$opts);
    $record=cm_private($exporter,'build_export_record',get_post($single),$opts);
    $record2=$record;$record2['ID']=999998;$record2['source_key'].='-second';$record2['occurrences'][0]['start_utc']=null;$record2['occurrences'][0]['end_utc']=null;$record2['occurrences'][0]['start_datetime']='2026-12-01 00:00:00';$record2['occurrences'][0]['end_datetime']='2026-12-02 00:00:00';
    foreach(array(&$club,&$record,&$record2) as &$item) $item['source_key']='https://fresh-source.example/'.$item['source_key'];unset($item);
    $graph=array('version'=>'2.0','site_url'=>'https://fresh-source.example','clubs'=>array($club),'events'=>array($record,$record2));
    $result=cm_private($exporter,'import_data',$graph);
    foreach(array($club,$record,$record2) as $rec){$found=get_posts(array('post_type'=>'any','post_status'=>'any','numberposts'=>1,'fields'=>'ids','meta_key'=>'_campus_source_key','meta_value'=>$rec['source_key']));if($found)$posts[]=$found[0];}
    cm_check($result['clubs_imported']===1 && $result['events_imported']===2 && !$result['errors'],'export graph imports same-title events as distinct records');
    $dest=array_slice($posts,-3);cm_check(get_post_meta($dest[1],'organization_id',true)==$dest[0] && $dest[0]!=$orgb,'export relations map to destination IDs');
    $saved=$wpdb->get_row($wpdb->prepare("SELECT * FROM {$wpdb->prefix}event_occurrences WHERE post_id=%d",$dest[1]),ARRAY_A);
    cm_check($saved['start_datetime']===$record['occurrences'][0]['start_datetime'] && $saved['end_datetime']===$record['occurrences'][0]['end_datetime'] && $saved['title_override']===$record['occurrences'][0]['title_override'],'export round trip preserves recurrence and overrides');
    $repeat=cm_private($exporter,'import_data',$graph);cm_check($repeat['events_skipped']===2 && $repeat['clubs_skipped']===1,'repeat graph import deduplicates by stable identity');
    $config=cm_request('/unbc-events/v1/category-config',array(),'GET')->get_data();cm_check($config['version']===1 && isset($config['colors'],$config['categoryRelationships'],$config['categoriesWithOrganizations']),'category configuration uses explicit versioned contract');
    // Actual admin importer create/update/skip behavior, including its counters.
    $importer=new UNBC_Event_Importer();
    $admin_event=array('id'=>$prefix.'-admin','title'=>$prefix.' admin','startDatetime'=>'2026-12-20T22:00:00Z','endDatetime'=>'2026-12-21T01:00:00Z');
    $first=cm_private($importer,'import_single_event',$admin_event,array(),0,$orga,false);$posts[]=$first;
    $second=cm_private($importer,'import_single_event',$admin_event,array(),0,$orga,false);$posts[]=$second;
    $updated=cm_private($importer,'import_single_event',$admin_event,array(),0,$orga,$first);
    cm_check($first!==$second && $updated===$first,'admin create produces new identity while update retains original');
    $modes=array('skip'=>array(0,0,1), 'update'=>array(0,1,0), 'create'=>array(1,0,0));
    foreach($modes as $mode=>$counts){
        $result=cm_private($importer,'execute_import',array('events'=>array($admin_event)),array(),0,$orga,$mode);
        if($mode==='create')foreach(get_posts(array('post_type'=>'event','post_status'=>'any','numberposts'=>-1,'fields'=>'ids','meta_key'=>'external_id','meta_value'=>$admin_event['id'])) as $created)$posts[]=$created;
        cm_check(array($result['created'],$result['updated'],$result['skipped'])===$counts && !$result['errors'],'admin '.$mode.' mode reports actual operation counts');
    }
    $statuses=array();foreach(array('publish','draft','pending','trash') as $status)$statuses[$status]=$newpost('event',$status,$orga,$managera);
    require_once ABSPATH.'wp-admin/includes/screen.php';
    $old_screen=$GLOBALS['current_screen']??null; $old_page=$GLOBALS['pagenow']??null; $old_get=$_GET; $old_main=$GLOBALS['wp_the_query'];
    set_current_screen('edit-event');$GLOBALS['pagenow']='edit.php';$_GET['post_type']='event';wp_set_current_user($managera);
    foreach($statuses as $status=>$expected){$query=new WP_Query();$GLOBALS['wp_the_query']=$query;$query->query(array('post_type'=>'event','post_status'=>$status,'fields'=>'ids','posts_per_page'=>100));cm_check(in_array($expected,$query->posts),'manager admin '.$status.' list retains assigned event');}
    $GLOBALS['current_screen']=$old_screen;$GLOBALS['pagenow']=$old_page;$_GET=$old_get;$GLOBALS['wp_the_query']=$old_main;wp_set_current_user($admin);
    echo "ALL WORDPRESS REGRESSIONS PASSED\n";
} finally {
    wp_set_current_user($admin);
    foreach(array_unique($posts) as $id){$wpdb->delete($wpdb->prefix.'event_occurrences',array('post_id'=>$id));$wpdb->delete($wpdb->prefix.'event_series',array('post_id'=>$id));wp_delete_post($id,true);}
    require_once ABSPATH.'wp-admin/includes/user.php';foreach($users as $id)wp_delete_user($id);
    if($original_key===null)delete_option('unbc_eventscrape_api_key');else update_option('unbc_eventscrape_api_key',$original_key);
    update_option('timezone_string',$original_zone);wp_set_current_user($original_user);
    UNBC_Events_REST_API::bump_cache_generation();
    echo "Fixture cleanup complete\n";
}
