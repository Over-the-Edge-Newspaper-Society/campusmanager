function hw(e, t) {
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
function cm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var dm = { exports: {} }, ya = {}, fm = { exports: {} }, Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bs = Symbol.for("react.element"), mw = Symbol.for("react.portal"), gw = Symbol.for("react.fragment"), yw = Symbol.for("react.strict_mode"), vw = Symbol.for("react.profiler"), xw = Symbol.for("react.provider"), ww = Symbol.for("react.context"), Sw = Symbol.for("react.forward_ref"), bw = Symbol.for("react.suspense"), kw = Symbol.for("react.memo"), Cw = Symbol.for("react.lazy"), df = Symbol.iterator;
function Ew(e) {
  return e === null || typeof e != "object" ? null : (e = df && e[df] || e["@@iterator"], typeof e == "function" ? e : null);
}
var pm = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, hm = Object.assign, mm = {};
function to(e, t, n) {
  this.props = e, this.context = t, this.refs = mm, this.updater = n || pm;
}
to.prototype.isReactComponent = {};
to.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
to.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function gm() {
}
gm.prototype = to.prototype;
function hc(e, t, n) {
  this.props = e, this.context = t, this.refs = mm, this.updater = n || pm;
}
var mc = hc.prototype = new gm();
mc.constructor = hc;
hm(mc, to.prototype);
mc.isPureReactComponent = !0;
var ff = Array.isArray, ym = Object.prototype.hasOwnProperty, gc = { current: null }, vm = { key: !0, ref: !0, __self: !0, __source: !0 };
function xm(e, t, n) {
  var r, o = {}, s = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (s = "" + t.key), t) ym.call(t, r) && !vm.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: bs, type: e, key: s, ref: i, props: o, _owner: gc.current };
}
function Pw(e, t) {
  return { $$typeof: bs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function yc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === bs;
}
function Tw(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var pf = /\/+/g;
function Qa(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Tw("" + e.key) : t.toString(36);
}
function mi(e, t, n, r, o) {
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
        case bs:
        case mw:
          i = !0;
      }
  }
  if (i) return i = e, o = o(i), e = r === "" ? "." + Qa(i, 0) : r, ff(o) ? (n = "", e != null && (n = e.replace(pf, "$&/") + "/"), mi(o, t, n, "", function(u) {
    return u;
  })) : o != null && (yc(o) && (o = Pw(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(pf, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", ff(e)) for (var a = 0; a < e.length; a++) {
    s = e[a];
    var l = r + Qa(s, a);
    i += mi(s, t, n, l, o);
  }
  else if (l = Ew(e), typeof l == "function") for (e = l.call(e), a = 0; !(s = e.next()).done; ) s = s.value, l = r + Qa(s, a++), i += mi(s, t, n, l, o);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Is(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return mi(e, r, "", "", function(s) {
    return t.call(n, s, o++);
  }), r;
}
function Dw(e) {
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
var We = { current: null }, gi = { transition: null }, Nw = { ReactCurrentDispatcher: We, ReactCurrentBatchConfig: gi, ReactCurrentOwner: gc };
function wm() {
  throw Error("act(...) is not supported in production builds of React.");
}
Y.Children = { map: Is, forEach: function(e, t, n) {
  Is(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Is(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Is(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!yc(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Y.Component = to;
Y.Fragment = gw;
Y.Profiler = vw;
Y.PureComponent = hc;
Y.StrictMode = yw;
Y.Suspense = bw;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nw;
Y.act = wm;
Y.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = hm({}, e.props), o = e.key, s = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, i = gc.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) ym.call(t, l) && !vm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: bs, type: e.type, key: o, ref: s, props: r, _owner: i };
};
Y.createContext = function(e) {
  return e = { $$typeof: ww, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: xw, _context: e }, e.Consumer = e;
};
Y.createElement = xm;
Y.createFactory = function(e) {
  var t = xm.bind(null, e);
  return t.type = e, t;
};
Y.createRef = function() {
  return { current: null };
};
Y.forwardRef = function(e) {
  return { $$typeof: Sw, render: e };
};
Y.isValidElement = yc;
Y.lazy = function(e) {
  return { $$typeof: Cw, _payload: { _status: -1, _result: e }, _init: Dw };
};
Y.memo = function(e, t) {
  return { $$typeof: kw, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function(e) {
  var t = gi.transition;
  gi.transition = {};
  try {
    e();
  } finally {
    gi.transition = t;
  }
};
Y.unstable_act = wm;
Y.useCallback = function(e, t) {
  return We.current.useCallback(e, t);
};
Y.useContext = function(e) {
  return We.current.useContext(e);
};
Y.useDebugValue = function() {
};
Y.useDeferredValue = function(e) {
  return We.current.useDeferredValue(e);
};
Y.useEffect = function(e, t) {
  return We.current.useEffect(e, t);
};
Y.useId = function() {
  return We.current.useId();
};
Y.useImperativeHandle = function(e, t, n) {
  return We.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function(e, t) {
  return We.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function(e, t) {
  return We.current.useLayoutEffect(e, t);
};
Y.useMemo = function(e, t) {
  return We.current.useMemo(e, t);
};
Y.useReducer = function(e, t, n) {
  return We.current.useReducer(e, t, n);
};
Y.useRef = function(e) {
  return We.current.useRef(e);
};
Y.useState = function(e) {
  return We.current.useState(e);
};
Y.useSyncExternalStore = function(e, t, n) {
  return We.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function() {
  return We.current.useTransition();
};
Y.version = "18.3.1";
fm.exports = Y;
var x = fm.exports;
const se = /* @__PURE__ */ cm(x), Sm = /* @__PURE__ */ hw({
  __proto__: null,
  default: se
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
var Rw = x, Aw = Symbol.for("react.element"), Mw = Symbol.for("react.fragment"), jw = Object.prototype.hasOwnProperty, Lw = Rw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _w = { key: !0, ref: !0, __self: !0, __source: !0 };
function bm(e, t, n) {
  var r, o = {}, s = null, i = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) jw.call(t, r) && !_w.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Aw, type: e, key: s, ref: i, props: o, _owner: Lw.current };
}
ya.Fragment = Mw;
ya.jsx = bm;
ya.jsxs = bm;
dm.exports = ya;
var p = dm.exports, km = { exports: {} }, it = {}, Cm = { exports: {} }, Em = {};
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
      var H = _ - 1 >>> 1, L = T[H];
      if (0 < o(L, M)) T[H] = M, T[_] = L, _ = H;
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
      e: for (var H = 0, L = T.length, ae = L >>> 1; H < ae; ) {
        var Q = 2 * (H + 1) - 1, ee = T[Q], ke = Q + 1, z = T[ke];
        if (0 > o(ee, _)) ke < L && 0 > o(z, ee) ? (T[H] = z, T[ke] = _, H = ke) : (T[H] = ee, T[Q] = _, H = Q);
        else if (ke < L && 0 > o(z, _)) T[H] = z, T[ke] = _, H = ke;
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
  var l = [], u = [], c = 1, d = null, f = 3, h = !1, w = !1, y = !1, S = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(T) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u);
      else if (M.startTime <= T) r(u), M.sortIndex = M.expirationTime, t(l, M);
      else break;
      M = n(u);
    }
  }
  function b(T) {
    if (y = !1, v(T), !w) if (n(l) !== null) w = !0, V(k);
    else {
      var M = n(u);
      M !== null && O(b, M.startTime - T);
    }
  }
  function k(T, M) {
    w = !1, y && (y = !1, m(E), E = -1), h = !0;
    var _ = f;
    try {
      for (v(M), d = n(l); d !== null && (!(d.expirationTime > M) || T && !j()); ) {
        var H = d.callback;
        if (typeof H == "function") {
          d.callback = null, f = d.priorityLevel;
          var L = H(d.expirationTime <= M);
          M = e.unstable_now(), typeof L == "function" ? d.callback = L : d === n(l) && r(l), v(M);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var ae = !0;
      else {
        var Q = n(u);
        Q !== null && O(b, Q.startTime - M), ae = !1;
      }
      return ae;
    } finally {
      d = null, f = _, h = !1;
    }
  }
  var P = !1, C = null, E = -1, D = 5, N = -1;
  function j() {
    return !(e.unstable_now() - N < D);
  }
  function A() {
    if (C !== null) {
      var T = e.unstable_now();
      N = T;
      var M = !0;
      try {
        M = C(!0, T);
      } finally {
        M ? F() : (P = !1, C = null);
      }
    } else P = !1;
  }
  var F;
  if (typeof g == "function") F = function() {
    g(A);
  };
  else if (typeof MessageChannel < "u") {
    var B = new MessageChannel(), G = B.port2;
    B.port1.onmessage = A, F = function() {
      G.postMessage(null);
    };
  } else F = function() {
    S(A, 0);
  };
  function V(T) {
    C = T, P || (P = !0, F());
  }
  function O(T, M) {
    E = S(function() {
      T(e.unstable_now());
    }, M);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    w || h || (w = !0, V(k));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < T ? Math.floor(1e3 / T) : 5;
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
    var H = e.unstable_now();
    switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? H + _ : H) : _ = H, T) {
      case 1:
        var L = -1;
        break;
      case 2:
        L = 250;
        break;
      case 5:
        L = 1073741823;
        break;
      case 4:
        L = 1e4;
        break;
      default:
        L = 5e3;
    }
    return L = _ + L, T = { id: c++, callback: M, priorityLevel: T, startTime: _, expirationTime: L, sortIndex: -1 }, _ > H ? (T.sortIndex = _, t(u, T), n(l) === null && T === n(u) && (y ? (m(E), E = -1) : y = !0, O(b, _ - H))) : (T.sortIndex = L, t(l, T), w || h || (w = !0, V(k))), T;
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
})(Em);
Cm.exports = Em;
var Iw = Cm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ow = x, ot = Iw;
function R(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Pm = /* @__PURE__ */ new Set(), Yo = {};
function ur(e, t) {
  $r(e, t), $r(e + "Capture", t);
}
function $r(e, t) {
  for (Yo[e] = t, e = 0; e < t.length; e++) Pm.add(t[e]);
}
var Xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Gl = Object.prototype.hasOwnProperty, Fw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, hf = {}, mf = {};
function Vw(e) {
  return Gl.call(mf, e) ? !0 : Gl.call(hf, e) ? !1 : Fw.test(e) ? mf[e] = !0 : (hf[e] = !0, !1);
}
function zw(e, t, n, r) {
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
function Bw(e, t, n, r) {
  if (t === null || typeof t > "u" || zw(e, t, n, r)) return !0;
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
function He(e, t, n, r, o, s, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = i;
}
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  je[e] = new He(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  je[t] = new He(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  je[e] = new He(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  je[e] = new He(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  je[e] = new He(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  je[e] = new He(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  je[e] = new He(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  je[e] = new He(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  je[e] = new He(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vc = /[\-:]([a-z])/g;
function xc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    vc,
    xc
  );
  je[t] = new He(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(vc, xc);
  je[t] = new He(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(vc, xc);
  je[t] = new He(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  je[e] = new He(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
je.xlinkHref = new He("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  je[e] = new He(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function wc(e, t, n, r) {
  var o = je.hasOwnProperty(t) ? je[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Bw(t, n, o, r) && (n = null), r || o === null ? Vw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var nn = Ow.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Os = Symbol.for("react.element"), gr = Symbol.for("react.portal"), yr = Symbol.for("react.fragment"), Sc = Symbol.for("react.strict_mode"), Yl = Symbol.for("react.profiler"), Tm = Symbol.for("react.provider"), Dm = Symbol.for("react.context"), bc = Symbol.for("react.forward_ref"), Xl = Symbol.for("react.suspense"), Ql = Symbol.for("react.suspense_list"), kc = Symbol.for("react.memo"), cn = Symbol.for("react.lazy"), Nm = Symbol.for("react.offscreen"), gf = Symbol.iterator;
function go(e) {
  return e === null || typeof e != "object" ? null : (e = gf && e[gf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ge = Object.assign, qa;
function To(e) {
  if (qa === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    qa = t && t[1] || "";
  }
  return `
` + qa + e;
}
var Za = !1;
function Ja(e, t) {
  if (!e || Za) return "";
  Za = !0;
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
    Za = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? To(e) : "";
}
function $w(e) {
  switch (e.tag) {
    case 5:
      return To(e.type);
    case 16:
      return To("Lazy");
    case 13:
      return To("Suspense");
    case 19:
      return To("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ja(e.type, !1), e;
    case 11:
      return e = Ja(e.type.render, !1), e;
    case 1:
      return e = Ja(e.type, !0), e;
    default:
      return "";
  }
}
function ql(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case yr:
      return "Fragment";
    case gr:
      return "Portal";
    case Yl:
      return "Profiler";
    case Sc:
      return "StrictMode";
    case Xl:
      return "Suspense";
    case Ql:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Dm:
      return (e.displayName || "Context") + ".Consumer";
    case Tm:
      return (e._context.displayName || "Context") + ".Provider";
    case bc:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case kc:
      return t = e.displayName || null, t !== null ? t : ql(e.type) || "Memo";
    case cn:
      t = e._payload, e = e._init;
      try {
        return ql(e(t));
      } catch {
      }
  }
  return null;
}
function Uw(e) {
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
      return ql(t);
    case 8:
      return t === Sc ? "StrictMode" : "Mode";
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
function Rm(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Ww(e) {
  var t = Rm(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Fs(e) {
  e._valueTracker || (e._valueTracker = Ww(e));
}
function Am(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Rm(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Li(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Zl(e, t) {
  var n = t.checked;
  return ge({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function yf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Tn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Mm(e, t) {
  t = t.checked, t != null && wc(e, "checked", t, !1);
}
function Jl(e, t) {
  Mm(e, t);
  var n = Tn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? eu(e, t.type, n) : t.hasOwnProperty("defaultValue") && eu(e, t.type, Tn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function vf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function eu(e, t, n) {
  (t !== "number" || Li(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Do = Array.isArray;
function jr(e, t, n, r) {
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
function tu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return ge({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function xf(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(R(92));
      if (Do(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Tn(n) };
}
function jm(e, t) {
  var n = Tn(t.value), r = Tn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function wf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Lm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function nu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Lm(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Vs, _m = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Vs = Vs || document.createElement("div"), Vs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Vs.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Xo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var _o = {
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
}, Hw = ["Webkit", "ms", "Moz", "O"];
Object.keys(_o).forEach(function(e) {
  Hw.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), _o[t] = _o[e];
  });
});
function Im(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || _o.hasOwnProperty(e) && _o[e] ? ("" + t).trim() : t + "px";
}
function Om(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Im(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Kw = ge({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ru(e, t) {
  if (t) {
    if (Kw[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function ou(e, t) {
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
var su = null;
function Cc(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var iu = null, Lr = null, _r = null;
function Sf(e) {
  if (e = Es(e)) {
    if (typeof iu != "function") throw Error(R(280));
    var t = e.stateNode;
    t && (t = ba(t), iu(e.stateNode, e.type, t));
  }
}
function Fm(e) {
  Lr ? _r ? _r.push(e) : _r = [e] : Lr = e;
}
function Vm() {
  if (Lr) {
    var e = Lr, t = _r;
    if (_r = Lr = null, Sf(e), t) for (e = 0; e < t.length; e++) Sf(t[e]);
  }
}
function zm(e, t) {
  return e(t);
}
function Bm() {
}
var el = !1;
function $m(e, t, n) {
  if (el) return e(t, n);
  el = !0;
  try {
    return zm(e, t, n);
  } finally {
    el = !1, (Lr !== null || _r !== null) && (Bm(), Vm());
  }
}
function Qo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ba(n);
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
var au = !1;
if (Xt) try {
  var yo = {};
  Object.defineProperty(yo, "passive", { get: function() {
    au = !0;
  } }), window.addEventListener("test", yo, yo), window.removeEventListener("test", yo, yo);
} catch {
  au = !1;
}
function Gw(e, t, n, r, o, s, i, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Io = !1, _i = null, Ii = !1, lu = null, Yw = { onError: function(e) {
  Io = !0, _i = e;
} };
function Xw(e, t, n, r, o, s, i, a, l) {
  Io = !1, _i = null, Gw.apply(Yw, arguments);
}
function Qw(e, t, n, r, o, s, i, a, l) {
  if (Xw.apply(this, arguments), Io) {
    if (Io) {
      var u = _i;
      Io = !1, _i = null;
    } else throw Error(R(198));
    Ii || (Ii = !0, lu = u);
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
function Um(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function bf(e) {
  if (cr(e) !== e) throw Error(R(188));
}
function qw(e) {
  var t = e.alternate;
  if (!t) {
    if (t = cr(e), t === null) throw Error(R(188));
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
        if (s === n) return bf(o), e;
        if (s === r) return bf(o), t;
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
function Wm(e) {
  return e = qw(e), e !== null ? Hm(e) : null;
}
function Hm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Hm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Km = ot.unstable_scheduleCallback, kf = ot.unstable_cancelCallback, Zw = ot.unstable_shouldYield, Jw = ot.unstable_requestPaint, be = ot.unstable_now, e1 = ot.unstable_getCurrentPriorityLevel, Ec = ot.unstable_ImmediatePriority, Gm = ot.unstable_UserBlockingPriority, Oi = ot.unstable_NormalPriority, t1 = ot.unstable_LowPriority, Ym = ot.unstable_IdlePriority, va = null, Lt = null;
function n1(e) {
  if (Lt && typeof Lt.onCommitFiberRoot == "function") try {
    Lt.onCommitFiberRoot(va, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var bt = Math.clz32 ? Math.clz32 : s1, r1 = Math.log, o1 = Math.LN2;
function s1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (r1(e) / o1 | 0) | 0;
}
var zs = 64, Bs = 4194304;
function No(e) {
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
function Fi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, s = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var a = i & ~o;
    a !== 0 ? r = No(a) : (s &= i, s !== 0 && (r = No(s)));
  } else i = n & ~o, i !== 0 ? r = No(i) : s !== 0 && (r = No(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, s = t & -t, o >= s || o === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - bt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function i1(e, t) {
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
function a1(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var i = 31 - bt(s), a = 1 << i, l = o[i];
    l === -1 ? (!(a & n) || a & r) && (o[i] = i1(a, t)) : l <= t && (e.expiredLanes |= a), s &= ~a;
  }
}
function uu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Xm() {
  var e = zs;
  return zs <<= 1, !(zs & 4194240) && (zs = 64), e;
}
function tl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ks(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - bt(t), e[t] = n;
}
function l1(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - bt(n), s = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~s;
  }
}
function Pc(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - bt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var J = 0;
function Qm(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var qm, Tc, Zm, Jm, eg, cu = !1, $s = [], yn = null, vn = null, xn = null, qo = /* @__PURE__ */ new Map(), Zo = /* @__PURE__ */ new Map(), pn = [], u1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Cf(e, t) {
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
      qo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zo.delete(t.pointerId);
  }
}
function vo(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [o] }, t !== null && (t = Es(t), t !== null && Tc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function c1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return yn = vo(yn, e, t, n, r, o), !0;
    case "dragenter":
      return vn = vo(vn, e, t, n, r, o), !0;
    case "mouseover":
      return xn = vo(xn, e, t, n, r, o), !0;
    case "pointerover":
      var s = o.pointerId;
      return qo.set(s, vo(qo.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return s = o.pointerId, Zo.set(s, vo(Zo.get(s) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function tg(e) {
  var t = Kn(e.target);
  if (t !== null) {
    var n = cr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Um(n), t !== null) {
          e.blockedOn = t, eg(e.priority, function() {
            Zm(n);
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
function yi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = du(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      su = r, n.target.dispatchEvent(r), su = null;
    } else return t = Es(n), t !== null && Tc(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ef(e, t, n) {
  yi(e) && n.delete(t);
}
function d1() {
  cu = !1, yn !== null && yi(yn) && (yn = null), vn !== null && yi(vn) && (vn = null), xn !== null && yi(xn) && (xn = null), qo.forEach(Ef), Zo.forEach(Ef);
}
function xo(e, t) {
  e.blockedOn === t && (e.blockedOn = null, cu || (cu = !0, ot.unstable_scheduleCallback(ot.unstable_NormalPriority, d1)));
}
function Jo(e) {
  function t(o) {
    return xo(o, e);
  }
  if (0 < $s.length) {
    xo($s[0], e);
    for (var n = 1; n < $s.length; n++) {
      var r = $s[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (yn !== null && xo(yn, e), vn !== null && xo(vn, e), xn !== null && xo(xn, e), qo.forEach(t), Zo.forEach(t), n = 0; n < pn.length; n++) r = pn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pn.length && (n = pn[0], n.blockedOn === null); ) tg(n), n.blockedOn === null && pn.shift();
}
var Ir = nn.ReactCurrentBatchConfig, Vi = !0;
function f1(e, t, n, r) {
  var o = J, s = Ir.transition;
  Ir.transition = null;
  try {
    J = 1, Dc(e, t, n, r);
  } finally {
    J = o, Ir.transition = s;
  }
}
function p1(e, t, n, r) {
  var o = J, s = Ir.transition;
  Ir.transition = null;
  try {
    J = 4, Dc(e, t, n, r);
  } finally {
    J = o, Ir.transition = s;
  }
}
function Dc(e, t, n, r) {
  if (Vi) {
    var o = du(e, t, n, r);
    if (o === null) dl(e, t, r, zi, n), Cf(e, r);
    else if (c1(o, e, t, n, r)) r.stopPropagation();
    else if (Cf(e, r), t & 4 && -1 < u1.indexOf(e)) {
      for (; o !== null; ) {
        var s = Es(o);
        if (s !== null && qm(s), s = du(e, t, n, r), s === null && dl(e, t, r, zi, n), s === o) break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else dl(e, t, r, null, n);
  }
}
var zi = null;
function du(e, t, n, r) {
  if (zi = null, e = Cc(r), e = Kn(e), e !== null) if (t = cr(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Um(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return zi = e, null;
}
function ng(e) {
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
      switch (e1()) {
        case Ec:
          return 1;
        case Gm:
          return 4;
        case Oi:
        case t1:
          return 16;
        case Ym:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var mn = null, Nc = null, vi = null;
function rg() {
  if (vi) return vi;
  var e, t = Nc, n = t.length, r, o = "value" in mn ? mn.value : mn.textContent, s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++) ;
  return vi = o.slice(e, 1 < r ? 1 - r : void 0);
}
function xi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Us() {
  return !0;
}
function Pf() {
  return !1;
}
function at(e) {
  function t(n, r, o, s, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = s, this.target = i, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(s) : s[a]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Us : Pf, this.isPropagationStopped = Pf, this;
  }
  return ge(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Us);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Us);
  }, persist: function() {
  }, isPersistent: Us }), t;
}
var no = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Rc = at(no), Cs = ge({}, no, { view: 0, detail: 0 }), h1 = at(Cs), nl, rl, wo, xa = ge({}, Cs, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ac, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== wo && (wo && e.type === "mousemove" ? (nl = e.screenX - wo.screenX, rl = e.screenY - wo.screenY) : rl = nl = 0, wo = e), nl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : rl;
} }), Tf = at(xa), m1 = ge({}, xa, { dataTransfer: 0 }), g1 = at(m1), y1 = ge({}, Cs, { relatedTarget: 0 }), ol = at(y1), v1 = ge({}, no, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), x1 = at(v1), w1 = ge({}, no, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), S1 = at(w1), b1 = ge({}, no, { data: 0 }), Df = at(b1), k1 = {
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
}, C1 = {
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
}, E1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function P1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = E1[e]) ? !!t[e] : !1;
}
function Ac() {
  return P1;
}
var T1 = ge({}, Cs, { key: function(e) {
  if (e.key) {
    var t = k1[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = xi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? C1[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ac, charCode: function(e) {
  return e.type === "keypress" ? xi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? xi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), D1 = at(T1), N1 = ge({}, xa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Nf = at(N1), R1 = ge({}, Cs, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ac }), A1 = at(R1), M1 = ge({}, no, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), j1 = at(M1), L1 = ge({}, xa, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), _1 = at(L1), I1 = [9, 13, 27, 32], Mc = Xt && "CompositionEvent" in window, Oo = null;
Xt && "documentMode" in document && (Oo = document.documentMode);
var O1 = Xt && "TextEvent" in window && !Oo, og = Xt && (!Mc || Oo && 8 < Oo && 11 >= Oo), Rf = " ", Af = !1;
function sg(e, t) {
  switch (e) {
    case "keyup":
      return I1.indexOf(t.keyCode) !== -1;
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
function ig(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var vr = !1;
function F1(e, t) {
  switch (e) {
    case "compositionend":
      return ig(t);
    case "keypress":
      return t.which !== 32 ? null : (Af = !0, Rf);
    case "textInput":
      return e = t.data, e === Rf && Af ? null : e;
    default:
      return null;
  }
}
function V1(e, t) {
  if (vr) return e === "compositionend" || !Mc && sg(e, t) ? (e = rg(), vi = Nc = mn = null, vr = !1, e) : null;
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
      return og && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var z1 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Mf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!z1[e.type] : t === "textarea";
}
function ag(e, t, n, r) {
  Fm(r), t = Bi(t, "onChange"), 0 < t.length && (n = new Rc("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Fo = null, es = null;
function B1(e) {
  vg(e, 0);
}
function wa(e) {
  var t = Sr(e);
  if (Am(t)) return e;
}
function $1(e, t) {
  if (e === "change") return t;
}
var lg = !1;
if (Xt) {
  var sl;
  if (Xt) {
    var il = "oninput" in document;
    if (!il) {
      var jf = document.createElement("div");
      jf.setAttribute("oninput", "return;"), il = typeof jf.oninput == "function";
    }
    sl = il;
  } else sl = !1;
  lg = sl && (!document.documentMode || 9 < document.documentMode);
}
function Lf() {
  Fo && (Fo.detachEvent("onpropertychange", ug), es = Fo = null);
}
function ug(e) {
  if (e.propertyName === "value" && wa(es)) {
    var t = [];
    ag(t, es, e, Cc(e)), $m(B1, t);
  }
}
function U1(e, t, n) {
  e === "focusin" ? (Lf(), Fo = t, es = n, Fo.attachEvent("onpropertychange", ug)) : e === "focusout" && Lf();
}
function W1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return wa(es);
}
function H1(e, t) {
  if (e === "click") return wa(t);
}
function K1(e, t) {
  if (e === "input" || e === "change") return wa(t);
}
function G1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ct = typeof Object.is == "function" ? Object.is : G1;
function ts(e, t) {
  if (Ct(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Gl.call(t, o) || !Ct(e[o], t[o])) return !1;
  }
  return !0;
}
function _f(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function If(e, t) {
  var n = _f(e);
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
    n = _f(n);
  }
}
function cg(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? cg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function dg() {
  for (var e = window, t = Li(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Li(e.document);
  }
  return t;
}
function jc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Y1(e) {
  var t = dg(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && cg(n.ownerDocument.documentElement, n)) {
    if (r !== null && jc(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, s = Math.min(r.start, o);
        r = r.end === void 0 ? s : Math.min(r.end, o), !e.extend && s > r && (o = r, r = s, s = o), o = If(n, s);
        var i = If(
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
var X1 = Xt && "documentMode" in document && 11 >= document.documentMode, xr = null, fu = null, Vo = null, pu = !1;
function Of(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  pu || xr == null || xr !== Li(r) || (r = xr, "selectionStart" in r && jc(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Vo && ts(Vo, r) || (Vo = r, r = Bi(fu, "onSelect"), 0 < r.length && (t = new Rc("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = xr)));
}
function Ws(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var wr = { animationend: Ws("Animation", "AnimationEnd"), animationiteration: Ws("Animation", "AnimationIteration"), animationstart: Ws("Animation", "AnimationStart"), transitionend: Ws("Transition", "TransitionEnd") }, al = {}, fg = {};
Xt && (fg = document.createElement("div").style, "AnimationEvent" in window || (delete wr.animationend.animation, delete wr.animationiteration.animation, delete wr.animationstart.animation), "TransitionEvent" in window || delete wr.transitionend.transition);
function Sa(e) {
  if (al[e]) return al[e];
  if (!wr[e]) return e;
  var t = wr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in fg) return al[e] = t[n];
  return e;
}
var pg = Sa("animationend"), hg = Sa("animationiteration"), mg = Sa("animationstart"), gg = Sa("transitionend"), yg = /* @__PURE__ */ new Map(), Ff = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ln(e, t) {
  yg.set(e, t), ur(t, [e]);
}
for (var ll = 0; ll < Ff.length; ll++) {
  var ul = Ff[ll], Q1 = ul.toLowerCase(), q1 = ul[0].toUpperCase() + ul.slice(1);
  Ln(Q1, "on" + q1);
}
Ln(pg, "onAnimationEnd");
Ln(hg, "onAnimationIteration");
Ln(mg, "onAnimationStart");
Ln("dblclick", "onDoubleClick");
Ln("focusin", "onFocus");
Ln("focusout", "onBlur");
Ln(gg, "onTransitionEnd");
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
var Ro = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Z1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));
function Vf(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Qw(r, t, void 0, e), e.currentTarget = null;
}
function vg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var a = r[i], l = a.instance, u = a.currentTarget;
        if (a = a.listener, l !== s && o.isPropagationStopped()) break e;
        Vf(o, a, u), s = l;
      }
      else for (i = 0; i < r.length; i++) {
        if (a = r[i], l = a.instance, u = a.currentTarget, a = a.listener, l !== s && o.isPropagationStopped()) break e;
        Vf(o, a, u), s = l;
      }
    }
  }
  if (Ii) throw e = lu, Ii = !1, lu = null, e;
}
function ue(e, t) {
  var n = t[vu];
  n === void 0 && (n = t[vu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (xg(t, e, 2, !1), n.add(r));
}
function cl(e, t, n) {
  var r = 0;
  t && (r |= 4), xg(n, e, r, t);
}
var Hs = "_reactListening" + Math.random().toString(36).slice(2);
function ns(e) {
  if (!e[Hs]) {
    e[Hs] = !0, Pm.forEach(function(n) {
      n !== "selectionchange" && (Z1.has(n) || cl(n, !1, e), cl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Hs] || (t[Hs] = !0, cl("selectionchange", !1, t));
  }
}
function xg(e, t, n, r) {
  switch (ng(t)) {
    case 1:
      var o = f1;
      break;
    case 4:
      o = p1;
      break;
    default:
      o = Dc;
  }
  n = o.bind(null, t, n, e), o = void 0, !au || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function dl(e, t, n, r, o) {
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
  $m(function() {
    var u = s, c = Cc(n), d = [];
    e: {
      var f = yg.get(e);
      if (f !== void 0) {
        var h = Rc, w = e;
        switch (e) {
          case "keypress":
            if (xi(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = D1;
            break;
          case "focusin":
            w = "focus", h = ol;
            break;
          case "focusout":
            w = "blur", h = ol;
            break;
          case "beforeblur":
          case "afterblur":
            h = ol;
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
            h = Tf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = g1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = A1;
            break;
          case pg:
          case hg:
          case mg:
            h = x1;
            break;
          case gg:
            h = j1;
            break;
          case "scroll":
            h = h1;
            break;
          case "wheel":
            h = _1;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = S1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Nf;
        }
        var y = (t & 4) !== 0, S = !y && e === "scroll", m = y ? f !== null ? f + "Capture" : null : f;
        y = [];
        for (var g = u, v; g !== null; ) {
          v = g;
          var b = v.stateNode;
          if (v.tag === 5 && b !== null && (v = b, m !== null && (b = Qo(g, m), b != null && y.push(rs(g, b, v)))), S) break;
          g = g.return;
        }
        0 < y.length && (f = new h(f, w, null, n, c), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", h = e === "mouseout" || e === "pointerout", f && n !== su && (w = n.relatedTarget || n.fromElement) && (Kn(w) || w[Qt])) break e;
        if ((h || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, h ? (w = n.relatedTarget || n.toElement, h = u, w = w ? Kn(w) : null, w !== null && (S = cr(w), w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (h = null, w = u), h !== w)) {
          if (y = Tf, b = "onMouseLeave", m = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (y = Nf, b = "onPointerLeave", m = "onPointerEnter", g = "pointer"), S = h == null ? f : Sr(h), v = w == null ? f : Sr(w), f = new y(b, g + "leave", h, n, c), f.target = S, f.relatedTarget = v, b = null, Kn(c) === u && (y = new y(m, g + "enter", w, n, c), y.target = v, y.relatedTarget = S, b = y), S = b, h && w) t: {
            for (y = h, m = w, g = 0, v = y; v; v = fr(v)) g++;
            for (v = 0, b = m; b; b = fr(b)) v++;
            for (; 0 < g - v; ) y = fr(y), g--;
            for (; 0 < v - g; ) m = fr(m), v--;
            for (; g--; ) {
              if (y === m || m !== null && y === m.alternate) break t;
              y = fr(y), m = fr(m);
            }
            y = null;
          }
          else y = null;
          h !== null && zf(d, f, h, y, !1), w !== null && S !== null && zf(d, S, w, y, !0);
        }
      }
      e: {
        if (f = u ? Sr(u) : window, h = f.nodeName && f.nodeName.toLowerCase(), h === "select" || h === "input" && f.type === "file") var k = $1;
        else if (Mf(f)) if (lg) k = K1;
        else {
          k = W1;
          var P = U1;
        }
        else (h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = H1);
        if (k && (k = k(e, u))) {
          ag(d, k, n, c);
          break e;
        }
        P && P(e, f, u), e === "focusout" && (P = f._wrapperState) && P.controlled && f.type === "number" && eu(f, "number", f.value);
      }
      switch (P = u ? Sr(u) : window, e) {
        case "focusin":
          (Mf(P) || P.contentEditable === "true") && (xr = P, fu = u, Vo = null);
          break;
        case "focusout":
          Vo = fu = xr = null;
          break;
        case "mousedown":
          pu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          pu = !1, Of(d, n, c);
          break;
        case "selectionchange":
          if (X1) break;
        case "keydown":
        case "keyup":
          Of(d, n, c);
      }
      var C;
      if (Mc) e: {
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
      else vr ? sg(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (og && n.locale !== "ko" && (vr || E !== "onCompositionStart" ? E === "onCompositionEnd" && vr && (C = rg()) : (mn = c, Nc = "value" in mn ? mn.value : mn.textContent, vr = !0)), P = Bi(u, E), 0 < P.length && (E = new Df(E, e, null, n, c), d.push({ event: E, listeners: P }), C ? E.data = C : (C = ig(n), C !== null && (E.data = C)))), (C = O1 ? F1(e, n) : V1(e, n)) && (u = Bi(u, "onBeforeInput"), 0 < u.length && (c = new Df("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = C));
    }
    vg(d, t);
  });
}
function rs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Bi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, s = o.stateNode;
    o.tag === 5 && s !== null && (o = s, s = Qo(e, n), s != null && r.unshift(rs(e, s, o)), s = Qo(e, t), s != null && r.push(rs(e, s, o))), e = e.return;
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
function zf(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && u !== null && (a = u, o ? (l = Qo(n, s), l != null && i.unshift(rs(n, l, a))) : o || (l = Qo(n, s), l != null && i.push(rs(n, l, a)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var J1 = /\r\n?/g, eS = /\u0000|\uFFFD/g;
function Bf(e) {
  return (typeof e == "string" ? e : "" + e).replace(J1, `
`).replace(eS, "");
}
function Ks(e, t, n) {
  if (t = Bf(t), Bf(e) !== t && n) throw Error(R(425));
}
function $i() {
}
var hu = null, mu = null;
function gu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var yu = typeof setTimeout == "function" ? setTimeout : void 0, tS = typeof clearTimeout == "function" ? clearTimeout : void 0, $f = typeof Promise == "function" ? Promise : void 0, nS = typeof queueMicrotask == "function" ? queueMicrotask : typeof $f < "u" ? function(e) {
  return $f.resolve(null).then(e).catch(rS);
} : yu;
function rS(e) {
  setTimeout(function() {
    throw e;
  });
}
function fl(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Jo(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Jo(t);
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
function Uf(e) {
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
var ro = Math.random().toString(36).slice(2), At = "__reactFiber$" + ro, os = "__reactProps$" + ro, Qt = "__reactContainer$" + ro, vu = "__reactEvents$" + ro, oS = "__reactListeners$" + ro, sS = "__reactHandles$" + ro;
function Kn(e) {
  var t = e[At];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Qt] || n[At]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Uf(e); e !== null; ) {
        if (n = e[At]) return n;
        e = Uf(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Es(e) {
  return e = e[At] || e[Qt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Sr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function ba(e) {
  return e[os] || null;
}
var xu = [], br = -1;
function _n(e) {
  return { current: e };
}
function ce(e) {
  0 > br || (e.current = xu[br], xu[br] = null, br--);
}
function ie(e, t) {
  br++, xu[br] = e.current, e.current = t;
}
var Dn = {}, ze = _n(Dn), Ye = _n(!1), Jn = Dn;
function Ur(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Dn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, s;
  for (s in n) o[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Xe(e) {
  return e = e.childContextTypes, e != null;
}
function Ui() {
  ce(Ye), ce(ze);
}
function Wf(e, t, n) {
  if (ze.current !== Dn) throw Error(R(168));
  ie(ze, t), ie(Ye, n);
}
function wg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(R(108, Uw(e) || "Unknown", o));
  return ge({}, n, r);
}
function Wi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Dn, Jn = ze.current, ie(ze, e), ie(Ye, Ye.current), !0;
}
function Hf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n ? (e = wg(e, t, Jn), r.__reactInternalMemoizedMergedChildContext = e, ce(Ye), ce(ze), ie(ze, e)) : ce(Ye), ie(Ye, n);
}
var Ut = null, ka = !1, pl = !1;
function Sg(e) {
  Ut === null ? Ut = [e] : Ut.push(e);
}
function iS(e) {
  ka = !0, Sg(e);
}
function In() {
  if (!pl && Ut !== null) {
    pl = !0;
    var e = 0, t = J;
    try {
      var n = Ut;
      for (J = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ut = null, ka = !1;
    } catch (o) {
      throw Ut !== null && (Ut = Ut.slice(e + 1)), Km(Ec, In), o;
    } finally {
      J = t, pl = !1;
    }
  }
  return null;
}
var kr = [], Cr = 0, Hi = null, Ki = 0, ct = [], dt = 0, er = null, Wt = 1, Ht = "";
function $n(e, t) {
  kr[Cr++] = Ki, kr[Cr++] = Hi, Hi = e, Ki = t;
}
function bg(e, t, n) {
  ct[dt++] = Wt, ct[dt++] = Ht, ct[dt++] = er, er = e;
  var r = Wt;
  e = Ht;
  var o = 32 - bt(r) - 1;
  r &= ~(1 << o), n += 1;
  var s = 32 - bt(t) + o;
  if (30 < s) {
    var i = o - o % 5;
    s = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Wt = 1 << 32 - bt(t) + o | n << o | r, Ht = s + e;
  } else Wt = 1 << s | n << o | r, Ht = e;
}
function Lc(e) {
  e.return !== null && ($n(e, 1), bg(e, 1, 0));
}
function _c(e) {
  for (; e === Hi; ) Hi = kr[--Cr], kr[Cr] = null, Ki = kr[--Cr], kr[Cr] = null;
  for (; e === er; ) er = ct[--dt], ct[dt] = null, Ht = ct[--dt], ct[dt] = null, Wt = ct[--dt], ct[dt] = null;
}
var tt = null, et = null, fe = !1, St = null;
function kg(e, t) {
  var n = ft(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Kf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, tt = e, et = wn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, tt = e, et = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = er !== null ? { id: Wt, overflow: Ht } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ft(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, tt = e, et = null, !0) : !1;
    default:
      return !1;
  }
}
function wu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Su(e) {
  if (fe) {
    var t = et;
    if (t) {
      var n = t;
      if (!Kf(e, t)) {
        if (wu(e)) throw Error(R(418));
        t = wn(n.nextSibling);
        var r = tt;
        t && Kf(e, t) ? kg(r, n) : (e.flags = e.flags & -4097 | 2, fe = !1, tt = e);
      }
    } else {
      if (wu(e)) throw Error(R(418));
      e.flags = e.flags & -4097 | 2, fe = !1, tt = e;
    }
  }
}
function Gf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  tt = e;
}
function Gs(e) {
  if (e !== tt) return !1;
  if (!fe) return Gf(e), fe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !gu(e.type, e.memoizedProps)), t && (t = et)) {
    if (wu(e)) throw Cg(), Error(R(418));
    for (; t; ) kg(e, t), t = wn(t.nextSibling);
  }
  if (Gf(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              et = wn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      et = null;
    }
  } else et = tt ? wn(e.stateNode.nextSibling) : null;
  return !0;
}
function Cg() {
  for (var e = et; e; ) e = wn(e.nextSibling);
}
function Wr() {
  et = tt = null, fe = !1;
}
function Ic(e) {
  St === null ? St = [e] : St.push(e);
}
var aS = nn.ReactCurrentBatchConfig;
function So(e, t, n) {
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
function Ys(e, t) {
  throw e = Object.prototype.toString.call(t), Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Yf(e) {
  var t = e._init;
  return t(e._payload);
}
function Eg(e) {
  function t(m, g) {
    if (e) {
      var v = m.deletions;
      v === null ? (m.deletions = [g], m.flags |= 16) : v.push(g);
    }
  }
  function n(m, g) {
    if (!e) return null;
    for (; g !== null; ) t(m, g), g = g.sibling;
    return null;
  }
  function r(m, g) {
    for (m = /* @__PURE__ */ new Map(); g !== null; ) g.key !== null ? m.set(g.key, g) : m.set(g.index, g), g = g.sibling;
    return m;
  }
  function o(m, g) {
    return m = Cn(m, g), m.index = 0, m.sibling = null, m;
  }
  function s(m, g, v) {
    return m.index = v, e ? (v = m.alternate, v !== null ? (v = v.index, v < g ? (m.flags |= 2, g) : v) : (m.flags |= 2, g)) : (m.flags |= 1048576, g);
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, g, v, b) {
    return g === null || g.tag !== 6 ? (g = wl(v, m.mode, b), g.return = m, g) : (g = o(g, v), g.return = m, g);
  }
  function l(m, g, v, b) {
    var k = v.type;
    return k === yr ? c(m, g, v.props.children, b, v.key) : g !== null && (g.elementType === k || typeof k == "object" && k !== null && k.$$typeof === cn && Yf(k) === g.type) ? (b = o(g, v.props), b.ref = So(m, g, v), b.return = m, b) : (b = Pi(v.type, v.key, v.props, null, m.mode, b), b.ref = So(m, g, v), b.return = m, b);
  }
  function u(m, g, v, b) {
    return g === null || g.tag !== 4 || g.stateNode.containerInfo !== v.containerInfo || g.stateNode.implementation !== v.implementation ? (g = Sl(v, m.mode, b), g.return = m, g) : (g = o(g, v.children || []), g.return = m, g);
  }
  function c(m, g, v, b, k) {
    return g === null || g.tag !== 7 ? (g = qn(v, m.mode, b, k), g.return = m, g) : (g = o(g, v), g.return = m, g);
  }
  function d(m, g, v) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return g = wl("" + g, m.mode, v), g.return = m, g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Os:
          return v = Pi(g.type, g.key, g.props, null, m.mode, v), v.ref = So(m, null, g), v.return = m, v;
        case gr:
          return g = Sl(g, m.mode, v), g.return = m, g;
        case cn:
          var b = g._init;
          return d(m, b(g._payload), v);
      }
      if (Do(g) || go(g)) return g = qn(g, m.mode, v, null), g.return = m, g;
      Ys(m, g);
    }
    return null;
  }
  function f(m, g, v, b) {
    var k = g !== null ? g.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number") return k !== null ? null : a(m, g, "" + v, b);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Os:
          return v.key === k ? l(m, g, v, b) : null;
        case gr:
          return v.key === k ? u(m, g, v, b) : null;
        case cn:
          return k = v._init, f(
            m,
            g,
            k(v._payload),
            b
          );
      }
      if (Do(v) || go(v)) return k !== null ? null : c(m, g, v, b, null);
      Ys(m, v);
    }
    return null;
  }
  function h(m, g, v, b, k) {
    if (typeof b == "string" && b !== "" || typeof b == "number") return m = m.get(v) || null, a(g, m, "" + b, k);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Os:
          return m = m.get(b.key === null ? v : b.key) || null, l(g, m, b, k);
        case gr:
          return m = m.get(b.key === null ? v : b.key) || null, u(g, m, b, k);
        case cn:
          var P = b._init;
          return h(m, g, v, P(b._payload), k);
      }
      if (Do(b) || go(b)) return m = m.get(v) || null, c(g, m, b, k, null);
      Ys(g, b);
    }
    return null;
  }
  function w(m, g, v, b) {
    for (var k = null, P = null, C = g, E = g = 0, D = null; C !== null && E < v.length; E++) {
      C.index > E ? (D = C, C = null) : D = C.sibling;
      var N = f(m, C, v[E], b);
      if (N === null) {
        C === null && (C = D);
        break;
      }
      e && C && N.alternate === null && t(m, C), g = s(N, g, E), P === null ? k = N : P.sibling = N, P = N, C = D;
    }
    if (E === v.length) return n(m, C), fe && $n(m, E), k;
    if (C === null) {
      for (; E < v.length; E++) C = d(m, v[E], b), C !== null && (g = s(C, g, E), P === null ? k = C : P.sibling = C, P = C);
      return fe && $n(m, E), k;
    }
    for (C = r(m, C); E < v.length; E++) D = h(C, m, E, v[E], b), D !== null && (e && D.alternate !== null && C.delete(D.key === null ? E : D.key), g = s(D, g, E), P === null ? k = D : P.sibling = D, P = D);
    return e && C.forEach(function(j) {
      return t(m, j);
    }), fe && $n(m, E), k;
  }
  function y(m, g, v, b) {
    var k = go(v);
    if (typeof k != "function") throw Error(R(150));
    if (v = k.call(v), v == null) throw Error(R(151));
    for (var P = k = null, C = g, E = g = 0, D = null, N = v.next(); C !== null && !N.done; E++, N = v.next()) {
      C.index > E ? (D = C, C = null) : D = C.sibling;
      var j = f(m, C, N.value, b);
      if (j === null) {
        C === null && (C = D);
        break;
      }
      e && C && j.alternate === null && t(m, C), g = s(j, g, E), P === null ? k = j : P.sibling = j, P = j, C = D;
    }
    if (N.done) return n(
      m,
      C
    ), fe && $n(m, E), k;
    if (C === null) {
      for (; !N.done; E++, N = v.next()) N = d(m, N.value, b), N !== null && (g = s(N, g, E), P === null ? k = N : P.sibling = N, P = N);
      return fe && $n(m, E), k;
    }
    for (C = r(m, C); !N.done; E++, N = v.next()) N = h(C, m, E, N.value, b), N !== null && (e && N.alternate !== null && C.delete(N.key === null ? E : N.key), g = s(N, g, E), P === null ? k = N : P.sibling = N, P = N);
    return e && C.forEach(function(A) {
      return t(m, A);
    }), fe && $n(m, E), k;
  }
  function S(m, g, v, b) {
    if (typeof v == "object" && v !== null && v.type === yr && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Os:
          e: {
            for (var k = v.key, P = g; P !== null; ) {
              if (P.key === k) {
                if (k = v.type, k === yr) {
                  if (P.tag === 7) {
                    n(m, P.sibling), g = o(P, v.props.children), g.return = m, m = g;
                    break e;
                  }
                } else if (P.elementType === k || typeof k == "object" && k !== null && k.$$typeof === cn && Yf(k) === P.type) {
                  n(m, P.sibling), g = o(P, v.props), g.ref = So(m, P, v), g.return = m, m = g;
                  break e;
                }
                n(m, P);
                break;
              } else t(m, P);
              P = P.sibling;
            }
            v.type === yr ? (g = qn(v.props.children, m.mode, b, v.key), g.return = m, m = g) : (b = Pi(v.type, v.key, v.props, null, m.mode, b), b.ref = So(m, g, v), b.return = m, m = b);
          }
          return i(m);
        case gr:
          e: {
            for (P = v.key; g !== null; ) {
              if (g.key === P) if (g.tag === 4 && g.stateNode.containerInfo === v.containerInfo && g.stateNode.implementation === v.implementation) {
                n(m, g.sibling), g = o(g, v.children || []), g.return = m, m = g;
                break e;
              } else {
                n(m, g);
                break;
              }
              else t(m, g);
              g = g.sibling;
            }
            g = Sl(v, m.mode, b), g.return = m, m = g;
          }
          return i(m);
        case cn:
          return P = v._init, S(m, g, P(v._payload), b);
      }
      if (Do(v)) return w(m, g, v, b);
      if (go(v)) return y(m, g, v, b);
      Ys(m, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, g !== null && g.tag === 6 ? (n(m, g.sibling), g = o(g, v), g.return = m, m = g) : (n(m, g), g = wl(v, m.mode, b), g.return = m, m = g), i(m)) : n(m, g);
  }
  return S;
}
var Hr = Eg(!0), Pg = Eg(!1), Gi = _n(null), Yi = null, Er = null, Oc = null;
function Fc() {
  Oc = Er = Yi = null;
}
function Vc(e) {
  var t = Gi.current;
  ce(Gi), e._currentValue = t;
}
function bu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Or(e, t) {
  Yi = e, Oc = Er = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ge = !0), e.firstContext = null);
}
function ht(e) {
  var t = e._currentValue;
  if (Oc !== e) if (e = { context: e, memoizedValue: t, next: null }, Er === null) {
    if (Yi === null) throw Error(R(308));
    Er = e, Yi.dependencies = { lanes: 0, firstContext: e };
  } else Er = Er.next = e;
  return t;
}
var Gn = null;
function zc(e) {
  Gn === null ? Gn = [e] : Gn.push(e);
}
function Tg(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, zc(t)) : (n.next = o.next, o.next = n), t.interleaved = n, qt(e, r);
}
function qt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var dn = !1;
function Bc(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Dg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Kt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Sn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, q & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, qt(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, zc(r)) : (t.next = o.next, o.next = t), r.interleaved = t, qt(e, n);
}
function wi(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Pc(e, n);
  }
}
function Xf(e, t) {
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
function Xi(e, t, n, r) {
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
              d = ge({}, d, f);
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
function Qf(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(R(191, o));
      o.call(r);
    }
  }
}
var Ps = {}, _t = _n(Ps), ss = _n(Ps), is = _n(Ps);
function Yn(e) {
  if (e === Ps) throw Error(R(174));
  return e;
}
function $c(e, t) {
  switch (ie(is, t), ie(ss, e), ie(_t, Ps), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : nu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = nu(t, e);
  }
  ce(_t), ie(_t, t);
}
function Kr() {
  ce(_t), ce(ss), ce(is);
}
function Ng(e) {
  Yn(is.current);
  var t = Yn(_t.current), n = nu(t, e.type);
  t !== n && (ie(ss, e), ie(_t, n));
}
function Uc(e) {
  ss.current === e && (ce(_t), ce(ss));
}
var pe = _n(0);
function Qi(e) {
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
var hl = [];
function Wc() {
  for (var e = 0; e < hl.length; e++) hl[e]._workInProgressVersionPrimary = null;
  hl.length = 0;
}
var Si = nn.ReactCurrentDispatcher, ml = nn.ReactCurrentBatchConfig, tr = 0, me = null, Ee = null, Te = null, qi = !1, zo = !1, as = 0, lS = 0;
function _e() {
  throw Error(R(321));
}
function Hc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ct(e[n], t[n])) return !1;
  return !0;
}
function Kc(e, t, n, r, o, s) {
  if (tr = s, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Si.current = e === null || e.memoizedState === null ? fS : pS, e = n(r, o), zo) {
    s = 0;
    do {
      if (zo = !1, as = 0, 25 <= s) throw Error(R(301));
      s += 1, Te = Ee = null, t.updateQueue = null, Si.current = hS, e = n(r, o);
    } while (zo);
  }
  if (Si.current = Zi, t = Ee !== null && Ee.next !== null, tr = 0, Te = Ee = me = null, qi = !1, t) throw Error(R(300));
  return e;
}
function Gc() {
  var e = as !== 0;
  return as = 0, e;
}
function Rt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Te === null ? me.memoizedState = Te = e : Te = Te.next = e, Te;
}
function mt() {
  if (Ee === null) {
    var e = me.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ee.next;
  var t = Te === null ? me.memoizedState : Te.next;
  if (t !== null) Te = t, Ee = e;
  else {
    if (e === null) throw Error(R(310));
    Ee = e, e = { memoizedState: Ee.memoizedState, baseState: Ee.baseState, baseQueue: Ee.baseQueue, queue: Ee.queue, next: null }, Te === null ? me.memoizedState = Te = e : Te = Te.next = e;
  }
  return Te;
}
function ls(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function gl(e) {
  var t = mt(), n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = Ee, o = r.baseQueue, s = n.pending;
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
        l === null ? (a = l = d, i = r) : l = l.next = d, me.lanes |= c, nr |= c;
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? i = r : l.next = a, Ct(r, t.memoizedState) || (Ge = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      s = o.lane, me.lanes |= s, nr |= s, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function yl(e) {
  var t = mt(), n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      s = e(s, i.action), i = i.next;
    while (i !== o);
    Ct(s, t.memoizedState) || (Ge = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function Rg() {
}
function Ag(e, t) {
  var n = me, r = mt(), o = t(), s = !Ct(r.memoizedState, o);
  if (s && (r.memoizedState = o, Ge = !0), r = r.queue, Yc(Lg.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || Te !== null && Te.memoizedState.tag & 1) {
    if (n.flags |= 2048, us(9, jg.bind(null, n, r, o, t), void 0, null), De === null) throw Error(R(349));
    tr & 30 || Mg(n, t, o);
  }
  return o;
}
function Mg(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function jg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, _g(t) && Ig(e);
}
function Lg(e, t, n) {
  return n(function() {
    _g(t) && Ig(e);
  });
}
function _g(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ct(e, n);
  } catch {
    return !0;
  }
}
function Ig(e) {
  var t = qt(e, 1);
  t !== null && kt(t, e, 1, -1);
}
function qf(e) {
  var t = Rt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ls, lastRenderedState: e }, t.queue = e, e = e.dispatch = dS.bind(null, me, e), [t.memoizedState, e];
}
function us(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Og() {
  return mt().memoizedState;
}
function bi(e, t, n, r) {
  var o = Rt();
  me.flags |= e, o.memoizedState = us(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ca(e, t, n, r) {
  var o = mt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Ee !== null) {
    var i = Ee.memoizedState;
    if (s = i.destroy, r !== null && Hc(r, i.deps)) {
      o.memoizedState = us(t, n, s, r);
      return;
    }
  }
  me.flags |= e, o.memoizedState = us(1 | t, n, s, r);
}
function Zf(e, t) {
  return bi(8390656, 8, e, t);
}
function Yc(e, t) {
  return Ca(2048, 8, e, t);
}
function Fg(e, t) {
  return Ca(4, 2, e, t);
}
function Vg(e, t) {
  return Ca(4, 4, e, t);
}
function zg(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Bg(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ca(4, 4, zg.bind(null, t, e), n);
}
function Xc() {
}
function $g(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ug(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Wg(e, t, n) {
  return tr & 21 ? (Ct(n, t) || (n = Xm(), me.lanes |= n, nr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ge = !0), e.memoizedState = n);
}
function uS(e, t) {
  var n = J;
  J = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ml.transition;
  ml.transition = {};
  try {
    e(!1), t();
  } finally {
    J = n, ml.transition = r;
  }
}
function Hg() {
  return mt().memoizedState;
}
function cS(e, t, n) {
  var r = kn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Kg(e)) Gg(t, n);
  else if (n = Tg(e, t, n, r), n !== null) {
    var o = Ue();
    kt(n, e, r, o), Yg(n, t, r);
  }
}
function dS(e, t, n) {
  var r = kn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Kg(e)) Gg(t, o);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var i = t.lastRenderedState, a = s(i, n);
      if (o.hasEagerState = !0, o.eagerState = a, Ct(a, i)) {
        var l = t.interleaved;
        l === null ? (o.next = o, zc(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Tg(e, t, o, r), n !== null && (o = Ue(), kt(n, e, r, o), Yg(n, t, r));
  }
}
function Kg(e) {
  var t = e.alternate;
  return e === me || t !== null && t === me;
}
function Gg(e, t) {
  zo = qi = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Yg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Pc(e, n);
  }
}
var Zi = { readContext: ht, useCallback: _e, useContext: _e, useEffect: _e, useImperativeHandle: _e, useInsertionEffect: _e, useLayoutEffect: _e, useMemo: _e, useReducer: _e, useRef: _e, useState: _e, useDebugValue: _e, useDeferredValue: _e, useTransition: _e, useMutableSource: _e, useSyncExternalStore: _e, useId: _e, unstable_isNewReconciler: !1 }, fS = { readContext: ht, useCallback: function(e, t) {
  return Rt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ht, useEffect: Zf, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, bi(
    4194308,
    4,
    zg.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return bi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return bi(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Rt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Rt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = cS.bind(null, me, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Rt();
  return e = { current: e }, t.memoizedState = e;
}, useState: qf, useDebugValue: Xc, useDeferredValue: function(e) {
  return Rt().memoizedState = e;
}, useTransition: function() {
  var e = qf(!1), t = e[0];
  return e = uS.bind(null, e[1]), Rt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = me, o = Rt();
  if (fe) {
    if (n === void 0) throw Error(R(407));
    n = n();
  } else {
    if (n = t(), De === null) throw Error(R(349));
    tr & 30 || Mg(r, t, n);
  }
  o.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return o.queue = s, Zf(Lg.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, us(9, jg.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = Rt(), t = De.identifierPrefix;
  if (fe) {
    var n = Ht, r = Wt;
    n = (r & ~(1 << 32 - bt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = as++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = lS++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, pS = {
  readContext: ht,
  useCallback: $g,
  useContext: ht,
  useEffect: Yc,
  useImperativeHandle: Bg,
  useInsertionEffect: Fg,
  useLayoutEffect: Vg,
  useMemo: Ug,
  useReducer: gl,
  useRef: Og,
  useState: function() {
    return gl(ls);
  },
  useDebugValue: Xc,
  useDeferredValue: function(e) {
    var t = mt();
    return Wg(t, Ee.memoizedState, e);
  },
  useTransition: function() {
    var e = gl(ls)[0], t = mt().memoizedState;
    return [e, t];
  },
  useMutableSource: Rg,
  useSyncExternalStore: Ag,
  useId: Hg,
  unstable_isNewReconciler: !1
}, hS = { readContext: ht, useCallback: $g, useContext: ht, useEffect: Yc, useImperativeHandle: Bg, useInsertionEffect: Fg, useLayoutEffect: Vg, useMemo: Ug, useReducer: yl, useRef: Og, useState: function() {
  return yl(ls);
}, useDebugValue: Xc, useDeferredValue: function(e) {
  var t = mt();
  return Ee === null ? t.memoizedState = e : Wg(t, Ee.memoizedState, e);
}, useTransition: function() {
  var e = yl(ls)[0], t = mt().memoizedState;
  return [e, t];
}, useMutableSource: Rg, useSyncExternalStore: Ag, useId: Hg, unstable_isNewReconciler: !1 };
function xt(e, t) {
  if (e && e.defaultProps) {
    t = ge({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ku(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ge({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ea = { isMounted: function(e) {
  return (e = e._reactInternals) ? cr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ue(), o = kn(e), s = Kt(r, o);
  s.payload = t, n != null && (s.callback = n), t = Sn(e, s, o), t !== null && (kt(t, e, o, r), wi(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ue(), o = kn(e), s = Kt(r, o);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Sn(e, s, o), t !== null && (kt(t, e, o, r), wi(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ue(), r = kn(e), o = Kt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Sn(e, o, r), t !== null && (kt(t, e, r, n), wi(t, e, r));
} };
function Jf(e, t, n, r, o, s, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !ts(n, r) || !ts(o, s) : !0;
}
function Xg(e, t, n) {
  var r = !1, o = Dn, s = t.contextType;
  return typeof s == "object" && s !== null ? s = ht(s) : (o = Xe(t) ? Jn : ze.current, r = t.contextTypes, s = (r = r != null) ? Ur(e, o) : Dn), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ea, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function ep(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ea.enqueueReplaceState(t, t.state, null);
}
function Cu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Bc(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? o.context = ht(s) : (s = Xe(t) ? Jn : ze.current, o.context = Ur(e, s)), o.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (ku(e, t, s, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ea.enqueueReplaceState(o, o.state, null), Xi(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Gr(e, t) {
  try {
    var n = "", r = t;
    do
      n += $w(r), r = r.return;
    while (r);
    var o = n;
  } catch (s) {
    o = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function vl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Eu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var mS = typeof WeakMap == "function" ? WeakMap : Map;
function Qg(e, t, n) {
  n = Kt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ea || (ea = !0, _u = r), Eu(e, t);
  }, n;
}
function qg(e, t, n) {
  n = Kt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Eu(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    Eu(e, t), typeof r != "function" && (bn === null ? bn = /* @__PURE__ */ new Set([this]) : bn.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function tp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new mS();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = NS.bind(null, e, t, n), t.then(e, e));
}
function np(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function rp(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Kt(-1, 1), t.tag = 2, Sn(n, t, 1))), n.lanes |= 1), e);
}
var gS = nn.ReactCurrentOwner, Ge = !1;
function $e(e, t, n, r) {
  t.child = e === null ? Pg(t, null, n, r) : Hr(t, e.child, n, r);
}
function op(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return Or(t, o), r = Kc(e, t, n, r, s, o), n = Gc(), e !== null && !Ge ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Zt(e, t, o)) : (fe && n && Lc(t), t.flags |= 1, $e(e, t, r, o), t.child);
}
function sp(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !rd(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, Zg(e, t, s, r, o)) : (e = Pi(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & o)) {
    var i = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ts, n(i, r) && e.ref === t.ref) return Zt(e, t, o);
  }
  return t.flags |= 1, e = Cn(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Zg(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (ts(s, r) && e.ref === t.ref) if (Ge = !1, t.pendingProps = r = s, (e.lanes & o) !== 0) e.flags & 131072 && (Ge = !0);
    else return t.lanes = e.lanes, Zt(e, t, o);
  }
  return Pu(e, t, n, r, o);
}
function Jg(e, t, n) {
  var r = t.pendingProps, o = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ie(Tr, Ze), Ze |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ie(Tr, Ze), Ze |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, ie(Tr, Ze), Ze |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, ie(Tr, Ze), Ze |= r;
  return $e(e, t, o, n), t.child;
}
function ey(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Pu(e, t, n, r, o) {
  var s = Xe(n) ? Jn : ze.current;
  return s = Ur(t, s), Or(t, o), n = Kc(e, t, n, r, s, o), r = Gc(), e !== null && !Ge ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Zt(e, t, o)) : (fe && r && Lc(t), t.flags |= 1, $e(e, t, n, o), t.child);
}
function ip(e, t, n, r, o) {
  if (Xe(n)) {
    var s = !0;
    Wi(t);
  } else s = !1;
  if (Or(t, o), t.stateNode === null) ki(e, t), Xg(t, n, r), Cu(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, a = t.memoizedProps;
    i.props = a;
    var l = i.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = ht(u) : (u = Xe(n) ? Jn : ze.current, u = Ur(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || l !== u) && ep(t, i, r, u), dn = !1;
    var f = t.memoizedState;
    i.state = f, Xi(t, r, i, o), l = t.memoizedState, a !== r || f !== l || Ye.current || dn ? (typeof c == "function" && (ku(t, n, c, r), l = t.memoizedState), (a = dn || Jf(t, n, a, r, f, l, u)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), i.props = r, i.state = l, i.context = u, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Dg(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : xt(t.type, a), i.props = u, d = t.pendingProps, f = i.context, l = n.contextType, typeof l == "object" && l !== null ? l = ht(l) : (l = Xe(n) ? Jn : ze.current, l = Ur(t, l));
    var h = n.getDerivedStateFromProps;
    (c = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== d || f !== l) && ep(t, i, r, l), dn = !1, f = t.memoizedState, i.state = f, Xi(t, r, i, o);
    var w = t.memoizedState;
    a !== d || f !== w || Ye.current || dn ? (typeof h == "function" && (ku(t, n, h, r), w = t.memoizedState), (u = dn || Jf(t, n, u, r, f, w, l) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, l), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, l)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = l, r = u) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Tu(e, t, n, r, s, o);
}
function Tu(e, t, n, r, o, s) {
  ey(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Hf(t, n, !1), Zt(e, t, s);
  r = t.stateNode, gS.current = t;
  var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Hr(t, e.child, null, s), t.child = Hr(t, null, a, s)) : $e(e, t, a, s), t.memoizedState = r.state, o && Hf(t, n, !0), t.child;
}
function ty(e) {
  var t = e.stateNode;
  t.pendingContext ? Wf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Wf(e, t.context, !1), $c(e, t.containerInfo);
}
function ap(e, t, n, r, o) {
  return Wr(), Ic(o), t.flags |= 256, $e(e, t, n, r), t.child;
}
var Du = { dehydrated: null, treeContext: null, retryLane: 0 };
function Nu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ny(e, t, n) {
  var r = t.pendingProps, o = pe.current, s = !1, i = (t.flags & 128) !== 0, a;
  if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ie(pe, o & 1), e === null)
    return Su(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, i = { mode: "hidden", children: i }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = i) : s = Da(i, r, 0, null), e = qn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Nu(n), t.memoizedState = Du, e) : Qc(t, i));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return yS(e, t, i, r, a, o, n);
  if (s) {
    s = r.fallback, i = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Cn(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? s = Cn(a, s) : (s = qn(s, i, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, i = e.child.memoizedState, i = i === null ? Nu(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, s.memoizedState = i, s.childLanes = e.childLanes & ~n, t.memoizedState = Du, r;
  }
  return s = e.child, e = s.sibling, r = Cn(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Qc(e, t) {
  return t = Da({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Xs(e, t, n, r) {
  return r !== null && Ic(r), Hr(t, e.child, null, n), e = Qc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function yS(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = vl(Error(R(422))), Xs(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, o = t.mode, r = Da({ mode: "visible", children: r.children }, o, 0, null), s = qn(s, o, i, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Hr(t, e.child, null, i), t.child.memoizedState = Nu(i), t.memoizedState = Du, s);
  if (!(t.mode & 1)) return Xs(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
    return r = a, s = Error(R(419)), r = vl(s, r, void 0), Xs(e, t, i, r);
  }
  if (a = (i & e.childLanes) !== 0, Ge || a) {
    if (r = De, r !== null) {
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
    return nd(), r = vl(Error(R(421))), Xs(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = RS.bind(null, e), o._reactRetry = t, null) : (e = s.treeContext, et = wn(o.nextSibling), tt = t, fe = !0, St = null, e !== null && (ct[dt++] = Wt, ct[dt++] = Ht, ct[dt++] = er, Wt = e.id, Ht = e.overflow, er = t), t = Qc(t, r.children), t.flags |= 4096, t);
}
function lp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), bu(e.return, t, n);
}
function xl(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = o);
}
function ry(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, s = r.tail;
  if ($e(e, t, r.children, n), r = pe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && lp(e, n, t);
      else if (e.tag === 19) lp(e, n, t);
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
  if (ie(pe, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Qi(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), xl(t, !1, o, n, s);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Qi(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      xl(t, !0, n, null, s);
      break;
    case "together":
      xl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ki(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Zt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), nr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (e = t.child, n = Cn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Cn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function vS(e, t, n) {
  switch (t.tag) {
    case 3:
      ty(t), Wr();
      break;
    case 5:
      Ng(t);
      break;
    case 1:
      Xe(t.type) && Wi(t);
      break;
    case 4:
      $c(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      ie(Gi, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ie(pe, pe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ny(e, t, n) : (ie(pe, pe.current & 1), e = Zt(e, t, n), e !== null ? e.sibling : null);
      ie(pe, pe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return ry(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ie(pe, pe.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Jg(e, t, n);
  }
  return Zt(e, t, n);
}
var oy, Ru, sy, iy;
oy = function(e, t) {
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
Ru = function() {
};
sy = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Yn(_t.current);
    var s = null;
    switch (n) {
      case "input":
        o = Zl(e, o), r = Zl(e, r), s = [];
        break;
      case "select":
        o = ge({}, o, { value: void 0 }), r = ge({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        o = tu(e, o), r = tu(e, r), s = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $i);
    }
    ru(n, r);
    var i;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var a = o[u];
      for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Yo.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (a = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null)) if (u === "style") if (a) {
        for (i in a) !a.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in l) l.hasOwnProperty(i) && a[i] !== l[i] && (n || (n = {}), n[i] = l[i]);
      } else n || (s || (s = []), s.push(
        u,
        n
      )), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Yo.hasOwnProperty(u) ? (l != null && u === "onScroll" && ue("scroll", e), s || a === l || (s = [])) : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
iy = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function bo(e, t) {
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
function Ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function xS(e, t, n) {
  var r = t.pendingProps;
  switch (_c(t), t.tag) {
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
      return Xe(t.type) && Ui(), Ie(t), null;
    case 3:
      return r = t.stateNode, Kr(), ce(Ye), ce(ze), Wc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Gs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, St !== null && (Fu(St), St = null))), Ru(e, t), Ie(t), null;
    case 5:
      Uc(t);
      var o = Yn(is.current);
      if (n = t.type, e !== null && t.stateNode != null) sy(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return Ie(t), null;
        }
        if (e = Yn(_t.current), Gs(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[At] = t, r[os] = s, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < Ro.length; o++) ue(Ro[o], r);
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
              yf(r, s), ue("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, ue("invalid", r);
              break;
            case "textarea":
              xf(r, s), ue("invalid", r);
          }
          ru(n, s), o = null;
          for (var i in s) if (s.hasOwnProperty(i)) {
            var a = s[i];
            i === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && Ks(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && Ks(
              r.textContent,
              a,
              e
            ), o = ["children", "" + a]) : Yo.hasOwnProperty(i) && a != null && i === "onScroll" && ue("scroll", r);
          }
          switch (n) {
            case "input":
              Fs(r), vf(r, s, !0);
              break;
            case "textarea":
              Fs(r), wf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = $i);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Lm(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[At] = t, e[os] = r, oy(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = ou(n, r), n) {
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
                for (o = 0; o < Ro.length; o++) ue(Ro[o], e);
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
                yf(e, r), o = Zl(e, r), ue("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ge({}, r, { value: void 0 }), ue("invalid", e);
                break;
              case "textarea":
                xf(e, r), o = tu(e, r), ue("invalid", e);
                break;
              default:
                o = r;
            }
            ru(n, o), a = o;
            for (s in a) if (a.hasOwnProperty(s)) {
              var l = a[s];
              s === "style" ? Om(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && _m(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Xo(e, l) : typeof l == "number" && Xo(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Yo.hasOwnProperty(s) ? l != null && s === "onScroll" && ue("scroll", e) : l != null && wc(e, s, l, i));
            }
            switch (n) {
              case "input":
                Fs(e), vf(e, r, !1);
                break;
              case "textarea":
                Fs(e), wf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Tn(r.value));
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
                typeof o.onClick == "function" && (e.onclick = $i);
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
      if (e && t.stateNode != null) iy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (n = Yn(is.current), Yn(_t.current), Gs(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[At] = t, (s = r.nodeValue !== n) && (e = tt, e !== null)) switch (e.tag) {
            case 3:
              Ks(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Ks(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[At] = t, t.stateNode = r;
      }
      return Ie(t), null;
    case 13:
      if (ce(pe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (fe && et !== null && t.mode & 1 && !(t.flags & 128)) Cg(), Wr(), t.flags |= 98560, s = !1;
        else if (s = Gs(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(R(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(R(317));
            s[At] = t;
          } else Wr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ie(t), s = !1;
        } else St !== null && (Fu(St), St = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || pe.current & 1 ? Pe === 0 && (Pe = 3) : nd())), t.updateQueue !== null && (t.flags |= 4), Ie(t), null);
    case 4:
      return Kr(), Ru(e, t), e === null && ns(t.stateNode.containerInfo), Ie(t), null;
    case 10:
      return Vc(t.type._context), Ie(t), null;
    case 17:
      return Xe(t.type) && Ui(), Ie(t), null;
    case 19:
      if (ce(pe), s = t.memoizedState, s === null) return Ie(t), null;
      if (r = (t.flags & 128) !== 0, i = s.rendering, i === null) if (r) bo(s, !1);
      else {
        if (Pe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = Qi(e), i !== null) {
            for (t.flags |= 128, bo(s, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, i = s.alternate, i === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = i.childLanes, s.lanes = i.lanes, s.child = i.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = i.memoizedProps, s.memoizedState = i.memoizedState, s.updateQueue = i.updateQueue, s.type = i.type, e = i.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ie(pe, pe.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && be() > Yr && (t.flags |= 128, r = !0, bo(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Qi(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), bo(s, !0), s.tail === null && s.tailMode === "hidden" && !i.alternate && !fe) return Ie(t), null;
        } else 2 * be() - s.renderingStartTime > Yr && n !== 1073741824 && (t.flags |= 128, r = !0, bo(s, !1), t.lanes = 4194304);
        s.isBackwards ? (i.sibling = t.child, t.child = i) : (n = s.last, n !== null ? n.sibling = i : t.child = i, s.last = i);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = be(), t.sibling = null, n = pe.current, ie(pe, r ? n & 1 | 2 : n & 1), t) : (Ie(t), null);
    case 22:
    case 23:
      return td(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ze & 1073741824 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ie(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function wS(e, t) {
  switch (_c(t), t.tag) {
    case 1:
      return Xe(t.type) && Ui(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Kr(), ce(Ye), ce(ze), Wc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Uc(t), null;
    case 13:
      if (ce(pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(R(340));
        Wr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ce(pe), null;
    case 4:
      return Kr(), null;
    case 10:
      return Vc(t.type._context), null;
    case 22:
    case 23:
      return td(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Qs = !1, Fe = !1, SS = typeof WeakSet == "function" ? WeakSet : Set, I = null;
function Pr(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ve(e, t, r);
  }
  else n.current = null;
}
function Au(e, t, n) {
  try {
    n();
  } catch (r) {
    ve(e, t, r);
  }
}
var up = !1;
function bS(e, t) {
  if (hu = Vi, e = dg(), jc(e)) {
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
  for (mu = { focusedElem: e, selectionRange: n }, Vi = !1, I = t; I !== null; ) if (t = I, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, I = e;
  else for (; I !== null; ) {
    t = I;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var y = w.memoizedProps, S = w.memoizedState, m = t.stateNode, g = m.getSnapshotBeforeUpdate(t.elementType === t.type ? y : xt(t.type, y), S);
            m.__reactInternalSnapshotBeforeUpdate = g;
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
      ve(t, t.return, b);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, I = e;
      break;
    }
    I = t.return;
  }
  return w = up, up = !1, w;
}
function Bo(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        o.destroy = void 0, s !== void 0 && Au(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Pa(e, t) {
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
function Mu(e) {
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
function ay(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ay(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[At], delete t[os], delete t[vu], delete t[oS], delete t[sS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ly(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function cp(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || ly(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ju(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = $i));
  else if (r !== 4 && (e = e.child, e !== null)) for (ju(e, t, n), e = e.sibling; e !== null; ) ju(e, t, n), e = e.sibling;
}
function Lu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Lu(e, t, n), e = e.sibling; e !== null; ) Lu(e, t, n), e = e.sibling;
}
var Re = null, wt = !1;
function rn(e, t, n) {
  for (n = n.child; n !== null; ) uy(e, t, n), n = n.sibling;
}
function uy(e, t, n) {
  if (Lt && typeof Lt.onCommitFiberUnmount == "function") try {
    Lt.onCommitFiberUnmount(va, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Fe || Pr(n, t);
    case 6:
      var r = Re, o = wt;
      Re = null, rn(e, t, n), Re = r, wt = o, Re !== null && (wt ? (e = Re, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Re.removeChild(n.stateNode));
      break;
    case 18:
      Re !== null && (wt ? (e = Re, n = n.stateNode, e.nodeType === 8 ? fl(e.parentNode, n) : e.nodeType === 1 && fl(e, n), Jo(e)) : fl(Re, n.stateNode));
      break;
    case 4:
      r = Re, o = wt, Re = n.stateNode.containerInfo, wt = !0, rn(e, t, n), Re = r, wt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Fe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var s = o, i = s.destroy;
          s = s.tag, i !== void 0 && (s & 2 || s & 4) && Au(n, t, i), o = o.next;
        } while (o !== r);
      }
      rn(e, t, n);
      break;
    case 1:
      if (!Fe && (Pr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        ve(n, t, a);
      }
      rn(e, t, n);
      break;
    case 21:
      rn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Fe = (r = Fe) || n.memoizedState !== null, rn(e, t, n), Fe = r) : rn(e, t, n);
      break;
    default:
      rn(e, t, n);
  }
}
function dp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new SS()), t.forEach(function(r) {
      var o = AS.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function gt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var s = e, i = t, a = i;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            Re = a.stateNode, wt = !1;
            break e;
          case 3:
            Re = a.stateNode.containerInfo, wt = !0;
            break e;
          case 4:
            Re = a.stateNode.containerInfo, wt = !0;
            break e;
        }
        a = a.return;
      }
      if (Re === null) throw Error(R(160));
      uy(s, i, o), Re = null, wt = !1;
      var l = o.alternate;
      l !== null && (l.return = null), o.return = null;
    } catch (u) {
      ve(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) cy(t, e), t = t.sibling;
}
function cy(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (gt(t, e), Nt(e), r & 4) {
        try {
          Bo(3, e, e.return), Pa(3, e);
        } catch (y) {
          ve(e, e.return, y);
        }
        try {
          Bo(5, e, e.return);
        } catch (y) {
          ve(e, e.return, y);
        }
      }
      break;
    case 1:
      gt(t, e), Nt(e), r & 512 && n !== null && Pr(n, n.return);
      break;
    case 5:
      if (gt(t, e), Nt(e), r & 512 && n !== null && Pr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Xo(o, "");
        } catch (y) {
          ve(e, e.return, y);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var s = e.memoizedProps, i = n !== null ? n.memoizedProps : s, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && s.type === "radio" && s.name != null && Mm(o, s), ou(a, i);
          var u = ou(a, s);
          for (i = 0; i < l.length; i += 2) {
            var c = l[i], d = l[i + 1];
            c === "style" ? Om(o, d) : c === "dangerouslySetInnerHTML" ? _m(o, d) : c === "children" ? Xo(o, d) : wc(o, c, d, u);
          }
          switch (a) {
            case "input":
              Jl(o, s);
              break;
            case "textarea":
              jm(o, s);
              break;
            case "select":
              var f = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!s.multiple;
              var h = s.value;
              h != null ? jr(o, !!s.multiple, h, !1) : f !== !!s.multiple && (s.defaultValue != null ? jr(
                o,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : jr(o, !!s.multiple, s.multiple ? [] : "", !1));
          }
          o[os] = s;
        } catch (y) {
          ve(e, e.return, y);
        }
      }
      break;
    case 6:
      if (gt(t, e), Nt(e), r & 4) {
        if (e.stateNode === null) throw Error(R(162));
        o = e.stateNode, s = e.memoizedProps;
        try {
          o.nodeValue = s;
        } catch (y) {
          ve(e, e.return, y);
        }
      }
      break;
    case 3:
      if (gt(t, e), Nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Jo(t.containerInfo);
      } catch (y) {
        ve(e, e.return, y);
      }
      break;
    case 4:
      gt(t, e), Nt(e);
      break;
    case 13:
      gt(t, e), Nt(e), o = e.child, o.flags & 8192 && (s = o.memoizedState !== null, o.stateNode.isHidden = s, !s || o.alternate !== null && o.alternate.memoizedState !== null || (Jc = be())), r & 4 && dp(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Fe = (u = Fe) || c, gt(t, e), Fe = u) : gt(t, e), Nt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (I = e, c = e.child; c !== null; ) {
          for (d = I = c; I !== null; ) {
            switch (f = I, h = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Bo(4, f, f.return);
                break;
              case 1:
                Pr(f, f.return);
                var w = f.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (y) {
                    ve(r, n, y);
                  }
                }
                break;
              case 5:
                Pr(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  pp(d);
                  continue;
                }
            }
            h !== null ? (h.return = f, I = h) : pp(d);
          }
          c = c.sibling;
        }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                o = d.stateNode, u ? (s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, i = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Im("display", i));
              } catch (y) {
                ve(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (c === null) try {
              d.stateNode.nodeValue = u ? "" : d.memoizedProps;
            } catch (y) {
              ve(e, e.return, y);
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
      gt(t, e), Nt(e), r & 4 && dp(e);
      break;
    case 21:
      break;
    default:
      gt(
        t,
        e
      ), Nt(e);
  }
}
function Nt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ly(n)) {
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
          r.flags & 32 && (Xo(o, ""), r.flags &= -33);
          var s = cp(e);
          Lu(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, a = cp(e);
          ju(e, a, i);
          break;
        default:
          throw Error(R(161));
      }
    } catch (l) {
      ve(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function kS(e, t, n) {
  I = e, dy(e);
}
function dy(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var o = I, s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Qs;
      if (!i) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || Fe;
        a = Qs;
        var u = Fe;
        if (Qs = i, (Fe = l) && !u) for (I = o; I !== null; ) i = I, l = i.child, i.tag === 22 && i.memoizedState !== null ? hp(o) : l !== null ? (l.return = i, I = l) : hp(o);
        for (; s !== null; ) I = s, dy(s), s = s.sibling;
        I = o, Qs = a, Fe = u;
      }
      fp(e);
    } else o.subtreeFlags & 8772 && s !== null ? (s.return = o, I = s) : fp(e);
  }
}
function fp(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Fe || Pa(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Fe) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : xt(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && Qf(t, s, r);
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
              Qf(t, i, n);
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
                  d !== null && Jo(d);
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
        Fe || t.flags & 512 && Mu(t);
      } catch (f) {
        ve(t, t.return, f);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, I = n;
      break;
    }
    I = t.return;
  }
}
function pp(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, I = n;
      break;
    }
    I = t.return;
  }
}
function hp(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Pa(4, t);
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
            Mu(t);
          } catch (l) {
            ve(t, s, l);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Mu(t);
          } catch (l) {
            ve(t, i, l);
          }
      }
    } catch (l) {
      ve(t, t.return, l);
    }
    if (t === e) {
      I = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, I = a;
      break;
    }
    I = t.return;
  }
}
var CS = Math.ceil, Ji = nn.ReactCurrentDispatcher, qc = nn.ReactCurrentOwner, pt = nn.ReactCurrentBatchConfig, q = 0, De = null, Ce = null, Me = 0, Ze = 0, Tr = _n(0), Pe = 0, cs = null, nr = 0, Ta = 0, Zc = 0, $o = null, Ke = null, Jc = 0, Yr = 1 / 0, $t = null, ea = !1, _u = null, bn = null, qs = !1, gn = null, ta = 0, Uo = 0, Iu = null, Ci = -1, Ei = 0;
function Ue() {
  return q & 6 ? be() : Ci !== -1 ? Ci : Ci = be();
}
function kn(e) {
  return e.mode & 1 ? q & 2 && Me !== 0 ? Me & -Me : aS.transition !== null ? (Ei === 0 && (Ei = Xm()), Ei) : (e = J, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ng(e.type)), e) : 1;
}
function kt(e, t, n, r) {
  if (50 < Uo) throw Uo = 0, Iu = null, Error(R(185));
  ks(e, n, r), (!(q & 2) || e !== De) && (e === De && (!(q & 2) && (Ta |= n), Pe === 4 && hn(e, Me)), Qe(e, r), n === 1 && q === 0 && !(t.mode & 1) && (Yr = be() + 500, ka && In()));
}
function Qe(e, t) {
  var n = e.callbackNode;
  a1(e, t);
  var r = Fi(e, e === De ? Me : 0);
  if (r === 0) n !== null && kf(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && kf(n), t === 1) e.tag === 0 ? iS(mp.bind(null, e)) : Sg(mp.bind(null, e)), nS(function() {
      !(q & 6) && In();
    }), n = null;
    else {
      switch (Qm(r)) {
        case 1:
          n = Ec;
          break;
        case 4:
          n = Gm;
          break;
        case 16:
          n = Oi;
          break;
        case 536870912:
          n = Ym;
          break;
        default:
          n = Oi;
      }
      n = xy(n, fy.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function fy(e, t) {
  if (Ci = -1, Ei = 0, q & 6) throw Error(R(327));
  var n = e.callbackNode;
  if (Fr() && e.callbackNode !== n) return null;
  var r = Fi(e, e === De ? Me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = na(e, r);
  else {
    t = r;
    var o = q;
    q |= 2;
    var s = hy();
    (De !== e || Me !== t) && ($t = null, Yr = be() + 500, Qn(e, t));
    do
      try {
        TS();
        break;
      } catch (a) {
        py(e, a);
      }
    while (!0);
    Fc(), Ji.current = s, q = o, Ce !== null ? t = 0 : (De = null, Me = 0, t = Pe);
  }
  if (t !== 0) {
    if (t === 2 && (o = uu(e), o !== 0 && (r = o, t = Ou(e, o))), t === 1) throw n = cs, Qn(e, 0), hn(e, r), Qe(e, be()), n;
    if (t === 6) hn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !ES(o) && (t = na(e, r), t === 2 && (s = uu(e), s !== 0 && (r = s, t = Ou(e, s))), t === 1)) throw n = cs, Qn(e, 0), hn(e, r), Qe(e, be()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          Un(e, Ke, $t);
          break;
        case 3:
          if (hn(e, r), (r & 130023424) === r && (t = Jc + 500 - be(), 10 < t)) {
            if (Fi(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Ue(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = yu(Un.bind(null, e, Ke, $t), t);
            break;
          }
          Un(e, Ke, $t);
          break;
        case 4:
          if (hn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - bt(r);
            s = 1 << i, i = t[i], i > o && (o = i), r &= ~s;
          }
          if (r = o, r = be() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * CS(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = yu(Un.bind(null, e, Ke, $t), r);
            break;
          }
          Un(e, Ke, $t);
          break;
        case 5:
          Un(e, Ke, $t);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Qe(e, be()), e.callbackNode === n ? fy.bind(null, e) : null;
}
function Ou(e, t) {
  var n = $o;
  return e.current.memoizedState.isDehydrated && (Qn(e, t).flags |= 256), e = na(e, t), e !== 2 && (t = Ke, Ke = n, t !== null && Fu(t)), e;
}
function Fu(e) {
  Ke === null ? Ke = e : Ke.push.apply(Ke, e);
}
function ES(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], s = o.getSnapshot;
        o = o.value;
        try {
          if (!Ct(s(), o)) return !1;
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
  for (t &= ~Zc, t &= ~Ta, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - bt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function mp(e) {
  if (q & 6) throw Error(R(327));
  Fr();
  var t = Fi(e, 0);
  if (!(t & 1)) return Qe(e, be()), null;
  var n = na(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = uu(e);
    r !== 0 && (t = r, n = Ou(e, r));
  }
  if (n === 1) throw n = cs, Qn(e, 0), hn(e, t), Qe(e, be()), n;
  if (n === 6) throw Error(R(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Un(e, Ke, $t), Qe(e, be()), null;
}
function ed(e, t) {
  var n = q;
  q |= 1;
  try {
    return e(t);
  } finally {
    q = n, q === 0 && (Yr = be() + 500, ka && In());
  }
}
function rr(e) {
  gn !== null && gn.tag === 0 && !(q & 6) && Fr();
  var t = q;
  q |= 1;
  var n = pt.transition, r = J;
  try {
    if (pt.transition = null, J = 1, e) return e();
  } finally {
    J = r, pt.transition = n, q = t, !(q & 6) && In();
  }
}
function td() {
  Ze = Tr.current, ce(Tr);
}
function Qn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, tS(n)), Ce !== null) for (n = Ce.return; n !== null; ) {
    var r = n;
    switch (_c(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ui();
        break;
      case 3:
        Kr(), ce(Ye), ce(ze), Wc();
        break;
      case 5:
        Uc(r);
        break;
      case 4:
        Kr();
        break;
      case 13:
        ce(pe);
        break;
      case 19:
        ce(pe);
        break;
      case 10:
        Vc(r.type._context);
        break;
      case 22:
      case 23:
        td();
    }
    n = n.return;
  }
  if (De = e, Ce = e = Cn(e.current, null), Me = Ze = t, Pe = 0, cs = null, Zc = Ta = nr = 0, Ke = $o = null, Gn !== null) {
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
function py(e, t) {
  do {
    var n = Ce;
    try {
      if (Fc(), Si.current = Zi, qi) {
        for (var r = me.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        qi = !1;
      }
      if (tr = 0, Te = Ee = me = null, zo = !1, as = 0, qc.current = null, n === null || n.return === null) {
        Pe = 1, cs = t, Ce = null;
        break;
      }
      e: {
        var s = e, i = n.return, a = n, l = t;
        if (t = Me, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = a, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var h = np(i);
          if (h !== null) {
            h.flags &= -257, rp(h, i, a, s, t), h.mode & 1 && tp(s, u, t), t = h, l = u;
            var w = t.updateQueue;
            if (w === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(l), t.updateQueue = y;
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              tp(s, u, t), nd();
              break e;
            }
            l = Error(R(426));
          }
        } else if (fe && a.mode & 1) {
          var S = np(i);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), rp(S, i, a, s, t), Ic(Gr(l, a));
            break e;
          }
        }
        s = l = Gr(l, a), Pe !== 4 && (Pe = 2), $o === null ? $o = [s] : $o.push(s), s = i;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var m = Qg(s, l, t);
              Xf(s, m);
              break e;
            case 1:
              a = l;
              var g = s.type, v = s.stateNode;
              if (!(s.flags & 128) && (typeof g.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (bn === null || !bn.has(v)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var b = qg(s, a, t);
                Xf(s, b);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      gy(n);
    } catch (k) {
      t = k, Ce === n && n !== null && (Ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function hy() {
  var e = Ji.current;
  return Ji.current = Zi, e === null ? Zi : e;
}
function nd() {
  (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4), De === null || !(nr & 268435455) && !(Ta & 268435455) || hn(De, Me);
}
function na(e, t) {
  var n = q;
  q |= 2;
  var r = hy();
  (De !== e || Me !== t) && ($t = null, Qn(e, t));
  do
    try {
      PS();
      break;
    } catch (o) {
      py(e, o);
    }
  while (!0);
  if (Fc(), q = n, Ji.current = r, Ce !== null) throw Error(R(261));
  return De = null, Me = 0, Pe;
}
function PS() {
  for (; Ce !== null; ) my(Ce);
}
function TS() {
  for (; Ce !== null && !Zw(); ) my(Ce);
}
function my(e) {
  var t = vy(e.alternate, e, Ze);
  e.memoizedProps = e.pendingProps, t === null ? gy(e) : Ce = t, qc.current = null;
}
function gy(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = wS(n, t), n !== null) {
        n.flags &= 32767, Ce = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Pe = 6, Ce = null;
        return;
      }
    } else if (n = xS(n, t, Ze), n !== null) {
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
function Un(e, t, n) {
  var r = J, o = pt.transition;
  try {
    pt.transition = null, J = 1, DS(e, t, n, r);
  } finally {
    pt.transition = o, J = r;
  }
  return null;
}
function DS(e, t, n, r) {
  do
    Fr();
  while (gn !== null);
  if (q & 6) throw Error(R(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(R(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (l1(e, s), e === De && (Ce = De = null, Me = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || qs || (qs = !0, xy(Oi, function() {
    return Fr(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = pt.transition, pt.transition = null;
    var i = J;
    J = 1;
    var a = q;
    q |= 4, qc.current = null, bS(e, n), cy(n, e), Y1(mu), Vi = !!hu, mu = hu = null, e.current = n, kS(n), Jw(), q = a, J = i, pt.transition = s;
  } else e.current = n;
  if (qs && (qs = !1, gn = e, ta = o), s = e.pendingLanes, s === 0 && (bn = null), n1(n.stateNode), Qe(e, be()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ea) throw ea = !1, e = _u, _u = null, e;
  return ta & 1 && e.tag !== 0 && Fr(), s = e.pendingLanes, s & 1 ? e === Iu ? Uo++ : (Uo = 0, Iu = e) : Uo = 0, In(), null;
}
function Fr() {
  if (gn !== null) {
    var e = Qm(ta), t = pt.transition, n = J;
    try {
      if (pt.transition = null, J = 16 > e ? 16 : e, gn === null) var r = !1;
      else {
        if (e = gn, gn = null, ta = 0, q & 6) throw Error(R(331));
        var o = q;
        for (q |= 4, I = e.current; I !== null; ) {
          var s = I, i = s.child;
          if (I.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (I = u; I !== null; ) {
                  var c = I;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bo(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) d.return = c, I = d;
                  else for (; I !== null; ) {
                    c = I;
                    var f = c.sibling, h = c.return;
                    if (ay(c), c === u) {
                      I = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = h, I = f;
                      break;
                    }
                    I = h;
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
              I = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) i.return = s, I = i;
          else e: for (; I !== null; ) {
            if (s = I, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                Bo(9, s, s.return);
            }
            var m = s.sibling;
            if (m !== null) {
              m.return = s.return, I = m;
              break e;
            }
            I = s.return;
          }
        }
        var g = e.current;
        for (I = g; I !== null; ) {
          i = I;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) v.return = i, I = v;
          else e: for (i = g; I !== null; ) {
            if (a = I, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  Pa(9, a);
              }
            } catch (k) {
              ve(a, a.return, k);
            }
            if (a === i) {
              I = null;
              break e;
            }
            var b = a.sibling;
            if (b !== null) {
              b.return = a.return, I = b;
              break e;
            }
            I = a.return;
          }
        }
        if (q = o, In(), Lt && typeof Lt.onPostCommitFiberRoot == "function") try {
          Lt.onPostCommitFiberRoot(va, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      J = n, pt.transition = t;
    }
  }
  return !1;
}
function gp(e, t, n) {
  t = Gr(n, t), t = Qg(e, t, 1), e = Sn(e, t, 1), t = Ue(), e !== null && (ks(e, 1, t), Qe(e, t));
}
function ve(e, t, n) {
  if (e.tag === 3) gp(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      gp(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (bn === null || !bn.has(r))) {
        e = Gr(n, e), e = qg(t, e, 1), t = Sn(t, e, 1), e = Ue(), t !== null && (ks(t, 1, e), Qe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function NS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ue(), e.pingedLanes |= e.suspendedLanes & n, De === e && (Me & n) === n && (Pe === 4 || Pe === 3 && (Me & 130023424) === Me && 500 > be() - Jc ? Qn(e, 0) : Zc |= n), Qe(e, t);
}
function yy(e, t) {
  t === 0 && (e.mode & 1 ? (t = Bs, Bs <<= 1, !(Bs & 130023424) && (Bs = 4194304)) : t = 1);
  var n = Ue();
  e = qt(e, t), e !== null && (ks(e, t, n), Qe(e, n));
}
function RS(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), yy(e, n);
}
function AS(e, t) {
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
  r !== null && r.delete(t), yy(e, n);
}
var vy;
vy = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ye.current) Ge = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ge = !1, vS(e, t, n);
    Ge = !!(e.flags & 131072);
  }
  else Ge = !1, fe && t.flags & 1048576 && bg(t, Ki, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ki(e, t), e = t.pendingProps;
      var o = Ur(t, ze.current);
      Or(t, n), o = Kc(null, t, r, e, o, n);
      var s = Gc();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Xe(r) ? (s = !0, Wi(t)) : s = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Bc(t), o.updater = Ea, t.stateNode = o, o._reactInternals = t, Cu(t, r, e, n), t = Tu(null, t, r, !0, s, n)) : (t.tag = 0, fe && s && Lc(t), $e(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ki(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = jS(r), e = xt(r, e), o) {
          case 0:
            t = Pu(null, t, r, e, n);
            break e;
          case 1:
            t = ip(null, t, r, e, n);
            break e;
          case 11:
            t = op(null, t, r, e, n);
            break e;
          case 14:
            t = sp(null, t, r, xt(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : xt(r, o), Pu(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : xt(r, o), ip(e, t, r, o, n);
    case 3:
      e: {
        if (ty(t), e === null) throw Error(R(387));
        r = t.pendingProps, s = t.memoizedState, o = s.element, Dg(e, t), Xi(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          o = Gr(Error(R(423)), t), t = ap(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Gr(Error(R(424)), t), t = ap(e, t, r, n, o);
          break e;
        } else for (et = wn(t.stateNode.containerInfo.firstChild), tt = t, fe = !0, St = null, n = Pg(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Wr(), r === o) {
            t = Zt(e, t, n);
            break e;
          }
          $e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Ng(t), e === null && Su(t), r = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, i = o.children, gu(r, o) ? i = null : s !== null && gu(r, s) && (t.flags |= 32), ey(e, t), $e(e, t, i, n), t.child;
    case 6:
      return e === null && Su(t), null;
    case 13:
      return ny(e, t, n);
    case 4:
      return $c(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Hr(t, null, r, n) : $e(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : xt(r, o), op(e, t, r, o, n);
    case 7:
      return $e(e, t, t.pendingProps, n), t.child;
    case 8:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, s = t.memoizedProps, i = o.value, ie(Gi, r._currentValue), r._currentValue = i, s !== null) if (Ct(s.value, i)) {
          if (s.children === o.children && !Ye.current) {
            t = Zt(e, t, n);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var a = s.dependencies;
          if (a !== null) {
            i = s.child;
            for (var l = a.firstContext; l !== null; ) {
              if (l.context === r) {
                if (s.tag === 1) {
                  l = Kt(-1, n & -n), l.tag = 2;
                  var u = s.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), bu(
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
            i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), bu(i, n, t), i = s.sibling;
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
        $e(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Or(t, n), o = ht(o), r = r(o), t.flags |= 1, $e(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = xt(r, t.pendingProps), o = xt(r.type, o), sp(e, t, r, o, n);
    case 15:
      return Zg(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : xt(r, o), ki(e, t), t.tag = 1, Xe(r) ? (e = !0, Wi(t)) : e = !1, Or(t, n), Xg(t, r, o), Cu(t, r, o, n), Tu(null, t, r, !0, e, n);
    case 19:
      return ry(e, t, n);
    case 22:
      return Jg(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function xy(e, t) {
  return Km(e, t);
}
function MS(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ft(e, t, n, r) {
  return new MS(e, t, n, r);
}
function rd(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function jS(e) {
  if (typeof e == "function") return rd(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === bc) return 11;
    if (e === kc) return 14;
  }
  return 2;
}
function Cn(e, t) {
  var n = e.alternate;
  return n === null ? (n = ft(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Pi(e, t, n, r, o, s) {
  var i = 2;
  if (r = e, typeof e == "function") rd(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case yr:
      return qn(n.children, o, s, t);
    case Sc:
      i = 8, o |= 8;
      break;
    case Yl:
      return e = ft(12, n, t, o | 2), e.elementType = Yl, e.lanes = s, e;
    case Xl:
      return e = ft(13, n, t, o), e.elementType = Xl, e.lanes = s, e;
    case Ql:
      return e = ft(19, n, t, o), e.elementType = Ql, e.lanes = s, e;
    case Nm:
      return Da(n, o, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Tm:
          i = 10;
          break e;
        case Dm:
          i = 9;
          break e;
        case bc:
          i = 11;
          break e;
        case kc:
          i = 14;
          break e;
        case cn:
          i = 16, r = null;
          break e;
      }
      throw Error(R(130, e == null ? e : typeof e, ""));
  }
  return t = ft(i, n, t, o), t.elementType = e, t.type = r, t.lanes = s, t;
}
function qn(e, t, n, r) {
  return e = ft(7, e, r, t), e.lanes = n, e;
}
function Da(e, t, n, r) {
  return e = ft(22, e, r, t), e.elementType = Nm, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function wl(e, t, n) {
  return e = ft(6, e, null, t), e.lanes = n, e;
}
function Sl(e, t, n) {
  return t = ft(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function LS(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = tl(0), this.expirationTimes = tl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function od(e, t, n, r, o, s, i, a, l) {
  return e = new LS(e, t, n, a, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = ft(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Bc(s), e;
}
function _S(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: gr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function wy(e) {
  if (!e) return Dn;
  e = e._reactInternals;
  e: {
    if (cr(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Xe(t.type)) {
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
    if (Xe(n)) return wg(e, n, t);
  }
  return t;
}
function Sy(e, t, n, r, o, s, i, a, l) {
  return e = od(n, r, !0, e, o, s, i, a, l), e.context = wy(null), n = e.current, r = Ue(), o = kn(n), s = Kt(r, o), s.callback = t ?? null, Sn(n, s, o), e.current.lanes = o, ks(e, o, r), Qe(e, r), e;
}
function Na(e, t, n, r) {
  var o = t.current, s = Ue(), i = kn(o);
  return n = wy(n), t.context === null ? t.context = n : t.pendingContext = n, t = Kt(s, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Sn(o, t, i), e !== null && (kt(e, o, i, s), wi(e, o, i)), i;
}
function ra(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function yp(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function sd(e, t) {
  yp(e, t), (e = e.alternate) && yp(e, t);
}
function IS() {
  return null;
}
var by = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function id(e) {
  this._internalRoot = e;
}
Ra.prototype.render = id.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Na(e, t, null, null);
};
Ra.prototype.unmount = id.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    rr(function() {
      Na(null, e, null, null);
    }), t[Qt] = null;
  }
};
function Ra(e) {
  this._internalRoot = e;
}
Ra.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Jm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pn.length && t !== 0 && t < pn[n].priority; n++) ;
    pn.splice(n, 0, e), n === 0 && tg(e);
  }
};
function ad(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Aa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function vp() {
}
function OS(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var u = ra(i);
        s.call(u);
      };
    }
    var i = Sy(t, r, e, 0, null, !1, !1, "", vp);
    return e._reactRootContainer = i, e[Qt] = i.current, ns(e.nodeType === 8 ? e.parentNode : e), rr(), i;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = ra(l);
      a.call(u);
    };
  }
  var l = od(e, 0, !1, null, null, !1, !1, "", vp);
  return e._reactRootContainer = l, e[Qt] = l.current, ns(e.nodeType === 8 ? e.parentNode : e), rr(function() {
    Na(t, l, n, r);
  }), l;
}
function Ma(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = ra(i);
        a.call(l);
      };
    }
    Na(t, i, e, o);
  } else i = OS(n, t, e, o, r);
  return ra(i);
}
qm = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = No(t.pendingLanes);
        n !== 0 && (Pc(t, n | 1), Qe(t, be()), !(q & 6) && (Yr = be() + 500, In()));
      }
      break;
    case 13:
      rr(function() {
        var r = qt(e, 1);
        if (r !== null) {
          var o = Ue();
          kt(r, e, 1, o);
        }
      }), sd(e, 1);
  }
};
Tc = function(e) {
  if (e.tag === 13) {
    var t = qt(e, 134217728);
    if (t !== null) {
      var n = Ue();
      kt(t, e, 134217728, n);
    }
    sd(e, 134217728);
  }
};
Zm = function(e) {
  if (e.tag === 13) {
    var t = kn(e), n = qt(e, t);
    if (n !== null) {
      var r = Ue();
      kt(n, e, t, r);
    }
    sd(e, t);
  }
};
Jm = function() {
  return J;
};
eg = function(e, t) {
  var n = J;
  try {
    return J = e, t();
  } finally {
    J = n;
  }
};
iu = function(e, t, n) {
  switch (t) {
    case "input":
      if (Jl(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ba(r);
            if (!o) throw Error(R(90));
            Am(r), Jl(r, o);
          }
        }
      }
      break;
    case "textarea":
      jm(e, n);
      break;
    case "select":
      t = n.value, t != null && jr(e, !!n.multiple, t, !1);
  }
};
zm = ed;
Bm = rr;
var FS = { usingClientEntryPoint: !1, Events: [Es, Sr, ba, Fm, Vm, ed] }, ko = { findFiberByHostInstance: Kn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, VS = { bundleType: ko.bundleType, version: ko.version, rendererPackageName: ko.rendererPackageName, rendererConfig: ko.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: nn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Wm(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ko.findFiberByHostInstance || IS, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Zs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Zs.isDisabled && Zs.supportsFiber) try {
    va = Zs.inject(VS), Lt = Zs;
  } catch {
  }
}
it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = FS;
it.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ad(t)) throw Error(R(200));
  return _S(e, t, null, n);
};
it.createRoot = function(e, t) {
  if (!ad(e)) throw Error(R(299));
  var n = !1, r = "", o = by;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = od(e, 1, !1, null, null, n, !1, r, o), e[Qt] = t.current, ns(e.nodeType === 8 ? e.parentNode : e), new id(t);
};
it.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","), Error(R(268, e)));
  return e = Wm(t), e = e === null ? null : e.stateNode, e;
};
it.flushSync = function(e) {
  return rr(e);
};
it.hydrate = function(e, t, n) {
  if (!Aa(t)) throw Error(R(200));
  return Ma(null, e, t, !0, n);
};
it.hydrateRoot = function(e, t, n) {
  if (!ad(e)) throw Error(R(405));
  var r = n != null && n.hydratedSources || null, o = !1, s = "", i = by;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Sy(t, null, e, 1, n ?? null, o, !1, s, i), e[Qt] = t.current, ns(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Ra(t);
};
it.render = function(e, t, n) {
  if (!Aa(t)) throw Error(R(200));
  return Ma(null, e, t, !1, n);
};
it.unmountComponentAtNode = function(e) {
  if (!Aa(e)) throw Error(R(40));
  return e._reactRootContainer ? (rr(function() {
    Ma(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Qt] = null;
    });
  }), !0) : !1;
};
it.unstable_batchedUpdates = ed;
it.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Aa(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return Ma(e, t, n, !1, r);
};
it.version = "18.3.1-next-f1338f8080-20240426";
function ky() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ky);
    } catch (e) {
      console.error(e);
    }
}
ky(), km.exports = it;
var oo = km.exports;
const zS = /* @__PURE__ */ cm(oo);
var ja, xp = oo;
ja = xp.createRoot, xp.hydrateRoot;
function Cy(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Cy(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function BS() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Cy(e)) && (r && (r += " "), r += t);
  return r;
}
const ld = "-", $S = (e) => {
  const t = WS(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(ld);
      return a[0] === "" && a.length !== 1 && a.shift(), Ey(a, t) || US(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const l = n[i] || [];
      return a && r[i] ? [...l, ...r[i]] : l;
    }
  };
}, Ey = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Ey(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(ld);
  return (i = t.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : i.classGroupId;
}, wp = /^\[(.+)\]$/, US = (e) => {
  if (wp.test(e)) {
    const t = wp.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, WS = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return KS(Object.entries(e.classGroups), n).forEach(([s, i]) => {
    Vu(i, r, s, t);
  }), r;
}, Vu = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Sp(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (HS(o)) {
        Vu(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      Vu(i, Sp(t, s), n, r);
    });
  });
}, Sp = (e, t) => {
  let n = e;
  return t.split(ld).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, HS = (e) => e.isThemeGetter, KS = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a])) : s);
  return [n, o];
}) : e, GS = (e) => {
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
}, Py = "!", YS = (e) => {
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
    const f = l.length === 0 ? a : a.substring(c), h = f.startsWith(Py), w = h ? f.substring(1) : f, y = d && d > c ? d - c : void 0;
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
}, XS = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, QS = (e) => ({
  cache: GS(e.cacheSize),
  parseClassName: YS(e),
  ...$S(e)
}), qS = /\s+/, ZS = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, s = [], i = e.trim().split(qS);
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
    const S = XS(c).join(":"), m = d ? S + Py : S, g = m + y;
    if (s.includes(g))
      continue;
    s.push(g);
    const v = o(y, w);
    for (let b = 0; b < v.length; ++b) {
      const k = v[b];
      s.push(m + k);
    }
    a = u + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function JS() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Ty(t)) && (r && (r += " "), r += n);
  return r;
}
const Ty = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Ty(e[r])) && (n && (n += " "), n += t);
  return n;
};
function eb(e, ...t) {
  let n, r, o, s = i;
  function i(l) {
    const u = t.reduce((c, d) => d(c), e());
    return n = QS(u), r = n.cache.get, o = n.cache.set, s = a, a(l);
  }
  function a(l) {
    const u = r(l);
    if (u)
      return u;
    const c = ZS(l, n);
    return o(l, c), c;
  }
  return function() {
    return s(JS.apply(null, arguments));
  };
}
const le = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Dy = /^\[(?:([a-z-]+):)?(.+)\]$/i, tb = /^\d+\/\d+$/, nb = /* @__PURE__ */ new Set(["px", "full", "screen"]), rb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ob = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, sb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ib = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ab = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Bt = (e) => Vr(e) || nb.has(e) || tb.test(e), on = (e) => so(e, "length", mb), Vr = (e) => !!e && !Number.isNaN(Number(e)), bl = (e) => so(e, "number", Vr), Co = (e) => !!e && Number.isInteger(Number(e)), lb = (e) => e.endsWith("%") && Vr(e.slice(0, -1)), K = (e) => Dy.test(e), sn = (e) => rb.test(e), ub = /* @__PURE__ */ new Set(["length", "size", "percentage"]), cb = (e) => so(e, ub, Ny), db = (e) => so(e, "position", Ny), fb = /* @__PURE__ */ new Set(["image", "url"]), pb = (e) => so(e, fb, yb), hb = (e) => so(e, "", gb), Eo = () => !0, so = (e, t, n) => {
  const r = Dy.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, mb = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ob.test(e) && !sb.test(e)
), Ny = () => !1, gb = (e) => ib.test(e), yb = (e) => ab.test(e), vb = () => {
  const e = le("colors"), t = le("spacing"), n = le("blur"), r = le("brightness"), o = le("borderColor"), s = le("borderRadius"), i = le("borderSpacing"), a = le("borderWidth"), l = le("contrast"), u = le("grayscale"), c = le("hueRotate"), d = le("invert"), f = le("gap"), h = le("gradientColorStops"), w = le("gradientColorStopPositions"), y = le("inset"), S = le("margin"), m = le("opacity"), g = le("padding"), v = le("saturate"), b = le("scale"), k = le("sepia"), P = le("skew"), C = le("space"), E = le("translate"), D = () => ["auto", "contain", "none"], N = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", K, t], A = () => [K, t], F = () => ["", Bt, on], B = () => ["auto", Vr, K], G = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], V = () => ["solid", "dashed", "dotted", "double", "none"], O = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], T = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], M = () => ["", "0", K], _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], H = () => [Vr, K];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Eo],
      spacing: [Bt, on],
      blur: ["none", "", sn, K],
      brightness: H(),
      borderColor: [e],
      borderRadius: ["none", "", "full", sn, K],
      borderSpacing: A(),
      borderWidth: F(),
      contrast: H(),
      grayscale: M(),
      hueRotate: H(),
      invert: M(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [lb, on],
      inset: j(),
      margin: j(),
      opacity: H(),
      padding: A(),
      saturate: H(),
      scale: H(),
      sepia: M(),
      skew: H(),
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
        columns: [sn]
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
        object: [...G(), K]
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
        z: ["auto", Co, K]
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
        order: ["first", "last", "none", Co, K]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Eo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Co, K]
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
        "grid-rows": [Eo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Co, K]
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
        p: [g]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [g]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [g]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [g]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [g]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [g]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [g]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [g]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [g]
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
          screen: [sn]
        }, sn]
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
        text: ["base", sn, on]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", bl]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Eo]
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
        "line-clamp": ["none", Vr, bl]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Bt, K]
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
        decoration: [...V(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Bt, on]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Bt, K]
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
        bg: [...G(), db]
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
        bg: ["auto", "cover", "contain", cb]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, pb]
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
        "outline-offset": [Bt, K]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Bt, on]
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
        "ring-offset": [Bt, on]
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
        shadow: ["", "inner", "none", sn, hb]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Eo]
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
        "mix-blend": [...O(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": O()
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
        "drop-shadow": ["", "none", sn, K]
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
        rotate: [Co, K]
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
        "skew-x": [P]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [P]
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
        stroke: [Bt, on, bl]
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
}, xb = /* @__PURE__ */ eb(vb);
function xe(...e) {
  return xb(BS(e));
}
function ud({ className: e, ...t }) {
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
function Ry({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: xe("px-6", e),
      ...t
    }
  );
}
function wb({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: xe("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
function bp(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function X(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Sb(e, t) {
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
function io(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = x.createContext(i), l = n.length;
    n = [...n, i];
    const u = (d) => {
      var m;
      const { scope: f, children: h, ...w } = d, y = ((m = f == null ? void 0 : f[e]) == null ? void 0 : m[l]) || a, S = x.useMemo(() => w, Object.values(w));
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
  return o.scopeName = e, [r, bb(o, ...t)];
}
function bb(...e) {
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
function kp(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Ay(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = kp(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : kp(e[o], null);
        }
      };
  };
}
function we(...e) {
  return x.useCallback(Ay(...e), e);
}
// @__NO_SIDE_EFFECTS__
function ds(e) {
  const t = /* @__PURE__ */ kb(e), n = x.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = x.Children.toArray(s), l = a.find(Eb);
    if (l) {
      const u = l.props.children, c = a.map((d) => d === l ? x.Children.count(u) > 1 ? x.Children.only(null) : x.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: x.isValidElement(u) ? x.cloneElement(u, void 0, c) : null });
    }
    return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function kb(e) {
  const t = x.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (x.isValidElement(o)) {
      const i = Tb(o), a = Pb(s, o.props);
      return o.type !== x.Fragment && (a.ref = r ? Ay(r, i) : i), x.cloneElement(o, a);
    }
    return x.Children.count(o) > 1 ? x.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Cb = Symbol("radix.slottable");
function Eb(e) {
  return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Cb;
}
function Pb(e, t) {
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
function Tb(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function My(e) {
  const t = e + "CollectionProvider", [n, r] = io(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (y) => {
    const { scope: S, children: m } = y, g = se.useRef(null), v = se.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p.jsx(o, { scope: S, itemMap: v, collectionRef: g, children: m });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ ds(a), u = se.forwardRef(
    (y, S) => {
      const { scope: m, children: g } = y, v = s(a, m), b = we(S, v.collectionRef);
      return /* @__PURE__ */ p.jsx(l, { ref: b, children: g });
    }
  );
  u.displayName = a;
  const c = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ ds(c), h = se.forwardRef(
    (y, S) => {
      const { scope: m, children: g, ...v } = y, b = se.useRef(null), k = we(S, b), P = s(c, m);
      return se.useEffect(() => (P.itemMap.set(b, { ref: b, ...v }), () => void P.itemMap.delete(b))), /* @__PURE__ */ p.jsx(f, { [d]: "", ref: k, children: g });
    }
  );
  h.displayName = c;
  function w(y) {
    const S = s(e + "CollectionConsumer", y);
    return se.useCallback(() => {
      const g = S.collectionRef.current;
      if (!g) return [];
      const v = Array.from(g.querySelectorAll(`[${d}]`));
      return Array.from(S.itemMap.values()).sort(
        (P, C) => v.indexOf(P.ref.current) - v.indexOf(C.ref.current)
      );
    }, [S.collectionRef, S.itemMap]);
  }
  return [
    { Provider: i, Slot: u, ItemSlot: h },
    w,
    r
  ];
}
var Db = x.createContext(void 0);
function cd(e) {
  const t = x.useContext(Db);
  return e || t || "ltr";
}
var Nb = [
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
], Z = Nb.reduce((e, t) => {
  const n = /* @__PURE__ */ ds(`Primitive.${t}`), r = x.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Rb(e, t) {
  e && oo.flushSync(() => e.dispatchEvent(t));
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
function Ab(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Nn(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Mb = "DismissableLayer", zu = "dismissableLayer.update", jb = "dismissableLayer.pointerDownOutside", Lb = "dismissableLayer.focusOutside", Cp, jy = x.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), dd = x.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...l
    } = e, u = x.useContext(jy), [c, d] = x.useState(null), f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = x.useState({}), w = we(t, (C) => d(C)), y = Array.from(u.layers), [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), m = y.indexOf(S), g = c ? y.indexOf(c) : -1, v = u.layersWithOutsidePointerEventsDisabled.size > 0, b = g >= m, k = Ob((C) => {
      const E = C.target, D = [...u.branches].some((N) => N.contains(E));
      !b || D || (o == null || o(C), i == null || i(C), C.defaultPrevented || a == null || a());
    }, f), P = Fb((C) => {
      const E = C.target;
      [...u.branches].some((N) => N.contains(E)) || (s == null || s(C), i == null || i(C), C.defaultPrevented || a == null || a());
    }, f);
    return Ab((C) => {
      g === u.layers.size - 1 && (r == null || r(C), !C.defaultPrevented && a && (C.preventDefault(), a()));
    }, f), x.useEffect(() => {
      if (c)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Cp = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), Ep(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Cp);
        };
    }, [c, f, n, u]), x.useEffect(() => () => {
      c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), Ep());
    }, [c, u]), x.useEffect(() => {
      const C = () => h({});
      return document.addEventListener(zu, C), () => document.removeEventListener(zu, C);
    }, []), /* @__PURE__ */ p.jsx(
      Z.div,
      {
        ...l,
        ref: w,
        style: {
          pointerEvents: v ? b ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: X(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: X(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: X(
          e.onPointerDownCapture,
          k.onPointerDownCapture
        )
      }
    );
  }
);
dd.displayName = Mb;
var _b = "DismissableLayerBranch", Ib = x.forwardRef((e, t) => {
  const n = x.useContext(jy), r = x.useRef(null), o = we(t, r);
  return x.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ p.jsx(Z.div, { ...e, ref: o });
});
Ib.displayName = _b;
function Ob(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Nn(e), r = x.useRef(!1), o = x.useRef(() => {
  });
  return x.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          Ly(
            jb,
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
function Fb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Nn(e), r = x.useRef(!1);
  return x.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && Ly(Lb, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Ep() {
  const e = new CustomEvent(zu);
  document.dispatchEvent(e);
}
function Ly(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Rb(o, s) : o.dispatchEvent(s);
}
var kl = 0;
function _y() {
  x.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Pp()), document.body.insertAdjacentElement("beforeend", e[1] ?? Pp()), kl++, () => {
      kl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), kl--;
    };
  }, []);
}
function Pp() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Cl = "focusScope.autoFocusOnMount", El = "focusScope.autoFocusOnUnmount", Tp = { bubbles: !1, cancelable: !0 }, Vb = "FocusScope", fd = x.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = x.useState(null), u = Nn(o), c = Nn(s), d = x.useRef(null), f = we(t, (y) => l(y)), h = x.useRef({
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
      }, m = function(v) {
        if (document.activeElement === document.body)
          for (const k of v)
            k.removedNodes.length > 0 && ln(a);
      };
      document.addEventListener("focusin", y), document.addEventListener("focusout", S);
      const g = new MutationObserver(m);
      return a && g.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", S), g.disconnect();
      };
    }
  }, [r, a, h.paused]), x.useEffect(() => {
    if (a) {
      Np.add(h);
      const y = document.activeElement;
      if (!a.contains(y)) {
        const m = new CustomEvent(Cl, Tp);
        a.addEventListener(Cl, u), a.dispatchEvent(m), m.defaultPrevented || (zb(Hb(Iy(a)), { select: !0 }), document.activeElement === y && ln(a));
      }
      return () => {
        a.removeEventListener(Cl, u), setTimeout(() => {
          const m = new CustomEvent(El, Tp);
          a.addEventListener(El, c), a.dispatchEvent(m), m.defaultPrevented || ln(y ?? document.body, { select: !0 }), a.removeEventListener(El, c), Np.remove(h);
        }, 0);
      };
    }
  }, [a, u, c, h]);
  const w = x.useCallback(
    (y) => {
      if (!n && !r || h.paused) return;
      const S = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, m = document.activeElement;
      if (S && m) {
        const g = y.currentTarget, [v, b] = Bb(g);
        v && b ? !y.shiftKey && m === b ? (y.preventDefault(), n && ln(v, { select: !0 })) : y.shiftKey && m === v && (y.preventDefault(), n && ln(b, { select: !0 })) : m === g && y.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ p.jsx(Z.div, { tabIndex: -1, ...i, ref: f, onKeyDown: w });
});
fd.displayName = Vb;
function zb(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ln(r, { select: t }), document.activeElement !== n) return;
}
function Bb(e) {
  const t = Iy(e), n = Dp(t, e), r = Dp(t.reverse(), e);
  return [n, r];
}
function Iy(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Dp(e, t) {
  for (const n of e)
    if (!$b(n, { upTo: t })) return n;
}
function $b(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ub(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ln(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Ub(e) && t && e.select();
  }
}
var Np = Wb();
function Wb() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Rp(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Rp(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Rp(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Hb(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Be = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {
}, Kb = Sm[" useId ".trim().toString()] || (() => {
}), Gb = 0;
function En(e) {
  const [t, n] = x.useState(Kb());
  return Be(() => {
    n((r) => r ?? String(Gb++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const Yb = ["top", "right", "bottom", "left"], Rn = Math.min, Je = Math.max, oa = Math.round, Js = Math.floor, It = (e) => ({
  x: e,
  y: e
}), Xb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Qb = {
  start: "end",
  end: "start"
};
function Bu(e, t, n) {
  return Je(e, Rn(t, n));
}
function Jt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function en(e) {
  return e.split("-")[0];
}
function ao(e) {
  return e.split("-")[1];
}
function pd(e) {
  return e === "x" ? "y" : "x";
}
function hd(e) {
  return e === "y" ? "height" : "width";
}
const qb = /* @__PURE__ */ new Set(["top", "bottom"]);
function jt(e) {
  return qb.has(en(e)) ? "y" : "x";
}
function md(e) {
  return pd(jt(e));
}
function Zb(e, t, n) {
  n === void 0 && (n = !1);
  const r = ao(e), o = md(e), s = hd(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = sa(i)), [i, sa(i)];
}
function Jb(e) {
  const t = sa(e);
  return [$u(e), t, $u(t)];
}
function $u(e) {
  return e.replace(/start|end/g, (t) => Qb[t]);
}
const Ap = ["left", "right"], Mp = ["right", "left"], ek = ["top", "bottom"], tk = ["bottom", "top"];
function nk(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Mp : Ap : t ? Ap : Mp;
    case "left":
    case "right":
      return t ? ek : tk;
    default:
      return [];
  }
}
function rk(e, t, n, r) {
  const o = ao(e);
  let s = nk(en(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map($u)))), s;
}
function sa(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Xb[t]);
}
function ok(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Oy(e) {
  return typeof e != "number" ? ok(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ia(e) {
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
function jp(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = jt(t), i = md(t), a = hd(i), l = en(t), u = s === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
  switch (ao(t)) {
    case "start":
      h[i] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      h[i] += f * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const sk = async (e, t, n) => {
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
  } = jp(u, r, l), f = r, h = {}, w = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: S,
      fn: m
    } = a[y], {
      x: g,
      y: v,
      data: b,
      reset: k
    } = await m({
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
    c = g ?? c, d = v ?? d, h = {
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
    } = jp(u, f, l)), y = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: h
  };
};
async function fs(e, t) {
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
  } = Jt(t, e), w = Oy(h), S = a[f ? d === "floating" ? "reference" : "floating" : d], m = ia(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(S))) == null || n ? S : S.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), g = d === "floating" ? {
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
  }, k = ia(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: g,
    offsetParent: v,
    strategy: l
  }) : g);
  return {
    top: (m.top - k.top + w.top) / b.y,
    bottom: (k.bottom - m.bottom + w.bottom) / b.y,
    left: (m.left - k.left + w.left) / b.x,
    right: (k.right - m.right + w.right) / b.x
  };
}
const ik = (e) => ({
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
    } = Jt(e, t) || {};
    if (u == null)
      return {};
    const d = Oy(c), f = {
      x: n,
      y: r
    }, h = md(o), w = hd(h), y = await i.getDimensions(u), S = h === "y", m = S ? "top" : "left", g = S ? "bottom" : "right", v = S ? "clientHeight" : "clientWidth", b = s.reference[w] + s.reference[h] - f[h] - s.floating[w], k = f[h] - s.reference[h], P = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let C = P ? P[v] : 0;
    (!C || !await (i.isElement == null ? void 0 : i.isElement(P))) && (C = a.floating[v] || s.floating[w]);
    const E = b / 2 - k / 2, D = C / 2 - y[w] / 2 - 1, N = Rn(d[m], D), j = Rn(d[g], D), A = N, F = C - y[w] - j, B = C / 2 - y[w] / 2 + E, G = Bu(A, B, F), V = !l.arrow && ao(o) != null && B !== G && s.reference[w] / 2 - (B < A ? N : j) - y[w] / 2 < 0, O = V ? B < A ? B - A : B - F : 0;
    return {
      [h]: f[h] + O,
      data: {
        [h]: G,
        centerOffset: B - G - O,
        ...V && {
          alignmentOffset: O
        }
      },
      reset: V
    };
  }
}), ak = function(e) {
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
      } = Jt(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const m = en(o), g = jt(a), v = en(a) === a, b = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = f || (v || !y ? [sa(a)] : Jb(a)), P = w !== "none";
      !f && P && k.push(...rk(a, y, w, b));
      const C = [a, ...k], E = await fs(t, S), D = [];
      let N = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (c && D.push(E[m]), d) {
        const B = Zb(o, i, b);
        D.push(E[B[0]], E[B[1]]);
      }
      if (N = [...N, {
        placement: o,
        overflows: D
      }], !D.every((B) => B <= 0)) {
        var j, A;
        const B = (((j = s.flip) == null ? void 0 : j.index) || 0) + 1, G = C[B];
        if (G && (!(d === "alignment" ? g !== jt(G) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        N.every((T) => jt(T.placement) === g ? T.overflows[0] > 0 : !0)))
          return {
            data: {
              index: B,
              overflows: N
            },
            reset: {
              placement: G
            }
          };
        let V = (A = N.filter((O) => O.overflows[0] <= 0).sort((O, T) => O.overflows[1] - T.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!V)
          switch (h) {
            case "bestFit": {
              var F;
              const O = (F = N.filter((T) => {
                if (P) {
                  const M = jt(T.placement);
                  return M === g || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((T) => [T.placement, T.overflows.filter((M) => M > 0).reduce((M, _) => M + _, 0)]).sort((T, M) => T[1] - M[1])[0]) == null ? void 0 : F[0];
              O && (V = O);
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
function Lp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function _p(e) {
  return Yb.some((t) => e[t] >= 0);
}
const lk = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Jt(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await fs(t, {
            ...o,
            elementContext: "reference"
          }), i = Lp(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: _p(i)
            }
          };
        }
        case "escaped": {
          const s = await fs(t, {
            ...o,
            altBoundary: !0
          }), i = Lp(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: _p(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Fy = /* @__PURE__ */ new Set(["left", "top"]);
async function uk(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = en(n), a = ao(n), l = jt(n) === "y", u = Fy.has(i) ? -1 : 1, c = s && l ? -1 : 1, d = Jt(t, e);
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
const ck = function(e) {
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
      } = t, l = await uk(t, e);
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
}, dk = function(e) {
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
              y: g
            } = S;
            return {
              x: m,
              y: g
            };
          }
        },
        ...l
      } = Jt(e, t), u = {
        x: n,
        y: r
      }, c = await fs(t, l), d = jt(en(o)), f = pd(d);
      let h = u[f], w = u[d];
      if (s) {
        const S = f === "y" ? "top" : "left", m = f === "y" ? "bottom" : "right", g = h + c[S], v = h - c[m];
        h = Bu(g, h, v);
      }
      if (i) {
        const S = d === "y" ? "top" : "left", m = d === "y" ? "bottom" : "right", g = w + c[S], v = w - c[m];
        w = Bu(g, w, v);
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
}, fk = function(e) {
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
      } = Jt(e, t), c = {
        x: n,
        y: r
      }, d = jt(o), f = pd(d);
      let h = c[f], w = c[d];
      const y = Jt(a, t), S = typeof y == "number" ? {
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
        var m, g;
        const v = f === "y" ? "width" : "height", b = Fy.has(en(o)), k = s.reference[d] - s.floating[v] + (b && ((m = i.offset) == null ? void 0 : m[d]) || 0) + (b ? 0 : S.crossAxis), P = s.reference[d] + s.reference[v] + (b ? 0 : ((g = i.offset) == null ? void 0 : g[d]) || 0) - (b ? S.crossAxis : 0);
        w < k ? w = k : w > P && (w = P);
      }
      return {
        [f]: h,
        [d]: w
      };
    }
  };
}, pk = function(e) {
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
      } = Jt(e, t), c = await fs(t, u), d = en(o), f = ao(o), h = jt(o) === "y", {
        width: w,
        height: y
      } = s.floating;
      let S, m;
      d === "top" || d === "bottom" ? (S = d, m = f === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (m = d, S = f === "end" ? "top" : "bottom");
      const g = y - c.top - c.bottom, v = w - c.left - c.right, b = Rn(y - c[S], g), k = Rn(w - c[m], v), P = !t.middlewareData.shift;
      let C = b, E = k;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (E = v), (r = t.middlewareData.shift) != null && r.enabled.y && (C = g), P && !f) {
        const N = Je(c.left, 0), j = Je(c.right, 0), A = Je(c.top, 0), F = Je(c.bottom, 0);
        h ? E = w - 2 * (N !== 0 || j !== 0 ? N + j : Je(c.left, c.right)) : C = y - 2 * (A !== 0 || F !== 0 ? A + F : Je(c.top, c.bottom));
      }
      await l({
        ...t,
        availableWidth: E,
        availableHeight: C
      });
      const D = await i.getDimensions(a.floating);
      return w !== D.width || y !== D.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function La() {
  return typeof window < "u";
}
function lo(e) {
  return Vy(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function nt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function zt(e) {
  var t;
  return (t = (Vy(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Vy(e) {
  return La() ? e instanceof Node || e instanceof nt(e).Node : !1;
}
function Et(e) {
  return La() ? e instanceof Element || e instanceof nt(e).Element : !1;
}
function Vt(e) {
  return La() ? e instanceof HTMLElement || e instanceof nt(e).HTMLElement : !1;
}
function Ip(e) {
  return !La() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof nt(e).ShadowRoot;
}
const hk = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ts(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Pt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !hk.has(o);
}
const mk = /* @__PURE__ */ new Set(["table", "td", "th"]);
function gk(e) {
  return mk.has(lo(e));
}
const yk = [":popover-open", ":modal"];
function _a(e) {
  return yk.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const vk = ["transform", "translate", "scale", "rotate", "perspective"], xk = ["transform", "translate", "scale", "rotate", "perspective", "filter"], wk = ["paint", "layout", "strict", "content"];
function gd(e) {
  const t = yd(), n = Et(e) ? Pt(e) : e;
  return vk.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || xk.some((r) => (n.willChange || "").includes(r)) || wk.some((r) => (n.contain || "").includes(r));
}
function Sk(e) {
  let t = An(e);
  for (; Vt(t) && !Xr(t); ) {
    if (gd(t))
      return t;
    if (_a(t))
      return null;
    t = An(t);
  }
  return null;
}
function yd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const bk = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Xr(e) {
  return bk.has(lo(e));
}
function Pt(e) {
  return nt(e).getComputedStyle(e);
}
function Ia(e) {
  return Et(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function An(e) {
  if (lo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ip(e) && e.host || // Fallback.
    zt(e)
  );
  return Ip(t) ? t.host : t;
}
function zy(e) {
  const t = An(e);
  return Xr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Vt(t) && Ts(t) ? t : zy(t);
}
function ps(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = zy(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = nt(o);
  if (s) {
    const a = Uu(i);
    return t.concat(i, i.visualViewport || [], Ts(o) ? o : [], a && n ? ps(a) : []);
  }
  return t.concat(o, ps(o, [], n));
}
function Uu(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function By(e) {
  const t = Pt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Vt(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = oa(n) !== s || oa(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function vd(e) {
  return Et(e) ? e : e.contextElement;
}
function zr(e) {
  const t = vd(e);
  if (!Vt(t))
    return It(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = By(t);
  let i = (s ? oa(n.width) : n.width) / r, a = (s ? oa(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const kk = /* @__PURE__ */ It(0);
function $y(e) {
  const t = nt(e);
  return !yd() || !t.visualViewport ? kk : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ck(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== nt(e) ? !1 : t;
}
function or(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = vd(e);
  let i = It(1);
  t && (r ? Et(r) && (i = zr(r)) : i = zr(e));
  const a = Ck(s, n, r) ? $y(s) : It(0);
  let l = (o.left + a.x) / i.x, u = (o.top + a.y) / i.y, c = o.width / i.x, d = o.height / i.y;
  if (s) {
    const f = nt(s), h = r && Et(r) ? nt(r) : r;
    let w = f, y = Uu(w);
    for (; y && r && h !== w; ) {
      const S = zr(y), m = y.getBoundingClientRect(), g = Pt(y), v = m.left + (y.clientLeft + parseFloat(g.paddingLeft)) * S.x, b = m.top + (y.clientTop + parseFloat(g.paddingTop)) * S.y;
      l *= S.x, u *= S.y, c *= S.x, d *= S.y, l += v, u += b, w = nt(y), y = Uu(w);
    }
  }
  return ia({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function xd(e, t) {
  const n = Ia(e).scrollLeft;
  return t ? t.left + n : or(zt(e)).left + n;
}
function Uy(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    xd(e, r)
  )), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function Ek(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = zt(r), a = t ? _a(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = It(1);
  const c = It(0), d = Vt(r);
  if ((d || !d && !s) && ((lo(r) !== "body" || Ts(i)) && (l = Ia(r)), Vt(r))) {
    const h = or(r);
    u = zr(r), c.x = h.x + r.clientLeft, c.y = h.y + r.clientTop;
  }
  const f = i && !d && !s ? Uy(i, l, !0) : It(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function Pk(e) {
  return Array.from(e.getClientRects());
}
function Tk(e) {
  const t = zt(e), n = Ia(e), r = e.ownerDocument.body, o = Je(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Je(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + xd(e);
  const a = -n.scrollTop;
  return Pt(r).direction === "rtl" && (i += Je(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
function Dk(e, t) {
  const n = nt(e), r = zt(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const u = yd();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
const Nk = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Rk(e, t) {
  const n = or(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = Vt(e) ? zr(e) : It(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, u = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: u
  };
}
function Op(e, t, n) {
  let r;
  if (t === "viewport")
    r = Dk(e, n);
  else if (t === "document")
    r = Tk(zt(e));
  else if (Et(t))
    r = Rk(t, n);
  else {
    const o = $y(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ia(r);
}
function Wy(e, t) {
  const n = An(e);
  return n === t || !Et(n) || Xr(n) ? !1 : Pt(n).position === "fixed" || Wy(n, t);
}
function Ak(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ps(e, [], !1).filter((a) => Et(a) && lo(a) !== "body"), o = null;
  const s = Pt(e).position === "fixed";
  let i = s ? An(e) : e;
  for (; Et(i) && !Xr(i); ) {
    const a = Pt(i), l = gd(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && Nk.has(o.position) || Ts(i) && !l && Wy(e, i)) ? r = r.filter((c) => c !== i) : o = a, i = An(i);
  }
  return t.set(e, r), r;
}
function Mk(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? _a(t) ? [] : Ak(t, this._c) : [].concat(n), r], a = i[0], l = i.reduce((u, c) => {
    const d = Op(t, c, o);
    return u.top = Je(d.top, u.top), u.right = Rn(d.right, u.right), u.bottom = Rn(d.bottom, u.bottom), u.left = Je(d.left, u.left), u;
  }, Op(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function jk(e) {
  const {
    width: t,
    height: n
  } = By(e);
  return {
    width: t,
    height: n
  };
}
function Lk(e, t, n) {
  const r = Vt(t), o = zt(t), s = n === "fixed", i = or(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = It(0);
  function u() {
    l.x = xd(o);
  }
  if (r || !r && !s)
    if ((lo(t) !== "body" || Ts(o)) && (a = Ia(t)), r) {
      const h = or(t, !0, s, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && u();
  s && !r && o && u();
  const c = o && !r && !s ? Uy(o, a) : It(0), d = i.left + a.scrollLeft - l.x - c.x, f = i.top + a.scrollTop - l.y - c.y;
  return {
    x: d,
    y: f,
    width: i.width,
    height: i.height
  };
}
function Pl(e) {
  return Pt(e).position === "static";
}
function Fp(e, t) {
  if (!Vt(e) || Pt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return zt(e) === n && (n = n.ownerDocument.body), n;
}
function Hy(e, t) {
  const n = nt(e);
  if (_a(e))
    return n;
  if (!Vt(e)) {
    let o = An(e);
    for (; o && !Xr(o); ) {
      if (Et(o) && !Pl(o))
        return o;
      o = An(o);
    }
    return n;
  }
  let r = Fp(e, t);
  for (; r && gk(r) && Pl(r); )
    r = Fp(r, t);
  return r && Xr(r) && Pl(r) && !gd(r) ? n : r || Sk(e) || n;
}
const _k = async function(e) {
  const t = this.getOffsetParent || Hy, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Lk(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Ik(e) {
  return Pt(e).direction === "rtl";
}
const Ok = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ek,
  getDocumentElement: zt,
  getClippingRect: Mk,
  getOffsetParent: Hy,
  getElementRects: _k,
  getClientRects: Pk,
  getDimensions: jk,
  getScale: zr,
  isElement: Et,
  isRTL: Ik
};
function Ky(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Fk(e, t) {
  let n = null, r;
  const o = zt(e);
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
    const w = Js(d), y = Js(o.clientWidth - (c + f)), S = Js(o.clientHeight - (d + h)), m = Js(c), v = {
      rootMargin: -w + "px " + -y + "px " + -S + "px " + -m + "px",
      threshold: Je(0, Rn(1, l)) || 1
    };
    let b = !0;
    function k(P) {
      const C = P[0].intersectionRatio;
      if (C !== l) {
        if (!b)
          return i();
        C ? i(!1, C) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      C === 1 && !Ky(u, e.getBoundingClientRect()) && i(), b = !1;
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
function Vk(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = vd(e), c = o || s ? [...u ? ps(u) : [], ...ps(t)] : [];
  c.forEach((m) => {
    o && m.addEventListener("scroll", n, {
      passive: !0
    }), s && m.addEventListener("resize", n);
  });
  const d = u && a ? Fk(u, n) : null;
  let f = -1, h = null;
  i && (h = new ResizeObserver((m) => {
    let [g] = m;
    g && g.target === u && h && (h.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var v;
      (v = h) == null || v.observe(t);
    })), n();
  }), u && !l && h.observe(u), h.observe(t));
  let w, y = l ? or(e) : null;
  l && S();
  function S() {
    const m = or(e);
    y && !Ky(y, m) && n(), y = m, w = requestAnimationFrame(S);
  }
  return n(), () => {
    var m;
    c.forEach((g) => {
      o && g.removeEventListener("scroll", n), s && g.removeEventListener("resize", n);
    }), d == null || d(), (m = h) == null || m.disconnect(), h = null, l && cancelAnimationFrame(w);
  };
}
const zk = ck, Bk = dk, $k = ak, Uk = pk, Wk = lk, Vp = ik, Hk = fk, Kk = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Ok,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return sk(e, t, {
    ...o,
    platform: s
  });
};
var Gk = typeof document < "u", Yk = function() {
}, Ti = Gk ? x.useLayoutEffect : Yk;
function aa(e, t) {
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
        if (!aa(e[r], t[r]))
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
      if (!(s === "_owner" && e.$$typeof) && !aa(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Gy(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function zp(e, t) {
  const n = Gy(e);
  return Math.round(t * n) / n;
}
function Tl(e) {
  const t = x.useRef(e);
  return Ti(() => {
    t.current = e;
  }), t;
}
function Xk(e) {
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
  aa(f, r) || h(r);
  const [w, y] = x.useState(null), [S, m] = x.useState(null), g = x.useCallback((T) => {
    T !== P.current && (P.current = T, y(T));
  }, []), v = x.useCallback((T) => {
    T !== C.current && (C.current = T, m(T));
  }, []), b = s || w, k = i || S, P = x.useRef(null), C = x.useRef(null), E = x.useRef(c), D = l != null, N = Tl(l), j = Tl(o), A = Tl(u), F = x.useCallback(() => {
    if (!P.current || !C.current)
      return;
    const T = {
      placement: t,
      strategy: n,
      middleware: f
    };
    j.current && (T.platform = j.current), Kk(P.current, C.current, T).then((M) => {
      const _ = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: A.current !== !1
      };
      B.current && !aa(E.current, _) && (E.current = _, oo.flushSync(() => {
        d(_);
      }));
    });
  }, [f, t, n, j, A]);
  Ti(() => {
    u === !1 && E.current.isPositioned && (E.current.isPositioned = !1, d((T) => ({
      ...T,
      isPositioned: !1
    })));
  }, [u]);
  const B = x.useRef(!1);
  Ti(() => (B.current = !0, () => {
    B.current = !1;
  }), []), Ti(() => {
    if (b && (P.current = b), k && (C.current = k), b && k) {
      if (N.current)
        return N.current(b, k, F);
      F();
    }
  }, [b, k, F, N, D]);
  const G = x.useMemo(() => ({
    reference: P,
    floating: C,
    setReference: g,
    setFloating: v
  }), [g, v]), V = x.useMemo(() => ({
    reference: b,
    floating: k
  }), [b, k]), O = x.useMemo(() => {
    const T = {
      position: n,
      left: 0,
      top: 0
    };
    if (!V.floating)
      return T;
    const M = zp(V.floating, c.x), _ = zp(V.floating, c.y);
    return a ? {
      ...T,
      transform: "translate(" + M + "px, " + _ + "px)",
      ...Gy(V.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: M,
      top: _
    };
  }, [n, a, V.floating, c.x, c.y]);
  return x.useMemo(() => ({
    ...c,
    update: F,
    refs: G,
    elements: V,
    floatingStyles: O
  }), [c, F, G, V, O]);
}
const Qk = (e) => {
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
      return r && t(r) ? r.current != null ? Vp({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Vp({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, qk = (e, t) => ({
  ...zk(e),
  options: [e, t]
}), Zk = (e, t) => ({
  ...Bk(e),
  options: [e, t]
}), Jk = (e, t) => ({
  ...Hk(e),
  options: [e, t]
}), eC = (e, t) => ({
  ...$k(e),
  options: [e, t]
}), tC = (e, t) => ({
  ...Uk(e),
  options: [e, t]
}), nC = (e, t) => ({
  ...Wk(e),
  options: [e, t]
}), rC = (e, t) => ({
  ...Qk(e),
  options: [e, t]
});
var oC = "Arrow", Yy = x.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ p.jsx(
    Z.svg,
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
Yy.displayName = oC;
var sC = Yy;
function iC(e) {
  const [t, n] = x.useState(void 0);
  return Be(() => {
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
var wd = "Popper", [Xy, Qy] = io(wd), [aC, qy] = Xy(wd), Zy = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = x.useState(null);
  return /* @__PURE__ */ p.jsx(aC, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Zy.displayName = wd;
var Jy = "PopperAnchor", ev = x.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = qy(Jy, n), i = x.useRef(null), a = we(t, i), l = x.useRef(null);
    return x.useEffect(() => {
      const u = l.current;
      l.current = (r == null ? void 0 : r.current) || i.current, u !== l.current && s.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ p.jsx(Z.div, { ...o, ref: a });
  }
);
ev.displayName = Jy;
var Sd = "PopperContent", [lC, uC] = Xy(Sd), tv = x.forwardRef(
  (e, t) => {
    var z, te, Le, oe, ne, re;
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
    } = e, S = qy(Sd, n), [m, g] = x.useState(null), v = we(t, (qe) => g(qe)), [b, k] = x.useState(null), P = iC(b), C = (P == null ? void 0 : P.width) ?? 0, E = (P == null ? void 0 : P.height) ?? 0, D = r + (s !== "center" ? "-" + s : ""), N = typeof c == "number" ? c : { top: 0, right: 0, bottom: 0, left: 0, ...c }, j = Array.isArray(u) ? u : [u], A = j.length > 0, F = {
      padding: N,
      boundary: j.filter(dC),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: A
    }, { refs: B, floatingStyles: G, placement: V, isPositioned: O, middlewareData: T } = Xk({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: D,
      whileElementsMounted: (...qe) => Vk(...qe, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: S.anchor
      },
      middleware: [
        qk({ mainAxis: o + E, alignmentAxis: i }),
        l && Zk({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? Jk() : void 0,
          ...F
        }),
        l && eC({ ...F }),
        tC({
          ...F,
          apply: ({ elements: qe, rects: Dt, availableWidth: po, availableHeight: ho }) => {
            const { width: mo, height: pw } = Dt.reference, _s = qe.floating.style;
            _s.setProperty("--radix-popper-available-width", `${po}px`), _s.setProperty("--radix-popper-available-height", `${ho}px`), _s.setProperty("--radix-popper-anchor-width", `${mo}px`), _s.setProperty("--radix-popper-anchor-height", `${pw}px`);
          }
        }),
        b && rC({ element: b, padding: a }),
        fC({ arrowWidth: C, arrowHeight: E }),
        f && nC({ strategy: "referenceHidden", ...F })
      ]
    }), [M, _] = ov(V), H = Nn(w);
    Be(() => {
      O && (H == null || H());
    }, [O, H]);
    const L = (z = T.arrow) == null ? void 0 : z.x, ae = (te = T.arrow) == null ? void 0 : te.y, Q = ((Le = T.arrow) == null ? void 0 : Le.centerOffset) !== 0, [ee, ke] = x.useState();
    return Be(() => {
      m && ke(window.getComputedStyle(m).zIndex);
    }, [m]), /* @__PURE__ */ p.jsx(
      "div",
      {
        ref: B.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...G,
          transform: O ? G.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ee,
          "--radix-popper-transform-origin": [
            (oe = T.transformOrigin) == null ? void 0 : oe.x,
            (ne = T.transformOrigin) == null ? void 0 : ne.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((re = T.hide) == null ? void 0 : re.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ p.jsx(
          lC,
          {
            scope: n,
            placedSide: M,
            onArrowChange: k,
            arrowX: L,
            arrowY: ae,
            shouldHideArrow: Q,
            children: /* @__PURE__ */ p.jsx(
              Z.div,
              {
                "data-side": M,
                "data-align": _,
                ...y,
                ref: v,
                style: {
                  ...y.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: O ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
tv.displayName = Sd;
var nv = "PopperArrow", cC = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, rv = x.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = uC(nv, r), i = cC[s.placedSide];
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
          sC,
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
rv.displayName = nv;
function dC(e) {
  return e !== null;
}
var fC = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var S, m, g;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((S = o.arrow) == null ? void 0 : S.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, c] = ov(n), d = { start: "0%", center: "50%", end: "100%" }[c], f = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + a / 2, h = (((g = o.arrow) == null ? void 0 : g.y) ?? 0) + l / 2;
    let w = "", y = "";
    return u === "bottom" ? (w = i ? d : `${f}px`, y = `${-l}px`) : u === "top" ? (w = i ? d : `${f}px`, y = `${r.floating.height + l}px`) : u === "right" ? (w = `${-l}px`, y = i ? d : `${h}px`) : u === "left" && (w = `${r.floating.width + l}px`, y = i ? d : `${h}px`), { data: { x: w, y } };
  }
});
function ov(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var pC = Zy, hC = ev, mC = tv, gC = rv, yC = "Portal", bd = x.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, s] = x.useState(!1);
  Be(() => s(!0), []);
  const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return i ? zS.createPortal(/* @__PURE__ */ p.jsx(Z.div, { ...r, ref: t }), i) : null;
});
bd.displayName = yC;
var vC = Sm[" useInsertionEffect ".trim().toString()] || Be;
function hs({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, i] = xC({
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
        const f = wC(c) ? c(e) : c;
        f !== e && ((d = i.current) == null || d.call(i, f));
      } else
        s(c);
    },
    [a, e, s, i]
  );
  return [l, u];
}
function xC({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = x.useState(e), o = x.useRef(n), s = x.useRef(t);
  return vC(() => {
    s.current = t;
  }, [t]), x.useEffect(() => {
    var i;
    o.current !== n && ((i = s.current) == null || i.call(s, n), o.current = n);
  }, [n, o]), [n, r, s];
}
function wC(e) {
  return typeof e == "function";
}
function SC(e) {
  const t = x.useRef({ value: e, previous: e });
  return x.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var sv = Object.freeze({
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
}), bC = "VisuallyHidden", kC = x.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(
    Z.span,
    {
      ...e,
      ref: t,
      style: { ...sv, ...e.style }
    }
  )
);
kC.displayName = bC;
var CC = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, pr = /* @__PURE__ */ new WeakMap(), ei = /* @__PURE__ */ new WeakMap(), ti = {}, Dl = 0, iv = function(e) {
  return e && (e.host || iv(e.parentNode));
}, EC = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = iv(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, PC = function(e, t, n, r) {
  var o = EC(t, Array.isArray(e) ? e : [e]);
  ti[n] || (ti[n] = /* @__PURE__ */ new WeakMap());
  var s = ti[n], i = [], a = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || a.has(d) || (a.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (a.has(f))
        c(f);
      else
        try {
          var h = f.getAttribute(r), w = h !== null && h !== "false", y = (pr.get(f) || 0) + 1, S = (s.get(f) || 0) + 1;
          pr.set(f, y), s.set(f, S), i.push(f), y === 1 && w && ei.set(f, !0), S === 1 && f.setAttribute(n, "true"), w || f.setAttribute(r, "true");
        } catch (m) {
          console.error("aria-hidden: cannot operate on ", f, m);
        }
    });
  };
  return c(t), a.clear(), Dl++, function() {
    i.forEach(function(d) {
      var f = pr.get(d) - 1, h = s.get(d) - 1;
      pr.set(d, f), s.set(d, h), f || (ei.has(d) || d.removeAttribute(r), ei.delete(d)), h || d.removeAttribute(n);
    }), Dl--, Dl || (pr = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap(), ei = /* @__PURE__ */ new WeakMap(), ti = {});
  };
}, av = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = CC(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), PC(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Mt = function() {
  return Mt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Mt.apply(this, arguments);
};
function lv(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function TC(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Di = "right-scroll-bar-position", Ni = "width-before-scroll-bar", DC = "with-scroll-bars-hidden", NC = "--removed-body-scroll-bar-size";
function Nl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function RC(e, t) {
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
var AC = typeof window < "u" ? x.useLayoutEffect : x.useEffect, Bp = /* @__PURE__ */ new WeakMap();
function MC(e, t) {
  var n = RC(null, function(r) {
    return e.forEach(function(o) {
      return Nl(o, r);
    });
  });
  return AC(function() {
    var r = Bp.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || Nl(a, null);
      }), s.forEach(function(a) {
        o.has(a) || Nl(a, i);
      });
    }
    Bp.set(n, e);
  }, [e]), n;
}
function jC(e) {
  return e;
}
function LC(e, t) {
  t === void 0 && (t = jC);
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
function _C(e) {
  e === void 0 && (e = {});
  var t = LC(null);
  return t.options = Mt({ async: !0, ssr: !1 }, e), t;
}
var uv = function(e) {
  var t = e.sideCar, n = lv(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return x.createElement(r, Mt({}, n));
};
uv.isSideCarExport = !0;
function IC(e, t) {
  return e.useMedium(t), uv;
}
var cv = _C(), Rl = function() {
}, Oa = x.forwardRef(function(e, t) {
  var n = x.useRef(null), r = x.useState({
    onScrollCapture: Rl,
    onWheelCapture: Rl,
    onTouchMoveCapture: Rl
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, h = e.noRelative, w = e.noIsolation, y = e.inert, S = e.allowPinchZoom, m = e.as, g = m === void 0 ? "div" : m, v = e.gapMode, b = lv(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), k = f, P = MC([n, t]), C = Mt(Mt({}, b), o);
  return x.createElement(
    x.Fragment,
    null,
    c && x.createElement(k, { sideCar: cv, removeScrollBar: u, shards: d, noRelative: h, noIsolation: w, inert: y, setCallbacks: s, allowPinchZoom: !!S, lockRef: n, gapMode: v }),
    i ? x.cloneElement(x.Children.only(a), Mt(Mt({}, C), { ref: P })) : x.createElement(g, Mt({}, C, { className: l, ref: P }), a)
  );
});
Oa.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Oa.classNames = {
  fullWidth: Ni,
  zeroRight: Di
};
var OC = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function FC() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = OC();
  return t && e.setAttribute("nonce", t), e;
}
function VC(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function zC(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var BC = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = FC()) && (VC(t, n), zC(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, $C = function() {
  var e = BC();
  return function(t, n) {
    x.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, dv = function() {
  var e = $C(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, UC = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Al = function(e) {
  return parseInt(e || "", 10) || 0;
}, WC = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Al(n), Al(r), Al(o)];
}, HC = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return UC;
  var t = WC(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, KC = dv(), Br = "data-scroll-locked", GC = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(DC, ` {
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
  
  .`).concat(Di, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ni, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Di, " .").concat(Di, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ni, " .").concat(Ni, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Br, `] {
    `).concat(NC, ": ").concat(a, `px;
  }
`);
}, $p = function() {
  var e = parseInt(document.body.getAttribute(Br) || "0", 10);
  return isFinite(e) ? e : 0;
}, YC = function() {
  x.useEffect(function() {
    return document.body.setAttribute(Br, ($p() + 1).toString()), function() {
      var e = $p() - 1;
      e <= 0 ? document.body.removeAttribute(Br) : document.body.setAttribute(Br, e.toString());
    };
  }, []);
}, XC = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  YC();
  var s = x.useMemo(function() {
    return HC(o);
  }, [o]);
  return x.createElement(KC, { styles: GC(s, !t, o, n ? "" : "!important") });
}, Wu = !1;
if (typeof window < "u")
  try {
    var ni = Object.defineProperty({}, "passive", {
      get: function() {
        return Wu = !0, !0;
      }
    });
    window.addEventListener("test", ni, ni), window.removeEventListener("test", ni, ni);
  } catch {
    Wu = !1;
  }
var hr = Wu ? { passive: !1 } : !1, QC = function(e) {
  return e.tagName === "TEXTAREA";
}, fv = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !QC(e) && n[t] === "visible")
  );
}, qC = function(e) {
  return fv(e, "overflowY");
}, ZC = function(e) {
  return fv(e, "overflowX");
}, Up = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = pv(e, r);
    if (o) {
      var s = hv(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, JC = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, eE = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, pv = function(e, t) {
  return e === "v" ? qC(t) : ZC(t);
}, hv = function(e, t) {
  return e === "v" ? JC(t) : eE(t);
}, tE = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, nE = function(e, t, n, r, o) {
  var s = tE(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, l = t.contains(a), u = !1, c = i > 0, d = 0, f = 0;
  do {
    if (!a)
      break;
    var h = hv(e, a), w = h[0], y = h[1], S = h[2], m = y - S - s * w;
    (w || m) && pv(e, a) && (d += m, f += w);
    var g = a.parentNode;
    a = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (c && Math.abs(d) < 1 || !c && Math.abs(f) < 1) && (u = !0), u;
}, ri = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Wp = function(e) {
  return [e.deltaX, e.deltaY];
}, Hp = function(e) {
  return e && "current" in e ? e.current : e;
}, rE = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, oE = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, sE = 0, mr = [];
function iE(e) {
  var t = x.useRef([]), n = x.useRef([0, 0]), r = x.useRef(), o = x.useState(sE++)[0], s = x.useState(dv)[0], i = x.useRef(e);
  x.useEffect(function() {
    i.current = e;
  }, [e]), x.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var y = TC([e.lockRef.current], (e.shards || []).map(Hp), !0).filter(Boolean);
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
    var m = ri(y), g = n.current, v = "deltaX" in y ? y.deltaX : g[0] - m[0], b = "deltaY" in y ? y.deltaY : g[1] - m[1], k, P = y.target, C = Math.abs(v) > Math.abs(b) ? "h" : "v";
    if ("touches" in y && C === "h" && P.type === "range")
      return !1;
    var E = Up(C, P);
    if (!E)
      return !0;
    if (E ? k = C : (k = C === "v" ? "h" : "v", E = Up(C, P)), !E)
      return !1;
    if (!r.current && "changedTouches" in y && (v || b) && (r.current = k), !k)
      return !0;
    var D = r.current || k;
    return nE(D, S, y, D === "h" ? v : b);
  }, []), l = x.useCallback(function(y) {
    var S = y;
    if (!(!mr.length || mr[mr.length - 1] !== s)) {
      var m = "deltaY" in S ? Wp(S) : ri(S), g = t.current.filter(function(k) {
        return k.name === S.type && (k.target === S.target || S.target === k.shadowParent) && rE(k.delta, m);
      })[0];
      if (g && g.should) {
        S.cancelable && S.preventDefault();
        return;
      }
      if (!g) {
        var v = (i.current.shards || []).map(Hp).filter(Boolean).filter(function(k) {
          return k.contains(S.target);
        }), b = v.length > 0 ? a(S, v[0]) : !i.current.noIsolation;
        b && S.cancelable && S.preventDefault();
      }
    }
  }, []), u = x.useCallback(function(y, S, m, g) {
    var v = { name: y, delta: S, target: m, should: g, shadowParent: aE(m) };
    t.current.push(v), setTimeout(function() {
      t.current = t.current.filter(function(b) {
        return b !== v;
      });
    }, 1);
  }, []), c = x.useCallback(function(y) {
    n.current = ri(y), r.current = void 0;
  }, []), d = x.useCallback(function(y) {
    u(y.type, Wp(y), y.target, a(y, e.lockRef.current));
  }, []), f = x.useCallback(function(y) {
    u(y.type, ri(y), y.target, a(y, e.lockRef.current));
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
  var h = e.removeScrollBar, w = e.inert;
  return x.createElement(
    x.Fragment,
    null,
    w ? x.createElement(s, { styles: oE(o) }) : null,
    h ? x.createElement(XC, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function aE(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const lE = IC(cv, iE);
var kd = x.forwardRef(function(e, t) {
  return x.createElement(Oa, Mt({}, e, { ref: t, sideCar: lE }));
});
kd.classNames = Oa.classNames;
var uE = [" ", "Enter", "ArrowUp", "ArrowDown"], cE = [" ", "Enter"], sr = "Select", [Fa, Va, dE] = My(sr), [uo, TR] = io(sr, [
  dE,
  Qy
]), za = Qy(), [fE, On] = uo(sr), [pE, hE] = uo(sr), mv = (e) => {
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
  } = e, y = za(t), [S, m] = x.useState(null), [g, v] = x.useState(null), [b, k] = x.useState(!1), P = cd(u), [C, E] = hs({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: sr
  }), [D, N] = hs({
    prop: i,
    defaultProp: a,
    onChange: l,
    caller: sr
  }), j = x.useRef(null), A = S ? w || !!S.closest("form") : !0, [F, B] = x.useState(/* @__PURE__ */ new Set()), G = Array.from(F).map((V) => V.props.value).join(";");
  return /* @__PURE__ */ p.jsx(pC, { ...y, children: /* @__PURE__ */ p.jsxs(
    fE,
    {
      required: h,
      scope: t,
      trigger: S,
      onTriggerChange: m,
      valueNode: g,
      onValueNodeChange: v,
      valueNodeHasChildren: b,
      onValueNodeHasChildrenChange: k,
      contentId: En(),
      value: D,
      onValueChange: N,
      open: C,
      onOpenChange: E,
      dir: P,
      triggerPointerDownPosRef: j,
      disabled: f,
      children: [
        /* @__PURE__ */ p.jsx(Fa.Provider, { scope: t, children: /* @__PURE__ */ p.jsx(
          pE,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: x.useCallback((V) => {
              B((O) => new Set(O).add(V));
            }, []),
            onNativeOptionRemove: x.useCallback((V) => {
              B((O) => {
                const T = new Set(O);
                return T.delete(V), T;
              });
            }, []),
            children: n
          }
        ) }),
        A ? /* @__PURE__ */ p.jsxs(
          Ov,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: c,
            autoComplete: d,
            value: D,
            onChange: (V) => N(V.target.value),
            disabled: f,
            form: w,
            children: [
              D === void 0 ? /* @__PURE__ */ p.jsx("option", { value: "" }) : null,
              Array.from(F)
            ]
          },
          G
        ) : null
      ]
    }
  ) });
};
mv.displayName = sr;
var gv = "SelectTrigger", yv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = za(n), i = On(gv, n), a = i.disabled || r, l = we(t, i.onTriggerChange), u = Va(n), c = x.useRef("touch"), [d, f, h] = Vv((y) => {
      const S = u().filter((v) => !v.disabled), m = S.find((v) => v.value === i.value), g = zv(S, y, m);
      g !== void 0 && i.onValueChange(g.value);
    }), w = (y) => {
      a || (i.onOpenChange(!0), h()), y && (i.triggerPointerDownPosRef.current = {
        x: Math.round(y.pageX),
        y: Math.round(y.pageY)
      });
    };
    return /* @__PURE__ */ p.jsx(hC, { asChild: !0, ...s, children: /* @__PURE__ */ p.jsx(
      Z.button,
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
        "data-placeholder": Fv(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: X(o.onClick, (y) => {
          y.currentTarget.focus(), c.current !== "mouse" && w(y);
        }),
        onPointerDown: X(o.onPointerDown, (y) => {
          c.current = y.pointerType;
          const S = y.target;
          S.hasPointerCapture(y.pointerId) && S.releasePointerCapture(y.pointerId), y.button === 0 && y.ctrlKey === !1 && y.pointerType === "mouse" && (w(y), y.preventDefault());
        }),
        onKeyDown: X(o.onKeyDown, (y) => {
          const S = d.current !== "";
          !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && f(y.key), !(S && y.key === " ") && uE.includes(y.key) && (w(), y.preventDefault());
        })
      }
    ) });
  }
);
yv.displayName = gv;
var vv = "SelectValue", xv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: i = "", ...a } = e, l = On(vv, n), { onValueNodeHasChildrenChange: u } = l, c = s !== void 0, d = we(t, l.onValueNodeChange);
    return Be(() => {
      u(c);
    }, [u, c]), /* @__PURE__ */ p.jsx(
      Z.span,
      {
        ...a,
        ref: d,
        style: { pointerEvents: "none" },
        children: Fv(l.value) ? /* @__PURE__ */ p.jsx(p.Fragment, { children: i }) : s
      }
    );
  }
);
xv.displayName = vv;
var mE = "SelectIcon", wv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ p.jsx(Z.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
wv.displayName = mE;
var gE = "SelectPortal", Sv = (e) => /* @__PURE__ */ p.jsx(bd, { asChild: !0, ...e });
Sv.displayName = gE;
var ir = "SelectContent", bv = x.forwardRef(
  (e, t) => {
    const n = On(ir, e.__scopeSelect), [r, o] = x.useState();
    if (Be(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? oo.createPortal(
        /* @__PURE__ */ p.jsx(kv, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx(Fa.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ p.jsx(Cv, { ...e, ref: t });
  }
);
bv.displayName = ir;
var yt = 10, [kv, Fn] = uo(ir), yE = "SelectContentImpl", vE = /* @__PURE__ */ ds("SelectContent.RemoveScroll"), Cv = x.forwardRef(
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
      ...m
    } = e, g = On(ir, n), [v, b] = x.useState(null), [k, P] = x.useState(null), C = we(t, (z) => b(z)), [E, D] = x.useState(null), [N, j] = x.useState(
      null
    ), A = Va(n), [F, B] = x.useState(!1), G = x.useRef(!1);
    x.useEffect(() => {
      if (v) return av(v);
    }, [v]), _y();
    const V = x.useCallback(
      (z) => {
        const [te, ...Le] = A().map((re) => re.ref.current), [oe] = Le.slice(-1), ne = document.activeElement;
        for (const re of z)
          if (re === ne || (re == null || re.scrollIntoView({ block: "nearest" }), re === te && k && (k.scrollTop = 0), re === oe && k && (k.scrollTop = k.scrollHeight), re == null || re.focus(), document.activeElement !== ne)) return;
      },
      [A, k]
    ), O = x.useCallback(
      () => V([E, v]),
      [V, E, v]
    );
    x.useEffect(() => {
      F && O();
    }, [F, O]);
    const { onOpenChange: T, triggerPointerDownPosRef: M } = g;
    x.useEffect(() => {
      if (v) {
        let z = { x: 0, y: 0 };
        const te = (oe) => {
          var ne, re;
          z = {
            x: Math.abs(Math.round(oe.pageX) - (((ne = M.current) == null ? void 0 : ne.x) ?? 0)),
            y: Math.abs(Math.round(oe.pageY) - (((re = M.current) == null ? void 0 : re.y) ?? 0))
          };
        }, Le = (oe) => {
          z.x <= 10 && z.y <= 10 ? oe.preventDefault() : v.contains(oe.target) || T(!1), document.removeEventListener("pointermove", te), M.current = null;
        };
        return M.current !== null && (document.addEventListener("pointermove", te), document.addEventListener("pointerup", Le, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", te), document.removeEventListener("pointerup", Le, { capture: !0 });
        };
      }
    }, [v, T, M]), x.useEffect(() => {
      const z = () => T(!1);
      return window.addEventListener("blur", z), window.addEventListener("resize", z), () => {
        window.removeEventListener("blur", z), window.removeEventListener("resize", z);
      };
    }, [T]);
    const [_, H] = Vv((z) => {
      const te = A().filter((ne) => !ne.disabled), Le = te.find((ne) => ne.ref.current === document.activeElement), oe = zv(te, z, Le);
      oe && setTimeout(() => oe.ref.current.focus());
    }), L = x.useCallback(
      (z, te, Le) => {
        const oe = !G.current && !Le;
        (g.value !== void 0 && g.value === te || oe) && (D(z), oe && (G.current = !0));
      },
      [g.value]
    ), ae = x.useCallback(() => v == null ? void 0 : v.focus(), [v]), Q = x.useCallback(
      (z, te, Le) => {
        const oe = !G.current && !Le;
        (g.value !== void 0 && g.value === te || oe) && j(z);
      },
      [g.value]
    ), ee = r === "popper" ? Hu : Ev, ke = ee === Hu ? {
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
      kv,
      {
        scope: n,
        content: v,
        viewport: k,
        onViewportChange: P,
        itemRefCallback: L,
        selectedItem: E,
        onItemLeave: ae,
        itemTextRefCallback: Q,
        focusSelectedItem: O,
        selectedItemText: N,
        position: r,
        isPositioned: F,
        searchRef: _,
        children: /* @__PURE__ */ p.jsx(kd, { as: vE, allowPinchZoom: !0, children: /* @__PURE__ */ p.jsx(
          fd,
          {
            asChild: !0,
            trapped: g.open,
            onMountAutoFocus: (z) => {
              z.preventDefault();
            },
            onUnmountAutoFocus: X(o, (z) => {
              var te;
              (te = g.trigger) == null || te.focus({ preventScroll: !0 }), z.preventDefault();
            }),
            children: /* @__PURE__ */ p.jsx(
              dd,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: (z) => z.preventDefault(),
                onDismiss: () => g.onOpenChange(!1),
                children: /* @__PURE__ */ p.jsx(
                  ee,
                  {
                    role: "listbox",
                    id: g.contentId,
                    "data-state": g.open ? "open" : "closed",
                    dir: g.dir,
                    onContextMenu: (z) => z.preventDefault(),
                    ...m,
                    ...ke,
                    onPlaced: () => B(!0),
                    ref: C,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...m.style
                    },
                    onKeyDown: X(m.onKeyDown, (z) => {
                      const te = z.ctrlKey || z.altKey || z.metaKey;
                      if (z.key === "Tab" && z.preventDefault(), !te && z.key.length === 1 && H(z.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(z.key)) {
                        let oe = A().filter((ne) => !ne.disabled).map((ne) => ne.ref.current);
                        if (["ArrowUp", "End"].includes(z.key) && (oe = oe.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(z.key)) {
                          const ne = z.target, re = oe.indexOf(ne);
                          oe = oe.slice(re + 1);
                        }
                        setTimeout(() => V(oe)), z.preventDefault();
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
Cv.displayName = yE;
var xE = "SelectItemAlignedPosition", Ev = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = On(ir, n), i = Fn(ir, n), [a, l] = x.useState(null), [u, c] = x.useState(null), d = we(t, (C) => c(C)), f = Va(n), h = x.useRef(!1), w = x.useRef(!0), { viewport: y, selectedItem: S, selectedItemText: m, focusSelectedItem: g } = i, v = x.useCallback(() => {
    if (s.trigger && s.valueNode && a && u && y && S && m) {
      const C = s.trigger.getBoundingClientRect(), E = u.getBoundingClientRect(), D = s.valueNode.getBoundingClientRect(), N = m.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const ne = N.left - E.left, re = D.left - ne, qe = C.left - re, Dt = C.width + qe, po = Math.max(Dt, E.width), ho = window.innerWidth - yt, mo = bp(re, [
          yt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(yt, ho - po)
        ]);
        a.style.minWidth = Dt + "px", a.style.left = mo + "px";
      } else {
        const ne = E.right - N.right, re = window.innerWidth - D.right - ne, qe = window.innerWidth - C.right - re, Dt = C.width + qe, po = Math.max(Dt, E.width), ho = window.innerWidth - yt, mo = bp(re, [
          yt,
          Math.max(yt, ho - po)
        ]);
        a.style.minWidth = Dt + "px", a.style.right = mo + "px";
      }
      const j = f(), A = window.innerHeight - yt * 2, F = y.scrollHeight, B = window.getComputedStyle(u), G = parseInt(B.borderTopWidth, 10), V = parseInt(B.paddingTop, 10), O = parseInt(B.borderBottomWidth, 10), T = parseInt(B.paddingBottom, 10), M = G + V + F + T + O, _ = Math.min(S.offsetHeight * 5, M), H = window.getComputedStyle(y), L = parseInt(H.paddingTop, 10), ae = parseInt(H.paddingBottom, 10), Q = C.top + C.height / 2 - yt, ee = A - Q, ke = S.offsetHeight / 2, z = S.offsetTop + ke, te = G + V + z, Le = M - te;
      if (te <= Q) {
        const ne = j.length > 0 && S === j[j.length - 1].ref.current;
        a.style.bottom = "0px";
        const re = u.clientHeight - y.offsetTop - y.offsetHeight, qe = Math.max(
          ee,
          ke + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ne ? ae : 0) + re + O
        ), Dt = te + qe;
        a.style.height = Dt + "px";
      } else {
        const ne = j.length > 0 && S === j[0].ref.current;
        a.style.top = "0px";
        const qe = Math.max(
          Q,
          G + y.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ne ? L : 0) + ke
        ) + Le;
        a.style.height = qe + "px", y.scrollTop = te - Q + y.offsetTop;
      }
      a.style.margin = `${yt}px 0`, a.style.minHeight = _ + "px", a.style.maxHeight = A + "px", r == null || r(), requestAnimationFrame(() => h.current = !0);
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
  Be(() => v(), [v]);
  const [b, k] = x.useState();
  Be(() => {
    u && k(window.getComputedStyle(u).zIndex);
  }, [u]);
  const P = x.useCallback(
    (C) => {
      C && w.current === !0 && (v(), g == null || g(), w.current = !1);
    },
    [v, g]
  );
  return /* @__PURE__ */ p.jsx(
    SE,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: P,
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
            Z.div,
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
Ev.displayName = xE;
var wE = "SelectPopperPosition", Hu = x.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = yt,
    ...s
  } = e, i = za(n);
  return /* @__PURE__ */ p.jsx(
    mC,
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
Hu.displayName = wE;
var [SE, Cd] = uo(ir, {}), Ku = "SelectViewport", Pv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = Fn(Ku, n), i = Cd(Ku, n), a = we(t, s.onViewportChange), l = x.useRef(0);
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
      /* @__PURE__ */ p.jsx(Fa.Slot, { scope: n, children: /* @__PURE__ */ p.jsx(
        Z.div,
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
          onScroll: X(o.onScroll, (u) => {
            const c = u.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: f } = i;
            if (f != null && f.current && d) {
              const h = Math.abs(l.current - c.scrollTop);
              if (h > 0) {
                const w = window.innerHeight - yt * 2, y = parseFloat(d.style.minHeight), S = parseFloat(d.style.height), m = Math.max(y, S);
                if (m < w) {
                  const g = m + h, v = Math.min(w, g), b = g - v;
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
Pv.displayName = Ku;
var Tv = "SelectGroup", [bE, kE] = uo(Tv), CE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = En();
    return /* @__PURE__ */ p.jsx(bE, { scope: n, id: o, children: /* @__PURE__ */ p.jsx(Z.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
CE.displayName = Tv;
var Dv = "SelectLabel", EE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = kE(Dv, n);
    return /* @__PURE__ */ p.jsx(Z.div, { id: o.id, ...r, ref: t });
  }
);
EE.displayName = Dv;
var la = "SelectItem", [PE, Nv] = uo(la), Rv = x.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...i
    } = e, a = On(la, n), l = Fn(la, n), u = a.value === r, [c, d] = x.useState(s ?? ""), [f, h] = x.useState(!1), w = we(
      t,
      (g) => {
        var v;
        return (v = l.itemRefCallback) == null ? void 0 : v.call(l, g, r, o);
      }
    ), y = En(), S = x.useRef("touch"), m = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ p.jsx(
      PE,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: y,
        isSelected: u,
        onItemTextChange: x.useCallback((g) => {
          d((v) => v || ((g == null ? void 0 : g.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ p.jsx(
          Fa.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: c,
            children: /* @__PURE__ */ p.jsx(
              Z.div,
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
                onFocus: X(i.onFocus, () => h(!0)),
                onBlur: X(i.onBlur, () => h(!1)),
                onClick: X(i.onClick, () => {
                  S.current !== "mouse" && m();
                }),
                onPointerUp: X(i.onPointerUp, () => {
                  S.current === "mouse" && m();
                }),
                onPointerDown: X(i.onPointerDown, (g) => {
                  S.current = g.pointerType;
                }),
                onPointerMove: X(i.onPointerMove, (g) => {
                  var v;
                  S.current = g.pointerType, o ? (v = l.onItemLeave) == null || v.call(l) : S.current === "mouse" && g.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: X(i.onPointerLeave, (g) => {
                  var v;
                  g.currentTarget === document.activeElement && ((v = l.onItemLeave) == null || v.call(l));
                }),
                onKeyDown: X(i.onKeyDown, (g) => {
                  var b;
                  ((b = l.searchRef) == null ? void 0 : b.current) !== "" && g.key === " " || (cE.includes(g.key) && m(), g.key === " " && g.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Rv.displayName = la;
var Ao = "SelectItemText", Av = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, i = On(Ao, n), a = Fn(Ao, n), l = Nv(Ao, n), u = hE(Ao, n), [c, d] = x.useState(null), f = we(
      t,
      (m) => d(m),
      l.onItemTextChange,
      (m) => {
        var g;
        return (g = a.itemTextRefCallback) == null ? void 0 : g.call(a, m, l.value, l.disabled);
      }
    ), h = c == null ? void 0 : c.textContent, w = x.useMemo(
      () => /* @__PURE__ */ p.jsx("option", { value: l.value, disabled: l.disabled, children: h }, l.value),
      [l.disabled, l.value, h]
    ), { onNativeOptionAdd: y, onNativeOptionRemove: S } = u;
    return Be(() => (y(w), () => S(w)), [y, S, w]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(Z.span, { id: l.textId, ...s, ref: f }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? oo.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
Av.displayName = Ao;
var Mv = "SelectItemIndicator", jv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Nv(Mv, n).isSelected ? /* @__PURE__ */ p.jsx(Z.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
jv.displayName = Mv;
var Gu = "SelectScrollUpButton", Lv = x.forwardRef((e, t) => {
  const n = Fn(Gu, e.__scopeSelect), r = Cd(Gu, e.__scopeSelect), [o, s] = x.useState(!1), i = we(t, r.onScrollButtonChange);
  return Be(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = l.scrollTop > 0;
        s(u);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    Iv,
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
Lv.displayName = Gu;
var Yu = "SelectScrollDownButton", _v = x.forwardRef((e, t) => {
  const n = Fn(Yu, e.__scopeSelect), r = Cd(Yu, e.__scopeSelect), [o, s] = x.useState(!1), i = we(t, r.onScrollButtonChange);
  return Be(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = l.scrollHeight - l.clientHeight, c = Math.ceil(l.scrollTop) < u;
        s(c);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    Iv,
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
_v.displayName = Yu;
var Iv = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = Fn("SelectScrollButton", n), i = x.useRef(null), a = Va(n), l = x.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return x.useEffect(() => () => l(), [l]), Be(() => {
    var c;
    const u = a().find((d) => d.ref.current === document.activeElement);
    (c = u == null ? void 0 : u.ref.current) == null || c.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ p.jsx(
    Z.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: X(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: X(o.onPointerMove, () => {
        var u;
        (u = s.onItemLeave) == null || u.call(s), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: X(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), TE = "SelectSeparator", DE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ p.jsx(Z.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
DE.displayName = TE;
var Xu = "SelectArrow", NE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = za(n), s = On(Xu, n), i = Fn(Xu, n);
    return s.open && i.position === "popper" ? /* @__PURE__ */ p.jsx(gC, { ...o, ...r, ref: t }) : null;
  }
);
NE.displayName = Xu;
var RE = "SelectBubbleInput", Ov = x.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = x.useRef(null), s = we(r, o), i = SC(t);
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
      Z.select,
      {
        ...n,
        style: { ...sv, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
Ov.displayName = RE;
function Fv(e) {
  return e === "" || e === void 0;
}
function Vv(e) {
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
function zv(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = AE(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function AE(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var ME = mv, jE = yv, LE = xv, _E = wv, IE = Sv, OE = bv, FE = Pv, VE = Rv, zE = Av, BE = jv, $E = Lv, UE = _v;
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WE = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Bv = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var HE = {
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
const KE = x.forwardRef(
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
      ...HE,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Bv("lucide", o),
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
const Ne = (e, t) => {
  const n = x.forwardRef(
    ({ className: r, ...o }, s) => x.createElement(KE, {
      ref: s,
      iconNode: t,
      className: Bv(`lucide-${WE(e)}`, r),
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
const $v = Ne("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uv = Ne("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ba = Ne("Building2", [
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
const GE = Ne("Building", [
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
const ms = Ne("CalendarDays", [
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
const Ri = Ne("Calendar", [
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
const YE = Ne("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ed = Ne("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wv = Ne("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hv = Ne("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kv = Ne("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = Ne("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XE = Ne("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QE = Ne("ExternalLink", [
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
const Kp = Ne("List", [
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
const Gv = Ne("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = Ne("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qE = Ne("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function oi({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(ME, { "data-slot": "select", ...e });
}
function si({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(LE, { "data-slot": "select-value", ...e });
}
function ii({
  className: e,
  size: t = "default",
  children: n,
  ...r
}) {
  return /* @__PURE__ */ p.jsxs(
    jE,
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
        /* @__PURE__ */ p.jsx(_E, { asChild: !0, children: /* @__PURE__ */ p.jsx(Ed, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function ai({
  className: e,
  children: t,
  position: n = "popper",
  ...r
}) {
  return /* @__PURE__ */ p.jsx(IE, { children: /* @__PURE__ */ p.jsxs(
    OE,
    {
      "data-slot": "select-content",
      className: xe(
        "bg-white text-gray-900 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-[9999] max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      ...r,
      children: [
        /* @__PURE__ */ p.jsx(ZE, {}),
        /* @__PURE__ */ p.jsx(
          FE,
          {
            className: xe(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ p.jsx(JE, {})
      ]
    }
  ) });
}
function an({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ p.jsxs(
    VE,
    {
      "data-slot": "select-item",
      className: xe(
        "focus:bg-gray-100 focus:text-gray-900 hover:bg-gray-50 text-gray-900 relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ p.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ p.jsx(BE, { children: /* @__PURE__ */ p.jsx(YE, { className: "size-4" }) }) }),
        /* @__PURE__ */ p.jsx(zE, { children: t })
      ]
    }
  );
}
function ZE({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    $E,
    {
      "data-slot": "select-scroll-up-button",
      className: xe(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p.jsx(Kv, { className: "size-4" })
    }
  );
}
function JE({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    UE,
    {
      "data-slot": "select-scroll-down-button",
      className: xe(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p.jsx(Ed, { className: "size-4" })
    }
  );
}
const Qu = x.forwardRef(
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
Qu.displayName = "Input";
var Ml = "rovingFocusGroup.onEntryFocus", eP = { bubbles: !1, cancelable: !0 }, Ns = "RovingFocusGroup", [qu, Yv, tP] = My(Ns), [nP, Xv] = io(
  Ns,
  [tP]
), [rP, oP] = nP(Ns), Qv = x.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(qu.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(qu.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(sP, { ...e, ref: t }) }) })
);
Qv.displayName = Ns;
var sP = x.forwardRef((e, t) => {
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
  } = e, f = x.useRef(null), h = we(t, f), w = cd(s), [y, S] = hs({
    prop: i,
    defaultProp: a ?? null,
    onChange: l,
    caller: Ns
  }), [m, g] = x.useState(!1), v = Nn(u), b = Yv(n), k = x.useRef(!1), [P, C] = x.useState(0);
  return x.useEffect(() => {
    const E = f.current;
    if (E)
      return E.addEventListener(Ml, v), () => E.removeEventListener(Ml, v);
  }, [v]), /* @__PURE__ */ p.jsx(
    rP,
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
      onItemShiftTab: x.useCallback(() => g(!0), []),
      onFocusableItemAdd: x.useCallback(
        () => C((E) => E + 1),
        []
      ),
      onFocusableItemRemove: x.useCallback(
        () => C((E) => E - 1),
        []
      ),
      children: /* @__PURE__ */ p.jsx(
        Z.div,
        {
          tabIndex: m || P === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: X(e.onMouseDown, () => {
            k.current = !0;
          }),
          onFocus: X(e.onFocus, (E) => {
            const D = !k.current;
            if (E.target === E.currentTarget && D && !m) {
              const N = new CustomEvent(Ml, eP);
              if (E.currentTarget.dispatchEvent(N), !N.defaultPrevented) {
                const j = b().filter((V) => V.focusable), A = j.find((V) => V.active), F = j.find((V) => V.id === y), G = [A, F, ...j].filter(
                  Boolean
                ).map((V) => V.ref.current);
                Jv(G, c);
              }
            }
            k.current = !1;
          }),
          onBlur: X(e.onBlur, () => g(!1))
        }
      )
    }
  );
}), qv = "RovingFocusGroupItem", Zv = x.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: i,
      ...a
    } = e, l = En(), u = s || l, c = oP(qv, n), d = c.currentTabStopId === u, f = Yv(n), { onFocusableItemAdd: h, onFocusableItemRemove: w, currentTabStopId: y } = c;
    return x.useEffect(() => {
      if (r)
        return h(), () => w();
    }, [r, h, w]), /* @__PURE__ */ p.jsx(
      qu.ItemSlot,
      {
        scope: n,
        id: u,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ p.jsx(
          Z.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": c.orientation,
            ...a,
            ref: t,
            onMouseDown: X(e.onMouseDown, (S) => {
              r ? c.onItemFocus(u) : S.preventDefault();
            }),
            onFocus: X(e.onFocus, () => c.onItemFocus(u)),
            onKeyDown: X(e.onKeyDown, (S) => {
              if (S.key === "Tab" && S.shiftKey) {
                c.onItemShiftTab();
                return;
              }
              if (S.target !== S.currentTarget) return;
              const m = lP(S, c.orientation, c.dir);
              if (m !== void 0) {
                if (S.metaKey || S.ctrlKey || S.altKey || S.shiftKey) return;
                S.preventDefault();
                let v = f().filter((b) => b.focusable).map((b) => b.ref.current);
                if (m === "last") v.reverse();
                else if (m === "prev" || m === "next") {
                  m === "prev" && v.reverse();
                  const b = v.indexOf(S.currentTarget);
                  v = c.loop ? uP(v, b + 1) : v.slice(b + 1);
                }
                setTimeout(() => Jv(v));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: d, hasTabStop: y != null }) : i
          }
        )
      }
    );
  }
);
Zv.displayName = qv;
var iP = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function aP(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function lP(e, t, n) {
  const r = aP(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return iP[r];
}
function Jv(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function uP(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var cP = Qv, dP = Zv;
function fP(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var Rs = (e) => {
  const { present: t, children: n } = e, r = pP(t), o = typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n), s = we(r.ref, hP(o));
  return typeof n == "function" || r.isPresent ? x.cloneElement(o, { ref: s }) : null;
};
Rs.displayName = "Presence";
function pP(e) {
  const [t, n] = x.useState(), r = x.useRef(null), o = x.useRef(e), s = x.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = fP(i, {
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
    const u = li(r.current);
    s.current = a === "mounted" ? u : "none";
  }, [a]), Be(() => {
    const u = r.current, c = o.current;
    if (c !== e) {
      const f = s.current, h = li(u);
      e ? l("MOUNT") : h === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Be(() => {
    if (t) {
      let u;
      const c = t.ownerDocument.defaultView ?? window, d = (h) => {
        const y = li(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && y && (l("ANIMATION_END"), !o.current)) {
          const S = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = c.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S);
          });
        }
      }, f = (h) => {
        h.target === t && (s.current = li(r.current));
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
function li(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function hP(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var $a = "Tabs", [mP, DR] = io($a, [
  Xv
]), e0 = Xv(), [gP, Pd] = mP($a), t0 = x.forwardRef(
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
    } = e, c = cd(a), [d, f] = hs({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: $a
    });
    return /* @__PURE__ */ p.jsx(
      gP,
      {
        scope: n,
        baseId: En(),
        value: d,
        onValueChange: f,
        orientation: i,
        dir: c,
        activationMode: l,
        children: /* @__PURE__ */ p.jsx(
          Z.div,
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
t0.displayName = $a;
var n0 = "TabsList", r0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = Pd(n0, n), i = e0(n);
    return /* @__PURE__ */ p.jsx(
      cP,
      {
        asChild: !0,
        ...i,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ p.jsx(
          Z.div,
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
r0.displayName = n0;
var o0 = "TabsTrigger", s0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, i = Pd(o0, n), a = e0(n), l = l0(i.baseId, r), u = u0(i.baseId, r), c = r === i.value;
    return /* @__PURE__ */ p.jsx(
      dP,
      {
        asChild: !0,
        ...a,
        focusable: !o,
        active: c,
        children: /* @__PURE__ */ p.jsx(
          Z.button,
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
            onMouseDown: X(e.onMouseDown, (d) => {
              !o && d.button === 0 && d.ctrlKey === !1 ? i.onValueChange(r) : d.preventDefault();
            }),
            onKeyDown: X(e.onKeyDown, (d) => {
              [" ", "Enter"].includes(d.key) && i.onValueChange(r);
            }),
            onFocus: X(e.onFocus, () => {
              const d = i.activationMode !== "manual";
              !c && !o && d && i.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
s0.displayName = o0;
var i0 = "TabsContent", a0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...i } = e, a = Pd(i0, n), l = l0(a.baseId, r), u = u0(a.baseId, r), c = r === a.value, d = x.useRef(c);
    return x.useEffect(() => {
      const f = requestAnimationFrame(() => d.current = !1);
      return () => cancelAnimationFrame(f);
    }, []), /* @__PURE__ */ p.jsx(Rs, { present: o || c, children: ({ present: f }) => /* @__PURE__ */ p.jsx(
      Z.div,
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
a0.displayName = i0;
function l0(e, t) {
  return `${e}-trigger-${t}`;
}
function u0(e, t) {
  return `${e}-content-${t}`;
}
var yP = t0, vP = r0, xP = s0, wP = a0;
function SP({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    yP,
    {
      "data-slot": "tabs",
      className: xe("flex flex-col gap-2", e),
      ...t
    }
  );
}
function Gp({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    vP,
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
function zn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    xP,
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
function ui({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    wP,
    {
      "data-slot": "tabs-content",
      className: xe("flex-1 outline-none", e),
      ...t
    }
  );
}
const fn = /* @__PURE__ */ new Date(), U = fn.getMonth(), W = fn.getFullYear(), bP = [
  {
    id: "1",
    title: "Indigenous Culture Workshop",
    description: "Learn about local Indigenous traditions and participate in hands-on cultural activities led by community elders.",
    startDate: new Date(W, U, 15, 14, 0),
    endDate: new Date(W, U, 15, 16, 0),
    variant: "warning"
  },
  {
    id: "2",
    title: "Career Fair 2025",
    description: "Meet with local employers and explore career opportunities in Northern BC and beyond.",
    startDate: new Date(W, U, 18, 10, 0),
    endDate: new Date(W, U, 18, 15, 0),
    variant: "success"
  },
  {
    id: "3",
    title: "Hiking Trip to Tabletop Mountain",
    description: "Join us for a challenging but rewarding day hike to one of the region's most spectacular viewpoints.",
    startDate: new Date(W, U, 22, 8, 0),
    endDate: new Date(W, U, 22, 18, 0),
    variant: "danger"
  },
  {
    id: "4",
    title: "Mental Health Awareness Week",
    description: "A week-long series of workshops, activities, and resources focused on mental health and wellbeing.",
    startDate: new Date(W, U, 26, 9, 0),
    endDate: new Date(W, U, 26, 17, 0),
    variant: "warning"
  },
  {
    id: "5",
    title: "Spring Formal Dance",
    description: "Celebrate the end of the semester with music, dancing, and refreshments in our beautiful Winter Garden.",
    startDate: new Date(W, U, Math.min(29, new Date(W, U + 1, 0).getDate()), 19, 0),
    endDate: new Date(W, U, Math.min(29, new Date(W, U + 1, 0).getDate()), 23, 0),
    variant: "warning"
  },
  {
    id: "6",
    title: "Research Presentation Day",
    description: "Graduate students present their research findings across various disciplines.",
    startDate: new Date(W, U, 12, 13, 0),
    endDate: new Date(W, U, 12, 17, 0),
    variant: "success"
  },
  {
    id: "7",
    title: "Photography Workshop",
    description: "Learn basic photography techniques and composition.",
    startDate: new Date(W, U, 5, 15, 30),
    endDate: new Date(W, U, 5, 17, 30),
    variant: "warning"
  },
  {
    id: "8",
    title: "Volunteer Fair",
    description: "Connect with local organizations looking for volunteers.",
    startDate: new Date(W, U, 8, 11, 0),
    endDate: new Date(W, U, 8, 14, 0),
    variant: "default"
  },
  {
    id: "9",
    title: "Business Networking Event",
    description: "Network with local business professionals and alumni.",
    startDate: new Date(W, U, 20, 18, 0),
    endDate: new Date(W, U, 20, 20, 0),
    variant: "success"
  },
  {
    id: "10",
    title: "Stress Relief Workshop",
    description: "Learn effective stress management techniques for exam season.",
    startDate: new Date(W, U, 14, 16, 0),
    endDate: new Date(W, U, 14, 17, 30),
    variant: "warning"
  },
  {
    id: "11",
    title: "International Food Festival",
    description: "Taste foods from around the world and celebrate cultural diversity.",
    startDate: new Date(W, U, 25, 12, 0),
    endDate: new Date(W, U, 25, 16, 0),
    variant: "warning"
  },
  {
    id: "12",
    title: "Campus Soccer Tournament",
    description: "Join teams and compete in our annual soccer tournament.",
    startDate: new Date(W, U, Math.min(30, new Date(W, U + 1, 0).getDate()), 9, 0),
    endDate: new Date(W, U, Math.min(30, new Date(W, U + 1, 0).getDate()), 17, 0),
    variant: "danger"
  },
  {
    id: "13",
    title: "Morning Yoga Session",
    description: "Start your day with a relaxing yoga session.",
    startDate: new Date(W, U, Math.max(1, fn.getDate() - 2), 7, 0),
    endDate: new Date(W, U, Math.max(1, fn.getDate() - 2), 8, 0),
    variant: "warning"
  },
  {
    id: "14",
    title: "Study Group - Biology 101",
    description: "Group study session for upcoming Biology 101 midterm exam.",
    startDate: new Date(W, U, Math.max(1, fn.getDate() - 1), 10, 0),
    endDate: new Date(W, U, Math.max(1, fn.getDate() - 1), 12, 0),
    variant: "success"
  },
  {
    id: "15",
    title: "Lunch & Learn: Sustainability",
    description: "Learn about campus sustainability initiatives while enjoying lunch.",
    startDate: new Date(W, U, fn.getDate(), 12, 0),
    endDate: new Date(W, U, fn.getDate(), 13, 0),
    variant: "success"
  },
  {
    id: "16",
    title: "Study Session - Math Tutoring",
    description: "Drop-in math tutoring session for students needing extra help.",
    startDate: new Date(W, U, Math.min(28, new Date(W, U + 1, 0).getDate()), 14, 0),
    endDate: new Date(W, U, Math.min(28, new Date(W, U + 1, 0).getDate()), 16, 0),
    variant: "default"
  },
  {
    id: "17",
    title: "Campus Walking Group",
    description: "Informal walking group meeting at the main entrance. All fitness levels welcome.",
    startDate: new Date(W, U, Math.min(27, new Date(W, U + 1, 0).getDate()), 17, 0),
    endDate: new Date(W, U, Math.min(27, new Date(W, U + 1, 0).getDate()), 18, 0),
    variant: "warning"
  },
  {
    id: "18",
    title: "Free Pizza Friday",
    description: "Free pizza available in the student lounge while supplies last.",
    startDate: new Date(W, U, Math.min(24, new Date(W, U + 1, 0).getDate()), 11, 30),
    endDate: new Date(W, U, Math.min(24, new Date(W, U + 1, 0).getDate()), 13, 0),
    variant: "success"
  }
], kP = {
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
function CP() {
  const [e, t] = x.useState(!0);
  x.useEffect(() => {
    const o = setTimeout(() => {
      t(!1);
    }, 500);
    return () => clearTimeout(o);
  }, []);
  const n = bP;
  return {
    events: n,
    eventMetadata: kP,
    loading: e,
    error: null,
    total: n.length,
    setFilters: () => {
    }
  };
}
class EP {
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
const jl = new EP();
function c0(e = {}) {
  const [t, n] = x.useState([]), [r, o] = x.useState({}), [s, i] = x.useState(!0), [a, l] = x.useState(null), [u, c] = x.useState(0), [d, f] = x.useState(0), [h, w] = x.useState(e), y = x.useCallback(async () => {
    try {
      i(!0), l(null);
      const g = await jl.fetchEvents(h), v = [], b = {};
      g.events.forEach((k) => {
        const P = jl.transformWordPressEventToEvent(k), C = jl.transformWordPressEventToMetadata(k);
        v.push(P), b[P.id] = C;
      }), n(v), o(b), c(g.total), f(g.pages);
    } catch (g) {
      console.error("Error fetching events:", g), n([]), o({}), c(0), f(0), l(g instanceof Error ? g.message : "Failed to load events");
    } finally {
      i(!1);
    }
  }, [h]);
  x.useEffect(() => {
    y();
  }, [y]);
  const S = x.useCallback(() => {
    y();
  }, [y]), m = x.useCallback((g) => {
    w((v) => ({ ...v, ...g }));
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
const PP = {
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
function TP() {
  const [e, t] = x.useState([]), [n, r] = x.useState(!0), [o, s] = x.useState(null);
  return x.useEffect(() => {
    (async () => {
      try {
        r(!0);
        const a = await PP.getAll();
        t(a), s(null);
      } catch {
        s("Failed to load organizations");
      } finally {
        r(!1);
      }
    })();
  }, []), { organizations: e, loading: n, error: o };
}
function DP() {
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
        const d = u.map((f) => ({
          id: f.id,
          name: f.name,
          slug: f.slug,
          count: f.count,
          variant: c[f.slug] || NP(f.slug)
        }));
        t(d);
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
function NP(e) {
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
var Ua = "Dialog", [d0, NR] = io(Ua), [RP, Tt] = d0(Ua), f0 = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !0
  } = e, a = x.useRef(null), l = x.useRef(null), [u, c] = hs({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Ua
  });
  return /* @__PURE__ */ p.jsx(
    RP,
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
f0.displayName = Ua;
var p0 = "DialogTrigger", AP = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Tt(p0, n), s = we(t, o.triggerRef);
    return /* @__PURE__ */ p.jsx(
      Z.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Nd(o.open),
        ...r,
        ref: s,
        onClick: X(e.onClick, o.onOpenToggle)
      }
    );
  }
);
AP.displayName = p0;
var Td = "DialogPortal", [MP, h0] = d0(Td, {
  forceMount: void 0
}), m0 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = Tt(Td, t);
  return /* @__PURE__ */ p.jsx(MP, { scope: t, forceMount: n, children: x.Children.map(r, (i) => /* @__PURE__ */ p.jsx(Rs, { present: n || s.open, children: /* @__PURE__ */ p.jsx(bd, { asChild: !0, container: o, children: i }) })) });
};
m0.displayName = Td;
var ua = "DialogOverlay", g0 = x.forwardRef(
  (e, t) => {
    const n = h0(ua, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Tt(ua, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ p.jsx(Rs, { present: r || s.open, children: /* @__PURE__ */ p.jsx(LP, { ...o, ref: t }) }) : null;
  }
);
g0.displayName = ua;
var jP = /* @__PURE__ */ ds("DialogOverlay.RemoveScroll"), LP = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Tt(ua, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p.jsx(kd, { as: jP, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ p.jsx(
        Z.div,
        {
          "data-state": Nd(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), ar = "DialogContent", y0 = x.forwardRef(
  (e, t) => {
    const n = h0(ar, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Tt(ar, e.__scopeDialog);
    return /* @__PURE__ */ p.jsx(Rs, { present: r || s.open, children: s.modal ? /* @__PURE__ */ p.jsx(_P, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(IP, { ...o, ref: t }) });
  }
);
y0.displayName = ar;
var _P = x.forwardRef(
  (e, t) => {
    const n = Tt(ar, e.__scopeDialog), r = x.useRef(null), o = we(t, n.contentRef, r);
    return x.useEffect(() => {
      const s = r.current;
      if (s) return av(s);
    }, []), /* @__PURE__ */ p.jsx(
      v0,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: X(e.onCloseAutoFocus, (s) => {
          var i;
          s.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: X(e.onPointerDownOutside, (s) => {
          const i = s.detail.originalEvent, a = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || a) && s.preventDefault();
        }),
        onFocusOutside: X(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), IP = x.forwardRef(
  (e, t) => {
    const n = Tt(ar, e.__scopeDialog), r = x.useRef(!1), o = x.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      v0,
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
), v0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = Tt(ar, n), l = x.useRef(null), u = we(t, l);
    return _y(), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        fd,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ p.jsx(
            dd,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": Nd(a.open),
              ...i,
              ref: u,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(OP, { titleId: a.titleId }),
        /* @__PURE__ */ p.jsx(VP, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), Dd = "DialogTitle", x0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Tt(Dd, n);
    return /* @__PURE__ */ p.jsx(Z.h2, { id: o.titleId, ...r, ref: t });
  }
);
x0.displayName = Dd;
var w0 = "DialogDescription", S0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Tt(w0, n);
    return /* @__PURE__ */ p.jsx(Z.p, { id: o.descriptionId, ...r, ref: t });
  }
);
S0.displayName = w0;
var b0 = "DialogClose", k0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Tt(b0, n);
    return /* @__PURE__ */ p.jsx(
      Z.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: X(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
k0.displayName = b0;
function Nd(e) {
  return e ? "open" : "closed";
}
var C0 = "DialogTitleWarning", [RR, E0] = Sb(C0, {
  contentName: ar,
  titleName: Dd,
  docsSlug: "dialog"
}), OP = ({ titleId: e }) => {
  const t = E0(C0), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return x.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, FP = "DialogDescriptionWarning", VP = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${E0(FP).contentName}}.`;
  return x.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, zP = f0, BP = m0, P0 = g0, T0 = y0, D0 = x0, N0 = S0, $P = k0;
const UP = zP, WP = BP, R0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  P0,
  {
    ref: n,
    className: xe(
      "fixed inset-0 z-[99999] bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
R0.displayName = P0.displayName;
const A0 = x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.jsxs(WP, { children: [
  /* @__PURE__ */ p.jsx(R0, {}),
  /* @__PURE__ */ p.jsxs(
    T0,
    {
      ref: r,
      className: xe(
        "fixed left-[50%] top-[50%] z-[99999] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ p.jsxs($P, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-all duration-200 hover:opacity-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 p-1", children: [
          /* @__PURE__ */ p.jsx(qE, { className: "h-4 w-4" }),
          /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
A0.displayName = T0.displayName;
const M0 = ({
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
M0.displayName = "DialogHeader";
const j0 = ({
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
j0.displayName = "DialogFooter";
const L0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  D0,
  {
    ref: n,
    className: xe(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
L0.displayName = D0.displayName;
const _0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  N0,
  {
    ref: n,
    className: xe("text-sm text-muted-foreground", e),
    ...t
  }
));
_0.displayName = N0.displayName;
const Pn = x.forwardRef(
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
Pn.displayName = "Button";
function qr({
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
function I0({ event: e, eventMetadata: t, open: n, onOpenChange: r }) {
  if (!e) return null;
  const o = t[e.id], [s, i] = se.useState(!1);
  se.useEffect(() => {
    o != null && o.website && console.log("Event website URL:", o.website);
  }, [o]);
  const a = (c, d = 180) => {
    if (!c || c.length <= d) return c;
    const f = c.substring(0, d), h = f.lastIndexOf("."), w = f.lastIndexOf(" "), y = h > d - 50 ? h + 1 : w;
    return c.substring(0, y > 0 ? y : d).trim();
  }, l = (c) => {
    const d = e.startDate, f = e.endDate || new Date(d.getTime() + 60 * 60 * 1e3), h = (y) => y.toISOString().replace(/-|:|\.\d\d\d/g, ""), w = (y) => y.toISOString();
    switch (c) {
      case "google":
        const y = new URL("https://calendar.google.com/calendar/render");
        return y.searchParams.append("action", "TEMPLATE"), y.searchParams.append("text", e.title), y.searchParams.append("dates", `${h(d)}/${h(f)}`), y.searchParams.append("details", e.description || ""), o != null && o.location && y.searchParams.append("location", o.location), y.toString();
      case "outlook":
        const S = new URL("https://outlook.live.com/calendar/0/deeplink/compose");
        return S.searchParams.append("subject", e.title), S.searchParams.append("body", e.description || ""), S.searchParams.append("startdt", w(d)), S.searchParams.append("enddt", w(f)), o != null && o.location && S.searchParams.append("location", o.location), S.toString();
      case "apple":
        const m = [
          "BEGIN:VCALENDAR",
          "VERSION:2.0",
          "BEGIN:VEVENT",
          `DTSTART:${h(d)}`,
          `DTEND:${h(f)}`,
          `SUMMARY:${e.title}`,
          `DESCRIPTION:${e.description || ""}`,
          o != null && o.location ? `LOCATION:${o.location}` : "",
          "END:VEVENT",
          "END:VCALENDAR"
        ].filter((g) => g).join(`
`);
        return `data:text/calendar;charset=utf8,${encodeURIComponent(m)}`;
    }
  }, u = {
    clubs: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    unbc: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    organizations: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    sports: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
  };
  return /* @__PURE__ */ p.jsx(UP, { open: n, onOpenChange: r, children: /* @__PURE__ */ p.jsxs(A0, { className: "max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 sm:w-full p-4 sm:p-6", children: [
    /* @__PURE__ */ p.jsxs(M0, { children: [
      /* @__PURE__ */ p.jsx(L0, { className: "text-xl text-gray-900 dark:text-gray-100", children: e.title }),
      e.description && /* @__PURE__ */ p.jsxs("div", { className: "mt-2", children: [
        /* @__PURE__ */ p.jsx(_0, { className: `text-gray-600 dark:text-gray-400 leading-relaxed break-words ${s ? "max-h-[40vh] overflow-y-auto pr-2" : ""}`, children: s ? e.description : a(e.description) }),
        e.description.length > 180 && /* @__PURE__ */ p.jsx(
          "button",
          {
            onClick: () => i(!s),
            className: "inline-flex items-center gap-1 mt-3 px-3 py-2 text-sm text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100 hover:bg-blue-50 dark:hover:bg-blue-900/20 active:bg-blue-100 dark:active:bg-blue-900/30 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
            children: s ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
              "Show less",
              /* @__PURE__ */ p.jsx(Kv, { className: "h-4 w-4" })
            ] }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
              "Read more",
              /* @__PURE__ */ p.jsx(Ed, { className: "h-4 w-4" })
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "space-y-4 my-4", children: /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
        /* @__PURE__ */ p.jsx(Qr, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
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
          /* @__PURE__ */ p.jsx(Ds, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: o.location })
        ] }),
        o.organization && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(Ba, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: o.organization })
        ] }),
        o.cost && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(XE, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: o.cost })
        ] }),
        o.website && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(QE, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
          /* @__PURE__ */ p.jsx(
            "a",
            {
              href: o.website,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-block text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100 hover:underline transition-colors break-all cursor-pointer",
              style: { pointerEvents: "auto", position: "relative", zIndex: 10 },
              children: "Event Website"
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          o.category && /* @__PURE__ */ p.jsx(qr, { className: u[o.category] || "bg-gray-100 text-gray-800", children: o.category.charAt(0).toUpperCase() + o.category.slice(1) }),
          o.registrationRequired && /* @__PURE__ */ p.jsx(qr, { variant: "outline", className: "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300", children: "Registration Required" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsxs(j0, { className: "flex-col sm:flex-col gap-2", children: [
      /* @__PURE__ */ p.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400 mb-2", children: "Add to your calendar:" }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex gap-2 w-full", children: [
        /* @__PURE__ */ p.jsxs(
          Pn,
          {
            variant: "outline",
            className: "flex-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 text-xs sm:text-sm",
            onClick: () => window.open(l("google"), "_blank"),
            children: [
              /* @__PURE__ */ p.jsx(Ri, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Google"
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Pn,
          {
            variant: "outline",
            className: "flex-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 text-xs sm:text-sm",
            onClick: () => window.open(l("outlook"), "_blank"),
            children: [
              /* @__PURE__ */ p.jsx(Ri, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Outlook"
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Pn,
          {
            variant: "outline",
            className: "flex-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 text-xs sm:text-sm",
            onClick: () => {
              const c = l("apple"), d = document.createElement("a");
              d.href = c, d.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, d.click();
            },
            children: [
              /* @__PURE__ */ p.jsx(Ri, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Apple"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
const Rd = x.createContext({});
function Ad(e) {
  const t = x.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Wa = x.createContext(null), Md = x.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class HP extends x.Component {
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
function KP({ children: e, isPresent: t }) {
  const n = x.useId(), r = x.useRef(null), o = x.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: s } = x.useContext(Md);
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
  }, [t]), p.jsx(HP, { isPresent: t, childRef: r, sizeRef: o, children: x.cloneElement(e, { ref: r }) });
}
const GP = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: i }) => {
  const a = Ad(YP), l = x.useId(), u = x.useCallback((d) => {
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
  }, [n]), i === "popLayout" && (e = p.jsx(KP, { isPresent: n, children: e })), p.jsx(Wa.Provider, { value: c, children: e });
};
function YP() {
  return /* @__PURE__ */ new Map();
}
function O0(e = !0) {
  const t = x.useContext(Wa);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t, s = x.useId();
  x.useEffect(() => {
    e && o(s);
  }, [e]);
  const i = x.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, i] : [!0];
}
const ci = (e) => e.key || "";
function Yp(e) {
  const t = [];
  return x.Children.forEach(e, (n) => {
    x.isValidElement(n) && t.push(n);
  }), t;
}
const jd = typeof window < "u", F0 = jd ? x.useLayoutEffect : x.useEffect, Xp = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: o = !0, mode: s = "sync", propagate: i = !1 }) => {
  const [a, l] = O0(i), u = x.useMemo(() => Yp(e), [e]), c = i && !a ? [] : u.map(ci), d = x.useRef(!0), f = x.useRef(u), h = Ad(() => /* @__PURE__ */ new Map()), [w, y] = x.useState(u), [S, m] = x.useState(u);
  F0(() => {
    d.current = !1, f.current = u;
    for (let b = 0; b < S.length; b++) {
      const k = ci(S[b]);
      c.includes(k) ? h.delete(k) : h.get(k) !== !0 && h.set(k, !1);
    }
  }, [S, c.length, c.join("-")]);
  const g = [];
  if (u !== w) {
    let b = [...u];
    for (let k = 0; k < S.length; k++) {
      const P = S[k], C = ci(P);
      c.includes(C) || (b.splice(k, 0, P), g.push(P));
    }
    s === "wait" && g.length && (b = g), m(Yp(b)), y(u);
    return;
  }
  const { forceRender: v } = x.useContext(Rd);
  return p.jsx(p.Fragment, { children: S.map((b) => {
    const k = ci(b), P = i && !a ? !1 : u === S || c.includes(k), C = () => {
      if (h.has(k))
        h.set(k, !0);
      else
        return;
      let E = !0;
      h.forEach((D) => {
        D || (E = !1);
      }), E && (v == null || v(), m(f.current), i && (l == null || l()), r && r());
    };
    return p.jsx(GP, { isPresent: P, initial: !d.current || n ? void 0 : !1, custom: P ? void 0 : t, presenceAffectsLayout: o, mode: s, onExitComplete: P ? void 0 : C, children: b }, k);
  }) });
}, rt = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let V0 = rt;
// @__NO_SIDE_EFFECTS__
function Ld(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Zr = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Gt = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, Yt = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, XP = {
  useManualTiming: !1
};
function QP(e) {
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
const di = [
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
], qP = 40;
function z0(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = () => n = !0, i = di.reduce((m, g) => (m[g] = QP(s), m), {}), { read: a, resolveKeyframes: l, update: u, preRender: c, render: d, postRender: f } = i, h = () => {
    const m = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(m - o.timestamp, qP), 1), o.timestamp = m, o.isProcessing = !0, a.process(o), l.process(o), u.process(o), c.process(o), d.process(o), f.process(o), o.isProcessing = !1, n && t && (r = !1, e(h));
  }, w = () => {
    n = !0, r = !0, o.isProcessing || e(h);
  };
  return { schedule: di.reduce((m, g) => {
    const v = i[g];
    return m[g] = (b, k = !1, P = !1) => (n || w(), v.schedule(b, k, P)), m;
  }, {}), cancel: (m) => {
    for (let g = 0; g < di.length; g++)
      i[di[g]].cancel(m);
  }, state: o, steps: i };
}
const { schedule: de, cancel: Mn, state: Ae, steps: Ll } = z0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : rt, !0), B0 = x.createContext({ strict: !1 }), Qp = {
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
}, Jr = {};
for (const e in Qp)
  Jr[e] = {
    isEnabled: (t) => Qp[e].some((n) => !!t[n])
  };
function ZP(e) {
  for (const t in e)
    Jr[t] = {
      ...Jr[t],
      ...e[t]
    };
}
const JP = /* @__PURE__ */ new Set([
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
function ca(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || JP.has(e);
}
let $0 = (e) => !ca(e);
function eT(e) {
  e && ($0 = (t) => t.startsWith("on") ? !ca(t) : e(t));
}
try {
  eT(require("@emotion/is-prop-valid").default);
} catch {
}
function tT(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || ($0(o) || n === !0 && ca(o) || !t && !ca(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function nT(e) {
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
const Ha = x.createContext({});
function gs(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ka(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const _d = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Id = ["initial", ..._d];
function Ga(e) {
  return Ka(e.animate) || Id.some((t) => gs(e[t]));
}
function U0(e) {
  return !!(Ga(e) || e.variants);
}
function rT(e, t) {
  if (Ga(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || gs(n) ? n : void 0,
      animate: gs(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function oT(e) {
  const { initial: t, animate: n } = rT(e, x.useContext(Ha));
  return x.useMemo(() => ({ initial: t, animate: n }), [qp(t), qp(n)]);
}
function qp(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const sT = Symbol.for("motionComponentSymbol");
function Dr(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function iT(e, t, n) {
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
const Od = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), aT = "framerAppearId", W0 = "data-" + Od(aT), { schedule: Fd } = z0(queueMicrotask, !1), H0 = x.createContext({});
function lT(e, t, n, r, o) {
  var s, i;
  const { visualElement: a } = x.useContext(Ha), l = x.useContext(B0), u = x.useContext(Wa), c = x.useContext(Md).reducedMotion, d = x.useRef(null);
  r = r || l.renderer, !d.current && r && (d.current = r(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: u,
    blockInitialAnimation: u ? u.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const f = d.current, h = x.useContext(H0);
  f && !f.projection && o && (f.type === "html" || f.type === "svg") && uT(d.current, n, o, h);
  const w = x.useRef(!1);
  x.useInsertionEffect(() => {
    f && w.current && f.update(n, u);
  });
  const y = n[W0], S = x.useRef(!!y && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, y)) && ((i = window.MotionHasOptimisedAnimation) === null || i === void 0 ? void 0 : i.call(window, y)));
  return F0(() => {
    f && (w.current = !0, window.MotionIsMounted = !0, f.updateFeatures(), Fd.render(f.render), S.current && f.animationState && f.animationState.animateChanges());
  }), x.useEffect(() => {
    f && (!S.current && f.animationState && f.animationState.animateChanges(), S.current && (queueMicrotask(() => {
      var m;
      (m = window.MotionHandoffMarkAsComplete) === null || m === void 0 || m.call(window, y);
    }), S.current = !1));
  }), f;
}
function uT(e, t, n, r) {
  const { layoutId: o, layout: s, drag: i, dragConstraints: a, layoutScroll: l, layoutRoot: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : K0(e.parent)), e.projection.setOptions({
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
function K0(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : K0(e.parent);
}
function cT({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  var s, i;
  e && ZP(e);
  function a(u, c) {
    let d;
    const f = {
      ...x.useContext(Md),
      ...u,
      layoutId: dT(u)
    }, { isStatic: h } = f, w = oT(u), y = r(u, h);
    if (!h && jd) {
      fT();
      const S = pT(f);
      d = S.MeasureLayout, w.visualElement = lT(o, y, f, t, S.ProjectionNode);
    }
    return p.jsxs(Ha.Provider, { value: w, children: [d && w.visualElement ? p.jsx(d, { visualElement: w.visualElement, ...f }) : null, n(o, u, iT(y, w.visualElement, c), y, h, w.visualElement)] });
  }
  a.displayName = `motion.${typeof o == "string" ? o : `create(${(i = (s = o.displayName) !== null && s !== void 0 ? s : o.name) !== null && i !== void 0 ? i : ""})`}`;
  const l = x.forwardRef(a);
  return l[sT] = o, l;
}
function dT({ layoutId: e }) {
  const t = x.useContext(Rd).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function fT(e, t) {
  x.useContext(B0).strict;
}
function pT(e) {
  const { drag: t, layout: n } = Jr;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const hT = [
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
function Vd(e) {
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
      !!(hT.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function Zp(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function zd(e, t, n, r) {
  if (typeof t == "function") {
    const [o, s] = Zp(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, s] = Zp(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  return t;
}
const Zu = (e) => Array.isArray(e), mT = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), gT = (e) => Zu(e) ? e[e.length - 1] || 0 : e, Ve = (e) => !!(e && e.getVelocity);
function Ai(e) {
  const t = Ve(e) ? e.get() : e;
  return mT(t) ? t.toValue() : t;
}
function yT({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, o, s) {
  const i = {
    latestValues: vT(r, o, s, e),
    renderState: t()
  };
  return n && (i.onMount = (a) => n({ props: r, current: a, ...i }), i.onUpdate = (a) => n(a)), i;
}
const G0 = (e) => (t, n) => {
  const r = x.useContext(Ha), o = x.useContext(Wa), s = () => yT(e, t, r, o);
  return n ? s() : Ad(s);
};
function vT(e, t, n, r) {
  const o = {}, s = r(e, {});
  for (const f in s)
    o[f] = Ai(s[f]);
  let { initial: i, animate: a } = e;
  const l = Ga(e), u = U0(e);
  t && u && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || i === !1;
  const d = c ? a : i;
  if (d && typeof d != "boolean" && !Ka(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let h = 0; h < f.length; h++) {
      const w = zd(e, f[h]);
      if (w) {
        const { transitionEnd: y, transition: S, ...m } = w;
        for (const g in m) {
          let v = m[g];
          if (Array.isArray(v)) {
            const b = c ? v.length - 1 : 0;
            v = v[b];
          }
          v !== null && (o[g] = v);
        }
        for (const g in y)
          o[g] = y[g];
      }
    }
  }
  return o;
}
const co = [
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
], dr = new Set(co), Y0 = (e) => (t) => typeof t == "string" && t.startsWith(e), X0 = /* @__PURE__ */ Y0("--"), xT = /* @__PURE__ */ Y0("var(--"), Bd = (e) => xT(e) ? wT.test(e.split("/*")[0].trim()) : !1, wT = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Q0 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, tn = (e, t, n) => n > t ? t : n < e ? e : n, fo = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, ys = {
  ...fo,
  transform: (e) => tn(0, 1, e)
}, fi = {
  ...fo,
  default: 1
}, As = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), un = /* @__PURE__ */ As("deg"), Ot = /* @__PURE__ */ As("%"), $ = /* @__PURE__ */ As("px"), ST = /* @__PURE__ */ As("vh"), bT = /* @__PURE__ */ As("vw"), Jp = {
  ...Ot,
  parse: (e) => Ot.parse(e) / 100,
  transform: (e) => Ot.transform(e * 100)
}, kT = {
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
}, CT = {
  rotate: un,
  rotateX: un,
  rotateY: un,
  rotateZ: un,
  scale: fi,
  scaleX: fi,
  scaleY: fi,
  scaleZ: fi,
  skew: un,
  skewX: un,
  skewY: un,
  distance: $,
  translateX: $,
  translateY: $,
  translateZ: $,
  x: $,
  y: $,
  z: $,
  perspective: $,
  transformPerspective: $,
  opacity: ys,
  originX: Jp,
  originY: Jp,
  originZ: $
}, eh = {
  ...fo,
  transform: Math.round
}, $d = {
  ...kT,
  ...CT,
  zIndex: eh,
  size: $,
  // SVG
  fillOpacity: ys,
  strokeOpacity: ys,
  numOctaves: eh
}, ET = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, PT = co.length;
function TT(e, t, n) {
  let r = "", o = !0;
  for (let s = 0; s < PT; s++) {
    const i = co[s], a = e[i];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (i.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = Q0(a, $d[i]);
      if (!l) {
        o = !1;
        const c = ET[i] || i;
        r += `${c}(${u}) `;
      }
      n && (t[i] = u);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function Ud(e, t, n) {
  const { style: r, vars: o, transformOrigin: s } = e;
  let i = !1, a = !1;
  for (const l in t) {
    const u = t[l];
    if (dr.has(l)) {
      i = !0;
      continue;
    } else if (X0(l)) {
      o[l] = u;
      continue;
    } else {
      const c = Q0(u, $d[l]);
      l.startsWith("origin") ? (a = !0, s[l] = c) : r[l] = c;
    }
  }
  if (t.transform || (i || n ? r.transform = TT(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const DT = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, NT = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function RT(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const s = o ? DT : NT;
  e[s.offset] = $.transform(-r);
  const i = $.transform(t), a = $.transform(n);
  e[s.array] = `${i} ${a}`;
}
function th(e, t, n) {
  return typeof e == "string" ? e : $.transform(t + n * e);
}
function AT(e, t, n) {
  const r = th(t, e.x, e.width), o = th(n, e.y, e.height);
  return `${r} ${o}`;
}
function Wd(e, {
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
  if (Ud(e, u, d), c) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: f, style: h, dimensions: w } = e;
  f.transform && (w && (h.transform = f.transform), delete f.transform), w && (o !== void 0 || s !== void 0 || h.transform) && (h.transformOrigin = AT(w, o !== void 0 ? o : 0.5, s !== void 0 ? s : 0.5)), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), r !== void 0 && (f.scale = r), i !== void 0 && RT(f, i, a, l, !1);
}
const Hd = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), q0 = () => ({
  ...Hd(),
  attrs: {}
}), Kd = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Z0(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
const J0 = /* @__PURE__ */ new Set([
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
function ex(e, t, n, r) {
  Z0(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(J0.has(o) ? o : Od(o), t.attrs[o]);
}
const da = {};
function MT(e) {
  Object.assign(da, e);
}
function tx(e, { layout: t, layoutId: n }) {
  return dr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!da[e] || e === "opacity");
}
function Gd(e, t, n) {
  var r;
  const { style: o } = e, s = {};
  for (const i in o)
    (Ve(o[i]) || t.style && Ve(t.style[i]) || tx(i, e) || ((r = n == null ? void 0 : n.getValue(i)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[i] = o[i]);
  return s;
}
function nx(e, t, n) {
  const r = Gd(e, t, n);
  for (const o in e)
    if (Ve(e[o]) || Ve(t[o])) {
      const s = co.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[s] = e[o];
    }
  return r;
}
function jT(e, t) {
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
const nh = ["x", "y", "width", "height", "cx", "cy", "r"], LT = {
  useVisualState: G0({
    scrapeMotionValuesFromProps: nx,
    createRenderState: q0,
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
        for (let a = 0; a < nh.length; a++) {
          const l = nh[a];
          e[l] !== t[l] && (i = !0);
        }
      i && de.read(() => {
        jT(n, r), de.render(() => {
          Wd(r, o, Kd(n.tagName), e.transformTemplate), ex(n, r);
        });
      });
    }
  })
}, _T = {
  useVisualState: G0({
    scrapeMotionValuesFromProps: Gd,
    createRenderState: Hd
  })
};
function rx(e, t, n) {
  for (const r in t)
    !Ve(t[r]) && !tx(r, n) && (e[r] = t[r]);
}
function IT({ transformTemplate: e }, t) {
  return x.useMemo(() => {
    const n = Hd();
    return Ud(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function OT(e, t) {
  const n = e.style || {}, r = {};
  return rx(r, n, e), Object.assign(r, IT(e, t)), r;
}
function FT(e, t) {
  const n = {}, r = OT(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function VT(e, t, n, r) {
  const o = x.useMemo(() => {
    const s = q0();
    return Wd(s, t, Kd(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    rx(s, e.style, e), o.style = { ...s, ...o.style };
  }
  return o;
}
function zT(e = !1) {
  return (n, r, o, { latestValues: s }, i) => {
    const l = (Vd(n) ? VT : FT)(r, s, i, n), u = tT(r, typeof n == "string", e), c = n !== x.Fragment ? { ...u, ...l, ref: o } : {}, { children: d } = r, f = x.useMemo(() => Ve(d) ? d.get() : d, [d]);
    return x.createElement(n, {
      ...c,
      children: f
    });
  };
}
function BT(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const i = {
      ...Vd(r) ? LT : _T,
      preloadedFeatures: e,
      useRender: zT(o),
      createVisualElement: t,
      Component: r
    };
    return cT(i);
  };
}
function ox(e, t) {
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
function Ya(e, t, n) {
  const r = e.getProps();
  return zd(r, t, n !== void 0 ? n : r.custom, e);
}
const $T = /* @__PURE__ */ Ld(() => window.ScrollTimeline !== void 0);
class UT {
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
      if ($T() && o.attachTimeline)
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
class WT extends UT {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function Yd(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Ju = 2e4;
function sx(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Ju; )
    t += n, r = e.next(t);
  return t >= Ju ? 1 / 0 : t;
}
function Xd(e) {
  return typeof e == "function";
}
function rh(e, t) {
  e.timeline = t, e.onfinish = null;
}
const Qd = (e) => Array.isArray(e) && typeof e[0] == "number", HT = {
  linearEasing: void 0
};
function KT(e, t) {
  const n = /* @__PURE__ */ Ld(e);
  return () => {
    var r;
    return (r = HT[t]) !== null && r !== void 0 ? r : n();
  };
}
const fa = /* @__PURE__ */ KT(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), ix = (e, t, n = 10) => {
  let r = "";
  const o = Math.max(Math.round(t / n), 2);
  for (let s = 0; s < o; s++)
    r += e(/* @__PURE__ */ Zr(0, o - 1, s)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function ax(e) {
  return !!(typeof e == "function" && fa() || !e || typeof e == "string" && (e in ec || fa()) || Qd(e) || Array.isArray(e) && e.every(ax));
}
const Mo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, ec = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Mo([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Mo([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Mo([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Mo([0.33, 1.53, 0.69, 0.99])
};
function lx(e, t) {
  if (e)
    return typeof e == "function" && fa() ? ix(e, t) : Qd(e) ? Mo(e) : Array.isArray(e) ? e.map((n) => lx(n, t) || ec.easeOut) : ec[e];
}
const vt = {
  x: !1,
  y: !1
};
function ux() {
  return vt.x || vt.y;
}
function GT(e, t, n) {
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
function cx(e, t) {
  const n = GT(e), r = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, o, () => r.abort()];
}
function oh(e) {
  return (t) => {
    t.pointerType === "touch" || ux() || e(t);
  };
}
function YT(e, t, n = {}) {
  const [r, o, s] = cx(e, n), i = oh((a) => {
    const { target: l } = a, u = t(a);
    if (typeof u != "function" || !l)
      return;
    const c = oh((d) => {
      u(d), l.removeEventListener("pointerleave", c);
    });
    l.addEventListener("pointerleave", c, o);
  });
  return r.forEach((a) => {
    a.addEventListener("pointerenter", i, o);
  }), s;
}
const dx = (e, t) => t ? e === t ? !0 : dx(e, t.parentElement) : !1, qd = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, XT = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function QT(e) {
  return XT.has(e.tagName) || e.tabIndex !== -1;
}
const jo = /* @__PURE__ */ new WeakSet();
function sh(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function _l(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const qT = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = sh(() => {
    if (jo.has(n))
      return;
    _l(n, "down");
    const o = sh(() => {
      _l(n, "up");
    }), s = () => _l(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function ih(e) {
  return qd(e) && !ux();
}
function ZT(e, t, n = {}) {
  const [r, o, s] = cx(e, n), i = (a) => {
    const l = a.currentTarget;
    if (!ih(a) || jo.has(l))
      return;
    jo.add(l);
    const u = t(a), c = (h, w) => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", f), !(!ih(h) || !jo.has(l)) && (jo.delete(l), typeof u == "function" && u(h, { success: w }));
    }, d = (h) => {
      c(h, n.useGlobalTarget || dx(l, h.target));
    }, f = (h) => {
      c(h, !1);
    };
    window.addEventListener("pointerup", d, o), window.addEventListener("pointercancel", f, o);
  };
  return r.forEach((a) => {
    !QT(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", i, o), a.addEventListener("focus", (u) => qT(u, o), o);
  }), s;
}
function JT(e) {
  return e === "x" || e === "y" ? vt[e] ? null : (vt[e] = !0, () => {
    vt[e] = !1;
  }) : vt.x || vt.y ? null : (vt.x = vt.y = !0, () => {
    vt.x = vt.y = !1;
  });
}
const fx = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...co
]);
let Mi;
function eD() {
  Mi = void 0;
}
const Ft = {
  now: () => (Mi === void 0 && Ft.set(Ae.isProcessing || XP.useManualTiming ? Ae.timestamp : performance.now()), Mi),
  set: (e) => {
    Mi = e, queueMicrotask(eD);
  }
};
function Zd(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Jd(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class ef {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Zd(this.subscriptions, t), () => Jd(this.subscriptions, t);
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
function px(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const ah = 30, tD = (e) => !isNaN(parseFloat(e));
class nD {
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
      const s = Ft.now();
      this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Ft.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = tD(this.current));
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
    this.events[t] || (this.events[t] = new ef());
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
    const t = Ft.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > ah)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, ah);
    return px(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function vs(e, t) {
  return new nD(e, t);
}
function rD(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, vs(n));
}
function oD(e, t) {
  const n = Ya(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const i in s) {
    const a = gT(s[i]);
    rD(e, i, a);
  }
}
function sD(e) {
  return !!(Ve(e) && e.add);
}
function tc(e, t) {
  const n = e.getValue("willChange");
  if (sD(n))
    return n.add(t);
}
function hx(e) {
  return e.props[W0];
}
const mx = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, iD = 1e-7, aD = 12;
function lD(e, t, n, r, o) {
  let s, i, a = 0;
  do
    i = t + (n - t) / 2, s = mx(i, r, o) - e, s > 0 ? n = i : t = i;
  while (Math.abs(s) > iD && ++a < aD);
  return i;
}
function Ms(e, t, n, r) {
  if (e === t && n === r)
    return rt;
  const o = (s) => lD(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : mx(o(s), t, r);
}
const gx = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, yx = (e) => (t) => 1 - e(1 - t), vx = /* @__PURE__ */ Ms(0.33, 1.53, 0.69, 0.99), tf = /* @__PURE__ */ yx(vx), xx = /* @__PURE__ */ gx(tf), wx = (e) => (e *= 2) < 1 ? 0.5 * tf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), nf = (e) => 1 - Math.sin(Math.acos(e)), Sx = yx(nf), bx = gx(nf), kx = (e) => /^0[^.\s]+$/u.test(e);
function uD(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || kx(e) : !0;
}
const Wo = (e) => Math.round(e * 1e5) / 1e5, rf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function cD(e) {
  return e == null;
}
const dD = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, of = (e, t) => (n) => !!(typeof n == "string" && dD.test(n) && n.startsWith(e) || t && !cD(n) && Object.prototype.hasOwnProperty.call(n, t)), Cx = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, s, i, a] = r.match(rf);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, fD = (e) => tn(0, 255, e), Il = {
  ...fo,
  transform: (e) => Math.round(fD(e))
}, Xn = {
  test: /* @__PURE__ */ of("rgb", "red"),
  parse: /* @__PURE__ */ Cx("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Il.transform(e) + ", " + Il.transform(t) + ", " + Il.transform(n) + ", " + Wo(ys.transform(r)) + ")"
};
function pD(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const nc = {
  test: /* @__PURE__ */ of("#"),
  parse: pD,
  transform: Xn.transform
}, Nr = {
  test: /* @__PURE__ */ of("hsl", "hue"),
  parse: /* @__PURE__ */ Cx("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Ot.transform(Wo(t)) + ", " + Ot.transform(Wo(n)) + ", " + Wo(ys.transform(r)) + ")"
}, Oe = {
  test: (e) => Xn.test(e) || nc.test(e) || Nr.test(e),
  parse: (e) => Xn.test(e) ? Xn.parse(e) : Nr.test(e) ? Nr.parse(e) : nc.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Xn.transform(e) : Nr.transform(e)
}, hD = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function mD(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(rf)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(hD)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Ex = "number", Px = "color", gD = "var", yD = "var(", lh = "${}", vD = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function xs(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let s = 0;
  const a = t.replace(vD, (l) => (Oe.test(l) ? (r.color.push(s), o.push(Px), n.push(Oe.parse(l))) : l.startsWith(yD) ? (r.var.push(s), o.push(gD), n.push(l)) : (r.number.push(s), o.push(Ex), n.push(parseFloat(l))), ++s, lh)).split(lh);
  return { values: n, split: a, indexes: r, types: o };
}
function Tx(e) {
  return xs(e).values;
}
function Dx(e) {
  const { split: t, types: n } = xs(e), r = t.length;
  return (o) => {
    let s = "";
    for (let i = 0; i < r; i++)
      if (s += t[i], o[i] !== void 0) {
        const a = n[i];
        a === Ex ? s += Wo(o[i]) : a === Px ? s += Oe.transform(o[i]) : s += o[i];
      }
    return s;
  };
}
const xD = (e) => typeof e == "number" ? 0 : e;
function wD(e) {
  const t = Tx(e);
  return Dx(e)(t.map(xD));
}
const jn = {
  test: mD,
  parse: Tx,
  createTransformer: Dx,
  getAnimatableNone: wD
}, SD = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function bD(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(rf) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let s = SD.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + o + ")";
}
const kD = /\b([a-z-]*)\(.*?\)/gu, rc = {
  ...jn,
  getAnimatableNone: (e) => {
    const t = e.match(kD);
    return t ? t.map(bD).join(" ") : e;
  }
}, CD = {
  ...$d,
  // Color props
  color: Oe,
  backgroundColor: Oe,
  outlineColor: Oe,
  fill: Oe,
  stroke: Oe,
  // Border props
  borderColor: Oe,
  borderTopColor: Oe,
  borderRightColor: Oe,
  borderBottomColor: Oe,
  borderLeftColor: Oe,
  filter: rc,
  WebkitFilter: rc
}, sf = (e) => CD[e];
function Nx(e, t) {
  let n = sf(e);
  return n !== rc && (n = jn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const ED = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function PD(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const s = e[r];
    typeof s == "string" && !ED.has(s) && xs(s).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const s of t)
      e[s] = Nx(n, o);
}
const uh = (e) => e === fo || e === $, ch = (e, t) => parseFloat(e.split(", ")[t]), dh = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/u);
  if (o)
    return ch(o[1], t);
  {
    const s = r.match(/^matrix\((.+)\)$/u);
    return s ? ch(s[1], e) : 0;
  }
}, TD = /* @__PURE__ */ new Set(["x", "y", "z"]), DD = co.filter((e) => !TD.has(e));
function ND(e) {
  const t = [];
  return DD.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const eo = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: dh(4, 13),
  y: dh(5, 14)
};
eo.translateX = eo.x;
eo.translateY = eo.y;
const Zn = /* @__PURE__ */ new Set();
let oc = !1, sc = !1;
function Rx() {
  if (sc) {
    const e = Array.from(Zn).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = ND(r);
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
  sc = !1, oc = !1, Zn.forEach((e) => e.complete()), Zn.clear();
}
function Ax() {
  Zn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (sc = !0);
  });
}
function RD() {
  Ax(), Rx();
}
class af {
  constructor(t, n, r, o, s, i = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = s, this.isAsync = i;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Zn.add(this), oc || (oc = !0, de.read(Ax), de.resolveKeyframes(Rx))) : (this.readKeyframes(), this.complete());
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
const Mx = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), AD = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function MD(e) {
  const t = AD.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function jx(e, t, n = 1) {
  const [r, o] = MD(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const i = s.trim();
    return Mx(i) ? parseFloat(i) : i;
  }
  return Bd(o) ? jx(o, t, n + 1) : o;
}
const Lx = (e) => (t) => t.test(e), jD = {
  test: (e) => e === "auto",
  parse: (e) => e
}, _x = [fo, $, Ot, un, bT, ST, jD], fh = (e) => _x.find(Lx(e));
class Ix extends af {
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
      if (typeof u == "string" && (u = u.trim(), Bd(u))) {
        const c = jx(u, n.current);
        c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !fx.has(r) || t.length !== 2)
      return;
    const [o, s] = t, i = fh(o), a = fh(s);
    if (i !== a)
      if (uh(i) && uh(a))
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
      uD(t[o]) && r.push(o);
    r.length && PD(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = eo[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
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
    o[i] = eo[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, u]) => {
      n.getValue(l).set(u);
    }), this.resolveNoneKeyframes();
  }
}
const ph = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(jn.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function LD(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function _D(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const s = e[e.length - 1], i = ph(o, t), a = ph(s, t);
  return !i || !a ? !1 : LD(e) || (n === "spring" || Xd(n)) && r;
}
const ID = (e) => e !== null;
function Xa(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(ID), s = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !s || r === void 0 ? o[s] : r;
}
const OD = 40;
class Ox {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: i = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Ft.now(), this.options = {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > OD ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && RD(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = Ft.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: o, velocity: s, delay: i, onComplete: a, onUpdate: l, isGenerator: u } = this.options;
    if (!u && !_D(t, r, o, s))
      if (i)
        this.options.duration = 0;
      else {
        l && l(Xa(t, this.options, n)), a && a(), this.resolveFinishedPromise();
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
const he = (e, t, n) => e + (t - e) * n;
function Ol(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function FD({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, s = 0, i = 0;
  if (!t)
    o = s = i = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    o = Ol(l, a, e + 1 / 3), s = Ol(l, a, e), i = Ol(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(s * 255),
    blue: Math.round(i * 255),
    alpha: r
  };
}
function pa(e, t) {
  return (n) => n > 0 ? t : e;
}
const Fl = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, VD = [nc, Xn, Nr], zD = (e) => VD.find((t) => t.test(e));
function hh(e) {
  const t = zD(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === Nr && (n = FD(n)), n;
}
const mh = (e, t) => {
  const n = hh(e), r = hh(t);
  if (!n || !r)
    return pa(e, t);
  const o = { ...n };
  return (s) => (o.red = Fl(n.red, r.red, s), o.green = Fl(n.green, r.green, s), o.blue = Fl(n.blue, r.blue, s), o.alpha = he(n.alpha, r.alpha, s), Xn.transform(o));
}, BD = (e, t) => (n) => t(e(n)), js = (...e) => e.reduce(BD), ic = /* @__PURE__ */ new Set(["none", "hidden"]);
function $D(e, t) {
  return ic.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function UD(e, t) {
  return (n) => he(e, t, n);
}
function lf(e) {
  return typeof e == "number" ? UD : typeof e == "string" ? Bd(e) ? pa : Oe.test(e) ? mh : KD : Array.isArray(e) ? Fx : typeof e == "object" ? Oe.test(e) ? mh : WD : pa;
}
function Fx(e, t) {
  const n = [...e], r = n.length, o = e.map((s, i) => lf(s)(s, t[i]));
  return (s) => {
    for (let i = 0; i < r; i++)
      n[i] = o[i](s);
    return n;
  };
}
function WD(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = lf(e[o])(e[o], t[o]));
  return (o) => {
    for (const s in r)
      n[s] = r[s](o);
    return n;
  };
}
function HD(e, t) {
  var n;
  const r = [], o = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const i = t.types[s], a = e.indexes[i][o[i]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    r[s] = l, o[i]++;
  }
  return r;
}
const KD = (e, t) => {
  const n = jn.createTransformer(t), r = xs(e), o = xs(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? ic.has(e) && !o.values.length || ic.has(t) && !r.values.length ? $D(e, t) : js(Fx(HD(r, o), o.values), n) : pa(e, t);
};
function Vx(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? he(e, t, n) : lf(e)(e, t);
}
const GD = 5;
function zx(e, t, n) {
  const r = Math.max(t - GD, 0);
  return px(n - e(r), t - r);
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
}, Vl = 1e-3;
function YD({ duration: e = ye.duration, bounce: t = ye.bounce, velocity: n = ye.velocity, mass: r = ye.mass }) {
  let o, s, i = 1 - t;
  i = tn(ye.minDamping, ye.maxDamping, i), e = tn(ye.minDuration, ye.maxDuration, /* @__PURE__ */ Yt(e)), i < 1 ? (o = (u) => {
    const c = u * i, d = c * e, f = c - n, h = ac(u, i), w = Math.exp(-d);
    return Vl - f / h * w;
  }, s = (u) => {
    const d = u * i * e, f = d * n + n, h = Math.pow(i, 2) * Math.pow(u, 2) * e, w = Math.exp(-d), y = ac(Math.pow(u, 2), i);
    return (-o(u) + Vl > 0 ? -1 : 1) * ((f - h) * w) / y;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - n) * e + 1;
    return -Vl + c * d;
  }, s = (u) => {
    const c = Math.exp(-u * e), d = (n - u) * (e * e);
    return c * d;
  });
  const a = 5 / e, l = QD(o, s, a);
  if (e = /* @__PURE__ */ Gt(e), isNaN(l))
    return {
      stiffness: ye.stiffness,
      damping: ye.damping,
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
const XD = 12;
function QD(e, t, n) {
  let r = n;
  for (let o = 1; o < XD; o++)
    r = r - e(r) / t(r);
  return r;
}
function ac(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const qD = ["duration", "bounce"], ZD = ["stiffness", "damping", "mass"];
function gh(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function JD(e) {
  let t = {
    velocity: ye.velocity,
    stiffness: ye.stiffness,
    damping: ye.damping,
    mass: ye.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!gh(e, ZD) && gh(e, qD))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, s = 2 * tn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: ye.mass,
        stiffness: o,
        damping: s
      };
    } else {
      const n = YD(e);
      t = {
        ...t,
        ...n,
        mass: ye.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Bx(e = ye.visualDuration, t = ye.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: o } = n;
  const s = n.keyframes[0], i = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: s }, { stiffness: l, damping: u, mass: c, duration: d, velocity: f, isResolvedFromDuration: h } = JD({
    ...n,
    velocity: -/* @__PURE__ */ Yt(n.velocity || 0)
  }), w = f || 0, y = u / (2 * Math.sqrt(l * c)), S = i - s, m = /* @__PURE__ */ Yt(Math.sqrt(l / c)), g = Math.abs(S) < 5;
  r || (r = g ? ye.restSpeed.granular : ye.restSpeed.default), o || (o = g ? ye.restDelta.granular : ye.restDelta.default);
  let v;
  if (y < 1) {
    const k = ac(m, y);
    v = (P) => {
      const C = Math.exp(-y * m * P);
      return i - C * ((w + y * m * S) / k * Math.sin(k * P) + S * Math.cos(k * P));
    };
  } else if (y === 1)
    v = (k) => i - Math.exp(-m * k) * (S + (w + m * S) * k);
  else {
    const k = m * Math.sqrt(y * y - 1);
    v = (P) => {
      const C = Math.exp(-y * m * P), E = Math.min(k * P, 300);
      return i - C * ((w + y * m * S) * Math.sinh(E) + k * S * Math.cosh(E)) / k;
    };
  }
  const b = {
    calculatedDuration: h && d || null,
    next: (k) => {
      const P = v(k);
      if (h)
        a.done = k >= d;
      else {
        let C = 0;
        y < 1 && (C = k === 0 ? /* @__PURE__ */ Gt(w) : zx(v, k, P));
        const E = Math.abs(C) <= r, D = Math.abs(i - P) <= o;
        a.done = E && D;
      }
      return a.value = a.done ? i : P, a;
    },
    toString: () => {
      const k = Math.min(sx(b), Ju), P = ix((C) => b.next(k * C).value, k, 30);
      return k + "ms " + P;
    }
  };
  return b;
}
function yh({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: s = 500, modifyTarget: i, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, h = (E) => a !== void 0 && E < a || l !== void 0 && E > l, w = (E) => a === void 0 ? l : l === void 0 || Math.abs(a - E) < Math.abs(l - E) ? a : l;
  let y = n * t;
  const S = d + y, m = i === void 0 ? S : i(S);
  m !== S && (y = m - d);
  const g = (E) => -y * Math.exp(-E / r), v = (E) => m + g(E), b = (E) => {
    const D = g(E), N = v(E);
    f.done = Math.abs(D) <= u, f.value = f.done ? m : N;
  };
  let k, P;
  const C = (E) => {
    h(f.value) && (k = E, P = Bx({
      keyframes: [f.value, w(f.value)],
      velocity: zx(v, E, f.value),
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
      return !P && k === void 0 && (D = !0, b(E), C(E)), k !== void 0 && E >= k ? P.next(E - k) : (!D && b(E), f);
    }
  };
}
const eN = /* @__PURE__ */ Ms(0.42, 0, 1, 1), tN = /* @__PURE__ */ Ms(0, 0, 0.58, 1), $x = /* @__PURE__ */ Ms(0.42, 0, 0.58, 1), nN = (e) => Array.isArray(e) && typeof e[0] != "number", rN = {
  linear: rt,
  easeIn: eN,
  easeInOut: $x,
  easeOut: tN,
  circIn: nf,
  circInOut: bx,
  circOut: Sx,
  backIn: tf,
  backInOut: xx,
  backOut: vx,
  anticipate: wx
}, vh = (e) => {
  if (Qd(e)) {
    V0(e.length === 4);
    const [t, n, r, o] = e;
    return Ms(t, n, r, o);
  } else if (typeof e == "string")
    return rN[e];
  return e;
};
function oN(e, t, n) {
  const r = [], o = n || Vx, s = e.length - 1;
  for (let i = 0; i < s; i++) {
    let a = o(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] || rt : t;
      a = js(l, a);
    }
    r.push(a);
  }
  return r;
}
function sN(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const s = e.length;
  if (V0(s === t.length), s === 1)
    return () => t[0];
  if (s === 2 && t[0] === t[1])
    return () => t[1];
  const i = e[0] === e[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = oN(t, r, o), l = a.length, u = (c) => {
    if (i && c < e[0])
      return t[0];
    let d = 0;
    if (l > 1)
      for (; d < e.length - 2 && !(c < e[d + 1]); d++)
        ;
    const f = /* @__PURE__ */ Zr(e[d], e[d + 1], c);
    return a[d](f);
  };
  return n ? (c) => u(tn(e[0], e[s - 1], c)) : u;
}
function iN(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ Zr(0, t, r);
    e.push(he(n, 1, o));
  }
}
function aN(e) {
  const t = [0];
  return iN(t, e.length - 1), t;
}
function lN(e, t) {
  return e.map((n) => n * t);
}
function uN(e, t) {
  return e.map(() => t || $x).splice(0, e.length - 1);
}
function ha({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = nN(r) ? r.map(vh) : vh(r), s = {
    done: !1,
    value: t[0]
  }, i = lN(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : aN(t),
    e
  ), a = sN(i, t, {
    ease: Array.isArray(o) ? o : uN(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (s.value = a(l), s.done = l >= e, s)
  };
}
const cN = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => de.update(t, !0),
    stop: () => Mn(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Ae.isProcessing ? Ae.timestamp : Ft.now()
  };
}, dN = {
  decay: yh,
  inertia: yh,
  tween: ha,
  keyframes: ha,
  spring: Bx
}, fN = (e) => e / 100;
class uf extends Ox {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options, i = (o == null ? void 0 : o.KeyframeResolver) || af, a = (l, u) => this.onKeyframesResolved(l, u);
    this.resolver = new i(s, a, n, r, o), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: s, velocity: i = 0 } = this.options, a = Xd(n) ? n : dN[n] || ha;
    let l, u;
    a !== ha && typeof t[0] != "number" && (l = js(fN, Vx(t[0], t[1])), t = [0, 100]);
    const c = a({ ...this.options, keyframes: t });
    s === "mirror" && (u = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -i
    })), c.calculatedDuration === null && (c.calculatedDuration = sx(c));
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
      const { keyframes: E } = this.options;
      return { done: !0, value: E[E.length - 1] };
    }
    const { finalKeyframe: o, generator: s, mirroredGenerator: i, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: u, totalDuration: c, resolvedDuration: d } = r;
    if (this.startTime === null)
      return s.next(0);
    const { delay: f, repeat: h, repeatType: w, repeatDelay: y, onUpdate: S } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const m = this.currentTime - f * (this.speed >= 0 ? 1 : -1), g = this.speed >= 0 ? m < 0 : m > c;
    this.currentTime = Math.max(m, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let v = this.currentTime, b = s;
    if (h) {
      const E = Math.min(this.currentTime, c) / d;
      let D = Math.floor(E), N = E % 1;
      !N && E >= 1 && (N = 1), N === 1 && D--, D = Math.min(D, h + 1), !!(D % 2) && (w === "reverse" ? (N = 1 - N, y && (N -= y / d)) : w === "mirror" && (b = i)), v = tn(0, 1, N) * d;
    }
    const k = g ? { done: !1, value: l[0] } : b.next(v);
    a && (k.value = a(k.value));
    let { done: P } = k;
    !g && u !== null && (P = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const C = this.holdTime === null && (this.state === "finished" || this.state === "running" && P);
    return C && o !== void 0 && (k.value = Xa(l, this.options, o)), S && S(k.value), C && this.finish(), k;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? /* @__PURE__ */ Yt(t.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ Yt(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ Gt(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ Yt(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = cN, onPlay: n, startTime: r } = this.options;
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
const pN = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function hN(e, t, n, { delay: r = 0, duration: o = 300, repeat: s = 0, repeatType: i = "loop", ease: a = "easeInOut", times: l } = {}) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = lx(a, o);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: r,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const mN = /* @__PURE__ */ Ld(() => Object.hasOwnProperty.call(Element.prototype, "animate")), ma = 10, gN = 2e4;
function yN(e) {
  return Xd(e.type) || e.type === "spring" || !ax(e.ease);
}
function vN(e, t) {
  const n = new uf({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let s = 0;
  for (; !r.done && s < gN; )
    r = n.sample(s), o.push(r.value), s += ma;
  return {
    times: void 0,
    keyframes: o,
    duration: s - ma,
    ease: "linear"
  };
}
const Ux = {
  anticipate: wx,
  backInOut: xx,
  circInOut: bx
};
function xN(e) {
  return e in Ux;
}
class xh extends Ox {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options;
    this.resolver = new Ix(s, (i, a) => this.onKeyframesResolved(i, a), n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: r = 300, times: o, ease: s, type: i, motionValue: a, name: l, startTime: u } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof s == "string" && fa() && xN(s) && (s = Ux[s]), yN(this.options)) {
      const { onComplete: d, onUpdate: f, motionValue: h, element: w, ...y } = this.options, S = vN(t, y);
      t = S.keyframes, t.length === 1 && (t[1] = t[0]), r = S.duration, o = S.times, s = S.ease, i = "keyframes";
    }
    const c = hN(a.owner.current, l, t, { ...this.options, duration: r, times: o, ease: s });
    return c.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (rh(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
      const { onComplete: d } = this.options;
      a.set(Xa(t, this.options, n)), d && d(), this.cancel(), this.resolveFinishedPromise();
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
    return /* @__PURE__ */ Yt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return /* @__PURE__ */ Yt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = /* @__PURE__ */ Gt(t);
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
        return rt;
      const { animation: r } = n;
      rh(r, t);
    }
    return rt;
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
      const { motionValue: u, onUpdate: c, onComplete: d, element: f, ...h } = this.options, w = new uf({
        ...h,
        keyframes: r,
        duration: o,
        type: s,
        ease: i,
        times: a,
        isGenerator: !0
      }), y = /* @__PURE__ */ Gt(this.time);
      u.setWithVelocity(w.sample(y - ma).value, w.sample(y).value, ma);
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
    return mN() && r && pN.has(r) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !u && !o && s !== "mirror" && i !== 0 && a !== "inertia";
  }
}
const wN = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, SN = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), bN = {
  type: "keyframes",
  duration: 0.8
}, kN = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, CN = (e, { keyframes: t }) => t.length > 2 ? bN : dr.has(e) ? e.startsWith("scale") ? SN(t[1]) : wN : kN;
function EN({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const cf = (e, t, n, r = {}, o, s) => (i) => {
  const a = Yd(r, e) || {}, l = a.delay || r.delay || 0;
  let { elapsed: u = 0 } = r;
  u = u - /* @__PURE__ */ Gt(l);
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
  EN(a) || (c = {
    ...c,
    ...CN(e, c)
  }), c.duration && (c.duration = /* @__PURE__ */ Gt(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ Gt(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let d = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (d = !0)), d && !s && t.get() !== void 0) {
    const f = Xa(c.keyframes, a);
    if (f !== void 0)
      return de.update(() => {
        c.onUpdate(f), c.onComplete();
      }), new WT([]);
  }
  return !s && xh.supports(c) ? new xh(c) : new uf(c);
};
function PN({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Wx(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var s;
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (i = r);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in l) {
    const f = e.getValue(d, (s = e.latestValues[d]) !== null && s !== void 0 ? s : null), h = l[d];
    if (h === void 0 || c && PN(c, d))
      continue;
    const w = {
      delay: n,
      ...Yd(i || {}, d)
    };
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const m = hx(e);
      if (m) {
        const g = window.MotionHandoffAnimation(m, d, de);
        g !== null && (w.startTime = g, y = !0);
      }
    }
    tc(e, d), f.start(cf(d, f, h, e.shouldReduceMotion && fx.has(d) ? { type: !1 } : w, e, y));
    const S = f.animation;
    S && u.push(S);
  }
  return a && Promise.all(u).then(() => {
    de.update(() => {
      a && oD(e, a);
    });
  }), u;
}
function lc(e, t, n = {}) {
  var r;
  const o = Ya(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = o ? () => Promise.all(Wx(e, o, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: d, staggerDirection: f } = s;
    return TN(e, t, c + u, d, f, n);
  } : () => Promise.resolve(), { when: l } = s;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [i, a] : [a, i];
    return u().then(() => c());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function TN(e, t, n = 0, r = 0, o = 1, s) {
  const i = [], a = (e.variantChildren.size - 1) * r, l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return Array.from(e.variantChildren).sort(DN).forEach((u, c) => {
    u.notify("AnimationStart", t), i.push(lc(u, t, {
      ...s,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function DN(e, t) {
  return e.sortNodePosition(t);
}
function NN(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((s) => lc(e, s, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = lc(e, t, n);
  else {
    const o = typeof t == "function" ? Ya(e, t, n.custom) : t;
    r = Promise.all(Wx(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const RN = Id.length;
function Hx(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Hx(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < RN; n++) {
    const r = Id[n], o = e.props[r];
    (gs(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const AN = [..._d].reverse(), MN = _d.length;
function jN(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => NN(e, n, r)));
}
function LN(e) {
  let t = jN(e), n = wh(), r = !0;
  const o = (l) => (u, c) => {
    var d;
    const f = Ya(e, c, l === "exit" ? (d = e.presenceContext) === null || d === void 0 ? void 0 : d.custom : void 0);
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
    const { props: u } = e, c = Hx(e.parent) || {}, d = [], f = /* @__PURE__ */ new Set();
    let h = {}, w = 1 / 0;
    for (let S = 0; S < MN; S++) {
      const m = AN[S], g = n[m], v = u[m] !== void 0 ? u[m] : c[m], b = gs(v), k = m === l ? g.isActive : null;
      k === !1 && (w = S);
      let P = v === c[m] && v !== u[m] && b;
      if (P && r && e.manuallyAnimateOnMount && (P = !1), g.protectedKeys = { ...h }, // If it isn't active and hasn't *just* been set as inactive
      !g.isActive && k === null || // If we didn't and don't have any defined prop for this animation type
      !v && !g.prevProp || // Or if the prop doesn't define an animation
      Ka(v) || typeof v == "boolean")
        continue;
      const C = _N(g.prevProp, v);
      let E = C || // If we're making this variant active, we want to always make it active
      m === l && g.isActive && !P && b || // If we removed a higher-priority variant (i is in reverse order)
      S > w && b, D = !1;
      const N = Array.isArray(v) ? v : [v];
      let j = N.reduce(o(m), {});
      k === !1 && (j = {});
      const { prevResolvedValues: A = {} } = g, F = {
        ...A,
        ...j
      }, B = (O) => {
        E = !0, f.has(O) && (D = !0, f.delete(O)), g.needsAnimating[O] = !0;
        const T = e.getValue(O);
        T && (T.liveStyle = !1);
      };
      for (const O in F) {
        const T = j[O], M = A[O];
        if (h.hasOwnProperty(O))
          continue;
        let _ = !1;
        Zu(T) && Zu(M) ? _ = !ox(T, M) : _ = T !== M, _ ? T != null ? B(O) : f.add(O) : T !== void 0 && f.has(O) ? B(O) : g.protectedKeys[O] = !0;
      }
      g.prevProp = v, g.prevResolvedValues = j, g.isActive && (h = { ...h, ...j }), r && e.blockInitialAnimation && (E = !1), E && (!(P && C) || D) && d.push(...N.map((O) => ({
        animation: O,
        options: { type: m }
      })));
    }
    if (f.size) {
      const S = {};
      f.forEach((m) => {
        const g = e.getBaseTarget(m), v = e.getValue(m);
        v && (v.liveStyle = !0), S[m] = g ?? null;
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
      n = wh(), r = !0;
    }
  };
}
function _N(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !ox(t, e) : !1;
}
function Bn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function wh() {
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
class IN extends Vn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = LN(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ka(t) && (this.unmountControls = t.subscribe(this.node));
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
let ON = 0;
class FN extends Vn {
  constructor() {
    super(...arguments), this.id = ON++;
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
const VN = {
  animation: {
    Feature: IN
  },
  exit: {
    Feature: FN
  }
};
function ws(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Ls(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const zN = (e) => (t) => qd(t) && e(t, Ls(t));
function Ho(e, t, n, r) {
  return ws(e, t, zN(n), r);
}
const Sh = (e, t) => Math.abs(e - t);
function BN(e, t) {
  const n = Sh(e.x, t.x), r = Sh(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Kx {
  constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: s = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const d = Bl(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, h = BN(d.offset, { x: 0, y: 0 }) >= 3;
      if (!f && !h)
        return;
      const { point: w } = d, { timestamp: y } = Ae;
      this.history.push({ ...w, timestamp: y });
      const { onStart: S, onMove: m } = this.handlers;
      f || (S && S(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), m && m(this.lastMoveEvent, d);
    }, this.handlePointerMove = (d, f) => {
      this.lastMoveEvent = d, this.lastMoveEventInfo = zl(f, this.transformPagePoint), de.update(this.updatePoint, !0);
    }, this.handlePointerUp = (d, f) => {
      this.end();
      const { onEnd: h, onSessionEnd: w, resumeAnimation: y } = this.handlers;
      if (this.dragSnapToOrigin && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const S = Bl(d.type === "pointercancel" ? this.lastMoveEventInfo : zl(f, this.transformPagePoint), this.history);
      this.startEvent && h && h(d, S), w && w(d, S);
    }, !qd(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = Ls(t), a = zl(i, this.transformPagePoint), { point: l } = a, { timestamp: u } = Ae;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Bl(a, this.history)), this.removeListeners = js(Ho(this.contextWindow, "pointermove", this.handlePointerMove), Ho(this.contextWindow, "pointerup", this.handlePointerUp), Ho(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Mn(this.updatePoint);
  }
}
function zl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function bh(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Bl({ point: e }, t) {
  return {
    point: e,
    delta: bh(e, Gx(t)),
    offset: bh(e, $N(t)),
    velocity: UN(t, 0.1)
  };
}
function $N(e) {
  return e[0];
}
function Gx(e) {
  return e[e.length - 1];
}
function UN(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = Gx(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > /* @__PURE__ */ Gt(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = /* @__PURE__ */ Yt(o.timestamp - r.timestamp);
  if (s === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - r.x) / s,
    y: (o.y - r.y) / s
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
const Yx = 1e-4, WN = 1 - Yx, HN = 1 + Yx, Xx = 0.01, KN = 0 - Xx, GN = 0 + Xx;
function st(e) {
  return e.max - e.min;
}
function YN(e, t, n) {
  return Math.abs(e - t) <= n;
}
function kh(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = he(t.min, t.max, e.origin), e.scale = st(n) / st(t), e.translate = he(n.min, n.max, e.origin) - e.originPoint, (e.scale >= WN && e.scale <= HN || isNaN(e.scale)) && (e.scale = 1), (e.translate >= KN && e.translate <= GN || isNaN(e.translate)) && (e.translate = 0);
}
function Ko(e, t, n, r) {
  kh(e.x, t.x, n.x, r ? r.originX : void 0), kh(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Ch(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + st(t);
}
function XN(e, t, n) {
  Ch(e.x, t.x, n.x), Ch(e.y, t.y, n.y);
}
function Eh(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + st(t);
}
function Go(e, t, n) {
  Eh(e.x, t.x, n.x), Eh(e.y, t.y, n.y);
}
function QN(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? he(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? he(n, e, r.max) : Math.min(e, n)), e;
}
function Ph(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function qN(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Ph(e.x, n, o),
    y: Ph(e.y, t, r)
  };
}
function Th(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function ZN(e, t) {
  return {
    x: Th(e.x, t.x),
    y: Th(e.y, t.y)
  };
}
function JN(e, t) {
  let n = 0.5;
  const r = st(e), o = st(t);
  return o > r ? n = /* @__PURE__ */ Zr(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ Zr(e.min, e.max - o, t.min)), tn(0, 1, n);
}
function e2(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const uc = 0.35;
function t2(e = uc) {
  return e === !1 ? e = 0 : e === !0 && (e = uc), {
    x: Dh(e, "left", "right"),
    y: Dh(e, "top", "bottom")
  };
}
function Dh(e, t, n) {
  return {
    min: Nh(e, t),
    max: Nh(e, n)
  };
}
function Nh(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Rh = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Rr = () => ({
  x: Rh(),
  y: Rh()
}), Ah = () => ({ min: 0, max: 0 }), Se = () => ({
  x: Ah(),
  y: Ah()
});
function ut(e) {
  return [e("x"), e("y")];
}
function Qx({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function n2({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function r2(e, t) {
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
function $l(e) {
  return e === void 0 || e === 1;
}
function cc({ scale: e, scaleX: t, scaleY: n }) {
  return !$l(e) || !$l(t) || !$l(n);
}
function Wn(e) {
  return cc(e) || qx(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function qx(e) {
  return Mh(e.x) || Mh(e.y);
}
function Mh(e) {
  return e && e !== "0%";
}
function ga(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function jh(e, t, n, r, o) {
  return o !== void 0 && (e = ga(e, o, r)), ga(e, n, r) + t;
}
function dc(e, t = 0, n = 1, r, o) {
  e.min = jh(e.min, t, n, r, o), e.max = jh(e.max, t, n, r, o);
}
function Zx(e, { x: t, y: n }) {
  dc(e.x, t.translate, t.scale, t.originPoint), dc(e.y, n.translate, n.scale, n.originPoint);
}
const Lh = 0.999999999999, _h = 1.0000000000001;
function o2(e, t, n, r = !1) {
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
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, Zx(e, i)), r && Wn(s.latestValues) && Mr(e, s.latestValues));
  }
  t.x < _h && t.x > Lh && (t.x = 1), t.y < _h && t.y > Lh && (t.y = 1);
}
function Ar(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Ih(e, t, n, r, o = 0.5) {
  const s = he(e.min, e.max, o);
  dc(e, t, n, s, r);
}
function Mr(e, t) {
  Ih(e.x, t.x, t.scaleX, t.scale, t.originX), Ih(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Jx(e, t) {
  return Qx(r2(e.getBoundingClientRect(), t));
}
function s2(e, t, n) {
  const r = Jx(e, n), { scroll: o } = t;
  return o && (Ar(r.x, o.offset.x), Ar(r.y, o.offset.y)), r;
}
const ew = ({ current: e }) => e ? e.ownerDocument.defaultView : null, i2 = /* @__PURE__ */ new WeakMap();
class a2 {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Se(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (c) => {
      const { dragSnapToOrigin: d } = this.getProps();
      d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Ls(c).point);
    }, s = (c, d) => {
      const { drag: f, dragPropagation: h, onDragStart: w } = this.getProps();
      if (f && !h && (this.openDragLock && this.openDragLock(), this.openDragLock = JT(f), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ut((S) => {
        let m = this.getAxisMotionValue(S).get() || 0;
        if (Ot.test(m)) {
          const { projection: g } = this.visualElement;
          if (g && g.layout) {
            const v = g.layout.layoutBox[S];
            v && (m = st(v) * (parseFloat(m) / 100));
          }
        }
        this.originPoint[S] = m;
      }), w && de.postRender(() => w(c, d)), tc(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, i = (c, d) => {
      const { dragPropagation: f, dragDirectionLock: h, onDirectionLock: w, onDrag: y } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: S } = d;
      if (h && this.currentDirection === null) {
        this.currentDirection = l2(S), this.currentDirection !== null && w && w(this.currentDirection);
        return;
      }
      this.updateAxis("x", d.point, S), this.updateAxis("y", d.point, S), this.visualElement.render(), y && y(c, d);
    }, a = (c, d) => this.stop(c, d), l = () => ut((c) => {
      var d;
      return this.getAnimationState(c) === "paused" && ((d = this.getAxisMotionValue(c).animation) === null || d === void 0 ? void 0 : d.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Kx(t, {
      onSessionStart: o,
      onStart: s,
      onMove: i,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: ew(this.visualElement)
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
    if (!r || !pi(t, o, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (i = QN(i, this.constraints[t], this.elastic[t])), s.set(i);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, s = this.constraints;
    n && Dr(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = qN(o.layoutBox, n) : this.constraints = !1, this.elastic = t2(r), s !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && ut((i) => {
      this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = e2(o.layoutBox[i], this.constraints[i]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Dr(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const s = s2(r, o.root, this.visualElement.getTransformPagePoint());
    let i = ZN(o.layout.layoutBox, s);
    if (n) {
      const a = n(n2(i));
      this.hasMutatedConstraints = !!a, a && (i = Qx(a));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = ut((c) => {
      if (!pi(c, n, this.currentDirection))
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
    return tc(this.visualElement, t), r.start(cf(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    ut((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    ut((t) => {
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
    ut((n) => {
      const { drag: r } = this.getProps();
      if (!pi(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, s = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: i, max: a } = o.layout.layoutBox[n];
        s.set(t[n] - he(i, a, 0.5));
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
    ut((i) => {
      const a = this.getAxisMotionValue(i);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[i] = JN({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), ut((i) => {
      if (!pi(i, t, null))
        return;
      const a = this.getAxisMotionValue(i), { min: l, max: u } = this.constraints[i];
      a.set(he(l, u, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    i2.set(this.visualElement, this);
    const t = this.visualElement.current, n = Ho(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Dr(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, s = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), de.read(r);
    const i = ws(window, "resize", () => this.scalePositionWithinConstraints()), a = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (ut((c) => {
        const d = this.getAxisMotionValue(c);
        d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      i(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: s = !1, dragElastic: i = uc, dragMomentum: a = !0 } = t;
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
function pi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function l2(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class u2 extends Vn {
  constructor(t) {
    super(t), this.removeGroupControls = rt, this.removeListeners = rt, this.controls = new a2(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || rt;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Oh = (e) => (t, n) => {
  e && de.postRender(() => e(t, n));
};
class c2 extends Vn {
  constructor() {
    super(...arguments), this.removePointerDownListener = rt;
  }
  onPointerDown(t) {
    this.session = new Kx(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: ew(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Oh(t),
      onStart: Oh(n),
      onMove: r,
      onEnd: (s, i) => {
        delete this.session, o && de.postRender(() => o(s, i));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Ho(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const ji = {
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
function Fh(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Po = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if ($.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Fh(e, t.target.x), r = Fh(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, d2 = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = jn.parse(e);
    if (o.length > 5)
      return r;
    const s = jn.createTransformer(e), i = typeof o[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + i] /= a, o[1 + i] /= l;
    const u = he(a, l, 0.5);
    return typeof o[2 + i] == "number" && (o[2 + i] /= u), typeof o[3 + i] == "number" && (o[3 + i] /= u), s(o);
  }
};
class f2 extends x.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: s } = t;
    MT(p2), s && (n.group && n.group.add(s), r && r.register && o && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), ji.hasEverUpdated = !0;
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
    t && (t.root.didUpdate(), Fd.postRender(() => {
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
function tw(e) {
  const [t, n] = O0(), r = x.useContext(Rd);
  return p.jsx(f2, { ...e, layoutGroup: r, switchLayoutGroup: x.useContext(H0), isPresent: t, safeToRemove: n });
}
const p2 = {
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
  boxShadow: d2
};
function h2(e, t, n) {
  const r = Ve(e) ? e : vs(e);
  return r.start(cf("", r, t, n)), r.animation;
}
function m2(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const g2 = (e, t) => e.depth - t.depth;
class y2 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Zd(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Jd(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(g2), this.isDirty = !1, this.children.forEach(t);
  }
}
function v2(e, t) {
  const n = Ft.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= t && (Mn(r), e(s - t));
  };
  return de.read(r, !0), () => Mn(r);
}
const nw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], x2 = nw.length, Vh = (e) => typeof e == "string" ? parseFloat(e) : e, zh = (e) => typeof e == "number" || $.test(e);
function w2(e, t, n, r, o, s) {
  o ? (e.opacity = he(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    S2(r)
  ), e.opacityExit = he(t.opacity !== void 0 ? t.opacity : 1, 0, b2(r))) : s && (e.opacity = he(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < x2; i++) {
    const a = `border${nw[i]}Radius`;
    let l = Bh(t, a), u = Bh(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || zh(l) === zh(u) ? (e[a] = Math.max(he(Vh(l), Vh(u), r), 0), (Ot.test(u) || Ot.test(l)) && (e[a] += "%")) : e[a] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = he(t.rotate || 0, n.rotate || 0, r));
}
function Bh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const S2 = /* @__PURE__ */ rw(0, 0.5, Sx), b2 = /* @__PURE__ */ rw(0.5, 0.95, rt);
function rw(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Zr(e, t, r));
}
function $h(e, t) {
  e.min = t.min, e.max = t.max;
}
function lt(e, t) {
  $h(e.x, t.x), $h(e.y, t.y);
}
function Uh(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Wh(e, t, n, r, o) {
  return e -= t, e = ga(e, 1 / n, r), o !== void 0 && (e = ga(e, 1 / o, r)), e;
}
function k2(e, t = 0, n = 1, r = 0.5, o, s = e, i = e) {
  if (Ot.test(t) && (t = parseFloat(t), t = he(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let a = he(s.min, s.max, r);
  e === s && (a -= t), e.min = Wh(e.min, t, n, a, o), e.max = Wh(e.max, t, n, a, o);
}
function Hh(e, t, [n, r, o], s, i) {
  k2(e, t[n], t[r], t[o], t.scale, s, i);
}
const C2 = ["x", "scaleX", "originX"], E2 = ["y", "scaleY", "originY"];
function Kh(e, t, n, r) {
  Hh(e.x, t, C2, n ? n.x : void 0, r ? r.x : void 0), Hh(e.y, t, E2, n ? n.y : void 0, r ? r.y : void 0);
}
function Gh(e) {
  return e.translate === 0 && e.scale === 1;
}
function ow(e) {
  return Gh(e.x) && Gh(e.y);
}
function Yh(e, t) {
  return e.min === t.min && e.max === t.max;
}
function P2(e, t) {
  return Yh(e.x, t.x) && Yh(e.y, t.y);
}
function Xh(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function sw(e, t) {
  return Xh(e.x, t.x) && Xh(e.y, t.y);
}
function Qh(e) {
  return st(e.x) / st(e.y);
}
function qh(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class T2 {
  constructor() {
    this.members = [];
  }
  add(t) {
    Zd(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Jd(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function D2(e, t, n) {
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
}, Lo = typeof window < "u" && window.MotionDebug !== void 0, Ul = ["", "X", "Y", "Z"], N2 = { visibility: "hidden" }, Zh = 1e3;
let R2 = 0;
function Wl(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function iw(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = hx(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", de, !(o || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && iw(r);
}
function aw({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(i = {}, a = t == null ? void 0 : t()) {
      this.id = R2++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Lo && (Hn.totalNodes = Hn.resolvedTargetDeltas = Hn.recalculatedProjection = 0), this.nodes.forEach(j2), this.nodes.forEach(F2), this.nodes.forEach(V2), this.nodes.forEach(L2), Lo && window.MotionDebug.record(Hn);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new y2());
    }
    addEventListener(i, a) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new ef()), this.eventHandlers.get(i).add(a);
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
      this.isSVG = m2(i), this.instance = i;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = v2(f, 250), ji.hasAnimatedSinceResize && (ji.hasAnimatedSinceResize = !1, this.nodes.forEach(em));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: h, layout: w }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || c.getDefaultTransition() || W2, { onLayoutAnimationStart: S, onLayoutAnimationComplete: m } = c.getProps(), g = !this.targetLayout || !sw(this.targetLayout, w) || h, v = !f && h;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || v || f && (g || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, v);
          const b = {
            ...Yd(y, "layout"),
            onPlay: S,
            onComplete: m
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (b.delay = 0, b.type = !1), this.startAnimation(b);
        } else
          f || em(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(z2), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && iw(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Jh);
        return;
      }
      this.isUpdating || this.nodes.forEach(I2), this.isUpdating = !1, this.nodes.forEach(O2), this.nodes.forEach(A2), this.nodes.forEach(M2), this.clearAllSnapshots();
      const a = Ft.now();
      Ae.delta = tn(0, 1e3 / 60, a - Ae.timestamp), Ae.timestamp = a, Ae.isProcessing = !0, Ll.update.process(Ae), Ll.preRender.process(Ae), Ll.render.process(Ae), Ae.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Fd.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(_2), this.sharedNodes.forEach(B2);
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
      const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !ow(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      i && (a || Wn(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return i && (l = this.removeTransform(l)), H2(l), {
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
      if (!(((i = this.scroll) === null || i === void 0 ? void 0 : i.wasRoot) || this.path.some(K2))) {
        const { scroll: c } = this.root;
        c && (Ar(l.x, c.offset.x), Ar(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(i) {
      var a;
      const l = Se();
      if (lt(l, i), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: d, options: f } = c;
        c !== this.root && d && f.layoutScroll && (d.wasRoot && lt(l, i), Ar(l.x, d.offset.x), Ar(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(i, a = !1) {
      const l = Se();
      lt(l, i);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && Mr(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), Wn(c.latestValues) && Mr(l, c.latestValues);
      }
      return Wn(this.latestValues) && Mr(l, this.latestValues), l;
    }
    removeTransform(i) {
      const a = Se();
      lt(a, i);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Wn(u.latestValues))
          continue;
        cc(u.latestValues) && u.updateSnapshot();
        const c = Se(), d = u.measurePageBox();
        lt(c, d), Kh(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Wn(this.latestValues) && Kh(a, this.latestValues), a;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ae.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
        if (this.resolvedRelativeTargetAt = Ae.timestamp, !this.targetDelta && !this.relativeTarget) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Se(), this.relativeTargetOrigin = Se(), Go(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox), lt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Se(), this.targetWithTransforms = Se()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), XN(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : lt(this.target, this.layout.layoutBox), Zx(this.target, this.targetDelta)) : lt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const h = this.getClosestProjectingParent();
            h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Se(), this.relativeTargetOrigin = Se(), Go(this.relativeTargetOrigin, this.target, h.target), lt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Lo && Hn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || cc(this.parent.latestValues) || qx(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var i;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let u = !0;
      if ((this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === Ae.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d))
        return;
      lt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, h = this.treeScale.y;
      o2(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = Se());
      const { target: w } = a;
      if (!w) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Uh(this.prevProjectionDelta.x, this.projectionDelta.x), Uh(this.prevProjectionDelta.y, this.projectionDelta.y)), Ko(this.projectionDelta, this.layoutCorrected, w, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== h || !qh(this.projectionDelta.x, this.prevProjectionDelta.x) || !qh(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", w)), Lo && Hn.recalculatedProjection++;
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
      this.prevProjectionDelta = Rr(), this.projectionDelta = Rr(), this.projectionDeltaWithTransform = Rr();
    }
    setAnimationOrigin(i, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = Rr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = Se(), h = l ? l.source : void 0, w = this.layout ? this.layout.source : void 0, y = h !== w, S = this.getStack(), m = !S || S.members.length <= 1, g = !!(y && !m && this.options.crossfade === !0 && !this.path.some(U2));
      this.animationProgress = 0;
      let v;
      this.mixTargetDelta = (b) => {
        const k = b / 1e3;
        tm(d.x, i.x, k), tm(d.y, i.y, k), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Go(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), $2(this.relativeTarget, this.relativeTargetOrigin, f, k), v && P2(this.relativeTarget, v) && (this.isProjectionDirty = !1), v || (v = Se()), lt(v, this.relativeTarget)), y && (this.animationValues = c, w2(c, u, this.latestValues, k, g, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Mn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = de.update(() => {
        ji.hasAnimatedSinceResize = !0, this.currentAnimation = h2(0, Zh, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Zh), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = i;
      if (!(!a || !l || !u)) {
        if (this !== i && this.layout && u && lw(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Se();
          const d = st(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + d;
          const f = st(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + f;
        }
        lt(a, l), Mr(a, c), Ko(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(i, a) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new T2()), this.sharedNodes.get(i).add(a);
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
      l.z && Wl("z", i, u, this.animationValues);
      for (let c = 0; c < Ul.length; c++)
        Wl(`rotate${Ul[c]}`, i, u, this.animationValues), Wl(`skew${Ul[c]}`, i, u, this.animationValues);
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
        return N2;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Ai(i == null ? void 0 : i.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const y = {};
        return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = Ai(i == null ? void 0 : i.pointerEvents) || ""), this.hasProjected && !Wn(this.latestValues) && (y.transform = c ? c({}, "") : "none", this.hasProjected = !1), y;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = D2(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: h, y: w } = this.projectionDelta;
      u.transformOrigin = `${h.origin * 100}% ${w.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const y in da) {
        if (f[y] === void 0)
          continue;
        const { correct: S, applyTo: m } = da[y], g = u.transform === "none" ? f[y] : S(f[y], d);
        if (m) {
          const v = m.length;
          for (let b = 0; b < v; b++)
            u[m[b]] = g;
        } else
          u[y] = g;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? Ai(i == null ? void 0 : i.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var a;
        return (a = i.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(Jh), this.root.sharedNodes.clear();
    }
  };
}
function A2(e) {
  e.updateLayout();
}
function M2(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: s } = e.options, i = n.source !== e.layout.source;
    s === "size" ? ut((d) => {
      const f = i ? n.measuredBox[d] : n.layoutBox[d], h = st(f);
      f.min = r[d].min, f.max = f.min + h;
    }) : lw(s, n.layoutBox, r) && ut((d) => {
      const f = i ? n.measuredBox[d] : n.layoutBox[d], h = st(r[d]);
      f.max = f.min + h, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + h);
    });
    const a = Rr();
    Ko(a, r, n.layoutBox);
    const l = Rr();
    i ? Ko(l, e.applyTransform(o, !0), n.measuredBox) : Ko(l, r, n.layoutBox);
    const u = !ow(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d;
        if (f && h) {
          const w = Se();
          Go(w, n.layoutBox, f.layoutBox);
          const y = Se();
          Go(y, r, h.layoutBox), sw(w, y) || (c = !0), d.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = w, e.relativeParent = d);
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
function j2(e) {
  Lo && Hn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function L2(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function _2(e) {
  e.clearSnapshot();
}
function Jh(e) {
  e.clearMeasurements();
}
function I2(e) {
  e.isLayoutDirty = !1;
}
function O2(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function em(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function F2(e) {
  e.resolveTargetDelta();
}
function V2(e) {
  e.calcProjection();
}
function z2(e) {
  e.resetSkewAndRotation();
}
function B2(e) {
  e.removeLeadSnapshot();
}
function tm(e, t, n) {
  e.translate = he(t.translate, 0, n), e.scale = he(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function nm(e, t, n, r) {
  e.min = he(t.min, n.min, r), e.max = he(t.max, n.max, r);
}
function $2(e, t, n, r) {
  nm(e.x, t.x, n.x, r), nm(e.y, t.y, n.y, r);
}
function U2(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const W2 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, rm = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), om = rm("applewebkit/") && !rm("chrome/") ? Math.round : rt;
function sm(e) {
  e.min = om(e.min), e.max = om(e.max);
}
function H2(e) {
  sm(e.x), sm(e.y);
}
function lw(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !YN(Qh(t), Qh(n), 0.2);
}
function K2(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const G2 = aw({
  attachResizeListener: (e, t) => ws(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Hl = {
  current: void 0
}, uw = aw({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Hl.current) {
      const e = new G2({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Hl.current = e;
    }
    return Hl.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Y2 = {
  pan: {
    Feature: c2
  },
  drag: {
    Feature: u2,
    ProjectionNode: uw,
    MeasureLayout: tw
  }
};
function im(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, s = r[o];
  s && de.postRender(() => s(t, Ls(t)));
}
class X2 extends Vn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = YT(t, (n) => (im(this.node, n, "Start"), (r) => im(this.node, r, "End"))));
  }
  unmount() {
  }
}
class Q2 extends Vn {
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
    this.unmount = js(ws(this.node.current, "focus", () => this.onFocus()), ws(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function am(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n), s = r[o];
  s && de.postRender(() => s(t, Ls(t)));
}
class q2 extends Vn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = ZT(t, (n) => (am(this.node, n, "Start"), (r, { success: o }) => am(this.node, r, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const fc = /* @__PURE__ */ new WeakMap(), Kl = /* @__PURE__ */ new WeakMap(), Z2 = (e) => {
  const t = fc.get(e.target);
  t && t(e);
}, J2 = (e) => {
  e.forEach(Z2);
};
function eR({ root: e, ...t }) {
  const n = e || document;
  Kl.has(n) || Kl.set(n, {});
  const r = Kl.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(J2, { root: e, ...t })), r[o];
}
function tR(e, t, n) {
  const r = eR(t);
  return fc.set(e, n), r.observe(e), () => {
    fc.delete(e), r.unobserve(e);
  };
}
const nR = {
  some: 0,
  all: 1
};
class rR extends Vn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: s } = t, i = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : nR[o]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return tR(this.node.current, i, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(oR(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function oR({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const sR = {
  inView: {
    Feature: rR
  },
  tap: {
    Feature: q2
  },
  focus: {
    Feature: Q2
  },
  hover: {
    Feature: X2
  }
}, iR = {
  layout: {
    ProjectionNode: uw,
    MeasureLayout: tw
  }
}, pc = { current: null }, cw = { current: !1 };
function aR() {
  if (cw.current = !0, !!jd)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => pc.current = e.matches;
      e.addListener(t), t();
    } else
      pc.current = !1;
}
const lR = [..._x, Oe, jn], uR = (e) => lR.find(Lx(e)), lm = /* @__PURE__ */ new WeakMap();
function cR(e, t, n) {
  for (const r in t) {
    const o = t[r], s = n[r];
    if (Ve(o))
      e.addValue(r, o);
    else if (Ve(s))
      e.addValue(r, vs(o, { owner: e }));
    else if (s !== o)
      if (e.hasValue(r)) {
        const i = e.getValue(r);
        i.liveStyle === !0 ? i.jump(o) : i.hasAnimated || i.set(o);
      } else {
        const i = e.getStaticValue(r);
        e.addValue(r, vs(i !== void 0 ? i : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const um = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class dR {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = af, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const h = Ft.now();
      this.renderScheduledAt < h && (this.renderScheduledAt = h, de.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u, onUpdate: c } = i;
    this.onUpdate = c, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.blockInitialAnimation = !!s, this.isControllingVariants = Ga(n), this.isVariantNode = U0(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in f) {
      const w = f[h];
      l[h] !== void 0 && Ve(w) && w.set(l[h], !1);
    }
  }
  mount(t) {
    this.current = t, lm.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), cw.current || aR(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : pc.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    lm.delete(this.current), this.projection && this.projection.unmount(), Mn(this.notifyUpdate), Mn(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    for (t in Jr) {
      const n = Jr[t];
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
    for (let r = 0; r < um.length; r++) {
      const o = um[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const s = "on" + o, i = t[s];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = cR(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return r === void 0 && n !== void 0 && (r = vs(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return o != null && (typeof o == "string" && (Mx(o) || kx(o)) ? o = parseFloat(o) : !uR(o) && jn.test(n) && (o = Nx(t, n)), this.setBaseTarget(t, Ve(o) ? o.get() : o)), Ve(o) ? o.get() : o;
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
      const i = zd(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      i && (o = i[t]);
    }
    if (r && o !== void 0)
      return o;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !Ve(s) ? s : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new ef()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class dw extends dR {
  constructor() {
    super(...arguments), this.KeyframeResolver = Ix;
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
    Ve(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function fR(e) {
  return window.getComputedStyle(e);
}
class pR extends dw {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Z0;
  }
  readValueFromInstance(t, n) {
    if (dr.has(n)) {
      const r = sf(n);
      return r && r.default || 0;
    } else {
      const r = fR(t), o = (X0(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Jx(t, n);
  }
  build(t, n, r) {
    Ud(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Gd(t, n, r);
  }
}
class hR extends dw {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Se;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (dr.has(n)) {
      const r = sf(n);
      return r && r.default || 0;
    }
    return n = J0.has(n) ? n : Od(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return nx(t, n, r);
  }
  build(t, n, r) {
    Wd(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    ex(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = Kd(t.tagName), super.mount(t);
  }
}
const mR = (e, t) => Vd(e) ? new hR(t) : new pR(t, {
  allowProjection: e !== x.Fragment
}), gR = /* @__PURE__ */ BT({
  ...VN,
  ...sR,
  ...Y2,
  ...iR
}, mR), hi = /* @__PURE__ */ nT(gR);
function lr(e = "default", t = !1) {
  const n = {
    default: { light: "bg-gray-500", dark: "dark:bg-gray-400" },
    // #6b7280 / #9ca3af
    primary: { light: "bg-purple-500", dark: "dark:bg-purple-400" },
    // #8b5cf6 / #a78bfa
    success: { light: "bg-green-500", dark: "dark:bg-green-400" },
    // #22c55e / #4ade80
    danger: { light: "bg-red-500", dark: "dark:bg-red-400" },
    // #ef4444 / #f87171
    warning: { light: "bg-blue-500", dark: "dark:bg-blue-400" },
    // #3b82f6 / #60a5fa
    orange: { light: "bg-orange-500", dark: "dark:bg-orange-400" },
    // #f97316 / #fb923c
    cyan: { light: "bg-cyan-500", dark: "dark:bg-cyan-400" },
    // #06b6d4 / #22d3ee
    pink: { light: "bg-pink-500", dark: "dark:bg-pink-400" },
    // #ec4899 / #f472b6
    indigo: { light: "bg-indigo-500", dark: "dark:bg-indigo-400" },
    // #6366f1 / #818cf8
    yellow: { light: "bg-yellow-500", dark: "dark:bg-yellow-400" }
    // #eab308 / #facc15
  }, r = n[e] || n.default;
  return `${r.light} ${r.dark}`;
}
function Ss(e, t = {}) {
  return e ? t[e] ? t[e] : {
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
  }[e] || "default" : "default";
}
function yR(e) {
  const t = {};
  return e.forEach((n) => {
    n.variant && (t[n.slug] = n.variant);
  }), t;
}
function vR({ events: e, eventMetadata: t, categoryMappings: n, onDateClick: r, onEventClick: o }) {
  const [s, i] = x.useState(/* @__PURE__ */ new Date()), [a, l] = x.useState(0), [u, c] = x.useState(null), d = (C, E) => {
    const D = new Date(E, C + 1, 0).getDate();
    return Array.from({ length: D }, (N, j) => ({ day: j + 1 }));
  }, f = (C, E) => e.filter((D) => {
    const N = new Date(D.startDate);
    return N.getDate() === C && N.getMonth() === E.getMonth() && N.getFullYear() === E.getFullYear();
  }), h = (C) => C.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), w = () => {
    l(-1);
    const C = new Date(s.getFullYear(), s.getMonth() - 1, 1);
    i(C);
  }, y = () => {
    l(1);
    const C = new Date(s.getFullYear(), s.getMonth() + 1, 1);
    i(C);
  }, S = d(s.getMonth(), s.getFullYear()), m = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], v = new Date(s.getFullYear(), s.getMonth(), 1).getDay(), b = new Date(s.getFullYear(), s.getMonth() - 1, 1), k = new Date(b.getFullYear(), b.getMonth() + 1, 0).getDate(), P = ({ events: C }) => {
    const E = C.reduce((D, N) => {
      const j = t[N.id], A = (j == null ? void 0 : j.category) || "uncategorized";
      return D[A] || (D[A] = []), D[A].push(N), D;
    }, {});
    return /* @__PURE__ */ p.jsx("div", { className: "flex flex-wrap gap-1", children: Object.entries(E).map(([D, N]) => {
      const j = Ss(D === "uncategorized" ? null : D, n), A = lr(j);
      return /* @__PURE__ */ p.jsx(
        "div",
        {
          className: `${A} text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium shadow-sm`,
          title: `${N.length} ${D} event${N.length > 1 ? "s" : ""}: ${N.map((F) => F.title).join(", ")}`,
          children: N.length
        },
        D
      );
    }) });
  };
  return /* @__PURE__ */ p.jsxs("div", { children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4", children: [
      /* @__PURE__ */ p.jsxs(
        hi.h2,
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
        /* @__PURE__ */ p.jsxs(Pn, { variant: "outline", onClick: w, className: "gap-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600", children: [
          /* @__PURE__ */ p.jsx($v, { className: "h-4 w-4" }),
          "Prev"
        ] }),
        /* @__PURE__ */ p.jsxs(Pn, { variant: "outline", onClick: y, className: "gap-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600", children: [
          "Next",
          /* @__PURE__ */ p.jsx(Uv, { className: "h-4 w-4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ p.jsx(Xp, { initial: !1, custom: a, mode: "wait", children: /* @__PURE__ */ p.jsxs(
      hi.div,
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
            const D = f(C.day, s), N = (/* @__PURE__ */ new Date()).getDate() === C.day && (/* @__PURE__ */ new Date()).getMonth() === s.getMonth() && (/* @__PURE__ */ new Date()).getFullYear() === s.getFullYear(), A = (v + C.day - 1) % 7 >= 5;
            return /* @__PURE__ */ p.jsxs(
              hi.div,
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
                    ud,
                    {
                      className: `bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md overflow-hidden relative flex p-4 border h-full transition-shadow day-card ${D.length > 0 ? "cursor-pointer hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700" : "cursor-default"}`,
                      onClick: D.length > 0 ? () => r == null ? void 0 : r(new Date(s.getFullYear(), s.getMonth(), C.day)) : void 0,
                      children: [
                        /* @__PURE__ */ p.jsx("div", { className: `font-semibold relative text-3xl mb-1 ${D.length > 0 ? "text-gray-900 dark:text-gray-100" : "text-gray-500 dark:text-gray-400"} ${N ? "text-blue-600 dark:text-blue-400" : ""}`, children: C.day }),
                        /* @__PURE__ */ p.jsx("div", { className: "flex-grow flex flex-col gap-2 w-full", children: /* @__PURE__ */ p.jsx(Xp, { mode: "wait", children: (D == null ? void 0 : D.length) > 0 && /* @__PURE__ */ p.jsx(
                          hi.div,
                          {
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0, y: -20 },
                            transition: { duration: 0.3 },
                            children: /* @__PURE__ */ p.jsx(P, { events: D })
                          },
                          D[0].id
                        ) }) })
                      ]
                    }
                  ),
                  u === C.day && D.length > 0 && /* @__PURE__ */ p.jsxs(
                    "div",
                    {
                      className: `absolute top-full z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3 w-80 ${A ? "right-0" : "left-0"}`,
                      onMouseEnter: () => c(C.day),
                      onMouseLeave: () => c(null),
                      children: [
                        /* @__PURE__ */ p.jsxs("div", { className: "text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2", children: [
                          D.length,
                          " event",
                          D.length > 1 ? "s" : ""
                        ] }),
                        /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: D.map((F) => {
                          const B = t[F.id], G = Ss(B == null ? void 0 : B.category, n), V = lr(G);
                          return /* @__PURE__ */ p.jsxs(
                            "div",
                            {
                              className: "flex items-start gap-2 p-1 -m-1 rounded cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors",
                              onClick: (O) => {
                                O.stopPropagation(), o == null || o(F);
                              },
                              children: [
                                /* @__PURE__ */ p.jsx("div", { className: `w-2 h-2 rounded-full ${V} flex-shrink-0 mt-1.5` }),
                                /* @__PURE__ */ p.jsxs("div", { className: "flex-1 min-w-0", children: [
                                  /* @__PURE__ */ p.jsx("div", { className: "font-medium text-sm text-gray-900 dark:text-gray-100 leading-tight", children: F.title }),
                                  /* @__PURE__ */ p.jsx("div", { className: "text-xs text-gray-600 dark:text-gray-400 mt-0.5", children: h(F.startDate) })
                                ] })
                              ]
                            },
                            F.id
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
function xR({ events: e, eventMetadata: t, onEventClick: n }) {
  const [r, o] = se.useState(/* @__PURE__ */ new Date()), i = ((f) => {
    const h = new Date(f);
    return h.setDate(f.getDate() - f.getDay()), Array.from({ length: 7 }, (w, y) => {
      const S = new Date(h);
      return S.setDate(h.getDate() + y), S;
    });
  })(r), a = Array.from({ length: 24 }, (f, h) => h), l = (f) => e.filter((h) => h.startDate.toDateString() === f.toDateString()), u = (f) => {
    const h = new Date(r);
    h.setDate(r.getDate() + (f === "next" ? 7 : -7)), o(h);
  }, c = (f, h, w) => {
    const y = f.startDate.getHours(), S = f.startDate.getMinutes(), m = f.endDate ? f.endDate.getHours() : y + 1, g = f.endDate ? f.endDate.getMinutes() : 0, v = y + S / 60, b = m + g / 60, k = b - v, P = h.filter((j) => {
      if (j.id === f.id) return !0;
      if (j.startDate.toDateString() !== f.startDate.toDateString())
        return !1;
      const A = j.startDate.getHours() + j.startDate.getMinutes() / 60, F = (j.endDate ? j.endDate.getHours() : j.startDate.getHours() + 1) + (j.endDate ? j.endDate.getMinutes() / 60 : 0);
      return v < F && b > A;
    }), C = P.length, E = P.findIndex((j) => j.id === f.id), D = C > 1 ? 100 / C : 100, N = C > 1 ? E * D : 0;
    return {
      top: `${v * 80}px`,
      // 80px per hour for better readability
      height: `${k * 80}px`,
      // Accurate height based on actual duration
      left: `${N}%`,
      width: `${D}%`
    };
  }, d = "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-600";
  return /* @__PURE__ */ p.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ p.jsx(
        "button",
        {
          onClick: () => u("prev"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ p.jsx(Wv, { className: "h-5 w-5" })
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
          children: /* @__PURE__ */ p.jsx(Hv, { className: "h-5 w-5" })
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
              const m = t[y.id], g = {
                clubs: "bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100 border-purple-200 dark:border-purple-700",
                unbc: "bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 border-green-200 dark:border-green-700",
                organizations: "bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100 border-red-200 dark:border-red-700",
                sports: "bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 border-blue-200 dark:border-blue-700"
              }, v = m != null && m.category && g[m.category] ? g[m.category] : d, b = c(y, w);
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
                    m && /* @__PURE__ */ p.jsxs("div", { className: "text-xs leading-tight", children: [
                      /* @__PURE__ */ p.jsx("div", { className: "truncate", children: m.location }),
                      m.organization && /* @__PURE__ */ p.jsx("div", { className: "truncate opacity-75", children: m.organization })
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
function wR({ events: e, eventMetadata: t, initialDate: n, onEventClick: r }) {
  const [o, s] = se.useState(n || /* @__PURE__ */ new Date());
  se.useEffect(() => {
    n && s(n);
  }, [n]);
  const i = Array.from({ length: 24 }, (h, w) => w), a = () => e.filter((h) => h.startDate.toDateString() === o.toDateString()), l = (h) => {
    const w = new Date(o);
    w.setDate(o.getDate() + (h === "next" ? 1 : -1)), s(w);
  }, u = (h, w, y) => {
    const S = h.startDate.getHours(), m = h.startDate.getMinutes(), g = h.endDate ? h.endDate.getHours() : S + 1, v = h.endDate ? h.endDate.getMinutes() : 0, b = S + m / 60, k = g + v / 60, P = k - b, C = w.filter((A) => {
      if (A.id === h.id) return !0;
      const F = A.startDate.getHours() + A.startDate.getMinutes() / 60, B = (A.endDate ? A.endDate.getHours() : A.startDate.getHours() + 1) + (A.endDate ? A.endDate.getMinutes() / 60 : 0);
      return b < B && k > F;
    }), E = C.length, D = C.findIndex((A) => A.id === h.id), N = E > 1 ? 100 / E : 100, j = E > 1 ? D * N : 0;
    return {
      top: `${b * 80}px`,
      // 80px per hour for day view
      height: `${P * 80}px`,
      // Accurate height based on actual duration
      left: `${j}%`,
      width: `${N}%`
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
          children: /* @__PURE__ */ p.jsx(Wv, { className: "h-5 w-5" })
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
          children: /* @__PURE__ */ p.jsx(Hv, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden", children: /* @__PURE__ */ p.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ p.jsx("div", { className: "w-20 border-r border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700", children: i.map((h) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] p-3 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600 flex items-start", children: h === 0 ? "12 AM" : h === 12 ? "12 PM" : h > 12 ? `${h - 12} PM` : `${h} AM` }, h)) }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex-1 relative", children: [
        i.map((h) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] border-b border-gray-200 dark:border-gray-600" }, h)),
        c.map((h, w) => {
          const y = t[h.id], S = y != null && y.category && d[y.category] ? d[y.category] : f, m = u(h, c);
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `absolute ${S} border rounded-lg p-2 text-sm z-20 overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow event-card`,
              style: {
                ...m,
                margin: "2px"
              },
              onClick: (g) => {
                g.stopPropagation(), r == null || r(h);
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
                    /* @__PURE__ */ p.jsx(Ds, { className: "h-2.5 w-2.5" }),
                    /* @__PURE__ */ p.jsx("span", { className: "truncate", children: y.location })
                  ] }),
                  y.organization && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ p.jsx(GE, { className: "h-2.5 w-2.5" }),
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
function SR({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r }) {
  const [o, s] = se.useState(/* @__PURE__ */ new Date()), [i, a] = se.useState(/* @__PURE__ */ new Date()), l = () => {
    a((b) => new Date(b.getFullYear(), b.getMonth() - 1, 1));
  }, u = () => {
    a((b) => new Date(b.getFullYear(), b.getMonth() + 1, 1));
  }, c = (b) => b.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), d = () => o ? e.filter((b) => {
    const k = new Date(b.startDate);
    return k.getDate() === o.getDate() && k.getMonth() === o.getMonth() && k.getFullYear() === o.getFullYear();
  }) : [], f = (b) => e.some((k) => {
    const P = new Date(k.startDate);
    return P.getDate() === b.getDate() && P.getMonth() === b.getMonth() && P.getFullYear() === b.getFullYear();
  }), h = d(), w = i.getFullYear(), y = i.getMonth(), S = new Date(w, y, 1), m = new Date(S);
  m.setDate(m.getDate() - S.getDay());
  const g = [], v = new Date(m);
  for (let b = 0; b < 42; b++)
    g.push(new Date(v)), v.setDate(v.getDate() + 1);
  return /* @__PURE__ */ p.jsxs(ud, { className: "w-full py-4 mobile-calendar bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700", children: [
    /* @__PURE__ */ p.jsxs(Ry, { className: "px-4", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between mb-4 gap-2", children: [
        /* @__PURE__ */ p.jsxs(
          Pn,
          {
            variant: "outline",
            size: "sm",
            onClick: l,
            className: "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 flex-shrink-0",
            children: [
              /* @__PURE__ */ p.jsx($v, { className: "h-4 w-4" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Prev" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsx("h3", { className: "text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 text-center flex-1 min-w-0 truncate", children: i.toLocaleDateString("en-US", { month: "long", year: "numeric" }) }),
        /* @__PURE__ */ p.jsxs(
          Pn,
          {
            variant: "outline",
            size: "sm",
            onClick: u,
            className: "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 flex-shrink-0",
            children: [
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Next" }),
              /* @__PURE__ */ p.jsx(Uv, { className: "h-4 w-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-7 gap-1 mb-4", children: [
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((b) => /* @__PURE__ */ p.jsx("div", { className: "text-center text-sm font-medium py-2 text-gray-600 dark:text-gray-400", children: b }, b)),
        g.map((b, k) => {
          const P = b.getMonth() === y, C = o && b.getDate() === o.getDate() && b.getMonth() === o.getMonth() && b.getFullYear() === o.getFullYear(), E = b.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), D = f(b);
          return /* @__PURE__ */ p.jsxs(
            "button",
            {
              onClick: () => s(b),
              className: `
                  p-2 text-sm rounded transition-colors relative focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800
                  ${P ? "text-gray-900 dark:text-gray-100" : "text-gray-400 dark:text-gray-500"}
                  ${C ? "bg-blue-500 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-700" : "hover:bg-gray-100 dark:hover:bg-gray-600"}
                  ${E && !C ? "bg-gray-200 dark:bg-gray-600 font-semibold" : ""}
                `,
              children: [
                b.getDate(),
                D && /* @__PURE__ */ p.jsx(
                  "span",
                  {
                    className: "absolute top-1 right-1 w-2 h-2 bg-red-500 dark:bg-red-400 rounded-full",
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
    /* @__PURE__ */ p.jsxs(wb, { className: "flex flex-col items-start gap-3 border-t border-gray-200 dark:border-gray-600 px-4 !pt-4", children: [
      /* @__PURE__ */ p.jsx("div", { className: "flex w-full items-center justify-between px-1", children: /* @__PURE__ */ p.jsx("div", { className: "text-sm font-medium text-gray-900 dark:text-gray-100", children: o == null ? void 0 : o.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }) }) }),
      /* @__PURE__ */ p.jsx("div", { className: "flex w-full flex-col gap-2", children: h.length === 0 ? /* @__PURE__ */ p.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400 text-center py-4", children: "No events on this day" }) : h.map((b) => {
        const k = t[b.id], P = Ss(k == null ? void 0 : k.category, n), E = lr(P).replace("bg-", "after:bg-");
        return /* @__PURE__ */ p.jsxs(
          "button",
          {
            className: `bg-gray-50 dark:bg-gray-700 relative rounded-md p-2 pl-6 text-sm text-left w-full after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${E}`,
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
function bR({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onLoadMore: o, hasMore: s, loading: i }) {
  const a = (f) => f.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), l = /* @__PURE__ */ new Date();
  l.setHours(0, 0, 0, 0);
  const c = [...e.filter((f) => {
    const h = new Date(f.startDate);
    return h.setHours(0, 0, 0, 0), h >= l;
  })].sort((f, h) => f.startDate.getTime() - h.startDate.getTime()), d = c.reduce((f, h) => {
    const w = h.startDate.toDateString();
    return f[w] || (f[w] = []), f[w].push(h), f;
  }, {});
  return /* @__PURE__ */ p.jsxs("div", { className: "space-y-6", children: [
    c.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-12 text-gray-500 dark:text-gray-400", children: [
      /* @__PURE__ */ p.jsx(ms, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
      /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-medium mb-2", children: "No events found" }),
      /* @__PURE__ */ p.jsx("p", { children: "Try adjusting your filters to see more events." })
    ] }) : Object.entries(d).map(([f, h]) => {
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
            h.length,
            " event",
            h.length > 1 ? "s" : ""
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: h.map((g) => {
          const v = t[g.id], b = Ss(v == null ? void 0 : v.category, n), P = lr(b).replace("bg-", "after:bg-");
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `bg-muted dark:bg-gray-700 relative rounded-md p-3 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors ${P}`,
              onClick: () => r == null ? void 0 : r(g),
              children: [
                /* @__PURE__ */ p.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ p.jsxs("div", { className: "flex-grow min-w-0", children: [
                    /* @__PURE__ */ p.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 mb-2", children: g.title }),
                    /* @__PURE__ */ p.jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(Qr, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsxs("span", { children: [
                          a(g.startDate),
                          " - ",
                          a(g.endDate)
                        ] })
                      ] }),
                      (v == null ? void 0 : v.location) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(Ds, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: v.location })
                      ] }),
                      (v == null ? void 0 : v.organization) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(Ba, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: v.organization })
                      ] })
                    ] })
                  ] }),
                  v && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: v.cost })
                ] }),
                (v == null ? void 0 : v.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-2", children: /* @__PURE__ */ p.jsx(qr, { variant: "outline", size: "sm", children: "Registration Required" }) })
              ]
            },
            g.id
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
function kR({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onLoadMore: o, hasMore: s, loading: i }) {
  const a = (f) => f.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), l = /* @__PURE__ */ new Date();
  l.setHours(0, 0, 0, 0);
  const c = [...e.filter((f) => {
    const h = new Date(f.startDate);
    return h.setHours(0, 0, 0, 0), h >= l;
  })].sort((f, h) => f.startDate.getTime() - h.startDate.getTime()), d = c.reduce((f, h) => {
    const w = h.startDate.toDateString();
    return f[w] || (f[w] = []), f[w].push(h), f;
  }, {});
  return /* @__PURE__ */ p.jsxs("div", { className: "space-y-6", children: [
    c.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-12 text-gray-500 dark:text-gray-400", children: [
      /* @__PURE__ */ p.jsx(ms, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
      /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-medium mb-2", children: "No events found" }),
      /* @__PURE__ */ p.jsx("p", { children: "Try adjusting your filters to see more events." })
    ] }) : Object.entries(d).map(([f, h]) => {
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
          /* @__PURE__ */ p.jsx("span", { className: "text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full", children: h.length })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: h.map((g) => {
          const v = t[g.id], b = Ss(v == null ? void 0 : v.category, n), P = lr(b).replace("bg-", "after:bg-");
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `bg-muted dark:bg-gray-700 relative rounded-md p-3 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors ${P}`,
              onClick: () => r == null ? void 0 : r(g),
              children: [
                /* @__PURE__ */ p.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ p.jsxs("div", { className: "flex-grow min-w-0", children: [
                    /* @__PURE__ */ p.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 mb-2", children: g.title }),
                    /* @__PURE__ */ p.jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(Qr, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsxs("span", { children: [
                          a(g.startDate),
                          " - ",
                          a(g.endDate)
                        ] })
                      ] }),
                      (v == null ? void 0 : v.location) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(Ds, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: v.location })
                      ] }),
                      (v == null ? void 0 : v.organization) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(Ba, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: v.organization })
                      ] })
                    ] })
                  ] }),
                  v && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: v.cost })
                ] }),
                (v == null ? void 0 : v.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-2", children: /* @__PURE__ */ p.jsx(qr, { variant: "outline", size: "sm", children: "Registration Required" }) })
              ]
            },
            g.id
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
function CR() {
  const [e, t] = x.useState("month"), [n, r] = x.useState(/* @__PURE__ */ new Date()), [o, s] = x.useState(null), [i, a] = x.useState(!1), [l, u] = x.useState(30), [c, d] = x.useState(30), [f, h] = x.useState(15);
  se.useEffect(() => {
    const L = document.querySelector(".unbc-calendar-container");
    if (L) {
      const ae = parseInt(L.getAttribute("data-list-initial-items") || "30"), Q = parseInt(L.getAttribute("data-list-load-more-count") || "15");
      d(ae), h(Q), u(ae);
    }
  }, []), se.useEffect(() => {
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
  const [w, y] = x.useState("all"), [S, m] = x.useState("all"), [g, v] = x.useState("");
  se.useEffect(() => {
    w !== "clubs" && w !== "unbc" && w !== "organizations" && w !== "community" && m("all");
  }, [w]);
  const b = !1;
  CP();
  const k = c0(), P = TP(), C = DP(), {
    events: E,
    eventMetadata: D,
    loading: N,
    error: j,
    setFilters: A
  } = k, F = P.organizations, B = P.loading, { categories: G, loading: V } = C, O = se.useMemo(() => yR(G), [G]);
  se.useEffect(() => {
    A && A({
      per_page: 500
      // Load more events to cover more time periods
    });
  }, [A, b]);
  const T = se.useMemo(() => {
    let L = E;
    if (e === "list") {
      const ae = /* @__PURE__ */ new Date();
      ae.setHours(0, 0, 0, 0), L = L.filter((Q) => {
        const ee = new Date(Q.startDate);
        return ee.setHours(0, 0, 0, 0), ee >= ae;
      }), L = L.sort((Q, ee) => Q.startDate.getTime() - ee.startDate.getTime());
    }
    if (w !== "all" && (L = L.filter((ae) => {
      const Q = D[ae.id];
      return (Q == null ? void 0 : Q.category) === w;
    })), S !== "all" && (L = L.filter((ae) => {
      const Q = D[ae.id], ee = F.find((ke) => ke.id.toString() === S);
      return ee && (Q == null ? void 0 : Q.organization) === ee.title.rendered;
    })), g) {
      const ae = g.toLowerCase();
      L = L.filter((Q) => {
        var ke, z, te;
        const ee = D[Q.id];
        return Q.title.toLowerCase().includes(ae) || ((ke = ee == null ? void 0 : ee.description) == null ? void 0 : ke.toLowerCase().includes(ae)) || ((z = ee == null ? void 0 : ee.location) == null ? void 0 : z.toLowerCase().includes(ae)) || ((te = ee == null ? void 0 : ee.organization) == null ? void 0 : te.toLowerCase().includes(ae));
      });
    }
    return L;
  }, [E, D, w, S, g, F, e]), M = (L) => {
    r(L), t("day");
  }, _ = (L) => {
    s(L), a(!0);
  }, H = () => {
    u((L) => L + f);
  };
  return se.useEffect(() => {
    e === "list" && u(c);
  }, [e, w, S, g, c]), N || B || V ? /* @__PURE__ */ p.jsx("div", { className: "w-full flex items-center justify-center py-12", children: /* @__PURE__ */ p.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ p.jsx(Gv, { className: "h-8 w-8 animate-spin mx-auto mb-4" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-gray-600", children: "Loading calendar..." })
  ] }) }) : j ? /* @__PURE__ */ p.jsx("div", { className: "w-full py-12", children: /* @__PURE__ */ p.jsx(ud, { className: "max-w-md mx-auto", children: /* @__PURE__ */ p.jsxs(Ry, { className: "pt-6 text-center", children: [
    /* @__PURE__ */ p.jsxs("p", { className: "text-red-600 mb-4", children: [
      "Error loading events: ",
      j
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
    /* @__PURE__ */ p.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm unbc-calendar-view", children: /* @__PURE__ */ p.jsxs(SP, { value: e, onValueChange: t, className: "w-full", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "hidden md:block p-6 pb-0", children: [
        /* @__PURE__ */ p.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ p.jsxs(Gp, { className: "h-9 bg-gray-100 dark:bg-gray-700 p-1", children: [
          /* @__PURE__ */ p.jsxs(zn, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(Qr, { className: "h-3 w-3" }),
            "Day"
          ] }),
          /* @__PURE__ */ p.jsxs(zn, { value: "week", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(Ri, { className: "h-3 w-3" }),
            "Week"
          ] }),
          /* @__PURE__ */ p.jsxs(zn, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(ms, { className: "h-3 w-3" }),
            "Month"
          ] }),
          /* @__PURE__ */ p.jsxs(zn, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(Kp, { className: "h-3 w-3" }),
            "List"
          ] })
        ] }) }),
        /* @__PURE__ */ p.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3", children: [
          /* @__PURE__ */ p.jsxs(oi, { value: w, onValueChange: y, children: [
            /* @__PURE__ */ p.jsx(ii, { className: "w-40 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsx(si, { placeholder: "All Categories" }) }),
            /* @__PURE__ */ p.jsxs(ai, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 z-[9999]", children: [
              /* @__PURE__ */ p.jsx(an, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All" }),
              G.map((L) => /* @__PURE__ */ p.jsxs(
                an,
                {
                  value: L.slug,
                  className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600 flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full inline-block mr-2 ${lr(L.variant || "default")}` }),
                    L.name,
                    " (",
                    L.count,
                    ")"
                  ]
                },
                L.id
              ))
            ] })
          ] }),
          (w === "clubs" || w === "unbc" || w === "organizations" || w === "community") && /* @__PURE__ */ p.jsxs(oi, { value: S, onValueChange: m, children: [
            /* @__PURE__ */ p.jsx(ii, { className: "w-44 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 [&>span]:truncate [&>span]:block", children: /* @__PURE__ */ p.jsx(si, { placeholder: "All Organizations" }) }),
            /* @__PURE__ */ p.jsxs(ai, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 max-h-[200px] overflow-y-auto", children: [
              /* @__PURE__ */ p.jsx(an, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Organizations" }),
              F.map((L) => /* @__PURE__ */ p.jsx(
                an,
                {
                  value: L.id.toString(),
                  className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600",
                  children: L.title.rendered
                },
                L.id
              ))
            ] })
          ] }),
          /* @__PURE__ */ p.jsx(
            Qu,
            {
              placeholder: "Search events...",
              onChange: (L) => v(L.target.value),
              className: "w-40 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "md:hidden", children: [
        /* @__PURE__ */ p.jsx("div", { className: "p-6 pb-0 flex justify-center", children: /* @__PURE__ */ p.jsxs(Gp, { className: "h-9 bg-gray-100 dark:bg-gray-700 p-1", children: [
          /* @__PURE__ */ p.jsxs(zn, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(Qr, { className: "h-3 w-3" }),
            "Day"
          ] }),
          /* @__PURE__ */ p.jsxs(zn, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(ms, { className: "h-3 w-3" }),
            "Month"
          ] }),
          /* @__PURE__ */ p.jsxs(zn, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(Kp, { className: "h-3 w-3" }),
            "List"
          ] })
        ] }) }),
        /* @__PURE__ */ p.jsxs("div", { className: "p-6 pt-4 space-y-4", children: [
          /* @__PURE__ */ p.jsxs(oi, { value: w, onValueChange: y, children: [
            /* @__PURE__ */ p.jsx(ii, { className: "w-full h-10 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsx(si, { placeholder: "All Categories" }) }),
            /* @__PURE__ */ p.jsxs(ai, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 z-[9999]", children: [
              /* @__PURE__ */ p.jsx(an, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All" }),
              G.map((L) => /* @__PURE__ */ p.jsxs(
                an,
                {
                  value: L.slug,
                  className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600 flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full inline-block mr-2 ${lr(L.variant || "default")}` }),
                    L.name,
                    " (",
                    L.count,
                    ")"
                  ]
                },
                L.id
              ))
            ] })
          ] }),
          (w === "clubs" || w === "unbc" || w === "organizations" || w === "community") && /* @__PURE__ */ p.jsxs(oi, { value: S, onValueChange: m, children: [
            /* @__PURE__ */ p.jsx(ii, { className: "w-full h-10 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsx(si, { placeholder: "All Organizations", className: "truncate" }) }),
            /* @__PURE__ */ p.jsxs(ai, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 max-h-[200px] overflow-y-auto", children: [
              /* @__PURE__ */ p.jsx(an, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Organizations" }),
              F.map((L) => /* @__PURE__ */ p.jsx(
                an,
                {
                  value: L.id.toString(),
                  className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600",
                  children: L.title.rendered
                },
                L.id
              ))
            ] })
          ] }),
          /* @__PURE__ */ p.jsx(
            Qu,
            {
              placeholder: "Search events...",
              onChange: (L) => v(L.target.value),
              className: "w-full border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs(ui, { value: "month", className: "p-6 pt-4", children: [
        /* @__PURE__ */ p.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ p.jsx(
          vR,
          {
            events: T,
            eventMetadata: D,
            categoryMappings: O,
            onDateClick: M,
            onEventClick: _
          }
        ) }),
        /* @__PURE__ */ p.jsx("div", { className: "block md:hidden mobile-calendar", children: /* @__PURE__ */ p.jsx(
          SR,
          {
            events: T,
            eventMetadata: D,
            categoryMappings: O,
            onEventClick: _
          }
        ) })
      ] }),
      /* @__PURE__ */ p.jsx(ui, { value: "week", className: "p-6 pt-4", children: /* @__PURE__ */ p.jsx(
        xR,
        {
          events: T,
          eventMetadata: D,
          categoryMappings: O,
          onEventClick: _
        }
      ) }),
      /* @__PURE__ */ p.jsx(ui, { value: "day", className: "p-6 pt-4", children: /* @__PURE__ */ p.jsx(
        wR,
        {
          events: T,
          eventMetadata: D,
          categoryMappings: O,
          initialDate: n,
          onEventClick: _
        }
      ) }),
      /* @__PURE__ */ p.jsxs(ui, { value: "list", className: "p-6 pt-4", children: [
        /* @__PURE__ */ p.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ p.jsx(
          bR,
          {
            events: T.slice(0, l),
            eventMetadata: D,
            categoryMappings: O,
            onEventClick: _,
            onLoadMore: H,
            hasMore: T.length > l,
            loading: N
          }
        ) }),
        /* @__PURE__ */ p.jsx("div", { className: "block md:hidden", children: /* @__PURE__ */ p.jsx(
          kR,
          {
            events: T.slice(0, l),
            eventMetadata: D,
            categoryMappings: O,
            onEventClick: _,
            onLoadMore: H,
            hasMore: T.length > l,
            loading: N
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsx(
      I0,
      {
        event: o,
        eventMetadata: D,
        open: i,
        onOpenChange: a
      }
    )
  ] });
}
function fw({
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
  }), { filteredEvents: l, eventsByDate: u } = se.useMemo(() => {
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
    /* @__PURE__ */ p.jsx(ms, { className: "mx-auto h-8 w-8 mb-3 opacity-50" }),
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
                      /* @__PURE__ */ p.jsx(Qr, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsxs("span", { children: [
                        a(S.startDate),
                        " - ",
                        a(S.endDate)
                      ] })
                    ] }) }),
                    m && /* @__PURE__ */ p.jsxs("div", { className: "space-y-1 text-sm text-gray-600 dark:text-gray-400", children: [
                      m.location && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(Ds, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: m.location })
                      ] }),
                      !r && m.organization && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(Ba, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: m.organization })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col items-end gap-2 flex-shrink-0 ml-4", children: [
                    (m == null ? void 0 : m.cost) && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400", children: m.cost }),
                    (m == null ? void 0 : m.category) && /* @__PURE__ */ p.jsx(qr, { variant: "secondary", size: "sm", className: "text-xs", children: m.category.charAt(0).toUpperCase() + m.category.slice(1) })
                  ] })
                ] }),
                (m == null ? void 0 : m.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-3 pt-2 border-t border-gray-100 dark:border-gray-700", children: /* @__PURE__ */ p.jsx(qr, { variant: "outline", size: "sm", children: "📝 Registration Required" }) })
              ]
            },
            S.id
          );
        }) })
      ] }, c);
    })
  ] });
}
function ER({
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
  } = c0({
    per_page: 1e3
    // Get all events to filter client-side
  }), f = (h) => {
    s(h), a(!0);
  };
  return c ? /* @__PURE__ */ p.jsx("div", { className: "w-full flex items-center justify-center py-8", children: /* @__PURE__ */ p.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ p.jsx(Gv, { className: "h-6 w-6 animate-spin mx-auto mb-2" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-gray-600 text-sm", children: "Loading events..." })
  ] }) }) : d ? /* @__PURE__ */ p.jsx("div", { className: "w-full py-8", children: /* @__PURE__ */ p.jsx("div", { className: "max-w-md mx-auto bg-red-50 border border-red-200 rounded-lg p-4", children: /* @__PURE__ */ p.jsxs("p", { className: "text-red-600 text-sm", children: [
    "Error loading events: ",
    d
  ] }) }) }) : /* @__PURE__ */ p.jsxs("div", { className: "unbc-organization-events", children: [
    /* @__PURE__ */ p.jsx(
      fw,
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
      I0,
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
  const n = ja(t);
  t.dataset.view, t.dataset.categoryFilter, t.dataset.organizationFilter, n.render(
    /* @__PURE__ */ p.jsx(se.StrictMode, { children: /* @__PURE__ */ p.jsx(CR, {}) })
  );
};
window.renderUNBCEventsList = function(e) {
  const t = document.getElementById(e);
  if (!t) {
    console.error("Events list container not found:", e);
    return;
  }
  const n = ja(t), r = t.dataset.organizationId || "", o = t.dataset.organizationName || "", s = parseInt(t.dataset.limit) || 5, i = t.dataset.showPast === "true";
  n.render(
    /* @__PURE__ */ p.jsx(se.StrictMode, { children: /* @__PURE__ */ p.jsx(
      PR,
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
  const n = ja(t), r = t.dataset.organizationId || "", o = t.dataset.organizationName || "", s = parseInt(t.dataset.limit) || 5, i = t.dataset.showPast === "true";
  n.render(
    /* @__PURE__ */ p.jsx(se.StrictMode, { children: /* @__PURE__ */ p.jsx(
      ER,
      {
        organizationId: r,
        organizationName: o,
        limit: s,
        showPastEvents: i
      }
    ) })
  );
};
function PR({ organizationId: e, organizationName: t, limit: n, showPastEvents: r }) {
  return /* @__PURE__ */ p.jsx(
    fw,
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
