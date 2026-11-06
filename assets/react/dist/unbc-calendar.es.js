var mf = Object.defineProperty;
var gf = (e, t, n) => t in e ? mf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Gn = (e, t, n) => gf(e, typeof t != "symbol" ? t + "" : t, n);
import * as x from "react";
import z, { useLayoutEffect as hl, useState as H, forwardRef as no, createElement as vr, useEffect as tt, useRef as Oe, useCallback as At, createContext as rn, useId as ro, useContext as Ce, useInsertionEffect as pl, useMemo as jt, Children as yf, isValidElement as vf, Fragment as ml, Component as xf } from "react";
import { createRoot as so } from "react-dom/client";
import * as Ir from "react-dom";
import bf from "react-dom";
var gl = { exports: {} }, Or = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wf = z, Sf = Symbol.for("react.element"), Cf = Symbol.for("react.fragment"), Df = Object.prototype.hasOwnProperty, Tf = wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Pf = { key: !0, ref: !0, __self: !0, __source: !0 };
function yl(e, t, n) {
  var r, s = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Df.call(t, r) && !Pf.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) s[r] === void 0 && (s[r] = t[r]);
  return { $$typeof: Sf, type: e, key: i, ref: o, props: s, _owner: Tf.current };
}
Or.Fragment = Cf;
Or.jsx = yl;
Or.jsxs = yl;
gl.exports = Or;
var u = gl.exports;
function wn(e) {
  return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
function Af(e, t) {
  const n = new Date(t), r = new Date(t);
  return e === "list" ? { start_date: wn(n) } : (e === "month" ? (n.setDate(1), n.setDate(n.getDate() - n.getDay()), r.setMonth(r.getMonth() + 1, 0), r.setDate(r.getDate() + 6 - r.getDay())) : e === "week" && (n.setDate(n.getDate() - n.getDay()), r.setFullYear(n.getFullYear(), n.getMonth(), n.getDate() + 6)), { start_date: wn(n), end_date: wn(r) });
}
function oo(e, t) {
  const n = new Date(t);
  n.setHours(0, 0, 0, 0);
  const r = new Date(n);
  return r.setDate(r.getDate() + 1), e.startDate < r && (e.endDate > n || e.startDate.getTime() === n.getTime());
}
function xr(e, t) {
  const n = new Date(t);
  n.setHours(0, 0, 0, 0);
  const r = new Date(n);
  r.setDate(r.getDate() + 1);
  const s = (a) => a.getHours() + a.getMinutes() / 60, i = e.startDate <= n ? 0 : s(e.startDate), o = e.endDate >= r ? 24 : s(e.endDate);
  return [i, Math.max(i + 0.25, o)];
}
function vl(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (n = vl(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Nf() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++) (e = arguments[n]) && (t = vl(e)) && (r && (r += " "), r += t);
  return r;
}
const io = "-", Ef = (e) => {
  const t = Mf(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (o) => {
      const a = o.split(io);
      return a[0] === "" && a.length !== 1 && a.shift(), xl(a, t) || jf(o);
    },
    getConflictingClassGroupIds: (o, a) => {
      const l = n[o] || [];
      return a && r[o] ? [...l, ...r[o]] : l;
    }
  };
}, xl = (e, t) => {
  var o;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), s = r ? xl(e.slice(1), r) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const i = e.join(io);
  return (o = t.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : o.classGroupId;
}, xi = /^\[(.+)\]$/, jf = (e) => {
  if (xi.test(e)) {
    const t = xi.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Mf = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Rf(Object.entries(e.classGroups), n).forEach(([i, o]) => {
    Ps(o, r, i, t);
  }), r;
}, Ps = (e, t, n, r) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const i = s === "" ? t : bi(t, s);
      i.classGroupId = n;
      return;
    }
    if (typeof s == "function") {
      if (kf(s)) {
        Ps(s(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: n
      });
      return;
    }
    Object.entries(s).forEach(([i, o]) => {
      Ps(o, bi(t, i), n, r);
    });
  });
}, bi = (e, t) => {
  let n = e;
  return t.split(io).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, kf = (e) => e.isThemeGetter, Rf = (e, t) => t ? e.map(([n, r]) => {
  const s = r.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([o, a]) => [t + o, a])) : i);
  return [n, s];
}) : e, Lf = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const s = (i, o) => {
    n.set(i, o), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let o = n.get(i);
      if (o !== void 0)
        return o;
      if ((o = r.get(i)) !== void 0)
        return s(i, o), o;
    },
    set(i, o) {
      n.has(i) ? n.set(i, o) : s(i, o);
    }
  };
}, bl = "!", If = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, s = t[0], i = t.length, o = (a) => {
    const l = [];
    let c = 0, f = 0, d;
    for (let g = 0; g < a.length; g++) {
      let v = a[g];
      if (c === 0) {
        if (v === s && (r || a.slice(g, g + i) === t)) {
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
    const h = l.length === 0 ? a : a.substring(f), p = h.startsWith(bl), y = p ? h.substring(1) : h, m = d && d > f ? d - f : void 0;
    return {
      modifiers: l,
      hasImportantModifier: p,
      baseClassName: y,
      maybePostfixModifierPosition: m
    };
  };
  return n ? (a) => n({
    className: a,
    parseClassName: o
  }) : o;
}, Of = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, Vf = (e) => ({
  cache: Lf(e.cacheSize),
  parseClassName: If(e),
  ...Ef(e)
}), Ff = /\s+/, _f = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: s
  } = t, i = [], o = e.trim().split(Ff);
  let a = "";
  for (let l = o.length - 1; l >= 0; l -= 1) {
    const c = o[l], {
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
    const g = Of(f).join(":"), v = d ? g + bl : g, b = v + m;
    if (i.includes(b))
      continue;
    i.push(b);
    const w = s(m, y);
    for (let S = 0; S < w.length; ++S) {
      const C = w[S];
      i.push(v + C);
    }
    a = c + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function Bf() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = wl(t)) && (r && (r += " "), r += n);
  return r;
}
const wl = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = wl(e[r])) && (n && (n += " "), n += t);
  return n;
};
function $f(e, ...t) {
  let n, r, s, i = o;
  function o(l) {
    const c = t.reduce((f, d) => d(f), e());
    return n = Vf(c), r = n.cache.get, s = n.cache.set, i = a, a(l);
  }
  function a(l) {
    const c = r(l);
    if (c)
      return c;
    const f = _f(l, n);
    return s(l, f), f;
  }
  return function() {
    return i(Bf.apply(null, arguments));
  };
}
const se = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Sl = /^\[(?:([a-z-]+):)?(.+)\]$/i, zf = /^\d+\/\d+$/, Uf = /* @__PURE__ */ new Set(["px", "full", "screen"]), Wf = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Hf = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Kf = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Gf = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Yf = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ze = (e) => Yt(e) || Uf.has(e) || zf.test(e), at = (e) => sn(e, "length", nh), Yt = (e) => !!e && !Number.isNaN(Number(e)), es = (e) => sn(e, "number", Yt), pn = (e) => !!e && Number.isInteger(Number(e)), qf = (e) => e.endsWith("%") && Yt(e.slice(0, -1)), G = (e) => Sl.test(e), lt = (e) => Wf.test(e), Xf = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Zf = (e) => sn(e, Xf, Cl), Jf = (e) => sn(e, "position", Cl), Qf = /* @__PURE__ */ new Set(["image", "url"]), eh = (e) => sn(e, Qf, sh), th = (e) => sn(e, "", rh), mn = () => !0, sn = (e, t, n) => {
  const r = Sl.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, nh = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Hf.test(e) && !Kf.test(e)
), Cl = () => !1, rh = (e) => Gf.test(e), sh = (e) => Yf.test(e), oh = () => {
  const e = se("colors"), t = se("spacing"), n = se("blur"), r = se("brightness"), s = se("borderColor"), i = se("borderRadius"), o = se("borderSpacing"), a = se("borderWidth"), l = se("contrast"), c = se("grayscale"), f = se("hueRotate"), d = se("invert"), h = se("gap"), p = se("gradientColorStops"), y = se("gradientColorStopPositions"), m = se("inset"), g = se("margin"), v = se("opacity"), b = se("padding"), w = se("saturate"), S = se("scale"), C = se("sepia"), D = se("skew"), P = se("space"), T = se("translate"), R = () => ["auto", "contain", "none"], F = () => ["auto", "hidden", "clip", "visible", "scroll"], N = () => ["auto", G, t], j = () => [G, t], L = () => ["", Ze, at], $ = () => ["auto", Yt, G], K = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], I = () => ["solid", "dashed", "dotted", "double", "none"], _ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], O = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], M = () => ["", "0", G], Z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Y = () => [Yt, G];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [mn],
      spacing: [Ze, at],
      blur: ["none", "", lt, G],
      brightness: Y(),
      borderColor: [e],
      borderRadius: ["none", "", "full", lt, G],
      borderSpacing: j(),
      borderWidth: L(),
      contrast: Y(),
      grayscale: M(),
      hueRotate: Y(),
      invert: M(),
      gap: j(),
      gradientColorStops: [e],
      gradientColorStopPositions: [qf, at],
      inset: N(),
      margin: N(),
      opacity: Y(),
      padding: j(),
      saturate: Y(),
      scale: Y(),
      sepia: M(),
      skew: Y(),
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
        aspect: ["auto", "square", "video", G]
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
        columns: [lt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Z()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Z()
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
        object: [...K(), G]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: F()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": F()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": F()
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
        z: ["auto", pn, G]
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
        flex: ["1", "auto", "initial", "none", G]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: M()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: M()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", pn, G]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [mn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", pn, G]
        }, G]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": $()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": $()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [mn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [pn, G]
        }, G]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": $()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": $()
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
        "auto-cols": ["auto", "min", "max", "fr", G]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", G]
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
        justify: ["normal", ...O()]
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
        content: ["normal", ...O(), "baseline"]
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
        "place-content": [...O(), "baseline"]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [G, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [G, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [lt]
        }, lt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [G, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [G, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", lt, at]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", es]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [mn]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", G]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Yt, es]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ze, G]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", G]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", G]
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
        decoration: ["auto", "from-font", Ze, at]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ze, G]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", G]
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
        content: ["none", G]
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
        bg: [...K(), Jf]
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
        bg: ["auto", "cover", "contain", Zf]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, eh]
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
        border: [...I(), "hidden"]
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
        divide: I()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [s]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [s]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [s]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [s]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [s]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [s]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [s]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [s]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [s]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [s]
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
        "outline-offset": [Ze, G]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ze, at]
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
        ring: L()
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
        "ring-offset": [Ze, at]
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
        shadow: ["", "inner", "none", lt, th]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [mn]
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
        "drop-shadow": ["", "none", lt, G]
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
        "border-spacing": [o]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [o]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [o]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", G]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Y()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", G]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Y()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", G]
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
        rotate: [pn, G]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", G]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", G]
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
        "will-change": ["auto", "scroll", "contents", "transform", G]
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
        stroke: [Ze, at, es]
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
}, ih = /* @__PURE__ */ $f(oh);
function de(...e) {
  return ih(Nf(e));
}
function ao({ className: e, ...t }) {
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
function Dl({ className: e, ...t }) {
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: de("px-6", e),
      ...t
    }
  );
}
function ah({ className: e, ...t }) {
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: de("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
const Je = x.forwardRef(
  ({ className: e, variant: t = "default", size: n = "default", ...r }, s) => /* @__PURE__ */ u.jsx(
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
      ref: s,
      ...r
    }
  )
);
Je.displayName = "Button";
function wi(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function J(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), n === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
function lh(e, t) {
  const n = x.createContext(t), r = (i) => {
    const { children: o, ...a } = i, l = x.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ u.jsx(n.Provider, { value: l, children: o });
  };
  r.displayName = e + "Provider";
  function s(i) {
    const o = x.useContext(n);
    if (o) return o;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, s];
}
function on(e, t = []) {
  let n = [];
  function r(i, o) {
    const a = x.createContext(o), l = n.length;
    n = [...n, o];
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
      if (o !== void 0) return o;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [c, f];
  }
  const s = () => {
    const i = n.map((o) => x.createContext(o));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return x.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return s.scopeName = e, [r, ch(s, ...t)];
}
function ch(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(i) {
      const o = r.reduce((a, { useScope: l, scopeName: c }) => {
        const d = l(i)[`__scope${c}`];
        return { ...a, ...d };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Si(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Tl(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((s) => {
      const i = Si(s, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let s = 0; s < r.length; s++) {
          const i = r[s];
          typeof i == "function" ? i() : Si(e[s], null);
        }
      };
  };
}
function fe(...e) {
  return x.useCallback(Tl(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Pn(e) {
  const t = /* @__PURE__ */ uh(e), n = x.forwardRef((r, s) => {
    const { children: i, ...o } = r, a = x.Children.toArray(i), l = a.find(fh);
    if (l) {
      const c = l.props.children, f = a.map((d) => d === l ? x.Children.count(c) > 1 ? x.Children.only(null) : x.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ u.jsx(t, { ...o, ref: s, children: x.isValidElement(c) ? x.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ u.jsx(t, { ...o, ref: s, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function uh(e) {
  const t = x.forwardRef((n, r) => {
    const { children: s, ...i } = n;
    if (x.isValidElement(s)) {
      const o = ph(s), a = hh(i, s.props);
      return s.type !== x.Fragment && (a.ref = r ? Tl(r, o) : o), x.cloneElement(s, a);
    }
    return x.Children.count(s) > 1 ? x.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var dh = Symbol("radix.slottable");
function fh(e) {
  return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === dh;
}
function hh(e, t) {
  const n = { ...t };
  for (const r in t) {
    const s = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? s && i ? n[r] = (...a) => {
      const l = i(...a);
      return s(...a), l;
    } : s && (n[r] = s) : r === "style" ? n[r] = { ...s, ...i } : r === "className" && (n[r] = [s, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function ph(e) {
  var r, s;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Pl(e) {
  const t = e + "CollectionProvider", [n, r] = on(t), [s, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), o = (m) => {
    const { scope: g, children: v } = m, b = z.useRef(null), w = z.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ u.jsx(s, { scope: g, itemMap: w, collectionRef: b, children: v });
  };
  o.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ Pn(a), c = z.forwardRef(
    (m, g) => {
      const { scope: v, children: b } = m, w = i(a, v), S = fe(g, w.collectionRef);
      return /* @__PURE__ */ u.jsx(l, { ref: S, children: b });
    }
  );
  c.displayName = a;
  const f = e + "CollectionItemSlot", d = "data-radix-collection-item", h = /* @__PURE__ */ Pn(f), p = z.forwardRef(
    (m, g) => {
      const { scope: v, children: b, ...w } = m, S = z.useRef(null), C = fe(g, S), D = i(f, v);
      return z.useEffect(() => (D.itemMap.set(S, { ref: S, ...w }), () => void D.itemMap.delete(S))), /* @__PURE__ */ u.jsx(h, { [d]: "", ref: C, children: b });
    }
  );
  p.displayName = f;
  function y(m) {
    const g = i(e + "CollectionConsumer", m);
    return z.useCallback(() => {
      const b = g.collectionRef.current;
      if (!b) return [];
      const w = Array.from(b.querySelectorAll(`[${d}]`));
      return Array.from(g.itemMap.values()).sort(
        (D, P) => w.indexOf(D.ref.current) - w.indexOf(P.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: o, Slot: c, ItemSlot: p },
    y,
    r
  ];
}
var mh = x.createContext(void 0);
function lo(e) {
  const t = x.useContext(mh);
  return e || t || "ltr";
}
var gh = [
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
], ee = gh.reduce((e, t) => {
  const n = /* @__PURE__ */ Pn(`Primitive.${t}`), r = x.forwardRef((s, i) => {
    const { asChild: o, ...a } = s, l = o ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ u.jsx(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function yh(e, t) {
  e && Ir.flushSync(() => e.dispatchEvent(t));
}
function ht(e) {
  const t = x.useRef(e);
  return x.useEffect(() => {
    t.current = e;
  }), x.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function vh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ht(e);
  x.useEffect(() => {
    const r = (s) => {
      s.key === "Escape" && n(s);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var xh = "DismissableLayer", As = "dismissableLayer.update", bh = "dismissableLayer.pointerDownOutside", wh = "dismissableLayer.focusOutside", Ci, Al = x.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), co = x.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: s,
      onFocusOutside: i,
      onInteractOutside: o,
      onDismiss: a,
      ...l
    } = e, c = x.useContext(Al), [f, d] = x.useState(null), h = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = x.useState({}), y = fe(t, (P) => d(P)), m = Array.from(c.layers), [g] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), v = m.indexOf(g), b = f ? m.indexOf(f) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, S = b >= v, C = Dh((P) => {
      const T = P.target, R = [...c.branches].some((F) => F.contains(T));
      !S || R || (s == null || s(P), o == null || o(P), P.defaultPrevented || a == null || a());
    }, h), D = Th((P) => {
      const T = P.target;
      [...c.branches].some((F) => F.contains(T)) || (i == null || i(P), o == null || o(P), P.defaultPrevented || a == null || a());
    }, h);
    return vh((P) => {
      b === c.layers.size - 1 && (r == null || r(P), !P.defaultPrevented && a && (P.preventDefault(), a()));
    }, h), x.useEffect(() => {
      if (f)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Ci = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), Di(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Ci);
        };
    }, [f, h, n, c]), x.useEffect(() => () => {
      f && (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), Di());
    }, [f, c]), x.useEffect(() => {
      const P = () => p({});
      return document.addEventListener(As, P), () => document.removeEventListener(As, P);
    }, []), /* @__PURE__ */ u.jsx(
      ee.div,
      {
        ...l,
        ref: y,
        style: {
          pointerEvents: w ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: J(e.onFocusCapture, D.onFocusCapture),
        onBlurCapture: J(e.onBlurCapture, D.onBlurCapture),
        onPointerDownCapture: J(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
co.displayName = xh;
var Sh = "DismissableLayerBranch", Ch = x.forwardRef((e, t) => {
  const n = x.useContext(Al), r = x.useRef(null), s = fe(t, r);
  return x.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ u.jsx(ee.div, { ...e, ref: s });
});
Ch.displayName = Sh;
function Dh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ht(e), r = x.useRef(!1), s = x.useRef(() => {
  });
  return x.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          Nl(
            bh,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", s.current), s.current = l, t.addEventListener("click", s.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", s.current);
      r.current = !1;
    }, o = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(o), t.removeEventListener("pointerdown", i), t.removeEventListener("click", s.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Th(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ht(e), r = x.useRef(!1);
  return x.useEffect(() => {
    const s = (i) => {
      i.target && !r.current && Nl(wh, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Di() {
  const e = new CustomEvent(As);
  document.dispatchEvent(e);
}
function Nl(e, t, n, { discrete: r }) {
  const s = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && s.addEventListener(e, t, { once: !0 }), r ? yh(s, i) : s.dispatchEvent(i);
}
var ts = 0;
function El() {
  x.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ti()), document.body.insertAdjacentElement("beforeend", e[1] ?? Ti()), ts++, () => {
      ts === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), ts--;
    };
  }, []);
}
function Ti() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ns = "focusScope.autoFocusOnMount", rs = "focusScope.autoFocusOnUnmount", Pi = { bubbles: !1, cancelable: !0 }, Ph = "FocusScope", uo = x.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: i,
    ...o
  } = e, [a, l] = x.useState(null), c = ht(s), f = ht(i), d = x.useRef(null), h = fe(t, (m) => l(m)), p = x.useRef({
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
        a.contains(S) ? d.current = S : ut(d.current, { select: !0 });
      }, g = function(w) {
        if (p.paused || !a) return;
        const S = w.relatedTarget;
        S !== null && (a.contains(S) || ut(d.current, { select: !0 }));
      }, v = function(w) {
        if (document.activeElement === document.body)
          for (const C of w)
            C.removedNodes.length > 0 && ut(a);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", g);
      const b = new MutationObserver(v);
      return a && b.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", g), b.disconnect();
      };
    }
  }, [r, a, p.paused]), x.useEffect(() => {
    if (a) {
      Ni.add(p);
      const m = document.activeElement;
      if (!a.contains(m)) {
        const v = new CustomEvent(ns, Pi);
        a.addEventListener(ns, c), a.dispatchEvent(v), v.defaultPrevented || (Ah(kh(jl(a)), { select: !0 }), document.activeElement === m && ut(a));
      }
      return () => {
        a.removeEventListener(ns, c), setTimeout(() => {
          const v = new CustomEvent(rs, Pi);
          a.addEventListener(rs, f), a.dispatchEvent(v), v.defaultPrevented || ut(m ?? document.body, { select: !0 }), a.removeEventListener(rs, f), Ni.remove(p);
        }, 0);
      };
    }
  }, [a, c, f, p]);
  const y = x.useCallback(
    (m) => {
      if (!n && !r || p.paused) return;
      const g = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, v = document.activeElement;
      if (g && v) {
        const b = m.currentTarget, [w, S] = Nh(b);
        w && S ? !m.shiftKey && v === S ? (m.preventDefault(), n && ut(w, { select: !0 })) : m.shiftKey && v === w && (m.preventDefault(), n && ut(S, { select: !0 })) : v === b && m.preventDefault();
      }
    },
    [n, r, p.paused]
  );
  return /* @__PURE__ */ u.jsx(ee.div, { tabIndex: -1, ...o, ref: h, onKeyDown: y });
});
uo.displayName = Ph;
function Ah(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ut(r, { select: t }), document.activeElement !== n) return;
}
function Nh(e) {
  const t = jl(e), n = Ai(t, e), r = Ai(t.reverse(), e);
  return [n, r];
}
function jl(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const s = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ai(e, t) {
  for (const n of e)
    if (!Eh(n, { upTo: t })) return n;
}
function Eh(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function jh(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ut(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && jh(e) && t && e.select();
  }
}
var Ni = Mh();
function Mh() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Ei(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Ei(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Ei(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function kh(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Te = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {
}, Rh = x[" useId ".trim().toString()] || (() => {
}), Lh = 0;
function ft(e) {
  const [t, n] = x.useState(Rh());
  return Te(() => {
    n((r) => r ?? String(Lh++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const Ih = ["top", "right", "bottom", "left"], pt = Math.min, Pe = Math.max, br = Math.round, Yn = Math.floor, We = (e) => ({
  x: e,
  y: e
}), Oh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Vh = {
  start: "end",
  end: "start"
};
function Ns(e, t, n) {
  return Pe(e, pt(t, n));
}
function nt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function rt(e) {
  return e.split("-")[0];
}
function an(e) {
  return e.split("-")[1];
}
function fo(e) {
  return e === "x" ? "y" : "x";
}
function ho(e) {
  return e === "y" ? "height" : "width";
}
const Fh = /* @__PURE__ */ new Set(["top", "bottom"]);
function ze(e) {
  return Fh.has(rt(e)) ? "y" : "x";
}
function po(e) {
  return fo(ze(e));
}
function _h(e, t, n) {
  n === void 0 && (n = !1);
  const r = an(e), s = po(e), i = ho(s);
  let o = s === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (o = wr(o)), [o, wr(o)];
}
function Bh(e) {
  const t = wr(e);
  return [Es(e), t, Es(t)];
}
function Es(e) {
  return e.replace(/start|end/g, (t) => Vh[t]);
}
const ji = ["left", "right"], Mi = ["right", "left"], $h = ["top", "bottom"], zh = ["bottom", "top"];
function Uh(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Mi : ji : t ? ji : Mi;
    case "left":
    case "right":
      return t ? $h : zh;
    default:
      return [];
  }
}
function Wh(e, t, n, r) {
  const s = an(e);
  let i = Uh(rt(e), n === "start", r);
  return s && (i = i.map((o) => o + "-" + s), t && (i = i.concat(i.map(Es)))), i;
}
function wr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Oh[t]);
}
function Hh(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ml(e) {
  return typeof e != "number" ? Hh(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Sr(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: s
  } = e;
  return {
    width: r,
    height: s,
    top: n,
    left: t,
    right: t + r,
    bottom: n + s,
    x: t,
    y: n
  };
}
function ki(e, t, n) {
  let {
    reference: r,
    floating: s
  } = e;
  const i = ze(t), o = po(t), a = ho(o), l = rt(t), c = i === "y", f = r.x + r.width / 2 - s.width / 2, d = r.y + r.height / 2 - s.height / 2, h = r[a] / 2 - s[a] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: f,
        y: r.y - s.height
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
        x: r.x - s.width,
        y: d
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (an(t)) {
    case "start":
      p[o] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      p[o] += h * (n && c ? -1 : 1);
      break;
  }
  return p;
}
const Kh = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: s = "absolute",
    middleware: i = [],
    platform: o
  } = n, a = i.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let c = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: f,
    y: d
  } = ki(c, r, l), h = r, p = {}, y = 0;
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
      strategy: s,
      middlewareData: p,
      rects: c,
      platform: o,
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
    }, C && y <= 50 && (y++, typeof C == "object" && (C.placement && (h = C.placement), C.rects && (c = C.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : C.rects), {
      x: f,
      y: d
    } = ki(c, h, l)), m = -1);
  }
  return {
    x: f,
    y: d,
    placement: h,
    strategy: s,
    middlewareData: p
  };
};
async function An(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: s,
    platform: i,
    rects: o,
    elements: a,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: d = "floating",
    altBoundary: h = !1,
    padding: p = 0
  } = nt(t, e), y = Ml(p), g = a[h ? d === "floating" ? "reference" : "floating" : d], v = Sr(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(g))) == null || n ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: f,
    strategy: l
  })), b = d === "floating" ? {
    x: r,
    y: s,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, w = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), S = await (i.isElement == null ? void 0 : i.isElement(w)) ? await (i.getScale == null ? void 0 : i.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Sr(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Gh = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: s,
      rects: i,
      platform: o,
      elements: a,
      middlewareData: l
    } = t, {
      element: c,
      padding: f = 0
    } = nt(e, t) || {};
    if (c == null)
      return {};
    const d = Ml(f), h = {
      x: n,
      y: r
    }, p = po(s), y = ho(p), m = await o.getDimensions(c), g = p === "y", v = g ? "top" : "left", b = g ? "bottom" : "right", w = g ? "clientHeight" : "clientWidth", S = i.reference[y] + i.reference[p] - h[p] - i.floating[y], C = h[p] - i.reference[p], D = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
    let P = D ? D[w] : 0;
    (!P || !await (o.isElement == null ? void 0 : o.isElement(D))) && (P = a.floating[w] || i.floating[y]);
    const T = S / 2 - C / 2, R = P / 2 - m[y] / 2 - 1, F = pt(d[v], R), N = pt(d[b], R), j = F, L = P - m[y] - N, $ = P / 2 - m[y] / 2 + T, K = Ns(j, $, L), I = !l.arrow && an(s) != null && $ !== K && i.reference[y] / 2 - ($ < j ? F : N) - m[y] / 2 < 0, _ = I ? $ < j ? $ - j : $ - L : 0;
    return {
      [p]: h[p] + _,
      data: {
        [p]: K,
        centerOffset: $ - K - _,
        ...I && {
          alignmentOffset: _
        }
      },
      reset: I
    };
  }
}), Yh = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: s,
        middlewareData: i,
        rects: o,
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
      } = nt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const v = rt(s), b = ze(a), w = rt(a) === a, S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), C = h || (w || !m ? [wr(a)] : Bh(a)), D = y !== "none";
      !h && D && C.push(...Wh(a, m, y, S));
      const P = [a, ...C], T = await An(t, g), R = [];
      let F = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (f && R.push(T[v]), d) {
        const $ = _h(s, o, S);
        R.push(T[$[0]], T[$[1]]);
      }
      if (F = [...F, {
        placement: s,
        overflows: R
      }], !R.every(($) => $ <= 0)) {
        var N, j;
        const $ = (((N = i.flip) == null ? void 0 : N.index) || 0) + 1, K = P[$];
        if (K && (!(d === "alignment" ? b !== ze(K) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        F.every((O) => ze(O.placement) === b ? O.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: F
            },
            reset: {
              placement: K
            }
          };
        let I = (j = F.filter((_) => _.overflows[0] <= 0).sort((_, O) => _.overflows[1] - O.overflows[1])[0]) == null ? void 0 : j.placement;
        if (!I)
          switch (p) {
            case "bestFit": {
              var L;
              const _ = (L = F.filter((O) => {
                if (D) {
                  const M = ze(O.placement);
                  return M === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((O) => [O.placement, O.overflows.filter((M) => M > 0).reduce((M, Z) => M + Z, 0)]).sort((O, M) => O[1] - M[1])[0]) == null ? void 0 : L[0];
              _ && (I = _);
              break;
            }
            case "initialPlacement":
              I = a;
              break;
          }
        if (s !== I)
          return {
            reset: {
              placement: I
            }
          };
      }
      return {};
    }
  };
};
function Ri(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Li(e) {
  return Ih.some((t) => e[t] >= 0);
}
const qh = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...s
      } = nt(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await An(t, {
            ...s,
            elementContext: "reference"
          }), o = Ri(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: o,
              referenceHidden: Li(o)
            }
          };
        }
        case "escaped": {
          const i = await An(t, {
            ...s,
            altBoundary: !0
          }), o = Ri(i, n.floating);
          return {
            data: {
              escapedOffsets: o,
              escaped: Li(o)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, kl = /* @__PURE__ */ new Set(["left", "top"]);
async function Xh(e, t) {
  const {
    placement: n,
    platform: r,
    elements: s
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)), o = rt(n), a = an(n), l = ze(n) === "y", c = kl.has(o) ? -1 : 1, f = i && l ? -1 : 1, d = nt(t, e);
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
const Zh = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: s,
        y: i,
        placement: o,
        middlewareData: a
      } = t, l = await Xh(t, e);
      return o === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: s + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: o
        }
      };
    }
  };
}, Jh = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: s
      } = t, {
        mainAxis: i = !0,
        crossAxis: o = !1,
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
      } = nt(e, t), c = {
        x: n,
        y: r
      }, f = await An(t, l), d = ze(rt(s)), h = fo(d);
      let p = c[h], y = c[d];
      if (i) {
        const g = h === "y" ? "top" : "left", v = h === "y" ? "bottom" : "right", b = p + f[g], w = p - f[v];
        p = Ns(b, p, w);
      }
      if (o) {
        const g = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", b = y + f[g], w = y - f[v];
        y = Ns(b, y, w);
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
            [d]: o
          }
        }
      };
    }
  };
}, Qh = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: s,
        rects: i,
        middlewareData: o
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = nt(e, t), f = {
        x: n,
        y: r
      }, d = ze(s), h = fo(d);
      let p = f[h], y = f[d];
      const m = nt(a, t), g = typeof m == "number" ? {
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
        const w = h === "y" ? "width" : "height", S = kl.has(rt(s)), C = i.reference[d] - i.floating[w] + (S && ((v = o.offset) == null ? void 0 : v[d]) || 0) + (S ? 0 : g.crossAxis), D = i.reference[d] + i.reference[w] + (S ? 0 : ((b = o.offset) == null ? void 0 : b[d]) || 0) - (S ? g.crossAxis : 0);
        y < C ? y = C : y > D && (y = D);
      }
      return {
        [h]: p,
        [d]: y
      };
    }
  };
}, ep = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: s,
        rects: i,
        platform: o,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...c
      } = nt(e, t), f = await An(t, c), d = rt(s), h = an(s), p = ze(s) === "y", {
        width: y,
        height: m
      } = i.floating;
      let g, v;
      d === "top" || d === "bottom" ? (g = d, v = h === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = d, g = h === "end" ? "top" : "bottom");
      const b = m - f.top - f.bottom, w = y - f.left - f.right, S = pt(m - f[g], b), C = pt(y - f[v], w), D = !t.middlewareData.shift;
      let P = S, T = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = w), (r = t.middlewareData.shift) != null && r.enabled.y && (P = b), D && !h) {
        const F = Pe(f.left, 0), N = Pe(f.right, 0), j = Pe(f.top, 0), L = Pe(f.bottom, 0);
        p ? T = y - 2 * (F !== 0 || N !== 0 ? F + N : Pe(f.left, f.right)) : P = m - 2 * (j !== 0 || L !== 0 ? j + L : Pe(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: T,
        availableHeight: P
      });
      const R = await o.getDimensions(a.floating);
      return y !== R.width || m !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Vr() {
  return typeof window < "u";
}
function ln(e) {
  return Rl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ae(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ye(e) {
  var t;
  return (t = (Rl(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Rl(e) {
  return Vr() ? e instanceof Node || e instanceof Ae(e).Node : !1;
}
function Ve(e) {
  return Vr() ? e instanceof Element || e instanceof Ae(e).Element : !1;
}
function Ge(e) {
  return Vr() ? e instanceof HTMLElement || e instanceof Ae(e).HTMLElement : !1;
}
function Ii(e) {
  return !Vr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ae(e).ShadowRoot;
}
const tp = /* @__PURE__ */ new Set(["inline", "contents"]);
function On(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: s
  } = Fe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !tp.has(s);
}
const np = /* @__PURE__ */ new Set(["table", "td", "th"]);
function rp(e) {
  return np.has(ln(e));
}
const sp = [":popover-open", ":modal"];
function Fr(e) {
  return sp.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const op = ["transform", "translate", "scale", "rotate", "perspective"], ip = ["transform", "translate", "scale", "rotate", "perspective", "filter"], ap = ["paint", "layout", "strict", "content"];
function mo(e) {
  const t = go(), n = Ve(e) ? Fe(e) : e;
  return op.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ip.some((r) => (n.willChange || "").includes(r)) || ap.some((r) => (n.contain || "").includes(r));
}
function lp(e) {
  let t = mt(e);
  for (; Ge(t) && !Zt(t); ) {
    if (mo(t))
      return t;
    if (Fr(t))
      return null;
    t = mt(t);
  }
  return null;
}
function go() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const cp = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Zt(e) {
  return cp.has(ln(e));
}
function Fe(e) {
  return Ae(e).getComputedStyle(e);
}
function _r(e) {
  return Ve(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function mt(e) {
  if (ln(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ii(e) && e.host || // Fallback.
    Ye(e)
  );
  return Ii(t) ? t.host : t;
}
function Ll(e) {
  const t = mt(e);
  return Zt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ge(t) && On(t) ? t : Ll(t);
}
function Nn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const s = Ll(e), i = s === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Ae(s);
  if (i) {
    const a = js(o);
    return t.concat(o, o.visualViewport || [], On(s) ? s : [], a && n ? Nn(a) : []);
  }
  return t.concat(s, Nn(s, [], n));
}
function js(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Il(e) {
  const t = Fe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const s = Ge(e), i = s ? e.offsetWidth : n, o = s ? e.offsetHeight : r, a = br(n) !== i || br(r) !== o;
  return a && (n = i, r = o), {
    width: n,
    height: r,
    $: a
  };
}
function yo(e) {
  return Ve(e) ? e : e.contextElement;
}
function qt(e) {
  const t = yo(e);
  if (!Ge(t))
    return We(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: s,
    $: i
  } = Il(t);
  let o = (i ? br(n.width) : n.width) / r, a = (i ? br(n.height) : n.height) / s;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const up = /* @__PURE__ */ We(0);
function Ol(e) {
  const t = Ae(e);
  return !go() || !t.visualViewport ? up : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function dp(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ae(e) ? !1 : t;
}
function Mt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), i = yo(e);
  let o = We(1);
  t && (r ? Ve(r) && (o = qt(r)) : o = qt(e));
  const a = dp(i, n, r) ? Ol(i) : We(0);
  let l = (s.left + a.x) / o.x, c = (s.top + a.y) / o.y, f = s.width / o.x, d = s.height / o.y;
  if (i) {
    const h = Ae(i), p = r && Ve(r) ? Ae(r) : r;
    let y = h, m = js(y);
    for (; m && r && p !== y; ) {
      const g = qt(m), v = m.getBoundingClientRect(), b = Fe(m), w = v.left + (m.clientLeft + parseFloat(b.paddingLeft)) * g.x, S = v.top + (m.clientTop + parseFloat(b.paddingTop)) * g.y;
      l *= g.x, c *= g.y, f *= g.x, d *= g.y, l += w, c += S, y = Ae(m), m = js(y);
    }
  }
  return Sr({
    width: f,
    height: d,
    x: l,
    y: c
  });
}
function vo(e, t) {
  const n = _r(e).scrollLeft;
  return t ? t.left + n : Mt(Ye(e)).left + n;
}
function Vl(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), s = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    vo(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: s,
    y: i
  };
}
function fp(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: s
  } = e;
  const i = s === "fixed", o = Ye(r), a = t ? Fr(t.floating) : !1;
  if (r === o || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = We(1);
  const f = We(0), d = Ge(r);
  if ((d || !d && !i) && ((ln(r) !== "body" || On(o)) && (l = _r(r)), Ge(r))) {
    const p = Mt(r);
    c = qt(r), f.x = p.x + r.clientLeft, f.y = p.y + r.clientTop;
  }
  const h = o && !d && !i ? Vl(o, l, !0) : We(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + f.x + h.x,
    y: n.y * c.y - l.scrollTop * c.y + f.y + h.y
  };
}
function hp(e) {
  return Array.from(e.getClientRects());
}
function pp(e) {
  const t = Ye(e), n = _r(e), r = e.ownerDocument.body, s = Pe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Pe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + vo(e);
  const a = -n.scrollTop;
  return Fe(r).direction === "rtl" && (o += Pe(t.clientWidth, r.clientWidth) - s), {
    width: s,
    height: i,
    x: o,
    y: a
  };
}
function mp(e, t) {
  const n = Ae(e), r = Ye(e), s = n.visualViewport;
  let i = r.clientWidth, o = r.clientHeight, a = 0, l = 0;
  if (s) {
    i = s.width, o = s.height;
    const c = go();
    (!c || c && t === "fixed") && (a = s.offsetLeft, l = s.offsetTop);
  }
  return {
    width: i,
    height: o,
    x: a,
    y: l
  };
}
const gp = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function yp(e, t) {
  const n = Mt(e, !0, t === "fixed"), r = n.top + e.clientTop, s = n.left + e.clientLeft, i = Ge(e) ? qt(e) : We(1), o = e.clientWidth * i.x, a = e.clientHeight * i.y, l = s * i.x, c = r * i.y;
  return {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function Oi(e, t, n) {
  let r;
  if (t === "viewport")
    r = mp(e, n);
  else if (t === "document")
    r = pp(Ye(e));
  else if (Ve(t))
    r = yp(t, n);
  else {
    const s = Ol(e);
    r = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return Sr(r);
}
function Fl(e, t) {
  const n = mt(e);
  return n === t || !Ve(n) || Zt(n) ? !1 : Fe(n).position === "fixed" || Fl(n, t);
}
function vp(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Nn(e, [], !1).filter((a) => Ve(a) && ln(a) !== "body"), s = null;
  const i = Fe(e).position === "fixed";
  let o = i ? mt(e) : e;
  for (; Ve(o) && !Zt(o); ) {
    const a = Fe(o), l = mo(o);
    !l && a.position === "fixed" && (s = null), (i ? !l && !s : !l && a.position === "static" && !!s && gp.has(s.position) || On(o) && !l && Fl(e, o)) ? r = r.filter((f) => f !== o) : s = a, o = mt(o);
  }
  return t.set(e, r), r;
}
function xp(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: s
  } = e;
  const o = [...n === "clippingAncestors" ? Fr(t) ? [] : vp(t, this._c) : [].concat(n), r], a = o[0], l = o.reduce((c, f) => {
    const d = Oi(t, f, s);
    return c.top = Pe(d.top, c.top), c.right = pt(d.right, c.right), c.bottom = pt(d.bottom, c.bottom), c.left = Pe(d.left, c.left), c;
  }, Oi(t, a, s));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function bp(e) {
  const {
    width: t,
    height: n
  } = Il(e);
  return {
    width: t,
    height: n
  };
}
function wp(e, t, n) {
  const r = Ge(t), s = Ye(t), i = n === "fixed", o = Mt(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = We(0);
  function c() {
    l.x = vo(s);
  }
  if (r || !r && !i)
    if ((ln(t) !== "body" || On(s)) && (a = _r(t)), r) {
      const p = Mt(t, !0, i, t);
      l.x = p.x + t.clientLeft, l.y = p.y + t.clientTop;
    } else s && c();
  i && !r && s && c();
  const f = s && !r && !i ? Vl(s, a) : We(0), d = o.left + a.scrollLeft - l.x - f.x, h = o.top + a.scrollTop - l.y - f.y;
  return {
    x: d,
    y: h,
    width: o.width,
    height: o.height
  };
}
function ss(e) {
  return Fe(e).position === "static";
}
function Vi(e, t) {
  if (!Ge(e) || Fe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ye(e) === n && (n = n.ownerDocument.body), n;
}
function _l(e, t) {
  const n = Ae(e);
  if (Fr(e))
    return n;
  if (!Ge(e)) {
    let s = mt(e);
    for (; s && !Zt(s); ) {
      if (Ve(s) && !ss(s))
        return s;
      s = mt(s);
    }
    return n;
  }
  let r = Vi(e, t);
  for (; r && rp(r) && ss(r); )
    r = Vi(r, t);
  return r && Zt(r) && ss(r) && !mo(r) ? n : r || lp(e) || n;
}
const Sp = async function(e) {
  const t = this.getOffsetParent || _l, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: wp(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Cp(e) {
  return Fe(e).direction === "rtl";
}
const Dp = {
  convertOffsetParentRelativeRectToViewportRelativeRect: fp,
  getDocumentElement: Ye,
  getClippingRect: xp,
  getOffsetParent: _l,
  getElementRects: Sp,
  getClientRects: hp,
  getDimensions: bp,
  getScale: qt,
  isElement: Ve,
  isRTL: Cp
};
function Bl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Tp(e, t) {
  let n = null, r;
  const s = Ye(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const c = e.getBoundingClientRect(), {
      left: f,
      top: d,
      width: h,
      height: p
    } = c;
    if (a || t(), !h || !p)
      return;
    const y = Yn(d), m = Yn(s.clientWidth - (f + h)), g = Yn(s.clientHeight - (d + p)), v = Yn(f), w = {
      rootMargin: -y + "px " + -m + "px " + -g + "px " + -v + "px",
      threshold: Pe(0, pt(1, l)) || 1
    };
    let S = !0;
    function C(D) {
      const P = D[0].intersectionRatio;
      if (P !== l) {
        if (!S)
          return o();
        P ? o(!1, P) : r = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      P === 1 && !Bl(c, e.getBoundingClientRect()) && o(), S = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...w,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, w);
    }
    n.observe(e);
  }
  return o(!0), i;
}
function Pp(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: i = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = yo(e), f = s || i ? [...c ? Nn(c) : [], ...Nn(t)] : [];
  f.forEach((v) => {
    s && v.addEventListener("scroll", n, {
      passive: !0
    }), i && v.addEventListener("resize", n);
  });
  const d = c && a ? Tp(c, n) : null;
  let h = -1, p = null;
  o && (p = new ResizeObserver((v) => {
    let [b] = v;
    b && b.target === c && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var w;
      (w = p) == null || w.observe(t);
    })), n();
  }), c && !l && p.observe(c), p.observe(t));
  let y, m = l ? Mt(e) : null;
  l && g();
  function g() {
    const v = Mt(e);
    m && !Bl(m, v) && n(), m = v, y = requestAnimationFrame(g);
  }
  return n(), () => {
    var v;
    f.forEach((b) => {
      s && b.removeEventListener("scroll", n), i && b.removeEventListener("resize", n);
    }), d == null || d(), (v = p) == null || v.disconnect(), p = null, l && cancelAnimationFrame(y);
  };
}
const Ap = Zh, Np = Jh, Ep = Yh, jp = ep, Mp = qh, Fi = Gh, kp = Qh, Rp = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), s = {
    platform: Dp,
    ...n
  }, i = {
    ...s.platform,
    _c: r
  };
  return Kh(e, t, {
    ...s,
    platform: i
  });
};
var Lp = typeof document < "u", Ip = function() {
}, ur = Lp ? hl : Ip;
function Cr(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Cr(e[r], t[r]))
          return !1;
      return !0;
    }
    if (s = Object.keys(e), n = s.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, s[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = s[r];
      if (!(i === "_owner" && e.$$typeof) && !Cr(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function $l(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function _i(e, t) {
  const n = $l(e);
  return Math.round(t * n) / n;
}
function os(e) {
  const t = x.useRef(e);
  return ur(() => {
    t.current = e;
  }), t;
}
function Op(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: s,
    elements: {
      reference: i,
      floating: o
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
  Cr(h, r) || p(r);
  const [y, m] = x.useState(null), [g, v] = x.useState(null), b = x.useCallback((O) => {
    O !== D.current && (D.current = O, m(O));
  }, []), w = x.useCallback((O) => {
    O !== P.current && (P.current = O, v(O));
  }, []), S = i || y, C = o || g, D = x.useRef(null), P = x.useRef(null), T = x.useRef(f), R = l != null, F = os(l), N = os(s), j = os(c), L = x.useCallback(() => {
    if (!D.current || !P.current)
      return;
    const O = {
      placement: t,
      strategy: n,
      middleware: h
    };
    N.current && (O.platform = N.current), Rp(D.current, P.current, O).then((M) => {
      const Z = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: j.current !== !1
      };
      $.current && !Cr(T.current, Z) && (T.current = Z, Ir.flushSync(() => {
        d(Z);
      }));
    });
  }, [h, t, n, N, j]);
  ur(() => {
    c === !1 && T.current.isPositioned && (T.current.isPositioned = !1, d((O) => ({
      ...O,
      isPositioned: !1
    })));
  }, [c]);
  const $ = x.useRef(!1);
  ur(() => ($.current = !0, () => {
    $.current = !1;
  }), []), ur(() => {
    if (S && (D.current = S), C && (P.current = C), S && C) {
      if (F.current)
        return F.current(S, C, L);
      L();
    }
  }, [S, C, L, F, R]);
  const K = x.useMemo(() => ({
    reference: D,
    floating: P,
    setReference: b,
    setFloating: w
  }), [b, w]), I = x.useMemo(() => ({
    reference: S,
    floating: C
  }), [S, C]), _ = x.useMemo(() => {
    const O = {
      position: n,
      left: 0,
      top: 0
    };
    if (!I.floating)
      return O;
    const M = _i(I.floating, f.x), Z = _i(I.floating, f.y);
    return a ? {
      ...O,
      transform: "translate(" + M + "px, " + Z + "px)",
      ...$l(I.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: M,
      top: Z
    };
  }, [n, a, I.floating, f.x, f.y]);
  return x.useMemo(() => ({
    ...f,
    update: L,
    refs: K,
    elements: I,
    floatingStyles: _
  }), [f, L, K, I, _]);
}
const Vp = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: s
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Fi({
        element: r.current,
        padding: s
      }).fn(n) : {} : r ? Fi({
        element: r,
        padding: s
      }).fn(n) : {};
    }
  };
}, Fp = (e, t) => ({
  ...Ap(e),
  options: [e, t]
}), _p = (e, t) => ({
  ...Np(e),
  options: [e, t]
}), Bp = (e, t) => ({
  ...kp(e),
  options: [e, t]
}), $p = (e, t) => ({
  ...Ep(e),
  options: [e, t]
}), zp = (e, t) => ({
  ...jp(e),
  options: [e, t]
}), Up = (e, t) => ({
  ...Mp(e),
  options: [e, t]
}), Wp = (e, t) => ({
  ...Vp(e),
  options: [e, t]
});
var Hp = "Arrow", zl = x.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: s = 5, ...i } = e;
  return /* @__PURE__ */ u.jsx(
    ee.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ u.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
zl.displayName = Hp;
var Kp = zl;
function Gp(e) {
  const [t, n] = x.useState(void 0);
  return Te(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const i = s[0];
        let o, a;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          o = c.inlineSize, a = c.blockSize;
        } else
          o = e.offsetWidth, a = e.offsetHeight;
        n({ width: o, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var xo = "Popper", [Ul, Wl] = on(xo), [Yp, Hl] = Ul(xo), Kl = (e) => {
  const { __scopePopper: t, children: n } = e, [r, s] = x.useState(null);
  return /* @__PURE__ */ u.jsx(Yp, { scope: t, anchor: r, onAnchorChange: s, children: n });
};
Kl.displayName = xo;
var Gl = "PopperAnchor", Yl = x.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...s } = e, i = Hl(Gl, n), o = x.useRef(null), a = fe(t, o), l = x.useRef(null);
    return x.useEffect(() => {
      const c = l.current;
      l.current = (r == null ? void 0 : r.current) || o.current, c !== l.current && i.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ u.jsx(ee.div, { ...s, ref: a });
  }
);
Yl.displayName = Gl;
var bo = "PopperContent", [qp, Xp] = Ul(bo), ql = x.forwardRef(
  (e, t) => {
    var V, q, re, k, E, B;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: s = 0,
      align: i = "center",
      alignOffset: o = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: f = 0,
      sticky: d = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: p = "optimized",
      onPlaced: y,
      ...m
    } = e, g = Hl(bo, n), [v, b] = x.useState(null), w = fe(t, (Q) => b(Q)), [S, C] = x.useState(null), D = Gp(S), P = (D == null ? void 0 : D.width) ?? 0, T = (D == null ? void 0 : D.height) ?? 0, R = r + (i !== "center" ? "-" + i : ""), F = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, N = Array.isArray(c) ? c : [c], j = N.length > 0, L = {
      padding: F,
      boundary: N.filter(Jp),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: j
    }, { refs: $, floatingStyles: K, placement: I, isPositioned: _, middlewareData: O } = Op({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: R,
      whileElementsMounted: (...Q) => Pp(...Q, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        Fp({ mainAxis: s + T, alignmentAxis: o }),
        l && _p({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? Bp() : void 0,
          ...L
        }),
        l && $p({ ...L }),
        zp({
          ...L,
          apply: ({ elements: Q, rects: X, availableWidth: ge, availableHeight: te }) => {
            const { width: ae, height: Be } = X.reference, qe = Q.floating.style;
            qe.setProperty("--radix-popper-available-width", `${ge}px`), qe.setProperty("--radix-popper-available-height", `${te}px`), qe.setProperty("--radix-popper-anchor-width", `${ae}px`), qe.setProperty("--radix-popper-anchor-height", `${Be}px`);
          }
        }),
        S && Wp({ element: S, padding: a }),
        Qp({ arrowWidth: P, arrowHeight: T }),
        h && Up({ strategy: "referenceHidden", ...L })
      ]
    }), [M, Z] = Jl(I), Y = ht(y);
    Te(() => {
      _ && (Y == null || Y());
    }, [_, Y]);
    const ve = (V = O.arrow) == null ? void 0 : V.x, he = (q = O.arrow) == null ? void 0 : q.y, le = ((re = O.arrow) == null ? void 0 : re.centerOffset) !== 0, [be, ie] = x.useState();
    return Te(() => {
      v && ie(window.getComputedStyle(v).zIndex);
    }, [v]), /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: $.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...K,
          transform: _ ? K.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: be,
          "--radix-popper-transform-origin": [
            (k = O.transformOrigin) == null ? void 0 : k.x,
            (E = O.transformOrigin) == null ? void 0 : E.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((B = O.hide) == null ? void 0 : B.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ u.jsx(
          qp,
          {
            scope: n,
            placedSide: M,
            onArrowChange: C,
            arrowX: ve,
            arrowY: he,
            shouldHideArrow: le,
            children: /* @__PURE__ */ u.jsx(
              ee.div,
              {
                "data-side": M,
                "data-align": Z,
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
ql.displayName = bo;
var Xl = "PopperArrow", Zp = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Zl = x.forwardRef(function(t, n) {
  const { __scopePopper: r, ...s } = t, i = Xp(Xl, r), o = Zp[i.placedSide];
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
          [o]: 0,
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
          Kp,
          {
            ...s,
            ref: n,
            style: {
              ...s.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Zl.displayName = Xl;
function Jp(e) {
  return e !== null;
}
var Qp = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, v, b;
    const { placement: n, rects: r, middlewareData: s } = t, o = ((g = s.arrow) == null ? void 0 : g.centerOffset) !== 0, a = o ? 0 : e.arrowWidth, l = o ? 0 : e.arrowHeight, [c, f] = Jl(n), d = { start: "0%", center: "50%", end: "100%" }[f], h = (((v = s.arrow) == null ? void 0 : v.x) ?? 0) + a / 2, p = (((b = s.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let y = "", m = "";
    return c === "bottom" ? (y = o ? d : `${h}px`, m = `${-l}px`) : c === "top" ? (y = o ? d : `${h}px`, m = `${r.floating.height + l}px`) : c === "right" ? (y = `${-l}px`, m = o ? d : `${p}px`) : c === "left" && (y = `${r.floating.width + l}px`, m = o ? d : `${p}px`), { data: { x: y, y: m } };
  }
});
function Jl(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var em = Kl, tm = Yl, nm = ql, rm = Zl, sm = "Portal", wo = x.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [s, i] = x.useState(!1);
  Te(() => i(!0), []);
  const o = n || s && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return o ? bf.createPortal(/* @__PURE__ */ u.jsx(ee.div, { ...r, ref: t }), o) : null;
});
wo.displayName = sm;
var om = x[" useInsertionEffect ".trim().toString()] || Te;
function En({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [s, i, o] = im({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : s;
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
        const h = am(f) ? f(e) : f;
        h !== e && ((d = o.current) == null || d.call(o, h));
      } else
        i(f);
    },
    [a, e, i, o]
  );
  return [l, c];
}
function im({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = x.useState(e), s = x.useRef(n), i = x.useRef(t);
  return om(() => {
    i.current = t;
  }, [t]), x.useEffect(() => {
    var o;
    s.current !== n && ((o = i.current) == null || o.call(i, n), s.current = n);
  }, [n, s]), [n, r, i];
}
function am(e) {
  return typeof e == "function";
}
function lm(e) {
  const t = x.useRef({ value: e, previous: e });
  return x.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Ql = Object.freeze({
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
}), cm = "VisuallyHidden", um = x.forwardRef(
  (e, t) => /* @__PURE__ */ u.jsx(
    ee.span,
    {
      ...e,
      ref: t,
      style: { ...Ql, ...e.style }
    }
  )
);
um.displayName = cm;
var dm = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Bt = /* @__PURE__ */ new WeakMap(), qn = /* @__PURE__ */ new WeakMap(), Xn = {}, is = 0, ec = function(e) {
  return e && (e.host || ec(e.parentNode));
}, fm = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = ec(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, hm = function(e, t, n, r) {
  var s = fm(t, Array.isArray(e) ? e : [e]);
  Xn[n] || (Xn[n] = /* @__PURE__ */ new WeakMap());
  var i = Xn[n], o = [], a = /* @__PURE__ */ new Set(), l = new Set(s), c = function(d) {
    !d || a.has(d) || (a.add(d), c(d.parentNode));
  };
  s.forEach(c);
  var f = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(h) {
      if (a.has(h))
        f(h);
      else
        try {
          var p = h.getAttribute(r), y = p !== null && p !== "false", m = (Bt.get(h) || 0) + 1, g = (i.get(h) || 0) + 1;
          Bt.set(h, m), i.set(h, g), o.push(h), m === 1 && y && qn.set(h, !0), g === 1 && h.setAttribute(n, "true"), y || h.setAttribute(r, "true");
        } catch (v) {
          console.error("aria-hidden: cannot operate on ", h, v);
        }
    });
  };
  return f(t), a.clear(), is++, function() {
    o.forEach(function(d) {
      var h = Bt.get(d) - 1, p = i.get(d) - 1;
      Bt.set(d, h), i.set(d, p), h || (qn.has(d) || d.removeAttribute(r), qn.delete(d)), p || d.removeAttribute(n);
    }), is--, is || (Bt = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap(), qn = /* @__PURE__ */ new WeakMap(), Xn = {});
  };
}, tc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), s = dm(e);
  return s ? (r.push.apply(r, Array.from(s.querySelectorAll("[aria-live], script"))), hm(r, s, n, "aria-hidden")) : function() {
    return null;
  };
}, $e = function() {
  return $e = Object.assign || function(t) {
    for (var n, r = 1, s = arguments.length; r < s; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, $e.apply(this, arguments);
};
function nc(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
      t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
  return n;
}
function pm(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, s = t.length, i; r < s; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var dr = "right-scroll-bar-position", fr = "width-before-scroll-bar", mm = "with-scroll-bars-hidden", gm = "--removed-body-scroll-bar-size";
function as(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ym(e, t) {
  var n = H(function() {
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
          var s = n.value;
          s !== r && (n.value = r, n.callback(r, s));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var vm = typeof window < "u" ? x.useLayoutEffect : x.useEffect, Bi = /* @__PURE__ */ new WeakMap();
function xm(e, t) {
  var n = ym(null, function(r) {
    return e.forEach(function(s) {
      return as(s, r);
    });
  });
  return vm(function() {
    var r = Bi.get(n);
    if (r) {
      var s = new Set(r), i = new Set(e), o = n.current;
      s.forEach(function(a) {
        i.has(a) || as(a, null);
      }), i.forEach(function(a) {
        s.has(a) || as(a, o);
      });
    }
    Bi.set(n, e);
  }, [e]), n;
}
function bm(e) {
  return e;
}
function wm(e, t) {
  t === void 0 && (t = bm);
  var n = [], r = !1, s = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var o = t(i, r);
      return n.push(o), function() {
        n = n.filter(function(a) {
          return a !== o;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var o = n;
        n = [], o.forEach(i);
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
      var o = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(i), o = n;
      }
      var l = function() {
        var f = o;
        o = [], f.forEach(i);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(f) {
          o.push(f), c();
        },
        filter: function(f) {
          return o = o.filter(f), n;
        }
      };
    }
  };
  return s;
}
function Sm(e) {
  e === void 0 && (e = {});
  var t = wm(null);
  return t.options = $e({ async: !0, ssr: !1 }, e), t;
}
var rc = function(e) {
  var t = e.sideCar, n = nc(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return x.createElement(r, $e({}, n));
};
rc.isSideCarExport = !0;
function Cm(e, t) {
  return e.useMedium(t), rc;
}
var sc = Sm(), ls = function() {
}, Br = x.forwardRef(function(e, t) {
  var n = x.useRef(null), r = x.useState({
    onScrollCapture: ls,
    onWheelCapture: ls,
    onTouchMoveCapture: ls
  }), s = r[0], i = r[1], o = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, f = e.enabled, d = e.shards, h = e.sideCar, p = e.noRelative, y = e.noIsolation, m = e.inert, g = e.allowPinchZoom, v = e.as, b = v === void 0 ? "div" : v, w = e.gapMode, S = nc(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = h, D = xm([n, t]), P = $e($e({}, S), s);
  return x.createElement(
    x.Fragment,
    null,
    f && x.createElement(C, { sideCar: sc, removeScrollBar: c, shards: d, noRelative: p, noIsolation: y, inert: m, setCallbacks: i, allowPinchZoom: !!g, lockRef: n, gapMode: w }),
    o ? x.cloneElement(x.Children.only(a), $e($e({}, P), { ref: D })) : x.createElement(b, $e({}, P, { className: l, ref: D }), a)
  );
});
Br.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Br.classNames = {
  fullWidth: fr,
  zeroRight: dr
};
var Dm = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Tm() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Dm();
  return t && e.setAttribute("nonce", t), e;
}
function Pm(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Am(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Nm = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Tm()) && (Pm(t, n), Am(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Em = function() {
  var e = Nm();
  return function(t, n) {
    x.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, oc = function() {
  var e = Em(), t = function(n) {
    var r = n.styles, s = n.dynamic;
    return e(r, s), null;
  };
  return t;
}, jm = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, cs = function(e) {
  return parseInt(e || "", 10) || 0;
}, Mm = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [cs(n), cs(r), cs(s)];
}, km = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return jm;
  var t = Mm(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Rm = oc(), Xt = "data-scroll-locked", Lm = function(e, t, n, r) {
  var s = e.left, i = e.top, o = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(mm, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Xt, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(o, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(dr, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(fr, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(dr, " .").concat(dr, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(fr, " .").concat(fr, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Xt, `] {
    `).concat(gm, ": ").concat(a, `px;
  }
`);
}, $i = function() {
  var e = parseInt(document.body.getAttribute(Xt) || "0", 10);
  return isFinite(e) ? e : 0;
}, Im = function() {
  x.useEffect(function() {
    return document.body.setAttribute(Xt, ($i() + 1).toString()), function() {
      var e = $i() - 1;
      e <= 0 ? document.body.removeAttribute(Xt) : document.body.setAttribute(Xt, e.toString());
    };
  }, []);
}, Om = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, s = r === void 0 ? "margin" : r;
  Im();
  var i = x.useMemo(function() {
    return km(s);
  }, [s]);
  return x.createElement(Rm, { styles: Lm(i, !t, s, n ? "" : "!important") });
}, Ms = !1;
if (typeof window < "u")
  try {
    var Zn = Object.defineProperty({}, "passive", {
      get: function() {
        return Ms = !0, !0;
      }
    });
    window.addEventListener("test", Zn, Zn), window.removeEventListener("test", Zn, Zn);
  } catch {
    Ms = !1;
  }
var $t = Ms ? { passive: !1 } : !1, Vm = function(e) {
  return e.tagName === "TEXTAREA";
}, ic = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Vm(e) && n[t] === "visible")
  );
}, Fm = function(e) {
  return ic(e, "overflowY");
}, _m = function(e) {
  return ic(e, "overflowX");
}, zi = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var s = ac(e, r);
    if (s) {
      var i = lc(e, r), o = i[1], a = i[2];
      if (o > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Bm = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, $m = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, ac = function(e, t) {
  return e === "v" ? Fm(t) : _m(t);
}, lc = function(e, t) {
  return e === "v" ? Bm(t) : $m(t);
}, zm = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Um = function(e, t, n, r, s) {
  var i = zm(e, window.getComputedStyle(t).direction), o = i * r, a = n.target, l = t.contains(a), c = !1, f = o > 0, d = 0, h = 0;
  do {
    if (!a)
      break;
    var p = lc(e, a), y = p[0], m = p[1], g = p[2], v = m - g - i * y;
    (y || v) && ac(e, a) && (d += v, h += y);
    var b = a.parentNode;
    a = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (f && Math.abs(d) < 1 || !f && Math.abs(h) < 1) && (c = !0), c;
}, Jn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ui = function(e) {
  return [e.deltaX, e.deltaY];
}, Wi = function(e) {
  return e && "current" in e ? e.current : e;
}, Wm = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Hm = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Km = 0, zt = [];
function Gm(e) {
  var t = x.useRef([]), n = x.useRef([0, 0]), r = x.useRef(), s = x.useState(Km++)[0], i = x.useState(oc)[0], o = x.useRef(e);
  x.useEffect(function() {
    o.current = e;
  }, [e]), x.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var m = pm([e.lockRef.current], (e.shards || []).map(Wi), !0).filter(Boolean);
      return m.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), m.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = x.useCallback(function(m, g) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !o.current.allowPinchZoom;
    var v = Jn(m), b = n.current, w = "deltaX" in m ? m.deltaX : b[0] - v[0], S = "deltaY" in m ? m.deltaY : b[1] - v[1], C, D = m.target, P = Math.abs(w) > Math.abs(S) ? "h" : "v";
    if ("touches" in m && P === "h" && D.type === "range")
      return !1;
    var T = zi(P, D);
    if (!T)
      return !0;
    if (T ? C = P : (C = P === "v" ? "h" : "v", T = zi(P, D)), !T)
      return !1;
    if (!r.current && "changedTouches" in m && (w || S) && (r.current = C), !C)
      return !0;
    var R = r.current || C;
    return Um(R, g, m, R === "h" ? w : S);
  }, []), l = x.useCallback(function(m) {
    var g = m;
    if (!(!zt.length || zt[zt.length - 1] !== i)) {
      var v = "deltaY" in g ? Ui(g) : Jn(g), b = t.current.filter(function(C) {
        return C.name === g.type && (C.target === g.target || g.target === C.shadowParent) && Wm(C.delta, v);
      })[0];
      if (b && b.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!b) {
        var w = (o.current.shards || []).map(Wi).filter(Boolean).filter(function(C) {
          return C.contains(g.target);
        }), S = w.length > 0 ? a(g, w[0]) : !o.current.noIsolation;
        S && g.cancelable && g.preventDefault();
      }
    }
  }, []), c = x.useCallback(function(m, g, v, b) {
    var w = { name: m, delta: g, target: v, should: b, shadowParent: Ym(v) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== w;
      });
    }, 1);
  }, []), f = x.useCallback(function(m) {
    n.current = Jn(m), r.current = void 0;
  }, []), d = x.useCallback(function(m) {
    c(m.type, Ui(m), m.target, a(m, e.lockRef.current));
  }, []), h = x.useCallback(function(m) {
    c(m.type, Jn(m), m.target, a(m, e.lockRef.current));
  }, []);
  x.useEffect(function() {
    return zt.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", l, $t), document.addEventListener("touchmove", l, $t), document.addEventListener("touchstart", f, $t), function() {
      zt = zt.filter(function(m) {
        return m !== i;
      }), document.removeEventListener("wheel", l, $t), document.removeEventListener("touchmove", l, $t), document.removeEventListener("touchstart", f, $t);
    };
  }, []);
  var p = e.removeScrollBar, y = e.inert;
  return x.createElement(
    x.Fragment,
    null,
    y ? x.createElement(i, { styles: Hm(s) }) : null,
    p ? x.createElement(Om, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Ym(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const qm = Cm(sc, Gm);
var So = x.forwardRef(function(e, t) {
  return x.createElement(Br, $e({}, e, { ref: t, sideCar: qm }));
});
So.classNames = Br.classNames;
var Xm = [" ", "Enter", "ArrowUp", "ArrowDown"], Zm = [" ", "Enter"], kt = "Select", [$r, zr, Jm] = Pl(kt), [cn, Pw] = on(kt, [
  Jm,
  Wl
]), Ur = Wl(), [Qm, xt] = cn(kt), [eg, tg] = cn(kt), cc = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: s,
    onOpenChange: i,
    value: o,
    defaultValue: a,
    onValueChange: l,
    dir: c,
    name: f,
    autoComplete: d,
    disabled: h,
    required: p,
    form: y
  } = e, m = Ur(t), [g, v] = x.useState(null), [b, w] = x.useState(null), [S, C] = x.useState(!1), D = lo(c), [P, T] = En({
    prop: r,
    defaultProp: s ?? !1,
    onChange: i,
    caller: kt
  }), [R, F] = En({
    prop: o,
    defaultProp: a,
    onChange: l,
    caller: kt
  }), N = x.useRef(null), j = g ? y || !!g.closest("form") : !0, [L, $] = x.useState(/* @__PURE__ */ new Set()), K = Array.from(L).map((I) => I.props.value).join(";");
  return /* @__PURE__ */ u.jsx(em, { ...m, children: /* @__PURE__ */ u.jsxs(
    Qm,
    {
      required: p,
      scope: t,
      trigger: g,
      onTriggerChange: v,
      valueNode: b,
      onValueNodeChange: w,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: C,
      contentId: ft(),
      value: R,
      onValueChange: F,
      open: P,
      onOpenChange: T,
      dir: D,
      triggerPointerDownPosRef: N,
      disabled: h,
      children: [
        /* @__PURE__ */ u.jsx($r.Provider, { scope: t, children: /* @__PURE__ */ u.jsx(
          eg,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: x.useCallback((I) => {
              $((_) => new Set(_).add(I));
            }, []),
            onNativeOptionRemove: x.useCallback((I) => {
              $((_) => {
                const O = new Set(_);
                return O.delete(I), O;
              });
            }, []),
            children: n
          }
        ) }),
        j ? /* @__PURE__ */ u.jsxs(
          Mc,
          {
            "aria-hidden": !0,
            required: p,
            tabIndex: -1,
            name: f,
            autoComplete: d,
            value: R,
            onChange: (I) => F(I.target.value),
            disabled: h,
            form: y,
            children: [
              R === void 0 ? /* @__PURE__ */ u.jsx("option", { value: "" }) : null,
              Array.from(L)
            ]
          },
          K
        ) : null
      ]
    }
  ) });
};
cc.displayName = kt;
var uc = "SelectTrigger", dc = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...s } = e, i = Ur(n), o = xt(uc, n), a = o.disabled || r, l = fe(t, o.onTriggerChange), c = zr(n), f = x.useRef("touch"), [d, h, p] = Rc((m) => {
      const g = c().filter((w) => !w.disabled), v = g.find((w) => w.value === o.value), b = Lc(g, m, v);
      b !== void 0 && o.onValueChange(b.value);
    }), y = (m) => {
      a || (o.onOpenChange(!0), p()), m && (o.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      });
    };
    return /* @__PURE__ */ u.jsx(tm, { asChild: !0, ...i, children: /* @__PURE__ */ u.jsx(
      ee.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": o.contentId,
        "aria-expanded": o.open,
        "aria-required": o.required,
        "aria-autocomplete": "none",
        dir: o.dir,
        "data-state": o.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": kc(o.value) ? "" : void 0,
        ...s,
        ref: l,
        onClick: J(s.onClick, (m) => {
          m.currentTarget.focus(), f.current !== "mouse" && y(m);
        }),
        onPointerDown: J(s.onPointerDown, (m) => {
          f.current = m.pointerType;
          const g = m.target;
          g.hasPointerCapture(m.pointerId) && g.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && m.pointerType === "mouse" && (y(m), m.preventDefault());
        }),
        onKeyDown: J(s.onKeyDown, (m) => {
          const g = d.current !== "";
          !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && h(m.key), !(g && m.key === " ") && Xm.includes(m.key) && (y(), m.preventDefault());
        })
      }
    ) });
  }
);
dc.displayName = uc;
var fc = "SelectValue", hc = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: s, children: i, placeholder: o = "", ...a } = e, l = xt(fc, n), { onValueNodeHasChildrenChange: c } = l, f = i !== void 0, d = fe(t, l.onValueNodeChange);
    return Te(() => {
      c(f);
    }, [c, f]), /* @__PURE__ */ u.jsx(
      ee.span,
      {
        ...a,
        ref: d,
        style: { pointerEvents: "none" },
        children: kc(l.value) ? /* @__PURE__ */ u.jsx(u.Fragment, { children: o }) : i
      }
    );
  }
);
hc.displayName = fc;
var ng = "SelectIcon", pc = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...s } = e;
    return /* @__PURE__ */ u.jsx(ee.span, { "aria-hidden": !0, ...s, ref: t, children: r || "▼" });
  }
);
pc.displayName = ng;
var rg = "SelectPortal", mc = (e) => /* @__PURE__ */ u.jsx(wo, { asChild: !0, ...e });
mc.displayName = rg;
var Rt = "SelectContent", gc = x.forwardRef(
  (e, t) => {
    const n = xt(Rt, e.__scopeSelect), [r, s] = x.useState();
    if (Te(() => {
      s(new DocumentFragment());
    }, []), !n.open) {
      const i = r;
      return i ? Ir.createPortal(
        /* @__PURE__ */ u.jsx(yc, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx($r.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ u.jsx(vc, { ...e, ref: t });
  }
);
gc.displayName = Rt;
var Re = 10, [yc, bt] = cn(Rt), sg = "SelectContentImpl", og = /* @__PURE__ */ Pn("SelectContent.RemoveScroll"), vc = x.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: s,
      onEscapeKeyDown: i,
      onPointerDownOutside: o,
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
    } = e, b = xt(Rt, n), [w, S] = x.useState(null), [C, D] = x.useState(null), P = fe(t, (V) => S(V)), [T, R] = x.useState(null), [F, N] = x.useState(
      null
    ), j = zr(n), [L, $] = x.useState(!1), K = x.useRef(!1);
    x.useEffect(() => {
      if (w) return tc(w);
    }, [w]), El();
    const I = x.useCallback(
      (V) => {
        const [q, ...re] = j().map((B) => B.ref.current), [k] = re.slice(-1), E = document.activeElement;
        for (const B of V)
          if (B === E || (B == null || B.scrollIntoView({ block: "nearest" }), B === q && C && (C.scrollTop = 0), B === k && C && (C.scrollTop = C.scrollHeight), B == null || B.focus(), document.activeElement !== E)) return;
      },
      [j, C]
    ), _ = x.useCallback(
      () => I([T, w]),
      [I, T, w]
    );
    x.useEffect(() => {
      L && _();
    }, [L, _]);
    const { onOpenChange: O, triggerPointerDownPosRef: M } = b;
    x.useEffect(() => {
      if (w) {
        let V = { x: 0, y: 0 };
        const q = (k) => {
          var E, B;
          V = {
            x: Math.abs(Math.round(k.pageX) - (((E = M.current) == null ? void 0 : E.x) ?? 0)),
            y: Math.abs(Math.round(k.pageY) - (((B = M.current) == null ? void 0 : B.y) ?? 0))
          };
        }, re = (k) => {
          V.x <= 10 && V.y <= 10 ? k.preventDefault() : w.contains(k.target) || O(!1), document.removeEventListener("pointermove", q), M.current = null;
        };
        return M.current !== null && (document.addEventListener("pointermove", q), document.addEventListener("pointerup", re, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", q), document.removeEventListener("pointerup", re, { capture: !0 });
        };
      }
    }, [w, O, M]), x.useEffect(() => {
      const V = () => O(!1);
      return window.addEventListener("blur", V), window.addEventListener("resize", V), () => {
        window.removeEventListener("blur", V), window.removeEventListener("resize", V);
      };
    }, [O]);
    const [Z, Y] = Rc((V) => {
      const q = j().filter((E) => !E.disabled), re = q.find((E) => E.ref.current === document.activeElement), k = Lc(q, V, re);
      k && setTimeout(() => k.ref.current.focus());
    }), ve = x.useCallback(
      (V, q, re) => {
        const k = !K.current && !re;
        (b.value !== void 0 && b.value === q || k) && (R(V), k && (K.current = !0));
      },
      [b.value]
    ), he = x.useCallback(() => w == null ? void 0 : w.focus(), [w]), le = x.useCallback(
      (V, q, re) => {
        const k = !K.current && !re;
        (b.value !== void 0 && b.value === q || k) && N(V);
      },
      [b.value]
    ), be = r === "popper" ? ks : xc, ie = be === ks ? {
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
      yc,
      {
        scope: n,
        content: w,
        viewport: C,
        onViewportChange: D,
        itemRefCallback: ve,
        selectedItem: T,
        onItemLeave: he,
        itemTextRefCallback: le,
        focusSelectedItem: _,
        selectedItemText: F,
        position: r,
        isPositioned: L,
        searchRef: Z,
        children: /* @__PURE__ */ u.jsx(So, { as: og, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
          uo,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (V) => {
              V.preventDefault();
            },
            onUnmountAutoFocus: J(s, (V) => {
              var q;
              (q = b.trigger) == null || q.focus({ preventScroll: !0 }), V.preventDefault();
            }),
            children: /* @__PURE__ */ u.jsx(
              co,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: o,
                onFocusOutside: (V) => V.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ u.jsx(
                  be,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (V) => V.preventDefault(),
                    ...v,
                    ...ie,
                    onPlaced: () => $(!0),
                    ref: P,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...v.style
                    },
                    onKeyDown: J(v.onKeyDown, (V) => {
                      const q = V.ctrlKey || V.altKey || V.metaKey;
                      if (V.key === "Tab" && V.preventDefault(), !q && V.key.length === 1 && Y(V.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(V.key)) {
                        let k = j().filter((E) => !E.disabled).map((E) => E.ref.current);
                        if (["ArrowUp", "End"].includes(V.key) && (k = k.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(V.key)) {
                          const E = V.target, B = k.indexOf(E);
                          k = k.slice(B + 1);
                        }
                        setTimeout(() => I(k)), V.preventDefault();
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
vc.displayName = sg;
var ig = "SelectItemAlignedPosition", xc = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...s } = e, i = xt(Rt, n), o = bt(Rt, n), [a, l] = x.useState(null), [c, f] = x.useState(null), d = fe(t, (P) => f(P)), h = zr(n), p = x.useRef(!1), y = x.useRef(!0), { viewport: m, selectedItem: g, selectedItemText: v, focusSelectedItem: b } = o, w = x.useCallback(() => {
    if (i.trigger && i.valueNode && a && c && m && g && v) {
      const P = i.trigger.getBoundingClientRect(), T = c.getBoundingClientRect(), R = i.valueNode.getBoundingClientRect(), F = v.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const E = F.left - T.left, B = R.left - E, Q = P.left - B, X = P.width + Q, ge = Math.max(X, T.width), te = window.innerWidth - Re, ae = wi(B, [
          Re,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Re, te - ge)
        ]);
        a.style.minWidth = X + "px", a.style.left = ae + "px";
      } else {
        const E = T.right - F.right, B = window.innerWidth - R.right - E, Q = window.innerWidth - P.right - B, X = P.width + Q, ge = Math.max(X, T.width), te = window.innerWidth - Re, ae = wi(B, [
          Re,
          Math.max(Re, te - ge)
        ]);
        a.style.minWidth = X + "px", a.style.right = ae + "px";
      }
      const N = h(), j = window.innerHeight - Re * 2, L = m.scrollHeight, $ = window.getComputedStyle(c), K = parseInt($.borderTopWidth, 10), I = parseInt($.paddingTop, 10), _ = parseInt($.borderBottomWidth, 10), O = parseInt($.paddingBottom, 10), M = K + I + L + O + _, Z = Math.min(g.offsetHeight * 5, M), Y = window.getComputedStyle(m), ve = parseInt(Y.paddingTop, 10), he = parseInt(Y.paddingBottom, 10), le = P.top + P.height / 2 - Re, be = j - le, ie = g.offsetHeight / 2, V = g.offsetTop + ie, q = K + I + V, re = M - q;
      if (q <= le) {
        const E = N.length > 0 && g === N[N.length - 1].ref.current;
        a.style.bottom = "0px";
        const B = c.clientHeight - m.offsetTop - m.offsetHeight, Q = Math.max(
          be,
          ie + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (E ? he : 0) + B + _
        ), X = q + Q;
        a.style.height = X + "px";
      } else {
        const E = N.length > 0 && g === N[0].ref.current;
        a.style.top = "0px";
        const Q = Math.max(
          le,
          K + m.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (E ? ve : 0) + ie
        ) + re;
        a.style.height = Q + "px", m.scrollTop = q - le + m.offsetTop;
      }
      a.style.margin = `${Re}px 0`, a.style.minHeight = Z + "px", a.style.maxHeight = j + "px", r == null || r(), requestAnimationFrame(() => p.current = !0);
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
  Te(() => w(), [w]);
  const [S, C] = x.useState();
  Te(() => {
    c && C(window.getComputedStyle(c).zIndex);
  }, [c]);
  const D = x.useCallback(
    (P) => {
      P && y.current === !0 && (w(), b == null || b(), y.current = !1);
    },
    [w, b]
  );
  return /* @__PURE__ */ u.jsx(
    lg,
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
            ee.div,
            {
              ...s,
              ref: d,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...s.style
              }
            }
          )
        }
      )
    }
  );
});
xc.displayName = ig;
var ag = "SelectPopperPosition", ks = x.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: s = Re,
    ...i
  } = e, o = Ur(n);
  return /* @__PURE__ */ u.jsx(
    nm,
    {
      ...o,
      ...i,
      ref: t,
      align: r,
      collisionPadding: s,
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
ks.displayName = ag;
var [lg, Co] = cn(Rt, {}), Rs = "SelectViewport", bc = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...s } = e, i = bt(Rs, n), o = Co(Rs, n), a = fe(t, i.onViewportChange), l = x.useRef(0);
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
      /* @__PURE__ */ u.jsx($r.Slot, { scope: n, children: /* @__PURE__ */ u.jsx(
        ee.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...s,
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
            ...s.style
          },
          onScroll: J(s.onScroll, (c) => {
            const f = c.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: h } = o;
            if (h != null && h.current && d) {
              const p = Math.abs(l.current - f.scrollTop);
              if (p > 0) {
                const y = window.innerHeight - Re * 2, m = parseFloat(d.style.minHeight), g = parseFloat(d.style.height), v = Math.max(m, g);
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
bc.displayName = Rs;
var wc = "SelectGroup", [cg, ug] = cn(wc), dg = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, s = ft();
    return /* @__PURE__ */ u.jsx(cg, { scope: n, id: s, children: /* @__PURE__ */ u.jsx(ee.div, { role: "group", "aria-labelledby": s, ...r, ref: t }) });
  }
);
dg.displayName = wc;
var Sc = "SelectLabel", fg = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, s = ug(Sc, n);
    return /* @__PURE__ */ u.jsx(ee.div, { id: s.id, ...r, ref: t });
  }
);
fg.displayName = Sc;
var Dr = "SelectItem", [hg, Cc] = cn(Dr), Dc = x.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: s = !1,
      textValue: i,
      ...o
    } = e, a = xt(Dr, n), l = bt(Dr, n), c = a.value === r, [f, d] = x.useState(i ?? ""), [h, p] = x.useState(!1), y = fe(
      t,
      (b) => {
        var w;
        return (w = l.itemRefCallback) == null ? void 0 : w.call(l, b, r, s);
      }
    ), m = ft(), g = x.useRef("touch"), v = () => {
      s || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ u.jsx(
      hg,
      {
        scope: n,
        value: r,
        disabled: s,
        textId: m,
        isSelected: c,
        onItemTextChange: x.useCallback((b) => {
          d((w) => w || ((b == null ? void 0 : b.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ u.jsx(
          $r.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: s,
            textValue: f,
            children: /* @__PURE__ */ u.jsx(
              ee.div,
              {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": c && h,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": s || void 0,
                "data-disabled": s ? "" : void 0,
                tabIndex: s ? void 0 : -1,
                ...o,
                ref: y,
                onFocus: J(o.onFocus, () => p(!0)),
                onBlur: J(o.onBlur, () => p(!1)),
                onClick: J(o.onClick, () => {
                  g.current !== "mouse" && v();
                }),
                onPointerUp: J(o.onPointerUp, () => {
                  g.current === "mouse" && v();
                }),
                onPointerDown: J(o.onPointerDown, (b) => {
                  g.current = b.pointerType;
                }),
                onPointerMove: J(o.onPointerMove, (b) => {
                  var w;
                  g.current = b.pointerType, s ? (w = l.onItemLeave) == null || w.call(l) : g.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: J(o.onPointerLeave, (b) => {
                  var w;
                  b.currentTarget === document.activeElement && ((w = l.onItemLeave) == null || w.call(l));
                }),
                onKeyDown: J(o.onKeyDown, (b) => {
                  var S;
                  ((S = l.searchRef) == null ? void 0 : S.current) !== "" && b.key === " " || (Zm.includes(b.key) && v(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Dc.displayName = Dr;
var yn = "SelectItemText", Tc = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: s, ...i } = e, o = xt(yn, n), a = bt(yn, n), l = Cc(yn, n), c = tg(yn, n), [f, d] = x.useState(null), h = fe(
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
    return Te(() => (m(y), () => g(y)), [m, g, y]), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(ee.span, { id: l.textId, ...i, ref: h }),
      l.isSelected && o.valueNode && !o.valueNodeHasChildren ? Ir.createPortal(i.children, o.valueNode) : null
    ] });
  }
);
Tc.displayName = yn;
var Pc = "SelectItemIndicator", Ac = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Cc(Pc, n).isSelected ? /* @__PURE__ */ u.jsx(ee.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Ac.displayName = Pc;
var Ls = "SelectScrollUpButton", Nc = x.forwardRef((e, t) => {
  const n = bt(Ls, e.__scopeSelect), r = Co(Ls, e.__scopeSelect), [s, i] = x.useState(!1), o = fe(t, r.onScrollButtonChange);
  return Te(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollTop > 0;
        i(c);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), s ? /* @__PURE__ */ u.jsx(
    jc,
    {
      ...e,
      ref: o,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = n;
        a && l && (a.scrollTop = a.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
Nc.displayName = Ls;
var Is = "SelectScrollDownButton", Ec = x.forwardRef((e, t) => {
  const n = bt(Is, e.__scopeSelect), r = Co(Is, e.__scopeSelect), [s, i] = x.useState(!1), o = fe(t, r.onScrollButtonChange);
  return Te(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollHeight - l.clientHeight, f = Math.ceil(l.scrollTop) < c;
        i(f);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), s ? /* @__PURE__ */ u.jsx(
    jc,
    {
      ...e,
      ref: o,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = n;
        a && l && (a.scrollTop = a.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
Ec.displayName = Is;
var jc = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...s } = e, i = bt("SelectScrollButton", n), o = x.useRef(null), a = zr(n), l = x.useCallback(() => {
    o.current !== null && (window.clearInterval(o.current), o.current = null);
  }, []);
  return x.useEffect(() => () => l(), [l]), Te(() => {
    var f;
    const c = a().find((d) => d.ref.current === document.activeElement);
    (f = c == null ? void 0 : c.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ u.jsx(
    ee.div,
    {
      "aria-hidden": !0,
      ...s,
      ref: t,
      style: { flexShrink: 0, ...s.style },
      onPointerDown: J(s.onPointerDown, () => {
        o.current === null && (o.current = window.setInterval(r, 50));
      }),
      onPointerMove: J(s.onPointerMove, () => {
        var c;
        (c = i.onItemLeave) == null || c.call(i), o.current === null && (o.current = window.setInterval(r, 50));
      }),
      onPointerLeave: J(s.onPointerLeave, () => {
        l();
      })
    }
  );
}), pg = "SelectSeparator", mg = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ u.jsx(ee.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
mg.displayName = pg;
var Os = "SelectArrow", gg = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, s = Ur(n), i = xt(Os, n), o = bt(Os, n);
    return i.open && o.position === "popper" ? /* @__PURE__ */ u.jsx(rm, { ...s, ...r, ref: t }) : null;
  }
);
gg.displayName = Os;
var yg = "SelectBubbleInput", Mc = x.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const s = x.useRef(null), i = fe(r, s), o = lm(t);
    return x.useEffect(() => {
      const a = s.current;
      if (!a) return;
      const l = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (o !== t && f) {
        const d = new Event("change", { bubbles: !0 });
        f.call(a, t), a.dispatchEvent(d);
      }
    }, [o, t]), /* @__PURE__ */ u.jsx(
      ee.select,
      {
        ...n,
        style: { ...Ql, ...n.style },
        ref: i,
        defaultValue: t
      }
    );
  }
);
Mc.displayName = yg;
function kc(e) {
  return e === "" || e === void 0;
}
function Rc(e) {
  const t = ht(e), n = x.useRef(""), r = x.useRef(0), s = x.useCallback(
    (o) => {
      const a = n.current + o;
      t(a), function l(c) {
        n.current = c, window.clearTimeout(r.current), c !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      }(a);
    },
    [t]
  ), i = x.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return x.useEffect(() => () => window.clearTimeout(r.current), []), [n, s, i];
}
function Lc(e, t, n) {
  const s = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let o = vg(e, Math.max(i, 0));
  s.length === 1 && (o = o.filter((c) => c !== n));
  const l = o.find(
    (c) => c.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function vg(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var xg = cc, bg = dc, wg = hc, Sg = pc, Cg = mc, Dg = gc, Tg = bc, Pg = Dc, Ag = Tc, Ng = Ac, Eg = Nc, jg = Ec;
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ic = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var kg = {
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
const Rg = no(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: s = "",
    children: i,
    iconNode: o,
    ...a
  }, l) => vr(
    "svg",
    {
      ref: l,
      ...kg,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Ic("lucide", s),
      ...a
    },
    [
      ...o.map(([c, f]) => vr(c, f)),
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
const ye = (e, t) => {
  const n = no(
    ({ className: r, ...s }, i) => vr(Rg, {
      ref: i,
      iconNode: t,
      className: Ic(`lucide-${Mg(e)}`, r),
      ...s
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
const Oc = ye("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vc = ye("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wr = ye("Building2", [
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
const Lg = ye("Building", [
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
const jn = ye("CalendarDays", [
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
const hr = ye("Calendar", [
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
const Ig = ye("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Do = ye("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fc = ye("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _c = ye("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bc = ye("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jt = ye("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Og = ye("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vg = ye("ExternalLink", [
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
const Hi = ye("List", [
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
const pr = ye("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vn = ye("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ki = ye("Rss", [
  ["path", { d: "M4 11a9 9 0 0 1 9 9", key: "pv89mb" }],
  ["path", { d: "M4 4a16 16 0 0 1 16 16", key: "k0647b" }],
  ["circle", { cx: "5", cy: "19", r: "1", key: "bfqh0e" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fg = ye("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function Qn({
  ...e
}) {
  return /* @__PURE__ */ u.jsx(xg, { "data-slot": "select", ...e });
}
function Gi({
  ...e
}) {
  return /* @__PURE__ */ u.jsx(wg, { "data-slot": "select-value", ...e });
}
function er({
  className: e,
  size: t = "default",
  children: n,
  ...r
}) {
  return /* @__PURE__ */ u.jsxs(
    bg,
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
        /* @__PURE__ */ u.jsx(Sg, { asChild: !0, children: /* @__PURE__ */ u.jsx(Do, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function tr({
  className: e,
  children: t,
  position: n = "popper",
  ...r
}) {
  return /* @__PURE__ */ u.jsx(Cg, { children: /* @__PURE__ */ u.jsxs(
    Dg,
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
        /* @__PURE__ */ u.jsx(_g, {}),
        /* @__PURE__ */ u.jsx(
          Tg,
          {
            className: de(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ u.jsx(Bg, {})
      ]
    }
  ) });
}
function ct({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ u.jsxs(
    Pg,
    {
      "data-slot": "select-item",
      className: de(
        "focus:bg-muted focus:text-foreground hover:bg-muted/80 text-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ u.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(Ng, { children: /* @__PURE__ */ u.jsx(Ig, { className: "size-4" }) }) }),
        /* @__PURE__ */ u.jsx(Ag, { children: t })
      ]
    }
  );
}
function _g({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(
    Eg,
    {
      "data-slot": "select-scroll-up-button",
      className: de(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ u.jsx(Bc, { className: "size-4" })
    }
  );
}
function Bg({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(
    jg,
    {
      "data-slot": "select-scroll-down-button",
      className: de(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ u.jsx(Do, { className: "size-4" })
    }
  );
}
const Vs = x.forwardRef(
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
Vs.displayName = "Input";
var us = "rovingFocusGroup.onEntryFocus", $g = { bubbles: !1, cancelable: !0 }, Fn = "RovingFocusGroup", [Fs, $c, zg] = Pl(Fn), [Ug, zc] = on(
  Fn,
  [zg]
), [Wg, Hg] = Ug(Fn), Uc = x.forwardRef(
  (e, t) => /* @__PURE__ */ u.jsx(Fs.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u.jsx(Fs.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u.jsx(Kg, { ...e, ref: t }) }) })
);
Uc.displayName = Fn;
var Kg = x.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: s = !1,
    dir: i,
    currentTabStopId: o,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: l,
    onEntryFocus: c,
    preventScrollOnEntryFocus: f = !1,
    ...d
  } = e, h = x.useRef(null), p = fe(t, h), y = lo(i), [m, g] = En({
    prop: o,
    defaultProp: a ?? null,
    onChange: l,
    caller: Fn
  }), [v, b] = x.useState(!1), w = ht(c), S = $c(n), C = x.useRef(!1), [D, P] = x.useState(0);
  return x.useEffect(() => {
    const T = h.current;
    if (T)
      return T.addEventListener(us, w), () => T.removeEventListener(us, w);
  }, [w]), /* @__PURE__ */ u.jsx(
    Wg,
    {
      scope: n,
      orientation: r,
      dir: y,
      loop: s,
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
        ee.div,
        {
          tabIndex: v || D === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: p,
          style: { outline: "none", ...e.style },
          onMouseDown: J(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: J(e.onFocus, (T) => {
            const R = !C.current;
            if (T.target === T.currentTarget && R && !v) {
              const F = new CustomEvent(us, $g);
              if (T.currentTarget.dispatchEvent(F), !F.defaultPrevented) {
                const N = S().filter((I) => I.focusable), j = N.find((I) => I.active), L = N.find((I) => I.id === m), K = [j, L, ...N].filter(
                  Boolean
                ).map((I) => I.ref.current);
                Kc(K, f);
              }
            }
            C.current = !1;
          }),
          onBlur: J(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), Wc = "RovingFocusGroupItem", Hc = x.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: s = !1,
      tabStopId: i,
      children: o,
      ...a
    } = e, l = ft(), c = i || l, f = Hg(Wc, n), d = f.currentTabStopId === c, h = $c(n), { onFocusableItemAdd: p, onFocusableItemRemove: y, currentTabStopId: m } = f;
    return x.useEffect(() => {
      if (r)
        return p(), () => y();
    }, [r, p, y]), /* @__PURE__ */ u.jsx(
      Fs.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: s,
        children: /* @__PURE__ */ u.jsx(
          ee.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": f.orientation,
            ...a,
            ref: t,
            onMouseDown: J(e.onMouseDown, (g) => {
              r ? f.onItemFocus(c) : g.preventDefault();
            }),
            onFocus: J(e.onFocus, () => f.onItemFocus(c)),
            onKeyDown: J(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const v = qg(g, f.orientation, f.dir);
              if (v !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let w = h().filter((S) => S.focusable).map((S) => S.ref.current);
                if (v === "last") w.reverse();
                else if (v === "prev" || v === "next") {
                  v === "prev" && w.reverse();
                  const S = w.indexOf(g.currentTarget);
                  w = f.loop ? Xg(w, S + 1) : w.slice(S + 1);
                }
                setTimeout(() => Kc(w));
              }
            }),
            children: typeof o == "function" ? o({ isCurrentTabStop: d, hasTabStop: m != null }) : o
          }
        )
      }
    );
  }
);
Hc.displayName = Wc;
var Gg = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Yg(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function qg(e, t, n) {
  const r = Yg(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Gg[r];
}
function Kc(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Xg(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Zg = Uc, Jg = Hc;
function Qg(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var _n = (e) => {
  const { present: t, children: n } = e, r = ey(t), s = typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n), i = fe(r.ref, ty(s));
  return typeof n == "function" || r.isPresent ? x.cloneElement(s, { ref: i }) : null;
};
_n.displayName = "Presence";
function ey(e) {
  const [t, n] = x.useState(), r = x.useRef(null), s = x.useRef(e), i = x.useRef("none"), o = e ? "mounted" : "unmounted", [a, l] = Qg(o, {
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
    const c = nr(r.current);
    i.current = a === "mounted" ? c : "none";
  }, [a]), Te(() => {
    const c = r.current, f = s.current;
    if (f !== e) {
      const h = i.current, p = nr(c);
      e ? l("MOUNT") : p === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(f && h !== p ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, l]), Te(() => {
    if (t) {
      let c;
      const f = t.ownerDocument.defaultView ?? window, d = (p) => {
        const m = nr(r.current).includes(CSS.escape(p.animationName));
        if (p.target === t && m && (l("ANIMATION_END"), !s.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, h = (p) => {
        p.target === t && (i.current = nr(r.current));
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
function nr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ty(e) {
  var r, s;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Hr = "Tabs", [ny, Aw] = on(Hr, [
  zc
]), Gc = zc(), [ry, To] = ny(Hr), Yc = x.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: s,
      defaultValue: i,
      orientation: o = "horizontal",
      dir: a,
      activationMode: l = "automatic",
      ...c
    } = e, f = lo(a), [d, h] = En({
      prop: r,
      onChange: s,
      defaultProp: i ?? "",
      caller: Hr
    });
    return /* @__PURE__ */ u.jsx(
      ry,
      {
        scope: n,
        baseId: ft(),
        value: d,
        onValueChange: h,
        orientation: o,
        dir: f,
        activationMode: l,
        children: /* @__PURE__ */ u.jsx(
          ee.div,
          {
            dir: f,
            "data-orientation": o,
            ...c,
            ref: t
          }
        )
      }
    );
  }
);
Yc.displayName = Hr;
var qc = "TabsList", Xc = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...s } = e, i = To(qc, n), o = Gc(n);
    return /* @__PURE__ */ u.jsx(
      Zg,
      {
        asChild: !0,
        ...o,
        orientation: i.orientation,
        dir: i.dir,
        loop: r,
        children: /* @__PURE__ */ u.jsx(
          ee.div,
          {
            role: "tablist",
            "aria-orientation": i.orientation,
            ...s,
            ref: t
          }
        )
      }
    );
  }
);
Xc.displayName = qc;
var Zc = "TabsTrigger", Jc = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: s = !1, ...i } = e, o = To(Zc, n), a = Gc(n), l = tu(o.baseId, r), c = nu(o.baseId, r), f = r === o.value;
    return /* @__PURE__ */ u.jsx(
      Jg,
      {
        asChild: !0,
        ...a,
        focusable: !s,
        active: f,
        children: /* @__PURE__ */ u.jsx(
          ee.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": c,
            "data-state": f ? "active" : "inactive",
            "data-disabled": s ? "" : void 0,
            disabled: s,
            id: l,
            ...i,
            ref: t,
            onMouseDown: J(e.onMouseDown, (d) => {
              !s && d.button === 0 && d.ctrlKey === !1 ? o.onValueChange(r) : d.preventDefault();
            }),
            onKeyDown: J(e.onKeyDown, (d) => {
              [" ", "Enter"].includes(d.key) && o.onValueChange(r);
            }),
            onFocus: J(e.onFocus, () => {
              const d = o.activationMode !== "manual";
              !f && !s && d && o.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
Jc.displayName = Zc;
var Qc = "TabsContent", eu = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: s, children: i, ...o } = e, a = To(Qc, n), l = tu(a.baseId, r), c = nu(a.baseId, r), f = r === a.value, d = x.useRef(f);
    return x.useEffect(() => {
      const h = requestAnimationFrame(() => d.current = !1);
      return () => cancelAnimationFrame(h);
    }, []), /* @__PURE__ */ u.jsx(_n, { present: s || f, children: ({ present: h }) => /* @__PURE__ */ u.jsx(
      ee.div,
      {
        "data-state": f ? "active" : "inactive",
        "data-orientation": a.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !h,
        id: c,
        tabIndex: 0,
        ...o,
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
eu.displayName = Qc;
function tu(e, t) {
  return `${e}-trigger-${t}`;
}
function nu(e, t) {
  return `${e}-content-${t}`;
}
var sy = Yc, oy = Xc, iy = Jc, ay = eu;
function ly({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(
    sy,
    {
      "data-slot": "tabs",
      className: de("flex flex-col gap-2", e),
      ...t
    }
  );
}
function Yi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(
    oy,
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
function Ct({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(
    iy,
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
function rr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(
    ay,
    {
      "data-slot": "tabs-content",
      className: de("flex-1 outline-none", e),
      ...t
    }
  );
}
const Ie = { view: "cm_view", date: "cm_date", category: "cm_category", organization: "cm_org", search: "cm_q" }, cy = ["month", "week", "day", "list"];
function Tr(e) {
  const t = (n) => String(n).padStart(2, "0");
  return `${e.getFullYear()}-${t(e.getMonth() + 1)}-${t(e.getDate())}`;
}
function uy(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e || "");
  if (!t) return null;
  const n = new Date(+t[1], +t[2] - 1, +t[3]);
  return n.getMonth() === +t[2] - 1 ? n : null;
}
function qi(e, t, n = cy) {
  const r = new URLSearchParams(e), s = r.get(Ie.view), i = (l, c) => (l || "").trim().slice(0, c), o = i(r.get(Ie.category), 100), a = i(r.get(Ie.organization), 20);
  return {
    view: s && n.includes(s) ? s : t.view,
    date: uy(r.get(Ie.date)) || t.date,
    category: /^[a-z0-9-]+$/.test(o) ? o : t.category,
    organization: /^\d+$/.test(a) ? a : t.organization,
    search: r.has(Ie.search) ? i(r.get(Ie.search), 200) : t.search
  };
}
function dy(e, t, n, r = /* @__PURE__ */ new Date()) {
  const s = new URL(e), i = (o, a, l) => {
    a && a !== l ? s.searchParams.set(o, a) : s.searchParams.delete(o);
  };
  return i(Ie.view, t.view, n.view), i(Ie.date, t.view === "list" ? "" : Tr(t.date), Tr(r)), i(Ie.category, t.category, n.category), i(Ie.organization, t.organization, n.organization), i(Ie.search, t.search, n.search), s.toString();
}
function fy(e, t) {
  return e.view !== t.view || t.view !== "list" && Tr(e.date) !== Tr(t.date);
}
function hy(e, t) {
  const n = new URL("calendar.ics", e.endsWith("/") ? e : `${e}/`);
  return t.category && t.category !== "all" && n.searchParams.set("category", t.category), t.organization && t.organization !== "all" && n.searchParams.set("organization", t.organization), n.toString();
}
function py(e) {
  return e.replace(/^https?:/, "webcal:");
}
const my = (e, t) => {
  const n = [];
  if (!e || !t) {
    const o = /* @__PURE__ */ new Date(), a = o.getFullYear(), l = o.getMonth();
    return Xi(a, l);
  }
  const r = new Date(e), s = new Date(t), i = new Date(r.getFullYear(), r.getMonth(), 1);
  for (; i <= s; ) {
    const o = Xi(i.getFullYear(), i.getMonth());
    n.push(...o), i.setMonth(i.getMonth() + 1);
  }
  return n;
}, Xi = (e, t) => {
  const n = [], r = `${e}-${t}`, s = new Date(e, t, 5, 14, 0), i = new Date(e, t, 5, 10, 0);
  n.push({
    id: `${r}-1`,
    title: "Computer Science Seminar",
    description: "Advanced Machine Learning Topics",
    startDate: s,
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
  const o = /* @__PURE__ */ new Date();
  return e === o.getFullYear() && t === o.getMonth() && (n.push({
    id: `${r}-12`,
    title: "Emergency Meeting",
    description: "Important announcement",
    startDate: new Date(o.getFullYear(), o.getMonth(), o.getDate(), 13, 0),
    endDate: new Date(o.getFullYear(), o.getMonth(), o.getDate(), 14, 0)
  }), n.push({
    id: `${r}-13`,
    title: "Study Group",
    description: "Physics review session",
    startDate: new Date(o.getFullYear(), o.getMonth(), o.getDate(), 16, 0),
    endDate: new Date(o.getFullYear(), o.getMonth(), o.getDate(), 18, 0)
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
}, gy = (e) => {
  const t = {}, n = ["Main Auditorium", "Student Center", "Library Room 201", "Sports Complex", "Outdoor Field", "Conference Hall", "Room 301"], r = ["Student Union", "Computer Science Club", "Athletics Department", "Cultural Society", "Career Services"];
  return e.forEach((s, i) => {
    let o = "academic";
    s.title.toLowerCase().includes("sport") || s.title.toLowerCase().includes("basketball") || s.title.toLowerCase().includes("soccer") ? o = "sports" : s.title.toLowerCase().includes("movie") || s.title.toLowerCase().includes("mixer") ? o = "social" : s.title.toLowerCase().includes("food") || s.title.toLowerCase().includes("international") ? o = "cultural" : s.title.toLowerCase().includes("career") || s.title.toLowerCase().includes("resume") ? o = "professional" : s.title.toLowerCase().includes("yoga") || s.title.toLowerCase().includes("wellness") ? o = "wellness" : (s.title.toLowerCase().includes("art") || s.title.toLowerCase().includes("exhibition") || s.title.toLowerCase().includes("concert") || s.title.toLowerCase().includes("band")) && (o = "arts"), t[s.id] = {
      category: o,
      organization: r[i % r.length],
      location: n[i % n.length],
      cost: i % 3 === 0 ? "Free" : `$${(i + 1) * 5}`,
      registrationRequired: i % 2 === 0,
      capacity: `${(i + 1) * 20} people`,
      featured: i % 4 === 0,
      categories: [{ slug: o, name: o }],
      description: s.description
    };
  }), t;
};
function yy(e = {}) {
  const [t, n] = H(!0);
  tt(() => {
    const o = setTimeout(() => {
      n(!1);
    }, 500);
    return () => clearTimeout(o);
  }, [e.start_date, e.end_date]);
  const r = z.useMemo(() => my(e.start_date, e.end_date), [e.start_date, e.end_date]), s = z.useMemo(() => gy(r), [r]), i = z.useMemo(() => {
    const o = {
      academic: "primary",
      social: "success",
      sports: "warning",
      cultural: "orange",
      professional: "indigo",
      wellness: "cyan",
      arts: "pink"
    }, a = {};
    return Object.values(s).forEach((l) => {
      l != null && l.category && o[l.category] && (a[l.category] = o[l.category]);
    }), a;
  }, [s]);
  return {
    events: r,
    eventMetadata: s,
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
class vy {
  constructor() {
    Gn(this, "baseUrl");
    Gn(this, "cache");
    Gn(this, "cacheTimeout");
    const t = window.unbcCalendarData;
    this.baseUrl = (t == null ? void 0 : t.apiUrl) || "/wp-json/unbc-events/v1", this.cache = /* @__PURE__ */ new Map(), this.cacheTimeout = 5 * 60 * 1e3;
  }
  async fetchEvents(t = {}, n = {}) {
    var h;
    const r = this.generateCacheKey(t), s = this.getFromCache(r);
    if (s && !n.refresh)
      return s;
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
      const s = new DOMParser().parseFromString(t, "text/html");
      return s.documentElement.textContent || ((r = s.body) == null ? void 0 : r.textContent) || t;
    }
    const n = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    };
    return t.replace(/&(?:amp|lt|gt|quot|#39);/g, (s) => n[s] || s);
  }
  getCategoryVariant(t) {
    return !t || !Array.isArray(t) || t.length === 0, "default";
  }
  mapWordPressCategory(t) {
    return !t || !Array.isArray(t) || t.length === 0 ? null : t[0].slug;
  }
  generateCacheKey(t) {
    const n = Object.entries(t).filter(([, r]) => r != null && r !== "").map(([r, s]) => [r, String(s)]).sort(([r], [s]) => r.localeCompare(s));
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
const ds = new vy(), xy = [
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
], by = (e) => {
  if (!e || typeof e != "object")
    return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    xy.includes(r) && (t[n] = r);
  }), t;
}, fs = (e) => {
  var n;
  if (typeof e != "string" || e.length === 0)
    return e ?? void 0;
  try {
    if (typeof DOMParser < "u") {
      const s = new DOMParser().parseFromString(e, "text/html");
      return s.documentElement.textContent || ((n = s.body) == null ? void 0 : n.textContent) || e;
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
}, wy = (e) => e ? Object.entries(e).reduce((t, [n, r]) => (t[n] = {
  ...r,
  organization: fs(r.organization) ?? r.organization,
  location: fs(r.location) ?? r.location,
  cost: fs(r.cost) ?? r.cost
}, t), {}) : {};
function ru(e = {}) {
  const [t, n] = H([]), [r, s] = H({}), [i, o] = H({}), [a, l] = H(!0), [c, f] = H(!1), [d, h] = H(null), [p, y] = H(0), [m, g] = H(0), [v, b] = H(e), [w, S] = H(), C = Oe(0), D = Oe(), P = Oe(!1), T = JSON.stringify(e);
  tt(() => {
    b(e);
  }, [T]);
  const R = At(async (L = !1, $ = !1) => {
    var _, O, M;
    if (L && (P.current || !(w != null && w.nextPage))) return;
    L || ((_ = D.current) == null || _.abort(), C.current++, P.current = !1, f(!1), S(void 0));
    const K = C.current, I = L ? D.current : new AbortController();
    L || (D.current = I), L ? (P.current = !0, f(!0)) : l(!0), h(null);
    try {
      let Z = L ? w.nextPage : v.page || 1;
      const Y = [];
      let ve = {}, he = {}, le;
      do {
        if (le = await ds.fetchEvents({ ...v, page: Z }, { refresh: $, signal: I.signal }), K !== C.current || I.signal.aborted) return;
        for (const ie of le.events)
          if ((O = le.performance) != null && O.server_processed) {
            const V = ie;
            Y.push({ ...V, startDate: new Date(V.startDate), endDate: new Date(V.endDate) });
          } else {
            const V = ie, q = ds.transformWordPressEventToEvent(V);
            Y.push(q), ve[q.id] = ds.transformWordPressEventToMetadata(V);
          }
        ve = { ...ve, ...wy(le.eventMetadata) }, he = { ...he, ...by(le.categoryMappings) }, Z = ((M = le.pagination) == null ? void 0 : M.nextPage) || 0;
      } while (v.view !== "list" && Z);
      const be = (ie) => Array.from(new Map([...ie, ...Y].map((V) => [V.id, V])).values());
      n((ie) => be(L ? ie : [])), s((ie) => ({ ...L ? ie : {}, ...ve })), o((ie) => ({ ...L ? ie : {}, ...he })), y(le.total), g(le.pages), S(le.pagination);
    } catch (Z) {
      if (K !== C.current || I.signal.aborted) return;
      L || (n([]), s({}), o({}), y(0), g(0), S(void 0)), h(Z instanceof Error ? Z.message : "Failed to load events");
    } finally {
      K === C.current && !I.signal.aborted && (l(!1), f(!1), P.current = !1);
    }
  }, [JSON.stringify(v), JSON.stringify(w)]);
  tt(() => (R(), () => {
    var L;
    C.current++, (L = D.current) == null || L.abort();
  }), [JSON.stringify(v)]);
  const F = At(() => {
    R(!1, !0);
  }, [R]), N = At(() => {
    R(!0);
  }, [R]), j = At((L) => b(($) => ({ ...$, ...L, page: 1 })), []);
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
    refetch: F,
    loadMore: N,
    setFilters: j
  };
}
const Sy = {
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
function Cy() {
  const [e, t] = H([]), [n, r] = H(!0), [s, i] = H(null);
  return tt(() => {
    (async () => {
      try {
        r(!0);
        const a = await Sy.getAll();
        t(a), i(null);
      } catch {
        i("Failed to load organizations");
      } finally {
        r(!1);
      }
    })();
  }, []), { organizations: e, loading: n, error: s };
}
function su() {
  const [e, t] = H([]), [n, r] = H(!0), [s, i] = H(null);
  return tt(() => {
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
  }, []), { categories: e, loading: n, error: s };
}
function Dy() {
  const [e, t] = H(null), [n, r] = H(!0), [s, i] = H(null);
  return tt(() => {
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
  }, []), { config: e, loading: n, error: s };
}
function sr(e) {
  return e.replace(/\\/g, "\\\\").replace(/\r\n|\r|\n/g, "\\n").replace(/;/g, "\\;").replace(/,/g, "\\,");
}
function Ty(e) {
  const t = new TextEncoder();
  let n = "", r = 0;
  const s = [];
  for (const i of e) {
    const o = t.encode(i).length;
    r + o > 75 && (s.push(n), n = " ", r = 1), n += i, r += o;
  }
  return s.push(n), s.join(`\r
`);
}
const _s = (e) => e.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
function ou(e) {
  if (!e.isAllDay) return [_s(e.startDate), _s(e.endDate)];
  const t = new Date(e.endDate);
  return (t <= e.startDate || t.getHours() || t.getMinutes() || t.getSeconds()) && t.setDate(t.getDate() + 1), [wn(e.startDate).replace(/-/g, ""), wn(t).replace(/-/g, "")];
}
function Py(e, t, n = /* @__PURE__ */ new Date()) {
  const [r, s] = ou(e), i = e.isAllDay ? ";VALUE=DATE" : "", o = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Campus Manager//Events//EN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${sr(e.id)}@campus-manager`,
    `DTSTAMP:${_s(n)}`,
    `DTSTART${i}:${r}`,
    `DTEND${i}:${s}`,
    `SUMMARY:${sr(e.title)}`,
    `DESCRIPTION:${sr(e.description || "")}`,
    `LOCATION:${sr((t == null ? void 0 : t.location) || "")}`,
    `STATUS:${e.status === "canceled" || e.status === "cancelled" ? "CANCELLED" : e.status === "postponed" ? "TENTATIVE" : "CONFIRMED"}`
  ];
  return t != null && t.website && /^https?:\/\/[^\r\n]+$/.test(t.website) && o.push(`URL:${t.website}`), [...o, "END:VEVENT", "END:VCALENDAR"].map(Ty).join(`\r
`) + `\r
`;
}
function Po(e) {
  const t = (e || "").toLowerCase();
  return t === "canceled" || t === "cancelled" ? "canceled" : t === "postponed" ? "postponed" : "scheduled";
}
function Pr(e) {
  const t = Po(e);
  return t === "canceled" ? "Cancelled" : t === "postponed" ? "Postponed" : null;
}
function un(e, t) {
  const n = Pr(t);
  return n ? `View ${e} (${n})` : `View ${e}`;
}
function It({ status: e, className: t = "" }) {
  const n = Pr(e);
  if (!n) return null;
  const r = Po(e) === "canceled" ? "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-200" : "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200";
  return /* @__PURE__ */ u.jsx("span", { className: `inline-block rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide align-middle ${r} ${t}`, children: n });
}
function Ot(e) {
  return Po(e) === "canceled" ? "line-through decoration-2 opacity-75" : "";
}
var Kr = "Dialog", [iu, Nw] = on(Kr), [Ay, _e] = iu(Kr), au = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: s,
    onOpenChange: i,
    modal: o = !0
  } = e, a = x.useRef(null), l = x.useRef(null), [c, f] = En({
    prop: r,
    defaultProp: s ?? !1,
    onChange: i,
    caller: Kr
  });
  return /* @__PURE__ */ u.jsx(
    Ay,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: ft(),
      titleId: ft(),
      descriptionId: ft(),
      open: c,
      onOpenChange: f,
      onOpenToggle: x.useCallback(() => f((d) => !d), [f]),
      modal: o,
      children: n
    }
  );
};
au.displayName = Kr;
var lu = "DialogTrigger", Ny = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, s = _e(lu, n), i = fe(t, s.triggerRef);
    return /* @__PURE__ */ u.jsx(
      ee.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": Eo(s.open),
        ...r,
        ref: i,
        onClick: J(e.onClick, s.onOpenToggle)
      }
    );
  }
);
Ny.displayName = lu;
var Ao = "DialogPortal", [Ey, cu] = iu(Ao, {
  forceMount: void 0
}), uu = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: s } = e, i = _e(Ao, t);
  return /* @__PURE__ */ u.jsx(Ey, { scope: t, forceMount: n, children: x.Children.map(r, (o) => /* @__PURE__ */ u.jsx(_n, { present: n || i.open, children: /* @__PURE__ */ u.jsx(wo, { asChild: !0, container: s, children: o }) })) });
};
uu.displayName = Ao;
var Ar = "DialogOverlay", du = x.forwardRef(
  (e, t) => {
    const n = cu(Ar, e.__scopeDialog), { forceMount: r = n.forceMount, ...s } = e, i = _e(Ar, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ u.jsx(_n, { present: r || i.open, children: /* @__PURE__ */ u.jsx(My, { ...s, ref: t }) }) : null;
  }
);
du.displayName = Ar;
var jy = /* @__PURE__ */ Pn("DialogOverlay.RemoveScroll"), My = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, s = _e(Ar, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ u.jsx(So, { as: jy, allowPinchZoom: !0, shards: [s.contentRef], children: /* @__PURE__ */ u.jsx(
        ee.div,
        {
          "data-state": Eo(s.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Lt = "DialogContent", fu = x.forwardRef(
  (e, t) => {
    const n = cu(Lt, e.__scopeDialog), { forceMount: r = n.forceMount, ...s } = e, i = _e(Lt, e.__scopeDialog);
    return /* @__PURE__ */ u.jsx(_n, { present: r || i.open, children: i.modal ? /* @__PURE__ */ u.jsx(ky, { ...s, ref: t }) : /* @__PURE__ */ u.jsx(Ry, { ...s, ref: t }) });
  }
);
fu.displayName = Lt;
var ky = x.forwardRef(
  (e, t) => {
    const n = _e(Lt, e.__scopeDialog), r = x.useRef(null), s = fe(t, n.contentRef, r);
    return x.useEffect(() => {
      const i = r.current;
      if (i) return tc(i);
    }, []), /* @__PURE__ */ u.jsx(
      hu,
      {
        ...e,
        ref: s,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: J(e.onCloseAutoFocus, (i) => {
          var o;
          i.preventDefault(), (o = n.triggerRef.current) == null || o.focus();
        }),
        onPointerDownOutside: J(e.onPointerDownOutside, (i) => {
          const o = i.detail.originalEvent, a = o.button === 0 && o.ctrlKey === !0;
          (o.button === 2 || a) && i.preventDefault();
        }),
        onFocusOutside: J(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), Ry = x.forwardRef(
  (e, t) => {
    const n = _e(Lt, e.__scopeDialog), r = x.useRef(!1), s = x.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      hu,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var o, a;
          (o = e.onCloseAutoFocus) == null || o.call(e, i), i.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), i.preventDefault()), r.current = !1, s.current = !1;
        },
        onInteractOutside: (i) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (s.current = !0));
          const o = i.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(o)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && s.current && i.preventDefault();
        }
      }
    );
  }
), hu = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: s, onCloseAutoFocus: i, ...o } = e, a = _e(Lt, n), l = x.useRef(null), c = fe(t, l);
    return El(), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        uo,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: s,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ u.jsx(
            co,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": Eo(a.open),
              ...o,
              ref: c,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(Ly, { titleId: a.titleId }),
        /* @__PURE__ */ u.jsx(Oy, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), No = "DialogTitle", pu = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, s = _e(No, n);
    return /* @__PURE__ */ u.jsx(ee.h2, { id: s.titleId, ...r, ref: t });
  }
);
pu.displayName = No;
var mu = "DialogDescription", gu = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, s = _e(mu, n);
    return /* @__PURE__ */ u.jsx(ee.p, { id: s.descriptionId, ...r, ref: t });
  }
);
gu.displayName = mu;
var yu = "DialogClose", vu = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, s = _e(yu, n);
    return /* @__PURE__ */ u.jsx(
      ee.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: J(e.onClick, () => s.onOpenChange(!1))
      }
    );
  }
);
vu.displayName = yu;
function Eo(e) {
  return e ? "open" : "closed";
}
var xu = "DialogTitleWarning", [Ew, bu] = lh(xu, {
  contentName: Lt,
  titleName: No,
  docsSlug: "dialog"
}), Ly = ({ titleId: e }) => {
  const t = bu(xu), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return x.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Iy = "DialogDescriptionWarning", Oy = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${bu(Iy).contentName}}.`;
  return x.useEffect(() => {
    var i;
    const s = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
    t && s && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Vy = au, Fy = uu, wu = du, Su = fu, Cu = pu, Du = gu, _y = vu;
const By = Vy, $y = Fy, Tu = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  wu,
  {
    ref: n,
    className: de(
      "fixed inset-0 z-[99999] bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Tu.displayName = wu.displayName;
const Pu = x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsxs($y, { children: [
  /* @__PURE__ */ u.jsx(Tu, {}),
  /* @__PURE__ */ u.jsxs(
    Su,
    {
      ref: r,
      className: de(
        "fixed left-[50%] top-[50%] z-[99999] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-card text-foreground p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ u.jsxs(_y, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-all duration-200 hover:opacity-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 p-1", children: [
          /* @__PURE__ */ u.jsx(Fg, { className: "h-4 w-4" }),
          /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Pu.displayName = Su.displayName;
const Au = ({
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
Au.displayName = "DialogHeader";
const Nu = ({
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
Nu.displayName = "DialogFooter";
const Eu = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Cu,
  {
    ref: n,
    className: de(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Eu.displayName = Cu.displayName;
const ju = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Du,
  {
    ref: n,
    className: de("text-sm text-muted-foreground", e),
    ...t
  }
));
ju.displayName = Du.displayName;
function Qt({
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
function Mu({ event: e, eventMetadata: t, open: n, onOpenChange: r, showCost: s = !0 }) {
  var h;
  const i = z.useRef(null);
  z.useEffect(() => {
    n && (i.current = document.activeElement);
  }, [n]);
  const [o, a] = z.useState(!1);
  if (!e) return null;
  const l = t[e.id], c = (p, y = 180) => {
    if (!p || p.length <= y) return p;
    const m = p.substring(0, y), g = m.lastIndexOf("."), v = m.lastIndexOf(" "), b = g > y - 50 ? g + 1 : v;
    return p.substring(0, b > 0 ? b : y).trim();
  }, f = (p) => {
    switch (p) {
      case "google": {
        const y = new URL("https://calendar.google.com/calendar/render");
        return y.searchParams.append("action", "TEMPLATE"), y.searchParams.append("text", e.title), y.searchParams.append("dates", ou(e).join("/")), y.searchParams.append("details", e.description || ""), l != null && l.location && y.searchParams.append("location", l.location), y.toString();
      }
      case "outlook":
      case "apple": {
        const y = Py(e, l);
        return `data:text/calendar;charset=utf8,${encodeURIComponent(y)}`;
      }
    }
  }, d = {
    clubs: "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary",
    unbc: "bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary",
    organizations: "bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive",
    sports: "bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent"
  };
  return /* @__PURE__ */ u.jsx(By, { open: n, onOpenChange: r, children: /* @__PURE__ */ u.jsxs(Pu, { onCloseAutoFocus: (p) => {
    var y;
    p.preventDefault(), (y = i.current) == null || y.focus();
  }, className: "max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto overflow-x-hidden bg-card border border-border sm:w-full p-4 sm:p-6", children: [
    /* @__PURE__ */ u.jsxs(Au, { children: [
      /* @__PURE__ */ u.jsxs(Eu, { className: "text-xl text-foreground", children: [
        /* @__PURE__ */ u.jsx(It, { status: e.status, className: "mr-2" }),
        /* @__PURE__ */ u.jsx("span", { className: Ot(e.status), children: e.title })
      ] }),
      Pr(e.status) && /* @__PURE__ */ u.jsxs("p", { role: "status", className: "mt-1 text-sm font-medium text-foreground", children: [
        "This event has been ",
        (h = Pr(e.status)) == null ? void 0 : h.toLowerCase(),
        ".",
        l != null && l.statusReason ? ` ${l.statusReason}` : ""
      ] }),
      e.description && /* @__PURE__ */ u.jsxs("div", { className: "mt-2", children: [
        /* @__PURE__ */ u.jsx(ju, { className: `text-muted-foreground leading-relaxed break-words ${o ? "max-h-[40vh] overflow-y-auto pr-2" : ""}`, children: o ? e.description : c(e.description) }),
        e.description.length > 180 && /* @__PURE__ */ u.jsx(
          "button",
          {
            onClick: () => a(!o),
            className: "inline-flex items-center gap-1 mt-3 px-3 py-2 text-sm text-primary hover:text-primary/80 hover:bg-primary/10 active:bg-primary/20 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
            children: o ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              "Show less",
              /* @__PURE__ */ u.jsx(Bc, { className: "h-4 w-4" })
            ] }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              "Read more",
              /* @__PURE__ */ u.jsx(Do, { className: "h-4 w-4" })
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "space-y-4 my-4", children: /* @__PURE__ */ u.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
        /* @__PURE__ */ u.jsx(Jt, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
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
          /* @__PURE__ */ u.jsx(Vn, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ u.jsx("span", { children: l.location })
        ] }),
        l.organization && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ u.jsx(Wr, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ u.jsx("span", { children: l.organization })
        ] }),
        s && l.cost && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ u.jsx(Og, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ u.jsx("span", { children: l.cost })
        ] }),
        l.website && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ u.jsx(Vg, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
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
          l.category && /* @__PURE__ */ u.jsx(Qt, { className: d[l.category] || "bg-muted text-foreground", children: l.category.charAt(0).toUpperCase() + l.category.slice(1) }),
          l.registrationRequired && /* @__PURE__ */ u.jsx(Qt, { variant: "outline", className: "border-border text-foreground", children: "Registration Required" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ u.jsxs(Nu, { className: "flex-col sm:flex-col gap-2", children: [
      /* @__PURE__ */ u.jsx("div", { className: "text-sm text-muted-foreground mb-2", children: "Add to your calendar:" }),
      /* @__PURE__ */ u.jsxs("div", { className: "flex gap-2 w-full", children: [
        /* @__PURE__ */ u.jsxs(
          Je,
          {
            variant: "outline",
            className: "flex-1 border-border bg-card text-foreground hover:bg-muted text-xs sm:text-sm",
            onClick: () => window.open(f("google"), "_blank"),
            children: [
              /* @__PURE__ */ u.jsx(hr, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Google"
            ]
          }
        ),
        /* @__PURE__ */ u.jsxs(
          Je,
          {
            variant: "outline",
            className: "flex-1 border-border bg-card text-foreground hover:bg-muted text-xs sm:text-sm",
            onClick: () => {
              const p = f("outlook"), y = document.createElement("a");
              y.href = p, y.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, y.click();
            },
            children: [
              /* @__PURE__ */ u.jsx(hr, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Outlook"
            ]
          }
        ),
        /* @__PURE__ */ u.jsxs(
          Je,
          {
            variant: "outline",
            className: "flex-1 border-border bg-card text-foreground hover:bg-muted text-xs sm:text-sm",
            onClick: () => {
              const p = f("apple"), y = document.createElement("a");
              y.href = p, y.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, y.click();
            },
            children: [
              /* @__PURE__ */ u.jsx(hr, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Apple"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
const jo = rn({});
function Mo(e) {
  const t = Oe(null);
  return t.current === null && (t.current = e()), t.current;
}
const Gr = rn(null), ko = rn({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class zy extends x.Component {
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
function Uy({ children: e, isPresent: t }) {
  const n = ro(), r = Oe(null), s = Oe({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: i } = Ce(ko);
  return pl(() => {
    const { width: o, height: a, top: l, left: c } = s.current;
    if (t || !r.current || !o || !a)
      return;
    r.current.dataset.motionPopId = n;
    const f = document.createElement("style");
    return i && (f.nonce = i), document.head.appendChild(f), f.sheet && f.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `), () => {
      document.head.removeChild(f);
    };
  }, [t]), u.jsx(zy, { isPresent: t, childRef: r, sizeRef: s, children: x.cloneElement(e, { ref: r }) });
}
const Wy = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: s, presenceAffectsLayout: i, mode: o }) => {
  const a = Mo(Hy), l = ro(), c = At((d) => {
    a.set(d, !0);
    for (const h of a.values())
      if (!h)
        return;
    r && r();
  }, [a, r]), f = jt(
    () => ({
      id: l,
      initial: t,
      isPresent: n,
      custom: s,
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
  return jt(() => {
    a.forEach((d, h) => a.set(h, !1));
  }, [n]), x.useEffect(() => {
    !n && !a.size && r && r();
  }, [n]), o === "popLayout" && (e = u.jsx(Uy, { isPresent: n, children: e })), u.jsx(Gr.Provider, { value: f, children: e });
};
function Hy() {
  return /* @__PURE__ */ new Map();
}
function ku(e = !0) {
  const t = Ce(Gr);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: s } = t, i = ro();
  tt(() => {
    e && s(i);
  }, [e]);
  const o = At(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const or = (e) => e.key || "";
function Zi(e) {
  const t = [];
  return yf.forEach(e, (n) => {
    vf(n) && t.push(n);
  }), t;
}
const Ro = typeof window < "u", Ru = Ro ? hl : tt, Ji = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: s = !0, mode: i = "sync", propagate: o = !1 }) => {
  const [a, l] = ku(o), c = jt(() => Zi(e), [e]), f = o && !a ? [] : c.map(or), d = Oe(!0), h = Oe(c), p = Mo(() => /* @__PURE__ */ new Map()), [y, m] = H(c), [g, v] = H(c);
  Ru(() => {
    d.current = !1, h.current = c;
    for (let S = 0; S < g.length; S++) {
      const C = or(g[S]);
      f.includes(C) ? p.delete(C) : p.get(C) !== !0 && p.set(C, !1);
    }
  }, [g, f.length, f.join("-")]);
  const b = [];
  if (c !== y) {
    let S = [...c];
    for (let C = 0; C < g.length; C++) {
      const D = g[C], P = or(D);
      f.includes(P) || (S.splice(C, 0, D), b.push(D));
    }
    i === "wait" && b.length && (S = b), v(Zi(S)), m(c);
    return;
  }
  const { forceRender: w } = Ce(jo);
  return u.jsx(u.Fragment, { children: g.map((S) => {
    const C = or(S), D = o && !a ? !1 : c === g || f.includes(C), P = () => {
      if (p.has(C))
        p.set(C, !0);
      else
        return;
      let T = !0;
      p.forEach((R) => {
        R || (T = !1);
      }), T && (w == null || w(), v(h.current), o && (l == null || l()), r && r());
    };
    return u.jsx(Wy, { isPresent: D, initial: !d.current || n ? void 0 : !1, custom: D ? void 0 : t, presenceAffectsLayout: s, mode: i, onExitComplete: D ? void 0 : P, children: S }, C);
  }) });
}, Ne = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let Lu = Ne;
// @__NO_SIDE_EFFECTS__
function Lo(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const en = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Qe = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, et = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, Ky = {
  useManualTiming: !1
};
function Gy(e) {
  let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, s = !1;
  const i = /* @__PURE__ */ new WeakSet();
  let o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function a(c) {
    i.has(c) && (l.schedule(c), e()), c(o);
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
      if (o = c, r) {
        s = !0;
        return;
      }
      r = !0, [t, n] = [n, t], t.forEach(a), t.clear(), r = !1, s && (s = !1, l.process(c));
    }
  };
  return l;
}
const ir = [
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
], Yy = 40;
function Iu(e, t) {
  let n = !1, r = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = () => n = !0, o = ir.reduce((v, b) => (v[b] = Gy(i), v), {}), { read: a, resolveKeyframes: l, update: c, preRender: f, render: d, postRender: h } = o, p = () => {
    const v = performance.now();
    n = !1, s.delta = r ? 1e3 / 60 : Math.max(Math.min(v - s.timestamp, Yy), 1), s.timestamp = v, s.isProcessing = !0, a.process(s), l.process(s), c.process(s), f.process(s), d.process(s), h.process(s), s.isProcessing = !1, n && t && (r = !1, e(p));
  }, y = () => {
    n = !0, r = !0, s.isProcessing || e(p);
  };
  return { schedule: ir.reduce((v, b) => {
    const w = o[b];
    return v[b] = (S, C = !1, D = !1) => (n || y(), w.schedule(S, C, D)), v;
  }, {}), cancel: (v) => {
    for (let b = 0; b < ir.length; b++)
      o[ir[b]].cancel(v);
  }, state: s, steps: o };
}
const { schedule: oe, cancel: gt, state: xe, steps: hs } = Iu(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ne, !0), Ou = rn({ strict: !1 }), Qi = {
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
}, tn = {};
for (const e in Qi)
  tn[e] = {
    isEnabled: (t) => Qi[e].some((n) => !!t[n])
  };
function qy(e) {
  for (const t in e)
    tn[t] = {
      ...tn[t],
      ...e[t]
    };
}
const Xy = /* @__PURE__ */ new Set([
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
function Nr(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Xy.has(e);
}
let Vu = (e) => !Nr(e);
function Zy(e) {
  e && (Vu = (t) => t.startsWith("on") ? !Nr(t) : e(t));
}
try {
  Zy(require("@emotion/is-prop-valid").default);
} catch {
}
function Jy(e, t, n) {
  const r = {};
  for (const s in e)
    s === "values" && typeof e.values == "object" || (Vu(s) || n === !0 && Nr(s) || !t && !Nr(s) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && s.startsWith("onDrag")) && (r[s] = e[s]);
  return r;
}
function Qy(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...r) => e(...r);
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, s) => s === "create" ? e : (t.has(s) || t.set(s, e(s)), t.get(s))
  });
}
const Yr = rn({});
function Mn(e) {
  return typeof e == "string" || Array.isArray(e);
}
function qr(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Io = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Oo = ["initial", ...Io];
function Xr(e) {
  return qr(e.animate) || Oo.some((t) => Mn(e[t]));
}
function Fu(e) {
  return !!(Xr(e) || e.variants);
}
function ev(e, t) {
  if (Xr(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Mn(n) ? n : void 0,
      animate: Mn(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function tv(e) {
  const { initial: t, animate: n } = ev(e, Ce(Yr));
  return jt(() => ({ initial: t, animate: n }), [ea(t), ea(n)]);
}
function ea(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const nv = Symbol.for("motionComponentSymbol");
function Ut(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function rv(e, t, n) {
  return At(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Ut(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const Vo = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), sv = "framerAppearId", _u = "data-" + Vo(sv), { schedule: Fo } = Iu(queueMicrotask, !1), Bu = rn({});
function ov(e, t, n, r, s) {
  var i, o;
  const { visualElement: a } = Ce(Yr), l = Ce(Ou), c = Ce(Gr), f = Ce(ko).reducedMotion, d = Oe(null);
  r = r || l.renderer, !d.current && r && (d.current = r(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: f
  }));
  const h = d.current, p = Ce(Bu);
  h && !h.projection && s && (h.type === "html" || h.type === "svg") && iv(d.current, n, s, p);
  const y = Oe(!1);
  pl(() => {
    h && y.current && h.update(n, c);
  });
  const m = n[_u], g = Oe(!!m && !(!((i = window.MotionHandoffIsComplete) === null || i === void 0) && i.call(window, m)) && ((o = window.MotionHasOptimisedAnimation) === null || o === void 0 ? void 0 : o.call(window, m)));
  return Ru(() => {
    h && (y.current = !0, window.MotionIsMounted = !0, h.updateFeatures(), Fo.render(h.render), g.current && h.animationState && h.animationState.animateChanges());
  }), tt(() => {
    h && (!g.current && h.animationState && h.animationState.animateChanges(), g.current && (queueMicrotask(() => {
      var v;
      (v = window.MotionHandoffMarkAsComplete) === null || v === void 0 || v.call(window, m);
    }), g.current = !1));
  }), h;
}
function iv(e, t, n, r) {
  const { layoutId: s, layout: i, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : $u(e.parent)), e.projection.setOptions({
    layoutId: s,
    layout: i,
    alwaysMeasureLayout: !!o || a && Ut(a),
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
function $u(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : $u(e.parent);
}
function av({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: s }) {
  var i, o;
  e && qy(e);
  function a(c, f) {
    let d;
    const h = {
      ...Ce(ko),
      ...c,
      layoutId: lv(c)
    }, { isStatic: p } = h, y = tv(c), m = r(c, p);
    if (!p && Ro) {
      cv();
      const g = uv(h);
      d = g.MeasureLayout, y.visualElement = ov(s, m, h, t, g.ProjectionNode);
    }
    return u.jsxs(Yr.Provider, { value: y, children: [d && y.visualElement ? u.jsx(d, { visualElement: y.visualElement, ...h }) : null, n(s, c, rv(m, y.visualElement, f), m, p, y.visualElement)] });
  }
  a.displayName = `motion.${typeof s == "string" ? s : `create(${(o = (i = s.displayName) !== null && i !== void 0 ? i : s.name) !== null && o !== void 0 ? o : ""})`}`;
  const l = no(a);
  return l[nv] = s, l;
}
function lv({ layoutId: e }) {
  const t = Ce(jo).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function cv(e, t) {
  Ce(Ou).strict;
}
function uv(e) {
  const { drag: t, layout: n } = tn;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const dv = [
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
function _o(e) {
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
      !!(dv.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function ta(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Bo(e, t, n, r) {
  if (typeof t == "function") {
    const [s, i] = ta(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [s, i] = ta(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  return t;
}
const Bs = (e) => Array.isArray(e), fv = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), hv = (e) => Bs(e) ? e[e.length - 1] || 0 : e, De = (e) => !!(e && e.getVelocity);
function mr(e) {
  const t = De(e) ? e.get() : e;
  return fv(t) ? t.toValue() : t;
}
function pv({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, s, i) {
  const o = {
    latestValues: mv(r, s, i, e),
    renderState: t()
  };
  return n && (o.onMount = (a) => n({ props: r, current: a, ...o }), o.onUpdate = (a) => n(a)), o;
}
const zu = (e) => (t, n) => {
  const r = Ce(Yr), s = Ce(Gr), i = () => pv(e, t, r, s);
  return n ? i() : Mo(i);
};
function mv(e, t, n, r) {
  const s = {}, i = r(e, {});
  for (const h in i)
    s[h] = mr(i[h]);
  let { initial: o, animate: a } = e;
  const l = Xr(e), c = Fu(e);
  t && c && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let f = n ? n.initial === !1 : !1;
  f = f || o === !1;
  const d = f ? a : o;
  if (d && typeof d != "boolean" && !qr(d)) {
    const h = Array.isArray(d) ? d : [d];
    for (let p = 0; p < h.length; p++) {
      const y = Bo(e, h[p]);
      if (y) {
        const { transitionEnd: m, transition: g, ...v } = y;
        for (const b in v) {
          let w = v[b];
          if (Array.isArray(w)) {
            const S = f ? w.length - 1 : 0;
            w = w[S];
          }
          w !== null && (s[b] = w);
        }
        for (const b in m)
          s[b] = m[b];
      }
    }
  }
  return s;
}
const dn = [
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
], Vt = new Set(dn), Uu = (e) => (t) => typeof t == "string" && t.startsWith(e), Wu = /* @__PURE__ */ Uu("--"), gv = /* @__PURE__ */ Uu("var(--"), $o = (e) => gv(e) ? yv.test(e.split("/*")[0].trim()) : !1, yv = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Hu = (e, t) => t && typeof e == "number" ? t.transform(e) : e, st = (e, t, n) => n > t ? t : n < e ? e : n, fn = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, kn = {
  ...fn,
  transform: (e) => st(0, 1, e)
}, ar = {
  ...fn,
  default: 1
}, Bn = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), dt = /* @__PURE__ */ Bn("deg"), He = /* @__PURE__ */ Bn("%"), U = /* @__PURE__ */ Bn("px"), vv = /* @__PURE__ */ Bn("vh"), xv = /* @__PURE__ */ Bn("vw"), na = {
  ...He,
  parse: (e) => He.parse(e) / 100,
  transform: (e) => He.transform(e * 100)
}, bv = {
  // Border props
  borderWidth: U,
  borderTopWidth: U,
  borderRightWidth: U,
  borderBottomWidth: U,
  borderLeftWidth: U,
  borderRadius: U,
  radius: U,
  borderTopLeftRadius: U,
  borderTopRightRadius: U,
  borderBottomRightRadius: U,
  borderBottomLeftRadius: U,
  // Positioning props
  width: U,
  maxWidth: U,
  height: U,
  maxHeight: U,
  top: U,
  right: U,
  bottom: U,
  left: U,
  // Spacing props
  padding: U,
  paddingTop: U,
  paddingRight: U,
  paddingBottom: U,
  paddingLeft: U,
  margin: U,
  marginTop: U,
  marginRight: U,
  marginBottom: U,
  marginLeft: U,
  // Misc
  backgroundPositionX: U,
  backgroundPositionY: U
}, wv = {
  rotate: dt,
  rotateX: dt,
  rotateY: dt,
  rotateZ: dt,
  scale: ar,
  scaleX: ar,
  scaleY: ar,
  scaleZ: ar,
  skew: dt,
  skewX: dt,
  skewY: dt,
  distance: U,
  translateX: U,
  translateY: U,
  translateZ: U,
  x: U,
  y: U,
  z: U,
  perspective: U,
  transformPerspective: U,
  opacity: kn,
  originX: na,
  originY: na,
  originZ: U
}, ra = {
  ...fn,
  transform: Math.round
}, zo = {
  ...bv,
  ...wv,
  zIndex: ra,
  size: U,
  // SVG
  fillOpacity: kn,
  strokeOpacity: kn,
  numOctaves: ra
}, Sv = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Cv = dn.length;
function Dv(e, t, n) {
  let r = "", s = !0;
  for (let i = 0; i < Cv; i++) {
    const o = dn[i], a = e[o];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (o.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const c = Hu(a, zo[o]);
      if (!l) {
        s = !1;
        const f = Sv[o] || o;
        r += `${f}(${c}) `;
      }
      n && (t[o] = c);
    }
  }
  return r = r.trim(), n ? r = n(t, s ? "" : r) : s && (r = "none"), r;
}
function Uo(e, t, n) {
  const { style: r, vars: s, transformOrigin: i } = e;
  let o = !1, a = !1;
  for (const l in t) {
    const c = t[l];
    if (Vt.has(l)) {
      o = !0;
      continue;
    } else if (Wu(l)) {
      s[l] = c;
      continue;
    } else {
      const f = Hu(c, zo[l]);
      l.startsWith("origin") ? (a = !0, i[l] = f) : r[l] = f;
    }
  }
  if (t.transform || (o || n ? r.transform = Dv(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: c = "50%", originZ: f = 0 } = i;
    r.transformOrigin = `${l} ${c} ${f}`;
  }
}
const Tv = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Pv = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Av(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const i = s ? Tv : Pv;
  e[i.offset] = U.transform(-r);
  const o = U.transform(t), a = U.transform(n);
  e[i.array] = `${o} ${a}`;
}
function sa(e, t, n) {
  return typeof e == "string" ? e : U.transform(t + n * e);
}
function Nv(e, t, n) {
  const r = sa(t, e.x, e.width), s = sa(n, e.y, e.height);
  return `${r} ${s}`;
}
function Wo(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: s,
  originY: i,
  pathLength: o,
  pathSpacing: a = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, f, d) {
  if (Uo(e, c, d), f) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: h, style: p, dimensions: y } = e;
  h.transform && (y && (p.transform = h.transform), delete h.transform), y && (s !== void 0 || i !== void 0 || p.transform) && (p.transformOrigin = Nv(y, s !== void 0 ? s : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (h.x = t), n !== void 0 && (h.y = n), r !== void 0 && (h.scale = r), o !== void 0 && Av(h, o, a, l, !1);
}
const Ho = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), Ku = () => ({
  ...Ho(),
  attrs: {}
}), Ko = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Gu(e, { style: t, vars: n }, r, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(r));
  for (const i in n)
    e.style.setProperty(i, n[i]);
}
const Yu = /* @__PURE__ */ new Set([
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
function qu(e, t, n, r) {
  Gu(e, t, void 0, r);
  for (const s in t.attrs)
    e.setAttribute(Yu.has(s) ? s : Vo(s), t.attrs[s]);
}
const Er = {};
function Ev(e) {
  Object.assign(Er, e);
}
function Xu(e, { layout: t, layoutId: n }) {
  return Vt.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Er[e] || e === "opacity");
}
function Go(e, t, n) {
  var r;
  const { style: s } = e, i = {};
  for (const o in s)
    (De(s[o]) || t.style && De(t.style[o]) || Xu(o, e) || ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (i[o] = s[o]);
  return i;
}
function Zu(e, t, n) {
  const r = Go(e, t, n);
  for (const s in e)
    if (De(e[s]) || De(t[s])) {
      const i = dn.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      r[i] = e[s];
    }
  return r;
}
function jv(e, t) {
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
const oa = ["x", "y", "width", "height", "cx", "cy", "r"], Mv = {
  useVisualState: zu({
    scrapeMotionValuesFromProps: Zu,
    createRenderState: Ku,
    onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: s }) => {
      if (!n)
        return;
      let i = !!e.drag;
      if (!i) {
        for (const a in s)
          if (Vt.has(a)) {
            i = !0;
            break;
          }
      }
      if (!i)
        return;
      let o = !t;
      if (t)
        for (let a = 0; a < oa.length; a++) {
          const l = oa[a];
          e[l] !== t[l] && (o = !0);
        }
      o && oe.read(() => {
        jv(n, r), oe.render(() => {
          Wo(r, s, Ko(n.tagName), e.transformTemplate), qu(n, r);
        });
      });
    }
  })
}, kv = {
  useVisualState: zu({
    scrapeMotionValuesFromProps: Go,
    createRenderState: Ho
  })
};
function Ju(e, t, n) {
  for (const r in t)
    !De(t[r]) && !Xu(r, n) && (e[r] = t[r]);
}
function Rv({ transformTemplate: e }, t) {
  return jt(() => {
    const n = Ho();
    return Uo(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Lv(e, t) {
  const n = e.style || {}, r = {};
  return Ju(r, n, e), Object.assign(r, Rv(e, t)), r;
}
function Iv(e, t) {
  const n = {}, r = Lv(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function Ov(e, t, n, r) {
  const s = jt(() => {
    const i = Ku();
    return Wo(i, t, Ko(r), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    Ju(i, e.style, e), s.style = { ...i, ...s.style };
  }
  return s;
}
function Vv(e = !1) {
  return (n, r, s, { latestValues: i }, o) => {
    const l = (_o(n) ? Ov : Iv)(r, i, o, n), c = Jy(r, typeof n == "string", e), f = n !== ml ? { ...c, ...l, ref: s } : {}, { children: d } = r, h = jt(() => De(d) ? d.get() : d, [d]);
    return vr(n, {
      ...f,
      children: h
    });
  };
}
function Fv(e, t) {
  return function(r, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const o = {
      ..._o(r) ? Mv : kv,
      preloadedFeatures: e,
      useRender: Vv(s),
      createVisualElement: t,
      Component: r
    };
    return av(o);
  };
}
function Qu(e, t) {
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
function Zr(e, t, n) {
  const r = e.getProps();
  return Bo(r, t, n !== void 0 ? n : r.custom, e);
}
const _v = /* @__PURE__ */ Lo(() => window.ScrollTimeline !== void 0);
class Bv {
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
    const r = this.animations.map((s) => {
      if (_v() && s.attachTimeline)
        return s.attachTimeline(t);
      if (typeof n == "function")
        return n(s);
    });
    return () => {
      r.forEach((s, i) => {
        s && s(), this.animations[i].stop();
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
class $v extends Bv {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function Yo(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const $s = 2e4;
function ed(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < $s; )
    t += n, r = e.next(t);
  return t >= $s ? 1 / 0 : t;
}
function qo(e) {
  return typeof e == "function";
}
function ia(e, t) {
  e.timeline = t, e.onfinish = null;
}
const Xo = (e) => Array.isArray(e) && typeof e[0] == "number", zv = {
  linearEasing: void 0
};
function Uv(e, t) {
  const n = /* @__PURE__ */ Lo(e);
  return () => {
    var r;
    return (r = zv[t]) !== null && r !== void 0 ? r : n();
  };
}
const jr = /* @__PURE__ */ Uv(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), td = (e, t, n = 10) => {
  let r = "";
  const s = Math.max(Math.round(t / n), 2);
  for (let i = 0; i < s; i++)
    r += e(/* @__PURE__ */ en(0, s - 1, i)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function nd(e) {
  return !!(typeof e == "function" && jr() || !e || typeof e == "string" && (e in zs || jr()) || Xo(e) || Array.isArray(e) && e.every(nd));
}
const vn = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, zs = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ vn([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ vn([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ vn([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ vn([0.33, 1.53, 0.69, 0.99])
};
function rd(e, t) {
  if (e)
    return typeof e == "function" && jr() ? td(e, t) : Xo(e) ? vn(e) : Array.isArray(e) ? e.map((n) => rd(n, t) || zs.easeOut) : zs[e];
}
const Le = {
  x: !1,
  y: !1
};
function sd() {
  return Le.x || Le.y;
}
function Wv(e, t, n) {
  var r;
  if (e instanceof Element)
    return [e];
  if (typeof e == "string") {
    let s = document;
    const i = (r = void 0) !== null && r !== void 0 ? r : s.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
function od(e, t) {
  const n = Wv(e), r = new AbortController(), s = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, s, () => r.abort()];
}
function aa(e) {
  return (t) => {
    t.pointerType === "touch" || sd() || e(t);
  };
}
function Hv(e, t, n = {}) {
  const [r, s, i] = od(e, n), o = aa((a) => {
    const { target: l } = a, c = t(a);
    if (typeof c != "function" || !l)
      return;
    const f = aa((d) => {
      c(d), l.removeEventListener("pointerleave", f);
    });
    l.addEventListener("pointerleave", f, s);
  });
  return r.forEach((a) => {
    a.addEventListener("pointerenter", o, s);
  }), i;
}
const id = (e, t) => t ? e === t ? !0 : id(e, t.parentElement) : !1, Zo = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, Kv = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Gv(e) {
  return Kv.has(e.tagName) || e.tabIndex !== -1;
}
const xn = /* @__PURE__ */ new WeakSet();
function la(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function ps(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const Yv = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = la(() => {
    if (xn.has(n))
      return;
    ps(n, "down");
    const s = la(() => {
      ps(n, "up");
    }), i = () => ps(n, "cancel");
    n.addEventListener("keyup", s, t), n.addEventListener("blur", i, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function ca(e) {
  return Zo(e) && !sd();
}
function qv(e, t, n = {}) {
  const [r, s, i] = od(e, n), o = (a) => {
    const l = a.currentTarget;
    if (!ca(a) || xn.has(l))
      return;
    xn.add(l);
    const c = t(a), f = (p, y) => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", h), !(!ca(p) || !xn.has(l)) && (xn.delete(l), typeof c == "function" && c(p, { success: y }));
    }, d = (p) => {
      f(p, n.useGlobalTarget || id(l, p.target));
    }, h = (p) => {
      f(p, !1);
    };
    window.addEventListener("pointerup", d, s), window.addEventListener("pointercancel", h, s);
  };
  return r.forEach((a) => {
    !Gv(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s), a.addEventListener("focus", (c) => Yv(c, s), s);
  }), i;
}
function Xv(e) {
  return e === "x" || e === "y" ? Le[e] ? null : (Le[e] = !0, () => {
    Le[e] = !1;
  }) : Le.x || Le.y ? null : (Le.x = Le.y = !0, () => {
    Le.x = Le.y = !1;
  });
}
const ad = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...dn
]);
let gr;
function Zv() {
  gr = void 0;
}
const Ke = {
  now: () => (gr === void 0 && Ke.set(xe.isProcessing || Ky.useManualTiming ? xe.timestamp : performance.now()), gr),
  set: (e) => {
    gr = e, queueMicrotask(Zv);
  }
};
function Jo(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Qo(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class ei {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Jo(this.subscriptions, t), () => Qo(this.subscriptions, t);
  }
  notify(t, n, r) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < s; i++) {
          const o = this.subscriptions[i];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function ld(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const ua = 30, Jv = (e) => !isNaN(parseFloat(e));
class Qv {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, s = !0) => {
      const i = Ke.now();
      this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), s && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Ke.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Jv(this.current));
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
    this.events[t] || (this.events[t] = new ei());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), oe.read(() => {
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
    const t = Ke.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > ua)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, ua);
    return ld(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function Rn(e, t) {
  return new Qv(e, t);
}
function ex(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Rn(n));
}
function tx(e, t) {
  const n = Zr(e, t);
  let { transitionEnd: r = {}, transition: s = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const o in i) {
    const a = hv(i[o]);
    ex(e, o, a);
  }
}
function nx(e) {
  return !!(De(e) && e.add);
}
function Us(e, t) {
  const n = e.getValue("willChange");
  if (nx(n))
    return n.add(t);
}
function cd(e) {
  return e.props[_u];
}
const ud = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, rx = 1e-7, sx = 12;
function ox(e, t, n, r, s) {
  let i, o, a = 0;
  do
    o = t + (n - t) / 2, i = ud(o, r, s) - e, i > 0 ? n = o : t = o;
  while (Math.abs(i) > rx && ++a < sx);
  return o;
}
function $n(e, t, n, r) {
  if (e === t && n === r)
    return Ne;
  const s = (i) => ox(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : ud(s(i), t, r);
}
const dd = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, fd = (e) => (t) => 1 - e(1 - t), hd = /* @__PURE__ */ $n(0.33, 1.53, 0.69, 0.99), ti = /* @__PURE__ */ fd(hd), pd = /* @__PURE__ */ dd(ti), md = (e) => (e *= 2) < 1 ? 0.5 * ti(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), ni = (e) => 1 - Math.sin(Math.acos(e)), gd = fd(ni), yd = dd(ni), vd = (e) => /^0[^.\s]+$/u.test(e);
function ix(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || vd(e) : !0;
}
const Sn = (e) => Math.round(e * 1e5) / 1e5, ri = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function ax(e) {
  return e == null;
}
const lx = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, si = (e, t) => (n) => !!(typeof n == "string" && lx.test(n) && n.startsWith(e) || t && !ax(n) && Object.prototype.hasOwnProperty.call(n, t)), xd = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [s, i, o, a] = r.match(ri);
  return {
    [e]: parseFloat(s),
    [t]: parseFloat(i),
    [n]: parseFloat(o),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, cx = (e) => st(0, 255, e), ms = {
  ...fn,
  transform: (e) => Math.round(cx(e))
}, Nt = {
  test: /* @__PURE__ */ si("rgb", "red"),
  parse: /* @__PURE__ */ xd("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + ms.transform(e) + ", " + ms.transform(t) + ", " + ms.transform(n) + ", " + Sn(kn.transform(r)) + ")"
};
function ux(e) {
  let t = "", n = "", r = "", s = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), s = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), s = e.substring(4, 5), t += t, n += n, r += r, s += s), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const Ws = {
  test: /* @__PURE__ */ si("#"),
  parse: ux,
  transform: Nt.transform
}, Wt = {
  test: /* @__PURE__ */ si("hsl", "hue"),
  parse: /* @__PURE__ */ xd("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + He.transform(Sn(t)) + ", " + He.transform(Sn(n)) + ", " + Sn(kn.transform(r)) + ")"
}, Se = {
  test: (e) => Nt.test(e) || Ws.test(e) || Wt.test(e),
  parse: (e) => Nt.test(e) ? Nt.parse(e) : Wt.test(e) ? Wt.parse(e) : Ws.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Nt.transform(e) : Wt.transform(e)
}, dx = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function fx(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(ri)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(dx)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const bd = "number", wd = "color", hx = "var", px = "var(", da = "${}", mx = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ln(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let i = 0;
  const a = t.replace(mx, (l) => (Se.test(l) ? (r.color.push(i), s.push(wd), n.push(Se.parse(l))) : l.startsWith(px) ? (r.var.push(i), s.push(hx), n.push(l)) : (r.number.push(i), s.push(bd), n.push(parseFloat(l))), ++i, da)).split(da);
  return { values: n, split: a, indexes: r, types: s };
}
function Sd(e) {
  return Ln(e).values;
}
function Cd(e) {
  const { split: t, types: n } = Ln(e), r = t.length;
  return (s) => {
    let i = "";
    for (let o = 0; o < r; o++)
      if (i += t[o], s[o] !== void 0) {
        const a = n[o];
        a === bd ? i += Sn(s[o]) : a === wd ? i += Se.transform(s[o]) : i += s[o];
      }
    return i;
  };
}
const gx = (e) => typeof e == "number" ? 0 : e;
function yx(e) {
  const t = Sd(e);
  return Cd(e)(t.map(gx));
}
const yt = {
  test: fx,
  parse: Sd,
  createTransformer: Cd,
  getAnimatableNone: yx
}, vx = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function xx(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(ri) || [];
  if (!r)
    return e;
  const s = n.replace(r, "");
  let i = vx.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + s + ")";
}
const bx = /\b([a-z-]*)\(.*?\)/gu, Hs = {
  ...yt,
  getAnimatableNone: (e) => {
    const t = e.match(bx);
    return t ? t.map(xx).join(" ") : e;
  }
}, wx = {
  ...zo,
  // Color props
  color: Se,
  backgroundColor: Se,
  outlineColor: Se,
  fill: Se,
  stroke: Se,
  // Border props
  borderColor: Se,
  borderTopColor: Se,
  borderRightColor: Se,
  borderBottomColor: Se,
  borderLeftColor: Se,
  filter: Hs,
  WebkitFilter: Hs
}, oi = (e) => wx[e];
function Dd(e, t) {
  let n = oi(e);
  return n !== Hs && (n = yt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const Sx = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Cx(e, t, n) {
  let r = 0, s;
  for (; r < e.length && !s; ) {
    const i = e[r];
    typeof i == "string" && !Sx.has(i) && Ln(i).values.length && (s = e[r]), r++;
  }
  if (s && n)
    for (const i of t)
      e[i] = Dd(n, s);
}
const fa = (e) => e === fn || e === U, ha = (e, t) => parseFloat(e.split(", ")[t]), pa = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const s = r.match(/^matrix3d\((.+)\)$/u);
  if (s)
    return ha(s[1], t);
  {
    const i = r.match(/^matrix\((.+)\)$/u);
    return i ? ha(i[1], e) : 0;
  }
}, Dx = /* @__PURE__ */ new Set(["x", "y", "z"]), Tx = dn.filter((e) => !Dx.has(e));
function Px(e) {
  const t = [];
  return Tx.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const nn = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: pa(4, 13),
  y: pa(5, 14)
};
nn.translateX = nn.x;
nn.translateY = nn.y;
const Et = /* @__PURE__ */ new Set();
let Ks = !1, Gs = !1;
function Td() {
  if (Gs) {
    const e = Array.from(Et).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const s = Px(r);
      s.length && (n.set(r, s), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const s = n.get(r);
      s && s.forEach(([i, o]) => {
        var a;
        (a = r.getValue(i)) === null || a === void 0 || a.set(o);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  Gs = !1, Ks = !1, Et.forEach((e) => e.complete()), Et.clear();
}
function Pd() {
  Et.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Gs = !0);
  });
}
function Ax() {
  Pd(), Td();
}
class ii {
  constructor(t, n, r, s, i, o = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = s, this.element = i, this.isAsync = o;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Et.add(this), Ks || (Ks = !0, oe.read(Pd), oe.resolveKeyframes(Td))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: s } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const o = s == null ? void 0 : s.get(), a = t[t.length - 1];
          if (o !== void 0)
            t[0] = o;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), s && o === void 0 && s.set(t[0]);
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Et.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, Et.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Ad = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), Nx = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Ex(e) {
  const t = Nx.exec(e);
  if (!t)
    return [,];
  const [, n, r, s] = t;
  return [`--${n ?? r}`, s];
}
function Nd(e, t, n = 1) {
  const [r, s] = Ex(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const o = i.trim();
    return Ad(o) ? parseFloat(o) : o;
  }
  return $o(s) ? Nd(s, t, n + 1) : s;
}
const Ed = (e) => (t) => t.test(e), jx = {
  test: (e) => e === "auto",
  parse: (e) => e
}, jd = [fn, U, He, dt, xv, vv, jx], ma = (e) => jd.find(Ed(e));
class Md extends ii {
  constructor(t, n, r, s, i) {
    super(t, n, r, s, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == "string" && (c = c.trim(), $o(c))) {
        const f = Nd(c, n.current);
        f !== void 0 && (t[l] = f), l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !ad.has(r) || t.length !== 2)
      return;
    const [s, i] = t, o = ma(s), a = ma(i);
    if (o !== a)
      if (fa(o) && fa(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == "string" && (t[l] = parseFloat(c));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let s = 0; s < t.length; s++)
      ix(t[s]) && r.push(s);
    r.length && Cx(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = nn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const s = n[n.length - 1];
    s !== void 0 && t.getValue(r, s).jump(s, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: s } = this;
    if (!n || !n.current)
      return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const o = s.length - 1, a = s[o];
    s[o] = nn[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, c]) => {
      n.getValue(l).set(c);
    }), this.resolveNoneKeyframes();
  }
}
const ga = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(yt.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function Mx(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function kx(e, t, n, r) {
  const s = e[0];
  if (s === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const i = e[e.length - 1], o = ga(s, t), a = ga(i, t);
  return !o || !a ? !1 : Mx(e) || (n === "spring" || qo(n)) && r;
}
const Rx = (e) => e !== null;
function Jr(e, { repeat: t, repeatType: n = "loop" }, r) {
  const s = e.filter(Rx), i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !i || r === void 0 ? s[i] : r;
}
const Lx = 40;
class kd {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: s = 0, repeatDelay: i = 0, repeatType: o = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Ke.now(), this.options = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: s,
      repeatDelay: i,
      repeatType: o,
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > Lx ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Ax(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = Ke.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: s, velocity: i, delay: o, onComplete: a, onUpdate: l, isGenerator: c } = this.options;
    if (!c && !kx(t, r, s, i))
      if (o)
        this.options.duration = 0;
      else {
        l && l(Jr(t, this.options, n)), a && a(), this.resolveFinishedPromise();
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
const ce = (e, t, n) => e + (t - e) * n;
function gs(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Ix({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let s = 0, i = 0, o = 0;
  if (!t)
    s = i = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    s = gs(l, a, e + 1 / 3), i = gs(l, a, e), o = gs(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(i * 255),
    blue: Math.round(o * 255),
    alpha: r
  };
}
function Mr(e, t) {
  return (n) => n > 0 ? t : e;
}
const ys = (e, t, n) => {
  const r = e * e, s = n * (t * t - r) + r;
  return s < 0 ? 0 : Math.sqrt(s);
}, Ox = [Ws, Nt, Wt], Vx = (e) => Ox.find((t) => t.test(e));
function ya(e) {
  const t = Vx(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === Wt && (n = Ix(n)), n;
}
const va = (e, t) => {
  const n = ya(e), r = ya(t);
  if (!n || !r)
    return Mr(e, t);
  const s = { ...n };
  return (i) => (s.red = ys(n.red, r.red, i), s.green = ys(n.green, r.green, i), s.blue = ys(n.blue, r.blue, i), s.alpha = ce(n.alpha, r.alpha, i), Nt.transform(s));
}, Fx = (e, t) => (n) => t(e(n)), zn = (...e) => e.reduce(Fx), Ys = /* @__PURE__ */ new Set(["none", "hidden"]);
function _x(e, t) {
  return Ys.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function Bx(e, t) {
  return (n) => ce(e, t, n);
}
function ai(e) {
  return typeof e == "number" ? Bx : typeof e == "string" ? $o(e) ? Mr : Se.test(e) ? va : Ux : Array.isArray(e) ? Rd : typeof e == "object" ? Se.test(e) ? va : $x : Mr;
}
function Rd(e, t) {
  const n = [...e], r = n.length, s = e.map((i, o) => ai(i)(i, t[o]));
  return (i) => {
    for (let o = 0; o < r; o++)
      n[o] = s[o](i);
    return n;
  };
}
function $x(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (r[s] = ai(e[s])(e[s], t[s]));
  return (s) => {
    for (const i in r)
      n[i] = r[i](s);
    return n;
  };
}
function zx(e, t) {
  var n;
  const r = [], s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i], a = e.indexes[o][s[o]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    r[i] = l, s[o]++;
  }
  return r;
}
const Ux = (e, t) => {
  const n = yt.createTransformer(t), r = Ln(e), s = Ln(t);
  return r.indexes.var.length === s.indexes.var.length && r.indexes.color.length === s.indexes.color.length && r.indexes.number.length >= s.indexes.number.length ? Ys.has(e) && !s.values.length || Ys.has(t) && !r.values.length ? _x(e, t) : zn(Rd(zx(r, s), s.values), n) : Mr(e, t);
};
function Ld(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? ce(e, t, n) : ai(e)(e, t);
}
const Wx = 5;
function Id(e, t, n) {
  const r = Math.max(t - Wx, 0);
  return ld(n - e(r), t - r);
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
}, vs = 1e-3;
function Hx({ duration: e = ue.duration, bounce: t = ue.bounce, velocity: n = ue.velocity, mass: r = ue.mass }) {
  let s, i, o = 1 - t;
  o = st(ue.minDamping, ue.maxDamping, o), e = st(ue.minDuration, ue.maxDuration, /* @__PURE__ */ et(e)), o < 1 ? (s = (c) => {
    const f = c * o, d = f * e, h = f - n, p = qs(c, o), y = Math.exp(-d);
    return vs - h / p * y;
  }, i = (c) => {
    const d = c * o * e, h = d * n + n, p = Math.pow(o, 2) * Math.pow(c, 2) * e, y = Math.exp(-d), m = qs(Math.pow(c, 2), o);
    return (-s(c) + vs > 0 ? -1 : 1) * ((h - p) * y) / m;
  }) : (s = (c) => {
    const f = Math.exp(-c * e), d = (c - n) * e + 1;
    return -vs + f * d;
  }, i = (c) => {
    const f = Math.exp(-c * e), d = (n - c) * (e * e);
    return f * d;
  });
  const a = 5 / e, l = Gx(s, i, a);
  if (e = /* @__PURE__ */ Qe(e), isNaN(l))
    return {
      stiffness: ue.stiffness,
      damping: ue.damping,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * r;
    return {
      stiffness: c,
      damping: o * 2 * Math.sqrt(r * c),
      duration: e
    };
  }
}
const Kx = 12;
function Gx(e, t, n) {
  let r = n;
  for (let s = 1; s < Kx; s++)
    r = r - e(r) / t(r);
  return r;
}
function qs(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Yx = ["duration", "bounce"], qx = ["stiffness", "damping", "mass"];
function xa(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Xx(e) {
  let t = {
    velocity: ue.velocity,
    stiffness: ue.stiffness,
    damping: ue.damping,
    mass: ue.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!xa(e, qx) && xa(e, Yx))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), s = r * r, i = 2 * st(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
      t = {
        ...t,
        mass: ue.mass,
        stiffness: s,
        damping: i
      };
    } else {
      const n = Hx(e);
      t = {
        ...t,
        ...n,
        mass: ue.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Od(e = ue.visualDuration, t = ue.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: s } = n;
  const i = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: i }, { stiffness: l, damping: c, mass: f, duration: d, velocity: h, isResolvedFromDuration: p } = Xx({
    ...n,
    velocity: -/* @__PURE__ */ et(n.velocity || 0)
  }), y = h || 0, m = c / (2 * Math.sqrt(l * f)), g = o - i, v = /* @__PURE__ */ et(Math.sqrt(l / f)), b = Math.abs(g) < 5;
  r || (r = b ? ue.restSpeed.granular : ue.restSpeed.default), s || (s = b ? ue.restDelta.granular : ue.restDelta.default);
  let w;
  if (m < 1) {
    const C = qs(v, m);
    w = (D) => {
      const P = Math.exp(-m * v * D);
      return o - P * ((y + m * v * g) / C * Math.sin(C * D) + g * Math.cos(C * D));
    };
  } else if (m === 1)
    w = (C) => o - Math.exp(-v * C) * (g + (y + v * g) * C);
  else {
    const C = v * Math.sqrt(m * m - 1);
    w = (D) => {
      const P = Math.exp(-m * v * D), T = Math.min(C * D, 300);
      return o - P * ((y + m * v * g) * Math.sinh(T) + C * g * Math.cosh(T)) / C;
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
        m < 1 && (P = C === 0 ? /* @__PURE__ */ Qe(y) : Id(w, C, D));
        const T = Math.abs(P) <= r, R = Math.abs(o - D) <= s;
        a.done = T && R;
      }
      return a.value = a.done ? o : D, a;
    },
    toString: () => {
      const C = Math.min(ed(S), $s), D = td((P) => S.next(C * P).value, C, 30);
      return C + "ms " + D;
    }
  };
  return S;
}
function ba({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: s = 10, bounceStiffness: i = 500, modifyTarget: o, min: a, max: l, restDelta: c = 0.5, restSpeed: f }) {
  const d = e[0], h = {
    done: !1,
    value: d
  }, p = (T) => a !== void 0 && T < a || l !== void 0 && T > l, y = (T) => a === void 0 ? l : l === void 0 || Math.abs(a - T) < Math.abs(l - T) ? a : l;
  let m = n * t;
  const g = d + m, v = o === void 0 ? g : o(g);
  v !== g && (m = v - d);
  const b = (T) => -m * Math.exp(-T / r), w = (T) => v + b(T), S = (T) => {
    const R = b(T), F = w(T);
    h.done = Math.abs(R) <= c, h.value = h.done ? v : F;
  };
  let C, D;
  const P = (T) => {
    p(h.value) && (C = T, D = Od({
      keyframes: [h.value, y(h.value)],
      velocity: Id(w, T, h.value),
      // TODO: This should be passing * 1000
      damping: s,
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
const Zx = /* @__PURE__ */ $n(0.42, 0, 1, 1), Jx = /* @__PURE__ */ $n(0, 0, 0.58, 1), Vd = /* @__PURE__ */ $n(0.42, 0, 0.58, 1), Qx = (e) => Array.isArray(e) && typeof e[0] != "number", eb = {
  linear: Ne,
  easeIn: Zx,
  easeInOut: Vd,
  easeOut: Jx,
  circIn: ni,
  circInOut: yd,
  circOut: gd,
  backIn: ti,
  backInOut: pd,
  backOut: hd,
  anticipate: md
}, wa = (e) => {
  if (Xo(e)) {
    Lu(e.length === 4);
    const [t, n, r, s] = e;
    return $n(t, n, r, s);
  } else if (typeof e == "string")
    return eb[e];
  return e;
};
function tb(e, t, n) {
  const r = [], s = n || Ld, i = e.length - 1;
  for (let o = 0; o < i; o++) {
    let a = s(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || Ne : t;
      a = zn(l, a);
    }
    r.push(a);
  }
  return r;
}
function nb(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const i = e.length;
  if (Lu(i === t.length), i === 1)
    return () => t[0];
  if (i === 2 && t[0] === t[1])
    return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = tb(t, r, s), l = a.length, c = (f) => {
    if (o && f < e[0])
      return t[0];
    let d = 0;
    if (l > 1)
      for (; d < e.length - 2 && !(f < e[d + 1]); d++)
        ;
    const h = /* @__PURE__ */ en(e[d], e[d + 1], f);
    return a[d](h);
  };
  return n ? (f) => c(st(e[0], e[i - 1], f)) : c;
}
function rb(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = /* @__PURE__ */ en(0, t, r);
    e.push(ce(n, 1, s));
  }
}
function sb(e) {
  const t = [0];
  return rb(t, e.length - 1), t;
}
function ob(e, t) {
  return e.map((n) => n * t);
}
function ib(e, t) {
  return e.map(() => t || Vd).splice(0, e.length - 1);
}
function kr({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const s = Qx(r) ? r.map(wa) : wa(r), i = {
    done: !1,
    value: t[0]
  }, o = ob(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : sb(t),
    e
  ), a = nb(o, t, {
    ease: Array.isArray(s) ? s : ib(t, s)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = a(l), i.done = l >= e, i)
  };
}
const ab = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => oe.update(t, !0),
    stop: () => gt(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => xe.isProcessing ? xe.timestamp : Ke.now()
  };
}, lb = {
  decay: ba,
  inertia: ba,
  tween: kr,
  keyframes: kr,
  spring: Od
}, cb = (e) => e / 100;
class li extends kd {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: r, element: s, keyframes: i } = this.options, o = (s == null ? void 0 : s.KeyframeResolver) || ii, a = (l, c) => this.onKeyframesResolved(l, c);
    this.resolver = new o(i, a, n, r, s), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: s = 0, repeatType: i, velocity: o = 0 } = this.options, a = qo(n) ? n : lb[n] || kr;
    let l, c;
    a !== kr && typeof t[0] != "number" && (l = zn(cb, Ld(t[0], t[1])), t = [0, 100]);
    const f = a({ ...this.options, keyframes: t });
    i === "mirror" && (c = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -o
    })), f.calculatedDuration === null && (f.calculatedDuration = ed(f));
    const { calculatedDuration: d } = f, h = d + s, p = h * (r + 1) - s;
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
    const { finalKeyframe: s, generator: i, mirroredGenerator: o, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: c, totalDuration: f, resolvedDuration: d } = r;
    if (this.startTime === null)
      return i.next(0);
    const { delay: h, repeat: p, repeatType: y, repeatDelay: m, onUpdate: g } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - f / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const v = this.currentTime - h * (this.speed >= 0 ? 1 : -1), b = this.speed >= 0 ? v < 0 : v > f;
    this.currentTime = Math.max(v, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = f);
    let w = this.currentTime, S = i;
    if (p) {
      const T = Math.min(this.currentTime, f) / d;
      let R = Math.floor(T), F = T % 1;
      !F && T >= 1 && (F = 1), F === 1 && R--, R = Math.min(R, p + 1), !!(R % 2) && (y === "reverse" ? (F = 1 - F, m && (F -= m / d)) : y === "mirror" && (S = o)), w = st(0, 1, F) * d;
    }
    const C = b ? { done: !1, value: l[0] } : S.next(w);
    a && (C.value = a(C.value));
    let { done: D } = C;
    !b && c !== null && (D = this.speed >= 0 ? this.currentTime >= f : this.currentTime <= 0);
    const P = this.holdTime === null && (this.state === "finished" || this.state === "running" && D);
    return P && s !== void 0 && (C.value = Jr(l, this.options, s)), g && g(C.value), P && this.finish(), C;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? /* @__PURE__ */ et(t.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ et(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ Qe(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ et(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = ab, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const s = this.driver.now();
    this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = s) : this.startTime = r ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
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
const ub = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function db(e, t, n, { delay: r = 0, duration: s = 300, repeat: i = 0, repeatType: o = "loop", ease: a = "easeInOut", times: l } = {}) {
  const c = { [t]: n };
  l && (c.offset = l);
  const f = rd(a, s);
  return Array.isArray(f) && (c.easing = f), e.animate(c, {
    delay: r,
    duration: s,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: i + 1,
    direction: o === "reverse" ? "alternate" : "normal"
  });
}
const fb = /* @__PURE__ */ Lo(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Rr = 10, hb = 2e4;
function pb(e) {
  return qo(e.type) || e.type === "spring" || !nd(e.ease);
}
function mb(e, t) {
  const n = new li({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const s = [];
  let i = 0;
  for (; !r.done && i < hb; )
    r = n.sample(i), s.push(r.value), i += Rr;
  return {
    times: void 0,
    keyframes: s,
    duration: i - Rr,
    ease: "linear"
  };
}
const Fd = {
  anticipate: md,
  backInOut: pd,
  circInOut: yd
};
function gb(e) {
  return e in Fd;
}
class Sa extends kd {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: s, keyframes: i } = this.options;
    this.resolver = new Md(i, (o, a) => this.onKeyframesResolved(o, a), n, r, s), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: r = 300, times: s, ease: i, type: o, motionValue: a, name: l, startTime: c } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof i == "string" && jr() && gb(i) && (i = Fd[i]), pb(this.options)) {
      const { onComplete: d, onUpdate: h, motionValue: p, element: y, ...m } = this.options, g = mb(t, m);
      t = g.keyframes, t.length === 1 && (t[1] = t[0]), r = g.duration, s = g.times, i = g.ease, o = "keyframes";
    }
    const f = db(a.owner.current, l, t, { ...this.options, duration: r, times: s, ease: i });
    return f.startTime = c ?? this.calcStartTime(), this.pendingTimeline ? (ia(f, this.pendingTimeline), this.pendingTimeline = void 0) : f.onfinish = () => {
      const { onComplete: d } = this.options;
      a.set(Jr(t, this.options, n)), d && d(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: f,
      duration: r,
      times: s,
      type: o,
      ease: i,
      keyframes: t
    };
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: n } = t;
    return /* @__PURE__ */ et(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return /* @__PURE__ */ et(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = /* @__PURE__ */ Qe(t);
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
      ia(r, t);
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
    const { animation: n, keyframes: r, duration: s, type: i, ease: o, times: a } = t;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: c, onUpdate: f, onComplete: d, element: h, ...p } = this.options, y = new li({
        ...p,
        keyframes: r,
        duration: s,
        type: i,
        ease: o,
        times: a,
        isGenerator: !0
      }), m = /* @__PURE__ */ Qe(this.time);
      c.setWithVelocity(y.sample(m - Rr).value, y.sample(m).value, Rr);
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
    const { motionValue: n, name: r, repeatDelay: s, repeatType: i, damping: o, type: a } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
      return !1;
    const { onUpdate: l, transformTemplate: c } = n.owner.getProps();
    return fb() && r && ub.has(r) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !c && !s && i !== "mirror" && o !== 0 && a !== "inertia";
  }
}
const yb = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, vb = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), xb = {
  type: "keyframes",
  duration: 0.8
}, bb = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, wb = (e, { keyframes: t }) => t.length > 2 ? xb : Vt.has(e) ? e.startsWith("scale") ? vb(t[1]) : yb : bb;
function Sb({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: s, repeat: i, repeatType: o, repeatDelay: a, from: l, elapsed: c, ...f }) {
  return !!Object.keys(f).length;
}
const ci = (e, t, n, r = {}, s, i) => (o) => {
  const a = Yo(r, e) || {}, l = a.delay || r.delay || 0;
  let { elapsed: c = 0 } = r;
  c = c - /* @__PURE__ */ Qe(l);
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
      o(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: i ? void 0 : s
  };
  Sb(a) || (f = {
    ...f,
    ...wb(e, f)
  }), f.duration && (f.duration = /* @__PURE__ */ Qe(f.duration)), f.repeatDelay && (f.repeatDelay = /* @__PURE__ */ Qe(f.repeatDelay)), f.from !== void 0 && (f.keyframes[0] = f.from);
  let d = !1;
  if ((f.type === !1 || f.duration === 0 && !f.repeatDelay) && (f.duration = 0, f.delay === 0 && (d = !0)), d && !i && t.get() !== void 0) {
    const h = Jr(f.keyframes, a);
    if (h !== void 0)
      return oe.update(() => {
        f.onUpdate(h), f.onComplete();
      }), new $v([]);
  }
  return !i && Sa.supports(f) ? new Sa(f) : new li(f);
};
function Cb({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function _d(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
  var i;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (o = r);
  const c = [], f = s && e.animationState && e.animationState.getState()[s];
  for (const d in l) {
    const h = e.getValue(d, (i = e.latestValues[d]) !== null && i !== void 0 ? i : null), p = l[d];
    if (p === void 0 || f && Cb(f, d))
      continue;
    const y = {
      delay: n,
      ...Yo(o || {}, d)
    };
    let m = !1;
    if (window.MotionHandoffAnimation) {
      const v = cd(e);
      if (v) {
        const b = window.MotionHandoffAnimation(v, d, oe);
        b !== null && (y.startTime = b, m = !0);
      }
    }
    Us(e, d), h.start(ci(d, h, p, e.shouldReduceMotion && ad.has(d) ? { type: !1 } : y, e, m));
    const g = h.animation;
    g && c.push(g);
  }
  return a && Promise.all(c).then(() => {
    oe.update(() => {
      a && tx(e, a);
    });
  }), c;
}
function Xs(e, t, n = {}) {
  var r;
  const s = Zr(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: i = e.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(_d(e, s, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: f = 0, staggerChildren: d, staggerDirection: h } = i;
    return Db(e, t, f + c, d, h, n);
  } : () => Promise.resolve(), { when: l } = i;
  if (l) {
    const [c, f] = l === "beforeChildren" ? [o, a] : [a, o];
    return c().then(() => f());
  } else
    return Promise.all([o(), a(n.delay)]);
}
function Db(e, t, n = 0, r = 0, s = 1, i) {
  const o = [], a = (e.variantChildren.size - 1) * r, l = s === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return Array.from(e.variantChildren).sort(Tb).forEach((c, f) => {
    c.notify("AnimationStart", t), o.push(Xs(c, t, {
      ...i,
      delay: n + l(f)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(o);
}
function Tb(e, t) {
  return e.sortNodePosition(t);
}
function Pb(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map((i) => Xs(e, i, n));
    r = Promise.all(s);
  } else if (typeof t == "string")
    r = Xs(e, t, n);
  else {
    const s = typeof t == "function" ? Zr(e, t, n.custom) : t;
    r = Promise.all(_d(e, s, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const Ab = Oo.length;
function Bd(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Bd(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < Ab; n++) {
    const r = Oo[n], s = e.props[r];
    (Mn(s) || s === !1) && (t[r] = s);
  }
  return t;
}
const Nb = [...Io].reverse(), Eb = Io.length;
function jb(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => Pb(e, n, r)));
}
function Mb(e) {
  let t = jb(e), n = Ca(), r = !0;
  const s = (l) => (c, f) => {
    var d;
    const h = Zr(e, f, l === "exit" ? (d = e.presenceContext) === null || d === void 0 ? void 0 : d.custom : void 0);
    if (h) {
      const { transition: p, transitionEnd: y, ...m } = h;
      c = { ...c, ...m, ...y };
    }
    return c;
  };
  function i(l) {
    t = l(e);
  }
  function o(l) {
    const { props: c } = e, f = Bd(e.parent) || {}, d = [], h = /* @__PURE__ */ new Set();
    let p = {}, y = 1 / 0;
    for (let g = 0; g < Eb; g++) {
      const v = Nb[g], b = n[v], w = c[v] !== void 0 ? c[v] : f[v], S = Mn(w), C = v === l ? b.isActive : null;
      C === !1 && (y = g);
      let D = w === f[v] && w !== c[v] && S;
      if (D && r && e.manuallyAnimateOnMount && (D = !1), b.protectedKeys = { ...p }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && C === null || // If we didn't and don't have any defined prop for this animation type
      !w && !b.prevProp || // Or if the prop doesn't define an animation
      qr(w) || typeof w == "boolean")
        continue;
      const P = kb(b.prevProp, w);
      let T = P || // If we're making this variant active, we want to always make it active
      v === l && b.isActive && !D && S || // If we removed a higher-priority variant (i is in reverse order)
      g > y && S, R = !1;
      const F = Array.isArray(w) ? w : [w];
      let N = F.reduce(s(v), {});
      C === !1 && (N = {});
      const { prevResolvedValues: j = {} } = b, L = {
        ...j,
        ...N
      }, $ = (_) => {
        T = !0, h.has(_) && (R = !0, h.delete(_)), b.needsAnimating[_] = !0;
        const O = e.getValue(_);
        O && (O.liveStyle = !1);
      };
      for (const _ in L) {
        const O = N[_], M = j[_];
        if (p.hasOwnProperty(_))
          continue;
        let Z = !1;
        Bs(O) && Bs(M) ? Z = !Qu(O, M) : Z = O !== M, Z ? O != null ? $(_) : h.add(_) : O !== void 0 && h.has(_) ? $(_) : b.protectedKeys[_] = !0;
      }
      b.prevProp = w, b.prevResolvedValues = N, b.isActive && (p = { ...p, ...N }), r && e.blockInitialAnimation && (T = !1), T && (!(D && P) || R) && d.push(...F.map((_) => ({
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
    const d = o(l);
    for (const h in n)
      n[h].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      n = Ca(), r = !0;
    }
  };
}
function kb(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Qu(t, e) : !1;
}
function Dt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Ca() {
  return {
    animate: Dt(!0),
    whileInView: Dt(),
    whileHover: Dt(),
    whileTap: Dt(),
    whileDrag: Dt(),
    whileFocus: Dt(),
    exit: Dt()
  };
}
class wt {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class Rb extends wt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = Mb(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    qr(t) && (this.unmountControls = t.subscribe(this.node));
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
let Lb = 0;
class Ib extends wt {
  constructor() {
    super(...arguments), this.id = Lb++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    const s = this.node.animationState.setActive("exit", !t);
    n && !t && s.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const Ob = {
  animation: {
    Feature: Rb
  },
  exit: {
    Feature: Ib
  }
};
function In(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Un(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const Vb = (e) => (t) => Zo(t) && e(t, Un(t));
function Cn(e, t, n, r) {
  return In(e, t, Vb(n), r);
}
const Da = (e, t) => Math.abs(e - t);
function Fb(e, t) {
  const n = Da(e.x, t.x), r = Da(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class $d {
  constructor(t, n, { transformPagePoint: r, contextWindow: s, dragSnapToOrigin: i = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const d = bs(this.lastMoveEventInfo, this.history), h = this.startEvent !== null, p = Fb(d.offset, { x: 0, y: 0 }) >= 3;
      if (!h && !p)
        return;
      const { point: y } = d, { timestamp: m } = xe;
      this.history.push({ ...y, timestamp: m });
      const { onStart: g, onMove: v } = this.handlers;
      h || (g && g(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), v && v(this.lastMoveEvent, d);
    }, this.handlePointerMove = (d, h) => {
      this.lastMoveEvent = d, this.lastMoveEventInfo = xs(h, this.transformPagePoint), oe.update(this.updatePoint, !0);
    }, this.handlePointerUp = (d, h) => {
      this.end();
      const { onEnd: p, onSessionEnd: y, resumeAnimation: m } = this.handlers;
      if (this.dragSnapToOrigin && m && m(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const g = bs(d.type === "pointercancel" ? this.lastMoveEventInfo : xs(h, this.transformPagePoint), this.history);
      this.startEvent && p && p(d, g), y && y(d, g);
    }, !Zo(t))
      return;
    this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = r, this.contextWindow = s || window;
    const o = Un(t), a = xs(o, this.transformPagePoint), { point: l } = a, { timestamp: c } = xe;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: f } = n;
    f && f(t, bs(a, this.history)), this.removeListeners = zn(Cn(this.contextWindow, "pointermove", this.handlePointerMove), Cn(this.contextWindow, "pointerup", this.handlePointerUp), Cn(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), gt(this.updatePoint);
  }
}
function xs(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ta(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function bs({ point: e }, t) {
  return {
    point: e,
    delta: Ta(e, zd(t)),
    offset: Ta(e, _b(t)),
    velocity: Bb(t, 0.1)
  };
}
function _b(e) {
  return e[0];
}
function zd(e) {
  return e[e.length - 1];
}
function Bb(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const s = zd(e);
  for (; n >= 0 && (r = e[n], !(s.timestamp - r.timestamp > /* @__PURE__ */ Qe(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const i = /* @__PURE__ */ et(s.timestamp - r.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const o = {
    x: (s.x - r.x) / i,
    y: (s.y - r.y) / i
  };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
const Ud = 1e-4, $b = 1 - Ud, zb = 1 + Ud, Wd = 0.01, Ub = 0 - Wd, Wb = 0 + Wd;
function Ee(e) {
  return e.max - e.min;
}
function Hb(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Pa(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = ce(t.min, t.max, e.origin), e.scale = Ee(n) / Ee(t), e.translate = ce(n.min, n.max, e.origin) - e.originPoint, (e.scale >= $b && e.scale <= zb || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Ub && e.translate <= Wb || isNaN(e.translate)) && (e.translate = 0);
}
function Dn(e, t, n, r) {
  Pa(e.x, t.x, n.x, r ? r.originX : void 0), Pa(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Aa(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Ee(t);
}
function Kb(e, t, n) {
  Aa(e.x, t.x, n.x), Aa(e.y, t.y, n.y);
}
function Na(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Ee(t);
}
function Tn(e, t, n) {
  Na(e.x, t.x, n.x), Na(e.y, t.y, n.y);
}
function Gb(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? ce(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ce(n, e, r.max) : Math.min(e, n)), e;
}
function Ea(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function Yb(e, { top: t, left: n, bottom: r, right: s }) {
  return {
    x: Ea(e.x, n, s),
    y: Ea(e.y, t, r)
  };
}
function ja(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function qb(e, t) {
  return {
    x: ja(e.x, t.x),
    y: ja(e.y, t.y)
  };
}
function Xb(e, t) {
  let n = 0.5;
  const r = Ee(e), s = Ee(t);
  return s > r ? n = /* @__PURE__ */ en(t.min, t.max - r, e.min) : r > s && (n = /* @__PURE__ */ en(e.min, e.max - s, t.min)), st(0, 1, n);
}
function Zb(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Zs = 0.35;
function Jb(e = Zs) {
  return e === !1 ? e = 0 : e === !0 && (e = Zs), {
    x: Ma(e, "left", "right"),
    y: Ma(e, "top", "bottom")
  };
}
function Ma(e, t, n) {
  return {
    min: ka(e, t),
    max: ka(e, n)
  };
}
function ka(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Ra = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Ht = () => ({
  x: Ra(),
  y: Ra()
}), La = () => ({ min: 0, max: 0 }), pe = () => ({
  x: La(),
  y: La()
});
function ke(e) {
  return [e("x"), e("y")];
}
function Hd({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function Qb({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function e0(e, t) {
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
function ws(e) {
  return e === void 0 || e === 1;
}
function Js({ scale: e, scaleX: t, scaleY: n }) {
  return !ws(e) || !ws(t) || !ws(n);
}
function Tt(e) {
  return Js(e) || Kd(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Kd(e) {
  return Ia(e.x) || Ia(e.y);
}
function Ia(e) {
  return e && e !== "0%";
}
function Lr(e, t, n) {
  const r = e - n, s = t * r;
  return n + s;
}
function Oa(e, t, n, r, s) {
  return s !== void 0 && (e = Lr(e, s, r)), Lr(e, n, r) + t;
}
function Qs(e, t = 0, n = 1, r, s) {
  e.min = Oa(e.min, t, n, r, s), e.max = Oa(e.max, t, n, r, s);
}
function Gd(e, { x: t, y: n }) {
  Qs(e.x, t.translate, t.scale, t.originPoint), Qs(e.y, n.translate, n.scale, n.originPoint);
}
const Va = 0.999999999999, Fa = 1.0000000000001;
function t0(e, t, n, r = !1) {
  const s = n.length;
  if (!s)
    return;
  t.x = t.y = 1;
  let i, o;
  for (let a = 0; a < s; a++) {
    i = n[a], o = i.projectionDelta;
    const { visualElement: l } = i.options;
    l && l.props.style && l.props.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && Gt(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), o && (t.x *= o.x.scale, t.y *= o.y.scale, Gd(e, o)), r && Tt(i.latestValues) && Gt(e, i.latestValues));
  }
  t.x < Fa && t.x > Va && (t.x = 1), t.y < Fa && t.y > Va && (t.y = 1);
}
function Kt(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function _a(e, t, n, r, s = 0.5) {
  const i = ce(e.min, e.max, s);
  Qs(e, t, n, i, r);
}
function Gt(e, t) {
  _a(e.x, t.x, t.scaleX, t.scale, t.originX), _a(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Yd(e, t) {
  return Hd(e0(e.getBoundingClientRect(), t));
}
function n0(e, t, n) {
  const r = Yd(e, n), { scroll: s } = t;
  return s && (Kt(r.x, s.offset.x), Kt(r.y, s.offset.y)), r;
}
const qd = ({ current: e }) => e ? e.ownerDocument.defaultView : null, r0 = /* @__PURE__ */ new WeakMap();
class s0 {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = pe(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const s = (f) => {
      const { dragSnapToOrigin: d } = this.getProps();
      d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Un(f).point);
    }, i = (f, d) => {
      const { drag: h, dragPropagation: p, onDragStart: y } = this.getProps();
      if (h && !p && (this.openDragLock && this.openDragLock(), this.openDragLock = Xv(h), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ke((g) => {
        let v = this.getAxisMotionValue(g).get() || 0;
        if (He.test(v)) {
          const { projection: b } = this.visualElement;
          if (b && b.layout) {
            const w = b.layout.layoutBox[g];
            w && (v = Ee(w) * (parseFloat(v) / 100));
          }
        }
        this.originPoint[g] = v;
      }), y && oe.postRender(() => y(f, d)), Us(this.visualElement, "transform");
      const { animationState: m } = this.visualElement;
      m && m.setActive("whileDrag", !0);
    }, o = (f, d) => {
      const { dragPropagation: h, dragDirectionLock: p, onDirectionLock: y, onDrag: m } = this.getProps();
      if (!h && !this.openDragLock)
        return;
      const { offset: g } = d;
      if (p && this.currentDirection === null) {
        this.currentDirection = o0(g), this.currentDirection !== null && y && y(this.currentDirection);
        return;
      }
      this.updateAxis("x", d.point, g), this.updateAxis("y", d.point, g), this.visualElement.render(), m && m(f, d);
    }, a = (f, d) => this.stop(f, d), l = () => ke((f) => {
      var d;
      return this.getAnimationState(f) === "paused" && ((d = this.getAxisMotionValue(f).animation) === null || d === void 0 ? void 0 : d.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new $d(t, {
      onSessionStart: s,
      onStart: i,
      onMove: o,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      contextWindow: qd(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: i } = this.getProps();
    i && oe.postRender(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: s } = this.getProps();
    if (!r || !lr(t, s, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (o = Gb(o, this.constraints[t], this.elastic[t])), i.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    n && Ut(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && s ? this.constraints = Yb(s.layoutBox, n) : this.constraints = !1, this.elastic = Jb(r), i !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && ke((o) => {
      this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = Zb(s.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Ut(t))
      return !1;
    const r = t.current, { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const i = n0(r, s.root, this.visualElement.getTransformPagePoint());
    let o = qb(s.layout.layoutBox, i);
    if (n) {
      const a = n(Qb(o));
      this.hasMutatedConstraints = !!a, a && (o = Hd(a));
    }
    return o;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: s, dragTransition: i, dragSnapToOrigin: o, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = ke((f) => {
      if (!lr(f, n, this.currentDirection))
        return;
      let d = l && l[f] || {};
      o && (d = { min: 0, max: 0 });
      const h = s ? 200 : 1e6, p = s ? 40 : 1e7, y = {
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
    return Us(this.visualElement, t), r.start(ci(t, r, 0, n, this.visualElement, !1));
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
    const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), s = r[n];
    return s || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    ke((n) => {
      const { drag: r } = this.getProps();
      if (!lr(n, r, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, i = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: a } = s.layout.layoutBox[n];
        i.set(t[n] - ce(o, a, 0.5));
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
    if (!Ut(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    ke((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[o] = Xb({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), ke((o) => {
      if (!lr(o, t, null))
        return;
      const a = this.getAxisMotionValue(o), { min: l, max: c } = this.constraints[o];
      a.set(ce(l, c, s[o]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    r0.set(this.visualElement, this);
    const t = this.visualElement.current, n = Cn(t, "pointerdown", (l) => {
      const { drag: c, dragListener: f = !0 } = this.getProps();
      c && f && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Ut(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, i = s.addEventListener("measure", r);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), oe.read(r);
    const o = In(window, "resize", () => this.scalePositionWithinConstraints()), a = s.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (ke((f) => {
        const d = this.getAxisMotionValue(f);
        d && (this.originPoint[f] += l[f].translate, d.set(d.get() + l[f].translate));
      }), this.visualElement.render());
    });
    return () => {
      o(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: s = !1, dragConstraints: i = !1, dragElastic: o = Zs, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: s,
      dragConstraints: i,
      dragElastic: o,
      dragMomentum: a
    };
  }
}
function lr(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function o0(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class i0 extends wt {
  constructor(t) {
    super(t), this.removeGroupControls = Ne, this.removeListeners = Ne, this.controls = new s0(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ne;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ba = (e) => (t, n) => {
  e && oe.postRender(() => e(t, n));
};
class a0 extends wt {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ne;
  }
  onPointerDown(t) {
    this.session = new $d(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: qd(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: Ba(t),
      onStart: Ba(n),
      onMove: r,
      onEnd: (i, o) => {
        delete this.session, s && oe.postRender(() => s(i, o));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Cn(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const yr = {
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
function $a(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const gn = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (U.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = $a(e, t.target.x), r = $a(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, l0 = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, s = yt.parse(e);
    if (s.length > 5)
      return r;
    const i = yt.createTransformer(e), o = typeof s[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    s[0 + o] /= a, s[1 + o] /= l;
    const c = ce(a, l, 0.5);
    return typeof s[2 + o] == "number" && (s[2 + o] /= c), typeof s[3 + o] == "number" && (s[3 + o] /= c), i(s);
  }
};
class c0 extends xf {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: s } = this.props, { projection: i } = t;
    Ev(u0), i && (n.group && n.group.add(i), r && r.register && s && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), yr.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: s, isPresent: i } = this.props, o = r.projection;
    return o && (o.isPresent = i, s || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? o.promote() : o.relegate() || oe.postRender(() => {
      const a = o.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Fo.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: s } = t;
    s && (s.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(s), r && r.deregister && r.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Xd(e) {
  const [t, n] = ku(), r = Ce(jo);
  return u.jsx(c0, { ...e, layoutGroup: r, switchLayoutGroup: Ce(Bu), isPresent: t, safeToRemove: n });
}
const u0 = {
  borderRadius: {
    ...gn,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: gn,
  borderTopRightRadius: gn,
  borderBottomLeftRadius: gn,
  borderBottomRightRadius: gn,
  boxShadow: l0
};
function d0(e, t, n) {
  const r = De(e) ? e : Rn(e);
  return r.start(ci("", r, t, n)), r.animation;
}
function f0(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const h0 = (e, t) => e.depth - t.depth;
class p0 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Jo(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Qo(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(h0), this.isDirty = !1, this.children.forEach(t);
  }
}
function m0(e, t) {
  const n = Ke.now(), r = ({ timestamp: s }) => {
    const i = s - n;
    i >= t && (gt(r), e(i - t));
  };
  return oe.read(r, !0), () => gt(r);
}
const Zd = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], g0 = Zd.length, za = (e) => typeof e == "string" ? parseFloat(e) : e, Ua = (e) => typeof e == "number" || U.test(e);
function y0(e, t, n, r, s, i) {
  s ? (e.opacity = ce(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    v0(r)
  ), e.opacityExit = ce(t.opacity !== void 0 ? t.opacity : 1, 0, x0(r))) : i && (e.opacity = ce(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let o = 0; o < g0; o++) {
    const a = `border${Zd[o]}Radius`;
    let l = Wa(t, a), c = Wa(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || Ua(l) === Ua(c) ? (e[a] = Math.max(ce(za(l), za(c), r), 0), (He.test(c) || He.test(l)) && (e[a] += "%")) : e[a] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = ce(t.rotate || 0, n.rotate || 0, r));
}
function Wa(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const v0 = /* @__PURE__ */ Jd(0, 0.5, gd), x0 = /* @__PURE__ */ Jd(0.5, 0.95, Ne);
function Jd(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ en(e, t, r));
}
function Ha(e, t) {
  e.min = t.min, e.max = t.max;
}
function Me(e, t) {
  Ha(e.x, t.x), Ha(e.y, t.y);
}
function Ka(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Ga(e, t, n, r, s) {
  return e -= t, e = Lr(e, 1 / n, r), s !== void 0 && (e = Lr(e, 1 / s, r)), e;
}
function b0(e, t = 0, n = 1, r = 0.5, s, i = e, o = e) {
  if (He.test(t) && (t = parseFloat(t), t = ce(o.min, o.max, t / 100) - o.min), typeof t != "number")
    return;
  let a = ce(i.min, i.max, r);
  e === i && (a -= t), e.min = Ga(e.min, t, n, a, s), e.max = Ga(e.max, t, n, a, s);
}
function Ya(e, t, [n, r, s], i, o) {
  b0(e, t[n], t[r], t[s], t.scale, i, o);
}
const w0 = ["x", "scaleX", "originX"], S0 = ["y", "scaleY", "originY"];
function qa(e, t, n, r) {
  Ya(e.x, t, w0, n ? n.x : void 0, r ? r.x : void 0), Ya(e.y, t, S0, n ? n.y : void 0, r ? r.y : void 0);
}
function Xa(e) {
  return e.translate === 0 && e.scale === 1;
}
function Qd(e) {
  return Xa(e.x) && Xa(e.y);
}
function Za(e, t) {
  return e.min === t.min && e.max === t.max;
}
function C0(e, t) {
  return Za(e.x, t.x) && Za(e.y, t.y);
}
function Ja(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function ef(e, t) {
  return Ja(e.x, t.x) && Ja(e.y, t.y);
}
function Qa(e) {
  return Ee(e.x) / Ee(e.y);
}
function el(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class D0 {
  constructor() {
    this.members = [];
  }
  add(t) {
    Jo(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Qo(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((s) => t === s);
    if (n === 0)
      return !1;
    let r;
    for (let s = n; s >= 0; s--) {
      const i = this.members[s];
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
      const { crossfade: s } = t.options;
      s === !1 && r.hide();
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
function T0(e, t, n) {
  let r = "";
  const s = e.x.translate / t.x, i = e.y.translate / t.y, o = (n == null ? void 0 : n.z) || 0;
  if ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: c, rotate: f, rotateX: d, rotateY: h, skewX: p, skewY: y } = n;
    c && (r = `perspective(${c}px) ${r}`), f && (r += `rotate(${f}deg) `), d && (r += `rotateX(${d}deg) `), h && (r += `rotateY(${h}deg) `), p && (r += `skewX(${p}deg) `), y && (r += `skewY(${y}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Pt = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, bn = typeof window < "u" && window.MotionDebug !== void 0, Ss = ["", "X", "Y", "Z"], P0 = { visibility: "hidden" }, tl = 1e3;
let A0 = 0;
function Cs(e, t, n, r) {
  const { latestValues: s } = t;
  s[e] && (n[e] = s[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function tf(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = cd(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", oe, !(s || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && tf(r);
}
function nf({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: s }) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      this.id = A0++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, bn && (Pt.totalNodes = Pt.resolvedTargetDeltas = Pt.recalculatedProjection = 0), this.nodes.forEach(j0), this.nodes.forEach(I0), this.nodes.forEach(O0), this.nodes.forEach(M0), bn && window.MotionDebug.record(Pt);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new p0());
    }
    addEventListener(o, a) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new ei()), this.eventHandlers.get(o).add(a);
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    /**
     * Lifecycles
     */
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = f0(o), this.instance = o;
      const { layoutId: l, layout: c, visualElement: f } = this.options;
      if (f && !f.current && f.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const h = () => this.root.updateBlockedByResize = !1;
        e(o, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = m0(h, 250), yr.hasAnimatedSinceResize && (yr.hasAnimatedSinceResize = !1, this.nodes.forEach(rl));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && f && (l || c) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: h, hasRelativeTargetChanged: p, layout: y }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const m = this.options.transition || f.getDefaultTransition() || $0, { onLayoutAnimationStart: g, onLayoutAnimationComplete: v } = f.getProps(), b = !this.targetLayout || !ef(this.targetLayout, y) || p, w = !h && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || w || h && (b || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, w);
          const S = {
            ...Yo(m, "layout"),
            onPlay: g,
            onComplete: v
          };
          (f.shouldReduceMotion || this.options.layoutRoot) && (S.delay = 0, S.type = !1), this.startAnimation(S);
        } else
          h || rl(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = y;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, gt(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(V0), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && tf(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(nl);
        return;
      }
      this.isUpdating || this.nodes.forEach(R0), this.isUpdating = !1, this.nodes.forEach(L0), this.nodes.forEach(N0), this.nodes.forEach(E0), this.clearAllSnapshots();
      const a = Ke.now();
      xe.delta = st(0, 1e3 / 60, a - xe.timestamp), xe.timestamp = a, xe.isProcessing = !0, hs.update.process(xe), hs.preRender.process(xe), hs.render.process(xe), xe.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Fo.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(k0), this.sharedNodes.forEach(F0);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, oe.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      oe.postRender(() => {
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
      const o = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = pe(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0);
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1), a) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!s)
        return;
      const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Qd(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, f = c !== this.prevTransformTemplateValue;
      o && (a || Tt(this.latestValues) || f) && (s(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return o && (l = this.removeTransform(l)), z0(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var o;
      const { visualElement: a } = this.options;
      if (!a)
        return pe();
      const l = a.measureViewportBox();
      if (!(((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) || this.path.some(U0))) {
        const { scroll: f } = this.root;
        f && (Kt(l.x, f.offset.x), Kt(l.y, f.offset.y));
      }
      return l;
    }
    removeElementScroll(o) {
      var a;
      const l = pe();
      if (Me(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c], { scroll: d, options: h } = f;
        f !== this.root && d && h.layoutScroll && (d.wasRoot && Me(l, o), Kt(l.x, d.offset.x), Kt(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(o, a = !1) {
      const l = pe();
      Me(l, o);
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        !a && f.options.layoutScroll && f.scroll && f !== f.root && Gt(l, {
          x: -f.scroll.offset.x,
          y: -f.scroll.offset.y
        }), Tt(f.latestValues) && Gt(l, f.latestValues);
      }
      return Tt(this.latestValues) && Gt(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = pe();
      Me(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Tt(c.latestValues))
          continue;
        Js(c.latestValues) && c.updateSnapshot();
        const f = pe(), d = c.measurePageBox();
        Me(f, d), qa(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, f);
      }
      return Tt(this.latestValues) && qa(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== xe.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (!(o || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: d, layoutId: h } = this.options;
      if (!(!this.layout || !(d || h))) {
        if (this.resolvedRelativeTargetAt = xe.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = pe(), this.relativeTargetOrigin = pe(), Tn(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), Me(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = pe(), this.targetWithTransforms = pe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Kb(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Me(this.target, this.layout.layoutBox), Gd(this.target, this.targetDelta)) : Me(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = pe(), this.relativeTargetOrigin = pe(), Tn(this.relativeTargetOrigin, this.target, p.target), Me(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          bn && Pt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Js(this.parent.latestValues) || Kd(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var o;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let c = !0;
      if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === xe.timestamp && (c = !1), c)
        return;
      const { layout: f, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(f || d))
        return;
      Me(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, p = this.treeScale.y;
      t0(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = pe());
      const { target: y } = a;
      if (!y) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ka(this.prevProjectionDelta.x, this.projectionDelta.x), Ka(this.prevProjectionDelta.y, this.projectionDelta.y)), Dn(this.projectionDelta, this.layoutCorrected, y, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== p || !el(this.projectionDelta.x, this.prevProjectionDelta.x) || !el(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", y)), bn && Pt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), o) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Ht(), this.projectionDelta = Ht(), this.projectionDeltaWithTransform = Ht();
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, f = { ...this.latestValues }, d = Ht();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const h = pe(), p = l ? l.source : void 0, y = this.layout ? this.layout.source : void 0, m = p !== y, g = this.getStack(), v = !g || g.members.length <= 1, b = !!(m && !v && this.options.crossfade === !0 && !this.path.some(B0));
      this.animationProgress = 0;
      let w;
      this.mixTargetDelta = (S) => {
        const C = S / 1e3;
        sl(d.x, o.x, C), sl(d.y, o.y, C), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Tn(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), _0(this.relativeTarget, this.relativeTargetOrigin, h, C), w && C0(this.relativeTarget, w) && (this.isProjectionDirty = !1), w || (w = pe()), Me(w, this.relativeTarget)), m && (this.animationValues = f, y0(f, c, this.latestValues, C, b, v)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (gt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = oe.update(() => {
        yr.hasAnimatedSinceResize = !0, this.currentAnimation = d0(0, tl, {
          ...o,
          onUpdate: (a) => {
            this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
          },
          onComplete: () => {
            o.onComplete && o.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const o = this.getStack();
      o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(tl), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: f } = o;
      if (!(!a || !l || !c)) {
        if (this !== o && this.layout && c && rf(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || pe();
          const d = Ee(this.layout.layoutBox.x);
          l.x.min = o.target.x.min, l.x.max = l.x.min + d;
          const h = Ee(this.layout.layoutBox.y);
          l.y.min = o.target.y.min, l.y.max = l.y.min + h;
        }
        Me(a, l), Gt(a, f), Dn(this.projectionDeltaWithTransform, this.layoutCorrected, a, f);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new D0()), this.sharedNodes.get(o).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o)
        return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), o && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o)
        return;
      let a = !1;
      const { latestValues: l } = o;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const c = {};
      l.z && Cs("z", o, c, this.animationValues);
      for (let f = 0; f < Ss.length; f++)
        Cs(`rotate${Ss[f]}`, o, c, this.animationValues), Cs(`skew${Ss[f]}`, o, c, this.animationValues);
      o.render();
      for (const f in c)
        o.setStaticValue(f, c[f]), this.animationValues && (this.animationValues[f] = c[f]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return P0;
      const c = {
        visibility: ""
      }, f = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = mr(o == null ? void 0 : o.pointerEvents) || "", c.transform = f ? f(this.latestValues, "") : "none", c;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const m = {};
        return this.options.layoutId && (m.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, m.pointerEvents = mr(o == null ? void 0 : o.pointerEvents) || ""), this.hasProjected && !Tt(this.latestValues) && (m.transform = f ? f({}, "") : "none", this.hasProjected = !1), m;
      }
      const h = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), c.transform = T0(this.projectionDeltaWithTransform, this.treeScale, h), f && (c.transform = f(h, c.transform));
      const { x: p, y } = this.projectionDelta;
      c.transformOrigin = `${p.origin * 100}% ${y.origin * 100}% 0`, d.animationValues ? c.opacity = d === this ? (l = (a = h.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : c.opacity = d === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
      for (const m in Er) {
        if (h[m] === void 0)
          continue;
        const { correct: g, applyTo: v } = Er[m], b = c.transform === "none" ? h[m] : g(h[m], d);
        if (v) {
          const w = v.length;
          for (let S = 0; S < w; S++)
            c[v[S]] = b;
        } else
          c[m] = b;
      }
      return this.options.layoutId && (c.pointerEvents = d === this ? mr(o == null ? void 0 : o.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(nl), this.root.sharedNodes.clear();
    }
  };
}
function N0(e) {
  e.updateLayout();
}
function E0(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout, { animationType: i } = e.options, o = n.source !== e.layout.source;
    i === "size" ? ke((d) => {
      const h = o ? n.measuredBox[d] : n.layoutBox[d], p = Ee(h);
      h.min = r[d].min, h.max = h.min + p;
    }) : rf(i, n.layoutBox, r) && ke((d) => {
      const h = o ? n.measuredBox[d] : n.layoutBox[d], p = Ee(r[d]);
      h.max = h.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const a = Ht();
    Dn(a, r, n.layoutBox);
    const l = Ht();
    o ? Dn(l, e.applyTransform(s, !0), n.measuredBox) : Dn(l, r, n.layoutBox);
    const c = !Qd(a);
    let f = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: h, layout: p } = d;
        if (h && p) {
          const y = pe();
          Tn(y, n.layoutBox, h.layoutBox);
          const m = pe();
          Tn(m, r, p.layoutBox), ef(y, m) || (f = !0), d.options.layoutRoot && (e.relativeTarget = m, e.relativeTargetOrigin = y, e.relativeParent = d);
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
function j0(e) {
  bn && Pt.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function M0(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function k0(e) {
  e.clearSnapshot();
}
function nl(e) {
  e.clearMeasurements();
}
function R0(e) {
  e.isLayoutDirty = !1;
}
function L0(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function rl(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function I0(e) {
  e.resolveTargetDelta();
}
function O0(e) {
  e.calcProjection();
}
function V0(e) {
  e.resetSkewAndRotation();
}
function F0(e) {
  e.removeLeadSnapshot();
}
function sl(e, t, n) {
  e.translate = ce(t.translate, 0, n), e.scale = ce(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function ol(e, t, n, r) {
  e.min = ce(t.min, n.min, r), e.max = ce(t.max, n.max, r);
}
function _0(e, t, n, r) {
  ol(e.x, t.x, n.x, r), ol(e.y, t.y, n.y, r);
}
function B0(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const $0 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, il = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), al = il("applewebkit/") && !il("chrome/") ? Math.round : Ne;
function ll(e) {
  e.min = al(e.min), e.max = al(e.max);
}
function z0(e) {
  ll(e.x), ll(e.y);
}
function rf(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Hb(Qa(t), Qa(n), 0.2);
}
function U0(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const W0 = nf({
  attachResizeListener: (e, t) => In(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Ds = {
  current: void 0
}, sf = nf({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Ds.current) {
      const e = new W0({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Ds.current = e;
    }
    return Ds.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), H0 = {
  pan: {
    Feature: a0
  },
  drag: {
    Feature: i0,
    ProjectionNode: sf,
    MeasureLayout: Xd
  }
};
function cl(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n, i = r[s];
  i && oe.postRender(() => i(t, Un(t)));
}
class K0 extends wt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = Hv(t, (n) => (cl(this.node, n, "Start"), (r) => cl(this.node, r, "End"))));
  }
  unmount() {
  }
}
class G0 extends wt {
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
    this.unmount = zn(In(this.node.current, "focus", () => this.onFocus()), In(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function ul(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n), i = r[s];
  i && oe.postRender(() => i(t, Un(t)));
}
class Y0 extends wt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = qv(t, (n) => (ul(this.node, n, "Start"), (r, { success: s }) => ul(this.node, r, s ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const eo = /* @__PURE__ */ new WeakMap(), Ts = /* @__PURE__ */ new WeakMap(), q0 = (e) => {
  const t = eo.get(e.target);
  t && t(e);
}, X0 = (e) => {
  e.forEach(q0);
};
function Z0({ root: e, ...t }) {
  const n = e || document;
  Ts.has(n) || Ts.set(n, {});
  const r = Ts.get(n), s = JSON.stringify(t);
  return r[s] || (r[s] = new IntersectionObserver(X0, { root: e, ...t })), r[s];
}
function J0(e, t, n) {
  const r = Z0(t);
  return eo.set(e, n), r.observe(e), () => {
    eo.delete(e), r.unobserve(e);
  };
}
const Q0 = {
  some: 0,
  all: 1
};
class ew extends wt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: s = "some", once: i } = t, o = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof s == "number" ? s : Q0[s]
    }, a = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, i && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: f, onViewportLeave: d } = this.node.getProps(), h = c ? f : d;
      h && h(l);
    };
    return J0(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(tw(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function tw({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const nw = {
  inView: {
    Feature: ew
  },
  tap: {
    Feature: Y0
  },
  focus: {
    Feature: G0
  },
  hover: {
    Feature: K0
  }
}, rw = {
  layout: {
    ProjectionNode: sf,
    MeasureLayout: Xd
  }
}, to = { current: null }, of = { current: !1 };
function sw() {
  if (of.current = !0, !!Ro)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => to.current = e.matches;
      e.addListener(t), t();
    } else
      to.current = !1;
}
const ow = [...jd, Se, yt], iw = (e) => ow.find(Ed(e)), dl = /* @__PURE__ */ new WeakMap();
function aw(e, t, n) {
  for (const r in t) {
    const s = t[r], i = n[r];
    if (De(s))
      e.addValue(r, s);
    else if (De(i))
      e.addValue(r, Rn(s, { owner: e }));
    else if (i !== s)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, Rn(o !== void 0 ? o : s, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const fl = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class lw {
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
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: s, blockInitialAnimation: i, visualState: o }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = ii, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const p = Ke.now();
      this.renderScheduledAt < p && (this.renderScheduledAt = p, oe.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: c, onUpdate: f } = o;
    this.onUpdate = f, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = s, this.options = a, this.blockInitialAnimation = !!i, this.isControllingVariants = Xr(n), this.isVariantNode = Fu(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: d, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const p in h) {
      const y = h[p];
      l[p] !== void 0 && De(y) && y.set(l[p], !1);
    }
  }
  mount(t) {
    this.current = t, dl.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), of.current || sw(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : to.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    dl.delete(this.current), this.projection && this.projection.unmount(), gt(this.notifyUpdate), gt(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const r = Vt.has(t), s = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && oe.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
    }), i = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      s(), i(), o && o(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in tn) {
      const n = tn[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: s } = n;
      if (!this.features[t] && s && r(this.props) && (this.features[t] = new s(this)), this.features[t]) {
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : pe();
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
    for (let r = 0; r < fl.length; r++) {
      const s = fl[r];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const i = "on" + s, o = t[i];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    this.prevMotionValues = aw(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return r === void 0 && n !== void 0 && (r = Rn(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let s = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return s != null && (typeof s == "string" && (Ad(s) || vd(s)) ? s = parseFloat(s) : !iw(s) && yt.test(n) && (s = Dd(t, n)), this.setBaseTarget(t, De(s) ? s.get() : s)), De(s) ? s.get() : s;
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
    let s;
    if (typeof r == "string" || typeof r == "object") {
      const o = Bo(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      o && (s = o[t]);
    }
    if (r && s !== void 0)
      return s;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !De(i) ? i : this.initialValues[t] !== void 0 && s === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new ei()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class af extends lw {
  constructor() {
    super(...arguments), this.KeyframeResolver = Md;
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
    De(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function cw(e) {
  return window.getComputedStyle(e);
}
class uw extends af {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Gu;
  }
  readValueFromInstance(t, n) {
    if (Vt.has(n)) {
      const r = oi(n);
      return r && r.default || 0;
    } else {
      const r = cw(t), s = (Wu(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Yd(t, n);
  }
  build(t, n, r) {
    Uo(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Go(t, n, r);
  }
}
class dw extends af {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = pe;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Vt.has(n)) {
      const r = oi(n);
      return r && r.default || 0;
    }
    return n = Yu.has(n) ? n : Vo(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Zu(t, n, r);
  }
  build(t, n, r) {
    Wo(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, s) {
    qu(t, n, r, s);
  }
  mount(t) {
    this.isSVGTag = Ko(t.tagName), super.mount(t);
  }
}
const fw = (e, t) => _o(e) ? new dw(t) : new uw(t, {
  allowProjection: e !== ml
}), hw = /* @__PURE__ */ Fv({
  ...Ob,
  ...nw,
  ...H0,
  ...rw
}, fw), cr = /* @__PURE__ */ Qy(hw);
function Ue(e = "default") {
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
function lf(e = "default") {
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
function vt(e, t = {}) {
  return e && t[e] ? t[e] : "default";
}
function cf(e) {
  const t = {};
  return !e || !Array.isArray(e) || e.forEach((n) => {
    n.variant && (t[n.slug] = n.variant);
  }), t;
}
function pw({
  events: e,
  eventMetadata: t,
  categoryMappings: n,
  onDateClick: r,
  onEventClick: s,
  onMonthChange: i,
  currentDate: o,
  displayMode: a = "popover",
  sidebarPosition: l = "right"
}) {
  const [c, f] = H(/* @__PURE__ */ new Date()), d = o || c, [h, p] = H(0), [y, m] = H(null), [g, v] = H(null), [b, w] = H(null), S = a === "popover", C = a === "dropdown", D = a === "sidebar", P = (k, E) => {
    const B = new Date(E, k + 1, 0).getDate();
    return Array.from({ length: B }, (Q, X) => ({ day: X + 1 }));
  }, T = (k, E) => e.filter((Q) => oo(Q, new Date(E.getFullYear(), E.getMonth(), k))), R = (k) => k.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  });
  z.useEffect(() => {
    if (!D || b && b.getFullYear() === d.getFullYear() && b.getMonth() === d.getMonth())
      return;
    const E = /* @__PURE__ */ new Date();
    let B;
    if (E.getFullYear() === d.getFullYear() && E.getMonth() === d.getMonth())
      B = E.getDate();
    else {
      const Q = e.map((X) => new Date(X.startDate)).filter((X) => X.getFullYear() === d.getFullYear() && X.getMonth() === d.getMonth()).sort((X, ge) => X.getTime() - ge.getTime());
      B = Q.length > 0 ? Q[0].getDate() : 1;
    }
    w(new Date(d.getFullYear(), d.getMonth(), B));
  }, [D, d, e, b]), z.useEffect(() => {
    C || v(null);
  }, [C, d]);
  const F = () => {
    p(-1);
    const k = new Date(d.getFullYear(), d.getMonth() - 1, 1);
    o || f(k), i == null || i(k);
  }, N = () => {
    p(1);
    const k = new Date(d.getFullYear(), d.getMonth() + 1, 1);
    o || f(k), i == null || i(k);
  }, j = P(d.getMonth(), d.getFullYear()), L = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], K = new Date(d.getFullYear(), d.getMonth(), 1).getDay(), I = new Date(d.getFullYear(), d.getMonth() - 1, 1), _ = new Date(I.getFullYear(), I.getMonth() + 1, 0).getDate(), O = ({ events: k }) => {
    const E = k.reduce((B, Q) => {
      const X = t[Q.id], ge = (X == null ? void 0 : X.category) || "uncategorized";
      return B[ge] || (B[ge] = []), B[ge].push(Q), B;
    }, {});
    return /* @__PURE__ */ u.jsx("div", { className: "flex flex-wrap gap-1", children: Object.entries(E).map(([B, Q]) => {
      const X = vt(B === "uncategorized" ? null : B, n), ge = Ue(X);
      return /* @__PURE__ */ u.jsx(
        "div",
        {
          className: `${ge} text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium shadow-sm`,
          title: `${Q.length} ${B} event${Q.length > 1 ? "s" : ""}: ${Q.map((te) => te.title).join(", ")}`,
          children: Q.length
        },
        B
      );
    }) });
  }, M = (k) => k.map((E) => {
    const B = t[E.id], Q = vt(B == null ? void 0 : B.category, n), ge = Ue(Q).replace("bg-", "after:bg-"), te = new Date(E.startDate), ae = new Date(E.endDate), Be = !Number.isNaN(te.getTime()) && !Number.isNaN(ae.getTime()), qe = Be && te.getTime() === ae.getTime(), St = Be ? `${R(te)}${qe ? "" : ` - ${R(ae)}`}` : null;
    return /* @__PURE__ */ u.jsxs(
      "div",
      {
        role: "button",
        tabIndex: 0,
        "aria-label": un(E.title, E.status),
        onKeyDown: (Xe) => {
          (Xe.key === "Enter" || Xe.key === " ") && (Xe.preventDefault(), Xe.stopPropagation(), s == null || s(E));
        },
        className: `bg-card dark:bg-card relative rounded-md p-2 pl-6 text-xs text-left w-full after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary hover:bg-muted dark:hover:bg-muted transition-colors border border-gray-200 dark:border-border shadow-sm ${ge}`,
        onClick: (Xe) => {
          Xe.stopPropagation(), s == null || s(E);
        },
        children: [
          /* @__PURE__ */ u.jsxs("div", { className: "font-medium text-[13px] text-gray-900 dark:text-foreground leading-tight", children: [
            /* @__PURE__ */ u.jsx(It, { status: E.status, className: "mr-1" }),
            /* @__PURE__ */ u.jsx("span", { className: Ot(E.status), children: E.title })
          ] }),
          St && /* @__PURE__ */ u.jsx("div", { className: "mt-0.5 text-[11px] text-gray-900 dark:text-foreground", children: St })
        ]
      },
      E.id
    );
  }), Z = z.useMemo(() => new Date(d.getFullYear(), d.getMonth(), 1), [d]), Y = !!(D && b && b.getFullYear() === d.getFullYear() && b.getMonth() === d.getMonth()), ve = D && Y && b ? b : Z, he = ve.getDate(), le = ve, be = D ? T(he, d) : [], ie = le.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  }), V = /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4", children: [
      /* @__PURE__ */ u.jsxs(
        cr.h2,
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
        /* @__PURE__ */ u.jsxs(Je, { variant: "outline", onClick: F, className: "gap-2", children: [
          /* @__PURE__ */ u.jsx(Oc, { className: "h-4 w-4" }),
          "Prev"
        ] }),
        /* @__PURE__ */ u.jsxs(Je, { variant: "outline", onClick: N, className: "gap-2", children: [
          "Next",
          /* @__PURE__ */ u.jsx(Vc, { className: "h-4 w-4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "grid grid-cols-7 gap-1 sm:gap-2 mb-4", children: L.map((k, E) => /* @__PURE__ */ u.jsx(
      "div",
      {
        className: "text-left py-2 text-lg tracking-tighter font-medium text-gray-900 dark:text-foreground",
        children: k
      },
      E
    )) }),
    /* @__PURE__ */ u.jsx(Ji, { initial: !1, custom: h, mode: "wait", children: /* @__PURE__ */ u.jsxs(
      cr.div,
      {
        custom: h,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        className: "grid grid-cols-7 gap-1 sm:gap-2",
        children: [
          Array.from({ length: K }).map((k, E) => /* @__PURE__ */ u.jsx("div", { className: "h-[150px] opacity-50 p-4", children: /* @__PURE__ */ u.jsx("div", { className: "font-semibold relative text-3xl mb-1 text-gray-400 dark:text-neutral-500", children: _ - K + E + 1 }) }, `offset-${E}`)),
          j.map((k) => {
            const E = T(k.day, d), B = (/* @__PURE__ */ new Date()).getDate() === k.day && (/* @__PURE__ */ new Date()).getMonth() === d.getMonth() && (/* @__PURE__ */ new Date()).getFullYear() === d.getFullYear(), X = (K + k.day - 1) % 7 >= 5, ge = D && Y && he === k.day;
            return /* @__PURE__ */ u.jsxs(
              cr.div,
              {
                className: "hover:z-50 border-none h-[150px] rounded group flex flex-col relative",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -20 },
                transition: { duration: 0.3 },
                onMouseEnter: () => {
                  S && m(k.day);
                },
                onMouseLeave: () => {
                  S && m(null);
                },
                children: [
                  /* @__PURE__ */ u.jsxs(
                    ao,
                    {
                      role: E.length ? "button" : void 0,
                      tabIndex: E.length ? 0 : void 0,
                      "aria-label": `Events on ${new Date(d.getFullYear(), d.getMonth(), k.day).toLocaleDateString()}`,
                      onKeyDown: (te) => {
                        te.target === te.currentTarget && E.length && (te.key === "Enter" || te.key === " ") && (te.preventDefault(), te.currentTarget.click());
                      },
                      className: `bg-white dark:bg-card border border-gray-200 dark:border-border shadow-md overflow-hidden relative flex p-4 h-full transition-shadow day-card ${E.length > 0 ? "cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary hover:shadow-lg hover:bg-muted dark:hover:bg-muted" : "cursor-default"} ${B ? "!border-red-500 !border-2" : ""} ${ge && !B ? "ring-2 ring-blue-500 dark:ring-primary" : ""}`,
                      onClick: E.length > 0 ? () => {
                        D && w(new Date(d.getFullYear(), d.getMonth(), k.day)), r == null || r(new Date(d.getFullYear(), d.getMonth(), k.day));
                      } : void 0,
                      children: [
                        /* @__PURE__ */ u.jsx("div", { className: `font-semibold relative text-3xl mb-1 ${E.length > 0 ? "text-gray-900 dark:text-foreground" : "text-gray-500 dark:text-muted-foreground"}`, children: k.day }),
                        /* @__PURE__ */ u.jsxs("div", { className: "flex-grow flex flex-col gap-2 w-full", children: [
                          /* @__PURE__ */ u.jsx(Ji, { mode: "wait", children: (E == null ? void 0 : E.length) > 0 && /* @__PURE__ */ u.jsx(
                            cr.div,
                            {
                              initial: { opacity: 0, y: 20 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: -20 },
                              transition: { duration: 0.3 },
                              children: /* @__PURE__ */ u.jsx(O, { events: E })
                            },
                            E[0].id
                          ) }),
                          C && E.length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "mt-auto", children: [
                            /* @__PURE__ */ u.jsxs(
                              "button",
                              {
                                type: "button",
                                className: "w-full flex items-center justify-between gap-2 rounded-md bg-muted/70 dark:bg-muted px-2 py-1 text-xs font-medium text-foreground transition-colors hover:bg-muted",
                                onClick: (te) => {
                                  te.stopPropagation(), v((ae) => ae === k.day ? null : k.day);
                                },
                                children: [
                                  /* @__PURE__ */ u.jsx("span", { children: g === k.day ? "Hide events" : "Show events" }),
                                  /* @__PURE__ */ u.jsx(
                                    "svg",
                                    {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      className: `h-3 w-3 transition-transform ${g === k.day ? "rotate-180" : ""}`,
                                      fill: "none",
                                      children: /* @__PURE__ */ u.jsx("polyline", { points: "6 9 12 15 18 9" })
                                    }
                                  )
                                ]
                              }
                            ),
                            g === k.day && /* @__PURE__ */ u.jsx("div", { className: "mt-2 space-y-1.5", children: M(E) })
                          ] })
                        ] })
                      ]
                    }
                  ),
                  S && y === k.day && E.length > 0 && /* @__PURE__ */ u.jsxs(
                    "div",
                    {
                      className: `absolute top-full z-50 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg shadow-lg p-3 w-80 ${X ? "right-0" : "left-0"}`,
                      onMouseEnter: () => {
                        S && m(k.day);
                      },
                      onMouseLeave: () => {
                        S && m(null);
                      },
                      children: [
                        /* @__PURE__ */ u.jsxs("div", { className: "text-sm font-semibold text-gray-900 dark:text-foreground mb-2", children: [
                          E.length,
                          " event",
                          E.length > 1 ? "s" : ""
                        ] }),
                        /* @__PURE__ */ u.jsx("div", { className: "space-y-1.5", children: M(E) })
                      ]
                    }
                  )
                ]
              },
              k.day
            );
          }),
          (() => {
            const E = (K + j.length) % 7, B = E === 0 ? 0 : 7 - E;
            return Array.from({ length: B }).map((Q, X) => /* @__PURE__ */ u.jsx("div", { className: "h-[150px] opacity-50 p-4", children: /* @__PURE__ */ u.jsx("div", { className: "font-semibold relative text-3xl mb-1 text-gray-400 dark:text-neutral-500", children: X + 1 }) }, `next-${X}`));
          })()
        ]
      },
      `${d.getFullYear()}-${d.getMonth()}`
    ) })
  ] }), q = /* @__PURE__ */ u.jsx("div", { className: D ? "flex-1" : void 0, children: D ? /* @__PURE__ */ u.jsx("div", { className: "rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-card shadow-sm p-4 lg:p-6", children: V }) : V }), re = D ? /* @__PURE__ */ u.jsx("aside", { className: "md:w-72 w-full md:flex-shrink-0", children: /* @__PURE__ */ u.jsxs("div", { className: "rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-card shadow-md p-4", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ u.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-500 dark:text-muted-foreground", children: "Selected Day" }),
      /* @__PURE__ */ u.jsx("div", { className: "text-base font-semibold text-gray-900 dark:text-foreground", children: ie })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "mt-3 space-y-1.5", children: be.length > 0 ? M(be) : /* @__PURE__ */ u.jsx("div", { className: "rounded-md border border-dashed border-gray-200 dark:border-border bg-gray-50 dark:bg-card px-3 py-4 text-xs text-gray-600 dark:text-muted-foreground", children: "No events scheduled for this day." }) })
  ] }) }) : null;
  return /* @__PURE__ */ u.jsxs("div", { className: D ? "flex flex-col gap-6 md:flex-row md:items-start" : "", children: [
    D && l === "left" && re,
    q,
    D && l === "right" && re
  ] });
}
function mw({ events: e, eventMetadata: t, categoryMappings: n, currentDate: r, onDateChange: s, onEventClick: i }) {
  const a = ((h) => {
    const p = new Date(h);
    return p.setDate(h.getDate() - h.getDay()), Array.from({ length: 7 }, (y, m) => {
      const g = new Date(p);
      return g.setDate(p.getDate() + m), g;
    });
  })(r), l = Array.from({ length: 24 }, (h, p) => p), c = (h) => e.filter((p) => oo(p, h)), f = (h) => {
    const p = new Date(r);
    p.setDate(r.getDate() + (h === "next" ? 7 : -7)), s(p);
  }, d = (h, p, y, m) => {
    const [g, v] = xr(h, m), b = v - g, w = p.filter((T) => {
      const [R, F] = xr(T, m);
      return g < F && v > R;
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
          children: /* @__PURE__ */ u.jsx(Fc, { className: "h-5 w-5" })
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
          children: /* @__PURE__ */ u.jsx(_c, { className: "h-5 w-5" })
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
              const v = t[m.id], b = vt(v == null ? void 0 : v.category, n), w = lf(b), S = d(m, y, g, h);
              return /* @__PURE__ */ u.jsxs(
                "div",
                {
                  role: "button",
                  tabIndex: 0,
                  "aria-label": un(m.title, m.status),
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
                    /* @__PURE__ */ u.jsxs("div", { className: "font-medium leading-tight truncate text-sm", children: [
                      /* @__PURE__ */ u.jsx(It, { status: m.status, className: "mr-1" }),
                      /* @__PURE__ */ u.jsx("span", { className: Ot(m.status), children: m.title })
                    ] }),
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
function gw({ events: e, eventMetadata: t, categoryMappings: n, currentDate: r, onDateChange: s, onEventClick: i }) {
  const o = Array.from({ length: 24 }, (d, h) => h), a = () => e.filter((d) => oo(d, r)), l = (d) => {
    const h = new Date(r);
    h.setDate(r.getDate() + (d === "next" ? 1 : -1)), s(h);
  }, c = (d, h, p) => {
    const [y, m] = xr(d, r), g = m - y, v = h.filter((D) => {
      const [P, T] = xr(D, r);
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
          children: /* @__PURE__ */ u.jsx(Fc, { className: "h-5 w-5" })
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
          children: /* @__PURE__ */ u.jsx(_c, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden", children: /* @__PURE__ */ u.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ u.jsx("div", { className: "w-20 border-r border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700", children: o.map((d) => /* @__PURE__ */ u.jsx("div", { className: "h-[80px] p-3 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600 flex items-start", children: d === 0 ? "12 AM" : d === 12 ? "12 PM" : d > 12 ? `${d - 12} PM` : `${d} AM` }, d)) }),
      /* @__PURE__ */ u.jsxs("div", { className: "flex-1 relative", children: [
        o.map((d) => /* @__PURE__ */ u.jsx("div", { className: "h-[80px] border-b border-gray-200 dark:border-gray-600" }, d)),
        f.map((d, h) => {
          const p = t[d.id], y = vt(p == null ? void 0 : p.category, n), m = lf(y), g = c(d, f);
          return /* @__PURE__ */ u.jsxs(
            "div",
            {
              role: "button",
              tabIndex: 0,
              "aria-label": un(d.title, d.status),
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
                /* @__PURE__ */ u.jsxs("div", { className: "font-semibold leading-tight truncate", children: [
                  /* @__PURE__ */ u.jsx(It, { status: d.status, className: "mr-1" }),
                  /* @__PURE__ */ u.jsx("span", { className: Ot(d.status), children: d.title })
                ] }),
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
                    /* @__PURE__ */ u.jsx(Vn, { className: "h-2.5 w-2.5" }),
                    /* @__PURE__ */ u.jsx("span", { className: "truncate", children: p.location })
                  ] }),
                  p.organization && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ u.jsx(Lg, { className: "h-2.5 w-2.5" }),
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
function yw({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onMonthChange: s, currentDate: i }) {
  const [o, a] = z.useState(/* @__PURE__ */ new Date()), [l, c] = z.useState(/* @__PURE__ */ new Date()), f = i || l, d = () => {
    const N = new Date(f.getFullYear(), f.getMonth() - 1, 1);
    i || c(N), s == null || s(N);
  }, h = () => {
    const N = new Date(f.getFullYear(), f.getMonth() + 1, 1);
    i || c(N), s == null || s(N);
  }, p = (N) => N.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), y = () => o ? e.filter((N) => {
    const j = new Date(N.startDate);
    return j.getDate() === o.getDate() && j.getMonth() === o.getMonth() && j.getFullYear() === o.getFullYear();
  }) : [], m = (N) => e.some((j) => {
    const L = new Date(j.startDate);
    return L.getDate() === N.getDate() && L.getMonth() === N.getMonth() && L.getFullYear() === N.getFullYear();
  }), g = y(), v = f.getFullYear(), b = f.getMonth(), w = new Date(v, b, 1), S = new Date(w);
  S.setDate(S.getDate() - w.getDay());
  const C = [], D = new Date(S), P = new Date(v, b + 1, 0).getDate(), T = w.getDay() + P, F = Math.ceil(T / 7) * 7;
  for (let N = 0; N < F; N++)
    C.push(new Date(D)), D.setDate(D.getDate() + 1);
  return /* @__PURE__ */ u.jsxs(ao, { className: "w-full py-4 mobile-calendar bg-white dark:bg-card border-gray-200 dark:border-border", children: [
    /* @__PURE__ */ u.jsxs(Dl, { className: "px-4", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between mb-4 gap-2", children: [
        /* @__PURE__ */ u.jsxs(
          Je,
          {
            variant: "outline",
            size: "sm",
            onClick: d,
            className: "flex-shrink-0",
            children: [
              /* @__PURE__ */ u.jsx(Oc, { className: "h-4 w-4" }),
              /* @__PURE__ */ u.jsx("span", { className: "hidden xs:inline", children: "Prev" })
            ]
          }
        ),
        /* @__PURE__ */ u.jsx("h3", { className: "text-base sm:text-lg font-semibold text-gray-900 dark:text-foreground text-center flex-1 min-w-0 truncate", children: f.toLocaleDateString("en-US", { month: "long", year: "numeric" }) }),
        /* @__PURE__ */ u.jsxs(
          Je,
          {
            variant: "outline",
            size: "sm",
            onClick: h,
            className: "flex-shrink-0",
            children: [
              /* @__PURE__ */ u.jsx("span", { className: "hidden xs:inline", children: "Next" }),
              /* @__PURE__ */ u.jsx(Vc, { className: "h-4 w-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "grid grid-cols-7 gap-1 mb-4", children: [
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((N) => /* @__PURE__ */ u.jsx("div", { className: "text-center text-sm font-medium py-2 text-gray-900 dark:text-foreground", children: N }, N)),
        C.map((N, j) => {
          const L = N.getMonth() === b, $ = o && N.getDate() === o.getDate() && N.getMonth() === o.getMonth() && N.getFullYear() === o.getFullYear(), K = N.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), I = m(N);
          return /* @__PURE__ */ u.jsxs(
            "button",
            {
              onClick: () => a(N),
              className: `
                  p-2 text-sm rounded transition-colors relative focus:outline-none
                  ${L ? "text-gray-900 dark:text-foreground" : "text-gray-500 dark:text-muted-foreground"}
                  ${$ ? "bg-blue-500 dark:bg-primary text-white dark:text-primary-foreground hover:bg-blue-600 dark:hover:bg-primary/90" : "hover:bg-gray-100 dark:hover:bg-muted"}
                  ${K && !$ ? "bg-gray-200 dark:bg-muted font-semibold" : ""}
                `,
              children: [
                N.getDate(),
                I && /* @__PURE__ */ u.jsx(
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
    /* @__PURE__ */ u.jsxs(ah, { className: "flex flex-col items-start gap-3 border-t border-gray-200 dark:border-border px-4 !pt-4", children: [
      /* @__PURE__ */ u.jsx("div", { className: "flex w-full items-center justify-between px-1", children: /* @__PURE__ */ u.jsx("div", { className: "text-sm font-medium text-gray-900 dark:text-foreground", children: o == null ? void 0 : o.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }) }) }),
      /* @__PURE__ */ u.jsx("div", { className: "flex w-full flex-col gap-2", children: g.length === 0 ? /* @__PURE__ */ u.jsx("div", { className: "text-sm text-gray-500 dark:text-muted-foreground text-center py-4", children: "No events on this day" }) : g.map((N) => {
        const j = t[N.id], L = vt(j == null ? void 0 : j.category, n), K = Ue(L).replace("bg-", "after:bg-");
        return /* @__PURE__ */ u.jsxs(
          "button",
          {
            role: "button",
            tabIndex: 0,
            "aria-label": un(N.title, N.status),
            onKeyDown: (I) => {
              (I.key === "Enter" || I.key === " ") && (I.preventDefault(), I.stopPropagation(), r == null || r(N));
            },
            className: `bg-card dark:bg-card relative rounded-md p-2 pl-6 text-sm text-left w-full after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary hover:bg-muted dark:hover:bg-muted transition-colors focus:outline-none border border-gray-200 dark:border-border ${K}`,
            onClick: () => r == null ? void 0 : r(N),
            children: [
              /* @__PURE__ */ u.jsxs("div", { className: "font-medium text-gray-900 dark:text-foreground", children: [
                /* @__PURE__ */ u.jsx(It, { status: N.status, className: "mr-1" }),
                /* @__PURE__ */ u.jsx("span", { className: Ot(N.status), children: N.title })
              ] }),
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
function vw({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onLoadMore: s, hasMore: i, loading: o, showCost: a = !0 }) {
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
      /* @__PURE__ */ u.jsx(jn, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
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
          const S = t[w.id], C = vt(S == null ? void 0 : S.category, n), P = Ue(C).replace("bg-", "after:bg-");
          return /* @__PURE__ */ u.jsxs(
            "div",
            {
              role: "button",
              tabIndex: 0,
              "aria-label": un(w.title, w.status),
              onKeyDown: (T) => {
                (T.key === "Enter" || T.key === " ") && (T.preventDefault(), T.stopPropagation(), r == null || r(w));
              },
              className: `bg-card dark:bg-card relative rounded-md p-3 pl-6 text-sm border border-gray-200 dark:border-border shadow-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary hover:bg-muted dark:hover:bg-muted transition-colors ${P}`,
              onClick: () => r == null ? void 0 : r(w),
              children: [
                /* @__PURE__ */ u.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ u.jsxs("div", { className: "flex-grow min-w-0", children: [
                    /* @__PURE__ */ u.jsxs("div", { className: "font-medium text-gray-900 dark:text-foreground mb-2", children: [
                      /* @__PURE__ */ u.jsx(It, { status: w.status, className: "mr-2" }),
                      /* @__PURE__ */ u.jsx("span", { className: Ot(w.status), children: w.title })
                    ] }),
                    /* @__PURE__ */ u.jsxs("div", { className: "space-y-1 text-xs text-gray-900 dark:text-foreground", children: [
                      /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ u.jsx(Jt, { className: "h-3 w-3" }),
                        /* @__PURE__ */ u.jsxs("span", { children: [
                          l(w.startDate),
                          " - ",
                          l(w.endDate)
                        ] })
                      ] }),
                      (S == null ? void 0 : S.location) && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ u.jsx(Vn, { className: "h-3 w-3" }),
                        /* @__PURE__ */ u.jsx("span", { children: S.location })
                      ] }),
                      (S == null ? void 0 : S.organization) && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ u.jsx(Wr, { className: "h-3 w-3" }),
                        /* @__PURE__ */ u.jsx("span", { children: S.organization })
                      ] })
                    ] })
                  ] }),
                  a && S && S.cost && /* @__PURE__ */ u.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: S.cost })
                ] }),
                (S == null ? void 0 : S.registrationRequired) && /* @__PURE__ */ u.jsx("div", { className: "mt-2", children: /* @__PURE__ */ u.jsx(Qt, { variant: "outline", size: "sm", children: "Registration Required" }) })
              ]
            },
            w.id
          );
        }) })
      ] }, p);
    }),
    s && i && /* @__PURE__ */ u.jsx("div", { className: "text-center pt-6", children: /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: s,
        disabled: o,
        className: "px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm",
        children: o ? "Loading..." : "Load More Events"
      }
    ) })
  ] });
}
function xw({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onLoadMore: s, hasMore: i, loading: o, showCost: a = !0 }) {
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
      /* @__PURE__ */ u.jsx(jn, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
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
          const S = t[w.id], C = vt(S == null ? void 0 : S.category, n), P = Ue(C).replace("bg-", "after:bg-");
          return /* @__PURE__ */ u.jsxs(
            "div",
            {
              role: "button",
              tabIndex: 0,
              "aria-label": un(w.title, w.status),
              onKeyDown: (T) => {
                (T.key === "Enter" || T.key === " ") && (T.preventDefault(), T.stopPropagation(), r == null || r(w));
              },
              className: `bg-card dark:bg-card relative rounded-md p-3 pl-6 text-sm border border-gray-200 dark:border-border shadow-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary hover:bg-muted dark:hover:bg-muted transition-colors ${P}`,
              onClick: () => r == null ? void 0 : r(w),
              children: [
                /* @__PURE__ */ u.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ u.jsxs("div", { className: "flex-grow min-w-0", children: [
                    /* @__PURE__ */ u.jsxs("div", { className: "font-medium text-gray-900 dark:text-foreground mb-2", children: [
                      /* @__PURE__ */ u.jsx(It, { status: w.status, className: "mr-2" }),
                      /* @__PURE__ */ u.jsx("span", { className: Ot(w.status), children: w.title })
                    ] }),
                    /* @__PURE__ */ u.jsxs("div", { className: "space-y-1 text-xs text-gray-900 dark:text-foreground", children: [
                      /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ u.jsx(Jt, { className: "h-3 w-3" }),
                        /* @__PURE__ */ u.jsxs("span", { children: [
                          l(w.startDate),
                          " - ",
                          l(w.endDate)
                        ] })
                      ] }),
                      (S == null ? void 0 : S.location) && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ u.jsx(Vn, { className: "h-3 w-3" }),
                        /* @__PURE__ */ u.jsx("span", { children: S.location })
                      ] }),
                      (S == null ? void 0 : S.organization) && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ u.jsx(Wr, { className: "h-3 w-3" }),
                        /* @__PURE__ */ u.jsx("span", { children: S.organization })
                      ] })
                    ] })
                  ] }),
                  a && S && S.cost && /* @__PURE__ */ u.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: S.cost })
                ] }),
                (S == null ? void 0 : S.registrationRequired) && /* @__PURE__ */ u.jsx("div", { className: "mt-2", children: /* @__PURE__ */ u.jsx(Qt, { variant: "outline", size: "sm", children: "Registration Required" }) })
              ]
            },
            w.id
          );
        }) })
      ] }, p);
    }),
    s && i && /* @__PURE__ */ u.jsx("div", { className: "text-center pt-6", children: /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: s,
        disabled: o,
        className: "px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm",
        children: o ? "Loading..." : "Load More Events"
      }
    ) })
  ] });
}
function bw({
  initialView: e = "month",
  initialCategoryFilter: t = "all",
  initialOrganizationFilter: n = "all",
  showWeekView: r = !0,
  showDayView: s = !0,
  showCost: i = !0,
  eventSortOrder: o = "asc",
  initialMonthDisplayMode: a = "popover",
  initialMonthSidebarPosition: l = "right"
} = {}) {
  var pi, mi, gi, yi;
  const c = z.useMemo(() => ["month", "list", ...r ? ["week"] : [], ...s ? ["day"] : []], [r, s]), f = z.useMemo(() => ({
    view: ["month", "week", "day", "list"].includes(e) ? e : "month",
    date: /* @__PURE__ */ new Date(),
    category: t,
    organization: n,
    search: ""
  }), [e, t, n]), [d] = H(() => typeof window > "u" ? f : qi(window.location.search, f, c)), [h, p] = H(d.view), [y, m] = H(d.date), [g, v] = H(d.date), [b, w] = H(null), [S, C] = H(!1), [D, P] = H(!1), [T, R] = H(a), [F, N] = H(l), j = T === "sidebar", [L, $] = H(30), [K, I] = H(30), [_, O] = H(15);
  z.useEffect(() => {
    const A = document.querySelector(".unbc-calendar-container");
    if (A) {
      const W = parseInt(A.getAttribute("data-list-initial-items") || "30"), me = parseInt(A.getAttribute("data-list-load-more-count") || "15");
      I(W), O(me), $(W);
      const ne = A.getAttribute("data-month-display-mode");
      (ne === "popover" || ne === "dropdown" || ne === "sidebar") && R(ne);
      const we = A.getAttribute("data-month-sidebar-position");
      (we === "left" || we === "right") && N(we);
    }
  }, []), z.useEffect(() => {
    R(a);
  }, [a]), z.useEffect(() => {
    N(l);
  }, [l]), z.useEffect(() => {
    const A = document.createElement("style");
    return A.textContent = `
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

    `, document.head.appendChild(A), () => {
      document.head.removeChild(A);
    };
  }, []), z.useEffect(() => {
    const A = () => {
      var we;
      const ne = (
        // Priority 1: Explicit theme attributes
        document.documentElement.hasAttribute("data-theme") && document.documentElement.getAttribute("data-theme") === "dark" || document.documentElement.hasAttribute("data-color-scheme") && document.documentElement.getAttribute("data-color-scheme") === "dark" || // Priority 2: Theme classes on body or html
        document.body.classList.contains("dark") || document.documentElement.classList.contains("is-dark-theme") || document.body.classList.contains("is-dark-theme") || // Priority 3: Computed styles
        ((we = getComputedStyle(document.documentElement).getPropertyValue("--wp--preset--color--background")) == null ? void 0 : we.includes("0, 0, 0")) || getComputedStyle(document.body).backgroundColor === "rgb(0, 0, 0)" || // Priority 4: System preference (lowest priority)
        !document.documentElement.hasAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches
      );
      P(ne), W && W.disconnect(), ne ? document.querySelectorAll(".unbc-calendar-container, .unbc-today-events-widget").forEach((je) => je.classList.add("dark")) : document.querySelectorAll(".unbc-calendar-container, .unbc-today-events-widget").forEach((je) => je.classList.remove("dark")), W && (W.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-theme", "data-color-scheme"] }), W.observe(document.body, { attributes: !0, attributeFilter: ["class"] }));
    }, W = new MutationObserver(A);
    A(), W.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-theme", "data-color-scheme"] }), W.observe(document.body, { attributes: !0, attributeFilter: ["class"] });
    const me = window.matchMedia("(prefers-color-scheme: dark)");
    return me.addEventListener("change", A), () => {
      W.disconnect(), me.removeEventListener("change", A);
    };
  }, []);
  const [M, Z] = H(d.category), [Y, ve] = H(d.organization), [he, le] = H(d.search), [be, ie] = H(d.search), V = z.useRef(d);
  z.useEffect(() => {
    if (typeof window > "u") return;
    const A = { view: h, date: g, category: M, organization: Y, search: he }, W = dy(window.location.href, A, f);
    W !== window.location.href && (fy(V.current, A) ? window.history.pushState(window.history.state, "", W) : window.history.replaceState(window.history.state, "", W)), V.current = A;
  }, [h, g, M, Y, he, f]), z.useEffect(() => {
    const A = () => {
      const W = qi(window.location.search, f, c);
      V.current = W, p(W.view), v(W.date), m(W.date), Z(W.category), ve(W.organization), ie(W.search), le(W.search);
    };
    return window.addEventListener("popstate", A), () => window.removeEventListener("popstate", A);
  }, [f, c]);
  const q = Dy(), re = z.useMemo(() => {
    var A;
    return {
      ...Af(h, h === "list" ? /* @__PURE__ */ new Date() : g),
      per_page: 100,
      view: h,
      organization: Y === "all" ? "" : Y,
      category: M === "all" ? "" : [M, ...((A = q.config) == null ? void 0 : A.categoryRelationships[M]) || []].join(","),
      search: he
    };
  }, [h, g, Y, M, q.config, he]), k = z.useMemo(() => {
    var W;
    const A = typeof window < "u" && ((W = window.unbcCalendarData) == null ? void 0 : W.apiUrl) || `${typeof window < "u" ? window.location.origin : ""}/wp-json/unbc-events/v1/`;
    return py(hy(A, { category: re.category, organization: re.organization }));
  }, [re.category, re.organization]);
  yy(re);
  const E = ru(re), B = Cy(), Q = su();
  z.useEffect(() => {
    const A = setTimeout(() => {
      le(be);
    }, 300);
    return () => clearTimeout(A);
  }, [be]);
  const X = z.useMemo(() => {
    var A;
    return ((A = q.config) == null ? void 0 : A.categoriesWithOrganizations) || [];
  }, [q.config]);
  z.useEffect(() => {
    n === "all" && X.length && !X.includes(M) && M !== "all" && ve("all");
  }, [M, X]);
  const ge = E, {
    events: te,
    eventMetadata: ae,
    loading: Be,
    error: qe,
    hasMore: St,
    loadMore: Xe,
    categoryMappings: Wn
  } = ge, Hn = B.organizations, df = B.loading, { categories: ot, loading: ff } = Q, ui = z.useMemo(
    () => cf(ot),
    [ot]
  ), Ft = z.useMemo(() => Wn && Object.keys(Wn).length > 0 ? Wn : ui, [Wn, ui]), di = z.useMemo(() => {
    const A = /* @__PURE__ */ new Map();
    return Hn.forEach((W) => {
      A.set(W.id.toString(), W.title.rendered);
    }), A;
  }, [Hn]), fi = z.useCallback((A, W) => {
    var je, hn, vi;
    const me = ae[A.id];
    if (!me) return !1;
    const ne = [W, ...((hn = (je = q.config) == null ? void 0 : je.categoryRelationships) == null ? void 0 : hn[W]) || []];
    return (((vi = me.categories) == null ? void 0 : vi.map((Qr) => Qr.slug)) || [me.category || ""]).some((Qr) => ne.includes(Qr));
  }, [ae, q.config]), it = z.useMemo(() => {
    let A = te;
    if (h === "list") {
      const W = /* @__PURE__ */ new Date();
      W.setHours(0, 0, 0, 0), A = A.filter((me) => {
        const ne = new Date(me.startDate);
        return ne.setHours(0, 0, 0, 0), ne >= W;
      }), A = A.sort((me, ne) => {
        const we = me.startDate.getTime(), je = ne.startDate.getTime();
        return o === "asc" ? we - je : je - we;
      });
    } else
      A = A.sort((W, me) => {
        const ne = W.startDate.getTime(), we = me.startDate.getTime();
        return o === "asc" ? ne - we : we - ne;
      });
    if (M !== "all" && (A = A.filter((W) => fi(W, M))), Y !== "all") {
      const W = di.get(Y);
      A = A.filter((me) => {
        const ne = ae[me.id];
        return W && (ne == null ? void 0 : ne.organization) === W;
      });
    }
    if (he) {
      const W = he.toLowerCase();
      A = A.filter((me) => {
        var we, je, hn;
        const ne = ae[me.id];
        return me.title.toLowerCase().includes(W) || ((we = me.description) == null ? void 0 : we.toLowerCase().includes(W)) || ((je = ne == null ? void 0 : ne.location) == null ? void 0 : je.toLowerCase().includes(W)) || ((hn = ne == null ? void 0 : ne.organization) == null ? void 0 : hn.toLowerCase().includes(W));
      });
    }
    return A;
  }, [te, ae, M, Y, he, di, h, fi, o]), hf = z.useCallback((A) => {
    m(A), v(A), j || (s ? p("day") : r && p("week"));
  }, [j, s, r]), Kn = z.useCallback((A) => {
    v(A);
  }, []), _t = z.useCallback((A) => {
    w(A), C(!0);
  }, []), hi = z.useCallback(() => {
    $((A) => A + _), St && Xe();
  }, [_, St, Xe]);
  z.useEffect(() => {
    !r && h === "week" ? p(s ? "day" : "month") : !s && h === "day" && p(r ? "week" : "month");
  }, [r, s, h, p]);
  const pf = `rounded-lg unbc-calendar-view ${h === "month" && j ? "bg-transparent dark:bg-transparent border border-transparent shadow-none" : "bg-card border border-border shadow-sm"}`;
  return z.useEffect(() => {
    h === "list" && $(K);
  }, [h, M, Y, he, K]), (Be || df || ff) && (!te || te.length === 0) ? /* @__PURE__ */ u.jsx("div", { className: "w-full flex items-center justify-center py-12", children: /* @__PURE__ */ u.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ u.jsx(pr, { className: "h-8 w-8 animate-spin mx-auto mb-4" }),
    /* @__PURE__ */ u.jsx("p", { role: "status", className: "text-muted-foreground", children: "Loading calendar..." })
  ] }) }) : qe ? /* @__PURE__ */ u.jsx("div", { className: "w-full py-12", children: /* @__PURE__ */ u.jsx(ao, { className: "max-w-md mx-auto", children: /* @__PURE__ */ u.jsxs(Dl, { className: "pt-6 text-center", children: [
    /* @__PURE__ */ u.jsxs("p", { role: "alert", className: "text-red-600 mb-4", children: [
      "Error loading events: ",
      qe
    ] }),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => window.location.reload(),
        className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
        children: "Retry"
      }
    )
  ] }) }) }) : /* @__PURE__ */ u.jsxs("div", { id: "unbc-calendar-react-component", "data-calendar-isolated": "true", className: `w-full space-y-6 ${D ? "dark" : ""}`, children: [
    /* @__PURE__ */ u.jsx("div", { className: pf, children: /* @__PURE__ */ u.jsxs(ly, { value: h, onValueChange: p, className: "w-full", children: [
      /* @__PURE__ */ u.jsx("div", { className: "hidden md:block p-6 pb-0", children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ u.jsxs(Qn, { value: M, onValueChange: Z, children: [
            /* @__PURE__ */ u.jsx(er, { className: "w-40 border border-border bg-card text-foreground", children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ u.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${M === "all" ? "bg-muted-foreground" : Ue(((pi = ot.find((A) => A.slug === M)) == null ? void 0 : pi.variant) || "default")}` }),
              /* @__PURE__ */ u.jsx("span", { children: M === "all" ? "All Categories" : ((mi = ot.find((A) => A.slug === M)) == null ? void 0 : mi.name) || "All Categories" })
            ] }) }),
            /* @__PURE__ */ u.jsxs(tr, { className: "bg-card border border-border z-[9999] shadow-lg", children: [
              /* @__PURE__ */ u.jsx(ct, { value: "all", className: "text-foreground hover:bg-muted focus:bg-muted focus:outline-none", children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                /* @__PURE__ */ u.jsx("span", { className: "w-3 h-3 rounded-full flex-shrink-0 bg-muted-foreground" }),
                /* @__PURE__ */ u.jsx("span", { children: "All" })
              ] }) }),
              ot.map((A) => /* @__PURE__ */ u.jsx(
                ct,
                {
                  value: A.slug,
                  className: "text-foreground hover:bg-muted focus:bg-muted focus:outline-none",
                  children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                    /* @__PURE__ */ u.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${Ue(A.variant || "default")}` }),
                    /* @__PURE__ */ u.jsx("span", { children: A.name })
                  ] })
                },
                A.id
              ))
            ] })
          ] }),
          X.includes(M) && /* @__PURE__ */ u.jsxs(Qn, { value: Y, onValueChange: ve, children: [
            /* @__PURE__ */ u.jsx(er, { className: "w-44 border border-border bg-card text-foreground [&>span]:truncate [&>span]:block", children: /* @__PURE__ */ u.jsx(Gi, { placeholder: "All Organizations" }) }),
            /* @__PURE__ */ u.jsxs(tr, { className: "bg-card border border-border max-h-[200px] overflow-y-auto", children: [
              /* @__PURE__ */ u.jsx(ct, { value: "all", className: "text-foreground focus:bg-muted", children: "All Organizations" }),
              Hn.map((A) => /* @__PURE__ */ u.jsx(
                ct,
                {
                  value: A.id.toString(),
                  className: "text-foreground focus:bg-muted",
                  children: A.title.rendered
                },
                A.id
              ))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ u.jsxs(Yi, { className: "h-9 bg-muted dark:bg-background/50 border border-transparent dark:border-border/40 p-1", children: [
          s && /* @__PURE__ */ u.jsxs(Ct, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm", children: [
            /* @__PURE__ */ u.jsx(Jt, { className: "h-3 w-3" }),
            "Day"
          ] }),
          r && /* @__PURE__ */ u.jsxs(Ct, { value: "week", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm", children: [
            /* @__PURE__ */ u.jsx(hr, { className: "h-3 w-3" }),
            "Week"
          ] }),
          /* @__PURE__ */ u.jsxs(Ct, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm", children: [
            /* @__PURE__ */ u.jsx(jn, { className: "h-3 w-3" }),
            "Month"
          ] }),
          /* @__PURE__ */ u.jsxs(Ct, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm", children: [
            /* @__PURE__ */ u.jsx(Hi, { className: "h-3 w-3" }),
            "List"
          ] })
        ] }) }),
        /* @__PURE__ */ u.jsxs("div", { className: "flex-shrink-0 flex items-center gap-2", children: [
          Be && te && te.length > 0 && /* @__PURE__ */ u.jsx(pr, { className: "h-4 w-4 animate-spin text-muted-foreground" }),
          /* @__PURE__ */ u.jsxs(
            "a",
            {
              href: k,
              className: "inline-flex items-center gap-1 h-9 px-2 rounded-md border border-border bg-card text-xs text-foreground hover:bg-muted no-underline",
              title: "Subscribe in Google, Apple or Outlook Calendar. New and changed events appear automatically.",
              children: [
                /* @__PURE__ */ u.jsx(Ki, { className: "h-3 w-3", "aria-hidden": "true" }),
                "Subscribe"
              ]
            }
          ),
          /* @__PURE__ */ u.jsx(
            Vs,
            {
              placeholder: "Search events...",
              "aria-label": "Search events",
              value: be,
              onChange: (A) => ie(A.target.value),
              className: "w-40 border border-border bg-card text-foreground placeholder:text-muted-foreground"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ u.jsxs("div", { className: "md:hidden", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "px-4 py-4 flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ u.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ u.jsxs(Qn, { value: M, onValueChange: Z, children: [
            /* @__PURE__ */ u.jsx(er, { className: "w-auto min-w-[60px] h-9 px-2 border border-border bg-card text-foreground", children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ u.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${M === "all" ? "bg-muted-foreground" : Ue(((gi = ot.find((A) => A.slug === M)) == null ? void 0 : gi.variant) || "default")}` }),
              /* @__PURE__ */ u.jsx("span", { className: "text-xs truncate max-w-[60px]", children: M === "all" ? "All" : ((yi = ot.find((A) => A.slug === M)) == null ? void 0 : yi.name) || "All" })
            ] }) }),
            /* @__PURE__ */ u.jsxs(tr, { className: "bg-card border border-border z-[9999]", children: [
              /* @__PURE__ */ u.jsx(ct, { value: "all", className: "text-foreground focus:bg-muted", children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                /* @__PURE__ */ u.jsx("span", { className: "w-3 h-3 rounded-full flex-shrink-0 bg-muted-foreground" }),
                /* @__PURE__ */ u.jsx("span", { children: "All" })
              ] }) }),
              ot.map((A) => /* @__PURE__ */ u.jsx(
                ct,
                {
                  value: A.slug,
                  className: "text-foreground focus:bg-muted",
                  children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                    /* @__PURE__ */ u.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${Ue(A.variant || "default")}` }),
                    /* @__PURE__ */ u.jsx("span", { children: A.name })
                  ] })
                },
                A.id
              ))
            ] })
          ] }) }),
          /* @__PURE__ */ u.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ u.jsxs(Yi, { className: "h-9 bg-muted dark:bg-background/50 border border-transparent dark:border-border/40 p-1", children: [
            s && /* @__PURE__ */ u.jsxs(Ct, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm flex-1", children: [
              /* @__PURE__ */ u.jsx(Jt, { className: "h-3 w-3" }),
              /* @__PURE__ */ u.jsx("span", { className: "hidden xs:inline", children: "Day" })
            ] }),
            /* @__PURE__ */ u.jsxs(Ct, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm flex-1", children: [
              /* @__PURE__ */ u.jsx(jn, { className: "h-3 w-3" }),
              /* @__PURE__ */ u.jsx("span", { className: "hidden xs:inline", children: "Month" })
            ] }),
            /* @__PURE__ */ u.jsxs(Ct, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm flex-1", children: [
              /* @__PURE__ */ u.jsx(Hi, { className: "h-3 w-3" }),
              /* @__PURE__ */ u.jsx("span", { className: "hidden xs:inline", children: "List" })
            ] })
          ] }) }),
          /* @__PURE__ */ u.jsxs("div", { className: "flex-shrink-0 flex items-center gap-2", children: [
            Be && te && te.length > 0 && /* @__PURE__ */ u.jsx(pr, { className: "h-4 w-4 animate-spin text-muted-foreground" }),
            /* @__PURE__ */ u.jsx(
              "a",
              {
                href: k,
                "aria-label": "Subscribe to this calendar",
                title: "Subscribe to this calendar",
                className: "inline-flex items-center justify-center h-9 w-9 rounded-md border border-border bg-card text-muted-foreground hover:bg-muted",
                children: /* @__PURE__ */ u.jsx(Ki, { className: "h-4 w-4", "aria-hidden": "true" })
              }
            ),
            /* @__PURE__ */ u.jsx(
              Je,
              {
                variant: "outline",
                size: "sm",
                "aria-label": "Search events",
                className: "h-9 px-2 border border-border bg-card hover:bg-muted",
                onClick: () => {
                  const A = document.querySelector(".mobile-search-input");
                  A && (A.style.display = A.style.display === "none" ? "block" : "none", A.style.display !== "none" && A.focus());
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
          Vs,
          {
            placeholder: "Search events...",
            value: be,
            onChange: (A) => ie(A.target.value),
            className: "mobile-search-input w-full h-9 border border-border bg-card text-foreground placeholder:text-muted-foreground",
            style: { display: "none" }
          }
        ) }),
        X.includes(M) && /* @__PURE__ */ u.jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ u.jsxs(Qn, { value: Y, onValueChange: ve, children: [
          /* @__PURE__ */ u.jsx(er, { className: "w-full h-9 border border-border bg-card text-foreground", children: /* @__PURE__ */ u.jsx(Gi, { placeholder: "All Organizations", className: "truncate" }) }),
          /* @__PURE__ */ u.jsxs(tr, { className: "bg-card border border-border max-h-[200px] overflow-y-auto", children: [
            /* @__PURE__ */ u.jsx(ct, { value: "all", className: "text-foreground focus:bg-muted", children: "All Organizations" }),
            Hn.map((A) => /* @__PURE__ */ u.jsx(
              ct,
              {
                value: A.id.toString(),
                className: "text-foreground focus:bg-muted",
                children: A.title.rendered
              },
              A.id
            ))
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ u.jsxs(rr, { value: "month", className: "px-6 pb-6 md:p-6", children: [
        /* @__PURE__ */ u.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ u.jsx(
          pw,
          {
            events: it,
            eventMetadata: ae,
            categoryMappings: Ft,
            onDateClick: hf,
            onEventClick: _t,
            onMonthChange: Kn,
            currentDate: g,
            displayMode: T,
            sidebarPosition: F
          }
        ) }),
        /* @__PURE__ */ u.jsx("div", { className: "block md:hidden mobile-calendar", children: /* @__PURE__ */ u.jsx(
          yw,
          {
            events: it,
            eventMetadata: ae,
            categoryMappings: Ft,
            onEventClick: _t,
            onMonthChange: Kn,
            currentDate: g
          }
        ) })
      ] }),
      r && /* @__PURE__ */ u.jsx(rr, { value: "week", className: "px-6 pb-6 md:p-6", children: /* @__PURE__ */ u.jsx(
        mw,
        {
          currentDate: g,
          onDateChange: Kn,
          events: it,
          eventMetadata: ae,
          categoryMappings: Ft,
          onEventClick: _t
        }
      ) }),
      s && /* @__PURE__ */ u.jsx(rr, { value: "day", className: "px-6 pb-6 md:p-6", children: /* @__PURE__ */ u.jsx(
        gw,
        {
          events: it,
          eventMetadata: ae,
          categoryMappings: Ft,
          currentDate: g,
          onDateChange: Kn,
          onEventClick: _t
        }
      ) }),
      /* @__PURE__ */ u.jsxs(rr, { value: "list", className: "px-6 pb-6 md:p-6", children: [
        /* @__PURE__ */ u.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ u.jsx(
          vw,
          {
            events: it.slice(0, L),
            eventMetadata: ae,
            categoryMappings: Ft,
            onEventClick: _t,
            onLoadMore: hi,
            hasMore: it.length > L || St,
            loading: Be,
            showCost: i
          }
        ) }),
        /* @__PURE__ */ u.jsx("div", { className: "block md:hidden", children: /* @__PURE__ */ u.jsx(
          xw,
          {
            events: it.slice(0, L),
            eventMetadata: ae,
            categoryMappings: Ft,
            onEventClick: _t,
            onLoadMore: hi,
            hasMore: it.length > L || St,
            loading: Be,
            showCost: i
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ u.jsx(
      Mu,
      {
        event: b,
        eventMetadata: ae,
        open: S,
        onOpenChange: C,
        showCost: i
      }
    )
  ] });
}
function ww({
  events: e,
  eventMetadata: t,
  categoryMappings: n = {},
  organizationId: r,
  organizationName: s,
  limit: i,
  showPastEvents: o = !1,
  onEventClick: a
}) {
  const l = (d) => d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), { filteredEvents: c, eventsByDate: f } = z.useMemo(() => {
    let d = e;
    const h = /* @__PURE__ */ new Date();
    (r || s) && (d = d.filter((y) => {
      var g;
      const m = t[y.id];
      return s ? (m == null ? void 0 : m.organization) === s : r ? ((g = m == null ? void 0 : m.organization_id) == null ? void 0 : g.toString()) === r : !0;
    })), o || (d = d.filter((y) => y.startDate >= h)), d.sort((y, m) => y.startDate.getTime() - m.startDate.getTime()), i && i > 0 && (d = d.slice(0, i));
    const p = d.reduce((y, m) => {
      const g = m.startDate.toDateString();
      return y[g] || (y[g] = []), y[g].push(m), y;
    }, {});
    return { filteredEvents: d, eventsByDate: p };
  }, [e, t, r, s, i, o]);
  return c.length === 0 ? /* @__PURE__ */ u.jsxs("div", { className: "text-center py-8 text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ u.jsx(jn, { className: "mx-auto h-8 w-8 mb-3 opacity-50" }),
    /* @__PURE__ */ u.jsx("h3", { className: "text-base font-medium mb-1", children: "No upcoming events" }),
    /* @__PURE__ */ u.jsx("p", { className: "text-sm", children: s ? `${s} has no upcoming events.` : "No events found for this organization." })
  ] }) : /* @__PURE__ */ u.jsxs("div", { className: "space-y-6", children: [
    s && /* @__PURE__ */ u.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ u.jsxs("h3", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: [
        s,
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
          const b = t[v.id], w = vt(b == null ? void 0 : b.category, n), C = Ue(w).replace("bg-", "after:bg-");
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
                        /* @__PURE__ */ u.jsx(Jt, { className: "h-3 w-3" }),
                        /* @__PURE__ */ u.jsxs("span", { children: [
                          l(v.startDate),
                          " - ",
                          l(v.endDate)
                        ] })
                      ] }),
                      (b == null ? void 0 : b.location) && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ u.jsx(Vn, { className: "h-3 w-3" }),
                        /* @__PURE__ */ u.jsx("span", { children: b.location })
                      ] }),
                      !s && (b == null ? void 0 : b.organization) && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ u.jsx(Wr, { className: "h-3 w-3" }),
                        /* @__PURE__ */ u.jsx("span", { children: b.organization })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col items-end gap-2 flex-shrink-0 ml-4", children: [
                    (b == null ? void 0 : b.cost) && /* @__PURE__ */ u.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400", children: b.cost }),
                    (b == null ? void 0 : b.category) && /* @__PURE__ */ u.jsx(Qt, { variant: "secondary", size: "sm", className: "text-xs capitalize", children: b.category })
                  ] })
                ] }),
                (b == null ? void 0 : b.registrationRequired) && /* @__PURE__ */ u.jsx("div", { className: "mt-2", children: /* @__PURE__ */ u.jsx(Qt, { variant: "outline", size: "sm", children: "Registration Required" }) })
              ]
            },
            v.id
          );
        }) })
      ] }, d);
    })
  ] });
}
function uf({
  organizationId: e,
  organizationName: t,
  limit: n = 5,
  showPastEvents: r = !1
}) {
  const [s, i] = H(null), [o, a] = H(!1), {
    events: l,
    eventMetadata: c,
    loading: f,
    error: d,
    categoryMappings: h
  } = ru({
    view: "list",
    // Use list view for organization pages
    organization: e
    // Filter by organization
  }), { categories: p } = su(), y = z.useMemo(
    () => cf(p),
    [p]
  ), m = z.useMemo(() => h && Object.keys(h).length > 0 ? h : y, [h, y]), g = (v) => {
    i(v), a(!0);
  };
  return f ? /* @__PURE__ */ u.jsx("div", { className: "w-full flex items-center justify-center py-8", children: /* @__PURE__ */ u.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ u.jsx(pr, { className: "h-6 w-6 animate-spin mx-auto mb-2" }),
    /* @__PURE__ */ u.jsx("p", { className: "text-gray-600 text-sm", children: "Loading events..." })
  ] }) }) : d ? /* @__PURE__ */ u.jsx("div", { className: "w-full py-8", children: /* @__PURE__ */ u.jsx("div", { className: "max-w-md mx-auto bg-red-50 border border-red-200 rounded-lg p-4", children: /* @__PURE__ */ u.jsxs("p", { className: "text-red-600 text-sm", children: [
    "Error loading events: ",
    d
  ] }) }) }) : /* @__PURE__ */ u.jsxs("div", { className: "unbc-organization-events", children: [
    /* @__PURE__ */ u.jsx(
      ww,
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
      Mu,
      {
        event: s,
        eventMetadata: c,
        open: o,
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
  const n = so(t), r = t.dataset.view || "month", s = t.dataset.categoryFilter || "all", i = t.dataset.organizationFilter || "all", o = t.dataset.showWeekView !== "false", a = t.dataset.showDayView !== "false", l = t.dataset.showCost !== "false", c = t.dataset.eventSortOrder || "asc", f = t.dataset.monthDisplayMode || "popover", d = t.dataset.monthSidebarPosition || "right";
  n.render(
    /* @__PURE__ */ u.jsx(z.StrictMode, { children: /* @__PURE__ */ u.jsx(
      bw,
      {
        initialView: r,
        initialCategoryFilter: s,
        initialOrganizationFilter: i,
        showWeekView: o,
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
  const n = so(t), r = t.dataset.organizationId || "", s = t.dataset.organizationName || "", i = parseInt(t.dataset.limit) || 5, o = t.dataset.showPast === "true";
  n.render(
    /* @__PURE__ */ u.jsx(z.StrictMode, { children: /* @__PURE__ */ u.jsx(
      uf,
      {
        organizationId: r,
        organizationName: s,
        limit: i,
        showPastEvents: o
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
  const n = so(t), r = t.dataset.organizationId || "", s = t.dataset.organizationName || "", i = parseInt(t.dataset.limit) || 5, o = t.dataset.showPast === "true";
  n.render(
    /* @__PURE__ */ u.jsx(z.StrictMode, { children: /* @__PURE__ */ u.jsx(
      uf,
      {
        organizationId: r,
        organizationName: s,
        limit: i,
        showPastEvents: o
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
