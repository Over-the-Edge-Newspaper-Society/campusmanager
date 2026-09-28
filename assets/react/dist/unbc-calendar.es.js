var ef = Object.defineProperty;
var tf = (e, t, n) => t in e ? ef(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Bn = (e, t, n) => tf(e, typeof t != "symbol" ? t + "" : t, n);
import * as x from "react";
import U, { useLayoutEffect as tl, useState as W, forwardRef as Yo, createElement as dr, useEffect as Qe, useRef as Oe, useCallback as Tt, createContext as Qt, useId as qo, useContext as we, useInsertionEffect as nl, useMemo as Nt, Children as nf, isValidElement as rf, Fragment as rl, Component as of } from "react";
import { createRoot as Xo } from "react-dom/client";
import * as Pr from "react-dom";
import sf from "react-dom";
var ol = { exports: {} }, Ar = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var af = U, lf = Symbol.for("react.element"), cf = Symbol.for("react.fragment"), uf = Object.prototype.hasOwnProperty, df = af.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ff = { key: !0, ref: !0, __self: !0, __source: !0 };
function sl(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) uf.call(t, r) && !ff.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: lf, type: e, key: i, ref: s, props: o, _owner: df.current };
}
Ar.Fragment = cf;
Ar.jsx = sl;
Ar.jsxs = sl;
ol.exports = Ar;
var u = ol.exports;
function gn(e) {
  return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
function hf(e, t) {
  const n = new Date(t), r = new Date(t);
  return e === "list" ? { start_date: gn(n) } : (e === "month" ? (n.setDate(1), n.setDate(n.getDate() - n.getDay()), r.setMonth(r.getMonth() + 1, 0), r.setDate(r.getDate() + 6 - r.getDay())) : e === "week" && (n.setDate(n.getDate() - n.getDay()), r.setFullYear(n.getFullYear(), n.getMonth(), n.getDate() + 6)), { start_date: gn(n), end_date: gn(r) });
}
function Zo(e, t) {
  const n = new Date(t);
  n.setHours(0, 0, 0, 0);
  const r = new Date(n);
  return r.setDate(r.getDate() + 1), e.startDate < r && (e.endDate > n || e.startDate.getTime() === n.getTime());
}
function fr(e, t) {
  const n = new Date(t);
  n.setHours(0, 0, 0, 0);
  const r = new Date(n);
  r.setDate(r.getDate() + 1);
  const o = (a) => a.getHours() + a.getMinutes() / 60, i = e.startDate <= n ? 0 : o(e.startDate), s = e.endDate >= r ? 24 : o(e.endDate);
  return [i, Math.max(i + 0.25, s)];
}
function il(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = il(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function pf() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = il(e)) && (r && (r += " "), r += t);
  return r;
}
const Jo = "-", mf = (e) => {
  const t = yf(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const a = s.split(Jo);
      return a[0] === "" && a.length !== 1 && a.shift(), al(a, t) || gf(s);
    },
    getConflictingClassGroupIds: (s, a) => {
      const l = n[s] || [];
      return a && r[s] ? [...l, ...r[s]] : l;
    }
  };
}, al = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? al(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(Jo);
  return (s = t.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : s.classGroupId;
}, ci = /^\[(.+)\]$/, gf = (e) => {
  if (ci.test(e)) {
    const t = ci.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, yf = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return xf(Object.entries(e.classGroups), n).forEach(([i, s]) => {
    vo(s, r, i, t);
  }), r;
}, vo = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : ui(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (vf(o)) {
        vo(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([i, s]) => {
      vo(s, ui(t, i), n, r);
    });
  });
}, ui = (e, t) => {
  let n = e;
  return t.split(Jo).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, vf = (e) => e.isThemeGetter, xf = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, a]) => [t + s, a])) : i);
  return [n, o];
}) : e, bf = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (i, s) => {
    n.set(i, s), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let s = n.get(i);
      if (s !== void 0)
        return s;
      if ((s = r.get(i)) !== void 0)
        return o(i, s), s;
    },
    set(i, s) {
      n.has(i) ? n.set(i, s) : o(i, s);
    }
  };
}, ll = "!", wf = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], i = t.length, s = (a) => {
    const l = [];
    let c = 0, f = 0, d;
    for (let g = 0; g < a.length; g++) {
      let v = a[g];
      if (c === 0) {
        if (v === o && (r || a.slice(g, g + i) === t)) {
          l.push(a.slice(f, g)), f = g + i;
          continue;
        }
        if (v === "/") {
          d = g;
          continue;
        }
      }
      v === "[" ? c++ : v === "]" && c--;
    }
    const h = l.length === 0 ? a : a.substring(f), p = h.startsWith(ll), y = p ? h.substring(1) : h, m = d && d > f ? d - f : void 0;
    return {
      modifiers: l,
      hasImportantModifier: p,
      baseClassName: y,
      maybePostfixModifierPosition: m
    };
  };
  return n ? (a) => n({
    className: a,
    parseClassName: s
  }) : s;
}, Sf = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, Cf = (e) => ({
  cache: bf(e.cacheSize),
  parseClassName: wf(e),
  ...mf(e)
}), Df = /\s+/, Tf = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, i = [], s = e.trim().split(Df);
  let a = "";
  for (let l = s.length - 1; l >= 0; l -= 1) {
    const c = s[l], {
      modifiers: f,
      hasImportantModifier: d,
      baseClassName: h,
      maybePostfixModifierPosition: p
    } = n(c);
    let y = !!p, m = r(y ? h.substring(0, p) : h);
    if (!m) {
      if (!y) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (m = r(h), !m) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      y = !1;
    }
    const g = Sf(f).join(":"), v = d ? g + ll : g, b = v + m;
    if (i.includes(b))
      continue;
    i.push(b);
    const w = o(m, y);
    for (let S = 0; S < w.length; ++S) {
      const C = w[S];
      i.push(v + C);
    }
    a = c + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function Pf() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = cl(t)) && (r && (r += " "), r += n);
  return r;
}
const cl = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = cl(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Af(e, ...t) {
  let n, r, o, i = s;
  function s(l) {
    const c = t.reduce((f, d) => d(f), e());
    return n = Cf(c), r = n.cache.get, o = n.cache.set, i = a, a(l);
  }
  function a(l) {
    const c = r(l);
    if (c)
      return c;
    const f = Tf(l, n);
    return o(l, f), f;
  }
  return function() {
    return i(Pf.apply(null, arguments));
  };
}
const oe = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, ul = /^\[(?:([a-z-]+):)?(.+)\]$/i, Nf = /^\d+\/\d+$/, Ef = /* @__PURE__ */ new Set(["px", "full", "screen"]), Mf = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, jf = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, kf = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Rf = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Lf = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, qe = (e) => Wt(e) || Ef.has(e) || Nf.test(e), it = (e) => en(e, "length", zf), Wt = (e) => !!e && !Number.isNaN(Number(e)), Hr = (e) => en(e, "number", Wt), cn = (e) => !!e && Number.isInteger(Number(e)), If = (e) => e.endsWith("%") && Wt(e.slice(0, -1)), K = (e) => ul.test(e), at = (e) => Mf.test(e), Of = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Vf = (e) => en(e, Of, dl), Ff = (e) => en(e, "position", dl), _f = /* @__PURE__ */ new Set(["image", "url"]), Bf = (e) => en(e, _f, Wf), $f = (e) => en(e, "", Uf), un = () => !0, en = (e, t, n) => {
  const r = ul.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, zf = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  jf.test(e) && !kf.test(e)
), dl = () => !1, Uf = (e) => Rf.test(e), Wf = (e) => Lf.test(e), Hf = () => {
  const e = oe("colors"), t = oe("spacing"), n = oe("blur"), r = oe("brightness"), o = oe("borderColor"), i = oe("borderRadius"), s = oe("borderSpacing"), a = oe("borderWidth"), l = oe("contrast"), c = oe("grayscale"), f = oe("hueRotate"), d = oe("invert"), h = oe("gap"), p = oe("gradientColorStops"), y = oe("gradientColorStopPositions"), m = oe("inset"), g = oe("margin"), v = oe("opacity"), b = oe("padding"), w = oe("saturate"), S = oe("scale"), C = oe("sepia"), D = oe("skew"), P = oe("space"), T = oe("translate"), R = () => ["auto", "contain", "none"], O = () => ["auto", "hidden", "clip", "visible", "scroll"], N = () => ["auto", K, t], j = () => [K, t], V = () => ["", qe, it], B = () => ["auto", Wt, K], H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], A = () => ["solid", "dashed", "dotted", "double", "none"], _ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], k = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], z = () => ["", "0", K], G = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ee = () => [Wt, K];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [un],
      spacing: [qe, it],
      blur: ["none", "", at, K],
      brightness: ee(),
      borderColor: [e],
      borderRadius: ["none", "", "full", at, K],
      borderSpacing: j(),
      borderWidth: V(),
      contrast: ee(),
      grayscale: z(),
      hueRotate: ee(),
      invert: z(),
      gap: j(),
      gradientColorStops: [e],
      gradientColorStopPositions: [If, it],
      inset: N(),
      margin: N(),
      opacity: ee(),
      padding: j(),
      saturate: ee(),
      scale: ee(),
      sepia: z(),
      skew: ee(),
      space: j(),
      translate: j()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", K]
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
        columns: [at]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": G()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": G()
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
        object: [...H(), K]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: O()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": O()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": O()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: R()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": R()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": R()
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
        inset: [m]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [m]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [m]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [m]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [m]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [m]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [m]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [m]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [m]
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
        z: ["auto", cn, K]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: N()
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
        flex: ["1", "auto", "initial", "none", K]
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
        order: ["first", "last", "none", cn, K]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [un]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", cn, K]
        }, K]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [un]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [cn, K]
        }, K]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
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
        "auto-cols": ["auto", "min", "max", "fr", K]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", K]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...k()]
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
        content: ["normal", ...k(), "baseline"]
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
        "place-content": [...k(), "baseline"]
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
        p: [b]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [b]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [b]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [b]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [b]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [b]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [b]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [b]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [b]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [g]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [g]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [g]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [g]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [g]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [g]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [g]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [g]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [g]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [P]
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
        "space-y": [P]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", K, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [K, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [K, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [at]
        }, at]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [K, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [K, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [K, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [K, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", at, it]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Hr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [un]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", K]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Wt, Hr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", qe, K]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", K]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", K]
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
        decoration: [...A(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", qe, it]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", qe, K]
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
        indent: j()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", K]
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
        content: ["none", K]
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
        bg: [...H(), Ff]
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
        bg: ["auto", "cover", "contain", Vf]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Bf]
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
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
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
        border: [...A(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
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
        "divide-y": [a]
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
        divide: A()
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
        outline: ["", ...A()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [qe, K]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [qe, it]
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
        ring: V()
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
        "ring-offset": [qe, it]
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
        shadow: ["", "inner", "none", at, $f]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [un]
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
        "mix-blend": [..._(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": _()
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
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
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
        "drop-shadow": ["", "none", at, K]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [w]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [C]
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
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
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
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
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
        "backdrop-saturate": [w]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [C]
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
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", K]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ee()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", K]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ee()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", K]
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
        rotate: [cn, K]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [T]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [T]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [D]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [D]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", K]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", K]
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
        "scroll-m": j()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": j()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": j()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": j()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": j()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": j()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": j()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": j()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": j()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": j()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": j()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": j()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": j()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": j()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": j()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": j()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": j()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": j()
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
        "will-change": ["auto", "scroll", "contents", "transform", K]
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
        stroke: [qe, it, Hr]
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
}, Kf = /* @__PURE__ */ Af(Hf);
function de(...e) {
  return Kf(pf(e));
}
function Qo({ className: e, ...t }) {
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      "data-slot": "card",
      className: de(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        e
      ),
      ...t
    }
  );
}
function fl({ className: e, ...t }) {
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: de("px-6", e),
      ...t
    }
  );
}
function Gf({ className: e, ...t }) {
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: de("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
const Xe = x.forwardRef(
  ({ className: e, variant: t = "default", size: n = "default", ...r }, o) => /* @__PURE__ */ u.jsx(
    "button",
    {
      className: de(
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
        }[n],
        e
      ),
      ref: o,
      ...r
    }
  )
);
Xe.displayName = "Button";
function di(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function X(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Yf(e, t) {
  const n = x.createContext(t), r = (i) => {
    const { children: s, ...a } = i, l = x.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ u.jsx(n.Provider, { value: l, children: s });
  };
  r.displayName = e + "Provider";
  function o(i) {
    const s = x.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function tn(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = x.createContext(s), l = n.length;
    n = [...n, s];
    const c = (d) => {
      var v;
      const { scope: h, children: p, ...y } = d, m = ((v = h == null ? void 0 : h[e]) == null ? void 0 : v[l]) || a, g = x.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ u.jsx(m.Provider, { value: g, children: p });
    };
    c.displayName = i + "Provider";
    function f(d, h) {
      var m;
      const p = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[l]) || a, y = x.useContext(p);
      if (y) return y;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [c, f];
  }
  const o = () => {
    const i = n.map((s) => x.createContext(s));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return x.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [r, qf(o, ...t)];
}
function qf(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((a, { useScope: l, scopeName: c }) => {
        const d = l(i)[`__scope${c}`];
        return { ...a, ...d };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function fi(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function hl(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = fi(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : fi(e[o], null);
        }
      };
  };
}
function fe(...e) {
  return x.useCallback(hl(...e), e);
}
// @__NO_SIDE_EFFECTS__
function wn(e) {
  const t = /* @__PURE__ */ Xf(e), n = x.forwardRef((r, o) => {
    const { children: i, ...s } = r, a = x.Children.toArray(i), l = a.find(Jf);
    if (l) {
      const c = l.props.children, f = a.map((d) => d === l ? x.Children.count(c) > 1 ? x.Children.only(null) : x.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ u.jsx(t, { ...s, ref: o, children: x.isValidElement(c) ? x.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ u.jsx(t, { ...s, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Xf(e) {
  const t = x.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (x.isValidElement(o)) {
      const s = eh(o), a = Qf(i, o.props);
      return o.type !== x.Fragment && (a.ref = r ? hl(r, s) : s), x.cloneElement(o, a);
    }
    return x.Children.count(o) > 1 ? x.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Zf = Symbol("radix.slottable");
function Jf(e) {
  return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Zf;
}
function Qf(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
      const l = i(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function eh(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function pl(e) {
  const t = e + "CollectionProvider", [n, r] = tn(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (m) => {
    const { scope: g, children: v } = m, b = U.useRef(null), w = U.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ u.jsx(o, { scope: g, itemMap: w, collectionRef: b, children: v });
  };
  s.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ wn(a), c = U.forwardRef(
    (m, g) => {
      const { scope: v, children: b } = m, w = i(a, v), S = fe(g, w.collectionRef);
      return /* @__PURE__ */ u.jsx(l, { ref: S, children: b });
    }
  );
  c.displayName = a;
  const f = e + "CollectionItemSlot", d = "data-radix-collection-item", h = /* @__PURE__ */ wn(f), p = U.forwardRef(
    (m, g) => {
      const { scope: v, children: b, ...w } = m, S = U.useRef(null), C = fe(g, S), D = i(f, v);
      return U.useEffect(() => (D.itemMap.set(S, { ref: S, ...w }), () => void D.itemMap.delete(S))), /* @__PURE__ */ u.jsx(h, { [d]: "", ref: C, children: b });
    }
  );
  p.displayName = f;
  function y(m) {
    const g = i(e + "CollectionConsumer", m);
    return U.useCallback(() => {
      const b = g.collectionRef.current;
      if (!b) return [];
      const w = Array.from(b.querySelectorAll(`[${d}]`));
      return Array.from(g.itemMap.values()).sort(
        (D, P) => w.indexOf(D.ref.current) - w.indexOf(P.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: s, Slot: c, ItemSlot: p },
    y,
    r
  ];
}
var th = x.createContext(void 0);
function es(e) {
  const t = x.useContext(th);
  return e || t || "ltr";
}
var nh = [
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
], Q = nh.reduce((e, t) => {
  const n = /* @__PURE__ */ wn(`Primitive.${t}`), r = x.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ u.jsx(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function rh(e, t) {
  e && Pr.flushSync(() => e.dispatchEvent(t));
}
function ft(e) {
  const t = x.useRef(e);
  return x.useEffect(() => {
    t.current = e;
  }), x.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function oh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ft(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var sh = "DismissableLayer", xo = "dismissableLayer.update", ih = "dismissableLayer.pointerDownOutside", ah = "dismissableLayer.focusOutside", hi, ml = x.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ts = x.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: a,
      ...l
    } = e, c = x.useContext(ml), [f, d] = x.useState(null), h = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = x.useState({}), y = fe(t, (P) => d(P)), m = Array.from(c.layers), [g] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), v = m.indexOf(g), b = f ? m.indexOf(f) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, S = b >= v, C = uh((P) => {
      const T = P.target, R = [...c.branches].some((O) => O.contains(T));
      !S || R || (o == null || o(P), s == null || s(P), P.defaultPrevented || a == null || a());
    }, h), D = dh((P) => {
      const T = P.target;
      [...c.branches].some((O) => O.contains(T)) || (i == null || i(P), s == null || s(P), P.defaultPrevented || a == null || a());
    }, h);
    return oh((P) => {
      b === c.layers.size - 1 && (r == null || r(P), !P.defaultPrevented && a && (P.preventDefault(), a()));
    }, h), x.useEffect(() => {
      if (f)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (hi = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), pi(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = hi);
        };
    }, [f, h, n, c]), x.useEffect(() => () => {
      f && (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), pi());
    }, [f, c]), x.useEffect(() => {
      const P = () => p({});
      return document.addEventListener(xo, P), () => document.removeEventListener(xo, P);
    }, []), /* @__PURE__ */ u.jsx(
      Q.div,
      {
        ...l,
        ref: y,
        style: {
          pointerEvents: w ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: X(e.onFocusCapture, D.onFocusCapture),
        onBlurCapture: X(e.onBlurCapture, D.onBlurCapture),
        onPointerDownCapture: X(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
ts.displayName = sh;
var lh = "DismissableLayerBranch", ch = x.forwardRef((e, t) => {
  const n = x.useContext(ml), r = x.useRef(null), o = fe(t, r);
  return x.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ u.jsx(Q.div, { ...e, ref: o });
});
ch.displayName = lh;
function uh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ft(e), r = x.useRef(!1), o = x.useRef(() => {
  });
  return x.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          gl(
            ih,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function dh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ft(e), r = x.useRef(!1);
  return x.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && gl(ah, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function pi() {
  const e = new CustomEvent(xo);
  document.dispatchEvent(e);
}
function gl(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? rh(o, i) : o.dispatchEvent(i);
}
var Kr = 0;
function yl() {
  x.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? mi()), document.body.insertAdjacentElement("beforeend", e[1] ?? mi()), Kr++, () => {
      Kr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Kr--;
    };
  }, []);
}
function mi() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Gr = "focusScope.autoFocusOnMount", Yr = "focusScope.autoFocusOnUnmount", gi = { bubbles: !1, cancelable: !0 }, fh = "FocusScope", ns = x.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...s
  } = e, [a, l] = x.useState(null), c = ft(o), f = ft(i), d = x.useRef(null), h = fe(t, (m) => l(m)), p = x.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  x.useEffect(() => {
    if (r) {
      let m = function(w) {
        if (p.paused || !a) return;
        const S = w.target;
        a.contains(S) ? d.current = S : ct(d.current, { select: !0 });
      }, g = function(w) {
        if (p.paused || !a) return;
        const S = w.relatedTarget;
        S !== null && (a.contains(S) || ct(d.current, { select: !0 }));
      }, v = function(w) {
        if (document.activeElement === document.body)
          for (const C of w)
            C.removedNodes.length > 0 && ct(a);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", g);
      const b = new MutationObserver(v);
      return a && b.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", g), b.disconnect();
      };
    }
  }, [r, a, p.paused]), x.useEffect(() => {
    if (a) {
      vi.add(p);
      const m = document.activeElement;
      if (!a.contains(m)) {
        const v = new CustomEvent(Gr, gi);
        a.addEventListener(Gr, c), a.dispatchEvent(v), v.defaultPrevented || (hh(vh(vl(a)), { select: !0 }), document.activeElement === m && ct(a));
      }
      return () => {
        a.removeEventListener(Gr, c), setTimeout(() => {
          const v = new CustomEvent(Yr, gi);
          a.addEventListener(Yr, f), a.dispatchEvent(v), v.defaultPrevented || ct(m ?? document.body, { select: !0 }), a.removeEventListener(Yr, f), vi.remove(p);
        }, 0);
      };
    }
  }, [a, c, f, p]);
  const y = x.useCallback(
    (m) => {
      if (!n && !r || p.paused) return;
      const g = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, v = document.activeElement;
      if (g && v) {
        const b = m.currentTarget, [w, S] = ph(b);
        w && S ? !m.shiftKey && v === S ? (m.preventDefault(), n && ct(w, { select: !0 })) : m.shiftKey && v === w && (m.preventDefault(), n && ct(S, { select: !0 })) : v === b && m.preventDefault();
      }
    },
    [n, r, p.paused]
  );
  return /* @__PURE__ */ u.jsx(Q.div, { tabIndex: -1, ...s, ref: h, onKeyDown: y });
});
ns.displayName = fh;
function hh(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ct(r, { select: t }), document.activeElement !== n) return;
}
function ph(e) {
  const t = vl(e), n = yi(t, e), r = yi(t.reverse(), e);
  return [n, r];
}
function vl(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function yi(e, t) {
  for (const n of e)
    if (!mh(n, { upTo: t })) return n;
}
function mh(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function gh(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ct(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && gh(e) && t && e.select();
  }
}
var vi = yh();
function yh() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = xi(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = xi(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function xi(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function vh(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ce = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {
}, xh = x[" useId ".trim().toString()] || (() => {
}), bh = 0;
function dt(e) {
  const [t, n] = x.useState(xh());
  return Ce(() => {
    n((r) => r ?? String(bh++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const wh = ["top", "right", "bottom", "left"], ht = Math.min, Pe = Math.max, hr = Math.round, $n = Math.floor, Ue = (e) => ({
  x: e,
  y: e
}), Sh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ch = {
  start: "end",
  end: "start"
};
function bo(e, t, n) {
  return Pe(e, ht(t, n));
}
function et(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function tt(e) {
  return e.split("-")[0];
}
function nn(e) {
  return e.split("-")[1];
}
function rs(e) {
  return e === "x" ? "y" : "x";
}
function os(e) {
  return e === "y" ? "height" : "width";
}
const Dh = /* @__PURE__ */ new Set(["top", "bottom"]);
function $e(e) {
  return Dh.has(tt(e)) ? "y" : "x";
}
function ss(e) {
  return rs($e(e));
}
function Th(e, t, n) {
  n === void 0 && (n = !1);
  const r = nn(e), o = ss(e), i = os(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = pr(s)), [s, pr(s)];
}
function Ph(e) {
  const t = pr(e);
  return [wo(e), t, wo(t)];
}
function wo(e) {
  return e.replace(/start|end/g, (t) => Ch[t]);
}
const bi = ["left", "right"], wi = ["right", "left"], Ah = ["top", "bottom"], Nh = ["bottom", "top"];
function Eh(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? wi : bi : t ? bi : wi;
    case "left":
    case "right":
      return t ? Ah : Nh;
    default:
      return [];
  }
}
function Mh(e, t, n, r) {
  const o = nn(e);
  let i = Eh(tt(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(wo)))), i;
}
function pr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Sh[t]);
}
function jh(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function xl(e) {
  return typeof e != "number" ? jh(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function mr(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Si(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = $e(t), s = ss(t), a = os(s), l = tt(t), c = i === "y", f = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, h = r[a] / 2 - o[a] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (nn(t)) {
    case "start":
      p[s] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      p[s] += h * (n && c ? -1 : 1);
      break;
  }
  return p;
}
const kh = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: d
  } = Si(c, r, l), h = r, p = {}, y = 0;
  for (let m = 0; m < a.length; m++) {
    const {
      name: g,
      fn: v
    } = a[m], {
      x: b,
      y: w,
      data: S,
      reset: C
    } = await v({
      x: f,
      y: d,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: p,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = b ?? f, d = w ?? d, p = {
      ...p,
      [g]: {
        ...p[g],
        ...S
      }
    }, C && y <= 50 && (y++, typeof C == "object" && (C.placement && (h = C.placement), C.rects && (c = C.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: f,
      y: d
    } = Si(c, h, l)), m = -1);
  }
  return {
    x: f,
    y: d,
    placement: h,
    strategy: o,
    middlewareData: p
  };
};
async function Sn(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: d = "floating",
    altBoundary: h = !1,
    padding: p = 0
  } = et(t, e), y = xl(p), g = a[h ? d === "floating" ? "reference" : "floating" : d], v = mr(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(g))) == null || n ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: f,
    strategy: l
  })), b = d === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, w = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), S = await (i.isElement == null ? void 0 : i.isElement(w)) ? await (i.getScale == null ? void 0 : i.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = mr(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: w,
    strategy: l
  }) : b);
  return {
    top: (v.top - C.top + y.top) / S.y,
    bottom: (C.bottom - v.bottom + y.bottom) / S.y,
    left: (v.left - C.left + y.left) / S.x,
    right: (C.right - v.right + y.right) / S.x
  };
}
const Rh = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: l
    } = t, {
      element: c,
      padding: f = 0
    } = et(e, t) || {};
    if (c == null)
      return {};
    const d = xl(f), h = {
      x: n,
      y: r
    }, p = ss(o), y = os(p), m = await s.getDimensions(c), g = p === "y", v = g ? "top" : "left", b = g ? "bottom" : "right", w = g ? "clientHeight" : "clientWidth", S = i.reference[y] + i.reference[p] - h[p] - i.floating[y], C = h[p] - i.reference[p], D = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let P = D ? D[w] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(D))) && (P = a.floating[w] || i.floating[y]);
    const T = S / 2 - C / 2, R = P / 2 - m[y] / 2 - 1, O = ht(d[v], R), N = ht(d[b], R), j = O, V = P - m[y] - N, B = P / 2 - m[y] / 2 + T, H = bo(j, B, V), A = !l.arrow && nn(o) != null && B !== H && i.reference[y] / 2 - (B < j ? O : N) - m[y] / 2 < 0, _ = A ? B < j ? B - j : B - V : 0;
    return {
      [p]: h[p] + _,
      data: {
        [p]: H,
        centerOffset: B - H - _,
        ...A && {
          alignmentOffset: _
        }
      },
      reset: A
    };
  }
}), Lh = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: l,
        elements: c
      } = t, {
        mainAxis: f = !0,
        crossAxis: d = !0,
        fallbackPlacements: h,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: m = !0,
        ...g
      } = et(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const v = tt(o), b = $e(a), w = tt(a) === a, S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), C = h || (w || !m ? [pr(a)] : Ph(a)), D = y !== "none";
      !h && D && C.push(...Mh(a, m, y, S));
      const P = [a, ...C], T = await Sn(t, g), R = [];
      let O = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (f && R.push(T[v]), d) {
        const B = Th(o, s, S);
        R.push(T[B[0]], T[B[1]]);
      }
      if (O = [...O, {
        placement: o,
        overflows: R
      }], !R.every((B) => B <= 0)) {
        var N, j;
        const B = (((N = i.flip) == null ? void 0 : N.index) || 0) + 1, H = P[B];
        if (H && (!(d === "alignment" ? b !== $e(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        O.every((k) => $e(k.placement) === b ? k.overflows[0] > 0 : !0)))
          return {
            data: {
              index: B,
              overflows: O
            },
            reset: {
              placement: H
            }
          };
        let A = (j = O.filter((_) => _.overflows[0] <= 0).sort((_, k) => _.overflows[1] - k.overflows[1])[0]) == null ? void 0 : j.placement;
        if (!A)
          switch (p) {
            case "bestFit": {
              var V;
              const _ = (V = O.filter((k) => {
                if (D) {
                  const z = $e(k.placement);
                  return z === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  z === "y";
                }
                return !0;
              }).map((k) => [k.placement, k.overflows.filter((z) => z > 0).reduce((z, G) => z + G, 0)]).sort((k, z) => k[1] - z[1])[0]) == null ? void 0 : V[0];
              _ && (A = _);
              break;
            }
            case "initialPlacement":
              A = a;
              break;
          }
        if (o !== A)
          return {
            reset: {
              placement: A
            }
          };
      }
      return {};
    }
  };
};
function Ci(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Di(e) {
  return wh.some((t) => e[t] >= 0);
}
const Ih = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = et(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await Sn(t, {
            ...o,
            elementContext: "reference"
          }), s = Ci(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Di(s)
            }
          };
        }
        case "escaped": {
          const i = await Sn(t, {
            ...o,
            altBoundary: !0
          }), s = Ci(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Di(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, bl = /* @__PURE__ */ new Set(["left", "top"]);
async function Oh(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = tt(n), a = nn(n), l = $e(n) === "y", c = bl.has(s) ? -1 : 1, f = i && l ? -1 : 1, d = et(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: y
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof y == "number" && (p = a === "end" ? y * -1 : y), l ? {
    x: p * f,
    y: h * c
  } : {
    x: h * c,
    y: p * f
  };
}
const Vh = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: a
      } = t, l = await Oh(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, Fh = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (g) => {
            let {
              x: v,
              y: b
            } = g;
            return {
              x: v,
              y: b
            };
          }
        },
        ...l
      } = et(e, t), c = {
        x: n,
        y: r
      }, f = await Sn(t, l), d = $e(tt(o)), h = rs(d);
      let p = c[h], y = c[d];
      if (i) {
        const g = h === "y" ? "top" : "left", v = h === "y" ? "bottom" : "right", b = p + f[g], w = p - f[v];
        p = bo(b, p, w);
      }
      if (s) {
        const g = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", b = y + f[g], w = y - f[v];
        y = bo(b, y, w);
      }
      const m = a.fn({
        ...t,
        [h]: p,
        [d]: y
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r,
          enabled: {
            [h]: i,
            [d]: s
          }
        }
      };
    }
  };
}, _h = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: s
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = et(e, t), f = {
        x: n,
        y: r
      }, d = $e(o), h = rs(d);
      let p = f[h], y = f[d];
      const m = et(a, t), g = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (l) {
        const w = h === "y" ? "height" : "width", S = i.reference[h] - i.floating[w] + g.mainAxis, C = i.reference[h] + i.reference[w] - g.mainAxis;
        p < S ? p = S : p > C && (p = C);
      }
      if (c) {
        var v, b;
        const w = h === "y" ? "width" : "height", S = bl.has(tt(o)), C = i.reference[d] - i.floating[w] + (S && ((v = s.offset) == null ? void 0 : v[d]) || 0) + (S ? 0 : g.crossAxis), D = i.reference[d] + i.reference[w] + (S ? 0 : ((b = s.offset) == null ? void 0 : b[d]) || 0) - (S ? g.crossAxis : 0);
        y < C ? y = C : y > D && (y = D);
      }
      return {
        [h]: p,
        [d]: y
      };
    }
  };
}, Bh = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: s,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...c
      } = et(e, t), f = await Sn(t, c), d = tt(o), h = nn(o), p = $e(o) === "y", {
        width: y,
        height: m
      } = i.floating;
      let g, v;
      d === "top" || d === "bottom" ? (g = d, v = h === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = d, g = h === "end" ? "top" : "bottom");
      const b = m - f.top - f.bottom, w = y - f.left - f.right, S = ht(m - f[g], b), C = ht(y - f[v], w), D = !t.middlewareData.shift;
      let P = S, T = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = w), (r = t.middlewareData.shift) != null && r.enabled.y && (P = b), D && !h) {
        const O = Pe(f.left, 0), N = Pe(f.right, 0), j = Pe(f.top, 0), V = Pe(f.bottom, 0);
        p ? T = y - 2 * (O !== 0 || N !== 0 ? O + N : Pe(f.left, f.right)) : P = m - 2 * (j !== 0 || V !== 0 ? j + V : Pe(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: T,
        availableHeight: P
      });
      const R = await s.getDimensions(a.floating);
      return y !== R.width || m !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Nr() {
  return typeof window < "u";
}
function rn(e) {
  return wl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ae(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ge(e) {
  var t;
  return (t = (wl(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function wl(e) {
  return Nr() ? e instanceof Node || e instanceof Ae(e).Node : !1;
}
function Ve(e) {
  return Nr() ? e instanceof Element || e instanceof Ae(e).Element : !1;
}
function Ke(e) {
  return Nr() ? e instanceof HTMLElement || e instanceof Ae(e).HTMLElement : !1;
}
function Ti(e) {
  return !Nr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ae(e).ShadowRoot;
}
const $h = /* @__PURE__ */ new Set(["inline", "contents"]);
function jn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Fe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !$h.has(o);
}
const zh = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Uh(e) {
  return zh.has(rn(e));
}
const Wh = [":popover-open", ":modal"];
function Er(e) {
  return Wh.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Hh = ["transform", "translate", "scale", "rotate", "perspective"], Kh = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Gh = ["paint", "layout", "strict", "content"];
function is(e) {
  const t = as(), n = Ve(e) ? Fe(e) : e;
  return Hh.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Kh.some((r) => (n.willChange || "").includes(r)) || Gh.some((r) => (n.contain || "").includes(r));
}
function Yh(e) {
  let t = pt(e);
  for (; Ke(t) && !Gt(t); ) {
    if (is(t))
      return t;
    if (Er(t))
      return null;
    t = pt(t);
  }
  return null;
}
function as() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const qh = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Gt(e) {
  return qh.has(rn(e));
}
function Fe(e) {
  return Ae(e).getComputedStyle(e);
}
function Mr(e) {
  return Ve(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function pt(e) {
  if (rn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ti(e) && e.host || // Fallback.
    Ge(e)
  );
  return Ti(t) ? t.host : t;
}
function Sl(e) {
  const t = pt(e);
  return Gt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ke(t) && jn(t) ? t : Sl(t);
}
function Cn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Sl(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ae(o);
  if (i) {
    const a = So(s);
    return t.concat(s, s.visualViewport || [], jn(o) ? o : [], a && n ? Cn(a) : []);
  }
  return t.concat(o, Cn(o, [], n));
}
function So(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Cl(e) {
  const t = Fe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ke(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = hr(n) !== i || hr(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function ls(e) {
  return Ve(e) ? e : e.contextElement;
}
function Ht(e) {
  const t = ls(e);
  if (!Ke(t))
    return Ue(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Cl(t);
  let s = (i ? hr(n.width) : n.width) / r, a = (i ? hr(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Xh = /* @__PURE__ */ Ue(0);
function Dl(e) {
  const t = Ae(e);
  return !as() || !t.visualViewport ? Xh : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Zh(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ae(e) ? !1 : t;
}
function Et(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = ls(e);
  let s = Ue(1);
  t && (r ? Ve(r) && (s = Ht(r)) : s = Ht(e));
  const a = Zh(i, n, r) ? Dl(i) : Ue(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, f = o.width / s.x, d = o.height / s.y;
  if (i) {
    const h = Ae(i), p = r && Ve(r) ? Ae(r) : r;
    let y = h, m = So(y);
    for (; m && r && p !== y; ) {
      const g = Ht(m), v = m.getBoundingClientRect(), b = Fe(m), w = v.left + (m.clientLeft + parseFloat(b.paddingLeft)) * g.x, S = v.top + (m.clientTop + parseFloat(b.paddingTop)) * g.y;
      l *= g.x, c *= g.y, f *= g.x, d *= g.y, l += w, c += S, y = Ae(m), m = So(y);
    }
  }
  return mr({
    width: f,
    height: d,
    x: l,
    y: c
  });
}
function cs(e, t) {
  const n = Mr(e).scrollLeft;
  return t ? t.left + n : Et(Ge(e)).left + n;
}
function Tl(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    cs(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function Jh(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Ge(r), a = t ? Er(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Ue(1);
  const f = Ue(0), d = Ke(r);
  if ((d || !d && !i) && ((rn(r) !== "body" || jn(s)) && (l = Mr(r)), Ke(r))) {
    const p = Et(r);
    c = Ht(r), f.x = p.x + r.clientLeft, f.y = p.y + r.clientTop;
  }
  const h = s && !d && !i ? Tl(s, l, !0) : Ue(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + f.x + h.x,
    y: n.y * c.y - l.scrollTop * c.y + f.y + h.y
  };
}
function Qh(e) {
  return Array.from(e.getClientRects());
}
function ep(e) {
  const t = Ge(e), n = Mr(e), r = e.ownerDocument.body, o = Pe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Pe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + cs(e);
  const a = -n.scrollTop;
  return Fe(r).direction === "rtl" && (s += Pe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function tp(e, t) {
  const n = Ae(e), r = Ge(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const c = as();
    (!c || c && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const np = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function rp(e, t) {
  const n = Et(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Ke(e) ? Ht(e) : Ue(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function Pi(e, t, n) {
  let r;
  if (t === "viewport")
    r = tp(e, n);
  else if (t === "document")
    r = ep(Ge(e));
  else if (Ve(t))
    r = rp(t, n);
  else {
    const o = Dl(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return mr(r);
}
function Pl(e, t) {
  const n = pt(e);
  return n === t || !Ve(n) || Gt(n) ? !1 : Fe(n).position === "fixed" || Pl(n, t);
}
function op(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Cn(e, [], !1).filter((a) => Ve(a) && rn(a) !== "body"), o = null;
  const i = Fe(e).position === "fixed";
  let s = i ? pt(e) : e;
  for (; Ve(s) && !Gt(s); ) {
    const a = Fe(s), l = is(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && np.has(o.position) || jn(s) && !l && Pl(e, s)) ? r = r.filter((f) => f !== s) : o = a, s = pt(s);
  }
  return t.set(e, r), r;
}
function sp(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Er(t) ? [] : op(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((c, f) => {
    const d = Pi(t, f, o);
    return c.top = Pe(d.top, c.top), c.right = ht(d.right, c.right), c.bottom = ht(d.bottom, c.bottom), c.left = Pe(d.left, c.left), c;
  }, Pi(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function ip(e) {
  const {
    width: t,
    height: n
  } = Cl(e);
  return {
    width: t,
    height: n
  };
}
function ap(e, t, n) {
  const r = Ke(t), o = Ge(t), i = n === "fixed", s = Et(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ue(0);
  function c() {
    l.x = cs(o);
  }
  if (r || !r && !i)
    if ((rn(t) !== "body" || jn(o)) && (a = Mr(t)), r) {
      const p = Et(t, !0, i, t);
      l.x = p.x + t.clientLeft, l.y = p.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const f = o && !r && !i ? Tl(o, a) : Ue(0), d = s.left + a.scrollLeft - l.x - f.x, h = s.top + a.scrollTop - l.y - f.y;
  return {
    x: d,
    y: h,
    width: s.width,
    height: s.height
  };
}
function qr(e) {
  return Fe(e).position === "static";
}
function Ai(e, t) {
  if (!Ke(e) || Fe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ge(e) === n && (n = n.ownerDocument.body), n;
}
function Al(e, t) {
  const n = Ae(e);
  if (Er(e))
    return n;
  if (!Ke(e)) {
    let o = pt(e);
    for (; o && !Gt(o); ) {
      if (Ve(o) && !qr(o))
        return o;
      o = pt(o);
    }
    return n;
  }
  let r = Ai(e, t);
  for (; r && Uh(r) && qr(r); )
    r = Ai(r, t);
  return r && Gt(r) && qr(r) && !is(r) ? n : r || Yh(e) || n;
}
const lp = async function(e) {
  const t = this.getOffsetParent || Al, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: ap(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function cp(e) {
  return Fe(e).direction === "rtl";
}
const up = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Jh,
  getDocumentElement: Ge,
  getClippingRect: sp,
  getOffsetParent: Al,
  getElementRects: lp,
  getClientRects: Qh,
  getDimensions: ip,
  getScale: Ht,
  isElement: Ve,
  isRTL: cp
};
function Nl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function dp(e, t) {
  let n = null, r;
  const o = Ge(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const c = e.getBoundingClientRect(), {
      left: f,
      top: d,
      width: h,
      height: p
    } = c;
    if (a || t(), !h || !p)
      return;
    const y = $n(d), m = $n(o.clientWidth - (f + h)), g = $n(o.clientHeight - (d + p)), v = $n(f), w = {
      rootMargin: -y + "px " + -m + "px " + -g + "px " + -v + "px",
      threshold: Pe(0, ht(1, l)) || 1
    };
    let S = !0;
    function C(D) {
      const P = D[0].intersectionRatio;
      if (P !== l) {
        if (!S)
          return s();
        P ? s(!1, P) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      P === 1 && !Nl(c, e.getBoundingClientRect()) && s(), S = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, w);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function fp(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = ls(e), f = o || i ? [...c ? Cn(c) : [], ...Cn(t)] : [];
  f.forEach((v) => {
    o && v.addEventListener("scroll", n, {
      passive: !0
    }), i && v.addEventListener("resize", n);
  });
  const d = c && a ? dp(c, n) : null;
  let h = -1, p = null;
  s && (p = new ResizeObserver((v) => {
    let [b] = v;
    b && b.target === c && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var w;
      (w = p) == null || w.observe(t);
    })), n();
  }), c && !l && p.observe(c), p.observe(t));
  let y, m = l ? Et(e) : null;
  l && g();
  function g() {
    const v = Et(e);
    m && !Nl(m, v) && n(), m = v, y = requestAnimationFrame(g);
  }
  return n(), () => {
    var v;
    f.forEach((b) => {
      o && b.removeEventListener("scroll", n), i && b.removeEventListener("resize", n);
    }), d == null || d(), (v = p) == null || v.disconnect(), p = null, l && cancelAnimationFrame(y);
  };
}
const hp = Vh, pp = Fh, mp = Lh, gp = Bh, yp = Ih, Ni = Rh, vp = _h, xp = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: up,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return kh(e, t, {
    ...o,
    platform: i
  });
};
var bp = typeof document < "u", wp = function() {
}, rr = bp ? tl : wp;
function gr(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!gr(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !gr(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function El(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ei(e, t) {
  const n = El(e);
  return Math.round(t * n) / n;
}
function Xr(e) {
  const t = x.useRef(e);
  return rr(() => {
    t.current = e;
  }), t;
}
function Sp(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: c
  } = e, [f, d] = x.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, p] = x.useState(r);
  gr(h, r) || p(r);
  const [y, m] = x.useState(null), [g, v] = x.useState(null), b = x.useCallback((k) => {
    k !== D.current && (D.current = k, m(k));
  }, []), w = x.useCallback((k) => {
    k !== P.current && (P.current = k, v(k));
  }, []), S = i || y, C = s || g, D = x.useRef(null), P = x.useRef(null), T = x.useRef(f), R = l != null, O = Xr(l), N = Xr(o), j = Xr(c), V = x.useCallback(() => {
    if (!D.current || !P.current)
      return;
    const k = {
      placement: t,
      strategy: n,
      middleware: h
    };
    N.current && (k.platform = N.current), xp(D.current, P.current, k).then((z) => {
      const G = {
        ...z,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: j.current !== !1
      };
      B.current && !gr(T.current, G) && (T.current = G, Pr.flushSync(() => {
        d(G);
      }));
    });
  }, [h, t, n, N, j]);
  rr(() => {
    c === !1 && T.current.isPositioned && (T.current.isPositioned = !1, d((k) => ({
      ...k,
      isPositioned: !1
    })));
  }, [c]);
  const B = x.useRef(!1);
  rr(() => (B.current = !0, () => {
    B.current = !1;
  }), []), rr(() => {
    if (S && (D.current = S), C && (P.current = C), S && C) {
      if (O.current)
        return O.current(S, C, V);
      V();
    }
  }, [S, C, V, O, R]);
  const H = x.useMemo(() => ({
    reference: D,
    floating: P,
    setReference: b,
    setFloating: w
  }), [b, w]), A = x.useMemo(() => ({
    reference: S,
    floating: C
  }), [S, C]), _ = x.useMemo(() => {
    const k = {
      position: n,
      left: 0,
      top: 0
    };
    if (!A.floating)
      return k;
    const z = Ei(A.floating, f.x), G = Ei(A.floating, f.y);
    return a ? {
      ...k,
      transform: "translate(" + z + "px, " + G + "px)",
      ...El(A.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: z,
      top: G
    };
  }, [n, a, A.floating, f.x, f.y]);
  return x.useMemo(() => ({
    ...f,
    update: V,
    refs: H,
    elements: A,
    floatingStyles: _
  }), [f, V, H, A, _]);
}
const Cp = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Ni({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Ni({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Dp = (e, t) => ({
  ...hp(e),
  options: [e, t]
}), Tp = (e, t) => ({
  ...pp(e),
  options: [e, t]
}), Pp = (e, t) => ({
  ...vp(e),
  options: [e, t]
}), Ap = (e, t) => ({
  ...mp(e),
  options: [e, t]
}), Np = (e, t) => ({
  ...gp(e),
  options: [e, t]
}), Ep = (e, t) => ({
  ...yp(e),
  options: [e, t]
}), Mp = (e, t) => ({
  ...Cp(e),
  options: [e, t]
});
var jp = "Arrow", Ml = x.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ u.jsx(
    Q.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ u.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Ml.displayName = jp;
var kp = Ml;
function Rp(e) {
  const [t, n] = x.useState(void 0);
  return Ce(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          s = c.inlineSize, a = c.blockSize;
        } else
          s = e.offsetWidth, a = e.offsetHeight;
        n({ width: s, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var us = "Popper", [jl, kl] = tn(us), [Lp, Rl] = jl(us), Ll = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = x.useState(null);
  return /* @__PURE__ */ u.jsx(Lp, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Ll.displayName = us;
var Il = "PopperAnchor", Ol = x.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = Rl(Il, n), s = x.useRef(null), a = fe(t, s), l = x.useRef(null);
    return x.useEffect(() => {
      const c = l.current;
      l.current = (r == null ? void 0 : r.current) || s.current, c !== l.current && i.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ u.jsx(Q.div, { ...o, ref: a });
  }
);
Ol.displayName = Il;
var ds = "PopperContent", [Ip, Op] = jl(ds), Vl = x.forwardRef(
  (e, t) => {
    var F, Z, re, L, M, I;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: f = 0,
      sticky: d = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: p = "optimized",
      onPlaced: y,
      ...m
    } = e, g = Rl(ds, n), [v, b] = x.useState(null), w = fe(t, (Y) => b(Y)), [S, C] = x.useState(null), D = Rp(S), P = (D == null ? void 0 : D.width) ?? 0, T = (D == null ? void 0 : D.height) ?? 0, R = r + (i !== "center" ? "-" + i : ""), O = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, N = Array.isArray(c) ? c : [c], j = N.length > 0, V = {
      padding: O,
      boundary: N.filter(Fp),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: j
    }, { refs: B, floatingStyles: H, placement: A, isPositioned: _, middlewareData: k } = Sp({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: R,
      whileElementsMounted: (...Y) => fp(...Y, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        Dp({ mainAxis: o + T, alignmentAxis: s }),
        l && Tp({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? Pp() : void 0,
          ...V
        }),
        l && Ap({ ...V }),
        Np({
          ...V,
          apply: ({ elements: Y, rects: q, availableWidth: ce, availableHeight: ie }) => {
            const { width: ve, height: Ye } = q.reference, rt = Y.floating.style;
            rt.setProperty("--radix-popper-available-width", `${ce}px`), rt.setProperty("--radix-popper-available-height", `${ie}px`), rt.setProperty("--radix-popper-anchor-width", `${ve}px`), rt.setProperty("--radix-popper-anchor-height", `${Ye}px`);
          }
        }),
        S && Mp({ element: S, padding: a }),
        _p({ arrowWidth: P, arrowHeight: T }),
        h && Ep({ strategy: "referenceHidden", ...V })
      ]
    }), [z, G] = Bl(A), ee = ft(y);
    Ce(() => {
      _ && (ee == null || ee());
    }, [_, ee]);
    const me = (F = k.arrow) == null ? void 0 : F.x, De = (Z = k.arrow) == null ? void 0 : Z.y, ne = ((re = k.arrow) == null ? void 0 : re.centerOffset) !== 0, [Te, le] = x.useState();
    return Ce(() => {
      v && le(window.getComputedStyle(v).zIndex);
    }, [v]), /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: B.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: _ ? H.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Te,
          "--radix-popper-transform-origin": [
            (L = k.transformOrigin) == null ? void 0 : L.x,
            (M = k.transformOrigin) == null ? void 0 : M.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((I = k.hide) == null ? void 0 : I.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ u.jsx(
          Ip,
          {
            scope: n,
            placedSide: z,
            onArrowChange: C,
            arrowX: me,
            arrowY: De,
            shouldHideArrow: ne,
            children: /* @__PURE__ */ u.jsx(
              Q.div,
              {
                "data-side": z,
                "data-align": G,
                ...m,
                ref: w,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: _ ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Vl.displayName = ds;
var Fl = "PopperArrow", Vp = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, _l = x.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = Op(Fl, r), s = Vp[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ u.jsx(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ u.jsx(
          kp,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
_l.displayName = Fl;
function Fp(e) {
  return e !== null;
}
var _p = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, v, b;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [c, f] = Bl(n), d = { start: "0%", center: "50%", end: "100%" }[f], h = (((v = o.arrow) == null ? void 0 : v.x) ?? 0) + a / 2, p = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let y = "", m = "";
    return c === "bottom" ? (y = s ? d : `${h}px`, m = `${-l}px`) : c === "top" ? (y = s ? d : `${h}px`, m = `${r.floating.height + l}px`) : c === "right" ? (y = `${-l}px`, m = s ? d : `${p}px`) : c === "left" && (y = `${r.floating.width + l}px`, m = s ? d : `${p}px`), { data: { x: y, y: m } };
  }
});
function Bl(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Bp = Ll, $p = Ol, zp = Vl, Up = _l, Wp = "Portal", fs = x.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, i] = x.useState(!1);
  Ce(() => i(!0), []);
  const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return s ? sf.createPortal(/* @__PURE__ */ u.jsx(Q.div, { ...r, ref: t }), s) : null;
});
fs.displayName = Wp;
var Hp = x[" useInsertionEffect ".trim().toString()] || Ce;
function Dn({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, s] = Kp({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o;
  {
    const f = x.useRef(e !== void 0);
    x.useEffect(() => {
      const d = f.current;
      d !== a && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = a;
    }, [a, r]);
  }
  const c = x.useCallback(
    (f) => {
      var d;
      if (a) {
        const h = Gp(f) ? f(e) : f;
        h !== e && ((d = s.current) == null || d.call(s, h));
      } else
        i(f);
    },
    [a, e, i, s]
  );
  return [l, c];
}
function Kp({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = x.useState(e), o = x.useRef(n), i = x.useRef(t);
  return Hp(() => {
    i.current = t;
  }, [t]), x.useEffect(() => {
    var s;
    o.current !== n && ((s = i.current) == null || s.call(i, n), o.current = n);
  }, [n, o]), [n, r, i];
}
function Gp(e) {
  return typeof e == "function";
}
function Yp(e) {
  const t = x.useRef({ value: e, previous: e });
  return x.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var $l = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), qp = "VisuallyHidden", Xp = x.forwardRef(
  (e, t) => /* @__PURE__ */ u.jsx(
    Q.span,
    {
      ...e,
      ref: t,
      style: { ...$l, ...e.style }
    }
  )
);
Xp.displayName = qp;
var Zp = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ot = /* @__PURE__ */ new WeakMap(), zn = /* @__PURE__ */ new WeakMap(), Un = {}, Zr = 0, zl = function(e) {
  return e && (e.host || zl(e.parentNode));
}, Jp = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = zl(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Qp = function(e, t, n, r) {
  var o = Jp(t, Array.isArray(e) ? e : [e]);
  Un[n] || (Un[n] = /* @__PURE__ */ new WeakMap());
  var i = Un[n], s = [], a = /* @__PURE__ */ new Set(), l = new Set(o), c = function(d) {
    !d || a.has(d) || (a.add(d), c(d.parentNode));
  };
  o.forEach(c);
  var f = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(h) {
      if (a.has(h))
        f(h);
      else
        try {
          var p = h.getAttribute(r), y = p !== null && p !== "false", m = (Ot.get(h) || 0) + 1, g = (i.get(h) || 0) + 1;
          Ot.set(h, m), i.set(h, g), s.push(h), m === 1 && y && zn.set(h, !0), g === 1 && h.setAttribute(n, "true"), y || h.setAttribute(r, "true");
        } catch (v) {
          console.error("aria-hidden: cannot operate on ", h, v);
        }
    });
  };
  return f(t), a.clear(), Zr++, function() {
    s.forEach(function(d) {
      var h = Ot.get(d) - 1, p = i.get(d) - 1;
      Ot.set(d, h), i.set(d, p), h || (zn.has(d) || d.removeAttribute(r), zn.delete(d)), p || d.removeAttribute(n);
    }), Zr--, Zr || (Ot = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ new WeakMap(), zn = /* @__PURE__ */ new WeakMap(), Un = {});
  };
}, Ul = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Zp(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Qp(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Be = function() {
  return Be = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Be.apply(this, arguments);
};
function Wl(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function em(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var or = "right-scroll-bar-position", sr = "width-before-scroll-bar", tm = "with-scroll-bars-hidden", nm = "--removed-body-scroll-bar-size";
function Jr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function rm(e, t) {
  var n = W(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var om = typeof window < "u" ? x.useLayoutEffect : x.useEffect, Mi = /* @__PURE__ */ new WeakMap();
function sm(e, t) {
  var n = rm(null, function(r) {
    return e.forEach(function(o) {
      return Jr(o, r);
    });
  });
  return om(function() {
    var r = Mi.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(a) {
        i.has(a) || Jr(a, null);
      }), i.forEach(function(a) {
        o.has(a) || Jr(a, s);
      });
    }
    Mi.set(n, e);
  }, [e]), n;
}
function im(e) {
  return e;
}
function am(e, t) {
  t === void 0 && (t = im);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var s = t(i, r);
      return n.push(s), function() {
        n = n.filter(function(a) {
          return a !== s;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(i);
      }
      n = {
        push: function(a) {
          return i(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var s = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(i), s = n;
      }
      var l = function() {
        var f = s;
        s = [], f.forEach(i);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(f) {
          s.push(f), c();
        },
        filter: function(f) {
          return s = s.filter(f), n;
        }
      };
    }
  };
  return o;
}
function lm(e) {
  e === void 0 && (e = {});
  var t = am(null);
  return t.options = Be({ async: !0, ssr: !1 }, e), t;
}
var Hl = function(e) {
  var t = e.sideCar, n = Wl(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return x.createElement(r, Be({}, n));
};
Hl.isSideCarExport = !0;
function cm(e, t) {
  return e.useMedium(t), Hl;
}
var Kl = lm(), Qr = function() {
}, jr = x.forwardRef(function(e, t) {
  var n = x.useRef(null), r = x.useState({
    onScrollCapture: Qr,
    onWheelCapture: Qr,
    onTouchMoveCapture: Qr
  }), o = r[0], i = r[1], s = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, f = e.enabled, d = e.shards, h = e.sideCar, p = e.noRelative, y = e.noIsolation, m = e.inert, g = e.allowPinchZoom, v = e.as, b = v === void 0 ? "div" : v, w = e.gapMode, S = Wl(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = h, D = sm([n, t]), P = Be(Be({}, S), o);
  return x.createElement(
    x.Fragment,
    null,
    f && x.createElement(C, { sideCar: Kl, removeScrollBar: c, shards: d, noRelative: p, noIsolation: y, inert: m, setCallbacks: i, allowPinchZoom: !!g, lockRef: n, gapMode: w }),
    s ? x.cloneElement(x.Children.only(a), Be(Be({}, P), { ref: D })) : x.createElement(b, Be({}, P, { className: l, ref: D }), a)
  );
});
jr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
jr.classNames = {
  fullWidth: sr,
  zeroRight: or
};
var um = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function dm() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = um();
  return t && e.setAttribute("nonce", t), e;
}
function fm(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function hm(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var pm = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = dm()) && (fm(t, n), hm(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, mm = function() {
  var e = pm();
  return function(t, n) {
    x.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Gl = function() {
  var e = mm(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, gm = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, eo = function(e) {
  return parseInt(e || "", 10) || 0;
}, ym = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [eo(n), eo(r), eo(o)];
}, vm = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return gm;
  var t = ym(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, xm = Gl(), Kt = "data-scroll-locked", bm = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(tm, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Kt, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(or, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(sr, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(or, " .").concat(or, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(sr, " .").concat(sr, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Kt, `] {
    `).concat(nm, ": ").concat(a, `px;
  }
`);
}, ji = function() {
  var e = parseInt(document.body.getAttribute(Kt) || "0", 10);
  return isFinite(e) ? e : 0;
}, wm = function() {
  x.useEffect(function() {
    return document.body.setAttribute(Kt, (ji() + 1).toString()), function() {
      var e = ji() - 1;
      e <= 0 ? document.body.removeAttribute(Kt) : document.body.setAttribute(Kt, e.toString());
    };
  }, []);
}, Sm = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  wm();
  var i = x.useMemo(function() {
    return vm(o);
  }, [o]);
  return x.createElement(xm, { styles: bm(i, !t, o, n ? "" : "!important") });
}, Co = !1;
if (typeof window < "u")
  try {
    var Wn = Object.defineProperty({}, "passive", {
      get: function() {
        return Co = !0, !0;
      }
    });
    window.addEventListener("test", Wn, Wn), window.removeEventListener("test", Wn, Wn);
  } catch {
    Co = !1;
  }
var Vt = Co ? { passive: !1 } : !1, Cm = function(e) {
  return e.tagName === "TEXTAREA";
}, Yl = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Cm(e) && n[t] === "visible")
  );
}, Dm = function(e) {
  return Yl(e, "overflowY");
}, Tm = function(e) {
  return Yl(e, "overflowX");
}, ki = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = ql(e, r);
    if (o) {
      var i = Xl(e, r), s = i[1], a = i[2];
      if (s > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Pm = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Am = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, ql = function(e, t) {
  return e === "v" ? Dm(t) : Tm(t);
}, Xl = function(e, t) {
  return e === "v" ? Pm(t) : Am(t);
}, Nm = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Em = function(e, t, n, r, o) {
  var i = Nm(e, window.getComputedStyle(t).direction), s = i * r, a = n.target, l = t.contains(a), c = !1, f = s > 0, d = 0, h = 0;
  do {
    if (!a)
      break;
    var p = Xl(e, a), y = p[0], m = p[1], g = p[2], v = m - g - i * y;
    (y || v) && ql(e, a) && (d += v, h += y);
    var b = a.parentNode;
    a = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (f && Math.abs(d) < 1 || !f && Math.abs(h) < 1) && (c = !0), c;
}, Hn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ri = function(e) {
  return [e.deltaX, e.deltaY];
}, Li = function(e) {
  return e && "current" in e ? e.current : e;
}, Mm = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, jm = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, km = 0, Ft = [];
function Rm(e) {
  var t = x.useRef([]), n = x.useRef([0, 0]), r = x.useRef(), o = x.useState(km++)[0], i = x.useState(Gl)[0], s = x.useRef(e);
  x.useEffect(function() {
    s.current = e;
  }, [e]), x.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = em([e.lockRef.current], (e.shards || []).map(Li), !0).filter(Boolean);
      return m.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = x.useCallback(function(m, g) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !s.current.allowPinchZoom;
    var v = Hn(m), b = n.current, w = "deltaX" in m ? m.deltaX : b[0] - v[0], S = "deltaY" in m ? m.deltaY : b[1] - v[1], C, D = m.target, P = Math.abs(w) > Math.abs(S) ? "h" : "v";
    if ("touches" in m && P === "h" && D.type === "range")
      return !1;
    var T = ki(P, D);
    if (!T)
      return !0;
    if (T ? C = P : (C = P === "v" ? "h" : "v", T = ki(P, D)), !T)
      return !1;
    if (!r.current && "changedTouches" in m && (w || S) && (r.current = C), !C)
      return !0;
    var R = r.current || C;
    return Em(R, g, m, R === "h" ? w : S);
  }, []), l = x.useCallback(function(m) {
    var g = m;
    if (!(!Ft.length || Ft[Ft.length - 1] !== i)) {
      var v = "deltaY" in g ? Ri(g) : Hn(g), b = t.current.filter(function(C) {
        return C.name === g.type && (C.target === g.target || g.target === C.shadowParent) && Mm(C.delta, v);
      })[0];
      if (b && b.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!b) {
        var w = (s.current.shards || []).map(Li).filter(Boolean).filter(function(C) {
          return C.contains(g.target);
        }), S = w.length > 0 ? a(g, w[0]) : !s.current.noIsolation;
        S && g.cancelable && g.preventDefault();
      }
    }
  }, []), c = x.useCallback(function(m, g, v, b) {
    var w = { name: m, delta: g, target: v, should: b, shadowParent: Lm(v) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== w;
      });
    }, 1);
  }, []), f = x.useCallback(function(m) {
    n.current = Hn(m), r.current = void 0;
  }, []), d = x.useCallback(function(m) {
    c(m.type, Ri(m), m.target, a(m, e.lockRef.current));
  }, []), h = x.useCallback(function(m) {
    c(m.type, Hn(m), m.target, a(m, e.lockRef.current));
  }, []);
  x.useEffect(function() {
    return Ft.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", l, Vt), document.addEventListener("touchmove", l, Vt), document.addEventListener("touchstart", f, Vt), function() {
      Ft = Ft.filter(function(m) {
        return m !== i;
      }), document.removeEventListener("wheel", l, Vt), document.removeEventListener("touchmove", l, Vt), document.removeEventListener("touchstart", f, Vt);
    };
  }, []);
  var p = e.removeScrollBar, y = e.inert;
  return x.createElement(
    x.Fragment,
    null,
    y ? x.createElement(i, { styles: jm(o) }) : null,
    p ? x.createElement(Sm, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Lm(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Im = cm(Kl, Rm);
var hs = x.forwardRef(function(e, t) {
  return x.createElement(jr, Be({}, e, { ref: t, sideCar: Im }));
});
hs.classNames = jr.classNames;
var Om = [" ", "Enter", "ArrowUp", "ArrowDown"], Vm = [" ", "Enter"], Mt = "Select", [kr, Rr, Fm] = pl(Mt), [on, iw] = tn(Mt, [
  Fm,
  kl
]), Lr = kl(), [_m, vt] = on(Mt), [Bm, $m] = on(Mt), Zl = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    value: s,
    defaultValue: a,
    onValueChange: l,
    dir: c,
    name: f,
    autoComplete: d,
    disabled: h,
    required: p,
    form: y
  } = e, m = Lr(t), [g, v] = x.useState(null), [b, w] = x.useState(null), [S, C] = x.useState(!1), D = es(c), [P, T] = Dn({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: Mt
  }), [R, O] = Dn({
    prop: s,
    defaultProp: a,
    onChange: l,
    caller: Mt
  }), N = x.useRef(null), j = g ? y || !!g.closest("form") : !0, [V, B] = x.useState(/* @__PURE__ */ new Set()), H = Array.from(V).map((A) => A.props.value).join(";");
  return /* @__PURE__ */ u.jsx(Bp, { ...m, children: /* @__PURE__ */ u.jsxs(
    _m,
    {
      required: p,
      scope: t,
      trigger: g,
      onTriggerChange: v,
      valueNode: b,
      onValueNodeChange: w,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: C,
      contentId: dt(),
      value: R,
      onValueChange: O,
      open: P,
      onOpenChange: T,
      dir: D,
      triggerPointerDownPosRef: N,
      disabled: h,
      children: [
        /* @__PURE__ */ u.jsx(kr.Provider, { scope: t, children: /* @__PURE__ */ u.jsx(
          Bm,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: x.useCallback((A) => {
              B((_) => new Set(_).add(A));
            }, []),
            onNativeOptionRemove: x.useCallback((A) => {
              B((_) => {
                const k = new Set(_);
                return k.delete(A), k;
              });
            }, []),
            children: n
          }
        ) }),
        j ? /* @__PURE__ */ u.jsxs(
          xc,
          {
            "aria-hidden": !0,
            required: p,
            tabIndex: -1,
            name: f,
            autoComplete: d,
            value: R,
            onChange: (A) => O(A.target.value),
            disabled: h,
            form: y,
            children: [
              R === void 0 ? /* @__PURE__ */ u.jsx("option", { value: "" }) : null,
              Array.from(V)
            ]
          },
          H
        ) : null
      ]
    }
  ) });
};
Zl.displayName = Mt;
var Jl = "SelectTrigger", Ql = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = Lr(n), s = vt(Jl, n), a = s.disabled || r, l = fe(t, s.onTriggerChange), c = Rr(n), f = x.useRef("touch"), [d, h, p] = wc((m) => {
      const g = c().filter((w) => !w.disabled), v = g.find((w) => w.value === s.value), b = Sc(g, m, v);
      b !== void 0 && s.onValueChange(b.value);
    }), y = (m) => {
      a || (s.onOpenChange(!0), p()), m && (s.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      });
    };
    return /* @__PURE__ */ u.jsx($p, { asChild: !0, ...i, children: /* @__PURE__ */ u.jsx(
      Q.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": s.contentId,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": bc(s.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: X(o.onClick, (m) => {
          m.currentTarget.focus(), f.current !== "mouse" && y(m);
        }),
        onPointerDown: X(o.onPointerDown, (m) => {
          f.current = m.pointerType;
          const g = m.target;
          g.hasPointerCapture(m.pointerId) && g.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && m.pointerType === "mouse" && (y(m), m.preventDefault());
        }),
        onKeyDown: X(o.onKeyDown, (m) => {
          const g = d.current !== "";
          !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && h(m.key), !(g && m.key === " ") && Om.includes(m.key) && (y(), m.preventDefault());
        })
      }
    ) });
  }
);
Ql.displayName = Jl;
var ec = "SelectValue", tc = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: i, placeholder: s = "", ...a } = e, l = vt(ec, n), { onValueNodeHasChildrenChange: c } = l, f = i !== void 0, d = fe(t, l.onValueNodeChange);
    return Ce(() => {
      c(f);
    }, [c, f]), /* @__PURE__ */ u.jsx(
      Q.span,
      {
        ...a,
        ref: d,
        style: { pointerEvents: "none" },
        children: bc(l.value) ? /* @__PURE__ */ u.jsx(u.Fragment, { children: s }) : i
      }
    );
  }
);
tc.displayName = ec;
var zm = "SelectIcon", nc = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ u.jsx(Q.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
nc.displayName = zm;
var Um = "SelectPortal", rc = (e) => /* @__PURE__ */ u.jsx(fs, { asChild: !0, ...e });
rc.displayName = Um;
var jt = "SelectContent", oc = x.forwardRef(
  (e, t) => {
    const n = vt(jt, e.__scopeSelect), [r, o] = x.useState();
    if (Ce(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const i = r;
      return i ? Pr.createPortal(
        /* @__PURE__ */ u.jsx(sc, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx(kr.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ u.jsx(ic, { ...e, ref: t });
  }
);
oc.displayName = jt;
var Le = 10, [sc, xt] = on(jt), Wm = "SelectContentImpl", Hm = /* @__PURE__ */ wn("SelectContent.RemoveScroll"), ic = x.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      //
      // PopperContent props
      side: a,
      sideOffset: l,
      align: c,
      alignOffset: f,
      arrowPadding: d,
      collisionBoundary: h,
      collisionPadding: p,
      sticky: y,
      hideWhenDetached: m,
      avoidCollisions: g,
      //
      ...v
    } = e, b = vt(jt, n), [w, S] = x.useState(null), [C, D] = x.useState(null), P = fe(t, (F) => S(F)), [T, R] = x.useState(null), [O, N] = x.useState(
      null
    ), j = Rr(n), [V, B] = x.useState(!1), H = x.useRef(!1);
    x.useEffect(() => {
      if (w) return Ul(w);
    }, [w]), yl();
    const A = x.useCallback(
      (F) => {
        const [Z, ...re] = j().map((I) => I.ref.current), [L] = re.slice(-1), M = document.activeElement;
        for (const I of F)
          if (I === M || (I == null || I.scrollIntoView({ block: "nearest" }), I === Z && C && (C.scrollTop = 0), I === L && C && (C.scrollTop = C.scrollHeight), I == null || I.focus(), document.activeElement !== M)) return;
      },
      [j, C]
    ), _ = x.useCallback(
      () => A([T, w]),
      [A, T, w]
    );
    x.useEffect(() => {
      V && _();
    }, [V, _]);
    const { onOpenChange: k, triggerPointerDownPosRef: z } = b;
    x.useEffect(() => {
      if (w) {
        let F = { x: 0, y: 0 };
        const Z = (L) => {
          var M, I;
          F = {
            x: Math.abs(Math.round(L.pageX) - (((M = z.current) == null ? void 0 : M.x) ?? 0)),
            y: Math.abs(Math.round(L.pageY) - (((I = z.current) == null ? void 0 : I.y) ?? 0))
          };
        }, re = (L) => {
          F.x <= 10 && F.y <= 10 ? L.preventDefault() : w.contains(L.target) || k(!1), document.removeEventListener("pointermove", Z), z.current = null;
        };
        return z.current !== null && (document.addEventListener("pointermove", Z), document.addEventListener("pointerup", re, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Z), document.removeEventListener("pointerup", re, { capture: !0 });
        };
      }
    }, [w, k, z]), x.useEffect(() => {
      const F = () => k(!1);
      return window.addEventListener("blur", F), window.addEventListener("resize", F), () => {
        window.removeEventListener("blur", F), window.removeEventListener("resize", F);
      };
    }, [k]);
    const [G, ee] = wc((F) => {
      const Z = j().filter((M) => !M.disabled), re = Z.find((M) => M.ref.current === document.activeElement), L = Sc(Z, F, re);
      L && setTimeout(() => L.ref.current.focus());
    }), me = x.useCallback(
      (F, Z, re) => {
        const L = !H.current && !re;
        (b.value !== void 0 && b.value === Z || L) && (R(F), L && (H.current = !0));
      },
      [b.value]
    ), De = x.useCallback(() => w == null ? void 0 : w.focus(), [w]), ne = x.useCallback(
      (F, Z, re) => {
        const L = !H.current && !re;
        (b.value !== void 0 && b.value === Z || L) && N(F);
      },
      [b.value]
    ), Te = r === "popper" ? Do : ac, le = Te === Do ? {
      side: a,
      sideOffset: l,
      align: c,
      alignOffset: f,
      arrowPadding: d,
      collisionBoundary: h,
      collisionPadding: p,
      sticky: y,
      hideWhenDetached: m,
      avoidCollisions: g
    } : {};
    return /* @__PURE__ */ u.jsx(
      sc,
      {
        scope: n,
        content: w,
        viewport: C,
        onViewportChange: D,
        itemRefCallback: me,
        selectedItem: T,
        onItemLeave: De,
        itemTextRefCallback: ne,
        focusSelectedItem: _,
        selectedItemText: O,
        position: r,
        isPositioned: V,
        searchRef: G,
        children: /* @__PURE__ */ u.jsx(hs, { as: Hm, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
          ns,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (F) => {
              F.preventDefault();
            },
            onUnmountAutoFocus: X(o, (F) => {
              var Z;
              (Z = b.trigger) == null || Z.focus({ preventScroll: !0 }), F.preventDefault();
            }),
            children: /* @__PURE__ */ u.jsx(
              ts,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: s,
                onFocusOutside: (F) => F.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ u.jsx(
                  Te,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (F) => F.preventDefault(),
                    ...v,
                    ...le,
                    onPlaced: () => B(!0),
                    ref: P,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...v.style
                    },
                    onKeyDown: X(v.onKeyDown, (F) => {
                      const Z = F.ctrlKey || F.altKey || F.metaKey;
                      if (F.key === "Tab" && F.preventDefault(), !Z && F.key.length === 1 && ee(F.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(F.key)) {
                        let L = j().filter((M) => !M.disabled).map((M) => M.ref.current);
                        if (["ArrowUp", "End"].includes(F.key) && (L = L.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(F.key)) {
                          const M = F.target, I = L.indexOf(M);
                          L = L.slice(I + 1);
                        }
                        setTimeout(() => A(L)), F.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
ic.displayName = Wm;
var Km = "SelectItemAlignedPosition", ac = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = vt(jt, n), s = xt(jt, n), [a, l] = x.useState(null), [c, f] = x.useState(null), d = fe(t, (P) => f(P)), h = Rr(n), p = x.useRef(!1), y = x.useRef(!0), { viewport: m, selectedItem: g, selectedItemText: v, focusSelectedItem: b } = s, w = x.useCallback(() => {
    if (i.trigger && i.valueNode && a && c && m && g && v) {
      const P = i.trigger.getBoundingClientRect(), T = c.getBoundingClientRect(), R = i.valueNode.getBoundingClientRect(), O = v.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const M = O.left - T.left, I = R.left - M, Y = P.left - I, q = P.width + Y, ce = Math.max(q, T.width), ie = window.innerWidth - Le, ve = di(I, [
          Le,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Le, ie - ce)
        ]);
        a.style.minWidth = q + "px", a.style.left = ve + "px";
      } else {
        const M = T.right - O.right, I = window.innerWidth - R.right - M, Y = window.innerWidth - P.right - I, q = P.width + Y, ce = Math.max(q, T.width), ie = window.innerWidth - Le, ve = di(I, [
          Le,
          Math.max(Le, ie - ce)
        ]);
        a.style.minWidth = q + "px", a.style.right = ve + "px";
      }
      const N = h(), j = window.innerHeight - Le * 2, V = m.scrollHeight, B = window.getComputedStyle(c), H = parseInt(B.borderTopWidth, 10), A = parseInt(B.paddingTop, 10), _ = parseInt(B.borderBottomWidth, 10), k = parseInt(B.paddingBottom, 10), z = H + A + V + k + _, G = Math.min(g.offsetHeight * 5, z), ee = window.getComputedStyle(m), me = parseInt(ee.paddingTop, 10), De = parseInt(ee.paddingBottom, 10), ne = P.top + P.height / 2 - Le, Te = j - ne, le = g.offsetHeight / 2, F = g.offsetTop + le, Z = H + A + F, re = z - Z;
      if (Z <= ne) {
        const M = N.length > 0 && g === N[N.length - 1].ref.current;
        a.style.bottom = "0px";
        const I = c.clientHeight - m.offsetTop - m.offsetHeight, Y = Math.max(
          Te,
          le + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (M ? De : 0) + I + _
        ), q = Z + Y;
        a.style.height = q + "px";
      } else {
        const M = N.length > 0 && g === N[0].ref.current;
        a.style.top = "0px";
        const Y = Math.max(
          ne,
          H + m.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (M ? me : 0) + le
        ) + re;
        a.style.height = Y + "px", m.scrollTop = Z - ne + m.offsetTop;
      }
      a.style.margin = `${Le}px 0`, a.style.minHeight = G + "px", a.style.maxHeight = j + "px", r == null || r(), requestAnimationFrame(() => p.current = !0);
    }
  }, [
    h,
    i.trigger,
    i.valueNode,
    a,
    c,
    m,
    g,
    v,
    i.dir,
    r
  ]);
  Ce(() => w(), [w]);
  const [S, C] = x.useState();
  Ce(() => {
    c && C(window.getComputedStyle(c).zIndex);
  }, [c]);
  const D = x.useCallback(
    (P) => {
      P && y.current === !0 && (w(), b == null || b(), y.current = !1);
    },
    [w, b]
  );
  return /* @__PURE__ */ u.jsx(
    Ym,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: p,
      onScrollButtonChange: D,
      children: /* @__PURE__ */ u.jsx(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ u.jsx(
            Q.div,
            {
              ...o,
              ref: d,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
ac.displayName = Km;
var Gm = "SelectPopperPosition", Do = x.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Le,
    ...i
  } = e, s = Lr(n);
  return /* @__PURE__ */ u.jsx(
    zp,
    {
      ...s,
      ...i,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...i.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Do.displayName = Gm;
var [Ym, ps] = on(jt, {}), To = "SelectViewport", lc = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, i = xt(To, n), s = ps(To, n), a = fe(t, i.onViewportChange), l = x.useRef(0);
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ u.jsx(kr.Slot, { scope: n, children: /* @__PURE__ */ u.jsx(
        Q.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: a,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: X(o.onScroll, (c) => {
            const f = c.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: h } = s;
            if (h != null && h.current && d) {
              const p = Math.abs(l.current - f.scrollTop);
              if (p > 0) {
                const y = window.innerHeight - Le * 2, m = parseFloat(d.style.minHeight), g = parseFloat(d.style.height), v = Math.max(m, g);
                if (v < y) {
                  const b = v + p, w = Math.min(y, b), S = b - w;
                  d.style.height = w + "px", d.style.bottom === "0px" && (f.scrollTop = S > 0 ? S : 0, d.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }
);
lc.displayName = To;
var cc = "SelectGroup", [qm, Xm] = on(cc), Zm = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = dt();
    return /* @__PURE__ */ u.jsx(qm, { scope: n, id: o, children: /* @__PURE__ */ u.jsx(Q.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Zm.displayName = cc;
var uc = "SelectLabel", Jm = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Xm(uc, n);
    return /* @__PURE__ */ u.jsx(Q.div, { id: o.id, ...r, ref: t });
  }
);
Jm.displayName = uc;
var yr = "SelectItem", [Qm, dc] = on(yr), fc = x.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: i,
      ...s
    } = e, a = vt(yr, n), l = xt(yr, n), c = a.value === r, [f, d] = x.useState(i ?? ""), [h, p] = x.useState(!1), y = fe(
      t,
      (b) => {
        var w;
        return (w = l.itemRefCallback) == null ? void 0 : w.call(l, b, r, o);
      }
    ), m = dt(), g = x.useRef("touch"), v = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ u.jsx(
      Qm,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: m,
        isSelected: c,
        onItemTextChange: x.useCallback((b) => {
          d((w) => w || ((b == null ? void 0 : b.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ u.jsx(
          kr.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ u.jsx(
              Q.div,
              {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": c && h,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: y,
                onFocus: X(s.onFocus, () => p(!0)),
                onBlur: X(s.onBlur, () => p(!1)),
                onClick: X(s.onClick, () => {
                  g.current !== "mouse" && v();
                }),
                onPointerUp: X(s.onPointerUp, () => {
                  g.current === "mouse" && v();
                }),
                onPointerDown: X(s.onPointerDown, (b) => {
                  g.current = b.pointerType;
                }),
                onPointerMove: X(s.onPointerMove, (b) => {
                  var w;
                  g.current = b.pointerType, o ? (w = l.onItemLeave) == null || w.call(l) : g.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: X(s.onPointerLeave, (b) => {
                  var w;
                  b.currentTarget === document.activeElement && ((w = l.onItemLeave) == null || w.call(l));
                }),
                onKeyDown: X(s.onKeyDown, (b) => {
                  var S;
                  ((S = l.searchRef) == null ? void 0 : S.current) !== "" && b.key === " " || (Vm.includes(b.key) && v(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
fc.displayName = yr;
var fn = "SelectItemText", hc = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...i } = e, s = vt(fn, n), a = xt(fn, n), l = dc(fn, n), c = $m(fn, n), [f, d] = x.useState(null), h = fe(
      t,
      (v) => d(v),
      l.onItemTextChange,
      (v) => {
        var b;
        return (b = a.itemTextRefCallback) == null ? void 0 : b.call(a, v, l.value, l.disabled);
      }
    ), p = f == null ? void 0 : f.textContent, y = x.useMemo(
      () => /* @__PURE__ */ u.jsx("option", { value: l.value, disabled: l.disabled, children: p }, l.value),
      [l.disabled, l.value, p]
    ), { onNativeOptionAdd: m, onNativeOptionRemove: g } = c;
    return Ce(() => (m(y), () => g(y)), [m, g, y]), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(Q.span, { id: l.textId, ...i, ref: h }),
      l.isSelected && s.valueNode && !s.valueNodeHasChildren ? Pr.createPortal(i.children, s.valueNode) : null
    ] });
  }
);
hc.displayName = fn;
var pc = "SelectItemIndicator", mc = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return dc(pc, n).isSelected ? /* @__PURE__ */ u.jsx(Q.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
mc.displayName = pc;
var Po = "SelectScrollUpButton", gc = x.forwardRef((e, t) => {
  const n = xt(Po, e.__scopeSelect), r = ps(Po, e.__scopeSelect), [o, i] = x.useState(!1), s = fe(t, r.onScrollButtonChange);
  return Ce(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollTop > 0;
        i(c);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ u.jsx(
    vc,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = n;
        a && l && (a.scrollTop = a.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
gc.displayName = Po;
var Ao = "SelectScrollDownButton", yc = x.forwardRef((e, t) => {
  const n = xt(Ao, e.__scopeSelect), r = ps(Ao, e.__scopeSelect), [o, i] = x.useState(!1), s = fe(t, r.onScrollButtonChange);
  return Ce(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollHeight - l.clientHeight, f = Math.ceil(l.scrollTop) < c;
        i(f);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ u.jsx(
    vc,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = n;
        a && l && (a.scrollTop = a.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
yc.displayName = Ao;
var vc = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = xt("SelectScrollButton", n), s = x.useRef(null), a = Rr(n), l = x.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return x.useEffect(() => () => l(), [l]), Ce(() => {
    var f;
    const c = a().find((d) => d.ref.current === document.activeElement);
    (f = c == null ? void 0 : c.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ u.jsx(
    Q.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: X(o.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerMove: X(o.onPointerMove, () => {
        var c;
        (c = i.onItemLeave) == null || c.call(i), s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerLeave: X(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), eg = "SelectSeparator", tg = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ u.jsx(Q.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
tg.displayName = eg;
var No = "SelectArrow", ng = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Lr(n), i = vt(No, n), s = xt(No, n);
    return i.open && s.position === "popper" ? /* @__PURE__ */ u.jsx(Up, { ...o, ...r, ref: t }) : null;
  }
);
ng.displayName = No;
var rg = "SelectBubbleInput", xc = x.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = x.useRef(null), i = fe(r, o), s = Yp(t);
    return x.useEffect(() => {
      const a = o.current;
      if (!a) return;
      const l = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (s !== t && f) {
        const d = new Event("change", { bubbles: !0 });
        f.call(a, t), a.dispatchEvent(d);
      }
    }, [s, t]), /* @__PURE__ */ u.jsx(
      Q.select,
      {
        ...n,
        style: { ...$l, ...n.style },
        ref: i,
        defaultValue: t
      }
    );
  }
);
xc.displayName = rg;
function bc(e) {
  return e === "" || e === void 0;
}
function wc(e) {
  const t = ft(e), n = x.useRef(""), r = x.useRef(0), o = x.useCallback(
    (s) => {
      const a = n.current + s;
      t(a), function l(c) {
        n.current = c, window.clearTimeout(r.current), c !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      }(a);
    },
    [t]
  ), i = x.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return x.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i];
}
function Sc(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = og(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((c) => c !== n));
  const l = s.find(
    (c) => c.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function og(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var sg = Zl, ig = Ql, ag = tc, lg = nc, cg = rc, ug = oc, dg = lc, fg = fc, hg = hc, pg = mc, mg = gc, gg = yc;
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Cc = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var vg = {
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
const xg = Yo(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: s,
    ...a
  }, l) => dr(
    "svg",
    {
      ref: l,
      ...vg,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Cc("lucide", o),
      ...a
    },
    [
      ...s.map(([c, f]) => dr(c, f)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ge = (e, t) => {
  const n = Yo(
    ({ className: r, ...o }, i) => dr(xg, {
      ref: i,
      iconNode: t,
      className: Cc(`lucide-${yg(e)}`, r),
      ...o
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dc = ge("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tc = ge("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = ge("Building2", [
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
const bg = ge("Building", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
  ["path", { d: "M9 22v-4h6v4", key: "r93iot" }],
  ["path", { d: "M8 6h.01", key: "1dz90k" }],
  ["path", { d: "M16 6h.01", key: "1x0f13" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tn = ge("CalendarDays", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ir = ge("Calendar", [
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
const wg = ge("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = ge("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pc = ge("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ac = ge("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nc = ge("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yt = ge("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sg = ge("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cg = ge("ExternalLink", [
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
const Ii = ge("List", [
  ["line", { x1: "8", x2: "21", y1: "6", y2: "6", key: "7ey8pc" }],
  ["line", { x1: "8", x2: "21", y1: "12", y2: "12", key: "rjfblc" }],
  ["line", { x1: "8", x2: "21", y1: "18", y2: "18", key: "c3b1m8" }],
  ["line", { x1: "3", x2: "3.01", y1: "6", y2: "6", key: "1g7gq3" }],
  ["line", { x1: "3", x2: "3.01", y1: "12", y2: "12", key: "1pjlvk" }],
  ["line", { x1: "3", x2: "3.01", y1: "18", y2: "18", key: "28t2mc" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ar = ge("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kn = ge("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dg = ge("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function Kn({
  ...e
}) {
  return /* @__PURE__ */ u.jsx(sg, { "data-slot": "select", ...e });
}
function Oi({
  ...e
}) {
  return /* @__PURE__ */ u.jsx(ag, { "data-slot": "select-value", ...e });
}
function Gn({
  className: e,
  size: t = "default",
  children: n,
  ...r
}) {
  return /* @__PURE__ */ u.jsxs(
    ig,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: de(
        "data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive flex w-fit items-center justify-between gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ u.jsx(lg, { asChild: !0, children: /* @__PURE__ */ u.jsx(ms, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function Yn({
  className: e,
  children: t,
  position: n = "popper",
  ...r
}) {
  return /* @__PURE__ */ u.jsx(cg, { children: /* @__PURE__ */ u.jsxs(
    ug,
    {
      "data-slot": "select-content",
      className: de(
        "bg-card text-foreground border border-border data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-[9999] max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      ...r,
      children: [
        /* @__PURE__ */ u.jsx(Tg, {}),
        /* @__PURE__ */ u.jsx(
          dg,
          {
            className: de(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ u.jsx(Pg, {})
      ]
    }
  ) });
}
function lt({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ u.jsxs(
    fg,
    {
      "data-slot": "select-item",
      className: de(
        "focus:bg-muted focus:text-foreground hover:bg-muted/80 text-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ u.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(pg, { children: /* @__PURE__ */ u.jsx(wg, { className: "size-4" }) }) }),
        /* @__PURE__ */ u.jsx(hg, { children: t })
      ]
    }
  );
}
function Tg({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(
    mg,
    {
      "data-slot": "select-scroll-up-button",
      className: de(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ u.jsx(Nc, { className: "size-4" })
    }
  );
}
function Pg({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(
    gg,
    {
      "data-slot": "select-scroll-down-button",
      className: de(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ u.jsx(ms, { className: "size-4" })
    }
  );
}
const Eo = x.forwardRef(
  ({ className: e, type: t = "text", ...n }, r) => /* @__PURE__ */ u.jsx(
    "input",
    {
      type: t,
      className: de(
        "flex h-10 w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        e
      ),
      ref: r,
      ...n
    }
  )
);
Eo.displayName = "Input";
var to = "rovingFocusGroup.onEntryFocus", Ag = { bubbles: !1, cancelable: !0 }, Rn = "RovingFocusGroup", [Mo, Ec, Ng] = pl(Rn), [Eg, Mc] = tn(
  Rn,
  [Ng]
), [Mg, jg] = Eg(Rn), jc = x.forwardRef(
  (e, t) => /* @__PURE__ */ u.jsx(Mo.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u.jsx(Mo.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u.jsx(kg, { ...e, ref: t }) }) })
);
jc.displayName = Rn;
var kg = x.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: i,
    currentTabStopId: s,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: l,
    onEntryFocus: c,
    preventScrollOnEntryFocus: f = !1,
    ...d
  } = e, h = x.useRef(null), p = fe(t, h), y = es(i), [m, g] = Dn({
    prop: s,
    defaultProp: a ?? null,
    onChange: l,
    caller: Rn
  }), [v, b] = x.useState(!1), w = ft(c), S = Ec(n), C = x.useRef(!1), [D, P] = x.useState(0);
  return x.useEffect(() => {
    const T = h.current;
    if (T)
      return T.addEventListener(to, w), () => T.removeEventListener(to, w);
  }, [w]), /* @__PURE__ */ u.jsx(
    Mg,
    {
      scope: n,
      orientation: r,
      dir: y,
      loop: o,
      currentTabStopId: m,
      onItemFocus: x.useCallback(
        (T) => g(T),
        [g]
      ),
      onItemShiftTab: x.useCallback(() => b(!0), []),
      onFocusableItemAdd: x.useCallback(
        () => P((T) => T + 1),
        []
      ),
      onFocusableItemRemove: x.useCallback(
        () => P((T) => T - 1),
        []
      ),
      children: /* @__PURE__ */ u.jsx(
        Q.div,
        {
          tabIndex: v || D === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: p,
          style: { outline: "none", ...e.style },
          onMouseDown: X(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: X(e.onFocus, (T) => {
            const R = !C.current;
            if (T.target === T.currentTarget && R && !v) {
              const O = new CustomEvent(to, Ag);
              if (T.currentTarget.dispatchEvent(O), !O.defaultPrevented) {
                const N = S().filter((A) => A.focusable), j = N.find((A) => A.active), V = N.find((A) => A.id === m), H = [j, V, ...N].filter(
                  Boolean
                ).map((A) => A.ref.current);
                Lc(H, f);
              }
            }
            C.current = !1;
          }),
          onBlur: X(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), kc = "RovingFocusGroupItem", Rc = x.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      children: s,
      ...a
    } = e, l = dt(), c = i || l, f = jg(kc, n), d = f.currentTabStopId === c, h = Ec(n), { onFocusableItemAdd: p, onFocusableItemRemove: y, currentTabStopId: m } = f;
    return x.useEffect(() => {
      if (r)
        return p(), () => y();
    }, [r, p, y]), /* @__PURE__ */ u.jsx(
      Mo.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ u.jsx(
          Q.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": f.orientation,
            ...a,
            ref: t,
            onMouseDown: X(e.onMouseDown, (g) => {
              r ? f.onItemFocus(c) : g.preventDefault();
            }),
            onFocus: X(e.onFocus, () => f.onItemFocus(c)),
            onKeyDown: X(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const v = Ig(g, f.orientation, f.dir);
              if (v !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let w = h().filter((S) => S.focusable).map((S) => S.ref.current);
                if (v === "last") w.reverse();
                else if (v === "prev" || v === "next") {
                  v === "prev" && w.reverse();
                  const S = w.indexOf(g.currentTarget);
                  w = f.loop ? Og(w, S + 1) : w.slice(S + 1);
                }
                setTimeout(() => Lc(w));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: d, hasTabStop: m != null }) : s
          }
        )
      }
    );
  }
);
Rc.displayName = kc;
var Rg = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Lg(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Ig(e, t, n) {
  const r = Lg(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Rg[r];
}
function Lc(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Og(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Vg = jc, Fg = Rc;
function _g(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var Ln = (e) => {
  const { present: t, children: n } = e, r = Bg(t), o = typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n), i = fe(r.ref, $g(o));
  return typeof n == "function" || r.isPresent ? x.cloneElement(o, { ref: i }) : null;
};
Ln.displayName = "Presence";
function Bg(e) {
  const [t, n] = x.useState(), r = x.useRef(null), o = x.useRef(e), i = x.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = _g(s, {
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
  return x.useEffect(() => {
    const c = qn(r.current);
    i.current = a === "mounted" ? c : "none";
  }, [a]), Ce(() => {
    const c = r.current, f = o.current;
    if (f !== e) {
      const h = i.current, p = qn(c);
      e ? l("MOUNT") : p === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(f && h !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Ce(() => {
    if (t) {
      let c;
      const f = t.ownerDocument.defaultView ?? window, d = (p) => {
        const m = qn(r.current).includes(CSS.escape(p.animationName));
        if (p.target === t && m && (l("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, h = (p) => {
        p.target === t && (i.current = qn(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        f.clearTimeout(c), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: x.useCallback((c) => {
      r.current = c ? getComputedStyle(c) : null, n(c);
    }, [])
  };
}
function qn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function $g(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Or = "Tabs", [zg, aw] = tn(Or, [
  Mc
]), Ic = Mc(), [Ug, gs] = zg(Or), Oc = x.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: i,
      orientation: s = "horizontal",
      dir: a,
      activationMode: l = "automatic",
      ...c
    } = e, f = es(a), [d, h] = Dn({
      prop: r,
      onChange: o,
      defaultProp: i ?? "",
      caller: Or
    });
    return /* @__PURE__ */ u.jsx(
      Ug,
      {
        scope: n,
        baseId: dt(),
        value: d,
        onValueChange: h,
        orientation: s,
        dir: f,
        activationMode: l,
        children: /* @__PURE__ */ u.jsx(
          Q.div,
          {
            dir: f,
            "data-orientation": s,
            ...c,
            ref: t
          }
        )
      }
    );
  }
);
Oc.displayName = Or;
var Vc = "TabsList", Fc = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, i = gs(Vc, n), s = Ic(n);
    return /* @__PURE__ */ u.jsx(
      Vg,
      {
        asChild: !0,
        ...s,
        orientation: i.orientation,
        dir: i.dir,
        loop: r,
        children: /* @__PURE__ */ u.jsx(
          Q.div,
          {
            role: "tablist",
            "aria-orientation": i.orientation,
            ...o,
            ref: t
          }
        )
      }
    );
  }
);
Fc.displayName = Vc;
var _c = "TabsTrigger", Bc = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...i } = e, s = gs(_c, n), a = Ic(n), l = Uc(s.baseId, r), c = Wc(s.baseId, r), f = r === s.value;
    return /* @__PURE__ */ u.jsx(
      Fg,
      {
        asChild: !0,
        ...a,
        focusable: !o,
        active: f,
        children: /* @__PURE__ */ u.jsx(
          Q.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": c,
            "data-state": f ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: l,
            ...i,
            ref: t,
            onMouseDown: X(e.onMouseDown, (d) => {
              !o && d.button === 0 && d.ctrlKey === !1 ? s.onValueChange(r) : d.preventDefault();
            }),
            onKeyDown: X(e.onKeyDown, (d) => {
              [" ", "Enter"].includes(d.key) && s.onValueChange(r);
            }),
            onFocus: X(e.onFocus, () => {
              const d = s.activationMode !== "manual";
              !f && !o && d && s.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
Bc.displayName = _c;
var $c = "TabsContent", zc = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: i, ...s } = e, a = gs($c, n), l = Uc(a.baseId, r), c = Wc(a.baseId, r), f = r === a.value, d = x.useRef(f);
    return x.useEffect(() => {
      const h = requestAnimationFrame(() => d.current = !1);
      return () => cancelAnimationFrame(h);
    }, []), /* @__PURE__ */ u.jsx(Ln, { present: o || f, children: ({ present: h }) => /* @__PURE__ */ u.jsx(
      Q.div,
      {
        "data-state": f ? "active" : "inactive",
        "data-orientation": a.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !h,
        id: c,
        tabIndex: 0,
        ...s,
        ref: t,
        style: {
          ...e.style,
          animationDuration: d.current ? "0s" : void 0
        },
        children: h && i
      }
    ) });
  }
);
zc.displayName = $c;
function Uc(e, t) {
  return `${e}-trigger-${t}`;
}
function Wc(e, t) {
  return `${e}-content-${t}`;
}
var Wg = Oc, Hg = Fc, Kg = Bc, Gg = zc;
function Yg({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(
    Wg,
    {
      "data-slot": "tabs",
      className: de("flex flex-col gap-2", e),
      ...t
    }
  );
}
function Vi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(
    Hg,
    {
      "data-slot": "tabs-list",
      className: de(
        "inline-flex w-fit items-center justify-center rounded-lg h-9 bg-muted/60 dark:bg-transparent p-1 text-muted-foreground border border-transparent dark:border-border/40",
        e
      ),
      ...t
    }
  );
}
function wt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(
    Kg,
    {
      "data-slot": "tabs-trigger",
      className: de(
        "text-muted-foreground dark:text-muted-foreground data-[state=active]:text-foreground data-[state=active]:bg-card dark:data-[state=active]:bg-card/40 data-[state=active]:shadow-sm cursor-pointer inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1 rounded-md border border-transparent px-3 py-1 text-xs font-medium whitespace-nowrap transition-[color,background-color] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
        e
      ),
      ...t
    }
  );
}
function Xn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(
    Gg,
    {
      "data-slot": "tabs-content",
      className: de("flex-1 outline-none", e),
      ...t
    }
  );
}
const qg = (e, t) => {
  const n = [];
  if (!e || !t) {
    const s = /* @__PURE__ */ new Date(), a = s.getFullYear(), l = s.getMonth();
    return Fi(a, l);
  }
  const r = new Date(e), o = new Date(t), i = new Date(r.getFullYear(), r.getMonth(), 1);
  for (; i <= o; ) {
    const s = Fi(i.getFullYear(), i.getMonth());
    n.push(...s), i.setMonth(i.getMonth() + 1);
  }
  return n;
}, Fi = (e, t) => {
  const n = [], r = `${e}-${t}`, o = new Date(e, t, 5, 14, 0), i = new Date(e, t, 5, 10, 0);
  n.push({
    id: `${r}-1`,
    title: "Computer Science Seminar",
    description: "Advanced Machine Learning Topics",
    startDate: o,
    endDate: new Date(e, t, 5, 16, 0)
  }), n.push({
    id: `${r}-2`,
    title: "Mathematics Workshop",
    description: "Calculus Study Group",
    startDate: i,
    endDate: new Date(e, t, 5, 12, 0)
  }), n.push({
    id: `${r}-3`,
    title: "Campus Movie Night",
    description: "Outdoor movie screening",
    startDate: new Date(e, t, 8, 19, 0),
    endDate: new Date(e, t, 8, 22, 0)
  }), n.push({
    id: `${r}-4`,
    title: "Student Mixer",
    description: "Meet new friends",
    startDate: new Date(e, t, 12, 18, 0),
    endDate: new Date(e, t, 12, 20, 0)
  }), n.push({
    id: `${r}-14`,
    title: "Study Session",
    description: "Group study for finals",
    startDate: new Date(e, t, 15, 14, 0),
    endDate: new Date(e, t, 15, 16, 0)
  }), n.push({
    id: `${r}-15`,
    title: "Book Club Meeting",
    description: "Monthly book discussion",
    startDate: new Date(e, t, 20, 17, 0),
    endDate: new Date(e, t, 20, 19, 0)
  }), n.push({
    id: `${r}-16`,
    title: "Trivia Night",
    description: "Fun trivia competition",
    startDate: new Date(e, t, 25, 20, 0),
    endDate: new Date(e, t, 25, 22, 0)
  }), n.push({
    id: `${r}-5`,
    title: "Basketball Tournament",
    description: "Intramural championship",
    startDate: new Date(e, t, 15, 17, 0),
    endDate: new Date(e, t, 15, 21, 0)
  }), n.push({
    id: `${r}-6`,
    title: "Soccer Practice",
    description: "Team practice session",
    startDate: new Date(e, t, 15, 15, 0),
    endDate: new Date(e, t, 15, 17, 0)
  }), n.push({
    id: `${r}-7`,
    title: "International Food Festival",
    description: "Celebrate diverse cuisines",
    startDate: new Date(e, t, 20, 11, 0),
    endDate: new Date(e, t, 20, 15, 0)
  }), n.push({
    id: `${r}-8`,
    title: "Career Fair",
    description: "Connect with employers",
    startDate: new Date(e, t, 22, 10, 0),
    endDate: new Date(e, t, 22, 16, 0)
  }), n.push({
    id: `${r}-9`,
    title: "Resume Workshop",
    description: "Professional development",
    startDate: new Date(e, t, 22, 13, 0),
    endDate: new Date(e, t, 22, 14, 30)
  }), n.push({
    id: `${r}-10`,
    title: "Yoga Session",
    description: "Morning wellness class",
    startDate: new Date(e, t, 25, 7, 0),
    endDate: new Date(e, t, 25, 8, 0)
  }), n.push({
    id: `${r}-11`,
    title: "Art Exhibition Opening",
    description: "Student artwork showcase",
    startDate: new Date(e, t, 28, 18, 0),
    endDate: new Date(e, t, 28, 20, 0)
  });
  const s = /* @__PURE__ */ new Date();
  return e === s.getFullYear() && t === s.getMonth() && (n.push({
    id: `${r}-12`,
    title: "Emergency Meeting",
    description: "Important announcement",
    startDate: new Date(s.getFullYear(), s.getMonth(), s.getDate(), 13, 0),
    endDate: new Date(s.getFullYear(), s.getMonth(), s.getDate(), 14, 0)
  }), n.push({
    id: `${r}-13`,
    title: "Study Group",
    description: "Physics review session",
    startDate: new Date(s.getFullYear(), s.getMonth(), s.getDate(), 16, 0),
    endDate: new Date(s.getFullYear(), s.getMonth(), s.getDate(), 18, 0)
  })), t === 0 ? n.push({
    id: `${r}-special`,
    title: "New Year Planning Session",
    description: "Plan for the new academic year",
    startDate: new Date(e, t, 15, 10, 0),
    endDate: new Date(e, t, 15, 12, 0)
  }) : t === 11 ? n.push({
    id: `${r}-special`,
    title: "Holiday Celebration",
    description: "End of year celebration",
    startDate: new Date(e, t, 15, 18, 0),
    endDate: new Date(e, t, 15, 21, 0)
  }) : n.push({
    id: `${r}-special`,
    title: `${new Date(e, t).toLocaleString("en-US", { month: "long" })} Workshop`,
    description: "Monthly workshop session",
    startDate: new Date(e, t, 10, 14, 0),
    endDate: new Date(e, t, 10, 16, 0)
  }), n;
}, Xg = (e) => {
  const t = {}, n = ["Main Auditorium", "Student Center", "Library Room 201", "Sports Complex", "Outdoor Field", "Conference Hall", "Room 301"], r = ["Student Union", "Computer Science Club", "Athletics Department", "Cultural Society", "Career Services"];
  return e.forEach((o, i) => {
    let s = "academic";
    o.title.toLowerCase().includes("sport") || o.title.toLowerCase().includes("basketball") || o.title.toLowerCase().includes("soccer") ? s = "sports" : o.title.toLowerCase().includes("movie") || o.title.toLowerCase().includes("mixer") ? s = "social" : o.title.toLowerCase().includes("food") || o.title.toLowerCase().includes("international") ? s = "cultural" : o.title.toLowerCase().includes("career") || o.title.toLowerCase().includes("resume") ? s = "professional" : o.title.toLowerCase().includes("yoga") || o.title.toLowerCase().includes("wellness") ? s = "wellness" : (o.title.toLowerCase().includes("art") || o.title.toLowerCase().includes("exhibition") || o.title.toLowerCase().includes("concert") || o.title.toLowerCase().includes("band")) && (s = "arts"), t[o.id] = {
      category: s,
      organization: r[i % r.length],
      location: n[i % n.length],
      cost: i % 3 === 0 ? "Free" : `$${(i + 1) * 5}`,
      registrationRequired: i % 2 === 0,
      capacity: `${(i + 1) * 20} people`,
      featured: i % 4 === 0,
      categories: [{ slug: s, name: s }],
      description: o.description
    };
  }), t;
};
function Zg(e = {}) {
  const [t, n] = W(!0);
  Qe(() => {
    const s = setTimeout(() => {
      n(!1);
    }, 500);
    return () => clearTimeout(s);
  }, [e.start_date, e.end_date]);
  const r = U.useMemo(() => qg(e.start_date, e.end_date), [e.start_date, e.end_date]), o = U.useMemo(() => Xg(r), [r]), i = U.useMemo(() => {
    const s = {
      academic: "primary",
      social: "success",
      sports: "warning",
      cultural: "orange",
      professional: "indigo",
      wellness: "cyan",
      arts: "pink"
    }, a = {};
    return Object.values(o).forEach((l) => {
      l != null && l.category && s[l.category] && (a[l.category] = s[l.category]);
    }), a;
  }, [o]);
  return {
    events: r,
    eventMetadata: o,
    categoryMappings: i,
    loading: t,
    error: null,
    total: r.length,
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
class Jg {
  constructor() {
    Bn(this, "baseUrl");
    Bn(this, "cache");
    Bn(this, "cacheTimeout");
    const t = window.unbcCalendarData;
    this.baseUrl = (t == null ? void 0 : t.apiUrl) || "/wp-json/unbc-events/v1", this.cache = /* @__PURE__ */ new Map(), this.cacheTimeout = 5 * 60 * 1e3;
  }
  async fetchEvents(t = {}, n = {}) {
    var h;
    const r = this.generateCacheKey(t), o = this.getFromCache(r);
    if (o && !n.refresh)
      return o;
    const i = new URLSearchParams();
    Object.entries(t).forEach(([p, y]) => {
      y != null && y !== "" && i.append(p, y.toString());
    });
    const a = `${this.baseUrl.endsWith("/") ? this.baseUrl.slice(0, -1) : this.baseUrl}/events${i.toString() ? "?" + i.toString() : ""}`, l = window.unbcCalendarData, c = {
      "Content-Type": "application/json"
    };
    l != null && l.nonce && (c["X-WP-Nonce"] = l.nonce);
    const f = await fetch(a, {
      method: "GET",
      headers: c,
      credentials: "same-origin",
      signal: n.signal
    });
    if (!f.ok) {
      const p = await f.text();
      throw new Error(`HTTP error! status: ${f.status}, response: ${p}`);
    }
    const d = await f.json();
    return (h = n.signal) != null && h.aborted || this.setCache(r, d), d;
  }
  transformWordPressEventToEvent(t) {
    const n = this.parseDateTime(t.date, t.start_time), r = this.parseDateTime(t.date, t.end_time);
    return {
      id: t.id.toString(),
      title: t.title,
      description: t.excerpt || this.stripHtml(t.description),
      startDate: n,
      endDate: r,
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
  parseDateTime(t, n) {
    const r = /* @__PURE__ */ new Date(`${t}T${n}`);
    return isNaN(r.getTime()) ? /* @__PURE__ */ new Date() : r;
  }
  stripHtml(t) {
    return new DOMParser().parseFromString(t, "text/html").body.textContent || "";
  }
  decodeHtmlEntities(t) {
    var r;
    if (!t) return "";
    if (typeof DOMParser < "u") {
      const o = new DOMParser().parseFromString(t, "text/html");
      return o.documentElement.textContent || ((r = o.body) == null ? void 0 : r.textContent) || t;
    }
    const n = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    };
    return t.replace(/&(?:amp|lt|gt|quot|#39);/g, (o) => n[o] || o);
  }
  getCategoryVariant(t) {
    return !t || !Array.isArray(t) || t.length === 0, "default";
  }
  mapWordPressCategory(t) {
    return !t || !Array.isArray(t) || t.length === 0 ? null : t[0].slug;
  }
  generateCacheKey(t) {
    const n = Object.entries(t).filter(([, r]) => r != null && r !== "").map(([r, o]) => [r, String(o)]).sort(([r], [o]) => r.localeCompare(o));
    return JSON.stringify([this.baseUrl.replace(/\/$/, ""), n]);
  }
  getFromCache(t) {
    const n = this.cache.get(t);
    return n ? Date.now() - n.timestamp > this.cacheTimeout ? (this.cache.delete(t), null) : n.data : null;
  }
  setCache(t, n) {
    this.cache.set(t, {
      data: n,
      timestamp: Date.now()
    }), this.cache.size > 50 && this.cleanCache();
  }
  cleanCache() {
    const t = Date.now();
    for (const [n, r] of this.cache.entries())
      t - r.timestamp > this.cacheTimeout && this.cache.delete(n);
  }
  clearCache() {
    this.cache.clear();
  }
}
const no = new Jg(), Qg = [
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
], ey = (e) => {
  if (!e || typeof e != "object")
    return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    Qg.includes(r) && (t[n] = r);
  }), t;
}, ro = (e) => {
  var n;
  if (typeof e != "string" || e.length === 0)
    return e ?? void 0;
  try {
    if (typeof DOMParser < "u") {
      const o = new DOMParser().parseFromString(e, "text/html");
      return o.documentElement.textContent || ((n = o.body) == null ? void 0 : n.textContent) || e;
    }
  } catch (r) {
    console.warn("Failed to decode HTML entities:", r);
  }
  const t = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'"
  };
  return e.replace(/&(?:amp|lt|gt|quot|#39);/g, (r) => t[r] || r);
}, ty = (e) => e ? Object.entries(e).reduce((t, [n, r]) => (t[n] = {
  ...r,
  organization: ro(r.organization) ?? r.organization,
  location: ro(r.location) ?? r.location,
  cost: ro(r.cost) ?? r.cost
}, t), {}) : {};
function Hc(e = {}) {
  const [t, n] = W([]), [r, o] = W({}), [i, s] = W({}), [a, l] = W(!0), [c, f] = W(!1), [d, h] = W(null), [p, y] = W(0), [m, g] = W(0), [v, b] = W(e), [w, S] = W(), C = Oe(0), D = Oe(), P = Oe(!1), T = JSON.stringify(e);
  Qe(() => {
    b(e);
  }, [T]);
  const R = Tt(async (V = !1, B = !1) => {
    var _, k, z;
    if (V && (P.current || !(w != null && w.nextPage))) return;
    V || ((_ = D.current) == null || _.abort(), C.current++, P.current = !1, f(!1), S(void 0));
    const H = C.current, A = V ? D.current : new AbortController();
    V || (D.current = A), V ? (P.current = !0, f(!0)) : l(!0), h(null);
    try {
      let G = V ? w.nextPage : v.page || 1;
      const ee = [];
      let me = {}, De = {}, ne;
      do {
        if (ne = await no.fetchEvents({ ...v, page: G }, { refresh: B, signal: A.signal }), H !== C.current || A.signal.aborted) return;
        for (const le of ne.events)
          if ((k = ne.performance) != null && k.server_processed) {
            const F = le;
            ee.push({ ...F, startDate: new Date(F.startDate), endDate: new Date(F.endDate) });
          } else {
            const F = le, Z = no.transformWordPressEventToEvent(F);
            ee.push(Z), me[Z.id] = no.transformWordPressEventToMetadata(F);
          }
        me = { ...me, ...ty(ne.eventMetadata) }, De = { ...De, ...ey(ne.categoryMappings) }, G = ((z = ne.pagination) == null ? void 0 : z.nextPage) || 0;
      } while (v.view !== "list" && G);
      const Te = (le) => Array.from(new Map([...le, ...ee].map((F) => [F.id, F])).values());
      n((le) => Te(V ? le : [])), o((le) => ({ ...V ? le : {}, ...me })), s((le) => ({ ...V ? le : {}, ...De })), y(ne.total), g(ne.pages), S(ne.pagination);
    } catch (G) {
      if (H !== C.current || A.signal.aborted) return;
      V || (n([]), o({}), s({}), y(0), g(0), S(void 0)), h(G instanceof Error ? G.message : "Failed to load events");
    } finally {
      H === C.current && !A.signal.aborted && (l(!1), f(!1), P.current = !1);
    }
  }, [JSON.stringify(v), JSON.stringify(w)]);
  Qe(() => (R(), () => {
    var V;
    C.current++, (V = D.current) == null || V.abort();
  }), [JSON.stringify(v)]);
  const O = Tt(() => {
    R(!1, !0);
  }, [R]), N = Tt(() => {
    R(!0);
  }, [R]), j = Tt((V) => b((B) => ({ ...B, ...V, page: 1 })), []);
  return {
    events: t,
    eventMetadata: r,
    categoryMappings: i,
    loading: a,
    loadingMore: c,
    error: d,
    total: p,
    pages: m,
    pagination: w,
    hasMore: (w == null ? void 0 : w.hasMore) || !1,
    refetch: O,
    loadMore: N,
    setFilters: j
  };
}
const ny = {
  async getAll() {
    try {
      const t = await fetch("/wp-json/wp/v2/organization?per_page=100");
      if (!t.ok)
        throw new Error("Failed to fetch organizations");
      return await t.json();
    } catch {
      return [];
    }
  }
};
function ry() {
  const [e, t] = W([]), [n, r] = W(!0), [o, i] = W(null);
  return Qe(() => {
    (async () => {
      try {
        r(!0);
        const a = await ny.getAll();
        t(a), i(null);
      } catch {
        i("Failed to load organizations");
      } finally {
        r(!1);
      }
    })();
  }, []), { organizations: e, loading: n, error: o };
}
function Kc() {
  const [e, t] = W([]), [n, r] = W(!0), [o, i] = W(null);
  return Qe(() => {
    (async () => {
      var a, l;
      try {
        r(!0), i(null);
        const c = await fetch(`${((a = window.unbcCalendarData) == null ? void 0 : a.categoriesEndpoint) || "/wp-json/wp/v2/event_category"}?per_page=100&orderby=name&order=asc`);
        if (!c.ok)
          throw new Error(`HTTP error! status: ${c.status}`);
        const f = await c.json(), d = {};
        try {
          const p = await fetch(`${((l = window.unbcCalendarData) == null ? void 0 : l.apiUrl) || "/wp-json/unbc-events/v1/"}category-config`);
          if (p.ok) {
            const y = await p.json();
            Object.entries(y.colors || {}).forEach(([m, g]) => {
              typeof g == "string" ? d[m] = g : g && typeof g == "object" && "variant" in g && g.variant && (d[m] = g.variant);
            });
          }
        } catch (p) {
          console.warn("Error fetching category color config:", p);
        }
        const h = f.map((p) => ({
          id: p.id,
          name: p.name,
          slug: p.slug,
          count: p.count,
          variant: d[p.slug] || "default"
        }));
        t(h);
      } catch (c) {
        console.error("Error fetching event categories:", c), i(c instanceof Error ? c.message : "Failed to fetch categories"), t([
          { id: 1, name: "Clubs", slug: "clubs", count: 0, variant: "default" },
          { id: 2, name: "UNBC", slug: "unbc", count: 0, variant: "default" },
          { id: 3, name: "Organizations", slug: "organizations", count: 0, variant: "default" },
          { id: 4, name: "Sports", slug: "sports", count: 0, variant: "default" }
        ]);
      } finally {
        r(!1);
      }
    })();
  }, []), { categories: e, loading: n, error: o };
}
function oy() {
  const [e, t] = W(null), [n, r] = W(!0), [o, i] = W(null);
  return Qe(() => {
    (async () => {
      var a;
      try {
        r(!0), i(null);
        const l = await fetch(`${((a = window.unbcCalendarData) == null ? void 0 : a.apiUrl) || "/wp-json/unbc-events/v1/"}category-config`);
        if (!l.ok)
          throw new Error(`HTTP error! status: ${l.status}`);
        const c = await l.json();
        if (c.version !== 1 || !c.colors || !c.categoryRelationships || !Array.isArray(c.categoriesWithOrganizations)) throw new Error("Unsupported category configuration");
        t(c);
      } catch (l) {
        console.error("Error fetching category config:", l), i(l instanceof Error ? l.message : "Failed to fetch category config"), t({
          version: 1,
          colors: {},
          categoriesWithOrganizations: ["unbc", "organizations", "community"],
          categoryRelationships: {
            unbc: ["unbc", "organizations"],
            organizations: ["organizations"]
          },
          autoAssignCategory: "organizations"
        });
      } finally {
        r(!1);
      }
    })();
  }, []), { config: e, loading: n, error: o };
}
function Zn(e) {
  return e.replace(/\\/g, "\\\\").replace(/\r\n|\r|\n/g, "\\n").replace(/;/g, "\\;").replace(/,/g, "\\,");
}
function sy(e) {
  const t = new TextEncoder();
  let n = "", r = 0;
  const o = [];
  for (const i of e) {
    const s = t.encode(i).length;
    r + s > 75 && (o.push(n), n = " ", r = 1), n += i, r += s;
  }
  return o.push(n), o.join(`\r
`);
}
const jo = (e) => e.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
function Gc(e) {
  if (!e.isAllDay) return [jo(e.startDate), jo(e.endDate)];
  const t = new Date(e.endDate);
  return (t <= e.startDate || t.getHours() || t.getMinutes() || t.getSeconds()) && t.setDate(t.getDate() + 1), [gn(e.startDate).replace(/-/g, ""), gn(t).replace(/-/g, "")];
}
function iy(e, t, n = /* @__PURE__ */ new Date()) {
  const [r, o] = Gc(e), i = e.isAllDay ? ";VALUE=DATE" : "", s = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Campus Manager//Events//EN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${Zn(e.id)}@campus-manager`,
    `DTSTAMP:${jo(n)}`,
    `DTSTART${i}:${r}`,
    `DTEND${i}:${o}`,
    `SUMMARY:${Zn(e.title)}`,
    `DESCRIPTION:${Zn(e.description || "")}`,
    `LOCATION:${Zn((t == null ? void 0 : t.location) || "")}`,
    `STATUS:${e.status === "canceled" || e.status === "cancelled" ? "CANCELLED" : e.status === "postponed" ? "TENTATIVE" : "CONFIRMED"}`
  ];
  return t != null && t.website && /^https?:\/\/[^\r\n]+$/.test(t.website) && s.push(`URL:${t.website}`), [...s, "END:VEVENT", "END:VCALENDAR"].map(sy).join(`\r
`) + `\r
`;
}
var Vr = "Dialog", [Yc, lw] = tn(Vr), [ay, _e] = Yc(Vr), qc = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !0
  } = e, a = x.useRef(null), l = x.useRef(null), [c, f] = Dn({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: Vr
  });
  return /* @__PURE__ */ u.jsx(
    ay,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: dt(),
      titleId: dt(),
      descriptionId: dt(),
      open: c,
      onOpenChange: f,
      onOpenToggle: x.useCallback(() => f((d) => !d), [f]),
      modal: s,
      children: n
    }
  );
};
qc.displayName = Vr;
var Xc = "DialogTrigger", ly = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = _e(Xc, n), i = fe(t, o.triggerRef);
    return /* @__PURE__ */ u.jsx(
      Q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": xs(o.open),
        ...r,
        ref: i,
        onClick: X(e.onClick, o.onOpenToggle)
      }
    );
  }
);
ly.displayName = Xc;
var ys = "DialogPortal", [cy, Zc] = Yc(ys, {
  forceMount: void 0
}), Jc = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = _e(ys, t);
  return /* @__PURE__ */ u.jsx(cy, { scope: t, forceMount: n, children: x.Children.map(r, (s) => /* @__PURE__ */ u.jsx(Ln, { present: n || i.open, children: /* @__PURE__ */ u.jsx(fs, { asChild: !0, container: o, children: s }) })) });
};
Jc.displayName = ys;
var vr = "DialogOverlay", Qc = x.forwardRef(
  (e, t) => {
    const n = Zc(vr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = _e(vr, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ u.jsx(Ln, { present: r || i.open, children: /* @__PURE__ */ u.jsx(dy, { ...o, ref: t }) }) : null;
  }
);
Qc.displayName = vr;
var uy = /* @__PURE__ */ wn("DialogOverlay.RemoveScroll"), dy = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = _e(vr, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ u.jsx(hs, { as: uy, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ u.jsx(
        Q.div,
        {
          "data-state": xs(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), kt = "DialogContent", eu = x.forwardRef(
  (e, t) => {
    const n = Zc(kt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = _e(kt, e.__scopeDialog);
    return /* @__PURE__ */ u.jsx(Ln, { present: r || i.open, children: i.modal ? /* @__PURE__ */ u.jsx(fy, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(hy, { ...o, ref: t }) });
  }
);
eu.displayName = kt;
var fy = x.forwardRef(
  (e, t) => {
    const n = _e(kt, e.__scopeDialog), r = x.useRef(null), o = fe(t, n.contentRef, r);
    return x.useEffect(() => {
      const i = r.current;
      if (i) return Ul(i);
    }, []), /* @__PURE__ */ u.jsx(
      tu,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: X(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: X(e.onPointerDownOutside, (i) => {
          const s = i.detail.originalEvent, a = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || a) && i.preventDefault();
        }),
        onFocusOutside: X(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), hy = x.forwardRef(
  (e, t) => {
    const n = _e(kt, e.__scopeDialog), r = x.useRef(!1), o = x.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      tu,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var s, a;
          (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), i.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (i) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = i.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), tu = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...s } = e, a = _e(kt, n), l = x.useRef(null), c = fe(t, l);
    return yl(), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        ns,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ u.jsx(
            ts,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": xs(a.open),
              ...s,
              ref: c,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(py, { titleId: a.titleId }),
        /* @__PURE__ */ u.jsx(gy, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), vs = "DialogTitle", nu = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = _e(vs, n);
    return /* @__PURE__ */ u.jsx(Q.h2, { id: o.titleId, ...r, ref: t });
  }
);
nu.displayName = vs;
var ru = "DialogDescription", ou = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = _e(ru, n);
    return /* @__PURE__ */ u.jsx(Q.p, { id: o.descriptionId, ...r, ref: t });
  }
);
ou.displayName = ru;
var su = "DialogClose", iu = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = _e(su, n);
    return /* @__PURE__ */ u.jsx(
      Q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: X(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
iu.displayName = su;
function xs(e) {
  return e ? "open" : "closed";
}
var au = "DialogTitleWarning", [cw, lu] = Yf(au, {
  contentName: kt,
  titleName: vs,
  docsSlug: "dialog"
}), py = ({ titleId: e }) => {
  const t = lu(au), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return x.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, my = "DialogDescriptionWarning", gy = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${lu(my).contentName}}.`;
  return x.useEffect(() => {
    var i;
    const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, yy = qc, vy = Jc, cu = Qc, uu = eu, du = nu, fu = ou, xy = iu;
const by = yy, wy = vy, hu = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  cu,
  {
    ref: n,
    className: de(
      "fixed inset-0 z-[99999] bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
hu.displayName = cu.displayName;
const pu = x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs(wy, { children: [
  /* @__PURE__ */ u.jsx(hu, {}),
  /* @__PURE__ */ u.jsxs(
    uu,
    {
      ref: r,
      className: de(
        "fixed left-[50%] top-[50%] z-[99999] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-card text-foreground p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ u.jsxs(xy, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-all duration-200 hover:opacity-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 p-1", children: [
          /* @__PURE__ */ u.jsx(Dg, { className: "h-4 w-4" }),
          /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
pu.displayName = uu.displayName;
const mu = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: de(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
mu.displayName = "DialogHeader";
const gu = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: de(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
gu.displayName = "DialogFooter";
const yu = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  du,
  {
    ref: n,
    className: de(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
yu.displayName = du.displayName;
const vu = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  fu,
  {
    ref: n,
    className: de("text-sm text-muted-foreground", e),
    ...t
  }
));
vu.displayName = fu.displayName;
function qt({
  className: e,
  variant: t = "default",
  size: n = "default",
  ...r
}) {
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      className: de(
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
        }[n],
        e
      ),
      ...r
    }
  );
}
function xu({ event: e, eventMetadata: t, open: n, onOpenChange: r, showCost: o = !0 }) {
  const i = U.useRef(null);
  U.useEffect(() => {
    n && (i.current = document.activeElement);
  }, [n]);
  const [s, a] = U.useState(!1);
  if (!e) return null;
  const l = t[e.id], c = (h, p = 180) => {
    if (!h || h.length <= p) return h;
    const y = h.substring(0, p), m = y.lastIndexOf("."), g = y.lastIndexOf(" "), v = m > p - 50 ? m + 1 : g;
    return h.substring(0, v > 0 ? v : p).trim();
  }, f = (h) => {
    switch (h) {
      case "google": {
        const p = new URL("https://calendar.google.com/calendar/render");
        return p.searchParams.append("action", "TEMPLATE"), p.searchParams.append("text", e.title), p.searchParams.append("dates", Gc(e).join("/")), p.searchParams.append("details", e.description || ""), l != null && l.location && p.searchParams.append("location", l.location), p.toString();
      }
      case "outlook":
      case "apple": {
        const p = iy(e, l);
        return `data:text/calendar;charset=utf8,${encodeURIComponent(p)}`;
      }
    }
  }, d = {
    clubs: "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary",
    unbc: "bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary",
    organizations: "bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive",
    sports: "bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent"
  };
  return /* @__PURE__ */ u.jsx(by, { open: n, onOpenChange: r, children: /* @__PURE__ */ u.jsxs(pu, { onCloseAutoFocus: (h) => {
    var p;
    h.preventDefault(), (p = i.current) == null || p.focus();
  }, className: "max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto overflow-x-hidden bg-card border border-border sm:w-full p-4 sm:p-6", children: [
    /* @__PURE__ */ u.jsxs(mu, { children: [
      /* @__PURE__ */ u.jsx(yu, { className: "text-xl text-foreground", children: e.title }),
      e.description && /* @__PURE__ */ u.jsxs("div", { className: "mt-2", children: [
        /* @__PURE__ */ u.jsx(vu, { className: `text-muted-foreground leading-relaxed break-words ${s ? "max-h-[40vh] overflow-y-auto pr-2" : ""}`, children: s ? e.description : c(e.description) }),
        e.description.length > 180 && /* @__PURE__ */ u.jsx(
          "button",
          {
            onClick: () => a(!s),
            className: "inline-flex items-center gap-1 mt-3 px-3 py-2 text-sm text-primary hover:text-primary/80 hover:bg-primary/10 active:bg-primary/20 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
            children: s ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              "Show less",
              /* @__PURE__ */ u.jsx(Nc, { className: "h-4 w-4" })
            ] }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              "Read more",
              /* @__PURE__ */ u.jsx(ms, { className: "h-4 w-4" })
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "space-y-4 my-4", children: /* @__PURE__ */ u.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
        /* @__PURE__ */ u.jsx(Yt, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
        /* @__PURE__ */ u.jsxs("div", { className: "space-y-1 text-foreground", children: [
          /* @__PURE__ */ u.jsx("div", { className: "font-medium", children: e.startDate.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          }) }),
          /* @__PURE__ */ u.jsxs("div", { className: "text-muted-foreground text-sm", children: [
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
      l && /* @__PURE__ */ u.jsxs("div", { className: "space-y-2 text-sm text-foreground", children: [
        l.location && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ u.jsx(kn, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ u.jsx("span", { children: l.location })
        ] }),
        l.organization && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ u.jsx(Ir, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ u.jsx("span", { children: l.organization })
        ] }),
        o && l.cost && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ u.jsx(Sg, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ u.jsx("span", { children: l.cost })
        ] }),
        l.website && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ u.jsx(Cg, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ u.jsx(
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
        /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-3 pt-1", children: [
          l.category && /* @__PURE__ */ u.jsx(qt, { className: d[l.category] || "bg-muted text-foreground", children: l.category.charAt(0).toUpperCase() + l.category.slice(1) }),
          l.registrationRequired && /* @__PURE__ */ u.jsx(qt, { variant: "outline", className: "border-border text-foreground", children: "Registration Required" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ u.jsxs(gu, { className: "flex-col sm:flex-col gap-2", children: [
      /* @__PURE__ */ u.jsx("div", { className: "text-sm text-muted-foreground mb-2", children: "Add to your calendar:" }),
      /* @__PURE__ */ u.jsxs("div", { className: "flex gap-2 w-full", children: [
        /* @__PURE__ */ u.jsxs(
          Xe,
          {
            variant: "outline",
            className: "flex-1 border-border bg-card text-foreground hover:bg-muted text-xs sm:text-sm",
            onClick: () => window.open(f("google"), "_blank"),
            children: [
              /* @__PURE__ */ u.jsx(ir, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Google"
            ]
          }
        ),
        /* @__PURE__ */ u.jsxs(
          Xe,
          {
            variant: "outline",
            className: "flex-1 border-border bg-card text-foreground hover:bg-muted text-xs sm:text-sm",
            onClick: () => {
              const h = f("outlook"), p = document.createElement("a");
              p.href = h, p.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, p.click();
            },
            children: [
              /* @__PURE__ */ u.jsx(ir, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Outlook"
            ]
          }
        ),
        /* @__PURE__ */ u.jsxs(
          Xe,
          {
            variant: "outline",
            className: "flex-1 border-border bg-card text-foreground hover:bg-muted text-xs sm:text-sm",
            onClick: () => {
              const h = f("apple"), p = document.createElement("a");
              p.href = h, p.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, p.click();
            },
            children: [
              /* @__PURE__ */ u.jsx(ir, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Apple"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
const bs = Qt({});
function ws(e) {
  const t = Oe(null);
  return t.current === null && (t.current = e()), t.current;
}
const Fr = Qt(null), Ss = Qt({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class Sy extends x.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function Cy({ children: e, isPresent: t }) {
  const n = qo(), r = Oe(null), o = Oe({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: i } = we(Ss);
  return nl(() => {
    const { width: s, height: a, top: l, left: c } = o.current;
    if (t || !r.current || !s || !a)
      return;
    r.current.dataset.motionPopId = n;
    const f = document.createElement("style");
    return i && (f.nonce = i), document.head.appendChild(f), f.sheet && f.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `), () => {
      document.head.removeChild(f);
    };
  }, [t]), u.jsx(Sy, { isPresent: t, childRef: r, sizeRef: o, children: x.cloneElement(e, { ref: r }) });
}
const Dy = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: s }) => {
  const a = ws(Ty), l = qo(), c = Tt((d) => {
    a.set(d, !0);
    for (const h of a.values())
      if (!h)
        return;
    r && r();
  }, [a, r]), f = Nt(
    () => ({
      id: l,
      initial: t,
      isPresent: n,
      custom: o,
      onExitComplete: c,
      register: (d) => (a.set(d, !1), () => a.delete(d))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    i ? [Math.random(), c] : [n, c]
  );
  return Nt(() => {
    a.forEach((d, h) => a.set(h, !1));
  }, [n]), x.useEffect(() => {
    !n && !a.size && r && r();
  }, [n]), s === "popLayout" && (e = u.jsx(Cy, { isPresent: n, children: e })), u.jsx(Fr.Provider, { value: f, children: e });
};
function Ty() {
  return /* @__PURE__ */ new Map();
}
function bu(e = !0) {
  const t = we(Fr);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t, i = qo();
  Qe(() => {
    e && o(i);
  }, [e]);
  const s = Tt(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const Jn = (e) => e.key || "";
function _i(e) {
  const t = [];
  return nf.forEach(e, (n) => {
    rf(n) && t.push(n);
  }), t;
}
const Cs = typeof window < "u", wu = Cs ? tl : Qe, Bi = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: o = !0, mode: i = "sync", propagate: s = !1 }) => {
  const [a, l] = bu(s), c = Nt(() => _i(e), [e]), f = s && !a ? [] : c.map(Jn), d = Oe(!0), h = Oe(c), p = ws(() => /* @__PURE__ */ new Map()), [y, m] = W(c), [g, v] = W(c);
  wu(() => {
    d.current = !1, h.current = c;
    for (let S = 0; S < g.length; S++) {
      const C = Jn(g[S]);
      f.includes(C) ? p.delete(C) : p.get(C) !== !0 && p.set(C, !1);
    }
  }, [g, f.length, f.join("-")]);
  const b = [];
  if (c !== y) {
    let S = [...c];
    for (let C = 0; C < g.length; C++) {
      const D = g[C], P = Jn(D);
      f.includes(P) || (S.splice(C, 0, D), b.push(D));
    }
    i === "wait" && b.length && (S = b), v(_i(S)), m(c);
    return;
  }
  const { forceRender: w } = we(bs);
  return u.jsx(u.Fragment, { children: g.map((S) => {
    const C = Jn(S), D = s && !a ? !1 : c === g || f.includes(C), P = () => {
      if (p.has(C))
        p.set(C, !0);
      else
        return;
      let T = !0;
      p.forEach((R) => {
        R || (T = !1);
      }), T && (w == null || w(), v(h.current), s && (l == null || l()), r && r());
    };
    return u.jsx(Dy, { isPresent: D, initial: !d.current || n ? void 0 : !1, custom: D ? void 0 : t, presenceAffectsLayout: o, mode: i, onExitComplete: D ? void 0 : P, children: S }, C);
  }) });
}, Ne = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let Su = Ne;
// @__NO_SIDE_EFFECTS__
function Ds(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Xt = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Ze = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, Je = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, Py = {
  useManualTiming: !1
};
function Ay(e) {
  let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, o = !1;
  const i = /* @__PURE__ */ new WeakSet();
  let s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function a(c) {
    i.has(c) && (l.schedule(c), e()), c(s);
  }
  const l = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, f = !1, d = !1) => {
      const p = d && r ? t : n;
      return f && i.add(c), p.has(c) || p.add(c), c;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      n.delete(c), i.delete(c);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (s = c, r) {
        o = !0;
        return;
      }
      r = !0, [t, n] = [n, t], t.forEach(a), t.clear(), r = !1, o && (o = !1, l.process(c));
    }
  };
  return l;
}
const Qn = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], Ny = 40;
function Cu(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = () => n = !0, s = Qn.reduce((v, b) => (v[b] = Ay(i), v), {}), { read: a, resolveKeyframes: l, update: c, preRender: f, render: d, postRender: h } = s, p = () => {
    const v = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(v - o.timestamp, Ny), 1), o.timestamp = v, o.isProcessing = !0, a.process(o), l.process(o), c.process(o), f.process(o), d.process(o), h.process(o), o.isProcessing = !1, n && t && (r = !1, e(p));
  }, y = () => {
    n = !0, r = !0, o.isProcessing || e(p);
  };
  return { schedule: Qn.reduce((v, b) => {
    const w = s[b];
    return v[b] = (S, C = !1, D = !1) => (n || y(), w.schedule(S, C, D)), v;
  }, {}), cancel: (v) => {
    for (let b = 0; b < Qn.length; b++)
      s[Qn[b]].cancel(v);
  }, state: o, steps: s };
}
const { schedule: se, cancel: mt, state: ye, steps: oo } = Cu(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ne, !0), Du = Qt({ strict: !1 }), $i = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Zt = {};
for (const e in $i)
  Zt[e] = {
    isEnabled: (t) => $i[e].some((n) => !!t[n])
  };
function Ey(e) {
  for (const t in e)
    Zt[t] = {
      ...Zt[t],
      ...e[t]
    };
}
const My = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function xr(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || My.has(e);
}
let Tu = (e) => !xr(e);
function jy(e) {
  e && (Tu = (t) => t.startsWith("on") ? !xr(t) : e(t));
}
try {
  jy(require("@emotion/is-prop-valid").default);
} catch {
}
function ky(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (Tu(o) || n === !0 && xr(o) || !t && !xr(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function Ry(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...r) => e(...r);
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o))
  });
}
const _r = Qt({});
function Pn(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Br(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Ts = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Ps = ["initial", ...Ts];
function $r(e) {
  return Br(e.animate) || Ps.some((t) => Pn(e[t]));
}
function Pu(e) {
  return !!($r(e) || e.variants);
}
function Ly(e, t) {
  if ($r(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Pn(n) ? n : void 0,
      animate: Pn(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Iy(e) {
  const { initial: t, animate: n } = Ly(e, we(_r));
  return Nt(() => ({ initial: t, animate: n }), [zi(t), zi(n)]);
}
function zi(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Oy = Symbol.for("motionComponentSymbol");
function _t(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function Vy(e, t, n) {
  return Tt(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : _t(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const As = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Fy = "framerAppearId", Au = "data-" + As(Fy), { schedule: Ns } = Cu(queueMicrotask, !1), Nu = Qt({});
function _y(e, t, n, r, o) {
  var i, s;
  const { visualElement: a } = we(_r), l = we(Du), c = we(Fr), f = we(Ss).reducedMotion, d = Oe(null);
  r = r || l.renderer, !d.current && r && (d.current = r(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: f
  }));
  const h = d.current, p = we(Nu);
  h && !h.projection && o && (h.type === "html" || h.type === "svg") && By(d.current, n, o, p);
  const y = Oe(!1);
  nl(() => {
    h && y.current && h.update(n, c);
  });
  const m = n[Au], g = Oe(!!m && !(!((i = window.MotionHandoffIsComplete) === null || i === void 0) && i.call(window, m)) && ((s = window.MotionHasOptimisedAnimation) === null || s === void 0 ? void 0 : s.call(window, m)));
  return wu(() => {
    h && (y.current = !0, window.MotionIsMounted = !0, h.updateFeatures(), Ns.render(h.render), g.current && h.animationState && h.animationState.animateChanges());
  }), Qe(() => {
    h && (!g.current && h.animationState && h.animationState.animateChanges(), g.current && (queueMicrotask(() => {
      var v;
      (v = window.MotionHandoffMarkAsComplete) === null || v === void 0 || v.call(window, m);
    }), g.current = !1));
  }), h;
}
function By(e, t, n, r) {
  const { layoutId: o, layout: i, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Eu(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: i,
    alwaysMeasureLayout: !!s || a && _t(a),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof i == "string" ? i : "both",
    initialPromotionConfig: r,
    layoutScroll: l,
    layoutRoot: c
  });
}
function Eu(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : Eu(e.parent);
}
function $y({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  var i, s;
  e && Ey(e);
  function a(c, f) {
    let d;
    const h = {
      ...we(Ss),
      ...c,
      layoutId: zy(c)
    }, { isStatic: p } = h, y = Iy(c), m = r(c, p);
    if (!p && Cs) {
      Uy();
      const g = Wy(h);
      d = g.MeasureLayout, y.visualElement = _y(o, m, h, t, g.ProjectionNode);
    }
    return u.jsxs(_r.Provider, { value: y, children: [d && y.visualElement ? u.jsx(d, { visualElement: y.visualElement, ...h }) : null, n(o, c, Vy(m, y.visualElement, f), m, p, y.visualElement)] });
  }
  a.displayName = `motion.${typeof o == "string" ? o : `create(${(s = (i = o.displayName) !== null && i !== void 0 ? i : o.name) !== null && s !== void 0 ? s : ""})`}`;
  const l = Yo(a);
  return l[Oy] = o, l;
}
function zy({ layoutId: e }) {
  const t = we(bs).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Uy(e, t) {
  we(Du).strict;
}
function Wy(e) {
  const { drag: t, layout: n } = Zt;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const Hy = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Es(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Hy.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function Ui(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Ms(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = Ui(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, i] = Ui(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
const ko = (e) => Array.isArray(e), Ky = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), Gy = (e) => ko(e) ? e[e.length - 1] || 0 : e, Se = (e) => !!(e && e.getVelocity);
function lr(e) {
  const t = Se(e) ? e.get() : e;
  return Ky(t) ? t.toValue() : t;
}
function Yy({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, o, i) {
  const s = {
    latestValues: qy(r, o, i, e),
    renderState: t()
  };
  return n && (s.onMount = (a) => n({ props: r, current: a, ...s }), s.onUpdate = (a) => n(a)), s;
}
const Mu = (e) => (t, n) => {
  const r = we(_r), o = we(Fr), i = () => Yy(e, t, r, o);
  return n ? i() : ws(i);
};
function qy(e, t, n, r) {
  const o = {}, i = r(e, {});
  for (const h in i)
    o[h] = lr(i[h]);
  let { initial: s, animate: a } = e;
  const l = $r(e), c = Pu(e);
  t && c && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let f = n ? n.initial === !1 : !1;
  f = f || s === !1;
  const d = f ? a : s;
  if (d && typeof d != "boolean" && !Br(d)) {
    const h = Array.isArray(d) ? d : [d];
    for (let p = 0; p < h.length; p++) {
      const y = Ms(e, h[p]);
      if (y) {
        const { transitionEnd: m, transition: g, ...v } = y;
        for (const b in v) {
          let w = v[b];
          if (Array.isArray(w)) {
            const S = f ? w.length - 1 : 0;
            w = w[S];
          }
          w !== null && (o[b] = w);
        }
        for (const b in m)
          o[b] = m[b];
      }
    }
  }
  return o;
}
const sn = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Rt = new Set(sn), ju = (e) => (t) => typeof t == "string" && t.startsWith(e), ku = /* @__PURE__ */ ju("--"), Xy = /* @__PURE__ */ ju("var(--"), js = (e) => Xy(e) ? Zy.test(e.split("/*")[0].trim()) : !1, Zy = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Ru = (e, t) => t && typeof e == "number" ? t.transform(e) : e, nt = (e, t, n) => n > t ? t : n < e ? e : n, an = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, An = {
  ...an,
  transform: (e) => nt(0, 1, e)
}, er = {
  ...an,
  default: 1
}, In = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), ut = /* @__PURE__ */ In("deg"), We = /* @__PURE__ */ In("%"), $ = /* @__PURE__ */ In("px"), Jy = /* @__PURE__ */ In("vh"), Qy = /* @__PURE__ */ In("vw"), Wi = {
  ...We,
  parse: (e) => We.parse(e) / 100,
  transform: (e) => We.transform(e * 100)
}, ev = {
  // Border props
  borderWidth: $,
  borderTopWidth: $,
  borderRightWidth: $,
  borderBottomWidth: $,
  borderLeftWidth: $,
  borderRadius: $,
  radius: $,
  borderTopLeftRadius: $,
  borderTopRightRadius: $,
  borderBottomRightRadius: $,
  borderBottomLeftRadius: $,
  // Positioning props
  width: $,
  maxWidth: $,
  height: $,
  maxHeight: $,
  top: $,
  right: $,
  bottom: $,
  left: $,
  // Spacing props
  padding: $,
  paddingTop: $,
  paddingRight: $,
  paddingBottom: $,
  paddingLeft: $,
  margin: $,
  marginTop: $,
  marginRight: $,
  marginBottom: $,
  marginLeft: $,
  // Misc
  backgroundPositionX: $,
  backgroundPositionY: $
}, tv = {
  rotate: ut,
  rotateX: ut,
  rotateY: ut,
  rotateZ: ut,
  scale: er,
  scaleX: er,
  scaleY: er,
  scaleZ: er,
  skew: ut,
  skewX: ut,
  skewY: ut,
  distance: $,
  translateX: $,
  translateY: $,
  translateZ: $,
  x: $,
  y: $,
  z: $,
  perspective: $,
  transformPerspective: $,
  opacity: An,
  originX: Wi,
  originY: Wi,
  originZ: $
}, Hi = {
  ...an,
  transform: Math.round
}, ks = {
  ...ev,
  ...tv,
  zIndex: Hi,
  size: $,
  // SVG
  fillOpacity: An,
  strokeOpacity: An,
  numOctaves: Hi
}, nv = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, rv = sn.length;
function ov(e, t, n) {
  let r = "", o = !0;
  for (let i = 0; i < rv; i++) {
    const s = sn[i], a = e[s];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (s.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const c = Ru(a, ks[s]);
      if (!l) {
        o = !1;
        const f = nv[s] || s;
        r += `${f}(${c}) `;
      }
      n && (t[s] = c);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function Rs(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let s = !1, a = !1;
  for (const l in t) {
    const c = t[l];
    if (Rt.has(l)) {
      s = !0;
      continue;
    } else if (ku(l)) {
      o[l] = c;
      continue;
    } else {
      const f = Ru(c, ks[l]);
      l.startsWith("origin") ? (a = !0, i[l] = f) : r[l] = f;
    }
  }
  if (t.transform || (s || n ? r.transform = ov(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: c = "50%", originZ: f = 0 } = i;
    r.transformOrigin = `${l} ${c} ${f}`;
  }
}
const sv = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, iv = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function av(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? sv : iv;
  e[i.offset] = $.transform(-r);
  const s = $.transform(t), a = $.transform(n);
  e[i.array] = `${s} ${a}`;
}
function Ki(e, t, n) {
  return typeof e == "string" ? e : $.transform(t + n * e);
}
function lv(e, t, n) {
  const r = Ki(t, e.x, e.width), o = Ki(n, e.y, e.height);
  return `${r} ${o}`;
}
function Ls(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: o,
  originY: i,
  pathLength: s,
  pathSpacing: a = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, f, d) {
  if (Rs(e, c, d), f) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: h, style: p, dimensions: y } = e;
  h.transform && (y && (p.transform = h.transform), delete h.transform), y && (o !== void 0 || i !== void 0 || p.transform) && (p.transformOrigin = lv(y, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (h.x = t), n !== void 0 && (h.y = n), r !== void 0 && (h.scale = r), s !== void 0 && av(h, s, a, l, !1);
}
const Is = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), Lu = () => ({
  ...Is(),
  attrs: {}
}), Os = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Iu(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n)
    e.style.setProperty(i, n[i]);
}
const Ou = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Vu(e, t, n, r) {
  Iu(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(Ou.has(o) ? o : As(o), t.attrs[o]);
}
const br = {};
function cv(e) {
  Object.assign(br, e);
}
function Fu(e, { layout: t, layoutId: n }) {
  return Rt.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!br[e] || e === "opacity");
}
function Vs(e, t, n) {
  var r;
  const { style: o } = e, i = {};
  for (const s in o)
    (Se(o[s]) || t.style && Se(t.style[s]) || Fu(s, e) || ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (i[s] = o[s]);
  return i;
}
function _u(e, t, n) {
  const r = Vs(e, t, n);
  for (const o in e)
    if (Se(e[o]) || Se(t[o])) {
      const i = sn.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[i] = e[o];
    }
  return r;
}
function uv(e, t) {
  try {
    t.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
}
const Gi = ["x", "y", "width", "height", "cx", "cy", "r"], dv = {
  useVisualState: Mu({
    scrapeMotionValuesFromProps: _u,
    createRenderState: Lu,
    onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: o }) => {
      if (!n)
        return;
      let i = !!e.drag;
      if (!i) {
        for (const a in o)
          if (Rt.has(a)) {
            i = !0;
            break;
          }
      }
      if (!i)
        return;
      let s = !t;
      if (t)
        for (let a = 0; a < Gi.length; a++) {
          const l = Gi[a];
          e[l] !== t[l] && (s = !0);
        }
      s && se.read(() => {
        uv(n, r), se.render(() => {
          Ls(r, o, Os(n.tagName), e.transformTemplate), Vu(n, r);
        });
      });
    }
  })
}, fv = {
  useVisualState: Mu({
    scrapeMotionValuesFromProps: Vs,
    createRenderState: Is
  })
};
function Bu(e, t, n) {
  for (const r in t)
    !Se(t[r]) && !Fu(r, n) && (e[r] = t[r]);
}
function hv({ transformTemplate: e }, t) {
  return Nt(() => {
    const n = Is();
    return Rs(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function pv(e, t) {
  const n = e.style || {}, r = {};
  return Bu(r, n, e), Object.assign(r, hv(e, t)), r;
}
function mv(e, t) {
  const n = {}, r = pv(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function gv(e, t, n, r) {
  const o = Nt(() => {
    const i = Lu();
    return Ls(i, t, Os(r), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    Bu(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function yv(e = !1) {
  return (n, r, o, { latestValues: i }, s) => {
    const l = (Es(n) ? gv : mv)(r, i, s, n), c = ky(r, typeof n == "string", e), f = n !== rl ? { ...c, ...l, ref: o } : {}, { children: d } = r, h = Nt(() => Se(d) ? d.get() : d, [d]);
    return dr(n, {
      ...f,
      children: h
    });
  };
}
function vv(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const s = {
      ...Es(r) ? dv : fv,
      preloadedFeatures: e,
      useRender: yv(o),
      createVisualElement: t,
      Component: r
    };
    return $y(s);
  };
}
function $u(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function zr(e, t, n) {
  const r = e.getProps();
  return Ms(r, t, n !== void 0 ? n : r.custom, e);
}
const xv = /* @__PURE__ */ Ds(() => window.ScrollTimeline !== void 0);
class bv {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((t) => "finished" in t ? t.finished : t));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++)
      this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((o) => {
      if (xv() && o.attachTimeline)
        return o.attachTimeline(t);
      if (typeof n == "function")
        return n(o);
    });
    return () => {
      r.forEach((o, i) => {
        o && o(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class wv extends bv {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function Fs(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Ro = 2e4;
function zu(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Ro; )
    t += n, r = e.next(t);
  return t >= Ro ? 1 / 0 : t;
}
function _s(e) {
  return typeof e == "function";
}
function Yi(e, t) {
  e.timeline = t, e.onfinish = null;
}
const Bs = (e) => Array.isArray(e) && typeof e[0] == "number", Sv = {
  linearEasing: void 0
};
function Cv(e, t) {
  const n = /* @__PURE__ */ Ds(e);
  return () => {
    var r;
    return (r = Sv[t]) !== null && r !== void 0 ? r : n();
  };
}
const wr = /* @__PURE__ */ Cv(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Uu = (e, t, n = 10) => {
  let r = "";
  const o = Math.max(Math.round(t / n), 2);
  for (let i = 0; i < o; i++)
    r += e(/* @__PURE__ */ Xt(0, o - 1, i)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function Wu(e) {
  return !!(typeof e == "function" && wr() || !e || typeof e == "string" && (e in Lo || wr()) || Bs(e) || Array.isArray(e) && e.every(Wu));
}
const hn = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Lo = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ hn([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ hn([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ hn([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ hn([0.33, 1.53, 0.69, 0.99])
};
function Hu(e, t) {
  if (e)
    return typeof e == "function" && wr() ? Uu(e, t) : Bs(e) ? hn(e) : Array.isArray(e) ? e.map((n) => Hu(n, t) || Lo.easeOut) : Lo[e];
}
const Ie = {
  x: !1,
  y: !1
};
function Ku() {
  return Ie.x || Ie.y;
}
function Dv(e, t, n) {
  var r;
  if (e instanceof Element)
    return [e];
  if (typeof e == "string") {
    let o = document;
    const i = (r = void 0) !== null && r !== void 0 ? r : o.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
function Gu(e, t) {
  const n = Dv(e), r = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, o, () => r.abort()];
}
function qi(e) {
  return (t) => {
    t.pointerType === "touch" || Ku() || e(t);
  };
}
function Tv(e, t, n = {}) {
  const [r, o, i] = Gu(e, n), s = qi((a) => {
    const { target: l } = a, c = t(a);
    if (typeof c != "function" || !l)
      return;
    const f = qi((d) => {
      c(d), l.removeEventListener("pointerleave", f);
    });
    l.addEventListener("pointerleave", f, o);
  });
  return r.forEach((a) => {
    a.addEventListener("pointerenter", s, o);
  }), i;
}
const Yu = (e, t) => t ? e === t ? !0 : Yu(e, t.parentElement) : !1, $s = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, Pv = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Av(e) {
  return Pv.has(e.tagName) || e.tabIndex !== -1;
}
const pn = /* @__PURE__ */ new WeakSet();
function Xi(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function so(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const Nv = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = Xi(() => {
    if (pn.has(n))
      return;
    so(n, "down");
    const o = Xi(() => {
      so(n, "up");
    }), i = () => so(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", i, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Zi(e) {
  return $s(e) && !Ku();
}
function Ev(e, t, n = {}) {
  const [r, o, i] = Gu(e, n), s = (a) => {
    const l = a.currentTarget;
    if (!Zi(a) || pn.has(l))
      return;
    pn.add(l);
    const c = t(a), f = (p, y) => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", h), !(!Zi(p) || !pn.has(l)) && (pn.delete(l), typeof c == "function" && c(p, { success: y }));
    }, d = (p) => {
      f(p, n.useGlobalTarget || Yu(l, p.target));
    }, h = (p) => {
      f(p, !1);
    };
    window.addEventListener("pointerup", d, o), window.addEventListener("pointercancel", h, o);
  };
  return r.forEach((a) => {
    !Av(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, o), a.addEventListener("focus", (c) => Nv(c, o), o);
  }), i;
}
function Mv(e) {
  return e === "x" || e === "y" ? Ie[e] ? null : (Ie[e] = !0, () => {
    Ie[e] = !1;
  }) : Ie.x || Ie.y ? null : (Ie.x = Ie.y = !0, () => {
    Ie.x = Ie.y = !1;
  });
}
const qu = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...sn
]);
let cr;
function jv() {
  cr = void 0;
}
const He = {
  now: () => (cr === void 0 && He.set(ye.isProcessing || Py.useManualTiming ? ye.timestamp : performance.now()), cr),
  set: (e) => {
    cr = e, queueMicrotask(jv);
  }
};
function zs(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Us(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Ws {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return zs(this.subscriptions, t), () => Us(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Xu(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Ji = 30, kv = (e) => !isNaN(parseFloat(e));
class Rv {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, o = !0) => {
      const i = He.now();
      this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = He.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = kv(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Ws());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), se.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = He.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Ji)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Ji);
    return Xu(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Nn(e, t) {
  return new Rv(e, t);
}
function Lv(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Nn(n));
}
function Iv(e, t) {
  const n = zr(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const s in i) {
    const a = Gy(i[s]);
    Lv(e, s, a);
  }
}
function Ov(e) {
  return !!(Se(e) && e.add);
}
function Io(e, t) {
  const n = e.getValue("willChange");
  if (Ov(n))
    return n.add(t);
}
function Zu(e) {
  return e.props[Au];
}
const Ju = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Vv = 1e-7, Fv = 12;
function _v(e, t, n, r, o) {
  let i, s, a = 0;
  do
    s = t + (n - t) / 2, i = Ju(s, r, o) - e, i > 0 ? n = s : t = s;
  while (Math.abs(i) > Vv && ++a < Fv);
  return s;
}
function On(e, t, n, r) {
  if (e === t && n === r)
    return Ne;
  const o = (i) => _v(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : Ju(o(i), t, r);
}
const Qu = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, ed = (e) => (t) => 1 - e(1 - t), td = /* @__PURE__ */ On(0.33, 1.53, 0.69, 0.99), Hs = /* @__PURE__ */ ed(td), nd = /* @__PURE__ */ Qu(Hs), rd = (e) => (e *= 2) < 1 ? 0.5 * Hs(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Ks = (e) => 1 - Math.sin(Math.acos(e)), od = ed(Ks), sd = Qu(Ks), id = (e) => /^0[^.\s]+$/u.test(e);
function Bv(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || id(e) : !0;
}
const yn = (e) => Math.round(e * 1e5) / 1e5, Gs = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function $v(e) {
  return e == null;
}
const zv = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Ys = (e, t) => (n) => !!(typeof n == "string" && zv.test(n) && n.startsWith(e) || t && !$v(n) && Object.prototype.hasOwnProperty.call(n, t)), ad = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, i, s, a] = r.match(Gs);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(s),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, Uv = (e) => nt(0, 255, e), io = {
  ...an,
  transform: (e) => Math.round(Uv(e))
}, Pt = {
  test: /* @__PURE__ */ Ys("rgb", "red"),
  parse: /* @__PURE__ */ ad("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + io.transform(e) + ", " + io.transform(t) + ", " + io.transform(n) + ", " + yn(An.transform(r)) + ")"
};
function Wv(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Oo = {
  test: /* @__PURE__ */ Ys("#"),
  parse: Wv,
  transform: Pt.transform
}, Bt = {
  test: /* @__PURE__ */ Ys("hsl", "hue"),
  parse: /* @__PURE__ */ ad("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + We.transform(yn(t)) + ", " + We.transform(yn(n)) + ", " + yn(An.transform(r)) + ")"
}, be = {
  test: (e) => Pt.test(e) || Oo.test(e) || Bt.test(e),
  parse: (e) => Pt.test(e) ? Pt.parse(e) : Bt.test(e) ? Bt.parse(e) : Oo.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Pt.transform(e) : Bt.transform(e)
}, Hv = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Kv(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(Gs)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Hv)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const ld = "number", cd = "color", Gv = "var", Yv = "var(", Qi = "${}", qv = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function En(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let i = 0;
  const a = t.replace(qv, (l) => (be.test(l) ? (r.color.push(i), o.push(cd), n.push(be.parse(l))) : l.startsWith(Yv) ? (r.var.push(i), o.push(Gv), n.push(l)) : (r.number.push(i), o.push(ld), n.push(parseFloat(l))), ++i, Qi)).split(Qi);
  return { values: n, split: a, indexes: r, types: o };
}
function ud(e) {
  return En(e).values;
}
function dd(e) {
  const { split: t, types: n } = En(e), r = t.length;
  return (o) => {
    let i = "";
    for (let s = 0; s < r; s++)
      if (i += t[s], o[s] !== void 0) {
        const a = n[s];
        a === ld ? i += yn(o[s]) : a === cd ? i += be.transform(o[s]) : i += o[s];
      }
    return i;
  };
}
const Xv = (e) => typeof e == "number" ? 0 : e;
function Zv(e) {
  const t = ud(e);
  return dd(e)(t.map(Xv));
}
const gt = {
  test: Kv,
  parse: ud,
  createTransformer: dd,
  getAnimatableNone: Zv
}, Jv = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Qv(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(Gs) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = Jv.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const ex = /\b([a-z-]*)\(.*?\)/gu, Vo = {
  ...gt,
  getAnimatableNone: (e) => {
    const t = e.match(ex);
    return t ? t.map(Qv).join(" ") : e;
  }
}, tx = {
  ...ks,
  // Color props
  color: be,
  backgroundColor: be,
  outlineColor: be,
  fill: be,
  stroke: be,
  // Border props
  borderColor: be,
  borderTopColor: be,
  borderRightColor: be,
  borderBottomColor: be,
  borderLeftColor: be,
  filter: Vo,
  WebkitFilter: Vo
}, qs = (e) => tx[e];
function fd(e, t) {
  let n = qs(e);
  return n !== Vo && (n = gt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const nx = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function rx(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !nx.has(i) && En(i).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const i of t)
      e[i] = fd(n, o);
}
const ea = (e) => e === an || e === $, ta = (e, t) => parseFloat(e.split(", ")[t]), na = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/u);
  if (o)
    return ta(o[1], t);
  {
    const i = r.match(/^matrix\((.+)\)$/u);
    return i ? ta(i[1], e) : 0;
  }
}, ox = /* @__PURE__ */ new Set(["x", "y", "z"]), sx = sn.filter((e) => !ox.has(e));
function ix(e) {
  const t = [];
  return sx.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Jt = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: na(4, 13),
  y: na(5, 14)
};
Jt.translateX = Jt.x;
Jt.translateY = Jt.y;
const At = /* @__PURE__ */ new Set();
let Fo = !1, _o = !1;
function hd() {
  if (_o) {
    const e = Array.from(At).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = ix(r);
      o.length && (n.set(r, o), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const o = n.get(r);
      o && o.forEach(([i, s]) => {
        var a;
        (a = r.getValue(i)) === null || a === void 0 || a.set(s);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  _o = !1, Fo = !1, At.forEach((e) => e.complete()), At.clear();
}
function pd() {
  At.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (_o = !0);
  });
}
function ax() {
  pd(), hd();
}
class Xs {
  constructor(t, n, r, o, i, s = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = i, this.isAsync = s;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (At.add(this), Fo || (Fo = !0, se.read(pd), se.resolveKeyframes(hd))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: o } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const s = o == null ? void 0 : o.get(), a = t[t.length - 1];
          if (s !== void 0)
            t[0] = s;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), o && s === void 0 && o.set(t[0]);
        } else
          t[i] = t[i - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), At.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, At.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const md = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), lx = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function cx(e) {
  const t = lx.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function gd(e, t, n = 1) {
  const [r, o] = cx(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const s = i.trim();
    return md(s) ? parseFloat(s) : s;
  }
  return js(o) ? gd(o, t, n + 1) : o;
}
const yd = (e) => (t) => t.test(e), ux = {
  test: (e) => e === "auto",
  parse: (e) => e
}, vd = [an, $, We, ut, Qy, Jy, ux], ra = (e) => vd.find(yd(e));
class xd extends Xs {
  constructor(t, n, r, o, i) {
    super(t, n, r, o, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == "string" && (c = c.trim(), js(c))) {
        const f = gd(c, n.current);
        f !== void 0 && (t[l] = f), l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !qu.has(r) || t.length !== 2)
      return;
    const [o, i] = t, s = ra(o), a = ra(i);
    if (s !== a)
      if (ea(s) && ea(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == "string" && (t[l] = parseFloat(c));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let o = 0; o < t.length; o++)
      Bv(t[o]) && r.push(o);
    r.length && rx(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Jt[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: o } = this;
    if (!n || !n.current)
      return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const s = o.length - 1, a = o[s];
    o[s] = Jt[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, c]) => {
      n.getValue(l).set(c);
    }), this.resolveNoneKeyframes();
  }
}
const oa = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(gt.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function dx(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function fx(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const i = e[e.length - 1], s = oa(o, t), a = oa(i, t);
  return !s || !a ? !1 : dx(e) || (n === "spring" || _s(n)) && r;
}
const hx = (e) => e !== null;
function Ur(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(hx), i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !i || r === void 0 ? o[i] : r;
}
const px = 40;
class bd {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: i = 0, repeatType: s = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = He.now(), this.options = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: o,
      repeatDelay: i,
      repeatType: s,
      ...a
    }, this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > px ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && ax(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = He.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: o, velocity: i, delay: s, onComplete: a, onUpdate: l, isGenerator: c } = this.options;
    if (!c && !fx(t, r, o, i))
      if (s)
        this.options.duration = 0;
      else {
        l && l(Ur(t, this.options, n)), a && a(), this.resolveFinishedPromise();
        return;
      }
    const f = this.initPlayback(t, n);
    f !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: n,
      ...f
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    this.options.type = "keyframes", this.options.ease = "linear";
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const ae = (e, t, n) => e + (t - e) * n;
function ao(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function mx({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, i = 0, s = 0;
  if (!t)
    o = i = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    o = ao(l, a, e + 1 / 3), i = ao(l, a, e), s = ao(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r
  };
}
function Sr(e, t) {
  return (n) => n > 0 ? t : e;
}
const lo = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, gx = [Oo, Pt, Bt], yx = (e) => gx.find((t) => t.test(e));
function sa(e) {
  const t = yx(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === Bt && (n = mx(n)), n;
}
const ia = (e, t) => {
  const n = sa(e), r = sa(t);
  if (!n || !r)
    return Sr(e, t);
  const o = { ...n };
  return (i) => (o.red = lo(n.red, r.red, i), o.green = lo(n.green, r.green, i), o.blue = lo(n.blue, r.blue, i), o.alpha = ae(n.alpha, r.alpha, i), Pt.transform(o));
}, vx = (e, t) => (n) => t(e(n)), Vn = (...e) => e.reduce(vx), Bo = /* @__PURE__ */ new Set(["none", "hidden"]);
function xx(e, t) {
  return Bo.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function bx(e, t) {
  return (n) => ae(e, t, n);
}
function Zs(e) {
  return typeof e == "number" ? bx : typeof e == "string" ? js(e) ? Sr : be.test(e) ? ia : Cx : Array.isArray(e) ? wd : typeof e == "object" ? be.test(e) ? ia : wx : Sr;
}
function wd(e, t) {
  const n = [...e], r = n.length, o = e.map((i, s) => Zs(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < r; s++)
      n[s] = o[s](i);
    return n;
  };
}
function wx(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = Zs(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}
function Sx(e, t) {
  var n;
  const r = [], o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i], a = e.indexes[s][o[s]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    r[i] = l, o[s]++;
  }
  return r;
}
const Cx = (e, t) => {
  const n = gt.createTransformer(t), r = En(e), o = En(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? Bo.has(e) && !o.values.length || Bo.has(t) && !r.values.length ? xx(e, t) : Vn(wd(Sx(r, o), o.values), n) : Sr(e, t);
};
function Sd(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? ae(e, t, n) : Zs(e)(e, t);
}
const Dx = 5;
function Cd(e, t, n) {
  const r = Math.max(t - Dx, 0);
  return Xu(n - e(r), t - r);
}
const ue = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, co = 1e-3;
function Tx({ duration: e = ue.duration, bounce: t = ue.bounce, velocity: n = ue.velocity, mass: r = ue.mass }) {
  let o, i, s = 1 - t;
  s = nt(ue.minDamping, ue.maxDamping, s), e = nt(ue.minDuration, ue.maxDuration, /* @__PURE__ */ Je(e)), s < 1 ? (o = (c) => {
    const f = c * s, d = f * e, h = f - n, p = $o(c, s), y = Math.exp(-d);
    return co - h / p * y;
  }, i = (c) => {
    const d = c * s * e, h = d * n + n, p = Math.pow(s, 2) * Math.pow(c, 2) * e, y = Math.exp(-d), m = $o(Math.pow(c, 2), s);
    return (-o(c) + co > 0 ? -1 : 1) * ((h - p) * y) / m;
  }) : (o = (c) => {
    const f = Math.exp(-c * e), d = (c - n) * e + 1;
    return -co + f * d;
  }, i = (c) => {
    const f = Math.exp(-c * e), d = (n - c) * (e * e);
    return f * d;
  });
  const a = 5 / e, l = Ax(o, i, a);
  if (e = /* @__PURE__ */ Ze(e), isNaN(l))
    return {
      stiffness: ue.stiffness,
      damping: ue.damping,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * r;
    return {
      stiffness: c,
      damping: s * 2 * Math.sqrt(r * c),
      duration: e
    };
  }
}
const Px = 12;
function Ax(e, t, n) {
  let r = n;
  for (let o = 1; o < Px; o++)
    r = r - e(r) / t(r);
  return r;
}
function $o(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Nx = ["duration", "bounce"], Ex = ["stiffness", "damping", "mass"];
function aa(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Mx(e) {
  let t = {
    velocity: ue.velocity,
    stiffness: ue.stiffness,
    damping: ue.damping,
    mass: ue.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!aa(e, Ex) && aa(e, Nx))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, i = 2 * nt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: ue.mass,
        stiffness: o,
        damping: i
      };
    } else {
      const n = Tx(e);
      t = {
        ...t,
        ...n,
        mass: ue.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Dd(e = ue.visualDuration, t = ue.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: o } = n;
  const i = n.keyframes[0], s = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: i }, { stiffness: l, damping: c, mass: f, duration: d, velocity: h, isResolvedFromDuration: p } = Mx({
    ...n,
    velocity: -/* @__PURE__ */ Je(n.velocity || 0)
  }), y = h || 0, m = c / (2 * Math.sqrt(l * f)), g = s - i, v = /* @__PURE__ */ Je(Math.sqrt(l / f)), b = Math.abs(g) < 5;
  r || (r = b ? ue.restSpeed.granular : ue.restSpeed.default), o || (o = b ? ue.restDelta.granular : ue.restDelta.default);
  let w;
  if (m < 1) {
    const C = $o(v, m);
    w = (D) => {
      const P = Math.exp(-m * v * D);
      return s - P * ((y + m * v * g) / C * Math.sin(C * D) + g * Math.cos(C * D));
    };
  } else if (m === 1)
    w = (C) => s - Math.exp(-v * C) * (g + (y + v * g) * C);
  else {
    const C = v * Math.sqrt(m * m - 1);
    w = (D) => {
      const P = Math.exp(-m * v * D), T = Math.min(C * D, 300);
      return s - P * ((y + m * v * g) * Math.sinh(T) + C * g * Math.cosh(T)) / C;
    };
  }
  const S = {
    calculatedDuration: p && d || null,
    next: (C) => {
      const D = w(C);
      if (p)
        a.done = C >= d;
      else {
        let P = 0;
        m < 1 && (P = C === 0 ? /* @__PURE__ */ Ze(y) : Cd(w, C, D));
        const T = Math.abs(P) <= r, R = Math.abs(s - D) <= o;
        a.done = T && R;
      }
      return a.value = a.done ? s : D, a;
    },
    toString: () => {
      const C = Math.min(zu(S), Ro), D = Uu((P) => S.next(C * P).value, C, 30);
      return C + "ms " + D;
    }
  };
  return S;
}
function la({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: s, min: a, max: l, restDelta: c = 0.5, restSpeed: f }) {
  const d = e[0], h = {
    done: !1,
    value: d
  }, p = (T) => a !== void 0 && T < a || l !== void 0 && T > l, y = (T) => a === void 0 ? l : l === void 0 || Math.abs(a - T) < Math.abs(l - T) ? a : l;
  let m = n * t;
  const g = d + m, v = s === void 0 ? g : s(g);
  v !== g && (m = v - d);
  const b = (T) => -m * Math.exp(-T / r), w = (T) => v + b(T), S = (T) => {
    const R = b(T), O = w(T);
    h.done = Math.abs(R) <= c, h.value = h.done ? v : O;
  };
  let C, D;
  const P = (T) => {
    p(h.value) && (C = T, D = Dd({
      keyframes: [h.value, y(h.value)],
      velocity: Cd(w, T, h.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: i,
      restDelta: c,
      restSpeed: f
    }));
  };
  return P(0), {
    calculatedDuration: null,
    next: (T) => {
      let R = !1;
      return !D && C === void 0 && (R = !0, S(T), P(T)), C !== void 0 && T >= C ? D.next(T - C) : (!R && S(T), h);
    }
  };
}
const jx = /* @__PURE__ */ On(0.42, 0, 1, 1), kx = /* @__PURE__ */ On(0, 0, 0.58, 1), Td = /* @__PURE__ */ On(0.42, 0, 0.58, 1), Rx = (e) => Array.isArray(e) && typeof e[0] != "number", Lx = {
  linear: Ne,
  easeIn: jx,
  easeInOut: Td,
  easeOut: kx,
  circIn: Ks,
  circInOut: sd,
  circOut: od,
  backIn: Hs,
  backInOut: nd,
  backOut: td,
  anticipate: rd
}, ca = (e) => {
  if (Bs(e)) {
    Su(e.length === 4);
    const [t, n, r, o] = e;
    return On(t, n, r, o);
  } else if (typeof e == "string")
    return Lx[e];
  return e;
};
function Ix(e, t, n) {
  const r = [], o = n || Sd, i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Ne : t;
      a = Vn(l, a);
    }
    r.push(a);
  }
  return r;
}
function Ox(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (Su(i === t.length), i === 1)
    return () => t[0];
  if (i === 2 && t[0] === t[1])
    return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = Ix(t, r, o), l = a.length, c = (f) => {
    if (s && f < e[0])
      return t[0];
    let d = 0;
    if (l > 1)
      for (; d < e.length - 2 && !(f < e[d + 1]); d++)
        ;
    const h = /* @__PURE__ */ Xt(e[d], e[d + 1], f);
    return a[d](h);
  };
  return n ? (f) => c(nt(e[0], e[i - 1], f)) : c;
}
function Vx(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ Xt(0, t, r);
    e.push(ae(n, 1, o));
  }
}
function Fx(e) {
  const t = [0];
  return Vx(t, e.length - 1), t;
}
function _x(e, t) {
  return e.map((n) => n * t);
}
function Bx(e, t) {
  return e.map(() => t || Td).splice(0, e.length - 1);
}
function Cr({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = Rx(r) ? r.map(ca) : ca(r), i = {
    done: !1,
    value: t[0]
  }, s = _x(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : Fx(t),
    e
  ), a = Ox(s, t, {
    ease: Array.isArray(o) ? o : Bx(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = a(l), i.done = l >= e, i)
  };
}
const $x = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => se.update(t, !0),
    stop: () => mt(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ye.isProcessing ? ye.timestamp : He.now()
  };
}, zx = {
  decay: la,
  inertia: la,
  tween: Cr,
  keyframes: Cr,
  spring: Dd
}, Ux = (e) => e / 100;
class Js extends bd {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options, s = (o == null ? void 0 : o.KeyframeResolver) || Xs, a = (l, c) => this.onKeyframesResolved(l, c);
    this.resolver = new s(i, a, n, r, o), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: i, velocity: s = 0 } = this.options, a = _s(n) ? n : zx[n] || Cr;
    let l, c;
    a !== Cr && typeof t[0] != "number" && (l = Vn(Ux, Sd(t[0], t[1])), t = [0, 100]);
    const f = a({ ...this.options, keyframes: t });
    i === "mirror" && (c = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -s
    })), f.calculatedDuration === null && (f.calculatedDuration = zu(f));
    const { calculatedDuration: d } = f, h = d + o, p = h * (r + 1) - o;
    return {
      generator: f,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: h,
      totalDuration: p
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: T } = this.options;
      return { done: !0, value: T[T.length - 1] };
    }
    const { finalKeyframe: o, generator: i, mirroredGenerator: s, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: c, totalDuration: f, resolvedDuration: d } = r;
    if (this.startTime === null)
      return i.next(0);
    const { delay: h, repeat: p, repeatType: y, repeatDelay: m, onUpdate: g } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - f / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const v = this.currentTime - h * (this.speed >= 0 ? 1 : -1), b = this.speed >= 0 ? v < 0 : v > f;
    this.currentTime = Math.max(v, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = f);
    let w = this.currentTime, S = i;
    if (p) {
      const T = Math.min(this.currentTime, f) / d;
      let R = Math.floor(T), O = T % 1;
      !O && T >= 1 && (O = 1), O === 1 && R--, R = Math.min(R, p + 1), !!(R % 2) && (y === "reverse" ? (O = 1 - O, m && (O -= m / d)) : y === "mirror" && (S = s)), w = nt(0, 1, O) * d;
    }
    const C = b ? { done: !1, value: l[0] } : S.next(w);
    a && (C.value = a(C.value));
    let { done: D } = C;
    !b && c !== null && (D = this.speed >= 0 ? this.currentTime >= f : this.currentTime <= 0);
    const P = this.holdTime === null && (this.state === "finished" || this.state === "running" && D);
    return P && o !== void 0 && (C.value = Ur(l, this.options, o)), g && g(C.value), P && this.finish(), C;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? /* @__PURE__ */ Je(t.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ Je(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ Ze(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ Je(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = $x, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const o = this.driver.now();
    this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = o) : this.startTime = r ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
}
const Wx = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function Hx(e, t, n, { delay: r = 0, duration: o = 300, repeat: i = 0, repeatType: s = "loop", ease: a = "easeInOut", times: l } = {}) {
  const c = { [t]: n };
  l && (c.offset = l);
  const f = Hu(a, o);
  return Array.isArray(f) && (c.easing = f), e.animate(c, {
    delay: r,
    duration: o,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: i + 1,
    direction: s === "reverse" ? "alternate" : "normal"
  });
}
const Kx = /* @__PURE__ */ Ds(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Dr = 10, Gx = 2e4;
function Yx(e) {
  return _s(e.type) || e.type === "spring" || !Wu(e.ease);
}
function qx(e, t) {
  const n = new Js({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !r.done && i < Gx; )
    r = n.sample(i), o.push(r.value), i += Dr;
  return {
    times: void 0,
    keyframes: o,
    duration: i - Dr,
    ease: "linear"
  };
}
const Pd = {
  anticipate: rd,
  backInOut: nd,
  circInOut: sd
};
function Xx(e) {
  return e in Pd;
}
class ua extends bd {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options;
    this.resolver = new xd(i, (s, a) => this.onKeyframesResolved(s, a), n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: r = 300, times: o, ease: i, type: s, motionValue: a, name: l, startTime: c } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof i == "string" && wr() && Xx(i) && (i = Pd[i]), Yx(this.options)) {
      const { onComplete: d, onUpdate: h, motionValue: p, element: y, ...m } = this.options, g = qx(t, m);
      t = g.keyframes, t.length === 1 && (t[1] = t[0]), r = g.duration, o = g.times, i = g.ease, s = "keyframes";
    }
    const f = Hx(a.owner.current, l, t, { ...this.options, duration: r, times: o, ease: i });
    return f.startTime = c ?? this.calcStartTime(), this.pendingTimeline ? (Yi(f, this.pendingTimeline), this.pendingTimeline = void 0) : f.onfinish = () => {
      const { onComplete: d } = this.options;
      a.set(Ur(t, this.options, n)), d && d(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: f,
      duration: r,
      times: o,
      type: s,
      ease: i,
      keyframes: t
    };
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: n } = t;
    return /* @__PURE__ */ Je(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return /* @__PURE__ */ Je(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = /* @__PURE__ */ Ze(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t)
      return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t)
      return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t)
      return null;
    const { animation: n } = t;
    return n.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(t) {
    if (!this._resolved)
      this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n)
        return Ne;
      const { animation: r } = n;
      Yi(r, t);
    }
    return Ne;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n, keyframes: r, duration: o, type: i, ease: s, times: a } = t;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: c, onUpdate: f, onComplete: d, element: h, ...p } = this.options, y = new Js({
        ...p,
        keyframes: r,
        duration: o,
        type: i,
        ease: s,
        times: a,
        isGenerator: !0
      }), m = /* @__PURE__ */ Ze(this.time);
      c.setWithVelocity(y.sample(m - Dr).value, y.sample(m).value, Dr);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const { motionValue: n, name: r, repeatDelay: o, repeatType: i, damping: s, type: a } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
      return !1;
    const { onUpdate: l, transformTemplate: c } = n.owner.getProps();
    return Kx() && r && Wx.has(r) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !c && !o && i !== "mirror" && s !== 0 && a !== "inertia";
  }
}
const Zx = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Jx = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Qx = {
  type: "keyframes",
  duration: 0.8
}, eb = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, tb = (e, { keyframes: t }) => t.length > 2 ? Qx : Rt.has(e) ? e.startsWith("scale") ? Jx(t[1]) : Zx : eb;
function nb({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: s, repeatDelay: a, from: l, elapsed: c, ...f }) {
  return !!Object.keys(f).length;
}
const Qs = (e, t, n, r = {}, o, i) => (s) => {
  const a = Fs(r, e) || {}, l = a.delay || r.delay || 0;
  let { elapsed: c = 0 } = r;
  c = c - /* @__PURE__ */ Ze(l);
  let f = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -c,
    onUpdate: (h) => {
      t.set(h), a.onUpdate && a.onUpdate(h);
    },
    onComplete: () => {
      s(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: i ? void 0 : o
  };
  nb(a) || (f = {
    ...f,
    ...tb(e, f)
  }), f.duration && (f.duration = /* @__PURE__ */ Ze(f.duration)), f.repeatDelay && (f.repeatDelay = /* @__PURE__ */ Ze(f.repeatDelay)), f.from !== void 0 && (f.keyframes[0] = f.from);
  let d = !1;
  if ((f.type === !1 || f.duration === 0 && !f.repeatDelay) && (f.duration = 0, f.delay === 0 && (d = !0)), d && !i && t.get() !== void 0) {
    const h = Ur(f.keyframes, a);
    if (h !== void 0)
      return se.update(() => {
        f.onUpdate(h), f.onComplete();
      }), new wv([]);
  }
  return !i && ua.supports(f) ? new ua(f) : new Js(f);
};
function rb({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Ad(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var i;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (s = r);
  const c = [], f = o && e.animationState && e.animationState.getState()[o];
  for (const d in l) {
    const h = e.getValue(d, (i = e.latestValues[d]) !== null && i !== void 0 ? i : null), p = l[d];
    if (p === void 0 || f && rb(f, d))
      continue;
    const y = {
      delay: n,
      ...Fs(s || {}, d)
    };
    let m = !1;
    if (window.MotionHandoffAnimation) {
      const v = Zu(e);
      if (v) {
        const b = window.MotionHandoffAnimation(v, d, se);
        b !== null && (y.startTime = b, m = !0);
      }
    }
    Io(e, d), h.start(Qs(d, h, p, e.shouldReduceMotion && qu.has(d) ? { type: !1 } : y, e, m));
    const g = h.animation;
    g && c.push(g);
  }
  return a && Promise.all(c).then(() => {
    se.update(() => {
      a && Iv(e, a);
    });
  }), c;
}
function zo(e, t, n = {}) {
  var r;
  const o = zr(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: i = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = o ? () => Promise.all(Ad(e, o, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: f = 0, staggerChildren: d, staggerDirection: h } = i;
    return ob(e, t, f + c, d, h, n);
  } : () => Promise.resolve(), { when: l } = i;
  if (l) {
    const [c, f] = l === "beforeChildren" ? [s, a] : [a, s];
    return c().then(() => f());
  } else
    return Promise.all([s(), a(n.delay)]);
}
function ob(e, t, n = 0, r = 0, o = 1, i) {
  const s = [], a = (e.variantChildren.size - 1) * r, l = o === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return Array.from(e.variantChildren).sort(sb).forEach((c, f) => {
    c.notify("AnimationStart", t), s.push(zo(c, t, {
      ...i,
      delay: n + l(f)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(s);
}
function sb(e, t) {
  return e.sortNodePosition(t);
}
function ib(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => zo(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = zo(e, t, n);
  else {
    const o = typeof t == "function" ? zr(e, t, n.custom) : t;
    r = Promise.all(Ad(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const ab = Ps.length;
function Nd(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Nd(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < ab; n++) {
    const r = Ps[n], o = e.props[r];
    (Pn(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const lb = [...Ts].reverse(), cb = Ts.length;
function ub(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => ib(e, n, r)));
}
function db(e) {
  let t = ub(e), n = da(), r = !0;
  const o = (l) => (c, f) => {
    var d;
    const h = zr(e, f, l === "exit" ? (d = e.presenceContext) === null || d === void 0 ? void 0 : d.custom : void 0);
    if (h) {
      const { transition: p, transitionEnd: y, ...m } = h;
      c = { ...c, ...m, ...y };
    }
    return c;
  };
  function i(l) {
    t = l(e);
  }
  function s(l) {
    const { props: c } = e, f = Nd(e.parent) || {}, d = [], h = /* @__PURE__ */ new Set();
    let p = {}, y = 1 / 0;
    for (let g = 0; g < cb; g++) {
      const v = lb[g], b = n[v], w = c[v] !== void 0 ? c[v] : f[v], S = Pn(w), C = v === l ? b.isActive : null;
      C === !1 && (y = g);
      let D = w === f[v] && w !== c[v] && S;
      if (D && r && e.manuallyAnimateOnMount && (D = !1), b.protectedKeys = { ...p }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && C === null || // If we didn't and don't have any defined prop for this animation type
      !w && !b.prevProp || // Or if the prop doesn't define an animation
      Br(w) || typeof w == "boolean")
        continue;
      const P = fb(b.prevProp, w);
      let T = P || // If we're making this variant active, we want to always make it active
      v === l && b.isActive && !D && S || // If we removed a higher-priority variant (i is in reverse order)
      g > y && S, R = !1;
      const O = Array.isArray(w) ? w : [w];
      let N = O.reduce(o(v), {});
      C === !1 && (N = {});
      const { prevResolvedValues: j = {} } = b, V = {
        ...j,
        ...N
      }, B = (_) => {
        T = !0, h.has(_) && (R = !0, h.delete(_)), b.needsAnimating[_] = !0;
        const k = e.getValue(_);
        k && (k.liveStyle = !1);
      };
      for (const _ in V) {
        const k = N[_], z = j[_];
        if (p.hasOwnProperty(_))
          continue;
        let G = !1;
        ko(k) && ko(z) ? G = !$u(k, z) : G = k !== z, G ? k != null ? B(_) : h.add(_) : k !== void 0 && h.has(_) ? B(_) : b.protectedKeys[_] = !0;
      }
      b.prevProp = w, b.prevResolvedValues = N, b.isActive && (p = { ...p, ...N }), r && e.blockInitialAnimation && (T = !1), T && (!(D && P) || R) && d.push(...O.map((_) => ({
        animation: _,
        options: { type: v }
      })));
    }
    if (h.size) {
      const g = {};
      h.forEach((v) => {
        const b = e.getBaseTarget(v), w = e.getValue(v);
        w && (w.liveStyle = !0), g[v] = b ?? null;
      }), d.push({ animation: g });
    }
    let m = !!d.length;
    return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (m = !1), r = !1, m ? t(d) : Promise.resolve();
  }
  function a(l, c) {
    var f;
    if (n[l].isActive === c)
      return Promise.resolve();
    (f = e.variantChildren) === null || f === void 0 || f.forEach((h) => {
      var p;
      return (p = h.animationState) === null || p === void 0 ? void 0 : p.setActive(l, c);
    }), n[l].isActive = c;
    const d = s(l);
    for (const h in n)
      n[h].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      n = da(), r = !0;
    }
  };
}
function fb(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !$u(t, e) : !1;
}
function St(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function da() {
  return {
    animate: St(!0),
    whileInView: St(),
    whileHover: St(),
    whileTap: St(),
    whileDrag: St(),
    whileFocus: St(),
    exit: St()
  };
}
class bt {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class hb extends bt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = db(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Br(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let pb = 0;
class mb extends bt {
  constructor() {
    super(...arguments), this.id = pb++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    const o = this.node.animationState.setActive("exit", !t);
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const gb = {
  animation: {
    Feature: hb
  },
  exit: {
    Feature: mb
  }
};
function Mn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Fn(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const yb = (e) => (t) => $s(t) && e(t, Fn(t));
function vn(e, t, n, r) {
  return Mn(e, t, yb(n), r);
}
const fa = (e, t) => Math.abs(e - t);
function vb(e, t) {
  const n = fa(e.x, t.x), r = fa(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Ed {
  constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const d = fo(this.lastMoveEventInfo, this.history), h = this.startEvent !== null, p = vb(d.offset, { x: 0, y: 0 }) >= 3;
      if (!h && !p)
        return;
      const { point: y } = d, { timestamp: m } = ye;
      this.history.push({ ...y, timestamp: m });
      const { onStart: g, onMove: v } = this.handlers;
      h || (g && g(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), v && v(this.lastMoveEvent, d);
    }, this.handlePointerMove = (d, h) => {
      this.lastMoveEvent = d, this.lastMoveEventInfo = uo(h, this.transformPagePoint), se.update(this.updatePoint, !0);
    }, this.handlePointerUp = (d, h) => {
      this.end();
      const { onEnd: p, onSessionEnd: y, resumeAnimation: m } = this.handlers;
      if (this.dragSnapToOrigin && m && m(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const g = fo(d.type === "pointercancel" ? this.lastMoveEventInfo : uo(h, this.transformPagePoint), this.history);
      this.startEvent && p && p(d, g), y && y(d, g);
    }, !$s(t))
      return;
    this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const s = Fn(t), a = uo(s, this.transformPagePoint), { point: l } = a, { timestamp: c } = ye;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: f } = n;
    f && f(t, fo(a, this.history)), this.removeListeners = Vn(vn(this.contextWindow, "pointermove", this.handlePointerMove), vn(this.contextWindow, "pointerup", this.handlePointerUp), vn(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), mt(this.updatePoint);
  }
}
function uo(e, t) {
  return t ? { point: t(e.point) } : e;
}
function ha(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function fo({ point: e }, t) {
  return {
    point: e,
    delta: ha(e, Md(t)),
    offset: ha(e, xb(t)),
    velocity: bb(t, 0.1)
  };
}
function xb(e) {
  return e[0];
}
function Md(e) {
  return e[e.length - 1];
}
function bb(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = Md(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > /* @__PURE__ */ Ze(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const i = /* @__PURE__ */ Je(o.timestamp - r.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const s = {
    x: (o.x - r.x) / i,
    y: (o.y - r.y) / i
  };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
const jd = 1e-4, wb = 1 - jd, Sb = 1 + jd, kd = 0.01, Cb = 0 - kd, Db = 0 + kd;
function Ee(e) {
  return e.max - e.min;
}
function Tb(e, t, n) {
  return Math.abs(e - t) <= n;
}
function pa(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = ae(t.min, t.max, e.origin), e.scale = Ee(n) / Ee(t), e.translate = ae(n.min, n.max, e.origin) - e.originPoint, (e.scale >= wb && e.scale <= Sb || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Cb && e.translate <= Db || isNaN(e.translate)) && (e.translate = 0);
}
function xn(e, t, n, r) {
  pa(e.x, t.x, n.x, r ? r.originX : void 0), pa(e.y, t.y, n.y, r ? r.originY : void 0);
}
function ma(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Ee(t);
}
function Pb(e, t, n) {
  ma(e.x, t.x, n.x), ma(e.y, t.y, n.y);
}
function ga(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Ee(t);
}
function bn(e, t, n) {
  ga(e.x, t.x, n.x), ga(e.y, t.y, n.y);
}
function Ab(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? ae(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ae(n, e, r.max) : Math.min(e, n)), e;
}
function ya(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function Nb(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: ya(e.x, n, o),
    y: ya(e.y, t, r)
  };
}
function va(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Eb(e, t) {
  return {
    x: va(e.x, t.x),
    y: va(e.y, t.y)
  };
}
function Mb(e, t) {
  let n = 0.5;
  const r = Ee(e), o = Ee(t);
  return o > r ? n = /* @__PURE__ */ Xt(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ Xt(e.min, e.max - o, t.min)), nt(0, 1, n);
}
function jb(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Uo = 0.35;
function kb(e = Uo) {
  return e === !1 ? e = 0 : e === !0 && (e = Uo), {
    x: xa(e, "left", "right"),
    y: xa(e, "top", "bottom")
  };
}
function xa(e, t, n) {
  return {
    min: ba(e, t),
    max: ba(e, n)
  };
}
function ba(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const wa = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), $t = () => ({
  x: wa(),
  y: wa()
}), Sa = () => ({ min: 0, max: 0 }), he = () => ({
  x: Sa(),
  y: Sa()
});
function ke(e) {
  return [e("x"), e("y")];
}
function Rd({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function Rb({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Lb(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function ho(e) {
  return e === void 0 || e === 1;
}
function Wo({ scale: e, scaleX: t, scaleY: n }) {
  return !ho(e) || !ho(t) || !ho(n);
}
function Ct(e) {
  return Wo(e) || Ld(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Ld(e) {
  return Ca(e.x) || Ca(e.y);
}
function Ca(e) {
  return e && e !== "0%";
}
function Tr(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Da(e, t, n, r, o) {
  return o !== void 0 && (e = Tr(e, o, r)), Tr(e, n, r) + t;
}
function Ho(e, t = 0, n = 1, r, o) {
  e.min = Da(e.min, t, n, r, o), e.max = Da(e.max, t, n, r, o);
}
function Id(e, { x: t, y: n }) {
  Ho(e.x, t.translate, t.scale, t.originPoint), Ho(e.y, n.translate, n.scale, n.originPoint);
}
const Ta = 0.999999999999, Pa = 1.0000000000001;
function Ib(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, s;
  for (let a = 0; a < o; a++) {
    i = n[a], s = i.projectionDelta;
    const { visualElement: l } = i.options;
    l && l.props.style && l.props.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && Ut(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), s && (t.x *= s.x.scale, t.y *= s.y.scale, Id(e, s)), r && Ct(i.latestValues) && Ut(e, i.latestValues));
  }
  t.x < Pa && t.x > Ta && (t.x = 1), t.y < Pa && t.y > Ta && (t.y = 1);
}
function zt(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Aa(e, t, n, r, o = 0.5) {
  const i = ae(e.min, e.max, o);
  Ho(e, t, n, i, r);
}
function Ut(e, t) {
  Aa(e.x, t.x, t.scaleX, t.scale, t.originX), Aa(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Od(e, t) {
  return Rd(Lb(e.getBoundingClientRect(), t));
}
function Ob(e, t, n) {
  const r = Od(e, n), { scroll: o } = t;
  return o && (zt(r.x, o.offset.x), zt(r.y, o.offset.y)), r;
}
const Vd = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Vb = /* @__PURE__ */ new WeakMap();
class Fb {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = he(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (f) => {
      const { dragSnapToOrigin: d } = this.getProps();
      d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Fn(f).point);
    }, i = (f, d) => {
      const { drag: h, dragPropagation: p, onDragStart: y } = this.getProps();
      if (h && !p && (this.openDragLock && this.openDragLock(), this.openDragLock = Mv(h), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ke((g) => {
        let v = this.getAxisMotionValue(g).get() || 0;
        if (We.test(v)) {
          const { projection: b } = this.visualElement;
          if (b && b.layout) {
            const w = b.layout.layoutBox[g];
            w && (v = Ee(w) * (parseFloat(v) / 100));
          }
        }
        this.originPoint[g] = v;
      }), y && se.postRender(() => y(f, d)), Io(this.visualElement, "transform");
      const { animationState: m } = this.visualElement;
      m && m.setActive("whileDrag", !0);
    }, s = (f, d) => {
      const { dragPropagation: h, dragDirectionLock: p, onDirectionLock: y, onDrag: m } = this.getProps();
      if (!h && !this.openDragLock)
        return;
      const { offset: g } = d;
      if (p && this.currentDirection === null) {
        this.currentDirection = _b(g), this.currentDirection !== null && y && y(this.currentDirection);
        return;
      }
      this.updateAxis("x", d.point, g), this.updateAxis("y", d.point, g), this.visualElement.render(), m && m(f, d);
    }, a = (f, d) => this.stop(f, d), l = () => ke((f) => {
      var d;
      return this.getAnimationState(f) === "paused" && ((d = this.getAxisMotionValue(f).animation) === null || d === void 0 ? void 0 : d.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Ed(t, {
      onSessionStart: o,
      onStart: i,
      onMove: s,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      contextWindow: Vd(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && se.postRender(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !tr(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (s = Ab(s, this.constraints[t], this.elastic[t])), i.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    n && _t(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = Nb(o.layoutBox, n) : this.constraints = !1, this.elastic = kb(r), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && ke((s) => {
      this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = jb(o.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !_t(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = Ob(r, o.root, this.visualElement.getTransformPagePoint());
    let s = Eb(o.layout.layoutBox, i);
    if (n) {
      const a = n(Rb(s));
      this.hasMutatedConstraints = !!a, a && (s = Rd(a));
    }
    return s;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = ke((f) => {
      if (!tr(f, n, this.currentDirection))
        return;
      let d = l && l[f] || {};
      s && (d = { min: 0, max: 0 });
      const h = o ? 200 : 1e6, p = o ? 40 : 1e7, y = {
        type: "inertia",
        velocity: r ? t[f] : 0,
        bounceStiffness: h,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...i,
        ...d
      };
      return this.startAxisValueAnimation(f, y);
    });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return Io(this.visualElement, t), r.start(Qs(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    ke((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    ke((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), o = r[n];
    return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    ke((n) => {
      const { drag: r } = this.getProps();
      if (!tr(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[n];
        i.set(t[n] - ae(s, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!_t(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    ke((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[s] = Mb({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), ke((s) => {
      if (!tr(s, t, null))
        return;
      const a = this.getAxisMotionValue(s), { min: l, max: c } = this.constraints[s];
      a.set(ae(l, c, o[s]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Vb.set(this.visualElement, this);
    const t = this.visualElement.current, n = vn(t, "pointerdown", (l) => {
      const { drag: c, dragListener: f = !0 } = this.getProps();
      c && f && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      _t(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), se.read(r);
    const s = Mn(window, "resize", () => this.scalePositionWithinConstraints()), a = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (ke((f) => {
        const d = this.getAxisMotionValue(f);
        d && (this.originPoint[f] += l[f].translate, d.set(d.get() + l[f].translate));
      }), this.visualElement.render());
    });
    return () => {
      s(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: s = Uo, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a
    };
  }
}
function tr(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function _b(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class Bb extends bt {
  constructor(t) {
    super(t), this.removeGroupControls = Ne, this.removeListeners = Ne, this.controls = new Fb(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ne;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Na = (e) => (t, n) => {
  e && se.postRender(() => e(t, n));
};
class $b extends bt {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ne;
  }
  onPointerDown(t) {
    this.session = new Ed(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Vd(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Na(t),
      onStart: Na(n),
      onMove: r,
      onEnd: (i, s) => {
        delete this.session, o && se.postRender(() => o(i, s));
      }
    };
  }
  mount() {
    this.removePointerDownListener = vn(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const ur = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Ea(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const dn = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if ($.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Ea(e, t.target.x), r = Ea(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, zb = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = gt.parse(e);
    if (o.length > 5)
      return r;
    const i = gt.createTransformer(e), s = typeof o[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + s] /= a, o[1 + s] /= l;
    const c = ae(a, l, 0.5);
    return typeof o[2 + s] == "number" && (o[2 + s] /= c), typeof o[3 + s] == "number" && (o[3 + s] /= c), i(o);
  }
};
class Ub extends of {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: i } = t;
    cv(Wb), i && (n.group && n.group.add(i), r && r.register && o && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), ur.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props, s = r.projection;
    return s && (s.isPresent = i, o || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? s.promote() : s.relegate() || se.postRender(() => {
      const a = s.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Ns.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: o } = t;
    o && (o.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(o), r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Fd(e) {
  const [t, n] = bu(), r = we(bs);
  return u.jsx(Ub, { ...e, layoutGroup: r, switchLayoutGroup: we(Nu), isPresent: t, safeToRemove: n });
}
const Wb = {
  borderRadius: {
    ...dn,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: dn,
  borderTopRightRadius: dn,
  borderBottomLeftRadius: dn,
  borderBottomRightRadius: dn,
  boxShadow: zb
};
function Hb(e, t, n) {
  const r = Se(e) ? e : Nn(e);
  return r.start(Qs("", r, t, n)), r.animation;
}
function Kb(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const Gb = (e, t) => e.depth - t.depth;
class Yb {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    zs(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Us(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(Gb), this.isDirty = !1, this.children.forEach(t);
  }
}
function qb(e, t) {
  const n = He.now(), r = ({ timestamp: o }) => {
    const i = o - n;
    i >= t && (mt(r), e(i - t));
  };
  return se.read(r, !0), () => mt(r);
}
const _d = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Xb = _d.length, Ma = (e) => typeof e == "string" ? parseFloat(e) : e, ja = (e) => typeof e == "number" || $.test(e);
function Zb(e, t, n, r, o, i) {
  o ? (e.opacity = ae(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    Jb(r)
  ), e.opacityExit = ae(t.opacity !== void 0 ? t.opacity : 1, 0, Qb(r))) : i && (e.opacity = ae(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let s = 0; s < Xb; s++) {
    const a = `border${_d[s]}Radius`;
    let l = ka(t, a), c = ka(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || ja(l) === ja(c) ? (e[a] = Math.max(ae(Ma(l), Ma(c), r), 0), (We.test(c) || We.test(l)) && (e[a] += "%")) : e[a] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = ae(t.rotate || 0, n.rotate || 0, r));
}
function ka(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Jb = /* @__PURE__ */ Bd(0, 0.5, od), Qb = /* @__PURE__ */ Bd(0.5, 0.95, Ne);
function Bd(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Xt(e, t, r));
}
function Ra(e, t) {
  e.min = t.min, e.max = t.max;
}
function je(e, t) {
  Ra(e.x, t.x), Ra(e.y, t.y);
}
function La(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Ia(e, t, n, r, o) {
  return e -= t, e = Tr(e, 1 / n, r), o !== void 0 && (e = Tr(e, 1 / o, r)), e;
}
function e0(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (We.test(t) && (t = parseFloat(t), t = ae(s.min, s.max, t / 100) - s.min), typeof t != "number")
    return;
  let a = ae(i.min, i.max, r);
  e === i && (a -= t), e.min = Ia(e.min, t, n, a, o), e.max = Ia(e.max, t, n, a, o);
}
function Oa(e, t, [n, r, o], i, s) {
  e0(e, t[n], t[r], t[o], t.scale, i, s);
}
const t0 = ["x", "scaleX", "originX"], n0 = ["y", "scaleY", "originY"];
function Va(e, t, n, r) {
  Oa(e.x, t, t0, n ? n.x : void 0, r ? r.x : void 0), Oa(e.y, t, n0, n ? n.y : void 0, r ? r.y : void 0);
}
function Fa(e) {
  return e.translate === 0 && e.scale === 1;
}
function $d(e) {
  return Fa(e.x) && Fa(e.y);
}
function _a(e, t) {
  return e.min === t.min && e.max === t.max;
}
function r0(e, t) {
  return _a(e.x, t.x) && _a(e.y, t.y);
}
function Ba(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function zd(e, t) {
  return Ba(e.x, t.x) && Ba(e.y, t.y);
}
function $a(e) {
  return Ee(e.x) / Ee(e.y);
}
function za(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class o0 {
  constructor() {
    this.members = [];
  }
  add(t) {
    zs(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Us(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0)
      return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function s0(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y, s = (n == null ? void 0 : n.z) || 0;
  if ((o || i || s) && (r = `translate3d(${o}px, ${i}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: c, rotate: f, rotateX: d, rotateY: h, skewX: p, skewY: y } = n;
    c && (r = `perspective(${c}px) ${r}`), f && (r += `rotate(${f}deg) `), d && (r += `rotateX(${d}deg) `), h && (r += `rotateY(${h}deg) `), p && (r += `skewX(${p}deg) `), y && (r += `skewY(${y}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Dt = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, mn = typeof window < "u" && window.MotionDebug !== void 0, po = ["", "X", "Y", "Z"], i0 = { visibility: "hidden" }, Ua = 1e3;
let a0 = 0;
function mo(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Ud(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Zu(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", se, !(o || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Ud(r);
}
function Wd({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      this.id = a0++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, mn && (Dt.totalNodes = Dt.resolvedTargetDeltas = Dt.recalculatedProjection = 0), this.nodes.forEach(u0), this.nodes.forEach(m0), this.nodes.forEach(g0), this.nodes.forEach(d0), mn && window.MotionDebug.record(Dt);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Yb());
    }
    addEventListener(s, a) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new Ws()), this.eventHandlers.get(s).add(a);
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    /**
     * Lifecycles
     */
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = Kb(s), this.instance = s;
      const { layoutId: l, layout: c, visualElement: f } = this.options;
      if (f && !f.current && f.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const h = () => this.root.updateBlockedByResize = !1;
        e(s, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = qb(h, 250), ur.hasAnimatedSinceResize && (ur.hasAnimatedSinceResize = !1, this.nodes.forEach(Ha));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && f && (l || c) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: h, hasRelativeTargetChanged: p, layout: y }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const m = this.options.transition || f.getDefaultTransition() || w0, { onLayoutAnimationStart: g, onLayoutAnimationComplete: v } = f.getProps(), b = !this.targetLayout || !zd(this.targetLayout, y) || p, w = !h && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || w || h && (b || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, w);
          const S = {
            ...Fs(m, "layout"),
            onPlay: g,
            onComplete: v
          };
          (f.shouldReduceMotion || this.options.layoutRoot) && (S.delay = 0, S.type = !1), this.startAnimation(S);
        } else
          h || Ha(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = y;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, mt(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(y0), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ud(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let f = 0; f < this.path.length; f++) {
        const d = this.path[f];
        d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Wa);
        return;
      }
      this.isUpdating || this.nodes.forEach(h0), this.isUpdating = !1, this.nodes.forEach(p0), this.nodes.forEach(l0), this.nodes.forEach(c0), this.clearAllSnapshots();
      const a = He.now();
      ye.delta = nt(0, 1e3 / 60, a - ye.timestamp), ye.timestamp = a, ye.isProcessing = !0, oo.update.process(ye), oo.preRender.process(ye), oo.render.process(ye), ye.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Ns.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(f0), this.sharedNodes.forEach(v0);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, se.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      se.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const s = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = he(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!o)
        return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !$d(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, f = c !== this.prevTransformTemplateValue;
      s && (a || Ct(this.latestValues) || f) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return s && (l = this.removeTransform(l)), S0(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var s;
      const { visualElement: a } = this.options;
      if (!a)
        return he();
      const l = a.measureViewportBox();
      if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(C0))) {
        const { scroll: f } = this.root;
        f && (zt(l.x, f.offset.x), zt(l.y, f.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      const l = he();
      if (je(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c], { scroll: d, options: h } = f;
        f !== this.root && d && h.layoutScroll && (d.wasRoot && je(l, s), zt(l.x, d.offset.x), zt(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      const l = he();
      je(l, s);
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        !a && f.options.layoutScroll && f.scroll && f !== f.root && Ut(l, {
          x: -f.scroll.offset.x,
          y: -f.scroll.offset.y
        }), Ct(f.latestValues) && Ut(l, f.latestValues);
      }
      return Ct(this.latestValues) && Ut(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = he();
      je(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Ct(c.latestValues))
          continue;
        Wo(c.latestValues) && c.updateSnapshot();
        const f = he(), d = c.measurePageBox();
        je(f, d), Va(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, f);
      }
      return Ct(this.latestValues) && Va(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ye.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (!(s || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: d, layoutId: h } = this.options;
      if (!(!this.layout || !(d || h))) {
        if (this.resolvedRelativeTargetAt = ye.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = he(), this.relativeTargetOrigin = he(), bn(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), je(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = he(), this.targetWithTransforms = he()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Pb(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : je(this.target, this.layout.layoutBox), Id(this.target, this.targetDelta)) : je(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = he(), this.relativeTargetOrigin = he(), bn(this.relativeTargetOrigin, this.target, p.target), je(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          mn && Dt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Wo(this.parent.latestValues) || Ld(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var s;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let c = !0;
      if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === ye.timestamp && (c = !1), c)
        return;
      const { layout: f, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(f || d))
        return;
      je(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, p = this.treeScale.y;
      Ib(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = he());
      const { target: y } = a;
      if (!y) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (La(this.prevProjectionDelta.x, this.projectionDelta.x), La(this.prevProjectionDelta.y, this.projectionDelta.y)), xn(this.projectionDelta, this.layoutCorrected, y, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== p || !za(this.projectionDelta.x, this.prevProjectionDelta.x) || !za(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", y)), mn && Dt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), s) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = $t(), this.projectionDelta = $t(), this.projectionDeltaWithTransform = $t();
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, f = { ...this.latestValues }, d = $t();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const h = he(), p = l ? l.source : void 0, y = this.layout ? this.layout.source : void 0, m = p !== y, g = this.getStack(), v = !g || g.members.length <= 1, b = !!(m && !v && this.options.crossfade === !0 && !this.path.some(b0));
      this.animationProgress = 0;
      let w;
      this.mixTargetDelta = (S) => {
        const C = S / 1e3;
        Ka(d.x, s.x, C), Ka(d.y, s.y, C), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (bn(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), x0(this.relativeTarget, this.relativeTargetOrigin, h, C), w && r0(this.relativeTarget, w) && (this.isProjectionDirty = !1), w || (w = he()), je(w, this.relativeTarget)), m && (this.animationValues = f, Zb(f, c, this.latestValues, C, b, v)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (mt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = se.update(() => {
        ur.hasAnimatedSinceResize = !0, this.currentAnimation = Hb(0, Ua, {
          ...s,
          onUpdate: (a) => {
            this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
          },
          onComplete: () => {
            s.onComplete && s.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const s = this.getStack();
      s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Ua), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: f } = s;
      if (!(!a || !l || !c)) {
        if (this !== s && this.layout && c && Hd(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || he();
          const d = Ee(this.layout.layoutBox.x);
          l.x.min = s.target.x.min, l.x.max = l.x.min + d;
          const h = Ee(this.layout.layoutBox.y);
          l.y.min = s.target.y.min, l.y.max = l.y.min + h;
        }
        je(a, l), Ut(a, f), xn(this.projectionDeltaWithTransform, this.layoutCorrected, a, f);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new o0()), this.sharedNodes.get(s).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s)
        return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), s && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s)
        return;
      let a = !1;
      const { latestValues: l } = s;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const c = {};
      l.z && mo("z", s, c, this.animationValues);
      for (let f = 0; f < po.length; f++)
        mo(`rotate${po[f]}`, s, c, this.animationValues), mo(`skew${po[f]}`, s, c, this.animationValues);
      s.render();
      for (const f in c)
        s.setStaticValue(f, c[f]), this.animationValues && (this.animationValues[f] = c[f]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return i0;
      const c = {
        visibility: ""
      }, f = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = lr(s == null ? void 0 : s.pointerEvents) || "", c.transform = f ? f(this.latestValues, "") : "none", c;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const m = {};
        return this.options.layoutId && (m.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, m.pointerEvents = lr(s == null ? void 0 : s.pointerEvents) || ""), this.hasProjected && !Ct(this.latestValues) && (m.transform = f ? f({}, "") : "none", this.hasProjected = !1), m;
      }
      const h = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), c.transform = s0(this.projectionDeltaWithTransform, this.treeScale, h), f && (c.transform = f(h, c.transform));
      const { x: p, y } = this.projectionDelta;
      c.transformOrigin = `${p.origin * 100}% ${y.origin * 100}% 0`, d.animationValues ? c.opacity = d === this ? (l = (a = h.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : c.opacity = d === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
      for (const m in br) {
        if (h[m] === void 0)
          continue;
        const { correct: g, applyTo: v } = br[m], b = c.transform === "none" ? h[m] : g(h[m], d);
        if (v) {
          const w = v.length;
          for (let S = 0; S < w; S++)
            c[v[S]] = b;
        } else
          c[m] = b;
      }
      return this.options.layoutId && (c.pointerEvents = d === this ? lr(s == null ? void 0 : s.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(Wa), this.root.sharedNodes.clear();
    }
  };
}
function l0(e) {
  e.updateLayout();
}
function c0(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: i } = e.options, s = n.source !== e.layout.source;
    i === "size" ? ke((d) => {
      const h = s ? n.measuredBox[d] : n.layoutBox[d], p = Ee(h);
      h.min = r[d].min, h.max = h.min + p;
    }) : Hd(i, n.layoutBox, r) && ke((d) => {
      const h = s ? n.measuredBox[d] : n.layoutBox[d], p = Ee(r[d]);
      h.max = h.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const a = $t();
    xn(a, r, n.layoutBox);
    const l = $t();
    s ? xn(l, e.applyTransform(o, !0), n.measuredBox) : xn(l, r, n.layoutBox);
    const c = !$d(a);
    let f = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: h, layout: p } = d;
        if (h && p) {
          const y = he();
          bn(y, n.layoutBox, h.layoutBox);
          const m = he();
          bn(m, r, p.layoutBox), zd(y, m) || (f = !0), d.options.layoutRoot && (e.relativeTarget = m, e.relativeTargetOrigin = y, e.relativeParent = d);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: f
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function u0(e) {
  mn && Dt.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function d0(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function f0(e) {
  e.clearSnapshot();
}
function Wa(e) {
  e.clearMeasurements();
}
function h0(e) {
  e.isLayoutDirty = !1;
}
function p0(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Ha(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function m0(e) {
  e.resolveTargetDelta();
}
function g0(e) {
  e.calcProjection();
}
function y0(e) {
  e.resetSkewAndRotation();
}
function v0(e) {
  e.removeLeadSnapshot();
}
function Ka(e, t, n) {
  e.translate = ae(t.translate, 0, n), e.scale = ae(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Ga(e, t, n, r) {
  e.min = ae(t.min, n.min, r), e.max = ae(t.max, n.max, r);
}
function x0(e, t, n, r) {
  Ga(e.x, t.x, n.x, r), Ga(e.y, t.y, n.y, r);
}
function b0(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const w0 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Ya = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), qa = Ya("applewebkit/") && !Ya("chrome/") ? Math.round : Ne;
function Xa(e) {
  e.min = qa(e.min), e.max = qa(e.max);
}
function S0(e) {
  Xa(e.x), Xa(e.y);
}
function Hd(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Tb($a(t), $a(n), 0.2);
}
function C0(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const D0 = Wd({
  attachResizeListener: (e, t) => Mn(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), go = {
  current: void 0
}, Kd = Wd({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!go.current) {
      const e = new D0({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), go.current = e;
    }
    return go.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), T0 = {
  pan: {
    Feature: $b
  },
  drag: {
    Feature: Bb,
    ProjectionNode: Kd,
    MeasureLayout: Fd
  }
};
function Za(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, i = r[o];
  i && se.postRender(() => i(t, Fn(t)));
}
class P0 extends bt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = Tv(t, (n) => (Za(this.node, n, "Start"), (r) => Za(this.node, r, "End"))));
  }
  unmount() {
  }
}
class A0 extends bt {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Vn(Mn(this.node.current, "focus", () => this.onFocus()), Mn(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Ja(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n), i = r[o];
  i && se.postRender(() => i(t, Fn(t)));
}
class N0 extends bt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = Ev(t, (n) => (Ja(this.node, n, "Start"), (r, { success: o }) => Ja(this.node, r, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Ko = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap(), E0 = (e) => {
  const t = Ko.get(e.target);
  t && t(e);
}, M0 = (e) => {
  e.forEach(E0);
};
function j0({ root: e, ...t }) {
  const n = e || document;
  yo.has(n) || yo.set(n, {});
  const r = yo.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(M0, { root: e, ...t })), r[o];
}
function k0(e, t, n) {
  const r = j0(t);
  return Ko.set(e, n), r.observe(e), () => {
    Ko.delete(e), r.unobserve(e);
  };
}
const R0 = {
  some: 0,
  all: 1
};
class L0 extends bt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: i } = t, s = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : R0[o]
    }, a = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, i && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: f, onViewportLeave: d } = this.node.getProps(), h = c ? f : d;
      h && h(l);
    };
    return k0(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(I0(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function I0({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const O0 = {
  inView: {
    Feature: L0
  },
  tap: {
    Feature: N0
  },
  focus: {
    Feature: A0
  },
  hover: {
    Feature: P0
  }
}, V0 = {
  layout: {
    ProjectionNode: Kd,
    MeasureLayout: Fd
  }
}, Go = { current: null }, Gd = { current: !1 };
function F0() {
  if (Gd.current = !0, !!Cs)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Go.current = e.matches;
      e.addListener(t), t();
    } else
      Go.current = !1;
}
const _0 = [...vd, be, gt], B0 = (e) => _0.find(yd(e)), Qa = /* @__PURE__ */ new WeakMap();
function $0(e, t, n) {
  for (const r in t) {
    const o = t[r], i = n[r];
    if (Se(o))
      e.addValue(r, o);
    else if (Se(i))
      e.addValue(r, Nn(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Nn(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const el = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class z0 {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, blockInitialAnimation: i, visualState: s }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Xs, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const p = He.now();
      this.renderScheduledAt < p && (this.renderScheduledAt = p, se.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: c, onUpdate: f } = s;
    this.onUpdate = f, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.blockInitialAnimation = !!i, this.isControllingVariants = $r(n), this.isVariantNode = Pu(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: d, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const p in h) {
      const y = h[p];
      l[p] !== void 0 && Se(y) && y.set(l[p], !1);
    }
  }
  mount(t) {
    this.current = t, Qa.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Gd.current || F0(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Go.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Qa.delete(this.current), this.projection && this.projection.unmount(), mt(this.notifyUpdate), mt(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Rt.has(t), o = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && se.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
    }), i = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      o(), i(), s && s(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Zt) {
      const n = Zt[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: o } = n;
      if (!this.features[t] && o && r(this.props) && (this.features[t] = new o(this)), this.features[t]) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), i.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : he();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < el.length; r++) {
      const o = el[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = "on" + o, s = t[i];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    this.prevMotionValues = $0(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = Nn(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return o != null && (typeof o == "string" && (md(o) || id(o)) ? o = parseFloat(o) : !B0(o) && gt.test(n) && (o = fd(t, n)), this.setBaseTarget(t, Se(o) ? o.get() : o)), Se(o) ? o.get() : o;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let o;
    if (typeof r == "string" || typeof r == "object") {
      const s = Ms(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      s && (o = s[t]);
    }
    if (r && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Se(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Ws()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Yd extends z0 {
  constructor() {
    super(...arguments), this.KeyframeResolver = xd;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Se(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function U0(e) {
  return window.getComputedStyle(e);
}
class W0 extends Yd {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Iu;
  }
  readValueFromInstance(t, n) {
    if (Rt.has(n)) {
      const r = qs(n);
      return r && r.default || 0;
    } else {
      const r = U0(t), o = (ku(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Od(t, n);
  }
  build(t, n, r) {
    Rs(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Vs(t, n, r);
  }
}
class H0 extends Yd {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = he;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Rt.has(n)) {
      const r = qs(n);
      return r && r.default || 0;
    }
    return n = Ou.has(n) ? n : As(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return _u(t, n, r);
  }
  build(t, n, r) {
    Ls(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    Vu(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = Os(t.tagName), super.mount(t);
  }
}
const K0 = (e, t) => Es(e) ? new H0(t) : new W0(t, {
  allowProjection: e !== rl
}), G0 = /* @__PURE__ */ vv({
  ...gb,
  ...O0,
  ...T0,
  ...V0
}, K0), nr = /* @__PURE__ */ Ry(G0);
function ze(e = "default") {
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
function qd(e = "default") {
  const t = {
    default: "bg-gray-100 text-gray-800 border-gray-200",
    primary: "bg-purple-100 text-purple-800 border-purple-200",
    success: "bg-green-100 text-green-800 border-green-200",
    danger: "bg-red-100 text-red-800 border-red-200",
    warning: "bg-blue-100 text-blue-800 border-blue-200",
    orange: "bg-orange-100 text-orange-800 border-orange-200",
    cyan: "bg-cyan-100 text-cyan-800 border-cyan-200",
    pink: "bg-pink-100 text-pink-800 border-pink-200",
    indigo: "bg-indigo-100 text-indigo-800 border-indigo-200",
    yellow: "bg-yellow-100 text-yellow-800 border-yellow-200"
  };
  return t[e] || t.default;
}
function yt(e, t = {}) {
  return e && t[e] ? t[e] : "default";
}
function Xd(e) {
  const t = {};
  return !e || !Array.isArray(e) || e.forEach((n) => {
    n.variant && (t[n.slug] = n.variant);
  }), t;
}
function Y0({
  events: e,
  eventMetadata: t,
  categoryMappings: n,
  onDateClick: r,
  onEventClick: o,
  onMonthChange: i,
  currentDate: s,
  displayMode: a = "popover",
  sidebarPosition: l = "right"
}) {
  const [c, f] = W(/* @__PURE__ */ new Date()), d = s || c, [h, p] = W(0), [y, m] = W(null), [g, v] = W(null), [b, w] = W(null), S = a === "popover", C = a === "dropdown", D = a === "sidebar", P = (L, M) => {
    const I = new Date(M, L + 1, 0).getDate();
    return Array.from({ length: I }, (Y, q) => ({ day: q + 1 }));
  }, T = (L, M) => e.filter((Y) => Zo(Y, new Date(M.getFullYear(), M.getMonth(), L))), R = (L) => L.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  });
  U.useEffect(() => {
    if (!D || b && b.getFullYear() === d.getFullYear() && b.getMonth() === d.getMonth())
      return;
    const M = /* @__PURE__ */ new Date();
    let I;
    if (M.getFullYear() === d.getFullYear() && M.getMonth() === d.getMonth())
      I = M.getDate();
    else {
      const Y = e.map((q) => new Date(q.startDate)).filter((q) => q.getFullYear() === d.getFullYear() && q.getMonth() === d.getMonth()).sort((q, ce) => q.getTime() - ce.getTime());
      I = Y.length > 0 ? Y[0].getDate() : 1;
    }
    w(new Date(d.getFullYear(), d.getMonth(), I));
  }, [D, d, e, b]), U.useEffect(() => {
    C || v(null);
  }, [C, d]);
  const O = () => {
    p(-1);
    const L = new Date(d.getFullYear(), d.getMonth() - 1, 1);
    s || f(L), i == null || i(L);
  }, N = () => {
    p(1);
    const L = new Date(d.getFullYear(), d.getMonth() + 1, 1);
    s || f(L), i == null || i(L);
  }, j = P(d.getMonth(), d.getFullYear()), V = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], H = new Date(d.getFullYear(), d.getMonth(), 1).getDay(), A = new Date(d.getFullYear(), d.getMonth() - 1, 1), _ = new Date(A.getFullYear(), A.getMonth() + 1, 0).getDate(), k = ({ events: L }) => {
    const M = L.reduce((I, Y) => {
      const q = t[Y.id], ce = (q == null ? void 0 : q.category) || "uncategorized";
      return I[ce] || (I[ce] = []), I[ce].push(Y), I;
    }, {});
    return /* @__PURE__ */ u.jsx("div", { className: "flex flex-wrap gap-1", children: Object.entries(M).map(([I, Y]) => {
      const q = yt(I === "uncategorized" ? null : I, n), ce = ze(q);
      return /* @__PURE__ */ u.jsx(
        "div",
        {
          className: `${ce} text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium shadow-sm`,
          title: `${Y.length} ${I} event${Y.length > 1 ? "s" : ""}: ${Y.map((ie) => ie.title).join(", ")}`,
          children: Y.length
        },
        I
      );
    }) });
  }, z = (L) => L.map((M) => {
    const I = t[M.id], Y = yt(I == null ? void 0 : I.category, n), ce = ze(Y).replace("bg-", "after:bg-"), ie = new Date(M.startDate), ve = new Date(M.endDate), Ye = !Number.isNaN(ie.getTime()) && !Number.isNaN(ve.getTime()), rt = Ye && ie.getTime() === ve.getTime(), Re = Ye ? `${R(ie)}${rt ? "" : ` - ${R(ve)}`}` : null;
    return /* @__PURE__ */ u.jsxs(
      "div",
      {
        role: "button",
        tabIndex: 0,
        "aria-label": `View ${M.title}`,
        onKeyDown: (ot) => {
          (ot.key === "Enter" || ot.key === " ") && (ot.preventDefault(), ot.stopPropagation(), o == null || o(M));
        },
        className: `bg-card dark:bg-card relative rounded-md p-2 pl-6 text-xs text-left w-full after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary hover:bg-muted dark:hover:bg-muted transition-colors border border-gray-200 dark:border-border shadow-sm ${ce}`,
        onClick: (ot) => {
          ot.stopPropagation(), o == null || o(M);
        },
        children: [
          /* @__PURE__ */ u.jsx("div", { className: "font-medium text-[13px] text-gray-900 dark:text-foreground leading-tight", children: M.title }),
          Re && /* @__PURE__ */ u.jsx("div", { className: "mt-0.5 text-[11px] text-gray-900 dark:text-foreground", children: Re })
        ]
      },
      M.id
    );
  }), G = U.useMemo(() => new Date(d.getFullYear(), d.getMonth(), 1), [d]), ee = !!(D && b && b.getFullYear() === d.getFullYear() && b.getMonth() === d.getMonth()), me = D && ee && b ? b : G, De = me.getDate(), ne = me, Te = D ? T(De, d) : [], le = ne.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  }), F = /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4", children: [
      /* @__PURE__ */ u.jsxs(
        nr.h2,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.5 },
          className: "text-3xl my-5 tracking-tighter font-bold text-gray-900 dark:text-neutral-100",
          children: [
            d.toLocaleString("default", { month: "long" }),
            " ",
            d.getFullYear()
          ]
        },
        d.getMonth()
      ),
      /* @__PURE__ */ u.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ u.jsxs(Xe, { variant: "outline", onClick: O, className: "gap-2", children: [
          /* @__PURE__ */ u.jsx(Dc, { className: "h-4 w-4" }),
          "Prev"
        ] }),
        /* @__PURE__ */ u.jsxs(Xe, { variant: "outline", onClick: N, className: "gap-2", children: [
          "Next",
          /* @__PURE__ */ u.jsx(Tc, { className: "h-4 w-4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "grid grid-cols-7 gap-1 sm:gap-2 mb-4", children: V.map((L, M) => /* @__PURE__ */ u.jsx(
      "div",
      {
        className: "text-left py-2 text-lg tracking-tighter font-medium text-gray-900 dark:text-foreground",
        children: L
      },
      M
    )) }),
    /* @__PURE__ */ u.jsx(Bi, { initial: !1, custom: h, mode: "wait", children: /* @__PURE__ */ u.jsxs(
      nr.div,
      {
        custom: h,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        className: "grid grid-cols-7 gap-1 sm:gap-2",
        children: [
          Array.from({ length: H }).map((L, M) => /* @__PURE__ */ u.jsx("div", { className: "h-[150px] opacity-50 p-4", children: /* @__PURE__ */ u.jsx("div", { className: "font-semibold relative text-3xl mb-1 text-gray-400 dark:text-neutral-500", children: _ - H + M + 1 }) }, `offset-${M}`)),
          j.map((L) => {
            const M = T(L.day, d), I = (/* @__PURE__ */ new Date()).getDate() === L.day && (/* @__PURE__ */ new Date()).getMonth() === d.getMonth() && (/* @__PURE__ */ new Date()).getFullYear() === d.getFullYear(), q = (H + L.day - 1) % 7 >= 5, ce = D && ee && De === L.day;
            return /* @__PURE__ */ u.jsxs(
              nr.div,
              {
                className: "hover:z-50 border-none h-[150px] rounded group flex flex-col relative",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -20 },
                transition: { duration: 0.3 },
                onMouseEnter: () => {
                  S && m(L.day);
                },
                onMouseLeave: () => {
                  S && m(null);
                },
                children: [
                  /* @__PURE__ */ u.jsxs(
                    Qo,
                    {
                      role: M.length ? "button" : void 0,
                      tabIndex: M.length ? 0 : void 0,
                      "aria-label": `Events on ${new Date(d.getFullYear(), d.getMonth(), L.day).toLocaleDateString()}`,
                      onKeyDown: (ie) => {
                        ie.target === ie.currentTarget && M.length && (ie.key === "Enter" || ie.key === " ") && (ie.preventDefault(), ie.currentTarget.click());
                      },
                      className: `bg-white dark:bg-card border border-gray-200 dark:border-border shadow-md overflow-hidden relative flex p-4 h-full transition-shadow day-card ${M.length > 0 ? "cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary hover:shadow-lg hover:bg-muted dark:hover:bg-muted" : "cursor-default"} ${I ? "!border-red-500 !border-2" : ""} ${ce && !I ? "ring-2 ring-blue-500 dark:ring-primary" : ""}`,
                      onClick: M.length > 0 ? () => {
                        D && w(new Date(d.getFullYear(), d.getMonth(), L.day)), r == null || r(new Date(d.getFullYear(), d.getMonth(), L.day));
                      } : void 0,
                      children: [
                        /* @__PURE__ */ u.jsx("div", { className: `font-semibold relative text-3xl mb-1 ${M.length > 0 ? "text-gray-900 dark:text-foreground" : "text-gray-500 dark:text-muted-foreground"}`, children: L.day }),
                        /* @__PURE__ */ u.jsxs("div", { className: "flex-grow flex flex-col gap-2 w-full", children: [
                          /* @__PURE__ */ u.jsx(Bi, { mode: "wait", children: (M == null ? void 0 : M.length) > 0 && /* @__PURE__ */ u.jsx(
                            nr.div,
                            {
                              initial: { opacity: 0, y: 20 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: -20 },
                              transition: { duration: 0.3 },
                              children: /* @__PURE__ */ u.jsx(k, { events: M })
                            },
                            M[0].id
                          ) }),
                          C && M.length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "mt-auto", children: [
                            /* @__PURE__ */ u.jsxs(
                              "button",
                              {
                                type: "button",
                                className: "w-full flex items-center justify-between gap-2 rounded-md bg-muted/70 dark:bg-muted px-2 py-1 text-xs font-medium text-foreground transition-colors hover:bg-muted",
                                onClick: (ie) => {
                                  ie.stopPropagation(), v((ve) => ve === L.day ? null : L.day);
                                },
                                children: [
                                  /* @__PURE__ */ u.jsx("span", { children: g === L.day ? "Hide events" : "Show events" }),
                                  /* @__PURE__ */ u.jsx(
                                    "svg",
                                    {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      className: `h-3 w-3 transition-transform ${g === L.day ? "rotate-180" : ""}`,
                                      fill: "none",
                                      children: /* @__PURE__ */ u.jsx("polyline", { points: "6 9 12 15 18 9" })
                                    }
                                  )
                                ]
                              }
                            ),
                            g === L.day && /* @__PURE__ */ u.jsx("div", { className: "mt-2 space-y-1.5", children: z(M) })
                          ] })
                        ] })
                      ]
                    }
                  ),
                  S && y === L.day && M.length > 0 && /* @__PURE__ */ u.jsxs(
                    "div",
                    {
                      className: `absolute top-full z-50 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg shadow-lg p-3 w-80 ${q ? "right-0" : "left-0"}`,
                      onMouseEnter: () => {
                        S && m(L.day);
                      },
                      onMouseLeave: () => {
                        S && m(null);
                      },
                      children: [
                        /* @__PURE__ */ u.jsxs("div", { className: "text-sm font-semibold text-gray-900 dark:text-foreground mb-2", children: [
                          M.length,
                          " event",
                          M.length > 1 ? "s" : ""
                        ] }),
                        /* @__PURE__ */ u.jsx("div", { className: "space-y-1.5", children: z(M) })
                      ]
                    }
                  )
                ]
              },
              L.day
            );
          }),
          (() => {
            const M = (H + j.length) % 7, I = M === 0 ? 0 : 7 - M;
            return Array.from({ length: I }).map((Y, q) => /* @__PURE__ */ u.jsx("div", { className: "h-[150px] opacity-50 p-4", children: /* @__PURE__ */ u.jsx("div", { className: "font-semibold relative text-3xl mb-1 text-gray-400 dark:text-neutral-500", children: q + 1 }) }, `next-${q}`));
          })()
        ]
      },
      `${d.getFullYear()}-${d.getMonth()}`
    ) })
  ] }), Z = /* @__PURE__ */ u.jsx("div", { className: D ? "flex-1" : void 0, children: D ? /* @__PURE__ */ u.jsx("div", { className: "rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-card shadow-sm p-4 lg:p-6", children: F }) : F }), re = D ? /* @__PURE__ */ u.jsx("aside", { className: "md:w-72 w-full md:flex-shrink-0", children: /* @__PURE__ */ u.jsxs("div", { className: "rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-card shadow-md p-4", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ u.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-500 dark:text-muted-foreground", children: "Selected Day" }),
      /* @__PURE__ */ u.jsx("div", { className: "text-base font-semibold text-gray-900 dark:text-foreground", children: le })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "mt-3 space-y-1.5", children: Te.length > 0 ? z(Te) : /* @__PURE__ */ u.jsx("div", { className: "rounded-md border border-dashed border-gray-200 dark:border-border bg-gray-50 dark:bg-card px-3 py-4 text-xs text-gray-600 dark:text-muted-foreground", children: "No events scheduled for this day." }) })
  ] }) }) : null;
  return /* @__PURE__ */ u.jsxs("div", { className: D ? "flex flex-col gap-6 md:flex-row md:items-start" : "", children: [
    D && l === "left" && re,
    Z,
    D && l === "right" && re
  ] });
}
function q0({ events: e, eventMetadata: t, categoryMappings: n, currentDate: r, onDateChange: o, onEventClick: i }) {
  const a = ((h) => {
    const p = new Date(h);
    return p.setDate(h.getDate() - h.getDay()), Array.from({ length: 7 }, (y, m) => {
      const g = new Date(p);
      return g.setDate(p.getDate() + m), g;
    });
  })(r), l = Array.from({ length: 24 }, (h, p) => p), c = (h) => e.filter((p) => Zo(p, h)), f = (h) => {
    const p = new Date(r);
    p.setDate(r.getDate() + (h === "next" ? 7 : -7)), o(p);
  }, d = (h, p, y, m) => {
    const [g, v] = fr(h, m), b = v - g, w = p.filter((T) => {
      const [R, O] = fr(T, m);
      return g < O && v > R;
    }), S = w.length, C = w.findIndex((T) => T.id === h.id), D = S > 1 ? 100 / S : 100, P = S > 1 ? C * D : 0;
    return {
      top: `${g * 80}px`,
      // 80px per hour for better readability
      height: `${b * 80}px`,
      // Accurate height based on actual duration
      left: `${P}%`,
      width: `${D}%`
    };
  };
  return /* @__PURE__ */ u.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ u.jsx(
        "button",
        {
          "aria-label": "Previous week",
          onClick: () => f("prev"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ u.jsx(Pc, { className: "h-5 w-5" })
        }
      ),
      /* @__PURE__ */ u.jsxs("h2", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: [
        a[0].toLocaleDateString("en-US", { month: "long", day: "numeric" }),
        " - ",
        a[6].toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
      ] }),
      /* @__PURE__ */ u.jsx(
        "button",
        {
          "aria-label": "Next week",
          onClick: () => f("next"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ u.jsx(Ac, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "grid grid-cols-8 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700", children: [
        /* @__PURE__ */ u.jsx("div", { className: "p-3 text-xs font-medium text-gray-500 dark:text-gray-400 border-r border-gray-200 dark:border-gray-600", children: "Time" }),
        a.map((h, p) => /* @__PURE__ */ u.jsxs("div", { className: "p-3 text-center border-r border-gray-200 dark:border-gray-600 last:border-r-0", children: [
          /* @__PURE__ */ u.jsx("div", { className: "text-xs font-medium text-gray-500 dark:text-gray-400", children: h.toLocaleDateString("en-US", { weekday: "short" }) }),
          /* @__PURE__ */ u.jsx("div", { className: "text-sm font-semibold text-gray-900 dark:text-gray-100", children: h.getDate() })
        ] }, p))
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "grid grid-cols-8 relative", children: [
        /* @__PURE__ */ u.jsx("div", { className: "border-r border-gray-200 dark:border-gray-600", children: l.map((h) => /* @__PURE__ */ u.jsx("div", { className: "h-[80px] p-2 text-xs text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600 flex items-start", children: h === 0 ? "12 AM" : h === 12 ? "12 PM" : h > 12 ? `${h - 12} PM` : `${h} AM` }, h)) }),
        a.map((h, p) => {
          const y = c(h);
          return /* @__PURE__ */ u.jsxs("div", { className: "relative border-r border-gray-200 dark:border-gray-600 last:border-r-0", children: [
            l.map((m) => /* @__PURE__ */ u.jsx("div", { className: "h-[80px] border-b border-gray-200 dark:border-gray-600" }, m)),
            y.map((m, g) => {
              const v = t[m.id], b = yt(v == null ? void 0 : v.category, n), w = qd(b), S = d(m, y, g, h);
              return /* @__PURE__ */ u.jsxs(
                "div",
                {
                  role: "button",
                  tabIndex: 0,
                  "aria-label": `View ${m.title}`,
                  onKeyDown: (C) => {
                    (C.key === "Enter" || C.key === " ") && (C.preventDefault(), C.stopPropagation(), i == null || i(m));
                  },
                  className: `absolute ${w} border rounded p-2 text-sm z-20 overflow-hidden flex flex-col cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary hover:shadow-md transition-shadow event-card`,
                  style: {
                    ...S,
                    margin: "1px"
                  },
                  onClick: (C) => {
                    C.stopPropagation(), i == null || i(m);
                  },
                  children: [
                    /* @__PURE__ */ u.jsx("div", { className: "font-medium leading-tight truncate text-sm", children: m.title }),
                    /* @__PURE__ */ u.jsx("div", { className: "text-xs opacity-75 leading-tight", children: m.startDate.toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: !0
                    }) }),
                    v && /* @__PURE__ */ u.jsxs("div", { className: "text-xs leading-tight", children: [
                      /* @__PURE__ */ u.jsx("div", { className: "truncate", children: v.location }),
                      v.organization && /* @__PURE__ */ u.jsx("div", { className: "truncate opacity-75", children: v.organization })
                    ] })
                  ]
                },
                m.id
              );
            })
          ] }, p);
        })
      ] })
    ] })
  ] });
}
function X0({ events: e, eventMetadata: t, categoryMappings: n, currentDate: r, onDateChange: o, onEventClick: i }) {
  const s = Array.from({ length: 24 }, (d, h) => h), a = () => e.filter((d) => Zo(d, r)), l = (d) => {
    const h = new Date(r);
    h.setDate(r.getDate() + (d === "next" ? 1 : -1)), o(h);
  }, c = (d, h, p) => {
    const [y, m] = fr(d, r), g = m - y, v = h.filter((D) => {
      const [P, T] = fr(D, r);
      return y < T && m > P;
    }), b = v.length, w = v.findIndex((D) => D.id === d.id), S = b > 1 ? 100 / b : 100, C = b > 1 ? w * S : 0;
    return {
      top: `${y * 80}px`,
      // 80px per hour for day view
      height: `${g * 80}px`,
      // Accurate height based on actual duration
      left: `${C}%`,
      width: `${S}%`
    };
  }, f = a();
  return /* @__PURE__ */ u.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ u.jsx(
        "button",
        {
          "aria-label": "Previous day",
          onClick: () => l("prev"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ u.jsx(Pc, { className: "h-5 w-5" })
        }
      ),
      /* @__PURE__ */ u.jsx("h2", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: r.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }) }),
      /* @__PURE__ */ u.jsx(
        "button",
        {
          "aria-label": "Next day",
          onClick: () => l("next"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ u.jsx(Ac, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden", children: /* @__PURE__ */ u.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ u.jsx("div", { className: "w-20 border-r border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700", children: s.map((d) => /* @__PURE__ */ u.jsx("div", { className: "h-[80px] p-3 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600 flex items-start", children: d === 0 ? "12 AM" : d === 12 ? "12 PM" : d > 12 ? `${d - 12} PM` : `${d} AM` }, d)) }),
      /* @__PURE__ */ u.jsxs("div", { className: "flex-1 relative", children: [
        s.map((d) => /* @__PURE__ */ u.jsx("div", { className: "h-[80px] border-b border-gray-200 dark:border-gray-600" }, d)),
        f.map((d, h) => {
          const p = t[d.id], y = yt(p == null ? void 0 : p.category, n), m = qd(y), g = c(d, f);
          return /* @__PURE__ */ u.jsxs(
            "div",
            {
              role: "button",
              tabIndex: 0,
              "aria-label": `View ${d.title}`,
              onKeyDown: (v) => {
                (v.key === "Enter" || v.key === " ") && (v.preventDefault(), v.stopPropagation(), i == null || i(d));
              },
              className: `absolute ${m} border rounded-lg p-2 text-sm z-20 overflow-hidden flex flex-col cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary hover:shadow-md transition-shadow event-card`,
              style: {
                ...g,
                margin: "2px"
              },
              onClick: (v) => {
                v.stopPropagation(), i == null || i(d);
              },
              children: [
                /* @__PURE__ */ u.jsx("div", { className: "font-semibold leading-tight truncate", children: d.title }),
                /* @__PURE__ */ u.jsxs("div", { className: "text-xs opacity-75 leading-tight", children: [
                  d.startDate.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: !0
                  }),
                  d.endDate && ` - ${d.endDate.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: !0
                  })}`
                ] }),
                p && /* @__PURE__ */ u.jsxs("div", { className: "text-xs leading-tight", children: [
                  /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ u.jsx(kn, { className: "h-2.5 w-2.5" }),
                    /* @__PURE__ */ u.jsx("span", { className: "truncate", children: p.location })
                  ] }),
                  p.organization && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ u.jsx(bg, { className: "h-2.5 w-2.5" }),
                    /* @__PURE__ */ u.jsx("span", { className: "truncate opacity-75", children: p.organization })
                  ] })
                ] })
              ]
            },
            d.id
          );
        })
      ] })
    ] }) })
  ] });
}
function Z0({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onMonthChange: o, currentDate: i }) {
  const [s, a] = U.useState(/* @__PURE__ */ new Date()), [l, c] = U.useState(/* @__PURE__ */ new Date()), f = i || l, d = () => {
    const N = new Date(f.getFullYear(), f.getMonth() - 1, 1);
    i || c(N), o == null || o(N);
  }, h = () => {
    const N = new Date(f.getFullYear(), f.getMonth() + 1, 1);
    i || c(N), o == null || o(N);
  }, p = (N) => N.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), y = () => s ? e.filter((N) => {
    const j = new Date(N.startDate);
    return j.getDate() === s.getDate() && j.getMonth() === s.getMonth() && j.getFullYear() === s.getFullYear();
  }) : [], m = (N) => e.some((j) => {
    const V = new Date(j.startDate);
    return V.getDate() === N.getDate() && V.getMonth() === N.getMonth() && V.getFullYear() === N.getFullYear();
  }), g = y(), v = f.getFullYear(), b = f.getMonth(), w = new Date(v, b, 1), S = new Date(w);
  S.setDate(S.getDate() - w.getDay());
  const C = [], D = new Date(S), P = new Date(v, b + 1, 0).getDate(), T = w.getDay() + P, O = Math.ceil(T / 7) * 7;
  for (let N = 0; N < O; N++)
    C.push(new Date(D)), D.setDate(D.getDate() + 1);
  return /* @__PURE__ */ u.jsxs(Qo, { className: "w-full py-4 mobile-calendar bg-white dark:bg-card border-gray-200 dark:border-border", children: [
    /* @__PURE__ */ u.jsxs(fl, { className: "px-4", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between mb-4 gap-2", children: [
        /* @__PURE__ */ u.jsxs(
          Xe,
          {
            variant: "outline",
            size: "sm",
            onClick: d,
            className: "flex-shrink-0",
            children: [
              /* @__PURE__ */ u.jsx(Dc, { className: "h-4 w-4" }),
              /* @__PURE__ */ u.jsx("span", { className: "hidden xs:inline", children: "Prev" })
            ]
          }
        ),
        /* @__PURE__ */ u.jsx("h3", { className: "text-base sm:text-lg font-semibold text-gray-900 dark:text-foreground text-center flex-1 min-w-0 truncate", children: f.toLocaleDateString("en-US", { month: "long", year: "numeric" }) }),
        /* @__PURE__ */ u.jsxs(
          Xe,
          {
            variant: "outline",
            size: "sm",
            onClick: h,
            className: "flex-shrink-0",
            children: [
              /* @__PURE__ */ u.jsx("span", { className: "hidden xs:inline", children: "Next" }),
              /* @__PURE__ */ u.jsx(Tc, { className: "h-4 w-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "grid grid-cols-7 gap-1 mb-4", children: [
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((N) => /* @__PURE__ */ u.jsx("div", { className: "text-center text-sm font-medium py-2 text-gray-900 dark:text-foreground", children: N }, N)),
        C.map((N, j) => {
          const V = N.getMonth() === b, B = s && N.getDate() === s.getDate() && N.getMonth() === s.getMonth() && N.getFullYear() === s.getFullYear(), H = N.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), A = m(N);
          return /* @__PURE__ */ u.jsxs(
            "button",
            {
              onClick: () => a(N),
              className: `
                  p-2 text-sm rounded transition-colors relative focus:outline-none
                  ${V ? "text-gray-900 dark:text-foreground" : "text-gray-500 dark:text-muted-foreground"}
                  ${B ? "bg-blue-500 dark:bg-primary text-white dark:text-primary-foreground hover:bg-blue-600 dark:hover:bg-primary/90" : "hover:bg-gray-100 dark:hover:bg-muted"}
                  ${H && !B ? "bg-gray-200 dark:bg-muted font-semibold" : ""}
                `,
              children: [
                N.getDate(),
                A && /* @__PURE__ */ u.jsx(
                  "span",
                  {
                    className: "absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full",
                    "aria-label": "Events available"
                  }
                )
              ]
            },
            j
          );
        })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs(Gf, { className: "flex flex-col items-start gap-3 border-t border-gray-200 dark:border-border px-4 !pt-4", children: [
      /* @__PURE__ */ u.jsx("div", { className: "flex w-full items-center justify-between px-1", children: /* @__PURE__ */ u.jsx("div", { className: "text-sm font-medium text-gray-900 dark:text-foreground", children: s == null ? void 0 : s.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }) }) }),
      /* @__PURE__ */ u.jsx("div", { className: "flex w-full flex-col gap-2", children: g.length === 0 ? /* @__PURE__ */ u.jsx("div", { className: "text-sm text-gray-500 dark:text-muted-foreground text-center py-4", children: "No events on this day" }) : g.map((N) => {
        const j = t[N.id], V = yt(j == null ? void 0 : j.category, n), H = ze(V).replace("bg-", "after:bg-");
        return /* @__PURE__ */ u.jsxs(
          "button",
          {
            role: "button",
            tabIndex: 0,
            "aria-label": `View ${N.title}`,
            onKeyDown: (A) => {
              (A.key === "Enter" || A.key === " ") && (A.preventDefault(), A.stopPropagation(), r == null || r(N));
            },
            className: `bg-card dark:bg-card relative rounded-md p-2 pl-6 text-sm text-left w-full after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary hover:bg-muted dark:hover:bg-muted transition-colors focus:outline-none border border-gray-200 dark:border-border ${H}`,
            onClick: () => r == null ? void 0 : r(N),
            children: [
              /* @__PURE__ */ u.jsx("div", { className: "font-medium text-gray-900 dark:text-foreground", children: N.title }),
              /* @__PURE__ */ u.jsxs("div", { className: "text-muted-foreground dark:text-muted-foreground text-xs", children: [
                p(N.startDate),
                " - ",
                p(N.endDate),
                j && ` • ${j.location}`
              ] })
            ]
          },
          N.id
        );
      }) })
    ] })
  ] });
}
function J0({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onLoadMore: o, hasMore: i, loading: s, showCost: a = !0 }) {
  const l = (p) => p.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), c = /* @__PURE__ */ new Date();
  c.setHours(0, 0, 0, 0);
  const d = [...e.filter((p) => {
    const y = new Date(p.startDate);
    return y.setHours(0, 0, 0, 0), y >= c;
  })].sort((p, y) => p.startDate.getTime() - y.startDate.getTime()), h = d.reduce((p, y) => {
    const m = y.startDate.toDateString();
    return p[m] || (p[m] = []), p[m].push(y), p;
  }, {});
  return /* @__PURE__ */ u.jsxs("div", { className: "space-y-6", children: [
    d.length === 0 ? /* @__PURE__ */ u.jsxs("div", { className: "text-center py-12 text-muted-foreground", children: [
      /* @__PURE__ */ u.jsx(Tn, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
      /* @__PURE__ */ u.jsx("h3", { className: "text-lg font-medium mb-2", children: "No events found" }),
      /* @__PURE__ */ u.jsx("p", { children: "Try adjusting your filters to see more events." })
    ] }) : Object.entries(h).map(([p, y]) => {
      const m = new Date(p), g = m.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), v = m.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let b;
      return g ? b = "Today" : v ? b = "Tomorrow" : b = m.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }), /* @__PURE__ */ u.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ u.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-foreground", children: b }),
          /* @__PURE__ */ u.jsx("div", { className: "flex-1 h-px bg-border" }),
          /* @__PURE__ */ u.jsxs("span", { className: "text-xs font-semibold text-gray-900 dark:text-muted-foreground bg-gray-50 dark:bg-muted px-2 py-0.5 rounded-full border border-gray-200 dark:border-border", children: [
            y.length,
            " event",
            y.length > 1 ? "s" : ""
          ] })
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "space-y-2", children: y.map((w) => {
          const S = t[w.id], C = yt(S == null ? void 0 : S.category, n), P = ze(C).replace("bg-", "after:bg-");
          return /* @__PURE__ */ u.jsxs(
            "div",
            {
              role: "button",
              tabIndex: 0,
              "aria-label": `View ${w.title}`,
              onKeyDown: (T) => {
                (T.key === "Enter" || T.key === " ") && (T.preventDefault(), T.stopPropagation(), r == null || r(w));
              },
              className: `bg-card dark:bg-card relative rounded-md p-3 pl-6 text-sm border border-gray-200 dark:border-border shadow-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary hover:bg-muted dark:hover:bg-muted transition-colors ${P}`,
              onClick: () => r == null ? void 0 : r(w),
              children: [
                /* @__PURE__ */ u.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ u.jsxs("div", { className: "flex-grow min-w-0", children: [
                    /* @__PURE__ */ u.jsx("div", { className: "font-medium text-gray-900 dark:text-foreground mb-2", children: w.title }),
                    /* @__PURE__ */ u.jsxs("div", { className: "space-y-1 text-xs text-gray-900 dark:text-foreground", children: [
                      /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ u.jsx(Yt, { className: "h-3 w-3" }),
                        /* @__PURE__ */ u.jsxs("span", { children: [
                          l(w.startDate),
                          " - ",
                          l(w.endDate)
                        ] })
                      ] }),
                      (S == null ? void 0 : S.location) && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ u.jsx(kn, { className: "h-3 w-3" }),
                        /* @__PURE__ */ u.jsx("span", { children: S.location })
                      ] }),
                      (S == null ? void 0 : S.organization) && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ u.jsx(Ir, { className: "h-3 w-3" }),
                        /* @__PURE__ */ u.jsx("span", { children: S.organization })
                      ] })
                    ] })
                  ] }),
                  a && S && S.cost && /* @__PURE__ */ u.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: S.cost })
                ] }),
                (S == null ? void 0 : S.registrationRequired) && /* @__PURE__ */ u.jsx("div", { className: "mt-2", children: /* @__PURE__ */ u.jsx(qt, { variant: "outline", size: "sm", children: "Registration Required" }) })
              ]
            },
            w.id
          );
        }) })
      ] }, p);
    }),
    o && i && /* @__PURE__ */ u.jsx("div", { className: "text-center pt-6", children: /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: o,
        disabled: s,
        className: "px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm",
        children: s ? "Loading..." : "Load More Events"
      }
    ) })
  ] });
}
function Q0({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onLoadMore: o, hasMore: i, loading: s, showCost: a = !0 }) {
  const l = (p) => p.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), c = /* @__PURE__ */ new Date();
  c.setHours(0, 0, 0, 0);
  const d = [...e.filter((p) => {
    const y = new Date(p.startDate);
    return y.setHours(0, 0, 0, 0), y >= c;
  })].sort((p, y) => p.startDate.getTime() - y.startDate.getTime()), h = d.reduce((p, y) => {
    const m = y.startDate.toDateString();
    return p[m] || (p[m] = []), p[m].push(y), p;
  }, {});
  return /* @__PURE__ */ u.jsxs("div", { className: "space-y-6", children: [
    d.length === 0 ? /* @__PURE__ */ u.jsxs("div", { className: "text-center py-12 text-muted-foreground", children: [
      /* @__PURE__ */ u.jsx(Tn, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
      /* @__PURE__ */ u.jsx("h3", { className: "text-lg font-medium mb-2", children: "No events found" }),
      /* @__PURE__ */ u.jsx("p", { children: "Try adjusting your filters to see more events." })
    ] }) : Object.entries(h).map(([p, y]) => {
      const m = new Date(p), g = m.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), v = m.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let b;
      return g ? b = "Today" : v ? b = "Tomorrow" : b = m.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }), /* @__PURE__ */ u.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ u.jsx("h3", { className: "text-base font-semibold text-gray-900 dark:text-foreground", children: b }),
          /* @__PURE__ */ u.jsx("div", { className: "flex-1 h-px bg-border" }),
          /* @__PURE__ */ u.jsx("span", { className: "text-xs font-semibold text-gray-900 dark:text-muted-foreground bg-gray-50 dark:bg-muted px-2 py-0.5 rounded-full border border-gray-200 dark:border-border", children: y.length })
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "space-y-2", children: y.map((w) => {
          const S = t[w.id], C = yt(S == null ? void 0 : S.category, n), P = ze(C).replace("bg-", "after:bg-");
          return /* @__PURE__ */ u.jsxs(
            "div",
            {
              role: "button",
              tabIndex: 0,
              "aria-label": `View ${w.title}`,
              onKeyDown: (T) => {
                (T.key === "Enter" || T.key === " ") && (T.preventDefault(), T.stopPropagation(), r == null || r(w));
              },
              className: `bg-card dark:bg-card relative rounded-md p-3 pl-6 text-sm border border-gray-200 dark:border-border shadow-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary hover:bg-muted dark:hover:bg-muted transition-colors ${P}`,
              onClick: () => r == null ? void 0 : r(w),
              children: [
                /* @__PURE__ */ u.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ u.jsxs("div", { className: "flex-grow min-w-0", children: [
                    /* @__PURE__ */ u.jsx("div", { className: "font-medium text-gray-900 dark:text-foreground mb-2", children: w.title }),
                    /* @__PURE__ */ u.jsxs("div", { className: "space-y-1 text-xs text-gray-900 dark:text-foreground", children: [
                      /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ u.jsx(Yt, { className: "h-3 w-3" }),
                        /* @__PURE__ */ u.jsxs("span", { children: [
                          l(w.startDate),
                          " - ",
                          l(w.endDate)
                        ] })
                      ] }),
                      (S == null ? void 0 : S.location) && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ u.jsx(kn, { className: "h-3 w-3" }),
                        /* @__PURE__ */ u.jsx("span", { children: S.location })
                      ] }),
                      (S == null ? void 0 : S.organization) && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ u.jsx(Ir, { className: "h-3 w-3" }),
                        /* @__PURE__ */ u.jsx("span", { children: S.organization })
                      ] })
                    ] })
                  ] }),
                  a && S && S.cost && /* @__PURE__ */ u.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: S.cost })
                ] }),
                (S == null ? void 0 : S.registrationRequired) && /* @__PURE__ */ u.jsx("div", { className: "mt-2", children: /* @__PURE__ */ u.jsx(qt, { variant: "outline", size: "sm", children: "Registration Required" }) })
              ]
            },
            w.id
          );
        }) })
      ] }, p);
    }),
    o && i && /* @__PURE__ */ u.jsx("div", { className: "text-center pt-6", children: /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: o,
        disabled: s,
        className: "px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm",
        children: s ? "Loading..." : "Load More Events"
      }
    ) })
  ] });
}
function ew({
  initialView: e = "month",
  initialCategoryFilter: t = "all",
  initialOrganizationFilter: n = "all",
  showWeekView: r = !0,
  showDayView: o = !0,
  showCost: i = !0,
  eventSortOrder: s = "asc",
  initialMonthDisplayMode: a = "popover",
  initialMonthSidebarPosition: l = "right"
} = {}) {
  var oi, si, ii, ai;
  const [c, f] = W(e), [d, h] = W(/* @__PURE__ */ new Date()), [p, y] = W(/* @__PURE__ */ new Date()), [m, g] = W(null), [v, b] = W(!1), [w, S] = W(!1), [C, D] = W(a), [P, T] = W(l), R = C === "sidebar", [O, N] = W(30), [j, V] = W(30), [B, H] = W(15);
  U.useEffect(() => {
    const E = document.querySelector(".unbc-calendar-container");
    if (E) {
      const J = parseInt(E.getAttribute("data-list-initial-items") || "30"), pe = parseInt(E.getAttribute("data-list-load-more-count") || "15");
      V(J), H(pe), N(J);
      const te = E.getAttribute("data-month-display-mode");
      (te === "popover" || te === "dropdown" || te === "sidebar") && D(te);
      const xe = E.getAttribute("data-month-sidebar-position");
      (xe === "left" || xe === "right") && T(xe);
    }
  }, []), U.useEffect(() => {
    D(a);
  }, [a]), U.useEffect(() => {
    T(l);
  }, [l]), U.useEffect(() => {
    const E = document.createElement("style");
    return E.textContent = `
      /* Hide any add event hover text */
      .unbc-calendar-view .absolute.bg-accent.flex.items-center.justify-center {
        display: none !important;
      }
      
      /* Disable click events on some elements but not on interactive ones */
      .unbc-calendar-view .cursor-pointer.disable-clicks {
        cursor: default !important;
        pointer-events: none !important;
      }
      
      /* Explicitly ensure navigation buttons work */
      .unbc-calendar-view button,
      .mobile-calendar button {
        pointer-events: auto !important;
        cursor: pointer !important;
      }
      
      /* Ensure day cards are clickable */
      .unbc-calendar-view .day-card {
        pointer-events: auto !important;
        cursor: pointer !important;
      }
      
      /* Ensure event cards in day/week view are clickable */
      .unbc-calendar-view .event-card {
        pointer-events: auto !important;
        cursor: pointer !important;
      }
      
      /* Ensure the grid doesn't block events */
      .unbc-calendar-view [role="tabpanel"] > div > div {
        pointer-events: none;
      }
      
      .unbc-calendar-view [role="tabpanel"] > div > div > * {
        pointer-events: auto;
      }
      
      /* Fix select dropdowns - ensure they work properly */
      .unbc-calendar-view [data-slot="select-trigger"] {
        pointer-events: auto !important;
        cursor: pointer !important;
        z-index: 10 !important;
      }
      
      /* Ensure select content is visible and accessible */
      [data-slot="select-content"] {
        z-index: 999999 !important;
        position: fixed !important;
        pointer-events: auto !important;
      }
      
      /* Ensure select items are clickable */
      [data-slot="select-item"] {
        pointer-events: auto !important;
        cursor: pointer !important;
      }
      
      /* Override any WordPress admin styles that might interfere */
      .unbc-calendar-view [role="combobox"] {
        pointer-events: auto !important;
      }

    `, document.head.appendChild(E), () => {
      document.head.removeChild(E);
    };
  }, []), U.useEffect(() => {
    const E = () => {
      var xe;
      const te = (
        // Priority 1: Explicit theme attributes
        document.documentElement.hasAttribute("data-theme") && document.documentElement.getAttribute("data-theme") === "dark" || document.documentElement.hasAttribute("data-color-scheme") && document.documentElement.getAttribute("data-color-scheme") === "dark" || // Priority 2: Theme classes on body or html
        document.body.classList.contains("dark") || document.documentElement.classList.contains("is-dark-theme") || document.body.classList.contains("is-dark-theme") || // Priority 3: Computed styles
        ((xe = getComputedStyle(document.documentElement).getPropertyValue("--wp--preset--color--background")) == null ? void 0 : xe.includes("0, 0, 0")) || getComputedStyle(document.body).backgroundColor === "rgb(0, 0, 0)" || // Priority 4: System preference (lowest priority)
        !document.documentElement.hasAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches
      );
      S(te), J && J.disconnect(), te ? document.querySelectorAll(".unbc-calendar-container, .unbc-today-events-widget").forEach((Me) => Me.classList.add("dark")) : document.querySelectorAll(".unbc-calendar-container, .unbc-today-events-widget").forEach((Me) => Me.classList.remove("dark")), J && (J.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-theme", "data-color-scheme"] }), J.observe(document.body, { attributes: !0, attributeFilter: ["class"] }));
    }, J = new MutationObserver(E);
    E(), J.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-theme", "data-color-scheme"] }), J.observe(document.body, { attributes: !0, attributeFilter: ["class"] });
    const pe = window.matchMedia("(prefers-color-scheme: dark)");
    return pe.addEventListener("change", E), () => {
      J.disconnect(), pe.removeEventListener("change", E);
    };
  }, []);
  const [A, _] = W(t), [k, z] = W(n), [G, ee] = W(""), [me, De] = W(""), ne = oy(), Te = U.useMemo(() => {
    var E;
    return {
      ...hf(c, c === "list" ? /* @__PURE__ */ new Date() : p),
      per_page: 100,
      view: c,
      organization: k === "all" ? "" : k,
      category: A === "all" ? "" : [A, ...((E = ne.config) == null ? void 0 : E.categoryRelationships[A]) || []].join(","),
      search: G
    };
  }, [c, p, k, A, ne.config, G]);
  Zg(Te);
  const le = Hc(Te), F = ry(), Z = Kc();
  U.useEffect(() => {
    const E = setTimeout(() => {
      ee(me);
    }, 300);
    return () => clearTimeout(E);
  }, [me]);
  const re = U.useMemo(() => {
    var E;
    return ((E = ne.config) == null ? void 0 : E.categoriesWithOrganizations) || [];
  }, [ne.config]);
  U.useEffect(() => {
    n === "all" && re.length && !re.includes(A) && A !== "all" && z("all");
  }, [A, re]);
  const L = le, {
    events: M,
    eventMetadata: I,
    loading: Y,
    error: q,
    hasMore: ce,
    loadMore: ie,
    categoryMappings: ve
  } = L, Ye = F.organizations, rt = F.loading, { categories: Re, loading: ot } = Z, ei = U.useMemo(
    () => Xd(Re),
    [Re]
  ), Lt = U.useMemo(() => ve && Object.keys(ve).length > 0 ? ve : ei, [ve, ei]), ti = U.useMemo(() => {
    const E = /* @__PURE__ */ new Map();
    return Ye.forEach((J) => {
      E.set(J.id.toString(), J.title.rendered);
    }), E;
  }, [Ye]), ni = U.useCallback((E, J) => {
    var Me, ln, li;
    const pe = I[E.id];
    if (!pe) return !1;
    const te = [J, ...((ln = (Me = ne.config) == null ? void 0 : Me.categoryRelationships) == null ? void 0 : ln[J]) || []];
    return (((li = pe.categories) == null ? void 0 : li.map((Wr) => Wr.slug)) || [pe.category || ""]).some((Wr) => te.includes(Wr));
  }, [I, ne.config]), st = U.useMemo(() => {
    let E = M;
    if (c === "list") {
      const J = /* @__PURE__ */ new Date();
      J.setHours(0, 0, 0, 0), E = E.filter((pe) => {
        const te = new Date(pe.startDate);
        return te.setHours(0, 0, 0, 0), te >= J;
      }), E = E.sort((pe, te) => {
        const xe = pe.startDate.getTime(), Me = te.startDate.getTime();
        return s === "asc" ? xe - Me : Me - xe;
      });
    } else
      E = E.sort((J, pe) => {
        const te = J.startDate.getTime(), xe = pe.startDate.getTime();
        return s === "asc" ? te - xe : xe - te;
      });
    if (A !== "all" && (E = E.filter((J) => ni(J, A))), k !== "all") {
      const J = ti.get(k);
      E = E.filter((pe) => {
        const te = I[pe.id];
        return J && (te == null ? void 0 : te.organization) === J;
      });
    }
    if (G) {
      const J = G.toLowerCase();
      E = E.filter((pe) => {
        var xe, Me, ln;
        const te = I[pe.id];
        return pe.title.toLowerCase().includes(J) || ((xe = pe.description) == null ? void 0 : xe.toLowerCase().includes(J)) || ((Me = te == null ? void 0 : te.location) == null ? void 0 : Me.toLowerCase().includes(J)) || ((ln = te == null ? void 0 : te.organization) == null ? void 0 : ln.toLowerCase().includes(J));
      });
    }
    return E;
  }, [M, I, A, k, G, ti, c, ni, s]), Jd = U.useCallback((E) => {
    h(E), y(E), R || (o ? f("day") : r && f("week"));
  }, [R, o, r]), _n = U.useCallback((E) => {
    y(E);
  }, []), It = U.useCallback((E) => {
    g(E), b(!0);
  }, []), ri = U.useCallback(() => {
    N((E) => E + B), ce && ie();
  }, [B, ce, ie]);
  U.useEffect(() => {
    !r && c === "week" ? f(o ? "day" : "month") : !o && c === "day" && f(r ? "week" : "month");
  }, [r, o, c, f]);
  const Qd = `rounded-lg unbc-calendar-view ${c === "month" && R ? "bg-transparent dark:bg-transparent border border-transparent shadow-none" : "bg-card border border-border shadow-sm"}`;
  return U.useEffect(() => {
    c === "list" && N(j);
  }, [c, A, k, G, j]), (Y || rt || ot) && (!M || M.length === 0) ? /* @__PURE__ */ u.jsx("div", { className: "w-full flex items-center justify-center py-12", children: /* @__PURE__ */ u.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ u.jsx(ar, { className: "h-8 w-8 animate-spin mx-auto mb-4" }),
    /* @__PURE__ */ u.jsx("p", { role: "status", className: "text-muted-foreground", children: "Loading calendar..." })
  ] }) }) : q ? /* @__PURE__ */ u.jsx("div", { className: "w-full py-12", children: /* @__PURE__ */ u.jsx(Qo, { className: "max-w-md mx-auto", children: /* @__PURE__ */ u.jsxs(fl, { className: "pt-6 text-center", children: [
    /* @__PURE__ */ u.jsxs("p", { role: "alert", className: "text-red-600 mb-4", children: [
      "Error loading events: ",
      q
    ] }),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => window.location.reload(),
        className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
        children: "Retry"
      }
    )
  ] }) }) }) : /* @__PURE__ */ u.jsxs("div", { id: "unbc-calendar-react-component", "data-calendar-isolated": "true", className: `w-full space-y-6 ${w ? "dark" : ""}`, children: [
    /* @__PURE__ */ u.jsx("div", { className: Qd, children: /* @__PURE__ */ u.jsxs(Yg, { value: c, onValueChange: f, className: "w-full", children: [
      /* @__PURE__ */ u.jsx("div", { className: "hidden md:block p-6 pb-0", children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ u.jsxs(Kn, { value: A, onValueChange: _, children: [
            /* @__PURE__ */ u.jsx(Gn, { className: "w-40 border border-border bg-card text-foreground", children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ u.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${A === "all" ? "bg-muted-foreground" : ze(((oi = Re.find((E) => E.slug === A)) == null ? void 0 : oi.variant) || "default")}` }),
              /* @__PURE__ */ u.jsx("span", { children: A === "all" ? "All Categories" : ((si = Re.find((E) => E.slug === A)) == null ? void 0 : si.name) || "All Categories" })
            ] }) }),
            /* @__PURE__ */ u.jsxs(Yn, { className: "bg-card border border-border z-[9999] shadow-lg", children: [
              /* @__PURE__ */ u.jsx(lt, { value: "all", className: "text-foreground hover:bg-muted focus:bg-muted focus:outline-none", children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                /* @__PURE__ */ u.jsx("span", { className: "w-3 h-3 rounded-full flex-shrink-0 bg-muted-foreground" }),
                /* @__PURE__ */ u.jsx("span", { children: "All" })
              ] }) }),
              Re.map((E) => /* @__PURE__ */ u.jsx(
                lt,
                {
                  value: E.slug,
                  className: "text-foreground hover:bg-muted focus:bg-muted focus:outline-none",
                  children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                    /* @__PURE__ */ u.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${ze(E.variant || "default")}` }),
                    /* @__PURE__ */ u.jsx("span", { children: E.name })
                  ] })
                },
                E.id
              ))
            ] })
          ] }),
          re.includes(A) && /* @__PURE__ */ u.jsxs(Kn, { value: k, onValueChange: z, children: [
            /* @__PURE__ */ u.jsx(Gn, { className: "w-44 border border-border bg-card text-foreground [&>span]:truncate [&>span]:block", children: /* @__PURE__ */ u.jsx(Oi, { placeholder: "All Organizations" }) }),
            /* @__PURE__ */ u.jsxs(Yn, { className: "bg-card border border-border max-h-[200px] overflow-y-auto", children: [
              /* @__PURE__ */ u.jsx(lt, { value: "all", className: "text-foreground focus:bg-muted", children: "All Organizations" }),
              Ye.map((E) => /* @__PURE__ */ u.jsx(
                lt,
                {
                  value: E.id.toString(),
                  className: "text-foreground focus:bg-muted",
                  children: E.title.rendered
                },
                E.id
              ))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ u.jsxs(Vi, { className: "h-9 bg-muted dark:bg-background/50 border border-transparent dark:border-border/40 p-1", children: [
          o && /* @__PURE__ */ u.jsxs(wt, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm", children: [
            /* @__PURE__ */ u.jsx(Yt, { className: "h-3 w-3" }),
            "Day"
          ] }),
          r && /* @__PURE__ */ u.jsxs(wt, { value: "week", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm", children: [
            /* @__PURE__ */ u.jsx(ir, { className: "h-3 w-3" }),
            "Week"
          ] }),
          /* @__PURE__ */ u.jsxs(wt, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm", children: [
            /* @__PURE__ */ u.jsx(Tn, { className: "h-3 w-3" }),
            "Month"
          ] }),
          /* @__PURE__ */ u.jsxs(wt, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm", children: [
            /* @__PURE__ */ u.jsx(Ii, { className: "h-3 w-3" }),
            "List"
          ] })
        ] }) }),
        /* @__PURE__ */ u.jsxs("div", { className: "flex-shrink-0 flex items-center gap-2", children: [
          Y && M && M.length > 0 && /* @__PURE__ */ u.jsx(ar, { className: "h-4 w-4 animate-spin text-muted-foreground" }),
          /* @__PURE__ */ u.jsx(
            Eo,
            {
              placeholder: "Search events...",
              value: me,
              onChange: (E) => De(E.target.value),
              className: "w-40 border border-border bg-card text-foreground placeholder:text-muted-foreground"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ u.jsxs("div", { className: "md:hidden", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "px-4 py-4 flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ u.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ u.jsxs(Kn, { value: A, onValueChange: _, children: [
            /* @__PURE__ */ u.jsx(Gn, { className: "w-auto min-w-[60px] h-9 px-2 border border-border bg-card text-foreground", children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ u.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${A === "all" ? "bg-muted-foreground" : ze(((ii = Re.find((E) => E.slug === A)) == null ? void 0 : ii.variant) || "default")}` }),
              /* @__PURE__ */ u.jsx("span", { className: "text-xs truncate max-w-[60px]", children: A === "all" ? "All" : ((ai = Re.find((E) => E.slug === A)) == null ? void 0 : ai.name) || "All" })
            ] }) }),
            /* @__PURE__ */ u.jsxs(Yn, { className: "bg-card border border-border z-[9999]", children: [
              /* @__PURE__ */ u.jsx(lt, { value: "all", className: "text-foreground focus:bg-muted", children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                /* @__PURE__ */ u.jsx("span", { className: "w-3 h-3 rounded-full flex-shrink-0 bg-muted-foreground" }),
                /* @__PURE__ */ u.jsx("span", { children: "All" })
              ] }) }),
              Re.map((E) => /* @__PURE__ */ u.jsx(
                lt,
                {
                  value: E.slug,
                  className: "text-foreground focus:bg-muted",
                  children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                    /* @__PURE__ */ u.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${ze(E.variant || "default")}` }),
                    /* @__PURE__ */ u.jsx("span", { children: E.name })
                  ] })
                },
                E.id
              ))
            ] })
          ] }) }),
          /* @__PURE__ */ u.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ u.jsxs(Vi, { className: "h-9 bg-muted dark:bg-background/50 border border-transparent dark:border-border/40 p-1", children: [
            o && /* @__PURE__ */ u.jsxs(wt, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm flex-1", children: [
              /* @__PURE__ */ u.jsx(Yt, { className: "h-3 w-3" }),
              /* @__PURE__ */ u.jsx("span", { className: "hidden xs:inline", children: "Day" })
            ] }),
            /* @__PURE__ */ u.jsxs(wt, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm flex-1", children: [
              /* @__PURE__ */ u.jsx(Tn, { className: "h-3 w-3" }),
              /* @__PURE__ */ u.jsx("span", { className: "hidden xs:inline", children: "Month" })
            ] }),
            /* @__PURE__ */ u.jsxs(wt, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm flex-1", children: [
              /* @__PURE__ */ u.jsx(Ii, { className: "h-3 w-3" }),
              /* @__PURE__ */ u.jsx("span", { className: "hidden xs:inline", children: "List" })
            ] })
          ] }) }),
          /* @__PURE__ */ u.jsxs("div", { className: "flex-shrink-0 flex items-center gap-2", children: [
            Y && M && M.length > 0 && /* @__PURE__ */ u.jsx(ar, { className: "h-4 w-4 animate-spin text-muted-foreground" }),
            /* @__PURE__ */ u.jsx(
              Xe,
              {
                variant: "outline",
                size: "sm",
                className: "h-9 px-2 border border-border bg-card hover:bg-muted",
                onClick: () => {
                  const E = document.querySelector(".mobile-search-input");
                  E && (E.style.display = E.style.display === "none" ? "block" : "none", E.style.display !== "none" && E.focus());
                },
                children: /* @__PURE__ */ u.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "text-muted-foreground", children: [
                  /* @__PURE__ */ u.jsx("circle", { cx: "11", cy: "11", r: "8" }),
                  /* @__PURE__ */ u.jsx("path", { d: "m21 21-4.35-4.35" })
                ] })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ u.jsx(
          Eo,
          {
            placeholder: "Search events...",
            value: me,
            onChange: (E) => De(E.target.value),
            className: "mobile-search-input w-full h-9 border border-border bg-card text-foreground placeholder:text-muted-foreground",
            style: { display: "none" }
          }
        ) }),
        re.includes(A) && /* @__PURE__ */ u.jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ u.jsxs(Kn, { value: k, onValueChange: z, children: [
          /* @__PURE__ */ u.jsx(Gn, { className: "w-full h-9 border border-border bg-card text-foreground", children: /* @__PURE__ */ u.jsx(Oi, { placeholder: "All Organizations", className: "truncate" }) }),
          /* @__PURE__ */ u.jsxs(Yn, { className: "bg-card border border-border max-h-[200px] overflow-y-auto", children: [
            /* @__PURE__ */ u.jsx(lt, { value: "all", className: "text-foreground focus:bg-muted", children: "All Organizations" }),
            Ye.map((E) => /* @__PURE__ */ u.jsx(
              lt,
              {
                value: E.id.toString(),
                className: "text-foreground focus:bg-muted",
                children: E.title.rendered
              },
              E.id
            ))
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ u.jsxs(Xn, { value: "month", className: "px-6 pb-6 md:p-6", children: [
        /* @__PURE__ */ u.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ u.jsx(
          Y0,
          {
            events: st,
            eventMetadata: I,
            categoryMappings: Lt,
            onDateClick: Jd,
            onEventClick: It,
            onMonthChange: _n,
            currentDate: p,
            displayMode: C,
            sidebarPosition: P
          }
        ) }),
        /* @__PURE__ */ u.jsx("div", { className: "block md:hidden mobile-calendar", children: /* @__PURE__ */ u.jsx(
          Z0,
          {
            events: st,
            eventMetadata: I,
            categoryMappings: Lt,
            onEventClick: It,
            onMonthChange: _n,
            currentDate: p
          }
        ) })
      ] }),
      r && /* @__PURE__ */ u.jsx(Xn, { value: "week", className: "px-6 pb-6 md:p-6", children: /* @__PURE__ */ u.jsx(
        q0,
        {
          currentDate: p,
          onDateChange: _n,
          events: st,
          eventMetadata: I,
          categoryMappings: Lt,
          onEventClick: It
        }
      ) }),
      o && /* @__PURE__ */ u.jsx(Xn, { value: "day", className: "px-6 pb-6 md:p-6", children: /* @__PURE__ */ u.jsx(
        X0,
        {
          events: st,
          eventMetadata: I,
          categoryMappings: Lt,
          currentDate: p,
          onDateChange: _n,
          onEventClick: It
        }
      ) }),
      /* @__PURE__ */ u.jsxs(Xn, { value: "list", className: "px-6 pb-6 md:p-6", children: [
        /* @__PURE__ */ u.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ u.jsx(
          J0,
          {
            events: st.slice(0, O),
            eventMetadata: I,
            categoryMappings: Lt,
            onEventClick: It,
            onLoadMore: ri,
            hasMore: st.length > O || ce,
            loading: Y,
            showCost: i
          }
        ) }),
        /* @__PURE__ */ u.jsx("div", { className: "block md:hidden", children: /* @__PURE__ */ u.jsx(
          Q0,
          {
            events: st.slice(0, O),
            eventMetadata: I,
            categoryMappings: Lt,
            onEventClick: It,
            onLoadMore: ri,
            hasMore: st.length > O || ce,
            loading: Y,
            showCost: i
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ u.jsx(
      xu,
      {
        event: m,
        eventMetadata: I,
        open: v,
        onOpenChange: b,
        showCost: i
      }
    )
  ] });
}
function tw({
  events: e,
  eventMetadata: t,
  categoryMappings: n = {},
  organizationId: r,
  organizationName: o,
  limit: i,
  showPastEvents: s = !1,
  onEventClick: a
}) {
  const l = (d) => d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), { filteredEvents: c, eventsByDate: f } = U.useMemo(() => {
    let d = e;
    const h = /* @__PURE__ */ new Date();
    (r || o) && (d = d.filter((y) => {
      var g;
      const m = t[y.id];
      return o ? (m == null ? void 0 : m.organization) === o : r ? ((g = m == null ? void 0 : m.organization_id) == null ? void 0 : g.toString()) === r : !0;
    })), s || (d = d.filter((y) => y.startDate >= h)), d.sort((y, m) => y.startDate.getTime() - m.startDate.getTime()), i && i > 0 && (d = d.slice(0, i));
    const p = d.reduce((y, m) => {
      const g = m.startDate.toDateString();
      return y[g] || (y[g] = []), y[g].push(m), y;
    }, {});
    return { filteredEvents: d, eventsByDate: p };
  }, [e, t, r, o, i, s]);
  return c.length === 0 ? /* @__PURE__ */ u.jsxs("div", { className: "text-center py-8 text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ u.jsx(Tn, { className: "mx-auto h-8 w-8 mb-3 opacity-50" }),
    /* @__PURE__ */ u.jsx("h3", { className: "text-base font-medium mb-1", children: "No upcoming events" }),
    /* @__PURE__ */ u.jsx("p", { className: "text-sm", children: o ? `${o} has no upcoming events.` : "No events found for this organization." })
  ] }) : /* @__PURE__ */ u.jsxs("div", { className: "space-y-6", children: [
    o && /* @__PURE__ */ u.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ u.jsxs("h3", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: [
        o,
        " Events"
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
        c.length,
        " upcoming event",
        c.length !== 1 ? "s" : ""
      ] })
    ] }),
    Object.entries(f).map(([d, h]) => {
      const p = new Date(d), y = p.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), m = p.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let g;
      return y ? g = "Today" : m ? g = "Tomorrow" : g = p.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }), /* @__PURE__ */ u.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ u.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-foreground", children: g }),
          /* @__PURE__ */ u.jsx("div", { className: "flex-1 h-px bg-border" }),
          /* @__PURE__ */ u.jsxs("span", { className: "text-xs font-semibold text-gray-900 dark:text-muted-foreground bg-gray-50 dark:bg-muted px-2 py-0.5 rounded-full border border-gray-200 dark:border-border", children: [
            h.length,
            " event",
            h.length > 1 ? "s" : ""
          ] })
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "space-y-2", children: h.map((v) => {
          const b = t[v.id], w = yt(b == null ? void 0 : b.category, n), C = ze(w).replace("bg-", "after:bg-");
          return /* @__PURE__ */ u.jsxs(
            "div",
            {
              role: "button",
              tabIndex: 0,
              "aria-label": `View ${v.title}`,
              onKeyDown: (D) => {
                (D.key === "Enter" || D.key === " ") && (D.preventDefault(), D.stopPropagation(), a == null || a(v));
              },
              className: `bg-card dark:bg-card relative rounded-md p-3 pl-6 text-sm border border-gray-200 dark:border-border shadow-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary hover:bg-muted dark:hover:bg-muted transition-colors ${C}`,
              onClick: () => a == null ? void 0 : a(v),
              children: [
                /* @__PURE__ */ u.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ u.jsxs("div", { className: "flex-grow min-w-0", children: [
                    /* @__PURE__ */ u.jsx("div", { className: "font-medium text-gray-900 dark:text-foreground mb-2", children: v.title }),
                    /* @__PURE__ */ u.jsxs("div", { className: "space-y-1 text-xs text-gray-900 dark:text-foreground", children: [
                      /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ u.jsx(Yt, { className: "h-3 w-3" }),
                        /* @__PURE__ */ u.jsxs("span", { children: [
                          l(v.startDate),
                          " - ",
                          l(v.endDate)
                        ] })
                      ] }),
                      (b == null ? void 0 : b.location) && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ u.jsx(kn, { className: "h-3 w-3" }),
                        /* @__PURE__ */ u.jsx("span", { children: b.location })
                      ] }),
                      !o && (b == null ? void 0 : b.organization) && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ u.jsx(Ir, { className: "h-3 w-3" }),
                        /* @__PURE__ */ u.jsx("span", { children: b.organization })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col items-end gap-2 flex-shrink-0 ml-4", children: [
                    (b == null ? void 0 : b.cost) && /* @__PURE__ */ u.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400", children: b.cost }),
                    (b == null ? void 0 : b.category) && /* @__PURE__ */ u.jsx(qt, { variant: "secondary", size: "sm", className: "text-xs capitalize", children: b.category })
                  ] })
                ] }),
                (b == null ? void 0 : b.registrationRequired) && /* @__PURE__ */ u.jsx("div", { className: "mt-2", children: /* @__PURE__ */ u.jsx(qt, { variant: "outline", size: "sm", children: "Registration Required" }) })
              ]
            },
            v.id
          );
        }) })
      ] }, d);
    })
  ] });
}
function Zd({
  organizationId: e,
  organizationName: t,
  limit: n = 5,
  showPastEvents: r = !1
}) {
  const [o, i] = W(null), [s, a] = W(!1), {
    events: l,
    eventMetadata: c,
    loading: f,
    error: d,
    categoryMappings: h
  } = Hc({
    view: "list",
    // Use list view for organization pages
    organization: e
    // Filter by organization
  }), { categories: p } = Kc(), y = U.useMemo(
    () => Xd(p),
    [p]
  ), m = U.useMemo(() => h && Object.keys(h).length > 0 ? h : y, [h, y]), g = (v) => {
    i(v), a(!0);
  };
  return f ? /* @__PURE__ */ u.jsx("div", { className: "w-full flex items-center justify-center py-8", children: /* @__PURE__ */ u.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ u.jsx(ar, { className: "h-6 w-6 animate-spin mx-auto mb-2" }),
    /* @__PURE__ */ u.jsx("p", { className: "text-gray-600 text-sm", children: "Loading events..." })
  ] }) }) : d ? /* @__PURE__ */ u.jsx("div", { className: "w-full py-8", children: /* @__PURE__ */ u.jsx("div", { className: "max-w-md mx-auto bg-red-50 border border-red-200 rounded-lg p-4", children: /* @__PURE__ */ u.jsxs("p", { className: "text-red-600 text-sm", children: [
    "Error loading events: ",
    d
  ] }) }) }) : /* @__PURE__ */ u.jsxs("div", { className: "unbc-organization-events", children: [
    /* @__PURE__ */ u.jsx(
      tw,
      {
        events: l,
        eventMetadata: c,
        categoryMappings: m,
        organizationId: e,
        organizationName: t,
        limit: n,
        showPastEvents: r,
        onEventClick: g
      }
    ),
    /* @__PURE__ */ u.jsx(
      xu,
      {
        event: o,
        eventMetadata: c,
        open: s,
        onOpenChange: a
      }
    )
  ] });
}
window.renderUNBCCalendar = function(e) {
  const t = document.getElementById(e);
  if (!t) {
    console.error("Calendar container not found:", e);
    return;
  }
  const n = Xo(t), r = t.dataset.view || "month", o = t.dataset.categoryFilter || "all", i = t.dataset.organizationFilter || "all", s = t.dataset.showWeekView !== "false", a = t.dataset.showDayView !== "false", l = t.dataset.showCost !== "false", c = t.dataset.eventSortOrder || "asc", f = t.dataset.monthDisplayMode || "popover", d = t.dataset.monthSidebarPosition || "right";
  n.render(
    /* @__PURE__ */ u.jsx(U.StrictMode, { children: /* @__PURE__ */ u.jsx(
      ew,
      {
        initialView: r,
        initialCategoryFilter: o,
        initialOrganizationFilter: i,
        showWeekView: s,
        showDayView: a,
        showCost: l,
        eventSortOrder: c,
        initialMonthDisplayMode: f,
        initialMonthSidebarPosition: d
      }
    ) })
  );
};
window.renderUNBCEventsList = function(e) {
  const t = document.getElementById(e);
  if (!t) {
    console.error("Events list container not found:", e);
    return;
  }
  const n = Xo(t), r = t.dataset.organizationId || "", o = t.dataset.organizationName || "", i = parseInt(t.dataset.limit) || 5, s = t.dataset.showPast === "true";
  n.render(
    /* @__PURE__ */ u.jsx(U.StrictMode, { children: /* @__PURE__ */ u.jsx(
      Zd,
      {
        organizationId: r,
        organizationName: o,
        limit: i,
        showPastEvents: s
      }
    ) })
  );
};
window.renderUNBCOrganizationEvents = function(e) {
  const t = document.getElementById(e);
  if (!t) {
    console.error("Organization events container not found:", e);
    return;
  }
  const n = Xo(t), r = t.dataset.organizationId || "", o = t.dataset.organizationName || "", i = parseInt(t.dataset.limit) || 5, s = t.dataset.showPast === "true";
  n.render(
    /* @__PURE__ */ u.jsx(U.StrictMode, { children: /* @__PURE__ */ u.jsx(
      Zd,
      {
        organizationId: r,
        organizationName: o,
        limit: i,
        showPastEvents: s
      }
    ) })
  );
};
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('[data-component="calendar"]').forEach((r) => {
    r.id && window.renderUNBCCalendar(r.id);
  }), document.querySelectorAll('[data-component="events-list"]').forEach((r) => {
    r.id && window.renderUNBCEventsList(r.id);
  }), document.querySelectorAll('[data-component="organization-events"]').forEach((r) => {
    r.id && window.renderUNBCOrganizationEvents(r.id);
  });
});
