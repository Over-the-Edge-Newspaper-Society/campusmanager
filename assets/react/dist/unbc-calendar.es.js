function Ew(e, t) {
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
function wm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bm = { exports: {} }, ka = {}, Sm = { exports: {} }, G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ds = Symbol.for("react.element"), Tw = Symbol.for("react.portal"), Pw = Symbol.for("react.fragment"), Dw = Symbol.for("react.strict_mode"), Nw = Symbol.for("react.profiler"), Mw = Symbol.for("react.provider"), Aw = Symbol.for("react.context"), Rw = Symbol.for("react.forward_ref"), jw = Symbol.for("react.suspense"), Lw = Symbol.for("react.memo"), _w = Symbol.for("react.lazy"), vf = Symbol.iterator;
function Ow(e) {
  return e === null || typeof e != "object" ? null : (e = vf && e[vf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var km = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Cm = Object.assign, Em = {};
function uo(e, t, n) {
  this.props = e, this.context = t, this.refs = Em, this.updater = n || km;
}
uo.prototype.isReactComponent = {};
uo.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
uo.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Tm() {
}
Tm.prototype = uo.prototype;
function xu(e, t, n) {
  this.props = e, this.context = t, this.refs = Em, this.updater = n || km;
}
var wu = xu.prototype = new Tm();
wu.constructor = xu;
Cm(wu, uo.prototype);
wu.isPureReactComponent = !0;
var xf = Array.isArray, Pm = Object.prototype.hasOwnProperty, bu = { current: null }, Dm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nm(e, t, n) {
  var r, o = {}, s = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (s = "" + t.key), t) Pm.call(t, r) && !Dm.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    o.children = l;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: Ds, type: e, key: s, ref: i, props: o, _owner: bu.current };
}
function Iw(e, t) {
  return { $$typeof: Ds, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Su(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ds;
}
function Fw(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var wf = /\/+/g;
function nl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Fw("" + e.key) : t.toString(36);
}
function wi(e, t, n, r, o) {
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
        case Ds:
        case Tw:
          i = !0;
      }
  }
  if (i) return i = e, o = o(i), e = r === "" ? "." + nl(i, 0) : r, xf(o) ? (n = "", e != null && (n = e.replace(wf, "$&/") + "/"), wi(o, t, n, "", function(c) {
    return c;
  })) : o != null && (Su(o) && (o = Iw(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(wf, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", xf(e)) for (var a = 0; a < e.length; a++) {
    s = e[a];
    var l = r + nl(s, a);
    i += wi(s, t, n, l, o);
  }
  else if (l = Ow(e), typeof l == "function") for (e = l.call(e), a = 0; !(s = e.next()).done; ) s = s.value, l = r + nl(s, a++), i += wi(s, t, n, l, o);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function $s(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return wi(e, r, "", "", function(s) {
    return t.call(n, s, o++);
  }), r;
}
function Vw(e) {
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
var Ke = { current: null }, bi = { transition: null }, zw = { ReactCurrentDispatcher: Ke, ReactCurrentBatchConfig: bi, ReactCurrentOwner: bu };
function Mm() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = { map: $s, forEach: function(e, t, n) {
  $s(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return $s(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return $s(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Su(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
G.Component = uo;
G.Fragment = Pw;
G.Profiler = Nw;
G.PureComponent = xu;
G.StrictMode = Dw;
G.Suspense = jw;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zw;
G.act = Mm;
G.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Cm({}, e.props), o = e.key, s = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, i = bu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) Pm.call(t, l) && !Dm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Ds, type: e.type, key: o, ref: s, props: r, _owner: i };
};
G.createContext = function(e) {
  return e = { $$typeof: Aw, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Mw, _context: e }, e.Consumer = e;
};
G.createElement = Nm;
G.createFactory = function(e) {
  var t = Nm.bind(null, e);
  return t.type = e, t;
};
G.createRef = function() {
  return { current: null };
};
G.forwardRef = function(e) {
  return { $$typeof: Rw, render: e };
};
G.isValidElement = Su;
G.lazy = function(e) {
  return { $$typeof: _w, _payload: { _status: -1, _result: e }, _init: Vw };
};
G.memo = function(e, t) {
  return { $$typeof: Lw, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function(e) {
  var t = bi.transition;
  bi.transition = {};
  try {
    e();
  } finally {
    bi.transition = t;
  }
};
G.unstable_act = Mm;
G.useCallback = function(e, t) {
  return Ke.current.useCallback(e, t);
};
G.useContext = function(e) {
  return Ke.current.useContext(e);
};
G.useDebugValue = function() {
};
G.useDeferredValue = function(e) {
  return Ke.current.useDeferredValue(e);
};
G.useEffect = function(e, t) {
  return Ke.current.useEffect(e, t);
};
G.useId = function() {
  return Ke.current.useId();
};
G.useImperativeHandle = function(e, t, n) {
  return Ke.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function(e, t) {
  return Ke.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function(e, t) {
  return Ke.current.useLayoutEffect(e, t);
};
G.useMemo = function(e, t) {
  return Ke.current.useMemo(e, t);
};
G.useReducer = function(e, t, n) {
  return Ke.current.useReducer(e, t, n);
};
G.useRef = function(e) {
  return Ke.current.useRef(e);
};
G.useState = function(e) {
  return Ke.current.useState(e);
};
G.useSyncExternalStore = function(e, t, n) {
  return Ke.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function() {
  return Ke.current.useTransition();
};
G.version = "18.3.1";
Sm.exports = G;
var x = Sm.exports;
const K = /* @__PURE__ */ wm(x), Am = /* @__PURE__ */ Ew({
  __proto__: null,
  default: K
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
var Bw = x, $w = Symbol.for("react.element"), Uw = Symbol.for("react.fragment"), Ww = Object.prototype.hasOwnProperty, Hw = Bw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Kw = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rm(e, t, n) {
  var r, o = {}, s = null, i = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Ww.call(t, r) && !Kw.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: $w, type: e, key: s, ref: i, props: o, _owner: Hw.current };
}
ka.Fragment = Uw;
ka.jsx = Rm;
ka.jsxs = Rm;
bm.exports = ka;
var p = bm.exports, jm = { exports: {} }, lt = {}, Lm = { exports: {} }, _m = {};
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
  function t(D, L) {
    var F = D.length;
    D.push(L);
    e: for (; 0 < F; ) {
      var U = F - 1 >>> 1, ee = D[U];
      if (0 < o(ee, L)) D[U] = L, D[F] = ee, F = U;
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var L = D[0], F = D.pop();
    if (F !== L) {
      D[0] = F;
      e: for (var U = 0, ee = D.length, Je = ee >>> 1; U < Je; ) {
        var be = 2 * (U + 1) - 1, Ue = D[be], Ae = be + 1, $ = D[Ae];
        if (0 > o(Ue, F)) Ae < ee && 0 > o($, Ue) ? (D[U] = $, D[Ae] = F, U = Ae) : (D[U] = Ue, D[be] = F, U = be);
        else if (Ae < ee && 0 > o($, F)) D[U] = $, D[Ae] = F, U = Ae;
        else break e;
      }
    }
    return L;
  }
  function o(D, L) {
    var F = D.sortIndex - L.sortIndex;
    return F !== 0 ? F : D.id - L.id;
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
  var l = [], c = [], u = 1, f = null, d = 3, g = !1, w = !1, v = !1, b = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(D) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= D) r(c), L.sortIndex = L.expirationTime, t(l, L);
      else break;
      L = n(c);
    }
  }
  function S(D) {
    if (v = !1, y(D), !w) if (n(l) !== null) w = !0, I(k);
    else {
      var L = n(c);
      L !== null && B(S, L.startTime - D);
    }
  }
  function k(D, L) {
    w = !1, v && (v = !1, m(T), T = -1), g = !0;
    var F = d;
    try {
      for (y(L), f = n(l); f !== null && (!(f.expirationTime > L) || D && !P()); ) {
        var U = f.callback;
        if (typeof U == "function") {
          f.callback = null, d = f.priorityLevel;
          var ee = U(f.expirationTime <= L);
          L = e.unstable_now(), typeof ee == "function" ? f.callback = ee : f === n(l) && r(l), y(L);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var Je = !0;
      else {
        var be = n(c);
        be !== null && B(S, be.startTime - L), Je = !1;
      }
      return Je;
    } finally {
      f = null, d = F, g = !1;
    }
  }
  var E = !1, C = null, T = -1, R = 5, N = -1;
  function P() {
    return !(e.unstable_now() - N < R);
  }
  function M() {
    if (C !== null) {
      var D = e.unstable_now();
      N = D;
      var L = !0;
      try {
        L = C(!0, D);
      } finally {
        L ? j() : (E = !1, C = null);
      }
    } else E = !1;
  }
  var j;
  if (typeof h == "function") j = function() {
    h(M);
  };
  else if (typeof MessageChannel < "u") {
    var _ = new MessageChannel(), V = _.port2;
    _.port1.onmessage = M, j = function() {
      V.postMessage(null);
    };
  } else j = function() {
    b(M, 0);
  };
  function I(D) {
    C = D, E || (E = !0, j());
  }
  function B(D, L) {
    T = b(function() {
      D(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(D) {
    D.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, I(k));
  }, e.unstable_forceFrameRate = function(D) {
    0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < D ? Math.floor(1e3 / D) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(D) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = d;
    }
    var F = d;
    d = L;
    try {
      return D();
    } finally {
      d = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(D, L) {
    switch (D) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        D = 3;
    }
    var F = d;
    d = D;
    try {
      return L();
    } finally {
      d = F;
    }
  }, e.unstable_scheduleCallback = function(D, L, F) {
    var U = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? U + F : U) : F = U, D) {
      case 1:
        var ee = -1;
        break;
      case 2:
        ee = 250;
        break;
      case 5:
        ee = 1073741823;
        break;
      case 4:
        ee = 1e4;
        break;
      default:
        ee = 5e3;
    }
    return ee = F + ee, D = { id: u++, callback: L, priorityLevel: D, startTime: F, expirationTime: ee, sortIndex: -1 }, F > U ? (D.sortIndex = F, t(c, D), n(l) === null && D === n(c) && (v ? (m(T), T = -1) : v = !0, B(S, F - U))) : (D.sortIndex = ee, t(l, D), w || g || (w = !0, I(k))), D;
  }, e.unstable_shouldYield = P, e.unstable_wrapCallback = function(D) {
    var L = d;
    return function() {
      var F = d;
      d = L;
      try {
        return D.apply(this, arguments);
      } finally {
        d = F;
      }
    };
  };
})(_m);
Lm.exports = _m;
var Gw = Lm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yw = x, it = Gw;
function A(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Om = /* @__PURE__ */ new Set(), ts = {};
function yr(e, t) {
  qr(e, t), qr(e + "Capture", t);
}
function qr(e, t) {
  for (ts[e] = t, e = 0; e < t.length; e++) Om.add(t[e]);
}
var tn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Zl = Object.prototype.hasOwnProperty, Xw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, bf = {}, Sf = {};
function Qw(e) {
  return Zl.call(Sf, e) ? !0 : Zl.call(bf, e) ? !1 : Xw.test(e) ? Sf[e] = !0 : (bf[e] = !0, !1);
}
function qw(e, t, n, r) {
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
function Zw(e, t, n, r) {
  if (t === null || typeof t > "u" || qw(e, t, n, r)) return !0;
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
function Ge(e, t, n, r, o, s, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = i;
}
var _e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  _e[e] = new Ge(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  _e[t] = new Ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  _e[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  _e[e] = new Ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  _e[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  _e[e] = new Ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  _e[e] = new Ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  _e[e] = new Ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  _e[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ku = /[\-:]([a-z])/g;
function Cu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ku,
    Cu
  );
  _e[t] = new Ge(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ku, Cu);
  _e[t] = new Ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ku, Cu);
  _e[t] = new Ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  _e[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_e.xlinkHref = new Ge("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  _e[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Eu(e, t, n, r) {
  var o = _e.hasOwnProperty(t) ? _e[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Zw(t, n, o, r) && (n = null), r || o === null ? Qw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var cn = Yw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Us = Symbol.for("react.element"), Er = Symbol.for("react.portal"), Tr = Symbol.for("react.fragment"), Tu = Symbol.for("react.strict_mode"), Jl = Symbol.for("react.profiler"), Im = Symbol.for("react.provider"), Fm = Symbol.for("react.context"), Pu = Symbol.for("react.forward_ref"), ec = Symbol.for("react.suspense"), tc = Symbol.for("react.suspense_list"), Du = Symbol.for("react.memo"), vn = Symbol.for("react.lazy"), Vm = Symbol.for("react.offscreen"), kf = Symbol.iterator;
function ko(e) {
  return e === null || typeof e != "object" ? null : (e = kf && e[kf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var he = Object.assign, rl;
function Lo(e) {
  if (rl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    rl = t && t[1] || "";
  }
  return `
` + rl + e;
}
var ol = !1;
function sl(e, t) {
  if (!e || ol) return "";
  ol = !0;
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
    ol = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Lo(e) : "";
}
function Jw(e) {
  switch (e.tag) {
    case 5:
      return Lo(e.type);
    case 16:
      return Lo("Lazy");
    case 13:
      return Lo("Suspense");
    case 19:
      return Lo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = sl(e.type, !1), e;
    case 11:
      return e = sl(e.type.render, !1), e;
    case 1:
      return e = sl(e.type, !0), e;
    default:
      return "";
  }
}
function nc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Tr:
      return "Fragment";
    case Er:
      return "Portal";
    case Jl:
      return "Profiler";
    case Tu:
      return "StrictMode";
    case ec:
      return "Suspense";
    case tc:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Fm:
      return (e.displayName || "Context") + ".Consumer";
    case Im:
      return (e._context.displayName || "Context") + ".Provider";
    case Pu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Du:
      return t = e.displayName || null, t !== null ? t : nc(e.type) || "Memo";
    case vn:
      t = e._payload, e = e._init;
      try {
        return nc(e(t));
      } catch {
      }
  }
  return null;
}
function e1(e) {
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
      return nc(t);
    case 8:
      return t === Tu ? "StrictMode" : "Mode";
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
function jn(e) {
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
function zm(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function t1(e) {
  var t = zm(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Ws(e) {
  e._valueTracker || (e._valueTracker = t1(e));
}
function Bm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = zm(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function zi(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function rc(e, t) {
  var n = t.checked;
  return he({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Cf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = jn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function $m(e, t) {
  t = t.checked, t != null && Eu(e, "checked", t, !1);
}
function oc(e, t) {
  $m(e, t);
  var n = jn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? sc(e, t.type, n) : t.hasOwnProperty("defaultValue") && sc(e, t.type, jn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ef(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function sc(e, t, n) {
  (t !== "number" || zi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _o = Array.isArray;
function $r(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + jn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ic(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return he({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Tf(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(A(92));
      if (_o(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: jn(n) };
}
function Um(e, t) {
  var n = jn(t.value), r = jn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Pf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Wm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ac(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Wm(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Hs, Hm = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Hs = Hs || document.createElement("div"), Hs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Hs.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function ns(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var $o = {
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
}, n1 = ["Webkit", "ms", "Moz", "O"];
Object.keys($o).forEach(function(e) {
  n1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), $o[t] = $o[e];
  });
});
function Km(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || $o.hasOwnProperty(e) && $o[e] ? ("" + t).trim() : t + "px";
}
function Gm(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Km(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var r1 = he({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function lc(e, t) {
  if (t) {
    if (r1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function cc(e, t) {
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
var uc = null;
function Nu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var dc = null, Ur = null, Wr = null;
function Df(e) {
  if (e = As(e)) {
    if (typeof dc != "function") throw Error(A(280));
    var t = e.stateNode;
    t && (t = Da(t), dc(e.stateNode, e.type, t));
  }
}
function Ym(e) {
  Ur ? Wr ? Wr.push(e) : Wr = [e] : Ur = e;
}
function Xm() {
  if (Ur) {
    var e = Ur, t = Wr;
    if (Wr = Ur = null, Df(e), t) for (e = 0; e < t.length; e++) Df(t[e]);
  }
}
function Qm(e, t) {
  return e(t);
}
function qm() {
}
var il = !1;
function Zm(e, t, n) {
  if (il) return e(t, n);
  il = !0;
  try {
    return Qm(e, t, n);
  } finally {
    il = !1, (Ur !== null || Wr !== null) && (qm(), Xm());
  }
}
function rs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Da(n);
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
var fc = !1;
if (tn) try {
  var Co = {};
  Object.defineProperty(Co, "passive", { get: function() {
    fc = !0;
  } }), window.addEventListener("test", Co, Co), window.removeEventListener("test", Co, Co);
} catch {
  fc = !1;
}
function o1(e, t, n, r, o, s, i, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var Uo = !1, Bi = null, $i = !1, pc = null, s1 = { onError: function(e) {
  Uo = !0, Bi = e;
} };
function i1(e, t, n, r, o, s, i, a, l) {
  Uo = !1, Bi = null, o1.apply(s1, arguments);
}
function a1(e, t, n, r, o, s, i, a, l) {
  if (i1.apply(this, arguments), Uo) {
    if (Uo) {
      var c = Bi;
      Uo = !1, Bi = null;
    } else throw Error(A(198));
    $i || ($i = !0, pc = c);
  }
}
function vr(e) {
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
function Jm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Nf(e) {
  if (vr(e) !== e) throw Error(A(188));
}
function l1(e) {
  var t = e.alternate;
  if (!t) {
    if (t = vr(e), t === null) throw Error(A(188));
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
        if (s === n) return Nf(o), e;
        if (s === r) return Nf(o), t;
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
function eg(e) {
  return e = l1(e), e !== null ? tg(e) : null;
}
function tg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = tg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ng = it.unstable_scheduleCallback, Mf = it.unstable_cancelCallback, c1 = it.unstable_shouldYield, u1 = it.unstable_requestPaint, ke = it.unstable_now, d1 = it.unstable_getCurrentPriorityLevel, Mu = it.unstable_ImmediatePriority, rg = it.unstable_UserBlockingPriority, Ui = it.unstable_NormalPriority, f1 = it.unstable_LowPriority, og = it.unstable_IdlePriority, Ca = null, Ft = null;
function p1(e) {
  if (Ft && typeof Ft.onCommitFiberRoot == "function") try {
    Ft.onCommitFiberRoot(Ca, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Tt = Math.clz32 ? Math.clz32 : g1, h1 = Math.log, m1 = Math.LN2;
function g1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (h1(e) / m1 | 0) | 0;
}
var Ks = 64, Gs = 4194304;
function Oo(e) {
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
function Wi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, s = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var a = i & ~o;
    a !== 0 ? r = Oo(a) : (s &= i, s !== 0 && (r = Oo(s)));
  } else i = n & ~o, i !== 0 ? r = Oo(i) : s !== 0 && (r = Oo(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, s = t & -t, o >= s || o === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Tt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function y1(e, t) {
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
function v1(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var i = 31 - Tt(s), a = 1 << i, l = o[i];
    l === -1 ? (!(a & n) || a & r) && (o[i] = y1(a, t)) : l <= t && (e.expiredLanes |= a), s &= ~a;
  }
}
function hc(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function sg() {
  var e = Ks;
  return Ks <<= 1, !(Ks & 4194240) && (Ks = 64), e;
}
function al(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ns(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Tt(t), e[t] = n;
}
function x1(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Tt(n), s = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~s;
  }
}
function Au(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Tt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var ne = 0;
function ig(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var ag, Ru, lg, cg, ug, mc = !1, Ys = [], Cn = null, En = null, Tn = null, os = /* @__PURE__ */ new Map(), ss = /* @__PURE__ */ new Map(), wn = [], w1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Af(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Cn = null;
      break;
    case "dragenter":
    case "dragleave":
      En = null;
      break;
    case "mouseover":
    case "mouseout":
      Tn = null;
      break;
    case "pointerover":
    case "pointerout":
      os.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ss.delete(t.pointerId);
  }
}
function Eo(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [o] }, t !== null && (t = As(t), t !== null && Ru(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function b1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Cn = Eo(Cn, e, t, n, r, o), !0;
    case "dragenter":
      return En = Eo(En, e, t, n, r, o), !0;
    case "mouseover":
      return Tn = Eo(Tn, e, t, n, r, o), !0;
    case "pointerover":
      var s = o.pointerId;
      return os.set(s, Eo(os.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return s = o.pointerId, ss.set(s, Eo(ss.get(s) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function dg(e) {
  var t = tr(e.target);
  if (t !== null) {
    var n = vr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Jm(n), t !== null) {
          e.blockedOn = t, ug(e.priority, function() {
            lg(n);
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
function Si(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = gc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      uc = r, n.target.dispatchEvent(r), uc = null;
    } else return t = As(n), t !== null && Ru(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Rf(e, t, n) {
  Si(e) && n.delete(t);
}
function S1() {
  mc = !1, Cn !== null && Si(Cn) && (Cn = null), En !== null && Si(En) && (En = null), Tn !== null && Si(Tn) && (Tn = null), os.forEach(Rf), ss.forEach(Rf);
}
function To(e, t) {
  e.blockedOn === t && (e.blockedOn = null, mc || (mc = !0, it.unstable_scheduleCallback(it.unstable_NormalPriority, S1)));
}
function is(e) {
  function t(o) {
    return To(o, e);
  }
  if (0 < Ys.length) {
    To(Ys[0], e);
    for (var n = 1; n < Ys.length; n++) {
      var r = Ys[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Cn !== null && To(Cn, e), En !== null && To(En, e), Tn !== null && To(Tn, e), os.forEach(t), ss.forEach(t), n = 0; n < wn.length; n++) r = wn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < wn.length && (n = wn[0], n.blockedOn === null); ) dg(n), n.blockedOn === null && wn.shift();
}
var Hr = cn.ReactCurrentBatchConfig, Hi = !0;
function k1(e, t, n, r) {
  var o = ne, s = Hr.transition;
  Hr.transition = null;
  try {
    ne = 1, ju(e, t, n, r);
  } finally {
    ne = o, Hr.transition = s;
  }
}
function C1(e, t, n, r) {
  var o = ne, s = Hr.transition;
  Hr.transition = null;
  try {
    ne = 4, ju(e, t, n, r);
  } finally {
    ne = o, Hr.transition = s;
  }
}
function ju(e, t, n, r) {
  if (Hi) {
    var o = gc(e, t, n, r);
    if (o === null) yl(e, t, r, Ki, n), Af(e, r);
    else if (b1(o, e, t, n, r)) r.stopPropagation();
    else if (Af(e, r), t & 4 && -1 < w1.indexOf(e)) {
      for (; o !== null; ) {
        var s = As(o);
        if (s !== null && ag(s), s = gc(e, t, n, r), s === null && yl(e, t, r, Ki, n), s === o) break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else yl(e, t, r, null, n);
  }
}
var Ki = null;
function gc(e, t, n, r) {
  if (Ki = null, e = Nu(r), e = tr(e), e !== null) if (t = vr(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Jm(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ki = e, null;
}
function fg(e) {
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
      switch (d1()) {
        case Mu:
          return 1;
        case rg:
          return 4;
        case Ui:
        case f1:
          return 16;
        case og:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Sn = null, Lu = null, ki = null;
function pg() {
  if (ki) return ki;
  var e, t = Lu, n = t.length, r, o = "value" in Sn ? Sn.value : Sn.textContent, s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++) ;
  return ki = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Ci(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Xs() {
  return !0;
}
function jf() {
  return !1;
}
function ct(e) {
  function t(n, r, o, s, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = s, this.target = i, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(s) : s[a]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Xs : jf, this.isPropagationStopped = jf, this;
  }
  return he(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Xs);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Xs);
  }, persist: function() {
  }, isPersistent: Xs }), t;
}
var fo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, _u = ct(fo), Ms = he({}, fo, { view: 0, detail: 0 }), E1 = ct(Ms), ll, cl, Po, Ea = he({}, Ms, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ou, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Po && (Po && e.type === "mousemove" ? (ll = e.screenX - Po.screenX, cl = e.screenY - Po.screenY) : cl = ll = 0, Po = e), ll);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : cl;
} }), Lf = ct(Ea), T1 = he({}, Ea, { dataTransfer: 0 }), P1 = ct(T1), D1 = he({}, Ms, { relatedTarget: 0 }), ul = ct(D1), N1 = he({}, fo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), M1 = ct(N1), A1 = he({}, fo, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), R1 = ct(A1), j1 = he({}, fo, { data: 0 }), _f = ct(j1), L1 = {
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
}, _1 = {
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
}, O1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function I1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = O1[e]) ? !!t[e] : !1;
}
function Ou() {
  return I1;
}
var F1 = he({}, Ms, { key: function(e) {
  if (e.key) {
    var t = L1[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ci(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _1[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ou, charCode: function(e) {
  return e.type === "keypress" ? Ci(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ci(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), V1 = ct(F1), z1 = he({}, Ea, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Of = ct(z1), B1 = he({}, Ms, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ou }), $1 = ct(B1), U1 = he({}, fo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), W1 = ct(U1), H1 = he({}, Ea, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), K1 = ct(H1), G1 = [9, 13, 27, 32], Iu = tn && "CompositionEvent" in window, Wo = null;
tn && "documentMode" in document && (Wo = document.documentMode);
var Y1 = tn && "TextEvent" in window && !Wo, hg = tn && (!Iu || Wo && 8 < Wo && 11 >= Wo), If = " ", Ff = !1;
function mg(e, t) {
  switch (e) {
    case "keyup":
      return G1.indexOf(t.keyCode) !== -1;
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
function gg(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Pr = !1;
function X1(e, t) {
  switch (e) {
    case "compositionend":
      return gg(t);
    case "keypress":
      return t.which !== 32 ? null : (Ff = !0, If);
    case "textInput":
      return e = t.data, e === If && Ff ? null : e;
    default:
      return null;
  }
}
function Q1(e, t) {
  if (Pr) return e === "compositionend" || !Iu && mg(e, t) ? (e = pg(), ki = Lu = Sn = null, Pr = !1, e) : null;
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
      return hg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var q1 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Vf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!q1[e.type] : t === "textarea";
}
function yg(e, t, n, r) {
  Ym(r), t = Gi(t, "onChange"), 0 < t.length && (n = new _u("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Ho = null, as = null;
function Z1(e) {
  Dg(e, 0);
}
function Ta(e) {
  var t = Mr(e);
  if (Bm(t)) return e;
}
function J1(e, t) {
  if (e === "change") return t;
}
var vg = !1;
if (tn) {
  var dl;
  if (tn) {
    var fl = "oninput" in document;
    if (!fl) {
      var zf = document.createElement("div");
      zf.setAttribute("oninput", "return;"), fl = typeof zf.oninput == "function";
    }
    dl = fl;
  } else dl = !1;
  vg = dl && (!document.documentMode || 9 < document.documentMode);
}
function Bf() {
  Ho && (Ho.detachEvent("onpropertychange", xg), as = Ho = null);
}
function xg(e) {
  if (e.propertyName === "value" && Ta(as)) {
    var t = [];
    yg(t, as, e, Nu(e)), Zm(Z1, t);
  }
}
function eb(e, t, n) {
  e === "focusin" ? (Bf(), Ho = t, as = n, Ho.attachEvent("onpropertychange", xg)) : e === "focusout" && Bf();
}
function tb(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ta(as);
}
function nb(e, t) {
  if (e === "click") return Ta(t);
}
function rb(e, t) {
  if (e === "input" || e === "change") return Ta(t);
}
function ob(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Dt = typeof Object.is == "function" ? Object.is : ob;
function ls(e, t) {
  if (Dt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Zl.call(t, o) || !Dt(e[o], t[o])) return !1;
  }
  return !0;
}
function $f(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Uf(e, t) {
  var n = $f(e);
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
    n = $f(n);
  }
}
function wg(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? wg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function bg() {
  for (var e = window, t = zi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = zi(e.document);
  }
  return t;
}
function Fu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function sb(e) {
  var t = bg(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && wg(n.ownerDocument.documentElement, n)) {
    if (r !== null && Fu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, s = Math.min(r.start, o);
        r = r.end === void 0 ? s : Math.min(r.end, o), !e.extend && s > r && (o = r, r = s, s = o), o = Uf(n, s);
        var i = Uf(
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
var ib = tn && "documentMode" in document && 11 >= document.documentMode, Dr = null, yc = null, Ko = null, vc = !1;
function Wf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  vc || Dr == null || Dr !== zi(r) || (r = Dr, "selectionStart" in r && Fu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ko && ls(Ko, r) || (Ko = r, r = Gi(yc, "onSelect"), 0 < r.length && (t = new _u("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Dr)));
}
function Qs(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Nr = { animationend: Qs("Animation", "AnimationEnd"), animationiteration: Qs("Animation", "AnimationIteration"), animationstart: Qs("Animation", "AnimationStart"), transitionend: Qs("Transition", "TransitionEnd") }, pl = {}, Sg = {};
tn && (Sg = document.createElement("div").style, "AnimationEvent" in window || (delete Nr.animationend.animation, delete Nr.animationiteration.animation, delete Nr.animationstart.animation), "TransitionEvent" in window || delete Nr.transitionend.transition);
function Pa(e) {
  if (pl[e]) return pl[e];
  if (!Nr[e]) return e;
  var t = Nr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Sg) return pl[e] = t[n];
  return e;
}
var kg = Pa("animationend"), Cg = Pa("animationiteration"), Eg = Pa("animationstart"), Tg = Pa("transitionend"), Pg = /* @__PURE__ */ new Map(), Hf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Bn(e, t) {
  Pg.set(e, t), yr(t, [e]);
}
for (var hl = 0; hl < Hf.length; hl++) {
  var ml = Hf[hl], ab = ml.toLowerCase(), lb = ml[0].toUpperCase() + ml.slice(1);
  Bn(ab, "on" + lb);
}
Bn(kg, "onAnimationEnd");
Bn(Cg, "onAnimationIteration");
Bn(Eg, "onAnimationStart");
Bn("dblclick", "onDoubleClick");
Bn("focusin", "onFocus");
Bn("focusout", "onBlur");
Bn(Tg, "onTransitionEnd");
qr("onMouseEnter", ["mouseout", "mouseover"]);
qr("onMouseLeave", ["mouseout", "mouseover"]);
qr("onPointerEnter", ["pointerout", "pointerover"]);
qr("onPointerLeave", ["pointerout", "pointerover"]);
yr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
yr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
yr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
yr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
yr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
yr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Io = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), cb = new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));
function Kf(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, a1(r, t, void 0, e), e.currentTarget = null;
}
function Dg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var a = r[i], l = a.instance, c = a.currentTarget;
        if (a = a.listener, l !== s && o.isPropagationStopped()) break e;
        Kf(o, a, c), s = l;
      }
      else for (i = 0; i < r.length; i++) {
        if (a = r[i], l = a.instance, c = a.currentTarget, a = a.listener, l !== s && o.isPropagationStopped()) break e;
        Kf(o, a, c), s = l;
      }
    }
  }
  if ($i) throw e = pc, $i = !1, pc = null, e;
}
function ae(e, t) {
  var n = t[kc];
  n === void 0 && (n = t[kc] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Ng(t, e, 2, !1), n.add(r));
}
function gl(e, t, n) {
  var r = 0;
  t && (r |= 4), Ng(n, e, r, t);
}
var qs = "_reactListening" + Math.random().toString(36).slice(2);
function cs(e) {
  if (!e[qs]) {
    e[qs] = !0, Om.forEach(function(n) {
      n !== "selectionchange" && (cb.has(n) || gl(n, !1, e), gl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[qs] || (t[qs] = !0, gl("selectionchange", !1, t));
  }
}
function Ng(e, t, n, r) {
  switch (fg(t)) {
    case 1:
      var o = k1;
      break;
    case 4:
      o = C1;
      break;
    default:
      o = ju;
  }
  n = o.bind(null, t, n, e), o = void 0, !fc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function yl(e, t, n, r, o) {
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
        if (i = tr(a), i === null) return;
        if (l = i.tag, l === 5 || l === 6) {
          r = s = i;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  Zm(function() {
    var c = s, u = Nu(n), f = [];
    e: {
      var d = Pg.get(e);
      if (d !== void 0) {
        var g = _u, w = e;
        switch (e) {
          case "keypress":
            if (Ci(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = V1;
            break;
          case "focusin":
            w = "focus", g = ul;
            break;
          case "focusout":
            w = "blur", g = ul;
            break;
          case "beforeblur":
          case "afterblur":
            g = ul;
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
            g = Lf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = P1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = $1;
            break;
          case kg:
          case Cg:
          case Eg:
            g = M1;
            break;
          case Tg:
            g = W1;
            break;
          case "scroll":
            g = E1;
            break;
          case "wheel":
            g = K1;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = R1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Of;
        }
        var v = (t & 4) !== 0, b = !v && e === "scroll", m = v ? d !== null ? d + "Capture" : null : d;
        v = [];
        for (var h = c, y; h !== null; ) {
          y = h;
          var S = y.stateNode;
          if (y.tag === 5 && S !== null && (y = S, m !== null && (S = rs(h, m), S != null && v.push(us(h, S, y)))), b) break;
          h = h.return;
        }
        0 < v.length && (d = new g(d, w, null, n, u), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && n !== uc && (w = n.relatedTarget || n.fromElement) && (tr(w) || w[nn])) break e;
        if ((g || d) && (d = u.window === u ? u : (d = u.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = c, w = w ? tr(w) : null, w !== null && (b = vr(w), w !== b || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = c), g !== w)) {
          if (v = Lf, S = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (v = Of, S = "onPointerLeave", m = "onPointerEnter", h = "pointer"), b = g == null ? d : Mr(g), y = w == null ? d : Mr(w), d = new v(S, h + "leave", g, n, u), d.target = b, d.relatedTarget = y, S = null, tr(u) === c && (v = new v(m, h + "enter", w, n, u), v.target = y, v.relatedTarget = b, S = v), b = S, g && w) t: {
            for (v = g, m = w, h = 0, y = v; y; y = wr(y)) h++;
            for (y = 0, S = m; S; S = wr(S)) y++;
            for (; 0 < h - y; ) v = wr(v), h--;
            for (; 0 < y - h; ) m = wr(m), y--;
            for (; h--; ) {
              if (v === m || m !== null && v === m.alternate) break t;
              v = wr(v), m = wr(m);
            }
            v = null;
          }
          else v = null;
          g !== null && Gf(f, d, g, v, !1), w !== null && b !== null && Gf(f, b, w, v, !0);
        }
      }
      e: {
        if (d = c ? Mr(c) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file") var k = J1;
        else if (Vf(d)) if (vg) k = rb;
        else {
          k = tb;
          var E = eb;
        }
        else (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (k = nb);
        if (k && (k = k(e, c))) {
          yg(f, k, n, u);
          break e;
        }
        E && E(e, d, c), e === "focusout" && (E = d._wrapperState) && E.controlled && d.type === "number" && sc(d, "number", d.value);
      }
      switch (E = c ? Mr(c) : window, e) {
        case "focusin":
          (Vf(E) || E.contentEditable === "true") && (Dr = E, yc = c, Ko = null);
          break;
        case "focusout":
          Ko = yc = Dr = null;
          break;
        case "mousedown":
          vc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          vc = !1, Wf(f, n, u);
          break;
        case "selectionchange":
          if (ib) break;
        case "keydown":
        case "keyup":
          Wf(f, n, u);
      }
      var C;
      if (Iu) e: {
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
      else Pr ? mg(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (hg && n.locale !== "ko" && (Pr || T !== "onCompositionStart" ? T === "onCompositionEnd" && Pr && (C = pg()) : (Sn = u, Lu = "value" in Sn ? Sn.value : Sn.textContent, Pr = !0)), E = Gi(c, T), 0 < E.length && (T = new _f(T, e, null, n, u), f.push({ event: T, listeners: E }), C ? T.data = C : (C = gg(n), C !== null && (T.data = C)))), (C = Y1 ? X1(e, n) : Q1(e, n)) && (c = Gi(c, "onBeforeInput"), 0 < c.length && (u = new _f("onBeforeInput", "beforeinput", null, n, u), f.push({ event: u, listeners: c }), u.data = C));
    }
    Dg(f, t);
  });
}
function us(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Gi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, s = o.stateNode;
    o.tag === 5 && s !== null && (o = s, s = rs(e, n), s != null && r.unshift(us(e, s, o)), s = rs(e, t), s != null && r.push(us(e, s, o))), e = e.return;
  }
  return r;
}
function wr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Gf(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && c !== null && (a = c, o ? (l = rs(n, s), l != null && i.unshift(us(n, l, a))) : o || (l = rs(n, s), l != null && i.push(us(n, l, a)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var ub = /\r\n?/g, db = /\u0000|\uFFFD/g;
function Yf(e) {
  return (typeof e == "string" ? e : "" + e).replace(ub, `
`).replace(db, "");
}
function Zs(e, t, n) {
  if (t = Yf(t), Yf(e) !== t && n) throw Error(A(425));
}
function Yi() {
}
var xc = null, wc = null;
function bc(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Sc = typeof setTimeout == "function" ? setTimeout : void 0, fb = typeof clearTimeout == "function" ? clearTimeout : void 0, Xf = typeof Promise == "function" ? Promise : void 0, pb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xf < "u" ? function(e) {
  return Xf.resolve(null).then(e).catch(hb);
} : Sc;
function hb(e) {
  setTimeout(function() {
    throw e;
  });
}
function vl(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), is(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  is(t);
}
function Pn(e) {
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
function Qf(e) {
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
var po = Math.random().toString(36).slice(2), _t = "__reactFiber$" + po, ds = "__reactProps$" + po, nn = "__reactContainer$" + po, kc = "__reactEvents$" + po, mb = "__reactListeners$" + po, gb = "__reactHandles$" + po;
function tr(e) {
  var t = e[_t];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[nn] || n[_t]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Qf(e); e !== null; ) {
        if (n = e[_t]) return n;
        e = Qf(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function As(e) {
  return e = e[_t] || e[nn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Mr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function Da(e) {
  return e[ds] || null;
}
var Cc = [], Ar = -1;
function $n(e) {
  return { current: e };
}
function le(e) {
  0 > Ar || (e.current = Cc[Ar], Cc[Ar] = null, Ar--);
}
function se(e, t) {
  Ar++, Cc[Ar] = e.current, e.current = t;
}
var Ln = {}, Be = $n(Ln), Qe = $n(!1), lr = Ln;
function Zr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ln;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, s;
  for (s in n) o[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function qe(e) {
  return e = e.childContextTypes, e != null;
}
function Xi() {
  le(Qe), le(Be);
}
function qf(e, t, n) {
  if (Be.current !== Ln) throw Error(A(168));
  se(Be, t), se(Qe, n);
}
function Mg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(A(108, e1(e) || "Unknown", o));
  return he({}, n, r);
}
function Qi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ln, lr = Be.current, se(Be, e), se(Qe, Qe.current), !0;
}
function Zf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n ? (e = Mg(e, t, lr), r.__reactInternalMemoizedMergedChildContext = e, le(Qe), le(Be), se(Be, e)) : le(Qe), se(Qe, n);
}
var Gt = null, Na = !1, xl = !1;
function Ag(e) {
  Gt === null ? Gt = [e] : Gt.push(e);
}
function yb(e) {
  Na = !0, Ag(e);
}
function Un() {
  if (!xl && Gt !== null) {
    xl = !0;
    var e = 0, t = ne;
    try {
      var n = Gt;
      for (ne = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Gt = null, Na = !1;
    } catch (o) {
      throw Gt !== null && (Gt = Gt.slice(e + 1)), ng(Mu, Un), o;
    } finally {
      ne = t, xl = !1;
    }
  }
  return null;
}
var Rr = [], jr = 0, qi = null, Zi = 0, ht = [], mt = 0, cr = null, Yt = 1, Xt = "";
function qn(e, t) {
  Rr[jr++] = Zi, Rr[jr++] = qi, qi = e, Zi = t;
}
function Rg(e, t, n) {
  ht[mt++] = Yt, ht[mt++] = Xt, ht[mt++] = cr, cr = e;
  var r = Yt;
  e = Xt;
  var o = 32 - Tt(r) - 1;
  r &= ~(1 << o), n += 1;
  var s = 32 - Tt(t) + o;
  if (30 < s) {
    var i = o - o % 5;
    s = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Yt = 1 << 32 - Tt(t) + o | n << o | r, Xt = s + e;
  } else Yt = 1 << s | n << o | r, Xt = e;
}
function Vu(e) {
  e.return !== null && (qn(e, 1), Rg(e, 1, 0));
}
function zu(e) {
  for (; e === qi; ) qi = Rr[--jr], Rr[jr] = null, Zi = Rr[--jr], Rr[jr] = null;
  for (; e === cr; ) cr = ht[--mt], ht[mt] = null, Xt = ht[--mt], ht[mt] = null, Yt = ht[--mt], ht[mt] = null;
}
var rt = null, nt = null, ue = !1, Et = null;
function jg(e, t) {
  var n = gt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Jf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, rt = e, nt = Pn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, rt = e, nt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = cr !== null ? { id: Yt, overflow: Xt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = gt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, rt = e, nt = null, !0) : !1;
    default:
      return !1;
  }
}
function Ec(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Tc(e) {
  if (ue) {
    var t = nt;
    if (t) {
      var n = t;
      if (!Jf(e, t)) {
        if (Ec(e)) throw Error(A(418));
        t = Pn(n.nextSibling);
        var r = rt;
        t && Jf(e, t) ? jg(r, n) : (e.flags = e.flags & -4097 | 2, ue = !1, rt = e);
      }
    } else {
      if (Ec(e)) throw Error(A(418));
      e.flags = e.flags & -4097 | 2, ue = !1, rt = e;
    }
  }
}
function ep(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  rt = e;
}
function Js(e) {
  if (e !== rt) return !1;
  if (!ue) return ep(e), ue = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !bc(e.type, e.memoizedProps)), t && (t = nt)) {
    if (Ec(e)) throw Lg(), Error(A(418));
    for (; t; ) jg(e, t), t = Pn(t.nextSibling);
  }
  if (ep(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              nt = Pn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      nt = null;
    }
  } else nt = rt ? Pn(e.stateNode.nextSibling) : null;
  return !0;
}
function Lg() {
  for (var e = nt; e; ) e = Pn(e.nextSibling);
}
function Jr() {
  nt = rt = null, ue = !1;
}
function Bu(e) {
  Et === null ? Et = [e] : Et.push(e);
}
var vb = cn.ReactCurrentBatchConfig;
function Do(e, t, n) {
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
function ei(e, t) {
  throw e = Object.prototype.toString.call(t), Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function tp(e) {
  var t = e._init;
  return t(e._payload);
}
function _g(e) {
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
    return m = An(m, h), m.index = 0, m.sibling = null, m;
  }
  function s(m, h, y) {
    return m.index = y, e ? (y = m.alternate, y !== null ? (y = y.index, y < h ? (m.flags |= 2, h) : y) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, y, S) {
    return h === null || h.tag !== 6 ? (h = Tl(y, m.mode, S), h.return = m, h) : (h = o(h, y), h.return = m, h);
  }
  function l(m, h, y, S) {
    var k = y.type;
    return k === Tr ? u(m, h, y.props.children, S, y.key) : h !== null && (h.elementType === k || typeof k == "object" && k !== null && k.$$typeof === vn && tp(k) === h.type) ? (S = o(h, y.props), S.ref = Do(m, h, y), S.return = m, S) : (S = Ai(y.type, y.key, y.props, null, m.mode, S), S.ref = Do(m, h, y), S.return = m, S);
  }
  function c(m, h, y, S) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== y.containerInfo || h.stateNode.implementation !== y.implementation ? (h = Pl(y, m.mode, S), h.return = m, h) : (h = o(h, y.children || []), h.return = m, h);
  }
  function u(m, h, y, S, k) {
    return h === null || h.tag !== 7 ? (h = ir(y, m.mode, S, k), h.return = m, h) : (h = o(h, y), h.return = m, h);
  }
  function f(m, h, y) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = Tl("" + h, m.mode, y), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Us:
          return y = Ai(h.type, h.key, h.props, null, m.mode, y), y.ref = Do(m, null, h), y.return = m, y;
        case Er:
          return h = Pl(h, m.mode, y), h.return = m, h;
        case vn:
          var S = h._init;
          return f(m, S(h._payload), y);
      }
      if (_o(h) || ko(h)) return h = ir(h, m.mode, y, null), h.return = m, h;
      ei(m, h);
    }
    return null;
  }
  function d(m, h, y, S) {
    var k = h !== null ? h.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number") return k !== null ? null : a(m, h, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Us:
          return y.key === k ? l(m, h, y, S) : null;
        case Er:
          return y.key === k ? c(m, h, y, S) : null;
        case vn:
          return k = y._init, d(
            m,
            h,
            k(y._payload),
            S
          );
      }
      if (_o(y) || ko(y)) return k !== null ? null : u(m, h, y, S, null);
      ei(m, y);
    }
    return null;
  }
  function g(m, h, y, S, k) {
    if (typeof S == "string" && S !== "" || typeof S == "number") return m = m.get(y) || null, a(h, m, "" + S, k);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Us:
          return m = m.get(S.key === null ? y : S.key) || null, l(h, m, S, k);
        case Er:
          return m = m.get(S.key === null ? y : S.key) || null, c(h, m, S, k);
        case vn:
          var E = S._init;
          return g(m, h, y, E(S._payload), k);
      }
      if (_o(S) || ko(S)) return m = m.get(y) || null, u(h, m, S, k, null);
      ei(h, S);
    }
    return null;
  }
  function w(m, h, y, S) {
    for (var k = null, E = null, C = h, T = h = 0, R = null; C !== null && T < y.length; T++) {
      C.index > T ? (R = C, C = null) : R = C.sibling;
      var N = d(m, C, y[T], S);
      if (N === null) {
        C === null && (C = R);
        break;
      }
      e && C && N.alternate === null && t(m, C), h = s(N, h, T), E === null ? k = N : E.sibling = N, E = N, C = R;
    }
    if (T === y.length) return n(m, C), ue && qn(m, T), k;
    if (C === null) {
      for (; T < y.length; T++) C = f(m, y[T], S), C !== null && (h = s(C, h, T), E === null ? k = C : E.sibling = C, E = C);
      return ue && qn(m, T), k;
    }
    for (C = r(m, C); T < y.length; T++) R = g(C, m, T, y[T], S), R !== null && (e && R.alternate !== null && C.delete(R.key === null ? T : R.key), h = s(R, h, T), E === null ? k = R : E.sibling = R, E = R);
    return e && C.forEach(function(P) {
      return t(m, P);
    }), ue && qn(m, T), k;
  }
  function v(m, h, y, S) {
    var k = ko(y);
    if (typeof k != "function") throw Error(A(150));
    if (y = k.call(y), y == null) throw Error(A(151));
    for (var E = k = null, C = h, T = h = 0, R = null, N = y.next(); C !== null && !N.done; T++, N = y.next()) {
      C.index > T ? (R = C, C = null) : R = C.sibling;
      var P = d(m, C, N.value, S);
      if (P === null) {
        C === null && (C = R);
        break;
      }
      e && C && P.alternate === null && t(m, C), h = s(P, h, T), E === null ? k = P : E.sibling = P, E = P, C = R;
    }
    if (N.done) return n(
      m,
      C
    ), ue && qn(m, T), k;
    if (C === null) {
      for (; !N.done; T++, N = y.next()) N = f(m, N.value, S), N !== null && (h = s(N, h, T), E === null ? k = N : E.sibling = N, E = N);
      return ue && qn(m, T), k;
    }
    for (C = r(m, C); !N.done; T++, N = y.next()) N = g(C, m, T, N.value, S), N !== null && (e && N.alternate !== null && C.delete(N.key === null ? T : N.key), h = s(N, h, T), E === null ? k = N : E.sibling = N, E = N);
    return e && C.forEach(function(M) {
      return t(m, M);
    }), ue && qn(m, T), k;
  }
  function b(m, h, y, S) {
    if (typeof y == "object" && y !== null && y.type === Tr && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Us:
          e: {
            for (var k = y.key, E = h; E !== null; ) {
              if (E.key === k) {
                if (k = y.type, k === Tr) {
                  if (E.tag === 7) {
                    n(m, E.sibling), h = o(E, y.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (E.elementType === k || typeof k == "object" && k !== null && k.$$typeof === vn && tp(k) === E.type) {
                  n(m, E.sibling), h = o(E, y.props), h.ref = Do(m, E, y), h.return = m, m = h;
                  break e;
                }
                n(m, E);
                break;
              } else t(m, E);
              E = E.sibling;
            }
            y.type === Tr ? (h = ir(y.props.children, m.mode, S, y.key), h.return = m, m = h) : (S = Ai(y.type, y.key, y.props, null, m.mode, S), S.ref = Do(m, h, y), S.return = m, m = S);
          }
          return i(m);
        case Er:
          e: {
            for (E = y.key; h !== null; ) {
              if (h.key === E) if (h.tag === 4 && h.stateNode.containerInfo === y.containerInfo && h.stateNode.implementation === y.implementation) {
                n(m, h.sibling), h = o(h, y.children || []), h.return = m, m = h;
                break e;
              } else {
                n(m, h);
                break;
              }
              else t(m, h);
              h = h.sibling;
            }
            h = Pl(y, m.mode, S), h.return = m, m = h;
          }
          return i(m);
        case vn:
          return E = y._init, b(m, h, E(y._payload), S);
      }
      if (_o(y)) return w(m, h, y, S);
      if (ko(y)) return v(m, h, y, S);
      ei(m, y);
    }
    return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, h !== null && h.tag === 6 ? (n(m, h.sibling), h = o(h, y), h.return = m, m = h) : (n(m, h), h = Tl(y, m.mode, S), h.return = m, m = h), i(m)) : n(m, h);
  }
  return b;
}
var eo = _g(!0), Og = _g(!1), Ji = $n(null), ea = null, Lr = null, $u = null;
function Uu() {
  $u = Lr = ea = null;
}
function Wu(e) {
  var t = Ji.current;
  le(Ji), e._currentValue = t;
}
function Pc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Kr(e, t) {
  ea = e, $u = Lr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Xe = !0), e.firstContext = null);
}
function vt(e) {
  var t = e._currentValue;
  if ($u !== e) if (e = { context: e, memoizedValue: t, next: null }, Lr === null) {
    if (ea === null) throw Error(A(308));
    Lr = e, ea.dependencies = { lanes: 0, firstContext: e };
  } else Lr = Lr.next = e;
  return t;
}
var nr = null;
function Hu(e) {
  nr === null ? nr = [e] : nr.push(e);
}
function Ig(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Hu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, rn(e, r);
}
function rn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var xn = !1;
function Ku(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Fg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function qt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Dn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Q & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, rn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Hu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, rn(e, n);
}
function Ei(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Au(e, n);
  }
}
function np(e, t) {
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
function ta(e, t, n, r) {
  var o = e.updateQueue;
  xn = !1;
  var s = o.firstBaseUpdate, i = o.lastBaseUpdate, a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a, c = l.next;
    l.next = null, i === null ? s = c : i.next = c, i = l;
    var u = e.alternate;
    u !== null && (u = u.updateQueue, a = u.lastBaseUpdate, a !== i && (a === null ? u.firstBaseUpdate = c : a.next = c, u.lastBaseUpdate = l));
  }
  if (s !== null) {
    var f = o.baseState;
    i = 0, u = c = l = null, a = s;
    do {
      var d = a.lane, g = a.eventTime;
      if ((r & d) === d) {
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
          switch (d = t, g = n, v.tag) {
            case 1:
              if (w = v.payload, typeof w == "function") {
                f = w.call(g, f, d);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = v.payload, d = typeof w == "function" ? w.call(g, f, d) : w, d == null) break e;
              f = he({}, f, d);
              break e;
            case 2:
              xn = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, d = o.effects, d === null ? o.effects = [a] : d.push(a));
      } else g = { eventTime: g, lane: d, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, u === null ? (c = u = g, l = f) : u = u.next = g, i |= d;
      if (a = a.next, a === null) {
        if (a = o.shared.pending, a === null) break;
        d = a, a = d.next, d.next = null, o.lastBaseUpdate = d, o.shared.pending = null;
      }
    } while (!0);
    if (u === null && (l = f), o.baseState = l, o.firstBaseUpdate = c, o.lastBaseUpdate = u, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        i |= o.lane, o = o.next;
      while (o !== t);
    } else s === null && (o.shared.lanes = 0);
    dr |= i, e.lanes = i, e.memoizedState = f;
  }
}
function rp(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(A(191, o));
      o.call(r);
    }
  }
}
var Rs = {}, Vt = $n(Rs), fs = $n(Rs), ps = $n(Rs);
function rr(e) {
  if (e === Rs) throw Error(A(174));
  return e;
}
function Gu(e, t) {
  switch (se(ps, t), se(fs, e), se(Vt, Rs), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ac(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ac(t, e);
  }
  le(Vt), se(Vt, t);
}
function to() {
  le(Vt), le(fs), le(ps);
}
function Vg(e) {
  rr(ps.current);
  var t = rr(Vt.current), n = ac(t, e.type);
  t !== n && (se(fs, e), se(Vt, n));
}
function Yu(e) {
  fs.current === e && (le(Vt), le(fs));
}
var de = $n(0);
function na(e) {
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
var wl = [];
function Xu() {
  for (var e = 0; e < wl.length; e++) wl[e]._workInProgressVersionPrimary = null;
  wl.length = 0;
}
var Ti = cn.ReactCurrentDispatcher, bl = cn.ReactCurrentBatchConfig, ur = 0, pe = null, Te = null, De = null, ra = !1, Go = !1, hs = 0, xb = 0;
function Oe() {
  throw Error(A(321));
}
function Qu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Dt(e[n], t[n])) return !1;
  return !0;
}
function qu(e, t, n, r, o, s) {
  if (ur = s, pe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ti.current = e === null || e.memoizedState === null ? kb : Cb, e = n(r, o), Go) {
    s = 0;
    do {
      if (Go = !1, hs = 0, 25 <= s) throw Error(A(301));
      s += 1, De = Te = null, t.updateQueue = null, Ti.current = Eb, e = n(r, o);
    } while (Go);
  }
  if (Ti.current = oa, t = Te !== null && Te.next !== null, ur = 0, De = Te = pe = null, ra = !1, t) throw Error(A(300));
  return e;
}
function Zu() {
  var e = hs !== 0;
  return hs = 0, e;
}
function Lt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return De === null ? pe.memoizedState = De = e : De = De.next = e, De;
}
function xt() {
  if (Te === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Te.next;
  var t = De === null ? pe.memoizedState : De.next;
  if (t !== null) De = t, Te = e;
  else {
    if (e === null) throw Error(A(310));
    Te = e, e = { memoizedState: Te.memoizedState, baseState: Te.baseState, baseQueue: Te.baseQueue, queue: Te.queue, next: null }, De === null ? pe.memoizedState = De = e : De = De.next = e;
  }
  return De;
}
function ms(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Sl(e) {
  var t = xt(), n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = Te, o = r.baseQueue, s = n.pending;
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
      if ((ur & u) === u) l !== null && (l = l.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var f = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        l === null ? (a = l = f, i = r) : l = l.next = f, pe.lanes |= u, dr |= u;
      }
      c = c.next;
    } while (c !== null && c !== s);
    l === null ? i = r : l.next = a, Dt(r, t.memoizedState) || (Xe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      s = o.lane, pe.lanes |= s, dr |= s, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function kl(e) {
  var t = xt(), n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      s = e(s, i.action), i = i.next;
    while (i !== o);
    Dt(s, t.memoizedState) || (Xe = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function zg() {
}
function Bg(e, t) {
  var n = pe, r = xt(), o = t(), s = !Dt(r.memoizedState, o);
  if (s && (r.memoizedState = o, Xe = !0), r = r.queue, Ju(Wg.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || De !== null && De.memoizedState.tag & 1) {
    if (n.flags |= 2048, gs(9, Ug.bind(null, n, r, o, t), void 0, null), Ne === null) throw Error(A(349));
    ur & 30 || $g(n, t, o);
  }
  return o;
}
function $g(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, pe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ug(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Hg(t) && Kg(e);
}
function Wg(e, t, n) {
  return n(function() {
    Hg(t) && Kg(e);
  });
}
function Hg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Dt(e, n);
  } catch {
    return !0;
  }
}
function Kg(e) {
  var t = rn(e, 1);
  t !== null && Pt(t, e, 1, -1);
}
function op(e) {
  var t = Lt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ms, lastRenderedState: e }, t.queue = e, e = e.dispatch = Sb.bind(null, pe, e), [t.memoizedState, e];
}
function gs(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, pe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Gg() {
  return xt().memoizedState;
}
function Pi(e, t, n, r) {
  var o = Lt();
  pe.flags |= e, o.memoizedState = gs(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ma(e, t, n, r) {
  var o = xt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Te !== null) {
    var i = Te.memoizedState;
    if (s = i.destroy, r !== null && Qu(r, i.deps)) {
      o.memoizedState = gs(t, n, s, r);
      return;
    }
  }
  pe.flags |= e, o.memoizedState = gs(1 | t, n, s, r);
}
function sp(e, t) {
  return Pi(8390656, 8, e, t);
}
function Ju(e, t) {
  return Ma(2048, 8, e, t);
}
function Yg(e, t) {
  return Ma(4, 2, e, t);
}
function Xg(e, t) {
  return Ma(4, 4, e, t);
}
function Qg(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function qg(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ma(4, 4, Qg.bind(null, t, e), n);
}
function ed() {
}
function Zg(e, t) {
  var n = xt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Jg(e, t) {
  var n = xt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function ey(e, t, n) {
  return ur & 21 ? (Dt(n, t) || (n = sg(), pe.lanes |= n, dr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Xe = !0), e.memoizedState = n);
}
function wb(e, t) {
  var n = ne;
  ne = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = bl.transition;
  bl.transition = {};
  try {
    e(!1), t();
  } finally {
    ne = n, bl.transition = r;
  }
}
function ty() {
  return xt().memoizedState;
}
function bb(e, t, n) {
  var r = Mn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ny(e)) ry(t, n);
  else if (n = Ig(e, t, n, r), n !== null) {
    var o = He();
    Pt(n, e, r, o), oy(n, t, r);
  }
}
function Sb(e, t, n) {
  var r = Mn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ny(e)) ry(t, o);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var i = t.lastRenderedState, a = s(i, n);
      if (o.hasEagerState = !0, o.eagerState = a, Dt(a, i)) {
        var l = t.interleaved;
        l === null ? (o.next = o, Hu(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Ig(e, t, o, r), n !== null && (o = He(), Pt(n, e, r, o), oy(n, t, r));
  }
}
function ny(e) {
  var t = e.alternate;
  return e === pe || t !== null && t === pe;
}
function ry(e, t) {
  Go = ra = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function oy(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Au(e, n);
  }
}
var oa = { readContext: vt, useCallback: Oe, useContext: Oe, useEffect: Oe, useImperativeHandle: Oe, useInsertionEffect: Oe, useLayoutEffect: Oe, useMemo: Oe, useReducer: Oe, useRef: Oe, useState: Oe, useDebugValue: Oe, useDeferredValue: Oe, useTransition: Oe, useMutableSource: Oe, useSyncExternalStore: Oe, useId: Oe, unstable_isNewReconciler: !1 }, kb = { readContext: vt, useCallback: function(e, t) {
  return Lt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: vt, useEffect: sp, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Pi(
    4194308,
    4,
    Qg.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Pi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Pi(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Lt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Lt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = bb.bind(null, pe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Lt();
  return e = { current: e }, t.memoizedState = e;
}, useState: op, useDebugValue: ed, useDeferredValue: function(e) {
  return Lt().memoizedState = e;
}, useTransition: function() {
  var e = op(!1), t = e[0];
  return e = wb.bind(null, e[1]), Lt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = pe, o = Lt();
  if (ue) {
    if (n === void 0) throw Error(A(407));
    n = n();
  } else {
    if (n = t(), Ne === null) throw Error(A(349));
    ur & 30 || $g(r, t, n);
  }
  o.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return o.queue = s, sp(Wg.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, gs(9, Ug.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = Lt(), t = Ne.identifierPrefix;
  if (ue) {
    var n = Xt, r = Yt;
    n = (r & ~(1 << 32 - Tt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = hs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = xb++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Cb = {
  readContext: vt,
  useCallback: Zg,
  useContext: vt,
  useEffect: Ju,
  useImperativeHandle: qg,
  useInsertionEffect: Yg,
  useLayoutEffect: Xg,
  useMemo: Jg,
  useReducer: Sl,
  useRef: Gg,
  useState: function() {
    return Sl(ms);
  },
  useDebugValue: ed,
  useDeferredValue: function(e) {
    var t = xt();
    return ey(t, Te.memoizedState, e);
  },
  useTransition: function() {
    var e = Sl(ms)[0], t = xt().memoizedState;
    return [e, t];
  },
  useMutableSource: zg,
  useSyncExternalStore: Bg,
  useId: ty,
  unstable_isNewReconciler: !1
}, Eb = { readContext: vt, useCallback: Zg, useContext: vt, useEffect: Ju, useImperativeHandle: qg, useInsertionEffect: Yg, useLayoutEffect: Xg, useMemo: Jg, useReducer: kl, useRef: Gg, useState: function() {
  return kl(ms);
}, useDebugValue: ed, useDeferredValue: function(e) {
  var t = xt();
  return Te === null ? t.memoizedState = e : ey(t, Te.memoizedState, e);
}, useTransition: function() {
  var e = kl(ms)[0], t = xt().memoizedState;
  return [e, t];
}, useMutableSource: zg, useSyncExternalStore: Bg, useId: ty, unstable_isNewReconciler: !1 };
function kt(e, t) {
  if (e && e.defaultProps) {
    t = he({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Dc(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : he({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Aa = { isMounted: function(e) {
  return (e = e._reactInternals) ? vr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = He(), o = Mn(e), s = qt(r, o);
  s.payload = t, n != null && (s.callback = n), t = Dn(e, s, o), t !== null && (Pt(t, e, o, r), Ei(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = He(), o = Mn(e), s = qt(r, o);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Dn(e, s, o), t !== null && (Pt(t, e, o, r), Ei(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = He(), r = Mn(e), o = qt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Dn(e, o, r), t !== null && (Pt(t, e, r, n), Ei(t, e, r));
} };
function ip(e, t, n, r, o, s, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !ls(n, r) || !ls(o, s) : !0;
}
function sy(e, t, n) {
  var r = !1, o = Ln, s = t.contextType;
  return typeof s == "object" && s !== null ? s = vt(s) : (o = qe(t) ? lr : Be.current, r = t.contextTypes, s = (r = r != null) ? Zr(e, o) : Ln), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Aa, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function ap(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Aa.enqueueReplaceState(t, t.state, null);
}
function Nc(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Ku(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? o.context = vt(s) : (s = qe(t) ? lr : Be.current, o.context = Zr(e, s)), o.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Dc(e, t, s, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Aa.enqueueReplaceState(o, o.state, null), ta(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function no(e, t) {
  try {
    var n = "", r = t;
    do
      n += Jw(r), r = r.return;
    while (r);
    var o = n;
  } catch (s) {
    o = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Cl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Mc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Tb = typeof WeakMap == "function" ? WeakMap : Map;
function iy(e, t, n) {
  n = qt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ia || (ia = !0, zc = r), Mc(e, t);
  }, n;
}
function ay(e, t, n) {
  n = qt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Mc(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    Mc(e, t), typeof r != "function" && (Nn === null ? Nn = /* @__PURE__ */ new Set([this]) : Nn.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function lp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Tb();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = zb.bind(null, e, t, n), t.then(e, e));
}
function cp(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function up(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = qt(-1, 1), t.tag = 2, Dn(n, t, 1))), n.lanes |= 1), e);
}
var Pb = cn.ReactCurrentOwner, Xe = !1;
function We(e, t, n, r) {
  t.child = e === null ? Og(t, null, n, r) : eo(t, e.child, n, r);
}
function dp(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return Kr(t, o), r = qu(e, t, n, r, s, o), n = Zu(), e !== null && !Xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, on(e, t, o)) : (ue && n && Vu(t), t.flags |= 1, We(e, t, r, o), t.child);
}
function fp(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !ld(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, ly(e, t, s, r, o)) : (e = Ai(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & o)) {
    var i = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ls, n(i, r) && e.ref === t.ref) return on(e, t, o);
  }
  return t.flags |= 1, e = An(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function ly(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (ls(s, r) && e.ref === t.ref) if (Xe = !1, t.pendingProps = r = s, (e.lanes & o) !== 0) e.flags & 131072 && (Xe = !0);
    else return t.lanes = e.lanes, on(e, t, o);
  }
  return Ac(e, t, n, r, o);
}
function cy(e, t, n) {
  var r = t.pendingProps, o = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, se(Or, et), et |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, se(Or, et), et |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, se(Or, et), et |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, se(Or, et), et |= r;
  return We(e, t, o, n), t.child;
}
function uy(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ac(e, t, n, r, o) {
  var s = qe(n) ? lr : Be.current;
  return s = Zr(t, s), Kr(t, o), n = qu(e, t, n, r, s, o), r = Zu(), e !== null && !Xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, on(e, t, o)) : (ue && r && Vu(t), t.flags |= 1, We(e, t, n, o), t.child);
}
function pp(e, t, n, r, o) {
  if (qe(n)) {
    var s = !0;
    Qi(t);
  } else s = !1;
  if (Kr(t, o), t.stateNode === null) Di(e, t), sy(t, n, r), Nc(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, a = t.memoizedProps;
    i.props = a;
    var l = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = vt(c) : (c = qe(n) ? lr : Be.current, c = Zr(t, c));
    var u = n.getDerivedStateFromProps, f = typeof u == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    f || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || l !== c) && ap(t, i, r, c), xn = !1;
    var d = t.memoizedState;
    i.state = d, ta(t, r, i, o), l = t.memoizedState, a !== r || d !== l || Qe.current || xn ? (typeof u == "function" && (Dc(t, n, u, r), l = t.memoizedState), (a = xn || ip(t, n, a, r, d, l, c)) ? (f || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), i.props = r, i.state = l, i.context = c, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Fg(e, t), a = t.memoizedProps, c = t.type === t.elementType ? a : kt(t.type, a), i.props = c, f = t.pendingProps, d = i.context, l = n.contextType, typeof l == "object" && l !== null ? l = vt(l) : (l = qe(n) ? lr : Be.current, l = Zr(t, l));
    var g = n.getDerivedStateFromProps;
    (u = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== f || d !== l) && ap(t, i, r, l), xn = !1, d = t.memoizedState, i.state = d, ta(t, r, i, o);
    var w = t.memoizedState;
    a !== f || d !== w || Qe.current || xn ? (typeof g == "function" && (Dc(t, n, g, r), w = t.memoizedState), (c = xn || ip(t, n, c, r, d, w, l) || !1) ? (u || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, l), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, l)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = l, r = c) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Rc(e, t, n, r, s, o);
}
function Rc(e, t, n, r, o, s) {
  uy(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Zf(t, n, !1), on(e, t, s);
  r = t.stateNode, Pb.current = t;
  var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = eo(t, e.child, null, s), t.child = eo(t, null, a, s)) : We(e, t, a, s), t.memoizedState = r.state, o && Zf(t, n, !0), t.child;
}
function dy(e) {
  var t = e.stateNode;
  t.pendingContext ? qf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && qf(e, t.context, !1), Gu(e, t.containerInfo);
}
function hp(e, t, n, r, o) {
  return Jr(), Bu(o), t.flags |= 256, We(e, t, n, r), t.child;
}
var jc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Lc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function fy(e, t, n) {
  var r = t.pendingProps, o = de.current, s = !1, i = (t.flags & 128) !== 0, a;
  if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), se(de, o & 1), e === null)
    return Tc(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, i = { mode: "hidden", children: i }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = i) : s = La(i, r, 0, null), e = ir(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Lc(n), t.memoizedState = jc, e) : td(t, i));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return Db(e, t, i, r, a, o, n);
  if (s) {
    s = r.fallback, i = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = An(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? s = An(a, s) : (s = ir(s, i, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, i = e.child.memoizedState, i = i === null ? Lc(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, s.memoizedState = i, s.childLanes = e.childLanes & ~n, t.memoizedState = jc, r;
  }
  return s = e.child, e = s.sibling, r = An(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function td(e, t) {
  return t = La({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ti(e, t, n, r) {
  return r !== null && Bu(r), eo(t, e.child, null, n), e = td(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Db(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Cl(Error(A(422))), ti(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, o = t.mode, r = La({ mode: "visible", children: r.children }, o, 0, null), s = ir(s, o, i, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && eo(t, e.child, null, i), t.child.memoizedState = Lc(i), t.memoizedState = jc, s);
  if (!(t.mode & 1)) return ti(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
    return r = a, s = Error(A(419)), r = Cl(s, r, void 0), ti(e, t, i, r);
  }
  if (a = (i & e.childLanes) !== 0, Xe || a) {
    if (r = Ne, r !== null) {
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
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== s.retryLane && (s.retryLane = o, rn(e, o), Pt(r, e, o, -1));
    }
    return ad(), r = Cl(Error(A(421))), ti(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Bb.bind(null, e), o._reactRetry = t, null) : (e = s.treeContext, nt = Pn(o.nextSibling), rt = t, ue = !0, Et = null, e !== null && (ht[mt++] = Yt, ht[mt++] = Xt, ht[mt++] = cr, Yt = e.id, Xt = e.overflow, cr = t), t = td(t, r.children), t.flags |= 4096, t);
}
function mp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Pc(e.return, t, n);
}
function El(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = o);
}
function py(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, s = r.tail;
  if (We(e, t, r.children, n), r = de.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && mp(e, n, t);
      else if (e.tag === 19) mp(e, n, t);
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
  if (se(de, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && na(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), El(t, !1, o, n, s);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && na(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      El(t, !0, n, null, s);
      break;
    case "together":
      El(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Di(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function on(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), dr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (e = t.child, n = An(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = An(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Nb(e, t, n) {
  switch (t.tag) {
    case 3:
      dy(t), Jr();
      break;
    case 5:
      Vg(t);
      break;
    case 1:
      qe(t.type) && Qi(t);
      break;
    case 4:
      Gu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      se(Ji, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (se(de, de.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? fy(e, t, n) : (se(de, de.current & 1), e = on(e, t, n), e !== null ? e.sibling : null);
      se(de, de.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return py(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), se(de, de.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, cy(e, t, n);
  }
  return on(e, t, n);
}
var hy, _c, my, gy;
hy = function(e, t) {
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
_c = function() {
};
my = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, rr(Vt.current);
    var s = null;
    switch (n) {
      case "input":
        o = rc(e, o), r = rc(e, r), s = [];
        break;
      case "select":
        o = he({}, o, { value: void 0 }), r = he({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        o = ic(e, o), r = ic(e, r), s = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Yi);
    }
    lc(n, r);
    var i;
    n = null;
    for (c in o) if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null) if (c === "style") {
      var a = o[c];
      for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (ts.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (a = o != null ? o[c] : void 0, r.hasOwnProperty(c) && l !== a && (l != null || a != null)) if (c === "style") if (a) {
        for (i in a) !a.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in l) l.hasOwnProperty(i) && a[i] !== l[i] && (n || (n = {}), n[i] = l[i]);
      } else n || (s || (s = []), s.push(
        c,
        n
      )), n = l;
      else c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (ts.hasOwnProperty(c) ? (l != null && c === "onScroll" && ae("scroll", e), s || a === l || (s = [])) : (s = s || []).push(c, l));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
gy = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function No(e, t) {
  if (!ue) switch (e.tailMode) {
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
function Ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Mb(e, t, n) {
  var r = t.pendingProps;
  switch (zu(t), t.tag) {
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
      return Ie(t), null;
    case 1:
      return qe(t.type) && Xi(), Ie(t), null;
    case 3:
      return r = t.stateNode, to(), le(Qe), le(Be), Xu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Js(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Et !== null && (Uc(Et), Et = null))), _c(e, t), Ie(t), null;
    case 5:
      Yu(t);
      var o = rr(ps.current);
      if (n = t.type, e !== null && t.stateNode != null) my(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return Ie(t), null;
        }
        if (e = rr(Vt.current), Js(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[_t] = t, r[ds] = s, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ae("cancel", r), ae("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ae("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Io.length; o++) ae(Io[o], r);
              break;
            case "source":
              ae("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ae(
                "error",
                r
              ), ae("load", r);
              break;
            case "details":
              ae("toggle", r);
              break;
            case "input":
              Cf(r, s), ae("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, ae("invalid", r);
              break;
            case "textarea":
              Tf(r, s), ae("invalid", r);
          }
          lc(n, s), o = null;
          for (var i in s) if (s.hasOwnProperty(i)) {
            var a = s[i];
            i === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && Zs(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && Zs(
              r.textContent,
              a,
              e
            ), o = ["children", "" + a]) : ts.hasOwnProperty(i) && a != null && i === "onScroll" && ae("scroll", r);
          }
          switch (n) {
            case "input":
              Ws(r), Ef(r, s, !0);
              break;
            case "textarea":
              Ws(r), Pf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Yi);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Wm(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[_t] = t, e[ds] = r, hy(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = cc(n, r), n) {
              case "dialog":
                ae("cancel", e), ae("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ae("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Io.length; o++) ae(Io[o], e);
                o = r;
                break;
              case "source":
                ae("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ae(
                  "error",
                  e
                ), ae("load", e), o = r;
                break;
              case "details":
                ae("toggle", e), o = r;
                break;
              case "input":
                Cf(e, r), o = rc(e, r), ae("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = he({}, r, { value: void 0 }), ae("invalid", e);
                break;
              case "textarea":
                Tf(e, r), o = ic(e, r), ae("invalid", e);
                break;
              default:
                o = r;
            }
            lc(n, o), a = o;
            for (s in a) if (a.hasOwnProperty(s)) {
              var l = a[s];
              s === "style" ? Gm(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Hm(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && ns(e, l) : typeof l == "number" && ns(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (ts.hasOwnProperty(s) ? l != null && s === "onScroll" && ae("scroll", e) : l != null && Eu(e, s, l, i));
            }
            switch (n) {
              case "input":
                Ws(e), Ef(e, r, !1);
                break;
              case "textarea":
                Ws(e), Pf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + jn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? $r(e, !!r.multiple, s, !1) : r.defaultValue != null && $r(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Yi);
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
      return Ie(t), null;
    case 6:
      if (e && t.stateNode != null) gy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (n = rr(ps.current), rr(Vt.current), Js(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[_t] = t, (s = r.nodeValue !== n) && (e = rt, e !== null)) switch (e.tag) {
            case 3:
              Zs(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Zs(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[_t] = t, t.stateNode = r;
      }
      return Ie(t), null;
    case 13:
      if (le(de), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ue && nt !== null && t.mode & 1 && !(t.flags & 128)) Lg(), Jr(), t.flags |= 98560, s = !1;
        else if (s = Js(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(A(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(A(317));
            s[_t] = t;
          } else Jr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ie(t), s = !1;
        } else Et !== null && (Uc(Et), Et = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || de.current & 1 ? Pe === 0 && (Pe = 3) : ad())), t.updateQueue !== null && (t.flags |= 4), Ie(t), null);
    case 4:
      return to(), _c(e, t), e === null && cs(t.stateNode.containerInfo), Ie(t), null;
    case 10:
      return Wu(t.type._context), Ie(t), null;
    case 17:
      return qe(t.type) && Xi(), Ie(t), null;
    case 19:
      if (le(de), s = t.memoizedState, s === null) return Ie(t), null;
      if (r = (t.flags & 128) !== 0, i = s.rendering, i === null) if (r) No(s, !1);
      else {
        if (Pe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = na(e), i !== null) {
            for (t.flags |= 128, No(s, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, i = s.alternate, i === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = i.childLanes, s.lanes = i.lanes, s.child = i.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = i.memoizedProps, s.memoizedState = i.memoizedState, s.updateQueue = i.updateQueue, s.type = i.type, e = i.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return se(de, de.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && ke() > ro && (t.flags |= 128, r = !0, No(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = na(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), No(s, !0), s.tail === null && s.tailMode === "hidden" && !i.alternate && !ue) return Ie(t), null;
        } else 2 * ke() - s.renderingStartTime > ro && n !== 1073741824 && (t.flags |= 128, r = !0, No(s, !1), t.lanes = 4194304);
        s.isBackwards ? (i.sibling = t.child, t.child = i) : (n = s.last, n !== null ? n.sibling = i : t.child = i, s.last = i);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = ke(), t.sibling = null, n = de.current, se(de, r ? n & 1 | 2 : n & 1), t) : (Ie(t), null);
    case 22:
    case 23:
      return id(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? et & 1073741824 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ie(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function Ab(e, t) {
  switch (zu(t), t.tag) {
    case 1:
      return qe(t.type) && Xi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return to(), le(Qe), le(Be), Xu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Yu(t), null;
    case 13:
      if (le(de), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(A(340));
        Jr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return le(de), null;
    case 4:
      return to(), null;
    case 10:
      return Wu(t.type._context), null;
    case 22:
    case 23:
      return id(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ni = !1, Ve = !1, Rb = typeof WeakSet == "function" ? WeakSet : Set, z = null;
function _r(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ve(e, t, r);
  }
  else n.current = null;
}
function Oc(e, t, n) {
  try {
    n();
  } catch (r) {
    ve(e, t, r);
  }
}
var gp = !1;
function jb(e, t) {
  if (xc = Hi, e = bg(), Fu(e)) {
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
        var i = 0, a = -1, l = -1, c = 0, u = 0, f = e, d = null;
        t: for (; ; ) {
          for (var g; f !== n || o !== 0 && f.nodeType !== 3 || (a = i + o), f !== s || r !== 0 && f.nodeType !== 3 || (l = i + r), f.nodeType === 3 && (i += f.nodeValue.length), (g = f.firstChild) !== null; )
            d = f, f = g;
          for (; ; ) {
            if (f === e) break t;
            if (d === n && ++c === o && (a = i), d === s && ++u === r && (l = i), (g = f.nextSibling) !== null) break;
            f = d, d = f.parentNode;
          }
          f = g;
        }
        n = a === -1 || l === -1 ? null : { start: a, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (wc = { focusedElem: e, selectionRange: n }, Hi = !1, z = t; z !== null; ) if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
  else for (; z !== null; ) {
    t = z;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var v = w.memoizedProps, b = w.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : kt(t.type, v), b);
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
    } catch (S) {
      ve(t, t.return, S);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, z = e;
      break;
    }
    z = t.return;
  }
  return w = gp, gp = !1, w;
}
function Yo(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        o.destroy = void 0, s !== void 0 && Oc(t, n, s);
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
function Ic(e) {
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
function yy(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, yy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[_t], delete t[ds], delete t[kc], delete t[mb], delete t[gb])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function vy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function yp(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || vy(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Fc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Yi));
  else if (r !== 4 && (e = e.child, e !== null)) for (Fc(e, t, n), e = e.sibling; e !== null; ) Fc(e, t, n), e = e.sibling;
}
function Vc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Vc(e, t, n), e = e.sibling; e !== null; ) Vc(e, t, n), e = e.sibling;
}
var Re = null, Ct = !1;
function fn(e, t, n) {
  for (n = n.child; n !== null; ) xy(e, t, n), n = n.sibling;
}
function xy(e, t, n) {
  if (Ft && typeof Ft.onCommitFiberUnmount == "function") try {
    Ft.onCommitFiberUnmount(Ca, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ve || _r(n, t);
    case 6:
      var r = Re, o = Ct;
      Re = null, fn(e, t, n), Re = r, Ct = o, Re !== null && (Ct ? (e = Re, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Re.removeChild(n.stateNode));
      break;
    case 18:
      Re !== null && (Ct ? (e = Re, n = n.stateNode, e.nodeType === 8 ? vl(e.parentNode, n) : e.nodeType === 1 && vl(e, n), is(e)) : vl(Re, n.stateNode));
      break;
    case 4:
      r = Re, o = Ct, Re = n.stateNode.containerInfo, Ct = !0, fn(e, t, n), Re = r, Ct = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ve && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var s = o, i = s.destroy;
          s = s.tag, i !== void 0 && (s & 2 || s & 4) && Oc(n, t, i), o = o.next;
        } while (o !== r);
      }
      fn(e, t, n);
      break;
    case 1:
      if (!Ve && (_r(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        ve(n, t, a);
      }
      fn(e, t, n);
      break;
    case 21:
      fn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ve = (r = Ve) || n.memoizedState !== null, fn(e, t, n), Ve = r) : fn(e, t, n);
      break;
    default:
      fn(e, t, n);
  }
}
function vp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Rb()), t.forEach(function(r) {
      var o = $b.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function wt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var s = e, i = t, a = i;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            Re = a.stateNode, Ct = !1;
            break e;
          case 3:
            Re = a.stateNode.containerInfo, Ct = !0;
            break e;
          case 4:
            Re = a.stateNode.containerInfo, Ct = !0;
            break e;
        }
        a = a.return;
      }
      if (Re === null) throw Error(A(160));
      xy(s, i, o), Re = null, Ct = !1;
      var l = o.alternate;
      l !== null && (l.return = null), o.return = null;
    } catch (c) {
      ve(o, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) wy(t, e), t = t.sibling;
}
function wy(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (wt(t, e), jt(e), r & 4) {
        try {
          Yo(3, e, e.return), Ra(3, e);
        } catch (v) {
          ve(e, e.return, v);
        }
        try {
          Yo(5, e, e.return);
        } catch (v) {
          ve(e, e.return, v);
        }
      }
      break;
    case 1:
      wt(t, e), jt(e), r & 512 && n !== null && _r(n, n.return);
      break;
    case 5:
      if (wt(t, e), jt(e), r & 512 && n !== null && _r(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          ns(o, "");
        } catch (v) {
          ve(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var s = e.memoizedProps, i = n !== null ? n.memoizedProps : s, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && s.type === "radio" && s.name != null && $m(o, s), cc(a, i);
          var c = cc(a, s);
          for (i = 0; i < l.length; i += 2) {
            var u = l[i], f = l[i + 1];
            u === "style" ? Gm(o, f) : u === "dangerouslySetInnerHTML" ? Hm(o, f) : u === "children" ? ns(o, f) : Eu(o, u, f, c);
          }
          switch (a) {
            case "input":
              oc(o, s);
              break;
            case "textarea":
              Um(o, s);
              break;
            case "select":
              var d = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!s.multiple;
              var g = s.value;
              g != null ? $r(o, !!s.multiple, g, !1) : d !== !!s.multiple && (s.defaultValue != null ? $r(
                o,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : $r(o, !!s.multiple, s.multiple ? [] : "", !1));
          }
          o[ds] = s;
        } catch (v) {
          ve(e, e.return, v);
        }
      }
      break;
    case 6:
      if (wt(t, e), jt(e), r & 4) {
        if (e.stateNode === null) throw Error(A(162));
        o = e.stateNode, s = e.memoizedProps;
        try {
          o.nodeValue = s;
        } catch (v) {
          ve(e, e.return, v);
        }
      }
      break;
    case 3:
      if (wt(t, e), jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        is(t.containerInfo);
      } catch (v) {
        ve(e, e.return, v);
      }
      break;
    case 4:
      wt(t, e), jt(e);
      break;
    case 13:
      wt(t, e), jt(e), o = e.child, o.flags & 8192 && (s = o.memoizedState !== null, o.stateNode.isHidden = s, !s || o.alternate !== null && o.alternate.memoizedState !== null || (od = ke())), r & 4 && vp(e);
      break;
    case 22:
      if (u = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ve = (c = Ve) || u, wt(t, e), Ve = c) : wt(t, e), jt(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !u && e.mode & 1) for (z = e, u = e.child; u !== null; ) {
          for (f = z = u; z !== null; ) {
            switch (d = z, g = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Yo(4, d, d.return);
                break;
              case 1:
                _r(d, d.return);
                var w = d.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = d, n = d.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (v) {
                    ve(r, n, v);
                  }
                }
                break;
              case 5:
                _r(d, d.return);
                break;
              case 22:
                if (d.memoizedState !== null) {
                  wp(f);
                  continue;
                }
            }
            g !== null ? (g.return = d, z = g) : wp(f);
          }
          u = u.sibling;
        }
        e: for (u = null, f = e; ; ) {
          if (f.tag === 5) {
            if (u === null) {
              u = f;
              try {
                o = f.stateNode, c ? (s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, i = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Km("display", i));
              } catch (v) {
                ve(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (u === null) try {
              f.stateNode.nodeValue = c ? "" : f.memoizedProps;
            } catch (v) {
              ve(e, e.return, v);
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            u === f && (u = null), f = f.return;
          }
          u === f && (u = null), f.sibling.return = f.return, f = f.sibling;
        }
      }
      break;
    case 19:
      wt(t, e), jt(e), r & 4 && vp(e);
      break;
    case 21:
      break;
    default:
      wt(
        t,
        e
      ), jt(e);
  }
}
function jt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (vy(n)) {
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
          r.flags & 32 && (ns(o, ""), r.flags &= -33);
          var s = yp(e);
          Vc(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, a = yp(e);
          Fc(e, a, i);
          break;
        default:
          throw Error(A(161));
      }
    } catch (l) {
      ve(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Lb(e, t, n) {
  z = e, by(e);
}
function by(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var o = z, s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || ni;
      if (!i) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || Ve;
        a = ni;
        var c = Ve;
        if (ni = i, (Ve = l) && !c) for (z = o; z !== null; ) i = z, l = i.child, i.tag === 22 && i.memoizedState !== null ? bp(o) : l !== null ? (l.return = i, z = l) : bp(o);
        for (; s !== null; ) z = s, by(s), s = s.sibling;
        z = o, ni = a, Ve = c;
      }
      xp(e);
    } else o.subtreeFlags & 8772 && s !== null ? (s.return = o, z = s) : xp(e);
  }
}
function xp(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ve || Ra(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ve) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : kt(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && rp(t, s, r);
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
              rp(t, i, n);
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
                  var f = u.dehydrated;
                  f !== null && is(f);
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
        Ve || t.flags & 512 && Ic(t);
      } catch (d) {
        ve(t, t.return, d);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, z = n;
      break;
    }
    z = t.return;
  }
}
function wp(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, z = n;
      break;
    }
    z = t.return;
  }
}
function bp(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ra(4, t);
          } catch (l) {
            ve(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ve(t, o, l);
            }
          }
          var s = t.return;
          try {
            Ic(t);
          } catch (l) {
            ve(t, s, l);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ic(t);
          } catch (l) {
            ve(t, i, l);
          }
      }
    } catch (l) {
      ve(t, t.return, l);
    }
    if (t === e) {
      z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, z = a;
      break;
    }
    z = t.return;
  }
}
var _b = Math.ceil, sa = cn.ReactCurrentDispatcher, nd = cn.ReactCurrentOwner, yt = cn.ReactCurrentBatchConfig, Q = 0, Ne = null, Ce = null, Le = 0, et = 0, Or = $n(0), Pe = 0, ys = null, dr = 0, ja = 0, rd = 0, Xo = null, Ye = null, od = 0, ro = 1 / 0, Kt = null, ia = !1, zc = null, Nn = null, ri = !1, kn = null, aa = 0, Qo = 0, Bc = null, Ni = -1, Mi = 0;
function He() {
  return Q & 6 ? ke() : Ni !== -1 ? Ni : Ni = ke();
}
function Mn(e) {
  return e.mode & 1 ? Q & 2 && Le !== 0 ? Le & -Le : vb.transition !== null ? (Mi === 0 && (Mi = sg()), Mi) : (e = ne, e !== 0 || (e = window.event, e = e === void 0 ? 16 : fg(e.type)), e) : 1;
}
function Pt(e, t, n, r) {
  if (50 < Qo) throw Qo = 0, Bc = null, Error(A(185));
  Ns(e, n, r), (!(Q & 2) || e !== Ne) && (e === Ne && (!(Q & 2) && (ja |= n), Pe === 4 && bn(e, Le)), Ze(e, r), n === 1 && Q === 0 && !(t.mode & 1) && (ro = ke() + 500, Na && Un()));
}
function Ze(e, t) {
  var n = e.callbackNode;
  v1(e, t);
  var r = Wi(e, e === Ne ? Le : 0);
  if (r === 0) n !== null && Mf(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Mf(n), t === 1) e.tag === 0 ? yb(Sp.bind(null, e)) : Ag(Sp.bind(null, e)), pb(function() {
      !(Q & 6) && Un();
    }), n = null;
    else {
      switch (ig(r)) {
        case 1:
          n = Mu;
          break;
        case 4:
          n = rg;
          break;
        case 16:
          n = Ui;
          break;
        case 536870912:
          n = og;
          break;
        default:
          n = Ui;
      }
      n = Ny(n, Sy.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Sy(e, t) {
  if (Ni = -1, Mi = 0, Q & 6) throw Error(A(327));
  var n = e.callbackNode;
  if (Gr() && e.callbackNode !== n) return null;
  var r = Wi(e, e === Ne ? Le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = la(e, r);
  else {
    t = r;
    var o = Q;
    Q |= 2;
    var s = Cy();
    (Ne !== e || Le !== t) && (Kt = null, ro = ke() + 500, sr(e, t));
    do
      try {
        Fb();
        break;
      } catch (a) {
        ky(e, a);
      }
    while (!0);
    Uu(), sa.current = s, Q = o, Ce !== null ? t = 0 : (Ne = null, Le = 0, t = Pe);
  }
  if (t !== 0) {
    if (t === 2 && (o = hc(e), o !== 0 && (r = o, t = $c(e, o))), t === 1) throw n = ys, sr(e, 0), bn(e, r), Ze(e, ke()), n;
    if (t === 6) bn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Ob(o) && (t = la(e, r), t === 2 && (s = hc(e), s !== 0 && (r = s, t = $c(e, s))), t === 1)) throw n = ys, sr(e, 0), bn(e, r), Ze(e, ke()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          Zn(e, Ye, Kt);
          break;
        case 3:
          if (bn(e, r), (r & 130023424) === r && (t = od + 500 - ke(), 10 < t)) {
            if (Wi(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              He(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Sc(Zn.bind(null, e, Ye, Kt), t);
            break;
          }
          Zn(e, Ye, Kt);
          break;
        case 4:
          if (bn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Tt(r);
            s = 1 << i, i = t[i], i > o && (o = i), r &= ~s;
          }
          if (r = o, r = ke() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * _b(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Sc(Zn.bind(null, e, Ye, Kt), r);
            break;
          }
          Zn(e, Ye, Kt);
          break;
        case 5:
          Zn(e, Ye, Kt);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return Ze(e, ke()), e.callbackNode === n ? Sy.bind(null, e) : null;
}
function $c(e, t) {
  var n = Xo;
  return e.current.memoizedState.isDehydrated && (sr(e, t).flags |= 256), e = la(e, t), e !== 2 && (t = Ye, Ye = n, t !== null && Uc(t)), e;
}
function Uc(e) {
  Ye === null ? Ye = e : Ye.push.apply(Ye, e);
}
function Ob(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], s = o.getSnapshot;
        o = o.value;
        try {
          if (!Dt(s(), o)) return !1;
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
function bn(e, t) {
  for (t &= ~rd, t &= ~ja, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Tt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Sp(e) {
  if (Q & 6) throw Error(A(327));
  Gr();
  var t = Wi(e, 0);
  if (!(t & 1)) return Ze(e, ke()), null;
  var n = la(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = hc(e);
    r !== 0 && (t = r, n = $c(e, r));
  }
  if (n === 1) throw n = ys, sr(e, 0), bn(e, t), Ze(e, ke()), n;
  if (n === 6) throw Error(A(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Zn(e, Ye, Kt), Ze(e, ke()), null;
}
function sd(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    Q = n, Q === 0 && (ro = ke() + 500, Na && Un());
  }
}
function fr(e) {
  kn !== null && kn.tag === 0 && !(Q & 6) && Gr();
  var t = Q;
  Q |= 1;
  var n = yt.transition, r = ne;
  try {
    if (yt.transition = null, ne = 1, e) return e();
  } finally {
    ne = r, yt.transition = n, Q = t, !(Q & 6) && Un();
  }
}
function id() {
  et = Or.current, le(Or);
}
function sr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, fb(n)), Ce !== null) for (n = Ce.return; n !== null; ) {
    var r = n;
    switch (zu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Xi();
        break;
      case 3:
        to(), le(Qe), le(Be), Xu();
        break;
      case 5:
        Yu(r);
        break;
      case 4:
        to();
        break;
      case 13:
        le(de);
        break;
      case 19:
        le(de);
        break;
      case 10:
        Wu(r.type._context);
        break;
      case 22:
      case 23:
        id();
    }
    n = n.return;
  }
  if (Ne = e, Ce = e = An(e.current, null), Le = et = t, Pe = 0, ys = null, rd = ja = dr = 0, Ye = Xo = null, nr !== null) {
    for (t = 0; t < nr.length; t++) if (n = nr[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, s = n.pending;
      if (s !== null) {
        var i = s.next;
        s.next = o, r.next = i;
      }
      n.pending = r;
    }
    nr = null;
  }
  return e;
}
function ky(e, t) {
  do {
    var n = Ce;
    try {
      if (Uu(), Ti.current = oa, ra) {
        for (var r = pe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        ra = !1;
      }
      if (ur = 0, De = Te = pe = null, Go = !1, hs = 0, nd.current = null, n === null || n.return === null) {
        Pe = 1, ys = t, Ce = null;
        break;
      }
      e: {
        var s = e, i = n.return, a = n, l = t;
        if (t = Le, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var c = l, u = a, f = u.tag;
          if (!(u.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = u.alternate;
            d ? (u.updateQueue = d.updateQueue, u.memoizedState = d.memoizedState, u.lanes = d.lanes) : (u.updateQueue = null, u.memoizedState = null);
          }
          var g = cp(i);
          if (g !== null) {
            g.flags &= -257, up(g, i, a, s, t), g.mode & 1 && lp(s, c, t), t = g, l = c;
            var w = t.updateQueue;
            if (w === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(l), t.updateQueue = v;
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              lp(s, c, t), ad();
              break e;
            }
            l = Error(A(426));
          }
        } else if (ue && a.mode & 1) {
          var b = cp(i);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256), up(b, i, a, s, t), Bu(no(l, a));
            break e;
          }
        }
        s = l = no(l, a), Pe !== 4 && (Pe = 2), Xo === null ? Xo = [s] : Xo.push(s), s = i;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var m = iy(s, l, t);
              np(s, m);
              break e;
            case 1:
              a = l;
              var h = s.type, y = s.stateNode;
              if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Nn === null || !Nn.has(y)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var S = ay(s, a, t);
                np(s, S);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Ty(n);
    } catch (k) {
      t = k, Ce === n && n !== null && (Ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Cy() {
  var e = sa.current;
  return sa.current = oa, e === null ? oa : e;
}
function ad() {
  (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4), Ne === null || !(dr & 268435455) && !(ja & 268435455) || bn(Ne, Le);
}
function la(e, t) {
  var n = Q;
  Q |= 2;
  var r = Cy();
  (Ne !== e || Le !== t) && (Kt = null, sr(e, t));
  do
    try {
      Ib();
      break;
    } catch (o) {
      ky(e, o);
    }
  while (!0);
  if (Uu(), Q = n, sa.current = r, Ce !== null) throw Error(A(261));
  return Ne = null, Le = 0, Pe;
}
function Ib() {
  for (; Ce !== null; ) Ey(Ce);
}
function Fb() {
  for (; Ce !== null && !c1(); ) Ey(Ce);
}
function Ey(e) {
  var t = Dy(e.alternate, e, et);
  e.memoizedProps = e.pendingProps, t === null ? Ty(e) : Ce = t, nd.current = null;
}
function Ty(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Ab(n, t), n !== null) {
        n.flags &= 32767, Ce = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Pe = 6, Ce = null;
        return;
      }
    } else if (n = Mb(n, t, et), n !== null) {
      Ce = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ce = t;
      return;
    }
    Ce = t = e;
  } while (t !== null);
  Pe === 0 && (Pe = 5);
}
function Zn(e, t, n) {
  var r = ne, o = yt.transition;
  try {
    yt.transition = null, ne = 1, Vb(e, t, n, r);
  } finally {
    yt.transition = o, ne = r;
  }
  return null;
}
function Vb(e, t, n, r) {
  do
    Gr();
  while (kn !== null);
  if (Q & 6) throw Error(A(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(A(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (x1(e, s), e === Ne && (Ce = Ne = null, Le = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ri || (ri = !0, Ny(Ui, function() {
    return Gr(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = yt.transition, yt.transition = null;
    var i = ne;
    ne = 1;
    var a = Q;
    Q |= 4, nd.current = null, jb(e, n), wy(n, e), sb(wc), Hi = !!xc, wc = xc = null, e.current = n, Lb(n), u1(), Q = a, ne = i, yt.transition = s;
  } else e.current = n;
  if (ri && (ri = !1, kn = e, aa = o), s = e.pendingLanes, s === 0 && (Nn = null), p1(n.stateNode), Ze(e, ke()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ia) throw ia = !1, e = zc, zc = null, e;
  return aa & 1 && e.tag !== 0 && Gr(), s = e.pendingLanes, s & 1 ? e === Bc ? Qo++ : (Qo = 0, Bc = e) : Qo = 0, Un(), null;
}
function Gr() {
  if (kn !== null) {
    var e = ig(aa), t = yt.transition, n = ne;
    try {
      if (yt.transition = null, ne = 16 > e ? 16 : e, kn === null) var r = !1;
      else {
        if (e = kn, kn = null, aa = 0, Q & 6) throw Error(A(331));
        var o = Q;
        for (Q |= 4, z = e.current; z !== null; ) {
          var s = z, i = s.child;
          if (z.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (z = c; z !== null; ) {
                  var u = z;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yo(8, u, s);
                  }
                  var f = u.child;
                  if (f !== null) f.return = u, z = f;
                  else for (; z !== null; ) {
                    u = z;
                    var d = u.sibling, g = u.return;
                    if (yy(u), u === c) {
                      z = null;
                      break;
                    }
                    if (d !== null) {
                      d.return = g, z = d;
                      break;
                    }
                    z = g;
                  }
                }
              }
              var w = s.alternate;
              if (w !== null) {
                var v = w.child;
                if (v !== null) {
                  w.child = null;
                  do {
                    var b = v.sibling;
                    v.sibling = null, v = b;
                  } while (v !== null);
                }
              }
              z = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) i.return = s, z = i;
          else e: for (; z !== null; ) {
            if (s = z, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                Yo(9, s, s.return);
            }
            var m = s.sibling;
            if (m !== null) {
              m.return = s.return, z = m;
              break e;
            }
            z = s.return;
          }
        }
        var h = e.current;
        for (z = h; z !== null; ) {
          i = z;
          var y = i.child;
          if (i.subtreeFlags & 2064 && y !== null) y.return = i, z = y;
          else e: for (i = h; z !== null; ) {
            if (a = z, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  Ra(9, a);
              }
            } catch (k) {
              ve(a, a.return, k);
            }
            if (a === i) {
              z = null;
              break e;
            }
            var S = a.sibling;
            if (S !== null) {
              S.return = a.return, z = S;
              break e;
            }
            z = a.return;
          }
        }
        if (Q = o, Un(), Ft && typeof Ft.onPostCommitFiberRoot == "function") try {
          Ft.onPostCommitFiberRoot(Ca, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ne = n, yt.transition = t;
    }
  }
  return !1;
}
function kp(e, t, n) {
  t = no(n, t), t = iy(e, t, 1), e = Dn(e, t, 1), t = He(), e !== null && (Ns(e, 1, t), Ze(e, t));
}
function ve(e, t, n) {
  if (e.tag === 3) kp(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      kp(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Nn === null || !Nn.has(r))) {
        e = no(n, e), e = ay(t, e, 1), t = Dn(t, e, 1), e = He(), t !== null && (Ns(t, 1, e), Ze(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function zb(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = He(), e.pingedLanes |= e.suspendedLanes & n, Ne === e && (Le & n) === n && (Pe === 4 || Pe === 3 && (Le & 130023424) === Le && 500 > ke() - od ? sr(e, 0) : rd |= n), Ze(e, t);
}
function Py(e, t) {
  t === 0 && (e.mode & 1 ? (t = Gs, Gs <<= 1, !(Gs & 130023424) && (Gs = 4194304)) : t = 1);
  var n = He();
  e = rn(e, t), e !== null && (Ns(e, t, n), Ze(e, n));
}
function Bb(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Py(e, n);
}
function $b(e, t) {
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
  r !== null && r.delete(t), Py(e, n);
}
var Dy;
Dy = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Qe.current) Xe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Xe = !1, Nb(e, t, n);
    Xe = !!(e.flags & 131072);
  }
  else Xe = !1, ue && t.flags & 1048576 && Rg(t, Zi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Di(e, t), e = t.pendingProps;
      var o = Zr(t, Be.current);
      Kr(t, n), o = qu(null, t, r, e, o, n);
      var s = Zu();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, qe(r) ? (s = !0, Qi(t)) : s = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Ku(t), o.updater = Aa, t.stateNode = o, o._reactInternals = t, Nc(t, r, e, n), t = Rc(null, t, r, !0, s, n)) : (t.tag = 0, ue && s && Vu(t), We(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Di(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Wb(r), e = kt(r, e), o) {
          case 0:
            t = Ac(null, t, r, e, n);
            break e;
          case 1:
            t = pp(null, t, r, e, n);
            break e;
          case 11:
            t = dp(null, t, r, e, n);
            break e;
          case 14:
            t = fp(null, t, r, kt(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : kt(r, o), Ac(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : kt(r, o), pp(e, t, r, o, n);
    case 3:
      e: {
        if (dy(t), e === null) throw Error(A(387));
        r = t.pendingProps, s = t.memoizedState, o = s.element, Fg(e, t), ta(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          o = no(Error(A(423)), t), t = hp(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = no(Error(A(424)), t), t = hp(e, t, r, n, o);
          break e;
        } else for (nt = Pn(t.stateNode.containerInfo.firstChild), rt = t, ue = !0, Et = null, n = Og(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Jr(), r === o) {
            t = on(e, t, n);
            break e;
          }
          We(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Vg(t), e === null && Tc(t), r = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, i = o.children, bc(r, o) ? i = null : s !== null && bc(r, s) && (t.flags |= 32), uy(e, t), We(e, t, i, n), t.child;
    case 6:
      return e === null && Tc(t), null;
    case 13:
      return fy(e, t, n);
    case 4:
      return Gu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = eo(t, null, r, n) : We(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : kt(r, o), dp(e, t, r, o, n);
    case 7:
      return We(e, t, t.pendingProps, n), t.child;
    case 8:
      return We(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return We(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, s = t.memoizedProps, i = o.value, se(Ji, r._currentValue), r._currentValue = i, s !== null) if (Dt(s.value, i)) {
          if (s.children === o.children && !Qe.current) {
            t = on(e, t, n);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var a = s.dependencies;
          if (a !== null) {
            i = s.child;
            for (var l = a.firstContext; l !== null; ) {
              if (l.context === r) {
                if (s.tag === 1) {
                  l = qt(-1, n & -n), l.tag = 2;
                  var c = s.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var u = c.pending;
                    u === null ? l.next = l : (l.next = u.next, u.next = l), c.pending = l;
                  }
                }
                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Pc(
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
            i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Pc(i, n, t), i = s.sibling;
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
        We(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Kr(t, n), o = vt(o), r = r(o), t.flags |= 1, We(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = kt(r, t.pendingProps), o = kt(r.type, o), fp(e, t, r, o, n);
    case 15:
      return ly(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : kt(r, o), Di(e, t), t.tag = 1, qe(r) ? (e = !0, Qi(t)) : e = !1, Kr(t, n), sy(t, r, o), Nc(t, r, o, n), Rc(null, t, r, !0, e, n);
    case 19:
      return py(e, t, n);
    case 22:
      return cy(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function Ny(e, t) {
  return ng(e, t);
}
function Ub(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function gt(e, t, n, r) {
  return new Ub(e, t, n, r);
}
function ld(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Wb(e) {
  if (typeof e == "function") return ld(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Pu) return 11;
    if (e === Du) return 14;
  }
  return 2;
}
function An(e, t) {
  var n = e.alternate;
  return n === null ? (n = gt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ai(e, t, n, r, o, s) {
  var i = 2;
  if (r = e, typeof e == "function") ld(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Tr:
      return ir(n.children, o, s, t);
    case Tu:
      i = 8, o |= 8;
      break;
    case Jl:
      return e = gt(12, n, t, o | 2), e.elementType = Jl, e.lanes = s, e;
    case ec:
      return e = gt(13, n, t, o), e.elementType = ec, e.lanes = s, e;
    case tc:
      return e = gt(19, n, t, o), e.elementType = tc, e.lanes = s, e;
    case Vm:
      return La(n, o, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Im:
          i = 10;
          break e;
        case Fm:
          i = 9;
          break e;
        case Pu:
          i = 11;
          break e;
        case Du:
          i = 14;
          break e;
        case vn:
          i = 16, r = null;
          break e;
      }
      throw Error(A(130, e == null ? e : typeof e, ""));
  }
  return t = gt(i, n, t, o), t.elementType = e, t.type = r, t.lanes = s, t;
}
function ir(e, t, n, r) {
  return e = gt(7, e, r, t), e.lanes = n, e;
}
function La(e, t, n, r) {
  return e = gt(22, e, r, t), e.elementType = Vm, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Tl(e, t, n) {
  return e = gt(6, e, null, t), e.lanes = n, e;
}
function Pl(e, t, n) {
  return t = gt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Hb(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = al(0), this.expirationTimes = al(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = al(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function cd(e, t, n, r, o, s, i, a, l) {
  return e = new Hb(e, t, n, a, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = gt(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ku(s), e;
}
function Kb(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Er, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function My(e) {
  if (!e) return Ln;
  e = e._reactInternals;
  e: {
    if (vr(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (qe(t.type)) {
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
    if (qe(n)) return Mg(e, n, t);
  }
  return t;
}
function Ay(e, t, n, r, o, s, i, a, l) {
  return e = cd(n, r, !0, e, o, s, i, a, l), e.context = My(null), n = e.current, r = He(), o = Mn(n), s = qt(r, o), s.callback = t ?? null, Dn(n, s, o), e.current.lanes = o, Ns(e, o, r), Ze(e, r), e;
}
function _a(e, t, n, r) {
  var o = t.current, s = He(), i = Mn(o);
  return n = My(n), t.context === null ? t.context = n : t.pendingContext = n, t = qt(s, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Dn(o, t, i), e !== null && (Pt(e, o, i, s), Ei(e, o, i)), i;
}
function ca(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Cp(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ud(e, t) {
  Cp(e, t), (e = e.alternate) && Cp(e, t);
}
function Gb() {
  return null;
}
var Ry = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function dd(e) {
  this._internalRoot = e;
}
Oa.prototype.render = dd.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  _a(e, t, null, null);
};
Oa.prototype.unmount = dd.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    fr(function() {
      _a(null, e, null, null);
    }), t[nn] = null;
  }
};
function Oa(e) {
  this._internalRoot = e;
}
Oa.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = cg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < wn.length && t !== 0 && t < wn[n].priority; n++) ;
    wn.splice(n, 0, e), n === 0 && dg(e);
  }
};
function fd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ia(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ep() {
}
function Yb(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var c = ca(i);
        s.call(c);
      };
    }
    var i = Ay(t, r, e, 0, null, !1, !1, "", Ep);
    return e._reactRootContainer = i, e[nn] = i.current, cs(e.nodeType === 8 ? e.parentNode : e), fr(), i;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var c = ca(l);
      a.call(c);
    };
  }
  var l = cd(e, 0, !1, null, null, !1, !1, "", Ep);
  return e._reactRootContainer = l, e[nn] = l.current, cs(e.nodeType === 8 ? e.parentNode : e), fr(function() {
    _a(t, l, n, r);
  }), l;
}
function Fa(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = ca(i);
        a.call(l);
      };
    }
    _a(t, i, e, o);
  } else i = Yb(n, t, e, o, r);
  return ca(i);
}
ag = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Oo(t.pendingLanes);
        n !== 0 && (Au(t, n | 1), Ze(t, ke()), !(Q & 6) && (ro = ke() + 500, Un()));
      }
      break;
    case 13:
      fr(function() {
        var r = rn(e, 1);
        if (r !== null) {
          var o = He();
          Pt(r, e, 1, o);
        }
      }), ud(e, 1);
  }
};
Ru = function(e) {
  if (e.tag === 13) {
    var t = rn(e, 134217728);
    if (t !== null) {
      var n = He();
      Pt(t, e, 134217728, n);
    }
    ud(e, 134217728);
  }
};
lg = function(e) {
  if (e.tag === 13) {
    var t = Mn(e), n = rn(e, t);
    if (n !== null) {
      var r = He();
      Pt(n, e, t, r);
    }
    ud(e, t);
  }
};
cg = function() {
  return ne;
};
ug = function(e, t) {
  var n = ne;
  try {
    return ne = e, t();
  } finally {
    ne = n;
  }
};
dc = function(e, t, n) {
  switch (t) {
    case "input":
      if (oc(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Da(r);
            if (!o) throw Error(A(90));
            Bm(r), oc(r, o);
          }
        }
      }
      break;
    case "textarea":
      Um(e, n);
      break;
    case "select":
      t = n.value, t != null && $r(e, !!n.multiple, t, !1);
  }
};
Qm = sd;
qm = fr;
var Xb = { usingClientEntryPoint: !1, Events: [As, Mr, Da, Ym, Xm, sd] }, Mo = { findFiberByHostInstance: tr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Qb = { bundleType: Mo.bundleType, version: Mo.version, rendererPackageName: Mo.rendererPackageName, rendererConfig: Mo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: cn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = eg(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Mo.findFiberByHostInstance || Gb, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var oi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!oi.isDisabled && oi.supportsFiber) try {
    Ca = oi.inject(Qb), Ft = oi;
  } catch {
  }
}
lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xb;
lt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!fd(t)) throw Error(A(200));
  return Kb(e, t, null, n);
};
lt.createRoot = function(e, t) {
  if (!fd(e)) throw Error(A(299));
  var n = !1, r = "", o = Ry;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = cd(e, 1, !1, null, null, n, !1, r, o), e[nn] = t.current, cs(e.nodeType === 8 ? e.parentNode : e), new dd(t);
};
lt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e)));
  return e = eg(t), e = e === null ? null : e.stateNode, e;
};
lt.flushSync = function(e) {
  return fr(e);
};
lt.hydrate = function(e, t, n) {
  if (!Ia(t)) throw Error(A(200));
  return Fa(null, e, t, !0, n);
};
lt.hydrateRoot = function(e, t, n) {
  if (!fd(e)) throw Error(A(405));
  var r = n != null && n.hydratedSources || null, o = !1, s = "", i = Ry;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Ay(t, null, e, 1, n ?? null, o, !1, s, i), e[nn] = t.current, cs(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Oa(t);
};
lt.render = function(e, t, n) {
  if (!Ia(t)) throw Error(A(200));
  return Fa(null, e, t, !1, n);
};
lt.unmountComponentAtNode = function(e) {
  if (!Ia(e)) throw Error(A(40));
  return e._reactRootContainer ? (fr(function() {
    Fa(null, null, e, !1, function() {
      e._reactRootContainer = null, e[nn] = null;
    });
  }), !0) : !1;
};
lt.unstable_batchedUpdates = sd;
lt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ia(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return Fa(e, t, n, !1, r);
};
lt.version = "18.3.1-next-f1338f8080-20240426";
function jy() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jy);
    } catch (e) {
      console.error(e);
    }
}
jy(), jm.exports = lt;
var ho = jm.exports;
const qb = /* @__PURE__ */ wm(ho);
var Va, Tp = ho;
Va = Tp.createRoot, Tp.hydrateRoot;
function Ly(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ly(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Zb() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ly(e)) && (r && (r += " "), r += t);
  return r;
}
const pd = "-", Jb = (e) => {
  const t = tS(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(pd);
      return a[0] === "" && a.length !== 1 && a.shift(), _y(a, t) || eS(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const l = n[i] || [];
      return a && r[i] ? [...l, ...r[i]] : l;
    }
  };
}, _y = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? _y(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(pd);
  return (i = t.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : i.classGroupId;
}, Pp = /^\[(.+)\]$/, eS = (e) => {
  if (Pp.test(e)) {
    const t = Pp.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, tS = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return rS(Object.entries(e.classGroups), n).forEach(([s, i]) => {
    Wc(i, r, s, t);
  }), r;
}, Wc = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Dp(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (nS(o)) {
        Wc(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      Wc(i, Dp(t, s), n, r);
    });
  });
}, Dp = (e, t) => {
  let n = e;
  return t.split(pd).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, nS = (e) => e.isThemeGetter, rS = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a])) : s);
  return [n, o];
}) : e, oS = (e) => {
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
}, Oy = "!", sS = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], s = t.length, i = (a) => {
    const l = [];
    let c = 0, u = 0, f;
    for (let b = 0; b < a.length; b++) {
      let m = a[b];
      if (c === 0) {
        if (m === o && (r || a.slice(b, b + s) === t)) {
          l.push(a.slice(u, b)), u = b + s;
          continue;
        }
        if (m === "/") {
          f = b;
          continue;
        }
      }
      m === "[" ? c++ : m === "]" && c--;
    }
    const d = l.length === 0 ? a : a.substring(u), g = d.startsWith(Oy), w = g ? d.substring(1) : d, v = f && f > u ? f - u : void 0;
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
}, iS = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, aS = (e) => ({
  cache: oS(e.cacheSize),
  parseClassName: sS(e),
  ...Jb(e)
}), lS = /\s+/, cS = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, s = [], i = e.trim().split(lS);
  let a = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const c = i[l], {
      modifiers: u,
      hasImportantModifier: f,
      baseClassName: d,
      maybePostfixModifierPosition: g
    } = n(c);
    let w = !!g, v = r(w ? d.substring(0, g) : d);
    if (!v) {
      if (!w) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (v = r(d), !v) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      w = !1;
    }
    const b = iS(u).join(":"), m = f ? b + Oy : b, h = m + v;
    if (s.includes(h))
      continue;
    s.push(h);
    const y = o(v, w);
    for (let S = 0; S < y.length; ++S) {
      const k = y[S];
      s.push(m + k);
    }
    a = c + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function uS() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Iy(t)) && (r && (r += " "), r += n);
  return r;
}
const Iy = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Iy(e[r])) && (n && (n += " "), n += t);
  return n;
};
function dS(e, ...t) {
  let n, r, o, s = i;
  function i(l) {
    const c = t.reduce((u, f) => f(u), e());
    return n = aS(c), r = n.cache.get, o = n.cache.set, s = a, a(l);
  }
  function a(l) {
    const c = r(l);
    if (c)
      return c;
    const u = cS(l, n);
    return o(l, u), u;
  }
  return function() {
    return s(uS.apply(null, arguments));
  };
}
const ie = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Fy = /^\[(?:([a-z-]+):)?(.+)\]$/i, fS = /^\d+\/\d+$/, pS = /* @__PURE__ */ new Set(["px", "full", "screen"]), hS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, mS = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, gS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, yS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, vS = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ht = (e) => Yr(e) || pS.has(e) || fS.test(e), pn = (e) => mo(e, "length", TS), Yr = (e) => !!e && !Number.isNaN(Number(e)), Dl = (e) => mo(e, "number", Yr), Ao = (e) => !!e && Number.isInteger(Number(e)), xS = (e) => e.endsWith("%") && Yr(e.slice(0, -1)), H = (e) => Fy.test(e), hn = (e) => hS.test(e), wS = /* @__PURE__ */ new Set(["length", "size", "percentage"]), bS = (e) => mo(e, wS, Vy), SS = (e) => mo(e, "position", Vy), kS = /* @__PURE__ */ new Set(["image", "url"]), CS = (e) => mo(e, kS, DS), ES = (e) => mo(e, "", PS), Ro = () => !0, mo = (e, t, n) => {
  const r = Fy.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, TS = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  mS.test(e) && !gS.test(e)
), Vy = () => !1, PS = (e) => yS.test(e), DS = (e) => vS.test(e), NS = () => {
  const e = ie("colors"), t = ie("spacing"), n = ie("blur"), r = ie("brightness"), o = ie("borderColor"), s = ie("borderRadius"), i = ie("borderSpacing"), a = ie("borderWidth"), l = ie("contrast"), c = ie("grayscale"), u = ie("hueRotate"), f = ie("invert"), d = ie("gap"), g = ie("gradientColorStops"), w = ie("gradientColorStopPositions"), v = ie("inset"), b = ie("margin"), m = ie("opacity"), h = ie("padding"), y = ie("saturate"), S = ie("scale"), k = ie("sepia"), E = ie("skew"), C = ie("space"), T = ie("translate"), R = () => ["auto", "contain", "none"], N = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", H, t], M = () => [H, t], j = () => ["", Ht, pn], _ = () => ["auto", Yr, H], V = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], I = () => ["solid", "dashed", "dotted", "double", "none"], B = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], D = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], L = () => ["", "0", H], F = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], U = () => [Yr, H];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Ro],
      spacing: [Ht, pn],
      blur: ["none", "", hn, H],
      brightness: U(),
      borderColor: [e],
      borderRadius: ["none", "", "full", hn, H],
      borderSpacing: M(),
      borderWidth: j(),
      contrast: U(),
      grayscale: L(),
      hueRotate: U(),
      invert: L(),
      gap: M(),
      gradientColorStops: [e],
      gradientColorStopPositions: [xS, pn],
      inset: P(),
      margin: P(),
      opacity: U(),
      padding: M(),
      saturate: U(),
      scale: U(),
      sepia: L(),
      skew: U(),
      space: M(),
      translate: M()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", H]
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
        columns: [hn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": F()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": F()
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
        object: [...V(), H]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: N()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": N()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": N()
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
        z: ["auto", Ao, H]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: P()
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
        flex: ["1", "auto", "initial", "none", H]
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
        order: ["first", "last", "none", Ao, H]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Ro]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ao, H]
        }, H]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": _()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": _()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Ro]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ao, H]
        }, H]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": _()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": _()
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
        "auto-cols": ["auto", "min", "max", "fr", H]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", H]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [d]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [d]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [d]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...D()]
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
        content: ["normal", ...D(), "baseline"]
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
        "place-content": [...D(), "baseline"]
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
        "space-x": [C]
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
        "space-y": [C]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", H, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [H, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [H, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [hn]
        }, hn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [H, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [H, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", hn, pn]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Dl]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ro]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", H]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Yr, Dl]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ht, H]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", H]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", H]
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
        decoration: [...I(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ht, pn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ht, H]
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
        indent: M()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", H]
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
        content: ["none", H]
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
        bg: [...V(), SS]
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
        bg: ["auto", "cover", "contain", bS]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, CS]
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
        "divide-opacity": [m]
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
        "outline-offset": [Ht, H]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ht, pn]
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
        ring: j()
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
        "ring-offset": [Ht, pn]
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
        shadow: ["", "inner", "none", hn, ES]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ro]
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
        "mix-blend": [...B(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": B()
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
        "drop-shadow": ["", "none", hn, H]
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
        invert: [f]
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
        "backdrop-invert": [f]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", H]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: U()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", H]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: U()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", H]
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
        rotate: [Ao, H]
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
        "skew-x": [E]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [E]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", H]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", H]
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
        "scroll-m": M()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": M()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": M()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": M()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": M()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": M()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": M()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": M()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": M()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": M()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": M()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": M()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": M()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": M()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": M()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": M()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": M()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": M()
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
        "will-change": ["auto", "scroll", "contents", "transform", H]
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
        stroke: [Ht, pn, Dl]
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
}, MS = /* @__PURE__ */ dS(NS);
function xe(...e) {
  return MS(Zb(e));
}
function hd({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card",
      className: xe(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        e
      ),
      ...t
    }
  );
}
function zy({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: xe("px-6", e),
      ...t
    }
  );
}
function AS({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: xe("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
const Zt = x.forwardRef(
  ({ className: e, variant: t = "default", size: n = "default", ...r }, o) => /* @__PURE__ */ p.jsx(
    "button",
    {
      className: xe(
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
Zt.displayName = "Button";
function Np(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Y(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function RS(e, t) {
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
function go(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = x.createContext(i), l = n.length;
    n = [...n, i];
    const c = (f) => {
      var m;
      const { scope: d, children: g, ...w } = f, v = ((m = d == null ? void 0 : d[e]) == null ? void 0 : m[l]) || a, b = x.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ p.jsx(v.Provider, { value: b, children: g });
    };
    c.displayName = s + "Provider";
    function u(f, d) {
      var v;
      const g = ((v = d == null ? void 0 : d[e]) == null ? void 0 : v[l]) || a, w = x.useContext(g);
      if (w) return w;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
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
  return o.scopeName = e, [r, jS(o, ...t)];
}
function jS(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = r.reduce((a, { useScope: l, scopeName: c }) => {
        const f = l(s)[`__scope${c}`];
        return { ...a, ...f };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Mp(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function By(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = Mp(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : Mp(e[o], null);
        }
      };
  };
}
function we(...e) {
  return x.useCallback(By(...e), e);
}
// @__NO_SIDE_EFFECTS__
function vs(e) {
  const t = /* @__PURE__ */ LS(e), n = x.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = x.Children.toArray(s), l = a.find(OS);
    if (l) {
      const c = l.props.children, u = a.map((f) => f === l ? x.Children.count(c) > 1 ? x.Children.only(null) : x.isValidElement(c) ? c.props.children : null : f);
      return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: x.isValidElement(c) ? x.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function LS(e) {
  const t = x.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (x.isValidElement(o)) {
      const i = FS(o), a = IS(s, o.props);
      return o.type !== x.Fragment && (a.ref = r ? By(r, i) : i), x.cloneElement(o, a);
    }
    return x.Children.count(o) > 1 ? x.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var _S = Symbol("radix.slottable");
function OS(e) {
  return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === _S;
}
function IS(e, t) {
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
function FS(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function $y(e) {
  const t = e + "CollectionProvider", [n, r] = go(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (v) => {
    const { scope: b, children: m } = v, h = K.useRef(null), y = K.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p.jsx(o, { scope: b, itemMap: y, collectionRef: h, children: m });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ vs(a), c = K.forwardRef(
    (v, b) => {
      const { scope: m, children: h } = v, y = s(a, m), S = we(b, y.collectionRef);
      return /* @__PURE__ */ p.jsx(l, { ref: S, children: h });
    }
  );
  c.displayName = a;
  const u = e + "CollectionItemSlot", f = "data-radix-collection-item", d = /* @__PURE__ */ vs(u), g = K.forwardRef(
    (v, b) => {
      const { scope: m, children: h, ...y } = v, S = K.useRef(null), k = we(b, S), E = s(u, m);
      return K.useEffect(() => (E.itemMap.set(S, { ref: S, ...y }), () => void E.itemMap.delete(S))), /* @__PURE__ */ p.jsx(d, { [f]: "", ref: k, children: h });
    }
  );
  g.displayName = u;
  function w(v) {
    const b = s(e + "CollectionConsumer", v);
    return K.useCallback(() => {
      const h = b.collectionRef.current;
      if (!h) return [];
      const y = Array.from(h.querySelectorAll(`[${f}]`));
      return Array.from(b.itemMap.values()).sort(
        (E, C) => y.indexOf(E.ref.current) - y.indexOf(C.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [
    { Provider: i, Slot: c, ItemSlot: g },
    w,
    r
  ];
}
var VS = x.createContext(void 0);
function md(e) {
  const t = x.useContext(VS);
  return e || t || "ltr";
}
var zS = [
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
], q = zS.reduce((e, t) => {
  const n = /* @__PURE__ */ vs(`Primitive.${t}`), r = x.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function BS(e, t) {
  e && ho.flushSync(() => e.dispatchEvent(t));
}
function _n(e) {
  const t = x.useRef(e);
  return x.useEffect(() => {
    t.current = e;
  }), x.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function $S(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _n(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var US = "DismissableLayer", Hc = "dismissableLayer.update", WS = "dismissableLayer.pointerDownOutside", HS = "dismissableLayer.focusOutside", Ap, Uy = x.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), gd = x.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...l
    } = e, c = x.useContext(Uy), [u, f] = x.useState(null), d = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = x.useState({}), w = we(t, (C) => f(C)), v = Array.from(c.layers), [b] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), m = v.indexOf(b), h = u ? v.indexOf(u) : -1, y = c.layersWithOutsidePointerEventsDisabled.size > 0, S = h >= m, k = YS((C) => {
      const T = C.target, R = [...c.branches].some((N) => N.contains(T));
      !S || R || (o == null || o(C), i == null || i(C), C.defaultPrevented || a == null || a());
    }, d), E = XS((C) => {
      const T = C.target;
      [...c.branches].some((N) => N.contains(T)) || (s == null || s(C), i == null || i(C), C.defaultPrevented || a == null || a());
    }, d);
    return $S((C) => {
      h === c.layers.size - 1 && (r == null || r(C), !C.defaultPrevented && a && (C.preventDefault(), a()));
    }, d), x.useEffect(() => {
      if (u)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Ap = d.body.style.pointerEvents, d.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), Rp(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = Ap);
        };
    }, [u, d, n, c]), x.useEffect(() => () => {
      u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), Rp());
    }, [u, c]), x.useEffect(() => {
      const C = () => g({});
      return document.addEventListener(Hc, C), () => document.removeEventListener(Hc, C);
    }, []), /* @__PURE__ */ p.jsx(
      q.div,
      {
        ...l,
        ref: w,
        style: {
          pointerEvents: y ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Y(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: Y(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: Y(
          e.onPointerDownCapture,
          k.onPointerDownCapture
        )
      }
    );
  }
);
gd.displayName = US;
var KS = "DismissableLayerBranch", GS = x.forwardRef((e, t) => {
  const n = x.useContext(Uy), r = x.useRef(null), o = we(t, r);
  return x.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ p.jsx(q.div, { ...e, ref: o });
});
GS.displayName = KS;
function YS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _n(e), r = x.useRef(!1), o = x.useRef(() => {
  });
  return x.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          Wy(
            WS,
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
function XS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _n(e), r = x.useRef(!1);
  return x.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && Wy(HS, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Rp() {
  const e = new CustomEvent(Hc);
  document.dispatchEvent(e);
}
function Wy(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? BS(o, s) : o.dispatchEvent(s);
}
var Nl = 0;
function Hy() {
  x.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? jp()), document.body.insertAdjacentElement("beforeend", e[1] ?? jp()), Nl++, () => {
      Nl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Nl--;
    };
  }, []);
}
function jp() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Ml = "focusScope.autoFocusOnMount", Al = "focusScope.autoFocusOnUnmount", Lp = { bubbles: !1, cancelable: !0 }, QS = "FocusScope", yd = x.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = x.useState(null), c = _n(o), u = _n(s), f = x.useRef(null), d = we(t, (v) => l(v)), g = x.useRef({
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
        const S = y.target;
        a.contains(S) ? f.current = S : gn(f.current, { select: !0 });
      }, b = function(y) {
        if (g.paused || !a) return;
        const S = y.relatedTarget;
        S !== null && (a.contains(S) || gn(f.current, { select: !0 }));
      }, m = function(y) {
        if (document.activeElement === document.body)
          for (const k of y)
            k.removedNodes.length > 0 && gn(a);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", b);
      const h = new MutationObserver(m);
      return a && h.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", b), h.disconnect();
      };
    }
  }, [r, a, g.paused]), x.useEffect(() => {
    if (a) {
      Op.add(g);
      const v = document.activeElement;
      if (!a.contains(v)) {
        const m = new CustomEvent(Ml, Lp);
        a.addEventListener(Ml, c), a.dispatchEvent(m), m.defaultPrevented || (qS(nk(Ky(a)), { select: !0 }), document.activeElement === v && gn(a));
      }
      return () => {
        a.removeEventListener(Ml, c), setTimeout(() => {
          const m = new CustomEvent(Al, Lp);
          a.addEventListener(Al, u), a.dispatchEvent(m), m.defaultPrevented || gn(v ?? document.body, { select: !0 }), a.removeEventListener(Al, u), Op.remove(g);
        }, 0);
      };
    }
  }, [a, c, u, g]);
  const w = x.useCallback(
    (v) => {
      if (!n && !r || g.paused) return;
      const b = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, m = document.activeElement;
      if (b && m) {
        const h = v.currentTarget, [y, S] = ZS(h);
        y && S ? !v.shiftKey && m === S ? (v.preventDefault(), n && gn(y, { select: !0 })) : v.shiftKey && m === y && (v.preventDefault(), n && gn(S, { select: !0 })) : m === h && v.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ p.jsx(q.div, { tabIndex: -1, ...i, ref: d, onKeyDown: w });
});
yd.displayName = QS;
function qS(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (gn(r, { select: t }), document.activeElement !== n) return;
}
function ZS(e) {
  const t = Ky(e), n = _p(t, e), r = _p(t.reverse(), e);
  return [n, r];
}
function Ky(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function _p(e, t) {
  for (const n of e)
    if (!JS(n, { upTo: t })) return n;
}
function JS(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function ek(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function gn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && ek(e) && t && e.select();
  }
}
var Op = tk();
function tk() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Ip(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Ip(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Ip(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function nk(e) {
  return e.filter((t) => t.tagName !== "A");
}
var $e = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {
}, rk = Am[" useId ".trim().toString()] || (() => {
}), ok = 0;
function Rn(e) {
  const [t, n] = x.useState(rk());
  return $e(() => {
    n((r) => r ?? String(ok++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const sk = ["top", "right", "bottom", "left"], On = Math.min, tt = Math.max, ua = Math.round, si = Math.floor, zt = (e) => ({
  x: e,
  y: e
}), ik = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ak = {
  start: "end",
  end: "start"
};
function Kc(e, t, n) {
  return tt(e, On(t, n));
}
function sn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function an(e) {
  return e.split("-")[0];
}
function yo(e) {
  return e.split("-")[1];
}
function vd(e) {
  return e === "x" ? "y" : "x";
}
function xd(e) {
  return e === "y" ? "height" : "width";
}
const lk = /* @__PURE__ */ new Set(["top", "bottom"]);
function It(e) {
  return lk.has(an(e)) ? "y" : "x";
}
function wd(e) {
  return vd(It(e));
}
function ck(e, t, n) {
  n === void 0 && (n = !1);
  const r = yo(e), o = wd(e), s = xd(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = da(i)), [i, da(i)];
}
function uk(e) {
  const t = da(e);
  return [Gc(e), t, Gc(t)];
}
function Gc(e) {
  return e.replace(/start|end/g, (t) => ak[t]);
}
const Fp = ["left", "right"], Vp = ["right", "left"], dk = ["top", "bottom"], fk = ["bottom", "top"];
function pk(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Vp : Fp : t ? Fp : Vp;
    case "left":
    case "right":
      return t ? dk : fk;
    default:
      return [];
  }
}
function hk(e, t, n, r) {
  const o = yo(e);
  let s = pk(an(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Gc)))), s;
}
function da(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ik[t]);
}
function mk(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Gy(e) {
  return typeof e != "number" ? mk(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function fa(e) {
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
function zp(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = It(t), i = wd(t), a = xd(i), l = an(t), c = s === "y", u = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, d = r[a] / 2 - o[a] / 2;
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
        y: f
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (yo(t)) {
    case "start":
      g[i] -= d * (n && c ? -1 : 1);
      break;
    case "end":
      g[i] += d * (n && c ? -1 : 1);
      break;
  }
  return g;
}
const gk = async (e, t, n) => {
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
    y: f
  } = zp(c, r, l), d = r, g = {}, w = 0;
  for (let v = 0; v < a.length; v++) {
    const {
      name: b,
      fn: m
    } = a[v], {
      x: h,
      y,
      data: S,
      reset: k
    } = await m({
      x: u,
      y: f,
      initialPlacement: r,
      placement: d,
      strategy: o,
      middlewareData: g,
      rects: c,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = h ?? u, f = y ?? f, g = {
      ...g,
      [b]: {
        ...g[b],
        ...S
      }
    }, k && w <= 50 && (w++, typeof k == "object" && (k.placement && (d = k.placement), k.rects && (c = k.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: u,
      y: f
    } = zp(c, d, l)), v = -1);
  }
  return {
    x: u,
    y: f,
    placement: d,
    strategy: o,
    middlewareData: g
  };
};
async function xs(e, t) {
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
    elementContext: f = "floating",
    altBoundary: d = !1,
    padding: g = 0
  } = sn(t, e), w = Gy(g), b = a[d ? f === "floating" ? "reference" : "floating" : f], m = fa(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null || n ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), h = f === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), S = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = fa(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: h,
    offsetParent: y,
    strategy: l
  }) : h);
  return {
    top: (m.top - k.top + w.top) / S.y,
    bottom: (k.bottom - m.bottom + w.bottom) / S.y,
    left: (m.left - k.left + w.left) / S.x,
    right: (k.right - m.right + w.right) / S.x
  };
}
const yk = (e) => ({
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
    } = sn(e, t) || {};
    if (c == null)
      return {};
    const f = Gy(u), d = {
      x: n,
      y: r
    }, g = wd(o), w = xd(g), v = await i.getDimensions(c), b = g === "y", m = b ? "top" : "left", h = b ? "bottom" : "right", y = b ? "clientHeight" : "clientWidth", S = s.reference[w] + s.reference[g] - d[g] - s.floating[w], k = d[g] - s.reference[g], E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let C = E ? E[y] : 0;
    (!C || !await (i.isElement == null ? void 0 : i.isElement(E))) && (C = a.floating[y] || s.floating[w]);
    const T = S / 2 - k / 2, R = C / 2 - v[w] / 2 - 1, N = On(f[m], R), P = On(f[h], R), M = N, j = C - v[w] - P, _ = C / 2 - v[w] / 2 + T, V = Kc(M, _, j), I = !l.arrow && yo(o) != null && _ !== V && s.reference[w] / 2 - (_ < M ? N : P) - v[w] / 2 < 0, B = I ? _ < M ? _ - M : _ - j : 0;
    return {
      [g]: d[g] + B,
      data: {
        [g]: V,
        centerOffset: _ - V - B,
        ...I && {
          alignmentOffset: B
        }
      },
      reset: I
    };
  }
}), vk = function(e) {
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
        crossAxis: f = !0,
        fallbackPlacements: d,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: v = !0,
        ...b
      } = sn(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const m = an(o), h = It(a), y = an(a) === a, S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), k = d || (y || !v ? [da(a)] : uk(a)), E = w !== "none";
      !d && E && k.push(...hk(a, v, w, S));
      const C = [a, ...k], T = await xs(t, b), R = [];
      let N = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (u && R.push(T[m]), f) {
        const _ = ck(o, i, S);
        R.push(T[_[0]], T[_[1]]);
      }
      if (N = [...N, {
        placement: o,
        overflows: R
      }], !R.every((_) => _ <= 0)) {
        var P, M;
        const _ = (((P = s.flip) == null ? void 0 : P.index) || 0) + 1, V = C[_];
        if (V && (!(f === "alignment" ? h !== It(V) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        N.every((D) => It(D.placement) === h ? D.overflows[0] > 0 : !0)))
          return {
            data: {
              index: _,
              overflows: N
            },
            reset: {
              placement: V
            }
          };
        let I = (M = N.filter((B) => B.overflows[0] <= 0).sort((B, D) => B.overflows[1] - D.overflows[1])[0]) == null ? void 0 : M.placement;
        if (!I)
          switch (g) {
            case "bestFit": {
              var j;
              const B = (j = N.filter((D) => {
                if (E) {
                  const L = It(D.placement);
                  return L === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((L) => L > 0).reduce((L, F) => L + F, 0)]).sort((D, L) => D[1] - L[1])[0]) == null ? void 0 : j[0];
              B && (I = B);
              break;
            }
            case "initialPlacement":
              I = a;
              break;
          }
        if (o !== I)
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
function Bp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function $p(e) {
  return sk.some((t) => e[t] >= 0);
}
const xk = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = sn(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await xs(t, {
            ...o,
            elementContext: "reference"
          }), i = Bp(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: $p(i)
            }
          };
        }
        case "escaped": {
          const s = await xs(t, {
            ...o,
            altBoundary: !0
          }), i = Bp(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: $p(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Yy = /* @__PURE__ */ new Set(["left", "top"]);
async function wk(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = an(n), a = yo(n), l = It(n) === "y", c = Yy.has(i) ? -1 : 1, u = s && l ? -1 : 1, f = sn(t, e);
  let {
    mainAxis: d,
    crossAxis: g,
    alignmentAxis: w
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return a && typeof w == "number" && (g = a === "end" ? w * -1 : w), l ? {
    x: g * u,
    y: d * c
  } : {
    x: d * c,
    y: g * u
  };
}
const bk = function(e) {
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
      } = t, l = await wk(t, e);
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
}, Sk = function(e) {
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
          fn: (b) => {
            let {
              x: m,
              y: h
            } = b;
            return {
              x: m,
              y: h
            };
          }
        },
        ...l
      } = sn(e, t), c = {
        x: n,
        y: r
      }, u = await xs(t, l), f = It(an(o)), d = vd(f);
      let g = c[d], w = c[f];
      if (s) {
        const b = d === "y" ? "top" : "left", m = d === "y" ? "bottom" : "right", h = g + u[b], y = g - u[m];
        g = Kc(h, g, y);
      }
      if (i) {
        const b = f === "y" ? "top" : "left", m = f === "y" ? "bottom" : "right", h = w + u[b], y = w - u[m];
        w = Kc(h, w, y);
      }
      const v = a.fn({
        ...t,
        [d]: g,
        [f]: w
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [d]: s,
            [f]: i
          }
        }
      };
    }
  };
}, kk = function(e) {
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
      } = sn(e, t), u = {
        x: n,
        y: r
      }, f = It(o), d = vd(f);
      let g = u[d], w = u[f];
      const v = sn(a, t), b = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (l) {
        const y = d === "y" ? "height" : "width", S = s.reference[d] - s.floating[y] + b.mainAxis, k = s.reference[d] + s.reference[y] - b.mainAxis;
        g < S ? g = S : g > k && (g = k);
      }
      if (c) {
        var m, h;
        const y = d === "y" ? "width" : "height", S = Yy.has(an(o)), k = s.reference[f] - s.floating[y] + (S && ((m = i.offset) == null ? void 0 : m[f]) || 0) + (S ? 0 : b.crossAxis), E = s.reference[f] + s.reference[y] + (S ? 0 : ((h = i.offset) == null ? void 0 : h[f]) || 0) - (S ? b.crossAxis : 0);
        w < k ? w = k : w > E && (w = E);
      }
      return {
        [d]: g,
        [f]: w
      };
    }
  };
}, Ck = function(e) {
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
      } = sn(e, t), u = await xs(t, c), f = an(o), d = yo(o), g = It(o) === "y", {
        width: w,
        height: v
      } = s.floating;
      let b, m;
      f === "top" || f === "bottom" ? (b = f, m = d === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (m = f, b = d === "end" ? "top" : "bottom");
      const h = v - u.top - u.bottom, y = w - u.left - u.right, S = On(v - u[b], h), k = On(w - u[m], y), E = !t.middlewareData.shift;
      let C = S, T = k;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = h), E && !d) {
        const N = tt(u.left, 0), P = tt(u.right, 0), M = tt(u.top, 0), j = tt(u.bottom, 0);
        g ? T = w - 2 * (N !== 0 || P !== 0 ? N + P : tt(u.left, u.right)) : C = v - 2 * (M !== 0 || j !== 0 ? M + j : tt(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: T,
        availableHeight: C
      });
      const R = await i.getDimensions(a.floating);
      return w !== R.width || v !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function za() {
  return typeof window < "u";
}
function vo(e) {
  return Xy(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ot(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Wt(e) {
  var t;
  return (t = (Xy(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Xy(e) {
  return za() ? e instanceof Node || e instanceof ot(e).Node : !1;
}
function Nt(e) {
  return za() ? e instanceof Element || e instanceof ot(e).Element : !1;
}
function Ut(e) {
  return za() ? e instanceof HTMLElement || e instanceof ot(e).HTMLElement : !1;
}
function Up(e) {
  return !za() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ot(e).ShadowRoot;
}
const Ek = /* @__PURE__ */ new Set(["inline", "contents"]);
function js(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Mt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Ek.has(o);
}
const Tk = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Pk(e) {
  return Tk.has(vo(e));
}
const Dk = [":popover-open", ":modal"];
function Ba(e) {
  return Dk.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Nk = ["transform", "translate", "scale", "rotate", "perspective"], Mk = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Ak = ["paint", "layout", "strict", "content"];
function bd(e) {
  const t = Sd(), n = Nt(e) ? Mt(e) : e;
  return Nk.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Mk.some((r) => (n.willChange || "").includes(r)) || Ak.some((r) => (n.contain || "").includes(r));
}
function Rk(e) {
  let t = In(e);
  for (; Ut(t) && !oo(t); ) {
    if (bd(t))
      return t;
    if (Ba(t))
      return null;
    t = In(t);
  }
  return null;
}
function Sd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const jk = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function oo(e) {
  return jk.has(vo(e));
}
function Mt(e) {
  return ot(e).getComputedStyle(e);
}
function $a(e) {
  return Nt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function In(e) {
  if (vo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Up(e) && e.host || // Fallback.
    Wt(e)
  );
  return Up(t) ? t.host : t;
}
function Qy(e) {
  const t = In(e);
  return oo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ut(t) && js(t) ? t : Qy(t);
}
function ws(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Qy(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = ot(o);
  if (s) {
    const a = Yc(i);
    return t.concat(i, i.visualViewport || [], js(o) ? o : [], a && n ? ws(a) : []);
  }
  return t.concat(o, ws(o, [], n));
}
function Yc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function qy(e) {
  const t = Mt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ut(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = ua(n) !== s || ua(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function kd(e) {
  return Nt(e) ? e : e.contextElement;
}
function Xr(e) {
  const t = kd(e);
  if (!Ut(t))
    return zt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = qy(t);
  let i = (s ? ua(n.width) : n.width) / r, a = (s ? ua(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const Lk = /* @__PURE__ */ zt(0);
function Zy(e) {
  const t = ot(e);
  return !Sd() || !t.visualViewport ? Lk : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function _k(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ot(e) ? !1 : t;
}
function pr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = kd(e);
  let i = zt(1);
  t && (r ? Nt(r) && (i = Xr(r)) : i = Xr(e));
  const a = _k(s, n, r) ? Zy(s) : zt(0);
  let l = (o.left + a.x) / i.x, c = (o.top + a.y) / i.y, u = o.width / i.x, f = o.height / i.y;
  if (s) {
    const d = ot(s), g = r && Nt(r) ? ot(r) : r;
    let w = d, v = Yc(w);
    for (; v && r && g !== w; ) {
      const b = Xr(v), m = v.getBoundingClientRect(), h = Mt(v), y = m.left + (v.clientLeft + parseFloat(h.paddingLeft)) * b.x, S = m.top + (v.clientTop + parseFloat(h.paddingTop)) * b.y;
      l *= b.x, c *= b.y, u *= b.x, f *= b.y, l += y, c += S, w = ot(v), v = Yc(w);
    }
  }
  return fa({
    width: u,
    height: f,
    x: l,
    y: c
  });
}
function Cd(e, t) {
  const n = $a(e).scrollLeft;
  return t ? t.left + n : pr(Wt(e)).left + n;
}
function Jy(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Cd(e, r)
  )), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function Ok(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = Wt(r), a = t ? Ba(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = zt(1);
  const u = zt(0), f = Ut(r);
  if ((f || !f && !s) && ((vo(r) !== "body" || js(i)) && (l = $a(r)), Ut(r))) {
    const g = pr(r);
    c = Xr(r), u.x = g.x + r.clientLeft, u.y = g.y + r.clientTop;
  }
  const d = i && !f && !s ? Jy(i, l, !0) : zt(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x + d.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y + d.y
  };
}
function Ik(e) {
  return Array.from(e.getClientRects());
}
function Fk(e) {
  const t = Wt(e), n = $a(e), r = e.ownerDocument.body, o = tt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = tt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Cd(e);
  const a = -n.scrollTop;
  return Mt(r).direction === "rtl" && (i += tt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
function Vk(e, t) {
  const n = ot(e), r = Wt(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const c = Sd();
    (!c || c && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
const zk = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Bk(e, t) {
  const n = pr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = Ut(e) ? Xr(e) : zt(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, c = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: c
  };
}
function Wp(e, t, n) {
  let r;
  if (t === "viewport")
    r = Vk(e, n);
  else if (t === "document")
    r = Fk(Wt(e));
  else if (Nt(t))
    r = Bk(t, n);
  else {
    const o = Zy(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return fa(r);
}
function ev(e, t) {
  const n = In(e);
  return n === t || !Nt(n) || oo(n) ? !1 : Mt(n).position === "fixed" || ev(n, t);
}
function $k(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ws(e, [], !1).filter((a) => Nt(a) && vo(a) !== "body"), o = null;
  const s = Mt(e).position === "fixed";
  let i = s ? In(e) : e;
  for (; Nt(i) && !oo(i); ) {
    const a = Mt(i), l = bd(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && zk.has(o.position) || js(i) && !l && ev(e, i)) ? r = r.filter((u) => u !== i) : o = a, i = In(i);
  }
  return t.set(e, r), r;
}
function Uk(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Ba(t) ? [] : $k(t, this._c) : [].concat(n), r], a = i[0], l = i.reduce((c, u) => {
    const f = Wp(t, u, o);
    return c.top = tt(f.top, c.top), c.right = On(f.right, c.right), c.bottom = On(f.bottom, c.bottom), c.left = tt(f.left, c.left), c;
  }, Wp(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Wk(e) {
  const {
    width: t,
    height: n
  } = qy(e);
  return {
    width: t,
    height: n
  };
}
function Hk(e, t, n) {
  const r = Ut(t), o = Wt(t), s = n === "fixed", i = pr(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = zt(0);
  function c() {
    l.x = Cd(o);
  }
  if (r || !r && !s)
    if ((vo(t) !== "body" || js(o)) && (a = $a(t)), r) {
      const g = pr(t, !0, s, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && c();
  s && !r && o && c();
  const u = o && !r && !s ? Jy(o, a) : zt(0), f = i.left + a.scrollLeft - l.x - u.x, d = i.top + a.scrollTop - l.y - u.y;
  return {
    x: f,
    y: d,
    width: i.width,
    height: i.height
  };
}
function Rl(e) {
  return Mt(e).position === "static";
}
function Hp(e, t) {
  if (!Ut(e) || Mt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Wt(e) === n && (n = n.ownerDocument.body), n;
}
function tv(e, t) {
  const n = ot(e);
  if (Ba(e))
    return n;
  if (!Ut(e)) {
    let o = In(e);
    for (; o && !oo(o); ) {
      if (Nt(o) && !Rl(o))
        return o;
      o = In(o);
    }
    return n;
  }
  let r = Hp(e, t);
  for (; r && Pk(r) && Rl(r); )
    r = Hp(r, t);
  return r && oo(r) && Rl(r) && !bd(r) ? n : r || Rk(e) || n;
}
const Kk = async function(e) {
  const t = this.getOffsetParent || tv, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Hk(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Gk(e) {
  return Mt(e).direction === "rtl";
}
const Yk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ok,
  getDocumentElement: Wt,
  getClippingRect: Uk,
  getOffsetParent: tv,
  getElementRects: Kk,
  getClientRects: Ik,
  getDimensions: Wk,
  getScale: Xr,
  isElement: Nt,
  isRTL: Gk
};
function nv(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Xk(e, t) {
  let n = null, r;
  const o = Wt(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const c = e.getBoundingClientRect(), {
      left: u,
      top: f,
      width: d,
      height: g
    } = c;
    if (a || t(), !d || !g)
      return;
    const w = si(f), v = si(o.clientWidth - (u + d)), b = si(o.clientHeight - (f + g)), m = si(u), y = {
      rootMargin: -w + "px " + -v + "px " + -b + "px " + -m + "px",
      threshold: tt(0, On(1, l)) || 1
    };
    let S = !0;
    function k(E) {
      const C = E[0].intersectionRatio;
      if (C !== l) {
        if (!S)
          return i();
        C ? i(!1, C) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      C === 1 && !nv(c, e.getBoundingClientRect()) && i(), S = !1;
    }
    try {
      n = new IntersectionObserver(k, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(k, y);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function Qk(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = kd(e), u = o || s ? [...c ? ws(c) : [], ...ws(t)] : [];
  u.forEach((m) => {
    o && m.addEventListener("scroll", n, {
      passive: !0
    }), s && m.addEventListener("resize", n);
  });
  const f = c && a ? Xk(c, n) : null;
  let d = -1, g = null;
  i && (g = new ResizeObserver((m) => {
    let [h] = m;
    h && h.target === c && g && (g.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var y;
      (y = g) == null || y.observe(t);
    })), n();
  }), c && !l && g.observe(c), g.observe(t));
  let w, v = l ? pr(e) : null;
  l && b();
  function b() {
    const m = pr(e);
    v && !nv(v, m) && n(), v = m, w = requestAnimationFrame(b);
  }
  return n(), () => {
    var m;
    u.forEach((h) => {
      o && h.removeEventListener("scroll", n), s && h.removeEventListener("resize", n);
    }), f == null || f(), (m = g) == null || m.disconnect(), g = null, l && cancelAnimationFrame(w);
  };
}
const qk = bk, Zk = Sk, Jk = vk, eC = Ck, tC = xk, Kp = yk, nC = kk, rC = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Yk,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return gk(e, t, {
    ...o,
    platform: s
  });
};
var oC = typeof document < "u", sC = function() {
}, Ri = oC ? x.useLayoutEffect : sC;
function pa(e, t) {
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
        if (!pa(e[r], t[r]))
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
      if (!(s === "_owner" && e.$$typeof) && !pa(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function rv(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Gp(e, t) {
  const n = rv(e);
  return Math.round(t * n) / n;
}
function jl(e) {
  const t = x.useRef(e);
  return Ri(() => {
    t.current = e;
  }), t;
}
function iC(e) {
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
  } = e, [u, f] = x.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [d, g] = x.useState(r);
  pa(d, r) || g(r);
  const [w, v] = x.useState(null), [b, m] = x.useState(null), h = x.useCallback((D) => {
    D !== E.current && (E.current = D, v(D));
  }, []), y = x.useCallback((D) => {
    D !== C.current && (C.current = D, m(D));
  }, []), S = s || w, k = i || b, E = x.useRef(null), C = x.useRef(null), T = x.useRef(u), R = l != null, N = jl(l), P = jl(o), M = jl(c), j = x.useCallback(() => {
    if (!E.current || !C.current)
      return;
    const D = {
      placement: t,
      strategy: n,
      middleware: d
    };
    P.current && (D.platform = P.current), rC(E.current, C.current, D).then((L) => {
      const F = {
        ...L,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: M.current !== !1
      };
      _.current && !pa(T.current, F) && (T.current = F, ho.flushSync(() => {
        f(F);
      }));
    });
  }, [d, t, n, P, M]);
  Ri(() => {
    c === !1 && T.current.isPositioned && (T.current.isPositioned = !1, f((D) => ({
      ...D,
      isPositioned: !1
    })));
  }, [c]);
  const _ = x.useRef(!1);
  Ri(() => (_.current = !0, () => {
    _.current = !1;
  }), []), Ri(() => {
    if (S && (E.current = S), k && (C.current = k), S && k) {
      if (N.current)
        return N.current(S, k, j);
      j();
    }
  }, [S, k, j, N, R]);
  const V = x.useMemo(() => ({
    reference: E,
    floating: C,
    setReference: h,
    setFloating: y
  }), [h, y]), I = x.useMemo(() => ({
    reference: S,
    floating: k
  }), [S, k]), B = x.useMemo(() => {
    const D = {
      position: n,
      left: 0,
      top: 0
    };
    if (!I.floating)
      return D;
    const L = Gp(I.floating, u.x), F = Gp(I.floating, u.y);
    return a ? {
      ...D,
      transform: "translate(" + L + "px, " + F + "px)",
      ...rv(I.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: L,
      top: F
    };
  }, [n, a, I.floating, u.x, u.y]);
  return x.useMemo(() => ({
    ...u,
    update: j,
    refs: V,
    elements: I,
    floatingStyles: B
  }), [u, j, V, I, B]);
}
const aC = (e) => {
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
      return r && t(r) ? r.current != null ? Kp({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Kp({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, lC = (e, t) => ({
  ...qk(e),
  options: [e, t]
}), cC = (e, t) => ({
  ...Zk(e),
  options: [e, t]
}), uC = (e, t) => ({
  ...nC(e),
  options: [e, t]
}), dC = (e, t) => ({
  ...Jk(e),
  options: [e, t]
}), fC = (e, t) => ({
  ...eC(e),
  options: [e, t]
}), pC = (e, t) => ({
  ...tC(e),
  options: [e, t]
}), hC = (e, t) => ({
  ...aC(e),
  options: [e, t]
});
var mC = "Arrow", ov = x.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ p.jsx(
    q.svg,
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
ov.displayName = mC;
var gC = ov;
function yC(e) {
  const [t, n] = x.useState(void 0);
  return $e(() => {
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
var Ed = "Popper", [sv, iv] = go(Ed), [vC, av] = sv(Ed), lv = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = x.useState(null);
  return /* @__PURE__ */ p.jsx(vC, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
lv.displayName = Ed;
var cv = "PopperAnchor", uv = x.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = av(cv, n), i = x.useRef(null), a = we(t, i), l = x.useRef(null);
    return x.useEffect(() => {
      const c = l.current;
      l.current = (r == null ? void 0 : r.current) || i.current, c !== l.current && s.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ p.jsx(q.div, { ...o, ref: a });
  }
);
uv.displayName = cv;
var Td = "PopperContent", [xC, wC] = sv(Td), dv = x.forwardRef(
  (e, t) => {
    var $, re, Ee, X, Z, J;
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
      sticky: f = "partial",
      hideWhenDetached: d = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: w,
      ...v
    } = e, b = av(Td, n), [m, h] = x.useState(null), y = we(t, (me) => h(me)), [S, k] = x.useState(null), E = yC(S), C = (E == null ? void 0 : E.width) ?? 0, T = (E == null ? void 0 : E.height) ?? 0, R = r + (s !== "center" ? "-" + s : ""), N = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, P = Array.isArray(c) ? c : [c], M = P.length > 0, j = {
      padding: N,
      boundary: P.filter(SC),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: M
    }, { refs: _, floatingStyles: V, placement: I, isPositioned: B, middlewareData: D } = iC({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: R,
      whileElementsMounted: (...me) => Qk(...me, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        lC({ mainAxis: o + T, alignmentAxis: i }),
        l && cC({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? uC() : void 0,
          ...j
        }),
        l && dC({ ...j }),
        fC({
          ...j,
          apply: ({ elements: me, rects: ut, availableWidth: un, availableHeight: dt }) => {
            const { width: dn, height: Bs } = ut.reference, Gn = me.floating.style;
            Gn.setProperty("--radix-popper-available-width", `${un}px`), Gn.setProperty("--radix-popper-available-height", `${dt}px`), Gn.setProperty("--radix-popper-anchor-width", `${dn}px`), Gn.setProperty("--radix-popper-anchor-height", `${Bs}px`);
          }
        }),
        S && hC({ element: S, padding: a }),
        kC({ arrowWidth: C, arrowHeight: T }),
        d && pC({ strategy: "referenceHidden", ...j })
      ]
    }), [L, F] = hv(I), U = _n(w);
    $e(() => {
      B && (U == null || U());
    }, [B, U]);
    const ee = ($ = D.arrow) == null ? void 0 : $.x, Je = (re = D.arrow) == null ? void 0 : re.y, be = ((Ee = D.arrow) == null ? void 0 : Ee.centerOffset) !== 0, [Ue, Ae] = x.useState();
    return $e(() => {
      m && Ae(window.getComputedStyle(m).zIndex);
    }, [m]), /* @__PURE__ */ p.jsx(
      "div",
      {
        ref: _.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...V,
          transform: B ? V.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Ue,
          "--radix-popper-transform-origin": [
            (X = D.transformOrigin) == null ? void 0 : X.x,
            (Z = D.transformOrigin) == null ? void 0 : Z.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((J = D.hide) == null ? void 0 : J.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ p.jsx(
          xC,
          {
            scope: n,
            placedSide: L,
            onArrowChange: k,
            arrowX: ee,
            arrowY: Je,
            shouldHideArrow: be,
            children: /* @__PURE__ */ p.jsx(
              q.div,
              {
                "data-side": L,
                "data-align": F,
                ...v,
                ref: y,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: B ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
dv.displayName = Td;
var fv = "PopperArrow", bC = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, pv = x.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = wC(fv, r), i = bC[s.placedSide];
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
          gC,
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
pv.displayName = fv;
function SC(e) {
  return e !== null;
}
var kC = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, m, h;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [c, u] = hv(n), f = { start: "0%", center: "50%", end: "100%" }[u], d = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + a / 2, g = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + l / 2;
    let w = "", v = "";
    return c === "bottom" ? (w = i ? f : `${d}px`, v = `${-l}px`) : c === "top" ? (w = i ? f : `${d}px`, v = `${r.floating.height + l}px`) : c === "right" ? (w = `${-l}px`, v = i ? f : `${g}px`) : c === "left" && (w = `${r.floating.width + l}px`, v = i ? f : `${g}px`), { data: { x: w, y: v } };
  }
});
function hv(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var CC = lv, EC = uv, TC = dv, PC = pv, DC = "Portal", Pd = x.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, s] = x.useState(!1);
  $e(() => s(!0), []);
  const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return i ? qb.createPortal(/* @__PURE__ */ p.jsx(q.div, { ...r, ref: t }), i) : null;
});
Pd.displayName = DC;
var NC = Am[" useInsertionEffect ".trim().toString()] || $e;
function bs({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, i] = MC({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o;
  {
    const u = x.useRef(e !== void 0);
    x.useEffect(() => {
      const f = u.current;
      f !== a && console.warn(
        `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = a;
    }, [a, r]);
  }
  const c = x.useCallback(
    (u) => {
      var f;
      if (a) {
        const d = AC(u) ? u(e) : u;
        d !== e && ((f = i.current) == null || f.call(i, d));
      } else
        s(u);
    },
    [a, e, s, i]
  );
  return [l, c];
}
function MC({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = x.useState(e), o = x.useRef(n), s = x.useRef(t);
  return NC(() => {
    s.current = t;
  }, [t]), x.useEffect(() => {
    var i;
    o.current !== n && ((i = s.current) == null || i.call(s, n), o.current = n);
  }, [n, o]), [n, r, s];
}
function AC(e) {
  return typeof e == "function";
}
function RC(e) {
  const t = x.useRef({ value: e, previous: e });
  return x.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var mv = Object.freeze({
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
}), jC = "VisuallyHidden", LC = x.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(
    q.span,
    {
      ...e,
      ref: t,
      style: { ...mv, ...e.style }
    }
  )
);
LC.displayName = jC;
var _C = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, br = /* @__PURE__ */ new WeakMap(), ii = /* @__PURE__ */ new WeakMap(), ai = {}, Ll = 0, gv = function(e) {
  return e && (e.host || gv(e.parentNode));
}, OC = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = gv(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, IC = function(e, t, n, r) {
  var o = OC(t, Array.isArray(e) ? e : [e]);
  ai[n] || (ai[n] = /* @__PURE__ */ new WeakMap());
  var s = ai[n], i = [], a = /* @__PURE__ */ new Set(), l = new Set(o), c = function(f) {
    !f || a.has(f) || (a.add(f), c(f.parentNode));
  };
  o.forEach(c);
  var u = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(d) {
      if (a.has(d))
        u(d);
      else
        try {
          var g = d.getAttribute(r), w = g !== null && g !== "false", v = (br.get(d) || 0) + 1, b = (s.get(d) || 0) + 1;
          br.set(d, v), s.set(d, b), i.push(d), v === 1 && w && ii.set(d, !0), b === 1 && d.setAttribute(n, "true"), w || d.setAttribute(r, "true");
        } catch (m) {
          console.error("aria-hidden: cannot operate on ", d, m);
        }
    });
  };
  return u(t), a.clear(), Ll++, function() {
    i.forEach(function(f) {
      var d = br.get(f) - 1, g = s.get(f) - 1;
      br.set(f, d), s.set(f, g), d || (ii.has(f) || f.removeAttribute(r), ii.delete(f)), g || f.removeAttribute(n);
    }), Ll--, Ll || (br = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ new WeakMap(), ii = /* @__PURE__ */ new WeakMap(), ai = {});
  };
}, yv = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = _C(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), IC(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Ot = function() {
  return Ot = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Ot.apply(this, arguments);
};
function vv(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function FC(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var ji = "right-scroll-bar-position", Li = "width-before-scroll-bar", VC = "with-scroll-bars-hidden", zC = "--removed-body-scroll-bar-size";
function _l(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function BC(e, t) {
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
var $C = typeof window < "u" ? x.useLayoutEffect : x.useEffect, Yp = /* @__PURE__ */ new WeakMap();
function UC(e, t) {
  var n = BC(null, function(r) {
    return e.forEach(function(o) {
      return _l(o, r);
    });
  });
  return $C(function() {
    var r = Yp.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || _l(a, null);
      }), s.forEach(function(a) {
        o.has(a) || _l(a, i);
      });
    }
    Yp.set(n, e);
  }, [e]), n;
}
function WC(e) {
  return e;
}
function HC(e, t) {
  t === void 0 && (t = WC);
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
function KC(e) {
  e === void 0 && (e = {});
  var t = HC(null);
  return t.options = Ot({ async: !0, ssr: !1 }, e), t;
}
var xv = function(e) {
  var t = e.sideCar, n = vv(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return x.createElement(r, Ot({}, n));
};
xv.isSideCarExport = !0;
function GC(e, t) {
  return e.useMedium(t), xv;
}
var wv = KC(), Ol = function() {
}, Ua = x.forwardRef(function(e, t) {
  var n = x.useRef(null), r = x.useState({
    onScrollCapture: Ol,
    onWheelCapture: Ol,
    onTouchMoveCapture: Ol
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, u = e.enabled, f = e.shards, d = e.sideCar, g = e.noRelative, w = e.noIsolation, v = e.inert, b = e.allowPinchZoom, m = e.as, h = m === void 0 ? "div" : m, y = e.gapMode, S = vv(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), k = d, E = UC([n, t]), C = Ot(Ot({}, S), o);
  return x.createElement(
    x.Fragment,
    null,
    u && x.createElement(k, { sideCar: wv, removeScrollBar: c, shards: f, noRelative: g, noIsolation: w, inert: v, setCallbacks: s, allowPinchZoom: !!b, lockRef: n, gapMode: y }),
    i ? x.cloneElement(x.Children.only(a), Ot(Ot({}, C), { ref: E })) : x.createElement(h, Ot({}, C, { className: l, ref: E }), a)
  );
});
Ua.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ua.classNames = {
  fullWidth: Li,
  zeroRight: ji
};
var YC = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function XC() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = YC();
  return t && e.setAttribute("nonce", t), e;
}
function QC(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function qC(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ZC = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = XC()) && (QC(t, n), qC(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, JC = function() {
  var e = ZC();
  return function(t, n) {
    x.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, bv = function() {
  var e = JC(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, eE = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Il = function(e) {
  return parseInt(e || "", 10) || 0;
}, tE = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Il(n), Il(r), Il(o)];
}, nE = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return eE;
  var t = tE(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, rE = bv(), Qr = "data-scroll-locked", oE = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(VC, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Qr, `] {
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
  
  .`).concat(ji, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Li, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(ji, " .").concat(ji, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Li, " .").concat(Li, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Qr, `] {
    `).concat(zC, ": ").concat(a, `px;
  }
`);
}, Xp = function() {
  var e = parseInt(document.body.getAttribute(Qr) || "0", 10);
  return isFinite(e) ? e : 0;
}, sE = function() {
  x.useEffect(function() {
    return document.body.setAttribute(Qr, (Xp() + 1).toString()), function() {
      var e = Xp() - 1;
      e <= 0 ? document.body.removeAttribute(Qr) : document.body.setAttribute(Qr, e.toString());
    };
  }, []);
}, iE = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  sE();
  var s = x.useMemo(function() {
    return nE(o);
  }, [o]);
  return x.createElement(rE, { styles: oE(s, !t, o, n ? "" : "!important") });
}, Xc = !1;
if (typeof window < "u")
  try {
    var li = Object.defineProperty({}, "passive", {
      get: function() {
        return Xc = !0, !0;
      }
    });
    window.addEventListener("test", li, li), window.removeEventListener("test", li, li);
  } catch {
    Xc = !1;
  }
var Sr = Xc ? { passive: !1 } : !1, aE = function(e) {
  return e.tagName === "TEXTAREA";
}, Sv = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !aE(e) && n[t] === "visible")
  );
}, lE = function(e) {
  return Sv(e, "overflowY");
}, cE = function(e) {
  return Sv(e, "overflowX");
}, Qp = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = kv(e, r);
    if (o) {
      var s = Cv(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, uE = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, dE = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, kv = function(e, t) {
  return e === "v" ? lE(t) : cE(t);
}, Cv = function(e, t) {
  return e === "v" ? uE(t) : dE(t);
}, fE = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, pE = function(e, t, n, r, o) {
  var s = fE(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, l = t.contains(a), c = !1, u = i > 0, f = 0, d = 0;
  do {
    if (!a)
      break;
    var g = Cv(e, a), w = g[0], v = g[1], b = g[2], m = v - b - s * w;
    (w || m) && kv(e, a) && (f += m, d += w);
    var h = a.parentNode;
    a = h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h.host : h;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (u && Math.abs(f) < 1 || !u && Math.abs(d) < 1) && (c = !0), c;
}, ci = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, qp = function(e) {
  return [e.deltaX, e.deltaY];
}, Zp = function(e) {
  return e && "current" in e ? e.current : e;
}, hE = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, mE = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, gE = 0, kr = [];
function yE(e) {
  var t = x.useRef([]), n = x.useRef([0, 0]), r = x.useRef(), o = x.useState(gE++)[0], s = x.useState(bv)[0], i = x.useRef(e);
  x.useEffect(function() {
    i.current = e;
  }, [e]), x.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = FC([e.lockRef.current], (e.shards || []).map(Zp), !0).filter(Boolean);
      return v.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = x.useCallback(function(v, b) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !i.current.allowPinchZoom;
    var m = ci(v), h = n.current, y = "deltaX" in v ? v.deltaX : h[0] - m[0], S = "deltaY" in v ? v.deltaY : h[1] - m[1], k, E = v.target, C = Math.abs(y) > Math.abs(S) ? "h" : "v";
    if ("touches" in v && C === "h" && E.type === "range")
      return !1;
    var T = Qp(C, E);
    if (!T)
      return !0;
    if (T ? k = C : (k = C === "v" ? "h" : "v", T = Qp(C, E)), !T)
      return !1;
    if (!r.current && "changedTouches" in v && (y || S) && (r.current = k), !k)
      return !0;
    var R = r.current || k;
    return pE(R, b, v, R === "h" ? y : S);
  }, []), l = x.useCallback(function(v) {
    var b = v;
    if (!(!kr.length || kr[kr.length - 1] !== s)) {
      var m = "deltaY" in b ? qp(b) : ci(b), h = t.current.filter(function(k) {
        return k.name === b.type && (k.target === b.target || b.target === k.shadowParent) && hE(k.delta, m);
      })[0];
      if (h && h.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!h) {
        var y = (i.current.shards || []).map(Zp).filter(Boolean).filter(function(k) {
          return k.contains(b.target);
        }), S = y.length > 0 ? a(b, y[0]) : !i.current.noIsolation;
        S && b.cancelable && b.preventDefault();
      }
    }
  }, []), c = x.useCallback(function(v, b, m, h) {
    var y = { name: v, delta: b, target: m, should: h, shadowParent: vE(m) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== y;
      });
    }, 1);
  }, []), u = x.useCallback(function(v) {
    n.current = ci(v), r.current = void 0;
  }, []), f = x.useCallback(function(v) {
    c(v.type, qp(v), v.target, a(v, e.lockRef.current));
  }, []), d = x.useCallback(function(v) {
    c(v.type, ci(v), v.target, a(v, e.lockRef.current));
  }, []);
  x.useEffect(function() {
    return kr.push(s), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", l, Sr), document.addEventListener("touchmove", l, Sr), document.addEventListener("touchstart", u, Sr), function() {
      kr = kr.filter(function(v) {
        return v !== s;
      }), document.removeEventListener("wheel", l, Sr), document.removeEventListener("touchmove", l, Sr), document.removeEventListener("touchstart", u, Sr);
    };
  }, []);
  var g = e.removeScrollBar, w = e.inert;
  return x.createElement(
    x.Fragment,
    null,
    w ? x.createElement(s, { styles: mE(o) }) : null,
    g ? x.createElement(iE, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function vE(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const xE = GC(wv, yE);
var Dd = x.forwardRef(function(e, t) {
  return x.createElement(Ua, Ot({}, e, { ref: t, sideCar: xE }));
});
Dd.classNames = Ua.classNames;
var wE = [" ", "Enter", "ArrowUp", "ArrowDown"], bE = [" ", "Enter"], hr = "Select", [Wa, Ha, SE] = $y(hr), [xo, IM] = go(hr, [
  SE,
  iv
]), Ka = iv(), [kE, Wn] = xo(hr), [CE, EE] = xo(hr), Ev = (e) => {
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
    autoComplete: f,
    disabled: d,
    required: g,
    form: w
  } = e, v = Ka(t), [b, m] = x.useState(null), [h, y] = x.useState(null), [S, k] = x.useState(!1), E = md(c), [C, T] = bs({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: hr
  }), [R, N] = bs({
    prop: i,
    defaultProp: a,
    onChange: l,
    caller: hr
  }), P = x.useRef(null), M = b ? w || !!b.closest("form") : !0, [j, _] = x.useState(/* @__PURE__ */ new Set()), V = Array.from(j).map((I) => I.props.value).join(";");
  return /* @__PURE__ */ p.jsx(CC, { ...v, children: /* @__PURE__ */ p.jsxs(
    kE,
    {
      required: g,
      scope: t,
      trigger: b,
      onTriggerChange: m,
      valueNode: h,
      onValueNodeChange: y,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: k,
      contentId: Rn(),
      value: R,
      onValueChange: N,
      open: C,
      onOpenChange: T,
      dir: E,
      triggerPointerDownPosRef: P,
      disabled: d,
      children: [
        /* @__PURE__ */ p.jsx(Wa.Provider, { scope: t, children: /* @__PURE__ */ p.jsx(
          CE,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: x.useCallback((I) => {
              _((B) => new Set(B).add(I));
            }, []),
            onNativeOptionRemove: x.useCallback((I) => {
              _((B) => {
                const D = new Set(B);
                return D.delete(I), D;
              });
            }, []),
            children: n
          }
        ) }),
        M ? /* @__PURE__ */ p.jsxs(
          Gv,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: u,
            autoComplete: f,
            value: R,
            onChange: (I) => N(I.target.value),
            disabled: d,
            form: w,
            children: [
              R === void 0 ? /* @__PURE__ */ p.jsx("option", { value: "" }) : null,
              Array.from(j)
            ]
          },
          V
        ) : null
      ]
    }
  ) });
};
Ev.displayName = hr;
var Tv = "SelectTrigger", Pv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = Ka(n), i = Wn(Tv, n), a = i.disabled || r, l = we(t, i.onTriggerChange), c = Ha(n), u = x.useRef("touch"), [f, d, g] = Xv((v) => {
      const b = c().filter((y) => !y.disabled), m = b.find((y) => y.value === i.value), h = Qv(b, v, m);
      h !== void 0 && i.onValueChange(h.value);
    }), w = (v) => {
      a || (i.onOpenChange(!0), g()), v && (i.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    };
    return /* @__PURE__ */ p.jsx(EC, { asChild: !0, ...s, children: /* @__PURE__ */ p.jsx(
      q.button,
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
        "data-placeholder": Yv(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: Y(o.onClick, (v) => {
          v.currentTarget.focus(), u.current !== "mouse" && w(v);
        }),
        onPointerDown: Y(o.onPointerDown, (v) => {
          u.current = v.pointerType;
          const b = v.target;
          b.hasPointerCapture(v.pointerId) && b.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (w(v), v.preventDefault());
        }),
        onKeyDown: Y(o.onKeyDown, (v) => {
          const b = f.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && d(v.key), !(b && v.key === " ") && wE.includes(v.key) && (w(), v.preventDefault());
        })
      }
    ) });
  }
);
Pv.displayName = Tv;
var Dv = "SelectValue", Nv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: i = "", ...a } = e, l = Wn(Dv, n), { onValueNodeHasChildrenChange: c } = l, u = s !== void 0, f = we(t, l.onValueNodeChange);
    return $e(() => {
      c(u);
    }, [c, u]), /* @__PURE__ */ p.jsx(
      q.span,
      {
        ...a,
        ref: f,
        style: { pointerEvents: "none" },
        children: Yv(l.value) ? /* @__PURE__ */ p.jsx(p.Fragment, { children: i }) : s
      }
    );
  }
);
Nv.displayName = Dv;
var TE = "SelectIcon", Mv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ p.jsx(q.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Mv.displayName = TE;
var PE = "SelectPortal", Av = (e) => /* @__PURE__ */ p.jsx(Pd, { asChild: !0, ...e });
Av.displayName = PE;
var mr = "SelectContent", Rv = x.forwardRef(
  (e, t) => {
    const n = Wn(mr, e.__scopeSelect), [r, o] = x.useState();
    if ($e(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? ho.createPortal(
        /* @__PURE__ */ p.jsx(jv, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx(Wa.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ p.jsx(Lv, { ...e, ref: t });
  }
);
Rv.displayName = mr;
var bt = 10, [jv, Hn] = xo(mr), DE = "SelectContentImpl", NE = /* @__PURE__ */ vs("SelectContent.RemoveScroll"), Lv = x.forwardRef(
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
      arrowPadding: f,
      collisionBoundary: d,
      collisionPadding: g,
      sticky: w,
      hideWhenDetached: v,
      avoidCollisions: b,
      //
      ...m
    } = e, h = Wn(mr, n), [y, S] = x.useState(null), [k, E] = x.useState(null), C = we(t, ($) => S($)), [T, R] = x.useState(null), [N, P] = x.useState(
      null
    ), M = Ha(n), [j, _] = x.useState(!1), V = x.useRef(!1);
    x.useEffect(() => {
      if (y) return yv(y);
    }, [y]), Hy();
    const I = x.useCallback(
      ($) => {
        const [re, ...Ee] = M().map((J) => J.ref.current), [X] = Ee.slice(-1), Z = document.activeElement;
        for (const J of $)
          if (J === Z || (J == null || J.scrollIntoView({ block: "nearest" }), J === re && k && (k.scrollTop = 0), J === X && k && (k.scrollTop = k.scrollHeight), J == null || J.focus(), document.activeElement !== Z)) return;
      },
      [M, k]
    ), B = x.useCallback(
      () => I([T, y]),
      [I, T, y]
    );
    x.useEffect(() => {
      j && B();
    }, [j, B]);
    const { onOpenChange: D, triggerPointerDownPosRef: L } = h;
    x.useEffect(() => {
      if (y) {
        let $ = { x: 0, y: 0 };
        const re = (X) => {
          var Z, J;
          $ = {
            x: Math.abs(Math.round(X.pageX) - (((Z = L.current) == null ? void 0 : Z.x) ?? 0)),
            y: Math.abs(Math.round(X.pageY) - (((J = L.current) == null ? void 0 : J.y) ?? 0))
          };
        }, Ee = (X) => {
          $.x <= 10 && $.y <= 10 ? X.preventDefault() : y.contains(X.target) || D(!1), document.removeEventListener("pointermove", re), L.current = null;
        };
        return L.current !== null && (document.addEventListener("pointermove", re), document.addEventListener("pointerup", Ee, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", re), document.removeEventListener("pointerup", Ee, { capture: !0 });
        };
      }
    }, [y, D, L]), x.useEffect(() => {
      const $ = () => D(!1);
      return window.addEventListener("blur", $), window.addEventListener("resize", $), () => {
        window.removeEventListener("blur", $), window.removeEventListener("resize", $);
      };
    }, [D]);
    const [F, U] = Xv(($) => {
      const re = M().filter((Z) => !Z.disabled), Ee = re.find((Z) => Z.ref.current === document.activeElement), X = Qv(re, $, Ee);
      X && setTimeout(() => X.ref.current.focus());
    }), ee = x.useCallback(
      ($, re, Ee) => {
        const X = !V.current && !Ee;
        (h.value !== void 0 && h.value === re || X) && (R($), X && (V.current = !0));
      },
      [h.value]
    ), Je = x.useCallback(() => y == null ? void 0 : y.focus(), [y]), be = x.useCallback(
      ($, re, Ee) => {
        const X = !V.current && !Ee;
        (h.value !== void 0 && h.value === re || X) && P($);
      },
      [h.value]
    ), Ue = r === "popper" ? Qc : _v, Ae = Ue === Qc ? {
      side: a,
      sideOffset: l,
      align: c,
      alignOffset: u,
      arrowPadding: f,
      collisionBoundary: d,
      collisionPadding: g,
      sticky: w,
      hideWhenDetached: v,
      avoidCollisions: b
    } : {};
    return /* @__PURE__ */ p.jsx(
      jv,
      {
        scope: n,
        content: y,
        viewport: k,
        onViewportChange: E,
        itemRefCallback: ee,
        selectedItem: T,
        onItemLeave: Je,
        itemTextRefCallback: be,
        focusSelectedItem: B,
        selectedItemText: N,
        position: r,
        isPositioned: j,
        searchRef: F,
        children: /* @__PURE__ */ p.jsx(Dd, { as: NE, allowPinchZoom: !0, children: /* @__PURE__ */ p.jsx(
          yd,
          {
            asChild: !0,
            trapped: h.open,
            onMountAutoFocus: ($) => {
              $.preventDefault();
            },
            onUnmountAutoFocus: Y(o, ($) => {
              var re;
              (re = h.trigger) == null || re.focus({ preventScroll: !0 }), $.preventDefault();
            }),
            children: /* @__PURE__ */ p.jsx(
              gd,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: ($) => $.preventDefault(),
                onDismiss: () => h.onOpenChange(!1),
                children: /* @__PURE__ */ p.jsx(
                  Ue,
                  {
                    role: "listbox",
                    id: h.contentId,
                    "data-state": h.open ? "open" : "closed",
                    dir: h.dir,
                    onContextMenu: ($) => $.preventDefault(),
                    ...m,
                    ...Ae,
                    onPlaced: () => _(!0),
                    ref: C,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...m.style
                    },
                    onKeyDown: Y(m.onKeyDown, ($) => {
                      const re = $.ctrlKey || $.altKey || $.metaKey;
                      if ($.key === "Tab" && $.preventDefault(), !re && $.key.length === 1 && U($.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes($.key)) {
                        let X = M().filter((Z) => !Z.disabled).map((Z) => Z.ref.current);
                        if (["ArrowUp", "End"].includes($.key) && (X = X.slice().reverse()), ["ArrowUp", "ArrowDown"].includes($.key)) {
                          const Z = $.target, J = X.indexOf(Z);
                          X = X.slice(J + 1);
                        }
                        setTimeout(() => I(X)), $.preventDefault();
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
Lv.displayName = DE;
var ME = "SelectItemAlignedPosition", _v = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = Wn(mr, n), i = Hn(mr, n), [a, l] = x.useState(null), [c, u] = x.useState(null), f = we(t, (C) => u(C)), d = Ha(n), g = x.useRef(!1), w = x.useRef(!0), { viewport: v, selectedItem: b, selectedItemText: m, focusSelectedItem: h } = i, y = x.useCallback(() => {
    if (s.trigger && s.valueNode && a && c && v && b && m) {
      const C = s.trigger.getBoundingClientRect(), T = c.getBoundingClientRect(), R = s.valueNode.getBoundingClientRect(), N = m.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const Z = N.left - T.left, J = R.left - Z, me = C.left - J, ut = C.width + me, un = Math.max(ut, T.width), dt = window.innerWidth - bt, dn = Np(J, [
          bt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(bt, dt - un)
        ]);
        a.style.minWidth = ut + "px", a.style.left = dn + "px";
      } else {
        const Z = T.right - N.right, J = window.innerWidth - R.right - Z, me = window.innerWidth - C.right - J, ut = C.width + me, un = Math.max(ut, T.width), dt = window.innerWidth - bt, dn = Np(J, [
          bt,
          Math.max(bt, dt - un)
        ]);
        a.style.minWidth = ut + "px", a.style.right = dn + "px";
      }
      const P = d(), M = window.innerHeight - bt * 2, j = v.scrollHeight, _ = window.getComputedStyle(c), V = parseInt(_.borderTopWidth, 10), I = parseInt(_.paddingTop, 10), B = parseInt(_.borderBottomWidth, 10), D = parseInt(_.paddingBottom, 10), L = V + I + j + D + B, F = Math.min(b.offsetHeight * 5, L), U = window.getComputedStyle(v), ee = parseInt(U.paddingTop, 10), Je = parseInt(U.paddingBottom, 10), be = C.top + C.height / 2 - bt, Ue = M - be, Ae = b.offsetHeight / 2, $ = b.offsetTop + Ae, re = V + I + $, Ee = L - re;
      if (re <= be) {
        const Z = P.length > 0 && b === P[P.length - 1].ref.current;
        a.style.bottom = "0px";
        const J = c.clientHeight - v.offsetTop - v.offsetHeight, me = Math.max(
          Ue,
          Ae + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Z ? Je : 0) + J + B
        ), ut = re + me;
        a.style.height = ut + "px";
      } else {
        const Z = P.length > 0 && b === P[0].ref.current;
        a.style.top = "0px";
        const me = Math.max(
          be,
          V + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Z ? ee : 0) + Ae
        ) + Ee;
        a.style.height = me + "px", v.scrollTop = re - be + v.offsetTop;
      }
      a.style.margin = `${bt}px 0`, a.style.minHeight = F + "px", a.style.maxHeight = M + "px", r == null || r(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    d,
    s.trigger,
    s.valueNode,
    a,
    c,
    v,
    b,
    m,
    s.dir,
    r
  ]);
  $e(() => y(), [y]);
  const [S, k] = x.useState();
  $e(() => {
    c && k(window.getComputedStyle(c).zIndex);
  }, [c]);
  const E = x.useCallback(
    (C) => {
      C && w.current === !0 && (y(), h == null || h(), w.current = !1);
    },
    [y, h]
  );
  return /* @__PURE__ */ p.jsx(
    RE,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: E,
      children: /* @__PURE__ */ p.jsx(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ p.jsx(
            q.div,
            {
              ...o,
              ref: f,
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
_v.displayName = ME;
var AE = "SelectPopperPosition", Qc = x.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = bt,
    ...s
  } = e, i = Ka(n);
  return /* @__PURE__ */ p.jsx(
    TC,
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
Qc.displayName = AE;
var [RE, Nd] = xo(mr, {}), qc = "SelectViewport", Ov = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = Hn(qc, n), i = Nd(qc, n), a = we(t, s.onViewportChange), l = x.useRef(0);
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
      /* @__PURE__ */ p.jsx(Wa.Slot, { scope: n, children: /* @__PURE__ */ p.jsx(
        q.div,
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
          onScroll: Y(o.onScroll, (c) => {
            const u = c.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: d } = i;
            if (d != null && d.current && f) {
              const g = Math.abs(l.current - u.scrollTop);
              if (g > 0) {
                const w = window.innerHeight - bt * 2, v = parseFloat(f.style.minHeight), b = parseFloat(f.style.height), m = Math.max(v, b);
                if (m < w) {
                  const h = m + g, y = Math.min(w, h), S = h - y;
                  f.style.height = y + "px", f.style.bottom === "0px" && (u.scrollTop = S > 0 ? S : 0, f.style.justifyContent = "flex-end");
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
Ov.displayName = qc;
var Iv = "SelectGroup", [jE, LE] = xo(Iv), _E = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Rn();
    return /* @__PURE__ */ p.jsx(jE, { scope: n, id: o, children: /* @__PURE__ */ p.jsx(q.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
_E.displayName = Iv;
var Fv = "SelectLabel", OE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = LE(Fv, n);
    return /* @__PURE__ */ p.jsx(q.div, { id: o.id, ...r, ref: t });
  }
);
OE.displayName = Fv;
var ha = "SelectItem", [IE, Vv] = xo(ha), zv = x.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...i
    } = e, a = Wn(ha, n), l = Hn(ha, n), c = a.value === r, [u, f] = x.useState(s ?? ""), [d, g] = x.useState(!1), w = we(
      t,
      (h) => {
        var y;
        return (y = l.itemRefCallback) == null ? void 0 : y.call(l, h, r, o);
      }
    ), v = Rn(), b = x.useRef("touch"), m = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ p.jsx(
      IE,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: v,
        isSelected: c,
        onItemTextChange: x.useCallback((h) => {
          f((y) => y || ((h == null ? void 0 : h.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ p.jsx(
          Wa.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: u,
            children: /* @__PURE__ */ p.jsx(
              q.div,
              {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": d ? "" : void 0,
                "aria-selected": c && d,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: w,
                onFocus: Y(i.onFocus, () => g(!0)),
                onBlur: Y(i.onBlur, () => g(!1)),
                onClick: Y(i.onClick, () => {
                  b.current !== "mouse" && m();
                }),
                onPointerUp: Y(i.onPointerUp, () => {
                  b.current === "mouse" && m();
                }),
                onPointerDown: Y(i.onPointerDown, (h) => {
                  b.current = h.pointerType;
                }),
                onPointerMove: Y(i.onPointerMove, (h) => {
                  var y;
                  b.current = h.pointerType, o ? (y = l.onItemLeave) == null || y.call(l) : b.current === "mouse" && h.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Y(i.onPointerLeave, (h) => {
                  var y;
                  h.currentTarget === document.activeElement && ((y = l.onItemLeave) == null || y.call(l));
                }),
                onKeyDown: Y(i.onKeyDown, (h) => {
                  var S;
                  ((S = l.searchRef) == null ? void 0 : S.current) !== "" && h.key === " " || (bE.includes(h.key) && m(), h.key === " " && h.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
zv.displayName = ha;
var Fo = "SelectItemText", Bv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, i = Wn(Fo, n), a = Hn(Fo, n), l = Vv(Fo, n), c = EE(Fo, n), [u, f] = x.useState(null), d = we(
      t,
      (m) => f(m),
      l.onItemTextChange,
      (m) => {
        var h;
        return (h = a.itemTextRefCallback) == null ? void 0 : h.call(a, m, l.value, l.disabled);
      }
    ), g = u == null ? void 0 : u.textContent, w = x.useMemo(
      () => /* @__PURE__ */ p.jsx("option", { value: l.value, disabled: l.disabled, children: g }, l.value),
      [l.disabled, l.value, g]
    ), { onNativeOptionAdd: v, onNativeOptionRemove: b } = c;
    return $e(() => (v(w), () => b(w)), [v, b, w]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(q.span, { id: l.textId, ...s, ref: d }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? ho.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
Bv.displayName = Fo;
var $v = "SelectItemIndicator", Uv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Vv($v, n).isSelected ? /* @__PURE__ */ p.jsx(q.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Uv.displayName = $v;
var Zc = "SelectScrollUpButton", Wv = x.forwardRef((e, t) => {
  const n = Hn(Zc, e.__scopeSelect), r = Nd(Zc, e.__scopeSelect), [o, s] = x.useState(!1), i = we(t, r.onScrollButtonChange);
  return $e(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollTop > 0;
        s(c);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    Kv,
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
Wv.displayName = Zc;
var Jc = "SelectScrollDownButton", Hv = x.forwardRef((e, t) => {
  const n = Hn(Jc, e.__scopeSelect), r = Nd(Jc, e.__scopeSelect), [o, s] = x.useState(!1), i = we(t, r.onScrollButtonChange);
  return $e(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollHeight - l.clientHeight, u = Math.ceil(l.scrollTop) < c;
        s(u);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    Kv,
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
Hv.displayName = Jc;
var Kv = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = Hn("SelectScrollButton", n), i = x.useRef(null), a = Ha(n), l = x.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return x.useEffect(() => () => l(), [l]), $e(() => {
    var u;
    const c = a().find((f) => f.ref.current === document.activeElement);
    (u = c == null ? void 0 : c.ref.current) == null || u.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ p.jsx(
    q.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: Y(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: Y(o.onPointerMove, () => {
        var c;
        (c = s.onItemLeave) == null || c.call(s), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: Y(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), FE = "SelectSeparator", VE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ p.jsx(q.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
VE.displayName = FE;
var eu = "SelectArrow", zE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ka(n), s = Wn(eu, n), i = Hn(eu, n);
    return s.open && i.position === "popper" ? /* @__PURE__ */ p.jsx(PC, { ...o, ...r, ref: t }) : null;
  }
);
zE.displayName = eu;
var BE = "SelectBubbleInput", Gv = x.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = x.useRef(null), s = we(r, o), i = RC(t);
    return x.useEffect(() => {
      const a = o.current;
      if (!a) return;
      const l = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (i !== t && u) {
        const f = new Event("change", { bubbles: !0 });
        u.call(a, t), a.dispatchEvent(f);
      }
    }, [i, t]), /* @__PURE__ */ p.jsx(
      q.select,
      {
        ...n,
        style: { ...mv, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
Gv.displayName = BE;
function Yv(e) {
  return e === "" || e === void 0;
}
function Xv(e) {
  const t = _n(e), n = x.useRef(""), r = x.useRef(0), o = x.useCallback(
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
function Qv(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = $E(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const l = i.find(
    (c) => c.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function $E(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var UE = Ev, WE = Pv, HE = Nv, KE = Mv, GE = Av, YE = Rv, XE = Ov, QE = zv, qE = Bv, ZE = Uv, JE = Wv, eT = Hv;
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tT = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), qv = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var nT = {
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
const rT = x.forwardRef(
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
      ...nT,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: qv("lucide", o),
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
const Me = (e, t) => {
  const n = x.forwardRef(
    ({ className: r, ...o }, s) => x.createElement(rT, {
      ref: s,
      iconNode: t,
      className: qv(`lucide-${tT(e)}`, r),
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
const Zv = Me("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jv = Me("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ga = Me("Building2", [
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
const oT = Me("Building", [
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
const Ss = Me("CalendarDays", [
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
const _i = Me("Calendar", [
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
const sT = Me("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Md = Me("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e0 = Me("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t0 = Me("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n0 = Me("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const so = Me("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iT = Me("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aT = Me("ExternalLink", [
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
const Jp = Me("List", [
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
const Oi = Me("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = Me("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lT = Me("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function ui({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(UE, { "data-slot": "select", ...e });
}
function eh({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(HE, { "data-slot": "select-value", ...e });
}
function di({
  className: e,
  size: t = "default",
  children: n,
  ...r
}) {
  return /* @__PURE__ */ p.jsxs(
    WE,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: xe(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ p.jsx(KE, { asChild: !0, children: /* @__PURE__ */ p.jsx(Md, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function fi({
  className: e,
  children: t,
  position: n = "popper",
  ...r
}) {
  return /* @__PURE__ */ p.jsx(GE, { children: /* @__PURE__ */ p.jsxs(
    YE,
    {
      "data-slot": "select-content",
      className: xe(
        "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-[9999] max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      ...r,
      children: [
        /* @__PURE__ */ p.jsx(cT, {}),
        /* @__PURE__ */ p.jsx(
          XE,
          {
            className: xe(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ p.jsx(uT, {})
      ]
    }
  ) });
}
function mn({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ p.jsxs(
    QE,
    {
      "data-slot": "select-item",
      className: xe(
        "focus:bg-gray-100 dark:focus:bg-gray-700 focus:text-gray-900 dark:focus:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ p.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ p.jsx(ZE, { children: /* @__PURE__ */ p.jsx(sT, { className: "size-4" }) }) }),
        /* @__PURE__ */ p.jsx(qE, { children: t })
      ]
    }
  );
}
function cT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    JE,
    {
      "data-slot": "select-scroll-up-button",
      className: xe(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p.jsx(n0, { className: "size-4" })
    }
  );
}
function uT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    eT,
    {
      "data-slot": "select-scroll-down-button",
      className: xe(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p.jsx(Md, { className: "size-4" })
    }
  );
}
const tu = x.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ p.jsx(
    "input",
    {
      type: t,
      className: xe(
        "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
tu.displayName = "Input";
var Fl = "rovingFocusGroup.onEntryFocus", dT = { bubbles: !1, cancelable: !0 }, _s = "RovingFocusGroup", [nu, r0, fT] = $y(_s), [pT, o0] = go(
  _s,
  [fT]
), [hT, mT] = pT(_s), s0 = x.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(nu.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(nu.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(gT, { ...e, ref: t }) }) })
);
s0.displayName = _s;
var gT = x.forwardRef((e, t) => {
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
    ...f
  } = e, d = x.useRef(null), g = we(t, d), w = md(s), [v, b] = bs({
    prop: i,
    defaultProp: a ?? null,
    onChange: l,
    caller: _s
  }), [m, h] = x.useState(!1), y = _n(c), S = r0(n), k = x.useRef(!1), [E, C] = x.useState(0);
  return x.useEffect(() => {
    const T = d.current;
    if (T)
      return T.addEventListener(Fl, y), () => T.removeEventListener(Fl, y);
  }, [y]), /* @__PURE__ */ p.jsx(
    hT,
    {
      scope: n,
      orientation: r,
      dir: w,
      loop: o,
      currentTabStopId: v,
      onItemFocus: x.useCallback(
        (T) => b(T),
        [b]
      ),
      onItemShiftTab: x.useCallback(() => h(!0), []),
      onFocusableItemAdd: x.useCallback(
        () => C((T) => T + 1),
        []
      ),
      onFocusableItemRemove: x.useCallback(
        () => C((T) => T - 1),
        []
      ),
      children: /* @__PURE__ */ p.jsx(
        q.div,
        {
          tabIndex: m || E === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: Y(e.onMouseDown, () => {
            k.current = !0;
          }),
          onFocus: Y(e.onFocus, (T) => {
            const R = !k.current;
            if (T.target === T.currentTarget && R && !m) {
              const N = new CustomEvent(Fl, dT);
              if (T.currentTarget.dispatchEvent(N), !N.defaultPrevented) {
                const P = S().filter((I) => I.focusable), M = P.find((I) => I.active), j = P.find((I) => I.id === v), V = [M, j, ...P].filter(
                  Boolean
                ).map((I) => I.ref.current);
                l0(V, u);
              }
            }
            k.current = !1;
          }),
          onBlur: Y(e.onBlur, () => h(!1))
        }
      )
    }
  );
}), i0 = "RovingFocusGroupItem", a0 = x.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: i,
      ...a
    } = e, l = Rn(), c = s || l, u = mT(i0, n), f = u.currentTabStopId === c, d = r0(n), { onFocusableItemAdd: g, onFocusableItemRemove: w, currentTabStopId: v } = u;
    return x.useEffect(() => {
      if (r)
        return g(), () => w();
    }, [r, g, w]), /* @__PURE__ */ p.jsx(
      nu.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ p.jsx(
          q.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": u.orientation,
            ...a,
            ref: t,
            onMouseDown: Y(e.onMouseDown, (b) => {
              r ? u.onItemFocus(c) : b.preventDefault();
            }),
            onFocus: Y(e.onFocus, () => u.onItemFocus(c)),
            onKeyDown: Y(e.onKeyDown, (b) => {
              if (b.key === "Tab" && b.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (b.target !== b.currentTarget) return;
              const m = xT(b, u.orientation, u.dir);
              if (m !== void 0) {
                if (b.metaKey || b.ctrlKey || b.altKey || b.shiftKey) return;
                b.preventDefault();
                let y = d().filter((S) => S.focusable).map((S) => S.ref.current);
                if (m === "last") y.reverse();
                else if (m === "prev" || m === "next") {
                  m === "prev" && y.reverse();
                  const S = y.indexOf(b.currentTarget);
                  y = u.loop ? wT(y, S + 1) : y.slice(S + 1);
                }
                setTimeout(() => l0(y));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: f, hasTabStop: v != null }) : i
          }
        )
      }
    );
  }
);
a0.displayName = i0;
var yT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function vT(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function xT(e, t, n) {
  const r = vT(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return yT[r];
}
function l0(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function wT(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var bT = s0, ST = a0;
function kT(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var Os = (e) => {
  const { present: t, children: n } = e, r = CT(t), o = typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n), s = we(r.ref, ET(o));
  return typeof n == "function" || r.isPresent ? x.cloneElement(o, { ref: s }) : null;
};
Os.displayName = "Presence";
function CT(e) {
  const [t, n] = x.useState(), r = x.useRef(null), o = x.useRef(e), s = x.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = kT(i, {
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
    const c = pi(r.current);
    s.current = a === "mounted" ? c : "none";
  }, [a]), $e(() => {
    const c = r.current, u = o.current;
    if (u !== e) {
      const d = s.current, g = pi(c);
      e ? l("MOUNT") : g === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(u && d !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), $e(() => {
    if (t) {
      let c;
      const u = t.ownerDocument.defaultView ?? window, f = (g) => {
        const v = pi(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && v && (l("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, d = (g) => {
        g.target === t && (s.current = pi(r.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        u.clearTimeout(c), t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
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
function pi(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ET(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ya = "Tabs", [TT, FM] = go(Ya, [
  o0
]), c0 = o0(), [PT, Ad] = TT(Ya), u0 = x.forwardRef(
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
    } = e, u = md(a), [f, d] = bs({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: Ya
    });
    return /* @__PURE__ */ p.jsx(
      PT,
      {
        scope: n,
        baseId: Rn(),
        value: f,
        onValueChange: d,
        orientation: i,
        dir: u,
        activationMode: l,
        children: /* @__PURE__ */ p.jsx(
          q.div,
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
u0.displayName = Ya;
var d0 = "TabsList", f0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = Ad(d0, n), i = c0(n);
    return /* @__PURE__ */ p.jsx(
      bT,
      {
        asChild: !0,
        ...i,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ p.jsx(
          q.div,
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
f0.displayName = d0;
var p0 = "TabsTrigger", h0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, i = Ad(p0, n), a = c0(n), l = y0(i.baseId, r), c = v0(i.baseId, r), u = r === i.value;
    return /* @__PURE__ */ p.jsx(
      ST,
      {
        asChild: !0,
        ...a,
        focusable: !o,
        active: u,
        children: /* @__PURE__ */ p.jsx(
          q.button,
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
            onMouseDown: Y(e.onMouseDown, (f) => {
              !o && f.button === 0 && f.ctrlKey === !1 ? i.onValueChange(r) : f.preventDefault();
            }),
            onKeyDown: Y(e.onKeyDown, (f) => {
              [" ", "Enter"].includes(f.key) && i.onValueChange(r);
            }),
            onFocus: Y(e.onFocus, () => {
              const f = i.activationMode !== "manual";
              !u && !o && f && i.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
h0.displayName = p0;
var m0 = "TabsContent", g0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...i } = e, a = Ad(m0, n), l = y0(a.baseId, r), c = v0(a.baseId, r), u = r === a.value, f = x.useRef(u);
    return x.useEffect(() => {
      const d = requestAnimationFrame(() => f.current = !1);
      return () => cancelAnimationFrame(d);
    }, []), /* @__PURE__ */ p.jsx(Os, { present: o || u, children: ({ present: d }) => /* @__PURE__ */ p.jsx(
      q.div,
      {
        "data-state": u ? "active" : "inactive",
        "data-orientation": a.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !d,
        id: c,
        tabIndex: 0,
        ...i,
        ref: t,
        style: {
          ...e.style,
          animationDuration: f.current ? "0s" : void 0
        },
        children: d && s
      }
    ) });
  }
);
g0.displayName = m0;
function y0(e, t) {
  return `${e}-trigger-${t}`;
}
function v0(e, t) {
  return `${e}-content-${t}`;
}
var DT = u0, NT = f0, MT = h0, AT = g0;
function RT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    DT,
    {
      "data-slot": "tabs",
      className: xe("flex flex-col gap-2", e),
      ...t
    }
  );
}
function th({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    NT,
    {
      "data-slot": "tabs-list",
      className: xe(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
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
  return /* @__PURE__ */ p.jsx(
    MT,
    {
      "data-slot": "tabs-trigger",
      className: xe(
        "data-[state=active]:bg-background cursor-pointer dark:data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus:outline-none",
        e
      ),
      ...t
    }
  );
}
function hi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    AT,
    {
      "data-slot": "tabs-content",
      className: xe("flex-1 outline-none", e),
      ...t
    }
  );
}
const jT = (e, t) => {
  const n = [];
  if (!e || !t) {
    const i = /* @__PURE__ */ new Date(), a = i.getFullYear(), l = i.getMonth();
    return nh(a, l);
  }
  const r = new Date(e), o = new Date(t);
  let s = new Date(r.getFullYear(), r.getMonth(), 1);
  for (; s <= o; ) {
    const i = nh(s.getFullYear(), s.getMonth());
    n.push(...i), s.setMonth(s.getMonth() + 1);
  }
  return n;
}, nh = (e, t) => {
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
}, LT = (e) => {
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
function _T(e = {}) {
  const [t, n] = x.useState(!0);
  x.useEffect(() => {
    const i = setTimeout(() => {
      n(!1);
    }, 500);
    return () => clearTimeout(i);
  }, [e.start_date, e.end_date]);
  const r = K.useMemo(() => jT(e.start_date, e.end_date), [e.start_date, e.end_date]), o = K.useMemo(() => LT(r), [r]), s = K.useMemo(() => {
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
class OT {
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
      Object.entries(t).forEach(([f, d]) => {
        d != null && d !== "" && o.append(f, d.toString());
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
        const f = await c.text();
        throw new Error(`HTTP error! status: ${c.status}, response: ${f}`);
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
const Cr = new OT(), IT = [
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
], rh = (e) => {
  if (!e || typeof e != "object")
    return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    IT.includes(r) && (t[n] = r);
  }), t;
};
function x0(e = {}) {
  const [t, n] = x.useState([]), [r, o] = x.useState({}), [s, i] = x.useState({}), [a, l] = x.useState(!0), [c, u] = x.useState(!1), [f, d] = x.useState(null), [g, w] = x.useState(0), [v, b] = x.useState(0), [m, h] = x.useState(e), [y, S] = x.useState(), k = x.useRef(""), E = x.useRef(!0);
  x.useEffect(() => {
    const P = JSON.stringify(e);
    if (E.current) {
      E.current = !1, k.current = P, h(e);
      return;
    }
    k.current !== P && (k.current = P, h(e));
  }, [e]);
  const C = x.useCallback(async () => {
    var P;
    try {
      l(!0), d(null);
      const M = await Cr.fetchEvents(m);
      if ((P = M.performance) != null && P.server_processed) {
        const j = M.events.map((_) => ({
          ..._,
          startDate: new Date(_.startDate),
          endDate: new Date(_.endDate)
        }));
        n(j), o(M.eventMetadata || {}), i(rh(M.categoryMappings)), w(M.total), b(M.pages), S(M.pagination);
      } else {
        const j = [], _ = {};
        M.events.forEach((V) => {
          const I = Cr.transformWordPressEventToEvent(V), B = Cr.transformWordPressEventToMetadata(V);
          j.push(I), _[I.id] = B;
        }), n(j), o(_), w(M.total), b(M.pages), S(M.pagination);
      }
    } catch (M) {
      console.error("Error fetching events:", M), n([]), o({}), i({}), w(0), b(0), d(M instanceof Error ? M.message : "Failed to load events");
    } finally {
      l(!1);
    }
  }, [JSON.stringify(m)]);
  x.useEffect(() => {
    C();
  }, [C]);
  const T = x.useCallback(() => {
    C();
  }, [C]), R = x.useCallback(async () => {
    var P;
    if (!(!(y != null && y.hasMore) || c))
      try {
        u(!0), d(null);
        const M = {
          ...m,
          page: y.nextPage || (m.page || 1) + 1
        }, j = await Cr.fetchEvents(M);
        if ((P = j.performance) != null && P.server_processed) {
          const _ = j.events.map((V) => ({
            ...V,
            startDate: new Date(V.startDate),
            endDate: new Date(V.endDate)
          }));
          n((V) => [...V, ..._]), o((V) => ({ ...V, ...j.eventMetadata || {} })), i((V) => ({
            ...V,
            ...rh(j.categoryMappings)
          })), S(j.pagination);
        } else {
          const _ = [], V = {};
          j.events.forEach((I) => {
            const B = Cr.transformWordPressEventToEvent(I), D = Cr.transformWordPressEventToMetadata(I);
            _.push(B), V[B.id] = D;
          }), n((I) => [...I, ..._]), o((I) => ({ ...I, ...V })), S(j.pagination);
        }
      } catch (M) {
        console.error("Error loading more events:", M), d(M instanceof Error ? M.message : "Failed to load more events");
      } finally {
        u(!1);
      }
  }, [JSON.stringify(m), JSON.stringify(y), c]), N = x.useCallback((P) => {
    h((M) => ({ ...M, ...P }));
  }, []);
  return {
    events: t,
    eventMetadata: r,
    loading: a,
    error: f,
    total: g,
    pages: v,
    refetch: T,
    setFilters: N,
    hasMore: (y == null ? void 0 : y.hasMore) || !1,
    loadMore: R,
    loadingMore: c,
    pagination: y,
    categoryMappings: s
  };
}
const FT = {
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
function VT() {
  const [e, t] = x.useState([]), [n, r] = x.useState(!0), [o, s] = x.useState(null);
  return x.useEffect(() => {
    (async () => {
      try {
        r(!0);
        const a = await FT.getAll();
        t(a), s(null);
      } catch {
        s("Failed to load organizations");
      } finally {
        r(!1);
      }
    })();
  }, []), { organizations: e, loading: n, error: o };
}
function w0() {
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
          const f = await fetch("/wp-json/unbc-events/v1/category-config");
          if (f.ok) {
            const d = await f.json();
            Object.entries(d).forEach(([g, w]) => {
              typeof w == "string" ? c[g] = w : w && typeof w == "object" && "variant" in w && w.variant && (c[g] = w.variant);
            });
          }
        } catch (f) {
          console.warn("Error fetching category color config:", f);
        }
        const u = l.map((f) => ({
          id: f.id,
          name: f.name,
          slug: f.slug,
          count: f.count,
          variant: c[f.slug] || "default"
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
function zT() {
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
var Xa = "Dialog", [b0, VM] = go(Xa), [BT, At] = b0(Xa), S0 = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !0
  } = e, a = x.useRef(null), l = x.useRef(null), [c, u] = bs({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Xa
  });
  return /* @__PURE__ */ p.jsx(
    BT,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: Rn(),
      titleId: Rn(),
      descriptionId: Rn(),
      open: c,
      onOpenChange: u,
      onOpenToggle: x.useCallback(() => u((f) => !f), [u]),
      modal: i,
      children: n
    }
  );
};
S0.displayName = Xa;
var k0 = "DialogTrigger", $T = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = At(k0, n), s = we(t, o.triggerRef);
    return /* @__PURE__ */ p.jsx(
      q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ld(o.open),
        ...r,
        ref: s,
        onClick: Y(e.onClick, o.onOpenToggle)
      }
    );
  }
);
$T.displayName = k0;
var Rd = "DialogPortal", [UT, C0] = b0(Rd, {
  forceMount: void 0
}), E0 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = At(Rd, t);
  return /* @__PURE__ */ p.jsx(UT, { scope: t, forceMount: n, children: x.Children.map(r, (i) => /* @__PURE__ */ p.jsx(Os, { present: n || s.open, children: /* @__PURE__ */ p.jsx(Pd, { asChild: !0, container: o, children: i }) })) });
};
E0.displayName = Rd;
var ma = "DialogOverlay", T0 = x.forwardRef(
  (e, t) => {
    const n = C0(ma, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = At(ma, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ p.jsx(Os, { present: r || s.open, children: /* @__PURE__ */ p.jsx(HT, { ...o, ref: t }) }) : null;
  }
);
T0.displayName = ma;
var WT = /* @__PURE__ */ vs("DialogOverlay.RemoveScroll"), HT = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = At(ma, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p.jsx(Dd, { as: WT, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ p.jsx(
        q.div,
        {
          "data-state": Ld(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), gr = "DialogContent", P0 = x.forwardRef(
  (e, t) => {
    const n = C0(gr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = At(gr, e.__scopeDialog);
    return /* @__PURE__ */ p.jsx(Os, { present: r || s.open, children: s.modal ? /* @__PURE__ */ p.jsx(KT, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(GT, { ...o, ref: t }) });
  }
);
P0.displayName = gr;
var KT = x.forwardRef(
  (e, t) => {
    const n = At(gr, e.__scopeDialog), r = x.useRef(null), o = we(t, n.contentRef, r);
    return x.useEffect(() => {
      const s = r.current;
      if (s) return yv(s);
    }, []), /* @__PURE__ */ p.jsx(
      D0,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Y(e.onCloseAutoFocus, (s) => {
          var i;
          s.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: Y(e.onPointerDownOutside, (s) => {
          const i = s.detail.originalEvent, a = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || a) && s.preventDefault();
        }),
        onFocusOutside: Y(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), GT = x.forwardRef(
  (e, t) => {
    const n = At(gr, e.__scopeDialog), r = x.useRef(!1), o = x.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      D0,
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
), D0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = At(gr, n), l = x.useRef(null), c = we(t, l);
    return Hy(), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        yd,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ p.jsx(
            gd,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": Ld(a.open),
              ...i,
              ref: c,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(YT, { titleId: a.titleId }),
        /* @__PURE__ */ p.jsx(QT, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), jd = "DialogTitle", N0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = At(jd, n);
    return /* @__PURE__ */ p.jsx(q.h2, { id: o.titleId, ...r, ref: t });
  }
);
N0.displayName = jd;
var M0 = "DialogDescription", A0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = At(M0, n);
    return /* @__PURE__ */ p.jsx(q.p, { id: o.descriptionId, ...r, ref: t });
  }
);
A0.displayName = M0;
var R0 = "DialogClose", j0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = At(R0, n);
    return /* @__PURE__ */ p.jsx(
      q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Y(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
j0.displayName = R0;
function Ld(e) {
  return e ? "open" : "closed";
}
var L0 = "DialogTitleWarning", [zM, _0] = RS(L0, {
  contentName: gr,
  titleName: jd,
  docsSlug: "dialog"
}), YT = ({ titleId: e }) => {
  const t = _0(L0), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return x.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, XT = "DialogDescriptionWarning", QT = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${_0(XT).contentName}}.`;
  return x.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, qT = S0, ZT = E0, O0 = T0, I0 = P0, F0 = N0, V0 = A0, JT = j0;
const eP = qT, tP = ZT, z0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  O0,
  {
    ref: n,
    className: xe(
      "fixed inset-0 z-[99999] bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
z0.displayName = O0.displayName;
const B0 = x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.jsxs(tP, { children: [
  /* @__PURE__ */ p.jsx(z0, {}),
  /* @__PURE__ */ p.jsxs(
    I0,
    {
      ref: r,
      className: xe(
        "fixed left-[50%] top-[50%] z-[99999] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ p.jsxs(JT, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-all duration-200 hover:opacity-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 p-1", children: [
          /* @__PURE__ */ p.jsx(lT, { className: "h-4 w-4" }),
          /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
B0.displayName = I0.displayName;
const $0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  "div",
  {
    className: xe(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
$0.displayName = "DialogHeader";
const U0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  "div",
  {
    className: xe(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
U0.displayName = "DialogFooter";
const W0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  F0,
  {
    ref: n,
    className: xe(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
W0.displayName = F0.displayName;
const H0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  V0,
  {
    ref: n,
    className: xe("text-sm text-muted-foreground", e),
    ...t
  }
));
H0.displayName = V0.displayName;
function io({
  className: e,
  variant: t = "default",
  size: n = "default",
  ...r
}) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      className: xe(
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
function K0({ event: e, eventMetadata: t, open: n, onOpenChange: r }) {
  const [o, s] = K.useState(!1);
  if (K.useEffect(() => {
    var u;
    e && ((u = t[e.id]) != null && u.website) && console.log("Event website URL:", t[e.id].website);
  }, [e, t]), !e) return null;
  const i = t[e.id], a = (u, f = 180) => {
    if (!u || u.length <= f) return u;
    const d = u.substring(0, f), g = d.lastIndexOf("."), w = d.lastIndexOf(" "), v = g > f - 50 ? g + 1 : w;
    return u.substring(0, v > 0 ? v : f).trim();
  }, l = (u) => {
    const f = e.startDate, d = e.endDate || new Date(f.getTime() + 60 * 60 * 1e3), g = (w) => w.toISOString().replace(/-|:|\.\d\d\d/g, "");
    switch (u) {
      case "google":
        const w = new URL("https://calendar.google.com/calendar/render");
        return w.searchParams.append("action", "TEMPLATE"), w.searchParams.append("text", e.title), w.searchParams.append("dates", `${g(f)}/${g(d)}`), w.searchParams.append("details", e.description || ""), i != null && i.location && w.searchParams.append("location", i.location), w.toString();
      case "outlook":
      case "apple":
        const v = [
          "BEGIN:VCALENDAR",
          "VERSION:2.0",
          "PRODID:-//UNBC Calendar//Events//EN",
          "METHOD:PUBLISH",
          "BEGIN:VEVENT",
          `UID:${e.id}@unbc-calendar`,
          `DTSTART:${g(f)}`,
          `DTEND:${g(d)}`,
          `SUMMARY:${e.title}`,
          `DESCRIPTION:${e.description || ""}`,
          i != null && i.location ? `LOCATION:${i.location}` : "",
          i != null && i.website ? `URL:${i.website}` : "",
          `ORGANIZER;CN=${(i == null ? void 0 : i.organization) || "UNBC"}:MAILTO:events@unbc.ca`,
          "STATUS:CONFIRMED",
          "END:VEVENT",
          "END:VCALENDAR"
        ].filter((b) => b).join(`
`);
        return `data:text/calendar;charset=utf8,${encodeURIComponent(v)}`;
    }
  }, c = {
    clubs: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    unbc: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    organizations: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    sports: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
  };
  return /* @__PURE__ */ p.jsx(eP, { open: n, onOpenChange: r, children: /* @__PURE__ */ p.jsxs(B0, { className: "max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 sm:w-full p-4 sm:p-6", children: [
    /* @__PURE__ */ p.jsxs($0, { children: [
      /* @__PURE__ */ p.jsx(W0, { className: "text-xl text-gray-900 dark:text-gray-100", children: e.title }),
      e.description && /* @__PURE__ */ p.jsxs("div", { className: "mt-2", children: [
        /* @__PURE__ */ p.jsx(H0, { className: `text-gray-600 dark:text-gray-400 leading-relaxed break-words ${o ? "max-h-[40vh] overflow-y-auto pr-2" : ""}`, children: o ? e.description : a(e.description) }),
        e.description.length > 180 && /* @__PURE__ */ p.jsx(
          "button",
          {
            onClick: () => s(!o),
            className: "inline-flex items-center gap-1 mt-3 px-3 py-2 text-sm text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100 hover:bg-blue-50 dark:hover:bg-blue-900/20 active:bg-blue-100 dark:active:bg-blue-900/30 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
            children: o ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
              "Show less",
              /* @__PURE__ */ p.jsx(n0, { className: "h-4 w-4" })
            ] }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
              "Read more",
              /* @__PURE__ */ p.jsx(Md, { className: "h-4 w-4" })
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "space-y-4 my-4", children: /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
        /* @__PURE__ */ p.jsx(so, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
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
          /* @__PURE__ */ p.jsx(Ls, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: i.location })
        ] }),
        i.organization && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(Ga, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: i.organization })
        ] }),
        i.cost && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(iT, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: i.cost })
        ] }),
        i.website && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(aT, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
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
          i.category && /* @__PURE__ */ p.jsx(io, { className: c[i.category] || "bg-gray-100 text-gray-800", children: i.category.charAt(0).toUpperCase() + i.category.slice(1) }),
          i.registrationRequired && /* @__PURE__ */ p.jsx(io, { variant: "outline", className: "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300", children: "Registration Required" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsxs(U0, { className: "flex-col sm:flex-col gap-2", children: [
      /* @__PURE__ */ p.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400 mb-2", children: "Add to your calendar:" }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex gap-2 w-full", children: [
        /* @__PURE__ */ p.jsxs(
          Zt,
          {
            variant: "outline",
            className: "flex-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 text-xs sm:text-sm",
            onClick: () => window.open(l("google"), "_blank"),
            children: [
              /* @__PURE__ */ p.jsx(_i, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Google"
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Zt,
          {
            variant: "outline",
            className: "flex-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 text-xs sm:text-sm",
            onClick: () => {
              const u = l("outlook"), f = document.createElement("a");
              f.href = u, f.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, f.click();
            },
            children: [
              /* @__PURE__ */ p.jsx(_i, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Outlook"
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Zt,
          {
            variant: "outline",
            className: "flex-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 text-xs sm:text-sm",
            onClick: () => {
              const u = l("apple"), f = document.createElement("a");
              f.href = u, f.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, f.click();
            },
            children: [
              /* @__PURE__ */ p.jsx(_i, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Apple"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
const _d = x.createContext({});
function Od(e) {
  const t = x.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Qa = x.createContext(null), Id = x.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class nP extends x.Component {
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
function rP({ children: e, isPresent: t }) {
  const n = x.useId(), r = x.useRef(null), o = x.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: s } = x.useContext(Id);
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
  }, [t]), p.jsx(nP, { isPresent: t, childRef: r, sizeRef: o, children: x.cloneElement(e, { ref: r }) });
}
const oP = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: i }) => {
  const a = Od(sP), l = x.useId(), c = x.useCallback((f) => {
    a.set(f, !0);
    for (const d of a.values())
      if (!d)
        return;
    r && r();
  }, [a, r]), u = x.useMemo(
    () => ({
      id: l,
      initial: t,
      isPresent: n,
      custom: o,
      onExitComplete: c,
      register: (f) => (a.set(f, !1), () => a.delete(f))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    s ? [Math.random(), c] : [n, c]
  );
  return x.useMemo(() => {
    a.forEach((f, d) => a.set(d, !1));
  }, [n]), x.useEffect(() => {
    !n && !a.size && r && r();
  }, [n]), i === "popLayout" && (e = p.jsx(rP, { isPresent: n, children: e })), p.jsx(Qa.Provider, { value: u, children: e });
};
function sP() {
  return /* @__PURE__ */ new Map();
}
function G0(e = !0) {
  const t = x.useContext(Qa);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t, s = x.useId();
  x.useEffect(() => {
    e && o(s);
  }, [e]);
  const i = x.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, i] : [!0];
}
const mi = (e) => e.key || "";
function oh(e) {
  const t = [];
  return x.Children.forEach(e, (n) => {
    x.isValidElement(n) && t.push(n);
  }), t;
}
const Fd = typeof window < "u", Y0 = Fd ? x.useLayoutEffect : x.useEffect, sh = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: o = !0, mode: s = "sync", propagate: i = !1 }) => {
  const [a, l] = G0(i), c = x.useMemo(() => oh(e), [e]), u = i && !a ? [] : c.map(mi), f = x.useRef(!0), d = x.useRef(c), g = Od(() => /* @__PURE__ */ new Map()), [w, v] = x.useState(c), [b, m] = x.useState(c);
  Y0(() => {
    f.current = !1, d.current = c;
    for (let S = 0; S < b.length; S++) {
      const k = mi(b[S]);
      u.includes(k) ? g.delete(k) : g.get(k) !== !0 && g.set(k, !1);
    }
  }, [b, u.length, u.join("-")]);
  const h = [];
  if (c !== w) {
    let S = [...c];
    for (let k = 0; k < b.length; k++) {
      const E = b[k], C = mi(E);
      u.includes(C) || (S.splice(k, 0, E), h.push(E));
    }
    s === "wait" && h.length && (S = h), m(oh(S)), v(c);
    return;
  }
  const { forceRender: y } = x.useContext(_d);
  return p.jsx(p.Fragment, { children: b.map((S) => {
    const k = mi(S), E = i && !a ? !1 : c === b || u.includes(k), C = () => {
      if (g.has(k))
        g.set(k, !0);
      else
        return;
      let T = !0;
      g.forEach((R) => {
        R || (T = !1);
      }), T && (y == null || y(), m(d.current), i && (l == null || l()), r && r());
    };
    return p.jsx(oP, { isPresent: E, initial: !f.current || n ? void 0 : !1, custom: E ? void 0 : t, presenceAffectsLayout: o, mode: s, onExitComplete: E ? void 0 : C, children: S }, k);
  }) });
}, st = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let X0 = st;
// @__NO_SIDE_EFFECTS__
function Vd(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const ao = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Jt = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, en = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, iP = {
  useManualTiming: !1
};
function aP(e) {
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
    schedule: (c, u = !1, f = !1) => {
      const g = f && r ? t : n;
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
const gi = [
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
], lP = 40;
function Q0(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = () => n = !0, i = gi.reduce((m, h) => (m[h] = aP(s), m), {}), { read: a, resolveKeyframes: l, update: c, preRender: u, render: f, postRender: d } = i, g = () => {
    const m = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(m - o.timestamp, lP), 1), o.timestamp = m, o.isProcessing = !0, a.process(o), l.process(o), c.process(o), u.process(o), f.process(o), d.process(o), o.isProcessing = !1, n && t && (r = !1, e(g));
  }, w = () => {
    n = !0, r = !0, o.isProcessing || e(g);
  };
  return { schedule: gi.reduce((m, h) => {
    const y = i[h];
    return m[h] = (S, k = !1, E = !1) => (n || w(), y.schedule(S, k, E)), m;
  }, {}), cancel: (m) => {
    for (let h = 0; h < gi.length; h++)
      i[gi[h]].cancel(m);
  }, state: o, steps: i };
}
const { schedule: ce, cancel: Fn, state: je, steps: Vl } = Q0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : st, !0), q0 = x.createContext({ strict: !1 }), ih = {
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
}, lo = {};
for (const e in ih)
  lo[e] = {
    isEnabled: (t) => ih[e].some((n) => !!t[n])
  };
function cP(e) {
  for (const t in e)
    lo[t] = {
      ...lo[t],
      ...e[t]
    };
}
const uP = /* @__PURE__ */ new Set([
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
function ga(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || uP.has(e);
}
let Z0 = (e) => !ga(e);
function dP(e) {
  e && (Z0 = (t) => t.startsWith("on") ? !ga(t) : e(t));
}
try {
  dP(require("@emotion/is-prop-valid").default);
} catch {
}
function fP(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (Z0(o) || n === !0 && ga(o) || !t && !ga(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function pP(e) {
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
const qa = x.createContext({});
function ks(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Za(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const zd = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Bd = ["initial", ...zd];
function Ja(e) {
  return Za(e.animate) || Bd.some((t) => ks(e[t]));
}
function J0(e) {
  return !!(Ja(e) || e.variants);
}
function hP(e, t) {
  if (Ja(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ks(n) ? n : void 0,
      animate: ks(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function mP(e) {
  const { initial: t, animate: n } = hP(e, x.useContext(qa));
  return x.useMemo(() => ({ initial: t, animate: n }), [ah(t), ah(n)]);
}
function ah(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const gP = Symbol.for("motionComponentSymbol");
function Ir(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function yP(e, t, n) {
  return x.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Ir(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const $d = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), vP = "framerAppearId", ex = "data-" + $d(vP), { schedule: Ud } = Q0(queueMicrotask, !1), tx = x.createContext({});
function xP(e, t, n, r, o) {
  var s, i;
  const { visualElement: a } = x.useContext(qa), l = x.useContext(q0), c = x.useContext(Qa), u = x.useContext(Id).reducedMotion, f = x.useRef(null);
  r = r || l.renderer, !f.current && r && (f.current = r(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: u
  }));
  const d = f.current, g = x.useContext(tx);
  d && !d.projection && o && (d.type === "html" || d.type === "svg") && wP(f.current, n, o, g);
  const w = x.useRef(!1);
  x.useInsertionEffect(() => {
    d && w.current && d.update(n, c);
  });
  const v = n[ex], b = x.useRef(!!v && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, v)) && ((i = window.MotionHasOptimisedAnimation) === null || i === void 0 ? void 0 : i.call(window, v)));
  return Y0(() => {
    d && (w.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), Ud.render(d.render), b.current && d.animationState && d.animationState.animateChanges());
  }), x.useEffect(() => {
    d && (!b.current && d.animationState && d.animationState.animateChanges(), b.current && (queueMicrotask(() => {
      var m;
      (m = window.MotionHandoffMarkAsComplete) === null || m === void 0 || m.call(window, v);
    }), b.current = !1));
  }), d;
}
function wP(e, t, n, r) {
  const { layoutId: o, layout: s, drag: i, dragConstraints: a, layoutScroll: l, layoutRoot: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : nx(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: s,
    alwaysMeasureLayout: !!i || a && Ir(a),
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
function nx(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : nx(e.parent);
}
function bP({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  var s, i;
  e && cP(e);
  function a(c, u) {
    let f;
    const d = {
      ...x.useContext(Id),
      ...c,
      layoutId: SP(c)
    }, { isStatic: g } = d, w = mP(c), v = r(c, g);
    if (!g && Fd) {
      kP();
      const b = CP(d);
      f = b.MeasureLayout, w.visualElement = xP(o, v, d, t, b.ProjectionNode);
    }
    return p.jsxs(qa.Provider, { value: w, children: [f && w.visualElement ? p.jsx(f, { visualElement: w.visualElement, ...d }) : null, n(o, c, yP(v, w.visualElement, u), v, g, w.visualElement)] });
  }
  a.displayName = `motion.${typeof o == "string" ? o : `create(${(i = (s = o.displayName) !== null && s !== void 0 ? s : o.name) !== null && i !== void 0 ? i : ""})`}`;
  const l = x.forwardRef(a);
  return l[gP] = o, l;
}
function SP({ layoutId: e }) {
  const t = x.useContext(_d).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function kP(e, t) {
  x.useContext(q0).strict;
}
function CP(e) {
  const { drag: t, layout: n } = lo;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const EP = [
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
function Wd(e) {
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
      !!(EP.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function lh(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Hd(e, t, n, r) {
  if (typeof t == "function") {
    const [o, s] = lh(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, s] = lh(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  return t;
}
const ru = (e) => Array.isArray(e), TP = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), PP = (e) => ru(e) ? e[e.length - 1] || 0 : e, ze = (e) => !!(e && e.getVelocity);
function Ii(e) {
  const t = ze(e) ? e.get() : e;
  return TP(t) ? t.toValue() : t;
}
function DP({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, o, s) {
  const i = {
    latestValues: NP(r, o, s, e),
    renderState: t()
  };
  return n && (i.onMount = (a) => n({ props: r, current: a, ...i }), i.onUpdate = (a) => n(a)), i;
}
const rx = (e) => (t, n) => {
  const r = x.useContext(qa), o = x.useContext(Qa), s = () => DP(e, t, r, o);
  return n ? s() : Od(s);
};
function NP(e, t, n, r) {
  const o = {}, s = r(e, {});
  for (const d in s)
    o[d] = Ii(s[d]);
  let { initial: i, animate: a } = e;
  const l = Ja(e), c = J0(e);
  t && c && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || i === !1;
  const f = u ? a : i;
  if (f && typeof f != "boolean" && !Za(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let g = 0; g < d.length; g++) {
      const w = Hd(e, d[g]);
      if (w) {
        const { transitionEnd: v, transition: b, ...m } = w;
        for (const h in m) {
          let y = m[h];
          if (Array.isArray(y)) {
            const S = u ? y.length - 1 : 0;
            y = y[S];
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
const wo = [
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
], xr = new Set(wo), ox = (e) => (t) => typeof t == "string" && t.startsWith(e), sx = /* @__PURE__ */ ox("--"), MP = /* @__PURE__ */ ox("var(--"), Kd = (e) => MP(e) ? AP.test(e.split("/*")[0].trim()) : !1, AP = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, ix = (e, t) => t && typeof e == "number" ? t.transform(e) : e, ln = (e, t, n) => n > t ? t : n < e ? e : n, bo = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Cs = {
  ...bo,
  transform: (e) => ln(0, 1, e)
}, yi = {
  ...bo,
  default: 1
}, Is = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), yn = /* @__PURE__ */ Is("deg"), Bt = /* @__PURE__ */ Is("%"), W = /* @__PURE__ */ Is("px"), RP = /* @__PURE__ */ Is("vh"), jP = /* @__PURE__ */ Is("vw"), ch = {
  ...Bt,
  parse: (e) => Bt.parse(e) / 100,
  transform: (e) => Bt.transform(e * 100)
}, LP = {
  // Border props
  borderWidth: W,
  borderTopWidth: W,
  borderRightWidth: W,
  borderBottomWidth: W,
  borderLeftWidth: W,
  borderRadius: W,
  radius: W,
  borderTopLeftRadius: W,
  borderTopRightRadius: W,
  borderBottomRightRadius: W,
  borderBottomLeftRadius: W,
  // Positioning props
  width: W,
  maxWidth: W,
  height: W,
  maxHeight: W,
  top: W,
  right: W,
  bottom: W,
  left: W,
  // Spacing props
  padding: W,
  paddingTop: W,
  paddingRight: W,
  paddingBottom: W,
  paddingLeft: W,
  margin: W,
  marginTop: W,
  marginRight: W,
  marginBottom: W,
  marginLeft: W,
  // Misc
  backgroundPositionX: W,
  backgroundPositionY: W
}, _P = {
  rotate: yn,
  rotateX: yn,
  rotateY: yn,
  rotateZ: yn,
  scale: yi,
  scaleX: yi,
  scaleY: yi,
  scaleZ: yi,
  skew: yn,
  skewX: yn,
  skewY: yn,
  distance: W,
  translateX: W,
  translateY: W,
  translateZ: W,
  x: W,
  y: W,
  z: W,
  perspective: W,
  transformPerspective: W,
  opacity: Cs,
  originX: ch,
  originY: ch,
  originZ: W
}, uh = {
  ...bo,
  transform: Math.round
}, Gd = {
  ...LP,
  ..._P,
  zIndex: uh,
  size: W,
  // SVG
  fillOpacity: Cs,
  strokeOpacity: Cs,
  numOctaves: uh
}, OP = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, IP = wo.length;
function FP(e, t, n) {
  let r = "", o = !0;
  for (let s = 0; s < IP; s++) {
    const i = wo[s], a = e[i];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (i.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const c = ix(a, Gd[i]);
      if (!l) {
        o = !1;
        const u = OP[i] || i;
        r += `${u}(${c}) `;
      }
      n && (t[i] = c);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function Yd(e, t, n) {
  const { style: r, vars: o, transformOrigin: s } = e;
  let i = !1, a = !1;
  for (const l in t) {
    const c = t[l];
    if (xr.has(l)) {
      i = !0;
      continue;
    } else if (sx(l)) {
      o[l] = c;
      continue;
    } else {
      const u = ix(c, Gd[l]);
      l.startsWith("origin") ? (a = !0, s[l] = u) : r[l] = u;
    }
  }
  if (t.transform || (i || n ? r.transform = FP(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = s;
    r.transformOrigin = `${l} ${c} ${u}`;
  }
}
const VP = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, zP = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function BP(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const s = o ? VP : zP;
  e[s.offset] = W.transform(-r);
  const i = W.transform(t), a = W.transform(n);
  e[s.array] = `${i} ${a}`;
}
function dh(e, t, n) {
  return typeof e == "string" ? e : W.transform(t + n * e);
}
function $P(e, t, n) {
  const r = dh(t, e.x, e.width), o = dh(n, e.y, e.height);
  return `${r} ${o}`;
}
function Xd(e, {
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
}, u, f) {
  if (Yd(e, c, f), u) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: d, style: g, dimensions: w } = e;
  d.transform && (w && (g.transform = d.transform), delete d.transform), w && (o !== void 0 || s !== void 0 || g.transform) && (g.transformOrigin = $P(w, o !== void 0 ? o : 0.5, s !== void 0 ? s : 0.5)), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && BP(d, i, a, l, !1);
}
const Qd = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), ax = () => ({
  ...Qd(),
  attrs: {}
}), qd = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function lx(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
const cx = /* @__PURE__ */ new Set([
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
function ux(e, t, n, r) {
  lx(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(cx.has(o) ? o : $d(o), t.attrs[o]);
}
const ya = {};
function UP(e) {
  Object.assign(ya, e);
}
function dx(e, { layout: t, layoutId: n }) {
  return xr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!ya[e] || e === "opacity");
}
function Zd(e, t, n) {
  var r;
  const { style: o } = e, s = {};
  for (const i in o)
    (ze(o[i]) || t.style && ze(t.style[i]) || dx(i, e) || ((r = n == null ? void 0 : n.getValue(i)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[i] = o[i]);
  return s;
}
function fx(e, t, n) {
  const r = Zd(e, t, n);
  for (const o in e)
    if (ze(e[o]) || ze(t[o])) {
      const s = wo.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[s] = e[o];
    }
  return r;
}
function WP(e, t) {
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
const fh = ["x", "y", "width", "height", "cx", "cy", "r"], HP = {
  useVisualState: rx({
    scrapeMotionValuesFromProps: fx,
    createRenderState: ax,
    onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: o }) => {
      if (!n)
        return;
      let s = !!e.drag;
      if (!s) {
        for (const a in o)
          if (xr.has(a)) {
            s = !0;
            break;
          }
      }
      if (!s)
        return;
      let i = !t;
      if (t)
        for (let a = 0; a < fh.length; a++) {
          const l = fh[a];
          e[l] !== t[l] && (i = !0);
        }
      i && ce.read(() => {
        WP(n, r), ce.render(() => {
          Xd(r, o, qd(n.tagName), e.transformTemplate), ux(n, r);
        });
      });
    }
  })
}, KP = {
  useVisualState: rx({
    scrapeMotionValuesFromProps: Zd,
    createRenderState: Qd
  })
};
function px(e, t, n) {
  for (const r in t)
    !ze(t[r]) && !dx(r, n) && (e[r] = t[r]);
}
function GP({ transformTemplate: e }, t) {
  return x.useMemo(() => {
    const n = Qd();
    return Yd(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function YP(e, t) {
  const n = e.style || {}, r = {};
  return px(r, n, e), Object.assign(r, GP(e, t)), r;
}
function XP(e, t) {
  const n = {}, r = YP(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function QP(e, t, n, r) {
  const o = x.useMemo(() => {
    const s = ax();
    return Xd(s, t, qd(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    px(s, e.style, e), o.style = { ...s, ...o.style };
  }
  return o;
}
function qP(e = !1) {
  return (n, r, o, { latestValues: s }, i) => {
    const l = (Wd(n) ? QP : XP)(r, s, i, n), c = fP(r, typeof n == "string", e), u = n !== x.Fragment ? { ...c, ...l, ref: o } : {}, { children: f } = r, d = x.useMemo(() => ze(f) ? f.get() : f, [f]);
    return x.createElement(n, {
      ...u,
      children: d
    });
  };
}
function ZP(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const i = {
      ...Wd(r) ? HP : KP,
      preloadedFeatures: e,
      useRender: qP(o),
      createVisualElement: t,
      Component: r
    };
    return bP(i);
  };
}
function hx(e, t) {
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
function el(e, t, n) {
  const r = e.getProps();
  return Hd(r, t, n !== void 0 ? n : r.custom, e);
}
const JP = /* @__PURE__ */ Vd(() => window.ScrollTimeline !== void 0);
class eD {
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
      if (JP() && o.attachTimeline)
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
class tD extends eD {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function Jd(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const ou = 2e4;
function mx(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < ou; )
    t += n, r = e.next(t);
  return t >= ou ? 1 / 0 : t;
}
function ef(e) {
  return typeof e == "function";
}
function ph(e, t) {
  e.timeline = t, e.onfinish = null;
}
const tf = (e) => Array.isArray(e) && typeof e[0] == "number", nD = {
  linearEasing: void 0
};
function rD(e, t) {
  const n = /* @__PURE__ */ Vd(e);
  return () => {
    var r;
    return (r = nD[t]) !== null && r !== void 0 ? r : n();
  };
}
const va = /* @__PURE__ */ rD(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), gx = (e, t, n = 10) => {
  let r = "";
  const o = Math.max(Math.round(t / n), 2);
  for (let s = 0; s < o; s++)
    r += e(/* @__PURE__ */ ao(0, o - 1, s)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function yx(e) {
  return !!(typeof e == "function" && va() || !e || typeof e == "string" && (e in su || va()) || tf(e) || Array.isArray(e) && e.every(yx));
}
const Vo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, su = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Vo([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Vo([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Vo([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Vo([0.33, 1.53, 0.69, 0.99])
};
function vx(e, t) {
  if (e)
    return typeof e == "function" && va() ? gx(e, t) : tf(e) ? Vo(e) : Array.isArray(e) ? e.map((n) => vx(n, t) || su.easeOut) : su[e];
}
const St = {
  x: !1,
  y: !1
};
function xx() {
  return St.x || St.y;
}
function oD(e, t, n) {
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
function wx(e, t) {
  const n = oD(e), r = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, o, () => r.abort()];
}
function hh(e) {
  return (t) => {
    t.pointerType === "touch" || xx() || e(t);
  };
}
function sD(e, t, n = {}) {
  const [r, o, s] = wx(e, n), i = hh((a) => {
    const { target: l } = a, c = t(a);
    if (typeof c != "function" || !l)
      return;
    const u = hh((f) => {
      c(f), l.removeEventListener("pointerleave", u);
    });
    l.addEventListener("pointerleave", u, o);
  });
  return r.forEach((a) => {
    a.addEventListener("pointerenter", i, o);
  }), s;
}
const bx = (e, t) => t ? e === t ? !0 : bx(e, t.parentElement) : !1, nf = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, iD = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function aD(e) {
  return iD.has(e.tagName) || e.tabIndex !== -1;
}
const zo = /* @__PURE__ */ new WeakSet();
function mh(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function zl(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const lD = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = mh(() => {
    if (zo.has(n))
      return;
    zl(n, "down");
    const o = mh(() => {
      zl(n, "up");
    }), s = () => zl(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function gh(e) {
  return nf(e) && !xx();
}
function cD(e, t, n = {}) {
  const [r, o, s] = wx(e, n), i = (a) => {
    const l = a.currentTarget;
    if (!gh(a) || zo.has(l))
      return;
    zo.add(l);
    const c = t(a), u = (g, w) => {
      window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", d), !(!gh(g) || !zo.has(l)) && (zo.delete(l), typeof c == "function" && c(g, { success: w }));
    }, f = (g) => {
      u(g, n.useGlobalTarget || bx(l, g.target));
    }, d = (g) => {
      u(g, !1);
    };
    window.addEventListener("pointerup", f, o), window.addEventListener("pointercancel", d, o);
  };
  return r.forEach((a) => {
    !aD(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", i, o), a.addEventListener("focus", (c) => lD(c, o), o);
  }), s;
}
function uD(e) {
  return e === "x" || e === "y" ? St[e] ? null : (St[e] = !0, () => {
    St[e] = !1;
  }) : St.x || St.y ? null : (St.x = St.y = !0, () => {
    St.x = St.y = !1;
  });
}
const Sx = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...wo
]);
let Fi;
function dD() {
  Fi = void 0;
}
const $t = {
  now: () => (Fi === void 0 && $t.set(je.isProcessing || iP.useManualTiming ? je.timestamp : performance.now()), Fi),
  set: (e) => {
    Fi = e, queueMicrotask(dD);
  }
};
function rf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function of(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class sf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return rf(this.subscriptions, t), () => of(this.subscriptions, t);
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
function kx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const yh = 30, fD = (e) => !isNaN(parseFloat(e));
class pD {
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
      const s = $t.now();
      this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = $t.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = fD(this.current));
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
    this.events[t] || (this.events[t] = new sf());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), ce.read(() => {
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
    const t = $t.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > yh)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, yh);
    return kx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function Es(e, t) {
  return new pD(e, t);
}
function hD(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Es(n));
}
function mD(e, t) {
  const n = el(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const i in s) {
    const a = PP(s[i]);
    hD(e, i, a);
  }
}
function gD(e) {
  return !!(ze(e) && e.add);
}
function iu(e, t) {
  const n = e.getValue("willChange");
  if (gD(n))
    return n.add(t);
}
function Cx(e) {
  return e.props[ex];
}
const Ex = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, yD = 1e-7, vD = 12;
function xD(e, t, n, r, o) {
  let s, i, a = 0;
  do
    i = t + (n - t) / 2, s = Ex(i, r, o) - e, s > 0 ? n = i : t = i;
  while (Math.abs(s) > yD && ++a < vD);
  return i;
}
function Fs(e, t, n, r) {
  if (e === t && n === r)
    return st;
  const o = (s) => xD(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : Ex(o(s), t, r);
}
const Tx = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Px = (e) => (t) => 1 - e(1 - t), Dx = /* @__PURE__ */ Fs(0.33, 1.53, 0.69, 0.99), af = /* @__PURE__ */ Px(Dx), Nx = /* @__PURE__ */ Tx(af), Mx = (e) => (e *= 2) < 1 ? 0.5 * af(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), lf = (e) => 1 - Math.sin(Math.acos(e)), Ax = Px(lf), Rx = Tx(lf), jx = (e) => /^0[^.\s]+$/u.test(e);
function wD(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || jx(e) : !0;
}
const qo = (e) => Math.round(e * 1e5) / 1e5, cf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function bD(e) {
  return e == null;
}
const SD = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, uf = (e, t) => (n) => !!(typeof n == "string" && SD.test(n) && n.startsWith(e) || t && !bD(n) && Object.prototype.hasOwnProperty.call(n, t)), Lx = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, s, i, a] = r.match(cf);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, kD = (e) => ln(0, 255, e), Bl = {
  ...bo,
  transform: (e) => Math.round(kD(e))
}, or = {
  test: /* @__PURE__ */ uf("rgb", "red"),
  parse: /* @__PURE__ */ Lx("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Bl.transform(e) + ", " + Bl.transform(t) + ", " + Bl.transform(n) + ", " + qo(Cs.transform(r)) + ")"
};
function CD(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const au = {
  test: /* @__PURE__ */ uf("#"),
  parse: CD,
  transform: or.transform
}, Fr = {
  test: /* @__PURE__ */ uf("hsl", "hue"),
  parse: /* @__PURE__ */ Lx("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Bt.transform(qo(t)) + ", " + Bt.transform(qo(n)) + ", " + qo(Cs.transform(r)) + ")"
}, Fe = {
  test: (e) => or.test(e) || au.test(e) || Fr.test(e),
  parse: (e) => or.test(e) ? or.parse(e) : Fr.test(e) ? Fr.parse(e) : au.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? or.transform(e) : Fr.transform(e)
}, ED = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function TD(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(cf)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(ED)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const _x = "number", Ox = "color", PD = "var", DD = "var(", vh = "${}", ND = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ts(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let s = 0;
  const a = t.replace(ND, (l) => (Fe.test(l) ? (r.color.push(s), o.push(Ox), n.push(Fe.parse(l))) : l.startsWith(DD) ? (r.var.push(s), o.push(PD), n.push(l)) : (r.number.push(s), o.push(_x), n.push(parseFloat(l))), ++s, vh)).split(vh);
  return { values: n, split: a, indexes: r, types: o };
}
function Ix(e) {
  return Ts(e).values;
}
function Fx(e) {
  const { split: t, types: n } = Ts(e), r = t.length;
  return (o) => {
    let s = "";
    for (let i = 0; i < r; i++)
      if (s += t[i], o[i] !== void 0) {
        const a = n[i];
        a === _x ? s += qo(o[i]) : a === Ox ? s += Fe.transform(o[i]) : s += o[i];
      }
    return s;
  };
}
const MD = (e) => typeof e == "number" ? 0 : e;
function AD(e) {
  const t = Ix(e);
  return Fx(e)(t.map(MD));
}
const Vn = {
  test: TD,
  parse: Ix,
  createTransformer: Fx,
  getAnimatableNone: AD
}, RD = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function jD(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(cf) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let s = RD.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + o + ")";
}
const LD = /\b([a-z-]*)\(.*?\)/gu, lu = {
  ...Vn,
  getAnimatableNone: (e) => {
    const t = e.match(LD);
    return t ? t.map(jD).join(" ") : e;
  }
}, _D = {
  ...Gd,
  // Color props
  color: Fe,
  backgroundColor: Fe,
  outlineColor: Fe,
  fill: Fe,
  stroke: Fe,
  // Border props
  borderColor: Fe,
  borderTopColor: Fe,
  borderRightColor: Fe,
  borderBottomColor: Fe,
  borderLeftColor: Fe,
  filter: lu,
  WebkitFilter: lu
}, df = (e) => _D[e];
function Vx(e, t) {
  let n = df(e);
  return n !== lu && (n = Vn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const OD = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function ID(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const s = e[r];
    typeof s == "string" && !OD.has(s) && Ts(s).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const s of t)
      e[s] = Vx(n, o);
}
const xh = (e) => e === bo || e === W, wh = (e, t) => parseFloat(e.split(", ")[t]), bh = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/u);
  if (o)
    return wh(o[1], t);
  {
    const s = r.match(/^matrix\((.+)\)$/u);
    return s ? wh(s[1], e) : 0;
  }
}, FD = /* @__PURE__ */ new Set(["x", "y", "z"]), VD = wo.filter((e) => !FD.has(e));
function zD(e) {
  const t = [];
  return VD.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const co = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: bh(4, 13),
  y: bh(5, 14)
};
co.translateX = co.x;
co.translateY = co.y;
const ar = /* @__PURE__ */ new Set();
let cu = !1, uu = !1;
function zx() {
  if (uu) {
    const e = Array.from(ar).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = zD(r);
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
  uu = !1, cu = !1, ar.forEach((e) => e.complete()), ar.clear();
}
function Bx() {
  ar.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (uu = !0);
  });
}
function BD() {
  Bx(), zx();
}
class ff {
  constructor(t, n, r, o, s, i = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = s, this.isAsync = i;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (ar.add(this), cu || (cu = !0, ce.read(Bx), ce.resolveKeyframes(zx))) : (this.readKeyframes(), this.complete());
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), ar.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, ar.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const $x = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), $D = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function UD(e) {
  const t = $D.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function Ux(e, t, n = 1) {
  const [r, o] = UD(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const i = s.trim();
    return $x(i) ? parseFloat(i) : i;
  }
  return Kd(o) ? Ux(o, t, n + 1) : o;
}
const Wx = (e) => (t) => t.test(e), WD = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Hx = [bo, W, Bt, yn, jP, RP, WD], Sh = (e) => Hx.find(Wx(e));
class Kx extends ff {
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
      if (typeof c == "string" && (c = c.trim(), Kd(c))) {
        const u = Ux(c, n.current);
        u !== void 0 && (t[l] = u), l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !Sx.has(r) || t.length !== 2)
      return;
    const [o, s] = t, i = Sh(o), a = Sh(s);
    if (i !== a)
      if (xh(i) && xh(a))
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
      wD(t[o]) && r.push(o);
    r.length && ID(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = co[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
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
    o[i] = co[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, c]) => {
      n.getValue(l).set(c);
    }), this.resolveNoneKeyframes();
  }
}
const kh = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Vn.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function HD(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function KD(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const s = e[e.length - 1], i = kh(o, t), a = kh(s, t);
  return !i || !a ? !1 : HD(e) || (n === "spring" || ef(n)) && r;
}
const GD = (e) => e !== null;
function tl(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(GD), s = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !s || r === void 0 ? o[s] : r;
}
const YD = 40;
class Gx {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: i = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = $t.now(), this.options = {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > YD ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && BD(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = $t.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: o, velocity: s, delay: i, onComplete: a, onUpdate: l, isGenerator: c } = this.options;
    if (!c && !KD(t, r, o, s))
      if (i)
        this.options.duration = 0;
      else {
        l && l(tl(t, this.options, n)), a && a(), this.resolveFinishedPromise();
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
const fe = (e, t, n) => e + (t - e) * n;
function $l(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function XD({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, s = 0, i = 0;
  if (!t)
    o = s = i = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    o = $l(l, a, e + 1 / 3), s = $l(l, a, e), i = $l(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(s * 255),
    blue: Math.round(i * 255),
    alpha: r
  };
}
function xa(e, t) {
  return (n) => n > 0 ? t : e;
}
const Ul = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, QD = [au, or, Fr], qD = (e) => QD.find((t) => t.test(e));
function Ch(e) {
  const t = qD(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === Fr && (n = XD(n)), n;
}
const Eh = (e, t) => {
  const n = Ch(e), r = Ch(t);
  if (!n || !r)
    return xa(e, t);
  const o = { ...n };
  return (s) => (o.red = Ul(n.red, r.red, s), o.green = Ul(n.green, r.green, s), o.blue = Ul(n.blue, r.blue, s), o.alpha = fe(n.alpha, r.alpha, s), or.transform(o));
}, ZD = (e, t) => (n) => t(e(n)), Vs = (...e) => e.reduce(ZD), du = /* @__PURE__ */ new Set(["none", "hidden"]);
function JD(e, t) {
  return du.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function eN(e, t) {
  return (n) => fe(e, t, n);
}
function pf(e) {
  return typeof e == "number" ? eN : typeof e == "string" ? Kd(e) ? xa : Fe.test(e) ? Eh : rN : Array.isArray(e) ? Yx : typeof e == "object" ? Fe.test(e) ? Eh : tN : xa;
}
function Yx(e, t) {
  const n = [...e], r = n.length, o = e.map((s, i) => pf(s)(s, t[i]));
  return (s) => {
    for (let i = 0; i < r; i++)
      n[i] = o[i](s);
    return n;
  };
}
function tN(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = pf(e[o])(e[o], t[o]));
  return (o) => {
    for (const s in r)
      n[s] = r[s](o);
    return n;
  };
}
function nN(e, t) {
  var n;
  const r = [], o = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const i = t.types[s], a = e.indexes[i][o[i]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    r[s] = l, o[i]++;
  }
  return r;
}
const rN = (e, t) => {
  const n = Vn.createTransformer(t), r = Ts(e), o = Ts(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? du.has(e) && !o.values.length || du.has(t) && !r.values.length ? JD(e, t) : Vs(Yx(nN(r, o), o.values), n) : xa(e, t);
};
function Xx(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? fe(e, t, n) : pf(e)(e, t);
}
const oN = 5;
function Qx(e, t, n) {
  const r = Math.max(t - oN, 0);
  return kx(n - e(r), t - r);
}
const ye = {
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
}, Wl = 1e-3;
function sN({ duration: e = ye.duration, bounce: t = ye.bounce, velocity: n = ye.velocity, mass: r = ye.mass }) {
  let o, s, i = 1 - t;
  i = ln(ye.minDamping, ye.maxDamping, i), e = ln(ye.minDuration, ye.maxDuration, /* @__PURE__ */ en(e)), i < 1 ? (o = (c) => {
    const u = c * i, f = u * e, d = u - n, g = fu(c, i), w = Math.exp(-f);
    return Wl - d / g * w;
  }, s = (c) => {
    const f = c * i * e, d = f * n + n, g = Math.pow(i, 2) * Math.pow(c, 2) * e, w = Math.exp(-f), v = fu(Math.pow(c, 2), i);
    return (-o(c) + Wl > 0 ? -1 : 1) * ((d - g) * w) / v;
  }) : (o = (c) => {
    const u = Math.exp(-c * e), f = (c - n) * e + 1;
    return -Wl + u * f;
  }, s = (c) => {
    const u = Math.exp(-c * e), f = (n - c) * (e * e);
    return u * f;
  });
  const a = 5 / e, l = aN(o, s, a);
  if (e = /* @__PURE__ */ Jt(e), isNaN(l))
    return {
      stiffness: ye.stiffness,
      damping: ye.damping,
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
const iN = 12;
function aN(e, t, n) {
  let r = n;
  for (let o = 1; o < iN; o++)
    r = r - e(r) / t(r);
  return r;
}
function fu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const lN = ["duration", "bounce"], cN = ["stiffness", "damping", "mass"];
function Th(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function uN(e) {
  let t = {
    velocity: ye.velocity,
    stiffness: ye.stiffness,
    damping: ye.damping,
    mass: ye.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Th(e, cN) && Th(e, lN))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, s = 2 * ln(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: ye.mass,
        stiffness: o,
        damping: s
      };
    } else {
      const n = sN(e);
      t = {
        ...t,
        ...n,
        mass: ye.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function qx(e = ye.visualDuration, t = ye.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: o } = n;
  const s = n.keyframes[0], i = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: s }, { stiffness: l, damping: c, mass: u, duration: f, velocity: d, isResolvedFromDuration: g } = uN({
    ...n,
    velocity: -/* @__PURE__ */ en(n.velocity || 0)
  }), w = d || 0, v = c / (2 * Math.sqrt(l * u)), b = i - s, m = /* @__PURE__ */ en(Math.sqrt(l / u)), h = Math.abs(b) < 5;
  r || (r = h ? ye.restSpeed.granular : ye.restSpeed.default), o || (o = h ? ye.restDelta.granular : ye.restDelta.default);
  let y;
  if (v < 1) {
    const k = fu(m, v);
    y = (E) => {
      const C = Math.exp(-v * m * E);
      return i - C * ((w + v * m * b) / k * Math.sin(k * E) + b * Math.cos(k * E));
    };
  } else if (v === 1)
    y = (k) => i - Math.exp(-m * k) * (b + (w + m * b) * k);
  else {
    const k = m * Math.sqrt(v * v - 1);
    y = (E) => {
      const C = Math.exp(-v * m * E), T = Math.min(k * E, 300);
      return i - C * ((w + v * m * b) * Math.sinh(T) + k * b * Math.cosh(T)) / k;
    };
  }
  const S = {
    calculatedDuration: g && f || null,
    next: (k) => {
      const E = y(k);
      if (g)
        a.done = k >= f;
      else {
        let C = 0;
        v < 1 && (C = k === 0 ? /* @__PURE__ */ Jt(w) : Qx(y, k, E));
        const T = Math.abs(C) <= r, R = Math.abs(i - E) <= o;
        a.done = T && R;
      }
      return a.value = a.done ? i : E, a;
    },
    toString: () => {
      const k = Math.min(mx(S), ou), E = gx((C) => S.next(k * C).value, k, 30);
      return k + "ms " + E;
    }
  };
  return S;
}
function Ph({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: s = 500, modifyTarget: i, min: a, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const f = e[0], d = {
    done: !1,
    value: f
  }, g = (T) => a !== void 0 && T < a || l !== void 0 && T > l, w = (T) => a === void 0 ? l : l === void 0 || Math.abs(a - T) < Math.abs(l - T) ? a : l;
  let v = n * t;
  const b = f + v, m = i === void 0 ? b : i(b);
  m !== b && (v = m - f);
  const h = (T) => -v * Math.exp(-T / r), y = (T) => m + h(T), S = (T) => {
    const R = h(T), N = y(T);
    d.done = Math.abs(R) <= c, d.value = d.done ? m : N;
  };
  let k, E;
  const C = (T) => {
    g(d.value) && (k = T, E = qx({
      keyframes: [d.value, w(d.value)],
      velocity: Qx(y, T, d.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: s,
      restDelta: c,
      restSpeed: u
    }));
  };
  return C(0), {
    calculatedDuration: null,
    next: (T) => {
      let R = !1;
      return !E && k === void 0 && (R = !0, S(T), C(T)), k !== void 0 && T >= k ? E.next(T - k) : (!R && S(T), d);
    }
  };
}
const dN = /* @__PURE__ */ Fs(0.42, 0, 1, 1), fN = /* @__PURE__ */ Fs(0, 0, 0.58, 1), Zx = /* @__PURE__ */ Fs(0.42, 0, 0.58, 1), pN = (e) => Array.isArray(e) && typeof e[0] != "number", hN = {
  linear: st,
  easeIn: dN,
  easeInOut: Zx,
  easeOut: fN,
  circIn: lf,
  circInOut: Rx,
  circOut: Ax,
  backIn: af,
  backInOut: Nx,
  backOut: Dx,
  anticipate: Mx
}, Dh = (e) => {
  if (tf(e)) {
    X0(e.length === 4);
    const [t, n, r, o] = e;
    return Fs(t, n, r, o);
  } else if (typeof e == "string")
    return hN[e];
  return e;
};
function mN(e, t, n) {
  const r = [], o = n || Xx, s = e.length - 1;
  for (let i = 0; i < s; i++) {
    let a = o(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] || st : t;
      a = Vs(l, a);
    }
    r.push(a);
  }
  return r;
}
function gN(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const s = e.length;
  if (X0(s === t.length), s === 1)
    return () => t[0];
  if (s === 2 && t[0] === t[1])
    return () => t[1];
  const i = e[0] === e[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = mN(t, r, o), l = a.length, c = (u) => {
    if (i && u < e[0])
      return t[0];
    let f = 0;
    if (l > 1)
      for (; f < e.length - 2 && !(u < e[f + 1]); f++)
        ;
    const d = /* @__PURE__ */ ao(e[f], e[f + 1], u);
    return a[f](d);
  };
  return n ? (u) => c(ln(e[0], e[s - 1], u)) : c;
}
function yN(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ ao(0, t, r);
    e.push(fe(n, 1, o));
  }
}
function vN(e) {
  const t = [0];
  return yN(t, e.length - 1), t;
}
function xN(e, t) {
  return e.map((n) => n * t);
}
function wN(e, t) {
  return e.map(() => t || Zx).splice(0, e.length - 1);
}
function wa({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = pN(r) ? r.map(Dh) : Dh(r), s = {
    done: !1,
    value: t[0]
  }, i = xN(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : vN(t),
    e
  ), a = gN(i, t, {
    ease: Array.isArray(o) ? o : wN(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (s.value = a(l), s.done = l >= e, s)
  };
}
const bN = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => ce.update(t, !0),
    stop: () => Fn(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => je.isProcessing ? je.timestamp : $t.now()
  };
}, SN = {
  decay: Ph,
  inertia: Ph,
  tween: wa,
  keyframes: wa,
  spring: qx
}, kN = (e) => e / 100;
class hf extends Gx {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options, i = (o == null ? void 0 : o.KeyframeResolver) || ff, a = (l, c) => this.onKeyframesResolved(l, c);
    this.resolver = new i(s, a, n, r, o), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: s, velocity: i = 0 } = this.options, a = ef(n) ? n : SN[n] || wa;
    let l, c;
    a !== wa && typeof t[0] != "number" && (l = Vs(kN, Xx(t[0], t[1])), t = [0, 100]);
    const u = a({ ...this.options, keyframes: t });
    s === "mirror" && (c = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -i
    })), u.calculatedDuration === null && (u.calculatedDuration = mx(u));
    const { calculatedDuration: f } = u, d = f + o, g = d * (r + 1) - o;
    return {
      generator: u,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
      calculatedDuration: f,
      resolvedDuration: d,
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
    const { finalKeyframe: o, generator: s, mirroredGenerator: i, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: c, totalDuration: u, resolvedDuration: f } = r;
    if (this.startTime === null)
      return s.next(0);
    const { delay: d, repeat: g, repeatType: w, repeatDelay: v, onUpdate: b } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const m = this.currentTime - d * (this.speed >= 0 ? 1 : -1), h = this.speed >= 0 ? m < 0 : m > u;
    this.currentTime = Math.max(m, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = u);
    let y = this.currentTime, S = s;
    if (g) {
      const T = Math.min(this.currentTime, u) / f;
      let R = Math.floor(T), N = T % 1;
      !N && T >= 1 && (N = 1), N === 1 && R--, R = Math.min(R, g + 1), !!(R % 2) && (w === "reverse" ? (N = 1 - N, v && (N -= v / f)) : w === "mirror" && (S = i)), y = ln(0, 1, N) * f;
    }
    const k = h ? { done: !1, value: l[0] } : S.next(y);
    a && (k.value = a(k.value));
    let { done: E } = k;
    !h && c !== null && (E = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const C = this.holdTime === null && (this.state === "finished" || this.state === "running" && E);
    return C && o !== void 0 && (k.value = tl(l, this.options, o)), b && b(k.value), C && this.finish(), k;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? /* @__PURE__ */ en(t.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ en(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ Jt(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ en(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = bN, onPlay: n, startTime: r } = this.options;
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
const CN = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function EN(e, t, n, { delay: r = 0, duration: o = 300, repeat: s = 0, repeatType: i = "loop", ease: a = "easeInOut", times: l } = {}) {
  const c = { [t]: n };
  l && (c.offset = l);
  const u = vx(a, o);
  return Array.isArray(u) && (c.easing = u), e.animate(c, {
    delay: r,
    duration: o,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const TN = /* @__PURE__ */ Vd(() => Object.hasOwnProperty.call(Element.prototype, "animate")), ba = 10, PN = 2e4;
function DN(e) {
  return ef(e.type) || e.type === "spring" || !yx(e.ease);
}
function NN(e, t) {
  const n = new hf({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let s = 0;
  for (; !r.done && s < PN; )
    r = n.sample(s), o.push(r.value), s += ba;
  return {
    times: void 0,
    keyframes: o,
    duration: s - ba,
    ease: "linear"
  };
}
const Jx = {
  anticipate: Mx,
  backInOut: Nx,
  circInOut: Rx
};
function MN(e) {
  return e in Jx;
}
class Nh extends Gx {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options;
    this.resolver = new Kx(s, (i, a) => this.onKeyframesResolved(i, a), n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: r = 300, times: o, ease: s, type: i, motionValue: a, name: l, startTime: c } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof s == "string" && va() && MN(s) && (s = Jx[s]), DN(this.options)) {
      const { onComplete: f, onUpdate: d, motionValue: g, element: w, ...v } = this.options, b = NN(t, v);
      t = b.keyframes, t.length === 1 && (t[1] = t[0]), r = b.duration, o = b.times, s = b.ease, i = "keyframes";
    }
    const u = EN(a.owner.current, l, t, { ...this.options, duration: r, times: o, ease: s });
    return u.startTime = c ?? this.calcStartTime(), this.pendingTimeline ? (ph(u, this.pendingTimeline), this.pendingTimeline = void 0) : u.onfinish = () => {
      const { onComplete: f } = this.options;
      a.set(tl(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise();
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
    return /* @__PURE__ */ en(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return /* @__PURE__ */ en(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = /* @__PURE__ */ Jt(t);
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
        return st;
      const { animation: r } = n;
      ph(r, t);
    }
    return st;
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
      const { motionValue: c, onUpdate: u, onComplete: f, element: d, ...g } = this.options, w = new hf({
        ...g,
        keyframes: r,
        duration: o,
        type: s,
        ease: i,
        times: a,
        isGenerator: !0
      }), v = /* @__PURE__ */ Jt(this.time);
      c.setWithVelocity(w.sample(v - ba).value, w.sample(v).value, ba);
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
    return TN() && r && CN.has(r) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !c && !o && s !== "mirror" && i !== 0 && a !== "inertia";
  }
}
const AN = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, RN = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), jN = {
  type: "keyframes",
  duration: 0.8
}, LN = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, _N = (e, { keyframes: t }) => t.length > 2 ? jN : xr.has(e) ? e.startsWith("scale") ? RN(t[1]) : AN : LN;
function ON({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: a, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
const mf = (e, t, n, r = {}, o, s) => (i) => {
  const a = Jd(r, e) || {}, l = a.delay || r.delay || 0;
  let { elapsed: c = 0 } = r;
  c = c - /* @__PURE__ */ Jt(l);
  let u = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -c,
    onUpdate: (d) => {
      t.set(d), a.onUpdate && a.onUpdate(d);
    },
    onComplete: () => {
      i(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: s ? void 0 : o
  };
  ON(a) || (u = {
    ...u,
    ..._N(e, u)
  }), u.duration && (u.duration = /* @__PURE__ */ Jt(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ Jt(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let f = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (f = !0)), f && !s && t.get() !== void 0) {
    const d = tl(u.keyframes, a);
    if (d !== void 0)
      return ce.update(() => {
        u.onUpdate(d), u.onComplete();
      }), new tD([]);
  }
  return !s && Nh.supports(u) ? new Nh(u) : new hf(u);
};
function IN({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function ew(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var s;
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (i = r);
  const c = [], u = o && e.animationState && e.animationState.getState()[o];
  for (const f in l) {
    const d = e.getValue(f, (s = e.latestValues[f]) !== null && s !== void 0 ? s : null), g = l[f];
    if (g === void 0 || u && IN(u, f))
      continue;
    const w = {
      delay: n,
      ...Jd(i || {}, f)
    };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const m = Cx(e);
      if (m) {
        const h = window.MotionHandoffAnimation(m, f, ce);
        h !== null && (w.startTime = h, v = !0);
      }
    }
    iu(e, f), d.start(mf(f, d, g, e.shouldReduceMotion && Sx.has(f) ? { type: !1 } : w, e, v));
    const b = d.animation;
    b && c.push(b);
  }
  return a && Promise.all(c).then(() => {
    ce.update(() => {
      a && mD(e, a);
    });
  }), c;
}
function pu(e, t, n = {}) {
  var r;
  const o = el(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = o ? () => Promise.all(ew(e, o, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: u = 0, staggerChildren: f, staggerDirection: d } = s;
    return FN(e, t, u + c, f, d, n);
  } : () => Promise.resolve(), { when: l } = s;
  if (l) {
    const [c, u] = l === "beforeChildren" ? [i, a] : [a, i];
    return c().then(() => u());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function FN(e, t, n = 0, r = 0, o = 1, s) {
  const i = [], a = (e.variantChildren.size - 1) * r, l = o === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return Array.from(e.variantChildren).sort(VN).forEach((c, u) => {
    c.notify("AnimationStart", t), i.push(pu(c, t, {
      ...s,
      delay: n + l(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function VN(e, t) {
  return e.sortNodePosition(t);
}
function zN(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((s) => pu(e, s, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = pu(e, t, n);
  else {
    const o = typeof t == "function" ? el(e, t, n.custom) : t;
    r = Promise.all(ew(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const BN = Bd.length;
function tw(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? tw(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < BN; n++) {
    const r = Bd[n], o = e.props[r];
    (ks(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const $N = [...zd].reverse(), UN = zd.length;
function WN(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => zN(e, n, r)));
}
function HN(e) {
  let t = WN(e), n = Mh(), r = !0;
  const o = (l) => (c, u) => {
    var f;
    const d = el(e, u, l === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
    if (d) {
      const { transition: g, transitionEnd: w, ...v } = d;
      c = { ...c, ...v, ...w };
    }
    return c;
  };
  function s(l) {
    t = l(e);
  }
  function i(l) {
    const { props: c } = e, u = tw(e.parent) || {}, f = [], d = /* @__PURE__ */ new Set();
    let g = {}, w = 1 / 0;
    for (let b = 0; b < UN; b++) {
      const m = $N[b], h = n[m], y = c[m] !== void 0 ? c[m] : u[m], S = ks(y), k = m === l ? h.isActive : null;
      k === !1 && (w = b);
      let E = y === u[m] && y !== c[m] && S;
      if (E && r && e.manuallyAnimateOnMount && (E = !1), h.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !h.isActive && k === null || // If we didn't and don't have any defined prop for this animation type
      !y && !h.prevProp || // Or if the prop doesn't define an animation
      Za(y) || typeof y == "boolean")
        continue;
      const C = KN(h.prevProp, y);
      let T = C || // If we're making this variant active, we want to always make it active
      m === l && h.isActive && !E && S || // If we removed a higher-priority variant (i is in reverse order)
      b > w && S, R = !1;
      const N = Array.isArray(y) ? y : [y];
      let P = N.reduce(o(m), {});
      k === !1 && (P = {});
      const { prevResolvedValues: M = {} } = h, j = {
        ...M,
        ...P
      }, _ = (B) => {
        T = !0, d.has(B) && (R = !0, d.delete(B)), h.needsAnimating[B] = !0;
        const D = e.getValue(B);
        D && (D.liveStyle = !1);
      };
      for (const B in j) {
        const D = P[B], L = M[B];
        if (g.hasOwnProperty(B))
          continue;
        let F = !1;
        ru(D) && ru(L) ? F = !hx(D, L) : F = D !== L, F ? D != null ? _(B) : d.add(B) : D !== void 0 && d.has(B) ? _(B) : h.protectedKeys[B] = !0;
      }
      h.prevProp = y, h.prevResolvedValues = P, h.isActive && (g = { ...g, ...P }), r && e.blockInitialAnimation && (T = !1), T && (!(E && C) || R) && f.push(...N.map((B) => ({
        animation: B,
        options: { type: m }
      })));
    }
    if (d.size) {
      const b = {};
      d.forEach((m) => {
        const h = e.getBaseTarget(m), y = e.getValue(m);
        y && (y.liveStyle = !0), b[m] = h ?? null;
      }), f.push({ animation: b });
    }
    let v = !!f.length;
    return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (v = !1), r = !1, v ? t(f) : Promise.resolve();
  }
  function a(l, c) {
    var u;
    if (n[l].isActive === c)
      return Promise.resolve();
    (u = e.variantChildren) === null || u === void 0 || u.forEach((d) => {
      var g;
      return (g = d.animationState) === null || g === void 0 ? void 0 : g.setActive(l, c);
    }), n[l].isActive = c;
    const f = i(l);
    for (const d in n)
      n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: i,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      n = Mh(), r = !0;
    }
  };
}
function KN(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !hx(t, e) : !1;
}
function Qn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Mh() {
  return {
    animate: Qn(!0),
    whileInView: Qn(),
    whileHover: Qn(),
    whileTap: Qn(),
    whileDrag: Qn(),
    whileFocus: Qn(),
    exit: Qn()
  };
}
class Kn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class GN extends Kn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = HN(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Za(t) && (this.unmountControls = t.subscribe(this.node));
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
let YN = 0;
class XN extends Kn {
  constructor() {
    super(...arguments), this.id = YN++;
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
const QN = {
  animation: {
    Feature: GN
  },
  exit: {
    Feature: XN
  }
};
function Ps(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function zs(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const qN = (e) => (t) => nf(t) && e(t, zs(t));
function Zo(e, t, n, r) {
  return Ps(e, t, qN(n), r);
}
const Ah = (e, t) => Math.abs(e - t);
function ZN(e, t) {
  const n = Ah(e.x, t.x), r = Ah(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class nw {
  constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: s = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = Kl(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, g = ZN(f.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !g)
        return;
      const { point: w } = f, { timestamp: v } = je;
      this.history.push({ ...w, timestamp: v });
      const { onStart: b, onMove: m } = this.handlers;
      d || (b && b(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), m && m(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, d) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = Hl(d, this.transformPagePoint), ce.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, d) => {
      this.end();
      const { onEnd: g, onSessionEnd: w, resumeAnimation: v } = this.handlers;
      if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const b = Kl(f.type === "pointercancel" ? this.lastMoveEventInfo : Hl(d, this.transformPagePoint), this.history);
      this.startEvent && g && g(f, b), w && w(f, b);
    }, !nf(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = zs(t), a = Hl(i, this.transformPagePoint), { point: l } = a, { timestamp: c } = je;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = n;
    u && u(t, Kl(a, this.history)), this.removeListeners = Vs(Zo(this.contextWindow, "pointermove", this.handlePointerMove), Zo(this.contextWindow, "pointerup", this.handlePointerUp), Zo(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Fn(this.updatePoint);
  }
}
function Hl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Rh(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Kl({ point: e }, t) {
  return {
    point: e,
    delta: Rh(e, rw(t)),
    offset: Rh(e, JN(t)),
    velocity: e2(t, 0.1)
  };
}
function JN(e) {
  return e[0];
}
function rw(e) {
  return e[e.length - 1];
}
function e2(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = rw(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > /* @__PURE__ */ Jt(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = /* @__PURE__ */ en(o.timestamp - r.timestamp);
  if (s === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - r.x) / s,
    y: (o.y - r.y) / s
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
const ow = 1e-4, t2 = 1 - ow, n2 = 1 + ow, sw = 0.01, r2 = 0 - sw, o2 = 0 + sw;
function at(e) {
  return e.max - e.min;
}
function s2(e, t, n) {
  return Math.abs(e - t) <= n;
}
function jh(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = fe(t.min, t.max, e.origin), e.scale = at(n) / at(t), e.translate = fe(n.min, n.max, e.origin) - e.originPoint, (e.scale >= t2 && e.scale <= n2 || isNaN(e.scale)) && (e.scale = 1), (e.translate >= r2 && e.translate <= o2 || isNaN(e.translate)) && (e.translate = 0);
}
function Jo(e, t, n, r) {
  jh(e.x, t.x, n.x, r ? r.originX : void 0), jh(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Lh(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + at(t);
}
function i2(e, t, n) {
  Lh(e.x, t.x, n.x), Lh(e.y, t.y, n.y);
}
function _h(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + at(t);
}
function es(e, t, n) {
  _h(e.x, t.x, n.x), _h(e.y, t.y, n.y);
}
function a2(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? fe(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? fe(n, e, r.max) : Math.min(e, n)), e;
}
function Oh(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function l2(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Oh(e.x, n, o),
    y: Oh(e.y, t, r)
  };
}
function Ih(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function c2(e, t) {
  return {
    x: Ih(e.x, t.x),
    y: Ih(e.y, t.y)
  };
}
function u2(e, t) {
  let n = 0.5;
  const r = at(e), o = at(t);
  return o > r ? n = /* @__PURE__ */ ao(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ ao(e.min, e.max - o, t.min)), ln(0, 1, n);
}
function d2(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const hu = 0.35;
function f2(e = hu) {
  return e === !1 ? e = 0 : e === !0 && (e = hu), {
    x: Fh(e, "left", "right"),
    y: Fh(e, "top", "bottom")
  };
}
function Fh(e, t, n) {
  return {
    min: Vh(e, t),
    max: Vh(e, n)
  };
}
function Vh(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const zh = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Vr = () => ({
  x: zh(),
  y: zh()
}), Bh = () => ({ min: 0, max: 0 }), Se = () => ({
  x: Bh(),
  y: Bh()
});
function pt(e) {
  return [e("x"), e("y")];
}
function iw({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function p2({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function h2(e, t) {
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
function Gl(e) {
  return e === void 0 || e === 1;
}
function mu({ scale: e, scaleX: t, scaleY: n }) {
  return !Gl(e) || !Gl(t) || !Gl(n);
}
function Jn(e) {
  return mu(e) || aw(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function aw(e) {
  return $h(e.x) || $h(e.y);
}
function $h(e) {
  return e && e !== "0%";
}
function Sa(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Uh(e, t, n, r, o) {
  return o !== void 0 && (e = Sa(e, o, r)), Sa(e, n, r) + t;
}
function gu(e, t = 0, n = 1, r, o) {
  e.min = Uh(e.min, t, n, r, o), e.max = Uh(e.max, t, n, r, o);
}
function lw(e, { x: t, y: n }) {
  gu(e.x, t.translate, t.scale, t.originPoint), gu(e.y, n.translate, n.scale, n.originPoint);
}
const Wh = 0.999999999999, Hh = 1.0000000000001;
function m2(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let s, i;
  for (let a = 0; a < o; a++) {
    s = n[a], i = s.projectionDelta;
    const { visualElement: l } = s.options;
    l && l.props.style && l.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Br(e, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, lw(e, i)), r && Jn(s.latestValues) && Br(e, s.latestValues));
  }
  t.x < Hh && t.x > Wh && (t.x = 1), t.y < Hh && t.y > Wh && (t.y = 1);
}
function zr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Kh(e, t, n, r, o = 0.5) {
  const s = fe(e.min, e.max, o);
  gu(e, t, n, s, r);
}
function Br(e, t) {
  Kh(e.x, t.x, t.scaleX, t.scale, t.originX), Kh(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function cw(e, t) {
  return iw(h2(e.getBoundingClientRect(), t));
}
function g2(e, t, n) {
  const r = cw(e, n), { scroll: o } = t;
  return o && (zr(r.x, o.offset.x), zr(r.y, o.offset.y)), r;
}
const uw = ({ current: e }) => e ? e.ownerDocument.defaultView : null, y2 = /* @__PURE__ */ new WeakMap();
class v2 {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Se(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (u) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(zs(u).point);
    }, s = (u, f) => {
      const { drag: d, dragPropagation: g, onDragStart: w } = this.getProps();
      if (d && !g && (this.openDragLock && this.openDragLock(), this.openDragLock = uD(d), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), pt((b) => {
        let m = this.getAxisMotionValue(b).get() || 0;
        if (Bt.test(m)) {
          const { projection: h } = this.visualElement;
          if (h && h.layout) {
            const y = h.layout.layoutBox[b];
            y && (m = at(y) * (parseFloat(m) / 100));
          }
        }
        this.originPoint[b] = m;
      }), w && ce.postRender(() => w(u, f)), iu(this.visualElement, "transform");
      const { animationState: v } = this.visualElement;
      v && v.setActive("whileDrag", !0);
    }, i = (u, f) => {
      const { dragPropagation: d, dragDirectionLock: g, onDirectionLock: w, onDrag: v } = this.getProps();
      if (!d && !this.openDragLock)
        return;
      const { offset: b } = f;
      if (g && this.currentDirection === null) {
        this.currentDirection = x2(b), this.currentDirection !== null && w && w(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, b), this.updateAxis("y", f.point, b), this.visualElement.render(), v && v(u, f);
    }, a = (u, f) => this.stop(u, f), l = () => pt((u) => {
      var f;
      return this.getAnimationState(u) === "paused" && ((f = this.getAxisMotionValue(u).animation) === null || f === void 0 ? void 0 : f.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new nw(t, {
      onSessionStart: o,
      onStart: s,
      onMove: i,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      contextWindow: uw(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: s } = this.getProps();
    s && ce.postRender(() => s(t, n));
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
    if (!r || !vi(t, o, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (i = a2(i, this.constraints[t], this.elastic[t])), s.set(i);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, s = this.constraints;
    n && Ir(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = l2(o.layoutBox, n) : this.constraints = !1, this.elastic = f2(r), s !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && pt((i) => {
      this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = d2(o.layoutBox[i], this.constraints[i]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Ir(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const s = g2(r, o.root, this.visualElement.getTransformPagePoint());
    let i = c2(o.layout.layoutBox, s);
    if (n) {
      const a = n(p2(i));
      this.hasMutatedConstraints = !!a, a && (i = iw(a));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = pt((u) => {
      if (!vi(u, n, this.currentDirection))
        return;
      let f = l && l[u] || {};
      i && (f = { min: 0, max: 0 });
      const d = o ? 200 : 1e6, g = o ? 40 : 1e7, w = {
        type: "inertia",
        velocity: r ? t[u] : 0,
        bounceStiffness: d,
        bounceDamping: g,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...f
      };
      return this.startAxisValueAnimation(u, w);
    });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return iu(this.visualElement, t), r.start(mf(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    pt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    pt((t) => {
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
    pt((n) => {
      const { drag: r } = this.getProps();
      if (!vi(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, s = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: i, max: a } = o.layout.layoutBox[n];
        s.set(t[n] - fe(i, a, 0.5));
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
    if (!Ir(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    pt((i) => {
      const a = this.getAxisMotionValue(i);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[i] = u2({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), pt((i) => {
      if (!vi(i, t, null))
        return;
      const a = this.getAxisMotionValue(i), { min: l, max: c } = this.constraints[i];
      a.set(fe(l, c, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    y2.set(this.visualElement, this);
    const t = this.visualElement.current, n = Zo(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Ir(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, s = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), ce.read(r);
    const i = Ps(window, "resize", () => this.scalePositionWithinConstraints()), a = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (pt((u) => {
        const f = this.getAxisMotionValue(u);
        f && (this.originPoint[u] += l[u].translate, f.set(f.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      i(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: s = !1, dragElastic: i = hu, dragMomentum: a = !0 } = t;
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
function vi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function x2(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class w2 extends Kn {
  constructor(t) {
    super(t), this.removeGroupControls = st, this.removeListeners = st, this.controls = new v2(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || st;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Gh = (e) => (t, n) => {
  e && ce.postRender(() => e(t, n));
};
class b2 extends Kn {
  constructor() {
    super(...arguments), this.removePointerDownListener = st;
  }
  onPointerDown(t) {
    this.session = new nw(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: uw(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Gh(t),
      onStart: Gh(n),
      onMove: r,
      onEnd: (s, i) => {
        delete this.session, o && ce.postRender(() => o(s, i));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Zo(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Vi = {
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
function Yh(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const jo = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (W.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Yh(e, t.target.x), r = Yh(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, S2 = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = Vn.parse(e);
    if (o.length > 5)
      return r;
    const s = Vn.createTransformer(e), i = typeof o[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + i] /= a, o[1 + i] /= l;
    const c = fe(a, l, 0.5);
    return typeof o[2 + i] == "number" && (o[2 + i] /= c), typeof o[3 + i] == "number" && (o[3 + i] /= c), s(o);
  }
};
class k2 extends x.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: s } = t;
    UP(C2), s && (n.group && n.group.add(s), r && r.register && o && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), Vi.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: s } = this.props, i = r.projection;
    return i && (i.isPresent = s, o || t.layoutDependency !== n || n === void 0 ? i.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? i.promote() : i.relegate() || ce.postRender(() => {
      const a = i.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Ud.postRender(() => {
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
function dw(e) {
  const [t, n] = G0(), r = x.useContext(_d);
  return p.jsx(k2, { ...e, layoutGroup: r, switchLayoutGroup: x.useContext(tx), isPresent: t, safeToRemove: n });
}
const C2 = {
  borderRadius: {
    ...jo,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: jo,
  borderTopRightRadius: jo,
  borderBottomLeftRadius: jo,
  borderBottomRightRadius: jo,
  boxShadow: S2
};
function E2(e, t, n) {
  const r = ze(e) ? e : Es(e);
  return r.start(mf("", r, t, n)), r.animation;
}
function T2(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const P2 = (e, t) => e.depth - t.depth;
class D2 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    rf(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    of(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(P2), this.isDirty = !1, this.children.forEach(t);
  }
}
function N2(e, t) {
  const n = $t.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= t && (Fn(r), e(s - t));
  };
  return ce.read(r, !0), () => Fn(r);
}
const fw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], M2 = fw.length, Xh = (e) => typeof e == "string" ? parseFloat(e) : e, Qh = (e) => typeof e == "number" || W.test(e);
function A2(e, t, n, r, o, s) {
  o ? (e.opacity = fe(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    R2(r)
  ), e.opacityExit = fe(t.opacity !== void 0 ? t.opacity : 1, 0, j2(r))) : s && (e.opacity = fe(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < M2; i++) {
    const a = `border${fw[i]}Radius`;
    let l = qh(t, a), c = qh(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || Qh(l) === Qh(c) ? (e[a] = Math.max(fe(Xh(l), Xh(c), r), 0), (Bt.test(c) || Bt.test(l)) && (e[a] += "%")) : e[a] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = fe(t.rotate || 0, n.rotate || 0, r));
}
function qh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const R2 = /* @__PURE__ */ pw(0, 0.5, Ax), j2 = /* @__PURE__ */ pw(0.5, 0.95, st);
function pw(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ ao(e, t, r));
}
function Zh(e, t) {
  e.min = t.min, e.max = t.max;
}
function ft(e, t) {
  Zh(e.x, t.x), Zh(e.y, t.y);
}
function Jh(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function em(e, t, n, r, o) {
  return e -= t, e = Sa(e, 1 / n, r), o !== void 0 && (e = Sa(e, 1 / o, r)), e;
}
function L2(e, t = 0, n = 1, r = 0.5, o, s = e, i = e) {
  if (Bt.test(t) && (t = parseFloat(t), t = fe(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let a = fe(s.min, s.max, r);
  e === s && (a -= t), e.min = em(e.min, t, n, a, o), e.max = em(e.max, t, n, a, o);
}
function tm(e, t, [n, r, o], s, i) {
  L2(e, t[n], t[r], t[o], t.scale, s, i);
}
const _2 = ["x", "scaleX", "originX"], O2 = ["y", "scaleY", "originY"];
function nm(e, t, n, r) {
  tm(e.x, t, _2, n ? n.x : void 0, r ? r.x : void 0), tm(e.y, t, O2, n ? n.y : void 0, r ? r.y : void 0);
}
function rm(e) {
  return e.translate === 0 && e.scale === 1;
}
function hw(e) {
  return rm(e.x) && rm(e.y);
}
function om(e, t) {
  return e.min === t.min && e.max === t.max;
}
function I2(e, t) {
  return om(e.x, t.x) && om(e.y, t.y);
}
function sm(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function mw(e, t) {
  return sm(e.x, t.x) && sm(e.y, t.y);
}
function im(e) {
  return at(e.x) / at(e.y);
}
function am(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class F2 {
  constructor() {
    this.members = [];
  }
  add(t) {
    rf(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (of(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function V2(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, s = e.y.translate / t.y, i = (n == null ? void 0 : n.z) || 0;
  if ((o || s || i) && (r = `translate3d(${o}px, ${s}px, ${i}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: c, rotate: u, rotateX: f, rotateY: d, skewX: g, skewY: w } = n;
    c && (r = `perspective(${c}px) ${r}`), u && (r += `rotate(${u}deg) `), f && (r += `rotateX(${f}deg) `), d && (r += `rotateY(${d}deg) `), g && (r += `skewX(${g}deg) `), w && (r += `skewY(${w}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const er = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, Bo = typeof window < "u" && window.MotionDebug !== void 0, Yl = ["", "X", "Y", "Z"], z2 = { visibility: "hidden" }, lm = 1e3;
let B2 = 0;
function Xl(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function gw(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Cx(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ce, !(o || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && gw(r);
}
function yw({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(i = {}, a = t == null ? void 0 : t()) {
      this.id = B2++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Bo && (er.totalNodes = er.resolvedTargetDeltas = er.recalculatedProjection = 0), this.nodes.forEach(W2), this.nodes.forEach(X2), this.nodes.forEach(Q2), this.nodes.forEach(H2), Bo && window.MotionDebug.record(er);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new D2());
    }
    addEventListener(i, a) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new sf()), this.eventHandlers.get(i).add(a);
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
      this.isSVG = T2(i), this.instance = i;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || l) && (this.isLayoutDirty = !0), e) {
        let f;
        const d = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = N2(d, 250), Vi.hasAnimatedSinceResize && (Vi.hasAnimatedSinceResize = !1, this.nodes.forEach(um));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: g, layout: w }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const v = this.options.transition || u.getDefaultTransition() || tM, { onLayoutAnimationStart: b, onLayoutAnimationComplete: m } = u.getProps(), h = !this.targetLayout || !mw(this.targetLayout, w) || g, y = !d && g;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || y || d && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, y);
          const S = {
            ...Jd(v, "layout"),
            onPlay: b,
            onComplete: m
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (S.delay = 0, S.type = !1), this.startAnimation(S);
        } else
          d || um(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = w;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Fn(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(q2), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && gw(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const f = this.path[u];
        f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), i && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(cm);
        return;
      }
      this.isUpdating || this.nodes.forEach(G2), this.isUpdating = !1, this.nodes.forEach(Y2), this.nodes.forEach($2), this.nodes.forEach(U2), this.clearAllSnapshots();
      const a = $t.now();
      je.delta = ln(0, 1e3 / 60, a - je.timestamp), je.timestamp = a, je.isProcessing = !0, Vl.update.process(je), Vl.preRender.process(je), Vl.render.process(je), je.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Ud.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(K2), this.sharedNodes.forEach(Z2);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, ce.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ce.postRender(() => {
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
      this.layout = this.measure(!1), this.layoutCorrected = Se(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !hw(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      i && (a || Jn(this.latestValues) || u) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return i && (l = this.removeTransform(l)), nM(l), {
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
        return Se();
      const l = a.measureViewportBox();
      if (!(((i = this.scroll) === null || i === void 0 ? void 0 : i.wasRoot) || this.path.some(rM))) {
        const { scroll: u } = this.root;
        u && (zr(l.x, u.offset.x), zr(l.y, u.offset.y));
      }
      return l;
    }
    removeElementScroll(i) {
      var a;
      const l = Se();
      if (ft(l, i), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c], { scroll: f, options: d } = u;
        u !== this.root && f && d.layoutScroll && (f.wasRoot && ft(l, i), zr(l.x, f.offset.x), zr(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(i, a = !1) {
      const l = Se();
      ft(l, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a && u.options.layoutScroll && u.scroll && u !== u.root && Br(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), Jn(u.latestValues) && Br(l, u.latestValues);
      }
      return Jn(this.latestValues) && Br(l, this.latestValues), l;
    }
    removeTransform(i) {
      const a = Se();
      ft(a, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Jn(c.latestValues))
          continue;
        mu(c.latestValues) && c.updateSnapshot();
        const u = Se(), f = c.measurePageBox();
        ft(u, f), nm(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return Jn(this.latestValues) && nm(a, this.latestValues), a;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== je.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(i = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (!(i || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (this.resolvedRelativeTargetAt = je.timestamp, !this.targetDelta && !this.relativeTarget) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Se(), this.relativeTargetOrigin = Se(), es(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox), ft(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Se(), this.targetWithTransforms = Se()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), i2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ft(this.target, this.layout.layoutBox), lw(this.target, this.targetDelta)) : ft(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Se(), this.relativeTargetOrigin = Se(), es(this.relativeTargetOrigin, this.target, g.target), ft(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Bo && er.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || mu(this.parent.latestValues) || aw(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var i;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let c = !0;
      if ((this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === je.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: f } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || f))
        return;
      ft(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, g = this.treeScale.y;
      m2(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = Se());
      const { target: w } = a;
      if (!w) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Jh(this.prevProjectionDelta.x, this.projectionDelta.x), Jh(this.prevProjectionDelta.y, this.projectionDelta.y)), Jo(this.projectionDelta, this.layoutCorrected, w, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== g || !am(this.projectionDelta.x, this.prevProjectionDelta.x) || !am(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", w)), Bo && er.recalculatedProjection++;
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
      this.prevProjectionDelta = Vr(), this.projectionDelta = Vr(), this.projectionDeltaWithTransform = Vr();
    }
    setAnimationOrigin(i, a = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, f = Vr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const d = Se(), g = l ? l.source : void 0, w = this.layout ? this.layout.source : void 0, v = g !== w, b = this.getStack(), m = !b || b.members.length <= 1, h = !!(v && !m && this.options.crossfade === !0 && !this.path.some(eM));
      this.animationProgress = 0;
      let y;
      this.mixTargetDelta = (S) => {
        const k = S / 1e3;
        dm(f.x, i.x, k), dm(f.y, i.y, k), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (es(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), J2(this.relativeTarget, this.relativeTargetOrigin, d, k), y && I2(this.relativeTarget, y) && (this.isProjectionDirty = !1), y || (y = Se()), ft(y, this.relativeTarget)), v && (this.animationValues = u, A2(u, c, this.latestValues, k, h, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Fn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ce.update(() => {
        Vi.hasAnimatedSinceResize = !0, this.currentAnimation = E2(0, lm, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(lm), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = i;
      if (!(!a || !l || !c)) {
        if (this !== i && this.layout && c && vw(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || Se();
          const f = at(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + f;
          const d = at(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + d;
        }
        ft(a, l), Br(a, u), Jo(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(i, a) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new F2()), this.sharedNodes.get(i).add(a);
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
      l.z && Xl("z", i, c, this.animationValues);
      for (let u = 0; u < Yl.length; u++)
        Xl(`rotate${Yl[u]}`, i, c, this.animationValues), Xl(`skew${Yl[u]}`, i, c, this.animationValues);
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
        return z2;
      const c = {
        visibility: ""
      }, u = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = Ii(i == null ? void 0 : i.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = Ii(i == null ? void 0 : i.pointerEvents) || ""), this.hasProjected && !Jn(this.latestValues) && (v.transform = u ? u({}, "") : "none", this.hasProjected = !1), v;
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), c.transform = V2(this.projectionDeltaWithTransform, this.treeScale, d), u && (c.transform = u(d, c.transform));
      const { x: g, y: w } = this.projectionDelta;
      c.transformOrigin = `${g.origin * 100}% ${w.origin * 100}% 0`, f.animationValues ? c.opacity = f === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : c.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const v in ya) {
        if (d[v] === void 0)
          continue;
        const { correct: b, applyTo: m } = ya[v], h = c.transform === "none" ? d[v] : b(d[v], f);
        if (m) {
          const y = m.length;
          for (let S = 0; S < y; S++)
            c[m[S]] = h;
        } else
          c[v] = h;
      }
      return this.options.layoutId && (c.pointerEvents = f === this ? Ii(i == null ? void 0 : i.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var a;
        return (a = i.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(cm), this.root.sharedNodes.clear();
    }
  };
}
function $2(e) {
  e.updateLayout();
}
function U2(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: s } = e.options, i = n.source !== e.layout.source;
    s === "size" ? pt((f) => {
      const d = i ? n.measuredBox[f] : n.layoutBox[f], g = at(d);
      d.min = r[f].min, d.max = d.min + g;
    }) : vw(s, n.layoutBox, r) && pt((f) => {
      const d = i ? n.measuredBox[f] : n.layoutBox[f], g = at(r[f]);
      d.max = d.min + g, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + g);
    });
    const a = Vr();
    Jo(a, r, n.layoutBox);
    const l = Vr();
    i ? Jo(l, e.applyTransform(o, !0), n.measuredBox) : Jo(l, r, n.layoutBox);
    const c = !hw(a);
    let u = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const w = Se();
          es(w, n.layoutBox, d.layoutBox);
          const v = Se();
          es(v, r, g.layoutBox), mw(w, v) || (u = !0), f.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = w, e.relativeParent = f);
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
function W2(e) {
  Bo && er.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function H2(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function K2(e) {
  e.clearSnapshot();
}
function cm(e) {
  e.clearMeasurements();
}
function G2(e) {
  e.isLayoutDirty = !1;
}
function Y2(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function um(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function X2(e) {
  e.resolveTargetDelta();
}
function Q2(e) {
  e.calcProjection();
}
function q2(e) {
  e.resetSkewAndRotation();
}
function Z2(e) {
  e.removeLeadSnapshot();
}
function dm(e, t, n) {
  e.translate = fe(t.translate, 0, n), e.scale = fe(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function fm(e, t, n, r) {
  e.min = fe(t.min, n.min, r), e.max = fe(t.max, n.max, r);
}
function J2(e, t, n, r) {
  fm(e.x, t.x, n.x, r), fm(e.y, t.y, n.y, r);
}
function eM(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const tM = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, pm = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), hm = pm("applewebkit/") && !pm("chrome/") ? Math.round : st;
function mm(e) {
  e.min = hm(e.min), e.max = hm(e.max);
}
function nM(e) {
  mm(e.x), mm(e.y);
}
function vw(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !s2(im(t), im(n), 0.2);
}
function rM(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const oM = yw({
  attachResizeListener: (e, t) => Ps(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Ql = {
  current: void 0
}, xw = yw({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Ql.current) {
      const e = new oM({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Ql.current = e;
    }
    return Ql.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), sM = {
  pan: {
    Feature: b2
  },
  drag: {
    Feature: w2,
    ProjectionNode: xw,
    MeasureLayout: dw
  }
};
function gm(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, s = r[o];
  s && ce.postRender(() => s(t, zs(t)));
}
class iM extends Kn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = sD(t, (n) => (gm(this.node, n, "Start"), (r) => gm(this.node, r, "End"))));
  }
  unmount() {
  }
}
class aM extends Kn {
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
    this.unmount = Vs(Ps(this.node.current, "focus", () => this.onFocus()), Ps(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function ym(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n), s = r[o];
  s && ce.postRender(() => s(t, zs(t)));
}
class lM extends Kn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = cD(t, (n) => (ym(this.node, n, "Start"), (r, { success: o }) => ym(this.node, r, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const yu = /* @__PURE__ */ new WeakMap(), ql = /* @__PURE__ */ new WeakMap(), cM = (e) => {
  const t = yu.get(e.target);
  t && t(e);
}, uM = (e) => {
  e.forEach(cM);
};
function dM({ root: e, ...t }) {
  const n = e || document;
  ql.has(n) || ql.set(n, {});
  const r = ql.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(uM, { root: e, ...t })), r[o];
}
function fM(e, t, n) {
  const r = dM(t);
  return yu.set(e, n), r.observe(e), () => {
    yu.delete(e), r.unobserve(e);
  };
}
const pM = {
  some: 0,
  all: 1
};
class hM extends Kn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: s } = t, i = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : pM[o]
    }, a = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, s && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: f } = this.node.getProps(), d = c ? u : f;
      d && d(l);
    };
    return fM(this.node.current, i, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(mM(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function mM({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const gM = {
  inView: {
    Feature: hM
  },
  tap: {
    Feature: lM
  },
  focus: {
    Feature: aM
  },
  hover: {
    Feature: iM
  }
}, yM = {
  layout: {
    ProjectionNode: xw,
    MeasureLayout: dw
  }
}, vu = { current: null }, ww = { current: !1 };
function vM() {
  if (ww.current = !0, !!Fd)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => vu.current = e.matches;
      e.addListener(t), t();
    } else
      vu.current = !1;
}
const xM = [...Hx, Fe, Vn], wM = (e) => xM.find(Wx(e)), vm = /* @__PURE__ */ new WeakMap();
function bM(e, t, n) {
  for (const r in t) {
    const o = t[r], s = n[r];
    if (ze(o))
      e.addValue(r, o);
    else if (ze(s))
      e.addValue(r, Es(o, { owner: e }));
    else if (s !== o)
      if (e.hasValue(r)) {
        const i = e.getValue(r);
        i.liveStyle === !0 ? i.jump(o) : i.hasAnimated || i.set(o);
      } else {
        const i = e.getStaticValue(r);
        e.addValue(r, Es(i !== void 0 ? i : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const xm = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class SM {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = ff, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const g = $t.now();
      this.renderScheduledAt < g && (this.renderScheduledAt = g, ce.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: c, onUpdate: u } = i;
    this.onUpdate = u, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.blockInitialAnimation = !!s, this.isControllingVariants = Ja(n), this.isVariantNode = J0(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const g in d) {
      const w = d[g];
      l[g] !== void 0 && ze(w) && w.set(l[g], !1);
    }
  }
  mount(t) {
    this.current = t, vm.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), ww.current || vM(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : vu.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    vm.delete(this.current), this.projection && this.projection.unmount(), Fn(this.notifyUpdate), Fn(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const r = xr.has(t), o = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && ce.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
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
    for (t in lo) {
      const n = lo[t];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Se();
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
    for (let r = 0; r < xm.length; r++) {
      const o = xm[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const s = "on" + o, i = t[s];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = bM(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return r === void 0 && n !== void 0 && (r = Es(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return o != null && (typeof o == "string" && ($x(o) || jx(o)) ? o = parseFloat(o) : !wM(o) && Vn.test(n) && (o = Vx(t, n)), this.setBaseTarget(t, ze(o) ? o.get() : o)), ze(o) ? o.get() : o;
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
      const i = Hd(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      i && (o = i[t]);
    }
    if (r && o !== void 0)
      return o;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !ze(s) ? s : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new sf()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class bw extends SM {
  constructor() {
    super(...arguments), this.KeyframeResolver = Kx;
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
    ze(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function kM(e) {
  return window.getComputedStyle(e);
}
class CM extends bw {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = lx;
  }
  readValueFromInstance(t, n) {
    if (xr.has(n)) {
      const r = df(n);
      return r && r.default || 0;
    } else {
      const r = kM(t), o = (sx(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return cw(t, n);
  }
  build(t, n, r) {
    Yd(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Zd(t, n, r);
  }
}
class EM extends bw {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Se;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (xr.has(n)) {
      const r = df(n);
      return r && r.default || 0;
    }
    return n = cx.has(n) ? n : $d(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return fx(t, n, r);
  }
  build(t, n, r) {
    Xd(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    ux(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = qd(t.tagName), super.mount(t);
  }
}
const TM = (e, t) => Wd(e) ? new EM(t) : new CM(t, {
  allowProjection: e !== x.Fragment
}), PM = /* @__PURE__ */ ZP({
  ...QN,
  ...gM,
  ...sM,
  ...yM
}, TM), xi = /* @__PURE__ */ pP(PM);
function Qt(e = "default") {
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
function Sw(e = "default") {
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
function DM(e = "default") {
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
function zn(e, t = {}) {
  return e && t[e] ? t[e] : "default";
}
function kw(e) {
  const t = {};
  return !e || !Array.isArray(e) || e.forEach((n) => {
    n.variant && (t[n.slug] = n.variant);
  }), t;
}
function NM({ events: e, eventMetadata: t, categoryMappings: n, onDateClick: r, onEventClick: o, onMonthChange: s, currentDate: i }) {
  const [a, l] = x.useState(/* @__PURE__ */ new Date()), c = i || a, [u, f] = x.useState(0), [d, g] = x.useState(null), w = (N, P) => {
    const M = new Date(P, N + 1, 0).getDate();
    return Array.from({ length: M }, (j, _) => ({ day: _ + 1 }));
  }, v = (N, P) => e.filter((j) => {
    const _ = new Date(j.startDate);
    return _.getDate() === N && _.getMonth() === P.getMonth() && _.getFullYear() === P.getFullYear();
  }), b = (N) => N.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), m = () => {
    f(-1);
    const N = new Date(c.getFullYear(), c.getMonth() - 1, 1);
    i || l(N), s == null || s(N);
  }, h = () => {
    f(1);
    const N = new Date(c.getFullYear(), c.getMonth() + 1, 1);
    i || l(N), s == null || s(N);
  }, y = w(c.getMonth(), c.getFullYear()), S = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], E = new Date(c.getFullYear(), c.getMonth(), 1).getDay(), C = new Date(c.getFullYear(), c.getMonth() - 1, 1), T = new Date(C.getFullYear(), C.getMonth() + 1, 0).getDate(), R = ({ events: N }) => {
    const P = N.reduce((M, j) => {
      const _ = t[j.id], V = (_ == null ? void 0 : _.category) || "uncategorized";
      return M[V] || (M[V] = []), M[V].push(j), M;
    }, {});
    return /* @__PURE__ */ p.jsx("div", { className: "flex flex-wrap gap-1", children: Object.entries(P).map(([M, j]) => {
      const _ = zn(M === "uncategorized" ? null : M, n), V = Qt(_);
      return /* @__PURE__ */ p.jsx(
        "div",
        {
          className: `${V} text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium shadow-sm`,
          title: `${j.length} ${M} event${j.length > 1 ? "s" : ""}: ${j.map((I) => I.title).join(", ")}`,
          children: j.length
        },
        M
      );
    }) });
  };
  return /* @__PURE__ */ p.jsxs("div", { children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4", children: [
      /* @__PURE__ */ p.jsxs(
        xi.h2,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.5 },
          className: "text-3xl my-5 tracking-tighter font-bold text-gray-900 dark:text-gray-100",
          children: [
            c.toLocaleString("default", { month: "long" }),
            " ",
            c.getFullYear()
          ]
        },
        c.getMonth()
      ),
      /* @__PURE__ */ p.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ p.jsxs(Zt, { variant: "outline", onClick: m, className: "gap-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600", children: [
          /* @__PURE__ */ p.jsx(Zv, { className: "h-4 w-4" }),
          "Prev"
        ] }),
        /* @__PURE__ */ p.jsxs(Zt, { variant: "outline", onClick: h, className: "gap-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600", children: [
          "Next",
          /* @__PURE__ */ p.jsx(Jv, { className: "h-4 w-4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-7 gap-1 sm:gap-2 mb-4", children: S.map((N, P) => /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "text-left py-2 text-lg tracking-tighter font-medium text-gray-900 dark:text-gray-100",
        children: N
      },
      P
    )) }),
    /* @__PURE__ */ p.jsx(sh, { initial: !1, custom: u, mode: "wait", children: /* @__PURE__ */ p.jsxs(
      xi.div,
      {
        custom: u,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        className: "grid grid-cols-7 gap-1 sm:gap-2",
        children: [
          Array.from({ length: E }).map((N, P) => /* @__PURE__ */ p.jsx("div", { className: "h-[150px] opacity-50 p-4", children: /* @__PURE__ */ p.jsx("div", { className: "font-semibold relative text-3xl mb-1 text-gray-400 dark:text-gray-500", children: T - E + P + 1 }) }, `offset-${P}`)),
          y.map((N) => {
            const P = v(N.day, c), M = (/* @__PURE__ */ new Date()).getDate() === N.day && (/* @__PURE__ */ new Date()).getMonth() === c.getMonth() && (/* @__PURE__ */ new Date()).getFullYear() === c.getFullYear(), _ = (E + N.day - 1) % 7 >= 5;
            return /* @__PURE__ */ p.jsxs(
              xi.div,
              {
                className: "hover:z-50 border-none h-[150px] rounded group flex flex-col relative",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -20 },
                transition: { duration: 0.3 },
                onMouseEnter: () => g(N.day),
                onMouseLeave: () => g(null),
                children: [
                  /* @__PURE__ */ p.jsxs(
                    hd,
                    {
                      className: `bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md overflow-hidden relative flex p-4 border h-full transition-shadow day-card ${P.length > 0 ? "cursor-pointer hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700" : "cursor-default"}`,
                      onClick: P.length > 0 ? () => r == null ? void 0 : r(new Date(c.getFullYear(), c.getMonth(), N.day)) : void 0,
                      children: [
                        /* @__PURE__ */ p.jsx("div", { className: `font-semibold relative text-3xl mb-1 ${P.length > 0 ? "text-gray-900 dark:text-gray-100" : "text-gray-500 dark:text-gray-400"} ${M ? "text-blue-600 dark:text-blue-400" : ""}`, children: N.day }),
                        /* @__PURE__ */ p.jsx("div", { className: "flex-grow flex flex-col gap-2 w-full", children: /* @__PURE__ */ p.jsx(sh, { mode: "wait", children: (P == null ? void 0 : P.length) > 0 && /* @__PURE__ */ p.jsx(
                          xi.div,
                          {
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0, y: -20 },
                            transition: { duration: 0.3 },
                            children: /* @__PURE__ */ p.jsx(R, { events: P })
                          },
                          P[0].id
                        ) }) })
                      ]
                    }
                  ),
                  d === N.day && P.length > 0 && /* @__PURE__ */ p.jsxs(
                    "div",
                    {
                      className: `absolute top-full z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3 w-80 ${_ ? "right-0" : "left-0"}`,
                      onMouseEnter: () => g(N.day),
                      onMouseLeave: () => g(null),
                      children: [
                        /* @__PURE__ */ p.jsxs("div", { className: "text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2", children: [
                          P.length,
                          " event",
                          P.length > 1 ? "s" : ""
                        ] }),
                        /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: P.map((V) => {
                          const I = t[V.id], B = zn(I == null ? void 0 : I.category, n), D = Qt(B);
                          return /* @__PURE__ */ p.jsxs(
                            "div",
                            {
                              className: "flex items-start gap-2 p-1 -m-1 rounded cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors",
                              onClick: (L) => {
                                L.stopPropagation(), o == null || o(V);
                              },
                              children: [
                                /* @__PURE__ */ p.jsx("div", { className: `w-2 h-2 rounded-full ${D} flex-shrink-0 mt-1.5` }),
                                /* @__PURE__ */ p.jsxs("div", { className: "flex-1 min-w-0", children: [
                                  /* @__PURE__ */ p.jsx("div", { className: "font-medium text-sm text-gray-900 dark:text-gray-100 leading-tight", children: V.title }),
                                  /* @__PURE__ */ p.jsx("div", { className: "text-xs text-gray-600 dark:text-gray-400 mt-0.5", children: b(V.startDate) })
                                ] })
                              ]
                            },
                            V.id
                          );
                        }) })
                      ]
                    }
                  )
                ]
              },
              N.day
            );
          }),
          (() => {
            const P = (E + y.length) % 7, M = P === 0 ? 0 : 7 - P;
            return Array.from({ length: M }).map((j, _) => /* @__PURE__ */ p.jsx("div", { className: "h-[150px] opacity-50 p-4", children: /* @__PURE__ */ p.jsx("div", { className: "font-semibold relative text-3xl mb-1 text-gray-400 dark:text-gray-500", children: _ + 1 }) }, `next-${_}`));
          })()
        ]
      },
      `${c.getFullYear()}-${c.getMonth()}`
    ) })
  ] });
}
function MM({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r }) {
  const [o, s] = K.useState(/* @__PURE__ */ new Date()), a = ((d) => {
    const g = new Date(d);
    return g.setDate(d.getDate() - d.getDay()), Array.from({ length: 7 }, (w, v) => {
      const b = new Date(g);
      return b.setDate(g.getDate() + v), b;
    });
  })(o), l = Array.from({ length: 24 }, (d, g) => g), c = (d) => e.filter((g) => g.startDate.toDateString() === d.toDateString()), u = (d) => {
    const g = new Date(o);
    g.setDate(o.getDate() + (d === "next" ? 7 : -7)), s(g);
  }, f = (d, g, w) => {
    const v = d.startDate.getHours(), b = d.startDate.getMinutes(), m = d.endDate ? d.endDate.getHours() : v + 1, h = d.endDate ? d.endDate.getMinutes() : 0, y = v + b / 60, S = m + h / 60, k = S - y, E = g.filter((P) => {
      if (P.id === d.id) return !0;
      if (P.startDate.toDateString() !== d.startDate.toDateString())
        return !1;
      const M = P.startDate.getHours() + P.startDate.getMinutes() / 60, j = (P.endDate ? P.endDate.getHours() : P.startDate.getHours() + 1) + (P.endDate ? P.endDate.getMinutes() / 60 : 0);
      return y < j && S > M;
    }), C = E.length, T = E.findIndex((P) => P.id === d.id), R = C > 1 ? 100 / C : 100, N = C > 1 ? T * R : 0;
    return {
      top: `${y * 80}px`,
      // 80px per hour for better readability
      height: `${k * 80}px`,
      // Accurate height based on actual duration
      left: `${N}%`,
      width: `${R}%`
    };
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ p.jsx(
        "button",
        {
          onClick: () => u("prev"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ p.jsx(e0, { className: "h-5 w-5" })
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
          children: /* @__PURE__ */ p.jsx(t0, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-8 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700", children: [
        /* @__PURE__ */ p.jsx("div", { className: "p-3 text-xs font-medium text-gray-500 dark:text-gray-400 border-r border-gray-200 dark:border-gray-600", children: "Time" }),
        a.map((d, g) => /* @__PURE__ */ p.jsxs("div", { className: "p-3 text-center border-r border-gray-200 dark:border-gray-600 last:border-r-0", children: [
          /* @__PURE__ */ p.jsx("div", { className: "text-xs font-medium text-gray-500 dark:text-gray-400", children: d.toLocaleDateString("en-US", { weekday: "short" }) }),
          /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-gray-900 dark:text-gray-100", children: d.getDate() })
        ] }, g))
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-8 relative", children: [
        /* @__PURE__ */ p.jsx("div", { className: "border-r border-gray-200 dark:border-gray-600", children: l.map((d) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] p-2 text-xs text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600 flex items-start", children: d === 0 ? "12 AM" : d === 12 ? "12 PM" : d > 12 ? `${d - 12} PM` : `${d} AM` }, d)) }),
        a.map((d, g) => {
          const w = c(d);
          return /* @__PURE__ */ p.jsxs("div", { className: "relative border-r border-gray-200 dark:border-gray-600 last:border-r-0", children: [
            l.map((v) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] border-b border-gray-200 dark:border-gray-600" }, v)),
            w.map((v, b) => {
              const m = t[v.id], h = zn(m == null ? void 0 : m.category, n), y = Sw(h), S = f(v, w);
              return /* @__PURE__ */ p.jsxs(
                "div",
                {
                  className: `absolute ${y} border rounded p-2 text-sm z-20 overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow event-card`,
                  style: {
                    ...S,
                    margin: "1px"
                  },
                  onClick: (k) => {
                    k.stopPropagation(), r == null || r(v);
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
function AM({ events: e, eventMetadata: t, categoryMappings: n, initialDate: r, onEventClick: o }) {
  const [s, i] = K.useState(r || /* @__PURE__ */ new Date());
  K.useEffect(() => {
    r && i(r);
  }, [r]);
  const a = Array.from({ length: 24 }, (d, g) => g), l = () => e.filter((d) => d.startDate.toDateString() === s.toDateString()), c = (d) => {
    const g = new Date(s);
    g.setDate(s.getDate() + (d === "next" ? 1 : -1)), i(g);
  }, u = (d, g, w) => {
    const v = d.startDate.getHours(), b = d.startDate.getMinutes(), m = d.endDate ? d.endDate.getHours() : v + 1, h = d.endDate ? d.endDate.getMinutes() : 0, y = v + b / 60, S = m + h / 60, k = S - y, E = g.filter((P) => {
      if (P.id === d.id) return !0;
      const M = P.startDate.getHours() + P.startDate.getMinutes() / 60, j = (P.endDate ? P.endDate.getHours() : P.startDate.getHours() + 1) + (P.endDate ? P.endDate.getMinutes() / 60 : 0);
      return y < j && S > M;
    }), C = E.length, T = E.findIndex((P) => P.id === d.id), R = C > 1 ? 100 / C : 100, N = C > 1 ? T * R : 0;
    return {
      top: `${y * 80}px`,
      // 80px per hour for day view
      height: `${k * 80}px`,
      // Accurate height based on actual duration
      left: `${N}%`,
      width: `${R}%`
    };
  }, f = l();
  return /* @__PURE__ */ p.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ p.jsx(
        "button",
        {
          onClick: () => c("prev"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ p.jsx(e0, { className: "h-5 w-5" })
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
          children: /* @__PURE__ */ p.jsx(t0, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden", children: /* @__PURE__ */ p.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ p.jsx("div", { className: "w-20 border-r border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700", children: a.map((d) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] p-3 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600 flex items-start", children: d === 0 ? "12 AM" : d === 12 ? "12 PM" : d > 12 ? `${d - 12} PM` : `${d} AM` }, d)) }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex-1 relative", children: [
        a.map((d) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] border-b border-gray-200 dark:border-gray-600" }, d)),
        f.map((d, g) => {
          const w = t[d.id], v = zn(w == null ? void 0 : w.category, n), b = Sw(v), m = u(d, f);
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `absolute ${b} border rounded-lg p-2 text-sm z-20 overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow event-card`,
              style: {
                ...m,
                margin: "2px"
              },
              onClick: (h) => {
                h.stopPropagation(), o == null || o(d);
              },
              children: [
                /* @__PURE__ */ p.jsx("div", { className: "font-semibold leading-tight truncate", children: d.title }),
                /* @__PURE__ */ p.jsxs("div", { className: "text-xs opacity-75 leading-tight", children: [
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
                w && /* @__PURE__ */ p.jsxs("div", { className: "text-xs leading-tight", children: [
                  /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ p.jsx(Ls, { className: "h-2.5 w-2.5" }),
                    /* @__PURE__ */ p.jsx("span", { className: "truncate", children: w.location })
                  ] }),
                  w.organization && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ p.jsx(oT, { className: "h-2.5 w-2.5" }),
                    /* @__PURE__ */ p.jsx("span", { className: "truncate opacity-75", children: w.organization })
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
function RM({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onMonthChange: o, currentDate: s }) {
  const [i, a] = K.useState(/* @__PURE__ */ new Date()), [l, c] = K.useState(/* @__PURE__ */ new Date()), u = s || l, f = () => {
    const P = new Date(u.getFullYear(), u.getMonth() - 1, 1);
    s || c(P), o == null || o(P);
  }, d = () => {
    const P = new Date(u.getFullYear(), u.getMonth() + 1, 1);
    s || c(P), o == null || o(P);
  }, g = (P) => P.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), w = () => i ? e.filter((P) => {
    const M = new Date(P.startDate);
    return M.getDate() === i.getDate() && M.getMonth() === i.getMonth() && M.getFullYear() === i.getFullYear();
  }) : [], v = (P) => e.some((M) => {
    const j = new Date(M.startDate);
    return j.getDate() === P.getDate() && j.getMonth() === P.getMonth() && j.getFullYear() === P.getFullYear();
  }), b = w(), m = u.getFullYear(), h = u.getMonth(), y = new Date(m, h, 1), S = new Date(y);
  S.setDate(S.getDate() - y.getDay());
  const k = [], E = new Date(S), C = new Date(m, h + 1, 0).getDate(), T = y.getDay() + C, N = Math.ceil(T / 7) * 7;
  for (let P = 0; P < N; P++)
    k.push(new Date(E)), E.setDate(E.getDate() + 1);
  return /* @__PURE__ */ p.jsxs(hd, { className: "w-full py-4 mobile-calendar bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700", children: [
    /* @__PURE__ */ p.jsxs(zy, { className: "px-4", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between mb-4 gap-2", children: [
        /* @__PURE__ */ p.jsxs(
          Zt,
          {
            variant: "outline",
            size: "sm",
            onClick: f,
            className: "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 flex-shrink-0",
            children: [
              /* @__PURE__ */ p.jsx(Zv, { className: "h-4 w-4" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Prev" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsx("h3", { className: "text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 text-center flex-1 min-w-0 truncate", children: u.toLocaleDateString("en-US", { month: "long", year: "numeric" }) }),
        /* @__PURE__ */ p.jsxs(
          Zt,
          {
            variant: "outline",
            size: "sm",
            onClick: d,
            className: "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 flex-shrink-0",
            children: [
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Next" }),
              /* @__PURE__ */ p.jsx(Jv, { className: "h-4 w-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-7 gap-1 mb-4", children: [
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((P) => /* @__PURE__ */ p.jsx("div", { className: "text-center text-sm font-medium py-2 text-gray-600 dark:text-gray-400", children: P }, P)),
        k.map((P, M) => {
          const j = P.getMonth() === h, _ = i && P.getDate() === i.getDate() && P.getMonth() === i.getMonth() && P.getFullYear() === i.getFullYear(), V = P.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), I = v(P);
          return /* @__PURE__ */ p.jsxs(
            "button",
            {
              onClick: () => a(P),
              className: `
                  p-2 text-sm rounded transition-colors relative focus:outline-none
                  ${j ? "text-gray-900 dark:text-gray-100" : "text-gray-400 dark:text-gray-500"}
                  ${_ ? "bg-blue-500 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-700" : "hover:bg-gray-100 dark:hover:bg-gray-600"}
                  ${V && !_ ? "bg-gray-200 dark:bg-gray-600 font-semibold" : ""}
                `,
              children: [
                P.getDate(),
                I && /* @__PURE__ */ p.jsx(
                  "span",
                  {
                    className: "absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full",
                    "aria-label": "Events available"
                  }
                )
              ]
            },
            M
          );
        })
      ] })
    ] }),
    /* @__PURE__ */ p.jsxs(AS, { className: "flex flex-col items-start gap-3 border-t border-gray-200 dark:border-gray-600 px-4 !pt-4", children: [
      /* @__PURE__ */ p.jsx("div", { className: "flex w-full items-center justify-between px-1", children: /* @__PURE__ */ p.jsx("div", { className: "text-sm font-medium text-gray-900 dark:text-gray-100", children: i == null ? void 0 : i.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }) }) }),
      /* @__PURE__ */ p.jsx("div", { className: "flex w-full flex-col gap-2", children: b.length === 0 ? /* @__PURE__ */ p.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400 text-center py-4", children: "No events on this day" }) : b.map((P) => {
        const M = t[P.id], j = zn(M == null ? void 0 : M.category, n), V = Qt(j).replace("bg-", "after:bg-");
        return /* @__PURE__ */ p.jsxs(
          "button",
          {
            className: `bg-gray-50 dark:bg-gray-700 relative rounded-md p-2 pl-6 text-sm text-left w-full after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors focus:outline-none ${V}`,
            onClick: () => r == null ? void 0 : r(P),
            children: [
              /* @__PURE__ */ p.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100", children: P.title }),
              /* @__PURE__ */ p.jsxs("div", { className: "text-muted-foreground dark:text-gray-400 text-xs", children: [
                g(P.startDate),
                " - ",
                g(P.endDate),
                M && ` • ${M.location}`
              ] })
            ]
          },
          P.id
        );
      }) })
    ] })
  ] });
}
function jM({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onLoadMore: o, hasMore: s, loading: i }) {
  const a = (d) => d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), l = /* @__PURE__ */ new Date();
  l.setHours(0, 0, 0, 0);
  const u = [...e.filter((d) => {
    const g = new Date(d.startDate);
    return g.setHours(0, 0, 0, 0), g >= l;
  })].sort((d, g) => d.startDate.getTime() - g.startDate.getTime()), f = u.reduce((d, g) => {
    const w = g.startDate.toDateString();
    return d[w] || (d[w] = []), d[w].push(g), d;
  }, {});
  return /* @__PURE__ */ p.jsxs("div", { className: "space-y-6", children: [
    u.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-12 text-gray-500 dark:text-gray-400", children: [
      /* @__PURE__ */ p.jsx(Ss, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
      /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-medium mb-2", children: "No events found" }),
      /* @__PURE__ */ p.jsx("p", { children: "Try adjusting your filters to see more events." })
    ] }) : Object.entries(f).map(([d, g]) => {
      const w = new Date(d), v = w.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), b = w.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let m;
      return v ? m = "Today" : b ? m = "Tomorrow" : m = w.toLocaleDateString("en-US", {
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
          const y = t[h.id], S = zn(y == null ? void 0 : y.category, n), E = Qt(S).replace("bg-", "after:bg-");
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `bg-muted dark:bg-gray-700 relative rounded-md p-3 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors ${E}`,
              onClick: () => r == null ? void 0 : r(h),
              children: [
                /* @__PURE__ */ p.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ p.jsxs("div", { className: "flex-grow min-w-0", children: [
                    /* @__PURE__ */ p.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 mb-2", children: h.title }),
                    /* @__PURE__ */ p.jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(so, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsxs("span", { children: [
                          a(h.startDate),
                          " - ",
                          a(h.endDate)
                        ] })
                      ] }),
                      (y == null ? void 0 : y.location) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(Ls, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: y.location })
                      ] }),
                      (y == null ? void 0 : y.organization) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(Ga, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: y.organization })
                      ] })
                    ] })
                  ] }),
                  y && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: y.cost })
                ] }),
                (y == null ? void 0 : y.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-2", children: /* @__PURE__ */ p.jsx(io, { variant: "outline", size: "sm", children: "Registration Required" }) })
              ]
            },
            h.id
          );
        }) })
      ] }, d);
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
function LM({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onLoadMore: o, hasMore: s, loading: i }) {
  const a = (d) => d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), l = /* @__PURE__ */ new Date();
  l.setHours(0, 0, 0, 0);
  const u = [...e.filter((d) => {
    const g = new Date(d.startDate);
    return g.setHours(0, 0, 0, 0), g >= l;
  })].sort((d, g) => d.startDate.getTime() - g.startDate.getTime()), f = u.reduce((d, g) => {
    const w = g.startDate.toDateString();
    return d[w] || (d[w] = []), d[w].push(g), d;
  }, {});
  return /* @__PURE__ */ p.jsxs("div", { className: "space-y-6", children: [
    u.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-12 text-gray-500 dark:text-gray-400", children: [
      /* @__PURE__ */ p.jsx(Ss, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
      /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-medium mb-2", children: "No events found" }),
      /* @__PURE__ */ p.jsx("p", { children: "Try adjusting your filters to see more events." })
    ] }) : Object.entries(f).map(([d, g]) => {
      const w = new Date(d), v = w.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), b = w.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let m;
      return v ? m = "Today" : b ? m = "Tomorrow" : m = w.toLocaleDateString("en-US", {
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
          const y = t[h.id], S = zn(y == null ? void 0 : y.category, n), E = Qt(S).replace("bg-", "after:bg-");
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `bg-muted dark:bg-gray-700 relative rounded-md p-3 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors ${E}`,
              onClick: () => r == null ? void 0 : r(h),
              children: [
                /* @__PURE__ */ p.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ p.jsxs("div", { className: "flex-grow min-w-0", children: [
                    /* @__PURE__ */ p.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 mb-2", children: h.title }),
                    /* @__PURE__ */ p.jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(so, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsxs("span", { children: [
                          a(h.startDate),
                          " - ",
                          a(h.endDate)
                        ] })
                      ] }),
                      (y == null ? void 0 : y.location) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(Ls, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: y.location })
                      ] }),
                      (y == null ? void 0 : y.organization) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(Ga, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: y.organization })
                      ] })
                    ] })
                  ] }),
                  y && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: y.cost })
                ] }),
                (y == null ? void 0 : y.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-2", children: /* @__PURE__ */ p.jsx(io, { variant: "outline", size: "sm", children: "Registration Required" }) })
              ]
            },
            h.id
          );
        }) })
      ] }, d);
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
function _M({
  initialView: e = "month",
  initialCategoryFilter: t = "all",
  initialOrganizationFilter: n = "all",
  showWeekView: r = !0,
  showDayView: o = !0
} = {}) {
  var Bs, Gn, gf, yf;
  const [s, i] = x.useState(e), [a, l] = x.useState(/* @__PURE__ */ new Date()), [c, u] = x.useState(/* @__PURE__ */ new Date()), [f, d] = x.useState(null), [g, w] = x.useState(!1), [v, b] = x.useState(30), [m, h] = x.useState(30), [y, S] = x.useState(15);
  K.useEffect(() => {
    const O = document.querySelector(".unbc-calendar-container");
    if (O) {
      const te = parseInt(O.getAttribute("data-list-initial-items") || "30"), ge = parseInt(O.getAttribute("data-list-load-more-count") || "15");
      h(te), S(ge), b(te);
    }
  }, []), K.useEffect(() => {
    const O = document.createElement("style");
    O.textContent = `
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

      /* FORCE calendar tabs styling with maximum specificity - isolate from theme CSS */
      #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"] {
        background-color: rgb(243 244 246) !important; /* bg-gray-100 */
        border: none !important;
        box-shadow: none !important;
      }
      
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"] {
        background-color: rgb(55 65 81) !important; /* dark:bg-gray-700 */
      }
      
      /* Force tab text colors with high specificity */
      #unbc-calendar-react-component[data-calendar-isolated] button[data-slot="tabs-trigger"] {
        color: rgb(107 114 128) !important; /* text-gray-500 */
        background: transparent !important;
      }
      
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] button[data-slot="tabs-trigger"] {
        color: rgb(209 213 219) !important; /* dark:text-gray-300 */
      }
      
      /* Force active tab styling */
      #unbc-calendar-react-component[data-calendar-isolated] button[data-slot="tabs-trigger"][data-state="active"] {
        background-color: white !important;
        color: rgb(17 24 39) !important; /* text-gray-900 */
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05) !important;
      }
      
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] button[data-slot="tabs-trigger"][data-state="active"] {
        background-color: rgb(75 85 99) !important; /* dark:bg-gray-600 */
        color: white !important;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.25) !important;
      }
      
      /* Nuclear option: completely isolate calendar styling with theme CSS variable support */
      #unbc-calendar-react-component[data-calendar-isolated] {
        --calendar-tab-bg: var(--wp--preset--color--base, var(--background, rgb(243 244 246)));
        --calendar-tab-bg-dark: var(--wp--preset--color--contrast, var(--background-dark, rgb(55 65 81)));
        --calendar-tab-text: var(--wp--preset--color--contrast, var(--foreground, rgb(107 114 128)));
        --calendar-tab-text-dark: var(--wp--preset--color--base, var(--foreground-dark, rgb(209 213 219)));
        --calendar-tab-active-bg: var(--wp--preset--color--surface, var(--card, white));
        --calendar-tab-active-bg-dark: var(--wp--preset--color--surface-dark, var(--card-dark, rgb(75 85 99)));
        --calendar-tab-active-text: var(--wp--preset--color--heading, var(--card-foreground, rgb(17 24 39)));
        --calendar-tab-active-text-dark: var(--wp--preset--color--heading-dark, var(--card-foreground-dark, white));
        font-family: inherit !important;
        
        /* Override theme variables within calendar scope */
        --muted: var(--wp--preset--color--tertiary, var(--muted, rgb(55 65 81))) !important;
        --tw-bg-opacity: 1 !important;
      }
      
      /* Dynamic theme detection support */
      @media (prefers-color-scheme: dark) {
        #unbc-calendar-react-component[data-calendar-isolated]:not([data-theme-override]) {
          --calendar-tab-bg: var(--calendar-tab-bg-dark);
          --calendar-tab-text: var(--calendar-tab-text-dark);
          --calendar-tab-active-bg: var(--calendar-tab-active-bg-dark);
          --calendar-tab-active-text: var(--calendar-tab-active-text-dark);
        }
      }
      
      /* JavaScript-detected theme support */
      #unbc-calendar-react-component[data-detected-theme="dark"] [data-slot="tabs-list"] {
        background-color: var(--calendar-tab-bg-dark) !important;
        background: var(--calendar-tab-bg-dark) !important;
      }
      
      #unbc-calendar-react-component[data-detected-theme="dark"] [data-slot="tabs-trigger"] {
        color: var(--calendar-tab-text-dark) !important;
      }
      
      #unbc-calendar-react-component[data-detected-theme="dark"] [data-slot="tabs-trigger"][data-state="active"] {
        background-color: var(--calendar-tab-active-bg-dark) !important;
        color: var(--calendar-tab-active-text-dark) !important;
      }
      
      /* Override any nested theme selectors - support multiple theme detection patterns */
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"],
      html.dark #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"],
      body.dark #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"],
      [data-color-scheme="dark"] #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"],
      .is-dark-theme #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"],
      html[data-theme="dark"] body #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"],
      html[data-theme="dark"] body div #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"] {
        background-color: var(--calendar-tab-bg-dark) !important;
        background: var(--calendar-tab-bg-dark) !important;
      }
      
      html[data-theme="light"] #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"],
      html.light #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"],
      body.light #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"],
      [data-color-scheme="light"] #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"],
      .is-light-theme #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"],
      body #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"],
      #unbc-calendar-react-component[data-calendar-isolated] div[data-slot="tabs-list"] {
        background-color: var(--calendar-tab-bg) !important;
        background: var(--calendar-tab-bg) !important;
      }
      
      /* ULTRA NUCLEAR: Override the specific theme selector that's causing issues */
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] .bg-gray-100,
      html.dark #unbc-calendar-react-component[data-calendar-isolated] .bg-gray-100,
      body.dark #unbc-calendar-react-component[data-calendar-isolated] .bg-gray-100,
      [data-color-scheme="dark"] #unbc-calendar-react-component[data-calendar-isolated] .bg-gray-100,
      .is-dark-theme #unbc-calendar-react-component[data-calendar-isolated] .bg-gray-100,
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] .dark\\:bg-gray-700,
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] [data-slot="tabs-list"].bg-gray-100,
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] [data-slot="tabs-list"].dark\\:bg-gray-700,
      html[data-theme="dark"] body #unbc-calendar-react-component[data-calendar-isolated] .bg-gray-100,
      html[data-theme="dark"] body #unbc-calendar-react-component[data-calendar-isolated] .dark\\:bg-gray-700,
      html[data-theme="dark"] body #unbc-calendar-react-component[data-calendar-isolated] [data-slot="tabs-list"] {
        background-color: var(--calendar-tab-bg-dark) !important;
        background: var(--calendar-tab-bg-dark) !important;
        --muted: var(--calendar-tab-bg-dark) !important;
      }
      
      /* Force exact Tailwind color values */
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] [role="tablist"] {
        background-color: rgb(55 65 81) !important;
        background: rgb(55 65 81) !important;
      }
      
      /* Protect dropdown/select components from theme interference */
      #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-content"] {
        background-color: white !important;
        border-color: rgb(229 231 235) !important; /* border-gray-200 */
        color: rgb(17 24 39) !important; /* text-gray-900 */
      }
      
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-content"],
      html[data-theme="dark"] body #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-content"] {
        background-color: rgb(31 41 55) !important; /* dark:bg-gray-800 */
        border-color: rgb(75 85 99) !important; /* dark:border-gray-600 */
        color: rgb(243 244 246) !important; /* dark:text-gray-100 */
      }
      
      /* Protect select items */
      #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-item"] {
        background-color: transparent !important;
        color: rgb(17 24 39) !important; /* text-gray-900 */
      }
      
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-item"],
      html[data-theme="dark"] body #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-item"] {
        background-color: transparent !important;
        color: rgb(243 244 246) !important; /* dark:text-gray-100 */
      }
      
      /* Protect select item hover states */
      #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-item"]:hover,
      #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-item"][data-highlighted] {
        background-color: rgb(243 244 246) !important; /* hover:bg-gray-100 */
        color: rgb(17 24 39) !important;
      }
      
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-item"]:hover,
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-item"][data-highlighted],
      html[data-theme="dark"] body #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-item"]:hover,
      html[data-theme="dark"] body #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-item"][data-highlighted] {
        background-color: rgb(55 65 81) !important; /* dark:hover:bg-gray-700 */
        color: rgb(243 244 246) !important;
      }
      
      /* Protect select trigger */
      #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-trigger"] {
        background-color: transparent !important;
        border-color: rgb(229 231 235) !important; /* border-gray-200 */
        color: rgb(17 24 39) !important; /* text-gray-900 */
      }
      
      html[data-theme="dark"] #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-trigger"],
      html[data-theme="dark"] body #unbc-calendar-react-component[data-calendar-isolated] [data-slot="select-trigger"] {
        background-color: rgb(55 65 81 / 0.3) !important; /* dark:bg-gray-700/30 */
        border-color: rgb(75 85 99) !important; /* dark:border-gray-600 */
        color: rgb(243 244 246) !important; /* dark:text-gray-100 */
      }
    `, document.head.appendChild(O);
    const te = () => {
      var So;
      const Rt = document.getElementById("unbc-calendar-react-component");
      if (!Rt) return;
      const Yn = (
        // Standard selectors
        document.documentElement.hasAttribute("data-theme") && document.documentElement.getAttribute("data-theme") === "dark" || document.documentElement.classList.contains("dark") || document.body.classList.contains("dark") || document.documentElement.hasAttribute("data-color-scheme") && document.documentElement.getAttribute("data-color-scheme") === "dark" || document.documentElement.classList.contains("is-dark-theme") || document.body.classList.contains("is-dark-theme") || // Check computed styles
        ((So = getComputedStyle(document.documentElement).getPropertyValue("--wp--preset--color--background")) == null ? void 0 : So.includes("0, 0, 0")) || getComputedStyle(document.body).backgroundColor === "rgb(0, 0, 0)" || // Media query fallback
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
      Rt.setAttribute("data-detected-theme", Yn ? "dark" : "light");
    };
    te();
    const ge = new MutationObserver(te);
    ge.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-theme", "class"] }), ge.observe(document.body, { attributes: !0, attributeFilter: ["class"] });
    const oe = window.matchMedia("(prefers-color-scheme: dark)");
    return oe.addEventListener("change", te), () => {
      document.head.removeChild(O), ge.disconnect(), oe.removeEventListener("change", te);
    };
  }, []);
  const [k, E] = x.useState("all"), [C, T] = x.useState("all"), [R, N] = x.useState(""), [P, M] = x.useState(""), j = K.useMemo(() => {
    const O = new Date(c.getTime()), te = O.getFullYear(), ge = O.getMonth(), oe = new Date(te, ge, 1), Rt = new Date(te, ge + 1, 0);
    return {
      per_page: 500,
      start_date: oe.toISOString().split("T")[0],
      end_date: Rt.toISOString().split("T")[0],
      year: te,
      month: ge + 1,
      // Calendar Plus uses 1-based months
      category: k === "all" ? "" : k,
      search: R
    };
  }, [c, k, R]);
  _T(j);
  const _ = x0(j), V = VT(), I = w0(), B = zT();
  K.useEffect(() => {
    const O = setTimeout(() => {
      N(P);
    }, 300);
    return () => clearTimeout(O);
  }, [P]);
  const D = K.useMemo(() => {
    var O;
    return ((O = B.config) == null ? void 0 : O.categoriesWithOrganizations) || [];
  }, [B.config]);
  K.useEffect(() => {
    !D.includes(k) && k !== "all" && T("all");
  }, [k, D]);
  const L = _, {
    events: F,
    eventMetadata: U,
    loading: ee,
    error: Je,
    categoryMappings: be
  } = L, Ue = V.organizations, Ae = V.loading, { categories: $, loading: re } = I, Ee = K.useMemo(
    () => kw($),
    [$]
  ), X = K.useMemo(() => be && Object.keys(be).length > 0 ? be : Ee, [be, Ee]), Z = K.useMemo(() => {
    const O = /* @__PURE__ */ new Map();
    return Ue.forEach((te) => {
      O.set(te.id.toString(), te.title.rendered);
    }), O;
  }, [Ue]), J = K.useCallback((O, te) => {
    var Rt, Yn;
    const ge = U[O.id];
    if (!ge) return !1;
    const oe = (Yn = (Rt = B.config) == null ? void 0 : Rt.categoryRelationships) == null ? void 0 : Yn[te];
    return oe ? oe.includes(ge.category) : ge.category === te;
  }, [U, B.config]), me = K.useMemo(() => {
    let O = F;
    if (s === "list") {
      const te = /* @__PURE__ */ new Date();
      te.setHours(0, 0, 0, 0), O = O.filter((ge) => {
        const oe = new Date(ge.startDate);
        return oe.setHours(0, 0, 0, 0), oe >= te;
      }), O = O.sort((ge, oe) => ge.startDate.getTime() - oe.startDate.getTime());
    }
    if (k !== "all" && (O = O.filter((te) => J(te, k))), C !== "all") {
      const te = Z.get(C);
      O = O.filter((ge) => {
        const oe = U[ge.id];
        return te && (oe == null ? void 0 : oe.organization) === te;
      });
    }
    if (R) {
      const te = R.toLowerCase();
      O = O.filter((ge) => {
        var Rt, Yn, So;
        const oe = U[ge.id];
        return ge.title.toLowerCase().includes(te) || ((Rt = oe == null ? void 0 : oe.description) == null ? void 0 : Rt.toLowerCase().includes(te)) || ((Yn = oe == null ? void 0 : oe.location) == null ? void 0 : Yn.toLowerCase().includes(te)) || ((So = oe == null ? void 0 : oe.organization) == null ? void 0 : So.toLowerCase().includes(te));
      });
    }
    return O;
  }, [F, U, k, C, R, Z, s, J]), ut = K.useCallback((O) => {
    l(O), i("day");
  }, []), un = K.useCallback((O) => {
    u(O);
  }, []), dt = K.useCallback((O) => {
    d(O), w(!0);
  }, []), dn = K.useCallback(() => {
    b((O) => O + y);
  }, [y]);
  return K.useEffect(() => {
    s === "list" && b(m);
  }, [s, k, C, R, m]), (ee || Ae || re) && (!F || F.length === 0) ? /* @__PURE__ */ p.jsx("div", { className: "w-full flex items-center justify-center py-12", children: /* @__PURE__ */ p.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ p.jsx(Oi, { className: "h-8 w-8 animate-spin mx-auto mb-4" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-gray-600", children: "Loading calendar..." })
  ] }) }) : Je ? /* @__PURE__ */ p.jsx("div", { className: "w-full py-12", children: /* @__PURE__ */ p.jsx(hd, { className: "max-w-md mx-auto", children: /* @__PURE__ */ p.jsxs(zy, { className: "pt-6 text-center", children: [
    /* @__PURE__ */ p.jsxs("p", { className: "text-red-600 mb-4", children: [
      "Error loading events: ",
      Je
    ] }),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        onClick: () => window.location.reload(),
        className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
        children: "Retry"
      }
    )
  ] }) }) }) : /* @__PURE__ */ p.jsxs("div", { id: "unbc-calendar-react-component", "data-calendar-isolated": "true", className: "w-full space-y-6", children: [
    /* @__PURE__ */ p.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm unbc-calendar-view", children: /* @__PURE__ */ p.jsxs(RT, { value: s, onValueChange: i, className: "w-full", children: [
      /* @__PURE__ */ p.jsx("div", { className: "hidden md:block p-6 pb-0", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsxs(ui, { value: k, onValueChange: E, children: [
            /* @__PURE__ */ p.jsx(di, { className: "w-40 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${k === "all" ? "bg-gray-400" : Qt(((Bs = $.find((O) => O.slug === k)) == null ? void 0 : Bs.variant) || "default")}` }),
              /* @__PURE__ */ p.jsx("span", { children: k === "all" ? "All Categories" : ((Gn = $.find((O) => O.slug === k)) == null ? void 0 : Gn.name) || "All Categories" })
            ] }) }),
            /* @__PURE__ */ p.jsxs(fi, { className: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 z-[9999] shadow-lg", children: [
              /* @__PURE__ */ p.jsx(mn, { value: "all", className: "text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700 focus:outline-none", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                /* @__PURE__ */ p.jsx("span", { className: "w-3 h-3 rounded-full flex-shrink-0 bg-gray-400" }),
                /* @__PURE__ */ p.jsx("span", { children: "All" })
              ] }) }),
              $.map((O) => /* @__PURE__ */ p.jsx(
                mn,
                {
                  value: O.slug,
                  className: "text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700 focus:outline-none",
                  children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                    /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${Qt(O.variant || "default")}` }),
                    /* @__PURE__ */ p.jsx("span", { children: O.name })
                  ] })
                },
                O.id
              ))
            ] })
          ] }),
          D.includes(k) && /* @__PURE__ */ p.jsxs(ui, { value: C, onValueChange: T, children: [
            /* @__PURE__ */ p.jsx(di, { className: "w-44 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 [&>span]:truncate [&>span]:block", children: /* @__PURE__ */ p.jsx(eh, { placeholder: "All Organizations" }) }),
            /* @__PURE__ */ p.jsxs(fi, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 max-h-[200px] overflow-y-auto", children: [
              /* @__PURE__ */ p.jsx(mn, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Organizations" }),
              Ue.map((O) => /* @__PURE__ */ p.jsx(
                mn,
                {
                  value: O.id.toString(),
                  className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600",
                  children: O.title.rendered
                },
                O.id
              ))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ p.jsxs(th, { className: "h-9 bg-gray-100 dark:bg-gray-700 p-1", children: [
          o && /* @__PURE__ */ p.jsxs(Xn, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(so, { className: "h-3 w-3" }),
            "Day"
          ] }),
          r && /* @__PURE__ */ p.jsxs(Xn, { value: "week", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(_i, { className: "h-3 w-3" }),
            "Week"
          ] }),
          /* @__PURE__ */ p.jsxs(Xn, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(Ss, { className: "h-3 w-3" }),
            "Month"
          ] }),
          /* @__PURE__ */ p.jsxs(Xn, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(Jp, { className: "h-3 w-3" }),
            "List"
          ] })
        ] }) }),
        /* @__PURE__ */ p.jsxs("div", { className: "flex-shrink-0 flex items-center gap-2", children: [
          ee && F && F.length > 0 && /* @__PURE__ */ p.jsx(Oi, { className: "h-4 w-4 animate-spin text-gray-500" }),
          /* @__PURE__ */ p.jsx(
            tu,
            {
              placeholder: "Search events...",
              value: P,
              onChange: (O) => M(O.target.value),
              className: "w-40 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "md:hidden", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "px-4 py-4 flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ p.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ p.jsxs(ui, { value: k, onValueChange: E, children: [
            /* @__PURE__ */ p.jsx(di, { className: "w-auto min-w-[60px] h-9 px-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${k === "all" ? "bg-gray-400" : Qt(((gf = $.find((O) => O.slug === k)) == null ? void 0 : gf.variant) || "default")}` }),
              /* @__PURE__ */ p.jsx("span", { className: "text-xs truncate max-w-[60px]", children: k === "all" ? "All" : ((yf = $.find((O) => O.slug === k)) == null ? void 0 : yf.name) || "All" })
            ] }) }),
            /* @__PURE__ */ p.jsxs(fi, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 z-[9999]", children: [
              /* @__PURE__ */ p.jsx(mn, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                /* @__PURE__ */ p.jsx("span", { className: "w-3 h-3 rounded-full flex-shrink-0 bg-gray-400" }),
                /* @__PURE__ */ p.jsx("span", { children: "All" })
              ] }) }),
              $.map((O) => /* @__PURE__ */ p.jsx(
                mn,
                {
                  value: O.slug,
                  className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600",
                  children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                    /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${Qt(O.variant || "default")}` }),
                    /* @__PURE__ */ p.jsx("span", { children: O.name })
                  ] })
                },
                O.id
              ))
            ] })
          ] }) }),
          /* @__PURE__ */ p.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ p.jsxs(th, { className: "h-9 bg-gray-100 dark:bg-gray-700 p-1", children: [
            o && /* @__PURE__ */ p.jsxs(Xn, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300 flex-1", children: [
              /* @__PURE__ */ p.jsx(so, { className: "h-3 w-3" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Day" })
            ] }),
            /* @__PURE__ */ p.jsxs(Xn, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300 flex-1", children: [
              /* @__PURE__ */ p.jsx(Ss, { className: "h-3 w-3" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Month" })
            ] }),
            /* @__PURE__ */ p.jsxs(Xn, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300 flex-1", children: [
              /* @__PURE__ */ p.jsx(Jp, { className: "h-3 w-3" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "List" })
            ] })
          ] }) }),
          /* @__PURE__ */ p.jsxs("div", { className: "flex-shrink-0 flex items-center gap-2", children: [
            ee && F && F.length > 0 && /* @__PURE__ */ p.jsx(Oi, { className: "h-4 w-4 animate-spin text-gray-500" }),
            /* @__PURE__ */ p.jsx(
              Zt,
              {
                variant: "outline",
                size: "sm",
                className: "h-9 px-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
                onClick: () => {
                  const O = document.querySelector(".mobile-search-input");
                  O && (O.style.display = O.style.display === "none" ? "block" : "none", O.style.display !== "none" && O.focus());
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
          tu,
          {
            placeholder: "Search events...",
            value: P,
            onChange: (O) => M(O.target.value),
            className: "mobile-search-input w-full h-9 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400",
            style: { display: "none" }
          }
        ) }),
        D.includes(k) && /* @__PURE__ */ p.jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ p.jsxs(ui, { value: C, onValueChange: T, children: [
          /* @__PURE__ */ p.jsx(di, { className: "w-full h-9 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsx(eh, { placeholder: "All Organizations", className: "truncate" }) }),
          /* @__PURE__ */ p.jsxs(fi, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 max-h-[200px] overflow-y-auto", children: [
            /* @__PURE__ */ p.jsx(mn, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Organizations" }),
            Ue.map((O) => /* @__PURE__ */ p.jsx(
              mn,
              {
                value: O.id.toString(),
                className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600",
                children: O.title.rendered
              },
              O.id
            ))
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ p.jsxs(hi, { value: "month", className: "px-6 pb-6 md:p-6", children: [
        /* @__PURE__ */ p.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ p.jsx(
          NM,
          {
            events: me,
            eventMetadata: U,
            categoryMappings: X,
            onDateClick: ut,
            onEventClick: dt,
            onMonthChange: un,
            currentDate: c
          }
        ) }),
        /* @__PURE__ */ p.jsx("div", { className: "block md:hidden mobile-calendar", children: /* @__PURE__ */ p.jsx(
          RM,
          {
            events: me,
            eventMetadata: U,
            categoryMappings: X,
            onEventClick: dt,
            onMonthChange: un,
            currentDate: c
          }
        ) })
      ] }),
      /* @__PURE__ */ p.jsx(hi, { value: "week", className: "px-6 pb-6 md:p-6", children: /* @__PURE__ */ p.jsx(
        MM,
        {
          events: me,
          eventMetadata: U,
          categoryMappings: X,
          onEventClick: dt
        }
      ) }),
      /* @__PURE__ */ p.jsx(hi, { value: "day", className: "px-6 pb-6 md:p-6", children: /* @__PURE__ */ p.jsx(
        AM,
        {
          events: me,
          eventMetadata: U,
          categoryMappings: X,
          initialDate: a,
          onEventClick: dt
        }
      ) }),
      /* @__PURE__ */ p.jsxs(hi, { value: "list", className: "px-6 pb-6 md:p-6", children: [
        /* @__PURE__ */ p.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ p.jsx(
          jM,
          {
            events: me.slice(0, v),
            eventMetadata: U,
            categoryMappings: X,
            onEventClick: dt,
            onLoadMore: dn,
            hasMore: me.length > v,
            loading: ee
          }
        ) }),
        /* @__PURE__ */ p.jsx("div", { className: "block md:hidden", children: /* @__PURE__ */ p.jsx(
          LM,
          {
            events: me.slice(0, v),
            eventMetadata: U,
            categoryMappings: X,
            onEventClick: dt,
            onLoadMore: dn,
            hasMore: me.length > v,
            loading: ee
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsx(
      K0,
      {
        event: f,
        eventMetadata: U,
        open: g,
        onOpenChange: w
      }
    )
  ] });
}
function OM({
  events: e,
  eventMetadata: t,
  categoryMappings: n,
  organizationId: r,
  organizationName: o,
  limit: s,
  showPastEvents: i = !1,
  onEventClick: a
}) {
  const l = (f) => f.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), { filteredEvents: c, eventsByDate: u } = K.useMemo(() => {
    let f = e;
    const d = /* @__PURE__ */ new Date();
    (r || o) && (f = f.filter((w) => {
      var b;
      const v = t[w.id];
      return o ? (v == null ? void 0 : v.organization) === o : r ? ((b = v == null ? void 0 : v.organization_id) == null ? void 0 : b.toString()) === r : !0;
    })), i || (f = f.filter((w) => w.startDate >= d)), f.sort((w, v) => w.startDate.getTime() - v.startDate.getTime()), s && s > 0 && (f = f.slice(0, s));
    const g = f.reduce((w, v) => {
      const b = v.startDate.toDateString();
      return w[b] || (w[b] = []), w[b].push(v), w;
    }, {});
    return { filteredEvents: f, eventsByDate: g };
  }, [e, t, r, o, s, i]);
  return c.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-8 text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ p.jsx(Ss, { className: "mx-auto h-8 w-8 mb-3 opacity-50" }),
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
    Object.entries(u).map(([f, d]) => {
      const g = new Date(f), w = g.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), v = g.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let b = g.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      });
      return w ? b = `Today, ${b}` : v && (b = `Tomorrow, ${b}`), /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: b }),
          /* @__PURE__ */ p.jsx("div", { className: "flex-1 h-px bg-gray-200 dark:bg-gray-600" }),
          /* @__PURE__ */ p.jsxs("span", { className: "text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full", children: [
            d.length,
            " event",
            d.length > 1 ? "s" : ""
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: d.map((m) => {
          const h = t[m.id], y = zn(h == null ? void 0 : h.category, n), S = DM(y);
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 relative rounded-lg p-4 pl-6 hover:shadow-md transition-all cursor-pointer after:absolute after:inset-y-3 after:left-3 after:w-1 after:rounded-full ${S}`,
              onClick: () => a == null ? void 0 : a(m),
              children: [
                /* @__PURE__ */ p.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ p.jsxs("div", { className: "flex-grow min-w-0", children: [
                    /* @__PURE__ */ p.jsx("div", { className: "font-semibold text-gray-900 dark:text-gray-100 mb-2", children: m.title }),
                    /* @__PURE__ */ p.jsx("div", { className: "flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ p.jsx(so, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsxs("span", { children: [
                        l(m.startDate),
                        " - ",
                        l(m.endDate)
                      ] })
                    ] }) }),
                    h && /* @__PURE__ */ p.jsxs("div", { className: "space-y-1 text-sm text-gray-600 dark:text-gray-400", children: [
                      h.location && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(Ls, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: h.location })
                      ] }),
                      !o && h.organization && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(Ga, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: h.organization })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col items-end gap-2 flex-shrink-0 ml-4", children: [
                    (h == null ? void 0 : h.cost) && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400", children: h.cost }),
                    (h == null ? void 0 : h.category) && /* @__PURE__ */ p.jsx(io, { variant: "secondary", size: "sm", className: "text-xs", children: h.category.charAt(0).toUpperCase() + h.category.slice(1) })
                  ] })
                ] }),
                (h == null ? void 0 : h.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-3 pt-2 border-t border-gray-100 dark:border-gray-700", children: /* @__PURE__ */ p.jsx(io, { variant: "outline", size: "sm", children: "📝 Registration Required" }) })
              ]
            },
            m.id
          );
        }) })
      ] }, f);
    })
  ] });
}
function Cw({
  organizationId: e,
  organizationName: t,
  limit: n = 5,
  showPastEvents: r = !1
}) {
  const [o, s] = x.useState(null), [i, a] = x.useState(!1), {
    events: l,
    eventMetadata: c,
    loading: u,
    error: f,
    categoryMappings: d
  } = x0({
    view: "list",
    // Use list view for organization pages
    organization: e
    // Filter by organization
  }), { categories: g } = w0(), w = K.useMemo(
    () => kw(g),
    [g]
  ), v = K.useMemo(() => d && Object.keys(d).length > 0 ? d : w, [d, w]), b = (m) => {
    s(m), a(!0);
  };
  return u ? /* @__PURE__ */ p.jsx("div", { className: "w-full flex items-center justify-center py-8", children: /* @__PURE__ */ p.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ p.jsx(Oi, { className: "h-6 w-6 animate-spin mx-auto mb-2" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-gray-600 text-sm", children: "Loading events..." })
  ] }) }) : f ? /* @__PURE__ */ p.jsx("div", { className: "w-full py-8", children: /* @__PURE__ */ p.jsx("div", { className: "max-w-md mx-auto bg-red-50 border border-red-200 rounded-lg p-4", children: /* @__PURE__ */ p.jsxs("p", { className: "text-red-600 text-sm", children: [
    "Error loading events: ",
    f
  ] }) }) }) : /* @__PURE__ */ p.jsxs("div", { className: "unbc-organization-events", children: [
    /* @__PURE__ */ p.jsx(
      OM,
      {
        events: l,
        eventMetadata: c,
        categoryMappings: v,
        organizationId: e,
        organizationName: t,
        limit: n,
        showPastEvents: r,
        onEventClick: b
      }
    ),
    /* @__PURE__ */ p.jsx(
      K0,
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
  const n = Va(t), r = t.dataset.view || "month", o = t.dataset.categoryFilter || "all", s = t.dataset.organizationFilter || "all", i = t.dataset.showWeekView !== "false", a = t.dataset.showDayView !== "false";
  n.render(
    /* @__PURE__ */ p.jsx(K.StrictMode, { children: /* @__PURE__ */ p.jsx(
      _M,
      {
        initialView: r,
        initialCategoryFilter: o,
        initialOrganizationFilter: s,
        showWeekView: i,
        showDayView: a
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
  const n = Va(t), r = t.dataset.organizationId || "", o = t.dataset.organizationName || "", s = parseInt(t.dataset.limit) || 5, i = t.dataset.showPast === "true";
  n.render(
    /* @__PURE__ */ p.jsx(K.StrictMode, { children: /* @__PURE__ */ p.jsx(
      Cw,
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
  const n = Va(t), r = t.dataset.organizationId || "", o = t.dataset.organizationName || "", s = parseInt(t.dataset.limit) || 5, i = t.dataset.showPast === "true";
  n.render(
    /* @__PURE__ */ p.jsx(K.StrictMode, { children: /* @__PURE__ */ p.jsx(
      Cw,
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
