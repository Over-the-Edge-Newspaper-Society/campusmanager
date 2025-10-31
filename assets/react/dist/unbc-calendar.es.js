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
var Mm = { exports: {} }, Ca = {}, Am = { exports: {} }, q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ms = Symbol.for("react.element"), Ow = Symbol.for("react.portal"), Fw = Symbol.for("react.fragment"), Vw = Symbol.for("react.strict_mode"), zw = Symbol.for("react.profiler"), Bw = Symbol.for("react.provider"), $w = Symbol.for("react.context"), Uw = Symbol.for("react.forward_ref"), Ww = Symbol.for("react.suspense"), Hw = Symbol.for("react.memo"), Kw = Symbol.for("react.lazy"), Pf = Symbol.iterator;
function Gw(e) {
  return e === null || typeof e != "object" ? null : (e = Pf && e[Pf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var jm = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Rm = Object.assign, Lm = {};
function ho(e, t, n) {
  this.props = e, this.context = t, this.refs = Lm, this.updater = n || jm;
}
ho.prototype.isReactComponent = {};
ho.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
ho.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function _m() {
}
_m.prototype = ho.prototype;
function Su(e, t, n) {
  this.props = e, this.context = t, this.refs = Lm, this.updater = n || jm;
}
var bu = Su.prototype = new _m();
bu.constructor = Su;
Rm(bu, ho.prototype);
bu.isPureReactComponent = !0;
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
  return { $$typeof: Ms, type: e, key: s, ref: i, props: o, _owner: ku.current };
}
function Yw(e, t) {
  return { $$typeof: Ms, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Cu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ms;
}
function Xw(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Nf = /\/+/g;
function ol(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Xw("" + e.key) : t.toString(36);
}
function Si(e, t, n, r, o) {
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
        case Ms:
        case Ow:
          i = !0;
      }
  }
  if (i) return i = e, o = o(i), e = r === "" ? "." + ol(i, 0) : r, Df(o) ? (n = "", e != null && (n = e.replace(Nf, "$&/") + "/"), Si(o, t, n, "", function(c) {
    return c;
  })) : o != null && (Cu(o) && (o = Yw(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Nf, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Df(e)) for (var a = 0; a < e.length; a++) {
    s = e[a];
    var l = r + ol(s, a);
    i += Si(s, t, n, l, o);
  }
  else if (l = Gw(e), typeof l == "function") for (e = l.call(e), a = 0; !(s = e.next()).done; ) s = s.value, l = r + ol(s, a++), i += Si(s, t, n, l, o);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Us(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Si(e, r, "", "", function(s) {
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
var qe = { current: null }, bi = { transition: null }, qw = { ReactCurrentDispatcher: qe, ReactCurrentBatchConfig: bi, ReactCurrentOwner: ku };
function Vm() {
  throw Error("act(...) is not supported in production builds of React.");
}
q.Children = { map: Us, forEach: function(e, t, n) {
  Us(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Us(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Us(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Cu(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
q.Component = ho;
q.Fragment = Fw;
q.Profiler = zw;
q.PureComponent = Su;
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
  return { $$typeof: Ms, type: e.type, key: o, ref: s, props: r, _owner: i };
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
q.isValidElement = Cu;
q.lazy = function(e) {
  return { $$typeof: Kw, _payload: { _status: -1, _result: e }, _init: Qw };
};
q.memo = function(e, t) {
  return { $$typeof: Hw, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function(e) {
  var t = bi.transition;
  bi.transition = {};
  try {
    e();
  } finally {
    bi.transition = t;
  }
};
q.unstable_act = Vm;
q.useCallback = function(e, t) {
  return qe.current.useCallback(e, t);
};
q.useContext = function(e) {
  return qe.current.useContext(e);
};
q.useDebugValue = function() {
};
q.useDeferredValue = function(e) {
  return qe.current.useDeferredValue(e);
};
q.useEffect = function(e, t) {
  return qe.current.useEffect(e, t);
};
q.useId = function() {
  return qe.current.useId();
};
q.useImperativeHandle = function(e, t, n) {
  return qe.current.useImperativeHandle(e, t, n);
};
q.useInsertionEffect = function(e, t) {
  return qe.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function(e, t) {
  return qe.current.useLayoutEffect(e, t);
};
q.useMemo = function(e, t) {
  return qe.current.useMemo(e, t);
};
q.useReducer = function(e, t, n) {
  return qe.current.useReducer(e, t, n);
};
q.useRef = function(e) {
  return qe.current.useRef(e);
};
q.useState = function(e) {
  return qe.current.useState(e);
};
q.useSyncExternalStore = function(e, t, n) {
  return qe.current.useSyncExternalStore(e, t, n);
};
q.useTransition = function() {
  return qe.current.useTransition();
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
Ca.Fragment = e1;
Ca.jsx = Bm;
Ca.jsxs = Bm;
Mm.exports = Ca;
var p = Mm.exports, $m = { exports: {} }, ft = {}, Um = { exports: {} }, Wm = {};
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
      e: for (var G = 0, se = P.length, Ve = se >>> 1; G < Ve; ) {
        var Te = 2 * (G + 1) - 1, ze = P[Te], Ne = Te + 1, H = P[Ne];
        if (0 > o(ze, $)) Ne < se && 0 > o(H, ze) ? (P[G] = H, P[Ne] = $, G = Ne) : (P[G] = ze, P[Te] = $, G = Te);
        else if (Ne < se && 0 > o(H, $)) P[G] = H, P[Ne] = $, G = Ne;
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
  var l = [], c = [], u = 1, d = null, f = 3, g = !1, w = !1, y = !1, S = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(P) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= P) r(c), L.sortIndex = L.expirationTime, t(l, L);
      else break;
      L = n(c);
    }
  }
  function b(P) {
    if (y = !1, v(P), !w) if (n(l) !== null) w = !0, V(k);
    else {
      var L = n(c);
      L !== null && z(b, L.startTime - P);
    }
  }
  function k(P, L) {
    w = !1, y && (y = !1, m(T), T = -1), g = !0;
    var $ = f;
    try {
      for (v(L), d = n(l); d !== null && (!(d.expirationTime > L) || P && !D()); ) {
        var G = d.callback;
        if (typeof G == "function") {
          d.callback = null, f = d.priorityLevel;
          var se = G(d.expirationTime <= L);
          L = e.unstable_now(), typeof se == "function" ? d.callback = se : d === n(l) && r(l), v(L);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Ve = !0;
      else {
        var Te = n(c);
        Te !== null && z(b, Te.startTime - L), Ve = !1;
      }
      return Ve;
    } finally {
      d = null, f = $, g = !1;
    }
  }
  var C = !1, E = null, T = -1, j = 5, M = -1;
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
        L ? F() : (C = !1, E = null);
      }
    } else C = !1;
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
    E = P, C || (C = !0, F());
  }
  function z(P, L) {
    T = S(function() {
      P(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, V(k));
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
    return se = $ + se, P = { id: u++, callback: L, priorityLevel: P, startTime: $, expirationTime: se, sortIndex: -1 }, $ > G ? (P.sortIndex = $, t(c, P), n(l) === null && P === n(c) && (y ? (m(T), T = -1) : y = !0, z(b, $ - G))) : (P.sortIndex = se, t(l, P), w || g || (w = !0, V(k))), P;
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
var s1 = x, ut = o1;
function A(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Hm = /* @__PURE__ */ new Set(), rs = {};
function vr(e, t) {
  eo(e, t), eo(e + "Capture", t);
}
function eo(e, t) {
  for (rs[e] = t, e = 0; e < t.length; e++) Hm.add(t[e]);
}
var rn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ec = Object.prototype.hasOwnProperty, i1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Mf = {}, Af = {};
function a1(e) {
  return ec.call(Af, e) ? !0 : ec.call(Mf, e) ? !1 : i1.test(e) ? Af[e] = !0 : (Mf[e] = !0, !1);
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
function Ze(e, t, n, r, o, s, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = i;
}
var Fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Fe[e] = new Ze(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Fe[t] = new Ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Fe[e] = new Ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Fe[e] = new Ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Fe[e] = new Ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Fe[e] = new Ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Fe[e] = new Ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Fe[e] = new Ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Fe[e] = new Ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Eu = /[\-:]([a-z])/g;
function Tu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Eu,
    Tu
  );
  Fe[t] = new Ze(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Eu, Tu);
  Fe[t] = new Ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Eu, Tu);
  Fe[t] = new Ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Fe[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new Ze("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Fe[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Pu(e, t, n, r) {
  var o = Fe.hasOwnProperty(t) ? Fe[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (c1(t, n, o, r) && (n = null), r || o === null ? a1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var dn = s1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ws = Symbol.for("react.element"), Dr = Symbol.for("react.portal"), Nr = Symbol.for("react.fragment"), Du = Symbol.for("react.strict_mode"), tc = Symbol.for("react.profiler"), Km = Symbol.for("react.provider"), Gm = Symbol.for("react.context"), Nu = Symbol.for("react.forward_ref"), nc = Symbol.for("react.suspense"), rc = Symbol.for("react.suspense_list"), Mu = Symbol.for("react.memo"), wn = Symbol.for("react.lazy"), Ym = Symbol.for("react.offscreen"), jf = Symbol.iterator;
function Eo(e) {
  return e === null || typeof e != "object" ? null : (e = jf && e[jf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ve = Object.assign, sl;
function Io(e) {
  if (sl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    sl = t && t[1] || "";
  }
  return `
` + sl + e;
}
var il = !1;
function al(e, t) {
  if (!e || il) return "";
  il = !0;
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
    il = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Io(e) : "";
}
function u1(e) {
  switch (e.tag) {
    case 5:
      return Io(e.type);
    case 16:
      return Io("Lazy");
    case 13:
      return Io("Suspense");
    case 19:
      return Io("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = al(e.type, !1), e;
    case 11:
      return e = al(e.type.render, !1), e;
    case 1:
      return e = al(e.type, !0), e;
    default:
      return "";
  }
}
function oc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Nr:
      return "Fragment";
    case Dr:
      return "Portal";
    case tc:
      return "Profiler";
    case Du:
      return "StrictMode";
    case nc:
      return "Suspense";
    case rc:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Gm:
      return (e.displayName || "Context") + ".Consumer";
    case Km:
      return (e._context.displayName || "Context") + ".Provider";
    case Nu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Mu:
      return t = e.displayName || null, t !== null ? t : oc(e.type) || "Memo";
    case wn:
      t = e._payload, e = e._init;
      try {
        return oc(e(t));
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
      return oc(t);
    case 8:
      return t === Du ? "StrictMode" : "Mode";
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
function _n(e) {
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
function Hs(e) {
  e._valueTracker || (e._valueTracker = f1(e));
}
function Qm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Xm(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Bi(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function sc(e, t) {
  var n = t.checked;
  return ve({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Rf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = _n(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function qm(e, t) {
  t = t.checked, t != null && Pu(e, "checked", t, !1);
}
function ic(e, t) {
  qm(e, t);
  var n = _n(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ac(e, t.type, n) : t.hasOwnProperty("defaultValue") && ac(e, t.type, _n(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Lf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ac(e, t, n) {
  (t !== "number" || Bi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Oo = Array.isArray;
function Hr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + _n(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function lc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return ve({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function _f(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(A(92));
      if (Oo(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: _n(n) };
}
function Zm(e, t) {
  var n = _n(t.value), r = _n(t.defaultValue);
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
function cc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Jm(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ks, eg = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Ks = Ks || document.createElement("div"), Ks.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ks.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function os(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Wo = {
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
Object.keys(Wo).forEach(function(e) {
  p1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Wo[t] = Wo[e];
  });
});
function tg(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Wo.hasOwnProperty(e) && Wo[e] ? ("" + t).trim() : t + "px";
}
function ng(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = tg(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var h1 = ve({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function uc(e, t) {
  if (t) {
    if (h1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function dc(e, t) {
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
var fc = null;
function Au(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var pc = null, Kr = null, Gr = null;
function Of(e) {
  if (e = Rs(e)) {
    if (typeof pc != "function") throw Error(A(280));
    var t = e.stateNode;
    t && (t = Na(t), pc(e.stateNode, e.type, t));
  }
}
function rg(e) {
  Kr ? Gr ? Gr.push(e) : Gr = [e] : Kr = e;
}
function og() {
  if (Kr) {
    var e = Kr, t = Gr;
    if (Gr = Kr = null, Of(e), t) for (e = 0; e < t.length; e++) Of(t[e]);
  }
}
function sg(e, t) {
  return e(t);
}
function ig() {
}
var ll = !1;
function ag(e, t, n) {
  if (ll) return e(t, n);
  ll = !0;
  try {
    return sg(e, t, n);
  } finally {
    ll = !1, (Kr !== null || Gr !== null) && (ig(), og());
  }
}
function ss(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Na(n);
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
var hc = !1;
if (rn) try {
  var To = {};
  Object.defineProperty(To, "passive", { get: function() {
    hc = !0;
  } }), window.addEventListener("test", To, To), window.removeEventListener("test", To, To);
} catch {
  hc = !1;
}
function m1(e, t, n, r, o, s, i, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var Ho = !1, $i = null, Ui = !1, mc = null, g1 = { onError: function(e) {
  Ho = !0, $i = e;
} };
function y1(e, t, n, r, o, s, i, a, l) {
  Ho = !1, $i = null, m1.apply(g1, arguments);
}
function v1(e, t, n, r, o, s, i, a, l) {
  if (y1.apply(this, arguments), Ho) {
    if (Ho) {
      var c = $i;
      Ho = !1, $i = null;
    } else throw Error(A(198));
    Ui || (Ui = !0, mc = c);
  }
}
function xr(e) {
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
  if (xr(e) !== e) throw Error(A(188));
}
function x1(e) {
  var t = e.alternate;
  if (!t) {
    if (t = xr(e), t === null) throw Error(A(188));
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
var dg = ut.unstable_scheduleCallback, Vf = ut.unstable_cancelCallback, w1 = ut.unstable_shouldYield, S1 = ut.unstable_requestPaint, Ee = ut.unstable_now, b1 = ut.unstable_getCurrentPriorityLevel, ju = ut.unstable_ImmediatePriority, fg = ut.unstable_UserBlockingPriority, Wi = ut.unstable_NormalPriority, k1 = ut.unstable_LowPriority, pg = ut.unstable_IdlePriority, Ea = null, zt = null;
function C1(e) {
  if (zt && typeof zt.onCommitFiberRoot == "function") try {
    zt.onCommitFiberRoot(Ea, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Nt = Math.clz32 ? Math.clz32 : P1, E1 = Math.log, T1 = Math.LN2;
function P1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (E1(e) / T1 | 0) | 0;
}
var Gs = 64, Ys = 4194304;
function Fo(e) {
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
function Hi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, s = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var a = i & ~o;
    a !== 0 ? r = Fo(a) : (s &= i, s !== 0 && (r = Fo(s)));
  } else i = n & ~o, i !== 0 ? r = Fo(i) : s !== 0 && (r = Fo(s));
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
function gc(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function hg() {
  var e = Gs;
  return Gs <<= 1, !(Gs & 4194240) && (Gs = 64), e;
}
function cl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function As(e, t, n) {
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
function Ru(e, t) {
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
var gg, Lu, yg, vg, xg, yc = !1, Xs = [], Tn = null, Pn = null, Dn = null, is = /* @__PURE__ */ new Map(), as = /* @__PURE__ */ new Map(), bn = [], A1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function zf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Tn = null;
      break;
    case "dragenter":
    case "dragleave":
      Pn = null;
      break;
    case "mouseover":
    case "mouseout":
      Dn = null;
      break;
    case "pointerover":
    case "pointerout":
      is.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      as.delete(t.pointerId);
  }
}
function Po(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [o] }, t !== null && (t = Rs(t), t !== null && Lu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function j1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Tn = Po(Tn, e, t, n, r, o), !0;
    case "dragenter":
      return Pn = Po(Pn, e, t, n, r, o), !0;
    case "mouseover":
      return Dn = Po(Dn, e, t, n, r, o), !0;
    case "pointerover":
      var s = o.pointerId;
      return is.set(s, Po(is.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return s = o.pointerId, as.set(s, Po(as.get(s) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function wg(e) {
  var t = nr(e.target);
  if (t !== null) {
    var n = xr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = lg(n), t !== null) {
          e.blockedOn = t, xg(e.priority, function() {
            yg(n);
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
function ki(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = vc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      fc = r, n.target.dispatchEvent(r), fc = null;
    } else return t = Rs(n), t !== null && Lu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Bf(e, t, n) {
  ki(e) && n.delete(t);
}
function R1() {
  yc = !1, Tn !== null && ki(Tn) && (Tn = null), Pn !== null && ki(Pn) && (Pn = null), Dn !== null && ki(Dn) && (Dn = null), is.forEach(Bf), as.forEach(Bf);
}
function Do(e, t) {
  e.blockedOn === t && (e.blockedOn = null, yc || (yc = !0, ut.unstable_scheduleCallback(ut.unstable_NormalPriority, R1)));
}
function ls(e) {
  function t(o) {
    return Do(o, e);
  }
  if (0 < Xs.length) {
    Do(Xs[0], e);
    for (var n = 1; n < Xs.length; n++) {
      var r = Xs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Tn !== null && Do(Tn, e), Pn !== null && Do(Pn, e), Dn !== null && Do(Dn, e), is.forEach(t), as.forEach(t), n = 0; n < bn.length; n++) r = bn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < bn.length && (n = bn[0], n.blockedOn === null); ) wg(n), n.blockedOn === null && bn.shift();
}
var Yr = dn.ReactCurrentBatchConfig, Ki = !0;
function L1(e, t, n, r) {
  var o = ie, s = Yr.transition;
  Yr.transition = null;
  try {
    ie = 1, _u(e, t, n, r);
  } finally {
    ie = o, Yr.transition = s;
  }
}
function _1(e, t, n, r) {
  var o = ie, s = Yr.transition;
  Yr.transition = null;
  try {
    ie = 4, _u(e, t, n, r);
  } finally {
    ie = o, Yr.transition = s;
  }
}
function _u(e, t, n, r) {
  if (Ki) {
    var o = vc(e, t, n, r);
    if (o === null) xl(e, t, r, Gi, n), zf(e, r);
    else if (j1(o, e, t, n, r)) r.stopPropagation();
    else if (zf(e, r), t & 4 && -1 < A1.indexOf(e)) {
      for (; o !== null; ) {
        var s = Rs(o);
        if (s !== null && gg(s), s = vc(e, t, n, r), s === null && xl(e, t, r, Gi, n), s === o) break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else xl(e, t, r, null, n);
  }
}
var Gi = null;
function vc(e, t, n, r) {
  if (Gi = null, e = Au(r), e = nr(e), e !== null) if (t = xr(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = lg(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Gi = e, null;
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
        case ju:
          return 1;
        case fg:
          return 4;
        case Wi:
        case k1:
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
var Cn = null, Iu = null, Ci = null;
function bg() {
  if (Ci) return Ci;
  var e, t = Iu, n = t.length, r, o = "value" in Cn ? Cn.value : Cn.textContent, s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++) ;
  return Ci = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Ei(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Qs() {
  return !0;
}
function $f() {
  return !1;
}
function pt(e) {
  function t(n, r, o, s, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = s, this.target = i, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(s) : s[a]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Qs : $f, this.isPropagationStopped = $f, this;
  }
  return ve(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Qs);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Qs);
  }, persist: function() {
  }, isPersistent: Qs }), t;
}
var mo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ou = pt(mo), js = ve({}, mo, { view: 0, detail: 0 }), I1 = pt(js), ul, dl, No, Ta = ve({}, js, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Fu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== No && (No && e.type === "mousemove" ? (ul = e.screenX - No.screenX, dl = e.screenY - No.screenY) : dl = ul = 0, No = e), ul);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : dl;
} }), Uf = pt(Ta), O1 = ve({}, Ta, { dataTransfer: 0 }), F1 = pt(O1), V1 = ve({}, js, { relatedTarget: 0 }), fl = pt(V1), z1 = ve({}, mo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), B1 = pt(z1), $1 = ve({}, mo, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), U1 = pt($1), W1 = ve({}, mo, { data: 0 }), Wf = pt(W1), H1 = {
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
function Fu() {
  return Y1;
}
var X1 = ve({}, js, { key: function(e) {
  if (e.key) {
    var t = H1[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ei(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? K1[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Fu, charCode: function(e) {
  return e.type === "keypress" ? Ei(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ei(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Q1 = pt(X1), q1 = ve({}, Ta, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Hf = pt(q1), Z1 = ve({}, js, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Fu }), J1 = pt(Z1), eS = ve({}, mo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), tS = pt(eS), nS = ve({}, Ta, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), rS = pt(nS), oS = [9, 13, 27, 32], Vu = rn && "CompositionEvent" in window, Ko = null;
rn && "documentMode" in document && (Ko = document.documentMode);
var sS = rn && "TextEvent" in window && !Ko, kg = rn && (!Vu || Ko && 8 < Ko && 11 >= Ko), Kf = " ", Gf = !1;
function Cg(e, t) {
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
var Mr = !1;
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
  if (Mr) return e === "compositionend" || !Vu && Cg(e, t) ? (e = bg(), Ci = Iu = Cn = null, Mr = !1, e) : null;
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
      return kg && t.locale !== "ko" ? null : t.data;
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
  rg(r), t = Yi(t, "onChange"), 0 < t.length && (n = new Ou("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Go = null, cs = null;
function cS(e) {
  Og(e, 0);
}
function Pa(e) {
  var t = Rr(e);
  if (Qm(t)) return e;
}
function uS(e, t) {
  if (e === "change") return t;
}
var Pg = !1;
if (rn) {
  var pl;
  if (rn) {
    var hl = "oninput" in document;
    if (!hl) {
      var Xf = document.createElement("div");
      Xf.setAttribute("oninput", "return;"), hl = typeof Xf.oninput == "function";
    }
    pl = hl;
  } else pl = !1;
  Pg = pl && (!document.documentMode || 9 < document.documentMode);
}
function Qf() {
  Go && (Go.detachEvent("onpropertychange", Dg), cs = Go = null);
}
function Dg(e) {
  if (e.propertyName === "value" && Pa(cs)) {
    var t = [];
    Tg(t, cs, e, Au(e)), ag(cS, t);
  }
}
function dS(e, t, n) {
  e === "focusin" ? (Qf(), Go = t, cs = n, Go.attachEvent("onpropertychange", Dg)) : e === "focusout" && Qf();
}
function fS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Pa(cs);
}
function pS(e, t) {
  if (e === "click") return Pa(t);
}
function hS(e, t) {
  if (e === "input" || e === "change") return Pa(t);
}
function mS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var At = typeof Object.is == "function" ? Object.is : mS;
function us(e, t) {
  if (At(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ec.call(t, o) || !At(e[o], t[o])) return !1;
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
  for (var e = window, t = Bi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Bi(e.document);
  }
  return t;
}
function zu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function gS(e) {
  var t = Mg(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Ng(n.ownerDocument.documentElement, n)) {
    if (r !== null && zu(n)) {
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
var yS = rn && "documentMode" in document && 11 >= document.documentMode, Ar = null, xc = null, Yo = null, wc = !1;
function Jf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wc || Ar == null || Ar !== Bi(r) || (r = Ar, "selectionStart" in r && zu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Yo && us(Yo, r) || (Yo = r, r = Yi(xc, "onSelect"), 0 < r.length && (t = new Ou("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ar)));
}
function qs(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var jr = { animationend: qs("Animation", "AnimationEnd"), animationiteration: qs("Animation", "AnimationIteration"), animationstart: qs("Animation", "AnimationStart"), transitionend: qs("Transition", "TransitionEnd") }, ml = {}, Ag = {};
rn && (Ag = document.createElement("div").style, "AnimationEvent" in window || (delete jr.animationend.animation, delete jr.animationiteration.animation, delete jr.animationstart.animation), "TransitionEvent" in window || delete jr.transitionend.transition);
function Da(e) {
  if (ml[e]) return ml[e];
  if (!jr[e]) return e;
  var t = jr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ag) return ml[e] = t[n];
  return e;
}
var jg = Da("animationend"), Rg = Da("animationiteration"), Lg = Da("animationstart"), _g = Da("transitionend"), Ig = /* @__PURE__ */ new Map(), ep = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Un(e, t) {
  Ig.set(e, t), vr(t, [e]);
}
for (var gl = 0; gl < ep.length; gl++) {
  var yl = ep[gl], vS = yl.toLowerCase(), xS = yl[0].toUpperCase() + yl.slice(1);
  Un(vS, "on" + xS);
}
Un(jg, "onAnimationEnd");
Un(Rg, "onAnimationIteration");
Un(Lg, "onAnimationStart");
Un("dblclick", "onDoubleClick");
Un("focusin", "onFocus");
Un("focusout", "onBlur");
Un(_g, "onTransitionEnd");
eo("onMouseEnter", ["mouseout", "mouseover"]);
eo("onMouseLeave", ["mouseout", "mouseover"]);
eo("onPointerEnter", ["pointerout", "pointerover"]);
eo("onPointerLeave", ["pointerout", "pointerover"]);
vr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
vr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
vr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
vr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
vr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
vr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Vo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), wS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));
function tp(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, v1(r, t, void 0, e), e.currentTarget = null;
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
  if (Ui) throw e = mc, Ui = !1, mc = null, e;
}
function ce(e, t) {
  var n = t[Ec];
  n === void 0 && (n = t[Ec] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Fg(t, e, 2, !1), n.add(r));
}
function vl(e, t, n) {
  var r = 0;
  t && (r |= 4), Fg(n, e, r, t);
}
var Zs = "_reactListening" + Math.random().toString(36).slice(2);
function ds(e) {
  if (!e[Zs]) {
    e[Zs] = !0, Hm.forEach(function(n) {
      n !== "selectionchange" && (wS.has(n) || vl(n, !1, e), vl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Zs] || (t[Zs] = !0, vl("selectionchange", !1, t));
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
      o = _u;
  }
  n = o.bind(null, t, n, e), o = void 0, !hc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function xl(e, t, n, r, o) {
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
        if (i = nr(a), i === null) return;
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
    var c = s, u = Au(n), d = [];
    e: {
      var f = Ig.get(e);
      if (f !== void 0) {
        var g = Ou, w = e;
        switch (e) {
          case "keypress":
            if (Ei(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Q1;
            break;
          case "focusin":
            w = "focus", g = fl;
            break;
          case "focusout":
            w = "blur", g = fl;
            break;
          case "beforeblur":
          case "afterblur":
            g = fl;
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
        var y = (t & 4) !== 0, S = !y && e === "scroll", m = y ? f !== null ? f + "Capture" : null : f;
        y = [];
        for (var h = c, v; h !== null; ) {
          v = h;
          var b = v.stateNode;
          if (v.tag === 5 && b !== null && (v = b, m !== null && (b = ss(h, m), b != null && y.push(fs(h, b, v)))), S) break;
          h = h.return;
        }
        0 < y.length && (f = new g(f, w, null, n, u), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", f && n !== fc && (w = n.relatedTarget || n.fromElement) && (nr(w) || w[on])) break e;
        if ((g || f) && (f = u.window === u ? u : (f = u.ownerDocument) ? f.defaultView || f.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = c, w = w ? nr(w) : null, w !== null && (S = xr(w), w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = c), g !== w)) {
          if (y = Uf, b = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (y = Hf, b = "onPointerLeave", m = "onPointerEnter", h = "pointer"), S = g == null ? f : Rr(g), v = w == null ? f : Rr(w), f = new y(b, h + "leave", g, n, u), f.target = S, f.relatedTarget = v, b = null, nr(u) === c && (y = new y(m, h + "enter", w, n, u), y.target = v, y.relatedTarget = S, b = y), S = b, g && w) t: {
            for (y = g, m = w, h = 0, v = y; v; v = kr(v)) h++;
            for (v = 0, b = m; b; b = kr(b)) v++;
            for (; 0 < h - v; ) y = kr(y), h--;
            for (; 0 < v - h; ) m = kr(m), v--;
            for (; h--; ) {
              if (y === m || m !== null && y === m.alternate) break t;
              y = kr(y), m = kr(m);
            }
            y = null;
          }
          else y = null;
          g !== null && np(d, f, g, y, !1), w !== null && S !== null && np(d, S, w, y, !0);
        }
      }
      e: {
        if (f = c ? Rr(c) : window, g = f.nodeName && f.nodeName.toLowerCase(), g === "select" || g === "input" && f.type === "file") var k = uS;
        else if (Yf(f)) if (Pg) k = hS;
        else {
          k = fS;
          var C = dS;
        }
        else (g = f.nodeName) && g.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = pS);
        if (k && (k = k(e, c))) {
          Tg(d, k, n, u);
          break e;
        }
        C && C(e, f, c), e === "focusout" && (C = f._wrapperState) && C.controlled && f.type === "number" && ac(f, "number", f.value);
      }
      switch (C = c ? Rr(c) : window, e) {
        case "focusin":
          (Yf(C) || C.contentEditable === "true") && (Ar = C, xc = c, Yo = null);
          break;
        case "focusout":
          Yo = xc = Ar = null;
          break;
        case "mousedown":
          wc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          wc = !1, Jf(d, n, u);
          break;
        case "selectionchange":
          if (yS) break;
        case "keydown":
        case "keyup":
          Jf(d, n, u);
      }
      var E;
      if (Vu) e: {
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
      else Mr ? Cg(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (kg && n.locale !== "ko" && (Mr || T !== "onCompositionStart" ? T === "onCompositionEnd" && Mr && (E = bg()) : (Cn = u, Iu = "value" in Cn ? Cn.value : Cn.textContent, Mr = !0)), C = Yi(c, T), 0 < C.length && (T = new Wf(T, e, null, n, u), d.push({ event: T, listeners: C }), E ? T.data = E : (E = Eg(n), E !== null && (T.data = E)))), (E = sS ? iS(e, n) : aS(e, n)) && (c = Yi(c, "onBeforeInput"), 0 < c.length && (u = new Wf("onBeforeInput", "beforeinput", null, n, u), d.push({ event: u, listeners: c }), u.data = E));
    }
    Og(d, t);
  });
}
function fs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Yi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, s = o.stateNode;
    o.tag === 5 && s !== null && (o = s, s = ss(e, n), s != null && r.unshift(fs(e, s, o)), s = ss(e, t), s != null && r.push(fs(e, s, o))), e = e.return;
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
    a.tag === 5 && c !== null && (a = c, o ? (l = ss(n, s), l != null && i.unshift(fs(n, l, a))) : o || (l = ss(n, s), l != null && i.push(fs(n, l, a)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var SS = /\r\n?/g, bS = /\u0000|\uFFFD/g;
function rp(e) {
  return (typeof e == "string" ? e : "" + e).replace(SS, `
`).replace(bS, "");
}
function Js(e, t, n) {
  if (t = rp(t), rp(e) !== t && n) throw Error(A(425));
}
function Xi() {
}
var Sc = null, bc = null;
function kc(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Cc = typeof setTimeout == "function" ? setTimeout : void 0, kS = typeof clearTimeout == "function" ? clearTimeout : void 0, op = typeof Promise == "function" ? Promise : void 0, CS = typeof queueMicrotask == "function" ? queueMicrotask : typeof op < "u" ? function(e) {
  return op.resolve(null).then(e).catch(ES);
} : Cc;
function ES(e) {
  setTimeout(function() {
    throw e;
  });
}
function wl(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), ls(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  ls(t);
}
function Nn(e) {
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
var go = Math.random().toString(36).slice(2), Ot = "__reactFiber$" + go, ps = "__reactProps$" + go, on = "__reactContainer$" + go, Ec = "__reactEvents$" + go, TS = "__reactListeners$" + go, PS = "__reactHandles$" + go;
function nr(e) {
  var t = e[Ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[on] || n[Ot]) {
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
function Rs(e) {
  return e = e[Ot] || e[on], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Rr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function Na(e) {
  return e[ps] || null;
}
var Tc = [], Lr = -1;
function Wn(e) {
  return { current: e };
}
function ue(e) {
  0 > Lr || (e.current = Tc[Lr], Tc[Lr] = null, Lr--);
}
function ae(e, t) {
  Lr++, Tc[Lr] = e.current, e.current = t;
}
var In = {}, Ge = Wn(In), tt = Wn(!1), cr = In;
function to(e, t) {
  var n = e.type.contextTypes;
  if (!n) return In;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, s;
  for (s in n) o[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function nt(e) {
  return e = e.childContextTypes, e != null;
}
function Qi() {
  ue(tt), ue(Ge);
}
function ip(e, t, n) {
  if (Ge.current !== In) throw Error(A(168));
  ae(Ge, t), ae(tt, n);
}
function Vg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(A(108, d1(e) || "Unknown", o));
  return ve({}, n, r);
}
function qi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || In, cr = Ge.current, ae(Ge, e), ae(tt, tt.current), !0;
}
function ap(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n ? (e = Vg(e, t, cr), r.__reactInternalMemoizedMergedChildContext = e, ue(tt), ue(Ge), ae(Ge, e)) : ue(tt), ae(tt, n);
}
var Xt = null, Ma = !1, Sl = !1;
function zg(e) {
  Xt === null ? Xt = [e] : Xt.push(e);
}
function DS(e) {
  Ma = !0, zg(e);
}
function Hn() {
  if (!Sl && Xt !== null) {
    Sl = !0;
    var e = 0, t = ie;
    try {
      var n = Xt;
      for (ie = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Xt = null, Ma = !1;
    } catch (o) {
      throw Xt !== null && (Xt = Xt.slice(e + 1)), dg(ju, Hn), o;
    } finally {
      ie = t, Sl = !1;
    }
  }
  return null;
}
var _r = [], Ir = 0, Zi = null, Ji = 0, gt = [], yt = 0, ur = null, Qt = 1, qt = "";
function Zn(e, t) {
  _r[Ir++] = Ji, _r[Ir++] = Zi, Zi = e, Ji = t;
}
function Bg(e, t, n) {
  gt[yt++] = Qt, gt[yt++] = qt, gt[yt++] = ur, ur = e;
  var r = Qt;
  e = qt;
  var o = 32 - Nt(r) - 1;
  r &= ~(1 << o), n += 1;
  var s = 32 - Nt(t) + o;
  if (30 < s) {
    var i = o - o % 5;
    s = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Qt = 1 << 32 - Nt(t) + o | n << o | r, qt = s + e;
  } else Qt = 1 << s | n << o | r, qt = e;
}
function Bu(e) {
  e.return !== null && (Zn(e, 1), Bg(e, 1, 0));
}
function $u(e) {
  for (; e === Zi; ) Zi = _r[--Ir], _r[Ir] = null, Ji = _r[--Ir], _r[Ir] = null;
  for (; e === ur; ) ur = gt[--yt], gt[yt] = null, qt = gt[--yt], gt[yt] = null, Qt = gt[--yt], gt[yt] = null;
}
var at = null, it = null, fe = !1, Dt = null;
function $g(e, t) {
  var n = vt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function lp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, at = e, it = Nn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, at = e, it = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ur !== null ? { id: Qt, overflow: qt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = vt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, at = e, it = null, !0) : !1;
    default:
      return !1;
  }
}
function Pc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Dc(e) {
  if (fe) {
    var t = it;
    if (t) {
      var n = t;
      if (!lp(e, t)) {
        if (Pc(e)) throw Error(A(418));
        t = Nn(n.nextSibling);
        var r = at;
        t && lp(e, t) ? $g(r, n) : (e.flags = e.flags & -4097 | 2, fe = !1, at = e);
      }
    } else {
      if (Pc(e)) throw Error(A(418));
      e.flags = e.flags & -4097 | 2, fe = !1, at = e;
    }
  }
}
function cp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  at = e;
}
function ei(e) {
  if (e !== at) return !1;
  if (!fe) return cp(e), fe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !kc(e.type, e.memoizedProps)), t && (t = it)) {
    if (Pc(e)) throw Ug(), Error(A(418));
    for (; t; ) $g(e, t), t = Nn(t.nextSibling);
  }
  if (cp(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              it = Nn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      it = null;
    }
  } else it = at ? Nn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ug() {
  for (var e = it; e; ) e = Nn(e.nextSibling);
}
function no() {
  it = at = null, fe = !1;
}
function Uu(e) {
  Dt === null ? Dt = [e] : Dt.push(e);
}
var NS = dn.ReactCurrentBatchConfig;
function Mo(e, t, n) {
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
function ti(e, t) {
  throw e = Object.prototype.toString.call(t), Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function up(e) {
  var t = e._init;
  return t(e._payload);
}
function Wg(e) {
  function t(m, h) {
    if (e) {
      var v = m.deletions;
      v === null ? (m.deletions = [h], m.flags |= 16) : v.push(h);
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
    return m = Rn(m, h), m.index = 0, m.sibling = null, m;
  }
  function s(m, h, v) {
    return m.index = v, e ? (v = m.alternate, v !== null ? (v = v.index, v < h ? (m.flags |= 2, h) : v) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, v, b) {
    return h === null || h.tag !== 6 ? (h = Dl(v, m.mode, b), h.return = m, h) : (h = o(h, v), h.return = m, h);
  }
  function l(m, h, v, b) {
    var k = v.type;
    return k === Nr ? u(m, h, v.props.children, b, v.key) : h !== null && (h.elementType === k || typeof k == "object" && k !== null && k.$$typeof === wn && up(k) === h.type) ? (b = o(h, v.props), b.ref = Mo(m, h, v), b.return = m, b) : (b = ji(v.type, v.key, v.props, null, m.mode, b), b.ref = Mo(m, h, v), b.return = m, b);
  }
  function c(m, h, v, b) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = Nl(v, m.mode, b), h.return = m, h) : (h = o(h, v.children || []), h.return = m, h);
  }
  function u(m, h, v, b, k) {
    return h === null || h.tag !== 7 ? (h = ar(v, m.mode, b, k), h.return = m, h) : (h = o(h, v), h.return = m, h);
  }
  function d(m, h, v) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = Dl("" + h, m.mode, v), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ws:
          return v = ji(h.type, h.key, h.props, null, m.mode, v), v.ref = Mo(m, null, h), v.return = m, v;
        case Dr:
          return h = Nl(h, m.mode, v), h.return = m, h;
        case wn:
          var b = h._init;
          return d(m, b(h._payload), v);
      }
      if (Oo(h) || Eo(h)) return h = ar(h, m.mode, v, null), h.return = m, h;
      ti(m, h);
    }
    return null;
  }
  function f(m, h, v, b) {
    var k = h !== null ? h.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number") return k !== null ? null : a(m, h, "" + v, b);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ws:
          return v.key === k ? l(m, h, v, b) : null;
        case Dr:
          return v.key === k ? c(m, h, v, b) : null;
        case wn:
          return k = v._init, f(
            m,
            h,
            k(v._payload),
            b
          );
      }
      if (Oo(v) || Eo(v)) return k !== null ? null : u(m, h, v, b, null);
      ti(m, v);
    }
    return null;
  }
  function g(m, h, v, b, k) {
    if (typeof b == "string" && b !== "" || typeof b == "number") return m = m.get(v) || null, a(h, m, "" + b, k);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Ws:
          return m = m.get(b.key === null ? v : b.key) || null, l(h, m, b, k);
        case Dr:
          return m = m.get(b.key === null ? v : b.key) || null, c(h, m, b, k);
        case wn:
          var C = b._init;
          return g(m, h, v, C(b._payload), k);
      }
      if (Oo(b) || Eo(b)) return m = m.get(v) || null, u(h, m, b, k, null);
      ti(h, b);
    }
    return null;
  }
  function w(m, h, v, b) {
    for (var k = null, C = null, E = h, T = h = 0, j = null; E !== null && T < v.length; T++) {
      E.index > T ? (j = E, E = null) : j = E.sibling;
      var M = f(m, E, v[T], b);
      if (M === null) {
        E === null && (E = j);
        break;
      }
      e && E && M.alternate === null && t(m, E), h = s(M, h, T), C === null ? k = M : C.sibling = M, C = M, E = j;
    }
    if (T === v.length) return n(m, E), fe && Zn(m, T), k;
    if (E === null) {
      for (; T < v.length; T++) E = d(m, v[T], b), E !== null && (h = s(E, h, T), C === null ? k = E : C.sibling = E, C = E);
      return fe && Zn(m, T), k;
    }
    for (E = r(m, E); T < v.length; T++) j = g(E, m, T, v[T], b), j !== null && (e && j.alternate !== null && E.delete(j.key === null ? T : j.key), h = s(j, h, T), C === null ? k = j : C.sibling = j, C = j);
    return e && E.forEach(function(D) {
      return t(m, D);
    }), fe && Zn(m, T), k;
  }
  function y(m, h, v, b) {
    var k = Eo(v);
    if (typeof k != "function") throw Error(A(150));
    if (v = k.call(v), v == null) throw Error(A(151));
    for (var C = k = null, E = h, T = h = 0, j = null, M = v.next(); E !== null && !M.done; T++, M = v.next()) {
      E.index > T ? (j = E, E = null) : j = E.sibling;
      var D = f(m, E, M.value, b);
      if (D === null) {
        E === null && (E = j);
        break;
      }
      e && E && D.alternate === null && t(m, E), h = s(D, h, T), C === null ? k = D : C.sibling = D, C = D, E = j;
    }
    if (M.done) return n(
      m,
      E
    ), fe && Zn(m, T), k;
    if (E === null) {
      for (; !M.done; T++, M = v.next()) M = d(m, M.value, b), M !== null && (h = s(M, h, T), C === null ? k = M : C.sibling = M, C = M);
      return fe && Zn(m, T), k;
    }
    for (E = r(m, E); !M.done; T++, M = v.next()) M = g(E, m, T, M.value, b), M !== null && (e && M.alternate !== null && E.delete(M.key === null ? T : M.key), h = s(M, h, T), C === null ? k = M : C.sibling = M, C = M);
    return e && E.forEach(function(N) {
      return t(m, N);
    }), fe && Zn(m, T), k;
  }
  function S(m, h, v, b) {
    if (typeof v == "object" && v !== null && v.type === Nr && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ws:
          e: {
            for (var k = v.key, C = h; C !== null; ) {
              if (C.key === k) {
                if (k = v.type, k === Nr) {
                  if (C.tag === 7) {
                    n(m, C.sibling), h = o(C, v.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (C.elementType === k || typeof k == "object" && k !== null && k.$$typeof === wn && up(k) === C.type) {
                  n(m, C.sibling), h = o(C, v.props), h.ref = Mo(m, C, v), h.return = m, m = h;
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            v.type === Nr ? (h = ar(v.props.children, m.mode, b, v.key), h.return = m, m = h) : (b = ji(v.type, v.key, v.props, null, m.mode, b), b.ref = Mo(m, h, v), b.return = m, m = b);
          }
          return i(m);
        case Dr:
          e: {
            for (C = v.key; h !== null; ) {
              if (h.key === C) if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) {
                n(m, h.sibling), h = o(h, v.children || []), h.return = m, m = h;
                break e;
              } else {
                n(m, h);
                break;
              }
              else t(m, h);
              h = h.sibling;
            }
            h = Nl(v, m.mode, b), h.return = m, m = h;
          }
          return i(m);
        case wn:
          return C = v._init, S(m, h, C(v._payload), b);
      }
      if (Oo(v)) return w(m, h, v, b);
      if (Eo(v)) return y(m, h, v, b);
      ti(m, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, h !== null && h.tag === 6 ? (n(m, h.sibling), h = o(h, v), h.return = m, m = h) : (n(m, h), h = Dl(v, m.mode, b), h.return = m, m = h), i(m)) : n(m, h);
  }
  return S;
}
var ro = Wg(!0), Hg = Wg(!1), ea = Wn(null), ta = null, Or = null, Wu = null;
function Hu() {
  Wu = Or = ta = null;
}
function Ku(e) {
  var t = ea.current;
  ue(ea), e._currentValue = t;
}
function Nc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Xr(e, t) {
  ta = e, Wu = Or = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (et = !0), e.firstContext = null);
}
function wt(e) {
  var t = e._currentValue;
  if (Wu !== e) if (e = { context: e, memoizedValue: t, next: null }, Or === null) {
    if (ta === null) throw Error(A(308));
    Or = e, ta.dependencies = { lanes: 0, firstContext: e };
  } else Or = Or.next = e;
  return t;
}
var rr = null;
function Gu(e) {
  rr === null ? rr = [e] : rr.push(e);
}
function Kg(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Gu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, sn(e, r);
}
function sn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Sn = !1;
function Yu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Gg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Jt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Mn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, te & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, sn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Gu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, sn(e, n);
}
function Ti(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ru(e, n);
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
function na(e, t, n, r) {
  var o = e.updateQueue;
  Sn = !1;
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
          var w = e, y = a;
          switch (f = t, g = n, y.tag) {
            case 1:
              if (w = y.payload, typeof w == "function") {
                d = w.call(g, d, f);
                break e;
              }
              d = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = y.payload, f = typeof w == "function" ? w.call(g, d, f) : w, f == null) break e;
              d = ve({}, d, f);
              break e;
            case 2:
              Sn = !0;
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
    fr |= i, e.lanes = i, e.memoizedState = d;
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
var Ls = {}, Bt = Wn(Ls), hs = Wn(Ls), ms = Wn(Ls);
function or(e) {
  if (e === Ls) throw Error(A(174));
  return e;
}
function Xu(e, t) {
  switch (ae(ms, t), ae(hs, e), ae(Bt, Ls), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : cc(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = cc(t, e);
  }
  ue(Bt), ae(Bt, t);
}
function oo() {
  ue(Bt), ue(hs), ue(ms);
}
function Yg(e) {
  or(ms.current);
  var t = or(Bt.current), n = cc(t, e.type);
  t !== n && (ae(hs, e), ae(Bt, n));
}
function Qu(e) {
  hs.current === e && (ue(Bt), ue(hs));
}
var me = Wn(0);
function ra(e) {
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
var bl = [];
function qu() {
  for (var e = 0; e < bl.length; e++) bl[e]._workInProgressVersionPrimary = null;
  bl.length = 0;
}
var Pi = dn.ReactCurrentDispatcher, kl = dn.ReactCurrentBatchConfig, dr = 0, ye = null, Me = null, je = null, oa = !1, Xo = !1, gs = 0, MS = 0;
function $e() {
  throw Error(A(321));
}
function Zu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!At(e[n], t[n])) return !1;
  return !0;
}
function Ju(e, t, n, r, o, s) {
  if (dr = s, ye = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Pi.current = e === null || e.memoizedState === null ? LS : _S, e = n(r, o), Xo) {
    s = 0;
    do {
      if (Xo = !1, gs = 0, 25 <= s) throw Error(A(301));
      s += 1, je = Me = null, t.updateQueue = null, Pi.current = IS, e = n(r, o);
    } while (Xo);
  }
  if (Pi.current = sa, t = Me !== null && Me.next !== null, dr = 0, je = Me = ye = null, oa = !1, t) throw Error(A(300));
  return e;
}
function ed() {
  var e = gs !== 0;
  return gs = 0, e;
}
function It() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return je === null ? ye.memoizedState = je = e : je = je.next = e, je;
}
function St() {
  if (Me === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Me.next;
  var t = je === null ? ye.memoizedState : je.next;
  if (t !== null) je = t, Me = e;
  else {
    if (e === null) throw Error(A(310));
    Me = e, e = { memoizedState: Me.memoizedState, baseState: Me.baseState, baseQueue: Me.baseQueue, queue: Me.queue, next: null }, je === null ? ye.memoizedState = je = e : je = je.next = e;
  }
  return je;
}
function ys(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Cl(e) {
  var t = St(), n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = Me, o = r.baseQueue, s = n.pending;
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
      if ((dr & u) === u) l !== null && (l = l.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var d = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        l === null ? (a = l = d, i = r) : l = l.next = d, ye.lanes |= u, fr |= u;
      }
      c = c.next;
    } while (c !== null && c !== s);
    l === null ? i = r : l.next = a, At(r, t.memoizedState) || (et = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      s = o.lane, ye.lanes |= s, fr |= s, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function El(e) {
  var t = St(), n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      s = e(s, i.action), i = i.next;
    while (i !== o);
    At(s, t.memoizedState) || (et = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function Xg() {
}
function Qg(e, t) {
  var n = ye, r = St(), o = t(), s = !At(r.memoizedState, o);
  if (s && (r.memoizedState = o, et = !0), r = r.queue, td(Jg.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || je !== null && je.memoizedState.tag & 1) {
    if (n.flags |= 2048, vs(9, Zg.bind(null, n, r, o, t), void 0, null), Re === null) throw Error(A(349));
    dr & 30 || qg(n, t, o);
  }
  return o;
}
function qg(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ye.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ye.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Zg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ey(t) && ty(e);
}
function Jg(e, t, n) {
  return n(function() {
    ey(t) && ty(e);
  });
}
function ey(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !At(e, n);
  } catch {
    return !0;
  }
}
function ty(e) {
  var t = sn(e, 1);
  t !== null && Mt(t, e, 1, -1);
}
function pp(e) {
  var t = It();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ys, lastRenderedState: e }, t.queue = e, e = e.dispatch = RS.bind(null, ye, e), [t.memoizedState, e];
}
function vs(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ye.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ye.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function ny() {
  return St().memoizedState;
}
function Di(e, t, n, r) {
  var o = It();
  ye.flags |= e, o.memoizedState = vs(1 | t, n, void 0, r === void 0 ? null : r);
}
function Aa(e, t, n, r) {
  var o = St();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Me !== null) {
    var i = Me.memoizedState;
    if (s = i.destroy, r !== null && Zu(r, i.deps)) {
      o.memoizedState = vs(t, n, s, r);
      return;
    }
  }
  ye.flags |= e, o.memoizedState = vs(1 | t, n, s, r);
}
function hp(e, t) {
  return Di(8390656, 8, e, t);
}
function td(e, t) {
  return Aa(2048, 8, e, t);
}
function ry(e, t) {
  return Aa(4, 2, e, t);
}
function oy(e, t) {
  return Aa(4, 4, e, t);
}
function sy(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function iy(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Aa(4, 4, sy.bind(null, t, e), n);
}
function nd() {
}
function ay(e, t) {
  var n = St();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function ly(e, t) {
  var n = St();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function cy(e, t, n) {
  return dr & 21 ? (At(n, t) || (n = hg(), ye.lanes |= n, fr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, et = !0), e.memoizedState = n);
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
function uy() {
  return St().memoizedState;
}
function jS(e, t, n) {
  var r = jn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, dy(e)) fy(t, n);
  else if (n = Kg(e, t, n, r), n !== null) {
    var o = Qe();
    Mt(n, e, r, o), py(n, t, r);
  }
}
function RS(e, t, n) {
  var r = jn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dy(e)) fy(t, o);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var i = t.lastRenderedState, a = s(i, n);
      if (o.hasEagerState = !0, o.eagerState = a, At(a, i)) {
        var l = t.interleaved;
        l === null ? (o.next = o, Gu(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Kg(e, t, o, r), n !== null && (o = Qe(), Mt(n, e, r, o), py(n, t, r));
  }
}
function dy(e) {
  var t = e.alternate;
  return e === ye || t !== null && t === ye;
}
function fy(e, t) {
  Xo = oa = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function py(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ru(e, n);
  }
}
var sa = { readContext: wt, useCallback: $e, useContext: $e, useEffect: $e, useImperativeHandle: $e, useInsertionEffect: $e, useLayoutEffect: $e, useMemo: $e, useReducer: $e, useRef: $e, useState: $e, useDebugValue: $e, useDeferredValue: $e, useTransition: $e, useMutableSource: $e, useSyncExternalStore: $e, useId: $e, unstable_isNewReconciler: !1 }, LS = { readContext: wt, useCallback: function(e, t) {
  return It().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: wt, useEffect: hp, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Di(
    4194308,
    4,
    sy.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Di(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Di(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = It();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = It();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = jS.bind(null, ye, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = It();
  return e = { current: e }, t.memoizedState = e;
}, useState: pp, useDebugValue: nd, useDeferredValue: function(e) {
  return It().memoizedState = e;
}, useTransition: function() {
  var e = pp(!1), t = e[0];
  return e = AS.bind(null, e[1]), It().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ye, o = It();
  if (fe) {
    if (n === void 0) throw Error(A(407));
    n = n();
  } else {
    if (n = t(), Re === null) throw Error(A(349));
    dr & 30 || qg(r, t, n);
  }
  o.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return o.queue = s, hp(Jg.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, vs(9, Zg.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = It(), t = Re.identifierPrefix;
  if (fe) {
    var n = qt, r = Qt;
    n = (r & ~(1 << 32 - Nt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = gs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = MS++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, _S = {
  readContext: wt,
  useCallback: ay,
  useContext: wt,
  useEffect: td,
  useImperativeHandle: iy,
  useInsertionEffect: ry,
  useLayoutEffect: oy,
  useMemo: ly,
  useReducer: Cl,
  useRef: ny,
  useState: function() {
    return Cl(ys);
  },
  useDebugValue: nd,
  useDeferredValue: function(e) {
    var t = St();
    return cy(t, Me.memoizedState, e);
  },
  useTransition: function() {
    var e = Cl(ys)[0], t = St().memoizedState;
    return [e, t];
  },
  useMutableSource: Xg,
  useSyncExternalStore: Qg,
  useId: uy,
  unstable_isNewReconciler: !1
}, IS = { readContext: wt, useCallback: ay, useContext: wt, useEffect: td, useImperativeHandle: iy, useInsertionEffect: ry, useLayoutEffect: oy, useMemo: ly, useReducer: El, useRef: ny, useState: function() {
  return El(ys);
}, useDebugValue: nd, useDeferredValue: function(e) {
  var t = St();
  return Me === null ? t.memoizedState = e : cy(t, Me.memoizedState, e);
}, useTransition: function() {
  var e = El(ys)[0], t = St().memoizedState;
  return [e, t];
}, useMutableSource: Xg, useSyncExternalStore: Qg, useId: uy, unstable_isNewReconciler: !1 };
function Tt(e, t) {
  if (e && e.defaultProps) {
    t = ve({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Mc(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ve({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ja = { isMounted: function(e) {
  return (e = e._reactInternals) ? xr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qe(), o = jn(e), s = Jt(r, o);
  s.payload = t, n != null && (s.callback = n), t = Mn(e, s, o), t !== null && (Mt(t, e, o, r), Ti(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qe(), o = jn(e), s = Jt(r, o);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Mn(e, s, o), t !== null && (Mt(t, e, o, r), Ti(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Qe(), r = jn(e), o = Jt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Mn(e, o, r), t !== null && (Mt(t, e, r, n), Ti(t, e, r));
} };
function mp(e, t, n, r, o, s, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !us(n, r) || !us(o, s) : !0;
}
function hy(e, t, n) {
  var r = !1, o = In, s = t.contextType;
  return typeof s == "object" && s !== null ? s = wt(s) : (o = nt(t) ? cr : Ge.current, r = t.contextTypes, s = (r = r != null) ? to(e, o) : In), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ja, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function gp(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ja.enqueueReplaceState(t, t.state, null);
}
function Ac(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Yu(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? o.context = wt(s) : (s = nt(t) ? cr : Ge.current, o.context = to(e, s)), o.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Mc(e, t, s, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && ja.enqueueReplaceState(o, o.state, null), na(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function so(e, t) {
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
function Tl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function jc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var OS = typeof WeakMap == "function" ? WeakMap : Map;
function my(e, t, n) {
  n = Jt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    aa || (aa = !0, $c = r), jc(e, t);
  }, n;
}
function gy(e, t, n) {
  n = Jt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      jc(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    jc(e, t), typeof r != "function" && (An === null ? An = /* @__PURE__ */ new Set([this]) : An.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function yp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new OS();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = qS.bind(null, e, t, n), t.then(e, e));
}
function vp(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function xp(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Jt(-1, 1), t.tag = 2, Mn(n, t, 1))), n.lanes |= 1), e);
}
var FS = dn.ReactCurrentOwner, et = !1;
function Xe(e, t, n, r) {
  t.child = e === null ? Hg(t, null, n, r) : ro(t, e.child, n, r);
}
function wp(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return Xr(t, o), r = Ju(e, t, n, r, s, o), n = ed(), e !== null && !et ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, an(e, t, o)) : (fe && n && Bu(t), t.flags |= 1, Xe(e, t, r, o), t.child);
}
function Sp(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !ud(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, yy(e, t, s, r, o)) : (e = ji(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & o)) {
    var i = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : us, n(i, r) && e.ref === t.ref) return an(e, t, o);
  }
  return t.flags |= 1, e = Rn(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function yy(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (us(s, r) && e.ref === t.ref) if (et = !1, t.pendingProps = r = s, (e.lanes & o) !== 0) e.flags & 131072 && (et = !0);
    else return t.lanes = e.lanes, an(e, t, o);
  }
  return Rc(e, t, n, r, o);
}
function vy(e, t, n) {
  var r = t.pendingProps, o = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ae(Vr, ot), ot |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ae(Vr, ot), ot |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, ae(Vr, ot), ot |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, ae(Vr, ot), ot |= r;
  return Xe(e, t, o, n), t.child;
}
function xy(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Rc(e, t, n, r, o) {
  var s = nt(n) ? cr : Ge.current;
  return s = to(t, s), Xr(t, o), n = Ju(e, t, n, r, s, o), r = ed(), e !== null && !et ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, an(e, t, o)) : (fe && r && Bu(t), t.flags |= 1, Xe(e, t, n, o), t.child);
}
function bp(e, t, n, r, o) {
  if (nt(n)) {
    var s = !0;
    qi(t);
  } else s = !1;
  if (Xr(t, o), t.stateNode === null) Ni(e, t), hy(t, n, r), Ac(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, a = t.memoizedProps;
    i.props = a;
    var l = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = wt(c) : (c = nt(n) ? cr : Ge.current, c = to(t, c));
    var u = n.getDerivedStateFromProps, d = typeof u == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || l !== c) && gp(t, i, r, c), Sn = !1;
    var f = t.memoizedState;
    i.state = f, na(t, r, i, o), l = t.memoizedState, a !== r || f !== l || tt.current || Sn ? (typeof u == "function" && (Mc(t, n, u, r), l = t.memoizedState), (a = Sn || mp(t, n, a, r, f, l, c)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), i.props = r, i.state = l, i.context = c, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Gg(e, t), a = t.memoizedProps, c = t.type === t.elementType ? a : Tt(t.type, a), i.props = c, d = t.pendingProps, f = i.context, l = n.contextType, typeof l == "object" && l !== null ? l = wt(l) : (l = nt(n) ? cr : Ge.current, l = to(t, l));
    var g = n.getDerivedStateFromProps;
    (u = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== d || f !== l) && gp(t, i, r, l), Sn = !1, f = t.memoizedState, i.state = f, na(t, r, i, o);
    var w = t.memoizedState;
    a !== d || f !== w || tt.current || Sn ? (typeof g == "function" && (Mc(t, n, g, r), w = t.memoizedState), (c = Sn || mp(t, n, c, r, f, w, l) || !1) ? (u || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, l), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, l)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = l, r = c) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Lc(e, t, n, r, s, o);
}
function Lc(e, t, n, r, o, s) {
  xy(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && ap(t, n, !1), an(e, t, s);
  r = t.stateNode, FS.current = t;
  var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = ro(t, e.child, null, s), t.child = ro(t, null, a, s)) : Xe(e, t, a, s), t.memoizedState = r.state, o && ap(t, n, !0), t.child;
}
function wy(e) {
  var t = e.stateNode;
  t.pendingContext ? ip(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ip(e, t.context, !1), Xu(e, t.containerInfo);
}
function kp(e, t, n, r, o) {
  return no(), Uu(o), t.flags |= 256, Xe(e, t, n, r), t.child;
}
var _c = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ic(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Sy(e, t, n) {
  var r = t.pendingProps, o = me.current, s = !1, i = (t.flags & 128) !== 0, a;
  if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ae(me, o & 1), e === null)
    return Dc(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, i = { mode: "hidden", children: i }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = i) : s = _a(i, r, 0, null), e = ar(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Ic(n), t.memoizedState = _c, e) : rd(t, i));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return VS(e, t, i, r, a, o, n);
  if (s) {
    s = r.fallback, i = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Rn(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? s = Rn(a, s) : (s = ar(s, i, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, i = e.child.memoizedState, i = i === null ? Ic(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, s.memoizedState = i, s.childLanes = e.childLanes & ~n, t.memoizedState = _c, r;
  }
  return s = e.child, e = s.sibling, r = Rn(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function rd(e, t) {
  return t = _a({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ni(e, t, n, r) {
  return r !== null && Uu(r), ro(t, e.child, null, n), e = rd(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function VS(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Tl(Error(A(422))), ni(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, o = t.mode, r = _a({ mode: "visible", children: r.children }, o, 0, null), s = ar(s, o, i, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && ro(t, e.child, null, i), t.child.memoizedState = Ic(i), t.memoizedState = _c, s);
  if (!(t.mode & 1)) return ni(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
    return r = a, s = Error(A(419)), r = Tl(s, r, void 0), ni(e, t, i, r);
  }
  if (a = (i & e.childLanes) !== 0, et || a) {
    if (r = Re, r !== null) {
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
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== s.retryLane && (s.retryLane = o, sn(e, o), Mt(r, e, o, -1));
    }
    return cd(), r = Tl(Error(A(421))), ni(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ZS.bind(null, e), o._reactRetry = t, null) : (e = s.treeContext, it = Nn(o.nextSibling), at = t, fe = !0, Dt = null, e !== null && (gt[yt++] = Qt, gt[yt++] = qt, gt[yt++] = ur, Qt = e.id, qt = e.overflow, ur = t), t = rd(t, r.children), t.flags |= 4096, t);
}
function Cp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Nc(e.return, t, n);
}
function Pl(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = o);
}
function by(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, s = r.tail;
  if (Xe(e, t, r.children, n), r = me.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Cp(e, n, t);
      else if (e.tag === 19) Cp(e, n, t);
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
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && ra(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Pl(t, !1, o, n, s);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && ra(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Pl(t, !0, n, null, s);
      break;
    case "together":
      Pl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ni(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function an(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), fr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (e = t.child, n = Rn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Rn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function zS(e, t, n) {
  switch (t.tag) {
    case 3:
      wy(t), no();
      break;
    case 5:
      Yg(t);
      break;
    case 1:
      nt(t.type) && qi(t);
      break;
    case 4:
      Xu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      ae(ea, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ae(me, me.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Sy(e, t, n) : (ae(me, me.current & 1), e = an(e, t, n), e !== null ? e.sibling : null);
      ae(me, me.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return by(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ae(me, me.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, vy(e, t, n);
  }
  return an(e, t, n);
}
var ky, Oc, Cy, Ey;
ky = function(e, t) {
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
Oc = function() {
};
Cy = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, or(Bt.current);
    var s = null;
    switch (n) {
      case "input":
        o = sc(e, o), r = sc(e, r), s = [];
        break;
      case "select":
        o = ve({}, o, { value: void 0 }), r = ve({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        o = lc(e, o), r = lc(e, r), s = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Xi);
    }
    uc(n, r);
    var i;
    n = null;
    for (c in o) if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null) if (c === "style") {
      var a = o[c];
      for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (rs.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (a = o != null ? o[c] : void 0, r.hasOwnProperty(c) && l !== a && (l != null || a != null)) if (c === "style") if (a) {
        for (i in a) !a.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in l) l.hasOwnProperty(i) && a[i] !== l[i] && (n || (n = {}), n[i] = l[i]);
      } else n || (s || (s = []), s.push(
        c,
        n
      )), n = l;
      else c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (rs.hasOwnProperty(c) ? (l != null && c === "onScroll" && ce("scroll", e), s || a === l || (s = [])) : (s = s || []).push(c, l));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ey = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ao(e, t) {
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
  switch ($u(t), t.tag) {
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
      return nt(t.type) && Qi(), Ue(t), null;
    case 3:
      return r = t.stateNode, oo(), ue(tt), ue(Ge), qu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ei(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Dt !== null && (Hc(Dt), Dt = null))), Oc(e, t), Ue(t), null;
    case 5:
      Qu(t);
      var o = or(ms.current);
      if (n = t.type, e !== null && t.stateNode != null) Cy(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return Ue(t), null;
        }
        if (e = or(Bt.current), ei(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[Ot] = t, r[ps] = s, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < Vo.length; o++) ce(Vo[o], r);
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
          uc(n, s), o = null;
          for (var i in s) if (s.hasOwnProperty(i)) {
            var a = s[i];
            i === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && Js(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && Js(
              r.textContent,
              a,
              e
            ), o = ["children", "" + a]) : rs.hasOwnProperty(i) && a != null && i === "onScroll" && ce("scroll", r);
          }
          switch (n) {
            case "input":
              Hs(r), Lf(r, s, !0);
              break;
            case "textarea":
              Hs(r), If(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Xi);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Jm(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ot] = t, e[ps] = r, ky(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = dc(n, r), n) {
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
                for (o = 0; o < Vo.length; o++) ce(Vo[o], e);
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
                Rf(e, r), o = sc(e, r), ce("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ve({}, r, { value: void 0 }), ce("invalid", e);
                break;
              case "textarea":
                _f(e, r), o = lc(e, r), ce("invalid", e);
                break;
              default:
                o = r;
            }
            uc(n, o), a = o;
            for (s in a) if (a.hasOwnProperty(s)) {
              var l = a[s];
              s === "style" ? ng(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && eg(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && os(e, l) : typeof l == "number" && os(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (rs.hasOwnProperty(s) ? l != null && s === "onScroll" && ce("scroll", e) : l != null && Pu(e, s, l, i));
            }
            switch (n) {
              case "input":
                Hs(e), Lf(e, r, !1);
                break;
              case "textarea":
                Hs(e), If(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + _n(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? Hr(e, !!r.multiple, s, !1) : r.defaultValue != null && Hr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Xi);
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
      if (e && t.stateNode != null) Ey(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (n = or(ms.current), or(Bt.current), ei(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ot] = t, (s = r.nodeValue !== n) && (e = at, e !== null)) switch (e.tag) {
            case 3:
              Js(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Js(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ot] = t, t.stateNode = r;
      }
      return Ue(t), null;
    case 13:
      if (ue(me), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (fe && it !== null && t.mode & 1 && !(t.flags & 128)) Ug(), no(), t.flags |= 98560, s = !1;
        else if (s = ei(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(A(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(A(317));
            s[Ot] = t;
          } else no(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ue(t), s = !1;
        } else Dt !== null && (Hc(Dt), Dt = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || me.current & 1 ? Ae === 0 && (Ae = 3) : cd())), t.updateQueue !== null && (t.flags |= 4), Ue(t), null);
    case 4:
      return oo(), Oc(e, t), e === null && ds(t.stateNode.containerInfo), Ue(t), null;
    case 10:
      return Ku(t.type._context), Ue(t), null;
    case 17:
      return nt(t.type) && Qi(), Ue(t), null;
    case 19:
      if (ue(me), s = t.memoizedState, s === null) return Ue(t), null;
      if (r = (t.flags & 128) !== 0, i = s.rendering, i === null) if (r) Ao(s, !1);
      else {
        if (Ae !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = ra(e), i !== null) {
            for (t.flags |= 128, Ao(s, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, i = s.alternate, i === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = i.childLanes, s.lanes = i.lanes, s.child = i.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = i.memoizedProps, s.memoizedState = i.memoizedState, s.updateQueue = i.updateQueue, s.type = i.type, e = i.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ae(me, me.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && Ee() > io && (t.flags |= 128, r = !0, Ao(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ra(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ao(s, !0), s.tail === null && s.tailMode === "hidden" && !i.alternate && !fe) return Ue(t), null;
        } else 2 * Ee() - s.renderingStartTime > io && n !== 1073741824 && (t.flags |= 128, r = !0, Ao(s, !1), t.lanes = 4194304);
        s.isBackwards ? (i.sibling = t.child, t.child = i) : (n = s.last, n !== null ? n.sibling = i : t.child = i, s.last = i);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = Ee(), t.sibling = null, n = me.current, ae(me, r ? n & 1 | 2 : n & 1), t) : (Ue(t), null);
    case 22:
    case 23:
      return ld(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ot & 1073741824 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function $S(e, t) {
  switch ($u(t), t.tag) {
    case 1:
      return nt(t.type) && Qi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return oo(), ue(tt), ue(Ge), qu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Qu(t), null;
    case 13:
      if (ue(me), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(A(340));
        no();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ue(me), null;
    case 4:
      return oo(), null;
    case 10:
      return Ku(t.type._context), null;
    case 22:
    case 23:
      return ld(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ri = !1, He = !1, US = typeof WeakSet == "function" ? WeakSet : Set, B = null;
function Fr(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    we(e, t, r);
  }
  else n.current = null;
}
function Fc(e, t, n) {
  try {
    n();
  } catch (r) {
    we(e, t, r);
  }
}
var Ep = !1;
function WS(e, t) {
  if (Sc = Ki, e = Mg(), zu(e)) {
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
  for (bc = { focusedElem: e, selectionRange: n }, Ki = !1, B = t; B !== null; ) if (t = B, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, B = e;
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
            var y = w.memoizedProps, S = w.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Tt(t.type, y), S);
            m.__reactInternalSnapshotBeforeUpdate = h;
          }
          break;
        case 3:
          var v = t.stateNode.containerInfo;
          v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
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
function Qo(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        o.destroy = void 0, s !== void 0 && Fc(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ra(e, t) {
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
function Vc(e) {
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
function Ty(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Ty(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ot], delete t[ps], delete t[Ec], delete t[TS], delete t[PS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Py(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Tp(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Py(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function zc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Xi));
  else if (r !== 4 && (e = e.child, e !== null)) for (zc(e, t, n), e = e.sibling; e !== null; ) zc(e, t, n), e = e.sibling;
}
function Bc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Bc(e, t, n), e = e.sibling; e !== null; ) Bc(e, t, n), e = e.sibling;
}
var _e = null, Pt = !1;
function hn(e, t, n) {
  for (n = n.child; n !== null; ) Dy(e, t, n), n = n.sibling;
}
function Dy(e, t, n) {
  if (zt && typeof zt.onCommitFiberUnmount == "function") try {
    zt.onCommitFiberUnmount(Ea, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      He || Fr(n, t);
    case 6:
      var r = _e, o = Pt;
      _e = null, hn(e, t, n), _e = r, Pt = o, _e !== null && (Pt ? (e = _e, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : _e.removeChild(n.stateNode));
      break;
    case 18:
      _e !== null && (Pt ? (e = _e, n = n.stateNode, e.nodeType === 8 ? wl(e.parentNode, n) : e.nodeType === 1 && wl(e, n), ls(e)) : wl(_e, n.stateNode));
      break;
    case 4:
      r = _e, o = Pt, _e = n.stateNode.containerInfo, Pt = !0, hn(e, t, n), _e = r, Pt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!He && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var s = o, i = s.destroy;
          s = s.tag, i !== void 0 && (s & 2 || s & 4) && Fc(n, t, i), o = o.next;
        } while (o !== r);
      }
      hn(e, t, n);
      break;
    case 1:
      if (!He && (Fr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        we(n, t, a);
      }
      hn(e, t, n);
      break;
    case 21:
      hn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (He = (r = He) || n.memoizedState !== null, hn(e, t, n), He = r) : hn(e, t, n);
      break;
    default:
      hn(e, t, n);
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
function kt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var s = e, i = t, a = i;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            _e = a.stateNode, Pt = !1;
            break e;
          case 3:
            _e = a.stateNode.containerInfo, Pt = !0;
            break e;
          case 4:
            _e = a.stateNode.containerInfo, Pt = !0;
            break e;
        }
        a = a.return;
      }
      if (_e === null) throw Error(A(160));
      Dy(s, i, o), _e = null, Pt = !1;
      var l = o.alternate;
      l !== null && (l.return = null), o.return = null;
    } catch (c) {
      we(o, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ny(t, e), t = t.sibling;
}
function Ny(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (kt(t, e), _t(e), r & 4) {
        try {
          Qo(3, e, e.return), Ra(3, e);
        } catch (y) {
          we(e, e.return, y);
        }
        try {
          Qo(5, e, e.return);
        } catch (y) {
          we(e, e.return, y);
        }
      }
      break;
    case 1:
      kt(t, e), _t(e), r & 512 && n !== null && Fr(n, n.return);
      break;
    case 5:
      if (kt(t, e), _t(e), r & 512 && n !== null && Fr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          os(o, "");
        } catch (y) {
          we(e, e.return, y);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var s = e.memoizedProps, i = n !== null ? n.memoizedProps : s, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && s.type === "radio" && s.name != null && qm(o, s), dc(a, i);
          var c = dc(a, s);
          for (i = 0; i < l.length; i += 2) {
            var u = l[i], d = l[i + 1];
            u === "style" ? ng(o, d) : u === "dangerouslySetInnerHTML" ? eg(o, d) : u === "children" ? os(o, d) : Pu(o, u, d, c);
          }
          switch (a) {
            case "input":
              ic(o, s);
              break;
            case "textarea":
              Zm(o, s);
              break;
            case "select":
              var f = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!s.multiple;
              var g = s.value;
              g != null ? Hr(o, !!s.multiple, g, !1) : f !== !!s.multiple && (s.defaultValue != null ? Hr(
                o,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : Hr(o, !!s.multiple, s.multiple ? [] : "", !1));
          }
          o[ps] = s;
        } catch (y) {
          we(e, e.return, y);
        }
      }
      break;
    case 6:
      if (kt(t, e), _t(e), r & 4) {
        if (e.stateNode === null) throw Error(A(162));
        o = e.stateNode, s = e.memoizedProps;
        try {
          o.nodeValue = s;
        } catch (y) {
          we(e, e.return, y);
        }
      }
      break;
    case 3:
      if (kt(t, e), _t(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        ls(t.containerInfo);
      } catch (y) {
        we(e, e.return, y);
      }
      break;
    case 4:
      kt(t, e), _t(e);
      break;
    case 13:
      kt(t, e), _t(e), o = e.child, o.flags & 8192 && (s = o.memoizedState !== null, o.stateNode.isHidden = s, !s || o.alternate !== null && o.alternate.memoizedState !== null || (id = Ee())), r & 4 && Pp(e);
      break;
    case 22:
      if (u = n !== null && n.memoizedState !== null, e.mode & 1 ? (He = (c = He) || u, kt(t, e), He = c) : kt(t, e), _t(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !u && e.mode & 1) for (B = e, u = e.child; u !== null; ) {
          for (d = B = u; B !== null; ) {
            switch (f = B, g = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Qo(4, f, f.return);
                break;
              case 1:
                Fr(f, f.return);
                var w = f.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (y) {
                    we(r, n, y);
                  }
                }
                break;
              case 5:
                Fr(f, f.return);
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
              } catch (y) {
                we(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (u === null) try {
              d.stateNode.nodeValue = c ? "" : d.memoizedProps;
            } catch (y) {
              we(e, e.return, y);
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
      kt(t, e), _t(e), r & 4 && Pp(e);
      break;
    case 21:
      break;
    default:
      kt(
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
          if (Py(n)) {
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
          r.flags & 32 && (os(o, ""), r.flags &= -33);
          var s = Tp(e);
          Bc(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, a = Tp(e);
          zc(e, a, i);
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
  B = e, My(e);
}
function My(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var o = B, s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || ri;
      if (!i) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || He;
        a = ri;
        var c = He;
        if (ri = i, (He = l) && !c) for (B = o; B !== null; ) i = B, l = i.child, i.tag === 22 && i.memoizedState !== null ? Mp(o) : l !== null ? (l.return = i, B = l) : Mp(o);
        for (; s !== null; ) B = s, My(s), s = s.sibling;
        B = o, ri = a, He = c;
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
            He || Ra(5, t);
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
                  d !== null && ls(d);
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
        He || t.flags & 512 && Vc(t);
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
            Ra(4, t);
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
            Vc(t);
          } catch (l) {
            we(t, s, l);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Vc(t);
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
var KS = Math.ceil, ia = dn.ReactCurrentDispatcher, od = dn.ReactCurrentOwner, xt = dn.ReactCurrentBatchConfig, te = 0, Re = null, De = null, Oe = 0, ot = 0, Vr = Wn(0), Ae = 0, xs = null, fr = 0, La = 0, sd = 0, qo = null, Je = null, id = 0, io = 1 / 0, Yt = null, aa = !1, $c = null, An = null, oi = !1, En = null, la = 0, Zo = 0, Uc = null, Mi = -1, Ai = 0;
function Qe() {
  return te & 6 ? Ee() : Mi !== -1 ? Mi : Mi = Ee();
}
function jn(e) {
  return e.mode & 1 ? te & 2 && Oe !== 0 ? Oe & -Oe : NS.transition !== null ? (Ai === 0 && (Ai = hg()), Ai) : (e = ie, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Sg(e.type)), e) : 1;
}
function Mt(e, t, n, r) {
  if (50 < Zo) throw Zo = 0, Uc = null, Error(A(185));
  As(e, n, r), (!(te & 2) || e !== Re) && (e === Re && (!(te & 2) && (La |= n), Ae === 4 && kn(e, Oe)), rt(e, r), n === 1 && te === 0 && !(t.mode & 1) && (io = Ee() + 500, Ma && Hn()));
}
function rt(e, t) {
  var n = e.callbackNode;
  N1(e, t);
  var r = Hi(e, e === Re ? Oe : 0);
  if (r === 0) n !== null && Vf(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Vf(n), t === 1) e.tag === 0 ? DS(Ap.bind(null, e)) : zg(Ap.bind(null, e)), CS(function() {
      !(te & 6) && Hn();
    }), n = null;
    else {
      switch (mg(r)) {
        case 1:
          n = ju;
          break;
        case 4:
          n = fg;
          break;
        case 16:
          n = Wi;
          break;
        case 536870912:
          n = pg;
          break;
        default:
          n = Wi;
      }
      n = Fy(n, Ay.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Ay(e, t) {
  if (Mi = -1, Ai = 0, te & 6) throw Error(A(327));
  var n = e.callbackNode;
  if (Qr() && e.callbackNode !== n) return null;
  var r = Hi(e, e === Re ? Oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ca(e, r);
  else {
    t = r;
    var o = te;
    te |= 2;
    var s = Ry();
    (Re !== e || Oe !== t) && (Yt = null, io = Ee() + 500, ir(e, t));
    do
      try {
        XS();
        break;
      } catch (a) {
        jy(e, a);
      }
    while (!0);
    Hu(), ia.current = s, te = o, De !== null ? t = 0 : (Re = null, Oe = 0, t = Ae);
  }
  if (t !== 0) {
    if (t === 2 && (o = gc(e), o !== 0 && (r = o, t = Wc(e, o))), t === 1) throw n = xs, ir(e, 0), kn(e, r), rt(e, Ee()), n;
    if (t === 6) kn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !GS(o) && (t = ca(e, r), t === 2 && (s = gc(e), s !== 0 && (r = s, t = Wc(e, s))), t === 1)) throw n = xs, ir(e, 0), kn(e, r), rt(e, Ee()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          Jn(e, Je, Yt);
          break;
        case 3:
          if (kn(e, r), (r & 130023424) === r && (t = id + 500 - Ee(), 10 < t)) {
            if (Hi(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Qe(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Cc(Jn.bind(null, e, Je, Yt), t);
            break;
          }
          Jn(e, Je, Yt);
          break;
        case 4:
          if (kn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Nt(r);
            s = 1 << i, i = t[i], i > o && (o = i), r &= ~s;
          }
          if (r = o, r = Ee() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * KS(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Cc(Jn.bind(null, e, Je, Yt), r);
            break;
          }
          Jn(e, Je, Yt);
          break;
        case 5:
          Jn(e, Je, Yt);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return rt(e, Ee()), e.callbackNode === n ? Ay.bind(null, e) : null;
}
function Wc(e, t) {
  var n = qo;
  return e.current.memoizedState.isDehydrated && (ir(e, t).flags |= 256), e = ca(e, t), e !== 2 && (t = Je, Je = n, t !== null && Hc(t)), e;
}
function Hc(e) {
  Je === null ? Je = e : Je.push.apply(Je, e);
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
function kn(e, t) {
  for (t &= ~sd, t &= ~La, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Nt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ap(e) {
  if (te & 6) throw Error(A(327));
  Qr();
  var t = Hi(e, 0);
  if (!(t & 1)) return rt(e, Ee()), null;
  var n = ca(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = gc(e);
    r !== 0 && (t = r, n = Wc(e, r));
  }
  if (n === 1) throw n = xs, ir(e, 0), kn(e, t), rt(e, Ee()), n;
  if (n === 6) throw Error(A(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Jn(e, Je, Yt), rt(e, Ee()), null;
}
function ad(e, t) {
  var n = te;
  te |= 1;
  try {
    return e(t);
  } finally {
    te = n, te === 0 && (io = Ee() + 500, Ma && Hn());
  }
}
function pr(e) {
  En !== null && En.tag === 0 && !(te & 6) && Qr();
  var t = te;
  te |= 1;
  var n = xt.transition, r = ie;
  try {
    if (xt.transition = null, ie = 1, e) return e();
  } finally {
    ie = r, xt.transition = n, te = t, !(te & 6) && Hn();
  }
}
function ld() {
  ot = Vr.current, ue(Vr);
}
function ir(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, kS(n)), De !== null) for (n = De.return; n !== null; ) {
    var r = n;
    switch ($u(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Qi();
        break;
      case 3:
        oo(), ue(tt), ue(Ge), qu();
        break;
      case 5:
        Qu(r);
        break;
      case 4:
        oo();
        break;
      case 13:
        ue(me);
        break;
      case 19:
        ue(me);
        break;
      case 10:
        Ku(r.type._context);
        break;
      case 22:
      case 23:
        ld();
    }
    n = n.return;
  }
  if (Re = e, De = e = Rn(e.current, null), Oe = ot = t, Ae = 0, xs = null, sd = La = fr = 0, Je = qo = null, rr !== null) {
    for (t = 0; t < rr.length; t++) if (n = rr[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, s = n.pending;
      if (s !== null) {
        var i = s.next;
        s.next = o, r.next = i;
      }
      n.pending = r;
    }
    rr = null;
  }
  return e;
}
function jy(e, t) {
  do {
    var n = De;
    try {
      if (Hu(), Pi.current = sa, oa) {
        for (var r = ye.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        oa = !1;
      }
      if (dr = 0, je = Me = ye = null, Xo = !1, gs = 0, od.current = null, n === null || n.return === null) {
        Ae = 1, xs = t, De = null;
        break;
      }
      e: {
        var s = e, i = n.return, a = n, l = t;
        if (t = Oe, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var c = l, u = a, d = u.tag;
          if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = u.alternate;
            f ? (u.updateQueue = f.updateQueue, u.memoizedState = f.memoizedState, u.lanes = f.lanes) : (u.updateQueue = null, u.memoizedState = null);
          }
          var g = vp(i);
          if (g !== null) {
            g.flags &= -257, xp(g, i, a, s, t), g.mode & 1 && yp(s, c, t), t = g, l = c;
            var w = t.updateQueue;
            if (w === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(l), t.updateQueue = y;
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              yp(s, c, t), cd();
              break e;
            }
            l = Error(A(426));
          }
        } else if (fe && a.mode & 1) {
          var S = vp(i);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), xp(S, i, a, s, t), Uu(so(l, a));
            break e;
          }
        }
        s = l = so(l, a), Ae !== 4 && (Ae = 2), qo === null ? qo = [s] : qo.push(s), s = i;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var m = my(s, l, t);
              dp(s, m);
              break e;
            case 1:
              a = l;
              var h = s.type, v = s.stateNode;
              if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (An === null || !An.has(v)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var b = gy(s, a, t);
                dp(s, b);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      _y(n);
    } catch (k) {
      t = k, De === n && n !== null && (De = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ry() {
  var e = ia.current;
  return ia.current = sa, e === null ? sa : e;
}
function cd() {
  (Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4), Re === null || !(fr & 268435455) && !(La & 268435455) || kn(Re, Oe);
}
function ca(e, t) {
  var n = te;
  te |= 2;
  var r = Ry();
  (Re !== e || Oe !== t) && (Yt = null, ir(e, t));
  do
    try {
      YS();
      break;
    } catch (o) {
      jy(e, o);
    }
  while (!0);
  if (Hu(), te = n, ia.current = r, De !== null) throw Error(A(261));
  return Re = null, Oe = 0, Ae;
}
function YS() {
  for (; De !== null; ) Ly(De);
}
function XS() {
  for (; De !== null && !w1(); ) Ly(De);
}
function Ly(e) {
  var t = Oy(e.alternate, e, ot);
  e.memoizedProps = e.pendingProps, t === null ? _y(e) : De = t, od.current = null;
}
function _y(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = $S(n, t), n !== null) {
        n.flags &= 32767, De = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ae = 6, De = null;
        return;
      }
    } else if (n = BS(n, t, ot), n !== null) {
      De = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      De = t;
      return;
    }
    De = t = e;
  } while (t !== null);
  Ae === 0 && (Ae = 5);
}
function Jn(e, t, n) {
  var r = ie, o = xt.transition;
  try {
    xt.transition = null, ie = 1, QS(e, t, n, r);
  } finally {
    xt.transition = o, ie = r;
  }
  return null;
}
function QS(e, t, n, r) {
  do
    Qr();
  while (En !== null);
  if (te & 6) throw Error(A(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(A(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (M1(e, s), e === Re && (De = Re = null, Oe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || oi || (oi = !0, Fy(Wi, function() {
    return Qr(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = xt.transition, xt.transition = null;
    var i = ie;
    ie = 1;
    var a = te;
    te |= 4, od.current = null, WS(e, n), Ny(n, e), gS(bc), Ki = !!Sc, bc = Sc = null, e.current = n, HS(n), S1(), te = a, ie = i, xt.transition = s;
  } else e.current = n;
  if (oi && (oi = !1, En = e, la = o), s = e.pendingLanes, s === 0 && (An = null), C1(n.stateNode), rt(e, Ee()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (aa) throw aa = !1, e = $c, $c = null, e;
  return la & 1 && e.tag !== 0 && Qr(), s = e.pendingLanes, s & 1 ? e === Uc ? Zo++ : (Zo = 0, Uc = e) : Zo = 0, Hn(), null;
}
function Qr() {
  if (En !== null) {
    var e = mg(la), t = xt.transition, n = ie;
    try {
      if (xt.transition = null, ie = 16 > e ? 16 : e, En === null) var r = !1;
      else {
        if (e = En, En = null, la = 0, te & 6) throw Error(A(331));
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
                      Qo(8, u, s);
                  }
                  var d = u.child;
                  if (d !== null) d.return = u, B = d;
                  else for (; B !== null; ) {
                    u = B;
                    var f = u.sibling, g = u.return;
                    if (Ty(u), u === c) {
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
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var S = y.sibling;
                    y.sibling = null, y = S;
                  } while (y !== null);
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
                Qo(9, s, s.return);
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
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) v.return = i, B = v;
          else e: for (i = h; B !== null; ) {
            if (a = B, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  Ra(9, a);
              }
            } catch (k) {
              we(a, a.return, k);
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
        if (te = o, Hn(), zt && typeof zt.onPostCommitFiberRoot == "function") try {
          zt.onPostCommitFiberRoot(Ea, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ie = n, xt.transition = t;
    }
  }
  return !1;
}
function jp(e, t, n) {
  t = so(n, t), t = my(e, t, 1), e = Mn(e, t, 1), t = Qe(), e !== null && (As(e, 1, t), rt(e, t));
}
function we(e, t, n) {
  if (e.tag === 3) jp(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      jp(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (An === null || !An.has(r))) {
        e = so(n, e), e = gy(t, e, 1), t = Mn(t, e, 1), e = Qe(), t !== null && (As(t, 1, e), rt(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function qS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Qe(), e.pingedLanes |= e.suspendedLanes & n, Re === e && (Oe & n) === n && (Ae === 4 || Ae === 3 && (Oe & 130023424) === Oe && 500 > Ee() - id ? ir(e, 0) : sd |= n), rt(e, t);
}
function Iy(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ys, Ys <<= 1, !(Ys & 130023424) && (Ys = 4194304)) : t = 1);
  var n = Qe();
  e = sn(e, t), e !== null && (As(e, t, n), rt(e, n));
}
function ZS(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Iy(e, n);
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
  r !== null && r.delete(t), Iy(e, n);
}
var Oy;
Oy = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || tt.current) et = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return et = !1, zS(e, t, n);
    et = !!(e.flags & 131072);
  }
  else et = !1, fe && t.flags & 1048576 && Bg(t, Ji, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ni(e, t), e = t.pendingProps;
      var o = to(t, Ge.current);
      Xr(t, n), o = Ju(null, t, r, e, o, n);
      var s = ed();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, nt(r) ? (s = !0, qi(t)) : s = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Yu(t), o.updater = ja, t.stateNode = o, o._reactInternals = t, Ac(t, r, e, n), t = Lc(null, t, r, !0, s, n)) : (t.tag = 0, fe && s && Bu(t), Xe(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ni(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = tb(r), e = Tt(r, e), o) {
          case 0:
            t = Rc(null, t, r, e, n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Tt(r, o), Rc(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Tt(r, o), bp(e, t, r, o, n);
    case 3:
      e: {
        if (wy(t), e === null) throw Error(A(387));
        r = t.pendingProps, s = t.memoizedState, o = s.element, Gg(e, t), na(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          o = so(Error(A(423)), t), t = kp(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = so(Error(A(424)), t), t = kp(e, t, r, n, o);
          break e;
        } else for (it = Nn(t.stateNode.containerInfo.firstChild), at = t, fe = !0, Dt = null, n = Hg(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (no(), r === o) {
            t = an(e, t, n);
            break e;
          }
          Xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Yg(t), e === null && Dc(t), r = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, i = o.children, kc(r, o) ? i = null : s !== null && kc(r, s) && (t.flags |= 32), xy(e, t), Xe(e, t, i, n), t.child;
    case 6:
      return e === null && Dc(t), null;
    case 13:
      return Sy(e, t, n);
    case 4:
      return Xu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ro(t, null, r, n) : Xe(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Tt(r, o), wp(e, t, r, o, n);
    case 7:
      return Xe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Xe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Xe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, s = t.memoizedProps, i = o.value, ae(ea, r._currentValue), r._currentValue = i, s !== null) if (At(s.value, i)) {
          if (s.children === o.children && !tt.current) {
            t = an(e, t, n);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var a = s.dependencies;
          if (a !== null) {
            i = s.child;
            for (var l = a.firstContext; l !== null; ) {
              if (l.context === r) {
                if (s.tag === 1) {
                  l = Jt(-1, n & -n), l.tag = 2;
                  var c = s.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var u = c.pending;
                    u === null ? l.next = l : (l.next = u.next, u.next = l), c.pending = l;
                  }
                }
                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Nc(
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
            i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Nc(i, n, t), i = s.sibling;
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
        Xe(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Xr(t, n), o = wt(o), r = r(o), t.flags |= 1, Xe(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Tt(r, t.pendingProps), o = Tt(r.type, o), Sp(e, t, r, o, n);
    case 15:
      return yy(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Tt(r, o), Ni(e, t), t.tag = 1, nt(r) ? (e = !0, qi(t)) : e = !1, Xr(t, n), hy(t, r, o), Ac(t, r, o, n), Lc(null, t, r, !0, e, n);
    case 19:
      return by(e, t, n);
    case 22:
      return vy(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function Fy(e, t) {
  return dg(e, t);
}
function eb(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function vt(e, t, n, r) {
  return new eb(e, t, n, r);
}
function ud(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function tb(e) {
  if (typeof e == "function") return ud(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Nu) return 11;
    if (e === Mu) return 14;
  }
  return 2;
}
function Rn(e, t) {
  var n = e.alternate;
  return n === null ? (n = vt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ji(e, t, n, r, o, s) {
  var i = 2;
  if (r = e, typeof e == "function") ud(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Nr:
      return ar(n.children, o, s, t);
    case Du:
      i = 8, o |= 8;
      break;
    case tc:
      return e = vt(12, n, t, o | 2), e.elementType = tc, e.lanes = s, e;
    case nc:
      return e = vt(13, n, t, o), e.elementType = nc, e.lanes = s, e;
    case rc:
      return e = vt(19, n, t, o), e.elementType = rc, e.lanes = s, e;
    case Ym:
      return _a(n, o, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Km:
          i = 10;
          break e;
        case Gm:
          i = 9;
          break e;
        case Nu:
          i = 11;
          break e;
        case Mu:
          i = 14;
          break e;
        case wn:
          i = 16, r = null;
          break e;
      }
      throw Error(A(130, e == null ? e : typeof e, ""));
  }
  return t = vt(i, n, t, o), t.elementType = e, t.type = r, t.lanes = s, t;
}
function ar(e, t, n, r) {
  return e = vt(7, e, r, t), e.lanes = n, e;
}
function _a(e, t, n, r) {
  return e = vt(22, e, r, t), e.elementType = Ym, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Dl(e, t, n) {
  return e = vt(6, e, null, t), e.lanes = n, e;
}
function Nl(e, t, n) {
  return t = vt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function nb(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = cl(0), this.expirationTimes = cl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = cl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function dd(e, t, n, r, o, s, i, a, l) {
  return e = new nb(e, t, n, a, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = vt(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Yu(s), e;
}
function rb(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Dr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Vy(e) {
  if (!e) return In;
  e = e._reactInternals;
  e: {
    if (xr(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (nt(t.type)) {
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
    if (nt(n)) return Vg(e, n, t);
  }
  return t;
}
function zy(e, t, n, r, o, s, i, a, l) {
  return e = dd(n, r, !0, e, o, s, i, a, l), e.context = Vy(null), n = e.current, r = Qe(), o = jn(n), s = Jt(r, o), s.callback = t ?? null, Mn(n, s, o), e.current.lanes = o, As(e, o, r), rt(e, r), e;
}
function Ia(e, t, n, r) {
  var o = t.current, s = Qe(), i = jn(o);
  return n = Vy(n), t.context === null ? t.context = n : t.pendingContext = n, t = Jt(s, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Mn(o, t, i), e !== null && (Mt(e, o, i, s), Ti(e, o, i)), i;
}
function ua(e) {
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
function fd(e, t) {
  Rp(e, t), (e = e.alternate) && Rp(e, t);
}
function ob() {
  return null;
}
var By = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function pd(e) {
  this._internalRoot = e;
}
Oa.prototype.render = pd.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  Ia(e, t, null, null);
};
Oa.prototype.unmount = pd.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    pr(function() {
      Ia(null, e, null, null);
    }), t[on] = null;
  }
};
function Oa(e) {
  this._internalRoot = e;
}
Oa.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = vg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < bn.length && t !== 0 && t < bn[n].priority; n++) ;
    bn.splice(n, 0, e), n === 0 && wg(e);
  }
};
function hd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Fa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Lp() {
}
function sb(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var c = ua(i);
        s.call(c);
      };
    }
    var i = zy(t, r, e, 0, null, !1, !1, "", Lp);
    return e._reactRootContainer = i, e[on] = i.current, ds(e.nodeType === 8 ? e.parentNode : e), pr(), i;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var c = ua(l);
      a.call(c);
    };
  }
  var l = dd(e, 0, !1, null, null, !1, !1, "", Lp);
  return e._reactRootContainer = l, e[on] = l.current, ds(e.nodeType === 8 ? e.parentNode : e), pr(function() {
    Ia(t, l, n, r);
  }), l;
}
function Va(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = ua(i);
        a.call(l);
      };
    }
    Ia(t, i, e, o);
  } else i = sb(n, t, e, o, r);
  return ua(i);
}
gg = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Fo(t.pendingLanes);
        n !== 0 && (Ru(t, n | 1), rt(t, Ee()), !(te & 6) && (io = Ee() + 500, Hn()));
      }
      break;
    case 13:
      pr(function() {
        var r = sn(e, 1);
        if (r !== null) {
          var o = Qe();
          Mt(r, e, 1, o);
        }
      }), fd(e, 1);
  }
};
Lu = function(e) {
  if (e.tag === 13) {
    var t = sn(e, 134217728);
    if (t !== null) {
      var n = Qe();
      Mt(t, e, 134217728, n);
    }
    fd(e, 134217728);
  }
};
yg = function(e) {
  if (e.tag === 13) {
    var t = jn(e), n = sn(e, t);
    if (n !== null) {
      var r = Qe();
      Mt(n, e, t, r);
    }
    fd(e, t);
  }
};
vg = function() {
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
pc = function(e, t, n) {
  switch (t) {
    case "input":
      if (ic(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Na(r);
            if (!o) throw Error(A(90));
            Qm(r), ic(r, o);
          }
        }
      }
      break;
    case "textarea":
      Zm(e, n);
      break;
    case "select":
      t = n.value, t != null && Hr(e, !!n.multiple, t, !1);
  }
};
sg = ad;
ig = pr;
var ib = { usingClientEntryPoint: !1, Events: [Rs, Rr, Na, rg, og, ad] }, jo = { findFiberByHostInstance: nr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ab = { bundleType: jo.bundleType, version: jo.version, rendererPackageName: jo.rendererPackageName, rendererConfig: jo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: dn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = cg(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: jo.findFiberByHostInstance || ob, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!si.isDisabled && si.supportsFiber) try {
    Ea = si.inject(ab), zt = si;
  } catch {
  }
}
ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ib;
ft.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!hd(t)) throw Error(A(200));
  return rb(e, t, null, n);
};
ft.createRoot = function(e, t) {
  if (!hd(e)) throw Error(A(299));
  var n = !1, r = "", o = By;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = dd(e, 1, !1, null, null, n, !1, r, o), e[on] = t.current, ds(e.nodeType === 8 ? e.parentNode : e), new pd(t);
};
ft.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e)));
  return e = cg(t), e = e === null ? null : e.stateNode, e;
};
ft.flushSync = function(e) {
  return pr(e);
};
ft.hydrate = function(e, t, n) {
  if (!Fa(t)) throw Error(A(200));
  return Va(null, e, t, !0, n);
};
ft.hydrateRoot = function(e, t, n) {
  if (!hd(e)) throw Error(A(405));
  var r = n != null && n.hydratedSources || null, o = !1, s = "", i = By;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = zy(t, null, e, 1, n ?? null, o, !1, s, i), e[on] = t.current, ds(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Oa(t);
};
ft.render = function(e, t, n) {
  if (!Fa(t)) throw Error(A(200));
  return Va(null, e, t, !1, n);
};
ft.unmountComponentAtNode = function(e) {
  if (!Fa(e)) throw Error(A(40));
  return e._reactRootContainer ? (pr(function() {
    Va(null, null, e, !1, function() {
      e._reactRootContainer = null, e[on] = null;
    });
  }), !0) : !1;
};
ft.unstable_batchedUpdates = ad;
ft.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Fa(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return Va(e, t, n, !1, r);
};
ft.version = "18.3.1-next-f1338f8080-20240426";
function $y() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($y);
    } catch (e) {
      console.error(e);
    }
}
$y(), $m.exports = ft;
var yo = $m.exports;
const lb = /* @__PURE__ */ Nm(yo);
var za, _p = yo;
za = _p.createRoot, _p.hydrateRoot;
function Uy(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Uy(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function cb() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Uy(e)) && (r && (r += " "), r += t);
  return r;
}
const md = "-", ub = (e) => {
  const t = fb(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(md);
      return a[0] === "" && a.length !== 1 && a.shift(), Wy(a, t) || db(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const l = n[i] || [];
      return a && r[i] ? [...l, ...r[i]] : l;
    }
  };
}, Wy = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Wy(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(md);
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
    Kc(i, r, s, t);
  }), r;
}, Kc = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Op(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (pb(o)) {
        Kc(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      Kc(i, Op(t, s), n, r);
    });
  });
}, Op = (e, t) => {
  let n = e;
  return t.split(md).forEach((r) => {
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
}, Hy = "!", gb = (e) => {
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
    const f = l.length === 0 ? a : a.substring(u), g = f.startsWith(Hy), w = g ? f.substring(1) : f, y = d && d > u ? d - u : void 0;
    return {
      modifiers: l,
      hasImportantModifier: g,
      baseClassName: w,
      maybePostfixModifierPosition: y
    };
  };
  return n ? (a) => n({
    className: a,
    parseClassName: i
  }) : i;
}, yb = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, vb = (e) => ({
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
    let w = !!g, y = r(w ? f.substring(0, g) : f);
    if (!y) {
      if (!w) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (y = r(f), !y) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      w = !1;
    }
    const S = yb(u).join(":"), m = d ? S + Hy : S, h = m + y;
    if (s.includes(h))
      continue;
    s.push(h);
    const v = o(y, w);
    for (let b = 0; b < v.length; ++b) {
      const k = v[b];
      s.push(m + k);
    }
    a = c + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function Sb() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Ky(t)) && (r && (r += " "), r += n);
  return r;
}
const Ky = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Ky(e[r])) && (n && (n += " "), n += t);
  return n;
};
function bb(e, ...t) {
  let n, r, o, s = i;
  function i(l) {
    const c = t.reduce((u, d) => d(u), e());
    return n = vb(c), r = n.cache.get, o = n.cache.set, s = a, a(l);
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
}, Gy = /^\[(?:([a-z-]+):)?(.+)\]$/i, kb = /^\d+\/\d+$/, Cb = /* @__PURE__ */ new Set(["px", "full", "screen"]), Eb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Tb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Pb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Db = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Nb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Gt = (e) => qr(e) || Cb.has(e) || kb.test(e), mn = (e) => vo(e, "length", Ob), qr = (e) => !!e && !Number.isNaN(Number(e)), Ml = (e) => vo(e, "number", qr), Ro = (e) => !!e && Number.isInteger(Number(e)), Mb = (e) => e.endsWith("%") && qr(e.slice(0, -1)), Q = (e) => Gy.test(e), gn = (e) => Eb.test(e), Ab = /* @__PURE__ */ new Set(["length", "size", "percentage"]), jb = (e) => vo(e, Ab, Yy), Rb = (e) => vo(e, "position", Yy), Lb = /* @__PURE__ */ new Set(["image", "url"]), _b = (e) => vo(e, Lb, Vb), Ib = (e) => vo(e, "", Fb), Lo = () => !0, vo = (e, t, n) => {
  const r = Gy.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, Ob = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Tb.test(e) && !Pb.test(e)
), Yy = () => !1, Fb = (e) => Db.test(e), Vb = (e) => Nb.test(e), zb = () => {
  const e = le("colors"), t = le("spacing"), n = le("blur"), r = le("brightness"), o = le("borderColor"), s = le("borderRadius"), i = le("borderSpacing"), a = le("borderWidth"), l = le("contrast"), c = le("grayscale"), u = le("hueRotate"), d = le("invert"), f = le("gap"), g = le("gradientColorStops"), w = le("gradientColorStopPositions"), y = le("inset"), S = le("margin"), m = le("opacity"), h = le("padding"), v = le("saturate"), b = le("scale"), k = le("sepia"), C = le("skew"), E = le("space"), T = le("translate"), j = () => ["auto", "contain", "none"], M = () => ["auto", "hidden", "clip", "visible", "scroll"], D = () => ["auto", Q, t], N = () => [Q, t], F = () => ["", Gt, mn], U = () => ["auto", qr, Q], I = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], V = () => ["solid", "dashed", "dotted", "double", "none"], z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], L = () => ["", "0", Q], $ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], G = () => [qr, Q];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Lo],
      spacing: [Gt, mn],
      blur: ["none", "", gn, Q],
      brightness: G(),
      borderColor: [e],
      borderRadius: ["none", "", "full", gn, Q],
      borderSpacing: N(),
      borderWidth: F(),
      contrast: G(),
      grayscale: L(),
      hueRotate: G(),
      invert: L(),
      gap: N(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Mb, mn],
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
        aspect: ["auto", "square", "video", Q]
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
        columns: [gn]
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
        object: [...I(), Q]
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
        inset: [y]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [y]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [y]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [y]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [y]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [y]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [y]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [y]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [y]
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
        z: ["auto", Ro, Q]
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
        flex: ["1", "auto", "initial", "none", Q]
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
        order: ["first", "last", "none", Ro, Q]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Lo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ro, Q]
        }, Q]
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
        "grid-rows": [Lo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ro, Q]
        }, Q]
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
        "auto-cols": ["auto", "min", "max", "fr", Q]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Q]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Q, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Q, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [gn]
        }, gn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Q, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", gn, mn]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ml]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Lo]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Q]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", qr, Ml]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Gt, Q]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Q]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Q]
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
        decoration: ["auto", "from-font", Gt, mn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Gt, Q]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Q]
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
        content: ["none", Q]
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
        "outline-offset": [Gt, Q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Gt, mn]
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
        "ring-offset": [Gt, mn]
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
        shadow: ["", "inner", "none", gn, Ib]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Lo]
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
        "drop-shadow": ["", "none", gn, Q]
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
        saturate: [v]
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
        "backdrop-saturate": [v]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Q]
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
        ease: ["linear", "in", "out", "in-out", Q]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", Q]
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
        rotate: [Ro, Q]
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
        "skew-x": [C]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [C]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Q]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Q]
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
        "will-change": ["auto", "scroll", "contents", "transform", Q]
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
        stroke: [Gt, mn, Ml]
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
function gd({ className: e, ...t }) {
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
function Xy({ className: e, ...t }) {
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
const en = x.forwardRef(
  ({ className: e, variant: t = "default", size: n = "default", ...r }, o) => /* @__PURE__ */ p.jsx(
    "button",
    {
      className: Se(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white dark:ring-offset-gray-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 dark:focus-visible:ring-slate-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        {
          default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90",
          destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90",
          outline: "border border-slate-200 dark:border-slate-800 bg-white dark:bg-gray-950 text-slate-900 dark:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-50",
          secondary: "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-50 hover:bg-slate-100/80 dark:hover:bg-slate-800/80",
          ghost: "hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-50",
          link: "text-slate-900 dark:text-slate-50 underline-offset-4 hover:underline"
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
en.displayName = "Button";
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
function xo(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = x.createContext(i), l = n.length;
    n = [...n, i];
    const c = (d) => {
      var m;
      const { scope: f, children: g, ...w } = d, y = ((m = f == null ? void 0 : f[e]) == null ? void 0 : m[l]) || a, S = x.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ p.jsx(y.Provider, { value: S, children: g });
    };
    c.displayName = s + "Provider";
    function u(d, f) {
      var y;
      const g = ((y = f == null ? void 0 : f[e]) == null ? void 0 : y[l]) || a, w = x.useContext(g);
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
function Qy(...e) {
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
  return x.useCallback(Qy(...e), e);
}
// @__NO_SIDE_EFFECTS__
function ws(e) {
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
      return o.type !== x.Fragment && (a.ref = r ? Qy(r, i) : i), x.cloneElement(o, a);
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
function qy(e) {
  const t = e + "CollectionProvider", [n, r] = xo(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (y) => {
    const { scope: S, children: m } = y, h = Y.useRef(null), v = Y.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p.jsx(o, { scope: S, itemMap: v, collectionRef: h, children: m });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ ws(a), c = Y.forwardRef(
    (y, S) => {
      const { scope: m, children: h } = y, v = s(a, m), b = be(S, v.collectionRef);
      return /* @__PURE__ */ p.jsx(l, { ref: b, children: h });
    }
  );
  c.displayName = a;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ ws(u), g = Y.forwardRef(
    (y, S) => {
      const { scope: m, children: h, ...v } = y, b = Y.useRef(null), k = be(S, b), C = s(u, m);
      return Y.useEffect(() => (C.itemMap.set(b, { ref: b, ...v }), () => void C.itemMap.delete(b))), /* @__PURE__ */ p.jsx(f, { [d]: "", ref: k, children: h });
    }
  );
  g.displayName = u;
  function w(y) {
    const S = s(e + "CollectionConsumer", y);
    return Y.useCallback(() => {
      const h = S.collectionRef.current;
      if (!h) return [];
      const v = Array.from(h.querySelectorAll(`[${d}]`));
      return Array.from(S.itemMap.values()).sort(
        (C, E) => v.indexOf(C.ref.current) - v.indexOf(E.ref.current)
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
  const n = /* @__PURE__ */ ws(`Primitive.${t}`), r = x.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Zb(e, t) {
  e && yo.flushSync(() => e.dispatchEvent(t));
}
function On(e) {
  const t = x.useRef(e);
  return x.useEffect(() => {
    t.current = e;
  }), x.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Jb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = On(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var ek = "DismissableLayer", Gc = "dismissableLayer.update", tk = "dismissableLayer.pointerDownOutside", nk = "dismissableLayer.focusOutside", zp, Zy = x.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), vd = x.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...l
    } = e, c = x.useContext(Zy), [u, d] = x.useState(null), f = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = x.useState({}), w = be(t, (E) => d(E)), y = Array.from(c.layers), [S] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), m = y.indexOf(S), h = u ? y.indexOf(u) : -1, v = c.layersWithOutsidePointerEventsDisabled.size > 0, b = h >= m, k = sk((E) => {
      const T = E.target, j = [...c.branches].some((M) => M.contains(T));
      !b || j || (o == null || o(E), i == null || i(E), E.defaultPrevented || a == null || a());
    }, f), C = ik((E) => {
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
      return document.addEventListener(Gc, E), () => document.removeEventListener(Gc, E);
    }, []), /* @__PURE__ */ p.jsx(
      oe.div,
      {
        ...l,
        ref: w,
        style: {
          pointerEvents: v ? b ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ee(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: ee(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: ee(
          e.onPointerDownCapture,
          k.onPointerDownCapture
        )
      }
    );
  }
);
vd.displayName = ek;
var rk = "DismissableLayerBranch", ok = x.forwardRef((e, t) => {
  const n = x.useContext(Zy), r = x.useRef(null), o = be(t, r);
  return x.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ p.jsx(oe.div, { ...e, ref: o });
});
ok.displayName = rk;
function sk(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = On(e), r = x.useRef(!1), o = x.useRef(() => {
  });
  return x.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          Jy(
            tk,
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
function ik(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = On(e), r = x.useRef(!1);
  return x.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && Jy(nk, n, { originalEvent: s }, {
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
  const e = new CustomEvent(Gc);
  document.dispatchEvent(e);
}
function Jy(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Zb(o, s) : o.dispatchEvent(s);
}
var Al = 0;
function ev() {
  x.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? $p()), document.body.insertAdjacentElement("beforeend", e[1] ?? $p()), Al++, () => {
      Al === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Al--;
    };
  }, []);
}
function $p() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var jl = "focusScope.autoFocusOnMount", Rl = "focusScope.autoFocusOnUnmount", Up = { bubbles: !1, cancelable: !0 }, ak = "FocusScope", xd = x.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = x.useState(null), c = On(o), u = On(s), d = x.useRef(null), f = be(t, (y) => l(y)), g = x.useRef({
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
      let y = function(v) {
        if (g.paused || !a) return;
        const b = v.target;
        a.contains(b) ? d.current = b : vn(d.current, { select: !0 });
      }, S = function(v) {
        if (g.paused || !a) return;
        const b = v.relatedTarget;
        b !== null && (a.contains(b) || vn(d.current, { select: !0 }));
      }, m = function(v) {
        if (document.activeElement === document.body)
          for (const k of v)
            k.removedNodes.length > 0 && vn(a);
      };
      document.addEventListener("focusin", y), document.addEventListener("focusout", S);
      const h = new MutationObserver(m);
      return a && h.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", S), h.disconnect();
      };
    }
  }, [r, a, g.paused]), x.useEffect(() => {
    if (a) {
      Hp.add(g);
      const y = document.activeElement;
      if (!a.contains(y)) {
        const m = new CustomEvent(jl, Up);
        a.addEventListener(jl, c), a.dispatchEvent(m), m.defaultPrevented || (lk(pk(tv(a)), { select: !0 }), document.activeElement === y && vn(a));
      }
      return () => {
        a.removeEventListener(jl, c), setTimeout(() => {
          const m = new CustomEvent(Rl, Up);
          a.addEventListener(Rl, u), a.dispatchEvent(m), m.defaultPrevented || vn(y ?? document.body, { select: !0 }), a.removeEventListener(Rl, u), Hp.remove(g);
        }, 0);
      };
    }
  }, [a, c, u, g]);
  const w = x.useCallback(
    (y) => {
      if (!n && !r || g.paused) return;
      const S = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, m = document.activeElement;
      if (S && m) {
        const h = y.currentTarget, [v, b] = ck(h);
        v && b ? !y.shiftKey && m === b ? (y.preventDefault(), n && vn(v, { select: !0 })) : y.shiftKey && m === v && (y.preventDefault(), n && vn(b, { select: !0 })) : m === h && y.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ p.jsx(oe.div, { tabIndex: -1, ...i, ref: f, onKeyDown: w });
});
xd.displayName = ak;
function lk(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (vn(r, { select: t }), document.activeElement !== n) return;
}
function ck(e) {
  const t = tv(e), n = Wp(t, e), r = Wp(t.reverse(), e);
  return [n, r];
}
function tv(e) {
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
    if (!uk(n, { upTo: t })) return n;
}
function uk(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function dk(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function vn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && dk(e) && t && e.select();
  }
}
var Hp = fk();
function fk() {
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
function pk(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ye = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {
}, hk = zm[" useId ".trim().toString()] || (() => {
}), mk = 0;
function Ln(e) {
  const [t, n] = x.useState(hk());
  return Ye(() => {
    n((r) => r ?? String(mk++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const gk = ["top", "right", "bottom", "left"], Fn = Math.min, st = Math.max, da = Math.round, ii = Math.floor, $t = (e) => ({
  x: e,
  y: e
}), yk = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, vk = {
  start: "end",
  end: "start"
};
function Yc(e, t, n) {
  return st(e, Fn(t, n));
}
function ln(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function cn(e) {
  return e.split("-")[0];
}
function wo(e) {
  return e.split("-")[1];
}
function wd(e) {
  return e === "x" ? "y" : "x";
}
function Sd(e) {
  return e === "y" ? "height" : "width";
}
const xk = /* @__PURE__ */ new Set(["top", "bottom"]);
function Vt(e) {
  return xk.has(cn(e)) ? "y" : "x";
}
function bd(e) {
  return wd(Vt(e));
}
function wk(e, t, n) {
  n === void 0 && (n = !1);
  const r = wo(e), o = bd(e), s = Sd(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = fa(i)), [i, fa(i)];
}
function Sk(e) {
  const t = fa(e);
  return [Xc(e), t, Xc(t)];
}
function Xc(e) {
  return e.replace(/start|end/g, (t) => vk[t]);
}
const Gp = ["left", "right"], Yp = ["right", "left"], bk = ["top", "bottom"], kk = ["bottom", "top"];
function Ck(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Yp : Gp : t ? Gp : Yp;
    case "left":
    case "right":
      return t ? bk : kk;
    default:
      return [];
  }
}
function Ek(e, t, n, r) {
  const o = wo(e);
  let s = Ck(cn(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Xc)))), s;
}
function fa(e) {
  return e.replace(/left|right|bottom|top/g, (t) => yk[t]);
}
function Tk(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function nv(e) {
  return typeof e != "number" ? Tk(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function pa(e) {
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
  const s = Vt(t), i = bd(t), a = Sd(i), l = cn(t), c = s === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
  switch (wo(t)) {
    case "start":
      g[i] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      g[i] += f * (n && c ? -1 : 1);
      break;
  }
  return g;
}
const Pk = async (e, t, n) => {
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
  for (let y = 0; y < a.length; y++) {
    const {
      name: S,
      fn: m
    } = a[y], {
      x: h,
      y: v,
      data: b,
      reset: k
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
    u = h ?? u, d = v ?? d, g = {
      ...g,
      [S]: {
        ...g[S],
        ...b
      }
    }, k && w <= 50 && (w++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (c = k.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: u,
      y: d
    } = Xp(c, f, l)), y = -1);
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: g
  };
};
async function Ss(e, t) {
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
  } = ln(t, e), w = nv(g), S = a[f ? d === "floating" ? "reference" : "floating" : d], m = pa(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(S))) == null || n ? S : S.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), h = d === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, v = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), b = await (s.isElement == null ? void 0 : s.isElement(v)) ? await (s.getScale == null ? void 0 : s.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = pa(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: h,
    offsetParent: v,
    strategy: l
  }) : h);
  return {
    top: (m.top - k.top + w.top) / b.y,
    bottom: (k.bottom - m.bottom + w.bottom) / b.y,
    left: (m.left - k.left + w.left) / b.x,
    right: (k.right - m.right + w.right) / b.x
  };
}
const Dk = (e) => ({
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
    } = ln(e, t) || {};
    if (c == null)
      return {};
    const d = nv(u), f = {
      x: n,
      y: r
    }, g = bd(o), w = Sd(g), y = await i.getDimensions(c), S = g === "y", m = S ? "top" : "left", h = S ? "bottom" : "right", v = S ? "clientHeight" : "clientWidth", b = s.reference[w] + s.reference[g] - f[g] - s.floating[w], k = f[g] - s.reference[g], C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let E = C ? C[v] : 0;
    (!E || !await (i.isElement == null ? void 0 : i.isElement(C))) && (E = a.floating[v] || s.floating[w]);
    const T = b / 2 - k / 2, j = E / 2 - y[w] / 2 - 1, M = Fn(d[m], j), D = Fn(d[h], j), N = M, F = E - y[w] - D, U = E / 2 - y[w] / 2 + T, I = Yc(N, U, F), V = !l.arrow && wo(o) != null && U !== I && s.reference[w] / 2 - (U < N ? M : D) - y[w] / 2 < 0, z = V ? U < N ? U - N : U - F : 0;
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
}), Nk = function(e) {
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
        flipAlignment: y = !0,
        ...S
      } = ln(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const m = cn(o), h = Vt(a), v = cn(a) === a, b = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), k = f || (v || !y ? [fa(a)] : Sk(a)), C = w !== "none";
      !f && C && k.push(...Ek(a, y, w, b));
      const E = [a, ...k], T = await Ss(t, S), j = [];
      let M = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (u && j.push(T[m]), d) {
        const U = wk(o, i, b);
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
                if (C) {
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
  return gk.some((t) => e[t] >= 0);
}
const Mk = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = ln(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await Ss(t, {
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
          const s = await Ss(t, {
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
}, rv = /* @__PURE__ */ new Set(["left", "top"]);
async function Ak(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = cn(n), a = wo(n), l = Vt(n) === "y", c = rv.has(i) ? -1 : 1, u = s && l ? -1 : 1, d = ln(t, e);
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
const jk = function(e) {
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
      } = t, l = await Ak(t, e);
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
}, Rk = function(e) {
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
      } = ln(e, t), c = {
        x: n,
        y: r
      }, u = await Ss(t, l), d = Vt(cn(o)), f = wd(d);
      let g = c[f], w = c[d];
      if (s) {
        const S = f === "y" ? "top" : "left", m = f === "y" ? "bottom" : "right", h = g + u[S], v = g - u[m];
        g = Yc(h, g, v);
      }
      if (i) {
        const S = d === "y" ? "top" : "left", m = d === "y" ? "bottom" : "right", h = w + u[S], v = w - u[m];
        w = Yc(h, w, v);
      }
      const y = a.fn({
        ...t,
        [f]: g,
        [d]: w
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
          enabled: {
            [f]: s,
            [d]: i
          }
        }
      };
    }
  };
}, Lk = function(e) {
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
      } = ln(e, t), u = {
        x: n,
        y: r
      }, d = Vt(o), f = wd(d);
      let g = u[f], w = u[d];
      const y = ln(a, t), S = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (l) {
        const v = f === "y" ? "height" : "width", b = s.reference[f] - s.floating[v] + S.mainAxis, k = s.reference[f] + s.reference[v] - S.mainAxis;
        g < b ? g = b : g > k && (g = k);
      }
      if (c) {
        var m, h;
        const v = f === "y" ? "width" : "height", b = rv.has(cn(o)), k = s.reference[d] - s.floating[v] + (b && ((m = i.offset) == null ? void 0 : m[d]) || 0) + (b ? 0 : S.crossAxis), C = s.reference[d] + s.reference[v] + (b ? 0 : ((h = i.offset) == null ? void 0 : h[d]) || 0) - (b ? S.crossAxis : 0);
        w < k ? w = k : w > C && (w = C);
      }
      return {
        [f]: g,
        [d]: w
      };
    }
  };
}, _k = function(e) {
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
      } = ln(e, t), u = await Ss(t, c), d = cn(o), f = wo(o), g = Vt(o) === "y", {
        width: w,
        height: y
      } = s.floating;
      let S, m;
      d === "top" || d === "bottom" ? (S = d, m = f === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (m = d, S = f === "end" ? "top" : "bottom");
      const h = y - u.top - u.bottom, v = w - u.left - u.right, b = Fn(y - u[S], h), k = Fn(w - u[m], v), C = !t.middlewareData.shift;
      let E = b, T = k;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = v), (r = t.middlewareData.shift) != null && r.enabled.y && (E = h), C && !f) {
        const M = st(u.left, 0), D = st(u.right, 0), N = st(u.top, 0), F = st(u.bottom, 0);
        g ? T = w - 2 * (M !== 0 || D !== 0 ? M + D : st(u.left, u.right)) : E = y - 2 * (N !== 0 || F !== 0 ? N + F : st(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: T,
        availableHeight: E
      });
      const j = await i.getDimensions(a.floating);
      return w !== j.width || y !== j.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ba() {
  return typeof window < "u";
}
function So(e) {
  return ov(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function lt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Kt(e) {
  var t;
  return (t = (ov(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ov(e) {
  return Ba() ? e instanceof Node || e instanceof lt(e).Node : !1;
}
function jt(e) {
  return Ba() ? e instanceof Element || e instanceof lt(e).Element : !1;
}
function Ht(e) {
  return Ba() ? e instanceof HTMLElement || e instanceof lt(e).HTMLElement : !1;
}
function Zp(e) {
  return !Ba() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof lt(e).ShadowRoot;
}
const Ik = /* @__PURE__ */ new Set(["inline", "contents"]);
function _s(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Rt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Ik.has(o);
}
const Ok = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Fk(e) {
  return Ok.has(So(e));
}
const Vk = [":popover-open", ":modal"];
function $a(e) {
  return Vk.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const zk = ["transform", "translate", "scale", "rotate", "perspective"], Bk = ["transform", "translate", "scale", "rotate", "perspective", "filter"], $k = ["paint", "layout", "strict", "content"];
function kd(e) {
  const t = Cd(), n = jt(e) ? Rt(e) : e;
  return zk.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Bk.some((r) => (n.willChange || "").includes(r)) || $k.some((r) => (n.contain || "").includes(r));
}
function Uk(e) {
  let t = Vn(e);
  for (; Ht(t) && !ao(t); ) {
    if (kd(t))
      return t;
    if ($a(t))
      return null;
    t = Vn(t);
  }
  return null;
}
function Cd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Wk = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ao(e) {
  return Wk.has(So(e));
}
function Rt(e) {
  return lt(e).getComputedStyle(e);
}
function Ua(e) {
  return jt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Vn(e) {
  if (So(e) === "html")
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
function sv(e) {
  const t = Vn(e);
  return ao(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ht(t) && _s(t) ? t : sv(t);
}
function bs(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = sv(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = lt(o);
  if (s) {
    const a = Qc(i);
    return t.concat(i, i.visualViewport || [], _s(o) ? o : [], a && n ? bs(a) : []);
  }
  return t.concat(o, bs(o, [], n));
}
function Qc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function iv(e) {
  const t = Rt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ht(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = da(n) !== s || da(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function Ed(e) {
  return jt(e) ? e : e.contextElement;
}
function Zr(e) {
  const t = Ed(e);
  if (!Ht(t))
    return $t(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = iv(t);
  let i = (s ? da(n.width) : n.width) / r, a = (s ? da(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const Hk = /* @__PURE__ */ $t(0);
function av(e) {
  const t = lt(e);
  return !Cd() || !t.visualViewport ? Hk : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Kk(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== lt(e) ? !1 : t;
}
function hr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = Ed(e);
  let i = $t(1);
  t && (r ? jt(r) && (i = Zr(r)) : i = Zr(e));
  const a = Kk(s, n, r) ? av(s) : $t(0);
  let l = (o.left + a.x) / i.x, c = (o.top + a.y) / i.y, u = o.width / i.x, d = o.height / i.y;
  if (s) {
    const f = lt(s), g = r && jt(r) ? lt(r) : r;
    let w = f, y = Qc(w);
    for (; y && r && g !== w; ) {
      const S = Zr(y), m = y.getBoundingClientRect(), h = Rt(y), v = m.left + (y.clientLeft + parseFloat(h.paddingLeft)) * S.x, b = m.top + (y.clientTop + parseFloat(h.paddingTop)) * S.y;
      l *= S.x, c *= S.y, u *= S.x, d *= S.y, l += v, c += b, w = lt(y), y = Qc(w);
    }
  }
  return pa({
    width: u,
    height: d,
    x: l,
    y: c
  });
}
function Td(e, t) {
  const n = Ua(e).scrollLeft;
  return t ? t.left + n : hr(Kt(e)).left + n;
}
function lv(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Td(e, r)
  )), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function Gk(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = Kt(r), a = t ? $a(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = $t(1);
  const u = $t(0), d = Ht(r);
  if ((d || !d && !s) && ((So(r) !== "body" || _s(i)) && (l = Ua(r)), Ht(r))) {
    const g = hr(r);
    c = Zr(r), u.x = g.x + r.clientLeft, u.y = g.y + r.clientTop;
  }
  const f = i && !d && !s ? lv(i, l, !0) : $t(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y + f.y
  };
}
function Yk(e) {
  return Array.from(e.getClientRects());
}
function Xk(e) {
  const t = Kt(e), n = Ua(e), r = e.ownerDocument.body, o = st(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = st(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Td(e);
  const a = -n.scrollTop;
  return Rt(r).direction === "rtl" && (i += st(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
function Qk(e, t) {
  const n = lt(e), r = Kt(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const c = Cd();
    (!c || c && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
const qk = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Zk(e, t) {
  const n = hr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = Ht(e) ? Zr(e) : $t(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, c = r * s.y;
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
    r = Qk(e, n);
  else if (t === "document")
    r = Xk(Kt(e));
  else if (jt(t))
    r = Zk(t, n);
  else {
    const o = av(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return pa(r);
}
function cv(e, t) {
  const n = Vn(e);
  return n === t || !jt(n) || ao(n) ? !1 : Rt(n).position === "fixed" || cv(n, t);
}
function Jk(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = bs(e, [], !1).filter((a) => jt(a) && So(a) !== "body"), o = null;
  const s = Rt(e).position === "fixed";
  let i = s ? Vn(e) : e;
  for (; jt(i) && !ao(i); ) {
    const a = Rt(i), l = kd(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && qk.has(o.position) || _s(i) && !l && cv(e, i)) ? r = r.filter((u) => u !== i) : o = a, i = Vn(i);
  }
  return t.set(e, r), r;
}
function eC(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? $a(t) ? [] : Jk(t, this._c) : [].concat(n), r], a = i[0], l = i.reduce((c, u) => {
    const d = Jp(t, u, o);
    return c.top = st(d.top, c.top), c.right = Fn(d.right, c.right), c.bottom = Fn(d.bottom, c.bottom), c.left = st(d.left, c.left), c;
  }, Jp(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function tC(e) {
  const {
    width: t,
    height: n
  } = iv(e);
  return {
    width: t,
    height: n
  };
}
function nC(e, t, n) {
  const r = Ht(t), o = Kt(t), s = n === "fixed", i = hr(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = $t(0);
  function c() {
    l.x = Td(o);
  }
  if (r || !r && !s)
    if ((So(t) !== "body" || _s(o)) && (a = Ua(t)), r) {
      const g = hr(t, !0, s, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && c();
  s && !r && o && c();
  const u = o && !r && !s ? lv(o, a) : $t(0), d = i.left + a.scrollLeft - l.x - u.x, f = i.top + a.scrollTop - l.y - u.y;
  return {
    x: d,
    y: f,
    width: i.width,
    height: i.height
  };
}
function Ll(e) {
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
function uv(e, t) {
  const n = lt(e);
  if ($a(e))
    return n;
  if (!Ht(e)) {
    let o = Vn(e);
    for (; o && !ao(o); ) {
      if (jt(o) && !Ll(o))
        return o;
      o = Vn(o);
    }
    return n;
  }
  let r = eh(e, t);
  for (; r && Fk(r) && Ll(r); )
    r = eh(r, t);
  return r && ao(r) && Ll(r) && !kd(r) ? n : r || Uk(e) || n;
}
const rC = async function(e) {
  const t = this.getOffsetParent || uv, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: nC(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function oC(e) {
  return Rt(e).direction === "rtl";
}
const sC = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Gk,
  getDocumentElement: Kt,
  getClippingRect: eC,
  getOffsetParent: uv,
  getElementRects: rC,
  getClientRects: Yk,
  getDimensions: tC,
  getScale: Zr,
  isElement: jt,
  isRTL: oC
};
function dv(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function iC(e, t) {
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
    const w = ii(d), y = ii(o.clientWidth - (u + f)), S = ii(o.clientHeight - (d + g)), m = ii(u), v = {
      rootMargin: -w + "px " + -y + "px " + -S + "px " + -m + "px",
      threshold: st(0, Fn(1, l)) || 1
    };
    let b = !0;
    function k(C) {
      const E = C[0].intersectionRatio;
      if (E !== l) {
        if (!b)
          return i();
        E ? i(!1, E) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !dv(c, e.getBoundingClientRect()) && i(), b = !1;
    }
    try {
      n = new IntersectionObserver(k, {
        ...v,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(k, v);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function aC(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = Ed(e), u = o || s ? [...c ? bs(c) : [], ...bs(t)] : [];
  u.forEach((m) => {
    o && m.addEventListener("scroll", n, {
      passive: !0
    }), s && m.addEventListener("resize", n);
  });
  const d = c && a ? iC(c, n) : null;
  let f = -1, g = null;
  i && (g = new ResizeObserver((m) => {
    let [h] = m;
    h && h.target === c && g && (g.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var v;
      (v = g) == null || v.observe(t);
    })), n();
  }), c && !l && g.observe(c), g.observe(t));
  let w, y = l ? hr(e) : null;
  l && S();
  function S() {
    const m = hr(e);
    y && !dv(y, m) && n(), y = m, w = requestAnimationFrame(S);
  }
  return n(), () => {
    var m;
    u.forEach((h) => {
      o && h.removeEventListener("scroll", n), s && h.removeEventListener("resize", n);
    }), d == null || d(), (m = g) == null || m.disconnect(), g = null, l && cancelAnimationFrame(w);
  };
}
const lC = jk, cC = Rk, uC = Nk, dC = _k, fC = Mk, th = Dk, pC = Lk, hC = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: sC,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Pk(e, t, {
    ...o,
    platform: s
  });
};
var mC = typeof document < "u", gC = function() {
}, Ri = mC ? x.useLayoutEffect : gC;
function ha(e, t) {
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
        if (!ha(e[r], t[r]))
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
      if (!(s === "_owner" && e.$$typeof) && !ha(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function fv(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function nh(e, t) {
  const n = fv(e);
  return Math.round(t * n) / n;
}
function _l(e) {
  const t = x.useRef(e);
  return Ri(() => {
    t.current = e;
  }), t;
}
function yC(e) {
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
  ha(f, r) || g(r);
  const [w, y] = x.useState(null), [S, m] = x.useState(null), h = x.useCallback((P) => {
    P !== C.current && (C.current = P, y(P));
  }, []), v = x.useCallback((P) => {
    P !== E.current && (E.current = P, m(P));
  }, []), b = s || w, k = i || S, C = x.useRef(null), E = x.useRef(null), T = x.useRef(u), j = l != null, M = _l(l), D = _l(o), N = _l(c), F = x.useCallback(() => {
    if (!C.current || !E.current)
      return;
    const P = {
      placement: t,
      strategy: n,
      middleware: f
    };
    D.current && (P.platform = D.current), hC(C.current, E.current, P).then((L) => {
      const $ = {
        ...L,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: N.current !== !1
      };
      U.current && !ha(T.current, $) && (T.current = $, yo.flushSync(() => {
        d($);
      }));
    });
  }, [f, t, n, D, N]);
  Ri(() => {
    c === !1 && T.current.isPositioned && (T.current.isPositioned = !1, d((P) => ({
      ...P,
      isPositioned: !1
    })));
  }, [c]);
  const U = x.useRef(!1);
  Ri(() => (U.current = !0, () => {
    U.current = !1;
  }), []), Ri(() => {
    if (b && (C.current = b), k && (E.current = k), b && k) {
      if (M.current)
        return M.current(b, k, F);
      F();
    }
  }, [b, k, F, M, j]);
  const I = x.useMemo(() => ({
    reference: C,
    floating: E,
    setReference: h,
    setFloating: v
  }), [h, v]), V = x.useMemo(() => ({
    reference: b,
    floating: k
  }), [b, k]), z = x.useMemo(() => {
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
      ...fv(V.floating) >= 1.5 && {
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
const vC = (e) => {
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
}, xC = (e, t) => ({
  ...lC(e),
  options: [e, t]
}), wC = (e, t) => ({
  ...cC(e),
  options: [e, t]
}), SC = (e, t) => ({
  ...pC(e),
  options: [e, t]
}), bC = (e, t) => ({
  ...uC(e),
  options: [e, t]
}), kC = (e, t) => ({
  ...dC(e),
  options: [e, t]
}), CC = (e, t) => ({
  ...fC(e),
  options: [e, t]
}), EC = (e, t) => ({
  ...vC(e),
  options: [e, t]
});
var TC = "Arrow", pv = x.forwardRef((e, t) => {
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
pv.displayName = TC;
var PC = pv;
function DC(e) {
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
var Pd = "Popper", [hv, mv] = xo(Pd), [NC, gv] = hv(Pd), yv = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = x.useState(null);
  return /* @__PURE__ */ p.jsx(NC, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
yv.displayName = Pd;
var vv = "PopperAnchor", xv = x.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = gv(vv, n), i = x.useRef(null), a = be(t, i), l = x.useRef(null);
    return x.useEffect(() => {
      const c = l.current;
      l.current = (r == null ? void 0 : r.current) || i.current, c !== l.current && s.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ p.jsx(oe.div, { ...o, ref: a });
  }
);
xv.displayName = vv;
var Dd = "PopperContent", [MC, AC] = hv(Dd), wv = x.forwardRef(
  (e, t) => {
    var H, ne, ke, O, _, W;
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
      ...y
    } = e, S = gv(Dd, n), [m, h] = x.useState(null), v = be(t, (Z) => h(Z)), [b, k] = x.useState(null), C = DC(b), E = (C == null ? void 0 : C.width) ?? 0, T = (C == null ? void 0 : C.height) ?? 0, j = r + (s !== "center" ? "-" + s : ""), M = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, D = Array.isArray(c) ? c : [c], N = D.length > 0, F = {
      padding: M,
      boundary: D.filter(RC),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: N
    }, { refs: U, floatingStyles: I, placement: V, isPositioned: z, middlewareData: P } = yC({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: j,
      whileElementsMounted: (...Z) => aC(...Z, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: S.anchor
      },
      middleware: [
        xC({ mainAxis: o + T, alignmentAxis: i }),
        l && wC({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? SC() : void 0,
          ...F
        }),
        l && bC({ ...F }),
        kC({
          ...F,
          apply: ({ elements: Z, rects: X, availableWidth: pe, availableHeight: bt }) => {
            const { width: Be, height: rl } = X.reference, Xn = Z.floating.style;
            Xn.setProperty("--radix-popper-available-width", `${pe}px`), Xn.setProperty("--radix-popper-available-height", `${bt}px`), Xn.setProperty("--radix-popper-anchor-width", `${Be}px`), Xn.setProperty("--radix-popper-anchor-height", `${rl}px`);
          }
        }),
        b && EC({ element: b, padding: a }),
        LC({ arrowWidth: E, arrowHeight: T }),
        f && CC({ strategy: "referenceHidden", ...F })
      ]
    }), [L, $] = kv(V), G = On(w);
    Ye(() => {
      z && (G == null || G());
    }, [z, G]);
    const se = (H = P.arrow) == null ? void 0 : H.x, Ve = (ne = P.arrow) == null ? void 0 : ne.y, Te = ((ke = P.arrow) == null ? void 0 : ke.centerOffset) !== 0, [ze, Ne] = x.useState();
    return Ye(() => {
      m && Ne(window.getComputedStyle(m).zIndex);
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
          zIndex: ze,
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
          MC,
          {
            scope: n,
            placedSide: L,
            onArrowChange: k,
            arrowX: se,
            arrowY: Ve,
            shouldHideArrow: Te,
            children: /* @__PURE__ */ p.jsx(
              oe.div,
              {
                "data-side": L,
                "data-align": $,
                ...y,
                ref: v,
                style: {
                  ...y.style,
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
wv.displayName = Dd;
var Sv = "PopperArrow", jC = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, bv = x.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = AC(Sv, r), i = jC[s.placedSide];
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
          PC,
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
bv.displayName = Sv;
function RC(e) {
  return e !== null;
}
var LC = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var S, m, h;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((S = o.arrow) == null ? void 0 : S.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [c, u] = kv(n), d = { start: "0%", center: "50%", end: "100%" }[u], f = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + a / 2, g = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + l / 2;
    let w = "", y = "";
    return c === "bottom" ? (w = i ? d : `${f}px`, y = `${-l}px`) : c === "top" ? (w = i ? d : `${f}px`, y = `${r.floating.height + l}px`) : c === "right" ? (w = `${-l}px`, y = i ? d : `${g}px`) : c === "left" && (w = `${r.floating.width + l}px`, y = i ? d : `${g}px`), { data: { x: w, y } };
  }
});
function kv(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var _C = yv, IC = xv, OC = wv, FC = bv, VC = "Portal", Nd = x.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, s] = x.useState(!1);
  Ye(() => s(!0), []);
  const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return i ? lb.createPortal(/* @__PURE__ */ p.jsx(oe.div, { ...r, ref: t }), i) : null;
});
Nd.displayName = VC;
var zC = zm[" useInsertionEffect ".trim().toString()] || Ye;
function ks({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, i] = BC({
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
        const f = $C(u) ? u(e) : u;
        f !== e && ((d = i.current) == null || d.call(i, f));
      } else
        s(u);
    },
    [a, e, s, i]
  );
  return [l, c];
}
function BC({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = x.useState(e), o = x.useRef(n), s = x.useRef(t);
  return zC(() => {
    s.current = t;
  }, [t]), x.useEffect(() => {
    var i;
    o.current !== n && ((i = s.current) == null || i.call(s, n), o.current = n);
  }, [n, o]), [n, r, s];
}
function $C(e) {
  return typeof e == "function";
}
function UC(e) {
  const t = x.useRef({ value: e, previous: e });
  return x.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Cv = Object.freeze({
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
}), WC = "VisuallyHidden", HC = x.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(
    oe.span,
    {
      ...e,
      ref: t,
      style: { ...Cv, ...e.style }
    }
  )
);
HC.displayName = WC;
var KC = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Cr = /* @__PURE__ */ new WeakMap(), ai = /* @__PURE__ */ new WeakMap(), li = {}, Il = 0, Ev = function(e) {
  return e && (e.host || Ev(e.parentNode));
}, GC = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ev(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, YC = function(e, t, n, r) {
  var o = GC(t, Array.isArray(e) ? e : [e]);
  li[n] || (li[n] = /* @__PURE__ */ new WeakMap());
  var s = li[n], i = [], a = /* @__PURE__ */ new Set(), l = new Set(o), c = function(d) {
    !d || a.has(d) || (a.add(d), c(d.parentNode));
  };
  o.forEach(c);
  var u = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (a.has(f))
        u(f);
      else
        try {
          var g = f.getAttribute(r), w = g !== null && g !== "false", y = (Cr.get(f) || 0) + 1, S = (s.get(f) || 0) + 1;
          Cr.set(f, y), s.set(f, S), i.push(f), y === 1 && w && ai.set(f, !0), S === 1 && f.setAttribute(n, "true"), w || f.setAttribute(r, "true");
        } catch (m) {
          console.error("aria-hidden: cannot operate on ", f, m);
        }
    });
  };
  return u(t), a.clear(), Il++, function() {
    i.forEach(function(d) {
      var f = Cr.get(d) - 1, g = s.get(d) - 1;
      Cr.set(d, f), s.set(d, g), f || (ai.has(d) || d.removeAttribute(r), ai.delete(d)), g || d.removeAttribute(n);
    }), Il--, Il || (Cr = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakMap(), ai = /* @__PURE__ */ new WeakMap(), li = {});
  };
}, Tv = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = KC(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), YC(r, o, n, "aria-hidden")) : function() {
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
function Pv(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function XC(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Li = "right-scroll-bar-position", _i = "width-before-scroll-bar", QC = "with-scroll-bars-hidden", qC = "--removed-body-scroll-bar-size";
function Ol(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ZC(e, t) {
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
var JC = typeof window < "u" ? x.useLayoutEffect : x.useEffect, rh = /* @__PURE__ */ new WeakMap();
function eE(e, t) {
  var n = ZC(null, function(r) {
    return e.forEach(function(o) {
      return Ol(o, r);
    });
  });
  return JC(function() {
    var r = rh.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || Ol(a, null);
      }), s.forEach(function(a) {
        o.has(a) || Ol(a, i);
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
var Dv = function(e) {
  var t = e.sideCar, n = Pv(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return x.createElement(r, Ft({}, n));
};
Dv.isSideCarExport = !0;
function oE(e, t) {
  return e.useMedium(t), Dv;
}
var Nv = rE(), Fl = function() {
}, Wa = x.forwardRef(function(e, t) {
  var n = x.useRef(null), r = x.useState({
    onScrollCapture: Fl,
    onWheelCapture: Fl,
    onTouchMoveCapture: Fl
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, g = e.noRelative, w = e.noIsolation, y = e.inert, S = e.allowPinchZoom, m = e.as, h = m === void 0 ? "div" : m, v = e.gapMode, b = Pv(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), k = f, C = eE([n, t]), E = Ft(Ft({}, b), o);
  return x.createElement(
    x.Fragment,
    null,
    u && x.createElement(k, { sideCar: Nv, removeScrollBar: c, shards: d, noRelative: g, noIsolation: w, inert: y, setCallbacks: s, allowPinchZoom: !!S, lockRef: n, gapMode: v }),
    i ? x.cloneElement(x.Children.only(a), Ft(Ft({}, E), { ref: C })) : x.createElement(h, Ft({}, E, { className: l, ref: C }), a)
  );
});
Wa.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Wa.classNames = {
  fullWidth: _i,
  zeroRight: Li
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
}, Mv = function() {
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
}, Vl = function(e) {
  return parseInt(e || "", 10) || 0;
}, fE = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Vl(n), Vl(r), Vl(o)];
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
}, hE = Mv(), Jr = "data-scroll-locked", mE = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(QC, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Jr, `] {
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
  
  .`).concat(Li, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(_i, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Li, " .").concat(Li, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(_i, " .").concat(_i, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Jr, `] {
    `).concat(qC, ": ").concat(a, `px;
  }
`);
}, oh = function() {
  var e = parseInt(document.body.getAttribute(Jr) || "0", 10);
  return isFinite(e) ? e : 0;
}, gE = function() {
  x.useEffect(function() {
    return document.body.setAttribute(Jr, (oh() + 1).toString()), function() {
      var e = oh() - 1;
      e <= 0 ? document.body.removeAttribute(Jr) : document.body.setAttribute(Jr, e.toString());
    };
  }, []);
}, yE = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  gE();
  var s = x.useMemo(function() {
    return pE(o);
  }, [o]);
  return x.createElement(hE, { styles: mE(s, !t, o, n ? "" : "!important") });
}, qc = !1;
if (typeof window < "u")
  try {
    var ci = Object.defineProperty({}, "passive", {
      get: function() {
        return qc = !0, !0;
      }
    });
    window.addEventListener("test", ci, ci), window.removeEventListener("test", ci, ci);
  } catch {
    qc = !1;
  }
var Er = qc ? { passive: !1 } : !1, vE = function(e) {
  return e.tagName === "TEXTAREA";
}, Av = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !vE(e) && n[t] === "visible")
  );
}, xE = function(e) {
  return Av(e, "overflowY");
}, wE = function(e) {
  return Av(e, "overflowX");
}, sh = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = jv(e, r);
    if (o) {
      var s = Rv(e, r), i = s[1], a = s[2];
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
}, jv = function(e, t) {
  return e === "v" ? xE(t) : wE(t);
}, Rv = function(e, t) {
  return e === "v" ? SE(t) : bE(t);
}, kE = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, CE = function(e, t, n, r, o) {
  var s = kE(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, l = t.contains(a), c = !1, u = i > 0, d = 0, f = 0;
  do {
    if (!a)
      break;
    var g = Rv(e, a), w = g[0], y = g[1], S = g[2], m = y - S - s * w;
    (w || m) && jv(e, a) && (d += m, f += w);
    var h = a.parentNode;
    a = h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h.host : h;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (u && Math.abs(d) < 1 || !u && Math.abs(f) < 1) && (c = !0), c;
}, ui = function(e) {
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
}, PE = 0, Tr = [];
function DE(e) {
  var t = x.useRef([]), n = x.useRef([0, 0]), r = x.useRef(), o = x.useState(PE++)[0], s = x.useState(Mv)[0], i = x.useRef(e);
  x.useEffect(function() {
    i.current = e;
  }, [e]), x.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var y = XC([e.lockRef.current], (e.shards || []).map(ah), !0).filter(Boolean);
      return y.forEach(function(S) {
        return S.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), y.forEach(function(S) {
          return S.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = x.useCallback(function(y, S) {
    if ("touches" in y && y.touches.length === 2 || y.type === "wheel" && y.ctrlKey)
      return !i.current.allowPinchZoom;
    var m = ui(y), h = n.current, v = "deltaX" in y ? y.deltaX : h[0] - m[0], b = "deltaY" in y ? y.deltaY : h[1] - m[1], k, C = y.target, E = Math.abs(v) > Math.abs(b) ? "h" : "v";
    if ("touches" in y && E === "h" && C.type === "range")
      return !1;
    var T = sh(E, C);
    if (!T)
      return !0;
    if (T ? k = E : (k = E === "v" ? "h" : "v", T = sh(E, C)), !T)
      return !1;
    if (!r.current && "changedTouches" in y && (v || b) && (r.current = k), !k)
      return !0;
    var j = r.current || k;
    return CE(j, S, y, j === "h" ? v : b);
  }, []), l = x.useCallback(function(y) {
    var S = y;
    if (!(!Tr.length || Tr[Tr.length - 1] !== s)) {
      var m = "deltaY" in S ? ih(S) : ui(S), h = t.current.filter(function(k) {
        return k.name === S.type && (k.target === S.target || S.target === k.shadowParent) && EE(k.delta, m);
      })[0];
      if (h && h.should) {
        S.cancelable && S.preventDefault();
        return;
      }
      if (!h) {
        var v = (i.current.shards || []).map(ah).filter(Boolean).filter(function(k) {
          return k.contains(S.target);
        }), b = v.length > 0 ? a(S, v[0]) : !i.current.noIsolation;
        b && S.cancelable && S.preventDefault();
      }
    }
  }, []), c = x.useCallback(function(y, S, m, h) {
    var v = { name: y, delta: S, target: m, should: h, shadowParent: NE(m) };
    t.current.push(v), setTimeout(function() {
      t.current = t.current.filter(function(b) {
        return b !== v;
      });
    }, 1);
  }, []), u = x.useCallback(function(y) {
    n.current = ui(y), r.current = void 0;
  }, []), d = x.useCallback(function(y) {
    c(y.type, ih(y), y.target, a(y, e.lockRef.current));
  }, []), f = x.useCallback(function(y) {
    c(y.type, ui(y), y.target, a(y, e.lockRef.current));
  }, []);
  x.useEffect(function() {
    return Tr.push(s), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, Er), document.addEventListener("touchmove", l, Er), document.addEventListener("touchstart", u, Er), function() {
      Tr = Tr.filter(function(y) {
        return y !== s;
      }), document.removeEventListener("wheel", l, Er), document.removeEventListener("touchmove", l, Er), document.removeEventListener("touchstart", u, Er);
    };
  }, []);
  var g = e.removeScrollBar, w = e.inert;
  return x.createElement(
    x.Fragment,
    null,
    w ? x.createElement(s, { styles: TE(o) }) : null,
    g ? x.createElement(yE, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function NE(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const ME = oE(Nv, DE);
var Md = x.forwardRef(function(e, t) {
  return x.createElement(Wa, Ft({}, e, { ref: t, sideCar: ME }));
});
Md.classNames = Wa.classNames;
var AE = [" ", "Enter", "ArrowUp", "ArrowDown"], jE = [" ", "Enter"], mr = "Select", [Ha, Ka, RE] = qy(mr), [bo, YM] = xo(mr, [
  RE,
  mv
]), Ga = mv(), [LE, Kn] = bo(mr), [_E, IE] = bo(mr), Lv = (e) => {
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
  } = e, y = Ga(t), [S, m] = x.useState(null), [h, v] = x.useState(null), [b, k] = x.useState(!1), C = yd(c), [E, T] = ks({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: mr
  }), [j, M] = ks({
    prop: i,
    defaultProp: a,
    onChange: l,
    caller: mr
  }), D = x.useRef(null), N = S ? w || !!S.closest("form") : !0, [F, U] = x.useState(/* @__PURE__ */ new Set()), I = Array.from(F).map((V) => V.props.value).join(";");
  return /* @__PURE__ */ p.jsx(_C, { ...y, children: /* @__PURE__ */ p.jsxs(
    LE,
    {
      required: g,
      scope: t,
      trigger: S,
      onTriggerChange: m,
      valueNode: h,
      onValueNodeChange: v,
      valueNodeHasChildren: b,
      onValueNodeHasChildrenChange: k,
      contentId: Ln(),
      value: j,
      onValueChange: M,
      open: E,
      onOpenChange: T,
      dir: C,
      triggerPointerDownPosRef: D,
      disabled: f,
      children: [
        /* @__PURE__ */ p.jsx(Ha.Provider, { scope: t, children: /* @__PURE__ */ p.jsx(
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
Lv.displayName = mr;
var _v = "SelectTrigger", Iv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = Ga(n), i = Kn(_v, n), a = i.disabled || r, l = be(t, i.onTriggerChange), c = Ka(n), u = x.useRef("touch"), [d, f, g] = o0((y) => {
      const S = c().filter((v) => !v.disabled), m = S.find((v) => v.value === i.value), h = s0(S, y, m);
      h !== void 0 && i.onValueChange(h.value);
    }), w = (y) => {
      a || (i.onOpenChange(!0), g()), y && (i.triggerPointerDownPosRef.current = {
        x: Math.round(y.pageX),
        y: Math.round(y.pageY)
      });
    };
    return /* @__PURE__ */ p.jsx(IC, { asChild: !0, ...s, children: /* @__PURE__ */ p.jsx(
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
        onClick: ee(o.onClick, (y) => {
          y.currentTarget.focus(), u.current !== "mouse" && w(y);
        }),
        onPointerDown: ee(o.onPointerDown, (y) => {
          u.current = y.pointerType;
          const S = y.target;
          S.hasPointerCapture(y.pointerId) && S.releasePointerCapture(y.pointerId), y.button === 0 && y.ctrlKey === !1 && y.pointerType === "mouse" && (w(y), y.preventDefault());
        }),
        onKeyDown: ee(o.onKeyDown, (y) => {
          const S = d.current !== "";
          !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && f(y.key), !(S && y.key === " ") && AE.includes(y.key) && (w(), y.preventDefault());
        })
      }
    ) });
  }
);
Iv.displayName = _v;
var Ov = "SelectValue", Fv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: i = "", ...a } = e, l = Kn(Ov, n), { onValueNodeHasChildrenChange: c } = l, u = s !== void 0, d = be(t, l.onValueNodeChange);
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
Fv.displayName = Ov;
var OE = "SelectIcon", Vv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ p.jsx(oe.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Vv.displayName = OE;
var FE = "SelectPortal", zv = (e) => /* @__PURE__ */ p.jsx(Nd, { asChild: !0, ...e });
zv.displayName = FE;
var gr = "SelectContent", Bv = x.forwardRef(
  (e, t) => {
    const n = Kn(gr, e.__scopeSelect), [r, o] = x.useState();
    if (Ye(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? yo.createPortal(
        /* @__PURE__ */ p.jsx($v, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx(Ha.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ p.jsx(Uv, { ...e, ref: t });
  }
);
Bv.displayName = gr;
var Ct = 10, [$v, Gn] = bo(gr), VE = "SelectContentImpl", zE = /* @__PURE__ */ ws("SelectContent.RemoveScroll"), Uv = x.forwardRef(
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
      hideWhenDetached: y,
      avoidCollisions: S,
      //
      ...m
    } = e, h = Kn(gr, n), [v, b] = x.useState(null), [k, C] = x.useState(null), E = be(t, (H) => b(H)), [T, j] = x.useState(null), [M, D] = x.useState(
      null
    ), N = Ka(n), [F, U] = x.useState(!1), I = x.useRef(!1);
    x.useEffect(() => {
      if (v) return Tv(v);
    }, [v]), ev();
    const V = x.useCallback(
      (H) => {
        const [ne, ...ke] = N().map((W) => W.ref.current), [O] = ke.slice(-1), _ = document.activeElement;
        for (const W of H)
          if (W === _ || (W == null || W.scrollIntoView({ block: "nearest" }), W === ne && k && (k.scrollTop = 0), W === O && k && (k.scrollTop = k.scrollHeight), W == null || W.focus(), document.activeElement !== _)) return;
      },
      [N, k]
    ), z = x.useCallback(
      () => V([T, v]),
      [V, T, v]
    );
    x.useEffect(() => {
      F && z();
    }, [F, z]);
    const { onOpenChange: P, triggerPointerDownPosRef: L } = h;
    x.useEffect(() => {
      if (v) {
        let H = { x: 0, y: 0 };
        const ne = (O) => {
          var _, W;
          H = {
            x: Math.abs(Math.round(O.pageX) - (((_ = L.current) == null ? void 0 : _.x) ?? 0)),
            y: Math.abs(Math.round(O.pageY) - (((W = L.current) == null ? void 0 : W.y) ?? 0))
          };
        }, ke = (O) => {
          H.x <= 10 && H.y <= 10 ? O.preventDefault() : v.contains(O.target) || P(!1), document.removeEventListener("pointermove", ne), L.current = null;
        };
        return L.current !== null && (document.addEventListener("pointermove", ne), document.addEventListener("pointerup", ke, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", ne), document.removeEventListener("pointerup", ke, { capture: !0 });
        };
      }
    }, [v, P, L]), x.useEffect(() => {
      const H = () => P(!1);
      return window.addEventListener("blur", H), window.addEventListener("resize", H), () => {
        window.removeEventListener("blur", H), window.removeEventListener("resize", H);
      };
    }, [P]);
    const [$, G] = o0((H) => {
      const ne = N().filter((_) => !_.disabled), ke = ne.find((_) => _.ref.current === document.activeElement), O = s0(ne, H, ke);
      O && setTimeout(() => O.ref.current.focus());
    }), se = x.useCallback(
      (H, ne, ke) => {
        const O = !I.current && !ke;
        (h.value !== void 0 && h.value === ne || O) && (j(H), O && (I.current = !0));
      },
      [h.value]
    ), Ve = x.useCallback(() => v == null ? void 0 : v.focus(), [v]), Te = x.useCallback(
      (H, ne, ke) => {
        const O = !I.current && !ke;
        (h.value !== void 0 && h.value === ne || O) && D(H);
      },
      [h.value]
    ), ze = r === "popper" ? Zc : Wv, Ne = ze === Zc ? {
      side: a,
      sideOffset: l,
      align: c,
      alignOffset: u,
      arrowPadding: d,
      collisionBoundary: f,
      collisionPadding: g,
      sticky: w,
      hideWhenDetached: y,
      avoidCollisions: S
    } : {};
    return /* @__PURE__ */ p.jsx(
      $v,
      {
        scope: n,
        content: v,
        viewport: k,
        onViewportChange: C,
        itemRefCallback: se,
        selectedItem: T,
        onItemLeave: Ve,
        itemTextRefCallback: Te,
        focusSelectedItem: z,
        selectedItemText: M,
        position: r,
        isPositioned: F,
        searchRef: $,
        children: /* @__PURE__ */ p.jsx(Md, { as: zE, allowPinchZoom: !0, children: /* @__PURE__ */ p.jsx(
          xd,
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
              vd,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: (H) => H.preventDefault(),
                onDismiss: () => h.onOpenChange(!1),
                children: /* @__PURE__ */ p.jsx(
                  ze,
                  {
                    role: "listbox",
                    id: h.contentId,
                    "data-state": h.open ? "open" : "closed",
                    dir: h.dir,
                    onContextMenu: (H) => H.preventDefault(),
                    ...m,
                    ...Ne,
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
Uv.displayName = VE;
var BE = "SelectItemAlignedPosition", Wv = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = Kn(gr, n), i = Gn(gr, n), [a, l] = x.useState(null), [c, u] = x.useState(null), d = be(t, (E) => u(E)), f = Ka(n), g = x.useRef(!1), w = x.useRef(!0), { viewport: y, selectedItem: S, selectedItemText: m, focusSelectedItem: h } = i, v = x.useCallback(() => {
    if (s.trigger && s.valueNode && a && c && y && S && m) {
      const E = s.trigger.getBoundingClientRect(), T = c.getBoundingClientRect(), j = s.valueNode.getBoundingClientRect(), M = m.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const _ = M.left - T.left, W = j.left - _, Z = E.left - W, X = E.width + Z, pe = Math.max(X, T.width), bt = window.innerWidth - Ct, Be = Fp(W, [
          Ct,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Ct, bt - pe)
        ]);
        a.style.minWidth = X + "px", a.style.left = Be + "px";
      } else {
        const _ = T.right - M.right, W = window.innerWidth - j.right - _, Z = window.innerWidth - E.right - W, X = E.width + Z, pe = Math.max(X, T.width), bt = window.innerWidth - Ct, Be = Fp(W, [
          Ct,
          Math.max(Ct, bt - pe)
        ]);
        a.style.minWidth = X + "px", a.style.right = Be + "px";
      }
      const D = f(), N = window.innerHeight - Ct * 2, F = y.scrollHeight, U = window.getComputedStyle(c), I = parseInt(U.borderTopWidth, 10), V = parseInt(U.paddingTop, 10), z = parseInt(U.borderBottomWidth, 10), P = parseInt(U.paddingBottom, 10), L = I + V + F + P + z, $ = Math.min(S.offsetHeight * 5, L), G = window.getComputedStyle(y), se = parseInt(G.paddingTop, 10), Ve = parseInt(G.paddingBottom, 10), Te = E.top + E.height / 2 - Ct, ze = N - Te, Ne = S.offsetHeight / 2, H = S.offsetTop + Ne, ne = I + V + H, ke = L - ne;
      if (ne <= Te) {
        const _ = D.length > 0 && S === D[D.length - 1].ref.current;
        a.style.bottom = "0px";
        const W = c.clientHeight - y.offsetTop - y.offsetHeight, Z = Math.max(
          ze,
          Ne + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (_ ? Ve : 0) + W + z
        ), X = ne + Z;
        a.style.height = X + "px";
      } else {
        const _ = D.length > 0 && S === D[0].ref.current;
        a.style.top = "0px";
        const Z = Math.max(
          Te,
          I + y.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (_ ? se : 0) + Ne
        ) + ke;
        a.style.height = Z + "px", y.scrollTop = ne - Te + y.offsetTop;
      }
      a.style.margin = `${Ct}px 0`, a.style.minHeight = $ + "px", a.style.maxHeight = N + "px", r == null || r(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    f,
    s.trigger,
    s.valueNode,
    a,
    c,
    y,
    S,
    m,
    s.dir,
    r
  ]);
  Ye(() => v(), [v]);
  const [b, k] = x.useState();
  Ye(() => {
    c && k(window.getComputedStyle(c).zIndex);
  }, [c]);
  const C = x.useCallback(
    (E) => {
      E && w.current === !0 && (v(), h == null || h(), w.current = !1);
    },
    [v, h]
  );
  return /* @__PURE__ */ p.jsx(
    UE,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: C,
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
Wv.displayName = BE;
var $E = "SelectPopperPosition", Zc = x.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Ct,
    ...s
  } = e, i = Ga(n);
  return /* @__PURE__ */ p.jsx(
    OC,
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
Zc.displayName = $E;
var [UE, Ad] = bo(gr, {}), Jc = "SelectViewport", Hv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = Gn(Jc, n), i = Ad(Jc, n), a = be(t, s.onViewportChange), l = x.useRef(0);
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
      /* @__PURE__ */ p.jsx(Ha.Slot, { scope: n, children: /* @__PURE__ */ p.jsx(
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
                const w = window.innerHeight - Ct * 2, y = parseFloat(d.style.minHeight), S = parseFloat(d.style.height), m = Math.max(y, S);
                if (m < w) {
                  const h = m + g, v = Math.min(w, h), b = h - v;
                  d.style.height = v + "px", d.style.bottom === "0px" && (u.scrollTop = b > 0 ? b : 0, d.style.justifyContent = "flex-end");
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
Hv.displayName = Jc;
var Kv = "SelectGroup", [WE, HE] = bo(Kv), KE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ln();
    return /* @__PURE__ */ p.jsx(WE, { scope: n, id: o, children: /* @__PURE__ */ p.jsx(oe.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
KE.displayName = Kv;
var Gv = "SelectLabel", GE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = HE(Gv, n);
    return /* @__PURE__ */ p.jsx(oe.div, { id: o.id, ...r, ref: t });
  }
);
GE.displayName = Gv;
var ma = "SelectItem", [YE, Yv] = bo(ma), Xv = x.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...i
    } = e, a = Kn(ma, n), l = Gn(ma, n), c = a.value === r, [u, d] = x.useState(s ?? ""), [f, g] = x.useState(!1), w = be(
      t,
      (h) => {
        var v;
        return (v = l.itemRefCallback) == null ? void 0 : v.call(l, h, r, o);
      }
    ), y = Ln(), S = x.useRef("touch"), m = () => {
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
        textId: y,
        isSelected: c,
        onItemTextChange: x.useCallback((h) => {
          d((v) => v || ((h == null ? void 0 : h.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ p.jsx(
          Ha.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: u,
            children: /* @__PURE__ */ p.jsx(
              oe.div,
              {
                role: "option",
                "aria-labelledby": y,
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
                  var v;
                  S.current = h.pointerType, o ? (v = l.onItemLeave) == null || v.call(l) : S.current === "mouse" && h.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: ee(i.onPointerLeave, (h) => {
                  var v;
                  h.currentTarget === document.activeElement && ((v = l.onItemLeave) == null || v.call(l));
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
Xv.displayName = ma;
var zo = "SelectItemText", Qv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, i = Kn(zo, n), a = Gn(zo, n), l = Yv(zo, n), c = IE(zo, n), [u, d] = x.useState(null), f = be(
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
    ), { onNativeOptionAdd: y, onNativeOptionRemove: S } = c;
    return Ye(() => (y(w), () => S(w)), [y, S, w]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(oe.span, { id: l.textId, ...s, ref: f }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? yo.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
Qv.displayName = zo;
var qv = "SelectItemIndicator", Zv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Yv(qv, n).isSelected ? /* @__PURE__ */ p.jsx(oe.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Zv.displayName = qv;
var eu = "SelectScrollUpButton", Jv = x.forwardRef((e, t) => {
  const n = Gn(eu, e.__scopeSelect), r = Ad(eu, e.__scopeSelect), [o, s] = x.useState(!1), i = be(t, r.onScrollButtonChange);
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
Jv.displayName = eu;
var tu = "SelectScrollDownButton", e0 = x.forwardRef((e, t) => {
  const n = Gn(tu, e.__scopeSelect), r = Ad(tu, e.__scopeSelect), [o, s] = x.useState(!1), i = be(t, r.onScrollButtonChange);
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
e0.displayName = tu;
var t0 = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = Gn("SelectScrollButton", n), i = x.useRef(null), a = Ka(n), l = x.useCallback(() => {
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
var nu = "SelectArrow", qE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ga(n), s = Kn(nu, n), i = Gn(nu, n);
    return s.open && i.position === "popper" ? /* @__PURE__ */ p.jsx(FC, { ...o, ...r, ref: t }) : null;
  }
);
qE.displayName = nu;
var ZE = "SelectBubbleInput", n0 = x.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = x.useRef(null), s = be(r, o), i = UC(t);
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
        style: { ...Cv, ...n.style },
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
  const t = On(e), n = x.useRef(""), r = x.useRef(0), o = x.useCallback(
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
var eT = Lv, tT = Iv, nT = Fv, rT = Vv, oT = zv, sT = Bv, iT = Hv, aT = Xv, lT = Qv, cT = Zv, uT = Jv, dT = e0;
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
const Le = (e, t) => {
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
const a0 = Le("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l0 = Le("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ya = Le("Building2", [
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
const mT = Le("Building", [
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
const Cs = Le("CalendarDays", [
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
const Ii = Le("Calendar", [
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
const gT = Le("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jd = Le("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c0 = Le("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u0 = Le("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d0 = Le("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lo = Le("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yT = Le("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vT = Le("ExternalLink", [
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
const lh = Le("List", [
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
const Oi = Le("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = Le("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xT = Le("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function di({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(eT, { "data-slot": "select", ...e });
}
function ch({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(nT, { "data-slot": "select-value", ...e });
}
function fi({
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
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ p.jsx(rT, { asChild: !0, children: /* @__PURE__ */ p.jsx(jd, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function pi({
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
        "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-700 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-[9999] max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
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
function yn({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ p.jsxs(
    aT,
    {
      "data-slot": "select-item",
      className: Se(
        "focus:bg-gray-100 dark:focus:bg-gray-700 focus:text-gray-900 dark:focus:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
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
      children: /* @__PURE__ */ p.jsx(jd, { className: "size-4" })
    }
  );
}
const ru = x.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ p.jsx(
    "input",
    {
      type: t,
      className: Se(
        "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
ru.displayName = "Input";
var zl = "rovingFocusGroup.onEntryFocus", bT = { bubbles: !1, cancelable: !0 }, Os = "RovingFocusGroup", [ou, f0, kT] = qy(Os), [CT, p0] = xo(
  Os,
  [kT]
), [ET, TT] = CT(Os), h0 = x.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(ou.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(ou.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(PT, { ...e, ref: t }) }) })
);
h0.displayName = Os;
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
  } = e, f = x.useRef(null), g = be(t, f), w = yd(s), [y, S] = ks({
    prop: i,
    defaultProp: a ?? null,
    onChange: l,
    caller: Os
  }), [m, h] = x.useState(!1), v = On(c), b = f0(n), k = x.useRef(!1), [C, E] = x.useState(0);
  return x.useEffect(() => {
    const T = f.current;
    if (T)
      return T.addEventListener(zl, v), () => T.removeEventListener(zl, v);
  }, [v]), /* @__PURE__ */ p.jsx(
    ET,
    {
      scope: n,
      orientation: r,
      dir: w,
      loop: o,
      currentTabStopId: y,
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
          tabIndex: m || C === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: ee(e.onMouseDown, () => {
            k.current = !0;
          }),
          onFocus: ee(e.onFocus, (T) => {
            const j = !k.current;
            if (T.target === T.currentTarget && j && !m) {
              const M = new CustomEvent(zl, bT);
              if (T.currentTarget.dispatchEvent(M), !M.defaultPrevented) {
                const D = b().filter((V) => V.focusable), N = D.find((V) => V.active), F = D.find((V) => V.id === y), I = [N, F, ...D].filter(
                  Boolean
                ).map((V) => V.ref.current);
                y0(I, u);
              }
            }
            k.current = !1;
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
    } = e, l = Ln(), c = s || l, u = TT(m0, n), d = u.currentTabStopId === c, f = f0(n), { onFocusableItemAdd: g, onFocusableItemRemove: w, currentTabStopId: y } = u;
    return x.useEffect(() => {
      if (r)
        return g(), () => w();
    }, [r, g, w]), /* @__PURE__ */ p.jsx(
      ou.ItemSlot,
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
                let v = f().filter((b) => b.focusable).map((b) => b.ref.current);
                if (m === "last") v.reverse();
                else if (m === "prev" || m === "next") {
                  m === "prev" && v.reverse();
                  const b = v.indexOf(S.currentTarget);
                  v = u.loop ? AT(v, b + 1) : v.slice(b + 1);
                }
                setTimeout(() => y0(v));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: d, hasTabStop: y != null }) : i
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
function y0(e, t = !1) {
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
var Fs = (e) => {
  const { present: t, children: n } = e, r = _T(t), o = typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n), s = be(r.ref, IT(o));
  return typeof n == "function" || r.isPresent ? x.cloneElement(o, { ref: s }) : null;
};
Fs.displayName = "Presence";
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
    const c = hi(r.current);
    s.current = a === "mounted" ? c : "none";
  }, [a]), Ye(() => {
    const c = r.current, u = o.current;
    if (u !== e) {
      const f = s.current, g = hi(c);
      e ? l("MOUNT") : g === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(u && f !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Ye(() => {
    if (t) {
      let c;
      const u = t.ownerDocument.defaultView ?? window, d = (g) => {
        const y = hi(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && y && (l("ANIMATION_END"), !o.current)) {
          const S = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S);
          });
        }
      }, f = (g) => {
        g.target === t && (s.current = hi(r.current));
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
function hi(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function IT(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Xa = "Tabs", [OT, XM] = xo(Xa, [
  p0
]), v0 = p0(), [FT, Rd] = OT(Xa), x0 = x.forwardRef(
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
      caller: Xa
    });
    return /* @__PURE__ */ p.jsx(
      FT,
      {
        scope: n,
        baseId: Ln(),
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
x0.displayName = Xa;
var w0 = "TabsList", S0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = Rd(w0, n), i = v0(n);
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
var b0 = "TabsTrigger", k0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, i = Rd(b0, n), a = v0(n), l = T0(i.baseId, r), c = P0(i.baseId, r), u = r === i.value;
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
k0.displayName = b0;
var C0 = "TabsContent", E0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...i } = e, a = Rd(C0, n), l = T0(a.baseId, r), c = P0(a.baseId, r), u = r === a.value, d = x.useRef(u);
    return x.useEffect(() => {
      const f = requestAnimationFrame(() => d.current = !1);
      return () => cancelAnimationFrame(f);
    }, []), /* @__PURE__ */ p.jsx(Fs, { present: o || u, children: ({ present: f }) => /* @__PURE__ */ p.jsx(
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
E0.displayName = C0;
function T0(e, t) {
  return `${e}-trigger-${t}`;
}
function P0(e, t) {
  return `${e}-content-${t}`;
}
var VT = x0, zT = S0, BT = k0, $T = E0;
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
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        e
      ),
      ...t
    }
  );
}
function Qn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    BT,
    {
      "data-slot": "tabs-trigger",
      className: Se(
        "data-[state=active]:bg-background cursor-pointer dark:data-[state=active]:text-foreground dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus:outline-none",
        e
      ),
      ...t
    }
  );
}
function mi({
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
const Pr = new GT(), YT = [
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
  const [t, n] = x.useState([]), [r, o] = x.useState({}), [s, i] = x.useState({}), [a, l] = x.useState(!0), [c, u] = x.useState(!1), [d, f] = x.useState(null), [g, w] = x.useState(0), [y, S] = x.useState(0), [m, h] = x.useState(e), [v, b] = x.useState(), k = x.useRef(""), C = x.useRef(!0);
  x.useEffect(() => {
    const D = JSON.stringify(e);
    if (C.current) {
      C.current = !1, k.current = D, h(e);
      return;
    }
    k.current !== D && (k.current = D, h(e));
  }, [e]);
  const E = x.useCallback(async () => {
    var D;
    try {
      l(!0), f(null);
      const N = await Pr.fetchEvents(m);
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
          const V = Pr.transformWordPressEventToEvent(I), z = Pr.transformWordPressEventToMetadata(I);
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
    if (!(!(v != null && v.hasMore) || c))
      try {
        u(!0), f(null);
        const N = {
          ...m,
          page: v.nextPage || (m.page || 1) + 1
        }, F = await Pr.fetchEvents(N);
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
            const z = Pr.transformWordPressEventToEvent(V), P = Pr.transformWordPressEventToMetadata(V);
            U.push(z), I[z.id] = P;
          }), n((V) => [...V, ...U]), o((V) => ({ ...V, ...I })), b(F.pagination);
        }
      } catch (N) {
        console.error("Error loading more events:", N), f(N instanceof Error ? N.message : "Failed to load more events");
      } finally {
        u(!1);
      }
  }, [JSON.stringify(m), JSON.stringify(v), c]), M = x.useCallback((D) => {
    h((N) => ({ ...N, ...D }));
  }, []);
  return {
    events: t,
    eventMetadata: r,
    loading: a,
    error: d,
    total: g,
    pages: y,
    refetch: T,
    setFilters: M,
    hasMore: (v == null ? void 0 : v.hasMore) || !1,
    loadMore: j,
    loadingMore: c,
    pagination: v,
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
var Qa = "Dialog", [M0, QM] = xo(Qa), [ZT, Lt] = M0(Qa), A0 = (e) => {
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
    caller: Qa
  });
  return /* @__PURE__ */ p.jsx(
    ZT,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: Ln(),
      titleId: Ln(),
      descriptionId: Ln(),
      open: c,
      onOpenChange: u,
      onOpenToggle: x.useCallback(() => u((d) => !d), [u]),
      modal: i,
      children: n
    }
  );
};
A0.displayName = Qa;
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
        "data-state": Id(o.open),
        ...r,
        ref: s,
        onClick: ee(e.onClick, o.onOpenToggle)
      }
    );
  }
);
JT.displayName = j0;
var Ld = "DialogPortal", [eP, R0] = M0(Ld, {
  forceMount: void 0
}), L0 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = Lt(Ld, t);
  return /* @__PURE__ */ p.jsx(eP, { scope: t, forceMount: n, children: x.Children.map(r, (i) => /* @__PURE__ */ p.jsx(Fs, { present: n || s.open, children: /* @__PURE__ */ p.jsx(Nd, { asChild: !0, container: o, children: i }) })) });
};
L0.displayName = Ld;
var ga = "DialogOverlay", _0 = x.forwardRef(
  (e, t) => {
    const n = R0(ga, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Lt(ga, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ p.jsx(Fs, { present: r || s.open, children: /* @__PURE__ */ p.jsx(nP, { ...o, ref: t }) }) : null;
  }
);
_0.displayName = ga;
var tP = /* @__PURE__ */ ws("DialogOverlay.RemoveScroll"), nP = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Lt(ga, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p.jsx(Md, { as: tP, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ p.jsx(
        oe.div,
        {
          "data-state": Id(o.open),
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
    return /* @__PURE__ */ p.jsx(Fs, { present: r || s.open, children: s.modal ? /* @__PURE__ */ p.jsx(rP, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(oP, { ...o, ref: t }) });
  }
);
I0.displayName = yr;
var rP = x.forwardRef(
  (e, t) => {
    const n = Lt(yr, e.__scopeDialog), r = x.useRef(null), o = be(t, n.contentRef, r);
    return x.useEffect(() => {
      const s = r.current;
      if (s) return Tv(s);
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
    return ev(), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        xd,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ p.jsx(
            vd,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": Id(a.open),
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
), _d = "DialogTitle", F0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Lt(_d, n);
    return /* @__PURE__ */ p.jsx(oe.h2, { id: o.titleId, ...r, ref: t });
  }
);
F0.displayName = _d;
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
function Id(e) {
  return e ? "open" : "closed";
}
var U0 = "DialogTitleWarning", [qM, W0] = Ub(U0, {
  contentName: yr,
  titleName: _d,
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
        "fixed left-[50%] top-[50%] z-[99999] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
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
function co({
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
          outline: "text-slate-950 dark:text-slate-50 border-slate-200 dark:border-slate-800",
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
    const f = u.substring(0, d), g = f.lastIndexOf("."), w = f.lastIndexOf(" "), y = g > d - 50 ? g + 1 : w;
    return u.substring(0, y > 0 ? y : d).trim();
  }, l = (u) => {
    const d = e.startDate, f = e.endDate || new Date(d.getTime() + 60 * 60 * 1e3), g = (w) => w.toISOString().replace(/-|:|\.\d\d\d/g, "");
    switch (u) {
      case "google":
        const w = new URL("https://calendar.google.com/calendar/render");
        return w.searchParams.append("action", "TEMPLATE"), w.searchParams.append("text", e.title), w.searchParams.append("dates", `${g(d)}/${g(f)}`), w.searchParams.append("details", e.description || ""), i != null && i.location && w.searchParams.append("location", i.location), w.toString();
      case "outlook":
      case "apple":
        const y = [
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
        return `data:text/calendar;charset=utf8,${encodeURIComponent(y)}`;
    }
  }, c = {
    clubs: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    unbc: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    organizations: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    sports: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
  };
  return /* @__PURE__ */ p.jsx(dP, { open: n, onOpenChange: r, children: /* @__PURE__ */ p.jsxs(Q0, { className: "max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 sm:w-full p-4 sm:p-6", children: [
    /* @__PURE__ */ p.jsxs(q0, { children: [
      /* @__PURE__ */ p.jsx(J0, { className: "text-xl text-gray-900 dark:text-gray-100", children: e.title }),
      e.description && /* @__PURE__ */ p.jsxs("div", { className: "mt-2", children: [
        /* @__PURE__ */ p.jsx(ex, { className: `text-gray-600 dark:text-gray-400 leading-relaxed break-words ${o ? "max-h-[40vh] overflow-y-auto pr-2" : ""}`, children: o ? e.description : a(e.description) }),
        e.description.length > 180 && /* @__PURE__ */ p.jsx(
          "button",
          {
            onClick: () => s(!o),
            className: "inline-flex items-center gap-1 mt-3 px-3 py-2 text-sm text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100 hover:bg-blue-50 dark:hover:bg-blue-900/20 active:bg-blue-100 dark:active:bg-blue-900/30 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
            children: o ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
              "Show less",
              /* @__PURE__ */ p.jsx(d0, { className: "h-4 w-4" })
            ] }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
              "Read more",
              /* @__PURE__ */ p.jsx(jd, { className: "h-4 w-4" })
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "space-y-4 my-4", children: /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
        /* @__PURE__ */ p.jsx(lo, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
        /* @__PURE__ */ p.jsxs("div", { children: [
          /* @__PURE__ */ p.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100", children: e.startDate.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          }) }),
          /* @__PURE__ */ p.jsxs("div", { className: "text-gray-600 dark:text-gray-400", children: [
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
          /* @__PURE__ */ p.jsx(Is, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: i.location })
        ] }),
        i.organization && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(Ya, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: i.organization })
        ] }),
        i.cost && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(yT, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: i.cost })
        ] }),
        i.website && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(vT, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
          /* @__PURE__ */ p.jsx(
            "a",
            {
              href: i.website,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-block text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100 hover:underline transition-colors break-all cursor-pointer",
              style: { pointerEvents: "auto", position: "relative", zIndex: 10 },
              children: "Event Website"
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          i.category && /* @__PURE__ */ p.jsx(co, { className: c[i.category] || "bg-gray-100 text-gray-800", children: i.category.charAt(0).toUpperCase() + i.category.slice(1) }),
          i.registrationRequired && /* @__PURE__ */ p.jsx(co, { variant: "outline", className: "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300", children: "Registration Required" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsxs(Z0, { className: "flex-col sm:flex-col gap-2", children: [
      /* @__PURE__ */ p.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400 mb-2", children: "Add to your calendar:" }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex gap-2 w-full", children: [
        /* @__PURE__ */ p.jsxs(
          en,
          {
            variant: "outline",
            className: "flex-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 text-xs sm:text-sm",
            onClick: () => window.open(l("google"), "_blank"),
            children: [
              /* @__PURE__ */ p.jsx(Ii, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Google"
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          en,
          {
            variant: "outline",
            className: "flex-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 text-xs sm:text-sm",
            onClick: () => {
              const u = l("outlook"), d = document.createElement("a");
              d.href = u, d.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, d.click();
            },
            children: [
              /* @__PURE__ */ p.jsx(Ii, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Outlook"
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          en,
          {
            variant: "outline",
            className: "flex-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 text-xs sm:text-sm",
            onClick: () => {
              const u = l("apple"), d = document.createElement("a");
              d.href = u, d.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, d.click();
            },
            children: [
              /* @__PURE__ */ p.jsx(Ii, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Apple"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
const Od = x.createContext({});
function Fd(e) {
  const t = x.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const qa = x.createContext(null), Vd = x.createContext({
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
  }), { nonce: s } = x.useContext(Vd);
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
  const a = Fd(gP), l = x.useId(), c = x.useCallback((d) => {
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
  }, [n]), i === "popLayout" && (e = p.jsx(hP, { isPresent: n, children: e })), p.jsx(qa.Provider, { value: u, children: e });
};
function gP() {
  return /* @__PURE__ */ new Map();
}
function nx(e = !0) {
  const t = x.useContext(qa);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t, s = x.useId();
  x.useEffect(() => {
    e && o(s);
  }, [e]);
  const i = x.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, i] : [!0];
}
const gi = (e) => e.key || "";
function ph(e) {
  const t = [];
  return x.Children.forEach(e, (n) => {
    x.isValidElement(n) && t.push(n);
  }), t;
}
const zd = typeof window < "u", rx = zd ? x.useLayoutEffect : x.useEffect, hh = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: o = !0, mode: s = "sync", propagate: i = !1 }) => {
  const [a, l] = nx(i), c = x.useMemo(() => ph(e), [e]), u = i && !a ? [] : c.map(gi), d = x.useRef(!0), f = x.useRef(c), g = Fd(() => /* @__PURE__ */ new Map()), [w, y] = x.useState(c), [S, m] = x.useState(c);
  rx(() => {
    d.current = !1, f.current = c;
    for (let b = 0; b < S.length; b++) {
      const k = gi(S[b]);
      u.includes(k) ? g.delete(k) : g.get(k) !== !0 && g.set(k, !1);
    }
  }, [S, u.length, u.join("-")]);
  const h = [];
  if (c !== w) {
    let b = [...c];
    for (let k = 0; k < S.length; k++) {
      const C = S[k], E = gi(C);
      u.includes(E) || (b.splice(k, 0, C), h.push(C));
    }
    s === "wait" && h.length && (b = h), m(ph(b)), y(c);
    return;
  }
  const { forceRender: v } = x.useContext(Od);
  return p.jsx(p.Fragment, { children: S.map((b) => {
    const k = gi(b), C = i && !a ? !1 : c === S || u.includes(k), E = () => {
      if (g.has(k))
        g.set(k, !0);
      else
        return;
      let T = !0;
      g.forEach((j) => {
        j || (T = !1);
      }), T && (v == null || v(), m(f.current), i && (l == null || l()), r && r());
    };
    return p.jsx(mP, { isPresent: C, initial: !d.current || n ? void 0 : !1, custom: C ? void 0 : t, presenceAffectsLayout: o, mode: s, onExitComplete: C ? void 0 : E, children: b }, k);
  }) });
}, ct = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let ox = ct;
// @__NO_SIDE_EFFECTS__
function Bd(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const uo = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, tn = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, nn = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, yP = {
  useManualTiming: !1
};
function vP(e) {
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
const yi = [
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
  }, s = () => n = !0, i = yi.reduce((m, h) => (m[h] = vP(s), m), {}), { read: a, resolveKeyframes: l, update: c, preRender: u, render: d, postRender: f } = i, g = () => {
    const m = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(m - o.timestamp, xP), 1), o.timestamp = m, o.isProcessing = !0, a.process(o), l.process(o), c.process(o), u.process(o), d.process(o), f.process(o), o.isProcessing = !1, n && t && (r = !1, e(g));
  }, w = () => {
    n = !0, r = !0, o.isProcessing || e(g);
  };
  return { schedule: yi.reduce((m, h) => {
    const v = i[h];
    return m[h] = (b, k = !1, C = !1) => (n || w(), v.schedule(b, k, C)), m;
  }, {}), cancel: (m) => {
    for (let h = 0; h < yi.length; h++)
      i[yi[h]].cancel(m);
  }, state: o, steps: i };
}
const { schedule: de, cancel: zn, state: Ie, steps: Bl } = sx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ct, !0), ix = x.createContext({ strict: !1 }), mh = {
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
}, fo = {};
for (const e in mh)
  fo[e] = {
    isEnabled: (t) => mh[e].some((n) => !!t[n])
  };
function wP(e) {
  for (const t in e)
    fo[t] = {
      ...fo[t],
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
function ya(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || SP.has(e);
}
let ax = (e) => !ya(e);
function bP(e) {
  e && (ax = (t) => t.startsWith("on") ? !ya(t) : e(t));
}
try {
  bP(require("@emotion/is-prop-valid").default);
} catch {
}
function kP(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (ax(o) || n === !0 && ya(o) || !t && !ya(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function CP(e) {
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
const Za = x.createContext({});
function Es(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ja(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const $d = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Ud = ["initial", ...$d];
function el(e) {
  return Ja(e.animate) || Ud.some((t) => Es(e[t]));
}
function lx(e) {
  return !!(el(e) || e.variants);
}
function EP(e, t) {
  if (el(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Es(n) ? n : void 0,
      animate: Es(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function TP(e) {
  const { initial: t, animate: n } = EP(e, x.useContext(Za));
  return x.useMemo(() => ({ initial: t, animate: n }), [gh(t), gh(n)]);
}
function gh(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const PP = Symbol.for("motionComponentSymbol");
function zr(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function DP(e, t, n) {
  return x.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : zr(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const Wd = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), NP = "framerAppearId", cx = "data-" + Wd(NP), { schedule: Hd } = sx(queueMicrotask, !1), ux = x.createContext({});
function MP(e, t, n, r, o) {
  var s, i;
  const { visualElement: a } = x.useContext(Za), l = x.useContext(ix), c = x.useContext(qa), u = x.useContext(Vd).reducedMotion, d = x.useRef(null);
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
  const y = n[cx], S = x.useRef(!!y && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, y)) && ((i = window.MotionHasOptimisedAnimation) === null || i === void 0 ? void 0 : i.call(window, y)));
  return rx(() => {
    f && (w.current = !0, window.MotionIsMounted = !0, f.updateFeatures(), Hd.render(f.render), S.current && f.animationState && f.animationState.animateChanges());
  }), x.useEffect(() => {
    f && (!S.current && f.animationState && f.animationState.animateChanges(), S.current && (queueMicrotask(() => {
      var m;
      (m = window.MotionHandoffMarkAsComplete) === null || m === void 0 || m.call(window, y);
    }), S.current = !1));
  }), f;
}
function AP(e, t, n, r) {
  const { layoutId: o, layout: s, drag: i, dragConstraints: a, layoutScroll: l, layoutRoot: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : dx(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: s,
    alwaysMeasureLayout: !!i || a && zr(a),
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
      ...x.useContext(Vd),
      ...c,
      layoutId: RP(c)
    }, { isStatic: g } = f, w = TP(c), y = r(c, g);
    if (!g && zd) {
      LP();
      const S = _P(f);
      d = S.MeasureLayout, w.visualElement = MP(o, y, f, t, S.ProjectionNode);
    }
    return p.jsxs(Za.Provider, { value: w, children: [d && w.visualElement ? p.jsx(d, { visualElement: w.visualElement, ...f }) : null, n(o, c, DP(y, w.visualElement, u), y, g, w.visualElement)] });
  }
  a.displayName = `motion.${typeof o == "string" ? o : `create(${(i = (s = o.displayName) !== null && s !== void 0 ? s : o.name) !== null && i !== void 0 ? i : ""})`}`;
  const l = x.forwardRef(a);
  return l[PP] = o, l;
}
function RP({ layoutId: e }) {
  const t = x.useContext(Od).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function LP(e, t) {
  x.useContext(ix).strict;
}
function _P(e) {
  const { drag: t, layout: n } = fo;
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
function Kd(e) {
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
function yh(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Gd(e, t, n, r) {
  if (typeof t == "function") {
    const [o, s] = yh(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, s] = yh(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  return t;
}
const su = (e) => Array.isArray(e), OP = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), FP = (e) => su(e) ? e[e.length - 1] || 0 : e, Ke = (e) => !!(e && e.getVelocity);
function Fi(e) {
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
  const r = x.useContext(Za), o = x.useContext(qa), s = () => VP(e, t, r, o);
  return n ? s() : Fd(s);
};
function zP(e, t, n, r) {
  const o = {}, s = r(e, {});
  for (const f in s)
    o[f] = Fi(s[f]);
  let { initial: i, animate: a } = e;
  const l = el(e), c = lx(e);
  t && c && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || i === !1;
  const d = u ? a : i;
  if (d && typeof d != "boolean" && !Ja(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let g = 0; g < f.length; g++) {
      const w = Gd(e, f[g]);
      if (w) {
        const { transitionEnd: y, transition: S, ...m } = w;
        for (const h in m) {
          let v = m[h];
          if (Array.isArray(v)) {
            const b = u ? v.length - 1 : 0;
            v = v[b];
          }
          v !== null && (o[h] = v);
        }
        for (const h in y)
          o[h] = y[h];
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
], wr = new Set(ko), px = (e) => (t) => typeof t == "string" && t.startsWith(e), hx = /* @__PURE__ */ px("--"), BP = /* @__PURE__ */ px("var(--"), Yd = (e) => BP(e) ? $P.test(e.split("/*")[0].trim()) : !1, $P = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, mx = (e, t) => t && typeof e == "number" ? t.transform(e) : e, un = (e, t, n) => n > t ? t : n < e ? e : n, Co = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Ts = {
  ...Co,
  transform: (e) => un(0, 1, e)
}, vi = {
  ...Co,
  default: 1
}, Vs = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), xn = /* @__PURE__ */ Vs("deg"), Ut = /* @__PURE__ */ Vs("%"), K = /* @__PURE__ */ Vs("px"), UP = /* @__PURE__ */ Vs("vh"), WP = /* @__PURE__ */ Vs("vw"), vh = {
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
  rotate: xn,
  rotateX: xn,
  rotateY: xn,
  rotateZ: xn,
  scale: vi,
  scaleX: vi,
  scaleY: vi,
  scaleZ: vi,
  skew: xn,
  skewX: xn,
  skewY: xn,
  distance: K,
  translateX: K,
  translateY: K,
  translateZ: K,
  x: K,
  y: K,
  z: K,
  perspective: K,
  transformPerspective: K,
  opacity: Ts,
  originX: vh,
  originY: vh,
  originZ: K
}, xh = {
  ...Co,
  transform: Math.round
}, Xd = {
  ...HP,
  ...KP,
  zIndex: xh,
  size: K,
  // SVG
  fillOpacity: Ts,
  strokeOpacity: Ts,
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
      const c = mx(a, Xd[i]);
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
function Qd(e, t, n) {
  const { style: r, vars: o, transformOrigin: s } = e;
  let i = !1, a = !1;
  for (const l in t) {
    const c = t[l];
    if (wr.has(l)) {
      i = !0;
      continue;
    } else if (hx(l)) {
      o[l] = c;
      continue;
    } else {
      const u = mx(c, Xd[l]);
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
function qd(e, {
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
  if (Qd(e, c, d), u) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: f, style: g, dimensions: w } = e;
  f.transform && (w && (g.transform = f.transform), delete f.transform), w && (o !== void 0 || s !== void 0 || g.transform) && (g.transformOrigin = JP(w, o !== void 0 ? o : 0.5, s !== void 0 ? s : 0.5)), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), r !== void 0 && (f.scale = r), i !== void 0 && ZP(f, i, a, l, !1);
}
const Zd = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), gx = () => ({
  ...Zd(),
  attrs: {}
}), Jd = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function yx(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
const vx = /* @__PURE__ */ new Set([
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
  yx(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(vx.has(o) ? o : Wd(o), t.attrs[o]);
}
const va = {};
function eD(e) {
  Object.assign(va, e);
}
function wx(e, { layout: t, layoutId: n }) {
  return wr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!va[e] || e === "opacity");
}
function ef(e, t, n) {
  var r;
  const { style: o } = e, s = {};
  for (const i in o)
    (Ke(o[i]) || t.style && Ke(t.style[i]) || wx(i, e) || ((r = n == null ? void 0 : n.getValue(i)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[i] = o[i]);
  return s;
}
function Sx(e, t, n) {
  const r = ef(e, t, n);
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
          if (wr.has(a)) {
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
          qd(r, o, Jd(n.tagName), e.transformTemplate), xx(n, r);
        });
      });
    }
  })
}, rD = {
  useVisualState: fx({
    scrapeMotionValuesFromProps: ef,
    createRenderState: Zd
  })
};
function bx(e, t, n) {
  for (const r in t)
    !Ke(t[r]) && !wx(r, n) && (e[r] = t[r]);
}
function oD({ transformTemplate: e }, t) {
  return x.useMemo(() => {
    const n = Zd();
    return Qd(n, t, e), Object.assign({}, n.vars, n.style);
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
    return qd(s, t, Jd(r), e.transformTemplate), {
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
    const l = (Kd(n) ? aD : iD)(r, s, i, n), c = kP(r, typeof n == "string", e), u = n !== x.Fragment ? { ...c, ...l, ref: o } : {}, { children: d } = r, f = x.useMemo(() => Ke(d) ? d.get() : d, [d]);
    return x.createElement(n, {
      ...u,
      children: f
    });
  };
}
function cD(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const i = {
      ...Kd(r) ? nD : rD,
      preloadedFeatures: e,
      useRender: lD(o),
      createVisualElement: t,
      Component: r
    };
    return jP(i);
  };
}
function kx(e, t) {
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
function tl(e, t, n) {
  const r = e.getProps();
  return Gd(r, t, n !== void 0 ? n : r.custom, e);
}
const uD = /* @__PURE__ */ Bd(() => window.ScrollTimeline !== void 0);
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
function tf(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const iu = 2e4;
function Cx(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < iu; )
    t += n, r = e.next(t);
  return t >= iu ? 1 / 0 : t;
}
function nf(e) {
  return typeof e == "function";
}
function bh(e, t) {
  e.timeline = t, e.onfinish = null;
}
const rf = (e) => Array.isArray(e) && typeof e[0] == "number", pD = {
  linearEasing: void 0
};
function hD(e, t) {
  const n = /* @__PURE__ */ Bd(e);
  return () => {
    var r;
    return (r = pD[t]) !== null && r !== void 0 ? r : n();
  };
}
const xa = /* @__PURE__ */ hD(() => {
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
    r += e(/* @__PURE__ */ uo(0, o - 1, s)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function Tx(e) {
  return !!(typeof e == "function" && xa() || !e || typeof e == "string" && (e in au || xa()) || rf(e) || Array.isArray(e) && e.every(Tx));
}
const Bo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, au = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Bo([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Bo([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Bo([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Bo([0.33, 1.53, 0.69, 0.99])
};
function Px(e, t) {
  if (e)
    return typeof e == "function" && xa() ? Ex(e, t) : rf(e) ? Bo(e) : Array.isArray(e) ? e.map((n) => Px(n, t) || au.easeOut) : au[e];
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
function kh(e) {
  return (t) => {
    t.pointerType === "touch" || Dx() || e(t);
  };
}
function gD(e, t, n = {}) {
  const [r, o, s] = Nx(e, n), i = kh((a) => {
    const { target: l } = a, c = t(a);
    if (typeof c != "function" || !l)
      return;
    const u = kh((d) => {
      c(d), l.removeEventListener("pointerleave", u);
    });
    l.addEventListener("pointerleave", u, o);
  });
  return r.forEach((a) => {
    a.addEventListener("pointerenter", i, o);
  }), s;
}
const Mx = (e, t) => t ? e === t ? !0 : Mx(e, t.parentElement) : !1, of = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, yD = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function vD(e) {
  return yD.has(e.tagName) || e.tabIndex !== -1;
}
const $o = /* @__PURE__ */ new WeakSet();
function Ch(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function $l(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const xD = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = Ch(() => {
    if ($o.has(n))
      return;
    $l(n, "down");
    const o = Ch(() => {
      $l(n, "up");
    }), s = () => $l(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Eh(e) {
  return of(e) && !Dx();
}
function wD(e, t, n = {}) {
  const [r, o, s] = Nx(e, n), i = (a) => {
    const l = a.currentTarget;
    if (!Eh(a) || $o.has(l))
      return;
    $o.add(l);
    const c = t(a), u = (g, w) => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", f), !(!Eh(g) || !$o.has(l)) && ($o.delete(l), typeof c == "function" && c(g, { success: w }));
    }, d = (g) => {
      u(g, n.useGlobalTarget || Mx(l, g.target));
    }, f = (g) => {
      u(g, !1);
    };
    window.addEventListener("pointerup", d, o), window.addEventListener("pointercancel", f, o);
  };
  return r.forEach((a) => {
    !vD(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", i, o), a.addEventListener("focus", (c) => xD(c, o), o);
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
let Vi;
function bD() {
  Vi = void 0;
}
const Wt = {
  now: () => (Vi === void 0 && Wt.set(Ie.isProcessing || yP.useManualTiming ? Ie.timestamp : performance.now()), Vi),
  set: (e) => {
    Vi = e, queueMicrotask(bD);
  }
};
function sf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function af(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class lf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return sf(this.subscriptions, t), () => af(this.subscriptions, t);
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
const Th = 30, kD = (e) => !isNaN(parseFloat(e));
class CD {
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
    this.current = t, this.updatedAt = Wt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = kD(this.current));
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
    this.events[t] || (this.events[t] = new lf());
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
function Ps(e, t) {
  return new CD(e, t);
}
function ED(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ps(n));
}
function TD(e, t) {
  const n = tl(e, t);
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
function lu(e, t) {
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
function zs(e, t, n, r) {
  if (e === t && n === r)
    return ct;
  const o = (s) => MD(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : Lx(o(s), t, r);
}
const _x = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Ix = (e) => (t) => 1 - e(1 - t), Ox = /* @__PURE__ */ zs(0.33, 1.53, 0.69, 0.99), cf = /* @__PURE__ */ Ix(Ox), Fx = /* @__PURE__ */ _x(cf), Vx = (e) => (e *= 2) < 1 ? 0.5 * cf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), uf = (e) => 1 - Math.sin(Math.acos(e)), zx = Ix(uf), Bx = _x(uf), $x = (e) => /^0[^.\s]+$/u.test(e);
function AD(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || $x(e) : !0;
}
const Jo = (e) => Math.round(e * 1e5) / 1e5, df = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function jD(e) {
  return e == null;
}
const RD = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, ff = (e, t) => (n) => !!(typeof n == "string" && RD.test(n) && n.startsWith(e) || t && !jD(n) && Object.prototype.hasOwnProperty.call(n, t)), Ux = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, s, i, a] = r.match(df);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, LD = (e) => un(0, 255, e), Ul = {
  ...Co,
  transform: (e) => Math.round(LD(e))
}, sr = {
  test: /* @__PURE__ */ ff("rgb", "red"),
  parse: /* @__PURE__ */ Ux("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Ul.transform(e) + ", " + Ul.transform(t) + ", " + Ul.transform(n) + ", " + Jo(Ts.transform(r)) + ")"
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
const cu = {
  test: /* @__PURE__ */ ff("#"),
  parse: _D,
  transform: sr.transform
}, Br = {
  test: /* @__PURE__ */ ff("hsl", "hue"),
  parse: /* @__PURE__ */ Ux("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Ut.transform(Jo(t)) + ", " + Ut.transform(Jo(n)) + ", " + Jo(Ts.transform(r)) + ")"
}, We = {
  test: (e) => sr.test(e) || cu.test(e) || Br.test(e),
  parse: (e) => sr.test(e) ? sr.parse(e) : Br.test(e) ? Br.parse(e) : cu.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? sr.transform(e) : Br.transform(e)
}, ID = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function OD(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(df)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(ID)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Wx = "number", Hx = "color", FD = "var", VD = "var(", Ph = "${}", zD = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ds(e) {
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
  return Ds(e).values;
}
function Gx(e) {
  const { split: t, types: n } = Ds(e), r = t.length;
  return (o) => {
    let s = "";
    for (let i = 0; i < r; i++)
      if (s += t[i], o[i] !== void 0) {
        const a = n[i];
        a === Wx ? s += Jo(o[i]) : a === Hx ? s += We.transform(o[i]) : s += o[i];
      }
    return s;
  };
}
const BD = (e) => typeof e == "number" ? 0 : e;
function $D(e) {
  const t = Kx(e);
  return Gx(e)(t.map(BD));
}
const Bn = {
  test: OD,
  parse: Kx,
  createTransformer: Gx,
  getAnimatableNone: $D
}, UD = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function WD(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(df) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let s = UD.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + o + ")";
}
const HD = /\b([a-z-]*)\(.*?\)/gu, uu = {
  ...Bn,
  getAnimatableNone: (e) => {
    const t = e.match(HD);
    return t ? t.map(WD).join(" ") : e;
  }
}, KD = {
  ...Xd,
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
  filter: uu,
  WebkitFilter: uu
}, pf = (e) => KD[e];
function Yx(e, t) {
  let n = pf(e);
  return n !== uu && (n = Bn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const GD = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function YD(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const s = e[r];
    typeof s == "string" && !GD.has(s) && Ds(s).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const s of t)
      e[s] = Yx(n, o);
}
const Dh = (e) => e === Co || e === K, Nh = (e, t) => parseFloat(e.split(", ")[t]), Mh = (e, t) => (n, { transform: r }) => {
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
const po = {
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
po.translateX = po.x;
po.translateY = po.y;
const lr = /* @__PURE__ */ new Set();
let du = !1, fu = !1;
function Xx() {
  if (fu) {
    const e = Array.from(lr).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
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
  fu = !1, du = !1, lr.forEach((e) => e.complete()), lr.clear();
}
function Qx() {
  lr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (fu = !0);
  });
}
function ZD() {
  Qx(), Xx();
}
class hf {
  constructor(t, n, r, o, s, i = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = s, this.isAsync = i;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (lr.add(this), du || (du = !0, de.read(Qx), de.resolveKeyframes(Xx))) : (this.readKeyframes(), this.complete());
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), lr.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, lr.delete(this));
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
  return Yd(o) ? Zx(o, t, n + 1) : o;
}
const Jx = (e) => (t) => t.test(e), tN = {
  test: (e) => e === "auto",
  parse: (e) => e
}, ew = [Co, K, Ut, xn, WP, UP, tN], Ah = (e) => ew.find(Jx(e));
class tw extends hf {
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
      if (typeof c == "string" && (c = c.trim(), Yd(c))) {
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
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = po[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
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
    o[i] = po[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, c]) => {
      n.getValue(l).set(c);
    }), this.resolveNoneKeyframes();
  }
}
const jh = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Bn.test(e) || e === "0") && // And it contains numbers and/or colors
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
  return !i || !a ? !1 : nN(e) || (n === "spring" || nf(n)) && r;
}
const oN = (e) => e !== null;
function nl(e, { repeat: t, repeatType: n = "loop" }, r) {
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
        l && l(nl(t, this.options, n)), a && a(), this.resolveFinishedPromise();
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
function Wl(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function iN({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, s = 0, i = 0;
  if (!t)
    o = s = i = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    o = Wl(l, a, e + 1 / 3), s = Wl(l, a, e), i = Wl(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(s * 255),
    blue: Math.round(i * 255),
    alpha: r
  };
}
function wa(e, t) {
  return (n) => n > 0 ? t : e;
}
const Hl = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, aN = [cu, sr, Br], lN = (e) => aN.find((t) => t.test(e));
function Rh(e) {
  const t = lN(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === Br && (n = iN(n)), n;
}
const Lh = (e, t) => {
  const n = Rh(e), r = Rh(t);
  if (!n || !r)
    return wa(e, t);
  const o = { ...n };
  return (s) => (o.red = Hl(n.red, r.red, s), o.green = Hl(n.green, r.green, s), o.blue = Hl(n.blue, r.blue, s), o.alpha = ge(n.alpha, r.alpha, s), sr.transform(o));
}, cN = (e, t) => (n) => t(e(n)), Bs = (...e) => e.reduce(cN), pu = /* @__PURE__ */ new Set(["none", "hidden"]);
function uN(e, t) {
  return pu.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function dN(e, t) {
  return (n) => ge(e, t, n);
}
function mf(e) {
  return typeof e == "number" ? dN : typeof e == "string" ? Yd(e) ? wa : We.test(e) ? Lh : hN : Array.isArray(e) ? rw : typeof e == "object" ? We.test(e) ? Lh : fN : wa;
}
function rw(e, t) {
  const n = [...e], r = n.length, o = e.map((s, i) => mf(s)(s, t[i]));
  return (s) => {
    for (let i = 0; i < r; i++)
      n[i] = o[i](s);
    return n;
  };
}
function fN(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = mf(e[o])(e[o], t[o]));
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
  const n = Bn.createTransformer(t), r = Ds(e), o = Ds(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? pu.has(e) && !o.values.length || pu.has(t) && !r.values.length ? uN(e, t) : Bs(rw(pN(r, o), o.values), n) : wa(e, t);
};
function ow(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? ge(e, t, n) : mf(e)(e, t);
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
}, Kl = 1e-3;
function gN({ duration: e = xe.duration, bounce: t = xe.bounce, velocity: n = xe.velocity, mass: r = xe.mass }) {
  let o, s, i = 1 - t;
  i = un(xe.minDamping, xe.maxDamping, i), e = un(xe.minDuration, xe.maxDuration, /* @__PURE__ */ nn(e)), i < 1 ? (o = (c) => {
    const u = c * i, d = u * e, f = u - n, g = hu(c, i), w = Math.exp(-d);
    return Kl - f / g * w;
  }, s = (c) => {
    const d = c * i * e, f = d * n + n, g = Math.pow(i, 2) * Math.pow(c, 2) * e, w = Math.exp(-d), y = hu(Math.pow(c, 2), i);
    return (-o(c) + Kl > 0 ? -1 : 1) * ((f - g) * w) / y;
  }) : (o = (c) => {
    const u = Math.exp(-c * e), d = (c - n) * e + 1;
    return -Kl + u * d;
  }, s = (c) => {
    const u = Math.exp(-c * e), d = (n - c) * (e * e);
    return u * d;
  });
  const a = 5 / e, l = vN(o, s, a);
  if (e = /* @__PURE__ */ tn(e), isNaN(l))
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
const yN = 12;
function vN(e, t, n) {
  let r = n;
  for (let o = 1; o < yN; o++)
    r = r - e(r) / t(r);
  return r;
}
function hu(e, t) {
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
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, s = 2 * un(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
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
    velocity: -/* @__PURE__ */ nn(n.velocity || 0)
  }), w = f || 0, y = c / (2 * Math.sqrt(l * u)), S = i - s, m = /* @__PURE__ */ nn(Math.sqrt(l / u)), h = Math.abs(S) < 5;
  r || (r = h ? xe.restSpeed.granular : xe.restSpeed.default), o || (o = h ? xe.restDelta.granular : xe.restDelta.default);
  let v;
  if (y < 1) {
    const k = hu(m, y);
    v = (C) => {
      const E = Math.exp(-y * m * C);
      return i - E * ((w + y * m * S) / k * Math.sin(k * C) + S * Math.cos(k * C));
    };
  } else if (y === 1)
    v = (k) => i - Math.exp(-m * k) * (S + (w + m * S) * k);
  else {
    const k = m * Math.sqrt(y * y - 1);
    v = (C) => {
      const E = Math.exp(-y * m * C), T = Math.min(k * C, 300);
      return i - E * ((w + y * m * S) * Math.sinh(T) + k * S * Math.cosh(T)) / k;
    };
  }
  const b = {
    calculatedDuration: g && d || null,
    next: (k) => {
      const C = v(k);
      if (g)
        a.done = k >= d;
      else {
        let E = 0;
        y < 1 && (E = k === 0 ? /* @__PURE__ */ tn(w) : sw(v, k, C));
        const T = Math.abs(E) <= r, j = Math.abs(i - C) <= o;
        a.done = T && j;
      }
      return a.value = a.done ? i : C, a;
    },
    toString: () => {
      const k = Math.min(Cx(b), iu), C = Ex((E) => b.next(k * E).value, k, 30);
      return k + "ms " + C;
    }
  };
  return b;
}
function Ih({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: s = 500, modifyTarget: i, min: a, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, g = (T) => a !== void 0 && T < a || l !== void 0 && T > l, w = (T) => a === void 0 ? l : l === void 0 || Math.abs(a - T) < Math.abs(l - T) ? a : l;
  let y = n * t;
  const S = d + y, m = i === void 0 ? S : i(S);
  m !== S && (y = m - d);
  const h = (T) => -y * Math.exp(-T / r), v = (T) => m + h(T), b = (T) => {
    const j = h(T), M = v(T);
    f.done = Math.abs(j) <= c, f.value = f.done ? m : M;
  };
  let k, C;
  const E = (T) => {
    g(f.value) && (k = T, C = iw({
      keyframes: [f.value, w(f.value)],
      velocity: sw(v, T, f.value),
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
      return !C && k === void 0 && (j = !0, b(T), E(T)), k !== void 0 && T >= k ? C.next(T - k) : (!j && b(T), f);
    }
  };
}
const bN = /* @__PURE__ */ zs(0.42, 0, 1, 1), kN = /* @__PURE__ */ zs(0, 0, 0.58, 1), aw = /* @__PURE__ */ zs(0.42, 0, 0.58, 1), CN = (e) => Array.isArray(e) && typeof e[0] != "number", EN = {
  linear: ct,
  easeIn: bN,
  easeInOut: aw,
  easeOut: kN,
  circIn: uf,
  circInOut: Bx,
  circOut: zx,
  backIn: cf,
  backInOut: Fx,
  backOut: Ox,
  anticipate: Vx
}, Oh = (e) => {
  if (rf(e)) {
    ox(e.length === 4);
    const [t, n, r, o] = e;
    return zs(t, n, r, o);
  } else if (typeof e == "string")
    return EN[e];
  return e;
};
function TN(e, t, n) {
  const r = [], o = n || ow, s = e.length - 1;
  for (let i = 0; i < s; i++) {
    let a = o(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] || ct : t;
      a = Bs(l, a);
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
    const f = /* @__PURE__ */ uo(e[d], e[d + 1], u);
    return a[d](f);
  };
  return n ? (u) => c(un(e[0], e[s - 1], u)) : c;
}
function DN(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ uo(0, t, r);
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
function Sa({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = CN(r) ? r.map(Oh) : Oh(r), s = {
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
    stop: () => zn(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Ie.isProcessing ? Ie.timestamp : Wt.now()
  };
}, RN = {
  decay: Ih,
  inertia: Ih,
  tween: Sa,
  keyframes: Sa,
  spring: iw
}, LN = (e) => e / 100;
class gf extends nw {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options, i = (o == null ? void 0 : o.KeyframeResolver) || hf, a = (l, c) => this.onKeyframesResolved(l, c);
    this.resolver = new i(s, a, n, r, o), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: s, velocity: i = 0 } = this.options, a = nf(n) ? n : RN[n] || Sa;
    let l, c;
    a !== Sa && typeof t[0] != "number" && (l = Bs(LN, ow(t[0], t[1])), t = [0, 100]);
    const u = a({ ...this.options, keyframes: t });
    s === "mirror" && (c = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -i
    })), u.calculatedDuration === null && (u.calculatedDuration = Cx(u));
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
    const { delay: f, repeat: g, repeatType: w, repeatDelay: y, onUpdate: S } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const m = this.currentTime - f * (this.speed >= 0 ? 1 : -1), h = this.speed >= 0 ? m < 0 : m > u;
    this.currentTime = Math.max(m, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = u);
    let v = this.currentTime, b = s;
    if (g) {
      const T = Math.min(this.currentTime, u) / d;
      let j = Math.floor(T), M = T % 1;
      !M && T >= 1 && (M = 1), M === 1 && j--, j = Math.min(j, g + 1), !!(j % 2) && (w === "reverse" ? (M = 1 - M, y && (M -= y / d)) : w === "mirror" && (b = i)), v = un(0, 1, M) * d;
    }
    const k = h ? { done: !1, value: l[0] } : b.next(v);
    a && (k.value = a(k.value));
    let { done: C } = k;
    !h && c !== null && (C = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
    return E && o !== void 0 && (k.value = nl(l, this.options, o)), S && S(k.value), E && this.finish(), k;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? /* @__PURE__ */ nn(t.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ nn(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ tn(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ nn(this.currentTime));
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
const ON = /* @__PURE__ */ Bd(() => Object.hasOwnProperty.call(Element.prototype, "animate")), ba = 10, FN = 2e4;
function VN(e) {
  return nf(e.type) || e.type === "spring" || !Tx(e.ease);
}
function zN(e, t) {
  const n = new gf({
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
    r = n.sample(s), o.push(r.value), s += ba;
  return {
    times: void 0,
    keyframes: o,
    duration: s - ba,
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
    if (typeof s == "string" && xa() && BN(s) && (s = lw[s]), VN(this.options)) {
      const { onComplete: d, onUpdate: f, motionValue: g, element: w, ...y } = this.options, S = zN(t, y);
      t = S.keyframes, t.length === 1 && (t[1] = t[0]), r = S.duration, o = S.times, s = S.ease, i = "keyframes";
    }
    const u = IN(a.owner.current, l, t, { ...this.options, duration: r, times: o, ease: s });
    return u.startTime = c ?? this.calcStartTime(), this.pendingTimeline ? (bh(u, this.pendingTimeline), this.pendingTimeline = void 0) : u.onfinish = () => {
      const { onComplete: d } = this.options;
      a.set(nl(t, this.options, n)), d && d(), this.cancel(), this.resolveFinishedPromise();
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
    return /* @__PURE__ */ nn(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return /* @__PURE__ */ nn(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = /* @__PURE__ */ tn(t);
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
        return ct;
      const { animation: r } = n;
      bh(r, t);
    }
    return ct;
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
      const { motionValue: c, onUpdate: u, onComplete: d, element: f, ...g } = this.options, w = new gf({
        ...g,
        keyframes: r,
        duration: o,
        type: s,
        ease: i,
        times: a,
        isGenerator: !0
      }), y = /* @__PURE__ */ tn(this.time);
      c.setWithVelocity(w.sample(y - ba).value, w.sample(y).value, ba);
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
}, KN = (e, { keyframes: t }) => t.length > 2 ? WN : wr.has(e) ? e.startsWith("scale") ? UN(t[1]) : $N : HN;
function GN({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: a, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
const yf = (e, t, n, r = {}, o, s) => (i) => {
  const a = tf(r, e) || {}, l = a.delay || r.delay || 0;
  let { elapsed: c = 0 } = r;
  c = c - /* @__PURE__ */ tn(l);
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
  }), u.duration && (u.duration = /* @__PURE__ */ tn(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ tn(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let d = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (d = !0)), d && !s && t.get() !== void 0) {
    const f = nl(u.keyframes, a);
    if (f !== void 0)
      return de.update(() => {
        u.onUpdate(f), u.onComplete();
      }), new fD([]);
  }
  return !s && Fh.supports(u) ? new Fh(u) : new gf(u);
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
      ...tf(i || {}, d)
    };
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const m = Rx(e);
      if (m) {
        const h = window.MotionHandoffAnimation(m, d, de);
        h !== null && (w.startTime = h, y = !0);
      }
    }
    lu(e, d), f.start(yf(d, f, g, e.shouldReduceMotion && Ax.has(d) ? { type: !1 } : w, e, y));
    const S = f.animation;
    S && c.push(S);
  }
  return a && Promise.all(c).then(() => {
    de.update(() => {
      a && TD(e, a);
    });
  }), c;
}
function mu(e, t, n = {}) {
  var r;
  const o = tl(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
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
    c.notify("AnimationStart", t), i.push(mu(c, t, {
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
    const o = t.map((s) => mu(e, s, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = mu(e, t, n);
  else {
    const o = typeof t == "function" ? tl(e, t, n.custom) : t;
    r = Promise.all(cw(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const ZN = Ud.length;
function uw(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? uw(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < ZN; n++) {
    const r = Ud[n], o = e.props[r];
    (Es(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const JN = [...$d].reverse(), e2 = $d.length;
function t2(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => qN(e, n, r)));
}
function n2(e) {
  let t = t2(e), n = Vh(), r = !0;
  const o = (l) => (c, u) => {
    var d;
    const f = tl(e, u, l === "exit" ? (d = e.presenceContext) === null || d === void 0 ? void 0 : d.custom : void 0);
    if (f) {
      const { transition: g, transitionEnd: w, ...y } = f;
      c = { ...c, ...y, ...w };
    }
    return c;
  };
  function s(l) {
    t = l(e);
  }
  function i(l) {
    const { props: c } = e, u = uw(e.parent) || {}, d = [], f = /* @__PURE__ */ new Set();
    let g = {}, w = 1 / 0;
    for (let S = 0; S < e2; S++) {
      const m = JN[S], h = n[m], v = c[m] !== void 0 ? c[m] : u[m], b = Es(v), k = m === l ? h.isActive : null;
      k === !1 && (w = S);
      let C = v === u[m] && v !== c[m] && b;
      if (C && r && e.manuallyAnimateOnMount && (C = !1), h.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !h.isActive && k === null || // If we didn't and don't have any defined prop for this animation type
      !v && !h.prevProp || // Or if the prop doesn't define an animation
      Ja(v) || typeof v == "boolean")
        continue;
      const E = r2(h.prevProp, v);
      let T = E || // If we're making this variant active, we want to always make it active
      m === l && h.isActive && !C && b || // If we removed a higher-priority variant (i is in reverse order)
      S > w && b, j = !1;
      const M = Array.isArray(v) ? v : [v];
      let D = M.reduce(o(m), {});
      k === !1 && (D = {});
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
        su(P) && su(L) ? $ = !kx(P, L) : $ = P !== L, $ ? P != null ? U(z) : f.add(z) : P !== void 0 && f.has(z) ? U(z) : h.protectedKeys[z] = !0;
      }
      h.prevProp = v, h.prevResolvedValues = D, h.isActive && (g = { ...g, ...D }), r && e.blockInitialAnimation && (T = !1), T && (!(C && E) || j) && d.push(...M.map((z) => ({
        animation: z,
        options: { type: m }
      })));
    }
    if (f.size) {
      const S = {};
      f.forEach((m) => {
        const h = e.getBaseTarget(m), v = e.getValue(m);
        v && (v.liveStyle = !0), S[m] = h ?? null;
      }), d.push({ animation: S });
    }
    let y = !!d.length;
    return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (y = !1), r = !1, y ? t(d) : Promise.resolve();
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
function r2(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !kx(t, e) : !1;
}
function qn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Vh() {
  return {
    animate: qn(!0),
    whileInView: qn(),
    whileHover: qn(),
    whileTap: qn(),
    whileDrag: qn(),
    whileFocus: qn(),
    exit: qn()
  };
}
class Yn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class o2 extends Yn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = n2(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ja(t) && (this.unmountControls = t.subscribe(this.node));
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
let s2 = 0;
class i2 extends Yn {
  constructor() {
    super(...arguments), this.id = s2++;
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
const a2 = {
  animation: {
    Feature: o2
  },
  exit: {
    Feature: i2
  }
};
function Ns(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function $s(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const l2 = (e) => (t) => of(t) && e(t, $s(t));
function es(e, t, n, r) {
  return Ns(e, t, l2(n), r);
}
const zh = (e, t) => Math.abs(e - t);
function c2(e, t) {
  const n = zh(e.x, t.x), r = zh(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class dw {
  constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: s = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const d = Yl(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, g = c2(d.offset, { x: 0, y: 0 }) >= 3;
      if (!f && !g)
        return;
      const { point: w } = d, { timestamp: y } = Ie;
      this.history.push({ ...w, timestamp: y });
      const { onStart: S, onMove: m } = this.handlers;
      f || (S && S(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), m && m(this.lastMoveEvent, d);
    }, this.handlePointerMove = (d, f) => {
      this.lastMoveEvent = d, this.lastMoveEventInfo = Gl(f, this.transformPagePoint), de.update(this.updatePoint, !0);
    }, this.handlePointerUp = (d, f) => {
      this.end();
      const { onEnd: g, onSessionEnd: w, resumeAnimation: y } = this.handlers;
      if (this.dragSnapToOrigin && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const S = Yl(d.type === "pointercancel" ? this.lastMoveEventInfo : Gl(f, this.transformPagePoint), this.history);
      this.startEvent && g && g(d, S), w && w(d, S);
    }, !of(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = $s(t), a = Gl(i, this.transformPagePoint), { point: l } = a, { timestamp: c } = Ie;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = n;
    u && u(t, Yl(a, this.history)), this.removeListeners = Bs(es(this.contextWindow, "pointermove", this.handlePointerMove), es(this.contextWindow, "pointerup", this.handlePointerUp), es(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), zn(this.updatePoint);
  }
}
function Gl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Bh(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Yl({ point: e }, t) {
  return {
    point: e,
    delta: Bh(e, fw(t)),
    offset: Bh(e, u2(t)),
    velocity: d2(t, 0.1)
  };
}
function u2(e) {
  return e[0];
}
function fw(e) {
  return e[e.length - 1];
}
function d2(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = fw(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > /* @__PURE__ */ tn(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = /* @__PURE__ */ nn(o.timestamp - r.timestamp);
  if (s === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - r.x) / s,
    y: (o.y - r.y) / s
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
const pw = 1e-4, f2 = 1 - pw, p2 = 1 + pw, hw = 0.01, h2 = 0 - hw, m2 = 0 + hw;
function dt(e) {
  return e.max - e.min;
}
function g2(e, t, n) {
  return Math.abs(e - t) <= n;
}
function $h(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = ge(t.min, t.max, e.origin), e.scale = dt(n) / dt(t), e.translate = ge(n.min, n.max, e.origin) - e.originPoint, (e.scale >= f2 && e.scale <= p2 || isNaN(e.scale)) && (e.scale = 1), (e.translate >= h2 && e.translate <= m2 || isNaN(e.translate)) && (e.translate = 0);
}
function ts(e, t, n, r) {
  $h(e.x, t.x, n.x, r ? r.originX : void 0), $h(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Uh(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + dt(t);
}
function y2(e, t, n) {
  Uh(e.x, t.x, n.x), Uh(e.y, t.y, n.y);
}
function Wh(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + dt(t);
}
function ns(e, t, n) {
  Wh(e.x, t.x, n.x), Wh(e.y, t.y, n.y);
}
function v2(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? ge(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ge(n, e, r.max) : Math.min(e, n)), e;
}
function Hh(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function x2(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Hh(e.x, n, o),
    y: Hh(e.y, t, r)
  };
}
function Kh(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function w2(e, t) {
  return {
    x: Kh(e.x, t.x),
    y: Kh(e.y, t.y)
  };
}
function S2(e, t) {
  let n = 0.5;
  const r = dt(e), o = dt(t);
  return o > r ? n = /* @__PURE__ */ uo(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ uo(e.min, e.max - o, t.min)), un(0, 1, n);
}
function b2(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const gu = 0.35;
function k2(e = gu) {
  return e === !1 ? e = 0 : e === !0 && (e = gu), {
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
}), $r = () => ({
  x: Xh(),
  y: Xh()
}), Qh = () => ({ min: 0, max: 0 }), Ce = () => ({
  x: Qh(),
  y: Qh()
});
function mt(e) {
  return [e("x"), e("y")];
}
function mw({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function C2({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function E2(e, t) {
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
function Xl(e) {
  return e === void 0 || e === 1;
}
function yu({ scale: e, scaleX: t, scaleY: n }) {
  return !Xl(e) || !Xl(t) || !Xl(n);
}
function er(e) {
  return yu(e) || gw(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function gw(e) {
  return qh(e.x) || qh(e.y);
}
function qh(e) {
  return e && e !== "0%";
}
function ka(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Zh(e, t, n, r, o) {
  return o !== void 0 && (e = ka(e, o, r)), ka(e, n, r) + t;
}
function vu(e, t = 0, n = 1, r, o) {
  e.min = Zh(e.min, t, n, r, o), e.max = Zh(e.max, t, n, r, o);
}
function yw(e, { x: t, y: n }) {
  vu(e.x, t.translate, t.scale, t.originPoint), vu(e.y, n.translate, n.scale, n.originPoint);
}
const Jh = 0.999999999999, em = 1.0000000000001;
function T2(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let s, i;
  for (let a = 0; a < o; a++) {
    s = n[a], i = s.projectionDelta;
    const { visualElement: l } = s.options;
    l && l.props.style && l.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Wr(e, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, yw(e, i)), r && er(s.latestValues) && Wr(e, s.latestValues));
  }
  t.x < em && t.x > Jh && (t.x = 1), t.y < em && t.y > Jh && (t.y = 1);
}
function Ur(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function tm(e, t, n, r, o = 0.5) {
  const s = ge(e.min, e.max, o);
  vu(e, t, n, s, r);
}
function Wr(e, t) {
  tm(e.x, t.x, t.scaleX, t.scale, t.originX), tm(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function vw(e, t) {
  return mw(E2(e.getBoundingClientRect(), t));
}
function P2(e, t, n) {
  const r = vw(e, n), { scroll: o } = t;
  return o && (Ur(r.x, o.offset.x), Ur(r.y, o.offset.y)), r;
}
const xw = ({ current: e }) => e ? e.ownerDocument.defaultView : null, D2 = /* @__PURE__ */ new WeakMap();
class N2 {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ce(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (u) => {
      const { dragSnapToOrigin: d } = this.getProps();
      d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor($s(u).point);
    }, s = (u, d) => {
      const { drag: f, dragPropagation: g, onDragStart: w } = this.getProps();
      if (f && !g && (this.openDragLock && this.openDragLock(), this.openDragLock = SD(f), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), mt((S) => {
        let m = this.getAxisMotionValue(S).get() || 0;
        if (Ut.test(m)) {
          const { projection: h } = this.visualElement;
          if (h && h.layout) {
            const v = h.layout.layoutBox[S];
            v && (m = dt(v) * (parseFloat(m) / 100));
          }
        }
        this.originPoint[S] = m;
      }), w && de.postRender(() => w(u, d)), lu(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, i = (u, d) => {
      const { dragPropagation: f, dragDirectionLock: g, onDirectionLock: w, onDrag: y } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: S } = d;
      if (g && this.currentDirection === null) {
        this.currentDirection = M2(S), this.currentDirection !== null && w && w(this.currentDirection);
        return;
      }
      this.updateAxis("x", d.point, S), this.updateAxis("y", d.point, S), this.visualElement.render(), y && y(u, d);
    }, a = (u, d) => this.stop(u, d), l = () => mt((u) => {
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
    if (!r || !xi(t, o, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (i = v2(i, this.constraints[t], this.elastic[t])), s.set(i);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, s = this.constraints;
    n && zr(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = x2(o.layoutBox, n) : this.constraints = !1, this.elastic = k2(r), s !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && mt((i) => {
      this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = b2(o.layoutBox[i], this.constraints[i]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !zr(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const s = P2(r, o.root, this.visualElement.getTransformPagePoint());
    let i = w2(o.layout.layoutBox, s);
    if (n) {
      const a = n(C2(i));
      this.hasMutatedConstraints = !!a, a && (i = mw(a));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = mt((u) => {
      if (!xi(u, n, this.currentDirection))
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
    return lu(this.visualElement, t), r.start(yf(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    mt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    mt((t) => {
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
    mt((n) => {
      const { drag: r } = this.getProps();
      if (!xi(n, r, this.currentDirection))
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
    if (!zr(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    mt((i) => {
      const a = this.getAxisMotionValue(i);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[i] = S2({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), mt((i) => {
      if (!xi(i, t, null))
        return;
      const a = this.getAxisMotionValue(i), { min: l, max: c } = this.constraints[i];
      a.set(ge(l, c, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    D2.set(this.visualElement, this);
    const t = this.visualElement.current, n = es(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      zr(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, s = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), de.read(r);
    const i = Ns(window, "resize", () => this.scalePositionWithinConstraints()), a = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (mt((u) => {
        const d = this.getAxisMotionValue(u);
        d && (this.originPoint[u] += l[u].translate, d.set(d.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      i(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: s = !1, dragElastic: i = gu, dragMomentum: a = !0 } = t;
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
function xi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function M2(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class A2 extends Yn {
  constructor(t) {
    super(t), this.removeGroupControls = ct, this.removeListeners = ct, this.controls = new N2(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ct;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const nm = (e) => (t, n) => {
  e && de.postRender(() => e(t, n));
};
class j2 extends Yn {
  constructor() {
    super(...arguments), this.removePointerDownListener = ct;
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
    this.removePointerDownListener = es(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const zi = {
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
const _o = {
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
}, R2 = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = Bn.parse(e);
    if (o.length > 5)
      return r;
    const s = Bn.createTransformer(e), i = typeof o[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + i] /= a, o[1 + i] /= l;
    const c = ge(a, l, 0.5);
    return typeof o[2 + i] == "number" && (o[2 + i] /= c), typeof o[3 + i] == "number" && (o[3 + i] /= c), s(o);
  }
};
class L2 extends x.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: s } = t;
    eD(_2), s && (n.group && n.group.add(s), r && r.register && o && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), zi.hasEverUpdated = !0;
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
    t && (t.root.didUpdate(), Hd.postRender(() => {
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
  const [t, n] = nx(), r = x.useContext(Od);
  return p.jsx(L2, { ...e, layoutGroup: r, switchLayoutGroup: x.useContext(ux), isPresent: t, safeToRemove: n });
}
const _2 = {
  borderRadius: {
    ..._o,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: _o,
  borderTopRightRadius: _o,
  borderBottomLeftRadius: _o,
  borderBottomRightRadius: _o,
  boxShadow: R2
};
function I2(e, t, n) {
  const r = Ke(e) ? e : Ps(e);
  return r.start(yf("", r, t, n)), r.animation;
}
function O2(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const F2 = (e, t) => e.depth - t.depth;
class V2 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    sf(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    af(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(F2), this.isDirty = !1, this.children.forEach(t);
  }
}
function z2(e, t) {
  const n = Wt.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= t && (zn(r), e(s - t));
  };
  return de.read(r, !0), () => zn(r);
}
const Sw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], B2 = Sw.length, om = (e) => typeof e == "string" ? parseFloat(e) : e, sm = (e) => typeof e == "number" || K.test(e);
function $2(e, t, n, r, o, s) {
  o ? (e.opacity = ge(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    U2(r)
  ), e.opacityExit = ge(t.opacity !== void 0 ? t.opacity : 1, 0, W2(r))) : s && (e.opacity = ge(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < B2; i++) {
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
const U2 = /* @__PURE__ */ bw(0, 0.5, zx), W2 = /* @__PURE__ */ bw(0.5, 0.95, ct);
function bw(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ uo(e, t, r));
}
function am(e, t) {
  e.min = t.min, e.max = t.max;
}
function ht(e, t) {
  am(e.x, t.x), am(e.y, t.y);
}
function lm(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function cm(e, t, n, r, o) {
  return e -= t, e = ka(e, 1 / n, r), o !== void 0 && (e = ka(e, 1 / o, r)), e;
}
function H2(e, t = 0, n = 1, r = 0.5, o, s = e, i = e) {
  if (Ut.test(t) && (t = parseFloat(t), t = ge(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let a = ge(s.min, s.max, r);
  e === s && (a -= t), e.min = cm(e.min, t, n, a, o), e.max = cm(e.max, t, n, a, o);
}
function um(e, t, [n, r, o], s, i) {
  H2(e, t[n], t[r], t[o], t.scale, s, i);
}
const K2 = ["x", "scaleX", "originX"], G2 = ["y", "scaleY", "originY"];
function dm(e, t, n, r) {
  um(e.x, t, K2, n ? n.x : void 0, r ? r.x : void 0), um(e.y, t, G2, n ? n.y : void 0, r ? r.y : void 0);
}
function fm(e) {
  return e.translate === 0 && e.scale === 1;
}
function kw(e) {
  return fm(e.x) && fm(e.y);
}
function pm(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Y2(e, t) {
  return pm(e.x, t.x) && pm(e.y, t.y);
}
function hm(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Cw(e, t) {
  return hm(e.x, t.x) && hm(e.y, t.y);
}
function mm(e) {
  return dt(e.x) / dt(e.y);
}
function gm(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class X2 {
  constructor() {
    this.members = [];
  }
  add(t) {
    sf(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (af(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function Q2(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, s = e.y.translate / t.y, i = (n == null ? void 0 : n.z) || 0;
  if ((o || s || i) && (r = `translate3d(${o}px, ${s}px, ${i}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: c, rotate: u, rotateX: d, rotateY: f, skewX: g, skewY: w } = n;
    c && (r = `perspective(${c}px) ${r}`), u && (r += `rotate(${u}deg) `), d && (r += `rotateX(${d}deg) `), f && (r += `rotateY(${f}deg) `), g && (r += `skewX(${g}deg) `), w && (r += `skewY(${w}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const tr = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, Uo = typeof window < "u" && window.MotionDebug !== void 0, Ql = ["", "X", "Y", "Z"], q2 = { visibility: "hidden" }, ym = 1e3;
let Z2 = 0;
function ql(e, t, n, r) {
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
      this.id = Z2++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Uo && (tr.totalNodes = tr.resolvedTargetDeltas = tr.recalculatedProjection = 0), this.nodes.forEach(tM), this.nodes.forEach(iM), this.nodes.forEach(aM), this.nodes.forEach(nM), Uo && window.MotionDebug.record(tr);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new V2());
    }
    addEventListener(i, a) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new lf()), this.eventHandlers.get(i).add(a);
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
      this.isSVG = O2(i), this.instance = i;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = z2(f, 250), zi.hasAnimatedSinceResize && (zi.hasAnimatedSinceResize = !1, this.nodes.forEach(xm));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: g, layout: w }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || u.getDefaultTransition() || fM, { onLayoutAnimationStart: S, onLayoutAnimationComplete: m } = u.getProps(), h = !this.targetLayout || !Cw(this.targetLayout, w) || g, v = !f && g;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || v || f && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, v);
          const b = {
            ...tf(y, "layout"),
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
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, zn(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(lM), this.animationId++);
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(vm);
        return;
      }
      this.isUpdating || this.nodes.forEach(oM), this.isUpdating = !1, this.nodes.forEach(sM), this.nodes.forEach(J2), this.nodes.forEach(eM), this.clearAllSnapshots();
      const a = Wt.now();
      Ie.delta = un(0, 1e3 / 60, a - Ie.timestamp), Ie.timestamp = a, Ie.isProcessing = !0, Bl.update.process(Ie), Bl.preRender.process(Ie), Bl.render.process(Ie), Ie.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Hd.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(rM), this.sharedNodes.forEach(cM);
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
      this.layout = this.measure(!1), this.layoutCorrected = Ce(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !kw(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      i && (a || er(this.latestValues) || u) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return i && (l = this.removeTransform(l)), pM(l), {
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
        return Ce();
      const l = a.measureViewportBox();
      if (!(((i = this.scroll) === null || i === void 0 ? void 0 : i.wasRoot) || this.path.some(hM))) {
        const { scroll: u } = this.root;
        u && (Ur(l.x, u.offset.x), Ur(l.y, u.offset.y));
      }
      return l;
    }
    removeElementScroll(i) {
      var a;
      const l = Ce();
      if (ht(l, i), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c], { scroll: d, options: f } = u;
        u !== this.root && d && f.layoutScroll && (d.wasRoot && ht(l, i), Ur(l.x, d.offset.x), Ur(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(i, a = !1) {
      const l = Ce();
      ht(l, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a && u.options.layoutScroll && u.scroll && u !== u.root && Wr(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), er(u.latestValues) && Wr(l, u.latestValues);
      }
      return er(this.latestValues) && Wr(l, this.latestValues), l;
    }
    removeTransform(i) {
      const a = Ce();
      ht(a, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !er(c.latestValues))
          continue;
        yu(c.latestValues) && c.updateSnapshot();
        const u = Ce(), d = c.measurePageBox();
        ht(u, d), dm(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return er(this.latestValues) && dm(a, this.latestValues), a;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ie.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
        if (this.resolvedRelativeTargetAt = Ie.timestamp, !this.targetDelta && !this.relativeTarget) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ce(), this.relativeTargetOrigin = Ce(), ns(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox), ht(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Ce(), this.targetWithTransforms = Ce()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), y2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ht(this.target, this.layout.layoutBox), yw(this.target, this.targetDelta)) : ht(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ce(), this.relativeTargetOrigin = Ce(), ns(this.relativeTargetOrigin, this.target, g.target), ht(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Uo && tr.resolvedTargetDeltas++;
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
      if ((this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === Ie.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || d))
        return;
      ht(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, g = this.treeScale.y;
      T2(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = Ce());
      const { target: w } = a;
      if (!w) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (lm(this.prevProjectionDelta.x, this.projectionDelta.x), lm(this.prevProjectionDelta.y, this.projectionDelta.y)), ts(this.projectionDelta, this.layoutCorrected, w, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== g || !gm(this.projectionDelta.x, this.prevProjectionDelta.x) || !gm(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", w)), Uo && tr.recalculatedProjection++;
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
      this.prevProjectionDelta = $r(), this.projectionDelta = $r(), this.projectionDeltaWithTransform = $r();
    }
    setAnimationOrigin(i, a = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, d = $r();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = Ce(), g = l ? l.source : void 0, w = this.layout ? this.layout.source : void 0, y = g !== w, S = this.getStack(), m = !S || S.members.length <= 1, h = !!(y && !m && this.options.crossfade === !0 && !this.path.some(dM));
      this.animationProgress = 0;
      let v;
      this.mixTargetDelta = (b) => {
        const k = b / 1e3;
        wm(d.x, i.x, k), wm(d.y, i.y, k), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ns(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), uM(this.relativeTarget, this.relativeTargetOrigin, f, k), v && Y2(this.relativeTarget, v) && (this.isProjectionDirty = !1), v || (v = Ce()), ht(v, this.relativeTarget)), y && (this.animationValues = u, $2(u, c, this.latestValues, k, h, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (zn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = de.update(() => {
        zi.hasAnimatedSinceResize = !0, this.currentAnimation = I2(0, ym, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(ym), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = i;
      if (!(!a || !l || !c)) {
        if (this !== i && this.layout && c && Pw(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || Ce();
          const d = dt(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + d;
          const f = dt(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + f;
        }
        ht(a, l), Wr(a, u), ts(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(i, a) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new X2()), this.sharedNodes.get(i).add(a);
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
      l.z && ql("z", i, c, this.animationValues);
      for (let u = 0; u < Ql.length; u++)
        ql(`rotate${Ql[u]}`, i, c, this.animationValues), ql(`skew${Ql[u]}`, i, c, this.animationValues);
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
        return q2;
      const c = {
        visibility: ""
      }, u = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = Fi(i == null ? void 0 : i.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const y = {};
        return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = Fi(i == null ? void 0 : i.pointerEvents) || ""), this.hasProjected && !er(this.latestValues) && (y.transform = u ? u({}, "") : "none", this.hasProjected = !1), y;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), c.transform = Q2(this.projectionDeltaWithTransform, this.treeScale, f), u && (c.transform = u(f, c.transform));
      const { x: g, y: w } = this.projectionDelta;
      c.transformOrigin = `${g.origin * 100}% ${w.origin * 100}% 0`, d.animationValues ? c.opacity = d === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : c.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const y in va) {
        if (f[y] === void 0)
          continue;
        const { correct: S, applyTo: m } = va[y], h = c.transform === "none" ? f[y] : S(f[y], d);
        if (m) {
          const v = m.length;
          for (let b = 0; b < v; b++)
            c[m[b]] = h;
        } else
          c[y] = h;
      }
      return this.options.layoutId && (c.pointerEvents = d === this ? Fi(i == null ? void 0 : i.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var a;
        return (a = i.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(vm), this.root.sharedNodes.clear();
    }
  };
}
function J2(e) {
  e.updateLayout();
}
function eM(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: s } = e.options, i = n.source !== e.layout.source;
    s === "size" ? mt((d) => {
      const f = i ? n.measuredBox[d] : n.layoutBox[d], g = dt(f);
      f.min = r[d].min, f.max = f.min + g;
    }) : Pw(s, n.layoutBox, r) && mt((d) => {
      const f = i ? n.measuredBox[d] : n.layoutBox[d], g = dt(r[d]);
      f.max = f.min + g, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + g);
    });
    const a = $r();
    ts(a, r, n.layoutBox);
    const l = $r();
    i ? ts(l, e.applyTransform(o, !0), n.measuredBox) : ts(l, r, n.layoutBox);
    const c = !kw(a);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: g } = d;
        if (f && g) {
          const w = Ce();
          ns(w, n.layoutBox, f.layoutBox);
          const y = Ce();
          ns(y, r, g.layoutBox), Cw(w, y) || (u = !0), d.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = w, e.relativeParent = d);
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
function tM(e) {
  Uo && tr.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function nM(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function rM(e) {
  e.clearSnapshot();
}
function vm(e) {
  e.clearMeasurements();
}
function oM(e) {
  e.isLayoutDirty = !1;
}
function sM(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function xm(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function iM(e) {
  e.resolveTargetDelta();
}
function aM(e) {
  e.calcProjection();
}
function lM(e) {
  e.resetSkewAndRotation();
}
function cM(e) {
  e.removeLeadSnapshot();
}
function wm(e, t, n) {
  e.translate = ge(t.translate, 0, n), e.scale = ge(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Sm(e, t, n, r) {
  e.min = ge(t.min, n.min, r), e.max = ge(t.max, n.max, r);
}
function uM(e, t, n, r) {
  Sm(e.x, t.x, n.x, r), Sm(e.y, t.y, n.y, r);
}
function dM(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const fM = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, bm = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), km = bm("applewebkit/") && !bm("chrome/") ? Math.round : ct;
function Cm(e) {
  e.min = km(e.min), e.max = km(e.max);
}
function pM(e) {
  Cm(e.x), Cm(e.y);
}
function Pw(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !g2(mm(t), mm(n), 0.2);
}
function hM(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const mM = Tw({
  attachResizeListener: (e, t) => Ns(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Zl = {
  current: void 0
}, Dw = Tw({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Zl.current) {
      const e = new mM({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Zl.current = e;
    }
    return Zl.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), gM = {
  pan: {
    Feature: j2
  },
  drag: {
    Feature: A2,
    ProjectionNode: Dw,
    MeasureLayout: ww
  }
};
function Em(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, s = r[o];
  s && de.postRender(() => s(t, $s(t)));
}
class yM extends Yn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = gD(t, (n) => (Em(this.node, n, "Start"), (r) => Em(this.node, r, "End"))));
  }
  unmount() {
  }
}
class vM extends Yn {
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
    this.unmount = Bs(Ns(this.node.current, "focus", () => this.onFocus()), Ns(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Tm(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n), s = r[o];
  s && de.postRender(() => s(t, $s(t)));
}
class xM extends Yn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = wD(t, (n) => (Tm(this.node, n, "Start"), (r, { success: o }) => Tm(this.node, r, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const xu = /* @__PURE__ */ new WeakMap(), Jl = /* @__PURE__ */ new WeakMap(), wM = (e) => {
  const t = xu.get(e.target);
  t && t(e);
}, SM = (e) => {
  e.forEach(wM);
};
function bM({ root: e, ...t }) {
  const n = e || document;
  Jl.has(n) || Jl.set(n, {});
  const r = Jl.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(SM, { root: e, ...t })), r[o];
}
function kM(e, t, n) {
  const r = bM(t);
  return xu.set(e, n), r.observe(e), () => {
    xu.delete(e), r.unobserve(e);
  };
}
const CM = {
  some: 0,
  all: 1
};
class EM extends Yn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: s } = t, i = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : CM[o]
    }, a = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, s && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(), f = c ? u : d;
      f && f(l);
    };
    return kM(this.node.current, i, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(TM(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function TM({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const PM = {
  inView: {
    Feature: EM
  },
  tap: {
    Feature: xM
  },
  focus: {
    Feature: vM
  },
  hover: {
    Feature: yM
  }
}, DM = {
  layout: {
    ProjectionNode: Dw,
    MeasureLayout: ww
  }
}, wu = { current: null }, Nw = { current: !1 };
function NM() {
  if (Nw.current = !0, !!zd)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => wu.current = e.matches;
      e.addListener(t), t();
    } else
      wu.current = !1;
}
const MM = [...ew, We, Bn], AM = (e) => MM.find(Jx(e)), Pm = /* @__PURE__ */ new WeakMap();
function jM(e, t, n) {
  for (const r in t) {
    const o = t[r], s = n[r];
    if (Ke(o))
      e.addValue(r, o);
    else if (Ke(s))
      e.addValue(r, Ps(o, { owner: e }));
    else if (s !== o)
      if (e.hasValue(r)) {
        const i = e.getValue(r);
        i.liveStyle === !0 ? i.jump(o) : i.hasAnimated || i.set(o);
      } else {
        const i = e.getStaticValue(r);
        e.addValue(r, Ps(i !== void 0 ? i : o, { owner: e }));
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
class RM {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = hf, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const g = Wt.now();
      this.renderScheduledAt < g && (this.renderScheduledAt = g, de.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: c, onUpdate: u } = i;
    this.onUpdate = u, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.blockInitialAnimation = !!s, this.isControllingVariants = el(n), this.isVariantNode = lx(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const g in f) {
      const w = f[g];
      l[g] !== void 0 && Ke(w) && w.set(l[g], !1);
    }
  }
  mount(t) {
    this.current = t, Pm.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Nw.current || NM(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : wu.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Pm.delete(this.current), this.projection && this.projection.unmount(), zn(this.notifyUpdate), zn(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const r = wr.has(t), o = n.on("change", (a) => {
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
    for (t in fo) {
      const n = fo[t];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ce();
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
    this.prevMotionValues = jM(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return r === void 0 && n !== void 0 && (r = Ps(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return o != null && (typeof o == "string" && (qx(o) || $x(o)) ? o = parseFloat(o) : !AM(o) && Bn.test(n) && (o = Yx(t, n)), this.setBaseTarget(t, Ke(o) ? o.get() : o)), Ke(o) ? o.get() : o;
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
      const i = Gd(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      i && (o = i[t]);
    }
    if (r && o !== void 0)
      return o;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !Ke(s) ? s : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new lf()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Mw extends RM {
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
function LM(e) {
  return window.getComputedStyle(e);
}
class _M extends Mw {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = yx;
  }
  readValueFromInstance(t, n) {
    if (wr.has(n)) {
      const r = pf(n);
      return r && r.default || 0;
    } else {
      const r = LM(t), o = (hx(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return vw(t, n);
  }
  build(t, n, r) {
    Qd(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return ef(t, n, r);
  }
}
class IM extends Mw {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ce;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (wr.has(n)) {
      const r = pf(n);
      return r && r.default || 0;
    }
    return n = vx.has(n) ? n : Wd(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Sx(t, n, r);
  }
  build(t, n, r) {
    qd(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    xx(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = Jd(t.tagName), super.mount(t);
  }
}
const OM = (e, t) => Kd(e) ? new IM(t) : new _M(t, {
  allowProjection: e !== x.Fragment
}), FM = /* @__PURE__ */ cD({
  ...a2,
  ...PM,
  ...gM,
  ...DM
}, OM), wi = /* @__PURE__ */ CP(FM);
function Zt(e = "default") {
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
function VM(e = "default") {
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
function $n(e, t = {}) {
  return e && t[e] ? t[e] : "default";
}
function jw(e) {
  const t = {};
  return !e || !Array.isArray(e) || e.forEach((n) => {
    n.variant && (t[n.slug] = n.variant);
  }), t;
}
function zM({
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
  const [c, u] = x.useState(/* @__PURE__ */ new Date()), d = i || c, [f, g] = x.useState(0), [w, y] = x.useState(null), [S, m] = x.useState(null), [h, v] = x.useState(null), b = a === "popover", k = a === "dropdown", C = a === "sidebar", E = (O, _) => {
    const W = new Date(_, O + 1, 0).getDate();
    return Array.from({ length: W }, (Z, X) => ({ day: X + 1 }));
  }, T = (O, _) => e.filter((Z) => {
    const X = new Date(Z.startDate);
    return X.getDate() === O && X.getMonth() === _.getMonth() && X.getFullYear() === _.getFullYear();
  }), j = (O) => O.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  });
  Y.useEffect(() => {
    if (!C || h && h.getFullYear() === d.getFullYear() && h.getMonth() === d.getMonth())
      return;
    const _ = /* @__PURE__ */ new Date();
    let W;
    if (_.getFullYear() === d.getFullYear() && _.getMonth() === d.getMonth())
      W = _.getDate();
    else {
      const Z = e.map((X) => new Date(X.startDate)).filter((X) => X.getFullYear() === d.getFullYear() && X.getMonth() === d.getMonth()).sort((X, pe) => X.getTime() - pe.getTime());
      W = Z.length > 0 ? Z[0].getDate() : 1;
    }
    v(new Date(d.getFullYear(), d.getMonth(), W));
  }, [C, d, e, h]), Y.useEffect(() => {
    k || m(null);
  }, [k, d]);
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
      const X = t[Z.id], pe = (X == null ? void 0 : X.category) || "uncategorized";
      return W[pe] || (W[pe] = []), W[pe].push(Z), W;
    }, {});
    return /* @__PURE__ */ p.jsx("div", { className: "flex flex-wrap gap-1", children: Object.entries(_).map(([W, Z]) => {
      const X = $n(W === "uncategorized" ? null : W, n), pe = Zt(X);
      return /* @__PURE__ */ p.jsx(
        "div",
        {
          className: `${pe} text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium shadow-sm`,
          title: `${Z.length} ${W} event${Z.length > 1 ? "s" : ""}: ${Z.map((bt) => bt.title).join(", ")}`,
          children: Z.length
        },
        W
      );
    }) });
  }, L = (O) => O.map((_) => {
    const W = t[_.id], Z = $n(W == null ? void 0 : W.category, n), X = Zt(Z);
    return /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "rounded-md border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 p-2 text-xs shadow-sm cursor-pointer transition-colors hover:bg-gray-200 dark:hover:bg-gray-600",
        onClick: (pe) => {
          pe.stopPropagation(), o == null || o(_);
        },
        children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-start gap-1.5", children: [
          /* @__PURE__ */ p.jsx("span", { className: `mt-1 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full ${X}` }),
          /* @__PURE__ */ p.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ p.jsx("div", { className: "font-medium text-[13px] text-gray-900 dark:text-gray-100 leading-tight", children: _.title }),
            /* @__PURE__ */ p.jsx("div", { className: "mt-0.5 text-[11px] text-gray-600 dark:text-gray-400", children: j(new Date(_.startDate)) })
          ] })
        ] })
      },
      _.id
    );
  }), $ = Y.useMemo(() => new Date(d.getFullYear(), d.getMonth(), 1), [d]), G = !!(C && h && h.getFullYear() === d.getFullYear() && h.getMonth() === d.getMonth()), se = C && G && h ? h : $, Ve = se.getDate(), Te = se, ze = C ? T(Ve, d) : [], Ne = Te.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  }), H = /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4", children: [
      /* @__PURE__ */ p.jsxs(
        wi.h2,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.5 },
          className: "text-3xl my-5 tracking-tighter font-bold text-gray-900 dark:text-gray-100",
          children: [
            d.toLocaleString("default", { month: "long" }),
            " ",
            d.getFullYear()
          ]
        },
        d.getMonth()
      ),
      /* @__PURE__ */ p.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ p.jsxs(en, { variant: "outline", onClick: M, className: "gap-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600", children: [
          /* @__PURE__ */ p.jsx(a0, { className: "h-4 w-4" }),
          "Prev"
        ] }),
        /* @__PURE__ */ p.jsxs(en, { variant: "outline", onClick: D, className: "gap-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600", children: [
          "Next",
          /* @__PURE__ */ p.jsx(l0, { className: "h-4 w-4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-7 gap-1 sm:gap-2 mb-4", children: F.map((O, _) => /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "text-left py-2 text-lg tracking-tighter font-medium text-gray-900 dark:text-gray-100",
        children: O
      },
      _
    )) }),
    /* @__PURE__ */ p.jsx(hh, { initial: !1, custom: f, mode: "wait", children: /* @__PURE__ */ p.jsxs(
      wi.div,
      {
        custom: f,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        className: "grid grid-cols-7 gap-1 sm:gap-2",
        children: [
          Array.from({ length: I }).map((O, _) => /* @__PURE__ */ p.jsx("div", { className: "h-[150px] opacity-50 p-4", children: /* @__PURE__ */ p.jsx("div", { className: "font-semibold relative text-3xl mb-1 text-gray-400 dark:text-gray-500", children: z - I + _ + 1 }) }, `offset-${_}`)),
          N.map((O) => {
            const _ = T(O.day, d), W = (/* @__PURE__ */ new Date()).getDate() === O.day && (/* @__PURE__ */ new Date()).getMonth() === d.getMonth() && (/* @__PURE__ */ new Date()).getFullYear() === d.getFullYear(), X = (I + O.day - 1) % 7 >= 5, pe = C && G && Ve === O.day;
            return /* @__PURE__ */ p.jsxs(
              wi.div,
              {
                className: "hover:z-50 border-none h-[150px] rounded group flex flex-col relative",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -20 },
                transition: { duration: 0.3 },
                onMouseEnter: () => {
                  b && y(O.day);
                },
                onMouseLeave: () => {
                  b && y(null);
                },
                children: [
                  /* @__PURE__ */ p.jsxs(
                    gd,
                    {
                      className: `bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md overflow-hidden relative flex p-4 border h-full transition-shadow day-card ${_.length > 0 ? "cursor-pointer hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700" : "cursor-default"} ${W ? "!border-red-500 !border-2" : ""} ${pe && !W ? "ring-2 ring-blue-500 dark:ring-blue-400" : ""}`,
                      onClick: _.length > 0 ? () => {
                        C && v(new Date(d.getFullYear(), d.getMonth(), O.day)), r == null || r(new Date(d.getFullYear(), d.getMonth(), O.day));
                      } : void 0,
                      children: [
                        /* @__PURE__ */ p.jsx("div", { className: `font-semibold relative text-3xl mb-1 ${_.length > 0 ? "text-gray-900 dark:text-gray-100" : "text-gray-500 dark:text-gray-400"}`, children: O.day }),
                        /* @__PURE__ */ p.jsxs("div", { className: "flex-grow flex flex-col gap-2 w-full", children: [
                          /* @__PURE__ */ p.jsx(hh, { mode: "wait", children: (_ == null ? void 0 : _.length) > 0 && /* @__PURE__ */ p.jsx(
                            wi.div,
                            {
                              initial: { opacity: 0, y: 20 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: -20 },
                              transition: { duration: 0.3 },
                              children: /* @__PURE__ */ p.jsx(P, { events: _ })
                            },
                            _[0].id
                          ) }),
                          k && _.length > 0 && /* @__PURE__ */ p.jsxs("div", { className: "mt-auto", children: [
                            /* @__PURE__ */ p.jsxs(
                              "button",
                              {
                                type: "button",
                                className: "w-full flex items-center justify-between gap-2 rounded-md bg-gray-200/70 dark:bg-gray-700/80 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-200 transition-colors hover:bg-gray-200 dark:hover:bg-gray-600",
                                onClick: (bt) => {
                                  bt.stopPropagation(), m((Be) => Be === O.day ? null : O.day);
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
                      className: `absolute top-full z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3 w-80 ${X ? "right-0" : "left-0"}`,
                      onMouseEnter: () => {
                        b && y(O.day);
                      },
                      onMouseLeave: () => {
                        b && y(null);
                      },
                      children: [
                        /* @__PURE__ */ p.jsxs("div", { className: "text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2", children: [
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
            return Array.from({ length: W }).map((Z, X) => /* @__PURE__ */ p.jsx("div", { className: "h-[150px] opacity-50 p-4", children: /* @__PURE__ */ p.jsx("div", { className: "font-semibold relative text-3xl mb-1 text-gray-400 dark:text-gray-500", children: X + 1 }) }, `next-${X}`));
          })()
        ]
      },
      `${d.getFullYear()}-${d.getMonth()}`
    ) })
  ] }), ne = /* @__PURE__ */ p.jsx("div", { className: C ? "flex-1" : void 0, children: C ? /* @__PURE__ */ p.jsx("div", { className: "rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm p-4 lg:p-6", children: H }) : H }), ke = C ? /* @__PURE__ */ p.jsx("aside", { className: "md:w-72 w-full md:flex-shrink-0", children: /* @__PURE__ */ p.jsxs("div", { className: "rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md p-4", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ p.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400", children: "Selected Day" }),
      /* @__PURE__ */ p.jsx("div", { className: "text-base font-semibold text-gray-900 dark:text-gray-100", children: Ne })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "mt-3 space-y-1.5", children: ze.length > 0 ? L(ze) : /* @__PURE__ */ p.jsx("div", { className: "rounded-md border border-dashed border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/70 px-3 py-4 text-xs text-gray-600 dark:text-gray-400", children: "No events scheduled for this day." }) })
  ] }) }) : null;
  return /* @__PURE__ */ p.jsxs("div", { className: C ? "flex flex-col gap-6 md:flex-row md:items-start" : "", children: [
    C && l === "left" && ke,
    ne,
    C && l === "right" && ke
  ] });
}
function BM({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r }) {
  const [o, s] = Y.useState(/* @__PURE__ */ new Date()), a = ((f) => {
    const g = new Date(f);
    return g.setDate(f.getDate() - f.getDay()), Array.from({ length: 7 }, (w, y) => {
      const S = new Date(g);
      return S.setDate(g.getDate() + y), S;
    });
  })(o), l = Array.from({ length: 24 }, (f, g) => g), c = (f) => e.filter((g) => g.startDate.toDateString() === f.toDateString()), u = (f) => {
    const g = new Date(o);
    g.setDate(o.getDate() + (f === "next" ? 7 : -7)), s(g);
  }, d = (f, g, w) => {
    const y = f.startDate.getHours(), S = f.startDate.getMinutes(), m = f.endDate ? f.endDate.getHours() : y + 1, h = f.endDate ? f.endDate.getMinutes() : 0, v = y + S / 60, b = m + h / 60, k = b - v, C = g.filter((D) => {
      if (D.id === f.id) return !0;
      if (D.startDate.toDateString() !== f.startDate.toDateString())
        return !1;
      const N = D.startDate.getHours() + D.startDate.getMinutes() / 60, F = (D.endDate ? D.endDate.getHours() : D.startDate.getHours() + 1) + (D.endDate ? D.endDate.getMinutes() / 60 : 0);
      return v < F && b > N;
    }), E = C.length, T = C.findIndex((D) => D.id === f.id), j = E > 1 ? 100 / E : 100, M = E > 1 ? T * j : 0;
    return {
      top: `${v * 80}px`,
      // 80px per hour for better readability
      height: `${k * 80}px`,
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
            l.map((y) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] border-b border-gray-200 dark:border-gray-600" }, y)),
            w.map((y, S) => {
              const m = t[y.id], h = $n(m == null ? void 0 : m.category, n), v = Aw(h), b = d(y, w);
              return /* @__PURE__ */ p.jsxs(
                "div",
                {
                  className: `absolute ${v} border rounded p-2 text-sm z-20 overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow event-card`,
                  style: {
                    ...b,
                    margin: "1px"
                  },
                  onClick: (k) => {
                    k.stopPropagation(), r == null || r(y);
                  },
                  children: [
                    /* @__PURE__ */ p.jsx("div", { className: "font-medium leading-tight truncate text-sm", children: y.title }),
                    /* @__PURE__ */ p.jsx("div", { className: "text-xs opacity-75 leading-tight", children: y.startDate.toLocaleTimeString("en-US", {
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
                y.id
              );
            })
          ] }, g);
        })
      ] })
    ] })
  ] });
}
function $M({ events: e, eventMetadata: t, categoryMappings: n, initialDate: r, onEventClick: o }) {
  const [s, i] = Y.useState(r || /* @__PURE__ */ new Date());
  Y.useEffect(() => {
    r && i(r);
  }, [r]);
  const a = Array.from({ length: 24 }, (f, g) => g), l = () => e.filter((f) => f.startDate.toDateString() === s.toDateString()), c = (f) => {
    const g = new Date(s);
    g.setDate(s.getDate() + (f === "next" ? 1 : -1)), i(g);
  }, u = (f, g, w) => {
    const y = f.startDate.getHours(), S = f.startDate.getMinutes(), m = f.endDate ? f.endDate.getHours() : y + 1, h = f.endDate ? f.endDate.getMinutes() : 0, v = y + S / 60, b = m + h / 60, k = b - v, C = g.filter((D) => {
      if (D.id === f.id) return !0;
      const N = D.startDate.getHours() + D.startDate.getMinutes() / 60, F = (D.endDate ? D.endDate.getHours() : D.startDate.getHours() + 1) + (D.endDate ? D.endDate.getMinutes() / 60 : 0);
      return v < F && b > N;
    }), E = C.length, T = C.findIndex((D) => D.id === f.id), j = E > 1 ? 100 / E : 100, M = E > 1 ? T * j : 0;
    return {
      top: `${v * 80}px`,
      // 80px per hour for day view
      height: `${k * 80}px`,
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
          const w = t[f.id], y = $n(w == null ? void 0 : w.category, n), S = Aw(y), m = u(f, d);
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
                    /* @__PURE__ */ p.jsx(Is, { className: "h-2.5 w-2.5" }),
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
function UM({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onMonthChange: o, currentDate: s }) {
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
  }) : [], y = (D) => e.some((N) => {
    const F = new Date(N.startDate);
    return F.getDate() === D.getDate() && F.getMonth() === D.getMonth() && F.getFullYear() === D.getFullYear();
  }), S = w(), m = u.getFullYear(), h = u.getMonth(), v = new Date(m, h, 1), b = new Date(v);
  b.setDate(b.getDate() - v.getDay());
  const k = [], C = new Date(b), E = new Date(m, h + 1, 0).getDate(), T = v.getDay() + E, M = Math.ceil(T / 7) * 7;
  for (let D = 0; D < M; D++)
    k.push(new Date(C)), C.setDate(C.getDate() + 1);
  return /* @__PURE__ */ p.jsxs(gd, { className: "w-full py-4 mobile-calendar bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700", children: [
    /* @__PURE__ */ p.jsxs(Xy, { className: "px-4", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between mb-4 gap-2", children: [
        /* @__PURE__ */ p.jsxs(
          en,
          {
            variant: "outline",
            size: "sm",
            onClick: d,
            className: "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 flex-shrink-0",
            children: [
              /* @__PURE__ */ p.jsx(a0, { className: "h-4 w-4" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Prev" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsx("h3", { className: "text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 text-center flex-1 min-w-0 truncate", children: u.toLocaleDateString("en-US", { month: "long", year: "numeric" }) }),
        /* @__PURE__ */ p.jsxs(
          en,
          {
            variant: "outline",
            size: "sm",
            onClick: f,
            className: "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 flex-shrink-0",
            children: [
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Next" }),
              /* @__PURE__ */ p.jsx(l0, { className: "h-4 w-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-7 gap-1 mb-4", children: [
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((D) => /* @__PURE__ */ p.jsx("div", { className: "text-center text-sm font-medium py-2 text-gray-600 dark:text-gray-400", children: D }, D)),
        k.map((D, N) => {
          const F = D.getMonth() === h, U = i && D.getDate() === i.getDate() && D.getMonth() === i.getMonth() && D.getFullYear() === i.getFullYear(), I = D.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), V = y(D);
          return /* @__PURE__ */ p.jsxs(
            "button",
            {
              onClick: () => a(D),
              className: `
                  p-2 text-sm rounded transition-colors relative focus:outline-none
                  ${F ? "text-gray-900 dark:text-gray-100" : "text-gray-400 dark:text-gray-500"}
                  ${U ? "bg-blue-500 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-700" : "hover:bg-gray-100 dark:hover:bg-gray-600"}
                  ${I && !U ? "bg-gray-200 dark:bg-gray-600 font-semibold" : ""}
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
    /* @__PURE__ */ p.jsxs($b, { className: "flex flex-col items-start gap-3 border-t border-gray-200 dark:border-gray-600 px-4 !pt-4", children: [
      /* @__PURE__ */ p.jsx("div", { className: "flex w-full items-center justify-between px-1", children: /* @__PURE__ */ p.jsx("div", { className: "text-sm font-medium text-gray-900 dark:text-gray-100", children: i == null ? void 0 : i.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }) }) }),
      /* @__PURE__ */ p.jsx("div", { className: "flex w-full flex-col gap-2", children: S.length === 0 ? /* @__PURE__ */ p.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400 text-center py-4", children: "No events on this day" }) : S.map((D) => {
        const N = t[D.id], F = $n(N == null ? void 0 : N.category, n), I = Zt(F).replace("bg-", "after:bg-");
        return /* @__PURE__ */ p.jsxs(
          "button",
          {
            className: `bg-gray-50 dark:bg-gray-700 relative rounded-md p-2 pl-6 text-sm text-left w-full after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors focus:outline-none ${I}`,
            onClick: () => r == null ? void 0 : r(D),
            children: [
              /* @__PURE__ */ p.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100", children: D.title }),
              /* @__PURE__ */ p.jsxs("div", { className: "text-muted-foreground dark:text-gray-400 text-xs", children: [
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
function WM({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onLoadMore: o, hasMore: s, loading: i }) {
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
    u.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-12 text-gray-500 dark:text-gray-400", children: [
      /* @__PURE__ */ p.jsx(Cs, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
      /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-medium mb-2", children: "No events found" }),
      /* @__PURE__ */ p.jsx("p", { children: "Try adjusting your filters to see more events." })
    ] }) : Object.entries(d).map(([f, g]) => {
      const w = new Date(f), y = w.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), S = w.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let m;
      return y ? m = "Today" : S ? m = "Tomorrow" : m = w.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }), /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: m }),
          /* @__PURE__ */ p.jsx("div", { className: "flex-1 h-px bg-gray-200 dark:bg-gray-600" }),
          /* @__PURE__ */ p.jsxs("span", { className: "text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full", children: [
            g.length,
            " event",
            g.length > 1 ? "s" : ""
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: g.map((h) => {
          const v = t[h.id], b = $n(v == null ? void 0 : v.category, n), C = Zt(b).replace("bg-", "after:bg-");
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `bg-muted dark:bg-gray-700 relative rounded-md p-3 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors ${C}`,
              onClick: () => r == null ? void 0 : r(h),
              children: [
                /* @__PURE__ */ p.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ p.jsxs("div", { className: "flex-grow min-w-0", children: [
                    /* @__PURE__ */ p.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 mb-2", children: h.title }),
                    /* @__PURE__ */ p.jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(lo, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsxs("span", { children: [
                          a(h.startDate),
                          " - ",
                          a(h.endDate)
                        ] })
                      ] }),
                      (v == null ? void 0 : v.location) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(Is, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: v.location })
                      ] }),
                      (v == null ? void 0 : v.organization) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(Ya, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: v.organization })
                      ] })
                    ] })
                  ] }),
                  v && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: v.cost })
                ] }),
                (v == null ? void 0 : v.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-2", children: /* @__PURE__ */ p.jsx(co, { variant: "outline", size: "sm", children: "Registration Required" }) })
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
function HM({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onLoadMore: o, hasMore: s, loading: i }) {
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
    u.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-12 text-gray-500 dark:text-gray-400", children: [
      /* @__PURE__ */ p.jsx(Cs, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
      /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-medium mb-2", children: "No events found" }),
      /* @__PURE__ */ p.jsx("p", { children: "Try adjusting your filters to see more events." })
    ] }) : Object.entries(d).map(([f, g]) => {
      const w = new Date(f), y = w.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), S = w.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let m;
      return y ? m = "Today" : S ? m = "Tomorrow" : m = w.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }), /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsx("h3", { className: "text-base font-semibold text-gray-900 dark:text-gray-100", children: m }),
          /* @__PURE__ */ p.jsx("div", { className: "flex-1 h-px bg-gray-200 dark:bg-gray-600" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full", children: g.length })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: g.map((h) => {
          const v = t[h.id], b = $n(v == null ? void 0 : v.category, n), C = Zt(b).replace("bg-", "after:bg-");
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `bg-muted dark:bg-gray-700 relative rounded-md p-3 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors ${C}`,
              onClick: () => r == null ? void 0 : r(h),
              children: [
                /* @__PURE__ */ p.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ p.jsxs("div", { className: "flex-grow min-w-0", children: [
                    /* @__PURE__ */ p.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 mb-2", children: h.title }),
                    /* @__PURE__ */ p.jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(lo, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsxs("span", { children: [
                          a(h.startDate),
                          " - ",
                          a(h.endDate)
                        ] })
                      ] }),
                      (v == null ? void 0 : v.location) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(Is, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: v.location })
                      ] }),
                      (v == null ? void 0 : v.organization) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(Ya, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: v.organization })
                      ] })
                    ] })
                  ] }),
                  v && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: v.cost })
                ] }),
                (v == null ? void 0 : v.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-2", children: /* @__PURE__ */ p.jsx(co, { variant: "outline", size: "sm", children: "Registration Required" }) })
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
function KM({
  initialView: e = "month",
  initialCategoryFilter: t = "all",
  initialOrganizationFilter: n = "all",
  showWeekView: r = !0,
  showDayView: o = !0,
  eventSortOrder: s = "asc",
  initialMonthDisplayMode: i = "popover",
  initialMonthSidebarPosition: a = "right"
} = {}) {
  var bf, kf, Cf, Ef;
  const [l, c] = x.useState(e), [u, d] = x.useState(/* @__PURE__ */ new Date()), [f, g] = x.useState(/* @__PURE__ */ new Date()), [w, y] = x.useState(null), [S, m] = x.useState(!1), [h, v] = x.useState(!1), [b, k] = x.useState(i), [C, E] = x.useState(a), T = b === "sidebar", [j, M] = x.useState(30), [D, N] = x.useState(30), [F, U] = x.useState(15);
  Y.useEffect(() => {
    const R = document.querySelector(".unbc-calendar-container");
    if (R) {
      const re = parseInt(R.getAttribute("data-list-initial-items") || "30"), he = parseInt(R.getAttribute("data-list-load-more-count") || "15");
      N(re), U(he), M(re);
      const J = R.getAttribute("data-month-display-mode");
      (J === "popover" || J === "dropdown" || J === "sidebar") && k(J);
      const Pe = R.getAttribute("data-month-sidebar-position");
      (Pe === "left" || Pe === "right") && E(Pe);
    }
  }, []), Y.useEffect(() => {
    k(i);
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
      var Pe;
      const J = (
        // Priority 1: Explicit theme attributes
        document.documentElement.hasAttribute("data-theme") && document.documentElement.getAttribute("data-theme") === "dark" || document.documentElement.hasAttribute("data-color-scheme") && document.documentElement.getAttribute("data-color-scheme") === "dark" || // Priority 2: Theme classes on body or html
        document.body.classList.contains("dark") || document.documentElement.classList.contains("is-dark-theme") || document.body.classList.contains("is-dark-theme") || // Priority 3: Computed styles
        ((Pe = getComputedStyle(document.documentElement).getPropertyValue("--wp--preset--color--background")) == null ? void 0 : Pe.includes("0, 0, 0")) || getComputedStyle(document.body).backgroundColor === "rgb(0, 0, 0)" || // Priority 4: System preference (lowest priority)
        !document.documentElement.hasAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches
      );
      v(J), R && R.disconnect(), J ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"), R && (R.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-theme", "data-color-scheme"] }), R.observe(document.body, { attributes: !0, attributeFilter: ["class"] }));
    };
    re(), R = new MutationObserver(re), R.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-theme", "data-color-scheme"] }), R.observe(document.body, { attributes: !0, attributeFilter: ["class"] });
    const he = window.matchMedia("(prefers-color-scheme: dark)");
    return he.addEventListener("change", re), () => {
      R.disconnect(), he.removeEventListener("change", re);
    };
  }, []);
  const [I, V] = x.useState("all"), [z, P] = x.useState("all"), [L, $] = x.useState(""), [G, se] = x.useState(""), Ve = Y.useMemo(() => {
    const R = new Date(f.getTime()), re = R.getFullYear(), he = R.getMonth(), J = new Date(re, he, 1), Pe = new Date(re, he + 1, 0);
    return {
      per_page: 500,
      start_date: J.toISOString().split("T")[0],
      end_date: Pe.toISOString().split("T")[0],
      year: re,
      month: he + 1,
      // Calendar Plus uses 1-based months
      category: I === "all" ? "" : I
      // Don't send search to API - handle client-side only for better UX
    };
  }, [f, I]);
  KT(Ve);
  const Te = D0(Ve), ze = QT(), Ne = N0(), H = qT();
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
  const ke = Te, {
    events: O,
    eventMetadata: _,
    loading: W,
    error: Z,
    categoryMappings: X
  } = ke, pe = ze.organizations, bt = ze.loading, { categories: Be, loading: rl } = Ne, Xn = Y.useMemo(
    () => jw(Be),
    [Be]
  ), Sr = Y.useMemo(() => X && Object.keys(X).length > 0 ? X : Xn, [X, Xn]), vf = Y.useMemo(() => {
    const R = /* @__PURE__ */ new Map();
    return pe.forEach((re) => {
      R.set(re.id.toString(), re.title.rendered);
    }), R;
  }, [pe]), xf = Y.useCallback((R, re) => {
    var Pe, pn;
    const he = _[R.id];
    if (!he) return !1;
    const J = (pn = (Pe = H.config) == null ? void 0 : Pe.categoryRelationships) == null ? void 0 : pn[re];
    return J ? J.includes(he.category) : he.category === re;
  }, [_, H.config]), fn = Y.useMemo(() => {
    let R = O;
    if (l === "list") {
      const re = /* @__PURE__ */ new Date();
      re.setHours(0, 0, 0, 0), R = R.filter((he) => {
        const J = new Date(he.startDate);
        return J.setHours(0, 0, 0, 0), J >= re;
      }), R = R.sort((he, J) => {
        const Pe = he.startDate.getTime(), pn = J.startDate.getTime();
        return s === "asc" ? Pe - pn : pn - Pe;
      });
    } else
      R = R.sort((re, he) => {
        const J = re.startDate.getTime(), Pe = he.startDate.getTime();
        return s === "asc" ? J - Pe : Pe - J;
      });
    if (I !== "all" && (R = R.filter((re) => xf(re, I))), z !== "all") {
      const re = vf.get(z);
      R = R.filter((he) => {
        const J = _[he.id];
        return re && (J == null ? void 0 : J.organization) === re;
      });
    }
    if (L) {
      const re = L.toLowerCase();
      R = R.filter((he) => {
        var Pe, pn, Tf;
        const J = _[he.id];
        return he.title.toLowerCase().includes(re) || ((Pe = J == null ? void 0 : J.description) == null ? void 0 : Pe.toLowerCase().includes(re)) || ((pn = J == null ? void 0 : J.location) == null ? void 0 : pn.toLowerCase().includes(re)) || ((Tf = J == null ? void 0 : J.organization) == null ? void 0 : Tf.toLowerCase().includes(re));
      });
    }
    return R;
  }, [O, _, I, z, L, vf, l, xf, s]), Lw = Y.useCallback((R) => {
    d(R), T || (o ? c("day") : r && c("week"));
  }, [T, o, r]), wf = Y.useCallback((R) => {
    g(R);
  }, []), br = Y.useCallback((R) => {
    y(R), m(!0);
  }, []), Sf = Y.useCallback(() => {
    M((R) => R + F);
  }, [F]);
  Y.useEffect(() => {
    !r && l === "week" ? c(o ? "day" : "month") : !o && l === "day" && c(r ? "week" : "month");
  }, [r, o, l, c]);
  const _w = `rounded-lg unbc-calendar-view ${l === "month" && T ? "bg-transparent dark:bg-transparent border border-transparent shadow-none" : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"}`;
  return Y.useEffect(() => {
    l === "list" && M(D);
  }, [l, I, z, L, D]), (W || bt || rl) && (!O || O.length === 0) ? /* @__PURE__ */ p.jsx("div", { className: "w-full flex items-center justify-center py-12", children: /* @__PURE__ */ p.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ p.jsx(Oi, { className: "h-8 w-8 animate-spin mx-auto mb-4" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-gray-600", children: "Loading calendar..." })
  ] }) }) : Z ? /* @__PURE__ */ p.jsx("div", { className: "w-full py-12", children: /* @__PURE__ */ p.jsx(gd, { className: "max-w-md mx-auto", children: /* @__PURE__ */ p.jsxs(Xy, { className: "pt-6 text-center", children: [
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
          /* @__PURE__ */ p.jsxs(di, { value: I, onValueChange: V, children: [
            /* @__PURE__ */ p.jsx(fi, { className: "w-40 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${I === "all" ? "bg-gray-400" : Zt(((bf = Be.find((R) => R.slug === I)) == null ? void 0 : bf.variant) || "default")}` }),
              /* @__PURE__ */ p.jsx("span", { children: I === "all" ? "All Categories" : ((kf = Be.find((R) => R.slug === I)) == null ? void 0 : kf.name) || "All Categories" })
            ] }) }),
            /* @__PURE__ */ p.jsxs(pi, { className: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 z-[9999] shadow-lg", children: [
              /* @__PURE__ */ p.jsx(yn, { value: "all", className: "text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700 focus:outline-none", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                /* @__PURE__ */ p.jsx("span", { className: "w-3 h-3 rounded-full flex-shrink-0 bg-gray-400" }),
                /* @__PURE__ */ p.jsx("span", { children: "All" })
              ] }) }),
              Be.map((R) => /* @__PURE__ */ p.jsx(
                yn,
                {
                  value: R.slug,
                  className: "text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700 focus:outline-none",
                  children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                    /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${Zt(R.variant || "default")}` }),
                    /* @__PURE__ */ p.jsx("span", { children: R.name })
                  ] })
                },
                R.id
              ))
            ] })
          ] }),
          ne.includes(I) && /* @__PURE__ */ p.jsxs(di, { value: z, onValueChange: P, children: [
            /* @__PURE__ */ p.jsx(fi, { className: "w-44 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 [&>span]:truncate [&>span]:block", children: /* @__PURE__ */ p.jsx(ch, { placeholder: "All Organizations" }) }),
            /* @__PURE__ */ p.jsxs(pi, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 max-h-[200px] overflow-y-auto", children: [
              /* @__PURE__ */ p.jsx(yn, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Organizations" }),
              pe.map((R) => /* @__PURE__ */ p.jsx(
                yn,
                {
                  value: R.id.toString(),
                  className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600",
                  children: R.title.rendered
                },
                R.id
              ))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ p.jsxs(uh, { className: "h-9 bg-gray-100 dark:bg-gray-700 p-1", children: [
          o && /* @__PURE__ */ p.jsxs(Qn, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(lo, { className: "h-3 w-3" }),
            "Day"
          ] }),
          r && /* @__PURE__ */ p.jsxs(Qn, { value: "week", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(Ii, { className: "h-3 w-3" }),
            "Week"
          ] }),
          /* @__PURE__ */ p.jsxs(Qn, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(Cs, { className: "h-3 w-3" }),
            "Month"
          ] }),
          /* @__PURE__ */ p.jsxs(Qn, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(lh, { className: "h-3 w-3" }),
            "List"
          ] })
        ] }) }),
        /* @__PURE__ */ p.jsxs("div", { className: "flex-shrink-0 flex items-center gap-2", children: [
          W && O && O.length > 0 && /* @__PURE__ */ p.jsx(Oi, { className: "h-4 w-4 animate-spin text-gray-500" }),
          /* @__PURE__ */ p.jsx(
            ru,
            {
              placeholder: "Search events...",
              value: G,
              onChange: (R) => se(R.target.value),
              className: "w-40 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "md:hidden", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "px-4 py-4 flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ p.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ p.jsxs(di, { value: I, onValueChange: V, children: [
            /* @__PURE__ */ p.jsx(fi, { className: "w-auto min-w-[60px] h-9 px-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${I === "all" ? "bg-gray-400" : Zt(((Cf = Be.find((R) => R.slug === I)) == null ? void 0 : Cf.variant) || "default")}` }),
              /* @__PURE__ */ p.jsx("span", { className: "text-xs truncate max-w-[60px]", children: I === "all" ? "All" : ((Ef = Be.find((R) => R.slug === I)) == null ? void 0 : Ef.name) || "All" })
            ] }) }),
            /* @__PURE__ */ p.jsxs(pi, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 z-[9999]", children: [
              /* @__PURE__ */ p.jsx(yn, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                /* @__PURE__ */ p.jsx("span", { className: "w-3 h-3 rounded-full flex-shrink-0 bg-gray-400" }),
                /* @__PURE__ */ p.jsx("span", { children: "All" })
              ] }) }),
              Be.map((R) => /* @__PURE__ */ p.jsx(
                yn,
                {
                  value: R.slug,
                  className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600",
                  children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                    /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${Zt(R.variant || "default")}` }),
                    /* @__PURE__ */ p.jsx("span", { children: R.name })
                  ] })
                },
                R.id
              ))
            ] })
          ] }) }),
          /* @__PURE__ */ p.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ p.jsxs(uh, { className: "h-9 bg-gray-100 dark:bg-gray-700 p-1", children: [
            o && /* @__PURE__ */ p.jsxs(Qn, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300 flex-1", children: [
              /* @__PURE__ */ p.jsx(lo, { className: "h-3 w-3" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Day" })
            ] }),
            /* @__PURE__ */ p.jsxs(Qn, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300 flex-1", children: [
              /* @__PURE__ */ p.jsx(Cs, { className: "h-3 w-3" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Month" })
            ] }),
            /* @__PURE__ */ p.jsxs(Qn, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300 flex-1", children: [
              /* @__PURE__ */ p.jsx(lh, { className: "h-3 w-3" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "List" })
            ] })
          ] }) }),
          /* @__PURE__ */ p.jsxs("div", { className: "flex-shrink-0 flex items-center gap-2", children: [
            W && O && O.length > 0 && /* @__PURE__ */ p.jsx(Oi, { className: "h-4 w-4 animate-spin text-gray-500" }),
            /* @__PURE__ */ p.jsx(
              en,
              {
                variant: "outline",
                size: "sm",
                className: "h-9 px-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
                onClick: () => {
                  const R = document.querySelector(".mobile-search-input");
                  R && (R.style.display = R.style.display === "none" ? "block" : "none", R.style.display !== "none" && R.focus());
                },
                children: /* @__PURE__ */ p.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "text-gray-600 dark:text-gray-300", children: [
                  /* @__PURE__ */ p.jsx("circle", { cx: "11", cy: "11", r: "8" }),
                  /* @__PURE__ */ p.jsx("path", { d: "m21 21-4.35-4.35" })
                ] })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ p.jsx(
          ru,
          {
            placeholder: "Search events...",
            value: G,
            onChange: (R) => se(R.target.value),
            className: "mobile-search-input w-full h-9 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400",
            style: { display: "none" }
          }
        ) }),
        ne.includes(I) && /* @__PURE__ */ p.jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ p.jsxs(di, { value: z, onValueChange: P, children: [
          /* @__PURE__ */ p.jsx(fi, { className: "w-full h-9 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsx(ch, { placeholder: "All Organizations", className: "truncate" }) }),
          /* @__PURE__ */ p.jsxs(pi, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 max-h-[200px] overflow-y-auto", children: [
            /* @__PURE__ */ p.jsx(yn, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Organizations" }),
            pe.map((R) => /* @__PURE__ */ p.jsx(
              yn,
              {
                value: R.id.toString(),
                className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600",
                children: R.title.rendered
              },
              R.id
            ))
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ p.jsxs(mi, { value: "month", className: "px-6 pb-6 md:p-6", children: [
        /* @__PURE__ */ p.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ p.jsx(
          zM,
          {
            events: fn,
            eventMetadata: _,
            categoryMappings: Sr,
            onDateClick: Lw,
            onEventClick: br,
            onMonthChange: wf,
            currentDate: f,
            displayMode: b,
            sidebarPosition: C
          }
        ) }),
        /* @__PURE__ */ p.jsx("div", { className: "block md:hidden mobile-calendar", children: /* @__PURE__ */ p.jsx(
          UM,
          {
            events: fn,
            eventMetadata: _,
            categoryMappings: Sr,
            onEventClick: br,
            onMonthChange: wf,
            currentDate: f
          }
        ) })
      ] }),
      r && /* @__PURE__ */ p.jsx(mi, { value: "week", className: "px-6 pb-6 md:p-6", children: /* @__PURE__ */ p.jsx(
        BM,
        {
          events: fn,
          eventMetadata: _,
          categoryMappings: Sr,
          onEventClick: br
        }
      ) }),
      o && /* @__PURE__ */ p.jsx(mi, { value: "day", className: "px-6 pb-6 md:p-6", children: /* @__PURE__ */ p.jsx(
        $M,
        {
          events: fn,
          eventMetadata: _,
          categoryMappings: Sr,
          initialDate: u,
          onEventClick: br
        }
      ) }),
      /* @__PURE__ */ p.jsxs(mi, { value: "list", className: "px-6 pb-6 md:p-6", children: [
        /* @__PURE__ */ p.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ p.jsx(
          WM,
          {
            events: fn.slice(0, j),
            eventMetadata: _,
            categoryMappings: Sr,
            onEventClick: br,
            onLoadMore: Sf,
            hasMore: fn.length > j,
            loading: W
          }
        ) }),
        /* @__PURE__ */ p.jsx("div", { className: "block md:hidden", children: /* @__PURE__ */ p.jsx(
          HM,
          {
            events: fn.slice(0, j),
            eventMetadata: _,
            categoryMappings: Sr,
            onEventClick: br,
            onLoadMore: Sf,
            hasMore: fn.length > j,
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
function GM({
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
      const y = t[w.id];
      return o ? (y == null ? void 0 : y.organization) === o : r ? ((S = y == null ? void 0 : y.organization_id) == null ? void 0 : S.toString()) === r : !0;
    })), i || (d = d.filter((w) => w.startDate >= f)), d.sort((w, y) => w.startDate.getTime() - y.startDate.getTime()), s && s > 0 && (d = d.slice(0, s));
    const g = d.reduce((w, y) => {
      const S = y.startDate.toDateString();
      return w[S] || (w[S] = []), w[S].push(y), w;
    }, {});
    return { filteredEvents: d, eventsByDate: g };
  }, [e, t, r, o, s, i]);
  return c.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-8 text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ p.jsx(Cs, { className: "mx-auto h-8 w-8 mb-3 opacity-50" }),
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
      const g = new Date(d), w = g.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), y = g.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let S = g.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      });
      return w ? S = `Today, ${S}` : y && (S = `Tomorrow, ${S}`), /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
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
          const h = t[m.id], v = $n(h == null ? void 0 : h.category, n), b = VM(v);
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
                      /* @__PURE__ */ p.jsx(lo, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsxs("span", { children: [
                        l(m.startDate),
                        " - ",
                        l(m.endDate)
                      ] })
                    ] }) }),
                    h && /* @__PURE__ */ p.jsxs("div", { className: "space-y-1 text-sm text-gray-600 dark:text-gray-400", children: [
                      h.location && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(Is, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: h.location })
                      ] }),
                      !o && h.organization && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(Ya, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: h.organization })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col items-end gap-2 flex-shrink-0 ml-4", children: [
                    (h == null ? void 0 : h.cost) && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400", children: h.cost }),
                    (h == null ? void 0 : h.category) && /* @__PURE__ */ p.jsx(co, { variant: "secondary", size: "sm", className: "text-xs", children: h.category.charAt(0).toUpperCase() + h.category.slice(1) })
                  ] })
                ] }),
                (h == null ? void 0 : h.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-3 pt-2 border-t border-gray-100 dark:border-gray-700", children: /* @__PURE__ */ p.jsx(co, { variant: "outline", size: "sm", children: "📝 Registration Required" }) })
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
  ), y = Y.useMemo(() => f && Object.keys(f).length > 0 ? f : w, [f, w]), S = (m) => {
    s(m), a(!0);
  };
  return u ? /* @__PURE__ */ p.jsx("div", { className: "w-full flex items-center justify-center py-8", children: /* @__PURE__ */ p.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ p.jsx(Oi, { className: "h-6 w-6 animate-spin mx-auto mb-2" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-gray-600 text-sm", children: "Loading events..." })
  ] }) }) : d ? /* @__PURE__ */ p.jsx("div", { className: "w-full py-8", children: /* @__PURE__ */ p.jsx("div", { className: "max-w-md mx-auto bg-red-50 border border-red-200 rounded-lg p-4", children: /* @__PURE__ */ p.jsxs("p", { className: "text-red-600 text-sm", children: [
    "Error loading events: ",
    d
  ] }) }) }) : /* @__PURE__ */ p.jsxs("div", { className: "unbc-organization-events", children: [
    /* @__PURE__ */ p.jsx(
      GM,
      {
        events: l,
        eventMetadata: c,
        categoryMappings: y,
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
  const n = za(t), r = t.dataset.view || "month", o = t.dataset.categoryFilter || "all", s = t.dataset.organizationFilter || "all", i = t.dataset.showWeekView !== "false", a = t.dataset.showDayView !== "false", l = t.dataset.eventSortOrder || "asc";
  n.render(
    /* @__PURE__ */ p.jsx(Y.StrictMode, { children: /* @__PURE__ */ p.jsx(
      KM,
      {
        initialView: r,
        initialCategoryFilter: o,
        initialOrganizationFilter: s,
        showWeekView: i,
        showDayView: a,
        eventSortOrder: l
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
  const n = za(t), r = t.dataset.organizationId || "", o = t.dataset.organizationName || "", s = parseInt(t.dataset.limit) || 5, i = t.dataset.showPast === "true";
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
  const n = za(t), r = t.dataset.organizationId || "", o = t.dataset.organizationName || "", s = parseInt(t.dataset.limit) || 5, i = t.dataset.showPast === "true";
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
