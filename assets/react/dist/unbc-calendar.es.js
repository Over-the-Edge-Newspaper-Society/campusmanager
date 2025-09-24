function bw(e, t) {
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
function gm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ym = { exports: {} }, Sa = {}, vm = { exports: {} }, K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ps = Symbol.for("react.element"), Sw = Symbol.for("react.portal"), kw = Symbol.for("react.fragment"), Cw = Symbol.for("react.strict_mode"), Ew = Symbol.for("react.profiler"), Tw = Symbol.for("react.provider"), Pw = Symbol.for("react.context"), Dw = Symbol.for("react.forward_ref"), Nw = Symbol.for("react.suspense"), Aw = Symbol.for("react.memo"), Mw = Symbol.for("react.lazy"), mf = Symbol.iterator;
function Rw(e) {
  return e === null || typeof e != "object" ? null : (e = mf && e[mf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var xm = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, wm = Object.assign, bm = {};
function co(e, t, n) {
  this.props = e, this.context = t, this.refs = bm, this.updater = n || xm;
}
co.prototype.isReactComponent = {};
co.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
co.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Sm() {
}
Sm.prototype = co.prototype;
function vu(e, t, n) {
  this.props = e, this.context = t, this.refs = bm, this.updater = n || xm;
}
var xu = vu.prototype = new Sm();
xu.constructor = vu;
wm(xu, co.prototype);
xu.isPureReactComponent = !0;
var gf = Array.isArray, km = Object.prototype.hasOwnProperty, wu = { current: null }, Cm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Em(e, t, n) {
  var r, o = {}, s = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (s = "" + t.key), t) km.call(t, r) && !Cm.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    o.children = l;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: Ps, type: e, key: s, ref: i, props: o, _owner: wu.current };
}
function jw(e, t) {
  return { $$typeof: Ps, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function bu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ps;
}
function Lw(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var yf = /\/+/g;
function tl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Lw("" + e.key) : t.toString(36);
}
function xi(e, t, n, r, o) {
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
        case Sw:
          i = !0;
      }
  }
  if (i) return i = e, o = o(i), e = r === "" ? "." + tl(i, 0) : r, gf(o) ? (n = "", e != null && (n = e.replace(yf, "$&/") + "/"), xi(o, t, n, "", function(c) {
    return c;
  })) : o != null && (bu(o) && (o = jw(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(yf, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", gf(e)) for (var a = 0; a < e.length; a++) {
    s = e[a];
    var l = r + tl(s, a);
    i += xi(s, t, n, l, o);
  }
  else if (l = Rw(e), typeof l == "function") for (e = l.call(e), a = 0; !(s = e.next()).done; ) s = s.value, l = r + tl(s, a++), i += xi(s, t, n, l, o);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Bs(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return xi(e, r, "", "", function(s) {
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
var Ge = { current: null }, wi = { transition: null }, Ow = { ReactCurrentDispatcher: Ge, ReactCurrentBatchConfig: wi, ReactCurrentOwner: wu };
function Tm() {
  throw Error("act(...) is not supported in production builds of React.");
}
K.Children = { map: Bs, forEach: function(e, t, n) {
  Bs(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Bs(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Bs(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!bu(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
K.Component = co;
K.Fragment = kw;
K.Profiler = Ew;
K.PureComponent = vu;
K.StrictMode = Cw;
K.Suspense = Nw;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ow;
K.act = Tm;
K.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = wm({}, e.props), o = e.key, s = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, i = wu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) km.call(t, l) && !Cm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Ps, type: e.type, key: o, ref: s, props: r, _owner: i };
};
K.createContext = function(e) {
  return e = { $$typeof: Pw, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Tw, _context: e }, e.Consumer = e;
};
K.createElement = Em;
K.createFactory = function(e) {
  var t = Em.bind(null, e);
  return t.type = e, t;
};
K.createRef = function() {
  return { current: null };
};
K.forwardRef = function(e) {
  return { $$typeof: Dw, render: e };
};
K.isValidElement = bu;
K.lazy = function(e) {
  return { $$typeof: Mw, _payload: { _status: -1, _result: e }, _init: _w };
};
K.memo = function(e, t) {
  return { $$typeof: Aw, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function(e) {
  var t = wi.transition;
  wi.transition = {};
  try {
    e();
  } finally {
    wi.transition = t;
  }
};
K.unstable_act = Tm;
K.useCallback = function(e, t) {
  return Ge.current.useCallback(e, t);
};
K.useContext = function(e) {
  return Ge.current.useContext(e);
};
K.useDebugValue = function() {
};
K.useDeferredValue = function(e) {
  return Ge.current.useDeferredValue(e);
};
K.useEffect = function(e, t) {
  return Ge.current.useEffect(e, t);
};
K.useId = function() {
  return Ge.current.useId();
};
K.useImperativeHandle = function(e, t, n) {
  return Ge.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function(e, t) {
  return Ge.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function(e, t) {
  return Ge.current.useLayoutEffect(e, t);
};
K.useMemo = function(e, t) {
  return Ge.current.useMemo(e, t);
};
K.useReducer = function(e, t, n) {
  return Ge.current.useReducer(e, t, n);
};
K.useRef = function(e) {
  return Ge.current.useRef(e);
};
K.useState = function(e) {
  return Ge.current.useState(e);
};
K.useSyncExternalStore = function(e, t, n) {
  return Ge.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function() {
  return Ge.current.useTransition();
};
K.version = "18.3.1";
vm.exports = K;
var x = vm.exports;
const G = /* @__PURE__ */ gm(x), Pm = /* @__PURE__ */ bw({
  __proto__: null,
  default: G
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
var Iw = x, Fw = Symbol.for("react.element"), Vw = Symbol.for("react.fragment"), zw = Object.prototype.hasOwnProperty, Bw = Iw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $w = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dm(e, t, n) {
  var r, o = {}, s = null, i = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) zw.call(t, r) && !$w.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Fw, type: e, key: s, ref: i, props: o, _owner: Bw.current };
}
Sa.Fragment = Vw;
Sa.jsx = Dm;
Sa.jsxs = Dm;
ym.exports = Sa;
var p = ym.exports, Nm = { exports: {} }, ct = {}, Am = { exports: {} }, Mm = {};
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
  function t(N, j) {
    var I = N.length;
    N.push(j);
    e: for (; 0 < I; ) {
      var W = I - 1 >>> 1, re = N[W];
      if (0 < o(re, j)) N[W] = j, N[I] = re, I = W;
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var j = N[0], I = N.pop();
    if (I !== j) {
      N[0] = I;
      e: for (var W = 0, re = N.length, We = re >>> 1; W < We; ) {
        var De = 2 * (W + 1) - 1, Ce = N[De], Re = De + 1, $ = N[Re];
        if (0 > o(Ce, I)) Re < re && 0 > o($, Ce) ? (N[W] = $, N[Re] = I, W = Re) : (N[W] = Ce, N[De] = I, W = De);
        else if (Re < re && 0 > o($, I)) N[W] = $, N[Re] = I, W = Re;
        else break e;
      }
    }
    return j;
  }
  function o(N, j) {
    var I = N.sortIndex - j.sortIndex;
    return I !== 0 ? I : N.id - j.id;
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
  var l = [], c = [], u = 1, f = null, d = 3, g = !1, w = !1, y = !1, b = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(N) {
    for (var j = n(c); j !== null; ) {
      if (j.callback === null) r(c);
      else if (j.startTime <= N) r(c), j.sortIndex = j.expirationTime, t(l, j);
      else break;
      j = n(c);
    }
  }
  function S(N) {
    if (y = !1, v(N), !w) if (n(l) !== null) w = !0, V(k);
    else {
      var j = n(c);
      j !== null && z(S, j.startTime - N);
    }
  }
  function k(N, j) {
    w = !1, y && (y = !1, m(T), T = -1), g = !0;
    var I = d;
    try {
      for (v(j), f = n(l); f !== null && (!(f.expirationTime > j) || N && !P()); ) {
        var W = f.callback;
        if (typeof W == "function") {
          f.callback = null, d = f.priorityLevel;
          var re = W(f.expirationTime <= j);
          j = e.unstable_now(), typeof re == "function" ? f.callback = re : f === n(l) && r(l), v(j);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var We = !0;
      else {
        var De = n(c);
        De !== null && z(S, De.startTime - j), We = !1;
      }
      return We;
    } finally {
      f = null, d = I, g = !1;
    }
  }
  var E = !1, C = null, T = -1, M = 5, D = -1;
  function P() {
    return !(e.unstable_now() - D < M);
  }
  function A() {
    if (C !== null) {
      var N = e.unstable_now();
      D = N;
      var j = !0;
      try {
        j = C(!0, N);
      } finally {
        j ? L() : (E = !1, C = null);
      }
    } else E = !1;
  }
  var L;
  if (typeof h == "function") L = function() {
    h(A);
  };
  else if (typeof MessageChannel < "u") {
    var O = new MessageChannel(), B = O.port2;
    O.port1.onmessage = A, L = function() {
      B.postMessage(null);
    };
  } else L = function() {
    b(A, 0);
  };
  function V(N) {
    C = N, E || (E = !0, L());
  }
  function z(N, j) {
    T = b(function() {
      N(e.unstable_now());
    }, j);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, V(k));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(N) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var j = 3;
        break;
      default:
        j = d;
    }
    var I = d;
    d = j;
    try {
      return N();
    } finally {
      d = I;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(N, j) {
    switch (N) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        N = 3;
    }
    var I = d;
    d = N;
    try {
      return j();
    } finally {
      d = I;
    }
  }, e.unstable_scheduleCallback = function(N, j, I) {
    var W = e.unstable_now();
    switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? W + I : W) : I = W, N) {
      case 1:
        var re = -1;
        break;
      case 2:
        re = 250;
        break;
      case 5:
        re = 1073741823;
        break;
      case 4:
        re = 1e4;
        break;
      default:
        re = 5e3;
    }
    return re = I + re, N = { id: u++, callback: j, priorityLevel: N, startTime: I, expirationTime: re, sortIndex: -1 }, I > W ? (N.sortIndex = I, t(c, N), n(l) === null && N === n(c) && (y ? (m(T), T = -1) : y = !0, z(S, I - W))) : (N.sortIndex = re, t(l, N), w || g || (w = !0, V(k))), N;
  }, e.unstable_shouldYield = P, e.unstable_wrapCallback = function(N) {
    var j = d;
    return function() {
      var I = d;
      d = j;
      try {
        return N.apply(this, arguments);
      } finally {
        d = I;
      }
    };
  };
})(Mm);
Am.exports = Mm;
var Uw = Am.exports;
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
var Rm = /* @__PURE__ */ new Set(), es = {};
function gr(e, t) {
  Qr(e, t), Qr(e + "Capture", t);
}
function Qr(e, t) {
  for (es[e] = t, e = 0; e < t.length; e++) Rm.add(t[e]);
}
var en = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ql = Object.prototype.hasOwnProperty, Hw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, vf = {}, xf = {};
function Kw(e) {
  return ql.call(xf, e) ? !0 : ql.call(vf, e) ? !1 : Hw.test(e) ? xf[e] = !0 : (vf[e] = !0, !1);
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
var Oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Oe[e] = new Ye(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Oe[t] = new Ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Oe[e] = new Ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Oe[e] = new Ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Oe[e] = new Ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Oe[e] = new Ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Oe[e] = new Ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Oe[e] = new Ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Oe[e] = new Ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Su = /[\-:]([a-z])/g;
function ku(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Su,
    ku
  );
  Oe[t] = new Ye(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Su, ku);
  Oe[t] = new Ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Su, ku);
  Oe[t] = new Ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Oe[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Oe.xlinkHref = new Ye("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Oe[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Cu(e, t, n, r) {
  var o = Oe.hasOwnProperty(t) ? Oe[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Yw(t, n, o, r) && (n = null), r || o === null ? Kw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ln = Ww.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $s = Symbol.for("react.element"), Cr = Symbol.for("react.portal"), Er = Symbol.for("react.fragment"), Eu = Symbol.for("react.strict_mode"), Zl = Symbol.for("react.profiler"), jm = Symbol.for("react.provider"), Lm = Symbol.for("react.context"), Tu = Symbol.for("react.forward_ref"), Jl = Symbol.for("react.suspense"), ec = Symbol.for("react.suspense_list"), Pu = Symbol.for("react.memo"), vn = Symbol.for("react.lazy"), _m = Symbol.for("react.offscreen"), wf = Symbol.iterator;
function So(e) {
  return e === null || typeof e != "object" ? null : (e = wf && e[wf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var he = Object.assign, nl;
function jo(e) {
  if (nl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    nl = t && t[1] || "";
  }
  return `
` + nl + e;
}
var rl = !1;
function ol(e, t) {
  if (!e || rl) return "";
  rl = !0;
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
    rl = !1, Error.prepareStackTrace = n;
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
      return e = ol(e.type, !1), e;
    case 11:
      return e = ol(e.type.render, !1), e;
    case 1:
      return e = ol(e.type, !0), e;
    default:
      return "";
  }
}
function tc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Er:
      return "Fragment";
    case Cr:
      return "Portal";
    case Zl:
      return "Profiler";
    case Eu:
      return "StrictMode";
    case Jl:
      return "Suspense";
    case ec:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Lm:
      return (e.displayName || "Context") + ".Consumer";
    case jm:
      return (e._context.displayName || "Context") + ".Provider";
    case Tu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Pu:
      return t = e.displayName || null, t !== null ? t : tc(e.type) || "Memo";
    case vn:
      t = e._payload, e = e._init;
      try {
        return tc(e(t));
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
      return tc(t);
    case 8:
      return t === Eu ? "StrictMode" : "Mode";
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
function Om(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function qw(e) {
  var t = Om(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Us(e) {
  e._valueTracker || (e._valueTracker = qw(e));
}
function Im(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Om(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Vi(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function nc(e, t) {
  var n = t.checked;
  return he({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function bf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = jn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Fm(e, t) {
  t = t.checked, t != null && Cu(e, "checked", t, !1);
}
function rc(e, t) {
  Fm(e, t);
  var n = jn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? oc(e, t.type, n) : t.hasOwnProperty("defaultValue") && oc(e, t.type, jn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Sf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function oc(e, t, n) {
  (t !== "number" || Vi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Lo = Array.isArray;
function Br(e, t, n, r) {
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
function sc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return he({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
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
  e._wrapperState = { initialValue: jn(n) };
}
function Vm(e, t) {
  var n = jn(t.value), r = jn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Cf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function zm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ic(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? zm(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ws, Bm = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Ws = Ws || document.createElement("div"), Ws.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ws.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
function $m(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Bo.hasOwnProperty(e) && Bo[e] ? ("" + t).trim() : t + "px";
}
function Um(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = $m(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Jw = he({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ac(e, t) {
  if (t) {
    if (Jw[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function lc(e, t) {
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
var cc = null;
function Du(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var uc = null, $r = null, Ur = null;
function Ef(e) {
  if (e = As(e)) {
    if (typeof uc != "function") throw Error(R(280));
    var t = e.stateNode;
    t && (t = Pa(t), uc(e.stateNode, e.type, t));
  }
}
function Wm(e) {
  $r ? Ur ? Ur.push(e) : Ur = [e] : $r = e;
}
function Hm() {
  if ($r) {
    var e = $r, t = Ur;
    if (Ur = $r = null, Ef(e), t) for (e = 0; e < t.length; e++) Ef(t[e]);
  }
}
function Km(e, t) {
  return e(t);
}
function Gm() {
}
var sl = !1;
function Ym(e, t, n) {
  if (sl) return e(t, n);
  sl = !0;
  try {
    return Km(e, t, n);
  } finally {
    sl = !1, ($r !== null || Ur !== null) && (Gm(), Hm());
  }
}
function ns(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Pa(n);
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
var dc = !1;
if (en) try {
  var ko = {};
  Object.defineProperty(ko, "passive", { get: function() {
    dc = !0;
  } }), window.addEventListener("test", ko, ko), window.removeEventListener("test", ko, ko);
} catch {
  dc = !1;
}
function e1(e, t, n, r, o, s, i, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var $o = !1, zi = null, Bi = !1, fc = null, t1 = { onError: function(e) {
  $o = !0, zi = e;
} };
function n1(e, t, n, r, o, s, i, a, l) {
  $o = !1, zi = null, e1.apply(t1, arguments);
}
function r1(e, t, n, r, o, s, i, a, l) {
  if (n1.apply(this, arguments), $o) {
    if ($o) {
      var c = zi;
      $o = !1, zi = null;
    } else throw Error(R(198));
    Bi || (Bi = !0, fc = c);
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
function Xm(e) {
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
function Qm(e) {
  return e = o1(e), e !== null ? qm(e) : null;
}
function qm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = qm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Zm = at.unstable_scheduleCallback, Pf = at.unstable_cancelCallback, s1 = at.unstable_shouldYield, i1 = at.unstable_requestPaint, be = at.unstable_now, a1 = at.unstable_getCurrentPriorityLevel, Nu = at.unstable_ImmediatePriority, Jm = at.unstable_UserBlockingPriority, $i = at.unstable_NormalPriority, l1 = at.unstable_LowPriority, eg = at.unstable_IdlePriority, ka = null, It = null;
function c1(e) {
  if (It && typeof It.onCommitFiberRoot == "function") try {
    It.onCommitFiberRoot(ka, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Et = Math.clz32 ? Math.clz32 : f1, u1 = Math.log, d1 = Math.LN2;
function f1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (u1(e) / d1 | 0) | 0;
}
var Hs = 64, Ks = 4194304;
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
function Ui(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, s = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var a = i & ~o;
    a !== 0 ? r = _o(a) : (s &= i, s !== 0 && (r = _o(s)));
  } else i = n & ~o, i !== 0 ? r = _o(i) : s !== 0 && (r = _o(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, s = t & -t, o >= s || o === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Et(t), o = 1 << n, r |= e[n], t &= ~o;
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
    var i = 31 - Et(s), a = 1 << i, l = o[i];
    l === -1 ? (!(a & n) || a & r) && (o[i] = p1(a, t)) : l <= t && (e.expiredLanes |= a), s &= ~a;
  }
}
function pc(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function tg() {
  var e = Hs;
  return Hs <<= 1, !(Hs & 4194240) && (Hs = 64), e;
}
function il(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ds(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Et(t), e[t] = n;
}
function m1(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Et(n), s = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~s;
  }
}
function Au(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Et(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var te = 0;
function ng(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var rg, Mu, og, sg, ig, hc = !1, Gs = [], Cn = null, En = null, Tn = null, rs = /* @__PURE__ */ new Map(), os = /* @__PURE__ */ new Map(), wn = [], g1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Df(e, t) {
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
      rs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      os.delete(t.pointerId);
  }
}
function Co(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [o] }, t !== null && (t = As(t), t !== null && Mu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function y1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Cn = Co(Cn, e, t, n, r, o), !0;
    case "dragenter":
      return En = Co(En, e, t, n, r, o), !0;
    case "mouseover":
      return Tn = Co(Tn, e, t, n, r, o), !0;
    case "pointerover":
      var s = o.pointerId;
      return rs.set(s, Co(rs.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return s = o.pointerId, os.set(s, Co(os.get(s) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function ag(e) {
  var t = er(e.target);
  if (t !== null) {
    var n = yr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Xm(n), t !== null) {
          e.blockedOn = t, ig(e.priority, function() {
            og(n);
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
function bi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = mc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      cc = r, n.target.dispatchEvent(r), cc = null;
    } else return t = As(n), t !== null && Mu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Nf(e, t, n) {
  bi(e) && n.delete(t);
}
function v1() {
  hc = !1, Cn !== null && bi(Cn) && (Cn = null), En !== null && bi(En) && (En = null), Tn !== null && bi(Tn) && (Tn = null), rs.forEach(Nf), os.forEach(Nf);
}
function Eo(e, t) {
  e.blockedOn === t && (e.blockedOn = null, hc || (hc = !0, at.unstable_scheduleCallback(at.unstable_NormalPriority, v1)));
}
function ss(e) {
  function t(o) {
    return Eo(o, e);
  }
  if (0 < Gs.length) {
    Eo(Gs[0], e);
    for (var n = 1; n < Gs.length; n++) {
      var r = Gs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Cn !== null && Eo(Cn, e), En !== null && Eo(En, e), Tn !== null && Eo(Tn, e), rs.forEach(t), os.forEach(t), n = 0; n < wn.length; n++) r = wn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < wn.length && (n = wn[0], n.blockedOn === null); ) ag(n), n.blockedOn === null && wn.shift();
}
var Wr = ln.ReactCurrentBatchConfig, Wi = !0;
function x1(e, t, n, r) {
  var o = te, s = Wr.transition;
  Wr.transition = null;
  try {
    te = 1, Ru(e, t, n, r);
  } finally {
    te = o, Wr.transition = s;
  }
}
function w1(e, t, n, r) {
  var o = te, s = Wr.transition;
  Wr.transition = null;
  try {
    te = 4, Ru(e, t, n, r);
  } finally {
    te = o, Wr.transition = s;
  }
}
function Ru(e, t, n, r) {
  if (Wi) {
    var o = mc(e, t, n, r);
    if (o === null) gl(e, t, r, Hi, n), Df(e, r);
    else if (y1(o, e, t, n, r)) r.stopPropagation();
    else if (Df(e, r), t & 4 && -1 < g1.indexOf(e)) {
      for (; o !== null; ) {
        var s = As(o);
        if (s !== null && rg(s), s = mc(e, t, n, r), s === null && gl(e, t, r, Hi, n), s === o) break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else gl(e, t, r, null, n);
  }
}
var Hi = null;
function mc(e, t, n, r) {
  if (Hi = null, e = Du(r), e = er(e), e !== null) if (t = yr(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Xm(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Hi = e, null;
}
function lg(e) {
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
        case Nu:
          return 1;
        case Jm:
          return 4;
        case $i:
        case l1:
          return 16;
        case eg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Sn = null, ju = null, Si = null;
function cg() {
  if (Si) return Si;
  var e, t = ju, n = t.length, r, o = "value" in Sn ? Sn.value : Sn.textContent, s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++) ;
  return Si = o.slice(e, 1 < r ? 1 - r : void 0);
}
function ki(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ys() {
  return !0;
}
function Af() {
  return !1;
}
function ut(e) {
  function t(n, r, o, s, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = s, this.target = i, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(s) : s[a]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Ys : Af, this.isPropagationStopped = Af, this;
  }
  return he(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ys);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ys);
  }, persist: function() {
  }, isPersistent: Ys }), t;
}
var uo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Lu = ut(uo), Ns = he({}, uo, { view: 0, detail: 0 }), b1 = ut(Ns), al, ll, To, Ca = he({}, Ns, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: _u, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== To && (To && e.type === "mousemove" ? (al = e.screenX - To.screenX, ll = e.screenY - To.screenY) : ll = al = 0, To = e), al);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ll;
} }), Mf = ut(Ca), S1 = he({}, Ca, { dataTransfer: 0 }), k1 = ut(S1), C1 = he({}, Ns, { relatedTarget: 0 }), cl = ut(C1), E1 = he({}, uo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), T1 = ut(E1), P1 = he({}, uo, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), D1 = ut(P1), N1 = he({}, uo, { data: 0 }), Rf = ut(N1), A1 = {
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
}, M1 = {
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
}, R1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function j1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = R1[e]) ? !!t[e] : !1;
}
function _u() {
  return j1;
}
var L1 = he({}, Ns, { key: function(e) {
  if (e.key) {
    var t = A1[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ki(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? M1[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: _u, charCode: function(e) {
  return e.type === "keypress" ? ki(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ki(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), _1 = ut(L1), O1 = he({}, Ca, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), jf = ut(O1), I1 = he({}, Ns, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: _u }), F1 = ut(I1), V1 = he({}, uo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), z1 = ut(V1), B1 = he({}, Ca, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), $1 = ut(B1), U1 = [9, 13, 27, 32], Ou = en && "CompositionEvent" in window, Uo = null;
en && "documentMode" in document && (Uo = document.documentMode);
var W1 = en && "TextEvent" in window && !Uo, ug = en && (!Ou || Uo && 8 < Uo && 11 >= Uo), Lf = " ", _f = !1;
function dg(e, t) {
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
function fg(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Tr = !1;
function H1(e, t) {
  switch (e) {
    case "compositionend":
      return fg(t);
    case "keypress":
      return t.which !== 32 ? null : (_f = !0, Lf);
    case "textInput":
      return e = t.data, e === Lf && _f ? null : e;
    default:
      return null;
  }
}
function K1(e, t) {
  if (Tr) return e === "compositionend" || !Ou && dg(e, t) ? (e = cg(), Si = ju = Sn = null, Tr = !1, e) : null;
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
function Of(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!G1[e.type] : t === "textarea";
}
function pg(e, t, n, r) {
  Wm(r), t = Ki(t, "onChange"), 0 < t.length && (n = new Lu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Wo = null, is = null;
function Y1(e) {
  Cg(e, 0);
}
function Ea(e) {
  var t = Nr(e);
  if (Im(t)) return e;
}
function X1(e, t) {
  if (e === "change") return t;
}
var hg = !1;
if (en) {
  var ul;
  if (en) {
    var dl = "oninput" in document;
    if (!dl) {
      var If = document.createElement("div");
      If.setAttribute("oninput", "return;"), dl = typeof If.oninput == "function";
    }
    ul = dl;
  } else ul = !1;
  hg = ul && (!document.documentMode || 9 < document.documentMode);
}
function Ff() {
  Wo && (Wo.detachEvent("onpropertychange", mg), is = Wo = null);
}
function mg(e) {
  if (e.propertyName === "value" && Ea(is)) {
    var t = [];
    pg(t, is, e, Du(e)), Ym(Y1, t);
  }
}
function Q1(e, t, n) {
  e === "focusin" ? (Ff(), Wo = t, is = n, Wo.attachEvent("onpropertychange", mg)) : e === "focusout" && Ff();
}
function q1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ea(is);
}
function Z1(e, t) {
  if (e === "click") return Ea(t);
}
function J1(e, t) {
  if (e === "input" || e === "change") return Ea(t);
}
function eb(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Pt = typeof Object.is == "function" ? Object.is : eb;
function as(e, t) {
  if (Pt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ql.call(t, o) || !Pt(e[o], t[o])) return !1;
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
function gg(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? gg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function yg() {
  for (var e = window, t = Vi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Vi(e.document);
  }
  return t;
}
function Iu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function tb(e) {
  var t = yg(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && gg(n.ownerDocument.documentElement, n)) {
    if (r !== null && Iu(n)) {
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
var nb = en && "documentMode" in document && 11 >= document.documentMode, Pr = null, gc = null, Ho = null, yc = !1;
function Bf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  yc || Pr == null || Pr !== Vi(r) || (r = Pr, "selectionStart" in r && Iu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ho && as(Ho, r) || (Ho = r, r = Ki(gc, "onSelect"), 0 < r.length && (t = new Lu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Pr)));
}
function Xs(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Dr = { animationend: Xs("Animation", "AnimationEnd"), animationiteration: Xs("Animation", "AnimationIteration"), animationstart: Xs("Animation", "AnimationStart"), transitionend: Xs("Transition", "TransitionEnd") }, fl = {}, vg = {};
en && (vg = document.createElement("div").style, "AnimationEvent" in window || (delete Dr.animationend.animation, delete Dr.animationiteration.animation, delete Dr.animationstart.animation), "TransitionEvent" in window || delete Dr.transitionend.transition);
function Ta(e) {
  if (fl[e]) return fl[e];
  if (!Dr[e]) return e;
  var t = Dr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in vg) return fl[e] = t[n];
  return e;
}
var xg = Ta("animationend"), wg = Ta("animationiteration"), bg = Ta("animationstart"), Sg = Ta("transitionend"), kg = /* @__PURE__ */ new Map(), $f = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Bn(e, t) {
  kg.set(e, t), gr(t, [e]);
}
for (var pl = 0; pl < $f.length; pl++) {
  var hl = $f[pl], rb = hl.toLowerCase(), ob = hl[0].toUpperCase() + hl.slice(1);
  Bn(rb, "on" + ob);
}
Bn(xg, "onAnimationEnd");
Bn(wg, "onAnimationIteration");
Bn(bg, "onAnimationStart");
Bn("dblclick", "onDoubleClick");
Bn("focusin", "onFocus");
Bn("focusout", "onBlur");
Bn(Sg, "onTransitionEnd");
Qr("onMouseEnter", ["mouseout", "mouseover"]);
Qr("onMouseLeave", ["mouseout", "mouseover"]);
Qr("onPointerEnter", ["pointerout", "pointerover"]);
Qr("onPointerLeave", ["pointerout", "pointerover"]);
gr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
gr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
gr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
gr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
gr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Oo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), sb = new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));
function Uf(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, r1(r, t, void 0, e), e.currentTarget = null;
}
function Cg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var a = r[i], l = a.instance, c = a.currentTarget;
        if (a = a.listener, l !== s && o.isPropagationStopped()) break e;
        Uf(o, a, c), s = l;
      }
      else for (i = 0; i < r.length; i++) {
        if (a = r[i], l = a.instance, c = a.currentTarget, a = a.listener, l !== s && o.isPropagationStopped()) break e;
        Uf(o, a, c), s = l;
      }
    }
  }
  if (Bi) throw e = fc, Bi = !1, fc = null, e;
}
function ae(e, t) {
  var n = t[Sc];
  n === void 0 && (n = t[Sc] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Eg(t, e, 2, !1), n.add(r));
}
function ml(e, t, n) {
  var r = 0;
  t && (r |= 4), Eg(n, e, r, t);
}
var Qs = "_reactListening" + Math.random().toString(36).slice(2);
function ls(e) {
  if (!e[Qs]) {
    e[Qs] = !0, Rm.forEach(function(n) {
      n !== "selectionchange" && (sb.has(n) || ml(n, !1, e), ml(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Qs] || (t[Qs] = !0, ml("selectionchange", !1, t));
  }
}
function Eg(e, t, n, r) {
  switch (lg(t)) {
    case 1:
      var o = x1;
      break;
    case 4:
      o = w1;
      break;
    default:
      o = Ru;
  }
  n = o.bind(null, t, n, e), o = void 0, !dc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function gl(e, t, n, r, o) {
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
  Ym(function() {
    var c = s, u = Du(n), f = [];
    e: {
      var d = kg.get(e);
      if (d !== void 0) {
        var g = Lu, w = e;
        switch (e) {
          case "keypress":
            if (ki(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = _1;
            break;
          case "focusin":
            w = "focus", g = cl;
            break;
          case "focusout":
            w = "blur", g = cl;
            break;
          case "beforeblur":
          case "afterblur":
            g = cl;
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
            g = Mf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = k1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = F1;
            break;
          case xg:
          case wg:
          case bg:
            g = T1;
            break;
          case Sg:
            g = z1;
            break;
          case "scroll":
            g = b1;
            break;
          case "wheel":
            g = $1;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = D1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = jf;
        }
        var y = (t & 4) !== 0, b = !y && e === "scroll", m = y ? d !== null ? d + "Capture" : null : d;
        y = [];
        for (var h = c, v; h !== null; ) {
          v = h;
          var S = v.stateNode;
          if (v.tag === 5 && S !== null && (v = S, m !== null && (S = ns(h, m), S != null && y.push(cs(h, S, v)))), b) break;
          h = h.return;
        }
        0 < y.length && (d = new g(d, w, null, n, u), f.push({ event: d, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && n !== cc && (w = n.relatedTarget || n.fromElement) && (er(w) || w[tn])) break e;
        if ((g || d) && (d = u.window === u ? u : (d = u.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = c, w = w ? er(w) : null, w !== null && (b = yr(w), w !== b || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = c), g !== w)) {
          if (y = Mf, S = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (y = jf, S = "onPointerLeave", m = "onPointerEnter", h = "pointer"), b = g == null ? d : Nr(g), v = w == null ? d : Nr(w), d = new y(S, h + "leave", g, n, u), d.target = b, d.relatedTarget = v, S = null, er(u) === c && (y = new y(m, h + "enter", w, n, u), y.target = v, y.relatedTarget = b, S = y), b = S, g && w) t: {
            for (y = g, m = w, h = 0, v = y; v; v = xr(v)) h++;
            for (v = 0, S = m; S; S = xr(S)) v++;
            for (; 0 < h - v; ) y = xr(y), h--;
            for (; 0 < v - h; ) m = xr(m), v--;
            for (; h--; ) {
              if (y === m || m !== null && y === m.alternate) break t;
              y = xr(y), m = xr(m);
            }
            y = null;
          }
          else y = null;
          g !== null && Wf(f, d, g, y, !1), w !== null && b !== null && Wf(f, b, w, y, !0);
        }
      }
      e: {
        if (d = c ? Nr(c) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file") var k = X1;
        else if (Of(d)) if (hg) k = J1;
        else {
          k = q1;
          var E = Q1;
        }
        else (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (k = Z1);
        if (k && (k = k(e, c))) {
          pg(f, k, n, u);
          break e;
        }
        E && E(e, d, c), e === "focusout" && (E = d._wrapperState) && E.controlled && d.type === "number" && oc(d, "number", d.value);
      }
      switch (E = c ? Nr(c) : window, e) {
        case "focusin":
          (Of(E) || E.contentEditable === "true") && (Pr = E, gc = c, Ho = null);
          break;
        case "focusout":
          Ho = gc = Pr = null;
          break;
        case "mousedown":
          yc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          yc = !1, Bf(f, n, u);
          break;
        case "selectionchange":
          if (nb) break;
        case "keydown":
        case "keyup":
          Bf(f, n, u);
      }
      var C;
      if (Ou) e: {
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
      else Tr ? dg(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (ug && n.locale !== "ko" && (Tr || T !== "onCompositionStart" ? T === "onCompositionEnd" && Tr && (C = cg()) : (Sn = u, ju = "value" in Sn ? Sn.value : Sn.textContent, Tr = !0)), E = Ki(c, T), 0 < E.length && (T = new Rf(T, e, null, n, u), f.push({ event: T, listeners: E }), C ? T.data = C : (C = fg(n), C !== null && (T.data = C)))), (C = W1 ? H1(e, n) : K1(e, n)) && (c = Ki(c, "onBeforeInput"), 0 < c.length && (u = new Rf("onBeforeInput", "beforeinput", null, n, u), f.push({ event: u, listeners: c }), u.data = C));
    }
    Cg(f, t);
  });
}
function cs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ki(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, s = o.stateNode;
    o.tag === 5 && s !== null && (o = s, s = ns(e, n), s != null && r.unshift(cs(e, s, o)), s = ns(e, t), s != null && r.push(cs(e, s, o))), e = e.return;
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
    var a = n, l = a.alternate, c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && c !== null && (a = c, o ? (l = ns(n, s), l != null && i.unshift(cs(n, l, a))) : o || (l = ns(n, s), l != null && i.push(cs(n, l, a)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var ib = /\r\n?/g, ab = /\u0000|\uFFFD/g;
function Hf(e) {
  return (typeof e == "string" ? e : "" + e).replace(ib, `
`).replace(ab, "");
}
function qs(e, t, n) {
  if (t = Hf(t), Hf(e) !== t && n) throw Error(R(425));
}
function Gi() {
}
var vc = null, xc = null;
function wc(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var bc = typeof setTimeout == "function" ? setTimeout : void 0, lb = typeof clearTimeout == "function" ? clearTimeout : void 0, Kf = typeof Promise == "function" ? Promise : void 0, cb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Kf < "u" ? function(e) {
  return Kf.resolve(null).then(e).catch(ub);
} : bc;
function ub(e) {
  setTimeout(function() {
    throw e;
  });
}
function yl(e, t) {
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
var fo = Math.random().toString(36).slice(2), Lt = "__reactFiber$" + fo, us = "__reactProps$" + fo, tn = "__reactContainer$" + fo, Sc = "__reactEvents$" + fo, db = "__reactListeners$" + fo, fb = "__reactHandles$" + fo;
function er(e) {
  var t = e[Lt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[tn] || n[Lt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Gf(e); e !== null; ) {
        if (n = e[Lt]) return n;
        e = Gf(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function As(e) {
  return e = e[Lt] || e[tn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Nr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Pa(e) {
  return e[us] || null;
}
var kc = [], Ar = -1;
function $n(e) {
  return { current: e };
}
function le(e) {
  0 > Ar || (e.current = kc[Ar], kc[Ar] = null, Ar--);
}
function se(e, t) {
  Ar++, kc[Ar] = e.current, e.current = t;
}
var Ln = {}, $e = $n(Ln), qe = $n(!1), ar = Ln;
function qr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ln;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, s;
  for (s in n) o[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Ze(e) {
  return e = e.childContextTypes, e != null;
}
function Yi() {
  le(qe), le($e);
}
function Yf(e, t, n) {
  if ($e.current !== Ln) throw Error(R(168));
  se($e, t), se(qe, n);
}
function Tg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(R(108, Qw(e) || "Unknown", o));
  return he({}, n, r);
}
function Xi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ln, ar = $e.current, se($e, e), se(qe, qe.current), !0;
}
function Xf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n ? (e = Tg(e, t, ar), r.__reactInternalMemoizedMergedChildContext = e, le(qe), le($e), se($e, e)) : le(qe), se(qe, n);
}
var Kt = null, Da = !1, vl = !1;
function Pg(e) {
  Kt === null ? Kt = [e] : Kt.push(e);
}
function pb(e) {
  Da = !0, Pg(e);
}
function Un() {
  if (!vl && Kt !== null) {
    vl = !0;
    var e = 0, t = te;
    try {
      var n = Kt;
      for (te = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Kt = null, Da = !1;
    } catch (o) {
      throw Kt !== null && (Kt = Kt.slice(e + 1)), Zm(Nu, Un), o;
    } finally {
      te = t, vl = !1;
    }
  }
  return null;
}
var Mr = [], Rr = 0, Qi = null, qi = 0, pt = [], ht = 0, lr = null, Gt = 1, Yt = "";
function Qn(e, t) {
  Mr[Rr++] = qi, Mr[Rr++] = Qi, Qi = e, qi = t;
}
function Dg(e, t, n) {
  pt[ht++] = Gt, pt[ht++] = Yt, pt[ht++] = lr, lr = e;
  var r = Gt;
  e = Yt;
  var o = 32 - Et(r) - 1;
  r &= ~(1 << o), n += 1;
  var s = 32 - Et(t) + o;
  if (30 < s) {
    var i = o - o % 5;
    s = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Gt = 1 << 32 - Et(t) + o | n << o | r, Yt = s + e;
  } else Gt = 1 << s | n << o | r, Yt = e;
}
function Fu(e) {
  e.return !== null && (Qn(e, 1), Dg(e, 1, 0));
}
function Vu(e) {
  for (; e === Qi; ) Qi = Mr[--Rr], Mr[Rr] = null, qi = Mr[--Rr], Mr[Rr] = null;
  for (; e === lr; ) lr = pt[--ht], pt[ht] = null, Yt = pt[--ht], pt[ht] = null, Gt = pt[--ht], pt[ht] = null;
}
var ot = null, rt = null, ue = !1, Ct = null;
function Ng(e, t) {
  var n = mt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Qf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ot = e, rt = Pn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ot = e, rt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = lr !== null ? { id: Gt, overflow: Yt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = mt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ot = e, rt = null, !0) : !1;
    default:
      return !1;
  }
}
function Cc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ec(e) {
  if (ue) {
    var t = rt;
    if (t) {
      var n = t;
      if (!Qf(e, t)) {
        if (Cc(e)) throw Error(R(418));
        t = Pn(n.nextSibling);
        var r = ot;
        t && Qf(e, t) ? Ng(r, n) : (e.flags = e.flags & -4097 | 2, ue = !1, ot = e);
      }
    } else {
      if (Cc(e)) throw Error(R(418));
      e.flags = e.flags & -4097 | 2, ue = !1, ot = e;
    }
  }
}
function qf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ot = e;
}
function Zs(e) {
  if (e !== ot) return !1;
  if (!ue) return qf(e), ue = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wc(e.type, e.memoizedProps)), t && (t = rt)) {
    if (Cc(e)) throw Ag(), Error(R(418));
    for (; t; ) Ng(e, t), t = Pn(t.nextSibling);
  }
  if (qf(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              rt = Pn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      rt = null;
    }
  } else rt = ot ? Pn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ag() {
  for (var e = rt; e; ) e = Pn(e.nextSibling);
}
function Zr() {
  rt = ot = null, ue = !1;
}
function zu(e) {
  Ct === null ? Ct = [e] : Ct.push(e);
}
var hb = ln.ReactCurrentBatchConfig;
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
function Js(e, t) {
  throw e = Object.prototype.toString.call(t), Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Zf(e) {
  var t = e._init;
  return t(e._payload);
}
function Mg(e) {
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
  function a(m, h, v, S) {
    return h === null || h.tag !== 6 ? (h = El(v, m.mode, S), h.return = m, h) : (h = o(h, v), h.return = m, h);
  }
  function l(m, h, v, S) {
    var k = v.type;
    return k === Er ? u(m, h, v.props.children, S, v.key) : h !== null && (h.elementType === k || typeof k == "object" && k !== null && k.$$typeof === vn && Zf(k) === h.type) ? (S = o(h, v.props), S.ref = Po(m, h, v), S.return = m, S) : (S = Ai(v.type, v.key, v.props, null, m.mode, S), S.ref = Po(m, h, v), S.return = m, S);
  }
  function c(m, h, v, S) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = Tl(v, m.mode, S), h.return = m, h) : (h = o(h, v.children || []), h.return = m, h);
  }
  function u(m, h, v, S, k) {
    return h === null || h.tag !== 7 ? (h = sr(v, m.mode, S, k), h.return = m, h) : (h = o(h, v), h.return = m, h);
  }
  function f(m, h, v) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = El("" + h, m.mode, v), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case $s:
          return v = Ai(h.type, h.key, h.props, null, m.mode, v), v.ref = Po(m, null, h), v.return = m, v;
        case Cr:
          return h = Tl(h, m.mode, v), h.return = m, h;
        case vn:
          var S = h._init;
          return f(m, S(h._payload), v);
      }
      if (Lo(h) || So(h)) return h = sr(h, m.mode, v, null), h.return = m, h;
      Js(m, h);
    }
    return null;
  }
  function d(m, h, v, S) {
    var k = h !== null ? h.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number") return k !== null ? null : a(m, h, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case $s:
          return v.key === k ? l(m, h, v, S) : null;
        case Cr:
          return v.key === k ? c(m, h, v, S) : null;
        case vn:
          return k = v._init, d(
            m,
            h,
            k(v._payload),
            S
          );
      }
      if (Lo(v) || So(v)) return k !== null ? null : u(m, h, v, S, null);
      Js(m, v);
    }
    return null;
  }
  function g(m, h, v, S, k) {
    if (typeof S == "string" && S !== "" || typeof S == "number") return m = m.get(v) || null, a(h, m, "" + S, k);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case $s:
          return m = m.get(S.key === null ? v : S.key) || null, l(h, m, S, k);
        case Cr:
          return m = m.get(S.key === null ? v : S.key) || null, c(h, m, S, k);
        case vn:
          var E = S._init;
          return g(m, h, v, E(S._payload), k);
      }
      if (Lo(S) || So(S)) return m = m.get(v) || null, u(h, m, S, k, null);
      Js(h, S);
    }
    return null;
  }
  function w(m, h, v, S) {
    for (var k = null, E = null, C = h, T = h = 0, M = null; C !== null && T < v.length; T++) {
      C.index > T ? (M = C, C = null) : M = C.sibling;
      var D = d(m, C, v[T], S);
      if (D === null) {
        C === null && (C = M);
        break;
      }
      e && C && D.alternate === null && t(m, C), h = s(D, h, T), E === null ? k = D : E.sibling = D, E = D, C = M;
    }
    if (T === v.length) return n(m, C), ue && Qn(m, T), k;
    if (C === null) {
      for (; T < v.length; T++) C = f(m, v[T], S), C !== null && (h = s(C, h, T), E === null ? k = C : E.sibling = C, E = C);
      return ue && Qn(m, T), k;
    }
    for (C = r(m, C); T < v.length; T++) M = g(C, m, T, v[T], S), M !== null && (e && M.alternate !== null && C.delete(M.key === null ? T : M.key), h = s(M, h, T), E === null ? k = M : E.sibling = M, E = M);
    return e && C.forEach(function(P) {
      return t(m, P);
    }), ue && Qn(m, T), k;
  }
  function y(m, h, v, S) {
    var k = So(v);
    if (typeof k != "function") throw Error(R(150));
    if (v = k.call(v), v == null) throw Error(R(151));
    for (var E = k = null, C = h, T = h = 0, M = null, D = v.next(); C !== null && !D.done; T++, D = v.next()) {
      C.index > T ? (M = C, C = null) : M = C.sibling;
      var P = d(m, C, D.value, S);
      if (P === null) {
        C === null && (C = M);
        break;
      }
      e && C && P.alternate === null && t(m, C), h = s(P, h, T), E === null ? k = P : E.sibling = P, E = P, C = M;
    }
    if (D.done) return n(
      m,
      C
    ), ue && Qn(m, T), k;
    if (C === null) {
      for (; !D.done; T++, D = v.next()) D = f(m, D.value, S), D !== null && (h = s(D, h, T), E === null ? k = D : E.sibling = D, E = D);
      return ue && Qn(m, T), k;
    }
    for (C = r(m, C); !D.done; T++, D = v.next()) D = g(C, m, T, D.value, S), D !== null && (e && D.alternate !== null && C.delete(D.key === null ? T : D.key), h = s(D, h, T), E === null ? k = D : E.sibling = D, E = D);
    return e && C.forEach(function(A) {
      return t(m, A);
    }), ue && Qn(m, T), k;
  }
  function b(m, h, v, S) {
    if (typeof v == "object" && v !== null && v.type === Er && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case $s:
          e: {
            for (var k = v.key, E = h; E !== null; ) {
              if (E.key === k) {
                if (k = v.type, k === Er) {
                  if (E.tag === 7) {
                    n(m, E.sibling), h = o(E, v.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (E.elementType === k || typeof k == "object" && k !== null && k.$$typeof === vn && Zf(k) === E.type) {
                  n(m, E.sibling), h = o(E, v.props), h.ref = Po(m, E, v), h.return = m, m = h;
                  break e;
                }
                n(m, E);
                break;
              } else t(m, E);
              E = E.sibling;
            }
            v.type === Er ? (h = sr(v.props.children, m.mode, S, v.key), h.return = m, m = h) : (S = Ai(v.type, v.key, v.props, null, m.mode, S), S.ref = Po(m, h, v), S.return = m, m = S);
          }
          return i(m);
        case Cr:
          e: {
            for (E = v.key; h !== null; ) {
              if (h.key === E) if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) {
                n(m, h.sibling), h = o(h, v.children || []), h.return = m, m = h;
                break e;
              } else {
                n(m, h);
                break;
              }
              else t(m, h);
              h = h.sibling;
            }
            h = Tl(v, m.mode, S), h.return = m, m = h;
          }
          return i(m);
        case vn:
          return E = v._init, b(m, h, E(v._payload), S);
      }
      if (Lo(v)) return w(m, h, v, S);
      if (So(v)) return y(m, h, v, S);
      Js(m, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, h !== null && h.tag === 6 ? (n(m, h.sibling), h = o(h, v), h.return = m, m = h) : (n(m, h), h = El(v, m.mode, S), h.return = m, m = h), i(m)) : n(m, h);
  }
  return b;
}
var Jr = Mg(!0), Rg = Mg(!1), Zi = $n(null), Ji = null, jr = null, Bu = null;
function $u() {
  Bu = jr = Ji = null;
}
function Uu(e) {
  var t = Zi.current;
  le(Zi), e._currentValue = t;
}
function Tc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Hr(e, t) {
  Ji = e, Bu = jr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Qe = !0), e.firstContext = null);
}
function yt(e) {
  var t = e._currentValue;
  if (Bu !== e) if (e = { context: e, memoizedValue: t, next: null }, jr === null) {
    if (Ji === null) throw Error(R(308));
    jr = e, Ji.dependencies = { lanes: 0, firstContext: e };
  } else jr = jr.next = e;
  return t;
}
var tr = null;
function Wu(e) {
  tr === null ? tr = [e] : tr.push(e);
}
function jg(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Wu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, nn(e, r);
}
function nn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var xn = !1;
function Hu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Lg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Qt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Dn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Q & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, nn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Wu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, nn(e, n);
}
function Ci(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Au(e, n);
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
function ea(e, t, n, r) {
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
          var w = e, y = a;
          switch (d = t, g = n, y.tag) {
            case 1:
              if (w = y.payload, typeof w == "function") {
                f = w.call(g, f, d);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = y.payload, d = typeof w == "function" ? w.call(g, f, d) : w, d == null) break e;
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
    ur |= i, e.lanes = i, e.memoizedState = f;
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
var Ms = {}, Ft = $n(Ms), ds = $n(Ms), fs = $n(Ms);
function nr(e) {
  if (e === Ms) throw Error(R(174));
  return e;
}
function Ku(e, t) {
  switch (se(fs, t), se(ds, e), se(Ft, Ms), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ic(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ic(t, e);
  }
  le(Ft), se(Ft, t);
}
function eo() {
  le(Ft), le(ds), le(fs);
}
function _g(e) {
  nr(fs.current);
  var t = nr(Ft.current), n = ic(t, e.type);
  t !== n && (se(ds, e), se(Ft, n));
}
function Gu(e) {
  ds.current === e && (le(Ft), le(ds));
}
var de = $n(0);
function ta(e) {
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
var xl = [];
function Yu() {
  for (var e = 0; e < xl.length; e++) xl[e]._workInProgressVersionPrimary = null;
  xl.length = 0;
}
var Ei = ln.ReactCurrentDispatcher, wl = ln.ReactCurrentBatchConfig, cr = 0, pe = null, Te = null, Ne = null, na = !1, Ko = !1, ps = 0, mb = 0;
function Ie() {
  throw Error(R(321));
}
function Xu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Pt(e[n], t[n])) return !1;
  return !0;
}
function Qu(e, t, n, r, o, s) {
  if (cr = s, pe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ei.current = e === null || e.memoizedState === null ? xb : wb, e = n(r, o), Ko) {
    s = 0;
    do {
      if (Ko = !1, ps = 0, 25 <= s) throw Error(R(301));
      s += 1, Ne = Te = null, t.updateQueue = null, Ei.current = bb, e = n(r, o);
    } while (Ko);
  }
  if (Ei.current = ra, t = Te !== null && Te.next !== null, cr = 0, Ne = Te = pe = null, na = !1, t) throw Error(R(300));
  return e;
}
function qu() {
  var e = ps !== 0;
  return ps = 0, e;
}
function jt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ne === null ? pe.memoizedState = Ne = e : Ne = Ne.next = e, Ne;
}
function vt() {
  if (Te === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Te.next;
  var t = Ne === null ? pe.memoizedState : Ne.next;
  if (t !== null) Ne = t, Te = e;
  else {
    if (e === null) throw Error(R(310));
    Te = e, e = { memoizedState: Te.memoizedState, baseState: Te.baseState, baseQueue: Te.baseQueue, queue: Te.queue, next: null }, Ne === null ? pe.memoizedState = Ne = e : Ne = Ne.next = e;
  }
  return Ne;
}
function hs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function bl(e) {
  var t = vt(), n = t.queue;
  if (n === null) throw Error(R(311));
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
      if ((cr & u) === u) l !== null && (l = l.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var f = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        l === null ? (a = l = f, i = r) : l = l.next = f, pe.lanes |= u, ur |= u;
      }
      c = c.next;
    } while (c !== null && c !== s);
    l === null ? i = r : l.next = a, Pt(r, t.memoizedState) || (Qe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      s = o.lane, pe.lanes |= s, ur |= s, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Sl(e) {
  var t = vt(), n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      s = e(s, i.action), i = i.next;
    while (i !== o);
    Pt(s, t.memoizedState) || (Qe = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function Og() {
}
function Ig(e, t) {
  var n = pe, r = vt(), o = t(), s = !Pt(r.memoizedState, o);
  if (s && (r.memoizedState = o, Qe = !0), r = r.queue, Zu(zg.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || Ne !== null && Ne.memoizedState.tag & 1) {
    if (n.flags |= 2048, ms(9, Vg.bind(null, n, r, o, t), void 0, null), Ae === null) throw Error(R(349));
    cr & 30 || Fg(n, t, o);
  }
  return o;
}
function Fg(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, pe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Vg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Bg(t) && $g(e);
}
function zg(e, t, n) {
  return n(function() {
    Bg(t) && $g(e);
  });
}
function Bg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Pt(e, n);
  } catch {
    return !0;
  }
}
function $g(e) {
  var t = nn(e, 1);
  t !== null && Tt(t, e, 1, -1);
}
function tp(e) {
  var t = jt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: hs, lastRenderedState: e }, t.queue = e, e = e.dispatch = vb.bind(null, pe, e), [t.memoizedState, e];
}
function ms(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, pe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ug() {
  return vt().memoizedState;
}
function Ti(e, t, n, r) {
  var o = jt();
  pe.flags |= e, o.memoizedState = ms(1 | t, n, void 0, r === void 0 ? null : r);
}
function Na(e, t, n, r) {
  var o = vt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Te !== null) {
    var i = Te.memoizedState;
    if (s = i.destroy, r !== null && Xu(r, i.deps)) {
      o.memoizedState = ms(t, n, s, r);
      return;
    }
  }
  pe.flags |= e, o.memoizedState = ms(1 | t, n, s, r);
}
function np(e, t) {
  return Ti(8390656, 8, e, t);
}
function Zu(e, t) {
  return Na(2048, 8, e, t);
}
function Wg(e, t) {
  return Na(4, 2, e, t);
}
function Hg(e, t) {
  return Na(4, 4, e, t);
}
function Kg(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Gg(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Na(4, 4, Kg.bind(null, t, e), n);
}
function Ju() {
}
function Yg(e, t) {
  var n = vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Xg(e, t) {
  var n = vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Qg(e, t, n) {
  return cr & 21 ? (Pt(n, t) || (n = tg(), pe.lanes |= n, ur |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Qe = !0), e.memoizedState = n);
}
function gb(e, t) {
  var n = te;
  te = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = wl.transition;
  wl.transition = {};
  try {
    e(!1), t();
  } finally {
    te = n, wl.transition = r;
  }
}
function qg() {
  return vt().memoizedState;
}
function yb(e, t, n) {
  var r = An(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Zg(e)) Jg(t, n);
  else if (n = jg(e, t, n, r), n !== null) {
    var o = Ke();
    Tt(n, e, r, o), ey(n, t, r);
  }
}
function vb(e, t, n) {
  var r = An(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Zg(e)) Jg(t, o);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var i = t.lastRenderedState, a = s(i, n);
      if (o.hasEagerState = !0, o.eagerState = a, Pt(a, i)) {
        var l = t.interleaved;
        l === null ? (o.next = o, Wu(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = jg(e, t, o, r), n !== null && (o = Ke(), Tt(n, e, r, o), ey(n, t, r));
  }
}
function Zg(e) {
  var t = e.alternate;
  return e === pe || t !== null && t === pe;
}
function Jg(e, t) {
  Ko = na = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function ey(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Au(e, n);
  }
}
var ra = { readContext: yt, useCallback: Ie, useContext: Ie, useEffect: Ie, useImperativeHandle: Ie, useInsertionEffect: Ie, useLayoutEffect: Ie, useMemo: Ie, useReducer: Ie, useRef: Ie, useState: Ie, useDebugValue: Ie, useDeferredValue: Ie, useTransition: Ie, useMutableSource: Ie, useSyncExternalStore: Ie, useId: Ie, unstable_isNewReconciler: !1 }, xb = { readContext: yt, useCallback: function(e, t) {
  return jt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: yt, useEffect: np, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ti(
    4194308,
    4,
    Kg.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ti(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ti(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = jt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = jt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = yb.bind(null, pe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = jt();
  return e = { current: e }, t.memoizedState = e;
}, useState: tp, useDebugValue: Ju, useDeferredValue: function(e) {
  return jt().memoizedState = e;
}, useTransition: function() {
  var e = tp(!1), t = e[0];
  return e = gb.bind(null, e[1]), jt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = pe, o = jt();
  if (ue) {
    if (n === void 0) throw Error(R(407));
    n = n();
  } else {
    if (n = t(), Ae === null) throw Error(R(349));
    cr & 30 || Fg(r, t, n);
  }
  o.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return o.queue = s, np(zg.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, ms(9, Vg.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = jt(), t = Ae.identifierPrefix;
  if (ue) {
    var n = Yt, r = Gt;
    n = (r & ~(1 << 32 - Et(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ps++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = mb++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, wb = {
  readContext: yt,
  useCallback: Yg,
  useContext: yt,
  useEffect: Zu,
  useImperativeHandle: Gg,
  useInsertionEffect: Wg,
  useLayoutEffect: Hg,
  useMemo: Xg,
  useReducer: bl,
  useRef: Ug,
  useState: function() {
    return bl(hs);
  },
  useDebugValue: Ju,
  useDeferredValue: function(e) {
    var t = vt();
    return Qg(t, Te.memoizedState, e);
  },
  useTransition: function() {
    var e = bl(hs)[0], t = vt().memoizedState;
    return [e, t];
  },
  useMutableSource: Og,
  useSyncExternalStore: Ig,
  useId: qg,
  unstable_isNewReconciler: !1
}, bb = { readContext: yt, useCallback: Yg, useContext: yt, useEffect: Zu, useImperativeHandle: Gg, useInsertionEffect: Wg, useLayoutEffect: Hg, useMemo: Xg, useReducer: Sl, useRef: Ug, useState: function() {
  return Sl(hs);
}, useDebugValue: Ju, useDeferredValue: function(e) {
  var t = vt();
  return Te === null ? t.memoizedState = e : Qg(t, Te.memoizedState, e);
}, useTransition: function() {
  var e = Sl(hs)[0], t = vt().memoizedState;
  return [e, t];
}, useMutableSource: Og, useSyncExternalStore: Ig, useId: qg, unstable_isNewReconciler: !1 };
function St(e, t) {
  if (e && e.defaultProps) {
    t = he({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Pc(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : he({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Aa = { isMounted: function(e) {
  return (e = e._reactInternals) ? yr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ke(), o = An(e), s = Qt(r, o);
  s.payload = t, n != null && (s.callback = n), t = Dn(e, s, o), t !== null && (Tt(t, e, o, r), Ci(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ke(), o = An(e), s = Qt(r, o);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Dn(e, s, o), t !== null && (Tt(t, e, o, r), Ci(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ke(), r = An(e), o = Qt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Dn(e, o, r), t !== null && (Tt(t, e, r, n), Ci(t, e, r));
} };
function rp(e, t, n, r, o, s, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !as(n, r) || !as(o, s) : !0;
}
function ty(e, t, n) {
  var r = !1, o = Ln, s = t.contextType;
  return typeof s == "object" && s !== null ? s = yt(s) : (o = Ze(t) ? ar : $e.current, r = t.contextTypes, s = (r = r != null) ? qr(e, o) : Ln), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Aa, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function op(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Aa.enqueueReplaceState(t, t.state, null);
}
function Dc(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Hu(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? o.context = yt(s) : (s = Ze(t) ? ar : $e.current, o.context = qr(e, s)), o.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Pc(e, t, s, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Aa.enqueueReplaceState(o, o.state, null), ea(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function to(e, t) {
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
function kl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Nc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Sb = typeof WeakMap == "function" ? WeakMap : Map;
function ny(e, t, n) {
  n = Qt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    sa || (sa = !0, Vc = r), Nc(e, t);
  }, n;
}
function ry(e, t, n) {
  n = Qt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Nc(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    Nc(e, t), typeof r != "function" && (Nn === null ? Nn = /* @__PURE__ */ new Set([this]) : Nn.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function sp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Sb();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = Ob.bind(null, e, t, n), t.then(e, e));
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
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qt(-1, 1), t.tag = 2, Dn(n, t, 1))), n.lanes |= 1), e);
}
var kb = ln.ReactCurrentOwner, Qe = !1;
function He(e, t, n, r) {
  t.child = e === null ? Rg(t, null, n, r) : Jr(t, e.child, n, r);
}
function lp(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return Hr(t, o), r = Qu(e, t, n, r, s, o), n = qu(), e !== null && !Qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, rn(e, t, o)) : (ue && n && Fu(t), t.flags |= 1, He(e, t, r, o), t.child);
}
function cp(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !ad(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, oy(e, t, s, r, o)) : (e = Ai(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & o)) {
    var i = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : as, n(i, r) && e.ref === t.ref) return rn(e, t, o);
  }
  return t.flags |= 1, e = Mn(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function oy(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (as(s, r) && e.ref === t.ref) if (Qe = !1, t.pendingProps = r = s, (e.lanes & o) !== 0) e.flags & 131072 && (Qe = !0);
    else return t.lanes = e.lanes, rn(e, t, o);
  }
  return Ac(e, t, n, r, o);
}
function sy(e, t, n) {
  var r = t.pendingProps, o = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, se(_r, tt), tt |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, se(_r, tt), tt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, se(_r, tt), tt |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, se(_r, tt), tt |= r;
  return He(e, t, o, n), t.child;
}
function iy(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ac(e, t, n, r, o) {
  var s = Ze(n) ? ar : $e.current;
  return s = qr(t, s), Hr(t, o), n = Qu(e, t, n, r, s, o), r = qu(), e !== null && !Qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, rn(e, t, o)) : (ue && r && Fu(t), t.flags |= 1, He(e, t, n, o), t.child);
}
function up(e, t, n, r, o) {
  if (Ze(n)) {
    var s = !0;
    Xi(t);
  } else s = !1;
  if (Hr(t, o), t.stateNode === null) Pi(e, t), ty(t, n, r), Dc(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, a = t.memoizedProps;
    i.props = a;
    var l = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = yt(c) : (c = Ze(n) ? ar : $e.current, c = qr(t, c));
    var u = n.getDerivedStateFromProps, f = typeof u == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    f || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || l !== c) && op(t, i, r, c), xn = !1;
    var d = t.memoizedState;
    i.state = d, ea(t, r, i, o), l = t.memoizedState, a !== r || d !== l || qe.current || xn ? (typeof u == "function" && (Pc(t, n, u, r), l = t.memoizedState), (a = xn || rp(t, n, a, r, d, l, c)) ? (f || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), i.props = r, i.state = l, i.context = c, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Lg(e, t), a = t.memoizedProps, c = t.type === t.elementType ? a : St(t.type, a), i.props = c, f = t.pendingProps, d = i.context, l = n.contextType, typeof l == "object" && l !== null ? l = yt(l) : (l = Ze(n) ? ar : $e.current, l = qr(t, l));
    var g = n.getDerivedStateFromProps;
    (u = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== f || d !== l) && op(t, i, r, l), xn = !1, d = t.memoizedState, i.state = d, ea(t, r, i, o);
    var w = t.memoizedState;
    a !== f || d !== w || qe.current || xn ? (typeof g == "function" && (Pc(t, n, g, r), w = t.memoizedState), (c = xn || rp(t, n, c, r, d, w, l) || !1) ? (u || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, l), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, l)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = l, r = c) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Mc(e, t, n, r, s, o);
}
function Mc(e, t, n, r, o, s) {
  iy(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Xf(t, n, !1), rn(e, t, s);
  r = t.stateNode, kb.current = t;
  var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Jr(t, e.child, null, s), t.child = Jr(t, null, a, s)) : He(e, t, a, s), t.memoizedState = r.state, o && Xf(t, n, !0), t.child;
}
function ay(e) {
  var t = e.stateNode;
  t.pendingContext ? Yf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Yf(e, t.context, !1), Ku(e, t.containerInfo);
}
function dp(e, t, n, r, o) {
  return Zr(), zu(o), t.flags |= 256, He(e, t, n, r), t.child;
}
var Rc = { dehydrated: null, treeContext: null, retryLane: 0 };
function jc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ly(e, t, n) {
  var r = t.pendingProps, o = de.current, s = !1, i = (t.flags & 128) !== 0, a;
  if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), se(de, o & 1), e === null)
    return Ec(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, i = { mode: "hidden", children: i }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = i) : s = ja(i, r, 0, null), e = sr(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = jc(n), t.memoizedState = Rc, e) : ed(t, i));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return Cb(e, t, i, r, a, o, n);
  if (s) {
    s = r.fallback, i = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Mn(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? s = Mn(a, s) : (s = sr(s, i, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, i = e.child.memoizedState, i = i === null ? jc(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, s.memoizedState = i, s.childLanes = e.childLanes & ~n, t.memoizedState = Rc, r;
  }
  return s = e.child, e = s.sibling, r = Mn(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ed(e, t) {
  return t = ja({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ei(e, t, n, r) {
  return r !== null && zu(r), Jr(t, e.child, null, n), e = ed(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Cb(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = kl(Error(R(422))), ei(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, o = t.mode, r = ja({ mode: "visible", children: r.children }, o, 0, null), s = sr(s, o, i, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Jr(t, e.child, null, i), t.child.memoizedState = jc(i), t.memoizedState = Rc, s);
  if (!(t.mode & 1)) return ei(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
    return r = a, s = Error(R(419)), r = kl(s, r, void 0), ei(e, t, i, r);
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
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== s.retryLane && (s.retryLane = o, nn(e, o), Tt(r, e, o, -1));
    }
    return id(), r = kl(Error(R(421))), ei(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ib.bind(null, e), o._reactRetry = t, null) : (e = s.treeContext, rt = Pn(o.nextSibling), ot = t, ue = !0, Ct = null, e !== null && (pt[ht++] = Gt, pt[ht++] = Yt, pt[ht++] = lr, Gt = e.id, Yt = e.overflow, lr = t), t = ed(t, r.children), t.flags |= 4096, t);
}
function fp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Tc(e.return, t, n);
}
function Cl(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = o);
}
function cy(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, s = r.tail;
  if (He(e, t, r.children, n), r = de.current, r & 2) r = r & 1 | 2, t.flags |= 128;
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
  if (se(de, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && ta(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Cl(t, !1, o, n, s);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && ta(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Cl(t, !0, n, null, s);
      break;
    case "together":
      Cl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Pi(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function rn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), ur |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (e = t.child, n = Mn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Mn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Eb(e, t, n) {
  switch (t.tag) {
    case 3:
      ay(t), Zr();
      break;
    case 5:
      _g(t);
      break;
    case 1:
      Ze(t.type) && Xi(t);
      break;
    case 4:
      Ku(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      se(Zi, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (se(de, de.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ly(e, t, n) : (se(de, de.current & 1), e = rn(e, t, n), e !== null ? e.sibling : null);
      se(de, de.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return cy(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), se(de, de.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, sy(e, t, n);
  }
  return rn(e, t, n);
}
var uy, Lc, dy, fy;
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
Lc = function() {
};
dy = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, nr(Ft.current);
    var s = null;
    switch (n) {
      case "input":
        o = nc(e, o), r = nc(e, r), s = [];
        break;
      case "select":
        o = he({}, o, { value: void 0 }), r = he({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        o = sc(e, o), r = sc(e, r), s = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Gi);
    }
    ac(n, r);
    var i;
    n = null;
    for (c in o) if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null) if (c === "style") {
      var a = o[c];
      for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (es.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (a = o != null ? o[c] : void 0, r.hasOwnProperty(c) && l !== a && (l != null || a != null)) if (c === "style") if (a) {
        for (i in a) !a.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in l) l.hasOwnProperty(i) && a[i] !== l[i] && (n || (n = {}), n[i] = l[i]);
      } else n || (s || (s = []), s.push(
        c,
        n
      )), n = l;
      else c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (es.hasOwnProperty(c) ? (l != null && c === "onScroll" && ae("scroll", e), s || a === l || (s = [])) : (s = s || []).push(c, l));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
fy = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Do(e, t) {
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
function Fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Tb(e, t, n) {
  var r = t.pendingProps;
  switch (Vu(t), t.tag) {
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
      return Fe(t), null;
    case 1:
      return Ze(t.type) && Yi(), Fe(t), null;
    case 3:
      return r = t.stateNode, eo(), le(qe), le($e), Yu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ct !== null && ($c(Ct), Ct = null))), Lc(e, t), Fe(t), null;
    case 5:
      Gu(t);
      var o = nr(fs.current);
      if (n = t.type, e !== null && t.stateNode != null) dy(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return Fe(t), null;
        }
        if (e = nr(Ft.current), Zs(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[Lt] = t, r[us] = s, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < Oo.length; o++) ae(Oo[o], r);
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
              bf(r, s), ae("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, ae("invalid", r);
              break;
            case "textarea":
              kf(r, s), ae("invalid", r);
          }
          ac(n, s), o = null;
          for (var i in s) if (s.hasOwnProperty(i)) {
            var a = s[i];
            i === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && qs(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && qs(
              r.textContent,
              a,
              e
            ), o = ["children", "" + a]) : es.hasOwnProperty(i) && a != null && i === "onScroll" && ae("scroll", r);
          }
          switch (n) {
            case "input":
              Us(r), Sf(r, s, !0);
              break;
            case "textarea":
              Us(r), Cf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Gi);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = zm(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Lt] = t, e[us] = r, uy(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = lc(n, r), n) {
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
                for (o = 0; o < Oo.length; o++) ae(Oo[o], e);
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
                bf(e, r), o = nc(e, r), ae("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = he({}, r, { value: void 0 }), ae("invalid", e);
                break;
              case "textarea":
                kf(e, r), o = sc(e, r), ae("invalid", e);
                break;
              default:
                o = r;
            }
            ac(n, o), a = o;
            for (s in a) if (a.hasOwnProperty(s)) {
              var l = a[s];
              s === "style" ? Um(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Bm(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && ts(e, l) : typeof l == "number" && ts(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (es.hasOwnProperty(s) ? l != null && s === "onScroll" && ae("scroll", e) : l != null && Cu(e, s, l, i));
            }
            switch (n) {
              case "input":
                Us(e), Sf(e, r, !1);
                break;
              case "textarea":
                Us(e), Cf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + jn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? Br(e, !!r.multiple, s, !1) : r.defaultValue != null && Br(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Gi);
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
      return Fe(t), null;
    case 6:
      if (e && t.stateNode != null) fy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (n = nr(fs.current), nr(Ft.current), Zs(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Lt] = t, (s = r.nodeValue !== n) && (e = ot, e !== null)) switch (e.tag) {
            case 3:
              qs(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && qs(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Lt] = t, t.stateNode = r;
      }
      return Fe(t), null;
    case 13:
      if (le(de), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ue && rt !== null && t.mode & 1 && !(t.flags & 128)) Ag(), Zr(), t.flags |= 98560, s = !1;
        else if (s = Zs(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(R(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(R(317));
            s[Lt] = t;
          } else Zr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Fe(t), s = !1;
        } else Ct !== null && ($c(Ct), Ct = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || de.current & 1 ? Pe === 0 && (Pe = 3) : id())), t.updateQueue !== null && (t.flags |= 4), Fe(t), null);
    case 4:
      return eo(), Lc(e, t), e === null && ls(t.stateNode.containerInfo), Fe(t), null;
    case 10:
      return Uu(t.type._context), Fe(t), null;
    case 17:
      return Ze(t.type) && Yi(), Fe(t), null;
    case 19:
      if (le(de), s = t.memoizedState, s === null) return Fe(t), null;
      if (r = (t.flags & 128) !== 0, i = s.rendering, i === null) if (r) Do(s, !1);
      else {
        if (Pe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = ta(e), i !== null) {
            for (t.flags |= 128, Do(s, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, i = s.alternate, i === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = i.childLanes, s.lanes = i.lanes, s.child = i.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = i.memoizedProps, s.memoizedState = i.memoizedState, s.updateQueue = i.updateQueue, s.type = i.type, e = i.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return se(de, de.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && be() > no && (t.flags |= 128, r = !0, Do(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ta(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Do(s, !0), s.tail === null && s.tailMode === "hidden" && !i.alternate && !ue) return Fe(t), null;
        } else 2 * be() - s.renderingStartTime > no && n !== 1073741824 && (t.flags |= 128, r = !0, Do(s, !1), t.lanes = 4194304);
        s.isBackwards ? (i.sibling = t.child, t.child = i) : (n = s.last, n !== null ? n.sibling = i : t.child = i, s.last = i);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = be(), t.sibling = null, n = de.current, se(de, r ? n & 1 | 2 : n & 1), t) : (Fe(t), null);
    case 22:
    case 23:
      return sd(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? tt & 1073741824 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Fe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function Pb(e, t) {
  switch (Vu(t), t.tag) {
    case 1:
      return Ze(t.type) && Yi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return eo(), le(qe), le($e), Yu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Gu(t), null;
    case 13:
      if (le(de), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(R(340));
        Zr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return le(de), null;
    case 4:
      return eo(), null;
    case 10:
      return Uu(t.type._context), null;
    case 22:
    case 23:
      return sd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ti = !1, ze = !1, Db = typeof WeakSet == "function" ? WeakSet : Set, F = null;
function Lr(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ye(e, t, r);
  }
  else n.current = null;
}
function _c(e, t, n) {
  try {
    n();
  } catch (r) {
    ye(e, t, r);
  }
}
var pp = !1;
function Nb(e, t) {
  if (vc = Wi, e = yg(), Iu(e)) {
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
  for (xc = { focusedElem: e, selectionRange: n }, Wi = !1, F = t; F !== null; ) if (t = F, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, F = e;
  else for (; F !== null; ) {
    t = F;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var y = w.memoizedProps, b = w.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? y : St(t.type, y), b);
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
    } catch (S) {
      ye(t, t.return, S);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, F = e;
      break;
    }
    F = t.return;
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
        o.destroy = void 0, s !== void 0 && _c(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ma(e, t) {
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
function Oc(e) {
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
function py(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, py(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Lt], delete t[us], delete t[Sc], delete t[db], delete t[fb])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function hy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function hp(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || hy(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ic(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Gi));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ic(e, t, n), e = e.sibling; e !== null; ) Ic(e, t, n), e = e.sibling;
}
function Fc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Fc(e, t, n), e = e.sibling; e !== null; ) Fc(e, t, n), e = e.sibling;
}
var je = null, kt = !1;
function fn(e, t, n) {
  for (n = n.child; n !== null; ) my(e, t, n), n = n.sibling;
}
function my(e, t, n) {
  if (It && typeof It.onCommitFiberUnmount == "function") try {
    It.onCommitFiberUnmount(ka, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ze || Lr(n, t);
    case 6:
      var r = je, o = kt;
      je = null, fn(e, t, n), je = r, kt = o, je !== null && (kt ? (e = je, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : je.removeChild(n.stateNode));
      break;
    case 18:
      je !== null && (kt ? (e = je, n = n.stateNode, e.nodeType === 8 ? yl(e.parentNode, n) : e.nodeType === 1 && yl(e, n), ss(e)) : yl(je, n.stateNode));
      break;
    case 4:
      r = je, o = kt, je = n.stateNode.containerInfo, kt = !0, fn(e, t, n), je = r, kt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ze && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var s = o, i = s.destroy;
          s = s.tag, i !== void 0 && (s & 2 || s & 4) && _c(n, t, i), o = o.next;
        } while (o !== r);
      }
      fn(e, t, n);
      break;
    case 1:
      if (!ze && (Lr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        ye(n, t, a);
      }
      fn(e, t, n);
      break;
    case 21:
      fn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ze = (r = ze) || n.memoizedState !== null, fn(e, t, n), ze = r) : fn(e, t, n);
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
    n === null && (n = e.stateNode = new Db()), t.forEach(function(r) {
      var o = Fb.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function xt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var s = e, i = t, a = i;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            je = a.stateNode, kt = !1;
            break e;
          case 3:
            je = a.stateNode.containerInfo, kt = !0;
            break e;
          case 4:
            je = a.stateNode.containerInfo, kt = !0;
            break e;
        }
        a = a.return;
      }
      if (je === null) throw Error(R(160));
      my(s, i, o), je = null, kt = !1;
      var l = o.alternate;
      l !== null && (l.return = null), o.return = null;
    } catch (c) {
      ye(o, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) gy(t, e), t = t.sibling;
}
function gy(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (xt(t, e), Rt(e), r & 4) {
        try {
          Go(3, e, e.return), Ma(3, e);
        } catch (y) {
          ye(e, e.return, y);
        }
        try {
          Go(5, e, e.return);
        } catch (y) {
          ye(e, e.return, y);
        }
      }
      break;
    case 1:
      xt(t, e), Rt(e), r & 512 && n !== null && Lr(n, n.return);
      break;
    case 5:
      if (xt(t, e), Rt(e), r & 512 && n !== null && Lr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          ts(o, "");
        } catch (y) {
          ye(e, e.return, y);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var s = e.memoizedProps, i = n !== null ? n.memoizedProps : s, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && s.type === "radio" && s.name != null && Fm(o, s), lc(a, i);
          var c = lc(a, s);
          for (i = 0; i < l.length; i += 2) {
            var u = l[i], f = l[i + 1];
            u === "style" ? Um(o, f) : u === "dangerouslySetInnerHTML" ? Bm(o, f) : u === "children" ? ts(o, f) : Cu(o, u, f, c);
          }
          switch (a) {
            case "input":
              rc(o, s);
              break;
            case "textarea":
              Vm(o, s);
              break;
            case "select":
              var d = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!s.multiple;
              var g = s.value;
              g != null ? Br(o, !!s.multiple, g, !1) : d !== !!s.multiple && (s.defaultValue != null ? Br(
                o,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : Br(o, !!s.multiple, s.multiple ? [] : "", !1));
          }
          o[us] = s;
        } catch (y) {
          ye(e, e.return, y);
        }
      }
      break;
    case 6:
      if (xt(t, e), Rt(e), r & 4) {
        if (e.stateNode === null) throw Error(R(162));
        o = e.stateNode, s = e.memoizedProps;
        try {
          o.nodeValue = s;
        } catch (y) {
          ye(e, e.return, y);
        }
      }
      break;
    case 3:
      if (xt(t, e), Rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        ss(t.containerInfo);
      } catch (y) {
        ye(e, e.return, y);
      }
      break;
    case 4:
      xt(t, e), Rt(e);
      break;
    case 13:
      xt(t, e), Rt(e), o = e.child, o.flags & 8192 && (s = o.memoizedState !== null, o.stateNode.isHidden = s, !s || o.alternate !== null && o.alternate.memoizedState !== null || (rd = be())), r & 4 && mp(e);
      break;
    case 22:
      if (u = n !== null && n.memoizedState !== null, e.mode & 1 ? (ze = (c = ze) || u, xt(t, e), ze = c) : xt(t, e), Rt(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !u && e.mode & 1) for (F = e, u = e.child; u !== null; ) {
          for (f = F = u; F !== null; ) {
            switch (d = F, g = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Go(4, d, d.return);
                break;
              case 1:
                Lr(d, d.return);
                var w = d.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = d, n = d.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (y) {
                    ye(r, n, y);
                  }
                }
                break;
              case 5:
                Lr(d, d.return);
                break;
              case 22:
                if (d.memoizedState !== null) {
                  yp(f);
                  continue;
                }
            }
            g !== null ? (g.return = d, F = g) : yp(f);
          }
          u = u.sibling;
        }
        e: for (u = null, f = e; ; ) {
          if (f.tag === 5) {
            if (u === null) {
              u = f;
              try {
                o = f.stateNode, c ? (s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, i = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = $m("display", i));
              } catch (y) {
                ye(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (u === null) try {
              f.stateNode.nodeValue = c ? "" : f.memoizedProps;
            } catch (y) {
              ye(e, e.return, y);
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
      xt(t, e), Rt(e), r & 4 && mp(e);
      break;
    case 21:
      break;
    default:
      xt(
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
          if (hy(n)) {
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
          Fc(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, a = hp(e);
          Ic(e, a, i);
          break;
        default:
          throw Error(R(161));
      }
    } catch (l) {
      ye(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ab(e, t, n) {
  F = e, yy(e);
}
function yy(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var o = F, s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || ti;
      if (!i) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || ze;
        a = ti;
        var c = ze;
        if (ti = i, (ze = l) && !c) for (F = o; F !== null; ) i = F, l = i.child, i.tag === 22 && i.memoizedState !== null ? vp(o) : l !== null ? (l.return = i, F = l) : vp(o);
        for (; s !== null; ) F = s, yy(s), s = s.sibling;
        F = o, ti = a, ze = c;
      }
      gp(e);
    } else o.subtreeFlags & 8772 && s !== null ? (s.return = o, F = s) : gp(e);
  }
}
function gp(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ze || Ma(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ze) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : St(t.type, n.memoizedProps);
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
              var c = t.alternate;
              if (c !== null) {
                var u = c.memoizedState;
                if (u !== null) {
                  var f = u.dehydrated;
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
        ze || t.flags & 512 && Oc(t);
      } catch (d) {
        ye(t, t.return, d);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, F = n;
      break;
    }
    F = t.return;
  }
}
function yp(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, F = n;
      break;
    }
    F = t.return;
  }
}
function vp(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ma(4, t);
          } catch (l) {
            ye(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ye(t, o, l);
            }
          }
          var s = t.return;
          try {
            Oc(t);
          } catch (l) {
            ye(t, s, l);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Oc(t);
          } catch (l) {
            ye(t, i, l);
          }
      }
    } catch (l) {
      ye(t, t.return, l);
    }
    if (t === e) {
      F = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, F = a;
      break;
    }
    F = t.return;
  }
}
var Mb = Math.ceil, oa = ln.ReactCurrentDispatcher, td = ln.ReactCurrentOwner, gt = ln.ReactCurrentBatchConfig, Q = 0, Ae = null, ke = null, _e = 0, tt = 0, _r = $n(0), Pe = 0, gs = null, ur = 0, Ra = 0, nd = 0, Yo = null, Xe = null, rd = 0, no = 1 / 0, Ht = null, sa = !1, Vc = null, Nn = null, ni = !1, kn = null, ia = 0, Xo = 0, zc = null, Di = -1, Ni = 0;
function Ke() {
  return Q & 6 ? be() : Di !== -1 ? Di : Di = be();
}
function An(e) {
  return e.mode & 1 ? Q & 2 && _e !== 0 ? _e & -_e : hb.transition !== null ? (Ni === 0 && (Ni = tg()), Ni) : (e = te, e !== 0 || (e = window.event, e = e === void 0 ? 16 : lg(e.type)), e) : 1;
}
function Tt(e, t, n, r) {
  if (50 < Xo) throw Xo = 0, zc = null, Error(R(185));
  Ds(e, n, r), (!(Q & 2) || e !== Ae) && (e === Ae && (!(Q & 2) && (Ra |= n), Pe === 4 && bn(e, _e)), Je(e, r), n === 1 && Q === 0 && !(t.mode & 1) && (no = be() + 500, Da && Un()));
}
function Je(e, t) {
  var n = e.callbackNode;
  h1(e, t);
  var r = Ui(e, e === Ae ? _e : 0);
  if (r === 0) n !== null && Pf(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Pf(n), t === 1) e.tag === 0 ? pb(xp.bind(null, e)) : Pg(xp.bind(null, e)), cb(function() {
      !(Q & 6) && Un();
    }), n = null;
    else {
      switch (ng(r)) {
        case 1:
          n = Nu;
          break;
        case 4:
          n = Jm;
          break;
        case 16:
          n = $i;
          break;
        case 536870912:
          n = eg;
          break;
        default:
          n = $i;
      }
      n = Ey(n, vy.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function vy(e, t) {
  if (Di = -1, Ni = 0, Q & 6) throw Error(R(327));
  var n = e.callbackNode;
  if (Kr() && e.callbackNode !== n) return null;
  var r = Ui(e, e === Ae ? _e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = aa(e, r);
  else {
    t = r;
    var o = Q;
    Q |= 2;
    var s = wy();
    (Ae !== e || _e !== t) && (Ht = null, no = be() + 500, or(e, t));
    do
      try {
        Lb();
        break;
      } catch (a) {
        xy(e, a);
      }
    while (!0);
    $u(), oa.current = s, Q = o, ke !== null ? t = 0 : (Ae = null, _e = 0, t = Pe);
  }
  if (t !== 0) {
    if (t === 2 && (o = pc(e), o !== 0 && (r = o, t = Bc(e, o))), t === 1) throw n = gs, or(e, 0), bn(e, r), Je(e, be()), n;
    if (t === 6) bn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Rb(o) && (t = aa(e, r), t === 2 && (s = pc(e), s !== 0 && (r = s, t = Bc(e, s))), t === 1)) throw n = gs, or(e, 0), bn(e, r), Je(e, be()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          qn(e, Xe, Ht);
          break;
        case 3:
          if (bn(e, r), (r & 130023424) === r && (t = rd + 500 - be(), 10 < t)) {
            if (Ui(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Ke(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = bc(qn.bind(null, e, Xe, Ht), t);
            break;
          }
          qn(e, Xe, Ht);
          break;
        case 4:
          if (bn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Et(r);
            s = 1 << i, i = t[i], i > o && (o = i), r &= ~s;
          }
          if (r = o, r = be() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Mb(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = bc(qn.bind(null, e, Xe, Ht), r);
            break;
          }
          qn(e, Xe, Ht);
          break;
        case 5:
          qn(e, Xe, Ht);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Je(e, be()), e.callbackNode === n ? vy.bind(null, e) : null;
}
function Bc(e, t) {
  var n = Yo;
  return e.current.memoizedState.isDehydrated && (or(e, t).flags |= 256), e = aa(e, t), e !== 2 && (t = Xe, Xe = n, t !== null && $c(t)), e;
}
function $c(e) {
  Xe === null ? Xe = e : Xe.push.apply(Xe, e);
}
function Rb(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], s = o.getSnapshot;
        o = o.value;
        try {
          if (!Pt(s(), o)) return !1;
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
  for (t &= ~nd, t &= ~Ra, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Et(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function xp(e) {
  if (Q & 6) throw Error(R(327));
  Kr();
  var t = Ui(e, 0);
  if (!(t & 1)) return Je(e, be()), null;
  var n = aa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = pc(e);
    r !== 0 && (t = r, n = Bc(e, r));
  }
  if (n === 1) throw n = gs, or(e, 0), bn(e, t), Je(e, be()), n;
  if (n === 6) throw Error(R(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, qn(e, Xe, Ht), Je(e, be()), null;
}
function od(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    Q = n, Q === 0 && (no = be() + 500, Da && Un());
  }
}
function dr(e) {
  kn !== null && kn.tag === 0 && !(Q & 6) && Kr();
  var t = Q;
  Q |= 1;
  var n = gt.transition, r = te;
  try {
    if (gt.transition = null, te = 1, e) return e();
  } finally {
    te = r, gt.transition = n, Q = t, !(Q & 6) && Un();
  }
}
function sd() {
  tt = _r.current, le(_r);
}
function or(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, lb(n)), ke !== null) for (n = ke.return; n !== null; ) {
    var r = n;
    switch (Vu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Yi();
        break;
      case 3:
        eo(), le(qe), le($e), Yu();
        break;
      case 5:
        Gu(r);
        break;
      case 4:
        eo();
        break;
      case 13:
        le(de);
        break;
      case 19:
        le(de);
        break;
      case 10:
        Uu(r.type._context);
        break;
      case 22:
      case 23:
        sd();
    }
    n = n.return;
  }
  if (Ae = e, ke = e = Mn(e.current, null), _e = tt = t, Pe = 0, gs = null, nd = Ra = ur = 0, Xe = Yo = null, tr !== null) {
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
function xy(e, t) {
  do {
    var n = ke;
    try {
      if ($u(), Ei.current = ra, na) {
        for (var r = pe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        na = !1;
      }
      if (cr = 0, Ne = Te = pe = null, Ko = !1, ps = 0, td.current = null, n === null || n.return === null) {
        Pe = 1, gs = t, ke = null;
        break;
      }
      e: {
        var s = e, i = n.return, a = n, l = t;
        if (t = _e, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var c = l, u = a, f = u.tag;
          if (!(u.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = u.alternate;
            d ? (u.updateQueue = d.updateQueue, u.memoizedState = d.memoizedState, u.lanes = d.lanes) : (u.updateQueue = null, u.memoizedState = null);
          }
          var g = ip(i);
          if (g !== null) {
            g.flags &= -257, ap(g, i, a, s, t), g.mode & 1 && sp(s, c, t), t = g, l = c;
            var w = t.updateQueue;
            if (w === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(l), t.updateQueue = y;
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              sp(s, c, t), id();
              break e;
            }
            l = Error(R(426));
          }
        } else if (ue && a.mode & 1) {
          var b = ip(i);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256), ap(b, i, a, s, t), zu(to(l, a));
            break e;
          }
        }
        s = l = to(l, a), Pe !== 4 && (Pe = 2), Yo === null ? Yo = [s] : Yo.push(s), s = i;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var m = ny(s, l, t);
              Jf(s, m);
              break e;
            case 1:
              a = l;
              var h = s.type, v = s.stateNode;
              if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Nn === null || !Nn.has(v)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var S = ry(s, a, t);
                Jf(s, S);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Sy(n);
    } catch (k) {
      t = k, ke === n && n !== null && (ke = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function wy() {
  var e = oa.current;
  return oa.current = ra, e === null ? ra : e;
}
function id() {
  (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4), Ae === null || !(ur & 268435455) && !(Ra & 268435455) || bn(Ae, _e);
}
function aa(e, t) {
  var n = Q;
  Q |= 2;
  var r = wy();
  (Ae !== e || _e !== t) && (Ht = null, or(e, t));
  do
    try {
      jb();
      break;
    } catch (o) {
      xy(e, o);
    }
  while (!0);
  if ($u(), Q = n, oa.current = r, ke !== null) throw Error(R(261));
  return Ae = null, _e = 0, Pe;
}
function jb() {
  for (; ke !== null; ) by(ke);
}
function Lb() {
  for (; ke !== null && !s1(); ) by(ke);
}
function by(e) {
  var t = Cy(e.alternate, e, tt);
  e.memoizedProps = e.pendingProps, t === null ? Sy(e) : ke = t, td.current = null;
}
function Sy(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Pb(n, t), n !== null) {
        n.flags &= 32767, ke = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Pe = 6, ke = null;
        return;
      }
    } else if (n = Tb(n, t, tt), n !== null) {
      ke = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ke = t;
      return;
    }
    ke = t = e;
  } while (t !== null);
  Pe === 0 && (Pe = 5);
}
function qn(e, t, n) {
  var r = te, o = gt.transition;
  try {
    gt.transition = null, te = 1, _b(e, t, n, r);
  } finally {
    gt.transition = o, te = r;
  }
  return null;
}
function _b(e, t, n, r) {
  do
    Kr();
  while (kn !== null);
  if (Q & 6) throw Error(R(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(R(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (m1(e, s), e === Ae && (ke = Ae = null, _e = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ni || (ni = !0, Ey($i, function() {
    return Kr(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = gt.transition, gt.transition = null;
    var i = te;
    te = 1;
    var a = Q;
    Q |= 4, td.current = null, Nb(e, n), gy(n, e), tb(xc), Wi = !!vc, xc = vc = null, e.current = n, Ab(n), i1(), Q = a, te = i, gt.transition = s;
  } else e.current = n;
  if (ni && (ni = !1, kn = e, ia = o), s = e.pendingLanes, s === 0 && (Nn = null), c1(n.stateNode), Je(e, be()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (sa) throw sa = !1, e = Vc, Vc = null, e;
  return ia & 1 && e.tag !== 0 && Kr(), s = e.pendingLanes, s & 1 ? e === zc ? Xo++ : (Xo = 0, zc = e) : Xo = 0, Un(), null;
}
function Kr() {
  if (kn !== null) {
    var e = ng(ia), t = gt.transition, n = te;
    try {
      if (gt.transition = null, te = 16 > e ? 16 : e, kn === null) var r = !1;
      else {
        if (e = kn, kn = null, ia = 0, Q & 6) throw Error(R(331));
        var o = Q;
        for (Q |= 4, F = e.current; F !== null; ) {
          var s = F, i = s.child;
          if (F.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (F = c; F !== null; ) {
                  var u = F;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Go(8, u, s);
                  }
                  var f = u.child;
                  if (f !== null) f.return = u, F = f;
                  else for (; F !== null; ) {
                    u = F;
                    var d = u.sibling, g = u.return;
                    if (py(u), u === c) {
                      F = null;
                      break;
                    }
                    if (d !== null) {
                      d.return = g, F = d;
                      break;
                    }
                    F = g;
                  }
                }
              }
              var w = s.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var b = y.sibling;
                    y.sibling = null, y = b;
                  } while (y !== null);
                }
              }
              F = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) i.return = s, F = i;
          else e: for (; F !== null; ) {
            if (s = F, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                Go(9, s, s.return);
            }
            var m = s.sibling;
            if (m !== null) {
              m.return = s.return, F = m;
              break e;
            }
            F = s.return;
          }
        }
        var h = e.current;
        for (F = h; F !== null; ) {
          i = F;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) v.return = i, F = v;
          else e: for (i = h; F !== null; ) {
            if (a = F, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  Ma(9, a);
              }
            } catch (k) {
              ye(a, a.return, k);
            }
            if (a === i) {
              F = null;
              break e;
            }
            var S = a.sibling;
            if (S !== null) {
              S.return = a.return, F = S;
              break e;
            }
            F = a.return;
          }
        }
        if (Q = o, Un(), It && typeof It.onPostCommitFiberRoot == "function") try {
          It.onPostCommitFiberRoot(ka, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      te = n, gt.transition = t;
    }
  }
  return !1;
}
function wp(e, t, n) {
  t = to(n, t), t = ny(e, t, 1), e = Dn(e, t, 1), t = Ke(), e !== null && (Ds(e, 1, t), Je(e, t));
}
function ye(e, t, n) {
  if (e.tag === 3) wp(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      wp(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Nn === null || !Nn.has(r))) {
        e = to(n, e), e = ry(t, e, 1), t = Dn(t, e, 1), e = Ke(), t !== null && (Ds(t, 1, e), Je(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Ob(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ke(), e.pingedLanes |= e.suspendedLanes & n, Ae === e && (_e & n) === n && (Pe === 4 || Pe === 3 && (_e & 130023424) === _e && 500 > be() - rd ? or(e, 0) : nd |= n), Je(e, t);
}
function ky(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ks, Ks <<= 1, !(Ks & 130023424) && (Ks = 4194304)) : t = 1);
  var n = Ke();
  e = nn(e, t), e !== null && (Ds(e, t, n), Je(e, n));
}
function Ib(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ky(e, n);
}
function Fb(e, t) {
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
  r !== null && r.delete(t), ky(e, n);
}
var Cy;
Cy = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || qe.current) Qe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Qe = !1, Eb(e, t, n);
    Qe = !!(e.flags & 131072);
  }
  else Qe = !1, ue && t.flags & 1048576 && Dg(t, qi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Pi(e, t), e = t.pendingProps;
      var o = qr(t, $e.current);
      Hr(t, n), o = Qu(null, t, r, e, o, n);
      var s = qu();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ze(r) ? (s = !0, Xi(t)) : s = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Hu(t), o.updater = Aa, t.stateNode = o, o._reactInternals = t, Dc(t, r, e, n), t = Mc(null, t, r, !0, s, n)) : (t.tag = 0, ue && s && Fu(t), He(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Pi(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = zb(r), e = St(r, e), o) {
          case 0:
            t = Ac(null, t, r, e, n);
            break e;
          case 1:
            t = up(null, t, r, e, n);
            break e;
          case 11:
            t = lp(null, t, r, e, n);
            break e;
          case 14:
            t = cp(null, t, r, St(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : St(r, o), Ac(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : St(r, o), up(e, t, r, o, n);
    case 3:
      e: {
        if (ay(t), e === null) throw Error(R(387));
        r = t.pendingProps, s = t.memoizedState, o = s.element, Lg(e, t), ea(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          o = to(Error(R(423)), t), t = dp(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = to(Error(R(424)), t), t = dp(e, t, r, n, o);
          break e;
        } else for (rt = Pn(t.stateNode.containerInfo.firstChild), ot = t, ue = !0, Ct = null, n = Rg(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Zr(), r === o) {
            t = rn(e, t, n);
            break e;
          }
          He(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return _g(t), e === null && Ec(t), r = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, i = o.children, wc(r, o) ? i = null : s !== null && wc(r, s) && (t.flags |= 32), iy(e, t), He(e, t, i, n), t.child;
    case 6:
      return e === null && Ec(t), null;
    case 13:
      return ly(e, t, n);
    case 4:
      return Ku(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Jr(t, null, r, n) : He(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : St(r, o), lp(e, t, r, o, n);
    case 7:
      return He(e, t, t.pendingProps, n), t.child;
    case 8:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, s = t.memoizedProps, i = o.value, se(Zi, r._currentValue), r._currentValue = i, s !== null) if (Pt(s.value, i)) {
          if (s.children === o.children && !qe.current) {
            t = rn(e, t, n);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var a = s.dependencies;
          if (a !== null) {
            i = s.child;
            for (var l = a.firstContext; l !== null; ) {
              if (l.context === r) {
                if (s.tag === 1) {
                  l = Qt(-1, n & -n), l.tag = 2;
                  var c = s.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var u = c.pending;
                    u === null ? l.next = l : (l.next = u.next, u.next = l), c.pending = l;
                  }
                }
                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Tc(
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
            i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Tc(i, n, t), i = s.sibling;
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
      return o = t.type, r = t.pendingProps.children, Hr(t, n), o = yt(o), r = r(o), t.flags |= 1, He(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = St(r, t.pendingProps), o = St(r.type, o), cp(e, t, r, o, n);
    case 15:
      return oy(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : St(r, o), Pi(e, t), t.tag = 1, Ze(r) ? (e = !0, Xi(t)) : e = !1, Hr(t, n), ty(t, r, o), Dc(t, r, o, n), Mc(null, t, r, !0, e, n);
    case 19:
      return cy(e, t, n);
    case 22:
      return sy(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function Ey(e, t) {
  return Zm(e, t);
}
function Vb(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function mt(e, t, n, r) {
  return new Vb(e, t, n, r);
}
function ad(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function zb(e) {
  if (typeof e == "function") return ad(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Tu) return 11;
    if (e === Pu) return 14;
  }
  return 2;
}
function Mn(e, t) {
  var n = e.alternate;
  return n === null ? (n = mt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ai(e, t, n, r, o, s) {
  var i = 2;
  if (r = e, typeof e == "function") ad(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Er:
      return sr(n.children, o, s, t);
    case Eu:
      i = 8, o |= 8;
      break;
    case Zl:
      return e = mt(12, n, t, o | 2), e.elementType = Zl, e.lanes = s, e;
    case Jl:
      return e = mt(13, n, t, o), e.elementType = Jl, e.lanes = s, e;
    case ec:
      return e = mt(19, n, t, o), e.elementType = ec, e.lanes = s, e;
    case _m:
      return ja(n, o, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case jm:
          i = 10;
          break e;
        case Lm:
          i = 9;
          break e;
        case Tu:
          i = 11;
          break e;
        case Pu:
          i = 14;
          break e;
        case vn:
          i = 16, r = null;
          break e;
      }
      throw Error(R(130, e == null ? e : typeof e, ""));
  }
  return t = mt(i, n, t, o), t.elementType = e, t.type = r, t.lanes = s, t;
}
function sr(e, t, n, r) {
  return e = mt(7, e, r, t), e.lanes = n, e;
}
function ja(e, t, n, r) {
  return e = mt(22, e, r, t), e.elementType = _m, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function El(e, t, n) {
  return e = mt(6, e, null, t), e.lanes = n, e;
}
function Tl(e, t, n) {
  return t = mt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Bb(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = il(0), this.expirationTimes = il(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = il(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function ld(e, t, n, r, o, s, i, a, l) {
  return e = new Bb(e, t, n, a, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = mt(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Hu(s), e;
}
function $b(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Cr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Ty(e) {
  if (!e) return Ln;
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
    if (Ze(n)) return Tg(e, n, t);
  }
  return t;
}
function Py(e, t, n, r, o, s, i, a, l) {
  return e = ld(n, r, !0, e, o, s, i, a, l), e.context = Ty(null), n = e.current, r = Ke(), o = An(n), s = Qt(r, o), s.callback = t ?? null, Dn(n, s, o), e.current.lanes = o, Ds(e, o, r), Je(e, r), e;
}
function La(e, t, n, r) {
  var o = t.current, s = Ke(), i = An(o);
  return n = Ty(n), t.context === null ? t.context = n : t.pendingContext = n, t = Qt(s, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Dn(o, t, i), e !== null && (Tt(e, o, i, s), Ci(e, o, i)), i;
}
function la(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function bp(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function cd(e, t) {
  bp(e, t), (e = e.alternate) && bp(e, t);
}
function Ub() {
  return null;
}
var Dy = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ud(e) {
  this._internalRoot = e;
}
_a.prototype.render = ud.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  La(e, t, null, null);
};
_a.prototype.unmount = ud.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    dr(function() {
      La(null, e, null, null);
    }), t[tn] = null;
  }
};
function _a(e) {
  this._internalRoot = e;
}
_a.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = sg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < wn.length && t !== 0 && t < wn[n].priority; n++) ;
    wn.splice(n, 0, e), n === 0 && ag(e);
  }
};
function dd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Oa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Sp() {
}
function Wb(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var c = la(i);
        s.call(c);
      };
    }
    var i = Py(t, r, e, 0, null, !1, !1, "", Sp);
    return e._reactRootContainer = i, e[tn] = i.current, ls(e.nodeType === 8 ? e.parentNode : e), dr(), i;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var c = la(l);
      a.call(c);
    };
  }
  var l = ld(e, 0, !1, null, null, !1, !1, "", Sp);
  return e._reactRootContainer = l, e[tn] = l.current, ls(e.nodeType === 8 ? e.parentNode : e), dr(function() {
    La(t, l, n, r);
  }), l;
}
function Ia(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = la(i);
        a.call(l);
      };
    }
    La(t, i, e, o);
  } else i = Wb(n, t, e, o, r);
  return la(i);
}
rg = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _o(t.pendingLanes);
        n !== 0 && (Au(t, n | 1), Je(t, be()), !(Q & 6) && (no = be() + 500, Un()));
      }
      break;
    case 13:
      dr(function() {
        var r = nn(e, 1);
        if (r !== null) {
          var o = Ke();
          Tt(r, e, 1, o);
        }
      }), cd(e, 1);
  }
};
Mu = function(e) {
  if (e.tag === 13) {
    var t = nn(e, 134217728);
    if (t !== null) {
      var n = Ke();
      Tt(t, e, 134217728, n);
    }
    cd(e, 134217728);
  }
};
og = function(e) {
  if (e.tag === 13) {
    var t = An(e), n = nn(e, t);
    if (n !== null) {
      var r = Ke();
      Tt(n, e, t, r);
    }
    cd(e, t);
  }
};
sg = function() {
  return te;
};
ig = function(e, t) {
  var n = te;
  try {
    return te = e, t();
  } finally {
    te = n;
  }
};
uc = function(e, t, n) {
  switch (t) {
    case "input":
      if (rc(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Pa(r);
            if (!o) throw Error(R(90));
            Im(r), rc(r, o);
          }
        }
      }
      break;
    case "textarea":
      Vm(e, n);
      break;
    case "select":
      t = n.value, t != null && Br(e, !!n.multiple, t, !1);
  }
};
Km = od;
Gm = dr;
var Hb = { usingClientEntryPoint: !1, Events: [As, Nr, Pa, Wm, Hm, od] }, No = { findFiberByHostInstance: er, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Kb = { bundleType: No.bundleType, version: No.version, rendererPackageName: No.rendererPackageName, rendererConfig: No.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ln.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Qm(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: No.findFiberByHostInstance || Ub, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ri = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ri.isDisabled && ri.supportsFiber) try {
    ka = ri.inject(Kb), It = ri;
  } catch {
  }
}
ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hb;
ct.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!dd(t)) throw Error(R(200));
  return $b(e, t, null, n);
};
ct.createRoot = function(e, t) {
  if (!dd(e)) throw Error(R(299));
  var n = !1, r = "", o = Dy;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = ld(e, 1, !1, null, null, n, !1, r, o), e[tn] = t.current, ls(e.nodeType === 8 ? e.parentNode : e), new ud(t);
};
ct.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","), Error(R(268, e)));
  return e = Qm(t), e = e === null ? null : e.stateNode, e;
};
ct.flushSync = function(e) {
  return dr(e);
};
ct.hydrate = function(e, t, n) {
  if (!Oa(t)) throw Error(R(200));
  return Ia(null, e, t, !0, n);
};
ct.hydrateRoot = function(e, t, n) {
  if (!dd(e)) throw Error(R(405));
  var r = n != null && n.hydratedSources || null, o = !1, s = "", i = Dy;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Py(t, null, e, 1, n ?? null, o, !1, s, i), e[tn] = t.current, ls(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new _a(t);
};
ct.render = function(e, t, n) {
  if (!Oa(t)) throw Error(R(200));
  return Ia(null, e, t, !1, n);
};
ct.unmountComponentAtNode = function(e) {
  if (!Oa(e)) throw Error(R(40));
  return e._reactRootContainer ? (dr(function() {
    Ia(null, null, e, !1, function() {
      e._reactRootContainer = null, e[tn] = null;
    });
  }), !0) : !1;
};
ct.unstable_batchedUpdates = od;
ct.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Oa(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return Ia(e, t, n, !1, r);
};
ct.version = "18.3.1-next-f1338f8080-20240426";
function Ny() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ny);
    } catch (e) {
      console.error(e);
    }
}
Ny(), Nm.exports = ct;
var po = Nm.exports;
const Gb = /* @__PURE__ */ gm(po);
var Fa, kp = po;
Fa = kp.createRoot, kp.hydrateRoot;
function Ay(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ay(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Yb() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ay(e)) && (r && (r += " "), r += t);
  return r;
}
const fd = "-", Xb = (e) => {
  const t = qb(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(fd);
      return a[0] === "" && a.length !== 1 && a.shift(), My(a, t) || Qb(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const l = n[i] || [];
      return a && r[i] ? [...l, ...r[i]] : l;
    }
  };
}, My = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? My(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(fd);
  return (i = t.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : i.classGroupId;
}, Cp = /^\[(.+)\]$/, Qb = (e) => {
  if (Cp.test(e)) {
    const t = Cp.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, qb = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Jb(Object.entries(e.classGroups), n).forEach(([s, i]) => {
    Uc(i, r, s, t);
  }), r;
}, Uc = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Ep(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Zb(o)) {
        Uc(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      Uc(i, Ep(t, s), n, r);
    });
  });
}, Ep = (e, t) => {
  let n = e;
  return t.split(fd).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, Zb = (e) => e.isThemeGetter, Jb = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a])) : s);
  return [n, o];
}) : e, eS = (e) => {
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
}, Ry = "!", tS = (e) => {
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
    const d = l.length === 0 ? a : a.substring(u), g = d.startsWith(Ry), w = g ? d.substring(1) : d, y = f && f > u ? f - u : void 0;
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
}, nS = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, rS = (e) => ({
  cache: eS(e.cacheSize),
  parseClassName: tS(e),
  ...Xb(e)
}), oS = /\s+/, sS = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, s = [], i = e.trim().split(oS);
  let a = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const c = i[l], {
      modifiers: u,
      hasImportantModifier: f,
      baseClassName: d,
      maybePostfixModifierPosition: g
    } = n(c);
    let w = !!g, y = r(w ? d.substring(0, g) : d);
    if (!y) {
      if (!w) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (y = r(d), !y) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      w = !1;
    }
    const b = nS(u).join(":"), m = f ? b + Ry : b, h = m + y;
    if (s.includes(h))
      continue;
    s.push(h);
    const v = o(y, w);
    for (let S = 0; S < v.length; ++S) {
      const k = v[S];
      s.push(m + k);
    }
    a = c + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function iS() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = jy(t)) && (r && (r += " "), r += n);
  return r;
}
const jy = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = jy(e[r])) && (n && (n += " "), n += t);
  return n;
};
function aS(e, ...t) {
  let n, r, o, s = i;
  function i(l) {
    const c = t.reduce((u, f) => f(u), e());
    return n = rS(c), r = n.cache.get, o = n.cache.set, s = a, a(l);
  }
  function a(l) {
    const c = r(l);
    if (c)
      return c;
    const u = sS(l, n);
    return o(l, u), u;
  }
  return function() {
    return s(iS.apply(null, arguments));
  };
}
const ie = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Ly = /^\[(?:([a-z-]+):)?(.+)\]$/i, lS = /^\d+\/\d+$/, cS = /* @__PURE__ */ new Set(["px", "full", "screen"]), uS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, dS = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, fS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, pS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, hS = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Wt = (e) => Gr(e) || cS.has(e) || lS.test(e), pn = (e) => ho(e, "length", SS), Gr = (e) => !!e && !Number.isNaN(Number(e)), Pl = (e) => ho(e, "number", Gr), Ao = (e) => !!e && Number.isInteger(Number(e)), mS = (e) => e.endsWith("%") && Gr(e.slice(0, -1)), H = (e) => Ly.test(e), hn = (e) => uS.test(e), gS = /* @__PURE__ */ new Set(["length", "size", "percentage"]), yS = (e) => ho(e, gS, _y), vS = (e) => ho(e, "position", _y), xS = /* @__PURE__ */ new Set(["image", "url"]), wS = (e) => ho(e, xS, CS), bS = (e) => ho(e, "", kS), Mo = () => !0, ho = (e, t, n) => {
  const r = Ly.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, SS = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  dS.test(e) && !fS.test(e)
), _y = () => !1, kS = (e) => pS.test(e), CS = (e) => hS.test(e), ES = () => {
  const e = ie("colors"), t = ie("spacing"), n = ie("blur"), r = ie("brightness"), o = ie("borderColor"), s = ie("borderRadius"), i = ie("borderSpacing"), a = ie("borderWidth"), l = ie("contrast"), c = ie("grayscale"), u = ie("hueRotate"), f = ie("invert"), d = ie("gap"), g = ie("gradientColorStops"), w = ie("gradientColorStopPositions"), y = ie("inset"), b = ie("margin"), m = ie("opacity"), h = ie("padding"), v = ie("saturate"), S = ie("scale"), k = ie("sepia"), E = ie("skew"), C = ie("space"), T = ie("translate"), M = () => ["auto", "contain", "none"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", H, t], A = () => [H, t], L = () => ["", Wt, pn], O = () => ["auto", Gr, H], B = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], V = () => ["solid", "dashed", "dotted", "double", "none"], z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], N = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], j = () => ["", "0", H], I = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], W = () => [Gr, H];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Mo],
      spacing: [Wt, pn],
      blur: ["none", "", hn, H],
      brightness: W(),
      borderColor: [e],
      borderRadius: ["none", "", "full", hn, H],
      borderSpacing: A(),
      borderWidth: L(),
      contrast: W(),
      grayscale: j(),
      hueRotate: W(),
      invert: j(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [mS, pn],
      inset: P(),
      margin: P(),
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
        object: [...B(), H]
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
        overscroll: M()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": M()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": M()
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
        order: ["first", "last", "none", Ao, H]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Mo]
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
        "col-start": O()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": O()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Mo]
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
        "row-start": O()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": O()
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
        justify: ["normal", ...N()]
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
        content: ["normal", ...N(), "baseline"]
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
        "place-content": [...N(), "baseline"]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Pl]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Mo]
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
        "line-clamp": ["none", Gr, Pl]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Wt, H]
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
        decoration: [...V(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Wt, pn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Wt, H]
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
        bg: [...B(), vS]
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
        bg: ["auto", "cover", "contain", yS]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, wS]
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
        "outline-offset": [Wt, H]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Wt, pn]
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
        "ring-opacity": [m]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Wt, pn]
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
        shadow: ["", "inner", "none", hn, bS]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Mo]
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
        stroke: [Wt, pn, Pl]
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
}, TS = /* @__PURE__ */ aS(ES);
function ve(...e) {
  return TS(Yb(e));
}
function pd({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card",
      className: ve(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        e
      ),
      ...t
    }
  );
}
function Oy({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: ve("px-6", e),
      ...t
    }
  );
}
function PS({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: ve("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
const qt = x.forwardRef(
  ({ className: e, variant: t = "default", size: n = "default", ...r }, o) => /* @__PURE__ */ p.jsx(
    "button",
    {
      className: ve(
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
qt.displayName = "Button";
function Tp(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function X(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function DS(e, t) {
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
function mo(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = x.createContext(i), l = n.length;
    n = [...n, i];
    const c = (f) => {
      var m;
      const { scope: d, children: g, ...w } = f, y = ((m = d == null ? void 0 : d[e]) == null ? void 0 : m[l]) || a, b = x.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ p.jsx(y.Provider, { value: b, children: g });
    };
    c.displayName = s + "Provider";
    function u(f, d) {
      var y;
      const g = ((y = d == null ? void 0 : d[e]) == null ? void 0 : y[l]) || a, w = x.useContext(g);
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
  return o.scopeName = e, [r, NS(o, ...t)];
}
function NS(...e) {
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
function xe(...e) {
  return x.useCallback(Iy(...e), e);
}
// @__NO_SIDE_EFFECTS__
function ys(e) {
  const t = /* @__PURE__ */ AS(e), n = x.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = x.Children.toArray(s), l = a.find(RS);
    if (l) {
      const c = l.props.children, u = a.map((f) => f === l ? x.Children.count(c) > 1 ? x.Children.only(null) : x.isValidElement(c) ? c.props.children : null : f);
      return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: x.isValidElement(c) ? x.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function AS(e) {
  const t = x.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (x.isValidElement(o)) {
      const i = LS(o), a = jS(s, o.props);
      return o.type !== x.Fragment && (a.ref = r ? Iy(r, i) : i), x.cloneElement(o, a);
    }
    return x.Children.count(o) > 1 ? x.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var MS = Symbol("radix.slottable");
function RS(e) {
  return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === MS;
}
function jS(e, t) {
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
function LS(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Fy(e) {
  const t = e + "CollectionProvider", [n, r] = mo(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (y) => {
    const { scope: b, children: m } = y, h = G.useRef(null), v = G.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p.jsx(o, { scope: b, itemMap: v, collectionRef: h, children: m });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ ys(a), c = G.forwardRef(
    (y, b) => {
      const { scope: m, children: h } = y, v = s(a, m), S = xe(b, v.collectionRef);
      return /* @__PURE__ */ p.jsx(l, { ref: S, children: h });
    }
  );
  c.displayName = a;
  const u = e + "CollectionItemSlot", f = "data-radix-collection-item", d = /* @__PURE__ */ ys(u), g = G.forwardRef(
    (y, b) => {
      const { scope: m, children: h, ...v } = y, S = G.useRef(null), k = xe(b, S), E = s(u, m);
      return G.useEffect(() => (E.itemMap.set(S, { ref: S, ...v }), () => void E.itemMap.delete(S))), /* @__PURE__ */ p.jsx(d, { [f]: "", ref: k, children: h });
    }
  );
  g.displayName = u;
  function w(y) {
    const b = s(e + "CollectionConsumer", y);
    return G.useCallback(() => {
      const h = b.collectionRef.current;
      if (!h) return [];
      const v = Array.from(h.querySelectorAll(`[${f}]`));
      return Array.from(b.itemMap.values()).sort(
        (E, C) => v.indexOf(E.ref.current) - v.indexOf(C.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [
    { Provider: i, Slot: c, ItemSlot: g },
    w,
    r
  ];
}
var _S = x.createContext(void 0);
function hd(e) {
  const t = x.useContext(_S);
  return e || t || "ltr";
}
var OS = [
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
], q = OS.reduce((e, t) => {
  const n = /* @__PURE__ */ ys(`Primitive.${t}`), r = x.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function IS(e, t) {
  e && po.flushSync(() => e.dispatchEvent(t));
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
function FS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _n(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var VS = "DismissableLayer", Wc = "dismissableLayer.update", zS = "dismissableLayer.pointerDownOutside", BS = "dismissableLayer.focusOutside", Dp, Vy = x.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), md = x.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...l
    } = e, c = x.useContext(Vy), [u, f] = x.useState(null), d = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = x.useState({}), w = xe(t, (C) => f(C)), y = Array.from(c.layers), [b] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), m = y.indexOf(b), h = u ? y.indexOf(u) : -1, v = c.layersWithOutsidePointerEventsDisabled.size > 0, S = h >= m, k = WS((C) => {
      const T = C.target, M = [...c.branches].some((D) => D.contains(T));
      !S || M || (o == null || o(C), i == null || i(C), C.defaultPrevented || a == null || a());
    }, d), E = HS((C) => {
      const T = C.target;
      [...c.branches].some((D) => D.contains(T)) || (s == null || s(C), i == null || i(C), C.defaultPrevented || a == null || a());
    }, d);
    return FS((C) => {
      h === c.layers.size - 1 && (r == null || r(C), !C.defaultPrevented && a && (C.preventDefault(), a()));
    }, d), x.useEffect(() => {
      if (u)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Dp = d.body.style.pointerEvents, d.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), Np(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = Dp);
        };
    }, [u, d, n, c]), x.useEffect(() => () => {
      u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), Np());
    }, [u, c]), x.useEffect(() => {
      const C = () => g({});
      return document.addEventListener(Wc, C), () => document.removeEventListener(Wc, C);
    }, []), /* @__PURE__ */ p.jsx(
      q.div,
      {
        ...l,
        ref: w,
        style: {
          pointerEvents: v ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: X(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: X(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: X(
          e.onPointerDownCapture,
          k.onPointerDownCapture
        )
      }
    );
  }
);
md.displayName = VS;
var $S = "DismissableLayerBranch", US = x.forwardRef((e, t) => {
  const n = x.useContext(Vy), r = x.useRef(null), o = xe(t, r);
  return x.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ p.jsx(q.div, { ...e, ref: o });
});
US.displayName = $S;
function WS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _n(e), r = x.useRef(!1), o = x.useRef(() => {
  });
  return x.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          zy(
            zS,
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
function HS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _n(e), r = x.useRef(!1);
  return x.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && zy(BS, n, { originalEvent: s }, {
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
  const e = new CustomEvent(Wc);
  document.dispatchEvent(e);
}
function zy(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? IS(o, s) : o.dispatchEvent(s);
}
var Dl = 0;
function By() {
  x.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ap()), document.body.insertAdjacentElement("beforeend", e[1] ?? Ap()), Dl++, () => {
      Dl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Dl--;
    };
  }, []);
}
function Ap() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Nl = "focusScope.autoFocusOnMount", Al = "focusScope.autoFocusOnUnmount", Mp = { bubbles: !1, cancelable: !0 }, KS = "FocusScope", gd = x.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = x.useState(null), c = _n(o), u = _n(s), f = x.useRef(null), d = xe(t, (y) => l(y)), g = x.useRef({
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
        const S = v.target;
        a.contains(S) ? f.current = S : gn(f.current, { select: !0 });
      }, b = function(v) {
        if (g.paused || !a) return;
        const S = v.relatedTarget;
        S !== null && (a.contains(S) || gn(f.current, { select: !0 }));
      }, m = function(v) {
        if (document.activeElement === document.body)
          for (const k of v)
            k.removedNodes.length > 0 && gn(a);
      };
      document.addEventListener("focusin", y), document.addEventListener("focusout", b);
      const h = new MutationObserver(m);
      return a && h.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", b), h.disconnect();
      };
    }
  }, [r, a, g.paused]), x.useEffect(() => {
    if (a) {
      jp.add(g);
      const y = document.activeElement;
      if (!a.contains(y)) {
        const m = new CustomEvent(Nl, Mp);
        a.addEventListener(Nl, c), a.dispatchEvent(m), m.defaultPrevented || (GS(ZS($y(a)), { select: !0 }), document.activeElement === y && gn(a));
      }
      return () => {
        a.removeEventListener(Nl, c), setTimeout(() => {
          const m = new CustomEvent(Al, Mp);
          a.addEventListener(Al, u), a.dispatchEvent(m), m.defaultPrevented || gn(y ?? document.body, { select: !0 }), a.removeEventListener(Al, u), jp.remove(g);
        }, 0);
      };
    }
  }, [a, c, u, g]);
  const w = x.useCallback(
    (y) => {
      if (!n && !r || g.paused) return;
      const b = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, m = document.activeElement;
      if (b && m) {
        const h = y.currentTarget, [v, S] = YS(h);
        v && S ? !y.shiftKey && m === S ? (y.preventDefault(), n && gn(v, { select: !0 })) : y.shiftKey && m === v && (y.preventDefault(), n && gn(S, { select: !0 })) : m === h && y.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ p.jsx(q.div, { tabIndex: -1, ...i, ref: d, onKeyDown: w });
});
gd.displayName = KS;
function GS(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (gn(r, { select: t }), document.activeElement !== n) return;
}
function YS(e) {
  const t = $y(e), n = Rp(t, e), r = Rp(t.reverse(), e);
  return [n, r];
}
function $y(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Rp(e, t) {
  for (const n of e)
    if (!XS(n, { upTo: t })) return n;
}
function XS(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function QS(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function gn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && QS(e) && t && e.select();
  }
}
var jp = qS();
function qS() {
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
function ZS(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ue = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {
}, JS = Pm[" useId ".trim().toString()] || (() => {
}), ek = 0;
function Rn(e) {
  const [t, n] = x.useState(JS());
  return Ue(() => {
    n((r) => r ?? String(ek++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const tk = ["top", "right", "bottom", "left"], On = Math.min, nt = Math.max, ca = Math.round, oi = Math.floor, Vt = (e) => ({
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
function Hc(e, t, n) {
  return nt(e, On(t, n));
}
function on(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function sn(e) {
  return e.split("-")[0];
}
function go(e) {
  return e.split("-")[1];
}
function yd(e) {
  return e === "x" ? "y" : "x";
}
function vd(e) {
  return e === "y" ? "height" : "width";
}
const ok = /* @__PURE__ */ new Set(["top", "bottom"]);
function Ot(e) {
  return ok.has(sn(e)) ? "y" : "x";
}
function xd(e) {
  return yd(Ot(e));
}
function sk(e, t, n) {
  n === void 0 && (n = !1);
  const r = go(e), o = xd(e), s = vd(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = ua(i)), [i, ua(i)];
}
function ik(e) {
  const t = ua(e);
  return [Kc(e), t, Kc(t)];
}
function Kc(e) {
  return e.replace(/start|end/g, (t) => rk[t]);
}
const _p = ["left", "right"], Op = ["right", "left"], ak = ["top", "bottom"], lk = ["bottom", "top"];
function ck(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Op : _p : t ? _p : Op;
    case "left":
    case "right":
      return t ? ak : lk;
    default:
      return [];
  }
}
function uk(e, t, n, r) {
  const o = go(e);
  let s = ck(sn(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Kc)))), s;
}
function ua(e) {
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
function Uy(e) {
  return typeof e != "number" ? dk(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function da(e) {
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
function Ip(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = Ot(t), i = xd(t), a = vd(i), l = sn(t), c = s === "y", u = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, d = r[a] / 2 - o[a] / 2;
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
  switch (go(t)) {
    case "start":
      g[i] -= d * (n && c ? -1 : 1);
      break;
    case "end":
      g[i] += d * (n && c ? -1 : 1);
      break;
  }
  return g;
}
const fk = async (e, t, n) => {
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
  } = Ip(c, r, l), d = r, g = {}, w = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: b,
      fn: m
    } = a[y], {
      x: h,
      y: v,
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
    u = h ?? u, f = v ?? f, g = {
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
    } = Ip(c, d, l)), y = -1);
  }
  return {
    x: u,
    y: f,
    placement: d,
    strategy: o,
    middlewareData: g
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
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: d = !1,
    padding: g = 0
  } = on(t, e), w = Uy(g), b = a[d ? f === "floating" ? "reference" : "floating" : f], m = da(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null || n ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), h = f === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, v = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), S = await (s.isElement == null ? void 0 : s.isElement(v)) ? await (s.getScale == null ? void 0 : s.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = da(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: h,
    offsetParent: v,
    strategy: l
  }) : h);
  return {
    top: (m.top - k.top + w.top) / S.y,
    bottom: (k.bottom - m.bottom + w.bottom) / S.y,
    left: (m.left - k.left + w.left) / S.x,
    right: (k.right - m.right + w.right) / S.x
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
      element: c,
      padding: u = 0
    } = on(e, t) || {};
    if (c == null)
      return {};
    const f = Uy(u), d = {
      x: n,
      y: r
    }, g = xd(o), w = vd(g), y = await i.getDimensions(c), b = g === "y", m = b ? "top" : "left", h = b ? "bottom" : "right", v = b ? "clientHeight" : "clientWidth", S = s.reference[w] + s.reference[g] - d[g] - s.floating[w], k = d[g] - s.reference[g], E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let C = E ? E[v] : 0;
    (!C || !await (i.isElement == null ? void 0 : i.isElement(E))) && (C = a.floating[v] || s.floating[w]);
    const T = S / 2 - k / 2, M = C / 2 - y[w] / 2 - 1, D = On(f[m], M), P = On(f[h], M), A = D, L = C - y[w] - P, O = C / 2 - y[w] / 2 + T, B = Hc(A, O, L), V = !l.arrow && go(o) != null && O !== B && s.reference[w] / 2 - (O < A ? D : P) - y[w] / 2 < 0, z = V ? O < A ? O - A : O - L : 0;
    return {
      [g]: d[g] + z,
      data: {
        [g]: B,
        centerOffset: O - B - z,
        ...V && {
          alignmentOffset: z
        }
      },
      reset: V
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
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: f = !0,
        fallbackPlacements: d,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: y = !0,
        ...b
      } = on(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const m = sn(o), h = Ot(a), v = sn(a) === a, S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), k = d || (v || !y ? [ua(a)] : ik(a)), E = w !== "none";
      !d && E && k.push(...uk(a, y, w, S));
      const C = [a, ...k], T = await vs(t, b), M = [];
      let D = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (u && M.push(T[m]), f) {
        const O = sk(o, i, S);
        M.push(T[O[0]], T[O[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: M
      }], !M.every((O) => O <= 0)) {
        var P, A;
        const O = (((P = s.flip) == null ? void 0 : P.index) || 0) + 1, B = C[O];
        if (B && (!(f === "alignment" ? h !== Ot(B) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        D.every((N) => Ot(N.placement) === h ? N.overflows[0] > 0 : !0)))
          return {
            data: {
              index: O,
              overflows: D
            },
            reset: {
              placement: B
            }
          };
        let V = (A = D.filter((z) => z.overflows[0] <= 0).sort((z, N) => z.overflows[1] - N.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!V)
          switch (g) {
            case "bestFit": {
              var L;
              const z = (L = D.filter((N) => {
                if (E) {
                  const j = Ot(N.placement);
                  return j === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  j === "y";
                }
                return !0;
              }).map((N) => [N.placement, N.overflows.filter((j) => j > 0).reduce((j, I) => j + I, 0)]).sort((N, j) => N[1] - j[1])[0]) == null ? void 0 : L[0];
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
      } = on(e, t);
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
}, Wy = /* @__PURE__ */ new Set(["left", "top"]);
async function gk(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = sn(n), a = go(n), l = Ot(n) === "y", c = Wy.has(i) ? -1 : 1, u = s && l ? -1 : 1, f = on(t, e);
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
      } = on(e, t), c = {
        x: n,
        y: r
      }, u = await vs(t, l), f = Ot(sn(o)), d = yd(f);
      let g = c[d], w = c[f];
      if (s) {
        const b = d === "y" ? "top" : "left", m = d === "y" ? "bottom" : "right", h = g + u[b], v = g - u[m];
        g = Hc(h, g, v);
      }
      if (i) {
        const b = f === "y" ? "top" : "left", m = f === "y" ? "bottom" : "right", h = w + u[b], v = w - u[m];
        w = Hc(h, w, v);
      }
      const y = a.fn({
        ...t,
        [d]: g,
        [f]: w
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
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
        crossAxis: c = !0
      } = on(e, t), u = {
        x: n,
        y: r
      }, f = Ot(o), d = yd(f);
      let g = u[d], w = u[f];
      const y = on(a, t), b = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (l) {
        const v = d === "y" ? "height" : "width", S = s.reference[d] - s.floating[v] + b.mainAxis, k = s.reference[d] + s.reference[v] - b.mainAxis;
        g < S ? g = S : g > k && (g = k);
      }
      if (c) {
        var m, h;
        const v = d === "y" ? "width" : "height", S = Wy.has(sn(o)), k = s.reference[f] - s.floating[v] + (S && ((m = i.offset) == null ? void 0 : m[f]) || 0) + (S ? 0 : b.crossAxis), E = s.reference[f] + s.reference[v] + (S ? 0 : ((h = i.offset) == null ? void 0 : h[f]) || 0) - (S ? b.crossAxis : 0);
        w < k ? w = k : w > E && (w = E);
      }
      return {
        [d]: g,
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
        ...c
      } = on(e, t), u = await vs(t, c), f = sn(o), d = go(o), g = Ot(o) === "y", {
        width: w,
        height: y
      } = s.floating;
      let b, m;
      f === "top" || f === "bottom" ? (b = f, m = d === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (m = f, b = d === "end" ? "top" : "bottom");
      const h = y - u.top - u.bottom, v = w - u.left - u.right, S = On(y - u[b], h), k = On(w - u[m], v), E = !t.middlewareData.shift;
      let C = S, T = k;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = v), (r = t.middlewareData.shift) != null && r.enabled.y && (C = h), E && !d) {
        const D = nt(u.left, 0), P = nt(u.right, 0), A = nt(u.top, 0), L = nt(u.bottom, 0);
        g ? T = w - 2 * (D !== 0 || P !== 0 ? D + P : nt(u.left, u.right)) : C = y - 2 * (A !== 0 || L !== 0 ? A + L : nt(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: T,
        availableHeight: C
      });
      const M = await i.getDimensions(a.floating);
      return w !== M.width || y !== M.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Va() {
  return typeof window < "u";
}
function yo(e) {
  return Hy(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function st(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ut(e) {
  var t;
  return (t = (Hy(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Hy(e) {
  return Va() ? e instanceof Node || e instanceof st(e).Node : !1;
}
function Dt(e) {
  return Va() ? e instanceof Element || e instanceof st(e).Element : !1;
}
function $t(e) {
  return Va() ? e instanceof HTMLElement || e instanceof st(e).HTMLElement : !1;
}
function zp(e) {
  return !Va() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof st(e).ShadowRoot;
}
const bk = /* @__PURE__ */ new Set(["inline", "contents"]);
function Rs(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Nt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !bk.has(o);
}
const Sk = /* @__PURE__ */ new Set(["table", "td", "th"]);
function kk(e) {
  return Sk.has(yo(e));
}
const Ck = [":popover-open", ":modal"];
function za(e) {
  return Ck.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Ek = ["transform", "translate", "scale", "rotate", "perspective"], Tk = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Pk = ["paint", "layout", "strict", "content"];
function wd(e) {
  const t = bd(), n = Dt(e) ? Nt(e) : e;
  return Ek.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Tk.some((r) => (n.willChange || "").includes(r)) || Pk.some((r) => (n.contain || "").includes(r));
}
function Dk(e) {
  let t = In(e);
  for (; $t(t) && !ro(t); ) {
    if (wd(t))
      return t;
    if (za(t))
      return null;
    t = In(t);
  }
  return null;
}
function bd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Nk = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ro(e) {
  return Nk.has(yo(e));
}
function Nt(e) {
  return st(e).getComputedStyle(e);
}
function Ba(e) {
  return Dt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function In(e) {
  if (yo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    zp(e) && e.host || // Fallback.
    Ut(e)
  );
  return zp(t) ? t.host : t;
}
function Ky(e) {
  const t = In(e);
  return ro(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : $t(t) && Rs(t) ? t : Ky(t);
}
function xs(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Ky(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = st(o);
  if (s) {
    const a = Gc(i);
    return t.concat(i, i.visualViewport || [], Rs(o) ? o : [], a && n ? xs(a) : []);
  }
  return t.concat(o, xs(o, [], n));
}
function Gc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Gy(e) {
  const t = Nt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = $t(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = ca(n) !== s || ca(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function Sd(e) {
  return Dt(e) ? e : e.contextElement;
}
function Yr(e) {
  const t = Sd(e);
  if (!$t(t))
    return Vt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Gy(t);
  let i = (s ? ca(n.width) : n.width) / r, a = (s ? ca(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const Ak = /* @__PURE__ */ Vt(0);
function Yy(e) {
  const t = st(e);
  return !bd() || !t.visualViewport ? Ak : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Mk(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== st(e) ? !1 : t;
}
function fr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = Sd(e);
  let i = Vt(1);
  t && (r ? Dt(r) && (i = Yr(r)) : i = Yr(e));
  const a = Mk(s, n, r) ? Yy(s) : Vt(0);
  let l = (o.left + a.x) / i.x, c = (o.top + a.y) / i.y, u = o.width / i.x, f = o.height / i.y;
  if (s) {
    const d = st(s), g = r && Dt(r) ? st(r) : r;
    let w = d, y = Gc(w);
    for (; y && r && g !== w; ) {
      const b = Yr(y), m = y.getBoundingClientRect(), h = Nt(y), v = m.left + (y.clientLeft + parseFloat(h.paddingLeft)) * b.x, S = m.top + (y.clientTop + parseFloat(h.paddingTop)) * b.y;
      l *= b.x, c *= b.y, u *= b.x, f *= b.y, l += v, c += S, w = st(y), y = Gc(w);
    }
  }
  return da({
    width: u,
    height: f,
    x: l,
    y: c
  });
}
function kd(e, t) {
  const n = Ba(e).scrollLeft;
  return t ? t.left + n : fr(Ut(e)).left + n;
}
function Xy(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    kd(e, r)
  )), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function Rk(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = Ut(r), a = t ? za(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Vt(1);
  const u = Vt(0), f = $t(r);
  if ((f || !f && !s) && ((yo(r) !== "body" || Rs(i)) && (l = Ba(r)), $t(r))) {
    const g = fr(r);
    c = Yr(r), u.x = g.x + r.clientLeft, u.y = g.y + r.clientTop;
  }
  const d = i && !f && !s ? Xy(i, l, !0) : Vt(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x + d.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y + d.y
  };
}
function jk(e) {
  return Array.from(e.getClientRects());
}
function Lk(e) {
  const t = Ut(e), n = Ba(e), r = e.ownerDocument.body, o = nt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = nt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + kd(e);
  const a = -n.scrollTop;
  return Nt(r).direction === "rtl" && (i += nt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
function _k(e, t) {
  const n = st(e), r = Ut(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const c = bd();
    (!c || c && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
const Ok = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Ik(e, t) {
  const n = fr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = $t(e) ? Yr(e) : Vt(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, c = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: c
  };
}
function Bp(e, t, n) {
  let r;
  if (t === "viewport")
    r = _k(e, n);
  else if (t === "document")
    r = Lk(Ut(e));
  else if (Dt(t))
    r = Ik(t, n);
  else {
    const o = Yy(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return da(r);
}
function Qy(e, t) {
  const n = In(e);
  return n === t || !Dt(n) || ro(n) ? !1 : Nt(n).position === "fixed" || Qy(n, t);
}
function Fk(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = xs(e, [], !1).filter((a) => Dt(a) && yo(a) !== "body"), o = null;
  const s = Nt(e).position === "fixed";
  let i = s ? In(e) : e;
  for (; Dt(i) && !ro(i); ) {
    const a = Nt(i), l = wd(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && Ok.has(o.position) || Rs(i) && !l && Qy(e, i)) ? r = r.filter((u) => u !== i) : o = a, i = In(i);
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
  const i = [...n === "clippingAncestors" ? za(t) ? [] : Fk(t, this._c) : [].concat(n), r], a = i[0], l = i.reduce((c, u) => {
    const f = Bp(t, u, o);
    return c.top = nt(f.top, c.top), c.right = On(f.right, c.right), c.bottom = On(f.bottom, c.bottom), c.left = nt(f.left, c.left), c;
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
  } = Gy(e);
  return {
    width: t,
    height: n
  };
}
function Bk(e, t, n) {
  const r = $t(t), o = Ut(t), s = n === "fixed", i = fr(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Vt(0);
  function c() {
    l.x = kd(o);
  }
  if (r || !r && !s)
    if ((yo(t) !== "body" || Rs(o)) && (a = Ba(t)), r) {
      const g = fr(t, !0, s, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && c();
  s && !r && o && c();
  const u = o && !r && !s ? Xy(o, a) : Vt(0), f = i.left + a.scrollLeft - l.x - u.x, d = i.top + a.scrollTop - l.y - u.y;
  return {
    x: f,
    y: d,
    width: i.width,
    height: i.height
  };
}
function Ml(e) {
  return Nt(e).position === "static";
}
function $p(e, t) {
  if (!$t(e) || Nt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ut(e) === n && (n = n.ownerDocument.body), n;
}
function qy(e, t) {
  const n = st(e);
  if (za(e))
    return n;
  if (!$t(e)) {
    let o = In(e);
    for (; o && !ro(o); ) {
      if (Dt(o) && !Ml(o))
        return o;
      o = In(o);
    }
    return n;
  }
  let r = $p(e, t);
  for (; r && kk(r) && Ml(r); )
    r = $p(r, t);
  return r && ro(r) && Ml(r) && !wd(r) ? n : r || Dk(e) || n;
}
const $k = async function(e) {
  const t = this.getOffsetParent || qy, n = this.getDimensions, r = await n(e.floating);
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
  return Nt(e).direction === "rtl";
}
const Wk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Rk,
  getDocumentElement: Ut,
  getClippingRect: Vk,
  getOffsetParent: qy,
  getElementRects: $k,
  getClientRects: jk,
  getDimensions: zk,
  getScale: Yr,
  isElement: Dt,
  isRTL: Uk
};
function Zy(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Hk(e, t) {
  let n = null, r;
  const o = Ut(e);
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
    const w = oi(f), y = oi(o.clientWidth - (u + d)), b = oi(o.clientHeight - (f + g)), m = oi(u), v = {
      rootMargin: -w + "px " + -y + "px " + -b + "px " + -m + "px",
      threshold: nt(0, On(1, l)) || 1
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
      C === 1 && !Zy(c, e.getBoundingClientRect()) && i(), S = !1;
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
  } = r, c = Sd(e), u = o || s ? [...c ? xs(c) : [], ...xs(t)] : [];
  u.forEach((m) => {
    o && m.addEventListener("scroll", n, {
      passive: !0
    }), s && m.addEventListener("resize", n);
  });
  const f = c && a ? Hk(c, n) : null;
  let d = -1, g = null;
  i && (g = new ResizeObserver((m) => {
    let [h] = m;
    h && h.target === c && g && (g.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var v;
      (v = g) == null || v.observe(t);
    })), n();
  }), c && !l && g.observe(c), g.observe(t));
  let w, y = l ? fr(e) : null;
  l && b();
  function b() {
    const m = fr(e);
    y && !Zy(y, m) && n(), y = m, w = requestAnimationFrame(b);
  }
  return n(), () => {
    var m;
    u.forEach((h) => {
      o && h.removeEventListener("scroll", n), s && h.removeEventListener("resize", n);
    }), f == null || f(), (m = g) == null || m.disconnect(), g = null, l && cancelAnimationFrame(w);
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
}, Mi = eC ? x.useLayoutEffect : tC;
function fa(e, t) {
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
        if (!fa(e[r], t[r]))
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
      if (!(s === "_owner" && e.$$typeof) && !fa(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Jy(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Wp(e, t) {
  const n = Jy(e);
  return Math.round(t * n) / n;
}
function Rl(e) {
  const t = x.useRef(e);
  return Mi(() => {
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
    open: c
  } = e, [u, f] = x.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [d, g] = x.useState(r);
  fa(d, r) || g(r);
  const [w, y] = x.useState(null), [b, m] = x.useState(null), h = x.useCallback((N) => {
    N !== E.current && (E.current = N, y(N));
  }, []), v = x.useCallback((N) => {
    N !== C.current && (C.current = N, m(N));
  }, []), S = s || w, k = i || b, E = x.useRef(null), C = x.useRef(null), T = x.useRef(u), M = l != null, D = Rl(l), P = Rl(o), A = Rl(c), L = x.useCallback(() => {
    if (!E.current || !C.current)
      return;
    const N = {
      placement: t,
      strategy: n,
      middleware: d
    };
    P.current && (N.platform = P.current), Jk(E.current, C.current, N).then((j) => {
      const I = {
        ...j,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: A.current !== !1
      };
      O.current && !fa(T.current, I) && (T.current = I, po.flushSync(() => {
        f(I);
      }));
    });
  }, [d, t, n, P, A]);
  Mi(() => {
    c === !1 && T.current.isPositioned && (T.current.isPositioned = !1, f((N) => ({
      ...N,
      isPositioned: !1
    })));
  }, [c]);
  const O = x.useRef(!1);
  Mi(() => (O.current = !0, () => {
    O.current = !1;
  }), []), Mi(() => {
    if (S && (E.current = S), k && (C.current = k), S && k) {
      if (D.current)
        return D.current(S, k, L);
      L();
    }
  }, [S, k, L, D, M]);
  const B = x.useMemo(() => ({
    reference: E,
    floating: C,
    setReference: h,
    setFloating: v
  }), [h, v]), V = x.useMemo(() => ({
    reference: S,
    floating: k
  }), [S, k]), z = x.useMemo(() => {
    const N = {
      position: n,
      left: 0,
      top: 0
    };
    if (!V.floating)
      return N;
    const j = Wp(V.floating, u.x), I = Wp(V.floating, u.y);
    return a ? {
      ...N,
      transform: "translate(" + j + "px, " + I + "px)",
      ...Jy(V.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: j,
      top: I
    };
  }, [n, a, V.floating, u.x, u.y]);
  return x.useMemo(() => ({
    ...u,
    update: L,
    refs: B,
    elements: V,
    floatingStyles: z
  }), [u, L, B, V, z]);
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
}), cC = (e, t) => ({
  ...qk(e),
  options: [e, t]
}), uC = (e, t) => ({
  ...rC(e),
  options: [e, t]
});
var dC = "Arrow", ev = x.forwardRef((e, t) => {
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
ev.displayName = dC;
var fC = ev;
function pC(e) {
  const [t, n] = x.useState(void 0);
  return Ue(() => {
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
var Cd = "Popper", [tv, nv] = mo(Cd), [hC, rv] = tv(Cd), ov = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = x.useState(null);
  return /* @__PURE__ */ p.jsx(hC, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
ov.displayName = Cd;
var sv = "PopperAnchor", iv = x.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = rv(sv, n), i = x.useRef(null), a = xe(t, i), l = x.useRef(null);
    return x.useEffect(() => {
      const c = l.current;
      l.current = (r == null ? void 0 : r.current) || i.current, c !== l.current && s.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ p.jsx(q.div, { ...o, ref: a });
  }
);
iv.displayName = sv;
var Ed = "PopperContent", [mC, gC] = tv(Ed), av = x.forwardRef(
  (e, t) => {
    var $, ne, Ee, Y, J, Z;
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
      ...y
    } = e, b = rv(Ed, n), [m, h] = x.useState(null), v = xe(t, (Se) => h(Se)), [S, k] = x.useState(null), E = pC(S), C = (E == null ? void 0 : E.width) ?? 0, T = (E == null ? void 0 : E.height) ?? 0, M = r + (s !== "center" ? "-" + s : ""), D = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, P = Array.isArray(c) ? c : [c], A = P.length > 0, L = {
      padding: D,
      boundary: P.filter(vC),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: A
    }, { refs: O, floatingStyles: B, placement: V, isPositioned: z, middlewareData: N } = nC({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: M,
      whileElementsMounted: (...Se) => Kk(...Se, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        oC({ mainAxis: o + T, alignmentAxis: i }),
        l && sC({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? iC() : void 0,
          ...L
        }),
        l && aC({ ...L }),
        lC({
          ...L,
          apply: ({ elements: Se, rects: et, availableWidth: cn, availableHeight: un }) => {
            const { width: dn, height: zs } = et.reference, _ = Se.floating.style;
            _.setProperty("--radix-popper-available-width", `${cn}px`), _.setProperty("--radix-popper-available-height", `${un}px`), _.setProperty("--radix-popper-anchor-width", `${dn}px`), _.setProperty("--radix-popper-anchor-height", `${zs}px`);
          }
        }),
        S && uC({ element: S, padding: a }),
        xC({ arrowWidth: C, arrowHeight: T }),
        d && cC({ strategy: "referenceHidden", ...L })
      ]
    }), [j, I] = uv(V), W = _n(w);
    Ue(() => {
      z && (W == null || W());
    }, [z, W]);
    const re = ($ = N.arrow) == null ? void 0 : $.x, We = (ne = N.arrow) == null ? void 0 : ne.y, De = ((Ee = N.arrow) == null ? void 0 : Ee.centerOffset) !== 0, [Ce, Re] = x.useState();
    return Ue(() => {
      m && Re(window.getComputedStyle(m).zIndex);
    }, [m]), /* @__PURE__ */ p.jsx(
      "div",
      {
        ref: O.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...B,
          transform: z ? B.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Ce,
          "--radix-popper-transform-origin": [
            (Y = N.transformOrigin) == null ? void 0 : Y.x,
            (J = N.transformOrigin) == null ? void 0 : J.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Z = N.hide) == null ? void 0 : Z.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ p.jsx(
          mC,
          {
            scope: n,
            placedSide: j,
            onArrowChange: k,
            arrowX: re,
            arrowY: We,
            shouldHideArrow: De,
            children: /* @__PURE__ */ p.jsx(
              q.div,
              {
                "data-side": j,
                "data-align": I,
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
av.displayName = Ed;
var lv = "PopperArrow", yC = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, cv = x.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = gC(lv, r), i = yC[s.placedSide];
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
cv.displayName = lv;
function vC(e) {
  return e !== null;
}
var xC = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, m, h;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [c, u] = uv(n), f = { start: "0%", center: "50%", end: "100%" }[u], d = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + a / 2, g = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + l / 2;
    let w = "", y = "";
    return c === "bottom" ? (w = i ? f : `${d}px`, y = `${-l}px`) : c === "top" ? (w = i ? f : `${d}px`, y = `${r.floating.height + l}px`) : c === "right" ? (w = `${-l}px`, y = i ? f : `${g}px`) : c === "left" && (w = `${r.floating.width + l}px`, y = i ? f : `${g}px`), { data: { x: w, y } };
  }
});
function uv(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var wC = ov, bC = iv, SC = av, kC = cv, CC = "Portal", Td = x.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, s] = x.useState(!1);
  Ue(() => s(!0), []);
  const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return i ? Gb.createPortal(/* @__PURE__ */ p.jsx(q.div, { ...r, ref: t }), i) : null;
});
Td.displayName = CC;
var EC = Pm[" useInsertionEffect ".trim().toString()] || Ue;
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
        const d = PC(u) ? u(e) : u;
        d !== e && ((f = i.current) == null || f.call(i, d));
      } else
        s(u);
    },
    [a, e, s, i]
  );
  return [l, c];
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
var dv = Object.freeze({
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
}), NC = "VisuallyHidden", AC = x.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(
    q.span,
    {
      ...e,
      ref: t,
      style: { ...dv, ...e.style }
    }
  )
);
AC.displayName = NC;
var MC = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, wr = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap(), ii = {}, jl = 0, fv = function(e) {
  return e && (e.host || fv(e.parentNode));
}, RC = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = fv(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, jC = function(e, t, n, r) {
  var o = RC(t, Array.isArray(e) ? e : [e]);
  ii[n] || (ii[n] = /* @__PURE__ */ new WeakMap());
  var s = ii[n], i = [], a = /* @__PURE__ */ new Set(), l = new Set(o), c = function(f) {
    !f || a.has(f) || (a.add(f), c(f.parentNode));
  };
  o.forEach(c);
  var u = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(d) {
      if (a.has(d))
        u(d);
      else
        try {
          var g = d.getAttribute(r), w = g !== null && g !== "false", y = (wr.get(d) || 0) + 1, b = (s.get(d) || 0) + 1;
          wr.set(d, y), s.set(d, b), i.push(d), y === 1 && w && si.set(d, !0), b === 1 && d.setAttribute(n, "true"), w || d.setAttribute(r, "true");
        } catch (m) {
          console.error("aria-hidden: cannot operate on ", d, m);
        }
    });
  };
  return u(t), a.clear(), jl++, function() {
    i.forEach(function(f) {
      var d = wr.get(f) - 1, g = s.get(f) - 1;
      wr.set(f, d), s.set(f, g), d || (si.has(f) || f.removeAttribute(r), si.delete(f)), g || f.removeAttribute(n);
    }), jl--, jl || (wr = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap(), ii = {});
  };
}, pv = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = MC(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), jC(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, _t = function() {
  return _t = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, _t.apply(this, arguments);
};
function hv(e, t) {
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
var Ri = "right-scroll-bar-position", ji = "width-before-scroll-bar", _C = "with-scroll-bars-hidden", OC = "--removed-body-scroll-bar-size";
function Ll(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function IC(e, t) {
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
  var n = IC(null, function(r) {
    return e.forEach(function(o) {
      return Ll(o, r);
    });
  });
  return FC(function() {
    var r = Hp.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || Ll(a, null);
      }), s.forEach(function(a) {
        o.has(a) || Ll(a, i);
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
function $C(e) {
  e === void 0 && (e = {});
  var t = BC(null);
  return t.options = _t({ async: !0, ssr: !1 }, e), t;
}
var mv = function(e) {
  var t = e.sideCar, n = hv(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return x.createElement(r, _t({}, n));
};
mv.isSideCarExport = !0;
function UC(e, t) {
  return e.useMedium(t), mv;
}
var gv = $C(), _l = function() {
}, $a = x.forwardRef(function(e, t) {
  var n = x.useRef(null), r = x.useState({
    onScrollCapture: _l,
    onWheelCapture: _l,
    onTouchMoveCapture: _l
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, u = e.enabled, f = e.shards, d = e.sideCar, g = e.noRelative, w = e.noIsolation, y = e.inert, b = e.allowPinchZoom, m = e.as, h = m === void 0 ? "div" : m, v = e.gapMode, S = hv(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), k = d, E = VC([n, t]), C = _t(_t({}, S), o);
  return x.createElement(
    x.Fragment,
    null,
    u && x.createElement(k, { sideCar: gv, removeScrollBar: c, shards: f, noRelative: g, noIsolation: w, inert: y, setCallbacks: s, allowPinchZoom: !!b, lockRef: n, gapMode: v }),
    i ? x.cloneElement(x.Children.only(a), _t(_t({}, C), { ref: E })) : x.createElement(h, _t({}, C, { className: l, ref: E }), a)
  );
});
$a.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
$a.classNames = {
  fullWidth: ji,
  zeroRight: Ri
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
}, yv = function() {
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
}, Ol = function(e) {
  return parseInt(e || "", 10) || 0;
}, qC = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ol(n), Ol(r), Ol(o)];
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
}, JC = yv(), Xr = "data-scroll-locked", eE = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(_C, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Xr, `] {
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
  
  .`).concat(Ri, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(ji, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ri, " .").concat(Ri, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ji, " .").concat(ji, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Xr, `] {
    `).concat(OC, ": ").concat(a, `px;
  }
`);
}, Kp = function() {
  var e = parseInt(document.body.getAttribute(Xr) || "0", 10);
  return isFinite(e) ? e : 0;
}, tE = function() {
  x.useEffect(function() {
    return document.body.setAttribute(Xr, (Kp() + 1).toString()), function() {
      var e = Kp() - 1;
      e <= 0 ? document.body.removeAttribute(Xr) : document.body.setAttribute(Xr, e.toString());
    };
  }, []);
}, nE = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  tE();
  var s = x.useMemo(function() {
    return ZC(o);
  }, [o]);
  return x.createElement(JC, { styles: eE(s, !t, o, n ? "" : "!important") });
}, Yc = !1;
if (typeof window < "u")
  try {
    var ai = Object.defineProperty({}, "passive", {
      get: function() {
        return Yc = !0, !0;
      }
    });
    window.addEventListener("test", ai, ai), window.removeEventListener("test", ai, ai);
  } catch {
    Yc = !1;
  }
var br = Yc ? { passive: !1 } : !1, rE = function(e) {
  return e.tagName === "TEXTAREA";
}, vv = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !rE(e) && n[t] === "visible")
  );
}, oE = function(e) {
  return vv(e, "overflowY");
}, sE = function(e) {
  return vv(e, "overflowX");
}, Gp = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = xv(e, r);
    if (o) {
      var s = wv(e, r), i = s[1], a = s[2];
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
}, xv = function(e, t) {
  return e === "v" ? oE(t) : sE(t);
}, wv = function(e, t) {
  return e === "v" ? iE(t) : aE(t);
}, lE = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, cE = function(e, t, n, r, o) {
  var s = lE(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, l = t.contains(a), c = !1, u = i > 0, f = 0, d = 0;
  do {
    if (!a)
      break;
    var g = wv(e, a), w = g[0], y = g[1], b = g[2], m = y - b - s * w;
    (w || m) && xv(e, a) && (f += m, d += w);
    var h = a.parentNode;
    a = h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h.host : h;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (u && Math.abs(f) < 1 || !u && Math.abs(d) < 1) && (c = !0), c;
}, li = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Yp = function(e) {
  return [e.deltaX, e.deltaY];
}, Xp = function(e) {
  return e && "current" in e ? e.current : e;
}, uE = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, dE = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, fE = 0, Sr = [];
function pE(e) {
  var t = x.useRef([]), n = x.useRef([0, 0]), r = x.useRef(), o = x.useState(fE++)[0], s = x.useState(yv)[0], i = x.useRef(e);
  x.useEffect(function() {
    i.current = e;
  }, [e]), x.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var y = LC([e.lockRef.current], (e.shards || []).map(Xp), !0).filter(Boolean);
      return y.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), y.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = x.useCallback(function(y, b) {
    if ("touches" in y && y.touches.length === 2 || y.type === "wheel" && y.ctrlKey)
      return !i.current.allowPinchZoom;
    var m = li(y), h = n.current, v = "deltaX" in y ? y.deltaX : h[0] - m[0], S = "deltaY" in y ? y.deltaY : h[1] - m[1], k, E = y.target, C = Math.abs(v) > Math.abs(S) ? "h" : "v";
    if ("touches" in y && C === "h" && E.type === "range")
      return !1;
    var T = Gp(C, E);
    if (!T)
      return !0;
    if (T ? k = C : (k = C === "v" ? "h" : "v", T = Gp(C, E)), !T)
      return !1;
    if (!r.current && "changedTouches" in y && (v || S) && (r.current = k), !k)
      return !0;
    var M = r.current || k;
    return cE(M, b, y, M === "h" ? v : S);
  }, []), l = x.useCallback(function(y) {
    var b = y;
    if (!(!Sr.length || Sr[Sr.length - 1] !== s)) {
      var m = "deltaY" in b ? Yp(b) : li(b), h = t.current.filter(function(k) {
        return k.name === b.type && (k.target === b.target || b.target === k.shadowParent) && uE(k.delta, m);
      })[0];
      if (h && h.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!h) {
        var v = (i.current.shards || []).map(Xp).filter(Boolean).filter(function(k) {
          return k.contains(b.target);
        }), S = v.length > 0 ? a(b, v[0]) : !i.current.noIsolation;
        S && b.cancelable && b.preventDefault();
      }
    }
  }, []), c = x.useCallback(function(y, b, m, h) {
    var v = { name: y, delta: b, target: m, should: h, shadowParent: hE(m) };
    t.current.push(v), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== v;
      });
    }, 1);
  }, []), u = x.useCallback(function(y) {
    n.current = li(y), r.current = void 0;
  }, []), f = x.useCallback(function(y) {
    c(y.type, Yp(y), y.target, a(y, e.lockRef.current));
  }, []), d = x.useCallback(function(y) {
    c(y.type, li(y), y.target, a(y, e.lockRef.current));
  }, []);
  x.useEffect(function() {
    return Sr.push(s), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", l, br), document.addEventListener("touchmove", l, br), document.addEventListener("touchstart", u, br), function() {
      Sr = Sr.filter(function(y) {
        return y !== s;
      }), document.removeEventListener("wheel", l, br), document.removeEventListener("touchmove", l, br), document.removeEventListener("touchstart", u, br);
    };
  }, []);
  var g = e.removeScrollBar, w = e.inert;
  return x.createElement(
    x.Fragment,
    null,
    w ? x.createElement(s, { styles: dE(o) }) : null,
    g ? x.createElement(nE, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function hE(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const mE = UC(gv, pE);
var Pd = x.forwardRef(function(e, t) {
  return x.createElement($a, _t({}, e, { ref: t, sideCar: mE }));
});
Pd.classNames = $a.classNames;
var gE = [" ", "Enter", "ArrowUp", "ArrowDown"], yE = [" ", "Enter"], pr = "Select", [Ua, Wa, vE] = Fy(pr), [vo, jA] = mo(pr, [
  vE,
  nv
]), Ha = nv(), [xE, Wn] = vo(pr), [wE, bE] = vo(pr), bv = (e) => {
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
  } = e, y = Ha(t), [b, m] = x.useState(null), [h, v] = x.useState(null), [S, k] = x.useState(!1), E = hd(c), [C, T] = ws({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: pr
  }), [M, D] = ws({
    prop: i,
    defaultProp: a,
    onChange: l,
    caller: pr
  }), P = x.useRef(null), A = b ? w || !!b.closest("form") : !0, [L, O] = x.useState(/* @__PURE__ */ new Set()), B = Array.from(L).map((V) => V.props.value).join(";");
  return /* @__PURE__ */ p.jsx(wC, { ...y, children: /* @__PURE__ */ p.jsxs(
    xE,
    {
      required: g,
      scope: t,
      trigger: b,
      onTriggerChange: m,
      valueNode: h,
      onValueNodeChange: v,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: k,
      contentId: Rn(),
      value: M,
      onValueChange: D,
      open: C,
      onOpenChange: T,
      dir: E,
      triggerPointerDownPosRef: P,
      disabled: d,
      children: [
        /* @__PURE__ */ p.jsx(Ua.Provider, { scope: t, children: /* @__PURE__ */ p.jsx(
          wE,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: x.useCallback((V) => {
              O((z) => new Set(z).add(V));
            }, []),
            onNativeOptionRemove: x.useCallback((V) => {
              O((z) => {
                const N = new Set(z);
                return N.delete(V), N;
              });
            }, []),
            children: n
          }
        ) }),
        A ? /* @__PURE__ */ p.jsxs(
          Uv,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: u,
            autoComplete: f,
            value: M,
            onChange: (V) => D(V.target.value),
            disabled: d,
            form: w,
            children: [
              M === void 0 ? /* @__PURE__ */ p.jsx("option", { value: "" }) : null,
              Array.from(L)
            ]
          },
          B
        ) : null
      ]
    }
  ) });
};
bv.displayName = pr;
var Sv = "SelectTrigger", kv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = Ha(n), i = Wn(Sv, n), a = i.disabled || r, l = xe(t, i.onTriggerChange), c = Wa(n), u = x.useRef("touch"), [f, d, g] = Hv((y) => {
      const b = c().filter((v) => !v.disabled), m = b.find((v) => v.value === i.value), h = Kv(b, y, m);
      h !== void 0 && i.onValueChange(h.value);
    }), w = (y) => {
      a || (i.onOpenChange(!0), g()), y && (i.triggerPointerDownPosRef.current = {
        x: Math.round(y.pageX),
        y: Math.round(y.pageY)
      });
    };
    return /* @__PURE__ */ p.jsx(bC, { asChild: !0, ...s, children: /* @__PURE__ */ p.jsx(
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
        "data-placeholder": Wv(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: X(o.onClick, (y) => {
          y.currentTarget.focus(), u.current !== "mouse" && w(y);
        }),
        onPointerDown: X(o.onPointerDown, (y) => {
          u.current = y.pointerType;
          const b = y.target;
          b.hasPointerCapture(y.pointerId) && b.releasePointerCapture(y.pointerId), y.button === 0 && y.ctrlKey === !1 && y.pointerType === "mouse" && (w(y), y.preventDefault());
        }),
        onKeyDown: X(o.onKeyDown, (y) => {
          const b = f.current !== "";
          !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && d(y.key), !(b && y.key === " ") && gE.includes(y.key) && (w(), y.preventDefault());
        })
      }
    ) });
  }
);
kv.displayName = Sv;
var Cv = "SelectValue", Ev = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: i = "", ...a } = e, l = Wn(Cv, n), { onValueNodeHasChildrenChange: c } = l, u = s !== void 0, f = xe(t, l.onValueNodeChange);
    return Ue(() => {
      c(u);
    }, [c, u]), /* @__PURE__ */ p.jsx(
      q.span,
      {
        ...a,
        ref: f,
        style: { pointerEvents: "none" },
        children: Wv(l.value) ? /* @__PURE__ */ p.jsx(p.Fragment, { children: i }) : s
      }
    );
  }
);
Ev.displayName = Cv;
var SE = "SelectIcon", Tv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ p.jsx(q.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Tv.displayName = SE;
var kE = "SelectPortal", Pv = (e) => /* @__PURE__ */ p.jsx(Td, { asChild: !0, ...e });
Pv.displayName = kE;
var hr = "SelectContent", Dv = x.forwardRef(
  (e, t) => {
    const n = Wn(hr, e.__scopeSelect), [r, o] = x.useState();
    if (Ue(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? po.createPortal(
        /* @__PURE__ */ p.jsx(Nv, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx(Ua.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ p.jsx(Av, { ...e, ref: t });
  }
);
Dv.displayName = hr;
var wt = 10, [Nv, Hn] = vo(hr), CE = "SelectContentImpl", EE = /* @__PURE__ */ ys("SelectContent.RemoveScroll"), Av = x.forwardRef(
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
      hideWhenDetached: y,
      avoidCollisions: b,
      //
      ...m
    } = e, h = Wn(hr, n), [v, S] = x.useState(null), [k, E] = x.useState(null), C = xe(t, ($) => S($)), [T, M] = x.useState(null), [D, P] = x.useState(
      null
    ), A = Wa(n), [L, O] = x.useState(!1), B = x.useRef(!1);
    x.useEffect(() => {
      if (v) return pv(v);
    }, [v]), By();
    const V = x.useCallback(
      ($) => {
        const [ne, ...Ee] = A().map((Z) => Z.ref.current), [Y] = Ee.slice(-1), J = document.activeElement;
        for (const Z of $)
          if (Z === J || (Z == null || Z.scrollIntoView({ block: "nearest" }), Z === ne && k && (k.scrollTop = 0), Z === Y && k && (k.scrollTop = k.scrollHeight), Z == null || Z.focus(), document.activeElement !== J)) return;
      },
      [A, k]
    ), z = x.useCallback(
      () => V([T, v]),
      [V, T, v]
    );
    x.useEffect(() => {
      L && z();
    }, [L, z]);
    const { onOpenChange: N, triggerPointerDownPosRef: j } = h;
    x.useEffect(() => {
      if (v) {
        let $ = { x: 0, y: 0 };
        const ne = (Y) => {
          var J, Z;
          $ = {
            x: Math.abs(Math.round(Y.pageX) - (((J = j.current) == null ? void 0 : J.x) ?? 0)),
            y: Math.abs(Math.round(Y.pageY) - (((Z = j.current) == null ? void 0 : Z.y) ?? 0))
          };
        }, Ee = (Y) => {
          $.x <= 10 && $.y <= 10 ? Y.preventDefault() : v.contains(Y.target) || N(!1), document.removeEventListener("pointermove", ne), j.current = null;
        };
        return j.current !== null && (document.addEventListener("pointermove", ne), document.addEventListener("pointerup", Ee, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", ne), document.removeEventListener("pointerup", Ee, { capture: !0 });
        };
      }
    }, [v, N, j]), x.useEffect(() => {
      const $ = () => N(!1);
      return window.addEventListener("blur", $), window.addEventListener("resize", $), () => {
        window.removeEventListener("blur", $), window.removeEventListener("resize", $);
      };
    }, [N]);
    const [I, W] = Hv(($) => {
      const ne = A().filter((J) => !J.disabled), Ee = ne.find((J) => J.ref.current === document.activeElement), Y = Kv(ne, $, Ee);
      Y && setTimeout(() => Y.ref.current.focus());
    }), re = x.useCallback(
      ($, ne, Ee) => {
        const Y = !B.current && !Ee;
        (h.value !== void 0 && h.value === ne || Y) && (M($), Y && (B.current = !0));
      },
      [h.value]
    ), We = x.useCallback(() => v == null ? void 0 : v.focus(), [v]), De = x.useCallback(
      ($, ne, Ee) => {
        const Y = !B.current && !Ee;
        (h.value !== void 0 && h.value === ne || Y) && P($);
      },
      [h.value]
    ), Ce = r === "popper" ? Xc : Mv, Re = Ce === Xc ? {
      side: a,
      sideOffset: l,
      align: c,
      alignOffset: u,
      arrowPadding: f,
      collisionBoundary: d,
      collisionPadding: g,
      sticky: w,
      hideWhenDetached: y,
      avoidCollisions: b
    } : {};
    return /* @__PURE__ */ p.jsx(
      Nv,
      {
        scope: n,
        content: v,
        viewport: k,
        onViewportChange: E,
        itemRefCallback: re,
        selectedItem: T,
        onItemLeave: We,
        itemTextRefCallback: De,
        focusSelectedItem: z,
        selectedItemText: D,
        position: r,
        isPositioned: L,
        searchRef: I,
        children: /* @__PURE__ */ p.jsx(Pd, { as: EE, allowPinchZoom: !0, children: /* @__PURE__ */ p.jsx(
          gd,
          {
            asChild: !0,
            trapped: h.open,
            onMountAutoFocus: ($) => {
              $.preventDefault();
            },
            onUnmountAutoFocus: X(o, ($) => {
              var ne;
              (ne = h.trigger) == null || ne.focus({ preventScroll: !0 }), $.preventDefault();
            }),
            children: /* @__PURE__ */ p.jsx(
              md,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: ($) => $.preventDefault(),
                onDismiss: () => h.onOpenChange(!1),
                children: /* @__PURE__ */ p.jsx(
                  Ce,
                  {
                    role: "listbox",
                    id: h.contentId,
                    "data-state": h.open ? "open" : "closed",
                    dir: h.dir,
                    onContextMenu: ($) => $.preventDefault(),
                    ...m,
                    ...Re,
                    onPlaced: () => O(!0),
                    ref: C,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...m.style
                    },
                    onKeyDown: X(m.onKeyDown, ($) => {
                      const ne = $.ctrlKey || $.altKey || $.metaKey;
                      if ($.key === "Tab" && $.preventDefault(), !ne && $.key.length === 1 && W($.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes($.key)) {
                        let Y = A().filter((J) => !J.disabled).map((J) => J.ref.current);
                        if (["ArrowUp", "End"].includes($.key) && (Y = Y.slice().reverse()), ["ArrowUp", "ArrowDown"].includes($.key)) {
                          const J = $.target, Z = Y.indexOf(J);
                          Y = Y.slice(Z + 1);
                        }
                        setTimeout(() => V(Y)), $.preventDefault();
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
Av.displayName = CE;
var TE = "SelectItemAlignedPosition", Mv = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = Wn(hr, n), i = Hn(hr, n), [a, l] = x.useState(null), [c, u] = x.useState(null), f = xe(t, (C) => u(C)), d = Wa(n), g = x.useRef(!1), w = x.useRef(!0), { viewport: y, selectedItem: b, selectedItemText: m, focusSelectedItem: h } = i, v = x.useCallback(() => {
    if (s.trigger && s.valueNode && a && c && y && b && m) {
      const C = s.trigger.getBoundingClientRect(), T = c.getBoundingClientRect(), M = s.valueNode.getBoundingClientRect(), D = m.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const J = D.left - T.left, Z = M.left - J, Se = C.left - Z, et = C.width + Se, cn = Math.max(et, T.width), un = window.innerWidth - wt, dn = Tp(Z, [
          wt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(wt, un - cn)
        ]);
        a.style.minWidth = et + "px", a.style.left = dn + "px";
      } else {
        const J = T.right - D.right, Z = window.innerWidth - M.right - J, Se = window.innerWidth - C.right - Z, et = C.width + Se, cn = Math.max(et, T.width), un = window.innerWidth - wt, dn = Tp(Z, [
          wt,
          Math.max(wt, un - cn)
        ]);
        a.style.minWidth = et + "px", a.style.right = dn + "px";
      }
      const P = d(), A = window.innerHeight - wt * 2, L = y.scrollHeight, O = window.getComputedStyle(c), B = parseInt(O.borderTopWidth, 10), V = parseInt(O.paddingTop, 10), z = parseInt(O.borderBottomWidth, 10), N = parseInt(O.paddingBottom, 10), j = B + V + L + N + z, I = Math.min(b.offsetHeight * 5, j), W = window.getComputedStyle(y), re = parseInt(W.paddingTop, 10), We = parseInt(W.paddingBottom, 10), De = C.top + C.height / 2 - wt, Ce = A - De, Re = b.offsetHeight / 2, $ = b.offsetTop + Re, ne = B + V + $, Ee = j - ne;
      if (ne <= De) {
        const J = P.length > 0 && b === P[P.length - 1].ref.current;
        a.style.bottom = "0px";
        const Z = c.clientHeight - y.offsetTop - y.offsetHeight, Se = Math.max(
          Ce,
          Re + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (J ? We : 0) + Z + z
        ), et = ne + Se;
        a.style.height = et + "px";
      } else {
        const J = P.length > 0 && b === P[0].ref.current;
        a.style.top = "0px";
        const Se = Math.max(
          De,
          B + y.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (J ? re : 0) + Re
        ) + Ee;
        a.style.height = Se + "px", y.scrollTop = ne - De + y.offsetTop;
      }
      a.style.margin = `${wt}px 0`, a.style.minHeight = I + "px", a.style.maxHeight = A + "px", r == null || r(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    d,
    s.trigger,
    s.valueNode,
    a,
    c,
    y,
    b,
    m,
    s.dir,
    r
  ]);
  Ue(() => v(), [v]);
  const [S, k] = x.useState();
  Ue(() => {
    c && k(window.getComputedStyle(c).zIndex);
  }, [c]);
  const E = x.useCallback(
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
Mv.displayName = TE;
var PE = "SelectPopperPosition", Xc = x.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = wt,
    ...s
  } = e, i = Ha(n);
  return /* @__PURE__ */ p.jsx(
    SC,
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
Xc.displayName = PE;
var [DE, Dd] = vo(hr, {}), Qc = "SelectViewport", Rv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = Hn(Qc, n), i = Dd(Qc, n), a = xe(t, s.onViewportChange), l = x.useRef(0);
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
      /* @__PURE__ */ p.jsx(Ua.Slot, { scope: n, children: /* @__PURE__ */ p.jsx(
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
          onScroll: X(o.onScroll, (c) => {
            const u = c.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: d } = i;
            if (d != null && d.current && f) {
              const g = Math.abs(l.current - u.scrollTop);
              if (g > 0) {
                const w = window.innerHeight - wt * 2, y = parseFloat(f.style.minHeight), b = parseFloat(f.style.height), m = Math.max(y, b);
                if (m < w) {
                  const h = m + g, v = Math.min(w, h), S = h - v;
                  f.style.height = v + "px", f.style.bottom === "0px" && (u.scrollTop = S > 0 ? S : 0, f.style.justifyContent = "flex-end");
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
Rv.displayName = Qc;
var jv = "SelectGroup", [NE, AE] = vo(jv), ME = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Rn();
    return /* @__PURE__ */ p.jsx(NE, { scope: n, id: o, children: /* @__PURE__ */ p.jsx(q.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
ME.displayName = jv;
var Lv = "SelectLabel", RE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = AE(Lv, n);
    return /* @__PURE__ */ p.jsx(q.div, { id: o.id, ...r, ref: t });
  }
);
RE.displayName = Lv;
var pa = "SelectItem", [jE, _v] = vo(pa), Ov = x.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...i
    } = e, a = Wn(pa, n), l = Hn(pa, n), c = a.value === r, [u, f] = x.useState(s ?? ""), [d, g] = x.useState(!1), w = xe(
      t,
      (h) => {
        var v;
        return (v = l.itemRefCallback) == null ? void 0 : v.call(l, h, r, o);
      }
    ), y = Rn(), b = x.useRef("touch"), m = () => {
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
        textId: y,
        isSelected: c,
        onItemTextChange: x.useCallback((h) => {
          f((v) => v || ((h == null ? void 0 : h.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ p.jsx(
          Ua.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: u,
            children: /* @__PURE__ */ p.jsx(
              q.div,
              {
                role: "option",
                "aria-labelledby": y,
                "data-highlighted": d ? "" : void 0,
                "aria-selected": c && d,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: w,
                onFocus: X(i.onFocus, () => g(!0)),
                onBlur: X(i.onBlur, () => g(!1)),
                onClick: X(i.onClick, () => {
                  b.current !== "mouse" && m();
                }),
                onPointerUp: X(i.onPointerUp, () => {
                  b.current === "mouse" && m();
                }),
                onPointerDown: X(i.onPointerDown, (h) => {
                  b.current = h.pointerType;
                }),
                onPointerMove: X(i.onPointerMove, (h) => {
                  var v;
                  b.current = h.pointerType, o ? (v = l.onItemLeave) == null || v.call(l) : b.current === "mouse" && h.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: X(i.onPointerLeave, (h) => {
                  var v;
                  h.currentTarget === document.activeElement && ((v = l.onItemLeave) == null || v.call(l));
                }),
                onKeyDown: X(i.onKeyDown, (h) => {
                  var S;
                  ((S = l.searchRef) == null ? void 0 : S.current) !== "" && h.key === " " || (yE.includes(h.key) && m(), h.key === " " && h.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Ov.displayName = pa;
var Io = "SelectItemText", Iv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, i = Wn(Io, n), a = Hn(Io, n), l = _v(Io, n), c = bE(Io, n), [u, f] = x.useState(null), d = xe(
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
    ), { onNativeOptionAdd: y, onNativeOptionRemove: b } = c;
    return Ue(() => (y(w), () => b(w)), [y, b, w]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(q.span, { id: l.textId, ...s, ref: d }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? po.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
Iv.displayName = Io;
var Fv = "SelectItemIndicator", Vv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return _v(Fv, n).isSelected ? /* @__PURE__ */ p.jsx(q.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Vv.displayName = Fv;
var qc = "SelectScrollUpButton", zv = x.forwardRef((e, t) => {
  const n = Hn(qc, e.__scopeSelect), r = Dd(qc, e.__scopeSelect), [o, s] = x.useState(!1), i = xe(t, r.onScrollButtonChange);
  return Ue(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollTop > 0;
        s(c);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    $v,
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
zv.displayName = qc;
var Zc = "SelectScrollDownButton", Bv = x.forwardRef((e, t) => {
  const n = Hn(Zc, e.__scopeSelect), r = Dd(Zc, e.__scopeSelect), [o, s] = x.useState(!1), i = xe(t, r.onScrollButtonChange);
  return Ue(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollHeight - l.clientHeight, u = Math.ceil(l.scrollTop) < c;
        s(u);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    $v,
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
Bv.displayName = Zc;
var $v = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = Hn("SelectScrollButton", n), i = x.useRef(null), a = Wa(n), l = x.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return x.useEffect(() => () => l(), [l]), Ue(() => {
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
      onPointerDown: X(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: X(o.onPointerMove, () => {
        var c;
        (c = s.onItemLeave) == null || c.call(s), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: X(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), LE = "SelectSeparator", _E = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ p.jsx(q.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
_E.displayName = LE;
var Jc = "SelectArrow", OE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ha(n), s = Wn(Jc, n), i = Hn(Jc, n);
    return s.open && i.position === "popper" ? /* @__PURE__ */ p.jsx(kC, { ...o, ...r, ref: t }) : null;
  }
);
OE.displayName = Jc;
var IE = "SelectBubbleInput", Uv = x.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = x.useRef(null), s = xe(r, o), i = DC(t);
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
        style: { ...dv, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
Uv.displayName = IE;
function Wv(e) {
  return e === "" || e === void 0;
}
function Hv(e) {
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
function Kv(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = FE(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const l = i.find(
    (c) => c.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function FE(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var VE = bv, zE = kv, BE = Ev, $E = Tv, UE = Pv, WE = Dv, HE = Rv, KE = Ov, GE = Iv, YE = Vv, XE = zv, QE = Bv;
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qE = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Gv = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
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
      className: Gv("lucide", o),
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
    ({ className: r, ...o }, s) => x.createElement(JE, {
      ref: s,
      iconNode: t,
      className: Gv(`lucide-${qE(e)}`, r),
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
const Yv = Me("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xv = Me("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ka = Me("Building2", [
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
const bs = Me("CalendarDays", [
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
const Li = Me("Calendar", [
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
const Nd = Me("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qv = Me("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qv = Me("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zv = Me("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oo = Me("Clock", [
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
const _i = Me("LoaderCircle", [
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
function ci({
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
      className: ve(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ p.jsx($E, { asChild: !0, children: /* @__PURE__ */ p.jsx(Nd, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function di({
  className: e,
  children: t,
  position: n = "popper",
  ...r
}) {
  return /* @__PURE__ */ p.jsx(UE, { children: /* @__PURE__ */ p.jsxs(
    WE,
    {
      "data-slot": "select-content",
      className: ve(
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
            className: ve(
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
      className: ve(
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
      className: ve(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p.jsx(Zv, { className: "size-4" })
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
      className: ve(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p.jsx(Nd, { className: "size-4" })
    }
  );
}
const eu = x.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ p.jsx(
    "input",
    {
      type: t,
      className: ve(
        "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
eu.displayName = "Input";
var Il = "rovingFocusGroup.onEntryFocus", aT = { bubbles: !1, cancelable: !0 }, Ls = "RovingFocusGroup", [tu, Jv, lT] = Fy(Ls), [cT, e0] = mo(
  Ls,
  [lT]
), [uT, dT] = cT(Ls), t0 = x.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(tu.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(tu.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(fT, { ...e, ref: t }) }) })
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
    onEntryFocus: c,
    preventScrollOnEntryFocus: u = !1,
    ...f
  } = e, d = x.useRef(null), g = xe(t, d), w = hd(s), [y, b] = ws({
    prop: i,
    defaultProp: a ?? null,
    onChange: l,
    caller: Ls
  }), [m, h] = x.useState(!1), v = _n(c), S = Jv(n), k = x.useRef(!1), [E, C] = x.useState(0);
  return x.useEffect(() => {
    const T = d.current;
    if (T)
      return T.addEventListener(Il, v), () => T.removeEventListener(Il, v);
  }, [v]), /* @__PURE__ */ p.jsx(
    uT,
    {
      scope: n,
      orientation: r,
      dir: w,
      loop: o,
      currentTabStopId: y,
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
          onMouseDown: X(e.onMouseDown, () => {
            k.current = !0;
          }),
          onFocus: X(e.onFocus, (T) => {
            const M = !k.current;
            if (T.target === T.currentTarget && M && !m) {
              const D = new CustomEvent(Il, aT);
              if (T.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                const P = S().filter((V) => V.focusable), A = P.find((V) => V.active), L = P.find((V) => V.id === y), B = [A, L, ...P].filter(
                  Boolean
                ).map((V) => V.ref.current);
                o0(B, u);
              }
            }
            k.current = !1;
          }),
          onBlur: X(e.onBlur, () => h(!1))
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
    } = e, l = Rn(), c = s || l, u = dT(n0, n), f = u.currentTabStopId === c, d = Jv(n), { onFocusableItemAdd: g, onFocusableItemRemove: w, currentTabStopId: y } = u;
    return x.useEffect(() => {
      if (r)
        return g(), () => w();
    }, [r, g, w]), /* @__PURE__ */ p.jsx(
      tu.ItemSlot,
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
            onMouseDown: X(e.onMouseDown, (b) => {
              r ? u.onItemFocus(c) : b.preventDefault();
            }),
            onFocus: X(e.onFocus, () => u.onItemFocus(c)),
            onKeyDown: X(e.onKeyDown, (b) => {
              if (b.key === "Tab" && b.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (b.target !== b.currentTarget) return;
              const m = mT(b, u.orientation, u.dir);
              if (m !== void 0) {
                if (b.metaKey || b.ctrlKey || b.altKey || b.shiftKey) return;
                b.preventDefault();
                let v = d().filter((S) => S.focusable).map((S) => S.ref.current);
                if (m === "last") v.reverse();
                else if (m === "prev" || m === "next") {
                  m === "prev" && v.reverse();
                  const S = v.indexOf(b.currentTarget);
                  v = u.loop ? gT(v, S + 1) : v.slice(S + 1);
                }
                setTimeout(() => o0(v));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: f, hasTabStop: y != null }) : i
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
  const { present: t, children: n } = e, r = wT(t), o = typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n), s = xe(r.ref, bT(o));
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
    const c = fi(r.current);
    s.current = a === "mounted" ? c : "none";
  }, [a]), Ue(() => {
    const c = r.current, u = o.current;
    if (u !== e) {
      const d = s.current, g = fi(c);
      e ? l("MOUNT") : g === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(u && d !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Ue(() => {
    if (t) {
      let c;
      const u = t.ownerDocument.defaultView ?? window, f = (g) => {
        const y = fi(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && y && (l("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, d = (g) => {
        g.target === t && (s.current = fi(r.current));
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
function fi(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function bT(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ga = "Tabs", [ST, LA] = mo(Ga, [
  e0
]), s0 = e0(), [kT, Ad] = ST(Ga), i0 = x.forwardRef(
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
    } = e, u = hd(a), [f, d] = ws({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: Ga
    });
    return /* @__PURE__ */ p.jsx(
      kT,
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
i0.displayName = Ga;
var a0 = "TabsList", l0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = Ad(a0, n), i = s0(n);
    return /* @__PURE__ */ p.jsx(
      yT,
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
l0.displayName = a0;
var c0 = "TabsTrigger", u0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, i = Ad(c0, n), a = s0(n), l = p0(i.baseId, r), c = h0(i.baseId, r), u = r === i.value;
    return /* @__PURE__ */ p.jsx(
      vT,
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
            onMouseDown: X(e.onMouseDown, (f) => {
              !o && f.button === 0 && f.ctrlKey === !1 ? i.onValueChange(r) : f.preventDefault();
            }),
            onKeyDown: X(e.onKeyDown, (f) => {
              [" ", "Enter"].includes(f.key) && i.onValueChange(r);
            }),
            onFocus: X(e.onFocus, () => {
              const f = i.activationMode !== "manual";
              !u && !o && f && i.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
u0.displayName = c0;
var d0 = "TabsContent", f0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...i } = e, a = Ad(d0, n), l = p0(a.baseId, r), c = h0(a.baseId, r), u = r === a.value, f = x.useRef(u);
    return x.useEffect(() => {
      const d = requestAnimationFrame(() => f.current = !1);
      return () => cancelAnimationFrame(d);
    }, []), /* @__PURE__ */ p.jsx(_s, { present: o || u, children: ({ present: d }) => /* @__PURE__ */ p.jsx(
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
f0.displayName = d0;
function p0(e, t) {
  return `${e}-trigger-${t}`;
}
function h0(e, t) {
  return `${e}-content-${t}`;
}
var CT = i0, ET = l0, TT = u0, PT = f0;
function DT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    CT,
    {
      "data-slot": "tabs",
      className: ve("flex flex-col gap-2", e),
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
      className: ve(
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
      className: ve(
        "data-[state=active]:bg-background cursor-pointer dark:data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus:outline-none",
        e
      ),
      ...t
    }
  );
}
function pi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    PT,
    {
      "data-slot": "tabs-content",
      className: ve("flex-1 outline-none", e),
      ...t
    }
  );
}
const NT = (e, t) => {
  const n = [];
  if (!e || !t) {
    const i = /* @__PURE__ */ new Date(), a = i.getFullYear(), l = i.getMonth();
    return Jp(a, l);
  }
  const r = new Date(e), o = new Date(t);
  let s = new Date(r.getFullYear(), r.getMonth(), 1);
  for (; s <= o; ) {
    const i = Jp(s.getFullYear(), s.getMonth());
    n.push(...i), s.setMonth(s.getMonth() + 1);
  }
  return n;
}, Jp = (e, t) => {
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
}, AT = (e) => {
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
function MT(e = {}) {
  const [t, n] = x.useState(!0);
  x.useEffect(() => {
    const s = setTimeout(() => {
      n(!1);
    }, 500);
    return () => clearTimeout(s);
  }, [e.start_date, e.end_date]);
  const r = G.useMemo(() => NT(e.start_date, e.end_date), [e.start_date, e.end_date]), o = G.useMemo(() => AT(r), [r]);
  return {
    events: r,
    eventMetadata: o,
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
class RT {
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
    return !t || !Array.isArray(t) || t.length === 0 ? "default" : {
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
const kr = new RT();
function m0(e = {}) {
  const [t, n] = x.useState([]), [r, o] = x.useState({}), [s, i] = x.useState(!0), [a, l] = x.useState(!1), [c, u] = x.useState(null), [f, d] = x.useState(0), [g, w] = x.useState(0), [y, b] = x.useState(e), [m, h] = x.useState(), v = x.useRef(""), S = x.useRef(!0);
  x.useEffect(() => {
    const M = JSON.stringify(e);
    if (S.current) {
      S.current = !1, v.current = M, b(e);
      return;
    }
    v.current !== M && (v.current = M, b(e));
  }, [e]);
  const k = x.useCallback(async () => {
    var M;
    try {
      i(!0), u(null);
      const D = await kr.fetchEvents(y);
      if ((M = D.performance) != null && M.server_processed) {
        const P = D.events.map((A) => ({
          ...A,
          startDate: new Date(A.startDate),
          endDate: new Date(A.endDate)
        }));
        n(P), o(D.eventMetadata || {}), d(D.total), w(D.pages), h(D.pagination);
      } else {
        const P = [], A = {};
        D.events.forEach((L) => {
          const O = kr.transformWordPressEventToEvent(L), B = kr.transformWordPressEventToMetadata(L);
          P.push(O), A[O.id] = B;
        }), n(P), o(A), d(D.total), w(D.pages), h(D.pagination);
      }
    } catch (D) {
      console.error("Error fetching events:", D), n([]), o({}), d(0), w(0), u(D instanceof Error ? D.message : "Failed to load events");
    } finally {
      i(!1);
    }
  }, [JSON.stringify(y)]);
  x.useEffect(() => {
    k();
  }, [k]);
  const E = x.useCallback(() => {
    k();
  }, [k]), C = x.useCallback(async () => {
    var M;
    if (!(!(m != null && m.hasMore) || a))
      try {
        l(!0), u(null);
        const D = {
          ...y,
          page: m.nextPage || (y.page || 1) + 1
        }, P = await kr.fetchEvents(D);
        if ((M = P.performance) != null && M.server_processed) {
          const A = P.events.map((L) => ({
            ...L,
            startDate: new Date(L.startDate),
            endDate: new Date(L.endDate)
          }));
          n((L) => [...L, ...A]), o((L) => ({ ...L, ...P.eventMetadata || {} })), h(P.pagination);
        } else {
          const A = [], L = {};
          P.events.forEach((O) => {
            const B = kr.transformWordPressEventToEvent(O), V = kr.transformWordPressEventToMetadata(O);
            A.push(B), L[B.id] = V;
          }), n((O) => [...O, ...A]), o((O) => ({ ...O, ...L })), h(P.pagination);
        }
      } catch (D) {
        console.error("Error loading more events:", D), u(D instanceof Error ? D.message : "Failed to load more events");
      } finally {
        l(!1);
      }
  }, [JSON.stringify(y), JSON.stringify(m), a]), T = x.useCallback((M) => {
    b((D) => ({ ...D, ...M }));
  }, []);
  return {
    events: t,
    eventMetadata: r,
    loading: s,
    error: c,
    total: f,
    pages: g,
    refetch: E,
    setFilters: T,
    hasMore: (m == null ? void 0 : m.hasMore) || !1,
    loadMore: C,
    loadingMore: a,
    pagination: m
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
        const a = await fetch("/wp-json/wp/v2/event_category?per_page=100&orderby=name&order=asc");
        if (!a.ok)
          throw new Error(`HTTP error! status: ${a.status}`);
        const l = await a.json();
        let c = {};
        const u = l.map((f) => ({
          id: f.id,
          name: f.name,
          slug: f.slug,
          count: f.count,
          variant: c[f.slug] || _T(f.slug)
        }));
        t(u);
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
function OT() {
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
var Ya = "Dialog", [y0, _A] = mo(Ya), [IT, At] = y0(Ya), v0 = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !0
  } = e, a = x.useRef(null), l = x.useRef(null), [c, u] = ws({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Ya
  });
  return /* @__PURE__ */ p.jsx(
    IT,
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
v0.displayName = Ya;
var x0 = "DialogTrigger", FT = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = At(x0, n), s = xe(t, o.triggerRef);
    return /* @__PURE__ */ p.jsx(
      q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": jd(o.open),
        ...r,
        ref: s,
        onClick: X(e.onClick, o.onOpenToggle)
      }
    );
  }
);
FT.displayName = x0;
var Md = "DialogPortal", [VT, w0] = y0(Md, {
  forceMount: void 0
}), b0 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = At(Md, t);
  return /* @__PURE__ */ p.jsx(VT, { scope: t, forceMount: n, children: x.Children.map(r, (i) => /* @__PURE__ */ p.jsx(_s, { present: n || s.open, children: /* @__PURE__ */ p.jsx(Td, { asChild: !0, container: o, children: i }) })) });
};
b0.displayName = Md;
var ha = "DialogOverlay", S0 = x.forwardRef(
  (e, t) => {
    const n = w0(ha, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = At(ha, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ p.jsx(_s, { present: r || s.open, children: /* @__PURE__ */ p.jsx(BT, { ...o, ref: t }) }) : null;
  }
);
S0.displayName = ha;
var zT = /* @__PURE__ */ ys("DialogOverlay.RemoveScroll"), BT = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = At(ha, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p.jsx(Pd, { as: zT, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ p.jsx(
        q.div,
        {
          "data-state": jd(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), mr = "DialogContent", k0 = x.forwardRef(
  (e, t) => {
    const n = w0(mr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = At(mr, e.__scopeDialog);
    return /* @__PURE__ */ p.jsx(_s, { present: r || s.open, children: s.modal ? /* @__PURE__ */ p.jsx($T, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(UT, { ...o, ref: t }) });
  }
);
k0.displayName = mr;
var $T = x.forwardRef(
  (e, t) => {
    const n = At(mr, e.__scopeDialog), r = x.useRef(null), o = xe(t, n.contentRef, r);
    return x.useEffect(() => {
      const s = r.current;
      if (s) return pv(s);
    }, []), /* @__PURE__ */ p.jsx(
      C0,
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
), UT = x.forwardRef(
  (e, t) => {
    const n = At(mr, e.__scopeDialog), r = x.useRef(!1), o = x.useRef(!1);
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
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = s.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(i)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), C0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = At(mr, n), l = x.useRef(null), c = xe(t, l);
    return By(), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        gd,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ p.jsx(
            md,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": jd(a.open),
              ...i,
              ref: c,
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
), Rd = "DialogTitle", E0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = At(Rd, n);
    return /* @__PURE__ */ p.jsx(q.h2, { id: o.titleId, ...r, ref: t });
  }
);
E0.displayName = Rd;
var T0 = "DialogDescription", P0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = At(T0, n);
    return /* @__PURE__ */ p.jsx(q.p, { id: o.descriptionId, ...r, ref: t });
  }
);
P0.displayName = T0;
var D0 = "DialogClose", N0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = At(D0, n);
    return /* @__PURE__ */ p.jsx(
      q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: X(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
N0.displayName = D0;
function jd(e) {
  return e ? "open" : "closed";
}
var A0 = "DialogTitleWarning", [OA, M0] = DS(A0, {
  contentName: mr,
  titleName: Rd,
  docsSlug: "dialog"
}), WT = ({ titleId: e }) => {
  const t = M0(A0), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return x.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, HT = "DialogDescriptionWarning", KT = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${M0(HT).contentName}}.`;
  return x.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, GT = v0, YT = b0, R0 = S0, j0 = k0, L0 = E0, _0 = P0, XT = N0;
const QT = GT, qT = YT, O0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  R0,
  {
    ref: n,
    className: ve(
      "fixed inset-0 z-[99999] bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
O0.displayName = R0.displayName;
const I0 = x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.jsxs(qT, { children: [
  /* @__PURE__ */ p.jsx(O0, {}),
  /* @__PURE__ */ p.jsxs(
    j0,
    {
      ref: r,
      className: ve(
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
I0.displayName = j0.displayName;
const F0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  "div",
  {
    className: ve(
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
    className: ve(
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
    className: ve(
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
    className: ve("text-sm text-muted-foreground", e),
    ...t
  }
));
B0.displayName = _0.displayName;
function so({
  className: e,
  variant: t = "default",
  size: n = "default",
  ...r
}) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      className: ve(
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
  const [o, s] = G.useState(!1);
  if (G.useEffect(() => {
    var u;
    e && ((u = t[e.id]) != null && u.website) && console.log("Event website URL:", t[e.id].website);
  }, [e, t]), !e) return null;
  const i = t[e.id], a = (u, f = 180) => {
    if (!u || u.length <= f) return u;
    const d = u.substring(0, f), g = d.lastIndexOf("."), w = d.lastIndexOf(" "), y = g > f - 50 ? g + 1 : w;
    return u.substring(0, y > 0 ? y : f).trim();
  }, l = (u) => {
    const f = e.startDate, d = e.endDate || new Date(f.getTime() + 60 * 60 * 1e3), g = (w) => w.toISOString().replace(/-|:|\.\d\d\d/g, "");
    switch (u) {
      case "google":
        const w = new URL("https://calendar.google.com/calendar/render");
        return w.searchParams.append("action", "TEMPLATE"), w.searchParams.append("text", e.title), w.searchParams.append("dates", `${g(f)}/${g(d)}`), w.searchParams.append("details", e.description || ""), i != null && i.location && w.searchParams.append("location", i.location), w.toString();
      case "outlook":
      case "apple":
        const y = [
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
        return `data:text/calendar;charset=utf8,${encodeURIComponent(y)}`;
    }
  }, c = {
    clubs: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    unbc: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    organizations: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    sports: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
  };
  return /* @__PURE__ */ p.jsx(QT, { open: n, onOpenChange: r, children: /* @__PURE__ */ p.jsxs(I0, { className: "max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 sm:w-full p-4 sm:p-6", children: [
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
              /* @__PURE__ */ p.jsx(Zv, { className: "h-4 w-4" })
            ] }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
              "Read more",
              /* @__PURE__ */ p.jsx(Nd, { className: "h-4 w-4" })
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "space-y-4 my-4", children: /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
        /* @__PURE__ */ p.jsx(oo, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
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
          /* @__PURE__ */ p.jsx(Ka, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
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
          i.category && /* @__PURE__ */ p.jsx(so, { className: c[i.category] || "bg-gray-100 text-gray-800", children: i.category.charAt(0).toUpperCase() + i.category.slice(1) }),
          i.registrationRequired && /* @__PURE__ */ p.jsx(so, { variant: "outline", className: "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300", children: "Registration Required" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsxs(V0, { className: "flex-col sm:flex-col gap-2", children: [
      /* @__PURE__ */ p.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400 mb-2", children: "Add to your calendar:" }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex gap-2 w-full", children: [
        /* @__PURE__ */ p.jsxs(
          qt,
          {
            variant: "outline",
            className: "flex-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 text-xs sm:text-sm",
            onClick: () => window.open(l("google"), "_blank"),
            children: [
              /* @__PURE__ */ p.jsx(Li, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Google"
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          qt,
          {
            variant: "outline",
            className: "flex-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 text-xs sm:text-sm",
            onClick: () => {
              const u = l("outlook"), f = document.createElement("a");
              f.href = u, f.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, f.click();
            },
            children: [
              /* @__PURE__ */ p.jsx(Li, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Outlook"
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          qt,
          {
            variant: "outline",
            className: "flex-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 text-xs sm:text-sm",
            onClick: () => {
              const u = l("apple"), f = document.createElement("a");
              f.href = u, f.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, f.click();
            },
            children: [
              /* @__PURE__ */ p.jsx(Li, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Apple"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
const Ld = x.createContext({});
function _d(e) {
  const t = x.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Xa = x.createContext(null), Od = x.createContext({
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
  }), { nonce: s } = x.useContext(Od);
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
  }, [t]), p.jsx(ZT, { isPresent: t, childRef: r, sizeRef: o, children: x.cloneElement(e, { ref: r }) });
}
const eP = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: i }) => {
  const a = _d(tP), l = x.useId(), c = x.useCallback((f) => {
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
  }, [n]), i === "popLayout" && (e = p.jsx(JT, { isPresent: n, children: e })), p.jsx(Xa.Provider, { value: u, children: e });
};
function tP() {
  return /* @__PURE__ */ new Map();
}
function U0(e = !0) {
  const t = x.useContext(Xa);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t, s = x.useId();
  x.useEffect(() => {
    e && o(s);
  }, [e]);
  const i = x.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, i] : [!0];
}
const hi = (e) => e.key || "";
function eh(e) {
  const t = [];
  return x.Children.forEach(e, (n) => {
    x.isValidElement(n) && t.push(n);
  }), t;
}
const Id = typeof window < "u", W0 = Id ? x.useLayoutEffect : x.useEffect, th = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: o = !0, mode: s = "sync", propagate: i = !1 }) => {
  const [a, l] = U0(i), c = x.useMemo(() => eh(e), [e]), u = i && !a ? [] : c.map(hi), f = x.useRef(!0), d = x.useRef(c), g = _d(() => /* @__PURE__ */ new Map()), [w, y] = x.useState(c), [b, m] = x.useState(c);
  W0(() => {
    f.current = !1, d.current = c;
    for (let S = 0; S < b.length; S++) {
      const k = hi(b[S]);
      u.includes(k) ? g.delete(k) : g.get(k) !== !0 && g.set(k, !1);
    }
  }, [b, u.length, u.join("-")]);
  const h = [];
  if (c !== w) {
    let S = [...c];
    for (let k = 0; k < b.length; k++) {
      const E = b[k], C = hi(E);
      u.includes(C) || (S.splice(k, 0, E), h.push(E));
    }
    s === "wait" && h.length && (S = h), m(eh(S)), y(c);
    return;
  }
  const { forceRender: v } = x.useContext(Ld);
  return p.jsx(p.Fragment, { children: b.map((S) => {
    const k = hi(S), E = i && !a ? !1 : c === b || u.includes(k), C = () => {
      if (g.has(k))
        g.set(k, !0);
      else
        return;
      let T = !0;
      g.forEach((M) => {
        M || (T = !1);
      }), T && (v == null || v(), m(d.current), i && (l == null || l()), r && r());
    };
    return p.jsx(eP, { isPresent: E, initial: !f.current || n ? void 0 : !1, custom: E ? void 0 : t, presenceAffectsLayout: o, mode: s, onExitComplete: E ? void 0 : C, children: S }, k);
  }) });
}, it = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let H0 = it;
// @__NO_SIDE_EFFECTS__
function Fd(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const io = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Zt = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, Jt = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, nP = {
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
const mi = [
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
  }, s = () => n = !0, i = mi.reduce((m, h) => (m[h] = rP(s), m), {}), { read: a, resolveKeyframes: l, update: c, preRender: u, render: f, postRender: d } = i, g = () => {
    const m = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(m - o.timestamp, oP), 1), o.timestamp = m, o.isProcessing = !0, a.process(o), l.process(o), c.process(o), u.process(o), f.process(o), d.process(o), o.isProcessing = !1, n && t && (r = !1, e(g));
  }, w = () => {
    n = !0, r = !0, o.isProcessing || e(g);
  };
  return { schedule: mi.reduce((m, h) => {
    const v = i[h];
    return m[h] = (S, k = !1, E = !1) => (n || w(), v.schedule(S, k, E)), m;
  }, {}), cancel: (m) => {
    for (let h = 0; h < mi.length; h++)
      i[mi[h]].cancel(m);
  }, state: o, steps: i };
}
const { schedule: ce, cancel: Fn, state: Le, steps: Fl } = K0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : it, !0), G0 = x.createContext({ strict: !1 }), nh = {
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
}, ao = {};
for (const e in nh)
  ao[e] = {
    isEnabled: (t) => nh[e].some((n) => !!t[n])
  };
function sP(e) {
  for (const t in e)
    ao[t] = {
      ...ao[t],
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
function ma(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || iP.has(e);
}
let Y0 = (e) => !ma(e);
function aP(e) {
  e && (Y0 = (t) => t.startsWith("on") ? !ma(t) : e(t));
}
try {
  aP(require("@emotion/is-prop-valid").default);
} catch {
}
function lP(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (Y0(o) || n === !0 && ma(o) || !t && !ma(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function cP(e) {
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
const Qa = x.createContext({});
function Ss(e) {
  return typeof e == "string" || Array.isArray(e);
}
function qa(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Vd = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], zd = ["initial", ...Vd];
function Za(e) {
  return qa(e.animate) || zd.some((t) => Ss(e[t]));
}
function X0(e) {
  return !!(Za(e) || e.variants);
}
function uP(e, t) {
  if (Za(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Ss(n) ? n : void 0,
      animate: Ss(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function dP(e) {
  const { initial: t, animate: n } = uP(e, x.useContext(Qa));
  return x.useMemo(() => ({ initial: t, animate: n }), [rh(t), rh(n)]);
}
function rh(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const fP = Symbol.for("motionComponentSymbol");
function Or(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function pP(e, t, n) {
  return x.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Or(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const Bd = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), hP = "framerAppearId", Q0 = "data-" + Bd(hP), { schedule: $d } = K0(queueMicrotask, !1), q0 = x.createContext({});
function mP(e, t, n, r, o) {
  var s, i;
  const { visualElement: a } = x.useContext(Qa), l = x.useContext(G0), c = x.useContext(Xa), u = x.useContext(Od).reducedMotion, f = x.useRef(null);
  r = r || l.renderer, !f.current && r && (f.current = r(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: u
  }));
  const d = f.current, g = x.useContext(q0);
  d && !d.projection && o && (d.type === "html" || d.type === "svg") && gP(f.current, n, o, g);
  const w = x.useRef(!1);
  x.useInsertionEffect(() => {
    d && w.current && d.update(n, c);
  });
  const y = n[Q0], b = x.useRef(!!y && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, y)) && ((i = window.MotionHasOptimisedAnimation) === null || i === void 0 ? void 0 : i.call(window, y)));
  return W0(() => {
    d && (w.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), $d.render(d.render), b.current && d.animationState && d.animationState.animateChanges());
  }), x.useEffect(() => {
    d && (!b.current && d.animationState && d.animationState.animateChanges(), b.current && (queueMicrotask(() => {
      var m;
      (m = window.MotionHandoffMarkAsComplete) === null || m === void 0 || m.call(window, y);
    }), b.current = !1));
  }), d;
}
function gP(e, t, n, r) {
  const { layoutId: o, layout: s, drag: i, dragConstraints: a, layoutScroll: l, layoutRoot: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Z0(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: s,
    alwaysMeasureLayout: !!i || a && Or(a),
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
function Z0(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : Z0(e.parent);
}
function yP({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  var s, i;
  e && sP(e);
  function a(c, u) {
    let f;
    const d = {
      ...x.useContext(Od),
      ...c,
      layoutId: vP(c)
    }, { isStatic: g } = d, w = dP(c), y = r(c, g);
    if (!g && Id) {
      xP();
      const b = wP(d);
      f = b.MeasureLayout, w.visualElement = mP(o, y, d, t, b.ProjectionNode);
    }
    return p.jsxs(Qa.Provider, { value: w, children: [f && w.visualElement ? p.jsx(f, { visualElement: w.visualElement, ...d }) : null, n(o, c, pP(y, w.visualElement, u), y, g, w.visualElement)] });
  }
  a.displayName = `motion.${typeof o == "string" ? o : `create(${(i = (s = o.displayName) !== null && s !== void 0 ? s : o.name) !== null && i !== void 0 ? i : ""})`}`;
  const l = x.forwardRef(a);
  return l[fP] = o, l;
}
function vP({ layoutId: e }) {
  const t = x.useContext(Ld).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function xP(e, t) {
  x.useContext(G0).strict;
}
function wP(e) {
  const { drag: t, layout: n } = ao;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const bP = [
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
function Ud(e) {
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
      !!(bP.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function oh(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Wd(e, t, n, r) {
  if (typeof t == "function") {
    const [o, s] = oh(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, s] = oh(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  return t;
}
const nu = (e) => Array.isArray(e), SP = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), kP = (e) => nu(e) ? e[e.length - 1] || 0 : e, Be = (e) => !!(e && e.getVelocity);
function Oi(e) {
  const t = Be(e) ? e.get() : e;
  return SP(t) ? t.toValue() : t;
}
function CP({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, o, s) {
  const i = {
    latestValues: EP(r, o, s, e),
    renderState: t()
  };
  return n && (i.onMount = (a) => n({ props: r, current: a, ...i }), i.onUpdate = (a) => n(a)), i;
}
const J0 = (e) => (t, n) => {
  const r = x.useContext(Qa), o = x.useContext(Xa), s = () => CP(e, t, r, o);
  return n ? s() : _d(s);
};
function EP(e, t, n, r) {
  const o = {}, s = r(e, {});
  for (const d in s)
    o[d] = Oi(s[d]);
  let { initial: i, animate: a } = e;
  const l = Za(e), c = X0(e);
  t && c && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || i === !1;
  const f = u ? a : i;
  if (f && typeof f != "boolean" && !qa(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let g = 0; g < d.length; g++) {
      const w = Wd(e, d[g]);
      if (w) {
        const { transitionEnd: y, transition: b, ...m } = w;
        for (const h in m) {
          let v = m[h];
          if (Array.isArray(v)) {
            const S = u ? v.length - 1 : 0;
            v = v[S];
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
const xo = [
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
], vr = new Set(xo), ex = (e) => (t) => typeof t == "string" && t.startsWith(e), tx = /* @__PURE__ */ ex("--"), TP = /* @__PURE__ */ ex("var(--"), Hd = (e) => TP(e) ? PP.test(e.split("/*")[0].trim()) : !1, PP = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, nx = (e, t) => t && typeof e == "number" ? t.transform(e) : e, an = (e, t, n) => n > t ? t : n < e ? e : n, wo = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, ks = {
  ...wo,
  transform: (e) => an(0, 1, e)
}, gi = {
  ...wo,
  default: 1
}, Os = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), yn = /* @__PURE__ */ Os("deg"), zt = /* @__PURE__ */ Os("%"), U = /* @__PURE__ */ Os("px"), DP = /* @__PURE__ */ Os("vh"), NP = /* @__PURE__ */ Os("vw"), sh = {
  ...zt,
  parse: (e) => zt.parse(e) / 100,
  transform: (e) => zt.transform(e * 100)
}, AP = {
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
}, MP = {
  rotate: yn,
  rotateX: yn,
  rotateY: yn,
  rotateZ: yn,
  scale: gi,
  scaleX: gi,
  scaleY: gi,
  scaleZ: gi,
  skew: yn,
  skewX: yn,
  skewY: yn,
  distance: U,
  translateX: U,
  translateY: U,
  translateZ: U,
  x: U,
  y: U,
  z: U,
  perspective: U,
  transformPerspective: U,
  opacity: ks,
  originX: sh,
  originY: sh,
  originZ: U
}, ih = {
  ...wo,
  transform: Math.round
}, Kd = {
  ...AP,
  ...MP,
  zIndex: ih,
  size: U,
  // SVG
  fillOpacity: ks,
  strokeOpacity: ks,
  numOctaves: ih
}, RP = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, jP = xo.length;
function LP(e, t, n) {
  let r = "", o = !0;
  for (let s = 0; s < jP; s++) {
    const i = xo[s], a = e[i];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (i.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const c = nx(a, Kd[i]);
      if (!l) {
        o = !1;
        const u = RP[i] || i;
        r += `${u}(${c}) `;
      }
      n && (t[i] = c);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function Gd(e, t, n) {
  const { style: r, vars: o, transformOrigin: s } = e;
  let i = !1, a = !1;
  for (const l in t) {
    const c = t[l];
    if (vr.has(l)) {
      i = !0;
      continue;
    } else if (tx(l)) {
      o[l] = c;
      continue;
    } else {
      const u = nx(c, Kd[l]);
      l.startsWith("origin") ? (a = !0, s[l] = u) : r[l] = u;
    }
  }
  if (t.transform || (i || n ? r.transform = LP(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = s;
    r.transformOrigin = `${l} ${c} ${u}`;
  }
}
const _P = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, OP = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function IP(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const s = o ? _P : OP;
  e[s.offset] = U.transform(-r);
  const i = U.transform(t), a = U.transform(n);
  e[s.array] = `${i} ${a}`;
}
function ah(e, t, n) {
  return typeof e == "string" ? e : U.transform(t + n * e);
}
function FP(e, t, n) {
  const r = ah(t, e.x, e.width), o = ah(n, e.y, e.height);
  return `${r} ${o}`;
}
function Yd(e, {
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
  if (Gd(e, c, f), u) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: d, style: g, dimensions: w } = e;
  d.transform && (w && (g.transform = d.transform), delete d.transform), w && (o !== void 0 || s !== void 0 || g.transform) && (g.transformOrigin = FP(w, o !== void 0 ? o : 0.5, s !== void 0 ? s : 0.5)), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && IP(d, i, a, l, !1);
}
const Xd = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), rx = () => ({
  ...Xd(),
  attrs: {}
}), Qd = (e) => typeof e == "string" && e.toLowerCase() === "svg";
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
    e.setAttribute(sx.has(o) ? o : Bd(o), t.attrs[o]);
}
const ga = {};
function VP(e) {
  Object.assign(ga, e);
}
function ax(e, { layout: t, layoutId: n }) {
  return vr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!ga[e] || e === "opacity");
}
function qd(e, t, n) {
  var r;
  const { style: o } = e, s = {};
  for (const i in o)
    (Be(o[i]) || t.style && Be(t.style[i]) || ax(i, e) || ((r = n == null ? void 0 : n.getValue(i)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[i] = o[i]);
  return s;
}
function lx(e, t, n) {
  const r = qd(e, t, n);
  for (const o in e)
    if (Be(e[o]) || Be(t[o])) {
      const s = xo.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
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
const lh = ["x", "y", "width", "height", "cx", "cy", "r"], BP = {
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
        for (let a = 0; a < lh.length; a++) {
          const l = lh[a];
          e[l] !== t[l] && (i = !0);
        }
      i && ce.read(() => {
        zP(n, r), ce.render(() => {
          Yd(r, o, Qd(n.tagName), e.transformTemplate), ix(n, r);
        });
      });
    }
  })
}, $P = {
  useVisualState: J0({
    scrapeMotionValuesFromProps: qd,
    createRenderState: Xd
  })
};
function cx(e, t, n) {
  for (const r in t)
    !Be(t[r]) && !ax(r, n) && (e[r] = t[r]);
}
function UP({ transformTemplate: e }, t) {
  return x.useMemo(() => {
    const n = Xd();
    return Gd(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function WP(e, t) {
  const n = e.style || {}, r = {};
  return cx(r, n, e), Object.assign(r, UP(e, t)), r;
}
function HP(e, t) {
  const n = {}, r = WP(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function KP(e, t, n, r) {
  const o = x.useMemo(() => {
    const s = rx();
    return Yd(s, t, Qd(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    cx(s, e.style, e), o.style = { ...s, ...o.style };
  }
  return o;
}
function GP(e = !1) {
  return (n, r, o, { latestValues: s }, i) => {
    const l = (Ud(n) ? KP : HP)(r, s, i, n), c = lP(r, typeof n == "string", e), u = n !== x.Fragment ? { ...c, ...l, ref: o } : {}, { children: f } = r, d = x.useMemo(() => Be(f) ? f.get() : f, [f]);
    return x.createElement(n, {
      ...u,
      children: d
    });
  };
}
function YP(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const i = {
      ...Ud(r) ? BP : $P,
      preloadedFeatures: e,
      useRender: GP(o),
      createVisualElement: t,
      Component: r
    };
    return yP(i);
  };
}
function ux(e, t) {
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
function Ja(e, t, n) {
  const r = e.getProps();
  return Wd(r, t, n !== void 0 ? n : r.custom, e);
}
const XP = /* @__PURE__ */ Fd(() => window.ScrollTimeline !== void 0);
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
function Zd(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const ru = 2e4;
function dx(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < ru; )
    t += n, r = e.next(t);
  return t >= ru ? 1 / 0 : t;
}
function Jd(e) {
  return typeof e == "function";
}
function ch(e, t) {
  e.timeline = t, e.onfinish = null;
}
const ef = (e) => Array.isArray(e) && typeof e[0] == "number", ZP = {
  linearEasing: void 0
};
function JP(e, t) {
  const n = /* @__PURE__ */ Fd(e);
  return () => {
    var r;
    return (r = ZP[t]) !== null && r !== void 0 ? r : n();
  };
}
const ya = /* @__PURE__ */ JP(() => {
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
    r += e(/* @__PURE__ */ io(0, o - 1, s)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function px(e) {
  return !!(typeof e == "function" && ya() || !e || typeof e == "string" && (e in ou || ya()) || ef(e) || Array.isArray(e) && e.every(px));
}
const Fo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, ou = {
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
    return typeof e == "function" && ya() ? fx(e, t) : ef(e) ? Fo(e) : Array.isArray(e) ? e.map((n) => hx(n, t) || ou.easeOut) : ou[e];
}
const bt = {
  x: !1,
  y: !1
};
function mx() {
  return bt.x || bt.y;
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
    const { target: l } = a, c = t(a);
    if (typeof c != "function" || !l)
      return;
    const u = uh((f) => {
      c(f), l.removeEventListener("pointerleave", u);
    });
    l.addEventListener("pointerleave", u, o);
  });
  return r.forEach((a) => {
    a.addEventListener("pointerenter", i, o);
  }), s;
}
const yx = (e, t) => t ? e === t ? !0 : yx(e, t.parentElement) : !1, tf = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, nD = /* @__PURE__ */ new Set([
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
function dh(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Vl(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const oD = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = dh(() => {
    if (Vo.has(n))
      return;
    Vl(n, "down");
    const o = dh(() => {
      Vl(n, "up");
    }), s = () => Vl(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function fh(e) {
  return tf(e) && !mx();
}
function sD(e, t, n = {}) {
  const [r, o, s] = gx(e, n), i = (a) => {
    const l = a.currentTarget;
    if (!fh(a) || Vo.has(l))
      return;
    Vo.add(l);
    const c = t(a), u = (g, w) => {
      window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", d), !(!fh(g) || !Vo.has(l)) && (Vo.delete(l), typeof c == "function" && c(g, { success: w }));
    }, f = (g) => {
      u(g, n.useGlobalTarget || yx(l, g.target));
    }, d = (g) => {
      u(g, !1);
    };
    window.addEventListener("pointerup", f, o), window.addEventListener("pointercancel", d, o);
  };
  return r.forEach((a) => {
    !rD(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", i, o), a.addEventListener("focus", (c) => oD(c, o), o);
  }), s;
}
function iD(e) {
  return e === "x" || e === "y" ? bt[e] ? null : (bt[e] = !0, () => {
    bt[e] = !1;
  }) : bt.x || bt.y ? null : (bt.x = bt.y = !0, () => {
    bt.x = bt.y = !1;
  });
}
const vx = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...xo
]);
let Ii;
function aD() {
  Ii = void 0;
}
const Bt = {
  now: () => (Ii === void 0 && Bt.set(Le.isProcessing || nP.useManualTiming ? Le.timestamp : performance.now()), Ii),
  set: (e) => {
    Ii = e, queueMicrotask(aD);
  }
};
function nf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function rf(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class of {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return nf(this.subscriptions, t), () => rf(this.subscriptions, t);
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
const ph = 30, lD = (e) => !isNaN(parseFloat(e));
class cD {
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
      const s = Bt.now();
      this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Bt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = lD(this.current));
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
    this.events[t] || (this.events[t] = new of());
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
    const t = Bt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > ph)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, ph);
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
  return new cD(e, t);
}
function uD(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Cs(n));
}
function dD(e, t) {
  const n = Ja(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const i in s) {
    const a = kP(s[i]);
    uD(e, i, a);
  }
}
function fD(e) {
  return !!(Be(e) && e.add);
}
function su(e, t) {
  const n = e.getValue("willChange");
  if (fD(n))
    return n.add(t);
}
function wx(e) {
  return e.props[Q0];
}
const bx = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, pD = 1e-7, hD = 12;
function mD(e, t, n, r, o) {
  let s, i, a = 0;
  do
    i = t + (n - t) / 2, s = bx(i, r, o) - e, s > 0 ? n = i : t = i;
  while (Math.abs(s) > pD && ++a < hD);
  return i;
}
function Is(e, t, n, r) {
  if (e === t && n === r)
    return it;
  const o = (s) => mD(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : bx(o(s), t, r);
}
const Sx = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, kx = (e) => (t) => 1 - e(1 - t), Cx = /* @__PURE__ */ Is(0.33, 1.53, 0.69, 0.99), sf = /* @__PURE__ */ kx(Cx), Ex = /* @__PURE__ */ Sx(sf), Tx = (e) => (e *= 2) < 1 ? 0.5 * sf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), af = (e) => 1 - Math.sin(Math.acos(e)), Px = kx(af), Dx = Sx(af), Nx = (e) => /^0[^.\s]+$/u.test(e);
function gD(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Nx(e) : !0;
}
const Qo = (e) => Math.round(e * 1e5) / 1e5, lf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function yD(e) {
  return e == null;
}
const vD = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, cf = (e, t) => (n) => !!(typeof n == "string" && vD.test(n) && n.startsWith(e) || t && !yD(n) && Object.prototype.hasOwnProperty.call(n, t)), Ax = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, s, i, a] = r.match(lf);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, xD = (e) => an(0, 255, e), zl = {
  ...wo,
  transform: (e) => Math.round(xD(e))
}, rr = {
  test: /* @__PURE__ */ cf("rgb", "red"),
  parse: /* @__PURE__ */ Ax("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + zl.transform(e) + ", " + zl.transform(t) + ", " + zl.transform(n) + ", " + Qo(ks.transform(r)) + ")"
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
const iu = {
  test: /* @__PURE__ */ cf("#"),
  parse: wD,
  transform: rr.transform
}, Ir = {
  test: /* @__PURE__ */ cf("hsl", "hue"),
  parse: /* @__PURE__ */ Ax("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + zt.transform(Qo(t)) + ", " + zt.transform(Qo(n)) + ", " + Qo(ks.transform(r)) + ")"
}, Ve = {
  test: (e) => rr.test(e) || iu.test(e) || Ir.test(e),
  parse: (e) => rr.test(e) ? rr.parse(e) : Ir.test(e) ? Ir.parse(e) : iu.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? rr.transform(e) : Ir.transform(e)
}, bD = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function SD(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(lf)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(bD)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Mx = "number", Rx = "color", kD = "var", CD = "var(", hh = "${}", ED = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Es(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let s = 0;
  const a = t.replace(ED, (l) => (Ve.test(l) ? (r.color.push(s), o.push(Rx), n.push(Ve.parse(l))) : l.startsWith(CD) ? (r.var.push(s), o.push(kD), n.push(l)) : (r.number.push(s), o.push(Mx), n.push(parseFloat(l))), ++s, hh)).split(hh);
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
        a === Mx ? s += Qo(o[i]) : a === Rx ? s += Ve.transform(o[i]) : s += o[i];
      }
    return s;
  };
}
const TD = (e) => typeof e == "number" ? 0 : e;
function PD(e) {
  const t = jx(e);
  return Lx(e)(t.map(TD));
}
const Vn = {
  test: SD,
  parse: jx,
  createTransformer: Lx,
  getAnimatableNone: PD
}, DD = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function ND(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(lf) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let s = DD.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + o + ")";
}
const AD = /\b([a-z-]*)\(.*?\)/gu, au = {
  ...Vn,
  getAnimatableNone: (e) => {
    const t = e.match(AD);
    return t ? t.map(ND).join(" ") : e;
  }
}, MD = {
  ...Kd,
  // Color props
  color: Ve,
  backgroundColor: Ve,
  outlineColor: Ve,
  fill: Ve,
  stroke: Ve,
  // Border props
  borderColor: Ve,
  borderTopColor: Ve,
  borderRightColor: Ve,
  borderBottomColor: Ve,
  borderLeftColor: Ve,
  filter: au,
  WebkitFilter: au
}, uf = (e) => MD[e];
function _x(e, t) {
  let n = uf(e);
  return n !== au && (n = Vn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const RD = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function jD(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const s = e[r];
    typeof s == "string" && !RD.has(s) && Es(s).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const s of t)
      e[s] = _x(n, o);
}
const mh = (e) => e === wo || e === U, gh = (e, t) => parseFloat(e.split(", ")[t]), yh = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/u);
  if (o)
    return gh(o[1], t);
  {
    const s = r.match(/^matrix\((.+)\)$/u);
    return s ? gh(s[1], e) : 0;
  }
}, LD = /* @__PURE__ */ new Set(["x", "y", "z"]), _D = xo.filter((e) => !LD.has(e));
function OD(e) {
  const t = [];
  return _D.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const lo = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: yh(4, 13),
  y: yh(5, 14)
};
lo.translateX = lo.x;
lo.translateY = lo.y;
const ir = /* @__PURE__ */ new Set();
let lu = !1, cu = !1;
function Ox() {
  if (cu) {
    const e = Array.from(ir).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = OD(r);
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
  cu = !1, lu = !1, ir.forEach((e) => e.complete()), ir.clear();
}
function Ix() {
  ir.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (cu = !0);
  });
}
function ID() {
  Ix(), Ox();
}
class df {
  constructor(t, n, r, o, s, i = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = s, this.isAsync = i;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (ir.add(this), lu || (lu = !0, ce.read(Ix), ce.resolveKeyframes(Ox))) : (this.readKeyframes(), this.complete());
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
  return Hd(o) ? Vx(o, t, n + 1) : o;
}
const zx = (e) => (t) => t.test(e), zD = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Bx = [wo, U, zt, yn, NP, DP, zD], vh = (e) => Bx.find(zx(e));
class $x extends df {
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
      if (typeof c == "string" && (c = c.trim(), Hd(c))) {
        const u = Vx(c, n.current);
        u !== void 0 && (t[l] = u), l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !vx.has(r) || t.length !== 2)
      return;
    const [o, s] = t, i = vh(o), a = vh(s);
    if (i !== a)
      if (mh(i) && mh(a))
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
      gD(t[o]) && r.push(o);
    r.length && jD(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = lo[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
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
    o[i] = lo[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, c]) => {
      n.getValue(l).set(c);
    }), this.resolveNoneKeyframes();
  }
}
const xh = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Vn.test(e) || e === "0") && // And it contains numbers and/or colors
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
  const s = e[e.length - 1], i = xh(o, t), a = xh(s, t);
  return !i || !a ? !1 : BD(e) || (n === "spring" || Jd(n)) && r;
}
const UD = (e) => e !== null;
function el(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(UD), s = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !s || r === void 0 ? o[s] : r;
}
const WD = 40;
class Ux {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: i = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Bt.now(), this.options = {
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
    return !this._resolved && !this.hasAttemptedResolve && ID(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = Bt.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: o, velocity: s, delay: i, onComplete: a, onUpdate: l, isGenerator: c } = this.options;
    if (!c && !$D(t, r, o, s))
      if (i)
        this.options.duration = 0;
      else {
        l && l(el(t, this.options, n)), a && a(), this.resolveFinishedPromise();
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
function Bl(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function HD({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, s = 0, i = 0;
  if (!t)
    o = s = i = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    o = Bl(l, a, e + 1 / 3), s = Bl(l, a, e), i = Bl(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(s * 255),
    blue: Math.round(i * 255),
    alpha: r
  };
}
function va(e, t) {
  return (n) => n > 0 ? t : e;
}
const $l = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, KD = [iu, rr, Ir], GD = (e) => KD.find((t) => t.test(e));
function wh(e) {
  const t = GD(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === Ir && (n = HD(n)), n;
}
const bh = (e, t) => {
  const n = wh(e), r = wh(t);
  if (!n || !r)
    return va(e, t);
  const o = { ...n };
  return (s) => (o.red = $l(n.red, r.red, s), o.green = $l(n.green, r.green, s), o.blue = $l(n.blue, r.blue, s), o.alpha = fe(n.alpha, r.alpha, s), rr.transform(o));
}, YD = (e, t) => (n) => t(e(n)), Fs = (...e) => e.reduce(YD), uu = /* @__PURE__ */ new Set(["none", "hidden"]);
function XD(e, t) {
  return uu.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function QD(e, t) {
  return (n) => fe(e, t, n);
}
function ff(e) {
  return typeof e == "number" ? QD : typeof e == "string" ? Hd(e) ? va : Ve.test(e) ? bh : JD : Array.isArray(e) ? Wx : typeof e == "object" ? Ve.test(e) ? bh : qD : va;
}
function Wx(e, t) {
  const n = [...e], r = n.length, o = e.map((s, i) => ff(s)(s, t[i]));
  return (s) => {
    for (let i = 0; i < r; i++)
      n[i] = o[i](s);
    return n;
  };
}
function qD(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = ff(e[o])(e[o], t[o]));
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
  const n = Vn.createTransformer(t), r = Es(e), o = Es(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? uu.has(e) && !o.values.length || uu.has(t) && !r.values.length ? XD(e, t) : Fs(Wx(ZD(r, o), o.values), n) : va(e, t);
};
function Hx(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? fe(e, t, n) : ff(e)(e, t);
}
const eN = 5;
function Kx(e, t, n) {
  const r = Math.max(t - eN, 0);
  return xx(n - e(r), t - r);
}
const ge = {
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
}, Ul = 1e-3;
function tN({ duration: e = ge.duration, bounce: t = ge.bounce, velocity: n = ge.velocity, mass: r = ge.mass }) {
  let o, s, i = 1 - t;
  i = an(ge.minDamping, ge.maxDamping, i), e = an(ge.minDuration, ge.maxDuration, /* @__PURE__ */ Jt(e)), i < 1 ? (o = (c) => {
    const u = c * i, f = u * e, d = u - n, g = du(c, i), w = Math.exp(-f);
    return Ul - d / g * w;
  }, s = (c) => {
    const f = c * i * e, d = f * n + n, g = Math.pow(i, 2) * Math.pow(c, 2) * e, w = Math.exp(-f), y = du(Math.pow(c, 2), i);
    return (-o(c) + Ul > 0 ? -1 : 1) * ((d - g) * w) / y;
  }) : (o = (c) => {
    const u = Math.exp(-c * e), f = (c - n) * e + 1;
    return -Ul + u * f;
  }, s = (c) => {
    const u = Math.exp(-c * e), f = (n - c) * (e * e);
    return u * f;
  });
  const a = 5 / e, l = rN(o, s, a);
  if (e = /* @__PURE__ */ Zt(e), isNaN(l))
    return {
      stiffness: ge.stiffness,
      damping: ge.damping,
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
const nN = 12;
function rN(e, t, n) {
  let r = n;
  for (let o = 1; o < nN; o++)
    r = r - e(r) / t(r);
  return r;
}
function du(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const oN = ["duration", "bounce"], sN = ["stiffness", "damping", "mass"];
function Sh(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function iN(e) {
  let t = {
    velocity: ge.velocity,
    stiffness: ge.stiffness,
    damping: ge.damping,
    mass: ge.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Sh(e, sN) && Sh(e, oN))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, s = 2 * an(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: ge.mass,
        stiffness: o,
        damping: s
      };
    } else {
      const n = tN(e);
      t = {
        ...t,
        ...n,
        mass: ge.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Gx(e = ge.visualDuration, t = ge.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: o } = n;
  const s = n.keyframes[0], i = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: s }, { stiffness: l, damping: c, mass: u, duration: f, velocity: d, isResolvedFromDuration: g } = iN({
    ...n,
    velocity: -/* @__PURE__ */ Jt(n.velocity || 0)
  }), w = d || 0, y = c / (2 * Math.sqrt(l * u)), b = i - s, m = /* @__PURE__ */ Jt(Math.sqrt(l / u)), h = Math.abs(b) < 5;
  r || (r = h ? ge.restSpeed.granular : ge.restSpeed.default), o || (o = h ? ge.restDelta.granular : ge.restDelta.default);
  let v;
  if (y < 1) {
    const k = du(m, y);
    v = (E) => {
      const C = Math.exp(-y * m * E);
      return i - C * ((w + y * m * b) / k * Math.sin(k * E) + b * Math.cos(k * E));
    };
  } else if (y === 1)
    v = (k) => i - Math.exp(-m * k) * (b + (w + m * b) * k);
  else {
    const k = m * Math.sqrt(y * y - 1);
    v = (E) => {
      const C = Math.exp(-y * m * E), T = Math.min(k * E, 300);
      return i - C * ((w + y * m * b) * Math.sinh(T) + k * b * Math.cosh(T)) / k;
    };
  }
  const S = {
    calculatedDuration: g && f || null,
    next: (k) => {
      const E = v(k);
      if (g)
        a.done = k >= f;
      else {
        let C = 0;
        y < 1 && (C = k === 0 ? /* @__PURE__ */ Zt(w) : Kx(v, k, E));
        const T = Math.abs(C) <= r, M = Math.abs(i - E) <= o;
        a.done = T && M;
      }
      return a.value = a.done ? i : E, a;
    },
    toString: () => {
      const k = Math.min(dx(S), ru), E = fx((C) => S.next(k * C).value, k, 30);
      return k + "ms " + E;
    }
  };
  return S;
}
function kh({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: s = 500, modifyTarget: i, min: a, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const f = e[0], d = {
    done: !1,
    value: f
  }, g = (T) => a !== void 0 && T < a || l !== void 0 && T > l, w = (T) => a === void 0 ? l : l === void 0 || Math.abs(a - T) < Math.abs(l - T) ? a : l;
  let y = n * t;
  const b = f + y, m = i === void 0 ? b : i(b);
  m !== b && (y = m - f);
  const h = (T) => -y * Math.exp(-T / r), v = (T) => m + h(T), S = (T) => {
    const M = h(T), D = v(T);
    d.done = Math.abs(M) <= c, d.value = d.done ? m : D;
  };
  let k, E;
  const C = (T) => {
    g(d.value) && (k = T, E = Gx({
      keyframes: [d.value, w(d.value)],
      velocity: Kx(v, T, d.value),
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
      let M = !1;
      return !E && k === void 0 && (M = !0, S(T), C(T)), k !== void 0 && T >= k ? E.next(T - k) : (!M && S(T), d);
    }
  };
}
const aN = /* @__PURE__ */ Is(0.42, 0, 1, 1), lN = /* @__PURE__ */ Is(0, 0, 0.58, 1), Yx = /* @__PURE__ */ Is(0.42, 0, 0.58, 1), cN = (e) => Array.isArray(e) && typeof e[0] != "number", uN = {
  linear: it,
  easeIn: aN,
  easeInOut: Yx,
  easeOut: lN,
  circIn: af,
  circInOut: Dx,
  circOut: Px,
  backIn: sf,
  backInOut: Ex,
  backOut: Cx,
  anticipate: Tx
}, Ch = (e) => {
  if (ef(e)) {
    H0(e.length === 4);
    const [t, n, r, o] = e;
    return Is(t, n, r, o);
  } else if (typeof e == "string")
    return uN[e];
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
  const a = dN(t, r, o), l = a.length, c = (u) => {
    if (i && u < e[0])
      return t[0];
    let f = 0;
    if (l > 1)
      for (; f < e.length - 2 && !(u < e[f + 1]); f++)
        ;
    const d = /* @__PURE__ */ io(e[f], e[f + 1], u);
    return a[f](d);
  };
  return n ? (u) => c(an(e[0], e[s - 1], u)) : c;
}
function pN(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ io(0, t, r);
    e.push(fe(n, 1, o));
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
function xa({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = cN(r) ? r.map(Ch) : Ch(r), s = {
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
    start: () => ce.update(t, !0),
    stop: () => Fn(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Le.isProcessing ? Le.timestamp : Bt.now()
  };
}, vN = {
  decay: kh,
  inertia: kh,
  tween: xa,
  keyframes: xa,
  spring: Gx
}, xN = (e) => e / 100;
class pf extends Ux {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options, i = (o == null ? void 0 : o.KeyframeResolver) || df, a = (l, c) => this.onKeyframesResolved(l, c);
    this.resolver = new i(s, a, n, r, o), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: s, velocity: i = 0 } = this.options, a = Jd(n) ? n : vN[n] || xa;
    let l, c;
    a !== xa && typeof t[0] != "number" && (l = Fs(xN, Hx(t[0], t[1])), t = [0, 100]);
    const u = a({ ...this.options, keyframes: t });
    s === "mirror" && (c = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -i
    })), u.calculatedDuration === null && (u.calculatedDuration = dx(u));
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
    const { delay: d, repeat: g, repeatType: w, repeatDelay: y, onUpdate: b } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const m = this.currentTime - d * (this.speed >= 0 ? 1 : -1), h = this.speed >= 0 ? m < 0 : m > u;
    this.currentTime = Math.max(m, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = u);
    let v = this.currentTime, S = s;
    if (g) {
      const T = Math.min(this.currentTime, u) / f;
      let M = Math.floor(T), D = T % 1;
      !D && T >= 1 && (D = 1), D === 1 && M--, M = Math.min(M, g + 1), !!(M % 2) && (w === "reverse" ? (D = 1 - D, y && (D -= y / f)) : w === "mirror" && (S = i)), v = an(0, 1, D) * f;
    }
    const k = h ? { done: !1, value: l[0] } : S.next(v);
    a && (k.value = a(k.value));
    let { done: E } = k;
    !h && c !== null && (E = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const C = this.holdTime === null && (this.state === "finished" || this.state === "running" && E);
    return C && o !== void 0 && (k.value = el(l, this.options, o)), b && b(k.value), C && this.finish(), k;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? /* @__PURE__ */ Jt(t.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ Jt(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ Zt(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ Jt(this.currentTime));
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
function bN(e, t, n, { delay: r = 0, duration: o = 300, repeat: s = 0, repeatType: i = "loop", ease: a = "easeInOut", times: l } = {}) {
  const c = { [t]: n };
  l && (c.offset = l);
  const u = hx(a, o);
  return Array.isArray(u) && (c.easing = u), e.animate(c, {
    delay: r,
    duration: o,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const SN = /* @__PURE__ */ Fd(() => Object.hasOwnProperty.call(Element.prototype, "animate")), wa = 10, kN = 2e4;
function CN(e) {
  return Jd(e.type) || e.type === "spring" || !px(e.ease);
}
function EN(e, t) {
  const n = new pf({
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
    r = n.sample(s), o.push(r.value), s += wa;
  return {
    times: void 0,
    keyframes: o,
    duration: s - wa,
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
class Eh extends Ux {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options;
    this.resolver = new $x(s, (i, a) => this.onKeyframesResolved(i, a), n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: r = 300, times: o, ease: s, type: i, motionValue: a, name: l, startTime: c } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof s == "string" && ya() && TN(s) && (s = Xx[s]), CN(this.options)) {
      const { onComplete: f, onUpdate: d, motionValue: g, element: w, ...y } = this.options, b = EN(t, y);
      t = b.keyframes, t.length === 1 && (t[1] = t[0]), r = b.duration, o = b.times, s = b.ease, i = "keyframes";
    }
    const u = bN(a.owner.current, l, t, { ...this.options, duration: r, times: o, ease: s });
    return u.startTime = c ?? this.calcStartTime(), this.pendingTimeline ? (ch(u, this.pendingTimeline), this.pendingTimeline = void 0) : u.onfinish = () => {
      const { onComplete: f } = this.options;
      a.set(el(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise();
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
    return /* @__PURE__ */ Jt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return /* @__PURE__ */ Jt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = /* @__PURE__ */ Zt(t);
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
      ch(r, t);
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
      const { motionValue: c, onUpdate: u, onComplete: f, element: d, ...g } = this.options, w = new pf({
        ...g,
        keyframes: r,
        duration: o,
        type: s,
        ease: i,
        times: a,
        isGenerator: !0
      }), y = /* @__PURE__ */ Zt(this.time);
      c.setWithVelocity(w.sample(y - wa).value, w.sample(y).value, wa);
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
    return SN() && r && wN.has(r) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !c && !o && s !== "mirror" && i !== 0 && a !== "inertia";
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
}, AN = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, MN = (e, { keyframes: t }) => t.length > 2 ? NN : vr.has(e) ? e.startsWith("scale") ? DN(t[1]) : PN : AN;
function RN({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: a, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
const hf = (e, t, n, r = {}, o, s) => (i) => {
  const a = Zd(r, e) || {}, l = a.delay || r.delay || 0;
  let { elapsed: c = 0 } = r;
  c = c - /* @__PURE__ */ Zt(l);
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
  RN(a) || (u = {
    ...u,
    ...MN(e, u)
  }), u.duration && (u.duration = /* @__PURE__ */ Zt(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ Zt(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let f = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (f = !0)), f && !s && t.get() !== void 0) {
    const d = el(u.keyframes, a);
    if (d !== void 0)
      return ce.update(() => {
        u.onUpdate(d), u.onComplete();
      }), new qP([]);
  }
  return !s && Eh.supports(u) ? new Eh(u) : new pf(u);
};
function jN({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Qx(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var s;
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (i = r);
  const c = [], u = o && e.animationState && e.animationState.getState()[o];
  for (const f in l) {
    const d = e.getValue(f, (s = e.latestValues[f]) !== null && s !== void 0 ? s : null), g = l[f];
    if (g === void 0 || u && jN(u, f))
      continue;
    const w = {
      delay: n,
      ...Zd(i || {}, f)
    };
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const m = wx(e);
      if (m) {
        const h = window.MotionHandoffAnimation(m, f, ce);
        h !== null && (w.startTime = h, y = !0);
      }
    }
    su(e, f), d.start(hf(f, d, g, e.shouldReduceMotion && vx.has(f) ? { type: !1 } : w, e, y));
    const b = d.animation;
    b && c.push(b);
  }
  return a && Promise.all(c).then(() => {
    ce.update(() => {
      a && dD(e, a);
    });
  }), c;
}
function fu(e, t, n = {}) {
  var r;
  const o = Ja(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = o ? () => Promise.all(Qx(e, o, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: u = 0, staggerChildren: f, staggerDirection: d } = s;
    return LN(e, t, u + c, f, d, n);
  } : () => Promise.resolve(), { when: l } = s;
  if (l) {
    const [c, u] = l === "beforeChildren" ? [i, a] : [a, i];
    return c().then(() => u());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function LN(e, t, n = 0, r = 0, o = 1, s) {
  const i = [], a = (e.variantChildren.size - 1) * r, l = o === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return Array.from(e.variantChildren).sort(_N).forEach((c, u) => {
    c.notify("AnimationStart", t), i.push(fu(c, t, {
      ...s,
      delay: n + l(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function _N(e, t) {
  return e.sortNodePosition(t);
}
function ON(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((s) => fu(e, s, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = fu(e, t, n);
  else {
    const o = typeof t == "function" ? Ja(e, t, n.custom) : t;
    r = Promise.all(Qx(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const IN = zd.length;
function qx(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? qx(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < IN; n++) {
    const r = zd[n], o = e.props[r];
    (Ss(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const FN = [...Vd].reverse(), VN = Vd.length;
function zN(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => ON(e, n, r)));
}
function BN(e) {
  let t = zN(e), n = Th(), r = !0;
  const o = (l) => (c, u) => {
    var f;
    const d = Ja(e, u, l === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
    if (d) {
      const { transition: g, transitionEnd: w, ...y } = d;
      c = { ...c, ...y, ...w };
    }
    return c;
  };
  function s(l) {
    t = l(e);
  }
  function i(l) {
    const { props: c } = e, u = qx(e.parent) || {}, f = [], d = /* @__PURE__ */ new Set();
    let g = {}, w = 1 / 0;
    for (let b = 0; b < VN; b++) {
      const m = FN[b], h = n[m], v = c[m] !== void 0 ? c[m] : u[m], S = Ss(v), k = m === l ? h.isActive : null;
      k === !1 && (w = b);
      let E = v === u[m] && v !== c[m] && S;
      if (E && r && e.manuallyAnimateOnMount && (E = !1), h.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !h.isActive && k === null || // If we didn't and don't have any defined prop for this animation type
      !v && !h.prevProp || // Or if the prop doesn't define an animation
      qa(v) || typeof v == "boolean")
        continue;
      const C = $N(h.prevProp, v);
      let T = C || // If we're making this variant active, we want to always make it active
      m === l && h.isActive && !E && S || // If we removed a higher-priority variant (i is in reverse order)
      b > w && S, M = !1;
      const D = Array.isArray(v) ? v : [v];
      let P = D.reduce(o(m), {});
      k === !1 && (P = {});
      const { prevResolvedValues: A = {} } = h, L = {
        ...A,
        ...P
      }, O = (z) => {
        T = !0, d.has(z) && (M = !0, d.delete(z)), h.needsAnimating[z] = !0;
        const N = e.getValue(z);
        N && (N.liveStyle = !1);
      };
      for (const z in L) {
        const N = P[z], j = A[z];
        if (g.hasOwnProperty(z))
          continue;
        let I = !1;
        nu(N) && nu(j) ? I = !ux(N, j) : I = N !== j, I ? N != null ? O(z) : d.add(z) : N !== void 0 && d.has(z) ? O(z) : h.protectedKeys[z] = !0;
      }
      h.prevProp = v, h.prevResolvedValues = P, h.isActive && (g = { ...g, ...P }), r && e.blockInitialAnimation && (T = !1), T && (!(E && C) || M) && f.push(...D.map((z) => ({
        animation: z,
        options: { type: m }
      })));
    }
    if (d.size) {
      const b = {};
      d.forEach((m) => {
        const h = e.getBaseTarget(m), v = e.getValue(m);
        v && (v.liveStyle = !0), b[m] = h ?? null;
      }), f.push({ animation: b });
    }
    let y = !!f.length;
    return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (y = !1), r = !1, y ? t(f) : Promise.resolve();
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
      n = Th(), r = !0;
    }
  };
}
function $N(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !ux(t, e) : !1;
}
function Xn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Th() {
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
class Kn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class UN extends Kn {
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
    qa(t) && (this.unmountControls = t.subscribe(this.node));
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
class HN extends Kn {
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
const GN = (e) => (t) => tf(t) && e(t, Vs(t));
function qo(e, t, n, r) {
  return Ts(e, t, GN(n), r);
}
const Ph = (e, t) => Math.abs(e - t);
function YN(e, t) {
  const n = Ph(e.x, t.x), r = Ph(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Zx {
  constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: s = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = Hl(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, g = YN(f.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !g)
        return;
      const { point: w } = f, { timestamp: y } = Le;
      this.history.push({ ...w, timestamp: y });
      const { onStart: b, onMove: m } = this.handlers;
      d || (b && b(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), m && m(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, d) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = Wl(d, this.transformPagePoint), ce.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, d) => {
      this.end();
      const { onEnd: g, onSessionEnd: w, resumeAnimation: y } = this.handlers;
      if (this.dragSnapToOrigin && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const b = Hl(f.type === "pointercancel" ? this.lastMoveEventInfo : Wl(d, this.transformPagePoint), this.history);
      this.startEvent && g && g(f, b), w && w(f, b);
    }, !tf(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = Vs(t), a = Wl(i, this.transformPagePoint), { point: l } = a, { timestamp: c } = Le;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = n;
    u && u(t, Hl(a, this.history)), this.removeListeners = Fs(qo(this.contextWindow, "pointermove", this.handlePointerMove), qo(this.contextWindow, "pointerup", this.handlePointerUp), qo(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Fn(this.updatePoint);
  }
}
function Wl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Dh(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Hl({ point: e }, t) {
  return {
    point: e,
    delta: Dh(e, Jx(t)),
    offset: Dh(e, XN(t)),
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
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > /* @__PURE__ */ Zt(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = /* @__PURE__ */ Jt(o.timestamp - r.timestamp);
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
function Nh(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = fe(t.min, t.max, e.origin), e.scale = lt(n) / lt(t), e.translate = fe(n.min, n.max, e.origin) - e.originPoint, (e.scale >= qN && e.scale <= ZN || isNaN(e.scale)) && (e.scale = 1), (e.translate >= JN && e.translate <= e2 || isNaN(e.translate)) && (e.translate = 0);
}
function Zo(e, t, n, r) {
  Nh(e.x, t.x, n.x, r ? r.originX : void 0), Nh(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Ah(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + lt(t);
}
function n2(e, t, n) {
  Ah(e.x, t.x, n.x), Ah(e.y, t.y, n.y);
}
function Mh(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + lt(t);
}
function Jo(e, t, n) {
  Mh(e.x, t.x, n.x), Mh(e.y, t.y, n.y);
}
function r2(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? fe(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? fe(n, e, r.max) : Math.min(e, n)), e;
}
function Rh(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function o2(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Rh(e.x, n, o),
    y: Rh(e.y, t, r)
  };
}
function jh(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function s2(e, t) {
  return {
    x: jh(e.x, t.x),
    y: jh(e.y, t.y)
  };
}
function i2(e, t) {
  let n = 0.5;
  const r = lt(e), o = lt(t);
  return o > r ? n = /* @__PURE__ */ io(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ io(e.min, e.max - o, t.min)), an(0, 1, n);
}
function a2(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const pu = 0.35;
function l2(e = pu) {
  return e === !1 ? e = 0 : e === !0 && (e = pu), {
    x: Lh(e, "left", "right"),
    y: Lh(e, "top", "bottom")
  };
}
function Lh(e, t, n) {
  return {
    min: _h(e, t),
    max: _h(e, n)
  };
}
function _h(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Oh = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Fr = () => ({
  x: Oh(),
  y: Oh()
}), Ih = () => ({ min: 0, max: 0 }), we = () => ({
  x: Ih(),
  y: Ih()
});
function ft(e) {
  return [e("x"), e("y")];
}
function nw({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function c2({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function u2(e, t) {
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
function Kl(e) {
  return e === void 0 || e === 1;
}
function hu({ scale: e, scaleX: t, scaleY: n }) {
  return !Kl(e) || !Kl(t) || !Kl(n);
}
function Zn(e) {
  return hu(e) || rw(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function rw(e) {
  return Fh(e.x) || Fh(e.y);
}
function Fh(e) {
  return e && e !== "0%";
}
function ba(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Vh(e, t, n, r, o) {
  return o !== void 0 && (e = ba(e, o, r)), ba(e, n, r) + t;
}
function mu(e, t = 0, n = 1, r, o) {
  e.min = Vh(e.min, t, n, r, o), e.max = Vh(e.max, t, n, r, o);
}
function ow(e, { x: t, y: n }) {
  mu(e.x, t.translate, t.scale, t.originPoint), mu(e.y, n.translate, n.scale, n.originPoint);
}
const zh = 0.999999999999, Bh = 1.0000000000001;
function d2(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let s, i;
  for (let a = 0; a < o; a++) {
    s = n[a], i = s.projectionDelta;
    const { visualElement: l } = s.options;
    l && l.props.style && l.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && zr(e, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, ow(e, i)), r && Zn(s.latestValues) && zr(e, s.latestValues));
  }
  t.x < Bh && t.x > zh && (t.x = 1), t.y < Bh && t.y > zh && (t.y = 1);
}
function Vr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function $h(e, t, n, r, o = 0.5) {
  const s = fe(e.min, e.max, o);
  mu(e, t, n, s, r);
}
function zr(e, t) {
  $h(e.x, t.x, t.scaleX, t.scale, t.originX), $h(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function sw(e, t) {
  return nw(u2(e.getBoundingClientRect(), t));
}
function f2(e, t, n) {
  const r = sw(e, n), { scroll: o } = t;
  return o && (Vr(r.x, o.offset.x), Vr(r.y, o.offset.y)), r;
}
const iw = ({ current: e }) => e ? e.ownerDocument.defaultView : null, p2 = /* @__PURE__ */ new WeakMap();
class h2 {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = we(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (u) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Vs(u).point);
    }, s = (u, f) => {
      const { drag: d, dragPropagation: g, onDragStart: w } = this.getProps();
      if (d && !g && (this.openDragLock && this.openDragLock(), this.openDragLock = iD(d), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ft((b) => {
        let m = this.getAxisMotionValue(b).get() || 0;
        if (zt.test(m)) {
          const { projection: h } = this.visualElement;
          if (h && h.layout) {
            const v = h.layout.layoutBox[b];
            v && (m = lt(v) * (parseFloat(m) / 100));
          }
        }
        this.originPoint[b] = m;
      }), w && ce.postRender(() => w(u, f)), su(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, i = (u, f) => {
      const { dragPropagation: d, dragDirectionLock: g, onDirectionLock: w, onDrag: y } = this.getProps();
      if (!d && !this.openDragLock)
        return;
      const { offset: b } = f;
      if (g && this.currentDirection === null) {
        this.currentDirection = m2(b), this.currentDirection !== null && w && w(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, b), this.updateAxis("y", f.point, b), this.visualElement.render(), y && y(u, f);
    }, a = (u, f) => this.stop(u, f), l = () => ft((u) => {
      var f;
      return this.getAnimationState(u) === "paused" && ((f = this.getAxisMotionValue(u).animation) === null || f === void 0 ? void 0 : f.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Zx(t, {
      onSessionStart: o,
      onStart: s,
      onMove: i,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
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
    if (!r || !yi(t, o, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (i = r2(i, this.constraints[t], this.elastic[t])), s.set(i);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, s = this.constraints;
    n && Or(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = o2(o.layoutBox, n) : this.constraints = !1, this.elastic = l2(r), s !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && ft((i) => {
      this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = a2(o.layoutBox[i], this.constraints[i]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Or(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const s = f2(r, o.root, this.visualElement.getTransformPagePoint());
    let i = s2(o.layout.layoutBox, s);
    if (n) {
      const a = n(c2(i));
      this.hasMutatedConstraints = !!a, a && (i = nw(a));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = ft((u) => {
      if (!yi(u, n, this.currentDirection))
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
    return su(this.visualElement, t), r.start(hf(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    ft((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    ft((t) => {
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
    ft((n) => {
      const { drag: r } = this.getProps();
      if (!yi(n, r, this.currentDirection))
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
    if (!Or(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    ft((i) => {
      const a = this.getAxisMotionValue(i);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[i] = i2({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), ft((i) => {
      if (!yi(i, t, null))
        return;
      const a = this.getAxisMotionValue(i), { min: l, max: c } = this.constraints[i];
      a.set(fe(l, c, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    p2.set(this.visualElement, this);
    const t = this.visualElement.current, n = qo(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Or(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, s = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), ce.read(r);
    const i = Ts(window, "resize", () => this.scalePositionWithinConstraints()), a = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (ft((u) => {
        const f = this.getAxisMotionValue(u);
        f && (this.originPoint[u] += l[u].translate, f.set(f.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      i(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: s = !1, dragElastic: i = pu, dragMomentum: a = !0 } = t;
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
function yi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function m2(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class g2 extends Kn {
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
const Uh = (e) => (t, n) => {
  e && ce.postRender(() => e(t, n));
};
class y2 extends Kn {
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
      onSessionStart: Uh(t),
      onStart: Uh(n),
      onMove: r,
      onEnd: (s, i) => {
        delete this.session, o && ce.postRender(() => o(s, i));
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
const Fi = {
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
function Wh(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Ro = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (U.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Wh(e, t.target.x), r = Wh(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, v2 = {
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
    })), Fi.hasEverUpdated = !0;
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
    t && (t.root.didUpdate(), $d.postRender(() => {
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
  const [t, n] = U0(), r = x.useContext(Ld);
  return p.jsx(x2, { ...e, layoutGroup: r, switchLayoutGroup: x.useContext(q0), isPresent: t, safeToRemove: n });
}
const w2 = {
  borderRadius: {
    ...Ro,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Ro,
  borderTopRightRadius: Ro,
  borderBottomLeftRadius: Ro,
  borderBottomRightRadius: Ro,
  boxShadow: v2
};
function b2(e, t, n) {
  const r = Be(e) ? e : Cs(e);
  return r.start(hf("", r, t, n)), r.animation;
}
function S2(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const k2 = (e, t) => e.depth - t.depth;
class C2 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    nf(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    rf(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(k2), this.isDirty = !1, this.children.forEach(t);
  }
}
function E2(e, t) {
  const n = Bt.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= t && (Fn(r), e(s - t));
  };
  return ce.read(r, !0), () => Fn(r);
}
const lw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], T2 = lw.length, Hh = (e) => typeof e == "string" ? parseFloat(e) : e, Kh = (e) => typeof e == "number" || U.test(e);
function P2(e, t, n, r, o, s) {
  o ? (e.opacity = fe(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    D2(r)
  ), e.opacityExit = fe(t.opacity !== void 0 ? t.opacity : 1, 0, N2(r))) : s && (e.opacity = fe(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < T2; i++) {
    const a = `border${lw[i]}Radius`;
    let l = Gh(t, a), c = Gh(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || Kh(l) === Kh(c) ? (e[a] = Math.max(fe(Hh(l), Hh(c), r), 0), (zt.test(c) || zt.test(l)) && (e[a] += "%")) : e[a] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = fe(t.rotate || 0, n.rotate || 0, r));
}
function Gh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const D2 = /* @__PURE__ */ cw(0, 0.5, Px), N2 = /* @__PURE__ */ cw(0.5, 0.95, it);
function cw(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ io(e, t, r));
}
function Yh(e, t) {
  e.min = t.min, e.max = t.max;
}
function dt(e, t) {
  Yh(e.x, t.x), Yh(e.y, t.y);
}
function Xh(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Qh(e, t, n, r, o) {
  return e -= t, e = ba(e, 1 / n, r), o !== void 0 && (e = ba(e, 1 / o, r)), e;
}
function A2(e, t = 0, n = 1, r = 0.5, o, s = e, i = e) {
  if (zt.test(t) && (t = parseFloat(t), t = fe(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let a = fe(s.min, s.max, r);
  e === s && (a -= t), e.min = Qh(e.min, t, n, a, o), e.max = Qh(e.max, t, n, a, o);
}
function qh(e, t, [n, r, o], s, i) {
  A2(e, t[n], t[r], t[o], t.scale, s, i);
}
const M2 = ["x", "scaleX", "originX"], R2 = ["y", "scaleY", "originY"];
function Zh(e, t, n, r) {
  qh(e.x, t, M2, n ? n.x : void 0, r ? r.x : void 0), qh(e.y, t, R2, n ? n.y : void 0, r ? r.y : void 0);
}
function Jh(e) {
  return e.translate === 0 && e.scale === 1;
}
function uw(e) {
  return Jh(e.x) && Jh(e.y);
}
function em(e, t) {
  return e.min === t.min && e.max === t.max;
}
function j2(e, t) {
  return em(e.x, t.x) && em(e.y, t.y);
}
function tm(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function dw(e, t) {
  return tm(e.x, t.x) && tm(e.y, t.y);
}
function nm(e) {
  return lt(e.x) / lt(e.y);
}
function rm(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class L2 {
  constructor() {
    this.members = [];
  }
  add(t) {
    nf(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (rf(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
    const { transformPerspective: c, rotate: u, rotateX: f, rotateY: d, skewX: g, skewY: w } = n;
    c && (r = `perspective(${c}px) ${r}`), u && (r += `rotate(${u}deg) `), f && (r += `rotateX(${f}deg) `), d && (r += `rotateY(${d}deg) `), g && (r += `skewX(${g}deg) `), w && (r += `skewY(${w}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Jn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, zo = typeof window < "u" && window.MotionDebug !== void 0, Gl = ["", "X", "Y", "Z"], O2 = { visibility: "hidden" }, om = 1e3;
let I2 = 0;
function Yl(e, t, n, r) {
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
    window.MotionCancelOptimisedAnimation(n, "transform", ce, !(o || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && fw(r);
}
function pw({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(i = {}, a = t == null ? void 0 : t()) {
      this.id = I2++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, zo && (Jn.totalNodes = Jn.resolvedTargetDeltas = Jn.recalculatedProjection = 0), this.nodes.forEach(z2), this.nodes.forEach(H2), this.nodes.forEach(K2), this.nodes.forEach(B2), zo && window.MotionDebug.record(Jn);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new C2());
    }
    addEventListener(i, a) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new of()), this.eventHandlers.get(i).add(a);
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
      this.isSVG = S2(i), this.instance = i;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || l) && (this.isLayoutDirty = !0), e) {
        let f;
        const d = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = E2(d, 250), Fi.hasAnimatedSinceResize && (Fi.hasAnimatedSinceResize = !1, this.nodes.forEach(im));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: g, layout: w }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || u.getDefaultTransition() || q2, { onLayoutAnimationStart: b, onLayoutAnimationComplete: m } = u.getProps(), h = !this.targetLayout || !dw(this.targetLayout, w) || g, v = !d && g;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || v || d && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, v);
          const S = {
            ...Zd(y, "layout"),
            onPlay: b,
            onComplete: m
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (S.delay = 0, S.type = !1), this.startAnimation(S);
        } else
          d || im(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(sm);
        return;
      }
      this.isUpdating || this.nodes.forEach(U2), this.isUpdating = !1, this.nodes.forEach(W2), this.nodes.forEach(F2), this.nodes.forEach(V2), this.clearAllSnapshots();
      const a = Bt.now();
      Le.delta = an(0, 1e3 / 60, a - Le.timestamp), Le.timestamp = a, Le.isProcessing = !0, Fl.update.process(Le), Fl.preRender.process(Le), Fl.render.process(Le), Le.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, $d.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach($2), this.sharedNodes.forEach(Y2);
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
      this.layout = this.measure(!1), this.layoutCorrected = we(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !uw(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      i && (a || Zn(this.latestValues) || u) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
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
        return we();
      const l = a.measureViewportBox();
      if (!(((i = this.scroll) === null || i === void 0 ? void 0 : i.wasRoot) || this.path.some(J2))) {
        const { scroll: u } = this.root;
        u && (Vr(l.x, u.offset.x), Vr(l.y, u.offset.y));
      }
      return l;
    }
    removeElementScroll(i) {
      var a;
      const l = we();
      if (dt(l, i), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c], { scroll: f, options: d } = u;
        u !== this.root && f && d.layoutScroll && (f.wasRoot && dt(l, i), Vr(l.x, f.offset.x), Vr(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(i, a = !1) {
      const l = we();
      dt(l, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a && u.options.layoutScroll && u.scroll && u !== u.root && zr(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), Zn(u.latestValues) && zr(l, u.latestValues);
      }
      return Zn(this.latestValues) && zr(l, this.latestValues), l;
    }
    removeTransform(i) {
      const a = we();
      dt(a, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Zn(c.latestValues))
          continue;
        hu(c.latestValues) && c.updateSnapshot();
        const u = we(), f = c.measurePageBox();
        dt(u, f), Zh(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return Zn(this.latestValues) && Zh(a, this.latestValues), a;
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
      const c = !!this.resumingFrom || this !== l;
      if (!(i || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (this.resolvedRelativeTargetAt = Le.timestamp, !this.targetDelta && !this.relativeTarget) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = we(), this.relativeTargetOrigin = we(), Jo(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox), dt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = we(), this.targetWithTransforms = we()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), n2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : dt(this.target, this.layout.layoutBox), ow(this.target, this.targetDelta)) : dt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = we(), this.relativeTargetOrigin = we(), Jo(this.relativeTargetOrigin, this.target, g.target), dt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          zo && Jn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || hu(this.parent.latestValues) || rw(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var i;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let c = !0;
      if ((this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === Le.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: f } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || f))
        return;
      dt(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, g = this.treeScale.y;
      d2(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = we());
      const { target: w } = a;
      if (!w) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Xh(this.prevProjectionDelta.x, this.projectionDelta.x), Xh(this.prevProjectionDelta.y, this.projectionDelta.y)), Zo(this.projectionDelta, this.layoutCorrected, w, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== g || !rm(this.projectionDelta.x, this.prevProjectionDelta.x) || !rm(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", w)), zo && Jn.recalculatedProjection++;
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
      this.prevProjectionDelta = Fr(), this.projectionDelta = Fr(), this.projectionDeltaWithTransform = Fr();
    }
    setAnimationOrigin(i, a = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, f = Fr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const d = we(), g = l ? l.source : void 0, w = this.layout ? this.layout.source : void 0, y = g !== w, b = this.getStack(), m = !b || b.members.length <= 1, h = !!(y && !m && this.options.crossfade === !0 && !this.path.some(Q2));
      this.animationProgress = 0;
      let v;
      this.mixTargetDelta = (S) => {
        const k = S / 1e3;
        am(f.x, i.x, k), am(f.y, i.y, k), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Jo(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), X2(this.relativeTarget, this.relativeTargetOrigin, d, k), v && j2(this.relativeTarget, v) && (this.isProjectionDirty = !1), v || (v = we()), dt(v, this.relativeTarget)), y && (this.animationValues = u, P2(u, c, this.latestValues, k, h, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Fn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ce.update(() => {
        Fi.hasAnimatedSinceResize = !0, this.currentAnimation = b2(0, om, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(om), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = i;
      if (!(!a || !l || !c)) {
        if (this !== i && this.layout && c && hw(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || we();
          const f = lt(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + f;
          const d = lt(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + d;
        }
        dt(a, l), zr(a, u), Zo(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(i, a) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new L2()), this.sharedNodes.get(i).add(a);
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
      l.z && Yl("z", i, c, this.animationValues);
      for (let u = 0; u < Gl.length; u++)
        Yl(`rotate${Gl[u]}`, i, c, this.animationValues), Yl(`skew${Gl[u]}`, i, c, this.animationValues);
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
        return O2;
      const c = {
        visibility: ""
      }, u = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = Oi(i == null ? void 0 : i.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const y = {};
        return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = Oi(i == null ? void 0 : i.pointerEvents) || ""), this.hasProjected && !Zn(this.latestValues) && (y.transform = u ? u({}, "") : "none", this.hasProjected = !1), y;
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), c.transform = _2(this.projectionDeltaWithTransform, this.treeScale, d), u && (c.transform = u(d, c.transform));
      const { x: g, y: w } = this.projectionDelta;
      c.transformOrigin = `${g.origin * 100}% ${w.origin * 100}% 0`, f.animationValues ? c.opacity = f === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : c.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const y in ga) {
        if (d[y] === void 0)
          continue;
        const { correct: b, applyTo: m } = ga[y], h = c.transform === "none" ? d[y] : b(d[y], f);
        if (m) {
          const v = m.length;
          for (let S = 0; S < v; S++)
            c[m[S]] = h;
        } else
          c[y] = h;
      }
      return this.options.layoutId && (c.pointerEvents = f === this ? Oi(i == null ? void 0 : i.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var a;
        return (a = i.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(sm), this.root.sharedNodes.clear();
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
    s === "size" ? ft((f) => {
      const d = i ? n.measuredBox[f] : n.layoutBox[f], g = lt(d);
      d.min = r[f].min, d.max = d.min + g;
    }) : hw(s, n.layoutBox, r) && ft((f) => {
      const d = i ? n.measuredBox[f] : n.layoutBox[f], g = lt(r[f]);
      d.max = d.min + g, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + g);
    });
    const a = Fr();
    Zo(a, r, n.layoutBox);
    const l = Fr();
    i ? Zo(l, e.applyTransform(o, !0), n.measuredBox) : Zo(l, r, n.layoutBox);
    const c = !uw(a);
    let u = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const w = we();
          Jo(w, n.layoutBox, d.layoutBox);
          const y = we();
          Jo(y, r, g.layoutBox), dw(w, y) || (u = !0), f.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = w, e.relativeParent = f);
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
function z2(e) {
  zo && Jn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function B2(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function $2(e) {
  e.clearSnapshot();
}
function sm(e) {
  e.clearMeasurements();
}
function U2(e) {
  e.isLayoutDirty = !1;
}
function W2(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function im(e) {
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
function am(e, t, n) {
  e.translate = fe(t.translate, 0, n), e.scale = fe(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function lm(e, t, n, r) {
  e.min = fe(t.min, n.min, r), e.max = fe(t.max, n.max, r);
}
function X2(e, t, n, r) {
  lm(e.x, t.x, n.x, r), lm(e.y, t.y, n.y, r);
}
function Q2(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const q2 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, cm = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), um = cm("applewebkit/") && !cm("chrome/") ? Math.round : it;
function dm(e) {
  e.min = um(e.min), e.max = um(e.max);
}
function Z2(e) {
  dm(e.x), dm(e.y);
}
function hw(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !t2(nm(t), nm(n), 0.2);
}
function J2(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const eA = pw({
  attachResizeListener: (e, t) => Ts(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Xl = {
  current: void 0
}, mw = pw({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Xl.current) {
      const e = new eA({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Xl.current = e;
    }
    return Xl.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), tA = {
  pan: {
    Feature: y2
  },
  drag: {
    Feature: g2,
    ProjectionNode: mw,
    MeasureLayout: aw
  }
};
function fm(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, s = r[o];
  s && ce.postRender(() => s(t, Vs(t)));
}
class nA extends Kn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = tD(t, (n) => (fm(this.node, n, "Start"), (r) => fm(this.node, r, "End"))));
  }
  unmount() {
  }
}
class rA extends Kn {
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
function pm(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n), s = r[o];
  s && ce.postRender(() => s(t, Vs(t)));
}
class oA extends Kn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = sD(t, (n) => (pm(this.node, n, "Start"), (r, { success: o }) => pm(this.node, r, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const gu = /* @__PURE__ */ new WeakMap(), Ql = /* @__PURE__ */ new WeakMap(), sA = (e) => {
  const t = gu.get(e.target);
  t && t(e);
}, iA = (e) => {
  e.forEach(sA);
};
function aA({ root: e, ...t }) {
  const n = e || document;
  Ql.has(n) || Ql.set(n, {});
  const r = Ql.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(iA, { root: e, ...t })), r[o];
}
function lA(e, t, n) {
  const r = aA(t);
  return gu.set(e, n), r.observe(e), () => {
    gu.delete(e), r.unobserve(e);
  };
}
const cA = {
  some: 0,
  all: 1
};
class uA extends Kn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: s } = t, i = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : cA[o]
    }, a = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, s && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: f } = this.node.getProps(), d = c ? u : f;
      d && d(l);
    };
    return lA(this.node.current, i, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(dA(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function dA({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const fA = {
  inView: {
    Feature: uA
  },
  tap: {
    Feature: oA
  },
  focus: {
    Feature: rA
  },
  hover: {
    Feature: nA
  }
}, pA = {
  layout: {
    ProjectionNode: mw,
    MeasureLayout: aw
  }
}, yu = { current: null }, gw = { current: !1 };
function hA() {
  if (gw.current = !0, !!Id)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => yu.current = e.matches;
      e.addListener(t), t();
    } else
      yu.current = !1;
}
const mA = [...Bx, Ve, Vn], gA = (e) => mA.find(zx(e)), hm = /* @__PURE__ */ new WeakMap();
function yA(e, t, n) {
  for (const r in t) {
    const o = t[r], s = n[r];
    if (Be(o))
      e.addValue(r, o);
    else if (Be(s))
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
const mm = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class vA {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = df, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const g = Bt.now();
      this.renderScheduledAt < g && (this.renderScheduledAt = g, ce.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: c, onUpdate: u } = i;
    this.onUpdate = u, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.blockInitialAnimation = !!s, this.isControllingVariants = Za(n), this.isVariantNode = X0(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const g in d) {
      const w = d[g];
      l[g] !== void 0 && Be(w) && w.set(l[g], !1);
    }
  }
  mount(t) {
    this.current = t, hm.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), gw.current || hA(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : yu.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    hm.delete(this.current), this.projection && this.projection.unmount(), Fn(this.notifyUpdate), Fn(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    for (t in ao) {
      const n = ao[t];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : we();
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
    for (let r = 0; r < mm.length; r++) {
      const o = mm[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const s = "on" + o, i = t[s];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = yA(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return o != null && (typeof o == "string" && (Fx(o) || Nx(o)) ? o = parseFloat(o) : !gA(o) && Vn.test(n) && (o = _x(t, n)), this.setBaseTarget(t, Be(o) ? o.get() : o)), Be(o) ? o.get() : o;
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
      const i = Wd(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      i && (o = i[t]);
    }
    if (r && o !== void 0)
      return o;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !Be(s) ? s : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new of()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class yw extends vA {
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
    Be(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function xA(e) {
  return window.getComputedStyle(e);
}
class wA extends yw {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = ox;
  }
  readValueFromInstance(t, n) {
    if (vr.has(n)) {
      const r = uf(n);
      return r && r.default || 0;
    } else {
      const r = xA(t), o = (tx(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return sw(t, n);
  }
  build(t, n, r) {
    Gd(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return qd(t, n, r);
  }
}
class bA extends yw {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = we;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (vr.has(n)) {
      const r = uf(n);
      return r && r.default || 0;
    }
    return n = sx.has(n) ? n : Bd(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return lx(t, n, r);
  }
  build(t, n, r) {
    Yd(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    ix(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = Qd(t.tagName), super.mount(t);
  }
}
const SA = (e, t) => Ud(e) ? new bA(t) : new wA(t, {
  allowProjection: e !== x.Fragment
}), kA = /* @__PURE__ */ YP({
  ...KN,
  ...fA,
  ...tA,
  ...pA
}, SA), vi = /* @__PURE__ */ cP(kA);
function Xt(e = "default") {
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
function CA(e = "default") {
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
function xw(e) {
  const t = {};
  return !e || !Array.isArray(e) || e.forEach((n) => {
    n.variant && (t[n.slug] = n.variant);
  }), t;
}
function EA({ events: e, eventMetadata: t, categoryMappings: n, onDateClick: r, onEventClick: o, onMonthChange: s, currentDate: i }) {
  const [a, l] = x.useState(/* @__PURE__ */ new Date()), c = i || a, [u, f] = x.useState(0), [d, g] = x.useState(null), w = (D, P) => {
    const A = new Date(P, D + 1, 0).getDate();
    return Array.from({ length: A }, (L, O) => ({ day: O + 1 }));
  }, y = (D, P) => e.filter((L) => {
    const O = new Date(L.startDate);
    return O.getDate() === D && O.getMonth() === P.getMonth() && O.getFullYear() === P.getFullYear();
  }), b = (D) => D.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), m = () => {
    f(-1);
    const D = new Date(c.getFullYear(), c.getMonth() - 1, 1);
    i || l(D), s == null || s(D);
  }, h = () => {
    f(1);
    const D = new Date(c.getFullYear(), c.getMonth() + 1, 1);
    i || l(D), s == null || s(D);
  }, v = w(c.getMonth(), c.getFullYear()), S = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], E = new Date(c.getFullYear(), c.getMonth(), 1).getDay(), C = new Date(c.getFullYear(), c.getMonth() - 1, 1), T = new Date(C.getFullYear(), C.getMonth() + 1, 0).getDate(), M = ({ events: D }) => {
    const P = D.reduce((A, L) => {
      const O = t[L.id], B = (O == null ? void 0 : O.category) || "uncategorized";
      return A[B] || (A[B] = []), A[B].push(L), A;
    }, {});
    return /* @__PURE__ */ p.jsx("div", { className: "flex flex-wrap gap-1", children: Object.entries(P).map(([A, L]) => {
      const O = zn(A === "uncategorized" ? null : A, n), B = Xt(O);
      return /* @__PURE__ */ p.jsx(
        "div",
        {
          className: `${B} text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium shadow-sm`,
          title: `${L.length} ${A} event${L.length > 1 ? "s" : ""}: ${L.map((V) => V.title).join(", ")}`,
          children: L.length
        },
        A
      );
    }) });
  };
  return /* @__PURE__ */ p.jsxs("div", { children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4", children: [
      /* @__PURE__ */ p.jsxs(
        vi.h2,
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
        /* @__PURE__ */ p.jsxs(qt, { variant: "outline", onClick: m, className: "gap-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600", children: [
          /* @__PURE__ */ p.jsx(Yv, { className: "h-4 w-4" }),
          "Prev"
        ] }),
        /* @__PURE__ */ p.jsxs(qt, { variant: "outline", onClick: h, className: "gap-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600", children: [
          "Next",
          /* @__PURE__ */ p.jsx(Xv, { className: "h-4 w-4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-7 gap-1 sm:gap-2 mb-4", children: S.map((D, P) => /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "text-left py-2 text-lg tracking-tighter font-medium text-gray-900 dark:text-gray-100",
        children: D
      },
      P
    )) }),
    /* @__PURE__ */ p.jsx(th, { initial: !1, custom: u, mode: "wait", children: /* @__PURE__ */ p.jsxs(
      vi.div,
      {
        custom: u,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        className: "grid grid-cols-7 gap-1 sm:gap-2",
        children: [
          Array.from({ length: E }).map((D, P) => /* @__PURE__ */ p.jsx("div", { className: "h-[150px] opacity-50 p-4", children: /* @__PURE__ */ p.jsx("div", { className: "font-semibold relative text-3xl mb-1 text-gray-400 dark:text-gray-500", children: T - E + P + 1 }) }, `offset-${P}`)),
          v.map((D) => {
            const P = y(D.day, c), A = (/* @__PURE__ */ new Date()).getDate() === D.day && (/* @__PURE__ */ new Date()).getMonth() === c.getMonth() && (/* @__PURE__ */ new Date()).getFullYear() === c.getFullYear(), O = (E + D.day - 1) % 7 >= 5;
            return /* @__PURE__ */ p.jsxs(
              vi.div,
              {
                className: "hover:z-50 border-none h-[150px] rounded group flex flex-col relative",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -20 },
                transition: { duration: 0.3 },
                onMouseEnter: () => g(D.day),
                onMouseLeave: () => g(null),
                children: [
                  /* @__PURE__ */ p.jsxs(
                    pd,
                    {
                      className: `bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md overflow-hidden relative flex p-4 border h-full transition-shadow day-card ${P.length > 0 ? "cursor-pointer hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700" : "cursor-default"}`,
                      onClick: P.length > 0 ? () => r == null ? void 0 : r(new Date(c.getFullYear(), c.getMonth(), D.day)) : void 0,
                      children: [
                        /* @__PURE__ */ p.jsx("div", { className: `font-semibold relative text-3xl mb-1 ${P.length > 0 ? "text-gray-900 dark:text-gray-100" : "text-gray-500 dark:text-gray-400"} ${A ? "text-blue-600 dark:text-blue-400" : ""}`, children: D.day }),
                        /* @__PURE__ */ p.jsx("div", { className: "flex-grow flex flex-col gap-2 w-full", children: /* @__PURE__ */ p.jsx(th, { mode: "wait", children: (P == null ? void 0 : P.length) > 0 && /* @__PURE__ */ p.jsx(
                          vi.div,
                          {
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0, y: -20 },
                            transition: { duration: 0.3 },
                            children: /* @__PURE__ */ p.jsx(M, { events: P })
                          },
                          P[0].id
                        ) }) })
                      ]
                    }
                  ),
                  d === D.day && P.length > 0 && /* @__PURE__ */ p.jsxs(
                    "div",
                    {
                      className: `absolute top-full z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3 w-80 ${O ? "right-0" : "left-0"}`,
                      onMouseEnter: () => g(D.day),
                      onMouseLeave: () => g(null),
                      children: [
                        /* @__PURE__ */ p.jsxs("div", { className: "text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2", children: [
                          P.length,
                          " event",
                          P.length > 1 ? "s" : ""
                        ] }),
                        /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: P.map((B) => {
                          const V = t[B.id], z = zn(V == null ? void 0 : V.category, n), N = Xt(z);
                          return /* @__PURE__ */ p.jsxs(
                            "div",
                            {
                              className: "flex items-start gap-2 p-1 -m-1 rounded cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors",
                              onClick: (j) => {
                                j.stopPropagation(), o == null || o(B);
                              },
                              children: [
                                /* @__PURE__ */ p.jsx("div", { className: `w-2 h-2 rounded-full ${N} flex-shrink-0 mt-1.5` }),
                                /* @__PURE__ */ p.jsxs("div", { className: "flex-1 min-w-0", children: [
                                  /* @__PURE__ */ p.jsx("div", { className: "font-medium text-sm text-gray-900 dark:text-gray-100 leading-tight", children: B.title }),
                                  /* @__PURE__ */ p.jsx("div", { className: "text-xs text-gray-600 dark:text-gray-400 mt-0.5", children: b(B.startDate) })
                                ] })
                              ]
                            },
                            B.id
                          );
                        }) })
                      ]
                    }
                  )
                ]
              },
              D.day
            );
          }),
          (() => {
            const P = (E + v.length) % 7, A = P === 0 ? 0 : 7 - P;
            return Array.from({ length: A }).map((L, O) => /* @__PURE__ */ p.jsx("div", { className: "h-[150px] opacity-50 p-4", children: /* @__PURE__ */ p.jsx("div", { className: "font-semibold relative text-3xl mb-1 text-gray-400 dark:text-gray-500", children: O + 1 }) }, `next-${O}`));
          })()
        ]
      },
      `${c.getFullYear()}-${c.getMonth()}`
    ) })
  ] });
}
function TA({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r }) {
  const [o, s] = G.useState(/* @__PURE__ */ new Date()), a = ((d) => {
    const g = new Date(d);
    return g.setDate(d.getDate() - d.getDay()), Array.from({ length: 7 }, (w, y) => {
      const b = new Date(g);
      return b.setDate(g.getDate() + y), b;
    });
  })(o), l = Array.from({ length: 24 }, (d, g) => g), c = (d) => e.filter((g) => g.startDate.toDateString() === d.toDateString()), u = (d) => {
    const g = new Date(o);
    g.setDate(o.getDate() + (d === "next" ? 7 : -7)), s(g);
  }, f = (d, g, w) => {
    const y = d.startDate.getHours(), b = d.startDate.getMinutes(), m = d.endDate ? d.endDate.getHours() : y + 1, h = d.endDate ? d.endDate.getMinutes() : 0, v = y + b / 60, S = m + h / 60, k = S - v, E = g.filter((P) => {
      if (P.id === d.id) return !0;
      if (P.startDate.toDateString() !== d.startDate.toDateString())
        return !1;
      const A = P.startDate.getHours() + P.startDate.getMinutes() / 60, L = (P.endDate ? P.endDate.getHours() : P.startDate.getHours() + 1) + (P.endDate ? P.endDate.getMinutes() / 60 : 0);
      return v < L && S > A;
    }), C = E.length, T = E.findIndex((P) => P.id === d.id), M = C > 1 ? 100 / C : 100, D = C > 1 ? T * M : 0;
    return {
      top: `${v * 80}px`,
      // 80px per hour for better readability
      height: `${k * 80}px`,
      // Accurate height based on actual duration
      left: `${D}%`,
      width: `${M}%`
    };
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ p.jsx(
        "button",
        {
          onClick: () => u("prev"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ p.jsx(Qv, { className: "h-5 w-5" })
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
          children: /* @__PURE__ */ p.jsx(qv, { className: "h-5 w-5" })
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
            l.map((y) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] border-b border-gray-200 dark:border-gray-600" }, y)),
            w.map((y, b) => {
              const m = t[y.id], h = zn(m == null ? void 0 : m.category, n), v = vw(h), S = f(y, w);
              return /* @__PURE__ */ p.jsxs(
                "div",
                {
                  className: `absolute ${v} border rounded p-2 text-sm z-20 overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow event-card`,
                  style: {
                    ...S,
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
function PA({ events: e, eventMetadata: t, categoryMappings: n, initialDate: r, onEventClick: o }) {
  const [s, i] = G.useState(r || /* @__PURE__ */ new Date());
  G.useEffect(() => {
    r && i(r);
  }, [r]);
  const a = Array.from({ length: 24 }, (d, g) => g), l = () => e.filter((d) => d.startDate.toDateString() === s.toDateString()), c = (d) => {
    const g = new Date(s);
    g.setDate(s.getDate() + (d === "next" ? 1 : -1)), i(g);
  }, u = (d, g, w) => {
    const y = d.startDate.getHours(), b = d.startDate.getMinutes(), m = d.endDate ? d.endDate.getHours() : y + 1, h = d.endDate ? d.endDate.getMinutes() : 0, v = y + b / 60, S = m + h / 60, k = S - v, E = g.filter((P) => {
      if (P.id === d.id) return !0;
      const A = P.startDate.getHours() + P.startDate.getMinutes() / 60, L = (P.endDate ? P.endDate.getHours() : P.startDate.getHours() + 1) + (P.endDate ? P.endDate.getMinutes() / 60 : 0);
      return v < L && S > A;
    }), C = E.length, T = E.findIndex((P) => P.id === d.id), M = C > 1 ? 100 / C : 100, D = C > 1 ? T * M : 0;
    return {
      top: `${v * 80}px`,
      // 80px per hour for day view
      height: `${k * 80}px`,
      // Accurate height based on actual duration
      left: `${D}%`,
      width: `${M}%`
    };
  }, f = l();
  return /* @__PURE__ */ p.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ p.jsx(
        "button",
        {
          onClick: () => c("prev"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ p.jsx(Qv, { className: "h-5 w-5" })
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
          children: /* @__PURE__ */ p.jsx(qv, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden", children: /* @__PURE__ */ p.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ p.jsx("div", { className: "w-20 border-r border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700", children: a.map((d) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] p-3 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600 flex items-start", children: d === 0 ? "12 AM" : d === 12 ? "12 PM" : d > 12 ? `${d - 12} PM` : `${d} AM` }, d)) }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex-1 relative", children: [
        a.map((d) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] border-b border-gray-200 dark:border-gray-600" }, d)),
        f.map((d, g) => {
          const w = t[d.id], y = zn(w == null ? void 0 : w.category, n), b = vw(y), m = u(d, f);
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
function DA({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onMonthChange: o, currentDate: s }) {
  const [i, a] = G.useState(/* @__PURE__ */ new Date()), [l, c] = G.useState(/* @__PURE__ */ new Date()), u = s || l, f = () => {
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
    const A = new Date(P.startDate);
    return A.getDate() === i.getDate() && A.getMonth() === i.getMonth() && A.getFullYear() === i.getFullYear();
  }) : [], y = (P) => e.some((A) => {
    const L = new Date(A.startDate);
    return L.getDate() === P.getDate() && L.getMonth() === P.getMonth() && L.getFullYear() === P.getFullYear();
  }), b = w(), m = u.getFullYear(), h = u.getMonth(), v = new Date(m, h, 1), S = new Date(v);
  S.setDate(S.getDate() - v.getDay());
  const k = [], E = new Date(S), C = new Date(m, h + 1, 0).getDate(), T = v.getDay() + C, D = Math.ceil(T / 7) * 7;
  for (let P = 0; P < D; P++)
    k.push(new Date(E)), E.setDate(E.getDate() + 1);
  return /* @__PURE__ */ p.jsxs(pd, { className: "w-full py-4 mobile-calendar bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700", children: [
    /* @__PURE__ */ p.jsxs(Oy, { className: "px-4", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between mb-4 gap-2", children: [
        /* @__PURE__ */ p.jsxs(
          qt,
          {
            variant: "outline",
            size: "sm",
            onClick: f,
            className: "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 flex-shrink-0",
            children: [
              /* @__PURE__ */ p.jsx(Yv, { className: "h-4 w-4" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Prev" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsx("h3", { className: "text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 text-center flex-1 min-w-0 truncate", children: u.toLocaleDateString("en-US", { month: "long", year: "numeric" }) }),
        /* @__PURE__ */ p.jsxs(
          qt,
          {
            variant: "outline",
            size: "sm",
            onClick: d,
            className: "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 flex-shrink-0",
            children: [
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Next" }),
              /* @__PURE__ */ p.jsx(Xv, { className: "h-4 w-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-7 gap-1 mb-4", children: [
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((P) => /* @__PURE__ */ p.jsx("div", { className: "text-center text-sm font-medium py-2 text-gray-600 dark:text-gray-400", children: P }, P)),
        k.map((P, A) => {
          const L = P.getMonth() === h, O = i && P.getDate() === i.getDate() && P.getMonth() === i.getMonth() && P.getFullYear() === i.getFullYear(), B = P.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), V = y(P);
          return /* @__PURE__ */ p.jsxs(
            "button",
            {
              onClick: () => a(P),
              className: `
                  p-2 text-sm rounded transition-colors relative focus:outline-none
                  ${L ? "text-gray-900 dark:text-gray-100" : "text-gray-400 dark:text-gray-500"}
                  ${O ? "bg-blue-500 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-700" : "hover:bg-gray-100 dark:hover:bg-gray-600"}
                  ${B && !O ? "bg-gray-200 dark:bg-gray-600 font-semibold" : ""}
                `,
              children: [
                P.getDate(),
                V && /* @__PURE__ */ p.jsx(
                  "span",
                  {
                    className: "absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full",
                    "aria-label": "Events available"
                  }
                )
              ]
            },
            A
          );
        })
      ] })
    ] }),
    /* @__PURE__ */ p.jsxs(PS, { className: "flex flex-col items-start gap-3 border-t border-gray-200 dark:border-gray-600 px-4 !pt-4", children: [
      /* @__PURE__ */ p.jsx("div", { className: "flex w-full items-center justify-between px-1", children: /* @__PURE__ */ p.jsx("div", { className: "text-sm font-medium text-gray-900 dark:text-gray-100", children: i == null ? void 0 : i.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }) }) }),
      /* @__PURE__ */ p.jsx("div", { className: "flex w-full flex-col gap-2", children: b.length === 0 ? /* @__PURE__ */ p.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400 text-center py-4", children: "No events on this day" }) : b.map((P) => {
        const A = t[P.id], L = zn(A == null ? void 0 : A.category, n), B = Xt(L).replace("bg-", "after:bg-");
        return /* @__PURE__ */ p.jsxs(
          "button",
          {
            className: `bg-gray-50 dark:bg-gray-700 relative rounded-md p-2 pl-6 text-sm text-left w-full after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors focus:outline-none ${B}`,
            onClick: () => r == null ? void 0 : r(P),
            children: [
              /* @__PURE__ */ p.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100", children: P.title }),
              /* @__PURE__ */ p.jsxs("div", { className: "text-muted-foreground dark:text-gray-400 text-xs", children: [
                g(P.startDate),
                " - ",
                g(P.endDate),
                A && ` • ${A.location}`
              ] })
            ]
          },
          P.id
        );
      }) })
    ] })
  ] });
}
function NA({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onLoadMore: o, hasMore: s, loading: i }) {
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
      /* @__PURE__ */ p.jsx(bs, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
      /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-medium mb-2", children: "No events found" }),
      /* @__PURE__ */ p.jsx("p", { children: "Try adjusting your filters to see more events." })
    ] }) : Object.entries(f).map(([d, g]) => {
      const w = new Date(d), y = w.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), b = w.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let m;
      return y ? m = "Today" : b ? m = "Tomorrow" : m = w.toLocaleDateString("en-US", {
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
          const v = t[h.id], S = zn(v == null ? void 0 : v.category, n), E = Xt(S).replace("bg-", "after:bg-");
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
                        /* @__PURE__ */ p.jsx(oo, { className: "h-3 w-3" }),
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
                        /* @__PURE__ */ p.jsx(Ka, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: v.organization })
                      ] })
                    ] })
                  ] }),
                  v && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: v.cost })
                ] }),
                (v == null ? void 0 : v.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-2", children: /* @__PURE__ */ p.jsx(so, { variant: "outline", size: "sm", children: "Registration Required" }) })
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
function AA({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onLoadMore: o, hasMore: s, loading: i }) {
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
      /* @__PURE__ */ p.jsx(bs, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
      /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-medium mb-2", children: "No events found" }),
      /* @__PURE__ */ p.jsx("p", { children: "Try adjusting your filters to see more events." })
    ] }) : Object.entries(f).map(([d, g]) => {
      const w = new Date(d), y = w.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), b = w.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let m;
      return y ? m = "Today" : b ? m = "Tomorrow" : m = w.toLocaleDateString("en-US", {
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
          const v = t[h.id], S = zn(v == null ? void 0 : v.category, n), E = Xt(S).replace("bg-", "after:bg-");
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
                        /* @__PURE__ */ p.jsx(oo, { className: "h-3 w-3" }),
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
                        /* @__PURE__ */ p.jsx(Ka, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: v.organization })
                      ] })
                    ] })
                  ] }),
                  v && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: v.cost })
                ] }),
                (v == null ? void 0 : v.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-2", children: /* @__PURE__ */ p.jsx(so, { variant: "outline", size: "sm", children: "Registration Required" }) })
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
function MA({
  initialView: e = "month",
  initialCategoryFilter: t = "all",
  initialOrganizationFilter: n = "all",
  showWeekView: r = !0,
  showDayView: o = !0
} = {}) {
  var cn, un, dn, zs;
  const [s, i] = x.useState(e), [a, l] = x.useState(/* @__PURE__ */ new Date()), [c, u] = x.useState(/* @__PURE__ */ new Date()), [f, d] = x.useState(null), [g, w] = x.useState(!1), [y, b] = x.useState(30), [m, h] = x.useState(30), [v, S] = x.useState(15);
  G.useEffect(() => {
    const _ = document.querySelector(".unbc-calendar-container");
    if (_) {
      const ee = parseInt(_.getAttribute("data-list-initial-items") || "30"), me = parseInt(_.getAttribute("data-list-load-more-count") || "15");
      h(ee), S(me), b(ee);
    }
  }, []), G.useEffect(() => {
    const _ = document.createElement("style");
    _.textContent = `
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
    `, document.head.appendChild(_);
    const ee = () => {
      var bo;
      const Mt = document.getElementById("unbc-calendar-react-component");
      if (!Mt) return;
      const Gn = (
        // Standard selectors
        document.documentElement.hasAttribute("data-theme") && document.documentElement.getAttribute("data-theme") === "dark" || document.documentElement.classList.contains("dark") || document.body.classList.contains("dark") || document.documentElement.hasAttribute("data-color-scheme") && document.documentElement.getAttribute("data-color-scheme") === "dark" || document.documentElement.classList.contains("is-dark-theme") || document.body.classList.contains("is-dark-theme") || // Check computed styles
        ((bo = getComputedStyle(document.documentElement).getPropertyValue("--wp--preset--color--background")) == null ? void 0 : bo.includes("0, 0, 0")) || getComputedStyle(document.body).backgroundColor === "rgb(0, 0, 0)" || // Media query fallback
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
      Mt.setAttribute("data-detected-theme", Gn ? "dark" : "light");
    };
    ee();
    const me = new MutationObserver(ee);
    me.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-theme", "class"] }), me.observe(document.body, { attributes: !0, attributeFilter: ["class"] });
    const oe = window.matchMedia("(prefers-color-scheme: dark)");
    return oe.addEventListener("change", ee), () => {
      document.head.removeChild(_), me.disconnect(), oe.removeEventListener("change", ee);
    };
  }, []);
  const [k, E] = x.useState("all"), [C, T] = x.useState("all"), [M, D] = x.useState(""), [P, A] = x.useState(""), L = G.useMemo(() => {
    const _ = new Date(c.getTime()), ee = _.getFullYear(), me = _.getMonth(), oe = new Date(ee, me, 1), Mt = new Date(ee, me + 1, 0);
    return {
      per_page: 500,
      start_date: oe.toISOString().split("T")[0],
      end_date: Mt.toISOString().split("T")[0],
      year: ee,
      month: me + 1,
      // Calendar Plus uses 1-based months
      category: k === "all" ? "" : k,
      search: M
    };
  }, [c, k, M]);
  MT(L);
  const O = m0(L), B = LT(), V = g0(), z = OT();
  G.useEffect(() => {
    const _ = setTimeout(() => {
      D(P);
    }, 300);
    return () => clearTimeout(_);
  }, [P]);
  const N = G.useMemo(() => {
    var _;
    return ((_ = z.config) == null ? void 0 : _.categoriesWithOrganizations) || [];
  }, [z.config]);
  G.useEffect(() => {
    !N.includes(k) && k !== "all" && T("all");
  }, [k, N]);
  const {
    events: j,
    eventMetadata: I,
    loading: W,
    error: re
  } = O, We = B.organizations, De = B.loading, { categories: Ce, loading: Re } = V, $ = G.useMemo(() => xw(Ce), [Ce]), ne = G.useMemo(() => {
    const _ = /* @__PURE__ */ new Map();
    return We.forEach((ee) => {
      _.set(ee.id.toString(), ee.title.rendered);
    }), _;
  }, [We]), Ee = G.useCallback((_, ee) => {
    var Mt, Gn;
    const me = I[_.id];
    if (!me) return !1;
    const oe = (Gn = (Mt = z.config) == null ? void 0 : Mt.categoryRelationships) == null ? void 0 : Gn[ee];
    return oe ? oe.includes(me.category) : me.category === ee;
  }, [I, z.config]), Y = G.useMemo(() => {
    let _ = j;
    if (s === "list") {
      const ee = /* @__PURE__ */ new Date();
      ee.setHours(0, 0, 0, 0), _ = _.filter((me) => {
        const oe = new Date(me.startDate);
        return oe.setHours(0, 0, 0, 0), oe >= ee;
      }), _ = _.sort((me, oe) => me.startDate.getTime() - oe.startDate.getTime());
    }
    if (k !== "all" && (_ = _.filter((ee) => Ee(ee, k))), C !== "all") {
      const ee = ne.get(C);
      _ = _.filter((me) => {
        const oe = I[me.id];
        return ee && (oe == null ? void 0 : oe.organization) === ee;
      });
    }
    if (M) {
      const ee = M.toLowerCase();
      _ = _.filter((me) => {
        var Mt, Gn, bo;
        const oe = I[me.id];
        return me.title.toLowerCase().includes(ee) || ((Mt = oe == null ? void 0 : oe.description) == null ? void 0 : Mt.toLowerCase().includes(ee)) || ((Gn = oe == null ? void 0 : oe.location) == null ? void 0 : Gn.toLowerCase().includes(ee)) || ((bo = oe == null ? void 0 : oe.organization) == null ? void 0 : bo.toLowerCase().includes(ee));
      });
    }
    return _;
  }, [j, I, k, C, M, ne, s, Ee]), J = G.useCallback((_) => {
    l(_), i("day");
  }, []), Z = G.useCallback((_) => {
    u(_);
  }, []), Se = G.useCallback((_) => {
    d(_), w(!0);
  }, []), et = G.useCallback(() => {
    b((_) => _ + v);
  }, [v]);
  return G.useEffect(() => {
    s === "list" && b(m);
  }, [s, k, C, M, m]), (W || De || Re) && (!j || j.length === 0) ? /* @__PURE__ */ p.jsx("div", { className: "w-full flex items-center justify-center py-12", children: /* @__PURE__ */ p.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ p.jsx(_i, { className: "h-8 w-8 animate-spin mx-auto mb-4" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-gray-600", children: "Loading calendar..." })
  ] }) }) : re ? /* @__PURE__ */ p.jsx("div", { className: "w-full py-12", children: /* @__PURE__ */ p.jsx(pd, { className: "max-w-md mx-auto", children: /* @__PURE__ */ p.jsxs(Oy, { className: "pt-6 text-center", children: [
    /* @__PURE__ */ p.jsxs("p", { className: "text-red-600 mb-4", children: [
      "Error loading events: ",
      re
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
    /* @__PURE__ */ p.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm unbc-calendar-view", children: /* @__PURE__ */ p.jsxs(DT, { value: s, onValueChange: i, className: "w-full", children: [
      /* @__PURE__ */ p.jsx("div", { className: "hidden md:block p-6 pb-0", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsxs(ci, { value: k, onValueChange: E, children: [
            /* @__PURE__ */ p.jsx(ui, { className: "w-40 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${k === "all" ? "bg-gray-400" : Xt(((cn = Ce.find((_) => _.slug === k)) == null ? void 0 : cn.variant) || "default")}` }),
              /* @__PURE__ */ p.jsx("span", { children: k === "all" ? "All Categories" : ((un = Ce.find((_) => _.slug === k)) == null ? void 0 : un.name) || "All Categories" })
            ] }) }),
            /* @__PURE__ */ p.jsxs(di, { className: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 z-[9999] shadow-lg", children: [
              /* @__PURE__ */ p.jsx(mn, { value: "all", className: "text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700 focus:outline-none", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                /* @__PURE__ */ p.jsx("span", { className: "w-3 h-3 rounded-full flex-shrink-0 bg-gray-400" }),
                /* @__PURE__ */ p.jsx("span", { children: "All" })
              ] }) }),
              Ce.map((_) => /* @__PURE__ */ p.jsx(
                mn,
                {
                  value: _.slug,
                  className: "text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700 focus:outline-none",
                  children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                    /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${Xt(_.variant || "default")}` }),
                    /* @__PURE__ */ p.jsx("span", { children: _.name })
                  ] })
                },
                _.id
              ))
            ] })
          ] }),
          N.includes(k) && /* @__PURE__ */ p.jsxs(ci, { value: C, onValueChange: T, children: [
            /* @__PURE__ */ p.jsx(ui, { className: "w-44 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 [&>span]:truncate [&>span]:block", children: /* @__PURE__ */ p.jsx(qp, { placeholder: "All Organizations" }) }),
            /* @__PURE__ */ p.jsxs(di, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 max-h-[200px] overflow-y-auto", children: [
              /* @__PURE__ */ p.jsx(mn, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Organizations" }),
              We.map((_) => /* @__PURE__ */ p.jsx(
                mn,
                {
                  value: _.id.toString(),
                  className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600",
                  children: _.title.rendered
                },
                _.id
              ))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ p.jsxs(Zp, { className: "h-9 bg-gray-100 dark:bg-gray-700 p-1", children: [
          o && /* @__PURE__ */ p.jsxs(Yn, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(oo, { className: "h-3 w-3" }),
            "Day"
          ] }),
          r && /* @__PURE__ */ p.jsxs(Yn, { value: "week", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(Li, { className: "h-3 w-3" }),
            "Week"
          ] }),
          /* @__PURE__ */ p.jsxs(Yn, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(bs, { className: "h-3 w-3" }),
            "Month"
          ] }),
          /* @__PURE__ */ p.jsxs(Yn, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(Qp, { className: "h-3 w-3" }),
            "List"
          ] })
        ] }) }),
        /* @__PURE__ */ p.jsxs("div", { className: "flex-shrink-0 flex items-center gap-2", children: [
          W && j && j.length > 0 && /* @__PURE__ */ p.jsx(_i, { className: "h-4 w-4 animate-spin text-gray-500" }),
          /* @__PURE__ */ p.jsx(
            eu,
            {
              placeholder: "Search events...",
              value: P,
              onChange: (_) => A(_.target.value),
              className: "w-40 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "md:hidden", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "px-4 py-4 flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ p.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ p.jsxs(ci, { value: k, onValueChange: E, children: [
            /* @__PURE__ */ p.jsx(ui, { className: "w-auto min-w-[60px] h-9 px-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${k === "all" ? "bg-gray-400" : Xt(((dn = Ce.find((_) => _.slug === k)) == null ? void 0 : dn.variant) || "default")}` }),
              /* @__PURE__ */ p.jsx("span", { className: "text-xs truncate max-w-[60px]", children: k === "all" ? "All" : ((zs = Ce.find((_) => _.slug === k)) == null ? void 0 : zs.name) || "All" })
            ] }) }),
            /* @__PURE__ */ p.jsxs(di, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 z-[9999]", children: [
              /* @__PURE__ */ p.jsx(mn, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                /* @__PURE__ */ p.jsx("span", { className: "w-3 h-3 rounded-full flex-shrink-0 bg-gray-400" }),
                /* @__PURE__ */ p.jsx("span", { children: "All" })
              ] }) }),
              Ce.map((_) => /* @__PURE__ */ p.jsx(
                mn,
                {
                  value: _.slug,
                  className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600",
                  children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                    /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${Xt(_.variant || "default")}` }),
                    /* @__PURE__ */ p.jsx("span", { children: _.name })
                  ] })
                },
                _.id
              ))
            ] })
          ] }) }),
          /* @__PURE__ */ p.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ p.jsxs(Zp, { className: "h-9 bg-gray-100 dark:bg-gray-700 p-1", children: [
            o && /* @__PURE__ */ p.jsxs(Yn, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300 flex-1", children: [
              /* @__PURE__ */ p.jsx(oo, { className: "h-3 w-3" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Day" })
            ] }),
            /* @__PURE__ */ p.jsxs(Yn, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300 flex-1", children: [
              /* @__PURE__ */ p.jsx(bs, { className: "h-3 w-3" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Month" })
            ] }),
            /* @__PURE__ */ p.jsxs(Yn, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300 flex-1", children: [
              /* @__PURE__ */ p.jsx(Qp, { className: "h-3 w-3" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "List" })
            ] })
          ] }) }),
          /* @__PURE__ */ p.jsxs("div", { className: "flex-shrink-0 flex items-center gap-2", children: [
            W && j && j.length > 0 && /* @__PURE__ */ p.jsx(_i, { className: "h-4 w-4 animate-spin text-gray-500" }),
            /* @__PURE__ */ p.jsx(
              qt,
              {
                variant: "outline",
                size: "sm",
                className: "h-9 px-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
                onClick: () => {
                  const _ = document.querySelector(".mobile-search-input");
                  _ && (_.style.display = _.style.display === "none" ? "block" : "none", _.style.display !== "none" && _.focus());
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
          eu,
          {
            placeholder: "Search events...",
            value: P,
            onChange: (_) => A(_.target.value),
            className: "mobile-search-input w-full h-9 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400",
            style: { display: "none" }
          }
        ) }),
        N.includes(k) && /* @__PURE__ */ p.jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ p.jsxs(ci, { value: C, onValueChange: T, children: [
          /* @__PURE__ */ p.jsx(ui, { className: "w-full h-9 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsx(qp, { placeholder: "All Organizations", className: "truncate" }) }),
          /* @__PURE__ */ p.jsxs(di, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 max-h-[200px] overflow-y-auto", children: [
            /* @__PURE__ */ p.jsx(mn, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Organizations" }),
            We.map((_) => /* @__PURE__ */ p.jsx(
              mn,
              {
                value: _.id.toString(),
                className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600",
                children: _.title.rendered
              },
              _.id
            ))
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ p.jsxs(pi, { value: "month", className: "px-6 pb-6 md:p-6", children: [
        /* @__PURE__ */ p.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ p.jsx(
          EA,
          {
            events: Y,
            eventMetadata: I,
            categoryMappings: $,
            onDateClick: J,
            onEventClick: Se,
            onMonthChange: Z,
            currentDate: c
          }
        ) }),
        /* @__PURE__ */ p.jsx("div", { className: "block md:hidden mobile-calendar", children: /* @__PURE__ */ p.jsx(
          DA,
          {
            events: Y,
            eventMetadata: I,
            categoryMappings: $,
            onEventClick: Se,
            onMonthChange: Z,
            currentDate: c
          }
        ) })
      ] }),
      /* @__PURE__ */ p.jsx(pi, { value: "week", className: "px-6 pb-6 md:p-6", children: /* @__PURE__ */ p.jsx(
        TA,
        {
          events: Y,
          eventMetadata: I,
          categoryMappings: $,
          onEventClick: Se
        }
      ) }),
      /* @__PURE__ */ p.jsx(pi, { value: "day", className: "px-6 pb-6 md:p-6", children: /* @__PURE__ */ p.jsx(
        PA,
        {
          events: Y,
          eventMetadata: I,
          categoryMappings: $,
          initialDate: a,
          onEventClick: Se
        }
      ) }),
      /* @__PURE__ */ p.jsxs(pi, { value: "list", className: "px-6 pb-6 md:p-6", children: [
        /* @__PURE__ */ p.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ p.jsx(
          NA,
          {
            events: Y.slice(0, y),
            eventMetadata: I,
            categoryMappings: $,
            onEventClick: Se,
            onLoadMore: et,
            hasMore: Y.length > y,
            loading: W
          }
        ) }),
        /* @__PURE__ */ p.jsx("div", { className: "block md:hidden", children: /* @__PURE__ */ p.jsx(
          AA,
          {
            events: Y.slice(0, y),
            eventMetadata: I,
            categoryMappings: $,
            onEventClick: Se,
            onLoadMore: et,
            hasMore: Y.length > y,
            loading: W
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsx(
      $0,
      {
        event: f,
        eventMetadata: I,
        open: g,
        onOpenChange: w
      }
    )
  ] });
}
function RA({
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
  }), { filteredEvents: c, eventsByDate: u } = G.useMemo(() => {
    let f = e;
    const d = /* @__PURE__ */ new Date();
    (r || o) && (f = f.filter((w) => {
      var b;
      const y = t[w.id];
      return o ? (y == null ? void 0 : y.organization) === o : r ? ((b = y == null ? void 0 : y.organization_id) == null ? void 0 : b.toString()) === r : !0;
    })), i || (f = f.filter((w) => w.startDate >= d)), f.sort((w, y) => w.startDate.getTime() - y.startDate.getTime()), s && s > 0 && (f = f.slice(0, s));
    const g = f.reduce((w, y) => {
      const b = y.startDate.toDateString();
      return w[b] || (w[b] = []), w[b].push(y), w;
    }, {});
    return { filteredEvents: f, eventsByDate: g };
  }, [e, t, r, o, s, i]);
  return c.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-8 text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ p.jsx(bs, { className: "mx-auto h-8 w-8 mb-3 opacity-50" }),
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
      const g = new Date(f), w = g.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), y = g.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let b = g.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      });
      return w ? b = `Today, ${b}` : y && (b = `Tomorrow, ${b}`), /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
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
          const h = t[m.id], v = zn(h == null ? void 0 : h.category, n), S = CA(v);
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
                      /* @__PURE__ */ p.jsx(oo, { className: "h-3 w-3" }),
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
                        /* @__PURE__ */ p.jsx(Ka, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: h.organization })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col items-end gap-2 flex-shrink-0 ml-4", children: [
                    (h == null ? void 0 : h.cost) && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400", children: h.cost }),
                    (h == null ? void 0 : h.category) && /* @__PURE__ */ p.jsx(so, { variant: "secondary", size: "sm", className: "text-xs", children: h.category.charAt(0).toUpperCase() + h.category.slice(1) })
                  ] })
                ] }),
                (h == null ? void 0 : h.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-3 pt-2 border-t border-gray-100 dark:border-gray-700", children: /* @__PURE__ */ p.jsx(so, { variant: "outline", size: "sm", children: "📝 Registration Required" }) })
              ]
            },
            m.id
          );
        }) })
      ] }, f);
    })
  ] });
}
function ww({
  organizationId: e,
  organizationName: t,
  limit: n = 5,
  showPastEvents: r = !1
}) {
  const [o, s] = x.useState(null), [i, a] = x.useState(!1), {
    events: l,
    eventMetadata: c,
    loading: u,
    error: f
  } = m0({
    view: "list",
    // Use list view for organization pages
    organization: e
    // Filter by organization
  }), { eventCategories: d } = g0(), g = xw(d), w = (y) => {
    s(y), a(!0);
  };
  return u ? /* @__PURE__ */ p.jsx("div", { className: "w-full flex items-center justify-center py-8", children: /* @__PURE__ */ p.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ p.jsx(_i, { className: "h-6 w-6 animate-spin mx-auto mb-2" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-gray-600 text-sm", children: "Loading events..." })
  ] }) }) : f ? /* @__PURE__ */ p.jsx("div", { className: "w-full py-8", children: /* @__PURE__ */ p.jsx("div", { className: "max-w-md mx-auto bg-red-50 border border-red-200 rounded-lg p-4", children: /* @__PURE__ */ p.jsxs("p", { className: "text-red-600 text-sm", children: [
    "Error loading events: ",
    f
  ] }) }) }) : /* @__PURE__ */ p.jsxs("div", { className: "unbc-organization-events", children: [
    /* @__PURE__ */ p.jsx(
      RA,
      {
        events: l,
        eventMetadata: c,
        categoryMappings: g,
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
  const n = Fa(t), r = t.dataset.view || "month", o = t.dataset.categoryFilter || "all", s = t.dataset.organizationFilter || "all", i = t.dataset.showWeekView !== "false", a = t.dataset.showDayView !== "false";
  n.render(
    /* @__PURE__ */ p.jsx(G.StrictMode, { children: /* @__PURE__ */ p.jsx(
      MA,
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
  const n = Fa(t), r = t.dataset.organizationId || "", o = t.dataset.organizationName || "", s = parseInt(t.dataset.limit) || 5, i = t.dataset.showPast === "true";
  n.render(
    /* @__PURE__ */ p.jsx(G.StrictMode, { children: /* @__PURE__ */ p.jsx(
      ww,
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
  const n = Fa(t), r = t.dataset.organizationId || "", o = t.dataset.organizationName || "", s = parseInt(t.dataset.limit) || 5, i = t.dataset.showPast === "true";
  n.render(
    /* @__PURE__ */ p.jsx(G.StrictMode, { children: /* @__PURE__ */ p.jsx(
      ww,
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
