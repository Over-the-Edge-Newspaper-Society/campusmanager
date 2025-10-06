function Dw(e, t) {
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
function km(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Cm = { exports: {} }, ba = {}, Em = { exports: {} }, G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ps = Symbol.for("react.element"), Nw = Symbol.for("react.portal"), Mw = Symbol.for("react.fragment"), Aw = Symbol.for("react.strict_mode"), Rw = Symbol.for("react.profiler"), jw = Symbol.for("react.provider"), Lw = Symbol.for("react.context"), _w = Symbol.for("react.forward_ref"), Ow = Symbol.for("react.suspense"), Iw = Symbol.for("react.memo"), Fw = Symbol.for("react.lazy"), Sf = Symbol.iterator;
function Vw(e) {
  return e === null || typeof e != "object" ? null : (e = Sf && e[Sf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Tm = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Pm = Object.assign, Dm = {};
function uo(e, t, n) {
  this.props = e, this.context = t, this.refs = Dm, this.updater = n || Tm;
}
uo.prototype.isReactComponent = {};
uo.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
uo.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Nm() {
}
Nm.prototype = uo.prototype;
function vu(e, t, n) {
  this.props = e, this.context = t, this.refs = Dm, this.updater = n || Tm;
}
var xu = vu.prototype = new Nm();
xu.constructor = vu;
Pm(xu, uo.prototype);
xu.isPureReactComponent = !0;
var bf = Array.isArray, Mm = Object.prototype.hasOwnProperty, wu = { current: null }, Am = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rm(e, t, n) {
  var r, o = {}, s = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (s = "" + t.key), t) Mm.call(t, r) && !Am.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    o.children = l;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: Ps, type: e, key: s, ref: i, props: o, _owner: wu.current };
}
function zw(e, t) {
  return { $$typeof: Ps, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Su(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ps;
}
function Bw(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var kf = /\/+/g;
function tl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Bw("" + e.key) : t.toString(36);
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
        case Nw:
          i = !0;
      }
  }
  if (i) return i = e, o = o(i), e = r === "" ? "." + tl(i, 0) : r, bf(o) ? (n = "", e != null && (n = e.replace(kf, "$&/") + "/"), xi(o, t, n, "", function(c) {
    return c;
  })) : o != null && (Su(o) && (o = zw(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(kf, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", bf(e)) for (var a = 0; a < e.length; a++) {
    s = e[a];
    var l = r + tl(s, a);
    i += xi(s, t, n, l, o);
  }
  else if (l = Vw(e), typeof l == "function") for (e = l.call(e), a = 0; !(s = e.next()).done; ) s = s.value, l = r + tl(s, a++), i += xi(s, t, n, l, o);
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
function $w(e) {
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
var Ye = { current: null }, wi = { transition: null }, Uw = { ReactCurrentDispatcher: Ye, ReactCurrentBatchConfig: wi, ReactCurrentOwner: wu };
function jm() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = { map: Bs, forEach: function(e, t, n) {
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
  if (!Su(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
G.Component = uo;
G.Fragment = Mw;
G.Profiler = Rw;
G.PureComponent = vu;
G.StrictMode = Aw;
G.Suspense = Ow;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uw;
G.act = jm;
G.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Pm({}, e.props), o = e.key, s = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, i = wu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) Mm.call(t, l) && !Am.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
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
G.createContext = function(e) {
  return e = { $$typeof: Lw, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: jw, _context: e }, e.Consumer = e;
};
G.createElement = Rm;
G.createFactory = function(e) {
  var t = Rm.bind(null, e);
  return t.type = e, t;
};
G.createRef = function() {
  return { current: null };
};
G.forwardRef = function(e) {
  return { $$typeof: _w, render: e };
};
G.isValidElement = Su;
G.lazy = function(e) {
  return { $$typeof: Fw, _payload: { _status: -1, _result: e }, _init: $w };
};
G.memo = function(e, t) {
  return { $$typeof: Iw, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function(e) {
  var t = wi.transition;
  wi.transition = {};
  try {
    e();
  } finally {
    wi.transition = t;
  }
};
G.unstable_act = jm;
G.useCallback = function(e, t) {
  return Ye.current.useCallback(e, t);
};
G.useContext = function(e) {
  return Ye.current.useContext(e);
};
G.useDebugValue = function() {
};
G.useDeferredValue = function(e) {
  return Ye.current.useDeferredValue(e);
};
G.useEffect = function(e, t) {
  return Ye.current.useEffect(e, t);
};
G.useId = function() {
  return Ye.current.useId();
};
G.useImperativeHandle = function(e, t, n) {
  return Ye.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function(e, t) {
  return Ye.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function(e, t) {
  return Ye.current.useLayoutEffect(e, t);
};
G.useMemo = function(e, t) {
  return Ye.current.useMemo(e, t);
};
G.useReducer = function(e, t, n) {
  return Ye.current.useReducer(e, t, n);
};
G.useRef = function(e) {
  return Ye.current.useRef(e);
};
G.useState = function(e) {
  return Ye.current.useState(e);
};
G.useSyncExternalStore = function(e, t, n) {
  return Ye.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function() {
  return Ye.current.useTransition();
};
G.version = "18.3.1";
Em.exports = G;
var x = Em.exports;
const K = /* @__PURE__ */ km(x), Lm = /* @__PURE__ */ Dw({
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
var Ww = x, Hw = Symbol.for("react.element"), Kw = Symbol.for("react.fragment"), Gw = Object.prototype.hasOwnProperty, Yw = Ww.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Xw = { key: !0, ref: !0, __self: !0, __source: !0 };
function _m(e, t, n) {
  var r, o = {}, s = null, i = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Gw.call(t, r) && !Xw.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Hw, type: e, key: s, ref: i, props: o, _owner: Yw.current };
}
ba.Fragment = Kw;
ba.jsx = _m;
ba.jsxs = _m;
Cm.exports = ba;
var p = Cm.exports, Om = { exports: {} }, dt = {}, Im = { exports: {} }, Fm = {};
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
  function t(D, O) {
    var z = D.length;
    D.push(O);
    e: for (; 0 < z; ) {
      var W = z - 1 >>> 1, se = D[W];
      if (0 < o(se, O)) D[W] = O, D[z] = se, z = W;
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var O = D[0], z = D.pop();
    if (z !== O) {
      D[0] = z;
      e: for (var W = 0, se = D.length, Ee = se >>> 1; W < Ee; ) {
        var ne = 2 * (W + 1) - 1, Ie = D[ne], De = ne + 1, $ = D[De];
        if (0 > o(Ie, z)) De < se && 0 > o($, Ie) ? (D[W] = $, D[De] = z, W = De) : (D[W] = Ie, D[ne] = z, W = ne);
        else if (De < se && 0 > o($, z)) D[W] = $, D[De] = z, W = De;
        else break e;
      }
    }
    return O;
  }
  function o(D, O) {
    var z = D.sortIndex - O.sortIndex;
    return z !== 0 ? z : D.id - O.id;
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
  var l = [], c = [], u = 1, f = null, d = 3, g = !1, w = !1, v = !1, S = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(D) {
    for (var O = n(c); O !== null; ) {
      if (O.callback === null) r(c);
      else if (O.startTime <= D) r(c), O.sortIndex = O.expirationTime, t(l, O);
      else break;
      O = n(c);
    }
  }
  function b(D) {
    if (v = !1, y(D), !w) if (n(l) !== null) w = !0, I(k);
    else {
      var O = n(c);
      O !== null && B(b, O.startTime - D);
    }
  }
  function k(D, O) {
    w = !1, v && (v = !1, m(C), C = -1), g = !0;
    var z = d;
    try {
      for (y(O), f = n(l); f !== null && (!(f.expirationTime > O) || D && !P()); ) {
        var W = f.callback;
        if (typeof W == "function") {
          f.callback = null, d = f.priorityLevel;
          var se = W(f.expirationTime <= O);
          O = e.unstable_now(), typeof se == "function" ? f.callback = se : f === n(l) && r(l), y(O);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var Ee = !0;
      else {
        var ne = n(c);
        ne !== null && B(b, ne.startTime - O), Ee = !1;
      }
      return Ee;
    } finally {
      f = null, d = z, g = !1;
    }
  }
  var T = !1, E = null, C = -1, R = 5, N = -1;
  function P() {
    return !(e.unstable_now() - N < R);
  }
  function M() {
    if (E !== null) {
      var D = e.unstable_now();
      N = D;
      var O = !0;
      try {
        O = E(!0, D);
      } finally {
        O ? L() : (T = !1, E = null);
      }
    } else T = !1;
  }
  var L;
  if (typeof h == "function") L = function() {
    h(M);
  };
  else if (typeof MessageChannel < "u") {
    var _ = new MessageChannel(), F = _.port2;
    _.port1.onmessage = M, L = function() {
      F.postMessage(null);
    };
  } else L = function() {
    S(M, 0);
  };
  function I(D) {
    E = D, T || (T = !0, L());
  }
  function B(D, O) {
    C = S(function() {
      D(e.unstable_now());
    }, O);
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
        var O = 3;
        break;
      default:
        O = d;
    }
    var z = d;
    d = O;
    try {
      return D();
    } finally {
      d = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(D, O) {
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
    var z = d;
    d = D;
    try {
      return O();
    } finally {
      d = z;
    }
  }, e.unstable_scheduleCallback = function(D, O, z) {
    var W = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? W + z : W) : z = W, D) {
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
    return se = z + se, D = { id: u++, callback: O, priorityLevel: D, startTime: z, expirationTime: se, sortIndex: -1 }, z > W ? (D.sortIndex = z, t(c, D), n(l) === null && D === n(c) && (v ? (m(C), C = -1) : v = !0, B(b, z - W))) : (D.sortIndex = se, t(l, D), w || g || (w = !0, I(k))), D;
  }, e.unstable_shouldYield = P, e.unstable_wrapCallback = function(D) {
    var O = d;
    return function() {
      var z = d;
      d = O;
      try {
        return D.apply(this, arguments);
      } finally {
        d = z;
      }
    };
  };
})(Fm);
Im.exports = Fm;
var Qw = Im.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qw = x, ct = Qw;
function A(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Vm = /* @__PURE__ */ new Set(), es = {};
function yr(e, t) {
  qr(e, t), qr(e + "Capture", t);
}
function qr(e, t) {
  for (es[e] = t, e = 0; e < t.length; e++) Vm.add(t[e]);
}
var nn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ql = Object.prototype.hasOwnProperty, Zw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Cf = {}, Ef = {};
function Jw(e) {
  return ql.call(Ef, e) ? !0 : ql.call(Cf, e) ? !1 : Zw.test(e) ? Ef[e] = !0 : (Cf[e] = !0, !1);
}
function e1(e, t, n, r) {
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
function t1(e, t, n, r) {
  if (t === null || typeof t > "u" || e1(e, t, n, r)) return !0;
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
function Xe(e, t, n, r, o, s, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = i;
}
var Oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Oe[e] = new Xe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Oe[t] = new Xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Oe[e] = new Xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Oe[e] = new Xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Oe[e] = new Xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Oe[e] = new Xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Oe[e] = new Xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Oe[e] = new Xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Oe[e] = new Xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var bu = /[\-:]([a-z])/g;
function ku(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    bu,
    ku
  );
  Oe[t] = new Xe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(bu, ku);
  Oe[t] = new Xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(bu, ku);
  Oe[t] = new Xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Oe[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Oe.xlinkHref = new Xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Oe[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Cu(e, t, n, r) {
  var o = Oe.hasOwnProperty(t) ? Oe[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t1(t, n, o, r) && (n = null), r || o === null ? Jw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var un = qw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $s = Symbol.for("react.element"), Er = Symbol.for("react.portal"), Tr = Symbol.for("react.fragment"), Eu = Symbol.for("react.strict_mode"), Zl = Symbol.for("react.profiler"), zm = Symbol.for("react.provider"), Bm = Symbol.for("react.context"), Tu = Symbol.for("react.forward_ref"), Jl = Symbol.for("react.suspense"), ec = Symbol.for("react.suspense_list"), Pu = Symbol.for("react.memo"), xn = Symbol.for("react.lazy"), $m = Symbol.for("react.offscreen"), Tf = Symbol.iterator;
function bo(e) {
  return e === null || typeof e != "object" ? null : (e = Tf && e[Tf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ge = Object.assign, nl;
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
function n1(e) {
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
    case Tr:
      return "Fragment";
    case Er:
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
    case Bm:
      return (e.displayName || "Context") + ".Consumer";
    case zm:
      return (e._context.displayName || "Context") + ".Provider";
    case Tu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Pu:
      return t = e.displayName || null, t !== null ? t : tc(e.type) || "Memo";
    case xn:
      t = e._payload, e = e._init;
      try {
        return tc(e(t));
      } catch {
      }
  }
  return null;
}
function r1(e) {
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
function Um(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function o1(e) {
  var t = Um(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = o1(e));
}
function Wm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Um(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
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
  return ge({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Pf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ln(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Hm(e, t) {
  t = t.checked, t != null && Cu(e, "checked", t, !1);
}
function rc(e, t) {
  Hm(e, t);
  var n = Ln(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? oc(e, t.type, n) : t.hasOwnProperty("defaultValue") && oc(e, t.type, Ln(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Df(e, t, n) {
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
function $r(e, t, n, r) {
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
function sc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return ge({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Nf(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(A(92));
      if (Lo(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Ln(n) };
}
function Km(e, t) {
  var n = Ln(t.value), r = Ln(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Mf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Gm(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Gm(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ws, Ym = function(e) {
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
}, s1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Bo).forEach(function(e) {
  s1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Bo[t] = Bo[e];
  });
});
function Xm(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Bo.hasOwnProperty(e) && Bo[e] ? ("" + t).trim() : t + "px";
}
function Qm(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Xm(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var i1 = ge({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ac(e, t) {
  if (t) {
    if (i1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
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
var uc = null, Ur = null, Wr = null;
function Af(e) {
  if (e = Ms(e)) {
    if (typeof uc != "function") throw Error(A(280));
    var t = e.stateNode;
    t && (t = Pa(t), uc(e.stateNode, e.type, t));
  }
}
function qm(e) {
  Ur ? Wr ? Wr.push(e) : Wr = [e] : Ur = e;
}
function Zm() {
  if (Ur) {
    var e = Ur, t = Wr;
    if (Wr = Ur = null, Af(e), t) for (e = 0; e < t.length; e++) Af(t[e]);
  }
}
function Jm(e, t) {
  return e(t);
}
function eg() {
}
var sl = !1;
function tg(e, t, n) {
  if (sl) return e(t, n);
  sl = !0;
  try {
    return Jm(e, t, n);
  } finally {
    sl = !1, (Ur !== null || Wr !== null) && (eg(), Zm());
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
  if (n && typeof n != "function") throw Error(A(231, t, typeof n));
  return n;
}
var dc = !1;
if (nn) try {
  var ko = {};
  Object.defineProperty(ko, "passive", { get: function() {
    dc = !0;
  } }), window.addEventListener("test", ko, ko), window.removeEventListener("test", ko, ko);
} catch {
  dc = !1;
}
function a1(e, t, n, r, o, s, i, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var $o = !1, zi = null, Bi = !1, fc = null, l1 = { onError: function(e) {
  $o = !0, zi = e;
} };
function c1(e, t, n, r, o, s, i, a, l) {
  $o = !1, zi = null, a1.apply(l1, arguments);
}
function u1(e, t, n, r, o, s, i, a, l) {
  if (c1.apply(this, arguments), $o) {
    if ($o) {
      var c = zi;
      $o = !1, zi = null;
    } else throw Error(A(198));
    Bi || (Bi = !0, fc = c);
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
function ng(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Rf(e) {
  if (vr(e) !== e) throw Error(A(188));
}
function d1(e) {
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
        if (s === n) return Rf(o), e;
        if (s === r) return Rf(o), t;
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
function rg(e) {
  return e = d1(e), e !== null ? og(e) : null;
}
function og(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = og(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var sg = ct.unstable_scheduleCallback, jf = ct.unstable_cancelCallback, f1 = ct.unstable_shouldYield, p1 = ct.unstable_requestPaint, be = ct.unstable_now, h1 = ct.unstable_getCurrentPriorityLevel, Nu = ct.unstable_ImmediatePriority, ig = ct.unstable_UserBlockingPriority, $i = ct.unstable_NormalPriority, m1 = ct.unstable_LowPriority, ag = ct.unstable_IdlePriority, ka = null, Vt = null;
function g1(e) {
  if (Vt && typeof Vt.onCommitFiberRoot == "function") try {
    Vt.onCommitFiberRoot(ka, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Dt = Math.clz32 ? Math.clz32 : x1, y1 = Math.log, v1 = Math.LN2;
function x1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (y1(e) / v1 | 0) | 0;
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
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Dt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function w1(e, t) {
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
function S1(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var i = 31 - Dt(s), a = 1 << i, l = o[i];
    l === -1 ? (!(a & n) || a & r) && (o[i] = w1(a, t)) : l <= t && (e.expiredLanes |= a), s &= ~a;
  }
}
function pc(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function lg() {
  var e = Hs;
  return Hs <<= 1, !(Hs & 4194240) && (Hs = 64), e;
}
function il(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ds(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Dt(t), e[t] = n;
}
function b1(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Dt(n), s = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~s;
  }
}
function Mu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Dt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var oe = 0;
function cg(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var ug, Au, dg, fg, pg, hc = !1, Gs = [], En = null, Tn = null, Pn = null, rs = /* @__PURE__ */ new Map(), os = /* @__PURE__ */ new Map(), Sn = [], k1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Lf(e, t) {
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
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [o] }, t !== null && (t = Ms(t), t !== null && Au(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function C1(e, t, n, r, o) {
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
function hg(e) {
  var t = tr(e.target);
  if (t !== null) {
    var n = vr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = ng(n), t !== null) {
          e.blockedOn = t, pg(e.priority, function() {
            dg(n);
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
    var n = mc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      cc = r, n.target.dispatchEvent(r), cc = null;
    } else return t = Ms(n), t !== null && Au(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function _f(e, t, n) {
  Si(e) && n.delete(t);
}
function E1() {
  hc = !1, En !== null && Si(En) && (En = null), Tn !== null && Si(Tn) && (Tn = null), Pn !== null && Si(Pn) && (Pn = null), rs.forEach(_f), os.forEach(_f);
}
function Eo(e, t) {
  e.blockedOn === t && (e.blockedOn = null, hc || (hc = !0, ct.unstable_scheduleCallback(ct.unstable_NormalPriority, E1)));
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
  for (En !== null && Eo(En, e), Tn !== null && Eo(Tn, e), Pn !== null && Eo(Pn, e), rs.forEach(t), os.forEach(t), n = 0; n < Sn.length; n++) r = Sn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Sn.length && (n = Sn[0], n.blockedOn === null); ) hg(n), n.blockedOn === null && Sn.shift();
}
var Hr = un.ReactCurrentBatchConfig, Wi = !0;
function T1(e, t, n, r) {
  var o = oe, s = Hr.transition;
  Hr.transition = null;
  try {
    oe = 1, Ru(e, t, n, r);
  } finally {
    oe = o, Hr.transition = s;
  }
}
function P1(e, t, n, r) {
  var o = oe, s = Hr.transition;
  Hr.transition = null;
  try {
    oe = 4, Ru(e, t, n, r);
  } finally {
    oe = o, Hr.transition = s;
  }
}
function Ru(e, t, n, r) {
  if (Wi) {
    var o = mc(e, t, n, r);
    if (o === null) gl(e, t, r, Hi, n), Lf(e, r);
    else if (C1(o, e, t, n, r)) r.stopPropagation();
    else if (Lf(e, r), t & 4 && -1 < k1.indexOf(e)) {
      for (; o !== null; ) {
        var s = Ms(o);
        if (s !== null && ug(s), s = mc(e, t, n, r), s === null && gl(e, t, r, Hi, n), s === o) break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else gl(e, t, r, null, n);
  }
}
var Hi = null;
function mc(e, t, n, r) {
  if (Hi = null, e = Du(r), e = tr(e), e !== null) if (t = vr(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = ng(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Hi = e, null;
}
function mg(e) {
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
      switch (h1()) {
        case Nu:
          return 1;
        case ig:
          return 4;
        case $i:
        case m1:
          return 16;
        case ag:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kn = null, ju = null, bi = null;
function gg() {
  if (bi) return bi;
  var e, t = ju, n = t.length, r, o = "value" in kn ? kn.value : kn.textContent, s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++) ;
  return bi = o.slice(e, 1 < r ? 1 - r : void 0);
}
function ki(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ys() {
  return !0;
}
function Of() {
  return !1;
}
function ft(e) {
  function t(n, r, o, s, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = s, this.target = i, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(s) : s[a]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Ys : Of, this.isPropagationStopped = Of, this;
  }
  return ge(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ys);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ys);
  }, persist: function() {
  }, isPersistent: Ys }), t;
}
var fo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Lu = ft(fo), Ns = ge({}, fo, { view: 0, detail: 0 }), D1 = ft(Ns), al, ll, To, Ca = ge({}, Ns, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: _u, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== To && (To && e.type === "mousemove" ? (al = e.screenX - To.screenX, ll = e.screenY - To.screenY) : ll = al = 0, To = e), al);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ll;
} }), If = ft(Ca), N1 = ge({}, Ca, { dataTransfer: 0 }), M1 = ft(N1), A1 = ge({}, Ns, { relatedTarget: 0 }), cl = ft(A1), R1 = ge({}, fo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), j1 = ft(R1), L1 = ge({}, fo, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), _1 = ft(L1), O1 = ge({}, fo, { data: 0 }), Ff = ft(O1), I1 = {
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
}, F1 = {
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
}, V1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function z1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = V1[e]) ? !!t[e] : !1;
}
function _u() {
  return z1;
}
var B1 = ge({}, Ns, { key: function(e) {
  if (e.key) {
    var t = I1[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ki(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? F1[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: _u, charCode: function(e) {
  return e.type === "keypress" ? ki(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ki(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), $1 = ft(B1), U1 = ge({}, Ca, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Vf = ft(U1), W1 = ge({}, Ns, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: _u }), H1 = ft(W1), K1 = ge({}, fo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), G1 = ft(K1), Y1 = ge({}, Ca, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), X1 = ft(Y1), Q1 = [9, 13, 27, 32], Ou = nn && "CompositionEvent" in window, Uo = null;
nn && "documentMode" in document && (Uo = document.documentMode);
var q1 = nn && "TextEvent" in window && !Uo, yg = nn && (!Ou || Uo && 8 < Uo && 11 >= Uo), zf = " ", Bf = !1;
function vg(e, t) {
  switch (e) {
    case "keyup":
      return Q1.indexOf(t.keyCode) !== -1;
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
function xg(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Pr = !1;
function Z1(e, t) {
  switch (e) {
    case "compositionend":
      return xg(t);
    case "keypress":
      return t.which !== 32 ? null : (Bf = !0, zf);
    case "textInput":
      return e = t.data, e === zf && Bf ? null : e;
    default:
      return null;
  }
}
function J1(e, t) {
  if (Pr) return e === "compositionend" || !Ou && vg(e, t) ? (e = gg(), bi = ju = kn = null, Pr = !1, e) : null;
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
      return yg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var eS = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function $f(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!eS[e.type] : t === "textarea";
}
function wg(e, t, n, r) {
  qm(r), t = Ki(t, "onChange"), 0 < t.length && (n = new Lu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Wo = null, is = null;
function tS(e) {
  Ag(e, 0);
}
function Ea(e) {
  var t = Mr(e);
  if (Wm(t)) return e;
}
function nS(e, t) {
  if (e === "change") return t;
}
var Sg = !1;
if (nn) {
  var ul;
  if (nn) {
    var dl = "oninput" in document;
    if (!dl) {
      var Uf = document.createElement("div");
      Uf.setAttribute("oninput", "return;"), dl = typeof Uf.oninput == "function";
    }
    ul = dl;
  } else ul = !1;
  Sg = ul && (!document.documentMode || 9 < document.documentMode);
}
function Wf() {
  Wo && (Wo.detachEvent("onpropertychange", bg), is = Wo = null);
}
function bg(e) {
  if (e.propertyName === "value" && Ea(is)) {
    var t = [];
    wg(t, is, e, Du(e)), tg(tS, t);
  }
}
function rS(e, t, n) {
  e === "focusin" ? (Wf(), Wo = t, is = n, Wo.attachEvent("onpropertychange", bg)) : e === "focusout" && Wf();
}
function oS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ea(is);
}
function sS(e, t) {
  if (e === "click") return Ea(t);
}
function iS(e, t) {
  if (e === "input" || e === "change") return Ea(t);
}
function aS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Mt = typeof Object.is == "function" ? Object.is : aS;
function as(e, t) {
  if (Mt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ql.call(t, o) || !Mt(e[o], t[o])) return !1;
  }
  return !0;
}
function Hf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Kf(e, t) {
  var n = Hf(e);
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
    n = Hf(n);
  }
}
function kg(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? kg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Cg() {
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
function lS(e) {
  var t = Cg(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && kg(n.ownerDocument.documentElement, n)) {
    if (r !== null && Iu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, s = Math.min(r.start, o);
        r = r.end === void 0 ? s : Math.min(r.end, o), !e.extend && s > r && (o = r, r = s, s = o), o = Kf(n, s);
        var i = Kf(
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
var cS = nn && "documentMode" in document && 11 >= document.documentMode, Dr = null, gc = null, Ho = null, yc = !1;
function Gf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  yc || Dr == null || Dr !== Vi(r) || (r = Dr, "selectionStart" in r && Iu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ho && as(Ho, r) || (Ho = r, r = Ki(gc, "onSelect"), 0 < r.length && (t = new Lu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Dr)));
}
function Xs(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Nr = { animationend: Xs("Animation", "AnimationEnd"), animationiteration: Xs("Animation", "AnimationIteration"), animationstart: Xs("Animation", "AnimationStart"), transitionend: Xs("Transition", "TransitionEnd") }, fl = {}, Eg = {};
nn && (Eg = document.createElement("div").style, "AnimationEvent" in window || (delete Nr.animationend.animation, delete Nr.animationiteration.animation, delete Nr.animationstart.animation), "TransitionEvent" in window || delete Nr.transitionend.transition);
function Ta(e) {
  if (fl[e]) return fl[e];
  if (!Nr[e]) return e;
  var t = Nr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Eg) return fl[e] = t[n];
  return e;
}
var Tg = Ta("animationend"), Pg = Ta("animationiteration"), Dg = Ta("animationstart"), Ng = Ta("transitionend"), Mg = /* @__PURE__ */ new Map(), Yf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function $n(e, t) {
  Mg.set(e, t), yr(t, [e]);
}
for (var pl = 0; pl < Yf.length; pl++) {
  var hl = Yf[pl], uS = hl.toLowerCase(), dS = hl[0].toUpperCase() + hl.slice(1);
  $n(uS, "on" + dS);
}
$n(Tg, "onAnimationEnd");
$n(Pg, "onAnimationIteration");
$n(Dg, "onAnimationStart");
$n("dblclick", "onDoubleClick");
$n("focusin", "onFocus");
$n("focusout", "onBlur");
$n(Ng, "onTransitionEnd");
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
var Oo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), fS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));
function Xf(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, u1(r, t, void 0, e), e.currentTarget = null;
}
function Ag(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var a = r[i], l = a.instance, c = a.currentTarget;
        if (a = a.listener, l !== s && o.isPropagationStopped()) break e;
        Xf(o, a, c), s = l;
      }
      else for (i = 0; i < r.length; i++) {
        if (a = r[i], l = a.instance, c = a.currentTarget, a = a.listener, l !== s && o.isPropagationStopped()) break e;
        Xf(o, a, c), s = l;
      }
    }
  }
  if (Bi) throw e = fc, Bi = !1, fc = null, e;
}
function le(e, t) {
  var n = t[bc];
  n === void 0 && (n = t[bc] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Rg(t, e, 2, !1), n.add(r));
}
function ml(e, t, n) {
  var r = 0;
  t && (r |= 4), Rg(n, e, r, t);
}
var Qs = "_reactListening" + Math.random().toString(36).slice(2);
function ls(e) {
  if (!e[Qs]) {
    e[Qs] = !0, Vm.forEach(function(n) {
      n !== "selectionchange" && (fS.has(n) || ml(n, !1, e), ml(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Qs] || (t[Qs] = !0, ml("selectionchange", !1, t));
  }
}
function Rg(e, t, n, r) {
  switch (mg(t)) {
    case 1:
      var o = T1;
      break;
    case 4:
      o = P1;
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
  tg(function() {
    var c = s, u = Du(n), f = [];
    e: {
      var d = Mg.get(e);
      if (d !== void 0) {
        var g = Lu, w = e;
        switch (e) {
          case "keypress":
            if (ki(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = $1;
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
            g = If;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = M1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = H1;
            break;
          case Tg:
          case Pg:
          case Dg:
            g = j1;
            break;
          case Ng:
            g = G1;
            break;
          case "scroll":
            g = D1;
            break;
          case "wheel":
            g = X1;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = _1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Vf;
        }
        var v = (t & 4) !== 0, S = !v && e === "scroll", m = v ? d !== null ? d + "Capture" : null : d;
        v = [];
        for (var h = c, y; h !== null; ) {
          y = h;
          var b = y.stateNode;
          if (y.tag === 5 && b !== null && (y = b, m !== null && (b = ns(h, m), b != null && v.push(cs(h, b, y)))), S) break;
          h = h.return;
        }
        0 < v.length && (d = new g(d, w, null, n, u), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && n !== cc && (w = n.relatedTarget || n.fromElement) && (tr(w) || w[rn])) break e;
        if ((g || d) && (d = u.window === u ? u : (d = u.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = c, w = w ? tr(w) : null, w !== null && (S = vr(w), w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = c), g !== w)) {
          if (v = If, b = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (v = Vf, b = "onPointerLeave", m = "onPointerEnter", h = "pointer"), S = g == null ? d : Mr(g), y = w == null ? d : Mr(w), d = new v(b, h + "leave", g, n, u), d.target = S, d.relatedTarget = y, b = null, tr(u) === c && (v = new v(m, h + "enter", w, n, u), v.target = y, v.relatedTarget = S, b = v), S = b, g && w) t: {
            for (v = g, m = w, h = 0, y = v; y; y = wr(y)) h++;
            for (y = 0, b = m; b; b = wr(b)) y++;
            for (; 0 < h - y; ) v = wr(v), h--;
            for (; 0 < y - h; ) m = wr(m), y--;
            for (; h--; ) {
              if (v === m || m !== null && v === m.alternate) break t;
              v = wr(v), m = wr(m);
            }
            v = null;
          }
          else v = null;
          g !== null && Qf(f, d, g, v, !1), w !== null && S !== null && Qf(f, S, w, v, !0);
        }
      }
      e: {
        if (d = c ? Mr(c) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file") var k = nS;
        else if ($f(d)) if (Sg) k = iS;
        else {
          k = oS;
          var T = rS;
        }
        else (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (k = sS);
        if (k && (k = k(e, c))) {
          wg(f, k, n, u);
          break e;
        }
        T && T(e, d, c), e === "focusout" && (T = d._wrapperState) && T.controlled && d.type === "number" && oc(d, "number", d.value);
      }
      switch (T = c ? Mr(c) : window, e) {
        case "focusin":
          ($f(T) || T.contentEditable === "true") && (Dr = T, gc = c, Ho = null);
          break;
        case "focusout":
          Ho = gc = Dr = null;
          break;
        case "mousedown":
          yc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          yc = !1, Gf(f, n, u);
          break;
        case "selectionchange":
          if (cS) break;
        case "keydown":
        case "keyup":
          Gf(f, n, u);
      }
      var E;
      if (Ou) e: {
        switch (e) {
          case "compositionstart":
            var C = "onCompositionStart";
            break e;
          case "compositionend":
            C = "onCompositionEnd";
            break e;
          case "compositionupdate":
            C = "onCompositionUpdate";
            break e;
        }
        C = void 0;
      }
      else Pr ? vg(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C && (yg && n.locale !== "ko" && (Pr || C !== "onCompositionStart" ? C === "onCompositionEnd" && Pr && (E = gg()) : (kn = u, ju = "value" in kn ? kn.value : kn.textContent, Pr = !0)), T = Ki(c, C), 0 < T.length && (C = new Ff(C, e, null, n, u), f.push({ event: C, listeners: T }), E ? C.data = E : (E = xg(n), E !== null && (C.data = E)))), (E = q1 ? Z1(e, n) : J1(e, n)) && (c = Ki(c, "onBeforeInput"), 0 < c.length && (u = new Ff("onBeforeInput", "beforeinput", null, n, u), f.push({ event: u, listeners: c }), u.data = E));
    }
    Ag(f, t);
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
function wr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Qf(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && c !== null && (a = c, o ? (l = ns(n, s), l != null && i.unshift(cs(n, l, a))) : o || (l = ns(n, s), l != null && i.push(cs(n, l, a)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var pS = /\r\n?/g, hS = /\u0000|\uFFFD/g;
function qf(e) {
  return (typeof e == "string" ? e : "" + e).replace(pS, `
`).replace(hS, "");
}
function qs(e, t, n) {
  if (t = qf(t), qf(e) !== t && n) throw Error(A(425));
}
function Gi() {
}
var vc = null, xc = null;
function wc(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Sc = typeof setTimeout == "function" ? setTimeout : void 0, mS = typeof clearTimeout == "function" ? clearTimeout : void 0, Zf = typeof Promise == "function" ? Promise : void 0, gS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zf < "u" ? function(e) {
  return Zf.resolve(null).then(e).catch(yS);
} : Sc;
function yS(e) {
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
function Jf(e) {
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
var po = Math.random().toString(36).slice(2), Ot = "__reactFiber$" + po, us = "__reactProps$" + po, rn = "__reactContainer$" + po, bc = "__reactEvents$" + po, vS = "__reactListeners$" + po, xS = "__reactHandles$" + po;
function tr(e) {
  var t = e[Ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[rn] || n[Ot]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Jf(e); e !== null; ) {
        if (n = e[Ot]) return n;
        e = Jf(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ms(e) {
  return e = e[Ot] || e[rn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Mr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function Pa(e) {
  return e[us] || null;
}
var kc = [], Ar = -1;
function Un(e) {
  return { current: e };
}
function ce(e) {
  0 > Ar || (e.current = kc[Ar], kc[Ar] = null, Ar--);
}
function ie(e, t) {
  Ar++, kc[Ar] = e.current, e.current = t;
}
var _n = {}, We = Un(_n), Je = Un(!1), lr = _n;
function Zr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return _n;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, s;
  for (s in n) o[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function et(e) {
  return e = e.childContextTypes, e != null;
}
function Yi() {
  ce(Je), ce(We);
}
function ep(e, t, n) {
  if (We.current !== _n) throw Error(A(168));
  ie(We, t), ie(Je, n);
}
function jg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(A(108, r1(e) || "Unknown", o));
  return ge({}, n, r);
}
function Xi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _n, lr = We.current, ie(We, e), ie(Je, Je.current), !0;
}
function tp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n ? (e = jg(e, t, lr), r.__reactInternalMemoizedMergedChildContext = e, ce(Je), ce(We), ie(We, e)) : ce(Je), ie(Je, n);
}
var Yt = null, Da = !1, vl = !1;
function Lg(e) {
  Yt === null ? Yt = [e] : Yt.push(e);
}
function wS(e) {
  Da = !0, Lg(e);
}
function Wn() {
  if (!vl && Yt !== null) {
    vl = !0;
    var e = 0, t = oe;
    try {
      var n = Yt;
      for (oe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Yt = null, Da = !1;
    } catch (o) {
      throw Yt !== null && (Yt = Yt.slice(e + 1)), sg(Nu, Wn), o;
    } finally {
      oe = t, vl = !1;
    }
  }
  return null;
}
var Rr = [], jr = 0, Qi = null, qi = 0, mt = [], gt = 0, cr = null, Xt = 1, Qt = "";
function qn(e, t) {
  Rr[jr++] = qi, Rr[jr++] = Qi, Qi = e, qi = t;
}
function _g(e, t, n) {
  mt[gt++] = Xt, mt[gt++] = Qt, mt[gt++] = cr, cr = e;
  var r = Xt;
  e = Qt;
  var o = 32 - Dt(r) - 1;
  r &= ~(1 << o), n += 1;
  var s = 32 - Dt(t) + o;
  if (30 < s) {
    var i = o - o % 5;
    s = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Xt = 1 << 32 - Dt(t) + o | n << o | r, Qt = s + e;
  } else Xt = 1 << s | n << o | r, Qt = e;
}
function Fu(e) {
  e.return !== null && (qn(e, 1), _g(e, 1, 0));
}
function Vu(e) {
  for (; e === Qi; ) Qi = Rr[--jr], Rr[jr] = null, qi = Rr[--jr], Rr[jr] = null;
  for (; e === cr; ) cr = mt[--gt], mt[gt] = null, Qt = mt[--gt], mt[gt] = null, Xt = mt[--gt], mt[gt] = null;
}
var it = null, st = null, de = !1, Pt = null;
function Og(e, t) {
  var n = yt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function np(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, it = e, st = Dn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, it = e, st = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = cr !== null ? { id: Xt, overflow: Qt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = yt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, it = e, st = null, !0) : !1;
    default:
      return !1;
  }
}
function Cc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ec(e) {
  if (de) {
    var t = st;
    if (t) {
      var n = t;
      if (!np(e, t)) {
        if (Cc(e)) throw Error(A(418));
        t = Dn(n.nextSibling);
        var r = it;
        t && np(e, t) ? Og(r, n) : (e.flags = e.flags & -4097 | 2, de = !1, it = e);
      }
    } else {
      if (Cc(e)) throw Error(A(418));
      e.flags = e.flags & -4097 | 2, de = !1, it = e;
    }
  }
}
function rp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  it = e;
}
function Zs(e) {
  if (e !== it) return !1;
  if (!de) return rp(e), de = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wc(e.type, e.memoizedProps)), t && (t = st)) {
    if (Cc(e)) throw Ig(), Error(A(418));
    for (; t; ) Og(e, t), t = Dn(t.nextSibling);
  }
  if (rp(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              st = Dn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      st = null;
    }
  } else st = it ? Dn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ig() {
  for (var e = st; e; ) e = Dn(e.nextSibling);
}
function Jr() {
  st = it = null, de = !1;
}
function zu(e) {
  Pt === null ? Pt = [e] : Pt.push(e);
}
var SS = un.ReactCurrentBatchConfig;
function Po(e, t, n) {
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
function Js(e, t) {
  throw e = Object.prototype.toString.call(t), Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function op(e) {
  var t = e._init;
  return t(e._payload);
}
function Fg(e) {
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
    return m = Rn(m, h), m.index = 0, m.sibling = null, m;
  }
  function s(m, h, y) {
    return m.index = y, e ? (y = m.alternate, y !== null ? (y = y.index, y < h ? (m.flags |= 2, h) : y) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, y, b) {
    return h === null || h.tag !== 6 ? (h = El(y, m.mode, b), h.return = m, h) : (h = o(h, y), h.return = m, h);
  }
  function l(m, h, y, b) {
    var k = y.type;
    return k === Tr ? u(m, h, y.props.children, b, y.key) : h !== null && (h.elementType === k || typeof k == "object" && k !== null && k.$$typeof === xn && op(k) === h.type) ? (b = o(h, y.props), b.ref = Po(m, h, y), b.return = m, b) : (b = Mi(y.type, y.key, y.props, null, m.mode, b), b.ref = Po(m, h, y), b.return = m, b);
  }
  function c(m, h, y, b) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== y.containerInfo || h.stateNode.implementation !== y.implementation ? (h = Tl(y, m.mode, b), h.return = m, h) : (h = o(h, y.children || []), h.return = m, h);
  }
  function u(m, h, y, b, k) {
    return h === null || h.tag !== 7 ? (h = ir(y, m.mode, b, k), h.return = m, h) : (h = o(h, y), h.return = m, h);
  }
  function f(m, h, y) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = El("" + h, m.mode, y), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case $s:
          return y = Mi(h.type, h.key, h.props, null, m.mode, y), y.ref = Po(m, null, h), y.return = m, y;
        case Er:
          return h = Tl(h, m.mode, y), h.return = m, h;
        case xn:
          var b = h._init;
          return f(m, b(h._payload), y);
      }
      if (Lo(h) || bo(h)) return h = ir(h, m.mode, y, null), h.return = m, h;
      Js(m, h);
    }
    return null;
  }
  function d(m, h, y, b) {
    var k = h !== null ? h.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number") return k !== null ? null : a(m, h, "" + y, b);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case $s:
          return y.key === k ? l(m, h, y, b) : null;
        case Er:
          return y.key === k ? c(m, h, y, b) : null;
        case xn:
          return k = y._init, d(
            m,
            h,
            k(y._payload),
            b
          );
      }
      if (Lo(y) || bo(y)) return k !== null ? null : u(m, h, y, b, null);
      Js(m, y);
    }
    return null;
  }
  function g(m, h, y, b, k) {
    if (typeof b == "string" && b !== "" || typeof b == "number") return m = m.get(y) || null, a(h, m, "" + b, k);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case $s:
          return m = m.get(b.key === null ? y : b.key) || null, l(h, m, b, k);
        case Er:
          return m = m.get(b.key === null ? y : b.key) || null, c(h, m, b, k);
        case xn:
          var T = b._init;
          return g(m, h, y, T(b._payload), k);
      }
      if (Lo(b) || bo(b)) return m = m.get(y) || null, u(h, m, b, k, null);
      Js(h, b);
    }
    return null;
  }
  function w(m, h, y, b) {
    for (var k = null, T = null, E = h, C = h = 0, R = null; E !== null && C < y.length; C++) {
      E.index > C ? (R = E, E = null) : R = E.sibling;
      var N = d(m, E, y[C], b);
      if (N === null) {
        E === null && (E = R);
        break;
      }
      e && E && N.alternate === null && t(m, E), h = s(N, h, C), T === null ? k = N : T.sibling = N, T = N, E = R;
    }
    if (C === y.length) return n(m, E), de && qn(m, C), k;
    if (E === null) {
      for (; C < y.length; C++) E = f(m, y[C], b), E !== null && (h = s(E, h, C), T === null ? k = E : T.sibling = E, T = E);
      return de && qn(m, C), k;
    }
    for (E = r(m, E); C < y.length; C++) R = g(E, m, C, y[C], b), R !== null && (e && R.alternate !== null && E.delete(R.key === null ? C : R.key), h = s(R, h, C), T === null ? k = R : T.sibling = R, T = R);
    return e && E.forEach(function(P) {
      return t(m, P);
    }), de && qn(m, C), k;
  }
  function v(m, h, y, b) {
    var k = bo(y);
    if (typeof k != "function") throw Error(A(150));
    if (y = k.call(y), y == null) throw Error(A(151));
    for (var T = k = null, E = h, C = h = 0, R = null, N = y.next(); E !== null && !N.done; C++, N = y.next()) {
      E.index > C ? (R = E, E = null) : R = E.sibling;
      var P = d(m, E, N.value, b);
      if (P === null) {
        E === null && (E = R);
        break;
      }
      e && E && P.alternate === null && t(m, E), h = s(P, h, C), T === null ? k = P : T.sibling = P, T = P, E = R;
    }
    if (N.done) return n(
      m,
      E
    ), de && qn(m, C), k;
    if (E === null) {
      for (; !N.done; C++, N = y.next()) N = f(m, N.value, b), N !== null && (h = s(N, h, C), T === null ? k = N : T.sibling = N, T = N);
      return de && qn(m, C), k;
    }
    for (E = r(m, E); !N.done; C++, N = y.next()) N = g(E, m, C, N.value, b), N !== null && (e && N.alternate !== null && E.delete(N.key === null ? C : N.key), h = s(N, h, C), T === null ? k = N : T.sibling = N, T = N);
    return e && E.forEach(function(M) {
      return t(m, M);
    }), de && qn(m, C), k;
  }
  function S(m, h, y, b) {
    if (typeof y == "object" && y !== null && y.type === Tr && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case $s:
          e: {
            for (var k = y.key, T = h; T !== null; ) {
              if (T.key === k) {
                if (k = y.type, k === Tr) {
                  if (T.tag === 7) {
                    n(m, T.sibling), h = o(T, y.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (T.elementType === k || typeof k == "object" && k !== null && k.$$typeof === xn && op(k) === T.type) {
                  n(m, T.sibling), h = o(T, y.props), h.ref = Po(m, T, y), h.return = m, m = h;
                  break e;
                }
                n(m, T);
                break;
              } else t(m, T);
              T = T.sibling;
            }
            y.type === Tr ? (h = ir(y.props.children, m.mode, b, y.key), h.return = m, m = h) : (b = Mi(y.type, y.key, y.props, null, m.mode, b), b.ref = Po(m, h, y), b.return = m, m = b);
          }
          return i(m);
        case Er:
          e: {
            for (T = y.key; h !== null; ) {
              if (h.key === T) if (h.tag === 4 && h.stateNode.containerInfo === y.containerInfo && h.stateNode.implementation === y.implementation) {
                n(m, h.sibling), h = o(h, y.children || []), h.return = m, m = h;
                break e;
              } else {
                n(m, h);
                break;
              }
              else t(m, h);
              h = h.sibling;
            }
            h = Tl(y, m.mode, b), h.return = m, m = h;
          }
          return i(m);
        case xn:
          return T = y._init, S(m, h, T(y._payload), b);
      }
      if (Lo(y)) return w(m, h, y, b);
      if (bo(y)) return v(m, h, y, b);
      Js(m, y);
    }
    return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, h !== null && h.tag === 6 ? (n(m, h.sibling), h = o(h, y), h.return = m, m = h) : (n(m, h), h = El(y, m.mode, b), h.return = m, m = h), i(m)) : n(m, h);
  }
  return S;
}
var eo = Fg(!0), Vg = Fg(!1), Zi = Un(null), Ji = null, Lr = null, Bu = null;
function $u() {
  Bu = Lr = Ji = null;
}
function Uu(e) {
  var t = Zi.current;
  ce(Zi), e._currentValue = t;
}
function Tc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Kr(e, t) {
  Ji = e, Bu = Lr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ze = !0), e.firstContext = null);
}
function xt(e) {
  var t = e._currentValue;
  if (Bu !== e) if (e = { context: e, memoizedValue: t, next: null }, Lr === null) {
    if (Ji === null) throw Error(A(308));
    Lr = e, Ji.dependencies = { lanes: 0, firstContext: e };
  } else Lr = Lr.next = e;
  return t;
}
var nr = null;
function Wu(e) {
  nr === null ? nr = [e] : nr.push(e);
}
function zg(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Wu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, on(e, r);
}
function on(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var wn = !1;
function Hu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Bg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Zt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Nn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Q & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, on(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Wu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, on(e, n);
}
function Ci(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Mu(e, n);
  }
}
function sp(e, t) {
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
  wn = !1;
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
              f = ge({}, f, d);
              break e;
            case 2:
              wn = !0;
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
function ip(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(A(191, o));
      o.call(r);
    }
  }
}
var As = {}, zt = Un(As), ds = Un(As), fs = Un(As);
function rr(e) {
  if (e === As) throw Error(A(174));
  return e;
}
function Ku(e, t) {
  switch (ie(fs, t), ie(ds, e), ie(zt, As), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ic(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ic(t, e);
  }
  ce(zt), ie(zt, t);
}
function to() {
  ce(zt), ce(ds), ce(fs);
}
function $g(e) {
  rr(fs.current);
  var t = rr(zt.current), n = ic(t, e.type);
  t !== n && (ie(ds, e), ie(zt, n));
}
function Gu(e) {
  ds.current === e && (ce(zt), ce(ds));
}
var pe = Un(0);
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
var Ei = un.ReactCurrentDispatcher, wl = un.ReactCurrentBatchConfig, ur = 0, me = null, Te = null, Me = null, na = !1, Ko = !1, ps = 0, bS = 0;
function Ve() {
  throw Error(A(321));
}
function Xu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Mt(e[n], t[n])) return !1;
  return !0;
}
function Qu(e, t, n, r, o, s) {
  if (ur = s, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ei.current = e === null || e.memoizedState === null ? TS : PS, e = n(r, o), Ko) {
    s = 0;
    do {
      if (Ko = !1, ps = 0, 25 <= s) throw Error(A(301));
      s += 1, Me = Te = null, t.updateQueue = null, Ei.current = DS, e = n(r, o);
    } while (Ko);
  }
  if (Ei.current = ra, t = Te !== null && Te.next !== null, ur = 0, Me = Te = me = null, na = !1, t) throw Error(A(300));
  return e;
}
function qu() {
  var e = ps !== 0;
  return ps = 0, e;
}
function _t() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Me === null ? me.memoizedState = Me = e : Me = Me.next = e, Me;
}
function wt() {
  if (Te === null) {
    var e = me.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Te.next;
  var t = Me === null ? me.memoizedState : Me.next;
  if (t !== null) Me = t, Te = e;
  else {
    if (e === null) throw Error(A(310));
    Te = e, e = { memoizedState: Te.memoizedState, baseState: Te.baseState, baseQueue: Te.baseQueue, queue: Te.queue, next: null }, Me === null ? me.memoizedState = Me = e : Me = Me.next = e;
  }
  return Me;
}
function hs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Sl(e) {
  var t = wt(), n = t.queue;
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
        l === null ? (a = l = f, i = r) : l = l.next = f, me.lanes |= u, dr |= u;
      }
      c = c.next;
    } while (c !== null && c !== s);
    l === null ? i = r : l.next = a, Mt(r, t.memoizedState) || (Ze = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      s = o.lane, me.lanes |= s, dr |= s, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function bl(e) {
  var t = wt(), n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      s = e(s, i.action), i = i.next;
    while (i !== o);
    Mt(s, t.memoizedState) || (Ze = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function Ug() {
}
function Wg(e, t) {
  var n = me, r = wt(), o = t(), s = !Mt(r.memoizedState, o);
  if (s && (r.memoizedState = o, Ze = !0), r = r.queue, Zu(Gg.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || Me !== null && Me.memoizedState.tag & 1) {
    if (n.flags |= 2048, ms(9, Kg.bind(null, n, r, o, t), void 0, null), Ae === null) throw Error(A(349));
    ur & 30 || Hg(n, t, o);
  }
  return o;
}
function Hg(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Kg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Yg(t) && Xg(e);
}
function Gg(e, t, n) {
  return n(function() {
    Yg(t) && Xg(e);
  });
}
function Yg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Mt(e, n);
  } catch {
    return !0;
  }
}
function Xg(e) {
  var t = on(e, 1);
  t !== null && Nt(t, e, 1, -1);
}
function ap(e) {
  var t = _t();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: hs, lastRenderedState: e }, t.queue = e, e = e.dispatch = ES.bind(null, me, e), [t.memoizedState, e];
}
function ms(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Qg() {
  return wt().memoizedState;
}
function Ti(e, t, n, r) {
  var o = _t();
  me.flags |= e, o.memoizedState = ms(1 | t, n, void 0, r === void 0 ? null : r);
}
function Na(e, t, n, r) {
  var o = wt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Te !== null) {
    var i = Te.memoizedState;
    if (s = i.destroy, r !== null && Xu(r, i.deps)) {
      o.memoizedState = ms(t, n, s, r);
      return;
    }
  }
  me.flags |= e, o.memoizedState = ms(1 | t, n, s, r);
}
function lp(e, t) {
  return Ti(8390656, 8, e, t);
}
function Zu(e, t) {
  return Na(2048, 8, e, t);
}
function qg(e, t) {
  return Na(4, 2, e, t);
}
function Zg(e, t) {
  return Na(4, 4, e, t);
}
function Jg(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function ey(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Na(4, 4, Jg.bind(null, t, e), n);
}
function Ju() {
}
function ty(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function ny(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function ry(e, t, n) {
  return ur & 21 ? (Mt(n, t) || (n = lg(), me.lanes |= n, dr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ze = !0), e.memoizedState = n);
}
function kS(e, t) {
  var n = oe;
  oe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = wl.transition;
  wl.transition = {};
  try {
    e(!1), t();
  } finally {
    oe = n, wl.transition = r;
  }
}
function oy() {
  return wt().memoizedState;
}
function CS(e, t, n) {
  var r = An(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, sy(e)) iy(t, n);
  else if (n = zg(e, t, n, r), n !== null) {
    var o = Ge();
    Nt(n, e, r, o), ay(n, t, r);
  }
}
function ES(e, t, n) {
  var r = An(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (sy(e)) iy(t, o);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var i = t.lastRenderedState, a = s(i, n);
      if (o.hasEagerState = !0, o.eagerState = a, Mt(a, i)) {
        var l = t.interleaved;
        l === null ? (o.next = o, Wu(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = zg(e, t, o, r), n !== null && (o = Ge(), Nt(n, e, r, o), ay(n, t, r));
  }
}
function sy(e) {
  var t = e.alternate;
  return e === me || t !== null && t === me;
}
function iy(e, t) {
  Ko = na = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function ay(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Mu(e, n);
  }
}
var ra = { readContext: xt, useCallback: Ve, useContext: Ve, useEffect: Ve, useImperativeHandle: Ve, useInsertionEffect: Ve, useLayoutEffect: Ve, useMemo: Ve, useReducer: Ve, useRef: Ve, useState: Ve, useDebugValue: Ve, useDeferredValue: Ve, useTransition: Ve, useMutableSource: Ve, useSyncExternalStore: Ve, useId: Ve, unstable_isNewReconciler: !1 }, TS = { readContext: xt, useCallback: function(e, t) {
  return _t().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: xt, useEffect: lp, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ti(
    4194308,
    4,
    Jg.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ti(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ti(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = _t();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = _t();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = CS.bind(null, me, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = _t();
  return e = { current: e }, t.memoizedState = e;
}, useState: ap, useDebugValue: Ju, useDeferredValue: function(e) {
  return _t().memoizedState = e;
}, useTransition: function() {
  var e = ap(!1), t = e[0];
  return e = kS.bind(null, e[1]), _t().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = me, o = _t();
  if (de) {
    if (n === void 0) throw Error(A(407));
    n = n();
  } else {
    if (n = t(), Ae === null) throw Error(A(349));
    ur & 30 || Hg(r, t, n);
  }
  o.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return o.queue = s, lp(Gg.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, ms(9, Kg.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = _t(), t = Ae.identifierPrefix;
  if (de) {
    var n = Qt, r = Xt;
    n = (r & ~(1 << 32 - Dt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ps++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = bS++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, PS = {
  readContext: xt,
  useCallback: ty,
  useContext: xt,
  useEffect: Zu,
  useImperativeHandle: ey,
  useInsertionEffect: qg,
  useLayoutEffect: Zg,
  useMemo: ny,
  useReducer: Sl,
  useRef: Qg,
  useState: function() {
    return Sl(hs);
  },
  useDebugValue: Ju,
  useDeferredValue: function(e) {
    var t = wt();
    return ry(t, Te.memoizedState, e);
  },
  useTransition: function() {
    var e = Sl(hs)[0], t = wt().memoizedState;
    return [e, t];
  },
  useMutableSource: Ug,
  useSyncExternalStore: Wg,
  useId: oy,
  unstable_isNewReconciler: !1
}, DS = { readContext: xt, useCallback: ty, useContext: xt, useEffect: Zu, useImperativeHandle: ey, useInsertionEffect: qg, useLayoutEffect: Zg, useMemo: ny, useReducer: bl, useRef: Qg, useState: function() {
  return bl(hs);
}, useDebugValue: Ju, useDeferredValue: function(e) {
  var t = wt();
  return Te === null ? t.memoizedState = e : ry(t, Te.memoizedState, e);
}, useTransition: function() {
  var e = bl(hs)[0], t = wt().memoizedState;
  return [e, t];
}, useMutableSource: Ug, useSyncExternalStore: Wg, useId: oy, unstable_isNewReconciler: !1 };
function Et(e, t) {
  if (e && e.defaultProps) {
    t = ge({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Pc(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ge({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ma = { isMounted: function(e) {
  return (e = e._reactInternals) ? vr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ge(), o = An(e), s = Zt(r, o);
  s.payload = t, n != null && (s.callback = n), t = Nn(e, s, o), t !== null && (Nt(t, e, o, r), Ci(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ge(), o = An(e), s = Zt(r, o);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Nn(e, s, o), t !== null && (Nt(t, e, o, r), Ci(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ge(), r = An(e), o = Zt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Nn(e, o, r), t !== null && (Nt(t, e, r, n), Ci(t, e, r));
} };
function cp(e, t, n, r, o, s, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !as(n, r) || !as(o, s) : !0;
}
function ly(e, t, n) {
  var r = !1, o = _n, s = t.contextType;
  return typeof s == "object" && s !== null ? s = xt(s) : (o = et(t) ? lr : We.current, r = t.contextTypes, s = (r = r != null) ? Zr(e, o) : _n), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ma, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function up(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ma.enqueueReplaceState(t, t.state, null);
}
function Dc(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Hu(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? o.context = xt(s) : (s = et(t) ? lr : We.current, o.context = Zr(e, s)), o.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Pc(e, t, s, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ma.enqueueReplaceState(o, o.state, null), ea(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function no(e, t) {
  try {
    var n = "", r = t;
    do
      n += n1(r), r = r.return;
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
var NS = typeof WeakMap == "function" ? WeakMap : Map;
function cy(e, t, n) {
  n = Zt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    sa || (sa = !0, Vc = r), Nc(e, t);
  }, n;
}
function uy(e, t, n) {
  n = Zt(-1, n), n.tag = 3;
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
    Nc(e, t), typeof r != "function" && (Mn === null ? Mn = /* @__PURE__ */ new Set([this]) : Mn.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function dp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new NS();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = US.bind(null, e, t, n), t.then(e, e));
}
function fp(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function pp(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Zt(-1, 1), t.tag = 2, Nn(n, t, 1))), n.lanes |= 1), e);
}
var MS = un.ReactCurrentOwner, Ze = !1;
function Ke(e, t, n, r) {
  t.child = e === null ? Vg(t, null, n, r) : eo(t, e.child, n, r);
}
function hp(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return Kr(t, o), r = Qu(e, t, n, r, s, o), n = qu(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, sn(e, t, o)) : (de && n && Fu(t), t.flags |= 1, Ke(e, t, r, o), t.child);
}
function mp(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !ad(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, dy(e, t, s, r, o)) : (e = Mi(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & o)) {
    var i = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : as, n(i, r) && e.ref === t.ref) return sn(e, t, o);
  }
  return t.flags |= 1, e = Rn(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function dy(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (as(s, r) && e.ref === t.ref) if (Ze = !1, t.pendingProps = r = s, (e.lanes & o) !== 0) e.flags & 131072 && (Ze = !0);
    else return t.lanes = e.lanes, sn(e, t, o);
  }
  return Mc(e, t, n, r, o);
}
function fy(e, t, n) {
  var r = t.pendingProps, o = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ie(Or, rt), rt |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ie(Or, rt), rt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, ie(Or, rt), rt |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, ie(Or, rt), rt |= r;
  return Ke(e, t, o, n), t.child;
}
function py(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Mc(e, t, n, r, o) {
  var s = et(n) ? lr : We.current;
  return s = Zr(t, s), Kr(t, o), n = Qu(e, t, n, r, s, o), r = qu(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, sn(e, t, o)) : (de && r && Fu(t), t.flags |= 1, Ke(e, t, n, o), t.child);
}
function gp(e, t, n, r, o) {
  if (et(n)) {
    var s = !0;
    Xi(t);
  } else s = !1;
  if (Kr(t, o), t.stateNode === null) Pi(e, t), ly(t, n, r), Dc(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, a = t.memoizedProps;
    i.props = a;
    var l = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = xt(c) : (c = et(n) ? lr : We.current, c = Zr(t, c));
    var u = n.getDerivedStateFromProps, f = typeof u == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    f || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || l !== c) && up(t, i, r, c), wn = !1;
    var d = t.memoizedState;
    i.state = d, ea(t, r, i, o), l = t.memoizedState, a !== r || d !== l || Je.current || wn ? (typeof u == "function" && (Pc(t, n, u, r), l = t.memoizedState), (a = wn || cp(t, n, a, r, d, l, c)) ? (f || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), i.props = r, i.state = l, i.context = c, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Bg(e, t), a = t.memoizedProps, c = t.type === t.elementType ? a : Et(t.type, a), i.props = c, f = t.pendingProps, d = i.context, l = n.contextType, typeof l == "object" && l !== null ? l = xt(l) : (l = et(n) ? lr : We.current, l = Zr(t, l));
    var g = n.getDerivedStateFromProps;
    (u = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== f || d !== l) && up(t, i, r, l), wn = !1, d = t.memoizedState, i.state = d, ea(t, r, i, o);
    var w = t.memoizedState;
    a !== f || d !== w || Je.current || wn ? (typeof g == "function" && (Pc(t, n, g, r), w = t.memoizedState), (c = wn || cp(t, n, c, r, d, w, l) || !1) ? (u || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, l), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, l)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = l, r = c) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ac(e, t, n, r, s, o);
}
function Ac(e, t, n, r, o, s) {
  py(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && tp(t, n, !1), sn(e, t, s);
  r = t.stateNode, MS.current = t;
  var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = eo(t, e.child, null, s), t.child = eo(t, null, a, s)) : Ke(e, t, a, s), t.memoizedState = r.state, o && tp(t, n, !0), t.child;
}
function hy(e) {
  var t = e.stateNode;
  t.pendingContext ? ep(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ep(e, t.context, !1), Ku(e, t.containerInfo);
}
function yp(e, t, n, r, o) {
  return Jr(), zu(o), t.flags |= 256, Ke(e, t, n, r), t.child;
}
var Rc = { dehydrated: null, treeContext: null, retryLane: 0 };
function jc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function my(e, t, n) {
  var r = t.pendingProps, o = pe.current, s = !1, i = (t.flags & 128) !== 0, a;
  if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ie(pe, o & 1), e === null)
    return Ec(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, i = { mode: "hidden", children: i }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = i) : s = ja(i, r, 0, null), e = ir(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = jc(n), t.memoizedState = Rc, e) : ed(t, i));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return AS(e, t, i, r, a, o, n);
  if (s) {
    s = r.fallback, i = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Rn(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? s = Rn(a, s) : (s = ir(s, i, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, i = e.child.memoizedState, i = i === null ? jc(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, s.memoizedState = i, s.childLanes = e.childLanes & ~n, t.memoizedState = Rc, r;
  }
  return s = e.child, e = s.sibling, r = Rn(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ed(e, t) {
  return t = ja({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ei(e, t, n, r) {
  return r !== null && zu(r), eo(t, e.child, null, n), e = ed(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function AS(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = kl(Error(A(422))), ei(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, o = t.mode, r = ja({ mode: "visible", children: r.children }, o, 0, null), s = ir(s, o, i, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && eo(t, e.child, null, i), t.child.memoizedState = jc(i), t.memoizedState = Rc, s);
  if (!(t.mode & 1)) return ei(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
    return r = a, s = Error(A(419)), r = kl(s, r, void 0), ei(e, t, i, r);
  }
  if (a = (i & e.childLanes) !== 0, Ze || a) {
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
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== s.retryLane && (s.retryLane = o, on(e, o), Nt(r, e, o, -1));
    }
    return id(), r = kl(Error(A(421))), ei(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = WS.bind(null, e), o._reactRetry = t, null) : (e = s.treeContext, st = Dn(o.nextSibling), it = t, de = !0, Pt = null, e !== null && (mt[gt++] = Xt, mt[gt++] = Qt, mt[gt++] = cr, Xt = e.id, Qt = e.overflow, cr = t), t = ed(t, r.children), t.flags |= 4096, t);
}
function vp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Tc(e.return, t, n);
}
function Cl(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = o);
}
function gy(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, s = r.tail;
  if (Ke(e, t, r.children, n), r = pe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && vp(e, n, t);
      else if (e.tag === 19) vp(e, n, t);
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
function sn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), dr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (e = t.child, n = Rn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Rn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function RS(e, t, n) {
  switch (t.tag) {
    case 3:
      hy(t), Jr();
      break;
    case 5:
      $g(t);
      break;
    case 1:
      et(t.type) && Xi(t);
      break;
    case 4:
      Ku(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      ie(Zi, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ie(pe, pe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? my(e, t, n) : (ie(pe, pe.current & 1), e = sn(e, t, n), e !== null ? e.sibling : null);
      ie(pe, pe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return gy(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ie(pe, pe.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, fy(e, t, n);
  }
  return sn(e, t, n);
}
var yy, Lc, vy, xy;
yy = function(e, t) {
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
vy = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, rr(zt.current);
    var s = null;
    switch (n) {
      case "input":
        o = nc(e, o), r = nc(e, r), s = [];
        break;
      case "select":
        o = ge({}, o, { value: void 0 }), r = ge({}, r, { value: void 0 }), s = [];
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
      else c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (es.hasOwnProperty(c) ? (l != null && c === "onScroll" && le("scroll", e), s || a === l || (s = [])) : (s = s || []).push(c, l));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
xy = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Do(e, t) {
  if (!de) switch (e.tailMode) {
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
function ze(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function jS(e, t, n) {
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
      return ze(t), null;
    case 1:
      return et(t.type) && Yi(), ze(t), null;
    case 3:
      return r = t.stateNode, to(), ce(Je), ce(We), Yu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Pt !== null && ($c(Pt), Pt = null))), Lc(e, t), ze(t), null;
    case 5:
      Gu(t);
      var o = rr(fs.current);
      if (n = t.type, e !== null && t.stateNode != null) vy(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return ze(t), null;
        }
        if (e = rr(zt.current), Zs(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[Ot] = t, r[us] = s, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              le("cancel", r), le("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              le("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Oo.length; o++) le(Oo[o], r);
              break;
            case "source":
              le("error", r);
              break;
            case "img":
            case "image":
            case "link":
              le(
                "error",
                r
              ), le("load", r);
              break;
            case "details":
              le("toggle", r);
              break;
            case "input":
              Pf(r, s), le("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, le("invalid", r);
              break;
            case "textarea":
              Nf(r, s), le("invalid", r);
          }
          ac(n, s), o = null;
          for (var i in s) if (s.hasOwnProperty(i)) {
            var a = s[i];
            i === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && qs(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && qs(
              r.textContent,
              a,
              e
            ), o = ["children", "" + a]) : es.hasOwnProperty(i) && a != null && i === "onScroll" && le("scroll", r);
          }
          switch (n) {
            case "input":
              Us(r), Df(r, s, !0);
              break;
            case "textarea":
              Us(r), Mf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Gi);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Gm(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ot] = t, e[us] = r, yy(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = lc(n, r), n) {
              case "dialog":
                le("cancel", e), le("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                le("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Oo.length; o++) le(Oo[o], e);
                o = r;
                break;
              case "source":
                le("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                le(
                  "error",
                  e
                ), le("load", e), o = r;
                break;
              case "details":
                le("toggle", e), o = r;
                break;
              case "input":
                Pf(e, r), o = nc(e, r), le("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ge({}, r, { value: void 0 }), le("invalid", e);
                break;
              case "textarea":
                Nf(e, r), o = sc(e, r), le("invalid", e);
                break;
              default:
                o = r;
            }
            ac(n, o), a = o;
            for (s in a) if (a.hasOwnProperty(s)) {
              var l = a[s];
              s === "style" ? Qm(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Ym(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && ts(e, l) : typeof l == "number" && ts(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (es.hasOwnProperty(s) ? l != null && s === "onScroll" && le("scroll", e) : l != null && Cu(e, s, l, i));
            }
            switch (n) {
              case "input":
                Us(e), Df(e, r, !1);
                break;
              case "textarea":
                Us(e), Mf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ln(r.value));
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
      return ze(t), null;
    case 6:
      if (e && t.stateNode != null) xy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (n = rr(fs.current), rr(zt.current), Zs(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ot] = t, (s = r.nodeValue !== n) && (e = it, e !== null)) switch (e.tag) {
            case 3:
              qs(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && qs(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ot] = t, t.stateNode = r;
      }
      return ze(t), null;
    case 13:
      if (ce(pe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (de && st !== null && t.mode & 1 && !(t.flags & 128)) Ig(), Jr(), t.flags |= 98560, s = !1;
        else if (s = Zs(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(A(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(A(317));
            s[Ot] = t;
          } else Jr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ze(t), s = !1;
        } else Pt !== null && ($c(Pt), Pt = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || pe.current & 1 ? Pe === 0 && (Pe = 3) : id())), t.updateQueue !== null && (t.flags |= 4), ze(t), null);
    case 4:
      return to(), Lc(e, t), e === null && ls(t.stateNode.containerInfo), ze(t), null;
    case 10:
      return Uu(t.type._context), ze(t), null;
    case 17:
      return et(t.type) && Yi(), ze(t), null;
    case 19:
      if (ce(pe), s = t.memoizedState, s === null) return ze(t), null;
      if (r = (t.flags & 128) !== 0, i = s.rendering, i === null) if (r) Do(s, !1);
      else {
        if (Pe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = ta(e), i !== null) {
            for (t.flags |= 128, Do(s, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, i = s.alternate, i === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = i.childLanes, s.lanes = i.lanes, s.child = i.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = i.memoizedProps, s.memoizedState = i.memoizedState, s.updateQueue = i.updateQueue, s.type = i.type, e = i.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ie(pe, pe.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && be() > ro && (t.flags |= 128, r = !0, Do(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ta(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Do(s, !0), s.tail === null && s.tailMode === "hidden" && !i.alternate && !de) return ze(t), null;
        } else 2 * be() - s.renderingStartTime > ro && n !== 1073741824 && (t.flags |= 128, r = !0, Do(s, !1), t.lanes = 4194304);
        s.isBackwards ? (i.sibling = t.child, t.child = i) : (n = s.last, n !== null ? n.sibling = i : t.child = i, s.last = i);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = be(), t.sibling = null, n = pe.current, ie(pe, r ? n & 1 | 2 : n & 1), t) : (ze(t), null);
    case 22:
    case 23:
      return sd(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? rt & 1073741824 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ze(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function LS(e, t) {
  switch (Vu(t), t.tag) {
    case 1:
      return et(t.type) && Yi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return to(), ce(Je), ce(We), Yu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Gu(t), null;
    case 13:
      if (ce(pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(A(340));
        Jr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ce(pe), null;
    case 4:
      return to(), null;
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
var ti = !1, $e = !1, _S = typeof WeakSet == "function" ? WeakSet : Set, V = null;
function _r(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ve(e, t, r);
  }
  else n.current = null;
}
function _c(e, t, n) {
  try {
    n();
  } catch (r) {
    ve(e, t, r);
  }
}
var xp = !1;
function OS(e, t) {
  if (vc = Wi, e = Cg(), Iu(e)) {
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
  for (xc = { focusedElem: e, selectionRange: n }, Wi = !1, V = t; V !== null; ) if (t = V, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, V = e;
  else for (; V !== null; ) {
    t = V;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var v = w.memoizedProps, S = w.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Et(t.type, v), S);
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
      ve(t, t.return, b);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, V = e;
      break;
    }
    V = t.return;
  }
  return w = xp, xp = !1, w;
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
function Aa(e, t) {
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
function wy(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, wy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ot], delete t[us], delete t[bc], delete t[vS], delete t[xS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Sy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function wp(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Sy(e.return)) return null;
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
var je = null, Tt = !1;
function pn(e, t, n) {
  for (n = n.child; n !== null; ) by(e, t, n), n = n.sibling;
}
function by(e, t, n) {
  if (Vt && typeof Vt.onCommitFiberUnmount == "function") try {
    Vt.onCommitFiberUnmount(ka, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      $e || _r(n, t);
    case 6:
      var r = je, o = Tt;
      je = null, pn(e, t, n), je = r, Tt = o, je !== null && (Tt ? (e = je, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : je.removeChild(n.stateNode));
      break;
    case 18:
      je !== null && (Tt ? (e = je, n = n.stateNode, e.nodeType === 8 ? yl(e.parentNode, n) : e.nodeType === 1 && yl(e, n), ss(e)) : yl(je, n.stateNode));
      break;
    case 4:
      r = je, o = Tt, je = n.stateNode.containerInfo, Tt = !0, pn(e, t, n), je = r, Tt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!$e && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var s = o, i = s.destroy;
          s = s.tag, i !== void 0 && (s & 2 || s & 4) && _c(n, t, i), o = o.next;
        } while (o !== r);
      }
      pn(e, t, n);
      break;
    case 1:
      if (!$e && (_r(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        ve(n, t, a);
      }
      pn(e, t, n);
      break;
    case 21:
      pn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ($e = (r = $e) || n.memoizedState !== null, pn(e, t, n), $e = r) : pn(e, t, n);
      break;
    default:
      pn(e, t, n);
  }
}
function Sp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new _S()), t.forEach(function(r) {
      var o = HS.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function bt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var s = e, i = t, a = i;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            je = a.stateNode, Tt = !1;
            break e;
          case 3:
            je = a.stateNode.containerInfo, Tt = !0;
            break e;
          case 4:
            je = a.stateNode.containerInfo, Tt = !0;
            break e;
        }
        a = a.return;
      }
      if (je === null) throw Error(A(160));
      by(s, i, o), je = null, Tt = !1;
      var l = o.alternate;
      l !== null && (l.return = null), o.return = null;
    } catch (c) {
      ve(o, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ky(t, e), t = t.sibling;
}
function ky(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (bt(t, e), Lt(e), r & 4) {
        try {
          Go(3, e, e.return), Aa(3, e);
        } catch (v) {
          ve(e, e.return, v);
        }
        try {
          Go(5, e, e.return);
        } catch (v) {
          ve(e, e.return, v);
        }
      }
      break;
    case 1:
      bt(t, e), Lt(e), r & 512 && n !== null && _r(n, n.return);
      break;
    case 5:
      if (bt(t, e), Lt(e), r & 512 && n !== null && _r(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          ts(o, "");
        } catch (v) {
          ve(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var s = e.memoizedProps, i = n !== null ? n.memoizedProps : s, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && s.type === "radio" && s.name != null && Hm(o, s), lc(a, i);
          var c = lc(a, s);
          for (i = 0; i < l.length; i += 2) {
            var u = l[i], f = l[i + 1];
            u === "style" ? Qm(o, f) : u === "dangerouslySetInnerHTML" ? Ym(o, f) : u === "children" ? ts(o, f) : Cu(o, u, f, c);
          }
          switch (a) {
            case "input":
              rc(o, s);
              break;
            case "textarea":
              Km(o, s);
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
          o[us] = s;
        } catch (v) {
          ve(e, e.return, v);
        }
      }
      break;
    case 6:
      if (bt(t, e), Lt(e), r & 4) {
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
      if (bt(t, e), Lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        ss(t.containerInfo);
      } catch (v) {
        ve(e, e.return, v);
      }
      break;
    case 4:
      bt(t, e), Lt(e);
      break;
    case 13:
      bt(t, e), Lt(e), o = e.child, o.flags & 8192 && (s = o.memoizedState !== null, o.stateNode.isHidden = s, !s || o.alternate !== null && o.alternate.memoizedState !== null || (rd = be())), r & 4 && Sp(e);
      break;
    case 22:
      if (u = n !== null && n.memoizedState !== null, e.mode & 1 ? ($e = (c = $e) || u, bt(t, e), $e = c) : bt(t, e), Lt(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !u && e.mode & 1) for (V = e, u = e.child; u !== null; ) {
          for (f = V = u; V !== null; ) {
            switch (d = V, g = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Go(4, d, d.return);
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
                  kp(f);
                  continue;
                }
            }
            g !== null ? (g.return = d, V = g) : kp(f);
          }
          u = u.sibling;
        }
        e: for (u = null, f = e; ; ) {
          if (f.tag === 5) {
            if (u === null) {
              u = f;
              try {
                o = f.stateNode, c ? (s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, i = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Xm("display", i));
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
      bt(t, e), Lt(e), r & 4 && Sp(e);
      break;
    case 21:
      break;
    default:
      bt(
        t,
        e
      ), Lt(e);
  }
}
function Lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Sy(n)) {
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
          r.flags & 32 && (ts(o, ""), r.flags &= -33);
          var s = wp(e);
          Fc(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, a = wp(e);
          Ic(e, a, i);
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
function IS(e, t, n) {
  V = e, Cy(e);
}
function Cy(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var o = V, s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || ti;
      if (!i) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || $e;
        a = ti;
        var c = $e;
        if (ti = i, ($e = l) && !c) for (V = o; V !== null; ) i = V, l = i.child, i.tag === 22 && i.memoizedState !== null ? Cp(o) : l !== null ? (l.return = i, V = l) : Cp(o);
        for (; s !== null; ) V = s, Cy(s), s = s.sibling;
        V = o, ti = a, $e = c;
      }
      bp(e);
    } else o.subtreeFlags & 8772 && s !== null ? (s.return = o, V = s) : bp(e);
  }
}
function bp(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            $e || Aa(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !$e) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Et(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && ip(t, s, r);
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
              ip(t, i, n);
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
            throw Error(A(163));
        }
        $e || t.flags & 512 && Oc(t);
      } catch (d) {
        ve(t, t.return, d);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, V = n;
      break;
    }
    V = t.return;
  }
}
function kp(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, V = n;
      break;
    }
    V = t.return;
  }
}
function Cp(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Aa(4, t);
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
            Oc(t);
          } catch (l) {
            ve(t, s, l);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Oc(t);
          } catch (l) {
            ve(t, i, l);
          }
      }
    } catch (l) {
      ve(t, t.return, l);
    }
    if (t === e) {
      V = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, V = a;
      break;
    }
    V = t.return;
  }
}
var FS = Math.ceil, oa = un.ReactCurrentDispatcher, td = un.ReactCurrentOwner, vt = un.ReactCurrentBatchConfig, Q = 0, Ae = null, Ce = null, _e = 0, rt = 0, Or = Un(0), Pe = 0, gs = null, dr = 0, Ra = 0, nd = 0, Yo = null, qe = null, rd = 0, ro = 1 / 0, Gt = null, sa = !1, Vc = null, Mn = null, ni = !1, Cn = null, ia = 0, Xo = 0, zc = null, Di = -1, Ni = 0;
function Ge() {
  return Q & 6 ? be() : Di !== -1 ? Di : Di = be();
}
function An(e) {
  return e.mode & 1 ? Q & 2 && _e !== 0 ? _e & -_e : SS.transition !== null ? (Ni === 0 && (Ni = lg()), Ni) : (e = oe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : mg(e.type)), e) : 1;
}
function Nt(e, t, n, r) {
  if (50 < Xo) throw Xo = 0, zc = null, Error(A(185));
  Ds(e, n, r), (!(Q & 2) || e !== Ae) && (e === Ae && (!(Q & 2) && (Ra |= n), Pe === 4 && bn(e, _e)), tt(e, r), n === 1 && Q === 0 && !(t.mode & 1) && (ro = be() + 500, Da && Wn()));
}
function tt(e, t) {
  var n = e.callbackNode;
  S1(e, t);
  var r = Ui(e, e === Ae ? _e : 0);
  if (r === 0) n !== null && jf(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && jf(n), t === 1) e.tag === 0 ? wS(Ep.bind(null, e)) : Lg(Ep.bind(null, e)), gS(function() {
      !(Q & 6) && Wn();
    }), n = null;
    else {
      switch (cg(r)) {
        case 1:
          n = Nu;
          break;
        case 4:
          n = ig;
          break;
        case 16:
          n = $i;
          break;
        case 536870912:
          n = ag;
          break;
        default:
          n = $i;
      }
      n = Ry(n, Ey.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Ey(e, t) {
  if (Di = -1, Ni = 0, Q & 6) throw Error(A(327));
  var n = e.callbackNode;
  if (Gr() && e.callbackNode !== n) return null;
  var r = Ui(e, e === Ae ? _e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = aa(e, r);
  else {
    t = r;
    var o = Q;
    Q |= 2;
    var s = Py();
    (Ae !== e || _e !== t) && (Gt = null, ro = be() + 500, sr(e, t));
    do
      try {
        BS();
        break;
      } catch (a) {
        Ty(e, a);
      }
    while (!0);
    $u(), oa.current = s, Q = o, Ce !== null ? t = 0 : (Ae = null, _e = 0, t = Pe);
  }
  if (t !== 0) {
    if (t === 2 && (o = pc(e), o !== 0 && (r = o, t = Bc(e, o))), t === 1) throw n = gs, sr(e, 0), bn(e, r), tt(e, be()), n;
    if (t === 6) bn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !VS(o) && (t = aa(e, r), t === 2 && (s = pc(e), s !== 0 && (r = s, t = Bc(e, s))), t === 1)) throw n = gs, sr(e, 0), bn(e, r), tt(e, be()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          Zn(e, qe, Gt);
          break;
        case 3:
          if (bn(e, r), (r & 130023424) === r && (t = rd + 500 - be(), 10 < t)) {
            if (Ui(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Ge(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Sc(Zn.bind(null, e, qe, Gt), t);
            break;
          }
          Zn(e, qe, Gt);
          break;
        case 4:
          if (bn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Dt(r);
            s = 1 << i, i = t[i], i > o && (o = i), r &= ~s;
          }
          if (r = o, r = be() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * FS(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Sc(Zn.bind(null, e, qe, Gt), r);
            break;
          }
          Zn(e, qe, Gt);
          break;
        case 5:
          Zn(e, qe, Gt);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return tt(e, be()), e.callbackNode === n ? Ey.bind(null, e) : null;
}
function Bc(e, t) {
  var n = Yo;
  return e.current.memoizedState.isDehydrated && (sr(e, t).flags |= 256), e = aa(e, t), e !== 2 && (t = qe, qe = n, t !== null && $c(t)), e;
}
function $c(e) {
  qe === null ? qe = e : qe.push.apply(qe, e);
}
function VS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], s = o.getSnapshot;
        o = o.value;
        try {
          if (!Mt(s(), o)) return !1;
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
    var n = 31 - Dt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ep(e) {
  if (Q & 6) throw Error(A(327));
  Gr();
  var t = Ui(e, 0);
  if (!(t & 1)) return tt(e, be()), null;
  var n = aa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = pc(e);
    r !== 0 && (t = r, n = Bc(e, r));
  }
  if (n === 1) throw n = gs, sr(e, 0), bn(e, t), tt(e, be()), n;
  if (n === 6) throw Error(A(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Zn(e, qe, Gt), tt(e, be()), null;
}
function od(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    Q = n, Q === 0 && (ro = be() + 500, Da && Wn());
  }
}
function fr(e) {
  Cn !== null && Cn.tag === 0 && !(Q & 6) && Gr();
  var t = Q;
  Q |= 1;
  var n = vt.transition, r = oe;
  try {
    if (vt.transition = null, oe = 1, e) return e();
  } finally {
    oe = r, vt.transition = n, Q = t, !(Q & 6) && Wn();
  }
}
function sd() {
  rt = Or.current, ce(Or);
}
function sr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, mS(n)), Ce !== null) for (n = Ce.return; n !== null; ) {
    var r = n;
    switch (Vu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Yi();
        break;
      case 3:
        to(), ce(Je), ce(We), Yu();
        break;
      case 5:
        Gu(r);
        break;
      case 4:
        to();
        break;
      case 13:
        ce(pe);
        break;
      case 19:
        ce(pe);
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
  if (Ae = e, Ce = e = Rn(e.current, null), _e = rt = t, Pe = 0, gs = null, nd = Ra = dr = 0, qe = Yo = null, nr !== null) {
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
function Ty(e, t) {
  do {
    var n = Ce;
    try {
      if ($u(), Ei.current = ra, na) {
        for (var r = me.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        na = !1;
      }
      if (ur = 0, Me = Te = me = null, Ko = !1, ps = 0, td.current = null, n === null || n.return === null) {
        Pe = 1, gs = t, Ce = null;
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
          var g = fp(i);
          if (g !== null) {
            g.flags &= -257, pp(g, i, a, s, t), g.mode & 1 && dp(s, c, t), t = g, l = c;
            var w = t.updateQueue;
            if (w === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(l), t.updateQueue = v;
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              dp(s, c, t), id();
              break e;
            }
            l = Error(A(426));
          }
        } else if (de && a.mode & 1) {
          var S = fp(i);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), pp(S, i, a, s, t), zu(no(l, a));
            break e;
          }
        }
        s = l = no(l, a), Pe !== 4 && (Pe = 2), Yo === null ? Yo = [s] : Yo.push(s), s = i;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var m = cy(s, l, t);
              sp(s, m);
              break e;
            case 1:
              a = l;
              var h = s.type, y = s.stateNode;
              if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Mn === null || !Mn.has(y)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var b = uy(s, a, t);
                sp(s, b);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Ny(n);
    } catch (k) {
      t = k, Ce === n && n !== null && (Ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Py() {
  var e = oa.current;
  return oa.current = ra, e === null ? ra : e;
}
function id() {
  (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4), Ae === null || !(dr & 268435455) && !(Ra & 268435455) || bn(Ae, _e);
}
function aa(e, t) {
  var n = Q;
  Q |= 2;
  var r = Py();
  (Ae !== e || _e !== t) && (Gt = null, sr(e, t));
  do
    try {
      zS();
      break;
    } catch (o) {
      Ty(e, o);
    }
  while (!0);
  if ($u(), Q = n, oa.current = r, Ce !== null) throw Error(A(261));
  return Ae = null, _e = 0, Pe;
}
function zS() {
  for (; Ce !== null; ) Dy(Ce);
}
function BS() {
  for (; Ce !== null && !f1(); ) Dy(Ce);
}
function Dy(e) {
  var t = Ay(e.alternate, e, rt);
  e.memoizedProps = e.pendingProps, t === null ? Ny(e) : Ce = t, td.current = null;
}
function Ny(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = LS(n, t), n !== null) {
        n.flags &= 32767, Ce = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Pe = 6, Ce = null;
        return;
      }
    } else if (n = jS(n, t, rt), n !== null) {
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
  var r = oe, o = vt.transition;
  try {
    vt.transition = null, oe = 1, $S(e, t, n, r);
  } finally {
    vt.transition = o, oe = r;
  }
  return null;
}
function $S(e, t, n, r) {
  do
    Gr();
  while (Cn !== null);
  if (Q & 6) throw Error(A(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(A(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (b1(e, s), e === Ae && (Ce = Ae = null, _e = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ni || (ni = !0, Ry($i, function() {
    return Gr(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = vt.transition, vt.transition = null;
    var i = oe;
    oe = 1;
    var a = Q;
    Q |= 4, td.current = null, OS(e, n), ky(n, e), lS(xc), Wi = !!vc, xc = vc = null, e.current = n, IS(n), p1(), Q = a, oe = i, vt.transition = s;
  } else e.current = n;
  if (ni && (ni = !1, Cn = e, ia = o), s = e.pendingLanes, s === 0 && (Mn = null), g1(n.stateNode), tt(e, be()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (sa) throw sa = !1, e = Vc, Vc = null, e;
  return ia & 1 && e.tag !== 0 && Gr(), s = e.pendingLanes, s & 1 ? e === zc ? Xo++ : (Xo = 0, zc = e) : Xo = 0, Wn(), null;
}
function Gr() {
  if (Cn !== null) {
    var e = cg(ia), t = vt.transition, n = oe;
    try {
      if (vt.transition = null, oe = 16 > e ? 16 : e, Cn === null) var r = !1;
      else {
        if (e = Cn, Cn = null, ia = 0, Q & 6) throw Error(A(331));
        var o = Q;
        for (Q |= 4, V = e.current; V !== null; ) {
          var s = V, i = s.child;
          if (V.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (V = c; V !== null; ) {
                  var u = V;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Go(8, u, s);
                  }
                  var f = u.child;
                  if (f !== null) f.return = u, V = f;
                  else for (; V !== null; ) {
                    u = V;
                    var d = u.sibling, g = u.return;
                    if (wy(u), u === c) {
                      V = null;
                      break;
                    }
                    if (d !== null) {
                      d.return = g, V = d;
                      break;
                    }
                    V = g;
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
              V = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) i.return = s, V = i;
          else e: for (; V !== null; ) {
            if (s = V, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                Go(9, s, s.return);
            }
            var m = s.sibling;
            if (m !== null) {
              m.return = s.return, V = m;
              break e;
            }
            V = s.return;
          }
        }
        var h = e.current;
        for (V = h; V !== null; ) {
          i = V;
          var y = i.child;
          if (i.subtreeFlags & 2064 && y !== null) y.return = i, V = y;
          else e: for (i = h; V !== null; ) {
            if (a = V, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  Aa(9, a);
              }
            } catch (k) {
              ve(a, a.return, k);
            }
            if (a === i) {
              V = null;
              break e;
            }
            var b = a.sibling;
            if (b !== null) {
              b.return = a.return, V = b;
              break e;
            }
            V = a.return;
          }
        }
        if (Q = o, Wn(), Vt && typeof Vt.onPostCommitFiberRoot == "function") try {
          Vt.onPostCommitFiberRoot(ka, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      oe = n, vt.transition = t;
    }
  }
  return !1;
}
function Tp(e, t, n) {
  t = no(n, t), t = cy(e, t, 1), e = Nn(e, t, 1), t = Ge(), e !== null && (Ds(e, 1, t), tt(e, t));
}
function ve(e, t, n) {
  if (e.tag === 3) Tp(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Tp(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Mn === null || !Mn.has(r))) {
        e = no(n, e), e = uy(t, e, 1), t = Nn(t, e, 1), e = Ge(), t !== null && (Ds(t, 1, e), tt(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function US(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ge(), e.pingedLanes |= e.suspendedLanes & n, Ae === e && (_e & n) === n && (Pe === 4 || Pe === 3 && (_e & 130023424) === _e && 500 > be() - rd ? sr(e, 0) : nd |= n), tt(e, t);
}
function My(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ks, Ks <<= 1, !(Ks & 130023424) && (Ks = 4194304)) : t = 1);
  var n = Ge();
  e = on(e, t), e !== null && (Ds(e, t, n), tt(e, n));
}
function WS(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), My(e, n);
}
function HS(e, t) {
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
  r !== null && r.delete(t), My(e, n);
}
var Ay;
Ay = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Je.current) Ze = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ze = !1, RS(e, t, n);
    Ze = !!(e.flags & 131072);
  }
  else Ze = !1, de && t.flags & 1048576 && _g(t, qi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Pi(e, t), e = t.pendingProps;
      var o = Zr(t, We.current);
      Kr(t, n), o = Qu(null, t, r, e, o, n);
      var s = qu();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, et(r) ? (s = !0, Xi(t)) : s = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Hu(t), o.updater = Ma, t.stateNode = o, o._reactInternals = t, Dc(t, r, e, n), t = Ac(null, t, r, !0, s, n)) : (t.tag = 0, de && s && Fu(t), Ke(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Pi(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = GS(r), e = Et(r, e), o) {
          case 0:
            t = Mc(null, t, r, e, n);
            break e;
          case 1:
            t = gp(null, t, r, e, n);
            break e;
          case 11:
            t = hp(null, t, r, e, n);
            break e;
          case 14:
            t = mp(null, t, r, Et(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Et(r, o), Mc(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Et(r, o), gp(e, t, r, o, n);
    case 3:
      e: {
        if (hy(t), e === null) throw Error(A(387));
        r = t.pendingProps, s = t.memoizedState, o = s.element, Bg(e, t), ea(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          o = no(Error(A(423)), t), t = yp(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = no(Error(A(424)), t), t = yp(e, t, r, n, o);
          break e;
        } else for (st = Dn(t.stateNode.containerInfo.firstChild), it = t, de = !0, Pt = null, n = Vg(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Jr(), r === o) {
            t = sn(e, t, n);
            break e;
          }
          Ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return $g(t), e === null && Ec(t), r = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, i = o.children, wc(r, o) ? i = null : s !== null && wc(r, s) && (t.flags |= 32), py(e, t), Ke(e, t, i, n), t.child;
    case 6:
      return e === null && Ec(t), null;
    case 13:
      return my(e, t, n);
    case 4:
      return Ku(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = eo(t, null, r, n) : Ke(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Et(r, o), hp(e, t, r, o, n);
    case 7:
      return Ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, s = t.memoizedProps, i = o.value, ie(Zi, r._currentValue), r._currentValue = i, s !== null) if (Mt(s.value, i)) {
          if (s.children === o.children && !Je.current) {
            t = sn(e, t, n);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var a = s.dependencies;
          if (a !== null) {
            i = s.child;
            for (var l = a.firstContext; l !== null; ) {
              if (l.context === r) {
                if (s.tag === 1) {
                  l = Zt(-1, n & -n), l.tag = 2;
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
            if (i = s.return, i === null) throw Error(A(341));
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
        Ke(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Kr(t, n), o = xt(o), r = r(o), t.flags |= 1, Ke(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Et(r, t.pendingProps), o = Et(r.type, o), mp(e, t, r, o, n);
    case 15:
      return dy(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Et(r, o), Pi(e, t), t.tag = 1, et(r) ? (e = !0, Xi(t)) : e = !1, Kr(t, n), ly(t, r, o), Dc(t, r, o, n), Ac(null, t, r, !0, e, n);
    case 19:
      return gy(e, t, n);
    case 22:
      return fy(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function Ry(e, t) {
  return sg(e, t);
}
function KS(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function yt(e, t, n, r) {
  return new KS(e, t, n, r);
}
function ad(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function GS(e) {
  if (typeof e == "function") return ad(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Tu) return 11;
    if (e === Pu) return 14;
  }
  return 2;
}
function Rn(e, t) {
  var n = e.alternate;
  return n === null ? (n = yt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Mi(e, t, n, r, o, s) {
  var i = 2;
  if (r = e, typeof e == "function") ad(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Tr:
      return ir(n.children, o, s, t);
    case Eu:
      i = 8, o |= 8;
      break;
    case Zl:
      return e = yt(12, n, t, o | 2), e.elementType = Zl, e.lanes = s, e;
    case Jl:
      return e = yt(13, n, t, o), e.elementType = Jl, e.lanes = s, e;
    case ec:
      return e = yt(19, n, t, o), e.elementType = ec, e.lanes = s, e;
    case $m:
      return ja(n, o, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case zm:
          i = 10;
          break e;
        case Bm:
          i = 9;
          break e;
        case Tu:
          i = 11;
          break e;
        case Pu:
          i = 14;
          break e;
        case xn:
          i = 16, r = null;
          break e;
      }
      throw Error(A(130, e == null ? e : typeof e, ""));
  }
  return t = yt(i, n, t, o), t.elementType = e, t.type = r, t.lanes = s, t;
}
function ir(e, t, n, r) {
  return e = yt(7, e, r, t), e.lanes = n, e;
}
function ja(e, t, n, r) {
  return e = yt(22, e, r, t), e.elementType = $m, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function El(e, t, n) {
  return e = yt(6, e, null, t), e.lanes = n, e;
}
function Tl(e, t, n) {
  return t = yt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function YS(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = il(0), this.expirationTimes = il(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = il(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function ld(e, t, n, r, o, s, i, a, l) {
  return e = new YS(e, t, n, a, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = yt(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Hu(s), e;
}
function XS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Er, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function jy(e) {
  if (!e) return _n;
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
          if (et(t.type)) {
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
    if (et(n)) return jg(e, n, t);
  }
  return t;
}
function Ly(e, t, n, r, o, s, i, a, l) {
  return e = ld(n, r, !0, e, o, s, i, a, l), e.context = jy(null), n = e.current, r = Ge(), o = An(n), s = Zt(r, o), s.callback = t ?? null, Nn(n, s, o), e.current.lanes = o, Ds(e, o, r), tt(e, r), e;
}
function La(e, t, n, r) {
  var o = t.current, s = Ge(), i = An(o);
  return n = jy(n), t.context === null ? t.context = n : t.pendingContext = n, t = Zt(s, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Nn(o, t, i), e !== null && (Nt(e, o, i, s), Ci(e, o, i)), i;
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
function Pp(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function cd(e, t) {
  Pp(e, t), (e = e.alternate) && Pp(e, t);
}
function QS() {
  return null;
}
var _y = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ud(e) {
  this._internalRoot = e;
}
_a.prototype.render = ud.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  La(e, t, null, null);
};
_a.prototype.unmount = ud.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    fr(function() {
      La(null, e, null, null);
    }), t[rn] = null;
  }
};
function _a(e) {
  this._internalRoot = e;
}
_a.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = fg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Sn.length && t !== 0 && t < Sn[n].priority; n++) ;
    Sn.splice(n, 0, e), n === 0 && hg(e);
  }
};
function dd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Oa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Dp() {
}
function qS(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var c = la(i);
        s.call(c);
      };
    }
    var i = Ly(t, r, e, 0, null, !1, !1, "", Dp);
    return e._reactRootContainer = i, e[rn] = i.current, ls(e.nodeType === 8 ? e.parentNode : e), fr(), i;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var c = la(l);
      a.call(c);
    };
  }
  var l = ld(e, 0, !1, null, null, !1, !1, "", Dp);
  return e._reactRootContainer = l, e[rn] = l.current, ls(e.nodeType === 8 ? e.parentNode : e), fr(function() {
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
  } else i = qS(n, t, e, o, r);
  return la(i);
}
ug = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _o(t.pendingLanes);
        n !== 0 && (Mu(t, n | 1), tt(t, be()), !(Q & 6) && (ro = be() + 500, Wn()));
      }
      break;
    case 13:
      fr(function() {
        var r = on(e, 1);
        if (r !== null) {
          var o = Ge();
          Nt(r, e, 1, o);
        }
      }), cd(e, 1);
  }
};
Au = function(e) {
  if (e.tag === 13) {
    var t = on(e, 134217728);
    if (t !== null) {
      var n = Ge();
      Nt(t, e, 134217728, n);
    }
    cd(e, 134217728);
  }
};
dg = function(e) {
  if (e.tag === 13) {
    var t = An(e), n = on(e, t);
    if (n !== null) {
      var r = Ge();
      Nt(n, e, t, r);
    }
    cd(e, t);
  }
};
fg = function() {
  return oe;
};
pg = function(e, t) {
  var n = oe;
  try {
    return oe = e, t();
  } finally {
    oe = n;
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
            if (!o) throw Error(A(90));
            Wm(r), rc(r, o);
          }
        }
      }
      break;
    case "textarea":
      Km(e, n);
      break;
    case "select":
      t = n.value, t != null && $r(e, !!n.multiple, t, !1);
  }
};
Jm = od;
eg = fr;
var ZS = { usingClientEntryPoint: !1, Events: [Ms, Mr, Pa, qm, Zm, od] }, No = { findFiberByHostInstance: tr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, JS = { bundleType: No.bundleType, version: No.version, rendererPackageName: No.rendererPackageName, rendererConfig: No.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: un.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = rg(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: No.findFiberByHostInstance || QS, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ri = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ri.isDisabled && ri.supportsFiber) try {
    ka = ri.inject(JS), Vt = ri;
  } catch {
  }
}
dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ZS;
dt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!dd(t)) throw Error(A(200));
  return XS(e, t, null, n);
};
dt.createRoot = function(e, t) {
  if (!dd(e)) throw Error(A(299));
  var n = !1, r = "", o = _y;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = ld(e, 1, !1, null, null, n, !1, r, o), e[rn] = t.current, ls(e.nodeType === 8 ? e.parentNode : e), new ud(t);
};
dt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e)));
  return e = rg(t), e = e === null ? null : e.stateNode, e;
};
dt.flushSync = function(e) {
  return fr(e);
};
dt.hydrate = function(e, t, n) {
  if (!Oa(t)) throw Error(A(200));
  return Ia(null, e, t, !0, n);
};
dt.hydrateRoot = function(e, t, n) {
  if (!dd(e)) throw Error(A(405));
  var r = n != null && n.hydratedSources || null, o = !1, s = "", i = _y;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Ly(t, null, e, 1, n ?? null, o, !1, s, i), e[rn] = t.current, ls(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new _a(t);
};
dt.render = function(e, t, n) {
  if (!Oa(t)) throw Error(A(200));
  return Ia(null, e, t, !1, n);
};
dt.unmountComponentAtNode = function(e) {
  if (!Oa(e)) throw Error(A(40));
  return e._reactRootContainer ? (fr(function() {
    Ia(null, null, e, !1, function() {
      e._reactRootContainer = null, e[rn] = null;
    });
  }), !0) : !1;
};
dt.unstable_batchedUpdates = od;
dt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Oa(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return Ia(e, t, n, !1, r);
};
dt.version = "18.3.1-next-f1338f8080-20240426";
function Oy() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oy);
    } catch (e) {
      console.error(e);
    }
}
Oy(), Om.exports = dt;
var ho = Om.exports;
const eb = /* @__PURE__ */ km(ho);
var Fa, Np = ho;
Fa = Np.createRoot, Np.hydrateRoot;
function Iy(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Iy(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function tb() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Iy(e)) && (r && (r += " "), r += t);
  return r;
}
const fd = "-", nb = (e) => {
  const t = ob(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(fd);
      return a[0] === "" && a.length !== 1 && a.shift(), Fy(a, t) || rb(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const l = n[i] || [];
      return a && r[i] ? [...l, ...r[i]] : l;
    }
  };
}, Fy = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Fy(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(fd);
  return (i = t.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : i.classGroupId;
}, Mp = /^\[(.+)\]$/, rb = (e) => {
  if (Mp.test(e)) {
    const t = Mp.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, ob = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return ib(Object.entries(e.classGroups), n).forEach(([s, i]) => {
    Uc(i, r, s, t);
  }), r;
}, Uc = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Ap(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (sb(o)) {
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
      Uc(i, Ap(t, s), n, r);
    });
  });
}, Ap = (e, t) => {
  let n = e;
  return t.split(fd).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, sb = (e) => e.isThemeGetter, ib = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a])) : s);
  return [n, o];
}) : e, ab = (e) => {
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
}, Vy = "!", lb = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], s = t.length, i = (a) => {
    const l = [];
    let c = 0, u = 0, f;
    for (let S = 0; S < a.length; S++) {
      let m = a[S];
      if (c === 0) {
        if (m === o && (r || a.slice(S, S + s) === t)) {
          l.push(a.slice(u, S)), u = S + s;
          continue;
        }
        if (m === "/") {
          f = S;
          continue;
        }
      }
      m === "[" ? c++ : m === "]" && c--;
    }
    const d = l.length === 0 ? a : a.substring(u), g = d.startsWith(Vy), w = g ? d.substring(1) : d, v = f && f > u ? f - u : void 0;
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
}, cb = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, ub = (e) => ({
  cache: ab(e.cacheSize),
  parseClassName: lb(e),
  ...nb(e)
}), db = /\s+/, fb = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, s = [], i = e.trim().split(db);
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
    const S = cb(u).join(":"), m = f ? S + Vy : S, h = m + v;
    if (s.includes(h))
      continue;
    s.push(h);
    const y = o(v, w);
    for (let b = 0; b < y.length; ++b) {
      const k = y[b];
      s.push(m + k);
    }
    a = c + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function pb() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = zy(t)) && (r && (r += " "), r += n);
  return r;
}
const zy = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = zy(e[r])) && (n && (n += " "), n += t);
  return n;
};
function hb(e, ...t) {
  let n, r, o, s = i;
  function i(l) {
    const c = t.reduce((u, f) => f(u), e());
    return n = ub(c), r = n.cache.get, o = n.cache.set, s = a, a(l);
  }
  function a(l) {
    const c = r(l);
    if (c)
      return c;
    const u = fb(l, n);
    return o(l, u), u;
  }
  return function() {
    return s(pb.apply(null, arguments));
  };
}
const ae = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, By = /^\[(?:([a-z-]+):)?(.+)\]$/i, mb = /^\d+\/\d+$/, gb = /* @__PURE__ */ new Set(["px", "full", "screen"]), yb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, vb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, xb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, wb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Sb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Kt = (e) => Yr(e) || gb.has(e) || mb.test(e), hn = (e) => mo(e, "length", Nb), Yr = (e) => !!e && !Number.isNaN(Number(e)), Pl = (e) => mo(e, "number", Yr), Mo = (e) => !!e && Number.isInteger(Number(e)), bb = (e) => e.endsWith("%") && Yr(e.slice(0, -1)), H = (e) => By.test(e), mn = (e) => yb.test(e), kb = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Cb = (e) => mo(e, kb, $y), Eb = (e) => mo(e, "position", $y), Tb = /* @__PURE__ */ new Set(["image", "url"]), Pb = (e) => mo(e, Tb, Ab), Db = (e) => mo(e, "", Mb), Ao = () => !0, mo = (e, t, n) => {
  const r = By.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, Nb = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  vb.test(e) && !xb.test(e)
), $y = () => !1, Mb = (e) => wb.test(e), Ab = (e) => Sb.test(e), Rb = () => {
  const e = ae("colors"), t = ae("spacing"), n = ae("blur"), r = ae("brightness"), o = ae("borderColor"), s = ae("borderRadius"), i = ae("borderSpacing"), a = ae("borderWidth"), l = ae("contrast"), c = ae("grayscale"), u = ae("hueRotate"), f = ae("invert"), d = ae("gap"), g = ae("gradientColorStops"), w = ae("gradientColorStopPositions"), v = ae("inset"), S = ae("margin"), m = ae("opacity"), h = ae("padding"), y = ae("saturate"), b = ae("scale"), k = ae("sepia"), T = ae("skew"), E = ae("space"), C = ae("translate"), R = () => ["auto", "contain", "none"], N = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", H, t], M = () => [H, t], L = () => ["", Kt, hn], _ = () => ["auto", Yr, H], F = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], I = () => ["solid", "dashed", "dotted", "double", "none"], B = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], D = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], O = () => ["", "0", H], z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], W = () => [Yr, H];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Ao],
      spacing: [Kt, hn],
      blur: ["none", "", mn, H],
      brightness: W(),
      borderColor: [e],
      borderRadius: ["none", "", "full", mn, H],
      borderSpacing: M(),
      borderWidth: L(),
      contrast: W(),
      grayscale: O(),
      hueRotate: W(),
      invert: O(),
      gap: M(),
      gradientColorStops: [e],
      gradientColorStopPositions: [bb, hn],
      inset: P(),
      margin: P(),
      opacity: W(),
      padding: M(),
      saturate: W(),
      scale: W(),
      sepia: O(),
      skew: W(),
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
        columns: [mn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": z()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": z()
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
        object: [...F(), H]
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
        z: ["auto", Mo, H]
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
        grow: O()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: O()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Mo, H]
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
          span: ["full", Mo, H]
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
        "grid-rows": [Ao]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Mo, H]
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
          screen: [mn]
        }, mn]
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
        text: ["base", mn, hn]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", H]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Yr, Pl]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Kt, H]
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
        decoration: ["auto", "from-font", Kt, hn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Kt, H]
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
        bg: [...F(), Eb]
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
        bg: ["auto", "cover", "contain", Cb]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Pb]
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
        "outline-offset": [Kt, H]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Kt, hn]
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
        "ring-offset": [Kt, hn]
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
        shadow: ["", "inner", "none", mn, Db]
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
        "drop-shadow": ["", "none", mn, H]
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
        rotate: [Mo, H]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [C]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [C]
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
        stroke: [Kt, hn, Pl]
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
}, jb = /* @__PURE__ */ hb(Rb);
function xe(...e) {
  return jb(tb(e));
}
function pd({ className: e, ...t }) {
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
function Uy({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: xe("px-6", e),
      ...t
    }
  );
}
function Lb({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: xe("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
const Jt = x.forwardRef(
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
Jt.displayName = "Button";
function Rp(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function X(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function _b(e, t) {
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
      const { scope: d, children: g, ...w } = f, v = ((m = d == null ? void 0 : d[e]) == null ? void 0 : m[l]) || a, S = x.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ p.jsx(v.Provider, { value: S, children: g });
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
  return o.scopeName = e, [r, Ob(o, ...t)];
}
function Ob(...e) {
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
function jp(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Wy(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = jp(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : jp(e[o], null);
        }
      };
  };
}
function we(...e) {
  return x.useCallback(Wy(...e), e);
}
// @__NO_SIDE_EFFECTS__
function ys(e) {
  const t = /* @__PURE__ */ Ib(e), n = x.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = x.Children.toArray(s), l = a.find(Vb);
    if (l) {
      const c = l.props.children, u = a.map((f) => f === l ? x.Children.count(c) > 1 ? x.Children.only(null) : x.isValidElement(c) ? c.props.children : null : f);
      return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: x.isValidElement(c) ? x.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Ib(e) {
  const t = x.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (x.isValidElement(o)) {
      const i = Bb(o), a = zb(s, o.props);
      return o.type !== x.Fragment && (a.ref = r ? Wy(r, i) : i), x.cloneElement(o, a);
    }
    return x.Children.count(o) > 1 ? x.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Fb = Symbol("radix.slottable");
function Vb(e) {
  return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Fb;
}
function zb(e, t) {
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
function Bb(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Hy(e) {
  const t = e + "CollectionProvider", [n, r] = go(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (v) => {
    const { scope: S, children: m } = v, h = K.useRef(null), y = K.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p.jsx(o, { scope: S, itemMap: y, collectionRef: h, children: m });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ ys(a), c = K.forwardRef(
    (v, S) => {
      const { scope: m, children: h } = v, y = s(a, m), b = we(S, y.collectionRef);
      return /* @__PURE__ */ p.jsx(l, { ref: b, children: h });
    }
  );
  c.displayName = a;
  const u = e + "CollectionItemSlot", f = "data-radix-collection-item", d = /* @__PURE__ */ ys(u), g = K.forwardRef(
    (v, S) => {
      const { scope: m, children: h, ...y } = v, b = K.useRef(null), k = we(S, b), T = s(u, m);
      return K.useEffect(() => (T.itemMap.set(b, { ref: b, ...y }), () => void T.itemMap.delete(b))), /* @__PURE__ */ p.jsx(d, { [f]: "", ref: k, children: h });
    }
  );
  g.displayName = u;
  function w(v) {
    const S = s(e + "CollectionConsumer", v);
    return K.useCallback(() => {
      const h = S.collectionRef.current;
      if (!h) return [];
      const y = Array.from(h.querySelectorAll(`[${f}]`));
      return Array.from(S.itemMap.values()).sort(
        (T, E) => y.indexOf(T.ref.current) - y.indexOf(E.ref.current)
      );
    }, [S.collectionRef, S.itemMap]);
  }
  return [
    { Provider: i, Slot: c, ItemSlot: g },
    w,
    r
  ];
}
var $b = x.createContext(void 0);
function hd(e) {
  const t = x.useContext($b);
  return e || t || "ltr";
}
var Ub = [
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
], Z = Ub.reduce((e, t) => {
  const n = /* @__PURE__ */ ys(`Primitive.${t}`), r = x.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Wb(e, t) {
  e && ho.flushSync(() => e.dispatchEvent(t));
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
function Hb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = On(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Kb = "DismissableLayer", Wc = "dismissableLayer.update", Gb = "dismissableLayer.pointerDownOutside", Yb = "dismissableLayer.focusOutside", Lp, Ky = x.createContext({
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
    } = e, c = x.useContext(Ky), [u, f] = x.useState(null), d = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = x.useState({}), w = we(t, (E) => f(E)), v = Array.from(c.layers), [S] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), m = v.indexOf(S), h = u ? v.indexOf(u) : -1, y = c.layersWithOutsidePointerEventsDisabled.size > 0, b = h >= m, k = qb((E) => {
      const C = E.target, R = [...c.branches].some((N) => N.contains(C));
      !b || R || (o == null || o(E), i == null || i(E), E.defaultPrevented || a == null || a());
    }, d), T = Zb((E) => {
      const C = E.target;
      [...c.branches].some((N) => N.contains(C)) || (s == null || s(E), i == null || i(E), E.defaultPrevented || a == null || a());
    }, d);
    return Hb((E) => {
      h === c.layers.size - 1 && (r == null || r(E), !E.defaultPrevented && a && (E.preventDefault(), a()));
    }, d), x.useEffect(() => {
      if (u)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Lp = d.body.style.pointerEvents, d.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), _p(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = Lp);
        };
    }, [u, d, n, c]), x.useEffect(() => () => {
      u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), _p());
    }, [u, c]), x.useEffect(() => {
      const E = () => g({});
      return document.addEventListener(Wc, E), () => document.removeEventListener(Wc, E);
    }, []), /* @__PURE__ */ p.jsx(
      Z.div,
      {
        ...l,
        ref: w,
        style: {
          pointerEvents: y ? b ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: X(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: X(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: X(
          e.onPointerDownCapture,
          k.onPointerDownCapture
        )
      }
    );
  }
);
md.displayName = Kb;
var Xb = "DismissableLayerBranch", Qb = x.forwardRef((e, t) => {
  const n = x.useContext(Ky), r = x.useRef(null), o = we(t, r);
  return x.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ p.jsx(Z.div, { ...e, ref: o });
});
Qb.displayName = Xb;
function qb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = On(e), r = x.useRef(!1), o = x.useRef(() => {
  });
  return x.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          Gy(
            Gb,
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
function Zb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = On(e), r = x.useRef(!1);
  return x.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && Gy(Yb, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function _p() {
  const e = new CustomEvent(Wc);
  document.dispatchEvent(e);
}
function Gy(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Wb(o, s) : o.dispatchEvent(s);
}
var Dl = 0;
function Yy() {
  x.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Op()), document.body.insertAdjacentElement("beforeend", e[1] ?? Op()), Dl++, () => {
      Dl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Dl--;
    };
  }, []);
}
function Op() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Nl = "focusScope.autoFocusOnMount", Ml = "focusScope.autoFocusOnUnmount", Ip = { bubbles: !1, cancelable: !0 }, Jb = "FocusScope", gd = x.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = x.useState(null), c = On(o), u = On(s), f = x.useRef(null), d = we(t, (v) => l(v)), g = x.useRef({
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
        a.contains(b) ? f.current = b : yn(f.current, { select: !0 });
      }, S = function(y) {
        if (g.paused || !a) return;
        const b = y.relatedTarget;
        b !== null && (a.contains(b) || yn(f.current, { select: !0 }));
      }, m = function(y) {
        if (document.activeElement === document.body)
          for (const k of y)
            k.removedNodes.length > 0 && yn(a);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", S);
      const h = new MutationObserver(m);
      return a && h.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", S), h.disconnect();
      };
    }
  }, [r, a, g.paused]), x.useEffect(() => {
    if (a) {
      Vp.add(g);
      const v = document.activeElement;
      if (!a.contains(v)) {
        const m = new CustomEvent(Nl, Ip);
        a.addEventListener(Nl, c), a.dispatchEvent(m), m.defaultPrevented || (ek(sk(Xy(a)), { select: !0 }), document.activeElement === v && yn(a));
      }
      return () => {
        a.removeEventListener(Nl, c), setTimeout(() => {
          const m = new CustomEvent(Ml, Ip);
          a.addEventListener(Ml, u), a.dispatchEvent(m), m.defaultPrevented || yn(v ?? document.body, { select: !0 }), a.removeEventListener(Ml, u), Vp.remove(g);
        }, 0);
      };
    }
  }, [a, c, u, g]);
  const w = x.useCallback(
    (v) => {
      if (!n && !r || g.paused) return;
      const S = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, m = document.activeElement;
      if (S && m) {
        const h = v.currentTarget, [y, b] = tk(h);
        y && b ? !v.shiftKey && m === b ? (v.preventDefault(), n && yn(y, { select: !0 })) : v.shiftKey && m === y && (v.preventDefault(), n && yn(b, { select: !0 })) : m === h && v.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ p.jsx(Z.div, { tabIndex: -1, ...i, ref: d, onKeyDown: w });
});
gd.displayName = Jb;
function ek(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (yn(r, { select: t }), document.activeElement !== n) return;
}
function tk(e) {
  const t = Xy(e), n = Fp(t, e), r = Fp(t.reverse(), e);
  return [n, r];
}
function Xy(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Fp(e, t) {
  for (const n of e)
    if (!nk(n, { upTo: t })) return n;
}
function nk(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function rk(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function yn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && rk(e) && t && e.select();
  }
}
var Vp = ok();
function ok() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = zp(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = zp(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function zp(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function sk(e) {
  return e.filter((t) => t.tagName !== "A");
}
var He = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {
}, ik = Lm[" useId ".trim().toString()] || (() => {
}), ak = 0;
function jn(e) {
  const [t, n] = x.useState(ik());
  return He(() => {
    n((r) => r ?? String(ak++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const lk = ["top", "right", "bottom", "left"], In = Math.min, ot = Math.max, ca = Math.round, oi = Math.floor, Bt = (e) => ({
  x: e,
  y: e
}), ck = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, uk = {
  start: "end",
  end: "start"
};
function Hc(e, t, n) {
  return ot(e, In(t, n));
}
function an(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ln(e) {
  return e.split("-")[0];
}
function yo(e) {
  return e.split("-")[1];
}
function yd(e) {
  return e === "x" ? "y" : "x";
}
function vd(e) {
  return e === "y" ? "height" : "width";
}
const dk = /* @__PURE__ */ new Set(["top", "bottom"]);
function Ft(e) {
  return dk.has(ln(e)) ? "y" : "x";
}
function xd(e) {
  return yd(Ft(e));
}
function fk(e, t, n) {
  n === void 0 && (n = !1);
  const r = yo(e), o = xd(e), s = vd(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = ua(i)), [i, ua(i)];
}
function pk(e) {
  const t = ua(e);
  return [Kc(e), t, Kc(t)];
}
function Kc(e) {
  return e.replace(/start|end/g, (t) => uk[t]);
}
const Bp = ["left", "right"], $p = ["right", "left"], hk = ["top", "bottom"], mk = ["bottom", "top"];
function gk(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? $p : Bp : t ? Bp : $p;
    case "left":
    case "right":
      return t ? hk : mk;
    default:
      return [];
  }
}
function yk(e, t, n, r) {
  const o = yo(e);
  let s = gk(ln(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Kc)))), s;
}
function ua(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ck[t]);
}
function vk(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Qy(e) {
  return typeof e != "number" ? vk(e) : {
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
function Up(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = Ft(t), i = xd(t), a = vd(i), l = ln(t), c = s === "y", u = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, d = r[a] / 2 - o[a] / 2;
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
const xk = async (e, t, n) => {
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
  } = Up(c, r, l), d = r, g = {}, w = 0;
  for (let v = 0; v < a.length; v++) {
    const {
      name: S,
      fn: m
    } = a[v], {
      x: h,
      y,
      data: b,
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
      [S]: {
        ...g[S],
        ...b
      }
    }, k && w <= 50 && (w++, typeof k == "object" && (k.placement && (d = k.placement), k.rects && (c = k.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: u,
      y: f
    } = Up(c, d, l)), v = -1);
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
  } = an(t, e), w = Qy(g), S = a[d ? f === "floating" ? "reference" : "floating" : f], m = da(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(S))) == null || n ? S : S.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), h = f === "floating" ? {
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
  }, k = da(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: h,
    offsetParent: y,
    strategy: l
  }) : h);
  return {
    top: (m.top - k.top + w.top) / b.y,
    bottom: (k.bottom - m.bottom + w.bottom) / b.y,
    left: (m.left - k.left + w.left) / b.x,
    right: (k.right - m.right + w.right) / b.x
  };
}
const wk = (e) => ({
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
    } = an(e, t) || {};
    if (c == null)
      return {};
    const f = Qy(u), d = {
      x: n,
      y: r
    }, g = xd(o), w = vd(g), v = await i.getDimensions(c), S = g === "y", m = S ? "top" : "left", h = S ? "bottom" : "right", y = S ? "clientHeight" : "clientWidth", b = s.reference[w] + s.reference[g] - d[g] - s.floating[w], k = d[g] - s.reference[g], T = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let E = T ? T[y] : 0;
    (!E || !await (i.isElement == null ? void 0 : i.isElement(T))) && (E = a.floating[y] || s.floating[w]);
    const C = b / 2 - k / 2, R = E / 2 - v[w] / 2 - 1, N = In(f[m], R), P = In(f[h], R), M = N, L = E - v[w] - P, _ = E / 2 - v[w] / 2 + C, F = Hc(M, _, L), I = !l.arrow && yo(o) != null && _ !== F && s.reference[w] / 2 - (_ < M ? N : P) - v[w] / 2 < 0, B = I ? _ < M ? _ - M : _ - L : 0;
    return {
      [g]: d[g] + B,
      data: {
        [g]: F,
        centerOffset: _ - F - B,
        ...I && {
          alignmentOffset: B
        }
      },
      reset: I
    };
  }
}), Sk = function(e) {
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
        ...S
      } = an(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const m = ln(o), h = Ft(a), y = ln(a) === a, b = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), k = d || (y || !v ? [ua(a)] : pk(a)), T = w !== "none";
      !d && T && k.push(...yk(a, v, w, b));
      const E = [a, ...k], C = await vs(t, S), R = [];
      let N = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (u && R.push(C[m]), f) {
        const _ = fk(o, i, b);
        R.push(C[_[0]], C[_[1]]);
      }
      if (N = [...N, {
        placement: o,
        overflows: R
      }], !R.every((_) => _ <= 0)) {
        var P, M;
        const _ = (((P = s.flip) == null ? void 0 : P.index) || 0) + 1, F = E[_];
        if (F && (!(f === "alignment" ? h !== Ft(F) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        N.every((D) => Ft(D.placement) === h ? D.overflows[0] > 0 : !0)))
          return {
            data: {
              index: _,
              overflows: N
            },
            reset: {
              placement: F
            }
          };
        let I = (M = N.filter((B) => B.overflows[0] <= 0).sort((B, D) => B.overflows[1] - D.overflows[1])[0]) == null ? void 0 : M.placement;
        if (!I)
          switch (g) {
            case "bestFit": {
              var L;
              const B = (L = N.filter((D) => {
                if (T) {
                  const O = Ft(D.placement);
                  return O === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  O === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((O) => O > 0).reduce((O, z) => O + z, 0)]).sort((D, O) => D[1] - O[1])[0]) == null ? void 0 : L[0];
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
function Wp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Hp(e) {
  return lk.some((t) => e[t] >= 0);
}
const bk = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = an(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await vs(t, {
            ...o,
            elementContext: "reference"
          }), i = Wp(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Hp(i)
            }
          };
        }
        case "escaped": {
          const s = await vs(t, {
            ...o,
            altBoundary: !0
          }), i = Wp(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Hp(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, qy = /* @__PURE__ */ new Set(["left", "top"]);
async function kk(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = ln(n), a = yo(n), l = Ft(n) === "y", c = qy.has(i) ? -1 : 1, u = s && l ? -1 : 1, f = an(t, e);
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
const Ck = function(e) {
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
      } = t, l = await kk(t, e);
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
}, Ek = function(e) {
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
      } = an(e, t), c = {
        x: n,
        y: r
      }, u = await vs(t, l), f = Ft(ln(o)), d = yd(f);
      let g = c[d], w = c[f];
      if (s) {
        const S = d === "y" ? "top" : "left", m = d === "y" ? "bottom" : "right", h = g + u[S], y = g - u[m];
        g = Hc(h, g, y);
      }
      if (i) {
        const S = f === "y" ? "top" : "left", m = f === "y" ? "bottom" : "right", h = w + u[S], y = w - u[m];
        w = Hc(h, w, y);
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
}, Tk = function(e) {
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
      } = an(e, t), u = {
        x: n,
        y: r
      }, f = Ft(o), d = yd(f);
      let g = u[d], w = u[f];
      const v = an(a, t), S = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (l) {
        const y = d === "y" ? "height" : "width", b = s.reference[d] - s.floating[y] + S.mainAxis, k = s.reference[d] + s.reference[y] - S.mainAxis;
        g < b ? g = b : g > k && (g = k);
      }
      if (c) {
        var m, h;
        const y = d === "y" ? "width" : "height", b = qy.has(ln(o)), k = s.reference[f] - s.floating[y] + (b && ((m = i.offset) == null ? void 0 : m[f]) || 0) + (b ? 0 : S.crossAxis), T = s.reference[f] + s.reference[y] + (b ? 0 : ((h = i.offset) == null ? void 0 : h[f]) || 0) - (b ? S.crossAxis : 0);
        w < k ? w = k : w > T && (w = T);
      }
      return {
        [d]: g,
        [f]: w
      };
    }
  };
}, Pk = function(e) {
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
      } = an(e, t), u = await vs(t, c), f = ln(o), d = yo(o), g = Ft(o) === "y", {
        width: w,
        height: v
      } = s.floating;
      let S, m;
      f === "top" || f === "bottom" ? (S = f, m = d === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (m = f, S = d === "end" ? "top" : "bottom");
      const h = v - u.top - u.bottom, y = w - u.left - u.right, b = In(v - u[S], h), k = In(w - u[m], y), T = !t.middlewareData.shift;
      let E = b, C = k;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (C = y), (r = t.middlewareData.shift) != null && r.enabled.y && (E = h), T && !d) {
        const N = ot(u.left, 0), P = ot(u.right, 0), M = ot(u.top, 0), L = ot(u.bottom, 0);
        g ? C = w - 2 * (N !== 0 || P !== 0 ? N + P : ot(u.left, u.right)) : E = v - 2 * (M !== 0 || L !== 0 ? M + L : ot(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: C,
        availableHeight: E
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
function Va() {
  return typeof window < "u";
}
function vo(e) {
  return Zy(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function at(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ht(e) {
  var t;
  return (t = (Zy(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Zy(e) {
  return Va() ? e instanceof Node || e instanceof at(e).Node : !1;
}
function At(e) {
  return Va() ? e instanceof Element || e instanceof at(e).Element : !1;
}
function Wt(e) {
  return Va() ? e instanceof HTMLElement || e instanceof at(e).HTMLElement : !1;
}
function Kp(e) {
  return !Va() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof at(e).ShadowRoot;
}
const Dk = /* @__PURE__ */ new Set(["inline", "contents"]);
function Rs(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Rt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Dk.has(o);
}
const Nk = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Mk(e) {
  return Nk.has(vo(e));
}
const Ak = [":popover-open", ":modal"];
function za(e) {
  return Ak.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Rk = ["transform", "translate", "scale", "rotate", "perspective"], jk = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Lk = ["paint", "layout", "strict", "content"];
function wd(e) {
  const t = Sd(), n = At(e) ? Rt(e) : e;
  return Rk.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || jk.some((r) => (n.willChange || "").includes(r)) || Lk.some((r) => (n.contain || "").includes(r));
}
function _k(e) {
  let t = Fn(e);
  for (; Wt(t) && !oo(t); ) {
    if (wd(t))
      return t;
    if (za(t))
      return null;
    t = Fn(t);
  }
  return null;
}
function Sd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Ok = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function oo(e) {
  return Ok.has(vo(e));
}
function Rt(e) {
  return at(e).getComputedStyle(e);
}
function Ba(e) {
  return At(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Fn(e) {
  if (vo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Kp(e) && e.host || // Fallback.
    Ht(e)
  );
  return Kp(t) ? t.host : t;
}
function Jy(e) {
  const t = Fn(e);
  return oo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Wt(t) && Rs(t) ? t : Jy(t);
}
function xs(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Jy(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = at(o);
  if (s) {
    const a = Gc(i);
    return t.concat(i, i.visualViewport || [], Rs(o) ? o : [], a && n ? xs(a) : []);
  }
  return t.concat(o, xs(o, [], n));
}
function Gc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ev(e) {
  const t = Rt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Wt(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = ca(n) !== s || ca(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function bd(e) {
  return At(e) ? e : e.contextElement;
}
function Xr(e) {
  const t = bd(e);
  if (!Wt(t))
    return Bt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = ev(t);
  let i = (s ? ca(n.width) : n.width) / r, a = (s ? ca(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const Ik = /* @__PURE__ */ Bt(0);
function tv(e) {
  const t = at(e);
  return !Sd() || !t.visualViewport ? Ik : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Fk(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== at(e) ? !1 : t;
}
function pr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = bd(e);
  let i = Bt(1);
  t && (r ? At(r) && (i = Xr(r)) : i = Xr(e));
  const a = Fk(s, n, r) ? tv(s) : Bt(0);
  let l = (o.left + a.x) / i.x, c = (o.top + a.y) / i.y, u = o.width / i.x, f = o.height / i.y;
  if (s) {
    const d = at(s), g = r && At(r) ? at(r) : r;
    let w = d, v = Gc(w);
    for (; v && r && g !== w; ) {
      const S = Xr(v), m = v.getBoundingClientRect(), h = Rt(v), y = m.left + (v.clientLeft + parseFloat(h.paddingLeft)) * S.x, b = m.top + (v.clientTop + parseFloat(h.paddingTop)) * S.y;
      l *= S.x, c *= S.y, u *= S.x, f *= S.y, l += y, c += b, w = at(v), v = Gc(w);
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
  return t ? t.left + n : pr(Ht(e)).left + n;
}
function nv(e, t, n) {
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
function Vk(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = Ht(r), a = t ? za(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Bt(1);
  const u = Bt(0), f = Wt(r);
  if ((f || !f && !s) && ((vo(r) !== "body" || Rs(i)) && (l = Ba(r)), Wt(r))) {
    const g = pr(r);
    c = Xr(r), u.x = g.x + r.clientLeft, u.y = g.y + r.clientTop;
  }
  const d = i && !f && !s ? nv(i, l, !0) : Bt(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x + d.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y + d.y
  };
}
function zk(e) {
  return Array.from(e.getClientRects());
}
function Bk(e) {
  const t = Ht(e), n = Ba(e), r = e.ownerDocument.body, o = ot(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = ot(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + kd(e);
  const a = -n.scrollTop;
  return Rt(r).direction === "rtl" && (i += ot(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
function $k(e, t) {
  const n = at(e), r = Ht(e), o = n.visualViewport;
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
const Uk = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Wk(e, t) {
  const n = pr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = Wt(e) ? Xr(e) : Bt(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, c = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: c
  };
}
function Gp(e, t, n) {
  let r;
  if (t === "viewport")
    r = $k(e, n);
  else if (t === "document")
    r = Bk(Ht(e));
  else if (At(t))
    r = Wk(t, n);
  else {
    const o = tv(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return da(r);
}
function rv(e, t) {
  const n = Fn(e);
  return n === t || !At(n) || oo(n) ? !1 : Rt(n).position === "fixed" || rv(n, t);
}
function Hk(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = xs(e, [], !1).filter((a) => At(a) && vo(a) !== "body"), o = null;
  const s = Rt(e).position === "fixed";
  let i = s ? Fn(e) : e;
  for (; At(i) && !oo(i); ) {
    const a = Rt(i), l = wd(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && Uk.has(o.position) || Rs(i) && !l && rv(e, i)) ? r = r.filter((u) => u !== i) : o = a, i = Fn(i);
  }
  return t.set(e, r), r;
}
function Kk(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? za(t) ? [] : Hk(t, this._c) : [].concat(n), r], a = i[0], l = i.reduce((c, u) => {
    const f = Gp(t, u, o);
    return c.top = ot(f.top, c.top), c.right = In(f.right, c.right), c.bottom = In(f.bottom, c.bottom), c.left = ot(f.left, c.left), c;
  }, Gp(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Gk(e) {
  const {
    width: t,
    height: n
  } = ev(e);
  return {
    width: t,
    height: n
  };
}
function Yk(e, t, n) {
  const r = Wt(t), o = Ht(t), s = n === "fixed", i = pr(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Bt(0);
  function c() {
    l.x = kd(o);
  }
  if (r || !r && !s)
    if ((vo(t) !== "body" || Rs(o)) && (a = Ba(t)), r) {
      const g = pr(t, !0, s, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && c();
  s && !r && o && c();
  const u = o && !r && !s ? nv(o, a) : Bt(0), f = i.left + a.scrollLeft - l.x - u.x, d = i.top + a.scrollTop - l.y - u.y;
  return {
    x: f,
    y: d,
    width: i.width,
    height: i.height
  };
}
function Al(e) {
  return Rt(e).position === "static";
}
function Yp(e, t) {
  if (!Wt(e) || Rt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ht(e) === n && (n = n.ownerDocument.body), n;
}
function ov(e, t) {
  const n = at(e);
  if (za(e))
    return n;
  if (!Wt(e)) {
    let o = Fn(e);
    for (; o && !oo(o); ) {
      if (At(o) && !Al(o))
        return o;
      o = Fn(o);
    }
    return n;
  }
  let r = Yp(e, t);
  for (; r && Mk(r) && Al(r); )
    r = Yp(r, t);
  return r && oo(r) && Al(r) && !wd(r) ? n : r || _k(e) || n;
}
const Xk = async function(e) {
  const t = this.getOffsetParent || ov, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Yk(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Qk(e) {
  return Rt(e).direction === "rtl";
}
const qk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Vk,
  getDocumentElement: Ht,
  getClippingRect: Kk,
  getOffsetParent: ov,
  getElementRects: Xk,
  getClientRects: zk,
  getDimensions: Gk,
  getScale: Xr,
  isElement: At,
  isRTL: Qk
};
function sv(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Zk(e, t) {
  let n = null, r;
  const o = Ht(e);
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
    const w = oi(f), v = oi(o.clientWidth - (u + d)), S = oi(o.clientHeight - (f + g)), m = oi(u), y = {
      rootMargin: -w + "px " + -v + "px " + -S + "px " + -m + "px",
      threshold: ot(0, In(1, l)) || 1
    };
    let b = !0;
    function k(T) {
      const E = T[0].intersectionRatio;
      if (E !== l) {
        if (!b)
          return i();
        E ? i(!1, E) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !sv(c, e.getBoundingClientRect()) && i(), b = !1;
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
function Jk(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = bd(e), u = o || s ? [...c ? xs(c) : [], ...xs(t)] : [];
  u.forEach((m) => {
    o && m.addEventListener("scroll", n, {
      passive: !0
    }), s && m.addEventListener("resize", n);
  });
  const f = c && a ? Zk(c, n) : null;
  let d = -1, g = null;
  i && (g = new ResizeObserver((m) => {
    let [h] = m;
    h && h.target === c && g && (g.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var y;
      (y = g) == null || y.observe(t);
    })), n();
  }), c && !l && g.observe(c), g.observe(t));
  let w, v = l ? pr(e) : null;
  l && S();
  function S() {
    const m = pr(e);
    v && !sv(v, m) && n(), v = m, w = requestAnimationFrame(S);
  }
  return n(), () => {
    var m;
    u.forEach((h) => {
      o && h.removeEventListener("scroll", n), s && h.removeEventListener("resize", n);
    }), f == null || f(), (m = g) == null || m.disconnect(), g = null, l && cancelAnimationFrame(w);
  };
}
const eC = Ck, tC = Ek, nC = Sk, rC = Pk, oC = bk, Xp = wk, sC = Tk, iC = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: qk,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return xk(e, t, {
    ...o,
    platform: s
  });
};
var aC = typeof document < "u", lC = function() {
}, Ai = aC ? x.useLayoutEffect : lC;
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
function iv(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Qp(e, t) {
  const n = iv(e);
  return Math.round(t * n) / n;
}
function Rl(e) {
  const t = x.useRef(e);
  return Ai(() => {
    t.current = e;
  }), t;
}
function cC(e) {
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
  const [w, v] = x.useState(null), [S, m] = x.useState(null), h = x.useCallback((D) => {
    D !== T.current && (T.current = D, v(D));
  }, []), y = x.useCallback((D) => {
    D !== E.current && (E.current = D, m(D));
  }, []), b = s || w, k = i || S, T = x.useRef(null), E = x.useRef(null), C = x.useRef(u), R = l != null, N = Rl(l), P = Rl(o), M = Rl(c), L = x.useCallback(() => {
    if (!T.current || !E.current)
      return;
    const D = {
      placement: t,
      strategy: n,
      middleware: d
    };
    P.current && (D.platform = P.current), iC(T.current, E.current, D).then((O) => {
      const z = {
        ...O,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: M.current !== !1
      };
      _.current && !fa(C.current, z) && (C.current = z, ho.flushSync(() => {
        f(z);
      }));
    });
  }, [d, t, n, P, M]);
  Ai(() => {
    c === !1 && C.current.isPositioned && (C.current.isPositioned = !1, f((D) => ({
      ...D,
      isPositioned: !1
    })));
  }, [c]);
  const _ = x.useRef(!1);
  Ai(() => (_.current = !0, () => {
    _.current = !1;
  }), []), Ai(() => {
    if (b && (T.current = b), k && (E.current = k), b && k) {
      if (N.current)
        return N.current(b, k, L);
      L();
    }
  }, [b, k, L, N, R]);
  const F = x.useMemo(() => ({
    reference: T,
    floating: E,
    setReference: h,
    setFloating: y
  }), [h, y]), I = x.useMemo(() => ({
    reference: b,
    floating: k
  }), [b, k]), B = x.useMemo(() => {
    const D = {
      position: n,
      left: 0,
      top: 0
    };
    if (!I.floating)
      return D;
    const O = Qp(I.floating, u.x), z = Qp(I.floating, u.y);
    return a ? {
      ...D,
      transform: "translate(" + O + "px, " + z + "px)",
      ...iv(I.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: O,
      top: z
    };
  }, [n, a, I.floating, u.x, u.y]);
  return x.useMemo(() => ({
    ...u,
    update: L,
    refs: F,
    elements: I,
    floatingStyles: B
  }), [u, L, F, I, B]);
}
const uC = (e) => {
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
      return r && t(r) ? r.current != null ? Xp({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Xp({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, dC = (e, t) => ({
  ...eC(e),
  options: [e, t]
}), fC = (e, t) => ({
  ...tC(e),
  options: [e, t]
}), pC = (e, t) => ({
  ...sC(e),
  options: [e, t]
}), hC = (e, t) => ({
  ...nC(e),
  options: [e, t]
}), mC = (e, t) => ({
  ...rC(e),
  options: [e, t]
}), gC = (e, t) => ({
  ...oC(e),
  options: [e, t]
}), yC = (e, t) => ({
  ...uC(e),
  options: [e, t]
});
var vC = "Arrow", av = x.forwardRef((e, t) => {
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
av.displayName = vC;
var xC = av;
function wC(e) {
  const [t, n] = x.useState(void 0);
  return He(() => {
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
var Cd = "Popper", [lv, cv] = go(Cd), [SC, uv] = lv(Cd), dv = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = x.useState(null);
  return /* @__PURE__ */ p.jsx(SC, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
dv.displayName = Cd;
var fv = "PopperAnchor", pv = x.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = uv(fv, n), i = x.useRef(null), a = we(t, i), l = x.useRef(null);
    return x.useEffect(() => {
      const c = l.current;
      l.current = (r == null ? void 0 : r.current) || i.current, c !== l.current && s.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ p.jsx(Z.div, { ...o, ref: a });
  }
);
pv.displayName = fv;
var Ed = "PopperContent", [bC, kC] = lv(Ed), hv = x.forwardRef(
  (e, t) => {
    var $, ee, Ne, Y, te, J;
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
    } = e, S = uv(Ed, n), [m, h] = x.useState(null), y = we(t, (ke) => h(ke)), [b, k] = x.useState(null), T = wC(b), E = (T == null ? void 0 : T.width) ?? 0, C = (T == null ? void 0 : T.height) ?? 0, R = r + (s !== "center" ? "-" + s : ""), N = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, P = Array.isArray(c) ? c : [c], M = P.length > 0, L = {
      padding: N,
      boundary: P.filter(EC),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: M
    }, { refs: _, floatingStyles: F, placement: I, isPositioned: B, middlewareData: D } = cC({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: R,
      whileElementsMounted: (...ke) => Jk(...ke, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: S.anchor
      },
      middleware: [
        dC({ mainAxis: o + C, alignmentAxis: i }),
        l && fC({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? pC() : void 0,
          ...L
        }),
        l && hC({ ...L }),
        mC({
          ...L,
          apply: ({ elements: ke, rects: nt, availableWidth: dn, availableHeight: Qe }) => {
            const { width: Yn, height: zs } = nt.reference, St = ke.floating.style;
            St.setProperty("--radix-popper-available-width", `${dn}px`), St.setProperty("--radix-popper-available-height", `${Qe}px`), St.setProperty("--radix-popper-anchor-width", `${Yn}px`), St.setProperty("--radix-popper-anchor-height", `${zs}px`);
          }
        }),
        b && yC({ element: b, padding: a }),
        TC({ arrowWidth: E, arrowHeight: C }),
        d && gC({ strategy: "referenceHidden", ...L })
      ]
    }), [O, z] = yv(I), W = On(w);
    He(() => {
      B && (W == null || W());
    }, [B, W]);
    const se = ($ = D.arrow) == null ? void 0 : $.x, Ee = (ee = D.arrow) == null ? void 0 : ee.y, ne = ((Ne = D.arrow) == null ? void 0 : Ne.centerOffset) !== 0, [Ie, De] = x.useState();
    return He(() => {
      m && De(window.getComputedStyle(m).zIndex);
    }, [m]), /* @__PURE__ */ p.jsx(
      "div",
      {
        ref: _.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...F,
          transform: B ? F.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Ie,
          "--radix-popper-transform-origin": [
            (Y = D.transformOrigin) == null ? void 0 : Y.x,
            (te = D.transformOrigin) == null ? void 0 : te.y
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
          bC,
          {
            scope: n,
            placedSide: O,
            onArrowChange: k,
            arrowX: se,
            arrowY: Ee,
            shouldHideArrow: ne,
            children: /* @__PURE__ */ p.jsx(
              Z.div,
              {
                "data-side": O,
                "data-align": z,
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
hv.displayName = Ed;
var mv = "PopperArrow", CC = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, gv = x.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = kC(mv, r), i = CC[s.placedSide];
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
          xC,
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
gv.displayName = mv;
function EC(e) {
  return e !== null;
}
var TC = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var S, m, h;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((S = o.arrow) == null ? void 0 : S.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [c, u] = yv(n), f = { start: "0%", center: "50%", end: "100%" }[u], d = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + a / 2, g = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + l / 2;
    let w = "", v = "";
    return c === "bottom" ? (w = i ? f : `${d}px`, v = `${-l}px`) : c === "top" ? (w = i ? f : `${d}px`, v = `${r.floating.height + l}px`) : c === "right" ? (w = `${-l}px`, v = i ? f : `${g}px`) : c === "left" && (w = `${r.floating.width + l}px`, v = i ? f : `${g}px`), { data: { x: w, y: v } };
  }
});
function yv(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var PC = dv, DC = pv, NC = hv, MC = gv, AC = "Portal", Td = x.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, s] = x.useState(!1);
  He(() => s(!0), []);
  const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return i ? eb.createPortal(/* @__PURE__ */ p.jsx(Z.div, { ...r, ref: t }), i) : null;
});
Td.displayName = AC;
var RC = Lm[" useInsertionEffect ".trim().toString()] || He;
function ws({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, i] = jC({
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
        const d = LC(u) ? u(e) : u;
        d !== e && ((f = i.current) == null || f.call(i, d));
      } else
        s(u);
    },
    [a, e, s, i]
  );
  return [l, c];
}
function jC({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = x.useState(e), o = x.useRef(n), s = x.useRef(t);
  return RC(() => {
    s.current = t;
  }, [t]), x.useEffect(() => {
    var i;
    o.current !== n && ((i = s.current) == null || i.call(s, n), o.current = n);
  }, [n, o]), [n, r, s];
}
function LC(e) {
  return typeof e == "function";
}
function _C(e) {
  const t = x.useRef({ value: e, previous: e });
  return x.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var vv = Object.freeze({
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
}), OC = "VisuallyHidden", IC = x.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(
    Z.span,
    {
      ...e,
      ref: t,
      style: { ...vv, ...e.style }
    }
  )
);
IC.displayName = OC;
var FC = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Sr = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap(), ii = {}, jl = 0, xv = function(e) {
  return e && (e.host || xv(e.parentNode));
}, VC = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = xv(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, zC = function(e, t, n, r) {
  var o = VC(t, Array.isArray(e) ? e : [e]);
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
          var g = d.getAttribute(r), w = g !== null && g !== "false", v = (Sr.get(d) || 0) + 1, S = (s.get(d) || 0) + 1;
          Sr.set(d, v), s.set(d, S), i.push(d), v === 1 && w && si.set(d, !0), S === 1 && d.setAttribute(n, "true"), w || d.setAttribute(r, "true");
        } catch (m) {
          console.error("aria-hidden: cannot operate on ", d, m);
        }
    });
  };
  return u(t), a.clear(), jl++, function() {
    i.forEach(function(f) {
      var d = Sr.get(f) - 1, g = s.get(f) - 1;
      Sr.set(f, d), s.set(f, g), d || (si.has(f) || f.removeAttribute(r), si.delete(f)), g || f.removeAttribute(n);
    }), jl--, jl || (Sr = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap(), ii = {});
  };
}, wv = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = FC(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), zC(r, o, n, "aria-hidden")) : function() {
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
function Sv(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function BC(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Ri = "right-scroll-bar-position", ji = "width-before-scroll-bar", $C = "with-scroll-bars-hidden", UC = "--removed-body-scroll-bar-size";
function Ll(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function WC(e, t) {
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
var HC = typeof window < "u" ? x.useLayoutEffect : x.useEffect, qp = /* @__PURE__ */ new WeakMap();
function KC(e, t) {
  var n = WC(null, function(r) {
    return e.forEach(function(o) {
      return Ll(o, r);
    });
  });
  return HC(function() {
    var r = qp.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || Ll(a, null);
      }), s.forEach(function(a) {
        o.has(a) || Ll(a, i);
      });
    }
    qp.set(n, e);
  }, [e]), n;
}
function GC(e) {
  return e;
}
function YC(e, t) {
  t === void 0 && (t = GC);
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
function XC(e) {
  e === void 0 && (e = {});
  var t = YC(null);
  return t.options = It({ async: !0, ssr: !1 }, e), t;
}
var bv = function(e) {
  var t = e.sideCar, n = Sv(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return x.createElement(r, It({}, n));
};
bv.isSideCarExport = !0;
function QC(e, t) {
  return e.useMedium(t), bv;
}
var kv = XC(), _l = function() {
}, $a = x.forwardRef(function(e, t) {
  var n = x.useRef(null), r = x.useState({
    onScrollCapture: _l,
    onWheelCapture: _l,
    onTouchMoveCapture: _l
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, u = e.enabled, f = e.shards, d = e.sideCar, g = e.noRelative, w = e.noIsolation, v = e.inert, S = e.allowPinchZoom, m = e.as, h = m === void 0 ? "div" : m, y = e.gapMode, b = Sv(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), k = d, T = KC([n, t]), E = It(It({}, b), o);
  return x.createElement(
    x.Fragment,
    null,
    u && x.createElement(k, { sideCar: kv, removeScrollBar: c, shards: f, noRelative: g, noIsolation: w, inert: v, setCallbacks: s, allowPinchZoom: !!S, lockRef: n, gapMode: y }),
    i ? x.cloneElement(x.Children.only(a), It(It({}, E), { ref: T })) : x.createElement(h, It({}, E, { className: l, ref: T }), a)
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
var qC = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ZC() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = qC();
  return t && e.setAttribute("nonce", t), e;
}
function JC(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function eE(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var tE = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = ZC()) && (JC(t, n), eE(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, nE = function() {
  var e = tE();
  return function(t, n) {
    x.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Cv = function() {
  var e = nE(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, rE = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ol = function(e) {
  return parseInt(e || "", 10) || 0;
}, oE = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ol(n), Ol(r), Ol(o)];
}, sE = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return rE;
  var t = oE(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, iE = Cv(), Qr = "data-scroll-locked", aE = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat($C, ` {
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
  
  body[`).concat(Qr, `] {
    `).concat(UC, ": ").concat(a, `px;
  }
`);
}, Zp = function() {
  var e = parseInt(document.body.getAttribute(Qr) || "0", 10);
  return isFinite(e) ? e : 0;
}, lE = function() {
  x.useEffect(function() {
    return document.body.setAttribute(Qr, (Zp() + 1).toString()), function() {
      var e = Zp() - 1;
      e <= 0 ? document.body.removeAttribute(Qr) : document.body.setAttribute(Qr, e.toString());
    };
  }, []);
}, cE = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  lE();
  var s = x.useMemo(function() {
    return sE(o);
  }, [o]);
  return x.createElement(iE, { styles: aE(s, !t, o, n ? "" : "!important") });
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
var br = Yc ? { passive: !1 } : !1, uE = function(e) {
  return e.tagName === "TEXTAREA";
}, Ev = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !uE(e) && n[t] === "visible")
  );
}, dE = function(e) {
  return Ev(e, "overflowY");
}, fE = function(e) {
  return Ev(e, "overflowX");
}, Jp = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Tv(e, r);
    if (o) {
      var s = Pv(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, pE = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, hE = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Tv = function(e, t) {
  return e === "v" ? dE(t) : fE(t);
}, Pv = function(e, t) {
  return e === "v" ? pE(t) : hE(t);
}, mE = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, gE = function(e, t, n, r, o) {
  var s = mE(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, l = t.contains(a), c = !1, u = i > 0, f = 0, d = 0;
  do {
    if (!a)
      break;
    var g = Pv(e, a), w = g[0], v = g[1], S = g[2], m = v - S - s * w;
    (w || m) && Tv(e, a) && (f += m, d += w);
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
}, eh = function(e) {
  return [e.deltaX, e.deltaY];
}, th = function(e) {
  return e && "current" in e ? e.current : e;
}, yE = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, vE = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, xE = 0, kr = [];
function wE(e) {
  var t = x.useRef([]), n = x.useRef([0, 0]), r = x.useRef(), o = x.useState(xE++)[0], s = x.useState(Cv)[0], i = x.useRef(e);
  x.useEffect(function() {
    i.current = e;
  }, [e]), x.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = BC([e.lockRef.current], (e.shards || []).map(th), !0).filter(Boolean);
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
    var m = li(v), h = n.current, y = "deltaX" in v ? v.deltaX : h[0] - m[0], b = "deltaY" in v ? v.deltaY : h[1] - m[1], k, T = v.target, E = Math.abs(y) > Math.abs(b) ? "h" : "v";
    if ("touches" in v && E === "h" && T.type === "range")
      return !1;
    var C = Jp(E, T);
    if (!C)
      return !0;
    if (C ? k = E : (k = E === "v" ? "h" : "v", C = Jp(E, T)), !C)
      return !1;
    if (!r.current && "changedTouches" in v && (y || b) && (r.current = k), !k)
      return !0;
    var R = r.current || k;
    return gE(R, S, v, R === "h" ? y : b);
  }, []), l = x.useCallback(function(v) {
    var S = v;
    if (!(!kr.length || kr[kr.length - 1] !== s)) {
      var m = "deltaY" in S ? eh(S) : li(S), h = t.current.filter(function(k) {
        return k.name === S.type && (k.target === S.target || S.target === k.shadowParent) && yE(k.delta, m);
      })[0];
      if (h && h.should) {
        S.cancelable && S.preventDefault();
        return;
      }
      if (!h) {
        var y = (i.current.shards || []).map(th).filter(Boolean).filter(function(k) {
          return k.contains(S.target);
        }), b = y.length > 0 ? a(S, y[0]) : !i.current.noIsolation;
        b && S.cancelable && S.preventDefault();
      }
    }
  }, []), c = x.useCallback(function(v, S, m, h) {
    var y = { name: v, delta: S, target: m, should: h, shadowParent: SE(m) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(b) {
        return b !== y;
      });
    }, 1);
  }, []), u = x.useCallback(function(v) {
    n.current = li(v), r.current = void 0;
  }, []), f = x.useCallback(function(v) {
    c(v.type, eh(v), v.target, a(v, e.lockRef.current));
  }, []), d = x.useCallback(function(v) {
    c(v.type, li(v), v.target, a(v, e.lockRef.current));
  }, []);
  x.useEffect(function() {
    return kr.push(s), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", l, br), document.addEventListener("touchmove", l, br), document.addEventListener("touchstart", u, br), function() {
      kr = kr.filter(function(v) {
        return v !== s;
      }), document.removeEventListener("wheel", l, br), document.removeEventListener("touchmove", l, br), document.removeEventListener("touchstart", u, br);
    };
  }, []);
  var g = e.removeScrollBar, w = e.inert;
  return x.createElement(
    x.Fragment,
    null,
    w ? x.createElement(s, { styles: vE(o) }) : null,
    g ? x.createElement(cE, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function SE(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const bE = QC(kv, wE);
var Pd = x.forwardRef(function(e, t) {
  return x.createElement($a, It({}, e, { ref: t, sideCar: bE }));
});
Pd.classNames = $a.classNames;
var kE = [" ", "Enter", "ArrowUp", "ArrowDown"], CE = [" ", "Enter"], hr = "Select", [Ua, Wa, EE] = Hy(hr), [xo, zM] = go(hr, [
  EE,
  cv
]), Ha = cv(), [TE, Hn] = xo(hr), [PE, DE] = xo(hr), Dv = (e) => {
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
  } = e, v = Ha(t), [S, m] = x.useState(null), [h, y] = x.useState(null), [b, k] = x.useState(!1), T = hd(c), [E, C] = ws({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: hr
  }), [R, N] = ws({
    prop: i,
    defaultProp: a,
    onChange: l,
    caller: hr
  }), P = x.useRef(null), M = S ? w || !!S.closest("form") : !0, [L, _] = x.useState(/* @__PURE__ */ new Set()), F = Array.from(L).map((I) => I.props.value).join(";");
  return /* @__PURE__ */ p.jsx(PC, { ...v, children: /* @__PURE__ */ p.jsxs(
    TE,
    {
      required: g,
      scope: t,
      trigger: S,
      onTriggerChange: m,
      valueNode: h,
      onValueNodeChange: y,
      valueNodeHasChildren: b,
      onValueNodeHasChildrenChange: k,
      contentId: jn(),
      value: R,
      onValueChange: N,
      open: E,
      onOpenChange: C,
      dir: T,
      triggerPointerDownPosRef: P,
      disabled: d,
      children: [
        /* @__PURE__ */ p.jsx(Ua.Provider, { scope: t, children: /* @__PURE__ */ p.jsx(
          PE,
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
          Qv,
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
              Array.from(L)
            ]
          },
          F
        ) : null
      ]
    }
  ) });
};
Dv.displayName = hr;
var Nv = "SelectTrigger", Mv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = Ha(n), i = Hn(Nv, n), a = i.disabled || r, l = we(t, i.onTriggerChange), c = Wa(n), u = x.useRef("touch"), [f, d, g] = Zv((v) => {
      const S = c().filter((y) => !y.disabled), m = S.find((y) => y.value === i.value), h = Jv(S, v, m);
      h !== void 0 && i.onValueChange(h.value);
    }), w = (v) => {
      a || (i.onOpenChange(!0), g()), v && (i.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    };
    return /* @__PURE__ */ p.jsx(DC, { asChild: !0, ...s, children: /* @__PURE__ */ p.jsx(
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
        "data-placeholder": qv(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: X(o.onClick, (v) => {
          v.currentTarget.focus(), u.current !== "mouse" && w(v);
        }),
        onPointerDown: X(o.onPointerDown, (v) => {
          u.current = v.pointerType;
          const S = v.target;
          S.hasPointerCapture(v.pointerId) && S.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (w(v), v.preventDefault());
        }),
        onKeyDown: X(o.onKeyDown, (v) => {
          const S = f.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && d(v.key), !(S && v.key === " ") && kE.includes(v.key) && (w(), v.preventDefault());
        })
      }
    ) });
  }
);
Mv.displayName = Nv;
var Av = "SelectValue", Rv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: i = "", ...a } = e, l = Hn(Av, n), { onValueNodeHasChildrenChange: c } = l, u = s !== void 0, f = we(t, l.onValueNodeChange);
    return He(() => {
      c(u);
    }, [c, u]), /* @__PURE__ */ p.jsx(
      Z.span,
      {
        ...a,
        ref: f,
        style: { pointerEvents: "none" },
        children: qv(l.value) ? /* @__PURE__ */ p.jsx(p.Fragment, { children: i }) : s
      }
    );
  }
);
Rv.displayName = Av;
var NE = "SelectIcon", jv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ p.jsx(Z.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
jv.displayName = NE;
var ME = "SelectPortal", Lv = (e) => /* @__PURE__ */ p.jsx(Td, { asChild: !0, ...e });
Lv.displayName = ME;
var mr = "SelectContent", _v = x.forwardRef(
  (e, t) => {
    const n = Hn(mr, e.__scopeSelect), [r, o] = x.useState();
    if (He(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? ho.createPortal(
        /* @__PURE__ */ p.jsx(Ov, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx(Ua.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ p.jsx(Iv, { ...e, ref: t });
  }
);
_v.displayName = mr;
var kt = 10, [Ov, Kn] = xo(mr), AE = "SelectContentImpl", RE = /* @__PURE__ */ ys("SelectContent.RemoveScroll"), Iv = x.forwardRef(
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
      avoidCollisions: S,
      //
      ...m
    } = e, h = Hn(mr, n), [y, b] = x.useState(null), [k, T] = x.useState(null), E = we(t, ($) => b($)), [C, R] = x.useState(null), [N, P] = x.useState(
      null
    ), M = Wa(n), [L, _] = x.useState(!1), F = x.useRef(!1);
    x.useEffect(() => {
      if (y) return wv(y);
    }, [y]), Yy();
    const I = x.useCallback(
      ($) => {
        const [ee, ...Ne] = M().map((J) => J.ref.current), [Y] = Ne.slice(-1), te = document.activeElement;
        for (const J of $)
          if (J === te || (J == null || J.scrollIntoView({ block: "nearest" }), J === ee && k && (k.scrollTop = 0), J === Y && k && (k.scrollTop = k.scrollHeight), J == null || J.focus(), document.activeElement !== te)) return;
      },
      [M, k]
    ), B = x.useCallback(
      () => I([C, y]),
      [I, C, y]
    );
    x.useEffect(() => {
      L && B();
    }, [L, B]);
    const { onOpenChange: D, triggerPointerDownPosRef: O } = h;
    x.useEffect(() => {
      if (y) {
        let $ = { x: 0, y: 0 };
        const ee = (Y) => {
          var te, J;
          $ = {
            x: Math.abs(Math.round(Y.pageX) - (((te = O.current) == null ? void 0 : te.x) ?? 0)),
            y: Math.abs(Math.round(Y.pageY) - (((J = O.current) == null ? void 0 : J.y) ?? 0))
          };
        }, Ne = (Y) => {
          $.x <= 10 && $.y <= 10 ? Y.preventDefault() : y.contains(Y.target) || D(!1), document.removeEventListener("pointermove", ee), O.current = null;
        };
        return O.current !== null && (document.addEventListener("pointermove", ee), document.addEventListener("pointerup", Ne, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", ee), document.removeEventListener("pointerup", Ne, { capture: !0 });
        };
      }
    }, [y, D, O]), x.useEffect(() => {
      const $ = () => D(!1);
      return window.addEventListener("blur", $), window.addEventListener("resize", $), () => {
        window.removeEventListener("blur", $), window.removeEventListener("resize", $);
      };
    }, [D]);
    const [z, W] = Zv(($) => {
      const ee = M().filter((te) => !te.disabled), Ne = ee.find((te) => te.ref.current === document.activeElement), Y = Jv(ee, $, Ne);
      Y && setTimeout(() => Y.ref.current.focus());
    }), se = x.useCallback(
      ($, ee, Ne) => {
        const Y = !F.current && !Ne;
        (h.value !== void 0 && h.value === ee || Y) && (R($), Y && (F.current = !0));
      },
      [h.value]
    ), Ee = x.useCallback(() => y == null ? void 0 : y.focus(), [y]), ne = x.useCallback(
      ($, ee, Ne) => {
        const Y = !F.current && !Ne;
        (h.value !== void 0 && h.value === ee || Y) && P($);
      },
      [h.value]
    ), Ie = r === "popper" ? Xc : Fv, De = Ie === Xc ? {
      side: a,
      sideOffset: l,
      align: c,
      alignOffset: u,
      arrowPadding: f,
      collisionBoundary: d,
      collisionPadding: g,
      sticky: w,
      hideWhenDetached: v,
      avoidCollisions: S
    } : {};
    return /* @__PURE__ */ p.jsx(
      Ov,
      {
        scope: n,
        content: y,
        viewport: k,
        onViewportChange: T,
        itemRefCallback: se,
        selectedItem: C,
        onItemLeave: Ee,
        itemTextRefCallback: ne,
        focusSelectedItem: B,
        selectedItemText: N,
        position: r,
        isPositioned: L,
        searchRef: z,
        children: /* @__PURE__ */ p.jsx(Pd, { as: RE, allowPinchZoom: !0, children: /* @__PURE__ */ p.jsx(
          gd,
          {
            asChild: !0,
            trapped: h.open,
            onMountAutoFocus: ($) => {
              $.preventDefault();
            },
            onUnmountAutoFocus: X(o, ($) => {
              var ee;
              (ee = h.trigger) == null || ee.focus({ preventScroll: !0 }), $.preventDefault();
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
                  Ie,
                  {
                    role: "listbox",
                    id: h.contentId,
                    "data-state": h.open ? "open" : "closed",
                    dir: h.dir,
                    onContextMenu: ($) => $.preventDefault(),
                    ...m,
                    ...De,
                    onPlaced: () => _(!0),
                    ref: E,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...m.style
                    },
                    onKeyDown: X(m.onKeyDown, ($) => {
                      const ee = $.ctrlKey || $.altKey || $.metaKey;
                      if ($.key === "Tab" && $.preventDefault(), !ee && $.key.length === 1 && W($.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes($.key)) {
                        let Y = M().filter((te) => !te.disabled).map((te) => te.ref.current);
                        if (["ArrowUp", "End"].includes($.key) && (Y = Y.slice().reverse()), ["ArrowUp", "ArrowDown"].includes($.key)) {
                          const te = $.target, J = Y.indexOf(te);
                          Y = Y.slice(J + 1);
                        }
                        setTimeout(() => I(Y)), $.preventDefault();
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
Iv.displayName = AE;
var jE = "SelectItemAlignedPosition", Fv = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = Hn(mr, n), i = Kn(mr, n), [a, l] = x.useState(null), [c, u] = x.useState(null), f = we(t, (E) => u(E)), d = Wa(n), g = x.useRef(!1), w = x.useRef(!0), { viewport: v, selectedItem: S, selectedItemText: m, focusSelectedItem: h } = i, y = x.useCallback(() => {
    if (s.trigger && s.valueNode && a && c && v && S && m) {
      const E = s.trigger.getBoundingClientRect(), C = c.getBoundingClientRect(), R = s.valueNode.getBoundingClientRect(), N = m.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const te = N.left - C.left, J = R.left - te, ke = E.left - J, nt = E.width + ke, dn = Math.max(nt, C.width), Qe = window.innerWidth - kt, Yn = Rp(J, [
          kt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(kt, Qe - dn)
        ]);
        a.style.minWidth = nt + "px", a.style.left = Yn + "px";
      } else {
        const te = C.right - N.right, J = window.innerWidth - R.right - te, ke = window.innerWidth - E.right - J, nt = E.width + ke, dn = Math.max(nt, C.width), Qe = window.innerWidth - kt, Yn = Rp(J, [
          kt,
          Math.max(kt, Qe - dn)
        ]);
        a.style.minWidth = nt + "px", a.style.right = Yn + "px";
      }
      const P = d(), M = window.innerHeight - kt * 2, L = v.scrollHeight, _ = window.getComputedStyle(c), F = parseInt(_.borderTopWidth, 10), I = parseInt(_.paddingTop, 10), B = parseInt(_.borderBottomWidth, 10), D = parseInt(_.paddingBottom, 10), O = F + I + L + D + B, z = Math.min(S.offsetHeight * 5, O), W = window.getComputedStyle(v), se = parseInt(W.paddingTop, 10), Ee = parseInt(W.paddingBottom, 10), ne = E.top + E.height / 2 - kt, Ie = M - ne, De = S.offsetHeight / 2, $ = S.offsetTop + De, ee = F + I + $, Ne = O - ee;
      if (ee <= ne) {
        const te = P.length > 0 && S === P[P.length - 1].ref.current;
        a.style.bottom = "0px";
        const J = c.clientHeight - v.offsetTop - v.offsetHeight, ke = Math.max(
          Ie,
          De + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (te ? Ee : 0) + J + B
        ), nt = ee + ke;
        a.style.height = nt + "px";
      } else {
        const te = P.length > 0 && S === P[0].ref.current;
        a.style.top = "0px";
        const ke = Math.max(
          ne,
          F + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (te ? se : 0) + De
        ) + Ne;
        a.style.height = ke + "px", v.scrollTop = ee - ne + v.offsetTop;
      }
      a.style.margin = `${kt}px 0`, a.style.minHeight = z + "px", a.style.maxHeight = M + "px", r == null || r(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    d,
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
  He(() => y(), [y]);
  const [b, k] = x.useState();
  He(() => {
    c && k(window.getComputedStyle(c).zIndex);
  }, [c]);
  const T = x.useCallback(
    (E) => {
      E && w.current === !0 && (y(), h == null || h(), w.current = !1);
    },
    [y, h]
  );
  return /* @__PURE__ */ p.jsx(
    _E,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: g,
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
            Z.div,
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
Fv.displayName = jE;
var LE = "SelectPopperPosition", Xc = x.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = kt,
    ...s
  } = e, i = Ha(n);
  return /* @__PURE__ */ p.jsx(
    NC,
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
Xc.displayName = LE;
var [_E, Dd] = xo(mr, {}), Qc = "SelectViewport", Vv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = Kn(Qc, n), i = Dd(Qc, n), a = we(t, s.onViewportChange), l = x.useRef(0);
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
          onScroll: X(o.onScroll, (c) => {
            const u = c.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: d } = i;
            if (d != null && d.current && f) {
              const g = Math.abs(l.current - u.scrollTop);
              if (g > 0) {
                const w = window.innerHeight - kt * 2, v = parseFloat(f.style.minHeight), S = parseFloat(f.style.height), m = Math.max(v, S);
                if (m < w) {
                  const h = m + g, y = Math.min(w, h), b = h - y;
                  f.style.height = y + "px", f.style.bottom === "0px" && (u.scrollTop = b > 0 ? b : 0, f.style.justifyContent = "flex-end");
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
Vv.displayName = Qc;
var zv = "SelectGroup", [OE, IE] = xo(zv), FE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = jn();
    return /* @__PURE__ */ p.jsx(OE, { scope: n, id: o, children: /* @__PURE__ */ p.jsx(Z.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
FE.displayName = zv;
var Bv = "SelectLabel", VE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = IE(Bv, n);
    return /* @__PURE__ */ p.jsx(Z.div, { id: o.id, ...r, ref: t });
  }
);
VE.displayName = Bv;
var pa = "SelectItem", [zE, $v] = xo(pa), Uv = x.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...i
    } = e, a = Hn(pa, n), l = Kn(pa, n), c = a.value === r, [u, f] = x.useState(s ?? ""), [d, g] = x.useState(!1), w = we(
      t,
      (h) => {
        var y;
        return (y = l.itemRefCallback) == null ? void 0 : y.call(l, h, r, o);
      }
    ), v = jn(), S = x.useRef("touch"), m = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ p.jsx(
      zE,
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
          Ua.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: u,
            children: /* @__PURE__ */ p.jsx(
              Z.div,
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
                onFocus: X(i.onFocus, () => g(!0)),
                onBlur: X(i.onBlur, () => g(!1)),
                onClick: X(i.onClick, () => {
                  S.current !== "mouse" && m();
                }),
                onPointerUp: X(i.onPointerUp, () => {
                  S.current === "mouse" && m();
                }),
                onPointerDown: X(i.onPointerDown, (h) => {
                  S.current = h.pointerType;
                }),
                onPointerMove: X(i.onPointerMove, (h) => {
                  var y;
                  S.current = h.pointerType, o ? (y = l.onItemLeave) == null || y.call(l) : S.current === "mouse" && h.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: X(i.onPointerLeave, (h) => {
                  var y;
                  h.currentTarget === document.activeElement && ((y = l.onItemLeave) == null || y.call(l));
                }),
                onKeyDown: X(i.onKeyDown, (h) => {
                  var b;
                  ((b = l.searchRef) == null ? void 0 : b.current) !== "" && h.key === " " || (CE.includes(h.key) && m(), h.key === " " && h.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Uv.displayName = pa;
var Io = "SelectItemText", Wv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, i = Hn(Io, n), a = Kn(Io, n), l = $v(Io, n), c = DE(Io, n), [u, f] = x.useState(null), d = we(
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
    ), { onNativeOptionAdd: v, onNativeOptionRemove: S } = c;
    return He(() => (v(w), () => S(w)), [v, S, w]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(Z.span, { id: l.textId, ...s, ref: d }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? ho.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
Wv.displayName = Io;
var Hv = "SelectItemIndicator", Kv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return $v(Hv, n).isSelected ? /* @__PURE__ */ p.jsx(Z.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Kv.displayName = Hv;
var qc = "SelectScrollUpButton", Gv = x.forwardRef((e, t) => {
  const n = Kn(qc, e.__scopeSelect), r = Dd(qc, e.__scopeSelect), [o, s] = x.useState(!1), i = we(t, r.onScrollButtonChange);
  return He(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollTop > 0;
        s(c);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    Xv,
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
Gv.displayName = qc;
var Zc = "SelectScrollDownButton", Yv = x.forwardRef((e, t) => {
  const n = Kn(Zc, e.__scopeSelect), r = Dd(Zc, e.__scopeSelect), [o, s] = x.useState(!1), i = we(t, r.onScrollButtonChange);
  return He(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollHeight - l.clientHeight, u = Math.ceil(l.scrollTop) < c;
        s(u);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    Xv,
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
Yv.displayName = Zc;
var Xv = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = Kn("SelectScrollButton", n), i = x.useRef(null), a = Wa(n), l = x.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return x.useEffect(() => () => l(), [l]), He(() => {
    var u;
    const c = a().find((f) => f.ref.current === document.activeElement);
    (u = c == null ? void 0 : c.ref.current) == null || u.scrollIntoView({ block: "nearest" });
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
        var c;
        (c = s.onItemLeave) == null || c.call(s), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: X(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), BE = "SelectSeparator", $E = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ p.jsx(Z.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
$E.displayName = BE;
var Jc = "SelectArrow", UE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ha(n), s = Hn(Jc, n), i = Kn(Jc, n);
    return s.open && i.position === "popper" ? /* @__PURE__ */ p.jsx(MC, { ...o, ...r, ref: t }) : null;
  }
);
UE.displayName = Jc;
var WE = "SelectBubbleInput", Qv = x.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = x.useRef(null), s = we(r, o), i = _C(t);
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
      Z.select,
      {
        ...n,
        style: { ...vv, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
Qv.displayName = WE;
function qv(e) {
  return e === "" || e === void 0;
}
function Zv(e) {
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
function Jv(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = HE(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const l = i.find(
    (c) => c.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function HE(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var KE = Dv, GE = Mv, YE = Rv, XE = jv, QE = Lv, qE = _v, ZE = Vv, JE = Uv, eT = Wv, tT = Kv, nT = Gv, rT = Yv;
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oT = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), e0 = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var sT = {
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
const iT = x.forwardRef(
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
      ...sT,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: e0("lucide", o),
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
const Re = (e, t) => {
  const n = x.forwardRef(
    ({ className: r, ...o }, s) => x.createElement(iT, {
      ref: s,
      iconNode: t,
      className: e0(`lucide-${oT(e)}`, r),
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
const t0 = Re("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n0 = Re("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ka = Re("Building2", [
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
const aT = Re("Building", [
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
const Ss = Re("CalendarDays", [
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
const Li = Re("Calendar", [
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
const lT = Re("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nd = Re("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r0 = Re("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o0 = Re("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s0 = Re("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const so = Re("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cT = Re("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uT = Re("ExternalLink", [
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
const nh = Re("List", [
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
const _i = Re("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = Re("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dT = Re("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function ci({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(KE, { "data-slot": "select", ...e });
}
function rh({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(YE, { "data-slot": "select-value", ...e });
}
function ui({
  className: e,
  size: t = "default",
  children: n,
  ...r
}) {
  return /* @__PURE__ */ p.jsxs(
    GE,
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
        /* @__PURE__ */ p.jsx(XE, { asChild: !0, children: /* @__PURE__ */ p.jsx(Nd, { className: "size-4 opacity-50" }) })
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
  return /* @__PURE__ */ p.jsx(QE, { children: /* @__PURE__ */ p.jsxs(
    qE,
    {
      "data-slot": "select-content",
      className: xe(
        "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-700 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-[9999] max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      ...r,
      children: [
        /* @__PURE__ */ p.jsx(fT, {}),
        /* @__PURE__ */ p.jsx(
          ZE,
          {
            className: xe(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ p.jsx(pT, {})
      ]
    }
  ) });
}
function gn({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ p.jsxs(
    JE,
    {
      "data-slot": "select-item",
      className: xe(
        "focus:bg-gray-100 dark:focus:bg-gray-700 focus:text-gray-900 dark:focus:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ p.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ p.jsx(tT, { children: /* @__PURE__ */ p.jsx(lT, { className: "size-4" }) }) }),
        /* @__PURE__ */ p.jsx(eT, { children: t })
      ]
    }
  );
}
function fT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    nT,
    {
      "data-slot": "select-scroll-up-button",
      className: xe(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p.jsx(s0, { className: "size-4" })
    }
  );
}
function pT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    rT,
    {
      "data-slot": "select-scroll-down-button",
      className: xe(
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
      className: xe(
        "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
eu.displayName = "Input";
var Il = "rovingFocusGroup.onEntryFocus", hT = { bubbles: !1, cancelable: !0 }, Ls = "RovingFocusGroup", [tu, i0, mT] = Hy(Ls), [gT, a0] = go(
  Ls,
  [mT]
), [yT, vT] = gT(Ls), l0 = x.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(tu.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(tu.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(xT, { ...e, ref: t }) }) })
);
l0.displayName = Ls;
var xT = x.forwardRef((e, t) => {
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
  } = e, d = x.useRef(null), g = we(t, d), w = hd(s), [v, S] = ws({
    prop: i,
    defaultProp: a ?? null,
    onChange: l,
    caller: Ls
  }), [m, h] = x.useState(!1), y = On(c), b = i0(n), k = x.useRef(!1), [T, E] = x.useState(0);
  return x.useEffect(() => {
    const C = d.current;
    if (C)
      return C.addEventListener(Il, y), () => C.removeEventListener(Il, y);
  }, [y]), /* @__PURE__ */ p.jsx(
    yT,
    {
      scope: n,
      orientation: r,
      dir: w,
      loop: o,
      currentTabStopId: v,
      onItemFocus: x.useCallback(
        (C) => S(C),
        [S]
      ),
      onItemShiftTab: x.useCallback(() => h(!0), []),
      onFocusableItemAdd: x.useCallback(
        () => E((C) => C + 1),
        []
      ),
      onFocusableItemRemove: x.useCallback(
        () => E((C) => C - 1),
        []
      ),
      children: /* @__PURE__ */ p.jsx(
        Z.div,
        {
          tabIndex: m || T === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: X(e.onMouseDown, () => {
            k.current = !0;
          }),
          onFocus: X(e.onFocus, (C) => {
            const R = !k.current;
            if (C.target === C.currentTarget && R && !m) {
              const N = new CustomEvent(Il, hT);
              if (C.currentTarget.dispatchEvent(N), !N.defaultPrevented) {
                const P = b().filter((I) => I.focusable), M = P.find((I) => I.active), L = P.find((I) => I.id === v), F = [M, L, ...P].filter(
                  Boolean
                ).map((I) => I.ref.current);
                d0(F, u);
              }
            }
            k.current = !1;
          }),
          onBlur: X(e.onBlur, () => h(!1))
        }
      )
    }
  );
}), c0 = "RovingFocusGroupItem", u0 = x.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: i,
      ...a
    } = e, l = jn(), c = s || l, u = vT(c0, n), f = u.currentTabStopId === c, d = i0(n), { onFocusableItemAdd: g, onFocusableItemRemove: w, currentTabStopId: v } = u;
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
          Z.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": u.orientation,
            ...a,
            ref: t,
            onMouseDown: X(e.onMouseDown, (S) => {
              r ? u.onItemFocus(c) : S.preventDefault();
            }),
            onFocus: X(e.onFocus, () => u.onItemFocus(c)),
            onKeyDown: X(e.onKeyDown, (S) => {
              if (S.key === "Tab" && S.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (S.target !== S.currentTarget) return;
              const m = bT(S, u.orientation, u.dir);
              if (m !== void 0) {
                if (S.metaKey || S.ctrlKey || S.altKey || S.shiftKey) return;
                S.preventDefault();
                let y = d().filter((b) => b.focusable).map((b) => b.ref.current);
                if (m === "last") y.reverse();
                else if (m === "prev" || m === "next") {
                  m === "prev" && y.reverse();
                  const b = y.indexOf(S.currentTarget);
                  y = u.loop ? kT(y, b + 1) : y.slice(b + 1);
                }
                setTimeout(() => d0(y));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: f, hasTabStop: v != null }) : i
          }
        )
      }
    );
  }
);
u0.displayName = c0;
var wT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ST(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function bT(e, t, n) {
  const r = ST(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return wT[r];
}
function d0(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function kT(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var CT = l0, ET = u0;
function TT(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var _s = (e) => {
  const { present: t, children: n } = e, r = PT(t), o = typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n), s = we(r.ref, DT(o));
  return typeof n == "function" || r.isPresent ? x.cloneElement(o, { ref: s }) : null;
};
_s.displayName = "Presence";
function PT(e) {
  const [t, n] = x.useState(), r = x.useRef(null), o = x.useRef(e), s = x.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = TT(i, {
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
  }, [a]), He(() => {
    const c = r.current, u = o.current;
    if (u !== e) {
      const d = s.current, g = fi(c);
      e ? l("MOUNT") : g === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(u && d !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), He(() => {
    if (t) {
      let c;
      const u = t.ownerDocument.defaultView ?? window, f = (g) => {
        const v = fi(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && v && (l("ANIMATION_END"), !o.current)) {
          const S = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S);
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
function DT(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ga = "Tabs", [NT, BM] = go(Ga, [
  a0
]), f0 = a0(), [MT, Md] = NT(Ga), p0 = x.forwardRef(
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
      MT,
      {
        scope: n,
        baseId: jn(),
        value: f,
        onValueChange: d,
        orientation: i,
        dir: u,
        activationMode: l,
        children: /* @__PURE__ */ p.jsx(
          Z.div,
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
p0.displayName = Ga;
var h0 = "TabsList", m0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = Md(h0, n), i = f0(n);
    return /* @__PURE__ */ p.jsx(
      CT,
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
m0.displayName = h0;
var g0 = "TabsTrigger", y0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, i = Md(g0, n), a = f0(n), l = w0(i.baseId, r), c = S0(i.baseId, r), u = r === i.value;
    return /* @__PURE__ */ p.jsx(
      ET,
      {
        asChild: !0,
        ...a,
        focusable: !o,
        active: u,
        children: /* @__PURE__ */ p.jsx(
          Z.button,
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
y0.displayName = g0;
var v0 = "TabsContent", x0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...i } = e, a = Md(v0, n), l = w0(a.baseId, r), c = S0(a.baseId, r), u = r === a.value, f = x.useRef(u);
    return x.useEffect(() => {
      const d = requestAnimationFrame(() => f.current = !1);
      return () => cancelAnimationFrame(d);
    }, []), /* @__PURE__ */ p.jsx(_s, { present: o || u, children: ({ present: d }) => /* @__PURE__ */ p.jsx(
      Z.div,
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
x0.displayName = v0;
function w0(e, t) {
  return `${e}-trigger-${t}`;
}
function S0(e, t) {
  return `${e}-content-${t}`;
}
var AT = p0, RT = m0, jT = y0, LT = x0;
function _T({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    AT,
    {
      "data-slot": "tabs",
      className: xe("flex flex-col gap-2", e),
      ...t
    }
  );
}
function oh({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    RT,
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
    jT,
    {
      "data-slot": "tabs-trigger",
      className: xe(
        "data-[state=active]:bg-background cursor-pointer dark:data-[state=active]:text-foreground dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus:outline-none",
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
    LT,
    {
      "data-slot": "tabs-content",
      className: xe("flex-1 outline-none", e),
      ...t
    }
  );
}
const OT = (e, t) => {
  const n = [];
  if (!e || !t) {
    const i = /* @__PURE__ */ new Date(), a = i.getFullYear(), l = i.getMonth();
    return sh(a, l);
  }
  const r = new Date(e), o = new Date(t);
  let s = new Date(r.getFullYear(), r.getMonth(), 1);
  for (; s <= o; ) {
    const i = sh(s.getFullYear(), s.getMonth());
    n.push(...i), s.setMonth(s.getMonth() + 1);
  }
  return n;
}, sh = (e, t) => {
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
}, IT = (e) => {
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
function FT(e = {}) {
  const [t, n] = x.useState(!0);
  x.useEffect(() => {
    const i = setTimeout(() => {
      n(!1);
    }, 500);
    return () => clearTimeout(i);
  }, [e.start_date, e.end_date]);
  const r = K.useMemo(() => OT(e.start_date, e.end_date), [e.start_date, e.end_date]), o = K.useMemo(() => IT(r), [r]), s = K.useMemo(() => {
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
class VT {
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
const Cr = new VT(), zT = [
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
], ih = (e) => {
  if (!e || typeof e != "object")
    return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    zT.includes(r) && (t[n] = r);
  }), t;
};
function b0(e = {}) {
  const [t, n] = x.useState([]), [r, o] = x.useState({}), [s, i] = x.useState({}), [a, l] = x.useState(!0), [c, u] = x.useState(!1), [f, d] = x.useState(null), [g, w] = x.useState(0), [v, S] = x.useState(0), [m, h] = x.useState(e), [y, b] = x.useState(), k = x.useRef(""), T = x.useRef(!0);
  x.useEffect(() => {
    const P = JSON.stringify(e);
    if (T.current) {
      T.current = !1, k.current = P, h(e);
      return;
    }
    k.current !== P && (k.current = P, h(e));
  }, [e]);
  const E = x.useCallback(async () => {
    var P;
    try {
      l(!0), d(null);
      const M = await Cr.fetchEvents(m);
      if ((P = M.performance) != null && P.server_processed) {
        const L = M.events.map((_) => ({
          ..._,
          startDate: new Date(_.startDate),
          endDate: new Date(_.endDate)
        }));
        n(L), o(M.eventMetadata || {}), i(ih(M.categoryMappings)), w(M.total), S(M.pages), b(M.pagination);
      } else {
        const L = [], _ = {};
        M.events.forEach((F) => {
          const I = Cr.transformWordPressEventToEvent(F), B = Cr.transformWordPressEventToMetadata(F);
          L.push(I), _[I.id] = B;
        }), n(L), o(_), w(M.total), S(M.pages), b(M.pagination);
      }
    } catch (M) {
      console.error("Error fetching events:", M), n([]), o({}), i({}), w(0), S(0), d(M instanceof Error ? M.message : "Failed to load events");
    } finally {
      l(!1);
    }
  }, [JSON.stringify(m)]);
  x.useEffect(() => {
    E();
  }, [E]);
  const C = x.useCallback(() => {
    E();
  }, [E]), R = x.useCallback(async () => {
    var P;
    if (!(!(y != null && y.hasMore) || c))
      try {
        u(!0), d(null);
        const M = {
          ...m,
          page: y.nextPage || (m.page || 1) + 1
        }, L = await Cr.fetchEvents(M);
        if ((P = L.performance) != null && P.server_processed) {
          const _ = L.events.map((F) => ({
            ...F,
            startDate: new Date(F.startDate),
            endDate: new Date(F.endDate)
          }));
          n((F) => [...F, ..._]), o((F) => ({ ...F, ...L.eventMetadata || {} })), i((F) => ({
            ...F,
            ...ih(L.categoryMappings)
          })), b(L.pagination);
        } else {
          const _ = [], F = {};
          L.events.forEach((I) => {
            const B = Cr.transformWordPressEventToEvent(I), D = Cr.transformWordPressEventToMetadata(I);
            _.push(B), F[B.id] = D;
          }), n((I) => [...I, ..._]), o((I) => ({ ...I, ...F })), b(L.pagination);
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
    refetch: C,
    setFilters: N,
    hasMore: (y == null ? void 0 : y.hasMore) || !1,
    loadMore: R,
    loadingMore: c,
    pagination: y,
    categoryMappings: s
  };
}
const BT = {
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
function $T() {
  const [e, t] = x.useState([]), [n, r] = x.useState(!0), [o, s] = x.useState(null);
  return x.useEffect(() => {
    (async () => {
      try {
        r(!0);
        const a = await BT.getAll();
        t(a), s(null);
      } catch {
        s("Failed to load organizations");
      } finally {
        r(!1);
      }
    })();
  }, []), { organizations: e, loading: n, error: o };
}
function k0() {
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
function UT() {
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
var Ya = "Dialog", [C0, $M] = go(Ya), [WT, jt] = C0(Ya), E0 = (e) => {
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
    WT,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: jn(),
      titleId: jn(),
      descriptionId: jn(),
      open: c,
      onOpenChange: u,
      onOpenToggle: x.useCallback(() => u((f) => !f), [u]),
      modal: i,
      children: n
    }
  );
};
E0.displayName = Ya;
var T0 = "DialogTrigger", HT = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = jt(T0, n), s = we(t, o.triggerRef);
    return /* @__PURE__ */ p.jsx(
      Z.button,
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
HT.displayName = T0;
var Ad = "DialogPortal", [KT, P0] = C0(Ad, {
  forceMount: void 0
}), D0 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = jt(Ad, t);
  return /* @__PURE__ */ p.jsx(KT, { scope: t, forceMount: n, children: x.Children.map(r, (i) => /* @__PURE__ */ p.jsx(_s, { present: n || s.open, children: /* @__PURE__ */ p.jsx(Td, { asChild: !0, container: o, children: i }) })) });
};
D0.displayName = Ad;
var ha = "DialogOverlay", N0 = x.forwardRef(
  (e, t) => {
    const n = P0(ha, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = jt(ha, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ p.jsx(_s, { present: r || s.open, children: /* @__PURE__ */ p.jsx(YT, { ...o, ref: t }) }) : null;
  }
);
N0.displayName = ha;
var GT = /* @__PURE__ */ ys("DialogOverlay.RemoveScroll"), YT = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = jt(ha, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p.jsx(Pd, { as: GT, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ p.jsx(
        Z.div,
        {
          "data-state": jd(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), gr = "DialogContent", M0 = x.forwardRef(
  (e, t) => {
    const n = P0(gr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = jt(gr, e.__scopeDialog);
    return /* @__PURE__ */ p.jsx(_s, { present: r || s.open, children: s.modal ? /* @__PURE__ */ p.jsx(XT, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(QT, { ...o, ref: t }) });
  }
);
M0.displayName = gr;
var XT = x.forwardRef(
  (e, t) => {
    const n = jt(gr, e.__scopeDialog), r = x.useRef(null), o = we(t, n.contentRef, r);
    return x.useEffect(() => {
      const s = r.current;
      if (s) return wv(s);
    }, []), /* @__PURE__ */ p.jsx(
      A0,
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
), QT = x.forwardRef(
  (e, t) => {
    const n = jt(gr, e.__scopeDialog), r = x.useRef(!1), o = x.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      A0,
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
), A0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = jt(gr, n), l = x.useRef(null), c = we(t, l);
    return Yy(), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
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
        /* @__PURE__ */ p.jsx(qT, { titleId: a.titleId }),
        /* @__PURE__ */ p.jsx(JT, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), Rd = "DialogTitle", R0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = jt(Rd, n);
    return /* @__PURE__ */ p.jsx(Z.h2, { id: o.titleId, ...r, ref: t });
  }
);
R0.displayName = Rd;
var j0 = "DialogDescription", L0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = jt(j0, n);
    return /* @__PURE__ */ p.jsx(Z.p, { id: o.descriptionId, ...r, ref: t });
  }
);
L0.displayName = j0;
var _0 = "DialogClose", O0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = jt(_0, n);
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
O0.displayName = _0;
function jd(e) {
  return e ? "open" : "closed";
}
var I0 = "DialogTitleWarning", [UM, F0] = _b(I0, {
  contentName: gr,
  titleName: Rd,
  docsSlug: "dialog"
}), qT = ({ titleId: e }) => {
  const t = F0(I0), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return x.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, ZT = "DialogDescriptionWarning", JT = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${F0(ZT).contentName}}.`;
  return x.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, eP = E0, tP = D0, V0 = N0, z0 = M0, B0 = R0, $0 = L0, nP = O0;
const rP = eP, oP = tP, U0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  V0,
  {
    ref: n,
    className: xe(
      "fixed inset-0 z-[99999] bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
U0.displayName = V0.displayName;
const W0 = x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.jsxs(oP, { children: [
  /* @__PURE__ */ p.jsx(U0, {}),
  /* @__PURE__ */ p.jsxs(
    z0,
    {
      ref: r,
      className: xe(
        "fixed left-[50%] top-[50%] z-[99999] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ p.jsxs(nP, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-all duration-200 hover:opacity-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 p-1", children: [
          /* @__PURE__ */ p.jsx(dT, { className: "h-4 w-4" }),
          /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
W0.displayName = z0.displayName;
const H0 = ({
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
H0.displayName = "DialogHeader";
const K0 = ({
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
K0.displayName = "DialogFooter";
const G0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  B0,
  {
    ref: n,
    className: xe(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
G0.displayName = B0.displayName;
const Y0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  $0,
  {
    ref: n,
    className: xe("text-sm text-muted-foreground", e),
    ...t
  }
));
Y0.displayName = $0.displayName;
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
function X0({ event: e, eventMetadata: t, open: n, onOpenChange: r }) {
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
          `ORGANIZER;CN=${(i == null ? void 0 : i.organization) || "Over the Edge"}:MAILTO:ote@unbc.ca`,
          "STATUS:CONFIRMED",
          "END:VEVENT",
          "END:VCALENDAR"
        ].filter((S) => S).join(`
`);
        return `data:text/calendar;charset=utf8,${encodeURIComponent(v)}`;
    }
  }, c = {
    clubs: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    unbc: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    organizations: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    sports: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
  };
  return /* @__PURE__ */ p.jsx(rP, { open: n, onOpenChange: r, children: /* @__PURE__ */ p.jsxs(W0, { className: "max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 sm:w-full p-4 sm:p-6", children: [
    /* @__PURE__ */ p.jsxs(H0, { children: [
      /* @__PURE__ */ p.jsx(G0, { className: "text-xl text-gray-900 dark:text-gray-100", children: e.title }),
      e.description && /* @__PURE__ */ p.jsxs("div", { className: "mt-2", children: [
        /* @__PURE__ */ p.jsx(Y0, { className: `text-gray-600 dark:text-gray-400 leading-relaxed break-words ${o ? "max-h-[40vh] overflow-y-auto pr-2" : ""}`, children: o ? e.description : a(e.description) }),
        e.description.length > 180 && /* @__PURE__ */ p.jsx(
          "button",
          {
            onClick: () => s(!o),
            className: "inline-flex items-center gap-1 mt-3 px-3 py-2 text-sm text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100 hover:bg-blue-50 dark:hover:bg-blue-900/20 active:bg-blue-100 dark:active:bg-blue-900/30 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
            children: o ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
              "Show less",
              /* @__PURE__ */ p.jsx(s0, { className: "h-4 w-4" })
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
          /* @__PURE__ */ p.jsx(js, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: i.location })
        ] }),
        i.organization && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(Ka, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: i.organization })
        ] }),
        i.cost && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(cT, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: i.cost })
        ] }),
        i.website && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(uT, { className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" }),
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
    /* @__PURE__ */ p.jsxs(K0, { className: "flex-col sm:flex-col gap-2", children: [
      /* @__PURE__ */ p.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400 mb-2", children: "Add to your calendar:" }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex gap-2 w-full", children: [
        /* @__PURE__ */ p.jsxs(
          Jt,
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
          Jt,
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
          Jt,
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
class sP extends x.Component {
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
function iP({ children: e, isPresent: t }) {
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
  }, [t]), p.jsx(sP, { isPresent: t, childRef: r, sizeRef: o, children: x.cloneElement(e, { ref: r }) });
}
const aP = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: i }) => {
  const a = _d(lP), l = x.useId(), c = x.useCallback((f) => {
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
  }, [n]), i === "popLayout" && (e = p.jsx(iP, { isPresent: n, children: e })), p.jsx(Xa.Provider, { value: u, children: e });
};
function lP() {
  return /* @__PURE__ */ new Map();
}
function Q0(e = !0) {
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
function ah(e) {
  const t = [];
  return x.Children.forEach(e, (n) => {
    x.isValidElement(n) && t.push(n);
  }), t;
}
const Id = typeof window < "u", q0 = Id ? x.useLayoutEffect : x.useEffect, lh = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: o = !0, mode: s = "sync", propagate: i = !1 }) => {
  const [a, l] = Q0(i), c = x.useMemo(() => ah(e), [e]), u = i && !a ? [] : c.map(hi), f = x.useRef(!0), d = x.useRef(c), g = _d(() => /* @__PURE__ */ new Map()), [w, v] = x.useState(c), [S, m] = x.useState(c);
  q0(() => {
    f.current = !1, d.current = c;
    for (let b = 0; b < S.length; b++) {
      const k = hi(S[b]);
      u.includes(k) ? g.delete(k) : g.get(k) !== !0 && g.set(k, !1);
    }
  }, [S, u.length, u.join("-")]);
  const h = [];
  if (c !== w) {
    let b = [...c];
    for (let k = 0; k < S.length; k++) {
      const T = S[k], E = hi(T);
      u.includes(E) || (b.splice(k, 0, T), h.push(T));
    }
    s === "wait" && h.length && (b = h), m(ah(b)), v(c);
    return;
  }
  const { forceRender: y } = x.useContext(Ld);
  return p.jsx(p.Fragment, { children: S.map((b) => {
    const k = hi(b), T = i && !a ? !1 : c === S || u.includes(k), E = () => {
      if (g.has(k))
        g.set(k, !0);
      else
        return;
      let C = !0;
      g.forEach((R) => {
        R || (C = !1);
      }), C && (y == null || y(), m(d.current), i && (l == null || l()), r && r());
    };
    return p.jsx(aP, { isPresent: T, initial: !f.current || n ? void 0 : !1, custom: T ? void 0 : t, presenceAffectsLayout: o, mode: s, onExitComplete: T ? void 0 : E, children: b }, k);
  }) });
}, lt = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let Z0 = lt;
// @__NO_SIDE_EFFECTS__
function Fd(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const ao = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, en = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, tn = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, cP = {
  useManualTiming: !1
};
function uP(e) {
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
], dP = 40;
function J0(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = () => n = !0, i = mi.reduce((m, h) => (m[h] = uP(s), m), {}), { read: a, resolveKeyframes: l, update: c, preRender: u, render: f, postRender: d } = i, g = () => {
    const m = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(m - o.timestamp, dP), 1), o.timestamp = m, o.isProcessing = !0, a.process(o), l.process(o), c.process(o), u.process(o), f.process(o), d.process(o), o.isProcessing = !1, n && t && (r = !1, e(g));
  }, w = () => {
    n = !0, r = !0, o.isProcessing || e(g);
  };
  return { schedule: mi.reduce((m, h) => {
    const y = i[h];
    return m[h] = (b, k = !1, T = !1) => (n || w(), y.schedule(b, k, T)), m;
  }, {}), cancel: (m) => {
    for (let h = 0; h < mi.length; h++)
      i[mi[h]].cancel(m);
  }, state: o, steps: i };
}
const { schedule: ue, cancel: Vn, state: Le, steps: Fl } = J0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : lt, !0), ex = x.createContext({ strict: !1 }), ch = {
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
for (const e in ch)
  lo[e] = {
    isEnabled: (t) => ch[e].some((n) => !!t[n])
  };
function fP(e) {
  for (const t in e)
    lo[t] = {
      ...lo[t],
      ...e[t]
    };
}
const pP = /* @__PURE__ */ new Set([
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
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || pP.has(e);
}
let tx = (e) => !ma(e);
function hP(e) {
  e && (tx = (t) => t.startsWith("on") ? !ma(t) : e(t));
}
try {
  hP(require("@emotion/is-prop-valid").default);
} catch {
}
function mP(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (tx(o) || n === !0 && ma(o) || !t && !ma(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function gP(e) {
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
function bs(e) {
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
  return qa(e.animate) || zd.some((t) => bs(e[t]));
}
function nx(e) {
  return !!(Za(e) || e.variants);
}
function yP(e, t) {
  if (Za(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || bs(n) ? n : void 0,
      animate: bs(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function vP(e) {
  const { initial: t, animate: n } = yP(e, x.useContext(Qa));
  return x.useMemo(() => ({ initial: t, animate: n }), [uh(t), uh(n)]);
}
function uh(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const xP = Symbol.for("motionComponentSymbol");
function Ir(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function wP(e, t, n) {
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
const Bd = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), SP = "framerAppearId", rx = "data-" + Bd(SP), { schedule: $d } = J0(queueMicrotask, !1), ox = x.createContext({});
function bP(e, t, n, r, o) {
  var s, i;
  const { visualElement: a } = x.useContext(Qa), l = x.useContext(ex), c = x.useContext(Xa), u = x.useContext(Od).reducedMotion, f = x.useRef(null);
  r = r || l.renderer, !f.current && r && (f.current = r(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: u
  }));
  const d = f.current, g = x.useContext(ox);
  d && !d.projection && o && (d.type === "html" || d.type === "svg") && kP(f.current, n, o, g);
  const w = x.useRef(!1);
  x.useInsertionEffect(() => {
    d && w.current && d.update(n, c);
  });
  const v = n[rx], S = x.useRef(!!v && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, v)) && ((i = window.MotionHasOptimisedAnimation) === null || i === void 0 ? void 0 : i.call(window, v)));
  return q0(() => {
    d && (w.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), $d.render(d.render), S.current && d.animationState && d.animationState.animateChanges());
  }), x.useEffect(() => {
    d && (!S.current && d.animationState && d.animationState.animateChanges(), S.current && (queueMicrotask(() => {
      var m;
      (m = window.MotionHandoffMarkAsComplete) === null || m === void 0 || m.call(window, v);
    }), S.current = !1));
  }), d;
}
function kP(e, t, n, r) {
  const { layoutId: o, layout: s, drag: i, dragConstraints: a, layoutScroll: l, layoutRoot: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : sx(e.parent)), e.projection.setOptions({
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
function sx(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : sx(e.parent);
}
function CP({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  var s, i;
  e && fP(e);
  function a(c, u) {
    let f;
    const d = {
      ...x.useContext(Od),
      ...c,
      layoutId: EP(c)
    }, { isStatic: g } = d, w = vP(c), v = r(c, g);
    if (!g && Id) {
      TP();
      const S = PP(d);
      f = S.MeasureLayout, w.visualElement = bP(o, v, d, t, S.ProjectionNode);
    }
    return p.jsxs(Qa.Provider, { value: w, children: [f && w.visualElement ? p.jsx(f, { visualElement: w.visualElement, ...d }) : null, n(o, c, wP(v, w.visualElement, u), v, g, w.visualElement)] });
  }
  a.displayName = `motion.${typeof o == "string" ? o : `create(${(i = (s = o.displayName) !== null && s !== void 0 ? s : o.name) !== null && i !== void 0 ? i : ""})`}`;
  const l = x.forwardRef(a);
  return l[xP] = o, l;
}
function EP({ layoutId: e }) {
  const t = x.useContext(Ld).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function TP(e, t) {
  x.useContext(ex).strict;
}
function PP(e) {
  const { drag: t, layout: n } = lo;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const DP = [
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
      !!(DP.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function dh(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Wd(e, t, n, r) {
  if (typeof t == "function") {
    const [o, s] = dh(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, s] = dh(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  return t;
}
const nu = (e) => Array.isArray(e), NP = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), MP = (e) => nu(e) ? e[e.length - 1] || 0 : e, Ue = (e) => !!(e && e.getVelocity);
function Oi(e) {
  const t = Ue(e) ? e.get() : e;
  return NP(t) ? t.toValue() : t;
}
function AP({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, o, s) {
  const i = {
    latestValues: RP(r, o, s, e),
    renderState: t()
  };
  return n && (i.onMount = (a) => n({ props: r, current: a, ...i }), i.onUpdate = (a) => n(a)), i;
}
const ix = (e) => (t, n) => {
  const r = x.useContext(Qa), o = x.useContext(Xa), s = () => AP(e, t, r, o);
  return n ? s() : _d(s);
};
function RP(e, t, n, r) {
  const o = {}, s = r(e, {});
  for (const d in s)
    o[d] = Oi(s[d]);
  let { initial: i, animate: a } = e;
  const l = Za(e), c = nx(e);
  t && c && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || i === !1;
  const f = u ? a : i;
  if (f && typeof f != "boolean" && !qa(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let g = 0; g < d.length; g++) {
      const w = Wd(e, d[g]);
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
], xr = new Set(wo), ax = (e) => (t) => typeof t == "string" && t.startsWith(e), lx = /* @__PURE__ */ ax("--"), jP = /* @__PURE__ */ ax("var(--"), Hd = (e) => jP(e) ? LP.test(e.split("/*")[0].trim()) : !1, LP = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, cx = (e, t) => t && typeof e == "number" ? t.transform(e) : e, cn = (e, t, n) => n > t ? t : n < e ? e : n, So = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, ks = {
  ...So,
  transform: (e) => cn(0, 1, e)
}, gi = {
  ...So,
  default: 1
}, Os = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), vn = /* @__PURE__ */ Os("deg"), $t = /* @__PURE__ */ Os("%"), U = /* @__PURE__ */ Os("px"), _P = /* @__PURE__ */ Os("vh"), OP = /* @__PURE__ */ Os("vw"), fh = {
  ...$t,
  parse: (e) => $t.parse(e) / 100,
  transform: (e) => $t.transform(e * 100)
}, IP = {
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
}, FP = {
  rotate: vn,
  rotateX: vn,
  rotateY: vn,
  rotateZ: vn,
  scale: gi,
  scaleX: gi,
  scaleY: gi,
  scaleZ: gi,
  skew: vn,
  skewX: vn,
  skewY: vn,
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
  originX: fh,
  originY: fh,
  originZ: U
}, ph = {
  ...So,
  transform: Math.round
}, Kd = {
  ...IP,
  ...FP,
  zIndex: ph,
  size: U,
  // SVG
  fillOpacity: ks,
  strokeOpacity: ks,
  numOctaves: ph
}, VP = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, zP = wo.length;
function BP(e, t, n) {
  let r = "", o = !0;
  for (let s = 0; s < zP; s++) {
    const i = wo[s], a = e[i];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (i.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const c = cx(a, Kd[i]);
      if (!l) {
        o = !1;
        const u = VP[i] || i;
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
    if (xr.has(l)) {
      i = !0;
      continue;
    } else if (lx(l)) {
      o[l] = c;
      continue;
    } else {
      const u = cx(c, Kd[l]);
      l.startsWith("origin") ? (a = !0, s[l] = u) : r[l] = u;
    }
  }
  if (t.transform || (i || n ? r.transform = BP(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = s;
    r.transformOrigin = `${l} ${c} ${u}`;
  }
}
const $P = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, UP = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function WP(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const s = o ? $P : UP;
  e[s.offset] = U.transform(-r);
  const i = U.transform(t), a = U.transform(n);
  e[s.array] = `${i} ${a}`;
}
function hh(e, t, n) {
  return typeof e == "string" ? e : U.transform(t + n * e);
}
function HP(e, t, n) {
  const r = hh(t, e.x, e.width), o = hh(n, e.y, e.height);
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
  d.transform && (w && (g.transform = d.transform), delete d.transform), w && (o !== void 0 || s !== void 0 || g.transform) && (g.transformOrigin = HP(w, o !== void 0 ? o : 0.5, s !== void 0 ? s : 0.5)), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && WP(d, i, a, l, !1);
}
const Xd = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), ux = () => ({
  ...Xd(),
  attrs: {}
}), Qd = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function dx(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
const fx = /* @__PURE__ */ new Set([
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
function px(e, t, n, r) {
  dx(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(fx.has(o) ? o : Bd(o), t.attrs[o]);
}
const ga = {};
function KP(e) {
  Object.assign(ga, e);
}
function hx(e, { layout: t, layoutId: n }) {
  return xr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!ga[e] || e === "opacity");
}
function qd(e, t, n) {
  var r;
  const { style: o } = e, s = {};
  for (const i in o)
    (Ue(o[i]) || t.style && Ue(t.style[i]) || hx(i, e) || ((r = n == null ? void 0 : n.getValue(i)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[i] = o[i]);
  return s;
}
function mx(e, t, n) {
  const r = qd(e, t, n);
  for (const o in e)
    if (Ue(e[o]) || Ue(t[o])) {
      const s = wo.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[s] = e[o];
    }
  return r;
}
function GP(e, t) {
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
const mh = ["x", "y", "width", "height", "cx", "cy", "r"], YP = {
  useVisualState: ix({
    scrapeMotionValuesFromProps: mx,
    createRenderState: ux,
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
        for (let a = 0; a < mh.length; a++) {
          const l = mh[a];
          e[l] !== t[l] && (i = !0);
        }
      i && ue.read(() => {
        GP(n, r), ue.render(() => {
          Yd(r, o, Qd(n.tagName), e.transformTemplate), px(n, r);
        });
      });
    }
  })
}, XP = {
  useVisualState: ix({
    scrapeMotionValuesFromProps: qd,
    createRenderState: Xd
  })
};
function gx(e, t, n) {
  for (const r in t)
    !Ue(t[r]) && !hx(r, n) && (e[r] = t[r]);
}
function QP({ transformTemplate: e }, t) {
  return x.useMemo(() => {
    const n = Xd();
    return Gd(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function qP(e, t) {
  const n = e.style || {}, r = {};
  return gx(r, n, e), Object.assign(r, QP(e, t)), r;
}
function ZP(e, t) {
  const n = {}, r = qP(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function JP(e, t, n, r) {
  const o = x.useMemo(() => {
    const s = ux();
    return Yd(s, t, Qd(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    gx(s, e.style, e), o.style = { ...s, ...o.style };
  }
  return o;
}
function eD(e = !1) {
  return (n, r, o, { latestValues: s }, i) => {
    const l = (Ud(n) ? JP : ZP)(r, s, i, n), c = mP(r, typeof n == "string", e), u = n !== x.Fragment ? { ...c, ...l, ref: o } : {}, { children: f } = r, d = x.useMemo(() => Ue(f) ? f.get() : f, [f]);
    return x.createElement(n, {
      ...u,
      children: d
    });
  };
}
function tD(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const i = {
      ...Ud(r) ? YP : XP,
      preloadedFeatures: e,
      useRender: eD(o),
      createVisualElement: t,
      Component: r
    };
    return CP(i);
  };
}
function yx(e, t) {
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
const nD = /* @__PURE__ */ Fd(() => window.ScrollTimeline !== void 0);
class rD {
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
      if (nD() && o.attachTimeline)
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
class oD extends rD {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function Zd(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const ru = 2e4;
function vx(e) {
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
function gh(e, t) {
  e.timeline = t, e.onfinish = null;
}
const ef = (e) => Array.isArray(e) && typeof e[0] == "number", sD = {
  linearEasing: void 0
};
function iD(e, t) {
  const n = /* @__PURE__ */ Fd(e);
  return () => {
    var r;
    return (r = sD[t]) !== null && r !== void 0 ? r : n();
  };
}
const ya = /* @__PURE__ */ iD(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), xx = (e, t, n = 10) => {
  let r = "";
  const o = Math.max(Math.round(t / n), 2);
  for (let s = 0; s < o; s++)
    r += e(/* @__PURE__ */ ao(0, o - 1, s)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function wx(e) {
  return !!(typeof e == "function" && ya() || !e || typeof e == "string" && (e in ou || ya()) || ef(e) || Array.isArray(e) && e.every(wx));
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
function Sx(e, t) {
  if (e)
    return typeof e == "function" && ya() ? xx(e, t) : ef(e) ? Fo(e) : Array.isArray(e) ? e.map((n) => Sx(n, t) || ou.easeOut) : ou[e];
}
const Ct = {
  x: !1,
  y: !1
};
function bx() {
  return Ct.x || Ct.y;
}
function aD(e, t, n) {
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
function kx(e, t) {
  const n = aD(e), r = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, o, () => r.abort()];
}
function yh(e) {
  return (t) => {
    t.pointerType === "touch" || bx() || e(t);
  };
}
function lD(e, t, n = {}) {
  const [r, o, s] = kx(e, n), i = yh((a) => {
    const { target: l } = a, c = t(a);
    if (typeof c != "function" || !l)
      return;
    const u = yh((f) => {
      c(f), l.removeEventListener("pointerleave", u);
    });
    l.addEventListener("pointerleave", u, o);
  });
  return r.forEach((a) => {
    a.addEventListener("pointerenter", i, o);
  }), s;
}
const Cx = (e, t) => t ? e === t ? !0 : Cx(e, t.parentElement) : !1, tf = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, cD = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function uD(e) {
  return cD.has(e.tagName) || e.tabIndex !== -1;
}
const Vo = /* @__PURE__ */ new WeakSet();
function vh(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Vl(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const dD = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = vh(() => {
    if (Vo.has(n))
      return;
    Vl(n, "down");
    const o = vh(() => {
      Vl(n, "up");
    }), s = () => Vl(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function xh(e) {
  return tf(e) && !bx();
}
function fD(e, t, n = {}) {
  const [r, o, s] = kx(e, n), i = (a) => {
    const l = a.currentTarget;
    if (!xh(a) || Vo.has(l))
      return;
    Vo.add(l);
    const c = t(a), u = (g, w) => {
      window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", d), !(!xh(g) || !Vo.has(l)) && (Vo.delete(l), typeof c == "function" && c(g, { success: w }));
    }, f = (g) => {
      u(g, n.useGlobalTarget || Cx(l, g.target));
    }, d = (g) => {
      u(g, !1);
    };
    window.addEventListener("pointerup", f, o), window.addEventListener("pointercancel", d, o);
  };
  return r.forEach((a) => {
    !uD(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", i, o), a.addEventListener("focus", (c) => dD(c, o), o);
  }), s;
}
function pD(e) {
  return e === "x" || e === "y" ? Ct[e] ? null : (Ct[e] = !0, () => {
    Ct[e] = !1;
  }) : Ct.x || Ct.y ? null : (Ct.x = Ct.y = !0, () => {
    Ct.x = Ct.y = !1;
  });
}
const Ex = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...wo
]);
let Ii;
function hD() {
  Ii = void 0;
}
const Ut = {
  now: () => (Ii === void 0 && Ut.set(Le.isProcessing || cP.useManualTiming ? Le.timestamp : performance.now()), Ii),
  set: (e) => {
    Ii = e, queueMicrotask(hD);
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
function Tx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const wh = 30, mD = (e) => !isNaN(parseFloat(e));
class gD {
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
      const s = Ut.now();
      this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Ut.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = mD(this.current));
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
      r(), ue.read(() => {
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
    const t = Ut.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > wh)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, wh);
    return Tx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
  return new gD(e, t);
}
function yD(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Cs(n));
}
function vD(e, t) {
  const n = Ja(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const i in s) {
    const a = MP(s[i]);
    yD(e, i, a);
  }
}
function xD(e) {
  return !!(Ue(e) && e.add);
}
function su(e, t) {
  const n = e.getValue("willChange");
  if (xD(n))
    return n.add(t);
}
function Px(e) {
  return e.props[rx];
}
const Dx = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, wD = 1e-7, SD = 12;
function bD(e, t, n, r, o) {
  let s, i, a = 0;
  do
    i = t + (n - t) / 2, s = Dx(i, r, o) - e, s > 0 ? n = i : t = i;
  while (Math.abs(s) > wD && ++a < SD);
  return i;
}
function Is(e, t, n, r) {
  if (e === t && n === r)
    return lt;
  const o = (s) => bD(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : Dx(o(s), t, r);
}
const Nx = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Mx = (e) => (t) => 1 - e(1 - t), Ax = /* @__PURE__ */ Is(0.33, 1.53, 0.69, 0.99), sf = /* @__PURE__ */ Mx(Ax), Rx = /* @__PURE__ */ Nx(sf), jx = (e) => (e *= 2) < 1 ? 0.5 * sf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), af = (e) => 1 - Math.sin(Math.acos(e)), Lx = Mx(af), _x = Nx(af), Ox = (e) => /^0[^.\s]+$/u.test(e);
function kD(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Ox(e) : !0;
}
const Qo = (e) => Math.round(e * 1e5) / 1e5, lf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function CD(e) {
  return e == null;
}
const ED = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, cf = (e, t) => (n) => !!(typeof n == "string" && ED.test(n) && n.startsWith(e) || t && !CD(n) && Object.prototype.hasOwnProperty.call(n, t)), Ix = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, s, i, a] = r.match(lf);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, TD = (e) => cn(0, 255, e), zl = {
  ...So,
  transform: (e) => Math.round(TD(e))
}, or = {
  test: /* @__PURE__ */ cf("rgb", "red"),
  parse: /* @__PURE__ */ Ix("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + zl.transform(e) + ", " + zl.transform(t) + ", " + zl.transform(n) + ", " + Qo(ks.transform(r)) + ")"
};
function PD(e) {
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
  parse: PD,
  transform: or.transform
}, Fr = {
  test: /* @__PURE__ */ cf("hsl", "hue"),
  parse: /* @__PURE__ */ Ix("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + $t.transform(Qo(t)) + ", " + $t.transform(Qo(n)) + ", " + Qo(ks.transform(r)) + ")"
}, Be = {
  test: (e) => or.test(e) || iu.test(e) || Fr.test(e),
  parse: (e) => or.test(e) ? or.parse(e) : Fr.test(e) ? Fr.parse(e) : iu.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? or.transform(e) : Fr.transform(e)
}, DD = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function ND(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(lf)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(DD)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Fx = "number", Vx = "color", MD = "var", AD = "var(", Sh = "${}", RD = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Es(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let s = 0;
  const a = t.replace(RD, (l) => (Be.test(l) ? (r.color.push(s), o.push(Vx), n.push(Be.parse(l))) : l.startsWith(AD) ? (r.var.push(s), o.push(MD), n.push(l)) : (r.number.push(s), o.push(Fx), n.push(parseFloat(l))), ++s, Sh)).split(Sh);
  return { values: n, split: a, indexes: r, types: o };
}
function zx(e) {
  return Es(e).values;
}
function Bx(e) {
  const { split: t, types: n } = Es(e), r = t.length;
  return (o) => {
    let s = "";
    for (let i = 0; i < r; i++)
      if (s += t[i], o[i] !== void 0) {
        const a = n[i];
        a === Fx ? s += Qo(o[i]) : a === Vx ? s += Be.transform(o[i]) : s += o[i];
      }
    return s;
  };
}
const jD = (e) => typeof e == "number" ? 0 : e;
function LD(e) {
  const t = zx(e);
  return Bx(e)(t.map(jD));
}
const zn = {
  test: ND,
  parse: zx,
  createTransformer: Bx,
  getAnimatableNone: LD
}, _D = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function OD(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(lf) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let s = _D.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + o + ")";
}
const ID = /\b([a-z-]*)\(.*?\)/gu, au = {
  ...zn,
  getAnimatableNone: (e) => {
    const t = e.match(ID);
    return t ? t.map(OD).join(" ") : e;
  }
}, FD = {
  ...Kd,
  // Color props
  color: Be,
  backgroundColor: Be,
  outlineColor: Be,
  fill: Be,
  stroke: Be,
  // Border props
  borderColor: Be,
  borderTopColor: Be,
  borderRightColor: Be,
  borderBottomColor: Be,
  borderLeftColor: Be,
  filter: au,
  WebkitFilter: au
}, uf = (e) => FD[e];
function $x(e, t) {
  let n = uf(e);
  return n !== au && (n = zn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const VD = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function zD(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const s = e[r];
    typeof s == "string" && !VD.has(s) && Es(s).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const s of t)
      e[s] = $x(n, o);
}
const bh = (e) => e === So || e === U, kh = (e, t) => parseFloat(e.split(", ")[t]), Ch = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/u);
  if (o)
    return kh(o[1], t);
  {
    const s = r.match(/^matrix\((.+)\)$/u);
    return s ? kh(s[1], e) : 0;
  }
}, BD = /* @__PURE__ */ new Set(["x", "y", "z"]), $D = wo.filter((e) => !BD.has(e));
function UD(e) {
  const t = [];
  return $D.forEach((n) => {
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
  x: Ch(4, 13),
  y: Ch(5, 14)
};
co.translateX = co.x;
co.translateY = co.y;
const ar = /* @__PURE__ */ new Set();
let lu = !1, cu = !1;
function Ux() {
  if (cu) {
    const e = Array.from(ar).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = UD(r);
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
  cu = !1, lu = !1, ar.forEach((e) => e.complete()), ar.clear();
}
function Wx() {
  ar.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (cu = !0);
  });
}
function WD() {
  Wx(), Ux();
}
class df {
  constructor(t, n, r, o, s, i = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = s, this.isAsync = i;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (ar.add(this), lu || (lu = !0, ue.read(Wx), ue.resolveKeyframes(Ux))) : (this.readKeyframes(), this.complete());
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
const Hx = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), HD = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function KD(e) {
  const t = HD.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function Kx(e, t, n = 1) {
  const [r, o] = KD(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const i = s.trim();
    return Hx(i) ? parseFloat(i) : i;
  }
  return Hd(o) ? Kx(o, t, n + 1) : o;
}
const Gx = (e) => (t) => t.test(e), GD = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Yx = [So, U, $t, vn, OP, _P, GD], Eh = (e) => Yx.find(Gx(e));
class Xx extends df {
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
        const u = Kx(c, n.current);
        u !== void 0 && (t[l] = u), l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !Ex.has(r) || t.length !== 2)
      return;
    const [o, s] = t, i = Eh(o), a = Eh(s);
    if (i !== a)
      if (bh(i) && bh(a))
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
      kD(t[o]) && r.push(o);
    r.length && zD(t, r, n);
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
const Th = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(zn.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function YD(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function XD(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const s = e[e.length - 1], i = Th(o, t), a = Th(s, t);
  return !i || !a ? !1 : YD(e) || (n === "spring" || Jd(n)) && r;
}
const QD = (e) => e !== null;
function el(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(QD), s = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !s || r === void 0 ? o[s] : r;
}
const qD = 40;
class Qx {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: i = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Ut.now(), this.options = {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > qD ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && WD(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = Ut.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: o, velocity: s, delay: i, onComplete: a, onUpdate: l, isGenerator: c } = this.options;
    if (!c && !XD(t, r, o, s))
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
const he = (e, t, n) => e + (t - e) * n;
function Bl(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function ZD({ hue: e, saturation: t, lightness: n, alpha: r }) {
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
}, JD = [iu, or, Fr], eN = (e) => JD.find((t) => t.test(e));
function Ph(e) {
  const t = eN(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === Fr && (n = ZD(n)), n;
}
const Dh = (e, t) => {
  const n = Ph(e), r = Ph(t);
  if (!n || !r)
    return va(e, t);
  const o = { ...n };
  return (s) => (o.red = $l(n.red, r.red, s), o.green = $l(n.green, r.green, s), o.blue = $l(n.blue, r.blue, s), o.alpha = he(n.alpha, r.alpha, s), or.transform(o));
}, tN = (e, t) => (n) => t(e(n)), Fs = (...e) => e.reduce(tN), uu = /* @__PURE__ */ new Set(["none", "hidden"]);
function nN(e, t) {
  return uu.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function rN(e, t) {
  return (n) => he(e, t, n);
}
function ff(e) {
  return typeof e == "number" ? rN : typeof e == "string" ? Hd(e) ? va : Be.test(e) ? Dh : iN : Array.isArray(e) ? qx : typeof e == "object" ? Be.test(e) ? Dh : oN : va;
}
function qx(e, t) {
  const n = [...e], r = n.length, o = e.map((s, i) => ff(s)(s, t[i]));
  return (s) => {
    for (let i = 0; i < r; i++)
      n[i] = o[i](s);
    return n;
  };
}
function oN(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = ff(e[o])(e[o], t[o]));
  return (o) => {
    for (const s in r)
      n[s] = r[s](o);
    return n;
  };
}
function sN(e, t) {
  var n;
  const r = [], o = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const i = t.types[s], a = e.indexes[i][o[i]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    r[s] = l, o[i]++;
  }
  return r;
}
const iN = (e, t) => {
  const n = zn.createTransformer(t), r = Es(e), o = Es(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? uu.has(e) && !o.values.length || uu.has(t) && !r.values.length ? nN(e, t) : Fs(qx(sN(r, o), o.values), n) : va(e, t);
};
function Zx(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? he(e, t, n) : ff(e)(e, t);
}
const aN = 5;
function Jx(e, t, n) {
  const r = Math.max(t - aN, 0);
  return Tx(n - e(r), t - r);
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
}, Ul = 1e-3;
function lN({ duration: e = ye.duration, bounce: t = ye.bounce, velocity: n = ye.velocity, mass: r = ye.mass }) {
  let o, s, i = 1 - t;
  i = cn(ye.minDamping, ye.maxDamping, i), e = cn(ye.minDuration, ye.maxDuration, /* @__PURE__ */ tn(e)), i < 1 ? (o = (c) => {
    const u = c * i, f = u * e, d = u - n, g = du(c, i), w = Math.exp(-f);
    return Ul - d / g * w;
  }, s = (c) => {
    const f = c * i * e, d = f * n + n, g = Math.pow(i, 2) * Math.pow(c, 2) * e, w = Math.exp(-f), v = du(Math.pow(c, 2), i);
    return (-o(c) + Ul > 0 ? -1 : 1) * ((d - g) * w) / v;
  }) : (o = (c) => {
    const u = Math.exp(-c * e), f = (c - n) * e + 1;
    return -Ul + u * f;
  }, s = (c) => {
    const u = Math.exp(-c * e), f = (n - c) * (e * e);
    return u * f;
  });
  const a = 5 / e, l = uN(o, s, a);
  if (e = /* @__PURE__ */ en(e), isNaN(l))
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
const cN = 12;
function uN(e, t, n) {
  let r = n;
  for (let o = 1; o < cN; o++)
    r = r - e(r) / t(r);
  return r;
}
function du(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const dN = ["duration", "bounce"], fN = ["stiffness", "damping", "mass"];
function Nh(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function pN(e) {
  let t = {
    velocity: ye.velocity,
    stiffness: ye.stiffness,
    damping: ye.damping,
    mass: ye.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Nh(e, fN) && Nh(e, dN))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, s = 2 * cn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: ye.mass,
        stiffness: o,
        damping: s
      };
    } else {
      const n = lN(e);
      t = {
        ...t,
        ...n,
        mass: ye.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function ew(e = ye.visualDuration, t = ye.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: o } = n;
  const s = n.keyframes[0], i = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: s }, { stiffness: l, damping: c, mass: u, duration: f, velocity: d, isResolvedFromDuration: g } = pN({
    ...n,
    velocity: -/* @__PURE__ */ tn(n.velocity || 0)
  }), w = d || 0, v = c / (2 * Math.sqrt(l * u)), S = i - s, m = /* @__PURE__ */ tn(Math.sqrt(l / u)), h = Math.abs(S) < 5;
  r || (r = h ? ye.restSpeed.granular : ye.restSpeed.default), o || (o = h ? ye.restDelta.granular : ye.restDelta.default);
  let y;
  if (v < 1) {
    const k = du(m, v);
    y = (T) => {
      const E = Math.exp(-v * m * T);
      return i - E * ((w + v * m * S) / k * Math.sin(k * T) + S * Math.cos(k * T));
    };
  } else if (v === 1)
    y = (k) => i - Math.exp(-m * k) * (S + (w + m * S) * k);
  else {
    const k = m * Math.sqrt(v * v - 1);
    y = (T) => {
      const E = Math.exp(-v * m * T), C = Math.min(k * T, 300);
      return i - E * ((w + v * m * S) * Math.sinh(C) + k * S * Math.cosh(C)) / k;
    };
  }
  const b = {
    calculatedDuration: g && f || null,
    next: (k) => {
      const T = y(k);
      if (g)
        a.done = k >= f;
      else {
        let E = 0;
        v < 1 && (E = k === 0 ? /* @__PURE__ */ en(w) : Jx(y, k, T));
        const C = Math.abs(E) <= r, R = Math.abs(i - T) <= o;
        a.done = C && R;
      }
      return a.value = a.done ? i : T, a;
    },
    toString: () => {
      const k = Math.min(vx(b), ru), T = xx((E) => b.next(k * E).value, k, 30);
      return k + "ms " + T;
    }
  };
  return b;
}
function Mh({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: s = 500, modifyTarget: i, min: a, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const f = e[0], d = {
    done: !1,
    value: f
  }, g = (C) => a !== void 0 && C < a || l !== void 0 && C > l, w = (C) => a === void 0 ? l : l === void 0 || Math.abs(a - C) < Math.abs(l - C) ? a : l;
  let v = n * t;
  const S = f + v, m = i === void 0 ? S : i(S);
  m !== S && (v = m - f);
  const h = (C) => -v * Math.exp(-C / r), y = (C) => m + h(C), b = (C) => {
    const R = h(C), N = y(C);
    d.done = Math.abs(R) <= c, d.value = d.done ? m : N;
  };
  let k, T;
  const E = (C) => {
    g(d.value) && (k = C, T = ew({
      keyframes: [d.value, w(d.value)],
      velocity: Jx(y, C, d.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: s,
      restDelta: c,
      restSpeed: u
    }));
  };
  return E(0), {
    calculatedDuration: null,
    next: (C) => {
      let R = !1;
      return !T && k === void 0 && (R = !0, b(C), E(C)), k !== void 0 && C >= k ? T.next(C - k) : (!R && b(C), d);
    }
  };
}
const hN = /* @__PURE__ */ Is(0.42, 0, 1, 1), mN = /* @__PURE__ */ Is(0, 0, 0.58, 1), tw = /* @__PURE__ */ Is(0.42, 0, 0.58, 1), gN = (e) => Array.isArray(e) && typeof e[0] != "number", yN = {
  linear: lt,
  easeIn: hN,
  easeInOut: tw,
  easeOut: mN,
  circIn: af,
  circInOut: _x,
  circOut: Lx,
  backIn: sf,
  backInOut: Rx,
  backOut: Ax,
  anticipate: jx
}, Ah = (e) => {
  if (ef(e)) {
    Z0(e.length === 4);
    const [t, n, r, o] = e;
    return Is(t, n, r, o);
  } else if (typeof e == "string")
    return yN[e];
  return e;
};
function vN(e, t, n) {
  const r = [], o = n || Zx, s = e.length - 1;
  for (let i = 0; i < s; i++) {
    let a = o(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] || lt : t;
      a = Fs(l, a);
    }
    r.push(a);
  }
  return r;
}
function xN(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const s = e.length;
  if (Z0(s === t.length), s === 1)
    return () => t[0];
  if (s === 2 && t[0] === t[1])
    return () => t[1];
  const i = e[0] === e[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = vN(t, r, o), l = a.length, c = (u) => {
    if (i && u < e[0])
      return t[0];
    let f = 0;
    if (l > 1)
      for (; f < e.length - 2 && !(u < e[f + 1]); f++)
        ;
    const d = /* @__PURE__ */ ao(e[f], e[f + 1], u);
    return a[f](d);
  };
  return n ? (u) => c(cn(e[0], e[s - 1], u)) : c;
}
function wN(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ ao(0, t, r);
    e.push(he(n, 1, o));
  }
}
function SN(e) {
  const t = [0];
  return wN(t, e.length - 1), t;
}
function bN(e, t) {
  return e.map((n) => n * t);
}
function kN(e, t) {
  return e.map(() => t || tw).splice(0, e.length - 1);
}
function xa({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = gN(r) ? r.map(Ah) : Ah(r), s = {
    done: !1,
    value: t[0]
  }, i = bN(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : SN(t),
    e
  ), a = xN(i, t, {
    ease: Array.isArray(o) ? o : kN(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (s.value = a(l), s.done = l >= e, s)
  };
}
const CN = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => ue.update(t, !0),
    stop: () => Vn(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Le.isProcessing ? Le.timestamp : Ut.now()
  };
}, EN = {
  decay: Mh,
  inertia: Mh,
  tween: xa,
  keyframes: xa,
  spring: ew
}, TN = (e) => e / 100;
class pf extends Qx {
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
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: s, velocity: i = 0 } = this.options, a = Jd(n) ? n : EN[n] || xa;
    let l, c;
    a !== xa && typeof t[0] != "number" && (l = Fs(TN, Zx(t[0], t[1])), t = [0, 100]);
    const u = a({ ...this.options, keyframes: t });
    s === "mirror" && (c = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -i
    })), u.calculatedDuration === null && (u.calculatedDuration = vx(u));
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
      const { keyframes: C } = this.options;
      return { done: !0, value: C[C.length - 1] };
    }
    const { finalKeyframe: o, generator: s, mirroredGenerator: i, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: c, totalDuration: u, resolvedDuration: f } = r;
    if (this.startTime === null)
      return s.next(0);
    const { delay: d, repeat: g, repeatType: w, repeatDelay: v, onUpdate: S } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const m = this.currentTime - d * (this.speed >= 0 ? 1 : -1), h = this.speed >= 0 ? m < 0 : m > u;
    this.currentTime = Math.max(m, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = u);
    let y = this.currentTime, b = s;
    if (g) {
      const C = Math.min(this.currentTime, u) / f;
      let R = Math.floor(C), N = C % 1;
      !N && C >= 1 && (N = 1), N === 1 && R--, R = Math.min(R, g + 1), !!(R % 2) && (w === "reverse" ? (N = 1 - N, v && (N -= v / f)) : w === "mirror" && (b = i)), y = cn(0, 1, N) * f;
    }
    const k = h ? { done: !1, value: l[0] } : b.next(y);
    a && (k.value = a(k.value));
    let { done: T } = k;
    !h && c !== null && (T = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
    return E && o !== void 0 && (k.value = el(l, this.options, o)), S && S(k.value), E && this.finish(), k;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? /* @__PURE__ */ tn(t.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ tn(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ en(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ tn(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = CN, onPlay: n, startTime: r } = this.options;
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
const PN = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function DN(e, t, n, { delay: r = 0, duration: o = 300, repeat: s = 0, repeatType: i = "loop", ease: a = "easeInOut", times: l } = {}) {
  const c = { [t]: n };
  l && (c.offset = l);
  const u = Sx(a, o);
  return Array.isArray(u) && (c.easing = u), e.animate(c, {
    delay: r,
    duration: o,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const NN = /* @__PURE__ */ Fd(() => Object.hasOwnProperty.call(Element.prototype, "animate")), wa = 10, MN = 2e4;
function AN(e) {
  return Jd(e.type) || e.type === "spring" || !wx(e.ease);
}
function RN(e, t) {
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
  for (; !r.done && s < MN; )
    r = n.sample(s), o.push(r.value), s += wa;
  return {
    times: void 0,
    keyframes: o,
    duration: s - wa,
    ease: "linear"
  };
}
const nw = {
  anticipate: jx,
  backInOut: Rx,
  circInOut: _x
};
function jN(e) {
  return e in nw;
}
class Rh extends Qx {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options;
    this.resolver = new Xx(s, (i, a) => this.onKeyframesResolved(i, a), n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: r = 300, times: o, ease: s, type: i, motionValue: a, name: l, startTime: c } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof s == "string" && ya() && jN(s) && (s = nw[s]), AN(this.options)) {
      const { onComplete: f, onUpdate: d, motionValue: g, element: w, ...v } = this.options, S = RN(t, v);
      t = S.keyframes, t.length === 1 && (t[1] = t[0]), r = S.duration, o = S.times, s = S.ease, i = "keyframes";
    }
    const u = DN(a.owner.current, l, t, { ...this.options, duration: r, times: o, ease: s });
    return u.startTime = c ?? this.calcStartTime(), this.pendingTimeline ? (gh(u, this.pendingTimeline), this.pendingTimeline = void 0) : u.onfinish = () => {
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
    return /* @__PURE__ */ tn(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return /* @__PURE__ */ tn(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = /* @__PURE__ */ en(t);
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
        return lt;
      const { animation: r } = n;
      gh(r, t);
    }
    return lt;
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
      }), v = /* @__PURE__ */ en(this.time);
      c.setWithVelocity(w.sample(v - wa).value, w.sample(v).value, wa);
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
    return NN() && r && PN.has(r) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !c && !o && s !== "mirror" && i !== 0 && a !== "inertia";
  }
}
const LN = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, _N = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), ON = {
  type: "keyframes",
  duration: 0.8
}, IN = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, FN = (e, { keyframes: t }) => t.length > 2 ? ON : xr.has(e) ? e.startsWith("scale") ? _N(t[1]) : LN : IN;
function VN({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: a, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
const hf = (e, t, n, r = {}, o, s) => (i) => {
  const a = Zd(r, e) || {}, l = a.delay || r.delay || 0;
  let { elapsed: c = 0 } = r;
  c = c - /* @__PURE__ */ en(l);
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
  VN(a) || (u = {
    ...u,
    ...FN(e, u)
  }), u.duration && (u.duration = /* @__PURE__ */ en(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ en(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let f = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (f = !0)), f && !s && t.get() !== void 0) {
    const d = el(u.keyframes, a);
    if (d !== void 0)
      return ue.update(() => {
        u.onUpdate(d), u.onComplete();
      }), new oD([]);
  }
  return !s && Rh.supports(u) ? new Rh(u) : new pf(u);
};
function zN({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function rw(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var s;
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (i = r);
  const c = [], u = o && e.animationState && e.animationState.getState()[o];
  for (const f in l) {
    const d = e.getValue(f, (s = e.latestValues[f]) !== null && s !== void 0 ? s : null), g = l[f];
    if (g === void 0 || u && zN(u, f))
      continue;
    const w = {
      delay: n,
      ...Zd(i || {}, f)
    };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const m = Px(e);
      if (m) {
        const h = window.MotionHandoffAnimation(m, f, ue);
        h !== null && (w.startTime = h, v = !0);
      }
    }
    su(e, f), d.start(hf(f, d, g, e.shouldReduceMotion && Ex.has(f) ? { type: !1 } : w, e, v));
    const S = d.animation;
    S && c.push(S);
  }
  return a && Promise.all(c).then(() => {
    ue.update(() => {
      a && vD(e, a);
    });
  }), c;
}
function fu(e, t, n = {}) {
  var r;
  const o = Ja(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = o ? () => Promise.all(rw(e, o, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: u = 0, staggerChildren: f, staggerDirection: d } = s;
    return BN(e, t, u + c, f, d, n);
  } : () => Promise.resolve(), { when: l } = s;
  if (l) {
    const [c, u] = l === "beforeChildren" ? [i, a] : [a, i];
    return c().then(() => u());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function BN(e, t, n = 0, r = 0, o = 1, s) {
  const i = [], a = (e.variantChildren.size - 1) * r, l = o === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return Array.from(e.variantChildren).sort($N).forEach((c, u) => {
    c.notify("AnimationStart", t), i.push(fu(c, t, {
      ...s,
      delay: n + l(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function $N(e, t) {
  return e.sortNodePosition(t);
}
function UN(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((s) => fu(e, s, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = fu(e, t, n);
  else {
    const o = typeof t == "function" ? Ja(e, t, n.custom) : t;
    r = Promise.all(rw(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const WN = zd.length;
function ow(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? ow(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < WN; n++) {
    const r = zd[n], o = e.props[r];
    (bs(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const HN = [...Vd].reverse(), KN = Vd.length;
function GN(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => UN(e, n, r)));
}
function YN(e) {
  let t = GN(e), n = jh(), r = !0;
  const o = (l) => (c, u) => {
    var f;
    const d = Ja(e, u, l === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
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
    const { props: c } = e, u = ow(e.parent) || {}, f = [], d = /* @__PURE__ */ new Set();
    let g = {}, w = 1 / 0;
    for (let S = 0; S < KN; S++) {
      const m = HN[S], h = n[m], y = c[m] !== void 0 ? c[m] : u[m], b = bs(y), k = m === l ? h.isActive : null;
      k === !1 && (w = S);
      let T = y === u[m] && y !== c[m] && b;
      if (T && r && e.manuallyAnimateOnMount && (T = !1), h.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !h.isActive && k === null || // If we didn't and don't have any defined prop for this animation type
      !y && !h.prevProp || // Or if the prop doesn't define an animation
      qa(y) || typeof y == "boolean")
        continue;
      const E = XN(h.prevProp, y);
      let C = E || // If we're making this variant active, we want to always make it active
      m === l && h.isActive && !T && b || // If we removed a higher-priority variant (i is in reverse order)
      S > w && b, R = !1;
      const N = Array.isArray(y) ? y : [y];
      let P = N.reduce(o(m), {});
      k === !1 && (P = {});
      const { prevResolvedValues: M = {} } = h, L = {
        ...M,
        ...P
      }, _ = (B) => {
        C = !0, d.has(B) && (R = !0, d.delete(B)), h.needsAnimating[B] = !0;
        const D = e.getValue(B);
        D && (D.liveStyle = !1);
      };
      for (const B in L) {
        const D = P[B], O = M[B];
        if (g.hasOwnProperty(B))
          continue;
        let z = !1;
        nu(D) && nu(O) ? z = !yx(D, O) : z = D !== O, z ? D != null ? _(B) : d.add(B) : D !== void 0 && d.has(B) ? _(B) : h.protectedKeys[B] = !0;
      }
      h.prevProp = y, h.prevResolvedValues = P, h.isActive && (g = { ...g, ...P }), r && e.blockInitialAnimation && (C = !1), C && (!(T && E) || R) && f.push(...N.map((B) => ({
        animation: B,
        options: { type: m }
      })));
    }
    if (d.size) {
      const S = {};
      d.forEach((m) => {
        const h = e.getBaseTarget(m), y = e.getValue(m);
        y && (y.liveStyle = !0), S[m] = h ?? null;
      }), f.push({ animation: S });
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
      n = jh(), r = !0;
    }
  };
}
function XN(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !yx(t, e) : !1;
}
function Qn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function jh() {
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
class Gn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class QN extends Gn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = YN(t));
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
let qN = 0;
class ZN extends Gn {
  constructor() {
    super(...arguments), this.id = qN++;
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
const JN = {
  animation: {
    Feature: QN
  },
  exit: {
    Feature: ZN
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
const e2 = (e) => (t) => tf(t) && e(t, Vs(t));
function qo(e, t, n, r) {
  return Ts(e, t, e2(n), r);
}
const Lh = (e, t) => Math.abs(e - t);
function t2(e, t) {
  const n = Lh(e.x, t.x), r = Lh(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class sw {
  constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: s = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = Hl(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, g = t2(f.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !g)
        return;
      const { point: w } = f, { timestamp: v } = Le;
      this.history.push({ ...w, timestamp: v });
      const { onStart: S, onMove: m } = this.handlers;
      d || (S && S(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), m && m(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, d) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = Wl(d, this.transformPagePoint), ue.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, d) => {
      this.end();
      const { onEnd: g, onSessionEnd: w, resumeAnimation: v } = this.handlers;
      if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const S = Hl(f.type === "pointercancel" ? this.lastMoveEventInfo : Wl(d, this.transformPagePoint), this.history);
      this.startEvent && g && g(f, S), w && w(f, S);
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
    this.removeListeners && this.removeListeners(), Vn(this.updatePoint);
  }
}
function Wl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function _h(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Hl({ point: e }, t) {
  return {
    point: e,
    delta: _h(e, iw(t)),
    offset: _h(e, n2(t)),
    velocity: r2(t, 0.1)
  };
}
function n2(e) {
  return e[0];
}
function iw(e) {
  return e[e.length - 1];
}
function r2(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = iw(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > /* @__PURE__ */ en(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = /* @__PURE__ */ tn(o.timestamp - r.timestamp);
  if (s === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - r.x) / s,
    y: (o.y - r.y) / s
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
const aw = 1e-4, o2 = 1 - aw, s2 = 1 + aw, lw = 0.01, i2 = 0 - lw, a2 = 0 + lw;
function ut(e) {
  return e.max - e.min;
}
function l2(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Oh(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = he(t.min, t.max, e.origin), e.scale = ut(n) / ut(t), e.translate = he(n.min, n.max, e.origin) - e.originPoint, (e.scale >= o2 && e.scale <= s2 || isNaN(e.scale)) && (e.scale = 1), (e.translate >= i2 && e.translate <= a2 || isNaN(e.translate)) && (e.translate = 0);
}
function Zo(e, t, n, r) {
  Oh(e.x, t.x, n.x, r ? r.originX : void 0), Oh(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Ih(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + ut(t);
}
function c2(e, t, n) {
  Ih(e.x, t.x, n.x), Ih(e.y, t.y, n.y);
}
function Fh(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + ut(t);
}
function Jo(e, t, n) {
  Fh(e.x, t.x, n.x), Fh(e.y, t.y, n.y);
}
function u2(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? he(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? he(n, e, r.max) : Math.min(e, n)), e;
}
function Vh(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function d2(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Vh(e.x, n, o),
    y: Vh(e.y, t, r)
  };
}
function zh(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function f2(e, t) {
  return {
    x: zh(e.x, t.x),
    y: zh(e.y, t.y)
  };
}
function p2(e, t) {
  let n = 0.5;
  const r = ut(e), o = ut(t);
  return o > r ? n = /* @__PURE__ */ ao(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ ao(e.min, e.max - o, t.min)), cn(0, 1, n);
}
function h2(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const pu = 0.35;
function m2(e = pu) {
  return e === !1 ? e = 0 : e === !0 && (e = pu), {
    x: Bh(e, "left", "right"),
    y: Bh(e, "top", "bottom")
  };
}
function Bh(e, t, n) {
  return {
    min: $h(e, t),
    max: $h(e, n)
  };
}
function $h(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Uh = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Vr = () => ({
  x: Uh(),
  y: Uh()
}), Wh = () => ({ min: 0, max: 0 }), Se = () => ({
  x: Wh(),
  y: Wh()
});
function ht(e) {
  return [e("x"), e("y")];
}
function cw({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function g2({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function y2(e, t) {
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
function Jn(e) {
  return hu(e) || uw(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function uw(e) {
  return Hh(e.x) || Hh(e.y);
}
function Hh(e) {
  return e && e !== "0%";
}
function Sa(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Kh(e, t, n, r, o) {
  return o !== void 0 && (e = Sa(e, o, r)), Sa(e, n, r) + t;
}
function mu(e, t = 0, n = 1, r, o) {
  e.min = Kh(e.min, t, n, r, o), e.max = Kh(e.max, t, n, r, o);
}
function dw(e, { x: t, y: n }) {
  mu(e.x, t.translate, t.scale, t.originPoint), mu(e.y, n.translate, n.scale, n.originPoint);
}
const Gh = 0.999999999999, Yh = 1.0000000000001;
function v2(e, t, n, r = !1) {
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
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, dw(e, i)), r && Jn(s.latestValues) && Br(e, s.latestValues));
  }
  t.x < Yh && t.x > Gh && (t.x = 1), t.y < Yh && t.y > Gh && (t.y = 1);
}
function zr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Xh(e, t, n, r, o = 0.5) {
  const s = he(e.min, e.max, o);
  mu(e, t, n, s, r);
}
function Br(e, t) {
  Xh(e.x, t.x, t.scaleX, t.scale, t.originX), Xh(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function fw(e, t) {
  return cw(y2(e.getBoundingClientRect(), t));
}
function x2(e, t, n) {
  const r = fw(e, n), { scroll: o } = t;
  return o && (zr(r.x, o.offset.x), zr(r.y, o.offset.y)), r;
}
const pw = ({ current: e }) => e ? e.ownerDocument.defaultView : null, w2 = /* @__PURE__ */ new WeakMap();
class S2 {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Se(), this.visualElement = t;
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
      if (d && !g && (this.openDragLock && this.openDragLock(), this.openDragLock = pD(d), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ht((S) => {
        let m = this.getAxisMotionValue(S).get() || 0;
        if ($t.test(m)) {
          const { projection: h } = this.visualElement;
          if (h && h.layout) {
            const y = h.layout.layoutBox[S];
            y && (m = ut(y) * (parseFloat(m) / 100));
          }
        }
        this.originPoint[S] = m;
      }), w && ue.postRender(() => w(u, f)), su(this.visualElement, "transform");
      const { animationState: v } = this.visualElement;
      v && v.setActive("whileDrag", !0);
    }, i = (u, f) => {
      const { dragPropagation: d, dragDirectionLock: g, onDirectionLock: w, onDrag: v } = this.getProps();
      if (!d && !this.openDragLock)
        return;
      const { offset: S } = f;
      if (g && this.currentDirection === null) {
        this.currentDirection = b2(S), this.currentDirection !== null && w && w(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, S), this.updateAxis("y", f.point, S), this.visualElement.render(), v && v(u, f);
    }, a = (u, f) => this.stop(u, f), l = () => ht((u) => {
      var f;
      return this.getAnimationState(u) === "paused" && ((f = this.getAxisMotionValue(u).animation) === null || f === void 0 ? void 0 : f.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new sw(t, {
      onSessionStart: o,
      onStart: s,
      onMove: i,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      contextWindow: pw(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: s } = this.getProps();
    s && ue.postRender(() => s(t, n));
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
    this.constraints && this.constraints[t] && (i = u2(i, this.constraints[t], this.elastic[t])), s.set(i);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, s = this.constraints;
    n && Ir(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = d2(o.layoutBox, n) : this.constraints = !1, this.elastic = m2(r), s !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && ht((i) => {
      this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = h2(o.layoutBox[i], this.constraints[i]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Ir(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const s = x2(r, o.root, this.visualElement.getTransformPagePoint());
    let i = f2(o.layout.layoutBox, s);
    if (n) {
      const a = n(g2(i));
      this.hasMutatedConstraints = !!a, a && (i = cw(a));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = ht((u) => {
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
      if (!yi(n, r, this.currentDirection))
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
    if (!Ir(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    ht((i) => {
      const a = this.getAxisMotionValue(i);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[i] = p2({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), ht((i) => {
      if (!yi(i, t, null))
        return;
      const a = this.getAxisMotionValue(i), { min: l, max: c } = this.constraints[i];
      a.set(he(l, c, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    w2.set(this.visualElement, this);
    const t = this.visualElement.current, n = qo(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Ir(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, s = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), ue.read(r);
    const i = Ts(window, "resize", () => this.scalePositionWithinConstraints()), a = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (ht((u) => {
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
function b2(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class k2 extends Gn {
  constructor(t) {
    super(t), this.removeGroupControls = lt, this.removeListeners = lt, this.controls = new S2(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || lt;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Qh = (e) => (t, n) => {
  e && ue.postRender(() => e(t, n));
};
class C2 extends Gn {
  constructor() {
    super(...arguments), this.removePointerDownListener = lt;
  }
  onPointerDown(t) {
    this.session = new sw(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: pw(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Qh(t),
      onStart: Qh(n),
      onMove: r,
      onEnd: (s, i) => {
        delete this.session, o && ue.postRender(() => o(s, i));
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
function qh(e, t) {
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
    const n = qh(e, t.target.x), r = qh(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, E2 = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = zn.parse(e);
    if (o.length > 5)
      return r;
    const s = zn.createTransformer(e), i = typeof o[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + i] /= a, o[1 + i] /= l;
    const c = he(a, l, 0.5);
    return typeof o[2 + i] == "number" && (o[2 + i] /= c), typeof o[3 + i] == "number" && (o[3 + i] /= c), s(o);
  }
};
class T2 extends x.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: s } = t;
    KP(P2), s && (n.group && n.group.add(s), r && r.register && o && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), Fi.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: s } = this.props, i = r.projection;
    return i && (i.isPresent = s, o || t.layoutDependency !== n || n === void 0 ? i.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? i.promote() : i.relegate() || ue.postRender(() => {
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
function hw(e) {
  const [t, n] = Q0(), r = x.useContext(Ld);
  return p.jsx(T2, { ...e, layoutGroup: r, switchLayoutGroup: x.useContext(ox), isPresent: t, safeToRemove: n });
}
const P2 = {
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
  boxShadow: E2
};
function D2(e, t, n) {
  const r = Ue(e) ? e : Cs(e);
  return r.start(hf("", r, t, n)), r.animation;
}
function N2(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const M2 = (e, t) => e.depth - t.depth;
class A2 {
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
    this.isDirty && this.children.sort(M2), this.isDirty = !1, this.children.forEach(t);
  }
}
function R2(e, t) {
  const n = Ut.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= t && (Vn(r), e(s - t));
  };
  return ue.read(r, !0), () => Vn(r);
}
const mw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], j2 = mw.length, Zh = (e) => typeof e == "string" ? parseFloat(e) : e, Jh = (e) => typeof e == "number" || U.test(e);
function L2(e, t, n, r, o, s) {
  o ? (e.opacity = he(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    _2(r)
  ), e.opacityExit = he(t.opacity !== void 0 ? t.opacity : 1, 0, O2(r))) : s && (e.opacity = he(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < j2; i++) {
    const a = `border${mw[i]}Radius`;
    let l = em(t, a), c = em(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || Jh(l) === Jh(c) ? (e[a] = Math.max(he(Zh(l), Zh(c), r), 0), ($t.test(c) || $t.test(l)) && (e[a] += "%")) : e[a] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = he(t.rotate || 0, n.rotate || 0, r));
}
function em(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const _2 = /* @__PURE__ */ gw(0, 0.5, Lx), O2 = /* @__PURE__ */ gw(0.5, 0.95, lt);
function gw(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ ao(e, t, r));
}
function tm(e, t) {
  e.min = t.min, e.max = t.max;
}
function pt(e, t) {
  tm(e.x, t.x), tm(e.y, t.y);
}
function nm(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function rm(e, t, n, r, o) {
  return e -= t, e = Sa(e, 1 / n, r), o !== void 0 && (e = Sa(e, 1 / o, r)), e;
}
function I2(e, t = 0, n = 1, r = 0.5, o, s = e, i = e) {
  if ($t.test(t) && (t = parseFloat(t), t = he(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let a = he(s.min, s.max, r);
  e === s && (a -= t), e.min = rm(e.min, t, n, a, o), e.max = rm(e.max, t, n, a, o);
}
function om(e, t, [n, r, o], s, i) {
  I2(e, t[n], t[r], t[o], t.scale, s, i);
}
const F2 = ["x", "scaleX", "originX"], V2 = ["y", "scaleY", "originY"];
function sm(e, t, n, r) {
  om(e.x, t, F2, n ? n.x : void 0, r ? r.x : void 0), om(e.y, t, V2, n ? n.y : void 0, r ? r.y : void 0);
}
function im(e) {
  return e.translate === 0 && e.scale === 1;
}
function yw(e) {
  return im(e.x) && im(e.y);
}
function am(e, t) {
  return e.min === t.min && e.max === t.max;
}
function z2(e, t) {
  return am(e.x, t.x) && am(e.y, t.y);
}
function lm(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function vw(e, t) {
  return lm(e.x, t.x) && lm(e.y, t.y);
}
function cm(e) {
  return ut(e.x) / ut(e.y);
}
function um(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class B2 {
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
function $2(e, t, n) {
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
}, zo = typeof window < "u" && window.MotionDebug !== void 0, Gl = ["", "X", "Y", "Z"], U2 = { visibility: "hidden" }, dm = 1e3;
let W2 = 0;
function Yl(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function xw(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Px(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ue, !(o || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && xw(r);
}
function ww({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(i = {}, a = t == null ? void 0 : t()) {
      this.id = W2++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, zo && (er.totalNodes = er.resolvedTargetDeltas = er.recalculatedProjection = 0), this.nodes.forEach(G2), this.nodes.forEach(Z2), this.nodes.forEach(J2), this.nodes.forEach(Y2), zo && window.MotionDebug.record(er);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new A2());
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
      this.isSVG = N2(i), this.instance = i;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || l) && (this.isLayoutDirty = !0), e) {
        let f;
        const d = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = R2(d, 250), Fi.hasAnimatedSinceResize && (Fi.hasAnimatedSinceResize = !1, this.nodes.forEach(pm));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: g, layout: w }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const v = this.options.transition || u.getDefaultTransition() || oM, { onLayoutAnimationStart: S, onLayoutAnimationComplete: m } = u.getProps(), h = !this.targetLayout || !vw(this.targetLayout, w) || g, y = !d && g;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || y || d && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, y);
          const b = {
            ...Zd(v, "layout"),
            onPlay: S,
            onComplete: m
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (b.delay = 0, b.type = !1), this.startAnimation(b);
        } else
          d || pm(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(eM), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && xw(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(fm);
        return;
      }
      this.isUpdating || this.nodes.forEach(Q2), this.isUpdating = !1, this.nodes.forEach(q2), this.nodes.forEach(H2), this.nodes.forEach(K2), this.clearAllSnapshots();
      const a = Ut.now();
      Le.delta = cn(0, 1e3 / 60, a - Le.timestamp), Le.timestamp = a, Le.isProcessing = !0, Fl.update.process(Le), Fl.preRender.process(Le), Fl.render.process(Le), Le.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, $d.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(X2), this.sharedNodes.forEach(tM);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, ue.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ue.postRender(() => {
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
      const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !yw(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      i && (a || Jn(this.latestValues) || u) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return i && (l = this.removeTransform(l)), sM(l), {
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
      if (!(((i = this.scroll) === null || i === void 0 ? void 0 : i.wasRoot) || this.path.some(iM))) {
        const { scroll: u } = this.root;
        u && (zr(l.x, u.offset.x), zr(l.y, u.offset.y));
      }
      return l;
    }
    removeElementScroll(i) {
      var a;
      const l = Se();
      if (pt(l, i), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c], { scroll: f, options: d } = u;
        u !== this.root && f && d.layoutScroll && (f.wasRoot && pt(l, i), zr(l.x, f.offset.x), zr(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(i, a = !1) {
      const l = Se();
      pt(l, i);
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
      pt(a, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Jn(c.latestValues))
          continue;
        hu(c.latestValues) && c.updateSnapshot();
        const u = Se(), f = c.measurePageBox();
        pt(u, f), sm(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return Jn(this.latestValues) && sm(a, this.latestValues), a;
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
          g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Se(), this.relativeTargetOrigin = Se(), Jo(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox), pt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Se(), this.targetWithTransforms = Se()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), c2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : pt(this.target, this.layout.layoutBox), dw(this.target, this.targetDelta)) : pt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Se(), this.relativeTargetOrigin = Se(), Jo(this.relativeTargetOrigin, this.target, g.target), pt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          zo && er.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || hu(this.parent.latestValues) || uw(this.parent.latestValues)))
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
      pt(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, g = this.treeScale.y;
      v2(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = Se());
      const { target: w } = a;
      if (!w) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (nm(this.prevProjectionDelta.x, this.projectionDelta.x), nm(this.prevProjectionDelta.y, this.projectionDelta.y)), Zo(this.projectionDelta, this.layoutCorrected, w, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== g || !um(this.projectionDelta.x, this.prevProjectionDelta.x) || !um(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", w)), zo && er.recalculatedProjection++;
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
      const d = Se(), g = l ? l.source : void 0, w = this.layout ? this.layout.source : void 0, v = g !== w, S = this.getStack(), m = !S || S.members.length <= 1, h = !!(v && !m && this.options.crossfade === !0 && !this.path.some(rM));
      this.animationProgress = 0;
      let y;
      this.mixTargetDelta = (b) => {
        const k = b / 1e3;
        hm(f.x, i.x, k), hm(f.y, i.y, k), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Jo(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), nM(this.relativeTarget, this.relativeTargetOrigin, d, k), y && z2(this.relativeTarget, y) && (this.isProjectionDirty = !1), y || (y = Se()), pt(y, this.relativeTarget)), v && (this.animationValues = u, L2(u, c, this.latestValues, k, h, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Vn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ue.update(() => {
        Fi.hasAnimatedSinceResize = !0, this.currentAnimation = D2(0, dm, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(dm), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = i;
      if (!(!a || !l || !c)) {
        if (this !== i && this.layout && c && Sw(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || Se();
          const f = ut(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + f;
          const d = ut(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + d;
        }
        pt(a, l), Br(a, u), Zo(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(i, a) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new B2()), this.sharedNodes.get(i).add(a);
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
        return U2;
      const c = {
        visibility: ""
      }, u = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = Oi(i == null ? void 0 : i.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = Oi(i == null ? void 0 : i.pointerEvents) || ""), this.hasProjected && !Jn(this.latestValues) && (v.transform = u ? u({}, "") : "none", this.hasProjected = !1), v;
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), c.transform = $2(this.projectionDeltaWithTransform, this.treeScale, d), u && (c.transform = u(d, c.transform));
      const { x: g, y: w } = this.projectionDelta;
      c.transformOrigin = `${g.origin * 100}% ${w.origin * 100}% 0`, f.animationValues ? c.opacity = f === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : c.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const v in ga) {
        if (d[v] === void 0)
          continue;
        const { correct: S, applyTo: m } = ga[v], h = c.transform === "none" ? d[v] : S(d[v], f);
        if (m) {
          const y = m.length;
          for (let b = 0; b < y; b++)
            c[m[b]] = h;
        } else
          c[v] = h;
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
      }), this.root.nodes.forEach(fm), this.root.sharedNodes.clear();
    }
  };
}
function H2(e) {
  e.updateLayout();
}
function K2(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: s } = e.options, i = n.source !== e.layout.source;
    s === "size" ? ht((f) => {
      const d = i ? n.measuredBox[f] : n.layoutBox[f], g = ut(d);
      d.min = r[f].min, d.max = d.min + g;
    }) : Sw(s, n.layoutBox, r) && ht((f) => {
      const d = i ? n.measuredBox[f] : n.layoutBox[f], g = ut(r[f]);
      d.max = d.min + g, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + g);
    });
    const a = Vr();
    Zo(a, r, n.layoutBox);
    const l = Vr();
    i ? Zo(l, e.applyTransform(o, !0), n.measuredBox) : Zo(l, r, n.layoutBox);
    const c = !yw(a);
    let u = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const w = Se();
          Jo(w, n.layoutBox, d.layoutBox);
          const v = Se();
          Jo(v, r, g.layoutBox), vw(w, v) || (u = !0), f.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = w, e.relativeParent = f);
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
function G2(e) {
  zo && er.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Y2(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function X2(e) {
  e.clearSnapshot();
}
function fm(e) {
  e.clearMeasurements();
}
function Q2(e) {
  e.isLayoutDirty = !1;
}
function q2(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function pm(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Z2(e) {
  e.resolveTargetDelta();
}
function J2(e) {
  e.calcProjection();
}
function eM(e) {
  e.resetSkewAndRotation();
}
function tM(e) {
  e.removeLeadSnapshot();
}
function hm(e, t, n) {
  e.translate = he(t.translate, 0, n), e.scale = he(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function mm(e, t, n, r) {
  e.min = he(t.min, n.min, r), e.max = he(t.max, n.max, r);
}
function nM(e, t, n, r) {
  mm(e.x, t.x, n.x, r), mm(e.y, t.y, n.y, r);
}
function rM(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const oM = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, gm = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), ym = gm("applewebkit/") && !gm("chrome/") ? Math.round : lt;
function vm(e) {
  e.min = ym(e.min), e.max = ym(e.max);
}
function sM(e) {
  vm(e.x), vm(e.y);
}
function Sw(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !l2(cm(t), cm(n), 0.2);
}
function iM(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const aM = ww({
  attachResizeListener: (e, t) => Ts(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Xl = {
  current: void 0
}, bw = ww({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Xl.current) {
      const e = new aM({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Xl.current = e;
    }
    return Xl.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), lM = {
  pan: {
    Feature: C2
  },
  drag: {
    Feature: k2,
    ProjectionNode: bw,
    MeasureLayout: hw
  }
};
function xm(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, s = r[o];
  s && ue.postRender(() => s(t, Vs(t)));
}
class cM extends Gn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = lD(t, (n) => (xm(this.node, n, "Start"), (r) => xm(this.node, r, "End"))));
  }
  unmount() {
  }
}
class uM extends Gn {
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
function wm(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n), s = r[o];
  s && ue.postRender(() => s(t, Vs(t)));
}
class dM extends Gn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = fD(t, (n) => (wm(this.node, n, "Start"), (r, { success: o }) => wm(this.node, r, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const gu = /* @__PURE__ */ new WeakMap(), Ql = /* @__PURE__ */ new WeakMap(), fM = (e) => {
  const t = gu.get(e.target);
  t && t(e);
}, pM = (e) => {
  e.forEach(fM);
};
function hM({ root: e, ...t }) {
  const n = e || document;
  Ql.has(n) || Ql.set(n, {});
  const r = Ql.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(pM, { root: e, ...t })), r[o];
}
function mM(e, t, n) {
  const r = hM(t);
  return gu.set(e, n), r.observe(e), () => {
    gu.delete(e), r.unobserve(e);
  };
}
const gM = {
  some: 0,
  all: 1
};
class yM extends Gn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: s } = t, i = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : gM[o]
    }, a = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, s && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: f } = this.node.getProps(), d = c ? u : f;
      d && d(l);
    };
    return mM(this.node.current, i, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(vM(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function vM({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const xM = {
  inView: {
    Feature: yM
  },
  tap: {
    Feature: dM
  },
  focus: {
    Feature: uM
  },
  hover: {
    Feature: cM
  }
}, wM = {
  layout: {
    ProjectionNode: bw,
    MeasureLayout: hw
  }
}, yu = { current: null }, kw = { current: !1 };
function SM() {
  if (kw.current = !0, !!Id)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => yu.current = e.matches;
      e.addListener(t), t();
    } else
      yu.current = !1;
}
const bM = [...Yx, Be, zn], kM = (e) => bM.find(Gx(e)), Sm = /* @__PURE__ */ new WeakMap();
function CM(e, t, n) {
  for (const r in t) {
    const o = t[r], s = n[r];
    if (Ue(o))
      e.addValue(r, o);
    else if (Ue(s))
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
const bm = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class EM {
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
      const g = Ut.now();
      this.renderScheduledAt < g && (this.renderScheduledAt = g, ue.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: c, onUpdate: u } = i;
    this.onUpdate = u, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.blockInitialAnimation = !!s, this.isControllingVariants = Za(n), this.isVariantNode = nx(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const g in d) {
      const w = d[g];
      l[g] !== void 0 && Ue(w) && w.set(l[g], !1);
    }
  }
  mount(t) {
    this.current = t, Sm.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), kw.current || SM(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : yu.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Sm.delete(this.current), this.projection && this.projection.unmount(), Vn(this.notifyUpdate), Vn(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
      this.latestValues[t] = a, this.props.onUpdate && ue.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
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
    for (let r = 0; r < bm.length; r++) {
      const o = bm[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const s = "on" + o, i = t[s];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = CM(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return o != null && (typeof o == "string" && (Hx(o) || Ox(o)) ? o = parseFloat(o) : !kM(o) && zn.test(n) && (o = $x(t, n)), this.setBaseTarget(t, Ue(o) ? o.get() : o)), Ue(o) ? o.get() : o;
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
    return s !== void 0 && !Ue(s) ? s : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new of()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Cw extends EM {
  constructor() {
    super(...arguments), this.KeyframeResolver = Xx;
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
    Ue(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function TM(e) {
  return window.getComputedStyle(e);
}
class PM extends Cw {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = dx;
  }
  readValueFromInstance(t, n) {
    if (xr.has(n)) {
      const r = uf(n);
      return r && r.default || 0;
    } else {
      const r = TM(t), o = (lx(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return fw(t, n);
  }
  build(t, n, r) {
    Gd(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return qd(t, n, r);
  }
}
class DM extends Cw {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Se;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (xr.has(n)) {
      const r = uf(n);
      return r && r.default || 0;
    }
    return n = fx.has(n) ? n : Bd(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return mx(t, n, r);
  }
  build(t, n, r) {
    Yd(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    px(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = Qd(t.tagName), super.mount(t);
  }
}
const NM = (e, t) => Ud(e) ? new DM(t) : new PM(t, {
  allowProjection: e !== x.Fragment
}), MM = /* @__PURE__ */ tD({
  ...JN,
  ...xM,
  ...lM,
  ...wM
}, NM), vi = /* @__PURE__ */ gP(MM);
function qt(e = "default") {
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
function Ew(e = "default") {
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
function AM(e = "default") {
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
function Tw(e) {
  const t = {};
  return !e || !Array.isArray(e) || e.forEach((n) => {
    n.variant && (t[n.slug] = n.variant);
  }), t;
}
function RM({ events: e, eventMetadata: t, categoryMappings: n, onDateClick: r, onEventClick: o, onMonthChange: s, currentDate: i }) {
  const [a, l] = x.useState(/* @__PURE__ */ new Date()), c = i || a, [u, f] = x.useState(0), [d, g] = x.useState(null), w = (N, P) => {
    const M = new Date(P, N + 1, 0).getDate();
    return Array.from({ length: M }, (L, _) => ({ day: _ + 1 }));
  }, v = (N, P) => e.filter((L) => {
    const _ = new Date(L.startDate);
    return _.getDate() === N && _.getMonth() === P.getMonth() && _.getFullYear() === P.getFullYear();
  }), S = (N) => N.toLocaleTimeString("en-US", {
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
  }, y = w(c.getMonth(), c.getFullYear()), b = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], T = new Date(c.getFullYear(), c.getMonth(), 1).getDay(), E = new Date(c.getFullYear(), c.getMonth() - 1, 1), C = new Date(E.getFullYear(), E.getMonth() + 1, 0).getDate(), R = ({ events: N }) => {
    const P = N.reduce((M, L) => {
      const _ = t[L.id], F = (_ == null ? void 0 : _.category) || "uncategorized";
      return M[F] || (M[F] = []), M[F].push(L), M;
    }, {});
    return /* @__PURE__ */ p.jsx("div", { className: "flex flex-wrap gap-1", children: Object.entries(P).map(([M, L]) => {
      const _ = Bn(M === "uncategorized" ? null : M, n), F = qt(_);
      return /* @__PURE__ */ p.jsx(
        "div",
        {
          className: `${F} text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium shadow-sm`,
          title: `${L.length} ${M} event${L.length > 1 ? "s" : ""}: ${L.map((I) => I.title).join(", ")}`,
          children: L.length
        },
        M
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
        /* @__PURE__ */ p.jsxs(Jt, { variant: "outline", onClick: m, className: "gap-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600", children: [
          /* @__PURE__ */ p.jsx(t0, { className: "h-4 w-4" }),
          "Prev"
        ] }),
        /* @__PURE__ */ p.jsxs(Jt, { variant: "outline", onClick: h, className: "gap-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600", children: [
          "Next",
          /* @__PURE__ */ p.jsx(n0, { className: "h-4 w-4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-7 gap-1 sm:gap-2 mb-4", children: b.map((N, P) => /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "text-left py-2 text-lg tracking-tighter font-medium text-gray-900 dark:text-gray-100",
        children: N
      },
      P
    )) }),
    /* @__PURE__ */ p.jsx(lh, { initial: !1, custom: u, mode: "wait", children: /* @__PURE__ */ p.jsxs(
      vi.div,
      {
        custom: u,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        className: "grid grid-cols-7 gap-1 sm:gap-2",
        children: [
          Array.from({ length: T }).map((N, P) => /* @__PURE__ */ p.jsx("div", { className: "h-[150px] opacity-50 p-4", children: /* @__PURE__ */ p.jsx("div", { className: "font-semibold relative text-3xl mb-1 text-gray-400 dark:text-gray-500", children: C - T + P + 1 }) }, `offset-${P}`)),
          y.map((N) => {
            const P = v(N.day, c), M = (/* @__PURE__ */ new Date()).getDate() === N.day && (/* @__PURE__ */ new Date()).getMonth() === c.getMonth() && (/* @__PURE__ */ new Date()).getFullYear() === c.getFullYear(), _ = (T + N.day - 1) % 7 >= 5;
            return /* @__PURE__ */ p.jsxs(
              vi.div,
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
                    pd,
                    {
                      className: `bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md overflow-hidden relative flex p-4 border h-full transition-shadow day-card ${P.length > 0 ? "cursor-pointer hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700" : "cursor-default"} ${M ? "!border-red-500 !border-2" : ""}`,
                      onClick: P.length > 0 ? () => r == null ? void 0 : r(new Date(c.getFullYear(), c.getMonth(), N.day)) : void 0,
                      children: [
                        /* @__PURE__ */ p.jsx("div", { className: `font-semibold relative text-3xl mb-1 ${P.length > 0 ? "text-gray-900 dark:text-gray-100" : "text-gray-500 dark:text-gray-400"} ${M ? "text-blue-600 dark:text-blue-400" : ""}`, children: N.day }),
                        /* @__PURE__ */ p.jsx("div", { className: "flex-grow flex flex-col gap-2 w-full", children: /* @__PURE__ */ p.jsx(lh, { mode: "wait", children: (P == null ? void 0 : P.length) > 0 && /* @__PURE__ */ p.jsx(
                          vi.div,
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
                        /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: P.map((F) => {
                          const I = t[F.id], B = Bn(I == null ? void 0 : I.category, n), D = qt(B);
                          return /* @__PURE__ */ p.jsxs(
                            "div",
                            {
                              className: "flex items-start gap-2 p-1 -m-1 rounded cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors",
                              onClick: (O) => {
                                O.stopPropagation(), o == null || o(F);
                              },
                              children: [
                                /* @__PURE__ */ p.jsx("div", { className: `w-2 h-2 rounded-full ${D} flex-shrink-0 mt-1.5` }),
                                /* @__PURE__ */ p.jsxs("div", { className: "flex-1 min-w-0", children: [
                                  /* @__PURE__ */ p.jsx("div", { className: "font-medium text-sm text-gray-900 dark:text-gray-100 leading-tight", children: F.title }),
                                  /* @__PURE__ */ p.jsx("div", { className: "text-xs text-gray-600 dark:text-gray-400 mt-0.5", children: S(F.startDate) })
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
              N.day
            );
          }),
          (() => {
            const P = (T + y.length) % 7, M = P === 0 ? 0 : 7 - P;
            return Array.from({ length: M }).map((L, _) => /* @__PURE__ */ p.jsx("div", { className: "h-[150px] opacity-50 p-4", children: /* @__PURE__ */ p.jsx("div", { className: "font-semibold relative text-3xl mb-1 text-gray-400 dark:text-gray-500", children: _ + 1 }) }, `next-${_}`));
          })()
        ]
      },
      `${c.getFullYear()}-${c.getMonth()}`
    ) })
  ] });
}
function jM({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r }) {
  const [o, s] = K.useState(/* @__PURE__ */ new Date()), a = ((d) => {
    const g = new Date(d);
    return g.setDate(d.getDate() - d.getDay()), Array.from({ length: 7 }, (w, v) => {
      const S = new Date(g);
      return S.setDate(g.getDate() + v), S;
    });
  })(o), l = Array.from({ length: 24 }, (d, g) => g), c = (d) => e.filter((g) => g.startDate.toDateString() === d.toDateString()), u = (d) => {
    const g = new Date(o);
    g.setDate(o.getDate() + (d === "next" ? 7 : -7)), s(g);
  }, f = (d, g, w) => {
    const v = d.startDate.getHours(), S = d.startDate.getMinutes(), m = d.endDate ? d.endDate.getHours() : v + 1, h = d.endDate ? d.endDate.getMinutes() : 0, y = v + S / 60, b = m + h / 60, k = b - y, T = g.filter((P) => {
      if (P.id === d.id) return !0;
      if (P.startDate.toDateString() !== d.startDate.toDateString())
        return !1;
      const M = P.startDate.getHours() + P.startDate.getMinutes() / 60, L = (P.endDate ? P.endDate.getHours() : P.startDate.getHours() + 1) + (P.endDate ? P.endDate.getMinutes() / 60 : 0);
      return y < L && b > M;
    }), E = T.length, C = T.findIndex((P) => P.id === d.id), R = E > 1 ? 100 / E : 100, N = E > 1 ? C * R : 0;
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
          children: /* @__PURE__ */ p.jsx(r0, { className: "h-5 w-5" })
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
          children: /* @__PURE__ */ p.jsx(o0, { className: "h-5 w-5" })
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
            w.map((v, S) => {
              const m = t[v.id], h = Bn(m == null ? void 0 : m.category, n), y = Ew(h), b = f(v, w);
              return /* @__PURE__ */ p.jsxs(
                "div",
                {
                  className: `absolute ${y} border rounded p-2 text-sm z-20 overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow event-card`,
                  style: {
                    ...b,
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
function LM({ events: e, eventMetadata: t, categoryMappings: n, initialDate: r, onEventClick: o }) {
  const [s, i] = K.useState(r || /* @__PURE__ */ new Date());
  K.useEffect(() => {
    r && i(r);
  }, [r]);
  const a = Array.from({ length: 24 }, (d, g) => g), l = () => e.filter((d) => d.startDate.toDateString() === s.toDateString()), c = (d) => {
    const g = new Date(s);
    g.setDate(s.getDate() + (d === "next" ? 1 : -1)), i(g);
  }, u = (d, g, w) => {
    const v = d.startDate.getHours(), S = d.startDate.getMinutes(), m = d.endDate ? d.endDate.getHours() : v + 1, h = d.endDate ? d.endDate.getMinutes() : 0, y = v + S / 60, b = m + h / 60, k = b - y, T = g.filter((P) => {
      if (P.id === d.id) return !0;
      const M = P.startDate.getHours() + P.startDate.getMinutes() / 60, L = (P.endDate ? P.endDate.getHours() : P.startDate.getHours() + 1) + (P.endDate ? P.endDate.getMinutes() / 60 : 0);
      return y < L && b > M;
    }), E = T.length, C = T.findIndex((P) => P.id === d.id), R = E > 1 ? 100 / E : 100, N = E > 1 ? C * R : 0;
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
          children: /* @__PURE__ */ p.jsx(r0, { className: "h-5 w-5" })
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
          children: /* @__PURE__ */ p.jsx(o0, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden", children: /* @__PURE__ */ p.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ p.jsx("div", { className: "w-20 border-r border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700", children: a.map((d) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] p-3 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600 flex items-start", children: d === 0 ? "12 AM" : d === 12 ? "12 PM" : d > 12 ? `${d - 12} PM` : `${d} AM` }, d)) }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex-1 relative", children: [
        a.map((d) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] border-b border-gray-200 dark:border-gray-600" }, d)),
        f.map((d, g) => {
          const w = t[d.id], v = Bn(w == null ? void 0 : w.category, n), S = Ew(v), m = u(d, f);
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
                    /* @__PURE__ */ p.jsx(aT, { className: "h-2.5 w-2.5" }),
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
function _M({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onMonthChange: o, currentDate: s }) {
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
    const L = new Date(M.startDate);
    return L.getDate() === P.getDate() && L.getMonth() === P.getMonth() && L.getFullYear() === P.getFullYear();
  }), S = w(), m = u.getFullYear(), h = u.getMonth(), y = new Date(m, h, 1), b = new Date(y);
  b.setDate(b.getDate() - y.getDay());
  const k = [], T = new Date(b), E = new Date(m, h + 1, 0).getDate(), C = y.getDay() + E, N = Math.ceil(C / 7) * 7;
  for (let P = 0; P < N; P++)
    k.push(new Date(T)), T.setDate(T.getDate() + 1);
  return /* @__PURE__ */ p.jsxs(pd, { className: "w-full py-4 mobile-calendar bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700", children: [
    /* @__PURE__ */ p.jsxs(Uy, { className: "px-4", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between mb-4 gap-2", children: [
        /* @__PURE__ */ p.jsxs(
          Jt,
          {
            variant: "outline",
            size: "sm",
            onClick: f,
            className: "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 flex-shrink-0",
            children: [
              /* @__PURE__ */ p.jsx(t0, { className: "h-4 w-4" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Prev" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsx("h3", { className: "text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 text-center flex-1 min-w-0 truncate", children: u.toLocaleDateString("en-US", { month: "long", year: "numeric" }) }),
        /* @__PURE__ */ p.jsxs(
          Jt,
          {
            variant: "outline",
            size: "sm",
            onClick: d,
            className: "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 flex-shrink-0",
            children: [
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Next" }),
              /* @__PURE__ */ p.jsx(n0, { className: "h-4 w-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-7 gap-1 mb-4", children: [
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((P) => /* @__PURE__ */ p.jsx("div", { className: "text-center text-sm font-medium py-2 text-gray-600 dark:text-gray-400", children: P }, P)),
        k.map((P, M) => {
          const L = P.getMonth() === h, _ = i && P.getDate() === i.getDate() && P.getMonth() === i.getMonth() && P.getFullYear() === i.getFullYear(), F = P.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), I = v(P);
          return /* @__PURE__ */ p.jsxs(
            "button",
            {
              onClick: () => a(P),
              className: `
                  p-2 text-sm rounded transition-colors relative focus:outline-none
                  ${L ? "text-gray-900 dark:text-gray-100" : "text-gray-400 dark:text-gray-500"}
                  ${_ ? "bg-blue-500 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-700" : "hover:bg-gray-100 dark:hover:bg-gray-600"}
                  ${F && !_ ? "bg-gray-200 dark:bg-gray-600 font-semibold" : ""}
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
    /* @__PURE__ */ p.jsxs(Lb, { className: "flex flex-col items-start gap-3 border-t border-gray-200 dark:border-gray-600 px-4 !pt-4", children: [
      /* @__PURE__ */ p.jsx("div", { className: "flex w-full items-center justify-between px-1", children: /* @__PURE__ */ p.jsx("div", { className: "text-sm font-medium text-gray-900 dark:text-gray-100", children: i == null ? void 0 : i.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }) }) }),
      /* @__PURE__ */ p.jsx("div", { className: "flex w-full flex-col gap-2", children: S.length === 0 ? /* @__PURE__ */ p.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400 text-center py-4", children: "No events on this day" }) : S.map((P) => {
        const M = t[P.id], L = Bn(M == null ? void 0 : M.category, n), F = qt(L).replace("bg-", "after:bg-");
        return /* @__PURE__ */ p.jsxs(
          "button",
          {
            className: `bg-gray-50 dark:bg-gray-700 relative rounded-md p-2 pl-6 text-sm text-left w-full after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors focus:outline-none ${F}`,
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
function OM({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onLoadMore: o, hasMore: s, loading: i }) {
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
      const w = new Date(d), v = w.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), S = w.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let m;
      return v ? m = "Today" : S ? m = "Tomorrow" : m = w.toLocaleDateString("en-US", {
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
          const y = t[h.id], b = Bn(y == null ? void 0 : y.category, n), T = qt(b).replace("bg-", "after:bg-");
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `bg-muted dark:bg-gray-700 relative rounded-md p-3 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors ${T}`,
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
                        /* @__PURE__ */ p.jsx(js, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: y.location })
                      ] }),
                      (y == null ? void 0 : y.organization) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(Ka, { className: "h-3 w-3" }),
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
function IM({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onLoadMore: o, hasMore: s, loading: i }) {
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
      const w = new Date(d), v = w.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), S = w.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let m;
      return v ? m = "Today" : S ? m = "Tomorrow" : m = w.toLocaleDateString("en-US", {
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
          const y = t[h.id], b = Bn(y == null ? void 0 : y.category, n), T = qt(b).replace("bg-", "after:bg-");
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `bg-muted dark:bg-gray-700 relative rounded-md p-3 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors ${T}`,
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
                        /* @__PURE__ */ p.jsx(js, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: y.location })
                      ] }),
                      (y == null ? void 0 : y.organization) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                        /* @__PURE__ */ p.jsx(Ka, { className: "h-3 w-3" }),
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
function FM({
  initialView: e = "month",
  initialCategoryFilter: t = "all",
  initialOrganizationFilter: n = "all",
  showWeekView: r = !0,
  showDayView: o = !0,
  eventSortOrder: s = "asc"
} = {}) {
  var gf, yf, vf, xf;
  const [i, a] = x.useState(e), [l, c] = x.useState(/* @__PURE__ */ new Date()), [u, f] = x.useState(/* @__PURE__ */ new Date()), [d, g] = x.useState(null), [w, v] = x.useState(!1), [S, m] = x.useState(!1), [h, y] = x.useState(30), [b, k] = x.useState(30), [T, E] = x.useState(15);
  K.useEffect(() => {
    const j = document.querySelector(".unbc-calendar-container");
    if (j) {
      const q = parseInt(j.getAttribute("data-list-initial-items") || "30"), fe = parseInt(j.getAttribute("data-list-load-more-count") || "15");
      k(q), E(fe), y(q);
    }
  }, []), K.useEffect(() => {
    const j = document.createElement("style");
    return j.textContent = `
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

    `, document.head.appendChild(j), () => {
      document.head.removeChild(j);
    };
  }, []), K.useEffect(() => {
    let j;
    const q = () => {
      var Fe;
      const re = (
        // Priority 1: Explicit theme attributes
        document.documentElement.hasAttribute("data-theme") && document.documentElement.getAttribute("data-theme") === "dark" || document.documentElement.hasAttribute("data-color-scheme") && document.documentElement.getAttribute("data-color-scheme") === "dark" || // Priority 2: Theme classes on body or html
        document.body.classList.contains("dark") || document.documentElement.classList.contains("is-dark-theme") || document.body.classList.contains("is-dark-theme") || // Priority 3: Computed styles
        ((Fe = getComputedStyle(document.documentElement).getPropertyValue("--wp--preset--color--background")) == null ? void 0 : Fe.includes("0, 0, 0")) || getComputedStyle(document.body).backgroundColor === "rgb(0, 0, 0)" || // Priority 4: System preference (lowest priority)
        !document.documentElement.hasAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches
      );
      m(re), j && j.disconnect(), re ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"), j && (j.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-theme", "data-color-scheme"] }), j.observe(document.body, { attributes: !0, attributeFilter: ["class"] }));
    };
    q(), j = new MutationObserver(q), j.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-theme", "data-color-scheme"] }), j.observe(document.body, { attributes: !0, attributeFilter: ["class"] });
    const fe = window.matchMedia("(prefers-color-scheme: dark)");
    return fe.addEventListener("change", q), () => {
      j.disconnect(), fe.removeEventListener("change", q);
    };
  }, []);
  const [C, R] = x.useState("all"), [N, P] = x.useState("all"), [M, L] = x.useState(""), [_, F] = x.useState(""), I = K.useMemo(() => {
    const j = new Date(u.getTime()), q = j.getFullYear(), fe = j.getMonth(), re = new Date(q, fe, 1), Fe = new Date(q, fe + 1, 0);
    return {
      per_page: 500,
      start_date: re.toISOString().split("T")[0],
      end_date: Fe.toISOString().split("T")[0],
      year: q,
      month: fe + 1,
      // Calendar Plus uses 1-based months
      category: C === "all" ? "" : C
      // Don't send search to API - handle client-side only for better UX
    };
  }, [u, C]);
  FT(I);
  const B = b0(I), D = $T(), O = k0(), z = UT();
  K.useEffect(() => {
    const j = setTimeout(() => {
      L(_);
    }, 300);
    return () => clearTimeout(j);
  }, [_]);
  const W = K.useMemo(() => {
    var j;
    return ((j = z.config) == null ? void 0 : j.categoriesWithOrganizations) || [];
  }, [z.config]);
  K.useEffect(() => {
    !W.includes(C) && C !== "all" && P("all");
  }, [C, W]);
  const se = B, {
    events: Ee,
    eventMetadata: ne,
    loading: Ie,
    error: De,
    categoryMappings: $
  } = se, ee = D.organizations, Ne = D.loading, { categories: Y, loading: te } = O, J = K.useMemo(
    () => Tw(Y),
    [Y]
  ), ke = K.useMemo(() => $ && Object.keys($).length > 0 ? $ : J, [$, J]), nt = K.useMemo(() => {
    const j = /* @__PURE__ */ new Map();
    return ee.forEach((q) => {
      j.set(q.id.toString(), q.title.rendered);
    }), j;
  }, [ee]), dn = K.useCallback((j, q) => {
    var Fe, fn;
    const fe = ne[j.id];
    if (!fe) return !1;
    const re = (fn = (Fe = z.config) == null ? void 0 : Fe.categoryRelationships) == null ? void 0 : fn[q];
    return re ? re.includes(fe.category) : fe.category === q;
  }, [ne, z.config]), Qe = K.useMemo(() => {
    let j = Ee;
    if (i === "list") {
      const q = /* @__PURE__ */ new Date();
      q.setHours(0, 0, 0, 0), j = j.filter((fe) => {
        const re = new Date(fe.startDate);
        return re.setHours(0, 0, 0, 0), re >= q;
      }), j = j.sort((fe, re) => {
        const Fe = fe.startDate.getTime(), fn = re.startDate.getTime();
        return s === "asc" ? Fe - fn : fn - Fe;
      });
    } else
      j = j.sort((q, fe) => {
        const re = q.startDate.getTime(), Fe = fe.startDate.getTime();
        return s === "asc" ? re - Fe : Fe - re;
      });
    if (C !== "all" && (j = j.filter((q) => dn(q, C))), N !== "all") {
      const q = nt.get(N);
      j = j.filter((fe) => {
        const re = ne[fe.id];
        return q && (re == null ? void 0 : re.organization) === q;
      });
    }
    if (M) {
      const q = M.toLowerCase();
      j = j.filter((fe) => {
        var Fe, fn, wf;
        const re = ne[fe.id];
        return fe.title.toLowerCase().includes(q) || ((Fe = re == null ? void 0 : re.description) == null ? void 0 : Fe.toLowerCase().includes(q)) || ((fn = re == null ? void 0 : re.location) == null ? void 0 : fn.toLowerCase().includes(q)) || ((wf = re == null ? void 0 : re.organization) == null ? void 0 : wf.toLowerCase().includes(q));
      });
    }
    return j;
  }, [Ee, ne, C, N, M, nt, i, dn, s]), Yn = K.useCallback((j) => {
    c(j), a("day");
  }, []), zs = K.useCallback((j) => {
    f(j);
  }, []), St = K.useCallback((j) => {
    g(j), v(!0);
  }, []), mf = K.useCallback(() => {
    y((j) => j + T);
  }, [T]);
  return K.useEffect(() => {
    i === "list" && y(b);
  }, [i, C, N, M, b]), (Ie || Ne || te) && (!Ee || Ee.length === 0) ? /* @__PURE__ */ p.jsx("div", { className: "w-full flex items-center justify-center py-12", children: /* @__PURE__ */ p.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ p.jsx(_i, { className: "h-8 w-8 animate-spin mx-auto mb-4" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-gray-600", children: "Loading calendar..." })
  ] }) }) : De ? /* @__PURE__ */ p.jsx("div", { className: "w-full py-12", children: /* @__PURE__ */ p.jsx(pd, { className: "max-w-md mx-auto", children: /* @__PURE__ */ p.jsxs(Uy, { className: "pt-6 text-center", children: [
    /* @__PURE__ */ p.jsxs("p", { className: "text-red-600 mb-4", children: [
      "Error loading events: ",
      De
    ] }),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        onClick: () => window.location.reload(),
        className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
        children: "Retry"
      }
    )
  ] }) }) }) : /* @__PURE__ */ p.jsxs("div", { id: "unbc-calendar-react-component", "data-calendar-isolated": "true", className: `w-full space-y-6 ${S ? "dark" : ""}`, children: [
    /* @__PURE__ */ p.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm unbc-calendar-view", children: /* @__PURE__ */ p.jsxs(_T, { value: i, onValueChange: a, className: "w-full", children: [
      /* @__PURE__ */ p.jsx("div", { className: "hidden md:block p-6 pb-0", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsxs(ci, { value: C, onValueChange: R, children: [
            /* @__PURE__ */ p.jsx(ui, { className: "w-40 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${C === "all" ? "bg-gray-400" : qt(((gf = Y.find((j) => j.slug === C)) == null ? void 0 : gf.variant) || "default")}` }),
              /* @__PURE__ */ p.jsx("span", { children: C === "all" ? "All Categories" : ((yf = Y.find((j) => j.slug === C)) == null ? void 0 : yf.name) || "All Categories" })
            ] }) }),
            /* @__PURE__ */ p.jsxs(di, { className: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 z-[9999] shadow-lg", children: [
              /* @__PURE__ */ p.jsx(gn, { value: "all", className: "text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700 focus:outline-none", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                /* @__PURE__ */ p.jsx("span", { className: "w-3 h-3 rounded-full flex-shrink-0 bg-gray-400" }),
                /* @__PURE__ */ p.jsx("span", { children: "All" })
              ] }) }),
              Y.map((j) => /* @__PURE__ */ p.jsx(
                gn,
                {
                  value: j.slug,
                  className: "text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700 focus:outline-none",
                  children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                    /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${qt(j.variant || "default")}` }),
                    /* @__PURE__ */ p.jsx("span", { children: j.name })
                  ] })
                },
                j.id
              ))
            ] })
          ] }),
          W.includes(C) && /* @__PURE__ */ p.jsxs(ci, { value: N, onValueChange: P, children: [
            /* @__PURE__ */ p.jsx(ui, { className: "w-44 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 [&>span]:truncate [&>span]:block", children: /* @__PURE__ */ p.jsx(rh, { placeholder: "All Organizations" }) }),
            /* @__PURE__ */ p.jsxs(di, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 max-h-[200px] overflow-y-auto", children: [
              /* @__PURE__ */ p.jsx(gn, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Organizations" }),
              ee.map((j) => /* @__PURE__ */ p.jsx(
                gn,
                {
                  value: j.id.toString(),
                  className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600",
                  children: j.title.rendered
                },
                j.id
              ))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ p.jsxs(oh, { className: "h-9 bg-gray-100 dark:bg-gray-700 p-1", children: [
          o && /* @__PURE__ */ p.jsxs(Xn, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(so, { className: "h-3 w-3" }),
            "Day"
          ] }),
          r && /* @__PURE__ */ p.jsxs(Xn, { value: "week", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(Li, { className: "h-3 w-3" }),
            "Week"
          ] }),
          /* @__PURE__ */ p.jsxs(Xn, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(Ss, { className: "h-3 w-3" }),
            "Month"
          ] }),
          /* @__PURE__ */ p.jsxs(Xn, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(nh, { className: "h-3 w-3" }),
            "List"
          ] })
        ] }) }),
        /* @__PURE__ */ p.jsxs("div", { className: "flex-shrink-0 flex items-center gap-2", children: [
          Ie && Ee && Ee.length > 0 && /* @__PURE__ */ p.jsx(_i, { className: "h-4 w-4 animate-spin text-gray-500" }),
          /* @__PURE__ */ p.jsx(
            eu,
            {
              placeholder: "Search events...",
              value: _,
              onChange: (j) => F(j.target.value),
              className: "w-40 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "md:hidden", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "px-4 py-4 flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ p.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ p.jsxs(ci, { value: C, onValueChange: R, children: [
            /* @__PURE__ */ p.jsx(ui, { className: "w-auto min-w-[60px] h-9 px-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${C === "all" ? "bg-gray-400" : qt(((vf = Y.find((j) => j.slug === C)) == null ? void 0 : vf.variant) || "default")}` }),
              /* @__PURE__ */ p.jsx("span", { className: "text-xs truncate max-w-[60px]", children: C === "all" ? "All" : ((xf = Y.find((j) => j.slug === C)) == null ? void 0 : xf.name) || "All" })
            ] }) }),
            /* @__PURE__ */ p.jsxs(di, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 z-[9999]", children: [
              /* @__PURE__ */ p.jsx(gn, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                /* @__PURE__ */ p.jsx("span", { className: "w-3 h-3 rounded-full flex-shrink-0 bg-gray-400" }),
                /* @__PURE__ */ p.jsx("span", { children: "All" })
              ] }) }),
              Y.map((j) => /* @__PURE__ */ p.jsx(
                gn,
                {
                  value: j.slug,
                  className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600",
                  children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                    /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${qt(j.variant || "default")}` }),
                    /* @__PURE__ */ p.jsx("span", { children: j.name })
                  ] })
                },
                j.id
              ))
            ] })
          ] }) }),
          /* @__PURE__ */ p.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ p.jsxs(oh, { className: "h-9 bg-gray-100 dark:bg-gray-700 p-1", children: [
            o && /* @__PURE__ */ p.jsxs(Xn, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300 flex-1", children: [
              /* @__PURE__ */ p.jsx(so, { className: "h-3 w-3" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Day" })
            ] }),
            /* @__PURE__ */ p.jsxs(Xn, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300 flex-1", children: [
              /* @__PURE__ */ p.jsx(Ss, { className: "h-3 w-3" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Month" })
            ] }),
            /* @__PURE__ */ p.jsxs(Xn, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300 flex-1", children: [
              /* @__PURE__ */ p.jsx(nh, { className: "h-3 w-3" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "List" })
            ] })
          ] }) }),
          /* @__PURE__ */ p.jsxs("div", { className: "flex-shrink-0 flex items-center gap-2", children: [
            Ie && Ee && Ee.length > 0 && /* @__PURE__ */ p.jsx(_i, { className: "h-4 w-4 animate-spin text-gray-500" }),
            /* @__PURE__ */ p.jsx(
              Jt,
              {
                variant: "outline",
                size: "sm",
                className: "h-9 px-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
                onClick: () => {
                  const j = document.querySelector(".mobile-search-input");
                  j && (j.style.display = j.style.display === "none" ? "block" : "none", j.style.display !== "none" && j.focus());
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
            value: _,
            onChange: (j) => F(j.target.value),
            className: "mobile-search-input w-full h-9 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400",
            style: { display: "none" }
          }
        ) }),
        W.includes(C) && /* @__PURE__ */ p.jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ p.jsxs(ci, { value: N, onValueChange: P, children: [
          /* @__PURE__ */ p.jsx(ui, { className: "w-full h-9 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsx(rh, { placeholder: "All Organizations", className: "truncate" }) }),
          /* @__PURE__ */ p.jsxs(di, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 max-h-[200px] overflow-y-auto", children: [
            /* @__PURE__ */ p.jsx(gn, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Organizations" }),
            ee.map((j) => /* @__PURE__ */ p.jsx(
              gn,
              {
                value: j.id.toString(),
                className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600",
                children: j.title.rendered
              },
              j.id
            ))
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ p.jsxs(pi, { value: "month", className: "px-6 pb-6 md:p-6", children: [
        /* @__PURE__ */ p.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ p.jsx(
          RM,
          {
            events: Qe,
            eventMetadata: ne,
            categoryMappings: ke,
            onDateClick: Yn,
            onEventClick: St,
            onMonthChange: zs,
            currentDate: u
          }
        ) }),
        /* @__PURE__ */ p.jsx("div", { className: "block md:hidden mobile-calendar", children: /* @__PURE__ */ p.jsx(
          _M,
          {
            events: Qe,
            eventMetadata: ne,
            categoryMappings: ke,
            onEventClick: St,
            onMonthChange: zs,
            currentDate: u
          }
        ) })
      ] }),
      /* @__PURE__ */ p.jsx(pi, { value: "week", className: "px-6 pb-6 md:p-6", children: /* @__PURE__ */ p.jsx(
        jM,
        {
          events: Qe,
          eventMetadata: ne,
          categoryMappings: ke,
          onEventClick: St
        }
      ) }),
      /* @__PURE__ */ p.jsx(pi, { value: "day", className: "px-6 pb-6 md:p-6", children: /* @__PURE__ */ p.jsx(
        LM,
        {
          events: Qe,
          eventMetadata: ne,
          categoryMappings: ke,
          initialDate: l,
          onEventClick: St
        }
      ) }),
      /* @__PURE__ */ p.jsxs(pi, { value: "list", className: "px-6 pb-6 md:p-6", children: [
        /* @__PURE__ */ p.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ p.jsx(
          OM,
          {
            events: Qe.slice(0, h),
            eventMetadata: ne,
            categoryMappings: ke,
            onEventClick: St,
            onLoadMore: mf,
            hasMore: Qe.length > h,
            loading: Ie
          }
        ) }),
        /* @__PURE__ */ p.jsx("div", { className: "block md:hidden", children: /* @__PURE__ */ p.jsx(
          IM,
          {
            events: Qe.slice(0, h),
            eventMetadata: ne,
            categoryMappings: ke,
            onEventClick: St,
            onLoadMore: mf,
            hasMore: Qe.length > h,
            loading: Ie
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsx(
      X0,
      {
        event: d,
        eventMetadata: ne,
        open: w,
        onOpenChange: v
      }
    )
  ] });
}
function VM({
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
      var S;
      const v = t[w.id];
      return o ? (v == null ? void 0 : v.organization) === o : r ? ((S = v == null ? void 0 : v.organization_id) == null ? void 0 : S.toString()) === r : !0;
    })), i || (f = f.filter((w) => w.startDate >= d)), f.sort((w, v) => w.startDate.getTime() - v.startDate.getTime()), s && s > 0 && (f = f.slice(0, s));
    const g = f.reduce((w, v) => {
      const S = v.startDate.toDateString();
      return w[S] || (w[S] = []), w[S].push(v), w;
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
            d.length,
            " event",
            d.length > 1 ? "s" : ""
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: d.map((m) => {
          const h = t[m.id], y = Bn(h == null ? void 0 : h.category, n), b = AM(y);
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
                      /* @__PURE__ */ p.jsx(so, { className: "h-3 w-3" }),
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
function Pw({
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
  } = b0({
    view: "list",
    // Use list view for organization pages
    organization: e
    // Filter by organization
  }), { categories: g } = k0(), w = K.useMemo(
    () => Tw(g),
    [g]
  ), v = K.useMemo(() => d && Object.keys(d).length > 0 ? d : w, [d, w]), S = (m) => {
    s(m), a(!0);
  };
  return u ? /* @__PURE__ */ p.jsx("div", { className: "w-full flex items-center justify-center py-8", children: /* @__PURE__ */ p.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ p.jsx(_i, { className: "h-6 w-6 animate-spin mx-auto mb-2" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-gray-600 text-sm", children: "Loading events..." })
  ] }) }) : f ? /* @__PURE__ */ p.jsx("div", { className: "w-full py-8", children: /* @__PURE__ */ p.jsx("div", { className: "max-w-md mx-auto bg-red-50 border border-red-200 rounded-lg p-4", children: /* @__PURE__ */ p.jsxs("p", { className: "text-red-600 text-sm", children: [
    "Error loading events: ",
    f
  ] }) }) }) : /* @__PURE__ */ p.jsxs("div", { className: "unbc-organization-events", children: [
    /* @__PURE__ */ p.jsx(
      VM,
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
      X0,
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
  const n = Fa(t), r = t.dataset.view || "month", o = t.dataset.categoryFilter || "all", s = t.dataset.organizationFilter || "all", i = t.dataset.showWeekView !== "false", a = t.dataset.showDayView !== "false", l = t.dataset.eventSortOrder || "asc";
  n.render(
    /* @__PURE__ */ p.jsx(K.StrictMode, { children: /* @__PURE__ */ p.jsx(
      FM,
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
  const n = Fa(t), r = t.dataset.organizationId || "", o = t.dataset.organizationName || "", s = parseInt(t.dataset.limit) || 5, i = t.dataset.showPast === "true";
  n.render(
    /* @__PURE__ */ p.jsx(K.StrictMode, { children: /* @__PURE__ */ p.jsx(
      Pw,
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
    /* @__PURE__ */ p.jsx(K.StrictMode, { children: /* @__PURE__ */ p.jsx(
      Pw,
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
