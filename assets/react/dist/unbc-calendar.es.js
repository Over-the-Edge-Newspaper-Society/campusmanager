function dw(e, t) {
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
function am(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var lm = { exports: {} }, ma = {}, um = { exports: {} }, G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ws = Symbol.for("react.element"), fw = Symbol.for("react.portal"), pw = Symbol.for("react.fragment"), hw = Symbol.for("react.strict_mode"), mw = Symbol.for("react.profiler"), gw = Symbol.for("react.provider"), yw = Symbol.for("react.context"), vw = Symbol.for("react.forward_ref"), xw = Symbol.for("react.suspense"), ww = Symbol.for("react.memo"), Sw = Symbol.for("react.lazy"), lf = Symbol.iterator;
function bw(e) {
  return e === null || typeof e != "object" ? null : (e = lf && e[lf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var cm = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, dm = Object.assign, fm = {};
function eo(e, t, n) {
  this.props = e, this.context = t, this.refs = fm, this.updater = n || cm;
}
eo.prototype.isReactComponent = {};
eo.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
eo.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function pm() {
}
pm.prototype = eo.prototype;
function fc(e, t, n) {
  this.props = e, this.context = t, this.refs = fm, this.updater = n || cm;
}
var pc = fc.prototype = new pm();
pc.constructor = fc;
dm(pc, eo.prototype);
pc.isPureReactComponent = !0;
var uf = Array.isArray, hm = Object.prototype.hasOwnProperty, hc = { current: null }, mm = { key: !0, ref: !0, __self: !0, __source: !0 };
function gm(e, t, n) {
  var r, o = {}, s = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (s = "" + t.key), t) hm.call(t, r) && !mm.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: ws, type: e, key: s, ref: i, props: o, _owner: hc.current };
}
function kw(e, t) {
  return { $$typeof: ws, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function mc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ws;
}
function Cw(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var cf = /\/+/g;
function Ya(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Cw("" + e.key) : t.toString(36);
}
function pi(e, t, n, r, o) {
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
        case ws:
        case fw:
          i = !0;
      }
  }
  if (i) return i = e, o = o(i), e = r === "" ? "." + Ya(i, 0) : r, uf(o) ? (n = "", e != null && (n = e.replace(cf, "$&/") + "/"), pi(o, t, n, "", function(u) {
    return u;
  })) : o != null && (mc(o) && (o = kw(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(cf, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", uf(e)) for (var a = 0; a < e.length; a++) {
    s = e[a];
    var l = r + Ya(s, a);
    i += pi(s, t, n, l, o);
  }
  else if (l = bw(e), typeof l == "function") for (e = l.call(e), a = 0; !(s = e.next()).done; ) s = s.value, l = r + Ya(s, a++), i += pi(s, t, n, l, o);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Ls(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return pi(e, r, "", "", function(s) {
    return t.call(n, s, o++);
  }), r;
}
function Ew(e) {
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
var $e = { current: null }, hi = { transition: null }, Pw = { ReactCurrentDispatcher: $e, ReactCurrentBatchConfig: hi, ReactCurrentOwner: hc };
function ym() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = { map: Ls, forEach: function(e, t, n) {
  Ls(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Ls(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Ls(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!mc(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
G.Component = eo;
G.Fragment = pw;
G.Profiler = mw;
G.PureComponent = fc;
G.StrictMode = hw;
G.Suspense = xw;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pw;
G.act = ym;
G.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = dm({}, e.props), o = e.key, s = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, i = hc.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) hm.call(t, l) && !mm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ws, type: e.type, key: o, ref: s, props: r, _owner: i };
};
G.createContext = function(e) {
  return e = { $$typeof: yw, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: gw, _context: e }, e.Consumer = e;
};
G.createElement = gm;
G.createFactory = function(e) {
  var t = gm.bind(null, e);
  return t.type = e, t;
};
G.createRef = function() {
  return { current: null };
};
G.forwardRef = function(e) {
  return { $$typeof: vw, render: e };
};
G.isValidElement = mc;
G.lazy = function(e) {
  return { $$typeof: Sw, _payload: { _status: -1, _result: e }, _init: Ew };
};
G.memo = function(e, t) {
  return { $$typeof: ww, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function(e) {
  var t = hi.transition;
  hi.transition = {};
  try {
    e();
  } finally {
    hi.transition = t;
  }
};
G.unstable_act = ym;
G.useCallback = function(e, t) {
  return $e.current.useCallback(e, t);
};
G.useContext = function(e) {
  return $e.current.useContext(e);
};
G.useDebugValue = function() {
};
G.useDeferredValue = function(e) {
  return $e.current.useDeferredValue(e);
};
G.useEffect = function(e, t) {
  return $e.current.useEffect(e, t);
};
G.useId = function() {
  return $e.current.useId();
};
G.useImperativeHandle = function(e, t, n) {
  return $e.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function(e, t) {
  return $e.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function(e, t) {
  return $e.current.useLayoutEffect(e, t);
};
G.useMemo = function(e, t) {
  return $e.current.useMemo(e, t);
};
G.useReducer = function(e, t, n) {
  return $e.current.useReducer(e, t, n);
};
G.useRef = function(e) {
  return $e.current.useRef(e);
};
G.useState = function(e) {
  return $e.current.useState(e);
};
G.useSyncExternalStore = function(e, t, n) {
  return $e.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function() {
  return $e.current.useTransition();
};
G.version = "18.3.1";
um.exports = G;
var x = um.exports;
const ve = /* @__PURE__ */ am(x), vm = /* @__PURE__ */ dw({
  __proto__: null,
  default: ve
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
var Tw = x, Dw = Symbol.for("react.element"), Nw = Symbol.for("react.fragment"), Rw = Object.prototype.hasOwnProperty, Aw = Tw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Mw = { key: !0, ref: !0, __self: !0, __source: !0 };
function xm(e, t, n) {
  var r, o = {}, s = null, i = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Rw.call(t, r) && !Mw.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Dw, type: e, key: s, ref: i, props: o, _owner: Aw.current };
}
ma.Fragment = Nw;
ma.jsx = xm;
ma.jsxs = xm;
lm.exports = ma;
var p = lm.exports, wm = { exports: {} }, st = {}, Sm = { exports: {} }, bm = {};
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
  function t(T, j) {
    var _ = T.length;
    T.push(j);
    e: for (; 0 < _; ) {
      var W = _ - 1 >>> 1, ae = T[W];
      if (0 < o(ae, j)) T[W] = j, T[_] = ae, _ = W;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var j = T[0], _ = T.pop();
    if (_ !== j) {
      T[0] = _;
      e: for (var W = 0, ae = T.length, Tt = ae >>> 1; W < Tt; ) {
        var Re = 2 * (W + 1) - 1, Dt = T[Re], Ve = Re + 1, B = T[Ve];
        if (0 > o(Dt, _)) Ve < ae && 0 > o(B, Dt) ? (T[W] = B, T[Ve] = _, W = Ve) : (T[W] = Dt, T[Re] = _, W = Re);
        else if (Ve < ae && 0 > o(B, _)) T[W] = B, T[Ve] = _, W = Ve;
        else break e;
      }
    }
    return j;
  }
  function o(T, j) {
    var _ = T.sortIndex - j.sortIndex;
    return _ !== 0 ? _ : T.id - j.id;
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
  var l = [], u = [], c = 1, d = null, f = 3, h = !1, w = !1, y = !1, S = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(T) {
    for (var j = n(u); j !== null; ) {
      if (j.callback === null) r(u);
      else if (j.startTime <= T) r(u), j.sortIndex = j.expirationTime, t(l, j);
      else break;
      j = n(u);
    }
  }
  function b(T) {
    if (y = !1, v(T), !w) if (n(l) !== null) w = !0, F(k);
    else {
      var j = n(u);
      j !== null && V(b, j.startTime - T);
    }
  }
  function k(T, j) {
    w = !1, y && (y = !1, g(P), P = -1), h = !0;
    var _ = f;
    try {
      for (v(j), d = n(l); d !== null && (!(d.expirationTime > j) || T && !N()); ) {
        var W = d.callback;
        if (typeof W == "function") {
          d.callback = null, f = d.priorityLevel;
          var ae = W(d.expirationTime <= j);
          j = e.unstable_now(), typeof ae == "function" ? d.callback = ae : d === n(l) && r(l), v(j);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Tt = !0;
      else {
        var Re = n(u);
        Re !== null && V(b, Re.startTime - j), Tt = !1;
      }
      return Tt;
    } finally {
      d = null, f = _, h = !1;
    }
  }
  var C = !1, E = null, P = -1, R = 5, D = -1;
  function N() {
    return !(e.unstable_now() - D < R);
  }
  function A() {
    if (E !== null) {
      var T = e.unstable_now();
      D = T;
      var j = !0;
      try {
        j = E(!0, T);
      } finally {
        j ? O() : (C = !1, E = null);
      }
    } else C = !1;
  }
  var O;
  if (typeof m == "function") O = function() {
    m(A);
  };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(), K = I.port2;
    I.port1.onmessage = A, O = function() {
      K.postMessage(null);
    };
  } else O = function() {
    S(A, 0);
  };
  function F(T) {
    E = T, C || (C = !0, O());
  }
  function V(T, j) {
    P = S(function() {
      T(e.unstable_now());
    }, j);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    w || h || (w = !0, F(k));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(T) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var j = 3;
        break;
      default:
        j = f;
    }
    var _ = f;
    f = j;
    try {
      return T();
    } finally {
      f = _;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, j) {
    switch (T) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        T = 3;
    }
    var _ = f;
    f = T;
    try {
      return j();
    } finally {
      f = _;
    }
  }, e.unstable_scheduleCallback = function(T, j, _) {
    var W = e.unstable_now();
    switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? W + _ : W) : _ = W, T) {
      case 1:
        var ae = -1;
        break;
      case 2:
        ae = 250;
        break;
      case 5:
        ae = 1073741823;
        break;
      case 4:
        ae = 1e4;
        break;
      default:
        ae = 5e3;
    }
    return ae = _ + ae, T = { id: c++, callback: j, priorityLevel: T, startTime: _, expirationTime: ae, sortIndex: -1 }, _ > W ? (T.sortIndex = _, t(u, T), n(l) === null && T === n(u) && (y ? (g(P), P = -1) : y = !0, V(b, _ - W))) : (T.sortIndex = ae, t(l, T), w || h || (w = !0, F(k))), T;
  }, e.unstable_shouldYield = N, e.unstable_wrapCallback = function(T) {
    var j = f;
    return function() {
      var _ = f;
      f = j;
      try {
        return T.apply(this, arguments);
      } finally {
        f = _;
      }
    };
  };
})(bm);
Sm.exports = bm;
var jw = Sm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lw = x, rt = jw;
function M(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var km = /* @__PURE__ */ new Set(), Go = {};
function lr(e, t) {
  Br(e, t), Br(e + "Capture", t);
}
function Br(e, t) {
  for (Go[e] = t, e = 0; e < t.length; e++) km.add(t[e]);
}
var Qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Hl = Object.prototype.hasOwnProperty, _w = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, df = {}, ff = {};
function Ow(e) {
  return Hl.call(ff, e) ? !0 : Hl.call(df, e) ? !1 : _w.test(e) ? ff[e] = !0 : (df[e] = !0, !1);
}
function Iw(e, t, n, r) {
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
function Fw(e, t, n, r) {
  if (t === null || typeof t > "u" || Iw(e, t, n, r)) return !0;
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
function Ue(e, t, n, r, o, s, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = i;
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ne[e] = new Ue(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ne[t] = new Ue(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ne[e] = new Ue(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ne[e] = new Ue(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ne[e] = new Ue(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ne[e] = new Ue(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ne[e] = new Ue(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ne[e] = new Ue(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ne[e] = new Ue(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var gc = /[\-:]([a-z])/g;
function yc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    gc,
    yc
  );
  Ne[t] = new Ue(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(gc, yc);
  Ne[t] = new Ue(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(gc, yc);
  Ne[t] = new Ue(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ne[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new Ue("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ne[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function vc(e, t, n, r) {
  var o = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Fw(t, n, o, r) && (n = null), r || o === null ? Ow(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rn = Lw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _s = Symbol.for("react.element"), mr = Symbol.for("react.portal"), gr = Symbol.for("react.fragment"), xc = Symbol.for("react.strict_mode"), Kl = Symbol.for("react.profiler"), Cm = Symbol.for("react.provider"), Em = Symbol.for("react.context"), wc = Symbol.for("react.forward_ref"), Gl = Symbol.for("react.suspense"), Yl = Symbol.for("react.suspense_list"), Sc = Symbol.for("react.memo"), cn = Symbol.for("react.lazy"), Pm = Symbol.for("react.offscreen"), pf = Symbol.iterator;
function mo(e) {
  return e === null || typeof e != "object" ? null : (e = pf && e[pf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var fe = Object.assign, Xa;
function Po(e) {
  if (Xa === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Xa = t && t[1] || "";
  }
  return `
` + Xa + e;
}
var Qa = !1;
function qa(e, t) {
  if (!e || Qa) return "";
  Qa = !0;
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
    Qa = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Po(e) : "";
}
function Vw(e) {
  switch (e.tag) {
    case 5:
      return Po(e.type);
    case 16:
      return Po("Lazy");
    case 13:
      return Po("Suspense");
    case 19:
      return Po("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = qa(e.type, !1), e;
    case 11:
      return e = qa(e.type.render, !1), e;
    case 1:
      return e = qa(e.type, !0), e;
    default:
      return "";
  }
}
function Xl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case gr:
      return "Fragment";
    case mr:
      return "Portal";
    case Kl:
      return "Profiler";
    case xc:
      return "StrictMode";
    case Gl:
      return "Suspense";
    case Yl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Em:
      return (e.displayName || "Context") + ".Consumer";
    case Cm:
      return (e._context.displayName || "Context") + ".Provider";
    case wc:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Sc:
      return t = e.displayName || null, t !== null ? t : Xl(e.type) || "Memo";
    case cn:
      t = e._payload, e = e._init;
      try {
        return Xl(e(t));
      } catch {
      }
  }
  return null;
}
function zw(e) {
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
      return Xl(t);
    case 8:
      return t === xc ? "StrictMode" : "Mode";
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
function Tn(e) {
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
function Tm(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Bw(e) {
  var t = Tm(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Os(e) {
  e._valueTracker || (e._valueTracker = Bw(e));
}
function Dm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Tm(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Mi(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ql(e, t) {
  var n = t.checked;
  return fe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function hf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Tn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Nm(e, t) {
  t = t.checked, t != null && vc(e, "checked", t, !1);
}
function ql(e, t) {
  Nm(e, t);
  var n = Tn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Zl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Zl(e, t.type, Tn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function mf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Zl(e, t, n) {
  (t !== "number" || Mi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var To = Array.isArray;
function Mr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Tn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Jl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return fe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function gf(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(M(92));
      if (To(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Tn(n) };
}
function Rm(e, t) {
  var n = Tn(t.value), r = Tn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function yf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Am(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function eu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Am(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Is, Mm = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Is = Is || document.createElement("div"), Is.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Is.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Yo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Lo = {
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
}, $w = ["Webkit", "ms", "Moz", "O"];
Object.keys(Lo).forEach(function(e) {
  $w.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Lo[t] = Lo[e];
  });
});
function jm(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Lo.hasOwnProperty(e) && Lo[e] ? ("" + t).trim() : t + "px";
}
function Lm(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = jm(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Uw = fe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function tu(e, t) {
  if (t) {
    if (Uw[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
  }
}
function nu(e, t) {
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
var ru = null;
function bc(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ou = null, jr = null, Lr = null;
function vf(e) {
  if (e = ks(e)) {
    if (typeof ou != "function") throw Error(M(280));
    var t = e.stateNode;
    t && (t = wa(t), ou(e.stateNode, e.type, t));
  }
}
function _m(e) {
  jr ? Lr ? Lr.push(e) : Lr = [e] : jr = e;
}
function Om() {
  if (jr) {
    var e = jr, t = Lr;
    if (Lr = jr = null, vf(e), t) for (e = 0; e < t.length; e++) vf(t[e]);
  }
}
function Im(e, t) {
  return e(t);
}
function Fm() {
}
var Za = !1;
function Vm(e, t, n) {
  if (Za) return e(t, n);
  Za = !0;
  try {
    return Im(e, t, n);
  } finally {
    Za = !1, (jr !== null || Lr !== null) && (Fm(), Om());
  }
}
function Xo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = wa(n);
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
  if (n && typeof n != "function") throw Error(M(231, t, typeof n));
  return n;
}
var su = !1;
if (Qt) try {
  var go = {};
  Object.defineProperty(go, "passive", { get: function() {
    su = !0;
  } }), window.addEventListener("test", go, go), window.removeEventListener("test", go, go);
} catch {
  su = !1;
}
function Ww(e, t, n, r, o, s, i, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var _o = !1, ji = null, Li = !1, iu = null, Hw = { onError: function(e) {
  _o = !0, ji = e;
} };
function Kw(e, t, n, r, o, s, i, a, l) {
  _o = !1, ji = null, Ww.apply(Hw, arguments);
}
function Gw(e, t, n, r, o, s, i, a, l) {
  if (Kw.apply(this, arguments), _o) {
    if (_o) {
      var u = ji;
      _o = !1, ji = null;
    } else throw Error(M(198));
    Li || (Li = !0, iu = u);
  }
}
function ur(e) {
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
function zm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function xf(e) {
  if (ur(e) !== e) throw Error(M(188));
}
function Yw(e) {
  var t = e.alternate;
  if (!t) {
    if (t = ur(e), t === null) throw Error(M(188));
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
        if (s === n) return xf(o), e;
        if (s === r) return xf(o), t;
        s = s.sibling;
      }
      throw Error(M(188));
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
        if (!i) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function Bm(e) {
  return e = Yw(e), e !== null ? $m(e) : null;
}
function $m(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = $m(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Um = rt.unstable_scheduleCallback, wf = rt.unstable_cancelCallback, Xw = rt.unstable_shouldYield, Qw = rt.unstable_requestPaint, xe = rt.unstable_now, qw = rt.unstable_getCurrentPriorityLevel, kc = rt.unstable_ImmediatePriority, Wm = rt.unstable_UserBlockingPriority, _i = rt.unstable_NormalPriority, Zw = rt.unstable_LowPriority, Hm = rt.unstable_IdlePriority, ga = null, _t = null;
function Jw(e) {
  if (_t && typeof _t.onCommitFiberRoot == "function") try {
    _t.onCommitFiberRoot(ga, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var St = Math.clz32 ? Math.clz32 : n1, e1 = Math.log, t1 = Math.LN2;
function n1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (e1(e) / t1 | 0) | 0;
}
var Fs = 64, Vs = 4194304;
function Do(e) {
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
function Oi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, s = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var a = i & ~o;
    a !== 0 ? r = Do(a) : (s &= i, s !== 0 && (r = Do(s)));
  } else i = n & ~o, i !== 0 ? r = Do(i) : s !== 0 && (r = Do(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, s = t & -t, o >= s || o === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - St(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function r1(e, t) {
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
function o1(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var i = 31 - St(s), a = 1 << i, l = o[i];
    l === -1 ? (!(a & n) || a & r) && (o[i] = r1(a, t)) : l <= t && (e.expiredLanes |= a), s &= ~a;
  }
}
function au(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Km() {
  var e = Fs;
  return Fs <<= 1, !(Fs & 4194240) && (Fs = 64), e;
}
function Ja(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ss(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - St(t), e[t] = n;
}
function s1(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - St(n), s = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~s;
  }
}
function Cc(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - St(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var q = 0;
function Gm(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ym, Ec, Xm, Qm, qm, lu = !1, zs = [], yn = null, vn = null, xn = null, Qo = /* @__PURE__ */ new Map(), qo = /* @__PURE__ */ new Map(), pn = [], i1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      yn = null;
      break;
    case "dragenter":
    case "dragleave":
      vn = null;
      break;
    case "mouseover":
    case "mouseout":
      xn = null;
      break;
    case "pointerover":
    case "pointerout":
      Qo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      qo.delete(t.pointerId);
  }
}
function yo(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [o] }, t !== null && (t = ks(t), t !== null && Ec(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function a1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return yn = yo(yn, e, t, n, r, o), !0;
    case "dragenter":
      return vn = yo(vn, e, t, n, r, o), !0;
    case "mouseover":
      return xn = yo(xn, e, t, n, r, o), !0;
    case "pointerover":
      var s = o.pointerId;
      return Qo.set(s, yo(Qo.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return s = o.pointerId, qo.set(s, yo(qo.get(s) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Zm(e) {
  var t = Kn(e.target);
  if (t !== null) {
    var n = ur(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = zm(n), t !== null) {
          e.blockedOn = t, qm(e.priority, function() {
            Xm(n);
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
function mi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = uu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ru = r, n.target.dispatchEvent(r), ru = null;
    } else return t = ks(n), t !== null && Ec(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function bf(e, t, n) {
  mi(e) && n.delete(t);
}
function l1() {
  lu = !1, yn !== null && mi(yn) && (yn = null), vn !== null && mi(vn) && (vn = null), xn !== null && mi(xn) && (xn = null), Qo.forEach(bf), qo.forEach(bf);
}
function vo(e, t) {
  e.blockedOn === t && (e.blockedOn = null, lu || (lu = !0, rt.unstable_scheduleCallback(rt.unstable_NormalPriority, l1)));
}
function Zo(e) {
  function t(o) {
    return vo(o, e);
  }
  if (0 < zs.length) {
    vo(zs[0], e);
    for (var n = 1; n < zs.length; n++) {
      var r = zs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (yn !== null && vo(yn, e), vn !== null && vo(vn, e), xn !== null && vo(xn, e), Qo.forEach(t), qo.forEach(t), n = 0; n < pn.length; n++) r = pn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pn.length && (n = pn[0], n.blockedOn === null); ) Zm(n), n.blockedOn === null && pn.shift();
}
var _r = rn.ReactCurrentBatchConfig, Ii = !0;
function u1(e, t, n, r) {
  var o = q, s = _r.transition;
  _r.transition = null;
  try {
    q = 1, Pc(e, t, n, r);
  } finally {
    q = o, _r.transition = s;
  }
}
function c1(e, t, n, r) {
  var o = q, s = _r.transition;
  _r.transition = null;
  try {
    q = 4, Pc(e, t, n, r);
  } finally {
    q = o, _r.transition = s;
  }
}
function Pc(e, t, n, r) {
  if (Ii) {
    var o = uu(e, t, n, r);
    if (o === null) ul(e, t, r, Fi, n), Sf(e, r);
    else if (a1(o, e, t, n, r)) r.stopPropagation();
    else if (Sf(e, r), t & 4 && -1 < i1.indexOf(e)) {
      for (; o !== null; ) {
        var s = ks(o);
        if (s !== null && Ym(s), s = uu(e, t, n, r), s === null && ul(e, t, r, Fi, n), s === o) break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else ul(e, t, r, null, n);
  }
}
var Fi = null;
function uu(e, t, n, r) {
  if (Fi = null, e = bc(r), e = Kn(e), e !== null) if (t = ur(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = zm(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Fi = e, null;
}
function Jm(e) {
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
      switch (qw()) {
        case kc:
          return 1;
        case Wm:
          return 4;
        case _i:
        case Zw:
          return 16;
        case Hm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var mn = null, Tc = null, gi = null;
function eg() {
  if (gi) return gi;
  var e, t = Tc, n = t.length, r, o = "value" in mn ? mn.value : mn.textContent, s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++) ;
  return gi = o.slice(e, 1 < r ? 1 - r : void 0);
}
function yi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Bs() {
  return !0;
}
function kf() {
  return !1;
}
function it(e) {
  function t(n, r, o, s, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = s, this.target = i, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(s) : s[a]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Bs : kf, this.isPropagationStopped = kf, this;
  }
  return fe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Bs);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Bs);
  }, persist: function() {
  }, isPersistent: Bs }), t;
}
var to = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Dc = it(to), bs = fe({}, to, { view: 0, detail: 0 }), d1 = it(bs), el, tl, xo, ya = fe({}, bs, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Nc, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== xo && (xo && e.type === "mousemove" ? (el = e.screenX - xo.screenX, tl = e.screenY - xo.screenY) : tl = el = 0, xo = e), el);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : tl;
} }), Cf = it(ya), f1 = fe({}, ya, { dataTransfer: 0 }), p1 = it(f1), h1 = fe({}, bs, { relatedTarget: 0 }), nl = it(h1), m1 = fe({}, to, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), g1 = it(m1), y1 = fe({}, to, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), v1 = it(y1), x1 = fe({}, to, { data: 0 }), Ef = it(x1), w1 = {
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
}, S1 = {
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
}, b1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function k1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = b1[e]) ? !!t[e] : !1;
}
function Nc() {
  return k1;
}
var C1 = fe({}, bs, { key: function(e) {
  if (e.key) {
    var t = w1[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = yi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? S1[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Nc, charCode: function(e) {
  return e.type === "keypress" ? yi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? yi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), E1 = it(C1), P1 = fe({}, ya, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Pf = it(P1), T1 = fe({}, bs, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Nc }), D1 = it(T1), N1 = fe({}, to, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), R1 = it(N1), A1 = fe({}, ya, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), M1 = it(A1), j1 = [9, 13, 27, 32], Rc = Qt && "CompositionEvent" in window, Oo = null;
Qt && "documentMode" in document && (Oo = document.documentMode);
var L1 = Qt && "TextEvent" in window && !Oo, tg = Qt && (!Rc || Oo && 8 < Oo && 11 >= Oo), Tf = " ", Df = !1;
function ng(e, t) {
  switch (e) {
    case "keyup":
      return j1.indexOf(t.keyCode) !== -1;
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
function rg(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var yr = !1;
function _1(e, t) {
  switch (e) {
    case "compositionend":
      return rg(t);
    case "keypress":
      return t.which !== 32 ? null : (Df = !0, Tf);
    case "textInput":
      return e = t.data, e === Tf && Df ? null : e;
    default:
      return null;
  }
}
function O1(e, t) {
  if (yr) return e === "compositionend" || !Rc && ng(e, t) ? (e = eg(), gi = Tc = mn = null, yr = !1, e) : null;
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
      return tg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var I1 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Nf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!I1[e.type] : t === "textarea";
}
function og(e, t, n, r) {
  _m(r), t = Vi(t, "onChange"), 0 < t.length && (n = new Dc("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Io = null, Jo = null;
function F1(e) {
  mg(e, 0);
}
function va(e) {
  var t = wr(e);
  if (Dm(t)) return e;
}
function V1(e, t) {
  if (e === "change") return t;
}
var sg = !1;
if (Qt) {
  var rl;
  if (Qt) {
    var ol = "oninput" in document;
    if (!ol) {
      var Rf = document.createElement("div");
      Rf.setAttribute("oninput", "return;"), ol = typeof Rf.oninput == "function";
    }
    rl = ol;
  } else rl = !1;
  sg = rl && (!document.documentMode || 9 < document.documentMode);
}
function Af() {
  Io && (Io.detachEvent("onpropertychange", ig), Jo = Io = null);
}
function ig(e) {
  if (e.propertyName === "value" && va(Jo)) {
    var t = [];
    og(t, Jo, e, bc(e)), Vm(F1, t);
  }
}
function z1(e, t, n) {
  e === "focusin" ? (Af(), Io = t, Jo = n, Io.attachEvent("onpropertychange", ig)) : e === "focusout" && Af();
}
function B1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return va(Jo);
}
function $1(e, t) {
  if (e === "click") return va(t);
}
function U1(e, t) {
  if (e === "input" || e === "change") return va(t);
}
function W1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var kt = typeof Object.is == "function" ? Object.is : W1;
function es(e, t) {
  if (kt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Hl.call(t, o) || !kt(e[o], t[o])) return !1;
  }
  return !0;
}
function Mf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function jf(e, t) {
  var n = Mf(e);
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
    n = Mf(n);
  }
}
function ag(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ag(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function lg() {
  for (var e = window, t = Mi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Mi(e.document);
  }
  return t;
}
function Ac(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function H1(e) {
  var t = lg(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ag(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ac(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, s = Math.min(r.start, o);
        r = r.end === void 0 ? s : Math.min(r.end, o), !e.extend && s > r && (o = r, r = s, s = o), o = jf(n, s);
        var i = jf(
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
var K1 = Qt && "documentMode" in document && 11 >= document.documentMode, vr = null, cu = null, Fo = null, du = !1;
function Lf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  du || vr == null || vr !== Mi(r) || (r = vr, "selectionStart" in r && Ac(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Fo && es(Fo, r) || (Fo = r, r = Vi(cu, "onSelect"), 0 < r.length && (t = new Dc("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = vr)));
}
function $s(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var xr = { animationend: $s("Animation", "AnimationEnd"), animationiteration: $s("Animation", "AnimationIteration"), animationstart: $s("Animation", "AnimationStart"), transitionend: $s("Transition", "TransitionEnd") }, sl = {}, ug = {};
Qt && (ug = document.createElement("div").style, "AnimationEvent" in window || (delete xr.animationend.animation, delete xr.animationiteration.animation, delete xr.animationstart.animation), "TransitionEvent" in window || delete xr.transitionend.transition);
function xa(e) {
  if (sl[e]) return sl[e];
  if (!xr[e]) return e;
  var t = xr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ug) return sl[e] = t[n];
  return e;
}
var cg = xa("animationend"), dg = xa("animationiteration"), fg = xa("animationstart"), pg = xa("transitionend"), hg = /* @__PURE__ */ new Map(), _f = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ln(e, t) {
  hg.set(e, t), lr(t, [e]);
}
for (var il = 0; il < _f.length; il++) {
  var al = _f[il], G1 = al.toLowerCase(), Y1 = al[0].toUpperCase() + al.slice(1);
  Ln(G1, "on" + Y1);
}
Ln(cg, "onAnimationEnd");
Ln(dg, "onAnimationIteration");
Ln(fg, "onAnimationStart");
Ln("dblclick", "onDoubleClick");
Ln("focusin", "onFocus");
Ln("focusout", "onBlur");
Ln(pg, "onTransitionEnd");
Br("onMouseEnter", ["mouseout", "mouseover"]);
Br("onMouseLeave", ["mouseout", "mouseover"]);
Br("onPointerEnter", ["pointerout", "pointerover"]);
Br("onPointerLeave", ["pointerout", "pointerover"]);
lr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
lr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
lr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
lr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
lr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
lr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var No = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), X1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(No));
function Of(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Gw(r, t, void 0, e), e.currentTarget = null;
}
function mg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var a = r[i], l = a.instance, u = a.currentTarget;
        if (a = a.listener, l !== s && o.isPropagationStopped()) break e;
        Of(o, a, u), s = l;
      }
      else for (i = 0; i < r.length; i++) {
        if (a = r[i], l = a.instance, u = a.currentTarget, a = a.listener, l !== s && o.isPropagationStopped()) break e;
        Of(o, a, u), s = l;
      }
    }
  }
  if (Li) throw e = iu, Li = !1, iu = null, e;
}
function oe(e, t) {
  var n = t[gu];
  n === void 0 && (n = t[gu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (gg(t, e, 2, !1), n.add(r));
}
function ll(e, t, n) {
  var r = 0;
  t && (r |= 4), gg(n, e, r, t);
}
var Us = "_reactListening" + Math.random().toString(36).slice(2);
function ts(e) {
  if (!e[Us]) {
    e[Us] = !0, km.forEach(function(n) {
      n !== "selectionchange" && (X1.has(n) || ll(n, !1, e), ll(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Us] || (t[Us] = !0, ll("selectionchange", !1, t));
  }
}
function gg(e, t, n, r) {
  switch (Jm(t)) {
    case 1:
      var o = u1;
      break;
    case 4:
      o = c1;
      break;
    default:
      o = Pc;
  }
  n = o.bind(null, t, n, e), o = void 0, !su || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function ul(e, t, n, r, o) {
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
        if (i = Kn(a), i === null) return;
        if (l = i.tag, l === 5 || l === 6) {
          r = s = i;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  Vm(function() {
    var u = s, c = bc(n), d = [];
    e: {
      var f = hg.get(e);
      if (f !== void 0) {
        var h = Dc, w = e;
        switch (e) {
          case "keypress":
            if (yi(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = E1;
            break;
          case "focusin":
            w = "focus", h = nl;
            break;
          case "focusout":
            w = "blur", h = nl;
            break;
          case "beforeblur":
          case "afterblur":
            h = nl;
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
            h = Cf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = p1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = D1;
            break;
          case cg:
          case dg:
          case fg:
            h = g1;
            break;
          case pg:
            h = R1;
            break;
          case "scroll":
            h = d1;
            break;
          case "wheel":
            h = M1;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = v1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Pf;
        }
        var y = (t & 4) !== 0, S = !y && e === "scroll", g = y ? f !== null ? f + "Capture" : null : f;
        y = [];
        for (var m = u, v; m !== null; ) {
          v = m;
          var b = v.stateNode;
          if (v.tag === 5 && b !== null && (v = b, g !== null && (b = Xo(m, g), b != null && y.push(ns(m, b, v)))), S) break;
          m = m.return;
        }
        0 < y.length && (f = new h(f, w, null, n, c), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", h = e === "mouseout" || e === "pointerout", f && n !== ru && (w = n.relatedTarget || n.fromElement) && (Kn(w) || w[qt])) break e;
        if ((h || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, h ? (w = n.relatedTarget || n.toElement, h = u, w = w ? Kn(w) : null, w !== null && (S = ur(w), w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (h = null, w = u), h !== w)) {
          if (y = Cf, b = "onMouseLeave", g = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (y = Pf, b = "onPointerLeave", g = "onPointerEnter", m = "pointer"), S = h == null ? f : wr(h), v = w == null ? f : wr(w), f = new y(b, m + "leave", h, n, c), f.target = S, f.relatedTarget = v, b = null, Kn(c) === u && (y = new y(g, m + "enter", w, n, c), y.target = v, y.relatedTarget = S, b = y), S = b, h && w) t: {
            for (y = h, g = w, m = 0, v = y; v; v = dr(v)) m++;
            for (v = 0, b = g; b; b = dr(b)) v++;
            for (; 0 < m - v; ) y = dr(y), m--;
            for (; 0 < v - m; ) g = dr(g), v--;
            for (; m--; ) {
              if (y === g || g !== null && y === g.alternate) break t;
              y = dr(y), g = dr(g);
            }
            y = null;
          }
          else y = null;
          h !== null && If(d, f, h, y, !1), w !== null && S !== null && If(d, S, w, y, !0);
        }
      }
      e: {
        if (f = u ? wr(u) : window, h = f.nodeName && f.nodeName.toLowerCase(), h === "select" || h === "input" && f.type === "file") var k = V1;
        else if (Nf(f)) if (sg) k = U1;
        else {
          k = B1;
          var C = z1;
        }
        else (h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = $1);
        if (k && (k = k(e, u))) {
          og(d, k, n, c);
          break e;
        }
        C && C(e, f, u), e === "focusout" && (C = f._wrapperState) && C.controlled && f.type === "number" && Zl(f, "number", f.value);
      }
      switch (C = u ? wr(u) : window, e) {
        case "focusin":
          (Nf(C) || C.contentEditable === "true") && (vr = C, cu = u, Fo = null);
          break;
        case "focusout":
          Fo = cu = vr = null;
          break;
        case "mousedown":
          du = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          du = !1, Lf(d, n, c);
          break;
        case "selectionchange":
          if (K1) break;
        case "keydown":
        case "keyup":
          Lf(d, n, c);
      }
      var E;
      if (Rc) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e;
        }
        P = void 0;
      }
      else yr ? ng(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (tg && n.locale !== "ko" && (yr || P !== "onCompositionStart" ? P === "onCompositionEnd" && yr && (E = eg()) : (mn = c, Tc = "value" in mn ? mn.value : mn.textContent, yr = !0)), C = Vi(u, P), 0 < C.length && (P = new Ef(P, e, null, n, c), d.push({ event: P, listeners: C }), E ? P.data = E : (E = rg(n), E !== null && (P.data = E)))), (E = L1 ? _1(e, n) : O1(e, n)) && (u = Vi(u, "onBeforeInput"), 0 < u.length && (c = new Ef("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = E));
    }
    mg(d, t);
  });
}
function ns(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Vi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, s = o.stateNode;
    o.tag === 5 && s !== null && (o = s, s = Xo(e, n), s != null && r.unshift(ns(e, s, o)), s = Xo(e, t), s != null && r.push(ns(e, s, o))), e = e.return;
  }
  return r;
}
function dr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function If(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && u !== null && (a = u, o ? (l = Xo(n, s), l != null && i.unshift(ns(n, l, a))) : o || (l = Xo(n, s), l != null && i.push(ns(n, l, a)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Q1 = /\r\n?/g, q1 = /\u0000|\uFFFD/g;
function Ff(e) {
  return (typeof e == "string" ? e : "" + e).replace(Q1, `
`).replace(q1, "");
}
function Ws(e, t, n) {
  if (t = Ff(t), Ff(e) !== t && n) throw Error(M(425));
}
function zi() {
}
var fu = null, pu = null;
function hu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var mu = typeof setTimeout == "function" ? setTimeout : void 0, Z1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Vf = typeof Promise == "function" ? Promise : void 0, J1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vf < "u" ? function(e) {
  return Vf.resolve(null).then(e).catch(eS);
} : mu;
function eS(e) {
  setTimeout(function() {
    throw e;
  });
}
function cl(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Zo(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Zo(t);
}
function wn(e) {
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
function zf(e) {
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
var no = Math.random().toString(36).slice(2), Mt = "__reactFiber$" + no, rs = "__reactProps$" + no, qt = "__reactContainer$" + no, gu = "__reactEvents$" + no, tS = "__reactListeners$" + no, nS = "__reactHandles$" + no;
function Kn(e) {
  var t = e[Mt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[qt] || n[Mt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = zf(e); e !== null; ) {
        if (n = e[Mt]) return n;
        e = zf(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ks(e) {
  return e = e[Mt] || e[qt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function wr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function wa(e) {
  return e[rs] || null;
}
var yu = [], Sr = -1;
function _n(e) {
  return { current: e };
}
function se(e) {
  0 > Sr || (e.current = yu[Sr], yu[Sr] = null, Sr--);
}
function te(e, t) {
  Sr++, yu[Sr] = e.current, e.current = t;
}
var Dn = {}, Ie = _n(Dn), Ge = _n(!1), Jn = Dn;
function $r(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Dn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, s;
  for (s in n) o[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Ye(e) {
  return e = e.childContextTypes, e != null;
}
function Bi() {
  se(Ge), se(Ie);
}
function Bf(e, t, n) {
  if (Ie.current !== Dn) throw Error(M(168));
  te(Ie, t), te(Ge, n);
}
function yg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(M(108, zw(e) || "Unknown", o));
  return fe({}, n, r);
}
function $i(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Dn, Jn = Ie.current, te(Ie, e), te(Ge, Ge.current), !0;
}
function $f(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  n ? (e = yg(e, t, Jn), r.__reactInternalMemoizedMergedChildContext = e, se(Ge), se(Ie), te(Ie, e)) : se(Ge), te(Ge, n);
}
var Wt = null, Sa = !1, dl = !1;
function vg(e) {
  Wt === null ? Wt = [e] : Wt.push(e);
}
function rS(e) {
  Sa = !0, vg(e);
}
function On() {
  if (!dl && Wt !== null) {
    dl = !0;
    var e = 0, t = q;
    try {
      var n = Wt;
      for (q = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Wt = null, Sa = !1;
    } catch (o) {
      throw Wt !== null && (Wt = Wt.slice(e + 1)), Um(kc, On), o;
    } finally {
      q = t, dl = !1;
    }
  }
  return null;
}
var br = [], kr = 0, Ui = null, Wi = 0, ut = [], ct = 0, er = null, Ht = 1, Kt = "";
function $n(e, t) {
  br[kr++] = Wi, br[kr++] = Ui, Ui = e, Wi = t;
}
function xg(e, t, n) {
  ut[ct++] = Ht, ut[ct++] = Kt, ut[ct++] = er, er = e;
  var r = Ht;
  e = Kt;
  var o = 32 - St(r) - 1;
  r &= ~(1 << o), n += 1;
  var s = 32 - St(t) + o;
  if (30 < s) {
    var i = o - o % 5;
    s = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Ht = 1 << 32 - St(t) + o | n << o | r, Kt = s + e;
  } else Ht = 1 << s | n << o | r, Kt = e;
}
function Mc(e) {
  e.return !== null && ($n(e, 1), xg(e, 1, 0));
}
function jc(e) {
  for (; e === Ui; ) Ui = br[--kr], br[kr] = null, Wi = br[--kr], br[kr] = null;
  for (; e === er; ) er = ut[--ct], ut[ct] = null, Kt = ut[--ct], ut[ct] = null, Ht = ut[--ct], ut[ct] = null;
}
var et = null, Je = null, le = !1, wt = null;
function wg(e, t) {
  var n = dt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Uf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, et = e, Je = wn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, et = e, Je = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = er !== null ? { id: Ht, overflow: Kt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = dt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, et = e, Je = null, !0) : !1;
    default:
      return !1;
  }
}
function vu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xu(e) {
  if (le) {
    var t = Je;
    if (t) {
      var n = t;
      if (!Uf(e, t)) {
        if (vu(e)) throw Error(M(418));
        t = wn(n.nextSibling);
        var r = et;
        t && Uf(e, t) ? wg(r, n) : (e.flags = e.flags & -4097 | 2, le = !1, et = e);
      }
    } else {
      if (vu(e)) throw Error(M(418));
      e.flags = e.flags & -4097 | 2, le = !1, et = e;
    }
  }
}
function Wf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  et = e;
}
function Hs(e) {
  if (e !== et) return !1;
  if (!le) return Wf(e), le = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !hu(e.type, e.memoizedProps)), t && (t = Je)) {
    if (vu(e)) throw Sg(), Error(M(418));
    for (; t; ) wg(e, t), t = wn(t.nextSibling);
  }
  if (Wf(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Je = wn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Je = null;
    }
  } else Je = et ? wn(e.stateNode.nextSibling) : null;
  return !0;
}
function Sg() {
  for (var e = Je; e; ) e = wn(e.nextSibling);
}
function Ur() {
  Je = et = null, le = !1;
}
function Lc(e) {
  wt === null ? wt = [e] : wt.push(e);
}
var oS = rn.ReactCurrentBatchConfig;
function wo(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var o = r, s = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(i) {
        var a = o.refs;
        i === null ? delete a[s] : a[s] = i;
      }, t._stringRef = s, t);
    }
    if (typeof e != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function Ks(e, t) {
  throw e = Object.prototype.toString.call(t), Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Hf(e) {
  var t = e._init;
  return t(e._payload);
}
function bg(e) {
  function t(g, m) {
    if (e) {
      var v = g.deletions;
      v === null ? (g.deletions = [m], g.flags |= 16) : v.push(m);
    }
  }
  function n(g, m) {
    if (!e) return null;
    for (; m !== null; ) t(g, m), m = m.sibling;
    return null;
  }
  function r(g, m) {
    for (g = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? g.set(m.key, m) : g.set(m.index, m), m = m.sibling;
    return g;
  }
  function o(g, m) {
    return g = Cn(g, m), g.index = 0, g.sibling = null, g;
  }
  function s(g, m, v) {
    return g.index = v, e ? (v = g.alternate, v !== null ? (v = v.index, v < m ? (g.flags |= 2, m) : v) : (g.flags |= 2, m)) : (g.flags |= 1048576, m);
  }
  function i(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, m, v, b) {
    return m === null || m.tag !== 6 ? (m = vl(v, g.mode, b), m.return = g, m) : (m = o(m, v), m.return = g, m);
  }
  function l(g, m, v, b) {
    var k = v.type;
    return k === gr ? c(g, m, v.props.children, b, v.key) : m !== null && (m.elementType === k || typeof k == "object" && k !== null && k.$$typeof === cn && Hf(k) === m.type) ? (b = o(m, v.props), b.ref = wo(g, m, v), b.return = g, b) : (b = Ci(v.type, v.key, v.props, null, g.mode, b), b.ref = wo(g, m, v), b.return = g, b);
  }
  function u(g, m, v, b) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== v.containerInfo || m.stateNode.implementation !== v.implementation ? (m = xl(v, g.mode, b), m.return = g, m) : (m = o(m, v.children || []), m.return = g, m);
  }
  function c(g, m, v, b, k) {
    return m === null || m.tag !== 7 ? (m = qn(v, g.mode, b, k), m.return = g, m) : (m = o(m, v), m.return = g, m);
  }
  function d(g, m, v) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return m = vl("" + m, g.mode, v), m.return = g, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case _s:
          return v = Ci(m.type, m.key, m.props, null, g.mode, v), v.ref = wo(g, null, m), v.return = g, v;
        case mr:
          return m = xl(m, g.mode, v), m.return = g, m;
        case cn:
          var b = m._init;
          return d(g, b(m._payload), v);
      }
      if (To(m) || mo(m)) return m = qn(m, g.mode, v, null), m.return = g, m;
      Ks(g, m);
    }
    return null;
  }
  function f(g, m, v, b) {
    var k = m !== null ? m.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number") return k !== null ? null : a(g, m, "" + v, b);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case _s:
          return v.key === k ? l(g, m, v, b) : null;
        case mr:
          return v.key === k ? u(g, m, v, b) : null;
        case cn:
          return k = v._init, f(
            g,
            m,
            k(v._payload),
            b
          );
      }
      if (To(v) || mo(v)) return k !== null ? null : c(g, m, v, b, null);
      Ks(g, v);
    }
    return null;
  }
  function h(g, m, v, b, k) {
    if (typeof b == "string" && b !== "" || typeof b == "number") return g = g.get(v) || null, a(m, g, "" + b, k);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case _s:
          return g = g.get(b.key === null ? v : b.key) || null, l(m, g, b, k);
        case mr:
          return g = g.get(b.key === null ? v : b.key) || null, u(m, g, b, k);
        case cn:
          var C = b._init;
          return h(g, m, v, C(b._payload), k);
      }
      if (To(b) || mo(b)) return g = g.get(v) || null, c(m, g, b, k, null);
      Ks(m, b);
    }
    return null;
  }
  function w(g, m, v, b) {
    for (var k = null, C = null, E = m, P = m = 0, R = null; E !== null && P < v.length; P++) {
      E.index > P ? (R = E, E = null) : R = E.sibling;
      var D = f(g, E, v[P], b);
      if (D === null) {
        E === null && (E = R);
        break;
      }
      e && E && D.alternate === null && t(g, E), m = s(D, m, P), C === null ? k = D : C.sibling = D, C = D, E = R;
    }
    if (P === v.length) return n(g, E), le && $n(g, P), k;
    if (E === null) {
      for (; P < v.length; P++) E = d(g, v[P], b), E !== null && (m = s(E, m, P), C === null ? k = E : C.sibling = E, C = E);
      return le && $n(g, P), k;
    }
    for (E = r(g, E); P < v.length; P++) R = h(E, g, P, v[P], b), R !== null && (e && R.alternate !== null && E.delete(R.key === null ? P : R.key), m = s(R, m, P), C === null ? k = R : C.sibling = R, C = R);
    return e && E.forEach(function(N) {
      return t(g, N);
    }), le && $n(g, P), k;
  }
  function y(g, m, v, b) {
    var k = mo(v);
    if (typeof k != "function") throw Error(M(150));
    if (v = k.call(v), v == null) throw Error(M(151));
    for (var C = k = null, E = m, P = m = 0, R = null, D = v.next(); E !== null && !D.done; P++, D = v.next()) {
      E.index > P ? (R = E, E = null) : R = E.sibling;
      var N = f(g, E, D.value, b);
      if (N === null) {
        E === null && (E = R);
        break;
      }
      e && E && N.alternate === null && t(g, E), m = s(N, m, P), C === null ? k = N : C.sibling = N, C = N, E = R;
    }
    if (D.done) return n(
      g,
      E
    ), le && $n(g, P), k;
    if (E === null) {
      for (; !D.done; P++, D = v.next()) D = d(g, D.value, b), D !== null && (m = s(D, m, P), C === null ? k = D : C.sibling = D, C = D);
      return le && $n(g, P), k;
    }
    for (E = r(g, E); !D.done; P++, D = v.next()) D = h(E, g, P, D.value, b), D !== null && (e && D.alternate !== null && E.delete(D.key === null ? P : D.key), m = s(D, m, P), C === null ? k = D : C.sibling = D, C = D);
    return e && E.forEach(function(A) {
      return t(g, A);
    }), le && $n(g, P), k;
  }
  function S(g, m, v, b) {
    if (typeof v == "object" && v !== null && v.type === gr && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case _s:
          e: {
            for (var k = v.key, C = m; C !== null; ) {
              if (C.key === k) {
                if (k = v.type, k === gr) {
                  if (C.tag === 7) {
                    n(g, C.sibling), m = o(C, v.props.children), m.return = g, g = m;
                    break e;
                  }
                } else if (C.elementType === k || typeof k == "object" && k !== null && k.$$typeof === cn && Hf(k) === C.type) {
                  n(g, C.sibling), m = o(C, v.props), m.ref = wo(g, C, v), m.return = g, g = m;
                  break e;
                }
                n(g, C);
                break;
              } else t(g, C);
              C = C.sibling;
            }
            v.type === gr ? (m = qn(v.props.children, g.mode, b, v.key), m.return = g, g = m) : (b = Ci(v.type, v.key, v.props, null, g.mode, b), b.ref = wo(g, m, v), b.return = g, g = b);
          }
          return i(g);
        case mr:
          e: {
            for (C = v.key; m !== null; ) {
              if (m.key === C) if (m.tag === 4 && m.stateNode.containerInfo === v.containerInfo && m.stateNode.implementation === v.implementation) {
                n(g, m.sibling), m = o(m, v.children || []), m.return = g, g = m;
                break e;
              } else {
                n(g, m);
                break;
              }
              else t(g, m);
              m = m.sibling;
            }
            m = xl(v, g.mode, b), m.return = g, g = m;
          }
          return i(g);
        case cn:
          return C = v._init, S(g, m, C(v._payload), b);
      }
      if (To(v)) return w(g, m, v, b);
      if (mo(v)) return y(g, m, v, b);
      Ks(g, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, m !== null && m.tag === 6 ? (n(g, m.sibling), m = o(m, v), m.return = g, g = m) : (n(g, m), m = vl(v, g.mode, b), m.return = g, g = m), i(g)) : n(g, m);
  }
  return S;
}
var Wr = bg(!0), kg = bg(!1), Hi = _n(null), Ki = null, Cr = null, _c = null;
function Oc() {
  _c = Cr = Ki = null;
}
function Ic(e) {
  var t = Hi.current;
  se(Hi), e._currentValue = t;
}
function wu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Or(e, t) {
  Ki = e, _c = Cr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ke = !0), e.firstContext = null);
}
function pt(e) {
  var t = e._currentValue;
  if (_c !== e) if (e = { context: e, memoizedValue: t, next: null }, Cr === null) {
    if (Ki === null) throw Error(M(308));
    Cr = e, Ki.dependencies = { lanes: 0, firstContext: e };
  } else Cr = Cr.next = e;
  return t;
}
var Gn = null;
function Fc(e) {
  Gn === null ? Gn = [e] : Gn.push(e);
}
function Cg(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Fc(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Zt(e, r);
}
function Zt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var dn = !1;
function Vc(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Eg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Gt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Sn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, X & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Zt(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Fc(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Zt(e, n);
}
function vi(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Cc(e, n);
  }
}
function Kf(e, t) {
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
function Gi(e, t, n, r) {
  var o = e.updateQueue;
  dn = !1;
  var s = o.firstBaseUpdate, i = o.lastBaseUpdate, a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a, u = l.next;
    l.next = null, i === null ? s = u : i.next = u, i = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== i && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l));
  }
  if (s !== null) {
    var d = o.baseState;
    i = 0, c = u = l = null, a = s;
    do {
      var f = a.lane, h = a.eventTime;
      if ((r & f) === f) {
        c !== null && (c = c.next = {
          eventTime: h,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var w = e, y = a;
          switch (f = t, h = n, y.tag) {
            case 1:
              if (w = y.payload, typeof w == "function") {
                d = w.call(h, d, f);
                break e;
              }
              d = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = y.payload, f = typeof w == "function" ? w.call(h, d, f) : w, f == null) break e;
              d = fe({}, d, f);
              break e;
            case 2:
              dn = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [a] : f.push(a));
      } else h = { eventTime: h, lane: f, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = h, l = d) : c = c.next = h, i |= f;
      if (a = a.next, a === null) {
        if (a = o.shared.pending, a === null) break;
        f = a, a = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = d), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        i |= o.lane, o = o.next;
      while (o !== t);
    } else s === null && (o.shared.lanes = 0);
    nr |= i, e.lanes = i, e.memoizedState = d;
  }
}
function Gf(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(M(191, o));
      o.call(r);
    }
  }
}
var Cs = {}, Ot = _n(Cs), os = _n(Cs), ss = _n(Cs);
function Yn(e) {
  if (e === Cs) throw Error(M(174));
  return e;
}
function zc(e, t) {
  switch (te(ss, t), te(os, e), te(Ot, Cs), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : eu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = eu(t, e);
  }
  se(Ot), te(Ot, t);
}
function Hr() {
  se(Ot), se(os), se(ss);
}
function Pg(e) {
  Yn(ss.current);
  var t = Yn(Ot.current), n = eu(t, e.type);
  t !== n && (te(os, e), te(Ot, n));
}
function Bc(e) {
  os.current === e && (se(Ot), se(os));
}
var ue = _n(0);
function Yi(e) {
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
var fl = [];
function $c() {
  for (var e = 0; e < fl.length; e++) fl[e]._workInProgressVersionPrimary = null;
  fl.length = 0;
}
var xi = rn.ReactCurrentDispatcher, pl = rn.ReactCurrentBatchConfig, tr = 0, de = null, Se = null, ke = null, Xi = !1, Vo = !1, is = 0, sS = 0;
function Me() {
  throw Error(M(321));
}
function Uc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!kt(e[n], t[n])) return !1;
  return !0;
}
function Wc(e, t, n, r, o, s) {
  if (tr = s, de = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, xi.current = e === null || e.memoizedState === null ? uS : cS, e = n(r, o), Vo) {
    s = 0;
    do {
      if (Vo = !1, is = 0, 25 <= s) throw Error(M(301));
      s += 1, ke = Se = null, t.updateQueue = null, xi.current = dS, e = n(r, o);
    } while (Vo);
  }
  if (xi.current = Qi, t = Se !== null && Se.next !== null, tr = 0, ke = Se = de = null, Xi = !1, t) throw Error(M(300));
  return e;
}
function Hc() {
  var e = is !== 0;
  return is = 0, e;
}
function At() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ke === null ? de.memoizedState = ke = e : ke = ke.next = e, ke;
}
function ht() {
  if (Se === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Se.next;
  var t = ke === null ? de.memoizedState : ke.next;
  if (t !== null) ke = t, Se = e;
  else {
    if (e === null) throw Error(M(310));
    Se = e, e = { memoizedState: Se.memoizedState, baseState: Se.baseState, baseQueue: Se.baseQueue, queue: Se.queue, next: null }, ke === null ? de.memoizedState = ke = e : ke = ke.next = e;
  }
  return ke;
}
function as(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function hl(e) {
  var t = ht(), n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = Se, o = r.baseQueue, s = n.pending;
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
      if ((tr & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (a = l = d, i = r) : l = l.next = d, de.lanes |= c, nr |= c;
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? i = r : l.next = a, kt(r, t.memoizedState) || (Ke = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      s = o.lane, de.lanes |= s, nr |= s, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ml(e) {
  var t = ht(), n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      s = e(s, i.action), i = i.next;
    while (i !== o);
    kt(s, t.memoizedState) || (Ke = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function Tg() {
}
function Dg(e, t) {
  var n = de, r = ht(), o = t(), s = !kt(r.memoizedState, o);
  if (s && (r.memoizedState = o, Ke = !0), r = r.queue, Kc(Ag.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || ke !== null && ke.memoizedState.tag & 1) {
    if (n.flags |= 2048, ls(9, Rg.bind(null, n, r, o, t), void 0, null), Ce === null) throw Error(M(349));
    tr & 30 || Ng(n, t, o);
  }
  return o;
}
function Ng(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = de.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, de.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Rg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Mg(t) && jg(e);
}
function Ag(e, t, n) {
  return n(function() {
    Mg(t) && jg(e);
  });
}
function Mg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !kt(e, n);
  } catch {
    return !0;
  }
}
function jg(e) {
  var t = Zt(e, 1);
  t !== null && bt(t, e, 1, -1);
}
function Yf(e) {
  var t = At();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: as, lastRenderedState: e }, t.queue = e, e = e.dispatch = lS.bind(null, de, e), [t.memoizedState, e];
}
function ls(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = de.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, de.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Lg() {
  return ht().memoizedState;
}
function wi(e, t, n, r) {
  var o = At();
  de.flags |= e, o.memoizedState = ls(1 | t, n, void 0, r === void 0 ? null : r);
}
function ba(e, t, n, r) {
  var o = ht();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Se !== null) {
    var i = Se.memoizedState;
    if (s = i.destroy, r !== null && Uc(r, i.deps)) {
      o.memoizedState = ls(t, n, s, r);
      return;
    }
  }
  de.flags |= e, o.memoizedState = ls(1 | t, n, s, r);
}
function Xf(e, t) {
  return wi(8390656, 8, e, t);
}
function Kc(e, t) {
  return ba(2048, 8, e, t);
}
function _g(e, t) {
  return ba(4, 2, e, t);
}
function Og(e, t) {
  return ba(4, 4, e, t);
}
function Ig(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Fg(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ba(4, 4, Ig.bind(null, t, e), n);
}
function Gc() {
}
function Vg(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Uc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function zg(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Uc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Bg(e, t, n) {
  return tr & 21 ? (kt(n, t) || (n = Km(), de.lanes |= n, nr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ke = !0), e.memoizedState = n);
}
function iS(e, t) {
  var n = q;
  q = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = pl.transition;
  pl.transition = {};
  try {
    e(!1), t();
  } finally {
    q = n, pl.transition = r;
  }
}
function $g() {
  return ht().memoizedState;
}
function aS(e, t, n) {
  var r = kn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ug(e)) Wg(t, n);
  else if (n = Cg(e, t, n, r), n !== null) {
    var o = Be();
    bt(n, e, r, o), Hg(n, t, r);
  }
}
function lS(e, t, n) {
  var r = kn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ug(e)) Wg(t, o);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var i = t.lastRenderedState, a = s(i, n);
      if (o.hasEagerState = !0, o.eagerState = a, kt(a, i)) {
        var l = t.interleaved;
        l === null ? (o.next = o, Fc(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Cg(e, t, o, r), n !== null && (o = Be(), bt(n, e, r, o), Hg(n, t, r));
  }
}
function Ug(e) {
  var t = e.alternate;
  return e === de || t !== null && t === de;
}
function Wg(e, t) {
  Vo = Xi = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Hg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Cc(e, n);
  }
}
var Qi = { readContext: pt, useCallback: Me, useContext: Me, useEffect: Me, useImperativeHandle: Me, useInsertionEffect: Me, useLayoutEffect: Me, useMemo: Me, useReducer: Me, useRef: Me, useState: Me, useDebugValue: Me, useDeferredValue: Me, useTransition: Me, useMutableSource: Me, useSyncExternalStore: Me, useId: Me, unstable_isNewReconciler: !1 }, uS = { readContext: pt, useCallback: function(e, t) {
  return At().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: pt, useEffect: Xf, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, wi(
    4194308,
    4,
    Ig.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return wi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return wi(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = At();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = At();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = aS.bind(null, de, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = At();
  return e = { current: e }, t.memoizedState = e;
}, useState: Yf, useDebugValue: Gc, useDeferredValue: function(e) {
  return At().memoizedState = e;
}, useTransition: function() {
  var e = Yf(!1), t = e[0];
  return e = iS.bind(null, e[1]), At().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = de, o = At();
  if (le) {
    if (n === void 0) throw Error(M(407));
    n = n();
  } else {
    if (n = t(), Ce === null) throw Error(M(349));
    tr & 30 || Ng(r, t, n);
  }
  o.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return o.queue = s, Xf(Ag.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, ls(9, Rg.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = At(), t = Ce.identifierPrefix;
  if (le) {
    var n = Kt, r = Ht;
    n = (r & ~(1 << 32 - St(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = is++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = sS++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, cS = {
  readContext: pt,
  useCallback: Vg,
  useContext: pt,
  useEffect: Kc,
  useImperativeHandle: Fg,
  useInsertionEffect: _g,
  useLayoutEffect: Og,
  useMemo: zg,
  useReducer: hl,
  useRef: Lg,
  useState: function() {
    return hl(as);
  },
  useDebugValue: Gc,
  useDeferredValue: function(e) {
    var t = ht();
    return Bg(t, Se.memoizedState, e);
  },
  useTransition: function() {
    var e = hl(as)[0], t = ht().memoizedState;
    return [e, t];
  },
  useMutableSource: Tg,
  useSyncExternalStore: Dg,
  useId: $g,
  unstable_isNewReconciler: !1
}, dS = { readContext: pt, useCallback: Vg, useContext: pt, useEffect: Kc, useImperativeHandle: Fg, useInsertionEffect: _g, useLayoutEffect: Og, useMemo: zg, useReducer: ml, useRef: Lg, useState: function() {
  return ml(as);
}, useDebugValue: Gc, useDeferredValue: function(e) {
  var t = ht();
  return Se === null ? t.memoizedState = e : Bg(t, Se.memoizedState, e);
}, useTransition: function() {
  var e = ml(as)[0], t = ht().memoizedState;
  return [e, t];
}, useMutableSource: Tg, useSyncExternalStore: Dg, useId: $g, unstable_isNewReconciler: !1 };
function vt(e, t) {
  if (e && e.defaultProps) {
    t = fe({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Su(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : fe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ka = { isMounted: function(e) {
  return (e = e._reactInternals) ? ur(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Be(), o = kn(e), s = Gt(r, o);
  s.payload = t, n != null && (s.callback = n), t = Sn(e, s, o), t !== null && (bt(t, e, o, r), vi(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Be(), o = kn(e), s = Gt(r, o);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Sn(e, s, o), t !== null && (bt(t, e, o, r), vi(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Be(), r = kn(e), o = Gt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Sn(e, o, r), t !== null && (bt(t, e, r, n), vi(t, e, r));
} };
function Qf(e, t, n, r, o, s, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !es(n, r) || !es(o, s) : !0;
}
function Kg(e, t, n) {
  var r = !1, o = Dn, s = t.contextType;
  return typeof s == "object" && s !== null ? s = pt(s) : (o = Ye(t) ? Jn : Ie.current, r = t.contextTypes, s = (r = r != null) ? $r(e, o) : Dn), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ka, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function qf(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ka.enqueueReplaceState(t, t.state, null);
}
function bu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Vc(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? o.context = pt(s) : (s = Ye(t) ? Jn : Ie.current, o.context = $r(e, s)), o.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Su(e, t, s, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && ka.enqueueReplaceState(o, o.state, null), Gi(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Kr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Vw(r), r = r.return;
    while (r);
    var o = n;
  } catch (s) {
    o = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function gl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ku(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var fS = typeof WeakMap == "function" ? WeakMap : Map;
function Gg(e, t, n) {
  n = Gt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Zi || (Zi = !0, ju = r), ku(e, t);
  }, n;
}
function Yg(e, t, n) {
  n = Gt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      ku(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    ku(e, t), typeof r != "function" && (bn === null ? bn = /* @__PURE__ */ new Set([this]) : bn.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Zf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new fS();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = PS.bind(null, e, t, n), t.then(e, e));
}
function Jf(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ep(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Gt(-1, 1), t.tag = 2, Sn(n, t, 1))), n.lanes |= 1), e);
}
var pS = rn.ReactCurrentOwner, Ke = !1;
function ze(e, t, n, r) {
  t.child = e === null ? kg(t, null, n, r) : Wr(t, e.child, n, r);
}
function tp(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return Or(t, o), r = Wc(e, t, n, r, s, o), n = Hc(), e !== null && !Ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Jt(e, t, o)) : (le && n && Mc(t), t.flags |= 1, ze(e, t, r, o), t.child);
}
function np(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !td(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, Xg(e, t, s, r, o)) : (e = Ci(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & o)) {
    var i = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : es, n(i, r) && e.ref === t.ref) return Jt(e, t, o);
  }
  return t.flags |= 1, e = Cn(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Xg(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (es(s, r) && e.ref === t.ref) if (Ke = !1, t.pendingProps = r = s, (e.lanes & o) !== 0) e.flags & 131072 && (Ke = !0);
    else return t.lanes = e.lanes, Jt(e, t, o);
  }
  return Cu(e, t, n, r, o);
}
function Qg(e, t, n) {
  var r = t.pendingProps, o = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, te(Pr, qe), qe |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, te(Pr, qe), qe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, te(Pr, qe), qe |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, te(Pr, qe), qe |= r;
  return ze(e, t, o, n), t.child;
}
function qg(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Cu(e, t, n, r, o) {
  var s = Ye(n) ? Jn : Ie.current;
  return s = $r(t, s), Or(t, o), n = Wc(e, t, n, r, s, o), r = Hc(), e !== null && !Ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Jt(e, t, o)) : (le && r && Mc(t), t.flags |= 1, ze(e, t, n, o), t.child);
}
function rp(e, t, n, r, o) {
  if (Ye(n)) {
    var s = !0;
    $i(t);
  } else s = !1;
  if (Or(t, o), t.stateNode === null) Si(e, t), Kg(t, n, r), bu(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, a = t.memoizedProps;
    i.props = a;
    var l = i.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = pt(u) : (u = Ye(n) ? Jn : Ie.current, u = $r(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || l !== u) && qf(t, i, r, u), dn = !1;
    var f = t.memoizedState;
    i.state = f, Gi(t, r, i, o), l = t.memoizedState, a !== r || f !== l || Ge.current || dn ? (typeof c == "function" && (Su(t, n, c, r), l = t.memoizedState), (a = dn || Qf(t, n, a, r, f, l, u)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), i.props = r, i.state = l, i.context = u, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Eg(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : vt(t.type, a), i.props = u, d = t.pendingProps, f = i.context, l = n.contextType, typeof l == "object" && l !== null ? l = pt(l) : (l = Ye(n) ? Jn : Ie.current, l = $r(t, l));
    var h = n.getDerivedStateFromProps;
    (c = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== d || f !== l) && qf(t, i, r, l), dn = !1, f = t.memoizedState, i.state = f, Gi(t, r, i, o);
    var w = t.memoizedState;
    a !== d || f !== w || Ge.current || dn ? (typeof h == "function" && (Su(t, n, h, r), w = t.memoizedState), (u = dn || Qf(t, n, u, r, f, w, l) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, l), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, l)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = l, r = u) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Eu(e, t, n, r, s, o);
}
function Eu(e, t, n, r, o, s) {
  qg(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && $f(t, n, !1), Jt(e, t, s);
  r = t.stateNode, pS.current = t;
  var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Wr(t, e.child, null, s), t.child = Wr(t, null, a, s)) : ze(e, t, a, s), t.memoizedState = r.state, o && $f(t, n, !0), t.child;
}
function Zg(e) {
  var t = e.stateNode;
  t.pendingContext ? Bf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Bf(e, t.context, !1), zc(e, t.containerInfo);
}
function op(e, t, n, r, o) {
  return Ur(), Lc(o), t.flags |= 256, ze(e, t, n, r), t.child;
}
var Pu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Tu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Jg(e, t, n) {
  var r = t.pendingProps, o = ue.current, s = !1, i = (t.flags & 128) !== 0, a;
  if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), te(ue, o & 1), e === null)
    return xu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, i = { mode: "hidden", children: i }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = i) : s = Pa(i, r, 0, null), e = qn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Tu(n), t.memoizedState = Pu, e) : Yc(t, i));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return hS(e, t, i, r, a, o, n);
  if (s) {
    s = r.fallback, i = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Cn(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? s = Cn(a, s) : (s = qn(s, i, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, i = e.child.memoizedState, i = i === null ? Tu(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, s.memoizedState = i, s.childLanes = e.childLanes & ~n, t.memoizedState = Pu, r;
  }
  return s = e.child, e = s.sibling, r = Cn(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Yc(e, t) {
  return t = Pa({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Gs(e, t, n, r) {
  return r !== null && Lc(r), Wr(t, e.child, null, n), e = Yc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function hS(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = gl(Error(M(422))), Gs(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, o = t.mode, r = Pa({ mode: "visible", children: r.children }, o, 0, null), s = qn(s, o, i, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Wr(t, e.child, null, i), t.child.memoizedState = Tu(i), t.memoizedState = Pu, s);
  if (!(t.mode & 1)) return Gs(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
    return r = a, s = Error(M(419)), r = gl(s, r, void 0), Gs(e, t, i, r);
  }
  if (a = (i & e.childLanes) !== 0, Ke || a) {
    if (r = Ce, r !== null) {
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
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== s.retryLane && (s.retryLane = o, Zt(e, o), bt(r, e, o, -1));
    }
    return ed(), r = gl(Error(M(421))), Gs(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = TS.bind(null, e), o._reactRetry = t, null) : (e = s.treeContext, Je = wn(o.nextSibling), et = t, le = !0, wt = null, e !== null && (ut[ct++] = Ht, ut[ct++] = Kt, ut[ct++] = er, Ht = e.id, Kt = e.overflow, er = t), t = Yc(t, r.children), t.flags |= 4096, t);
}
function sp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), wu(e.return, t, n);
}
function yl(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = o);
}
function ey(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, s = r.tail;
  if (ze(e, t, r.children, n), r = ue.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && sp(e, n, t);
      else if (e.tag === 19) sp(e, n, t);
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
  if (te(ue, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Yi(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), yl(t, !1, o, n, s);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Yi(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      yl(t, !0, n, null, s);
      break;
    case "together":
      yl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Si(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Jt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), nr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (e = t.child, n = Cn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Cn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function mS(e, t, n) {
  switch (t.tag) {
    case 3:
      Zg(t), Ur();
      break;
    case 5:
      Pg(t);
      break;
    case 1:
      Ye(t.type) && $i(t);
      break;
    case 4:
      zc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      te(Hi, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (te(ue, ue.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Jg(e, t, n) : (te(ue, ue.current & 1), e = Jt(e, t, n), e !== null ? e.sibling : null);
      te(ue, ue.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return ey(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), te(ue, ue.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Qg(e, t, n);
  }
  return Jt(e, t, n);
}
var ty, Du, ny, ry;
ty = function(e, t) {
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
Du = function() {
};
ny = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Yn(Ot.current);
    var s = null;
    switch (n) {
      case "input":
        o = Ql(e, o), r = Ql(e, r), s = [];
        break;
      case "select":
        o = fe({}, o, { value: void 0 }), r = fe({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        o = Jl(e, o), r = Jl(e, r), s = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = zi);
    }
    tu(n, r);
    var i;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var a = o[u];
      for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Go.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (a = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null)) if (u === "style") if (a) {
        for (i in a) !a.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in l) l.hasOwnProperty(i) && a[i] !== l[i] && (n || (n = {}), n[i] = l[i]);
      } else n || (s || (s = []), s.push(
        u,
        n
      )), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Go.hasOwnProperty(u) ? (l != null && u === "onScroll" && oe("scroll", e), s || a === l || (s = [])) : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
ry = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function So(e, t) {
  if (!le) switch (e.tailMode) {
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
function je(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function gS(e, t, n) {
  var r = t.pendingProps;
  switch (jc(t), t.tag) {
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
      return je(t), null;
    case 1:
      return Ye(t.type) && Bi(), je(t), null;
    case 3:
      return r = t.stateNode, Hr(), se(Ge), se(Ie), $c(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Hs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, wt !== null && (Ou(wt), wt = null))), Du(e, t), je(t), null;
    case 5:
      Bc(t);
      var o = Yn(ss.current);
      if (n = t.type, e !== null && t.stateNode != null) ny(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return je(t), null;
        }
        if (e = Yn(Ot.current), Hs(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[Mt] = t, r[rs] = s, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              oe("cancel", r), oe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              oe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < No.length; o++) oe(No[o], r);
              break;
            case "source":
              oe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              oe(
                "error",
                r
              ), oe("load", r);
              break;
            case "details":
              oe("toggle", r);
              break;
            case "input":
              hf(r, s), oe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, oe("invalid", r);
              break;
            case "textarea":
              gf(r, s), oe("invalid", r);
          }
          tu(n, s), o = null;
          for (var i in s) if (s.hasOwnProperty(i)) {
            var a = s[i];
            i === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && Ws(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && Ws(
              r.textContent,
              a,
              e
            ), o = ["children", "" + a]) : Go.hasOwnProperty(i) && a != null && i === "onScroll" && oe("scroll", r);
          }
          switch (n) {
            case "input":
              Os(r), mf(r, s, !0);
              break;
            case "textarea":
              Os(r), yf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = zi);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Am(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Mt] = t, e[rs] = r, ty(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = nu(n, r), n) {
              case "dialog":
                oe("cancel", e), oe("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                oe("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < No.length; o++) oe(No[o], e);
                o = r;
                break;
              case "source":
                oe("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                oe(
                  "error",
                  e
                ), oe("load", e), o = r;
                break;
              case "details":
                oe("toggle", e), o = r;
                break;
              case "input":
                hf(e, r), o = Ql(e, r), oe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = fe({}, r, { value: void 0 }), oe("invalid", e);
                break;
              case "textarea":
                gf(e, r), o = Jl(e, r), oe("invalid", e);
                break;
              default:
                o = r;
            }
            tu(n, o), a = o;
            for (s in a) if (a.hasOwnProperty(s)) {
              var l = a[s];
              s === "style" ? Lm(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Mm(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Yo(e, l) : typeof l == "number" && Yo(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Go.hasOwnProperty(s) ? l != null && s === "onScroll" && oe("scroll", e) : l != null && vc(e, s, l, i));
            }
            switch (n) {
              case "input":
                Os(e), mf(e, r, !1);
                break;
              case "textarea":
                Os(e), yf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Tn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? Mr(e, !!r.multiple, s, !1) : r.defaultValue != null && Mr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = zi);
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
      return je(t), null;
    case 6:
      if (e && t.stateNode != null) ry(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
        if (n = Yn(ss.current), Yn(Ot.current), Hs(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Mt] = t, (s = r.nodeValue !== n) && (e = et, e !== null)) switch (e.tag) {
            case 3:
              Ws(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Ws(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Mt] = t, t.stateNode = r;
      }
      return je(t), null;
    case 13:
      if (se(ue), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (le && Je !== null && t.mode & 1 && !(t.flags & 128)) Sg(), Ur(), t.flags |= 98560, s = !1;
        else if (s = Hs(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(M(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(M(317));
            s[Mt] = t;
          } else Ur(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          je(t), s = !1;
        } else wt !== null && (Ou(wt), wt = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ue.current & 1 ? be === 0 && (be = 3) : ed())), t.updateQueue !== null && (t.flags |= 4), je(t), null);
    case 4:
      return Hr(), Du(e, t), e === null && ts(t.stateNode.containerInfo), je(t), null;
    case 10:
      return Ic(t.type._context), je(t), null;
    case 17:
      return Ye(t.type) && Bi(), je(t), null;
    case 19:
      if (se(ue), s = t.memoizedState, s === null) return je(t), null;
      if (r = (t.flags & 128) !== 0, i = s.rendering, i === null) if (r) So(s, !1);
      else {
        if (be !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = Yi(e), i !== null) {
            for (t.flags |= 128, So(s, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, i = s.alternate, i === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = i.childLanes, s.lanes = i.lanes, s.child = i.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = i.memoizedProps, s.memoizedState = i.memoizedState, s.updateQueue = i.updateQueue, s.type = i.type, e = i.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return te(ue, ue.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && xe() > Gr && (t.flags |= 128, r = !0, So(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Yi(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), So(s, !0), s.tail === null && s.tailMode === "hidden" && !i.alternate && !le) return je(t), null;
        } else 2 * xe() - s.renderingStartTime > Gr && n !== 1073741824 && (t.flags |= 128, r = !0, So(s, !1), t.lanes = 4194304);
        s.isBackwards ? (i.sibling = t.child, t.child = i) : (n = s.last, n !== null ? n.sibling = i : t.child = i, s.last = i);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = xe(), t.sibling = null, n = ue.current, te(ue, r ? n & 1 | 2 : n & 1), t) : (je(t), null);
    case 22:
    case 23:
      return Jc(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? qe & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function yS(e, t) {
  switch (jc(t), t.tag) {
    case 1:
      return Ye(t.type) && Bi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Hr(), se(Ge), se(Ie), $c(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Bc(t), null;
    case 13:
      if (se(ue), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(M(340));
        Ur();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return se(ue), null;
    case 4:
      return Hr(), null;
    case 10:
      return Ic(t.type._context), null;
    case 22:
    case 23:
      return Jc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ys = !1, _e = !1, vS = typeof WeakSet == "function" ? WeakSet : Set, L = null;
function Er(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    he(e, t, r);
  }
  else n.current = null;
}
function Nu(e, t, n) {
  try {
    n();
  } catch (r) {
    he(e, t, r);
  }
}
var ip = !1;
function xS(e, t) {
  if (fu = Ii, e = lg(), Ac(e)) {
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
        var i = 0, a = -1, l = -1, u = 0, c = 0, d = e, f = null;
        t: for (; ; ) {
          for (var h; d !== n || o !== 0 && d.nodeType !== 3 || (a = i + o), d !== s || r !== 0 && d.nodeType !== 3 || (l = i + r), d.nodeType === 3 && (i += d.nodeValue.length), (h = d.firstChild) !== null; )
            f = d, d = h;
          for (; ; ) {
            if (d === e) break t;
            if (f === n && ++u === o && (a = i), f === s && ++c === r && (l = i), (h = d.nextSibling) !== null) break;
            d = f, f = d.parentNode;
          }
          d = h;
        }
        n = a === -1 || l === -1 ? null : { start: a, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (pu = { focusedElem: e, selectionRange: n }, Ii = !1, L = t; L !== null; ) if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
  else for (; L !== null; ) {
    t = L;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var y = w.memoizedProps, S = w.memoizedState, g = t.stateNode, m = g.getSnapshotBeforeUpdate(t.elementType === t.type ? y : vt(t.type, y), S);
            g.__reactInternalSnapshotBeforeUpdate = m;
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
          throw Error(M(163));
      }
    } catch (b) {
      he(t, t.return, b);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, L = e;
      break;
    }
    L = t.return;
  }
  return w = ip, ip = !1, w;
}
function zo(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        o.destroy = void 0, s !== void 0 && Nu(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ca(e, t) {
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
function Ru(e) {
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
function oy(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, oy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Mt], delete t[rs], delete t[gu], delete t[tS], delete t[nS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function sy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ap(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || sy(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Au(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = zi));
  else if (r !== 4 && (e = e.child, e !== null)) for (Au(e, t, n), e = e.sibling; e !== null; ) Au(e, t, n), e = e.sibling;
}
function Mu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Mu(e, t, n), e = e.sibling; e !== null; ) Mu(e, t, n), e = e.sibling;
}
var Pe = null, xt = !1;
function on(e, t, n) {
  for (n = n.child; n !== null; ) iy(e, t, n), n = n.sibling;
}
function iy(e, t, n) {
  if (_t && typeof _t.onCommitFiberUnmount == "function") try {
    _t.onCommitFiberUnmount(ga, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      _e || Er(n, t);
    case 6:
      var r = Pe, o = xt;
      Pe = null, on(e, t, n), Pe = r, xt = o, Pe !== null && (xt ? (e = Pe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Pe.removeChild(n.stateNode));
      break;
    case 18:
      Pe !== null && (xt ? (e = Pe, n = n.stateNode, e.nodeType === 8 ? cl(e.parentNode, n) : e.nodeType === 1 && cl(e, n), Zo(e)) : cl(Pe, n.stateNode));
      break;
    case 4:
      r = Pe, o = xt, Pe = n.stateNode.containerInfo, xt = !0, on(e, t, n), Pe = r, xt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!_e && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var s = o, i = s.destroy;
          s = s.tag, i !== void 0 && (s & 2 || s & 4) && Nu(n, t, i), o = o.next;
        } while (o !== r);
      }
      on(e, t, n);
      break;
    case 1:
      if (!_e && (Er(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        he(n, t, a);
      }
      on(e, t, n);
      break;
    case 21:
      on(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (_e = (r = _e) || n.memoizedState !== null, on(e, t, n), _e = r) : on(e, t, n);
      break;
    default:
      on(e, t, n);
  }
}
function lp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new vS()), t.forEach(function(r) {
      var o = DS.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function mt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var s = e, i = t, a = i;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            Pe = a.stateNode, xt = !1;
            break e;
          case 3:
            Pe = a.stateNode.containerInfo, xt = !0;
            break e;
          case 4:
            Pe = a.stateNode.containerInfo, xt = !0;
            break e;
        }
        a = a.return;
      }
      if (Pe === null) throw Error(M(160));
      iy(s, i, o), Pe = null, xt = !1;
      var l = o.alternate;
      l !== null && (l.return = null), o.return = null;
    } catch (u) {
      he(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ay(t, e), t = t.sibling;
}
function ay(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (mt(t, e), Rt(e), r & 4) {
        try {
          zo(3, e, e.return), Ca(3, e);
        } catch (y) {
          he(e, e.return, y);
        }
        try {
          zo(5, e, e.return);
        } catch (y) {
          he(e, e.return, y);
        }
      }
      break;
    case 1:
      mt(t, e), Rt(e), r & 512 && n !== null && Er(n, n.return);
      break;
    case 5:
      if (mt(t, e), Rt(e), r & 512 && n !== null && Er(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Yo(o, "");
        } catch (y) {
          he(e, e.return, y);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var s = e.memoizedProps, i = n !== null ? n.memoizedProps : s, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && s.type === "radio" && s.name != null && Nm(o, s), nu(a, i);
          var u = nu(a, s);
          for (i = 0; i < l.length; i += 2) {
            var c = l[i], d = l[i + 1];
            c === "style" ? Lm(o, d) : c === "dangerouslySetInnerHTML" ? Mm(o, d) : c === "children" ? Yo(o, d) : vc(o, c, d, u);
          }
          switch (a) {
            case "input":
              ql(o, s);
              break;
            case "textarea":
              Rm(o, s);
              break;
            case "select":
              var f = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!s.multiple;
              var h = s.value;
              h != null ? Mr(o, !!s.multiple, h, !1) : f !== !!s.multiple && (s.defaultValue != null ? Mr(
                o,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : Mr(o, !!s.multiple, s.multiple ? [] : "", !1));
          }
          o[rs] = s;
        } catch (y) {
          he(e, e.return, y);
        }
      }
      break;
    case 6:
      if (mt(t, e), Rt(e), r & 4) {
        if (e.stateNode === null) throw Error(M(162));
        o = e.stateNode, s = e.memoizedProps;
        try {
          o.nodeValue = s;
        } catch (y) {
          he(e, e.return, y);
        }
      }
      break;
    case 3:
      if (mt(t, e), Rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Zo(t.containerInfo);
      } catch (y) {
        he(e, e.return, y);
      }
      break;
    case 4:
      mt(t, e), Rt(e);
      break;
    case 13:
      mt(t, e), Rt(e), o = e.child, o.flags & 8192 && (s = o.memoizedState !== null, o.stateNode.isHidden = s, !s || o.alternate !== null && o.alternate.memoizedState !== null || (qc = xe())), r & 4 && lp(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (_e = (u = _e) || c, mt(t, e), _e = u) : mt(t, e), Rt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (L = e, c = e.child; c !== null; ) {
          for (d = L = c; L !== null; ) {
            switch (f = L, h = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                zo(4, f, f.return);
                break;
              case 1:
                Er(f, f.return);
                var w = f.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (y) {
                    he(r, n, y);
                  }
                }
                break;
              case 5:
                Er(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  cp(d);
                  continue;
                }
            }
            h !== null ? (h.return = f, L = h) : cp(d);
          }
          c = c.sibling;
        }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                o = d.stateNode, u ? (s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, i = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = jm("display", i));
              } catch (y) {
                he(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (c === null) try {
              d.stateNode.nodeValue = u ? "" : d.memoizedProps;
            } catch (y) {
              he(e, e.return, y);
            }
          } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
            d.child.return = d, d = d.child;
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), d = d.return;
          }
          c === d && (c = null), d.sibling.return = d.return, d = d.sibling;
        }
      }
      break;
    case 19:
      mt(t, e), Rt(e), r & 4 && lp(e);
      break;
    case 21:
      break;
    default:
      mt(
        t,
        e
      ), Rt(e);
  }
}
function Rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (sy(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Yo(o, ""), r.flags &= -33);
          var s = ap(e);
          Mu(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, a = ap(e);
          Au(e, a, i);
          break;
        default:
          throw Error(M(161));
      }
    } catch (l) {
      he(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function wS(e, t, n) {
  L = e, ly(e);
}
function ly(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var o = L, s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Ys;
      if (!i) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || _e;
        a = Ys;
        var u = _e;
        if (Ys = i, (_e = l) && !u) for (L = o; L !== null; ) i = L, l = i.child, i.tag === 22 && i.memoizedState !== null ? dp(o) : l !== null ? (l.return = i, L = l) : dp(o);
        for (; s !== null; ) L = s, ly(s), s = s.sibling;
        L = o, Ys = a, _e = u;
      }
      up(e);
    } else o.subtreeFlags & 8772 && s !== null ? (s.return = o, L = s) : up(e);
  }
}
function up(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            _e || Ca(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !_e) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : vt(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && Gf(t, s, r);
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
              Gf(t, i, n);
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
                  var d = c.dehydrated;
                  d !== null && Zo(d);
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
            throw Error(M(163));
        }
        _e || t.flags & 512 && Ru(t);
      } catch (f) {
        he(t, t.return, f);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, L = n;
      break;
    }
    L = t.return;
  }
}
function cp(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, L = n;
      break;
    }
    L = t.return;
  }
}
function dp(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ca(4, t);
          } catch (l) {
            he(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              he(t, o, l);
            }
          }
          var s = t.return;
          try {
            Ru(t);
          } catch (l) {
            he(t, s, l);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ru(t);
          } catch (l) {
            he(t, i, l);
          }
      }
    } catch (l) {
      he(t, t.return, l);
    }
    if (t === e) {
      L = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, L = a;
      break;
    }
    L = t.return;
  }
}
var SS = Math.ceil, qi = rn.ReactCurrentDispatcher, Xc = rn.ReactCurrentOwner, ft = rn.ReactCurrentBatchConfig, X = 0, Ce = null, we = null, De = 0, qe = 0, Pr = _n(0), be = 0, us = null, nr = 0, Ea = 0, Qc = 0, Bo = null, He = null, qc = 0, Gr = 1 / 0, Ut = null, Zi = !1, ju = null, bn = null, Xs = !1, gn = null, Ji = 0, $o = 0, Lu = null, bi = -1, ki = 0;
function Be() {
  return X & 6 ? xe() : bi !== -1 ? bi : bi = xe();
}
function kn(e) {
  return e.mode & 1 ? X & 2 && De !== 0 ? De & -De : oS.transition !== null ? (ki === 0 && (ki = Km()), ki) : (e = q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Jm(e.type)), e) : 1;
}
function bt(e, t, n, r) {
  if (50 < $o) throw $o = 0, Lu = null, Error(M(185));
  Ss(e, n, r), (!(X & 2) || e !== Ce) && (e === Ce && (!(X & 2) && (Ea |= n), be === 4 && hn(e, De)), Xe(e, r), n === 1 && X === 0 && !(t.mode & 1) && (Gr = xe() + 500, Sa && On()));
}
function Xe(e, t) {
  var n = e.callbackNode;
  o1(e, t);
  var r = Oi(e, e === Ce ? De : 0);
  if (r === 0) n !== null && wf(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && wf(n), t === 1) e.tag === 0 ? rS(fp.bind(null, e)) : vg(fp.bind(null, e)), J1(function() {
      !(X & 6) && On();
    }), n = null;
    else {
      switch (Gm(r)) {
        case 1:
          n = kc;
          break;
        case 4:
          n = Wm;
          break;
        case 16:
          n = _i;
          break;
        case 536870912:
          n = Hm;
          break;
        default:
          n = _i;
      }
      n = gy(n, uy.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function uy(e, t) {
  if (bi = -1, ki = 0, X & 6) throw Error(M(327));
  var n = e.callbackNode;
  if (Ir() && e.callbackNode !== n) return null;
  var r = Oi(e, e === Ce ? De : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ea(e, r);
  else {
    t = r;
    var o = X;
    X |= 2;
    var s = dy();
    (Ce !== e || De !== t) && (Ut = null, Gr = xe() + 500, Qn(e, t));
    do
      try {
        CS();
        break;
      } catch (a) {
        cy(e, a);
      }
    while (!0);
    Oc(), qi.current = s, X = o, we !== null ? t = 0 : (Ce = null, De = 0, t = be);
  }
  if (t !== 0) {
    if (t === 2 && (o = au(e), o !== 0 && (r = o, t = _u(e, o))), t === 1) throw n = us, Qn(e, 0), hn(e, r), Xe(e, xe()), n;
    if (t === 6) hn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !bS(o) && (t = ea(e, r), t === 2 && (s = au(e), s !== 0 && (r = s, t = _u(e, s))), t === 1)) throw n = us, Qn(e, 0), hn(e, r), Xe(e, xe()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          Un(e, He, Ut);
          break;
        case 3:
          if (hn(e, r), (r & 130023424) === r && (t = qc + 500 - xe(), 10 < t)) {
            if (Oi(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Be(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = mu(Un.bind(null, e, He, Ut), t);
            break;
          }
          Un(e, He, Ut);
          break;
        case 4:
          if (hn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - St(r);
            s = 1 << i, i = t[i], i > o && (o = i), r &= ~s;
          }
          if (r = o, r = xe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * SS(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = mu(Un.bind(null, e, He, Ut), r);
            break;
          }
          Un(e, He, Ut);
          break;
        case 5:
          Un(e, He, Ut);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return Xe(e, xe()), e.callbackNode === n ? uy.bind(null, e) : null;
}
function _u(e, t) {
  var n = Bo;
  return e.current.memoizedState.isDehydrated && (Qn(e, t).flags |= 256), e = ea(e, t), e !== 2 && (t = He, He = n, t !== null && Ou(t)), e;
}
function Ou(e) {
  He === null ? He = e : He.push.apply(He, e);
}
function bS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], s = o.getSnapshot;
        o = o.value;
        try {
          if (!kt(s(), o)) return !1;
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
function hn(e, t) {
  for (t &= ~Qc, t &= ~Ea, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - St(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function fp(e) {
  if (X & 6) throw Error(M(327));
  Ir();
  var t = Oi(e, 0);
  if (!(t & 1)) return Xe(e, xe()), null;
  var n = ea(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = au(e);
    r !== 0 && (t = r, n = _u(e, r));
  }
  if (n === 1) throw n = us, Qn(e, 0), hn(e, t), Xe(e, xe()), n;
  if (n === 6) throw Error(M(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Un(e, He, Ut), Xe(e, xe()), null;
}
function Zc(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    X = n, X === 0 && (Gr = xe() + 500, Sa && On());
  }
}
function rr(e) {
  gn !== null && gn.tag === 0 && !(X & 6) && Ir();
  var t = X;
  X |= 1;
  var n = ft.transition, r = q;
  try {
    if (ft.transition = null, q = 1, e) return e();
  } finally {
    q = r, ft.transition = n, X = t, !(X & 6) && On();
  }
}
function Jc() {
  qe = Pr.current, se(Pr);
}
function Qn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Z1(n)), we !== null) for (n = we.return; n !== null; ) {
    var r = n;
    switch (jc(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Bi();
        break;
      case 3:
        Hr(), se(Ge), se(Ie), $c();
        break;
      case 5:
        Bc(r);
        break;
      case 4:
        Hr();
        break;
      case 13:
        se(ue);
        break;
      case 19:
        se(ue);
        break;
      case 10:
        Ic(r.type._context);
        break;
      case 22:
      case 23:
        Jc();
    }
    n = n.return;
  }
  if (Ce = e, we = e = Cn(e.current, null), De = qe = t, be = 0, us = null, Qc = Ea = nr = 0, He = Bo = null, Gn !== null) {
    for (t = 0; t < Gn.length; t++) if (n = Gn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, s = n.pending;
      if (s !== null) {
        var i = s.next;
        s.next = o, r.next = i;
      }
      n.pending = r;
    }
    Gn = null;
  }
  return e;
}
function cy(e, t) {
  do {
    var n = we;
    try {
      if (Oc(), xi.current = Qi, Xi) {
        for (var r = de.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Xi = !1;
      }
      if (tr = 0, ke = Se = de = null, Vo = !1, is = 0, Xc.current = null, n === null || n.return === null) {
        be = 1, us = t, we = null;
        break;
      }
      e: {
        var s = e, i = n.return, a = n, l = t;
        if (t = De, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = a, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var h = Jf(i);
          if (h !== null) {
            h.flags &= -257, ep(h, i, a, s, t), h.mode & 1 && Zf(s, u, t), t = h, l = u;
            var w = t.updateQueue;
            if (w === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(l), t.updateQueue = y;
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Zf(s, u, t), ed();
              break e;
            }
            l = Error(M(426));
          }
        } else if (le && a.mode & 1) {
          var S = Jf(i);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), ep(S, i, a, s, t), Lc(Kr(l, a));
            break e;
          }
        }
        s = l = Kr(l, a), be !== 4 && (be = 2), Bo === null ? Bo = [s] : Bo.push(s), s = i;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var g = Gg(s, l, t);
              Kf(s, g);
              break e;
            case 1:
              a = l;
              var m = s.type, v = s.stateNode;
              if (!(s.flags & 128) && (typeof m.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (bn === null || !bn.has(v)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var b = Yg(s, a, t);
                Kf(s, b);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      py(n);
    } catch (k) {
      t = k, we === n && n !== null && (we = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function dy() {
  var e = qi.current;
  return qi.current = Qi, e === null ? Qi : e;
}
function ed() {
  (be === 0 || be === 3 || be === 2) && (be = 4), Ce === null || !(nr & 268435455) && !(Ea & 268435455) || hn(Ce, De);
}
function ea(e, t) {
  var n = X;
  X |= 2;
  var r = dy();
  (Ce !== e || De !== t) && (Ut = null, Qn(e, t));
  do
    try {
      kS();
      break;
    } catch (o) {
      cy(e, o);
    }
  while (!0);
  if (Oc(), X = n, qi.current = r, we !== null) throw Error(M(261));
  return Ce = null, De = 0, be;
}
function kS() {
  for (; we !== null; ) fy(we);
}
function CS() {
  for (; we !== null && !Xw(); ) fy(we);
}
function fy(e) {
  var t = my(e.alternate, e, qe);
  e.memoizedProps = e.pendingProps, t === null ? py(e) : we = t, Xc.current = null;
}
function py(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = yS(n, t), n !== null) {
        n.flags &= 32767, we = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        be = 6, we = null;
        return;
      }
    } else if (n = gS(n, t, qe), n !== null) {
      we = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      we = t;
      return;
    }
    we = t = e;
  } while (t !== null);
  be === 0 && (be = 5);
}
function Un(e, t, n) {
  var r = q, o = ft.transition;
  try {
    ft.transition = null, q = 1, ES(e, t, n, r);
  } finally {
    ft.transition = o, q = r;
  }
  return null;
}
function ES(e, t, n, r) {
  do
    Ir();
  while (gn !== null);
  if (X & 6) throw Error(M(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(M(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (s1(e, s), e === Ce && (we = Ce = null, De = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Xs || (Xs = !0, gy(_i, function() {
    return Ir(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = ft.transition, ft.transition = null;
    var i = q;
    q = 1;
    var a = X;
    X |= 4, Xc.current = null, xS(e, n), ay(n, e), H1(pu), Ii = !!fu, pu = fu = null, e.current = n, wS(n), Qw(), X = a, q = i, ft.transition = s;
  } else e.current = n;
  if (Xs && (Xs = !1, gn = e, Ji = o), s = e.pendingLanes, s === 0 && (bn = null), Jw(n.stateNode), Xe(e, xe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Zi) throw Zi = !1, e = ju, ju = null, e;
  return Ji & 1 && e.tag !== 0 && Ir(), s = e.pendingLanes, s & 1 ? e === Lu ? $o++ : ($o = 0, Lu = e) : $o = 0, On(), null;
}
function Ir() {
  if (gn !== null) {
    var e = Gm(Ji), t = ft.transition, n = q;
    try {
      if (ft.transition = null, q = 16 > e ? 16 : e, gn === null) var r = !1;
      else {
        if (e = gn, gn = null, Ji = 0, X & 6) throw Error(M(331));
        var o = X;
        for (X |= 4, L = e.current; L !== null; ) {
          var s = L, i = s.child;
          if (L.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (L = u; L !== null; ) {
                  var c = L;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zo(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) d.return = c, L = d;
                  else for (; L !== null; ) {
                    c = L;
                    var f = c.sibling, h = c.return;
                    if (oy(c), c === u) {
                      L = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = h, L = f;
                      break;
                    }
                    L = h;
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
              L = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) i.return = s, L = i;
          else e: for (; L !== null; ) {
            if (s = L, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                zo(9, s, s.return);
            }
            var g = s.sibling;
            if (g !== null) {
              g.return = s.return, L = g;
              break e;
            }
            L = s.return;
          }
        }
        var m = e.current;
        for (L = m; L !== null; ) {
          i = L;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) v.return = i, L = v;
          else e: for (i = m; L !== null; ) {
            if (a = L, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  Ca(9, a);
              }
            } catch (k) {
              he(a, a.return, k);
            }
            if (a === i) {
              L = null;
              break e;
            }
            var b = a.sibling;
            if (b !== null) {
              b.return = a.return, L = b;
              break e;
            }
            L = a.return;
          }
        }
        if (X = o, On(), _t && typeof _t.onPostCommitFiberRoot == "function") try {
          _t.onPostCommitFiberRoot(ga, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      q = n, ft.transition = t;
    }
  }
  return !1;
}
function pp(e, t, n) {
  t = Kr(n, t), t = Gg(e, t, 1), e = Sn(e, t, 1), t = Be(), e !== null && (Ss(e, 1, t), Xe(e, t));
}
function he(e, t, n) {
  if (e.tag === 3) pp(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      pp(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (bn === null || !bn.has(r))) {
        e = Kr(n, e), e = Yg(t, e, 1), t = Sn(t, e, 1), e = Be(), t !== null && (Ss(t, 1, e), Xe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function PS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Be(), e.pingedLanes |= e.suspendedLanes & n, Ce === e && (De & n) === n && (be === 4 || be === 3 && (De & 130023424) === De && 500 > xe() - qc ? Qn(e, 0) : Qc |= n), Xe(e, t);
}
function hy(e, t) {
  t === 0 && (e.mode & 1 ? (t = Vs, Vs <<= 1, !(Vs & 130023424) && (Vs = 4194304)) : t = 1);
  var n = Be();
  e = Zt(e, t), e !== null && (Ss(e, t, n), Xe(e, n));
}
function TS(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), hy(e, n);
}
function DS(e, t) {
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
      throw Error(M(314));
  }
  r !== null && r.delete(t), hy(e, n);
}
var my;
my = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ge.current) Ke = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ke = !1, mS(e, t, n);
    Ke = !!(e.flags & 131072);
  }
  else Ke = !1, le && t.flags & 1048576 && xg(t, Wi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Si(e, t), e = t.pendingProps;
      var o = $r(t, Ie.current);
      Or(t, n), o = Wc(null, t, r, e, o, n);
      var s = Hc();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ye(r) ? (s = !0, $i(t)) : s = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Vc(t), o.updater = ka, t.stateNode = o, o._reactInternals = t, bu(t, r, e, n), t = Eu(null, t, r, !0, s, n)) : (t.tag = 0, le && s && Mc(t), ze(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Si(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = RS(r), e = vt(r, e), o) {
          case 0:
            t = Cu(null, t, r, e, n);
            break e;
          case 1:
            t = rp(null, t, r, e, n);
            break e;
          case 11:
            t = tp(null, t, r, e, n);
            break e;
          case 14:
            t = np(null, t, r, vt(r.type, e), n);
            break e;
        }
        throw Error(M(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : vt(r, o), Cu(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : vt(r, o), rp(e, t, r, o, n);
    case 3:
      e: {
        if (Zg(t), e === null) throw Error(M(387));
        r = t.pendingProps, s = t.memoizedState, o = s.element, Eg(e, t), Gi(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          o = Kr(Error(M(423)), t), t = op(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Kr(Error(M(424)), t), t = op(e, t, r, n, o);
          break e;
        } else for (Je = wn(t.stateNode.containerInfo.firstChild), et = t, le = !0, wt = null, n = kg(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Ur(), r === o) {
            t = Jt(e, t, n);
            break e;
          }
          ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Pg(t), e === null && xu(t), r = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, i = o.children, hu(r, o) ? i = null : s !== null && hu(r, s) && (t.flags |= 32), qg(e, t), ze(e, t, i, n), t.child;
    case 6:
      return e === null && xu(t), null;
    case 13:
      return Jg(e, t, n);
    case 4:
      return zc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Wr(t, null, r, n) : ze(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : vt(r, o), tp(e, t, r, o, n);
    case 7:
      return ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, s = t.memoizedProps, i = o.value, te(Hi, r._currentValue), r._currentValue = i, s !== null) if (kt(s.value, i)) {
          if (s.children === o.children && !Ge.current) {
            t = Jt(e, t, n);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var a = s.dependencies;
          if (a !== null) {
            i = s.child;
            for (var l = a.firstContext; l !== null; ) {
              if (l.context === r) {
                if (s.tag === 1) {
                  l = Gt(-1, n & -n), l.tag = 2;
                  var u = s.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), wu(
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
            if (i = s.return, i === null) throw Error(M(341));
            i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), wu(i, n, t), i = s.sibling;
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
        ze(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Or(t, n), o = pt(o), r = r(o), t.flags |= 1, ze(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = vt(r, t.pendingProps), o = vt(r.type, o), np(e, t, r, o, n);
    case 15:
      return Xg(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : vt(r, o), Si(e, t), t.tag = 1, Ye(r) ? (e = !0, $i(t)) : e = !1, Or(t, n), Kg(t, r, o), bu(t, r, o, n), Eu(null, t, r, !0, e, n);
    case 19:
      return ey(e, t, n);
    case 22:
      return Qg(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function gy(e, t) {
  return Um(e, t);
}
function NS(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function dt(e, t, n, r) {
  return new NS(e, t, n, r);
}
function td(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function RS(e) {
  if (typeof e == "function") return td(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === wc) return 11;
    if (e === Sc) return 14;
  }
  return 2;
}
function Cn(e, t) {
  var n = e.alternate;
  return n === null ? (n = dt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ci(e, t, n, r, o, s) {
  var i = 2;
  if (r = e, typeof e == "function") td(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case gr:
      return qn(n.children, o, s, t);
    case xc:
      i = 8, o |= 8;
      break;
    case Kl:
      return e = dt(12, n, t, o | 2), e.elementType = Kl, e.lanes = s, e;
    case Gl:
      return e = dt(13, n, t, o), e.elementType = Gl, e.lanes = s, e;
    case Yl:
      return e = dt(19, n, t, o), e.elementType = Yl, e.lanes = s, e;
    case Pm:
      return Pa(n, o, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Cm:
          i = 10;
          break e;
        case Em:
          i = 9;
          break e;
        case wc:
          i = 11;
          break e;
        case Sc:
          i = 14;
          break e;
        case cn:
          i = 16, r = null;
          break e;
      }
      throw Error(M(130, e == null ? e : typeof e, ""));
  }
  return t = dt(i, n, t, o), t.elementType = e, t.type = r, t.lanes = s, t;
}
function qn(e, t, n, r) {
  return e = dt(7, e, r, t), e.lanes = n, e;
}
function Pa(e, t, n, r) {
  return e = dt(22, e, r, t), e.elementType = Pm, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function vl(e, t, n) {
  return e = dt(6, e, null, t), e.lanes = n, e;
}
function xl(e, t, n) {
  return t = dt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function AS(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ja(0), this.expirationTimes = Ja(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ja(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function nd(e, t, n, r, o, s, i, a, l) {
  return e = new AS(e, t, n, a, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = dt(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Vc(s), e;
}
function MS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: mr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function yy(e) {
  if (!e) return Dn;
  e = e._reactInternals;
  e: {
    if (ur(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ye(n)) return yg(e, n, t);
  }
  return t;
}
function vy(e, t, n, r, o, s, i, a, l) {
  return e = nd(n, r, !0, e, o, s, i, a, l), e.context = yy(null), n = e.current, r = Be(), o = kn(n), s = Gt(r, o), s.callback = t ?? null, Sn(n, s, o), e.current.lanes = o, Ss(e, o, r), Xe(e, r), e;
}
function Ta(e, t, n, r) {
  var o = t.current, s = Be(), i = kn(o);
  return n = yy(n), t.context === null ? t.context = n : t.pendingContext = n, t = Gt(s, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Sn(o, t, i), e !== null && (bt(e, o, i, s), vi(e, o, i)), i;
}
function ta(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function hp(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function rd(e, t) {
  hp(e, t), (e = e.alternate) && hp(e, t);
}
function jS() {
  return null;
}
var xy = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function od(e) {
  this._internalRoot = e;
}
Da.prototype.render = od.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  Ta(e, t, null, null);
};
Da.prototype.unmount = od.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    rr(function() {
      Ta(null, e, null, null);
    }), t[qt] = null;
  }
};
function Da(e) {
  this._internalRoot = e;
}
Da.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Qm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pn.length && t !== 0 && t < pn[n].priority; n++) ;
    pn.splice(n, 0, e), n === 0 && Zm(e);
  }
};
function sd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Na(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function mp() {
}
function LS(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var u = ta(i);
        s.call(u);
      };
    }
    var i = vy(t, r, e, 0, null, !1, !1, "", mp);
    return e._reactRootContainer = i, e[qt] = i.current, ts(e.nodeType === 8 ? e.parentNode : e), rr(), i;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = ta(l);
      a.call(u);
    };
  }
  var l = nd(e, 0, !1, null, null, !1, !1, "", mp);
  return e._reactRootContainer = l, e[qt] = l.current, ts(e.nodeType === 8 ? e.parentNode : e), rr(function() {
    Ta(t, l, n, r);
  }), l;
}
function Ra(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = ta(i);
        a.call(l);
      };
    }
    Ta(t, i, e, o);
  } else i = LS(n, t, e, o, r);
  return ta(i);
}
Ym = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Do(t.pendingLanes);
        n !== 0 && (Cc(t, n | 1), Xe(t, xe()), !(X & 6) && (Gr = xe() + 500, On()));
      }
      break;
    case 13:
      rr(function() {
        var r = Zt(e, 1);
        if (r !== null) {
          var o = Be();
          bt(r, e, 1, o);
        }
      }), rd(e, 1);
  }
};
Ec = function(e) {
  if (e.tag === 13) {
    var t = Zt(e, 134217728);
    if (t !== null) {
      var n = Be();
      bt(t, e, 134217728, n);
    }
    rd(e, 134217728);
  }
};
Xm = function(e) {
  if (e.tag === 13) {
    var t = kn(e), n = Zt(e, t);
    if (n !== null) {
      var r = Be();
      bt(n, e, t, r);
    }
    rd(e, t);
  }
};
Qm = function() {
  return q;
};
qm = function(e, t) {
  var n = q;
  try {
    return q = e, t();
  } finally {
    q = n;
  }
};
ou = function(e, t, n) {
  switch (t) {
    case "input":
      if (ql(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = wa(r);
            if (!o) throw Error(M(90));
            Dm(r), ql(r, o);
          }
        }
      }
      break;
    case "textarea":
      Rm(e, n);
      break;
    case "select":
      t = n.value, t != null && Mr(e, !!n.multiple, t, !1);
  }
};
Im = Zc;
Fm = rr;
var _S = { usingClientEntryPoint: !1, Events: [ks, wr, wa, _m, Om, Zc] }, bo = { findFiberByHostInstance: Kn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, OS = { bundleType: bo.bundleType, version: bo.version, rendererPackageName: bo.rendererPackageName, rendererConfig: bo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: rn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Bm(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: bo.findFiberByHostInstance || jS, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Qs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Qs.isDisabled && Qs.supportsFiber) try {
    ga = Qs.inject(OS), _t = Qs;
  } catch {
  }
}
st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _S;
st.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!sd(t)) throw Error(M(200));
  return MS(e, t, null, n);
};
st.createRoot = function(e, t) {
  if (!sd(e)) throw Error(M(299));
  var n = !1, r = "", o = xy;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = nd(e, 1, !1, null, null, n, !1, r, o), e[qt] = t.current, ts(e.nodeType === 8 ? e.parentNode : e), new od(t);
};
st.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","), Error(M(268, e)));
  return e = Bm(t), e = e === null ? null : e.stateNode, e;
};
st.flushSync = function(e) {
  return rr(e);
};
st.hydrate = function(e, t, n) {
  if (!Na(t)) throw Error(M(200));
  return Ra(null, e, t, !0, n);
};
st.hydrateRoot = function(e, t, n) {
  if (!sd(e)) throw Error(M(405));
  var r = n != null && n.hydratedSources || null, o = !1, s = "", i = xy;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = vy(t, null, e, 1, n ?? null, o, !1, s, i), e[qt] = t.current, ts(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Da(t);
};
st.render = function(e, t, n) {
  if (!Na(t)) throw Error(M(200));
  return Ra(null, e, t, !1, n);
};
st.unmountComponentAtNode = function(e) {
  if (!Na(e)) throw Error(M(40));
  return e._reactRootContainer ? (rr(function() {
    Ra(null, null, e, !1, function() {
      e._reactRootContainer = null, e[qt] = null;
    });
  }), !0) : !1;
};
st.unstable_batchedUpdates = Zc;
st.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Na(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return Ra(e, t, n, !1, r);
};
st.version = "18.3.1-next-f1338f8080-20240426";
function wy() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wy);
    } catch (e) {
      console.error(e);
    }
}
wy(), wm.exports = st;
var ro = wm.exports;
const IS = /* @__PURE__ */ am(ro);
var Aa, gp = ro;
Aa = gp.createRoot, gp.hydrateRoot;
function Sy(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Sy(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function FS() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Sy(e)) && (r && (r += " "), r += t);
  return r;
}
const id = "-", VS = (e) => {
  const t = BS(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(id);
      return a[0] === "" && a.length !== 1 && a.shift(), by(a, t) || zS(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const l = n[i] || [];
      return a && r[i] ? [...l, ...r[i]] : l;
    }
  };
}, by = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? by(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(id);
  return (i = t.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : i.classGroupId;
}, yp = /^\[(.+)\]$/, zS = (e) => {
  if (yp.test(e)) {
    const t = yp.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, BS = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return US(Object.entries(e.classGroups), n).forEach(([s, i]) => {
    Iu(i, r, s, t);
  }), r;
}, Iu = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : vp(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if ($S(o)) {
        Iu(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      Iu(i, vp(t, s), n, r);
    });
  });
}, vp = (e, t) => {
  let n = e;
  return t.split(id).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, $S = (e) => e.isThemeGetter, US = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a])) : s);
  return [n, o];
}) : e, WS = (e) => {
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
}, ky = "!", HS = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], s = t.length, i = (a) => {
    const l = [];
    let u = 0, c = 0, d;
    for (let S = 0; S < a.length; S++) {
      let g = a[S];
      if (u === 0) {
        if (g === o && (r || a.slice(S, S + s) === t)) {
          l.push(a.slice(c, S)), c = S + s;
          continue;
        }
        if (g === "/") {
          d = S;
          continue;
        }
      }
      g === "[" ? u++ : g === "]" && u--;
    }
    const f = l.length === 0 ? a : a.substring(c), h = f.startsWith(ky), w = h ? f.substring(1) : f, y = d && d > c ? d - c : void 0;
    return {
      modifiers: l,
      hasImportantModifier: h,
      baseClassName: w,
      maybePostfixModifierPosition: y
    };
  };
  return n ? (a) => n({
    className: a,
    parseClassName: i
  }) : i;
}, KS = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, GS = (e) => ({
  cache: WS(e.cacheSize),
  parseClassName: HS(e),
  ...VS(e)
}), YS = /\s+/, XS = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, s = [], i = e.trim().split(YS);
  let a = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const u = i[l], {
      modifiers: c,
      hasImportantModifier: d,
      baseClassName: f,
      maybePostfixModifierPosition: h
    } = n(u);
    let w = !!h, y = r(w ? f.substring(0, h) : f);
    if (!y) {
      if (!w) {
        a = u + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (y = r(f), !y) {
        a = u + (a.length > 0 ? " " + a : a);
        continue;
      }
      w = !1;
    }
    const S = KS(c).join(":"), g = d ? S + ky : S, m = g + y;
    if (s.includes(m))
      continue;
    s.push(m);
    const v = o(y, w);
    for (let b = 0; b < v.length; ++b) {
      const k = v[b];
      s.push(g + k);
    }
    a = u + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function QS() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Cy(t)) && (r && (r += " "), r += n);
  return r;
}
const Cy = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Cy(e[r])) && (n && (n += " "), n += t);
  return n;
};
function qS(e, ...t) {
  let n, r, o, s = i;
  function i(l) {
    const u = t.reduce((c, d) => d(c), e());
    return n = GS(u), r = n.cache.get, o = n.cache.set, s = a, a(l);
  }
  function a(l) {
    const u = r(l);
    if (u)
      return u;
    const c = XS(l, n);
    return o(l, c), c;
  }
  return function() {
    return s(QS.apply(null, arguments));
  };
}
const re = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Ey = /^\[(?:([a-z-]+):)?(.+)\]$/i, ZS = /^\d+\/\d+$/, JS = /* @__PURE__ */ new Set(["px", "full", "screen"]), eb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, tb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, nb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, rb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ob = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, $t = (e) => Fr(e) || JS.has(e) || ZS.test(e), sn = (e) => oo(e, "length", fb), Fr = (e) => !!e && !Number.isNaN(Number(e)), wl = (e) => oo(e, "number", Fr), ko = (e) => !!e && Number.isInteger(Number(e)), sb = (e) => e.endsWith("%") && Fr(e.slice(0, -1)), H = (e) => Ey.test(e), an = (e) => eb.test(e), ib = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ab = (e) => oo(e, ib, Py), lb = (e) => oo(e, "position", Py), ub = /* @__PURE__ */ new Set(["image", "url"]), cb = (e) => oo(e, ub, hb), db = (e) => oo(e, "", pb), Co = () => !0, oo = (e, t, n) => {
  const r = Ey.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, fb = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  tb.test(e) && !nb.test(e)
), Py = () => !1, pb = (e) => rb.test(e), hb = (e) => ob.test(e), mb = () => {
  const e = re("colors"), t = re("spacing"), n = re("blur"), r = re("brightness"), o = re("borderColor"), s = re("borderRadius"), i = re("borderSpacing"), a = re("borderWidth"), l = re("contrast"), u = re("grayscale"), c = re("hueRotate"), d = re("invert"), f = re("gap"), h = re("gradientColorStops"), w = re("gradientColorStopPositions"), y = re("inset"), S = re("margin"), g = re("opacity"), m = re("padding"), v = re("saturate"), b = re("scale"), k = re("sepia"), C = re("skew"), E = re("space"), P = re("translate"), R = () => ["auto", "contain", "none"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], N = () => ["auto", H, t], A = () => [H, t], O = () => ["", $t, sn], I = () => ["auto", Fr, H], K = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], F = () => ["solid", "dashed", "dotted", "double", "none"], V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], T = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], j = () => ["", "0", H], _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], W = () => [Fr, H];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Co],
      spacing: [$t, sn],
      blur: ["none", "", an, H],
      brightness: W(),
      borderColor: [e],
      borderRadius: ["none", "", "full", an, H],
      borderSpacing: A(),
      borderWidth: O(),
      contrast: W(),
      grayscale: j(),
      hueRotate: W(),
      invert: j(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [sb, sn],
      inset: N(),
      margin: N(),
      opacity: W(),
      padding: A(),
      saturate: W(),
      scale: W(),
      sepia: j(),
      skew: W(),
      space: A(),
      translate: A()
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
        columns: [an]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": _()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": _()
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
        object: [...K(), H]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: D()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": D()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": D()
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
        z: ["auto", ko, H]
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
        flex: ["1", "auto", "initial", "none", H]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: j()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: j()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ko, H]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Co]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ko, H]
        }, H]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": I()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": I()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Co]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ko, H]
        }, H]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": I()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": I()
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
        justify: ["normal", ...T()]
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
        content: ["normal", ...T(), "baseline"]
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
        "place-content": [...T(), "baseline"]
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
        p: [m]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [m]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [m]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [m]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [m]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [m]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [m]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [m]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [m]
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
          screen: [an]
        }, an]
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
        text: ["base", an, sn]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", wl]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Co]
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
        "line-clamp": ["none", Fr, wl]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", $t, H]
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
        "placeholder-opacity": [g]
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
        "text-opacity": [g]
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
        decoration: [...F(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", $t, sn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", $t, H]
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
        indent: A()
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
        "bg-opacity": [g]
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
        bg: [...K(), lb]
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
        bg: ["auto", "cover", "contain", ab]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, cb]
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
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
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
        "border-opacity": [g]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...F(), "hidden"]
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
        "divide-opacity": [g]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: F()
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
        outline: ["", ...F()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [$t, H]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [$t, sn]
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
        ring: O()
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
        "ring-opacity": [g]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [$t, sn]
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
        shadow: ["", "inner", "none", an, db]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Co]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [g]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...V(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": V()
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
        "drop-shadow": ["", "none", an, H]
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
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [g]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", H]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: W()
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
        delay: W()
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
        rotate: [ko, H]
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
        "scroll-m": A()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": A()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": A()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": A()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": A()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": A()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": A()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": A()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": A()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": A()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": A()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": A()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": A()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": A()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": A()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": A()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": A()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": A()
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
        stroke: [$t, sn, wl]
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
}, gb = /* @__PURE__ */ qS(mb);
function me(...e) {
  return gb(FS(e));
}
function ad({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card",
      className: me(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        e
      ),
      ...t
    }
  );
}
function Ty({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: me("px-6", e),
      ...t
    }
  );
}
function yb({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: me("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
function xp(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Y(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function vb(e, t) {
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
function so(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = x.createContext(i), l = n.length;
    n = [...n, i];
    const u = (d) => {
      var g;
      const { scope: f, children: h, ...w } = d, y = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a, S = x.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ p.jsx(y.Provider, { value: S, children: h });
    };
    u.displayName = s + "Provider";
    function c(d, f) {
      var y;
      const h = ((y = f == null ? void 0 : f[e]) == null ? void 0 : y[l]) || a, w = x.useContext(h);
      if (w) return w;
      if (i !== void 0) return i;
      throw new Error(`\`${d}\` must be used within \`${s}\``);
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
  return o.scopeName = e, [r, xb(o, ...t)];
}
function xb(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(s)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function wp(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Dy(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = wp(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : wp(e[o], null);
        }
      };
  };
}
function ge(...e) {
  return x.useCallback(Dy(...e), e);
}
// @__NO_SIDE_EFFECTS__
function cs(e) {
  const t = /* @__PURE__ */ wb(e), n = x.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = x.Children.toArray(s), l = a.find(bb);
    if (l) {
      const u = l.props.children, c = a.map((d) => d === l ? x.Children.count(u) > 1 ? x.Children.only(null) : x.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: x.isValidElement(u) ? x.cloneElement(u, void 0, c) : null });
    }
    return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function wb(e) {
  const t = x.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (x.isValidElement(o)) {
      const i = Cb(o), a = kb(s, o.props);
      return o.type !== x.Fragment && (a.ref = r ? Dy(r, i) : i), x.cloneElement(o, a);
    }
    return x.Children.count(o) > 1 ? x.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Sb = Symbol("radix.slottable");
function bb(e) {
  return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Sb;
}
function kb(e, t) {
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
function Cb(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Ny(e) {
  const t = e + "CollectionProvider", [n, r] = so(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (y) => {
    const { scope: S, children: g } = y, m = ve.useRef(null), v = ve.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p.jsx(o, { scope: S, itemMap: v, collectionRef: m, children: g });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ cs(a), u = ve.forwardRef(
    (y, S) => {
      const { scope: g, children: m } = y, v = s(a, g), b = ge(S, v.collectionRef);
      return /* @__PURE__ */ p.jsx(l, { ref: b, children: m });
    }
  );
  u.displayName = a;
  const c = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ cs(c), h = ve.forwardRef(
    (y, S) => {
      const { scope: g, children: m, ...v } = y, b = ve.useRef(null), k = ge(S, b), C = s(c, g);
      return ve.useEffect(() => (C.itemMap.set(b, { ref: b, ...v }), () => void C.itemMap.delete(b))), /* @__PURE__ */ p.jsx(f, { [d]: "", ref: k, children: m });
    }
  );
  h.displayName = c;
  function w(y) {
    const S = s(e + "CollectionConsumer", y);
    return ve.useCallback(() => {
      const m = S.collectionRef.current;
      if (!m) return [];
      const v = Array.from(m.querySelectorAll(`[${d}]`));
      return Array.from(S.itemMap.values()).sort(
        (C, E) => v.indexOf(C.ref.current) - v.indexOf(E.ref.current)
      );
    }, [S.collectionRef, S.itemMap]);
  }
  return [
    { Provider: i, Slot: u, ItemSlot: h },
    w,
    r
  ];
}
var Eb = x.createContext(void 0);
function ld(e) {
  const t = x.useContext(Eb);
  return e || t || "ltr";
}
var Pb = [
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
], Q = Pb.reduce((e, t) => {
  const n = /* @__PURE__ */ cs(`Primitive.${t}`), r = x.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Tb(e, t) {
  e && ro.flushSync(() => e.dispatchEvent(t));
}
function Nn(e) {
  const t = x.useRef(e);
  return x.useEffect(() => {
    t.current = e;
  }), x.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Db(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Nn(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Nb = "DismissableLayer", Fu = "dismissableLayer.update", Rb = "dismissableLayer.pointerDownOutside", Ab = "dismissableLayer.focusOutside", Sp, Ry = x.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ud = x.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...l
    } = e, u = x.useContext(Ry), [c, d] = x.useState(null), f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = x.useState({}), w = ge(t, (E) => d(E)), y = Array.from(u.layers), [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), g = y.indexOf(S), m = c ? y.indexOf(c) : -1, v = u.layersWithOutsidePointerEventsDisabled.size > 0, b = m >= g, k = Lb((E) => {
      const P = E.target, R = [...u.branches].some((D) => D.contains(P));
      !b || R || (o == null || o(E), i == null || i(E), E.defaultPrevented || a == null || a());
    }, f), C = _b((E) => {
      const P = E.target;
      [...u.branches].some((D) => D.contains(P)) || (s == null || s(E), i == null || i(E), E.defaultPrevented || a == null || a());
    }, f);
    return Db((E) => {
      m === u.layers.size - 1 && (r == null || r(E), !E.defaultPrevented && a && (E.preventDefault(), a()));
    }, f), x.useEffect(() => {
      if (c)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Sp = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), bp(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Sp);
        };
    }, [c, f, n, u]), x.useEffect(() => () => {
      c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), bp());
    }, [c, u]), x.useEffect(() => {
      const E = () => h({});
      return document.addEventListener(Fu, E), () => document.removeEventListener(Fu, E);
    }, []), /* @__PURE__ */ p.jsx(
      Q.div,
      {
        ...l,
        ref: w,
        style: {
          pointerEvents: v ? b ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Y(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: Y(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: Y(
          e.onPointerDownCapture,
          k.onPointerDownCapture
        )
      }
    );
  }
);
ud.displayName = Nb;
var Mb = "DismissableLayerBranch", jb = x.forwardRef((e, t) => {
  const n = x.useContext(Ry), r = x.useRef(null), o = ge(t, r);
  return x.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ p.jsx(Q.div, { ...e, ref: o });
});
jb.displayName = Mb;
function Lb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Nn(e), r = x.useRef(!1), o = x.useRef(() => {
  });
  return x.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          Ay(
            Rb,
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
function _b(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Nn(e), r = x.useRef(!1);
  return x.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && Ay(Ab, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function bp() {
  const e = new CustomEvent(Fu);
  document.dispatchEvent(e);
}
function Ay(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Tb(o, s) : o.dispatchEvent(s);
}
var Sl = 0;
function My() {
  x.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? kp()), document.body.insertAdjacentElement("beforeend", e[1] ?? kp()), Sl++, () => {
      Sl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Sl--;
    };
  }, []);
}
function kp() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var bl = "focusScope.autoFocusOnMount", kl = "focusScope.autoFocusOnUnmount", Cp = { bubbles: !1, cancelable: !0 }, Ob = "FocusScope", cd = x.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = x.useState(null), u = Nn(o), c = Nn(s), d = x.useRef(null), f = ge(t, (y) => l(y)), h = x.useRef({
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
        if (h.paused || !a) return;
        const b = v.target;
        a.contains(b) ? d.current = b : ln(d.current, { select: !0 });
      }, S = function(v) {
        if (h.paused || !a) return;
        const b = v.relatedTarget;
        b !== null && (a.contains(b) || ln(d.current, { select: !0 }));
      }, g = function(v) {
        if (document.activeElement === document.body)
          for (const k of v)
            k.removedNodes.length > 0 && ln(a);
      };
      document.addEventListener("focusin", y), document.addEventListener("focusout", S);
      const m = new MutationObserver(g);
      return a && m.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", S), m.disconnect();
      };
    }
  }, [r, a, h.paused]), x.useEffect(() => {
    if (a) {
      Pp.add(h);
      const y = document.activeElement;
      if (!a.contains(y)) {
        const g = new CustomEvent(bl, Cp);
        a.addEventListener(bl, u), a.dispatchEvent(g), g.defaultPrevented || (Ib($b(jy(a)), { select: !0 }), document.activeElement === y && ln(a));
      }
      return () => {
        a.removeEventListener(bl, u), setTimeout(() => {
          const g = new CustomEvent(kl, Cp);
          a.addEventListener(kl, c), a.dispatchEvent(g), g.defaultPrevented || ln(y ?? document.body, { select: !0 }), a.removeEventListener(kl, c), Pp.remove(h);
        }, 0);
      };
    }
  }, [a, u, c, h]);
  const w = x.useCallback(
    (y) => {
      if (!n && !r || h.paused) return;
      const S = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, g = document.activeElement;
      if (S && g) {
        const m = y.currentTarget, [v, b] = Fb(m);
        v && b ? !y.shiftKey && g === b ? (y.preventDefault(), n && ln(v, { select: !0 })) : y.shiftKey && g === v && (y.preventDefault(), n && ln(b, { select: !0 })) : g === m && y.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ p.jsx(Q.div, { tabIndex: -1, ...i, ref: f, onKeyDown: w });
});
cd.displayName = Ob;
function Ib(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ln(r, { select: t }), document.activeElement !== n) return;
}
function Fb(e) {
  const t = jy(e), n = Ep(t, e), r = Ep(t.reverse(), e);
  return [n, r];
}
function jy(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ep(e, t) {
  for (const n of e)
    if (!Vb(n, { upTo: t })) return n;
}
function Vb(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function zb(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ln(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && zb(e) && t && e.select();
  }
}
var Pp = Bb();
function Bb() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Tp(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Tp(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Tp(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function $b(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Fe = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {
}, Ub = vm[" useId ".trim().toString()] || (() => {
}), Wb = 0;
function En(e) {
  const [t, n] = x.useState(Ub());
  return Fe(() => {
    n((r) => r ?? String(Wb++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const Hb = ["top", "right", "bottom", "left"], Rn = Math.min, Ze = Math.max, na = Math.round, qs = Math.floor, It = (e) => ({
  x: e,
  y: e
}), Kb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Gb = {
  start: "end",
  end: "start"
};
function Vu(e, t, n) {
  return Ze(e, Rn(t, n));
}
function en(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function tn(e) {
  return e.split("-")[0];
}
function io(e) {
  return e.split("-")[1];
}
function dd(e) {
  return e === "x" ? "y" : "x";
}
function fd(e) {
  return e === "y" ? "height" : "width";
}
const Yb = /* @__PURE__ */ new Set(["top", "bottom"]);
function Lt(e) {
  return Yb.has(tn(e)) ? "y" : "x";
}
function pd(e) {
  return dd(Lt(e));
}
function Xb(e, t, n) {
  n === void 0 && (n = !1);
  const r = io(e), o = pd(e), s = fd(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = ra(i)), [i, ra(i)];
}
function Qb(e) {
  const t = ra(e);
  return [zu(e), t, zu(t)];
}
function zu(e) {
  return e.replace(/start|end/g, (t) => Gb[t]);
}
const Dp = ["left", "right"], Np = ["right", "left"], qb = ["top", "bottom"], Zb = ["bottom", "top"];
function Jb(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Np : Dp : t ? Dp : Np;
    case "left":
    case "right":
      return t ? qb : Zb;
    default:
      return [];
  }
}
function ek(e, t, n, r) {
  const o = io(e);
  let s = Jb(tn(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(zu)))), s;
}
function ra(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Kb[t]);
}
function tk(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ly(e) {
  return typeof e != "number" ? tk(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function oa(e) {
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
function Rp(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = Lt(t), i = pd(t), a = fd(i), l = tn(t), u = s === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (io(t)) {
    case "start":
      h[i] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      h[i] += f * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const nk = async (e, t, n) => {
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
    y: d
  } = Rp(u, r, l), f = r, h = {}, w = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: S,
      fn: g
    } = a[y], {
      x: m,
      y: v,
      data: b,
      reset: k
    } = await g({
      x: c,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: h,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = m ?? c, d = v ?? d, h = {
      ...h,
      [S]: {
        ...h[S],
        ...b
      }
    }, k && w <= 50 && (w++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (u = k.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: c,
      y: d
    } = Rp(u, f, l)), y = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: h
  };
};
async function ds(e, t) {
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
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = en(t, e), w = Ly(h), S = a[f ? d === "floating" ? "reference" : "floating" : d], g = oa(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(S))) == null || n ? S : S.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), m = d === "floating" ? {
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
  }, k = oa(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: m,
    offsetParent: v,
    strategy: l
  }) : m);
  return {
    top: (g.top - k.top + w.top) / b.y,
    bottom: (k.bottom - g.bottom + w.bottom) / b.y,
    left: (g.left - k.left + w.left) / b.x,
    right: (k.right - g.right + w.right) / b.x
  };
}
const rk = (e) => ({
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
    } = en(e, t) || {};
    if (u == null)
      return {};
    const d = Ly(c), f = {
      x: n,
      y: r
    }, h = pd(o), w = fd(h), y = await i.getDimensions(u), S = h === "y", g = S ? "top" : "left", m = S ? "bottom" : "right", v = S ? "clientHeight" : "clientWidth", b = s.reference[w] + s.reference[h] - f[h] - s.floating[w], k = f[h] - s.reference[h], C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let E = C ? C[v] : 0;
    (!E || !await (i.isElement == null ? void 0 : i.isElement(C))) && (E = a.floating[v] || s.floating[w]);
    const P = b / 2 - k / 2, R = E / 2 - y[w] / 2 - 1, D = Rn(d[g], R), N = Rn(d[m], R), A = D, O = E - y[w] - N, I = E / 2 - y[w] / 2 + P, K = Vu(A, I, O), F = !l.arrow && io(o) != null && I !== K && s.reference[w] / 2 - (I < A ? D : N) - y[w] / 2 < 0, V = F ? I < A ? I - A : I - O : 0;
    return {
      [h]: f[h] + V,
      data: {
        [h]: K,
        centerOffset: I - K - V,
        ...F && {
          alignmentOffset: V
        }
      },
      reset: F
    };
  }
}), ok = function(e) {
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
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: y = !0,
        ...S
      } = en(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const g = tn(o), m = Lt(a), v = tn(a) === a, b = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = f || (v || !y ? [ra(a)] : Qb(a)), C = w !== "none";
      !f && C && k.push(...ek(a, y, w, b));
      const E = [a, ...k], P = await ds(t, S), R = [];
      let D = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (c && R.push(P[g]), d) {
        const I = Xb(o, i, b);
        R.push(P[I[0]], P[I[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: R
      }], !R.every((I) => I <= 0)) {
        var N, A;
        const I = (((N = s.flip) == null ? void 0 : N.index) || 0) + 1, K = E[I];
        if (K && (!(d === "alignment" ? m !== Lt(K) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        D.every((T) => Lt(T.placement) === m ? T.overflows[0] > 0 : !0)))
          return {
            data: {
              index: I,
              overflows: D
            },
            reset: {
              placement: K
            }
          };
        let F = (A = D.filter((V) => V.overflows[0] <= 0).sort((V, T) => V.overflows[1] - T.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!F)
          switch (h) {
            case "bestFit": {
              var O;
              const V = (O = D.filter((T) => {
                if (C) {
                  const j = Lt(T.placement);
                  return j === m || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  j === "y";
                }
                return !0;
              }).map((T) => [T.placement, T.overflows.filter((j) => j > 0).reduce((j, _) => j + _, 0)]).sort((T, j) => T[1] - j[1])[0]) == null ? void 0 : O[0];
              V && (F = V);
              break;
            }
            case "initialPlacement":
              F = a;
              break;
          }
        if (o !== F)
          return {
            reset: {
              placement: F
            }
          };
      }
      return {};
    }
  };
};
function Ap(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Mp(e) {
  return Hb.some((t) => e[t] >= 0);
}
const sk = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = en(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await ds(t, {
            ...o,
            elementContext: "reference"
          }), i = Ap(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Mp(i)
            }
          };
        }
        case "escaped": {
          const s = await ds(t, {
            ...o,
            altBoundary: !0
          }), i = Ap(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Mp(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, _y = /* @__PURE__ */ new Set(["left", "top"]);
async function ik(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = tn(n), a = io(n), l = Lt(n) === "y", u = _y.has(i) ? -1 : 1, c = s && l ? -1 : 1, d = en(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
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
  return a && typeof w == "number" && (h = a === "end" ? w * -1 : w), l ? {
    x: h * c,
    y: f * u
  } : {
    x: f * u,
    y: h * c
  };
}
const ak = function(e) {
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
      } = t, l = await ik(t, e);
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
}, lk = function(e) {
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
              x: g,
              y: m
            } = S;
            return {
              x: g,
              y: m
            };
          }
        },
        ...l
      } = en(e, t), u = {
        x: n,
        y: r
      }, c = await ds(t, l), d = Lt(tn(o)), f = dd(d);
      let h = u[f], w = u[d];
      if (s) {
        const S = f === "y" ? "top" : "left", g = f === "y" ? "bottom" : "right", m = h + c[S], v = h - c[g];
        h = Vu(m, h, v);
      }
      if (i) {
        const S = d === "y" ? "top" : "left", g = d === "y" ? "bottom" : "right", m = w + c[S], v = w - c[g];
        w = Vu(m, w, v);
      }
      const y = a.fn({
        ...t,
        [f]: h,
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
}, uk = function(e) {
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
      } = en(e, t), c = {
        x: n,
        y: r
      }, d = Lt(o), f = dd(d);
      let h = c[f], w = c[d];
      const y = en(a, t), S = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (l) {
        const v = f === "y" ? "height" : "width", b = s.reference[f] - s.floating[v] + S.mainAxis, k = s.reference[f] + s.reference[v] - S.mainAxis;
        h < b ? h = b : h > k && (h = k);
      }
      if (u) {
        var g, m;
        const v = f === "y" ? "width" : "height", b = _y.has(tn(o)), k = s.reference[d] - s.floating[v] + (b && ((g = i.offset) == null ? void 0 : g[d]) || 0) + (b ? 0 : S.crossAxis), C = s.reference[d] + s.reference[v] + (b ? 0 : ((m = i.offset) == null ? void 0 : m[d]) || 0) - (b ? S.crossAxis : 0);
        w < k ? w = k : w > C && (w = C);
      }
      return {
        [f]: h,
        [d]: w
      };
    }
  };
}, ck = function(e) {
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
      } = en(e, t), c = await ds(t, u), d = tn(o), f = io(o), h = Lt(o) === "y", {
        width: w,
        height: y
      } = s.floating;
      let S, g;
      d === "top" || d === "bottom" ? (S = d, g = f === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = d, S = f === "end" ? "top" : "bottom");
      const m = y - c.top - c.bottom, v = w - c.left - c.right, b = Rn(y - c[S], m), k = Rn(w - c[g], v), C = !t.middlewareData.shift;
      let E = b, P = k;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = v), (r = t.middlewareData.shift) != null && r.enabled.y && (E = m), C && !f) {
        const D = Ze(c.left, 0), N = Ze(c.right, 0), A = Ze(c.top, 0), O = Ze(c.bottom, 0);
        h ? P = w - 2 * (D !== 0 || N !== 0 ? D + N : Ze(c.left, c.right)) : E = y - 2 * (A !== 0 || O !== 0 ? A + O : Ze(c.top, c.bottom));
      }
      await l({
        ...t,
        availableWidth: P,
        availableHeight: E
      });
      const R = await i.getDimensions(a.floating);
      return w !== R.width || y !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ma() {
  return typeof window < "u";
}
function ao(e) {
  return Oy(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function tt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Bt(e) {
  var t;
  return (t = (Oy(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Oy(e) {
  return Ma() ? e instanceof Node || e instanceof tt(e).Node : !1;
}
function Ct(e) {
  return Ma() ? e instanceof Element || e instanceof tt(e).Element : !1;
}
function zt(e) {
  return Ma() ? e instanceof HTMLElement || e instanceof tt(e).HTMLElement : !1;
}
function jp(e) {
  return !Ma() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof tt(e).ShadowRoot;
}
const dk = /* @__PURE__ */ new Set(["inline", "contents"]);
function Es(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Et(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !dk.has(o);
}
const fk = /* @__PURE__ */ new Set(["table", "td", "th"]);
function pk(e) {
  return fk.has(ao(e));
}
const hk = [":popover-open", ":modal"];
function ja(e) {
  return hk.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const mk = ["transform", "translate", "scale", "rotate", "perspective"], gk = ["transform", "translate", "scale", "rotate", "perspective", "filter"], yk = ["paint", "layout", "strict", "content"];
function hd(e) {
  const t = md(), n = Ct(e) ? Et(e) : e;
  return mk.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || gk.some((r) => (n.willChange || "").includes(r)) || yk.some((r) => (n.contain || "").includes(r));
}
function vk(e) {
  let t = An(e);
  for (; zt(t) && !Yr(t); ) {
    if (hd(t))
      return t;
    if (ja(t))
      return null;
    t = An(t);
  }
  return null;
}
function md() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const xk = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Yr(e) {
  return xk.has(ao(e));
}
function Et(e) {
  return tt(e).getComputedStyle(e);
}
function La(e) {
  return Ct(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function An(e) {
  if (ao(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    jp(e) && e.host || // Fallback.
    Bt(e)
  );
  return jp(t) ? t.host : t;
}
function Iy(e) {
  const t = An(e);
  return Yr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : zt(t) && Es(t) ? t : Iy(t);
}
function fs(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Iy(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = tt(o);
  if (s) {
    const a = Bu(i);
    return t.concat(i, i.visualViewport || [], Es(o) ? o : [], a && n ? fs(a) : []);
  }
  return t.concat(o, fs(o, [], n));
}
function Bu(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Fy(e) {
  const t = Et(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = zt(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = na(n) !== s || na(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function gd(e) {
  return Ct(e) ? e : e.contextElement;
}
function Vr(e) {
  const t = gd(e);
  if (!zt(t))
    return It(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Fy(t);
  let i = (s ? na(n.width) : n.width) / r, a = (s ? na(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const wk = /* @__PURE__ */ It(0);
function Vy(e) {
  const t = tt(e);
  return !md() || !t.visualViewport ? wk : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Sk(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== tt(e) ? !1 : t;
}
function or(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = gd(e);
  let i = It(1);
  t && (r ? Ct(r) && (i = Vr(r)) : i = Vr(e));
  const a = Sk(s, n, r) ? Vy(s) : It(0);
  let l = (o.left + a.x) / i.x, u = (o.top + a.y) / i.y, c = o.width / i.x, d = o.height / i.y;
  if (s) {
    const f = tt(s), h = r && Ct(r) ? tt(r) : r;
    let w = f, y = Bu(w);
    for (; y && r && h !== w; ) {
      const S = Vr(y), g = y.getBoundingClientRect(), m = Et(y), v = g.left + (y.clientLeft + parseFloat(m.paddingLeft)) * S.x, b = g.top + (y.clientTop + parseFloat(m.paddingTop)) * S.y;
      l *= S.x, u *= S.y, c *= S.x, d *= S.y, l += v, u += b, w = tt(y), y = Bu(w);
    }
  }
  return oa({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function yd(e, t) {
  const n = La(e).scrollLeft;
  return t ? t.left + n : or(Bt(e)).left + n;
}
function zy(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    yd(e, r)
  )), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function bk(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = Bt(r), a = t ? ja(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = It(1);
  const c = It(0), d = zt(r);
  if ((d || !d && !s) && ((ao(r) !== "body" || Es(i)) && (l = La(r)), zt(r))) {
    const h = or(r);
    u = Vr(r), c.x = h.x + r.clientLeft, c.y = h.y + r.clientTop;
  }
  const f = i && !d && !s ? zy(i, l, !0) : It(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function kk(e) {
  return Array.from(e.getClientRects());
}
function Ck(e) {
  const t = Bt(e), n = La(e), r = e.ownerDocument.body, o = Ze(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Ze(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + yd(e);
  const a = -n.scrollTop;
  return Et(r).direction === "rtl" && (i += Ze(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
function Ek(e, t) {
  const n = tt(e), r = Bt(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const u = md();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
const Pk = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Tk(e, t) {
  const n = or(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = zt(e) ? Vr(e) : It(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, u = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: u
  };
}
function Lp(e, t, n) {
  let r;
  if (t === "viewport")
    r = Ek(e, n);
  else if (t === "document")
    r = Ck(Bt(e));
  else if (Ct(t))
    r = Tk(t, n);
  else {
    const o = Vy(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return oa(r);
}
function By(e, t) {
  const n = An(e);
  return n === t || !Ct(n) || Yr(n) ? !1 : Et(n).position === "fixed" || By(n, t);
}
function Dk(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = fs(e, [], !1).filter((a) => Ct(a) && ao(a) !== "body"), o = null;
  const s = Et(e).position === "fixed";
  let i = s ? An(e) : e;
  for (; Ct(i) && !Yr(i); ) {
    const a = Et(i), l = hd(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && Pk.has(o.position) || Es(i) && !l && By(e, i)) ? r = r.filter((c) => c !== i) : o = a, i = An(i);
  }
  return t.set(e, r), r;
}
function Nk(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? ja(t) ? [] : Dk(t, this._c) : [].concat(n), r], a = i[0], l = i.reduce((u, c) => {
    const d = Lp(t, c, o);
    return u.top = Ze(d.top, u.top), u.right = Rn(d.right, u.right), u.bottom = Rn(d.bottom, u.bottom), u.left = Ze(d.left, u.left), u;
  }, Lp(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Rk(e) {
  const {
    width: t,
    height: n
  } = Fy(e);
  return {
    width: t,
    height: n
  };
}
function Ak(e, t, n) {
  const r = zt(t), o = Bt(t), s = n === "fixed", i = or(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = It(0);
  function u() {
    l.x = yd(o);
  }
  if (r || !r && !s)
    if ((ao(t) !== "body" || Es(o)) && (a = La(t)), r) {
      const h = or(t, !0, s, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && u();
  s && !r && o && u();
  const c = o && !r && !s ? zy(o, a) : It(0), d = i.left + a.scrollLeft - l.x - c.x, f = i.top + a.scrollTop - l.y - c.y;
  return {
    x: d,
    y: f,
    width: i.width,
    height: i.height
  };
}
function Cl(e) {
  return Et(e).position === "static";
}
function _p(e, t) {
  if (!zt(e) || Et(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Bt(e) === n && (n = n.ownerDocument.body), n;
}
function $y(e, t) {
  const n = tt(e);
  if (ja(e))
    return n;
  if (!zt(e)) {
    let o = An(e);
    for (; o && !Yr(o); ) {
      if (Ct(o) && !Cl(o))
        return o;
      o = An(o);
    }
    return n;
  }
  let r = _p(e, t);
  for (; r && pk(r) && Cl(r); )
    r = _p(r, t);
  return r && Yr(r) && Cl(r) && !hd(r) ? n : r || vk(e) || n;
}
const Mk = async function(e) {
  const t = this.getOffsetParent || $y, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Ak(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function jk(e) {
  return Et(e).direction === "rtl";
}
const Lk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: bk,
  getDocumentElement: Bt,
  getClippingRect: Nk,
  getOffsetParent: $y,
  getElementRects: Mk,
  getClientRects: kk,
  getDimensions: Rk,
  getScale: Vr,
  isElement: Ct,
  isRTL: jk
};
function Uy(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function _k(e, t) {
  let n = null, r;
  const o = Bt(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const u = e.getBoundingClientRect(), {
      left: c,
      top: d,
      width: f,
      height: h
    } = u;
    if (a || t(), !f || !h)
      return;
    const w = qs(d), y = qs(o.clientWidth - (c + f)), S = qs(o.clientHeight - (d + h)), g = qs(c), v = {
      rootMargin: -w + "px " + -y + "px " + -S + "px " + -g + "px",
      threshold: Ze(0, Rn(1, l)) || 1
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
      E === 1 && !Uy(u, e.getBoundingClientRect()) && i(), b = !1;
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
function Ok(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = gd(e), c = o || s ? [...u ? fs(u) : [], ...fs(t)] : [];
  c.forEach((g) => {
    o && g.addEventListener("scroll", n, {
      passive: !0
    }), s && g.addEventListener("resize", n);
  });
  const d = u && a ? _k(u, n) : null;
  let f = -1, h = null;
  i && (h = new ResizeObserver((g) => {
    let [m] = g;
    m && m.target === u && h && (h.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var v;
      (v = h) == null || v.observe(t);
    })), n();
  }), u && !l && h.observe(u), h.observe(t));
  let w, y = l ? or(e) : null;
  l && S();
  function S() {
    const g = or(e);
    y && !Uy(y, g) && n(), y = g, w = requestAnimationFrame(S);
  }
  return n(), () => {
    var g;
    c.forEach((m) => {
      o && m.removeEventListener("scroll", n), s && m.removeEventListener("resize", n);
    }), d == null || d(), (g = h) == null || g.disconnect(), h = null, l && cancelAnimationFrame(w);
  };
}
const Ik = ak, Fk = lk, Vk = ok, zk = ck, Bk = sk, Op = rk, $k = uk, Uk = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Lk,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return nk(e, t, {
    ...o,
    platform: s
  });
};
var Wk = typeof document < "u", Hk = function() {
}, Ei = Wk ? x.useLayoutEffect : Hk;
function sa(e, t) {
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
        if (!sa(e[r], t[r]))
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
      if (!(s === "_owner" && e.$$typeof) && !sa(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Wy(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ip(e, t) {
  const n = Wy(e);
  return Math.round(t * n) / n;
}
function El(e) {
  const t = x.useRef(e);
  return Ei(() => {
    t.current = e;
  }), t;
}
function Kk(e) {
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
  } = e, [c, d] = x.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, h] = x.useState(r);
  sa(f, r) || h(r);
  const [w, y] = x.useState(null), [S, g] = x.useState(null), m = x.useCallback((T) => {
    T !== C.current && (C.current = T, y(T));
  }, []), v = x.useCallback((T) => {
    T !== E.current && (E.current = T, g(T));
  }, []), b = s || w, k = i || S, C = x.useRef(null), E = x.useRef(null), P = x.useRef(c), R = l != null, D = El(l), N = El(o), A = El(u), O = x.useCallback(() => {
    if (!C.current || !E.current)
      return;
    const T = {
      placement: t,
      strategy: n,
      middleware: f
    };
    N.current && (T.platform = N.current), Uk(C.current, E.current, T).then((j) => {
      const _ = {
        ...j,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: A.current !== !1
      };
      I.current && !sa(P.current, _) && (P.current = _, ro.flushSync(() => {
        d(_);
      }));
    });
  }, [f, t, n, N, A]);
  Ei(() => {
    u === !1 && P.current.isPositioned && (P.current.isPositioned = !1, d((T) => ({
      ...T,
      isPositioned: !1
    })));
  }, [u]);
  const I = x.useRef(!1);
  Ei(() => (I.current = !0, () => {
    I.current = !1;
  }), []), Ei(() => {
    if (b && (C.current = b), k && (E.current = k), b && k) {
      if (D.current)
        return D.current(b, k, O);
      O();
    }
  }, [b, k, O, D, R]);
  const K = x.useMemo(() => ({
    reference: C,
    floating: E,
    setReference: m,
    setFloating: v
  }), [m, v]), F = x.useMemo(() => ({
    reference: b,
    floating: k
  }), [b, k]), V = x.useMemo(() => {
    const T = {
      position: n,
      left: 0,
      top: 0
    };
    if (!F.floating)
      return T;
    const j = Ip(F.floating, c.x), _ = Ip(F.floating, c.y);
    return a ? {
      ...T,
      transform: "translate(" + j + "px, " + _ + "px)",
      ...Wy(F.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: j,
      top: _
    };
  }, [n, a, F.floating, c.x, c.y]);
  return x.useMemo(() => ({
    ...c,
    update: O,
    refs: K,
    elements: F,
    floatingStyles: V
  }), [c, O, K, F, V]);
}
const Gk = (e) => {
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
      return r && t(r) ? r.current != null ? Op({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Op({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Yk = (e, t) => ({
  ...Ik(e),
  options: [e, t]
}), Xk = (e, t) => ({
  ...Fk(e),
  options: [e, t]
}), Qk = (e, t) => ({
  ...$k(e),
  options: [e, t]
}), qk = (e, t) => ({
  ...Vk(e),
  options: [e, t]
}), Zk = (e, t) => ({
  ...zk(e),
  options: [e, t]
}), Jk = (e, t) => ({
  ...Bk(e),
  options: [e, t]
}), eC = (e, t) => ({
  ...Gk(e),
  options: [e, t]
});
var tC = "Arrow", Hy = x.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ p.jsx(
    Q.svg,
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
Hy.displayName = tC;
var nC = Hy;
function rC(e) {
  const [t, n] = x.useState(void 0);
  return Fe(() => {
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
var vd = "Popper", [Ky, Gy] = so(vd), [oC, Yy] = Ky(vd), Xy = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = x.useState(null);
  return /* @__PURE__ */ p.jsx(oC, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Xy.displayName = vd;
var Qy = "PopperAnchor", qy = x.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = Yy(Qy, n), i = x.useRef(null), a = ge(t, i);
    return x.useEffect(() => {
      s.onAnchorChange((r == null ? void 0 : r.current) || i.current);
    }), r ? null : /* @__PURE__ */ p.jsx(Q.div, { ...o, ref: a });
  }
);
qy.displayName = Qy;
var xd = "PopperContent", [sC, iC] = Ky(xd), Zy = x.forwardRef(
  (e, t) => {
    var B, ne, Ae, ee, Z, J;
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
      sticky: d = "partial",
      hideWhenDetached: f = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: w,
      ...y
    } = e, S = Yy(xd, n), [g, m] = x.useState(null), v = ge(t, (Qe) => m(Qe)), [b, k] = x.useState(null), C = rC(b), E = (C == null ? void 0 : C.width) ?? 0, P = (C == null ? void 0 : C.height) ?? 0, R = r + (s !== "center" ? "-" + s : ""), D = typeof c == "number" ? c : { top: 0, right: 0, bottom: 0, left: 0, ...c }, N = Array.isArray(u) ? u : [u], A = N.length > 0, O = {
      padding: D,
      boundary: N.filter(lC),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: A
    }, { refs: I, floatingStyles: K, placement: F, isPositioned: V, middlewareData: T } = Kk({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: R,
      whileElementsMounted: (...Qe) => Ok(...Qe, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: S.anchor
      },
      middleware: [
        Yk({ mainAxis: o + P, alignmentAxis: i }),
        l && Xk({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? Qk() : void 0,
          ...O
        }),
        l && qk({ ...O }),
        Zk({
          ...O,
          apply: ({ elements: Qe, rects: Nt, availableWidth: fo, availableHeight: po }) => {
            const { width: ho, height: cw } = Nt.reference, js = Qe.floating.style;
            js.setProperty("--radix-popper-available-width", `${fo}px`), js.setProperty("--radix-popper-available-height", `${po}px`), js.setProperty("--radix-popper-anchor-width", `${ho}px`), js.setProperty("--radix-popper-anchor-height", `${cw}px`);
          }
        }),
        b && eC({ element: b, padding: a }),
        uC({ arrowWidth: E, arrowHeight: P }),
        f && Jk({ strategy: "referenceHidden", ...O })
      ]
    }), [j, _] = tv(F), W = Nn(w);
    Fe(() => {
      V && (W == null || W());
    }, [V, W]);
    const ae = (B = T.arrow) == null ? void 0 : B.x, Tt = (ne = T.arrow) == null ? void 0 : ne.y, Re = ((Ae = T.arrow) == null ? void 0 : Ae.centerOffset) !== 0, [Dt, Ve] = x.useState();
    return Fe(() => {
      g && Ve(window.getComputedStyle(g).zIndex);
    }, [g]), /* @__PURE__ */ p.jsx(
      "div",
      {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...K,
          transform: V ? K.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Dt,
          "--radix-popper-transform-origin": [
            (ee = T.transformOrigin) == null ? void 0 : ee.x,
            (Z = T.transformOrigin) == null ? void 0 : Z.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((J = T.hide) == null ? void 0 : J.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ p.jsx(
          sC,
          {
            scope: n,
            placedSide: j,
            onArrowChange: k,
            arrowX: ae,
            arrowY: Tt,
            shouldHideArrow: Re,
            children: /* @__PURE__ */ p.jsx(
              Q.div,
              {
                "data-side": j,
                "data-align": _,
                ...y,
                ref: v,
                style: {
                  ...y.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: V ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Zy.displayName = xd;
var Jy = "PopperArrow", aC = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ev = x.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = iC(Jy, r), i = aC[s.placedSide];
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
          nC,
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
ev.displayName = Jy;
function lC(e) {
  return e !== null;
}
var uC = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var S, g, m;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((S = o.arrow) == null ? void 0 : S.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, c] = tv(n), d = { start: "0%", center: "50%", end: "100%" }[c], f = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + a / 2, h = (((m = o.arrow) == null ? void 0 : m.y) ?? 0) + l / 2;
    let w = "", y = "";
    return u === "bottom" ? (w = i ? d : `${f}px`, y = `${-l}px`) : u === "top" ? (w = i ? d : `${f}px`, y = `${r.floating.height + l}px`) : u === "right" ? (w = `${-l}px`, y = i ? d : `${h}px`) : u === "left" && (w = `${r.floating.width + l}px`, y = i ? d : `${h}px`), { data: { x: w, y } };
  }
});
function tv(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var cC = Xy, dC = qy, fC = Zy, pC = ev, hC = "Portal", wd = x.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, s] = x.useState(!1);
  Fe(() => s(!0), []);
  const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return i ? IS.createPortal(/* @__PURE__ */ p.jsx(Q.div, { ...r, ref: t }), i) : null;
});
wd.displayName = hC;
var mC = vm[" useInsertionEffect ".trim().toString()] || Fe;
function ps({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, i] = gC({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o;
  {
    const c = x.useRef(e !== void 0);
    x.useEffect(() => {
      const d = c.current;
      d !== a && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), c.current = a;
    }, [a, r]);
  }
  const u = x.useCallback(
    (c) => {
      var d;
      if (a) {
        const f = yC(c) ? c(e) : c;
        f !== e && ((d = i.current) == null || d.call(i, f));
      } else
        s(c);
    },
    [a, e, s, i]
  );
  return [l, u];
}
function gC({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = x.useState(e), o = x.useRef(n), s = x.useRef(t);
  return mC(() => {
    s.current = t;
  }, [t]), x.useEffect(() => {
    var i;
    o.current !== n && ((i = s.current) == null || i.call(s, n), o.current = n);
  }, [n, o]), [n, r, s];
}
function yC(e) {
  return typeof e == "function";
}
function vC(e) {
  const t = x.useRef({ value: e, previous: e });
  return x.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var nv = Object.freeze({
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
}), xC = "VisuallyHidden", wC = x.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(
    Q.span,
    {
      ...e,
      ref: t,
      style: { ...nv, ...e.style }
    }
  )
);
wC.displayName = xC;
var SC = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, fr = /* @__PURE__ */ new WeakMap(), Zs = /* @__PURE__ */ new WeakMap(), Js = {}, Pl = 0, rv = function(e) {
  return e && (e.host || rv(e.parentNode));
}, bC = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = rv(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, kC = function(e, t, n, r) {
  var o = bC(t, Array.isArray(e) ? e : [e]);
  Js[n] || (Js[n] = /* @__PURE__ */ new WeakMap());
  var s = Js[n], i = [], a = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || a.has(d) || (a.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (a.has(f))
        c(f);
      else
        try {
          var h = f.getAttribute(r), w = h !== null && h !== "false", y = (fr.get(f) || 0) + 1, S = (s.get(f) || 0) + 1;
          fr.set(f, y), s.set(f, S), i.push(f), y === 1 && w && Zs.set(f, !0), S === 1 && f.setAttribute(n, "true"), w || f.setAttribute(r, "true");
        } catch (g) {
          console.error("aria-hidden: cannot operate on ", f, g);
        }
    });
  };
  return c(t), a.clear(), Pl++, function() {
    i.forEach(function(d) {
      var f = fr.get(d) - 1, h = s.get(d) - 1;
      fr.set(d, f), s.set(d, h), f || (Zs.has(d) || d.removeAttribute(r), Zs.delete(d)), h || d.removeAttribute(n);
    }), Pl--, Pl || (fr = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap(), Zs = /* @__PURE__ */ new WeakMap(), Js = {});
  };
}, ov = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = SC(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), kC(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, jt = function() {
  return jt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, jt.apply(this, arguments);
};
function sv(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function CC(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Pi = "right-scroll-bar-position", Ti = "width-before-scroll-bar", EC = "with-scroll-bars-hidden", PC = "--removed-body-scroll-bar-size";
function Tl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function TC(e, t) {
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
var DC = typeof window < "u" ? x.useLayoutEffect : x.useEffect, Fp = /* @__PURE__ */ new WeakMap();
function NC(e, t) {
  var n = TC(null, function(r) {
    return e.forEach(function(o) {
      return Tl(o, r);
    });
  });
  return DC(function() {
    var r = Fp.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || Tl(a, null);
      }), s.forEach(function(a) {
        o.has(a) || Tl(a, i);
      });
    }
    Fp.set(n, e);
  }, [e]), n;
}
function RC(e) {
  return e;
}
function AC(e, t) {
  t === void 0 && (t = RC);
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
function MC(e) {
  e === void 0 && (e = {});
  var t = AC(null);
  return t.options = jt({ async: !0, ssr: !1 }, e), t;
}
var iv = function(e) {
  var t = e.sideCar, n = sv(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return x.createElement(r, jt({}, n));
};
iv.isSideCarExport = !0;
function jC(e, t) {
  return e.useMedium(t), iv;
}
var av = MC(), Dl = function() {
}, _a = x.forwardRef(function(e, t) {
  var n = x.useRef(null), r = x.useState({
    onScrollCapture: Dl,
    onWheelCapture: Dl,
    onTouchMoveCapture: Dl
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, h = e.noRelative, w = e.noIsolation, y = e.inert, S = e.allowPinchZoom, g = e.as, m = g === void 0 ? "div" : g, v = e.gapMode, b = sv(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), k = f, C = NC([n, t]), E = jt(jt({}, b), o);
  return x.createElement(
    x.Fragment,
    null,
    c && x.createElement(k, { sideCar: av, removeScrollBar: u, shards: d, noRelative: h, noIsolation: w, inert: y, setCallbacks: s, allowPinchZoom: !!S, lockRef: n, gapMode: v }),
    i ? x.cloneElement(x.Children.only(a), jt(jt({}, E), { ref: C })) : x.createElement(m, jt({}, E, { className: l, ref: C }), a)
  );
});
_a.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
_a.classNames = {
  fullWidth: Ti,
  zeroRight: Pi
};
var LC = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function _C() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = LC();
  return t && e.setAttribute("nonce", t), e;
}
function OC(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function IC(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var FC = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = _C()) && (OC(t, n), IC(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, VC = function() {
  var e = FC();
  return function(t, n) {
    x.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, lv = function() {
  var e = VC(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, zC = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Nl = function(e) {
  return parseInt(e || "", 10) || 0;
}, BC = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Nl(n), Nl(r), Nl(o)];
}, $C = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return zC;
  var t = BC(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, UC = lv(), zr = "data-scroll-locked", WC = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(EC, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(zr, `] {
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
  
  .`).concat(Pi, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ti, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Pi, " .").concat(Pi, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ti, " .").concat(Ti, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(zr, `] {
    `).concat(PC, ": ").concat(a, `px;
  }
`);
}, Vp = function() {
  var e = parseInt(document.body.getAttribute(zr) || "0", 10);
  return isFinite(e) ? e : 0;
}, HC = function() {
  x.useEffect(function() {
    return document.body.setAttribute(zr, (Vp() + 1).toString()), function() {
      var e = Vp() - 1;
      e <= 0 ? document.body.removeAttribute(zr) : document.body.setAttribute(zr, e.toString());
    };
  }, []);
}, KC = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  HC();
  var s = x.useMemo(function() {
    return $C(o);
  }, [o]);
  return x.createElement(UC, { styles: WC(s, !t, o, n ? "" : "!important") });
}, $u = !1;
if (typeof window < "u")
  try {
    var ei = Object.defineProperty({}, "passive", {
      get: function() {
        return $u = !0, !0;
      }
    });
    window.addEventListener("test", ei, ei), window.removeEventListener("test", ei, ei);
  } catch {
    $u = !1;
  }
var pr = $u ? { passive: !1 } : !1, GC = function(e) {
  return e.tagName === "TEXTAREA";
}, uv = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !GC(e) && n[t] === "visible")
  );
}, YC = function(e) {
  return uv(e, "overflowY");
}, XC = function(e) {
  return uv(e, "overflowX");
}, zp = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = cv(e, r);
    if (o) {
      var s = dv(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, QC = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, qC = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, cv = function(e, t) {
  return e === "v" ? YC(t) : XC(t);
}, dv = function(e, t) {
  return e === "v" ? QC(t) : qC(t);
}, ZC = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, JC = function(e, t, n, r, o) {
  var s = ZC(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, l = t.contains(a), u = !1, c = i > 0, d = 0, f = 0;
  do {
    if (!a)
      break;
    var h = dv(e, a), w = h[0], y = h[1], S = h[2], g = y - S - s * w;
    (w || g) && cv(e, a) && (d += g, f += w);
    var m = a.parentNode;
    a = m && m.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? m.host : m;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (c && Math.abs(d) < 1 || !c && Math.abs(f) < 1) && (u = !0), u;
}, ti = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Bp = function(e) {
  return [e.deltaX, e.deltaY];
}, $p = function(e) {
  return e && "current" in e ? e.current : e;
}, eE = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, tE = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, nE = 0, hr = [];
function rE(e) {
  var t = x.useRef([]), n = x.useRef([0, 0]), r = x.useRef(), o = x.useState(nE++)[0], s = x.useState(lv)[0], i = x.useRef(e);
  x.useEffect(function() {
    i.current = e;
  }, [e]), x.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var y = CC([e.lockRef.current], (e.shards || []).map($p), !0).filter(Boolean);
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
    var g = ti(y), m = n.current, v = "deltaX" in y ? y.deltaX : m[0] - g[0], b = "deltaY" in y ? y.deltaY : m[1] - g[1], k, C = y.target, E = Math.abs(v) > Math.abs(b) ? "h" : "v";
    if ("touches" in y && E === "h" && C.type === "range")
      return !1;
    var P = zp(E, C);
    if (!P)
      return !0;
    if (P ? k = E : (k = E === "v" ? "h" : "v", P = zp(E, C)), !P)
      return !1;
    if (!r.current && "changedTouches" in y && (v || b) && (r.current = k), !k)
      return !0;
    var R = r.current || k;
    return JC(R, S, y, R === "h" ? v : b);
  }, []), l = x.useCallback(function(y) {
    var S = y;
    if (!(!hr.length || hr[hr.length - 1] !== s)) {
      var g = "deltaY" in S ? Bp(S) : ti(S), m = t.current.filter(function(k) {
        return k.name === S.type && (k.target === S.target || S.target === k.shadowParent) && eE(k.delta, g);
      })[0];
      if (m && m.should) {
        S.cancelable && S.preventDefault();
        return;
      }
      if (!m) {
        var v = (i.current.shards || []).map($p).filter(Boolean).filter(function(k) {
          return k.contains(S.target);
        }), b = v.length > 0 ? a(S, v[0]) : !i.current.noIsolation;
        b && S.cancelable && S.preventDefault();
      }
    }
  }, []), u = x.useCallback(function(y, S, g, m) {
    var v = { name: y, delta: S, target: g, should: m, shadowParent: oE(g) };
    t.current.push(v), setTimeout(function() {
      t.current = t.current.filter(function(b) {
        return b !== v;
      });
    }, 1);
  }, []), c = x.useCallback(function(y) {
    n.current = ti(y), r.current = void 0;
  }, []), d = x.useCallback(function(y) {
    u(y.type, Bp(y), y.target, a(y, e.lockRef.current));
  }, []), f = x.useCallback(function(y) {
    u(y.type, ti(y), y.target, a(y, e.lockRef.current));
  }, []);
  x.useEffect(function() {
    return hr.push(s), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, pr), document.addEventListener("touchmove", l, pr), document.addEventListener("touchstart", c, pr), function() {
      hr = hr.filter(function(y) {
        return y !== s;
      }), document.removeEventListener("wheel", l, pr), document.removeEventListener("touchmove", l, pr), document.removeEventListener("touchstart", c, pr);
    };
  }, []);
  var h = e.removeScrollBar, w = e.inert;
  return x.createElement(
    x.Fragment,
    null,
    w ? x.createElement(s, { styles: tE(o) }) : null,
    h ? x.createElement(KC, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function oE(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const sE = jC(av, rE);
var Sd = x.forwardRef(function(e, t) {
  return x.createElement(_a, jt({}, e, { ref: t, sideCar: sE }));
});
Sd.classNames = _a.classNames;
var iE = [" ", "Enter", "ArrowUp", "ArrowDown"], aE = [" ", "Enter"], sr = "Select", [Oa, Ia, lE] = Ny(sr), [lo, bR] = so(sr, [
  lE,
  Gy
]), Fa = Gy(), [uE, In] = lo(sr), [cE, dE] = lo(sr), fv = (e) => {
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
    autoComplete: d,
    disabled: f,
    required: h,
    form: w
  } = e, y = Fa(t), [S, g] = x.useState(null), [m, v] = x.useState(null), [b, k] = x.useState(!1), C = ld(u), [E, P] = ps({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: sr
  }), [R, D] = ps({
    prop: i,
    defaultProp: a,
    onChange: l,
    caller: sr
  }), N = x.useRef(null), A = S ? w || !!S.closest("form") : !0, [O, I] = x.useState(/* @__PURE__ */ new Set()), K = Array.from(O).map((F) => F.props.value).join(";");
  return /* @__PURE__ */ p.jsx(cC, { ...y, children: /* @__PURE__ */ p.jsxs(
    uE,
    {
      required: h,
      scope: t,
      trigger: S,
      onTriggerChange: g,
      valueNode: m,
      onValueNodeChange: v,
      valueNodeHasChildren: b,
      onValueNodeHasChildrenChange: k,
      contentId: En(),
      value: R,
      onValueChange: D,
      open: E,
      onOpenChange: P,
      dir: C,
      triggerPointerDownPosRef: N,
      disabled: f,
      children: [
        /* @__PURE__ */ p.jsx(Oa.Provider, { scope: t, children: /* @__PURE__ */ p.jsx(
          cE,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: x.useCallback((F) => {
              I((V) => new Set(V).add(F));
            }, []),
            onNativeOptionRemove: x.useCallback((F) => {
              I((V) => {
                const T = new Set(V);
                return T.delete(F), T;
              });
            }, []),
            children: n
          }
        ) }),
        A ? /* @__PURE__ */ p.jsxs(
          Lv,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: c,
            autoComplete: d,
            value: R,
            onChange: (F) => D(F.target.value),
            disabled: f,
            form: w,
            children: [
              R === void 0 ? /* @__PURE__ */ p.jsx("option", { value: "" }) : null,
              Array.from(O)
            ]
          },
          K
        ) : null
      ]
    }
  ) });
};
fv.displayName = sr;
var pv = "SelectTrigger", hv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = Fa(n), i = In(pv, n), a = i.disabled || r, l = ge(t, i.onTriggerChange), u = Ia(n), c = x.useRef("touch"), [d, f, h] = Ov((y) => {
      const S = u().filter((v) => !v.disabled), g = S.find((v) => v.value === i.value), m = Iv(S, y, g);
      m !== void 0 && i.onValueChange(m.value);
    }), w = (y) => {
      a || (i.onOpenChange(!0), h()), y && (i.triggerPointerDownPosRef.current = {
        x: Math.round(y.pageX),
        y: Math.round(y.pageY)
      });
    };
    return /* @__PURE__ */ p.jsx(dC, { asChild: !0, ...s, children: /* @__PURE__ */ p.jsx(
      Q.button,
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
        "data-placeholder": _v(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: Y(o.onClick, (y) => {
          y.currentTarget.focus(), c.current !== "mouse" && w(y);
        }),
        onPointerDown: Y(o.onPointerDown, (y) => {
          c.current = y.pointerType;
          const S = y.target;
          S.hasPointerCapture(y.pointerId) && S.releasePointerCapture(y.pointerId), y.button === 0 && y.ctrlKey === !1 && y.pointerType === "mouse" && (w(y), y.preventDefault());
        }),
        onKeyDown: Y(o.onKeyDown, (y) => {
          const S = d.current !== "";
          !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && f(y.key), !(S && y.key === " ") && iE.includes(y.key) && (w(), y.preventDefault());
        })
      }
    ) });
  }
);
hv.displayName = pv;
var mv = "SelectValue", gv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: i = "", ...a } = e, l = In(mv, n), { onValueNodeHasChildrenChange: u } = l, c = s !== void 0, d = ge(t, l.onValueNodeChange);
    return Fe(() => {
      u(c);
    }, [u, c]), /* @__PURE__ */ p.jsx(
      Q.span,
      {
        ...a,
        ref: d,
        style: { pointerEvents: "none" },
        children: _v(l.value) ? /* @__PURE__ */ p.jsx(p.Fragment, { children: i }) : s
      }
    );
  }
);
gv.displayName = mv;
var fE = "SelectIcon", yv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ p.jsx(Q.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
yv.displayName = fE;
var pE = "SelectPortal", vv = (e) => /* @__PURE__ */ p.jsx(wd, { asChild: !0, ...e });
vv.displayName = pE;
var ir = "SelectContent", xv = x.forwardRef(
  (e, t) => {
    const n = In(ir, e.__scopeSelect), [r, o] = x.useState();
    if (Fe(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? ro.createPortal(
        /* @__PURE__ */ p.jsx(wv, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx(Oa.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ p.jsx(Sv, { ...e, ref: t });
  }
);
xv.displayName = ir;
var gt = 10, [wv, Fn] = lo(ir), hE = "SelectContentImpl", mE = /* @__PURE__ */ cs("SelectContent.RemoveScroll"), Sv = x.forwardRef(
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
      arrowPadding: d,
      collisionBoundary: f,
      collisionPadding: h,
      sticky: w,
      hideWhenDetached: y,
      avoidCollisions: S,
      //
      ...g
    } = e, m = In(ir, n), [v, b] = x.useState(null), [k, C] = x.useState(null), E = ge(t, (B) => b(B)), [P, R] = x.useState(null), [D, N] = x.useState(
      null
    ), A = Ia(n), [O, I] = x.useState(!1), K = x.useRef(!1);
    x.useEffect(() => {
      if (v) return ov(v);
    }, [v]), My();
    const F = x.useCallback(
      (B) => {
        const [ne, ...Ae] = A().map((J) => J.ref.current), [ee] = Ae.slice(-1), Z = document.activeElement;
        for (const J of B)
          if (J === Z || (J == null || J.scrollIntoView({ block: "nearest" }), J === ne && k && (k.scrollTop = 0), J === ee && k && (k.scrollTop = k.scrollHeight), J == null || J.focus(), document.activeElement !== Z)) return;
      },
      [A, k]
    ), V = x.useCallback(
      () => F([P, v]),
      [F, P, v]
    );
    x.useEffect(() => {
      O && V();
    }, [O, V]);
    const { onOpenChange: T, triggerPointerDownPosRef: j } = m;
    x.useEffect(() => {
      if (v) {
        let B = { x: 0, y: 0 };
        const ne = (ee) => {
          var Z, J;
          B = {
            x: Math.abs(Math.round(ee.pageX) - (((Z = j.current) == null ? void 0 : Z.x) ?? 0)),
            y: Math.abs(Math.round(ee.pageY) - (((J = j.current) == null ? void 0 : J.y) ?? 0))
          };
        }, Ae = (ee) => {
          B.x <= 10 && B.y <= 10 ? ee.preventDefault() : v.contains(ee.target) || T(!1), document.removeEventListener("pointermove", ne), j.current = null;
        };
        return j.current !== null && (document.addEventListener("pointermove", ne), document.addEventListener("pointerup", Ae, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", ne), document.removeEventListener("pointerup", Ae, { capture: !0 });
        };
      }
    }, [v, T, j]), x.useEffect(() => {
      const B = () => T(!1);
      return window.addEventListener("blur", B), window.addEventListener("resize", B), () => {
        window.removeEventListener("blur", B), window.removeEventListener("resize", B);
      };
    }, [T]);
    const [_, W] = Ov((B) => {
      const ne = A().filter((Z) => !Z.disabled), Ae = ne.find((Z) => Z.ref.current === document.activeElement), ee = Iv(ne, B, Ae);
      ee && setTimeout(() => ee.ref.current.focus());
    }), ae = x.useCallback(
      (B, ne, Ae) => {
        const ee = !K.current && !Ae;
        (m.value !== void 0 && m.value === ne || ee) && (R(B), ee && (K.current = !0));
      },
      [m.value]
    ), Tt = x.useCallback(() => v == null ? void 0 : v.focus(), [v]), Re = x.useCallback(
      (B, ne, Ae) => {
        const ee = !K.current && !Ae;
        (m.value !== void 0 && m.value === ne || ee) && N(B);
      },
      [m.value]
    ), Dt = r === "popper" ? Uu : bv, Ve = Dt === Uu ? {
      side: a,
      sideOffset: l,
      align: u,
      alignOffset: c,
      arrowPadding: d,
      collisionBoundary: f,
      collisionPadding: h,
      sticky: w,
      hideWhenDetached: y,
      avoidCollisions: S
    } : {};
    return /* @__PURE__ */ p.jsx(
      wv,
      {
        scope: n,
        content: v,
        viewport: k,
        onViewportChange: C,
        itemRefCallback: ae,
        selectedItem: P,
        onItemLeave: Tt,
        itemTextRefCallback: Re,
        focusSelectedItem: V,
        selectedItemText: D,
        position: r,
        isPositioned: O,
        searchRef: _,
        children: /* @__PURE__ */ p.jsx(Sd, { as: mE, allowPinchZoom: !0, children: /* @__PURE__ */ p.jsx(
          cd,
          {
            asChild: !0,
            trapped: m.open,
            onMountAutoFocus: (B) => {
              B.preventDefault();
            },
            onUnmountAutoFocus: Y(o, (B) => {
              var ne;
              (ne = m.trigger) == null || ne.focus({ preventScroll: !0 }), B.preventDefault();
            }),
            children: /* @__PURE__ */ p.jsx(
              ud,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: (B) => B.preventDefault(),
                onDismiss: () => m.onOpenChange(!1),
                children: /* @__PURE__ */ p.jsx(
                  Dt,
                  {
                    role: "listbox",
                    id: m.contentId,
                    "data-state": m.open ? "open" : "closed",
                    dir: m.dir,
                    onContextMenu: (B) => B.preventDefault(),
                    ...g,
                    ...Ve,
                    onPlaced: () => I(!0),
                    ref: E,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...g.style
                    },
                    onKeyDown: Y(g.onKeyDown, (B) => {
                      const ne = B.ctrlKey || B.altKey || B.metaKey;
                      if (B.key === "Tab" && B.preventDefault(), !ne && B.key.length === 1 && W(B.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(B.key)) {
                        let ee = A().filter((Z) => !Z.disabled).map((Z) => Z.ref.current);
                        if (["ArrowUp", "End"].includes(B.key) && (ee = ee.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(B.key)) {
                          const Z = B.target, J = ee.indexOf(Z);
                          ee = ee.slice(J + 1);
                        }
                        setTimeout(() => F(ee)), B.preventDefault();
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
Sv.displayName = hE;
var gE = "SelectItemAlignedPosition", bv = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = In(ir, n), i = Fn(ir, n), [a, l] = x.useState(null), [u, c] = x.useState(null), d = ge(t, (E) => c(E)), f = Ia(n), h = x.useRef(!1), w = x.useRef(!0), { viewport: y, selectedItem: S, selectedItemText: g, focusSelectedItem: m } = i, v = x.useCallback(() => {
    if (s.trigger && s.valueNode && a && u && y && S && g) {
      const E = s.trigger.getBoundingClientRect(), P = u.getBoundingClientRect(), R = s.valueNode.getBoundingClientRect(), D = g.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const Z = D.left - P.left, J = R.left - Z, Qe = E.left - J, Nt = E.width + Qe, fo = Math.max(Nt, P.width), po = window.innerWidth - gt, ho = xp(J, [
          gt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(gt, po - fo)
        ]);
        a.style.minWidth = Nt + "px", a.style.left = ho + "px";
      } else {
        const Z = P.right - D.right, J = window.innerWidth - R.right - Z, Qe = window.innerWidth - E.right - J, Nt = E.width + Qe, fo = Math.max(Nt, P.width), po = window.innerWidth - gt, ho = xp(J, [
          gt,
          Math.max(gt, po - fo)
        ]);
        a.style.minWidth = Nt + "px", a.style.right = ho + "px";
      }
      const N = f(), A = window.innerHeight - gt * 2, O = y.scrollHeight, I = window.getComputedStyle(u), K = parseInt(I.borderTopWidth, 10), F = parseInt(I.paddingTop, 10), V = parseInt(I.borderBottomWidth, 10), T = parseInt(I.paddingBottom, 10), j = K + F + O + T + V, _ = Math.min(S.offsetHeight * 5, j), W = window.getComputedStyle(y), ae = parseInt(W.paddingTop, 10), Tt = parseInt(W.paddingBottom, 10), Re = E.top + E.height / 2 - gt, Dt = A - Re, Ve = S.offsetHeight / 2, B = S.offsetTop + Ve, ne = K + F + B, Ae = j - ne;
      if (ne <= Re) {
        const Z = N.length > 0 && S === N[N.length - 1].ref.current;
        a.style.bottom = "0px";
        const J = u.clientHeight - y.offsetTop - y.offsetHeight, Qe = Math.max(
          Dt,
          Ve + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Z ? Tt : 0) + J + V
        ), Nt = ne + Qe;
        a.style.height = Nt + "px";
      } else {
        const Z = N.length > 0 && S === N[0].ref.current;
        a.style.top = "0px";
        const Qe = Math.max(
          Re,
          K + y.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Z ? ae : 0) + Ve
        ) + Ae;
        a.style.height = Qe + "px", y.scrollTop = ne - Re + y.offsetTop;
      }
      a.style.margin = `${gt}px 0`, a.style.minHeight = _ + "px", a.style.maxHeight = A + "px", r == null || r(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    f,
    s.trigger,
    s.valueNode,
    a,
    u,
    y,
    S,
    g,
    s.dir,
    r
  ]);
  Fe(() => v(), [v]);
  const [b, k] = x.useState();
  Fe(() => {
    u && k(window.getComputedStyle(u).zIndex);
  }, [u]);
  const C = x.useCallback(
    (E) => {
      E && w.current === !0 && (v(), m == null || m(), w.current = !1);
    },
    [v, m]
  );
  return /* @__PURE__ */ p.jsx(
    vE,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: h,
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
bv.displayName = gE;
var yE = "SelectPopperPosition", Uu = x.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = gt,
    ...s
  } = e, i = Fa(n);
  return /* @__PURE__ */ p.jsx(
    fC,
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
Uu.displayName = yE;
var [vE, bd] = lo(ir, {}), Wu = "SelectViewport", kv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = Fn(Wu, n), i = bd(Wu, n), a = ge(t, s.onViewportChange), l = x.useRef(0);
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
      /* @__PURE__ */ p.jsx(Oa.Slot, { scope: n, children: /* @__PURE__ */ p.jsx(
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
          onScroll: Y(o.onScroll, (u) => {
            const c = u.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: f } = i;
            if (f != null && f.current && d) {
              const h = Math.abs(l.current - c.scrollTop);
              if (h > 0) {
                const w = window.innerHeight - gt * 2, y = parseFloat(d.style.minHeight), S = parseFloat(d.style.height), g = Math.max(y, S);
                if (g < w) {
                  const m = g + h, v = Math.min(w, m), b = m - v;
                  d.style.height = v + "px", d.style.bottom === "0px" && (c.scrollTop = b > 0 ? b : 0, d.style.justifyContent = "flex-end");
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
kv.displayName = Wu;
var Cv = "SelectGroup", [xE, wE] = lo(Cv), SE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = En();
    return /* @__PURE__ */ p.jsx(xE, { scope: n, id: o, children: /* @__PURE__ */ p.jsx(Q.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
SE.displayName = Cv;
var Ev = "SelectLabel", bE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = wE(Ev, n);
    return /* @__PURE__ */ p.jsx(Q.div, { id: o.id, ...r, ref: t });
  }
);
bE.displayName = Ev;
var ia = "SelectItem", [kE, Pv] = lo(ia), Tv = x.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...i
    } = e, a = In(ia, n), l = Fn(ia, n), u = a.value === r, [c, d] = x.useState(s ?? ""), [f, h] = x.useState(!1), w = ge(
      t,
      (m) => {
        var v;
        return (v = l.itemRefCallback) == null ? void 0 : v.call(l, m, r, o);
      }
    ), y = En(), S = x.useRef("touch"), g = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ p.jsx(
      kE,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: y,
        isSelected: u,
        onItemTextChange: x.useCallback((m) => {
          d((v) => v || ((m == null ? void 0 : m.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ p.jsx(
          Oa.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: c,
            children: /* @__PURE__ */ p.jsx(
              Q.div,
              {
                role: "option",
                "aria-labelledby": y,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": u && f,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: w,
                onFocus: Y(i.onFocus, () => h(!0)),
                onBlur: Y(i.onBlur, () => h(!1)),
                onClick: Y(i.onClick, () => {
                  S.current !== "mouse" && g();
                }),
                onPointerUp: Y(i.onPointerUp, () => {
                  S.current === "mouse" && g();
                }),
                onPointerDown: Y(i.onPointerDown, (m) => {
                  S.current = m.pointerType;
                }),
                onPointerMove: Y(i.onPointerMove, (m) => {
                  var v;
                  S.current = m.pointerType, o ? (v = l.onItemLeave) == null || v.call(l) : S.current === "mouse" && m.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Y(i.onPointerLeave, (m) => {
                  var v;
                  m.currentTarget === document.activeElement && ((v = l.onItemLeave) == null || v.call(l));
                }),
                onKeyDown: Y(i.onKeyDown, (m) => {
                  var b;
                  ((b = l.searchRef) == null ? void 0 : b.current) !== "" && m.key === " " || (aE.includes(m.key) && g(), m.key === " " && m.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Tv.displayName = ia;
var Ro = "SelectItemText", Dv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, i = In(Ro, n), a = Fn(Ro, n), l = Pv(Ro, n), u = dE(Ro, n), [c, d] = x.useState(null), f = ge(
      t,
      (g) => d(g),
      l.onItemTextChange,
      (g) => {
        var m;
        return (m = a.itemTextRefCallback) == null ? void 0 : m.call(a, g, l.value, l.disabled);
      }
    ), h = c == null ? void 0 : c.textContent, w = x.useMemo(
      () => /* @__PURE__ */ p.jsx("option", { value: l.value, disabled: l.disabled, children: h }, l.value),
      [l.disabled, l.value, h]
    ), { onNativeOptionAdd: y, onNativeOptionRemove: S } = u;
    return Fe(() => (y(w), () => S(w)), [y, S, w]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(Q.span, { id: l.textId, ...s, ref: f }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? ro.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
Dv.displayName = Ro;
var Nv = "SelectItemIndicator", Rv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Pv(Nv, n).isSelected ? /* @__PURE__ */ p.jsx(Q.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Rv.displayName = Nv;
var Hu = "SelectScrollUpButton", Av = x.forwardRef((e, t) => {
  const n = Fn(Hu, e.__scopeSelect), r = bd(Hu, e.__scopeSelect), [o, s] = x.useState(!1), i = ge(t, r.onScrollButtonChange);
  return Fe(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = l.scrollTop > 0;
        s(u);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    jv,
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
Av.displayName = Hu;
var Ku = "SelectScrollDownButton", Mv = x.forwardRef((e, t) => {
  const n = Fn(Ku, e.__scopeSelect), r = bd(Ku, e.__scopeSelect), [o, s] = x.useState(!1), i = ge(t, r.onScrollButtonChange);
  return Fe(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = l.scrollHeight - l.clientHeight, c = Math.ceil(l.scrollTop) < u;
        s(c);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    jv,
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
Mv.displayName = Ku;
var jv = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = Fn("SelectScrollButton", n), i = x.useRef(null), a = Ia(n), l = x.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return x.useEffect(() => () => l(), [l]), Fe(() => {
    var c;
    const u = a().find((d) => d.ref.current === document.activeElement);
    (c = u == null ? void 0 : u.ref.current) == null || c.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ p.jsx(
    Q.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: Y(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: Y(o.onPointerMove, () => {
        var u;
        (u = s.onItemLeave) == null || u.call(s), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: Y(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), CE = "SelectSeparator", EE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ p.jsx(Q.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
EE.displayName = CE;
var Gu = "SelectArrow", PE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Fa(n), s = In(Gu, n), i = Fn(Gu, n);
    return s.open && i.position === "popper" ? /* @__PURE__ */ p.jsx(pC, { ...o, ...r, ref: t }) : null;
  }
);
PE.displayName = Gu;
var TE = "SelectBubbleInput", Lv = x.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = x.useRef(null), s = ge(r, o), i = vC(t);
    return x.useEffect(() => {
      const a = o.current;
      if (!a) return;
      const l = window.HTMLSelectElement.prototype, c = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (i !== t && c) {
        const d = new Event("change", { bubbles: !0 });
        c.call(a, t), a.dispatchEvent(d);
      }
    }, [i, t]), /* @__PURE__ */ p.jsx(
      Q.select,
      {
        ...n,
        style: { ...nv, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
Lv.displayName = TE;
function _v(e) {
  return e === "" || e === void 0;
}
function Ov(e) {
  const t = Nn(e), n = x.useRef(""), r = x.useRef(0), o = x.useCallback(
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
function Iv(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = DE(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function DE(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var NE = fv, RE = hv, AE = gv, ME = yv, jE = vv, LE = xv, _E = kv, OE = Tv, IE = Dv, FE = Rv, VE = Av, zE = Mv;
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BE = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Fv = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $E = {
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
const UE = x.forwardRef(
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
      ...$E,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Fv("lucide", o),
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
const Ee = (e, t) => {
  const n = x.forwardRef(
    ({ className: r, ...o }, s) => x.createElement(UE, {
      ref: s,
      iconNode: t,
      className: Fv(`lucide-${BE(e)}`, r),
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
const Vv = Ee("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zv = Ee("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Va = Ee("Building2", [
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
const WE = Ee("Building", [
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
const hs = Ee("CalendarDays", [
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
const Di = Ee("Calendar", [
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
const HE = Ee("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bv = Ee("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $v = Ee("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uv = Ee("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KE = Ee("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = Ee("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GE = Ee("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YE = Ee("ExternalLink", [
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
const Up = Ee("List", [
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
const Wv = Ee("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = Ee("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XE = Ee("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function ni({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(NE, { "data-slot": "select", ...e });
}
function ri({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(AE, { "data-slot": "select-value", ...e });
}
function oi({
  className: e,
  size: t = "default",
  children: n,
  ...r
}) {
  return /* @__PURE__ */ p.jsxs(
    RE,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: me(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ p.jsx(ME, { asChild: !0, children: /* @__PURE__ */ p.jsx(Bv, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function si({
  className: e,
  children: t,
  position: n = "popper",
  ...r
}) {
  return /* @__PURE__ */ p.jsx(jE, { children: /* @__PURE__ */ p.jsxs(
    LE,
    {
      "data-slot": "select-content",
      className: me(
        "bg-white text-gray-900 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      ...r,
      children: [
        /* @__PURE__ */ p.jsx(QE, {}),
        /* @__PURE__ */ p.jsx(
          _E,
          {
            className: me(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ p.jsx(qE, {})
      ]
    }
  ) });
}
function We({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ p.jsxs(
    OE,
    {
      "data-slot": "select-item",
      className: me(
        "focus:bg-gray-100 focus:text-gray-900 hover:bg-gray-50 text-gray-900 relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ p.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ p.jsx(FE, { children: /* @__PURE__ */ p.jsx(HE, { className: "size-4" }) }) }),
        /* @__PURE__ */ p.jsx(IE, { children: t })
      ]
    }
  );
}
function QE({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    VE,
    {
      "data-slot": "select-scroll-up-button",
      className: me(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p.jsx(KE, { className: "size-4" })
    }
  );
}
function qE({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    zE,
    {
      "data-slot": "select-scroll-down-button",
      className: me(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p.jsx(Bv, { className: "size-4" })
    }
  );
}
const Yu = x.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ p.jsx(
    "input",
    {
      type: t,
      className: me(
        "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
Yu.displayName = "Input";
var Rl = "rovingFocusGroup.onEntryFocus", ZE = { bubbles: !1, cancelable: !0 }, Ts = "RovingFocusGroup", [Xu, Hv, JE] = Ny(Ts), [eP, Kv] = so(
  Ts,
  [JE]
), [tP, nP] = eP(Ts), Gv = x.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(Xu.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(Xu.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(rP, { ...e, ref: t }) }) })
);
Gv.displayName = Ts;
var rP = x.forwardRef((e, t) => {
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
    ...d
  } = e, f = x.useRef(null), h = ge(t, f), w = ld(s), [y, S] = ps({
    prop: i,
    defaultProp: a ?? null,
    onChange: l,
    caller: Ts
  }), [g, m] = x.useState(!1), v = Nn(u), b = Hv(n), k = x.useRef(!1), [C, E] = x.useState(0);
  return x.useEffect(() => {
    const P = f.current;
    if (P)
      return P.addEventListener(Rl, v), () => P.removeEventListener(Rl, v);
  }, [v]), /* @__PURE__ */ p.jsx(
    tP,
    {
      scope: n,
      orientation: r,
      dir: w,
      loop: o,
      currentTabStopId: y,
      onItemFocus: x.useCallback(
        (P) => S(P),
        [S]
      ),
      onItemShiftTab: x.useCallback(() => m(!0), []),
      onFocusableItemAdd: x.useCallback(
        () => E((P) => P + 1),
        []
      ),
      onFocusableItemRemove: x.useCallback(
        () => E((P) => P - 1),
        []
      ),
      children: /* @__PURE__ */ p.jsx(
        Q.div,
        {
          tabIndex: g || C === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: Y(e.onMouseDown, () => {
            k.current = !0;
          }),
          onFocus: Y(e.onFocus, (P) => {
            const R = !k.current;
            if (P.target === P.currentTarget && R && !g) {
              const D = new CustomEvent(Rl, ZE);
              if (P.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                const N = b().filter((F) => F.focusable), A = N.find((F) => F.active), O = N.find((F) => F.id === y), K = [A, O, ...N].filter(
                  Boolean
                ).map((F) => F.ref.current);
                Qv(K, c);
              }
            }
            k.current = !1;
          }),
          onBlur: Y(e.onBlur, () => m(!1))
        }
      )
    }
  );
}), Yv = "RovingFocusGroupItem", Xv = x.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: i,
      ...a
    } = e, l = En(), u = s || l, c = nP(Yv, n), d = c.currentTabStopId === u, f = Hv(n), { onFocusableItemAdd: h, onFocusableItemRemove: w, currentTabStopId: y } = c;
    return x.useEffect(() => {
      if (r)
        return h(), () => w();
    }, [r, h, w]), /* @__PURE__ */ p.jsx(
      Xu.ItemSlot,
      {
        scope: n,
        id: u,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ p.jsx(
          Q.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": c.orientation,
            ...a,
            ref: t,
            onMouseDown: Y(e.onMouseDown, (S) => {
              r ? c.onItemFocus(u) : S.preventDefault();
            }),
            onFocus: Y(e.onFocus, () => c.onItemFocus(u)),
            onKeyDown: Y(e.onKeyDown, (S) => {
              if (S.key === "Tab" && S.shiftKey) {
                c.onItemShiftTab();
                return;
              }
              if (S.target !== S.currentTarget) return;
              const g = iP(S, c.orientation, c.dir);
              if (g !== void 0) {
                if (S.metaKey || S.ctrlKey || S.altKey || S.shiftKey) return;
                S.preventDefault();
                let v = f().filter((b) => b.focusable).map((b) => b.ref.current);
                if (g === "last") v.reverse();
                else if (g === "prev" || g === "next") {
                  g === "prev" && v.reverse();
                  const b = v.indexOf(S.currentTarget);
                  v = c.loop ? aP(v, b + 1) : v.slice(b + 1);
                }
                setTimeout(() => Qv(v));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: d, hasTabStop: y != null }) : i
          }
        )
      }
    );
  }
);
Xv.displayName = Yv;
var oP = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function sP(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function iP(e, t, n) {
  const r = sP(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return oP[r];
}
function Qv(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function aP(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var lP = Gv, uP = Xv;
function cP(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var Ds = (e) => {
  const { present: t, children: n } = e, r = dP(t), o = typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n), s = ge(r.ref, fP(o));
  return typeof n == "function" || r.isPresent ? x.cloneElement(o, { ref: s }) : null;
};
Ds.displayName = "Presence";
function dP(e) {
  const [t, n] = x.useState(), r = x.useRef(null), o = x.useRef(e), s = x.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = cP(i, {
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
    const u = ii(r.current);
    s.current = a === "mounted" ? u : "none";
  }, [a]), Fe(() => {
    const u = r.current, c = o.current;
    if (c !== e) {
      const f = s.current, h = ii(u);
      e ? l("MOUNT") : h === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Fe(() => {
    if (t) {
      let u;
      const c = t.ownerDocument.defaultView ?? window, d = (h) => {
        const y = ii(r.current).includes(h.animationName);
        if (h.target === t && y && (l("ANIMATION_END"), !o.current)) {
          const S = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = c.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S);
          });
        }
      }, f = (h) => {
        h.target === t && (s.current = ii(r.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        c.clearTimeout(u), t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
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
function ii(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function fP(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var za = "Tabs", [pP, kR] = so(za, [
  Kv
]), qv = Kv(), [hP, kd] = pP(za), Zv = x.forwardRef(
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
    } = e, c = ld(a), [d, f] = ps({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: za
    });
    return /* @__PURE__ */ p.jsx(
      hP,
      {
        scope: n,
        baseId: En(),
        value: d,
        onValueChange: f,
        orientation: i,
        dir: c,
        activationMode: l,
        children: /* @__PURE__ */ p.jsx(
          Q.div,
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
Zv.displayName = za;
var Jv = "TabsList", e0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = kd(Jv, n), i = qv(n);
    return /* @__PURE__ */ p.jsx(
      lP,
      {
        asChild: !0,
        ...i,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ p.jsx(
          Q.div,
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
e0.displayName = Jv;
var t0 = "TabsTrigger", n0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, i = kd(t0, n), a = qv(n), l = s0(i.baseId, r), u = i0(i.baseId, r), c = r === i.value;
    return /* @__PURE__ */ p.jsx(
      uP,
      {
        asChild: !0,
        ...a,
        focusable: !o,
        active: c,
        children: /* @__PURE__ */ p.jsx(
          Q.button,
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
            onMouseDown: Y(e.onMouseDown, (d) => {
              !o && d.button === 0 && d.ctrlKey === !1 ? i.onValueChange(r) : d.preventDefault();
            }),
            onKeyDown: Y(e.onKeyDown, (d) => {
              [" ", "Enter"].includes(d.key) && i.onValueChange(r);
            }),
            onFocus: Y(e.onFocus, () => {
              const d = i.activationMode !== "manual";
              !c && !o && d && i.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
n0.displayName = t0;
var r0 = "TabsContent", o0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...i } = e, a = kd(r0, n), l = s0(a.baseId, r), u = i0(a.baseId, r), c = r === a.value, d = x.useRef(c);
    return x.useEffect(() => {
      const f = requestAnimationFrame(() => d.current = !1);
      return () => cancelAnimationFrame(f);
    }, []), /* @__PURE__ */ p.jsx(Ds, { present: o || c, children: ({ present: f }) => /* @__PURE__ */ p.jsx(
      Q.div,
      {
        "data-state": c ? "active" : "inactive",
        "data-orientation": a.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !f,
        id: u,
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
o0.displayName = r0;
function s0(e, t) {
  return `${e}-trigger-${t}`;
}
function i0(e, t) {
  return `${e}-content-${t}`;
}
var mP = Zv, gP = e0, yP = n0, vP = o0;
function xP({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    mP,
    {
      "data-slot": "tabs",
      className: me("flex flex-col gap-2", e),
      ...t
    }
  );
}
function Wp({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    gP,
    {
      "data-slot": "tabs-list",
      className: me(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        e
      ),
      ...t
    }
  );
}
function zn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    yP,
    {
      "data-slot": "tabs-trigger",
      className: me(
        "data-[state=active]:bg-background cursor-pointer dark:data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus:outline-none",
        e
      ),
      ...t
    }
  );
}
function ai({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    vP,
    {
      "data-slot": "tabs-content",
      className: me("flex-1 outline-none", e),
      ...t
    }
  );
}
const fn = /* @__PURE__ */ new Date(), $ = fn.getMonth(), U = fn.getFullYear(), wP = [
  {
    id: "1",
    title: "Indigenous Culture Workshop",
    description: "Learn about local Indigenous traditions and participate in hands-on cultural activities led by community elders.",
    startDate: new Date(U, $, 15, 14, 0),
    endDate: new Date(U, $, 15, 16, 0),
    variant: "warning"
  },
  {
    id: "2",
    title: "Career Fair 2025",
    description: "Meet with local employers and explore career opportunities in Northern BC and beyond.",
    startDate: new Date(U, $, 18, 10, 0),
    endDate: new Date(U, $, 18, 15, 0),
    variant: "success"
  },
  {
    id: "3",
    title: "Hiking Trip to Tabletop Mountain",
    description: "Join us for a challenging but rewarding day hike to one of the region's most spectacular viewpoints.",
    startDate: new Date(U, $, 22, 8, 0),
    endDate: new Date(U, $, 22, 18, 0),
    variant: "danger"
  },
  {
    id: "4",
    title: "Mental Health Awareness Week",
    description: "A week-long series of workshops, activities, and resources focused on mental health and wellbeing.",
    startDate: new Date(U, $, 26, 9, 0),
    endDate: new Date(U, $, 26, 17, 0),
    variant: "warning"
  },
  {
    id: "5",
    title: "Spring Formal Dance",
    description: "Celebrate the end of the semester with music, dancing, and refreshments in our beautiful Winter Garden.",
    startDate: new Date(U, $, Math.min(29, new Date(U, $ + 1, 0).getDate()), 19, 0),
    endDate: new Date(U, $, Math.min(29, new Date(U, $ + 1, 0).getDate()), 23, 0),
    variant: "warning"
  },
  {
    id: "6",
    title: "Research Presentation Day",
    description: "Graduate students present their research findings across various disciplines.",
    startDate: new Date(U, $, 12, 13, 0),
    endDate: new Date(U, $, 12, 17, 0),
    variant: "success"
  },
  {
    id: "7",
    title: "Photography Workshop",
    description: "Learn basic photography techniques and composition.",
    startDate: new Date(U, $, 5, 15, 30),
    endDate: new Date(U, $, 5, 17, 30),
    variant: "warning"
  },
  {
    id: "8",
    title: "Volunteer Fair",
    description: "Connect with local organizations looking for volunteers.",
    startDate: new Date(U, $, 8, 11, 0),
    endDate: new Date(U, $, 8, 14, 0),
    variant: "default"
  },
  {
    id: "9",
    title: "Business Networking Event",
    description: "Network with local business professionals and alumni.",
    startDate: new Date(U, $, 20, 18, 0),
    endDate: new Date(U, $, 20, 20, 0),
    variant: "success"
  },
  {
    id: "10",
    title: "Stress Relief Workshop",
    description: "Learn effective stress management techniques for exam season.",
    startDate: new Date(U, $, 14, 16, 0),
    endDate: new Date(U, $, 14, 17, 30),
    variant: "warning"
  },
  {
    id: "11",
    title: "International Food Festival",
    description: "Taste foods from around the world and celebrate cultural diversity.",
    startDate: new Date(U, $, 25, 12, 0),
    endDate: new Date(U, $, 25, 16, 0),
    variant: "warning"
  },
  {
    id: "12",
    title: "Campus Soccer Tournament",
    description: "Join teams and compete in our annual soccer tournament.",
    startDate: new Date(U, $, Math.min(30, new Date(U, $ + 1, 0).getDate()), 9, 0),
    endDate: new Date(U, $, Math.min(30, new Date(U, $ + 1, 0).getDate()), 17, 0),
    variant: "danger"
  },
  {
    id: "13",
    title: "Morning Yoga Session",
    description: "Start your day with a relaxing yoga session.",
    startDate: new Date(U, $, Math.max(1, fn.getDate() - 2), 7, 0),
    endDate: new Date(U, $, Math.max(1, fn.getDate() - 2), 8, 0),
    variant: "warning"
  },
  {
    id: "14",
    title: "Study Group - Biology 101",
    description: "Group study session for upcoming Biology 101 midterm exam.",
    startDate: new Date(U, $, Math.max(1, fn.getDate() - 1), 10, 0),
    endDate: new Date(U, $, Math.max(1, fn.getDate() - 1), 12, 0),
    variant: "success"
  },
  {
    id: "15",
    title: "Lunch & Learn: Sustainability",
    description: "Learn about campus sustainability initiatives while enjoying lunch.",
    startDate: new Date(U, $, fn.getDate(), 12, 0),
    endDate: new Date(U, $, fn.getDate(), 13, 0),
    variant: "success"
  },
  {
    id: "16",
    title: "Study Session - Math Tutoring",
    description: "Drop-in math tutoring session for students needing extra help.",
    startDate: new Date(U, $, Math.min(28, new Date(U, $ + 1, 0).getDate()), 14, 0),
    endDate: new Date(U, $, Math.min(28, new Date(U, $ + 1, 0).getDate()), 16, 0),
    variant: "default"
  },
  {
    id: "17",
    title: "Campus Walking Group",
    description: "Informal walking group meeting at the main entrance. All fitness levels welcome.",
    startDate: new Date(U, $, Math.min(27, new Date(U, $ + 1, 0).getDate()), 17, 0),
    endDate: new Date(U, $, Math.min(27, new Date(U, $ + 1, 0).getDate()), 18, 0),
    variant: "warning"
  },
  {
    id: "18",
    title: "Free Pizza Friday",
    description: "Free pizza available in the student lounge while supplies last.",
    startDate: new Date(U, $, Math.min(24, new Date(U, $ + 1, 0).getDate()), 11, 30),
    endDate: new Date(U, $, Math.min(24, new Date(U, $ + 1, 0).getDate()), 13, 0),
    variant: "success"
  }
], SP = {
  1: {
    category: "clubs",
    organization: "International Students Club",
    location: "Agora",
    cost: "Free",
    registrationRequired: !0,
    posterUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=600&fit=crop&auto=format"
  },
  2: {
    category: "unbc",
    organization: "UNBC Student Union",
    location: "Campus Gymnasium",
    cost: "Free",
    registrationRequired: !1,
    posterUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=600&fit=crop&auto=format",
    website: "https://www.unbc.ca/career-services"
  },
  3: {
    category: "clubs",
    organization: "UNBC Outdoor Club",
    location: "Meet at Student Union Building",
    cost: "$15",
    registrationRequired: !0
  },
  4: {
    category: "unbc",
    organization: "Student Health & Wellness",
    location: "Various Locations",
    cost: "Free",
    registrationRequired: !1
  },
  5: {
    category: "unbc",
    organization: "UNBC Student Union",
    location: "Winter Garden",
    cost: "$25",
    registrationRequired: !0,
    posterUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=600&fit=crop&auto=format",
    website: "https://www.unbc.ca/student-life/events"
  },
  6: {
    category: "unbc",
    organization: "Graduate Studies",
    location: "Teaching Laboratory Building",
    cost: "Free",
    registrationRequired: !1
  },
  7: {
    category: "clubs",
    organization: "Photography Club",
    location: "Art Building Studio 3",
    cost: "$10",
    registrationRequired: !0
  },
  8: {
    category: "organizations",
    organization: "Community Engagement Office",
    location: "Student Union Building",
    cost: "Free",
    registrationRequired: !1
  },
  9: {
    category: "organizations",
    organization: "Business Students Association",
    location: "Winter Garden",
    cost: "$5",
    registrationRequired: !0,
    website: "https://www.unbc.ca/business-networking"
  },
  10: {
    category: "unbc",
    organization: "Student Health & Wellness",
    location: "Campus Recreation Center",
    cost: "Free",
    registrationRequired: !1
  },
  11: {
    category: "clubs",
    organization: "International Students Club",
    location: "Agora",
    cost: "Free",
    registrationRequired: !1
  },
  12: {
    category: "sports",
    organization: "Athletics Department",
    location: "Campus Soccer Field",
    cost: "$20 per team",
    registrationRequired: !0
  },
  13: {
    category: "unbc",
    organization: "Student Health & Wellness",
    location: "Campus Recreation Center",
    cost: "Free",
    registrationRequired: !1
  },
  14: {
    category: "clubs",
    organization: "Biology Students Association",
    location: "Library Study Room 201",
    cost: "Free",
    registrationRequired: !1
  },
  15: {
    category: "unbc",
    organization: "Sustainability Office",
    location: "Agora",
    cost: "Free",
    registrationRequired: !1
  },
  16: {
    category: null,
    // Uncategorized event - should show in gray
    organization: "Academic Support Services",
    location: "Library Study Room 105",
    cost: "Free",
    registrationRequired: !1
  },
  17: {
    category: null,
    // Uncategorized event - should show in gray
    organization: "Community Health Group",
    location: "Campus Trails",
    cost: "Free",
    registrationRequired: !1
  },
  18: {
    category: "clubs",
    organization: "Student Social Committee",
    location: "Student Lounge",
    cost: "Free",
    registrationRequired: !1
  }
};
function bP() {
  const [e, t] = x.useState(!0);
  x.useEffect(() => {
    const o = setTimeout(() => {
      t(!1);
    }, 500);
    return () => clearTimeout(o);
  }, []);
  const n = wP;
  return {
    events: n,
    eventMetadata: SP,
    loading: e,
    error: null,
    total: n.length,
    setFilters: () => {
    }
  };
}
class kP {
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
      sports: "warning",
      // Blue/Orange for sports
      athletics: "warning",
      recreation: "warning"
    }[t[0].slug] || "default";
  }
  mapWordPressCategory(t) {
    return t.length === 0 ? null : {
      clubs: "clubs",
      club: "clubs",
      "student-clubs": "clubs",
      unbc: "unbc",
      university: "unbc",
      academic: "unbc",
      organizations: "organizations",
      organization: "organizations",
      community: "organizations",
      sports: "sports",
      athletics: "sports",
      recreation: "sports"
    }[t[0].slug] || null;
  }
}
const Al = new kP();
function a0(e = {}) {
  const [t, n] = x.useState([]), [r, o] = x.useState({}), [s, i] = x.useState(!0), [a, l] = x.useState(null), [u, c] = x.useState(0), [d, f] = x.useState(0), [h, w] = x.useState(e), y = x.useCallback(async () => {
    try {
      i(!0), l(null);
      const m = await Al.fetchEvents(h), v = [], b = {};
      m.events.forEach((k) => {
        const C = Al.transformWordPressEventToEvent(k), E = Al.transformWordPressEventToMetadata(k);
        v.push(C), b[C.id] = E;
      }), n(v), o(b), c(m.total), f(m.pages);
    } catch (m) {
      console.error("Error fetching events:", m), n([]), o({}), c(0), f(0), l(m instanceof Error ? m.message : "Failed to load events");
    } finally {
      i(!1);
    }
  }, [h]);
  x.useEffect(() => {
    y();
  }, [y]);
  const S = x.useCallback(() => {
    y();
  }, [y]), g = x.useCallback((m) => {
    w((v) => ({ ...v, ...m }));
  }, []);
  return {
    events: t,
    eventMetadata: r,
    loading: s,
    error: a,
    total: u,
    pages: d,
    refetch: S,
    setFilters: g
  };
}
const CP = {
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
function EP() {
  const [e, t] = x.useState([]), [n, r] = x.useState(!0), [o, s] = x.useState(null);
  return x.useEffect(() => {
    (async () => {
      try {
        r(!0);
        const a = await CP.getAll();
        t(a), s(null);
      } catch {
        s("Failed to load organizations");
      } finally {
        r(!1);
      }
    })();
  }, []), { organizations: e, loading: n, error: o };
}
var Ba = "Dialog", [l0, CR] = so(Ba), [PP, Pt] = l0(Ba), u0 = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !0
  } = e, a = x.useRef(null), l = x.useRef(null), [u, c] = ps({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Ba
  });
  return /* @__PURE__ */ p.jsx(
    PP,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: En(),
      titleId: En(),
      descriptionId: En(),
      open: u,
      onOpenChange: c,
      onOpenToggle: x.useCallback(() => c((d) => !d), [c]),
      modal: i,
      children: n
    }
  );
};
u0.displayName = Ba;
var c0 = "DialogTrigger", TP = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Pt(c0, n), s = ge(t, o.triggerRef);
    return /* @__PURE__ */ p.jsx(
      Q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Pd(o.open),
        ...r,
        ref: s,
        onClick: Y(e.onClick, o.onOpenToggle)
      }
    );
  }
);
TP.displayName = c0;
var Cd = "DialogPortal", [DP, d0] = l0(Cd, {
  forceMount: void 0
}), f0 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = Pt(Cd, t);
  return /* @__PURE__ */ p.jsx(DP, { scope: t, forceMount: n, children: x.Children.map(r, (i) => /* @__PURE__ */ p.jsx(Ds, { present: n || s.open, children: /* @__PURE__ */ p.jsx(wd, { asChild: !0, container: o, children: i }) })) });
};
f0.displayName = Cd;
var aa = "DialogOverlay", p0 = x.forwardRef(
  (e, t) => {
    const n = d0(aa, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Pt(aa, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ p.jsx(Ds, { present: r || s.open, children: /* @__PURE__ */ p.jsx(RP, { ...o, ref: t }) }) : null;
  }
);
p0.displayName = aa;
var NP = /* @__PURE__ */ cs("DialogOverlay.RemoveScroll"), RP = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Pt(aa, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p.jsx(Sd, { as: NP, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ p.jsx(
        Q.div,
        {
          "data-state": Pd(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), ar = "DialogContent", h0 = x.forwardRef(
  (e, t) => {
    const n = d0(ar, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Pt(ar, e.__scopeDialog);
    return /* @__PURE__ */ p.jsx(Ds, { present: r || s.open, children: s.modal ? /* @__PURE__ */ p.jsx(AP, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(MP, { ...o, ref: t }) });
  }
);
h0.displayName = ar;
var AP = x.forwardRef(
  (e, t) => {
    const n = Pt(ar, e.__scopeDialog), r = x.useRef(null), o = ge(t, n.contentRef, r);
    return x.useEffect(() => {
      const s = r.current;
      if (s) return ov(s);
    }, []), /* @__PURE__ */ p.jsx(
      m0,
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
), MP = x.forwardRef(
  (e, t) => {
    const n = Pt(ar, e.__scopeDialog), r = x.useRef(!1), o = x.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      m0,
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
), m0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = Pt(ar, n), l = x.useRef(null), u = ge(t, l);
    return My(), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        cd,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ p.jsx(
            ud,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": Pd(a.open),
              ...i,
              ref: u,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(jP, { titleId: a.titleId }),
        /* @__PURE__ */ p.jsx(_P, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), Ed = "DialogTitle", g0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Pt(Ed, n);
    return /* @__PURE__ */ p.jsx(Q.h2, { id: o.titleId, ...r, ref: t });
  }
);
g0.displayName = Ed;
var y0 = "DialogDescription", v0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Pt(y0, n);
    return /* @__PURE__ */ p.jsx(Q.p, { id: o.descriptionId, ...r, ref: t });
  }
);
v0.displayName = y0;
var x0 = "DialogClose", w0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Pt(x0, n);
    return /* @__PURE__ */ p.jsx(
      Q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Y(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
w0.displayName = x0;
function Pd(e) {
  return e ? "open" : "closed";
}
var S0 = "DialogTitleWarning", [ER, b0] = vb(S0, {
  contentName: ar,
  titleName: Ed,
  docsSlug: "dialog"
}), jP = ({ titleId: e }) => {
  const t = b0(S0), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return x.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, LP = "DialogDescriptionWarning", _P = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${b0(LP).contentName}}.`;
  return x.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, OP = u0, IP = f0, k0 = p0, C0 = h0, E0 = g0, P0 = v0, FP = w0;
const VP = OP, zP = IP, T0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  k0,
  {
    ref: n,
    className: me(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
T0.displayName = k0.displayName;
const D0 = x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.jsxs(zP, { children: [
  /* @__PURE__ */ p.jsx(T0, {}),
  /* @__PURE__ */ p.jsxs(
    C0,
    {
      ref: r,
      className: me(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ p.jsxs(FP, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-all duration-200 hover:opacity-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 p-1", children: [
          /* @__PURE__ */ p.jsx(XE, { className: "h-4 w-4" }),
          /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
D0.displayName = C0.displayName;
const N0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  "div",
  {
    className: me(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
N0.displayName = "DialogHeader";
const R0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  "div",
  {
    className: me(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
R0.displayName = "DialogFooter";
const A0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  E0,
  {
    ref: n,
    className: me(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
A0.displayName = E0.displayName;
const M0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  P0,
  {
    ref: n,
    className: me("text-sm text-muted-foreground", e),
    ...t
  }
));
M0.displayName = P0.displayName;
const Pn = x.forwardRef(
  ({ className: e, variant: t = "default", size: n = "default", ...r }, o) => /* @__PURE__ */ p.jsx(
    "button",
    {
      className: me(
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
Pn.displayName = "Button";
function Qr({
  className: e,
  variant: t = "default",
  size: n = "default",
  ...r
}) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      className: me(
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
function j0({ event: e, eventMetadata: t, open: n, onOpenChange: r }) {
  if (!e) return null;
  const o = t[e.id], s = (a) => {
    const l = e.startDate, u = e.endDate || new Date(l.getTime() + 60 * 60 * 1e3), c = (f) => f.toISOString().replace(/-|:|\.\d\d\d/g, ""), d = (f) => f.toISOString();
    switch (a) {
      case "google":
        const f = new URL("https://calendar.google.com/calendar/render");
        return f.searchParams.append("action", "TEMPLATE"), f.searchParams.append("text", e.title), f.searchParams.append("dates", `${c(l)}/${c(u)}`), f.searchParams.append("details", e.description || ""), o != null && o.location && f.searchParams.append("location", o.location), f.toString();
      case "outlook":
        const h = new URL("https://outlook.live.com/calendar/0/deeplink/compose");
        return h.searchParams.append("subject", e.title), h.searchParams.append("body", e.description || ""), h.searchParams.append("startdt", d(l)), h.searchParams.append("enddt", d(u)), o != null && o.location && h.searchParams.append("location", o.location), h.toString();
      case "apple":
        const w = [
          "BEGIN:VCALENDAR",
          "VERSION:2.0",
          "BEGIN:VEVENT",
          `DTSTART:${c(l)}`,
          `DTEND:${c(u)}`,
          `SUMMARY:${e.title}`,
          `DESCRIPTION:${e.description || ""}`,
          o != null && o.location ? `LOCATION:${o.location}` : "",
          "END:VEVENT",
          "END:VCALENDAR"
        ].filter((y) => y).join(`
`);
        return `data:text/calendar;charset=utf8,${encodeURIComponent(w)}`;
    }
  }, i = {
    clubs: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    unbc: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    organizations: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    sports: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
  };
  return /* @__PURE__ */ p.jsx(VP, { open: n, onOpenChange: r, children: /* @__PURE__ */ p.jsxs(D0, { className: "max-w-md bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700", children: [
    /* @__PURE__ */ p.jsxs(N0, { children: [
      /* @__PURE__ */ p.jsx(A0, { className: "text-xl text-gray-900 dark:text-gray-100", children: e.title }),
      /* @__PURE__ */ p.jsx(M0, { className: "mt-2 text-gray-600 dark:text-gray-400", children: e.description })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "space-y-4 my-4", children: /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
        /* @__PURE__ */ p.jsx(Xr, { className: "h-4 w-4 text-gray-500 dark:text-gray-400" }),
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
      o && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        o.location && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(Ps, { className: "h-4 w-4 text-gray-500 dark:text-gray-400" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: o.location })
        ] }),
        o.organization && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(Va, { className: "h-4 w-4 text-gray-500 dark:text-gray-400" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: o.organization })
        ] }),
        o.cost && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(GE, { className: "h-4 w-4 text-gray-500 dark:text-gray-400" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: o.cost })
        ] }),
        o.website && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(YE, { className: "h-4 w-4 text-gray-500 dark:text-gray-400" }),
          /* @__PURE__ */ p.jsx(
            "a",
            {
              href: o.website,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 hover:underline transition-colors",
              children: "Event Website"
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          o.category && /* @__PURE__ */ p.jsx(Qr, { className: i[o.category] || "bg-gray-100 text-gray-800", children: o.category.charAt(0).toUpperCase() + o.category.slice(1) }),
          o.registrationRequired && /* @__PURE__ */ p.jsx(Qr, { variant: "outline", className: "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300", children: "Registration Required" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsxs(R0, { className: "flex-col sm:flex-col gap-2", children: [
      /* @__PURE__ */ p.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400 mb-2", children: "Add to your calendar:" }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex gap-2 w-full", children: [
        /* @__PURE__ */ p.jsxs(
          Pn,
          {
            variant: "outline",
            className: "flex-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600",
            onClick: () => window.open(s("google"), "_blank"),
            children: [
              /* @__PURE__ */ p.jsx(Di, { className: "h-4 w-4 mr-2" }),
              "Google"
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Pn,
          {
            variant: "outline",
            className: "flex-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600",
            onClick: () => window.open(s("outlook"), "_blank"),
            children: [
              /* @__PURE__ */ p.jsx(Di, { className: "h-4 w-4 mr-2" }),
              "Outlook"
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Pn,
          {
            variant: "outline",
            className: "flex-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600",
            onClick: () => {
              const a = s("apple"), l = document.createElement("a");
              l.href = a, l.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, l.click();
            },
            children: [
              /* @__PURE__ */ p.jsx(Di, { className: "h-4 w-4 mr-2" }),
              "Apple"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
const Td = x.createContext({});
function Dd(e) {
  const t = x.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const $a = x.createContext(null), Nd = x.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class BP extends x.Component {
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
function $P({ children: e, isPresent: t }) {
  const n = x.useId(), r = x.useRef(null), o = x.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: s } = x.useContext(Nd);
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
  }, [t]), p.jsx(BP, { isPresent: t, childRef: r, sizeRef: o, children: x.cloneElement(e, { ref: r }) });
}
const UP = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: i }) => {
  const a = Dd(WP), l = x.useId(), u = x.useCallback((d) => {
    a.set(d, !0);
    for (const f of a.values())
      if (!f)
        return;
    r && r();
  }, [a, r]), c = x.useMemo(
    () => ({
      id: l,
      initial: t,
      isPresent: n,
      custom: o,
      onExitComplete: u,
      register: (d) => (a.set(d, !1), () => a.delete(d))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    s ? [Math.random(), u] : [n, u]
  );
  return x.useMemo(() => {
    a.forEach((d, f) => a.set(f, !1));
  }, [n]), x.useEffect(() => {
    !n && !a.size && r && r();
  }, [n]), i === "popLayout" && (e = p.jsx($P, { isPresent: n, children: e })), p.jsx($a.Provider, { value: c, children: e });
};
function WP() {
  return /* @__PURE__ */ new Map();
}
function L0(e = !0) {
  const t = x.useContext($a);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t, s = x.useId();
  x.useEffect(() => {
    e && o(s);
  }, [e]);
  const i = x.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, i] : [!0];
}
const li = (e) => e.key || "";
function Hp(e) {
  const t = [];
  return x.Children.forEach(e, (n) => {
    x.isValidElement(n) && t.push(n);
  }), t;
}
const Rd = typeof window < "u", _0 = Rd ? x.useLayoutEffect : x.useEffect, Kp = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: o = !0, mode: s = "sync", propagate: i = !1 }) => {
  const [a, l] = L0(i), u = x.useMemo(() => Hp(e), [e]), c = i && !a ? [] : u.map(li), d = x.useRef(!0), f = x.useRef(u), h = Dd(() => /* @__PURE__ */ new Map()), [w, y] = x.useState(u), [S, g] = x.useState(u);
  _0(() => {
    d.current = !1, f.current = u;
    for (let b = 0; b < S.length; b++) {
      const k = li(S[b]);
      c.includes(k) ? h.delete(k) : h.get(k) !== !0 && h.set(k, !1);
    }
  }, [S, c.length, c.join("-")]);
  const m = [];
  if (u !== w) {
    let b = [...u];
    for (let k = 0; k < S.length; k++) {
      const C = S[k], E = li(C);
      c.includes(E) || (b.splice(k, 0, C), m.push(C));
    }
    s === "wait" && m.length && (b = m), g(Hp(b)), y(u);
    return;
  }
  const { forceRender: v } = x.useContext(Td);
  return p.jsx(p.Fragment, { children: S.map((b) => {
    const k = li(b), C = i && !a ? !1 : u === S || c.includes(k), E = () => {
      if (h.has(k))
        h.set(k, !0);
      else
        return;
      let P = !0;
      h.forEach((R) => {
        R || (P = !1);
      }), P && (v == null || v(), g(f.current), i && (l == null || l()), r && r());
    };
    return p.jsx(UP, { isPresent: C, initial: !d.current || n ? void 0 : !1, custom: C ? void 0 : t, presenceAffectsLayout: o, mode: s, onExitComplete: C ? void 0 : E, children: b }, k);
  }) });
}, nt = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let O0 = nt;
// @__NO_SIDE_EFFECTS__
function Ad(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const qr = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Yt = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, Xt = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, HP = {
  useManualTiming: !1
};
function KP(e) {
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
    schedule: (u, c = !1, d = !1) => {
      const h = d && r ? t : n;
      return c && s.add(u), h.has(u) || h.add(u), u;
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
const ui = [
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
], GP = 40;
function I0(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = () => n = !0, i = ui.reduce((g, m) => (g[m] = KP(s), g), {}), { read: a, resolveKeyframes: l, update: u, preRender: c, render: d, postRender: f } = i, h = () => {
    const g = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(g - o.timestamp, GP), 1), o.timestamp = g, o.isProcessing = !0, a.process(o), l.process(o), u.process(o), c.process(o), d.process(o), f.process(o), o.isProcessing = !1, n && t && (r = !1, e(h));
  }, w = () => {
    n = !0, r = !0, o.isProcessing || e(h);
  };
  return { schedule: ui.reduce((g, m) => {
    const v = i[m];
    return g[m] = (b, k = !1, C = !1) => (n || w(), v.schedule(b, k, C)), g;
  }, {}), cancel: (g) => {
    for (let m = 0; m < ui.length; m++)
      i[ui[m]].cancel(g);
  }, state: o, steps: i };
}
const { schedule: ie, cancel: Mn, state: Te, steps: Ml } = I0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : nt, !0), F0 = x.createContext({ strict: !1 }), Gp = {
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
}, Zr = {};
for (const e in Gp)
  Zr[e] = {
    isEnabled: (t) => Gp[e].some((n) => !!t[n])
  };
function YP(e) {
  for (const t in e)
    Zr[t] = {
      ...Zr[t],
      ...e[t]
    };
}
const XP = /* @__PURE__ */ new Set([
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
function la(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || XP.has(e);
}
let V0 = (e) => !la(e);
function QP(e) {
  e && (V0 = (t) => t.startsWith("on") ? !la(t) : e(t));
}
try {
  QP(require("@emotion/is-prop-valid").default);
} catch {
}
function qP(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (V0(o) || n === !0 && la(o) || !t && !la(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function ZP(e) {
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
const Ua = x.createContext({});
function ms(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Wa(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Md = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], jd = ["initial", ...Md];
function Ha(e) {
  return Wa(e.animate) || jd.some((t) => ms(e[t]));
}
function z0(e) {
  return !!(Ha(e) || e.variants);
}
function JP(e, t) {
  if (Ha(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ms(n) ? n : void 0,
      animate: ms(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function eT(e) {
  const { initial: t, animate: n } = JP(e, x.useContext(Ua));
  return x.useMemo(() => ({ initial: t, animate: n }), [Yp(t), Yp(n)]);
}
function Yp(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const tT = Symbol.for("motionComponentSymbol");
function Tr(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function nT(e, t, n) {
  return x.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Tr(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const Ld = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), rT = "framerAppearId", B0 = "data-" + Ld(rT), { schedule: _d } = I0(queueMicrotask, !1), $0 = x.createContext({});
function oT(e, t, n, r, o) {
  var s, i;
  const { visualElement: a } = x.useContext(Ua), l = x.useContext(F0), u = x.useContext($a), c = x.useContext(Nd).reducedMotion, d = x.useRef(null);
  r = r || l.renderer, !d.current && r && (d.current = r(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: u,
    blockInitialAnimation: u ? u.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const f = d.current, h = x.useContext($0);
  f && !f.projection && o && (f.type === "html" || f.type === "svg") && sT(d.current, n, o, h);
  const w = x.useRef(!1);
  x.useInsertionEffect(() => {
    f && w.current && f.update(n, u);
  });
  const y = n[B0], S = x.useRef(!!y && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, y)) && ((i = window.MotionHasOptimisedAnimation) === null || i === void 0 ? void 0 : i.call(window, y)));
  return _0(() => {
    f && (w.current = !0, window.MotionIsMounted = !0, f.updateFeatures(), _d.render(f.render), S.current && f.animationState && f.animationState.animateChanges());
  }), x.useEffect(() => {
    f && (!S.current && f.animationState && f.animationState.animateChanges(), S.current && (queueMicrotask(() => {
      var g;
      (g = window.MotionHandoffMarkAsComplete) === null || g === void 0 || g.call(window, y);
    }), S.current = !1));
  }), f;
}
function sT(e, t, n, r) {
  const { layoutId: o, layout: s, drag: i, dragConstraints: a, layoutScroll: l, layoutRoot: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : U0(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: s,
    alwaysMeasureLayout: !!i || a && Tr(a),
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
function U0(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : U0(e.parent);
}
function iT({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  var s, i;
  e && YP(e);
  function a(u, c) {
    let d;
    const f = {
      ...x.useContext(Nd),
      ...u,
      layoutId: aT(u)
    }, { isStatic: h } = f, w = eT(u), y = r(u, h);
    if (!h && Rd) {
      lT();
      const S = uT(f);
      d = S.MeasureLayout, w.visualElement = oT(o, y, f, t, S.ProjectionNode);
    }
    return p.jsxs(Ua.Provider, { value: w, children: [d && w.visualElement ? p.jsx(d, { visualElement: w.visualElement, ...f }) : null, n(o, u, nT(y, w.visualElement, c), y, h, w.visualElement)] });
  }
  a.displayName = `motion.${typeof o == "string" ? o : `create(${(i = (s = o.displayName) !== null && s !== void 0 ? s : o.name) !== null && i !== void 0 ? i : ""})`}`;
  const l = x.forwardRef(a);
  return l[tT] = o, l;
}
function aT({ layoutId: e }) {
  const t = x.useContext(Td).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function lT(e, t) {
  x.useContext(F0).strict;
}
function uT(e) {
  const { drag: t, layout: n } = Zr;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const cT = [
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
function Od(e) {
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
      !!(cT.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function Xp(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Id(e, t, n, r) {
  if (typeof t == "function") {
    const [o, s] = Xp(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, s] = Xp(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  return t;
}
const Qu = (e) => Array.isArray(e), dT = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), fT = (e) => Qu(e) ? e[e.length - 1] || 0 : e, Oe = (e) => !!(e && e.getVelocity);
function Ni(e) {
  const t = Oe(e) ? e.get() : e;
  return dT(t) ? t.toValue() : t;
}
function pT({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, o, s) {
  const i = {
    latestValues: hT(r, o, s, e),
    renderState: t()
  };
  return n && (i.onMount = (a) => n({ props: r, current: a, ...i }), i.onUpdate = (a) => n(a)), i;
}
const W0 = (e) => (t, n) => {
  const r = x.useContext(Ua), o = x.useContext($a), s = () => pT(e, t, r, o);
  return n ? s() : Dd(s);
};
function hT(e, t, n, r) {
  const o = {}, s = r(e, {});
  for (const f in s)
    o[f] = Ni(s[f]);
  let { initial: i, animate: a } = e;
  const l = Ha(e), u = z0(e);
  t && u && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || i === !1;
  const d = c ? a : i;
  if (d && typeof d != "boolean" && !Wa(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let h = 0; h < f.length; h++) {
      const w = Id(e, f[h]);
      if (w) {
        const { transitionEnd: y, transition: S, ...g } = w;
        for (const m in g) {
          let v = g[m];
          if (Array.isArray(v)) {
            const b = c ? v.length - 1 : 0;
            v = v[b];
          }
          v !== null && (o[m] = v);
        }
        for (const m in y)
          o[m] = y[m];
      }
    }
  }
  return o;
}
const uo = [
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
], cr = new Set(uo), H0 = (e) => (t) => typeof t == "string" && t.startsWith(e), K0 = /* @__PURE__ */ H0("--"), mT = /* @__PURE__ */ H0("var(--"), Fd = (e) => mT(e) ? gT.test(e.split("/*")[0].trim()) : !1, gT = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, G0 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, nn = (e, t, n) => n > t ? t : n < e ? e : n, co = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, gs = {
  ...co,
  transform: (e) => nn(0, 1, e)
}, ci = {
  ...co,
  default: 1
}, Ns = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), un = /* @__PURE__ */ Ns("deg"), Ft = /* @__PURE__ */ Ns("%"), z = /* @__PURE__ */ Ns("px"), yT = /* @__PURE__ */ Ns("vh"), vT = /* @__PURE__ */ Ns("vw"), Qp = {
  ...Ft,
  parse: (e) => Ft.parse(e) / 100,
  transform: (e) => Ft.transform(e * 100)
}, xT = {
  // Border props
  borderWidth: z,
  borderTopWidth: z,
  borderRightWidth: z,
  borderBottomWidth: z,
  borderLeftWidth: z,
  borderRadius: z,
  radius: z,
  borderTopLeftRadius: z,
  borderTopRightRadius: z,
  borderBottomRightRadius: z,
  borderBottomLeftRadius: z,
  // Positioning props
  width: z,
  maxWidth: z,
  height: z,
  maxHeight: z,
  top: z,
  right: z,
  bottom: z,
  left: z,
  // Spacing props
  padding: z,
  paddingTop: z,
  paddingRight: z,
  paddingBottom: z,
  paddingLeft: z,
  margin: z,
  marginTop: z,
  marginRight: z,
  marginBottom: z,
  marginLeft: z,
  // Misc
  backgroundPositionX: z,
  backgroundPositionY: z
}, wT = {
  rotate: un,
  rotateX: un,
  rotateY: un,
  rotateZ: un,
  scale: ci,
  scaleX: ci,
  scaleY: ci,
  scaleZ: ci,
  skew: un,
  skewX: un,
  skewY: un,
  distance: z,
  translateX: z,
  translateY: z,
  translateZ: z,
  x: z,
  y: z,
  z,
  perspective: z,
  transformPerspective: z,
  opacity: gs,
  originX: Qp,
  originY: Qp,
  originZ: z
}, qp = {
  ...co,
  transform: Math.round
}, Vd = {
  ...xT,
  ...wT,
  zIndex: qp,
  size: z,
  // SVG
  fillOpacity: gs,
  strokeOpacity: gs,
  numOctaves: qp
}, ST = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, bT = uo.length;
function kT(e, t, n) {
  let r = "", o = !0;
  for (let s = 0; s < bT; s++) {
    const i = uo[s], a = e[i];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (i.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = G0(a, Vd[i]);
      if (!l) {
        o = !1;
        const c = ST[i] || i;
        r += `${c}(${u}) `;
      }
      n && (t[i] = u);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function zd(e, t, n) {
  const { style: r, vars: o, transformOrigin: s } = e;
  let i = !1, a = !1;
  for (const l in t) {
    const u = t[l];
    if (cr.has(l)) {
      i = !0;
      continue;
    } else if (K0(l)) {
      o[l] = u;
      continue;
    } else {
      const c = G0(u, Vd[l]);
      l.startsWith("origin") ? (a = !0, s[l] = c) : r[l] = c;
    }
  }
  if (t.transform || (i || n ? r.transform = kT(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const CT = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, ET = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function PT(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const s = o ? CT : ET;
  e[s.offset] = z.transform(-r);
  const i = z.transform(t), a = z.transform(n);
  e[s.array] = `${i} ${a}`;
}
function Zp(e, t, n) {
  return typeof e == "string" ? e : z.transform(t + n * e);
}
function TT(e, t, n) {
  const r = Zp(t, e.x, e.width), o = Zp(n, e.y, e.height);
  return `${r} ${o}`;
}
function Bd(e, {
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
}, c, d) {
  if (zd(e, u, d), c) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: f, style: h, dimensions: w } = e;
  f.transform && (w && (h.transform = f.transform), delete f.transform), w && (o !== void 0 || s !== void 0 || h.transform) && (h.transformOrigin = TT(w, o !== void 0 ? o : 0.5, s !== void 0 ? s : 0.5)), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), r !== void 0 && (f.scale = r), i !== void 0 && PT(f, i, a, l, !1);
}
const $d = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), Y0 = () => ({
  ...$d(),
  attrs: {}
}), Ud = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function X0(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
const Q0 = /* @__PURE__ */ new Set([
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
function q0(e, t, n, r) {
  X0(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(Q0.has(o) ? o : Ld(o), t.attrs[o]);
}
const ua = {};
function DT(e) {
  Object.assign(ua, e);
}
function Z0(e, { layout: t, layoutId: n }) {
  return cr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!ua[e] || e === "opacity");
}
function Wd(e, t, n) {
  var r;
  const { style: o } = e, s = {};
  for (const i in o)
    (Oe(o[i]) || t.style && Oe(t.style[i]) || Z0(i, e) || ((r = n == null ? void 0 : n.getValue(i)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[i] = o[i]);
  return s;
}
function J0(e, t, n) {
  const r = Wd(e, t, n);
  for (const o in e)
    if (Oe(e[o]) || Oe(t[o])) {
      const s = uo.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[s] = e[o];
    }
  return r;
}
function NT(e, t) {
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
const Jp = ["x", "y", "width", "height", "cx", "cy", "r"], RT = {
  useVisualState: W0({
    scrapeMotionValuesFromProps: J0,
    createRenderState: Y0,
    onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: o }) => {
      if (!n)
        return;
      let s = !!e.drag;
      if (!s) {
        for (const a in o)
          if (cr.has(a)) {
            s = !0;
            break;
          }
      }
      if (!s)
        return;
      let i = !t;
      if (t)
        for (let a = 0; a < Jp.length; a++) {
          const l = Jp[a];
          e[l] !== t[l] && (i = !0);
        }
      i && ie.read(() => {
        NT(n, r), ie.render(() => {
          Bd(r, o, Ud(n.tagName), e.transformTemplate), q0(n, r);
        });
      });
    }
  })
}, AT = {
  useVisualState: W0({
    scrapeMotionValuesFromProps: Wd,
    createRenderState: $d
  })
};
function ex(e, t, n) {
  for (const r in t)
    !Oe(t[r]) && !Z0(r, n) && (e[r] = t[r]);
}
function MT({ transformTemplate: e }, t) {
  return x.useMemo(() => {
    const n = $d();
    return zd(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function jT(e, t) {
  const n = e.style || {}, r = {};
  return ex(r, n, e), Object.assign(r, MT(e, t)), r;
}
function LT(e, t) {
  const n = {}, r = jT(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function _T(e, t, n, r) {
  const o = x.useMemo(() => {
    const s = Y0();
    return Bd(s, t, Ud(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    ex(s, e.style, e), o.style = { ...s, ...o.style };
  }
  return o;
}
function OT(e = !1) {
  return (n, r, o, { latestValues: s }, i) => {
    const l = (Od(n) ? _T : LT)(r, s, i, n), u = qP(r, typeof n == "string", e), c = n !== x.Fragment ? { ...u, ...l, ref: o } : {}, { children: d } = r, f = x.useMemo(() => Oe(d) ? d.get() : d, [d]);
    return x.createElement(n, {
      ...c,
      children: f
    });
  };
}
function IT(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const i = {
      ...Od(r) ? RT : AT,
      preloadedFeatures: e,
      useRender: OT(o),
      createVisualElement: t,
      Component: r
    };
    return iT(i);
  };
}
function tx(e, t) {
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
function Ka(e, t, n) {
  const r = e.getProps();
  return Id(r, t, n !== void 0 ? n : r.custom, e);
}
const FT = /* @__PURE__ */ Ad(() => window.ScrollTimeline !== void 0);
class VT {
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
      if (FT() && o.attachTimeline)
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
class zT extends VT {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function Hd(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const qu = 2e4;
function nx(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < qu; )
    t += n, r = e.next(t);
  return t >= qu ? 1 / 0 : t;
}
function Kd(e) {
  return typeof e == "function";
}
function eh(e, t) {
  e.timeline = t, e.onfinish = null;
}
const Gd = (e) => Array.isArray(e) && typeof e[0] == "number", BT = {
  linearEasing: void 0
};
function $T(e, t) {
  const n = /* @__PURE__ */ Ad(e);
  return () => {
    var r;
    return (r = BT[t]) !== null && r !== void 0 ? r : n();
  };
}
const ca = /* @__PURE__ */ $T(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), rx = (e, t, n = 10) => {
  let r = "";
  const o = Math.max(Math.round(t / n), 2);
  for (let s = 0; s < o; s++)
    r += e(/* @__PURE__ */ qr(0, o - 1, s)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function ox(e) {
  return !!(typeof e == "function" && ca() || !e || typeof e == "string" && (e in Zu || ca()) || Gd(e) || Array.isArray(e) && e.every(ox));
}
const Ao = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Zu = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Ao([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Ao([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Ao([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Ao([0.33, 1.53, 0.69, 0.99])
};
function sx(e, t) {
  if (e)
    return typeof e == "function" && ca() ? rx(e, t) : Gd(e) ? Ao(e) : Array.isArray(e) ? e.map((n) => sx(n, t) || Zu.easeOut) : Zu[e];
}
const yt = {
  x: !1,
  y: !1
};
function ix() {
  return yt.x || yt.y;
}
function UT(e, t, n) {
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
function ax(e, t) {
  const n = UT(e), r = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, o, () => r.abort()];
}
function th(e) {
  return (t) => {
    t.pointerType === "touch" || ix() || e(t);
  };
}
function WT(e, t, n = {}) {
  const [r, o, s] = ax(e, n), i = th((a) => {
    const { target: l } = a, u = t(a);
    if (typeof u != "function" || !l)
      return;
    const c = th((d) => {
      u(d), l.removeEventListener("pointerleave", c);
    });
    l.addEventListener("pointerleave", c, o);
  });
  return r.forEach((a) => {
    a.addEventListener("pointerenter", i, o);
  }), s;
}
const lx = (e, t) => t ? e === t ? !0 : lx(e, t.parentElement) : !1, Yd = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, HT = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function KT(e) {
  return HT.has(e.tagName) || e.tabIndex !== -1;
}
const Mo = /* @__PURE__ */ new WeakSet();
function nh(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function jl(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const GT = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = nh(() => {
    if (Mo.has(n))
      return;
    jl(n, "down");
    const o = nh(() => {
      jl(n, "up");
    }), s = () => jl(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function rh(e) {
  return Yd(e) && !ix();
}
function YT(e, t, n = {}) {
  const [r, o, s] = ax(e, n), i = (a) => {
    const l = a.currentTarget;
    if (!rh(a) || Mo.has(l))
      return;
    Mo.add(l);
    const u = t(a), c = (h, w) => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", f), !(!rh(h) || !Mo.has(l)) && (Mo.delete(l), typeof u == "function" && u(h, { success: w }));
    }, d = (h) => {
      c(h, n.useGlobalTarget || lx(l, h.target));
    }, f = (h) => {
      c(h, !1);
    };
    window.addEventListener("pointerup", d, o), window.addEventListener("pointercancel", f, o);
  };
  return r.forEach((a) => {
    !KT(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", i, o), a.addEventListener("focus", (u) => GT(u, o), o);
  }), s;
}
function XT(e) {
  return e === "x" || e === "y" ? yt[e] ? null : (yt[e] = !0, () => {
    yt[e] = !1;
  }) : yt.x || yt.y ? null : (yt.x = yt.y = !0, () => {
    yt.x = yt.y = !1;
  });
}
const ux = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...uo
]);
let Ri;
function QT() {
  Ri = void 0;
}
const Vt = {
  now: () => (Ri === void 0 && Vt.set(Te.isProcessing || HP.useManualTiming ? Te.timestamp : performance.now()), Ri),
  set: (e) => {
    Ri = e, queueMicrotask(QT);
  }
};
function Xd(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Qd(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class qd {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Xd(this.subscriptions, t), () => Qd(this.subscriptions, t);
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
function cx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const oh = 30, qT = (e) => !isNaN(parseFloat(e));
class ZT {
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
      const s = Vt.now();
      this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Vt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = qT(this.current));
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
    this.events[t] || (this.events[t] = new qd());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), ie.read(() => {
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
    const t = Vt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > oh)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, oh);
    return cx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function ys(e, t) {
  return new ZT(e, t);
}
function JT(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ys(n));
}
function eD(e, t) {
  const n = Ka(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const i in s) {
    const a = fT(s[i]);
    JT(e, i, a);
  }
}
function tD(e) {
  return !!(Oe(e) && e.add);
}
function Ju(e, t) {
  const n = e.getValue("willChange");
  if (tD(n))
    return n.add(t);
}
function dx(e) {
  return e.props[B0];
}
const fx = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, nD = 1e-7, rD = 12;
function oD(e, t, n, r, o) {
  let s, i, a = 0;
  do
    i = t + (n - t) / 2, s = fx(i, r, o) - e, s > 0 ? n = i : t = i;
  while (Math.abs(s) > nD && ++a < rD);
  return i;
}
function Rs(e, t, n, r) {
  if (e === t && n === r)
    return nt;
  const o = (s) => oD(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : fx(o(s), t, r);
}
const px = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, hx = (e) => (t) => 1 - e(1 - t), mx = /* @__PURE__ */ Rs(0.33, 1.53, 0.69, 0.99), Zd = /* @__PURE__ */ hx(mx), gx = /* @__PURE__ */ px(Zd), yx = (e) => (e *= 2) < 1 ? 0.5 * Zd(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Jd = (e) => 1 - Math.sin(Math.acos(e)), vx = hx(Jd), xx = px(Jd), wx = (e) => /^0[^.\s]+$/u.test(e);
function sD(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || wx(e) : !0;
}
const Uo = (e) => Math.round(e * 1e5) / 1e5, ef = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function iD(e) {
  return e == null;
}
const aD = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, tf = (e, t) => (n) => !!(typeof n == "string" && aD.test(n) && n.startsWith(e) || t && !iD(n) && Object.prototype.hasOwnProperty.call(n, t)), Sx = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, s, i, a] = r.match(ef);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, lD = (e) => nn(0, 255, e), Ll = {
  ...co,
  transform: (e) => Math.round(lD(e))
}, Xn = {
  test: /* @__PURE__ */ tf("rgb", "red"),
  parse: /* @__PURE__ */ Sx("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Ll.transform(e) + ", " + Ll.transform(t) + ", " + Ll.transform(n) + ", " + Uo(gs.transform(r)) + ")"
};
function uD(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const ec = {
  test: /* @__PURE__ */ tf("#"),
  parse: uD,
  transform: Xn.transform
}, Dr = {
  test: /* @__PURE__ */ tf("hsl", "hue"),
  parse: /* @__PURE__ */ Sx("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Ft.transform(Uo(t)) + ", " + Ft.transform(Uo(n)) + ", " + Uo(gs.transform(r)) + ")"
}, Le = {
  test: (e) => Xn.test(e) || ec.test(e) || Dr.test(e),
  parse: (e) => Xn.test(e) ? Xn.parse(e) : Dr.test(e) ? Dr.parse(e) : ec.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Xn.transform(e) : Dr.transform(e)
}, cD = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function dD(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(ef)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(cD)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const bx = "number", kx = "color", fD = "var", pD = "var(", sh = "${}", hD = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function vs(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let s = 0;
  const a = t.replace(hD, (l) => (Le.test(l) ? (r.color.push(s), o.push(kx), n.push(Le.parse(l))) : l.startsWith(pD) ? (r.var.push(s), o.push(fD), n.push(l)) : (r.number.push(s), o.push(bx), n.push(parseFloat(l))), ++s, sh)).split(sh);
  return { values: n, split: a, indexes: r, types: o };
}
function Cx(e) {
  return vs(e).values;
}
function Ex(e) {
  const { split: t, types: n } = vs(e), r = t.length;
  return (o) => {
    let s = "";
    for (let i = 0; i < r; i++)
      if (s += t[i], o[i] !== void 0) {
        const a = n[i];
        a === bx ? s += Uo(o[i]) : a === kx ? s += Le.transform(o[i]) : s += o[i];
      }
    return s;
  };
}
const mD = (e) => typeof e == "number" ? 0 : e;
function gD(e) {
  const t = Cx(e);
  return Ex(e)(t.map(mD));
}
const jn = {
  test: dD,
  parse: Cx,
  createTransformer: Ex,
  getAnimatableNone: gD
}, yD = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function vD(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(ef) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let s = yD.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + o + ")";
}
const xD = /\b([a-z-]*)\(.*?\)/gu, tc = {
  ...jn,
  getAnimatableNone: (e) => {
    const t = e.match(xD);
    return t ? t.map(vD).join(" ") : e;
  }
}, wD = {
  ...Vd,
  // Color props
  color: Le,
  backgroundColor: Le,
  outlineColor: Le,
  fill: Le,
  stroke: Le,
  // Border props
  borderColor: Le,
  borderTopColor: Le,
  borderRightColor: Le,
  borderBottomColor: Le,
  borderLeftColor: Le,
  filter: tc,
  WebkitFilter: tc
}, nf = (e) => wD[e];
function Px(e, t) {
  let n = nf(e);
  return n !== tc && (n = jn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const SD = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function bD(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const s = e[r];
    typeof s == "string" && !SD.has(s) && vs(s).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const s of t)
      e[s] = Px(n, o);
}
const ih = (e) => e === co || e === z, ah = (e, t) => parseFloat(e.split(", ")[t]), lh = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/u);
  if (o)
    return ah(o[1], t);
  {
    const s = r.match(/^matrix\((.+)\)$/u);
    return s ? ah(s[1], e) : 0;
  }
}, kD = /* @__PURE__ */ new Set(["x", "y", "z"]), CD = uo.filter((e) => !kD.has(e));
function ED(e) {
  const t = [];
  return CD.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Jr = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: lh(4, 13),
  y: lh(5, 14)
};
Jr.translateX = Jr.x;
Jr.translateY = Jr.y;
const Zn = /* @__PURE__ */ new Set();
let nc = !1, rc = !1;
function Tx() {
  if (rc) {
    const e = Array.from(Zn).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = ED(r);
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
  rc = !1, nc = !1, Zn.forEach((e) => e.complete()), Zn.clear();
}
function Dx() {
  Zn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (rc = !0);
  });
}
function PD() {
  Dx(), Tx();
}
class rf {
  constructor(t, n, r, o, s, i = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = s, this.isAsync = i;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Zn.add(this), nc || (nc = !0, ie.read(Dx), ie.resolveKeyframes(Tx))) : (this.readKeyframes(), this.complete());
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Zn.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, Zn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Nx = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), TD = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function DD(e) {
  const t = TD.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function Rx(e, t, n = 1) {
  const [r, o] = DD(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const i = s.trim();
    return Nx(i) ? parseFloat(i) : i;
  }
  return Fd(o) ? Rx(o, t, n + 1) : o;
}
const Ax = (e) => (t) => t.test(e), ND = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Mx = [co, z, Ft, un, vT, yT, ND], uh = (e) => Mx.find(Ax(e));
class jx extends rf {
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
      if (typeof u == "string" && (u = u.trim(), Fd(u))) {
        const c = Rx(u, n.current);
        c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !ux.has(r) || t.length !== 2)
      return;
    const [o, s] = t, i = uh(o), a = uh(s);
    if (i !== a)
      if (ih(i) && ih(a))
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
      sD(t[o]) && r.push(o);
    r.length && bD(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Jr[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
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
    o[i] = Jr[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, u]) => {
      n.getValue(l).set(u);
    }), this.resolveNoneKeyframes();
  }
}
const ch = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(jn.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function RD(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function AD(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const s = e[e.length - 1], i = ch(o, t), a = ch(s, t);
  return !i || !a ? !1 : RD(e) || (n === "spring" || Kd(n)) && r;
}
const MD = (e) => e !== null;
function Ga(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(MD), s = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !s || r === void 0 ? o[s] : r;
}
const jD = 40;
class Lx {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: i = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Vt.now(), this.options = {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > jD ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && PD(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = Vt.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: o, velocity: s, delay: i, onComplete: a, onUpdate: l, isGenerator: u } = this.options;
    if (!u && !AD(t, r, o, s))
      if (i)
        this.options.duration = 0;
      else {
        l && l(Ga(t, this.options, n)), a && a(), this.resolveFinishedPromise();
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
const ce = (e, t, n) => e + (t - e) * n;
function _l(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function LD({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, s = 0, i = 0;
  if (!t)
    o = s = i = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    o = _l(l, a, e + 1 / 3), s = _l(l, a, e), i = _l(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(s * 255),
    blue: Math.round(i * 255),
    alpha: r
  };
}
function da(e, t) {
  return (n) => n > 0 ? t : e;
}
const Ol = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, _D = [ec, Xn, Dr], OD = (e) => _D.find((t) => t.test(e));
function dh(e) {
  const t = OD(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === Dr && (n = LD(n)), n;
}
const fh = (e, t) => {
  const n = dh(e), r = dh(t);
  if (!n || !r)
    return da(e, t);
  const o = { ...n };
  return (s) => (o.red = Ol(n.red, r.red, s), o.green = Ol(n.green, r.green, s), o.blue = Ol(n.blue, r.blue, s), o.alpha = ce(n.alpha, r.alpha, s), Xn.transform(o));
}, ID = (e, t) => (n) => t(e(n)), As = (...e) => e.reduce(ID), oc = /* @__PURE__ */ new Set(["none", "hidden"]);
function FD(e, t) {
  return oc.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function VD(e, t) {
  return (n) => ce(e, t, n);
}
function of(e) {
  return typeof e == "number" ? VD : typeof e == "string" ? Fd(e) ? da : Le.test(e) ? fh : $D : Array.isArray(e) ? _x : typeof e == "object" ? Le.test(e) ? fh : zD : da;
}
function _x(e, t) {
  const n = [...e], r = n.length, o = e.map((s, i) => of(s)(s, t[i]));
  return (s) => {
    for (let i = 0; i < r; i++)
      n[i] = o[i](s);
    return n;
  };
}
function zD(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = of(e[o])(e[o], t[o]));
  return (o) => {
    for (const s in r)
      n[s] = r[s](o);
    return n;
  };
}
function BD(e, t) {
  var n;
  const r = [], o = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const i = t.types[s], a = e.indexes[i][o[i]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    r[s] = l, o[i]++;
  }
  return r;
}
const $D = (e, t) => {
  const n = jn.createTransformer(t), r = vs(e), o = vs(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? oc.has(e) && !o.values.length || oc.has(t) && !r.values.length ? FD(e, t) : As(_x(BD(r, o), o.values), n) : da(e, t);
};
function Ox(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? ce(e, t, n) : of(e)(e, t);
}
const UD = 5;
function Ix(e, t, n) {
  const r = Math.max(t - UD, 0);
  return cx(n - e(r), t - r);
}
const pe = {
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
}, Il = 1e-3;
function WD({ duration: e = pe.duration, bounce: t = pe.bounce, velocity: n = pe.velocity, mass: r = pe.mass }) {
  let o, s, i = 1 - t;
  i = nn(pe.minDamping, pe.maxDamping, i), e = nn(pe.minDuration, pe.maxDuration, /* @__PURE__ */ Xt(e)), i < 1 ? (o = (u) => {
    const c = u * i, d = c * e, f = c - n, h = sc(u, i), w = Math.exp(-d);
    return Il - f / h * w;
  }, s = (u) => {
    const d = u * i * e, f = d * n + n, h = Math.pow(i, 2) * Math.pow(u, 2) * e, w = Math.exp(-d), y = sc(Math.pow(u, 2), i);
    return (-o(u) + Il > 0 ? -1 : 1) * ((f - h) * w) / y;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - n) * e + 1;
    return -Il + c * d;
  }, s = (u) => {
    const c = Math.exp(-u * e), d = (n - u) * (e * e);
    return c * d;
  });
  const a = 5 / e, l = KD(o, s, a);
  if (e = /* @__PURE__ */ Yt(e), isNaN(l))
    return {
      stiffness: pe.stiffness,
      damping: pe.damping,
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
const HD = 12;
function KD(e, t, n) {
  let r = n;
  for (let o = 1; o < HD; o++)
    r = r - e(r) / t(r);
  return r;
}
function sc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const GD = ["duration", "bounce"], YD = ["stiffness", "damping", "mass"];
function ph(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function XD(e) {
  let t = {
    velocity: pe.velocity,
    stiffness: pe.stiffness,
    damping: pe.damping,
    mass: pe.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!ph(e, YD) && ph(e, GD))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, s = 2 * nn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: pe.mass,
        stiffness: o,
        damping: s
      };
    } else {
      const n = WD(e);
      t = {
        ...t,
        ...n,
        mass: pe.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Fx(e = pe.visualDuration, t = pe.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: o } = n;
  const s = n.keyframes[0], i = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: s }, { stiffness: l, damping: u, mass: c, duration: d, velocity: f, isResolvedFromDuration: h } = XD({
    ...n,
    velocity: -/* @__PURE__ */ Xt(n.velocity || 0)
  }), w = f || 0, y = u / (2 * Math.sqrt(l * c)), S = i - s, g = /* @__PURE__ */ Xt(Math.sqrt(l / c)), m = Math.abs(S) < 5;
  r || (r = m ? pe.restSpeed.granular : pe.restSpeed.default), o || (o = m ? pe.restDelta.granular : pe.restDelta.default);
  let v;
  if (y < 1) {
    const k = sc(g, y);
    v = (C) => {
      const E = Math.exp(-y * g * C);
      return i - E * ((w + y * g * S) / k * Math.sin(k * C) + S * Math.cos(k * C));
    };
  } else if (y === 1)
    v = (k) => i - Math.exp(-g * k) * (S + (w + g * S) * k);
  else {
    const k = g * Math.sqrt(y * y - 1);
    v = (C) => {
      const E = Math.exp(-y * g * C), P = Math.min(k * C, 300);
      return i - E * ((w + y * g * S) * Math.sinh(P) + k * S * Math.cosh(P)) / k;
    };
  }
  const b = {
    calculatedDuration: h && d || null,
    next: (k) => {
      const C = v(k);
      if (h)
        a.done = k >= d;
      else {
        let E = 0;
        y < 1 && (E = k === 0 ? /* @__PURE__ */ Yt(w) : Ix(v, k, C));
        const P = Math.abs(E) <= r, R = Math.abs(i - C) <= o;
        a.done = P && R;
      }
      return a.value = a.done ? i : C, a;
    },
    toString: () => {
      const k = Math.min(nx(b), qu), C = rx((E) => b.next(k * E).value, k, 30);
      return k + "ms " + C;
    }
  };
  return b;
}
function hh({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: s = 500, modifyTarget: i, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, h = (P) => a !== void 0 && P < a || l !== void 0 && P > l, w = (P) => a === void 0 ? l : l === void 0 || Math.abs(a - P) < Math.abs(l - P) ? a : l;
  let y = n * t;
  const S = d + y, g = i === void 0 ? S : i(S);
  g !== S && (y = g - d);
  const m = (P) => -y * Math.exp(-P / r), v = (P) => g + m(P), b = (P) => {
    const R = m(P), D = v(P);
    f.done = Math.abs(R) <= u, f.value = f.done ? g : D;
  };
  let k, C;
  const E = (P) => {
    h(f.value) && (k = P, C = Fx({
      keyframes: [f.value, w(f.value)],
      velocity: Ix(v, P, f.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: s,
      restDelta: u,
      restSpeed: c
    }));
  };
  return E(0), {
    calculatedDuration: null,
    next: (P) => {
      let R = !1;
      return !C && k === void 0 && (R = !0, b(P), E(P)), k !== void 0 && P >= k ? C.next(P - k) : (!R && b(P), f);
    }
  };
}
const QD = /* @__PURE__ */ Rs(0.42, 0, 1, 1), qD = /* @__PURE__ */ Rs(0, 0, 0.58, 1), Vx = /* @__PURE__ */ Rs(0.42, 0, 0.58, 1), ZD = (e) => Array.isArray(e) && typeof e[0] != "number", JD = {
  linear: nt,
  easeIn: QD,
  easeInOut: Vx,
  easeOut: qD,
  circIn: Jd,
  circInOut: xx,
  circOut: vx,
  backIn: Zd,
  backInOut: gx,
  backOut: mx,
  anticipate: yx
}, mh = (e) => {
  if (Gd(e)) {
    O0(e.length === 4);
    const [t, n, r, o] = e;
    return Rs(t, n, r, o);
  } else if (typeof e == "string")
    return JD[e];
  return e;
};
function eN(e, t, n) {
  const r = [], o = n || Ox, s = e.length - 1;
  for (let i = 0; i < s; i++) {
    let a = o(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] || nt : t;
      a = As(l, a);
    }
    r.push(a);
  }
  return r;
}
function tN(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const s = e.length;
  if (O0(s === t.length), s === 1)
    return () => t[0];
  if (s === 2 && t[0] === t[1])
    return () => t[1];
  const i = e[0] === e[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = eN(t, r, o), l = a.length, u = (c) => {
    if (i && c < e[0])
      return t[0];
    let d = 0;
    if (l > 1)
      for (; d < e.length - 2 && !(c < e[d + 1]); d++)
        ;
    const f = /* @__PURE__ */ qr(e[d], e[d + 1], c);
    return a[d](f);
  };
  return n ? (c) => u(nn(e[0], e[s - 1], c)) : u;
}
function nN(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ qr(0, t, r);
    e.push(ce(n, 1, o));
  }
}
function rN(e) {
  const t = [0];
  return nN(t, e.length - 1), t;
}
function oN(e, t) {
  return e.map((n) => n * t);
}
function sN(e, t) {
  return e.map(() => t || Vx).splice(0, e.length - 1);
}
function fa({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = ZD(r) ? r.map(mh) : mh(r), s = {
    done: !1,
    value: t[0]
  }, i = oN(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : rN(t),
    e
  ), a = tN(i, t, {
    ease: Array.isArray(o) ? o : sN(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (s.value = a(l), s.done = l >= e, s)
  };
}
const iN = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => ie.update(t, !0),
    stop: () => Mn(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Te.isProcessing ? Te.timestamp : Vt.now()
  };
}, aN = {
  decay: hh,
  inertia: hh,
  tween: fa,
  keyframes: fa,
  spring: Fx
}, lN = (e) => e / 100;
class sf extends Lx {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options, i = (o == null ? void 0 : o.KeyframeResolver) || rf, a = (l, u) => this.onKeyframesResolved(l, u);
    this.resolver = new i(s, a, n, r, o), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: s, velocity: i = 0 } = this.options, a = Kd(n) ? n : aN[n] || fa;
    let l, u;
    a !== fa && typeof t[0] != "number" && (l = As(lN, Ox(t[0], t[1])), t = [0, 100]);
    const c = a({ ...this.options, keyframes: t });
    s === "mirror" && (u = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -i
    })), c.calculatedDuration === null && (c.calculatedDuration = nx(c));
    const { calculatedDuration: d } = c, f = d + o, h = f * (r + 1) - o;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: h
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: P } = this.options;
      return { done: !0, value: P[P.length - 1] };
    }
    const { finalKeyframe: o, generator: s, mirroredGenerator: i, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: u, totalDuration: c, resolvedDuration: d } = r;
    if (this.startTime === null)
      return s.next(0);
    const { delay: f, repeat: h, repeatType: w, repeatDelay: y, onUpdate: S } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const g = this.currentTime - f * (this.speed >= 0 ? 1 : -1), m = this.speed >= 0 ? g < 0 : g > c;
    this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let v = this.currentTime, b = s;
    if (h) {
      const P = Math.min(this.currentTime, c) / d;
      let R = Math.floor(P), D = P % 1;
      !D && P >= 1 && (D = 1), D === 1 && R--, R = Math.min(R, h + 1), !!(R % 2) && (w === "reverse" ? (D = 1 - D, y && (D -= y / d)) : w === "mirror" && (b = i)), v = nn(0, 1, D) * d;
    }
    const k = m ? { done: !1, value: l[0] } : b.next(v);
    a && (k.value = a(k.value));
    let { done: C } = k;
    !m && u !== null && (C = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
    return E && o !== void 0 && (k.value = Ga(l, this.options, o)), S && S(k.value), E && this.finish(), k;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? /* @__PURE__ */ Xt(t.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ Xt(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ Yt(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ Xt(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = iN, onPlay: n, startTime: r } = this.options;
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
const uN = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function cN(e, t, n, { delay: r = 0, duration: o = 300, repeat: s = 0, repeatType: i = "loop", ease: a = "easeInOut", times: l } = {}) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = sx(a, o);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: r,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const dN = /* @__PURE__ */ Ad(() => Object.hasOwnProperty.call(Element.prototype, "animate")), pa = 10, fN = 2e4;
function pN(e) {
  return Kd(e.type) || e.type === "spring" || !ox(e.ease);
}
function hN(e, t) {
  const n = new sf({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let s = 0;
  for (; !r.done && s < fN; )
    r = n.sample(s), o.push(r.value), s += pa;
  return {
    times: void 0,
    keyframes: o,
    duration: s - pa,
    ease: "linear"
  };
}
const zx = {
  anticipate: yx,
  backInOut: gx,
  circInOut: xx
};
function mN(e) {
  return e in zx;
}
class gh extends Lx {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options;
    this.resolver = new jx(s, (i, a) => this.onKeyframesResolved(i, a), n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: r = 300, times: o, ease: s, type: i, motionValue: a, name: l, startTime: u } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof s == "string" && ca() && mN(s) && (s = zx[s]), pN(this.options)) {
      const { onComplete: d, onUpdate: f, motionValue: h, element: w, ...y } = this.options, S = hN(t, y);
      t = S.keyframes, t.length === 1 && (t[1] = t[0]), r = S.duration, o = S.times, s = S.ease, i = "keyframes";
    }
    const c = cN(a.owner.current, l, t, { ...this.options, duration: r, times: o, ease: s });
    return c.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (eh(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
      const { onComplete: d } = this.options;
      a.set(Ga(t, this.options, n)), d && d(), this.cancel(), this.resolveFinishedPromise();
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
    return /* @__PURE__ */ Xt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return /* @__PURE__ */ Xt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = /* @__PURE__ */ Yt(t);
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
        return nt;
      const { animation: r } = n;
      eh(r, t);
    }
    return nt;
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
      const { motionValue: u, onUpdate: c, onComplete: d, element: f, ...h } = this.options, w = new sf({
        ...h,
        keyframes: r,
        duration: o,
        type: s,
        ease: i,
        times: a,
        isGenerator: !0
      }), y = /* @__PURE__ */ Yt(this.time);
      u.setWithVelocity(w.sample(y - pa).value, w.sample(y).value, pa);
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
    return dN() && r && uN.has(r) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !u && !o && s !== "mirror" && i !== 0 && a !== "inertia";
  }
}
const gN = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, yN = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), vN = {
  type: "keyframes",
  duration: 0.8
}, xN = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, wN = (e, { keyframes: t }) => t.length > 2 ? vN : cr.has(e) ? e.startsWith("scale") ? yN(t[1]) : gN : xN;
function SN({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const af = (e, t, n, r = {}, o, s) => (i) => {
  const a = Hd(r, e) || {}, l = a.delay || r.delay || 0;
  let { elapsed: u = 0 } = r;
  u = u - /* @__PURE__ */ Yt(l);
  let c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -u,
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
  SN(a) || (c = {
    ...c,
    ...wN(e, c)
  }), c.duration && (c.duration = /* @__PURE__ */ Yt(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ Yt(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let d = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (d = !0)), d && !s && t.get() !== void 0) {
    const f = Ga(c.keyframes, a);
    if (f !== void 0)
      return ie.update(() => {
        c.onUpdate(f), c.onComplete();
      }), new zT([]);
  }
  return !s && gh.supports(c) ? new gh(c) : new sf(c);
};
function bN({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Bx(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var s;
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (i = r);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in l) {
    const f = e.getValue(d, (s = e.latestValues[d]) !== null && s !== void 0 ? s : null), h = l[d];
    if (h === void 0 || c && bN(c, d))
      continue;
    const w = {
      delay: n,
      ...Hd(i || {}, d)
    };
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const g = dx(e);
      if (g) {
        const m = window.MotionHandoffAnimation(g, d, ie);
        m !== null && (w.startTime = m, y = !0);
      }
    }
    Ju(e, d), f.start(af(d, f, h, e.shouldReduceMotion && ux.has(d) ? { type: !1 } : w, e, y));
    const S = f.animation;
    S && u.push(S);
  }
  return a && Promise.all(u).then(() => {
    ie.update(() => {
      a && eD(e, a);
    });
  }), u;
}
function ic(e, t, n = {}) {
  var r;
  const o = Ka(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = o ? () => Promise.all(Bx(e, o, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: d, staggerDirection: f } = s;
    return kN(e, t, c + u, d, f, n);
  } : () => Promise.resolve(), { when: l } = s;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [i, a] : [a, i];
    return u().then(() => c());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function kN(e, t, n = 0, r = 0, o = 1, s) {
  const i = [], a = (e.variantChildren.size - 1) * r, l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return Array.from(e.variantChildren).sort(CN).forEach((u, c) => {
    u.notify("AnimationStart", t), i.push(ic(u, t, {
      ...s,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function CN(e, t) {
  return e.sortNodePosition(t);
}
function EN(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((s) => ic(e, s, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = ic(e, t, n);
  else {
    const o = typeof t == "function" ? Ka(e, t, n.custom) : t;
    r = Promise.all(Bx(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const PN = jd.length;
function $x(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? $x(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < PN; n++) {
    const r = jd[n], o = e.props[r];
    (ms(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const TN = [...Md].reverse(), DN = Md.length;
function NN(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => EN(e, n, r)));
}
function RN(e) {
  let t = NN(e), n = yh(), r = !0;
  const o = (l) => (u, c) => {
    var d;
    const f = Ka(e, c, l === "exit" ? (d = e.presenceContext) === null || d === void 0 ? void 0 : d.custom : void 0);
    if (f) {
      const { transition: h, transitionEnd: w, ...y } = f;
      u = { ...u, ...y, ...w };
    }
    return u;
  };
  function s(l) {
    t = l(e);
  }
  function i(l) {
    const { props: u } = e, c = $x(e.parent) || {}, d = [], f = /* @__PURE__ */ new Set();
    let h = {}, w = 1 / 0;
    for (let S = 0; S < DN; S++) {
      const g = TN[S], m = n[g], v = u[g] !== void 0 ? u[g] : c[g], b = ms(v), k = g === l ? m.isActive : null;
      k === !1 && (w = S);
      let C = v === c[g] && v !== u[g] && b;
      if (C && r && e.manuallyAnimateOnMount && (C = !1), m.protectedKeys = { ...h }, // If it isn't active and hasn't *just* been set as inactive
      !m.isActive && k === null || // If we didn't and don't have any defined prop for this animation type
      !v && !m.prevProp || // Or if the prop doesn't define an animation
      Wa(v) || typeof v == "boolean")
        continue;
      const E = AN(m.prevProp, v);
      let P = E || // If we're making this variant active, we want to always make it active
      g === l && m.isActive && !C && b || // If we removed a higher-priority variant (i is in reverse order)
      S > w && b, R = !1;
      const D = Array.isArray(v) ? v : [v];
      let N = D.reduce(o(g), {});
      k === !1 && (N = {});
      const { prevResolvedValues: A = {} } = m, O = {
        ...A,
        ...N
      }, I = (V) => {
        P = !0, f.has(V) && (R = !0, f.delete(V)), m.needsAnimating[V] = !0;
        const T = e.getValue(V);
        T && (T.liveStyle = !1);
      };
      for (const V in O) {
        const T = N[V], j = A[V];
        if (h.hasOwnProperty(V))
          continue;
        let _ = !1;
        Qu(T) && Qu(j) ? _ = !tx(T, j) : _ = T !== j, _ ? T != null ? I(V) : f.add(V) : T !== void 0 && f.has(V) ? I(V) : m.protectedKeys[V] = !0;
      }
      m.prevProp = v, m.prevResolvedValues = N, m.isActive && (h = { ...h, ...N }), r && e.blockInitialAnimation && (P = !1), P && (!(C && E) || R) && d.push(...D.map((V) => ({
        animation: V,
        options: { type: g }
      })));
    }
    if (f.size) {
      const S = {};
      f.forEach((g) => {
        const m = e.getBaseTarget(g), v = e.getValue(g);
        v && (v.liveStyle = !0), S[g] = m ?? null;
      }), d.push({ animation: S });
    }
    let y = !!d.length;
    return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (y = !1), r = !1, y ? t(d) : Promise.resolve();
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u)
      return Promise.resolve();
    (c = e.variantChildren) === null || c === void 0 || c.forEach((f) => {
      var h;
      return (h = f.animationState) === null || h === void 0 ? void 0 : h.setActive(l, u);
    }), n[l].isActive = u;
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
      n = yh(), r = !0;
    }
  };
}
function AN(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !tx(t, e) : !1;
}
function Bn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function yh() {
  return {
    animate: Bn(!0),
    whileInView: Bn(),
    whileHover: Bn(),
    whileTap: Bn(),
    whileDrag: Bn(),
    whileFocus: Bn(),
    exit: Bn()
  };
}
class Vn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class MN extends Vn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = RN(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Wa(t) && (this.unmountControls = t.subscribe(this.node));
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
let jN = 0;
class LN extends Vn {
  constructor() {
    super(...arguments), this.id = jN++;
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
const _N = {
  animation: {
    Feature: MN
  },
  exit: {
    Feature: LN
  }
};
function xs(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Ms(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const ON = (e) => (t) => Yd(t) && e(t, Ms(t));
function Wo(e, t, n, r) {
  return xs(e, t, ON(n), r);
}
const vh = (e, t) => Math.abs(e - t);
function IN(e, t) {
  const n = vh(e.x, t.x), r = vh(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Ux {
  constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: s = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const d = Vl(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, h = IN(d.offset, { x: 0, y: 0 }) >= 3;
      if (!f && !h)
        return;
      const { point: w } = d, { timestamp: y } = Te;
      this.history.push({ ...w, timestamp: y });
      const { onStart: S, onMove: g } = this.handlers;
      f || (S && S(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, d);
    }, this.handlePointerMove = (d, f) => {
      this.lastMoveEvent = d, this.lastMoveEventInfo = Fl(f, this.transformPagePoint), ie.update(this.updatePoint, !0);
    }, this.handlePointerUp = (d, f) => {
      this.end();
      const { onEnd: h, onSessionEnd: w, resumeAnimation: y } = this.handlers;
      if (this.dragSnapToOrigin && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const S = Vl(d.type === "pointercancel" ? this.lastMoveEventInfo : Fl(f, this.transformPagePoint), this.history);
      this.startEvent && h && h(d, S), w && w(d, S);
    }, !Yd(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = Ms(t), a = Fl(i, this.transformPagePoint), { point: l } = a, { timestamp: u } = Te;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Vl(a, this.history)), this.removeListeners = As(Wo(this.contextWindow, "pointermove", this.handlePointerMove), Wo(this.contextWindow, "pointerup", this.handlePointerUp), Wo(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Mn(this.updatePoint);
  }
}
function Fl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function xh(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Vl({ point: e }, t) {
  return {
    point: e,
    delta: xh(e, Wx(t)),
    offset: xh(e, FN(t)),
    velocity: VN(t, 0.1)
  };
}
function FN(e) {
  return e[0];
}
function Wx(e) {
  return e[e.length - 1];
}
function VN(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = Wx(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > /* @__PURE__ */ Yt(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = /* @__PURE__ */ Xt(o.timestamp - r.timestamp);
  if (s === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - r.x) / s,
    y: (o.y - r.y) / s
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
const Hx = 1e-4, zN = 1 - Hx, BN = 1 + Hx, Kx = 0.01, $N = 0 - Kx, UN = 0 + Kx;
function ot(e) {
  return e.max - e.min;
}
function WN(e, t, n) {
  return Math.abs(e - t) <= n;
}
function wh(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = ce(t.min, t.max, e.origin), e.scale = ot(n) / ot(t), e.translate = ce(n.min, n.max, e.origin) - e.originPoint, (e.scale >= zN && e.scale <= BN || isNaN(e.scale)) && (e.scale = 1), (e.translate >= $N && e.translate <= UN || isNaN(e.translate)) && (e.translate = 0);
}
function Ho(e, t, n, r) {
  wh(e.x, t.x, n.x, r ? r.originX : void 0), wh(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Sh(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + ot(t);
}
function HN(e, t, n) {
  Sh(e.x, t.x, n.x), Sh(e.y, t.y, n.y);
}
function bh(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + ot(t);
}
function Ko(e, t, n) {
  bh(e.x, t.x, n.x), bh(e.y, t.y, n.y);
}
function KN(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? ce(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ce(n, e, r.max) : Math.min(e, n)), e;
}
function kh(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function GN(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: kh(e.x, n, o),
    y: kh(e.y, t, r)
  };
}
function Ch(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function YN(e, t) {
  return {
    x: Ch(e.x, t.x),
    y: Ch(e.y, t.y)
  };
}
function XN(e, t) {
  let n = 0.5;
  const r = ot(e), o = ot(t);
  return o > r ? n = /* @__PURE__ */ qr(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ qr(e.min, e.max - o, t.min)), nn(0, 1, n);
}
function QN(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const ac = 0.35;
function qN(e = ac) {
  return e === !1 ? e = 0 : e === !0 && (e = ac), {
    x: Eh(e, "left", "right"),
    y: Eh(e, "top", "bottom")
  };
}
function Eh(e, t, n) {
  return {
    min: Ph(e, t),
    max: Ph(e, n)
  };
}
function Ph(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Th = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Nr = () => ({
  x: Th(),
  y: Th()
}), Dh = () => ({ min: 0, max: 0 }), ye = () => ({
  x: Dh(),
  y: Dh()
});
function lt(e) {
  return [e("x"), e("y")];
}
function Gx({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function ZN({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function JN(e, t) {
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
function zl(e) {
  return e === void 0 || e === 1;
}
function lc({ scale: e, scaleX: t, scaleY: n }) {
  return !zl(e) || !zl(t) || !zl(n);
}
function Wn(e) {
  return lc(e) || Yx(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Yx(e) {
  return Nh(e.x) || Nh(e.y);
}
function Nh(e) {
  return e && e !== "0%";
}
function ha(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Rh(e, t, n, r, o) {
  return o !== void 0 && (e = ha(e, o, r)), ha(e, n, r) + t;
}
function uc(e, t = 0, n = 1, r, o) {
  e.min = Rh(e.min, t, n, r, o), e.max = Rh(e.max, t, n, r, o);
}
function Xx(e, { x: t, y: n }) {
  uc(e.x, t.translate, t.scale, t.originPoint), uc(e.y, n.translate, n.scale, n.originPoint);
}
const Ah = 0.999999999999, Mh = 1.0000000000001;
function e2(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let s, i;
  for (let a = 0; a < o; a++) {
    s = n[a], i = s.projectionDelta;
    const { visualElement: l } = s.options;
    l && l.props.style && l.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Ar(e, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, Xx(e, i)), r && Wn(s.latestValues) && Ar(e, s.latestValues));
  }
  t.x < Mh && t.x > Ah && (t.x = 1), t.y < Mh && t.y > Ah && (t.y = 1);
}
function Rr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function jh(e, t, n, r, o = 0.5) {
  const s = ce(e.min, e.max, o);
  uc(e, t, n, s, r);
}
function Ar(e, t) {
  jh(e.x, t.x, t.scaleX, t.scale, t.originX), jh(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Qx(e, t) {
  return Gx(JN(e.getBoundingClientRect(), t));
}
function t2(e, t, n) {
  const r = Qx(e, n), { scroll: o } = t;
  return o && (Rr(r.x, o.offset.x), Rr(r.y, o.offset.y)), r;
}
const qx = ({ current: e }) => e ? e.ownerDocument.defaultView : null, n2 = /* @__PURE__ */ new WeakMap();
class r2 {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ye(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (c) => {
      const { dragSnapToOrigin: d } = this.getProps();
      d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Ms(c).point);
    }, s = (c, d) => {
      const { drag: f, dragPropagation: h, onDragStart: w } = this.getProps();
      if (f && !h && (this.openDragLock && this.openDragLock(), this.openDragLock = XT(f), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), lt((S) => {
        let g = this.getAxisMotionValue(S).get() || 0;
        if (Ft.test(g)) {
          const { projection: m } = this.visualElement;
          if (m && m.layout) {
            const v = m.layout.layoutBox[S];
            v && (g = ot(v) * (parseFloat(g) / 100));
          }
        }
        this.originPoint[S] = g;
      }), w && ie.postRender(() => w(c, d)), Ju(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, i = (c, d) => {
      const { dragPropagation: f, dragDirectionLock: h, onDirectionLock: w, onDrag: y } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: S } = d;
      if (h && this.currentDirection === null) {
        this.currentDirection = o2(S), this.currentDirection !== null && w && w(this.currentDirection);
        return;
      }
      this.updateAxis("x", d.point, S), this.updateAxis("y", d.point, S), this.visualElement.render(), y && y(c, d);
    }, a = (c, d) => this.stop(c, d), l = () => lt((c) => {
      var d;
      return this.getAnimationState(c) === "paused" && ((d = this.getAxisMotionValue(c).animation) === null || d === void 0 ? void 0 : d.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Ux(t, {
      onSessionStart: o,
      onStart: s,
      onMove: i,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: qx(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: s } = this.getProps();
    s && ie.postRender(() => s(t, n));
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
    if (!r || !di(t, o, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (i = KN(i, this.constraints[t], this.elastic[t])), s.set(i);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, s = this.constraints;
    n && Tr(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = GN(o.layoutBox, n) : this.constraints = !1, this.elastic = qN(r), s !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && lt((i) => {
      this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = QN(o.layoutBox[i], this.constraints[i]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Tr(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const s = t2(r, o.root, this.visualElement.getTransformPagePoint());
    let i = YN(o.layout.layoutBox, s);
    if (n) {
      const a = n(ZN(i));
      this.hasMutatedConstraints = !!a, a && (i = Gx(a));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = lt((c) => {
      if (!di(c, n, this.currentDirection))
        return;
      let d = l && l[c] || {};
      i && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, h = o ? 40 : 1e7, w = {
        type: "inertia",
        velocity: r ? t[c] : 0,
        bounceStiffness: f,
        bounceDamping: h,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...d
      };
      return this.startAxisValueAnimation(c, w);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return Ju(this.visualElement, t), r.start(af(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    lt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    lt((t) => {
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
    lt((n) => {
      const { drag: r } = this.getProps();
      if (!di(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, s = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: i, max: a } = o.layout.layoutBox[n];
        s.set(t[n] - ce(i, a, 0.5));
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
    if (!Tr(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    lt((i) => {
      const a = this.getAxisMotionValue(i);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[i] = XN({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), lt((i) => {
      if (!di(i, t, null))
        return;
      const a = this.getAxisMotionValue(i), { min: l, max: u } = this.constraints[i];
      a.set(ce(l, u, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    n2.set(this.visualElement, this);
    const t = this.visualElement.current, n = Wo(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Tr(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, s = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), ie.read(r);
    const i = xs(window, "resize", () => this.scalePositionWithinConstraints()), a = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (lt((c) => {
        const d = this.getAxisMotionValue(c);
        d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      i(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: s = !1, dragElastic: i = ac, dragMomentum: a = !0 } = t;
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
function di(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function o2(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class s2 extends Vn {
  constructor(t) {
    super(t), this.removeGroupControls = nt, this.removeListeners = nt, this.controls = new r2(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || nt;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Lh = (e) => (t, n) => {
  e && ie.postRender(() => e(t, n));
};
class i2 extends Vn {
  constructor() {
    super(...arguments), this.removePointerDownListener = nt;
  }
  onPointerDown(t) {
    this.session = new Ux(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: qx(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Lh(t),
      onStart: Lh(n),
      onMove: r,
      onEnd: (s, i) => {
        delete this.session, o && ie.postRender(() => o(s, i));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Wo(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Ai = {
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
function _h(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Eo = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (z.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = _h(e, t.target.x), r = _h(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, a2 = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = jn.parse(e);
    if (o.length > 5)
      return r;
    const s = jn.createTransformer(e), i = typeof o[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + i] /= a, o[1 + i] /= l;
    const u = ce(a, l, 0.5);
    return typeof o[2 + i] == "number" && (o[2 + i] /= u), typeof o[3 + i] == "number" && (o[3 + i] /= u), s(o);
  }
};
class l2 extends x.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: s } = t;
    DT(u2), s && (n.group && n.group.add(s), r && r.register && o && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), Ai.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: s } = this.props, i = r.projection;
    return i && (i.isPresent = s, o || t.layoutDependency !== n || n === void 0 ? i.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? i.promote() : i.relegate() || ie.postRender(() => {
      const a = i.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), _d.postRender(() => {
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
function Zx(e) {
  const [t, n] = L0(), r = x.useContext(Td);
  return p.jsx(l2, { ...e, layoutGroup: r, switchLayoutGroup: x.useContext($0), isPresent: t, safeToRemove: n });
}
const u2 = {
  borderRadius: {
    ...Eo,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Eo,
  borderTopRightRadius: Eo,
  borderBottomLeftRadius: Eo,
  borderBottomRightRadius: Eo,
  boxShadow: a2
};
function c2(e, t, n) {
  const r = Oe(e) ? e : ys(e);
  return r.start(af("", r, t, n)), r.animation;
}
function d2(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const f2 = (e, t) => e.depth - t.depth;
class p2 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Xd(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Qd(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(f2), this.isDirty = !1, this.children.forEach(t);
  }
}
function h2(e, t) {
  const n = Vt.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= t && (Mn(r), e(s - t));
  };
  return ie.read(r, !0), () => Mn(r);
}
const Jx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], m2 = Jx.length, Oh = (e) => typeof e == "string" ? parseFloat(e) : e, Ih = (e) => typeof e == "number" || z.test(e);
function g2(e, t, n, r, o, s) {
  o ? (e.opacity = ce(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    y2(r)
  ), e.opacityExit = ce(t.opacity !== void 0 ? t.opacity : 1, 0, v2(r))) : s && (e.opacity = ce(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < m2; i++) {
    const a = `border${Jx[i]}Radius`;
    let l = Fh(t, a), u = Fh(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || Ih(l) === Ih(u) ? (e[a] = Math.max(ce(Oh(l), Oh(u), r), 0), (Ft.test(u) || Ft.test(l)) && (e[a] += "%")) : e[a] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = ce(t.rotate || 0, n.rotate || 0, r));
}
function Fh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const y2 = /* @__PURE__ */ ew(0, 0.5, vx), v2 = /* @__PURE__ */ ew(0.5, 0.95, nt);
function ew(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ qr(e, t, r));
}
function Vh(e, t) {
  e.min = t.min, e.max = t.max;
}
function at(e, t) {
  Vh(e.x, t.x), Vh(e.y, t.y);
}
function zh(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Bh(e, t, n, r, o) {
  return e -= t, e = ha(e, 1 / n, r), o !== void 0 && (e = ha(e, 1 / o, r)), e;
}
function x2(e, t = 0, n = 1, r = 0.5, o, s = e, i = e) {
  if (Ft.test(t) && (t = parseFloat(t), t = ce(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let a = ce(s.min, s.max, r);
  e === s && (a -= t), e.min = Bh(e.min, t, n, a, o), e.max = Bh(e.max, t, n, a, o);
}
function $h(e, t, [n, r, o], s, i) {
  x2(e, t[n], t[r], t[o], t.scale, s, i);
}
const w2 = ["x", "scaleX", "originX"], S2 = ["y", "scaleY", "originY"];
function Uh(e, t, n, r) {
  $h(e.x, t, w2, n ? n.x : void 0, r ? r.x : void 0), $h(e.y, t, S2, n ? n.y : void 0, r ? r.y : void 0);
}
function Wh(e) {
  return e.translate === 0 && e.scale === 1;
}
function tw(e) {
  return Wh(e.x) && Wh(e.y);
}
function Hh(e, t) {
  return e.min === t.min && e.max === t.max;
}
function b2(e, t) {
  return Hh(e.x, t.x) && Hh(e.y, t.y);
}
function Kh(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function nw(e, t) {
  return Kh(e.x, t.x) && Kh(e.y, t.y);
}
function Gh(e) {
  return ot(e.x) / ot(e.y);
}
function Yh(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class k2 {
  constructor() {
    this.members = [];
  }
  add(t) {
    Xd(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Qd(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function C2(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, s = e.y.translate / t.y, i = (n == null ? void 0 : n.z) || 0;
  if ((o || s || i) && (r = `translate3d(${o}px, ${s}px, ${i}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: d, rotateY: f, skewX: h, skewY: w } = n;
    u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), d && (r += `rotateX(${d}deg) `), f && (r += `rotateY(${f}deg) `), h && (r += `skewX(${h}deg) `), w && (r += `skewY(${w}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Hn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, jo = typeof window < "u" && window.MotionDebug !== void 0, Bl = ["", "X", "Y", "Z"], E2 = { visibility: "hidden" }, Xh = 1e3;
let P2 = 0;
function $l(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function rw(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = dx(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ie, !(o || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && rw(r);
}
function ow({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(i = {}, a = t == null ? void 0 : t()) {
      this.id = P2++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, jo && (Hn.totalNodes = Hn.resolvedTargetDeltas = Hn.recalculatedProjection = 0), this.nodes.forEach(N2), this.nodes.forEach(L2), this.nodes.forEach(_2), this.nodes.forEach(R2), jo && window.MotionDebug.record(Hn);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new p2());
    }
    addEventListener(i, a) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new qd()), this.eventHandlers.get(i).add(a);
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
      this.isSVG = d2(i), this.instance = i;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = h2(f, 250), Ai.hasAnimatedSinceResize && (Ai.hasAnimatedSinceResize = !1, this.nodes.forEach(qh));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: h, layout: w }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || c.getDefaultTransition() || z2, { onLayoutAnimationStart: S, onLayoutAnimationComplete: g } = c.getProps(), m = !this.targetLayout || !nw(this.targetLayout, w) || h, v = !f && h;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || v || f && (m || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, v);
          const b = {
            ...Hd(y, "layout"),
            onPlay: S,
            onComplete: g
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (b.delay = 0, b.type = !1), this.startAnimation(b);
        } else
          f || qh(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = w;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Mn(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(O2), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && rw(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), i && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Qh);
        return;
      }
      this.isUpdating || this.nodes.forEach(M2), this.isUpdating = !1, this.nodes.forEach(j2), this.nodes.forEach(T2), this.nodes.forEach(D2), this.clearAllSnapshots();
      const a = Vt.now();
      Te.delta = nn(0, 1e3 / 60, a - Te.timestamp), Te.timestamp = a, Te.isProcessing = !0, Ml.update.process(Te), Ml.preRender.process(Te), Ml.render.process(Te), Te.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, _d.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(A2), this.sharedNodes.forEach(I2);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, ie.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ie.postRender(() => {
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
      this.layout = this.measure(!1), this.layoutCorrected = ye(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !tw(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      i && (a || Wn(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return i && (l = this.removeTransform(l)), B2(l), {
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
        return ye();
      const l = a.measureViewportBox();
      if (!(((i = this.scroll) === null || i === void 0 ? void 0 : i.wasRoot) || this.path.some($2))) {
        const { scroll: c } = this.root;
        c && (Rr(l.x, c.offset.x), Rr(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(i) {
      var a;
      const l = ye();
      if (at(l, i), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: d, options: f } = c;
        c !== this.root && d && f.layoutScroll && (d.wasRoot && at(l, i), Rr(l.x, d.offset.x), Rr(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(i, a = !1) {
      const l = ye();
      at(l, i);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && Ar(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), Wn(c.latestValues) && Ar(l, c.latestValues);
      }
      return Wn(this.latestValues) && Ar(l, this.latestValues), l;
    }
    removeTransform(i) {
      const a = ye();
      at(a, i);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Wn(u.latestValues))
          continue;
        lc(u.latestValues) && u.updateSnapshot();
        const c = ye(), d = u.measurePageBox();
        at(c, d), Uh(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Wn(this.latestValues) && Uh(a, this.latestValues), a;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Te.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(i = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (!(i || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (this.resolvedRelativeTargetAt = Te.timestamp, !this.targetDelta && !this.relativeTarget) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ye(), this.relativeTargetOrigin = ye(), Ko(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox), at(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = ye(), this.targetWithTransforms = ye()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), HN(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : at(this.target, this.layout.layoutBox), Xx(this.target, this.targetDelta)) : at(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const h = this.getClosestProjectingParent();
            h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ye(), this.relativeTargetOrigin = ye(), Ko(this.relativeTargetOrigin, this.target, h.target), at(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          jo && Hn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || lc(this.parent.latestValues) || Yx(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var i;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let u = !0;
      if ((this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === Te.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d))
        return;
      at(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, h = this.treeScale.y;
      e2(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = ye());
      const { target: w } = a;
      if (!w) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (zh(this.prevProjectionDelta.x, this.projectionDelta.x), zh(this.prevProjectionDelta.y, this.projectionDelta.y)), Ho(this.projectionDelta, this.layoutCorrected, w, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== h || !Yh(this.projectionDelta.x, this.prevProjectionDelta.x) || !Yh(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", w)), jo && Hn.recalculatedProjection++;
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
      this.prevProjectionDelta = Nr(), this.projectionDelta = Nr(), this.projectionDeltaWithTransform = Nr();
    }
    setAnimationOrigin(i, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = Nr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = ye(), h = l ? l.source : void 0, w = this.layout ? this.layout.source : void 0, y = h !== w, S = this.getStack(), g = !S || S.members.length <= 1, m = !!(y && !g && this.options.crossfade === !0 && !this.path.some(V2));
      this.animationProgress = 0;
      let v;
      this.mixTargetDelta = (b) => {
        const k = b / 1e3;
        Zh(d.x, i.x, k), Zh(d.y, i.y, k), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ko(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), F2(this.relativeTarget, this.relativeTargetOrigin, f, k), v && b2(this.relativeTarget, v) && (this.isProjectionDirty = !1), v || (v = ye()), at(v, this.relativeTarget)), y && (this.animationValues = c, g2(c, u, this.latestValues, k, m, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Mn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ie.update(() => {
        Ai.hasAnimatedSinceResize = !0, this.currentAnimation = c2(0, Xh, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Xh), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = i;
      if (!(!a || !l || !u)) {
        if (this !== i && this.layout && u && sw(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || ye();
          const d = ot(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + d;
          const f = ot(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + f;
        }
        at(a, l), Ar(a, c), Ho(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(i, a) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new k2()), this.sharedNodes.get(i).add(a);
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
      l.z && $l("z", i, u, this.animationValues);
      for (let c = 0; c < Bl.length; c++)
        $l(`rotate${Bl[c]}`, i, u, this.animationValues), $l(`skew${Bl[c]}`, i, u, this.animationValues);
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
        return E2;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Ni(i == null ? void 0 : i.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const y = {};
        return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = Ni(i == null ? void 0 : i.pointerEvents) || ""), this.hasProjected && !Wn(this.latestValues) && (y.transform = c ? c({}, "") : "none", this.hasProjected = !1), y;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = C2(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: h, y: w } = this.projectionDelta;
      u.transformOrigin = `${h.origin * 100}% ${w.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const y in ua) {
        if (f[y] === void 0)
          continue;
        const { correct: S, applyTo: g } = ua[y], m = u.transform === "none" ? f[y] : S(f[y], d);
        if (g) {
          const v = g.length;
          for (let b = 0; b < v; b++)
            u[g[b]] = m;
        } else
          u[y] = m;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? Ni(i == null ? void 0 : i.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var a;
        return (a = i.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(Qh), this.root.sharedNodes.clear();
    }
  };
}
function T2(e) {
  e.updateLayout();
}
function D2(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: s } = e.options, i = n.source !== e.layout.source;
    s === "size" ? lt((d) => {
      const f = i ? n.measuredBox[d] : n.layoutBox[d], h = ot(f);
      f.min = r[d].min, f.max = f.min + h;
    }) : sw(s, n.layoutBox, r) && lt((d) => {
      const f = i ? n.measuredBox[d] : n.layoutBox[d], h = ot(r[d]);
      f.max = f.min + h, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + h);
    });
    const a = Nr();
    Ho(a, r, n.layoutBox);
    const l = Nr();
    i ? Ho(l, e.applyTransform(o, !0), n.measuredBox) : Ho(l, r, n.layoutBox);
    const u = !tw(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d;
        if (f && h) {
          const w = ye();
          Ko(w, n.layoutBox, f.layoutBox);
          const y = ye();
          Ko(y, r, h.layoutBox), nw(w, y) || (c = !0), d.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = w, e.relativeParent = d);
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
function N2(e) {
  jo && Hn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function R2(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function A2(e) {
  e.clearSnapshot();
}
function Qh(e) {
  e.clearMeasurements();
}
function M2(e) {
  e.isLayoutDirty = !1;
}
function j2(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function qh(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function L2(e) {
  e.resolveTargetDelta();
}
function _2(e) {
  e.calcProjection();
}
function O2(e) {
  e.resetSkewAndRotation();
}
function I2(e) {
  e.removeLeadSnapshot();
}
function Zh(e, t, n) {
  e.translate = ce(t.translate, 0, n), e.scale = ce(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Jh(e, t, n, r) {
  e.min = ce(t.min, n.min, r), e.max = ce(t.max, n.max, r);
}
function F2(e, t, n, r) {
  Jh(e.x, t.x, n.x, r), Jh(e.y, t.y, n.y, r);
}
function V2(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const z2 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, em = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), tm = em("applewebkit/") && !em("chrome/") ? Math.round : nt;
function nm(e) {
  e.min = tm(e.min), e.max = tm(e.max);
}
function B2(e) {
  nm(e.x), nm(e.y);
}
function sw(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !WN(Gh(t), Gh(n), 0.2);
}
function $2(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const U2 = ow({
  attachResizeListener: (e, t) => xs(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Ul = {
  current: void 0
}, iw = ow({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Ul.current) {
      const e = new U2({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Ul.current = e;
    }
    return Ul.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), W2 = {
  pan: {
    Feature: i2
  },
  drag: {
    Feature: s2,
    ProjectionNode: iw,
    MeasureLayout: Zx
  }
};
function rm(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, s = r[o];
  s && ie.postRender(() => s(t, Ms(t)));
}
class H2 extends Vn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = WT(t, (n) => (rm(this.node, n, "Start"), (r) => rm(this.node, r, "End"))));
  }
  unmount() {
  }
}
class K2 extends Vn {
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
    this.unmount = As(xs(this.node.current, "focus", () => this.onFocus()), xs(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function om(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n), s = r[o];
  s && ie.postRender(() => s(t, Ms(t)));
}
class G2 extends Vn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = YT(t, (n) => (om(this.node, n, "Start"), (r, { success: o }) => om(this.node, r, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const cc = /* @__PURE__ */ new WeakMap(), Wl = /* @__PURE__ */ new WeakMap(), Y2 = (e) => {
  const t = cc.get(e.target);
  t && t(e);
}, X2 = (e) => {
  e.forEach(Y2);
};
function Q2({ root: e, ...t }) {
  const n = e || document;
  Wl.has(n) || Wl.set(n, {});
  const r = Wl.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(X2, { root: e, ...t })), r[o];
}
function q2(e, t, n) {
  const r = Q2(t);
  return cc.set(e, n), r.observe(e), () => {
    cc.delete(e), r.unobserve(e);
  };
}
const Z2 = {
  some: 0,
  all: 1
};
class J2 extends Vn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: s } = t, i = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : Z2[o]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return q2(this.node.current, i, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(eR(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function eR({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const tR = {
  inView: {
    Feature: J2
  },
  tap: {
    Feature: G2
  },
  focus: {
    Feature: K2
  },
  hover: {
    Feature: H2
  }
}, nR = {
  layout: {
    ProjectionNode: iw,
    MeasureLayout: Zx
  }
}, dc = { current: null }, aw = { current: !1 };
function rR() {
  if (aw.current = !0, !!Rd)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => dc.current = e.matches;
      e.addListener(t), t();
    } else
      dc.current = !1;
}
const oR = [...Mx, Le, jn], sR = (e) => oR.find(Ax(e)), sm = /* @__PURE__ */ new WeakMap();
function iR(e, t, n) {
  for (const r in t) {
    const o = t[r], s = n[r];
    if (Oe(o))
      e.addValue(r, o);
    else if (Oe(s))
      e.addValue(r, ys(o, { owner: e }));
    else if (s !== o)
      if (e.hasValue(r)) {
        const i = e.getValue(r);
        i.liveStyle === !0 ? i.jump(o) : i.hasAnimated || i.set(o);
      } else {
        const i = e.getStaticValue(r);
        e.addValue(r, ys(i !== void 0 ? i : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const im = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class aR {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = rf, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const h = Vt.now();
      this.renderScheduledAt < h && (this.renderScheduledAt = h, ie.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u, onUpdate: c } = i;
    this.onUpdate = c, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.blockInitialAnimation = !!s, this.isControllingVariants = Ha(n), this.isVariantNode = z0(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in f) {
      const w = f[h];
      l[h] !== void 0 && Oe(w) && w.set(l[h], !1);
    }
  }
  mount(t) {
    this.current = t, sm.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), aw.current || rR(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : dc.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    sm.delete(this.current), this.projection && this.projection.unmount(), Mn(this.notifyUpdate), Mn(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const r = cr.has(t), o = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && ie.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
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
    for (t in Zr) {
      const n = Zr[t];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ye();
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
    for (let r = 0; r < im.length; r++) {
      const o = im[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const s = "on" + o, i = t[s];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = iR(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return r === void 0 && n !== void 0 && (r = ys(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return o != null && (typeof o == "string" && (Nx(o) || wx(o)) ? o = parseFloat(o) : !sR(o) && jn.test(n) && (o = Px(t, n)), this.setBaseTarget(t, Oe(o) ? o.get() : o)), Oe(o) ? o.get() : o;
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
      const i = Id(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      i && (o = i[t]);
    }
    if (r && o !== void 0)
      return o;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !Oe(s) ? s : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new qd()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class lw extends aR {
  constructor() {
    super(...arguments), this.KeyframeResolver = jx;
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
    Oe(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function lR(e) {
  return window.getComputedStyle(e);
}
class uR extends lw {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = X0;
  }
  readValueFromInstance(t, n) {
    if (cr.has(n)) {
      const r = nf(n);
      return r && r.default || 0;
    } else {
      const r = lR(t), o = (K0(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Qx(t, n);
  }
  build(t, n, r) {
    zd(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Wd(t, n, r);
  }
}
class cR extends lw {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ye;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (cr.has(n)) {
      const r = nf(n);
      return r && r.default || 0;
    }
    return n = Q0.has(n) ? n : Ld(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return J0(t, n, r);
  }
  build(t, n, r) {
    Bd(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    q0(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = Ud(t.tagName), super.mount(t);
  }
}
const dR = (e, t) => Od(e) ? new cR(t) : new uR(t, {
  allowProjection: e !== x.Fragment
}), fR = /* @__PURE__ */ IT({
  ..._N,
  ...tR,
  ...W2,
  ...nR
}, dR), fi = /* @__PURE__ */ ZP(fR);
function pR({ events: e, eventMetadata: t, onDateClick: n, onEventClick: r }) {
  const [o, s] = x.useState(/* @__PURE__ */ new Date()), [i, a] = x.useState(0), [l, u] = x.useState(null), c = (C, E) => {
    const P = new Date(E, C + 1, 0).getDate();
    return Array.from({ length: P }, (R, D) => ({ day: D + 1 }));
  }, d = (C, E) => e.filter((P) => {
    const R = new Date(P.startDate);
    return R.getDate() === C && R.getMonth() === E.getMonth() && R.getFullYear() === E.getFullYear();
  }), f = (C) => C.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), h = () => {
    a(-1);
    const C = new Date(o.getFullYear(), o.getMonth() - 1, 1);
    s(C);
  }, w = () => {
    a(1);
    const C = new Date(o.getFullYear(), o.getMonth() + 1, 1);
    s(C);
  }, y = c(o.getMonth(), o.getFullYear()), S = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], m = new Date(o.getFullYear(), o.getMonth(), 1).getDay(), v = new Date(o.getFullYear(), o.getMonth() - 1, 1), b = new Date(v.getFullYear(), v.getMonth() + 1, 0).getDate(), k = ({ events: C }) => {
    const E = {
      clubs: "bg-purple-500",
      unbc: "bg-green-500",
      organizations: "bg-red-500",
      sports: "bg-blue-500"
    }, P = C.reduce((R, D) => {
      const N = t[D.id], A = (N == null ? void 0 : N.category) || "other";
      return R[A] || (R[A] = []), R[A].push(D), R;
    }, {});
    return /* @__PURE__ */ p.jsx("div", { className: "flex flex-wrap gap-1", children: Object.entries(P).map(([R, D]) => {
      const N = E[R] || "bg-gray-500";
      return /* @__PURE__ */ p.jsx(
        "div",
        {
          className: `${N} text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium shadow-sm`,
          title: `${D.length} ${R} event${D.length > 1 ? "s" : ""}: ${D.map((A) => A.title).join(", ")}`,
          children: D.length
        },
        R
      );
    }) });
  };
  return /* @__PURE__ */ p.jsxs("div", { children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4", children: [
      /* @__PURE__ */ p.jsxs(
        fi.h2,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.5 },
          className: "text-3xl my-5 tracking-tighter font-bold text-gray-900 dark:text-gray-100",
          children: [
            o.toLocaleString("default", { month: "long" }),
            " ",
            o.getFullYear()
          ]
        },
        o.getMonth()
      ),
      /* @__PURE__ */ p.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ p.jsxs(Pn, { variant: "outline", onClick: h, className: "gap-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600", children: [
          /* @__PURE__ */ p.jsx(Vv, { className: "h-4 w-4" }),
          "Prev"
        ] }),
        /* @__PURE__ */ p.jsxs(Pn, { variant: "outline", onClick: w, className: "gap-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600", children: [
          "Next",
          /* @__PURE__ */ p.jsx(zv, { className: "h-4 w-4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ p.jsx(Kp, { initial: !1, custom: i, mode: "wait", children: /* @__PURE__ */ p.jsxs(
      fi.div,
      {
        custom: i,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        className: "grid grid-cols-7 gap-1 sm:gap-2",
        children: [
          S.map((C, E) => /* @__PURE__ */ p.jsx(
            "div",
            {
              className: "text-left my-8 text-4xl tracking-tighter font-medium text-gray-900 dark:text-gray-100",
              children: C
            },
            E
          )),
          Array.from({ length: m }).map((C, E) => /* @__PURE__ */ p.jsx("div", { className: "h-[150px] opacity-50 p-4", children: /* @__PURE__ */ p.jsx("div", { className: "font-semibold relative text-3xl mb-1 text-gray-400 dark:text-gray-500", children: b - m + E + 1 }) }, `offset-${E}`)),
          y.map((C, E) => {
            const P = d(C.day, o), R = (/* @__PURE__ */ new Date()).getDate() === C.day && (/* @__PURE__ */ new Date()).getMonth() === o.getMonth() && (/* @__PURE__ */ new Date()).getFullYear() === o.getFullYear(), N = (m + C.day - 1) % 7 >= 5;
            return /* @__PURE__ */ p.jsxs(
              fi.div,
              {
                className: "hover:z-50 border-none h-[150px] rounded group flex flex-col relative",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -20 },
                transition: { duration: 0.3 },
                onMouseEnter: () => u(C.day),
                onMouseLeave: () => u(null),
                children: [
                  /* @__PURE__ */ p.jsxs(
                    ad,
                    {
                      className: `bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md overflow-hidden relative flex p-4 border h-full transition-shadow day-card ${P.length > 0 ? "cursor-pointer hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-750" : "cursor-default"}`,
                      onClick: P.length > 0 ? () => n == null ? void 0 : n(new Date(o.getFullYear(), o.getMonth(), C.day)) : void 0,
                      children: [
                        /* @__PURE__ */ p.jsx("div", { className: `font-semibold relative text-3xl mb-1 ${P.length > 0 ? "text-gray-900 dark:text-gray-100" : "text-gray-500 dark:text-gray-400"} ${R ? "text-blue-600 dark:text-blue-400" : ""}`, children: C.day }),
                        /* @__PURE__ */ p.jsx("div", { className: "flex-grow flex flex-col gap-2 w-full", children: /* @__PURE__ */ p.jsx(Kp, { mode: "wait", children: (P == null ? void 0 : P.length) > 0 && /* @__PURE__ */ p.jsx(
                          fi.div,
                          {
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0, y: -20 },
                            transition: { duration: 0.3 },
                            children: /* @__PURE__ */ p.jsx(k, { events: P })
                          },
                          P[0].id
                        ) }) })
                      ]
                    }
                  ),
                  l === C.day && P.length > 0 && /* @__PURE__ */ p.jsxs(
                    "div",
                    {
                      className: `absolute top-full z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3 w-80 ${N ? "right-0" : "left-0"}`,
                      onMouseEnter: () => u(C.day),
                      onMouseLeave: () => u(null),
                      children: [
                        /* @__PURE__ */ p.jsxs("div", { className: "text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2", children: [
                          P.length,
                          " event",
                          P.length > 1 ? "s" : ""
                        ] }),
                        /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: P.map((A) => {
                          const O = t[A.id], K = O ? {
                            clubs: "bg-purple-500",
                            unbc: "bg-green-500",
                            organizations: "bg-red-500",
                            sports: "bg-blue-500"
                          }[O.category] : "bg-gray-500";
                          return /* @__PURE__ */ p.jsxs(
                            "div",
                            {
                              className: "flex items-start gap-2 p-1 -m-1 rounded cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
                              onClick: (F) => {
                                F.stopPropagation(), r == null || r(A);
                              },
                              children: [
                                /* @__PURE__ */ p.jsx("div", { className: `w-2 h-2 rounded-full ${K} flex-shrink-0 mt-1.5` }),
                                /* @__PURE__ */ p.jsxs("div", { className: "flex-1 min-w-0", children: [
                                  /* @__PURE__ */ p.jsx("div", { className: "font-medium text-sm text-gray-800 dark:text-gray-200 leading-tight", children: A.title }),
                                  /* @__PURE__ */ p.jsx("div", { className: "text-xs text-gray-600 dark:text-gray-400 mt-0.5", children: f(A.startDate) })
                                ] })
                              ]
                            },
                            A.id
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
          Array.from({ length: 42 - m - y.length }).map((C, E) => /* @__PURE__ */ p.jsx("div", { className: "h-[150px] opacity-50 p-4", children: /* @__PURE__ */ p.jsx("div", { className: "font-semibold relative text-3xl mb-1 text-gray-400 dark:text-gray-500", children: E + 1 }) }, `next-${E}`))
        ]
      },
      `${o.getFullYear()}-${o.getMonth()}`
    ) })
  ] });
}
function hR({ events: e, eventMetadata: t, onEventClick: n }) {
  const [r, o] = ve.useState(/* @__PURE__ */ new Date()), i = ((f) => {
    const h = new Date(f);
    return h.setDate(f.getDate() - f.getDay()), Array.from({ length: 7 }, (w, y) => {
      const S = new Date(h);
      return S.setDate(h.getDate() + y), S;
    });
  })(r), a = Array.from({ length: 24 }, (f, h) => h), l = (f) => e.filter((h) => h.startDate.toDateString() === f.toDateString()), u = (f) => {
    const h = new Date(r);
    h.setDate(r.getDate() + (f === "next" ? 7 : -7)), o(h);
  }, c = (f, h, w) => {
    const y = f.startDate.getHours(), S = f.startDate.getMinutes(), g = f.endDate ? f.endDate.getHours() : y + 1, m = f.endDate ? f.endDate.getMinutes() : 0, v = y + S / 60, b = g + m / 60, k = b - v, C = h.filter((N) => {
      if (N.id === f.id) return !0;
      if (N.startDate.toDateString() !== f.startDate.toDateString())
        return !1;
      const A = N.startDate.getHours() + N.startDate.getMinutes() / 60, O = (N.endDate ? N.endDate.getHours() : N.startDate.getHours() + 1) + (N.endDate ? N.endDate.getMinutes() / 60 : 0);
      return v < O && b > A;
    }), E = C.length, P = C.findIndex((N) => N.id === f.id), R = E > 1 ? 100 / E : 100, D = E > 1 ? P * R : 0;
    return {
      top: `${v * 80}px`,
      // 80px per hour for better readability
      height: `${k * 80}px`,
      // Accurate height based on actual duration
      left: `${D}%`,
      width: `${R}%`
    };
  }, d = "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-600";
  return /* @__PURE__ */ p.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ p.jsx(
        "button",
        {
          onClick: () => u("prev"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ p.jsx($v, { className: "h-5 w-5" })
        }
      ),
      /* @__PURE__ */ p.jsxs("h2", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: [
        i[0].toLocaleDateString("en-US", { month: "long", day: "numeric" }),
        " - ",
        i[6].toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
      ] }),
      /* @__PURE__ */ p.jsx(
        "button",
        {
          onClick: () => u("next"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ p.jsx(Uv, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-8 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700", children: [
        /* @__PURE__ */ p.jsx("div", { className: "p-3 text-xs font-medium text-gray-500 dark:text-gray-400 border-r border-gray-200 dark:border-gray-600", children: "Time" }),
        i.map((f, h) => /* @__PURE__ */ p.jsxs("div", { className: "p-3 text-center border-r border-gray-200 dark:border-gray-600 last:border-r-0", children: [
          /* @__PURE__ */ p.jsx("div", { className: "text-xs font-medium text-gray-500 dark:text-gray-400", children: f.toLocaleDateString("en-US", { weekday: "short" }) }),
          /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-gray-900 dark:text-gray-100", children: f.getDate() })
        ] }, h))
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-8 relative", children: [
        /* @__PURE__ */ p.jsx("div", { className: "border-r border-gray-200 dark:border-gray-600", children: a.map((f) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] p-2 text-xs text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600 flex items-start", children: f === 0 ? "12 AM" : f === 12 ? "12 PM" : f > 12 ? `${f - 12} PM` : `${f} AM` }, f)) }),
        i.map((f, h) => {
          const w = l(f);
          return /* @__PURE__ */ p.jsxs("div", { className: "relative border-r border-gray-200 dark:border-gray-600 last:border-r-0", children: [
            a.map((y) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] border-b border-gray-200 dark:border-gray-600" }, y)),
            w.map((y, S) => {
              const g = t[y.id], m = {
                clubs: "bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100 border-purple-200 dark:border-purple-700",
                unbc: "bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 border-green-200 dark:border-green-700",
                organizations: "bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100 border-red-200 dark:border-red-700",
                sports: "bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 border-blue-200 dark:border-blue-700"
              }, v = g != null && g.category && m[g.category] ? m[g.category] : d, b = c(y, w);
              return /* @__PURE__ */ p.jsxs(
                "div",
                {
                  className: `absolute ${v} border rounded p-2 text-sm z-20 overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow event-card`,
                  style: {
                    ...b,
                    margin: "1px"
                  },
                  onClick: (k) => {
                    k.stopPropagation(), n == null || n(y);
                  },
                  children: [
                    /* @__PURE__ */ p.jsx("div", { className: "font-medium leading-tight truncate text-sm", children: y.title }),
                    /* @__PURE__ */ p.jsx("div", { className: "text-xs opacity-75 leading-tight", children: y.startDate.toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: !0
                    }) }),
                    g && /* @__PURE__ */ p.jsxs("div", { className: "text-xs leading-tight", children: [
                      /* @__PURE__ */ p.jsx("div", { className: "truncate", children: g.location }),
                      g.organization && /* @__PURE__ */ p.jsx("div", { className: "truncate opacity-75", children: g.organization })
                    ] })
                  ]
                },
                y.id
              );
            })
          ] }, h);
        })
      ] })
    ] })
  ] });
}
function mR({ events: e, eventMetadata: t, initialDate: n, onEventClick: r }) {
  const [o, s] = ve.useState(n || /* @__PURE__ */ new Date());
  ve.useEffect(() => {
    n && s(n);
  }, [n]);
  const i = Array.from({ length: 24 }, (h, w) => w), a = () => e.filter((h) => h.startDate.toDateString() === o.toDateString()), l = (h) => {
    const w = new Date(o);
    w.setDate(o.getDate() + (h === "next" ? 1 : -1)), s(w);
  }, u = (h, w, y) => {
    const S = h.startDate.getHours(), g = h.startDate.getMinutes(), m = h.endDate ? h.endDate.getHours() : S + 1, v = h.endDate ? h.endDate.getMinutes() : 0, b = S + g / 60, k = m + v / 60, C = k - b, E = w.filter((A) => {
      if (A.id === h.id) return !0;
      const O = A.startDate.getHours() + A.startDate.getMinutes() / 60, I = (A.endDate ? A.endDate.getHours() : A.startDate.getHours() + 1) + (A.endDate ? A.endDate.getMinutes() / 60 : 0);
      return b < I && k > O;
    }), P = E.length, R = E.findIndex((A) => A.id === h.id), D = P > 1 ? 100 / P : 100, N = P > 1 ? R * D : 0;
    return {
      top: `${b * 80}px`,
      // 80px per hour for day view
      height: `${C * 80}px`,
      // Accurate height based on actual duration
      left: `${N}%`,
      width: `${D}%`
    };
  }, c = a(), d = {
    clubs: "bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100 border-purple-200 dark:border-purple-700",
    unbc: "bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 border-green-200 dark:border-green-700",
    organizations: "bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100 border-red-200 dark:border-red-700",
    sports: "bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 border-blue-200 dark:border-blue-700"
  }, f = "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-600";
  return /* @__PURE__ */ p.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ p.jsx(
        "button",
        {
          onClick: () => l("prev"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ p.jsx($v, { className: "h-5 w-5" })
        }
      ),
      /* @__PURE__ */ p.jsx("h2", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: o.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }) }),
      /* @__PURE__ */ p.jsx(
        "button",
        {
          onClick: () => l("next"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ p.jsx(Uv, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden", children: /* @__PURE__ */ p.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ p.jsx("div", { className: "w-20 border-r border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700", children: i.map((h) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] p-3 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600 flex items-start", children: h === 0 ? "12 AM" : h === 12 ? "12 PM" : h > 12 ? `${h - 12} PM` : `${h} AM` }, h)) }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex-1 relative", children: [
        i.map((h) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] border-b border-gray-200 dark:border-gray-600" }, h)),
        c.map((h, w) => {
          const y = t[h.id], S = y != null && y.category && d[y.category] ? d[y.category] : f, g = u(h, c);
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `absolute ${S} border rounded-lg p-2 text-sm z-20 overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow event-card`,
              style: {
                ...g,
                margin: "2px"
              },
              onClick: (m) => {
                m.stopPropagation(), r == null || r(h);
              },
              children: [
                /* @__PURE__ */ p.jsx("div", { className: "font-semibold leading-tight truncate", children: h.title }),
                /* @__PURE__ */ p.jsxs("div", { className: "text-xs opacity-75 leading-tight", children: [
                  h.startDate.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: !0
                  }),
                  h.endDate && ` - ${h.endDate.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: !0
                  })}`
                ] }),
                y && /* @__PURE__ */ p.jsxs("div", { className: "text-xs leading-tight", children: [
                  /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ p.jsx(Ps, { className: "h-2.5 w-2.5" }),
                    /* @__PURE__ */ p.jsx("span", { className: "truncate", children: y.location })
                  ] }),
                  y.organization && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ p.jsx(WE, { className: "h-2.5 w-2.5" }),
                    /* @__PURE__ */ p.jsx("span", { className: "truncate opacity-75", children: y.organization })
                  ] })
                ] })
              ]
            },
            h.id
          );
        })
      ] })
    ] }) })
  ] });
}
function gR({ events: e, eventMetadata: t, onEventClick: n }) {
  const [r, o] = ve.useState(/* @__PURE__ */ new Date()), [s, i] = ve.useState(/* @__PURE__ */ new Date()), a = () => {
    i((v) => new Date(v.getFullYear(), v.getMonth() - 1, 1));
  }, l = () => {
    i((v) => new Date(v.getFullYear(), v.getMonth() + 1, 1));
  }, u = (v) => v.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), c = () => r ? e.filter((v) => {
    const b = new Date(v.startDate);
    return b.getDate() === r.getDate() && b.getMonth() === r.getMonth() && b.getFullYear() === r.getFullYear();
  }) : [], d = (v) => e.some((b) => {
    const k = new Date(b.startDate);
    return k.getDate() === v.getDate() && k.getMonth() === v.getMonth() && k.getFullYear() === v.getFullYear();
  }), f = c(), h = s.getFullYear(), w = s.getMonth(), y = new Date(h, w, 1), S = new Date(y);
  S.setDate(S.getDate() - y.getDay());
  const g = [], m = new Date(S);
  for (let v = 0; v < 42; v++)
    g.push(new Date(m)), m.setDate(m.getDate() + 1);
  return /* @__PURE__ */ p.jsxs(ad, { className: "w-full py-4 mobile-calendar bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700", children: [
    /* @__PURE__ */ p.jsxs(Ty, { className: "px-4", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between mb-4 gap-2", children: [
        /* @__PURE__ */ p.jsxs(
          Pn,
          {
            variant: "outline",
            size: "sm",
            onClick: a,
            className: "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 flex-shrink-0",
            children: [
              /* @__PURE__ */ p.jsx(Vv, { className: "h-4 w-4" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Prev" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsx("h3", { className: "text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 text-center flex-1 min-w-0 truncate", children: s.toLocaleDateString("en-US", { month: "long", year: "numeric" }) }),
        /* @__PURE__ */ p.jsxs(
          Pn,
          {
            variant: "outline",
            size: "sm",
            onClick: l,
            className: "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 flex-shrink-0",
            children: [
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Next" }),
              /* @__PURE__ */ p.jsx(zv, { className: "h-4 w-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-7 gap-1 mb-4", children: [
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((v) => /* @__PURE__ */ p.jsx("div", { className: "text-center text-sm font-medium py-2 text-gray-600 dark:text-gray-400", children: v }, v)),
        g.map((v, b) => {
          const k = v.getMonth() === w, C = r && v.getDate() === r.getDate() && v.getMonth() === r.getMonth() && v.getFullYear() === r.getFullYear(), E = v.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), P = d(v);
          return /* @__PURE__ */ p.jsxs(
            "button",
            {
              onClick: () => o(v),
              className: `
                  p-2 text-sm rounded transition-colors relative focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800
                  ${k ? "text-gray-900 dark:text-gray-100" : "text-gray-400 dark:text-gray-500"}
                  ${C ? "bg-blue-500 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-700" : "hover:bg-gray-100 dark:hover:bg-gray-600"}
                  ${E && !C ? "bg-gray-200 dark:bg-gray-600 font-semibold" : ""}
                `,
              children: [
                v.getDate(),
                P && /* @__PURE__ */ p.jsx(
                  "span",
                  {
                    className: "absolute top-1 right-1 w-2 h-2 bg-red-500 dark:bg-red-400 rounded-full",
                    "aria-label": "Events available"
                  }
                )
              ]
            },
            b
          );
        })
      ] })
    ] }),
    /* @__PURE__ */ p.jsxs(yb, { className: "flex flex-col items-start gap-3 border-t border-gray-200 dark:border-gray-600 px-4 !pt-4", children: [
      /* @__PURE__ */ p.jsx("div", { className: "flex w-full items-center justify-between px-1", children: /* @__PURE__ */ p.jsx("div", { className: "text-sm font-medium text-gray-900 dark:text-gray-100", children: r == null ? void 0 : r.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }) }) }),
      /* @__PURE__ */ p.jsx("div", { className: "flex w-full flex-col gap-2", children: f.length === 0 ? /* @__PURE__ */ p.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400 text-center py-4", children: "No events on this day" }) : f.map((v) => {
        const b = t[v.id], k = {
          clubs: "after:bg-purple-500",
          unbc: "after:bg-green-500",
          organizations: "after:bg-red-500",
          sports: "after:bg-blue-500"
        }, C = b != null && b.category && k[b.category] ? k[b.category] : "after:bg-gray-500";
        return /* @__PURE__ */ p.jsxs(
          "button",
          {
            className: `bg-gray-50 dark:bg-gray-700 relative rounded-md p-2 pl-6 text-sm text-left w-full after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${C}`,
            onClick: () => n == null ? void 0 : n(v),
            children: [
              /* @__PURE__ */ p.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100", children: v.title }),
              /* @__PURE__ */ p.jsxs("div", { className: "text-muted-foreground dark:text-gray-400 text-xs", children: [
                u(v.startDate),
                " - ",
                u(v.endDate),
                b && ` • ${b.location}`
              ] })
            ]
          },
          v.id
        );
      }) })
    ] })
  ] });
}
function yR({ events: e, eventMetadata: t, onEventClick: n }) {
  const r = (i) => i.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), o = [...e].sort((i, a) => i.startDate.getTime() - a.startDate.getTime()), s = o.reduce((i, a) => {
    const l = a.startDate.toDateString();
    return i[l] || (i[l] = []), i[l].push(a), i;
  }, {});
  return /* @__PURE__ */ p.jsx("div", { className: "space-y-6", children: o.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-12 text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ p.jsx(hs, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
    /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-medium mb-2", children: "No events found" }),
    /* @__PURE__ */ p.jsx("p", { children: "Try adjusting your filters to see more events." })
  ] }) : Object.entries(s).map(([i, a]) => {
    const l = new Date(i), u = l.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), c = l.toDateString() === new Date(Date.now() + 864e5).toDateString();
    let d = l.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    });
    return u ? d = `Today, ${d}` : c && (d = `Tomorrow, ${d}`), /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: d }),
        /* @__PURE__ */ p.jsx("div", { className: "flex-1 h-px bg-gray-200 dark:bg-gray-600" }),
        /* @__PURE__ */ p.jsxs("span", { className: "text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full", children: [
          a.length,
          " event",
          a.length > 1 ? "s" : ""
        ] })
      ] }),
      /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: a.map((f) => {
        const h = t[f.id], w = {
          clubs: "after:bg-purple-500",
          unbc: "after:bg-green-500",
          organizations: "after:bg-red-500",
          sports: "after:bg-blue-500"
        }, y = h != null && h.category && w[h.category] ? w[h.category] : "after:bg-gray-500";
        return /* @__PURE__ */ p.jsxs(
          "div",
          {
            className: `bg-muted dark:bg-gray-700 relative rounded-md p-3 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors ${y}`,
            onClick: () => n == null ? void 0 : n(f),
            children: [
              /* @__PURE__ */ p.jsxs("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ p.jsxs("div", { className: "flex-grow min-w-0", children: [
                  /* @__PURE__ */ p.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 mb-2", children: f.title }),
                  /* @__PURE__ */ p.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                      /* @__PURE__ */ p.jsx(Xr, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsxs("span", { children: [
                        r(f.startDate),
                        " - ",
                        r(f.endDate)
                      ] })
                    ] }),
                    (h == null ? void 0 : h.location) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                      /* @__PURE__ */ p.jsx(Ps, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsx("span", { children: h.location })
                    ] }),
                    (h == null ? void 0 : h.organization) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                      /* @__PURE__ */ p.jsx(Va, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsx("span", { children: h.organization })
                    ] })
                  ] })
                ] }),
                h && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: h.cost })
              ] }),
              (h == null ? void 0 : h.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-2", children: /* @__PURE__ */ p.jsx(Qr, { variant: "outline", size: "sm", children: "Registration Required" }) })
            ]
          },
          f.id
        );
      }) })
    ] }, i);
  }) });
}
function vR({ events: e, eventMetadata: t, onEventClick: n }) {
  const r = (i) => i.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), o = [...e].sort((i, a) => i.startDate.getTime() - a.startDate.getTime()), s = o.reduce((i, a) => {
    const l = a.startDate.toDateString();
    return i[l] || (i[l] = []), i[l].push(a), i;
  }, {});
  return /* @__PURE__ */ p.jsx("div", { className: "space-y-6", children: o.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-12 text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ p.jsx(hs, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
    /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-medium mb-2", children: "No events found" }),
    /* @__PURE__ */ p.jsx("p", { children: "Try adjusting your filters to see more events." })
  ] }) : Object.entries(s).map(([i, a]) => {
    const l = new Date(i), u = l.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), c = l.toDateString() === new Date(Date.now() + 864e5).toDateString();
    let d = l.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    });
    return u ? d = `Today, ${d}` : c && (d = `Tomorrow, ${d}`), /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ p.jsx("h3", { className: "text-base font-semibold text-gray-900 dark:text-gray-100", children: d }),
        /* @__PURE__ */ p.jsx("div", { className: "flex-1 h-px bg-gray-200 dark:bg-gray-600" }),
        /* @__PURE__ */ p.jsx("span", { className: "text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full", children: a.length })
      ] }),
      /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: a.map((f) => {
        const h = t[f.id], w = {
          clubs: "after:bg-purple-500",
          unbc: "after:bg-green-500",
          organizations: "after:bg-red-500",
          sports: "after:bg-blue-500"
        }, y = h != null && h.category && w[h.category] ? w[h.category] : "after:bg-gray-500";
        return /* @__PURE__ */ p.jsxs(
          "div",
          {
            className: `bg-muted dark:bg-gray-700 relative rounded-md p-3 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors ${y}`,
            onClick: () => n == null ? void 0 : n(f),
            children: [
              /* @__PURE__ */ p.jsxs("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ p.jsxs("div", { className: "flex-grow min-w-0", children: [
                  /* @__PURE__ */ p.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 mb-2", children: f.title }),
                  /* @__PURE__ */ p.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                      /* @__PURE__ */ p.jsx(Xr, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsxs("span", { children: [
                        r(f.startDate),
                        " - ",
                        r(f.endDate)
                      ] })
                    ] }),
                    (h == null ? void 0 : h.location) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                      /* @__PURE__ */ p.jsx(Ps, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsx("span", { children: h.location })
                    ] }),
                    (h == null ? void 0 : h.organization) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                      /* @__PURE__ */ p.jsx(Va, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsx("span", { children: h.organization })
                    ] })
                  ] })
                ] }),
                h && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: h.cost })
              ] }),
              (h == null ? void 0 : h.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-2", children: /* @__PURE__ */ p.jsx(Qr, { variant: "outline", size: "sm", children: "Registration Required" }) })
            ]
          },
          f.id
        );
      }) })
    ] }, i);
  }) });
}
function xR() {
  const [e, t] = x.useState("month"), [n, r] = x.useState(/* @__PURE__ */ new Date()), [o, s] = x.useState(null), [i, a] = x.useState(!1);
  ve.useEffect(() => {
    const N = document.createElement("style");
    return N.textContent = `
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
    `, document.head.appendChild(N), () => {
      document.head.removeChild(N);
    };
  }, []);
  const [l, u] = x.useState("all"), [c, d] = x.useState("all"), [f, h] = x.useState("");
  ve.useEffect(() => {
    l !== "clubs" && l !== "unbc" && d("all");
  }, [l]);
  const w = !1;
  bP();
  const y = a0(), S = EP(), {
    events: g,
    eventMetadata: m,
    loading: v,
    error: b,
    setFilters: k
  } = y, C = S.organizations, E = S.loading;
  ve.useEffect(() => {
    k && k({});
  }, [k, w]);
  const P = ve.useMemo(() => {
    let N = g;
    if (l !== "all" && (N = N.filter((A) => {
      const O = m[A.id];
      return (O == null ? void 0 : O.category) === l;
    })), c !== "all" && (N = N.filter((A) => {
      const O = m[A.id], I = C.find((K) => K.id.toString() === c);
      return I && (O == null ? void 0 : O.organization) === I.title.rendered;
    })), f) {
      const A = f.toLowerCase();
      N = N.filter((O) => {
        var K, F, V;
        const I = m[O.id];
        return O.title.toLowerCase().includes(A) || ((K = I == null ? void 0 : I.description) == null ? void 0 : K.toLowerCase().includes(A)) || ((F = I == null ? void 0 : I.location) == null ? void 0 : F.toLowerCase().includes(A)) || ((V = I == null ? void 0 : I.organization) == null ? void 0 : V.toLowerCase().includes(A));
      });
    }
    return N;
  }, [g, m, l, c, f, C]), R = (N) => {
    r(N), t("day");
  }, D = (N) => {
    s(N), a(!0);
  };
  return v || E ? /* @__PURE__ */ p.jsx("div", { className: "w-full flex items-center justify-center py-12", children: /* @__PURE__ */ p.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ p.jsx(Wv, { className: "h-8 w-8 animate-spin mx-auto mb-4" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-gray-600", children: "Loading calendar..." })
  ] }) }) : b ? /* @__PURE__ */ p.jsx("div", { className: "w-full py-12", children: /* @__PURE__ */ p.jsx(ad, { className: "max-w-md mx-auto", children: /* @__PURE__ */ p.jsxs(Ty, { className: "pt-6 text-center", children: [
    /* @__PURE__ */ p.jsxs("p", { className: "text-red-600 mb-4", children: [
      "Error loading events: ",
      b
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
    /* @__PURE__ */ p.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm unbc-calendar-view", children: /* @__PURE__ */ p.jsxs(xP, { value: e, onValueChange: t, className: "w-full", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "hidden md:block p-6 pb-0", children: [
        /* @__PURE__ */ p.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ p.jsxs(Wp, { className: "h-9 bg-gray-100 dark:bg-gray-700 p-1", children: [
          /* @__PURE__ */ p.jsxs(zn, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(Xr, { className: "h-3 w-3" }),
            "Day"
          ] }),
          /* @__PURE__ */ p.jsxs(zn, { value: "week", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(Di, { className: "h-3 w-3" }),
            "Week"
          ] }),
          /* @__PURE__ */ p.jsxs(zn, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(hs, { className: "h-3 w-3" }),
            "Month"
          ] }),
          /* @__PURE__ */ p.jsxs(zn, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(Up, { className: "h-3 w-3" }),
            "List"
          ] })
        ] }) }),
        /* @__PURE__ */ p.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3", children: [
          /* @__PURE__ */ p.jsxs(ni, { value: l, onValueChange: u, children: [
            /* @__PURE__ */ p.jsx(oi, { className: "w-40 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsx(ri, { placeholder: "All Categories" }) }),
            /* @__PURE__ */ p.jsxs(si, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600", children: [
              /* @__PURE__ */ p.jsx(We, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All" }),
              /* @__PURE__ */ p.jsx(We, { value: "clubs", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Clubs" }),
              /* @__PURE__ */ p.jsx(We, { value: "unbc", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "UNBC" }),
              /* @__PURE__ */ p.jsx(We, { value: "organizations", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Organizations" }),
              /* @__PURE__ */ p.jsx(We, { value: "sports", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Sports" })
            ] })
          ] }),
          (l === "clubs" || l === "unbc") && /* @__PURE__ */ p.jsxs(ni, { value: c, onValueChange: d, children: [
            /* @__PURE__ */ p.jsx(oi, { className: "w-44 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 [&>span]:truncate [&>span]:block", children: /* @__PURE__ */ p.jsx(ri, { placeholder: "All Organizations" }) }),
            /* @__PURE__ */ p.jsxs(si, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 max-h-[200px] overflow-y-auto", children: [
              /* @__PURE__ */ p.jsx(We, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Organizations" }),
              C.map((N) => /* @__PURE__ */ p.jsx(
                We,
                {
                  value: N.id.toString(),
                  className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600",
                  children: N.title.rendered
                },
                N.id
              ))
            ] })
          ] }),
          /* @__PURE__ */ p.jsx(
            Yu,
            {
              placeholder: "Search events...",
              onChange: (N) => h(N.target.value),
              className: "w-40 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "md:hidden", children: [
        /* @__PURE__ */ p.jsx("div", { className: "p-6 pb-0 flex justify-center", children: /* @__PURE__ */ p.jsxs(Wp, { className: "h-9 bg-gray-100 dark:bg-gray-700 p-1", children: [
          /* @__PURE__ */ p.jsxs(zn, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(Xr, { className: "h-3 w-3" }),
            "Day"
          ] }),
          /* @__PURE__ */ p.jsxs(zn, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(hs, { className: "h-3 w-3" }),
            "Month"
          ] }),
          /* @__PURE__ */ p.jsxs(zn, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(Up, { className: "h-3 w-3" }),
            "List"
          ] })
        ] }) }),
        /* @__PURE__ */ p.jsxs("div", { className: "p-6 pt-4 space-y-4", children: [
          /* @__PURE__ */ p.jsxs(ni, { value: l, onValueChange: u, children: [
            /* @__PURE__ */ p.jsx(oi, { className: "w-full h-10 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsx(ri, { placeholder: "All Categories" }) }),
            /* @__PURE__ */ p.jsxs(si, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600", children: [
              /* @__PURE__ */ p.jsx(We, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All" }),
              /* @__PURE__ */ p.jsx(We, { value: "clubs", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Clubs" }),
              /* @__PURE__ */ p.jsx(We, { value: "unbc", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "UNBC" }),
              /* @__PURE__ */ p.jsx(We, { value: "organizations", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Organizations" }),
              /* @__PURE__ */ p.jsx(We, { value: "sports", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Sports" })
            ] })
          ] }),
          (l === "clubs" || l === "unbc") && /* @__PURE__ */ p.jsxs(ni, { value: c, onValueChange: d, children: [
            /* @__PURE__ */ p.jsx(oi, { className: "w-full h-10 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsx(ri, { placeholder: "All Organizations", className: "truncate" }) }),
            /* @__PURE__ */ p.jsxs(si, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 max-h-[200px] overflow-y-auto", children: [
              /* @__PURE__ */ p.jsx(We, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Organizations" }),
              C.map((N) => /* @__PURE__ */ p.jsx(
                We,
                {
                  value: N.id.toString(),
                  className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600",
                  children: N.title.rendered
                },
                N.id
              ))
            ] })
          ] }),
          /* @__PURE__ */ p.jsx(
            Yu,
            {
              placeholder: "Search events...",
              onChange: (N) => h(N.target.value),
              className: "w-full border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs(ai, { value: "month", className: "p-6 pt-4", children: [
        /* @__PURE__ */ p.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ p.jsx(
          pR,
          {
            events: P,
            eventMetadata: m,
            onDateClick: R,
            onEventClick: D
          }
        ) }),
        /* @__PURE__ */ p.jsx("div", { className: "block md:hidden mobile-calendar", children: /* @__PURE__ */ p.jsx(
          gR,
          {
            events: P,
            eventMetadata: m,
            onEventClick: D
          }
        ) })
      ] }),
      /* @__PURE__ */ p.jsx(ai, { value: "week", className: "p-6 pt-4", children: /* @__PURE__ */ p.jsx(
        hR,
        {
          events: P,
          eventMetadata: m,
          onEventClick: D
        }
      ) }),
      /* @__PURE__ */ p.jsx(ai, { value: "day", className: "p-6 pt-4", children: /* @__PURE__ */ p.jsx(
        mR,
        {
          events: P,
          eventMetadata: m,
          initialDate: n,
          onEventClick: D
        }
      ) }),
      /* @__PURE__ */ p.jsxs(ai, { value: "list", className: "p-6 pt-4", children: [
        /* @__PURE__ */ p.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ p.jsx(yR, { events: P, eventMetadata: m, onEventClick: D }) }),
        /* @__PURE__ */ p.jsx("div", { className: "block md:hidden", children: /* @__PURE__ */ p.jsx(vR, { events: P, eventMetadata: m, onEventClick: D }) })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsx(
      j0,
      {
        event: o,
        eventMetadata: m,
        open: i,
        onOpenChange: a
      }
    )
  ] });
}
function uw({
  events: e,
  eventMetadata: t,
  organizationId: n,
  organizationName: r,
  limit: o,
  showPastEvents: s = !1,
  onEventClick: i
}) {
  const a = (c) => c.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), { filteredEvents: l, eventsByDate: u } = ve.useMemo(() => {
    let c = e;
    const d = /* @__PURE__ */ new Date();
    (n || r) && (c = c.filter((h) => {
      var y;
      const w = t[h.id];
      return r ? (w == null ? void 0 : w.organization) === r : n ? ((y = w == null ? void 0 : w.organization_id) == null ? void 0 : y.toString()) === n : !0;
    })), s || (c = c.filter((h) => h.startDate >= d)), c.sort((h, w) => h.startDate.getTime() - w.startDate.getTime()), o && o > 0 && (c = c.slice(0, o));
    const f = c.reduce((h, w) => {
      const y = w.startDate.toDateString();
      return h[y] || (h[y] = []), h[y].push(w), h;
    }, {});
    return { filteredEvents: c, eventsByDate: f };
  }, [e, t, n, r, o, s]);
  return l.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-8 text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ p.jsx(hs, { className: "mx-auto h-8 w-8 mb-3 opacity-50" }),
    /* @__PURE__ */ p.jsx("h3", { className: "text-base font-medium mb-1", children: "No upcoming events" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-sm", children: r ? `${r} has no upcoming events.` : "No events found for this organization." })
  ] }) : /* @__PURE__ */ p.jsxs("div", { className: "space-y-6", children: [
    r && /* @__PURE__ */ p.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ p.jsxs("h3", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: [
        r,
        " Events"
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
        l.length,
        " upcoming event",
        l.length !== 1 ? "s" : ""
      ] })
    ] }),
    Object.entries(u).map(([c, d]) => {
      const f = new Date(c), h = f.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), w = f.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let y = f.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      });
      return h ? y = `Today, ${y}` : w && (y = `Tomorrow, ${y}`), /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: y }),
          /* @__PURE__ */ p.jsx("div", { className: "flex-1 h-px bg-gray-200 dark:bg-gray-600" }),
          /* @__PURE__ */ p.jsxs("span", { className: "text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full", children: [
            d.length,
            " event",
            d.length > 1 ? "s" : ""
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: d.map((S) => {
          const g = t[S.id], v = g ? {
            academic: "after:bg-green-500",
            social: "after:bg-orange-500",
            cultural: "after:bg-purple-500",
            sports: "after:bg-red-500",
            professional: "after:bg-teal-500",
            wellness: "after:bg-blue-500",
            volunteer: "after:bg-yellow-500",
            arts: "after:bg-pink-500"
          }[g.category] : "after:bg-gray-500";
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 relative rounded-lg p-4 pl-6 hover:shadow-md transition-all cursor-pointer after:absolute after:inset-y-3 after:left-3 after:w-1 after:rounded-full ${v}`,
              onClick: () => i == null ? void 0 : i(S),
              children: [
                /* @__PURE__ */ p.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ p.jsxs("div", { className: "flex-grow min-w-0", children: [
                    /* @__PURE__ */ p.jsx("div", { className: "font-semibold text-gray-900 dark:text-gray-100 mb-2", children: S.title }),
                    /* @__PURE__ */ p.jsx("div", { className: "flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ p.jsx(Xr, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsxs("span", { children: [
                        a(S.startDate),
                        " - ",
                        a(S.endDate)
                      ] })
                    ] }) }),
                    g && /* @__PURE__ */ p.jsxs("div", { className: "space-y-1 text-sm text-gray-600 dark:text-gray-400", children: [
                      g.location && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(Ps, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: g.location })
                      ] }),
                      !r && g.organization && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(Va, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: g.organization })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col items-end gap-2 flex-shrink-0 ml-4", children: [
                    (g == null ? void 0 : g.cost) && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400", children: g.cost }),
                    (g == null ? void 0 : g.category) && /* @__PURE__ */ p.jsx(Qr, { variant: "secondary", size: "sm", className: "text-xs", children: g.category.charAt(0).toUpperCase() + g.category.slice(1) })
                  ] })
                ] }),
                (g == null ? void 0 : g.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-3 pt-2 border-t border-gray-100 dark:border-gray-700", children: /* @__PURE__ */ p.jsx(Qr, { variant: "outline", size: "sm", children: "📝 Registration Required" }) })
              ]
            },
            S.id
          );
        }) })
      ] }, c);
    })
  ] });
}
function wR({
  organizationId: e,
  organizationName: t,
  limit: n = 5,
  showPastEvents: r = !1
}) {
  const [o, s] = x.useState(null), [i, a] = x.useState(!1), {
    events: l,
    eventMetadata: u,
    loading: c,
    error: d
  } = a0({
    per_page: 1e3
    // Get all events to filter client-side
  }), f = (h) => {
    s(h), a(!0);
  };
  return c ? /* @__PURE__ */ p.jsx("div", { className: "w-full flex items-center justify-center py-8", children: /* @__PURE__ */ p.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ p.jsx(Wv, { className: "h-6 w-6 animate-spin mx-auto mb-2" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-gray-600 text-sm", children: "Loading events..." })
  ] }) }) : d ? /* @__PURE__ */ p.jsx("div", { className: "w-full py-8", children: /* @__PURE__ */ p.jsx("div", { className: "max-w-md mx-auto bg-red-50 border border-red-200 rounded-lg p-4", children: /* @__PURE__ */ p.jsxs("p", { className: "text-red-600 text-sm", children: [
    "Error loading events: ",
    d
  ] }) }) }) : /* @__PURE__ */ p.jsxs("div", { className: "unbc-organization-events", children: [
    /* @__PURE__ */ p.jsx(
      uw,
      {
        events: l,
        eventMetadata: u,
        organizationId: e,
        organizationName: t,
        limit: n,
        showPastEvents: r,
        onEventClick: f
      }
    ),
    /* @__PURE__ */ p.jsx(
      j0,
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
  const n = Aa(t);
  t.dataset.view, t.dataset.categoryFilter, t.dataset.organizationFilter, n.render(
    /* @__PURE__ */ p.jsx(ve.StrictMode, { children: /* @__PURE__ */ p.jsx(xR, {}) })
  );
};
window.renderUNBCEventsList = function(e) {
  const t = document.getElementById(e);
  if (!t) {
    console.error("Events list container not found:", e);
    return;
  }
  const n = Aa(t), r = t.dataset.organizationId || "", o = t.dataset.organizationName || "", s = parseInt(t.dataset.limit) || 5, i = t.dataset.showPast === "true";
  n.render(
    /* @__PURE__ */ p.jsx(ve.StrictMode, { children: /* @__PURE__ */ p.jsx(
      SR,
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
  const n = Aa(t), r = t.dataset.organizationId || "", o = t.dataset.organizationName || "", s = parseInt(t.dataset.limit) || 5, i = t.dataset.showPast === "true";
  n.render(
    /* @__PURE__ */ p.jsx(ve.StrictMode, { children: /* @__PURE__ */ p.jsx(
      wR,
      {
        organizationId: r,
        organizationName: o,
        limit: s,
        showPastEvents: i
      }
    ) })
  );
};
function SR({ organizationId: e, organizationName: t, limit: n, showPastEvents: r }) {
  return /* @__PURE__ */ p.jsx(
    uw,
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
