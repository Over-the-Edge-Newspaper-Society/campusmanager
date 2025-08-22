function Sw(e, t) {
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
function mm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gm = { exports: {} }, wa = {}, ym = { exports: {} }, G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ps = Symbol.for("react.element"), bw = Symbol.for("react.portal"), kw = Symbol.for("react.fragment"), Cw = Symbol.for("react.strict_mode"), Ew = Symbol.for("react.profiler"), Tw = Symbol.for("react.provider"), Pw = Symbol.for("react.context"), Dw = Symbol.for("react.forward_ref"), Nw = Symbol.for("react.suspense"), Rw = Symbol.for("react.memo"), Aw = Symbol.for("react.lazy"), mf = Symbol.iterator;
function Mw(e) {
  return e === null || typeof e != "object" ? null : (e = mf && e[mf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var vm = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, xm = Object.assign, wm = {};
function lo(e, t, n) {
  this.props = e, this.context = t, this.refs = wm, this.updater = n || vm;
}
lo.prototype.isReactComponent = {};
lo.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
lo.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Sm() {
}
Sm.prototype = lo.prototype;
function yc(e, t, n) {
  this.props = e, this.context = t, this.refs = wm, this.updater = n || vm;
}
var vc = yc.prototype = new Sm();
vc.constructor = yc;
xm(vc, lo.prototype);
vc.isPureReactComponent = !0;
var gf = Array.isArray, bm = Object.prototype.hasOwnProperty, xc = { current: null }, km = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cm(e, t, n) {
  var r, o = {}, s = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (s = "" + t.key), t) bm.call(t, r) && !km.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: Ps, type: e, key: s, ref: i, props: o, _owner: xc.current };
}
function jw(e, t) {
  return { $$typeof: Ps, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function wc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ps;
}
function Lw(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var yf = /\/+/g;
function Ja(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Lw("" + e.key) : t.toString(36);
}
function vi(e, t, n, r, o) {
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
        case Ps:
        case bw:
          i = !0;
      }
  }
  if (i) return i = e, o = o(i), e = r === "" ? "." + Ja(i, 0) : r, gf(o) ? (n = "", e != null && (n = e.replace(yf, "$&/") + "/"), vi(o, t, n, "", function(u) {
    return u;
  })) : o != null && (wc(o) && (o = jw(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(yf, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", gf(e)) for (var a = 0; a < e.length; a++) {
    s = e[a];
    var l = r + Ja(s, a);
    i += vi(s, t, n, l, o);
  }
  else if (l = Mw(e), typeof l == "function") for (e = l.call(e), a = 0; !(s = e.next()).done; ) s = s.value, l = r + Ja(s, a++), i += vi(s, t, n, l, o);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function zs(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return vi(e, r, "", "", function(s) {
    return t.call(n, s, o++);
  }), r;
}
function _w(e) {
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
var Ge = { current: null }, xi = { transition: null }, Iw = { ReactCurrentDispatcher: Ge, ReactCurrentBatchConfig: xi, ReactCurrentOwner: xc };
function Em() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = { map: zs, forEach: function(e, t, n) {
  zs(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return zs(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return zs(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!wc(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
G.Component = lo;
G.Fragment = kw;
G.Profiler = Ew;
G.PureComponent = yc;
G.StrictMode = Cw;
G.Suspense = Nw;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Iw;
G.act = Em;
G.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = xm({}, e.props), o = e.key, s = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, i = xc.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) bm.call(t, l) && !km.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ps, type: e.type, key: o, ref: s, props: r, _owner: i };
};
G.createContext = function(e) {
  return e = { $$typeof: Pw, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Tw, _context: e }, e.Consumer = e;
};
G.createElement = Cm;
G.createFactory = function(e) {
  var t = Cm.bind(null, e);
  return t.type = e, t;
};
G.createRef = function() {
  return { current: null };
};
G.forwardRef = function(e) {
  return { $$typeof: Dw, render: e };
};
G.isValidElement = wc;
G.lazy = function(e) {
  return { $$typeof: Aw, _payload: { _status: -1, _result: e }, _init: _w };
};
G.memo = function(e, t) {
  return { $$typeof: Rw, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function(e) {
  var t = xi.transition;
  xi.transition = {};
  try {
    e();
  } finally {
    xi.transition = t;
  }
};
G.unstable_act = Em;
G.useCallback = function(e, t) {
  return Ge.current.useCallback(e, t);
};
G.useContext = function(e) {
  return Ge.current.useContext(e);
};
G.useDebugValue = function() {
};
G.useDeferredValue = function(e) {
  return Ge.current.useDeferredValue(e);
};
G.useEffect = function(e, t) {
  return Ge.current.useEffect(e, t);
};
G.useId = function() {
  return Ge.current.useId();
};
G.useImperativeHandle = function(e, t, n) {
  return Ge.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function(e, t) {
  return Ge.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function(e, t) {
  return Ge.current.useLayoutEffect(e, t);
};
G.useMemo = function(e, t) {
  return Ge.current.useMemo(e, t);
};
G.useReducer = function(e, t, n) {
  return Ge.current.useReducer(e, t, n);
};
G.useRef = function(e) {
  return Ge.current.useRef(e);
};
G.useState = function(e) {
  return Ge.current.useState(e);
};
G.useSyncExternalStore = function(e, t, n) {
  return Ge.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function() {
  return Ge.current.useTransition();
};
G.version = "18.3.1";
ym.exports = G;
var x = ym.exports;
const q = /* @__PURE__ */ mm(x), Tm = /* @__PURE__ */ Sw({
  __proto__: null,
  default: q
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
var Ow = x, Fw = Symbol.for("react.element"), Vw = Symbol.for("react.fragment"), zw = Object.prototype.hasOwnProperty, Bw = Ow.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $w = { key: !0, ref: !0, __self: !0, __source: !0 };
function Pm(e, t, n) {
  var r, o = {}, s = null, i = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) zw.call(t, r) && !$w.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Fw, type: e, key: s, ref: i, props: o, _owner: Bw.current };
}
wa.Fragment = Vw;
wa.jsx = Pm;
wa.jsxs = Pm;
gm.exports = wa;
var p = gm.exports, Dm = { exports: {} }, ut = {}, Nm = { exports: {} }, Rm = {};
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
  function t(P, M) {
    var I = P.length;
    P.push(M);
    e: for (; 0 < I; ) {
      var H = I - 1 >>> 1, te = P[H];
      if (0 < o(te, M)) P[H] = M, P[I] = te, I = H;
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var M = P[0], I = P.pop();
    if (I !== M) {
      P[0] = I;
      e: for (var H = 0, te = P.length, dt = te >>> 1; H < dt; ) {
        var ie = 2 * (H + 1) - 1, ft = P[ie], ve = ie + 1, B = P[ve];
        if (0 > o(ft, I)) ve < te && 0 > o(B, ft) ? (P[H] = B, P[ve] = I, H = ve) : (P[H] = ft, P[ie] = I, H = ie);
        else if (ve < te && 0 > o(B, I)) P[H] = B, P[ve] = I, H = ve;
        else break e;
      }
    }
    return M;
  }
  function o(P, M) {
    var I = P.sortIndex - M.sortIndex;
    return I !== 0 ? I : P.id - M.id;
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
  var l = [], u = [], c = 1, f = null, d = 3, y = !1, w = !1, g = !1, S = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(P) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u);
      else if (M.startTime <= P) r(u), M.sortIndex = M.expirationTime, t(l, M);
      else break;
      M = n(u);
    }
  }
  function b(P) {
    if (g = !1, v(P), !w) if (n(l) !== null) w = !0, O(k);
    else {
      var M = n(u);
      M !== null && F(b, M.startTime - P);
    }
  }
  function k(P, M) {
    w = !1, g && (g = !1, m(E), E = -1), y = !0;
    var I = d;
    try {
      for (v(M), f = n(l); f !== null && (!(f.expirationTime > M) || P && !A()); ) {
        var H = f.callback;
        if (typeof H == "function") {
          f.callback = null, d = f.priorityLevel;
          var te = H(f.expirationTime <= M);
          M = e.unstable_now(), typeof te == "function" ? f.callback = te : f === n(l) && r(l), v(M);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var dt = !0;
      else {
        var ie = n(u);
        ie !== null && F(b, ie.startTime - M), dt = !1;
      }
      return dt;
    } finally {
      f = null, d = I, y = !1;
    }
  }
  var T = !1, C = null, E = -1, D = 5, N = -1;
  function A() {
    return !(e.unstable_now() - N < D);
  }
  function j() {
    if (C !== null) {
      var P = e.unstable_now();
      N = P;
      var M = !0;
      try {
        M = C(!0, P);
      } finally {
        M ? V() : (T = !1, C = null);
      }
    } else T = !1;
  }
  var V;
  if (typeof h == "function") V = function() {
    h(j);
  };
  else if (typeof MessageChannel < "u") {
    var z = new MessageChannel(), Y = z.port2;
    z.port1.onmessage = j, V = function() {
      Y.postMessage(null);
    };
  } else V = function() {
    S(j, 0);
  };
  function O(P) {
    C = P, T || (T = !0, V());
  }
  function F(P, M) {
    E = S(function() {
      P(e.unstable_now());
    }, M);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    w || y || (w = !0, O(k));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(P) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var M = 3;
        break;
      default:
        M = d;
    }
    var I = d;
    d = M;
    try {
      return P();
    } finally {
      d = I;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, M) {
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
    var I = d;
    d = P;
    try {
      return M();
    } finally {
      d = I;
    }
  }, e.unstable_scheduleCallback = function(P, M, I) {
    var H = e.unstable_now();
    switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? H + I : H) : I = H, P) {
      case 1:
        var te = -1;
        break;
      case 2:
        te = 250;
        break;
      case 5:
        te = 1073741823;
        break;
      case 4:
        te = 1e4;
        break;
      default:
        te = 5e3;
    }
    return te = I + te, P = { id: c++, callback: M, priorityLevel: P, startTime: I, expirationTime: te, sortIndex: -1 }, I > H ? (P.sortIndex = I, t(u, P), n(l) === null && P === n(u) && (g ? (m(E), E = -1) : g = !0, F(b, I - H))) : (P.sortIndex = te, t(l, P), w || y || (w = !0, O(k))), P;
  }, e.unstable_shouldYield = A, e.unstable_wrapCallback = function(P) {
    var M = d;
    return function() {
      var I = d;
      d = M;
      try {
        return P.apply(this, arguments);
      } finally {
        d = I;
      }
    };
  };
})(Rm);
Nm.exports = Rm;
var Uw = Nm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ww = x, at = Uw;
function R(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Am = /* @__PURE__ */ new Set(), es = {};
function gr(e, t) {
  Xr(e, t), Xr(e + "Capture", t);
}
function Xr(e, t) {
  for (es[e] = t, e = 0; e < t.length; e++) Am.add(t[e]);
}
var tn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ql = Object.prototype.hasOwnProperty, Hw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, vf = {}, xf = {};
function Kw(e) {
  return Ql.call(xf, e) ? !0 : Ql.call(vf, e) ? !1 : Hw.test(e) ? xf[e] = !0 : (vf[e] = !0, !1);
}
function Gw(e, t, n, r) {
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
function Yw(e, t, n, r) {
  if (t === null || typeof t > "u" || Gw(e, t, n, r)) return !0;
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
function Ye(e, t, n, r, o, s, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = i;
}
var Ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ie[e] = new Ye(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ie[t] = new Ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ie[e] = new Ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ie[e] = new Ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ie[e] = new Ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ie[e] = new Ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ie[e] = new Ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ie[e] = new Ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ie[e] = new Ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Sc = /[\-:]([a-z])/g;
function bc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Sc,
    bc
  );
  Ie[t] = new Ye(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Sc, bc);
  Ie[t] = new Ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Sc, bc);
  Ie[t] = new Ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ie[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ie.xlinkHref = new Ye("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ie[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function kc(e, t, n, r) {
  var o = Ie.hasOwnProperty(t) ? Ie[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Yw(t, n, o, r) && (n = null), r || o === null ? Kw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var un = Ww.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Bs = Symbol.for("react.element"), kr = Symbol.for("react.portal"), Cr = Symbol.for("react.fragment"), Cc = Symbol.for("react.strict_mode"), ql = Symbol.for("react.profiler"), Mm = Symbol.for("react.provider"), jm = Symbol.for("react.context"), Ec = Symbol.for("react.forward_ref"), Zl = Symbol.for("react.suspense"), Jl = Symbol.for("react.suspense_list"), Tc = Symbol.for("react.memo"), vn = Symbol.for("react.lazy"), Lm = Symbol.for("react.offscreen"), wf = Symbol.iterator;
function bo(e) {
  return e === null || typeof e != "object" ? null : (e = wf && e[wf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ye = Object.assign, el;
function jo(e) {
  if (el === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    el = t && t[1] || "";
  }
  return `
` + el + e;
}
var tl = !1;
function nl(e, t) {
  if (!e || tl) return "";
  tl = !0;
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
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
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
    tl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? jo(e) : "";
}
function Xw(e) {
  switch (e.tag) {
    case 5:
      return jo(e.type);
    case 16:
      return jo("Lazy");
    case 13:
      return jo("Suspense");
    case 19:
      return jo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = nl(e.type, !1), e;
    case 11:
      return e = nl(e.type.render, !1), e;
    case 1:
      return e = nl(e.type, !0), e;
    default:
      return "";
  }
}
function eu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Cr:
      return "Fragment";
    case kr:
      return "Portal";
    case ql:
      return "Profiler";
    case Cc:
      return "StrictMode";
    case Zl:
      return "Suspense";
    case Jl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case jm:
      return (e.displayName || "Context") + ".Consumer";
    case Mm:
      return (e._context.displayName || "Context") + ".Provider";
    case Ec:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Tc:
      return t = e.displayName || null, t !== null ? t : eu(e.type) || "Memo";
    case vn:
      t = e._payload, e = e._init;
      try {
        return eu(e(t));
      } catch {
      }
  }
  return null;
}
function Qw(e) {
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
      return eu(t);
    case 8:
      return t === Cc ? "StrictMode" : "Mode";
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
function Ln(e) {
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
function _m(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function qw(e) {
  var t = _m(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function $s(e) {
  e._valueTracker || (e._valueTracker = qw(e));
}
function Im(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = _m(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Oi(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function tu(e, t) {
  var n = t.checked;
  return ye({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Sf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ln(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Om(e, t) {
  t = t.checked, t != null && kc(e, "checked", t, !1);
}
function nu(e, t) {
  Om(e, t);
  var n = Ln(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ru(e, t.type, n) : t.hasOwnProperty("defaultValue") && ru(e, t.type, Ln(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function bf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ru(e, t, n) {
  (t !== "number" || Oi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Lo = Array.isArray;
function zr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ln(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ou(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return ye({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function kf(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(R(92));
      if (Lo(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Ln(n) };
}
function Fm(e, t) {
  var n = Ln(t.value), r = Ln(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Cf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Vm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function su(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Vm(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Us, zm = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Us = Us || document.createElement("div"), Us.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Us.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function ts(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Bo = {
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
}, Zw = ["Webkit", "ms", "Moz", "O"];
Object.keys(Bo).forEach(function(e) {
  Zw.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Bo[t] = Bo[e];
  });
});
function Bm(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Bo.hasOwnProperty(e) && Bo[e] ? ("" + t).trim() : t + "px";
}
function $m(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Bm(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Jw = ye({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function iu(e, t) {
  if (t) {
    if (Jw[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function au(e, t) {
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
var lu = null;
function Pc(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var uu = null, Br = null, $r = null;
function Ef(e) {
  if (e = Rs(e)) {
    if (typeof uu != "function") throw Error(R(280));
    var t = e.stateNode;
    t && (t = Ea(t), uu(e.stateNode, e.type, t));
  }
}
function Um(e) {
  Br ? $r ? $r.push(e) : $r = [e] : Br = e;
}
function Wm() {
  if (Br) {
    var e = Br, t = $r;
    if ($r = Br = null, Ef(e), t) for (e = 0; e < t.length; e++) Ef(t[e]);
  }
}
function Hm(e, t) {
  return e(t);
}
function Km() {
}
var rl = !1;
function Gm(e, t, n) {
  if (rl) return e(t, n);
  rl = !0;
  try {
    return Hm(e, t, n);
  } finally {
    rl = !1, (Br !== null || $r !== null) && (Km(), Wm());
  }
}
function ns(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ea(n);
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
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var cu = !1;
if (tn) try {
  var ko = {};
  Object.defineProperty(ko, "passive", { get: function() {
    cu = !0;
  } }), window.addEventListener("test", ko, ko), window.removeEventListener("test", ko, ko);
} catch {
  cu = !1;
}
function e1(e, t, n, r, o, s, i, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var $o = !1, Fi = null, Vi = !1, du = null, t1 = { onError: function(e) {
  $o = !0, Fi = e;
} };
function n1(e, t, n, r, o, s, i, a, l) {
  $o = !1, Fi = null, e1.apply(t1, arguments);
}
function r1(e, t, n, r, o, s, i, a, l) {
  if (n1.apply(this, arguments), $o) {
    if ($o) {
      var u = Fi;
      $o = !1, Fi = null;
    } else throw Error(R(198));
    Vi || (Vi = !0, du = u);
  }
}
function yr(e) {
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
function Ym(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Tf(e) {
  if (yr(e) !== e) throw Error(R(188));
}
function o1(e) {
  var t = e.alternate;
  if (!t) {
    if (t = yr(e), t === null) throw Error(R(188));
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
        if (s === n) return Tf(o), e;
        if (s === r) return Tf(o), t;
        s = s.sibling;
      }
      throw Error(R(188));
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
        if (!i) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function Xm(e) {
  return e = o1(e), e !== null ? Qm(e) : null;
}
function Qm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Qm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var qm = at.unstable_scheduleCallback, Pf = at.unstable_cancelCallback, s1 = at.unstable_shouldYield, i1 = at.unstable_requestPaint, Ee = at.unstable_now, a1 = at.unstable_getCurrentPriorityLevel, Dc = at.unstable_ImmediatePriority, Zm = at.unstable_UserBlockingPriority, zi = at.unstable_NormalPriority, l1 = at.unstable_LowPriority, Jm = at.unstable_IdlePriority, Sa = null, Ft = null;
function u1(e) {
  if (Ft && typeof Ft.onCommitFiberRoot == "function") try {
    Ft.onCommitFiberRoot(Sa, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Pt = Math.clz32 ? Math.clz32 : f1, c1 = Math.log, d1 = Math.LN2;
function f1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (c1(e) / d1 | 0) | 0;
}
var Ws = 64, Hs = 4194304;
function _o(e) {
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
function Bi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, s = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var a = i & ~o;
    a !== 0 ? r = _o(a) : (s &= i, s !== 0 && (r = _o(s)));
  } else i = n & ~o, i !== 0 ? r = _o(i) : s !== 0 && (r = _o(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, s = t & -t, o >= s || o === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Pt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function p1(e, t) {
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
function h1(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var i = 31 - Pt(s), a = 1 << i, l = o[i];
    l === -1 ? (!(a & n) || a & r) && (o[i] = p1(a, t)) : l <= t && (e.expiredLanes |= a), s &= ~a;
  }
}
function fu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function eg() {
  var e = Ws;
  return Ws <<= 1, !(Ws & 4194240) && (Ws = 64), e;
}
function ol(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ds(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Pt(t), e[t] = n;
}
function m1(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Pt(n), s = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~s;
  }
}
function Nc(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Pt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var ne = 0;
function tg(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var ng, Rc, rg, og, sg, pu = !1, Ks = [], En = null, Tn = null, Pn = null, rs = /* @__PURE__ */ new Map(), os = /* @__PURE__ */ new Map(), Sn = [], g1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Df(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      En = null;
      break;
    case "dragenter":
    case "dragleave":
      Tn = null;
      break;
    case "mouseover":
    case "mouseout":
      Pn = null;
      break;
    case "pointerover":
    case "pointerout":
      rs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      os.delete(t.pointerId);
  }
}
function Co(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [o] }, t !== null && (t = Rs(t), t !== null && Rc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function y1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return En = Co(En, e, t, n, r, o), !0;
    case "dragenter":
      return Tn = Co(Tn, e, t, n, r, o), !0;
    case "mouseover":
      return Pn = Co(Pn, e, t, n, r, o), !0;
    case "pointerover":
      var s = o.pointerId;
      return rs.set(s, Co(rs.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return s = o.pointerId, os.set(s, Co(os.get(s) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function ig(e) {
  var t = er(e.target);
  if (t !== null) {
    var n = yr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ym(n), t !== null) {
          e.blockedOn = t, sg(e.priority, function() {
            rg(n);
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
function wi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = hu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      lu = r, n.target.dispatchEvent(r), lu = null;
    } else return t = Rs(n), t !== null && Rc(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Nf(e, t, n) {
  wi(e) && n.delete(t);
}
function v1() {
  pu = !1, En !== null && wi(En) && (En = null), Tn !== null && wi(Tn) && (Tn = null), Pn !== null && wi(Pn) && (Pn = null), rs.forEach(Nf), os.forEach(Nf);
}
function Eo(e, t) {
  e.blockedOn === t && (e.blockedOn = null, pu || (pu = !0, at.unstable_scheduleCallback(at.unstable_NormalPriority, v1)));
}
function ss(e) {
  function t(o) {
    return Eo(o, e);
  }
  if (0 < Ks.length) {
    Eo(Ks[0], e);
    for (var n = 1; n < Ks.length; n++) {
      var r = Ks[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (En !== null && Eo(En, e), Tn !== null && Eo(Tn, e), Pn !== null && Eo(Pn, e), rs.forEach(t), os.forEach(t), n = 0; n < Sn.length; n++) r = Sn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Sn.length && (n = Sn[0], n.blockedOn === null); ) ig(n), n.blockedOn === null && Sn.shift();
}
var Ur = un.ReactCurrentBatchConfig, $i = !0;
function x1(e, t, n, r) {
  var o = ne, s = Ur.transition;
  Ur.transition = null;
  try {
    ne = 1, Ac(e, t, n, r);
  } finally {
    ne = o, Ur.transition = s;
  }
}
function w1(e, t, n, r) {
  var o = ne, s = Ur.transition;
  Ur.transition = null;
  try {
    ne = 4, Ac(e, t, n, r);
  } finally {
    ne = o, Ur.transition = s;
  }
}
function Ac(e, t, n, r) {
  if ($i) {
    var o = hu(e, t, n, r);
    if (o === null) hl(e, t, r, Ui, n), Df(e, r);
    else if (y1(o, e, t, n, r)) r.stopPropagation();
    else if (Df(e, r), t & 4 && -1 < g1.indexOf(e)) {
      for (; o !== null; ) {
        var s = Rs(o);
        if (s !== null && ng(s), s = hu(e, t, n, r), s === null && hl(e, t, r, Ui, n), s === o) break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else hl(e, t, r, null, n);
  }
}
var Ui = null;
function hu(e, t, n, r) {
  if (Ui = null, e = Pc(r), e = er(e), e !== null) if (t = yr(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ym(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ui = e, null;
}
function ag(e) {
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
      switch (a1()) {
        case Dc:
          return 1;
        case Zm:
          return 4;
        case zi:
        case l1:
          return 16;
        case Jm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kn = null, Mc = null, Si = null;
function lg() {
  if (Si) return Si;
  var e, t = Mc, n = t.length, r, o = "value" in kn ? kn.value : kn.textContent, s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++) ;
  return Si = o.slice(e, 1 < r ? 1 - r : void 0);
}
function bi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Gs() {
  return !0;
}
function Rf() {
  return !1;
}
function ct(e) {
  function t(n, r, o, s, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = s, this.target = i, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(s) : s[a]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Gs : Rf, this.isPropagationStopped = Rf, this;
  }
  return ye(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Gs);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Gs);
  }, persist: function() {
  }, isPersistent: Gs }), t;
}
var uo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, jc = ct(uo), Ns = ye({}, uo, { view: 0, detail: 0 }), S1 = ct(Ns), sl, il, To, ba = ye({}, Ns, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Lc, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== To && (To && e.type === "mousemove" ? (sl = e.screenX - To.screenX, il = e.screenY - To.screenY) : il = sl = 0, To = e), sl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : il;
} }), Af = ct(ba), b1 = ye({}, ba, { dataTransfer: 0 }), k1 = ct(b1), C1 = ye({}, Ns, { relatedTarget: 0 }), al = ct(C1), E1 = ye({}, uo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), T1 = ct(E1), P1 = ye({}, uo, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), D1 = ct(P1), N1 = ye({}, uo, { data: 0 }), Mf = ct(N1), R1 = {
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
}, A1 = {
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
}, M1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function j1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = M1[e]) ? !!t[e] : !1;
}
function Lc() {
  return j1;
}
var L1 = ye({}, Ns, { key: function(e) {
  if (e.key) {
    var t = R1[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = bi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? A1[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Lc, charCode: function(e) {
  return e.type === "keypress" ? bi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? bi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), _1 = ct(L1), I1 = ye({}, ba, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), jf = ct(I1), O1 = ye({}, Ns, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Lc }), F1 = ct(O1), V1 = ye({}, uo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), z1 = ct(V1), B1 = ye({}, ba, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), $1 = ct(B1), U1 = [9, 13, 27, 32], _c = tn && "CompositionEvent" in window, Uo = null;
tn && "documentMode" in document && (Uo = document.documentMode);
var W1 = tn && "TextEvent" in window && !Uo, ug = tn && (!_c || Uo && 8 < Uo && 11 >= Uo), Lf = " ", _f = !1;
function cg(e, t) {
  switch (e) {
    case "keyup":
      return U1.indexOf(t.keyCode) !== -1;
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
function dg(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Er = !1;
function H1(e, t) {
  switch (e) {
    case "compositionend":
      return dg(t);
    case "keypress":
      return t.which !== 32 ? null : (_f = !0, Lf);
    case "textInput":
      return e = t.data, e === Lf && _f ? null : e;
    default:
      return null;
  }
}
function K1(e, t) {
  if (Er) return e === "compositionend" || !_c && cg(e, t) ? (e = lg(), Si = Mc = kn = null, Er = !1, e) : null;
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
      return ug && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var G1 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function If(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!G1[e.type] : t === "textarea";
}
function fg(e, t, n, r) {
  Um(r), t = Wi(t, "onChange"), 0 < t.length && (n = new jc("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Wo = null, is = null;
function Y1(e) {
  kg(e, 0);
}
function ka(e) {
  var t = Dr(e);
  if (Im(t)) return e;
}
function X1(e, t) {
  if (e === "change") return t;
}
var pg = !1;
if (tn) {
  var ll;
  if (tn) {
    var ul = "oninput" in document;
    if (!ul) {
      var Of = document.createElement("div");
      Of.setAttribute("oninput", "return;"), ul = typeof Of.oninput == "function";
    }
    ll = ul;
  } else ll = !1;
  pg = ll && (!document.documentMode || 9 < document.documentMode);
}
function Ff() {
  Wo && (Wo.detachEvent("onpropertychange", hg), is = Wo = null);
}
function hg(e) {
  if (e.propertyName === "value" && ka(is)) {
    var t = [];
    fg(t, is, e, Pc(e)), Gm(Y1, t);
  }
}
function Q1(e, t, n) {
  e === "focusin" ? (Ff(), Wo = t, is = n, Wo.attachEvent("onpropertychange", hg)) : e === "focusout" && Ff();
}
function q1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ka(is);
}
function Z1(e, t) {
  if (e === "click") return ka(t);
}
function J1(e, t) {
  if (e === "input" || e === "change") return ka(t);
}
function eS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Nt = typeof Object.is == "function" ? Object.is : eS;
function as(e, t) {
  if (Nt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ql.call(t, o) || !Nt(e[o], t[o])) return !1;
  }
  return !0;
}
function Vf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function zf(e, t) {
  var n = Vf(e);
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
    n = Vf(n);
  }
}
function mg(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? mg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function gg() {
  for (var e = window, t = Oi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Oi(e.document);
  }
  return t;
}
function Ic(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function tS(e) {
  var t = gg(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && mg(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ic(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, s = Math.min(r.start, o);
        r = r.end === void 0 ? s : Math.min(r.end, o), !e.extend && s > r && (o = r, r = s, s = o), o = zf(n, s);
        var i = zf(
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
var nS = tn && "documentMode" in document && 11 >= document.documentMode, Tr = null, mu = null, Ho = null, gu = !1;
function Bf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  gu || Tr == null || Tr !== Oi(r) || (r = Tr, "selectionStart" in r && Ic(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ho && as(Ho, r) || (Ho = r, r = Wi(mu, "onSelect"), 0 < r.length && (t = new jc("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Tr)));
}
function Ys(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Pr = { animationend: Ys("Animation", "AnimationEnd"), animationiteration: Ys("Animation", "AnimationIteration"), animationstart: Ys("Animation", "AnimationStart"), transitionend: Ys("Transition", "TransitionEnd") }, cl = {}, yg = {};
tn && (yg = document.createElement("div").style, "AnimationEvent" in window || (delete Pr.animationend.animation, delete Pr.animationiteration.animation, delete Pr.animationstart.animation), "TransitionEvent" in window || delete Pr.transitionend.transition);
function Ca(e) {
  if (cl[e]) return cl[e];
  if (!Pr[e]) return e;
  var t = Pr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in yg) return cl[e] = t[n];
  return e;
}
var vg = Ca("animationend"), xg = Ca("animationiteration"), wg = Ca("animationstart"), Sg = Ca("transitionend"), bg = /* @__PURE__ */ new Map(), $f = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function $n(e, t) {
  bg.set(e, t), gr(t, [e]);
}
for (var dl = 0; dl < $f.length; dl++) {
  var fl = $f[dl], rS = fl.toLowerCase(), oS = fl[0].toUpperCase() + fl.slice(1);
  $n(rS, "on" + oS);
}
$n(vg, "onAnimationEnd");
$n(xg, "onAnimationIteration");
$n(wg, "onAnimationStart");
$n("dblclick", "onDoubleClick");
$n("focusin", "onFocus");
$n("focusout", "onBlur");
$n(Sg, "onTransitionEnd");
Xr("onMouseEnter", ["mouseout", "mouseover"]);
Xr("onMouseLeave", ["mouseout", "mouseover"]);
Xr("onPointerEnter", ["pointerout", "pointerover"]);
Xr("onPointerLeave", ["pointerout", "pointerover"]);
gr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
gr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
gr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
gr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
gr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Io = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), sS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));
function Uf(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, r1(r, t, void 0, e), e.currentTarget = null;
}
function kg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var a = r[i], l = a.instance, u = a.currentTarget;
        if (a = a.listener, l !== s && o.isPropagationStopped()) break e;
        Uf(o, a, u), s = l;
      }
      else for (i = 0; i < r.length; i++) {
        if (a = r[i], l = a.instance, u = a.currentTarget, a = a.listener, l !== s && o.isPropagationStopped()) break e;
        Uf(o, a, u), s = l;
      }
    }
  }
  if (Vi) throw e = du, Vi = !1, du = null, e;
}
function ue(e, t) {
  var n = t[Su];
  n === void 0 && (n = t[Su] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Cg(t, e, 2, !1), n.add(r));
}
function pl(e, t, n) {
  var r = 0;
  t && (r |= 4), Cg(n, e, r, t);
}
var Xs = "_reactListening" + Math.random().toString(36).slice(2);
function ls(e) {
  if (!e[Xs]) {
    e[Xs] = !0, Am.forEach(function(n) {
      n !== "selectionchange" && (sS.has(n) || pl(n, !1, e), pl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Xs] || (t[Xs] = !0, pl("selectionchange", !1, t));
  }
}
function Cg(e, t, n, r) {
  switch (ag(t)) {
    case 1:
      var o = x1;
      break;
    case 4:
      o = w1;
      break;
    default:
      o = Ac;
  }
  n = o.bind(null, t, n, e), o = void 0, !cu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function hl(e, t, n, r, o) {
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
        if (i = er(a), i === null) return;
        if (l = i.tag, l === 5 || l === 6) {
          r = s = i;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  Gm(function() {
    var u = s, c = Pc(n), f = [];
    e: {
      var d = bg.get(e);
      if (d !== void 0) {
        var y = jc, w = e;
        switch (e) {
          case "keypress":
            if (bi(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = _1;
            break;
          case "focusin":
            w = "focus", y = al;
            break;
          case "focusout":
            w = "blur", y = al;
            break;
          case "beforeblur":
          case "afterblur":
            y = al;
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
            y = Af;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = k1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = F1;
            break;
          case vg:
          case xg:
          case wg:
            y = T1;
            break;
          case Sg:
            y = z1;
            break;
          case "scroll":
            y = S1;
            break;
          case "wheel":
            y = $1;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = D1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = jf;
        }
        var g = (t & 4) !== 0, S = !g && e === "scroll", m = g ? d !== null ? d + "Capture" : null : d;
        g = [];
        for (var h = u, v; h !== null; ) {
          v = h;
          var b = v.stateNode;
          if (v.tag === 5 && b !== null && (v = b, m !== null && (b = ns(h, m), b != null && g.push(us(h, b, v)))), S) break;
          h = h.return;
        }
        0 < g.length && (d = new y(d, w, null, n, c), f.push({ event: d, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", d && n !== lu && (w = n.relatedTarget || n.fromElement) && (er(w) || w[nn])) break e;
        if ((y || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, y ? (w = n.relatedTarget || n.toElement, y = u, w = w ? er(w) : null, w !== null && (S = yr(w), w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = u), y !== w)) {
          if (g = Af, b = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (g = jf, b = "onPointerLeave", m = "onPointerEnter", h = "pointer"), S = y == null ? d : Dr(y), v = w == null ? d : Dr(w), d = new g(b, h + "leave", y, n, c), d.target = S, d.relatedTarget = v, b = null, er(c) === u && (g = new g(m, h + "enter", w, n, c), g.target = v, g.relatedTarget = S, b = g), S = b, y && w) t: {
            for (g = y, m = w, h = 0, v = g; v; v = xr(v)) h++;
            for (v = 0, b = m; b; b = xr(b)) v++;
            for (; 0 < h - v; ) g = xr(g), h--;
            for (; 0 < v - h; ) m = xr(m), v--;
            for (; h--; ) {
              if (g === m || m !== null && g === m.alternate) break t;
              g = xr(g), m = xr(m);
            }
            g = null;
          }
          else g = null;
          y !== null && Wf(f, d, y, g, !1), w !== null && S !== null && Wf(f, S, w, g, !0);
        }
      }
      e: {
        if (d = u ? Dr(u) : window, y = d.nodeName && d.nodeName.toLowerCase(), y === "select" || y === "input" && d.type === "file") var k = X1;
        else if (If(d)) if (pg) k = J1;
        else {
          k = q1;
          var T = Q1;
        }
        else (y = d.nodeName) && y.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (k = Z1);
        if (k && (k = k(e, u))) {
          fg(f, k, n, c);
          break e;
        }
        T && T(e, d, u), e === "focusout" && (T = d._wrapperState) && T.controlled && d.type === "number" && ru(d, "number", d.value);
      }
      switch (T = u ? Dr(u) : window, e) {
        case "focusin":
          (If(T) || T.contentEditable === "true") && (Tr = T, mu = u, Ho = null);
          break;
        case "focusout":
          Ho = mu = Tr = null;
          break;
        case "mousedown":
          gu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          gu = !1, Bf(f, n, c);
          break;
        case "selectionchange":
          if (nS) break;
        case "keydown":
        case "keyup":
          Bf(f, n, c);
      }
      var C;
      if (_c) e: {
        switch (e) {
          case "compositionstart":
            var E = "onCompositionStart";
            break e;
          case "compositionend":
            E = "onCompositionEnd";
            break e;
          case "compositionupdate":
            E = "onCompositionUpdate";
            break e;
        }
        E = void 0;
      }
      else Er ? cg(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (ug && n.locale !== "ko" && (Er || E !== "onCompositionStart" ? E === "onCompositionEnd" && Er && (C = lg()) : (kn = c, Mc = "value" in kn ? kn.value : kn.textContent, Er = !0)), T = Wi(u, E), 0 < T.length && (E = new Mf(E, e, null, n, c), f.push({ event: E, listeners: T }), C ? E.data = C : (C = dg(n), C !== null && (E.data = C)))), (C = W1 ? H1(e, n) : K1(e, n)) && (u = Wi(u, "onBeforeInput"), 0 < u.length && (c = new Mf("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = C));
    }
    kg(f, t);
  });
}
function us(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, s = o.stateNode;
    o.tag === 5 && s !== null && (o = s, s = ns(e, n), s != null && r.unshift(us(e, s, o)), s = ns(e, t), s != null && r.push(us(e, s, o))), e = e.return;
  }
  return r;
}
function xr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Wf(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && u !== null && (a = u, o ? (l = ns(n, s), l != null && i.unshift(us(n, l, a))) : o || (l = ns(n, s), l != null && i.push(us(n, l, a)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var iS = /\r\n?/g, aS = /\u0000|\uFFFD/g;
function Hf(e) {
  return (typeof e == "string" ? e : "" + e).replace(iS, `
`).replace(aS, "");
}
function Qs(e, t, n) {
  if (t = Hf(t), Hf(e) !== t && n) throw Error(R(425));
}
function Hi() {
}
var yu = null, vu = null;
function xu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var wu = typeof setTimeout == "function" ? setTimeout : void 0, lS = typeof clearTimeout == "function" ? clearTimeout : void 0, Kf = typeof Promise == "function" ? Promise : void 0, uS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Kf < "u" ? function(e) {
  return Kf.resolve(null).then(e).catch(cS);
} : wu;
function cS(e) {
  setTimeout(function() {
    throw e;
  });
}
function ml(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), ss(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  ss(t);
}
function Dn(e) {
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
function Gf(e) {
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
var co = Math.random().toString(36).slice(2), _t = "__reactFiber$" + co, cs = "__reactProps$" + co, nn = "__reactContainer$" + co, Su = "__reactEvents$" + co, dS = "__reactListeners$" + co, fS = "__reactHandles$" + co;
function er(e) {
  var t = e[_t];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[nn] || n[_t]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Gf(e); e !== null; ) {
        if (n = e[_t]) return n;
        e = Gf(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Rs(e) {
  return e = e[_t] || e[nn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Dr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Ea(e) {
  return e[cs] || null;
}
var bu = [], Nr = -1;
function Un(e) {
  return { current: e };
}
function ce(e) {
  0 > Nr || (e.current = bu[Nr], bu[Nr] = null, Nr--);
}
function se(e, t) {
  Nr++, bu[Nr] = e.current, e.current = t;
}
var _n = {}, Ue = Un(_n), qe = Un(!1), ar = _n;
function Qr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return _n;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, s;
  for (s in n) o[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Ze(e) {
  return e = e.childContextTypes, e != null;
}
function Ki() {
  ce(qe), ce(Ue);
}
function Yf(e, t, n) {
  if (Ue.current !== _n) throw Error(R(168));
  se(Ue, t), se(qe, n);
}
function Eg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(R(108, Qw(e) || "Unknown", o));
  return ye({}, n, r);
}
function Gi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _n, ar = Ue.current, se(Ue, e), se(qe, qe.current), !0;
}
function Xf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n ? (e = Eg(e, t, ar), r.__reactInternalMemoizedMergedChildContext = e, ce(qe), ce(Ue), se(Ue, e)) : ce(qe), se(qe, n);
}
var Gt = null, Ta = !1, gl = !1;
function Tg(e) {
  Gt === null ? Gt = [e] : Gt.push(e);
}
function pS(e) {
  Ta = !0, Tg(e);
}
function Wn() {
  if (!gl && Gt !== null) {
    gl = !0;
    var e = 0, t = ne;
    try {
      var n = Gt;
      for (ne = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Gt = null, Ta = !1;
    } catch (o) {
      throw Gt !== null && (Gt = Gt.slice(e + 1)), qm(Dc, Wn), o;
    } finally {
      ne = t, gl = !1;
    }
  }
  return null;
}
var Rr = [], Ar = 0, Yi = null, Xi = 0, mt = [], gt = 0, lr = null, Yt = 1, Xt = "";
function Qn(e, t) {
  Rr[Ar++] = Xi, Rr[Ar++] = Yi, Yi = e, Xi = t;
}
function Pg(e, t, n) {
  mt[gt++] = Yt, mt[gt++] = Xt, mt[gt++] = lr, lr = e;
  var r = Yt;
  e = Xt;
  var o = 32 - Pt(r) - 1;
  r &= ~(1 << o), n += 1;
  var s = 32 - Pt(t) + o;
  if (30 < s) {
    var i = o - o % 5;
    s = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Yt = 1 << 32 - Pt(t) + o | n << o | r, Xt = s + e;
  } else Yt = 1 << s | n << o | r, Xt = e;
}
function Oc(e) {
  e.return !== null && (Qn(e, 1), Pg(e, 1, 0));
}
function Fc(e) {
  for (; e === Yi; ) Yi = Rr[--Ar], Rr[Ar] = null, Xi = Rr[--Ar], Rr[Ar] = null;
  for (; e === lr; ) lr = mt[--gt], mt[gt] = null, Xt = mt[--gt], mt[gt] = null, Yt = mt[--gt], mt[gt] = null;
}
var ot = null, rt = null, fe = !1, Tt = null;
function Dg(e, t) {
  var n = yt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Qf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ot = e, rt = Dn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ot = e, rt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = lr !== null ? { id: Yt, overflow: Xt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = yt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ot = e, rt = null, !0) : !1;
    default:
      return !1;
  }
}
function ku(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Cu(e) {
  if (fe) {
    var t = rt;
    if (t) {
      var n = t;
      if (!Qf(e, t)) {
        if (ku(e)) throw Error(R(418));
        t = Dn(n.nextSibling);
        var r = ot;
        t && Qf(e, t) ? Dg(r, n) : (e.flags = e.flags & -4097 | 2, fe = !1, ot = e);
      }
    } else {
      if (ku(e)) throw Error(R(418));
      e.flags = e.flags & -4097 | 2, fe = !1, ot = e;
    }
  }
}
function qf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ot = e;
}
function qs(e) {
  if (e !== ot) return !1;
  if (!fe) return qf(e), fe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !xu(e.type, e.memoizedProps)), t && (t = rt)) {
    if (ku(e)) throw Ng(), Error(R(418));
    for (; t; ) Dg(e, t), t = Dn(t.nextSibling);
  }
  if (qf(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              rt = Dn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      rt = null;
    }
  } else rt = ot ? Dn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ng() {
  for (var e = rt; e; ) e = Dn(e.nextSibling);
}
function qr() {
  rt = ot = null, fe = !1;
}
function Vc(e) {
  Tt === null ? Tt = [e] : Tt.push(e);
}
var hS = un.ReactCurrentBatchConfig;
function Po(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var o = r, s = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(i) {
        var a = o.refs;
        i === null ? delete a[s] : a[s] = i;
      }, t._stringRef = s, t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Zs(e, t) {
  throw e = Object.prototype.toString.call(t), Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Zf(e) {
  var t = e._init;
  return t(e._payload);
}
function Rg(e) {
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
    return m = Mn(m, h), m.index = 0, m.sibling = null, m;
  }
  function s(m, h, v) {
    return m.index = v, e ? (v = m.alternate, v !== null ? (v = v.index, v < h ? (m.flags |= 2, h) : v) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, v, b) {
    return h === null || h.tag !== 6 ? (h = kl(v, m.mode, b), h.return = m, h) : (h = o(h, v), h.return = m, h);
  }
  function l(m, h, v, b) {
    var k = v.type;
    return k === Cr ? c(m, h, v.props.children, b, v.key) : h !== null && (h.elementType === k || typeof k == "object" && k !== null && k.$$typeof === vn && Zf(k) === h.type) ? (b = o(h, v.props), b.ref = Po(m, h, v), b.return = m, b) : (b = Ni(v.type, v.key, v.props, null, m.mode, b), b.ref = Po(m, h, v), b.return = m, b);
  }
  function u(m, h, v, b) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = Cl(v, m.mode, b), h.return = m, h) : (h = o(h, v.children || []), h.return = m, h);
  }
  function c(m, h, v, b, k) {
    return h === null || h.tag !== 7 ? (h = sr(v, m.mode, b, k), h.return = m, h) : (h = o(h, v), h.return = m, h);
  }
  function f(m, h, v) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = kl("" + h, m.mode, v), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Bs:
          return v = Ni(h.type, h.key, h.props, null, m.mode, v), v.ref = Po(m, null, h), v.return = m, v;
        case kr:
          return h = Cl(h, m.mode, v), h.return = m, h;
        case vn:
          var b = h._init;
          return f(m, b(h._payload), v);
      }
      if (Lo(h) || bo(h)) return h = sr(h, m.mode, v, null), h.return = m, h;
      Zs(m, h);
    }
    return null;
  }
  function d(m, h, v, b) {
    var k = h !== null ? h.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number") return k !== null ? null : a(m, h, "" + v, b);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Bs:
          return v.key === k ? l(m, h, v, b) : null;
        case kr:
          return v.key === k ? u(m, h, v, b) : null;
        case vn:
          return k = v._init, d(
            m,
            h,
            k(v._payload),
            b
          );
      }
      if (Lo(v) || bo(v)) return k !== null ? null : c(m, h, v, b, null);
      Zs(m, v);
    }
    return null;
  }
  function y(m, h, v, b, k) {
    if (typeof b == "string" && b !== "" || typeof b == "number") return m = m.get(v) || null, a(h, m, "" + b, k);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Bs:
          return m = m.get(b.key === null ? v : b.key) || null, l(h, m, b, k);
        case kr:
          return m = m.get(b.key === null ? v : b.key) || null, u(h, m, b, k);
        case vn:
          var T = b._init;
          return y(m, h, v, T(b._payload), k);
      }
      if (Lo(b) || bo(b)) return m = m.get(v) || null, c(h, m, b, k, null);
      Zs(h, b);
    }
    return null;
  }
  function w(m, h, v, b) {
    for (var k = null, T = null, C = h, E = h = 0, D = null; C !== null && E < v.length; E++) {
      C.index > E ? (D = C, C = null) : D = C.sibling;
      var N = d(m, C, v[E], b);
      if (N === null) {
        C === null && (C = D);
        break;
      }
      e && C && N.alternate === null && t(m, C), h = s(N, h, E), T === null ? k = N : T.sibling = N, T = N, C = D;
    }
    if (E === v.length) return n(m, C), fe && Qn(m, E), k;
    if (C === null) {
      for (; E < v.length; E++) C = f(m, v[E], b), C !== null && (h = s(C, h, E), T === null ? k = C : T.sibling = C, T = C);
      return fe && Qn(m, E), k;
    }
    for (C = r(m, C); E < v.length; E++) D = y(C, m, E, v[E], b), D !== null && (e && D.alternate !== null && C.delete(D.key === null ? E : D.key), h = s(D, h, E), T === null ? k = D : T.sibling = D, T = D);
    return e && C.forEach(function(A) {
      return t(m, A);
    }), fe && Qn(m, E), k;
  }
  function g(m, h, v, b) {
    var k = bo(v);
    if (typeof k != "function") throw Error(R(150));
    if (v = k.call(v), v == null) throw Error(R(151));
    for (var T = k = null, C = h, E = h = 0, D = null, N = v.next(); C !== null && !N.done; E++, N = v.next()) {
      C.index > E ? (D = C, C = null) : D = C.sibling;
      var A = d(m, C, N.value, b);
      if (A === null) {
        C === null && (C = D);
        break;
      }
      e && C && A.alternate === null && t(m, C), h = s(A, h, E), T === null ? k = A : T.sibling = A, T = A, C = D;
    }
    if (N.done) return n(
      m,
      C
    ), fe && Qn(m, E), k;
    if (C === null) {
      for (; !N.done; E++, N = v.next()) N = f(m, N.value, b), N !== null && (h = s(N, h, E), T === null ? k = N : T.sibling = N, T = N);
      return fe && Qn(m, E), k;
    }
    for (C = r(m, C); !N.done; E++, N = v.next()) N = y(C, m, E, N.value, b), N !== null && (e && N.alternate !== null && C.delete(N.key === null ? E : N.key), h = s(N, h, E), T === null ? k = N : T.sibling = N, T = N);
    return e && C.forEach(function(j) {
      return t(m, j);
    }), fe && Qn(m, E), k;
  }
  function S(m, h, v, b) {
    if (typeof v == "object" && v !== null && v.type === Cr && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Bs:
          e: {
            for (var k = v.key, T = h; T !== null; ) {
              if (T.key === k) {
                if (k = v.type, k === Cr) {
                  if (T.tag === 7) {
                    n(m, T.sibling), h = o(T, v.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (T.elementType === k || typeof k == "object" && k !== null && k.$$typeof === vn && Zf(k) === T.type) {
                  n(m, T.sibling), h = o(T, v.props), h.ref = Po(m, T, v), h.return = m, m = h;
                  break e;
                }
                n(m, T);
                break;
              } else t(m, T);
              T = T.sibling;
            }
            v.type === Cr ? (h = sr(v.props.children, m.mode, b, v.key), h.return = m, m = h) : (b = Ni(v.type, v.key, v.props, null, m.mode, b), b.ref = Po(m, h, v), b.return = m, m = b);
          }
          return i(m);
        case kr:
          e: {
            for (T = v.key; h !== null; ) {
              if (h.key === T) if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) {
                n(m, h.sibling), h = o(h, v.children || []), h.return = m, m = h;
                break e;
              } else {
                n(m, h);
                break;
              }
              else t(m, h);
              h = h.sibling;
            }
            h = Cl(v, m.mode, b), h.return = m, m = h;
          }
          return i(m);
        case vn:
          return T = v._init, S(m, h, T(v._payload), b);
      }
      if (Lo(v)) return w(m, h, v, b);
      if (bo(v)) return g(m, h, v, b);
      Zs(m, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, h !== null && h.tag === 6 ? (n(m, h.sibling), h = o(h, v), h.return = m, m = h) : (n(m, h), h = kl(v, m.mode, b), h.return = m, m = h), i(m)) : n(m, h);
  }
  return S;
}
var Zr = Rg(!0), Ag = Rg(!1), Qi = Un(null), qi = null, Mr = null, zc = null;
function Bc() {
  zc = Mr = qi = null;
}
function $c(e) {
  var t = Qi.current;
  ce(Qi), e._currentValue = t;
}
function Eu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Wr(e, t) {
  qi = e, zc = Mr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Qe = !0), e.firstContext = null);
}
function xt(e) {
  var t = e._currentValue;
  if (zc !== e) if (e = { context: e, memoizedValue: t, next: null }, Mr === null) {
    if (qi === null) throw Error(R(308));
    Mr = e, qi.dependencies = { lanes: 0, firstContext: e };
  } else Mr = Mr.next = e;
  return t;
}
var tr = null;
function Uc(e) {
  tr === null ? tr = [e] : tr.push(e);
}
function Mg(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Uc(t)) : (n.next = o.next, o.next = n), t.interleaved = n, rn(e, r);
}
function rn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var xn = !1;
function Wc(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function jg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function qt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Nn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Z & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, rn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Uc(r)) : (t.next = o.next, o.next = t), r.interleaved = t, rn(e, n);
}
function ki(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Nc(e, n);
  }
}
function Jf(e, t) {
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
function Zi(e, t, n, r) {
  var o = e.updateQueue;
  xn = !1;
  var s = o.firstBaseUpdate, i = o.lastBaseUpdate, a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a, u = l.next;
    l.next = null, i === null ? s = u : i.next = u, i = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== i && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l));
  }
  if (s !== null) {
    var f = o.baseState;
    i = 0, c = u = l = null, a = s;
    do {
      var d = a.lane, y = a.eventTime;
      if ((r & d) === d) {
        c !== null && (c = c.next = {
          eventTime: y,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var w = e, g = a;
          switch (d = t, y = n, g.tag) {
            case 1:
              if (w = g.payload, typeof w == "function") {
                f = w.call(y, f, d);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = g.payload, d = typeof w == "function" ? w.call(y, f, d) : w, d == null) break e;
              f = ye({}, f, d);
              break e;
            case 2:
              xn = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, d = o.effects, d === null ? o.effects = [a] : d.push(a));
      } else y = { eventTime: y, lane: d, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = y, l = f) : c = c.next = y, i |= d;
      if (a = a.next, a === null) {
        if (a = o.shared.pending, a === null) break;
        d = a, a = d.next, d.next = null, o.lastBaseUpdate = d, o.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = f), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        i |= o.lane, o = o.next;
      while (o !== t);
    } else s === null && (o.shared.lanes = 0);
    cr |= i, e.lanes = i, e.memoizedState = f;
  }
}
function ep(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(R(191, o));
      o.call(r);
    }
  }
}
var As = {}, Vt = Un(As), ds = Un(As), fs = Un(As);
function nr(e) {
  if (e === As) throw Error(R(174));
  return e;
}
function Hc(e, t) {
  switch (se(fs, t), se(ds, e), se(Vt, As), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : su(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = su(t, e);
  }
  ce(Vt), se(Vt, t);
}
function Jr() {
  ce(Vt), ce(ds), ce(fs);
}
function Lg(e) {
  nr(fs.current);
  var t = nr(Vt.current), n = su(t, e.type);
  t !== n && (se(ds, e), se(Vt, n));
}
function Kc(e) {
  ds.current === e && (ce(Vt), ce(ds));
}
var he = Un(0);
function Ji(e) {
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
var yl = [];
function Gc() {
  for (var e = 0; e < yl.length; e++) yl[e]._workInProgressVersionPrimary = null;
  yl.length = 0;
}
var Ci = un.ReactCurrentDispatcher, vl = un.ReactCurrentBatchConfig, ur = 0, ge = null, De = null, Re = null, ea = !1, Ko = !1, ps = 0, mS = 0;
function Fe() {
  throw Error(R(321));
}
function Yc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Nt(e[n], t[n])) return !1;
  return !0;
}
function Xc(e, t, n, r, o, s) {
  if (ur = s, ge = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ci.current = e === null || e.memoizedState === null ? xS : wS, e = n(r, o), Ko) {
    s = 0;
    do {
      if (Ko = !1, ps = 0, 25 <= s) throw Error(R(301));
      s += 1, Re = De = null, t.updateQueue = null, Ci.current = SS, e = n(r, o);
    } while (Ko);
  }
  if (Ci.current = ta, t = De !== null && De.next !== null, ur = 0, Re = De = ge = null, ea = !1, t) throw Error(R(300));
  return e;
}
function Qc() {
  var e = ps !== 0;
  return ps = 0, e;
}
function Lt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Re === null ? ge.memoizedState = Re = e : Re = Re.next = e, Re;
}
function wt() {
  if (De === null) {
    var e = ge.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = De.next;
  var t = Re === null ? ge.memoizedState : Re.next;
  if (t !== null) Re = t, De = e;
  else {
    if (e === null) throw Error(R(310));
    De = e, e = { memoizedState: De.memoizedState, baseState: De.baseState, baseQueue: De.baseQueue, queue: De.queue, next: null }, Re === null ? ge.memoizedState = Re = e : Re = Re.next = e;
  }
  return Re;
}
function hs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function xl(e) {
  var t = wt(), n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = De, o = r.baseQueue, s = n.pending;
  if (s !== null) {
    if (o !== null) {
      var i = o.next;
      o.next = s.next, s.next = i;
    }
    r.baseQueue = o = s, n.pending = null;
  }
  if (o !== null) {
    s = o.next, r = r.baseState;
    var a = i = null, l = null, u = s;
    do {
      var c = u.lane;
      if ((ur & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (a = l = f, i = r) : l = l.next = f, ge.lanes |= c, cr |= c;
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? i = r : l.next = a, Nt(r, t.memoizedState) || (Qe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      s = o.lane, ge.lanes |= s, cr |= s, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function wl(e) {
  var t = wt(), n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      s = e(s, i.action), i = i.next;
    while (i !== o);
    Nt(s, t.memoizedState) || (Qe = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function _g() {
}
function Ig(e, t) {
  var n = ge, r = wt(), o = t(), s = !Nt(r.memoizedState, o);
  if (s && (r.memoizedState = o, Qe = !0), r = r.queue, qc(Vg.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || Re !== null && Re.memoizedState.tag & 1) {
    if (n.flags |= 2048, ms(9, Fg.bind(null, n, r, o, t), void 0, null), Ae === null) throw Error(R(349));
    ur & 30 || Og(n, t, o);
  }
  return o;
}
function Og(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ge.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ge.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Fg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, zg(t) && Bg(e);
}
function Vg(e, t, n) {
  return n(function() {
    zg(t) && Bg(e);
  });
}
function zg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Nt(e, n);
  } catch {
    return !0;
  }
}
function Bg(e) {
  var t = rn(e, 1);
  t !== null && Dt(t, e, 1, -1);
}
function tp(e) {
  var t = Lt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: hs, lastRenderedState: e }, t.queue = e, e = e.dispatch = vS.bind(null, ge, e), [t.memoizedState, e];
}
function ms(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ge.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ge.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function $g() {
  return wt().memoizedState;
}
function Ei(e, t, n, r) {
  var o = Lt();
  ge.flags |= e, o.memoizedState = ms(1 | t, n, void 0, r === void 0 ? null : r);
}
function Pa(e, t, n, r) {
  var o = wt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (De !== null) {
    var i = De.memoizedState;
    if (s = i.destroy, r !== null && Yc(r, i.deps)) {
      o.memoizedState = ms(t, n, s, r);
      return;
    }
  }
  ge.flags |= e, o.memoizedState = ms(1 | t, n, s, r);
}
function np(e, t) {
  return Ei(8390656, 8, e, t);
}
function qc(e, t) {
  return Pa(2048, 8, e, t);
}
function Ug(e, t) {
  return Pa(4, 2, e, t);
}
function Wg(e, t) {
  return Pa(4, 4, e, t);
}
function Hg(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Kg(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Pa(4, 4, Hg.bind(null, t, e), n);
}
function Zc() {
}
function Gg(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Yg(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Xg(e, t, n) {
  return ur & 21 ? (Nt(n, t) || (n = eg(), ge.lanes |= n, cr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Qe = !0), e.memoizedState = n);
}
function gS(e, t) {
  var n = ne;
  ne = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = vl.transition;
  vl.transition = {};
  try {
    e(!1), t();
  } finally {
    ne = n, vl.transition = r;
  }
}
function Qg() {
  return wt().memoizedState;
}
function yS(e, t, n) {
  var r = An(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, qg(e)) Zg(t, n);
  else if (n = Mg(e, t, n, r), n !== null) {
    var o = Ke();
    Dt(n, e, r, o), Jg(n, t, r);
  }
}
function vS(e, t, n) {
  var r = An(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (qg(e)) Zg(t, o);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var i = t.lastRenderedState, a = s(i, n);
      if (o.hasEagerState = !0, o.eagerState = a, Nt(a, i)) {
        var l = t.interleaved;
        l === null ? (o.next = o, Uc(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Mg(e, t, o, r), n !== null && (o = Ke(), Dt(n, e, r, o), Jg(n, t, r));
  }
}
function qg(e) {
  var t = e.alternate;
  return e === ge || t !== null && t === ge;
}
function Zg(e, t) {
  Ko = ea = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Jg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Nc(e, n);
  }
}
var ta = { readContext: xt, useCallback: Fe, useContext: Fe, useEffect: Fe, useImperativeHandle: Fe, useInsertionEffect: Fe, useLayoutEffect: Fe, useMemo: Fe, useReducer: Fe, useRef: Fe, useState: Fe, useDebugValue: Fe, useDeferredValue: Fe, useTransition: Fe, useMutableSource: Fe, useSyncExternalStore: Fe, useId: Fe, unstable_isNewReconciler: !1 }, xS = { readContext: xt, useCallback: function(e, t) {
  return Lt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: xt, useEffect: np, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ei(
    4194308,
    4,
    Hg.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ei(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ei(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Lt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Lt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = yS.bind(null, ge, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Lt();
  return e = { current: e }, t.memoizedState = e;
}, useState: tp, useDebugValue: Zc, useDeferredValue: function(e) {
  return Lt().memoizedState = e;
}, useTransition: function() {
  var e = tp(!1), t = e[0];
  return e = gS.bind(null, e[1]), Lt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ge, o = Lt();
  if (fe) {
    if (n === void 0) throw Error(R(407));
    n = n();
  } else {
    if (n = t(), Ae === null) throw Error(R(349));
    ur & 30 || Og(r, t, n);
  }
  o.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return o.queue = s, np(Vg.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, ms(9, Fg.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = Lt(), t = Ae.identifierPrefix;
  if (fe) {
    var n = Xt, r = Yt;
    n = (r & ~(1 << 32 - Pt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ps++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = mS++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, wS = {
  readContext: xt,
  useCallback: Gg,
  useContext: xt,
  useEffect: qc,
  useImperativeHandle: Kg,
  useInsertionEffect: Ug,
  useLayoutEffect: Wg,
  useMemo: Yg,
  useReducer: xl,
  useRef: $g,
  useState: function() {
    return xl(hs);
  },
  useDebugValue: Zc,
  useDeferredValue: function(e) {
    var t = wt();
    return Xg(t, De.memoizedState, e);
  },
  useTransition: function() {
    var e = xl(hs)[0], t = wt().memoizedState;
    return [e, t];
  },
  useMutableSource: _g,
  useSyncExternalStore: Ig,
  useId: Qg,
  unstable_isNewReconciler: !1
}, SS = { readContext: xt, useCallback: Gg, useContext: xt, useEffect: qc, useImperativeHandle: Kg, useInsertionEffect: Ug, useLayoutEffect: Wg, useMemo: Yg, useReducer: wl, useRef: $g, useState: function() {
  return wl(hs);
}, useDebugValue: Zc, useDeferredValue: function(e) {
  var t = wt();
  return De === null ? t.memoizedState = e : Xg(t, De.memoizedState, e);
}, useTransition: function() {
  var e = wl(hs)[0], t = wt().memoizedState;
  return [e, t];
}, useMutableSource: _g, useSyncExternalStore: Ig, useId: Qg, unstable_isNewReconciler: !1 };
function Ct(e, t) {
  if (e && e.defaultProps) {
    t = ye({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Tu(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ye({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Da = { isMounted: function(e) {
  return (e = e._reactInternals) ? yr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ke(), o = An(e), s = qt(r, o);
  s.payload = t, n != null && (s.callback = n), t = Nn(e, s, o), t !== null && (Dt(t, e, o, r), ki(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ke(), o = An(e), s = qt(r, o);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Nn(e, s, o), t !== null && (Dt(t, e, o, r), ki(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ke(), r = An(e), o = qt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Nn(e, o, r), t !== null && (Dt(t, e, r, n), ki(t, e, r));
} };
function rp(e, t, n, r, o, s, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !as(n, r) || !as(o, s) : !0;
}
function ey(e, t, n) {
  var r = !1, o = _n, s = t.contextType;
  return typeof s == "object" && s !== null ? s = xt(s) : (o = Ze(t) ? ar : Ue.current, r = t.contextTypes, s = (r = r != null) ? Qr(e, o) : _n), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Da, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function op(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Da.enqueueReplaceState(t, t.state, null);
}
function Pu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Wc(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? o.context = xt(s) : (s = Ze(t) ? ar : Ue.current, o.context = Qr(e, s)), o.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Tu(e, t, s, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Da.enqueueReplaceState(o, o.state, null), Zi(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function eo(e, t) {
  try {
    var n = "", r = t;
    do
      n += Xw(r), r = r.return;
    while (r);
    var o = n;
  } catch (s) {
    o = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Sl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Du(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var bS = typeof WeakMap == "function" ? WeakMap : Map;
function ty(e, t, n) {
  n = qt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ra || (ra = !0, Fu = r), Du(e, t);
  }, n;
}
function ny(e, t, n) {
  n = qt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Du(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    Du(e, t), typeof r != "function" && (Rn === null ? Rn = /* @__PURE__ */ new Set([this]) : Rn.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function sp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new bS();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = IS.bind(null, e, t, n), t.then(e, e));
}
function ip(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ap(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = qt(-1, 1), t.tag = 2, Nn(n, t, 1))), n.lanes |= 1), e);
}
var kS = un.ReactCurrentOwner, Qe = !1;
function He(e, t, n, r) {
  t.child = e === null ? Ag(t, null, n, r) : Zr(t, e.child, n, r);
}
function lp(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return Wr(t, o), r = Xc(e, t, n, r, s, o), n = Qc(), e !== null && !Qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, on(e, t, o)) : (fe && n && Oc(t), t.flags |= 1, He(e, t, r, o), t.child);
}
function up(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !id(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, ry(e, t, s, r, o)) : (e = Ni(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & o)) {
    var i = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : as, n(i, r) && e.ref === t.ref) return on(e, t, o);
  }
  return t.flags |= 1, e = Mn(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function ry(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (as(s, r) && e.ref === t.ref) if (Qe = !1, t.pendingProps = r = s, (e.lanes & o) !== 0) e.flags & 131072 && (Qe = !0);
    else return t.lanes = e.lanes, on(e, t, o);
  }
  return Nu(e, t, n, r, o);
}
function oy(e, t, n) {
  var r = t.pendingProps, o = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, se(Lr, tt), tt |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, se(Lr, tt), tt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, se(Lr, tt), tt |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, se(Lr, tt), tt |= r;
  return He(e, t, o, n), t.child;
}
function sy(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Nu(e, t, n, r, o) {
  var s = Ze(n) ? ar : Ue.current;
  return s = Qr(t, s), Wr(t, o), n = Xc(e, t, n, r, s, o), r = Qc(), e !== null && !Qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, on(e, t, o)) : (fe && r && Oc(t), t.flags |= 1, He(e, t, n, o), t.child);
}
function cp(e, t, n, r, o) {
  if (Ze(n)) {
    var s = !0;
    Gi(t);
  } else s = !1;
  if (Wr(t, o), t.stateNode === null) Ti(e, t), ey(t, n, r), Pu(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, a = t.memoizedProps;
    i.props = a;
    var l = i.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = xt(u) : (u = Ze(n) ? ar : Ue.current, u = Qr(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    f || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || l !== u) && op(t, i, r, u), xn = !1;
    var d = t.memoizedState;
    i.state = d, Zi(t, r, i, o), l = t.memoizedState, a !== r || d !== l || qe.current || xn ? (typeof c == "function" && (Tu(t, n, c, r), l = t.memoizedState), (a = xn || rp(t, n, a, r, d, l, u)) ? (f || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), i.props = r, i.state = l, i.context = u, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, jg(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : Ct(t.type, a), i.props = u, f = t.pendingProps, d = i.context, l = n.contextType, typeof l == "object" && l !== null ? l = xt(l) : (l = Ze(n) ? ar : Ue.current, l = Qr(t, l));
    var y = n.getDerivedStateFromProps;
    (c = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== f || d !== l) && op(t, i, r, l), xn = !1, d = t.memoizedState, i.state = d, Zi(t, r, i, o);
    var w = t.memoizedState;
    a !== f || d !== w || qe.current || xn ? (typeof y == "function" && (Tu(t, n, y, r), w = t.memoizedState), (u = xn || rp(t, n, u, r, d, w, l) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, l), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, l)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = l, r = u) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ru(e, t, n, r, s, o);
}
function Ru(e, t, n, r, o, s) {
  sy(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Xf(t, n, !1), on(e, t, s);
  r = t.stateNode, kS.current = t;
  var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Zr(t, e.child, null, s), t.child = Zr(t, null, a, s)) : He(e, t, a, s), t.memoizedState = r.state, o && Xf(t, n, !0), t.child;
}
function iy(e) {
  var t = e.stateNode;
  t.pendingContext ? Yf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Yf(e, t.context, !1), Hc(e, t.containerInfo);
}
function dp(e, t, n, r, o) {
  return qr(), Vc(o), t.flags |= 256, He(e, t, n, r), t.child;
}
var Au = { dehydrated: null, treeContext: null, retryLane: 0 };
function Mu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ay(e, t, n) {
  var r = t.pendingProps, o = he.current, s = !1, i = (t.flags & 128) !== 0, a;
  if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), se(he, o & 1), e === null)
    return Cu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, i = { mode: "hidden", children: i }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = i) : s = Aa(i, r, 0, null), e = sr(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Mu(n), t.memoizedState = Au, e) : Jc(t, i));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return CS(e, t, i, r, a, o, n);
  if (s) {
    s = r.fallback, i = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Mn(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? s = Mn(a, s) : (s = sr(s, i, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, i = e.child.memoizedState, i = i === null ? Mu(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, s.memoizedState = i, s.childLanes = e.childLanes & ~n, t.memoizedState = Au, r;
  }
  return s = e.child, e = s.sibling, r = Mn(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Jc(e, t) {
  return t = Aa({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Js(e, t, n, r) {
  return r !== null && Vc(r), Zr(t, e.child, null, n), e = Jc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function CS(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Sl(Error(R(422))), Js(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, o = t.mode, r = Aa({ mode: "visible", children: r.children }, o, 0, null), s = sr(s, o, i, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Zr(t, e.child, null, i), t.child.memoizedState = Mu(i), t.memoizedState = Au, s);
  if (!(t.mode & 1)) return Js(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
    return r = a, s = Error(R(419)), r = Sl(s, r, void 0), Js(e, t, i, r);
  }
  if (a = (i & e.childLanes) !== 0, Qe || a) {
    if (r = Ae, r !== null) {
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
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== s.retryLane && (s.retryLane = o, rn(e, o), Dt(r, e, o, -1));
    }
    return sd(), r = Sl(Error(R(421))), Js(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = OS.bind(null, e), o._reactRetry = t, null) : (e = s.treeContext, rt = Dn(o.nextSibling), ot = t, fe = !0, Tt = null, e !== null && (mt[gt++] = Yt, mt[gt++] = Xt, mt[gt++] = lr, Yt = e.id, Xt = e.overflow, lr = t), t = Jc(t, r.children), t.flags |= 4096, t);
}
function fp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Eu(e.return, t, n);
}
function bl(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = o);
}
function ly(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, s = r.tail;
  if (He(e, t, r.children, n), r = he.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && fp(e, n, t);
      else if (e.tag === 19) fp(e, n, t);
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
  if (se(he, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Ji(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), bl(t, !1, o, n, s);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Ji(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      bl(t, !0, n, null, s);
      break;
    case "together":
      bl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ti(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function on(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), cr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (e = t.child, n = Mn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Mn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function ES(e, t, n) {
  switch (t.tag) {
    case 3:
      iy(t), qr();
      break;
    case 5:
      Lg(t);
      break;
    case 1:
      Ze(t.type) && Gi(t);
      break;
    case 4:
      Hc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      se(Qi, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (se(he, he.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ay(e, t, n) : (se(he, he.current & 1), e = on(e, t, n), e !== null ? e.sibling : null);
      se(he, he.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return ly(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), se(he, he.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, oy(e, t, n);
  }
  return on(e, t, n);
}
var uy, ju, cy, dy;
uy = function(e, t) {
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
ju = function() {
};
cy = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, nr(Vt.current);
    var s = null;
    switch (n) {
      case "input":
        o = tu(e, o), r = tu(e, r), s = [];
        break;
      case "select":
        o = ye({}, o, { value: void 0 }), r = ye({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        o = ou(e, o), r = ou(e, r), s = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hi);
    }
    iu(n, r);
    var i;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var a = o[u];
      for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (es.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (a = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null)) if (u === "style") if (a) {
        for (i in a) !a.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in l) l.hasOwnProperty(i) && a[i] !== l[i] && (n || (n = {}), n[i] = l[i]);
      } else n || (s || (s = []), s.push(
        u,
        n
      )), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (es.hasOwnProperty(u) ? (l != null && u === "onScroll" && ue("scroll", e), s || a === l || (s = [])) : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
dy = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Do(e, t) {
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
function Ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function TS(e, t, n) {
  var r = t.pendingProps;
  switch (Fc(t), t.tag) {
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
      return Ve(t), null;
    case 1:
      return Ze(t.type) && Ki(), Ve(t), null;
    case 3:
      return r = t.stateNode, Jr(), ce(qe), ce(Ue), Gc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (qs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Tt !== null && (Bu(Tt), Tt = null))), ju(e, t), Ve(t), null;
    case 5:
      Kc(t);
      var o = nr(fs.current);
      if (n = t.type, e !== null && t.stateNode != null) cy(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return Ve(t), null;
        }
        if (e = nr(Vt.current), qs(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[_t] = t, r[cs] = s, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ue("cancel", r), ue("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ue("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Io.length; o++) ue(Io[o], r);
              break;
            case "source":
              ue("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ue(
                "error",
                r
              ), ue("load", r);
              break;
            case "details":
              ue("toggle", r);
              break;
            case "input":
              Sf(r, s), ue("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, ue("invalid", r);
              break;
            case "textarea":
              kf(r, s), ue("invalid", r);
          }
          iu(n, s), o = null;
          for (var i in s) if (s.hasOwnProperty(i)) {
            var a = s[i];
            i === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && Qs(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && Qs(
              r.textContent,
              a,
              e
            ), o = ["children", "" + a]) : es.hasOwnProperty(i) && a != null && i === "onScroll" && ue("scroll", r);
          }
          switch (n) {
            case "input":
              $s(r), bf(r, s, !0);
              break;
            case "textarea":
              $s(r), Cf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Hi);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Vm(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[_t] = t, e[cs] = r, uy(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = au(n, r), n) {
              case "dialog":
                ue("cancel", e), ue("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ue("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Io.length; o++) ue(Io[o], e);
                o = r;
                break;
              case "source":
                ue("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ue(
                  "error",
                  e
                ), ue("load", e), o = r;
                break;
              case "details":
                ue("toggle", e), o = r;
                break;
              case "input":
                Sf(e, r), o = tu(e, r), ue("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ye({}, r, { value: void 0 }), ue("invalid", e);
                break;
              case "textarea":
                kf(e, r), o = ou(e, r), ue("invalid", e);
                break;
              default:
                o = r;
            }
            iu(n, o), a = o;
            for (s in a) if (a.hasOwnProperty(s)) {
              var l = a[s];
              s === "style" ? $m(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && zm(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && ts(e, l) : typeof l == "number" && ts(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (es.hasOwnProperty(s) ? l != null && s === "onScroll" && ue("scroll", e) : l != null && kc(e, s, l, i));
            }
            switch (n) {
              case "input":
                $s(e), bf(e, r, !1);
                break;
              case "textarea":
                $s(e), Cf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ln(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? zr(e, !!r.multiple, s, !1) : r.defaultValue != null && zr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Hi);
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
      return Ve(t), null;
    case 6:
      if (e && t.stateNode != null) dy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (n = nr(fs.current), nr(Vt.current), qs(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[_t] = t, (s = r.nodeValue !== n) && (e = ot, e !== null)) switch (e.tag) {
            case 3:
              Qs(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Qs(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[_t] = t, t.stateNode = r;
      }
      return Ve(t), null;
    case 13:
      if (ce(he), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (fe && rt !== null && t.mode & 1 && !(t.flags & 128)) Ng(), qr(), t.flags |= 98560, s = !1;
        else if (s = qs(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(R(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(R(317));
            s[_t] = t;
          } else qr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ve(t), s = !1;
        } else Tt !== null && (Bu(Tt), Tt = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || he.current & 1 ? Ne === 0 && (Ne = 3) : sd())), t.updateQueue !== null && (t.flags |= 4), Ve(t), null);
    case 4:
      return Jr(), ju(e, t), e === null && ls(t.stateNode.containerInfo), Ve(t), null;
    case 10:
      return $c(t.type._context), Ve(t), null;
    case 17:
      return Ze(t.type) && Ki(), Ve(t), null;
    case 19:
      if (ce(he), s = t.memoizedState, s === null) return Ve(t), null;
      if (r = (t.flags & 128) !== 0, i = s.rendering, i === null) if (r) Do(s, !1);
      else {
        if (Ne !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = Ji(e), i !== null) {
            for (t.flags |= 128, Do(s, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, i = s.alternate, i === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = i.childLanes, s.lanes = i.lanes, s.child = i.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = i.memoizedProps, s.memoizedState = i.memoizedState, s.updateQueue = i.updateQueue, s.type = i.type, e = i.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return se(he, he.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && Ee() > to && (t.flags |= 128, r = !0, Do(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ji(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Do(s, !0), s.tail === null && s.tailMode === "hidden" && !i.alternate && !fe) return Ve(t), null;
        } else 2 * Ee() - s.renderingStartTime > to && n !== 1073741824 && (t.flags |= 128, r = !0, Do(s, !1), t.lanes = 4194304);
        s.isBackwards ? (i.sibling = t.child, t.child = i) : (n = s.last, n !== null ? n.sibling = i : t.child = i, s.last = i);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = Ee(), t.sibling = null, n = he.current, se(he, r ? n & 1 | 2 : n & 1), t) : (Ve(t), null);
    case 22:
    case 23:
      return od(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? tt & 1073741824 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ve(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function PS(e, t) {
  switch (Fc(t), t.tag) {
    case 1:
      return Ze(t.type) && Ki(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Jr(), ce(qe), ce(Ue), Gc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Kc(t), null;
    case 13:
      if (ce(he), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(R(340));
        qr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ce(he), null;
    case 4:
      return Jr(), null;
    case 10:
      return $c(t.type._context), null;
    case 22:
    case 23:
      return od(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ei = !1, Be = !1, DS = typeof WeakSet == "function" ? WeakSet : Set, _ = null;
function jr(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    we(e, t, r);
  }
  else n.current = null;
}
function Lu(e, t, n) {
  try {
    n();
  } catch (r) {
    we(e, t, r);
  }
}
var pp = !1;
function NS(e, t) {
  if (yu = $i, e = gg(), Ic(e)) {
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
        var i = 0, a = -1, l = -1, u = 0, c = 0, f = e, d = null;
        t: for (; ; ) {
          for (var y; f !== n || o !== 0 && f.nodeType !== 3 || (a = i + o), f !== s || r !== 0 && f.nodeType !== 3 || (l = i + r), f.nodeType === 3 && (i += f.nodeValue.length), (y = f.firstChild) !== null; )
            d = f, f = y;
          for (; ; ) {
            if (f === e) break t;
            if (d === n && ++u === o && (a = i), d === s && ++c === r && (l = i), (y = f.nextSibling) !== null) break;
            f = d, d = f.parentNode;
          }
          f = y;
        }
        n = a === -1 || l === -1 ? null : { start: a, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (vu = { focusedElem: e, selectionRange: n }, $i = !1, _ = t; _ !== null; ) if (t = _, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, _ = e;
  else for (; _ !== null; ) {
    t = _;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var g = w.memoizedProps, S = w.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Ct(t.type, g), S);
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
          throw Error(R(163));
      }
    } catch (b) {
      we(t, t.return, b);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, _ = e;
      break;
    }
    _ = t.return;
  }
  return w = pp, pp = !1, w;
}
function Go(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        o.destroy = void 0, s !== void 0 && Lu(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Na(e, t) {
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
function _u(e) {
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
function fy(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, fy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[_t], delete t[cs], delete t[Su], delete t[dS], delete t[fS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function py(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function hp(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || py(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Iu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Hi));
  else if (r !== 4 && (e = e.child, e !== null)) for (Iu(e, t, n), e = e.sibling; e !== null; ) Iu(e, t, n), e = e.sibling;
}
function Ou(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ou(e, t, n), e = e.sibling; e !== null; ) Ou(e, t, n), e = e.sibling;
}
var je = null, Et = !1;
function fn(e, t, n) {
  for (n = n.child; n !== null; ) hy(e, t, n), n = n.sibling;
}
function hy(e, t, n) {
  if (Ft && typeof Ft.onCommitFiberUnmount == "function") try {
    Ft.onCommitFiberUnmount(Sa, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Be || jr(n, t);
    case 6:
      var r = je, o = Et;
      je = null, fn(e, t, n), je = r, Et = o, je !== null && (Et ? (e = je, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : je.removeChild(n.stateNode));
      break;
    case 18:
      je !== null && (Et ? (e = je, n = n.stateNode, e.nodeType === 8 ? ml(e.parentNode, n) : e.nodeType === 1 && ml(e, n), ss(e)) : ml(je, n.stateNode));
      break;
    case 4:
      r = je, o = Et, je = n.stateNode.containerInfo, Et = !0, fn(e, t, n), je = r, Et = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Be && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var s = o, i = s.destroy;
          s = s.tag, i !== void 0 && (s & 2 || s & 4) && Lu(n, t, i), o = o.next;
        } while (o !== r);
      }
      fn(e, t, n);
      break;
    case 1:
      if (!Be && (jr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        we(n, t, a);
      }
      fn(e, t, n);
      break;
    case 21:
      fn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Be = (r = Be) || n.memoizedState !== null, fn(e, t, n), Be = r) : fn(e, t, n);
      break;
    default:
      fn(e, t, n);
  }
}
function mp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new DS()), t.forEach(function(r) {
      var o = FS.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function St(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var s = e, i = t, a = i;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            je = a.stateNode, Et = !1;
            break e;
          case 3:
            je = a.stateNode.containerInfo, Et = !0;
            break e;
          case 4:
            je = a.stateNode.containerInfo, Et = !0;
            break e;
        }
        a = a.return;
      }
      if (je === null) throw Error(R(160));
      hy(s, i, o), je = null, Et = !1;
      var l = o.alternate;
      l !== null && (l.return = null), o.return = null;
    } catch (u) {
      we(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) my(t, e), t = t.sibling;
}
function my(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (St(t, e), jt(e), r & 4) {
        try {
          Go(3, e, e.return), Na(3, e);
        } catch (g) {
          we(e, e.return, g);
        }
        try {
          Go(5, e, e.return);
        } catch (g) {
          we(e, e.return, g);
        }
      }
      break;
    case 1:
      St(t, e), jt(e), r & 512 && n !== null && jr(n, n.return);
      break;
    case 5:
      if (St(t, e), jt(e), r & 512 && n !== null && jr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          ts(o, "");
        } catch (g) {
          we(e, e.return, g);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var s = e.memoizedProps, i = n !== null ? n.memoizedProps : s, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && s.type === "radio" && s.name != null && Om(o, s), au(a, i);
          var u = au(a, s);
          for (i = 0; i < l.length; i += 2) {
            var c = l[i], f = l[i + 1];
            c === "style" ? $m(o, f) : c === "dangerouslySetInnerHTML" ? zm(o, f) : c === "children" ? ts(o, f) : kc(o, c, f, u);
          }
          switch (a) {
            case "input":
              nu(o, s);
              break;
            case "textarea":
              Fm(o, s);
              break;
            case "select":
              var d = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!s.multiple;
              var y = s.value;
              y != null ? zr(o, !!s.multiple, y, !1) : d !== !!s.multiple && (s.defaultValue != null ? zr(
                o,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : zr(o, !!s.multiple, s.multiple ? [] : "", !1));
          }
          o[cs] = s;
        } catch (g) {
          we(e, e.return, g);
        }
      }
      break;
    case 6:
      if (St(t, e), jt(e), r & 4) {
        if (e.stateNode === null) throw Error(R(162));
        o = e.stateNode, s = e.memoizedProps;
        try {
          o.nodeValue = s;
        } catch (g) {
          we(e, e.return, g);
        }
      }
      break;
    case 3:
      if (St(t, e), jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        ss(t.containerInfo);
      } catch (g) {
        we(e, e.return, g);
      }
      break;
    case 4:
      St(t, e), jt(e);
      break;
    case 13:
      St(t, e), jt(e), o = e.child, o.flags & 8192 && (s = o.memoizedState !== null, o.stateNode.isHidden = s, !s || o.alternate !== null && o.alternate.memoizedState !== null || (nd = Ee())), r & 4 && mp(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Be = (u = Be) || c, St(t, e), Be = u) : St(t, e), jt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (_ = e, c = e.child; c !== null; ) {
          for (f = _ = c; _ !== null; ) {
            switch (d = _, y = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Go(4, d, d.return);
                break;
              case 1:
                jr(d, d.return);
                var w = d.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = d, n = d.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (g) {
                    we(r, n, g);
                  }
                }
                break;
              case 5:
                jr(d, d.return);
                break;
              case 22:
                if (d.memoizedState !== null) {
                  yp(f);
                  continue;
                }
            }
            y !== null ? (y.return = d, _ = y) : yp(f);
          }
          c = c.sibling;
        }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                o = f.stateNode, u ? (s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, i = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Bm("display", i));
              } catch (g) {
                we(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (c === null) try {
              f.stateNode.nodeValue = u ? "" : f.memoizedProps;
            } catch (g) {
              we(e, e.return, g);
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), f = f.return;
          }
          c === f && (c = null), f.sibling.return = f.return, f = f.sibling;
        }
      }
      break;
    case 19:
      St(t, e), jt(e), r & 4 && mp(e);
      break;
    case 21:
      break;
    default:
      St(
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
          if (py(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ts(o, ""), r.flags &= -33);
          var s = hp(e);
          Ou(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, a = hp(e);
          Iu(e, a, i);
          break;
        default:
          throw Error(R(161));
      }
    } catch (l) {
      we(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function RS(e, t, n) {
  _ = e, gy(e);
}
function gy(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var o = _, s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || ei;
      if (!i) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || Be;
        a = ei;
        var u = Be;
        if (ei = i, (Be = l) && !u) for (_ = o; _ !== null; ) i = _, l = i.child, i.tag === 22 && i.memoizedState !== null ? vp(o) : l !== null ? (l.return = i, _ = l) : vp(o);
        for (; s !== null; ) _ = s, gy(s), s = s.sibling;
        _ = o, ei = a, Be = u;
      }
      gp(e);
    } else o.subtreeFlags & 8772 && s !== null ? (s.return = o, _ = s) : gp(e);
  }
}
function gp(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Be || Na(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Be) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Ct(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && ep(t, s, r);
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
              ep(t, i, n);
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
              var u = t.alternate;
              if (u !== null) {
                var c = u.memoizedState;
                if (c !== null) {
                  var f = c.dehydrated;
                  f !== null && ss(f);
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
            throw Error(R(163));
        }
        Be || t.flags & 512 && _u(t);
      } catch (d) {
        we(t, t.return, d);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, _ = n;
      break;
    }
    _ = t.return;
  }
}
function yp(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, _ = n;
      break;
    }
    _ = t.return;
  }
}
function vp(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Na(4, t);
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
            _u(t);
          } catch (l) {
            we(t, s, l);
          }
          break;
        case 5:
          var i = t.return;
          try {
            _u(t);
          } catch (l) {
            we(t, i, l);
          }
      }
    } catch (l) {
      we(t, t.return, l);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, _ = a;
      break;
    }
    _ = t.return;
  }
}
var AS = Math.ceil, na = un.ReactCurrentDispatcher, ed = un.ReactCurrentOwner, vt = un.ReactCurrentBatchConfig, Z = 0, Ae = null, Te = null, _e = 0, tt = 0, Lr = Un(0), Ne = 0, gs = null, cr = 0, Ra = 0, td = 0, Yo = null, Xe = null, nd = 0, to = 1 / 0, Kt = null, ra = !1, Fu = null, Rn = null, ti = !1, Cn = null, oa = 0, Xo = 0, Vu = null, Pi = -1, Di = 0;
function Ke() {
  return Z & 6 ? Ee() : Pi !== -1 ? Pi : Pi = Ee();
}
function An(e) {
  return e.mode & 1 ? Z & 2 && _e !== 0 ? _e & -_e : hS.transition !== null ? (Di === 0 && (Di = eg()), Di) : (e = ne, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ag(e.type)), e) : 1;
}
function Dt(e, t, n, r) {
  if (50 < Xo) throw Xo = 0, Vu = null, Error(R(185));
  Ds(e, n, r), (!(Z & 2) || e !== Ae) && (e === Ae && (!(Z & 2) && (Ra |= n), Ne === 4 && bn(e, _e)), Je(e, r), n === 1 && Z === 0 && !(t.mode & 1) && (to = Ee() + 500, Ta && Wn()));
}
function Je(e, t) {
  var n = e.callbackNode;
  h1(e, t);
  var r = Bi(e, e === Ae ? _e : 0);
  if (r === 0) n !== null && Pf(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Pf(n), t === 1) e.tag === 0 ? pS(xp.bind(null, e)) : Tg(xp.bind(null, e)), uS(function() {
      !(Z & 6) && Wn();
    }), n = null;
    else {
      switch (tg(r)) {
        case 1:
          n = Dc;
          break;
        case 4:
          n = Zm;
          break;
        case 16:
          n = zi;
          break;
        case 536870912:
          n = Jm;
          break;
        default:
          n = zi;
      }
      n = Cy(n, yy.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function yy(e, t) {
  if (Pi = -1, Di = 0, Z & 6) throw Error(R(327));
  var n = e.callbackNode;
  if (Hr() && e.callbackNode !== n) return null;
  var r = Bi(e, e === Ae ? _e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = sa(e, r);
  else {
    t = r;
    var o = Z;
    Z |= 2;
    var s = xy();
    (Ae !== e || _e !== t) && (Kt = null, to = Ee() + 500, or(e, t));
    do
      try {
        LS();
        break;
      } catch (a) {
        vy(e, a);
      }
    while (!0);
    Bc(), na.current = s, Z = o, Te !== null ? t = 0 : (Ae = null, _e = 0, t = Ne);
  }
  if (t !== 0) {
    if (t === 2 && (o = fu(e), o !== 0 && (r = o, t = zu(e, o))), t === 1) throw n = gs, or(e, 0), bn(e, r), Je(e, Ee()), n;
    if (t === 6) bn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !MS(o) && (t = sa(e, r), t === 2 && (s = fu(e), s !== 0 && (r = s, t = zu(e, s))), t === 1)) throw n = gs, or(e, 0), bn(e, r), Je(e, Ee()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          qn(e, Xe, Kt);
          break;
        case 3:
          if (bn(e, r), (r & 130023424) === r && (t = nd + 500 - Ee(), 10 < t)) {
            if (Bi(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Ke(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = wu(qn.bind(null, e, Xe, Kt), t);
            break;
          }
          qn(e, Xe, Kt);
          break;
        case 4:
          if (bn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Pt(r);
            s = 1 << i, i = t[i], i > o && (o = i), r &= ~s;
          }
          if (r = o, r = Ee() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * AS(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = wu(qn.bind(null, e, Xe, Kt), r);
            break;
          }
          qn(e, Xe, Kt);
          break;
        case 5:
          qn(e, Xe, Kt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Je(e, Ee()), e.callbackNode === n ? yy.bind(null, e) : null;
}
function zu(e, t) {
  var n = Yo;
  return e.current.memoizedState.isDehydrated && (or(e, t).flags |= 256), e = sa(e, t), e !== 2 && (t = Xe, Xe = n, t !== null && Bu(t)), e;
}
function Bu(e) {
  Xe === null ? Xe = e : Xe.push.apply(Xe, e);
}
function MS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], s = o.getSnapshot;
        o = o.value;
        try {
          if (!Nt(s(), o)) return !1;
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
  for (t &= ~td, t &= ~Ra, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Pt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function xp(e) {
  if (Z & 6) throw Error(R(327));
  Hr();
  var t = Bi(e, 0);
  if (!(t & 1)) return Je(e, Ee()), null;
  var n = sa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = fu(e);
    r !== 0 && (t = r, n = zu(e, r));
  }
  if (n === 1) throw n = gs, or(e, 0), bn(e, t), Je(e, Ee()), n;
  if (n === 6) throw Error(R(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, qn(e, Xe, Kt), Je(e, Ee()), null;
}
function rd(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    Z = n, Z === 0 && (to = Ee() + 500, Ta && Wn());
  }
}
function dr(e) {
  Cn !== null && Cn.tag === 0 && !(Z & 6) && Hr();
  var t = Z;
  Z |= 1;
  var n = vt.transition, r = ne;
  try {
    if (vt.transition = null, ne = 1, e) return e();
  } finally {
    ne = r, vt.transition = n, Z = t, !(Z & 6) && Wn();
  }
}
function od() {
  tt = Lr.current, ce(Lr);
}
function or(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, lS(n)), Te !== null) for (n = Te.return; n !== null; ) {
    var r = n;
    switch (Fc(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ki();
        break;
      case 3:
        Jr(), ce(qe), ce(Ue), Gc();
        break;
      case 5:
        Kc(r);
        break;
      case 4:
        Jr();
        break;
      case 13:
        ce(he);
        break;
      case 19:
        ce(he);
        break;
      case 10:
        $c(r.type._context);
        break;
      case 22:
      case 23:
        od();
    }
    n = n.return;
  }
  if (Ae = e, Te = e = Mn(e.current, null), _e = tt = t, Ne = 0, gs = null, td = Ra = cr = 0, Xe = Yo = null, tr !== null) {
    for (t = 0; t < tr.length; t++) if (n = tr[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, s = n.pending;
      if (s !== null) {
        var i = s.next;
        s.next = o, r.next = i;
      }
      n.pending = r;
    }
    tr = null;
  }
  return e;
}
function vy(e, t) {
  do {
    var n = Te;
    try {
      if (Bc(), Ci.current = ta, ea) {
        for (var r = ge.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        ea = !1;
      }
      if (ur = 0, Re = De = ge = null, Ko = !1, ps = 0, ed.current = null, n === null || n.return === null) {
        Ne = 1, gs = t, Te = null;
        break;
      }
      e: {
        var s = e, i = n.return, a = n, l = t;
        if (t = _e, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = a, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var y = ip(i);
          if (y !== null) {
            y.flags &= -257, ap(y, i, a, s, t), y.mode & 1 && sp(s, u, t), t = y, l = u;
            var w = t.updateQueue;
            if (w === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(l), t.updateQueue = g;
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              sp(s, u, t), sd();
              break e;
            }
            l = Error(R(426));
          }
        } else if (fe && a.mode & 1) {
          var S = ip(i);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), ap(S, i, a, s, t), Vc(eo(l, a));
            break e;
          }
        }
        s = l = eo(l, a), Ne !== 4 && (Ne = 2), Yo === null ? Yo = [s] : Yo.push(s), s = i;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var m = ty(s, l, t);
              Jf(s, m);
              break e;
            case 1:
              a = l;
              var h = s.type, v = s.stateNode;
              if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Rn === null || !Rn.has(v)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var b = ny(s, a, t);
                Jf(s, b);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Sy(n);
    } catch (k) {
      t = k, Te === n && n !== null && (Te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function xy() {
  var e = na.current;
  return na.current = ta, e === null ? ta : e;
}
function sd() {
  (Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4), Ae === null || !(cr & 268435455) && !(Ra & 268435455) || bn(Ae, _e);
}
function sa(e, t) {
  var n = Z;
  Z |= 2;
  var r = xy();
  (Ae !== e || _e !== t) && (Kt = null, or(e, t));
  do
    try {
      jS();
      break;
    } catch (o) {
      vy(e, o);
    }
  while (!0);
  if (Bc(), Z = n, na.current = r, Te !== null) throw Error(R(261));
  return Ae = null, _e = 0, Ne;
}
function jS() {
  for (; Te !== null; ) wy(Te);
}
function LS() {
  for (; Te !== null && !s1(); ) wy(Te);
}
function wy(e) {
  var t = ky(e.alternate, e, tt);
  e.memoizedProps = e.pendingProps, t === null ? Sy(e) : Te = t, ed.current = null;
}
function Sy(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = PS(n, t), n !== null) {
        n.flags &= 32767, Te = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ne = 6, Te = null;
        return;
      }
    } else if (n = TS(n, t, tt), n !== null) {
      Te = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Te = t;
      return;
    }
    Te = t = e;
  } while (t !== null);
  Ne === 0 && (Ne = 5);
}
function qn(e, t, n) {
  var r = ne, o = vt.transition;
  try {
    vt.transition = null, ne = 1, _S(e, t, n, r);
  } finally {
    vt.transition = o, ne = r;
  }
  return null;
}
function _S(e, t, n, r) {
  do
    Hr();
  while (Cn !== null);
  if (Z & 6) throw Error(R(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(R(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (m1(e, s), e === Ae && (Te = Ae = null, _e = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ti || (ti = !0, Cy(zi, function() {
    return Hr(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = vt.transition, vt.transition = null;
    var i = ne;
    ne = 1;
    var a = Z;
    Z |= 4, ed.current = null, NS(e, n), my(n, e), tS(vu), $i = !!yu, vu = yu = null, e.current = n, RS(n), i1(), Z = a, ne = i, vt.transition = s;
  } else e.current = n;
  if (ti && (ti = !1, Cn = e, oa = o), s = e.pendingLanes, s === 0 && (Rn = null), u1(n.stateNode), Je(e, Ee()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ra) throw ra = !1, e = Fu, Fu = null, e;
  return oa & 1 && e.tag !== 0 && Hr(), s = e.pendingLanes, s & 1 ? e === Vu ? Xo++ : (Xo = 0, Vu = e) : Xo = 0, Wn(), null;
}
function Hr() {
  if (Cn !== null) {
    var e = tg(oa), t = vt.transition, n = ne;
    try {
      if (vt.transition = null, ne = 16 > e ? 16 : e, Cn === null) var r = !1;
      else {
        if (e = Cn, Cn = null, oa = 0, Z & 6) throw Error(R(331));
        var o = Z;
        for (Z |= 4, _ = e.current; _ !== null; ) {
          var s = _, i = s.child;
          if (_.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (_ = u; _ !== null; ) {
                  var c = _;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Go(8, c, s);
                  }
                  var f = c.child;
                  if (f !== null) f.return = c, _ = f;
                  else for (; _ !== null; ) {
                    c = _;
                    var d = c.sibling, y = c.return;
                    if (fy(c), c === u) {
                      _ = null;
                      break;
                    }
                    if (d !== null) {
                      d.return = y, _ = d;
                      break;
                    }
                    _ = y;
                  }
                }
              }
              var w = s.alternate;
              if (w !== null) {
                var g = w.child;
                if (g !== null) {
                  w.child = null;
                  do {
                    var S = g.sibling;
                    g.sibling = null, g = S;
                  } while (g !== null);
                }
              }
              _ = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) i.return = s, _ = i;
          else e: for (; _ !== null; ) {
            if (s = _, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                Go(9, s, s.return);
            }
            var m = s.sibling;
            if (m !== null) {
              m.return = s.return, _ = m;
              break e;
            }
            _ = s.return;
          }
        }
        var h = e.current;
        for (_ = h; _ !== null; ) {
          i = _;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) v.return = i, _ = v;
          else e: for (i = h; _ !== null; ) {
            if (a = _, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  Na(9, a);
              }
            } catch (k) {
              we(a, a.return, k);
            }
            if (a === i) {
              _ = null;
              break e;
            }
            var b = a.sibling;
            if (b !== null) {
              b.return = a.return, _ = b;
              break e;
            }
            _ = a.return;
          }
        }
        if (Z = o, Wn(), Ft && typeof Ft.onPostCommitFiberRoot == "function") try {
          Ft.onPostCommitFiberRoot(Sa, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ne = n, vt.transition = t;
    }
  }
  return !1;
}
function wp(e, t, n) {
  t = eo(n, t), t = ty(e, t, 1), e = Nn(e, t, 1), t = Ke(), e !== null && (Ds(e, 1, t), Je(e, t));
}
function we(e, t, n) {
  if (e.tag === 3) wp(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      wp(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Rn === null || !Rn.has(r))) {
        e = eo(n, e), e = ny(t, e, 1), t = Nn(t, e, 1), e = Ke(), t !== null && (Ds(t, 1, e), Je(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function IS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ke(), e.pingedLanes |= e.suspendedLanes & n, Ae === e && (_e & n) === n && (Ne === 4 || Ne === 3 && (_e & 130023424) === _e && 500 > Ee() - nd ? or(e, 0) : td |= n), Je(e, t);
}
function by(e, t) {
  t === 0 && (e.mode & 1 ? (t = Hs, Hs <<= 1, !(Hs & 130023424) && (Hs = 4194304)) : t = 1);
  var n = Ke();
  e = rn(e, t), e !== null && (Ds(e, t, n), Je(e, n));
}
function OS(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), by(e, n);
}
function FS(e, t) {
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
      throw Error(R(314));
  }
  r !== null && r.delete(t), by(e, n);
}
var ky;
ky = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || qe.current) Qe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Qe = !1, ES(e, t, n);
    Qe = !!(e.flags & 131072);
  }
  else Qe = !1, fe && t.flags & 1048576 && Pg(t, Xi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ti(e, t), e = t.pendingProps;
      var o = Qr(t, Ue.current);
      Wr(t, n), o = Xc(null, t, r, e, o, n);
      var s = Qc();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ze(r) ? (s = !0, Gi(t)) : s = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Wc(t), o.updater = Da, t.stateNode = o, o._reactInternals = t, Pu(t, r, e, n), t = Ru(null, t, r, !0, s, n)) : (t.tag = 0, fe && s && Oc(t), He(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ti(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = zS(r), e = Ct(r, e), o) {
          case 0:
            t = Nu(null, t, r, e, n);
            break e;
          case 1:
            t = cp(null, t, r, e, n);
            break e;
          case 11:
            t = lp(null, t, r, e, n);
            break e;
          case 14:
            t = up(null, t, r, Ct(r.type, e), n);
            break e;
        }
        throw Error(R(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ct(r, o), Nu(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ct(r, o), cp(e, t, r, o, n);
    case 3:
      e: {
        if (iy(t), e === null) throw Error(R(387));
        r = t.pendingProps, s = t.memoizedState, o = s.element, jg(e, t), Zi(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          o = eo(Error(R(423)), t), t = dp(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = eo(Error(R(424)), t), t = dp(e, t, r, n, o);
          break e;
        } else for (rt = Dn(t.stateNode.containerInfo.firstChild), ot = t, fe = !0, Tt = null, n = Ag(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (qr(), r === o) {
            t = on(e, t, n);
            break e;
          }
          He(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Lg(t), e === null && Cu(t), r = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, i = o.children, xu(r, o) ? i = null : s !== null && xu(r, s) && (t.flags |= 32), sy(e, t), He(e, t, i, n), t.child;
    case 6:
      return e === null && Cu(t), null;
    case 13:
      return ay(e, t, n);
    case 4:
      return Hc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Zr(t, null, r, n) : He(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ct(r, o), lp(e, t, r, o, n);
    case 7:
      return He(e, t, t.pendingProps, n), t.child;
    case 8:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, s = t.memoizedProps, i = o.value, se(Qi, r._currentValue), r._currentValue = i, s !== null) if (Nt(s.value, i)) {
          if (s.children === o.children && !qe.current) {
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
                  var u = s.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Eu(
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
            if (i = s.return, i === null) throw Error(R(341));
            i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Eu(i, n, t), i = s.sibling;
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
        He(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Wr(t, n), o = xt(o), r = r(o), t.flags |= 1, He(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Ct(r, t.pendingProps), o = Ct(r.type, o), up(e, t, r, o, n);
    case 15:
      return ry(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ct(r, o), Ti(e, t), t.tag = 1, Ze(r) ? (e = !0, Gi(t)) : e = !1, Wr(t, n), ey(t, r, o), Pu(t, r, o, n), Ru(null, t, r, !0, e, n);
    case 19:
      return ly(e, t, n);
    case 22:
      return oy(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function Cy(e, t) {
  return qm(e, t);
}
function VS(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function yt(e, t, n, r) {
  return new VS(e, t, n, r);
}
function id(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function zS(e) {
  if (typeof e == "function") return id(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ec) return 11;
    if (e === Tc) return 14;
  }
  return 2;
}
function Mn(e, t) {
  var n = e.alternate;
  return n === null ? (n = yt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ni(e, t, n, r, o, s) {
  var i = 2;
  if (r = e, typeof e == "function") id(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Cr:
      return sr(n.children, o, s, t);
    case Cc:
      i = 8, o |= 8;
      break;
    case ql:
      return e = yt(12, n, t, o | 2), e.elementType = ql, e.lanes = s, e;
    case Zl:
      return e = yt(13, n, t, o), e.elementType = Zl, e.lanes = s, e;
    case Jl:
      return e = yt(19, n, t, o), e.elementType = Jl, e.lanes = s, e;
    case Lm:
      return Aa(n, o, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Mm:
          i = 10;
          break e;
        case jm:
          i = 9;
          break e;
        case Ec:
          i = 11;
          break e;
        case Tc:
          i = 14;
          break e;
        case vn:
          i = 16, r = null;
          break e;
      }
      throw Error(R(130, e == null ? e : typeof e, ""));
  }
  return t = yt(i, n, t, o), t.elementType = e, t.type = r, t.lanes = s, t;
}
function sr(e, t, n, r) {
  return e = yt(7, e, r, t), e.lanes = n, e;
}
function Aa(e, t, n, r) {
  return e = yt(22, e, r, t), e.elementType = Lm, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function kl(e, t, n) {
  return e = yt(6, e, null, t), e.lanes = n, e;
}
function Cl(e, t, n) {
  return t = yt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function BS(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ol(0), this.expirationTimes = ol(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ol(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function ad(e, t, n, r, o, s, i, a, l) {
  return e = new BS(e, t, n, a, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = yt(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Wc(s), e;
}
function $S(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: kr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Ey(e) {
  if (!e) return _n;
  e = e._reactInternals;
  e: {
    if (yr(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ze(n)) return Eg(e, n, t);
  }
  return t;
}
function Ty(e, t, n, r, o, s, i, a, l) {
  return e = ad(n, r, !0, e, o, s, i, a, l), e.context = Ey(null), n = e.current, r = Ke(), o = An(n), s = qt(r, o), s.callback = t ?? null, Nn(n, s, o), e.current.lanes = o, Ds(e, o, r), Je(e, r), e;
}
function Ma(e, t, n, r) {
  var o = t.current, s = Ke(), i = An(o);
  return n = Ey(n), t.context === null ? t.context = n : t.pendingContext = n, t = qt(s, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Nn(o, t, i), e !== null && (Dt(e, o, i, s), ki(e, o, i)), i;
}
function ia(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Sp(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ld(e, t) {
  Sp(e, t), (e = e.alternate) && Sp(e, t);
}
function US() {
  return null;
}
var Py = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ud(e) {
  this._internalRoot = e;
}
ja.prototype.render = ud.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Ma(e, t, null, null);
};
ja.prototype.unmount = ud.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    dr(function() {
      Ma(null, e, null, null);
    }), t[nn] = null;
  }
};
function ja(e) {
  this._internalRoot = e;
}
ja.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = og();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Sn.length && t !== 0 && t < Sn[n].priority; n++) ;
    Sn.splice(n, 0, e), n === 0 && ig(e);
  }
};
function cd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function La(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function bp() {
}
function WS(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var u = ia(i);
        s.call(u);
      };
    }
    var i = Ty(t, r, e, 0, null, !1, !1, "", bp);
    return e._reactRootContainer = i, e[nn] = i.current, ls(e.nodeType === 8 ? e.parentNode : e), dr(), i;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = ia(l);
      a.call(u);
    };
  }
  var l = ad(e, 0, !1, null, null, !1, !1, "", bp);
  return e._reactRootContainer = l, e[nn] = l.current, ls(e.nodeType === 8 ? e.parentNode : e), dr(function() {
    Ma(t, l, n, r);
  }), l;
}
function _a(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = ia(i);
        a.call(l);
      };
    }
    Ma(t, i, e, o);
  } else i = WS(n, t, e, o, r);
  return ia(i);
}
ng = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _o(t.pendingLanes);
        n !== 0 && (Nc(t, n | 1), Je(t, Ee()), !(Z & 6) && (to = Ee() + 500, Wn()));
      }
      break;
    case 13:
      dr(function() {
        var r = rn(e, 1);
        if (r !== null) {
          var o = Ke();
          Dt(r, e, 1, o);
        }
      }), ld(e, 1);
  }
};
Rc = function(e) {
  if (e.tag === 13) {
    var t = rn(e, 134217728);
    if (t !== null) {
      var n = Ke();
      Dt(t, e, 134217728, n);
    }
    ld(e, 134217728);
  }
};
rg = function(e) {
  if (e.tag === 13) {
    var t = An(e), n = rn(e, t);
    if (n !== null) {
      var r = Ke();
      Dt(n, e, t, r);
    }
    ld(e, t);
  }
};
og = function() {
  return ne;
};
sg = function(e, t) {
  var n = ne;
  try {
    return ne = e, t();
  } finally {
    ne = n;
  }
};
uu = function(e, t, n) {
  switch (t) {
    case "input":
      if (nu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ea(r);
            if (!o) throw Error(R(90));
            Im(r), nu(r, o);
          }
        }
      }
      break;
    case "textarea":
      Fm(e, n);
      break;
    case "select":
      t = n.value, t != null && zr(e, !!n.multiple, t, !1);
  }
};
Hm = rd;
Km = dr;
var HS = { usingClientEntryPoint: !1, Events: [Rs, Dr, Ea, Um, Wm, rd] }, No = { findFiberByHostInstance: er, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, KS = { bundleType: No.bundleType, version: No.version, rendererPackageName: No.rendererPackageName, rendererConfig: No.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: un.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Xm(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: No.findFiberByHostInstance || US, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ni.isDisabled && ni.supportsFiber) try {
    Sa = ni.inject(KS), Ft = ni;
  } catch {
  }
}
ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = HS;
ut.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!cd(t)) throw Error(R(200));
  return $S(e, t, null, n);
};
ut.createRoot = function(e, t) {
  if (!cd(e)) throw Error(R(299));
  var n = !1, r = "", o = Py;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = ad(e, 1, !1, null, null, n, !1, r, o), e[nn] = t.current, ls(e.nodeType === 8 ? e.parentNode : e), new ud(t);
};
ut.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","), Error(R(268, e)));
  return e = Xm(t), e = e === null ? null : e.stateNode, e;
};
ut.flushSync = function(e) {
  return dr(e);
};
ut.hydrate = function(e, t, n) {
  if (!La(t)) throw Error(R(200));
  return _a(null, e, t, !0, n);
};
ut.hydrateRoot = function(e, t, n) {
  if (!cd(e)) throw Error(R(405));
  var r = n != null && n.hydratedSources || null, o = !1, s = "", i = Py;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Ty(t, null, e, 1, n ?? null, o, !1, s, i), e[nn] = t.current, ls(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new ja(t);
};
ut.render = function(e, t, n) {
  if (!La(t)) throw Error(R(200));
  return _a(null, e, t, !1, n);
};
ut.unmountComponentAtNode = function(e) {
  if (!La(e)) throw Error(R(40));
  return e._reactRootContainer ? (dr(function() {
    _a(null, null, e, !1, function() {
      e._reactRootContainer = null, e[nn] = null;
    });
  }), !0) : !1;
};
ut.unstable_batchedUpdates = rd;
ut.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!La(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return _a(e, t, n, !1, r);
};
ut.version = "18.3.1-next-f1338f8080-20240426";
function Dy() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dy);
    } catch (e) {
      console.error(e);
    }
}
Dy(), Dm.exports = ut;
var fo = Dm.exports;
const GS = /* @__PURE__ */ mm(fo);
var Ia, kp = fo;
Ia = kp.createRoot, kp.hydrateRoot;
function Ny(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ny(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function YS() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ny(e)) && (r && (r += " "), r += t);
  return r;
}
const dd = "-", XS = (e) => {
  const t = qS(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(dd);
      return a[0] === "" && a.length !== 1 && a.shift(), Ry(a, t) || QS(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const l = n[i] || [];
      return a && r[i] ? [...l, ...r[i]] : l;
    }
  };
}, Ry = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Ry(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(dd);
  return (i = t.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : i.classGroupId;
}, Cp = /^\[(.+)\]$/, QS = (e) => {
  if (Cp.test(e)) {
    const t = Cp.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, qS = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return JS(Object.entries(e.classGroups), n).forEach(([s, i]) => {
    $u(i, r, s, t);
  }), r;
}, $u = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Ep(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (ZS(o)) {
        $u(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      $u(i, Ep(t, s), n, r);
    });
  });
}, Ep = (e, t) => {
  let n = e;
  return t.split(dd).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, ZS = (e) => e.isThemeGetter, JS = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a])) : s);
  return [n, o];
}) : e, eb = (e) => {
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
}, Ay = "!", tb = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], s = t.length, i = (a) => {
    const l = [];
    let u = 0, c = 0, f;
    for (let S = 0; S < a.length; S++) {
      let m = a[S];
      if (u === 0) {
        if (m === o && (r || a.slice(S, S + s) === t)) {
          l.push(a.slice(c, S)), c = S + s;
          continue;
        }
        if (m === "/") {
          f = S;
          continue;
        }
      }
      m === "[" ? u++ : m === "]" && u--;
    }
    const d = l.length === 0 ? a : a.substring(c), y = d.startsWith(Ay), w = y ? d.substring(1) : d, g = f && f > c ? f - c : void 0;
    return {
      modifiers: l,
      hasImportantModifier: y,
      baseClassName: w,
      maybePostfixModifierPosition: g
    };
  };
  return n ? (a) => n({
    className: a,
    parseClassName: i
  }) : i;
}, nb = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, rb = (e) => ({
  cache: eb(e.cacheSize),
  parseClassName: tb(e),
  ...XS(e)
}), ob = /\s+/, sb = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, s = [], i = e.trim().split(ob);
  let a = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const u = i[l], {
      modifiers: c,
      hasImportantModifier: f,
      baseClassName: d,
      maybePostfixModifierPosition: y
    } = n(u);
    let w = !!y, g = r(w ? d.substring(0, y) : d);
    if (!g) {
      if (!w) {
        a = u + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (g = r(d), !g) {
        a = u + (a.length > 0 ? " " + a : a);
        continue;
      }
      w = !1;
    }
    const S = nb(c).join(":"), m = f ? S + Ay : S, h = m + g;
    if (s.includes(h))
      continue;
    s.push(h);
    const v = o(g, w);
    for (let b = 0; b < v.length; ++b) {
      const k = v[b];
      s.push(m + k);
    }
    a = u + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function ib() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = My(t)) && (r && (r += " "), r += n);
  return r;
}
const My = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = My(e[r])) && (n && (n += " "), n += t);
  return n;
};
function ab(e, ...t) {
  let n, r, o, s = i;
  function i(l) {
    const u = t.reduce((c, f) => f(c), e());
    return n = rb(u), r = n.cache.get, o = n.cache.set, s = a, a(l);
  }
  function a(l) {
    const u = r(l);
    if (u)
      return u;
    const c = sb(l, n);
    return o(l, c), c;
  }
  return function() {
    return s(ib.apply(null, arguments));
  };
}
const le = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, jy = /^\[(?:([a-z-]+):)?(.+)\]$/i, lb = /^\d+\/\d+$/, ub = /* @__PURE__ */ new Set(["px", "full", "screen"]), cb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, db = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, fb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, pb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, hb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ht = (e) => Kr(e) || ub.has(e) || lb.test(e), pn = (e) => po(e, "length", bb), Kr = (e) => !!e && !Number.isNaN(Number(e)), El = (e) => po(e, "number", Kr), Ro = (e) => !!e && Number.isInteger(Number(e)), mb = (e) => e.endsWith("%") && Kr(e.slice(0, -1)), K = (e) => jy.test(e), hn = (e) => cb.test(e), gb = /* @__PURE__ */ new Set(["length", "size", "percentage"]), yb = (e) => po(e, gb, Ly), vb = (e) => po(e, "position", Ly), xb = /* @__PURE__ */ new Set(["image", "url"]), wb = (e) => po(e, xb, Cb), Sb = (e) => po(e, "", kb), Ao = () => !0, po = (e, t, n) => {
  const r = jy.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, bb = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  db.test(e) && !fb.test(e)
), Ly = () => !1, kb = (e) => pb.test(e), Cb = (e) => hb.test(e), Eb = () => {
  const e = le("colors"), t = le("spacing"), n = le("blur"), r = le("brightness"), o = le("borderColor"), s = le("borderRadius"), i = le("borderSpacing"), a = le("borderWidth"), l = le("contrast"), u = le("grayscale"), c = le("hueRotate"), f = le("invert"), d = le("gap"), y = le("gradientColorStops"), w = le("gradientColorStopPositions"), g = le("inset"), S = le("margin"), m = le("opacity"), h = le("padding"), v = le("saturate"), b = le("scale"), k = le("sepia"), T = le("skew"), C = le("space"), E = le("translate"), D = () => ["auto", "contain", "none"], N = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", K, t], j = () => [K, t], V = () => ["", Ht, pn], z = () => ["auto", Kr, K], Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], O = () => ["solid", "dashed", "dotted", "double", "none"], F = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], M = () => ["", "0", K], I = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], H = () => [Kr, K];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Ao],
      spacing: [Ht, pn],
      blur: ["none", "", hn, K],
      brightness: H(),
      borderColor: [e],
      borderRadius: ["none", "", "full", hn, K],
      borderSpacing: j(),
      borderWidth: V(),
      contrast: H(),
      grayscale: M(),
      hueRotate: H(),
      invert: M(),
      gap: j(),
      gradientColorStops: [e],
      gradientColorStopPositions: [mb, pn],
      inset: A(),
      margin: A(),
      opacity: H(),
      padding: j(),
      saturate: H(),
      scale: H(),
      sepia: M(),
      skew: H(),
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
        columns: [hn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": I()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": I()
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
        object: [...Y(), K]
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
        overscroll: D()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": D()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": D()
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
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
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
        z: ["auto", Ro, K]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: A()
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
        order: ["first", "last", "none", Ro, K]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Ao]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ro, K]
        }, K]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Ao]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ro, K]
        }, K]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
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
          screen: [hn]
        }, hn]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", El]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ao]
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
        "line-clamp": ["none", Kr, El]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ht, K]
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
        decoration: [...O(), "wavy"]
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
        "underline-offset": ["auto", Ht, K]
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
        bg: [...Y(), vb]
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
        bg: ["auto", "cover", "contain", yb]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, wb]
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
        from: [y]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [y]
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
        border: [...O(), "hidden"]
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
        divide: O()
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
        outline: ["", ...O()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ht, K]
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
        shadow: ["", "inner", "none", hn, Sb]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ao]
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
        "drop-shadow": ["", "none", hn, K]
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
        "hue-rotate": [c]
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
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [c]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", K]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: H()
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
        delay: H()
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
        rotate: [Ro, K]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [E]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [E]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [T]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [T]
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
        stroke: [Ht, pn, El]
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
}, Tb = /* @__PURE__ */ ab(Eb);
function Se(...e) {
  return Tb(YS(e));
}
function fd({ className: e, ...t }) {
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
function _y({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: Se("px-6", e),
      ...t
    }
  );
}
function Pb({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: Se("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
const Zt = x.forwardRef(
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
Zt.displayName = "Button";
function Tp(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Q(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Db(e, t) {
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
function ho(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = x.createContext(i), l = n.length;
    n = [...n, i];
    const u = (f) => {
      var m;
      const { scope: d, children: y, ...w } = f, g = ((m = d == null ? void 0 : d[e]) == null ? void 0 : m[l]) || a, S = x.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ p.jsx(g.Provider, { value: S, children: y });
    };
    u.displayName = s + "Provider";
    function c(f, d) {
      var g;
      const y = ((g = d == null ? void 0 : d[e]) == null ? void 0 : g[l]) || a, w = x.useContext(y);
      if (w) return w;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [u, c];
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
  return o.scopeName = e, [r, Nb(o, ...t)];
}
function Nb(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = r.reduce((a, { useScope: l, scopeName: u }) => {
        const f = l(s)[`__scope${u}`];
        return { ...a, ...f };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Pp(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Iy(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = Pp(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : Pp(e[o], null);
        }
      };
  };
}
function be(...e) {
  return x.useCallback(Iy(...e), e);
}
// @__NO_SIDE_EFFECTS__
function ys(e) {
  const t = /* @__PURE__ */ Rb(e), n = x.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = x.Children.toArray(s), l = a.find(Mb);
    if (l) {
      const u = l.props.children, c = a.map((f) => f === l ? x.Children.count(u) > 1 ? x.Children.only(null) : x.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: x.isValidElement(u) ? x.cloneElement(u, void 0, c) : null });
    }
    return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Rb(e) {
  const t = x.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (x.isValidElement(o)) {
      const i = Lb(o), a = jb(s, o.props);
      return o.type !== x.Fragment && (a.ref = r ? Iy(r, i) : i), x.cloneElement(o, a);
    }
    return x.Children.count(o) > 1 ? x.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Ab = Symbol("radix.slottable");
function Mb(e) {
  return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ab;
}
function jb(e, t) {
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
function Lb(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Oy(e) {
  const t = e + "CollectionProvider", [n, r] = ho(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (g) => {
    const { scope: S, children: m } = g, h = q.useRef(null), v = q.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p.jsx(o, { scope: S, itemMap: v, collectionRef: h, children: m });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ ys(a), u = q.forwardRef(
    (g, S) => {
      const { scope: m, children: h } = g, v = s(a, m), b = be(S, v.collectionRef);
      return /* @__PURE__ */ p.jsx(l, { ref: b, children: h });
    }
  );
  u.displayName = a;
  const c = e + "CollectionItemSlot", f = "data-radix-collection-item", d = /* @__PURE__ */ ys(c), y = q.forwardRef(
    (g, S) => {
      const { scope: m, children: h, ...v } = g, b = q.useRef(null), k = be(S, b), T = s(c, m);
      return q.useEffect(() => (T.itemMap.set(b, { ref: b, ...v }), () => void T.itemMap.delete(b))), /* @__PURE__ */ p.jsx(d, { [f]: "", ref: k, children: h });
    }
  );
  y.displayName = c;
  function w(g) {
    const S = s(e + "CollectionConsumer", g);
    return q.useCallback(() => {
      const h = S.collectionRef.current;
      if (!h) return [];
      const v = Array.from(h.querySelectorAll(`[${f}]`));
      return Array.from(S.itemMap.values()).sort(
        (T, C) => v.indexOf(T.ref.current) - v.indexOf(C.ref.current)
      );
    }, [S.collectionRef, S.itemMap]);
  }
  return [
    { Provider: i, Slot: u, ItemSlot: y },
    w,
    r
  ];
}
var _b = x.createContext(void 0);
function pd(e) {
  const t = x.useContext(_b);
  return e || t || "ltr";
}
var Ib = [
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
], J = Ib.reduce((e, t) => {
  const n = /* @__PURE__ */ ys(`Primitive.${t}`), r = x.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Ob(e, t) {
  e && fo.flushSync(() => e.dispatchEvent(t));
}
function In(e) {
  const t = x.useRef(e);
  return x.useEffect(() => {
    t.current = e;
  }), x.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Fb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = In(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Vb = "DismissableLayer", Uu = "dismissableLayer.update", zb = "dismissableLayer.pointerDownOutside", Bb = "dismissableLayer.focusOutside", Dp, Fy = x.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), hd = x.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...l
    } = e, u = x.useContext(Fy), [c, f] = x.useState(null), d = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, y] = x.useState({}), w = be(t, (C) => f(C)), g = Array.from(u.layers), [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), m = g.indexOf(S), h = c ? g.indexOf(c) : -1, v = u.layersWithOutsidePointerEventsDisabled.size > 0, b = h >= m, k = Wb((C) => {
      const E = C.target, D = [...u.branches].some((N) => N.contains(E));
      !b || D || (o == null || o(C), i == null || i(C), C.defaultPrevented || a == null || a());
    }, d), T = Hb((C) => {
      const E = C.target;
      [...u.branches].some((N) => N.contains(E)) || (s == null || s(C), i == null || i(C), C.defaultPrevented || a == null || a());
    }, d);
    return Fb((C) => {
      h === u.layers.size - 1 && (r == null || r(C), !C.defaultPrevented && a && (C.preventDefault(), a()));
    }, d), x.useEffect(() => {
      if (c)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Dp = d.body.style.pointerEvents, d.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), Np(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = Dp);
        };
    }, [c, d, n, u]), x.useEffect(() => () => {
      c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), Np());
    }, [c, u]), x.useEffect(() => {
      const C = () => y({});
      return document.addEventListener(Uu, C), () => document.removeEventListener(Uu, C);
    }, []), /* @__PURE__ */ p.jsx(
      J.div,
      {
        ...l,
        ref: w,
        style: {
          pointerEvents: v ? b ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Q(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: Q(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: Q(
          e.onPointerDownCapture,
          k.onPointerDownCapture
        )
      }
    );
  }
);
hd.displayName = Vb;
var $b = "DismissableLayerBranch", Ub = x.forwardRef((e, t) => {
  const n = x.useContext(Fy), r = x.useRef(null), o = be(t, r);
  return x.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ p.jsx(J.div, { ...e, ref: o });
});
Ub.displayName = $b;
function Wb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = In(e), r = x.useRef(!1), o = x.useRef(() => {
  });
  return x.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          Vy(
            zb,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: a };
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
function Hb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = In(e), r = x.useRef(!1);
  return x.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && Vy(Bb, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Np() {
  const e = new CustomEvent(Uu);
  document.dispatchEvent(e);
}
function Vy(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ob(o, s) : o.dispatchEvent(s);
}
var Tl = 0;
function zy() {
  x.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Rp()), document.body.insertAdjacentElement("beforeend", e[1] ?? Rp()), Tl++, () => {
      Tl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Tl--;
    };
  }, []);
}
function Rp() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Pl = "focusScope.autoFocusOnMount", Dl = "focusScope.autoFocusOnUnmount", Ap = { bubbles: !1, cancelable: !0 }, Kb = "FocusScope", md = x.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = x.useState(null), u = In(o), c = In(s), f = x.useRef(null), d = be(t, (g) => l(g)), y = x.useRef({
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
      let g = function(v) {
        if (y.paused || !a) return;
        const b = v.target;
        a.contains(b) ? f.current = b : gn(f.current, { select: !0 });
      }, S = function(v) {
        if (y.paused || !a) return;
        const b = v.relatedTarget;
        b !== null && (a.contains(b) || gn(f.current, { select: !0 }));
      }, m = function(v) {
        if (document.activeElement === document.body)
          for (const k of v)
            k.removedNodes.length > 0 && gn(a);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", S);
      const h = new MutationObserver(m);
      return a && h.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", S), h.disconnect();
      };
    }
  }, [r, a, y.paused]), x.useEffect(() => {
    if (a) {
      jp.add(y);
      const g = document.activeElement;
      if (!a.contains(g)) {
        const m = new CustomEvent(Pl, Ap);
        a.addEventListener(Pl, u), a.dispatchEvent(m), m.defaultPrevented || (Gb(Zb(By(a)), { select: !0 }), document.activeElement === g && gn(a));
      }
      return () => {
        a.removeEventListener(Pl, u), setTimeout(() => {
          const m = new CustomEvent(Dl, Ap);
          a.addEventListener(Dl, c), a.dispatchEvent(m), m.defaultPrevented || gn(g ?? document.body, { select: !0 }), a.removeEventListener(Dl, c), jp.remove(y);
        }, 0);
      };
    }
  }, [a, u, c, y]);
  const w = x.useCallback(
    (g) => {
      if (!n && !r || y.paused) return;
      const S = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, m = document.activeElement;
      if (S && m) {
        const h = g.currentTarget, [v, b] = Yb(h);
        v && b ? !g.shiftKey && m === b ? (g.preventDefault(), n && gn(v, { select: !0 })) : g.shiftKey && m === v && (g.preventDefault(), n && gn(b, { select: !0 })) : m === h && g.preventDefault();
      }
    },
    [n, r, y.paused]
  );
  return /* @__PURE__ */ p.jsx(J.div, { tabIndex: -1, ...i, ref: d, onKeyDown: w });
});
md.displayName = Kb;
function Gb(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (gn(r, { select: t }), document.activeElement !== n) return;
}
function Yb(e) {
  const t = By(e), n = Mp(t, e), r = Mp(t.reverse(), e);
  return [n, r];
}
function By(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Mp(e, t) {
  for (const n of e)
    if (!Xb(n, { upTo: t })) return n;
}
function Xb(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Qb(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function gn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Qb(e) && t && e.select();
  }
}
var jp = qb();
function qb() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Lp(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Lp(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Lp(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Zb(e) {
  return e.filter((t) => t.tagName !== "A");
}
var We = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {
}, Jb = Tm[" useId ".trim().toString()] || (() => {
}), ek = 0;
function jn(e) {
  const [t, n] = x.useState(Jb());
  return We(() => {
    n((r) => r ?? String(ek++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const tk = ["top", "right", "bottom", "left"], On = Math.min, nt = Math.max, aa = Math.round, ri = Math.floor, zt = (e) => ({
  x: e,
  y: e
}), nk = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, rk = {
  start: "end",
  end: "start"
};
function Wu(e, t, n) {
  return nt(e, On(t, n));
}
function sn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function an(e) {
  return e.split("-")[0];
}
function mo(e) {
  return e.split("-")[1];
}
function gd(e) {
  return e === "x" ? "y" : "x";
}
function yd(e) {
  return e === "y" ? "height" : "width";
}
const ok = /* @__PURE__ */ new Set(["top", "bottom"]);
function Ot(e) {
  return ok.has(an(e)) ? "y" : "x";
}
function vd(e) {
  return gd(Ot(e));
}
function sk(e, t, n) {
  n === void 0 && (n = !1);
  const r = mo(e), o = vd(e), s = yd(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = la(i)), [i, la(i)];
}
function ik(e) {
  const t = la(e);
  return [Hu(e), t, Hu(t)];
}
function Hu(e) {
  return e.replace(/start|end/g, (t) => rk[t]);
}
const _p = ["left", "right"], Ip = ["right", "left"], ak = ["top", "bottom"], lk = ["bottom", "top"];
function uk(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Ip : _p : t ? _p : Ip;
    case "left":
    case "right":
      return t ? ak : lk;
    default:
      return [];
  }
}
function ck(e, t, n, r) {
  const o = mo(e);
  let s = uk(an(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Hu)))), s;
}
function la(e) {
  return e.replace(/left|right|bottom|top/g, (t) => nk[t]);
}
function dk(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function $y(e) {
  return typeof e != "number" ? dk(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ua(e) {
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
function Op(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = Ot(t), i = vd(t), a = yd(i), l = an(t), u = s === "y", c = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, d = r[a] / 2 - o[a] / 2;
  let y;
  switch (l) {
    case "top":
      y = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      y = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      y = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      y = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      y = {
        x: r.x,
        y: r.y
      };
  }
  switch (mo(t)) {
    case "start":
      y[i] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      y[i] += d * (n && u ? -1 : 1);
      break;
  }
  return y;
}
const fk = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, a = s.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: f
  } = Op(u, r, l), d = r, y = {}, w = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: S,
      fn: m
    } = a[g], {
      x: h,
      y: v,
      data: b,
      reset: k
    } = await m({
      x: c,
      y: f,
      initialPlacement: r,
      placement: d,
      strategy: o,
      middlewareData: y,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = h ?? c, f = v ?? f, y = {
      ...y,
      [S]: {
        ...y[S],
        ...b
      }
    }, k && w <= 50 && (w++, typeof k == "object" && (k.placement && (d = k.placement), k.rects && (u = k.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: c,
      y: f
    } = Op(u, d, l)), g = -1);
  }
  return {
    x: c,
    y: f,
    placement: d,
    strategy: o,
    middlewareData: y
  };
};
async function vs(e, t) {
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
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: f = "floating",
    altBoundary: d = !1,
    padding: y = 0
  } = sn(t, e), w = $y(y), S = a[d ? f === "floating" ? "reference" : "floating" : f], m = ua(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(S))) == null || n ? S : S.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), h = f === "floating" ? {
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
  }, k = ua(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const pk = (e) => ({
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
      element: u,
      padding: c = 0
    } = sn(e, t) || {};
    if (u == null)
      return {};
    const f = $y(c), d = {
      x: n,
      y: r
    }, y = vd(o), w = yd(y), g = await i.getDimensions(u), S = y === "y", m = S ? "top" : "left", h = S ? "bottom" : "right", v = S ? "clientHeight" : "clientWidth", b = s.reference[w] + s.reference[y] - d[y] - s.floating[w], k = d[y] - s.reference[y], T = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let C = T ? T[v] : 0;
    (!C || !await (i.isElement == null ? void 0 : i.isElement(T))) && (C = a.floating[v] || s.floating[w]);
    const E = b / 2 - k / 2, D = C / 2 - g[w] / 2 - 1, N = On(f[m], D), A = On(f[h], D), j = N, V = C - g[w] - A, z = C / 2 - g[w] / 2 + E, Y = Wu(j, z, V), O = !l.arrow && mo(o) != null && z !== Y && s.reference[w] / 2 - (z < j ? N : A) - g[w] / 2 < 0, F = O ? z < j ? z - j : z - V : 0;
    return {
      [y]: d[y] + F,
      data: {
        [y]: Y,
        centerOffset: z - Y - F,
        ...O && {
          alignmentOffset: F
        }
      },
      reset: O
    };
  }
}), hk = function(e) {
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
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: f = !0,
        fallbackPlacements: d,
        fallbackStrategy: y = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: g = !0,
        ...S
      } = sn(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const m = an(o), h = Ot(a), v = an(a) === a, b = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = d || (v || !g ? [la(a)] : ik(a)), T = w !== "none";
      !d && T && k.push(...ck(a, g, w, b));
      const C = [a, ...k], E = await vs(t, S), D = [];
      let N = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (c && D.push(E[m]), f) {
        const z = sk(o, i, b);
        D.push(E[z[0]], E[z[1]]);
      }
      if (N = [...N, {
        placement: o,
        overflows: D
      }], !D.every((z) => z <= 0)) {
        var A, j;
        const z = (((A = s.flip) == null ? void 0 : A.index) || 0) + 1, Y = C[z];
        if (Y && (!(f === "alignment" ? h !== Ot(Y) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        N.every((P) => Ot(P.placement) === h ? P.overflows[0] > 0 : !0)))
          return {
            data: {
              index: z,
              overflows: N
            },
            reset: {
              placement: Y
            }
          };
        let O = (j = N.filter((F) => F.overflows[0] <= 0).sort((F, P) => F.overflows[1] - P.overflows[1])[0]) == null ? void 0 : j.placement;
        if (!O)
          switch (y) {
            case "bestFit": {
              var V;
              const F = (V = N.filter((P) => {
                if (T) {
                  const M = Ot(P.placement);
                  return M === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((M) => M > 0).reduce((M, I) => M + I, 0)]).sort((P, M) => P[1] - M[1])[0]) == null ? void 0 : V[0];
              F && (O = F);
              break;
            }
            case "initialPlacement":
              O = a;
              break;
          }
        if (o !== O)
          return {
            reset: {
              placement: O
            }
          };
      }
      return {};
    }
  };
};
function Fp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Vp(e) {
  return tk.some((t) => e[t] >= 0);
}
const mk = function(e) {
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
          const s = await vs(t, {
            ...o,
            elementContext: "reference"
          }), i = Fp(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Vp(i)
            }
          };
        }
        case "escaped": {
          const s = await vs(t, {
            ...o,
            altBoundary: !0
          }), i = Fp(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Vp(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Uy = /* @__PURE__ */ new Set(["left", "top"]);
async function gk(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = an(n), a = mo(n), l = Ot(n) === "y", u = Uy.has(i) ? -1 : 1, c = s && l ? -1 : 1, f = sn(t, e);
  let {
    mainAxis: d,
    crossAxis: y,
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
  return a && typeof w == "number" && (y = a === "end" ? w * -1 : w), l ? {
    x: y * c,
    y: d * u
  } : {
    x: d * u,
    y: y * c
  };
}
const yk = function(e) {
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
      } = t, l = await gk(t, e);
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
}, vk = function(e) {
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
      } = sn(e, t), u = {
        x: n,
        y: r
      }, c = await vs(t, l), f = Ot(an(o)), d = gd(f);
      let y = u[d], w = u[f];
      if (s) {
        const S = d === "y" ? "top" : "left", m = d === "y" ? "bottom" : "right", h = y + c[S], v = y - c[m];
        y = Wu(h, y, v);
      }
      if (i) {
        const S = f === "y" ? "top" : "left", m = f === "y" ? "bottom" : "right", h = w + c[S], v = w - c[m];
        w = Wu(h, w, v);
      }
      const g = a.fn({
        ...t,
        [d]: y,
        [f]: w
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r,
          enabled: {
            [d]: s,
            [f]: i
          }
        }
      };
    }
  };
}, xk = function(e) {
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
        crossAxis: u = !0
      } = sn(e, t), c = {
        x: n,
        y: r
      }, f = Ot(o), d = gd(f);
      let y = c[d], w = c[f];
      const g = sn(a, t), S = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const v = d === "y" ? "height" : "width", b = s.reference[d] - s.floating[v] + S.mainAxis, k = s.reference[d] + s.reference[v] - S.mainAxis;
        y < b ? y = b : y > k && (y = k);
      }
      if (u) {
        var m, h;
        const v = d === "y" ? "width" : "height", b = Uy.has(an(o)), k = s.reference[f] - s.floating[v] + (b && ((m = i.offset) == null ? void 0 : m[f]) || 0) + (b ? 0 : S.crossAxis), T = s.reference[f] + s.reference[v] + (b ? 0 : ((h = i.offset) == null ? void 0 : h[f]) || 0) - (b ? S.crossAxis : 0);
        w < k ? w = k : w > T && (w = T);
      }
      return {
        [d]: y,
        [f]: w
      };
    }
  };
}, wk = function(e) {
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
        ...u
      } = sn(e, t), c = await vs(t, u), f = an(o), d = mo(o), y = Ot(o) === "y", {
        width: w,
        height: g
      } = s.floating;
      let S, m;
      f === "top" || f === "bottom" ? (S = f, m = d === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (m = f, S = d === "end" ? "top" : "bottom");
      const h = g - c.top - c.bottom, v = w - c.left - c.right, b = On(g - c[S], h), k = On(w - c[m], v), T = !t.middlewareData.shift;
      let C = b, E = k;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (E = v), (r = t.middlewareData.shift) != null && r.enabled.y && (C = h), T && !d) {
        const N = nt(c.left, 0), A = nt(c.right, 0), j = nt(c.top, 0), V = nt(c.bottom, 0);
        y ? E = w - 2 * (N !== 0 || A !== 0 ? N + A : nt(c.left, c.right)) : C = g - 2 * (j !== 0 || V !== 0 ? j + V : nt(c.top, c.bottom));
      }
      await l({
        ...t,
        availableWidth: E,
        availableHeight: C
      });
      const D = await i.getDimensions(a.floating);
      return w !== D.width || g !== D.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Oa() {
  return typeof window < "u";
}
function go(e) {
  return Wy(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function st(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Wt(e) {
  var t;
  return (t = (Wy(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Wy(e) {
  return Oa() ? e instanceof Node || e instanceof st(e).Node : !1;
}
function Rt(e) {
  return Oa() ? e instanceof Element || e instanceof st(e).Element : !1;
}
function Ut(e) {
  return Oa() ? e instanceof HTMLElement || e instanceof st(e).HTMLElement : !1;
}
function zp(e) {
  return !Oa() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof st(e).ShadowRoot;
}
const Sk = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ms(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = At(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Sk.has(o);
}
const bk = /* @__PURE__ */ new Set(["table", "td", "th"]);
function kk(e) {
  return bk.has(go(e));
}
const Ck = [":popover-open", ":modal"];
function Fa(e) {
  return Ck.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Ek = ["transform", "translate", "scale", "rotate", "perspective"], Tk = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Pk = ["paint", "layout", "strict", "content"];
function xd(e) {
  const t = wd(), n = Rt(e) ? At(e) : e;
  return Ek.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Tk.some((r) => (n.willChange || "").includes(r)) || Pk.some((r) => (n.contain || "").includes(r));
}
function Dk(e) {
  let t = Fn(e);
  for (; Ut(t) && !no(t); ) {
    if (xd(t))
      return t;
    if (Fa(t))
      return null;
    t = Fn(t);
  }
  return null;
}
function wd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Nk = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function no(e) {
  return Nk.has(go(e));
}
function At(e) {
  return st(e).getComputedStyle(e);
}
function Va(e) {
  return Rt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Fn(e) {
  if (go(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    zp(e) && e.host || // Fallback.
    Wt(e)
  );
  return zp(t) ? t.host : t;
}
function Hy(e) {
  const t = Fn(e);
  return no(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ut(t) && Ms(t) ? t : Hy(t);
}
function xs(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Hy(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = st(o);
  if (s) {
    const a = Ku(i);
    return t.concat(i, i.visualViewport || [], Ms(o) ? o : [], a && n ? xs(a) : []);
  }
  return t.concat(o, xs(o, [], n));
}
function Ku(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ky(e) {
  const t = At(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ut(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = aa(n) !== s || aa(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function Sd(e) {
  return Rt(e) ? e : e.contextElement;
}
function Gr(e) {
  const t = Sd(e);
  if (!Ut(t))
    return zt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Ky(t);
  let i = (s ? aa(n.width) : n.width) / r, a = (s ? aa(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const Rk = /* @__PURE__ */ zt(0);
function Gy(e) {
  const t = st(e);
  return !wd() || !t.visualViewport ? Rk : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ak(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== st(e) ? !1 : t;
}
function fr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = Sd(e);
  let i = zt(1);
  t && (r ? Rt(r) && (i = Gr(r)) : i = Gr(e));
  const a = Ak(s, n, r) ? Gy(s) : zt(0);
  let l = (o.left + a.x) / i.x, u = (o.top + a.y) / i.y, c = o.width / i.x, f = o.height / i.y;
  if (s) {
    const d = st(s), y = r && Rt(r) ? st(r) : r;
    let w = d, g = Ku(w);
    for (; g && r && y !== w; ) {
      const S = Gr(g), m = g.getBoundingClientRect(), h = At(g), v = m.left + (g.clientLeft + parseFloat(h.paddingLeft)) * S.x, b = m.top + (g.clientTop + parseFloat(h.paddingTop)) * S.y;
      l *= S.x, u *= S.y, c *= S.x, f *= S.y, l += v, u += b, w = st(g), g = Ku(w);
    }
  }
  return ua({
    width: c,
    height: f,
    x: l,
    y: u
  });
}
function bd(e, t) {
  const n = Va(e).scrollLeft;
  return t ? t.left + n : fr(Wt(e)).left + n;
}
function Yy(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    bd(e, r)
  )), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function Mk(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = Wt(r), a = t ? Fa(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = zt(1);
  const c = zt(0), f = Ut(r);
  if ((f || !f && !s) && ((go(r) !== "body" || Ms(i)) && (l = Va(r)), Ut(r))) {
    const y = fr(r);
    u = Gr(r), c.x = y.x + r.clientLeft, c.y = y.y + r.clientTop;
  }
  const d = i && !f && !s ? Yy(i, l, !0) : zt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + d.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + d.y
  };
}
function jk(e) {
  return Array.from(e.getClientRects());
}
function Lk(e) {
  const t = Wt(e), n = Va(e), r = e.ownerDocument.body, o = nt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = nt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + bd(e);
  const a = -n.scrollTop;
  return At(r).direction === "rtl" && (i += nt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
function _k(e, t) {
  const n = st(e), r = Wt(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const u = wd();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
const Ik = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Ok(e, t) {
  const n = fr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = Ut(e) ? Gr(e) : zt(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, u = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: u
  };
}
function Bp(e, t, n) {
  let r;
  if (t === "viewport")
    r = _k(e, n);
  else if (t === "document")
    r = Lk(Wt(e));
  else if (Rt(t))
    r = Ok(t, n);
  else {
    const o = Gy(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ua(r);
}
function Xy(e, t) {
  const n = Fn(e);
  return n === t || !Rt(n) || no(n) ? !1 : At(n).position === "fixed" || Xy(n, t);
}
function Fk(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = xs(e, [], !1).filter((a) => Rt(a) && go(a) !== "body"), o = null;
  const s = At(e).position === "fixed";
  let i = s ? Fn(e) : e;
  for (; Rt(i) && !no(i); ) {
    const a = At(i), l = xd(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && Ik.has(o.position) || Ms(i) && !l && Xy(e, i)) ? r = r.filter((c) => c !== i) : o = a, i = Fn(i);
  }
  return t.set(e, r), r;
}
function Vk(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Fa(t) ? [] : Fk(t, this._c) : [].concat(n), r], a = i[0], l = i.reduce((u, c) => {
    const f = Bp(t, c, o);
    return u.top = nt(f.top, u.top), u.right = On(f.right, u.right), u.bottom = On(f.bottom, u.bottom), u.left = nt(f.left, u.left), u;
  }, Bp(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function zk(e) {
  const {
    width: t,
    height: n
  } = Ky(e);
  return {
    width: t,
    height: n
  };
}
function Bk(e, t, n) {
  const r = Ut(t), o = Wt(t), s = n === "fixed", i = fr(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = zt(0);
  function u() {
    l.x = bd(o);
  }
  if (r || !r && !s)
    if ((go(t) !== "body" || Ms(o)) && (a = Va(t)), r) {
      const y = fr(t, !0, s, t);
      l.x = y.x + t.clientLeft, l.y = y.y + t.clientTop;
    } else o && u();
  s && !r && o && u();
  const c = o && !r && !s ? Yy(o, a) : zt(0), f = i.left + a.scrollLeft - l.x - c.x, d = i.top + a.scrollTop - l.y - c.y;
  return {
    x: f,
    y: d,
    width: i.width,
    height: i.height
  };
}
function Nl(e) {
  return At(e).position === "static";
}
function $p(e, t) {
  if (!Ut(e) || At(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Wt(e) === n && (n = n.ownerDocument.body), n;
}
function Qy(e, t) {
  const n = st(e);
  if (Fa(e))
    return n;
  if (!Ut(e)) {
    let o = Fn(e);
    for (; o && !no(o); ) {
      if (Rt(o) && !Nl(o))
        return o;
      o = Fn(o);
    }
    return n;
  }
  let r = $p(e, t);
  for (; r && kk(r) && Nl(r); )
    r = $p(r, t);
  return r && no(r) && Nl(r) && !xd(r) ? n : r || Dk(e) || n;
}
const $k = async function(e) {
  const t = this.getOffsetParent || Qy, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Bk(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Uk(e) {
  return At(e).direction === "rtl";
}
const Wk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Mk,
  getDocumentElement: Wt,
  getClippingRect: Vk,
  getOffsetParent: Qy,
  getElementRects: $k,
  getClientRects: jk,
  getDimensions: zk,
  getScale: Gr,
  isElement: Rt,
  isRTL: Uk
};
function qy(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Hk(e, t) {
  let n = null, r;
  const o = Wt(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const u = e.getBoundingClientRect(), {
      left: c,
      top: f,
      width: d,
      height: y
    } = u;
    if (a || t(), !d || !y)
      return;
    const w = ri(f), g = ri(o.clientWidth - (c + d)), S = ri(o.clientHeight - (f + y)), m = ri(c), v = {
      rootMargin: -w + "px " + -g + "px " + -S + "px " + -m + "px",
      threshold: nt(0, On(1, l)) || 1
    };
    let b = !0;
    function k(T) {
      const C = T[0].intersectionRatio;
      if (C !== l) {
        if (!b)
          return i();
        C ? i(!1, C) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      C === 1 && !qy(u, e.getBoundingClientRect()) && i(), b = !1;
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
function Kk(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = Sd(e), c = o || s ? [...u ? xs(u) : [], ...xs(t)] : [];
  c.forEach((m) => {
    o && m.addEventListener("scroll", n, {
      passive: !0
    }), s && m.addEventListener("resize", n);
  });
  const f = u && a ? Hk(u, n) : null;
  let d = -1, y = null;
  i && (y = new ResizeObserver((m) => {
    let [h] = m;
    h && h.target === u && y && (y.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var v;
      (v = y) == null || v.observe(t);
    })), n();
  }), u && !l && y.observe(u), y.observe(t));
  let w, g = l ? fr(e) : null;
  l && S();
  function S() {
    const m = fr(e);
    g && !qy(g, m) && n(), g = m, w = requestAnimationFrame(S);
  }
  return n(), () => {
    var m;
    c.forEach((h) => {
      o && h.removeEventListener("scroll", n), s && h.removeEventListener("resize", n);
    }), f == null || f(), (m = y) == null || m.disconnect(), y = null, l && cancelAnimationFrame(w);
  };
}
const Gk = yk, Yk = vk, Xk = hk, Qk = wk, qk = mk, Up = pk, Zk = xk, Jk = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Wk,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return fk(e, t, {
    ...o,
    platform: s
  });
};
var eC = typeof document < "u", tC = function() {
}, Ri = eC ? x.useLayoutEffect : tC;
function ca(e, t) {
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
        if (!ca(e[r], t[r]))
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
      if (!(s === "_owner" && e.$$typeof) && !ca(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Zy(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Wp(e, t) {
  const n = Zy(e);
  return Math.round(t * n) / n;
}
function Rl(e) {
  const t = x.useRef(e);
  return Ri(() => {
    t.current = e;
  }), t;
}
function nC(e) {
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
    open: u
  } = e, [c, f] = x.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [d, y] = x.useState(r);
  ca(d, r) || y(r);
  const [w, g] = x.useState(null), [S, m] = x.useState(null), h = x.useCallback((P) => {
    P !== T.current && (T.current = P, g(P));
  }, []), v = x.useCallback((P) => {
    P !== C.current && (C.current = P, m(P));
  }, []), b = s || w, k = i || S, T = x.useRef(null), C = x.useRef(null), E = x.useRef(c), D = l != null, N = Rl(l), A = Rl(o), j = Rl(u), V = x.useCallback(() => {
    if (!T.current || !C.current)
      return;
    const P = {
      placement: t,
      strategy: n,
      middleware: d
    };
    A.current && (P.platform = A.current), Jk(T.current, C.current, P).then((M) => {
      const I = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: j.current !== !1
      };
      z.current && !ca(E.current, I) && (E.current = I, fo.flushSync(() => {
        f(I);
      }));
    });
  }, [d, t, n, A, j]);
  Ri(() => {
    u === !1 && E.current.isPositioned && (E.current.isPositioned = !1, f((P) => ({
      ...P,
      isPositioned: !1
    })));
  }, [u]);
  const z = x.useRef(!1);
  Ri(() => (z.current = !0, () => {
    z.current = !1;
  }), []), Ri(() => {
    if (b && (T.current = b), k && (C.current = k), b && k) {
      if (N.current)
        return N.current(b, k, V);
      V();
    }
  }, [b, k, V, N, D]);
  const Y = x.useMemo(() => ({
    reference: T,
    floating: C,
    setReference: h,
    setFloating: v
  }), [h, v]), O = x.useMemo(() => ({
    reference: b,
    floating: k
  }), [b, k]), F = x.useMemo(() => {
    const P = {
      position: n,
      left: 0,
      top: 0
    };
    if (!O.floating)
      return P;
    const M = Wp(O.floating, c.x), I = Wp(O.floating, c.y);
    return a ? {
      ...P,
      transform: "translate(" + M + "px, " + I + "px)",
      ...Zy(O.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: M,
      top: I
    };
  }, [n, a, O.floating, c.x, c.y]);
  return x.useMemo(() => ({
    ...c,
    update: V,
    refs: Y,
    elements: O,
    floatingStyles: F
  }), [c, V, Y, O, F]);
}
const rC = (e) => {
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
      return r && t(r) ? r.current != null ? Up({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Up({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, oC = (e, t) => ({
  ...Gk(e),
  options: [e, t]
}), sC = (e, t) => ({
  ...Yk(e),
  options: [e, t]
}), iC = (e, t) => ({
  ...Zk(e),
  options: [e, t]
}), aC = (e, t) => ({
  ...Xk(e),
  options: [e, t]
}), lC = (e, t) => ({
  ...Qk(e),
  options: [e, t]
}), uC = (e, t) => ({
  ...qk(e),
  options: [e, t]
}), cC = (e, t) => ({
  ...rC(e),
  options: [e, t]
});
var dC = "Arrow", Jy = x.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ p.jsx(
    J.svg,
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
Jy.displayName = dC;
var fC = Jy;
function pC(e) {
  const [t, n] = x.useState(void 0);
  return We(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let i, a;
        if ("borderBoxSize" in s) {
          const l = s.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          i = u.inlineSize, a = u.blockSize;
        } else
          i = e.offsetWidth, a = e.offsetHeight;
        n({ width: i, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var kd = "Popper", [ev, tv] = ho(kd), [hC, nv] = ev(kd), rv = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = x.useState(null);
  return /* @__PURE__ */ p.jsx(hC, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
rv.displayName = kd;
var ov = "PopperAnchor", sv = x.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = nv(ov, n), i = x.useRef(null), a = be(t, i), l = x.useRef(null);
    return x.useEffect(() => {
      const u = l.current;
      l.current = (r == null ? void 0 : r.current) || i.current, u !== l.current && s.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ p.jsx(J.div, { ...o, ref: a });
  }
);
sv.displayName = ov;
var Cd = "PopperContent", [mC, gC] = ev(Cd), iv = x.forwardRef(
  (e, t) => {
    var B, re, ae, oe, X, ee;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: i = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: u = [],
      collisionPadding: c = 0,
      sticky: f = "partial",
      hideWhenDetached: d = !1,
      updatePositionStrategy: y = "optimized",
      onPlaced: w,
      ...g
    } = e, S = nv(Cd, n), [m, h] = x.useState(null), v = be(t, (Oe) => h(Oe)), [b, k] = x.useState(null), T = pC(b), C = (T == null ? void 0 : T.width) ?? 0, E = (T == null ? void 0 : T.height) ?? 0, D = r + (s !== "center" ? "-" + s : ""), N = typeof c == "number" ? c : { top: 0, right: 0, bottom: 0, left: 0, ...c }, A = Array.isArray(u) ? u : [u], j = A.length > 0, V = {
      padding: N,
      boundary: A.filter(vC),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: j
    }, { refs: z, floatingStyles: Y, placement: O, isPositioned: F, middlewareData: P } = nC({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: D,
      whileElementsMounted: (...Oe) => Kk(...Oe, {
        animationFrame: y === "always"
      }),
      elements: {
        reference: S.anchor
      },
      middleware: [
        oC({ mainAxis: o + E, alignmentAxis: i }),
        l && sC({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? iC() : void 0,
          ...V
        }),
        l && aC({ ...V }),
        lC({
          ...V,
          apply: ({ elements: Oe, rects: et, availableWidth: cn, availableHeight: dn }) => {
            const { width: L, height: pe } = et.reference, Pe = Oe.floating.style;
            Pe.setProperty("--radix-popper-available-width", `${cn}px`), Pe.setProperty("--radix-popper-available-height", `${dn}px`), Pe.setProperty("--radix-popper-anchor-width", `${L}px`), Pe.setProperty("--radix-popper-anchor-height", `${pe}px`);
          }
        }),
        b && cC({ element: b, padding: a }),
        xC({ arrowWidth: C, arrowHeight: E }),
        d && uC({ strategy: "referenceHidden", ...V })
      ]
    }), [M, I] = uv(O), H = In(w);
    We(() => {
      F && (H == null || H());
    }, [F, H]);
    const te = (B = P.arrow) == null ? void 0 : B.x, dt = (re = P.arrow) == null ? void 0 : re.y, ie = ((ae = P.arrow) == null ? void 0 : ae.centerOffset) !== 0, [ft, ve] = x.useState();
    return We(() => {
      m && ve(window.getComputedStyle(m).zIndex);
    }, [m]), /* @__PURE__ */ p.jsx(
      "div",
      {
        ref: z.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Y,
          transform: F ? Y.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ft,
          "--radix-popper-transform-origin": [
            (oe = P.transformOrigin) == null ? void 0 : oe.x,
            (X = P.transformOrigin) == null ? void 0 : X.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ee = P.hide) == null ? void 0 : ee.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ p.jsx(
          mC,
          {
            scope: n,
            placedSide: M,
            onArrowChange: k,
            arrowX: te,
            arrowY: dt,
            shouldHideArrow: ie,
            children: /* @__PURE__ */ p.jsx(
              J.div,
              {
                "data-side": M,
                "data-align": I,
                ...g,
                ref: v,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: F ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
iv.displayName = Cd;
var av = "PopperArrow", yC = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, lv = x.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = gC(av, r), i = yC[s.placedSide];
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
          fC,
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
lv.displayName = av;
function vC(e) {
  return e !== null;
}
var xC = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var S, m, h;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((S = o.arrow) == null ? void 0 : S.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, c] = uv(n), f = { start: "0%", center: "50%", end: "100%" }[c], d = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + a / 2, y = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + l / 2;
    let w = "", g = "";
    return u === "bottom" ? (w = i ? f : `${d}px`, g = `${-l}px`) : u === "top" ? (w = i ? f : `${d}px`, g = `${r.floating.height + l}px`) : u === "right" ? (w = `${-l}px`, g = i ? f : `${y}px`) : u === "left" && (w = `${r.floating.width + l}px`, g = i ? f : `${y}px`), { data: { x: w, y: g } };
  }
});
function uv(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var wC = rv, SC = sv, bC = iv, kC = lv, CC = "Portal", Ed = x.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, s] = x.useState(!1);
  We(() => s(!0), []);
  const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return i ? GS.createPortal(/* @__PURE__ */ p.jsx(J.div, { ...r, ref: t }), i) : null;
});
Ed.displayName = CC;
var EC = Tm[" useInsertionEffect ".trim().toString()] || We;
function ws({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, i] = TC({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o;
  {
    const c = x.useRef(e !== void 0);
    x.useEffect(() => {
      const f = c.current;
      f !== a && console.warn(
        `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), c.current = a;
    }, [a, r]);
  }
  const u = x.useCallback(
    (c) => {
      var f;
      if (a) {
        const d = PC(c) ? c(e) : c;
        d !== e && ((f = i.current) == null || f.call(i, d));
      } else
        s(c);
    },
    [a, e, s, i]
  );
  return [l, u];
}
function TC({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = x.useState(e), o = x.useRef(n), s = x.useRef(t);
  return EC(() => {
    s.current = t;
  }, [t]), x.useEffect(() => {
    var i;
    o.current !== n && ((i = s.current) == null || i.call(s, n), o.current = n);
  }, [n, o]), [n, r, s];
}
function PC(e) {
  return typeof e == "function";
}
function DC(e) {
  const t = x.useRef({ value: e, previous: e });
  return x.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var cv = Object.freeze({
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
}), NC = "VisuallyHidden", RC = x.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(
    J.span,
    {
      ...e,
      ref: t,
      style: { ...cv, ...e.style }
    }
  )
);
RC.displayName = NC;
var AC = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, wr = /* @__PURE__ */ new WeakMap(), oi = /* @__PURE__ */ new WeakMap(), si = {}, Al = 0, dv = function(e) {
  return e && (e.host || dv(e.parentNode));
}, MC = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = dv(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, jC = function(e, t, n, r) {
  var o = MC(t, Array.isArray(e) ? e : [e]);
  si[n] || (si[n] = /* @__PURE__ */ new WeakMap());
  var s = si[n], i = [], a = /* @__PURE__ */ new Set(), l = new Set(o), u = function(f) {
    !f || a.has(f) || (a.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var c = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(d) {
      if (a.has(d))
        c(d);
      else
        try {
          var y = d.getAttribute(r), w = y !== null && y !== "false", g = (wr.get(d) || 0) + 1, S = (s.get(d) || 0) + 1;
          wr.set(d, g), s.set(d, S), i.push(d), g === 1 && w && oi.set(d, !0), S === 1 && d.setAttribute(n, "true"), w || d.setAttribute(r, "true");
        } catch (m) {
          console.error("aria-hidden: cannot operate on ", d, m);
        }
    });
  };
  return c(t), a.clear(), Al++, function() {
    i.forEach(function(f) {
      var d = wr.get(f) - 1, y = s.get(f) - 1;
      wr.set(f, d), s.set(f, y), d || (oi.has(f) || f.removeAttribute(r), oi.delete(f)), y || f.removeAttribute(n);
    }), Al--, Al || (wr = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), oi = /* @__PURE__ */ new WeakMap(), si = {});
  };
}, fv = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = AC(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), jC(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, It = function() {
  return It = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, It.apply(this, arguments);
};
function pv(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function LC(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Ai = "right-scroll-bar-position", Mi = "width-before-scroll-bar", _C = "with-scroll-bars-hidden", IC = "--removed-body-scroll-bar-size";
function Ml(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function OC(e, t) {
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
var FC = typeof window < "u" ? x.useLayoutEffect : x.useEffect, Hp = /* @__PURE__ */ new WeakMap();
function VC(e, t) {
  var n = OC(null, function(r) {
    return e.forEach(function(o) {
      return Ml(o, r);
    });
  });
  return FC(function() {
    var r = Hp.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || Ml(a, null);
      }), s.forEach(function(a) {
        o.has(a) || Ml(a, i);
      });
    }
    Hp.set(n, e);
  }, [e]), n;
}
function zC(e) {
  return e;
}
function BC(e, t) {
  t === void 0 && (t = zC);
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
        var c = i;
        i = [], c.forEach(s);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(c) {
          i.push(c), u();
        },
        filter: function(c) {
          return i = i.filter(c), n;
        }
      };
    }
  };
  return o;
}
function $C(e) {
  e === void 0 && (e = {});
  var t = BC(null);
  return t.options = It({ async: !0, ssr: !1 }, e), t;
}
var hv = function(e) {
  var t = e.sideCar, n = pv(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return x.createElement(r, It({}, n));
};
hv.isSideCarExport = !0;
function UC(e, t) {
  return e.useMedium(t), hv;
}
var mv = $C(), jl = function() {
}, za = x.forwardRef(function(e, t) {
  var n = x.useRef(null), r = x.useState({
    onScrollCapture: jl,
    onWheelCapture: jl,
    onTouchMoveCapture: jl
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, f = e.shards, d = e.sideCar, y = e.noRelative, w = e.noIsolation, g = e.inert, S = e.allowPinchZoom, m = e.as, h = m === void 0 ? "div" : m, v = e.gapMode, b = pv(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), k = d, T = VC([n, t]), C = It(It({}, b), o);
  return x.createElement(
    x.Fragment,
    null,
    c && x.createElement(k, { sideCar: mv, removeScrollBar: u, shards: f, noRelative: y, noIsolation: w, inert: g, setCallbacks: s, allowPinchZoom: !!S, lockRef: n, gapMode: v }),
    i ? x.cloneElement(x.Children.only(a), It(It({}, C), { ref: T })) : x.createElement(h, It({}, C, { className: l, ref: T }), a)
  );
});
za.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
za.classNames = {
  fullWidth: Mi,
  zeroRight: Ai
};
var WC = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function HC() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = WC();
  return t && e.setAttribute("nonce", t), e;
}
function KC(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function GC(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var YC = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = HC()) && (KC(t, n), GC(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, XC = function() {
  var e = YC();
  return function(t, n) {
    x.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, gv = function() {
  var e = XC(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, QC = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ll = function(e) {
  return parseInt(e || "", 10) || 0;
}, qC = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ll(n), Ll(r), Ll(o)];
}, ZC = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return QC;
  var t = qC(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, JC = gv(), Yr = "data-scroll-locked", eE = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(_C, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Yr, `] {
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
  
  .`).concat(Ai, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Mi, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ai, " .").concat(Ai, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Mi, " .").concat(Mi, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Yr, `] {
    `).concat(IC, ": ").concat(a, `px;
  }
`);
}, Kp = function() {
  var e = parseInt(document.body.getAttribute(Yr) || "0", 10);
  return isFinite(e) ? e : 0;
}, tE = function() {
  x.useEffect(function() {
    return document.body.setAttribute(Yr, (Kp() + 1).toString()), function() {
      var e = Kp() - 1;
      e <= 0 ? document.body.removeAttribute(Yr) : document.body.setAttribute(Yr, e.toString());
    };
  }, []);
}, nE = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  tE();
  var s = x.useMemo(function() {
    return ZC(o);
  }, [o]);
  return x.createElement(JC, { styles: eE(s, !t, o, n ? "" : "!important") });
}, Gu = !1;
if (typeof window < "u")
  try {
    var ii = Object.defineProperty({}, "passive", {
      get: function() {
        return Gu = !0, !0;
      }
    });
    window.addEventListener("test", ii, ii), window.removeEventListener("test", ii, ii);
  } catch {
    Gu = !1;
  }
var Sr = Gu ? { passive: !1 } : !1, rE = function(e) {
  return e.tagName === "TEXTAREA";
}, yv = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !rE(e) && n[t] === "visible")
  );
}, oE = function(e) {
  return yv(e, "overflowY");
}, sE = function(e) {
  return yv(e, "overflowX");
}, Gp = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = vv(e, r);
    if (o) {
      var s = xv(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, iE = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, aE = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, vv = function(e, t) {
  return e === "v" ? oE(t) : sE(t);
}, xv = function(e, t) {
  return e === "v" ? iE(t) : aE(t);
}, lE = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, uE = function(e, t, n, r, o) {
  var s = lE(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, l = t.contains(a), u = !1, c = i > 0, f = 0, d = 0;
  do {
    if (!a)
      break;
    var y = xv(e, a), w = y[0], g = y[1], S = y[2], m = g - S - s * w;
    (w || m) && vv(e, a) && (f += m, d += w);
    var h = a.parentNode;
    a = h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h.host : h;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (c && Math.abs(f) < 1 || !c && Math.abs(d) < 1) && (u = !0), u;
}, ai = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Yp = function(e) {
  return [e.deltaX, e.deltaY];
}, Xp = function(e) {
  return e && "current" in e ? e.current : e;
}, cE = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, dE = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, fE = 0, br = [];
function pE(e) {
  var t = x.useRef([]), n = x.useRef([0, 0]), r = x.useRef(), o = x.useState(fE++)[0], s = x.useState(gv)[0], i = x.useRef(e);
  x.useEffect(function() {
    i.current = e;
  }, [e]), x.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = LC([e.lockRef.current], (e.shards || []).map(Xp), !0).filter(Boolean);
      return g.forEach(function(S) {
        return S.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(S) {
          return S.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = x.useCallback(function(g, S) {
    if ("touches" in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
      return !i.current.allowPinchZoom;
    var m = ai(g), h = n.current, v = "deltaX" in g ? g.deltaX : h[0] - m[0], b = "deltaY" in g ? g.deltaY : h[1] - m[1], k, T = g.target, C = Math.abs(v) > Math.abs(b) ? "h" : "v";
    if ("touches" in g && C === "h" && T.type === "range")
      return !1;
    var E = Gp(C, T);
    if (!E)
      return !0;
    if (E ? k = C : (k = C === "v" ? "h" : "v", E = Gp(C, T)), !E)
      return !1;
    if (!r.current && "changedTouches" in g && (v || b) && (r.current = k), !k)
      return !0;
    var D = r.current || k;
    return uE(D, S, g, D === "h" ? v : b);
  }, []), l = x.useCallback(function(g) {
    var S = g;
    if (!(!br.length || br[br.length - 1] !== s)) {
      var m = "deltaY" in S ? Yp(S) : ai(S), h = t.current.filter(function(k) {
        return k.name === S.type && (k.target === S.target || S.target === k.shadowParent) && cE(k.delta, m);
      })[0];
      if (h && h.should) {
        S.cancelable && S.preventDefault();
        return;
      }
      if (!h) {
        var v = (i.current.shards || []).map(Xp).filter(Boolean).filter(function(k) {
          return k.contains(S.target);
        }), b = v.length > 0 ? a(S, v[0]) : !i.current.noIsolation;
        b && S.cancelable && S.preventDefault();
      }
    }
  }, []), u = x.useCallback(function(g, S, m, h) {
    var v = { name: g, delta: S, target: m, should: h, shadowParent: hE(m) };
    t.current.push(v), setTimeout(function() {
      t.current = t.current.filter(function(b) {
        return b !== v;
      });
    }, 1);
  }, []), c = x.useCallback(function(g) {
    n.current = ai(g), r.current = void 0;
  }, []), f = x.useCallback(function(g) {
    u(g.type, Yp(g), g.target, a(g, e.lockRef.current));
  }, []), d = x.useCallback(function(g) {
    u(g.type, ai(g), g.target, a(g, e.lockRef.current));
  }, []);
  x.useEffect(function() {
    return br.push(s), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", l, Sr), document.addEventListener("touchmove", l, Sr), document.addEventListener("touchstart", c, Sr), function() {
      br = br.filter(function(g) {
        return g !== s;
      }), document.removeEventListener("wheel", l, Sr), document.removeEventListener("touchmove", l, Sr), document.removeEventListener("touchstart", c, Sr);
    };
  }, []);
  var y = e.removeScrollBar, w = e.inert;
  return x.createElement(
    x.Fragment,
    null,
    w ? x.createElement(s, { styles: dE(o) }) : null,
    y ? x.createElement(nE, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function hE(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const mE = UC(mv, pE);
var Td = x.forwardRef(function(e, t) {
  return x.createElement(za, It({}, e, { ref: t, sideCar: mE }));
});
Td.classNames = za.classNames;
var gE = [" ", "Enter", "ArrowUp", "ArrowDown"], yE = [" ", "Enter"], pr = "Select", [Ba, $a, vE] = Oy(pr), [yo, LR] = ho(pr, [
  vE,
  tv
]), Ua = tv(), [xE, Hn] = yo(pr), [wE, SE] = yo(pr), wv = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    value: i,
    defaultValue: a,
    onValueChange: l,
    dir: u,
    name: c,
    autoComplete: f,
    disabled: d,
    required: y,
    form: w
  } = e, g = Ua(t), [S, m] = x.useState(null), [h, v] = x.useState(null), [b, k] = x.useState(!1), T = pd(u), [C, E] = ws({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: pr
  }), [D, N] = ws({
    prop: i,
    defaultProp: a,
    onChange: l,
    caller: pr
  }), A = x.useRef(null), j = S ? w || !!S.closest("form") : !0, [V, z] = x.useState(/* @__PURE__ */ new Set()), Y = Array.from(V).map((O) => O.props.value).join(";");
  return /* @__PURE__ */ p.jsx(wC, { ...g, children: /* @__PURE__ */ p.jsxs(
    xE,
    {
      required: y,
      scope: t,
      trigger: S,
      onTriggerChange: m,
      valueNode: h,
      onValueNodeChange: v,
      valueNodeHasChildren: b,
      onValueNodeHasChildrenChange: k,
      contentId: jn(),
      value: D,
      onValueChange: N,
      open: C,
      onOpenChange: E,
      dir: T,
      triggerPointerDownPosRef: A,
      disabled: d,
      children: [
        /* @__PURE__ */ p.jsx(Ba.Provider, { scope: t, children: /* @__PURE__ */ p.jsx(
          wE,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: x.useCallback((O) => {
              z((F) => new Set(F).add(O));
            }, []),
            onNativeOptionRemove: x.useCallback((O) => {
              z((F) => {
                const P = new Set(F);
                return P.delete(O), P;
              });
            }, []),
            children: n
          }
        ) }),
        j ? /* @__PURE__ */ p.jsxs(
          $v,
          {
            "aria-hidden": !0,
            required: y,
            tabIndex: -1,
            name: c,
            autoComplete: f,
            value: D,
            onChange: (O) => N(O.target.value),
            disabled: d,
            form: w,
            children: [
              D === void 0 ? /* @__PURE__ */ p.jsx("option", { value: "" }) : null,
              Array.from(V)
            ]
          },
          Y
        ) : null
      ]
    }
  ) });
};
wv.displayName = pr;
var Sv = "SelectTrigger", bv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = Ua(n), i = Hn(Sv, n), a = i.disabled || r, l = be(t, i.onTriggerChange), u = $a(n), c = x.useRef("touch"), [f, d, y] = Wv((g) => {
      const S = u().filter((v) => !v.disabled), m = S.find((v) => v.value === i.value), h = Hv(S, g, m);
      h !== void 0 && i.onValueChange(h.value);
    }), w = (g) => {
      a || (i.onOpenChange(!0), y()), g && (i.triggerPointerDownPosRef.current = {
        x: Math.round(g.pageX),
        y: Math.round(g.pageY)
      });
    };
    return /* @__PURE__ */ p.jsx(SC, { asChild: !0, ...s, children: /* @__PURE__ */ p.jsx(
      J.button,
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
        "data-placeholder": Uv(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: Q(o.onClick, (g) => {
          g.currentTarget.focus(), c.current !== "mouse" && w(g);
        }),
        onPointerDown: Q(o.onPointerDown, (g) => {
          c.current = g.pointerType;
          const S = g.target;
          S.hasPointerCapture(g.pointerId) && S.releasePointerCapture(g.pointerId), g.button === 0 && g.ctrlKey === !1 && g.pointerType === "mouse" && (w(g), g.preventDefault());
        }),
        onKeyDown: Q(o.onKeyDown, (g) => {
          const S = f.current !== "";
          !(g.ctrlKey || g.altKey || g.metaKey) && g.key.length === 1 && d(g.key), !(S && g.key === " ") && gE.includes(g.key) && (w(), g.preventDefault());
        })
      }
    ) });
  }
);
bv.displayName = Sv;
var kv = "SelectValue", Cv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: i = "", ...a } = e, l = Hn(kv, n), { onValueNodeHasChildrenChange: u } = l, c = s !== void 0, f = be(t, l.onValueNodeChange);
    return We(() => {
      u(c);
    }, [u, c]), /* @__PURE__ */ p.jsx(
      J.span,
      {
        ...a,
        ref: f,
        style: { pointerEvents: "none" },
        children: Uv(l.value) ? /* @__PURE__ */ p.jsx(p.Fragment, { children: i }) : s
      }
    );
  }
);
Cv.displayName = kv;
var bE = "SelectIcon", Ev = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ p.jsx(J.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Ev.displayName = bE;
var kE = "SelectPortal", Tv = (e) => /* @__PURE__ */ p.jsx(Ed, { asChild: !0, ...e });
Tv.displayName = kE;
var hr = "SelectContent", Pv = x.forwardRef(
  (e, t) => {
    const n = Hn(hr, e.__scopeSelect), [r, o] = x.useState();
    if (We(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? fo.createPortal(
        /* @__PURE__ */ p.jsx(Dv, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx(Ba.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ p.jsx(Nv, { ...e, ref: t });
  }
);
Pv.displayName = hr;
var bt = 10, [Dv, Kn] = yo(hr), CE = "SelectContentImpl", EE = /* @__PURE__ */ ys("SelectContent.RemoveScroll"), Nv = x.forwardRef(
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
      align: u,
      alignOffset: c,
      arrowPadding: f,
      collisionBoundary: d,
      collisionPadding: y,
      sticky: w,
      hideWhenDetached: g,
      avoidCollisions: S,
      //
      ...m
    } = e, h = Hn(hr, n), [v, b] = x.useState(null), [k, T] = x.useState(null), C = be(t, (B) => b(B)), [E, D] = x.useState(null), [N, A] = x.useState(
      null
    ), j = $a(n), [V, z] = x.useState(!1), Y = x.useRef(!1);
    x.useEffect(() => {
      if (v) return fv(v);
    }, [v]), zy();
    const O = x.useCallback(
      (B) => {
        const [re, ...ae] = j().map((ee) => ee.ref.current), [oe] = ae.slice(-1), X = document.activeElement;
        for (const ee of B)
          if (ee === X || (ee == null || ee.scrollIntoView({ block: "nearest" }), ee === re && k && (k.scrollTop = 0), ee === oe && k && (k.scrollTop = k.scrollHeight), ee == null || ee.focus(), document.activeElement !== X)) return;
      },
      [j, k]
    ), F = x.useCallback(
      () => O([E, v]),
      [O, E, v]
    );
    x.useEffect(() => {
      V && F();
    }, [V, F]);
    const { onOpenChange: P, triggerPointerDownPosRef: M } = h;
    x.useEffect(() => {
      if (v) {
        let B = { x: 0, y: 0 };
        const re = (oe) => {
          var X, ee;
          B = {
            x: Math.abs(Math.round(oe.pageX) - (((X = M.current) == null ? void 0 : X.x) ?? 0)),
            y: Math.abs(Math.round(oe.pageY) - (((ee = M.current) == null ? void 0 : ee.y) ?? 0))
          };
        }, ae = (oe) => {
          B.x <= 10 && B.y <= 10 ? oe.preventDefault() : v.contains(oe.target) || P(!1), document.removeEventListener("pointermove", re), M.current = null;
        };
        return M.current !== null && (document.addEventListener("pointermove", re), document.addEventListener("pointerup", ae, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", re), document.removeEventListener("pointerup", ae, { capture: !0 });
        };
      }
    }, [v, P, M]), x.useEffect(() => {
      const B = () => P(!1);
      return window.addEventListener("blur", B), window.addEventListener("resize", B), () => {
        window.removeEventListener("blur", B), window.removeEventListener("resize", B);
      };
    }, [P]);
    const [I, H] = Wv((B) => {
      const re = j().filter((X) => !X.disabled), ae = re.find((X) => X.ref.current === document.activeElement), oe = Hv(re, B, ae);
      oe && setTimeout(() => oe.ref.current.focus());
    }), te = x.useCallback(
      (B, re, ae) => {
        const oe = !Y.current && !ae;
        (h.value !== void 0 && h.value === re || oe) && (D(B), oe && (Y.current = !0));
      },
      [h.value]
    ), dt = x.useCallback(() => v == null ? void 0 : v.focus(), [v]), ie = x.useCallback(
      (B, re, ae) => {
        const oe = !Y.current && !ae;
        (h.value !== void 0 && h.value === re || oe) && A(B);
      },
      [h.value]
    ), ft = r === "popper" ? Yu : Rv, ve = ft === Yu ? {
      side: a,
      sideOffset: l,
      align: u,
      alignOffset: c,
      arrowPadding: f,
      collisionBoundary: d,
      collisionPadding: y,
      sticky: w,
      hideWhenDetached: g,
      avoidCollisions: S
    } : {};
    return /* @__PURE__ */ p.jsx(
      Dv,
      {
        scope: n,
        content: v,
        viewport: k,
        onViewportChange: T,
        itemRefCallback: te,
        selectedItem: E,
        onItemLeave: dt,
        itemTextRefCallback: ie,
        focusSelectedItem: F,
        selectedItemText: N,
        position: r,
        isPositioned: V,
        searchRef: I,
        children: /* @__PURE__ */ p.jsx(Td, { as: EE, allowPinchZoom: !0, children: /* @__PURE__ */ p.jsx(
          md,
          {
            asChild: !0,
            trapped: h.open,
            onMountAutoFocus: (B) => {
              B.preventDefault();
            },
            onUnmountAutoFocus: Q(o, (B) => {
              var re;
              (re = h.trigger) == null || re.focus({ preventScroll: !0 }), B.preventDefault();
            }),
            children: /* @__PURE__ */ p.jsx(
              hd,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: (B) => B.preventDefault(),
                onDismiss: () => h.onOpenChange(!1),
                children: /* @__PURE__ */ p.jsx(
                  ft,
                  {
                    role: "listbox",
                    id: h.contentId,
                    "data-state": h.open ? "open" : "closed",
                    dir: h.dir,
                    onContextMenu: (B) => B.preventDefault(),
                    ...m,
                    ...ve,
                    onPlaced: () => z(!0),
                    ref: C,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...m.style
                    },
                    onKeyDown: Q(m.onKeyDown, (B) => {
                      const re = B.ctrlKey || B.altKey || B.metaKey;
                      if (B.key === "Tab" && B.preventDefault(), !re && B.key.length === 1 && H(B.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(B.key)) {
                        let oe = j().filter((X) => !X.disabled).map((X) => X.ref.current);
                        if (["ArrowUp", "End"].includes(B.key) && (oe = oe.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(B.key)) {
                          const X = B.target, ee = oe.indexOf(X);
                          oe = oe.slice(ee + 1);
                        }
                        setTimeout(() => O(oe)), B.preventDefault();
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
Nv.displayName = CE;
var TE = "SelectItemAlignedPosition", Rv = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = Hn(hr, n), i = Kn(hr, n), [a, l] = x.useState(null), [u, c] = x.useState(null), f = be(t, (C) => c(C)), d = $a(n), y = x.useRef(!1), w = x.useRef(!0), { viewport: g, selectedItem: S, selectedItemText: m, focusSelectedItem: h } = i, v = x.useCallback(() => {
    if (s.trigger && s.valueNode && a && u && g && S && m) {
      const C = s.trigger.getBoundingClientRect(), E = u.getBoundingClientRect(), D = s.valueNode.getBoundingClientRect(), N = m.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const X = N.left - E.left, ee = D.left - X, Oe = C.left - ee, et = C.width + Oe, cn = Math.max(et, E.width), dn = window.innerWidth - bt, L = Tp(ee, [
          bt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(bt, dn - cn)
        ]);
        a.style.minWidth = et + "px", a.style.left = L + "px";
      } else {
        const X = E.right - N.right, ee = window.innerWidth - D.right - X, Oe = window.innerWidth - C.right - ee, et = C.width + Oe, cn = Math.max(et, E.width), dn = window.innerWidth - bt, L = Tp(ee, [
          bt,
          Math.max(bt, dn - cn)
        ]);
        a.style.minWidth = et + "px", a.style.right = L + "px";
      }
      const A = d(), j = window.innerHeight - bt * 2, V = g.scrollHeight, z = window.getComputedStyle(u), Y = parseInt(z.borderTopWidth, 10), O = parseInt(z.paddingTop, 10), F = parseInt(z.borderBottomWidth, 10), P = parseInt(z.paddingBottom, 10), M = Y + O + V + P + F, I = Math.min(S.offsetHeight * 5, M), H = window.getComputedStyle(g), te = parseInt(H.paddingTop, 10), dt = parseInt(H.paddingBottom, 10), ie = C.top + C.height / 2 - bt, ft = j - ie, ve = S.offsetHeight / 2, B = S.offsetTop + ve, re = Y + O + B, ae = M - re;
      if (re <= ie) {
        const X = A.length > 0 && S === A[A.length - 1].ref.current;
        a.style.bottom = "0px";
        const ee = u.clientHeight - g.offsetTop - g.offsetHeight, Oe = Math.max(
          ft,
          ve + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (X ? dt : 0) + ee + F
        ), et = re + Oe;
        a.style.height = et + "px";
      } else {
        const X = A.length > 0 && S === A[0].ref.current;
        a.style.top = "0px";
        const Oe = Math.max(
          ie,
          Y + g.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (X ? te : 0) + ve
        ) + ae;
        a.style.height = Oe + "px", g.scrollTop = re - ie + g.offsetTop;
      }
      a.style.margin = `${bt}px 0`, a.style.minHeight = I + "px", a.style.maxHeight = j + "px", r == null || r(), requestAnimationFrame(() => y.current = !0);
    }
  }, [
    d,
    s.trigger,
    s.valueNode,
    a,
    u,
    g,
    S,
    m,
    s.dir,
    r
  ]);
  We(() => v(), [v]);
  const [b, k] = x.useState();
  We(() => {
    u && k(window.getComputedStyle(u).zIndex);
  }, [u]);
  const T = x.useCallback(
    (C) => {
      C && w.current === !0 && (v(), h == null || h(), w.current = !1);
    },
    [v, h]
  );
  return /* @__PURE__ */ p.jsx(
    DE,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: y,
      onScrollButtonChange: T,
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
            J.div,
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
Rv.displayName = TE;
var PE = "SelectPopperPosition", Yu = x.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = bt,
    ...s
  } = e, i = Ua(n);
  return /* @__PURE__ */ p.jsx(
    bC,
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
Yu.displayName = PE;
var [DE, Pd] = yo(hr, {}), Xu = "SelectViewport", Av = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = Kn(Xu, n), i = Pd(Xu, n), a = be(t, s.onViewportChange), l = x.useRef(0);
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
      /* @__PURE__ */ p.jsx(Ba.Slot, { scope: n, children: /* @__PURE__ */ p.jsx(
        J.div,
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
          onScroll: Q(o.onScroll, (u) => {
            const c = u.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: d } = i;
            if (d != null && d.current && f) {
              const y = Math.abs(l.current - c.scrollTop);
              if (y > 0) {
                const w = window.innerHeight - bt * 2, g = parseFloat(f.style.minHeight), S = parseFloat(f.style.height), m = Math.max(g, S);
                if (m < w) {
                  const h = m + y, v = Math.min(w, h), b = h - v;
                  f.style.height = v + "px", f.style.bottom === "0px" && (c.scrollTop = b > 0 ? b : 0, f.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = c.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Av.displayName = Xu;
var Mv = "SelectGroup", [NE, RE] = yo(Mv), AE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = jn();
    return /* @__PURE__ */ p.jsx(NE, { scope: n, id: o, children: /* @__PURE__ */ p.jsx(J.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
AE.displayName = Mv;
var jv = "SelectLabel", ME = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = RE(jv, n);
    return /* @__PURE__ */ p.jsx(J.div, { id: o.id, ...r, ref: t });
  }
);
ME.displayName = jv;
var da = "SelectItem", [jE, Lv] = yo(da), _v = x.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...i
    } = e, a = Hn(da, n), l = Kn(da, n), u = a.value === r, [c, f] = x.useState(s ?? ""), [d, y] = x.useState(!1), w = be(
      t,
      (h) => {
        var v;
        return (v = l.itemRefCallback) == null ? void 0 : v.call(l, h, r, o);
      }
    ), g = jn(), S = x.useRef("touch"), m = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ p.jsx(
      jE,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: g,
        isSelected: u,
        onItemTextChange: x.useCallback((h) => {
          f((v) => v || ((h == null ? void 0 : h.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ p.jsx(
          Ba.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: c,
            children: /* @__PURE__ */ p.jsx(
              J.div,
              {
                role: "option",
                "aria-labelledby": g,
                "data-highlighted": d ? "" : void 0,
                "aria-selected": u && d,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: w,
                onFocus: Q(i.onFocus, () => y(!0)),
                onBlur: Q(i.onBlur, () => y(!1)),
                onClick: Q(i.onClick, () => {
                  S.current !== "mouse" && m();
                }),
                onPointerUp: Q(i.onPointerUp, () => {
                  S.current === "mouse" && m();
                }),
                onPointerDown: Q(i.onPointerDown, (h) => {
                  S.current = h.pointerType;
                }),
                onPointerMove: Q(i.onPointerMove, (h) => {
                  var v;
                  S.current = h.pointerType, o ? (v = l.onItemLeave) == null || v.call(l) : S.current === "mouse" && h.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Q(i.onPointerLeave, (h) => {
                  var v;
                  h.currentTarget === document.activeElement && ((v = l.onItemLeave) == null || v.call(l));
                }),
                onKeyDown: Q(i.onKeyDown, (h) => {
                  var b;
                  ((b = l.searchRef) == null ? void 0 : b.current) !== "" && h.key === " " || (yE.includes(h.key) && m(), h.key === " " && h.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
_v.displayName = da;
var Oo = "SelectItemText", Iv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, i = Hn(Oo, n), a = Kn(Oo, n), l = Lv(Oo, n), u = SE(Oo, n), [c, f] = x.useState(null), d = be(
      t,
      (m) => f(m),
      l.onItemTextChange,
      (m) => {
        var h;
        return (h = a.itemTextRefCallback) == null ? void 0 : h.call(a, m, l.value, l.disabled);
      }
    ), y = c == null ? void 0 : c.textContent, w = x.useMemo(
      () => /* @__PURE__ */ p.jsx("option", { value: l.value, disabled: l.disabled, children: y }, l.value),
      [l.disabled, l.value, y]
    ), { onNativeOptionAdd: g, onNativeOptionRemove: S } = u;
    return We(() => (g(w), () => S(w)), [g, S, w]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(J.span, { id: l.textId, ...s, ref: d }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? fo.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
Iv.displayName = Oo;
var Ov = "SelectItemIndicator", Fv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Lv(Ov, n).isSelected ? /* @__PURE__ */ p.jsx(J.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Fv.displayName = Ov;
var Qu = "SelectScrollUpButton", Vv = x.forwardRef((e, t) => {
  const n = Kn(Qu, e.__scopeSelect), r = Pd(Qu, e.__scopeSelect), [o, s] = x.useState(!1), i = be(t, r.onScrollButtonChange);
  return We(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = l.scrollTop > 0;
        s(u);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    Bv,
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
Vv.displayName = Qu;
var qu = "SelectScrollDownButton", zv = x.forwardRef((e, t) => {
  const n = Kn(qu, e.__scopeSelect), r = Pd(qu, e.__scopeSelect), [o, s] = x.useState(!1), i = be(t, r.onScrollButtonChange);
  return We(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = l.scrollHeight - l.clientHeight, c = Math.ceil(l.scrollTop) < u;
        s(c);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    Bv,
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
zv.displayName = qu;
var Bv = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = Kn("SelectScrollButton", n), i = x.useRef(null), a = $a(n), l = x.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return x.useEffect(() => () => l(), [l]), We(() => {
    var c;
    const u = a().find((f) => f.ref.current === document.activeElement);
    (c = u == null ? void 0 : u.ref.current) == null || c.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ p.jsx(
    J.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: Q(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: Q(o.onPointerMove, () => {
        var u;
        (u = s.onItemLeave) == null || u.call(s), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: Q(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), LE = "SelectSeparator", _E = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ p.jsx(J.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
_E.displayName = LE;
var Zu = "SelectArrow", IE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ua(n), s = Hn(Zu, n), i = Kn(Zu, n);
    return s.open && i.position === "popper" ? /* @__PURE__ */ p.jsx(kC, { ...o, ...r, ref: t }) : null;
  }
);
IE.displayName = Zu;
var OE = "SelectBubbleInput", $v = x.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = x.useRef(null), s = be(r, o), i = DC(t);
    return x.useEffect(() => {
      const a = o.current;
      if (!a) return;
      const l = window.HTMLSelectElement.prototype, c = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (i !== t && c) {
        const f = new Event("change", { bubbles: !0 });
        c.call(a, t), a.dispatchEvent(f);
      }
    }, [i, t]), /* @__PURE__ */ p.jsx(
      J.select,
      {
        ...n,
        style: { ...cv, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
$v.displayName = OE;
function Uv(e) {
  return e === "" || e === void 0;
}
function Wv(e) {
  const t = In(e), n = x.useRef(""), r = x.useRef(0), o = x.useCallback(
    (i) => {
      const a = n.current + i;
      t(a), function l(u) {
        n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      }(a);
    },
    [t]
  ), s = x.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return x.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
function Hv(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = FE(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function FE(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var VE = wv, zE = bv, BE = Cv, $E = Ev, UE = Tv, WE = Pv, HE = Av, KE = _v, GE = Iv, YE = Fv, XE = Vv, QE = zv;
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qE = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Kv = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ZE = {
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
const JE = x.forwardRef(
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
      ...ZE,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Kv("lucide", o),
      ...a
    },
    [
      ...i.map(([u, c]) => x.createElement(u, c)),
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
    ({ className: r, ...o }, s) => x.createElement(JE, {
      ref: s,
      iconNode: t,
      className: Kv(`lucide-${qE(e)}`, r),
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
const Gv = Me("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yv = Me("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wa = Me("Building2", [
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
const eT = Me("Building", [
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
const ji = Me("Calendar", [
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
const tT = Me("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dd = Me("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xv = Me("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qv = Me("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qv = Me("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ro = Me("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nT = Me("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rT = Me("ExternalLink", [
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
const Qp = Me("List", [
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
const Zv = Me("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = Me("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oT = Me("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function li({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(VE, { "data-slot": "select", ...e });
}
function qp({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(BE, { "data-slot": "select-value", ...e });
}
function ui({
  className: e,
  size: t = "default",
  children: n,
  ...r
}) {
  return /* @__PURE__ */ p.jsxs(
    zE,
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
        /* @__PURE__ */ p.jsx($E, { asChild: !0, children: /* @__PURE__ */ p.jsx(Dd, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function ci({
  className: e,
  children: t,
  position: n = "popper",
  ...r
}) {
  return /* @__PURE__ */ p.jsx(UE, { children: /* @__PURE__ */ p.jsxs(
    WE,
    {
      "data-slot": "select-content",
      className: Se(
        "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-[9999] max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      ...r,
      children: [
        /* @__PURE__ */ p.jsx(sT, {}),
        /* @__PURE__ */ p.jsx(
          HE,
          {
            className: Se(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ p.jsx(iT, {})
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
    KE,
    {
      "data-slot": "select-item",
      className: Se(
        "focus:bg-gray-100 dark:focus:bg-gray-700 focus:text-gray-900 dark:focus:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ p.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ p.jsx(YE, { children: /* @__PURE__ */ p.jsx(tT, { className: "size-4" }) }) }),
        /* @__PURE__ */ p.jsx(GE, { children: t })
      ]
    }
  );
}
function sT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    XE,
    {
      "data-slot": "select-scroll-up-button",
      className: Se(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p.jsx(qv, { className: "size-4" })
    }
  );
}
function iT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    QE,
    {
      "data-slot": "select-scroll-down-button",
      className: Se(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p.jsx(Dd, { className: "size-4" })
    }
  );
}
const Ju = x.forwardRef(
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
Ju.displayName = "Input";
var _l = "rovingFocusGroup.onEntryFocus", aT = { bubbles: !1, cancelable: !0 }, Ls = "RovingFocusGroup", [ec, Jv, lT] = Oy(Ls), [uT, e0] = ho(
  Ls,
  [lT]
), [cT, dT] = uT(Ls), t0 = x.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(ec.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(ec.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(fT, { ...e, ref: t }) }) })
);
t0.displayName = Ls;
var fT = x.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: s,
    currentTabStopId: i,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: l,
    onEntryFocus: u,
    preventScrollOnEntryFocus: c = !1,
    ...f
  } = e, d = x.useRef(null), y = be(t, d), w = pd(s), [g, S] = ws({
    prop: i,
    defaultProp: a ?? null,
    onChange: l,
    caller: Ls
  }), [m, h] = x.useState(!1), v = In(u), b = Jv(n), k = x.useRef(!1), [T, C] = x.useState(0);
  return x.useEffect(() => {
    const E = d.current;
    if (E)
      return E.addEventListener(_l, v), () => E.removeEventListener(_l, v);
  }, [v]), /* @__PURE__ */ p.jsx(
    cT,
    {
      scope: n,
      orientation: r,
      dir: w,
      loop: o,
      currentTabStopId: g,
      onItemFocus: x.useCallback(
        (E) => S(E),
        [S]
      ),
      onItemShiftTab: x.useCallback(() => h(!0), []),
      onFocusableItemAdd: x.useCallback(
        () => C((E) => E + 1),
        []
      ),
      onFocusableItemRemove: x.useCallback(
        () => C((E) => E - 1),
        []
      ),
      children: /* @__PURE__ */ p.jsx(
        J.div,
        {
          tabIndex: m || T === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: y,
          style: { outline: "none", ...e.style },
          onMouseDown: Q(e.onMouseDown, () => {
            k.current = !0;
          }),
          onFocus: Q(e.onFocus, (E) => {
            const D = !k.current;
            if (E.target === E.currentTarget && D && !m) {
              const N = new CustomEvent(_l, aT);
              if (E.currentTarget.dispatchEvent(N), !N.defaultPrevented) {
                const A = b().filter((O) => O.focusable), j = A.find((O) => O.active), V = A.find((O) => O.id === g), Y = [j, V, ...A].filter(
                  Boolean
                ).map((O) => O.ref.current);
                o0(Y, c);
              }
            }
            k.current = !1;
          }),
          onBlur: Q(e.onBlur, () => h(!1))
        }
      )
    }
  );
}), n0 = "RovingFocusGroupItem", r0 = x.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: i,
      ...a
    } = e, l = jn(), u = s || l, c = dT(n0, n), f = c.currentTabStopId === u, d = Jv(n), { onFocusableItemAdd: y, onFocusableItemRemove: w, currentTabStopId: g } = c;
    return x.useEffect(() => {
      if (r)
        return y(), () => w();
    }, [r, y, w]), /* @__PURE__ */ p.jsx(
      ec.ItemSlot,
      {
        scope: n,
        id: u,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ p.jsx(
          J.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": c.orientation,
            ...a,
            ref: t,
            onMouseDown: Q(e.onMouseDown, (S) => {
              r ? c.onItemFocus(u) : S.preventDefault();
            }),
            onFocus: Q(e.onFocus, () => c.onItemFocus(u)),
            onKeyDown: Q(e.onKeyDown, (S) => {
              if (S.key === "Tab" && S.shiftKey) {
                c.onItemShiftTab();
                return;
              }
              if (S.target !== S.currentTarget) return;
              const m = mT(S, c.orientation, c.dir);
              if (m !== void 0) {
                if (S.metaKey || S.ctrlKey || S.altKey || S.shiftKey) return;
                S.preventDefault();
                let v = d().filter((b) => b.focusable).map((b) => b.ref.current);
                if (m === "last") v.reverse();
                else if (m === "prev" || m === "next") {
                  m === "prev" && v.reverse();
                  const b = v.indexOf(S.currentTarget);
                  v = c.loop ? gT(v, b + 1) : v.slice(b + 1);
                }
                setTimeout(() => o0(v));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: f, hasTabStop: g != null }) : i
          }
        )
      }
    );
  }
);
r0.displayName = n0;
var pT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function hT(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function mT(e, t, n) {
  const r = hT(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return pT[r];
}
function o0(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function gT(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var yT = t0, vT = r0;
function xT(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var _s = (e) => {
  const { present: t, children: n } = e, r = wT(t), o = typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n), s = be(r.ref, ST(o));
  return typeof n == "function" || r.isPresent ? x.cloneElement(o, { ref: s }) : null;
};
_s.displayName = "Presence";
function wT(e) {
  const [t, n] = x.useState(), r = x.useRef(null), o = x.useRef(e), s = x.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = xT(i, {
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
    const u = di(r.current);
    s.current = a === "mounted" ? u : "none";
  }, [a]), We(() => {
    const u = r.current, c = o.current;
    if (c !== e) {
      const d = s.current, y = di(u);
      e ? l("MOUNT") : y === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && d !== y ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), We(() => {
    if (t) {
      let u;
      const c = t.ownerDocument.defaultView ?? window, f = (y) => {
        const g = di(r.current).includes(CSS.escape(y.animationName));
        if (y.target === t && g && (l("ANIMATION_END"), !o.current)) {
          const S = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = c.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S);
          });
        }
      }, d = (y) => {
        y.target === t && (s.current = di(r.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        c.clearTimeout(u), t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: x.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function di(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ST(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ha = "Tabs", [bT, _R] = ho(Ha, [
  e0
]), s0 = e0(), [kT, Nd] = bT(Ha), i0 = x.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: s,
      orientation: i = "horizontal",
      dir: a,
      activationMode: l = "automatic",
      ...u
    } = e, c = pd(a), [f, d] = ws({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: Ha
    });
    return /* @__PURE__ */ p.jsx(
      kT,
      {
        scope: n,
        baseId: jn(),
        value: f,
        onValueChange: d,
        orientation: i,
        dir: c,
        activationMode: l,
        children: /* @__PURE__ */ p.jsx(
          J.div,
          {
            dir: c,
            "data-orientation": i,
            ...u,
            ref: t
          }
        )
      }
    );
  }
);
i0.displayName = Ha;
var a0 = "TabsList", l0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = Nd(a0, n), i = s0(n);
    return /* @__PURE__ */ p.jsx(
      yT,
      {
        asChild: !0,
        ...i,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ p.jsx(
          J.div,
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
l0.displayName = a0;
var u0 = "TabsTrigger", c0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, i = Nd(u0, n), a = s0(n), l = p0(i.baseId, r), u = h0(i.baseId, r), c = r === i.value;
    return /* @__PURE__ */ p.jsx(
      vT,
      {
        asChild: !0,
        ...a,
        focusable: !o,
        active: c,
        children: /* @__PURE__ */ p.jsx(
          J.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": c,
            "aria-controls": u,
            "data-state": c ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: l,
            ...s,
            ref: t,
            onMouseDown: Q(e.onMouseDown, (f) => {
              !o && f.button === 0 && f.ctrlKey === !1 ? i.onValueChange(r) : f.preventDefault();
            }),
            onKeyDown: Q(e.onKeyDown, (f) => {
              [" ", "Enter"].includes(f.key) && i.onValueChange(r);
            }),
            onFocus: Q(e.onFocus, () => {
              const f = i.activationMode !== "manual";
              !c && !o && f && i.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
c0.displayName = u0;
var d0 = "TabsContent", f0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...i } = e, a = Nd(d0, n), l = p0(a.baseId, r), u = h0(a.baseId, r), c = r === a.value, f = x.useRef(c);
    return x.useEffect(() => {
      const d = requestAnimationFrame(() => f.current = !1);
      return () => cancelAnimationFrame(d);
    }, []), /* @__PURE__ */ p.jsx(_s, { present: o || c, children: ({ present: d }) => /* @__PURE__ */ p.jsx(
      J.div,
      {
        "data-state": c ? "active" : "inactive",
        "data-orientation": a.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !d,
        id: u,
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
f0.displayName = d0;
function p0(e, t) {
  return `${e}-trigger-${t}`;
}
function h0(e, t) {
  return `${e}-content-${t}`;
}
var CT = i0, ET = l0, TT = c0, PT = f0;
function DT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    CT,
    {
      "data-slot": "tabs",
      className: Se("flex flex-col gap-2", e),
      ...t
    }
  );
}
function Zp({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    ET,
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
function Yn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    TT,
    {
      "data-slot": "tabs-trigger",
      className: Se(
        "data-[state=active]:bg-background cursor-pointer dark:data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus:outline-none",
        e
      ),
      ...t
    }
  );
}
function fi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    PT,
    {
      "data-slot": "tabs-content",
      className: Se("flex-1 outline-none", e),
      ...t
    }
  );
}
const wn = /* @__PURE__ */ new Date(), U = wn.getMonth(), W = wn.getFullYear(), NT = [
  {
    id: "1",
    title: "Indigenous Culture Workshop",
    description: "Learn about local Indigenous traditions and participate in hands-on cultural activities led by community elders.",
    content: "Learn about local Indigenous traditions and participate in hands-on cultural activities led by community elders.",
    startDate: new Date(W, U, 15, 14, 0),
    endDate: new Date(W, U, 15, 16, 0),
    variant: "warning",
    organization_ids: [4],
    // Cultural Society
    event_categories: [5]
    // Cultural
  },
  {
    id: "2",
    title: "Career Fair 2025",
    description: "Meet with local employers and explore career opportunities in Northern BC and beyond.",
    content: "Meet with local employers and explore career opportunities in Northern BC and beyond.",
    startDate: new Date(W, U, 18, 10, 0),
    endDate: new Date(W, U, 18, 15, 0),
    variant: "success",
    organization_ids: [5],
    // Career Services
    event_categories: [4]
    // Workshop
  },
  {
    id: "3",
    title: "Hiking Trip to Tabletop Mountain",
    description: "Join us for a challenging but rewarding day hike to one of the region's most spectacular viewpoints.",
    content: "Join us for a challenging but rewarding day hike to one of the region's most spectacular viewpoints.",
    startDate: new Date(W, U, 22, 8, 0),
    endDate: new Date(W, U, 22, 18, 0),
    variant: "danger",
    organization_ids: [3],
    // Athletics Department
    event_categories: [3]
    // Sports
  },
  {
    id: "4",
    title: "Mental Health Awareness Week",
    description: "A week-long series of workshops, activities, and resources focused on mental health and wellbeing.",
    content: "A week-long series of workshops, activities, and resources focused on mental health and wellbeing.",
    startDate: new Date(W, U, 26, 9, 0),
    endDate: new Date(W, U, 26, 17, 0),
    variant: "warning",
    organization_ids: [1],
    // Student Union
    event_categories: [4]
    // Workshop
  },
  {
    id: "5",
    title: "Spring Formal Dance",
    description: "Celebrate the end of the semester with music, dancing, and refreshments in our beautiful Winter Garden.",
    content: "Celebrate the end of the semester with music, dancing, and refreshments in our beautiful Winter Garden.",
    startDate: new Date(W, U, Math.min(29, new Date(W, U + 1, 0).getDate()), 19, 0),
    endDate: new Date(W, U, Math.min(29, new Date(W, U + 1, 0).getDate()), 23, 0),
    variant: "warning",
    organization_ids: [1],
    // Student Union
    event_categories: [2]
    // Social
  },
  {
    id: "6",
    title: "Research Presentation Day",
    description: "Graduate students present their research findings across various disciplines.",
    content: "Graduate students present their research findings across various disciplines.",
    startDate: new Date(W, U, 12, 13, 0),
    endDate: new Date(W, U, 12, 17, 0),
    variant: "success",
    organization_ids: [2],
    // Computer Science Club
    event_categories: [1]
    // Academic
  },
  {
    id: "7",
    title: "Photography Workshop",
    description: "Learn basic photography techniques and composition.",
    content: "Learn basic photography techniques and composition.",
    startDate: new Date(W, U, 5, 15, 30),
    endDate: new Date(W, U, 5, 17, 30),
    variant: "warning",
    organization_ids: [4],
    // Cultural Society
    event_categories: [4]
    // Workshop
  },
  {
    id: "8",
    title: "Volunteer Fair",
    description: "Connect with local organizations looking for volunteers.",
    content: "Connect with local organizations looking for volunteers.",
    startDate: new Date(W, U, 8, 11, 0),
    endDate: new Date(W, U, 8, 14, 0),
    variant: "default",
    organization_ids: [1],
    // Student Union
    event_categories: [2]
    // Social
  },
  {
    id: "9",
    title: "Business Networking Event",
    description: "Network with local business professionals and alumni.",
    content: "Network with local business professionals and alumni.",
    startDate: new Date(W, U, 20, 18, 0),
    endDate: new Date(W, U, 20, 20, 0),
    variant: "success",
    organization_ids: [5],
    // Career Services
    event_categories: [4]
    // Workshop
  },
  {
    id: "10",
    title: "Stress Relief Workshop",
    description: "Learn effective stress management techniques for exam season.",
    content: "Learn effective stress management techniques for exam season.",
    startDate: new Date(W, U, 14, 16, 0),
    endDate: new Date(W, U, 14, 17, 30),
    variant: "warning",
    organization_ids: [1],
    // Student Union
    event_categories: [4]
    // Workshop
  },
  {
    id: "11",
    title: "International Food Festival",
    description: "Taste foods from around the world and celebrate cultural diversity.",
    content: "Taste foods from around the world and celebrate cultural diversity.",
    startDate: new Date(W, U, 25, 12, 0),
    endDate: new Date(W, U, 25, 16, 0),
    variant: "warning",
    organization_ids: [4],
    // Cultural Society
    event_categories: [5]
    // Cultural
  },
  {
    id: "12",
    title: "Campus Soccer Tournament",
    description: "Join teams and compete in our annual soccer tournament.",
    content: "Join teams and compete in our annual soccer tournament.",
    startDate: new Date(W, U, Math.min(30, new Date(W, U + 1, 0).getDate()), 9, 0),
    endDate: new Date(W, U, Math.min(30, new Date(W, U + 1, 0).getDate()), 17, 0),
    variant: "danger",
    organization_ids: [3],
    // Athletics Department
    event_categories: [3]
    // Sports
  },
  {
    id: "13",
    title: "Morning Yoga Session",
    description: "Start your day with a relaxing yoga session.",
    content: "Start your day with a relaxing yoga session.",
    startDate: new Date(W, U, Math.max(1, wn.getDate() - 2), 7, 0),
    endDate: new Date(W, U, Math.max(1, wn.getDate() - 2), 8, 0),
    variant: "warning",
    organization_ids: [1],
    // Student Union
    event_categories: [4]
    // Workshop
  },
  {
    id: "14",
    title: "Study Group - Biology 101",
    description: "Group study session for upcoming Biology 101 midterm exam.",
    content: "Group study session for upcoming Biology 101 midterm exam.",
    startDate: new Date(W, U, Math.max(1, wn.getDate() - 1), 10, 0),
    endDate: new Date(W, U, Math.max(1, wn.getDate() - 1), 12, 0),
    variant: "success",
    organization_ids: [2],
    // Computer Science Club
    event_categories: [1]
    // Academic
  },
  {
    id: "15",
    title: "Lunch & Learn: Sustainability",
    description: "Learn about campus sustainability initiatives while enjoying lunch.",
    content: "Learn about campus sustainability initiatives while enjoying lunch.",
    startDate: new Date(W, U, wn.getDate(), 12, 0),
    endDate: new Date(W, U, wn.getDate(), 13, 0),
    variant: "success",
    organization_ids: [1],
    // Student Union
    event_categories: [4]
    // Workshop
  },
  {
    id: "16",
    title: "Study Session - Math Tutoring",
    description: "Drop-in math tutoring session for students needing extra help.",
    content: "Drop-in math tutoring session for students needing extra help.",
    startDate: new Date(W, U, Math.min(28, new Date(W, U + 1, 0).getDate()), 14, 0),
    endDate: new Date(W, U, Math.min(28, new Date(W, U + 1, 0).getDate()), 16, 0),
    variant: "default",
    organization_ids: [2],
    // Computer Science Club
    event_categories: [1]
    // Academic
  },
  {
    id: "17",
    title: "Campus Walking Group",
    description: "Informal walking group meeting at the main entrance. All fitness levels welcome.",
    content: "Informal walking group meeting at the main entrance. All fitness levels welcome.",
    startDate: new Date(W, U, Math.min(27, new Date(W, U + 1, 0).getDate()), 17, 0),
    endDate: new Date(W, U, Math.min(27, new Date(W, U + 1, 0).getDate()), 18, 0),
    variant: "warning",
    organization_ids: [3],
    // Athletics Department
    event_categories: [3]
    // Sports
  },
  {
    id: "18",
    title: "Free Pizza Friday",
    description: "Free pizza available in the student lounge while supplies last.",
    content: "Free pizza available in the student lounge while supplies last.",
    startDate: new Date(W, U, Math.min(24, new Date(W, U + 1, 0).getDate()), 11, 30),
    endDate: new Date(W, U, Math.min(24, new Date(W, U + 1, 0).getDate()), 13, 0),
    variant: "success",
    organization_ids: [1],
    // Student Union
    event_categories: [2]
    // Social
  }
], RT = {
  1: {
    category: "cultural",
    organization: "Cultural Society",
    location: "Agora",
    cost: "Free",
    registrationRequired: !0,
    description: "Learn about local Indigenous traditions and participate in hands-on cultural activities led by community elders.",
    categories: [{ slug: "cultural", name: "Cultural" }]
  },
  2: {
    category: "workshop",
    organization: "Career Services",
    location: "Campus Gymnasium",
    cost: "Free",
    registrationRequired: !1,
    description: "Meet with local employers and explore career opportunities in Northern BC and beyond.",
    categories: [{ slug: "workshop", name: "Workshop" }],
    website: "https://www.unbc.ca/career-services"
  },
  3: {
    category: "sports",
    organization: "Athletics Department",
    location: "Meet at Student Union Building",
    cost: "$15",
    registrationRequired: !0,
    description: "Join us for a challenging but rewarding day hike to one of the region's most spectacular viewpoints.",
    categories: [{ slug: "sports", name: "Sports" }]
  },
  4: {
    category: "workshop",
    organization: "Student Union",
    location: "Various Locations",
    cost: "Free",
    registrationRequired: !1,
    description: "A week-long series of workshops, activities, and resources focused on mental health and wellbeing.",
    categories: [{ slug: "workshop", name: "Workshop" }]
  },
  5: {
    category: "social",
    organization: "Student Union",
    location: "Winter Garden",
    cost: "$25",
    registrationRequired: !0,
    description: "Celebrate the end of the semester with music, dancing, and refreshments in our beautiful Winter Garden.",
    categories: [{ slug: "social", name: "Social" }],
    website: "https://www.unbc.ca/student-life/events"
  },
  6: {
    category: "academic",
    organization: "Computer Science Club",
    location: "Teaching Laboratory Building",
    cost: "Free",
    registrationRequired: !1,
    description: "Graduate students present their research findings across various disciplines.",
    categories: [{ slug: "academic", name: "Academic" }]
  },
  7: {
    category: "workshop",
    organization: "Cultural Society",
    location: "Art Building Studio 3",
    cost: "$10",
    registrationRequired: !0,
    description: "Learn basic photography techniques and composition.",
    categories: [{ slug: "workshop", name: "Workshop" }]
  },
  8: {
    category: "social",
    organization: "Student Union",
    location: "Student Union Building",
    cost: "Free",
    registrationRequired: !1,
    description: "Connect with local organizations looking for volunteers.",
    categories: [{ slug: "social", name: "Social" }]
  },
  9: {
    category: "workshop",
    organization: "Career Services",
    location: "Winter Garden",
    cost: "$5",
    registrationRequired: !0,
    description: "Network with local business professionals and alumni.",
    categories: [{ slug: "workshop", name: "Workshop" }],
    website: "https://www.unbc.ca/business-networking"
  },
  10: {
    category: "workshop",
    organization: "Student Union",
    location: "Campus Recreation Center",
    cost: "Free",
    registrationRequired: !1,
    description: "Learn effective stress management techniques for exam season.",
    categories: [{ slug: "workshop", name: "Workshop" }]
  },
  11: {
    category: "cultural",
    organization: "Cultural Society",
    location: "Agora",
    cost: "Free",
    registrationRequired: !1,
    description: "Taste foods from around the world and celebrate cultural diversity.",
    categories: [{ slug: "cultural", name: "Cultural" }]
  },
  12: {
    category: "sports",
    organization: "Athletics Department",
    location: "Campus Soccer Field",
    cost: "$20 per team",
    registrationRequired: !0,
    description: "Join teams and compete in our annual soccer tournament.",
    categories: [{ slug: "sports", name: "Sports" }]
  },
  13: {
    category: "workshop",
    organization: "Student Union",
    location: "Campus Recreation Center",
    cost: "Free",
    registrationRequired: !1,
    description: "Start your day with a relaxing yoga session.",
    categories: [{ slug: "workshop", name: "Workshop" }]
  },
  14: {
    category: "academic",
    organization: "Computer Science Club",
    location: "Library Study Room 201",
    cost: "Free",
    registrationRequired: !1,
    description: "Group study session for upcoming Biology 101 midterm exam.",
    categories: [{ slug: "academic", name: "Academic" }]
  },
  15: {
    category: "workshop",
    organization: "Student Union",
    location: "Agora",
    cost: "Free",
    registrationRequired: !1,
    description: "Learn about campus sustainability initiatives while enjoying lunch.",
    categories: [{ slug: "workshop", name: "Workshop" }]
  },
  16: {
    category: "academic",
    organization: "Computer Science Club",
    location: "Library Study Room 105",
    cost: "Free",
    registrationRequired: !1,
    description: "Drop-in math tutoring session for students needing extra help.",
    categories: [{ slug: "academic", name: "Academic" }]
  },
  17: {
    category: "sports",
    organization: "Athletics Department",
    location: "Campus Trails",
    cost: "Free",
    registrationRequired: !1,
    description: "Informal walking group meeting at the main entrance. All fitness levels welcome.",
    categories: [{ slug: "sports", name: "Sports" }]
  },
  18: {
    category: "social",
    organization: "Student Union",
    location: "Student Lounge",
    cost: "Free",
    registrationRequired: !1,
    description: "Free pizza available in the student lounge while supplies last.",
    categories: [{ slug: "social", name: "Social" }]
  }
};
function AT() {
  const [e, t] = x.useState(!0);
  x.useEffect(() => {
    const o = setTimeout(() => {
      t(!1);
    }, 500);
    return () => clearTimeout(o);
  }, []);
  const n = NT;
  return {
    events: n,
    eventMetadata: RT,
    loading: e,
    error: null,
    total: n.length,
    setFilters: () => {
    }
  };
}
class MT {
  constructor() {
    const t = window.unbcCalendarData;
    this.baseUrl = (t == null ? void 0 : t.apiUrl) || "/wp-json/unbc-events/v1";
  }
  async fetchEvents(t = {}) {
    try {
      const n = new URLSearchParams();
      Object.entries(t).forEach(([i, a]) => {
        a != null && a !== "" && n.append(i, a.toString());
      });
      const o = `${this.baseUrl.endsWith("/") ? this.baseUrl.slice(0, -1) : this.baseUrl}/events${n.toString() ? "?" + n.toString() : ""}`, s = await fetch(o);
      if (!s.ok) {
        const i = await s.text();
        throw new Error(`HTTP error! status: ${s.status}, response: ${i}`);
      }
      return await s.json();
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
    return t.length === 0 ? "default" : {
      clubs: "primary",
      // Purple for clubs
      club: "primary",
      "student-clubs": "primary",
      unbc: "success",
      // Green for UNBC
      university: "success",
      academic: "success",
      organizations: "danger",
      // Red for organizations
      organization: "danger",
      community: "danger",
      // Red for community (same as organizations)
      comm: "danger",
      sports: "warning",
      // Blue/Orange for sports
      athletics: "warning",
      recreation: "warning"
    }[t[0].slug] || "default";
  }
  mapWordPressCategory(t) {
    return t.length === 0 ? null : t[0].slug;
  }
}
const Il = new MT();
function m0(e = {}) {
  const [t, n] = x.useState([]), [r, o] = x.useState({}), [s, i] = x.useState(!0), [a, l] = x.useState(null), [u, c] = x.useState(0), [f, d] = x.useState(0), [y, w] = x.useState(e), g = x.useCallback(async () => {
    try {
      i(!0), l(null);
      const h = await Il.fetchEvents(y), v = [], b = {};
      h.events.forEach((k) => {
        const T = Il.transformWordPressEventToEvent(k), C = Il.transformWordPressEventToMetadata(k);
        v.push(T), b[T.id] = C;
      }), n(v), o(b), c(h.total), d(h.pages);
    } catch (h) {
      console.error("Error fetching events:", h), n([]), o({}), c(0), d(0), l(h instanceof Error ? h.message : "Failed to load events");
    } finally {
      i(!1);
    }
  }, [y]);
  x.useEffect(() => {
    g();
  }, [g]);
  const S = x.useCallback(() => {
    g();
  }, [g]), m = x.useCallback((h) => {
    w((v) => ({ ...v, ...h }));
  }, []);
  return {
    events: t,
    eventMetadata: r,
    loading: s,
    error: a,
    total: u,
    pages: f,
    refetch: S,
    setFilters: m
  };
}
const jT = {
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
function LT() {
  const [e, t] = x.useState([]), [n, r] = x.useState(!0), [o, s] = x.useState(null);
  return x.useEffect(() => {
    (async () => {
      try {
        r(!0);
        const a = await jT.getAll();
        t(a), s(null);
      } catch {
        s("Failed to load organizations");
      } finally {
        r(!1);
      }
    })();
  }, []), { organizations: e, loading: n, error: o };
}
function g0() {
  const [e, t] = x.useState([]), [n, r] = x.useState(!0), [o, s] = x.useState(null);
  return x.useEffect(() => {
    (async () => {
      try {
        r(!0), s(null);
        const [a, l] = await Promise.all([
          fetch("/wp-json/wp/v2/event_category?per_page=100&orderby=name&order=asc"),
          fetch("/wp-json/unbc-events/v1/category-colors")
        ]);
        if (!a.ok)
          throw new Error(`HTTP error! status: ${a.status}`);
        const u = await a.json();
        let c = {};
        l.ok && (c = (await l.json()).colors || {});
        const f = u.map((d) => ({
          id: d.id,
          name: d.name,
          slug: d.slug,
          count: d.count,
          variant: c[d.slug] || _T(d.slug)
        }));
        t(f);
      } catch (a) {
        console.error("Error fetching event categories:", a), s(a instanceof Error ? a.message : "Failed to fetch categories"), t([
          { id: 1, name: "Clubs", slug: "clubs", count: 0, variant: "primary" },
          { id: 2, name: "UNBC", slug: "unbc", count: 0, variant: "success" },
          { id: 3, name: "Organizations", slug: "organizations", count: 0, variant: "danger" },
          { id: 4, name: "Sports", slug: "sports", count: 0, variant: "warning" }
        ]);
      } finally {
        r(!1);
      }
    })();
  }, []), { categories: e, loading: n, error: o };
}
function _T(e) {
  return {
    clubs: "primary",
    // Purple
    club: "primary",
    "student-clubs": "primary",
    unbc: "success",
    // Green
    university: "success",
    academic: "success",
    organizations: "danger",
    // Red
    organization: "danger",
    community: "danger",
    sports: "warning",
    // Blue/Orange
    athletics: "warning",
    recreation: "warning"
  }[e] || "default";
}
function IT() {
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
var Ka = "Dialog", [y0, IR] = ho(Ka), [OT, Mt] = y0(Ka), v0 = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !0
  } = e, a = x.useRef(null), l = x.useRef(null), [u, c] = ws({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Ka
  });
  return /* @__PURE__ */ p.jsx(
    OT,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: jn(),
      titleId: jn(),
      descriptionId: jn(),
      open: u,
      onOpenChange: c,
      onOpenToggle: x.useCallback(() => c((f) => !f), [c]),
      modal: i,
      children: n
    }
  );
};
v0.displayName = Ka;
var x0 = "DialogTrigger", FT = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Mt(x0, n), s = be(t, o.triggerRef);
    return /* @__PURE__ */ p.jsx(
      J.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Md(o.open),
        ...r,
        ref: s,
        onClick: Q(e.onClick, o.onOpenToggle)
      }
    );
  }
);
FT.displayName = x0;
var Rd = "DialogPortal", [VT, w0] = y0(Rd, {
  forceMount: void 0
}), S0 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = Mt(Rd, t);
  return /* @__PURE__ */ p.jsx(VT, { scope: t, forceMount: n, children: x.Children.map(r, (i) => /* @__PURE__ */ p.jsx(_s, { present: n || s.open, children: /* @__PURE__ */ p.jsx(Ed, { asChild: !0, container: o, children: i }) })) });
};
S0.displayName = Rd;
var fa = "DialogOverlay", b0 = x.forwardRef(
  (e, t) => {
    const n = w0(fa, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Mt(fa, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ p.jsx(_s, { present: r || s.open, children: /* @__PURE__ */ p.jsx(BT, { ...o, ref: t }) }) : null;
  }
);
b0.displayName = fa;
var zT = /* @__PURE__ */ ys("DialogOverlay.RemoveScroll"), BT = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Mt(fa, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p.jsx(Td, { as: zT, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ p.jsx(
        J.div,
        {
          "data-state": Md(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), mr = "DialogContent", k0 = x.forwardRef(
  (e, t) => {
    const n = w0(mr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Mt(mr, e.__scopeDialog);
    return /* @__PURE__ */ p.jsx(_s, { present: r || s.open, children: s.modal ? /* @__PURE__ */ p.jsx($T, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(UT, { ...o, ref: t }) });
  }
);
k0.displayName = mr;
var $T = x.forwardRef(
  (e, t) => {
    const n = Mt(mr, e.__scopeDialog), r = x.useRef(null), o = be(t, n.contentRef, r);
    return x.useEffect(() => {
      const s = r.current;
      if (s) return fv(s);
    }, []), /* @__PURE__ */ p.jsx(
      C0,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Q(e.onCloseAutoFocus, (s) => {
          var i;
          s.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: Q(e.onPointerDownOutside, (s) => {
          const i = s.detail.originalEvent, a = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || a) && s.preventDefault();
        }),
        onFocusOutside: Q(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), UT = x.forwardRef(
  (e, t) => {
    const n = Mt(mr, e.__scopeDialog), r = x.useRef(!1), o = x.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      C0,
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
          var l, u;
          (l = e.onInteractOutside) == null || l.call(e, s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = s.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(i)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), C0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = Mt(mr, n), l = x.useRef(null), u = be(t, l);
    return zy(), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        md,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ p.jsx(
            hd,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": Md(a.open),
              ...i,
              ref: u,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(WT, { titleId: a.titleId }),
        /* @__PURE__ */ p.jsx(KT, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), Ad = "DialogTitle", E0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Mt(Ad, n);
    return /* @__PURE__ */ p.jsx(J.h2, { id: o.titleId, ...r, ref: t });
  }
);
E0.displayName = Ad;
var T0 = "DialogDescription", P0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Mt(T0, n);
    return /* @__PURE__ */ p.jsx(J.p, { id: o.descriptionId, ...r, ref: t });
  }
);
P0.displayName = T0;
var D0 = "DialogClose", N0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Mt(D0, n);
    return /* @__PURE__ */ p.jsx(
      J.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Q(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
N0.displayName = D0;
function Md(e) {
  return e ? "open" : "closed";
}
var R0 = "DialogTitleWarning", [OR, A0] = Db(R0, {
  contentName: mr,
  titleName: Ad,
  docsSlug: "dialog"
}), WT = ({ titleId: e }) => {
  const t = A0(R0), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return x.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, HT = "DialogDescriptionWarning", KT = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${A0(HT).contentName}}.`;
  return x.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, GT = v0, YT = S0, M0 = b0, j0 = k0, L0 = E0, _0 = P0, XT = N0;
const QT = GT, qT = YT, I0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  M0,
  {
    ref: n,
    className: Se(
      "fixed inset-0 z-[99999] bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
I0.displayName = M0.displayName;
const O0 = x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.jsxs(qT, { children: [
  /* @__PURE__ */ p.jsx(I0, {}),
  /* @__PURE__ */ p.jsxs(
    j0,
    {
      ref: r,
      className: Se(
        "fixed left-[50%] top-[50%] z-[99999] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ p.jsxs(XT, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-all duration-200 hover:opacity-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 p-1", children: [
          /* @__PURE__ */ p.jsx(oT, { className: "h-4 w-4" }),
          /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
O0.displayName = j0.displayName;
const F0 = ({
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
F0.displayName = "DialogHeader";
const V0 = ({
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
V0.displayName = "DialogFooter";
const z0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  L0,
  {
    ref: n,
    className: Se(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
z0.displayName = L0.displayName;
const B0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  _0,
  {
    ref: n,
    className: Se("text-sm text-muted-foreground", e),
    ...t
  }
));
B0.displayName = _0.displayName;
function oo({
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
function $0({ event: e, eventMetadata: t, open: n, onOpenChange: r }) {
  const [o, s] = q.useState(!1);
  if (q.useEffect(() => {
    var c;
    e && ((c = t[e.id]) != null && c.website) && console.log("Event website URL:", t[e.id].website);
  }, [e, t]), !e) return null;
  const i = t[e.id], a = (c, f = 180) => {
    if (!c || c.length <= f) return c;
    const d = c.substring(0, f), y = d.lastIndexOf("."), w = d.lastIndexOf(" "), g = y > f - 50 ? y + 1 : w;
    return c.substring(0, g > 0 ? g : f).trim();
  }, l = (c) => {
    const f = e.startDate, d = e.endDate || new Date(f.getTime() + 60 * 60 * 1e3), y = (g) => g.toISOString().replace(/-|:|\.\d\d\d/g, ""), w = (g) => g.toISOString();
    switch (c) {
      case "google":
        const g = new URL("https://calendar.google.com/calendar/render");
        return g.searchParams.append("action", "TEMPLATE"), g.searchParams.append("text", e.title), g.searchParams.append("dates", `${y(f)}/${y(d)}`), g.searchParams.append("details", e.description || ""), i != null && i.location && g.searchParams.append("location", i.location), g.toString();
      case "outlook":
        const S = new URL("https://outlook.live.com/calendar/0/deeplink/compose");
        return S.searchParams.append("subject", e.title), S.searchParams.append("body", e.description || ""), S.searchParams.append("startdt", w(f)), S.searchParams.append("enddt", w(d)), i != null && i.location && S.searchParams.append("location", i.location), S.toString();
      case "apple":
        const m = [
          "BEGIN:VCALENDAR",
          "VERSION:2.0",
          "BEGIN:VEVENT",
          `DTSTART:${y(f)}`,
          `DTEND:${y(d)}`,
          `SUMMARY:${e.title}`,
          `DESCRIPTION:${e.description || ""}`,
          i != null && i.location ? `LOCATION:${i.location}` : "",
          "END:VEVENT",
          "END:VCALENDAR"
        ].filter((h) => h).join(`
`);
        return `data:text/calendar;charset=utf8,${encodeURIComponent(m)}`;
    }
  }, u = {
    clubs: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    unbc: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    organizations: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    sports: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
  };
  return /* @__PURE__ */ p.jsx(QT, { open: n, onOpenChange: r, children: /* @__PURE__ */ p.jsxs(O0, { className: "max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 sm:w-full p-4 sm:p-6", children: [
    /* @__PURE__ */ p.jsxs(F0, { children: [
      /* @__PURE__ */ p.jsx(z0, { className: "text-xl text-gray-900 dark:text-gray-100", children: e.title }),
      e.description && /* @__PURE__ */ p.jsxs("div", { className: "mt-2", children: [
        /* @__PURE__ */ p.jsx(B0, { className: `text-gray-600 dark:text-gray-400 leading-relaxed break-words ${o ? "max-h-[40vh] overflow-y-auto pr-2" : ""}`, children: o ? e.description : a(e.description) }),
        e.description.length > 180 && /* @__PURE__ */ p.jsx(
          "button",
          {
            onClick: () => s(!o),
            className: "inline-flex items-center gap-1 mt-3 px-3 py-2 text-sm text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100 hover:bg-blue-50 dark:hover:bg-blue-900/20 active:bg-blue-100 dark:active:bg-blue-900/30 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
            children: o ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
              "Show less",
              /* @__PURE__ */ p.jsx(qv, { className: "h-4 w-4" })
            ] }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
              "Read more",
              /* @__PURE__ */ p.jsx(Dd, { className: "h-4 w-4" })
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "space-y-4 my-4", children: /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
        /* @__PURE__ */ p.jsx(ro, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
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
          /* @__PURE__ */ p.jsx(js, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: i.location })
        ] }),
        i.organization && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(Wa, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: i.organization })
        ] }),
        i.cost && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(nT, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: i.cost })
        ] }),
        i.website && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(rT, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
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
          i.category && /* @__PURE__ */ p.jsx(oo, { className: u[i.category] || "bg-gray-100 text-gray-800", children: i.category.charAt(0).toUpperCase() + i.category.slice(1) }),
          i.registrationRequired && /* @__PURE__ */ p.jsx(oo, { variant: "outline", className: "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300", children: "Registration Required" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsxs(V0, { className: "flex-col sm:flex-col gap-2", children: [
      /* @__PURE__ */ p.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400 mb-2", children: "Add to your calendar:" }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex gap-2 w-full", children: [
        /* @__PURE__ */ p.jsxs(
          Zt,
          {
            variant: "outline",
            className: "flex-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 text-xs sm:text-sm",
            onClick: () => window.open(l("google"), "_blank"),
            children: [
              /* @__PURE__ */ p.jsx(ji, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Google"
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Zt,
          {
            variant: "outline",
            className: "flex-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 text-xs sm:text-sm",
            onClick: () => window.open(l("outlook"), "_blank"),
            children: [
              /* @__PURE__ */ p.jsx(ji, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
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
              const c = l("apple"), f = document.createElement("a");
              f.href = c, f.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, f.click();
            },
            children: [
              /* @__PURE__ */ p.jsx(ji, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Apple"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
const jd = x.createContext({});
function Ld(e) {
  const t = x.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Ga = x.createContext(null), _d = x.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class ZT extends x.Component {
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
function JT({ children: e, isPresent: t }) {
  const n = x.useId(), r = x.useRef(null), o = x.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: s } = x.useContext(_d);
  return x.useInsertionEffect(() => {
    const { width: i, height: a, top: l, left: u } = o.current;
    if (t || !r.current || !i || !a)
      return;
    r.current.dataset.motionPopId = n;
    const c = document.createElement("style");
    return s && (c.nonce = s), document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `), () => {
      document.head.removeChild(c);
    };
  }, [t]), p.jsx(ZT, { isPresent: t, childRef: r, sizeRef: o, children: x.cloneElement(e, { ref: r }) });
}
const eP = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: i }) => {
  const a = Ld(tP), l = x.useId(), u = x.useCallback((f) => {
    a.set(f, !0);
    for (const d of a.values())
      if (!d)
        return;
    r && r();
  }, [a, r]), c = x.useMemo(
    () => ({
      id: l,
      initial: t,
      isPresent: n,
      custom: o,
      onExitComplete: u,
      register: (f) => (a.set(f, !1), () => a.delete(f))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    s ? [Math.random(), u] : [n, u]
  );
  return x.useMemo(() => {
    a.forEach((f, d) => a.set(d, !1));
  }, [n]), x.useEffect(() => {
    !n && !a.size && r && r();
  }, [n]), i === "popLayout" && (e = p.jsx(JT, { isPresent: n, children: e })), p.jsx(Ga.Provider, { value: c, children: e });
};
function tP() {
  return /* @__PURE__ */ new Map();
}
function U0(e = !0) {
  const t = x.useContext(Ga);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t, s = x.useId();
  x.useEffect(() => {
    e && o(s);
  }, [e]);
  const i = x.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, i] : [!0];
}
const pi = (e) => e.key || "";
function Jp(e) {
  const t = [];
  return x.Children.forEach(e, (n) => {
    x.isValidElement(n) && t.push(n);
  }), t;
}
const Id = typeof window < "u", W0 = Id ? x.useLayoutEffect : x.useEffect, eh = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: o = !0, mode: s = "sync", propagate: i = !1 }) => {
  const [a, l] = U0(i), u = x.useMemo(() => Jp(e), [e]), c = i && !a ? [] : u.map(pi), f = x.useRef(!0), d = x.useRef(u), y = Ld(() => /* @__PURE__ */ new Map()), [w, g] = x.useState(u), [S, m] = x.useState(u);
  W0(() => {
    f.current = !1, d.current = u;
    for (let b = 0; b < S.length; b++) {
      const k = pi(S[b]);
      c.includes(k) ? y.delete(k) : y.get(k) !== !0 && y.set(k, !1);
    }
  }, [S, c.length, c.join("-")]);
  const h = [];
  if (u !== w) {
    let b = [...u];
    for (let k = 0; k < S.length; k++) {
      const T = S[k], C = pi(T);
      c.includes(C) || (b.splice(k, 0, T), h.push(T));
    }
    s === "wait" && h.length && (b = h), m(Jp(b)), g(u);
    return;
  }
  const { forceRender: v } = x.useContext(jd);
  return p.jsx(p.Fragment, { children: S.map((b) => {
    const k = pi(b), T = i && !a ? !1 : u === S || c.includes(k), C = () => {
      if (y.has(k))
        y.set(k, !0);
      else
        return;
      let E = !0;
      y.forEach((D) => {
        D || (E = !1);
      }), E && (v == null || v(), m(d.current), i && (l == null || l()), r && r());
    };
    return p.jsx(eP, { isPresent: T, initial: !f.current || n ? void 0 : !1, custom: T ? void 0 : t, presenceAffectsLayout: o, mode: s, onExitComplete: T ? void 0 : C, children: b }, k);
  }) });
}, it = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let H0 = it;
// @__NO_SIDE_EFFECTS__
function Od(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const so = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Jt = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, en = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, nP = {
  useManualTiming: !1
};
function rP(e) {
  let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, o = !1;
  const s = /* @__PURE__ */ new WeakSet();
  let i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function a(u) {
    s.has(u) && (l.schedule(u), e()), u(i);
  }
  const l = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (u, c = !1, f = !1) => {
      const y = f && r ? t : n;
      return c && s.add(u), y.has(u) || y.add(u), u;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (u) => {
      n.delete(u), s.delete(u);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (u) => {
      if (i = u, r) {
        o = !0;
        return;
      }
      r = !0, [t, n] = [n, t], t.forEach(a), t.clear(), r = !1, o && (o = !1, l.process(u));
    }
  };
  return l;
}
const hi = [
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
], oP = 40;
function K0(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = () => n = !0, i = hi.reduce((m, h) => (m[h] = rP(s), m), {}), { read: a, resolveKeyframes: l, update: u, preRender: c, render: f, postRender: d } = i, y = () => {
    const m = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(m - o.timestamp, oP), 1), o.timestamp = m, o.isProcessing = !0, a.process(o), l.process(o), u.process(o), c.process(o), f.process(o), d.process(o), o.isProcessing = !1, n && t && (r = !1, e(y));
  }, w = () => {
    n = !0, r = !0, o.isProcessing || e(y);
  };
  return { schedule: hi.reduce((m, h) => {
    const v = i[h];
    return m[h] = (b, k = !1, T = !1) => (n || w(), v.schedule(b, k, T)), m;
  }, {}), cancel: (m) => {
    for (let h = 0; h < hi.length; h++)
      i[hi[h]].cancel(m);
  }, state: o, steps: i };
}
const { schedule: de, cancel: Vn, state: Le, steps: Ol } = K0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : it, !0), G0 = x.createContext({ strict: !1 }), th = {
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
}, io = {};
for (const e in th)
  io[e] = {
    isEnabled: (t) => th[e].some((n) => !!t[n])
  };
function sP(e) {
  for (const t in e)
    io[t] = {
      ...io[t],
      ...e[t]
    };
}
const iP = /* @__PURE__ */ new Set([
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
function pa(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || iP.has(e);
}
let Y0 = (e) => !pa(e);
function aP(e) {
  e && (Y0 = (t) => t.startsWith("on") ? !pa(t) : e(t));
}
try {
  aP(require("@emotion/is-prop-valid").default);
} catch {
}
function lP(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (Y0(o) || n === !0 && pa(o) || !t && !pa(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function uP(e) {
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
const Ya = x.createContext({});
function bs(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Xa(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Fd = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Vd = ["initial", ...Fd];
function Qa(e) {
  return Xa(e.animate) || Vd.some((t) => bs(e[t]));
}
function X0(e) {
  return !!(Qa(e) || e.variants);
}
function cP(e, t) {
  if (Qa(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || bs(n) ? n : void 0,
      animate: bs(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function dP(e) {
  const { initial: t, animate: n } = cP(e, x.useContext(Ya));
  return x.useMemo(() => ({ initial: t, animate: n }), [nh(t), nh(n)]);
}
function nh(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const fP = Symbol.for("motionComponentSymbol");
function _r(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function pP(e, t, n) {
  return x.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : _r(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const zd = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), hP = "framerAppearId", Q0 = "data-" + zd(hP), { schedule: Bd } = K0(queueMicrotask, !1), q0 = x.createContext({});
function mP(e, t, n, r, o) {
  var s, i;
  const { visualElement: a } = x.useContext(Ya), l = x.useContext(G0), u = x.useContext(Ga), c = x.useContext(_d).reducedMotion, f = x.useRef(null);
  r = r || l.renderer, !f.current && r && (f.current = r(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: u,
    blockInitialAnimation: u ? u.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const d = f.current, y = x.useContext(q0);
  d && !d.projection && o && (d.type === "html" || d.type === "svg") && gP(f.current, n, o, y);
  const w = x.useRef(!1);
  x.useInsertionEffect(() => {
    d && w.current && d.update(n, u);
  });
  const g = n[Q0], S = x.useRef(!!g && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, g)) && ((i = window.MotionHasOptimisedAnimation) === null || i === void 0 ? void 0 : i.call(window, g)));
  return W0(() => {
    d && (w.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), Bd.render(d.render), S.current && d.animationState && d.animationState.animateChanges());
  }), x.useEffect(() => {
    d && (!S.current && d.animationState && d.animationState.animateChanges(), S.current && (queueMicrotask(() => {
      var m;
      (m = window.MotionHandoffMarkAsComplete) === null || m === void 0 || m.call(window, g);
    }), S.current = !1));
  }), d;
}
function gP(e, t, n, r) {
  const { layoutId: o, layout: s, drag: i, dragConstraints: a, layoutScroll: l, layoutRoot: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Z0(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: s,
    alwaysMeasureLayout: !!i || a && _r(a),
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
    layoutRoot: u
  });
}
function Z0(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : Z0(e.parent);
}
function yP({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  var s, i;
  e && sP(e);
  function a(u, c) {
    let f;
    const d = {
      ...x.useContext(_d),
      ...u,
      layoutId: vP(u)
    }, { isStatic: y } = d, w = dP(u), g = r(u, y);
    if (!y && Id) {
      xP();
      const S = wP(d);
      f = S.MeasureLayout, w.visualElement = mP(o, g, d, t, S.ProjectionNode);
    }
    return p.jsxs(Ya.Provider, { value: w, children: [f && w.visualElement ? p.jsx(f, { visualElement: w.visualElement, ...d }) : null, n(o, u, pP(g, w.visualElement, c), g, y, w.visualElement)] });
  }
  a.displayName = `motion.${typeof o == "string" ? o : `create(${(i = (s = o.displayName) !== null && s !== void 0 ? s : o.name) !== null && i !== void 0 ? i : ""})`}`;
  const l = x.forwardRef(a);
  return l[fP] = o, l;
}
function vP({ layoutId: e }) {
  const t = x.useContext(jd).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function xP(e, t) {
  x.useContext(G0).strict;
}
function wP(e) {
  const { drag: t, layout: n } = io;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const SP = [
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
function $d(e) {
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
      !!(SP.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function rh(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Ud(e, t, n, r) {
  if (typeof t == "function") {
    const [o, s] = rh(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, s] = rh(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  return t;
}
const tc = (e) => Array.isArray(e), bP = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), kP = (e) => tc(e) ? e[e.length - 1] || 0 : e, $e = (e) => !!(e && e.getVelocity);
function Li(e) {
  const t = $e(e) ? e.get() : e;
  return bP(t) ? t.toValue() : t;
}
function CP({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, o, s) {
  const i = {
    latestValues: EP(r, o, s, e),
    renderState: t()
  };
  return n && (i.onMount = (a) => n({ props: r, current: a, ...i }), i.onUpdate = (a) => n(a)), i;
}
const J0 = (e) => (t, n) => {
  const r = x.useContext(Ya), o = x.useContext(Ga), s = () => CP(e, t, r, o);
  return n ? s() : Ld(s);
};
function EP(e, t, n, r) {
  const o = {}, s = r(e, {});
  for (const d in s)
    o[d] = Li(s[d]);
  let { initial: i, animate: a } = e;
  const l = Qa(e), u = X0(e);
  t && u && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || i === !1;
  const f = c ? a : i;
  if (f && typeof f != "boolean" && !Xa(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let y = 0; y < d.length; y++) {
      const w = Ud(e, d[y]);
      if (w) {
        const { transitionEnd: g, transition: S, ...m } = w;
        for (const h in m) {
          let v = m[h];
          if (Array.isArray(v)) {
            const b = c ? v.length - 1 : 0;
            v = v[b];
          }
          v !== null && (o[h] = v);
        }
        for (const h in g)
          o[h] = g[h];
      }
    }
  }
  return o;
}
const vo = [
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
], vr = new Set(vo), ex = (e) => (t) => typeof t == "string" && t.startsWith(e), tx = /* @__PURE__ */ ex("--"), TP = /* @__PURE__ */ ex("var(--"), Wd = (e) => TP(e) ? PP.test(e.split("/*")[0].trim()) : !1, PP = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, nx = (e, t) => t && typeof e == "number" ? t.transform(e) : e, ln = (e, t, n) => n > t ? t : n < e ? e : n, xo = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, ks = {
  ...xo,
  transform: (e) => ln(0, 1, e)
}, mi = {
  ...xo,
  default: 1
}, Is = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), yn = /* @__PURE__ */ Is("deg"), Bt = /* @__PURE__ */ Is("%"), $ = /* @__PURE__ */ Is("px"), DP = /* @__PURE__ */ Is("vh"), NP = /* @__PURE__ */ Is("vw"), oh = {
  ...Bt,
  parse: (e) => Bt.parse(e) / 100,
  transform: (e) => Bt.transform(e * 100)
}, RP = {
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
}, AP = {
  rotate: yn,
  rotateX: yn,
  rotateY: yn,
  rotateZ: yn,
  scale: mi,
  scaleX: mi,
  scaleY: mi,
  scaleZ: mi,
  skew: yn,
  skewX: yn,
  skewY: yn,
  distance: $,
  translateX: $,
  translateY: $,
  translateZ: $,
  x: $,
  y: $,
  z: $,
  perspective: $,
  transformPerspective: $,
  opacity: ks,
  originX: oh,
  originY: oh,
  originZ: $
}, sh = {
  ...xo,
  transform: Math.round
}, Hd = {
  ...RP,
  ...AP,
  zIndex: sh,
  size: $,
  // SVG
  fillOpacity: ks,
  strokeOpacity: ks,
  numOctaves: sh
}, MP = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, jP = vo.length;
function LP(e, t, n) {
  let r = "", o = !0;
  for (let s = 0; s < jP; s++) {
    const i = vo[s], a = e[i];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (i.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = nx(a, Hd[i]);
      if (!l) {
        o = !1;
        const c = MP[i] || i;
        r += `${c}(${u}) `;
      }
      n && (t[i] = u);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function Kd(e, t, n) {
  const { style: r, vars: o, transformOrigin: s } = e;
  let i = !1, a = !1;
  for (const l in t) {
    const u = t[l];
    if (vr.has(l)) {
      i = !0;
      continue;
    } else if (tx(l)) {
      o[l] = u;
      continue;
    } else {
      const c = nx(u, Hd[l]);
      l.startsWith("origin") ? (a = !0, s[l] = c) : r[l] = c;
    }
  }
  if (t.transform || (i || n ? r.transform = LP(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const _P = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, IP = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function OP(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const s = o ? _P : IP;
  e[s.offset] = $.transform(-r);
  const i = $.transform(t), a = $.transform(n);
  e[s.array] = `${i} ${a}`;
}
function ih(e, t, n) {
  return typeof e == "string" ? e : $.transform(t + n * e);
}
function FP(e, t, n) {
  const r = ih(t, e.x, e.width), o = ih(n, e.y, e.height);
  return `${r} ${o}`;
}
function Gd(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: o,
  originY: s,
  pathLength: i,
  pathSpacing: a = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...u
}, c, f) {
  if (Kd(e, u, f), c) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: d, style: y, dimensions: w } = e;
  d.transform && (w && (y.transform = d.transform), delete d.transform), w && (o !== void 0 || s !== void 0 || y.transform) && (y.transformOrigin = FP(w, o !== void 0 ? o : 0.5, s !== void 0 ? s : 0.5)), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && OP(d, i, a, l, !1);
}
const Yd = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), rx = () => ({
  ...Yd(),
  attrs: {}
}), Xd = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function ox(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
const sx = /* @__PURE__ */ new Set([
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
function ix(e, t, n, r) {
  ox(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(sx.has(o) ? o : zd(o), t.attrs[o]);
}
const ha = {};
function VP(e) {
  Object.assign(ha, e);
}
function ax(e, { layout: t, layoutId: n }) {
  return vr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!ha[e] || e === "opacity");
}
function Qd(e, t, n) {
  var r;
  const { style: o } = e, s = {};
  for (const i in o)
    ($e(o[i]) || t.style && $e(t.style[i]) || ax(i, e) || ((r = n == null ? void 0 : n.getValue(i)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[i] = o[i]);
  return s;
}
function lx(e, t, n) {
  const r = Qd(e, t, n);
  for (const o in e)
    if ($e(e[o]) || $e(t[o])) {
      const s = vo.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[s] = e[o];
    }
  return r;
}
function zP(e, t) {
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
const ah = ["x", "y", "width", "height", "cx", "cy", "r"], BP = {
  useVisualState: J0({
    scrapeMotionValuesFromProps: lx,
    createRenderState: rx,
    onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: o }) => {
      if (!n)
        return;
      let s = !!e.drag;
      if (!s) {
        for (const a in o)
          if (vr.has(a)) {
            s = !0;
            break;
          }
      }
      if (!s)
        return;
      let i = !t;
      if (t)
        for (let a = 0; a < ah.length; a++) {
          const l = ah[a];
          e[l] !== t[l] && (i = !0);
        }
      i && de.read(() => {
        zP(n, r), de.render(() => {
          Gd(r, o, Xd(n.tagName), e.transformTemplate), ix(n, r);
        });
      });
    }
  })
}, $P = {
  useVisualState: J0({
    scrapeMotionValuesFromProps: Qd,
    createRenderState: Yd
  })
};
function ux(e, t, n) {
  for (const r in t)
    !$e(t[r]) && !ax(r, n) && (e[r] = t[r]);
}
function UP({ transformTemplate: e }, t) {
  return x.useMemo(() => {
    const n = Yd();
    return Kd(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function WP(e, t) {
  const n = e.style || {}, r = {};
  return ux(r, n, e), Object.assign(r, UP(e, t)), r;
}
function HP(e, t) {
  const n = {}, r = WP(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function KP(e, t, n, r) {
  const o = x.useMemo(() => {
    const s = rx();
    return Gd(s, t, Xd(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    ux(s, e.style, e), o.style = { ...s, ...o.style };
  }
  return o;
}
function GP(e = !1) {
  return (n, r, o, { latestValues: s }, i) => {
    const l = ($d(n) ? KP : HP)(r, s, i, n), u = lP(r, typeof n == "string", e), c = n !== x.Fragment ? { ...u, ...l, ref: o } : {}, { children: f } = r, d = x.useMemo(() => $e(f) ? f.get() : f, [f]);
    return x.createElement(n, {
      ...c,
      children: d
    });
  };
}
function YP(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const i = {
      ...$d(r) ? BP : $P,
      preloadedFeatures: e,
      useRender: GP(o),
      createVisualElement: t,
      Component: r
    };
    return yP(i);
  };
}
function cx(e, t) {
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
function qa(e, t, n) {
  const r = e.getProps();
  return Ud(r, t, n !== void 0 ? n : r.custom, e);
}
const XP = /* @__PURE__ */ Od(() => window.ScrollTimeline !== void 0);
class QP {
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
      if (XP() && o.attachTimeline)
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
class qP extends QP {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function qd(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const nc = 2e4;
function dx(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < nc; )
    t += n, r = e.next(t);
  return t >= nc ? 1 / 0 : t;
}
function Zd(e) {
  return typeof e == "function";
}
function lh(e, t) {
  e.timeline = t, e.onfinish = null;
}
const Jd = (e) => Array.isArray(e) && typeof e[0] == "number", ZP = {
  linearEasing: void 0
};
function JP(e, t) {
  const n = /* @__PURE__ */ Od(e);
  return () => {
    var r;
    return (r = ZP[t]) !== null && r !== void 0 ? r : n();
  };
}
const ma = /* @__PURE__ */ JP(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), fx = (e, t, n = 10) => {
  let r = "";
  const o = Math.max(Math.round(t / n), 2);
  for (let s = 0; s < o; s++)
    r += e(/* @__PURE__ */ so(0, o - 1, s)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function px(e) {
  return !!(typeof e == "function" && ma() || !e || typeof e == "string" && (e in rc || ma()) || Jd(e) || Array.isArray(e) && e.every(px));
}
const Fo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, rc = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Fo([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Fo([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Fo([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Fo([0.33, 1.53, 0.69, 0.99])
};
function hx(e, t) {
  if (e)
    return typeof e == "function" && ma() ? fx(e, t) : Jd(e) ? Fo(e) : Array.isArray(e) ? e.map((n) => hx(n, t) || rc.easeOut) : rc[e];
}
const kt = {
  x: !1,
  y: !1
};
function mx() {
  return kt.x || kt.y;
}
function eD(e, t, n) {
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
function gx(e, t) {
  const n = eD(e), r = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, o, () => r.abort()];
}
function uh(e) {
  return (t) => {
    t.pointerType === "touch" || mx() || e(t);
  };
}
function tD(e, t, n = {}) {
  const [r, o, s] = gx(e, n), i = uh((a) => {
    const { target: l } = a, u = t(a);
    if (typeof u != "function" || !l)
      return;
    const c = uh((f) => {
      u(f), l.removeEventListener("pointerleave", c);
    });
    l.addEventListener("pointerleave", c, o);
  });
  return r.forEach((a) => {
    a.addEventListener("pointerenter", i, o);
  }), s;
}
const yx = (e, t) => t ? e === t ? !0 : yx(e, t.parentElement) : !1, ef = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, nD = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function rD(e) {
  return nD.has(e.tagName) || e.tabIndex !== -1;
}
const Vo = /* @__PURE__ */ new WeakSet();
function ch(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Fl(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const oD = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = ch(() => {
    if (Vo.has(n))
      return;
    Fl(n, "down");
    const o = ch(() => {
      Fl(n, "up");
    }), s = () => Fl(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function dh(e) {
  return ef(e) && !mx();
}
function sD(e, t, n = {}) {
  const [r, o, s] = gx(e, n), i = (a) => {
    const l = a.currentTarget;
    if (!dh(a) || Vo.has(l))
      return;
    Vo.add(l);
    const u = t(a), c = (y, w) => {
      window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", d), !(!dh(y) || !Vo.has(l)) && (Vo.delete(l), typeof u == "function" && u(y, { success: w }));
    }, f = (y) => {
      c(y, n.useGlobalTarget || yx(l, y.target));
    }, d = (y) => {
      c(y, !1);
    };
    window.addEventListener("pointerup", f, o), window.addEventListener("pointercancel", d, o);
  };
  return r.forEach((a) => {
    !rD(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", i, o), a.addEventListener("focus", (u) => oD(u, o), o);
  }), s;
}
function iD(e) {
  return e === "x" || e === "y" ? kt[e] ? null : (kt[e] = !0, () => {
    kt[e] = !1;
  }) : kt.x || kt.y ? null : (kt.x = kt.y = !0, () => {
    kt.x = kt.y = !1;
  });
}
const vx = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...vo
]);
let _i;
function aD() {
  _i = void 0;
}
const $t = {
  now: () => (_i === void 0 && $t.set(Le.isProcessing || nP.useManualTiming ? Le.timestamp : performance.now()), _i),
  set: (e) => {
    _i = e, queueMicrotask(aD);
  }
};
function tf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function nf(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class rf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return tf(this.subscriptions, t), () => nf(this.subscriptions, t);
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
function xx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const fh = 30, lD = (e) => !isNaN(parseFloat(e));
class uD {
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
    this.current = t, this.updatedAt = $t.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = lD(this.current));
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
    this.events[t] || (this.events[t] = new rf());
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
    const t = $t.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > fh)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, fh);
    return xx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function Cs(e, t) {
  return new uD(e, t);
}
function cD(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Cs(n));
}
function dD(e, t) {
  const n = qa(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const i in s) {
    const a = kP(s[i]);
    cD(e, i, a);
  }
}
function fD(e) {
  return !!($e(e) && e.add);
}
function oc(e, t) {
  const n = e.getValue("willChange");
  if (fD(n))
    return n.add(t);
}
function wx(e) {
  return e.props[Q0];
}
const Sx = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, pD = 1e-7, hD = 12;
function mD(e, t, n, r, o) {
  let s, i, a = 0;
  do
    i = t + (n - t) / 2, s = Sx(i, r, o) - e, s > 0 ? n = i : t = i;
  while (Math.abs(s) > pD && ++a < hD);
  return i;
}
function Os(e, t, n, r) {
  if (e === t && n === r)
    return it;
  const o = (s) => mD(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : Sx(o(s), t, r);
}
const bx = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, kx = (e) => (t) => 1 - e(1 - t), Cx = /* @__PURE__ */ Os(0.33, 1.53, 0.69, 0.99), of = /* @__PURE__ */ kx(Cx), Ex = /* @__PURE__ */ bx(of), Tx = (e) => (e *= 2) < 1 ? 0.5 * of(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), sf = (e) => 1 - Math.sin(Math.acos(e)), Px = kx(sf), Dx = bx(sf), Nx = (e) => /^0[^.\s]+$/u.test(e);
function gD(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Nx(e) : !0;
}
const Qo = (e) => Math.round(e * 1e5) / 1e5, af = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function yD(e) {
  return e == null;
}
const vD = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, lf = (e, t) => (n) => !!(typeof n == "string" && vD.test(n) && n.startsWith(e) || t && !yD(n) && Object.prototype.hasOwnProperty.call(n, t)), Rx = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, s, i, a] = r.match(af);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, xD = (e) => ln(0, 255, e), Vl = {
  ...xo,
  transform: (e) => Math.round(xD(e))
}, rr = {
  test: /* @__PURE__ */ lf("rgb", "red"),
  parse: /* @__PURE__ */ Rx("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Vl.transform(e) + ", " + Vl.transform(t) + ", " + Vl.transform(n) + ", " + Qo(ks.transform(r)) + ")"
};
function wD(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const sc = {
  test: /* @__PURE__ */ lf("#"),
  parse: wD,
  transform: rr.transform
}, Ir = {
  test: /* @__PURE__ */ lf("hsl", "hue"),
  parse: /* @__PURE__ */ Rx("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Bt.transform(Qo(t)) + ", " + Bt.transform(Qo(n)) + ", " + Qo(ks.transform(r)) + ")"
}, ze = {
  test: (e) => rr.test(e) || sc.test(e) || Ir.test(e),
  parse: (e) => rr.test(e) ? rr.parse(e) : Ir.test(e) ? Ir.parse(e) : sc.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? rr.transform(e) : Ir.transform(e)
}, SD = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function bD(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(af)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(SD)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Ax = "number", Mx = "color", kD = "var", CD = "var(", ph = "${}", ED = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Es(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let s = 0;
  const a = t.replace(ED, (l) => (ze.test(l) ? (r.color.push(s), o.push(Mx), n.push(ze.parse(l))) : l.startsWith(CD) ? (r.var.push(s), o.push(kD), n.push(l)) : (r.number.push(s), o.push(Ax), n.push(parseFloat(l))), ++s, ph)).split(ph);
  return { values: n, split: a, indexes: r, types: o };
}
function jx(e) {
  return Es(e).values;
}
function Lx(e) {
  const { split: t, types: n } = Es(e), r = t.length;
  return (o) => {
    let s = "";
    for (let i = 0; i < r; i++)
      if (s += t[i], o[i] !== void 0) {
        const a = n[i];
        a === Ax ? s += Qo(o[i]) : a === Mx ? s += ze.transform(o[i]) : s += o[i];
      }
    return s;
  };
}
const TD = (e) => typeof e == "number" ? 0 : e;
function PD(e) {
  const t = jx(e);
  return Lx(e)(t.map(TD));
}
const zn = {
  test: bD,
  parse: jx,
  createTransformer: Lx,
  getAnimatableNone: PD
}, DD = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function ND(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(af) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let s = DD.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + o + ")";
}
const RD = /\b([a-z-]*)\(.*?\)/gu, ic = {
  ...zn,
  getAnimatableNone: (e) => {
    const t = e.match(RD);
    return t ? t.map(ND).join(" ") : e;
  }
}, AD = {
  ...Hd,
  // Color props
  color: ze,
  backgroundColor: ze,
  outlineColor: ze,
  fill: ze,
  stroke: ze,
  // Border props
  borderColor: ze,
  borderTopColor: ze,
  borderRightColor: ze,
  borderBottomColor: ze,
  borderLeftColor: ze,
  filter: ic,
  WebkitFilter: ic
}, uf = (e) => AD[e];
function _x(e, t) {
  let n = uf(e);
  return n !== ic && (n = zn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const MD = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function jD(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const s = e[r];
    typeof s == "string" && !MD.has(s) && Es(s).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const s of t)
      e[s] = _x(n, o);
}
const hh = (e) => e === xo || e === $, mh = (e, t) => parseFloat(e.split(", ")[t]), gh = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/u);
  if (o)
    return mh(o[1], t);
  {
    const s = r.match(/^matrix\((.+)\)$/u);
    return s ? mh(s[1], e) : 0;
  }
}, LD = /* @__PURE__ */ new Set(["x", "y", "z"]), _D = vo.filter((e) => !LD.has(e));
function ID(e) {
  const t = [];
  return _D.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const ao = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: gh(4, 13),
  y: gh(5, 14)
};
ao.translateX = ao.x;
ao.translateY = ao.y;
const ir = /* @__PURE__ */ new Set();
let ac = !1, lc = !1;
function Ix() {
  if (lc) {
    const e = Array.from(ir).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = ID(r);
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
  lc = !1, ac = !1, ir.forEach((e) => e.complete()), ir.clear();
}
function Ox() {
  ir.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (lc = !0);
  });
}
function OD() {
  Ox(), Ix();
}
class cf {
  constructor(t, n, r, o, s, i = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = s, this.isAsync = i;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (ir.add(this), ac || (ac = !0, de.read(Ox), de.resolveKeyframes(Ix))) : (this.readKeyframes(), this.complete());
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), ir.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, ir.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Fx = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), FD = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function VD(e) {
  const t = FD.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function Vx(e, t, n = 1) {
  const [r, o] = VD(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const i = s.trim();
    return Fx(i) ? parseFloat(i) : i;
  }
  return Wd(o) ? Vx(o, t, n + 1) : o;
}
const zx = (e) => (t) => t.test(e), zD = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Bx = [xo, $, Bt, yn, NP, DP, zD], yh = (e) => Bx.find(zx(e));
class $x extends cf {
  constructor(t, n, r, o, s) {
    super(t, n, r, o, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && (u = u.trim(), Wd(u))) {
        const c = Vx(u, n.current);
        c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !vx.has(r) || t.length !== 2)
      return;
    const [o, s] = t, i = yh(o), a = yh(s);
    if (i !== a)
      if (hh(i) && hh(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let o = 0; o < t.length; o++)
      gD(t[o]) && r.push(o);
    r.length && jD(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ao[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
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
    o[i] = ao[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, u]) => {
      n.getValue(l).set(u);
    }), this.resolveNoneKeyframes();
  }
}
const vh = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(zn.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function BD(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function $D(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const s = e[e.length - 1], i = vh(o, t), a = vh(s, t);
  return !i || !a ? !1 : BD(e) || (n === "spring" || Zd(n)) && r;
}
const UD = (e) => e !== null;
function Za(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(UD), s = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !s || r === void 0 ? o[s] : r;
}
const WD = 40;
class Ux {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > WD ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && OD(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = $t.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: o, velocity: s, delay: i, onComplete: a, onUpdate: l, isGenerator: u } = this.options;
    if (!u && !$D(t, r, o, s))
      if (i)
        this.options.duration = 0;
      else {
        l && l(Za(t, this.options, n)), a && a(), this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: n,
      ...c
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
const me = (e, t, n) => e + (t - e) * n;
function zl(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function HD({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, s = 0, i = 0;
  if (!t)
    o = s = i = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    o = zl(l, a, e + 1 / 3), s = zl(l, a, e), i = zl(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(s * 255),
    blue: Math.round(i * 255),
    alpha: r
  };
}
function ga(e, t) {
  return (n) => n > 0 ? t : e;
}
const Bl = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, KD = [sc, rr, Ir], GD = (e) => KD.find((t) => t.test(e));
function xh(e) {
  const t = GD(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === Ir && (n = HD(n)), n;
}
const wh = (e, t) => {
  const n = xh(e), r = xh(t);
  if (!n || !r)
    return ga(e, t);
  const o = { ...n };
  return (s) => (o.red = Bl(n.red, r.red, s), o.green = Bl(n.green, r.green, s), o.blue = Bl(n.blue, r.blue, s), o.alpha = me(n.alpha, r.alpha, s), rr.transform(o));
}, YD = (e, t) => (n) => t(e(n)), Fs = (...e) => e.reduce(YD), uc = /* @__PURE__ */ new Set(["none", "hidden"]);
function XD(e, t) {
  return uc.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function QD(e, t) {
  return (n) => me(e, t, n);
}
function df(e) {
  return typeof e == "number" ? QD : typeof e == "string" ? Wd(e) ? ga : ze.test(e) ? wh : JD : Array.isArray(e) ? Wx : typeof e == "object" ? ze.test(e) ? wh : qD : ga;
}
function Wx(e, t) {
  const n = [...e], r = n.length, o = e.map((s, i) => df(s)(s, t[i]));
  return (s) => {
    for (let i = 0; i < r; i++)
      n[i] = o[i](s);
    return n;
  };
}
function qD(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = df(e[o])(e[o], t[o]));
  return (o) => {
    for (const s in r)
      n[s] = r[s](o);
    return n;
  };
}
function ZD(e, t) {
  var n;
  const r = [], o = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const i = t.types[s], a = e.indexes[i][o[i]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    r[s] = l, o[i]++;
  }
  return r;
}
const JD = (e, t) => {
  const n = zn.createTransformer(t), r = Es(e), o = Es(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? uc.has(e) && !o.values.length || uc.has(t) && !r.values.length ? XD(e, t) : Fs(Wx(ZD(r, o), o.values), n) : ga(e, t);
};
function Hx(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? me(e, t, n) : df(e)(e, t);
}
const eN = 5;
function Kx(e, t, n) {
  const r = Math.max(t - eN, 0);
  return xx(n - e(r), t - r);
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
}, $l = 1e-3;
function tN({ duration: e = xe.duration, bounce: t = xe.bounce, velocity: n = xe.velocity, mass: r = xe.mass }) {
  let o, s, i = 1 - t;
  i = ln(xe.minDamping, xe.maxDamping, i), e = ln(xe.minDuration, xe.maxDuration, /* @__PURE__ */ en(e)), i < 1 ? (o = (u) => {
    const c = u * i, f = c * e, d = c - n, y = cc(u, i), w = Math.exp(-f);
    return $l - d / y * w;
  }, s = (u) => {
    const f = u * i * e, d = f * n + n, y = Math.pow(i, 2) * Math.pow(u, 2) * e, w = Math.exp(-f), g = cc(Math.pow(u, 2), i);
    return (-o(u) + $l > 0 ? -1 : 1) * ((d - y) * w) / g;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), f = (u - n) * e + 1;
    return -$l + c * f;
  }, s = (u) => {
    const c = Math.exp(-u * e), f = (n - u) * (e * e);
    return c * f;
  });
  const a = 5 / e, l = rN(o, s, a);
  if (e = /* @__PURE__ */ Jt(e), isNaN(l))
    return {
      stiffness: xe.stiffness,
      damping: xe.damping,
      duration: e
    };
  {
    const u = Math.pow(l, 2) * r;
    return {
      stiffness: u,
      damping: i * 2 * Math.sqrt(r * u),
      duration: e
    };
  }
}
const nN = 12;
function rN(e, t, n) {
  let r = n;
  for (let o = 1; o < nN; o++)
    r = r - e(r) / t(r);
  return r;
}
function cc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const oN = ["duration", "bounce"], sN = ["stiffness", "damping", "mass"];
function Sh(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function iN(e) {
  let t = {
    velocity: xe.velocity,
    stiffness: xe.stiffness,
    damping: xe.damping,
    mass: xe.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Sh(e, sN) && Sh(e, oN))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, s = 2 * ln(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: xe.mass,
        stiffness: o,
        damping: s
      };
    } else {
      const n = tN(e);
      t = {
        ...t,
        ...n,
        mass: xe.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Gx(e = xe.visualDuration, t = xe.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: o } = n;
  const s = n.keyframes[0], i = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: s }, { stiffness: l, damping: u, mass: c, duration: f, velocity: d, isResolvedFromDuration: y } = iN({
    ...n,
    velocity: -/* @__PURE__ */ en(n.velocity || 0)
  }), w = d || 0, g = u / (2 * Math.sqrt(l * c)), S = i - s, m = /* @__PURE__ */ en(Math.sqrt(l / c)), h = Math.abs(S) < 5;
  r || (r = h ? xe.restSpeed.granular : xe.restSpeed.default), o || (o = h ? xe.restDelta.granular : xe.restDelta.default);
  let v;
  if (g < 1) {
    const k = cc(m, g);
    v = (T) => {
      const C = Math.exp(-g * m * T);
      return i - C * ((w + g * m * S) / k * Math.sin(k * T) + S * Math.cos(k * T));
    };
  } else if (g === 1)
    v = (k) => i - Math.exp(-m * k) * (S + (w + m * S) * k);
  else {
    const k = m * Math.sqrt(g * g - 1);
    v = (T) => {
      const C = Math.exp(-g * m * T), E = Math.min(k * T, 300);
      return i - C * ((w + g * m * S) * Math.sinh(E) + k * S * Math.cosh(E)) / k;
    };
  }
  const b = {
    calculatedDuration: y && f || null,
    next: (k) => {
      const T = v(k);
      if (y)
        a.done = k >= f;
      else {
        let C = 0;
        g < 1 && (C = k === 0 ? /* @__PURE__ */ Jt(w) : Kx(v, k, T));
        const E = Math.abs(C) <= r, D = Math.abs(i - T) <= o;
        a.done = E && D;
      }
      return a.value = a.done ? i : T, a;
    },
    toString: () => {
      const k = Math.min(dx(b), nc), T = fx((C) => b.next(k * C).value, k, 30);
      return k + "ms " + T;
    }
  };
  return b;
}
function bh({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: s = 500, modifyTarget: i, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const f = e[0], d = {
    done: !1,
    value: f
  }, y = (E) => a !== void 0 && E < a || l !== void 0 && E > l, w = (E) => a === void 0 ? l : l === void 0 || Math.abs(a - E) < Math.abs(l - E) ? a : l;
  let g = n * t;
  const S = f + g, m = i === void 0 ? S : i(S);
  m !== S && (g = m - f);
  const h = (E) => -g * Math.exp(-E / r), v = (E) => m + h(E), b = (E) => {
    const D = h(E), N = v(E);
    d.done = Math.abs(D) <= u, d.value = d.done ? m : N;
  };
  let k, T;
  const C = (E) => {
    y(d.value) && (k = E, T = Gx({
      keyframes: [d.value, w(d.value)],
      velocity: Kx(v, E, d.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: s,
      restDelta: u,
      restSpeed: c
    }));
  };
  return C(0), {
    calculatedDuration: null,
    next: (E) => {
      let D = !1;
      return !T && k === void 0 && (D = !0, b(E), C(E)), k !== void 0 && E >= k ? T.next(E - k) : (!D && b(E), d);
    }
  };
}
const aN = /* @__PURE__ */ Os(0.42, 0, 1, 1), lN = /* @__PURE__ */ Os(0, 0, 0.58, 1), Yx = /* @__PURE__ */ Os(0.42, 0, 0.58, 1), uN = (e) => Array.isArray(e) && typeof e[0] != "number", cN = {
  linear: it,
  easeIn: aN,
  easeInOut: Yx,
  easeOut: lN,
  circIn: sf,
  circInOut: Dx,
  circOut: Px,
  backIn: of,
  backInOut: Ex,
  backOut: Cx,
  anticipate: Tx
}, kh = (e) => {
  if (Jd(e)) {
    H0(e.length === 4);
    const [t, n, r, o] = e;
    return Os(t, n, r, o);
  } else if (typeof e == "string")
    return cN[e];
  return e;
};
function dN(e, t, n) {
  const r = [], o = n || Hx, s = e.length - 1;
  for (let i = 0; i < s; i++) {
    let a = o(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] || it : t;
      a = Fs(l, a);
    }
    r.push(a);
  }
  return r;
}
function fN(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const s = e.length;
  if (H0(s === t.length), s === 1)
    return () => t[0];
  if (s === 2 && t[0] === t[1])
    return () => t[1];
  const i = e[0] === e[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = dN(t, r, o), l = a.length, u = (c) => {
    if (i && c < e[0])
      return t[0];
    let f = 0;
    if (l > 1)
      for (; f < e.length - 2 && !(c < e[f + 1]); f++)
        ;
    const d = /* @__PURE__ */ so(e[f], e[f + 1], c);
    return a[f](d);
  };
  return n ? (c) => u(ln(e[0], e[s - 1], c)) : u;
}
function pN(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ so(0, t, r);
    e.push(me(n, 1, o));
  }
}
function hN(e) {
  const t = [0];
  return pN(t, e.length - 1), t;
}
function mN(e, t) {
  return e.map((n) => n * t);
}
function gN(e, t) {
  return e.map(() => t || Yx).splice(0, e.length - 1);
}
function ya({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = uN(r) ? r.map(kh) : kh(r), s = {
    done: !1,
    value: t[0]
  }, i = mN(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : hN(t),
    e
  ), a = fN(i, t, {
    ease: Array.isArray(o) ? o : gN(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (s.value = a(l), s.done = l >= e, s)
  };
}
const yN = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => de.update(t, !0),
    stop: () => Vn(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Le.isProcessing ? Le.timestamp : $t.now()
  };
}, vN = {
  decay: bh,
  inertia: bh,
  tween: ya,
  keyframes: ya,
  spring: Gx
}, xN = (e) => e / 100;
class ff extends Ux {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options, i = (o == null ? void 0 : o.KeyframeResolver) || cf, a = (l, u) => this.onKeyframesResolved(l, u);
    this.resolver = new i(s, a, n, r, o), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: s, velocity: i = 0 } = this.options, a = Zd(n) ? n : vN[n] || ya;
    let l, u;
    a !== ya && typeof t[0] != "number" && (l = Fs(xN, Hx(t[0], t[1])), t = [0, 100]);
    const c = a({ ...this.options, keyframes: t });
    s === "mirror" && (u = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -i
    })), c.calculatedDuration === null && (c.calculatedDuration = dx(c));
    const { calculatedDuration: f } = c, d = f + o, y = d * (r + 1) - o;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: y
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: E } = this.options;
      return { done: !0, value: E[E.length - 1] };
    }
    const { finalKeyframe: o, generator: s, mirroredGenerator: i, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: u, totalDuration: c, resolvedDuration: f } = r;
    if (this.startTime === null)
      return s.next(0);
    const { delay: d, repeat: y, repeatType: w, repeatDelay: g, onUpdate: S } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const m = this.currentTime - d * (this.speed >= 0 ? 1 : -1), h = this.speed >= 0 ? m < 0 : m > c;
    this.currentTime = Math.max(m, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let v = this.currentTime, b = s;
    if (y) {
      const E = Math.min(this.currentTime, c) / f;
      let D = Math.floor(E), N = E % 1;
      !N && E >= 1 && (N = 1), N === 1 && D--, D = Math.min(D, y + 1), !!(D % 2) && (w === "reverse" ? (N = 1 - N, g && (N -= g / f)) : w === "mirror" && (b = i)), v = ln(0, 1, N) * f;
    }
    const k = h ? { done: !1, value: l[0] } : b.next(v);
    a && (k.value = a(k.value));
    let { done: T } = k;
    !h && u !== null && (T = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const C = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
    return C && o !== void 0 && (k.value = Za(l, this.options, o)), S && S(k.value), C && this.finish(), k;
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
    const { driver: t = yN, onPlay: n, startTime: r } = this.options;
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
const wN = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function SN(e, t, n, { delay: r = 0, duration: o = 300, repeat: s = 0, repeatType: i = "loop", ease: a = "easeInOut", times: l } = {}) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = hx(a, o);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: r,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const bN = /* @__PURE__ */ Od(() => Object.hasOwnProperty.call(Element.prototype, "animate")), va = 10, kN = 2e4;
function CN(e) {
  return Zd(e.type) || e.type === "spring" || !px(e.ease);
}
function EN(e, t) {
  const n = new ff({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let s = 0;
  for (; !r.done && s < kN; )
    r = n.sample(s), o.push(r.value), s += va;
  return {
    times: void 0,
    keyframes: o,
    duration: s - va,
    ease: "linear"
  };
}
const Xx = {
  anticipate: Tx,
  backInOut: Ex,
  circInOut: Dx
};
function TN(e) {
  return e in Xx;
}
class Ch extends Ux {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options;
    this.resolver = new $x(s, (i, a) => this.onKeyframesResolved(i, a), n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: r = 300, times: o, ease: s, type: i, motionValue: a, name: l, startTime: u } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof s == "string" && ma() && TN(s) && (s = Xx[s]), CN(this.options)) {
      const { onComplete: f, onUpdate: d, motionValue: y, element: w, ...g } = this.options, S = EN(t, g);
      t = S.keyframes, t.length === 1 && (t[1] = t[0]), r = S.duration, o = S.times, s = S.ease, i = "keyframes";
    }
    const c = SN(a.owner.current, l, t, { ...this.options, duration: r, times: o, ease: s });
    return c.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (lh(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
      const { onComplete: f } = this.options;
      a.set(Za(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: c,
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
        return it;
      const { animation: r } = n;
      lh(r, t);
    }
    return it;
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
      const { motionValue: u, onUpdate: c, onComplete: f, element: d, ...y } = this.options, w = new ff({
        ...y,
        keyframes: r,
        duration: o,
        type: s,
        ease: i,
        times: a,
        isGenerator: !0
      }), g = /* @__PURE__ */ Jt(this.time);
      u.setWithVelocity(w.sample(g - va).value, w.sample(g).value, va);
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
    const { onUpdate: l, transformTemplate: u } = n.owner.getProps();
    return bN() && r && wN.has(r) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !u && !o && s !== "mirror" && i !== 0 && a !== "inertia";
  }
}
const PN = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, DN = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), NN = {
  type: "keyframes",
  duration: 0.8
}, RN = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, AN = (e, { keyframes: t }) => t.length > 2 ? NN : vr.has(e) ? e.startsWith("scale") ? DN(t[1]) : PN : RN;
function MN({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const pf = (e, t, n, r = {}, o, s) => (i) => {
  const a = qd(r, e) || {}, l = a.delay || r.delay || 0;
  let { elapsed: u = 0 } = r;
  u = u - /* @__PURE__ */ Jt(l);
  let c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -u,
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
  MN(a) || (c = {
    ...c,
    ...AN(e, c)
  }), c.duration && (c.duration = /* @__PURE__ */ Jt(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ Jt(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let f = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (f = !0)), f && !s && t.get() !== void 0) {
    const d = Za(c.keyframes, a);
    if (d !== void 0)
      return de.update(() => {
        c.onUpdate(d), c.onComplete();
      }), new qP([]);
  }
  return !s && Ch.supports(c) ? new Ch(c) : new ff(c);
};
function jN({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Qx(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var s;
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (i = r);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const f in l) {
    const d = e.getValue(f, (s = e.latestValues[f]) !== null && s !== void 0 ? s : null), y = l[f];
    if (y === void 0 || c && jN(c, f))
      continue;
    const w = {
      delay: n,
      ...qd(i || {}, f)
    };
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const m = wx(e);
      if (m) {
        const h = window.MotionHandoffAnimation(m, f, de);
        h !== null && (w.startTime = h, g = !0);
      }
    }
    oc(e, f), d.start(pf(f, d, y, e.shouldReduceMotion && vx.has(f) ? { type: !1 } : w, e, g));
    const S = d.animation;
    S && u.push(S);
  }
  return a && Promise.all(u).then(() => {
    de.update(() => {
      a && dD(e, a);
    });
  }), u;
}
function dc(e, t, n = {}) {
  var r;
  const o = qa(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = o ? () => Promise.all(Qx(e, o, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: f, staggerDirection: d } = s;
    return LN(e, t, c + u, f, d, n);
  } : () => Promise.resolve(), { when: l } = s;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [i, a] : [a, i];
    return u().then(() => c());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function LN(e, t, n = 0, r = 0, o = 1, s) {
  const i = [], a = (e.variantChildren.size - 1) * r, l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return Array.from(e.variantChildren).sort(_N).forEach((u, c) => {
    u.notify("AnimationStart", t), i.push(dc(u, t, {
      ...s,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function _N(e, t) {
  return e.sortNodePosition(t);
}
function IN(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((s) => dc(e, s, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = dc(e, t, n);
  else {
    const o = typeof t == "function" ? qa(e, t, n.custom) : t;
    r = Promise.all(Qx(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const ON = Vd.length;
function qx(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? qx(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < ON; n++) {
    const r = Vd[n], o = e.props[r];
    (bs(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const FN = [...Fd].reverse(), VN = Fd.length;
function zN(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => IN(e, n, r)));
}
function BN(e) {
  let t = zN(e), n = Eh(), r = !0;
  const o = (l) => (u, c) => {
    var f;
    const d = qa(e, c, l === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
    if (d) {
      const { transition: y, transitionEnd: w, ...g } = d;
      u = { ...u, ...g, ...w };
    }
    return u;
  };
  function s(l) {
    t = l(e);
  }
  function i(l) {
    const { props: u } = e, c = qx(e.parent) || {}, f = [], d = /* @__PURE__ */ new Set();
    let y = {}, w = 1 / 0;
    for (let S = 0; S < VN; S++) {
      const m = FN[S], h = n[m], v = u[m] !== void 0 ? u[m] : c[m], b = bs(v), k = m === l ? h.isActive : null;
      k === !1 && (w = S);
      let T = v === c[m] && v !== u[m] && b;
      if (T && r && e.manuallyAnimateOnMount && (T = !1), h.protectedKeys = { ...y }, // If it isn't active and hasn't *just* been set as inactive
      !h.isActive && k === null || // If we didn't and don't have any defined prop for this animation type
      !v && !h.prevProp || // Or if the prop doesn't define an animation
      Xa(v) || typeof v == "boolean")
        continue;
      const C = $N(h.prevProp, v);
      let E = C || // If we're making this variant active, we want to always make it active
      m === l && h.isActive && !T && b || // If we removed a higher-priority variant (i is in reverse order)
      S > w && b, D = !1;
      const N = Array.isArray(v) ? v : [v];
      let A = N.reduce(o(m), {});
      k === !1 && (A = {});
      const { prevResolvedValues: j = {} } = h, V = {
        ...j,
        ...A
      }, z = (F) => {
        E = !0, d.has(F) && (D = !0, d.delete(F)), h.needsAnimating[F] = !0;
        const P = e.getValue(F);
        P && (P.liveStyle = !1);
      };
      for (const F in V) {
        const P = A[F], M = j[F];
        if (y.hasOwnProperty(F))
          continue;
        let I = !1;
        tc(P) && tc(M) ? I = !cx(P, M) : I = P !== M, I ? P != null ? z(F) : d.add(F) : P !== void 0 && d.has(F) ? z(F) : h.protectedKeys[F] = !0;
      }
      h.prevProp = v, h.prevResolvedValues = A, h.isActive && (y = { ...y, ...A }), r && e.blockInitialAnimation && (E = !1), E && (!(T && C) || D) && f.push(...N.map((F) => ({
        animation: F,
        options: { type: m }
      })));
    }
    if (d.size) {
      const S = {};
      d.forEach((m) => {
        const h = e.getBaseTarget(m), v = e.getValue(m);
        v && (v.liveStyle = !0), S[m] = h ?? null;
      }), f.push({ animation: S });
    }
    let g = !!f.length;
    return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (g = !1), r = !1, g ? t(f) : Promise.resolve();
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u)
      return Promise.resolve();
    (c = e.variantChildren) === null || c === void 0 || c.forEach((d) => {
      var y;
      return (y = d.animationState) === null || y === void 0 ? void 0 : y.setActive(l, u);
    }), n[l].isActive = u;
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
      n = Eh(), r = !0;
    }
  };
}
function $N(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !cx(t, e) : !1;
}
function Xn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Eh() {
  return {
    animate: Xn(!0),
    whileInView: Xn(),
    whileHover: Xn(),
    whileTap: Xn(),
    whileDrag: Xn(),
    whileFocus: Xn(),
    exit: Xn()
  };
}
class Gn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class UN extends Gn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = BN(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Xa(t) && (this.unmountControls = t.subscribe(this.node));
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
let WN = 0;
class HN extends Gn {
  constructor() {
    super(...arguments), this.id = WN++;
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
const KN = {
  animation: {
    Feature: UN
  },
  exit: {
    Feature: HN
  }
};
function Ts(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Vs(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const GN = (e) => (t) => ef(t) && e(t, Vs(t));
function qo(e, t, n, r) {
  return Ts(e, t, GN(n), r);
}
const Th = (e, t) => Math.abs(e - t);
function YN(e, t) {
  const n = Th(e.x, t.x), r = Th(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Zx {
  constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: s = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = Wl(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, y = YN(f.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !y)
        return;
      const { point: w } = f, { timestamp: g } = Le;
      this.history.push({ ...w, timestamp: g });
      const { onStart: S, onMove: m } = this.handlers;
      d || (S && S(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), m && m(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, d) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = Ul(d, this.transformPagePoint), de.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, d) => {
      this.end();
      const { onEnd: y, onSessionEnd: w, resumeAnimation: g } = this.handlers;
      if (this.dragSnapToOrigin && g && g(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const S = Wl(f.type === "pointercancel" ? this.lastMoveEventInfo : Ul(d, this.transformPagePoint), this.history);
      this.startEvent && y && y(f, S), w && w(f, S);
    }, !ef(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = Vs(t), a = Ul(i, this.transformPagePoint), { point: l } = a, { timestamp: u } = Le;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Wl(a, this.history)), this.removeListeners = Fs(qo(this.contextWindow, "pointermove", this.handlePointerMove), qo(this.contextWindow, "pointerup", this.handlePointerUp), qo(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Vn(this.updatePoint);
  }
}
function Ul(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ph(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Wl({ point: e }, t) {
  return {
    point: e,
    delta: Ph(e, Jx(t)),
    offset: Ph(e, XN(t)),
    velocity: QN(t, 0.1)
  };
}
function XN(e) {
  return e[0];
}
function Jx(e) {
  return e[e.length - 1];
}
function QN(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = Jx(e);
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
const ew = 1e-4, qN = 1 - ew, ZN = 1 + ew, tw = 0.01, JN = 0 - tw, e2 = 0 + tw;
function lt(e) {
  return e.max - e.min;
}
function t2(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Dh(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = me(t.min, t.max, e.origin), e.scale = lt(n) / lt(t), e.translate = me(n.min, n.max, e.origin) - e.originPoint, (e.scale >= qN && e.scale <= ZN || isNaN(e.scale)) && (e.scale = 1), (e.translate >= JN && e.translate <= e2 || isNaN(e.translate)) && (e.translate = 0);
}
function Zo(e, t, n, r) {
  Dh(e.x, t.x, n.x, r ? r.originX : void 0), Dh(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Nh(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + lt(t);
}
function n2(e, t, n) {
  Nh(e.x, t.x, n.x), Nh(e.y, t.y, n.y);
}
function Rh(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + lt(t);
}
function Jo(e, t, n) {
  Rh(e.x, t.x, n.x), Rh(e.y, t.y, n.y);
}
function r2(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? me(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? me(n, e, r.max) : Math.min(e, n)), e;
}
function Ah(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function o2(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Ah(e.x, n, o),
    y: Ah(e.y, t, r)
  };
}
function Mh(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function s2(e, t) {
  return {
    x: Mh(e.x, t.x),
    y: Mh(e.y, t.y)
  };
}
function i2(e, t) {
  let n = 0.5;
  const r = lt(e), o = lt(t);
  return o > r ? n = /* @__PURE__ */ so(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ so(e.min, e.max - o, t.min)), ln(0, 1, n);
}
function a2(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const fc = 0.35;
function l2(e = fc) {
  return e === !1 ? e = 0 : e === !0 && (e = fc), {
    x: jh(e, "left", "right"),
    y: jh(e, "top", "bottom")
  };
}
function jh(e, t, n) {
  return {
    min: Lh(e, t),
    max: Lh(e, n)
  };
}
function Lh(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const _h = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Or = () => ({
  x: _h(),
  y: _h()
}), Ih = () => ({ min: 0, max: 0 }), Ce = () => ({
  x: Ih(),
  y: Ih()
});
function ht(e) {
  return [e("x"), e("y")];
}
function nw({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function u2({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function c2(e, t) {
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
function Hl(e) {
  return e === void 0 || e === 1;
}
function pc({ scale: e, scaleX: t, scaleY: n }) {
  return !Hl(e) || !Hl(t) || !Hl(n);
}
function Zn(e) {
  return pc(e) || rw(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function rw(e) {
  return Oh(e.x) || Oh(e.y);
}
function Oh(e) {
  return e && e !== "0%";
}
function xa(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Fh(e, t, n, r, o) {
  return o !== void 0 && (e = xa(e, o, r)), xa(e, n, r) + t;
}
function hc(e, t = 0, n = 1, r, o) {
  e.min = Fh(e.min, t, n, r, o), e.max = Fh(e.max, t, n, r, o);
}
function ow(e, { x: t, y: n }) {
  hc(e.x, t.translate, t.scale, t.originPoint), hc(e.y, n.translate, n.scale, n.originPoint);
}
const Vh = 0.999999999999, zh = 1.0000000000001;
function d2(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let s, i;
  for (let a = 0; a < o; a++) {
    s = n[a], i = s.projectionDelta;
    const { visualElement: l } = s.options;
    l && l.props.style && l.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Vr(e, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, ow(e, i)), r && Zn(s.latestValues) && Vr(e, s.latestValues));
  }
  t.x < zh && t.x > Vh && (t.x = 1), t.y < zh && t.y > Vh && (t.y = 1);
}
function Fr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Bh(e, t, n, r, o = 0.5) {
  const s = me(e.min, e.max, o);
  hc(e, t, n, s, r);
}
function Vr(e, t) {
  Bh(e.x, t.x, t.scaleX, t.scale, t.originX), Bh(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function sw(e, t) {
  return nw(c2(e.getBoundingClientRect(), t));
}
function f2(e, t, n) {
  const r = sw(e, n), { scroll: o } = t;
  return o && (Fr(r.x, o.offset.x), Fr(r.y, o.offset.y)), r;
}
const iw = ({ current: e }) => e ? e.ownerDocument.defaultView : null, p2 = /* @__PURE__ */ new WeakMap();
class h2 {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ce(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (c) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Vs(c).point);
    }, s = (c, f) => {
      const { drag: d, dragPropagation: y, onDragStart: w } = this.getProps();
      if (d && !y && (this.openDragLock && this.openDragLock(), this.openDragLock = iD(d), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ht((S) => {
        let m = this.getAxisMotionValue(S).get() || 0;
        if (Bt.test(m)) {
          const { projection: h } = this.visualElement;
          if (h && h.layout) {
            const v = h.layout.layoutBox[S];
            v && (m = lt(v) * (parseFloat(m) / 100));
          }
        }
        this.originPoint[S] = m;
      }), w && de.postRender(() => w(c, f)), oc(this.visualElement, "transform");
      const { animationState: g } = this.visualElement;
      g && g.setActive("whileDrag", !0);
    }, i = (c, f) => {
      const { dragPropagation: d, dragDirectionLock: y, onDirectionLock: w, onDrag: g } = this.getProps();
      if (!d && !this.openDragLock)
        return;
      const { offset: S } = f;
      if (y && this.currentDirection === null) {
        this.currentDirection = m2(S), this.currentDirection !== null && w && w(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, S), this.updateAxis("y", f.point, S), this.visualElement.render(), g && g(c, f);
    }, a = (c, f) => this.stop(c, f), l = () => ht((c) => {
      var f;
      return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Zx(t, {
      onSessionStart: o,
      onStart: s,
      onMove: i,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: iw(this.visualElement)
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
    if (!r || !gi(t, o, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (i = r2(i, this.constraints[t], this.elastic[t])), s.set(i);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, s = this.constraints;
    n && _r(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = o2(o.layoutBox, n) : this.constraints = !1, this.elastic = l2(r), s !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && ht((i) => {
      this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = a2(o.layoutBox[i], this.constraints[i]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !_r(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const s = f2(r, o.root, this.visualElement.getTransformPagePoint());
    let i = s2(o.layout.layoutBox, s);
    if (n) {
      const a = n(u2(i));
      this.hasMutatedConstraints = !!a, a && (i = nw(a));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = ht((c) => {
      if (!gi(c, n, this.currentDirection))
        return;
      let f = l && l[c] || {};
      i && (f = { min: 0, max: 0 });
      const d = o ? 200 : 1e6, y = o ? 40 : 1e7, w = {
        type: "inertia",
        velocity: r ? t[c] : 0,
        bounceStiffness: d,
        bounceDamping: y,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...f
      };
      return this.startAxisValueAnimation(c, w);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return oc(this.visualElement, t), r.start(pf(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    ht((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    ht((t) => {
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
    ht((n) => {
      const { drag: r } = this.getProps();
      if (!gi(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, s = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: i, max: a } = o.layout.layoutBox[n];
        s.set(t[n] - me(i, a, 0.5));
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
    if (!_r(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    ht((i) => {
      const a = this.getAxisMotionValue(i);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[i] = i2({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), ht((i) => {
      if (!gi(i, t, null))
        return;
      const a = this.getAxisMotionValue(i), { min: l, max: u } = this.constraints[i];
      a.set(me(l, u, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    p2.set(this.visualElement, this);
    const t = this.visualElement.current, n = qo(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      _r(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, s = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), de.read(r);
    const i = Ts(window, "resize", () => this.scalePositionWithinConstraints()), a = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (ht((c) => {
        const f = this.getAxisMotionValue(c);
        f && (this.originPoint[c] += l[c].translate, f.set(f.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      i(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: s = !1, dragElastic: i = fc, dragMomentum: a = !0 } = t;
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
function gi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function m2(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class g2 extends Gn {
  constructor(t) {
    super(t), this.removeGroupControls = it, this.removeListeners = it, this.controls = new h2(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || it;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const $h = (e) => (t, n) => {
  e && de.postRender(() => e(t, n));
};
class y2 extends Gn {
  constructor() {
    super(...arguments), this.removePointerDownListener = it;
  }
  onPointerDown(t) {
    this.session = new Zx(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: iw(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: $h(t),
      onStart: $h(n),
      onMove: r,
      onEnd: (s, i) => {
        delete this.session, o && de.postRender(() => o(s, i));
      }
    };
  }
  mount() {
    this.removePointerDownListener = qo(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Ii = {
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
function Uh(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Mo = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if ($.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Uh(e, t.target.x), r = Uh(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, v2 = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = zn.parse(e);
    if (o.length > 5)
      return r;
    const s = zn.createTransformer(e), i = typeof o[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + i] /= a, o[1 + i] /= l;
    const u = me(a, l, 0.5);
    return typeof o[2 + i] == "number" && (o[2 + i] /= u), typeof o[3 + i] == "number" && (o[3 + i] /= u), s(o);
  }
};
class x2 extends x.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: s } = t;
    VP(w2), s && (n.group && n.group.add(s), r && r.register && o && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), Ii.hasEverUpdated = !0;
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
    t && (t.root.didUpdate(), Bd.postRender(() => {
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
function aw(e) {
  const [t, n] = U0(), r = x.useContext(jd);
  return p.jsx(x2, { ...e, layoutGroup: r, switchLayoutGroup: x.useContext(q0), isPresent: t, safeToRemove: n });
}
const w2 = {
  borderRadius: {
    ...Mo,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Mo,
  borderTopRightRadius: Mo,
  borderBottomLeftRadius: Mo,
  borderBottomRightRadius: Mo,
  boxShadow: v2
};
function S2(e, t, n) {
  const r = $e(e) ? e : Cs(e);
  return r.start(pf("", r, t, n)), r.animation;
}
function b2(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const k2 = (e, t) => e.depth - t.depth;
class C2 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    tf(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    nf(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(k2), this.isDirty = !1, this.children.forEach(t);
  }
}
function E2(e, t) {
  const n = $t.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= t && (Vn(r), e(s - t));
  };
  return de.read(r, !0), () => Vn(r);
}
const lw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], T2 = lw.length, Wh = (e) => typeof e == "string" ? parseFloat(e) : e, Hh = (e) => typeof e == "number" || $.test(e);
function P2(e, t, n, r, o, s) {
  o ? (e.opacity = me(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    D2(r)
  ), e.opacityExit = me(t.opacity !== void 0 ? t.opacity : 1, 0, N2(r))) : s && (e.opacity = me(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < T2; i++) {
    const a = `border${lw[i]}Radius`;
    let l = Kh(t, a), u = Kh(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || Hh(l) === Hh(u) ? (e[a] = Math.max(me(Wh(l), Wh(u), r), 0), (Bt.test(u) || Bt.test(l)) && (e[a] += "%")) : e[a] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = me(t.rotate || 0, n.rotate || 0, r));
}
function Kh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const D2 = /* @__PURE__ */ uw(0, 0.5, Px), N2 = /* @__PURE__ */ uw(0.5, 0.95, it);
function uw(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ so(e, t, r));
}
function Gh(e, t) {
  e.min = t.min, e.max = t.max;
}
function pt(e, t) {
  Gh(e.x, t.x), Gh(e.y, t.y);
}
function Yh(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Xh(e, t, n, r, o) {
  return e -= t, e = xa(e, 1 / n, r), o !== void 0 && (e = xa(e, 1 / o, r)), e;
}
function R2(e, t = 0, n = 1, r = 0.5, o, s = e, i = e) {
  if (Bt.test(t) && (t = parseFloat(t), t = me(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let a = me(s.min, s.max, r);
  e === s && (a -= t), e.min = Xh(e.min, t, n, a, o), e.max = Xh(e.max, t, n, a, o);
}
function Qh(e, t, [n, r, o], s, i) {
  R2(e, t[n], t[r], t[o], t.scale, s, i);
}
const A2 = ["x", "scaleX", "originX"], M2 = ["y", "scaleY", "originY"];
function qh(e, t, n, r) {
  Qh(e.x, t, A2, n ? n.x : void 0, r ? r.x : void 0), Qh(e.y, t, M2, n ? n.y : void 0, r ? r.y : void 0);
}
function Zh(e) {
  return e.translate === 0 && e.scale === 1;
}
function cw(e) {
  return Zh(e.x) && Zh(e.y);
}
function Jh(e, t) {
  return e.min === t.min && e.max === t.max;
}
function j2(e, t) {
  return Jh(e.x, t.x) && Jh(e.y, t.y);
}
function em(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function dw(e, t) {
  return em(e.x, t.x) && em(e.y, t.y);
}
function tm(e) {
  return lt(e.x) / lt(e.y);
}
function nm(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class L2 {
  constructor() {
    this.members = [];
  }
  add(t) {
    tf(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (nf(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function _2(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, s = e.y.translate / t.y, i = (n == null ? void 0 : n.z) || 0;
  if ((o || s || i) && (r = `translate3d(${o}px, ${s}px, ${i}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: f, rotateY: d, skewX: y, skewY: w } = n;
    u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), f && (r += `rotateX(${f}deg) `), d && (r += `rotateY(${d}deg) `), y && (r += `skewX(${y}deg) `), w && (r += `skewY(${w}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Jn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, zo = typeof window < "u" && window.MotionDebug !== void 0, Kl = ["", "X", "Y", "Z"], I2 = { visibility: "hidden" }, rm = 1e3;
let O2 = 0;
function Gl(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function fw(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = wx(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", de, !(o || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && fw(r);
}
function pw({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(i = {}, a = t == null ? void 0 : t()) {
      this.id = O2++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, zo && (Jn.totalNodes = Jn.resolvedTargetDeltas = Jn.recalculatedProjection = 0), this.nodes.forEach(z2), this.nodes.forEach(H2), this.nodes.forEach(K2), this.nodes.forEach(B2), zo && window.MotionDebug.record(Jn);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new C2());
    }
    addEventListener(i, a) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new rf()), this.eventHandlers.get(i).add(a);
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
      this.isSVG = b2(i), this.instance = i;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), e) {
        let f;
        const d = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = E2(d, 250), Ii.hasAnimatedSinceResize && (Ii.hasAnimatedSinceResize = !1, this.nodes.forEach(sm));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: y, layout: w }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || c.getDefaultTransition() || q2, { onLayoutAnimationStart: S, onLayoutAnimationComplete: m } = c.getProps(), h = !this.targetLayout || !dw(this.targetLayout, w) || y, v = !d && y;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || v || d && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, v);
          const b = {
            ...qd(g, "layout"),
            onPlay: S,
            onComplete: m
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (b.delay = 0, b.type = !1), this.startAnimation(b);
        } else
          d || sm(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = w;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Vn(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(G2), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && fw(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), i && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(om);
        return;
      }
      this.isUpdating || this.nodes.forEach(U2), this.isUpdating = !1, this.nodes.forEach(W2), this.nodes.forEach(F2), this.nodes.forEach(V2), this.clearAllSnapshots();
      const a = $t.now();
      Le.delta = ln(0, 1e3 / 60, a - Le.timestamp), Le.timestamp = a, Le.isProcessing = !0, Ol.update.process(Le), Ol.preRender.process(Le), Ol.render.process(Le), Le.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Bd.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach($2), this.sharedNodes.forEach(Y2);
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
      const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !cw(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      i && (a || Zn(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return i && (l = this.removeTransform(l)), Z2(l), {
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
      if (!(((i = this.scroll) === null || i === void 0 ? void 0 : i.wasRoot) || this.path.some(J2))) {
        const { scroll: c } = this.root;
        c && (Fr(l.x, c.offset.x), Fr(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(i) {
      var a;
      const l = Ce();
      if (pt(l, i), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: f, options: d } = c;
        c !== this.root && f && d.layoutScroll && (f.wasRoot && pt(l, i), Fr(l.x, f.offset.x), Fr(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(i, a = !1) {
      const l = Ce();
      pt(l, i);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && Vr(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), Zn(c.latestValues) && Vr(l, c.latestValues);
      }
      return Zn(this.latestValues) && Vr(l, this.latestValues), l;
    }
    removeTransform(i) {
      const a = Ce();
      pt(a, i);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Zn(u.latestValues))
          continue;
        pc(u.latestValues) && u.updateSnapshot();
        const c = Ce(), f = u.measurePageBox();
        pt(c, f), qh(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Zn(this.latestValues) && qh(a, this.latestValues), a;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Le.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(i = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (!(i || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (this.resolvedRelativeTargetAt = Le.timestamp, !this.targetDelta && !this.relativeTarget) {
          const y = this.getClosestProjectingParent();
          y && y.layout && this.animationProgress !== 1 ? (this.relativeParent = y, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ce(), this.relativeTargetOrigin = Ce(), Jo(this.relativeTargetOrigin, this.layout.layoutBox, y.layout.layoutBox), pt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Ce(), this.targetWithTransforms = Ce()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), n2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : pt(this.target, this.layout.layoutBox), ow(this.target, this.targetDelta)) : pt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const y = this.getClosestProjectingParent();
            y && !!y.resumingFrom == !!this.resumingFrom && !y.options.layoutScroll && y.target && this.animationProgress !== 1 ? (this.relativeParent = y, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ce(), this.relativeTargetOrigin = Ce(), Jo(this.relativeTargetOrigin, this.target, y.target), pt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          zo && Jn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || pc(this.parent.latestValues) || rw(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var i;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let u = !0;
      if ((this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === Le.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: f } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || f))
        return;
      pt(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, y = this.treeScale.y;
      d2(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = Ce());
      const { target: w } = a;
      if (!w) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Yh(this.prevProjectionDelta.x, this.projectionDelta.x), Yh(this.prevProjectionDelta.y, this.projectionDelta.y)), Zo(this.projectionDelta, this.layoutCorrected, w, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== y || !nm(this.projectionDelta.x, this.prevProjectionDelta.x) || !nm(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", w)), zo && Jn.recalculatedProjection++;
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
      this.prevProjectionDelta = Or(), this.projectionDelta = Or(), this.projectionDeltaWithTransform = Or();
    }
    setAnimationOrigin(i, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, f = Or();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const d = Ce(), y = l ? l.source : void 0, w = this.layout ? this.layout.source : void 0, g = y !== w, S = this.getStack(), m = !S || S.members.length <= 1, h = !!(g && !m && this.options.crossfade === !0 && !this.path.some(Q2));
      this.animationProgress = 0;
      let v;
      this.mixTargetDelta = (b) => {
        const k = b / 1e3;
        im(f.x, i.x, k), im(f.y, i.y, k), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Jo(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), X2(this.relativeTarget, this.relativeTargetOrigin, d, k), v && j2(this.relativeTarget, v) && (this.isProjectionDirty = !1), v || (v = Ce()), pt(v, this.relativeTarget)), g && (this.animationValues = c, P2(c, u, this.latestValues, k, h, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Vn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = de.update(() => {
        Ii.hasAnimatedSinceResize = !0, this.currentAnimation = S2(0, rm, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(rm), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = i;
      if (!(!a || !l || !u)) {
        if (this !== i && this.layout && u && hw(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Ce();
          const f = lt(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + f;
          const d = lt(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + d;
        }
        pt(a, l), Vr(a, c), Zo(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(i, a) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new L2()), this.sharedNodes.get(i).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
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
      const u = this.getStack();
      u && u.promote(this, l), i && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
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
      const u = {};
      l.z && Gl("z", i, u, this.animationValues);
      for (let c = 0; c < Kl.length; c++)
        Gl(`rotate${Kl[c]}`, i, u, this.animationValues), Gl(`skew${Kl[c]}`, i, u, this.animationValues);
      i.render();
      for (const c in u)
        i.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      i.scheduleRender();
    }
    getProjectionStyles(i) {
      var a, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return I2;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Li(i == null ? void 0 : i.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const g = {};
        return this.options.layoutId && (g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, g.pointerEvents = Li(i == null ? void 0 : i.pointerEvents) || ""), this.hasProjected && !Zn(this.latestValues) && (g.transform = c ? c({}, "") : "none", this.hasProjected = !1), g;
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), u.transform = _2(this.projectionDeltaWithTransform, this.treeScale, d), c && (u.transform = c(d, u.transform));
      const { x: y, y: w } = this.projectionDelta;
      u.transformOrigin = `${y.origin * 100}% ${w.origin * 100}% 0`, f.animationValues ? u.opacity = f === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const g in ha) {
        if (d[g] === void 0)
          continue;
        const { correct: S, applyTo: m } = ha[g], h = u.transform === "none" ? d[g] : S(d[g], f);
        if (m) {
          const v = m.length;
          for (let b = 0; b < v; b++)
            u[m[b]] = h;
        } else
          u[g] = h;
      }
      return this.options.layoutId && (u.pointerEvents = f === this ? Li(i == null ? void 0 : i.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var a;
        return (a = i.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(om), this.root.sharedNodes.clear();
    }
  };
}
function F2(e) {
  e.updateLayout();
}
function V2(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: s } = e.options, i = n.source !== e.layout.source;
    s === "size" ? ht((f) => {
      const d = i ? n.measuredBox[f] : n.layoutBox[f], y = lt(d);
      d.min = r[f].min, d.max = d.min + y;
    }) : hw(s, n.layoutBox, r) && ht((f) => {
      const d = i ? n.measuredBox[f] : n.layoutBox[f], y = lt(r[f]);
      d.max = d.min + y, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + y);
    });
    const a = Or();
    Zo(a, r, n.layoutBox);
    const l = Or();
    i ? Zo(l, e.applyTransform(o, !0), n.measuredBox) : Zo(l, r, n.layoutBox);
    const u = !cw(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: y } = f;
        if (d && y) {
          const w = Ce();
          Jo(w, n.layoutBox, d.layoutBox);
          const g = Ce();
          Jo(g, r, y.layoutBox), dw(w, g) || (c = !0), f.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = w, e.relativeParent = f);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function z2(e) {
  zo && Jn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function B2(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function $2(e) {
  e.clearSnapshot();
}
function om(e) {
  e.clearMeasurements();
}
function U2(e) {
  e.isLayoutDirty = !1;
}
function W2(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function sm(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function H2(e) {
  e.resolveTargetDelta();
}
function K2(e) {
  e.calcProjection();
}
function G2(e) {
  e.resetSkewAndRotation();
}
function Y2(e) {
  e.removeLeadSnapshot();
}
function im(e, t, n) {
  e.translate = me(t.translate, 0, n), e.scale = me(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function am(e, t, n, r) {
  e.min = me(t.min, n.min, r), e.max = me(t.max, n.max, r);
}
function X2(e, t, n, r) {
  am(e.x, t.x, n.x, r), am(e.y, t.y, n.y, r);
}
function Q2(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const q2 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, lm = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), um = lm("applewebkit/") && !lm("chrome/") ? Math.round : it;
function cm(e) {
  e.min = um(e.min), e.max = um(e.max);
}
function Z2(e) {
  cm(e.x), cm(e.y);
}
function hw(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !t2(tm(t), tm(n), 0.2);
}
function J2(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const eR = pw({
  attachResizeListener: (e, t) => Ts(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Yl = {
  current: void 0
}, mw = pw({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Yl.current) {
      const e = new eR({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Yl.current = e;
    }
    return Yl.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), tR = {
  pan: {
    Feature: y2
  },
  drag: {
    Feature: g2,
    ProjectionNode: mw,
    MeasureLayout: aw
  }
};
function dm(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, s = r[o];
  s && de.postRender(() => s(t, Vs(t)));
}
class nR extends Gn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = tD(t, (n) => (dm(this.node, n, "Start"), (r) => dm(this.node, r, "End"))));
  }
  unmount() {
  }
}
class rR extends Gn {
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
    this.unmount = Fs(Ts(this.node.current, "focus", () => this.onFocus()), Ts(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function fm(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n), s = r[o];
  s && de.postRender(() => s(t, Vs(t)));
}
class oR extends Gn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = sD(t, (n) => (fm(this.node, n, "Start"), (r, { success: o }) => fm(this.node, r, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const mc = /* @__PURE__ */ new WeakMap(), Xl = /* @__PURE__ */ new WeakMap(), sR = (e) => {
  const t = mc.get(e.target);
  t && t(e);
}, iR = (e) => {
  e.forEach(sR);
};
function aR({ root: e, ...t }) {
  const n = e || document;
  Xl.has(n) || Xl.set(n, {});
  const r = Xl.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(iR, { root: e, ...t })), r[o];
}
function lR(e, t, n) {
  const r = aR(t);
  return mc.set(e, n), r.observe(e), () => {
    mc.delete(e), r.unobserve(e);
  };
}
const uR = {
  some: 0,
  all: 1
};
class cR extends Gn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: s } = t, i = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : uR[o]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(), d = u ? c : f;
      d && d(l);
    };
    return lR(this.node.current, i, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(dR(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function dR({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const fR = {
  inView: {
    Feature: cR
  },
  tap: {
    Feature: oR
  },
  focus: {
    Feature: rR
  },
  hover: {
    Feature: nR
  }
}, pR = {
  layout: {
    ProjectionNode: mw,
    MeasureLayout: aw
  }
}, gc = { current: null }, gw = { current: !1 };
function hR() {
  if (gw.current = !0, !!Id)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => gc.current = e.matches;
      e.addListener(t), t();
    } else
      gc.current = !1;
}
const mR = [...Bx, ze, zn], gR = (e) => mR.find(zx(e)), pm = /* @__PURE__ */ new WeakMap();
function yR(e, t, n) {
  for (const r in t) {
    const o = t[r], s = n[r];
    if ($e(o))
      e.addValue(r, o);
    else if ($e(s))
      e.addValue(r, Cs(o, { owner: e }));
    else if (s !== o)
      if (e.hasValue(r)) {
        const i = e.getValue(r);
        i.liveStyle === !0 ? i.jump(o) : i.hasAnimated || i.set(o);
      } else {
        const i = e.getStaticValue(r);
        e.addValue(r, Cs(i !== void 0 ? i : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const hm = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class vR {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = cf, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const y = $t.now();
      this.renderScheduledAt < y && (this.renderScheduledAt = y, de.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u, onUpdate: c } = i;
    this.onUpdate = c, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.blockInitialAnimation = !!s, this.isControllingVariants = Qa(n), this.isVariantNode = X0(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const y in d) {
      const w = d[y];
      l[y] !== void 0 && $e(w) && w.set(l[y], !1);
    }
  }
  mount(t) {
    this.current = t, pm.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), gw.current || hR(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : gc.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    pm.delete(this.current), this.projection && this.projection.unmount(), Vn(this.notifyUpdate), Vn(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const r = vr.has(t), o = n.on("change", (a) => {
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
    for (t in io) {
      const n = io[t];
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
    for (let r = 0; r < hm.length; r++) {
      const o = hm[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const s = "on" + o, i = t[s];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = yR(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return r === void 0 && n !== void 0 && (r = Cs(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return o != null && (typeof o == "string" && (Fx(o) || Nx(o)) ? o = parseFloat(o) : !gR(o) && zn.test(n) && (o = _x(t, n)), this.setBaseTarget(t, $e(o) ? o.get() : o)), $e(o) ? o.get() : o;
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
      const i = Ud(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      i && (o = i[t]);
    }
    if (r && o !== void 0)
      return o;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !$e(s) ? s : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new rf()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class yw extends vR {
  constructor() {
    super(...arguments), this.KeyframeResolver = $x;
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
    $e(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function xR(e) {
  return window.getComputedStyle(e);
}
class wR extends yw {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = ox;
  }
  readValueFromInstance(t, n) {
    if (vr.has(n)) {
      const r = uf(n);
      return r && r.default || 0;
    } else {
      const r = xR(t), o = (tx(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return sw(t, n);
  }
  build(t, n, r) {
    Kd(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Qd(t, n, r);
  }
}
class SR extends yw {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ce;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (vr.has(n)) {
      const r = uf(n);
      return r && r.default || 0;
    }
    return n = sx.has(n) ? n : zd(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return lx(t, n, r);
  }
  build(t, n, r) {
    Gd(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    ix(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = Xd(t.tagName), super.mount(t);
  }
}
const bR = (e, t) => $d(e) ? new SR(t) : new wR(t, {
  allowProjection: e !== x.Fragment
}), kR = /* @__PURE__ */ YP({
  ...KN,
  ...fR,
  ...tR,
  ...pR
}, bR), yi = /* @__PURE__ */ uP(kR);
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
function vw(e = "default") {
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
function CR(e = "default") {
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
function Bn(e, t = {}) {
  return e && t[e] ? t[e] : "default";
}
function xw(e) {
  const t = {};
  return e.forEach((n) => {
    n.variant && (t[n.slug] = n.variant);
  }), t;
}
function ER({ events: e, eventMetadata: t, categoryMappings: n, onDateClick: r, onEventClick: o }) {
  const [s, i] = x.useState(/* @__PURE__ */ new Date()), [a, l] = x.useState(0), [u, c] = x.useState(null), f = (C, E) => {
    const D = new Date(E, C + 1, 0).getDate();
    return Array.from({ length: D }, (N, A) => ({ day: A + 1 }));
  }, d = (C, E) => e.filter((D) => {
    const N = new Date(D.startDate);
    return N.getDate() === C && N.getMonth() === E.getMonth() && N.getFullYear() === E.getFullYear();
  }), y = (C) => C.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), w = () => {
    l(-1);
    const C = new Date(s.getFullYear(), s.getMonth() - 1, 1);
    i(C);
  }, g = () => {
    l(1);
    const C = new Date(s.getFullYear(), s.getMonth() + 1, 1);
    i(C);
  }, S = f(s.getMonth(), s.getFullYear()), m = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], v = new Date(s.getFullYear(), s.getMonth(), 1).getDay(), b = new Date(s.getFullYear(), s.getMonth() - 1, 1), k = new Date(b.getFullYear(), b.getMonth() + 1, 0).getDate(), T = ({ events: C }) => {
    const E = C.reduce((D, N) => {
      const A = t[N.id], j = (A == null ? void 0 : A.category) || "uncategorized";
      return D[j] || (D[j] = []), D[j].push(N), D;
    }, {});
    return /* @__PURE__ */ p.jsx("div", { className: "flex flex-wrap gap-1", children: Object.entries(E).map(([D, N]) => {
      const A = Bn(D === "uncategorized" ? null : D, n), j = Qt(A);
      return /* @__PURE__ */ p.jsx(
        "div",
        {
          className: `${j} text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium shadow-sm`,
          title: `${N.length} ${D} event${N.length > 1 ? "s" : ""}: ${N.map((V) => V.title).join(", ")}`,
          children: N.length
        },
        D
      );
    }) });
  };
  return /* @__PURE__ */ p.jsxs("div", { children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4", children: [
      /* @__PURE__ */ p.jsxs(
        yi.h2,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.5 },
          className: "text-3xl my-5 tracking-tighter font-bold text-gray-900 dark:text-gray-100",
          children: [
            s.toLocaleString("default", { month: "long" }),
            " ",
            s.getFullYear()
          ]
        },
        s.getMonth()
      ),
      /* @__PURE__ */ p.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ p.jsxs(Zt, { variant: "outline", onClick: w, className: "gap-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600", children: [
          /* @__PURE__ */ p.jsx(Gv, { className: "h-4 w-4" }),
          "Prev"
        ] }),
        /* @__PURE__ */ p.jsxs(Zt, { variant: "outline", onClick: g, className: "gap-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600", children: [
          "Next",
          /* @__PURE__ */ p.jsx(Yv, { className: "h-4 w-4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ p.jsx(eh, { initial: !1, custom: a, mode: "wait", children: /* @__PURE__ */ p.jsxs(
      yi.div,
      {
        custom: a,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        className: "grid grid-cols-7 gap-1 sm:gap-2",
        children: [
          m.map((C, E) => /* @__PURE__ */ p.jsx(
            "div",
            {
              className: "text-left my-8 text-4xl tracking-tighter font-medium text-gray-900 dark:text-gray-100",
              children: C
            },
            E
          )),
          Array.from({ length: v }).map((C, E) => /* @__PURE__ */ p.jsx("div", { className: "h-[150px] opacity-50 p-4", children: /* @__PURE__ */ p.jsx("div", { className: "font-semibold relative text-3xl mb-1 text-gray-400 dark:text-gray-500", children: k - v + E + 1 }) }, `offset-${E}`)),
          S.map((C, E) => {
            const D = d(C.day, s), N = (/* @__PURE__ */ new Date()).getDate() === C.day && (/* @__PURE__ */ new Date()).getMonth() === s.getMonth() && (/* @__PURE__ */ new Date()).getFullYear() === s.getFullYear(), j = (v + C.day - 1) % 7 >= 5;
            return /* @__PURE__ */ p.jsxs(
              yi.div,
              {
                className: "hover:z-50 border-none h-[150px] rounded group flex flex-col relative",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -20 },
                transition: { duration: 0.3 },
                onMouseEnter: () => c(C.day),
                onMouseLeave: () => c(null),
                children: [
                  /* @__PURE__ */ p.jsxs(
                    fd,
                    {
                      className: `bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md overflow-hidden relative flex p-4 border h-full transition-shadow day-card ${D.length > 0 ? "cursor-pointer hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700" : "cursor-default"}`,
                      onClick: D.length > 0 ? () => r == null ? void 0 : r(new Date(s.getFullYear(), s.getMonth(), C.day)) : void 0,
                      children: [
                        /* @__PURE__ */ p.jsx("div", { className: `font-semibold relative text-3xl mb-1 ${D.length > 0 ? "text-gray-900 dark:text-gray-100" : "text-gray-500 dark:text-gray-400"} ${N ? "text-blue-600 dark:text-blue-400" : ""}`, children: C.day }),
                        /* @__PURE__ */ p.jsx("div", { className: "flex-grow flex flex-col gap-2 w-full", children: /* @__PURE__ */ p.jsx(eh, { mode: "wait", children: (D == null ? void 0 : D.length) > 0 && /* @__PURE__ */ p.jsx(
                          yi.div,
                          {
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0, y: -20 },
                            transition: { duration: 0.3 },
                            children: /* @__PURE__ */ p.jsx(T, { events: D })
                          },
                          D[0].id
                        ) }) })
                      ]
                    }
                  ),
                  u === C.day && D.length > 0 && /* @__PURE__ */ p.jsxs(
                    "div",
                    {
                      className: `absolute top-full z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3 w-80 ${j ? "right-0" : "left-0"}`,
                      onMouseEnter: () => c(C.day),
                      onMouseLeave: () => c(null),
                      children: [
                        /* @__PURE__ */ p.jsxs("div", { className: "text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2", children: [
                          D.length,
                          " event",
                          D.length > 1 ? "s" : ""
                        ] }),
                        /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: D.map((V) => {
                          const z = t[V.id], Y = Bn(z == null ? void 0 : z.category, n), O = Qt(Y);
                          return /* @__PURE__ */ p.jsxs(
                            "div",
                            {
                              className: "flex items-start gap-2 p-1 -m-1 rounded cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors",
                              onClick: (F) => {
                                F.stopPropagation(), o == null || o(V);
                              },
                              children: [
                                /* @__PURE__ */ p.jsx("div", { className: `w-2 h-2 rounded-full ${O} flex-shrink-0 mt-1.5` }),
                                /* @__PURE__ */ p.jsxs("div", { className: "flex-1 min-w-0", children: [
                                  /* @__PURE__ */ p.jsx("div", { className: "font-medium text-sm text-gray-900 dark:text-gray-100 leading-tight", children: V.title }),
                                  /* @__PURE__ */ p.jsx("div", { className: "text-xs text-gray-600 dark:text-gray-400 mt-0.5", children: y(V.startDate) })
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
              C.day
            );
          }),
          Array.from({ length: 42 - v - S.length }).map((C, E) => /* @__PURE__ */ p.jsx("div", { className: "h-[150px] opacity-50 p-4", children: /* @__PURE__ */ p.jsx("div", { className: "font-semibold relative text-3xl mb-1 text-gray-400 dark:text-gray-500", children: E + 1 }) }, `next-${E}`))
        ]
      },
      `${s.getFullYear()}-${s.getMonth()}`
    ) })
  ] });
}
function TR({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r }) {
  const [o, s] = q.useState(/* @__PURE__ */ new Date()), a = ((d) => {
    const y = new Date(d);
    return y.setDate(d.getDate() - d.getDay()), Array.from({ length: 7 }, (w, g) => {
      const S = new Date(y);
      return S.setDate(y.getDate() + g), S;
    });
  })(o), l = Array.from({ length: 24 }, (d, y) => y), u = (d) => e.filter((y) => y.startDate.toDateString() === d.toDateString()), c = (d) => {
    const y = new Date(o);
    y.setDate(o.getDate() + (d === "next" ? 7 : -7)), s(y);
  }, f = (d, y, w) => {
    const g = d.startDate.getHours(), S = d.startDate.getMinutes(), m = d.endDate ? d.endDate.getHours() : g + 1, h = d.endDate ? d.endDate.getMinutes() : 0, v = g + S / 60, b = m + h / 60, k = b - v, T = y.filter((A) => {
      if (A.id === d.id) return !0;
      if (A.startDate.toDateString() !== d.startDate.toDateString())
        return !1;
      const j = A.startDate.getHours() + A.startDate.getMinutes() / 60, V = (A.endDate ? A.endDate.getHours() : A.startDate.getHours() + 1) + (A.endDate ? A.endDate.getMinutes() / 60 : 0);
      return v < V && b > j;
    }), C = T.length, E = T.findIndex((A) => A.id === d.id), D = C > 1 ? 100 / C : 100, N = C > 1 ? E * D : 0;
    return {
      top: `${v * 80}px`,
      // 80px per hour for better readability
      height: `${k * 80}px`,
      // Accurate height based on actual duration
      left: `${N}%`,
      width: `${D}%`
    };
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ p.jsx(
        "button",
        {
          onClick: () => c("prev"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ p.jsx(Xv, { className: "h-5 w-5" })
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
          onClick: () => c("next"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ p.jsx(Qv, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-8 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700", children: [
        /* @__PURE__ */ p.jsx("div", { className: "p-3 text-xs font-medium text-gray-500 dark:text-gray-400 border-r border-gray-200 dark:border-gray-600", children: "Time" }),
        a.map((d, y) => /* @__PURE__ */ p.jsxs("div", { className: "p-3 text-center border-r border-gray-200 dark:border-gray-600 last:border-r-0", children: [
          /* @__PURE__ */ p.jsx("div", { className: "text-xs font-medium text-gray-500 dark:text-gray-400", children: d.toLocaleDateString("en-US", { weekday: "short" }) }),
          /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-gray-900 dark:text-gray-100", children: d.getDate() })
        ] }, y))
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-8 relative", children: [
        /* @__PURE__ */ p.jsx("div", { className: "border-r border-gray-200 dark:border-gray-600", children: l.map((d) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] p-2 text-xs text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600 flex items-start", children: d === 0 ? "12 AM" : d === 12 ? "12 PM" : d > 12 ? `${d - 12} PM` : `${d} AM` }, d)) }),
        a.map((d, y) => {
          const w = u(d);
          return /* @__PURE__ */ p.jsxs("div", { className: "relative border-r border-gray-200 dark:border-gray-600 last:border-r-0", children: [
            l.map((g) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] border-b border-gray-200 dark:border-gray-600" }, g)),
            w.map((g, S) => {
              const m = t[g.id], h = Bn(m == null ? void 0 : m.category, n), v = vw(h), b = f(g, w);
              return /* @__PURE__ */ p.jsxs(
                "div",
                {
                  className: `absolute ${v} border rounded p-2 text-sm z-20 overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow event-card`,
                  style: {
                    ...b,
                    margin: "1px"
                  },
                  onClick: (k) => {
                    k.stopPropagation(), r == null || r(g);
                  },
                  children: [
                    /* @__PURE__ */ p.jsx("div", { className: "font-medium leading-tight truncate text-sm", children: g.title }),
                    /* @__PURE__ */ p.jsx("div", { className: "text-xs opacity-75 leading-tight", children: g.startDate.toLocaleTimeString("en-US", {
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
                g.id
              );
            })
          ] }, y);
        })
      ] })
    ] })
  ] });
}
function PR({ events: e, eventMetadata: t, categoryMappings: n, initialDate: r, onEventClick: o }) {
  const [s, i] = q.useState(r || /* @__PURE__ */ new Date());
  q.useEffect(() => {
    r && i(r);
  }, [r]);
  const a = Array.from({ length: 24 }, (d, y) => y), l = () => e.filter((d) => d.startDate.toDateString() === s.toDateString()), u = (d) => {
    const y = new Date(s);
    y.setDate(s.getDate() + (d === "next" ? 1 : -1)), i(y);
  }, c = (d, y, w) => {
    const g = d.startDate.getHours(), S = d.startDate.getMinutes(), m = d.endDate ? d.endDate.getHours() : g + 1, h = d.endDate ? d.endDate.getMinutes() : 0, v = g + S / 60, b = m + h / 60, k = b - v, T = y.filter((A) => {
      if (A.id === d.id) return !0;
      const j = A.startDate.getHours() + A.startDate.getMinutes() / 60, V = (A.endDate ? A.endDate.getHours() : A.startDate.getHours() + 1) + (A.endDate ? A.endDate.getMinutes() / 60 : 0);
      return v < V && b > j;
    }), C = T.length, E = T.findIndex((A) => A.id === d.id), D = C > 1 ? 100 / C : 100, N = C > 1 ? E * D : 0;
    return {
      top: `${v * 80}px`,
      // 80px per hour for day view
      height: `${k * 80}px`,
      // Accurate height based on actual duration
      left: `${N}%`,
      width: `${D}%`
    };
  }, f = l();
  return /* @__PURE__ */ p.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ p.jsx(
        "button",
        {
          onClick: () => u("prev"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ p.jsx(Xv, { className: "h-5 w-5" })
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
          onClick: () => u("next"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ p.jsx(Qv, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden", children: /* @__PURE__ */ p.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ p.jsx("div", { className: "w-20 border-r border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700", children: a.map((d) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] p-3 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600 flex items-start", children: d === 0 ? "12 AM" : d === 12 ? "12 PM" : d > 12 ? `${d - 12} PM` : `${d} AM` }, d)) }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex-1 relative", children: [
        a.map((d) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] border-b border-gray-200 dark:border-gray-600" }, d)),
        f.map((d, y) => {
          const w = t[d.id], g = Bn(w == null ? void 0 : w.category, n), S = vw(g), m = c(d, f);
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `absolute ${S} border rounded-lg p-2 text-sm z-20 overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow event-card`,
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
                    /* @__PURE__ */ p.jsx(js, { className: "h-2.5 w-2.5" }),
                    /* @__PURE__ */ p.jsx("span", { className: "truncate", children: w.location })
                  ] }),
                  w.organization && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ p.jsx(eT, { className: "h-2.5 w-2.5" }),
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
function DR({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r }) {
  const [o, s] = q.useState(/* @__PURE__ */ new Date()), [i, a] = q.useState(/* @__PURE__ */ new Date()), l = () => {
    a((b) => new Date(b.getFullYear(), b.getMonth() - 1, 1));
  }, u = () => {
    a((b) => new Date(b.getFullYear(), b.getMonth() + 1, 1));
  }, c = (b) => b.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), f = () => o ? e.filter((b) => {
    const k = new Date(b.startDate);
    return k.getDate() === o.getDate() && k.getMonth() === o.getMonth() && k.getFullYear() === o.getFullYear();
  }) : [], d = (b) => e.some((k) => {
    const T = new Date(k.startDate);
    return T.getDate() === b.getDate() && T.getMonth() === b.getMonth() && T.getFullYear() === b.getFullYear();
  }), y = f(), w = i.getFullYear(), g = i.getMonth(), S = new Date(w, g, 1), m = new Date(S);
  m.setDate(m.getDate() - S.getDay());
  const h = [], v = new Date(m);
  for (let b = 0; b < 42; b++)
    h.push(new Date(v)), v.setDate(v.getDate() + 1);
  return /* @__PURE__ */ p.jsxs(fd, { className: "w-full py-4 mobile-calendar bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700", children: [
    /* @__PURE__ */ p.jsxs(_y, { className: "px-4", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between mb-4 gap-2", children: [
        /* @__PURE__ */ p.jsxs(
          Zt,
          {
            variant: "outline",
            size: "sm",
            onClick: l,
            className: "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 flex-shrink-0",
            children: [
              /* @__PURE__ */ p.jsx(Gv, { className: "h-4 w-4" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Prev" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsx("h3", { className: "text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 text-center flex-1 min-w-0 truncate", children: i.toLocaleDateString("en-US", { month: "long", year: "numeric" }) }),
        /* @__PURE__ */ p.jsxs(
          Zt,
          {
            variant: "outline",
            size: "sm",
            onClick: u,
            className: "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 flex-shrink-0",
            children: [
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Next" }),
              /* @__PURE__ */ p.jsx(Yv, { className: "h-4 w-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-7 gap-1 mb-4", children: [
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((b) => /* @__PURE__ */ p.jsx("div", { className: "text-center text-sm font-medium py-2 text-gray-600 dark:text-gray-400", children: b }, b)),
        h.map((b, k) => {
          const T = b.getMonth() === g, C = o && b.getDate() === o.getDate() && b.getMonth() === o.getMonth() && b.getFullYear() === o.getFullYear(), E = b.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), D = d(b);
          return /* @__PURE__ */ p.jsxs(
            "button",
            {
              onClick: () => s(b),
              className: `
                  p-2 text-sm rounded transition-colors relative focus:outline-none
                  ${T ? "text-gray-900 dark:text-gray-100" : "text-gray-400 dark:text-gray-500"}
                  ${C ? "bg-blue-500 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-700" : "hover:bg-gray-100 dark:hover:bg-gray-600"}
                  ${E && !C ? "bg-gray-200 dark:bg-gray-600 font-semibold" : ""}
                `,
              children: [
                b.getDate(),
                D && /* @__PURE__ */ p.jsx(
                  "span",
                  {
                    className: "absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full",
                    "aria-label": "Events available"
                  }
                )
              ]
            },
            k
          );
        })
      ] })
    ] }),
    /* @__PURE__ */ p.jsxs(Pb, { className: "flex flex-col items-start gap-3 border-t border-gray-200 dark:border-gray-600 px-4 !pt-4", children: [
      /* @__PURE__ */ p.jsx("div", { className: "flex w-full items-center justify-between px-1", children: /* @__PURE__ */ p.jsx("div", { className: "text-sm font-medium text-gray-900 dark:text-gray-100", children: o == null ? void 0 : o.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }) }) }),
      /* @__PURE__ */ p.jsx("div", { className: "flex w-full flex-col gap-2", children: y.length === 0 ? /* @__PURE__ */ p.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400 text-center py-4", children: "No events on this day" }) : y.map((b) => {
        const k = t[b.id], T = Bn(k == null ? void 0 : k.category, n), E = Qt(T).replace("bg-", "after:bg-");
        return /* @__PURE__ */ p.jsxs(
          "button",
          {
            className: `bg-gray-50 dark:bg-gray-700 relative rounded-md p-2 pl-6 text-sm text-left w-full after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors focus:outline-none ${E}`,
            onClick: () => r == null ? void 0 : r(b),
            children: [
              /* @__PURE__ */ p.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100", children: b.title }),
              /* @__PURE__ */ p.jsxs("div", { className: "text-muted-foreground dark:text-gray-400 text-xs", children: [
                c(b.startDate),
                " - ",
                c(b.endDate),
                k && ` • ${k.location}`
              ] })
            ]
          },
          b.id
        );
      }) })
    ] })
  ] });
}
function NR({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onLoadMore: o, hasMore: s, loading: i }) {
  const a = (d) => d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), l = /* @__PURE__ */ new Date();
  l.setHours(0, 0, 0, 0);
  const c = [...e.filter((d) => {
    const y = new Date(d.startDate);
    return y.setHours(0, 0, 0, 0), y >= l;
  })].sort((d, y) => d.startDate.getTime() - y.startDate.getTime()), f = c.reduce((d, y) => {
    const w = y.startDate.toDateString();
    return d[w] || (d[w] = []), d[w].push(y), d;
  }, {});
  return /* @__PURE__ */ p.jsxs("div", { className: "space-y-6", children: [
    c.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-12 text-gray-500 dark:text-gray-400", children: [
      /* @__PURE__ */ p.jsx(Ss, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
      /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-medium mb-2", children: "No events found" }),
      /* @__PURE__ */ p.jsx("p", { children: "Try adjusting your filters to see more events." })
    ] }) : Object.entries(f).map(([d, y]) => {
      const w = new Date(d), g = w.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), S = w.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let m;
      return g ? m = "Today" : S ? m = "Tomorrow" : m = w.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }), /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: m }),
          /* @__PURE__ */ p.jsx("div", { className: "flex-1 h-px bg-gray-200 dark:bg-gray-600" }),
          /* @__PURE__ */ p.jsxs("span", { className: "text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full", children: [
            y.length,
            " event",
            y.length > 1 ? "s" : ""
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: y.map((h) => {
          const v = t[h.id], b = Bn(v == null ? void 0 : v.category, n), T = Qt(b).replace("bg-", "after:bg-");
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `bg-muted dark:bg-gray-700 relative rounded-md p-3 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors ${T}`,
              onClick: () => r == null ? void 0 : r(h),
              children: [
                /* @__PURE__ */ p.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ p.jsxs("div", { className: "flex-grow min-w-0", children: [
                    /* @__PURE__ */ p.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 mb-2", children: h.title }),
                    /* @__PURE__ */ p.jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(ro, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsxs("span", { children: [
                          a(h.startDate),
                          " - ",
                          a(h.endDate)
                        ] })
                      ] }),
                      (v == null ? void 0 : v.location) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(js, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: v.location })
                      ] }),
                      (v == null ? void 0 : v.organization) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(Wa, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: v.organization })
                      ] })
                    ] })
                  ] }),
                  v && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: v.cost })
                ] }),
                (v == null ? void 0 : v.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-2", children: /* @__PURE__ */ p.jsx(oo, { variant: "outline", size: "sm", children: "Registration Required" }) })
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
function RR({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onLoadMore: o, hasMore: s, loading: i }) {
  const a = (d) => d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), l = /* @__PURE__ */ new Date();
  l.setHours(0, 0, 0, 0);
  const c = [...e.filter((d) => {
    const y = new Date(d.startDate);
    return y.setHours(0, 0, 0, 0), y >= l;
  })].sort((d, y) => d.startDate.getTime() - y.startDate.getTime()), f = c.reduce((d, y) => {
    const w = y.startDate.toDateString();
    return d[w] || (d[w] = []), d[w].push(y), d;
  }, {});
  return /* @__PURE__ */ p.jsxs("div", { className: "space-y-6", children: [
    c.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-12 text-gray-500 dark:text-gray-400", children: [
      /* @__PURE__ */ p.jsx(Ss, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
      /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-medium mb-2", children: "No events found" }),
      /* @__PURE__ */ p.jsx("p", { children: "Try adjusting your filters to see more events." })
    ] }) : Object.entries(f).map(([d, y]) => {
      const w = new Date(d), g = w.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), S = w.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let m;
      return g ? m = "Today" : S ? m = "Tomorrow" : m = w.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }), /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsx("h3", { className: "text-base font-semibold text-gray-900 dark:text-gray-100", children: m }),
          /* @__PURE__ */ p.jsx("div", { className: "flex-1 h-px bg-gray-200 dark:bg-gray-600" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full", children: y.length })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: y.map((h) => {
          const v = t[h.id], b = Bn(v == null ? void 0 : v.category, n), T = Qt(b).replace("bg-", "after:bg-");
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `bg-muted dark:bg-gray-700 relative rounded-md p-3 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors ${T}`,
              onClick: () => r == null ? void 0 : r(h),
              children: [
                /* @__PURE__ */ p.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ p.jsxs("div", { className: "flex-grow min-w-0", children: [
                    /* @__PURE__ */ p.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 mb-2", children: h.title }),
                    /* @__PURE__ */ p.jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(ro, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsxs("span", { children: [
                          a(h.startDate),
                          " - ",
                          a(h.endDate)
                        ] })
                      ] }),
                      (v == null ? void 0 : v.location) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(js, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: v.location })
                      ] }),
                      (v == null ? void 0 : v.organization) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(Wa, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: v.organization })
                      ] })
                    ] })
                  ] }),
                  v && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: v.cost })
                ] }),
                (v == null ? void 0 : v.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-2", children: /* @__PURE__ */ p.jsx(oo, { variant: "outline", size: "sm", children: "Registration Required" }) })
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
function AR({
  initialView: e = "month",
  initialCategoryFilter: t = "all",
  initialOrganizationFilter: n = "all",
  showWeekView: r = !0,
  showDayView: o = !0
} = {}) {
  var Oe, et, cn, dn;
  const [s, i] = x.useState(e), [a, l] = x.useState(/* @__PURE__ */ new Date()), [u, c] = x.useState(null), [f, d] = x.useState(!1), [y, w] = x.useState(30), [g, S] = x.useState(30), [m, h] = x.useState(15);
  q.useEffect(() => {
    const L = document.querySelector(".unbc-calendar-container");
    if (L) {
      const pe = parseInt(L.getAttribute("data-list-initial-items") || "30"), Pe = parseInt(L.getAttribute("data-list-load-more-count") || "15");
      S(pe), h(Pe), w(pe);
    }
  }, []), q.useEffect(() => {
    const L = document.createElement("style");
    return L.textContent = `
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
    `, document.head.appendChild(L), () => {
      document.head.removeChild(L);
    };
  }, []);
  const v = !1;
  AT();
  const b = m0(), k = LT(), T = g0(), C = IT(), [E, D] = x.useState("all"), [N, A] = x.useState("all"), [j, V] = x.useState(""), [z, Y] = x.useState("");
  q.useEffect(() => {
    const L = setTimeout(() => {
      V(z);
    }, 300);
    return () => clearTimeout(L);
  }, [z]);
  const O = q.useMemo(() => {
    var L;
    return ((L = C.config) == null ? void 0 : L.categoriesWithOrganizations) || [];
  }, [C.config]);
  q.useEffect(() => {
    !O.includes(E) && E !== "all" && A("all");
  }, [E, O]);
  const {
    events: F,
    eventMetadata: P,
    loading: M,
    error: I,
    setFilters: H
  } = b, te = k.organizations, dt = k.loading, { categories: ie, loading: ft } = T, ve = q.useMemo(() => xw(ie), [ie]), B = q.useMemo(() => {
    const L = /* @__PURE__ */ new Map();
    return te.forEach((pe) => {
      L.set(pe.id.toString(), pe.title.rendered);
    }), L;
  }, [te]);
  q.useEffect(() => {
    H && H({
      per_page: 500
      // Load more events to cover more time periods
    });
  }, [H, v]);
  const re = q.useCallback((L, pe) => {
    var wo, So;
    const Pe = P[L.id];
    if (!Pe) return !1;
    const ke = (So = (wo = C.config) == null ? void 0 : wo.categoryRelationships) == null ? void 0 : So[pe];
    return ke ? ke.includes(Pe.category) : Pe.category === pe;
  }, [P, C.config]), ae = q.useMemo(() => {
    let L = F;
    if (s === "list") {
      const pe = /* @__PURE__ */ new Date();
      pe.setHours(0, 0, 0, 0), L = L.filter((Pe) => {
        const ke = new Date(Pe.startDate);
        return ke.setHours(0, 0, 0, 0), ke >= pe;
      }), L = L.sort((Pe, ke) => Pe.startDate.getTime() - ke.startDate.getTime());
    }
    if (E !== "all" && (L = L.filter((pe) => re(pe, E))), N !== "all") {
      const pe = B.get(N);
      L = L.filter((Pe) => {
        const ke = P[Pe.id];
        return pe && (ke == null ? void 0 : ke.organization) === pe;
      });
    }
    if (j) {
      const pe = j.toLowerCase();
      L = L.filter((Pe) => {
        var wo, So, hf;
        const ke = P[Pe.id];
        return Pe.title.toLowerCase().includes(pe) || ((wo = ke == null ? void 0 : ke.description) == null ? void 0 : wo.toLowerCase().includes(pe)) || ((So = ke == null ? void 0 : ke.location) == null ? void 0 : So.toLowerCase().includes(pe)) || ((hf = ke == null ? void 0 : ke.organization) == null ? void 0 : hf.toLowerCase().includes(pe));
      });
    }
    return L;
  }, [F, P, E, N, j, B, s, re]), oe = q.useCallback((L) => {
    l(L), i("day");
  }, []), X = q.useCallback((L) => {
    c(L), d(!0);
  }, []), ee = q.useCallback(() => {
    w((L) => L + m);
  }, [m]);
  return q.useEffect(() => {
    s === "list" && w(g);
  }, [s, E, N, j, g]), M || dt || ft ? /* @__PURE__ */ p.jsx("div", { className: "w-full flex items-center justify-center py-12", children: /* @__PURE__ */ p.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ p.jsx(Zv, { className: "h-8 w-8 animate-spin mx-auto mb-4" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-gray-600", children: "Loading calendar..." })
  ] }) }) : I ? /* @__PURE__ */ p.jsx("div", { className: "w-full py-12", children: /* @__PURE__ */ p.jsx(fd, { className: "max-w-md mx-auto", children: /* @__PURE__ */ p.jsxs(_y, { className: "pt-6 text-center", children: [
    /* @__PURE__ */ p.jsxs("p", { className: "text-red-600 mb-4", children: [
      "Error loading events: ",
      I
    ] }),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        onClick: () => window.location.reload(),
        className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
        children: "Retry"
      }
    )
  ] }) }) }) : /* @__PURE__ */ p.jsxs("div", { className: "w-full space-y-6", children: [
    /* @__PURE__ */ p.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm unbc-calendar-view", children: /* @__PURE__ */ p.jsxs(DT, { value: s, onValueChange: i, className: "w-full", children: [
      /* @__PURE__ */ p.jsx("div", { className: "hidden md:block p-6 pb-0", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsxs(li, { value: E, onValueChange: D, children: [
            /* @__PURE__ */ p.jsx(ui, { className: "w-40 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${E === "all" ? "bg-gray-400" : Qt(((Oe = ie.find((L) => L.slug === E)) == null ? void 0 : Oe.variant) || "default")}` }),
              /* @__PURE__ */ p.jsx("span", { children: E === "all" ? "All Categories" : ((et = ie.find((L) => L.slug === E)) == null ? void 0 : et.name) || "All Categories" })
            ] }) }),
            /* @__PURE__ */ p.jsxs(ci, { className: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 z-[9999] shadow-lg", children: [
              /* @__PURE__ */ p.jsx(mn, { value: "all", className: "text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700 focus:outline-none", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                /* @__PURE__ */ p.jsx("span", { className: "w-3 h-3 rounded-full flex-shrink-0 bg-gray-400" }),
                /* @__PURE__ */ p.jsx("span", { children: "All" })
              ] }) }),
              ie.map((L) => /* @__PURE__ */ p.jsx(
                mn,
                {
                  value: L.slug,
                  className: "text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700 focus:outline-none",
                  children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                    /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${Qt(L.variant || "default")}` }),
                    /* @__PURE__ */ p.jsx("span", { children: L.name })
                  ] })
                },
                L.id
              ))
            ] })
          ] }),
          O.includes(E) && /* @__PURE__ */ p.jsxs(li, { value: N, onValueChange: A, children: [
            /* @__PURE__ */ p.jsx(ui, { className: "w-44 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 [&>span]:truncate [&>span]:block", children: /* @__PURE__ */ p.jsx(qp, { placeholder: "All Organizations" }) }),
            /* @__PURE__ */ p.jsxs(ci, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 max-h-[200px] overflow-y-auto", children: [
              /* @__PURE__ */ p.jsx(mn, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Organizations" }),
              te.map((L) => /* @__PURE__ */ p.jsx(
                mn,
                {
                  value: L.id.toString(),
                  className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600",
                  children: L.title.rendered
                },
                L.id
              ))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ p.jsxs(Zp, { className: "h-9 bg-gray-100 dark:bg-gray-700 p-1", children: [
          o && /* @__PURE__ */ p.jsxs(Yn, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(ro, { className: "h-3 w-3" }),
            "Day"
          ] }),
          r && /* @__PURE__ */ p.jsxs(Yn, { value: "week", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(ji, { className: "h-3 w-3" }),
            "Week"
          ] }),
          /* @__PURE__ */ p.jsxs(Yn, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(Ss, { className: "h-3 w-3" }),
            "Month"
          ] }),
          /* @__PURE__ */ p.jsxs(Yn, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(Qp, { className: "h-3 w-3" }),
            "List"
          ] })
        ] }) }),
        /* @__PURE__ */ p.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ p.jsx(
          Ju,
          {
            placeholder: "Search events...",
            value: z,
            onChange: (L) => Y(L.target.value),
            className: "w-40 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
          }
        ) })
      ] }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "md:hidden", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "px-4 py-4 flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ p.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ p.jsxs(li, { value: E, onValueChange: D, children: [
            /* @__PURE__ */ p.jsx(ui, { className: "w-auto min-w-[60px] h-9 px-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${E === "all" ? "bg-gray-400" : Qt(((cn = ie.find((L) => L.slug === E)) == null ? void 0 : cn.variant) || "default")}` }),
              /* @__PURE__ */ p.jsx("span", { className: "text-xs truncate max-w-[60px]", children: E === "all" ? "All" : ((dn = ie.find((L) => L.slug === E)) == null ? void 0 : dn.name) || "All" })
            ] }) }),
            /* @__PURE__ */ p.jsxs(ci, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 z-[9999]", children: [
              /* @__PURE__ */ p.jsx(mn, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                /* @__PURE__ */ p.jsx("span", { className: "w-3 h-3 rounded-full flex-shrink-0 bg-gray-400" }),
                /* @__PURE__ */ p.jsx("span", { children: "All" })
              ] }) }),
              ie.map((L) => /* @__PURE__ */ p.jsx(
                mn,
                {
                  value: L.slug,
                  className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600",
                  children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                    /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${Qt(L.variant || "default")}` }),
                    /* @__PURE__ */ p.jsx("span", { children: L.name })
                  ] })
                },
                L.id
              ))
            ] })
          ] }) }),
          /* @__PURE__ */ p.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ p.jsxs(Zp, { className: "h-9 bg-gray-100 dark:bg-gray-700 p-1", children: [
            o && /* @__PURE__ */ p.jsxs(Yn, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300 flex-1", children: [
              /* @__PURE__ */ p.jsx(ro, { className: "h-3 w-3" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Day" })
            ] }),
            /* @__PURE__ */ p.jsxs(Yn, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300 flex-1", children: [
              /* @__PURE__ */ p.jsx(Ss, { className: "h-3 w-3" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Month" })
            ] }),
            /* @__PURE__ */ p.jsxs(Yn, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300 flex-1", children: [
              /* @__PURE__ */ p.jsx(Qp, { className: "h-3 w-3" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "List" })
            ] })
          ] }) }),
          /* @__PURE__ */ p.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ p.jsx(
            Zt,
            {
              variant: "outline",
              size: "sm",
              className: "h-9 px-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
              onClick: () => {
                const L = document.querySelector(".mobile-search-input");
                L && (L.style.display = L.style.display === "none" ? "block" : "none", L.style.display !== "none" && L.focus());
              },
              children: /* @__PURE__ */ p.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "text-gray-600 dark:text-gray-300", children: [
                /* @__PURE__ */ p.jsx("circle", { cx: "11", cy: "11", r: "8" }),
                /* @__PURE__ */ p.jsx("path", { d: "m21 21-4.35-4.35" })
              ] })
            }
          ) })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ p.jsx(
          Ju,
          {
            placeholder: "Search events...",
            value: z,
            onChange: (L) => Y(L.target.value),
            className: "mobile-search-input w-full h-9 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400",
            style: { display: "none" }
          }
        ) }),
        O.includes(E) && /* @__PURE__ */ p.jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ p.jsxs(li, { value: N, onValueChange: A, children: [
          /* @__PURE__ */ p.jsx(ui, { className: "w-full h-9 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsx(qp, { placeholder: "All Organizations", className: "truncate" }) }),
          /* @__PURE__ */ p.jsxs(ci, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 max-h-[200px] overflow-y-auto", children: [
            /* @__PURE__ */ p.jsx(mn, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Organizations" }),
            te.map((L) => /* @__PURE__ */ p.jsx(
              mn,
              {
                value: L.id.toString(),
                className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600",
                children: L.title.rendered
              },
              L.id
            ))
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ p.jsxs(fi, { value: "month", className: "px-6 pb-6 md:p-6", children: [
        /* @__PURE__ */ p.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ p.jsx(
          ER,
          {
            events: ae,
            eventMetadata: P,
            categoryMappings: ve,
            onDateClick: oe,
            onEventClick: X
          }
        ) }),
        /* @__PURE__ */ p.jsx("div", { className: "block md:hidden mobile-calendar", children: /* @__PURE__ */ p.jsx(
          DR,
          {
            events: ae,
            eventMetadata: P,
            categoryMappings: ve,
            onEventClick: X
          }
        ) })
      ] }),
      /* @__PURE__ */ p.jsx(fi, { value: "week", className: "px-6 pb-6 md:p-6", children: /* @__PURE__ */ p.jsx(
        TR,
        {
          events: ae,
          eventMetadata: P,
          categoryMappings: ve,
          onEventClick: X
        }
      ) }),
      /* @__PURE__ */ p.jsx(fi, { value: "day", className: "px-6 pb-6 md:p-6", children: /* @__PURE__ */ p.jsx(
        PR,
        {
          events: ae,
          eventMetadata: P,
          categoryMappings: ve,
          initialDate: a,
          onEventClick: X
        }
      ) }),
      /* @__PURE__ */ p.jsxs(fi, { value: "list", className: "px-6 pb-6 md:p-6", children: [
        /* @__PURE__ */ p.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ p.jsx(
          NR,
          {
            events: ae.slice(0, y),
            eventMetadata: P,
            categoryMappings: ve,
            onEventClick: X,
            onLoadMore: ee,
            hasMore: ae.length > y,
            loading: M
          }
        ) }),
        /* @__PURE__ */ p.jsx("div", { className: "block md:hidden", children: /* @__PURE__ */ p.jsx(
          RR,
          {
            events: ae.slice(0, y),
            eventMetadata: P,
            categoryMappings: ve,
            onEventClick: X,
            onLoadMore: ee,
            hasMore: ae.length > y,
            loading: M
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsx(
      $0,
      {
        event: u,
        eventMetadata: P,
        open: f,
        onOpenChange: d
      }
    )
  ] });
}
function ww({
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
  }), { filteredEvents: u, eventsByDate: c } = q.useMemo(() => {
    let f = e;
    const d = /* @__PURE__ */ new Date();
    (r || o) && (f = f.filter((w) => {
      var S;
      const g = t[w.id];
      return o ? (g == null ? void 0 : g.organization) === o : r ? ((S = g == null ? void 0 : g.organization_id) == null ? void 0 : S.toString()) === r : !0;
    })), i || (f = f.filter((w) => w.startDate >= d)), f.sort((w, g) => w.startDate.getTime() - g.startDate.getTime()), s && s > 0 && (f = f.slice(0, s));
    const y = f.reduce((w, g) => {
      const S = g.startDate.toDateString();
      return w[S] || (w[S] = []), w[S].push(g), w;
    }, {});
    return { filteredEvents: f, eventsByDate: y };
  }, [e, t, r, o, s, i]);
  return u.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-8 text-gray-500 dark:text-gray-400", children: [
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
        u.length,
        " upcoming event",
        u.length !== 1 ? "s" : ""
      ] })
    ] }),
    Object.entries(c).map(([f, d]) => {
      const y = new Date(f), w = y.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), g = y.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let S = y.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      });
      return w ? S = `Today, ${S}` : g && (S = `Tomorrow, ${S}`), /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: S }),
          /* @__PURE__ */ p.jsx("div", { className: "flex-1 h-px bg-gray-200 dark:bg-gray-600" }),
          /* @__PURE__ */ p.jsxs("span", { className: "text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full", children: [
            d.length,
            " event",
            d.length > 1 ? "s" : ""
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: d.map((m) => {
          const h = t[m.id], v = Bn(h == null ? void 0 : h.category, n), b = CR(v);
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
                      /* @__PURE__ */ p.jsx(ro, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsxs("span", { children: [
                        l(m.startDate),
                        " - ",
                        l(m.endDate)
                      ] })
                    ] }) }),
                    h && /* @__PURE__ */ p.jsxs("div", { className: "space-y-1 text-sm text-gray-600 dark:text-gray-400", children: [
                      h.location && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(js, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: h.location })
                      ] }),
                      !o && h.organization && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(Wa, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: h.organization })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col items-end gap-2 flex-shrink-0 ml-4", children: [
                    (h == null ? void 0 : h.cost) && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400", children: h.cost }),
                    (h == null ? void 0 : h.category) && /* @__PURE__ */ p.jsx(oo, { variant: "secondary", size: "sm", className: "text-xs", children: h.category.charAt(0).toUpperCase() + h.category.slice(1) })
                  ] })
                ] }),
                (h == null ? void 0 : h.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-3 pt-2 border-t border-gray-100 dark:border-gray-700", children: /* @__PURE__ */ p.jsx(oo, { variant: "outline", size: "sm", children: "📝 Registration Required" }) })
              ]
            },
            m.id
          );
        }) })
      ] }, f);
    })
  ] });
}
function MR({
  organizationId: e,
  organizationName: t,
  limit: n = 5,
  showPastEvents: r = !1
}) {
  const [o, s] = x.useState(null), [i, a] = x.useState(!1), {
    events: l,
    eventMetadata: u,
    loading: c,
    error: f
  } = m0({
    per_page: 1e3
    // Get all events to filter client-side
  }), { eventCategories: d } = g0(), y = xw(d), w = (g) => {
    s(g), a(!0);
  };
  return c ? /* @__PURE__ */ p.jsx("div", { className: "w-full flex items-center justify-center py-8", children: /* @__PURE__ */ p.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ p.jsx(Zv, { className: "h-6 w-6 animate-spin mx-auto mb-2" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-gray-600 text-sm", children: "Loading events..." })
  ] }) }) : f ? /* @__PURE__ */ p.jsx("div", { className: "w-full py-8", children: /* @__PURE__ */ p.jsx("div", { className: "max-w-md mx-auto bg-red-50 border border-red-200 rounded-lg p-4", children: /* @__PURE__ */ p.jsxs("p", { className: "text-red-600 text-sm", children: [
    "Error loading events: ",
    f
  ] }) }) }) : /* @__PURE__ */ p.jsxs("div", { className: "unbc-organization-events", children: [
    /* @__PURE__ */ p.jsx(
      ww,
      {
        events: l,
        eventMetadata: u,
        categoryMappings: y,
        organizationId: e,
        organizationName: t,
        limit: n,
        showPastEvents: r,
        onEventClick: w
      }
    ),
    /* @__PURE__ */ p.jsx(
      $0,
      {
        event: o,
        eventMetadata: u,
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
  const n = Ia(t), r = t.dataset.view || "month", o = t.dataset.categoryFilter || "all", s = t.dataset.organizationFilter || "all", i = t.dataset.showWeekView !== "false", a = t.dataset.showDayView !== "false";
  n.render(
    /* @__PURE__ */ p.jsx(q.StrictMode, { children: /* @__PURE__ */ p.jsx(
      AR,
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
  const n = Ia(t), r = t.dataset.organizationId || "", o = t.dataset.organizationName || "", s = parseInt(t.dataset.limit) || 5, i = t.dataset.showPast === "true";
  n.render(
    /* @__PURE__ */ p.jsx(q.StrictMode, { children: /* @__PURE__ */ p.jsx(
      jR,
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
  const n = Ia(t), r = t.dataset.organizationId || "", o = t.dataset.organizationName || "", s = parseInt(t.dataset.limit) || 5, i = t.dataset.showPast === "true";
  n.render(
    /* @__PURE__ */ p.jsx(q.StrictMode, { children: /* @__PURE__ */ p.jsx(
      MR,
      {
        organizationId: r,
        organizationName: o,
        limit: s,
        showPastEvents: i
      }
    ) })
  );
};
function jR({ organizationId: e, organizationName: t, limit: n, showPastEvents: r }) {
  return /* @__PURE__ */ p.jsx(
    ww,
    {
      events: [],
      eventMetadata: {},
      organizationId: e,
      organizationName: t,
      limit: n,
      showPastEvents: r
    }
  );
}
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('[data-component="calendar"]').forEach((r) => {
    r.id && window.renderUNBCCalendar(r.id);
  }), document.querySelectorAll('[data-component="events-list"]').forEach((r) => {
    r.id && window.renderUNBCEventsList(r.id);
  }), document.querySelectorAll('[data-component="organization-events"]').forEach((r) => {
    r.id && window.renderUNBCOrganizationEvents(r.id);
  });
});
