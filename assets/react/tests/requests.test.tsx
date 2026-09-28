import { test } from 'node:test';
import assert from 'node:assert/strict';
import React from 'react';
import { act, create } from 'react-test-renderer';

test('late base and pagination responses cannot replace new filters; calendar reads all pages', async () => {
  (globalThis as any).window = { unbcCalendarData: { apiUrl:'https://race.example.test/api' } };
  const pending: Array<{url:string, resolve:(r:Response)=>void}> = [];
  globalThis.fetch = (url) => new Promise(resolve => pending.push({url:String(url),resolve}));
  const { useEvents } = await import('../src/hooks/useEvents');
  let state: ReturnType<typeof useEvents>;
  function Harness({org,view='list'}:{org:string,view?:'list'|'month'}) { state=useEvents({organization:org,view}); return null; }
  const response = (id:string,next:number|null=null) => new Response(JSON.stringify({events:[{id,title:id,startDate:'2026-10-01T12:00:00Z',endDate:'2026-10-01T13:00:00Z'}],eventMetadata:{},total:next?2:1,pages:next?2:1,pagination:{hasMore:!!next,nextPage:next,currentPage:1},performance:{server_processed:true}}));
  let tree:any;
  await act(async()=>{tree=create(<Harness org="one"/>);}); const first=pending.shift()!;
  await act(async()=>{tree.update(<Harness org="two"/>);}); const second=pending.shift()!;
  await act(async()=>{second.resolve(response('two',2));});
  await act(async()=>{first.resolve(response('old'));});
  assert.deepEqual(state!.events.map(e=>e.id),['two']);
  await act(async()=>{state!.loadMore();}); const more=pending.shift()!;
  await act(async()=>{tree.update(<Harness org="three"/>);}); const third=pending.shift()!;
  await act(async()=>{third.resolve(response('three'));});
  await act(async()=>{more.resolve(response('stale-page'));});
  assert.deepEqual(state!.events.map(e=>e.id),['three']);
  await act(async()=>{tree.update(<Harness org="month" view="month"/>);});
  await act(async()=>{pending.shift()!.resolve(response('page1',2));});
  assert.ok(pending[0].url.includes('page=2'));
  await act(async()=>{pending.shift()!.resolve(response('page2'));});
  assert.deepEqual(state!.events.map(e=>e.id),['page1','page2']);
  await act(async()=>{tree.update(<Harness org="error"/>);});
  await act(async()=>{pending.shift()!.resolve(new Response('failed',{status:500}));});
  assert.equal(state!.total,0); assert.equal(state!.hasMore,false); assert.ok(state!.error);
  await act(async()=>tree.unmount());
});
