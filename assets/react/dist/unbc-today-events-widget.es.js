var wr = Object.defineProperty;
var Cr = (e, t, r) => t in e ? wr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var he = (e, t, r) => Cr(e, typeof t != "symbol" ? t + "" : t, r);
import * as c from "react";
import O, { forwardRef as wt, createElement as Ye, useState as _, useEffect as Ne, useRef as Le, useCallback as be } from "react";
import Er from "react-dom/client";
import * as Dr from "react-dom";
import Sr from "react-dom";
var Ct = { exports: {} }, Pe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kr = O, Nr = Symbol.for("react.element"), Mr = Symbol.for("react.fragment"), Rr = Object.prototype.hasOwnProperty, Pr = kr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ar = { key: !0, ref: !0, __self: !0, __source: !0 };
function Et(e, t, r) {
  var n, o = {}, a = null, i = null;
  r !== void 0 && (a = "" + r), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (n in t) Rr.call(t, n) && !Ar.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps) for (n in t = e.defaultProps, t) o[n] === void 0 && (o[n] = t[n]);
  return { $$typeof: Nr, type: e, key: a, ref: i, props: o, _owner: Pr.current };
}
Pe.Fragment = Mr;
Pe.jsx = Et;
Pe.jsxs = Et;
Ct.exports = Pe;
var d = Ct.exports;
function Me(e) {
  return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Dt = (...e) => e.filter((t, r, n) => !!t && n.indexOf(t) === r).join(" ");
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Or = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jr = wt(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: a,
    iconNode: i,
    ...s
  }, l) => Ye(
    "svg",
    {
      ref: l,
      ...Or,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Dt("lucide", o),
      ...s
    },
    [
      ...i.map(([u, g]) => Ye(u, g)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q = (e, t) => {
  const r = wt(
    ({ className: n, ...o }, a) => Ye(jr, {
      ref: a,
      iconNode: t,
      className: Dt(`lucide-${Tr(e)}`, n),
      ...o
    })
  );
  return r.displayName = `${e}`, r;
};
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = q("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ie = q("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = q("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _r = q("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = q("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $r = q("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zr = q("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wr = q("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ur = q("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Br = q("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Vr = (e, t) => {
  const r = [];
  if (!e || !t) {
    const i = /* @__PURE__ */ new Date(), s = i.getFullYear(), l = i.getMonth();
    return ot(s, l);
  }
  const n = new Date(e), o = new Date(t), a = new Date(n.getFullYear(), n.getMonth(), 1);
  for (; a <= o; ) {
    const i = ot(a.getFullYear(), a.getMonth());
    r.push(...i), a.setMonth(a.getMonth() + 1);
  }
  return r;
}, ot = (e, t) => {
  const r = [], n = `${e}-${t}`, o = new Date(e, t, 5, 14, 0), a = new Date(e, t, 5, 10, 0);
  r.push({
    id: `${n}-1`,
    title: "Computer Science Seminar",
    description: "Advanced Machine Learning Topics",
    startDate: o,
    endDate: new Date(e, t, 5, 16, 0)
  }), r.push({
    id: `${n}-2`,
    title: "Mathematics Workshop",
    description: "Calculus Study Group",
    startDate: a,
    endDate: new Date(e, t, 5, 12, 0)
  }), r.push({
    id: `${n}-3`,
    title: "Campus Movie Night",
    description: "Outdoor movie screening",
    startDate: new Date(e, t, 8, 19, 0),
    endDate: new Date(e, t, 8, 22, 0)
  }), r.push({
    id: `${n}-4`,
    title: "Student Mixer",
    description: "Meet new friends",
    startDate: new Date(e, t, 12, 18, 0),
    endDate: new Date(e, t, 12, 20, 0)
  }), r.push({
    id: `${n}-14`,
    title: "Study Session",
    description: "Group study for finals",
    startDate: new Date(e, t, 15, 14, 0),
    endDate: new Date(e, t, 15, 16, 0)
  }), r.push({
    id: `${n}-15`,
    title: "Book Club Meeting",
    description: "Monthly book discussion",
    startDate: new Date(e, t, 20, 17, 0),
    endDate: new Date(e, t, 20, 19, 0)
  }), r.push({
    id: `${n}-16`,
    title: "Trivia Night",
    description: "Fun trivia competition",
    startDate: new Date(e, t, 25, 20, 0),
    endDate: new Date(e, t, 25, 22, 0)
  }), r.push({
    id: `${n}-5`,
    title: "Basketball Tournament",
    description: "Intramural championship",
    startDate: new Date(e, t, 15, 17, 0),
    endDate: new Date(e, t, 15, 21, 0)
  }), r.push({
    id: `${n}-6`,
    title: "Soccer Practice",
    description: "Team practice session",
    startDate: new Date(e, t, 15, 15, 0),
    endDate: new Date(e, t, 15, 17, 0)
  }), r.push({
    id: `${n}-7`,
    title: "International Food Festival",
    description: "Celebrate diverse cuisines",
    startDate: new Date(e, t, 20, 11, 0),
    endDate: new Date(e, t, 20, 15, 0)
  }), r.push({
    id: `${n}-8`,
    title: "Career Fair",
    description: "Connect with employers",
    startDate: new Date(e, t, 22, 10, 0),
    endDate: new Date(e, t, 22, 16, 0)
  }), r.push({
    id: `${n}-9`,
    title: "Resume Workshop",
    description: "Professional development",
    startDate: new Date(e, t, 22, 13, 0),
    endDate: new Date(e, t, 22, 14, 30)
  }), r.push({
    id: `${n}-10`,
    title: "Yoga Session",
    description: "Morning wellness class",
    startDate: new Date(e, t, 25, 7, 0),
    endDate: new Date(e, t, 25, 8, 0)
  }), r.push({
    id: `${n}-11`,
    title: "Art Exhibition Opening",
    description: "Student artwork showcase",
    startDate: new Date(e, t, 28, 18, 0),
    endDate: new Date(e, t, 28, 20, 0)
  });
  const i = /* @__PURE__ */ new Date();
  return e === i.getFullYear() && t === i.getMonth() && (r.push({
    id: `${n}-12`,
    title: "Emergency Meeting",
    description: "Important announcement",
    startDate: new Date(i.getFullYear(), i.getMonth(), i.getDate(), 13, 0),
    endDate: new Date(i.getFullYear(), i.getMonth(), i.getDate(), 14, 0)
  }), r.push({
    id: `${n}-13`,
    title: "Study Group",
    description: "Physics review session",
    startDate: new Date(i.getFullYear(), i.getMonth(), i.getDate(), 16, 0),
    endDate: new Date(i.getFullYear(), i.getMonth(), i.getDate(), 18, 0)
  })), t === 0 ? r.push({
    id: `${n}-special`,
    title: "New Year Planning Session",
    description: "Plan for the new academic year",
    startDate: new Date(e, t, 15, 10, 0),
    endDate: new Date(e, t, 15, 12, 0)
  }) : t === 11 ? r.push({
    id: `${n}-special`,
    title: "Holiday Celebration",
    description: "End of year celebration",
    startDate: new Date(e, t, 15, 18, 0),
    endDate: new Date(e, t, 15, 21, 0)
  }) : r.push({
    id: `${n}-special`,
    title: `${new Date(e, t).toLocaleString("en-US", { month: "long" })} Workshop`,
    description: "Monthly workshop session",
    startDate: new Date(e, t, 10, 14, 0),
    endDate: new Date(e, t, 10, 16, 0)
  }), r;
}, Gr = (e) => {
  const t = {}, r = ["Main Auditorium", "Student Center", "Library Room 201", "Sports Complex", "Outdoor Field", "Conference Hall", "Room 301"], n = ["Student Union", "Computer Science Club", "Athletics Department", "Cultural Society", "Career Services"];
  return e.forEach((o, a) => {
    let i = "academic";
    o.title.toLowerCase().includes("sport") || o.title.toLowerCase().includes("basketball") || o.title.toLowerCase().includes("soccer") ? i = "sports" : o.title.toLowerCase().includes("movie") || o.title.toLowerCase().includes("mixer") ? i = "social" : o.title.toLowerCase().includes("food") || o.title.toLowerCase().includes("international") ? i = "cultural" : o.title.toLowerCase().includes("career") || o.title.toLowerCase().includes("resume") ? i = "professional" : o.title.toLowerCase().includes("yoga") || o.title.toLowerCase().includes("wellness") ? i = "wellness" : (o.title.toLowerCase().includes("art") || o.title.toLowerCase().includes("exhibition") || o.title.toLowerCase().includes("concert") || o.title.toLowerCase().includes("band")) && (i = "arts"), t[o.id] = {
      category: i,
      organization: n[a % n.length],
      location: r[a % r.length],
      cost: a % 3 === 0 ? "Free" : `$${(a + 1) * 5}`,
      registrationRequired: a % 2 === 0,
      capacity: `${(a + 1) * 20} people`,
      featured: a % 4 === 0,
      categories: [{ slug: i, name: i }],
      description: o.description
    };
  }), t;
};
function Hr(e = {}) {
  const [t, r] = _(!0);
  Ne(() => {
    const i = setTimeout(() => {
      r(!1);
    }, 500);
    return () => clearTimeout(i);
  }, [e.start_date, e.end_date]);
  const n = O.useMemo(() => Vr(e.start_date, e.end_date), [e.start_date, e.end_date]), o = O.useMemo(() => Gr(n), [n]), a = O.useMemo(() => {
    const i = {
      academic: "primary",
      social: "success",
      sports: "warning",
      cultural: "orange",
      professional: "indigo",
      wellness: "cyan",
      arts: "pink"
    }, s = {};
    return Object.values(o).forEach((l) => {
      l != null && l.category && i[l.category] && (s[l.category] = i[l.category]);
    }), s;
  }, [o]);
  return {
    events: n,
    eventMetadata: o,
    categoryMappings: a,
    loading: t,
    error: null,
    total: n.length,
    setFilters: () => {
    },
    // New pagination properties (mock values for dev mode)
    hasMore: !1,
    loadMore: () => {
    },
    loadingMore: !1,
    pagination: void 0,
    pages: 1,
    refetch: () => {
    }
  };
}
class qr {
  constructor() {
    he(this, "baseUrl");
    he(this, "cache");
    he(this, "cacheTimeout");
    const t = window.unbcCalendarData;
    this.baseUrl = (t == null ? void 0 : t.apiUrl) || "/wp-json/unbc-events/v1", this.cache = /* @__PURE__ */ new Map(), this.cacheTimeout = 5 * 60 * 1e3;
  }
  async fetchEvents(t = {}, r = {}) {
    var m;
    const n = this.generateCacheKey(t), o = this.getFromCache(n);
    if (o && !r.refresh)
      return o;
    const a = new URLSearchParams();
    Object.entries(t).forEach(([p, y]) => {
      y != null && y !== "" && a.append(p, y.toString());
    });
    const s = `${this.baseUrl.endsWith("/") ? this.baseUrl.slice(0, -1) : this.baseUrl}/events${a.toString() ? "?" + a.toString() : ""}`, l = window.unbcCalendarData, u = {
      "Content-Type": "application/json"
    };
    l != null && l.nonce && (u["X-WP-Nonce"] = l.nonce);
    const g = await fetch(s, {
      method: "GET",
      headers: u,
      credentials: "same-origin",
      signal: r.signal
    });
    if (!g.ok) {
      const p = await g.text();
      throw new Error(`HTTP error! status: ${g.status}, response: ${p}`);
    }
    const h = await g.json();
    return (m = r.signal) != null && m.aborted || this.setCache(n, h), h;
  }
  transformWordPressEventToEvent(t) {
    const r = this.parseDateTime(t.date, t.start_time), n = this.parseDateTime(t.date, t.end_time);
    return {
      id: t.id.toString(),
      title: t.title,
      description: t.excerpt || this.stripHtml(t.description),
      startDate: r,
      endDate: n,
      variant: this.getCategoryVariant(t.categories)
    };
  }
  transformWordPressEventToMetadata(t) {
    return {
      category: this.mapWordPressCategory(t.categories),
      organization: this.decodeHtmlEntities(t.organization) || t.organization,
      organization_id: t.organization_id,
      // Include organization_id
      location: t.full_location,
      cost: t.cost,
      registrationRequired: t.registration_required,
      posterUrl: t.featured_image,
      registrationLink: t.registration_link,
      contactEmail: t.contact_email,
      isVirtual: t.is_virtual,
      virtualLink: t.virtual_link,
      website: t.website,
      capacity: t.capacity,
      featured: t.featured
    };
  }
  parseDateTime(t, r) {
    const n = /* @__PURE__ */ new Date(`${t}T${r}`);
    return isNaN(n.getTime()) ? /* @__PURE__ */ new Date() : n;
  }
  stripHtml(t) {
    return new DOMParser().parseFromString(t, "text/html").body.textContent || "";
  }
  decodeHtmlEntities(t) {
    var n;
    if (!t) return "";
    if (typeof DOMParser < "u") {
      const o = new DOMParser().parseFromString(t, "text/html");
      return o.documentElement.textContent || ((n = o.body) == null ? void 0 : n.textContent) || t;
    }
    const r = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    };
    return t.replace(/&(?:amp|lt|gt|quot|#39);/g, (o) => r[o] || o);
  }
  getCategoryVariant(t) {
    return !t || !Array.isArray(t) || t.length === 0, "default";
  }
  mapWordPressCategory(t) {
    return !t || !Array.isArray(t) || t.length === 0 ? null : t[0].slug;
  }
  generateCacheKey(t) {
    const r = Object.entries(t).filter(([, n]) => n != null && n !== "").map(([n, o]) => [n, String(o)]).sort(([n], [o]) => n.localeCompare(o));
    return JSON.stringify([this.baseUrl.replace(/\/$/, ""), r]);
  }
  getFromCache(t) {
    const r = this.cache.get(t);
    return r ? Date.now() - r.timestamp > this.cacheTimeout ? (this.cache.delete(t), null) : r.data : null;
  }
  setCache(t, r) {
    this.cache.set(t, {
      data: r,
      timestamp: Date.now()
    }), this.cache.size > 50 && this.cleanCache();
  }
  cleanCache() {
    const t = Date.now();
    for (const [r, n] of this.cache.entries())
      t - n.timestamp > this.cacheTimeout && this.cache.delete(r);
  }
  clearCache() {
    this.cache.clear();
  }
}
const _e = new qr(), Yr = [
  "default",
  "primary",
  "success",
  "danger",
  "warning",
  "orange",
  "cyan",
  "pink",
  "indigo",
  "yellow"
], Kr = (e) => {
  if (!e || typeof e != "object")
    return {};
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    Yr.includes(n) && (t[r] = n);
  }), t;
}, Fe = (e) => {
  var r;
  if (typeof e != "string" || e.length === 0)
    return e ?? void 0;
  try {
    if (typeof DOMParser < "u") {
      const o = new DOMParser().parseFromString(e, "text/html");
      return o.documentElement.textContent || ((r = o.body) == null ? void 0 : r.textContent) || e;
    }
  } catch (n) {
    console.warn("Failed to decode HTML entities:", n);
  }
  const t = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'"
  };
  return e.replace(/&(?:amp|lt|gt|quot|#39);/g, (n) => t[n] || n);
}, Xr = (e) => e ? Object.entries(e).reduce((t, [r, n]) => (t[r] = {
  ...n,
  organization: Fe(n.organization) ?? n.organization,
  location: Fe(n.location) ?? n.location,
  cost: Fe(n.cost) ?? n.cost
}, t), {}) : {};
function Zr(e = {}) {
  const [t, r] = _([]), [n, o] = _({}), [a, i] = _({}), [s, l] = _(!0), [u, g] = _(!1), [h, m] = _(null), [p, y] = _(0), [f, b] = _(0), [v, x] = _(e), [C, S] = _(), k = Le(0), R = Le(), D = Le(!1), P = JSON.stringify(e);
  Ne(() => {
    x(e);
  }, [P]);
  const A = be(async (N = !1, T = !1) => {
    var F, V, z;
    if (N && (D.current || !(C != null && C.nextPage))) return;
    N || ((F = R.current) == null || F.abort(), k.current++, D.current = !1, g(!1), S(void 0));
    const L = k.current, I = N ? R.current : new AbortController();
    N || (R.current = I), N ? (D.current = !0, g(!0)) : l(!0), m(null);
    try {
      let W = N ? C.nextPage : v.page || 1;
      const j = [];
      let U = {}, je = {}, Y;
      do {
        if (Y = await _e.fetchEvents({ ...v, page: W }, { refresh: T, signal: I.signal }), L !== k.current || I.signal.aborted) return;
        for (const G of Y.events)
          if ((V = Y.performance) != null && V.server_processed) {
            const K = G;
            j.push({ ...K, startDate: new Date(K.startDate), endDate: new Date(K.endDate) });
          } else {
            const K = G, nt = _e.transformWordPressEventToEvent(K);
            j.push(nt), U[nt.id] = _e.transformWordPressEventToMetadata(K);
          }
        U = { ...U, ...Xr(Y.eventMetadata) }, je = { ...je, ...Kr(Y.categoryMappings) }, W = ((z = Y.pagination) == null ? void 0 : z.nextPage) || 0;
      } while (v.view !== "list" && W);
      const xr = (G) => Array.from(new Map([...G, ...j].map((K) => [K.id, K])).values());
      r((G) => xr(N ? G : [])), o((G) => ({ ...N ? G : {}, ...U })), i((G) => ({ ...N ? G : {}, ...je })), y(Y.total), b(Y.pages), S(Y.pagination);
    } catch (W) {
      if (L !== k.current || I.signal.aborted) return;
      N || (r([]), o({}), i({}), y(0), b(0), S(void 0)), m(W instanceof Error ? W.message : "Failed to load events");
    } finally {
      L === k.current && !I.signal.aborted && (l(!1), g(!1), D.current = !1);
    }
  }, [JSON.stringify(v), JSON.stringify(C)]);
  Ne(() => (A(), () => {
    var N;
    k.current++, (N = R.current) == null || N.abort();
  }), [JSON.stringify(v)]);
  const $ = be(() => {
    A(!1, !0);
  }, [A]), ne = be(() => {
    A(!0);
  }, [A]), w = be((N) => x((T) => ({ ...T, ...N, page: 1 })), []);
  return {
    events: t,
    eventMetadata: n,
    categoryMappings: a,
    loading: s,
    loadingMore: u,
    error: h,
    total: p,
    pages: f,
    pagination: C,
    hasMore: (C == null ? void 0 : C.hasMore) || !1,
    refetch: $,
    loadMore: ne,
    setFilters: w
  };
}
function Jr() {
  const [e, t] = _([]), [r, n] = _(!0), [o, a] = _(null);
  return Ne(() => {
    (async () => {
      var s, l;
      try {
        n(!0), a(null);
        const u = await fetch(`${((s = window.unbcCalendarData) == null ? void 0 : s.categoriesEndpoint) || "/wp-json/wp/v2/event_category"}?per_page=100&orderby=name&order=asc`);
        if (!u.ok)
          throw new Error(`HTTP error! status: ${u.status}`);
        const g = await u.json(), h = {};
        try {
          const p = await fetch(`${((l = window.unbcCalendarData) == null ? void 0 : l.apiUrl) || "/wp-json/unbc-events/v1/"}category-config`);
          if (p.ok) {
            const y = await p.json();
            Object.entries(y.colors || {}).forEach(([f, b]) => {
              typeof b == "string" ? h[f] = b : b && typeof b == "object" && "variant" in b && b.variant && (h[f] = b.variant);
            });
          }
        } catch (p) {
          console.warn("Error fetching category color config:", p);
        }
        const m = g.map((p) => ({
          id: p.id,
          name: p.name,
          slug: p.slug,
          count: p.count,
          variant: h[p.slug] || "default"
        }));
        t(m);
      } catch (u) {
        console.error("Error fetching event categories:", u), a(u instanceof Error ? u.message : "Failed to fetch categories"), t([
          { id: 1, name: "Clubs", slug: "clubs", count: 0, variant: "default" },
          { id: 2, name: "UNBC", slug: "unbc", count: 0, variant: "default" },
          { id: 3, name: "Organizations", slug: "organizations", count: 0, variant: "default" },
          { id: 4, name: "Sports", slug: "sports", count: 0, variant: "default" }
        ]);
      } finally {
        n(!1);
      }
    })();
  }, []), { categories: e, loading: r, error: o };
}
function Qr(e = "default") {
  const t = {
    default: "bg-gray-500",
    // #6b7280
    primary: "bg-purple-500",
    // #8b5cf6
    success: "bg-green-500",
    // #22c55e
    danger: "bg-red-500",
    // #ef4444
    warning: "bg-blue-500",
    // #3b82f6
    orange: "bg-orange-500",
    // #f97316
    cyan: "bg-cyan-500",
    // #06b6d4
    pink: "bg-pink-500",
    // #ec4899
    indigo: "bg-indigo-500",
    // #6366f1
    yellow: "bg-yellow-500"
    // #eab308
  };
  return t[e] || t.default;
}
function en(e, t = {}) {
  return e && t[e] ? t[e] : "default";
}
function tn(e) {
  const t = {};
  return !e || !Array.isArray(e) || e.forEach((r) => {
    r.variant && (t[r.slug] = r.variant);
  }), t;
}
function ve(e) {
  return e.replace(/\\/g, "\\\\").replace(/\r\n|\r|\n/g, "\\n").replace(/;/g, "\\;").replace(/,/g, "\\,");
}
function rn(e) {
  const t = new TextEncoder();
  let r = "", n = 0;
  const o = [];
  for (const a of e) {
    const i = t.encode(a).length;
    n + i > 75 && (o.push(r), r = " ", n = 1), r += a, n += i;
  }
  return o.push(r), o.join(`\r
`);
}
const Ke = (e) => e.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
function St(e) {
  if (!e.isAllDay) return [Ke(e.startDate), Ke(e.endDate)];
  const t = new Date(e.endDate);
  return (t <= e.startDate || t.getHours() || t.getMinutes() || t.getSeconds()) && t.setDate(t.getDate() + 1), [Me(e.startDate).replace(/-/g, ""), Me(t).replace(/-/g, "")];
}
function nn(e, t, r = /* @__PURE__ */ new Date()) {
  const [n, o] = St(e), a = e.isAllDay ? ";VALUE=DATE" : "", i = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Campus Manager//Events//EN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${ve(e.id)}@campus-manager`,
    `DTSTAMP:${Ke(r)}`,
    `DTSTART${a}:${n}`,
    `DTEND${a}:${o}`,
    `SUMMARY:${ve(e.title)}`,
    `DESCRIPTION:${ve(e.description || "")}`,
    `LOCATION:${ve((t == null ? void 0 : t.location) || "")}`,
    `STATUS:${e.status === "canceled" || e.status === "cancelled" ? "CANCELLED" : e.status === "postponed" ? "TENTATIVE" : "CONFIRMED"}`
  ];
  return t != null && t.website && /^https?:\/\/[^\r\n]+$/.test(t.website) && i.push(`URL:${t.website}`), [...i, "END:VEVENT", "END:VCALENDAR"].map(rn).join(`\r
`) + `\r
`;
}
function te(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), r === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function at(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function kt(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const a = at(o, t);
      return !r && typeof a == "function" && (r = !0), a;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const a = n[o];
          typeof a == "function" ? a() : at(e[o], null);
        }
      };
  };
}
function ae(...e) {
  return c.useCallback(kt(...e), e);
}
function on(e, t) {
  const r = c.createContext(t), n = (a) => {
    const { children: i, ...s } = a, l = c.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ d.jsx(r.Provider, { value: l, children: i });
  };
  n.displayName = e + "Provider";
  function o(a) {
    const i = c.useContext(r);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [n, o];
}
function an(e, t = []) {
  let r = [];
  function n(a, i) {
    const s = c.createContext(i), l = r.length;
    r = [...r, i];
    const u = (h) => {
      var v;
      const { scope: m, children: p, ...y } = h, f = ((v = m == null ? void 0 : m[e]) == null ? void 0 : v[l]) || s, b = c.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ d.jsx(f.Provider, { value: b, children: p });
    };
    u.displayName = a + "Provider";
    function g(h, m) {
      var f;
      const p = ((f = m == null ? void 0 : m[e]) == null ? void 0 : f[l]) || s, y = c.useContext(p);
      if (y) return y;
      if (i !== void 0) return i;
      throw new Error(`\`${h}\` must be used within \`${a}\``);
    }
    return [u, g];
  }
  const o = () => {
    const a = r.map((i) => c.createContext(i));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || a;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return o.scopeName = e, [n, sn(o, ...t)];
}
function sn(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const i = n.reduce((s, { useScope: l, scopeName: u }) => {
        const h = l(a)[`__scope${u}`];
        return { ...s, ...h };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var pe = globalThis != null && globalThis.document ? c.useLayoutEffect : () => {
}, cn = c[" useId ".trim().toString()] || (() => {
}), ln = 0;
function $e(e) {
  const [t, r] = c.useState(cn());
  return pe(() => {
    r((n) => n ?? String(ln++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var dn = c[" useInsertionEffect ".trim().toString()] || pe;
function un({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [o, a, i] = fn({
    defaultProp: t,
    onChange: r
  }), s = e !== void 0, l = s ? e : o;
  {
    const g = c.useRef(e !== void 0);
    c.useEffect(() => {
      const h = g.current;
      h !== s && console.warn(
        `${n} is changing from ${h ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), g.current = s;
    }, [s, n]);
  }
  const u = c.useCallback(
    (g) => {
      var h;
      if (s) {
        const m = gn(g) ? g(e) : g;
        m !== e && ((h = i.current) == null || h.call(i, m));
      } else
        a(g);
    },
    [s, e, a, i]
  );
  return [l, u];
}
function fn({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = c.useState(e), o = c.useRef(r), a = c.useRef(t);
  return dn(() => {
    a.current = t;
  }, [t]), c.useEffect(() => {
    var i;
    o.current !== r && ((i = a.current) == null || i.call(a, r), o.current = r);
  }, [r, o]), [r, n, a];
}
function gn(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function Nt(e) {
  const t = /* @__PURE__ */ pn(e), r = c.forwardRef((n, o) => {
    const { children: a, ...i } = n, s = c.Children.toArray(a), l = s.find(hn);
    if (l) {
      const u = l.props.children, g = s.map((h) => h === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : h);
      return /* @__PURE__ */ d.jsx(t, { ...i, ref: o, children: c.isValidElement(u) ? c.cloneElement(u, void 0, g) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...i, ref: o, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function pn(e) {
  const t = c.forwardRef((r, n) => {
    const { children: o, ...a } = r;
    if (c.isValidElement(o)) {
      const i = vn(o), s = bn(a, o.props);
      return o.type !== c.Fragment && (s.ref = n ? kt(n, i) : i), c.cloneElement(o, s);
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var mn = Symbol("radix.slottable");
function hn(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === mn;
}
function bn(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], a = t[n];
    /^on[A-Z]/.test(n) ? o && a ? r[n] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...a } : n === "className" && (r[n] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function vn(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var yn = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Z = yn.reduce((e, t) => {
  const r = /* @__PURE__ */ Nt(`Primitive.${t}`), n = c.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(l, { ...s, ref: a });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function xn(e, t) {
  e && Dr.flushSync(() => e.dispatchEvent(t));
}
function me(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
function wn(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = me(e);
  c.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var Cn = "DismissableLayer", Xe = "dismissableLayer.update", En = "dismissableLayer.pointerDownOutside", Dn = "dismissableLayer.focusOutside", st, Mt = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Rt = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...l
    } = e, u = c.useContext(Mt), [g, h] = c.useState(null), m = (g == null ? void 0 : g.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = c.useState({}), y = ae(t, (D) => h(D)), f = Array.from(u.layers), [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), v = f.indexOf(b), x = g ? f.indexOf(g) : -1, C = u.layersWithOutsidePointerEventsDisabled.size > 0, S = x >= v, k = Nn((D) => {
      const P = D.target, A = [...u.branches].some(($) => $.contains(P));
      !S || A || (o == null || o(D), i == null || i(D), D.defaultPrevented || s == null || s());
    }, m), R = Mn((D) => {
      const P = D.target;
      [...u.branches].some(($) => $.contains(P)) || (a == null || a(D), i == null || i(D), D.defaultPrevented || s == null || s());
    }, m);
    return wn((D) => {
      x === u.layers.size - 1 && (n == null || n(D), !D.defaultPrevented && s && (D.preventDefault(), s()));
    }, m), c.useEffect(() => {
      if (g)
        return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (st = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(g)), u.layers.add(g), it(), () => {
          r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = st);
        };
    }, [g, m, r, u]), c.useEffect(() => () => {
      g && (u.layers.delete(g), u.layersWithOutsidePointerEventsDisabled.delete(g), it());
    }, [g, u]), c.useEffect(() => {
      const D = () => p({});
      return document.addEventListener(Xe, D), () => document.removeEventListener(Xe, D);
    }, []), /* @__PURE__ */ d.jsx(
      Z.div,
      {
        ...l,
        ref: y,
        style: {
          pointerEvents: C ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: te(e.onFocusCapture, R.onFocusCapture),
        onBlurCapture: te(e.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: te(
          e.onPointerDownCapture,
          k.onPointerDownCapture
        )
      }
    );
  }
);
Rt.displayName = Cn;
var Sn = "DismissableLayerBranch", kn = c.forwardRef((e, t) => {
  const r = c.useContext(Mt), n = c.useRef(null), o = ae(t, n);
  return c.useEffect(() => {
    const a = n.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ d.jsx(Z.div, { ...e, ref: o });
});
kn.displayName = Sn;
function Nn(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = me(e), n = c.useRef(!1), o = c.useRef(() => {
  });
  return c.useEffect(() => {
    const a = (s) => {
      if (s.target && !n.current) {
        let l = function() {
          Pt(
            En,
            r,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      n.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function Mn(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = me(e), n = c.useRef(!1);
  return c.useEffect(() => {
    const o = (a) => {
      a.target && !n.current && Pt(Dn, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function it() {
  const e = new CustomEvent(Xe);
  document.dispatchEvent(e);
}
function Pt(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? xn(o, a) : o.dispatchEvent(a);
}
var ze = "focusScope.autoFocusOnMount", We = "focusScope.autoFocusOnUnmount", ct = { bubbles: !1, cancelable: !0 }, Rn = "FocusScope", At = c.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...i
  } = e, [s, l] = c.useState(null), u = me(o), g = me(a), h = c.useRef(null), m = ae(t, (f) => l(f)), p = c.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  c.useEffect(() => {
    if (n) {
      let f = function(C) {
        if (p.paused || !s) return;
        const S = C.target;
        s.contains(S) ? h.current = S : ee(h.current, { select: !0 });
      }, b = function(C) {
        if (p.paused || !s) return;
        const S = C.relatedTarget;
        S !== null && (s.contains(S) || ee(h.current, { select: !0 }));
      }, v = function(C) {
        if (document.activeElement === document.body)
          for (const k of C)
            k.removedNodes.length > 0 && ee(s);
      };
      document.addEventListener("focusin", f), document.addEventListener("focusout", b);
      const x = new MutationObserver(v);
      return s && x.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", b), x.disconnect();
      };
    }
  }, [n, s, p.paused]), c.useEffect(() => {
    if (s) {
      dt.add(p);
      const f = document.activeElement;
      if (!s.contains(f)) {
        const v = new CustomEvent(ze, ct);
        s.addEventListener(ze, u), s.dispatchEvent(v), v.defaultPrevented || (Pn(Ln(Tt(s)), { select: !0 }), document.activeElement === f && ee(s));
      }
      return () => {
        s.removeEventListener(ze, u), setTimeout(() => {
          const v = new CustomEvent(We, ct);
          s.addEventListener(We, g), s.dispatchEvent(v), v.defaultPrevented || ee(f ?? document.body, { select: !0 }), s.removeEventListener(We, g), dt.remove(p);
        }, 0);
      };
    }
  }, [s, u, g, p]);
  const y = c.useCallback(
    (f) => {
      if (!r && !n || p.paused) return;
      const b = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey, v = document.activeElement;
      if (b && v) {
        const x = f.currentTarget, [C, S] = An(x);
        C && S ? !f.shiftKey && v === S ? (f.preventDefault(), r && ee(C, { select: !0 })) : f.shiftKey && v === C && (f.preventDefault(), r && ee(S, { select: !0 })) : v === x && f.preventDefault();
      }
    },
    [r, n, p.paused]
  );
  return /* @__PURE__ */ d.jsx(Z.div, { tabIndex: -1, ...i, ref: m, onKeyDown: y });
});
At.displayName = Rn;
function Pn(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (ee(n, { select: t }), document.activeElement !== r) return;
}
function An(e) {
  const t = Tt(e), r = lt(t, e), n = lt(t.reverse(), e);
  return [r, n];
}
function Tt(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function lt(e, t) {
  for (const r of e)
    if (!Tn(r, { upTo: t })) return r;
}
function Tn(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function On(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ee(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && On(e) && t && e.select();
  }
}
var dt = jn();
function jn() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = ut(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = ut(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function ut(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function Ln(e) {
  return e.filter((t) => t.tagName !== "A");
}
var In = "Portal", Ot = c.forwardRef((e, t) => {
  var s;
  const { container: r, ...n } = e, [o, a] = c.useState(!1);
  pe(() => a(!0), []);
  const i = r || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? Sr.createPortal(/* @__PURE__ */ d.jsx(Z.div, { ...n, ref: t }), i) : null;
});
Ot.displayName = In;
function _n(e, t) {
  return c.useReducer((r, n) => t[r][n] ?? r, e);
}
var Ae = (e) => {
  const { present: t, children: r } = e, n = Fn(t), o = typeof r == "function" ? r({ present: n.isPresent }) : c.Children.only(r), a = ae(n.ref, $n(o));
  return typeof r == "function" || n.isPresent ? c.cloneElement(o, { ref: a }) : null;
};
Ae.displayName = "Presence";
function Fn(e) {
  const [t, r] = c.useState(), n = c.useRef(null), o = c.useRef(e), a = c.useRef("none"), i = e ? "mounted" : "unmounted", [s, l] = _n(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return c.useEffect(() => {
    const u = ye(n.current);
    a.current = s === "mounted" ? u : "none";
  }, [s]), pe(() => {
    const u = n.current, g = o.current;
    if (g !== e) {
      const m = a.current, p = ye(u);
      e ? l("MOUNT") : p === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(g && m !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), pe(() => {
    if (t) {
      let u;
      const g = t.ownerDocument.defaultView ?? window, h = (p) => {
        const f = ye(n.current).includes(CSS.escape(p.animationName));
        if (p.target === t && f && (l("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = g.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, m = (p) => {
        p.target === t && (a.current = ye(n.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", h), t.addEventListener("animationend", h), () => {
        g.clearTimeout(u), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", h), t.removeEventListener("animationend", h);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: c.useCallback((u) => {
      n.current = u ? getComputedStyle(u) : null, r(u);
    }, [])
  };
}
function ye(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function $n(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Ue = 0;
function zn() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? ft()), document.body.insertAdjacentElement("beforeend", e[1] ?? ft()), Ue++, () => {
      Ue === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Ue--;
    };
  }, []);
}
function ft() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var H = function() {
  return H = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, H.apply(this, arguments);
};
function jt(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function Wn(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, a; n < o; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var De = "right-scroll-bar-position", Se = "width-before-scroll-bar", Un = "with-scroll-bars-hidden", Bn = "--removed-body-scroll-bar-size";
function Be(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Vn(e, t) {
  var r = _(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && (r.value = n, r.callback(n, o));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
var Gn = typeof window < "u" ? c.useLayoutEffect : c.useEffect, gt = /* @__PURE__ */ new WeakMap();
function Hn(e, t) {
  var r = Vn(null, function(n) {
    return e.forEach(function(o) {
      return Be(o, n);
    });
  });
  return Gn(function() {
    var n = gt.get(r);
    if (n) {
      var o = new Set(n), a = new Set(e), i = r.current;
      o.forEach(function(s) {
        a.has(s) || Be(s, null);
      }), a.forEach(function(s) {
        o.has(s) || Be(s, i);
      });
    }
    gt.set(r, e);
  }, [e]), r;
}
function qn(e) {
  return e;
}
function Yn(e, t) {
  t === void 0 && (t = qn);
  var r = [], n = !1, o = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, n);
      return r.push(i), function() {
        r = r.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (n = !0; r.length; ) {
        var i = r;
        r = [], i.forEach(a);
      }
      r = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(a) {
      n = !0;
      var i = [];
      if (r.length) {
        var s = r;
        r = [], s.forEach(a), i = r;
      }
      var l = function() {
        var g = i;
        i = [], g.forEach(a);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), r = {
        push: function(g) {
          i.push(g), u();
        },
        filter: function(g) {
          return i = i.filter(g), r;
        }
      };
    }
  };
  return o;
}
function Kn(e) {
  e === void 0 && (e = {});
  var t = Yn(null);
  return t.options = H({ async: !0, ssr: !1 }, e), t;
}
var Lt = function(e) {
  var t = e.sideCar, r = jt(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return c.createElement(n, H({}, r));
};
Lt.isSideCarExport = !0;
function Xn(e, t) {
  return e.useMedium(t), Lt;
}
var It = Kn(), Ve = function() {
}, Te = c.forwardRef(function(e, t) {
  var r = c.useRef(null), n = c.useState({
    onScrollCapture: Ve,
    onWheelCapture: Ve,
    onTouchMoveCapture: Ve
  }), o = n[0], a = n[1], i = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, g = e.enabled, h = e.shards, m = e.sideCar, p = e.noRelative, y = e.noIsolation, f = e.inert, b = e.allowPinchZoom, v = e.as, x = v === void 0 ? "div" : v, C = e.gapMode, S = jt(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), k = m, R = Hn([r, t]), D = H(H({}, S), o);
  return c.createElement(
    c.Fragment,
    null,
    g && c.createElement(k, { sideCar: It, removeScrollBar: u, shards: h, noRelative: p, noIsolation: y, inert: f, setCallbacks: a, allowPinchZoom: !!b, lockRef: r, gapMode: C }),
    i ? c.cloneElement(c.Children.only(s), H(H({}, D), { ref: R })) : c.createElement(x, H({}, D, { className: l, ref: R }), s)
  );
});
Te.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Te.classNames = {
  fullWidth: Se,
  zeroRight: De
};
var Zn = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Jn() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Zn();
  return t && e.setAttribute("nonce", t), e;
}
function Qn(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function eo(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var to = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = Jn()) && (Qn(t, r), eo(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, ro = function() {
  var e = to();
  return function(t, r) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, _t = function() {
  var e = ro(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, no = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ge = function(e) {
  return parseInt(e || "", 10) || 0;
}, oo = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ge(r), Ge(n), Ge(o)];
}, ao = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return no;
  var t = oo(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, so = _t(), le = "data-scroll-locked", io = function(e, t, r, n) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(Un, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(s, "px ").concat(n, `;
  }
  body[`).concat(le, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(s, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(De, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(Se, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(De, " .").concat(De, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(Se, " .").concat(Se, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(le, `] {
    `).concat(Bn, ": ").concat(s, `px;
  }
`);
}, pt = function() {
  var e = parseInt(document.body.getAttribute(le) || "0", 10);
  return isFinite(e) ? e : 0;
}, co = function() {
  c.useEffect(function() {
    return document.body.setAttribute(le, (pt() + 1).toString()), function() {
      var e = pt() - 1;
      e <= 0 ? document.body.removeAttribute(le) : document.body.setAttribute(le, e.toString());
    };
  }, []);
}, lo = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n;
  co();
  var a = c.useMemo(function() {
    return ao(o);
  }, [o]);
  return c.createElement(so, { styles: io(a, !t, o, r ? "" : "!important") });
}, Ze = !1;
if (typeof window < "u")
  try {
    var xe = Object.defineProperty({}, "passive", {
      get: function() {
        return Ze = !0, !0;
      }
    });
    window.addEventListener("test", xe, xe), window.removeEventListener("test", xe, xe);
  } catch {
    Ze = !1;
  }
var se = Ze ? { passive: !1 } : !1, uo = function(e) {
  return e.tagName === "TEXTAREA";
}, Ft = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !uo(e) && r[t] === "visible")
  );
}, fo = function(e) {
  return Ft(e, "overflowY");
}, go = function(e) {
  return Ft(e, "overflowX");
}, mt = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = $t(e, n);
    if (o) {
      var a = zt(e, n), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, po = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, mo = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, $t = function(e, t) {
  return e === "v" ? fo(t) : go(t);
}, zt = function(e, t) {
  return e === "v" ? po(t) : mo(t);
}, ho = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, bo = function(e, t, r, n, o) {
  var a = ho(e, window.getComputedStyle(t).direction), i = a * n, s = r.target, l = t.contains(s), u = !1, g = i > 0, h = 0, m = 0;
  do {
    if (!s)
      break;
    var p = zt(e, s), y = p[0], f = p[1], b = p[2], v = f - b - a * y;
    (y || v) && $t(e, s) && (h += v, m += y);
    var x = s.parentNode;
    s = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (g && Math.abs(h) < 1 || !g && Math.abs(m) < 1) && (u = !0), u;
}, we = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ht = function(e) {
  return [e.deltaX, e.deltaY];
}, bt = function(e) {
  return e && "current" in e ? e.current : e;
}, vo = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, yo = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, xo = 0, ie = [];
function wo(e) {
  var t = c.useRef([]), r = c.useRef([0, 0]), n = c.useRef(), o = c.useState(xo++)[0], a = c.useState(_t)[0], i = c.useRef(e);
  c.useEffect(function() {
    i.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var f = Wn([e.lockRef.current], (e.shards || []).map(bt), !0).filter(Boolean);
      return f.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), f.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = c.useCallback(function(f, b) {
    if ("touches" in f && f.touches.length === 2 || f.type === "wheel" && f.ctrlKey)
      return !i.current.allowPinchZoom;
    var v = we(f), x = r.current, C = "deltaX" in f ? f.deltaX : x[0] - v[0], S = "deltaY" in f ? f.deltaY : x[1] - v[1], k, R = f.target, D = Math.abs(C) > Math.abs(S) ? "h" : "v";
    if ("touches" in f && D === "h" && R.type === "range")
      return !1;
    var P = mt(D, R);
    if (!P)
      return !0;
    if (P ? k = D : (k = D === "v" ? "h" : "v", P = mt(D, R)), !P)
      return !1;
    if (!n.current && "changedTouches" in f && (C || S) && (n.current = k), !k)
      return !0;
    var A = n.current || k;
    return bo(A, b, f, A === "h" ? C : S);
  }, []), l = c.useCallback(function(f) {
    var b = f;
    if (!(!ie.length || ie[ie.length - 1] !== a)) {
      var v = "deltaY" in b ? ht(b) : we(b), x = t.current.filter(function(k) {
        return k.name === b.type && (k.target === b.target || b.target === k.shadowParent) && vo(k.delta, v);
      })[0];
      if (x && x.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!x) {
        var C = (i.current.shards || []).map(bt).filter(Boolean).filter(function(k) {
          return k.contains(b.target);
        }), S = C.length > 0 ? s(b, C[0]) : !i.current.noIsolation;
        S && b.cancelable && b.preventDefault();
      }
    }
  }, []), u = c.useCallback(function(f, b, v, x) {
    var C = { name: f, delta: b, target: v, should: x, shadowParent: Co(v) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== C;
      });
    }, 1);
  }, []), g = c.useCallback(function(f) {
    r.current = we(f), n.current = void 0;
  }, []), h = c.useCallback(function(f) {
    u(f.type, ht(f), f.target, s(f, e.lockRef.current));
  }, []), m = c.useCallback(function(f) {
    u(f.type, we(f), f.target, s(f, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return ie.push(a), e.setCallbacks({
      onScrollCapture: h,
      onWheelCapture: h,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", l, se), document.addEventListener("touchmove", l, se), document.addEventListener("touchstart", g, se), function() {
      ie = ie.filter(function(f) {
        return f !== a;
      }), document.removeEventListener("wheel", l, se), document.removeEventListener("touchmove", l, se), document.removeEventListener("touchstart", g, se);
    };
  }, []);
  var p = e.removeScrollBar, y = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    y ? c.createElement(a, { styles: yo(o) }) : null,
    p ? c.createElement(lo, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Co(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Eo = Xn(It, wo);
var Wt = c.forwardRef(function(e, t) {
  return c.createElement(Te, H({}, e, { ref: t, sideCar: Eo }));
});
Wt.classNames = Te.classNames;
var Do = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ce = /* @__PURE__ */ new WeakMap(), Ce = /* @__PURE__ */ new WeakMap(), Ee = {}, He = 0, Ut = function(e) {
  return e && (e.host || Ut(e.parentNode));
}, So = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = Ut(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, ko = function(e, t, r, n) {
  var o = So(t, Array.isArray(e) ? e : [e]);
  Ee[r] || (Ee[r] = /* @__PURE__ */ new WeakMap());
  var a = Ee[r], i = [], s = /* @__PURE__ */ new Set(), l = new Set(o), u = function(h) {
    !h || s.has(h) || (s.add(h), u(h.parentNode));
  };
  o.forEach(u);
  var g = function(h) {
    !h || l.has(h) || Array.prototype.forEach.call(h.children, function(m) {
      if (s.has(m))
        g(m);
      else
        try {
          var p = m.getAttribute(n), y = p !== null && p !== "false", f = (ce.get(m) || 0) + 1, b = (a.get(m) || 0) + 1;
          ce.set(m, f), a.set(m, b), i.push(m), f === 1 && y && Ce.set(m, !0), b === 1 && m.setAttribute(r, "true"), y || m.setAttribute(n, "true");
        } catch (v) {
          console.error("aria-hidden: cannot operate on ", m, v);
        }
    });
  };
  return g(t), s.clear(), He++, function() {
    i.forEach(function(h) {
      var m = ce.get(h) - 1, p = a.get(h) - 1;
      ce.set(h, m), a.set(h, p), m || (Ce.has(h) || h.removeAttribute(n), Ce.delete(h)), p || h.removeAttribute(r);
    }), He--, He || (ce = /* @__PURE__ */ new WeakMap(), ce = /* @__PURE__ */ new WeakMap(), Ce = /* @__PURE__ */ new WeakMap(), Ee = {});
  };
}, No = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = Do(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), ko(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, Oe = "Dialog", [Bt, Ma] = an(Oe), [Mo, B] = Bt(Oe), Vt = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, s = c.useRef(null), l = c.useRef(null), [u, g] = un({
    prop: n,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Oe
  });
  return /* @__PURE__ */ d.jsx(
    Mo,
    {
      scope: t,
      triggerRef: s,
      contentRef: l,
      contentId: $e(),
      titleId: $e(),
      descriptionId: $e(),
      open: u,
      onOpenChange: g,
      onOpenToggle: c.useCallback(() => g((h) => !h), [g]),
      modal: i,
      children: r
    }
  );
};
Vt.displayName = Oe;
var Gt = "DialogTrigger", Ro = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = B(Gt, r), a = ae(t, o.triggerRef);
    return /* @__PURE__ */ d.jsx(
      Z.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": tt(o.open),
        ...n,
        ref: a,
        onClick: te(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Ro.displayName = Gt;
var Qe = "DialogPortal", [Po, Ht] = Bt(Qe, {
  forceMount: void 0
}), qt = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: o } = e, a = B(Qe, t);
  return /* @__PURE__ */ d.jsx(Po, { scope: t, forceMount: r, children: c.Children.map(n, (i) => /* @__PURE__ */ d.jsx(Ae, { present: r || a.open, children: /* @__PURE__ */ d.jsx(Ot, { asChild: !0, container: o, children: i }) })) });
};
qt.displayName = Qe;
var Re = "DialogOverlay", Yt = c.forwardRef(
  (e, t) => {
    const r = Ht(Re, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = B(Re, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ d.jsx(Ae, { present: n || a.open, children: /* @__PURE__ */ d.jsx(To, { ...o, ref: t }) }) : null;
  }
);
Yt.displayName = Re;
var Ao = /* @__PURE__ */ Nt("DialogOverlay.RemoveScroll"), To = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = B(Re, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ d.jsx(Wt, { as: Ao, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ d.jsx(
        Z.div,
        {
          "data-state": tt(o.open),
          ...n,
          ref: t,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
), oe = "DialogContent", Kt = c.forwardRef(
  (e, t) => {
    const r = Ht(oe, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = B(oe, e.__scopeDialog);
    return /* @__PURE__ */ d.jsx(Ae, { present: n || a.open, children: a.modal ? /* @__PURE__ */ d.jsx(Oo, { ...o, ref: t }) : /* @__PURE__ */ d.jsx(jo, { ...o, ref: t }) });
  }
);
Kt.displayName = oe;
var Oo = c.forwardRef(
  (e, t) => {
    const r = B(oe, e.__scopeDialog), n = c.useRef(null), o = ae(t, r.contentRef, n);
    return c.useEffect(() => {
      const a = n.current;
      if (a) return No(a);
    }, []), /* @__PURE__ */ d.jsx(
      Xt,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: te(e.onCloseAutoFocus, (a) => {
          var i;
          a.preventDefault(), (i = r.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: te(e.onPointerDownOutside, (a) => {
          const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: te(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), jo = c.forwardRef(
  (e, t) => {
    const r = B(oe, e.__scopeDialog), n = c.useRef(!1), o = c.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      Xt,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a), a.defaultPrevented || (n.current || (s = r.triggerRef.current) == null || s.focus(), a.preventDefault()), n.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var l, u;
          (l = e.onInteractOutside) == null || l.call(e, a), a.defaultPrevented || (n.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((u = r.triggerRef.current) == null ? void 0 : u.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), Xt = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = B(oe, r), l = c.useRef(null), u = ae(t, l);
    return zn(), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(
        At,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ d.jsx(
            Rt,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": tt(s.open),
              ...i,
              ref: u,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(Lo, { titleId: s.titleId }),
        /* @__PURE__ */ d.jsx(_o, { contentRef: l, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), et = "DialogTitle", Zt = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = B(et, r);
    return /* @__PURE__ */ d.jsx(Z.h2, { id: o.titleId, ...n, ref: t });
  }
);
Zt.displayName = et;
var Jt = "DialogDescription", Qt = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = B(Jt, r);
    return /* @__PURE__ */ d.jsx(Z.p, { id: o.descriptionId, ...n, ref: t });
  }
);
Qt.displayName = Jt;
var er = "DialogClose", tr = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = B(er, r);
    return /* @__PURE__ */ d.jsx(
      Z.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: te(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
tr.displayName = er;
function tt(e) {
  return e ? "open" : "closed";
}
var rr = "DialogTitleWarning", [Ra, nr] = on(rr, {
  contentName: oe,
  titleName: et,
  docsSlug: "dialog"
}), Lo = ({ titleId: e }) => {
  const t = nr(rr), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, Io = "DialogDescriptionWarning", _o = ({ contentRef: e, descriptionId: t }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${nr(Io).contentName}}.`;
  return c.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(n));
  }, [n, e, t]), null;
}, Fo = Vt, $o = qt, or = Yt, ar = Kt, sr = Zt, ir = Qt, zo = tr;
function cr(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = cr(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Wo() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = cr(e)) && (n && (n += " "), n += t);
  return n;
}
const rt = "-", Uo = (e) => {
  const t = Vo(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(rt);
      return s[0] === "" && s.length !== 1 && s.shift(), lr(s, t) || Bo(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const l = r[i] || [];
      return s && n[i] ? [...l, ...n[i]] : l;
    }
  };
}, lr = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? lr(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(rt);
  return (i = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : i.classGroupId;
}, vt = /^\[(.+)\]$/, Bo = (e) => {
  if (vt.test(e)) {
    const t = vt.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Vo = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ho(Object.entries(e.classGroups), r).forEach(([a, i]) => {
    Je(i, n, a, t);
  }), n;
}, Je = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : yt(t, o);
      a.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (Go(o)) {
        Je(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([a, i]) => {
      Je(i, yt(t, a), r, n);
    });
  });
}, yt = (e, t) => {
  let r = e;
  return t.split(rt).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, Go = (e) => e.isThemeGetter, Ho = (e, t) => t ? e.map(([r, n]) => {
  const o = n.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([i, s]) => [t + i, s])) : a);
  return [r, o];
}) : e, qo = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (a, i) => {
    r.set(a, i), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let i = r.get(a);
      if (i !== void 0)
        return i;
      if ((i = n.get(a)) !== void 0)
        return o(a, i), i;
    },
    set(a, i) {
      r.has(a) ? r.set(a, i) : o(a, i);
    }
  };
}, dr = "!", Yo = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, o = t[0], a = t.length, i = (s) => {
    const l = [];
    let u = 0, g = 0, h;
    for (let b = 0; b < s.length; b++) {
      let v = s[b];
      if (u === 0) {
        if (v === o && (n || s.slice(b, b + a) === t)) {
          l.push(s.slice(g, b)), g = b + a;
          continue;
        }
        if (v === "/") {
          h = b;
          continue;
        }
      }
      v === "[" ? u++ : v === "]" && u--;
    }
    const m = l.length === 0 ? s : s.substring(g), p = m.startsWith(dr), y = p ? m.substring(1) : m, f = h && h > g ? h - g : void 0;
    return {
      modifiers: l,
      hasImportantModifier: p,
      baseClassName: y,
      maybePostfixModifierPosition: f
    };
  };
  return r ? (s) => r({
    className: s,
    parseClassName: i
  }) : i;
}, Ko = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, Xo = (e) => ({
  cache: qo(e.cacheSize),
  parseClassName: Yo(e),
  ...Uo(e)
}), Zo = /\s+/, Jo = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, a = [], i = e.trim().split(Zo);
  let s = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const u = i[l], {
      modifiers: g,
      hasImportantModifier: h,
      baseClassName: m,
      maybePostfixModifierPosition: p
    } = r(u);
    let y = !!p, f = n(y ? m.substring(0, p) : m);
    if (!f) {
      if (!y) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (f = n(m), !f) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      y = !1;
    }
    const b = Ko(g).join(":"), v = h ? b + dr : b, x = v + f;
    if (a.includes(x))
      continue;
    a.push(x);
    const C = o(f, y);
    for (let S = 0; S < C.length; ++S) {
      const k = C[S];
      a.push(v + k);
    }
    s = u + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function Qo() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = ur(t)) && (n && (n += " "), n += r);
  return n;
}
const ur = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = ur(e[n])) && (r && (r += " "), r += t);
  return r;
};
function ea(e, ...t) {
  let r, n, o, a = i;
  function i(l) {
    const u = t.reduce((g, h) => h(g), e());
    return r = Xo(u), n = r.cache.get, o = r.cache.set, a = s, s(l);
  }
  function s(l) {
    const u = n(l);
    if (u)
      return u;
    const g = Jo(l, r);
    return o(l, g), g;
  }
  return function() {
    return a(Qo.apply(null, arguments));
  };
}
const M = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, fr = /^\[(?:([a-z-]+):)?(.+)\]$/i, ta = /^\d+\/\d+$/, ra = /* @__PURE__ */ new Set(["px", "full", "screen"]), na = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, oa = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, aa = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, sa = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ia = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, X = (e) => de(e) || ra.has(e) || ta.test(e), J = (e) => ue(e, "length", ma), de = (e) => !!e && !Number.isNaN(Number(e)), qe = (e) => ue(e, "number", de), fe = (e) => !!e && Number.isInteger(Number(e)), ca = (e) => e.endsWith("%") && de(e.slice(0, -1)), E = (e) => fr.test(e), Q = (e) => na.test(e), la = /* @__PURE__ */ new Set(["length", "size", "percentage"]), da = (e) => ue(e, la, gr), ua = (e) => ue(e, "position", gr), fa = /* @__PURE__ */ new Set(["image", "url"]), ga = (e) => ue(e, fa, ba), pa = (e) => ue(e, "", ha), ge = () => !0, ue = (e, t, r) => {
  const n = fr.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, ma = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  oa.test(e) && !aa.test(e)
), gr = () => !1, ha = (e) => sa.test(e), ba = (e) => ia.test(e), va = () => {
  const e = M("colors"), t = M("spacing"), r = M("blur"), n = M("brightness"), o = M("borderColor"), a = M("borderRadius"), i = M("borderSpacing"), s = M("borderWidth"), l = M("contrast"), u = M("grayscale"), g = M("hueRotate"), h = M("invert"), m = M("gap"), p = M("gradientColorStops"), y = M("gradientColorStopPositions"), f = M("inset"), b = M("margin"), v = M("opacity"), x = M("padding"), C = M("saturate"), S = M("scale"), k = M("sepia"), R = M("skew"), D = M("space"), P = M("translate"), A = () => ["auto", "contain", "none"], $ = () => ["auto", "hidden", "clip", "visible", "scroll"], ne = () => ["auto", E, t], w = () => [E, t], N = () => ["", X, J], T = () => ["auto", de, E], L = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], I = () => ["solid", "dashed", "dotted", "double", "none"], F = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], V = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], z = () => ["", "0", E], W = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], j = () => [de, E];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ge],
      spacing: [X, J],
      blur: ["none", "", Q, E],
      brightness: j(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Q, E],
      borderSpacing: w(),
      borderWidth: N(),
      contrast: j(),
      grayscale: z(),
      hueRotate: j(),
      invert: z(),
      gap: w(),
      gradientColorStops: [e],
      gradientColorStopPositions: [ca, J],
      inset: ne(),
      margin: ne(),
      opacity: j(),
      padding: w(),
      saturate: j(),
      scale: j(),
      sepia: z(),
      skew: j(),
      space: w(),
      translate: w()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", E]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Q]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": W()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": W()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...L(), E]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: $()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": $()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": $()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: A()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": A()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": A()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [f]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [f]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [f]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [f]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [f]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [f]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [f]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [f]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [f]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", fe, E]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ne()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", E]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: z()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: z()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", fe, E]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ge]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", fe, E]
        }, E]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": T()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": T()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ge]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [fe, E]
        }, E]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": T()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": T()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", E]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", E]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [m]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [m]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [m]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...V()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...V(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...V(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [x]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [x]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [x]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [x]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [x]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [x]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [x]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [x]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [x]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [b]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [b]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [b]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [b]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [b]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [b]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [b]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [b]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [b]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [D]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [D]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", E, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [E, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [E, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Q]
        }, Q]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [E, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [E, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [E, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [E, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Q, J]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", qe]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ge]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", E]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", de, qe]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", X, E]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", E]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", E]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [v]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [v]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...I(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", X, J]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", X, E]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: w()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", E]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", E]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [v]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...L(), ua]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", da]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ga]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [y]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [y]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [p]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [v]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...I(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [v]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: I()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...I()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [X, E]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [X, J]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: N()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [v]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [X, J]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Q, pa]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ge]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [v]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...F(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": F()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Q, E]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [g]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [h]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [C]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [k]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [g]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [h]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [v]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [C]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [k]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", E]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: j()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", E]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: j()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", E]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [S]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [S]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [S]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [fe, E]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [P]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [P]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [R]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [R]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", E]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", E]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": w()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": w()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": w()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": w()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": w()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": w()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": w()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": w()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": w()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": w()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": w()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": w()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": w()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": w()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": w()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": w()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": w()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": w()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", E]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [X, J, qe]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, ya = /* @__PURE__ */ ea(va);
function re(...e) {
  return ya(Wo(e));
}
const xa = Fo, wa = $o, pr = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  or,
  {
    ref: r,
    className: re(
      "fixed inset-0 z-[99999] bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
pr.displayName = or.displayName;
const mr = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ d.jsxs(wa, { children: [
  /* @__PURE__ */ d.jsx(pr, {}),
  /* @__PURE__ */ d.jsxs(
    ar,
    {
      ref: n,
      className: re(
        "fixed left-[50%] top-[50%] z-[99999] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-card text-foreground p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ d.jsxs(zo, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-all duration-200 hover:opacity-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 p-1", children: [
          /* @__PURE__ */ d.jsx(Br, { className: "h-4 w-4" }),
          /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
mr.displayName = ar.displayName;
const hr = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: re(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
hr.displayName = "DialogHeader";
const br = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: re(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
br.displayName = "DialogFooter";
const vr = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  sr,
  {
    ref: r,
    className: re(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
vr.displayName = sr.displayName;
const yr = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ d.jsx(
  ir,
  {
    ref: r,
    className: re("text-sm text-muted-foreground", e),
    ...t
  }
));
yr.displayName = ir.displayName;
const ke = c.forwardRef(
  ({ className: e, variant: t = "default", size: r = "default", ...n }, o) => /* @__PURE__ */ d.jsx(
    "button",
    {
      className: re(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline: "border border-border bg-transparent text-foreground hover:bg-muted",
          secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-muted hover:text-foreground",
          link: "text-primary underline-offset-4 hover:underline"
        }[t],
        {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10"
        }[r],
        e
      ),
      ref: o,
      ...n
    }
  )
);
ke.displayName = "Button";
function xt({
  className: e,
  variant: t = "default",
  size: r = "default",
  ...n
}) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: re(
        "inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-950",
        {
          default: "border-transparent bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 hover:bg-gray-900/90 dark:hover:bg-gray-200",
          // Neutral pill
          secondary: "border border-gray-200 dark:border-border bg-gray-50 text-gray-900 dark:bg-muted dark:text-foreground hover:bg-gray-100 dark:hover:bg-muted/80",
          destructive: "border-transparent bg-red-600 text-white hover:bg-red-600/90",
          outline: "border border-gray-200 dark:border-border text-gray-900 dark:text-foreground bg-transparent",
          success: "border-transparent bg-green-600 text-white hover:bg-green-600/90",
          primary: "border-transparent bg-purple-600 text-white hover:bg-purple-600/90",
          warning: "border-transparent bg-blue-600 text-white hover:bg-blue-600/90",
          danger: "border-transparent bg-red-600 text-white hover:bg-red-600/90"
        }[t],
        {
          default: "px-2.5 py-0.5 text-xs",
          sm: "px-2 py-0.5 text-[10px]"
        }[r],
        e
      ),
      ...n
    }
  );
}
function Ca({ event: e, eventMetadata: t, open: r, onOpenChange: n, showCost: o = !0 }) {
  const a = O.useRef(null);
  O.useEffect(() => {
    r && (a.current = document.activeElement);
  }, [r]);
  const [i, s] = O.useState(!1);
  if (!e) return null;
  const l = t[e.id], u = (m, p = 180) => {
    if (!m || m.length <= p) return m;
    const y = m.substring(0, p), f = y.lastIndexOf("."), b = y.lastIndexOf(" "), v = f > p - 50 ? f + 1 : b;
    return m.substring(0, v > 0 ? v : p).trim();
  }, g = (m) => {
    switch (m) {
      case "google": {
        const p = new URL("https://calendar.google.com/calendar/render");
        return p.searchParams.append("action", "TEMPLATE"), p.searchParams.append("text", e.title), p.searchParams.append("dates", St(e).join("/")), p.searchParams.append("details", e.description || ""), l != null && l.location && p.searchParams.append("location", l.location), p.toString();
      }
      case "outlook":
      case "apple": {
        const p = nn(e, l);
        return `data:text/calendar;charset=utf8,${encodeURIComponent(p)}`;
      }
    }
  }, h = {
    clubs: "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary",
    unbc: "bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary",
    organizations: "bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive",
    sports: "bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent"
  };
  return /* @__PURE__ */ d.jsx(xa, { open: r, onOpenChange: n, children: /* @__PURE__ */ d.jsxs(mr, { onCloseAutoFocus: (m) => {
    var p;
    m.preventDefault(), (p = a.current) == null || p.focus();
  }, className: "max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto overflow-x-hidden bg-card border border-border sm:w-full p-4 sm:p-6", children: [
    /* @__PURE__ */ d.jsxs(hr, { children: [
      /* @__PURE__ */ d.jsx(vr, { className: "text-xl text-foreground", children: e.title }),
      e.description && /* @__PURE__ */ d.jsxs("div", { className: "mt-2", children: [
        /* @__PURE__ */ d.jsx(yr, { className: `text-muted-foreground leading-relaxed break-words ${i ? "max-h-[40vh] overflow-y-auto pr-2" : ""}`, children: i ? e.description : u(e.description) }),
        e.description.length > 180 && /* @__PURE__ */ d.jsx(
          "button",
          {
            onClick: () => s(!i),
            className: "inline-flex items-center gap-1 mt-3 px-3 py-2 text-sm text-primary hover:text-primary/80 hover:bg-primary/10 active:bg-primary/20 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
            children: i ? /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
              "Show less",
              /* @__PURE__ */ d.jsx(_r, { className: "h-4 w-4" })
            ] }) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
              "Read more",
              /* @__PURE__ */ d.jsx(Ir, { className: "h-4 w-4" })
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ d.jsx("div", { className: "space-y-4 my-4", children: /* @__PURE__ */ d.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
        /* @__PURE__ */ d.jsx(Fr, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
        /* @__PURE__ */ d.jsxs("div", { className: "space-y-1 text-foreground", children: [
          /* @__PURE__ */ d.jsx("div", { className: "font-medium", children: e.startDate.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          }) }),
          /* @__PURE__ */ d.jsxs("div", { className: "text-muted-foreground text-sm", children: [
            e.startDate.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: !0
            }),
            e.endDate && ` - ${e.endDate.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: !0
            })}`
          ] })
        ] })
      ] }),
      l && /* @__PURE__ */ d.jsxs("div", { className: "space-y-2 text-sm text-foreground", children: [
        l.location && /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ d.jsx(Ur, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ d.jsx("span", { children: l.location })
        ] }),
        l.organization && /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ d.jsx(Lr, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ d.jsx("span", { children: l.organization })
        ] }),
        o && l.cost && /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ d.jsx($r, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ d.jsx("span", { children: l.cost })
        ] }),
        l.website && /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ d.jsx(zr, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ d.jsx(
            "a",
            {
              href: l.website,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-block text-primary hover:text-primary/80 hover:underline transition-colors break-all cursor-pointer",
              style: { pointerEvents: "auto", position: "relative", zIndex: 10 },
              children: "Event Website"
            }
          )
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-3 pt-1", children: [
          l.category && /* @__PURE__ */ d.jsx(xt, { className: h[l.category] || "bg-muted text-foreground", children: l.category.charAt(0).toUpperCase() + l.category.slice(1) }),
          l.registrationRequired && /* @__PURE__ */ d.jsx(xt, { variant: "outline", className: "border-border text-foreground", children: "Registration Required" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ d.jsxs(br, { className: "flex-col sm:flex-col gap-2", children: [
      /* @__PURE__ */ d.jsx("div", { className: "text-sm text-muted-foreground mb-2", children: "Add to your calendar:" }),
      /* @__PURE__ */ d.jsxs("div", { className: "flex gap-2 w-full", children: [
        /* @__PURE__ */ d.jsxs(
          ke,
          {
            variant: "outline",
            className: "flex-1 border-border bg-card text-foreground hover:bg-muted text-xs sm:text-sm",
            onClick: () => window.open(g("google"), "_blank"),
            children: [
              /* @__PURE__ */ d.jsx(Ie, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Google"
            ]
          }
        ),
        /* @__PURE__ */ d.jsxs(
          ke,
          {
            variant: "outline",
            className: "flex-1 border-border bg-card text-foreground hover:bg-muted text-xs sm:text-sm",
            onClick: () => {
              const m = g("outlook"), p = document.createElement("a");
              p.href = m, p.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, p.click();
            },
            children: [
              /* @__PURE__ */ d.jsx(Ie, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Outlook"
            ]
          }
        ),
        /* @__PURE__ */ d.jsxs(
          ke,
          {
            variant: "outline",
            className: "flex-1 border-border bg-card text-foreground hover:bg-muted text-xs sm:text-sm",
            onClick: () => {
              const m = g("apple"), p = document.createElement("a");
              p.href = m, p.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, p.click();
            },
            children: [
              /* @__PURE__ */ d.jsx(Ie, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Apple"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function Ea({
  title: e = "Today's Events",
  maxEvents: t = 10
}) {
  const [r, n] = O.useState(!1), [o, a] = O.useState(null), [i, s] = O.useState(!1);
  O.useEffect(() => {
    const w = () => {
      var I;
      const L = document.documentElement.hasAttribute("data-theme") && document.documentElement.getAttribute("data-theme") === "dark" || document.documentElement.hasAttribute("data-color-scheme") && document.documentElement.getAttribute("data-color-scheme") === "dark" || document.body.classList.contains("dark") || document.documentElement.classList.contains("is-dark-theme") || document.body.classList.contains("is-dark-theme") || ((I = getComputedStyle(document.documentElement).getPropertyValue("--wp--preset--color--background")) == null ? void 0 : I.includes("0, 0, 0")) || getComputedStyle(document.body).backgroundColor === "rgb(0, 0, 0)" || !document.documentElement.hasAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches;
      n(L), N && N.disconnect(), L ? document.querySelectorAll(".unbc-calendar-container, .unbc-today-events-widget").forEach((F) => F.classList.add("dark")) : document.querySelectorAll(".unbc-calendar-container, .unbc-today-events-widget").forEach((F) => F.classList.remove("dark")), N && (N.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-theme", "data-color-scheme"] }), N.observe(document.body, { attributes: !0, attributeFilter: ["class"] }));
    }, N = new MutationObserver(w);
    w(), N.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-theme", "data-color-scheme"] }), N.observe(document.body, { attributes: !0, attributeFilter: ["class"] });
    const T = window.matchMedia("(prefers-color-scheme: dark)");
    return T.addEventListener("change", w), () => {
      N.disconnect(), T.removeEventListener("change", w);
    };
  }, []);
  const l = /* @__PURE__ */ new Date();
  l.setHours(0, 0, 0, 0);
  const u = new Date(l);
  u.setDate(u.getDate() + 1);
  const g = O.useMemo(() => ({
    per_page: 100,
    start_date: Me(l),
    end_date: Me(l),
    year: l.getFullYear(),
    month: l.getMonth() + 1,
    category: ""
  }), []);
  Hr(g);
  const h = Zr(g), m = Jr(), p = h, {
    events: y,
    eventMetadata: f,
    loading: b,
    error: v,
    categoryMappings: x
  } = p, { categories: C, loading: S } = m, k = O.useMemo(
    () => tn(C),
    [C]
  ), R = O.useMemo(() => x && Object.keys(x).length > 0 ? x : k, [x, k]), D = O.useMemo(() => y.filter((T) => {
    const L = new Date(T.startDate);
    return L.setHours(0, 0, 0, 0), L.getTime() === l.getTime();
  }).sort((T, L) => T.startDate.getTime() - L.startDate.getTime()).slice(0, t), [y, t]), P = (w) => w.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), A = l.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  }), $ = O.useCallback((w) => {
    a(w), s(!0);
  }, []), ne = (w) => {
    const N = f[w.id], T = en(N == null ? void 0 : N.category, R), I = Qr(T).replace("bg-", "after:bg-"), F = new Date(w.startDate), V = new Date(w.endDate), z = !Number.isNaN(F.getTime()) && !Number.isNaN(V.getTime()), W = z && F.getTime() === V.getTime(), j = z ? `${P(F)}${W ? "" : ` - ${P(V)}`}` : null;
    return /* @__PURE__ */ d.jsxs(
      "div",
      {
        role: "button",
        tabIndex: 0,
        "aria-label": `View ${w.title}`,
        onKeyDown: (U) => {
          (U.key === "Enter" || U.key === " ") && (U.preventDefault(), U.stopPropagation(), $(w));
        },
        className: `bg-card dark:bg-card relative rounded-md p-2 pl-6 text-xs text-left w-full after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary hover:bg-muted dark:hover:bg-muted transition-colors border border-gray-200 dark:border-border shadow-sm ${I}`,
        onClick: (U) => {
          U.stopPropagation(), $(w);
        },
        children: [
          /* @__PURE__ */ d.jsx("div", { className: "font-medium text-[13px] text-gray-900 dark:text-foreground leading-tight", children: w.title }),
          j && /* @__PURE__ */ d.jsx("div", { className: "mt-0.5 text-[11px] text-gray-900 dark:text-foreground", children: j })
        ]
      },
      w.id
    );
  };
  return b || S ? /* @__PURE__ */ d.jsx("div", { className: `w-full ${r ? "dark" : ""}`, children: /* @__PURE__ */ d.jsx("div", { className: "rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-card shadow-md p-4", children: /* @__PURE__ */ d.jsxs("div", { className: "text-center py-4", children: [
    /* @__PURE__ */ d.jsx(Wr, { className: "h-6 w-6 animate-spin mx-auto mb-2 text-gray-400 dark:text-muted-foreground" }),
    /* @__PURE__ */ d.jsx("p", { className: "text-xs text-gray-500 dark:text-muted-foreground", children: "Loading events..." })
  ] }) }) }) : v ? /* @__PURE__ */ d.jsx("div", { className: `w-full ${r ? "dark" : ""}`, children: /* @__PURE__ */ d.jsx("div", { className: "rounded-lg border border-red-200 dark:border-red-900 bg-white dark:bg-card shadow-md p-4", children: /* @__PURE__ */ d.jsx("p", { className: "text-xs text-red-600 dark:text-red-400", children: "Error loading events" }) }) }) : /* @__PURE__ */ d.jsxs("div", { className: `w-full ${r ? "dark" : ""}`, children: [
    /* @__PURE__ */ d.jsxs("div", { className: "rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-card shadow-md p-4", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "space-y-1 mb-3", children: [
        /* @__PURE__ */ d.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-500 dark:text-muted-foreground", children: e }),
        /* @__PURE__ */ d.jsx("div", { className: "text-base font-semibold text-gray-900 dark:text-foreground", children: A })
      ] }),
      /* @__PURE__ */ d.jsx("div", { className: "space-y-1.5", children: D.length > 0 ? D.map(ne) : /* @__PURE__ */ d.jsx("div", { className: "rounded-md border border-dashed border-gray-200 dark:border-border bg-gray-50 dark:bg-card px-3 py-4 text-xs text-gray-600 dark:text-muted-foreground", children: "No events scheduled for today." }) })
    ] }),
    /* @__PURE__ */ d.jsx(
      Ca,
      {
        event: o,
        eventMetadata: f,
        open: i,
        onOpenChange: s
      }
    )
  ] });
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".unbc-today-events-widget").forEach((t) => {
    const r = t.getAttribute("data-title") || "Today's Events", n = parseInt(t.getAttribute("data-max-events") || "10");
    Er.createRoot(t).render(
      /* @__PURE__ */ d.jsx(O.StrictMode, { children: /* @__PURE__ */ d.jsx(
        Ea,
        {
          title: r,
          maxEvents: n
        }
      ) })
    );
  });
});
