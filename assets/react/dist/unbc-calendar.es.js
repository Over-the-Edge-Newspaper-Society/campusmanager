function Iw(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const s = Object.getOwnPropertyDescriptor(r, o);
          s && Object.defineProperty(e, o, s.get ? s : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Nm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mm = { exports: {} }, Ta = {}, Am = { exports: {} }, q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var As = Symbol.for("react.element"), Ow = Symbol.for("react.portal"), Fw = Symbol.for("react.fragment"), Vw = Symbol.for("react.strict_mode"), zw = Symbol.for("react.profiler"), Bw = Symbol.for("react.provider"), $w = Symbol.for("react.context"), Uw = Symbol.for("react.forward_ref"), Ww = Symbol.for("react.suspense"), Hw = Symbol.for("react.memo"), Kw = Symbol.for("react.lazy"), Pf = Symbol.iterator;
function Gw(e) {
  return e === null || typeof e != "object" ? null : (e = Pf && e[Pf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var jm = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Rm = Object.assign, Lm = {};
function mo(e, t, n) {
  this.props = e, this.context = t, this.refs = Lm, this.updater = n || jm;
}
mo.prototype.isReactComponent = {};
mo.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
mo.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function _m() {
}
_m.prototype = mo.prototype;
function bu(e, t, n) {
  this.props = e, this.context = t, this.refs = Lm, this.updater = n || jm;
}
var Cu = bu.prototype = new _m();
Cu.constructor = bu;
Rm(Cu, mo.prototype);
Cu.isPureReactComponent = !0;
var Df = Array.isArray, Im = Object.prototype.hasOwnProperty, ku = { current: null }, Om = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fm(e, t, n) {
  var r, o = {}, s = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (s = "" + t.key), t) Im.call(t, r) && !Om.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    o.children = l;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: As, type: e, key: s, ref: i, props: o, _owner: ku.current };
}
function Yw(e, t) {
  return { $$typeof: As, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Eu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === As;
}
function Xw(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Nf = /\/+/g;
function sl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Xw("" + e.key) : t.toString(36);
}
function Ci(e, t, n, r, o) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (s) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case As:
        case Ow:
          i = !0;
      }
  }
  if (i) return i = e, o = o(i), e = r === "" ? "." + sl(i, 0) : r, Df(o) ? (n = "", e != null && (n = e.replace(Nf, "$&/") + "/"), Ci(o, t, n, "", function(c) {
    return c;
  })) : o != null && (Eu(o) && (o = Yw(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Nf, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Df(e)) for (var a = 0; a < e.length; a++) {
    s = e[a];
    var l = r + sl(s, a);
    i += Ci(s, t, n, l, o);
  }
  else if (l = Gw(e), typeof l == "function") for (e = l.call(e), a = 0; !(s = e.next()).done; ) s = s.value, l = r + sl(s, a++), i += Ci(s, t, n, l, o);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Hs(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Ci(e, r, "", "", function(s) {
    return t.call(n, s, o++);
  }), r;
}
function Qw(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ze = { current: null }, ki = { transition: null }, qw = { ReactCurrentDispatcher: Ze, ReactCurrentBatchConfig: ki, ReactCurrentOwner: ku };
function Vm() {
  throw Error("act(...) is not supported in production builds of React.");
}
q.Children = { map: Hs, forEach: function(e, t, n) {
  Hs(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Hs(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Hs(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Eu(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
q.Component = mo;
q.Fragment = Fw;
q.Profiler = zw;
q.PureComponent = bu;
q.StrictMode = Vw;
q.Suspense = Ww;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qw;
q.act = Vm;
q.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Rm({}, e.props), o = e.key, s = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, i = ku.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) Im.call(t, l) && !Om.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: As, type: e.type, key: o, ref: s, props: r, _owner: i };
};
q.createContext = function(e) {
  return e = { $$typeof: $w, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Bw, _context: e }, e.Consumer = e;
};
q.createElement = Fm;
q.createFactory = function(e) {
  var t = Fm.bind(null, e);
  return t.type = e, t;
};
q.createRef = function() {
  return { current: null };
};
q.forwardRef = function(e) {
  return { $$typeof: Uw, render: e };
};
q.isValidElement = Eu;
q.lazy = function(e) {
  return { $$typeof: Kw, _payload: { _status: -1, _result: e }, _init: Qw };
};
q.memo = function(e, t) {
  return { $$typeof: Hw, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function(e) {
  var t = ki.transition;
  ki.transition = {};
  try {
    e();
  } finally {
    ki.transition = t;
  }
};
q.unstable_act = Vm;
q.useCallback = function(e, t) {
  return Ze.current.useCallback(e, t);
};
q.useContext = function(e) {
  return Ze.current.useContext(e);
};
q.useDebugValue = function() {
};
q.useDeferredValue = function(e) {
  return Ze.current.useDeferredValue(e);
};
q.useEffect = function(e, t) {
  return Ze.current.useEffect(e, t);
};
q.useId = function() {
  return Ze.current.useId();
};
q.useImperativeHandle = function(e, t, n) {
  return Ze.current.useImperativeHandle(e, t, n);
};
q.useInsertionEffect = function(e, t) {
  return Ze.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function(e, t) {
  return Ze.current.useLayoutEffect(e, t);
};
q.useMemo = function(e, t) {
  return Ze.current.useMemo(e, t);
};
q.useReducer = function(e, t, n) {
  return Ze.current.useReducer(e, t, n);
};
q.useRef = function(e) {
  return Ze.current.useRef(e);
};
q.useState = function(e) {
  return Ze.current.useState(e);
};
q.useSyncExternalStore = function(e, t, n) {
  return Ze.current.useSyncExternalStore(e, t, n);
};
q.useTransition = function() {
  return Ze.current.useTransition();
};
q.version = "18.3.1";
Am.exports = q;
var x = Am.exports;
const Y = /* @__PURE__ */ Nm(x), zm = /* @__PURE__ */ Iw({
  __proto__: null,
  default: Y
}, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zw = x, Jw = Symbol.for("react.element"), e1 = Symbol.for("react.fragment"), t1 = Object.prototype.hasOwnProperty, n1 = Zw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, r1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bm(e, t, n) {
  var r, o = {}, s = null, i = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) t1.call(t, r) && !r1.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Jw, type: e, key: s, ref: i, props: o, _owner: n1.current };
}
Ta.Fragment = e1;
Ta.jsx = Bm;
Ta.jsxs = Bm;
Mm.exports = Ta;
var p = Mm.exports, $m = { exports: {} }, pt = {}, Um = { exports: {} }, Wm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(P, L) {
    var $ = P.length;
    P.push(L);
    e: for (; 0 < $; ) {
      var G = $ - 1 >>> 1, se = P[G];
      if (0 < o(se, L)) P[G] = L, P[$] = se, $ = G;
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var L = P[0], $ = P.pop();
    if ($ !== L) {
      P[0] = $;
      e: for (var G = 0, se = P.length, ze = se >>> 1; G < ze; ) {
        var Te = 2 * (G + 1) - 1, Be = P[Te], Me = Te + 1, H = P[Me];
        if (0 > o(Be, $)) Me < se && 0 > o(H, Be) ? (P[G] = H, P[Me] = $, G = Me) : (P[G] = Be, P[Te] = $, G = Te);
        else if (Me < se && 0 > o(H, $)) P[G] = H, P[Me] = $, G = Me;
        else break e;
      }
    }
    return L;
  }
  function o(P, L) {
    var $ = P.sortIndex - L.sortIndex;
    return $ !== 0 ? $ : P.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function() {
      return s.now();
    };
  } else {
    var i = Date, a = i.now();
    e.unstable_now = function() {
      return i.now() - a;
    };
  }
  var l = [], c = [], u = 1, d = null, f = 3, g = !1, w = !1, v = !1, S = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(P) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= P) r(c), L.sortIndex = L.expirationTime, t(l, L);
      else break;
      L = n(c);
    }
  }
  function b(P) {
    if (v = !1, y(P), !w) if (n(l) !== null) w = !0, V(C);
    else {
      var L = n(c);
      L !== null && z(b, L.startTime - P);
    }
  }
  function C(P, L) {
    w = !1, v && (v = !1, m(T), T = -1), g = !0;
    var $ = f;
    try {
      for (y(L), d = n(l); d !== null && (!(d.expirationTime > L) || P && !D()); ) {
        var G = d.callback;
        if (typeof G == "function") {
          d.callback = null, f = d.priorityLevel;
          var se = G(d.expirationTime <= L);
          L = e.unstable_now(), typeof se == "function" ? d.callback = se : d === n(l) && r(l), y(L);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var ze = !0;
      else {
        var Te = n(c);
        Te !== null && z(b, Te.startTime - L), ze = !1;
      }
      return ze;
    } finally {
      d = null, f = $, g = !1;
    }
  }
  var k = !1, E = null, T = -1, j = 5, M = -1;
  function D() {
    return !(e.unstable_now() - M < j);
  }
  function N() {
    if (E !== null) {
      var P = e.unstable_now();
      M = P;
      var L = !0;
      try {
        L = E(!0, P);
      } finally {
        L ? F() : (k = !1, E = null);
      }
    } else k = !1;
  }
  var F;
  if (typeof h == "function") F = function() {
    h(N);
  };
  else if (typeof MessageChannel < "u") {
    var U = new MessageChannel(), I = U.port2;
    U.port1.onmessage = N, F = function() {
      I.postMessage(null);
    };
  } else F = function() {
    S(N, 0);
  };
  function V(P) {
    E = P, k || (k = !0, F());
  }
  function z(P, L) {
    T = S(function() {
      P(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, V(C));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(P) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = f;
    }
    var $ = f;
    f = L;
    try {
      return P();
    } finally {
      f = $;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, L) {
    switch (P) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        P = 3;
    }
    var $ = f;
    f = P;
    try {
      return L();
    } finally {
      f = $;
    }
  }, e.unstable_scheduleCallback = function(P, L, $) {
    var G = e.unstable_now();
    switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? G + $ : G) : $ = G, P) {
      case 1:
        var se = -1;
        break;
      case 2:
        se = 250;
        break;
      case 5:
        se = 1073741823;
        break;
      case 4:
        se = 1e4;
        break;
      default:
        se = 5e3;
    }
    return se = $ + se, P = { id: u++, callback: L, priorityLevel: P, startTime: $, expirationTime: se, sortIndex: -1 }, $ > G ? (P.sortIndex = $, t(c, P), n(l) === null && P === n(c) && (v ? (m(T), T = -1) : v = !0, z(b, $ - G))) : (P.sortIndex = se, t(l, P), w || g || (w = !0, V(C))), P;
  }, e.unstable_shouldYield = D, e.unstable_wrapCallback = function(P) {
    var L = f;
    return function() {
      var $ = f;
      f = L;
      try {
        return P.apply(this, arguments);
      } finally {
        f = $;
      }
    };
  };
})(Wm);
Um.exports = Wm;
var o1 = Um.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var s1 = x, dt = o1;
function A(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Hm = /* @__PURE__ */ new Set(), os = {};
function xr(e, t) {
  to(e, t), to(e + "Capture", t);
}
function to(e, t) {
  for (os[e] = t, e = 0; e < t.length; e++) Hm.add(t[e]);
}
var sn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), tc = Object.prototype.hasOwnProperty, i1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Mf = {}, Af = {};
function a1(e) {
  return tc.call(Af, e) ? !0 : tc.call(Mf, e) ? !1 : i1.test(e) ? Af[e] = !0 : (Mf[e] = !0, !1);
}
function l1(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function c1(e, t, n, r) {
  if (t === null || typeof t > "u" || l1(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function Je(e, t, n, r, o, s, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = i;
}
var Ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ve[e] = new Je(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ve[t] = new Je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ve[e] = new Je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ve[e] = new Je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ve[e] = new Je(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ve[e] = new Je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ve[e] = new Je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ve[e] = new Je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ve[e] = new Je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Tu = /[\-:]([a-z])/g;
function Pu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Tu,
    Pu
  );
  Ve[t] = new Je(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Tu, Pu);
  Ve[t] = new Je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Tu, Pu);
  Ve[t] = new Je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ve[e] = new Je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ve.xlinkHref = new Je("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ve[e] = new Je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Du(e, t, n, r) {
  var o = Ve.hasOwnProperty(t) ? Ve[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (c1(t, n, o, r) && (n = null), r || o === null ? a1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var pn = s1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ks = Symbol.for("react.element"), Nr = Symbol.for("react.portal"), Mr = Symbol.for("react.fragment"), Nu = Symbol.for("react.strict_mode"), nc = Symbol.for("react.profiler"), Km = Symbol.for("react.provider"), Gm = Symbol.for("react.context"), Mu = Symbol.for("react.forward_ref"), rc = Symbol.for("react.suspense"), oc = Symbol.for("react.suspense_list"), Au = Symbol.for("react.memo"), bn = Symbol.for("react.lazy"), Ym = Symbol.for("react.offscreen"), jf = Symbol.iterator;
function To(e) {
  return e === null || typeof e != "object" ? null : (e = jf && e[jf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ye = Object.assign, il;
function Oo(e) {
  if (il === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    il = t && t[1] || "";
  }
  return `
` + il + e;
}
var al = !1;
function ll(e, t) {
  if (!e || al) return "";
  al = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (c) {
        var r = c;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (c) {
        r = c;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var o = c.stack.split(`
`), s = r.stack.split(`
`), i = o.length - 1, a = s.length - 1; 1 <= i && 0 <= a && o[i] !== s[a]; ) a--;
      for (; 1 <= i && 0 <= a; i--, a--) if (o[i] !== s[a]) {
        if (i !== 1 || a !== 1)
          do
            if (i--, a--, 0 > a || o[i] !== s[a]) {
              var l = `
` + o[i].replace(" at new ", " at ");
              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
            }
          while (1 <= i && 0 <= a);
        break;
      }
    }
  } finally {
    al = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Oo(e) : "";
}
function u1(e) {
  switch (e.tag) {
    case 5:
      return Oo(e.type);
    case 16:
      return Oo("Lazy");
    case 13:
      return Oo("Suspense");
    case 19:
      return Oo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ll(e.type, !1), e;
    case 11:
      return e = ll(e.type.render, !1), e;
    case 1:
      return e = ll(e.type, !0), e;
    default:
      return "";
  }
}
function sc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mr:
      return "Fragment";
    case Nr:
      return "Portal";
    case nc:
      return "Profiler";
    case Nu:
      return "StrictMode";
    case rc:
      return "Suspense";
    case oc:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Gm:
      return (e.displayName || "Context") + ".Consumer";
    case Km:
      return (e._context.displayName || "Context") + ".Provider";
    case Mu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Au:
      return t = e.displayName || null, t !== null ? t : sc(e.type) || "Memo";
    case bn:
      t = e._payload, e = e._init;
      try {
        return sc(e(t));
      } catch {
      }
  }
  return null;
}
function d1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return sc(t);
    case 8:
      return t === Nu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function On(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Xm(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function f1(e) {
  var t = Xm(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, s = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(i) {
      r = "" + i, s.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Gs(e) {
  e._valueTracker || (e._valueTracker = f1(e));
}
function Qm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Xm(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ui(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ic(e, t) {
  var n = t.checked;
  return ye({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Rf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = On(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function qm(e, t) {
  t = t.checked, t != null && Du(e, "checked", t, !1);
}
function ac(e, t) {
  qm(e, t);
  var n = On(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? lc(e, t.type, n) : t.hasOwnProperty("defaultValue") && lc(e, t.type, On(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Lf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function lc(e, t, n) {
  (t !== "number" || Ui(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Fo = Array.isArray;
function Kr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + On(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function cc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return ye({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function _f(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(A(92));
      if (Fo(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: On(n) };
}
function Zm(e, t) {
  var n = On(t.value), r = On(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function If(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Jm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function uc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Jm(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ys, eg = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Ys = Ys || document.createElement("div"), Ys.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ys.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function ss(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ho = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, p1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ho).forEach(function(e) {
  p1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Ho[t] = Ho[e];
  });
});
function tg(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ho.hasOwnProperty(e) && Ho[e] ? ("" + t).trim() : t + "px";
}
function ng(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = tg(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var h1 = ye({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function dc(e, t) {
  if (t) {
    if (h1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function fc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var pc = null;
function ju(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var hc = null, Gr = null, Yr = null;
function Of(e) {
  if (e = Ls(e)) {
    if (typeof hc != "function") throw Error(A(280));
    var t = e.stateNode;
    t && (t = Aa(t), hc(e.stateNode, e.type, t));
  }
}
function rg(e) {
  Gr ? Yr ? Yr.push(e) : Yr = [e] : Gr = e;
}
function og() {
  if (Gr) {
    var e = Gr, t = Yr;
    if (Yr = Gr = null, Of(e), t) for (e = 0; e < t.length; e++) Of(t[e]);
  }
}
function sg(e, t) {
  return e(t);
}
function ig() {
}
var cl = !1;
function ag(e, t, n) {
  if (cl) return e(t, n);
  cl = !0;
  try {
    return sg(e, t, n);
  } finally {
    cl = !1, (Gr !== null || Yr !== null) && (ig(), og());
  }
}
function is(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Aa(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(A(231, t, typeof n));
  return n;
}
var mc = !1;
if (sn) try {
  var Po = {};
  Object.defineProperty(Po, "passive", { get: function() {
    mc = !0;
  } }), window.addEventListener("test", Po, Po), window.removeEventListener("test", Po, Po);
} catch {
  mc = !1;
}
function m1(e, t, n, r, o, s, i, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var Ko = !1, Wi = null, Hi = !1, gc = null, g1 = { onError: function(e) {
  Ko = !0, Wi = e;
} };
function v1(e, t, n, r, o, s, i, a, l) {
  Ko = !1, Wi = null, m1.apply(g1, arguments);
}
function y1(e, t, n, r, o, s, i, a, l) {
  if (v1.apply(this, arguments), Ko) {
    if (Ko) {
      var c = Wi;
      Ko = !1, Wi = null;
    } else throw Error(A(198));
    Hi || (Hi = !0, gc = c);
  }
}
function wr(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function lg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ff(e) {
  if (wr(e) !== e) throw Error(A(188));
}
function x1(e) {
  var t = e.alternate;
  if (!t) {
    if (t = wr(e), t === null) throw Error(A(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var s = o.alternate;
    if (s === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === s.child) {
      for (s = o.child; s; ) {
        if (s === n) return Ff(o), e;
        if (s === r) return Ff(o), t;
        s = s.sibling;
      }
      throw Error(A(188));
    }
    if (n.return !== r.return) n = o, r = s;
    else {
      for (var i = !1, a = o.child; a; ) {
        if (a === n) {
          i = !0, n = o, r = s;
          break;
        }
        if (a === r) {
          i = !0, r = o, n = s;
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = s.child; a; ) {
          if (a === n) {
            i = !0, n = s, r = o;
            break;
          }
          if (a === r) {
            i = !0, r = s, n = o;
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(A(189));
      }
    }
    if (n.alternate !== r) throw Error(A(190));
  }
  if (n.tag !== 3) throw Error(A(188));
  return n.stateNode.current === n ? e : t;
}
function cg(e) {
  return e = x1(e), e !== null ? ug(e) : null;
}
function ug(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ug(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var dg = dt.unstable_scheduleCallback, Vf = dt.unstable_cancelCallback, w1 = dt.unstable_shouldYield, S1 = dt.unstable_requestPaint, Ee = dt.unstable_now, b1 = dt.unstable_getCurrentPriorityLevel, Ru = dt.unstable_ImmediatePriority, fg = dt.unstable_UserBlockingPriority, Ki = dt.unstable_NormalPriority, C1 = dt.unstable_LowPriority, pg = dt.unstable_IdlePriority, Pa = null, zt = null;
function k1(e) {
  if (zt && typeof zt.onCommitFiberRoot == "function") try {
    zt.onCommitFiberRoot(Pa, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Nt = Math.clz32 ? Math.clz32 : P1, E1 = Math.log, T1 = Math.LN2;
function P1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (E1(e) / T1 | 0) | 0;
}
var Xs = 64, Qs = 4194304;
function Vo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Gi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, s = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var a = i & ~o;
    a !== 0 ? r = Vo(a) : (s &= i, s !== 0 && (r = Vo(s)));
  } else i = n & ~o, i !== 0 ? r = Vo(i) : s !== 0 && (r = Vo(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, s = t & -t, o >= s || o === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Nt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function D1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function N1(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var i = 31 - Nt(s), a = 1 << i, l = o[i];
    l === -1 ? (!(a & n) || a & r) && (o[i] = D1(a, t)) : l <= t && (e.expiredLanes |= a), s &= ~a;
  }
}
function vc(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function hg() {
  var e = Xs;
  return Xs <<= 1, !(Xs & 4194240) && (Xs = 64), e;
}
function ul(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function js(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Nt(t), e[t] = n;
}
function M1(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Nt(n), s = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~s;
  }
}
function Lu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Nt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var ie = 0;
function mg(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var gg, _u, vg, yg, xg, yc = !1, qs = [], Dn = null, Nn = null, Mn = null, as = /* @__PURE__ */ new Map(), ls = /* @__PURE__ */ new Map(), kn = [], A1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function zf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Dn = null;
      break;
    case "dragenter":
    case "dragleave":
      Nn = null;
      break;
    case "mouseover":
    case "mouseout":
      Mn = null;
      break;
    case "pointerover":
    case "pointerout":
      as.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ls.delete(t.pointerId);
  }
}
function Do(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [o] }, t !== null && (t = Ls(t), t !== null && _u(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function j1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Dn = Do(Dn, e, t, n, r, o), !0;
    case "dragenter":
      return Nn = Do(Nn, e, t, n, r, o), !0;
    case "mouseover":
      return Mn = Do(Mn, e, t, n, r, o), !0;
    case "pointerover":
      var s = o.pointerId;
      return as.set(s, Do(as.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return s = o.pointerId, ls.set(s, Do(ls.get(s) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function wg(e) {
  var t = rr(e.target);
  if (t !== null) {
    var n = wr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = lg(n), t !== null) {
          e.blockedOn = t, xg(e.priority, function() {
            vg(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ei(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      pc = r, n.target.dispatchEvent(r), pc = null;
    } else return t = Ls(n), t !== null && _u(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Bf(e, t, n) {
  Ei(e) && n.delete(t);
}
function R1() {
  yc = !1, Dn !== null && Ei(Dn) && (Dn = null), Nn !== null && Ei(Nn) && (Nn = null), Mn !== null && Ei(Mn) && (Mn = null), as.forEach(Bf), ls.forEach(Bf);
}
function No(e, t) {
  e.blockedOn === t && (e.blockedOn = null, yc || (yc = !0, dt.unstable_scheduleCallback(dt.unstable_NormalPriority, R1)));
}
function cs(e) {
  function t(o) {
    return No(o, e);
  }
  if (0 < qs.length) {
    No(qs[0], e);
    for (var n = 1; n < qs.length; n++) {
      var r = qs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Dn !== null && No(Dn, e), Nn !== null && No(Nn, e), Mn !== null && No(Mn, e), as.forEach(t), ls.forEach(t), n = 0; n < kn.length; n++) r = kn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < kn.length && (n = kn[0], n.blockedOn === null); ) wg(n), n.blockedOn === null && kn.shift();
}
var Xr = pn.ReactCurrentBatchConfig, Yi = !0;
function L1(e, t, n, r) {
  var o = ie, s = Xr.transition;
  Xr.transition = null;
  try {
    ie = 1, Iu(e, t, n, r);
  } finally {
    ie = o, Xr.transition = s;
  }
}
function _1(e, t, n, r) {
  var o = ie, s = Xr.transition;
  Xr.transition = null;
  try {
    ie = 4, Iu(e, t, n, r);
  } finally {
    ie = o, Xr.transition = s;
  }
}
function Iu(e, t, n, r) {
  if (Yi) {
    var o = xc(e, t, n, r);
    if (o === null) wl(e, t, r, Xi, n), zf(e, r);
    else if (j1(o, e, t, n, r)) r.stopPropagation();
    else if (zf(e, r), t & 4 && -1 < A1.indexOf(e)) {
      for (; o !== null; ) {
        var s = Ls(o);
        if (s !== null && gg(s), s = xc(e, t, n, r), s === null && wl(e, t, r, Xi, n), s === o) break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else wl(e, t, r, null, n);
  }
}
var Xi = null;
function xc(e, t, n, r) {
  if (Xi = null, e = ju(r), e = rr(e), e !== null) if (t = wr(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = lg(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Xi = e, null;
}
function Sg(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (b1()) {
        case Ru:
          return 1;
        case fg:
          return 4;
        case Ki:
        case C1:
          return 16;
        case pg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Tn = null, Ou = null, Ti = null;
function bg() {
  if (Ti) return Ti;
  var e, t = Ou, n = t.length, r, o = "value" in Tn ? Tn.value : Tn.textContent, s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++) ;
  return Ti = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Pi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Zs() {
  return !0;
}
function $f() {
  return !1;
}
function ht(e) {
  function t(n, r, o, s, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = s, this.target = i, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(s) : s[a]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Zs : $f, this.isPropagationStopped = $f, this;
  }
  return ye(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Zs);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Zs);
  }, persist: function() {
  }, isPersistent: Zs }), t;
}
var go = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Fu = ht(go), Rs = ye({}, go, { view: 0, detail: 0 }), I1 = ht(Rs), dl, fl, Mo, Da = ye({}, Rs, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Vu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Mo && (Mo && e.type === "mousemove" ? (dl = e.screenX - Mo.screenX, fl = e.screenY - Mo.screenY) : fl = dl = 0, Mo = e), dl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : fl;
} }), Uf = ht(Da), O1 = ye({}, Da, { dataTransfer: 0 }), F1 = ht(O1), V1 = ye({}, Rs, { relatedTarget: 0 }), pl = ht(V1), z1 = ye({}, go, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), B1 = ht(z1), $1 = ye({}, go, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), U1 = ht($1), W1 = ye({}, go, { data: 0 }), Wf = ht(W1), H1 = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, K1 = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, G1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Y1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = G1[e]) ? !!t[e] : !1;
}
function Vu() {
  return Y1;
}
var X1 = ye({}, Rs, { key: function(e) {
  if (e.key) {
    var t = H1[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Pi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? K1[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Vu, charCode: function(e) {
  return e.type === "keypress" ? Pi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Pi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Q1 = ht(X1), q1 = ye({}, Da, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Hf = ht(q1), Z1 = ye({}, Rs, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Vu }), J1 = ht(Z1), eS = ye({}, go, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), tS = ht(eS), nS = ye({}, Da, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), rS = ht(nS), oS = [9, 13, 27, 32], zu = sn && "CompositionEvent" in window, Go = null;
sn && "documentMode" in document && (Go = document.documentMode);
var sS = sn && "TextEvent" in window && !Go, Cg = sn && (!zu || Go && 8 < Go && 11 >= Go), Kf = " ", Gf = !1;
function kg(e, t) {
  switch (e) {
    case "keyup":
      return oS.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Eg(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ar = !1;
function iS(e, t) {
  switch (e) {
    case "compositionend":
      return Eg(t);
    case "keypress":
      return t.which !== 32 ? null : (Gf = !0, Kf);
    case "textInput":
      return e = t.data, e === Kf && Gf ? null : e;
    default:
      return null;
  }
}
function aS(e, t) {
  if (Ar) return e === "compositionend" || !zu && kg(e, t) ? (e = bg(), Ti = Ou = Tn = null, Ar = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Cg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var lS = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Yf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!lS[e.type] : t === "textarea";
}
function Tg(e, t, n, r) {
  rg(r), t = Qi(t, "onChange"), 0 < t.length && (n = new Fu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Yo = null, us = null;
function cS(e) {
  Og(e, 0);
}
function Na(e) {
  var t = Lr(e);
  if (Qm(t)) return e;
}
function uS(e, t) {
  if (e === "change") return t;
}
var Pg = !1;
if (sn) {
  var hl;
  if (sn) {
    var ml = "oninput" in document;
    if (!ml) {
      var Xf = document.createElement("div");
      Xf.setAttribute("oninput", "return;"), ml = typeof Xf.oninput == "function";
    }
    hl = ml;
  } else hl = !1;
  Pg = hl && (!document.documentMode || 9 < document.documentMode);
}
function Qf() {
  Yo && (Yo.detachEvent("onpropertychange", Dg), us = Yo = null);
}
function Dg(e) {
  if (e.propertyName === "value" && Na(us)) {
    var t = [];
    Tg(t, us, e, ju(e)), ag(cS, t);
  }
}
function dS(e, t, n) {
  e === "focusin" ? (Qf(), Yo = t, us = n, Yo.attachEvent("onpropertychange", Dg)) : e === "focusout" && Qf();
}
function fS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Na(us);
}
function pS(e, t) {
  if (e === "click") return Na(t);
}
function hS(e, t) {
  if (e === "input" || e === "change") return Na(t);
}
function mS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var At = typeof Object.is == "function" ? Object.is : mS;
function ds(e, t) {
  if (At(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!tc.call(t, o) || !At(e[o], t[o])) return !1;
  }
  return !0;
}
function qf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Zf(e, t) {
  var n = qf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = qf(n);
  }
}
function Ng(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ng(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Mg() {
  for (var e = window, t = Ui(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ui(e.document);
  }
  return t;
}
function Bu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function gS(e) {
  var t = Mg(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Ng(n.ownerDocument.documentElement, n)) {
    if (r !== null && Bu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, s = Math.min(r.start, o);
        r = r.end === void 0 ? s : Math.min(r.end, o), !e.extend && s > r && (o = r, r = s, s = o), o = Zf(n, s);
        var i = Zf(
          n,
          r
        );
        o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var vS = sn && "documentMode" in document && 11 >= document.documentMode, jr = null, wc = null, Xo = null, Sc = !1;
function Jf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Sc || jr == null || jr !== Ui(r) || (r = jr, "selectionStart" in r && Bu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Xo && ds(Xo, r) || (Xo = r, r = Qi(wc, "onSelect"), 0 < r.length && (t = new Fu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = jr)));
}
function Js(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Rr = { animationend: Js("Animation", "AnimationEnd"), animationiteration: Js("Animation", "AnimationIteration"), animationstart: Js("Animation", "AnimationStart"), transitionend: Js("Transition", "TransitionEnd") }, gl = {}, Ag = {};
sn && (Ag = document.createElement("div").style, "AnimationEvent" in window || (delete Rr.animationend.animation, delete Rr.animationiteration.animation, delete Rr.animationstart.animation), "TransitionEvent" in window || delete Rr.transitionend.transition);
function Ma(e) {
  if (gl[e]) return gl[e];
  if (!Rr[e]) return e;
  var t = Rr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ag) return gl[e] = t[n];
  return e;
}
var jg = Ma("animationend"), Rg = Ma("animationiteration"), Lg = Ma("animationstart"), _g = Ma("transitionend"), Ig = /* @__PURE__ */ new Map(), ep = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Hn(e, t) {
  Ig.set(e, t), xr(t, [e]);
}
for (var vl = 0; vl < ep.length; vl++) {
  var yl = ep[vl], yS = yl.toLowerCase(), xS = yl[0].toUpperCase() + yl.slice(1);
  Hn(yS, "on" + xS);
}
Hn(jg, "onAnimationEnd");
Hn(Rg, "onAnimationIteration");
Hn(Lg, "onAnimationStart");
Hn("dblclick", "onDoubleClick");
Hn("focusin", "onFocus");
Hn("focusout", "onBlur");
Hn(_g, "onTransitionEnd");
to("onMouseEnter", ["mouseout", "mouseover"]);
to("onMouseLeave", ["mouseout", "mouseover"]);
to("onPointerEnter", ["pointerout", "pointerover"]);
to("onPointerLeave", ["pointerout", "pointerover"]);
xr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
xr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
xr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
xr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
xr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
xr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var zo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), wS = new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));
function tp(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, y1(r, t, void 0, e), e.currentTarget = null;
}
function Og(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var a = r[i], l = a.instance, c = a.currentTarget;
        if (a = a.listener, l !== s && o.isPropagationStopped()) break e;
        tp(o, a, c), s = l;
      }
      else for (i = 0; i < r.length; i++) {
        if (a = r[i], l = a.instance, c = a.currentTarget, a = a.listener, l !== s && o.isPropagationStopped()) break e;
        tp(o, a, c), s = l;
      }
    }
  }
  if (Hi) throw e = gc, Hi = !1, gc = null, e;
}
function ce(e, t) {
  var n = t[Tc];
  n === void 0 && (n = t[Tc] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Fg(t, e, 2, !1), n.add(r));
}
function xl(e, t, n) {
  var r = 0;
  t && (r |= 4), Fg(n, e, r, t);
}
var ei = "_reactListening" + Math.random().toString(36).slice(2);
function fs(e) {
  if (!e[ei]) {
    e[ei] = !0, Hm.forEach(function(n) {
      n !== "selectionchange" && (wS.has(n) || xl(n, !1, e), xl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ei] || (t[ei] = !0, xl("selectionchange", !1, t));
  }
}
function Fg(e, t, n, r) {
  switch (Sg(t)) {
    case 1:
      var o = L1;
      break;
    case 4:
      o = _1;
      break;
    default:
      o = Iu;
  }
  n = o.bind(null, t, n, e), o = void 0, !mc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function wl(e, t, n, r, o) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var a = r.stateNode.containerInfo;
      if (a === o || a.nodeType === 8 && a.parentNode === o) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var l = i.tag;
        if ((l === 3 || l === 4) && (l = i.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o)) return;
        i = i.return;
      }
      for (; a !== null; ) {
        if (i = rr(a), i === null) return;
        if (l = i.tag, l === 5 || l === 6) {
          r = s = i;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  ag(function() {
    var c = s, u = ju(n), d = [];
    e: {
      var f = Ig.get(e);
      if (f !== void 0) {
        var g = Fu, w = e;
        switch (e) {
          case "keypress":
            if (Pi(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Q1;
            break;
          case "focusin":
            w = "focus", g = pl;
            break;
          case "focusout":
            w = "blur", g = pl;
            break;
          case "beforeblur":
          case "afterblur":
            g = pl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Uf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = F1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = J1;
            break;
          case jg:
          case Rg:
          case Lg:
            g = B1;
            break;
          case _g:
            g = tS;
            break;
          case "scroll":
            g = I1;
            break;
          case "wheel":
            g = rS;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = U1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Hf;
        }
        var v = (t & 4) !== 0, S = !v && e === "scroll", m = v ? f !== null ? f + "Capture" : null : f;
        v = [];
        for (var h = c, y; h !== null; ) {
          y = h;
          var b = y.stateNode;
          if (y.tag === 5 && b !== null && (y = b, m !== null && (b = is(h, m), b != null && v.push(ps(h, b, y)))), S) break;
          h = h.return;
        }
        0 < v.length && (f = new g(f, w, null, n, u), d.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", f && n !== pc && (w = n.relatedTarget || n.fromElement) && (rr(w) || w[an])) break e;
        if ((g || f) && (f = u.window === u ? u : (f = u.ownerDocument) ? f.defaultView || f.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = c, w = w ? rr(w) : null, w !== null && (S = wr(w), w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = c), g !== w)) {
          if (v = Uf, b = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (v = Hf, b = "onPointerLeave", m = "onPointerEnter", h = "pointer"), S = g == null ? f : Lr(g), y = w == null ? f : Lr(w), f = new v(b, h + "leave", g, n, u), f.target = S, f.relatedTarget = y, b = null, rr(u) === c && (v = new v(m, h + "enter", w, n, u), v.target = y, v.relatedTarget = S, b = v), S = b, g && w) t: {
            for (v = g, m = w, h = 0, y = v; y; y = kr(y)) h++;
            for (y = 0, b = m; b; b = kr(b)) y++;
            for (; 0 < h - y; ) v = kr(v), h--;
            for (; 0 < y - h; ) m = kr(m), y--;
            for (; h--; ) {
              if (v === m || m !== null && v === m.alternate) break t;
              v = kr(v), m = kr(m);
            }
            v = null;
          }
          else v = null;
          g !== null && np(d, f, g, v, !1), w !== null && S !== null && np(d, S, w, v, !0);
        }
      }
      e: {
        if (f = c ? Lr(c) : window, g = f.nodeName && f.nodeName.toLowerCase(), g === "select" || g === "input" && f.type === "file") var C = uS;
        else if (Yf(f)) if (Pg) C = hS;
        else {
          C = fS;
          var k = dS;
        }
        else (g = f.nodeName) && g.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = pS);
        if (C && (C = C(e, c))) {
          Tg(d, C, n, u);
          break e;
        }
        k && k(e, f, c), e === "focusout" && (k = f._wrapperState) && k.controlled && f.type === "number" && lc(f, "number", f.value);
      }
      switch (k = c ? Lr(c) : window, e) {
        case "focusin":
          (Yf(k) || k.contentEditable === "true") && (jr = k, wc = c, Xo = null);
          break;
        case "focusout":
          Xo = wc = jr = null;
          break;
        case "mousedown":
          Sc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Sc = !1, Jf(d, n, u);
          break;
        case "selectionchange":
          if (vS) break;
        case "keydown":
        case "keyup":
          Jf(d, n, u);
      }
      var E;
      if (zu) e: {
        switch (e) {
          case "compositionstart":
            var T = "onCompositionStart";
            break e;
          case "compositionend":
            T = "onCompositionEnd";
            break e;
          case "compositionupdate":
            T = "onCompositionUpdate";
            break e;
        }
        T = void 0;
      }
      else Ar ? kg(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Cg && n.locale !== "ko" && (Ar || T !== "onCompositionStart" ? T === "onCompositionEnd" && Ar && (E = bg()) : (Tn = u, Ou = "value" in Tn ? Tn.value : Tn.textContent, Ar = !0)), k = Qi(c, T), 0 < k.length && (T = new Wf(T, e, null, n, u), d.push({ event: T, listeners: k }), E ? T.data = E : (E = Eg(n), E !== null && (T.data = E)))), (E = sS ? iS(e, n) : aS(e, n)) && (c = Qi(c, "onBeforeInput"), 0 < c.length && (u = new Wf("onBeforeInput", "beforeinput", null, n, u), d.push({ event: u, listeners: c }), u.data = E));
    }
    Og(d, t);
  });
}
function ps(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Qi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, s = o.stateNode;
    o.tag === 5 && s !== null && (o = s, s = is(e, n), s != null && r.unshift(ps(e, s, o)), s = is(e, t), s != null && r.push(ps(e, s, o))), e = e.return;
  }
  return r;
}
function kr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function np(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && c !== null && (a = c, o ? (l = is(n, s), l != null && i.unshift(ps(n, l, a))) : o || (l = is(n, s), l != null && i.push(ps(n, l, a)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var SS = /\r\n?/g, bS = /\u0000|\uFFFD/g;
function rp(e) {
  return (typeof e == "string" ? e : "" + e).replace(SS, `
`).replace(bS, "");
}
function ti(e, t, n) {
  if (t = rp(t), rp(e) !== t && n) throw Error(A(425));
}
function qi() {
}
var bc = null, Cc = null;
function kc(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ec = typeof setTimeout == "function" ? setTimeout : void 0, CS = typeof clearTimeout == "function" ? clearTimeout : void 0, op = typeof Promise == "function" ? Promise : void 0, kS = typeof queueMicrotask == "function" ? queueMicrotask : typeof op < "u" ? function(e) {
  return op.resolve(null).then(e).catch(ES);
} : Ec;
function ES(e) {
  setTimeout(function() {
    throw e;
  });
}
function Sl(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), cs(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  cs(t);
}
function An(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function sp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var vo = Math.random().toString(36).slice(2), Ot = "__reactFiber$" + vo, hs = "__reactProps$" + vo, an = "__reactContainer$" + vo, Tc = "__reactEvents$" + vo, TS = "__reactListeners$" + vo, PS = "__reactHandles$" + vo;
function rr(e) {
  var t = e[Ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[an] || n[Ot]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = sp(e); e !== null; ) {
        if (n = e[Ot]) return n;
        e = sp(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ls(e) {
  return e = e[Ot] || e[an], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Lr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function Aa(e) {
  return e[hs] || null;
}
var Pc = [], _r = -1;
function Kn(e) {
  return { current: e };
}
function ue(e) {
  0 > _r || (e.current = Pc[_r], Pc[_r] = null, _r--);
}
function ae(e, t) {
  _r++, Pc[_r] = e.current, e.current = t;
}
var Fn = {}, Ge = Kn(Fn), nt = Kn(!1), ur = Fn;
function no(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Fn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, s;
  for (s in n) o[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function rt(e) {
  return e = e.childContextTypes, e != null;
}
function Zi() {
  ue(nt), ue(Ge);
}
function ip(e, t, n) {
  if (Ge.current !== Fn) throw Error(A(168));
  ae(Ge, t), ae(nt, n);
}
function Vg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(A(108, d1(e) || "Unknown", o));
  return ye({}, n, r);
}
function Ji(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Fn, ur = Ge.current, ae(Ge, e), ae(nt, nt.current), !0;
}
function ap(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n ? (e = Vg(e, t, ur), r.__reactInternalMemoizedMergedChildContext = e, ue(nt), ue(Ge), ae(Ge, e)) : ue(nt), ae(nt, n);
}
var qt = null, ja = !1, bl = !1;
function zg(e) {
  qt === null ? qt = [e] : qt.push(e);
}
function DS(e) {
  ja = !0, zg(e);
}
function Gn() {
  if (!bl && qt !== null) {
    bl = !0;
    var e = 0, t = ie;
    try {
      var n = qt;
      for (ie = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      qt = null, ja = !1;
    } catch (o) {
      throw qt !== null && (qt = qt.slice(e + 1)), dg(Ru, Gn), o;
    } finally {
      ie = t, bl = !1;
    }
  }
  return null;
}
var Ir = [], Or = 0, ea = null, ta = 0, vt = [], yt = 0, dr = null, Zt = 1, Jt = "";
function Jn(e, t) {
  Ir[Or++] = ta, Ir[Or++] = ea, ea = e, ta = t;
}
function Bg(e, t, n) {
  vt[yt++] = Zt, vt[yt++] = Jt, vt[yt++] = dr, dr = e;
  var r = Zt;
  e = Jt;
  var o = 32 - Nt(r) - 1;
  r &= ~(1 << o), n += 1;
  var s = 32 - Nt(t) + o;
  if (30 < s) {
    var i = o - o % 5;
    s = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Zt = 1 << 32 - Nt(t) + o | n << o | r, Jt = s + e;
  } else Zt = 1 << s | n << o | r, Jt = e;
}
function $u(e) {
  e.return !== null && (Jn(e, 1), Bg(e, 1, 0));
}
function Uu(e) {
  for (; e === ea; ) ea = Ir[--Or], Ir[Or] = null, ta = Ir[--Or], Ir[Or] = null;
  for (; e === dr; ) dr = vt[--yt], vt[yt] = null, Jt = vt[--yt], vt[yt] = null, Zt = vt[--yt], vt[yt] = null;
}
var lt = null, at = null, fe = !1, Dt = null;
function $g(e, t) {
  var n = xt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function lp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, lt = e, at = An(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, lt = e, at = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = dr !== null ? { id: Zt, overflow: Jt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = xt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, lt = e, at = null, !0) : !1;
    default:
      return !1;
  }
}
function Dc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Nc(e) {
  if (fe) {
    var t = at;
    if (t) {
      var n = t;
      if (!lp(e, t)) {
        if (Dc(e)) throw Error(A(418));
        t = An(n.nextSibling);
        var r = lt;
        t && lp(e, t) ? $g(r, n) : (e.flags = e.flags & -4097 | 2, fe = !1, lt = e);
      }
    } else {
      if (Dc(e)) throw Error(A(418));
      e.flags = e.flags & -4097 | 2, fe = !1, lt = e;
    }
  }
}
function cp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  lt = e;
}
function ni(e) {
  if (e !== lt) return !1;
  if (!fe) return cp(e), fe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !kc(e.type, e.memoizedProps)), t && (t = at)) {
    if (Dc(e)) throw Ug(), Error(A(418));
    for (; t; ) $g(e, t), t = An(t.nextSibling);
  }
  if (cp(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              at = An(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      at = null;
    }
  } else at = lt ? An(e.stateNode.nextSibling) : null;
  return !0;
}
function Ug() {
  for (var e = at; e; ) e = An(e.nextSibling);
}
function ro() {
  at = lt = null, fe = !1;
}
function Wu(e) {
  Dt === null ? Dt = [e] : Dt.push(e);
}
var NS = pn.ReactCurrentBatchConfig;
function Ao(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(A(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(A(147, e));
      var o = r, s = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(i) {
        var a = o.refs;
        i === null ? delete a[s] : a[s] = i;
      }, t._stringRef = s, t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!n._owner) throw Error(A(290, e));
  }
  return e;
}
function ri(e, t) {
  throw e = Object.prototype.toString.call(t), Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function up(e) {
  var t = e._init;
  return t(e._payload);
}
function Wg(e) {
  function t(m, h) {
    if (e) {
      var y = m.deletions;
      y === null ? (m.deletions = [h], m.flags |= 16) : y.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), h = h.sibling;
    return null;
  }
  function r(m, h) {
    for (m = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? m.set(h.key, h) : m.set(h.index, h), h = h.sibling;
    return m;
  }
  function o(m, h) {
    return m = _n(m, h), m.index = 0, m.sibling = null, m;
  }
  function s(m, h, y) {
    return m.index = y, e ? (y = m.alternate, y !== null ? (y = y.index, y < h ? (m.flags |= 2, h) : y) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, y, b) {
    return h === null || h.tag !== 6 ? (h = Nl(y, m.mode, b), h.return = m, h) : (h = o(h, y), h.return = m, h);
  }
  function l(m, h, y, b) {
    var C = y.type;
    return C === Mr ? u(m, h, y.props.children, b, y.key) : h !== null && (h.elementType === C || typeof C == "object" && C !== null && C.$$typeof === bn && up(C) === h.type) ? (b = o(h, y.props), b.ref = Ao(m, h, y), b.return = m, b) : (b = Li(y.type, y.key, y.props, null, m.mode, b), b.ref = Ao(m, h, y), b.return = m, b);
  }
  function c(m, h, y, b) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== y.containerInfo || h.stateNode.implementation !== y.implementation ? (h = Ml(y, m.mode, b), h.return = m, h) : (h = o(h, y.children || []), h.return = m, h);
  }
  function u(m, h, y, b, C) {
    return h === null || h.tag !== 7 ? (h = lr(y, m.mode, b, C), h.return = m, h) : (h = o(h, y), h.return = m, h);
  }
  function d(m, h, y) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = Nl("" + h, m.mode, y), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ks:
          return y = Li(h.type, h.key, h.props, null, m.mode, y), y.ref = Ao(m, null, h), y.return = m, y;
        case Nr:
          return h = Ml(h, m.mode, y), h.return = m, h;
        case bn:
          var b = h._init;
          return d(m, b(h._payload), y);
      }
      if (Fo(h) || To(h)) return h = lr(h, m.mode, y, null), h.return = m, h;
      ri(m, h);
    }
    return null;
  }
  function f(m, h, y, b) {
    var C = h !== null ? h.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number") return C !== null ? null : a(m, h, "" + y, b);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ks:
          return y.key === C ? l(m, h, y, b) : null;
        case Nr:
          return y.key === C ? c(m, h, y, b) : null;
        case bn:
          return C = y._init, f(
            m,
            h,
            C(y._payload),
            b
          );
      }
      if (Fo(y) || To(y)) return C !== null ? null : u(m, h, y, b, null);
      ri(m, y);
    }
    return null;
  }
  function g(m, h, y, b, C) {
    if (typeof b == "string" && b !== "" || typeof b == "number") return m = m.get(y) || null, a(h, m, "" + b, C);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Ks:
          return m = m.get(b.key === null ? y : b.key) || null, l(h, m, b, C);
        case Nr:
          return m = m.get(b.key === null ? y : b.key) || null, c(h, m, b, C);
        case bn:
          var k = b._init;
          return g(m, h, y, k(b._payload), C);
      }
      if (Fo(b) || To(b)) return m = m.get(y) || null, u(h, m, b, C, null);
      ri(h, b);
    }
    return null;
  }
  function w(m, h, y, b) {
    for (var C = null, k = null, E = h, T = h = 0, j = null; E !== null && T < y.length; T++) {
      E.index > T ? (j = E, E = null) : j = E.sibling;
      var M = f(m, E, y[T], b);
      if (M === null) {
        E === null && (E = j);
        break;
      }
      e && E && M.alternate === null && t(m, E), h = s(M, h, T), k === null ? C = M : k.sibling = M, k = M, E = j;
    }
    if (T === y.length) return n(m, E), fe && Jn(m, T), C;
    if (E === null) {
      for (; T < y.length; T++) E = d(m, y[T], b), E !== null && (h = s(E, h, T), k === null ? C = E : k.sibling = E, k = E);
      return fe && Jn(m, T), C;
    }
    for (E = r(m, E); T < y.length; T++) j = g(E, m, T, y[T], b), j !== null && (e && j.alternate !== null && E.delete(j.key === null ? T : j.key), h = s(j, h, T), k === null ? C = j : k.sibling = j, k = j);
    return e && E.forEach(function(D) {
      return t(m, D);
    }), fe && Jn(m, T), C;
  }
  function v(m, h, y, b) {
    var C = To(y);
    if (typeof C != "function") throw Error(A(150));
    if (y = C.call(y), y == null) throw Error(A(151));
    for (var k = C = null, E = h, T = h = 0, j = null, M = y.next(); E !== null && !M.done; T++, M = y.next()) {
      E.index > T ? (j = E, E = null) : j = E.sibling;
      var D = f(m, E, M.value, b);
      if (D === null) {
        E === null && (E = j);
        break;
      }
      e && E && D.alternate === null && t(m, E), h = s(D, h, T), k === null ? C = D : k.sibling = D, k = D, E = j;
    }
    if (M.done) return n(
      m,
      E
    ), fe && Jn(m, T), C;
    if (E === null) {
      for (; !M.done; T++, M = y.next()) M = d(m, M.value, b), M !== null && (h = s(M, h, T), k === null ? C = M : k.sibling = M, k = M);
      return fe && Jn(m, T), C;
    }
    for (E = r(m, E); !M.done; T++, M = y.next()) M = g(E, m, T, M.value, b), M !== null && (e && M.alternate !== null && E.delete(M.key === null ? T : M.key), h = s(M, h, T), k === null ? C = M : k.sibling = M, k = M);
    return e && E.forEach(function(N) {
      return t(m, N);
    }), fe && Jn(m, T), C;
  }
  function S(m, h, y, b) {
    if (typeof y == "object" && y !== null && y.type === Mr && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ks:
          e: {
            for (var C = y.key, k = h; k !== null; ) {
              if (k.key === C) {
                if (C = y.type, C === Mr) {
                  if (k.tag === 7) {
                    n(m, k.sibling), h = o(k, y.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (k.elementType === C || typeof C == "object" && C !== null && C.$$typeof === bn && up(C) === k.type) {
                  n(m, k.sibling), h = o(k, y.props), h.ref = Ao(m, k, y), h.return = m, m = h;
                  break e;
                }
                n(m, k);
                break;
              } else t(m, k);
              k = k.sibling;
            }
            y.type === Mr ? (h = lr(y.props.children, m.mode, b, y.key), h.return = m, m = h) : (b = Li(y.type, y.key, y.props, null, m.mode, b), b.ref = Ao(m, h, y), b.return = m, m = b);
          }
          return i(m);
        case Nr:
          e: {
            for (k = y.key; h !== null; ) {
              if (h.key === k) if (h.tag === 4 && h.stateNode.containerInfo === y.containerInfo && h.stateNode.implementation === y.implementation) {
                n(m, h.sibling), h = o(h, y.children || []), h.return = m, m = h;
                break e;
              } else {
                n(m, h);
                break;
              }
              else t(m, h);
              h = h.sibling;
            }
            h = Ml(y, m.mode, b), h.return = m, m = h;
          }
          return i(m);
        case bn:
          return k = y._init, S(m, h, k(y._payload), b);
      }
      if (Fo(y)) return w(m, h, y, b);
      if (To(y)) return v(m, h, y, b);
      ri(m, y);
    }
    return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, h !== null && h.tag === 6 ? (n(m, h.sibling), h = o(h, y), h.return = m, m = h) : (n(m, h), h = Nl(y, m.mode, b), h.return = m, m = h), i(m)) : n(m, h);
  }
  return S;
}
var oo = Wg(!0), Hg = Wg(!1), na = Kn(null), ra = null, Fr = null, Hu = null;
function Ku() {
  Hu = Fr = ra = null;
}
function Gu(e) {
  var t = na.current;
  ue(na), e._currentValue = t;
}
function Mc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Qr(e, t) {
  ra = e, Hu = Fr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (tt = !0), e.firstContext = null);
}
function St(e) {
  var t = e._currentValue;
  if (Hu !== e) if (e = { context: e, memoizedValue: t, next: null }, Fr === null) {
    if (ra === null) throw Error(A(308));
    Fr = e, ra.dependencies = { lanes: 0, firstContext: e };
  } else Fr = Fr.next = e;
  return t;
}
var or = null;
function Yu(e) {
  or === null ? or = [e] : or.push(e);
}
function Kg(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Yu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, ln(e, r);
}
function ln(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Cn = !1;
function Xu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Gg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function tn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function jn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, te & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, ln(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Yu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, ln(e, n);
}
function Di(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Lu(e, n);
  }
}
function dp(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, s = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        s === null ? o = s = i : s = s.next = i, n = n.next;
      } while (n !== null);
      s === null ? o = s = t : s = s.next = t;
    } else o = s = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: s, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function oa(e, t, n, r) {
  var o = e.updateQueue;
  Cn = !1;
  var s = o.firstBaseUpdate, i = o.lastBaseUpdate, a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a, c = l.next;
    l.next = null, i === null ? s = c : i.next = c, i = l;
    var u = e.alternate;
    u !== null && (u = u.updateQueue, a = u.lastBaseUpdate, a !== i && (a === null ? u.firstBaseUpdate = c : a.next = c, u.lastBaseUpdate = l));
  }
  if (s !== null) {
    var d = o.baseState;
    i = 0, u = c = l = null, a = s;
    do {
      var f = a.lane, g = a.eventTime;
      if ((r & f) === f) {
        u !== null && (u = u.next = {
          eventTime: g,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var w = e, v = a;
          switch (f = t, g = n, v.tag) {
            case 1:
              if (w = v.payload, typeof w == "function") {
                d = w.call(g, d, f);
                break e;
              }
              d = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = v.payload, f = typeof w == "function" ? w.call(g, d, f) : w, f == null) break e;
              d = ye({}, d, f);
              break e;
            case 2:
              Cn = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [a] : f.push(a));
      } else g = { eventTime: g, lane: f, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, u === null ? (c = u = g, l = d) : u = u.next = g, i |= f;
      if (a = a.next, a === null) {
        if (a = o.shared.pending, a === null) break;
        f = a, a = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null;
      }
    } while (!0);
    if (u === null && (l = d), o.baseState = l, o.firstBaseUpdate = c, o.lastBaseUpdate = u, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        i |= o.lane, o = o.next;
      while (o !== t);
    } else s === null && (o.shared.lanes = 0);
    pr |= i, e.lanes = i, e.memoizedState = d;
  }
}
function fp(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(A(191, o));
      o.call(r);
    }
  }
}
var _s = {}, Bt = Kn(_s), ms = Kn(_s), gs = Kn(_s);
function sr(e) {
  if (e === _s) throw Error(A(174));
  return e;
}
function Qu(e, t) {
  switch (ae(gs, t), ae(ms, e), ae(Bt, _s), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : uc(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = uc(t, e);
  }
  ue(Bt), ae(Bt, t);
}
function so() {
  ue(Bt), ue(ms), ue(gs);
}
function Yg(e) {
  sr(gs.current);
  var t = sr(Bt.current), n = uc(t, e.type);
  t !== n && (ae(ms, e), ae(Bt, n));
}
function qu(e) {
  ms.current === e && (ue(Bt), ue(ms));
}
var me = Kn(0);
function sa(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Cl = [];
function Zu() {
  for (var e = 0; e < Cl.length; e++) Cl[e]._workInProgressVersionPrimary = null;
  Cl.length = 0;
}
var Ni = pn.ReactCurrentDispatcher, kl = pn.ReactCurrentBatchConfig, fr = 0, ve = null, Ae = null, Re = null, ia = !1, Qo = !1, vs = 0, MS = 0;
function $e() {
  throw Error(A(321));
}
function Ju(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!At(e[n], t[n])) return !1;
  return !0;
}
function ed(e, t, n, r, o, s) {
  if (fr = s, ve = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ni.current = e === null || e.memoizedState === null ? LS : _S, e = n(r, o), Qo) {
    s = 0;
    do {
      if (Qo = !1, vs = 0, 25 <= s) throw Error(A(301));
      s += 1, Re = Ae = null, t.updateQueue = null, Ni.current = IS, e = n(r, o);
    } while (Qo);
  }
  if (Ni.current = aa, t = Ae !== null && Ae.next !== null, fr = 0, Re = Ae = ve = null, ia = !1, t) throw Error(A(300));
  return e;
}
function td() {
  var e = vs !== 0;
  return vs = 0, e;
}
function It() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Re === null ? ve.memoizedState = Re = e : Re = Re.next = e, Re;
}
function bt() {
  if (Ae === null) {
    var e = ve.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ae.next;
  var t = Re === null ? ve.memoizedState : Re.next;
  if (t !== null) Re = t, Ae = e;
  else {
    if (e === null) throw Error(A(310));
    Ae = e, e = { memoizedState: Ae.memoizedState, baseState: Ae.baseState, baseQueue: Ae.baseQueue, queue: Ae.queue, next: null }, Re === null ? ve.memoizedState = Re = e : Re = Re.next = e;
  }
  return Re;
}
function ys(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function El(e) {
  var t = bt(), n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = Ae, o = r.baseQueue, s = n.pending;
  if (s !== null) {
    if (o !== null) {
      var i = o.next;
      o.next = s.next, s.next = i;
    }
    r.baseQueue = o = s, n.pending = null;
  }
  if (o !== null) {
    s = o.next, r = r.baseState;
    var a = i = null, l = null, c = s;
    do {
      var u = c.lane;
      if ((fr & u) === u) l !== null && (l = l.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var d = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        l === null ? (a = l = d, i = r) : l = l.next = d, ve.lanes |= u, pr |= u;
      }
      c = c.next;
    } while (c !== null && c !== s);
    l === null ? i = r : l.next = a, At(r, t.memoizedState) || (tt = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      s = o.lane, ve.lanes |= s, pr |= s, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Tl(e) {
  var t = bt(), n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      s = e(s, i.action), i = i.next;
    while (i !== o);
    At(s, t.memoizedState) || (tt = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function Xg() {
}
function Qg(e, t) {
  var n = ve, r = bt(), o = t(), s = !At(r.memoizedState, o);
  if (s && (r.memoizedState = o, tt = !0), r = r.queue, nd(Jg.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || Re !== null && Re.memoizedState.tag & 1) {
    if (n.flags |= 2048, xs(9, Zg.bind(null, n, r, o, t), void 0, null), Le === null) throw Error(A(349));
    fr & 30 || qg(n, t, o);
  }
  return o;
}
function qg(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ve.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ve.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Zg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ev(t) && tv(e);
}
function Jg(e, t, n) {
  return n(function() {
    ev(t) && tv(e);
  });
}
function ev(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !At(e, n);
  } catch {
    return !0;
  }
}
function tv(e) {
  var t = ln(e, 1);
  t !== null && Mt(t, e, 1, -1);
}
function pp(e) {
  var t = It();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ys, lastRenderedState: e }, t.queue = e, e = e.dispatch = RS.bind(null, ve, e), [t.memoizedState, e];
}
function xs(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ve.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ve.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function nv() {
  return bt().memoizedState;
}
function Mi(e, t, n, r) {
  var o = It();
  ve.flags |= e, o.memoizedState = xs(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ra(e, t, n, r) {
  var o = bt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Ae !== null) {
    var i = Ae.memoizedState;
    if (s = i.destroy, r !== null && Ju(r, i.deps)) {
      o.memoizedState = xs(t, n, s, r);
      return;
    }
  }
  ve.flags |= e, o.memoizedState = xs(1 | t, n, s, r);
}
function hp(e, t) {
  return Mi(8390656, 8, e, t);
}
function nd(e, t) {
  return Ra(2048, 8, e, t);
}
function rv(e, t) {
  return Ra(4, 2, e, t);
}
function ov(e, t) {
  return Ra(4, 4, e, t);
}
function sv(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function iv(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ra(4, 4, sv.bind(null, t, e), n);
}
function rd() {
}
function av(e, t) {
  var n = bt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ju(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function lv(e, t) {
  var n = bt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ju(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function cv(e, t, n) {
  return fr & 21 ? (At(n, t) || (n = hg(), ve.lanes |= n, pr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, tt = !0), e.memoizedState = n);
}
function AS(e, t) {
  var n = ie;
  ie = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = kl.transition;
  kl.transition = {};
  try {
    e(!1), t();
  } finally {
    ie = n, kl.transition = r;
  }
}
function uv() {
  return bt().memoizedState;
}
function jS(e, t, n) {
  var r = Ln(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, dv(e)) fv(t, n);
  else if (n = Kg(e, t, n, r), n !== null) {
    var o = qe();
    Mt(n, e, r, o), pv(n, t, r);
  }
}
function RS(e, t, n) {
  var r = Ln(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dv(e)) fv(t, o);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var i = t.lastRenderedState, a = s(i, n);
      if (o.hasEagerState = !0, o.eagerState = a, At(a, i)) {
        var l = t.interleaved;
        l === null ? (o.next = o, Yu(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Kg(e, t, o, r), n !== null && (o = qe(), Mt(n, e, r, o), pv(n, t, r));
  }
}
function dv(e) {
  var t = e.alternate;
  return e === ve || t !== null && t === ve;
}
function fv(e, t) {
  Qo = ia = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function pv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Lu(e, n);
  }
}
var aa = { readContext: St, useCallback: $e, useContext: $e, useEffect: $e, useImperativeHandle: $e, useInsertionEffect: $e, useLayoutEffect: $e, useMemo: $e, useReducer: $e, useRef: $e, useState: $e, useDebugValue: $e, useDeferredValue: $e, useTransition: $e, useMutableSource: $e, useSyncExternalStore: $e, useId: $e, unstable_isNewReconciler: !1 }, LS = { readContext: St, useCallback: function(e, t) {
  return It().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: St, useEffect: hp, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Mi(
    4194308,
    4,
    sv.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Mi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Mi(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = It();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = It();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = jS.bind(null, ve, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = It();
  return e = { current: e }, t.memoizedState = e;
}, useState: pp, useDebugValue: rd, useDeferredValue: function(e) {
  return It().memoizedState = e;
}, useTransition: function() {
  var e = pp(!1), t = e[0];
  return e = AS.bind(null, e[1]), It().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ve, o = It();
  if (fe) {
    if (n === void 0) throw Error(A(407));
    n = n();
  } else {
    if (n = t(), Le === null) throw Error(A(349));
    fr & 30 || qg(r, t, n);
  }
  o.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return o.queue = s, hp(Jg.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, xs(9, Zg.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = It(), t = Le.identifierPrefix;
  if (fe) {
    var n = Jt, r = Zt;
    n = (r & ~(1 << 32 - Nt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = vs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = MS++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, _S = {
  readContext: St,
  useCallback: av,
  useContext: St,
  useEffect: nd,
  useImperativeHandle: iv,
  useInsertionEffect: rv,
  useLayoutEffect: ov,
  useMemo: lv,
  useReducer: El,
  useRef: nv,
  useState: function() {
    return El(ys);
  },
  useDebugValue: rd,
  useDeferredValue: function(e) {
    var t = bt();
    return cv(t, Ae.memoizedState, e);
  },
  useTransition: function() {
    var e = El(ys)[0], t = bt().memoizedState;
    return [e, t];
  },
  useMutableSource: Xg,
  useSyncExternalStore: Qg,
  useId: uv,
  unstable_isNewReconciler: !1
}, IS = { readContext: St, useCallback: av, useContext: St, useEffect: nd, useImperativeHandle: iv, useInsertionEffect: rv, useLayoutEffect: ov, useMemo: lv, useReducer: Tl, useRef: nv, useState: function() {
  return Tl(ys);
}, useDebugValue: rd, useDeferredValue: function(e) {
  var t = bt();
  return Ae === null ? t.memoizedState = e : cv(t, Ae.memoizedState, e);
}, useTransition: function() {
  var e = Tl(ys)[0], t = bt().memoizedState;
  return [e, t];
}, useMutableSource: Xg, useSyncExternalStore: Qg, useId: uv, unstable_isNewReconciler: !1 };
function Tt(e, t) {
  if (e && e.defaultProps) {
    t = ye({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ac(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ye({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var La = { isMounted: function(e) {
  return (e = e._reactInternals) ? wr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = qe(), o = Ln(e), s = tn(r, o);
  s.payload = t, n != null && (s.callback = n), t = jn(e, s, o), t !== null && (Mt(t, e, o, r), Di(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = qe(), o = Ln(e), s = tn(r, o);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = jn(e, s, o), t !== null && (Mt(t, e, o, r), Di(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = qe(), r = Ln(e), o = tn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = jn(e, o, r), t !== null && (Mt(t, e, r, n), Di(t, e, r));
} };
function mp(e, t, n, r, o, s, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !ds(n, r) || !ds(o, s) : !0;
}
function hv(e, t, n) {
  var r = !1, o = Fn, s = t.contextType;
  return typeof s == "object" && s !== null ? s = St(s) : (o = rt(t) ? ur : Ge.current, r = t.contextTypes, s = (r = r != null) ? no(e, o) : Fn), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = La, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function gp(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && La.enqueueReplaceState(t, t.state, null);
}
function jc(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Xu(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? o.context = St(s) : (s = rt(t) ? ur : Ge.current, o.context = no(e, s)), o.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Ac(e, t, s, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && La.enqueueReplaceState(o, o.state, null), oa(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function io(e, t) {
  try {
    var n = "", r = t;
    do
      n += u1(r), r = r.return;
    while (r);
    var o = n;
  } catch (s) {
    o = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Pl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Rc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var OS = typeof WeakMap == "function" ? WeakMap : Map;
function mv(e, t, n) {
  n = tn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ca || (ca = !0, Uc = r), Rc(e, t);
  }, n;
}
function gv(e, t, n) {
  n = tn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Rc(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    Rc(e, t), typeof r != "function" && (Rn === null ? Rn = /* @__PURE__ */ new Set([this]) : Rn.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function vp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new OS();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = qS.bind(null, e, t, n), t.then(e, e));
}
function yp(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function xp(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = tn(-1, 1), t.tag = 2, jn(n, t, 1))), n.lanes |= 1), e);
}
var FS = pn.ReactCurrentOwner, tt = !1;
function Qe(e, t, n, r) {
  t.child = e === null ? Hg(t, null, n, r) : oo(t, e.child, n, r);
}
function wp(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return Qr(t, o), r = ed(e, t, n, r, s, o), n = td(), e !== null && !tt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, cn(e, t, o)) : (fe && n && $u(t), t.flags |= 1, Qe(e, t, r, o), t.child);
}
function Sp(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !dd(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, vv(e, t, s, r, o)) : (e = Li(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & o)) {
    var i = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ds, n(i, r) && e.ref === t.ref) return cn(e, t, o);
  }
  return t.flags |= 1, e = _n(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function vv(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (ds(s, r) && e.ref === t.ref) if (tt = !1, t.pendingProps = r = s, (e.lanes & o) !== 0) e.flags & 131072 && (tt = !0);
    else return t.lanes = e.lanes, cn(e, t, o);
  }
  return Lc(e, t, n, r, o);
}
function yv(e, t, n) {
  var r = t.pendingProps, o = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ae(zr, st), st |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ae(zr, st), st |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, ae(zr, st), st |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, ae(zr, st), st |= r;
  return Qe(e, t, o, n), t.child;
}
function xv(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Lc(e, t, n, r, o) {
  var s = rt(n) ? ur : Ge.current;
  return s = no(t, s), Qr(t, o), n = ed(e, t, n, r, s, o), r = td(), e !== null && !tt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, cn(e, t, o)) : (fe && r && $u(t), t.flags |= 1, Qe(e, t, n, o), t.child);
}
function bp(e, t, n, r, o) {
  if (rt(n)) {
    var s = !0;
    Ji(t);
  } else s = !1;
  if (Qr(t, o), t.stateNode === null) Ai(e, t), hv(t, n, r), jc(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, a = t.memoizedProps;
    i.props = a;
    var l = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = St(c) : (c = rt(n) ? ur : Ge.current, c = no(t, c));
    var u = n.getDerivedStateFromProps, d = typeof u == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || l !== c) && gp(t, i, r, c), Cn = !1;
    var f = t.memoizedState;
    i.state = f, oa(t, r, i, o), l = t.memoizedState, a !== r || f !== l || nt.current || Cn ? (typeof u == "function" && (Ac(t, n, u, r), l = t.memoizedState), (a = Cn || mp(t, n, a, r, f, l, c)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), i.props = r, i.state = l, i.context = c, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Gg(e, t), a = t.memoizedProps, c = t.type === t.elementType ? a : Tt(t.type, a), i.props = c, d = t.pendingProps, f = i.context, l = n.contextType, typeof l == "object" && l !== null ? l = St(l) : (l = rt(n) ? ur : Ge.current, l = no(t, l));
    var g = n.getDerivedStateFromProps;
    (u = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== d || f !== l) && gp(t, i, r, l), Cn = !1, f = t.memoizedState, i.state = f, oa(t, r, i, o);
    var w = t.memoizedState;
    a !== d || f !== w || nt.current || Cn ? (typeof g == "function" && (Ac(t, n, g, r), w = t.memoizedState), (c = Cn || mp(t, n, c, r, f, w, l) || !1) ? (u || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, l), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, l)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = l, r = c) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return _c(e, t, n, r, s, o);
}
function _c(e, t, n, r, o, s) {
  xv(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && ap(t, n, !1), cn(e, t, s);
  r = t.stateNode, FS.current = t;
  var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = oo(t, e.child, null, s), t.child = oo(t, null, a, s)) : Qe(e, t, a, s), t.memoizedState = r.state, o && ap(t, n, !0), t.child;
}
function wv(e) {
  var t = e.stateNode;
  t.pendingContext ? ip(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ip(e, t.context, !1), Qu(e, t.containerInfo);
}
function Cp(e, t, n, r, o) {
  return ro(), Wu(o), t.flags |= 256, Qe(e, t, n, r), t.child;
}
var Ic = { dehydrated: null, treeContext: null, retryLane: 0 };
function Oc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Sv(e, t, n) {
  var r = t.pendingProps, o = me.current, s = !1, i = (t.flags & 128) !== 0, a;
  if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ae(me, o & 1), e === null)
    return Nc(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, i = { mode: "hidden", children: i }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = i) : s = Oa(i, r, 0, null), e = lr(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Oc(n), t.memoizedState = Ic, e) : od(t, i));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return VS(e, t, i, r, a, o, n);
  if (s) {
    s = r.fallback, i = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = _n(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? s = _n(a, s) : (s = lr(s, i, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, i = e.child.memoizedState, i = i === null ? Oc(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, s.memoizedState = i, s.childLanes = e.childLanes & ~n, t.memoizedState = Ic, r;
  }
  return s = e.child, e = s.sibling, r = _n(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function od(e, t) {
  return t = Oa({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function oi(e, t, n, r) {
  return r !== null && Wu(r), oo(t, e.child, null, n), e = od(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function VS(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Pl(Error(A(422))), oi(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, o = t.mode, r = Oa({ mode: "visible", children: r.children }, o, 0, null), s = lr(s, o, i, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && oo(t, e.child, null, i), t.child.memoizedState = Oc(i), t.memoizedState = Ic, s);
  if (!(t.mode & 1)) return oi(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
    return r = a, s = Error(A(419)), r = Pl(s, r, void 0), oi(e, t, i, r);
  }
  if (a = (i & e.childLanes) !== 0, tt || a) {
    if (r = Le, r !== null) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== s.retryLane && (s.retryLane = o, ln(e, o), Mt(r, e, o, -1));
    }
    return ud(), r = Pl(Error(A(421))), oi(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ZS.bind(null, e), o._reactRetry = t, null) : (e = s.treeContext, at = An(o.nextSibling), lt = t, fe = !0, Dt = null, e !== null && (vt[yt++] = Zt, vt[yt++] = Jt, vt[yt++] = dr, Zt = e.id, Jt = e.overflow, dr = t), t = od(t, r.children), t.flags |= 4096, t);
}
function kp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Mc(e.return, t, n);
}
function Dl(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = o);
}
function bv(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, s = r.tail;
  if (Qe(e, t, r.children, n), r = me.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && kp(e, n, t);
      else if (e.tag === 19) kp(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (ae(me, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && sa(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Dl(t, !1, o, n, s);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && sa(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Dl(t, !0, n, null, s);
      break;
    case "together":
      Dl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ai(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function cn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), pr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (e = t.child, n = _n(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = _n(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function zS(e, t, n) {
  switch (t.tag) {
    case 3:
      wv(t), ro();
      break;
    case 5:
      Yg(t);
      break;
    case 1:
      rt(t.type) && Ji(t);
      break;
    case 4:
      Qu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      ae(na, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ae(me, me.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Sv(e, t, n) : (ae(me, me.current & 1), e = cn(e, t, n), e !== null ? e.sibling : null);
      ae(me, me.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return bv(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ae(me, me.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, yv(e, t, n);
  }
  return cn(e, t, n);
}
var Cv, Fc, kv, Ev;
Cv = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Fc = function() {
};
kv = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, sr(Bt.current);
    var s = null;
    switch (n) {
      case "input":
        o = ic(e, o), r = ic(e, r), s = [];
        break;
      case "select":
        o = ye({}, o, { value: void 0 }), r = ye({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        o = cc(e, o), r = cc(e, r), s = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = qi);
    }
    dc(n, r);
    var i;
    n = null;
    for (c in o) if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null) if (c === "style") {
      var a = o[c];
      for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (os.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (a = o != null ? o[c] : void 0, r.hasOwnProperty(c) && l !== a && (l != null || a != null)) if (c === "style") if (a) {
        for (i in a) !a.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in l) l.hasOwnProperty(i) && a[i] !== l[i] && (n || (n = {}), n[i] = l[i]);
      } else n || (s || (s = []), s.push(
        c,
        n
      )), n = l;
      else c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (os.hasOwnProperty(c) ? (l != null && c === "onScroll" && ce("scroll", e), s || a === l || (s = [])) : (s = s || []).push(c, l));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ev = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function jo(e, t) {
  if (!fe) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function Ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function BS(e, t, n) {
  var r = t.pendingProps;
  switch (Uu(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ue(t), null;
    case 1:
      return rt(t.type) && Zi(), Ue(t), null;
    case 3:
      return r = t.stateNode, so(), ue(nt), ue(Ge), Zu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ni(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Dt !== null && (Kc(Dt), Dt = null))), Fc(e, t), Ue(t), null;
    case 5:
      qu(t);
      var o = sr(gs.current);
      if (n = t.type, e !== null && t.stateNode != null) kv(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return Ue(t), null;
        }
        if (e = sr(Bt.current), ni(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[Ot] = t, r[hs] = s, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ce("cancel", r), ce("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < zo.length; o++) ce(zo[o], r);
              break;
            case "source":
              ce("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ce(
                "error",
                r
              ), ce("load", r);
              break;
            case "details":
              ce("toggle", r);
              break;
            case "input":
              Rf(r, s), ce("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, ce("invalid", r);
              break;
            case "textarea":
              _f(r, s), ce("invalid", r);
          }
          dc(n, s), o = null;
          for (var i in s) if (s.hasOwnProperty(i)) {
            var a = s[i];
            i === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && ti(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && ti(
              r.textContent,
              a,
              e
            ), o = ["children", "" + a]) : os.hasOwnProperty(i) && a != null && i === "onScroll" && ce("scroll", r);
          }
          switch (n) {
            case "input":
              Gs(r), Lf(r, s, !0);
              break;
            case "textarea":
              Gs(r), If(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = qi);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Jm(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ot] = t, e[hs] = r, Cv(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = fc(n, r), n) {
              case "dialog":
                ce("cancel", e), ce("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ce("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < zo.length; o++) ce(zo[o], e);
                o = r;
                break;
              case "source":
                ce("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ce(
                  "error",
                  e
                ), ce("load", e), o = r;
                break;
              case "details":
                ce("toggle", e), o = r;
                break;
              case "input":
                Rf(e, r), o = ic(e, r), ce("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ye({}, r, { value: void 0 }), ce("invalid", e);
                break;
              case "textarea":
                _f(e, r), o = cc(e, r), ce("invalid", e);
                break;
              default:
                o = r;
            }
            dc(n, o), a = o;
            for (s in a) if (a.hasOwnProperty(s)) {
              var l = a[s];
              s === "style" ? ng(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && eg(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && ss(e, l) : typeof l == "number" && ss(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (os.hasOwnProperty(s) ? l != null && s === "onScroll" && ce("scroll", e) : l != null && Du(e, s, l, i));
            }
            switch (n) {
              case "input":
                Gs(e), Lf(e, r, !1);
                break;
              case "textarea":
                Gs(e), If(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + On(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? Kr(e, !!r.multiple, s, !1) : r.defaultValue != null && Kr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = qi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Ue(t), null;
    case 6:
      if (e && t.stateNode != null) Ev(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (n = sr(gs.current), sr(Bt.current), ni(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ot] = t, (s = r.nodeValue !== n) && (e = lt, e !== null)) switch (e.tag) {
            case 3:
              ti(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ti(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ot] = t, t.stateNode = r;
      }
      return Ue(t), null;
    case 13:
      if (ue(me), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (fe && at !== null && t.mode & 1 && !(t.flags & 128)) Ug(), ro(), t.flags |= 98560, s = !1;
        else if (s = ni(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(A(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(A(317));
            s[Ot] = t;
          } else ro(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ue(t), s = !1;
        } else Dt !== null && (Kc(Dt), Dt = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || me.current & 1 ? je === 0 && (je = 3) : ud())), t.updateQueue !== null && (t.flags |= 4), Ue(t), null);
    case 4:
      return so(), Fc(e, t), e === null && fs(t.stateNode.containerInfo), Ue(t), null;
    case 10:
      return Gu(t.type._context), Ue(t), null;
    case 17:
      return rt(t.type) && Zi(), Ue(t), null;
    case 19:
      if (ue(me), s = t.memoizedState, s === null) return Ue(t), null;
      if (r = (t.flags & 128) !== 0, i = s.rendering, i === null) if (r) jo(s, !1);
      else {
        if (je !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = sa(e), i !== null) {
            for (t.flags |= 128, jo(s, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, i = s.alternate, i === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = i.childLanes, s.lanes = i.lanes, s.child = i.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = i.memoizedProps, s.memoizedState = i.memoizedState, s.updateQueue = i.updateQueue, s.type = i.type, e = i.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ae(me, me.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && Ee() > ao && (t.flags |= 128, r = !0, jo(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = sa(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), jo(s, !0), s.tail === null && s.tailMode === "hidden" && !i.alternate && !fe) return Ue(t), null;
        } else 2 * Ee() - s.renderingStartTime > ao && n !== 1073741824 && (t.flags |= 128, r = !0, jo(s, !1), t.lanes = 4194304);
        s.isBackwards ? (i.sibling = t.child, t.child = i) : (n = s.last, n !== null ? n.sibling = i : t.child = i, s.last = i);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = Ee(), t.sibling = null, n = me.current, ae(me, r ? n & 1 | 2 : n & 1), t) : (Ue(t), null);
    case 22:
    case 23:
      return cd(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? st & 1073741824 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function $S(e, t) {
  switch (Uu(t), t.tag) {
    case 1:
      return rt(t.type) && Zi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return so(), ue(nt), ue(Ge), Zu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return qu(t), null;
    case 13:
      if (ue(me), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(A(340));
        ro();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ue(me), null;
    case 4:
      return so(), null;
    case 10:
      return Gu(t.type._context), null;
    case 22:
    case 23:
      return cd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var si = !1, He = !1, US = typeof WeakSet == "function" ? WeakSet : Set, B = null;
function Vr(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    we(e, t, r);
  }
  else n.current = null;
}
function Vc(e, t, n) {
  try {
    n();
  } catch (r) {
    we(e, t, r);
  }
}
var Ep = !1;
function WS(e, t) {
  if (bc = Yi, e = Mg(), Bu(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, s = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, s.nodeType;
        } catch {
          n = null;
          break e;
        }
        var i = 0, a = -1, l = -1, c = 0, u = 0, d = e, f = null;
        t: for (; ; ) {
          for (var g; d !== n || o !== 0 && d.nodeType !== 3 || (a = i + o), d !== s || r !== 0 && d.nodeType !== 3 || (l = i + r), d.nodeType === 3 && (i += d.nodeValue.length), (g = d.firstChild) !== null; )
            f = d, d = g;
          for (; ; ) {
            if (d === e) break t;
            if (f === n && ++c === o && (a = i), f === s && ++u === r && (l = i), (g = d.nextSibling) !== null) break;
            d = f, f = d.parentNode;
          }
          d = g;
        }
        n = a === -1 || l === -1 ? null : { start: a, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Cc = { focusedElem: e, selectionRange: n }, Yi = !1, B = t; B !== null; ) if (t = B, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, B = e;
  else for (; B !== null; ) {
    t = B;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var v = w.memoizedProps, S = w.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Tt(t.type, v), S);
            m.__reactInternalSnapshotBeforeUpdate = h;
          }
          break;
        case 3:
          var y = t.stateNode.containerInfo;
          y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(A(163));
      }
    } catch (b) {
      we(t, t.return, b);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, B = e;
      break;
    }
    B = t.return;
  }
  return w = Ep, Ep = !1, w;
}
function qo(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        o.destroy = void 0, s !== void 0 && Vc(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function _a(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function zc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Tv(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Tv(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ot], delete t[hs], delete t[Tc], delete t[TS], delete t[PS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Pv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Tp(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Pv(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Bc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = qi));
  else if (r !== 4 && (e = e.child, e !== null)) for (Bc(e, t, n), e = e.sibling; e !== null; ) Bc(e, t, n), e = e.sibling;
}
function $c(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for ($c(e, t, n), e = e.sibling; e !== null; ) $c(e, t, n), e = e.sibling;
}
var Ie = null, Pt = !1;
function gn(e, t, n) {
  for (n = n.child; n !== null; ) Dv(e, t, n), n = n.sibling;
}
function Dv(e, t, n) {
  if (zt && typeof zt.onCommitFiberUnmount == "function") try {
    zt.onCommitFiberUnmount(Pa, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      He || Vr(n, t);
    case 6:
      var r = Ie, o = Pt;
      Ie = null, gn(e, t, n), Ie = r, Pt = o, Ie !== null && (Pt ? (e = Ie, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ie.removeChild(n.stateNode));
      break;
    case 18:
      Ie !== null && (Pt ? (e = Ie, n = n.stateNode, e.nodeType === 8 ? Sl(e.parentNode, n) : e.nodeType === 1 && Sl(e, n), cs(e)) : Sl(Ie, n.stateNode));
      break;
    case 4:
      r = Ie, o = Pt, Ie = n.stateNode.containerInfo, Pt = !0, gn(e, t, n), Ie = r, Pt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!He && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var s = o, i = s.destroy;
          s = s.tag, i !== void 0 && (s & 2 || s & 4) && Vc(n, t, i), o = o.next;
        } while (o !== r);
      }
      gn(e, t, n);
      break;
    case 1:
      if (!He && (Vr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        we(n, t, a);
      }
      gn(e, t, n);
      break;
    case 21:
      gn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (He = (r = He) || n.memoizedState !== null, gn(e, t, n), He = r) : gn(e, t, n);
      break;
    default:
      gn(e, t, n);
  }
}
function Pp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new US()), t.forEach(function(r) {
      var o = JS.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Ct(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var s = e, i = t, a = i;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            Ie = a.stateNode, Pt = !1;
            break e;
          case 3:
            Ie = a.stateNode.containerInfo, Pt = !0;
            break e;
          case 4:
            Ie = a.stateNode.containerInfo, Pt = !0;
            break e;
        }
        a = a.return;
      }
      if (Ie === null) throw Error(A(160));
      Dv(s, i, o), Ie = null, Pt = !1;
      var l = o.alternate;
      l !== null && (l.return = null), o.return = null;
    } catch (c) {
      we(o, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Nv(t, e), t = t.sibling;
}
function Nv(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ct(t, e), _t(e), r & 4) {
        try {
          qo(3, e, e.return), _a(3, e);
        } catch (v) {
          we(e, e.return, v);
        }
        try {
          qo(5, e, e.return);
        } catch (v) {
          we(e, e.return, v);
        }
      }
      break;
    case 1:
      Ct(t, e), _t(e), r & 512 && n !== null && Vr(n, n.return);
      break;
    case 5:
      if (Ct(t, e), _t(e), r & 512 && n !== null && Vr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          ss(o, "");
        } catch (v) {
          we(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var s = e.memoizedProps, i = n !== null ? n.memoizedProps : s, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && s.type === "radio" && s.name != null && qm(o, s), fc(a, i);
          var c = fc(a, s);
          for (i = 0; i < l.length; i += 2) {
            var u = l[i], d = l[i + 1];
            u === "style" ? ng(o, d) : u === "dangerouslySetInnerHTML" ? eg(o, d) : u === "children" ? ss(o, d) : Du(o, u, d, c);
          }
          switch (a) {
            case "input":
              ac(o, s);
              break;
            case "textarea":
              Zm(o, s);
              break;
            case "select":
              var f = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!s.multiple;
              var g = s.value;
              g != null ? Kr(o, !!s.multiple, g, !1) : f !== !!s.multiple && (s.defaultValue != null ? Kr(
                o,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : Kr(o, !!s.multiple, s.multiple ? [] : "", !1));
          }
          o[hs] = s;
        } catch (v) {
          we(e, e.return, v);
        }
      }
      break;
    case 6:
      if (Ct(t, e), _t(e), r & 4) {
        if (e.stateNode === null) throw Error(A(162));
        o = e.stateNode, s = e.memoizedProps;
        try {
          o.nodeValue = s;
        } catch (v) {
          we(e, e.return, v);
        }
      }
      break;
    case 3:
      if (Ct(t, e), _t(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        cs(t.containerInfo);
      } catch (v) {
        we(e, e.return, v);
      }
      break;
    case 4:
      Ct(t, e), _t(e);
      break;
    case 13:
      Ct(t, e), _t(e), o = e.child, o.flags & 8192 && (s = o.memoizedState !== null, o.stateNode.isHidden = s, !s || o.alternate !== null && o.alternate.memoizedState !== null || (ad = Ee())), r & 4 && Pp(e);
      break;
    case 22:
      if (u = n !== null && n.memoizedState !== null, e.mode & 1 ? (He = (c = He) || u, Ct(t, e), He = c) : Ct(t, e), _t(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !u && e.mode & 1) for (B = e, u = e.child; u !== null; ) {
          for (d = B = u; B !== null; ) {
            switch (f = B, g = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                qo(4, f, f.return);
                break;
              case 1:
                Vr(f, f.return);
                var w = f.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (v) {
                    we(r, n, v);
                  }
                }
                break;
              case 5:
                Vr(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  Np(d);
                  continue;
                }
            }
            g !== null ? (g.return = f, B = g) : Np(d);
          }
          u = u.sibling;
        }
        e: for (u = null, d = e; ; ) {
          if (d.tag === 5) {
            if (u === null) {
              u = d;
              try {
                o = d.stateNode, c ? (s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, i = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = tg("display", i));
              } catch (v) {
                we(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (u === null) try {
              d.stateNode.nodeValue = c ? "" : d.memoizedProps;
            } catch (v) {
              we(e, e.return, v);
            }
          } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
            d.child.return = d, d = d.child;
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            u === d && (u = null), d = d.return;
          }
          u === d && (u = null), d.sibling.return = d.return, d = d.sibling;
        }
      }
      break;
    case 19:
      Ct(t, e), _t(e), r & 4 && Pp(e);
      break;
    case 21:
      break;
    default:
      Ct(
        t,
        e
      ), _t(e);
  }
}
function _t(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Pv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(A(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ss(o, ""), r.flags &= -33);
          var s = Tp(e);
          $c(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, a = Tp(e);
          Bc(e, a, i);
          break;
        default:
          throw Error(A(161));
      }
    } catch (l) {
      we(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function HS(e, t, n) {
  B = e, Mv(e);
}
function Mv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var o = B, s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || si;
      if (!i) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || He;
        a = si;
        var c = He;
        if (si = i, (He = l) && !c) for (B = o; B !== null; ) i = B, l = i.child, i.tag === 22 && i.memoizedState !== null ? Mp(o) : l !== null ? (l.return = i, B = l) : Mp(o);
        for (; s !== null; ) B = s, Mv(s), s = s.sibling;
        B = o, si = a, He = c;
      }
      Dp(e);
    } else o.subtreeFlags & 8772 && s !== null ? (s.return = o, B = s) : Dp(e);
  }
}
function Dp(e) {
  for (; B !== null; ) {
    var t = B;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            He || _a(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !He) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Tt(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && fp(t, s, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              fp(t, i, n);
            }
            break;
          case 5:
            var a = t.stateNode;
            if (n === null && t.flags & 4) {
              n = a;
              var l = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && n.focus();
                  break;
                case "img":
                  l.src && (n.src = l.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var c = t.alternate;
              if (c !== null) {
                var u = c.memoizedState;
                if (u !== null) {
                  var d = u.dehydrated;
                  d !== null && cs(d);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(A(163));
        }
        He || t.flags & 512 && zc(t);
      } catch (f) {
        we(t, t.return, f);
      }
    }
    if (t === e) {
      B = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, B = n;
      break;
    }
    B = t.return;
  }
}
function Np(e) {
  for (; B !== null; ) {
    var t = B;
    if (t === e) {
      B = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, B = n;
      break;
    }
    B = t.return;
  }
}
function Mp(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _a(4, t);
          } catch (l) {
            we(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              we(t, o, l);
            }
          }
          var s = t.return;
          try {
            zc(t);
          } catch (l) {
            we(t, s, l);
          }
          break;
        case 5:
          var i = t.return;
          try {
            zc(t);
          } catch (l) {
            we(t, i, l);
          }
      }
    } catch (l) {
      we(t, t.return, l);
    }
    if (t === e) {
      B = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, B = a;
      break;
    }
    B = t.return;
  }
}
var KS = Math.ceil, la = pn.ReactCurrentDispatcher, sd = pn.ReactCurrentOwner, wt = pn.ReactCurrentBatchConfig, te = 0, Le = null, Ne = null, Fe = 0, st = 0, zr = Kn(0), je = 0, ws = null, pr = 0, Ia = 0, id = 0, Zo = null, et = null, ad = 0, ao = 1 / 0, Qt = null, ca = !1, Uc = null, Rn = null, ii = !1, Pn = null, ua = 0, Jo = 0, Wc = null, ji = -1, Ri = 0;
function qe() {
  return te & 6 ? Ee() : ji !== -1 ? ji : ji = Ee();
}
function Ln(e) {
  return e.mode & 1 ? te & 2 && Fe !== 0 ? Fe & -Fe : NS.transition !== null ? (Ri === 0 && (Ri = hg()), Ri) : (e = ie, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Sg(e.type)), e) : 1;
}
function Mt(e, t, n, r) {
  if (50 < Jo) throw Jo = 0, Wc = null, Error(A(185));
  js(e, n, r), (!(te & 2) || e !== Le) && (e === Le && (!(te & 2) && (Ia |= n), je === 4 && En(e, Fe)), ot(e, r), n === 1 && te === 0 && !(t.mode & 1) && (ao = Ee() + 500, ja && Gn()));
}
function ot(e, t) {
  var n = e.callbackNode;
  N1(e, t);
  var r = Gi(e, e === Le ? Fe : 0);
  if (r === 0) n !== null && Vf(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Vf(n), t === 1) e.tag === 0 ? DS(Ap.bind(null, e)) : zg(Ap.bind(null, e)), kS(function() {
      !(te & 6) && Gn();
    }), n = null;
    else {
      switch (mg(r)) {
        case 1:
          n = Ru;
          break;
        case 4:
          n = fg;
          break;
        case 16:
          n = Ki;
          break;
        case 536870912:
          n = pg;
          break;
        default:
          n = Ki;
      }
      n = Fv(n, Av.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Av(e, t) {
  if (ji = -1, Ri = 0, te & 6) throw Error(A(327));
  var n = e.callbackNode;
  if (qr() && e.callbackNode !== n) return null;
  var r = Gi(e, e === Le ? Fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = da(e, r);
  else {
    t = r;
    var o = te;
    te |= 2;
    var s = Rv();
    (Le !== e || Fe !== t) && (Qt = null, ao = Ee() + 500, ar(e, t));
    do
      try {
        XS();
        break;
      } catch (a) {
        jv(e, a);
      }
    while (!0);
    Ku(), la.current = s, te = o, Ne !== null ? t = 0 : (Le = null, Fe = 0, t = je);
  }
  if (t !== 0) {
    if (t === 2 && (o = vc(e), o !== 0 && (r = o, t = Hc(e, o))), t === 1) throw n = ws, ar(e, 0), En(e, r), ot(e, Ee()), n;
    if (t === 6) En(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !GS(o) && (t = da(e, r), t === 2 && (s = vc(e), s !== 0 && (r = s, t = Hc(e, s))), t === 1)) throw n = ws, ar(e, 0), En(e, r), ot(e, Ee()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          er(e, et, Qt);
          break;
        case 3:
          if (En(e, r), (r & 130023424) === r && (t = ad + 500 - Ee(), 10 < t)) {
            if (Gi(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              qe(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Ec(er.bind(null, e, et, Qt), t);
            break;
          }
          er(e, et, Qt);
          break;
        case 4:
          if (En(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Nt(r);
            s = 1 << i, i = t[i], i > o && (o = i), r &= ~s;
          }
          if (r = o, r = Ee() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * KS(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ec(er.bind(null, e, et, Qt), r);
            break;
          }
          er(e, et, Qt);
          break;
        case 5:
          er(e, et, Qt);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return ot(e, Ee()), e.callbackNode === n ? Av.bind(null, e) : null;
}
function Hc(e, t) {
  var n = Zo;
  return e.current.memoizedState.isDehydrated && (ar(e, t).flags |= 256), e = da(e, t), e !== 2 && (t = et, et = n, t !== null && Kc(t)), e;
}
function Kc(e) {
  et === null ? et = e : et.push.apply(et, e);
}
function GS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], s = o.getSnapshot;
        o = o.value;
        try {
          if (!At(s(), o)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function En(e, t) {
  for (t &= ~id, t &= ~Ia, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Nt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ap(e) {
  if (te & 6) throw Error(A(327));
  qr();
  var t = Gi(e, 0);
  if (!(t & 1)) return ot(e, Ee()), null;
  var n = da(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = vc(e);
    r !== 0 && (t = r, n = Hc(e, r));
  }
  if (n === 1) throw n = ws, ar(e, 0), En(e, t), ot(e, Ee()), n;
  if (n === 6) throw Error(A(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, er(e, et, Qt), ot(e, Ee()), null;
}
function ld(e, t) {
  var n = te;
  te |= 1;
  try {
    return e(t);
  } finally {
    te = n, te === 0 && (ao = Ee() + 500, ja && Gn());
  }
}
function hr(e) {
  Pn !== null && Pn.tag === 0 && !(te & 6) && qr();
  var t = te;
  te |= 1;
  var n = wt.transition, r = ie;
  try {
    if (wt.transition = null, ie = 1, e) return e();
  } finally {
    ie = r, wt.transition = n, te = t, !(te & 6) && Gn();
  }
}
function cd() {
  st = zr.current, ue(zr);
}
function ar(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, CS(n)), Ne !== null) for (n = Ne.return; n !== null; ) {
    var r = n;
    switch (Uu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Zi();
        break;
      case 3:
        so(), ue(nt), ue(Ge), Zu();
        break;
      case 5:
        qu(r);
        break;
      case 4:
        so();
        break;
      case 13:
        ue(me);
        break;
      case 19:
        ue(me);
        break;
      case 10:
        Gu(r.type._context);
        break;
      case 22:
      case 23:
        cd();
    }
    n = n.return;
  }
  if (Le = e, Ne = e = _n(e.current, null), Fe = st = t, je = 0, ws = null, id = Ia = pr = 0, et = Zo = null, or !== null) {
    for (t = 0; t < or.length; t++) if (n = or[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, s = n.pending;
      if (s !== null) {
        var i = s.next;
        s.next = o, r.next = i;
      }
      n.pending = r;
    }
    or = null;
  }
  return e;
}
function jv(e, t) {
  do {
    var n = Ne;
    try {
      if (Ku(), Ni.current = aa, ia) {
        for (var r = ve.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        ia = !1;
      }
      if (fr = 0, Re = Ae = ve = null, Qo = !1, vs = 0, sd.current = null, n === null || n.return === null) {
        je = 1, ws = t, Ne = null;
        break;
      }
      e: {
        var s = e, i = n.return, a = n, l = t;
        if (t = Fe, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var c = l, u = a, d = u.tag;
          if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = u.alternate;
            f ? (u.updateQueue = f.updateQueue, u.memoizedState = f.memoizedState, u.lanes = f.lanes) : (u.updateQueue = null, u.memoizedState = null);
          }
          var g = yp(i);
          if (g !== null) {
            g.flags &= -257, xp(g, i, a, s, t), g.mode & 1 && vp(s, c, t), t = g, l = c;
            var w = t.updateQueue;
            if (w === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(l), t.updateQueue = v;
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              vp(s, c, t), ud();
              break e;
            }
            l = Error(A(426));
          }
        } else if (fe && a.mode & 1) {
          var S = yp(i);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), xp(S, i, a, s, t), Wu(io(l, a));
            break e;
          }
        }
        s = l = io(l, a), je !== 4 && (je = 2), Zo === null ? Zo = [s] : Zo.push(s), s = i;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var m = mv(s, l, t);
              dp(s, m);
              break e;
            case 1:
              a = l;
              var h = s.type, y = s.stateNode;
              if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Rn === null || !Rn.has(y)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var b = gv(s, a, t);
                dp(s, b);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      _v(n);
    } catch (C) {
      t = C, Ne === n && n !== null && (Ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Rv() {
  var e = la.current;
  return la.current = aa, e === null ? aa : e;
}
function ud() {
  (je === 0 || je === 3 || je === 2) && (je = 4), Le === null || !(pr & 268435455) && !(Ia & 268435455) || En(Le, Fe);
}
function da(e, t) {
  var n = te;
  te |= 2;
  var r = Rv();
  (Le !== e || Fe !== t) && (Qt = null, ar(e, t));
  do
    try {
      YS();
      break;
    } catch (o) {
      jv(e, o);
    }
  while (!0);
  if (Ku(), te = n, la.current = r, Ne !== null) throw Error(A(261));
  return Le = null, Fe = 0, je;
}
function YS() {
  for (; Ne !== null; ) Lv(Ne);
}
function XS() {
  for (; Ne !== null && !w1(); ) Lv(Ne);
}
function Lv(e) {
  var t = Ov(e.alternate, e, st);
  e.memoizedProps = e.pendingProps, t === null ? _v(e) : Ne = t, sd.current = null;
}
function _v(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = $S(n, t), n !== null) {
        n.flags &= 32767, Ne = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        je = 6, Ne = null;
        return;
      }
    } else if (n = BS(n, t, st), n !== null) {
      Ne = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ne = t;
      return;
    }
    Ne = t = e;
  } while (t !== null);
  je === 0 && (je = 5);
}
function er(e, t, n) {
  var r = ie, o = wt.transition;
  try {
    wt.transition = null, ie = 1, QS(e, t, n, r);
  } finally {
    wt.transition = o, ie = r;
  }
  return null;
}
function QS(e, t, n, r) {
  do
    qr();
  while (Pn !== null);
  if (te & 6) throw Error(A(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(A(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (M1(e, s), e === Le && (Ne = Le = null, Fe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ii || (ii = !0, Fv(Ki, function() {
    return qr(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = wt.transition, wt.transition = null;
    var i = ie;
    ie = 1;
    var a = te;
    te |= 4, sd.current = null, WS(e, n), Nv(n, e), gS(Cc), Yi = !!bc, Cc = bc = null, e.current = n, HS(n), S1(), te = a, ie = i, wt.transition = s;
  } else e.current = n;
  if (ii && (ii = !1, Pn = e, ua = o), s = e.pendingLanes, s === 0 && (Rn = null), k1(n.stateNode), ot(e, Ee()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ca) throw ca = !1, e = Uc, Uc = null, e;
  return ua & 1 && e.tag !== 0 && qr(), s = e.pendingLanes, s & 1 ? e === Wc ? Jo++ : (Jo = 0, Wc = e) : Jo = 0, Gn(), null;
}
function qr() {
  if (Pn !== null) {
    var e = mg(ua), t = wt.transition, n = ie;
    try {
      if (wt.transition = null, ie = 16 > e ? 16 : e, Pn === null) var r = !1;
      else {
        if (e = Pn, Pn = null, ua = 0, te & 6) throw Error(A(331));
        var o = te;
        for (te |= 4, B = e.current; B !== null; ) {
          var s = B, i = s.child;
          if (B.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (B = c; B !== null; ) {
                  var u = B;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qo(8, u, s);
                  }
                  var d = u.child;
                  if (d !== null) d.return = u, B = d;
                  else for (; B !== null; ) {
                    u = B;
                    var f = u.sibling, g = u.return;
                    if (Tv(u), u === c) {
                      B = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = g, B = f;
                      break;
                    }
                    B = g;
                  }
                }
              }
              var w = s.alternate;
              if (w !== null) {
                var v = w.child;
                if (v !== null) {
                  w.child = null;
                  do {
                    var S = v.sibling;
                    v.sibling = null, v = S;
                  } while (v !== null);
                }
              }
              B = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) i.return = s, B = i;
          else e: for (; B !== null; ) {
            if (s = B, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                qo(9, s, s.return);
            }
            var m = s.sibling;
            if (m !== null) {
              m.return = s.return, B = m;
              break e;
            }
            B = s.return;
          }
        }
        var h = e.current;
        for (B = h; B !== null; ) {
          i = B;
          var y = i.child;
          if (i.subtreeFlags & 2064 && y !== null) y.return = i, B = y;
          else e: for (i = h; B !== null; ) {
            if (a = B, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  _a(9, a);
              }
            } catch (C) {
              we(a, a.return, C);
            }
            if (a === i) {
              B = null;
              break e;
            }
            var b = a.sibling;
            if (b !== null) {
              b.return = a.return, B = b;
              break e;
            }
            B = a.return;
          }
        }
        if (te = o, Gn(), zt && typeof zt.onPostCommitFiberRoot == "function") try {
          zt.onPostCommitFiberRoot(Pa, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ie = n, wt.transition = t;
    }
  }
  return !1;
}
function jp(e, t, n) {
  t = io(n, t), t = mv(e, t, 1), e = jn(e, t, 1), t = qe(), e !== null && (js(e, 1, t), ot(e, t));
}
function we(e, t, n) {
  if (e.tag === 3) jp(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      jp(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Rn === null || !Rn.has(r))) {
        e = io(n, e), e = gv(t, e, 1), t = jn(t, e, 1), e = qe(), t !== null && (js(t, 1, e), ot(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function qS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = qe(), e.pingedLanes |= e.suspendedLanes & n, Le === e && (Fe & n) === n && (je === 4 || je === 3 && (Fe & 130023424) === Fe && 500 > Ee() - ad ? ar(e, 0) : id |= n), ot(e, t);
}
function Iv(e, t) {
  t === 0 && (e.mode & 1 ? (t = Qs, Qs <<= 1, !(Qs & 130023424) && (Qs = 4194304)) : t = 1);
  var n = qe();
  e = ln(e, t), e !== null && (js(e, t, n), ot(e, n));
}
function ZS(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Iv(e, n);
}
function JS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(A(314));
  }
  r !== null && r.delete(t), Iv(e, n);
}
var Ov;
Ov = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || nt.current) tt = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return tt = !1, zS(e, t, n);
    tt = !!(e.flags & 131072);
  }
  else tt = !1, fe && t.flags & 1048576 && Bg(t, ta, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ai(e, t), e = t.pendingProps;
      var o = no(t, Ge.current);
      Qr(t, n), o = ed(null, t, r, e, o, n);
      var s = td();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, rt(r) ? (s = !0, Ji(t)) : s = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Xu(t), o.updater = La, t.stateNode = o, o._reactInternals = t, jc(t, r, e, n), t = _c(null, t, r, !0, s, n)) : (t.tag = 0, fe && s && $u(t), Qe(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ai(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = tb(r), e = Tt(r, e), o) {
          case 0:
            t = Lc(null, t, r, e, n);
            break e;
          case 1:
            t = bp(null, t, r, e, n);
            break e;
          case 11:
            t = wp(null, t, r, e, n);
            break e;
          case 14:
            t = Sp(null, t, r, Tt(r.type, e), n);
            break e;
        }
        throw Error(A(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Tt(r, o), Lc(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Tt(r, o), bp(e, t, r, o, n);
    case 3:
      e: {
        if (wv(t), e === null) throw Error(A(387));
        r = t.pendingProps, s = t.memoizedState, o = s.element, Gg(e, t), oa(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          o = io(Error(A(423)), t), t = Cp(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = io(Error(A(424)), t), t = Cp(e, t, r, n, o);
          break e;
        } else for (at = An(t.stateNode.containerInfo.firstChild), lt = t, fe = !0, Dt = null, n = Hg(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ro(), r === o) {
            t = cn(e, t, n);
            break e;
          }
          Qe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Yg(t), e === null && Nc(t), r = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, i = o.children, kc(r, o) ? i = null : s !== null && kc(r, s) && (t.flags |= 32), xv(e, t), Qe(e, t, i, n), t.child;
    case 6:
      return e === null && Nc(t), null;
    case 13:
      return Sv(e, t, n);
    case 4:
      return Qu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = oo(t, null, r, n) : Qe(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Tt(r, o), wp(e, t, r, o, n);
    case 7:
      return Qe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, s = t.memoizedProps, i = o.value, ae(na, r._currentValue), r._currentValue = i, s !== null) if (At(s.value, i)) {
          if (s.children === o.children && !nt.current) {
            t = cn(e, t, n);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var a = s.dependencies;
          if (a !== null) {
            i = s.child;
            for (var l = a.firstContext; l !== null; ) {
              if (l.context === r) {
                if (s.tag === 1) {
                  l = tn(-1, n & -n), l.tag = 2;
                  var c = s.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var u = c.pending;
                    u === null ? l.next = l : (l.next = u.next, u.next = l), c.pending = l;
                  }
                }
                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Mc(
                  s.return,
                  n,
                  t
                ), a.lanes |= n;
                break;
              }
              l = l.next;
            }
          } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
          else if (s.tag === 18) {
            if (i = s.return, i === null) throw Error(A(341));
            i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Mc(i, n, t), i = s.sibling;
          } else i = s.child;
          if (i !== null) i.return = s;
          else for (i = s; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (s = i.sibling, s !== null) {
              s.return = i.return, i = s;
              break;
            }
            i = i.return;
          }
          s = i;
        }
        Qe(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Qr(t, n), o = St(o), r = r(o), t.flags |= 1, Qe(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Tt(r, t.pendingProps), o = Tt(r.type, o), Sp(e, t, r, o, n);
    case 15:
      return vv(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Tt(r, o), Ai(e, t), t.tag = 1, rt(r) ? (e = !0, Ji(t)) : e = !1, Qr(t, n), hv(t, r, o), jc(t, r, o, n), _c(null, t, r, !0, e, n);
    case 19:
      return bv(e, t, n);
    case 22:
      return yv(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function Fv(e, t) {
  return dg(e, t);
}
function eb(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function xt(e, t, n, r) {
  return new eb(e, t, n, r);
}
function dd(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function tb(e) {
  if (typeof e == "function") return dd(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Mu) return 11;
    if (e === Au) return 14;
  }
  return 2;
}
function _n(e, t) {
  var n = e.alternate;
  return n === null ? (n = xt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Li(e, t, n, r, o, s) {
  var i = 2;
  if (r = e, typeof e == "function") dd(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Mr:
      return lr(n.children, o, s, t);
    case Nu:
      i = 8, o |= 8;
      break;
    case nc:
      return e = xt(12, n, t, o | 2), e.elementType = nc, e.lanes = s, e;
    case rc:
      return e = xt(13, n, t, o), e.elementType = rc, e.lanes = s, e;
    case oc:
      return e = xt(19, n, t, o), e.elementType = oc, e.lanes = s, e;
    case Ym:
      return Oa(n, o, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Km:
          i = 10;
          break e;
        case Gm:
          i = 9;
          break e;
        case Mu:
          i = 11;
          break e;
        case Au:
          i = 14;
          break e;
        case bn:
          i = 16, r = null;
          break e;
      }
      throw Error(A(130, e == null ? e : typeof e, ""));
  }
  return t = xt(i, n, t, o), t.elementType = e, t.type = r, t.lanes = s, t;
}
function lr(e, t, n, r) {
  return e = xt(7, e, r, t), e.lanes = n, e;
}
function Oa(e, t, n, r) {
  return e = xt(22, e, r, t), e.elementType = Ym, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Nl(e, t, n) {
  return e = xt(6, e, null, t), e.lanes = n, e;
}
function Ml(e, t, n) {
  return t = xt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function nb(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ul(0), this.expirationTimes = ul(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ul(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function fd(e, t, n, r, o, s, i, a, l) {
  return e = new nb(e, t, n, a, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = xt(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Xu(s), e;
}
function rb(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Nr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Vv(e) {
  if (!e) return Fn;
  e = e._reactInternals;
  e: {
    if (wr(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (rt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (rt(n)) return Vg(e, n, t);
  }
  return t;
}
function zv(e, t, n, r, o, s, i, a, l) {
  return e = fd(n, r, !0, e, o, s, i, a, l), e.context = Vv(null), n = e.current, r = qe(), o = Ln(n), s = tn(r, o), s.callback = t ?? null, jn(n, s, o), e.current.lanes = o, js(e, o, r), ot(e, r), e;
}
function Fa(e, t, n, r) {
  var o = t.current, s = qe(), i = Ln(o);
  return n = Vv(n), t.context === null ? t.context = n : t.pendingContext = n, t = tn(s, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = jn(o, t, i), e !== null && (Mt(e, o, i, s), Di(e, o, i)), i;
}
function fa(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Rp(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function pd(e, t) {
  Rp(e, t), (e = e.alternate) && Rp(e, t);
}
function ob() {
  return null;
}
var Bv = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function hd(e) {
  this._internalRoot = e;
}
Va.prototype.render = hd.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  Fa(e, t, null, null);
};
Va.prototype.unmount = hd.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hr(function() {
      Fa(null, e, null, null);
    }), t[an] = null;
  }
};
function Va(e) {
  this._internalRoot = e;
}
Va.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = yg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kn.length && t !== 0 && t < kn[n].priority; n++) ;
    kn.splice(n, 0, e), n === 0 && wg(e);
  }
};
function md(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function za(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Lp() {
}
function sb(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var c = fa(i);
        s.call(c);
      };
    }
    var i = zv(t, r, e, 0, null, !1, !1, "", Lp);
    return e._reactRootContainer = i, e[an] = i.current, fs(e.nodeType === 8 ? e.parentNode : e), hr(), i;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var c = fa(l);
      a.call(c);
    };
  }
  var l = fd(e, 0, !1, null, null, !1, !1, "", Lp);
  return e._reactRootContainer = l, e[an] = l.current, fs(e.nodeType === 8 ? e.parentNode : e), hr(function() {
    Fa(t, l, n, r);
  }), l;
}
function Ba(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = fa(i);
        a.call(l);
      };
    }
    Fa(t, i, e, o);
  } else i = sb(n, t, e, o, r);
  return fa(i);
}
gg = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Vo(t.pendingLanes);
        n !== 0 && (Lu(t, n | 1), ot(t, Ee()), !(te & 6) && (ao = Ee() + 500, Gn()));
      }
      break;
    case 13:
      hr(function() {
        var r = ln(e, 1);
        if (r !== null) {
          var o = qe();
          Mt(r, e, 1, o);
        }
      }), pd(e, 1);
  }
};
_u = function(e) {
  if (e.tag === 13) {
    var t = ln(e, 134217728);
    if (t !== null) {
      var n = qe();
      Mt(t, e, 134217728, n);
    }
    pd(e, 134217728);
  }
};
vg = function(e) {
  if (e.tag === 13) {
    var t = Ln(e), n = ln(e, t);
    if (n !== null) {
      var r = qe();
      Mt(n, e, t, r);
    }
    pd(e, t);
  }
};
yg = function() {
  return ie;
};
xg = function(e, t) {
  var n = ie;
  try {
    return ie = e, t();
  } finally {
    ie = n;
  }
};
hc = function(e, t, n) {
  switch (t) {
    case "input":
      if (ac(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Aa(r);
            if (!o) throw Error(A(90));
            Qm(r), ac(r, o);
          }
        }
      }
      break;
    case "textarea":
      Zm(e, n);
      break;
    case "select":
      t = n.value, t != null && Kr(e, !!n.multiple, t, !1);
  }
};
sg = ld;
ig = hr;
var ib = { usingClientEntryPoint: !1, Events: [Ls, Lr, Aa, rg, og, ld] }, Ro = { findFiberByHostInstance: rr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ab = { bundleType: Ro.bundleType, version: Ro.version, rendererPackageName: Ro.rendererPackageName, rendererConfig: Ro.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: pn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = cg(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ro.findFiberByHostInstance || ob, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ai.isDisabled && ai.supportsFiber) try {
    Pa = ai.inject(ab), zt = ai;
  } catch {
  }
}
pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ib;
pt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!md(t)) throw Error(A(200));
  return rb(e, t, null, n);
};
pt.createRoot = function(e, t) {
  if (!md(e)) throw Error(A(299));
  var n = !1, r = "", o = Bv;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = fd(e, 1, !1, null, null, n, !1, r, o), e[an] = t.current, fs(e.nodeType === 8 ? e.parentNode : e), new hd(t);
};
pt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e)));
  return e = cg(t), e = e === null ? null : e.stateNode, e;
};
pt.flushSync = function(e) {
  return hr(e);
};
pt.hydrate = function(e, t, n) {
  if (!za(t)) throw Error(A(200));
  return Ba(null, e, t, !0, n);
};
pt.hydrateRoot = function(e, t, n) {
  if (!md(e)) throw Error(A(405));
  var r = n != null && n.hydratedSources || null, o = !1, s = "", i = Bv;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = zv(t, null, e, 1, n ?? null, o, !1, s, i), e[an] = t.current, fs(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Va(t);
};
pt.render = function(e, t, n) {
  if (!za(t)) throw Error(A(200));
  return Ba(null, e, t, !1, n);
};
pt.unmountComponentAtNode = function(e) {
  if (!za(e)) throw Error(A(40));
  return e._reactRootContainer ? (hr(function() {
    Ba(null, null, e, !1, function() {
      e._reactRootContainer = null, e[an] = null;
    });
  }), !0) : !1;
};
pt.unstable_batchedUpdates = ld;
pt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!za(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return Ba(e, t, n, !1, r);
};
pt.version = "18.3.1-next-f1338f8080-20240426";
function $v() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($v);
    } catch (e) {
      console.error(e);
    }
}
$v(), $m.exports = pt;
var yo = $m.exports;
const lb = /* @__PURE__ */ Nm(yo);
var $a, _p = yo;
$a = _p.createRoot, _p.hydrateRoot;
function Uv(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Uv(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function cb() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Uv(e)) && (r && (r += " "), r += t);
  return r;
}
const gd = "-", ub = (e) => {
  const t = fb(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(gd);
      return a[0] === "" && a.length !== 1 && a.shift(), Wv(a, t) || db(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const l = n[i] || [];
      return a && r[i] ? [...l, ...r[i]] : l;
    }
  };
}, Wv = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Wv(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(gd);
  return (i = t.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : i.classGroupId;
}, Ip = /^\[(.+)\]$/, db = (e) => {
  if (Ip.test(e)) {
    const t = Ip.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, fb = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return hb(Object.entries(e.classGroups), n).forEach(([s, i]) => {
    Gc(i, r, s, t);
  }), r;
}, Gc = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Op(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (pb(o)) {
        Gc(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      Gc(i, Op(t, s), n, r);
    });
  });
}, Op = (e, t) => {
  let n = e;
  return t.split(gd).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, pb = (e) => e.isThemeGetter, hb = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a])) : s);
  return [n, o];
}) : e, mb = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (s, i) => {
    n.set(s, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let i = n.get(s);
      if (i !== void 0)
        return i;
      if ((i = r.get(s)) !== void 0)
        return o(s, i), i;
    },
    set(s, i) {
      n.has(s) ? n.set(s, i) : o(s, i);
    }
  };
}, Hv = "!", gb = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], s = t.length, i = (a) => {
    const l = [];
    let c = 0, u = 0, d;
    for (let S = 0; S < a.length; S++) {
      let m = a[S];
      if (c === 0) {
        if (m === o && (r || a.slice(S, S + s) === t)) {
          l.push(a.slice(u, S)), u = S + s;
          continue;
        }
        if (m === "/") {
          d = S;
          continue;
        }
      }
      m === "[" ? c++ : m === "]" && c--;
    }
    const f = l.length === 0 ? a : a.substring(u), g = f.startsWith(Hv), w = g ? f.substring(1) : f, v = d && d > u ? d - u : void 0;
    return {
      modifiers: l,
      hasImportantModifier: g,
      baseClassName: w,
      maybePostfixModifierPosition: v
    };
  };
  return n ? (a) => n({
    className: a,
    parseClassName: i
  }) : i;
}, vb = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, yb = (e) => ({
  cache: mb(e.cacheSize),
  parseClassName: gb(e),
  ...ub(e)
}), xb = /\s+/, wb = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, s = [], i = e.trim().split(xb);
  let a = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const c = i[l], {
      modifiers: u,
      hasImportantModifier: d,
      baseClassName: f,
      maybePostfixModifierPosition: g
    } = n(c);
    let w = !!g, v = r(w ? f.substring(0, g) : f);
    if (!v) {
      if (!w) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (v = r(f), !v) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      w = !1;
    }
    const S = vb(u).join(":"), m = d ? S + Hv : S, h = m + v;
    if (s.includes(h))
      continue;
    s.push(h);
    const y = o(v, w);
    for (let b = 0; b < y.length; ++b) {
      const C = y[b];
      s.push(m + C);
    }
    a = c + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function Sb() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Kv(t)) && (r && (r += " "), r += n);
  return r;
}
const Kv = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Kv(e[r])) && (n && (n += " "), n += t);
  return n;
};
function bb(e, ...t) {
  let n, r, o, s = i;
  function i(l) {
    const c = t.reduce((u, d) => d(u), e());
    return n = yb(c), r = n.cache.get, o = n.cache.set, s = a, a(l);
  }
  function a(l) {
    const c = r(l);
    if (c)
      return c;
    const u = wb(l, n);
    return o(l, u), u;
  }
  return function() {
    return s(Sb.apply(null, arguments));
  };
}
const le = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Gv = /^\[(?:([a-z-]+):)?(.+)\]$/i, Cb = /^\d+\/\d+$/, kb = /* @__PURE__ */ new Set(["px", "full", "screen"]), Eb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Tb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Pb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Db = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Nb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Xt = (e) => Zr(e) || kb.has(e) || Cb.test(e), vn = (e) => xo(e, "length", Ob), Zr = (e) => !!e && !Number.isNaN(Number(e)), Al = (e) => xo(e, "number", Zr), Lo = (e) => !!e && Number.isInteger(Number(e)), Mb = (e) => e.endsWith("%") && Zr(e.slice(0, -1)), X = (e) => Gv.test(e), yn = (e) => Eb.test(e), Ab = /* @__PURE__ */ new Set(["length", "size", "percentage"]), jb = (e) => xo(e, Ab, Yv), Rb = (e) => xo(e, "position", Yv), Lb = /* @__PURE__ */ new Set(["image", "url"]), _b = (e) => xo(e, Lb, Vb), Ib = (e) => xo(e, "", Fb), _o = () => !0, xo = (e, t, n) => {
  const r = Gv.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, Ob = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Tb.test(e) && !Pb.test(e)
), Yv = () => !1, Fb = (e) => Db.test(e), Vb = (e) => Nb.test(e), zb = () => {
  const e = le("colors"), t = le("spacing"), n = le("blur"), r = le("brightness"), o = le("borderColor"), s = le("borderRadius"), i = le("borderSpacing"), a = le("borderWidth"), l = le("contrast"), c = le("grayscale"), u = le("hueRotate"), d = le("invert"), f = le("gap"), g = le("gradientColorStops"), w = le("gradientColorStopPositions"), v = le("inset"), S = le("margin"), m = le("opacity"), h = le("padding"), y = le("saturate"), b = le("scale"), C = le("sepia"), k = le("skew"), E = le("space"), T = le("translate"), j = () => ["auto", "contain", "none"], M = () => ["auto", "hidden", "clip", "visible", "scroll"], D = () => ["auto", X, t], N = () => [X, t], F = () => ["", Xt, vn], U = () => ["auto", Zr, X], I = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], V = () => ["solid", "dashed", "dotted", "double", "none"], z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], L = () => ["", "0", X], $ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], G = () => [Zr, X];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [_o],
      spacing: [Xt, vn],
      blur: ["none", "", yn, X],
      brightness: G(),
      borderColor: [e],
      borderRadius: ["none", "", "full", yn, X],
      borderSpacing: N(),
      borderWidth: F(),
      contrast: G(),
      grayscale: L(),
      hueRotate: G(),
      invert: L(),
      gap: N(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Mb, vn],
      inset: D(),
      margin: D(),
      opacity: G(),
      padding: N(),
      saturate: G(),
      scale: G(),
      sepia: L(),
      skew: G(),
      space: N(),
      translate: N()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", X]
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
        columns: [yn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": $()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": $()
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
        object: [...I(), X]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: M()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": M()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": M()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: j()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": j()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": j()
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
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
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
        z: ["auto", Lo, X]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: D()
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
        flex: ["1", "auto", "initial", "none", X]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: L()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: L()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Lo, X]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [_o]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Lo, X]
        }, X]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": U()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": U()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [_o]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Lo, X]
        }, X]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": U()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": U()
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
        "auto-cols": ["auto", "min", "max", "fr", X]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", X]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...P()]
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
        content: ["normal", ...P(), "baseline"]
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
        "place-content": [...P(), "baseline"]
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
        p: [h]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [h]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [h]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [h]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [h]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [h]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [h]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [h]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [h]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [S]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [S]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [S]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [S]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [S]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [S]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [S]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [S]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [S]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [E]
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
        "space-y": [E]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", X, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [X, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [X, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [yn]
        }, yn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [X, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [X, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", yn, vn]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Al]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [_o]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", X]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Zr, Al]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Xt, X]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", X]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", X]
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
        "placeholder-opacity": [m]
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
        "text-opacity": [m]
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
        decoration: [...V(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Xt, vn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Xt, X]
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
        indent: N()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", X]
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
        content: ["none", X]
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
        "bg-opacity": [m]
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
        bg: [...I(), Rb]
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
        bg: ["auto", "cover", "contain", jb]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, _b]
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
        from: [w]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [w]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [w]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [g]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [g]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
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
        "border-opacity": [m]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...V(), "hidden"]
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
        "divide-opacity": [m]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: V()
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
        outline: ["", ...V()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Xt, X]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Xt, vn]
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
        ring: F()
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
        "ring-opacity": [m]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Xt, vn]
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
        shadow: ["", "inner", "none", yn, Ib]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [_o]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [m]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...z(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": z()
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
        "drop-shadow": ["", "none", yn, X]
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
        "hue-rotate": [u]
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
        saturate: [y]
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
        "backdrop-hue-rotate": [u]
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
        "backdrop-opacity": [m]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [y]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", X]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: G()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", X]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: G()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", X]
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
        scale: [b]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [b]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [b]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Lo, X]
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
        "skew-x": [k]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [k]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", X]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", X]
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
        "scroll-m": N()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": N()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": N()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": N()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": N()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": N()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": N()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": N()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": N()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": N()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": N()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": N()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": N()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": N()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": N()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": N()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": N()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": N()
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
        "will-change": ["auto", "scroll", "contents", "transform", X]
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
        stroke: [Xt, vn, Al]
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
}, Bb = /* @__PURE__ */ bb(zb);
function Se(...e) {
  return Bb(cb(e));
}
function vd({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card",
      className: Se(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        e
      ),
      ...t
    }
  );
}
function Xv({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: Se("px-6", e),
      ...t
    }
  );
}
function $b({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: Se("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
const nn = x.forwardRef(
  ({ className: e, variant: t = "default", size: n = "default", ...r }, o) => /* @__PURE__ */ p.jsx(
    "button",
    {
      className: Se(
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
nn.displayName = "Button";
function Fp(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function ee(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Ub(e, t) {
  const n = x.createContext(t), r = (s) => {
    const { children: i, ...a } = s, l = x.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ p.jsx(n.Provider, { value: l, children: i });
  };
  r.displayName = e + "Provider";
  function o(s) {
    const i = x.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function wo(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = x.createContext(i), l = n.length;
    n = [...n, i];
    const c = (d) => {
      var m;
      const { scope: f, children: g, ...w } = d, v = ((m = f == null ? void 0 : f[e]) == null ? void 0 : m[l]) || a, S = x.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ p.jsx(v.Provider, { value: S, children: g });
    };
    c.displayName = s + "Provider";
    function u(d, f) {
      var v;
      const g = ((v = f == null ? void 0 : f[e]) == null ? void 0 : v[l]) || a, w = x.useContext(g);
      if (w) return w;
      if (i !== void 0) return i;
      throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return [c, u];
  }
  const o = () => {
    const s = n.map((i) => x.createContext(i));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || s;
      return x.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [r, Wb(o, ...t)];
}
function Wb(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = r.reduce((a, { useScope: l, scopeName: c }) => {
        const d = l(s)[`__scope${c}`];
        return { ...a, ...d };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Vp(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Qv(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = Vp(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : Vp(e[o], null);
        }
      };
  };
}
function be(...e) {
  return x.useCallback(Qv(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Ss(e) {
  const t = /* @__PURE__ */ Hb(e), n = x.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = x.Children.toArray(s), l = a.find(Gb);
    if (l) {
      const c = l.props.children, u = a.map((d) => d === l ? x.Children.count(c) > 1 ? x.Children.only(null) : x.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: x.isValidElement(c) ? x.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Hb(e) {
  const t = x.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (x.isValidElement(o)) {
      const i = Xb(o), a = Yb(s, o.props);
      return o.type !== x.Fragment && (a.ref = r ? Qv(r, i) : i), x.cloneElement(o, a);
    }
    return x.Children.count(o) > 1 ? x.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Kb = Symbol("radix.slottable");
function Gb(e) {
  return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Kb;
}
function Yb(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      const l = s(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Xb(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function qv(e) {
  const t = e + "CollectionProvider", [n, r] = wo(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (v) => {
    const { scope: S, children: m } = v, h = Y.useRef(null), y = Y.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p.jsx(o, { scope: S, itemMap: y, collectionRef: h, children: m });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ Ss(a), c = Y.forwardRef(
    (v, S) => {
      const { scope: m, children: h } = v, y = s(a, m), b = be(S, y.collectionRef);
      return /* @__PURE__ */ p.jsx(l, { ref: b, children: h });
    }
  );
  c.displayName = a;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ Ss(u), g = Y.forwardRef(
    (v, S) => {
      const { scope: m, children: h, ...y } = v, b = Y.useRef(null), C = be(S, b), k = s(u, m);
      return Y.useEffect(() => (k.itemMap.set(b, { ref: b, ...y }), () => void k.itemMap.delete(b))), /* @__PURE__ */ p.jsx(f, { [d]: "", ref: C, children: h });
    }
  );
  g.displayName = u;
  function w(v) {
    const S = s(e + "CollectionConsumer", v);
    return Y.useCallback(() => {
      const h = S.collectionRef.current;
      if (!h) return [];
      const y = Array.from(h.querySelectorAll(`[${d}]`));
      return Array.from(S.itemMap.values()).sort(
        (k, E) => y.indexOf(k.ref.current) - y.indexOf(E.ref.current)
      );
    }, [S.collectionRef, S.itemMap]);
  }
  return [
    { Provider: i, Slot: c, ItemSlot: g },
    w,
    r
  ];
}
var Qb = x.createContext(void 0);
function yd(e) {
  const t = x.useContext(Qb);
  return e || t || "ltr";
}
var qb = [
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
], oe = qb.reduce((e, t) => {
  const n = /* @__PURE__ */ Ss(`Primitive.${t}`), r = x.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Zb(e, t) {
  e && yo.flushSync(() => e.dispatchEvent(t));
}
function Vn(e) {
  const t = x.useRef(e);
  return x.useEffect(() => {
    t.current = e;
  }), x.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Jb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Vn(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var eC = "DismissableLayer", Yc = "dismissableLayer.update", tC = "dismissableLayer.pointerDownOutside", nC = "dismissableLayer.focusOutside", zp, Zv = x.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), xd = x.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...l
    } = e, c = x.useContext(Zv), [u, d] = x.useState(null), f = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = x.useState({}), w = be(t, (E) => d(E)), v = Array.from(c.layers), [S] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), m = v.indexOf(S), h = u ? v.indexOf(u) : -1, y = c.layersWithOutsidePointerEventsDisabled.size > 0, b = h >= m, C = sC((E) => {
      const T = E.target, j = [...c.branches].some((M) => M.contains(T));
      !b || j || (o == null || o(E), i == null || i(E), E.defaultPrevented || a == null || a());
    }, f), k = iC((E) => {
      const T = E.target;
      [...c.branches].some((M) => M.contains(T)) || (s == null || s(E), i == null || i(E), E.defaultPrevented || a == null || a());
    }, f);
    return Jb((E) => {
      h === c.layers.size - 1 && (r == null || r(E), !E.defaultPrevented && a && (E.preventDefault(), a()));
    }, f), x.useEffect(() => {
      if (u)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (zp = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), Bp(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = zp);
        };
    }, [u, f, n, c]), x.useEffect(() => () => {
      u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), Bp());
    }, [u, c]), x.useEffect(() => {
      const E = () => g({});
      return document.addEventListener(Yc, E), () => document.removeEventListener(Yc, E);
    }, []), /* @__PURE__ */ p.jsx(
      oe.div,
      {
        ...l,
        ref: w,
        style: {
          pointerEvents: y ? b ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ee(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: ee(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: ee(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
xd.displayName = eC;
var rC = "DismissableLayerBranch", oC = x.forwardRef((e, t) => {
  const n = x.useContext(Zv), r = x.useRef(null), o = be(t, r);
  return x.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ p.jsx(oe.div, { ...e, ref: o });
});
oC.displayName = rC;
function sC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Vn(e), r = x.useRef(!1), o = x.useRef(() => {
  });
  return x.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          Jv(
            tC,
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
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function iC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Vn(e), r = x.useRef(!1);
  return x.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && Jv(nC, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Bp() {
  const e = new CustomEvent(Yc);
  document.dispatchEvent(e);
}
function Jv(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Zb(o, s) : o.dispatchEvent(s);
}
var jl = 0;
function ey() {
  x.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? $p()), document.body.insertAdjacentElement("beforeend", e[1] ?? $p()), jl++, () => {
      jl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), jl--;
    };
  }, []);
}
function $p() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Rl = "focusScope.autoFocusOnMount", Ll = "focusScope.autoFocusOnUnmount", Up = { bubbles: !1, cancelable: !0 }, aC = "FocusScope", wd = x.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = x.useState(null), c = Vn(o), u = Vn(s), d = x.useRef(null), f = be(t, (v) => l(v)), g = x.useRef({
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
      let v = function(y) {
        if (g.paused || !a) return;
        const b = y.target;
        a.contains(b) ? d.current = b : wn(d.current, { select: !0 });
      }, S = function(y) {
        if (g.paused || !a) return;
        const b = y.relatedTarget;
        b !== null && (a.contains(b) || wn(d.current, { select: !0 }));
      }, m = function(y) {
        if (document.activeElement === document.body)
          for (const C of y)
            C.removedNodes.length > 0 && wn(a);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", S);
      const h = new MutationObserver(m);
      return a && h.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", S), h.disconnect();
      };
    }
  }, [r, a, g.paused]), x.useEffect(() => {
    if (a) {
      Hp.add(g);
      const v = document.activeElement;
      if (!a.contains(v)) {
        const m = new CustomEvent(Rl, Up);
        a.addEventListener(Rl, c), a.dispatchEvent(m), m.defaultPrevented || (lC(pC(ty(a)), { select: !0 }), document.activeElement === v && wn(a));
      }
      return () => {
        a.removeEventListener(Rl, c), setTimeout(() => {
          const m = new CustomEvent(Ll, Up);
          a.addEventListener(Ll, u), a.dispatchEvent(m), m.defaultPrevented || wn(v ?? document.body, { select: !0 }), a.removeEventListener(Ll, u), Hp.remove(g);
        }, 0);
      };
    }
  }, [a, c, u, g]);
  const w = x.useCallback(
    (v) => {
      if (!n && !r || g.paused) return;
      const S = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, m = document.activeElement;
      if (S && m) {
        const h = v.currentTarget, [y, b] = cC(h);
        y && b ? !v.shiftKey && m === b ? (v.preventDefault(), n && wn(y, { select: !0 })) : v.shiftKey && m === y && (v.preventDefault(), n && wn(b, { select: !0 })) : m === h && v.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ p.jsx(oe.div, { tabIndex: -1, ...i, ref: f, onKeyDown: w });
});
wd.displayName = aC;
function lC(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (wn(r, { select: t }), document.activeElement !== n) return;
}
function cC(e) {
  const t = ty(e), n = Wp(t, e), r = Wp(t.reverse(), e);
  return [n, r];
}
function ty(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Wp(e, t) {
  for (const n of e)
    if (!uC(n, { upTo: t })) return n;
}
function uC(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function dC(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function wn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && dC(e) && t && e.select();
  }
}
var Hp = fC();
function fC() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Kp(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Kp(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Kp(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function pC(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ye = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {
}, hC = zm[" useId ".trim().toString()] || (() => {
}), mC = 0;
function In(e) {
  const [t, n] = x.useState(hC());
  return Ye(() => {
    n((r) => r ?? String(mC++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const gC = ["top", "right", "bottom", "left"], zn = Math.min, it = Math.max, pa = Math.round, li = Math.floor, $t = (e) => ({
  x: e,
  y: e
}), vC = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, yC = {
  start: "end",
  end: "start"
};
function Xc(e, t, n) {
  return it(e, zn(t, n));
}
function un(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function dn(e) {
  return e.split("-")[0];
}
function So(e) {
  return e.split("-")[1];
}
function Sd(e) {
  return e === "x" ? "y" : "x";
}
function bd(e) {
  return e === "y" ? "height" : "width";
}
const xC = /* @__PURE__ */ new Set(["top", "bottom"]);
function Vt(e) {
  return xC.has(dn(e)) ? "y" : "x";
}
function Cd(e) {
  return Sd(Vt(e));
}
function wC(e, t, n) {
  n === void 0 && (n = !1);
  const r = So(e), o = Cd(e), s = bd(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = ha(i)), [i, ha(i)];
}
function SC(e) {
  const t = ha(e);
  return [Qc(e), t, Qc(t)];
}
function Qc(e) {
  return e.replace(/start|end/g, (t) => yC[t]);
}
const Gp = ["left", "right"], Yp = ["right", "left"], bC = ["top", "bottom"], CC = ["bottom", "top"];
function kC(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Yp : Gp : t ? Gp : Yp;
    case "left":
    case "right":
      return t ? bC : CC;
    default:
      return [];
  }
}
function EC(e, t, n, r) {
  const o = So(e);
  let s = kC(dn(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Qc)))), s;
}
function ha(e) {
  return e.replace(/left|right|bottom|top/g, (t) => vC[t]);
}
function TC(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ny(e) {
  return typeof e != "number" ? TC(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ma(e) {
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
function Xp(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = Vt(t), i = Cd(t), a = bd(i), l = dn(t), c = s === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let g;
  switch (l) {
    case "top":
      g = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (So(t)) {
    case "start":
      g[i] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      g[i] += f * (n && c ? -1 : 1);
      break;
  }
  return g;
}
const PC = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, a = s.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = Xp(c, r, l), f = r, g = {}, w = 0;
  for (let v = 0; v < a.length; v++) {
    const {
      name: S,
      fn: m
    } = a[v], {
      x: h,
      y,
      data: b,
      reset: C
    } = await m({
      x: u,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: g,
      rects: c,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = h ?? u, d = y ?? d, g = {
      ...g,
      [S]: {
        ...g[S],
        ...b
      }
    }, C && w <= 50 && (w++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (c = C.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: u,
      y: d
    } = Xp(c, f, l)), v = -1);
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: g
  };
};
async function bs(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: i,
    elements: a,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: g = 0
  } = un(t, e), w = ny(g), S = a[f ? d === "floating" ? "reference" : "floating" : d], m = ma(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(S))) == null || n ? S : S.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), h = d === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), b = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = ma(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: h,
    offsetParent: y,
    strategy: l
  }) : h);
  return {
    top: (m.top - C.top + w.top) / b.y,
    bottom: (C.bottom - m.bottom + w.bottom) / b.y,
    left: (m.left - C.left + w.left) / b.x,
    right: (C.right - m.right + w.right) / b.x
  };
}
const DC = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: i,
      elements: a,
      middlewareData: l
    } = t, {
      element: c,
      padding: u = 0
    } = un(e, t) || {};
    if (c == null)
      return {};
    const d = ny(u), f = {
      x: n,
      y: r
    }, g = Cd(o), w = bd(g), v = await i.getDimensions(c), S = g === "y", m = S ? "top" : "left", h = S ? "bottom" : "right", y = S ? "clientHeight" : "clientWidth", b = s.reference[w] + s.reference[g] - f[g] - s.floating[w], C = f[g] - s.reference[g], k = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let E = k ? k[y] : 0;
    (!E || !await (i.isElement == null ? void 0 : i.isElement(k))) && (E = a.floating[y] || s.floating[w]);
    const T = b / 2 - C / 2, j = E / 2 - v[w] / 2 - 1, M = zn(d[m], j), D = zn(d[h], j), N = M, F = E - v[w] - D, U = E / 2 - v[w] / 2 + T, I = Xc(N, U, F), V = !l.arrow && So(o) != null && U !== I && s.reference[w] / 2 - (U < N ? M : D) - v[w] / 2 < 0, z = V ? U < N ? U - N : U - F : 0;
    return {
      [g]: f[g] + z,
      data: {
        [g]: I,
        centerOffset: U - I - z,
        ...V && {
          alignmentOffset: z
        }
      },
      reset: V
    };
  }
}), NC = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: i,
        initialPlacement: a,
        platform: l,
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: v = !0,
        ...S
      } = un(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const m = dn(o), h = Vt(a), y = dn(a) === a, b = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), C = f || (y || !v ? [ha(a)] : SC(a)), k = w !== "none";
      !f && k && C.push(...EC(a, v, w, b));
      const E = [a, ...C], T = await bs(t, S), j = [];
      let M = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (u && j.push(T[m]), d) {
        const U = wC(o, i, b);
        j.push(T[U[0]], T[U[1]]);
      }
      if (M = [...M, {
        placement: o,
        overflows: j
      }], !j.every((U) => U <= 0)) {
        var D, N;
        const U = (((D = s.flip) == null ? void 0 : D.index) || 0) + 1, I = E[U];
        if (I && (!(d === "alignment" ? h !== Vt(I) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        M.every((P) => Vt(P.placement) === h ? P.overflows[0] > 0 : !0)))
          return {
            data: {
              index: U,
              overflows: M
            },
            reset: {
              placement: I
            }
          };
        let V = (N = M.filter((z) => z.overflows[0] <= 0).sort((z, P) => z.overflows[1] - P.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!V)
          switch (g) {
            case "bestFit": {
              var F;
              const z = (F = M.filter((P) => {
                if (k) {
                  const L = Vt(P.placement);
                  return L === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((L) => L > 0).reduce((L, $) => L + $, 0)]).sort((P, L) => P[1] - L[1])[0]) == null ? void 0 : F[0];
              z && (V = z);
              break;
            }
            case "initialPlacement":
              V = a;
              break;
          }
        if (o !== V)
          return {
            reset: {
              placement: V
            }
          };
      }
      return {};
    }
  };
};
function Qp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function qp(e) {
  return gC.some((t) => e[t] >= 0);
}
const MC = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = un(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await bs(t, {
            ...o,
            elementContext: "reference"
          }), i = Qp(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: qp(i)
            }
          };
        }
        case "escaped": {
          const s = await bs(t, {
            ...o,
            altBoundary: !0
          }), i = Qp(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: qp(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, ry = /* @__PURE__ */ new Set(["left", "top"]);
async function AC(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = dn(n), a = So(n), l = Vt(n) === "y", c = ry.has(i) ? -1 : 1, u = s && l ? -1 : 1, d = un(t, e);
  let {
    mainAxis: f,
    crossAxis: g,
    alignmentAxis: w
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof w == "number" && (g = a === "end" ? w * -1 : w), l ? {
    x: g * u,
    y: f * c
  } : {
    x: f * c,
    y: g * u
  };
}
const jC = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: i,
        middlewareData: a
      } = t, l = await AC(t, e);
      return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, RC = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: i = !1,
        limiter: a = {
          fn: (S) => {
            let {
              x: m,
              y: h
            } = S;
            return {
              x: m,
              y: h
            };
          }
        },
        ...l
      } = un(e, t), c = {
        x: n,
        y: r
      }, u = await bs(t, l), d = Vt(dn(o)), f = Sd(d);
      let g = c[f], w = c[d];
      if (s) {
        const S = f === "y" ? "top" : "left", m = f === "y" ? "bottom" : "right", h = g + u[S], y = g - u[m];
        g = Xc(h, g, y);
      }
      if (i) {
        const S = d === "y" ? "top" : "left", m = d === "y" ? "bottom" : "right", h = w + u[S], y = w - u[m];
        w = Xc(h, w, y);
      }
      const v = a.fn({
        ...t,
        [f]: g,
        [d]: w
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [f]: s,
            [d]: i
          }
        }
      };
    }
  };
}, LC = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: s,
        middlewareData: i
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = un(e, t), u = {
        x: n,
        y: r
      }, d = Vt(o), f = Sd(d);
      let g = u[f], w = u[d];
      const v = un(a, t), S = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (l) {
        const y = f === "y" ? "height" : "width", b = s.reference[f] - s.floating[y] + S.mainAxis, C = s.reference[f] + s.reference[y] - S.mainAxis;
        g < b ? g = b : g > C && (g = C);
      }
      if (c) {
        var m, h;
        const y = f === "y" ? "width" : "height", b = ry.has(dn(o)), C = s.reference[d] - s.floating[y] + (b && ((m = i.offset) == null ? void 0 : m[d]) || 0) + (b ? 0 : S.crossAxis), k = s.reference[d] + s.reference[y] + (b ? 0 : ((h = i.offset) == null ? void 0 : h[d]) || 0) - (b ? S.crossAxis : 0);
        w < C ? w = C : w > k && (w = k);
      }
      return {
        [f]: g,
        [d]: w
      };
    }
  };
}, _C = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: s,
        platform: i,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...c
      } = un(e, t), u = await bs(t, c), d = dn(o), f = So(o), g = Vt(o) === "y", {
        width: w,
        height: v
      } = s.floating;
      let S, m;
      d === "top" || d === "bottom" ? (S = d, m = f === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (m = d, S = f === "end" ? "top" : "bottom");
      const h = v - u.top - u.bottom, y = w - u.left - u.right, b = zn(v - u[S], h), C = zn(w - u[m], y), k = !t.middlewareData.shift;
      let E = b, T = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = y), (r = t.middlewareData.shift) != null && r.enabled.y && (E = h), k && !f) {
        const M = it(u.left, 0), D = it(u.right, 0), N = it(u.top, 0), F = it(u.bottom, 0);
        g ? T = w - 2 * (M !== 0 || D !== 0 ? M + D : it(u.left, u.right)) : E = v - 2 * (N !== 0 || F !== 0 ? N + F : it(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: T,
        availableHeight: E
      });
      const j = await i.getDimensions(a.floating);
      return w !== j.width || v !== j.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ua() {
  return typeof window < "u";
}
function bo(e) {
  return oy(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ct(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Kt(e) {
  var t;
  return (t = (oy(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function oy(e) {
  return Ua() ? e instanceof Node || e instanceof ct(e).Node : !1;
}
function jt(e) {
  return Ua() ? e instanceof Element || e instanceof ct(e).Element : !1;
}
function Ht(e) {
  return Ua() ? e instanceof HTMLElement || e instanceof ct(e).HTMLElement : !1;
}
function Zp(e) {
  return !Ua() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ct(e).ShadowRoot;
}
const IC = /* @__PURE__ */ new Set(["inline", "contents"]);
function Is(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Rt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !IC.has(o);
}
const OC = /* @__PURE__ */ new Set(["table", "td", "th"]);
function FC(e) {
  return OC.has(bo(e));
}
const VC = [":popover-open", ":modal"];
function Wa(e) {
  return VC.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const zC = ["transform", "translate", "scale", "rotate", "perspective"], BC = ["transform", "translate", "scale", "rotate", "perspective", "filter"], $C = ["paint", "layout", "strict", "content"];
function kd(e) {
  const t = Ed(), n = jt(e) ? Rt(e) : e;
  return zC.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || BC.some((r) => (n.willChange || "").includes(r)) || $C.some((r) => (n.contain || "").includes(r));
}
function UC(e) {
  let t = Bn(e);
  for (; Ht(t) && !lo(t); ) {
    if (kd(t))
      return t;
    if (Wa(t))
      return null;
    t = Bn(t);
  }
  return null;
}
function Ed() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const WC = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function lo(e) {
  return WC.has(bo(e));
}
function Rt(e) {
  return ct(e).getComputedStyle(e);
}
function Ha(e) {
  return jt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Bn(e) {
  if (bo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Zp(e) && e.host || // Fallback.
    Kt(e)
  );
  return Zp(t) ? t.host : t;
}
function sy(e) {
  const t = Bn(e);
  return lo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ht(t) && Is(t) ? t : sy(t);
}
function Cs(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = sy(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = ct(o);
  if (s) {
    const a = qc(i);
    return t.concat(i, i.visualViewport || [], Is(o) ? o : [], a && n ? Cs(a) : []);
  }
  return t.concat(o, Cs(o, [], n));
}
function qc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function iy(e) {
  const t = Rt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ht(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = pa(n) !== s || pa(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function Td(e) {
  return jt(e) ? e : e.contextElement;
}
function Jr(e) {
  const t = Td(e);
  if (!Ht(t))
    return $t(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = iy(t);
  let i = (s ? pa(n.width) : n.width) / r, a = (s ? pa(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const HC = /* @__PURE__ */ $t(0);
function ay(e) {
  const t = ct(e);
  return !Ed() || !t.visualViewport ? HC : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function KC(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ct(e) ? !1 : t;
}
function mr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = Td(e);
  let i = $t(1);
  t && (r ? jt(r) && (i = Jr(r)) : i = Jr(e));
  const a = KC(s, n, r) ? ay(s) : $t(0);
  let l = (o.left + a.x) / i.x, c = (o.top + a.y) / i.y, u = o.width / i.x, d = o.height / i.y;
  if (s) {
    const f = ct(s), g = r && jt(r) ? ct(r) : r;
    let w = f, v = qc(w);
    for (; v && r && g !== w; ) {
      const S = Jr(v), m = v.getBoundingClientRect(), h = Rt(v), y = m.left + (v.clientLeft + parseFloat(h.paddingLeft)) * S.x, b = m.top + (v.clientTop + parseFloat(h.paddingTop)) * S.y;
      l *= S.x, c *= S.y, u *= S.x, d *= S.y, l += y, c += b, w = ct(v), v = qc(w);
    }
  }
  return ma({
    width: u,
    height: d,
    x: l,
    y: c
  });
}
function Pd(e, t) {
  const n = Ha(e).scrollLeft;
  return t ? t.left + n : mr(Kt(e)).left + n;
}
function ly(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Pd(e, r)
  )), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function GC(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = Kt(r), a = t ? Wa(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = $t(1);
  const u = $t(0), d = Ht(r);
  if ((d || !d && !s) && ((bo(r) !== "body" || Is(i)) && (l = Ha(r)), Ht(r))) {
    const g = mr(r);
    c = Jr(r), u.x = g.x + r.clientLeft, u.y = g.y + r.clientTop;
  }
  const f = i && !d && !s ? ly(i, l, !0) : $t(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y + f.y
  };
}
function YC(e) {
  return Array.from(e.getClientRects());
}
function XC(e) {
  const t = Kt(e), n = Ha(e), r = e.ownerDocument.body, o = it(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = it(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Pd(e);
  const a = -n.scrollTop;
  return Rt(r).direction === "rtl" && (i += it(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
function QC(e, t) {
  const n = ct(e), r = Kt(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const c = Ed();
    (!c || c && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
const qC = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function ZC(e, t) {
  const n = mr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = Ht(e) ? Jr(e) : $t(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, c = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: c
  };
}
function Jp(e, t, n) {
  let r;
  if (t === "viewport")
    r = QC(e, n);
  else if (t === "document")
    r = XC(Kt(e));
  else if (jt(t))
    r = ZC(t, n);
  else {
    const o = ay(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ma(r);
}
function cy(e, t) {
  const n = Bn(e);
  return n === t || !jt(n) || lo(n) ? !1 : Rt(n).position === "fixed" || cy(n, t);
}
function JC(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Cs(e, [], !1).filter((a) => jt(a) && bo(a) !== "body"), o = null;
  const s = Rt(e).position === "fixed";
  let i = s ? Bn(e) : e;
  for (; jt(i) && !lo(i); ) {
    const a = Rt(i), l = kd(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && qC.has(o.position) || Is(i) && !l && cy(e, i)) ? r = r.filter((u) => u !== i) : o = a, i = Bn(i);
  }
  return t.set(e, r), r;
}
function ek(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Wa(t) ? [] : JC(t, this._c) : [].concat(n), r], a = i[0], l = i.reduce((c, u) => {
    const d = Jp(t, u, o);
    return c.top = it(d.top, c.top), c.right = zn(d.right, c.right), c.bottom = zn(d.bottom, c.bottom), c.left = it(d.left, c.left), c;
  }, Jp(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function tk(e) {
  const {
    width: t,
    height: n
  } = iy(e);
  return {
    width: t,
    height: n
  };
}
function nk(e, t, n) {
  const r = Ht(t), o = Kt(t), s = n === "fixed", i = mr(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = $t(0);
  function c() {
    l.x = Pd(o);
  }
  if (r || !r && !s)
    if ((bo(t) !== "body" || Is(o)) && (a = Ha(t)), r) {
      const g = mr(t, !0, s, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && c();
  s && !r && o && c();
  const u = o && !r && !s ? ly(o, a) : $t(0), d = i.left + a.scrollLeft - l.x - u.x, f = i.top + a.scrollTop - l.y - u.y;
  return {
    x: d,
    y: f,
    width: i.width,
    height: i.height
  };
}
function _l(e) {
  return Rt(e).position === "static";
}
function eh(e, t) {
  if (!Ht(e) || Rt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Kt(e) === n && (n = n.ownerDocument.body), n;
}
function uy(e, t) {
  const n = ct(e);
  if (Wa(e))
    return n;
  if (!Ht(e)) {
    let o = Bn(e);
    for (; o && !lo(o); ) {
      if (jt(o) && !_l(o))
        return o;
      o = Bn(o);
    }
    return n;
  }
  let r = eh(e, t);
  for (; r && FC(r) && _l(r); )
    r = eh(r, t);
  return r && lo(r) && _l(r) && !kd(r) ? n : r || UC(e) || n;
}
const rk = async function(e) {
  const t = this.getOffsetParent || uy, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: nk(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function ok(e) {
  return Rt(e).direction === "rtl";
}
const sk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: GC,
  getDocumentElement: Kt,
  getClippingRect: ek,
  getOffsetParent: uy,
  getElementRects: rk,
  getClientRects: YC,
  getDimensions: tk,
  getScale: Jr,
  isElement: jt,
  isRTL: ok
};
function dy(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ik(e, t) {
  let n = null, r;
  const o = Kt(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const c = e.getBoundingClientRect(), {
      left: u,
      top: d,
      width: f,
      height: g
    } = c;
    if (a || t(), !f || !g)
      return;
    const w = li(d), v = li(o.clientWidth - (u + f)), S = li(o.clientHeight - (d + g)), m = li(u), y = {
      rootMargin: -w + "px " + -v + "px " + -S + "px " + -m + "px",
      threshold: it(0, zn(1, l)) || 1
    };
    let b = !0;
    function C(k) {
      const E = k[0].intersectionRatio;
      if (E !== l) {
        if (!b)
          return i();
        E ? i(!1, E) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !dy(c, e.getBoundingClientRect()) && i(), b = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, y);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function ak(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = Td(e), u = o || s ? [...c ? Cs(c) : [], ...Cs(t)] : [];
  u.forEach((m) => {
    o && m.addEventListener("scroll", n, {
      passive: !0
    }), s && m.addEventListener("resize", n);
  });
  const d = c && a ? ik(c, n) : null;
  let f = -1, g = null;
  i && (g = new ResizeObserver((m) => {
    let [h] = m;
    h && h.target === c && g && (g.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var y;
      (y = g) == null || y.observe(t);
    })), n();
  }), c && !l && g.observe(c), g.observe(t));
  let w, v = l ? mr(e) : null;
  l && S();
  function S() {
    const m = mr(e);
    v && !dy(v, m) && n(), v = m, w = requestAnimationFrame(S);
  }
  return n(), () => {
    var m;
    u.forEach((h) => {
      o && h.removeEventListener("scroll", n), s && h.removeEventListener("resize", n);
    }), d == null || d(), (m = g) == null || m.disconnect(), g = null, l && cancelAnimationFrame(w);
  };
}
const lk = jC, ck = RC, uk = NC, dk = _C, fk = MC, th = DC, pk = LC, hk = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: sk,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return PC(e, t, {
    ...o,
    platform: s
  });
};
var mk = typeof document < "u", gk = function() {
}, _i = mk ? x.useLayoutEffect : gk;
function ga(e, t) {
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
        if (!ga(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !ga(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function fy(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function nh(e, t) {
  const n = fy(e);
  return Math.round(t * n) / n;
}
function Il(e) {
  const t = x.useRef(e);
  return _i(() => {
    t.current = e;
  }), t;
}
function vk(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: c
  } = e, [u, d] = x.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, g] = x.useState(r);
  ga(f, r) || g(r);
  const [w, v] = x.useState(null), [S, m] = x.useState(null), h = x.useCallback((P) => {
    P !== k.current && (k.current = P, v(P));
  }, []), y = x.useCallback((P) => {
    P !== E.current && (E.current = P, m(P));
  }, []), b = s || w, C = i || S, k = x.useRef(null), E = x.useRef(null), T = x.useRef(u), j = l != null, M = Il(l), D = Il(o), N = Il(c), F = x.useCallback(() => {
    if (!k.current || !E.current)
      return;
    const P = {
      placement: t,
      strategy: n,
      middleware: f
    };
    D.current && (P.platform = D.current), hk(k.current, E.current, P).then((L) => {
      const $ = {
        ...L,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: N.current !== !1
      };
      U.current && !ga(T.current, $) && (T.current = $, yo.flushSync(() => {
        d($);
      }));
    });
  }, [f, t, n, D, N]);
  _i(() => {
    c === !1 && T.current.isPositioned && (T.current.isPositioned = !1, d((P) => ({
      ...P,
      isPositioned: !1
    })));
  }, [c]);
  const U = x.useRef(!1);
  _i(() => (U.current = !0, () => {
    U.current = !1;
  }), []), _i(() => {
    if (b && (k.current = b), C && (E.current = C), b && C) {
      if (M.current)
        return M.current(b, C, F);
      F();
    }
  }, [b, C, F, M, j]);
  const I = x.useMemo(() => ({
    reference: k,
    floating: E,
    setReference: h,
    setFloating: y
  }), [h, y]), V = x.useMemo(() => ({
    reference: b,
    floating: C
  }), [b, C]), z = x.useMemo(() => {
    const P = {
      position: n,
      left: 0,
      top: 0
    };
    if (!V.floating)
      return P;
    const L = nh(V.floating, u.x), $ = nh(V.floating, u.y);
    return a ? {
      ...P,
      transform: "translate(" + L + "px, " + $ + "px)",
      ...fy(V.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: L,
      top: $
    };
  }, [n, a, V.floating, u.x, u.y]);
  return x.useMemo(() => ({
    ...u,
    update: F,
    refs: I,
    elements: V,
    floatingStyles: z
  }), [u, F, I, V, z]);
}
const yk = (e) => {
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
      return r && t(r) ? r.current != null ? th({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? th({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, xk = (e, t) => ({
  ...lk(e),
  options: [e, t]
}), wk = (e, t) => ({
  ...ck(e),
  options: [e, t]
}), Sk = (e, t) => ({
  ...pk(e),
  options: [e, t]
}), bk = (e, t) => ({
  ...uk(e),
  options: [e, t]
}), Ck = (e, t) => ({
  ...dk(e),
  options: [e, t]
}), kk = (e, t) => ({
  ...fk(e),
  options: [e, t]
}), Ek = (e, t) => ({
  ...yk(e),
  options: [e, t]
});
var Tk = "Arrow", py = x.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ p.jsx(
    oe.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ p.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
py.displayName = Tk;
var Pk = py;
function Dk(e) {
  const [t, n] = x.useState(void 0);
  return Ye(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let i, a;
        if ("borderBoxSize" in s) {
          const l = s.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          i = c.inlineSize, a = c.blockSize;
        } else
          i = e.offsetWidth, a = e.offsetHeight;
        n({ width: i, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Dd = "Popper", [hy, my] = wo(Dd), [Nk, gy] = hy(Dd), vy = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = x.useState(null);
  return /* @__PURE__ */ p.jsx(Nk, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
vy.displayName = Dd;
var yy = "PopperAnchor", xy = x.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = gy(yy, n), i = x.useRef(null), a = be(t, i), l = x.useRef(null);
    return x.useEffect(() => {
      const c = l.current;
      l.current = (r == null ? void 0 : r.current) || i.current, c !== l.current && s.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ p.jsx(oe.div, { ...o, ref: a });
  }
);
xy.displayName = yy;
var Nd = "PopperContent", [Mk, Ak] = hy(Nd), wy = x.forwardRef(
  (e, t) => {
    var H, ne, Ce, O, _, W;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: i = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: u = 0,
      sticky: d = "partial",
      hideWhenDetached: f = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: w,
      ...v
    } = e, S = gy(Nd, n), [m, h] = x.useState(null), y = be(t, (Z) => h(Z)), [b, C] = x.useState(null), k = Dk(b), E = (k == null ? void 0 : k.width) ?? 0, T = (k == null ? void 0 : k.height) ?? 0, j = r + (s !== "center" ? "-" + s : ""), M = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, D = Array.isArray(c) ? c : [c], N = D.length > 0, F = {
      padding: M,
      boundary: D.filter(Rk),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: N
    }, { refs: U, floatingStyles: I, placement: V, isPositioned: z, middlewareData: P } = vk({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: j,
      whileElementsMounted: (...Z) => ak(...Z, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: S.anchor
      },
      middleware: [
        xk({ mainAxis: o + T, alignmentAxis: i }),
        l && wk({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? Sk() : void 0,
          ...F
        }),
        l && bk({ ...F }),
        Ck({
          ...F,
          apply: ({ elements: Z, rects: Q, availableWidth: pe, availableHeight: Xe }) => {
            const { width: Pe, height: br } = Q.reference, Gt = Z.floating.style;
            Gt.setProperty("--radix-popper-available-width", `${pe}px`), Gt.setProperty("--radix-popper-available-height", `${Xe}px`), Gt.setProperty("--radix-popper-anchor-width", `${Pe}px`), Gt.setProperty("--radix-popper-anchor-height", `${br}px`);
          }
        }),
        b && Ek({ element: b, padding: a }),
        Lk({ arrowWidth: E, arrowHeight: T }),
        f && kk({ strategy: "referenceHidden", ...F })
      ]
    }), [L, $] = Cy(V), G = Vn(w);
    Ye(() => {
      z && (G == null || G());
    }, [z, G]);
    const se = (H = P.arrow) == null ? void 0 : H.x, ze = (ne = P.arrow) == null ? void 0 : ne.y, Te = ((Ce = P.arrow) == null ? void 0 : Ce.centerOffset) !== 0, [Be, Me] = x.useState();
    return Ye(() => {
      m && Me(window.getComputedStyle(m).zIndex);
    }, [m]), /* @__PURE__ */ p.jsx(
      "div",
      {
        ref: U.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...I,
          transform: z ? I.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Be,
          "--radix-popper-transform-origin": [
            (O = P.transformOrigin) == null ? void 0 : O.x,
            (_ = P.transformOrigin) == null ? void 0 : _.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((W = P.hide) == null ? void 0 : W.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ p.jsx(
          Mk,
          {
            scope: n,
            placedSide: L,
            onArrowChange: C,
            arrowX: se,
            arrowY: ze,
            shouldHideArrow: Te,
            children: /* @__PURE__ */ p.jsx(
              oe.div,
              {
                "data-side": L,
                "data-align": $,
                ...v,
                ref: y,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: z ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
wy.displayName = Nd;
var Sy = "PopperArrow", jk = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, by = x.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = Ak(Sy, r), i = jk[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ p.jsx(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ p.jsx(
          Pk,
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
by.displayName = Sy;
function Rk(e) {
  return e !== null;
}
var Lk = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var S, m, h;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((S = o.arrow) == null ? void 0 : S.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [c, u] = Cy(n), d = { start: "0%", center: "50%", end: "100%" }[u], f = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + a / 2, g = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + l / 2;
    let w = "", v = "";
    return c === "bottom" ? (w = i ? d : `${f}px`, v = `${-l}px`) : c === "top" ? (w = i ? d : `${f}px`, v = `${r.floating.height + l}px`) : c === "right" ? (w = `${-l}px`, v = i ? d : `${g}px`) : c === "left" && (w = `${r.floating.width + l}px`, v = i ? d : `${g}px`), { data: { x: w, y: v } };
  }
});
function Cy(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var _k = vy, Ik = xy, Ok = wy, Fk = by, Vk = "Portal", Md = x.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, s] = x.useState(!1);
  Ye(() => s(!0), []);
  const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return i ? lb.createPortal(/* @__PURE__ */ p.jsx(oe.div, { ...r, ref: t }), i) : null;
});
Md.displayName = Vk;
var zk = zm[" useInsertionEffect ".trim().toString()] || Ye;
function ks({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, i] = Bk({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o;
  {
    const u = x.useRef(e !== void 0);
    x.useEffect(() => {
      const d = u.current;
      d !== a && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = a;
    }, [a, r]);
  }
  const c = x.useCallback(
    (u) => {
      var d;
      if (a) {
        const f = $k(u) ? u(e) : u;
        f !== e && ((d = i.current) == null || d.call(i, f));
      } else
        s(u);
    },
    [a, e, s, i]
  );
  return [l, c];
}
function Bk({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = x.useState(e), o = x.useRef(n), s = x.useRef(t);
  return zk(() => {
    s.current = t;
  }, [t]), x.useEffect(() => {
    var i;
    o.current !== n && ((i = s.current) == null || i.call(s, n), o.current = n);
  }, [n, o]), [n, r, s];
}
function $k(e) {
  return typeof e == "function";
}
function Uk(e) {
  const t = x.useRef({ value: e, previous: e });
  return x.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var ky = Object.freeze({
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
}), Wk = "VisuallyHidden", Hk = x.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(
    oe.span,
    {
      ...e,
      ref: t,
      style: { ...ky, ...e.style }
    }
  )
);
Hk.displayName = Wk;
var Kk = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Er = /* @__PURE__ */ new WeakMap(), ci = /* @__PURE__ */ new WeakMap(), ui = {}, Ol = 0, Ey = function(e) {
  return e && (e.host || Ey(e.parentNode));
}, Gk = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ey(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Yk = function(e, t, n, r) {
  var o = Gk(t, Array.isArray(e) ? e : [e]);
  ui[n] || (ui[n] = /* @__PURE__ */ new WeakMap());
  var s = ui[n], i = [], a = /* @__PURE__ */ new Set(), l = new Set(o), c = function(d) {
    !d || a.has(d) || (a.add(d), c(d.parentNode));
  };
  o.forEach(c);
  var u = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (a.has(f))
        u(f);
      else
        try {
          var g = f.getAttribute(r), w = g !== null && g !== "false", v = (Er.get(f) || 0) + 1, S = (s.get(f) || 0) + 1;
          Er.set(f, v), s.set(f, S), i.push(f), v === 1 && w && ci.set(f, !0), S === 1 && f.setAttribute(n, "true"), w || f.setAttribute(r, "true");
        } catch (m) {
          console.error("aria-hidden: cannot operate on ", f, m);
        }
    });
  };
  return u(t), a.clear(), Ol++, function() {
    i.forEach(function(d) {
      var f = Er.get(d) - 1, g = s.get(d) - 1;
      Er.set(d, f), s.set(d, g), f || (ci.has(d) || d.removeAttribute(r), ci.delete(d)), g || d.removeAttribute(n);
    }), Ol--, Ol || (Er = /* @__PURE__ */ new WeakMap(), Er = /* @__PURE__ */ new WeakMap(), ci = /* @__PURE__ */ new WeakMap(), ui = {});
  };
}, Ty = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Kk(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Yk(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Ft = function() {
  return Ft = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Ft.apply(this, arguments);
};
function Py(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Xk(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Ii = "right-scroll-bar-position", Oi = "width-before-scroll-bar", Qk = "with-scroll-bars-hidden", qk = "--removed-body-scroll-bar-size";
function Fl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Zk(e, t) {
  var n = x.useState(function() {
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
var Jk = typeof window < "u" ? x.useLayoutEffect : x.useEffect, rh = /* @__PURE__ */ new WeakMap();
function eE(e, t) {
  var n = Zk(null, function(r) {
    return e.forEach(function(o) {
      return Fl(o, r);
    });
  });
  return Jk(function() {
    var r = rh.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || Fl(a, null);
      }), s.forEach(function(a) {
        o.has(a) || Fl(a, i);
      });
    }
    rh.set(n, e);
  }, [e]), n;
}
function tE(e) {
  return e;
}
function nE(e, t) {
  t === void 0 && (t = tE);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var i = t(s, r);
      return n.push(i), function() {
        n = n.filter(function(a) {
          return a !== i;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(s);
      }
      n = {
        push: function(a) {
          return s(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      r = !0;
      var i = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(s), i = n;
      }
      var l = function() {
        var u = i;
        i = [], u.forEach(s);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(u) {
          i.push(u), c();
        },
        filter: function(u) {
          return i = i.filter(u), n;
        }
      };
    }
  };
  return o;
}
function rE(e) {
  e === void 0 && (e = {});
  var t = nE(null);
  return t.options = Ft({ async: !0, ssr: !1 }, e), t;
}
var Dy = function(e) {
  var t = e.sideCar, n = Py(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return x.createElement(r, Ft({}, n));
};
Dy.isSideCarExport = !0;
function oE(e, t) {
  return e.useMedium(t), Dy;
}
var Ny = rE(), Vl = function() {
}, Ka = x.forwardRef(function(e, t) {
  var n = x.useRef(null), r = x.useState({
    onScrollCapture: Vl,
    onWheelCapture: Vl,
    onTouchMoveCapture: Vl
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, g = e.noRelative, w = e.noIsolation, v = e.inert, S = e.allowPinchZoom, m = e.as, h = m === void 0 ? "div" : m, y = e.gapMode, b = Py(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = f, k = eE([n, t]), E = Ft(Ft({}, b), o);
  return x.createElement(
    x.Fragment,
    null,
    u && x.createElement(C, { sideCar: Ny, removeScrollBar: c, shards: d, noRelative: g, noIsolation: w, inert: v, setCallbacks: s, allowPinchZoom: !!S, lockRef: n, gapMode: y }),
    i ? x.cloneElement(x.Children.only(a), Ft(Ft({}, E), { ref: k })) : x.createElement(h, Ft({}, E, { className: l, ref: k }), a)
  );
});
Ka.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ka.classNames = {
  fullWidth: Oi,
  zeroRight: Ii
};
var sE = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function iE() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = sE();
  return t && e.setAttribute("nonce", t), e;
}
function aE(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function lE(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var cE = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = iE()) && (aE(t, n), lE(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, uE = function() {
  var e = cE();
  return function(t, n) {
    x.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, My = function() {
  var e = uE(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, dE = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, zl = function(e) {
  return parseInt(e || "", 10) || 0;
}, fE = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [zl(n), zl(r), zl(o)];
}, pE = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return dE;
  var t = fE(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, hE = My(), eo = "data-scroll-locked", mE = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Qk, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(eo, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ii, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Oi, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ii, " .").concat(Ii, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Oi, " .").concat(Oi, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(eo, `] {
    `).concat(qk, ": ").concat(a, `px;
  }
`);
}, oh = function() {
  var e = parseInt(document.body.getAttribute(eo) || "0", 10);
  return isFinite(e) ? e : 0;
}, gE = function() {
  x.useEffect(function() {
    return document.body.setAttribute(eo, (oh() + 1).toString()), function() {
      var e = oh() - 1;
      e <= 0 ? document.body.removeAttribute(eo) : document.body.setAttribute(eo, e.toString());
    };
  }, []);
}, vE = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  gE();
  var s = x.useMemo(function() {
    return pE(o);
  }, [o]);
  return x.createElement(hE, { styles: mE(s, !t, o, n ? "" : "!important") });
}, Zc = !1;
if (typeof window < "u")
  try {
    var di = Object.defineProperty({}, "passive", {
      get: function() {
        return Zc = !0, !0;
      }
    });
    window.addEventListener("test", di, di), window.removeEventListener("test", di, di);
  } catch {
    Zc = !1;
  }
var Tr = Zc ? { passive: !1 } : !1, yE = function(e) {
  return e.tagName === "TEXTAREA";
}, Ay = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !yE(e) && n[t] === "visible")
  );
}, xE = function(e) {
  return Ay(e, "overflowY");
}, wE = function(e) {
  return Ay(e, "overflowX");
}, sh = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = jy(e, r);
    if (o) {
      var s = Ry(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, SE = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, bE = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, jy = function(e, t) {
  return e === "v" ? xE(t) : wE(t);
}, Ry = function(e, t) {
  return e === "v" ? SE(t) : bE(t);
}, CE = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, kE = function(e, t, n, r, o) {
  var s = CE(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, l = t.contains(a), c = !1, u = i > 0, d = 0, f = 0;
  do {
    if (!a)
      break;
    var g = Ry(e, a), w = g[0], v = g[1], S = g[2], m = v - S - s * w;
    (w || m) && jy(e, a) && (d += m, f += w);
    var h = a.parentNode;
    a = h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h.host : h;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (u && Math.abs(d) < 1 || !u && Math.abs(f) < 1) && (c = !0), c;
}, fi = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ih = function(e) {
  return [e.deltaX, e.deltaY];
}, ah = function(e) {
  return e && "current" in e ? e.current : e;
}, EE = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, TE = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, PE = 0, Pr = [];
function DE(e) {
  var t = x.useRef([]), n = x.useRef([0, 0]), r = x.useRef(), o = x.useState(PE++)[0], s = x.useState(My)[0], i = x.useRef(e);
  x.useEffect(function() {
    i.current = e;
  }, [e]), x.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Xk([e.lockRef.current], (e.shards || []).map(ah), !0).filter(Boolean);
      return v.forEach(function(S) {
        return S.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(S) {
          return S.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = x.useCallback(function(v, S) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !i.current.allowPinchZoom;
    var m = fi(v), h = n.current, y = "deltaX" in v ? v.deltaX : h[0] - m[0], b = "deltaY" in v ? v.deltaY : h[1] - m[1], C, k = v.target, E = Math.abs(y) > Math.abs(b) ? "h" : "v";
    if ("touches" in v && E === "h" && k.type === "range")
      return !1;
    var T = sh(E, k);
    if (!T)
      return !0;
    if (T ? C = E : (C = E === "v" ? "h" : "v", T = sh(E, k)), !T)
      return !1;
    if (!r.current && "changedTouches" in v && (y || b) && (r.current = C), !C)
      return !0;
    var j = r.current || C;
    return kE(j, S, v, j === "h" ? y : b);
  }, []), l = x.useCallback(function(v) {
    var S = v;
    if (!(!Pr.length || Pr[Pr.length - 1] !== s)) {
      var m = "deltaY" in S ? ih(S) : fi(S), h = t.current.filter(function(C) {
        return C.name === S.type && (C.target === S.target || S.target === C.shadowParent) && EE(C.delta, m);
      })[0];
      if (h && h.should) {
        S.cancelable && S.preventDefault();
        return;
      }
      if (!h) {
        var y = (i.current.shards || []).map(ah).filter(Boolean).filter(function(C) {
          return C.contains(S.target);
        }), b = y.length > 0 ? a(S, y[0]) : !i.current.noIsolation;
        b && S.cancelable && S.preventDefault();
      }
    }
  }, []), c = x.useCallback(function(v, S, m, h) {
    var y = { name: v, delta: S, target: m, should: h, shadowParent: NE(m) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(b) {
        return b !== y;
      });
    }, 1);
  }, []), u = x.useCallback(function(v) {
    n.current = fi(v), r.current = void 0;
  }, []), d = x.useCallback(function(v) {
    c(v.type, ih(v), v.target, a(v, e.lockRef.current));
  }, []), f = x.useCallback(function(v) {
    c(v.type, fi(v), v.target, a(v, e.lockRef.current));
  }, []);
  x.useEffect(function() {
    return Pr.push(s), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, Tr), document.addEventListener("touchmove", l, Tr), document.addEventListener("touchstart", u, Tr), function() {
      Pr = Pr.filter(function(v) {
        return v !== s;
      }), document.removeEventListener("wheel", l, Tr), document.removeEventListener("touchmove", l, Tr), document.removeEventListener("touchstart", u, Tr);
    };
  }, []);
  var g = e.removeScrollBar, w = e.inert;
  return x.createElement(
    x.Fragment,
    null,
    w ? x.createElement(s, { styles: TE(o) }) : null,
    g ? x.createElement(vE, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function NE(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const ME = oE(Ny, DE);
var Ad = x.forwardRef(function(e, t) {
  return x.createElement(Ka, Ft({}, e, { ref: t, sideCar: ME }));
});
Ad.classNames = Ka.classNames;
var AE = [" ", "Enter", "ArrowUp", "ArrowDown"], jE = [" ", "Enter"], gr = "Select", [Ga, Ya, RE] = qv(gr), [Co, Y2] = wo(gr, [
  RE,
  my
]), Xa = my(), [LE, Yn] = Co(gr), [_E, IE] = Co(gr), Ly = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    value: i,
    defaultValue: a,
    onValueChange: l,
    dir: c,
    name: u,
    autoComplete: d,
    disabled: f,
    required: g,
    form: w
  } = e, v = Xa(t), [S, m] = x.useState(null), [h, y] = x.useState(null), [b, C] = x.useState(!1), k = yd(c), [E, T] = ks({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: gr
  }), [j, M] = ks({
    prop: i,
    defaultProp: a,
    onChange: l,
    caller: gr
  }), D = x.useRef(null), N = S ? w || !!S.closest("form") : !0, [F, U] = x.useState(/* @__PURE__ */ new Set()), I = Array.from(F).map((V) => V.props.value).join(";");
  return /* @__PURE__ */ p.jsx(_k, { ...v, children: /* @__PURE__ */ p.jsxs(
    LE,
    {
      required: g,
      scope: t,
      trigger: S,
      onTriggerChange: m,
      valueNode: h,
      onValueNodeChange: y,
      valueNodeHasChildren: b,
      onValueNodeHasChildrenChange: C,
      contentId: In(),
      value: j,
      onValueChange: M,
      open: E,
      onOpenChange: T,
      dir: k,
      triggerPointerDownPosRef: D,
      disabled: f,
      children: [
        /* @__PURE__ */ p.jsx(Ga.Provider, { scope: t, children: /* @__PURE__ */ p.jsx(
          _E,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: x.useCallback((V) => {
              U((z) => new Set(z).add(V));
            }, []),
            onNativeOptionRemove: x.useCallback((V) => {
              U((z) => {
                const P = new Set(z);
                return P.delete(V), P;
              });
            }, []),
            children: n
          }
        ) }),
        N ? /* @__PURE__ */ p.jsxs(
          n0,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: u,
            autoComplete: d,
            value: j,
            onChange: (V) => M(V.target.value),
            disabled: f,
            form: w,
            children: [
              j === void 0 ? /* @__PURE__ */ p.jsx("option", { value: "" }) : null,
              Array.from(F)
            ]
          },
          I
        ) : null
      ]
    }
  ) });
};
Ly.displayName = gr;
var _y = "SelectTrigger", Iy = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = Xa(n), i = Yn(_y, n), a = i.disabled || r, l = be(t, i.onTriggerChange), c = Ya(n), u = x.useRef("touch"), [d, f, g] = o0((v) => {
      const S = c().filter((y) => !y.disabled), m = S.find((y) => y.value === i.value), h = s0(S, v, m);
      h !== void 0 && i.onValueChange(h.value);
    }), w = (v) => {
      a || (i.onOpenChange(!0), g()), v && (i.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    };
    return /* @__PURE__ */ p.jsx(Ik, { asChild: !0, ...s, children: /* @__PURE__ */ p.jsx(
      oe.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": r0(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: ee(o.onClick, (v) => {
          v.currentTarget.focus(), u.current !== "mouse" && w(v);
        }),
        onPointerDown: ee(o.onPointerDown, (v) => {
          u.current = v.pointerType;
          const S = v.target;
          S.hasPointerCapture(v.pointerId) && S.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (w(v), v.preventDefault());
        }),
        onKeyDown: ee(o.onKeyDown, (v) => {
          const S = d.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && f(v.key), !(S && v.key === " ") && AE.includes(v.key) && (w(), v.preventDefault());
        })
      }
    ) });
  }
);
Iy.displayName = _y;
var Oy = "SelectValue", Fy = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: i = "", ...a } = e, l = Yn(Oy, n), { onValueNodeHasChildrenChange: c } = l, u = s !== void 0, d = be(t, l.onValueNodeChange);
    return Ye(() => {
      c(u);
    }, [c, u]), /* @__PURE__ */ p.jsx(
      oe.span,
      {
        ...a,
        ref: d,
        style: { pointerEvents: "none" },
        children: r0(l.value) ? /* @__PURE__ */ p.jsx(p.Fragment, { children: i }) : s
      }
    );
  }
);
Fy.displayName = Oy;
var OE = "SelectIcon", Vy = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ p.jsx(oe.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Vy.displayName = OE;
var FE = "SelectPortal", zy = (e) => /* @__PURE__ */ p.jsx(Md, { asChild: !0, ...e });
zy.displayName = FE;
var vr = "SelectContent", By = x.forwardRef(
  (e, t) => {
    const n = Yn(vr, e.__scopeSelect), [r, o] = x.useState();
    if (Ye(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? yo.createPortal(
        /* @__PURE__ */ p.jsx($y, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx(Ga.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ p.jsx(Uy, { ...e, ref: t });
  }
);
By.displayName = vr;
var kt = 10, [$y, Xn] = Co(vr), VE = "SelectContentImpl", zE = /* @__PURE__ */ Ss("SelectContent.RemoveScroll"), Uy = x.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: a,
      sideOffset: l,
      align: c,
      alignOffset: u,
      arrowPadding: d,
      collisionBoundary: f,
      collisionPadding: g,
      sticky: w,
      hideWhenDetached: v,
      avoidCollisions: S,
      //
      ...m
    } = e, h = Yn(vr, n), [y, b] = x.useState(null), [C, k] = x.useState(null), E = be(t, (H) => b(H)), [T, j] = x.useState(null), [M, D] = x.useState(
      null
    ), N = Ya(n), [F, U] = x.useState(!1), I = x.useRef(!1);
    x.useEffect(() => {
      if (y) return Ty(y);
    }, [y]), ey();
    const V = x.useCallback(
      (H) => {
        const [ne, ...Ce] = N().map((W) => W.ref.current), [O] = Ce.slice(-1), _ = document.activeElement;
        for (const W of H)
          if (W === _ || (W == null || W.scrollIntoView({ block: "nearest" }), W === ne && C && (C.scrollTop = 0), W === O && C && (C.scrollTop = C.scrollHeight), W == null || W.focus(), document.activeElement !== _)) return;
      },
      [N, C]
    ), z = x.useCallback(
      () => V([T, y]),
      [V, T, y]
    );
    x.useEffect(() => {
      F && z();
    }, [F, z]);
    const { onOpenChange: P, triggerPointerDownPosRef: L } = h;
    x.useEffect(() => {
      if (y) {
        let H = { x: 0, y: 0 };
        const ne = (O) => {
          var _, W;
          H = {
            x: Math.abs(Math.round(O.pageX) - (((_ = L.current) == null ? void 0 : _.x) ?? 0)),
            y: Math.abs(Math.round(O.pageY) - (((W = L.current) == null ? void 0 : W.y) ?? 0))
          };
        }, Ce = (O) => {
          H.x <= 10 && H.y <= 10 ? O.preventDefault() : y.contains(O.target) || P(!1), document.removeEventListener("pointermove", ne), L.current = null;
        };
        return L.current !== null && (document.addEventListener("pointermove", ne), document.addEventListener("pointerup", Ce, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", ne), document.removeEventListener("pointerup", Ce, { capture: !0 });
        };
      }
    }, [y, P, L]), x.useEffect(() => {
      const H = () => P(!1);
      return window.addEventListener("blur", H), window.addEventListener("resize", H), () => {
        window.removeEventListener("blur", H), window.removeEventListener("resize", H);
      };
    }, [P]);
    const [$, G] = o0((H) => {
      const ne = N().filter((_) => !_.disabled), Ce = ne.find((_) => _.ref.current === document.activeElement), O = s0(ne, H, Ce);
      O && setTimeout(() => O.ref.current.focus());
    }), se = x.useCallback(
      (H, ne, Ce) => {
        const O = !I.current && !Ce;
        (h.value !== void 0 && h.value === ne || O) && (j(H), O && (I.current = !0));
      },
      [h.value]
    ), ze = x.useCallback(() => y == null ? void 0 : y.focus(), [y]), Te = x.useCallback(
      (H, ne, Ce) => {
        const O = !I.current && !Ce;
        (h.value !== void 0 && h.value === ne || O) && D(H);
      },
      [h.value]
    ), Be = r === "popper" ? Jc : Wy, Me = Be === Jc ? {
      side: a,
      sideOffset: l,
      align: c,
      alignOffset: u,
      arrowPadding: d,
      collisionBoundary: f,
      collisionPadding: g,
      sticky: w,
      hideWhenDetached: v,
      avoidCollisions: S
    } : {};
    return /* @__PURE__ */ p.jsx(
      $y,
      {
        scope: n,
        content: y,
        viewport: C,
        onViewportChange: k,
        itemRefCallback: se,
        selectedItem: T,
        onItemLeave: ze,
        itemTextRefCallback: Te,
        focusSelectedItem: z,
        selectedItemText: M,
        position: r,
        isPositioned: F,
        searchRef: $,
        children: /* @__PURE__ */ p.jsx(Ad, { as: zE, allowPinchZoom: !0, children: /* @__PURE__ */ p.jsx(
          wd,
          {
            asChild: !0,
            trapped: h.open,
            onMountAutoFocus: (H) => {
              H.preventDefault();
            },
            onUnmountAutoFocus: ee(o, (H) => {
              var ne;
              (ne = h.trigger) == null || ne.focus({ preventScroll: !0 }), H.preventDefault();
            }),
            children: /* @__PURE__ */ p.jsx(
              xd,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: (H) => H.preventDefault(),
                onDismiss: () => h.onOpenChange(!1),
                children: /* @__PURE__ */ p.jsx(
                  Be,
                  {
                    role: "listbox",
                    id: h.contentId,
                    "data-state": h.open ? "open" : "closed",
                    dir: h.dir,
                    onContextMenu: (H) => H.preventDefault(),
                    ...m,
                    ...Me,
                    onPlaced: () => U(!0),
                    ref: E,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...m.style
                    },
                    onKeyDown: ee(m.onKeyDown, (H) => {
                      const ne = H.ctrlKey || H.altKey || H.metaKey;
                      if (H.key === "Tab" && H.preventDefault(), !ne && H.key.length === 1 && G(H.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(H.key)) {
                        let O = N().filter((_) => !_.disabled).map((_) => _.ref.current);
                        if (["ArrowUp", "End"].includes(H.key) && (O = O.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(H.key)) {
                          const _ = H.target, W = O.indexOf(_);
                          O = O.slice(W + 1);
                        }
                        setTimeout(() => V(O)), H.preventDefault();
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
Uy.displayName = VE;
var BE = "SelectItemAlignedPosition", Wy = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = Yn(vr, n), i = Xn(vr, n), [a, l] = x.useState(null), [c, u] = x.useState(null), d = be(t, (E) => u(E)), f = Ya(n), g = x.useRef(!1), w = x.useRef(!0), { viewport: v, selectedItem: S, selectedItemText: m, focusSelectedItem: h } = i, y = x.useCallback(() => {
    if (s.trigger && s.valueNode && a && c && v && S && m) {
      const E = s.trigger.getBoundingClientRect(), T = c.getBoundingClientRect(), j = s.valueNode.getBoundingClientRect(), M = m.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const _ = M.left - T.left, W = j.left - _, Z = E.left - W, Q = E.width + Z, pe = Math.max(Q, T.width), Xe = window.innerWidth - kt, Pe = Fp(W, [
          kt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(kt, Xe - pe)
        ]);
        a.style.minWidth = Q + "px", a.style.left = Pe + "px";
      } else {
        const _ = T.right - M.right, W = window.innerWidth - j.right - _, Z = window.innerWidth - E.right - W, Q = E.width + Z, pe = Math.max(Q, T.width), Xe = window.innerWidth - kt, Pe = Fp(W, [
          kt,
          Math.max(kt, Xe - pe)
        ]);
        a.style.minWidth = Q + "px", a.style.right = Pe + "px";
      }
      const D = f(), N = window.innerHeight - kt * 2, F = v.scrollHeight, U = window.getComputedStyle(c), I = parseInt(U.borderTopWidth, 10), V = parseInt(U.paddingTop, 10), z = parseInt(U.borderBottomWidth, 10), P = parseInt(U.paddingBottom, 10), L = I + V + F + P + z, $ = Math.min(S.offsetHeight * 5, L), G = window.getComputedStyle(v), se = parseInt(G.paddingTop, 10), ze = parseInt(G.paddingBottom, 10), Te = E.top + E.height / 2 - kt, Be = N - Te, Me = S.offsetHeight / 2, H = S.offsetTop + Me, ne = I + V + H, Ce = L - ne;
      if (ne <= Te) {
        const _ = D.length > 0 && S === D[D.length - 1].ref.current;
        a.style.bottom = "0px";
        const W = c.clientHeight - v.offsetTop - v.offsetHeight, Z = Math.max(
          Be,
          Me + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (_ ? ze : 0) + W + z
        ), Q = ne + Z;
        a.style.height = Q + "px";
      } else {
        const _ = D.length > 0 && S === D[0].ref.current;
        a.style.top = "0px";
        const Z = Math.max(
          Te,
          I + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (_ ? se : 0) + Me
        ) + Ce;
        a.style.height = Z + "px", v.scrollTop = ne - Te + v.offsetTop;
      }
      a.style.margin = `${kt}px 0`, a.style.minHeight = $ + "px", a.style.maxHeight = N + "px", r == null || r(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    f,
    s.trigger,
    s.valueNode,
    a,
    c,
    v,
    S,
    m,
    s.dir,
    r
  ]);
  Ye(() => y(), [y]);
  const [b, C] = x.useState();
  Ye(() => {
    c && C(window.getComputedStyle(c).zIndex);
  }, [c]);
  const k = x.useCallback(
    (E) => {
      E && w.current === !0 && (y(), h == null || h(), w.current = !1);
    },
    [y, h]
  );
  return /* @__PURE__ */ p.jsx(
    UE,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: k,
      children: /* @__PURE__ */ p.jsx(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: b
          },
          children: /* @__PURE__ */ p.jsx(
            oe.div,
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
Wy.displayName = BE;
var $E = "SelectPopperPosition", Jc = x.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = kt,
    ...s
  } = e, i = Xa(n);
  return /* @__PURE__ */ p.jsx(
    Ok,
    {
      ...i,
      ...s,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Jc.displayName = $E;
var [UE, jd] = Co(vr, {}), eu = "SelectViewport", Hy = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = Xn(eu, n), i = jd(eu, n), a = be(t, s.onViewportChange), l = x.useRef(0);
    return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ p.jsx(Ga.Slot, { scope: n, children: /* @__PURE__ */ p.jsx(
        oe.div,
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
          onScroll: ee(o.onScroll, (c) => {
            const u = c.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: f } = i;
            if (f != null && f.current && d) {
              const g = Math.abs(l.current - u.scrollTop);
              if (g > 0) {
                const w = window.innerHeight - kt * 2, v = parseFloat(d.style.minHeight), S = parseFloat(d.style.height), m = Math.max(v, S);
                if (m < w) {
                  const h = m + g, y = Math.min(w, h), b = h - y;
                  d.style.height = y + "px", d.style.bottom === "0px" && (u.scrollTop = b > 0 ? b : 0, d.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = u.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Hy.displayName = eu;
var Ky = "SelectGroup", [WE, HE] = Co(Ky), KE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = In();
    return /* @__PURE__ */ p.jsx(WE, { scope: n, id: o, children: /* @__PURE__ */ p.jsx(oe.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
KE.displayName = Ky;
var Gy = "SelectLabel", GE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = HE(Gy, n);
    return /* @__PURE__ */ p.jsx(oe.div, { id: o.id, ...r, ref: t });
  }
);
GE.displayName = Gy;
var va = "SelectItem", [YE, Yy] = Co(va), Xy = x.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...i
    } = e, a = Yn(va, n), l = Xn(va, n), c = a.value === r, [u, d] = x.useState(s ?? ""), [f, g] = x.useState(!1), w = be(
      t,
      (h) => {
        var y;
        return (y = l.itemRefCallback) == null ? void 0 : y.call(l, h, r, o);
      }
    ), v = In(), S = x.useRef("touch"), m = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ p.jsx(
      YE,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: v,
        isSelected: c,
        onItemTextChange: x.useCallback((h) => {
          d((y) => y || ((h == null ? void 0 : h.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ p.jsx(
          Ga.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: u,
            children: /* @__PURE__ */ p.jsx(
              oe.div,
              {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": c && f,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: w,
                onFocus: ee(i.onFocus, () => g(!0)),
                onBlur: ee(i.onBlur, () => g(!1)),
                onClick: ee(i.onClick, () => {
                  S.current !== "mouse" && m();
                }),
                onPointerUp: ee(i.onPointerUp, () => {
                  S.current === "mouse" && m();
                }),
                onPointerDown: ee(i.onPointerDown, (h) => {
                  S.current = h.pointerType;
                }),
                onPointerMove: ee(i.onPointerMove, (h) => {
                  var y;
                  S.current = h.pointerType, o ? (y = l.onItemLeave) == null || y.call(l) : S.current === "mouse" && h.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: ee(i.onPointerLeave, (h) => {
                  var y;
                  h.currentTarget === document.activeElement && ((y = l.onItemLeave) == null || y.call(l));
                }),
                onKeyDown: ee(i.onKeyDown, (h) => {
                  var b;
                  ((b = l.searchRef) == null ? void 0 : b.current) !== "" && h.key === " " || (jE.includes(h.key) && m(), h.key === " " && h.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Xy.displayName = va;
var Bo = "SelectItemText", Qy = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, i = Yn(Bo, n), a = Xn(Bo, n), l = Yy(Bo, n), c = IE(Bo, n), [u, d] = x.useState(null), f = be(
      t,
      (m) => d(m),
      l.onItemTextChange,
      (m) => {
        var h;
        return (h = a.itemTextRefCallback) == null ? void 0 : h.call(a, m, l.value, l.disabled);
      }
    ), g = u == null ? void 0 : u.textContent, w = x.useMemo(
      () => /* @__PURE__ */ p.jsx("option", { value: l.value, disabled: l.disabled, children: g }, l.value),
      [l.disabled, l.value, g]
    ), { onNativeOptionAdd: v, onNativeOptionRemove: S } = c;
    return Ye(() => (v(w), () => S(w)), [v, S, w]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(oe.span, { id: l.textId, ...s, ref: f }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? yo.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
Qy.displayName = Bo;
var qy = "SelectItemIndicator", Zy = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Yy(qy, n).isSelected ? /* @__PURE__ */ p.jsx(oe.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Zy.displayName = qy;
var tu = "SelectScrollUpButton", Jy = x.forwardRef((e, t) => {
  const n = Xn(tu, e.__scopeSelect), r = jd(tu, e.__scopeSelect), [o, s] = x.useState(!1), i = be(t, r.onScrollButtonChange);
  return Ye(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollTop > 0;
        s(c);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    t0,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = n;
        a && l && (a.scrollTop = a.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
Jy.displayName = tu;
var nu = "SelectScrollDownButton", e0 = x.forwardRef((e, t) => {
  const n = Xn(nu, e.__scopeSelect), r = jd(nu, e.__scopeSelect), [o, s] = x.useState(!1), i = be(t, r.onScrollButtonChange);
  return Ye(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollHeight - l.clientHeight, u = Math.ceil(l.scrollTop) < c;
        s(u);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    t0,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = n;
        a && l && (a.scrollTop = a.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
e0.displayName = nu;
var t0 = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = Xn("SelectScrollButton", n), i = x.useRef(null), a = Ya(n), l = x.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return x.useEffect(() => () => l(), [l]), Ye(() => {
    var u;
    const c = a().find((d) => d.ref.current === document.activeElement);
    (u = c == null ? void 0 : c.ref.current) == null || u.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ p.jsx(
    oe.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: ee(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: ee(o.onPointerMove, () => {
        var c;
        (c = s.onItemLeave) == null || c.call(s), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: ee(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), XE = "SelectSeparator", QE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ p.jsx(oe.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
QE.displayName = XE;
var ru = "SelectArrow", qE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Xa(n), s = Yn(ru, n), i = Xn(ru, n);
    return s.open && i.position === "popper" ? /* @__PURE__ */ p.jsx(Fk, { ...o, ...r, ref: t }) : null;
  }
);
qE.displayName = ru;
var ZE = "SelectBubbleInput", n0 = x.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = x.useRef(null), s = be(r, o), i = Uk(t);
    return x.useEffect(() => {
      const a = o.current;
      if (!a) return;
      const l = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (i !== t && u) {
        const d = new Event("change", { bubbles: !0 });
        u.call(a, t), a.dispatchEvent(d);
      }
    }, [i, t]), /* @__PURE__ */ p.jsx(
      oe.select,
      {
        ...n,
        style: { ...ky, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
n0.displayName = ZE;
function r0(e) {
  return e === "" || e === void 0;
}
function o0(e) {
  const t = Vn(e), n = x.useRef(""), r = x.useRef(0), o = x.useCallback(
    (i) => {
      const a = n.current + i;
      t(a), function l(c) {
        n.current = c, window.clearTimeout(r.current), c !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      }(a);
    },
    [t]
  ), s = x.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return x.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
function s0(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = JE(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const l = i.find(
    (c) => c.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function JE(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var eT = Ly, tT = Iy, nT = Fy, rT = Vy, oT = zy, sT = By, iT = Hy, aT = Xy, lT = Qy, cT = Zy, uT = Jy, dT = e0;
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fT = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), i0 = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var pT = {
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
const hT = x.forwardRef(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: s,
    iconNode: i,
    ...a
  }, l) => x.createElement(
    "svg",
    {
      ref: l,
      ...pT,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: i0("lucide", o),
      ...a
    },
    [
      ...i.map(([c, u]) => x.createElement(c, u)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _e = (e, t) => {
  const n = x.forwardRef(
    ({ className: r, ...o }, s) => x.createElement(hT, {
      ref: s,
      iconNode: t,
      className: i0(`lucide-${fT(e)}`, r),
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
const a0 = _e("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l0 = _e("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qa = _e("Building2", [
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
const mT = _e("Building", [
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
const Es = _e("CalendarDays", [
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
const Fi = _e("Calendar", [
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
const gT = _e("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rd = _e("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c0 = _e("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u0 = _e("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d0 = _e("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const co = _e("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vT = _e("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yT = _e("ExternalLink", [
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
const lh = _e("List", [
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
const Vi = _e("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = _e("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xT = _e("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function pi({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(eT, { "data-slot": "select", ...e });
}
function ch({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(nT, { "data-slot": "select-value", ...e });
}
function hi({
  className: e,
  size: t = "default",
  children: n,
  ...r
}) {
  return /* @__PURE__ */ p.jsxs(
    tT,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: Se(
        "data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive flex w-fit items-center justify-between gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ p.jsx(rT, { asChild: !0, children: /* @__PURE__ */ p.jsx(Rd, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function mi({
  className: e,
  children: t,
  position: n = "popper",
  ...r
}) {
  return /* @__PURE__ */ p.jsx(oT, { children: /* @__PURE__ */ p.jsxs(
    sT,
    {
      "data-slot": "select-content",
      className: Se(
        "bg-card text-foreground border border-border data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-[9999] max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      ...r,
      children: [
        /* @__PURE__ */ p.jsx(wT, {}),
        /* @__PURE__ */ p.jsx(
          iT,
          {
            className: Se(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ p.jsx(ST, {})
      ]
    }
  ) });
}
function xn({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ p.jsxs(
    aT,
    {
      "data-slot": "select-item",
      className: Se(
        "focus:bg-muted focus:text-foreground hover:bg-muted/80 text-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ p.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ p.jsx(cT, { children: /* @__PURE__ */ p.jsx(gT, { className: "size-4" }) }) }),
        /* @__PURE__ */ p.jsx(lT, { children: t })
      ]
    }
  );
}
function wT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    uT,
    {
      "data-slot": "select-scroll-up-button",
      className: Se(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p.jsx(d0, { className: "size-4" })
    }
  );
}
function ST({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    dT,
    {
      "data-slot": "select-scroll-down-button",
      className: Se(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p.jsx(Rd, { className: "size-4" })
    }
  );
}
const ou = x.forwardRef(
  ({ className: e, type: t = "text", ...n }, r) => /* @__PURE__ */ p.jsx(
    "input",
    {
      type: t,
      className: Se(
        "flex h-10 w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        e
      ),
      ref: r,
      ...n
    }
  )
);
ou.displayName = "Input";
var Bl = "rovingFocusGroup.onEntryFocus", bT = { bubbles: !1, cancelable: !0 }, Fs = "RovingFocusGroup", [su, f0, CT] = qv(Fs), [kT, p0] = wo(
  Fs,
  [CT]
), [ET, TT] = kT(Fs), h0 = x.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(su.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(su.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(PT, { ...e, ref: t }) }) })
);
h0.displayName = Fs;
var PT = x.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: s,
    currentTabStopId: i,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: l,
    onEntryFocus: c,
    preventScrollOnEntryFocus: u = !1,
    ...d
  } = e, f = x.useRef(null), g = be(t, f), w = yd(s), [v, S] = ks({
    prop: i,
    defaultProp: a ?? null,
    onChange: l,
    caller: Fs
  }), [m, h] = x.useState(!1), y = Vn(c), b = f0(n), C = x.useRef(!1), [k, E] = x.useState(0);
  return x.useEffect(() => {
    const T = f.current;
    if (T)
      return T.addEventListener(Bl, y), () => T.removeEventListener(Bl, y);
  }, [y]), /* @__PURE__ */ p.jsx(
    ET,
    {
      scope: n,
      orientation: r,
      dir: w,
      loop: o,
      currentTabStopId: v,
      onItemFocus: x.useCallback(
        (T) => S(T),
        [S]
      ),
      onItemShiftTab: x.useCallback(() => h(!0), []),
      onFocusableItemAdd: x.useCallback(
        () => E((T) => T + 1),
        []
      ),
      onFocusableItemRemove: x.useCallback(
        () => E((T) => T - 1),
        []
      ),
      children: /* @__PURE__ */ p.jsx(
        oe.div,
        {
          tabIndex: m || k === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: ee(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: ee(e.onFocus, (T) => {
            const j = !C.current;
            if (T.target === T.currentTarget && j && !m) {
              const M = new CustomEvent(Bl, bT);
              if (T.currentTarget.dispatchEvent(M), !M.defaultPrevented) {
                const D = b().filter((V) => V.focusable), N = D.find((V) => V.active), F = D.find((V) => V.id === v), I = [N, F, ...D].filter(
                  Boolean
                ).map((V) => V.ref.current);
                v0(I, u);
              }
            }
            C.current = !1;
          }),
          onBlur: ee(e.onBlur, () => h(!1))
        }
      )
    }
  );
}), m0 = "RovingFocusGroupItem", g0 = x.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: i,
      ...a
    } = e, l = In(), c = s || l, u = TT(m0, n), d = u.currentTabStopId === c, f = f0(n), { onFocusableItemAdd: g, onFocusableItemRemove: w, currentTabStopId: v } = u;
    return x.useEffect(() => {
      if (r)
        return g(), () => w();
    }, [r, g, w]), /* @__PURE__ */ p.jsx(
      su.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ p.jsx(
          oe.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": u.orientation,
            ...a,
            ref: t,
            onMouseDown: ee(e.onMouseDown, (S) => {
              r ? u.onItemFocus(c) : S.preventDefault();
            }),
            onFocus: ee(e.onFocus, () => u.onItemFocus(c)),
            onKeyDown: ee(e.onKeyDown, (S) => {
              if (S.key === "Tab" && S.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (S.target !== S.currentTarget) return;
              const m = MT(S, u.orientation, u.dir);
              if (m !== void 0) {
                if (S.metaKey || S.ctrlKey || S.altKey || S.shiftKey) return;
                S.preventDefault();
                let y = f().filter((b) => b.focusable).map((b) => b.ref.current);
                if (m === "last") y.reverse();
                else if (m === "prev" || m === "next") {
                  m === "prev" && y.reverse();
                  const b = y.indexOf(S.currentTarget);
                  y = u.loop ? AT(y, b + 1) : y.slice(b + 1);
                }
                setTimeout(() => v0(y));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: d, hasTabStop: v != null }) : i
          }
        )
      }
    );
  }
);
g0.displayName = m0;
var DT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function NT(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function MT(e, t, n) {
  const r = NT(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return DT[r];
}
function v0(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function AT(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var jT = h0, RT = g0;
function LT(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var Vs = (e) => {
  const { present: t, children: n } = e, r = _T(t), o = typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n), s = be(r.ref, IT(o));
  return typeof n == "function" || r.isPresent ? x.cloneElement(o, { ref: s }) : null;
};
Vs.displayName = "Presence";
function _T(e) {
  const [t, n] = x.useState(), r = x.useRef(null), o = x.useRef(e), s = x.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = LT(i, {
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
    const c = gi(r.current);
    s.current = a === "mounted" ? c : "none";
  }, [a]), Ye(() => {
    const c = r.current, u = o.current;
    if (u !== e) {
      const f = s.current, g = gi(c);
      e ? l("MOUNT") : g === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(u && f !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Ye(() => {
    if (t) {
      let c;
      const u = t.ownerDocument.defaultView ?? window, d = (g) => {
        const v = gi(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && v && (l("ANIMATION_END"), !o.current)) {
          const S = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S);
          });
        }
      }, f = (g) => {
        g.target === t && (s.current = gi(r.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        u.clearTimeout(c), t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
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
function gi(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function IT(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var qa = "Tabs", [OT, X2] = wo(qa, [
  p0
]), y0 = p0(), [FT, Ld] = OT(qa), x0 = x.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: s,
      orientation: i = "horizontal",
      dir: a,
      activationMode: l = "automatic",
      ...c
    } = e, u = yd(a), [d, f] = ks({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: qa
    });
    return /* @__PURE__ */ p.jsx(
      FT,
      {
        scope: n,
        baseId: In(),
        value: d,
        onValueChange: f,
        orientation: i,
        dir: u,
        activationMode: l,
        children: /* @__PURE__ */ p.jsx(
          oe.div,
          {
            dir: u,
            "data-orientation": i,
            ...c,
            ref: t
          }
        )
      }
    );
  }
);
x0.displayName = qa;
var w0 = "TabsList", S0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = Ld(w0, n), i = y0(n);
    return /* @__PURE__ */ p.jsx(
      jT,
      {
        asChild: !0,
        ...i,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ p.jsx(
          oe.div,
          {
            role: "tablist",
            "aria-orientation": s.orientation,
            ...o,
            ref: t
          }
        )
      }
    );
  }
);
S0.displayName = w0;
var b0 = "TabsTrigger", C0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, i = Ld(b0, n), a = y0(n), l = T0(i.baseId, r), c = P0(i.baseId, r), u = r === i.value;
    return /* @__PURE__ */ p.jsx(
      RT,
      {
        asChild: !0,
        ...a,
        focusable: !o,
        active: u,
        children: /* @__PURE__ */ p.jsx(
          oe.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": u,
            "aria-controls": c,
            "data-state": u ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: l,
            ...s,
            ref: t,
            onMouseDown: ee(e.onMouseDown, (d) => {
              !o && d.button === 0 && d.ctrlKey === !1 ? i.onValueChange(r) : d.preventDefault();
            }),
            onKeyDown: ee(e.onKeyDown, (d) => {
              [" ", "Enter"].includes(d.key) && i.onValueChange(r);
            }),
            onFocus: ee(e.onFocus, () => {
              const d = i.activationMode !== "manual";
              !u && !o && d && i.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
C0.displayName = b0;
var k0 = "TabsContent", E0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...i } = e, a = Ld(k0, n), l = T0(a.baseId, r), c = P0(a.baseId, r), u = r === a.value, d = x.useRef(u);
    return x.useEffect(() => {
      const f = requestAnimationFrame(() => d.current = !1);
      return () => cancelAnimationFrame(f);
    }, []), /* @__PURE__ */ p.jsx(Vs, { present: o || u, children: ({ present: f }) => /* @__PURE__ */ p.jsx(
      oe.div,
      {
        "data-state": u ? "active" : "inactive",
        "data-orientation": a.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !f,
        id: c,
        tabIndex: 0,
        ...i,
        ref: t,
        style: {
          ...e.style,
          animationDuration: d.current ? "0s" : void 0
        },
        children: f && s
      }
    ) });
  }
);
E0.displayName = k0;
function T0(e, t) {
  return `${e}-trigger-${t}`;
}
function P0(e, t) {
  return `${e}-content-${t}`;
}
var VT = x0, zT = S0, BT = C0, $T = E0;
function UT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    VT,
    {
      "data-slot": "tabs",
      className: Se("flex flex-col gap-2", e),
      ...t
    }
  );
}
function uh({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    zT,
    {
      "data-slot": "tabs-list",
      className: Se(
        "inline-flex w-fit items-center justify-center rounded-lg h-9 bg-muted/60 dark:bg-transparent p-1 text-muted-foreground border border-transparent dark:border-border/40",
        e
      ),
      ...t
    }
  );
}
function qn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    BT,
    {
      "data-slot": "tabs-trigger",
      className: Se(
        "text-muted-foreground dark:text-muted-foreground data-[state=active]:text-foreground data-[state=active]:bg-card dark:data-[state=active]:bg-card/40 data-[state=active]:shadow-sm cursor-pointer inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1 rounded-md border border-transparent px-3 py-1 text-xs font-medium whitespace-nowrap transition-[color,background-color] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
        e
      ),
      ...t
    }
  );
}
function vi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    $T,
    {
      "data-slot": "tabs-content",
      className: Se("flex-1 outline-none", e),
      ...t
    }
  );
}
const WT = (e, t) => {
  const n = [];
  if (!e || !t) {
    const i = /* @__PURE__ */ new Date(), a = i.getFullYear(), l = i.getMonth();
    return dh(a, l);
  }
  const r = new Date(e), o = new Date(t);
  let s = new Date(r.getFullYear(), r.getMonth(), 1);
  for (; s <= o; ) {
    const i = dh(s.getFullYear(), s.getMonth());
    n.push(...i), s.setMonth(s.getMonth() + 1);
  }
  return n;
}, dh = (e, t) => {
  const n = [], r = `${e}-${t}`, o = new Date(e, t, 5, 14, 0), s = new Date(e, t, 5, 10, 0);
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
    startDate: s,
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
  const i = /* @__PURE__ */ new Date();
  return e === i.getFullYear() && t === i.getMonth() && (n.push({
    id: `${r}-12`,
    title: "Emergency Meeting",
    description: "Important announcement",
    startDate: new Date(i.getFullYear(), i.getMonth(), i.getDate(), 13, 0),
    endDate: new Date(i.getFullYear(), i.getMonth(), i.getDate(), 14, 0)
  }), n.push({
    id: `${r}-13`,
    title: "Study Group",
    description: "Physics review session",
    startDate: new Date(i.getFullYear(), i.getMonth(), i.getDate(), 16, 0),
    endDate: new Date(i.getFullYear(), i.getMonth(), i.getDate(), 18, 0)
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
}, HT = (e) => {
  const t = {}, n = ["Main Auditorium", "Student Center", "Library Room 201", "Sports Complex", "Outdoor Field", "Conference Hall", "Room 301"], r = ["Student Union", "Computer Science Club", "Athletics Department", "Cultural Society", "Career Services"];
  return e.forEach((o, s) => {
    let i = "academic";
    o.title.toLowerCase().includes("sport") || o.title.toLowerCase().includes("basketball") || o.title.toLowerCase().includes("soccer") ? i = "sports" : o.title.toLowerCase().includes("movie") || o.title.toLowerCase().includes("mixer") ? i = "social" : o.title.toLowerCase().includes("food") || o.title.toLowerCase().includes("international") ? i = "cultural" : o.title.toLowerCase().includes("career") || o.title.toLowerCase().includes("resume") ? i = "professional" : o.title.toLowerCase().includes("yoga") || o.title.toLowerCase().includes("wellness") ? i = "wellness" : (o.title.toLowerCase().includes("art") || o.title.toLowerCase().includes("exhibition") || o.title.toLowerCase().includes("concert") || o.title.toLowerCase().includes("band")) && (i = "arts"), t[o.id] = {
      category: i,
      organization: r[s % r.length],
      location: n[s % n.length],
      cost: s % 3 === 0 ? "Free" : `$${(s + 1) * 5}`,
      registrationRequired: s % 2 === 0,
      capacity: `${(s + 1) * 20} people`,
      featured: s % 4 === 0,
      categories: [{ slug: i, name: i }],
      description: o.description
    };
  }), t;
};
function KT(e = {}) {
  const [t, n] = x.useState(!0);
  x.useEffect(() => {
    const i = setTimeout(() => {
      n(!1);
    }, 500);
    return () => clearTimeout(i);
  }, [e.start_date, e.end_date]);
  const r = Y.useMemo(() => WT(e.start_date, e.end_date), [e.start_date, e.end_date]), o = Y.useMemo(() => HT(r), [r]), s = Y.useMemo(() => {
    const i = {
      academic: "primary",
      social: "success",
      sports: "warning",
      cultural: "orange",
      professional: "indigo",
      wellness: "cyan",
      arts: "pink"
    }, a = {};
    return Object.values(o).forEach((l) => {
      l != null && l.category && i[l.category] && (a[l.category] = i[l.category]);
    }), a;
  }, [o]);
  return {
    events: r,
    eventMetadata: o,
    categoryMappings: s,
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
class GT {
  constructor() {
    const t = window.unbcCalendarData;
    this.baseUrl = (t == null ? void 0 : t.apiUrl) || "/wp-json/unbc-events/v1", this.cache = /* @__PURE__ */ new Map(), this.cacheTimeout = 5 * 60 * 1e3;
  }
  async fetchEvents(t = {}) {
    try {
      const n = this.generateCacheKey(t), r = this.getFromCache(n);
      if (r)
        return r;
      const o = new URLSearchParams();
      Object.entries(t).forEach(([d, f]) => {
        f != null && f !== "" && o.append(d, f.toString());
      });
      const i = `${this.baseUrl.endsWith("/") ? this.baseUrl.slice(0, -1) : this.baseUrl}/events${o.toString() ? "?" + o.toString() : ""}`, a = window.unbcCalendarData, l = {
        "Content-Type": "application/json"
      };
      a != null && a.nonce && (l["X-WP-Nonce"] = a.nonce);
      const c = await fetch(i, {
        method: "GET",
        headers: l,
        credentials: "same-origin"
      });
      if (!c.ok) {
        const d = await c.text();
        throw new Error(`HTTP error! status: ${c.status}, response: ${d}`);
      }
      const u = await c.json();
      return this.setCache(n, u), u;
    } catch (n) {
      throw n;
    }
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
      organization: t.organization,
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
  getCategoryVariant(t) {
    return !t || !Array.isArray(t) || t.length === 0, "default";
  }
  mapWordPressCategory(t) {
    return !t || !Array.isArray(t) || t.length === 0 ? null : t[0].slug;
  }
  generateCacheKey(t) {
    const n = t.year || (/* @__PURE__ */ new Date()).getFullYear(), r = t.month || (/* @__PURE__ */ new Date()).getMonth() + 1, o = t.category || "", s = t.search || "";
    return `${n}-${r}-${o}-${s}`;
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
const Dr = new GT(), YT = [
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
], fh = (e) => {
  if (!e || typeof e != "object")
    return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    YT.includes(r) && (t[n] = r);
  }), t;
};
function D0(e = {}) {
  const [t, n] = x.useState([]), [r, o] = x.useState({}), [s, i] = x.useState({}), [a, l] = x.useState(!0), [c, u] = x.useState(!1), [d, f] = x.useState(null), [g, w] = x.useState(0), [v, S] = x.useState(0), [m, h] = x.useState(e), [y, b] = x.useState(), C = x.useRef(""), k = x.useRef(!0);
  x.useEffect(() => {
    const D = JSON.stringify(e);
    if (k.current) {
      k.current = !1, C.current = D, h(e);
      return;
    }
    C.current !== D && (C.current = D, h(e));
  }, [e]);
  const E = x.useCallback(async () => {
    var D;
    try {
      l(!0), f(null);
      const N = await Dr.fetchEvents(m);
      if ((D = N.performance) != null && D.server_processed) {
        const F = N.events.map((U) => ({
          ...U,
          startDate: new Date(U.startDate),
          endDate: new Date(U.endDate)
        }));
        n(F), o(N.eventMetadata || {}), i(fh(N.categoryMappings)), w(N.total), S(N.pages), b(N.pagination);
      } else {
        const F = [], U = {};
        N.events.forEach((I) => {
          const V = Dr.transformWordPressEventToEvent(I), z = Dr.transformWordPressEventToMetadata(I);
          F.push(V), U[V.id] = z;
        }), n(F), o(U), w(N.total), S(N.pages), b(N.pagination);
      }
    } catch (N) {
      console.error("Error fetching events:", N), n([]), o({}), i({}), w(0), S(0), f(N instanceof Error ? N.message : "Failed to load events");
    } finally {
      l(!1);
    }
  }, [JSON.stringify(m)]);
  x.useEffect(() => {
    E();
  }, [E]);
  const T = x.useCallback(() => {
    E();
  }, [E]), j = x.useCallback(async () => {
    var D;
    if (!(!(y != null && y.hasMore) || c))
      try {
        u(!0), f(null);
        const N = {
          ...m,
          page: y.nextPage || (m.page || 1) + 1
        }, F = await Dr.fetchEvents(N);
        if ((D = F.performance) != null && D.server_processed) {
          const U = F.events.map((I) => ({
            ...I,
            startDate: new Date(I.startDate),
            endDate: new Date(I.endDate)
          }));
          n((I) => [...I, ...U]), o((I) => ({ ...I, ...F.eventMetadata || {} })), i((I) => ({
            ...I,
            ...fh(F.categoryMappings)
          })), b(F.pagination);
        } else {
          const U = [], I = {};
          F.events.forEach((V) => {
            const z = Dr.transformWordPressEventToEvent(V), P = Dr.transformWordPressEventToMetadata(V);
            U.push(z), I[z.id] = P;
          }), n((V) => [...V, ...U]), o((V) => ({ ...V, ...I })), b(F.pagination);
        }
      } catch (N) {
        console.error("Error loading more events:", N), f(N instanceof Error ? N.message : "Failed to load more events");
      } finally {
        u(!1);
      }
  }, [JSON.stringify(m), JSON.stringify(y), c]), M = x.useCallback((D) => {
    h((N) => ({ ...N, ...D }));
  }, []);
  return {
    events: t,
    eventMetadata: r,
    loading: a,
    error: d,
    total: g,
    pages: v,
    refetch: T,
    setFilters: M,
    hasMore: (y == null ? void 0 : y.hasMore) || !1,
    loadMore: j,
    loadingMore: c,
    pagination: y,
    categoryMappings: s
  };
}
const XT = {
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
function QT() {
  const [e, t] = x.useState([]), [n, r] = x.useState(!0), [o, s] = x.useState(null);
  return x.useEffect(() => {
    (async () => {
      try {
        r(!0);
        const a = await XT.getAll();
        t(a), s(null);
      } catch {
        s("Failed to load organizations");
      } finally {
        r(!1);
      }
    })();
  }, []), { organizations: e, loading: n, error: o };
}
function N0() {
  const [e, t] = x.useState([]), [n, r] = x.useState(!0), [o, s] = x.useState(null);
  return x.useEffect(() => {
    (async () => {
      try {
        r(!0), s(null);
        const a = await fetch("/wp-json/wp/v2/event_category?per_page=100&orderby=name&order=asc");
        if (!a.ok)
          throw new Error(`HTTP error! status: ${a.status}`);
        const l = await a.json();
        let c = {};
        try {
          const d = await fetch("/wp-json/unbc-events/v1/category-config");
          if (d.ok) {
            const f = await d.json();
            Object.entries(f).forEach(([g, w]) => {
              typeof w == "string" ? c[g] = w : w && typeof w == "object" && "variant" in w && w.variant && (c[g] = w.variant);
            });
          }
        } catch (d) {
          console.warn("Error fetching category color config:", d);
        }
        const u = l.map((d) => ({
          id: d.id,
          name: d.name,
          slug: d.slug,
          count: d.count,
          variant: c[d.slug] || "default"
        }));
        t(u);
      } catch (a) {
        console.error("Error fetching event categories:", a), s(a instanceof Error ? a.message : "Failed to fetch categories"), t([
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
function qT() {
  const [e, t] = x.useState(null), [n, r] = x.useState(!0), [o, s] = x.useState(null);
  return x.useEffect(() => {
    (async () => {
      try {
        r(!0), s(null);
        const a = await fetch("/wp-json/unbc-events/v1/category-config");
        if (!a.ok)
          throw new Error(`HTTP error! status: ${a.status}`);
        const l = await a.json();
        t(l);
      } catch (a) {
        console.error("Error fetching category config:", a), s(a instanceof Error ? a.message : "Failed to fetch category config"), t({
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
var Za = "Dialog", [M0, Q2] = wo(Za), [ZT, Lt] = M0(Za), A0 = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !0
  } = e, a = x.useRef(null), l = x.useRef(null), [c, u] = ks({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Za
  });
  return /* @__PURE__ */ p.jsx(
    ZT,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: In(),
      titleId: In(),
      descriptionId: In(),
      open: c,
      onOpenChange: u,
      onOpenToggle: x.useCallback(() => u((d) => !d), [u]),
      modal: i,
      children: n
    }
  );
};
A0.displayName = Za;
var j0 = "DialogTrigger", JT = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Lt(j0, n), s = be(t, o.triggerRef);
    return /* @__PURE__ */ p.jsx(
      oe.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Od(o.open),
        ...r,
        ref: s,
        onClick: ee(e.onClick, o.onOpenToggle)
      }
    );
  }
);
JT.displayName = j0;
var _d = "DialogPortal", [eP, R0] = M0(_d, {
  forceMount: void 0
}), L0 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = Lt(_d, t);
  return /* @__PURE__ */ p.jsx(eP, { scope: t, forceMount: n, children: x.Children.map(r, (i) => /* @__PURE__ */ p.jsx(Vs, { present: n || s.open, children: /* @__PURE__ */ p.jsx(Md, { asChild: !0, container: o, children: i }) })) });
};
L0.displayName = _d;
var ya = "DialogOverlay", _0 = x.forwardRef(
  (e, t) => {
    const n = R0(ya, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Lt(ya, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ p.jsx(Vs, { present: r || s.open, children: /* @__PURE__ */ p.jsx(nP, { ...o, ref: t }) }) : null;
  }
);
_0.displayName = ya;
var tP = /* @__PURE__ */ Ss("DialogOverlay.RemoveScroll"), nP = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Lt(ya, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p.jsx(Ad, { as: tP, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ p.jsx(
        oe.div,
        {
          "data-state": Od(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), yr = "DialogContent", I0 = x.forwardRef(
  (e, t) => {
    const n = R0(yr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Lt(yr, e.__scopeDialog);
    return /* @__PURE__ */ p.jsx(Vs, { present: r || s.open, children: s.modal ? /* @__PURE__ */ p.jsx(rP, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(oP, { ...o, ref: t }) });
  }
);
I0.displayName = yr;
var rP = x.forwardRef(
  (e, t) => {
    const n = Lt(yr, e.__scopeDialog), r = x.useRef(null), o = be(t, n.contentRef, r);
    return x.useEffect(() => {
      const s = r.current;
      if (s) return Ty(s);
    }, []), /* @__PURE__ */ p.jsx(
      O0,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ee(e.onCloseAutoFocus, (s) => {
          var i;
          s.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: ee(e.onPointerDownOutside, (s) => {
          const i = s.detail.originalEvent, a = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || a) && s.preventDefault();
        }),
        onFocusOutside: ee(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), oP = x.forwardRef(
  (e, t) => {
    const n = Lt(yr, e.__scopeDialog), r = x.useRef(!1), o = x.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      O0,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var i, a;
          (i = e.onCloseAutoFocus) == null || i.call(e, s), s.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), s.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = s.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(i)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), O0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = Lt(yr, n), l = x.useRef(null), c = be(t, l);
    return ey(), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        wd,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ p.jsx(
            xd,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": Od(a.open),
              ...i,
              ref: c,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(sP, { titleId: a.titleId }),
        /* @__PURE__ */ p.jsx(aP, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), Id = "DialogTitle", F0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Lt(Id, n);
    return /* @__PURE__ */ p.jsx(oe.h2, { id: o.titleId, ...r, ref: t });
  }
);
F0.displayName = Id;
var V0 = "DialogDescription", z0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Lt(V0, n);
    return /* @__PURE__ */ p.jsx(oe.p, { id: o.descriptionId, ...r, ref: t });
  }
);
z0.displayName = V0;
var B0 = "DialogClose", $0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Lt(B0, n);
    return /* @__PURE__ */ p.jsx(
      oe.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: ee(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
$0.displayName = B0;
function Od(e) {
  return e ? "open" : "closed";
}
var U0 = "DialogTitleWarning", [q2, W0] = Ub(U0, {
  contentName: yr,
  titleName: Id,
  docsSlug: "dialog"
}), sP = ({ titleId: e }) => {
  const t = W0(U0), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return x.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, iP = "DialogDescriptionWarning", aP = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${W0(iP).contentName}}.`;
  return x.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, lP = A0, cP = L0, H0 = _0, K0 = I0, G0 = F0, Y0 = z0, uP = $0;
const dP = lP, fP = cP, X0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  H0,
  {
    ref: n,
    className: Se(
      "fixed inset-0 z-[99999] bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
X0.displayName = H0.displayName;
const Q0 = x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.jsxs(fP, { children: [
  /* @__PURE__ */ p.jsx(X0, {}),
  /* @__PURE__ */ p.jsxs(
    K0,
    {
      ref: r,
      className: Se(
        "fixed left-[50%] top-[50%] z-[99999] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-card text-foreground p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ p.jsxs(uP, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-all duration-200 hover:opacity-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 p-1", children: [
          /* @__PURE__ */ p.jsx(xT, { className: "h-4 w-4" }),
          /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Q0.displayName = K0.displayName;
const q0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  "div",
  {
    className: Se(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
q0.displayName = "DialogHeader";
const Z0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  "div",
  {
    className: Se(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Z0.displayName = "DialogFooter";
const J0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  G0,
  {
    ref: n,
    className: Se(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
J0.displayName = G0.displayName;
const ex = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  Y0,
  {
    ref: n,
    className: Se("text-sm text-muted-foreground", e),
    ...t
  }
));
ex.displayName = Y0.displayName;
function uo({
  className: e,
  variant: t = "default",
  size: n = "default",
  ...r
}) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      className: Se(
        "inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 dark:focus:ring-slate-300 focus:ring-offset-2",
        {
          default: "border-transparent bg-gray-500 text-white hover:bg-gray-500/80",
          // Gray for uncategorized
          secondary: "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80",
          destructive: "border-transparent bg-red-500 text-slate-50 hover:bg-red-500/80",
          outline: "text-slate-950 dark:text-slate-50 border-slate-200 dark:border-slate-600",
          success: "border-transparent bg-green-500 text-white hover:bg-green-500/80",
          // Green for UNBC
          primary: "border-transparent bg-purple-500 text-white hover:bg-purple-500/80",
          // Purple for Clubs  
          warning: "border-transparent bg-blue-500 text-white hover:bg-blue-500/80",
          // Blue for Sports
          danger: "border-transparent bg-red-500 text-white hover:bg-red-500/80"
          // Red for Organizations
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
function tx({ event: e, eventMetadata: t, open: n, onOpenChange: r }) {
  const [o, s] = Y.useState(!1);
  if (Y.useEffect(() => {
    var u;
    e && ((u = t[e.id]) != null && u.website) && console.log("Event website URL:", t[e.id].website);
  }, [e, t]), !e) return null;
  const i = t[e.id], a = (u, d = 180) => {
    if (!u || u.length <= d) return u;
    const f = u.substring(0, d), g = f.lastIndexOf("."), w = f.lastIndexOf(" "), v = g > d - 50 ? g + 1 : w;
    return u.substring(0, v > 0 ? v : d).trim();
  }, l = (u) => {
    const d = e.startDate, f = e.endDate || new Date(d.getTime() + 60 * 60 * 1e3), g = (w) => w.toISOString().replace(/-|:|\.\d\d\d/g, "");
    switch (u) {
      case "google":
        const w = new URL("https://calendar.google.com/calendar/render");
        return w.searchParams.append("action", "TEMPLATE"), w.searchParams.append("text", e.title), w.searchParams.append("dates", `${g(d)}/${g(f)}`), w.searchParams.append("details", e.description || ""), i != null && i.location && w.searchParams.append("location", i.location), w.toString();
      case "outlook":
      case "apple":
        const v = [
          "BEGIN:VCALENDAR",
          "VERSION:2.0",
          "PRODID:-//UNBC Calendar//Events//EN",
          "METHOD:PUBLISH",
          "BEGIN:VEVENT",
          `UID:${e.id}@unbc-calendar`,
          `DTSTART:${g(d)}`,
          `DTEND:${g(f)}`,
          `SUMMARY:${e.title}`,
          `DESCRIPTION:${e.description || ""}`,
          i != null && i.location ? `LOCATION:${i.location}` : "",
          i != null && i.website ? `URL:${i.website}` : "",
          `ORGANIZER;CN=${(i == null ? void 0 : i.organization) || "Over the Edge"}:MAILTO:ote@unbc.ca`,
          "STATUS:CONFIRMED",
          "END:VEVENT",
          "END:VCALENDAR"
        ].filter((S) => S).join(`
`);
        return `data:text/calendar;charset=utf8,${encodeURIComponent(v)}`;
    }
  }, c = {
    clubs: "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary",
    unbc: "bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary",
    organizations: "bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive",
    sports: "bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent"
  };
  return /* @__PURE__ */ p.jsx(dP, { open: n, onOpenChange: r, children: /* @__PURE__ */ p.jsxs(Q0, { className: "max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto overflow-x-hidden bg-card border border-border sm:w-full p-4 sm:p-6", children: [
    /* @__PURE__ */ p.jsxs(q0, { children: [
      /* @__PURE__ */ p.jsx(J0, { className: "text-xl text-foreground", children: e.title }),
      e.description && /* @__PURE__ */ p.jsxs("div", { className: "mt-2", children: [
        /* @__PURE__ */ p.jsx(ex, { className: `text-muted-foreground leading-relaxed break-words ${o ? "max-h-[40vh] overflow-y-auto pr-2" : ""}`, children: o ? e.description : a(e.description) }),
        e.description.length > 180 && /* @__PURE__ */ p.jsx(
          "button",
          {
            onClick: () => s(!o),
            className: "inline-flex items-center gap-1 mt-3 px-3 py-2 text-sm text-primary hover:text-primary/80 hover:bg-primary/10 active:bg-primary/20 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
            children: o ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
              "Show less",
              /* @__PURE__ */ p.jsx(d0, { className: "h-4 w-4" })
            ] }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
              "Read more",
              /* @__PURE__ */ p.jsx(Rd, { className: "h-4 w-4" })
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "space-y-4 my-4", children: /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
        /* @__PURE__ */ p.jsx(co, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
        /* @__PURE__ */ p.jsxs("div", { children: [
          /* @__PURE__ */ p.jsx("div", { className: "font-medium text-foreground", children: e.startDate.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          }) }),
          /* @__PURE__ */ p.jsxs("div", { className: "text-muted-foreground", children: [
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
      i && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        i.location && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(Os, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-foreground", children: i.location })
        ] }),
        i.organization && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(Qa, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-foreground", children: i.organization })
        ] }),
        i.cost && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(vT, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-foreground", children: i.cost })
        ] }),
        i.website && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(yT, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ p.jsx(
            "a",
            {
              href: i.website,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-block text-primary hover:text-primary/80 hover:underline transition-colors break-all cursor-pointer",
              style: { pointerEvents: "auto", position: "relative", zIndex: 10 },
              children: "Event Website"
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          i.category && /* @__PURE__ */ p.jsx(uo, { className: c[i.category] || "bg-muted text-foreground", children: i.category.charAt(0).toUpperCase() + i.category.slice(1) }),
          i.registrationRequired && /* @__PURE__ */ p.jsx(uo, { variant: "outline", className: "border-border text-foreground", children: "Registration Required" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsxs(Z0, { className: "flex-col sm:flex-col gap-2", children: [
      /* @__PURE__ */ p.jsx("div", { className: "text-sm text-muted-foreground mb-2", children: "Add to your calendar:" }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex gap-2 w-full", children: [
        /* @__PURE__ */ p.jsxs(
          nn,
          {
            variant: "outline",
            className: "flex-1 border-border bg-card text-foreground hover:bg-muted text-xs sm:text-sm",
            onClick: () => window.open(l("google"), "_blank"),
            children: [
              /* @__PURE__ */ p.jsx(Fi, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Google"
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          nn,
          {
            variant: "outline",
            className: "flex-1 border-border bg-card text-foreground hover:bg-muted text-xs sm:text-sm",
            onClick: () => {
              const u = l("outlook"), d = document.createElement("a");
              d.href = u, d.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, d.click();
            },
            children: [
              /* @__PURE__ */ p.jsx(Fi, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Outlook"
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          nn,
          {
            variant: "outline",
            className: "flex-1 border-border bg-card text-foreground hover:bg-muted text-xs sm:text-sm",
            onClick: () => {
              const u = l("apple"), d = document.createElement("a");
              d.href = u, d.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, d.click();
            },
            children: [
              /* @__PURE__ */ p.jsx(Fi, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Apple"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
const Fd = x.createContext({});
function Vd(e) {
  const t = x.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Ja = x.createContext(null), zd = x.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class pP extends x.Component {
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
function hP({ children: e, isPresent: t }) {
  const n = x.useId(), r = x.useRef(null), o = x.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: s } = x.useContext(zd);
  return x.useInsertionEffect(() => {
    const { width: i, height: a, top: l, left: c } = o.current;
    if (t || !r.current || !i || !a)
      return;
    r.current.dataset.motionPopId = n;
    const u = document.createElement("style");
    return s && (u.nonce = s), document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `), () => {
      document.head.removeChild(u);
    };
  }, [t]), p.jsx(pP, { isPresent: t, childRef: r, sizeRef: o, children: x.cloneElement(e, { ref: r }) });
}
const mP = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: i }) => {
  const a = Vd(gP), l = x.useId(), c = x.useCallback((d) => {
    a.set(d, !0);
    for (const f of a.values())
      if (!f)
        return;
    r && r();
  }, [a, r]), u = x.useMemo(
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
    s ? [Math.random(), c] : [n, c]
  );
  return x.useMemo(() => {
    a.forEach((d, f) => a.set(f, !1));
  }, [n]), x.useEffect(() => {
    !n && !a.size && r && r();
  }, [n]), i === "popLayout" && (e = p.jsx(hP, { isPresent: n, children: e })), p.jsx(Ja.Provider, { value: u, children: e });
};
function gP() {
  return /* @__PURE__ */ new Map();
}
function nx(e = !0) {
  const t = x.useContext(Ja);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t, s = x.useId();
  x.useEffect(() => {
    e && o(s);
  }, [e]);
  const i = x.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, i] : [!0];
}
const yi = (e) => e.key || "";
function ph(e) {
  const t = [];
  return x.Children.forEach(e, (n) => {
    x.isValidElement(n) && t.push(n);
  }), t;
}
const Bd = typeof window < "u", rx = Bd ? x.useLayoutEffect : x.useEffect, hh = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: o = !0, mode: s = "sync", propagate: i = !1 }) => {
  const [a, l] = nx(i), c = x.useMemo(() => ph(e), [e]), u = i && !a ? [] : c.map(yi), d = x.useRef(!0), f = x.useRef(c), g = Vd(() => /* @__PURE__ */ new Map()), [w, v] = x.useState(c), [S, m] = x.useState(c);
  rx(() => {
    d.current = !1, f.current = c;
    for (let b = 0; b < S.length; b++) {
      const C = yi(S[b]);
      u.includes(C) ? g.delete(C) : g.get(C) !== !0 && g.set(C, !1);
    }
  }, [S, u.length, u.join("-")]);
  const h = [];
  if (c !== w) {
    let b = [...c];
    for (let C = 0; C < S.length; C++) {
      const k = S[C], E = yi(k);
      u.includes(E) || (b.splice(C, 0, k), h.push(k));
    }
    s === "wait" && h.length && (b = h), m(ph(b)), v(c);
    return;
  }
  const { forceRender: y } = x.useContext(Fd);
  return p.jsx(p.Fragment, { children: S.map((b) => {
    const C = yi(b), k = i && !a ? !1 : c === S || u.includes(C), E = () => {
      if (g.has(C))
        g.set(C, !0);
      else
        return;
      let T = !0;
      g.forEach((j) => {
        j || (T = !1);
      }), T && (y == null || y(), m(f.current), i && (l == null || l()), r && r());
    };
    return p.jsx(mP, { isPresent: k, initial: !d.current || n ? void 0 : !1, custom: k ? void 0 : t, presenceAffectsLayout: o, mode: s, onExitComplete: k ? void 0 : E, children: b }, C);
  }) });
}, ut = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let ox = ut;
// @__NO_SIDE_EFFECTS__
function $d(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const fo = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, rn = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, on = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, vP = {
  useManualTiming: !1
};
function yP(e) {
  let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, o = !1;
  const s = /* @__PURE__ */ new WeakSet();
  let i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function a(c) {
    s.has(c) && (l.schedule(c), e()), c(i);
  }
  const l = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, u = !1, d = !1) => {
      const g = d && r ? t : n;
      return u && s.add(c), g.has(c) || g.add(c), c;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      n.delete(c), s.delete(c);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (i = c, r) {
        o = !0;
        return;
      }
      r = !0, [t, n] = [n, t], t.forEach(a), t.clear(), r = !1, o && (o = !1, l.process(c));
    }
  };
  return l;
}
const xi = [
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
], xP = 40;
function sx(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = () => n = !0, i = xi.reduce((m, h) => (m[h] = yP(s), m), {}), { read: a, resolveKeyframes: l, update: c, preRender: u, render: d, postRender: f } = i, g = () => {
    const m = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(m - o.timestamp, xP), 1), o.timestamp = m, o.isProcessing = !0, a.process(o), l.process(o), c.process(o), u.process(o), d.process(o), f.process(o), o.isProcessing = !1, n && t && (r = !1, e(g));
  }, w = () => {
    n = !0, r = !0, o.isProcessing || e(g);
  };
  return { schedule: xi.reduce((m, h) => {
    const y = i[h];
    return m[h] = (b, C = !1, k = !1) => (n || w(), y.schedule(b, C, k)), m;
  }, {}), cancel: (m) => {
    for (let h = 0; h < xi.length; h++)
      i[xi[h]].cancel(m);
  }, state: o, steps: i };
}
const { schedule: de, cancel: $n, state: Oe, steps: $l } = sx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ut, !0), ix = x.createContext({ strict: !1 }), mh = {
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
}, po = {};
for (const e in mh)
  po[e] = {
    isEnabled: (t) => mh[e].some((n) => !!t[n])
  };
function wP(e) {
  for (const t in e)
    po[t] = {
      ...po[t],
      ...e[t]
    };
}
const SP = /* @__PURE__ */ new Set([
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
function xa(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || SP.has(e);
}
let ax = (e) => !xa(e);
function bP(e) {
  e && (ax = (t) => t.startsWith("on") ? !xa(t) : e(t));
}
try {
  bP(require("@emotion/is-prop-valid").default);
} catch {
}
function CP(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (ax(o) || n === !0 && xa(o) || !t && !xa(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function kP(e) {
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
const el = x.createContext({});
function Ts(e) {
  return typeof e == "string" || Array.isArray(e);
}
function tl(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Ud = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Wd = ["initial", ...Ud];
function nl(e) {
  return tl(e.animate) || Wd.some((t) => Ts(e[t]));
}
function lx(e) {
  return !!(nl(e) || e.variants);
}
function EP(e, t) {
  if (nl(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Ts(n) ? n : void 0,
      animate: Ts(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function TP(e) {
  const { initial: t, animate: n } = EP(e, x.useContext(el));
  return x.useMemo(() => ({ initial: t, animate: n }), [gh(t), gh(n)]);
}
function gh(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const PP = Symbol.for("motionComponentSymbol");
function Br(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function DP(e, t, n) {
  return x.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Br(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const Hd = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), NP = "framerAppearId", cx = "data-" + Hd(NP), { schedule: Kd } = sx(queueMicrotask, !1), ux = x.createContext({});
function MP(e, t, n, r, o) {
  var s, i;
  const { visualElement: a } = x.useContext(el), l = x.useContext(ix), c = x.useContext(Ja), u = x.useContext(zd).reducedMotion, d = x.useRef(null);
  r = r || l.renderer, !d.current && r && (d.current = r(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: u
  }));
  const f = d.current, g = x.useContext(ux);
  f && !f.projection && o && (f.type === "html" || f.type === "svg") && AP(d.current, n, o, g);
  const w = x.useRef(!1);
  x.useInsertionEffect(() => {
    f && w.current && f.update(n, c);
  });
  const v = n[cx], S = x.useRef(!!v && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, v)) && ((i = window.MotionHasOptimisedAnimation) === null || i === void 0 ? void 0 : i.call(window, v)));
  return rx(() => {
    f && (w.current = !0, window.MotionIsMounted = !0, f.updateFeatures(), Kd.render(f.render), S.current && f.animationState && f.animationState.animateChanges());
  }), x.useEffect(() => {
    f && (!S.current && f.animationState && f.animationState.animateChanges(), S.current && (queueMicrotask(() => {
      var m;
      (m = window.MotionHandoffMarkAsComplete) === null || m === void 0 || m.call(window, v);
    }), S.current = !1));
  }), f;
}
function AP(e, t, n, r) {
  const { layoutId: o, layout: s, drag: i, dragConstraints: a, layoutScroll: l, layoutRoot: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : dx(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: s,
    alwaysMeasureLayout: !!i || a && Br(a),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof s == "string" ? s : "both",
    initialPromotionConfig: r,
    layoutScroll: l,
    layoutRoot: c
  });
}
function dx(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : dx(e.parent);
}
function jP({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  var s, i;
  e && wP(e);
  function a(c, u) {
    let d;
    const f = {
      ...x.useContext(zd),
      ...c,
      layoutId: RP(c)
    }, { isStatic: g } = f, w = TP(c), v = r(c, g);
    if (!g && Bd) {
      LP();
      const S = _P(f);
      d = S.MeasureLayout, w.visualElement = MP(o, v, f, t, S.ProjectionNode);
    }
    return p.jsxs(el.Provider, { value: w, children: [d && w.visualElement ? p.jsx(d, { visualElement: w.visualElement, ...f }) : null, n(o, c, DP(v, w.visualElement, u), v, g, w.visualElement)] });
  }
  a.displayName = `motion.${typeof o == "string" ? o : `create(${(i = (s = o.displayName) !== null && s !== void 0 ? s : o.name) !== null && i !== void 0 ? i : ""})`}`;
  const l = x.forwardRef(a);
  return l[PP] = o, l;
}
function RP({ layoutId: e }) {
  const t = x.useContext(Fd).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function LP(e, t) {
  x.useContext(ix).strict;
}
function _P(e) {
  const { drag: t, layout: n } = po;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const IP = [
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
function Gd(e) {
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
      !!(IP.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function vh(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Yd(e, t, n, r) {
  if (typeof t == "function") {
    const [o, s] = vh(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, s] = vh(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  return t;
}
const iu = (e) => Array.isArray(e), OP = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), FP = (e) => iu(e) ? e[e.length - 1] || 0 : e, Ke = (e) => !!(e && e.getVelocity);
function zi(e) {
  const t = Ke(e) ? e.get() : e;
  return OP(t) ? t.toValue() : t;
}
function VP({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, o, s) {
  const i = {
    latestValues: zP(r, o, s, e),
    renderState: t()
  };
  return n && (i.onMount = (a) => n({ props: r, current: a, ...i }), i.onUpdate = (a) => n(a)), i;
}
const fx = (e) => (t, n) => {
  const r = x.useContext(el), o = x.useContext(Ja), s = () => VP(e, t, r, o);
  return n ? s() : Vd(s);
};
function zP(e, t, n, r) {
  const o = {}, s = r(e, {});
  for (const f in s)
    o[f] = zi(s[f]);
  let { initial: i, animate: a } = e;
  const l = nl(e), c = lx(e);
  t && c && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || i === !1;
  const d = u ? a : i;
  if (d && typeof d != "boolean" && !tl(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let g = 0; g < f.length; g++) {
      const w = Yd(e, f[g]);
      if (w) {
        const { transitionEnd: v, transition: S, ...m } = w;
        for (const h in m) {
          let y = m[h];
          if (Array.isArray(y)) {
            const b = u ? y.length - 1 : 0;
            y = y[b];
          }
          y !== null && (o[h] = y);
        }
        for (const h in v)
          o[h] = v[h];
      }
    }
  }
  return o;
}
const ko = [
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
], Sr = new Set(ko), px = (e) => (t) => typeof t == "string" && t.startsWith(e), hx = /* @__PURE__ */ px("--"), BP = /* @__PURE__ */ px("var(--"), Xd = (e) => BP(e) ? $P.test(e.split("/*")[0].trim()) : !1, $P = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, mx = (e, t) => t && typeof e == "number" ? t.transform(e) : e, fn = (e, t, n) => n > t ? t : n < e ? e : n, Eo = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Ps = {
  ...Eo,
  transform: (e) => fn(0, 1, e)
}, wi = {
  ...Eo,
  default: 1
}, zs = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Sn = /* @__PURE__ */ zs("deg"), Ut = /* @__PURE__ */ zs("%"), K = /* @__PURE__ */ zs("px"), UP = /* @__PURE__ */ zs("vh"), WP = /* @__PURE__ */ zs("vw"), yh = {
  ...Ut,
  parse: (e) => Ut.parse(e) / 100,
  transform: (e) => Ut.transform(e * 100)
}, HP = {
  // Border props
  borderWidth: K,
  borderTopWidth: K,
  borderRightWidth: K,
  borderBottomWidth: K,
  borderLeftWidth: K,
  borderRadius: K,
  radius: K,
  borderTopLeftRadius: K,
  borderTopRightRadius: K,
  borderBottomRightRadius: K,
  borderBottomLeftRadius: K,
  // Positioning props
  width: K,
  maxWidth: K,
  height: K,
  maxHeight: K,
  top: K,
  right: K,
  bottom: K,
  left: K,
  // Spacing props
  padding: K,
  paddingTop: K,
  paddingRight: K,
  paddingBottom: K,
  paddingLeft: K,
  margin: K,
  marginTop: K,
  marginRight: K,
  marginBottom: K,
  marginLeft: K,
  // Misc
  backgroundPositionX: K,
  backgroundPositionY: K
}, KP = {
  rotate: Sn,
  rotateX: Sn,
  rotateY: Sn,
  rotateZ: Sn,
  scale: wi,
  scaleX: wi,
  scaleY: wi,
  scaleZ: wi,
  skew: Sn,
  skewX: Sn,
  skewY: Sn,
  distance: K,
  translateX: K,
  translateY: K,
  translateZ: K,
  x: K,
  y: K,
  z: K,
  perspective: K,
  transformPerspective: K,
  opacity: Ps,
  originX: yh,
  originY: yh,
  originZ: K
}, xh = {
  ...Eo,
  transform: Math.round
}, Qd = {
  ...HP,
  ...KP,
  zIndex: xh,
  size: K,
  // SVG
  fillOpacity: Ps,
  strokeOpacity: Ps,
  numOctaves: xh
}, GP = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, YP = ko.length;
function XP(e, t, n) {
  let r = "", o = !0;
  for (let s = 0; s < YP; s++) {
    const i = ko[s], a = e[i];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (i.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const c = mx(a, Qd[i]);
      if (!l) {
        o = !1;
        const u = GP[i] || i;
        r += `${u}(${c}) `;
      }
      n && (t[i] = c);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function qd(e, t, n) {
  const { style: r, vars: o, transformOrigin: s } = e;
  let i = !1, a = !1;
  for (const l in t) {
    const c = t[l];
    if (Sr.has(l)) {
      i = !0;
      continue;
    } else if (hx(l)) {
      o[l] = c;
      continue;
    } else {
      const u = mx(c, Qd[l]);
      l.startsWith("origin") ? (a = !0, s[l] = u) : r[l] = u;
    }
  }
  if (t.transform || (i || n ? r.transform = XP(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = s;
    r.transformOrigin = `${l} ${c} ${u}`;
  }
}
const QP = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, qP = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function ZP(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const s = o ? QP : qP;
  e[s.offset] = K.transform(-r);
  const i = K.transform(t), a = K.transform(n);
  e[s.array] = `${i} ${a}`;
}
function wh(e, t, n) {
  return typeof e == "string" ? e : K.transform(t + n * e);
}
function JP(e, t, n) {
  const r = wh(t, e.x, e.width), o = wh(n, e.y, e.height);
  return `${r} ${o}`;
}
function Zd(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: o,
  originY: s,
  pathLength: i,
  pathSpacing: a = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, u, d) {
  if (qd(e, c, d), u) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: f, style: g, dimensions: w } = e;
  f.transform && (w && (g.transform = f.transform), delete f.transform), w && (o !== void 0 || s !== void 0 || g.transform) && (g.transformOrigin = JP(w, o !== void 0 ? o : 0.5, s !== void 0 ? s : 0.5)), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), r !== void 0 && (f.scale = r), i !== void 0 && ZP(f, i, a, l, !1);
}
const Jd = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), gx = () => ({
  ...Jd(),
  attrs: {}
}), ef = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function vx(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
const yx = /* @__PURE__ */ new Set([
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
function xx(e, t, n, r) {
  vx(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(yx.has(o) ? o : Hd(o), t.attrs[o]);
}
const wa = {};
function eD(e) {
  Object.assign(wa, e);
}
function wx(e, { layout: t, layoutId: n }) {
  return Sr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!wa[e] || e === "opacity");
}
function tf(e, t, n) {
  var r;
  const { style: o } = e, s = {};
  for (const i in o)
    (Ke(o[i]) || t.style && Ke(t.style[i]) || wx(i, e) || ((r = n == null ? void 0 : n.getValue(i)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[i] = o[i]);
  return s;
}
function Sx(e, t, n) {
  const r = tf(e, t, n);
  for (const o in e)
    if (Ke(e[o]) || Ke(t[o])) {
      const s = ko.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[s] = e[o];
    }
  return r;
}
function tD(e, t) {
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
const Sh = ["x", "y", "width", "height", "cx", "cy", "r"], nD = {
  useVisualState: fx({
    scrapeMotionValuesFromProps: Sx,
    createRenderState: gx,
    onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: o }) => {
      if (!n)
        return;
      let s = !!e.drag;
      if (!s) {
        for (const a in o)
          if (Sr.has(a)) {
            s = !0;
            break;
          }
      }
      if (!s)
        return;
      let i = !t;
      if (t)
        for (let a = 0; a < Sh.length; a++) {
          const l = Sh[a];
          e[l] !== t[l] && (i = !0);
        }
      i && de.read(() => {
        tD(n, r), de.render(() => {
          Zd(r, o, ef(n.tagName), e.transformTemplate), xx(n, r);
        });
      });
    }
  })
}, rD = {
  useVisualState: fx({
    scrapeMotionValuesFromProps: tf,
    createRenderState: Jd
  })
};
function bx(e, t, n) {
  for (const r in t)
    !Ke(t[r]) && !wx(r, n) && (e[r] = t[r]);
}
function oD({ transformTemplate: e }, t) {
  return x.useMemo(() => {
    const n = Jd();
    return qd(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function sD(e, t) {
  const n = e.style || {}, r = {};
  return bx(r, n, e), Object.assign(r, oD(e, t)), r;
}
function iD(e, t) {
  const n = {}, r = sD(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function aD(e, t, n, r) {
  const o = x.useMemo(() => {
    const s = gx();
    return Zd(s, t, ef(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    bx(s, e.style, e), o.style = { ...s, ...o.style };
  }
  return o;
}
function lD(e = !1) {
  return (n, r, o, { latestValues: s }, i) => {
    const l = (Gd(n) ? aD : iD)(r, s, i, n), c = CP(r, typeof n == "string", e), u = n !== x.Fragment ? { ...c, ...l, ref: o } : {}, { children: d } = r, f = x.useMemo(() => Ke(d) ? d.get() : d, [d]);
    return x.createElement(n, {
      ...u,
      children: f
    });
  };
}
function cD(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const i = {
      ...Gd(r) ? nD : rD,
      preloadedFeatures: e,
      useRender: lD(o),
      createVisualElement: t,
      Component: r
    };
    return jP(i);
  };
}
function Cx(e, t) {
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
function rl(e, t, n) {
  const r = e.getProps();
  return Yd(r, t, n !== void 0 ? n : r.custom, e);
}
const uD = /* @__PURE__ */ $d(() => window.ScrollTimeline !== void 0);
class dD {
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
      if (uD() && o.attachTimeline)
        return o.attachTimeline(t);
      if (typeof n == "function")
        return n(o);
    });
    return () => {
      r.forEach((o, s) => {
        o && o(), this.animations[s].stop();
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
class fD extends dD {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function nf(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const au = 2e4;
function kx(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < au; )
    t += n, r = e.next(t);
  return t >= au ? 1 / 0 : t;
}
function rf(e) {
  return typeof e == "function";
}
function bh(e, t) {
  e.timeline = t, e.onfinish = null;
}
const of = (e) => Array.isArray(e) && typeof e[0] == "number", pD = {
  linearEasing: void 0
};
function hD(e, t) {
  const n = /* @__PURE__ */ $d(e);
  return () => {
    var r;
    return (r = pD[t]) !== null && r !== void 0 ? r : n();
  };
}
const Sa = /* @__PURE__ */ hD(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Ex = (e, t, n = 10) => {
  let r = "";
  const o = Math.max(Math.round(t / n), 2);
  for (let s = 0; s < o; s++)
    r += e(/* @__PURE__ */ fo(0, o - 1, s)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function Tx(e) {
  return !!(typeof e == "function" && Sa() || !e || typeof e == "string" && (e in lu || Sa()) || of(e) || Array.isArray(e) && e.every(Tx));
}
const $o = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, lu = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ $o([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ $o([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ $o([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ $o([0.33, 1.53, 0.69, 0.99])
};
function Px(e, t) {
  if (e)
    return typeof e == "function" && Sa() ? Ex(e, t) : of(e) ? $o(e) : Array.isArray(e) ? e.map((n) => Px(n, t) || lu.easeOut) : lu[e];
}
const Et = {
  x: !1,
  y: !1
};
function Dx() {
  return Et.x || Et.y;
}
function mD(e, t, n) {
  var r;
  if (e instanceof Element)
    return [e];
  if (typeof e == "string") {
    let o = document;
    const s = (r = void 0) !== null && r !== void 0 ? r : o.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e);
}
function Nx(e, t) {
  const n = mD(e), r = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, o, () => r.abort()];
}
function Ch(e) {
  return (t) => {
    t.pointerType === "touch" || Dx() || e(t);
  };
}
function gD(e, t, n = {}) {
  const [r, o, s] = Nx(e, n), i = Ch((a) => {
    const { target: l } = a, c = t(a);
    if (typeof c != "function" || !l)
      return;
    const u = Ch((d) => {
      c(d), l.removeEventListener("pointerleave", u);
    });
    l.addEventListener("pointerleave", u, o);
  });
  return r.forEach((a) => {
    a.addEventListener("pointerenter", i, o);
  }), s;
}
const Mx = (e, t) => t ? e === t ? !0 : Mx(e, t.parentElement) : !1, sf = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, vD = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function yD(e) {
  return vD.has(e.tagName) || e.tabIndex !== -1;
}
const Uo = /* @__PURE__ */ new WeakSet();
function kh(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Ul(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const xD = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = kh(() => {
    if (Uo.has(n))
      return;
    Ul(n, "down");
    const o = kh(() => {
      Ul(n, "up");
    }), s = () => Ul(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Eh(e) {
  return sf(e) && !Dx();
}
function wD(e, t, n = {}) {
  const [r, o, s] = Nx(e, n), i = (a) => {
    const l = a.currentTarget;
    if (!Eh(a) || Uo.has(l))
      return;
    Uo.add(l);
    const c = t(a), u = (g, w) => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", f), !(!Eh(g) || !Uo.has(l)) && (Uo.delete(l), typeof c == "function" && c(g, { success: w }));
    }, d = (g) => {
      u(g, n.useGlobalTarget || Mx(l, g.target));
    }, f = (g) => {
      u(g, !1);
    };
    window.addEventListener("pointerup", d, o), window.addEventListener("pointercancel", f, o);
  };
  return r.forEach((a) => {
    !yD(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", i, o), a.addEventListener("focus", (c) => xD(c, o), o);
  }), s;
}
function SD(e) {
  return e === "x" || e === "y" ? Et[e] ? null : (Et[e] = !0, () => {
    Et[e] = !1;
  }) : Et.x || Et.y ? null : (Et.x = Et.y = !0, () => {
    Et.x = Et.y = !1;
  });
}
const Ax = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...ko
]);
let Bi;
function bD() {
  Bi = void 0;
}
const Wt = {
  now: () => (Bi === void 0 && Wt.set(Oe.isProcessing || vP.useManualTiming ? Oe.timestamp : performance.now()), Bi),
  set: (e) => {
    Bi = e, queueMicrotask(bD);
  }
};
function af(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function lf(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class cf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return af(this.subscriptions, t), () => lf(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < o; s++) {
          const i = this.subscriptions[s];
          i && i(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function jx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Th = 30, CD = (e) => !isNaN(parseFloat(e));
class kD {
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
      const s = Wt.now();
      this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Wt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = CD(this.current));
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
    this.events[t] || (this.events[t] = new cf());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), de.read(() => {
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
    const t = Wt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Th)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Th);
    return jx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function Ds(e, t) {
  return new kD(e, t);
}
function ED(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ds(n));
}
function TD(e, t) {
  const n = rl(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const i in s) {
    const a = FP(s[i]);
    ED(e, i, a);
  }
}
function PD(e) {
  return !!(Ke(e) && e.add);
}
function cu(e, t) {
  const n = e.getValue("willChange");
  if (PD(n))
    return n.add(t);
}
function Rx(e) {
  return e.props[cx];
}
const Lx = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, DD = 1e-7, ND = 12;
function MD(e, t, n, r, o) {
  let s, i, a = 0;
  do
    i = t + (n - t) / 2, s = Lx(i, r, o) - e, s > 0 ? n = i : t = i;
  while (Math.abs(s) > DD && ++a < ND);
  return i;
}
function Bs(e, t, n, r) {
  if (e === t && n === r)
    return ut;
  const o = (s) => MD(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : Lx(o(s), t, r);
}
const _x = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Ix = (e) => (t) => 1 - e(1 - t), Ox = /* @__PURE__ */ Bs(0.33, 1.53, 0.69, 0.99), uf = /* @__PURE__ */ Ix(Ox), Fx = /* @__PURE__ */ _x(uf), Vx = (e) => (e *= 2) < 1 ? 0.5 * uf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), df = (e) => 1 - Math.sin(Math.acos(e)), zx = Ix(df), Bx = _x(df), $x = (e) => /^0[^.\s]+$/u.test(e);
function AD(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || $x(e) : !0;
}
const es = (e) => Math.round(e * 1e5) / 1e5, ff = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function jD(e) {
  return e == null;
}
const RD = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, pf = (e, t) => (n) => !!(typeof n == "string" && RD.test(n) && n.startsWith(e) || t && !jD(n) && Object.prototype.hasOwnProperty.call(n, t)), Ux = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, s, i, a] = r.match(ff);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, LD = (e) => fn(0, 255, e), Wl = {
  ...Eo,
  transform: (e) => Math.round(LD(e))
}, ir = {
  test: /* @__PURE__ */ pf("rgb", "red"),
  parse: /* @__PURE__ */ Ux("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Wl.transform(e) + ", " + Wl.transform(t) + ", " + Wl.transform(n) + ", " + es(Ps.transform(r)) + ")"
};
function _D(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const uu = {
  test: /* @__PURE__ */ pf("#"),
  parse: _D,
  transform: ir.transform
}, $r = {
  test: /* @__PURE__ */ pf("hsl", "hue"),
  parse: /* @__PURE__ */ Ux("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Ut.transform(es(t)) + ", " + Ut.transform(es(n)) + ", " + es(Ps.transform(r)) + ")"
}, We = {
  test: (e) => ir.test(e) || uu.test(e) || $r.test(e),
  parse: (e) => ir.test(e) ? ir.parse(e) : $r.test(e) ? $r.parse(e) : uu.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? ir.transform(e) : $r.transform(e)
}, ID = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function OD(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(ff)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(ID)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Wx = "number", Hx = "color", FD = "var", VD = "var(", Ph = "${}", zD = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ns(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let s = 0;
  const a = t.replace(zD, (l) => (We.test(l) ? (r.color.push(s), o.push(Hx), n.push(We.parse(l))) : l.startsWith(VD) ? (r.var.push(s), o.push(FD), n.push(l)) : (r.number.push(s), o.push(Wx), n.push(parseFloat(l))), ++s, Ph)).split(Ph);
  return { values: n, split: a, indexes: r, types: o };
}
function Kx(e) {
  return Ns(e).values;
}
function Gx(e) {
  const { split: t, types: n } = Ns(e), r = t.length;
  return (o) => {
    let s = "";
    for (let i = 0; i < r; i++)
      if (s += t[i], o[i] !== void 0) {
        const a = n[i];
        a === Wx ? s += es(o[i]) : a === Hx ? s += We.transform(o[i]) : s += o[i];
      }
    return s;
  };
}
const BD = (e) => typeof e == "number" ? 0 : e;
function $D(e) {
  const t = Kx(e);
  return Gx(e)(t.map(BD));
}
const Un = {
  test: OD,
  parse: Kx,
  createTransformer: Gx,
  getAnimatableNone: $D
}, UD = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function WD(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(ff) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let s = UD.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + o + ")";
}
const HD = /\b([a-z-]*)\(.*?\)/gu, du = {
  ...Un,
  getAnimatableNone: (e) => {
    const t = e.match(HD);
    return t ? t.map(WD).join(" ") : e;
  }
}, KD = {
  ...Qd,
  // Color props
  color: We,
  backgroundColor: We,
  outlineColor: We,
  fill: We,
  stroke: We,
  // Border props
  borderColor: We,
  borderTopColor: We,
  borderRightColor: We,
  borderBottomColor: We,
  borderLeftColor: We,
  filter: du,
  WebkitFilter: du
}, hf = (e) => KD[e];
function Yx(e, t) {
  let n = hf(e);
  return n !== du && (n = Un), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const GD = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function YD(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const s = e[r];
    typeof s == "string" && !GD.has(s) && Ns(s).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const s of t)
      e[s] = Yx(n, o);
}
const Dh = (e) => e === Eo || e === K, Nh = (e, t) => parseFloat(e.split(", ")[t]), Mh = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/u);
  if (o)
    return Nh(o[1], t);
  {
    const s = r.match(/^matrix\((.+)\)$/u);
    return s ? Nh(s[1], e) : 0;
  }
}, XD = /* @__PURE__ */ new Set(["x", "y", "z"]), QD = ko.filter((e) => !XD.has(e));
function qD(e) {
  const t = [];
  return QD.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const ho = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: Mh(4, 13),
  y: Mh(5, 14)
};
ho.translateX = ho.x;
ho.translateY = ho.y;
const cr = /* @__PURE__ */ new Set();
let fu = !1, pu = !1;
function Xx() {
  if (pu) {
    const e = Array.from(cr).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = qD(r);
      o.length && (n.set(r, o), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const o = n.get(r);
      o && o.forEach(([s, i]) => {
        var a;
        (a = r.getValue(s)) === null || a === void 0 || a.set(i);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  pu = !1, fu = !1, cr.forEach((e) => e.complete()), cr.clear();
}
function Qx() {
  cr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (pu = !0);
  });
}
function ZD() {
  Qx(), Xx();
}
class mf {
  constructor(t, n, r, o, s, i = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = s, this.isAsync = i;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (cr.add(this), fu || (fu = !0, de.read(Qx), de.resolveKeyframes(Xx))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: o } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const i = o == null ? void 0 : o.get(), a = t[t.length - 1];
          if (i !== void 0)
            t[0] = i;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), o && i === void 0 && o.set(t[0]);
        } else
          t[s] = t[s - 1];
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), cr.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, cr.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const qx = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), JD = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function eN(e) {
  const t = JD.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function Zx(e, t, n = 1) {
  const [r, o] = eN(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const i = s.trim();
    return qx(i) ? parseFloat(i) : i;
  }
  return Xd(o) ? Zx(o, t, n + 1) : o;
}
const Jx = (e) => (t) => t.test(e), tN = {
  test: (e) => e === "auto",
  parse: (e) => e
}, ew = [Eo, K, Ut, Sn, WP, UP, tN], Ah = (e) => ew.find(Jx(e));
class tw extends mf {
  constructor(t, n, r, o, s) {
    super(t, n, r, o, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == "string" && (c = c.trim(), Xd(c))) {
        const u = Zx(c, n.current);
        u !== void 0 && (t[l] = u), l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !Ax.has(r) || t.length !== 2)
      return;
    const [o, s] = t, i = Ah(o), a = Ah(s);
    if (i !== a)
      if (Dh(i) && Dh(a))
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
      AD(t[o]) && r.push(o);
    r.length && YD(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ho[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: o } = this;
    if (!n || !n.current)
      return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const i = o.length - 1, a = o[i];
    o[i] = ho[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, c]) => {
      n.getValue(l).set(c);
    }), this.resolveNoneKeyframes();
  }
}
const jh = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Un.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function nN(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function rN(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const s = e[e.length - 1], i = jh(o, t), a = jh(s, t);
  return !i || !a ? !1 : nN(e) || (n === "spring" || rf(n)) && r;
}
const oN = (e) => e !== null;
function ol(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(oN), s = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !s || r === void 0 ? o[s] : r;
}
const sN = 40;
class nw {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: i = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Wt.now(), this.options = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: o,
      repeatDelay: s,
      repeatType: i,
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > sN ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && ZD(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = Wt.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: o, velocity: s, delay: i, onComplete: a, onUpdate: l, isGenerator: c } = this.options;
    if (!c && !rN(t, r, o, s))
      if (i)
        this.options.duration = 0;
      else {
        l && l(ol(t, this.options, n)), a && a(), this.resolveFinishedPromise();
        return;
      }
    const u = this.initPlayback(t, n);
    u !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: n,
      ...u
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
const ge = (e, t, n) => e + (t - e) * n;
function Hl(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function iN({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, s = 0, i = 0;
  if (!t)
    o = s = i = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    o = Hl(l, a, e + 1 / 3), s = Hl(l, a, e), i = Hl(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(s * 255),
    blue: Math.round(i * 255),
    alpha: r
  };
}
function ba(e, t) {
  return (n) => n > 0 ? t : e;
}
const Kl = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, aN = [uu, ir, $r], lN = (e) => aN.find((t) => t.test(e));
function Rh(e) {
  const t = lN(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === $r && (n = iN(n)), n;
}
const Lh = (e, t) => {
  const n = Rh(e), r = Rh(t);
  if (!n || !r)
    return ba(e, t);
  const o = { ...n };
  return (s) => (o.red = Kl(n.red, r.red, s), o.green = Kl(n.green, r.green, s), o.blue = Kl(n.blue, r.blue, s), o.alpha = ge(n.alpha, r.alpha, s), ir.transform(o));
}, cN = (e, t) => (n) => t(e(n)), $s = (...e) => e.reduce(cN), hu = /* @__PURE__ */ new Set(["none", "hidden"]);
function uN(e, t) {
  return hu.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function dN(e, t) {
  return (n) => ge(e, t, n);
}
function gf(e) {
  return typeof e == "number" ? dN : typeof e == "string" ? Xd(e) ? ba : We.test(e) ? Lh : hN : Array.isArray(e) ? rw : typeof e == "object" ? We.test(e) ? Lh : fN : ba;
}
function rw(e, t) {
  const n = [...e], r = n.length, o = e.map((s, i) => gf(s)(s, t[i]));
  return (s) => {
    for (let i = 0; i < r; i++)
      n[i] = o[i](s);
    return n;
  };
}
function fN(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = gf(e[o])(e[o], t[o]));
  return (o) => {
    for (const s in r)
      n[s] = r[s](o);
    return n;
  };
}
function pN(e, t) {
  var n;
  const r = [], o = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const i = t.types[s], a = e.indexes[i][o[i]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    r[s] = l, o[i]++;
  }
  return r;
}
const hN = (e, t) => {
  const n = Un.createTransformer(t), r = Ns(e), o = Ns(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? hu.has(e) && !o.values.length || hu.has(t) && !r.values.length ? uN(e, t) : $s(rw(pN(r, o), o.values), n) : ba(e, t);
};
function ow(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? ge(e, t, n) : gf(e)(e, t);
}
const mN = 5;
function sw(e, t, n) {
  const r = Math.max(t - mN, 0);
  return jx(n - e(r), t - r);
}
const xe = {
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
}, Gl = 1e-3;
function gN({ duration: e = xe.duration, bounce: t = xe.bounce, velocity: n = xe.velocity, mass: r = xe.mass }) {
  let o, s, i = 1 - t;
  i = fn(xe.minDamping, xe.maxDamping, i), e = fn(xe.minDuration, xe.maxDuration, /* @__PURE__ */ on(e)), i < 1 ? (o = (c) => {
    const u = c * i, d = u * e, f = u - n, g = mu(c, i), w = Math.exp(-d);
    return Gl - f / g * w;
  }, s = (c) => {
    const d = c * i * e, f = d * n + n, g = Math.pow(i, 2) * Math.pow(c, 2) * e, w = Math.exp(-d), v = mu(Math.pow(c, 2), i);
    return (-o(c) + Gl > 0 ? -1 : 1) * ((f - g) * w) / v;
  }) : (o = (c) => {
    const u = Math.exp(-c * e), d = (c - n) * e + 1;
    return -Gl + u * d;
  }, s = (c) => {
    const u = Math.exp(-c * e), d = (n - c) * (e * e);
    return u * d;
  });
  const a = 5 / e, l = yN(o, s, a);
  if (e = /* @__PURE__ */ rn(e), isNaN(l))
    return {
      stiffness: xe.stiffness,
      damping: xe.damping,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * r;
    return {
      stiffness: c,
      damping: i * 2 * Math.sqrt(r * c),
      duration: e
    };
  }
}
const vN = 12;
function yN(e, t, n) {
  let r = n;
  for (let o = 1; o < vN; o++)
    r = r - e(r) / t(r);
  return r;
}
function mu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const xN = ["duration", "bounce"], wN = ["stiffness", "damping", "mass"];
function _h(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function SN(e) {
  let t = {
    velocity: xe.velocity,
    stiffness: xe.stiffness,
    damping: xe.damping,
    mass: xe.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!_h(e, wN) && _h(e, xN))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, s = 2 * fn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: xe.mass,
        stiffness: o,
        damping: s
      };
    } else {
      const n = gN(e);
      t = {
        ...t,
        ...n,
        mass: xe.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function iw(e = xe.visualDuration, t = xe.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: o } = n;
  const s = n.keyframes[0], i = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: s }, { stiffness: l, damping: c, mass: u, duration: d, velocity: f, isResolvedFromDuration: g } = SN({
    ...n,
    velocity: -/* @__PURE__ */ on(n.velocity || 0)
  }), w = f || 0, v = c / (2 * Math.sqrt(l * u)), S = i - s, m = /* @__PURE__ */ on(Math.sqrt(l / u)), h = Math.abs(S) < 5;
  r || (r = h ? xe.restSpeed.granular : xe.restSpeed.default), o || (o = h ? xe.restDelta.granular : xe.restDelta.default);
  let y;
  if (v < 1) {
    const C = mu(m, v);
    y = (k) => {
      const E = Math.exp(-v * m * k);
      return i - E * ((w + v * m * S) / C * Math.sin(C * k) + S * Math.cos(C * k));
    };
  } else if (v === 1)
    y = (C) => i - Math.exp(-m * C) * (S + (w + m * S) * C);
  else {
    const C = m * Math.sqrt(v * v - 1);
    y = (k) => {
      const E = Math.exp(-v * m * k), T = Math.min(C * k, 300);
      return i - E * ((w + v * m * S) * Math.sinh(T) + C * S * Math.cosh(T)) / C;
    };
  }
  const b = {
    calculatedDuration: g && d || null,
    next: (C) => {
      const k = y(C);
      if (g)
        a.done = C >= d;
      else {
        let E = 0;
        v < 1 && (E = C === 0 ? /* @__PURE__ */ rn(w) : sw(y, C, k));
        const T = Math.abs(E) <= r, j = Math.abs(i - k) <= o;
        a.done = T && j;
      }
      return a.value = a.done ? i : k, a;
    },
    toString: () => {
      const C = Math.min(kx(b), au), k = Ex((E) => b.next(C * E).value, C, 30);
      return C + "ms " + k;
    }
  };
  return b;
}
function Ih({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: s = 500, modifyTarget: i, min: a, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, g = (T) => a !== void 0 && T < a || l !== void 0 && T > l, w = (T) => a === void 0 ? l : l === void 0 || Math.abs(a - T) < Math.abs(l - T) ? a : l;
  let v = n * t;
  const S = d + v, m = i === void 0 ? S : i(S);
  m !== S && (v = m - d);
  const h = (T) => -v * Math.exp(-T / r), y = (T) => m + h(T), b = (T) => {
    const j = h(T), M = y(T);
    f.done = Math.abs(j) <= c, f.value = f.done ? m : M;
  };
  let C, k;
  const E = (T) => {
    g(f.value) && (C = T, k = iw({
      keyframes: [f.value, w(f.value)],
      velocity: sw(y, T, f.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: s,
      restDelta: c,
      restSpeed: u
    }));
  };
  return E(0), {
    calculatedDuration: null,
    next: (T) => {
      let j = !1;
      return !k && C === void 0 && (j = !0, b(T), E(T)), C !== void 0 && T >= C ? k.next(T - C) : (!j && b(T), f);
    }
  };
}
const bN = /* @__PURE__ */ Bs(0.42, 0, 1, 1), CN = /* @__PURE__ */ Bs(0, 0, 0.58, 1), aw = /* @__PURE__ */ Bs(0.42, 0, 0.58, 1), kN = (e) => Array.isArray(e) && typeof e[0] != "number", EN = {
  linear: ut,
  easeIn: bN,
  easeInOut: aw,
  easeOut: CN,
  circIn: df,
  circInOut: Bx,
  circOut: zx,
  backIn: uf,
  backInOut: Fx,
  backOut: Ox,
  anticipate: Vx
}, Oh = (e) => {
  if (of(e)) {
    ox(e.length === 4);
    const [t, n, r, o] = e;
    return Bs(t, n, r, o);
  } else if (typeof e == "string")
    return EN[e];
  return e;
};
function TN(e, t, n) {
  const r = [], o = n || ow, s = e.length - 1;
  for (let i = 0; i < s; i++) {
    let a = o(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] || ut : t;
      a = $s(l, a);
    }
    r.push(a);
  }
  return r;
}
function PN(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const s = e.length;
  if (ox(s === t.length), s === 1)
    return () => t[0];
  if (s === 2 && t[0] === t[1])
    return () => t[1];
  const i = e[0] === e[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = TN(t, r, o), l = a.length, c = (u) => {
    if (i && u < e[0])
      return t[0];
    let d = 0;
    if (l > 1)
      for (; d < e.length - 2 && !(u < e[d + 1]); d++)
        ;
    const f = /* @__PURE__ */ fo(e[d], e[d + 1], u);
    return a[d](f);
  };
  return n ? (u) => c(fn(e[0], e[s - 1], u)) : c;
}
function DN(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ fo(0, t, r);
    e.push(ge(n, 1, o));
  }
}
function NN(e) {
  const t = [0];
  return DN(t, e.length - 1), t;
}
function MN(e, t) {
  return e.map((n) => n * t);
}
function AN(e, t) {
  return e.map(() => t || aw).splice(0, e.length - 1);
}
function Ca({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = kN(r) ? r.map(Oh) : Oh(r), s = {
    done: !1,
    value: t[0]
  }, i = MN(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : NN(t),
    e
  ), a = PN(i, t, {
    ease: Array.isArray(o) ? o : AN(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (s.value = a(l), s.done = l >= e, s)
  };
}
const jN = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => de.update(t, !0),
    stop: () => $n(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Oe.isProcessing ? Oe.timestamp : Wt.now()
  };
}, RN = {
  decay: Ih,
  inertia: Ih,
  tween: Ca,
  keyframes: Ca,
  spring: iw
}, LN = (e) => e / 100;
class vf extends nw {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options, i = (o == null ? void 0 : o.KeyframeResolver) || mf, a = (l, c) => this.onKeyframesResolved(l, c);
    this.resolver = new i(s, a, n, r, o), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: s, velocity: i = 0 } = this.options, a = rf(n) ? n : RN[n] || Ca;
    let l, c;
    a !== Ca && typeof t[0] != "number" && (l = $s(LN, ow(t[0], t[1])), t = [0, 100]);
    const u = a({ ...this.options, keyframes: t });
    s === "mirror" && (c = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -i
    })), u.calculatedDuration === null && (u.calculatedDuration = kx(u));
    const { calculatedDuration: d } = u, f = d + o, g = f * (r + 1) - o;
    return {
      generator: u,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: g
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
    const { finalKeyframe: o, generator: s, mirroredGenerator: i, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: c, totalDuration: u, resolvedDuration: d } = r;
    if (this.startTime === null)
      return s.next(0);
    const { delay: f, repeat: g, repeatType: w, repeatDelay: v, onUpdate: S } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const m = this.currentTime - f * (this.speed >= 0 ? 1 : -1), h = this.speed >= 0 ? m < 0 : m > u;
    this.currentTime = Math.max(m, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = u);
    let y = this.currentTime, b = s;
    if (g) {
      const T = Math.min(this.currentTime, u) / d;
      let j = Math.floor(T), M = T % 1;
      !M && T >= 1 && (M = 1), M === 1 && j--, j = Math.min(j, g + 1), !!(j % 2) && (w === "reverse" ? (M = 1 - M, v && (M -= v / d)) : w === "mirror" && (b = i)), y = fn(0, 1, M) * d;
    }
    const C = h ? { done: !1, value: l[0] } : b.next(y);
    a && (C.value = a(C.value));
    let { done: k } = C;
    !h && c !== null && (k = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && k);
    return E && o !== void 0 && (C.value = ol(l, this.options, o)), S && S(C.value), E && this.finish(), C;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? /* @__PURE__ */ on(t.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ on(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ rn(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ on(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = jN, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), n && n();
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
const _N = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function IN(e, t, n, { delay: r = 0, duration: o = 300, repeat: s = 0, repeatType: i = "loop", ease: a = "easeInOut", times: l } = {}) {
  const c = { [t]: n };
  l && (c.offset = l);
  const u = Px(a, o);
  return Array.isArray(u) && (c.easing = u), e.animate(c, {
    delay: r,
    duration: o,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const ON = /* @__PURE__ */ $d(() => Object.hasOwnProperty.call(Element.prototype, "animate")), ka = 10, FN = 2e4;
function VN(e) {
  return rf(e.type) || e.type === "spring" || !Tx(e.ease);
}
function zN(e, t) {
  const n = new vf({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let s = 0;
  for (; !r.done && s < FN; )
    r = n.sample(s), o.push(r.value), s += ka;
  return {
    times: void 0,
    keyframes: o,
    duration: s - ka,
    ease: "linear"
  };
}
const lw = {
  anticipate: Vx,
  backInOut: Fx,
  circInOut: Bx
};
function BN(e) {
  return e in lw;
}
class Fh extends nw {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options;
    this.resolver = new tw(s, (i, a) => this.onKeyframesResolved(i, a), n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: r = 300, times: o, ease: s, type: i, motionValue: a, name: l, startTime: c } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof s == "string" && Sa() && BN(s) && (s = lw[s]), VN(this.options)) {
      const { onComplete: d, onUpdate: f, motionValue: g, element: w, ...v } = this.options, S = zN(t, v);
      t = S.keyframes, t.length === 1 && (t[1] = t[0]), r = S.duration, o = S.times, s = S.ease, i = "keyframes";
    }
    const u = IN(a.owner.current, l, t, { ...this.options, duration: r, times: o, ease: s });
    return u.startTime = c ?? this.calcStartTime(), this.pendingTimeline ? (bh(u, this.pendingTimeline), this.pendingTimeline = void 0) : u.onfinish = () => {
      const { onComplete: d } = this.options;
      a.set(ol(t, this.options, n)), d && d(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: u,
      duration: r,
      times: o,
      type: i,
      ease: s,
      keyframes: t
    };
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: n } = t;
    return /* @__PURE__ */ on(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return /* @__PURE__ */ on(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = /* @__PURE__ */ rn(t);
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
        return ut;
      const { animation: r } = n;
      bh(r, t);
    }
    return ut;
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
    const { animation: n, keyframes: r, duration: o, type: s, ease: i, times: a } = t;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: c, onUpdate: u, onComplete: d, element: f, ...g } = this.options, w = new vf({
        ...g,
        keyframes: r,
        duration: o,
        type: s,
        ease: i,
        times: a,
        isGenerator: !0
      }), v = /* @__PURE__ */ rn(this.time);
      c.setWithVelocity(w.sample(v - ka).value, w.sample(v).value, ka);
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
    const { motionValue: n, name: r, repeatDelay: o, repeatType: s, damping: i, type: a } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
      return !1;
    const { onUpdate: l, transformTemplate: c } = n.owner.getProps();
    return ON() && r && _N.has(r) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !c && !o && s !== "mirror" && i !== 0 && a !== "inertia";
  }
}
const $N = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, UN = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), WN = {
  type: "keyframes",
  duration: 0.8
}, HN = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, KN = (e, { keyframes: t }) => t.length > 2 ? WN : Sr.has(e) ? e.startsWith("scale") ? UN(t[1]) : $N : HN;
function GN({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: a, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
const yf = (e, t, n, r = {}, o, s) => (i) => {
  const a = nf(r, e) || {}, l = a.delay || r.delay || 0;
  let { elapsed: c = 0 } = r;
  c = c - /* @__PURE__ */ rn(l);
  let u = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -c,
    onUpdate: (f) => {
      t.set(f), a.onUpdate && a.onUpdate(f);
    },
    onComplete: () => {
      i(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: s ? void 0 : o
  };
  GN(a) || (u = {
    ...u,
    ...KN(e, u)
  }), u.duration && (u.duration = /* @__PURE__ */ rn(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ rn(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let d = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (d = !0)), d && !s && t.get() !== void 0) {
    const f = ol(u.keyframes, a);
    if (f !== void 0)
      return de.update(() => {
        u.onUpdate(f), u.onComplete();
      }), new fD([]);
  }
  return !s && Fh.supports(u) ? new Fh(u) : new vf(u);
};
function YN({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function cw(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var s;
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (i = r);
  const c = [], u = o && e.animationState && e.animationState.getState()[o];
  for (const d in l) {
    const f = e.getValue(d, (s = e.latestValues[d]) !== null && s !== void 0 ? s : null), g = l[d];
    if (g === void 0 || u && YN(u, d))
      continue;
    const w = {
      delay: n,
      ...nf(i || {}, d)
    };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const m = Rx(e);
      if (m) {
        const h = window.MotionHandoffAnimation(m, d, de);
        h !== null && (w.startTime = h, v = !0);
      }
    }
    cu(e, d), f.start(yf(d, f, g, e.shouldReduceMotion && Ax.has(d) ? { type: !1 } : w, e, v));
    const S = f.animation;
    S && c.push(S);
  }
  return a && Promise.all(c).then(() => {
    de.update(() => {
      a && TD(e, a);
    });
  }), c;
}
function gu(e, t, n = {}) {
  var r;
  const o = rl(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = o ? () => Promise.all(cw(e, o, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: u = 0, staggerChildren: d, staggerDirection: f } = s;
    return XN(e, t, u + c, d, f, n);
  } : () => Promise.resolve(), { when: l } = s;
  if (l) {
    const [c, u] = l === "beforeChildren" ? [i, a] : [a, i];
    return c().then(() => u());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function XN(e, t, n = 0, r = 0, o = 1, s) {
  const i = [], a = (e.variantChildren.size - 1) * r, l = o === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return Array.from(e.variantChildren).sort(QN).forEach((c, u) => {
    c.notify("AnimationStart", t), i.push(gu(c, t, {
      ...s,
      delay: n + l(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function QN(e, t) {
  return e.sortNodePosition(t);
}
function qN(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((s) => gu(e, s, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = gu(e, t, n);
  else {
    const o = typeof t == "function" ? rl(e, t, n.custom) : t;
    r = Promise.all(cw(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const ZN = Wd.length;
function uw(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? uw(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < ZN; n++) {
    const r = Wd[n], o = e.props[r];
    (Ts(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const JN = [...Ud].reverse(), eM = Ud.length;
function tM(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => qN(e, n, r)));
}
function nM(e) {
  let t = tM(e), n = Vh(), r = !0;
  const o = (l) => (c, u) => {
    var d;
    const f = rl(e, u, l === "exit" ? (d = e.presenceContext) === null || d === void 0 ? void 0 : d.custom : void 0);
    if (f) {
      const { transition: g, transitionEnd: w, ...v } = f;
      c = { ...c, ...v, ...w };
    }
    return c;
  };
  function s(l) {
    t = l(e);
  }
  function i(l) {
    const { props: c } = e, u = uw(e.parent) || {}, d = [], f = /* @__PURE__ */ new Set();
    let g = {}, w = 1 / 0;
    for (let S = 0; S < eM; S++) {
      const m = JN[S], h = n[m], y = c[m] !== void 0 ? c[m] : u[m], b = Ts(y), C = m === l ? h.isActive : null;
      C === !1 && (w = S);
      let k = y === u[m] && y !== c[m] && b;
      if (k && r && e.manuallyAnimateOnMount && (k = !1), h.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !h.isActive && C === null || // If we didn't and don't have any defined prop for this animation type
      !y && !h.prevProp || // Or if the prop doesn't define an animation
      tl(y) || typeof y == "boolean")
        continue;
      const E = rM(h.prevProp, y);
      let T = E || // If we're making this variant active, we want to always make it active
      m === l && h.isActive && !k && b || // If we removed a higher-priority variant (i is in reverse order)
      S > w && b, j = !1;
      const M = Array.isArray(y) ? y : [y];
      let D = M.reduce(o(m), {});
      C === !1 && (D = {});
      const { prevResolvedValues: N = {} } = h, F = {
        ...N,
        ...D
      }, U = (z) => {
        T = !0, f.has(z) && (j = !0, f.delete(z)), h.needsAnimating[z] = !0;
        const P = e.getValue(z);
        P && (P.liveStyle = !1);
      };
      for (const z in F) {
        const P = D[z], L = N[z];
        if (g.hasOwnProperty(z))
          continue;
        let $ = !1;
        iu(P) && iu(L) ? $ = !Cx(P, L) : $ = P !== L, $ ? P != null ? U(z) : f.add(z) : P !== void 0 && f.has(z) ? U(z) : h.protectedKeys[z] = !0;
      }
      h.prevProp = y, h.prevResolvedValues = D, h.isActive && (g = { ...g, ...D }), r && e.blockInitialAnimation && (T = !1), T && (!(k && E) || j) && d.push(...M.map((z) => ({
        animation: z,
        options: { type: m }
      })));
    }
    if (f.size) {
      const S = {};
      f.forEach((m) => {
        const h = e.getBaseTarget(m), y = e.getValue(m);
        y && (y.liveStyle = !0), S[m] = h ?? null;
      }), d.push({ animation: S });
    }
    let v = !!d.length;
    return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (v = !1), r = !1, v ? t(d) : Promise.resolve();
  }
  function a(l, c) {
    var u;
    if (n[l].isActive === c)
      return Promise.resolve();
    (u = e.variantChildren) === null || u === void 0 || u.forEach((f) => {
      var g;
      return (g = f.animationState) === null || g === void 0 ? void 0 : g.setActive(l, c);
    }), n[l].isActive = c;
    const d = i(l);
    for (const f in n)
      n[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: i,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      n = Vh(), r = !0;
    }
  };
}
function rM(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Cx(t, e) : !1;
}
function Zn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Vh() {
  return {
    animate: Zn(!0),
    whileInView: Zn(),
    whileHover: Zn(),
    whileTap: Zn(),
    whileDrag: Zn(),
    whileFocus: Zn(),
    exit: Zn()
  };
}
class Qn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class oM extends Qn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = nM(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    tl(t) && (this.unmountControls = t.subscribe(this.node));
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
let sM = 0;
class iM extends Qn {
  constructor() {
    super(...arguments), this.id = sM++;
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
const aM = {
  animation: {
    Feature: oM
  },
  exit: {
    Feature: iM
  }
};
function Ms(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Us(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const lM = (e) => (t) => sf(t) && e(t, Us(t));
function ts(e, t, n, r) {
  return Ms(e, t, lM(n), r);
}
const zh = (e, t) => Math.abs(e - t);
function cM(e, t) {
  const n = zh(e.x, t.x), r = zh(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class dw {
  constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: s = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const d = Xl(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, g = cM(d.offset, { x: 0, y: 0 }) >= 3;
      if (!f && !g)
        return;
      const { point: w } = d, { timestamp: v } = Oe;
      this.history.push({ ...w, timestamp: v });
      const { onStart: S, onMove: m } = this.handlers;
      f || (S && S(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), m && m(this.lastMoveEvent, d);
    }, this.handlePointerMove = (d, f) => {
      this.lastMoveEvent = d, this.lastMoveEventInfo = Yl(f, this.transformPagePoint), de.update(this.updatePoint, !0);
    }, this.handlePointerUp = (d, f) => {
      this.end();
      const { onEnd: g, onSessionEnd: w, resumeAnimation: v } = this.handlers;
      if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const S = Xl(d.type === "pointercancel" ? this.lastMoveEventInfo : Yl(f, this.transformPagePoint), this.history);
      this.startEvent && g && g(d, S), w && w(d, S);
    }, !sf(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = Us(t), a = Yl(i, this.transformPagePoint), { point: l } = a, { timestamp: c } = Oe;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = n;
    u && u(t, Xl(a, this.history)), this.removeListeners = $s(ts(this.contextWindow, "pointermove", this.handlePointerMove), ts(this.contextWindow, "pointerup", this.handlePointerUp), ts(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), $n(this.updatePoint);
  }
}
function Yl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Bh(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Xl({ point: e }, t) {
  return {
    point: e,
    delta: Bh(e, fw(t)),
    offset: Bh(e, uM(t)),
    velocity: dM(t, 0.1)
  };
}
function uM(e) {
  return e[0];
}
function fw(e) {
  return e[e.length - 1];
}
function dM(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = fw(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > /* @__PURE__ */ rn(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = /* @__PURE__ */ on(o.timestamp - r.timestamp);
  if (s === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - r.x) / s,
    y: (o.y - r.y) / s
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
const pw = 1e-4, fM = 1 - pw, pM = 1 + pw, hw = 0.01, hM = 0 - hw, mM = 0 + hw;
function ft(e) {
  return e.max - e.min;
}
function gM(e, t, n) {
  return Math.abs(e - t) <= n;
}
function $h(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = ge(t.min, t.max, e.origin), e.scale = ft(n) / ft(t), e.translate = ge(n.min, n.max, e.origin) - e.originPoint, (e.scale >= fM && e.scale <= pM || isNaN(e.scale)) && (e.scale = 1), (e.translate >= hM && e.translate <= mM || isNaN(e.translate)) && (e.translate = 0);
}
function ns(e, t, n, r) {
  $h(e.x, t.x, n.x, r ? r.originX : void 0), $h(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Uh(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + ft(t);
}
function vM(e, t, n) {
  Uh(e.x, t.x, n.x), Uh(e.y, t.y, n.y);
}
function Wh(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + ft(t);
}
function rs(e, t, n) {
  Wh(e.x, t.x, n.x), Wh(e.y, t.y, n.y);
}
function yM(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? ge(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ge(n, e, r.max) : Math.min(e, n)), e;
}
function Hh(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function xM(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Hh(e.x, n, o),
    y: Hh(e.y, t, r)
  };
}
function Kh(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function wM(e, t) {
  return {
    x: Kh(e.x, t.x),
    y: Kh(e.y, t.y)
  };
}
function SM(e, t) {
  let n = 0.5;
  const r = ft(e), o = ft(t);
  return o > r ? n = /* @__PURE__ */ fo(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ fo(e.min, e.max - o, t.min)), fn(0, 1, n);
}
function bM(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const vu = 0.35;
function CM(e = vu) {
  return e === !1 ? e = 0 : e === !0 && (e = vu), {
    x: Gh(e, "left", "right"),
    y: Gh(e, "top", "bottom")
  };
}
function Gh(e, t, n) {
  return {
    min: Yh(e, t),
    max: Yh(e, n)
  };
}
function Yh(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Xh = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Ur = () => ({
  x: Xh(),
  y: Xh()
}), Qh = () => ({ min: 0, max: 0 }), ke = () => ({
  x: Qh(),
  y: Qh()
});
function gt(e) {
  return [e("x"), e("y")];
}
function mw({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function kM({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function EM(e, t) {
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
function Ql(e) {
  return e === void 0 || e === 1;
}
function yu({ scale: e, scaleX: t, scaleY: n }) {
  return !Ql(e) || !Ql(t) || !Ql(n);
}
function tr(e) {
  return yu(e) || gw(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function gw(e) {
  return qh(e.x) || qh(e.y);
}
function qh(e) {
  return e && e !== "0%";
}
function Ea(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Zh(e, t, n, r, o) {
  return o !== void 0 && (e = Ea(e, o, r)), Ea(e, n, r) + t;
}
function xu(e, t = 0, n = 1, r, o) {
  e.min = Zh(e.min, t, n, r, o), e.max = Zh(e.max, t, n, r, o);
}
function vw(e, { x: t, y: n }) {
  xu(e.x, t.translate, t.scale, t.originPoint), xu(e.y, n.translate, n.scale, n.originPoint);
}
const Jh = 0.999999999999, em = 1.0000000000001;
function TM(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let s, i;
  for (let a = 0; a < o; a++) {
    s = n[a], i = s.projectionDelta;
    const { visualElement: l } = s.options;
    l && l.props.style && l.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Hr(e, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, vw(e, i)), r && tr(s.latestValues) && Hr(e, s.latestValues));
  }
  t.x < em && t.x > Jh && (t.x = 1), t.y < em && t.y > Jh && (t.y = 1);
}
function Wr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function tm(e, t, n, r, o = 0.5) {
  const s = ge(e.min, e.max, o);
  xu(e, t, n, s, r);
}
function Hr(e, t) {
  tm(e.x, t.x, t.scaleX, t.scale, t.originX), tm(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function yw(e, t) {
  return mw(EM(e.getBoundingClientRect(), t));
}
function PM(e, t, n) {
  const r = yw(e, n), { scroll: o } = t;
  return o && (Wr(r.x, o.offset.x), Wr(r.y, o.offset.y)), r;
}
const xw = ({ current: e }) => e ? e.ownerDocument.defaultView : null, DM = /* @__PURE__ */ new WeakMap();
class NM {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ke(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (u) => {
      const { dragSnapToOrigin: d } = this.getProps();
      d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Us(u).point);
    }, s = (u, d) => {
      const { drag: f, dragPropagation: g, onDragStart: w } = this.getProps();
      if (f && !g && (this.openDragLock && this.openDragLock(), this.openDragLock = SD(f), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), gt((S) => {
        let m = this.getAxisMotionValue(S).get() || 0;
        if (Ut.test(m)) {
          const { projection: h } = this.visualElement;
          if (h && h.layout) {
            const y = h.layout.layoutBox[S];
            y && (m = ft(y) * (parseFloat(m) / 100));
          }
        }
        this.originPoint[S] = m;
      }), w && de.postRender(() => w(u, d)), cu(this.visualElement, "transform");
      const { animationState: v } = this.visualElement;
      v && v.setActive("whileDrag", !0);
    }, i = (u, d) => {
      const { dragPropagation: f, dragDirectionLock: g, onDirectionLock: w, onDrag: v } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: S } = d;
      if (g && this.currentDirection === null) {
        this.currentDirection = MM(S), this.currentDirection !== null && w && w(this.currentDirection);
        return;
      }
      this.updateAxis("x", d.point, S), this.updateAxis("y", d.point, S), this.visualElement.render(), v && v(u, d);
    }, a = (u, d) => this.stop(u, d), l = () => gt((u) => {
      var d;
      return this.getAnimationState(u) === "paused" && ((d = this.getAxisMotionValue(u).animation) === null || d === void 0 ? void 0 : d.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new dw(t, {
      onSessionStart: o,
      onStart: s,
      onMove: i,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      contextWindow: xw(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: s } = this.getProps();
    s && de.postRender(() => s(t, n));
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
    if (!r || !Si(t, o, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (i = yM(i, this.constraints[t], this.elastic[t])), s.set(i);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, s = this.constraints;
    n && Br(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = xM(o.layoutBox, n) : this.constraints = !1, this.elastic = CM(r), s !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && gt((i) => {
      this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = bM(o.layoutBox[i], this.constraints[i]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Br(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const s = PM(r, o.root, this.visualElement.getTransformPagePoint());
    let i = wM(o.layout.layoutBox, s);
    if (n) {
      const a = n(kM(i));
      this.hasMutatedConstraints = !!a, a && (i = mw(a));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = gt((u) => {
      if (!Si(u, n, this.currentDirection))
        return;
      let d = l && l[u] || {};
      i && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, g = o ? 40 : 1e7, w = {
        type: "inertia",
        velocity: r ? t[u] : 0,
        bounceStiffness: f,
        bounceDamping: g,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...d
      };
      return this.startAxisValueAnimation(u, w);
    });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return cu(this.visualElement, t), r.start(yf(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    gt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    gt((t) => {
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
    gt((n) => {
      const { drag: r } = this.getProps();
      if (!Si(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, s = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: i, max: a } = o.layout.layoutBox[n];
        s.set(t[n] - ge(i, a, 0.5));
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
    if (!Br(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    gt((i) => {
      const a = this.getAxisMotionValue(i);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[i] = SM({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), gt((i) => {
      if (!Si(i, t, null))
        return;
      const a = this.getAxisMotionValue(i), { min: l, max: c } = this.constraints[i];
      a.set(ge(l, c, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    DM.set(this.visualElement, this);
    const t = this.visualElement.current, n = ts(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Br(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, s = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), de.read(r);
    const i = Ms(window, "resize", () => this.scalePositionWithinConstraints()), a = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (gt((u) => {
        const d = this.getAxisMotionValue(u);
        d && (this.originPoint[u] += l[u].translate, d.set(d.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      i(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: s = !1, dragElastic: i = vu, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: s,
      dragElastic: i,
      dragMomentum: a
    };
  }
}
function Si(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function MM(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class AM extends Qn {
  constructor(t) {
    super(t), this.removeGroupControls = ut, this.removeListeners = ut, this.controls = new NM(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ut;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const nm = (e) => (t, n) => {
  e && de.postRender(() => e(t, n));
};
class jM extends Qn {
  constructor() {
    super(...arguments), this.removePointerDownListener = ut;
  }
  onPointerDown(t) {
    this.session = new dw(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: xw(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: nm(t),
      onStart: nm(n),
      onMove: r,
      onEnd: (s, i) => {
        delete this.session, o && de.postRender(() => o(s, i));
      }
    };
  }
  mount() {
    this.removePointerDownListener = ts(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const $i = {
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
function rm(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Io = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (K.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = rm(e, t.target.x), r = rm(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, RM = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = Un.parse(e);
    if (o.length > 5)
      return r;
    const s = Un.createTransformer(e), i = typeof o[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + i] /= a, o[1 + i] /= l;
    const c = ge(a, l, 0.5);
    return typeof o[2 + i] == "number" && (o[2 + i] /= c), typeof o[3 + i] == "number" && (o[3 + i] /= c), s(o);
  }
};
class LM extends x.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: s } = t;
    eD(_M), s && (n.group && n.group.add(s), r && r.register && o && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), $i.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: s } = this.props, i = r.projection;
    return i && (i.isPresent = s, o || t.layoutDependency !== n || n === void 0 ? i.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? i.promote() : i.relegate() || de.postRender(() => {
      const a = i.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Kd.postRender(() => {
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
function ww(e) {
  const [t, n] = nx(), r = x.useContext(Fd);
  return p.jsx(LM, { ...e, layoutGroup: r, switchLayoutGroup: x.useContext(ux), isPresent: t, safeToRemove: n });
}
const _M = {
  borderRadius: {
    ...Io,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Io,
  borderTopRightRadius: Io,
  borderBottomLeftRadius: Io,
  borderBottomRightRadius: Io,
  boxShadow: RM
};
function IM(e, t, n) {
  const r = Ke(e) ? e : Ds(e);
  return r.start(yf("", r, t, n)), r.animation;
}
function OM(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const FM = (e, t) => e.depth - t.depth;
class VM {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    af(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    lf(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(FM), this.isDirty = !1, this.children.forEach(t);
  }
}
function zM(e, t) {
  const n = Wt.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= t && ($n(r), e(s - t));
  };
  return de.read(r, !0), () => $n(r);
}
const Sw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], BM = Sw.length, om = (e) => typeof e == "string" ? parseFloat(e) : e, sm = (e) => typeof e == "number" || K.test(e);
function $M(e, t, n, r, o, s) {
  o ? (e.opacity = ge(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    UM(r)
  ), e.opacityExit = ge(t.opacity !== void 0 ? t.opacity : 1, 0, WM(r))) : s && (e.opacity = ge(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < BM; i++) {
    const a = `border${Sw[i]}Radius`;
    let l = im(t, a), c = im(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || sm(l) === sm(c) ? (e[a] = Math.max(ge(om(l), om(c), r), 0), (Ut.test(c) || Ut.test(l)) && (e[a] += "%")) : e[a] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = ge(t.rotate || 0, n.rotate || 0, r));
}
function im(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const UM = /* @__PURE__ */ bw(0, 0.5, zx), WM = /* @__PURE__ */ bw(0.5, 0.95, ut);
function bw(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ fo(e, t, r));
}
function am(e, t) {
  e.min = t.min, e.max = t.max;
}
function mt(e, t) {
  am(e.x, t.x), am(e.y, t.y);
}
function lm(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function cm(e, t, n, r, o) {
  return e -= t, e = Ea(e, 1 / n, r), o !== void 0 && (e = Ea(e, 1 / o, r)), e;
}
function HM(e, t = 0, n = 1, r = 0.5, o, s = e, i = e) {
  if (Ut.test(t) && (t = parseFloat(t), t = ge(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let a = ge(s.min, s.max, r);
  e === s && (a -= t), e.min = cm(e.min, t, n, a, o), e.max = cm(e.max, t, n, a, o);
}
function um(e, t, [n, r, o], s, i) {
  HM(e, t[n], t[r], t[o], t.scale, s, i);
}
const KM = ["x", "scaleX", "originX"], GM = ["y", "scaleY", "originY"];
function dm(e, t, n, r) {
  um(e.x, t, KM, n ? n.x : void 0, r ? r.x : void 0), um(e.y, t, GM, n ? n.y : void 0, r ? r.y : void 0);
}
function fm(e) {
  return e.translate === 0 && e.scale === 1;
}
function Cw(e) {
  return fm(e.x) && fm(e.y);
}
function pm(e, t) {
  return e.min === t.min && e.max === t.max;
}
function YM(e, t) {
  return pm(e.x, t.x) && pm(e.y, t.y);
}
function hm(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function kw(e, t) {
  return hm(e.x, t.x) && hm(e.y, t.y);
}
function mm(e) {
  return ft(e.x) / ft(e.y);
}
function gm(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class XM {
  constructor() {
    this.members = [];
  }
  add(t) {
    af(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (lf(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
      const s = this.members[o];
      if (s.isPresent !== !1) {
        r = s;
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
function QM(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, s = e.y.translate / t.y, i = (n == null ? void 0 : n.z) || 0;
  if ((o || s || i) && (r = `translate3d(${o}px, ${s}px, ${i}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: c, rotate: u, rotateX: d, rotateY: f, skewX: g, skewY: w } = n;
    c && (r = `perspective(${c}px) ${r}`), u && (r += `rotate(${u}deg) `), d && (r += `rotateX(${d}deg) `), f && (r += `rotateY(${f}deg) `), g && (r += `skewX(${g}deg) `), w && (r += `skewY(${w}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const nr = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, Wo = typeof window < "u" && window.MotionDebug !== void 0, ql = ["", "X", "Y", "Z"], qM = { visibility: "hidden" }, vm = 1e3;
let ZM = 0;
function Zl(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Ew(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Rx(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", de, !(o || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Ew(r);
}
function Tw({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(i = {}, a = t == null ? void 0 : t()) {
      this.id = ZM++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Wo && (nr.totalNodes = nr.resolvedTargetDeltas = nr.recalculatedProjection = 0), this.nodes.forEach(t2), this.nodes.forEach(i2), this.nodes.forEach(a2), this.nodes.forEach(n2), Wo && window.MotionDebug.record(nr);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new VM());
    }
    addEventListener(i, a) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new cf()), this.eventHandlers.get(i).add(a);
    }
    notifyListeners(i, ...a) {
      const l = this.eventHandlers.get(i);
      l && l.notify(...a);
    }
    hasListeners(i) {
      return this.eventHandlers.has(i);
    }
    /**
     * Lifecycles
     */
    mount(i, a = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = OM(i), this.instance = i;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = zM(f, 250), $i.hasAnimatedSinceResize && ($i.hasAnimatedSinceResize = !1, this.nodes.forEach(xm));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: g, layout: w }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const v = this.options.transition || u.getDefaultTransition() || f2, { onLayoutAnimationStart: S, onLayoutAnimationComplete: m } = u.getProps(), h = !this.targetLayout || !kw(this.targetLayout, w) || g, y = !f && g;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || y || f && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, y);
          const b = {
            ...nf(v, "layout"),
            onPlay: S,
            onComplete: m
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (b.delay = 0, b.type = !1), this.startAnimation(b);
        } else
          f || xm(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = w;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, $n(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(l2), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: i } = this.options;
      return i && i.getProps().transformTemplate;
    }
    willUpdate(i = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ew(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), i && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ym);
        return;
      }
      this.isUpdating || this.nodes.forEach(o2), this.isUpdating = !1, this.nodes.forEach(s2), this.nodes.forEach(JM), this.nodes.forEach(e2), this.clearAllSnapshots();
      const a = Wt.now();
      Oe.delta = fn(0, 1e3 / 60, a - Oe.timestamp), Oe.timestamp = a, Oe.isProcessing = !0, $l.update.process(Oe), $l.preRender.process(Oe), $l.render.process(Oe), Oe.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Kd.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(r2), this.sharedNodes.forEach(c2);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, de.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      de.postRender(() => {
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
      const i = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = ke(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, i ? i.layoutBox : void 0);
    }
    updateScroll(i = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === i && (a = !1), a) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: i,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!o)
        return;
      const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Cw(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      i && (a || tr(this.latestValues) || u) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return i && (l = this.removeTransform(l)), p2(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var i;
      const { visualElement: a } = this.options;
      if (!a)
        return ke();
      const l = a.measureViewportBox();
      if (!(((i = this.scroll) === null || i === void 0 ? void 0 : i.wasRoot) || this.path.some(h2))) {
        const { scroll: u } = this.root;
        u && (Wr(l.x, u.offset.x), Wr(l.y, u.offset.y));
      }
      return l;
    }
    removeElementScroll(i) {
      var a;
      const l = ke();
      if (mt(l, i), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c], { scroll: d, options: f } = u;
        u !== this.root && d && f.layoutScroll && (d.wasRoot && mt(l, i), Wr(l.x, d.offset.x), Wr(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(i, a = !1) {
      const l = ke();
      mt(l, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a && u.options.layoutScroll && u.scroll && u !== u.root && Hr(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), tr(u.latestValues) && Hr(l, u.latestValues);
      }
      return tr(this.latestValues) && Hr(l, this.latestValues), l;
    }
    removeTransform(i) {
      const a = ke();
      mt(a, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !tr(c.latestValues))
          continue;
        yu(c.latestValues) && c.updateSnapshot();
        const u = ke(), d = c.measurePageBox();
        mt(u, d), dm(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return tr(this.latestValues) && dm(a, this.latestValues), a;
    }
    setTargetDelta(i) {
      this.targetDelta = i, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(i) {
      this.options = {
        ...this.options,
        ...i,
        crossfade: i.crossfade !== void 0 ? i.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Oe.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(i = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (!(i || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (this.resolvedRelativeTargetAt = Oe.timestamp, !this.targetDelta && !this.relativeTarget) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ke(), this.relativeTargetOrigin = ke(), rs(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox), mt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = ke(), this.targetWithTransforms = ke()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), vM(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : mt(this.target, this.layout.layoutBox), vw(this.target, this.targetDelta)) : mt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ke(), this.relativeTargetOrigin = ke(), rs(this.relativeTargetOrigin, this.target, g.target), mt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Wo && nr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || yu(this.parent.latestValues) || gw(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var i;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let c = !0;
      if ((this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === Oe.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || d))
        return;
      mt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, g = this.treeScale.y;
      TM(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = ke());
      const { target: w } = a;
      if (!w) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (lm(this.prevProjectionDelta.x, this.projectionDelta.x), lm(this.prevProjectionDelta.y, this.projectionDelta.y)), ns(this.projectionDelta, this.layoutCorrected, w, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== g || !gm(this.projectionDelta.x, this.prevProjectionDelta.x) || !gm(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", w)), Wo && nr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(i = !0) {
      var a;
      if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), i) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Ur(), this.projectionDelta = Ur(), this.projectionDeltaWithTransform = Ur();
    }
    setAnimationOrigin(i, a = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, d = Ur();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = ke(), g = l ? l.source : void 0, w = this.layout ? this.layout.source : void 0, v = g !== w, S = this.getStack(), m = !S || S.members.length <= 1, h = !!(v && !m && this.options.crossfade === !0 && !this.path.some(d2));
      this.animationProgress = 0;
      let y;
      this.mixTargetDelta = (b) => {
        const C = b / 1e3;
        wm(d.x, i.x, C), wm(d.y, i.y, C), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (rs(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), u2(this.relativeTarget, this.relativeTargetOrigin, f, C), y && YM(this.relativeTarget, y) && (this.isProjectionDirty = !1), y || (y = ke()), mt(y, this.relativeTarget)), v && (this.animationValues = u, $M(u, c, this.latestValues, C, h, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ($n(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = de.update(() => {
        $i.hasAnimatedSinceResize = !0, this.currentAnimation = IM(0, vm, {
          ...i,
          onUpdate: (a) => {
            this.mixTargetDelta(a), i.onUpdate && i.onUpdate(a);
          },
          onComplete: () => {
            i.onComplete && i.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const i = this.getStack();
      i && i.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(vm), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = i;
      if (!(!a || !l || !c)) {
        if (this !== i && this.layout && c && Pw(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || ke();
          const d = ft(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + d;
          const f = ft(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + f;
        }
        mt(a, l), Hr(a, u), ns(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(i, a) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new XM()), this.sharedNodes.get(i).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const i = this.getStack();
      return i ? i.lead === this : !0;
    }
    getLead() {
      var i;
      const { layoutId: a } = this.options;
      return a ? ((i = this.getStack()) === null || i === void 0 ? void 0 : i.lead) || this : this;
    }
    getPrevLead() {
      var i;
      const { layoutId: a } = this.options;
      return a ? (i = this.getStack()) === null || i === void 0 ? void 0 : i.prevLead : void 0;
    }
    getStack() {
      const { layoutId: i } = this.options;
      if (i)
        return this.root.sharedNodes.get(i);
    }
    promote({ needsReset: i, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), i && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const i = this.getStack();
      return i ? i.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: i } = this.options;
      if (!i)
        return;
      let a = !1;
      const { latestValues: l } = i;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const c = {};
      l.z && Zl("z", i, c, this.animationValues);
      for (let u = 0; u < ql.length; u++)
        Zl(`rotate${ql[u]}`, i, c, this.animationValues), Zl(`skew${ql[u]}`, i, c, this.animationValues);
      i.render();
      for (const u in c)
        i.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]);
      i.scheduleRender();
    }
    getProjectionStyles(i) {
      var a, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return qM;
      const c = {
        visibility: ""
      }, u = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = zi(i == null ? void 0 : i.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const v = {};
        return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = zi(i == null ? void 0 : i.pointerEvents) || ""), this.hasProjected && !tr(this.latestValues) && (v.transform = u ? u({}, "") : "none", this.hasProjected = !1), v;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), c.transform = QM(this.projectionDeltaWithTransform, this.treeScale, f), u && (c.transform = u(f, c.transform));
      const { x: g, y: w } = this.projectionDelta;
      c.transformOrigin = `${g.origin * 100}% ${w.origin * 100}% 0`, d.animationValues ? c.opacity = d === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : c.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const v in wa) {
        if (f[v] === void 0)
          continue;
        const { correct: S, applyTo: m } = wa[v], h = c.transform === "none" ? f[v] : S(f[v], d);
        if (m) {
          const y = m.length;
          for (let b = 0; b < y; b++)
            c[m[b]] = h;
        } else
          c[v] = h;
      }
      return this.options.layoutId && (c.pointerEvents = d === this ? zi(i == null ? void 0 : i.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var a;
        return (a = i.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(ym), this.root.sharedNodes.clear();
    }
  };
}
function JM(e) {
  e.updateLayout();
}
function e2(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: s } = e.options, i = n.source !== e.layout.source;
    s === "size" ? gt((d) => {
      const f = i ? n.measuredBox[d] : n.layoutBox[d], g = ft(f);
      f.min = r[d].min, f.max = f.min + g;
    }) : Pw(s, n.layoutBox, r) && gt((d) => {
      const f = i ? n.measuredBox[d] : n.layoutBox[d], g = ft(r[d]);
      f.max = f.min + g, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + g);
    });
    const a = Ur();
    ns(a, r, n.layoutBox);
    const l = Ur();
    i ? ns(l, e.applyTransform(o, !0), n.measuredBox) : ns(l, r, n.layoutBox);
    const c = !Cw(a);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: g } = d;
        if (f && g) {
          const w = ke();
          rs(w, n.layoutBox, f.layoutBox);
          const v = ke();
          rs(v, r, g.layoutBox), kw(w, v) || (u = !0), d.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = w, e.relativeParent = d);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function t2(e) {
  Wo && nr.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function n2(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function r2(e) {
  e.clearSnapshot();
}
function ym(e) {
  e.clearMeasurements();
}
function o2(e) {
  e.isLayoutDirty = !1;
}
function s2(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function xm(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function i2(e) {
  e.resolveTargetDelta();
}
function a2(e) {
  e.calcProjection();
}
function l2(e) {
  e.resetSkewAndRotation();
}
function c2(e) {
  e.removeLeadSnapshot();
}
function wm(e, t, n) {
  e.translate = ge(t.translate, 0, n), e.scale = ge(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Sm(e, t, n, r) {
  e.min = ge(t.min, n.min, r), e.max = ge(t.max, n.max, r);
}
function u2(e, t, n, r) {
  Sm(e.x, t.x, n.x, r), Sm(e.y, t.y, n.y, r);
}
function d2(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const f2 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, bm = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Cm = bm("applewebkit/") && !bm("chrome/") ? Math.round : ut;
function km(e) {
  e.min = Cm(e.min), e.max = Cm(e.max);
}
function p2(e) {
  km(e.x), km(e.y);
}
function Pw(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !gM(mm(t), mm(n), 0.2);
}
function h2(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const m2 = Tw({
  attachResizeListener: (e, t) => Ms(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Jl = {
  current: void 0
}, Dw = Tw({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Jl.current) {
      const e = new m2({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Jl.current = e;
    }
    return Jl.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), g2 = {
  pan: {
    Feature: jM
  },
  drag: {
    Feature: AM,
    ProjectionNode: Dw,
    MeasureLayout: ww
  }
};
function Em(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, s = r[o];
  s && de.postRender(() => s(t, Us(t)));
}
class v2 extends Qn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = gD(t, (n) => (Em(this.node, n, "Start"), (r) => Em(this.node, r, "End"))));
  }
  unmount() {
  }
}
class y2 extends Qn {
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
    this.unmount = $s(Ms(this.node.current, "focus", () => this.onFocus()), Ms(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Tm(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n), s = r[o];
  s && de.postRender(() => s(t, Us(t)));
}
class x2 extends Qn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = wD(t, (n) => (Tm(this.node, n, "Start"), (r, { success: o }) => Tm(this.node, r, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const wu = /* @__PURE__ */ new WeakMap(), ec = /* @__PURE__ */ new WeakMap(), w2 = (e) => {
  const t = wu.get(e.target);
  t && t(e);
}, S2 = (e) => {
  e.forEach(w2);
};
function b2({ root: e, ...t }) {
  const n = e || document;
  ec.has(n) || ec.set(n, {});
  const r = ec.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(S2, { root: e, ...t })), r[o];
}
function C2(e, t, n) {
  const r = b2(t);
  return wu.set(e, n), r.observe(e), () => {
    wu.delete(e), r.unobserve(e);
  };
}
const k2 = {
  some: 0,
  all: 1
};
class E2 extends Qn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: s } = t, i = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : k2[o]
    }, a = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, s && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(), f = c ? u : d;
      f && f(l);
    };
    return C2(this.node.current, i, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(T2(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function T2({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const P2 = {
  inView: {
    Feature: E2
  },
  tap: {
    Feature: x2
  },
  focus: {
    Feature: y2
  },
  hover: {
    Feature: v2
  }
}, D2 = {
  layout: {
    ProjectionNode: Dw,
    MeasureLayout: ww
  }
}, Su = { current: null }, Nw = { current: !1 };
function N2() {
  if (Nw.current = !0, !!Bd)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Su.current = e.matches;
      e.addListener(t), t();
    } else
      Su.current = !1;
}
const M2 = [...ew, We, Un], A2 = (e) => M2.find(Jx(e)), Pm = /* @__PURE__ */ new WeakMap();
function j2(e, t, n) {
  for (const r in t) {
    const o = t[r], s = n[r];
    if (Ke(o))
      e.addValue(r, o);
    else if (Ke(s))
      e.addValue(r, Ds(o, { owner: e }));
    else if (s !== o)
      if (e.hasValue(r)) {
        const i = e.getValue(r);
        i.liveStyle === !0 ? i.jump(o) : i.hasAnimated || i.set(o);
      } else {
        const i = e.getStaticValue(r);
        e.addValue(r, Ds(i !== void 0 ? i : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const Dm = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class R2 {
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
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, blockInitialAnimation: s, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = mf, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const g = Wt.now();
      this.renderScheduledAt < g && (this.renderScheduledAt = g, de.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: c, onUpdate: u } = i;
    this.onUpdate = u, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.blockInitialAnimation = !!s, this.isControllingVariants = nl(n), this.isVariantNode = lx(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const g in f) {
      const w = f[g];
      l[g] !== void 0 && Ke(w) && w.set(l[g], !1);
    }
  }
  mount(t) {
    this.current = t, Pm.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Nw.current || N2(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Su.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Pm.delete(this.current), this.projection && this.projection.unmount(), $n(this.notifyUpdate), $n(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const r = Sr.has(t), o = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && de.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
    }), s = n.on("renderRequest", this.scheduleRender);
    let i;
    window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      o(), s(), i && i(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in po) {
      const n = po[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: o } = n;
      if (!this.features[t] && o && r(this.props) && (this.features[t] = new o(this)), this.features[t]) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), s.isMounted = !0);
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ke();
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
    for (let r = 0; r < Dm.length; r++) {
      const o = Dm[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const s = "on" + o, i = t[s];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = j2(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return r === void 0 && n !== void 0 && (r = Ds(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return o != null && (typeof o == "string" && (qx(o) || $x(o)) ? o = parseFloat(o) : !A2(o) && Un.test(n) && (o = Yx(t, n)), this.setBaseTarget(t, Ke(o) ? o.get() : o)), Ke(o) ? o.get() : o;
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
      const i = Yd(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      i && (o = i[t]);
    }
    if (r && o !== void 0)
      return o;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !Ke(s) ? s : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new cf()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Mw extends R2 {
  constructor() {
    super(...arguments), this.KeyframeResolver = tw;
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
    Ke(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function L2(e) {
  return window.getComputedStyle(e);
}
class _2 extends Mw {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = vx;
  }
  readValueFromInstance(t, n) {
    if (Sr.has(n)) {
      const r = hf(n);
      return r && r.default || 0;
    } else {
      const r = L2(t), o = (hx(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return yw(t, n);
  }
  build(t, n, r) {
    qd(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return tf(t, n, r);
  }
}
class I2 extends Mw {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ke;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Sr.has(n)) {
      const r = hf(n);
      return r && r.default || 0;
    }
    return n = yx.has(n) ? n : Hd(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Sx(t, n, r);
  }
  build(t, n, r) {
    Zd(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    xx(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = ef(t.tagName), super.mount(t);
  }
}
const O2 = (e, t) => Gd(e) ? new I2(t) : new _2(t, {
  allowProjection: e !== x.Fragment
}), F2 = /* @__PURE__ */ cD({
  ...aM,
  ...P2,
  ...g2,
  ...D2
}, O2), bi = /* @__PURE__ */ kP(F2);
function en(e = "default") {
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
function Aw(e = "default") {
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
function V2(e = "default") {
  const t = {
    default: "after:bg-gray-500",
    primary: "after:bg-purple-500",
    success: "after:bg-green-500",
    danger: "after:bg-red-500",
    warning: "after:bg-blue-500",
    orange: "after:bg-orange-500",
    cyan: "after:bg-cyan-500",
    pink: "after:bg-pink-500",
    indigo: "after:bg-indigo-500",
    yellow: "after:bg-yellow-500"
  };
  return t[e] || t.default;
}
function Wn(e, t = {}) {
  return e && t[e] ? t[e] : "default";
}
function jw(e) {
  const t = {};
  return !e || !Array.isArray(e) || e.forEach((n) => {
    n.variant && (t[n.slug] = n.variant);
  }), t;
}
function z2({
  events: e,
  eventMetadata: t,
  categoryMappings: n,
  onDateClick: r,
  onEventClick: o,
  onMonthChange: s,
  currentDate: i,
  displayMode: a = "popover",
  sidebarPosition: l = "right"
}) {
  const [c, u] = x.useState(/* @__PURE__ */ new Date()), d = i || c, [f, g] = x.useState(0), [w, v] = x.useState(null), [S, m] = x.useState(null), [h, y] = x.useState(null), b = a === "popover", C = a === "dropdown", k = a === "sidebar", E = (O, _) => {
    const W = new Date(_, O + 1, 0).getDate();
    return Array.from({ length: W }, (Z, Q) => ({ day: Q + 1 }));
  }, T = (O, _) => e.filter((Z) => {
    const Q = new Date(Z.startDate);
    return Q.getDate() === O && Q.getMonth() === _.getMonth() && Q.getFullYear() === _.getFullYear();
  }), j = (O) => O.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  });
  Y.useEffect(() => {
    if (!k || h && h.getFullYear() === d.getFullYear() && h.getMonth() === d.getMonth())
      return;
    const _ = /* @__PURE__ */ new Date();
    let W;
    if (_.getFullYear() === d.getFullYear() && _.getMonth() === d.getMonth())
      W = _.getDate();
    else {
      const Z = e.map((Q) => new Date(Q.startDate)).filter((Q) => Q.getFullYear() === d.getFullYear() && Q.getMonth() === d.getMonth()).sort((Q, pe) => Q.getTime() - pe.getTime());
      W = Z.length > 0 ? Z[0].getDate() : 1;
    }
    y(new Date(d.getFullYear(), d.getMonth(), W));
  }, [k, d, e, h]), Y.useEffect(() => {
    C || m(null);
  }, [C, d]);
  const M = () => {
    g(-1);
    const O = new Date(d.getFullYear(), d.getMonth() - 1, 1);
    i || u(O), s == null || s(O);
  }, D = () => {
    g(1);
    const O = new Date(d.getFullYear(), d.getMonth() + 1, 1);
    i || u(O), s == null || s(O);
  }, N = E(d.getMonth(), d.getFullYear()), F = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], I = new Date(d.getFullYear(), d.getMonth(), 1).getDay(), V = new Date(d.getFullYear(), d.getMonth() - 1, 1), z = new Date(V.getFullYear(), V.getMonth() + 1, 0).getDate(), P = ({ events: O }) => {
    const _ = O.reduce((W, Z) => {
      const Q = t[Z.id], pe = (Q == null ? void 0 : Q.category) || "uncategorized";
      return W[pe] || (W[pe] = []), W[pe].push(Z), W;
    }, {});
    return /* @__PURE__ */ p.jsx("div", { className: "flex flex-wrap gap-1", children: Object.entries(_).map(([W, Z]) => {
      const Q = Wn(W === "uncategorized" ? null : W, n), pe = en(Q);
      return /* @__PURE__ */ p.jsx(
        "div",
        {
          className: `${pe} text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium shadow-sm`,
          title: `${Z.length} ${W} event${Z.length > 1 ? "s" : ""}: ${Z.map((Xe) => Xe.title).join(", ")}`,
          children: Z.length
        },
        W
      );
    }) });
  }, L = (O) => O.map((_) => {
    const W = t[_.id], Z = Wn(W == null ? void 0 : W.category, n), pe = en(Z).replace("bg-", "after:bg-"), Xe = new Date(_.startDate), Pe = new Date(_.endDate), br = !Number.isNaN(Xe.getTime()) && !Number.isNaN(Pe.getTime()), Gt = br && Xe.getTime() === Pe.getTime(), Yt = br ? `${j(Xe)}${Gt ? "" : ` - ${j(Pe)}`}` : null;
    return /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: `bg-muted dark:bg-card relative rounded-md p-2 pl-6 text-xs text-left w-full after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-card dark:hover:bg-muted transition-colors border border-gray-200 dark:border-border shadow-sm ${pe}`,
        onClick: (Ws) => {
          Ws.stopPropagation(), o == null || o(_);
        },
        children: [
          /* @__PURE__ */ p.jsx("div", { className: "font-medium text-[13px] text-gray-900 dark:text-foreground leading-tight", children: _.title }),
          Yt && /* @__PURE__ */ p.jsx("div", { className: "mt-0.5 text-[11px] text-gray-900 dark:text-foreground", children: Yt })
        ]
      },
      _.id
    );
  }), $ = Y.useMemo(() => new Date(d.getFullYear(), d.getMonth(), 1), [d]), G = !!(k && h && h.getFullYear() === d.getFullYear() && h.getMonth() === d.getMonth()), se = k && G && h ? h : $, ze = se.getDate(), Te = se, Be = k ? T(ze, d) : [], Me = Te.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  }), H = /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4", children: [
      /* @__PURE__ */ p.jsxs(
        bi.h2,
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
      /* @__PURE__ */ p.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ p.jsxs(nn, { variant: "outline", onClick: M, className: "gap-2", children: [
          /* @__PURE__ */ p.jsx(a0, { className: "h-4 w-4" }),
          "Prev"
        ] }),
        /* @__PURE__ */ p.jsxs(nn, { variant: "outline", onClick: D, className: "gap-2", children: [
          "Next",
          /* @__PURE__ */ p.jsx(l0, { className: "h-4 w-4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-7 gap-1 sm:gap-2 mb-4", children: F.map((O, _) => /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "text-left py-2 text-lg tracking-tighter font-medium text-gray-900 dark:text-foreground",
        children: O
      },
      _
    )) }),
    /* @__PURE__ */ p.jsx(hh, { initial: !1, custom: f, mode: "wait", children: /* @__PURE__ */ p.jsxs(
      bi.div,
      {
        custom: f,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        className: "grid grid-cols-7 gap-1 sm:gap-2",
        children: [
          Array.from({ length: I }).map((O, _) => /* @__PURE__ */ p.jsx("div", { className: "h-[150px] opacity-50 p-4", children: /* @__PURE__ */ p.jsx("div", { className: "font-semibold relative text-3xl mb-1 text-gray-400 dark:text-neutral-500", children: z - I + _ + 1 }) }, `offset-${_}`)),
          N.map((O) => {
            const _ = T(O.day, d), W = (/* @__PURE__ */ new Date()).getDate() === O.day && (/* @__PURE__ */ new Date()).getMonth() === d.getMonth() && (/* @__PURE__ */ new Date()).getFullYear() === d.getFullYear(), Q = (I + O.day - 1) % 7 >= 5, pe = k && G && ze === O.day;
            return /* @__PURE__ */ p.jsxs(
              bi.div,
              {
                className: "hover:z-50 border-none h-[150px] rounded group flex flex-col relative",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -20 },
                transition: { duration: 0.3 },
                onMouseEnter: () => {
                  b && v(O.day);
                },
                onMouseLeave: () => {
                  b && v(null);
                },
                children: [
                  /* @__PURE__ */ p.jsxs(
                    vd,
                    {
                      className: `bg-white dark:bg-card border border-gray-200 dark:border-border shadow-md overflow-hidden relative flex p-4 h-full transition-shadow day-card ${_.length > 0 ? "cursor-pointer hover:shadow-lg hover:bg-muted dark:hover:bg-muted" : "cursor-default"} ${W ? "!border-red-500 !border-2" : ""} ${pe && !W ? "ring-2 ring-blue-500 dark:ring-primary" : ""}`,
                      onClick: _.length > 0 ? () => {
                        k && y(new Date(d.getFullYear(), d.getMonth(), O.day)), r == null || r(new Date(d.getFullYear(), d.getMonth(), O.day));
                      } : void 0,
                      children: [
                        /* @__PURE__ */ p.jsx("div", { className: `font-semibold relative text-3xl mb-1 ${_.length > 0 ? "text-gray-900 dark:text-foreground" : "text-gray-500 dark:text-muted-foreground"}`, children: O.day }),
                        /* @__PURE__ */ p.jsxs("div", { className: "flex-grow flex flex-col gap-2 w-full", children: [
                          /* @__PURE__ */ p.jsx(hh, { mode: "wait", children: (_ == null ? void 0 : _.length) > 0 && /* @__PURE__ */ p.jsx(
                            bi.div,
                            {
                              initial: { opacity: 0, y: 20 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: -20 },
                              transition: { duration: 0.3 },
                              children: /* @__PURE__ */ p.jsx(P, { events: _ })
                            },
                            _[0].id
                          ) }),
                          C && _.length > 0 && /* @__PURE__ */ p.jsxs("div", { className: "mt-auto", children: [
                            /* @__PURE__ */ p.jsxs(
                              "button",
                              {
                                type: "button",
                                className: "w-full flex items-center justify-between gap-2 rounded-md bg-muted/70 dark:bg-muted px-2 py-1 text-xs font-medium text-foreground transition-colors hover:bg-muted",
                                onClick: (Xe) => {
                                  Xe.stopPropagation(), m((Pe) => Pe === O.day ? null : O.day);
                                },
                                children: [
                                  /* @__PURE__ */ p.jsx("span", { children: S === O.day ? "Hide events" : "Show events" }),
                                  /* @__PURE__ */ p.jsx(
                                    "svg",
                                    {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      className: `h-3 w-3 transition-transform ${S === O.day ? "rotate-180" : ""}`,
                                      fill: "none",
                                      children: /* @__PURE__ */ p.jsx("polyline", { points: "6 9 12 15 18 9" })
                                    }
                                  )
                                ]
                              }
                            ),
                            S === O.day && /* @__PURE__ */ p.jsx("div", { className: "mt-2 space-y-1.5", children: L(_) })
                          ] })
                        ] })
                      ]
                    }
                  ),
                  b && w === O.day && _.length > 0 && /* @__PURE__ */ p.jsxs(
                    "div",
                    {
                      className: `absolute top-full z-50 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg shadow-lg p-3 w-80 ${Q ? "right-0" : "left-0"}`,
                      onMouseEnter: () => {
                        b && v(O.day);
                      },
                      onMouseLeave: () => {
                        b && v(null);
                      },
                      children: [
                        /* @__PURE__ */ p.jsxs("div", { className: "text-sm font-semibold text-gray-900 dark:text-foreground mb-2", children: [
                          _.length,
                          " event",
                          _.length > 1 ? "s" : ""
                        ] }),
                        /* @__PURE__ */ p.jsx("div", { className: "space-y-1.5", children: L(_) })
                      ]
                    }
                  )
                ]
              },
              O.day
            );
          }),
          (() => {
            const _ = (I + N.length) % 7, W = _ === 0 ? 0 : 7 - _;
            return Array.from({ length: W }).map((Z, Q) => /* @__PURE__ */ p.jsx("div", { className: "h-[150px] opacity-50 p-4", children: /* @__PURE__ */ p.jsx("div", { className: "font-semibold relative text-3xl mb-1 text-gray-400 dark:text-neutral-500", children: Q + 1 }) }, `next-${Q}`));
          })()
        ]
      },
      `${d.getFullYear()}-${d.getMonth()}`
    ) })
  ] }), ne = /* @__PURE__ */ p.jsx("div", { className: k ? "flex-1" : void 0, children: k ? /* @__PURE__ */ p.jsx("div", { className: "rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-card shadow-sm p-4 lg:p-6", children: H }) : H }), Ce = k ? /* @__PURE__ */ p.jsx("aside", { className: "md:w-72 w-full md:flex-shrink-0", children: /* @__PURE__ */ p.jsxs("div", { className: "rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-card shadow-md p-4", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ p.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-500 dark:text-muted-foreground", children: "Selected Day" }),
      /* @__PURE__ */ p.jsx("div", { className: "text-base font-semibold text-gray-900 dark:text-foreground", children: Me })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "mt-3 space-y-1.5", children: Be.length > 0 ? L(Be) : /* @__PURE__ */ p.jsx("div", { className: "rounded-md border border-dashed border-gray-200 dark:border-border bg-gray-50 dark:bg-card px-3 py-4 text-xs text-gray-600 dark:text-muted-foreground", children: "No events scheduled for this day." }) })
  ] }) }) : null;
  return /* @__PURE__ */ p.jsxs("div", { className: k ? "flex flex-col gap-6 md:flex-row md:items-start" : "", children: [
    k && l === "left" && Ce,
    ne,
    k && l === "right" && Ce
  ] });
}
function B2({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r }) {
  const [o, s] = Y.useState(/* @__PURE__ */ new Date()), a = ((f) => {
    const g = new Date(f);
    return g.setDate(f.getDate() - f.getDay()), Array.from({ length: 7 }, (w, v) => {
      const S = new Date(g);
      return S.setDate(g.getDate() + v), S;
    });
  })(o), l = Array.from({ length: 24 }, (f, g) => g), c = (f) => e.filter((g) => g.startDate.toDateString() === f.toDateString()), u = (f) => {
    const g = new Date(o);
    g.setDate(o.getDate() + (f === "next" ? 7 : -7)), s(g);
  }, d = (f, g, w) => {
    const v = f.startDate.getHours(), S = f.startDate.getMinutes(), m = f.endDate ? f.endDate.getHours() : v + 1, h = f.endDate ? f.endDate.getMinutes() : 0, y = v + S / 60, b = m + h / 60, C = b - y, k = g.filter((D) => {
      if (D.id === f.id) return !0;
      if (D.startDate.toDateString() !== f.startDate.toDateString())
        return !1;
      const N = D.startDate.getHours() + D.startDate.getMinutes() / 60, F = (D.endDate ? D.endDate.getHours() : D.startDate.getHours() + 1) + (D.endDate ? D.endDate.getMinutes() / 60 : 0);
      return y < F && b > N;
    }), E = k.length, T = k.findIndex((D) => D.id === f.id), j = E > 1 ? 100 / E : 100, M = E > 1 ? T * j : 0;
    return {
      top: `${y * 80}px`,
      // 80px per hour for better readability
      height: `${C * 80}px`,
      // Accurate height based on actual duration
      left: `${M}%`,
      width: `${j}%`
    };
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ p.jsx(
        "button",
        {
          onClick: () => u("prev"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ p.jsx(c0, { className: "h-5 w-5" })
        }
      ),
      /* @__PURE__ */ p.jsxs("h2", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: [
        a[0].toLocaleDateString("en-US", { month: "long", day: "numeric" }),
        " - ",
        a[6].toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
      ] }),
      /* @__PURE__ */ p.jsx(
        "button",
        {
          onClick: () => u("next"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ p.jsx(u0, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-8 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700", children: [
        /* @__PURE__ */ p.jsx("div", { className: "p-3 text-xs font-medium text-gray-500 dark:text-gray-400 border-r border-gray-200 dark:border-gray-600", children: "Time" }),
        a.map((f, g) => /* @__PURE__ */ p.jsxs("div", { className: "p-3 text-center border-r border-gray-200 dark:border-gray-600 last:border-r-0", children: [
          /* @__PURE__ */ p.jsx("div", { className: "text-xs font-medium text-gray-500 dark:text-gray-400", children: f.toLocaleDateString("en-US", { weekday: "short" }) }),
          /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-gray-900 dark:text-gray-100", children: f.getDate() })
        ] }, g))
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-8 relative", children: [
        /* @__PURE__ */ p.jsx("div", { className: "border-r border-gray-200 dark:border-gray-600", children: l.map((f) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] p-2 text-xs text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600 flex items-start", children: f === 0 ? "12 AM" : f === 12 ? "12 PM" : f > 12 ? `${f - 12} PM` : `${f} AM` }, f)) }),
        a.map((f, g) => {
          const w = c(f);
          return /* @__PURE__ */ p.jsxs("div", { className: "relative border-r border-gray-200 dark:border-gray-600 last:border-r-0", children: [
            l.map((v) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] border-b border-gray-200 dark:border-gray-600" }, v)),
            w.map((v, S) => {
              const m = t[v.id], h = Wn(m == null ? void 0 : m.category, n), y = Aw(h), b = d(v, w);
              return /* @__PURE__ */ p.jsxs(
                "div",
                {
                  className: `absolute ${y} border rounded p-2 text-sm z-20 overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow event-card`,
                  style: {
                    ...b,
                    margin: "1px"
                  },
                  onClick: (C) => {
                    C.stopPropagation(), r == null || r(v);
                  },
                  children: [
                    /* @__PURE__ */ p.jsx("div", { className: "font-medium leading-tight truncate text-sm", children: v.title }),
                    /* @__PURE__ */ p.jsx("div", { className: "text-xs opacity-75 leading-tight", children: v.startDate.toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: !0
                    }) }),
                    m && /* @__PURE__ */ p.jsxs("div", { className: "text-xs leading-tight", children: [
                      /* @__PURE__ */ p.jsx("div", { className: "truncate", children: m.location }),
                      m.organization && /* @__PURE__ */ p.jsx("div", { className: "truncate opacity-75", children: m.organization })
                    ] })
                  ]
                },
                v.id
              );
            })
          ] }, g);
        })
      ] })
    ] })
  ] });
}
function $2({ events: e, eventMetadata: t, categoryMappings: n, initialDate: r, onEventClick: o }) {
  const [s, i] = Y.useState(r || /* @__PURE__ */ new Date());
  Y.useEffect(() => {
    r && i(r);
  }, [r]);
  const a = Array.from({ length: 24 }, (f, g) => g), l = () => e.filter((f) => f.startDate.toDateString() === s.toDateString()), c = (f) => {
    const g = new Date(s);
    g.setDate(s.getDate() + (f === "next" ? 1 : -1)), i(g);
  }, u = (f, g, w) => {
    const v = f.startDate.getHours(), S = f.startDate.getMinutes(), m = f.endDate ? f.endDate.getHours() : v + 1, h = f.endDate ? f.endDate.getMinutes() : 0, y = v + S / 60, b = m + h / 60, C = b - y, k = g.filter((D) => {
      if (D.id === f.id) return !0;
      const N = D.startDate.getHours() + D.startDate.getMinutes() / 60, F = (D.endDate ? D.endDate.getHours() : D.startDate.getHours() + 1) + (D.endDate ? D.endDate.getMinutes() / 60 : 0);
      return y < F && b > N;
    }), E = k.length, T = k.findIndex((D) => D.id === f.id), j = E > 1 ? 100 / E : 100, M = E > 1 ? T * j : 0;
    return {
      top: `${y * 80}px`,
      // 80px per hour for day view
      height: `${C * 80}px`,
      // Accurate height based on actual duration
      left: `${M}%`,
      width: `${j}%`
    };
  }, d = l();
  return /* @__PURE__ */ p.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ p.jsx(
        "button",
        {
          onClick: () => c("prev"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ p.jsx(c0, { className: "h-5 w-5" })
        }
      ),
      /* @__PURE__ */ p.jsx("h2", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: s.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }) }),
      /* @__PURE__ */ p.jsx(
        "button",
        {
          onClick: () => c("next"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ p.jsx(u0, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden", children: /* @__PURE__ */ p.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ p.jsx("div", { className: "w-20 border-r border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700", children: a.map((f) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] p-3 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600 flex items-start", children: f === 0 ? "12 AM" : f === 12 ? "12 PM" : f > 12 ? `${f - 12} PM` : `${f} AM` }, f)) }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex-1 relative", children: [
        a.map((f) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] border-b border-gray-200 dark:border-gray-600" }, f)),
        d.map((f, g) => {
          const w = t[f.id], v = Wn(w == null ? void 0 : w.category, n), S = Aw(v), m = u(f, d);
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `absolute ${S} border rounded-lg p-2 text-sm z-20 overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow event-card`,
              style: {
                ...m,
                margin: "2px"
              },
              onClick: (h) => {
                h.stopPropagation(), o == null || o(f);
              },
              children: [
                /* @__PURE__ */ p.jsx("div", { className: "font-semibold leading-tight truncate", children: f.title }),
                /* @__PURE__ */ p.jsxs("div", { className: "text-xs opacity-75 leading-tight", children: [
                  f.startDate.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: !0
                  }),
                  f.endDate && ` - ${f.endDate.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: !0
                  })}`
                ] }),
                w && /* @__PURE__ */ p.jsxs("div", { className: "text-xs leading-tight", children: [
                  /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ p.jsx(Os, { className: "h-2.5 w-2.5" }),
                    /* @__PURE__ */ p.jsx("span", { className: "truncate", children: w.location })
                  ] }),
                  w.organization && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ p.jsx(mT, { className: "h-2.5 w-2.5" }),
                    /* @__PURE__ */ p.jsx("span", { className: "truncate opacity-75", children: w.organization })
                  ] })
                ] })
              ]
            },
            f.id
          );
        })
      ] })
    ] }) })
  ] });
}
function U2({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onMonthChange: o, currentDate: s }) {
  const [i, a] = Y.useState(/* @__PURE__ */ new Date()), [l, c] = Y.useState(/* @__PURE__ */ new Date()), u = s || l, d = () => {
    const D = new Date(u.getFullYear(), u.getMonth() - 1, 1);
    s || c(D), o == null || o(D);
  }, f = () => {
    const D = new Date(u.getFullYear(), u.getMonth() + 1, 1);
    s || c(D), o == null || o(D);
  }, g = (D) => D.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), w = () => i ? e.filter((D) => {
    const N = new Date(D.startDate);
    return N.getDate() === i.getDate() && N.getMonth() === i.getMonth() && N.getFullYear() === i.getFullYear();
  }) : [], v = (D) => e.some((N) => {
    const F = new Date(N.startDate);
    return F.getDate() === D.getDate() && F.getMonth() === D.getMonth() && F.getFullYear() === D.getFullYear();
  }), S = w(), m = u.getFullYear(), h = u.getMonth(), y = new Date(m, h, 1), b = new Date(y);
  b.setDate(b.getDate() - y.getDay());
  const C = [], k = new Date(b), E = new Date(m, h + 1, 0).getDate(), T = y.getDay() + E, M = Math.ceil(T / 7) * 7;
  for (let D = 0; D < M; D++)
    C.push(new Date(k)), k.setDate(k.getDate() + 1);
  return /* @__PURE__ */ p.jsxs(vd, { className: "w-full py-4 mobile-calendar bg-white dark:bg-card border-gray-200 dark:border-border", children: [
    /* @__PURE__ */ p.jsxs(Xv, { className: "px-4", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between mb-4 gap-2", children: [
        /* @__PURE__ */ p.jsxs(
          nn,
          {
            variant: "outline",
            size: "sm",
            onClick: d,
            className: "flex-shrink-0",
            children: [
              /* @__PURE__ */ p.jsx(a0, { className: "h-4 w-4" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Prev" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsx("h3", { className: "text-base sm:text-lg font-semibold text-gray-900 dark:text-foreground text-center flex-1 min-w-0 truncate", children: u.toLocaleDateString("en-US", { month: "long", year: "numeric" }) }),
        /* @__PURE__ */ p.jsxs(
          nn,
          {
            variant: "outline",
            size: "sm",
            onClick: f,
            className: "flex-shrink-0",
            children: [
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Next" }),
              /* @__PURE__ */ p.jsx(l0, { className: "h-4 w-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-7 gap-1 mb-4", children: [
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((D) => /* @__PURE__ */ p.jsx("div", { className: "text-center text-sm font-medium py-2 text-gray-900 dark:text-foreground", children: D }, D)),
        C.map((D, N) => {
          const F = D.getMonth() === h, U = i && D.getDate() === i.getDate() && D.getMonth() === i.getMonth() && D.getFullYear() === i.getFullYear(), I = D.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), V = v(D);
          return /* @__PURE__ */ p.jsxs(
            "button",
            {
              onClick: () => a(D),
              className: `
                  p-2 text-sm rounded transition-colors relative focus:outline-none
                  ${F ? "text-gray-900 dark:text-foreground" : "text-gray-500 dark:text-muted-foreground"}
                  ${U ? "bg-blue-500 dark:bg-primary text-white dark:text-primary-foreground hover:bg-blue-600 dark:hover:bg-primary/90" : "hover:bg-gray-100 dark:hover:bg-muted"}
                  ${I && !U ? "bg-gray-200 dark:bg-muted font-semibold" : ""}
                `,
              children: [
                D.getDate(),
                V && /* @__PURE__ */ p.jsx(
                  "span",
                  {
                    className: "absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full",
                    "aria-label": "Events available"
                  }
                )
              ]
            },
            N
          );
        })
      ] })
    ] }),
    /* @__PURE__ */ p.jsxs($b, { className: "flex flex-col items-start gap-3 border-t border-gray-200 dark:border-border px-4 !pt-4", children: [
      /* @__PURE__ */ p.jsx("div", { className: "flex w-full items-center justify-between px-1", children: /* @__PURE__ */ p.jsx("div", { className: "text-sm font-medium text-gray-900 dark:text-foreground", children: i == null ? void 0 : i.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }) }) }),
      /* @__PURE__ */ p.jsx("div", { className: "flex w-full flex-col gap-2", children: S.length === 0 ? /* @__PURE__ */ p.jsx("div", { className: "text-sm text-gray-500 dark:text-muted-foreground text-center py-4", children: "No events on this day" }) : S.map((D) => {
        const N = t[D.id], F = Wn(N == null ? void 0 : N.category, n), I = en(F).replace("bg-", "after:bg-");
        return /* @__PURE__ */ p.jsxs(
          "button",
          {
            className: `bg-muted dark:bg-card relative rounded-md p-2 pl-6 text-sm text-left w-full after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-card dark:hover:bg-muted transition-colors focus:outline-none border border-gray-200 dark:border-border ${I}`,
            onClick: () => r == null ? void 0 : r(D),
            children: [
              /* @__PURE__ */ p.jsx("div", { className: "font-medium text-gray-900 dark:text-foreground", children: D.title }),
              /* @__PURE__ */ p.jsxs("div", { className: "text-muted-foreground dark:text-muted-foreground text-xs", children: [
                g(D.startDate),
                " - ",
                g(D.endDate),
                N && ` • ${N.location}`
              ] })
            ]
          },
          D.id
        );
      }) })
    ] })
  ] });
}
function W2({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onLoadMore: o, hasMore: s, loading: i }) {
  const a = (f) => f.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), l = /* @__PURE__ */ new Date();
  l.setHours(0, 0, 0, 0);
  const u = [...e.filter((f) => {
    const g = new Date(f.startDate);
    return g.setHours(0, 0, 0, 0), g >= l;
  })].sort((f, g) => f.startDate.getTime() - g.startDate.getTime()), d = u.reduce((f, g) => {
    const w = g.startDate.toDateString();
    return f[w] || (f[w] = []), f[w].push(g), f;
  }, {});
  return /* @__PURE__ */ p.jsxs("div", { className: "space-y-6", children: [
    u.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-12 text-muted-foreground", children: [
      /* @__PURE__ */ p.jsx(Es, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
      /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-medium mb-2", children: "No events found" }),
      /* @__PURE__ */ p.jsx("p", { children: "Try adjusting your filters to see more events." })
    ] }) : Object.entries(d).map(([f, g]) => {
      const w = new Date(f), v = w.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), S = w.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let m;
      return v ? m = "Today" : S ? m = "Tomorrow" : m = w.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }), /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-semibold text-foreground", children: m }),
          /* @__PURE__ */ p.jsx("div", { className: "flex-1 h-px bg-border" }),
          /* @__PURE__ */ p.jsxs("span", { className: "text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full", children: [
            g.length,
            " event",
            g.length > 1 ? "s" : ""
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: g.map((h) => {
          const y = t[h.id], b = Wn(y == null ? void 0 : y.category, n), k = en(b).replace("bg-", "after:bg-");
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `bg-muted dark:bg-accent relative rounded-md p-3 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-muted/80 dark:hover:bg-accent/80 transition-colors ${k}`,
              onClick: () => r == null ? void 0 : r(h),
              children: [
                /* @__PURE__ */ p.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ p.jsxs("div", { className: "flex-grow min-w-0", children: [
                    /* @__PURE__ */ p.jsx("div", { className: "font-medium text-foreground mb-2", children: h.title }),
                    /* @__PURE__ */ p.jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground text-xs", children: [
                        /* @__PURE__ */ p.jsx(co, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsxs("span", { children: [
                          a(h.startDate),
                          " - ",
                          a(h.endDate)
                        ] })
                      ] }),
                      (y == null ? void 0 : y.location) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground text-xs", children: [
                        /* @__PURE__ */ p.jsx(Os, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: y.location })
                      ] }),
                      (y == null ? void 0 : y.organization) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground text-xs", children: [
                        /* @__PURE__ */ p.jsx(Qa, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: y.organization })
                      ] })
                    ] })
                  ] }),
                  y && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: y.cost })
                ] }),
                (y == null ? void 0 : y.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-2", children: /* @__PURE__ */ p.jsx(uo, { variant: "outline", size: "sm", children: "Registration Required" }) })
              ]
            },
            h.id
          );
        }) })
      ] }, f);
    }),
    o && s && /* @__PURE__ */ p.jsx("div", { className: "text-center pt-6", children: /* @__PURE__ */ p.jsx(
      "button",
      {
        onClick: o,
        disabled: i,
        className: "px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
        children: i ? "Loading..." : "Load More Events"
      }
    ) })
  ] });
}
function H2({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onLoadMore: o, hasMore: s, loading: i }) {
  const a = (f) => f.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), l = /* @__PURE__ */ new Date();
  l.setHours(0, 0, 0, 0);
  const u = [...e.filter((f) => {
    const g = new Date(f.startDate);
    return g.setHours(0, 0, 0, 0), g >= l;
  })].sort((f, g) => f.startDate.getTime() - g.startDate.getTime()), d = u.reduce((f, g) => {
    const w = g.startDate.toDateString();
    return f[w] || (f[w] = []), f[w].push(g), f;
  }, {});
  return /* @__PURE__ */ p.jsxs("div", { className: "space-y-6", children: [
    u.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-12 text-muted-foreground", children: [
      /* @__PURE__ */ p.jsx(Es, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
      /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-medium mb-2", children: "No events found" }),
      /* @__PURE__ */ p.jsx("p", { children: "Try adjusting your filters to see more events." })
    ] }) : Object.entries(d).map(([f, g]) => {
      const w = new Date(f), v = w.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), S = w.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let m;
      return v ? m = "Today" : S ? m = "Tomorrow" : m = w.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }), /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsx("h3", { className: "text-base font-semibold text-foreground", children: m }),
          /* @__PURE__ */ p.jsx("div", { className: "flex-1 h-px bg-border" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full", children: g.length })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: g.map((h) => {
          const y = t[h.id], b = Wn(y == null ? void 0 : y.category, n), k = en(b).replace("bg-", "after:bg-");
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `bg-muted dark:bg-accent relative rounded-md p-3 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-muted/80 dark:hover:bg-accent/80 transition-colors ${k}`,
              onClick: () => r == null ? void 0 : r(h),
              children: [
                /* @__PURE__ */ p.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ p.jsxs("div", { className: "flex-grow min-w-0", children: [
                    /* @__PURE__ */ p.jsx("div", { className: "font-medium text-foreground mb-2", children: h.title }),
                    /* @__PURE__ */ p.jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground text-xs", children: [
                        /* @__PURE__ */ p.jsx(co, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsxs("span", { children: [
                          a(h.startDate),
                          " - ",
                          a(h.endDate)
                        ] })
                      ] }),
                      (y == null ? void 0 : y.location) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground text-xs", children: [
                        /* @__PURE__ */ p.jsx(Os, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: y.location })
                      ] }),
                      (y == null ? void 0 : y.organization) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground text-xs", children: [
                        /* @__PURE__ */ p.jsx(Qa, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: y.organization })
                      ] })
                    ] })
                  ] }),
                  y && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: y.cost })
                ] }),
                (y == null ? void 0 : y.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-2", children: /* @__PURE__ */ p.jsx(uo, { variant: "outline", size: "sm", children: "Registration Required" }) })
              ]
            },
            h.id
          );
        }) })
      ] }, f);
    }),
    o && s && /* @__PURE__ */ p.jsx("div", { className: "text-center pt-6", children: /* @__PURE__ */ p.jsx(
      "button",
      {
        onClick: o,
        disabled: i,
        className: "px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
        children: i ? "Loading..." : "Load More Events"
      }
    ) })
  ] });
}
function K2({
  initialView: e = "month",
  initialCategoryFilter: t = "all",
  initialOrganizationFilter: n = "all",
  showWeekView: r = !0,
  showDayView: o = !0,
  eventSortOrder: s = "asc",
  initialMonthDisplayMode: i = "popover",
  initialMonthSidebarPosition: a = "right"
} = {}) {
  var bf, Cf, kf, Ef;
  const [l, c] = x.useState(e), [u, d] = x.useState(/* @__PURE__ */ new Date()), [f, g] = x.useState(/* @__PURE__ */ new Date()), [w, v] = x.useState(null), [S, m] = x.useState(!1), [h, y] = x.useState(!1), [b, C] = x.useState(i), [k, E] = x.useState(a), T = b === "sidebar", [j, M] = x.useState(30), [D, N] = x.useState(30), [F, U] = x.useState(15);
  Y.useEffect(() => {
    const R = document.querySelector(".unbc-calendar-container");
    if (R) {
      const re = parseInt(R.getAttribute("data-list-initial-items") || "30"), he = parseInt(R.getAttribute("data-list-load-more-count") || "15");
      N(re), U(he), M(re);
      const J = R.getAttribute("data-month-display-mode");
      (J === "popover" || J === "dropdown" || J === "sidebar") && C(J);
      const De = R.getAttribute("data-month-sidebar-position");
      (De === "left" || De === "right") && E(De);
    }
  }, []), Y.useEffect(() => {
    C(i);
  }, [i]), Y.useEffect(() => {
    E(a);
  }, [a]), Y.useEffect(() => {
    const R = document.createElement("style");
    return R.textContent = `
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

    `, document.head.appendChild(R), () => {
      document.head.removeChild(R);
    };
  }, []), Y.useEffect(() => {
    let R;
    const re = () => {
      var De;
      const J = (
        // Priority 1: Explicit theme attributes
        document.documentElement.hasAttribute("data-theme") && document.documentElement.getAttribute("data-theme") === "dark" || document.documentElement.hasAttribute("data-color-scheme") && document.documentElement.getAttribute("data-color-scheme") === "dark" || // Priority 2: Theme classes on body or html
        document.body.classList.contains("dark") || document.documentElement.classList.contains("is-dark-theme") || document.body.classList.contains("is-dark-theme") || // Priority 3: Computed styles
        ((De = getComputedStyle(document.documentElement).getPropertyValue("--wp--preset--color--background")) == null ? void 0 : De.includes("0, 0, 0")) || getComputedStyle(document.body).backgroundColor === "rgb(0, 0, 0)" || // Priority 4: System preference (lowest priority)
        !document.documentElement.hasAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches
      );
      y(J), R && R.disconnect(), J ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"), R && (R.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-theme", "data-color-scheme"] }), R.observe(document.body, { attributes: !0, attributeFilter: ["class"] }));
    };
    re(), R = new MutationObserver(re), R.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-theme", "data-color-scheme"] }), R.observe(document.body, { attributes: !0, attributeFilter: ["class"] });
    const he = window.matchMedia("(prefers-color-scheme: dark)");
    return he.addEventListener("change", re), () => {
      R.disconnect(), he.removeEventListener("change", re);
    };
  }, []);
  const [I, V] = x.useState("all"), [z, P] = x.useState("all"), [L, $] = x.useState(""), [G, se] = x.useState(""), ze = Y.useMemo(() => {
    const R = new Date(f.getTime()), re = R.getFullYear(), he = R.getMonth(), J = new Date(re, he, 1), De = new Date(re, he + 1, 0);
    return {
      per_page: 500,
      start_date: J.toISOString().split("T")[0],
      end_date: De.toISOString().split("T")[0],
      year: re,
      month: he + 1,
      // Calendar Plus uses 1-based months
      category: I === "all" ? "" : I
      // Don't send search to API - handle client-side only for better UX
    };
  }, [f, I]);
  KT(ze);
  const Te = D0(ze), Be = QT(), Me = N0(), H = qT();
  Y.useEffect(() => {
    const R = setTimeout(() => {
      $(G);
    }, 300);
    return () => clearTimeout(R);
  }, [G]);
  const ne = Y.useMemo(() => {
    var R;
    return ((R = H.config) == null ? void 0 : R.categoriesWithOrganizations) || [];
  }, [H.config]);
  Y.useEffect(() => {
    !ne.includes(I) && I !== "all" && P("all");
  }, [I, ne]);
  const Ce = Te, {
    events: O,
    eventMetadata: _,
    loading: W,
    error: Z,
    categoryMappings: Q
  } = Ce, pe = Be.organizations, Xe = Be.loading, { categories: Pe, loading: br } = Me, Gt = Y.useMemo(
    () => jw(Pe),
    [Pe]
  ), Yt = Y.useMemo(() => Q && Object.keys(Q).length > 0 ? Q : Gt, [Q, Gt]), Ws = Y.useMemo(() => {
    const R = /* @__PURE__ */ new Map();
    return pe.forEach((re) => {
      R.set(re.id.toString(), re.title.rendered);
    }), R;
  }, [pe]), xf = Y.useCallback((R, re) => {
    var De, mn;
    const he = _[R.id];
    if (!he) return !1;
    const J = (mn = (De = H.config) == null ? void 0 : De.categoryRelationships) == null ? void 0 : mn[re];
    return J ? J.includes(he.category) : he.category === re;
  }, [_, H.config]), hn = Y.useMemo(() => {
    let R = O;
    if (l === "list") {
      const re = /* @__PURE__ */ new Date();
      re.setHours(0, 0, 0, 0), R = R.filter((he) => {
        const J = new Date(he.startDate);
        return J.setHours(0, 0, 0, 0), J >= re;
      }), R = R.sort((he, J) => {
        const De = he.startDate.getTime(), mn = J.startDate.getTime();
        return s === "asc" ? De - mn : mn - De;
      });
    } else
      R = R.sort((re, he) => {
        const J = re.startDate.getTime(), De = he.startDate.getTime();
        return s === "asc" ? J - De : De - J;
      });
    if (I !== "all" && (R = R.filter((re) => xf(re, I))), z !== "all") {
      const re = Ws.get(z);
      R = R.filter((he) => {
        const J = _[he.id];
        return re && (J == null ? void 0 : J.organization) === re;
      });
    }
    if (L) {
      const re = L.toLowerCase();
      R = R.filter((he) => {
        var De, mn, Tf;
        const J = _[he.id];
        return he.title.toLowerCase().includes(re) || ((De = J == null ? void 0 : J.description) == null ? void 0 : De.toLowerCase().includes(re)) || ((mn = J == null ? void 0 : J.location) == null ? void 0 : mn.toLowerCase().includes(re)) || ((Tf = J == null ? void 0 : J.organization) == null ? void 0 : Tf.toLowerCase().includes(re));
      });
    }
    return R;
  }, [O, _, I, z, L, Ws, l, xf, s]), Lw = Y.useCallback((R) => {
    d(R), T || (o ? c("day") : r && c("week"));
  }, [T, o, r]), wf = Y.useCallback((R) => {
    g(R);
  }, []), Cr = Y.useCallback((R) => {
    v(R), m(!0);
  }, []), Sf = Y.useCallback(() => {
    M((R) => R + F);
  }, [F]);
  Y.useEffect(() => {
    !r && l === "week" ? c(o ? "day" : "month") : !o && l === "day" && c(r ? "week" : "month");
  }, [r, o, l, c]);
  const _w = `rounded-lg unbc-calendar-view ${l === "month" && T ? "bg-transparent dark:bg-transparent border border-transparent shadow-none" : "bg-card border border-border shadow-sm"}`;
  return Y.useEffect(() => {
    l === "list" && M(D);
  }, [l, I, z, L, D]), (W || Xe || br) && (!O || O.length === 0) ? /* @__PURE__ */ p.jsx("div", { className: "w-full flex items-center justify-center py-12", children: /* @__PURE__ */ p.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ p.jsx(Vi, { className: "h-8 w-8 animate-spin mx-auto mb-4" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-muted-foreground", children: "Loading calendar..." })
  ] }) }) : Z ? /* @__PURE__ */ p.jsx("div", { className: "w-full py-12", children: /* @__PURE__ */ p.jsx(vd, { className: "max-w-md mx-auto", children: /* @__PURE__ */ p.jsxs(Xv, { className: "pt-6 text-center", children: [
    /* @__PURE__ */ p.jsxs("p", { className: "text-red-600 mb-4", children: [
      "Error loading events: ",
      Z
    ] }),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        onClick: () => window.location.reload(),
        className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
        children: "Retry"
      }
    )
  ] }) }) }) : /* @__PURE__ */ p.jsxs("div", { id: "unbc-calendar-react-component", "data-calendar-isolated": "true", className: `w-full space-y-6 ${h ? "dark" : ""}`, children: [
    /* @__PURE__ */ p.jsx("div", { className: _w, children: /* @__PURE__ */ p.jsxs(UT, { value: l, onValueChange: c, className: "w-full", children: [
      /* @__PURE__ */ p.jsx("div", { className: "hidden md:block p-6 pb-0", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsxs(pi, { value: I, onValueChange: V, children: [
            /* @__PURE__ */ p.jsx(hi, { className: "w-40 border border-border bg-card text-foreground", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${I === "all" ? "bg-muted-foreground" : en(((bf = Pe.find((R) => R.slug === I)) == null ? void 0 : bf.variant) || "default")}` }),
              /* @__PURE__ */ p.jsx("span", { children: I === "all" ? "All Categories" : ((Cf = Pe.find((R) => R.slug === I)) == null ? void 0 : Cf.name) || "All Categories" })
            ] }) }),
            /* @__PURE__ */ p.jsxs(mi, { className: "bg-card border border-border z-[9999] shadow-lg", children: [
              /* @__PURE__ */ p.jsx(xn, { value: "all", className: "text-foreground hover:bg-muted focus:bg-muted focus:outline-none", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                /* @__PURE__ */ p.jsx("span", { className: "w-3 h-3 rounded-full flex-shrink-0 bg-muted-foreground" }),
                /* @__PURE__ */ p.jsx("span", { children: "All" })
              ] }) }),
              Pe.map((R) => /* @__PURE__ */ p.jsx(
                xn,
                {
                  value: R.slug,
                  className: "text-foreground hover:bg-muted focus:bg-muted focus:outline-none",
                  children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                    /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${en(R.variant || "default")}` }),
                    /* @__PURE__ */ p.jsx("span", { children: R.name })
                  ] })
                },
                R.id
              ))
            ] })
          ] }),
          ne.includes(I) && /* @__PURE__ */ p.jsxs(pi, { value: z, onValueChange: P, children: [
            /* @__PURE__ */ p.jsx(hi, { className: "w-44 border border-border bg-card text-foreground [&>span]:truncate [&>span]:block", children: /* @__PURE__ */ p.jsx(ch, { placeholder: "All Organizations" }) }),
            /* @__PURE__ */ p.jsxs(mi, { className: "bg-card border border-border max-h-[200px] overflow-y-auto", children: [
              /* @__PURE__ */ p.jsx(xn, { value: "all", className: "text-foreground focus:bg-muted", children: "All Organizations" }),
              pe.map((R) => /* @__PURE__ */ p.jsx(
                xn,
                {
                  value: R.id.toString(),
                  className: "text-foreground focus:bg-muted",
                  children: R.title.rendered
                },
                R.id
              ))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ p.jsxs(uh, { className: "h-9 bg-muted dark:bg-background/50 border border-transparent dark:border-border/40 p-1", children: [
          o && /* @__PURE__ */ p.jsxs(qn, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm", children: [
            /* @__PURE__ */ p.jsx(co, { className: "h-3 w-3" }),
            "Day"
          ] }),
          r && /* @__PURE__ */ p.jsxs(qn, { value: "week", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm", children: [
            /* @__PURE__ */ p.jsx(Fi, { className: "h-3 w-3" }),
            "Week"
          ] }),
          /* @__PURE__ */ p.jsxs(qn, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm", children: [
            /* @__PURE__ */ p.jsx(Es, { className: "h-3 w-3" }),
            "Month"
          ] }),
          /* @__PURE__ */ p.jsxs(qn, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm", children: [
            /* @__PURE__ */ p.jsx(lh, { className: "h-3 w-3" }),
            "List"
          ] })
        ] }) }),
        /* @__PURE__ */ p.jsxs("div", { className: "flex-shrink-0 flex items-center gap-2", children: [
          W && O && O.length > 0 && /* @__PURE__ */ p.jsx(Vi, { className: "h-4 w-4 animate-spin text-muted-foreground" }),
          /* @__PURE__ */ p.jsx(
            ou,
            {
              placeholder: "Search events...",
              value: G,
              onChange: (R) => se(R.target.value),
              className: "w-40 border border-border bg-card text-foreground placeholder:text-muted-foreground"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "md:hidden", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "px-4 py-4 flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ p.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ p.jsxs(pi, { value: I, onValueChange: V, children: [
            /* @__PURE__ */ p.jsx(hi, { className: "w-auto min-w-[60px] h-9 px-2 border border-border bg-card text-foreground", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${I === "all" ? "bg-muted-foreground" : en(((kf = Pe.find((R) => R.slug === I)) == null ? void 0 : kf.variant) || "default")}` }),
              /* @__PURE__ */ p.jsx("span", { className: "text-xs truncate max-w-[60px]", children: I === "all" ? "All" : ((Ef = Pe.find((R) => R.slug === I)) == null ? void 0 : Ef.name) || "All" })
            ] }) }),
            /* @__PURE__ */ p.jsxs(mi, { className: "bg-card border border-border z-[9999]", children: [
              /* @__PURE__ */ p.jsx(xn, { value: "all", className: "text-foreground focus:bg-muted", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                /* @__PURE__ */ p.jsx("span", { className: "w-3 h-3 rounded-full flex-shrink-0 bg-muted-foreground" }),
                /* @__PURE__ */ p.jsx("span", { children: "All" })
              ] }) }),
              Pe.map((R) => /* @__PURE__ */ p.jsx(
                xn,
                {
                  value: R.slug,
                  className: "text-foreground focus:bg-muted",
                  children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                    /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${en(R.variant || "default")}` }),
                    /* @__PURE__ */ p.jsx("span", { children: R.name })
                  ] })
                },
                R.id
              ))
            ] })
          ] }) }),
          /* @__PURE__ */ p.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ p.jsxs(uh, { className: "h-9 bg-muted dark:bg-background/50 border border-transparent dark:border-border/40 p-1", children: [
            o && /* @__PURE__ */ p.jsxs(qn, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm flex-1", children: [
              /* @__PURE__ */ p.jsx(co, { className: "h-3 w-3" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Day" })
            ] }),
            /* @__PURE__ */ p.jsxs(qn, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm flex-1", children: [
              /* @__PURE__ */ p.jsx(Es, { className: "h-3 w-3" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Month" })
            ] }),
            /* @__PURE__ */ p.jsxs(qn, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm flex-1", children: [
              /* @__PURE__ */ p.jsx(lh, { className: "h-3 w-3" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "List" })
            ] })
          ] }) }),
          /* @__PURE__ */ p.jsxs("div", { className: "flex-shrink-0 flex items-center gap-2", children: [
            W && O && O.length > 0 && /* @__PURE__ */ p.jsx(Vi, { className: "h-4 w-4 animate-spin text-muted-foreground" }),
            /* @__PURE__ */ p.jsx(
              nn,
              {
                variant: "outline",
                size: "sm",
                className: "h-9 px-2 border border-border bg-card hover:bg-muted",
                onClick: () => {
                  const R = document.querySelector(".mobile-search-input");
                  R && (R.style.display = R.style.display === "none" ? "block" : "none", R.style.display !== "none" && R.focus());
                },
                children: /* @__PURE__ */ p.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "text-muted-foreground", children: [
                  /* @__PURE__ */ p.jsx("circle", { cx: "11", cy: "11", r: "8" }),
                  /* @__PURE__ */ p.jsx("path", { d: "m21 21-4.35-4.35" })
                ] })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ p.jsx(
          ou,
          {
            placeholder: "Search events...",
            value: G,
            onChange: (R) => se(R.target.value),
            className: "mobile-search-input w-full h-9 border border-border bg-card text-foreground placeholder:text-muted-foreground",
            style: { display: "none" }
          }
        ) }),
        ne.includes(I) && /* @__PURE__ */ p.jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ p.jsxs(pi, { value: z, onValueChange: P, children: [
          /* @__PURE__ */ p.jsx(hi, { className: "w-full h-9 border border-border bg-card text-foreground", children: /* @__PURE__ */ p.jsx(ch, { placeholder: "All Organizations", className: "truncate" }) }),
          /* @__PURE__ */ p.jsxs(mi, { className: "bg-card border border-border max-h-[200px] overflow-y-auto", children: [
            /* @__PURE__ */ p.jsx(xn, { value: "all", className: "text-foreground focus:bg-muted", children: "All Organizations" }),
            pe.map((R) => /* @__PURE__ */ p.jsx(
              xn,
              {
                value: R.id.toString(),
                className: "text-foreground focus:bg-muted",
                children: R.title.rendered
              },
              R.id
            ))
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ p.jsxs(vi, { value: "month", className: "px-6 pb-6 md:p-6", children: [
        /* @__PURE__ */ p.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ p.jsx(
          z2,
          {
            events: hn,
            eventMetadata: _,
            categoryMappings: Yt,
            onDateClick: Lw,
            onEventClick: Cr,
            onMonthChange: wf,
            currentDate: f,
            displayMode: b,
            sidebarPosition: k
          }
        ) }),
        /* @__PURE__ */ p.jsx("div", { className: "block md:hidden mobile-calendar", children: /* @__PURE__ */ p.jsx(
          U2,
          {
            events: hn,
            eventMetadata: _,
            categoryMappings: Yt,
            onEventClick: Cr,
            onMonthChange: wf,
            currentDate: f
          }
        ) })
      ] }),
      r && /* @__PURE__ */ p.jsx(vi, { value: "week", className: "px-6 pb-6 md:p-6", children: /* @__PURE__ */ p.jsx(
        B2,
        {
          events: hn,
          eventMetadata: _,
          categoryMappings: Yt,
          onEventClick: Cr
        }
      ) }),
      o && /* @__PURE__ */ p.jsx(vi, { value: "day", className: "px-6 pb-6 md:p-6", children: /* @__PURE__ */ p.jsx(
        $2,
        {
          events: hn,
          eventMetadata: _,
          categoryMappings: Yt,
          initialDate: u,
          onEventClick: Cr
        }
      ) }),
      /* @__PURE__ */ p.jsxs(vi, { value: "list", className: "px-6 pb-6 md:p-6", children: [
        /* @__PURE__ */ p.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ p.jsx(
          W2,
          {
            events: hn.slice(0, j),
            eventMetadata: _,
            categoryMappings: Yt,
            onEventClick: Cr,
            onLoadMore: Sf,
            hasMore: hn.length > j,
            loading: W
          }
        ) }),
        /* @__PURE__ */ p.jsx("div", { className: "block md:hidden", children: /* @__PURE__ */ p.jsx(
          H2,
          {
            events: hn.slice(0, j),
            eventMetadata: _,
            categoryMappings: Yt,
            onEventClick: Cr,
            onLoadMore: Sf,
            hasMore: hn.length > j,
            loading: W
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsx(
      tx,
      {
        event: w,
        eventMetadata: _,
        open: S,
        onOpenChange: m
      }
    )
  ] });
}
function G2({
  events: e,
  eventMetadata: t,
  categoryMappings: n,
  organizationId: r,
  organizationName: o,
  limit: s,
  showPastEvents: i = !1,
  onEventClick: a
}) {
  const l = (d) => d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), { filteredEvents: c, eventsByDate: u } = Y.useMemo(() => {
    let d = e;
    const f = /* @__PURE__ */ new Date();
    (r || o) && (d = d.filter((w) => {
      var S;
      const v = t[w.id];
      return o ? (v == null ? void 0 : v.organization) === o : r ? ((S = v == null ? void 0 : v.organization_id) == null ? void 0 : S.toString()) === r : !0;
    })), i || (d = d.filter((w) => w.startDate >= f)), d.sort((w, v) => w.startDate.getTime() - v.startDate.getTime()), s && s > 0 && (d = d.slice(0, s));
    const g = d.reduce((w, v) => {
      const S = v.startDate.toDateString();
      return w[S] || (w[S] = []), w[S].push(v), w;
    }, {});
    return { filteredEvents: d, eventsByDate: g };
  }, [e, t, r, o, s, i]);
  return c.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-8 text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ p.jsx(Es, { className: "mx-auto h-8 w-8 mb-3 opacity-50" }),
    /* @__PURE__ */ p.jsx("h3", { className: "text-base font-medium mb-1", children: "No upcoming events" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-sm", children: o ? `${o} has no upcoming events.` : "No events found for this organization." })
  ] }) : /* @__PURE__ */ p.jsxs("div", { className: "space-y-6", children: [
    o && /* @__PURE__ */ p.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ p.jsxs("h3", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: [
        o,
        " Events"
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
        c.length,
        " upcoming event",
        c.length !== 1 ? "s" : ""
      ] })
    ] }),
    Object.entries(u).map(([d, f]) => {
      const g = new Date(d), w = g.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), v = g.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let S = g.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      });
      return w ? S = `Today, ${S}` : v && (S = `Tomorrow, ${S}`), /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: S }),
          /* @__PURE__ */ p.jsx("div", { className: "flex-1 h-px bg-gray-200 dark:bg-gray-600" }),
          /* @__PURE__ */ p.jsxs("span", { className: "text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full", children: [
            f.length,
            " event",
            f.length > 1 ? "s" : ""
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: f.map((m) => {
          const h = t[m.id], y = Wn(h == null ? void 0 : h.category, n), b = V2(y);
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 relative rounded-lg p-4 pl-6 hover:shadow-md transition-all cursor-pointer after:absolute after:inset-y-3 after:left-3 after:w-1 after:rounded-full ${b}`,
              onClick: () => a == null ? void 0 : a(m),
              children: [
                /* @__PURE__ */ p.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ p.jsxs("div", { className: "flex-grow min-w-0", children: [
                    /* @__PURE__ */ p.jsx("div", { className: "font-semibold text-gray-900 dark:text-gray-100 mb-2", children: m.title }),
                    /* @__PURE__ */ p.jsx("div", { className: "flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ p.jsx(co, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsxs("span", { children: [
                        l(m.startDate),
                        " - ",
                        l(m.endDate)
                      ] })
                    ] }) }),
                    h && /* @__PURE__ */ p.jsxs("div", { className: "space-y-1 text-sm text-gray-600 dark:text-gray-400", children: [
                      h.location && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(Os, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: h.location })
                      ] }),
                      !o && h.organization && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(Qa, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: h.organization })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col items-end gap-2 flex-shrink-0 ml-4", children: [
                    (h == null ? void 0 : h.cost) && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400", children: h.cost }),
                    (h == null ? void 0 : h.category) && /* @__PURE__ */ p.jsx(uo, { variant: "secondary", size: "sm", className: "text-xs", children: h.category.charAt(0).toUpperCase() + h.category.slice(1) })
                  ] })
                ] }),
                (h == null ? void 0 : h.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-3 pt-2 border-t border-gray-100 dark:border-gray-700", children: /* @__PURE__ */ p.jsx(uo, { variant: "outline", size: "sm", children: "📝 Registration Required" }) })
              ]
            },
            m.id
          );
        }) })
      ] }, d);
    })
  ] });
}
function Rw({
  organizationId: e,
  organizationName: t,
  limit: n = 5,
  showPastEvents: r = !1
}) {
  const [o, s] = x.useState(null), [i, a] = x.useState(!1), {
    events: l,
    eventMetadata: c,
    loading: u,
    error: d,
    categoryMappings: f
  } = D0({
    view: "list",
    // Use list view for organization pages
    organization: e
    // Filter by organization
  }), { categories: g } = N0(), w = Y.useMemo(
    () => jw(g),
    [g]
  ), v = Y.useMemo(() => f && Object.keys(f).length > 0 ? f : w, [f, w]), S = (m) => {
    s(m), a(!0);
  };
  return u ? /* @__PURE__ */ p.jsx("div", { className: "w-full flex items-center justify-center py-8", children: /* @__PURE__ */ p.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ p.jsx(Vi, { className: "h-6 w-6 animate-spin mx-auto mb-2" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-gray-600 text-sm", children: "Loading events..." })
  ] }) }) : d ? /* @__PURE__ */ p.jsx("div", { className: "w-full py-8", children: /* @__PURE__ */ p.jsx("div", { className: "max-w-md mx-auto bg-red-50 border border-red-200 rounded-lg p-4", children: /* @__PURE__ */ p.jsxs("p", { className: "text-red-600 text-sm", children: [
    "Error loading events: ",
    d
  ] }) }) }) : /* @__PURE__ */ p.jsxs("div", { className: "unbc-organization-events", children: [
    /* @__PURE__ */ p.jsx(
      G2,
      {
        events: l,
        eventMetadata: c,
        categoryMappings: v,
        organizationId: e,
        organizationName: t,
        limit: n,
        showPastEvents: r,
        onEventClick: S
      }
    ),
    /* @__PURE__ */ p.jsx(
      tx,
      {
        event: o,
        eventMetadata: c,
        open: i,
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
  const n = $a(t), r = t.dataset.view || "month", o = t.dataset.categoryFilter || "all", s = t.dataset.organizationFilter || "all", i = t.dataset.showWeekView !== "false", a = t.dataset.showDayView !== "false", l = t.dataset.eventSortOrder || "asc", c = t.dataset.monthDisplayMode || "popover", u = t.dataset.monthSidebarPosition || "right";
  n.render(
    /* @__PURE__ */ p.jsx(Y.StrictMode, { children: /* @__PURE__ */ p.jsx(
      K2,
      {
        initialView: r,
        initialCategoryFilter: o,
        initialOrganizationFilter: s,
        showWeekView: i,
        showDayView: a,
        eventSortOrder: l,
        initialMonthDisplayMode: c,
        initialMonthSidebarPosition: u
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
  const n = $a(t), r = t.dataset.organizationId || "", o = t.dataset.organizationName || "", s = parseInt(t.dataset.limit) || 5, i = t.dataset.showPast === "true";
  n.render(
    /* @__PURE__ */ p.jsx(Y.StrictMode, { children: /* @__PURE__ */ p.jsx(
      Rw,
      {
        organizationId: r,
        organizationName: o,
        limit: s,
        showPastEvents: i
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
  const n = $a(t), r = t.dataset.organizationId || "", o = t.dataset.organizationName || "", s = parseInt(t.dataset.limit) || 5, i = t.dataset.showPast === "true";
  n.render(
    /* @__PURE__ */ p.jsx(Y.StrictMode, { children: /* @__PURE__ */ p.jsx(
      Rw,
      {
        organizationId: r,
        organizationName: o,
        limit: s,
        showPastEvents: i
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
