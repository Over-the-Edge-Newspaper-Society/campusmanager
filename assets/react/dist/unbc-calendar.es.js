function fw(e, t) {
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
function lm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var um = { exports: {} }, pa = {}, cm = { exports: {} }, W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xs = Symbol.for("react.element"), pw = Symbol.for("react.portal"), hw = Symbol.for("react.fragment"), mw = Symbol.for("react.strict_mode"), gw = Symbol.for("react.profiler"), yw = Symbol.for("react.provider"), vw = Symbol.for("react.context"), xw = Symbol.for("react.forward_ref"), ww = Symbol.for("react.suspense"), Sw = Symbol.for("react.memo"), kw = Symbol.for("react.lazy"), lf = Symbol.iterator;
function bw(e) {
  return e === null || typeof e != "object" ? null : (e = lf && e[lf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var dm = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, fm = Object.assign, pm = {};
function eo(e, t, n) {
  this.props = e, this.context = t, this.refs = pm, this.updater = n || dm;
}
eo.prototype.isReactComponent = {};
eo.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
eo.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function hm() {
}
hm.prototype = eo.prototype;
function fc(e, t, n) {
  this.props = e, this.context = t, this.refs = pm, this.updater = n || dm;
}
var pc = fc.prototype = new hm();
pc.constructor = fc;
fm(pc, eo.prototype);
pc.isPureReactComponent = !0;
var uf = Array.isArray, mm = Object.prototype.hasOwnProperty, hc = { current: null }, gm = { key: !0, ref: !0, __self: !0, __source: !0 };
function ym(e, t, n) {
  var r, o = {}, s = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (s = "" + t.key), t) mm.call(t, r) && !gm.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: xs, type: e, key: s, ref: i, props: o, _owner: hc.current };
}
function Cw(e, t) {
  return { $$typeof: xs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function mc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xs;
}
function Pw(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var cf = /\/+/g;
function Ga(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Pw("" + e.key) : t.toString(36);
}
function fi(e, t, n, r, o) {
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
        case xs:
        case pw:
          i = !0;
      }
  }
  if (i) return i = e, o = o(i), e = r === "" ? "." + Ga(i, 0) : r, uf(o) ? (n = "", e != null && (n = e.replace(cf, "$&/") + "/"), fi(o, t, n, "", function(u) {
    return u;
  })) : o != null && (mc(o) && (o = Cw(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(cf, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", uf(e)) for (var a = 0; a < e.length; a++) {
    s = e[a];
    var l = r + Ga(s, a);
    i += fi(s, t, n, l, o);
  }
  else if (l = bw(e), typeof l == "function") for (e = l.call(e), a = 0; !(s = e.next()).done; ) s = s.value, l = r + Ga(s, a++), i += fi(s, t, n, l, o);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function js(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return fi(e, r, "", "", function(s) {
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
var Ue = { current: null }, pi = { transition: null }, Tw = { ReactCurrentDispatcher: Ue, ReactCurrentBatchConfig: pi, ReactCurrentOwner: hc };
function vm() {
  throw Error("act(...) is not supported in production builds of React.");
}
W.Children = { map: js, forEach: function(e, t, n) {
  js(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return js(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return js(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!mc(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
W.Component = eo;
W.Fragment = hw;
W.Profiler = gw;
W.PureComponent = fc;
W.StrictMode = mw;
W.Suspense = ww;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tw;
W.act = vm;
W.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = fm({}, e.props), o = e.key, s = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, i = hc.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) mm.call(t, l) && !gm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: xs, type: e.type, key: o, ref: s, props: r, _owner: i };
};
W.createContext = function(e) {
  return e = { $$typeof: vw, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: yw, _context: e }, e.Consumer = e;
};
W.createElement = ym;
W.createFactory = function(e) {
  var t = ym.bind(null, e);
  return t.type = e, t;
};
W.createRef = function() {
  return { current: null };
};
W.forwardRef = function(e) {
  return { $$typeof: xw, render: e };
};
W.isValidElement = mc;
W.lazy = function(e) {
  return { $$typeof: kw, _payload: { _status: -1, _result: e }, _init: Ew };
};
W.memo = function(e, t) {
  return { $$typeof: Sw, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function(e) {
  var t = pi.transition;
  pi.transition = {};
  try {
    e();
  } finally {
    pi.transition = t;
  }
};
W.unstable_act = vm;
W.useCallback = function(e, t) {
  return Ue.current.useCallback(e, t);
};
W.useContext = function(e) {
  return Ue.current.useContext(e);
};
W.useDebugValue = function() {
};
W.useDeferredValue = function(e) {
  return Ue.current.useDeferredValue(e);
};
W.useEffect = function(e, t) {
  return Ue.current.useEffect(e, t);
};
W.useId = function() {
  return Ue.current.useId();
};
W.useImperativeHandle = function(e, t, n) {
  return Ue.current.useImperativeHandle(e, t, n);
};
W.useInsertionEffect = function(e, t) {
  return Ue.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function(e, t) {
  return Ue.current.useLayoutEffect(e, t);
};
W.useMemo = function(e, t) {
  return Ue.current.useMemo(e, t);
};
W.useReducer = function(e, t, n) {
  return Ue.current.useReducer(e, t, n);
};
W.useRef = function(e) {
  return Ue.current.useRef(e);
};
W.useState = function(e) {
  return Ue.current.useState(e);
};
W.useSyncExternalStore = function(e, t, n) {
  return Ue.current.useSyncExternalStore(e, t, n);
};
W.useTransition = function() {
  return Ue.current.useTransition();
};
W.version = "18.3.1";
cm.exports = W;
var x = cm.exports;
const ke = /* @__PURE__ */ lm(x), xm = /* @__PURE__ */ fw({
  __proto__: null,
  default: ke
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
var Dw = x, Nw = Symbol.for("react.element"), Aw = Symbol.for("react.fragment"), Rw = Object.prototype.hasOwnProperty, Mw = Dw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, jw = { key: !0, ref: !0, __self: !0, __source: !0 };
function wm(e, t, n) {
  var r, o = {}, s = null, i = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Rw.call(t, r) && !jw.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Nw, type: e, key: s, ref: i, props: o, _owner: Mw.current };
}
pa.Fragment = Aw;
pa.jsx = wm;
pa.jsxs = wm;
um.exports = pa;
var p = um.exports, Sm = { exports: {} }, st = {}, km = { exports: {} }, bm = {};
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
  function t(T, M) {
    var _ = T.length;
    T.push(M);
    e: for (; 0 < _; ) {
      var $ = _ - 1 >>> 1, ae = T[$];
      if (0 < o(ae, M)) T[$] = M, T[_] = ae, _ = $;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var M = T[0], _ = T.pop();
    if (_ !== M) {
      T[0] = _;
      e: for (var $ = 0, ae = T.length, Tt = ae >>> 1; $ < Tt; ) {
        var Re = 2 * ($ + 1) - 1, Dt = T[Re], ze = Re + 1, V = T[ze];
        if (0 > o(Dt, _)) ze < ae && 0 > o(V, Dt) ? (T[$] = V, T[ze] = _, $ = ze) : (T[$] = Dt, T[Re] = _, $ = Re);
        else if (ze < ae && 0 > o(V, _)) T[$] = V, T[ze] = _, $ = ze;
        else break e;
      }
    }
    return M;
  }
  function o(T, M) {
    var _ = T.sortIndex - M.sortIndex;
    return _ !== 0 ? _ : T.id - M.id;
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
  var l = [], u = [], c = 1, d = null, f = 3, g = !1, w = !1, y = !1, S = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(T) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u);
      else if (M.startTime <= T) r(u), M.sortIndex = M.expirationTime, t(l, M);
      else break;
      M = n(u);
    }
  }
  function k(T) {
    if (y = !1, v(T), !w) if (n(l) !== null) w = !0, O(b);
    else {
      var M = n(u);
      M !== null && I(k, M.startTime - T);
    }
  }
  function b(T, M) {
    w = !1, y && (y = !1, m(E), E = -1), g = !0;
    var _ = f;
    try {
      for (v(M), d = n(l); d !== null && (!(d.expirationTime > M) || T && !j()); ) {
        var $ = d.callback;
        if (typeof $ == "function") {
          d.callback = null, f = d.priorityLevel;
          var ae = $(d.expirationTime <= M);
          M = e.unstable_now(), typeof ae == "function" ? d.callback = ae : d === n(l) && r(l), v(M);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Tt = !0;
      else {
        var Re = n(u);
        Re !== null && I(k, Re.startTime - M), Tt = !1;
      }
      return Tt;
    } finally {
      d = null, f = _, g = !1;
    }
  }
  var C = !1, P = null, E = -1, N = 5, D = -1;
  function j() {
    return !(e.unstable_now() - D < N);
  }
  function R() {
    if (P !== null) {
      var T = e.unstable_now();
      D = T;
      var M = !0;
      try {
        M = P(!0, T);
      } finally {
        M ? z() : (C = !1, P = null);
      }
    } else C = !1;
  }
  var z;
  if (typeof h == "function") z = function() {
    h(R);
  };
  else if (typeof MessageChannel < "u") {
    var B = new MessageChannel(), Y = B.port2;
    B.port1.onmessage = R, z = function() {
      Y.postMessage(null);
    };
  } else z = function() {
    S(R, 0);
  };
  function O(T) {
    P = T, C || (C = !0, z());
  }
  function I(T, M) {
    E = S(function() {
      T(e.unstable_now());
    }, M);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, O(b));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(T) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var M = 3;
        break;
      default:
        M = f;
    }
    var _ = f;
    f = M;
    try {
      return T();
    } finally {
      f = _;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, M) {
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
      return M();
    } finally {
      f = _;
    }
  }, e.unstable_scheduleCallback = function(T, M, _) {
    var $ = e.unstable_now();
    switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? $ + _ : $) : _ = $, T) {
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
    return ae = _ + ae, T = { id: c++, callback: M, priorityLevel: T, startTime: _, expirationTime: ae, sortIndex: -1 }, _ > $ ? (T.sortIndex = _, t(u, T), n(l) === null && T === n(u) && (y ? (m(E), E = -1) : y = !0, I(k, _ - $))) : (T.sortIndex = ae, t(l, T), w || g || (w = !0, O(b))), T;
  }, e.unstable_shouldYield = j, e.unstable_wrapCallback = function(T) {
    var M = f;
    return function() {
      var _ = f;
      f = M;
      try {
        return T.apply(this, arguments);
      } finally {
        f = _;
      }
    };
  };
})(bm);
km.exports = bm;
var Lw = km.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _w = x, rt = Lw;
function A(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Cm = /* @__PURE__ */ new Set(), Go = {};
function ur(e, t) {
  $r(e, t), $r(e + "Capture", t);
}
function $r(e, t) {
  for (Go[e] = t, e = 0; e < t.length; e++) Cm.add(t[e]);
}
var Qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Hl = Object.prototype.hasOwnProperty, Ow = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, df = {}, ff = {};
function Iw(e) {
  return Hl.call(ff, e) ? !0 : Hl.call(df, e) ? !1 : Ow.test(e) ? ff[e] = !0 : (df[e] = !0, !1);
}
function Fw(e, t, n, r) {
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
function Vw(e, t, n, r) {
  if (t === null || typeof t > "u" || Fw(e, t, n, r)) return !0;
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
function We(e, t, n, r, o, s, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = i;
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ne[e] = new We(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ne[t] = new We(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ne[e] = new We(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ne[e] = new We(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ne[e] = new We(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ne[e] = new We(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ne[e] = new We(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ne[e] = new We(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ne[e] = new We(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  Ne[t] = new We(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(gc, yc);
  Ne[t] = new We(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(gc, yc);
  Ne[t] = new We(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ne[e] = new We(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new We("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ne[e] = new We(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function vc(e, t, n, r) {
  var o = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Vw(t, n, o, r) && (n = null), r || o === null ? Iw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rn = _w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ls = Symbol.for("react.element"), gr = Symbol.for("react.portal"), yr = Symbol.for("react.fragment"), xc = Symbol.for("react.strict_mode"), Kl = Symbol.for("react.profiler"), Pm = Symbol.for("react.provider"), Em = Symbol.for("react.context"), wc = Symbol.for("react.forward_ref"), Gl = Symbol.for("react.suspense"), Yl = Symbol.for("react.suspense_list"), Sc = Symbol.for("react.memo"), cn = Symbol.for("react.lazy"), Tm = Symbol.for("react.offscreen"), pf = Symbol.iterator;
function mo(e) {
  return e === null || typeof e != "object" ? null : (e = pf && e[pf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var fe = Object.assign, Ya;
function Eo(e) {
  if (Ya === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ya = t && t[1] || "";
  }
  return `
` + Ya + e;
}
var Xa = !1;
function Qa(e, t) {
  if (!e || Xa) return "";
  Xa = !0;
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
    Xa = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Eo(e) : "";
}
function zw(e) {
  switch (e.tag) {
    case 5:
      return Eo(e.type);
    case 16:
      return Eo("Lazy");
    case 13:
      return Eo("Suspense");
    case 19:
      return Eo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Qa(e.type, !1), e;
    case 11:
      return e = Qa(e.type.render, !1), e;
    case 1:
      return e = Qa(e.type, !0), e;
    default:
      return "";
  }
}
function Xl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case yr:
      return "Fragment";
    case gr:
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
    case Pm:
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
function Bw(e) {
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
function Dn(e) {
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
function Dm(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function $w(e) {
  var t = Dm(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function _s(e) {
  e._valueTracker || (e._valueTracker = $w(e));
}
function Nm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Dm(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ai(e) {
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
  n = Dn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Am(e, t) {
  t = t.checked, t != null && vc(e, "checked", t, !1);
}
function Zl(e, t) {
  Am(e, t);
  var n = Dn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ql(e, t.type, n) : t.hasOwnProperty("defaultValue") && ql(e, t.type, Dn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function mf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ql(e, t, n) {
  (t !== "number" || Ai(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var To = Array.isArray;
function jr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Dn(n), t = null, o = 0; o < e.length; o++) {
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
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return fe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function gf(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(A(92));
      if (To(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Dn(n) };
}
function Rm(e, t) {
  var n = Dn(t.value), r = Dn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function yf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Mm(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Mm(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Os, jm = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Os = Os || document.createElement("div"), Os.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Os.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
}, Uw = ["Webkit", "ms", "Moz", "O"];
Object.keys(Lo).forEach(function(e) {
  Uw.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Lo[t] = Lo[e];
  });
});
function Lm(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Lo.hasOwnProperty(e) && Lo[e] ? ("" + t).trim() : t + "px";
}
function _m(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Lm(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Ww = fe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function tu(e, t) {
  if (t) {
    if (Ww[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
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
function kc(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ou = null, Lr = null, _r = null;
function vf(e) {
  if (e = ks(e)) {
    if (typeof ou != "function") throw Error(A(280));
    var t = e.stateNode;
    t && (t = va(t), ou(e.stateNode, e.type, t));
  }
}
function Om(e) {
  Lr ? _r ? _r.push(e) : _r = [e] : Lr = e;
}
function Im() {
  if (Lr) {
    var e = Lr, t = _r;
    if (_r = Lr = null, vf(e), t) for (e = 0; e < t.length; e++) vf(t[e]);
  }
}
function Fm(e, t) {
  return e(t);
}
function Vm() {
}
var Za = !1;
function zm(e, t, n) {
  if (Za) return e(t, n);
  Za = !0;
  try {
    return Fm(e, t, n);
  } finally {
    Za = !1, (Lr !== null || _r !== null) && (Vm(), Im());
  }
}
function Xo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = va(n);
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
var su = !1;
if (Qt) try {
  var go = {};
  Object.defineProperty(go, "passive", { get: function() {
    su = !0;
  } }), window.addEventListener("test", go, go), window.removeEventListener("test", go, go);
} catch {
  su = !1;
}
function Hw(e, t, n, r, o, s, i, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var _o = !1, Ri = null, Mi = !1, iu = null, Kw = { onError: function(e) {
  _o = !0, Ri = e;
} };
function Gw(e, t, n, r, o, s, i, a, l) {
  _o = !1, Ri = null, Hw.apply(Kw, arguments);
}
function Yw(e, t, n, r, o, s, i, a, l) {
  if (Gw.apply(this, arguments), _o) {
    if (_o) {
      var u = Ri;
      _o = !1, Ri = null;
    } else throw Error(A(198));
    Mi || (Mi = !0, iu = u);
  }
}
function cr(e) {
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
function Bm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function xf(e) {
  if (cr(e) !== e) throw Error(A(188));
}
function Xw(e) {
  var t = e.alternate;
  if (!t) {
    if (t = cr(e), t === null) throw Error(A(188));
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
function $m(e) {
  return e = Xw(e), e !== null ? Um(e) : null;
}
function Um(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Um(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Wm = rt.unstable_scheduleCallback, wf = rt.unstable_cancelCallback, Qw = rt.unstable_shouldYield, Zw = rt.unstable_requestPaint, xe = rt.unstable_now, qw = rt.unstable_getCurrentPriorityLevel, bc = rt.unstable_ImmediatePriority, Hm = rt.unstable_UserBlockingPriority, ji = rt.unstable_NormalPriority, Jw = rt.unstable_LowPriority, Km = rt.unstable_IdlePriority, ha = null, _t = null;
function e1(e) {
  if (_t && typeof _t.onCommitFiberRoot == "function") try {
    _t.onCommitFiberRoot(ha, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var St = Math.clz32 ? Math.clz32 : r1, t1 = Math.log, n1 = Math.LN2;
function r1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (t1(e) / n1 | 0) | 0;
}
var Is = 64, Fs = 4194304;
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
function Li(e, t) {
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
function o1(e, t) {
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
function s1(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var i = 31 - St(s), a = 1 << i, l = o[i];
    l === -1 ? (!(a & n) || a & r) && (o[i] = o1(a, t)) : l <= t && (e.expiredLanes |= a), s &= ~a;
  }
}
function au(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Gm() {
  var e = Is;
  return Is <<= 1, !(Is & 4194240) && (Is = 64), e;
}
function qa(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ws(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - St(t), e[t] = n;
}
function i1(e, t) {
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
var Z = 0;
function Ym(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Xm, Pc, Qm, Zm, qm, lu = !1, Vs = [], vn = null, xn = null, wn = null, Qo = /* @__PURE__ */ new Map(), Zo = /* @__PURE__ */ new Map(), pn = [], a1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      vn = null;
      break;
    case "dragenter":
    case "dragleave":
      xn = null;
      break;
    case "mouseover":
    case "mouseout":
      wn = null;
      break;
    case "pointerover":
    case "pointerout":
      Qo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zo.delete(t.pointerId);
  }
}
function yo(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [o] }, t !== null && (t = ks(t), t !== null && Pc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function l1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return vn = yo(vn, e, t, n, r, o), !0;
    case "dragenter":
      return xn = yo(xn, e, t, n, r, o), !0;
    case "mouseover":
      return wn = yo(wn, e, t, n, r, o), !0;
    case "pointerover":
      var s = o.pointerId;
      return Qo.set(s, yo(Qo.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return s = o.pointerId, Zo.set(s, yo(Zo.get(s) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Jm(e) {
  var t = Gn(e.target);
  if (t !== null) {
    var n = cr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Bm(n), t !== null) {
          e.blockedOn = t, qm(e.priority, function() {
            Qm(n);
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
function hi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = uu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ru = r, n.target.dispatchEvent(r), ru = null;
    } else return t = ks(n), t !== null && Pc(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function kf(e, t, n) {
  hi(e) && n.delete(t);
}
function u1() {
  lu = !1, vn !== null && hi(vn) && (vn = null), xn !== null && hi(xn) && (xn = null), wn !== null && hi(wn) && (wn = null), Qo.forEach(kf), Zo.forEach(kf);
}
function vo(e, t) {
  e.blockedOn === t && (e.blockedOn = null, lu || (lu = !0, rt.unstable_scheduleCallback(rt.unstable_NormalPriority, u1)));
}
function qo(e) {
  function t(o) {
    return vo(o, e);
  }
  if (0 < Vs.length) {
    vo(Vs[0], e);
    for (var n = 1; n < Vs.length; n++) {
      var r = Vs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (vn !== null && vo(vn, e), xn !== null && vo(xn, e), wn !== null && vo(wn, e), Qo.forEach(t), Zo.forEach(t), n = 0; n < pn.length; n++) r = pn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pn.length && (n = pn[0], n.blockedOn === null); ) Jm(n), n.blockedOn === null && pn.shift();
}
var Or = rn.ReactCurrentBatchConfig, _i = !0;
function c1(e, t, n, r) {
  var o = Z, s = Or.transition;
  Or.transition = null;
  try {
    Z = 1, Ec(e, t, n, r);
  } finally {
    Z = o, Or.transition = s;
  }
}
function d1(e, t, n, r) {
  var o = Z, s = Or.transition;
  Or.transition = null;
  try {
    Z = 4, Ec(e, t, n, r);
  } finally {
    Z = o, Or.transition = s;
  }
}
function Ec(e, t, n, r) {
  if (_i) {
    var o = uu(e, t, n, r);
    if (o === null) ll(e, t, r, Oi, n), Sf(e, r);
    else if (l1(o, e, t, n, r)) r.stopPropagation();
    else if (Sf(e, r), t & 4 && -1 < a1.indexOf(e)) {
      for (; o !== null; ) {
        var s = ks(o);
        if (s !== null && Xm(s), s = uu(e, t, n, r), s === null && ll(e, t, r, Oi, n), s === o) break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else ll(e, t, r, null, n);
  }
}
var Oi = null;
function uu(e, t, n, r) {
  if (Oi = null, e = kc(r), e = Gn(e), e !== null) if (t = cr(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Bm(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Oi = e, null;
}
function eg(e) {
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
        case bc:
          return 1;
        case Hm:
          return 4;
        case ji:
        case Jw:
          return 16;
        case Km:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var gn = null, Tc = null, mi = null;
function tg() {
  if (mi) return mi;
  var e, t = Tc, n = t.length, r, o = "value" in gn ? gn.value : gn.textContent, s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++) ;
  return mi = o.slice(e, 1 < r ? 1 - r : void 0);
}
function gi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function zs() {
  return !0;
}
function bf() {
  return !1;
}
function it(e) {
  function t(n, r, o, s, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = s, this.target = i, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(s) : s[a]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? zs : bf, this.isPropagationStopped = bf, this;
  }
  return fe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = zs);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = zs);
  }, persist: function() {
  }, isPersistent: zs }), t;
}
var to = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Dc = it(to), Ss = fe({}, to, { view: 0, detail: 0 }), f1 = it(Ss), Ja, el, xo, ma = fe({}, Ss, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Nc, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== xo && (xo && e.type === "mousemove" ? (Ja = e.screenX - xo.screenX, el = e.screenY - xo.screenY) : el = Ja = 0, xo = e), Ja);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : el;
} }), Cf = it(ma), p1 = fe({}, ma, { dataTransfer: 0 }), h1 = it(p1), m1 = fe({}, Ss, { relatedTarget: 0 }), tl = it(m1), g1 = fe({}, to, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), y1 = it(g1), v1 = fe({}, to, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), x1 = it(v1), w1 = fe({}, to, { data: 0 }), Pf = it(w1), S1 = {
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
}, k1 = {
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
function C1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = b1[e]) ? !!t[e] : !1;
}
function Nc() {
  return C1;
}
var P1 = fe({}, Ss, { key: function(e) {
  if (e.key) {
    var t = S1[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = gi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? k1[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Nc, charCode: function(e) {
  return e.type === "keypress" ? gi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? gi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), E1 = it(P1), T1 = fe({}, ma, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ef = it(T1), D1 = fe({}, Ss, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Nc }), N1 = it(D1), A1 = fe({}, to, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), R1 = it(A1), M1 = fe({}, ma, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), j1 = it(M1), L1 = [9, 13, 27, 32], Ac = Qt && "CompositionEvent" in window, Oo = null;
Qt && "documentMode" in document && (Oo = document.documentMode);
var _1 = Qt && "TextEvent" in window && !Oo, ng = Qt && (!Ac || Oo && 8 < Oo && 11 >= Oo), Tf = " ", Df = !1;
function rg(e, t) {
  switch (e) {
    case "keyup":
      return L1.indexOf(t.keyCode) !== -1;
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
function og(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var vr = !1;
function O1(e, t) {
  switch (e) {
    case "compositionend":
      return og(t);
    case "keypress":
      return t.which !== 32 ? null : (Df = !0, Tf);
    case "textInput":
      return e = t.data, e === Tf && Df ? null : e;
    default:
      return null;
  }
}
function I1(e, t) {
  if (vr) return e === "compositionend" || !Ac && rg(e, t) ? (e = tg(), mi = Tc = gn = null, vr = !1, e) : null;
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
      return ng && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var F1 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Nf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!F1[e.type] : t === "textarea";
}
function sg(e, t, n, r) {
  Om(r), t = Ii(t, "onChange"), 0 < t.length && (n = new Dc("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Io = null, Jo = null;
function V1(e) {
  gg(e, 0);
}
function ga(e) {
  var t = Sr(e);
  if (Nm(t)) return e;
}
function z1(e, t) {
  if (e === "change") return t;
}
var ig = !1;
if (Qt) {
  var nl;
  if (Qt) {
    var rl = "oninput" in document;
    if (!rl) {
      var Af = document.createElement("div");
      Af.setAttribute("oninput", "return;"), rl = typeof Af.oninput == "function";
    }
    nl = rl;
  } else nl = !1;
  ig = nl && (!document.documentMode || 9 < document.documentMode);
}
function Rf() {
  Io && (Io.detachEvent("onpropertychange", ag), Jo = Io = null);
}
function ag(e) {
  if (e.propertyName === "value" && ga(Jo)) {
    var t = [];
    sg(t, Jo, e, kc(e)), zm(V1, t);
  }
}
function B1(e, t, n) {
  e === "focusin" ? (Rf(), Io = t, Jo = n, Io.attachEvent("onpropertychange", ag)) : e === "focusout" && Rf();
}
function $1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ga(Jo);
}
function U1(e, t) {
  if (e === "click") return ga(t);
}
function W1(e, t) {
  if (e === "input" || e === "change") return ga(t);
}
function H1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var bt = typeof Object.is == "function" ? Object.is : H1;
function es(e, t) {
  if (bt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Hl.call(t, o) || !bt(e[o], t[o])) return !1;
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
function lg(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? lg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ug() {
  for (var e = window, t = Ai(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ai(e.document);
  }
  return t;
}
function Rc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function K1(e) {
  var t = ug(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && lg(n.ownerDocument.documentElement, n)) {
    if (r !== null && Rc(n)) {
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
var G1 = Qt && "documentMode" in document && 11 >= document.documentMode, xr = null, cu = null, Fo = null, du = !1;
function Lf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  du || xr == null || xr !== Ai(r) || (r = xr, "selectionStart" in r && Rc(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Fo && es(Fo, r) || (Fo = r, r = Ii(cu, "onSelect"), 0 < r.length && (t = new Dc("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = xr)));
}
function Bs(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var wr = { animationend: Bs("Animation", "AnimationEnd"), animationiteration: Bs("Animation", "AnimationIteration"), animationstart: Bs("Animation", "AnimationStart"), transitionend: Bs("Transition", "TransitionEnd") }, ol = {}, cg = {};
Qt && (cg = document.createElement("div").style, "AnimationEvent" in window || (delete wr.animationend.animation, delete wr.animationiteration.animation, delete wr.animationstart.animation), "TransitionEvent" in window || delete wr.transitionend.transition);
function ya(e) {
  if (ol[e]) return ol[e];
  if (!wr[e]) return e;
  var t = wr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in cg) return ol[e] = t[n];
  return e;
}
var dg = ya("animationend"), fg = ya("animationiteration"), pg = ya("animationstart"), hg = ya("transitionend"), mg = /* @__PURE__ */ new Map(), _f = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function _n(e, t) {
  mg.set(e, t), ur(t, [e]);
}
for (var sl = 0; sl < _f.length; sl++) {
  var il = _f[sl], Y1 = il.toLowerCase(), X1 = il[0].toUpperCase() + il.slice(1);
  _n(Y1, "on" + X1);
}
_n(dg, "onAnimationEnd");
_n(fg, "onAnimationIteration");
_n(pg, "onAnimationStart");
_n("dblclick", "onDoubleClick");
_n("focusin", "onFocus");
_n("focusout", "onBlur");
_n(hg, "onTransitionEnd");
$r("onMouseEnter", ["mouseout", "mouseover"]);
$r("onMouseLeave", ["mouseout", "mouseover"]);
$r("onPointerEnter", ["pointerout", "pointerover"]);
$r("onPointerLeave", ["pointerout", "pointerover"]);
ur("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ur("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ur("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ur("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ur("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ur("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var No = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Q1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(No));
function Of(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Yw(r, t, void 0, e), e.currentTarget = null;
}
function gg(e, t) {
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
  if (Mi) throw e = iu, Mi = !1, iu = null, e;
}
function oe(e, t) {
  var n = t[gu];
  n === void 0 && (n = t[gu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (yg(t, e, 2, !1), n.add(r));
}
function al(e, t, n) {
  var r = 0;
  t && (r |= 4), yg(n, e, r, t);
}
var $s = "_reactListening" + Math.random().toString(36).slice(2);
function ts(e) {
  if (!e[$s]) {
    e[$s] = !0, Cm.forEach(function(n) {
      n !== "selectionchange" && (Q1.has(n) || al(n, !1, e), al(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[$s] || (t[$s] = !0, al("selectionchange", !1, t));
  }
}
function yg(e, t, n, r) {
  switch (eg(t)) {
    case 1:
      var o = c1;
      break;
    case 4:
      o = d1;
      break;
    default:
      o = Ec;
  }
  n = o.bind(null, t, n, e), o = void 0, !su || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function ll(e, t, n, r, o) {
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
        if (i = Gn(a), i === null) return;
        if (l = i.tag, l === 5 || l === 6) {
          r = s = i;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  zm(function() {
    var u = s, c = kc(n), d = [];
    e: {
      var f = mg.get(e);
      if (f !== void 0) {
        var g = Dc, w = e;
        switch (e) {
          case "keypress":
            if (gi(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = E1;
            break;
          case "focusin":
            w = "focus", g = tl;
            break;
          case "focusout":
            w = "blur", g = tl;
            break;
          case "beforeblur":
          case "afterblur":
            g = tl;
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
            g = Cf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = h1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = N1;
            break;
          case dg:
          case fg:
          case pg:
            g = y1;
            break;
          case hg:
            g = R1;
            break;
          case "scroll":
            g = f1;
            break;
          case "wheel":
            g = j1;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = x1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Ef;
        }
        var y = (t & 4) !== 0, S = !y && e === "scroll", m = y ? f !== null ? f + "Capture" : null : f;
        y = [];
        for (var h = u, v; h !== null; ) {
          v = h;
          var k = v.stateNode;
          if (v.tag === 5 && k !== null && (v = k, m !== null && (k = Xo(h, m), k != null && y.push(ns(h, k, v)))), S) break;
          h = h.return;
        }
        0 < y.length && (f = new g(f, w, null, n, c), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", f && n !== ru && (w = n.relatedTarget || n.fromElement) && (Gn(w) || w[Zt])) break e;
        if ((g || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = u, w = w ? Gn(w) : null, w !== null && (S = cr(w), w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = u), g !== w)) {
          if (y = Cf, k = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (y = Ef, k = "onPointerLeave", m = "onPointerEnter", h = "pointer"), S = g == null ? f : Sr(g), v = w == null ? f : Sr(w), f = new y(k, h + "leave", g, n, c), f.target = S, f.relatedTarget = v, k = null, Gn(c) === u && (y = new y(m, h + "enter", w, n, c), y.target = v, y.relatedTarget = S, k = y), S = k, g && w) t: {
            for (y = g, m = w, h = 0, v = y; v; v = fr(v)) h++;
            for (v = 0, k = m; k; k = fr(k)) v++;
            for (; 0 < h - v; ) y = fr(y), h--;
            for (; 0 < v - h; ) m = fr(m), v--;
            for (; h--; ) {
              if (y === m || m !== null && y === m.alternate) break t;
              y = fr(y), m = fr(m);
            }
            y = null;
          }
          else y = null;
          g !== null && If(d, f, g, y, !1), w !== null && S !== null && If(d, S, w, y, !0);
        }
      }
      e: {
        if (f = u ? Sr(u) : window, g = f.nodeName && f.nodeName.toLowerCase(), g === "select" || g === "input" && f.type === "file") var b = z1;
        else if (Nf(f)) if (ig) b = W1;
        else {
          b = $1;
          var C = B1;
        }
        else (g = f.nodeName) && g.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (b = U1);
        if (b && (b = b(e, u))) {
          sg(d, b, n, c);
          break e;
        }
        C && C(e, f, u), e === "focusout" && (C = f._wrapperState) && C.controlled && f.type === "number" && ql(f, "number", f.value);
      }
      switch (C = u ? Sr(u) : window, e) {
        case "focusin":
          (Nf(C) || C.contentEditable === "true") && (xr = C, cu = u, Fo = null);
          break;
        case "focusout":
          Fo = cu = xr = null;
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
          if (G1) break;
        case "keydown":
        case "keyup":
          Lf(d, n, c);
      }
      var P;
      if (Ac) e: {
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
      else vr ? rg(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (ng && n.locale !== "ko" && (vr || E !== "onCompositionStart" ? E === "onCompositionEnd" && vr && (P = tg()) : (gn = c, Tc = "value" in gn ? gn.value : gn.textContent, vr = !0)), C = Ii(u, E), 0 < C.length && (E = new Pf(E, e, null, n, c), d.push({ event: E, listeners: C }), P ? E.data = P : (P = og(n), P !== null && (E.data = P)))), (P = _1 ? O1(e, n) : I1(e, n)) && (u = Ii(u, "onBeforeInput"), 0 < u.length && (c = new Pf("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = P));
    }
    gg(d, t);
  });
}
function ns(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ii(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, s = o.stateNode;
    o.tag === 5 && s !== null && (o = s, s = Xo(e, n), s != null && r.unshift(ns(e, s, o)), s = Xo(e, t), s != null && r.push(ns(e, s, o))), e = e.return;
  }
  return r;
}
function fr(e) {
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
var Z1 = /\r\n?/g, q1 = /\u0000|\uFFFD/g;
function Ff(e) {
  return (typeof e == "string" ? e : "" + e).replace(Z1, `
`).replace(q1, "");
}
function Us(e, t, n) {
  if (t = Ff(t), Ff(e) !== t && n) throw Error(A(425));
}
function Fi() {
}
var fu = null, pu = null;
function hu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var mu = typeof setTimeout == "function" ? setTimeout : void 0, J1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Vf = typeof Promise == "function" ? Promise : void 0, eS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vf < "u" ? function(e) {
  return Vf.resolve(null).then(e).catch(tS);
} : mu;
function tS(e) {
  setTimeout(function() {
    throw e;
  });
}
function ul(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), qo(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  qo(t);
}
function Sn(e) {
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
var no = Math.random().toString(36).slice(2), Mt = "__reactFiber$" + no, rs = "__reactProps$" + no, Zt = "__reactContainer$" + no, gu = "__reactEvents$" + no, nS = "__reactListeners$" + no, rS = "__reactHandles$" + no;
function Gn(e) {
  var t = e[Mt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Zt] || n[Mt]) {
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
  return e = e[Mt] || e[Zt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Sr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function va(e) {
  return e[rs] || null;
}
var yu = [], kr = -1;
function On(e) {
  return { current: e };
}
function se(e) {
  0 > kr || (e.current = yu[kr], yu[kr] = null, kr--);
}
function te(e, t) {
  kr++, yu[kr] = e.current, e.current = t;
}
var Nn = {}, Fe = On(Nn), Ge = On(!1), er = Nn;
function Ur(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Nn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, s;
  for (s in n) o[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Ye(e) {
  return e = e.childContextTypes, e != null;
}
function Vi() {
  se(Ge), se(Fe);
}
function Bf(e, t, n) {
  if (Fe.current !== Nn) throw Error(A(168));
  te(Fe, t), te(Ge, n);
}
function vg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(A(108, Bw(e) || "Unknown", o));
  return fe({}, n, r);
}
function zi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Nn, er = Fe.current, te(Fe, e), te(Ge, Ge.current), !0;
}
function $f(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n ? (e = vg(e, t, er), r.__reactInternalMemoizedMergedChildContext = e, se(Ge), se(Fe), te(Fe, e)) : se(Ge), te(Ge, n);
}
var Wt = null, xa = !1, cl = !1;
function xg(e) {
  Wt === null ? Wt = [e] : Wt.push(e);
}
function oS(e) {
  xa = !0, xg(e);
}
function In() {
  if (!cl && Wt !== null) {
    cl = !0;
    var e = 0, t = Z;
    try {
      var n = Wt;
      for (Z = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Wt = null, xa = !1;
    } catch (o) {
      throw Wt !== null && (Wt = Wt.slice(e + 1)), Wm(bc, In), o;
    } finally {
      Z = t, cl = !1;
    }
  }
  return null;
}
var br = [], Cr = 0, Bi = null, $i = 0, ut = [], ct = 0, tr = null, Ht = 1, Kt = "";
function Un(e, t) {
  br[Cr++] = $i, br[Cr++] = Bi, Bi = e, $i = t;
}
function wg(e, t, n) {
  ut[ct++] = Ht, ut[ct++] = Kt, ut[ct++] = tr, tr = e;
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
  e.return !== null && (Un(e, 1), wg(e, 1, 0));
}
function jc(e) {
  for (; e === Bi; ) Bi = br[--Cr], br[Cr] = null, $i = br[--Cr], br[Cr] = null;
  for (; e === tr; ) tr = ut[--ct], ut[ct] = null, Kt = ut[--ct], ut[ct] = null, Ht = ut[--ct], ut[ct] = null;
}
var et = null, Je = null, le = !1, wt = null;
function Sg(e, t) {
  var n = dt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Uf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, et = e, Je = Sn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, et = e, Je = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = tr !== null ? { id: Ht, overflow: Kt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = dt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, et = e, Je = null, !0) : !1;
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
        if (vu(e)) throw Error(A(418));
        t = Sn(n.nextSibling);
        var r = et;
        t && Uf(e, t) ? Sg(r, n) : (e.flags = e.flags & -4097 | 2, le = !1, et = e);
      }
    } else {
      if (vu(e)) throw Error(A(418));
      e.flags = e.flags & -4097 | 2, le = !1, et = e;
    }
  }
}
function Wf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  et = e;
}
function Ws(e) {
  if (e !== et) return !1;
  if (!le) return Wf(e), le = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !hu(e.type, e.memoizedProps)), t && (t = Je)) {
    if (vu(e)) throw kg(), Error(A(418));
    for (; t; ) Sg(e, t), t = Sn(t.nextSibling);
  }
  if (Wf(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Je = Sn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Je = null;
    }
  } else Je = et ? Sn(e.stateNode.nextSibling) : null;
  return !0;
}
function kg() {
  for (var e = Je; e; ) e = Sn(e.nextSibling);
}
function Wr() {
  Je = et = null, le = !1;
}
function Lc(e) {
  wt === null ? wt = [e] : wt.push(e);
}
var sS = rn.ReactCurrentBatchConfig;
function wo(e, t, n) {
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
function Hs(e, t) {
  throw e = Object.prototype.toString.call(t), Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Hf(e) {
  var t = e._init;
  return t(e._payload);
}
function bg(e) {
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
    return m = Pn(m, h), m.index = 0, m.sibling = null, m;
  }
  function s(m, h, v) {
    return m.index = v, e ? (v = m.alternate, v !== null ? (v = v.index, v < h ? (m.flags |= 2, h) : v) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, v, k) {
    return h === null || h.tag !== 6 ? (h = yl(v, m.mode, k), h.return = m, h) : (h = o(h, v), h.return = m, h);
  }
  function l(m, h, v, k) {
    var b = v.type;
    return b === yr ? c(m, h, v.props.children, k, v.key) : h !== null && (h.elementType === b || typeof b == "object" && b !== null && b.$$typeof === cn && Hf(b) === h.type) ? (k = o(h, v.props), k.ref = wo(m, h, v), k.return = m, k) : (k = bi(v.type, v.key, v.props, null, m.mode, k), k.ref = wo(m, h, v), k.return = m, k);
  }
  function u(m, h, v, k) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = vl(v, m.mode, k), h.return = m, h) : (h = o(h, v.children || []), h.return = m, h);
  }
  function c(m, h, v, k, b) {
    return h === null || h.tag !== 7 ? (h = qn(v, m.mode, k, b), h.return = m, h) : (h = o(h, v), h.return = m, h);
  }
  function d(m, h, v) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = yl("" + h, m.mode, v), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ls:
          return v = bi(h.type, h.key, h.props, null, m.mode, v), v.ref = wo(m, null, h), v.return = m, v;
        case gr:
          return h = vl(h, m.mode, v), h.return = m, h;
        case cn:
          var k = h._init;
          return d(m, k(h._payload), v);
      }
      if (To(h) || mo(h)) return h = qn(h, m.mode, v, null), h.return = m, h;
      Hs(m, h);
    }
    return null;
  }
  function f(m, h, v, k) {
    var b = h !== null ? h.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number") return b !== null ? null : a(m, h, "" + v, k);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ls:
          return v.key === b ? l(m, h, v, k) : null;
        case gr:
          return v.key === b ? u(m, h, v, k) : null;
        case cn:
          return b = v._init, f(
            m,
            h,
            b(v._payload),
            k
          );
      }
      if (To(v) || mo(v)) return b !== null ? null : c(m, h, v, k, null);
      Hs(m, v);
    }
    return null;
  }
  function g(m, h, v, k, b) {
    if (typeof k == "string" && k !== "" || typeof k == "number") return m = m.get(v) || null, a(h, m, "" + k, b);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Ls:
          return m = m.get(k.key === null ? v : k.key) || null, l(h, m, k, b);
        case gr:
          return m = m.get(k.key === null ? v : k.key) || null, u(h, m, k, b);
        case cn:
          var C = k._init;
          return g(m, h, v, C(k._payload), b);
      }
      if (To(k) || mo(k)) return m = m.get(v) || null, c(h, m, k, b, null);
      Hs(h, k);
    }
    return null;
  }
  function w(m, h, v, k) {
    for (var b = null, C = null, P = h, E = h = 0, N = null; P !== null && E < v.length; E++) {
      P.index > E ? (N = P, P = null) : N = P.sibling;
      var D = f(m, P, v[E], k);
      if (D === null) {
        P === null && (P = N);
        break;
      }
      e && P && D.alternate === null && t(m, P), h = s(D, h, E), C === null ? b = D : C.sibling = D, C = D, P = N;
    }
    if (E === v.length) return n(m, P), le && Un(m, E), b;
    if (P === null) {
      for (; E < v.length; E++) P = d(m, v[E], k), P !== null && (h = s(P, h, E), C === null ? b = P : C.sibling = P, C = P);
      return le && Un(m, E), b;
    }
    for (P = r(m, P); E < v.length; E++) N = g(P, m, E, v[E], k), N !== null && (e && N.alternate !== null && P.delete(N.key === null ? E : N.key), h = s(N, h, E), C === null ? b = N : C.sibling = N, C = N);
    return e && P.forEach(function(j) {
      return t(m, j);
    }), le && Un(m, E), b;
  }
  function y(m, h, v, k) {
    var b = mo(v);
    if (typeof b != "function") throw Error(A(150));
    if (v = b.call(v), v == null) throw Error(A(151));
    for (var C = b = null, P = h, E = h = 0, N = null, D = v.next(); P !== null && !D.done; E++, D = v.next()) {
      P.index > E ? (N = P, P = null) : N = P.sibling;
      var j = f(m, P, D.value, k);
      if (j === null) {
        P === null && (P = N);
        break;
      }
      e && P && j.alternate === null && t(m, P), h = s(j, h, E), C === null ? b = j : C.sibling = j, C = j, P = N;
    }
    if (D.done) return n(
      m,
      P
    ), le && Un(m, E), b;
    if (P === null) {
      for (; !D.done; E++, D = v.next()) D = d(m, D.value, k), D !== null && (h = s(D, h, E), C === null ? b = D : C.sibling = D, C = D);
      return le && Un(m, E), b;
    }
    for (P = r(m, P); !D.done; E++, D = v.next()) D = g(P, m, E, D.value, k), D !== null && (e && D.alternate !== null && P.delete(D.key === null ? E : D.key), h = s(D, h, E), C === null ? b = D : C.sibling = D, C = D);
    return e && P.forEach(function(R) {
      return t(m, R);
    }), le && Un(m, E), b;
  }
  function S(m, h, v, k) {
    if (typeof v == "object" && v !== null && v.type === yr && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ls:
          e: {
            for (var b = v.key, C = h; C !== null; ) {
              if (C.key === b) {
                if (b = v.type, b === yr) {
                  if (C.tag === 7) {
                    n(m, C.sibling), h = o(C, v.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (C.elementType === b || typeof b == "object" && b !== null && b.$$typeof === cn && Hf(b) === C.type) {
                  n(m, C.sibling), h = o(C, v.props), h.ref = wo(m, C, v), h.return = m, m = h;
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            v.type === yr ? (h = qn(v.props.children, m.mode, k, v.key), h.return = m, m = h) : (k = bi(v.type, v.key, v.props, null, m.mode, k), k.ref = wo(m, h, v), k.return = m, m = k);
          }
          return i(m);
        case gr:
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
            h = vl(v, m.mode, k), h.return = m, m = h;
          }
          return i(m);
        case cn:
          return C = v._init, S(m, h, C(v._payload), k);
      }
      if (To(v)) return w(m, h, v, k);
      if (mo(v)) return y(m, h, v, k);
      Hs(m, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, h !== null && h.tag === 6 ? (n(m, h.sibling), h = o(h, v), h.return = m, m = h) : (n(m, h), h = yl(v, m.mode, k), h.return = m, m = h), i(m)) : n(m, h);
  }
  return S;
}
var Hr = bg(!0), Cg = bg(!1), Ui = On(null), Wi = null, Pr = null, _c = null;
function Oc() {
  _c = Pr = Wi = null;
}
function Ic(e) {
  var t = Ui.current;
  se(Ui), e._currentValue = t;
}
function wu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Ir(e, t) {
  Wi = e, _c = Pr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ke = !0), e.firstContext = null);
}
function pt(e) {
  var t = e._currentValue;
  if (_c !== e) if (e = { context: e, memoizedValue: t, next: null }, Pr === null) {
    if (Wi === null) throw Error(A(308));
    Pr = e, Wi.dependencies = { lanes: 0, firstContext: e };
  } else Pr = Pr.next = e;
  return t;
}
var Yn = null;
function Fc(e) {
  Yn === null ? Yn = [e] : Yn.push(e);
}
function Pg(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Fc(t)) : (n.next = o.next, o.next = n), t.interleaved = n, qt(e, r);
}
function qt(e, t) {
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
function kn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, X & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, qt(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Fc(r)) : (t.next = o.next, o.next = t), r.interleaved = t, qt(e, n);
}
function yi(e, t, n) {
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
function Hi(e, t, n, r) {
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
      var f = a.lane, g = a.eventTime;
      if ((r & f) === f) {
        c !== null && (c = c.next = {
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
              d = fe({}, d, f);
              break e;
            case 2:
              dn = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [a] : f.push(a));
      } else g = { eventTime: g, lane: f, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = g, l = d) : c = c.next = g, i |= f;
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
    rr |= i, e.lanes = i, e.memoizedState = d;
  }
}
function Gf(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(A(191, o));
      o.call(r);
    }
  }
}
var bs = {}, Ot = On(bs), os = On(bs), ss = On(bs);
function Xn(e) {
  if (e === bs) throw Error(A(174));
  return e;
}
function zc(e, t) {
  switch (te(ss, t), te(os, e), te(Ot, bs), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : eu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = eu(t, e);
  }
  se(Ot), te(Ot, t);
}
function Kr() {
  se(Ot), se(os), se(ss);
}
function Tg(e) {
  Xn(ss.current);
  var t = Xn(Ot.current), n = eu(t, e.type);
  t !== n && (te(os, e), te(Ot, n));
}
function Bc(e) {
  os.current === e && (se(Ot), se(os));
}
var ue = On(0);
function Ki(e) {
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
var dl = [];
function $c() {
  for (var e = 0; e < dl.length; e++) dl[e]._workInProgressVersionPrimary = null;
  dl.length = 0;
}
var vi = rn.ReactCurrentDispatcher, fl = rn.ReactCurrentBatchConfig, nr = 0, de = null, Se = null, Ce = null, Gi = !1, Vo = !1, is = 0, iS = 0;
function je() {
  throw Error(A(321));
}
function Uc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!bt(e[n], t[n])) return !1;
  return !0;
}
function Wc(e, t, n, r, o, s) {
  if (nr = s, de = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, vi.current = e === null || e.memoizedState === null ? cS : dS, e = n(r, o), Vo) {
    s = 0;
    do {
      if (Vo = !1, is = 0, 25 <= s) throw Error(A(301));
      s += 1, Ce = Se = null, t.updateQueue = null, vi.current = fS, e = n(r, o);
    } while (Vo);
  }
  if (vi.current = Yi, t = Se !== null && Se.next !== null, nr = 0, Ce = Se = de = null, Gi = !1, t) throw Error(A(300));
  return e;
}
function Hc() {
  var e = is !== 0;
  return is = 0, e;
}
function Rt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ce === null ? de.memoizedState = Ce = e : Ce = Ce.next = e, Ce;
}
function ht() {
  if (Se === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Se.next;
  var t = Ce === null ? de.memoizedState : Ce.next;
  if (t !== null) Ce = t, Se = e;
  else {
    if (e === null) throw Error(A(310));
    Se = e, e = { memoizedState: Se.memoizedState, baseState: Se.baseState, baseQueue: Se.baseQueue, queue: Se.queue, next: null }, Ce === null ? de.memoizedState = Ce = e : Ce = Ce.next = e;
  }
  return Ce;
}
function as(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function pl(e) {
  var t = ht(), n = t.queue;
  if (n === null) throw Error(A(311));
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
      if ((nr & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (a = l = d, i = r) : l = l.next = d, de.lanes |= c, rr |= c;
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? i = r : l.next = a, bt(r, t.memoizedState) || (Ke = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      s = o.lane, de.lanes |= s, rr |= s, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function hl(e) {
  var t = ht(), n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      s = e(s, i.action), i = i.next;
    while (i !== o);
    bt(s, t.memoizedState) || (Ke = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function Dg() {
}
function Ng(e, t) {
  var n = de, r = ht(), o = t(), s = !bt(r.memoizedState, o);
  if (s && (r.memoizedState = o, Ke = !0), r = r.queue, Kc(Mg.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || Ce !== null && Ce.memoizedState.tag & 1) {
    if (n.flags |= 2048, ls(9, Rg.bind(null, n, r, o, t), void 0, null), Pe === null) throw Error(A(349));
    nr & 30 || Ag(n, t, o);
  }
  return o;
}
function Ag(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = de.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, de.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Rg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, jg(t) && Lg(e);
}
function Mg(e, t, n) {
  return n(function() {
    jg(t) && Lg(e);
  });
}
function jg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !bt(e, n);
  } catch {
    return !0;
  }
}
function Lg(e) {
  var t = qt(e, 1);
  t !== null && kt(t, e, 1, -1);
}
function Yf(e) {
  var t = Rt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: as, lastRenderedState: e }, t.queue = e, e = e.dispatch = uS.bind(null, de, e), [t.memoizedState, e];
}
function ls(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = de.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, de.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function _g() {
  return ht().memoizedState;
}
function xi(e, t, n, r) {
  var o = Rt();
  de.flags |= e, o.memoizedState = ls(1 | t, n, void 0, r === void 0 ? null : r);
}
function wa(e, t, n, r) {
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
  return xi(8390656, 8, e, t);
}
function Kc(e, t) {
  return wa(2048, 8, e, t);
}
function Og(e, t) {
  return wa(4, 2, e, t);
}
function Ig(e, t) {
  return wa(4, 4, e, t);
}
function Fg(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Vg(e, t, n) {
  return n = n != null ? n.concat([e]) : null, wa(4, 4, Fg.bind(null, t, e), n);
}
function Gc() {
}
function zg(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Uc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Bg(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Uc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function $g(e, t, n) {
  return nr & 21 ? (bt(n, t) || (n = Gm(), de.lanes |= n, rr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ke = !0), e.memoizedState = n);
}
function aS(e, t) {
  var n = Z;
  Z = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = fl.transition;
  fl.transition = {};
  try {
    e(!1), t();
  } finally {
    Z = n, fl.transition = r;
  }
}
function Ug() {
  return ht().memoizedState;
}
function lS(e, t, n) {
  var r = Cn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Wg(e)) Hg(t, n);
  else if (n = Pg(e, t, n, r), n !== null) {
    var o = $e();
    kt(n, e, r, o), Kg(n, t, r);
  }
}
function uS(e, t, n) {
  var r = Cn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Wg(e)) Hg(t, o);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var i = t.lastRenderedState, a = s(i, n);
      if (o.hasEagerState = !0, o.eagerState = a, bt(a, i)) {
        var l = t.interleaved;
        l === null ? (o.next = o, Fc(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Pg(e, t, o, r), n !== null && (o = $e(), kt(n, e, r, o), Kg(n, t, r));
  }
}
function Wg(e) {
  var t = e.alternate;
  return e === de || t !== null && t === de;
}
function Hg(e, t) {
  Vo = Gi = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Kg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Cc(e, n);
  }
}
var Yi = { readContext: pt, useCallback: je, useContext: je, useEffect: je, useImperativeHandle: je, useInsertionEffect: je, useLayoutEffect: je, useMemo: je, useReducer: je, useRef: je, useState: je, useDebugValue: je, useDeferredValue: je, useTransition: je, useMutableSource: je, useSyncExternalStore: je, useId: je, unstable_isNewReconciler: !1 }, cS = { readContext: pt, useCallback: function(e, t) {
  return Rt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: pt, useEffect: Xf, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, xi(
    4194308,
    4,
    Fg.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return xi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return xi(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Rt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Rt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = lS.bind(null, de, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Rt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Yf, useDebugValue: Gc, useDeferredValue: function(e) {
  return Rt().memoizedState = e;
}, useTransition: function() {
  var e = Yf(!1), t = e[0];
  return e = aS.bind(null, e[1]), Rt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = de, o = Rt();
  if (le) {
    if (n === void 0) throw Error(A(407));
    n = n();
  } else {
    if (n = t(), Pe === null) throw Error(A(349));
    nr & 30 || Ag(r, t, n);
  }
  o.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return o.queue = s, Xf(Mg.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, ls(9, Rg.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = Rt(), t = Pe.identifierPrefix;
  if (le) {
    var n = Kt, r = Ht;
    n = (r & ~(1 << 32 - St(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = is++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = iS++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, dS = {
  readContext: pt,
  useCallback: zg,
  useContext: pt,
  useEffect: Kc,
  useImperativeHandle: Vg,
  useInsertionEffect: Og,
  useLayoutEffect: Ig,
  useMemo: Bg,
  useReducer: pl,
  useRef: _g,
  useState: function() {
    return pl(as);
  },
  useDebugValue: Gc,
  useDeferredValue: function(e) {
    var t = ht();
    return $g(t, Se.memoizedState, e);
  },
  useTransition: function() {
    var e = pl(as)[0], t = ht().memoizedState;
    return [e, t];
  },
  useMutableSource: Dg,
  useSyncExternalStore: Ng,
  useId: Ug,
  unstable_isNewReconciler: !1
}, fS = { readContext: pt, useCallback: zg, useContext: pt, useEffect: Kc, useImperativeHandle: Vg, useInsertionEffect: Og, useLayoutEffect: Ig, useMemo: Bg, useReducer: hl, useRef: _g, useState: function() {
  return hl(as);
}, useDebugValue: Gc, useDeferredValue: function(e) {
  var t = ht();
  return Se === null ? t.memoizedState = e : $g(t, Se.memoizedState, e);
}, useTransition: function() {
  var e = hl(as)[0], t = ht().memoizedState;
  return [e, t];
}, useMutableSource: Dg, useSyncExternalStore: Ng, useId: Ug, unstable_isNewReconciler: !1 };
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
var Sa = { isMounted: function(e) {
  return (e = e._reactInternals) ? cr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), o = Cn(e), s = Gt(r, o);
  s.payload = t, n != null && (s.callback = n), t = kn(e, s, o), t !== null && (kt(t, e, o, r), yi(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), o = Cn(e), s = Gt(r, o);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = kn(e, s, o), t !== null && (kt(t, e, o, r), yi(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = $e(), r = Cn(e), o = Gt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = kn(e, o, r), t !== null && (kt(t, e, r, n), yi(t, e, r));
} };
function Qf(e, t, n, r, o, s, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !es(n, r) || !es(o, s) : !0;
}
function Gg(e, t, n) {
  var r = !1, o = Nn, s = t.contextType;
  return typeof s == "object" && s !== null ? s = pt(s) : (o = Ye(t) ? er : Fe.current, r = t.contextTypes, s = (r = r != null) ? Ur(e, o) : Nn), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Sa, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function Zf(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Sa.enqueueReplaceState(t, t.state, null);
}
function ku(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Vc(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? o.context = pt(s) : (s = Ye(t) ? er : Fe.current, o.context = Ur(e, s)), o.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Su(e, t, s, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Sa.enqueueReplaceState(o, o.state, null), Hi(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Gr(e, t) {
  try {
    var n = "", r = t;
    do
      n += zw(r), r = r.return;
    while (r);
    var o = n;
  } catch (s) {
    o = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ml(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function bu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var pS = typeof WeakMap == "function" ? WeakMap : Map;
function Yg(e, t, n) {
  n = Gt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Qi || (Qi = !0, ju = r), bu(e, t);
  }, n;
}
function Xg(e, t, n) {
  n = Gt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      bu(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    bu(e, t), typeof r != "function" && (bn === null ? bn = /* @__PURE__ */ new Set([this]) : bn.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function qf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new pS();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = TS.bind(null, e, t, n), t.then(e, e));
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
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Gt(-1, 1), t.tag = 2, kn(n, t, 1))), n.lanes |= 1), e);
}
var hS = rn.ReactCurrentOwner, Ke = !1;
function Be(e, t, n, r) {
  t.child = e === null ? Cg(t, null, n, r) : Hr(t, e.child, n, r);
}
function tp(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return Ir(t, o), r = Wc(e, t, n, r, s, o), n = Hc(), e !== null && !Ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Jt(e, t, o)) : (le && n && Mc(t), t.flags |= 1, Be(e, t, r, o), t.child);
}
function np(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !td(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, Qg(e, t, s, r, o)) : (e = bi(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & o)) {
    var i = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : es, n(i, r) && e.ref === t.ref) return Jt(e, t, o);
  }
  return t.flags |= 1, e = Pn(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Qg(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (es(s, r) && e.ref === t.ref) if (Ke = !1, t.pendingProps = r = s, (e.lanes & o) !== 0) e.flags & 131072 && (Ke = !0);
    else return t.lanes = e.lanes, Jt(e, t, o);
  }
  return Cu(e, t, n, r, o);
}
function Zg(e, t, n) {
  var r = t.pendingProps, o = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, te(Tr, Ze), Ze |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, te(Tr, Ze), Ze |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, te(Tr, Ze), Ze |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, te(Tr, Ze), Ze |= r;
  return Be(e, t, o, n), t.child;
}
function qg(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Cu(e, t, n, r, o) {
  var s = Ye(n) ? er : Fe.current;
  return s = Ur(t, s), Ir(t, o), n = Wc(e, t, n, r, s, o), r = Hc(), e !== null && !Ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Jt(e, t, o)) : (le && r && Mc(t), t.flags |= 1, Be(e, t, n, o), t.child);
}
function rp(e, t, n, r, o) {
  if (Ye(n)) {
    var s = !0;
    zi(t);
  } else s = !1;
  if (Ir(t, o), t.stateNode === null) wi(e, t), Gg(t, n, r), ku(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, a = t.memoizedProps;
    i.props = a;
    var l = i.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = pt(u) : (u = Ye(n) ? er : Fe.current, u = Ur(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || l !== u) && Zf(t, i, r, u), dn = !1;
    var f = t.memoizedState;
    i.state = f, Hi(t, r, i, o), l = t.memoizedState, a !== r || f !== l || Ge.current || dn ? (typeof c == "function" && (Su(t, n, c, r), l = t.memoizedState), (a = dn || Qf(t, n, a, r, f, l, u)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), i.props = r, i.state = l, i.context = u, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Eg(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : vt(t.type, a), i.props = u, d = t.pendingProps, f = i.context, l = n.contextType, typeof l == "object" && l !== null ? l = pt(l) : (l = Ye(n) ? er : Fe.current, l = Ur(t, l));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== d || f !== l) && Zf(t, i, r, l), dn = !1, f = t.memoizedState, i.state = f, Hi(t, r, i, o);
    var w = t.memoizedState;
    a !== d || f !== w || Ge.current || dn ? (typeof g == "function" && (Su(t, n, g, r), w = t.memoizedState), (u = dn || Qf(t, n, u, r, f, w, l) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, l), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, l)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = l, r = u) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Pu(e, t, n, r, s, o);
}
function Pu(e, t, n, r, o, s) {
  qg(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && $f(t, n, !1), Jt(e, t, s);
  r = t.stateNode, hS.current = t;
  var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Hr(t, e.child, null, s), t.child = Hr(t, null, a, s)) : Be(e, t, a, s), t.memoizedState = r.state, o && $f(t, n, !0), t.child;
}
function Jg(e) {
  var t = e.stateNode;
  t.pendingContext ? Bf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Bf(e, t.context, !1), zc(e, t.containerInfo);
}
function op(e, t, n, r, o) {
  return Wr(), Lc(o), t.flags |= 256, Be(e, t, n, r), t.child;
}
var Eu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Tu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ey(e, t, n) {
  var r = t.pendingProps, o = ue.current, s = !1, i = (t.flags & 128) !== 0, a;
  if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), te(ue, o & 1), e === null)
    return xu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, i = { mode: "hidden", children: i }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = i) : s = Ca(i, r, 0, null), e = qn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Tu(n), t.memoizedState = Eu, e) : Yc(t, i));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return mS(e, t, i, r, a, o, n);
  if (s) {
    s = r.fallback, i = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Pn(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? s = Pn(a, s) : (s = qn(s, i, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, i = e.child.memoizedState, i = i === null ? Tu(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, s.memoizedState = i, s.childLanes = e.childLanes & ~n, t.memoizedState = Eu, r;
  }
  return s = e.child, e = s.sibling, r = Pn(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Yc(e, t) {
  return t = Ca({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ks(e, t, n, r) {
  return r !== null && Lc(r), Hr(t, e.child, null, n), e = Yc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function mS(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ml(Error(A(422))), Ks(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, o = t.mode, r = Ca({ mode: "visible", children: r.children }, o, 0, null), s = qn(s, o, i, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Hr(t, e.child, null, i), t.child.memoizedState = Tu(i), t.memoizedState = Eu, s);
  if (!(t.mode & 1)) return Ks(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
    return r = a, s = Error(A(419)), r = ml(s, r, void 0), Ks(e, t, i, r);
  }
  if (a = (i & e.childLanes) !== 0, Ke || a) {
    if (r = Pe, r !== null) {
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
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== s.retryLane && (s.retryLane = o, qt(e, o), kt(r, e, o, -1));
    }
    return ed(), r = ml(Error(A(421))), Ks(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = DS.bind(null, e), o._reactRetry = t, null) : (e = s.treeContext, Je = Sn(o.nextSibling), et = t, le = !0, wt = null, e !== null && (ut[ct++] = Ht, ut[ct++] = Kt, ut[ct++] = tr, Ht = e.id, Kt = e.overflow, tr = t), t = Yc(t, r.children), t.flags |= 4096, t);
}
function sp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), wu(e.return, t, n);
}
function gl(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = o);
}
function ty(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, s = r.tail;
  if (Be(e, t, r.children, n), r = ue.current, r & 2) r = r & 1 | 2, t.flags |= 128;
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
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Ki(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), gl(t, !1, o, n, s);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Ki(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      gl(t, !0, n, null, s);
      break;
    case "together":
      gl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function wi(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Jt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), rr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (e = t.child, n = Pn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Pn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function gS(e, t, n) {
  switch (t.tag) {
    case 3:
      Jg(t), Wr();
      break;
    case 5:
      Tg(t);
      break;
    case 1:
      Ye(t.type) && zi(t);
      break;
    case 4:
      zc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      te(Ui, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (te(ue, ue.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ey(e, t, n) : (te(ue, ue.current & 1), e = Jt(e, t, n), e !== null ? e.sibling : null);
      te(ue, ue.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return ty(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), te(ue, ue.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Zg(e, t, n);
  }
  return Jt(e, t, n);
}
var ny, Du, ry, oy;
ny = function(e, t) {
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
ry = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Xn(Ot.current);
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
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Fi);
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
oy = function(e, t, n, r) {
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
function Le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function yS(e, t, n) {
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
      return Le(t), null;
    case 1:
      return Ye(t.type) && Vi(), Le(t), null;
    case 3:
      return r = t.stateNode, Kr(), se(Ge), se(Fe), $c(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ws(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, wt !== null && (Ou(wt), wt = null))), Du(e, t), Le(t), null;
    case 5:
      Bc(t);
      var o = Xn(ss.current);
      if (n = t.type, e !== null && t.stateNode != null) ry(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return Le(t), null;
        }
        if (e = Xn(Ot.current), Ws(t)) {
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
            i === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && Us(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && Us(
              r.textContent,
              a,
              e
            ), o = ["children", "" + a]) : Go.hasOwnProperty(i) && a != null && i === "onScroll" && oe("scroll", r);
          }
          switch (n) {
            case "input":
              _s(r), mf(r, s, !0);
              break;
            case "textarea":
              _s(r), yf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Fi);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Mm(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Mt] = t, e[rs] = r, ny(e, t, !1, !1), t.stateNode = e;
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
              s === "style" ? _m(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && jm(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Yo(e, l) : typeof l == "number" && Yo(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Go.hasOwnProperty(s) ? l != null && s === "onScroll" && oe("scroll", e) : l != null && vc(e, s, l, i));
            }
            switch (n) {
              case "input":
                _s(e), mf(e, r, !1);
                break;
              case "textarea":
                _s(e), yf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Dn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? jr(e, !!r.multiple, s, !1) : r.defaultValue != null && jr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Fi);
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
      return Le(t), null;
    case 6:
      if (e && t.stateNode != null) oy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (n = Xn(ss.current), Xn(Ot.current), Ws(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Mt] = t, (s = r.nodeValue !== n) && (e = et, e !== null)) switch (e.tag) {
            case 3:
              Us(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Us(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Mt] = t, t.stateNode = r;
      }
      return Le(t), null;
    case 13:
      if (se(ue), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (le && Je !== null && t.mode & 1 && !(t.flags & 128)) kg(), Wr(), t.flags |= 98560, s = !1;
        else if (s = Ws(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(A(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(A(317));
            s[Mt] = t;
          } else Wr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Le(t), s = !1;
        } else wt !== null && (Ou(wt), wt = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ue.current & 1 ? be === 0 && (be = 3) : ed())), t.updateQueue !== null && (t.flags |= 4), Le(t), null);
    case 4:
      return Kr(), Du(e, t), e === null && ts(t.stateNode.containerInfo), Le(t), null;
    case 10:
      return Ic(t.type._context), Le(t), null;
    case 17:
      return Ye(t.type) && Vi(), Le(t), null;
    case 19:
      if (se(ue), s = t.memoizedState, s === null) return Le(t), null;
      if (r = (t.flags & 128) !== 0, i = s.rendering, i === null) if (r) So(s, !1);
      else {
        if (be !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = Ki(e), i !== null) {
            for (t.flags |= 128, So(s, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, i = s.alternate, i === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = i.childLanes, s.lanes = i.lanes, s.child = i.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = i.memoizedProps, s.memoizedState = i.memoizedState, s.updateQueue = i.updateQueue, s.type = i.type, e = i.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return te(ue, ue.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && xe() > Yr && (t.flags |= 128, r = !0, So(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ki(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), So(s, !0), s.tail === null && s.tailMode === "hidden" && !i.alternate && !le) return Le(t), null;
        } else 2 * xe() - s.renderingStartTime > Yr && n !== 1073741824 && (t.flags |= 128, r = !0, So(s, !1), t.lanes = 4194304);
        s.isBackwards ? (i.sibling = t.child, t.child = i) : (n = s.last, n !== null ? n.sibling = i : t.child = i, s.last = i);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = xe(), t.sibling = null, n = ue.current, te(ue, r ? n & 1 | 2 : n & 1), t) : (Le(t), null);
    case 22:
    case 23:
      return Jc(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ze & 1073741824 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Le(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function vS(e, t) {
  switch (jc(t), t.tag) {
    case 1:
      return Ye(t.type) && Vi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Kr(), se(Ge), se(Fe), $c(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Bc(t), null;
    case 13:
      if (se(ue), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(A(340));
        Wr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return se(ue), null;
    case 4:
      return Kr(), null;
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
var Gs = !1, Oe = !1, xS = typeof WeakSet == "function" ? WeakSet : Set, L = null;
function Er(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    me(e, t, r);
  }
  else n.current = null;
}
function Nu(e, t, n) {
  try {
    n();
  } catch (r) {
    me(e, t, r);
  }
}
var ip = !1;
function wS(e, t) {
  if (fu = _i, e = ug(), Rc(e)) {
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
          for (var g; d !== n || o !== 0 && d.nodeType !== 3 || (a = i + o), d !== s || r !== 0 && d.nodeType !== 3 || (l = i + r), d.nodeType === 3 && (i += d.nodeValue.length), (g = d.firstChild) !== null; )
            f = d, d = g;
          for (; ; ) {
            if (d === e) break t;
            if (f === n && ++u === o && (a = i), f === s && ++c === r && (l = i), (g = d.nextSibling) !== null) break;
            d = f, f = d.parentNode;
          }
          d = g;
        }
        n = a === -1 || l === -1 ? null : { start: a, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (pu = { focusedElem: e, selectionRange: n }, _i = !1, L = t; L !== null; ) if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
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
            var y = w.memoizedProps, S = w.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? y : vt(t.type, y), S);
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
    } catch (k) {
      me(t, t.return, k);
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
function ka(e, t) {
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
function Au(e) {
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
function sy(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, sy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Mt], delete t[rs], delete t[gu], delete t[nS], delete t[rS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function iy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ap(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || iy(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ru(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Fi));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ru(e, t, n), e = e.sibling; e !== null; ) Ru(e, t, n), e = e.sibling;
}
function Mu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Mu(e, t, n), e = e.sibling; e !== null; ) Mu(e, t, n), e = e.sibling;
}
var Ee = null, xt = !1;
function on(e, t, n) {
  for (n = n.child; n !== null; ) ay(e, t, n), n = n.sibling;
}
function ay(e, t, n) {
  if (_t && typeof _t.onCommitFiberUnmount == "function") try {
    _t.onCommitFiberUnmount(ha, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Oe || Er(n, t);
    case 6:
      var r = Ee, o = xt;
      Ee = null, on(e, t, n), Ee = r, xt = o, Ee !== null && (xt ? (e = Ee, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ee.removeChild(n.stateNode));
      break;
    case 18:
      Ee !== null && (xt ? (e = Ee, n = n.stateNode, e.nodeType === 8 ? ul(e.parentNode, n) : e.nodeType === 1 && ul(e, n), qo(e)) : ul(Ee, n.stateNode));
      break;
    case 4:
      r = Ee, o = xt, Ee = n.stateNode.containerInfo, xt = !0, on(e, t, n), Ee = r, xt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Oe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var s = o, i = s.destroy;
          s = s.tag, i !== void 0 && (s & 2 || s & 4) && Nu(n, t, i), o = o.next;
        } while (o !== r);
      }
      on(e, t, n);
      break;
    case 1:
      if (!Oe && (Er(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        me(n, t, a);
      }
      on(e, t, n);
      break;
    case 21:
      on(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Oe = (r = Oe) || n.memoizedState !== null, on(e, t, n), Oe = r) : on(e, t, n);
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
    n === null && (n = e.stateNode = new xS()), t.forEach(function(r) {
      var o = NS.bind(null, e, r);
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
            Ee = a.stateNode, xt = !1;
            break e;
          case 3:
            Ee = a.stateNode.containerInfo, xt = !0;
            break e;
          case 4:
            Ee = a.stateNode.containerInfo, xt = !0;
            break e;
        }
        a = a.return;
      }
      if (Ee === null) throw Error(A(160));
      ay(s, i, o), Ee = null, xt = !1;
      var l = o.alternate;
      l !== null && (l.return = null), o.return = null;
    } catch (u) {
      me(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ly(t, e), t = t.sibling;
}
function ly(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (mt(t, e), At(e), r & 4) {
        try {
          zo(3, e, e.return), ka(3, e);
        } catch (y) {
          me(e, e.return, y);
        }
        try {
          zo(5, e, e.return);
        } catch (y) {
          me(e, e.return, y);
        }
      }
      break;
    case 1:
      mt(t, e), At(e), r & 512 && n !== null && Er(n, n.return);
      break;
    case 5:
      if (mt(t, e), At(e), r & 512 && n !== null && Er(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Yo(o, "");
        } catch (y) {
          me(e, e.return, y);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var s = e.memoizedProps, i = n !== null ? n.memoizedProps : s, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && s.type === "radio" && s.name != null && Am(o, s), nu(a, i);
          var u = nu(a, s);
          for (i = 0; i < l.length; i += 2) {
            var c = l[i], d = l[i + 1];
            c === "style" ? _m(o, d) : c === "dangerouslySetInnerHTML" ? jm(o, d) : c === "children" ? Yo(o, d) : vc(o, c, d, u);
          }
          switch (a) {
            case "input":
              Zl(o, s);
              break;
            case "textarea":
              Rm(o, s);
              break;
            case "select":
              var f = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!s.multiple;
              var g = s.value;
              g != null ? jr(o, !!s.multiple, g, !1) : f !== !!s.multiple && (s.defaultValue != null ? jr(
                o,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : jr(o, !!s.multiple, s.multiple ? [] : "", !1));
          }
          o[rs] = s;
        } catch (y) {
          me(e, e.return, y);
        }
      }
      break;
    case 6:
      if (mt(t, e), At(e), r & 4) {
        if (e.stateNode === null) throw Error(A(162));
        o = e.stateNode, s = e.memoizedProps;
        try {
          o.nodeValue = s;
        } catch (y) {
          me(e, e.return, y);
        }
      }
      break;
    case 3:
      if (mt(t, e), At(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        qo(t.containerInfo);
      } catch (y) {
        me(e, e.return, y);
      }
      break;
    case 4:
      mt(t, e), At(e);
      break;
    case 13:
      mt(t, e), At(e), o = e.child, o.flags & 8192 && (s = o.memoizedState !== null, o.stateNode.isHidden = s, !s || o.alternate !== null && o.alternate.memoizedState !== null || (Zc = xe())), r & 4 && lp(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Oe = (u = Oe) || c, mt(t, e), Oe = u) : mt(t, e), At(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (L = e, c = e.child; c !== null; ) {
          for (d = L = c; L !== null; ) {
            switch (f = L, g = f.child, f.tag) {
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
                    me(r, n, y);
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
            g !== null ? (g.return = f, L = g) : cp(d);
          }
          c = c.sibling;
        }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                o = d.stateNode, u ? (s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, i = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Lm("display", i));
              } catch (y) {
                me(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (c === null) try {
              d.stateNode.nodeValue = u ? "" : d.memoizedProps;
            } catch (y) {
              me(e, e.return, y);
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
      mt(t, e), At(e), r & 4 && lp(e);
      break;
    case 21:
      break;
    default:
      mt(
        t,
        e
      ), At(e);
  }
}
function At(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (iy(n)) {
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
          r.flags & 32 && (Yo(o, ""), r.flags &= -33);
          var s = ap(e);
          Mu(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, a = ap(e);
          Ru(e, a, i);
          break;
        default:
          throw Error(A(161));
      }
    } catch (l) {
      me(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function SS(e, t, n) {
  L = e, uy(e);
}
function uy(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var o = L, s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Gs;
      if (!i) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || Oe;
        a = Gs;
        var u = Oe;
        if (Gs = i, (Oe = l) && !u) for (L = o; L !== null; ) i = L, l = i.child, i.tag === 22 && i.memoizedState !== null ? dp(o) : l !== null ? (l.return = i, L = l) : dp(o);
        for (; s !== null; ) L = s, uy(s), s = s.sibling;
        L = o, Gs = a, Oe = u;
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
            Oe || ka(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Oe) if (n === null) r.componentDidMount();
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
                  d !== null && qo(d);
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
        Oe || t.flags & 512 && Au(t);
      } catch (f) {
        me(t, t.return, f);
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
            ka(4, t);
          } catch (l) {
            me(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              me(t, o, l);
            }
          }
          var s = t.return;
          try {
            Au(t);
          } catch (l) {
            me(t, s, l);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Au(t);
          } catch (l) {
            me(t, i, l);
          }
      }
    } catch (l) {
      me(t, t.return, l);
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
var kS = Math.ceil, Xi = rn.ReactCurrentDispatcher, Xc = rn.ReactCurrentOwner, ft = rn.ReactCurrentBatchConfig, X = 0, Pe = null, we = null, De = 0, Ze = 0, Tr = On(0), be = 0, us = null, rr = 0, ba = 0, Qc = 0, Bo = null, He = null, Zc = 0, Yr = 1 / 0, Ut = null, Qi = !1, ju = null, bn = null, Ys = !1, yn = null, Zi = 0, $o = 0, Lu = null, Si = -1, ki = 0;
function $e() {
  return X & 6 ? xe() : Si !== -1 ? Si : Si = xe();
}
function Cn(e) {
  return e.mode & 1 ? X & 2 && De !== 0 ? De & -De : sS.transition !== null ? (ki === 0 && (ki = Gm()), ki) : (e = Z, e !== 0 || (e = window.event, e = e === void 0 ? 16 : eg(e.type)), e) : 1;
}
function kt(e, t, n, r) {
  if (50 < $o) throw $o = 0, Lu = null, Error(A(185));
  ws(e, n, r), (!(X & 2) || e !== Pe) && (e === Pe && (!(X & 2) && (ba |= n), be === 4 && hn(e, De)), Xe(e, r), n === 1 && X === 0 && !(t.mode & 1) && (Yr = xe() + 500, xa && In()));
}
function Xe(e, t) {
  var n = e.callbackNode;
  s1(e, t);
  var r = Li(e, e === Pe ? De : 0);
  if (r === 0) n !== null && wf(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && wf(n), t === 1) e.tag === 0 ? oS(fp.bind(null, e)) : xg(fp.bind(null, e)), eS(function() {
      !(X & 6) && In();
    }), n = null;
    else {
      switch (Ym(r)) {
        case 1:
          n = bc;
          break;
        case 4:
          n = Hm;
          break;
        case 16:
          n = ji;
          break;
        case 536870912:
          n = Km;
          break;
        default:
          n = ji;
      }
      n = yy(n, cy.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function cy(e, t) {
  if (Si = -1, ki = 0, X & 6) throw Error(A(327));
  var n = e.callbackNode;
  if (Fr() && e.callbackNode !== n) return null;
  var r = Li(e, e === Pe ? De : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = qi(e, r);
  else {
    t = r;
    var o = X;
    X |= 2;
    var s = fy();
    (Pe !== e || De !== t) && (Ut = null, Yr = xe() + 500, Zn(e, t));
    do
      try {
        PS();
        break;
      } catch (a) {
        dy(e, a);
      }
    while (!0);
    Oc(), Xi.current = s, X = o, we !== null ? t = 0 : (Pe = null, De = 0, t = be);
  }
  if (t !== 0) {
    if (t === 2 && (o = au(e), o !== 0 && (r = o, t = _u(e, o))), t === 1) throw n = us, Zn(e, 0), hn(e, r), Xe(e, xe()), n;
    if (t === 6) hn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !bS(o) && (t = qi(e, r), t === 2 && (s = au(e), s !== 0 && (r = s, t = _u(e, s))), t === 1)) throw n = us, Zn(e, 0), hn(e, r), Xe(e, xe()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          Wn(e, He, Ut);
          break;
        case 3:
          if (hn(e, r), (r & 130023424) === r && (t = Zc + 500 - xe(), 10 < t)) {
            if (Li(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              $e(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = mu(Wn.bind(null, e, He, Ut), t);
            break;
          }
          Wn(e, He, Ut);
          break;
        case 4:
          if (hn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - St(r);
            s = 1 << i, i = t[i], i > o && (o = i), r &= ~s;
          }
          if (r = o, r = xe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * kS(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = mu(Wn.bind(null, e, He, Ut), r);
            break;
          }
          Wn(e, He, Ut);
          break;
        case 5:
          Wn(e, He, Ut);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return Xe(e, xe()), e.callbackNode === n ? cy.bind(null, e) : null;
}
function _u(e, t) {
  var n = Bo;
  return e.current.memoizedState.isDehydrated && (Zn(e, t).flags |= 256), e = qi(e, t), e !== 2 && (t = He, He = n, t !== null && Ou(t)), e;
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
          if (!bt(s(), o)) return !1;
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
  for (t &= ~Qc, t &= ~ba, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - St(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function fp(e) {
  if (X & 6) throw Error(A(327));
  Fr();
  var t = Li(e, 0);
  if (!(t & 1)) return Xe(e, xe()), null;
  var n = qi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = au(e);
    r !== 0 && (t = r, n = _u(e, r));
  }
  if (n === 1) throw n = us, Zn(e, 0), hn(e, t), Xe(e, xe()), n;
  if (n === 6) throw Error(A(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Wn(e, He, Ut), Xe(e, xe()), null;
}
function qc(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    X = n, X === 0 && (Yr = xe() + 500, xa && In());
  }
}
function or(e) {
  yn !== null && yn.tag === 0 && !(X & 6) && Fr();
  var t = X;
  X |= 1;
  var n = ft.transition, r = Z;
  try {
    if (ft.transition = null, Z = 1, e) return e();
  } finally {
    Z = r, ft.transition = n, X = t, !(X & 6) && In();
  }
}
function Jc() {
  Ze = Tr.current, se(Tr);
}
function Zn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, J1(n)), we !== null) for (n = we.return; n !== null; ) {
    var r = n;
    switch (jc(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Vi();
        break;
      case 3:
        Kr(), se(Ge), se(Fe), $c();
        break;
      case 5:
        Bc(r);
        break;
      case 4:
        Kr();
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
  if (Pe = e, we = e = Pn(e.current, null), De = Ze = t, be = 0, us = null, Qc = ba = rr = 0, He = Bo = null, Yn !== null) {
    for (t = 0; t < Yn.length; t++) if (n = Yn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, s = n.pending;
      if (s !== null) {
        var i = s.next;
        s.next = o, r.next = i;
      }
      n.pending = r;
    }
    Yn = null;
  }
  return e;
}
function dy(e, t) {
  do {
    var n = we;
    try {
      if (Oc(), vi.current = Yi, Gi) {
        for (var r = de.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Gi = !1;
      }
      if (nr = 0, Ce = Se = de = null, Vo = !1, is = 0, Xc.current = null, n === null || n.return === null) {
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
          var g = Jf(i);
          if (g !== null) {
            g.flags &= -257, ep(g, i, a, s, t), g.mode & 1 && qf(s, u, t), t = g, l = u;
            var w = t.updateQueue;
            if (w === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(l), t.updateQueue = y;
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              qf(s, u, t), ed();
              break e;
            }
            l = Error(A(426));
          }
        } else if (le && a.mode & 1) {
          var S = Jf(i);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), ep(S, i, a, s, t), Lc(Gr(l, a));
            break e;
          }
        }
        s = l = Gr(l, a), be !== 4 && (be = 2), Bo === null ? Bo = [s] : Bo.push(s), s = i;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var m = Yg(s, l, t);
              Kf(s, m);
              break e;
            case 1:
              a = l;
              var h = s.type, v = s.stateNode;
              if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (bn === null || !bn.has(v)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var k = Xg(s, a, t);
                Kf(s, k);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      hy(n);
    } catch (b) {
      t = b, we === n && n !== null && (we = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function fy() {
  var e = Xi.current;
  return Xi.current = Yi, e === null ? Yi : e;
}
function ed() {
  (be === 0 || be === 3 || be === 2) && (be = 4), Pe === null || !(rr & 268435455) && !(ba & 268435455) || hn(Pe, De);
}
function qi(e, t) {
  var n = X;
  X |= 2;
  var r = fy();
  (Pe !== e || De !== t) && (Ut = null, Zn(e, t));
  do
    try {
      CS();
      break;
    } catch (o) {
      dy(e, o);
    }
  while (!0);
  if (Oc(), X = n, Xi.current = r, we !== null) throw Error(A(261));
  return Pe = null, De = 0, be;
}
function CS() {
  for (; we !== null; ) py(we);
}
function PS() {
  for (; we !== null && !Qw(); ) py(we);
}
function py(e) {
  var t = gy(e.alternate, e, Ze);
  e.memoizedProps = e.pendingProps, t === null ? hy(e) : we = t, Xc.current = null;
}
function hy(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = vS(n, t), n !== null) {
        n.flags &= 32767, we = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        be = 6, we = null;
        return;
      }
    } else if (n = yS(n, t, Ze), n !== null) {
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
function Wn(e, t, n) {
  var r = Z, o = ft.transition;
  try {
    ft.transition = null, Z = 1, ES(e, t, n, r);
  } finally {
    ft.transition = o, Z = r;
  }
  return null;
}
function ES(e, t, n, r) {
  do
    Fr();
  while (yn !== null);
  if (X & 6) throw Error(A(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(A(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (i1(e, s), e === Pe && (we = Pe = null, De = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ys || (Ys = !0, yy(ji, function() {
    return Fr(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = ft.transition, ft.transition = null;
    var i = Z;
    Z = 1;
    var a = X;
    X |= 4, Xc.current = null, wS(e, n), ly(n, e), K1(pu), _i = !!fu, pu = fu = null, e.current = n, SS(n), Zw(), X = a, Z = i, ft.transition = s;
  } else e.current = n;
  if (Ys && (Ys = !1, yn = e, Zi = o), s = e.pendingLanes, s === 0 && (bn = null), e1(n.stateNode), Xe(e, xe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Qi) throw Qi = !1, e = ju, ju = null, e;
  return Zi & 1 && e.tag !== 0 && Fr(), s = e.pendingLanes, s & 1 ? e === Lu ? $o++ : ($o = 0, Lu = e) : $o = 0, In(), null;
}
function Fr() {
  if (yn !== null) {
    var e = Ym(Zi), t = ft.transition, n = Z;
    try {
      if (ft.transition = null, Z = 16 > e ? 16 : e, yn === null) var r = !1;
      else {
        if (e = yn, yn = null, Zi = 0, X & 6) throw Error(A(331));
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
                    var f = c.sibling, g = c.return;
                    if (sy(c), c === u) {
                      L = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = g, L = f;
                      break;
                    }
                    L = g;
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
            var m = s.sibling;
            if (m !== null) {
              m.return = s.return, L = m;
              break e;
            }
            L = s.return;
          }
        }
        var h = e.current;
        for (L = h; L !== null; ) {
          i = L;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) v.return = i, L = v;
          else e: for (i = h; L !== null; ) {
            if (a = L, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  ka(9, a);
              }
            } catch (b) {
              me(a, a.return, b);
            }
            if (a === i) {
              L = null;
              break e;
            }
            var k = a.sibling;
            if (k !== null) {
              k.return = a.return, L = k;
              break e;
            }
            L = a.return;
          }
        }
        if (X = o, In(), _t && typeof _t.onPostCommitFiberRoot == "function") try {
          _t.onPostCommitFiberRoot(ha, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Z = n, ft.transition = t;
    }
  }
  return !1;
}
function pp(e, t, n) {
  t = Gr(n, t), t = Yg(e, t, 1), e = kn(e, t, 1), t = $e(), e !== null && (ws(e, 1, t), Xe(e, t));
}
function me(e, t, n) {
  if (e.tag === 3) pp(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      pp(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (bn === null || !bn.has(r))) {
        e = Gr(n, e), e = Xg(t, e, 1), t = kn(t, e, 1), e = $e(), t !== null && (ws(t, 1, e), Xe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function TS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = $e(), e.pingedLanes |= e.suspendedLanes & n, Pe === e && (De & n) === n && (be === 4 || be === 3 && (De & 130023424) === De && 500 > xe() - Zc ? Zn(e, 0) : Qc |= n), Xe(e, t);
}
function my(e, t) {
  t === 0 && (e.mode & 1 ? (t = Fs, Fs <<= 1, !(Fs & 130023424) && (Fs = 4194304)) : t = 1);
  var n = $e();
  e = qt(e, t), e !== null && (ws(e, t, n), Xe(e, n));
}
function DS(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), my(e, n);
}
function NS(e, t) {
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
  r !== null && r.delete(t), my(e, n);
}
var gy;
gy = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ge.current) Ke = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ke = !1, gS(e, t, n);
    Ke = !!(e.flags & 131072);
  }
  else Ke = !1, le && t.flags & 1048576 && wg(t, $i, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      wi(e, t), e = t.pendingProps;
      var o = Ur(t, Fe.current);
      Ir(t, n), o = Wc(null, t, r, e, o, n);
      var s = Hc();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ye(r) ? (s = !0, zi(t)) : s = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Vc(t), o.updater = Sa, t.stateNode = o, o._reactInternals = t, ku(t, r, e, n), t = Pu(null, t, r, !0, s, n)) : (t.tag = 0, le && s && Mc(t), Be(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (wi(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = RS(r), e = vt(r, e), o) {
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
        throw Error(A(
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
        if (Jg(t), e === null) throw Error(A(387));
        r = t.pendingProps, s = t.memoizedState, o = s.element, Eg(e, t), Hi(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          o = Gr(Error(A(423)), t), t = op(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Gr(Error(A(424)), t), t = op(e, t, r, n, o);
          break e;
        } else for (Je = Sn(t.stateNode.containerInfo.firstChild), et = t, le = !0, wt = null, n = Cg(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Wr(), r === o) {
            t = Jt(e, t, n);
            break e;
          }
          Be(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Tg(t), e === null && xu(t), r = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, i = o.children, hu(r, o) ? i = null : s !== null && hu(r, s) && (t.flags |= 32), qg(e, t), Be(e, t, i, n), t.child;
    case 6:
      return e === null && xu(t), null;
    case 13:
      return ey(e, t, n);
    case 4:
      return zc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Hr(t, null, r, n) : Be(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : vt(r, o), tp(e, t, r, o, n);
    case 7:
      return Be(e, t, t.pendingProps, n), t.child;
    case 8:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, s = t.memoizedProps, i = o.value, te(Ui, r._currentValue), r._currentValue = i, s !== null) if (bt(s.value, i)) {
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
            if (i = s.return, i === null) throw Error(A(341));
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
        Be(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Ir(t, n), o = pt(o), r = r(o), t.flags |= 1, Be(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = vt(r, t.pendingProps), o = vt(r.type, o), np(e, t, r, o, n);
    case 15:
      return Qg(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : vt(r, o), wi(e, t), t.tag = 1, Ye(r) ? (e = !0, zi(t)) : e = !1, Ir(t, n), Gg(t, r, o), ku(t, r, o, n), Pu(null, t, r, !0, e, n);
    case 19:
      return ty(e, t, n);
    case 22:
      return Zg(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function yy(e, t) {
  return Wm(e, t);
}
function AS(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function dt(e, t, n, r) {
  return new AS(e, t, n, r);
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
function Pn(e, t) {
  var n = e.alternate;
  return n === null ? (n = dt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function bi(e, t, n, r, o, s) {
  var i = 2;
  if (r = e, typeof e == "function") td(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case yr:
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
    case Tm:
      return Ca(n, o, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Pm:
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
      throw Error(A(130, e == null ? e : typeof e, ""));
  }
  return t = dt(i, n, t, o), t.elementType = e, t.type = r, t.lanes = s, t;
}
function qn(e, t, n, r) {
  return e = dt(7, e, r, t), e.lanes = n, e;
}
function Ca(e, t, n, r) {
  return e = dt(22, e, r, t), e.elementType = Tm, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function yl(e, t, n) {
  return e = dt(6, e, null, t), e.lanes = n, e;
}
function vl(e, t, n) {
  return t = dt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function MS(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = qa(0), this.expirationTimes = qa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = qa(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function nd(e, t, n, r, o, s, i, a, l) {
  return e = new MS(e, t, n, a, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = dt(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Vc(s), e;
}
function jS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: gr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function vy(e) {
  if (!e) return Nn;
  e = e._reactInternals;
  e: {
    if (cr(e) !== e || e.tag !== 1) throw Error(A(170));
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
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ye(n)) return vg(e, n, t);
  }
  return t;
}
function xy(e, t, n, r, o, s, i, a, l) {
  return e = nd(n, r, !0, e, o, s, i, a, l), e.context = vy(null), n = e.current, r = $e(), o = Cn(n), s = Gt(r, o), s.callback = t ?? null, kn(n, s, o), e.current.lanes = o, ws(e, o, r), Xe(e, r), e;
}
function Pa(e, t, n, r) {
  var o = t.current, s = $e(), i = Cn(o);
  return n = vy(n), t.context === null ? t.context = n : t.pendingContext = n, t = Gt(s, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = kn(o, t, i), e !== null && (kt(e, o, i, s), yi(e, o, i)), i;
}
function Ji(e) {
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
function LS() {
  return null;
}
var wy = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function od(e) {
  this._internalRoot = e;
}
Ea.prototype.render = od.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  Pa(e, t, null, null);
};
Ea.prototype.unmount = od.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    or(function() {
      Pa(null, e, null, null);
    }), t[Zt] = null;
  }
};
function Ea(e) {
  this._internalRoot = e;
}
Ea.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Zm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pn.length && t !== 0 && t < pn[n].priority; n++) ;
    pn.splice(n, 0, e), n === 0 && Jm(e);
  }
};
function sd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ta(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function mp() {
}
function _S(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var u = Ji(i);
        s.call(u);
      };
    }
    var i = xy(t, r, e, 0, null, !1, !1, "", mp);
    return e._reactRootContainer = i, e[Zt] = i.current, ts(e.nodeType === 8 ? e.parentNode : e), or(), i;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = Ji(l);
      a.call(u);
    };
  }
  var l = nd(e, 0, !1, null, null, !1, !1, "", mp);
  return e._reactRootContainer = l, e[Zt] = l.current, ts(e.nodeType === 8 ? e.parentNode : e), or(function() {
    Pa(t, l, n, r);
  }), l;
}
function Da(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = Ji(i);
        a.call(l);
      };
    }
    Pa(t, i, e, o);
  } else i = _S(n, t, e, o, r);
  return Ji(i);
}
Xm = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Do(t.pendingLanes);
        n !== 0 && (Cc(t, n | 1), Xe(t, xe()), !(X & 6) && (Yr = xe() + 500, In()));
      }
      break;
    case 13:
      or(function() {
        var r = qt(e, 1);
        if (r !== null) {
          var o = $e();
          kt(r, e, 1, o);
        }
      }), rd(e, 1);
  }
};
Pc = function(e) {
  if (e.tag === 13) {
    var t = qt(e, 134217728);
    if (t !== null) {
      var n = $e();
      kt(t, e, 134217728, n);
    }
    rd(e, 134217728);
  }
};
Qm = function(e) {
  if (e.tag === 13) {
    var t = Cn(e), n = qt(e, t);
    if (n !== null) {
      var r = $e();
      kt(n, e, t, r);
    }
    rd(e, t);
  }
};
Zm = function() {
  return Z;
};
qm = function(e, t) {
  var n = Z;
  try {
    return Z = e, t();
  } finally {
    Z = n;
  }
};
ou = function(e, t, n) {
  switch (t) {
    case "input":
      if (Zl(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = va(r);
            if (!o) throw Error(A(90));
            Nm(r), Zl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Rm(e, n);
      break;
    case "select":
      t = n.value, t != null && jr(e, !!n.multiple, t, !1);
  }
};
Fm = qc;
Vm = or;
var OS = { usingClientEntryPoint: !1, Events: [ks, Sr, va, Om, Im, qc] }, ko = { findFiberByHostInstance: Gn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, IS = { bundleType: ko.bundleType, version: ko.version, rendererPackageName: ko.rendererPackageName, rendererConfig: ko.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: rn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = $m(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ko.findFiberByHostInstance || LS, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xs.isDisabled && Xs.supportsFiber) try {
    ha = Xs.inject(IS), _t = Xs;
  } catch {
  }
}
st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = OS;
st.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!sd(t)) throw Error(A(200));
  return jS(e, t, null, n);
};
st.createRoot = function(e, t) {
  if (!sd(e)) throw Error(A(299));
  var n = !1, r = "", o = wy;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = nd(e, 1, !1, null, null, n, !1, r, o), e[Zt] = t.current, ts(e.nodeType === 8 ? e.parentNode : e), new od(t);
};
st.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e)));
  return e = $m(t), e = e === null ? null : e.stateNode, e;
};
st.flushSync = function(e) {
  return or(e);
};
st.hydrate = function(e, t, n) {
  if (!Ta(t)) throw Error(A(200));
  return Da(null, e, t, !0, n);
};
st.hydrateRoot = function(e, t, n) {
  if (!sd(e)) throw Error(A(405));
  var r = n != null && n.hydratedSources || null, o = !1, s = "", i = wy;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = xy(t, null, e, 1, n ?? null, o, !1, s, i), e[Zt] = t.current, ts(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Ea(t);
};
st.render = function(e, t, n) {
  if (!Ta(t)) throw Error(A(200));
  return Da(null, e, t, !1, n);
};
st.unmountComponentAtNode = function(e) {
  if (!Ta(e)) throw Error(A(40));
  return e._reactRootContainer ? (or(function() {
    Da(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Zt] = null;
    });
  }), !0) : !1;
};
st.unstable_batchedUpdates = qc;
st.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ta(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return Da(e, t, n, !1, r);
};
st.version = "18.3.1-next-f1338f8080-20240426";
function Sy() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sy);
    } catch (e) {
      console.error(e);
    }
}
Sy(), Sm.exports = st;
var ro = Sm.exports;
const FS = /* @__PURE__ */ lm(ro);
var Na, gp = ro;
Na = gp.createRoot, gp.hydrateRoot;
function ky(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ky(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function VS() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ky(e)) && (r && (r += " "), r += t);
  return r;
}
const id = "-", zS = (e) => {
  const t = $S(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(id);
      return a[0] === "" && a.length !== 1 && a.shift(), by(a, t) || BS(i);
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
}, yp = /^\[(.+)\]$/, BS = (e) => {
  if (yp.test(e)) {
    const t = yp.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, $S = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return WS(Object.entries(e.classGroups), n).forEach(([s, i]) => {
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
      if (US(o)) {
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
}, US = (e) => e.isThemeGetter, WS = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a])) : s);
  return [n, o];
}) : e, HS = (e) => {
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
}, Cy = "!", KS = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], s = t.length, i = (a) => {
    const l = [];
    let u = 0, c = 0, d;
    for (let S = 0; S < a.length; S++) {
      let m = a[S];
      if (u === 0) {
        if (m === o && (r || a.slice(S, S + s) === t)) {
          l.push(a.slice(c, S)), c = S + s;
          continue;
        }
        if (m === "/") {
          d = S;
          continue;
        }
      }
      m === "[" ? u++ : m === "]" && u--;
    }
    const f = l.length === 0 ? a : a.substring(c), g = f.startsWith(Cy), w = g ? f.substring(1) : f, y = d && d > c ? d - c : void 0;
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
}, GS = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, YS = (e) => ({
  cache: HS(e.cacheSize),
  parseClassName: KS(e),
  ...zS(e)
}), XS = /\s+/, QS = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, s = [], i = e.trim().split(XS);
  let a = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const u = i[l], {
      modifiers: c,
      hasImportantModifier: d,
      baseClassName: f,
      maybePostfixModifierPosition: g
    } = n(u);
    let w = !!g, y = r(w ? f.substring(0, g) : f);
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
    const S = GS(c).join(":"), m = d ? S + Cy : S, h = m + y;
    if (s.includes(h))
      continue;
    s.push(h);
    const v = o(y, w);
    for (let k = 0; k < v.length; ++k) {
      const b = v[k];
      s.push(m + b);
    }
    a = u + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function ZS() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Py(t)) && (r && (r += " "), r += n);
  return r;
}
const Py = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Py(e[r])) && (n && (n += " "), n += t);
  return n;
};
function qS(e, ...t) {
  let n, r, o, s = i;
  function i(l) {
    const u = t.reduce((c, d) => d(c), e());
    return n = YS(u), r = n.cache.get, o = n.cache.set, s = a, a(l);
  }
  function a(l) {
    const u = r(l);
    if (u)
      return u;
    const c = QS(l, n);
    return o(l, c), c;
  }
  return function() {
    return s(ZS.apply(null, arguments));
  };
}
const re = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Ey = /^\[(?:([a-z-]+):)?(.+)\]$/i, JS = /^\d+\/\d+$/, ek = /* @__PURE__ */ new Set(["px", "full", "screen"]), tk = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, nk = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, rk = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ok = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, sk = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, $t = (e) => Vr(e) || ek.has(e) || JS.test(e), sn = (e) => oo(e, "length", pk), Vr = (e) => !!e && !Number.isNaN(Number(e)), xl = (e) => oo(e, "number", Vr), bo = (e) => !!e && Number.isInteger(Number(e)), ik = (e) => e.endsWith("%") && Vr(e.slice(0, -1)), U = (e) => Ey.test(e), an = (e) => tk.test(e), ak = /* @__PURE__ */ new Set(["length", "size", "percentage"]), lk = (e) => oo(e, ak, Ty), uk = (e) => oo(e, "position", Ty), ck = /* @__PURE__ */ new Set(["image", "url"]), dk = (e) => oo(e, ck, mk), fk = (e) => oo(e, "", hk), Co = () => !0, oo = (e, t, n) => {
  const r = Ey.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, pk = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  nk.test(e) && !rk.test(e)
), Ty = () => !1, hk = (e) => ok.test(e), mk = (e) => sk.test(e), gk = () => {
  const e = re("colors"), t = re("spacing"), n = re("blur"), r = re("brightness"), o = re("borderColor"), s = re("borderRadius"), i = re("borderSpacing"), a = re("borderWidth"), l = re("contrast"), u = re("grayscale"), c = re("hueRotate"), d = re("invert"), f = re("gap"), g = re("gradientColorStops"), w = re("gradientColorStopPositions"), y = re("inset"), S = re("margin"), m = re("opacity"), h = re("padding"), v = re("saturate"), k = re("scale"), b = re("sepia"), C = re("skew"), P = re("space"), E = re("translate"), N = () => ["auto", "contain", "none"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", U, t], R = () => [U, t], z = () => ["", $t, sn], B = () => ["auto", Vr, U], Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], O = () => ["solid", "dashed", "dotted", "double", "none"], I = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], T = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], M = () => ["", "0", U], _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], $ = () => [Vr, U];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Co],
      spacing: [$t, sn],
      blur: ["none", "", an, U],
      brightness: $(),
      borderColor: [e],
      borderRadius: ["none", "", "full", an, U],
      borderSpacing: R(),
      borderWidth: z(),
      contrast: $(),
      grayscale: M(),
      hueRotate: $(),
      invert: M(),
      gap: R(),
      gradientColorStops: [e],
      gradientColorStopPositions: [ik, sn],
      inset: j(),
      margin: j(),
      opacity: $(),
      padding: R(),
      saturate: $(),
      scale: $(),
      sepia: M(),
      skew: $(),
      space: R(),
      translate: R()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", U]
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
        object: [...Y(), U]
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
        overscroll: N()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": N()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": N()
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
        z: ["auto", bo, U]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: j()
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
        flex: ["1", "auto", "initial", "none", U]
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
        order: ["first", "last", "none", bo, U]
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
          span: ["full", bo, U]
        }, U]
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
        "grid-rows": [Co]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [bo, U]
        }, U]
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
        "auto-cols": ["auto", "min", "max", "fr", U]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", U]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", U, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [U, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [U, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [an]
        }, an]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [U, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [U, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [U, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [U, t, "auto", "min", "max", "fit"]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", xl]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", U]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Vr, xl]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", $t, U]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", U]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", U]
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
        decoration: ["auto", "from-font", $t, sn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", $t, U]
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
        indent: R()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", U]
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
        content: ["none", U]
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
        bg: [...Y(), uk]
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
        bg: ["auto", "cover", "contain", lk]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, dk]
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
        "outline-offset": [$t, U]
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
        ring: z()
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
        shadow: ["", "inner", "none", an, fk]
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
        opacity: [m]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...I(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": I()
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
        "drop-shadow": ["", "none", an, U]
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
        sepia: [b]
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
        "backdrop-sepia": [b]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", U]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: $()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", U]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: $()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", U]
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
        scale: [k]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [k]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [k]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [bo, U]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", U]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", U]
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
        "scroll-m": R()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": R()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": R()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": R()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": R()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": R()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": R()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": R()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": R()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": R()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": R()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": R()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": R()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": R()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": R()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": R()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": R()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": R()
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
        "will-change": ["auto", "scroll", "contents", "transform", U]
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
        stroke: [$t, sn, xl]
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
}, yk = /* @__PURE__ */ qS(gk);
function ge(...e) {
  return yk(VS(e));
}
function ad({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card",
      className: ge(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        e
      ),
      ...t
    }
  );
}
function Dy({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: ge("px-6", e),
      ...t
    }
  );
}
function vk({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: ge("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
function xp(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function G(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function xk(e, t) {
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
      var m;
      const { scope: f, children: g, ...w } = d, y = ((m = f == null ? void 0 : f[e]) == null ? void 0 : m[l]) || a, S = x.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ p.jsx(y.Provider, { value: S, children: g });
    };
    u.displayName = s + "Provider";
    function c(d, f) {
      var y;
      const g = ((y = f == null ? void 0 : f[e]) == null ? void 0 : y[l]) || a, w = x.useContext(g);
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
  return o.scopeName = e, [r, wk(o, ...t)];
}
function wk(...e) {
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
function Ny(...e) {
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
function ye(...e) {
  return x.useCallback(Ny(...e), e);
}
// @__NO_SIDE_EFFECTS__
function cs(e) {
  const t = /* @__PURE__ */ Sk(e), n = x.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = x.Children.toArray(s), l = a.find(bk);
    if (l) {
      const u = l.props.children, c = a.map((d) => d === l ? x.Children.count(u) > 1 ? x.Children.only(null) : x.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: x.isValidElement(u) ? x.cloneElement(u, void 0, c) : null });
    }
    return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Sk(e) {
  const t = x.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (x.isValidElement(o)) {
      const i = Pk(o), a = Ck(s, o.props);
      return o.type !== x.Fragment && (a.ref = r ? Ny(r, i) : i), x.cloneElement(o, a);
    }
    return x.Children.count(o) > 1 ? x.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var kk = Symbol("radix.slottable");
function bk(e) {
  return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === kk;
}
function Ck(e, t) {
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
function Pk(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Ay(e) {
  const t = e + "CollectionProvider", [n, r] = so(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (y) => {
    const { scope: S, children: m } = y, h = ke.useRef(null), v = ke.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p.jsx(o, { scope: S, itemMap: v, collectionRef: h, children: m });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ cs(a), u = ke.forwardRef(
    (y, S) => {
      const { scope: m, children: h } = y, v = s(a, m), k = ye(S, v.collectionRef);
      return /* @__PURE__ */ p.jsx(l, { ref: k, children: h });
    }
  );
  u.displayName = a;
  const c = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ cs(c), g = ke.forwardRef(
    (y, S) => {
      const { scope: m, children: h, ...v } = y, k = ke.useRef(null), b = ye(S, k), C = s(c, m);
      return ke.useEffect(() => (C.itemMap.set(k, { ref: k, ...v }), () => void C.itemMap.delete(k))), /* @__PURE__ */ p.jsx(f, { [d]: "", ref: b, children: h });
    }
  );
  g.displayName = c;
  function w(y) {
    const S = s(e + "CollectionConsumer", y);
    return ke.useCallback(() => {
      const h = S.collectionRef.current;
      if (!h) return [];
      const v = Array.from(h.querySelectorAll(`[${d}]`));
      return Array.from(S.itemMap.values()).sort(
        (C, P) => v.indexOf(C.ref.current) - v.indexOf(P.ref.current)
      );
    }, [S.collectionRef, S.itemMap]);
  }
  return [
    { Provider: i, Slot: u, ItemSlot: g },
    w,
    r
  ];
}
var Ek = x.createContext(void 0);
function ld(e) {
  const t = x.useContext(Ek);
  return e || t || "ltr";
}
var Tk = [
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
], Q = Tk.reduce((e, t) => {
  const n = /* @__PURE__ */ cs(`Primitive.${t}`), r = x.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Dk(e, t) {
  e && ro.flushSync(() => e.dispatchEvent(t));
}
function An(e) {
  const t = x.useRef(e);
  return x.useEffect(() => {
    t.current = e;
  }), x.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Nk(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = An(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Ak = "DismissableLayer", Fu = "dismissableLayer.update", Rk = "dismissableLayer.pointerDownOutside", Mk = "dismissableLayer.focusOutside", Sp, Ry = x.createContext({
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
    } = e, u = x.useContext(Ry), [c, d] = x.useState(null), f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = x.useState({}), w = ye(t, (P) => d(P)), y = Array.from(u.layers), [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), m = y.indexOf(S), h = c ? y.indexOf(c) : -1, v = u.layersWithOutsidePointerEventsDisabled.size > 0, k = h >= m, b = _k((P) => {
      const E = P.target, N = [...u.branches].some((D) => D.contains(E));
      !k || N || (o == null || o(P), i == null || i(P), P.defaultPrevented || a == null || a());
    }, f), C = Ok((P) => {
      const E = P.target;
      [...u.branches].some((D) => D.contains(E)) || (s == null || s(P), i == null || i(P), P.defaultPrevented || a == null || a());
    }, f);
    return Nk((P) => {
      h === u.layers.size - 1 && (r == null || r(P), !P.defaultPrevented && a && (P.preventDefault(), a()));
    }, f), x.useEffect(() => {
      if (c)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Sp = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), kp(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Sp);
        };
    }, [c, f, n, u]), x.useEffect(() => () => {
      c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), kp());
    }, [c, u]), x.useEffect(() => {
      const P = () => g({});
      return document.addEventListener(Fu, P), () => document.removeEventListener(Fu, P);
    }, []), /* @__PURE__ */ p.jsx(
      Q.div,
      {
        ...l,
        ref: w,
        style: {
          pointerEvents: v ? k ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: G(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: G(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: G(
          e.onPointerDownCapture,
          b.onPointerDownCapture
        )
      }
    );
  }
);
ud.displayName = Ak;
var jk = "DismissableLayerBranch", Lk = x.forwardRef((e, t) => {
  const n = x.useContext(Ry), r = x.useRef(null), o = ye(t, r);
  return x.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ p.jsx(Q.div, { ...e, ref: o });
});
Lk.displayName = jk;
function _k(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = An(e), r = x.useRef(!1), o = x.useRef(() => {
  });
  return x.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          My(
            Rk,
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
function Ok(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = An(e), r = x.useRef(!1);
  return x.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && My(Mk, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function kp() {
  const e = new CustomEvent(Fu);
  document.dispatchEvent(e);
}
function My(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Dk(o, s) : o.dispatchEvent(s);
}
var wl = 0;
function jy() {
  x.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? bp()), document.body.insertAdjacentElement("beforeend", e[1] ?? bp()), wl++, () => {
      wl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), wl--;
    };
  }, []);
}
function bp() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Sl = "focusScope.autoFocusOnMount", kl = "focusScope.autoFocusOnUnmount", Cp = { bubbles: !1, cancelable: !0 }, Ik = "FocusScope", cd = x.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = x.useState(null), u = An(o), c = An(s), d = x.useRef(null), f = ye(t, (y) => l(y)), g = x.useRef({
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
        const k = v.target;
        a.contains(k) ? d.current = k : ln(d.current, { select: !0 });
      }, S = function(v) {
        if (g.paused || !a) return;
        const k = v.relatedTarget;
        k !== null && (a.contains(k) || ln(d.current, { select: !0 }));
      }, m = function(v) {
        if (document.activeElement === document.body)
          for (const b of v)
            b.removedNodes.length > 0 && ln(a);
      };
      document.addEventListener("focusin", y), document.addEventListener("focusout", S);
      const h = new MutationObserver(m);
      return a && h.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", S), h.disconnect();
      };
    }
  }, [r, a, g.paused]), x.useEffect(() => {
    if (a) {
      Ep.add(g);
      const y = document.activeElement;
      if (!a.contains(y)) {
        const m = new CustomEvent(Sl, Cp);
        a.addEventListener(Sl, u), a.dispatchEvent(m), m.defaultPrevented || (Fk(Uk(Ly(a)), { select: !0 }), document.activeElement === y && ln(a));
      }
      return () => {
        a.removeEventListener(Sl, u), setTimeout(() => {
          const m = new CustomEvent(kl, Cp);
          a.addEventListener(kl, c), a.dispatchEvent(m), m.defaultPrevented || ln(y ?? document.body, { select: !0 }), a.removeEventListener(kl, c), Ep.remove(g);
        }, 0);
      };
    }
  }, [a, u, c, g]);
  const w = x.useCallback(
    (y) => {
      if (!n && !r || g.paused) return;
      const S = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, m = document.activeElement;
      if (S && m) {
        const h = y.currentTarget, [v, k] = Vk(h);
        v && k ? !y.shiftKey && m === k ? (y.preventDefault(), n && ln(v, { select: !0 })) : y.shiftKey && m === v && (y.preventDefault(), n && ln(k, { select: !0 })) : m === h && y.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ p.jsx(Q.div, { tabIndex: -1, ...i, ref: f, onKeyDown: w });
});
cd.displayName = Ik;
function Fk(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ln(r, { select: t }), document.activeElement !== n) return;
}
function Vk(e) {
  const t = Ly(e), n = Pp(t, e), r = Pp(t.reverse(), e);
  return [n, r];
}
function Ly(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Pp(e, t) {
  for (const n of e)
    if (!zk(n, { upTo: t })) return n;
}
function zk(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Bk(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ln(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Bk(e) && t && e.select();
  }
}
var Ep = $k();
function $k() {
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
function Uk(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ve = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {
}, Wk = xm[" useId ".trim().toString()] || (() => {
}), Hk = 0;
function En(e) {
  const [t, n] = x.useState(Wk());
  return Ve(() => {
    n((r) => r ?? String(Hk++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const Kk = ["top", "right", "bottom", "left"], Rn = Math.min, qe = Math.max, ea = Math.round, Qs = Math.floor, It = (e) => ({
  x: e,
  y: e
}), Gk = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Yk = {
  start: "end",
  end: "start"
};
function Vu(e, t, n) {
  return qe(e, Rn(t, n));
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
const Xk = /* @__PURE__ */ new Set(["top", "bottom"]);
function Lt(e) {
  return Xk.has(tn(e)) ? "y" : "x";
}
function pd(e) {
  return dd(Lt(e));
}
function Qk(e, t, n) {
  n === void 0 && (n = !1);
  const r = io(e), o = pd(e), s = fd(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = ta(i)), [i, ta(i)];
}
function Zk(e) {
  const t = ta(e);
  return [zu(e), t, zu(t)];
}
function zu(e) {
  return e.replace(/start|end/g, (t) => Yk[t]);
}
const Dp = ["left", "right"], Np = ["right", "left"], qk = ["top", "bottom"], Jk = ["bottom", "top"];
function eb(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Np : Dp : t ? Dp : Np;
    case "left":
    case "right":
      return t ? qk : Jk;
    default:
      return [];
  }
}
function tb(e, t, n, r) {
  const o = io(e);
  let s = eb(tn(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(zu)))), s;
}
function ta(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Gk[t]);
}
function nb(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function _y(e) {
  return typeof e != "number" ? nb(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function na(e) {
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
function Ap(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = Lt(t), i = pd(t), a = fd(i), l = tn(t), u = s === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let g;
  switch (l) {
    case "top":
      g = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: c,
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
  switch (io(t)) {
    case "start":
      g[i] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      g[i] += f * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const rb = async (e, t, n) => {
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
  } = Ap(u, r, l), f = r, g = {}, w = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: S,
      fn: m
    } = a[y], {
      x: h,
      y: v,
      data: k,
      reset: b
    } = await m({
      x: c,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: g,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = h ?? c, d = v ?? d, g = {
      ...g,
      [S]: {
        ...g[S],
        ...k
      }
    }, b && w <= 50 && (w++, typeof b == "object" && (b.placement && (f = b.placement), b.rects && (u = b.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : b.rects), {
      x: c,
      y: d
    } = Ap(u, f, l)), y = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: g
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
    padding: g = 0
  } = en(t, e), w = _y(g), S = a[f ? d === "floating" ? "reference" : "floating" : d], m = na(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(S))) == null || n ? S : S.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), h = d === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, v = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), k = await (s.isElement == null ? void 0 : s.isElement(v)) ? await (s.getScale == null ? void 0 : s.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = na(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: h,
    offsetParent: v,
    strategy: l
  }) : h);
  return {
    top: (m.top - b.top + w.top) / k.y,
    bottom: (b.bottom - m.bottom + w.bottom) / k.y,
    left: (m.left - b.left + w.left) / k.x,
    right: (b.right - m.right + w.right) / k.x
  };
}
const ob = (e) => ({
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
    const d = _y(c), f = {
      x: n,
      y: r
    }, g = pd(o), w = fd(g), y = await i.getDimensions(u), S = g === "y", m = S ? "top" : "left", h = S ? "bottom" : "right", v = S ? "clientHeight" : "clientWidth", k = s.reference[w] + s.reference[g] - f[g] - s.floating[w], b = f[g] - s.reference[g], C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let P = C ? C[v] : 0;
    (!P || !await (i.isElement == null ? void 0 : i.isElement(C))) && (P = a.floating[v] || s.floating[w]);
    const E = k / 2 - b / 2, N = P / 2 - y[w] / 2 - 1, D = Rn(d[m], N), j = Rn(d[h], N), R = D, z = P - y[w] - j, B = P / 2 - y[w] / 2 + E, Y = Vu(R, B, z), O = !l.arrow && io(o) != null && B !== Y && s.reference[w] / 2 - (B < R ? D : j) - y[w] / 2 < 0, I = O ? B < R ? B - R : B - z : 0;
    return {
      [g]: f[g] + I,
      data: {
        [g]: Y,
        centerOffset: B - Y - I,
        ...O && {
          alignmentOffset: I
        }
      },
      reset: O
    };
  }
}), sb = function(e) {
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
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: y = !0,
        ...S
      } = en(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const m = tn(o), h = Lt(a), v = tn(a) === a, k = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), b = f || (v || !y ? [ta(a)] : Zk(a)), C = w !== "none";
      !f && C && b.push(...tb(a, y, w, k));
      const P = [a, ...b], E = await ds(t, S), N = [];
      let D = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (c && N.push(E[m]), d) {
        const B = Qk(o, i, k);
        N.push(E[B[0]], E[B[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: N
      }], !N.every((B) => B <= 0)) {
        var j, R;
        const B = (((j = s.flip) == null ? void 0 : j.index) || 0) + 1, Y = P[B];
        if (Y && (!(d === "alignment" ? h !== Lt(Y) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        D.every((T) => Lt(T.placement) === h ? T.overflows[0] > 0 : !0)))
          return {
            data: {
              index: B,
              overflows: D
            },
            reset: {
              placement: Y
            }
          };
        let O = (R = D.filter((I) => I.overflows[0] <= 0).sort((I, T) => I.overflows[1] - T.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!O)
          switch (g) {
            case "bestFit": {
              var z;
              const I = (z = D.filter((T) => {
                if (C) {
                  const M = Lt(T.placement);
                  return M === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((T) => [T.placement, T.overflows.filter((M) => M > 0).reduce((M, _) => M + _, 0)]).sort((T, M) => T[1] - M[1])[0]) == null ? void 0 : z[0];
              I && (O = I);
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
function Rp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Mp(e) {
  return Kk.some((t) => e[t] >= 0);
}
const ib = function(e) {
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
          }), i = Rp(s, n.reference);
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
          }), i = Rp(s, n.floating);
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
}, Oy = /* @__PURE__ */ new Set(["left", "top"]);
async function ab(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = tn(n), a = io(n), l = Lt(n) === "y", u = Oy.has(i) ? -1 : 1, c = s && l ? -1 : 1, d = en(t, e);
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
    x: g * c,
    y: f * u
  } : {
    x: f * u,
    y: g * c
  };
}
const lb = function(e) {
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
      } = t, l = await ab(t, e);
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
}, ub = function(e) {
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
      } = en(e, t), u = {
        x: n,
        y: r
      }, c = await ds(t, l), d = Lt(tn(o)), f = dd(d);
      let g = u[f], w = u[d];
      if (s) {
        const S = f === "y" ? "top" : "left", m = f === "y" ? "bottom" : "right", h = g + c[S], v = g - c[m];
        g = Vu(h, g, v);
      }
      if (i) {
        const S = d === "y" ? "top" : "left", m = d === "y" ? "bottom" : "right", h = w + c[S], v = w - c[m];
        w = Vu(h, w, v);
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
}, cb = function(e) {
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
      let g = c[f], w = c[d];
      const y = en(a, t), S = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (l) {
        const v = f === "y" ? "height" : "width", k = s.reference[f] - s.floating[v] + S.mainAxis, b = s.reference[f] + s.reference[v] - S.mainAxis;
        g < k ? g = k : g > b && (g = b);
      }
      if (u) {
        var m, h;
        const v = f === "y" ? "width" : "height", k = Oy.has(tn(o)), b = s.reference[d] - s.floating[v] + (k && ((m = i.offset) == null ? void 0 : m[d]) || 0) + (k ? 0 : S.crossAxis), C = s.reference[d] + s.reference[v] + (k ? 0 : ((h = i.offset) == null ? void 0 : h[d]) || 0) - (k ? S.crossAxis : 0);
        w < b ? w = b : w > C && (w = C);
      }
      return {
        [f]: g,
        [d]: w
      };
    }
  };
}, db = function(e) {
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
      } = en(e, t), c = await ds(t, u), d = tn(o), f = io(o), g = Lt(o) === "y", {
        width: w,
        height: y
      } = s.floating;
      let S, m;
      d === "top" || d === "bottom" ? (S = d, m = f === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (m = d, S = f === "end" ? "top" : "bottom");
      const h = y - c.top - c.bottom, v = w - c.left - c.right, k = Rn(y - c[S], h), b = Rn(w - c[m], v), C = !t.middlewareData.shift;
      let P = k, E = b;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (E = v), (r = t.middlewareData.shift) != null && r.enabled.y && (P = h), C && !f) {
        const D = qe(c.left, 0), j = qe(c.right, 0), R = qe(c.top, 0), z = qe(c.bottom, 0);
        g ? E = w - 2 * (D !== 0 || j !== 0 ? D + j : qe(c.left, c.right)) : P = y - 2 * (R !== 0 || z !== 0 ? R + z : qe(c.top, c.bottom));
      }
      await l({
        ...t,
        availableWidth: E,
        availableHeight: P
      });
      const N = await i.getDimensions(a.floating);
      return w !== N.width || y !== N.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Aa() {
  return typeof window < "u";
}
function ao(e) {
  return Iy(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function tt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Bt(e) {
  var t;
  return (t = (Iy(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Iy(e) {
  return Aa() ? e instanceof Node || e instanceof tt(e).Node : !1;
}
function Ct(e) {
  return Aa() ? e instanceof Element || e instanceof tt(e).Element : !1;
}
function zt(e) {
  return Aa() ? e instanceof HTMLElement || e instanceof tt(e).HTMLElement : !1;
}
function jp(e) {
  return !Aa() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof tt(e).ShadowRoot;
}
const fb = /* @__PURE__ */ new Set(["inline", "contents"]);
function Cs(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Pt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !fb.has(o);
}
const pb = /* @__PURE__ */ new Set(["table", "td", "th"]);
function hb(e) {
  return pb.has(ao(e));
}
const mb = [":popover-open", ":modal"];
function Ra(e) {
  return mb.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const gb = ["transform", "translate", "scale", "rotate", "perspective"], yb = ["transform", "translate", "scale", "rotate", "perspective", "filter"], vb = ["paint", "layout", "strict", "content"];
function hd(e) {
  const t = md(), n = Ct(e) ? Pt(e) : e;
  return gb.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || yb.some((r) => (n.willChange || "").includes(r)) || vb.some((r) => (n.contain || "").includes(r));
}
function xb(e) {
  let t = Mn(e);
  for (; zt(t) && !Xr(t); ) {
    if (hd(t))
      return t;
    if (Ra(t))
      return null;
    t = Mn(t);
  }
  return null;
}
function md() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const wb = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Xr(e) {
  return wb.has(ao(e));
}
function Pt(e) {
  return tt(e).getComputedStyle(e);
}
function Ma(e) {
  return Ct(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Mn(e) {
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
function Fy(e) {
  const t = Mn(e);
  return Xr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : zt(t) && Cs(t) ? t : Fy(t);
}
function fs(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Fy(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = tt(o);
  if (s) {
    const a = Bu(i);
    return t.concat(i, i.visualViewport || [], Cs(o) ? o : [], a && n ? fs(a) : []);
  }
  return t.concat(o, fs(o, [], n));
}
function Bu(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Vy(e) {
  const t = Pt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = zt(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = ea(n) !== s || ea(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function gd(e) {
  return Ct(e) ? e : e.contextElement;
}
function zr(e) {
  const t = gd(e);
  if (!zt(t))
    return It(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Vy(t);
  let i = (s ? ea(n.width) : n.width) / r, a = (s ? ea(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const Sb = /* @__PURE__ */ It(0);
function zy(e) {
  const t = tt(e);
  return !md() || !t.visualViewport ? Sb : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function kb(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== tt(e) ? !1 : t;
}
function sr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = gd(e);
  let i = It(1);
  t && (r ? Ct(r) && (i = zr(r)) : i = zr(e));
  const a = kb(s, n, r) ? zy(s) : It(0);
  let l = (o.left + a.x) / i.x, u = (o.top + a.y) / i.y, c = o.width / i.x, d = o.height / i.y;
  if (s) {
    const f = tt(s), g = r && Ct(r) ? tt(r) : r;
    let w = f, y = Bu(w);
    for (; y && r && g !== w; ) {
      const S = zr(y), m = y.getBoundingClientRect(), h = Pt(y), v = m.left + (y.clientLeft + parseFloat(h.paddingLeft)) * S.x, k = m.top + (y.clientTop + parseFloat(h.paddingTop)) * S.y;
      l *= S.x, u *= S.y, c *= S.x, d *= S.y, l += v, u += k, w = tt(y), y = Bu(w);
    }
  }
  return na({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function yd(e, t) {
  const n = Ma(e).scrollLeft;
  return t ? t.left + n : sr(Bt(e)).left + n;
}
function By(e, t, n) {
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
function bb(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = Bt(r), a = t ? Ra(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = It(1);
  const c = It(0), d = zt(r);
  if ((d || !d && !s) && ((ao(r) !== "body" || Cs(i)) && (l = Ma(r)), zt(r))) {
    const g = sr(r);
    u = zr(r), c.x = g.x + r.clientLeft, c.y = g.y + r.clientTop;
  }
  const f = i && !d && !s ? By(i, l, !0) : It(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function Cb(e) {
  return Array.from(e.getClientRects());
}
function Pb(e) {
  const t = Bt(e), n = Ma(e), r = e.ownerDocument.body, o = qe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = qe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + yd(e);
  const a = -n.scrollTop;
  return Pt(r).direction === "rtl" && (i += qe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
function Eb(e, t) {
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
const Tb = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Db(e, t) {
  const n = sr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = zt(e) ? zr(e) : It(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, u = r * s.y;
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
    r = Eb(e, n);
  else if (t === "document")
    r = Pb(Bt(e));
  else if (Ct(t))
    r = Db(t, n);
  else {
    const o = zy(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return na(r);
}
function $y(e, t) {
  const n = Mn(e);
  return n === t || !Ct(n) || Xr(n) ? !1 : Pt(n).position === "fixed" || $y(n, t);
}
function Nb(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = fs(e, [], !1).filter((a) => Ct(a) && ao(a) !== "body"), o = null;
  const s = Pt(e).position === "fixed";
  let i = s ? Mn(e) : e;
  for (; Ct(i) && !Xr(i); ) {
    const a = Pt(i), l = hd(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && Tb.has(o.position) || Cs(i) && !l && $y(e, i)) ? r = r.filter((c) => c !== i) : o = a, i = Mn(i);
  }
  return t.set(e, r), r;
}
function Ab(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Ra(t) ? [] : Nb(t, this._c) : [].concat(n), r], a = i[0], l = i.reduce((u, c) => {
    const d = Lp(t, c, o);
    return u.top = qe(d.top, u.top), u.right = Rn(d.right, u.right), u.bottom = Rn(d.bottom, u.bottom), u.left = qe(d.left, u.left), u;
  }, Lp(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Rb(e) {
  const {
    width: t,
    height: n
  } = Vy(e);
  return {
    width: t,
    height: n
  };
}
function Mb(e, t, n) {
  const r = zt(t), o = Bt(t), s = n === "fixed", i = sr(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = It(0);
  function u() {
    l.x = yd(o);
  }
  if (r || !r && !s)
    if ((ao(t) !== "body" || Cs(o)) && (a = Ma(t)), r) {
      const g = sr(t, !0, s, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && u();
  s && !r && o && u();
  const c = o && !r && !s ? By(o, a) : It(0), d = i.left + a.scrollLeft - l.x - c.x, f = i.top + a.scrollTop - l.y - c.y;
  return {
    x: d,
    y: f,
    width: i.width,
    height: i.height
  };
}
function bl(e) {
  return Pt(e).position === "static";
}
function _p(e, t) {
  if (!zt(e) || Pt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Bt(e) === n && (n = n.ownerDocument.body), n;
}
function Uy(e, t) {
  const n = tt(e);
  if (Ra(e))
    return n;
  if (!zt(e)) {
    let o = Mn(e);
    for (; o && !Xr(o); ) {
      if (Ct(o) && !bl(o))
        return o;
      o = Mn(o);
    }
    return n;
  }
  let r = _p(e, t);
  for (; r && hb(r) && bl(r); )
    r = _p(r, t);
  return r && Xr(r) && bl(r) && !hd(r) ? n : r || xb(e) || n;
}
const jb = async function(e) {
  const t = this.getOffsetParent || Uy, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Mb(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Lb(e) {
  return Pt(e).direction === "rtl";
}
const _b = {
  convertOffsetParentRelativeRectToViewportRelativeRect: bb,
  getDocumentElement: Bt,
  getClippingRect: Ab,
  getOffsetParent: Uy,
  getElementRects: jb,
  getClientRects: Cb,
  getDimensions: Rb,
  getScale: zr,
  isElement: Ct,
  isRTL: Lb
};
function Wy(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Ob(e, t) {
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
      height: g
    } = u;
    if (a || t(), !f || !g)
      return;
    const w = Qs(d), y = Qs(o.clientWidth - (c + f)), S = Qs(o.clientHeight - (d + g)), m = Qs(c), v = {
      rootMargin: -w + "px " + -y + "px " + -S + "px " + -m + "px",
      threshold: qe(0, Rn(1, l)) || 1
    };
    let k = !0;
    function b(C) {
      const P = C[0].intersectionRatio;
      if (P !== l) {
        if (!k)
          return i();
        P ? i(!1, P) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      P === 1 && !Wy(u, e.getBoundingClientRect()) && i(), k = !1;
    }
    try {
      n = new IntersectionObserver(b, {
        ...v,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(b, v);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function Ib(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = gd(e), c = o || s ? [...u ? fs(u) : [], ...fs(t)] : [];
  c.forEach((m) => {
    o && m.addEventListener("scroll", n, {
      passive: !0
    }), s && m.addEventListener("resize", n);
  });
  const d = u && a ? Ob(u, n) : null;
  let f = -1, g = null;
  i && (g = new ResizeObserver((m) => {
    let [h] = m;
    h && h.target === u && g && (g.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var v;
      (v = g) == null || v.observe(t);
    })), n();
  }), u && !l && g.observe(u), g.observe(t));
  let w, y = l ? sr(e) : null;
  l && S();
  function S() {
    const m = sr(e);
    y && !Wy(y, m) && n(), y = m, w = requestAnimationFrame(S);
  }
  return n(), () => {
    var m;
    c.forEach((h) => {
      o && h.removeEventListener("scroll", n), s && h.removeEventListener("resize", n);
    }), d == null || d(), (m = g) == null || m.disconnect(), g = null, l && cancelAnimationFrame(w);
  };
}
const Fb = lb, Vb = ub, zb = sb, Bb = db, $b = ib, Op = ob, Ub = cb, Wb = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: _b,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return rb(e, t, {
    ...o,
    platform: s
  });
};
var Hb = typeof document < "u", Kb = function() {
}, Ci = Hb ? x.useLayoutEffect : Kb;
function ra(e, t) {
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
        if (!ra(e[r], t[r]))
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
      if (!(s === "_owner" && e.$$typeof) && !ra(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Hy(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ip(e, t) {
  const n = Hy(e);
  return Math.round(t * n) / n;
}
function Cl(e) {
  const t = x.useRef(e);
  return Ci(() => {
    t.current = e;
  }), t;
}
function Gb(e) {
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
  }), [f, g] = x.useState(r);
  ra(f, r) || g(r);
  const [w, y] = x.useState(null), [S, m] = x.useState(null), h = x.useCallback((T) => {
    T !== C.current && (C.current = T, y(T));
  }, []), v = x.useCallback((T) => {
    T !== P.current && (P.current = T, m(T));
  }, []), k = s || w, b = i || S, C = x.useRef(null), P = x.useRef(null), E = x.useRef(c), N = l != null, D = Cl(l), j = Cl(o), R = Cl(u), z = x.useCallback(() => {
    if (!C.current || !P.current)
      return;
    const T = {
      placement: t,
      strategy: n,
      middleware: f
    };
    j.current && (T.platform = j.current), Wb(C.current, P.current, T).then((M) => {
      const _ = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: R.current !== !1
      };
      B.current && !ra(E.current, _) && (E.current = _, ro.flushSync(() => {
        d(_);
      }));
    });
  }, [f, t, n, j, R]);
  Ci(() => {
    u === !1 && E.current.isPositioned && (E.current.isPositioned = !1, d((T) => ({
      ...T,
      isPositioned: !1
    })));
  }, [u]);
  const B = x.useRef(!1);
  Ci(() => (B.current = !0, () => {
    B.current = !1;
  }), []), Ci(() => {
    if (k && (C.current = k), b && (P.current = b), k && b) {
      if (D.current)
        return D.current(k, b, z);
      z();
    }
  }, [k, b, z, D, N]);
  const Y = x.useMemo(() => ({
    reference: C,
    floating: P,
    setReference: h,
    setFloating: v
  }), [h, v]), O = x.useMemo(() => ({
    reference: k,
    floating: b
  }), [k, b]), I = x.useMemo(() => {
    const T = {
      position: n,
      left: 0,
      top: 0
    };
    if (!O.floating)
      return T;
    const M = Ip(O.floating, c.x), _ = Ip(O.floating, c.y);
    return a ? {
      ...T,
      transform: "translate(" + M + "px, " + _ + "px)",
      ...Hy(O.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: M,
      top: _
    };
  }, [n, a, O.floating, c.x, c.y]);
  return x.useMemo(() => ({
    ...c,
    update: z,
    refs: Y,
    elements: O,
    floatingStyles: I
  }), [c, z, Y, O, I]);
}
const Yb = (e) => {
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
}, Xb = (e, t) => ({
  ...Fb(e),
  options: [e, t]
}), Qb = (e, t) => ({
  ...Vb(e),
  options: [e, t]
}), Zb = (e, t) => ({
  ...Ub(e),
  options: [e, t]
}), qb = (e, t) => ({
  ...zb(e),
  options: [e, t]
}), Jb = (e, t) => ({
  ...Bb(e),
  options: [e, t]
}), eC = (e, t) => ({
  ...$b(e),
  options: [e, t]
}), tC = (e, t) => ({
  ...Yb(e),
  options: [e, t]
});
var nC = "Arrow", Ky = x.forwardRef((e, t) => {
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
Ky.displayName = nC;
var rC = Ky;
function oC(e) {
  const [t, n] = x.useState(void 0);
  return Ve(() => {
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
var vd = "Popper", [Gy, Yy] = so(vd), [sC, Xy] = Gy(vd), Qy = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = x.useState(null);
  return /* @__PURE__ */ p.jsx(sC, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Qy.displayName = vd;
var Zy = "PopperAnchor", qy = x.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = Xy(Zy, n), i = x.useRef(null), a = ye(t, i);
    return x.useEffect(() => {
      s.onAnchorChange((r == null ? void 0 : r.current) || i.current);
    }), r ? null : /* @__PURE__ */ p.jsx(Q.div, { ...o, ref: a });
  }
);
qy.displayName = Zy;
var xd = "PopperContent", [iC, aC] = Gy(xd), Jy = x.forwardRef(
  (e, t) => {
    var V, ne, Me, ee, q, J;
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
      updatePositionStrategy: g = "optimized",
      onPlaced: w,
      ...y
    } = e, S = Xy(xd, n), [m, h] = x.useState(null), v = ye(t, (Qe) => h(Qe)), [k, b] = x.useState(null), C = oC(k), P = (C == null ? void 0 : C.width) ?? 0, E = (C == null ? void 0 : C.height) ?? 0, N = r + (s !== "center" ? "-" + s : ""), D = typeof c == "number" ? c : { top: 0, right: 0, bottom: 0, left: 0, ...c }, j = Array.isArray(u) ? u : [u], R = j.length > 0, z = {
      padding: D,
      boundary: j.filter(uC),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: R
    }, { refs: B, floatingStyles: Y, placement: O, isPositioned: I, middlewareData: T } = Gb({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: N,
      whileElementsMounted: (...Qe) => Ib(...Qe, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: S.anchor
      },
      middleware: [
        Xb({ mainAxis: o + E, alignmentAxis: i }),
        l && Qb({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? Zb() : void 0,
          ...z
        }),
        l && qb({ ...z }),
        Jb({
          ...z,
          apply: ({ elements: Qe, rects: Nt, availableWidth: fo, availableHeight: po }) => {
            const { width: ho, height: dw } = Nt.reference, Ms = Qe.floating.style;
            Ms.setProperty("--radix-popper-available-width", `${fo}px`), Ms.setProperty("--radix-popper-available-height", `${po}px`), Ms.setProperty("--radix-popper-anchor-width", `${ho}px`), Ms.setProperty("--radix-popper-anchor-height", `${dw}px`);
          }
        }),
        k && tC({ element: k, padding: a }),
        cC({ arrowWidth: P, arrowHeight: E }),
        f && eC({ strategy: "referenceHidden", ...z })
      ]
    }), [M, _] = nv(O), $ = An(w);
    Ve(() => {
      I && ($ == null || $());
    }, [I, $]);
    const ae = (V = T.arrow) == null ? void 0 : V.x, Tt = (ne = T.arrow) == null ? void 0 : ne.y, Re = ((Me = T.arrow) == null ? void 0 : Me.centerOffset) !== 0, [Dt, ze] = x.useState();
    return Ve(() => {
      m && ze(window.getComputedStyle(m).zIndex);
    }, [m]), /* @__PURE__ */ p.jsx(
      "div",
      {
        ref: B.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Y,
          transform: I ? Y.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Dt,
          "--radix-popper-transform-origin": [
            (ee = T.transformOrigin) == null ? void 0 : ee.x,
            (q = T.transformOrigin) == null ? void 0 : q.y
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
          iC,
          {
            scope: n,
            placedSide: M,
            onArrowChange: b,
            arrowX: ae,
            arrowY: Tt,
            shouldHideArrow: Re,
            children: /* @__PURE__ */ p.jsx(
              Q.div,
              {
                "data-side": M,
                "data-align": _,
                ...y,
                ref: v,
                style: {
                  ...y.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: I ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Jy.displayName = xd;
var ev = "PopperArrow", lC = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, tv = x.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = aC(ev, r), i = lC[s.placedSide];
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
          rC,
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
tv.displayName = ev;
function uC(e) {
  return e !== null;
}
var cC = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var S, m, h;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((S = o.arrow) == null ? void 0 : S.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, c] = nv(n), d = { start: "0%", center: "50%", end: "100%" }[c], f = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + a / 2, g = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + l / 2;
    let w = "", y = "";
    return u === "bottom" ? (w = i ? d : `${f}px`, y = `${-l}px`) : u === "top" ? (w = i ? d : `${f}px`, y = `${r.floating.height + l}px`) : u === "right" ? (w = `${-l}px`, y = i ? d : `${g}px`) : u === "left" && (w = `${r.floating.width + l}px`, y = i ? d : `${g}px`), { data: { x: w, y } };
  }
});
function nv(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var dC = Qy, fC = qy, pC = Jy, hC = tv, mC = "Portal", wd = x.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, s] = x.useState(!1);
  Ve(() => s(!0), []);
  const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return i ? FS.createPortal(/* @__PURE__ */ p.jsx(Q.div, { ...r, ref: t }), i) : null;
});
wd.displayName = mC;
var gC = xm[" useInsertionEffect ".trim().toString()] || Ve;
function ps({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, i] = yC({
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
        const f = vC(c) ? c(e) : c;
        f !== e && ((d = i.current) == null || d.call(i, f));
      } else
        s(c);
    },
    [a, e, s, i]
  );
  return [l, u];
}
function yC({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = x.useState(e), o = x.useRef(n), s = x.useRef(t);
  return gC(() => {
    s.current = t;
  }, [t]), x.useEffect(() => {
    var i;
    o.current !== n && ((i = s.current) == null || i.call(s, n), o.current = n);
  }, [n, o]), [n, r, s];
}
function vC(e) {
  return typeof e == "function";
}
function xC(e) {
  const t = x.useRef({ value: e, previous: e });
  return x.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var rv = Object.freeze({
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
}), wC = "VisuallyHidden", SC = x.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(
    Q.span,
    {
      ...e,
      ref: t,
      style: { ...rv, ...e.style }
    }
  )
);
SC.displayName = wC;
var kC = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, pr = /* @__PURE__ */ new WeakMap(), Zs = /* @__PURE__ */ new WeakMap(), qs = {}, Pl = 0, ov = function(e) {
  return e && (e.host || ov(e.parentNode));
}, bC = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = ov(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, CC = function(e, t, n, r) {
  var o = bC(t, Array.isArray(e) ? e : [e]);
  qs[n] || (qs[n] = /* @__PURE__ */ new WeakMap());
  var s = qs[n], i = [], a = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || a.has(d) || (a.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (a.has(f))
        c(f);
      else
        try {
          var g = f.getAttribute(r), w = g !== null && g !== "false", y = (pr.get(f) || 0) + 1, S = (s.get(f) || 0) + 1;
          pr.set(f, y), s.set(f, S), i.push(f), y === 1 && w && Zs.set(f, !0), S === 1 && f.setAttribute(n, "true"), w || f.setAttribute(r, "true");
        } catch (m) {
          console.error("aria-hidden: cannot operate on ", f, m);
        }
    });
  };
  return c(t), a.clear(), Pl++, function() {
    i.forEach(function(d) {
      var f = pr.get(d) - 1, g = s.get(d) - 1;
      pr.set(d, f), s.set(d, g), f || (Zs.has(d) || d.removeAttribute(r), Zs.delete(d)), g || d.removeAttribute(n);
    }), Pl--, Pl || (pr = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap(), Zs = /* @__PURE__ */ new WeakMap(), qs = {});
  };
}, sv = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = kC(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), CC(r, o, n, "aria-hidden")) : function() {
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
function iv(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function PC(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Pi = "right-scroll-bar-position", Ei = "width-before-scroll-bar", EC = "with-scroll-bars-hidden", TC = "--removed-body-scroll-bar-size";
function El(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function DC(e, t) {
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
var NC = typeof window < "u" ? x.useLayoutEffect : x.useEffect, Fp = /* @__PURE__ */ new WeakMap();
function AC(e, t) {
  var n = DC(null, function(r) {
    return e.forEach(function(o) {
      return El(o, r);
    });
  });
  return NC(function() {
    var r = Fp.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || El(a, null);
      }), s.forEach(function(a) {
        o.has(a) || El(a, i);
      });
    }
    Fp.set(n, e);
  }, [e]), n;
}
function RC(e) {
  return e;
}
function MC(e, t) {
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
function jC(e) {
  e === void 0 && (e = {});
  var t = MC(null);
  return t.options = jt({ async: !0, ssr: !1 }, e), t;
}
var av = function(e) {
  var t = e.sideCar, n = iv(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return x.createElement(r, jt({}, n));
};
av.isSideCarExport = !0;
function LC(e, t) {
  return e.useMedium(t), av;
}
var lv = jC(), Tl = function() {
}, ja = x.forwardRef(function(e, t) {
  var n = x.useRef(null), r = x.useState({
    onScrollCapture: Tl,
    onWheelCapture: Tl,
    onTouchMoveCapture: Tl
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, g = e.noRelative, w = e.noIsolation, y = e.inert, S = e.allowPinchZoom, m = e.as, h = m === void 0 ? "div" : m, v = e.gapMode, k = iv(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), b = f, C = AC([n, t]), P = jt(jt({}, k), o);
  return x.createElement(
    x.Fragment,
    null,
    c && x.createElement(b, { sideCar: lv, removeScrollBar: u, shards: d, noRelative: g, noIsolation: w, inert: y, setCallbacks: s, allowPinchZoom: !!S, lockRef: n, gapMode: v }),
    i ? x.cloneElement(x.Children.only(a), jt(jt({}, P), { ref: C })) : x.createElement(h, jt({}, P, { className: l, ref: C }), a)
  );
});
ja.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ja.classNames = {
  fullWidth: Ei,
  zeroRight: Pi
};
var _C = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function OC() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = _C();
  return t && e.setAttribute("nonce", t), e;
}
function IC(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function FC(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var VC = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = OC()) && (IC(t, n), FC(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, zC = function() {
  var e = VC();
  return function(t, n) {
    x.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, uv = function() {
  var e = zC(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, BC = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Dl = function(e) {
  return parseInt(e || "", 10) || 0;
}, $C = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Dl(n), Dl(r), Dl(o)];
}, UC = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return BC;
  var t = $C(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, WC = uv(), Br = "data-scroll-locked", HC = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(EC, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Br, `] {
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
  
  .`).concat(Ei, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Pi, " .").concat(Pi, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ei, " .").concat(Ei, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Br, `] {
    `).concat(TC, ": ").concat(a, `px;
  }
`);
}, Vp = function() {
  var e = parseInt(document.body.getAttribute(Br) || "0", 10);
  return isFinite(e) ? e : 0;
}, KC = function() {
  x.useEffect(function() {
    return document.body.setAttribute(Br, (Vp() + 1).toString()), function() {
      var e = Vp() - 1;
      e <= 0 ? document.body.removeAttribute(Br) : document.body.setAttribute(Br, e.toString());
    };
  }, []);
}, GC = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  KC();
  var s = x.useMemo(function() {
    return UC(o);
  }, [o]);
  return x.createElement(WC, { styles: HC(s, !t, o, n ? "" : "!important") });
}, $u = !1;
if (typeof window < "u")
  try {
    var Js = Object.defineProperty({}, "passive", {
      get: function() {
        return $u = !0, !0;
      }
    });
    window.addEventListener("test", Js, Js), window.removeEventListener("test", Js, Js);
  } catch {
    $u = !1;
  }
var hr = $u ? { passive: !1 } : !1, YC = function(e) {
  return e.tagName === "TEXTAREA";
}, cv = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !YC(e) && n[t] === "visible")
  );
}, XC = function(e) {
  return cv(e, "overflowY");
}, QC = function(e) {
  return cv(e, "overflowX");
}, zp = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = dv(e, r);
    if (o) {
      var s = fv(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, ZC = function(e) {
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
}, dv = function(e, t) {
  return e === "v" ? XC(t) : QC(t);
}, fv = function(e, t) {
  return e === "v" ? ZC(t) : qC(t);
}, JC = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, eP = function(e, t, n, r, o) {
  var s = JC(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, l = t.contains(a), u = !1, c = i > 0, d = 0, f = 0;
  do {
    if (!a)
      break;
    var g = fv(e, a), w = g[0], y = g[1], S = g[2], m = y - S - s * w;
    (w || m) && dv(e, a) && (d += m, f += w);
    var h = a.parentNode;
    a = h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h.host : h;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (c && Math.abs(d) < 1 || !c && Math.abs(f) < 1) && (u = !0), u;
}, ei = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Bp = function(e) {
  return [e.deltaX, e.deltaY];
}, $p = function(e) {
  return e && "current" in e ? e.current : e;
}, tP = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, nP = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, rP = 0, mr = [];
function oP(e) {
  var t = x.useRef([]), n = x.useRef([0, 0]), r = x.useRef(), o = x.useState(rP++)[0], s = x.useState(uv)[0], i = x.useRef(e);
  x.useEffect(function() {
    i.current = e;
  }, [e]), x.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var y = PC([e.lockRef.current], (e.shards || []).map($p), !0).filter(Boolean);
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
    var m = ei(y), h = n.current, v = "deltaX" in y ? y.deltaX : h[0] - m[0], k = "deltaY" in y ? y.deltaY : h[1] - m[1], b, C = y.target, P = Math.abs(v) > Math.abs(k) ? "h" : "v";
    if ("touches" in y && P === "h" && C.type === "range")
      return !1;
    var E = zp(P, C);
    if (!E)
      return !0;
    if (E ? b = P : (b = P === "v" ? "h" : "v", E = zp(P, C)), !E)
      return !1;
    if (!r.current && "changedTouches" in y && (v || k) && (r.current = b), !b)
      return !0;
    var N = r.current || b;
    return eP(N, S, y, N === "h" ? v : k);
  }, []), l = x.useCallback(function(y) {
    var S = y;
    if (!(!mr.length || mr[mr.length - 1] !== s)) {
      var m = "deltaY" in S ? Bp(S) : ei(S), h = t.current.filter(function(b) {
        return b.name === S.type && (b.target === S.target || S.target === b.shadowParent) && tP(b.delta, m);
      })[0];
      if (h && h.should) {
        S.cancelable && S.preventDefault();
        return;
      }
      if (!h) {
        var v = (i.current.shards || []).map($p).filter(Boolean).filter(function(b) {
          return b.contains(S.target);
        }), k = v.length > 0 ? a(S, v[0]) : !i.current.noIsolation;
        k && S.cancelable && S.preventDefault();
      }
    }
  }, []), u = x.useCallback(function(y, S, m, h) {
    var v = { name: y, delta: S, target: m, should: h, shadowParent: sP(m) };
    t.current.push(v), setTimeout(function() {
      t.current = t.current.filter(function(k) {
        return k !== v;
      });
    }, 1);
  }, []), c = x.useCallback(function(y) {
    n.current = ei(y), r.current = void 0;
  }, []), d = x.useCallback(function(y) {
    u(y.type, Bp(y), y.target, a(y, e.lockRef.current));
  }, []), f = x.useCallback(function(y) {
    u(y.type, ei(y), y.target, a(y, e.lockRef.current));
  }, []);
  x.useEffect(function() {
    return mr.push(s), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, hr), document.addEventListener("touchmove", l, hr), document.addEventListener("touchstart", c, hr), function() {
      mr = mr.filter(function(y) {
        return y !== s;
      }), document.removeEventListener("wheel", l, hr), document.removeEventListener("touchmove", l, hr), document.removeEventListener("touchstart", c, hr);
    };
  }, []);
  var g = e.removeScrollBar, w = e.inert;
  return x.createElement(
    x.Fragment,
    null,
    w ? x.createElement(s, { styles: nP(o) }) : null,
    g ? x.createElement(GC, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function sP(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const iP = LC(lv, oP);
var Sd = x.forwardRef(function(e, t) {
  return x.createElement(ja, jt({}, e, { ref: t, sideCar: iP }));
});
Sd.classNames = ja.classNames;
var aP = [" ", "Enter", "ArrowUp", "ArrowDown"], lP = [" ", "Enter"], ir = "Select", [La, _a, uP] = Ay(ir), [lo, x2] = so(ir, [
  uP,
  Yy
]), Oa = Yy(), [cP, Fn] = lo(ir), [dP, fP] = lo(ir), pv = (e) => {
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
    required: g,
    form: w
  } = e, y = Oa(t), [S, m] = x.useState(null), [h, v] = x.useState(null), [k, b] = x.useState(!1), C = ld(u), [P, E] = ps({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: ir
  }), [N, D] = ps({
    prop: i,
    defaultProp: a,
    onChange: l,
    caller: ir
  }), j = x.useRef(null), R = S ? w || !!S.closest("form") : !0, [z, B] = x.useState(/* @__PURE__ */ new Set()), Y = Array.from(z).map((O) => O.props.value).join(";");
  return /* @__PURE__ */ p.jsx(dC, { ...y, children: /* @__PURE__ */ p.jsxs(
    cP,
    {
      required: g,
      scope: t,
      trigger: S,
      onTriggerChange: m,
      valueNode: h,
      onValueNodeChange: v,
      valueNodeHasChildren: k,
      onValueNodeHasChildrenChange: b,
      contentId: En(),
      value: N,
      onValueChange: D,
      open: P,
      onOpenChange: E,
      dir: C,
      triggerPointerDownPosRef: j,
      disabled: f,
      children: [
        /* @__PURE__ */ p.jsx(La.Provider, { scope: t, children: /* @__PURE__ */ p.jsx(
          dP,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: x.useCallback((O) => {
              B((I) => new Set(I).add(O));
            }, []),
            onNativeOptionRemove: x.useCallback((O) => {
              B((I) => {
                const T = new Set(I);
                return T.delete(O), T;
              });
            }, []),
            children: n
          }
        ) }),
        R ? /* @__PURE__ */ p.jsxs(
          _v,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: c,
            autoComplete: d,
            value: N,
            onChange: (O) => D(O.target.value),
            disabled: f,
            form: w,
            children: [
              N === void 0 ? /* @__PURE__ */ p.jsx("option", { value: "" }) : null,
              Array.from(z)
            ]
          },
          Y
        ) : null
      ]
    }
  ) });
};
pv.displayName = ir;
var hv = "SelectTrigger", mv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = Oa(n), i = Fn(hv, n), a = i.disabled || r, l = ye(t, i.onTriggerChange), u = _a(n), c = x.useRef("touch"), [d, f, g] = Iv((y) => {
      const S = u().filter((v) => !v.disabled), m = S.find((v) => v.value === i.value), h = Fv(S, y, m);
      h !== void 0 && i.onValueChange(h.value);
    }), w = (y) => {
      a || (i.onOpenChange(!0), g()), y && (i.triggerPointerDownPosRef.current = {
        x: Math.round(y.pageX),
        y: Math.round(y.pageY)
      });
    };
    return /* @__PURE__ */ p.jsx(fC, { asChild: !0, ...s, children: /* @__PURE__ */ p.jsx(
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
        "data-placeholder": Ov(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: G(o.onClick, (y) => {
          y.currentTarget.focus(), c.current !== "mouse" && w(y);
        }),
        onPointerDown: G(o.onPointerDown, (y) => {
          c.current = y.pointerType;
          const S = y.target;
          S.hasPointerCapture(y.pointerId) && S.releasePointerCapture(y.pointerId), y.button === 0 && y.ctrlKey === !1 && y.pointerType === "mouse" && (w(y), y.preventDefault());
        }),
        onKeyDown: G(o.onKeyDown, (y) => {
          const S = d.current !== "";
          !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && f(y.key), !(S && y.key === " ") && aP.includes(y.key) && (w(), y.preventDefault());
        })
      }
    ) });
  }
);
mv.displayName = hv;
var gv = "SelectValue", yv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: i = "", ...a } = e, l = Fn(gv, n), { onValueNodeHasChildrenChange: u } = l, c = s !== void 0, d = ye(t, l.onValueNodeChange);
    return Ve(() => {
      u(c);
    }, [u, c]), /* @__PURE__ */ p.jsx(
      Q.span,
      {
        ...a,
        ref: d,
        style: { pointerEvents: "none" },
        children: Ov(l.value) ? /* @__PURE__ */ p.jsx(p.Fragment, { children: i }) : s
      }
    );
  }
);
yv.displayName = gv;
var pP = "SelectIcon", vv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ p.jsx(Q.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
vv.displayName = pP;
var hP = "SelectPortal", xv = (e) => /* @__PURE__ */ p.jsx(wd, { asChild: !0, ...e });
xv.displayName = hP;
var ar = "SelectContent", wv = x.forwardRef(
  (e, t) => {
    const n = Fn(ar, e.__scopeSelect), [r, o] = x.useState();
    if (Ve(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? ro.createPortal(
        /* @__PURE__ */ p.jsx(Sv, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx(La.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ p.jsx(kv, { ...e, ref: t });
  }
);
wv.displayName = ar;
var gt = 10, [Sv, Vn] = lo(ar), mP = "SelectContentImpl", gP = /* @__PURE__ */ cs("SelectContent.RemoveScroll"), kv = x.forwardRef(
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
      collisionPadding: g,
      sticky: w,
      hideWhenDetached: y,
      avoidCollisions: S,
      //
      ...m
    } = e, h = Fn(ar, n), [v, k] = x.useState(null), [b, C] = x.useState(null), P = ye(t, (V) => k(V)), [E, N] = x.useState(null), [D, j] = x.useState(
      null
    ), R = _a(n), [z, B] = x.useState(!1), Y = x.useRef(!1);
    x.useEffect(() => {
      if (v) return sv(v);
    }, [v]), jy();
    const O = x.useCallback(
      (V) => {
        const [ne, ...Me] = R().map((J) => J.ref.current), [ee] = Me.slice(-1), q = document.activeElement;
        for (const J of V)
          if (J === q || (J == null || J.scrollIntoView({ block: "nearest" }), J === ne && b && (b.scrollTop = 0), J === ee && b && (b.scrollTop = b.scrollHeight), J == null || J.focus(), document.activeElement !== q)) return;
      },
      [R, b]
    ), I = x.useCallback(
      () => O([E, v]),
      [O, E, v]
    );
    x.useEffect(() => {
      z && I();
    }, [z, I]);
    const { onOpenChange: T, triggerPointerDownPosRef: M } = h;
    x.useEffect(() => {
      if (v) {
        let V = { x: 0, y: 0 };
        const ne = (ee) => {
          var q, J;
          V = {
            x: Math.abs(Math.round(ee.pageX) - (((q = M.current) == null ? void 0 : q.x) ?? 0)),
            y: Math.abs(Math.round(ee.pageY) - (((J = M.current) == null ? void 0 : J.y) ?? 0))
          };
        }, Me = (ee) => {
          V.x <= 10 && V.y <= 10 ? ee.preventDefault() : v.contains(ee.target) || T(!1), document.removeEventListener("pointermove", ne), M.current = null;
        };
        return M.current !== null && (document.addEventListener("pointermove", ne), document.addEventListener("pointerup", Me, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", ne), document.removeEventListener("pointerup", Me, { capture: !0 });
        };
      }
    }, [v, T, M]), x.useEffect(() => {
      const V = () => T(!1);
      return window.addEventListener("blur", V), window.addEventListener("resize", V), () => {
        window.removeEventListener("blur", V), window.removeEventListener("resize", V);
      };
    }, [T]);
    const [_, $] = Iv((V) => {
      const ne = R().filter((q) => !q.disabled), Me = ne.find((q) => q.ref.current === document.activeElement), ee = Fv(ne, V, Me);
      ee && setTimeout(() => ee.ref.current.focus());
    }), ae = x.useCallback(
      (V, ne, Me) => {
        const ee = !Y.current && !Me;
        (h.value !== void 0 && h.value === ne || ee) && (N(V), ee && (Y.current = !0));
      },
      [h.value]
    ), Tt = x.useCallback(() => v == null ? void 0 : v.focus(), [v]), Re = x.useCallback(
      (V, ne, Me) => {
        const ee = !Y.current && !Me;
        (h.value !== void 0 && h.value === ne || ee) && j(V);
      },
      [h.value]
    ), Dt = r === "popper" ? Uu : bv, ze = Dt === Uu ? {
      side: a,
      sideOffset: l,
      align: u,
      alignOffset: c,
      arrowPadding: d,
      collisionBoundary: f,
      collisionPadding: g,
      sticky: w,
      hideWhenDetached: y,
      avoidCollisions: S
    } : {};
    return /* @__PURE__ */ p.jsx(
      Sv,
      {
        scope: n,
        content: v,
        viewport: b,
        onViewportChange: C,
        itemRefCallback: ae,
        selectedItem: E,
        onItemLeave: Tt,
        itemTextRefCallback: Re,
        focusSelectedItem: I,
        selectedItemText: D,
        position: r,
        isPositioned: z,
        searchRef: _,
        children: /* @__PURE__ */ p.jsx(Sd, { as: gP, allowPinchZoom: !0, children: /* @__PURE__ */ p.jsx(
          cd,
          {
            asChild: !0,
            trapped: h.open,
            onMountAutoFocus: (V) => {
              V.preventDefault();
            },
            onUnmountAutoFocus: G(o, (V) => {
              var ne;
              (ne = h.trigger) == null || ne.focus({ preventScroll: !0 }), V.preventDefault();
            }),
            children: /* @__PURE__ */ p.jsx(
              ud,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: (V) => V.preventDefault(),
                onDismiss: () => h.onOpenChange(!1),
                children: /* @__PURE__ */ p.jsx(
                  Dt,
                  {
                    role: "listbox",
                    id: h.contentId,
                    "data-state": h.open ? "open" : "closed",
                    dir: h.dir,
                    onContextMenu: (V) => V.preventDefault(),
                    ...m,
                    ...ze,
                    onPlaced: () => B(!0),
                    ref: P,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...m.style
                    },
                    onKeyDown: G(m.onKeyDown, (V) => {
                      const ne = V.ctrlKey || V.altKey || V.metaKey;
                      if (V.key === "Tab" && V.preventDefault(), !ne && V.key.length === 1 && $(V.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(V.key)) {
                        let ee = R().filter((q) => !q.disabled).map((q) => q.ref.current);
                        if (["ArrowUp", "End"].includes(V.key) && (ee = ee.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(V.key)) {
                          const q = V.target, J = ee.indexOf(q);
                          ee = ee.slice(J + 1);
                        }
                        setTimeout(() => O(ee)), V.preventDefault();
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
kv.displayName = mP;
var yP = "SelectItemAlignedPosition", bv = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = Fn(ar, n), i = Vn(ar, n), [a, l] = x.useState(null), [u, c] = x.useState(null), d = ye(t, (P) => c(P)), f = _a(n), g = x.useRef(!1), w = x.useRef(!0), { viewport: y, selectedItem: S, selectedItemText: m, focusSelectedItem: h } = i, v = x.useCallback(() => {
    if (s.trigger && s.valueNode && a && u && y && S && m) {
      const P = s.trigger.getBoundingClientRect(), E = u.getBoundingClientRect(), N = s.valueNode.getBoundingClientRect(), D = m.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const q = D.left - E.left, J = N.left - q, Qe = P.left - J, Nt = P.width + Qe, fo = Math.max(Nt, E.width), po = window.innerWidth - gt, ho = xp(J, [
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
        const q = E.right - D.right, J = window.innerWidth - N.right - q, Qe = window.innerWidth - P.right - J, Nt = P.width + Qe, fo = Math.max(Nt, E.width), po = window.innerWidth - gt, ho = xp(J, [
          gt,
          Math.max(gt, po - fo)
        ]);
        a.style.minWidth = Nt + "px", a.style.right = ho + "px";
      }
      const j = f(), R = window.innerHeight - gt * 2, z = y.scrollHeight, B = window.getComputedStyle(u), Y = parseInt(B.borderTopWidth, 10), O = parseInt(B.paddingTop, 10), I = parseInt(B.borderBottomWidth, 10), T = parseInt(B.paddingBottom, 10), M = Y + O + z + T + I, _ = Math.min(S.offsetHeight * 5, M), $ = window.getComputedStyle(y), ae = parseInt($.paddingTop, 10), Tt = parseInt($.paddingBottom, 10), Re = P.top + P.height / 2 - gt, Dt = R - Re, ze = S.offsetHeight / 2, V = S.offsetTop + ze, ne = Y + O + V, Me = M - ne;
      if (ne <= Re) {
        const q = j.length > 0 && S === j[j.length - 1].ref.current;
        a.style.bottom = "0px";
        const J = u.clientHeight - y.offsetTop - y.offsetHeight, Qe = Math.max(
          Dt,
          ze + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (q ? Tt : 0) + J + I
        ), Nt = ne + Qe;
        a.style.height = Nt + "px";
      } else {
        const q = j.length > 0 && S === j[0].ref.current;
        a.style.top = "0px";
        const Qe = Math.max(
          Re,
          Y + y.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (q ? ae : 0) + ze
        ) + Me;
        a.style.height = Qe + "px", y.scrollTop = ne - Re + y.offsetTop;
      }
      a.style.margin = `${gt}px 0`, a.style.minHeight = _ + "px", a.style.maxHeight = R + "px", r == null || r(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    f,
    s.trigger,
    s.valueNode,
    a,
    u,
    y,
    S,
    m,
    s.dir,
    r
  ]);
  Ve(() => v(), [v]);
  const [k, b] = x.useState();
  Ve(() => {
    u && b(window.getComputedStyle(u).zIndex);
  }, [u]);
  const C = x.useCallback(
    (P) => {
      P && w.current === !0 && (v(), h == null || h(), w.current = !1);
    },
    [v, h]
  );
  return /* @__PURE__ */ p.jsx(
    xP,
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
            zIndex: k
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
bv.displayName = yP;
var vP = "SelectPopperPosition", Uu = x.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = gt,
    ...s
  } = e, i = Oa(n);
  return /* @__PURE__ */ p.jsx(
    pC,
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
Uu.displayName = vP;
var [xP, kd] = lo(ar, {}), Wu = "SelectViewport", Cv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = Vn(Wu, n), i = kd(Wu, n), a = ye(t, s.onViewportChange), l = x.useRef(0);
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
      /* @__PURE__ */ p.jsx(La.Slot, { scope: n, children: /* @__PURE__ */ p.jsx(
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
          onScroll: G(o.onScroll, (u) => {
            const c = u.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: f } = i;
            if (f != null && f.current && d) {
              const g = Math.abs(l.current - c.scrollTop);
              if (g > 0) {
                const w = window.innerHeight - gt * 2, y = parseFloat(d.style.minHeight), S = parseFloat(d.style.height), m = Math.max(y, S);
                if (m < w) {
                  const h = m + g, v = Math.min(w, h), k = h - v;
                  d.style.height = v + "px", d.style.bottom === "0px" && (c.scrollTop = k > 0 ? k : 0, d.style.justifyContent = "flex-end");
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
Cv.displayName = Wu;
var Pv = "SelectGroup", [wP, SP] = lo(Pv), kP = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = En();
    return /* @__PURE__ */ p.jsx(wP, { scope: n, id: o, children: /* @__PURE__ */ p.jsx(Q.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
kP.displayName = Pv;
var Ev = "SelectLabel", bP = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = SP(Ev, n);
    return /* @__PURE__ */ p.jsx(Q.div, { id: o.id, ...r, ref: t });
  }
);
bP.displayName = Ev;
var oa = "SelectItem", [CP, Tv] = lo(oa), Dv = x.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...i
    } = e, a = Fn(oa, n), l = Vn(oa, n), u = a.value === r, [c, d] = x.useState(s ?? ""), [f, g] = x.useState(!1), w = ye(
      t,
      (h) => {
        var v;
        return (v = l.itemRefCallback) == null ? void 0 : v.call(l, h, r, o);
      }
    ), y = En(), S = x.useRef("touch"), m = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ p.jsx(
      CP,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: y,
        isSelected: u,
        onItemTextChange: x.useCallback((h) => {
          d((v) => v || ((h == null ? void 0 : h.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ p.jsx(
          La.ItemSlot,
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
                onFocus: G(i.onFocus, () => g(!0)),
                onBlur: G(i.onBlur, () => g(!1)),
                onClick: G(i.onClick, () => {
                  S.current !== "mouse" && m();
                }),
                onPointerUp: G(i.onPointerUp, () => {
                  S.current === "mouse" && m();
                }),
                onPointerDown: G(i.onPointerDown, (h) => {
                  S.current = h.pointerType;
                }),
                onPointerMove: G(i.onPointerMove, (h) => {
                  var v;
                  S.current = h.pointerType, o ? (v = l.onItemLeave) == null || v.call(l) : S.current === "mouse" && h.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: G(i.onPointerLeave, (h) => {
                  var v;
                  h.currentTarget === document.activeElement && ((v = l.onItemLeave) == null || v.call(l));
                }),
                onKeyDown: G(i.onKeyDown, (h) => {
                  var k;
                  ((k = l.searchRef) == null ? void 0 : k.current) !== "" && h.key === " " || (lP.includes(h.key) && m(), h.key === " " && h.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Dv.displayName = oa;
var Ao = "SelectItemText", Nv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, i = Fn(Ao, n), a = Vn(Ao, n), l = Tv(Ao, n), u = fP(Ao, n), [c, d] = x.useState(null), f = ye(
      t,
      (m) => d(m),
      l.onItemTextChange,
      (m) => {
        var h;
        return (h = a.itemTextRefCallback) == null ? void 0 : h.call(a, m, l.value, l.disabled);
      }
    ), g = c == null ? void 0 : c.textContent, w = x.useMemo(
      () => /* @__PURE__ */ p.jsx("option", { value: l.value, disabled: l.disabled, children: g }, l.value),
      [l.disabled, l.value, g]
    ), { onNativeOptionAdd: y, onNativeOptionRemove: S } = u;
    return Ve(() => (y(w), () => S(w)), [y, S, w]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(Q.span, { id: l.textId, ...s, ref: f }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? ro.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
Nv.displayName = Ao;
var Av = "SelectItemIndicator", Rv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Tv(Av, n).isSelected ? /* @__PURE__ */ p.jsx(Q.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Rv.displayName = Av;
var Hu = "SelectScrollUpButton", Mv = x.forwardRef((e, t) => {
  const n = Vn(Hu, e.__scopeSelect), r = kd(Hu, e.__scopeSelect), [o, s] = x.useState(!1), i = ye(t, r.onScrollButtonChange);
  return Ve(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = l.scrollTop > 0;
        s(u);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    Lv,
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
Mv.displayName = Hu;
var Ku = "SelectScrollDownButton", jv = x.forwardRef((e, t) => {
  const n = Vn(Ku, e.__scopeSelect), r = kd(Ku, e.__scopeSelect), [o, s] = x.useState(!1), i = ye(t, r.onScrollButtonChange);
  return Ve(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = l.scrollHeight - l.clientHeight, c = Math.ceil(l.scrollTop) < u;
        s(c);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    Lv,
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
jv.displayName = Ku;
var Lv = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = Vn("SelectScrollButton", n), i = x.useRef(null), a = _a(n), l = x.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return x.useEffect(() => () => l(), [l]), Ve(() => {
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
      onPointerDown: G(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: G(o.onPointerMove, () => {
        var u;
        (u = s.onItemLeave) == null || u.call(s), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: G(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), PP = "SelectSeparator", EP = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ p.jsx(Q.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
EP.displayName = PP;
var Gu = "SelectArrow", TP = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Oa(n), s = Fn(Gu, n), i = Vn(Gu, n);
    return s.open && i.position === "popper" ? /* @__PURE__ */ p.jsx(hC, { ...o, ...r, ref: t }) : null;
  }
);
TP.displayName = Gu;
var DP = "SelectBubbleInput", _v = x.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = x.useRef(null), s = ye(r, o), i = xC(t);
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
        style: { ...rv, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
_v.displayName = DP;
function Ov(e) {
  return e === "" || e === void 0;
}
function Iv(e) {
  const t = An(e), n = x.useRef(""), r = x.useRef(0), o = x.useCallback(
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
function Fv(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = NP(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function NP(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var AP = pv, RP = mv, MP = yv, jP = vv, LP = xv, _P = wv, OP = Cv, IP = Dv, FP = Nv, VP = Rv, zP = Mv, BP = jv;
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $P = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Vv = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var UP = {
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
const WP = x.forwardRef(
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
      ...UP,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Vv("lucide", o),
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
const Ae = (e, t) => {
  const n = x.forwardRef(
    ({ className: r, ...o }, s) => x.createElement(WP, {
      ref: s,
      iconNode: t,
      className: Vv(`lucide-${$P(e)}`, r),
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
const zv = Ae("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bv = Ae("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ia = Ae("Building2", [
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
const HP = Ae("Building", [
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
const mn = Ae("CalendarDays", [
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
const Nl = Ae("Calendar", [
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
const KP = Ae("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $v = Ae("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uv = Ae("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wv = Ae("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GP = Ae("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fa = Ae("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YP = Ae("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Up = Ae("List", [
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
const Hv = Ae("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = Ae("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XP = Ae("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function ti({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(AP, { "data-slot": "select", ...e });
}
function ni({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(MP, { "data-slot": "select-value", ...e });
}
function ri({
  className: e,
  size: t = "default",
  children: n,
  ...r
}) {
  return /* @__PURE__ */ p.jsxs(
    RP,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: ge(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ p.jsx(jP, { asChild: !0, children: /* @__PURE__ */ p.jsx($v, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function oi({
  className: e,
  children: t,
  position: n = "popper",
  ...r
}) {
  return /* @__PURE__ */ p.jsx(LP, { children: /* @__PURE__ */ p.jsxs(
    _P,
    {
      "data-slot": "select-content",
      className: ge(
        "bg-white text-gray-900 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      ...r,
      children: [
        /* @__PURE__ */ p.jsx(QP, {}),
        /* @__PURE__ */ p.jsx(
          OP,
          {
            className: ge(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ p.jsx(ZP, {})
      ]
    }
  ) });
}
function pe({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ p.jsxs(
    IP,
    {
      "data-slot": "select-item",
      className: ge(
        "focus:bg-gray-100 focus:text-gray-900 hover:bg-gray-50 text-gray-900 relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ p.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ p.jsx(VP, { children: /* @__PURE__ */ p.jsx(KP, { className: "size-4" }) }) }),
        /* @__PURE__ */ p.jsx(FP, { children: t })
      ]
    }
  );
}
function QP({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    zP,
    {
      "data-slot": "select-scroll-up-button",
      className: ge(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p.jsx(GP, { className: "size-4" })
    }
  );
}
function ZP({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    BP,
    {
      "data-slot": "select-scroll-down-button",
      className: ge(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p.jsx($v, { className: "size-4" })
    }
  );
}
const Yu = x.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ p.jsx(
    "input",
    {
      type: t,
      className: ge(
        "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
Yu.displayName = "Input";
var Al = "rovingFocusGroup.onEntryFocus", qP = { bubbles: !1, cancelable: !0 }, Es = "RovingFocusGroup", [Xu, Kv, JP] = Ay(Es), [eE, Gv] = so(
  Es,
  [JP]
), [tE, nE] = eE(Es), Yv = x.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(Xu.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(Xu.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(rE, { ...e, ref: t }) }) })
);
Yv.displayName = Es;
var rE = x.forwardRef((e, t) => {
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
  } = e, f = x.useRef(null), g = ye(t, f), w = ld(s), [y, S] = ps({
    prop: i,
    defaultProp: a ?? null,
    onChange: l,
    caller: Es
  }), [m, h] = x.useState(!1), v = An(u), k = Kv(n), b = x.useRef(!1), [C, P] = x.useState(0);
  return x.useEffect(() => {
    const E = f.current;
    if (E)
      return E.addEventListener(Al, v), () => E.removeEventListener(Al, v);
  }, [v]), /* @__PURE__ */ p.jsx(
    tE,
    {
      scope: n,
      orientation: r,
      dir: w,
      loop: o,
      currentTabStopId: y,
      onItemFocus: x.useCallback(
        (E) => S(E),
        [S]
      ),
      onItemShiftTab: x.useCallback(() => h(!0), []),
      onFocusableItemAdd: x.useCallback(
        () => P((E) => E + 1),
        []
      ),
      onFocusableItemRemove: x.useCallback(
        () => P((E) => E - 1),
        []
      ),
      children: /* @__PURE__ */ p.jsx(
        Q.div,
        {
          tabIndex: m || C === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: G(e.onMouseDown, () => {
            b.current = !0;
          }),
          onFocus: G(e.onFocus, (E) => {
            const N = !b.current;
            if (E.target === E.currentTarget && N && !m) {
              const D = new CustomEvent(Al, qP);
              if (E.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                const j = k().filter((O) => O.focusable), R = j.find((O) => O.active), z = j.find((O) => O.id === y), Y = [R, z, ...j].filter(
                  Boolean
                ).map((O) => O.ref.current);
                Zv(Y, c);
              }
            }
            b.current = !1;
          }),
          onBlur: G(e.onBlur, () => h(!1))
        }
      )
    }
  );
}), Xv = "RovingFocusGroupItem", Qv = x.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: i,
      ...a
    } = e, l = En(), u = s || l, c = nE(Xv, n), d = c.currentTabStopId === u, f = Kv(n), { onFocusableItemAdd: g, onFocusableItemRemove: w, currentTabStopId: y } = c;
    return x.useEffect(() => {
      if (r)
        return g(), () => w();
    }, [r, g, w]), /* @__PURE__ */ p.jsx(
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
            onMouseDown: G(e.onMouseDown, (S) => {
              r ? c.onItemFocus(u) : S.preventDefault();
            }),
            onFocus: G(e.onFocus, () => c.onItemFocus(u)),
            onKeyDown: G(e.onKeyDown, (S) => {
              if (S.key === "Tab" && S.shiftKey) {
                c.onItemShiftTab();
                return;
              }
              if (S.target !== S.currentTarget) return;
              const m = iE(S, c.orientation, c.dir);
              if (m !== void 0) {
                if (S.metaKey || S.ctrlKey || S.altKey || S.shiftKey) return;
                S.preventDefault();
                let v = f().filter((k) => k.focusable).map((k) => k.ref.current);
                if (m === "last") v.reverse();
                else if (m === "prev" || m === "next") {
                  m === "prev" && v.reverse();
                  const k = v.indexOf(S.currentTarget);
                  v = c.loop ? aE(v, k + 1) : v.slice(k + 1);
                }
                setTimeout(() => Zv(v));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: d, hasTabStop: y != null }) : i
          }
        )
      }
    );
  }
);
Qv.displayName = Xv;
var oE = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function sE(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function iE(e, t, n) {
  const r = sE(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return oE[r];
}
function Zv(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function aE(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var lE = Yv, uE = Qv;
function cE(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var Ts = (e) => {
  const { present: t, children: n } = e, r = dE(t), o = typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n), s = ye(r.ref, fE(o));
  return typeof n == "function" || r.isPresent ? x.cloneElement(o, { ref: s }) : null;
};
Ts.displayName = "Presence";
function dE(e) {
  const [t, n] = x.useState(), r = x.useRef(null), o = x.useRef(e), s = x.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = cE(i, {
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
    const u = si(r.current);
    s.current = a === "mounted" ? u : "none";
  }, [a]), Ve(() => {
    const u = r.current, c = o.current;
    if (c !== e) {
      const f = s.current, g = si(u);
      e ? l("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Ve(() => {
    if (t) {
      let u;
      const c = t.ownerDocument.defaultView ?? window, d = (g) => {
        const y = si(r.current).includes(g.animationName);
        if (g.target === t && y && (l("ANIMATION_END"), !o.current)) {
          const S = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = c.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S);
          });
        }
      }, f = (g) => {
        g.target === t && (s.current = si(r.current));
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
function si(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function fE(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Va = "Tabs", [pE, w2] = so(Va, [
  Gv
]), qv = Gv(), [hE, bd] = pE(Va), Jv = x.forwardRef(
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
      caller: Va
    });
    return /* @__PURE__ */ p.jsx(
      hE,
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
Jv.displayName = Va;
var e0 = "TabsList", t0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = bd(e0, n), i = qv(n);
    return /* @__PURE__ */ p.jsx(
      lE,
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
t0.displayName = e0;
var n0 = "TabsTrigger", r0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, i = bd(n0, n), a = qv(n), l = i0(i.baseId, r), u = a0(i.baseId, r), c = r === i.value;
    return /* @__PURE__ */ p.jsx(
      uE,
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
            onMouseDown: G(e.onMouseDown, (d) => {
              !o && d.button === 0 && d.ctrlKey === !1 ? i.onValueChange(r) : d.preventDefault();
            }),
            onKeyDown: G(e.onKeyDown, (d) => {
              [" ", "Enter"].includes(d.key) && i.onValueChange(r);
            }),
            onFocus: G(e.onFocus, () => {
              const d = i.activationMode !== "manual";
              !c && !o && d && i.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
r0.displayName = n0;
var o0 = "TabsContent", s0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...i } = e, a = bd(o0, n), l = i0(a.baseId, r), u = a0(a.baseId, r), c = r === a.value, d = x.useRef(c);
    return x.useEffect(() => {
      const f = requestAnimationFrame(() => d.current = !1);
      return () => cancelAnimationFrame(f);
    }, []), /* @__PURE__ */ p.jsx(Ts, { present: o || c, children: ({ present: f }) => /* @__PURE__ */ p.jsx(
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
s0.displayName = o0;
function i0(e, t) {
  return `${e}-trigger-${t}`;
}
function a0(e, t) {
  return `${e}-content-${t}`;
}
var mE = Jv, gE = t0, yE = r0, vE = s0;
function xE({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    mE,
    {
      "data-slot": "tabs",
      className: ge("flex flex-col gap-2", e),
      ...t
    }
  );
}
function Wp({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    gE,
    {
      "data-slot": "tabs-list",
      className: ge(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        e
      ),
      ...t
    }
  );
}
function Bn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    yE,
    {
      "data-slot": "tabs-trigger",
      className: ge(
        "data-[state=active]:bg-background cursor-pointer dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function ii({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    vE,
    {
      "data-slot": "tabs-content",
      className: ge("flex-1 outline-none", e),
      ...t
    }
  );
}
class wE {
  constructor() {
    const t = window.unbcCalendarData;
    this.baseUrl = (t == null ? void 0 : t.apiUrl) || "/wp-json/unbc-events/v1";
  }
  async fetchEvents(t = {}) {
    try {
      const n = new URLSearchParams();
      Object.entries(t).forEach(([a, l]) => {
        l != null && l !== "" && n.append(a, l.toString());
      });
      const o = `${this.baseUrl.endsWith("/") ? this.baseUrl.slice(0, -1) : this.baseUrl}/events${n.toString() ? "?" + n.toString() : ""}`;
      console.log("Fetching events from:", o);
      const s = await fetch(o);
      if (!s.ok) {
        const a = await s.text();
        throw console.error("API Error Response:", a), new Error(`HTTP error! status: ${s.status} - ${a.substring(0, 200)}`);
      }
      const i = await s.text();
      console.log("API Response (first 200 chars):", i.substring(0, 200));
      try {
        return JSON.parse(i);
      } catch {
        throw console.error("Failed to parse JSON response:", i.substring(0, 500)), new Error("Invalid JSON response from API");
      }
    } catch (n) {
      throw console.error("Error fetching events:", n), n;
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
      academic: "success",
      social: "warning",
      cultural: "primary",
      sports: "danger",
      professional: "success",
      wellness: "primary",
      volunteer: "warning",
      arts: "primary"
    }[t[0].slug] || "default";
  }
  mapWordPressCategory(t) {
    return t.length === 0 ? "academic" : {
      academic: "academic",
      social: "social",
      cultural: "cultural",
      sports: "sports",
      professional: "professional",
      wellness: "wellness",
      volunteer: "volunteer",
      arts: "arts"
    }[t[0].slug] || "academic";
  }
}
const Rl = new wE(), fn = /* @__PURE__ */ new Date(), H = fn.getMonth(), K = fn.getFullYear(), Hp = [
  {
    id: "1",
    title: "Indigenous Culture Workshop",
    description: "Learn about local Indigenous traditions and participate in hands-on cultural activities led by community elders.",
    startDate: new Date(K, H, 15, 14, 0),
    endDate: new Date(K, H, 15, 16, 0),
    variant: "warning"
  },
  {
    id: "2",
    title: "Career Fair 2025",
    description: "Meet with local employers and explore career opportunities in Northern BC and beyond.",
    startDate: new Date(K, H, 18, 10, 0),
    endDate: new Date(K, H, 18, 15, 0),
    variant: "success"
  },
  {
    id: "3",
    title: "Hiking Trip to Tabletop Mountain",
    description: "Join us for a challenging but rewarding day hike to one of the region's most spectacular viewpoints.",
    startDate: new Date(K, H, 22, 8, 0),
    endDate: new Date(K, H, 22, 18, 0),
    variant: "danger"
  },
  {
    id: "4",
    title: "Mental Health Awareness Week",
    description: "A week-long series of workshops, activities, and resources focused on mental health and wellbeing.",
    startDate: new Date(K, H, 26, 9, 0),
    endDate: new Date(K, H, 26, 17, 0),
    variant: "warning"
  },
  {
    id: "5",
    title: "Spring Formal Dance",
    description: "Celebrate the end of the semester with music, dancing, and refreshments in our beautiful Winter Garden.",
    startDate: new Date(K, H, Math.min(29, new Date(K, H + 1, 0).getDate()), 19, 0),
    endDate: new Date(K, H, Math.min(29, new Date(K, H + 1, 0).getDate()), 23, 0),
    variant: "warning"
  },
  {
    id: "6",
    title: "Research Presentation Day",
    description: "Graduate students present their research findings across various disciplines.",
    startDate: new Date(K, H, 12, 13, 0),
    endDate: new Date(K, H, 12, 17, 0),
    variant: "success"
  },
  {
    id: "7",
    title: "Photography Workshop",
    description: "Learn basic photography techniques and composition.",
    startDate: new Date(K, H, 5, 15, 30),
    endDate: new Date(K, H, 5, 17, 30),
    variant: "warning"
  },
  {
    id: "8",
    title: "Volunteer Fair",
    description: "Connect with local organizations looking for volunteers.",
    startDate: new Date(K, H, 8, 11, 0),
    endDate: new Date(K, H, 8, 14, 0),
    variant: "default"
  },
  {
    id: "9",
    title: "Business Networking Event",
    description: "Network with local business professionals and alumni.",
    startDate: new Date(K, H, 20, 18, 0),
    endDate: new Date(K, H, 20, 20, 0),
    variant: "success"
  },
  {
    id: "10",
    title: "Stress Relief Workshop",
    description: "Learn effective stress management techniques for exam season.",
    startDate: new Date(K, H, 14, 16, 0),
    endDate: new Date(K, H, 14, 17, 30),
    variant: "warning"
  },
  {
    id: "11",
    title: "International Food Festival",
    description: "Taste foods from around the world and celebrate cultural diversity.",
    startDate: new Date(K, H, 25, 12, 0),
    endDate: new Date(K, H, 25, 16, 0),
    variant: "warning"
  },
  {
    id: "12",
    title: "Campus Soccer Tournament",
    description: "Join teams and compete in our annual soccer tournament.",
    startDate: new Date(K, H, Math.min(30, new Date(K, H + 1, 0).getDate()), 9, 0),
    endDate: new Date(K, H, Math.min(30, new Date(K, H + 1, 0).getDate()), 17, 0),
    variant: "danger"
  },
  {
    id: "13",
    title: "Morning Yoga Session",
    description: "Start your day with a relaxing yoga session.",
    startDate: new Date(K, H, Math.max(1, fn.getDate() - 2), 7, 0),
    endDate: new Date(K, H, Math.max(1, fn.getDate() - 2), 8, 0),
    variant: "warning"
  },
  {
    id: "14",
    title: "Study Group - Biology 101",
    description: "Group study session for upcoming Biology 101 midterm exam.",
    startDate: new Date(K, H, Math.max(1, fn.getDate() - 1), 10, 0),
    endDate: new Date(K, H, Math.max(1, fn.getDate() - 1), 12, 0),
    variant: "success"
  },
  {
    id: "15",
    title: "Lunch & Learn: Sustainability",
    description: "Learn about campus sustainability initiatives while enjoying lunch.",
    startDate: new Date(K, H, fn.getDate(), 12, 0),
    endDate: new Date(K, H, fn.getDate(), 13, 0),
    variant: "success"
  }
];
function l0(e = {}) {
  const [t, n] = x.useState([]), [r, o] = x.useState({}), [s, i] = x.useState(!0), [a, l] = x.useState(null), [u, c] = x.useState(0), [d, f] = x.useState(0), [g, w] = x.useState(e), y = x.useCallback(async () => {
    try {
      i(!0), l(null);
      const h = await Rl.fetchEvents(g), v = [], k = {};
      h.events.forEach((b) => {
        const C = Rl.transformWordPressEventToEvent(b), P = Rl.transformWordPressEventToMetadata(b);
        v.push(C), k[C.id] = P;
      }), n(v), o(k), c(h.total), f(h.pages);
    } catch (h) {
      console.warn("Failed to fetch from WordPress, using static data:", h), n(Hp), o(r), c(Hp.length), f(1), l("Using static data - WordPress connection failed");
    } finally {
      i(!1);
    }
  }, [g]);
  x.useEffect(() => {
    y();
  }, [y]);
  const S = x.useCallback(() => {
    y();
  }, [y]), m = x.useCallback((h) => {
    w((v) => ({ ...v, ...h }));
  }, []);
  return {
    events: t,
    eventMetadata: r,
    loading: s,
    error: a,
    total: u,
    pages: d,
    refetch: S,
    setFilters: m
  };
}
const SE = {
  async getAll() {
    try {
      const t = await fetch("/wp-json/wp/v2/organization?per_page=100");
      if (!t.ok)
        throw new Error("Failed to fetch organizations");
      return await t.json();
    } catch (e) {
      return console.error("Error fetching organizations:", e), [];
    }
  }
};
function kE() {
  const [e, t] = x.useState([]), [n, r] = x.useState(!0), [o, s] = x.useState(null);
  return x.useEffect(() => {
    (async () => {
      try {
        r(!0);
        const a = await SE.getAll();
        t(a), s(null);
      } catch (a) {
        s("Failed to load organizations"), console.error("Error fetching organizations:", a);
      } finally {
        r(!1);
      }
    })();
  }, []), { organizations: e, loading: n, error: o };
}
var za = "Dialog", [u0, S2] = so(za), [bE, Et] = u0(za), c0 = (e) => {
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
    caller: za
  });
  return /* @__PURE__ */ p.jsx(
    bE,
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
c0.displayName = za;
var d0 = "DialogTrigger", CE = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Et(d0, n), s = ye(t, o.triggerRef);
    return /* @__PURE__ */ p.jsx(
      Q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ed(o.open),
        ...r,
        ref: s,
        onClick: G(e.onClick, o.onOpenToggle)
      }
    );
  }
);
CE.displayName = d0;
var Cd = "DialogPortal", [PE, f0] = u0(Cd, {
  forceMount: void 0
}), p0 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = Et(Cd, t);
  return /* @__PURE__ */ p.jsx(PE, { scope: t, forceMount: n, children: x.Children.map(r, (i) => /* @__PURE__ */ p.jsx(Ts, { present: n || s.open, children: /* @__PURE__ */ p.jsx(wd, { asChild: !0, container: o, children: i }) })) });
};
p0.displayName = Cd;
var sa = "DialogOverlay", h0 = x.forwardRef(
  (e, t) => {
    const n = f0(sa, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Et(sa, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ p.jsx(Ts, { present: r || s.open, children: /* @__PURE__ */ p.jsx(TE, { ...o, ref: t }) }) : null;
  }
);
h0.displayName = sa;
var EE = /* @__PURE__ */ cs("DialogOverlay.RemoveScroll"), TE = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Et(sa, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p.jsx(Sd, { as: EE, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ p.jsx(
        Q.div,
        {
          "data-state": Ed(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), lr = "DialogContent", m0 = x.forwardRef(
  (e, t) => {
    const n = f0(lr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Et(lr, e.__scopeDialog);
    return /* @__PURE__ */ p.jsx(Ts, { present: r || s.open, children: s.modal ? /* @__PURE__ */ p.jsx(DE, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(NE, { ...o, ref: t }) });
  }
);
m0.displayName = lr;
var DE = x.forwardRef(
  (e, t) => {
    const n = Et(lr, e.__scopeDialog), r = x.useRef(null), o = ye(t, n.contentRef, r);
    return x.useEffect(() => {
      const s = r.current;
      if (s) return sv(s);
    }, []), /* @__PURE__ */ p.jsx(
      g0,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: G(e.onCloseAutoFocus, (s) => {
          var i;
          s.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: G(e.onPointerDownOutside, (s) => {
          const i = s.detail.originalEvent, a = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || a) && s.preventDefault();
        }),
        onFocusOutside: G(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), NE = x.forwardRef(
  (e, t) => {
    const n = Et(lr, e.__scopeDialog), r = x.useRef(!1), o = x.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      g0,
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
), g0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = Et(lr, n), l = x.useRef(null), u = ye(t, l);
    return jy(), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
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
              "data-state": Ed(a.open),
              ...i,
              ref: u,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(AE, { titleId: a.titleId }),
        /* @__PURE__ */ p.jsx(ME, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), Pd = "DialogTitle", y0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Et(Pd, n);
    return /* @__PURE__ */ p.jsx(Q.h2, { id: o.titleId, ...r, ref: t });
  }
);
y0.displayName = Pd;
var v0 = "DialogDescription", x0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Et(v0, n);
    return /* @__PURE__ */ p.jsx(Q.p, { id: o.descriptionId, ...r, ref: t });
  }
);
x0.displayName = v0;
var w0 = "DialogClose", S0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Et(w0, n);
    return /* @__PURE__ */ p.jsx(
      Q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: G(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
S0.displayName = w0;
function Ed(e) {
  return e ? "open" : "closed";
}
var k0 = "DialogTitleWarning", [k2, b0] = xk(k0, {
  contentName: lr,
  titleName: Pd,
  docsSlug: "dialog"
}), AE = ({ titleId: e }) => {
  const t = b0(k0), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return x.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, RE = "DialogDescriptionWarning", ME = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${b0(RE).contentName}}.`;
  return x.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, jE = c0, LE = p0, C0 = h0, P0 = m0, E0 = y0, T0 = x0, _E = S0;
const OE = jE, IE = LE, D0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  C0,
  {
    ref: n,
    className: ge(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
D0.displayName = C0.displayName;
const N0 = x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.jsxs(IE, { children: [
  /* @__PURE__ */ p.jsx(D0, {}),
  /* @__PURE__ */ p.jsxs(
    P0,
    {
      ref: r,
      className: ge(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ p.jsxs(_E, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ p.jsx(XP, { className: "h-4 w-4" }),
          /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
N0.displayName = P0.displayName;
const A0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  "div",
  {
    className: ge(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
A0.displayName = "DialogHeader";
const R0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  "div",
  {
    className: ge(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
R0.displayName = "DialogFooter";
const M0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  E0,
  {
    ref: n,
    className: ge(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
M0.displayName = E0.displayName;
const j0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  T0,
  {
    ref: n,
    className: ge("text-sm text-muted-foreground", e),
    ...t
  }
));
j0.displayName = T0.displayName;
const Tn = x.forwardRef(
  ({ className: e, variant: t = "default", size: n = "default", ...r }, o) => /* @__PURE__ */ p.jsx(
    "button",
    {
      className: ge(
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
Tn.displayName = "Button";
function Qr({
  className: e,
  variant: t = "default",
  size: n = "default",
  ...r
}) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      className: ge(
        "inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 dark:focus:ring-slate-300 focus:ring-offset-2",
        {
          default: "border-transparent bg-slate-900 text-slate-50 hover:bg-slate-900/80",
          secondary: "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80",
          destructive: "border-transparent bg-red-500 text-slate-50 hover:bg-red-500/80",
          outline: "text-slate-950 dark:text-slate-50 border-slate-200 dark:border-slate-800"
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
function L0({ event: e, eventMetadata: t, open: n, onOpenChange: r }) {
  if (!e) return null;
  const o = t[e.id], s = (a) => {
    const l = e.startDate, u = e.endDate || new Date(l.getTime() + 60 * 60 * 1e3), c = (f) => f.toISOString().replace(/-|:|\.\d\d\d/g, ""), d = (f) => f.toISOString();
    switch (a) {
      case "google":
        const f = new URL("https://calendar.google.com/calendar/render");
        return f.searchParams.append("action", "TEMPLATE"), f.searchParams.append("text", e.title), f.searchParams.append("dates", `${c(l)}/${c(u)}`), f.searchParams.append("details", e.description || ""), o != null && o.location && f.searchParams.append("location", o.location), f.toString();
      case "outlook":
        const g = new URL("https://outlook.live.com/calendar/0/deeplink/compose");
        return g.searchParams.append("subject", e.title), g.searchParams.append("body", e.description || ""), g.searchParams.append("startdt", d(l)), g.searchParams.append("enddt", d(u)), o != null && o.location && g.searchParams.append("location", o.location), g.toString();
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
    academic: "bg-green-100 text-green-800",
    social: "bg-orange-100 text-orange-800",
    cultural: "bg-purple-100 text-purple-800",
    sports: "bg-red-100 text-red-800",
    professional: "bg-teal-100 text-teal-800",
    wellness: "bg-blue-100 text-blue-800",
    volunteer: "bg-yellow-100 text-yellow-800",
    arts: "bg-pink-100 text-pink-800"
  };
  return /* @__PURE__ */ p.jsx(OE, { open: n, onOpenChange: r, children: /* @__PURE__ */ p.jsxs(N0, { className: "max-w-md bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700", children: [
    /* @__PURE__ */ p.jsxs(A0, { children: [
      /* @__PURE__ */ p.jsx(M0, { className: "text-xl text-gray-900 dark:text-gray-100", children: e.title }),
      /* @__PURE__ */ p.jsx(j0, { className: "mt-2 text-gray-600 dark:text-gray-400", children: e.description })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "space-y-4 my-4", children: /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
        /* @__PURE__ */ p.jsx(Fa, { className: "h-4 w-4 text-gray-500 dark:text-gray-400" }),
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
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(Ps, { className: "h-4 w-4 text-gray-500 dark:text-gray-400" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: o.location })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(Ia, { className: "h-4 w-4 text-gray-500 dark:text-gray-400" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: o.organization })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(YP, { className: "h-4 w-4 text-gray-500 dark:text-gray-400" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: o.cost })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsx(Qr, { className: i[o.category] || "bg-gray-100 text-gray-800", children: o.category.charAt(0).toUpperCase() + o.category.slice(1) }),
          o.registrationRequired && /* @__PURE__ */ p.jsx(Qr, { variant: "outline", className: "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300", children: "Registration Required" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsxs(R0, { className: "flex-col sm:flex-col gap-2", children: [
      /* @__PURE__ */ p.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400 mb-2", children: "Add to your calendar:" }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex gap-2 w-full", children: [
        /* @__PURE__ */ p.jsxs(
          Tn,
          {
            variant: "outline",
            className: "flex-1",
            onClick: () => window.open(s("google"), "_blank"),
            children: [
              /* @__PURE__ */ p.jsx(Nl, { className: "h-4 w-4 mr-2" }),
              "Google"
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Tn,
          {
            variant: "outline",
            className: "flex-1",
            onClick: () => window.open(s("outlook"), "_blank"),
            children: [
              /* @__PURE__ */ p.jsx(Nl, { className: "h-4 w-4 mr-2" }),
              "Outlook"
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Tn,
          {
            variant: "outline",
            className: "flex-1",
            onClick: () => {
              const a = s("apple"), l = document.createElement("a");
              l.href = a, l.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, l.click();
            },
            children: [
              /* @__PURE__ */ p.jsx(Nl, { className: "h-4 w-4 mr-2" }),
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
const Ba = x.createContext(null), Nd = x.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class FE extends x.Component {
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
function VE({ children: e, isPresent: t }) {
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
  }, [t]), p.jsx(FE, { isPresent: t, childRef: r, sizeRef: o, children: x.cloneElement(e, { ref: r }) });
}
const zE = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: i }) => {
  const a = Dd(BE), l = x.useId(), u = x.useCallback((d) => {
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
  }, [n]), i === "popLayout" && (e = p.jsx(VE, { isPresent: n, children: e })), p.jsx(Ba.Provider, { value: c, children: e });
};
function BE() {
  return /* @__PURE__ */ new Map();
}
function _0(e = !0) {
  const t = x.useContext(Ba);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t, s = x.useId();
  x.useEffect(() => {
    e && o(s);
  }, [e]);
  const i = x.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, i] : [!0];
}
const ai = (e) => e.key || "";
function Kp(e) {
  const t = [];
  return x.Children.forEach(e, (n) => {
    x.isValidElement(n) && t.push(n);
  }), t;
}
const Ad = typeof window < "u", O0 = Ad ? x.useLayoutEffect : x.useEffect, Gp = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: o = !0, mode: s = "sync", propagate: i = !1 }) => {
  const [a, l] = _0(i), u = x.useMemo(() => Kp(e), [e]), c = i && !a ? [] : u.map(ai), d = x.useRef(!0), f = x.useRef(u), g = Dd(() => /* @__PURE__ */ new Map()), [w, y] = x.useState(u), [S, m] = x.useState(u);
  O0(() => {
    d.current = !1, f.current = u;
    for (let k = 0; k < S.length; k++) {
      const b = ai(S[k]);
      c.includes(b) ? g.delete(b) : g.get(b) !== !0 && g.set(b, !1);
    }
  }, [S, c.length, c.join("-")]);
  const h = [];
  if (u !== w) {
    let k = [...u];
    for (let b = 0; b < S.length; b++) {
      const C = S[b], P = ai(C);
      c.includes(P) || (k.splice(b, 0, C), h.push(C));
    }
    s === "wait" && h.length && (k = h), m(Kp(k)), y(u);
    return;
  }
  const { forceRender: v } = x.useContext(Td);
  return p.jsx(p.Fragment, { children: S.map((k) => {
    const b = ai(k), C = i && !a ? !1 : u === S || c.includes(b), P = () => {
      if (g.has(b))
        g.set(b, !0);
      else
        return;
      let E = !0;
      g.forEach((N) => {
        N || (E = !1);
      }), E && (v == null || v(), m(f.current), i && (l == null || l()), r && r());
    };
    return p.jsx(zE, { isPresent: C, initial: !d.current || n ? void 0 : !1, custom: C ? void 0 : t, presenceAffectsLayout: o, mode: s, onExitComplete: C ? void 0 : P, children: k }, b);
  }) });
}, nt = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let I0 = nt;
// @__NO_SIDE_EFFECTS__
function Rd(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Zr = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Yt = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, Xt = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, $E = {
  useManualTiming: !1
};
function UE(e) {
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
      const g = d && r ? t : n;
      return c && s.add(u), g.has(u) || g.add(u), u;
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
const li = [
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
], WE = 40;
function F0(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = () => n = !0, i = li.reduce((m, h) => (m[h] = UE(s), m), {}), { read: a, resolveKeyframes: l, update: u, preRender: c, render: d, postRender: f } = i, g = () => {
    const m = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(m - o.timestamp, WE), 1), o.timestamp = m, o.isProcessing = !0, a.process(o), l.process(o), u.process(o), c.process(o), d.process(o), f.process(o), o.isProcessing = !1, n && t && (r = !1, e(g));
  }, w = () => {
    n = !0, r = !0, o.isProcessing || e(g);
  };
  return { schedule: li.reduce((m, h) => {
    const v = i[h];
    return m[h] = (k, b = !1, C = !1) => (n || w(), v.schedule(k, b, C)), m;
  }, {}), cancel: (m) => {
    for (let h = 0; h < li.length; h++)
      i[li[h]].cancel(m);
  }, state: o, steps: i };
}
const { schedule: ie, cancel: jn, state: Te, steps: Ml } = F0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : nt, !0), V0 = x.createContext({ strict: !1 }), Yp = {
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
}, qr = {};
for (const e in Yp)
  qr[e] = {
    isEnabled: (t) => Yp[e].some((n) => !!t[n])
  };
function HE(e) {
  for (const t in e)
    qr[t] = {
      ...qr[t],
      ...e[t]
    };
}
const KE = /* @__PURE__ */ new Set([
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
function ia(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || KE.has(e);
}
let z0 = (e) => !ia(e);
function GE(e) {
  e && (z0 = (t) => t.startsWith("on") ? !ia(t) : e(t));
}
try {
  GE(require("@emotion/is-prop-valid").default);
} catch {
}
function YE(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (z0(o) || n === !0 && ia(o) || !t && !ia(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function XE(e) {
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
const $a = x.createContext({});
function hs(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ua(e) {
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
function Wa(e) {
  return Ua(e.animate) || jd.some((t) => hs(e[t]));
}
function B0(e) {
  return !!(Wa(e) || e.variants);
}
function QE(e, t) {
  if (Wa(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || hs(n) ? n : void 0,
      animate: hs(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function ZE(e) {
  const { initial: t, animate: n } = QE(e, x.useContext($a));
  return x.useMemo(() => ({ initial: t, animate: n }), [Xp(t), Xp(n)]);
}
function Xp(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const qE = Symbol.for("motionComponentSymbol");
function Dr(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function JE(e, t, n) {
  return x.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Dr(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const Ld = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), eT = "framerAppearId", $0 = "data-" + Ld(eT), { schedule: _d } = F0(queueMicrotask, !1), U0 = x.createContext({});
function tT(e, t, n, r, o) {
  var s, i;
  const { visualElement: a } = x.useContext($a), l = x.useContext(V0), u = x.useContext(Ba), c = x.useContext(Nd).reducedMotion, d = x.useRef(null);
  r = r || l.renderer, !d.current && r && (d.current = r(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: u,
    blockInitialAnimation: u ? u.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const f = d.current, g = x.useContext(U0);
  f && !f.projection && o && (f.type === "html" || f.type === "svg") && nT(d.current, n, o, g);
  const w = x.useRef(!1);
  x.useInsertionEffect(() => {
    f && w.current && f.update(n, u);
  });
  const y = n[$0], S = x.useRef(!!y && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, y)) && ((i = window.MotionHasOptimisedAnimation) === null || i === void 0 ? void 0 : i.call(window, y)));
  return O0(() => {
    f && (w.current = !0, window.MotionIsMounted = !0, f.updateFeatures(), _d.render(f.render), S.current && f.animationState && f.animationState.animateChanges());
  }), x.useEffect(() => {
    f && (!S.current && f.animationState && f.animationState.animateChanges(), S.current && (queueMicrotask(() => {
      var m;
      (m = window.MotionHandoffMarkAsComplete) === null || m === void 0 || m.call(window, y);
    }), S.current = !1));
  }), f;
}
function nT(e, t, n, r) {
  const { layoutId: o, layout: s, drag: i, dragConstraints: a, layoutScroll: l, layoutRoot: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : W0(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: s,
    alwaysMeasureLayout: !!i || a && Dr(a),
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
function W0(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : W0(e.parent);
}
function rT({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  var s, i;
  e && HE(e);
  function a(u, c) {
    let d;
    const f = {
      ...x.useContext(Nd),
      ...u,
      layoutId: oT(u)
    }, { isStatic: g } = f, w = ZE(u), y = r(u, g);
    if (!g && Ad) {
      sT();
      const S = iT(f);
      d = S.MeasureLayout, w.visualElement = tT(o, y, f, t, S.ProjectionNode);
    }
    return p.jsxs($a.Provider, { value: w, children: [d && w.visualElement ? p.jsx(d, { visualElement: w.visualElement, ...f }) : null, n(o, u, JE(y, w.visualElement, c), y, g, w.visualElement)] });
  }
  a.displayName = `motion.${typeof o == "string" ? o : `create(${(i = (s = o.displayName) !== null && s !== void 0 ? s : o.name) !== null && i !== void 0 ? i : ""})`}`;
  const l = x.forwardRef(a);
  return l[qE] = o, l;
}
function oT({ layoutId: e }) {
  const t = x.useContext(Td).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function sT(e, t) {
  x.useContext(V0).strict;
}
function iT(e) {
  const { drag: t, layout: n } = qr;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const aT = [
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
      !!(aT.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function Qp(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Id(e, t, n, r) {
  if (typeof t == "function") {
    const [o, s] = Qp(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, s] = Qp(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  return t;
}
const Qu = (e) => Array.isArray(e), lT = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), uT = (e) => Qu(e) ? e[e.length - 1] || 0 : e, Ie = (e) => !!(e && e.getVelocity);
function Ti(e) {
  const t = Ie(e) ? e.get() : e;
  return lT(t) ? t.toValue() : t;
}
function cT({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, o, s) {
  const i = {
    latestValues: dT(r, o, s, e),
    renderState: t()
  };
  return n && (i.onMount = (a) => n({ props: r, current: a, ...i }), i.onUpdate = (a) => n(a)), i;
}
const H0 = (e) => (t, n) => {
  const r = x.useContext($a), o = x.useContext(Ba), s = () => cT(e, t, r, o);
  return n ? s() : Dd(s);
};
function dT(e, t, n, r) {
  const o = {}, s = r(e, {});
  for (const f in s)
    o[f] = Ti(s[f]);
  let { initial: i, animate: a } = e;
  const l = Wa(e), u = B0(e);
  t && u && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || i === !1;
  const d = c ? a : i;
  if (d && typeof d != "boolean" && !Ua(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let g = 0; g < f.length; g++) {
      const w = Id(e, f[g]);
      if (w) {
        const { transitionEnd: y, transition: S, ...m } = w;
        for (const h in m) {
          let v = m[h];
          if (Array.isArray(v)) {
            const k = c ? v.length - 1 : 0;
            v = v[k];
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
], dr = new Set(uo), K0 = (e) => (t) => typeof t == "string" && t.startsWith(e), G0 = /* @__PURE__ */ K0("--"), fT = /* @__PURE__ */ K0("var(--"), Fd = (e) => fT(e) ? pT.test(e.split("/*")[0].trim()) : !1, pT = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Y0 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, nn = (e, t, n) => n > t ? t : n < e ? e : n, co = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, ms = {
  ...co,
  transform: (e) => nn(0, 1, e)
}, ui = {
  ...co,
  default: 1
}, Ds = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), un = /* @__PURE__ */ Ds("deg"), Ft = /* @__PURE__ */ Ds("%"), F = /* @__PURE__ */ Ds("px"), hT = /* @__PURE__ */ Ds("vh"), mT = /* @__PURE__ */ Ds("vw"), Zp = {
  ...Ft,
  parse: (e) => Ft.parse(e) / 100,
  transform: (e) => Ft.transform(e * 100)
}, gT = {
  // Border props
  borderWidth: F,
  borderTopWidth: F,
  borderRightWidth: F,
  borderBottomWidth: F,
  borderLeftWidth: F,
  borderRadius: F,
  radius: F,
  borderTopLeftRadius: F,
  borderTopRightRadius: F,
  borderBottomRightRadius: F,
  borderBottomLeftRadius: F,
  // Positioning props
  width: F,
  maxWidth: F,
  height: F,
  maxHeight: F,
  top: F,
  right: F,
  bottom: F,
  left: F,
  // Spacing props
  padding: F,
  paddingTop: F,
  paddingRight: F,
  paddingBottom: F,
  paddingLeft: F,
  margin: F,
  marginTop: F,
  marginRight: F,
  marginBottom: F,
  marginLeft: F,
  // Misc
  backgroundPositionX: F,
  backgroundPositionY: F
}, yT = {
  rotate: un,
  rotateX: un,
  rotateY: un,
  rotateZ: un,
  scale: ui,
  scaleX: ui,
  scaleY: ui,
  scaleZ: ui,
  skew: un,
  skewX: un,
  skewY: un,
  distance: F,
  translateX: F,
  translateY: F,
  translateZ: F,
  x: F,
  y: F,
  z: F,
  perspective: F,
  transformPerspective: F,
  opacity: ms,
  originX: Zp,
  originY: Zp,
  originZ: F
}, qp = {
  ...co,
  transform: Math.round
}, Vd = {
  ...gT,
  ...yT,
  zIndex: qp,
  size: F,
  // SVG
  fillOpacity: ms,
  strokeOpacity: ms,
  numOctaves: qp
}, vT = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, xT = uo.length;
function wT(e, t, n) {
  let r = "", o = !0;
  for (let s = 0; s < xT; s++) {
    const i = uo[s], a = e[i];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (i.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = Y0(a, Vd[i]);
      if (!l) {
        o = !1;
        const c = vT[i] || i;
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
    if (dr.has(l)) {
      i = !0;
      continue;
    } else if (G0(l)) {
      o[l] = u;
      continue;
    } else {
      const c = Y0(u, Vd[l]);
      l.startsWith("origin") ? (a = !0, s[l] = c) : r[l] = c;
    }
  }
  if (t.transform || (i || n ? r.transform = wT(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const ST = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, kT = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function bT(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const s = o ? ST : kT;
  e[s.offset] = F.transform(-r);
  const i = F.transform(t), a = F.transform(n);
  e[s.array] = `${i} ${a}`;
}
function Jp(e, t, n) {
  return typeof e == "string" ? e : F.transform(t + n * e);
}
function CT(e, t, n) {
  const r = Jp(t, e.x, e.width), o = Jp(n, e.y, e.height);
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
  const { attrs: f, style: g, dimensions: w } = e;
  f.transform && (w && (g.transform = f.transform), delete f.transform), w && (o !== void 0 || s !== void 0 || g.transform) && (g.transformOrigin = CT(w, o !== void 0 ? o : 0.5, s !== void 0 ? s : 0.5)), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), r !== void 0 && (f.scale = r), i !== void 0 && bT(f, i, a, l, !1);
}
const $d = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), X0 = () => ({
  ...$d(),
  attrs: {}
}), Ud = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Q0(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
const Z0 = /* @__PURE__ */ new Set([
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
  Q0(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(Z0.has(o) ? o : Ld(o), t.attrs[o]);
}
const aa = {};
function PT(e) {
  Object.assign(aa, e);
}
function J0(e, { layout: t, layoutId: n }) {
  return dr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!aa[e] || e === "opacity");
}
function Wd(e, t, n) {
  var r;
  const { style: o } = e, s = {};
  for (const i in o)
    (Ie(o[i]) || t.style && Ie(t.style[i]) || J0(i, e) || ((r = n == null ? void 0 : n.getValue(i)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[i] = o[i]);
  return s;
}
function ex(e, t, n) {
  const r = Wd(e, t, n);
  for (const o in e)
    if (Ie(e[o]) || Ie(t[o])) {
      const s = uo.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[s] = e[o];
    }
  return r;
}
function ET(e, t) {
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
const eh = ["x", "y", "width", "height", "cx", "cy", "r"], TT = {
  useVisualState: H0({
    scrapeMotionValuesFromProps: ex,
    createRenderState: X0,
    onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: o }) => {
      if (!n)
        return;
      let s = !!e.drag;
      if (!s) {
        for (const a in o)
          if (dr.has(a)) {
            s = !0;
            break;
          }
      }
      if (!s)
        return;
      let i = !t;
      if (t)
        for (let a = 0; a < eh.length; a++) {
          const l = eh[a];
          e[l] !== t[l] && (i = !0);
        }
      i && ie.read(() => {
        ET(n, r), ie.render(() => {
          Bd(r, o, Ud(n.tagName), e.transformTemplate), q0(n, r);
        });
      });
    }
  })
}, DT = {
  useVisualState: H0({
    scrapeMotionValuesFromProps: Wd,
    createRenderState: $d
  })
};
function tx(e, t, n) {
  for (const r in t)
    !Ie(t[r]) && !J0(r, n) && (e[r] = t[r]);
}
function NT({ transformTemplate: e }, t) {
  return x.useMemo(() => {
    const n = $d();
    return zd(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function AT(e, t) {
  const n = e.style || {}, r = {};
  return tx(r, n, e), Object.assign(r, NT(e, t)), r;
}
function RT(e, t) {
  const n = {}, r = AT(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function MT(e, t, n, r) {
  const o = x.useMemo(() => {
    const s = X0();
    return Bd(s, t, Ud(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    tx(s, e.style, e), o.style = { ...s, ...o.style };
  }
  return o;
}
function jT(e = !1) {
  return (n, r, o, { latestValues: s }, i) => {
    const l = (Od(n) ? MT : RT)(r, s, i, n), u = YE(r, typeof n == "string", e), c = n !== x.Fragment ? { ...u, ...l, ref: o } : {}, { children: d } = r, f = x.useMemo(() => Ie(d) ? d.get() : d, [d]);
    return x.createElement(n, {
      ...c,
      children: f
    });
  };
}
function LT(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const i = {
      ...Od(r) ? TT : DT,
      preloadedFeatures: e,
      useRender: jT(o),
      createVisualElement: t,
      Component: r
    };
    return rT(i);
  };
}
function nx(e, t) {
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
function Ha(e, t, n) {
  const r = e.getProps();
  return Id(r, t, n !== void 0 ? n : r.custom, e);
}
const _T = /* @__PURE__ */ Rd(() => window.ScrollTimeline !== void 0);
class OT {
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
      if (_T() && o.attachTimeline)
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
class IT extends OT {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function Hd(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Zu = 2e4;
function rx(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Zu; )
    t += n, r = e.next(t);
  return t >= Zu ? 1 / 0 : t;
}
function Kd(e) {
  return typeof e == "function";
}
function th(e, t) {
  e.timeline = t, e.onfinish = null;
}
const Gd = (e) => Array.isArray(e) && typeof e[0] == "number", FT = {
  linearEasing: void 0
};
function VT(e, t) {
  const n = /* @__PURE__ */ Rd(e);
  return () => {
    var r;
    return (r = FT[t]) !== null && r !== void 0 ? r : n();
  };
}
const la = /* @__PURE__ */ VT(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), ox = (e, t, n = 10) => {
  let r = "";
  const o = Math.max(Math.round(t / n), 2);
  for (let s = 0; s < o; s++)
    r += e(/* @__PURE__ */ Zr(0, o - 1, s)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function sx(e) {
  return !!(typeof e == "function" && la() || !e || typeof e == "string" && (e in qu || la()) || Gd(e) || Array.isArray(e) && e.every(sx));
}
const Ro = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, qu = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Ro([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Ro([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Ro([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Ro([0.33, 1.53, 0.69, 0.99])
};
function ix(e, t) {
  if (e)
    return typeof e == "function" && la() ? ox(e, t) : Gd(e) ? Ro(e) : Array.isArray(e) ? e.map((n) => ix(n, t) || qu.easeOut) : qu[e];
}
const yt = {
  x: !1,
  y: !1
};
function ax() {
  return yt.x || yt.y;
}
function zT(e, t, n) {
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
function lx(e, t) {
  const n = zT(e), r = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, o, () => r.abort()];
}
function nh(e) {
  return (t) => {
    t.pointerType === "touch" || ax() || e(t);
  };
}
function BT(e, t, n = {}) {
  const [r, o, s] = lx(e, n), i = nh((a) => {
    const { target: l } = a, u = t(a);
    if (typeof u != "function" || !l)
      return;
    const c = nh((d) => {
      u(d), l.removeEventListener("pointerleave", c);
    });
    l.addEventListener("pointerleave", c, o);
  });
  return r.forEach((a) => {
    a.addEventListener("pointerenter", i, o);
  }), s;
}
const ux = (e, t) => t ? e === t ? !0 : ux(e, t.parentElement) : !1, Yd = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, $T = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function UT(e) {
  return $T.has(e.tagName) || e.tabIndex !== -1;
}
const Mo = /* @__PURE__ */ new WeakSet();
function rh(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function jl(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const WT = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = rh(() => {
    if (Mo.has(n))
      return;
    jl(n, "down");
    const o = rh(() => {
      jl(n, "up");
    }), s = () => jl(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function oh(e) {
  return Yd(e) && !ax();
}
function HT(e, t, n = {}) {
  const [r, o, s] = lx(e, n), i = (a) => {
    const l = a.currentTarget;
    if (!oh(a) || Mo.has(l))
      return;
    Mo.add(l);
    const u = t(a), c = (g, w) => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", f), !(!oh(g) || !Mo.has(l)) && (Mo.delete(l), typeof u == "function" && u(g, { success: w }));
    }, d = (g) => {
      c(g, n.useGlobalTarget || ux(l, g.target));
    }, f = (g) => {
      c(g, !1);
    };
    window.addEventListener("pointerup", d, o), window.addEventListener("pointercancel", f, o);
  };
  return r.forEach((a) => {
    !UT(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", i, o), a.addEventListener("focus", (u) => WT(u, o), o);
  }), s;
}
function KT(e) {
  return e === "x" || e === "y" ? yt[e] ? null : (yt[e] = !0, () => {
    yt[e] = !1;
  }) : yt.x || yt.y ? null : (yt.x = yt.y = !0, () => {
    yt.x = yt.y = !1;
  });
}
const cx = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...uo
]);
let Di;
function GT() {
  Di = void 0;
}
const Vt = {
  now: () => (Di === void 0 && Vt.set(Te.isProcessing || $E.useManualTiming ? Te.timestamp : performance.now()), Di),
  set: (e) => {
    Di = e, queueMicrotask(GT);
  }
};
function Xd(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Qd(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Zd {
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
function dx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const sh = 30, YT = (e) => !isNaN(parseFloat(e));
class XT {
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
    this.current = t, this.updatedAt = Vt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = YT(this.current));
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
    this.events[t] || (this.events[t] = new Zd());
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
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > sh)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, sh);
    return dx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function gs(e, t) {
  return new XT(e, t);
}
function QT(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, gs(n));
}
function ZT(e, t) {
  const n = Ha(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const i in s) {
    const a = uT(s[i]);
    QT(e, i, a);
  }
}
function qT(e) {
  return !!(Ie(e) && e.add);
}
function Ju(e, t) {
  const n = e.getValue("willChange");
  if (qT(n))
    return n.add(t);
}
function fx(e) {
  return e.props[$0];
}
const px = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, JT = 1e-7, eD = 12;
function tD(e, t, n, r, o) {
  let s, i, a = 0;
  do
    i = t + (n - t) / 2, s = px(i, r, o) - e, s > 0 ? n = i : t = i;
  while (Math.abs(s) > JT && ++a < eD);
  return i;
}
function Ns(e, t, n, r) {
  if (e === t && n === r)
    return nt;
  const o = (s) => tD(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : px(o(s), t, r);
}
const hx = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, mx = (e) => (t) => 1 - e(1 - t), gx = /* @__PURE__ */ Ns(0.33, 1.53, 0.69, 0.99), qd = /* @__PURE__ */ mx(gx), yx = /* @__PURE__ */ hx(qd), vx = (e) => (e *= 2) < 1 ? 0.5 * qd(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Jd = (e) => 1 - Math.sin(Math.acos(e)), xx = mx(Jd), wx = hx(Jd), Sx = (e) => /^0[^.\s]+$/u.test(e);
function nD(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Sx(e) : !0;
}
const Uo = (e) => Math.round(e * 1e5) / 1e5, ef = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function rD(e) {
  return e == null;
}
const oD = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, tf = (e, t) => (n) => !!(typeof n == "string" && oD.test(n) && n.startsWith(e) || t && !rD(n) && Object.prototype.hasOwnProperty.call(n, t)), kx = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, s, i, a] = r.match(ef);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, sD = (e) => nn(0, 255, e), Ll = {
  ...co,
  transform: (e) => Math.round(sD(e))
}, Qn = {
  test: /* @__PURE__ */ tf("rgb", "red"),
  parse: /* @__PURE__ */ kx("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Ll.transform(e) + ", " + Ll.transform(t) + ", " + Ll.transform(n) + ", " + Uo(ms.transform(r)) + ")"
};
function iD(e) {
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
  parse: iD,
  transform: Qn.transform
}, Nr = {
  test: /* @__PURE__ */ tf("hsl", "hue"),
  parse: /* @__PURE__ */ kx("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Ft.transform(Uo(t)) + ", " + Ft.transform(Uo(n)) + ", " + Uo(ms.transform(r)) + ")"
}, _e = {
  test: (e) => Qn.test(e) || ec.test(e) || Nr.test(e),
  parse: (e) => Qn.test(e) ? Qn.parse(e) : Nr.test(e) ? Nr.parse(e) : ec.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Qn.transform(e) : Nr.transform(e)
}, aD = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function lD(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(ef)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(aD)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const bx = "number", Cx = "color", uD = "var", cD = "var(", ih = "${}", dD = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ys(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let s = 0;
  const a = t.replace(dD, (l) => (_e.test(l) ? (r.color.push(s), o.push(Cx), n.push(_e.parse(l))) : l.startsWith(cD) ? (r.var.push(s), o.push(uD), n.push(l)) : (r.number.push(s), o.push(bx), n.push(parseFloat(l))), ++s, ih)).split(ih);
  return { values: n, split: a, indexes: r, types: o };
}
function Px(e) {
  return ys(e).values;
}
function Ex(e) {
  const { split: t, types: n } = ys(e), r = t.length;
  return (o) => {
    let s = "";
    for (let i = 0; i < r; i++)
      if (s += t[i], o[i] !== void 0) {
        const a = n[i];
        a === bx ? s += Uo(o[i]) : a === Cx ? s += _e.transform(o[i]) : s += o[i];
      }
    return s;
  };
}
const fD = (e) => typeof e == "number" ? 0 : e;
function pD(e) {
  const t = Px(e);
  return Ex(e)(t.map(fD));
}
const Ln = {
  test: lD,
  parse: Px,
  createTransformer: Ex,
  getAnimatableNone: pD
}, hD = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function mD(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(ef) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let s = hD.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + o + ")";
}
const gD = /\b([a-z-]*)\(.*?\)/gu, tc = {
  ...Ln,
  getAnimatableNone: (e) => {
    const t = e.match(gD);
    return t ? t.map(mD).join(" ") : e;
  }
}, yD = {
  ...Vd,
  // Color props
  color: _e,
  backgroundColor: _e,
  outlineColor: _e,
  fill: _e,
  stroke: _e,
  // Border props
  borderColor: _e,
  borderTopColor: _e,
  borderRightColor: _e,
  borderBottomColor: _e,
  borderLeftColor: _e,
  filter: tc,
  WebkitFilter: tc
}, nf = (e) => yD[e];
function Tx(e, t) {
  let n = nf(e);
  return n !== tc && (n = Ln), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const vD = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function xD(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const s = e[r];
    typeof s == "string" && !vD.has(s) && ys(s).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const s of t)
      e[s] = Tx(n, o);
}
const ah = (e) => e === co || e === F, lh = (e, t) => parseFloat(e.split(", ")[t]), uh = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/u);
  if (o)
    return lh(o[1], t);
  {
    const s = r.match(/^matrix\((.+)\)$/u);
    return s ? lh(s[1], e) : 0;
  }
}, wD = /* @__PURE__ */ new Set(["x", "y", "z"]), SD = uo.filter((e) => !wD.has(e));
function kD(e) {
  const t = [];
  return SD.forEach((n) => {
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
  x: uh(4, 13),
  y: uh(5, 14)
};
Jr.translateX = Jr.x;
Jr.translateY = Jr.y;
const Jn = /* @__PURE__ */ new Set();
let nc = !1, rc = !1;
function Dx() {
  if (rc) {
    const e = Array.from(Jn).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = kD(r);
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
  rc = !1, nc = !1, Jn.forEach((e) => e.complete()), Jn.clear();
}
function Nx() {
  Jn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (rc = !0);
  });
}
function bD() {
  Nx(), Dx();
}
class rf {
  constructor(t, n, r, o, s, i = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = s, this.isAsync = i;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Jn.add(this), nc || (nc = !0, ie.read(Nx), ie.resolveKeyframes(Dx))) : (this.readKeyframes(), this.complete());
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Jn.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, Jn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Ax = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), CD = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function PD(e) {
  const t = CD.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function Rx(e, t, n = 1) {
  const [r, o] = PD(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const i = s.trim();
    return Ax(i) ? parseFloat(i) : i;
  }
  return Fd(o) ? Rx(o, t, n + 1) : o;
}
const Mx = (e) => (t) => t.test(e), ED = {
  test: (e) => e === "auto",
  parse: (e) => e
}, jx = [co, F, Ft, un, mT, hT, ED], ch = (e) => jx.find(Mx(e));
class Lx extends rf {
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
    if (this.resolveNoneKeyframes(), !cx.has(r) || t.length !== 2)
      return;
    const [o, s] = t, i = ch(o), a = ch(s);
    if (i !== a)
      if (ah(i) && ah(a))
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
      nD(t[o]) && r.push(o);
    r.length && xD(t, r, n);
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
const dh = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Ln.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function TD(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function DD(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const s = e[e.length - 1], i = dh(o, t), a = dh(s, t);
  return !i || !a ? !1 : TD(e) || (n === "spring" || Kd(n)) && r;
}
const ND = (e) => e !== null;
function Ka(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(ND), s = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !s || r === void 0 ? o[s] : r;
}
const AD = 40;
class _x {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > AD ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && bD(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = Vt.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: o, velocity: s, delay: i, onComplete: a, onUpdate: l, isGenerator: u } = this.options;
    if (!u && !DD(t, r, o, s))
      if (i)
        this.options.duration = 0;
      else {
        l && l(Ka(t, this.options, n)), a && a(), this.resolveFinishedPromise();
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
function RD({ hue: e, saturation: t, lightness: n, alpha: r }) {
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
function ua(e, t) {
  return (n) => n > 0 ? t : e;
}
const Ol = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, MD = [ec, Qn, Nr], jD = (e) => MD.find((t) => t.test(e));
function fh(e) {
  const t = jD(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === Nr && (n = RD(n)), n;
}
const ph = (e, t) => {
  const n = fh(e), r = fh(t);
  if (!n || !r)
    return ua(e, t);
  const o = { ...n };
  return (s) => (o.red = Ol(n.red, r.red, s), o.green = Ol(n.green, r.green, s), o.blue = Ol(n.blue, r.blue, s), o.alpha = ce(n.alpha, r.alpha, s), Qn.transform(o));
}, LD = (e, t) => (n) => t(e(n)), As = (...e) => e.reduce(LD), oc = /* @__PURE__ */ new Set(["none", "hidden"]);
function _D(e, t) {
  return oc.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function OD(e, t) {
  return (n) => ce(e, t, n);
}
function of(e) {
  return typeof e == "number" ? OD : typeof e == "string" ? Fd(e) ? ua : _e.test(e) ? ph : VD : Array.isArray(e) ? Ox : typeof e == "object" ? _e.test(e) ? ph : ID : ua;
}
function Ox(e, t) {
  const n = [...e], r = n.length, o = e.map((s, i) => of(s)(s, t[i]));
  return (s) => {
    for (let i = 0; i < r; i++)
      n[i] = o[i](s);
    return n;
  };
}
function ID(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = of(e[o])(e[o], t[o]));
  return (o) => {
    for (const s in r)
      n[s] = r[s](o);
    return n;
  };
}
function FD(e, t) {
  var n;
  const r = [], o = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const i = t.types[s], a = e.indexes[i][o[i]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    r[s] = l, o[i]++;
  }
  return r;
}
const VD = (e, t) => {
  const n = Ln.createTransformer(t), r = ys(e), o = ys(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? oc.has(e) && !o.values.length || oc.has(t) && !r.values.length ? _D(e, t) : As(Ox(FD(r, o), o.values), n) : ua(e, t);
};
function Ix(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? ce(e, t, n) : of(e)(e, t);
}
const zD = 5;
function Fx(e, t, n) {
  const r = Math.max(t - zD, 0);
  return dx(n - e(r), t - r);
}
const he = {
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
function BD({ duration: e = he.duration, bounce: t = he.bounce, velocity: n = he.velocity, mass: r = he.mass }) {
  let o, s, i = 1 - t;
  i = nn(he.minDamping, he.maxDamping, i), e = nn(he.minDuration, he.maxDuration, /* @__PURE__ */ Xt(e)), i < 1 ? (o = (u) => {
    const c = u * i, d = c * e, f = c - n, g = sc(u, i), w = Math.exp(-d);
    return Il - f / g * w;
  }, s = (u) => {
    const d = u * i * e, f = d * n + n, g = Math.pow(i, 2) * Math.pow(u, 2) * e, w = Math.exp(-d), y = sc(Math.pow(u, 2), i);
    return (-o(u) + Il > 0 ? -1 : 1) * ((f - g) * w) / y;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - n) * e + 1;
    return -Il + c * d;
  }, s = (u) => {
    const c = Math.exp(-u * e), d = (n - u) * (e * e);
    return c * d;
  });
  const a = 5 / e, l = UD(o, s, a);
  if (e = /* @__PURE__ */ Yt(e), isNaN(l))
    return {
      stiffness: he.stiffness,
      damping: he.damping,
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
const $D = 12;
function UD(e, t, n) {
  let r = n;
  for (let o = 1; o < $D; o++)
    r = r - e(r) / t(r);
  return r;
}
function sc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const WD = ["duration", "bounce"], HD = ["stiffness", "damping", "mass"];
function hh(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function KD(e) {
  let t = {
    velocity: he.velocity,
    stiffness: he.stiffness,
    damping: he.damping,
    mass: he.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!hh(e, HD) && hh(e, WD))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, s = 2 * nn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: he.mass,
        stiffness: o,
        damping: s
      };
    } else {
      const n = BD(e);
      t = {
        ...t,
        ...n,
        mass: he.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Vx(e = he.visualDuration, t = he.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: o } = n;
  const s = n.keyframes[0], i = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: s }, { stiffness: l, damping: u, mass: c, duration: d, velocity: f, isResolvedFromDuration: g } = KD({
    ...n,
    velocity: -/* @__PURE__ */ Xt(n.velocity || 0)
  }), w = f || 0, y = u / (2 * Math.sqrt(l * c)), S = i - s, m = /* @__PURE__ */ Xt(Math.sqrt(l / c)), h = Math.abs(S) < 5;
  r || (r = h ? he.restSpeed.granular : he.restSpeed.default), o || (o = h ? he.restDelta.granular : he.restDelta.default);
  let v;
  if (y < 1) {
    const b = sc(m, y);
    v = (C) => {
      const P = Math.exp(-y * m * C);
      return i - P * ((w + y * m * S) / b * Math.sin(b * C) + S * Math.cos(b * C));
    };
  } else if (y === 1)
    v = (b) => i - Math.exp(-m * b) * (S + (w + m * S) * b);
  else {
    const b = m * Math.sqrt(y * y - 1);
    v = (C) => {
      const P = Math.exp(-y * m * C), E = Math.min(b * C, 300);
      return i - P * ((w + y * m * S) * Math.sinh(E) + b * S * Math.cosh(E)) / b;
    };
  }
  const k = {
    calculatedDuration: g && d || null,
    next: (b) => {
      const C = v(b);
      if (g)
        a.done = b >= d;
      else {
        let P = 0;
        y < 1 && (P = b === 0 ? /* @__PURE__ */ Yt(w) : Fx(v, b, C));
        const E = Math.abs(P) <= r, N = Math.abs(i - C) <= o;
        a.done = E && N;
      }
      return a.value = a.done ? i : C, a;
    },
    toString: () => {
      const b = Math.min(rx(k), Zu), C = ox((P) => k.next(b * P).value, b, 30);
      return b + "ms " + C;
    }
  };
  return k;
}
function mh({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: s = 500, modifyTarget: i, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, g = (E) => a !== void 0 && E < a || l !== void 0 && E > l, w = (E) => a === void 0 ? l : l === void 0 || Math.abs(a - E) < Math.abs(l - E) ? a : l;
  let y = n * t;
  const S = d + y, m = i === void 0 ? S : i(S);
  m !== S && (y = m - d);
  const h = (E) => -y * Math.exp(-E / r), v = (E) => m + h(E), k = (E) => {
    const N = h(E), D = v(E);
    f.done = Math.abs(N) <= u, f.value = f.done ? m : D;
  };
  let b, C;
  const P = (E) => {
    g(f.value) && (b = E, C = Vx({
      keyframes: [f.value, w(f.value)],
      velocity: Fx(v, E, f.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: s,
      restDelta: u,
      restSpeed: c
    }));
  };
  return P(0), {
    calculatedDuration: null,
    next: (E) => {
      let N = !1;
      return !C && b === void 0 && (N = !0, k(E), P(E)), b !== void 0 && E >= b ? C.next(E - b) : (!N && k(E), f);
    }
  };
}
const GD = /* @__PURE__ */ Ns(0.42, 0, 1, 1), YD = /* @__PURE__ */ Ns(0, 0, 0.58, 1), zx = /* @__PURE__ */ Ns(0.42, 0, 0.58, 1), XD = (e) => Array.isArray(e) && typeof e[0] != "number", QD = {
  linear: nt,
  easeIn: GD,
  easeInOut: zx,
  easeOut: YD,
  circIn: Jd,
  circInOut: wx,
  circOut: xx,
  backIn: qd,
  backInOut: yx,
  backOut: gx,
  anticipate: vx
}, gh = (e) => {
  if (Gd(e)) {
    I0(e.length === 4);
    const [t, n, r, o] = e;
    return Ns(t, n, r, o);
  } else if (typeof e == "string")
    return QD[e];
  return e;
};
function ZD(e, t, n) {
  const r = [], o = n || Ix, s = e.length - 1;
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
function qD(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const s = e.length;
  if (I0(s === t.length), s === 1)
    return () => t[0];
  if (s === 2 && t[0] === t[1])
    return () => t[1];
  const i = e[0] === e[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = ZD(t, r, o), l = a.length, u = (c) => {
    if (i && c < e[0])
      return t[0];
    let d = 0;
    if (l > 1)
      for (; d < e.length - 2 && !(c < e[d + 1]); d++)
        ;
    const f = /* @__PURE__ */ Zr(e[d], e[d + 1], c);
    return a[d](f);
  };
  return n ? (c) => u(nn(e[0], e[s - 1], c)) : u;
}
function JD(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ Zr(0, t, r);
    e.push(ce(n, 1, o));
  }
}
function eN(e) {
  const t = [0];
  return JD(t, e.length - 1), t;
}
function tN(e, t) {
  return e.map((n) => n * t);
}
function nN(e, t) {
  return e.map(() => t || zx).splice(0, e.length - 1);
}
function ca({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = XD(r) ? r.map(gh) : gh(r), s = {
    done: !1,
    value: t[0]
  }, i = tN(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : eN(t),
    e
  ), a = qD(i, t, {
    ease: Array.isArray(o) ? o : nN(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (s.value = a(l), s.done = l >= e, s)
  };
}
const rN = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => ie.update(t, !0),
    stop: () => jn(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Te.isProcessing ? Te.timestamp : Vt.now()
  };
}, oN = {
  decay: mh,
  inertia: mh,
  tween: ca,
  keyframes: ca,
  spring: Vx
}, sN = (e) => e / 100;
class sf extends _x {
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
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: s, velocity: i = 0 } = this.options, a = Kd(n) ? n : oN[n] || ca;
    let l, u;
    a !== ca && typeof t[0] != "number" && (l = As(sN, Ix(t[0], t[1])), t = [0, 100]);
    const c = a({ ...this.options, keyframes: t });
    s === "mirror" && (u = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -i
    })), c.calculatedDuration === null && (c.calculatedDuration = rx(c));
    const { calculatedDuration: d } = c, f = d + o, g = f * (r + 1) - o;
    return {
      generator: c,
      mirroredGenerator: u,
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
      const { keyframes: E } = this.options;
      return { done: !0, value: E[E.length - 1] };
    }
    const { finalKeyframe: o, generator: s, mirroredGenerator: i, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: u, totalDuration: c, resolvedDuration: d } = r;
    if (this.startTime === null)
      return s.next(0);
    const { delay: f, repeat: g, repeatType: w, repeatDelay: y, onUpdate: S } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const m = this.currentTime - f * (this.speed >= 0 ? 1 : -1), h = this.speed >= 0 ? m < 0 : m > c;
    this.currentTime = Math.max(m, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let v = this.currentTime, k = s;
    if (g) {
      const E = Math.min(this.currentTime, c) / d;
      let N = Math.floor(E), D = E % 1;
      !D && E >= 1 && (D = 1), D === 1 && N--, N = Math.min(N, g + 1), !!(N % 2) && (w === "reverse" ? (D = 1 - D, y && (D -= y / d)) : w === "mirror" && (k = i)), v = nn(0, 1, D) * d;
    }
    const b = h ? { done: !1, value: l[0] } : k.next(v);
    a && (b.value = a(b.value));
    let { done: C } = b;
    !h && u !== null && (C = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const P = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
    return P && o !== void 0 && (b.value = Ka(l, this.options, o)), S && S(b.value), P && this.finish(), b;
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
    const { driver: t = rN, onPlay: n, startTime: r } = this.options;
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
const iN = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function aN(e, t, n, { delay: r = 0, duration: o = 300, repeat: s = 0, repeatType: i = "loop", ease: a = "easeInOut", times: l } = {}) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = ix(a, o);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: r,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const lN = /* @__PURE__ */ Rd(() => Object.hasOwnProperty.call(Element.prototype, "animate")), da = 10, uN = 2e4;
function cN(e) {
  return Kd(e.type) || e.type === "spring" || !sx(e.ease);
}
function dN(e, t) {
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
  for (; !r.done && s < uN; )
    r = n.sample(s), o.push(r.value), s += da;
  return {
    times: void 0,
    keyframes: o,
    duration: s - da,
    ease: "linear"
  };
}
const Bx = {
  anticipate: vx,
  backInOut: yx,
  circInOut: wx
};
function fN(e) {
  return e in Bx;
}
class yh extends _x {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options;
    this.resolver = new Lx(s, (i, a) => this.onKeyframesResolved(i, a), n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: r = 300, times: o, ease: s, type: i, motionValue: a, name: l, startTime: u } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof s == "string" && la() && fN(s) && (s = Bx[s]), cN(this.options)) {
      const { onComplete: d, onUpdate: f, motionValue: g, element: w, ...y } = this.options, S = dN(t, y);
      t = S.keyframes, t.length === 1 && (t[1] = t[0]), r = S.duration, o = S.times, s = S.ease, i = "keyframes";
    }
    const c = aN(a.owner.current, l, t, { ...this.options, duration: r, times: o, ease: s });
    return c.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (th(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
      const { onComplete: d } = this.options;
      a.set(Ka(t, this.options, n)), d && d(), this.cancel(), this.resolveFinishedPromise();
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
      th(r, t);
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
      const { motionValue: u, onUpdate: c, onComplete: d, element: f, ...g } = this.options, w = new sf({
        ...g,
        keyframes: r,
        duration: o,
        type: s,
        ease: i,
        times: a,
        isGenerator: !0
      }), y = /* @__PURE__ */ Yt(this.time);
      u.setWithVelocity(w.sample(y - da).value, w.sample(y).value, da);
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
    return lN() && r && iN.has(r) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !u && !o && s !== "mirror" && i !== 0 && a !== "inertia";
  }
}
const pN = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, hN = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), mN = {
  type: "keyframes",
  duration: 0.8
}, gN = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, yN = (e, { keyframes: t }) => t.length > 2 ? mN : dr.has(e) ? e.startsWith("scale") ? hN(t[1]) : pN : gN;
function vN({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: a, from: l, elapsed: u, ...c }) {
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
  vN(a) || (c = {
    ...c,
    ...yN(e, c)
  }), c.duration && (c.duration = /* @__PURE__ */ Yt(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ Yt(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let d = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (d = !0)), d && !s && t.get() !== void 0) {
    const f = Ka(c.keyframes, a);
    if (f !== void 0)
      return ie.update(() => {
        c.onUpdate(f), c.onComplete();
      }), new IT([]);
  }
  return !s && yh.supports(c) ? new yh(c) : new sf(c);
};
function xN({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function $x(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var s;
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (i = r);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in l) {
    const f = e.getValue(d, (s = e.latestValues[d]) !== null && s !== void 0 ? s : null), g = l[d];
    if (g === void 0 || c && xN(c, d))
      continue;
    const w = {
      delay: n,
      ...Hd(i || {}, d)
    };
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const m = fx(e);
      if (m) {
        const h = window.MotionHandoffAnimation(m, d, ie);
        h !== null && (w.startTime = h, y = !0);
      }
    }
    Ju(e, d), f.start(af(d, f, g, e.shouldReduceMotion && cx.has(d) ? { type: !1 } : w, e, y));
    const S = f.animation;
    S && u.push(S);
  }
  return a && Promise.all(u).then(() => {
    ie.update(() => {
      a && ZT(e, a);
    });
  }), u;
}
function ic(e, t, n = {}) {
  var r;
  const o = Ha(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = o ? () => Promise.all($x(e, o, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: d, staggerDirection: f } = s;
    return wN(e, t, c + u, d, f, n);
  } : () => Promise.resolve(), { when: l } = s;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [i, a] : [a, i];
    return u().then(() => c());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function wN(e, t, n = 0, r = 0, o = 1, s) {
  const i = [], a = (e.variantChildren.size - 1) * r, l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return Array.from(e.variantChildren).sort(SN).forEach((u, c) => {
    u.notify("AnimationStart", t), i.push(ic(u, t, {
      ...s,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function SN(e, t) {
  return e.sortNodePosition(t);
}
function kN(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((s) => ic(e, s, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = ic(e, t, n);
  else {
    const o = typeof t == "function" ? Ha(e, t, n.custom) : t;
    r = Promise.all($x(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const bN = jd.length;
function Ux(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Ux(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < bN; n++) {
    const r = jd[n], o = e.props[r];
    (hs(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const CN = [...Md].reverse(), PN = Md.length;
function EN(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => kN(e, n, r)));
}
function TN(e) {
  let t = EN(e), n = vh(), r = !0;
  const o = (l) => (u, c) => {
    var d;
    const f = Ha(e, c, l === "exit" ? (d = e.presenceContext) === null || d === void 0 ? void 0 : d.custom : void 0);
    if (f) {
      const { transition: g, transitionEnd: w, ...y } = f;
      u = { ...u, ...y, ...w };
    }
    return u;
  };
  function s(l) {
    t = l(e);
  }
  function i(l) {
    const { props: u } = e, c = Ux(e.parent) || {}, d = [], f = /* @__PURE__ */ new Set();
    let g = {}, w = 1 / 0;
    for (let S = 0; S < PN; S++) {
      const m = CN[S], h = n[m], v = u[m] !== void 0 ? u[m] : c[m], k = hs(v), b = m === l ? h.isActive : null;
      b === !1 && (w = S);
      let C = v === c[m] && v !== u[m] && k;
      if (C && r && e.manuallyAnimateOnMount && (C = !1), h.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !h.isActive && b === null || // If we didn't and don't have any defined prop for this animation type
      !v && !h.prevProp || // Or if the prop doesn't define an animation
      Ua(v) || typeof v == "boolean")
        continue;
      const P = DN(h.prevProp, v);
      let E = P || // If we're making this variant active, we want to always make it active
      m === l && h.isActive && !C && k || // If we removed a higher-priority variant (i is in reverse order)
      S > w && k, N = !1;
      const D = Array.isArray(v) ? v : [v];
      let j = D.reduce(o(m), {});
      b === !1 && (j = {});
      const { prevResolvedValues: R = {} } = h, z = {
        ...R,
        ...j
      }, B = (I) => {
        E = !0, f.has(I) && (N = !0, f.delete(I)), h.needsAnimating[I] = !0;
        const T = e.getValue(I);
        T && (T.liveStyle = !1);
      };
      for (const I in z) {
        const T = j[I], M = R[I];
        if (g.hasOwnProperty(I))
          continue;
        let _ = !1;
        Qu(T) && Qu(M) ? _ = !nx(T, M) : _ = T !== M, _ ? T != null ? B(I) : f.add(I) : T !== void 0 && f.has(I) ? B(I) : h.protectedKeys[I] = !0;
      }
      h.prevProp = v, h.prevResolvedValues = j, h.isActive && (g = { ...g, ...j }), r && e.blockInitialAnimation && (E = !1), E && (!(C && P) || N) && d.push(...D.map((I) => ({
        animation: I,
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
    return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (y = !1), r = !1, y ? t(d) : Promise.resolve();
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u)
      return Promise.resolve();
    (c = e.variantChildren) === null || c === void 0 || c.forEach((f) => {
      var g;
      return (g = f.animationState) === null || g === void 0 ? void 0 : g.setActive(l, u);
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
      n = vh(), r = !0;
    }
  };
}
function DN(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !nx(t, e) : !1;
}
function $n(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function vh() {
  return {
    animate: $n(!0),
    whileInView: $n(),
    whileHover: $n(),
    whileTap: $n(),
    whileDrag: $n(),
    whileFocus: $n(),
    exit: $n()
  };
}
class zn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class NN extends zn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = TN(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ua(t) && (this.unmountControls = t.subscribe(this.node));
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
let AN = 0;
class RN extends zn {
  constructor() {
    super(...arguments), this.id = AN++;
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
const MN = {
  animation: {
    Feature: NN
  },
  exit: {
    Feature: RN
  }
};
function vs(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Rs(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const jN = (e) => (t) => Yd(t) && e(t, Rs(t));
function Wo(e, t, n, r) {
  return vs(e, t, jN(n), r);
}
const xh = (e, t) => Math.abs(e - t);
function LN(e, t) {
  const n = xh(e.x, t.x), r = xh(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Wx {
  constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: s = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const d = Vl(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, g = LN(d.offset, { x: 0, y: 0 }) >= 3;
      if (!f && !g)
        return;
      const { point: w } = d, { timestamp: y } = Te;
      this.history.push({ ...w, timestamp: y });
      const { onStart: S, onMove: m } = this.handlers;
      f || (S && S(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), m && m(this.lastMoveEvent, d);
    }, this.handlePointerMove = (d, f) => {
      this.lastMoveEvent = d, this.lastMoveEventInfo = Fl(f, this.transformPagePoint), ie.update(this.updatePoint, !0);
    }, this.handlePointerUp = (d, f) => {
      this.end();
      const { onEnd: g, onSessionEnd: w, resumeAnimation: y } = this.handlers;
      if (this.dragSnapToOrigin && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const S = Vl(d.type === "pointercancel" ? this.lastMoveEventInfo : Fl(f, this.transformPagePoint), this.history);
      this.startEvent && g && g(d, S), w && w(d, S);
    }, !Yd(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = Rs(t), a = Fl(i, this.transformPagePoint), { point: l } = a, { timestamp: u } = Te;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Vl(a, this.history)), this.removeListeners = As(Wo(this.contextWindow, "pointermove", this.handlePointerMove), Wo(this.contextWindow, "pointerup", this.handlePointerUp), Wo(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), jn(this.updatePoint);
  }
}
function Fl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function wh(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Vl({ point: e }, t) {
  return {
    point: e,
    delta: wh(e, Hx(t)),
    offset: wh(e, _N(t)),
    velocity: ON(t, 0.1)
  };
}
function _N(e) {
  return e[0];
}
function Hx(e) {
  return e[e.length - 1];
}
function ON(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = Hx(e);
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
const Kx = 1e-4, IN = 1 - Kx, FN = 1 + Kx, Gx = 0.01, VN = 0 - Gx, zN = 0 + Gx;
function ot(e) {
  return e.max - e.min;
}
function BN(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Sh(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = ce(t.min, t.max, e.origin), e.scale = ot(n) / ot(t), e.translate = ce(n.min, n.max, e.origin) - e.originPoint, (e.scale >= IN && e.scale <= FN || isNaN(e.scale)) && (e.scale = 1), (e.translate >= VN && e.translate <= zN || isNaN(e.translate)) && (e.translate = 0);
}
function Ho(e, t, n, r) {
  Sh(e.x, t.x, n.x, r ? r.originX : void 0), Sh(e.y, t.y, n.y, r ? r.originY : void 0);
}
function kh(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + ot(t);
}
function $N(e, t, n) {
  kh(e.x, t.x, n.x), kh(e.y, t.y, n.y);
}
function bh(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + ot(t);
}
function Ko(e, t, n) {
  bh(e.x, t.x, n.x), bh(e.y, t.y, n.y);
}
function UN(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? ce(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ce(n, e, r.max) : Math.min(e, n)), e;
}
function Ch(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function WN(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Ch(e.x, n, o),
    y: Ch(e.y, t, r)
  };
}
function Ph(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function HN(e, t) {
  return {
    x: Ph(e.x, t.x),
    y: Ph(e.y, t.y)
  };
}
function KN(e, t) {
  let n = 0.5;
  const r = ot(e), o = ot(t);
  return o > r ? n = /* @__PURE__ */ Zr(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ Zr(e.min, e.max - o, t.min)), nn(0, 1, n);
}
function GN(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const ac = 0.35;
function YN(e = ac) {
  return e === !1 ? e = 0 : e === !0 && (e = ac), {
    x: Eh(e, "left", "right"),
    y: Eh(e, "top", "bottom")
  };
}
function Eh(e, t, n) {
  return {
    min: Th(e, t),
    max: Th(e, n)
  };
}
function Th(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Dh = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Ar = () => ({
  x: Dh(),
  y: Dh()
}), Nh = () => ({ min: 0, max: 0 }), ve = () => ({
  x: Nh(),
  y: Nh()
});
function lt(e) {
  return [e("x"), e("y")];
}
function Yx({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function XN({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function QN(e, t) {
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
function Hn(e) {
  return lc(e) || Xx(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Xx(e) {
  return Ah(e.x) || Ah(e.y);
}
function Ah(e) {
  return e && e !== "0%";
}
function fa(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Rh(e, t, n, r, o) {
  return o !== void 0 && (e = fa(e, o, r)), fa(e, n, r) + t;
}
function uc(e, t = 0, n = 1, r, o) {
  e.min = Rh(e.min, t, n, r, o), e.max = Rh(e.max, t, n, r, o);
}
function Qx(e, { x: t, y: n }) {
  uc(e.x, t.translate, t.scale, t.originPoint), uc(e.y, n.translate, n.scale, n.originPoint);
}
const Mh = 0.999999999999, jh = 1.0000000000001;
function ZN(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let s, i;
  for (let a = 0; a < o; a++) {
    s = n[a], i = s.projectionDelta;
    const { visualElement: l } = s.options;
    l && l.props.style && l.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Mr(e, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, Qx(e, i)), r && Hn(s.latestValues) && Mr(e, s.latestValues));
  }
  t.x < jh && t.x > Mh && (t.x = 1), t.y < jh && t.y > Mh && (t.y = 1);
}
function Rr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Lh(e, t, n, r, o = 0.5) {
  const s = ce(e.min, e.max, o);
  uc(e, t, n, s, r);
}
function Mr(e, t) {
  Lh(e.x, t.x, t.scaleX, t.scale, t.originX), Lh(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Zx(e, t) {
  return Yx(QN(e.getBoundingClientRect(), t));
}
function qN(e, t, n) {
  const r = Zx(e, n), { scroll: o } = t;
  return o && (Rr(r.x, o.offset.x), Rr(r.y, o.offset.y)), r;
}
const qx = ({ current: e }) => e ? e.ownerDocument.defaultView : null, JN = /* @__PURE__ */ new WeakMap();
class eA {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ve(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (c) => {
      const { dragSnapToOrigin: d } = this.getProps();
      d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Rs(c).point);
    }, s = (c, d) => {
      const { drag: f, dragPropagation: g, onDragStart: w } = this.getProps();
      if (f && !g && (this.openDragLock && this.openDragLock(), this.openDragLock = KT(f), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), lt((S) => {
        let m = this.getAxisMotionValue(S).get() || 0;
        if (Ft.test(m)) {
          const { projection: h } = this.visualElement;
          if (h && h.layout) {
            const v = h.layout.layoutBox[S];
            v && (m = ot(v) * (parseFloat(m) / 100));
          }
        }
        this.originPoint[S] = m;
      }), w && ie.postRender(() => w(c, d)), Ju(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, i = (c, d) => {
      const { dragPropagation: f, dragDirectionLock: g, onDirectionLock: w, onDrag: y } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: S } = d;
      if (g && this.currentDirection === null) {
        this.currentDirection = tA(S), this.currentDirection !== null && w && w(this.currentDirection);
        return;
      }
      this.updateAxis("x", d.point, S), this.updateAxis("y", d.point, S), this.visualElement.render(), y && y(c, d);
    }, a = (c, d) => this.stop(c, d), l = () => lt((c) => {
      var d;
      return this.getAnimationState(c) === "paused" && ((d = this.getAxisMotionValue(c).animation) === null || d === void 0 ? void 0 : d.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Wx(t, {
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
    if (!r || !ci(t, o, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (i = UN(i, this.constraints[t], this.elastic[t])), s.set(i);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, s = this.constraints;
    n && Dr(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = WN(o.layoutBox, n) : this.constraints = !1, this.elastic = YN(r), s !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && lt((i) => {
      this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = GN(o.layoutBox[i], this.constraints[i]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Dr(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const s = qN(r, o.root, this.visualElement.getTransformPagePoint());
    let i = HN(o.layout.layoutBox, s);
    if (n) {
      const a = n(XN(i));
      this.hasMutatedConstraints = !!a, a && (i = Yx(a));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = lt((c) => {
      if (!ci(c, n, this.currentDirection))
        return;
      let d = l && l[c] || {};
      i && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, g = o ? 40 : 1e7, w = {
        type: "inertia",
        velocity: r ? t[c] : 0,
        bounceStiffness: f,
        bounceDamping: g,
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
      if (!ci(n, r, this.currentDirection))
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
    if (!Dr(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    lt((i) => {
      const a = this.getAxisMotionValue(i);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[i] = KN({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), lt((i) => {
      if (!ci(i, t, null))
        return;
      const a = this.getAxisMotionValue(i), { min: l, max: u } = this.constraints[i];
      a.set(ce(l, u, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    JN.set(this.visualElement, this);
    const t = this.visualElement.current, n = Wo(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Dr(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, s = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), ie.read(r);
    const i = vs(window, "resize", () => this.scalePositionWithinConstraints()), a = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
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
function ci(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function tA(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class nA extends zn {
  constructor(t) {
    super(t), this.removeGroupControls = nt, this.removeListeners = nt, this.controls = new eA(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || nt;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const _h = (e) => (t, n) => {
  e && ie.postRender(() => e(t, n));
};
class rA extends zn {
  constructor() {
    super(...arguments), this.removePointerDownListener = nt;
  }
  onPointerDown(t) {
    this.session = new Wx(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: qx(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: _h(t),
      onStart: _h(n),
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
const Ni = {
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
function Oh(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Po = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (F.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Oh(e, t.target.x), r = Oh(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, oA = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = Ln.parse(e);
    if (o.length > 5)
      return r;
    const s = Ln.createTransformer(e), i = typeof o[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + i] /= a, o[1 + i] /= l;
    const u = ce(a, l, 0.5);
    return typeof o[2 + i] == "number" && (o[2 + i] /= u), typeof o[3 + i] == "number" && (o[3 + i] /= u), s(o);
  }
};
class sA extends x.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: s } = t;
    PT(iA), s && (n.group && n.group.add(s), r && r.register && o && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), Ni.hasEverUpdated = !0;
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
function Jx(e) {
  const [t, n] = _0(), r = x.useContext(Td);
  return p.jsx(sA, { ...e, layoutGroup: r, switchLayoutGroup: x.useContext(U0), isPresent: t, safeToRemove: n });
}
const iA = {
  borderRadius: {
    ...Po,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Po,
  borderTopRightRadius: Po,
  borderBottomLeftRadius: Po,
  borderBottomRightRadius: Po,
  boxShadow: oA
};
function aA(e, t, n) {
  const r = Ie(e) ? e : gs(e);
  return r.start(af("", r, t, n)), r.animation;
}
function lA(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const uA = (e, t) => e.depth - t.depth;
class cA {
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
    this.isDirty && this.children.sort(uA), this.isDirty = !1, this.children.forEach(t);
  }
}
function dA(e, t) {
  const n = Vt.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= t && (jn(r), e(s - t));
  };
  return ie.read(r, !0), () => jn(r);
}
const ew = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], fA = ew.length, Ih = (e) => typeof e == "string" ? parseFloat(e) : e, Fh = (e) => typeof e == "number" || F.test(e);
function pA(e, t, n, r, o, s) {
  o ? (e.opacity = ce(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    hA(r)
  ), e.opacityExit = ce(t.opacity !== void 0 ? t.opacity : 1, 0, mA(r))) : s && (e.opacity = ce(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < fA; i++) {
    const a = `border${ew[i]}Radius`;
    let l = Vh(t, a), u = Vh(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || Fh(l) === Fh(u) ? (e[a] = Math.max(ce(Ih(l), Ih(u), r), 0), (Ft.test(u) || Ft.test(l)) && (e[a] += "%")) : e[a] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = ce(t.rotate || 0, n.rotate || 0, r));
}
function Vh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const hA = /* @__PURE__ */ tw(0, 0.5, xx), mA = /* @__PURE__ */ tw(0.5, 0.95, nt);
function tw(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Zr(e, t, r));
}
function zh(e, t) {
  e.min = t.min, e.max = t.max;
}
function at(e, t) {
  zh(e.x, t.x), zh(e.y, t.y);
}
function Bh(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function $h(e, t, n, r, o) {
  return e -= t, e = fa(e, 1 / n, r), o !== void 0 && (e = fa(e, 1 / o, r)), e;
}
function gA(e, t = 0, n = 1, r = 0.5, o, s = e, i = e) {
  if (Ft.test(t) && (t = parseFloat(t), t = ce(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let a = ce(s.min, s.max, r);
  e === s && (a -= t), e.min = $h(e.min, t, n, a, o), e.max = $h(e.max, t, n, a, o);
}
function Uh(e, t, [n, r, o], s, i) {
  gA(e, t[n], t[r], t[o], t.scale, s, i);
}
const yA = ["x", "scaleX", "originX"], vA = ["y", "scaleY", "originY"];
function Wh(e, t, n, r) {
  Uh(e.x, t, yA, n ? n.x : void 0, r ? r.x : void 0), Uh(e.y, t, vA, n ? n.y : void 0, r ? r.y : void 0);
}
function Hh(e) {
  return e.translate === 0 && e.scale === 1;
}
function nw(e) {
  return Hh(e.x) && Hh(e.y);
}
function Kh(e, t) {
  return e.min === t.min && e.max === t.max;
}
function xA(e, t) {
  return Kh(e.x, t.x) && Kh(e.y, t.y);
}
function Gh(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function rw(e, t) {
  return Gh(e.x, t.x) && Gh(e.y, t.y);
}
function Yh(e) {
  return ot(e.x) / ot(e.y);
}
function Xh(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class wA {
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
function SA(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, s = e.y.translate / t.y, i = (n == null ? void 0 : n.z) || 0;
  if ((o || s || i) && (r = `translate3d(${o}px, ${s}px, ${i}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: d, rotateY: f, skewX: g, skewY: w } = n;
    u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), d && (r += `rotateX(${d}deg) `), f && (r += `rotateY(${f}deg) `), g && (r += `skewX(${g}deg) `), w && (r += `skewY(${w}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Kn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, jo = typeof window < "u" && window.MotionDebug !== void 0, Bl = ["", "X", "Y", "Z"], kA = { visibility: "hidden" }, Qh = 1e3;
let bA = 0;
function $l(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function ow(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = fx(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ie, !(o || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && ow(r);
}
function sw({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(i = {}, a = t == null ? void 0 : t()) {
      this.id = bA++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, jo && (Kn.totalNodes = Kn.resolvedTargetDeltas = Kn.recalculatedProjection = 0), this.nodes.forEach(EA), this.nodes.forEach(RA), this.nodes.forEach(MA), this.nodes.forEach(TA), jo && window.MotionDebug.record(Kn);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new cA());
    }
    addEventListener(i, a) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new Zd()), this.eventHandlers.get(i).add(a);
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
      this.isSVG = lA(i), this.instance = i;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = dA(f, 250), Ni.hasAnimatedSinceResize && (Ni.hasAnimatedSinceResize = !1, this.nodes.forEach(qh));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: g, layout: w }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || c.getDefaultTransition() || IA, { onLayoutAnimationStart: S, onLayoutAnimationComplete: m } = c.getProps(), h = !this.targetLayout || !rw(this.targetLayout, w) || g, v = !f && g;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || v || f && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, v);
          const k = {
            ...Hd(y, "layout"),
            onPlay: S,
            onComplete: m
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (k.delay = 0, k.type = !1), this.startAnimation(k);
        } else
          f || qh(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = w;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, jn(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(jA), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && ow(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Zh);
        return;
      }
      this.isUpdating || this.nodes.forEach(NA), this.isUpdating = !1, this.nodes.forEach(AA), this.nodes.forEach(CA), this.nodes.forEach(PA), this.clearAllSnapshots();
      const a = Vt.now();
      Te.delta = nn(0, 1e3 / 60, a - Te.timestamp), Te.timestamp = a, Te.isProcessing = !0, Ml.update.process(Te), Ml.preRender.process(Te), Ml.render.process(Te), Te.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, _d.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(DA), this.sharedNodes.forEach(LA);
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
      this.layout = this.measure(!1), this.layoutCorrected = ve(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !nw(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      i && (a || Hn(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return i && (l = this.removeTransform(l)), FA(l), {
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
        return ve();
      const l = a.measureViewportBox();
      if (!(((i = this.scroll) === null || i === void 0 ? void 0 : i.wasRoot) || this.path.some(VA))) {
        const { scroll: c } = this.root;
        c && (Rr(l.x, c.offset.x), Rr(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(i) {
      var a;
      const l = ve();
      if (at(l, i), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: d, options: f } = c;
        c !== this.root && d && f.layoutScroll && (d.wasRoot && at(l, i), Rr(l.x, d.offset.x), Rr(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(i, a = !1) {
      const l = ve();
      at(l, i);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && Mr(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), Hn(c.latestValues) && Mr(l, c.latestValues);
      }
      return Hn(this.latestValues) && Mr(l, this.latestValues), l;
    }
    removeTransform(i) {
      const a = ve();
      at(a, i);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Hn(u.latestValues))
          continue;
        lc(u.latestValues) && u.updateSnapshot();
        const c = ve(), d = u.measurePageBox();
        at(c, d), Wh(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Hn(this.latestValues) && Wh(a, this.latestValues), a;
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
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ve(), this.relativeTargetOrigin = ve(), Ko(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox), at(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = ve(), this.targetWithTransforms = ve()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), $N(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : at(this.target, this.layout.layoutBox), Qx(this.target, this.targetDelta)) : at(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ve(), this.relativeTargetOrigin = ve(), Ko(this.relativeTargetOrigin, this.target, g.target), at(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          jo && Kn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || lc(this.parent.latestValues) || Xx(this.parent.latestValues)))
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
      const f = this.treeScale.x, g = this.treeScale.y;
      ZN(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = ve());
      const { target: w } = a;
      if (!w) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Bh(this.prevProjectionDelta.x, this.projectionDelta.x), Bh(this.prevProjectionDelta.y, this.projectionDelta.y)), Ho(this.projectionDelta, this.layoutCorrected, w, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== g || !Xh(this.projectionDelta.x, this.prevProjectionDelta.x) || !Xh(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", w)), jo && Kn.recalculatedProjection++;
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
      this.prevProjectionDelta = Ar(), this.projectionDelta = Ar(), this.projectionDeltaWithTransform = Ar();
    }
    setAnimationOrigin(i, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = Ar();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = ve(), g = l ? l.source : void 0, w = this.layout ? this.layout.source : void 0, y = g !== w, S = this.getStack(), m = !S || S.members.length <= 1, h = !!(y && !m && this.options.crossfade === !0 && !this.path.some(OA));
      this.animationProgress = 0;
      let v;
      this.mixTargetDelta = (k) => {
        const b = k / 1e3;
        Jh(d.x, i.x, b), Jh(d.y, i.y, b), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ko(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), _A(this.relativeTarget, this.relativeTargetOrigin, f, b), v && xA(this.relativeTarget, v) && (this.isProjectionDirty = !1), v || (v = ve()), at(v, this.relativeTarget)), y && (this.animationValues = c, pA(c, u, this.latestValues, b, h, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = b;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (jn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ie.update(() => {
        Ni.hasAnimatedSinceResize = !0, this.currentAnimation = aA(0, Qh, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Qh), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = i;
      if (!(!a || !l || !u)) {
        if (this !== i && this.layout && u && iw(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || ve();
          const d = ot(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + d;
          const f = ot(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + f;
        }
        at(a, l), Mr(a, c), Ho(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(i, a) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new wA()), this.sharedNodes.get(i).add(a);
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
        return kA;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Ti(i == null ? void 0 : i.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const y = {};
        return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = Ti(i == null ? void 0 : i.pointerEvents) || ""), this.hasProjected && !Hn(this.latestValues) && (y.transform = c ? c({}, "") : "none", this.hasProjected = !1), y;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = SA(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: g, y: w } = this.projectionDelta;
      u.transformOrigin = `${g.origin * 100}% ${w.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const y in aa) {
        if (f[y] === void 0)
          continue;
        const { correct: S, applyTo: m } = aa[y], h = u.transform === "none" ? f[y] : S(f[y], d);
        if (m) {
          const v = m.length;
          for (let k = 0; k < v; k++)
            u[m[k]] = h;
        } else
          u[y] = h;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? Ti(i == null ? void 0 : i.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var a;
        return (a = i.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(Zh), this.root.sharedNodes.clear();
    }
  };
}
function CA(e) {
  e.updateLayout();
}
function PA(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: s } = e.options, i = n.source !== e.layout.source;
    s === "size" ? lt((d) => {
      const f = i ? n.measuredBox[d] : n.layoutBox[d], g = ot(f);
      f.min = r[d].min, f.max = f.min + g;
    }) : iw(s, n.layoutBox, r) && lt((d) => {
      const f = i ? n.measuredBox[d] : n.layoutBox[d], g = ot(r[d]);
      f.max = f.min + g, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + g);
    });
    const a = Ar();
    Ho(a, r, n.layoutBox);
    const l = Ar();
    i ? Ho(l, e.applyTransform(o, !0), n.measuredBox) : Ho(l, r, n.layoutBox);
    const u = !nw(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: g } = d;
        if (f && g) {
          const w = ve();
          Ko(w, n.layoutBox, f.layoutBox);
          const y = ve();
          Ko(y, r, g.layoutBox), rw(w, y) || (c = !0), d.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = w, e.relativeParent = d);
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
function EA(e) {
  jo && Kn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function TA(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function DA(e) {
  e.clearSnapshot();
}
function Zh(e) {
  e.clearMeasurements();
}
function NA(e) {
  e.isLayoutDirty = !1;
}
function AA(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function qh(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function RA(e) {
  e.resolveTargetDelta();
}
function MA(e) {
  e.calcProjection();
}
function jA(e) {
  e.resetSkewAndRotation();
}
function LA(e) {
  e.removeLeadSnapshot();
}
function Jh(e, t, n) {
  e.translate = ce(t.translate, 0, n), e.scale = ce(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function em(e, t, n, r) {
  e.min = ce(t.min, n.min, r), e.max = ce(t.max, n.max, r);
}
function _A(e, t, n, r) {
  em(e.x, t.x, n.x, r), em(e.y, t.y, n.y, r);
}
function OA(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const IA = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, tm = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), nm = tm("applewebkit/") && !tm("chrome/") ? Math.round : nt;
function rm(e) {
  e.min = nm(e.min), e.max = nm(e.max);
}
function FA(e) {
  rm(e.x), rm(e.y);
}
function iw(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !BN(Yh(t), Yh(n), 0.2);
}
function VA(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const zA = sw({
  attachResizeListener: (e, t) => vs(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Ul = {
  current: void 0
}, aw = sw({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Ul.current) {
      const e = new zA({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Ul.current = e;
    }
    return Ul.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), BA = {
  pan: {
    Feature: rA
  },
  drag: {
    Feature: nA,
    ProjectionNode: aw,
    MeasureLayout: Jx
  }
};
function om(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, s = r[o];
  s && ie.postRender(() => s(t, Rs(t)));
}
class $A extends zn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = BT(t, (n) => (om(this.node, n, "Start"), (r) => om(this.node, r, "End"))));
  }
  unmount() {
  }
}
class UA extends zn {
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
    this.unmount = As(vs(this.node.current, "focus", () => this.onFocus()), vs(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function sm(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n), s = r[o];
  s && ie.postRender(() => s(t, Rs(t)));
}
class WA extends zn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = HT(t, (n) => (sm(this.node, n, "Start"), (r, { success: o }) => sm(this.node, r, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const cc = /* @__PURE__ */ new WeakMap(), Wl = /* @__PURE__ */ new WeakMap(), HA = (e) => {
  const t = cc.get(e.target);
  t && t(e);
}, KA = (e) => {
  e.forEach(HA);
};
function GA({ root: e, ...t }) {
  const n = e || document;
  Wl.has(n) || Wl.set(n, {});
  const r = Wl.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(KA, { root: e, ...t })), r[o];
}
function YA(e, t, n) {
  const r = GA(t);
  return cc.set(e, n), r.observe(e), () => {
    cc.delete(e), r.unobserve(e);
  };
}
const XA = {
  some: 0,
  all: 1
};
class QA extends zn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: s } = t, i = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : XA[o]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return YA(this.node.current, i, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(ZA(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function ZA({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const qA = {
  inView: {
    Feature: QA
  },
  tap: {
    Feature: WA
  },
  focus: {
    Feature: UA
  },
  hover: {
    Feature: $A
  }
}, JA = {
  layout: {
    ProjectionNode: aw,
    MeasureLayout: Jx
  }
}, dc = { current: null }, lw = { current: !1 };
function e2() {
  if (lw.current = !0, !!Ad)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => dc.current = e.matches;
      e.addListener(t), t();
    } else
      dc.current = !1;
}
const t2 = [...jx, _e, Ln], n2 = (e) => t2.find(Mx(e)), im = /* @__PURE__ */ new WeakMap();
function r2(e, t, n) {
  for (const r in t) {
    const o = t[r], s = n[r];
    if (Ie(o))
      e.addValue(r, o);
    else if (Ie(s))
      e.addValue(r, gs(o, { owner: e }));
    else if (s !== o)
      if (e.hasValue(r)) {
        const i = e.getValue(r);
        i.liveStyle === !0 ? i.jump(o) : i.hasAnimated || i.set(o);
      } else {
        const i = e.getStaticValue(r);
        e.addValue(r, gs(i !== void 0 ? i : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const am = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class o2 {
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
      const g = Vt.now();
      this.renderScheduledAt < g && (this.renderScheduledAt = g, ie.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u, onUpdate: c } = i;
    this.onUpdate = c, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.blockInitialAnimation = !!s, this.isControllingVariants = Wa(n), this.isVariantNode = B0(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const g in f) {
      const w = f[g];
      l[g] !== void 0 && Ie(w) && w.set(l[g], !1);
    }
  }
  mount(t) {
    this.current = t, im.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), lw.current || e2(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : dc.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    im.delete(this.current), this.projection && this.projection.unmount(), jn(this.notifyUpdate), jn(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const r = dr.has(t), o = n.on("change", (a) => {
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
    for (t in qr) {
      const n = qr[t];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ve();
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
    for (let r = 0; r < am.length; r++) {
      const o = am[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const s = "on" + o, i = t[s];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = r2(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return r === void 0 && n !== void 0 && (r = gs(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return o != null && (typeof o == "string" && (Ax(o) || Sx(o)) ? o = parseFloat(o) : !n2(o) && Ln.test(n) && (o = Tx(t, n)), this.setBaseTarget(t, Ie(o) ? o.get() : o)), Ie(o) ? o.get() : o;
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
    return s !== void 0 && !Ie(s) ? s : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Zd()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class uw extends o2 {
  constructor() {
    super(...arguments), this.KeyframeResolver = Lx;
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
    Ie(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function s2(e) {
  return window.getComputedStyle(e);
}
class i2 extends uw {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Q0;
  }
  readValueFromInstance(t, n) {
    if (dr.has(n)) {
      const r = nf(n);
      return r && r.default || 0;
    } else {
      const r = s2(t), o = (G0(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Zx(t, n);
  }
  build(t, n, r) {
    zd(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Wd(t, n, r);
  }
}
class a2 extends uw {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ve;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (dr.has(n)) {
      const r = nf(n);
      return r && r.default || 0;
    }
    return n = Z0.has(n) ? n : Ld(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return ex(t, n, r);
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
const l2 = (e, t) => Od(e) ? new a2(t) : new i2(t, {
  allowProjection: e !== x.Fragment
}), u2 = /* @__PURE__ */ LT({
  ...MN,
  ...qA,
  ...BA,
  ...JA
}, l2), di = /* @__PURE__ */ XE(u2);
function c2({ events: e, eventMetadata: t, onDateClick: n, onEventClick: r }) {
  const [o, s] = x.useState(/* @__PURE__ */ new Date()), [i, a] = x.useState(0), [l, u] = x.useState(null), c = (C, P) => {
    const E = new Date(P, C + 1, 0).getDate();
    return Array.from({ length: E }, (N, D) => ({ day: D + 1 }));
  }, d = (C, P) => e.filter((E) => {
    const N = new Date(E.startDate);
    return N.getDate() === C && N.getMonth() === P.getMonth() && N.getFullYear() === P.getFullYear();
  }), f = (C) => C.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), g = () => {
    a(-1);
    const C = new Date(o.getFullYear(), o.getMonth() - 1, 1);
    s(C);
  }, w = () => {
    a(1);
    const C = new Date(o.getFullYear(), o.getMonth() + 1, 1);
    s(C);
  }, y = c(o.getMonth(), o.getFullYear()), S = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], h = new Date(o.getFullYear(), o.getMonth(), 1).getDay(), v = new Date(o.getFullYear(), o.getMonth() - 1, 1), k = new Date(v.getFullYear(), v.getMonth() + 1, 0).getDate(), b = ({ events: C }) => {
    const P = {
      academic: "bg-green-500",
      social: "bg-orange-500",
      cultural: "bg-purple-500",
      sports: "bg-red-500",
      professional: "bg-teal-500",
      wellness: "bg-blue-500",
      volunteer: "bg-yellow-500",
      arts: "bg-pink-500"
    }, E = C.reduce((N, D) => {
      const j = t[D.id], R = (j == null ? void 0 : j.category) || "other";
      return N[R] || (N[R] = []), N[R].push(D), N;
    }, {});
    return /* @__PURE__ */ p.jsx("div", { className: "flex flex-wrap gap-1", children: Object.entries(E).map(([N, D]) => {
      const j = P[N] || "bg-gray-500";
      return /* @__PURE__ */ p.jsx(
        "div",
        {
          className: `${j} text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium shadow-sm`,
          title: `${D.length} ${N} event${D.length > 1 ? "s" : ""}: ${D.map((R) => R.title).join(", ")}`,
          children: D.length
        },
        N
      );
    }) });
  };
  return /* @__PURE__ */ p.jsxs("div", { children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4", children: [
      /* @__PURE__ */ p.jsxs(
        di.h2,
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
        /* @__PURE__ */ p.jsxs(Tn, { variant: "outline", onClick: g, className: "gap-2", children: [
          /* @__PURE__ */ p.jsx(zv, { className: "h-4 w-4" }),
          "Prev"
        ] }),
        /* @__PURE__ */ p.jsxs(Tn, { variant: "outline", onClick: w, className: "gap-2", children: [
          "Next",
          /* @__PURE__ */ p.jsx(Bv, { className: "h-4 w-4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ p.jsx(Gp, { initial: !1, custom: i, mode: "wait", children: /* @__PURE__ */ p.jsxs(
      di.div,
      {
        custom: i,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        className: "grid grid-cols-7 gap-1 sm:gap-2",
        children: [
          S.map((C, P) => /* @__PURE__ */ p.jsx(
            "div",
            {
              className: "text-left my-8 text-4xl tracking-tighter font-medium text-gray-900 dark:text-gray-100",
              children: C
            },
            P
          )),
          Array.from({ length: h }).map((C, P) => /* @__PURE__ */ p.jsx("div", { className: "h-[150px] opacity-50", children: /* @__PURE__ */ p.jsx("div", { className: "font-semibold relative text-3xl mb-1 text-gray-400 dark:text-gray-500", children: k - h + P + 1 }) }, `offset-${P}`)),
          y.map((C, P) => {
            const E = d(C.day, o), N = (/* @__PURE__ */ new Date()).getDate() === C.day && (/* @__PURE__ */ new Date()).getMonth() === o.getMonth() && (/* @__PURE__ */ new Date()).getFullYear() === o.getFullYear(), j = (h + C.day - 1) % 7 >= 5;
            return /* @__PURE__ */ p.jsxs(
              di.div,
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
                      className: `shadow-md overflow-hidden relative flex p-4 border h-full transition-shadow day-card ${E.length > 0 ? "cursor-pointer hover:shadow-lg" : "cursor-default"}`,
                      onClick: E.length > 0 ? () => n == null ? void 0 : n(new Date(o.getFullYear(), o.getMonth(), C.day)) : void 0,
                      children: [
                        /* @__PURE__ */ p.jsx("div", { className: `font-semibold relative text-3xl mb-1 ${E.length > 0 ? "text-gray-900 dark:text-gray-100" : "text-gray-500 dark:text-gray-400"} ${N ? "text-secondary-500" : ""}`, children: C.day }),
                        /* @__PURE__ */ p.jsx("div", { className: "flex-grow flex flex-col gap-2 w-full", children: /* @__PURE__ */ p.jsx(Gp, { mode: "wait", children: (E == null ? void 0 : E.length) > 0 && /* @__PURE__ */ p.jsx(
                          di.div,
                          {
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0, y: -20 },
                            transition: { duration: 0.3 },
                            children: /* @__PURE__ */ p.jsx(b, { events: E })
                          },
                          E[0].id
                        ) }) })
                      ]
                    }
                  ),
                  l === C.day && E.length > 0 && /* @__PURE__ */ p.jsxs(
                    "div",
                    {
                      className: `absolute top-full z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3 w-80 ${j ? "right-0" : "left-0"}`,
                      onMouseEnter: () => u(C.day),
                      onMouseLeave: () => u(null),
                      children: [
                        /* @__PURE__ */ p.jsxs("div", { className: "text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2", children: [
                          E.length,
                          " event",
                          E.length > 1 ? "s" : ""
                        ] }),
                        /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: E.map((R) => {
                          const z = t[R.id], Y = z ? {
                            academic: "bg-green-500",
                            social: "bg-orange-500",
                            cultural: "bg-purple-500",
                            sports: "bg-red-500",
                            professional: "bg-teal-500",
                            wellness: "bg-blue-500",
                            volunteer: "bg-yellow-500",
                            arts: "bg-pink-500"
                          }[z.category] : "bg-gray-500";
                          return /* @__PURE__ */ p.jsxs(
                            "div",
                            {
                              className: "flex items-start gap-2 p-1 -m-1 rounded cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
                              onClick: (O) => {
                                O.stopPropagation(), r == null || r(R);
                              },
                              children: [
                                /* @__PURE__ */ p.jsx("div", { className: `w-2 h-2 rounded-full ${Y} flex-shrink-0 mt-1.5` }),
                                /* @__PURE__ */ p.jsxs("div", { className: "flex-1 min-w-0", children: [
                                  /* @__PURE__ */ p.jsx("div", { className: "font-medium text-sm text-gray-800 dark:text-gray-200 leading-tight", children: R.title }),
                                  /* @__PURE__ */ p.jsx("div", { className: "text-xs text-gray-600 dark:text-gray-400 mt-0.5", children: f(R.startDate) })
                                ] })
                              ]
                            },
                            R.id
                          );
                        }) })
                      ]
                    }
                  )
                ]
              },
              C.day
            );
          })
        ]
      },
      `${o.getFullYear()}-${o.getMonth()}`
    ) })
  ] });
}
function d2({ events: e, eventMetadata: t, onEventClick: n }) {
  const [r, o] = ke.useState(/* @__PURE__ */ new Date()), i = ((d) => {
    const f = new Date(d);
    return f.setDate(d.getDate() - d.getDay()), Array.from({ length: 7 }, (g, w) => {
      const y = new Date(f);
      return y.setDate(f.getDate() + w), y;
    });
  })(r), a = Array.from({ length: 24 }, (d, f) => f), l = (d) => e.filter((f) => f.startDate.toDateString() === d.toDateString()), u = (d) => {
    const f = new Date(r);
    f.setDate(r.getDate() + (d === "next" ? 7 : -7)), o(f);
  }, c = (d, f, g) => {
    const w = d.startDate.getHours(), y = d.startDate.getMinutes(), S = d.endDate ? d.endDate.getHours() : w + 1, m = d.endDate ? d.endDate.getMinutes() : 0, h = w + y / 60, v = S + m / 60, k = v - h, b = f.filter((D) => {
      if (D.id === d.id) return !0;
      if (D.startDate.toDateString() !== d.startDate.toDateString())
        return !1;
      const j = D.startDate.getHours() + D.startDate.getMinutes() / 60, R = (D.endDate ? D.endDate.getHours() : D.startDate.getHours() + 1) + (D.endDate ? D.endDate.getMinutes() / 60 : 0);
      return h < R && v > j;
    }), C = b.length, P = b.findIndex((D) => D.id === d.id), E = C > 1 ? 100 / C : 100, N = C > 1 ? P * E : 0;
    return {
      top: `${h * 80}px`,
      // 80px per hour for better readability
      height: `${k * 80}px`,
      // Accurate height based on actual duration
      left: `${N}%`,
      width: `${E}%`
    };
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ p.jsx(
        "button",
        {
          onClick: () => u("prev"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ p.jsx(Uv, { className: "h-5 w-5" })
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
          children: /* @__PURE__ */ p.jsx(Wv, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-8 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700", children: [
        /* @__PURE__ */ p.jsx("div", { className: "p-3 text-xs font-medium text-gray-500 dark:text-gray-400 border-r border-gray-200 dark:border-gray-600", children: "Time" }),
        i.map((d, f) => /* @__PURE__ */ p.jsxs("div", { className: "p-3 text-center border-r border-gray-200 dark:border-gray-600 last:border-r-0", children: [
          /* @__PURE__ */ p.jsx("div", { className: "text-xs font-medium text-gray-500 dark:text-gray-400", children: d.toLocaleDateString("en-US", { weekday: "short" }) }),
          /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-gray-900 dark:text-gray-100", children: d.getDate() })
        ] }, f))
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-8 relative", children: [
        /* @__PURE__ */ p.jsx("div", { className: "border-r border-gray-200 dark:border-gray-600", children: a.map((d) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] p-2 text-xs text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600 flex items-start", children: d === 0 ? "12 AM" : d === 12 ? "12 PM" : d > 12 ? `${d - 12} PM` : `${d} AM` }, d)) }),
        i.map((d, f) => {
          const g = l(d);
          return /* @__PURE__ */ p.jsxs("div", { className: "relative border-r border-gray-200 dark:border-gray-600 last:border-r-0", children: [
            a.map((w) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] border-b border-gray-200 dark:border-gray-600" }, w)),
            g.map((w, y) => {
              const S = t[w.id], h = S ? {
                academic: "bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 border-green-200 dark:border-green-700",
                social: "bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-100 border-orange-200 dark:border-orange-700",
                cultural: "bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100 border-purple-200 dark:border-purple-700",
                sports: "bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100 border-red-200 dark:border-red-700",
                professional: "bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-100 border-teal-200 dark:border-teal-700",
                wellness: "bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 border-blue-200 dark:border-blue-700",
                volunteer: "bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100 border-yellow-200 dark:border-yellow-700",
                arts: "bg-pink-100 dark:bg-pink-800 text-pink-800 dark:text-pink-100 border-pink-200 dark:border-pink-700"
              }[S.category] : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-600", v = c(w, g);
              return /* @__PURE__ */ p.jsxs(
                "div",
                {
                  className: `absolute ${h} border rounded p-2 text-sm z-20 overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow event-card`,
                  style: {
                    ...v,
                    margin: "1px"
                  },
                  onClick: (k) => {
                    k.stopPropagation(), n == null || n(w);
                  },
                  children: [
                    /* @__PURE__ */ p.jsx("div", { className: "font-medium leading-tight truncate text-sm", children: w.title }),
                    /* @__PURE__ */ p.jsx("div", { className: "text-xs opacity-75 leading-tight", children: w.startDate.toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: !0
                    }) }),
                    S && /* @__PURE__ */ p.jsxs("div", { className: "text-xs leading-tight", children: [
                      /* @__PURE__ */ p.jsx("div", { className: "truncate", children: S.location }),
                      S.organization && /* @__PURE__ */ p.jsx("div", { className: "truncate opacity-75", children: S.organization })
                    ] })
                  ]
                },
                w.id
              );
            })
          ] }, f);
        })
      ] })
    ] })
  ] });
}
function f2({ events: e, eventMetadata: t, initialDate: n, onEventClick: r }) {
  const [o, s] = ke.useState(n || /* @__PURE__ */ new Date());
  ke.useEffect(() => {
    n && s(n);
  }, [n]);
  const i = Array.from({ length: 24 }, (f, g) => g), a = () => e.filter((f) => f.startDate.toDateString() === o.toDateString()), l = (f) => {
    const g = new Date(o);
    g.setDate(o.getDate() + (f === "next" ? 1 : -1)), s(g);
  }, u = (f, g, w) => {
    const y = f.startDate.getHours(), S = f.startDate.getMinutes(), m = f.endDate ? f.endDate.getHours() : y + 1, h = f.endDate ? f.endDate.getMinutes() : 0, v = y + S / 60, k = m + h / 60, b = k - v, C = g.filter((j) => {
      if (j.id === f.id) return !0;
      const R = j.startDate.getHours() + j.startDate.getMinutes() / 60, z = (j.endDate ? j.endDate.getHours() : j.startDate.getHours() + 1) + (j.endDate ? j.endDate.getMinutes() / 60 : 0);
      return v < z && k > R;
    }), P = C.length, E = C.findIndex((j) => j.id === f.id), N = P > 1 ? 100 / P : 100, D = P > 1 ? E * N : 0;
    return {
      top: `${v * 80}px`,
      // 80px per hour for day view
      height: `${b * 80}px`,
      // Accurate height based on actual duration
      left: `${D}%`,
      width: `${N}%`
    };
  }, c = a(), d = {
    academic: "bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 border-green-200 dark:border-green-700",
    social: "bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-100 border-orange-200 dark:border-orange-700",
    cultural: "bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100 border-purple-200 dark:border-purple-700",
    sports: "bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100 border-red-200 dark:border-red-700",
    professional: "bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-100 border-teal-200 dark:border-teal-700",
    wellness: "bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 border-blue-200 dark:border-blue-700",
    volunteer: "bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100 border-yellow-200 dark:border-yellow-700",
    arts: "bg-pink-100 dark:bg-pink-800 text-pink-800 dark:text-pink-100 border-pink-200 dark:border-pink-700"
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ p.jsx(
        "button",
        {
          onClick: () => l("prev"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ p.jsx(Uv, { className: "h-5 w-5" })
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
          children: /* @__PURE__ */ p.jsx(Wv, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden", children: /* @__PURE__ */ p.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ p.jsx("div", { className: "w-20 border-r border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700", children: i.map((f) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] p-3 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600 flex items-start", children: f === 0 ? "12 AM" : f === 12 ? "12 PM" : f > 12 ? `${f - 12} PM` : `${f} AM` }, f)) }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex-1 relative", children: [
        i.map((f) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] border-b border-gray-200 dark:border-gray-600" }, f)),
        c.map((f, g) => {
          const w = t[f.id], y = w ? d[w.category] : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-600", S = u(f, c);
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `absolute ${y} border rounded-lg p-2 text-sm z-20 overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow event-card`,
              style: {
                ...S,
                margin: "2px"
              },
              onClick: (m) => {
                m.stopPropagation(), r == null || r(f);
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
                    /* @__PURE__ */ p.jsx(Ps, { className: "h-2.5 w-2.5" }),
                    /* @__PURE__ */ p.jsx("span", { className: "truncate", children: w.location })
                  ] }),
                  w.organization && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ p.jsx(HP, { className: "h-2.5 w-2.5" }),
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
function p2({ events: e, eventMetadata: t, onEventClick: n }) {
  const [r, o] = ke.useState(/* @__PURE__ */ new Date()), [s, i] = ke.useState(/* @__PURE__ */ new Date()), a = () => {
    i((h) => new Date(h.getFullYear(), h.getMonth() - 1, 1));
  }, l = () => {
    i((h) => new Date(h.getFullYear(), h.getMonth() + 1, 1));
  }, u = (h) => h.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), d = r ? e.filter((h) => {
    const v = new Date(h.startDate);
    return v.getDate() === r.getDate() && v.getMonth() === r.getMonth() && v.getFullYear() === r.getFullYear();
  }) : [], f = s.getFullYear(), g = s.getMonth(), w = new Date(f, g, 1), y = new Date(w);
  y.setDate(y.getDate() - w.getDay());
  const S = [], m = new Date(y);
  for (let h = 0; h < 42; h++)
    S.push(new Date(m)), m.setDate(m.getDate() + 1);
  return /* @__PURE__ */ p.jsxs(ad, { className: "w-full py-4 mobile-calendar", children: [
    /* @__PURE__ */ p.jsxs(Dy, { className: "px-4", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ p.jsxs(
          Tn,
          {
            variant: "outline",
            size: "sm",
            onClick: a,
            children: [
              /* @__PURE__ */ p.jsx(zv, { className: "h-4 w-4" }),
              "Prev"
            ]
          }
        ),
        /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: s.toLocaleDateString("en-US", { month: "long", year: "numeric" }) }),
        /* @__PURE__ */ p.jsxs(
          Tn,
          {
            variant: "outline",
            size: "sm",
            onClick: l,
            children: [
              "Next",
              /* @__PURE__ */ p.jsx(Bv, { className: "h-4 w-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-7 gap-1 mb-4", children: [
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((h) => /* @__PURE__ */ p.jsx("div", { className: "text-center text-sm font-medium py-2 text-gray-600 dark:text-gray-400", children: h }, h)),
        S.map((h, v) => {
          const k = h.getMonth() === g, b = r && h.getDate() === r.getDate() && h.getMonth() === r.getMonth() && h.getFullYear() === r.getFullYear(), C = h.toDateString() === (/* @__PURE__ */ new Date()).toDateString();
          return /* @__PURE__ */ p.jsx(
            "button",
            {
              onClick: () => o(h),
              className: `
                  p-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors
                  ${k ? "text-gray-900 dark:text-gray-100" : "text-gray-400 dark:text-gray-500"}
                  ${b ? "bg-blue-500 text-white hover:bg-blue-600" : ""}
                  ${C && !b ? "bg-gray-200 dark:bg-gray-700 font-semibold" : ""}
                `,
              children: h.getDate()
            },
            v
          );
        })
      ] })
    ] }),
    /* @__PURE__ */ p.jsxs(vk, { className: "flex flex-col items-start gap-3 border-t px-4 !pt-4", children: [
      /* @__PURE__ */ p.jsx("div", { className: "flex w-full items-center justify-between px-1", children: /* @__PURE__ */ p.jsx("div", { className: "text-sm font-medium text-gray-900 dark:text-gray-100", children: r == null ? void 0 : r.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }) }) }),
      /* @__PURE__ */ p.jsx("div", { className: "flex w-full flex-col gap-2", children: d.length === 0 ? /* @__PURE__ */ p.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400 text-center py-4", children: "No events on this day" }) : d.map((h) => {
        const v = t[h.id], b = v ? {
          academic: "after:bg-green-500",
          social: "after:bg-orange-500",
          cultural: "after:bg-purple-500",
          sports: "after:bg-red-500",
          professional: "after:bg-teal-500",
          wellness: "after:bg-blue-500",
          volunteer: "after:bg-yellow-500",
          arts: "after:bg-pink-500"
        }[v.category] : "after:bg-gray-500";
        return /* @__PURE__ */ p.jsxs(
          "button",
          {
            className: `bg-muted dark:bg-gray-700 relative rounded-md p-2 pl-6 text-sm text-left w-full after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors ${b}`,
            onClick: () => n == null ? void 0 : n(h),
            children: [
              /* @__PURE__ */ p.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100", children: h.title }),
              /* @__PURE__ */ p.jsxs("div", { className: "text-muted-foreground dark:text-gray-400 text-xs", children: [
                u(h.startDate),
                " - ",
                u(h.endDate),
                v && ` • ${v.location}`
              ] })
            ]
          },
          h.id
        );
      }) })
    ] })
  ] });
}
function h2({ events: e, eventMetadata: t, onEventClick: n }) {
  const r = (i) => i.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), o = [...e].sort((i, a) => i.startDate.getTime() - a.startDate.getTime()), s = o.reduce((i, a) => {
    const l = a.startDate.toDateString();
    return i[l] || (i[l] = []), i[l].push(a), i;
  }, {});
  return /* @__PURE__ */ p.jsx("div", { className: "space-y-6", children: o.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-12 text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ p.jsx(mn, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
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
        const g = t[f.id], y = g ? {
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
            className: `bg-muted dark:bg-gray-700 relative rounded-md p-3 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors ${y}`,
            onClick: () => n == null ? void 0 : n(f),
            children: [
              /* @__PURE__ */ p.jsxs("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ p.jsxs("div", { className: "flex-grow min-w-0", children: [
                  /* @__PURE__ */ p.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 mb-2", children: f.title }),
                  /* @__PURE__ */ p.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                      /* @__PURE__ */ p.jsx(Fa, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsxs("span", { children: [
                        r(f.startDate),
                        " - ",
                        r(f.endDate)
                      ] })
                    ] }),
                    (g == null ? void 0 : g.location) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                      /* @__PURE__ */ p.jsx(Ps, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsx("span", { children: g.location })
                    ] }),
                    (g == null ? void 0 : g.organization) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                      /* @__PURE__ */ p.jsx(Ia, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsx("span", { children: g.organization })
                    ] })
                  ] })
                ] }),
                g && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: g.cost })
              ] }),
              (g == null ? void 0 : g.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-2", children: /* @__PURE__ */ p.jsx(Qr, { variant: "outline", size: "sm", children: "Registration Required" }) })
            ]
          },
          f.id
        );
      }) })
    ] }, i);
  }) });
}
function m2({ events: e, eventMetadata: t, onEventClick: n }) {
  const r = (i) => i.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), o = [...e].sort((i, a) => i.startDate.getTime() - a.startDate.getTime()), s = o.reduce((i, a) => {
    const l = a.startDate.toDateString();
    return i[l] || (i[l] = []), i[l].push(a), i;
  }, {});
  return /* @__PURE__ */ p.jsx("div", { className: "space-y-6", children: o.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-12 text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ p.jsx(mn, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
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
        const g = t[f.id], y = g ? {
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
            className: `bg-muted dark:bg-gray-700 relative rounded-md p-3 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors ${y}`,
            onClick: () => n == null ? void 0 : n(f),
            children: [
              /* @__PURE__ */ p.jsxs("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ p.jsxs("div", { className: "flex-grow min-w-0", children: [
                  /* @__PURE__ */ p.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 mb-2", children: f.title }),
                  /* @__PURE__ */ p.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                      /* @__PURE__ */ p.jsx(Fa, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsxs("span", { children: [
                        r(f.startDate),
                        " - ",
                        r(f.endDate)
                      ] })
                    ] }),
                    (g == null ? void 0 : g.location) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                      /* @__PURE__ */ p.jsx(Ps, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsx("span", { children: g.location })
                    ] }),
                    (g == null ? void 0 : g.organization) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                      /* @__PURE__ */ p.jsx(Ia, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsx("span", { children: g.organization })
                    ] })
                  ] })
                ] }),
                g && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: g.cost })
              ] }),
              (g == null ? void 0 : g.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-2", children: /* @__PURE__ */ p.jsx(Qr, { variant: "outline", size: "sm", children: "Registration Required" }) })
            ]
          },
          f.id
        );
      }) })
    ] }, i);
  }) });
}
function g2() {
  const [e, t] = x.useState("month"), [n, r] = x.useState(/* @__PURE__ */ new Date()), [o, s] = x.useState(null), [i, a] = x.useState(!1);
  ke.useEffect(() => {
    const C = document.createElement("style");
    return C.textContent = `
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
    `, document.head.appendChild(C), () => {
      document.head.removeChild(C);
    };
  }, []);
  const [l, u] = x.useState("all"), [c, d] = x.useState("all"), [f, g] = x.useState(""), {
    events: w,
    eventMetadata: y,
    loading: S,
    error: m
  } = l0({
    per_page: 1e3
    // Get all events
  }), { organizations: h } = kE(), v = ke.useMemo(() => {
    let C = w;
    if (l !== "all" && (C = C.filter((P) => {
      var N;
      const E = y[P.id];
      return (N = E == null ? void 0 : E.categories) == null ? void 0 : N.some((D) => D.slug === l);
    })), c !== "all" && (C = C.filter((P) => {
      const E = y[P.id], N = h.find((D) => D.id.toString() === c);
      return N && (E == null ? void 0 : E.organization) === N.title.rendered;
    })), f) {
      const P = f.toLowerCase();
      C = C.filter((E) => {
        var D, j, R;
        const N = y[E.id];
        return E.title.toLowerCase().includes(P) || ((D = N == null ? void 0 : N.description) == null ? void 0 : D.toLowerCase().includes(P)) || ((j = N == null ? void 0 : N.location) == null ? void 0 : j.toLowerCase().includes(P)) || ((R = N == null ? void 0 : N.organization) == null ? void 0 : R.toLowerCase().includes(P));
      });
    }
    return C;
  }, [w, y, l, c, f, h]), k = (C) => {
    r(C), t("day");
  }, b = (C) => {
    s(C), a(!0);
  };
  return S ? /* @__PURE__ */ p.jsx("div", { className: "w-full flex items-center justify-center py-12", children: /* @__PURE__ */ p.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ p.jsx(Hv, { className: "h-8 w-8 animate-spin mx-auto mb-4" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-gray-600", children: "Loading events..." })
  ] }) }) : m ? /* @__PURE__ */ p.jsx("div", { className: "w-full py-12", children: /* @__PURE__ */ p.jsx(ad, { className: "max-w-md mx-auto", children: /* @__PURE__ */ p.jsxs(Dy, { className: "pt-6 text-center", children: [
    /* @__PURE__ */ p.jsxs("p", { className: "text-red-600 mb-4", children: [
      "Error loading events: ",
      m
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
    /* @__PURE__ */ p.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm unbc-calendar-view", children: /* @__PURE__ */ p.jsxs(xE, { value: e, onValueChange: t, className: "w-full", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "hidden md:flex p-6 pb-0 justify-between items-start gap-6", children: [
        /* @__PURE__ */ p.jsxs(Wp, { className: "h-9 bg-gray-100 dark:bg-gray-700 p-1", children: [
          /* @__PURE__ */ p.jsxs(Bn, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(mn, { className: "h-3 w-3" }),
            "Day"
          ] }),
          /* @__PURE__ */ p.jsxs(Bn, { value: "week", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(mn, { className: "h-3 w-3" }),
            "Week"
          ] }),
          /* @__PURE__ */ p.jsxs(Bn, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(mn, { className: "h-3 w-3" }),
            "Month"
          ] }),
          /* @__PURE__ */ p.jsxs(Bn, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(Up, { className: "h-3 w-3" }),
            "List"
          ] })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsxs(ti, { onValueChange: u, children: [
            /* @__PURE__ */ p.jsx(ri, { className: "w-40 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsx(ni, { placeholder: "All Categories" }) }),
            /* @__PURE__ */ p.jsxs(oi, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600", children: [
              /* @__PURE__ */ p.jsx(pe, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Categories" }),
              /* @__PURE__ */ p.jsx(pe, { value: "academic", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Academic" }),
              /* @__PURE__ */ p.jsx(pe, { value: "arts", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Arts & Creative" }),
              /* @__PURE__ */ p.jsx(pe, { value: "cultural", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Cultural" }),
              /* @__PURE__ */ p.jsx(pe, { value: "professional", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Professional" }),
              /* @__PURE__ */ p.jsx(pe, { value: "social", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Social" }),
              /* @__PURE__ */ p.jsx(pe, { value: "sports", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Sports & Recreation" }),
              /* @__PURE__ */ p.jsx(pe, { value: "volunteer", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Volunteer" }),
              /* @__PURE__ */ p.jsx(pe, { value: "wellness", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Health & Wellness" })
            ] })
          ] }),
          /* @__PURE__ */ p.jsxs(ti, { value: c, onValueChange: d, children: [
            /* @__PURE__ */ p.jsx(ri, { className: "w-44 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 [&>span]:truncate [&>span]:block", children: /* @__PURE__ */ p.jsx(ni, { placeholder: "All Organizations" }) }),
            /* @__PURE__ */ p.jsxs(oi, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 max-h-[200px] overflow-y-auto", children: [
              /* @__PURE__ */ p.jsx(pe, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Organizations" }),
              h.map((C) => /* @__PURE__ */ p.jsx(
                pe,
                {
                  value: C.id.toString(),
                  className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600",
                  children: C.title.rendered
                },
                C.id
              ))
            ] })
          ] }),
          /* @__PURE__ */ p.jsx(
            Yu,
            {
              placeholder: "Search events...",
              onChange: (C) => g(C.target.value),
              className: "w-40 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "md:hidden", children: [
        /* @__PURE__ */ p.jsx("div", { className: "p-6 pb-0 flex justify-center", children: /* @__PURE__ */ p.jsxs(Wp, { className: "h-9 bg-gray-100 dark:bg-gray-700 p-1", children: [
          /* @__PURE__ */ p.jsxs(Bn, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(mn, { className: "h-3 w-3" }),
            "Day"
          ] }),
          /* @__PURE__ */ p.jsxs(Bn, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(mn, { className: "h-3 w-3" }),
            "Month"
          ] }),
          /* @__PURE__ */ p.jsxs(Bn, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(Up, { className: "h-3 w-3" }),
            "List"
          ] })
        ] }) }),
        /* @__PURE__ */ p.jsxs("div", { className: "p-6 pt-4 space-y-3", children: [
          /* @__PURE__ */ p.jsxs(ti, { onValueChange: u, children: [
            /* @__PURE__ */ p.jsx(ri, { className: "border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsx(ni, { placeholder: "All Categories" }) }),
            /* @__PURE__ */ p.jsxs(oi, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600", children: [
              /* @__PURE__ */ p.jsx(pe, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Categories" }),
              /* @__PURE__ */ p.jsx(pe, { value: "academic", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Academic" }),
              /* @__PURE__ */ p.jsx(pe, { value: "arts", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Arts & Creative" }),
              /* @__PURE__ */ p.jsx(pe, { value: "cultural", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Cultural" }),
              /* @__PURE__ */ p.jsx(pe, { value: "professional", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Professional" }),
              /* @__PURE__ */ p.jsx(pe, { value: "social", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Social" }),
              /* @__PURE__ */ p.jsx(pe, { value: "sports", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Sports & Recreation" }),
              /* @__PURE__ */ p.jsx(pe, { value: "volunteer", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Volunteer" }),
              /* @__PURE__ */ p.jsx(pe, { value: "wellness", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Health & Wellness" })
            ] })
          ] }),
          /* @__PURE__ */ p.jsxs(ti, { value: c, onValueChange: d, children: [
            /* @__PURE__ */ p.jsx(ri, { className: "border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsx(ni, { placeholder: "All Organizations", className: "truncate" }) }),
            /* @__PURE__ */ p.jsxs(oi, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 max-h-[200px] overflow-y-auto", children: [
              /* @__PURE__ */ p.jsx(pe, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Organizations" }),
              h.map((C) => /* @__PURE__ */ p.jsx(
                pe,
                {
                  value: C.id.toString(),
                  className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600",
                  children: C.title.rendered
                },
                C.id
              ))
            ] })
          ] }),
          /* @__PURE__ */ p.jsx(
            Yu,
            {
              placeholder: "Search events...",
              onChange: (C) => g(C.target.value),
              className: "border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs(ii, { value: "month", className: "p-6 pt-4", children: [
        /* @__PURE__ */ p.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ p.jsx(
          c2,
          {
            events: v,
            eventMetadata: y,
            onDateClick: k,
            onEventClick: b
          }
        ) }),
        /* @__PURE__ */ p.jsx("div", { className: "block md:hidden mobile-calendar", children: /* @__PURE__ */ p.jsx(
          p2,
          {
            events: v,
            eventMetadata: y,
            onEventClick: b
          }
        ) })
      ] }),
      /* @__PURE__ */ p.jsx(ii, { value: "week", className: "p-6 pt-4", children: /* @__PURE__ */ p.jsx(
        d2,
        {
          events: v,
          eventMetadata: y,
          onEventClick: b
        }
      ) }),
      /* @__PURE__ */ p.jsx(ii, { value: "day", className: "p-6 pt-4", children: /* @__PURE__ */ p.jsx(
        f2,
        {
          events: v,
          eventMetadata: y,
          initialDate: n,
          onEventClick: b
        }
      ) }),
      /* @__PURE__ */ p.jsxs(ii, { value: "list", className: "p-6 pt-4", children: [
        /* @__PURE__ */ p.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ p.jsx(h2, { events: v, eventMetadata: y, onEventClick: b }) }),
        /* @__PURE__ */ p.jsx("div", { className: "block md:hidden", children: /* @__PURE__ */ p.jsx(m2, { events: v, eventMetadata: y, onEventClick: b }) })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsx(
      L0,
      {
        event: o,
        eventMetadata: y,
        open: i,
        onOpenChange: a
      }
    )
  ] });
}
function cw({
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
  }), { filteredEvents: l, eventsByDate: u } = ke.useMemo(() => {
    let c = e;
    const d = /* @__PURE__ */ new Date();
    (n || r) && (c = c.filter((g) => {
      var y;
      const w = t[g.id];
      return r ? (w == null ? void 0 : w.organization) === r : n ? ((y = w == null ? void 0 : w.organization_id) == null ? void 0 : y.toString()) === n : !0;
    })), s || (c = c.filter((g) => g.startDate >= d)), c.sort((g, w) => g.startDate.getTime() - w.startDate.getTime()), o && o > 0 && (c = c.slice(0, o));
    const f = c.reduce((g, w) => {
      const y = w.startDate.toDateString();
      return g[y] || (g[y] = []), g[y].push(w), g;
    }, {});
    return { filteredEvents: c, eventsByDate: f };
  }, [e, t, n, r, o, s]);
  return l.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-8 text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ p.jsx(mn, { className: "mx-auto h-8 w-8 mb-3 opacity-50" }),
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
      const f = new Date(c), g = f.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), w = f.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let y = f.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      });
      return g ? y = `Today, ${y}` : w && (y = `Tomorrow, ${y}`), /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
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
          const m = t[S.id], v = m ? {
            academic: "after:bg-green-500",
            social: "after:bg-orange-500",
            cultural: "after:bg-purple-500",
            sports: "after:bg-red-500",
            professional: "after:bg-teal-500",
            wellness: "after:bg-blue-500",
            volunteer: "after:bg-yellow-500",
            arts: "after:bg-pink-500"
          }[m.category] : "after:bg-gray-500";
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
                      /* @__PURE__ */ p.jsx(Fa, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsxs("span", { children: [
                        a(S.startDate),
                        " - ",
                        a(S.endDate)
                      ] })
                    ] }) }),
                    m && /* @__PURE__ */ p.jsxs("div", { className: "space-y-1 text-sm text-gray-600 dark:text-gray-400", children: [
                      m.location && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(Ps, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: m.location })
                      ] }),
                      !r && m.organization && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(Ia, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: m.organization })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col items-end gap-2 flex-shrink-0 ml-4", children: [
                    (m == null ? void 0 : m.cost) && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400", children: m.cost }),
                    (m == null ? void 0 : m.category) && /* @__PURE__ */ p.jsx(Qr, { variant: "secondary", size: "sm", className: "text-xs", children: m.category.charAt(0).toUpperCase() + m.category.slice(1) })
                  ] })
                ] }),
                (m == null ? void 0 : m.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-3 pt-2 border-t border-gray-100 dark:border-gray-700", children: /* @__PURE__ */ p.jsx(Qr, { variant: "outline", size: "sm", children: "📝 Registration Required" }) })
              ]
            },
            S.id
          );
        }) })
      ] }, c);
    })
  ] });
}
function y2({
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
  } = l0({
    per_page: 1e3
    // Get all events to filter client-side
  }), f = (g) => {
    s(g), a(!0);
  };
  return c ? /* @__PURE__ */ p.jsx("div", { className: "w-full flex items-center justify-center py-8", children: /* @__PURE__ */ p.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ p.jsx(Hv, { className: "h-6 w-6 animate-spin mx-auto mb-2" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-gray-600 text-sm", children: "Loading events..." })
  ] }) }) : d ? /* @__PURE__ */ p.jsx("div", { className: "w-full py-8", children: /* @__PURE__ */ p.jsx("div", { className: "max-w-md mx-auto bg-red-50 border border-red-200 rounded-lg p-4", children: /* @__PURE__ */ p.jsxs("p", { className: "text-red-600 text-sm", children: [
    "Error loading events: ",
    d
  ] }) }) }) : /* @__PURE__ */ p.jsxs("div", { className: "unbc-organization-events", children: [
    /* @__PURE__ */ p.jsx(
      cw,
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
      L0,
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
  const n = Na(t);
  t.dataset.view, t.dataset.categoryFilter, t.dataset.organizationFilter, n.render(
    /* @__PURE__ */ p.jsx(ke.StrictMode, { children: /* @__PURE__ */ p.jsx(g2, {}) })
  );
};
window.renderUNBCEventsList = function(e) {
  const t = document.getElementById(e);
  if (!t) {
    console.error("Events list container not found:", e);
    return;
  }
  const n = Na(t), r = t.dataset.organizationId || "", o = t.dataset.organizationName || "", s = parseInt(t.dataset.limit) || 5, i = t.dataset.showPast === "true";
  n.render(
    /* @__PURE__ */ p.jsx(ke.StrictMode, { children: /* @__PURE__ */ p.jsx(
      v2,
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
  const n = Na(t), r = t.dataset.organizationId || "", o = t.dataset.organizationName || "", s = parseInt(t.dataset.limit) || 5, i = t.dataset.showPast === "true";
  n.render(
    /* @__PURE__ */ p.jsx(ke.StrictMode, { children: /* @__PURE__ */ p.jsx(
      y2,
      {
        organizationId: r,
        organizationName: o,
        limit: s,
        showPastEvents: i
      }
    ) })
  );
};
function v2({ organizationId: e, organizationName: t, limit: n, showPastEvents: r }) {
  return /* @__PURE__ */ p.jsx(
    cw,
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
