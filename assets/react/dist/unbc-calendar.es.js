function Ow(e, t) {
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
function Mm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Am = { exports: {} }, Ta = {}, jm = { exports: {} }, Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var js = Symbol.for("react.element"), Fw = Symbol.for("react.portal"), Vw = Symbol.for("react.fragment"), zw = Symbol.for("react.strict_mode"), Bw = Symbol.for("react.profiler"), $w = Symbol.for("react.provider"), Uw = Symbol.for("react.context"), Ww = Symbol.for("react.forward_ref"), Hw = Symbol.for("react.suspense"), Kw = Symbol.for("react.memo"), Gw = Symbol.for("react.lazy"), Df = Symbol.iterator;
function Yw(e) {
  return e === null || typeof e != "object" ? null : (e = Df && e[Df] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Rm = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Lm = Object.assign, _m = {};
function mo(e, t, n) {
  this.props = e, this.context = t, this.refs = _m, this.updater = n || Rm;
}
mo.prototype.isReactComponent = {};
mo.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
mo.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Im() {
}
Im.prototype = mo.prototype;
function bu(e, t, n) {
  this.props = e, this.context = t, this.refs = _m, this.updater = n || Rm;
}
var Cu = bu.prototype = new Im();
Cu.constructor = bu;
Lm(Cu, mo.prototype);
Cu.isPureReactComponent = !0;
var Nf = Array.isArray, Om = Object.prototype.hasOwnProperty, ku = { current: null }, Fm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vm(e, t, n) {
  var r, o = {}, s = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (s = "" + t.key), t) Om.call(t, r) && !Fm.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    o.children = l;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: js, type: e, key: s, ref: i, props: o, _owner: ku.current };
}
function Xw(e, t) {
  return { $$typeof: js, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Eu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === js;
}
function Qw(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Mf = /\/+/g;
function sl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Qw("" + e.key) : t.toString(36);
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
        case js:
        case Fw:
          i = !0;
      }
  }
  if (i) return i = e, o = o(i), e = r === "" ? "." + sl(i, 0) : r, Nf(o) ? (n = "", e != null && (n = e.replace(Mf, "$&/") + "/"), Ci(o, t, n, "", function(c) {
    return c;
  })) : o != null && (Eu(o) && (o = Xw(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Mf, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Nf(e)) for (var a = 0; a < e.length; a++) {
    s = e[a];
    var l = r + sl(s, a);
    i += Ci(s, t, n, l, o);
  }
  else if (l = Yw(e), typeof l == "function") for (e = l.call(e), a = 0; !(s = e.next()).done; ) s = s.value, l = r + sl(s, a++), i += Ci(s, t, n, l, o);
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
function qw(e) {
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
var qe = { current: null }, ki = { transition: null }, Zw = { ReactCurrentDispatcher: qe, ReactCurrentBatchConfig: ki, ReactCurrentOwner: ku };
function zm() {
  throw Error("act(...) is not supported in production builds of React.");
}
Z.Children = { map: Hs, forEach: function(e, t, n) {
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
Z.Component = mo;
Z.Fragment = Vw;
Z.Profiler = Bw;
Z.PureComponent = bu;
Z.StrictMode = zw;
Z.Suspense = Hw;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zw;
Z.act = zm;
Z.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Lm({}, e.props), o = e.key, s = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, i = ku.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) Om.call(t, l) && !Fm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: js, type: e.type, key: o, ref: s, props: r, _owner: i };
};
Z.createContext = function(e) {
  return e = { $$typeof: Uw, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: $w, _context: e }, e.Consumer = e;
};
Z.createElement = Vm;
Z.createFactory = function(e) {
  var t = Vm.bind(null, e);
  return t.type = e, t;
};
Z.createRef = function() {
  return { current: null };
};
Z.forwardRef = function(e) {
  return { $$typeof: Ww, render: e };
};
Z.isValidElement = Eu;
Z.lazy = function(e) {
  return { $$typeof: Gw, _payload: { _status: -1, _result: e }, _init: qw };
};
Z.memo = function(e, t) {
  return { $$typeof: Kw, type: e, compare: t === void 0 ? null : t };
};
Z.startTransition = function(e) {
  var t = ki.transition;
  ki.transition = {};
  try {
    e();
  } finally {
    ki.transition = t;
  }
};
Z.unstable_act = zm;
Z.useCallback = function(e, t) {
  return qe.current.useCallback(e, t);
};
Z.useContext = function(e) {
  return qe.current.useContext(e);
};
Z.useDebugValue = function() {
};
Z.useDeferredValue = function(e) {
  return qe.current.useDeferredValue(e);
};
Z.useEffect = function(e, t) {
  return qe.current.useEffect(e, t);
};
Z.useId = function() {
  return qe.current.useId();
};
Z.useImperativeHandle = function(e, t, n) {
  return qe.current.useImperativeHandle(e, t, n);
};
Z.useInsertionEffect = function(e, t) {
  return qe.current.useInsertionEffect(e, t);
};
Z.useLayoutEffect = function(e, t) {
  return qe.current.useLayoutEffect(e, t);
};
Z.useMemo = function(e, t) {
  return qe.current.useMemo(e, t);
};
Z.useReducer = function(e, t, n) {
  return qe.current.useReducer(e, t, n);
};
Z.useRef = function(e) {
  return qe.current.useRef(e);
};
Z.useState = function(e) {
  return qe.current.useState(e);
};
Z.useSyncExternalStore = function(e, t, n) {
  return qe.current.useSyncExternalStore(e, t, n);
};
Z.useTransition = function() {
  return qe.current.useTransition();
};
Z.version = "18.3.1";
jm.exports = Z;
var x = jm.exports;
const G = /* @__PURE__ */ Mm(x), Bm = /* @__PURE__ */ Ow({
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
var Jw = x, e1 = Symbol.for("react.element"), t1 = Symbol.for("react.fragment"), n1 = Object.prototype.hasOwnProperty, r1 = Jw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function $m(e, t, n) {
  var r, o = {}, s = null, i = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) n1.call(t, r) && !o1.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: e1, type: e, key: s, ref: i, props: o, _owner: r1.current };
}
Ta.Fragment = t1;
Ta.jsx = $m;
Ta.jsxs = $m;
Am.exports = Ta;
var p = Am.exports, Um = { exports: {} }, ht = {}, Wm = { exports: {} }, Hm = {};
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
  function t(P, _) {
    var F = P.length;
    P.push(_);
    e: for (; 0 < F; ) {
      var Y = F - 1 >>> 1, ne = P[Y];
      if (0 < o(ne, _)) P[Y] = _, P[F] = ne, F = Y;
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var _ = P[0], F = P.pop();
    if (F !== _) {
      P[0] = F;
      e: for (var Y = 0, ne = P.length, ze = ne >>> 1; Y < ze; ) {
        var ke = 2 * (Y + 1) - 1, Ye = P[ke], Pe = ke + 1, H = P[Pe];
        if (0 > o(Ye, F)) Pe < ne && 0 > o(H, Ye) ? (P[Y] = H, P[Pe] = F, Y = Pe) : (P[Y] = Ye, P[ke] = F, Y = ke);
        else if (Pe < ne && 0 > o(H, F)) P[Y] = H, P[Pe] = F, Y = Pe;
        else break e;
      }
    }
    return _;
  }
  function o(P, _) {
    var F = P.sortIndex - _.sortIndex;
    return F !== 0 ? F : P.id - _.id;
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
  var l = [], c = [], d = 1, u = null, f = 3, v = !1, w = !1, m = !1, S = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(P) {
    for (var _ = n(c); _ !== null; ) {
      if (_.callback === null) r(c);
      else if (_.startTime <= P) r(c), _.sortIndex = _.expirationTime, t(l, _);
      else break;
      _ = n(c);
    }
  }
  function b(P) {
    if (m = !1, y(P), !w) if (n(l) !== null) w = !0, R(C);
    else {
      var _ = n(c);
      _ !== null && U(b, _.startTime - P);
    }
  }
  function C(P, _) {
    w = !1, m && (m = !1, g(T), T = -1), v = !0;
    var F = f;
    try {
      for (y(_), u = n(l); u !== null && (!(u.expirationTime > _) || P && !D()); ) {
        var Y = u.callback;
        if (typeof Y == "function") {
          u.callback = null, f = u.priorityLevel;
          var ne = Y(u.expirationTime <= _);
          _ = e.unstable_now(), typeof ne == "function" ? u.callback = ne : u === n(l) && r(l), y(_);
        } else r(l);
        u = n(l);
      }
      if (u !== null) var ze = !0;
      else {
        var ke = n(c);
        ke !== null && U(b, ke.startTime - _), ze = !1;
      }
      return ze;
    } finally {
      u = null, f = F, v = !1;
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
      var _ = !0;
      try {
        _ = E(!0, P);
      } finally {
        _ ? O() : (k = !1, E = null);
      }
    } else k = !1;
  }
  var O;
  if (typeof h == "function") O = function() {
    h(N);
  };
  else if (typeof MessageChannel < "u") {
    var $ = new MessageChannel(), W = $.port2;
    $.port1.onmessage = N, O = function() {
      W.postMessage(null);
    };
  } else O = function() {
    S(N, 0);
  };
  function R(P) {
    E = P, k || (k = !0, O());
  }
  function U(P, _) {
    T = S(function() {
      P(e.unstable_now());
    }, _);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    w || v || (w = !0, R(C));
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
        var _ = 3;
        break;
      default:
        _ = f;
    }
    var F = f;
    f = _;
    try {
      return P();
    } finally {
      f = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, _) {
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
    var F = f;
    f = P;
    try {
      return _();
    } finally {
      f = F;
    }
  }, e.unstable_scheduleCallback = function(P, _, F) {
    var Y = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? Y + F : Y) : F = Y, P) {
      case 1:
        var ne = -1;
        break;
      case 2:
        ne = 250;
        break;
      case 5:
        ne = 1073741823;
        break;
      case 4:
        ne = 1e4;
        break;
      default:
        ne = 5e3;
    }
    return ne = F + ne, P = { id: d++, callback: _, priorityLevel: P, startTime: F, expirationTime: ne, sortIndex: -1 }, F > Y ? (P.sortIndex = F, t(c, P), n(l) === null && P === n(c) && (m ? (g(T), T = -1) : m = !0, U(b, F - Y))) : (P.sortIndex = ne, t(l, P), w || v || (w = !0, R(C))), P;
  }, e.unstable_shouldYield = D, e.unstable_wrapCallback = function(P) {
    var _ = f;
    return function() {
      var F = f;
      f = _;
      try {
        return P.apply(this, arguments);
      } finally {
        f = F;
      }
    };
  };
})(Hm);
Wm.exports = Hm;
var s1 = Wm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var i1 = x, ft = s1;
function A(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Km = /* @__PURE__ */ new Set(), ss = {};
function wr(e, t) {
  to(e, t), to(e + "Capture", t);
}
function to(e, t) {
  for (ss[e] = t, e = 0; e < t.length; e++) Km.add(t[e]);
}
var on = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), tc = Object.prototype.hasOwnProperty, a1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Af = {}, jf = {};
function l1(e) {
  return tc.call(jf, e) ? !0 : tc.call(Af, e) ? !1 : a1.test(e) ? jf[e] = !0 : (Af[e] = !0, !1);
}
function c1(e, t, n, r) {
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
function u1(e, t, n, r) {
  if (t === null || typeof t > "u" || c1(e, t, n, r)) return !0;
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
var Ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ve[e] = new Ze(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ve[t] = new Ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ve[e] = new Ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ve[e] = new Ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ve[e] = new Ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ve[e] = new Ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ve[e] = new Ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ve[e] = new Ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ve[e] = new Ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  Ve[t] = new Ze(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Tu, Pu);
  Ve[t] = new Ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Tu, Pu);
  Ve[t] = new Ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ve[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ve.xlinkHref = new Ze("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ve[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Du(e, t, n, r) {
  var o = Ve.hasOwnProperty(t) ? Ve[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (u1(t, n, o, r) && (n = null), r || o === null ? l1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var fn = i1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ks = Symbol.for("react.element"), Nr = Symbol.for("react.portal"), Mr = Symbol.for("react.fragment"), Nu = Symbol.for("react.strict_mode"), nc = Symbol.for("react.profiler"), Gm = Symbol.for("react.provider"), Ym = Symbol.for("react.context"), Mu = Symbol.for("react.forward_ref"), rc = Symbol.for("react.suspense"), oc = Symbol.for("react.suspense_list"), Au = Symbol.for("react.memo"), Cn = Symbol.for("react.lazy"), Xm = Symbol.for("react.offscreen"), Rf = Symbol.iterator;
function Po(e) {
  return e === null || typeof e != "object" ? null : (e = Rf && e[Rf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var xe = Object.assign, il;
function Fo(e) {
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
  return (e = e ? e.displayName || e.name : "") ? Fo(e) : "";
}
function d1(e) {
  switch (e.tag) {
    case 5:
      return Fo(e.type);
    case 16:
      return Fo("Lazy");
    case 13:
      return Fo("Suspense");
    case 19:
      return Fo("SuspenseList");
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
    case Ym:
      return (e.displayName || "Context") + ".Consumer";
    case Gm:
      return (e._context.displayName || "Context") + ".Provider";
    case Mu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Au:
      return t = e.displayName || null, t !== null ? t : sc(e.type) || "Memo";
    case Cn:
      t = e._payload, e = e._init;
      try {
        return sc(e(t));
      } catch {
      }
  }
  return null;
}
function f1(e) {
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
function Fn(e) {
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
function Qm(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function p1(e) {
  var t = Qm(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = p1(e));
}
function qm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Qm(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
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
  return xe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Lf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Fn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Zm(e, t) {
  t = t.checked, t != null && Du(e, "checked", t, !1);
}
function ac(e, t) {
  Zm(e, t);
  var n = Fn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? lc(e, t.type, n) : t.hasOwnProperty("defaultValue") && lc(e, t.type, Fn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function _f(e, t, n) {
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
var Vo = Array.isArray;
function Kr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Fn(n), t = null, o = 0; o < e.length; o++) {
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
  return xe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function If(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(A(92));
      if (Vo(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Fn(n) };
}
function Jm(e, t) {
  var n = Fn(t.value), r = Fn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Of(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function eg(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? eg(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ys, tg = function(e) {
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
function is(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ko = {
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
}, h1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ko).forEach(function(e) {
  h1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Ko[t] = Ko[e];
  });
});
function ng(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ko.hasOwnProperty(e) && Ko[e] ? ("" + t).trim() : t + "px";
}
function rg(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = ng(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var m1 = xe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function dc(e, t) {
  if (t) {
    if (m1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(A(137, e));
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
function Ff(e) {
  if (e = _s(e)) {
    if (typeof hc != "function") throw Error(A(280));
    var t = e.stateNode;
    t && (t = Aa(t), hc(e.stateNode, e.type, t));
  }
}
function og(e) {
  Gr ? Yr ? Yr.push(e) : Yr = [e] : Gr = e;
}
function sg() {
  if (Gr) {
    var e = Gr, t = Yr;
    if (Yr = Gr = null, Ff(e), t) for (e = 0; e < t.length; e++) Ff(t[e]);
  }
}
function ig(e, t) {
  return e(t);
}
function ag() {
}
var cl = !1;
function lg(e, t, n) {
  if (cl) return e(t, n);
  cl = !0;
  try {
    return ig(e, t, n);
  } finally {
    cl = !1, (Gr !== null || Yr !== null) && (ag(), sg());
  }
}
function as(e, t) {
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
if (on) try {
  var Do = {};
  Object.defineProperty(Do, "passive", { get: function() {
    mc = !0;
  } }), window.addEventListener("test", Do, Do), window.removeEventListener("test", Do, Do);
} catch {
  mc = !1;
}
function g1(e, t, n, r, o, s, i, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var Go = !1, Wi = null, Hi = !1, gc = null, v1 = { onError: function(e) {
  Go = !0, Wi = e;
} };
function y1(e, t, n, r, o, s, i, a, l) {
  Go = !1, Wi = null, g1.apply(v1, arguments);
}
function x1(e, t, n, r, o, s, i, a, l) {
  if (y1.apply(this, arguments), Go) {
    if (Go) {
      var c = Wi;
      Go = !1, Wi = null;
    } else throw Error(A(198));
    Hi || (Hi = !0, gc = c);
  }
}
function Sr(e) {
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
function cg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Vf(e) {
  if (Sr(e) !== e) throw Error(A(188));
}
function w1(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Sr(e), t === null) throw Error(A(188));
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
        if (s === n) return Vf(o), e;
        if (s === r) return Vf(o), t;
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
function ug(e) {
  return e = w1(e), e !== null ? dg(e) : null;
}
function dg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = dg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var fg = ft.unstable_scheduleCallback, zf = ft.unstable_cancelCallback, S1 = ft.unstable_shouldYield, b1 = ft.unstable_requestPaint, Te = ft.unstable_now, C1 = ft.unstable_getCurrentPriorityLevel, Ru = ft.unstable_ImmediatePriority, pg = ft.unstable_UserBlockingPriority, Ki = ft.unstable_NormalPriority, k1 = ft.unstable_LowPriority, hg = ft.unstable_IdlePriority, Pa = null, $t = null;
function E1(e) {
  if ($t && typeof $t.onCommitFiberRoot == "function") try {
    $t.onCommitFiberRoot(Pa, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Mt = Math.clz32 ? Math.clz32 : D1, T1 = Math.log, P1 = Math.LN2;
function D1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (T1(e) / P1 | 0) | 0;
}
var Xs = 64, Qs = 4194304;
function zo(e) {
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
    a !== 0 ? r = zo(a) : (s &= i, s !== 0 && (r = zo(s)));
  } else i = n & ~o, i !== 0 ? r = zo(i) : s !== 0 && (r = zo(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, s = t & -t, o >= s || o === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Mt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function N1(e, t) {
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
function M1(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var i = 31 - Mt(s), a = 1 << i, l = o[i];
    l === -1 ? (!(a & n) || a & r) && (o[i] = N1(a, t)) : l <= t && (e.expiredLanes |= a), s &= ~a;
  }
}
function vc(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function mg() {
  var e = Xs;
  return Xs <<= 1, !(Xs & 4194240) && (Xs = 64), e;
}
function ul(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Rs(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Mt(t), e[t] = n;
}
function A1(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Mt(n), s = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~s;
  }
}
function Lu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Mt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var ie = 0;
function gg(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var vg, _u, yg, xg, wg, yc = !1, qs = [], Nn = null, Mn = null, An = null, ls = /* @__PURE__ */ new Map(), cs = /* @__PURE__ */ new Map(), En = [], j1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Bf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Nn = null;
      break;
    case "dragenter":
    case "dragleave":
      Mn = null;
      break;
    case "mouseover":
    case "mouseout":
      An = null;
      break;
    case "pointerover":
    case "pointerout":
      ls.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      cs.delete(t.pointerId);
  }
}
function No(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [o] }, t !== null && (t = _s(t), t !== null && _u(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function R1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Nn = No(Nn, e, t, n, r, o), !0;
    case "dragenter":
      return Mn = No(Mn, e, t, n, r, o), !0;
    case "mouseover":
      return An = No(An, e, t, n, r, o), !0;
    case "pointerover":
      var s = o.pointerId;
      return ls.set(s, No(ls.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return s = o.pointerId, cs.set(s, No(cs.get(s) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Sg(e) {
  var t = or(e.target);
  if (t !== null) {
    var n = Sr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = cg(n), t !== null) {
          e.blockedOn = t, wg(e.priority, function() {
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
function Ei(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      pc = r, n.target.dispatchEvent(r), pc = null;
    } else return t = _s(n), t !== null && _u(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function $f(e, t, n) {
  Ei(e) && n.delete(t);
}
function L1() {
  yc = !1, Nn !== null && Ei(Nn) && (Nn = null), Mn !== null && Ei(Mn) && (Mn = null), An !== null && Ei(An) && (An = null), ls.forEach($f), cs.forEach($f);
}
function Mo(e, t) {
  e.blockedOn === t && (e.blockedOn = null, yc || (yc = !0, ft.unstable_scheduleCallback(ft.unstable_NormalPriority, L1)));
}
function us(e) {
  function t(o) {
    return Mo(o, e);
  }
  if (0 < qs.length) {
    Mo(qs[0], e);
    for (var n = 1; n < qs.length; n++) {
      var r = qs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Nn !== null && Mo(Nn, e), Mn !== null && Mo(Mn, e), An !== null && Mo(An, e), ls.forEach(t), cs.forEach(t), n = 0; n < En.length; n++) r = En[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < En.length && (n = En[0], n.blockedOn === null); ) Sg(n), n.blockedOn === null && En.shift();
}
var Xr = fn.ReactCurrentBatchConfig, Yi = !0;
function _1(e, t, n, r) {
  var o = ie, s = Xr.transition;
  Xr.transition = null;
  try {
    ie = 1, Iu(e, t, n, r);
  } finally {
    ie = o, Xr.transition = s;
  }
}
function I1(e, t, n, r) {
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
    if (o === null) wl(e, t, r, Xi, n), Bf(e, r);
    else if (R1(o, e, t, n, r)) r.stopPropagation();
    else if (Bf(e, r), t & 4 && -1 < j1.indexOf(e)) {
      for (; o !== null; ) {
        var s = _s(o);
        if (s !== null && vg(s), s = xc(e, t, n, r), s === null && wl(e, t, r, Xi, n), s === o) break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else wl(e, t, r, null, n);
  }
}
var Xi = null;
function xc(e, t, n, r) {
  if (Xi = null, e = ju(r), e = or(e), e !== null) if (t = Sr(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = cg(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Xi = e, null;
}
function bg(e) {
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
      switch (C1()) {
        case Ru:
          return 1;
        case pg:
          return 4;
        case Ki:
        case k1:
          return 16;
        case hg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Pn = null, Ou = null, Ti = null;
function Cg() {
  if (Ti) return Ti;
  var e, t = Ou, n = t.length, r, o = "value" in Pn ? Pn.value : Pn.textContent, s = o.length;
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
function Uf() {
  return !1;
}
function mt(e) {
  function t(n, r, o, s, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = s, this.target = i, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(s) : s[a]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Zs : Uf, this.isPropagationStopped = Uf, this;
  }
  return xe(t.prototype, { preventDefault: function() {
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
}, defaultPrevented: 0, isTrusted: 0 }, Fu = mt(go), Ls = xe({}, go, { view: 0, detail: 0 }), O1 = mt(Ls), dl, fl, Ao, Da = xe({}, Ls, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Vu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Ao && (Ao && e.type === "mousemove" ? (dl = e.screenX - Ao.screenX, fl = e.screenY - Ao.screenY) : fl = dl = 0, Ao = e), dl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : fl;
} }), Wf = mt(Da), F1 = xe({}, Da, { dataTransfer: 0 }), V1 = mt(F1), z1 = xe({}, Ls, { relatedTarget: 0 }), pl = mt(z1), B1 = xe({}, go, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), $1 = mt(B1), U1 = xe({}, go, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), W1 = mt(U1), H1 = xe({}, go, { data: 0 }), Hf = mt(H1), K1 = {
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
}, G1 = {
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
}, Y1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function X1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Y1[e]) ? !!t[e] : !1;
}
function Vu() {
  return X1;
}
var Q1 = xe({}, Ls, { key: function(e) {
  if (e.key) {
    var t = K1[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Pi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? G1[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Vu, charCode: function(e) {
  return e.type === "keypress" ? Pi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Pi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), q1 = mt(Q1), Z1 = xe({}, Da, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Kf = mt(Z1), J1 = xe({}, Ls, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Vu }), eS = mt(J1), tS = xe({}, go, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), nS = mt(tS), rS = xe({}, Da, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), oS = mt(rS), sS = [9, 13, 27, 32], zu = on && "CompositionEvent" in window, Yo = null;
on && "documentMode" in document && (Yo = document.documentMode);
var iS = on && "TextEvent" in window && !Yo, kg = on && (!zu || Yo && 8 < Yo && 11 >= Yo), Gf = " ", Yf = !1;
function Eg(e, t) {
  switch (e) {
    case "keyup":
      return sS.indexOf(t.keyCode) !== -1;
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
function Tg(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ar = !1;
function aS(e, t) {
  switch (e) {
    case "compositionend":
      return Tg(t);
    case "keypress":
      return t.which !== 32 ? null : (Yf = !0, Gf);
    case "textInput":
      return e = t.data, e === Gf && Yf ? null : e;
    default:
      return null;
  }
}
function lS(e, t) {
  if (Ar) return e === "compositionend" || !zu && Eg(e, t) ? (e = Cg(), Ti = Ou = Pn = null, Ar = !1, e) : null;
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
var cS = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Xf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!cS[e.type] : t === "textarea";
}
function Pg(e, t, n, r) {
  og(r), t = Qi(t, "onChange"), 0 < t.length && (n = new Fu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Xo = null, ds = null;
function uS(e) {
  Fg(e, 0);
}
function Na(e) {
  var t = Lr(e);
  if (qm(t)) return e;
}
function dS(e, t) {
  if (e === "change") return t;
}
var Dg = !1;
if (on) {
  var hl;
  if (on) {
    var ml = "oninput" in document;
    if (!ml) {
      var Qf = document.createElement("div");
      Qf.setAttribute("oninput", "return;"), ml = typeof Qf.oninput == "function";
    }
    hl = ml;
  } else hl = !1;
  Dg = hl && (!document.documentMode || 9 < document.documentMode);
}
function qf() {
  Xo && (Xo.detachEvent("onpropertychange", Ng), ds = Xo = null);
}
function Ng(e) {
  if (e.propertyName === "value" && Na(ds)) {
    var t = [];
    Pg(t, ds, e, ju(e)), lg(uS, t);
  }
}
function fS(e, t, n) {
  e === "focusin" ? (qf(), Xo = t, ds = n, Xo.attachEvent("onpropertychange", Ng)) : e === "focusout" && qf();
}
function pS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Na(ds);
}
function hS(e, t) {
  if (e === "click") return Na(t);
}
function mS(e, t) {
  if (e === "input" || e === "change") return Na(t);
}
function gS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var jt = typeof Object.is == "function" ? Object.is : gS;
function fs(e, t) {
  if (jt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!tc.call(t, o) || !jt(e[o], t[o])) return !1;
  }
  return !0;
}
function Zf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Jf(e, t) {
  var n = Zf(e);
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
    n = Zf(n);
  }
}
function Mg(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Mg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ag() {
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
function vS(e) {
  var t = Ag(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Mg(n.ownerDocument.documentElement, n)) {
    if (r !== null && Bu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, s = Math.min(r.start, o);
        r = r.end === void 0 ? s : Math.min(r.end, o), !e.extend && s > r && (o = r, r = s, s = o), o = Jf(n, s);
        var i = Jf(
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
var yS = on && "documentMode" in document && 11 >= document.documentMode, jr = null, wc = null, Qo = null, Sc = !1;
function ep(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Sc || jr == null || jr !== Ui(r) || (r = jr, "selectionStart" in r && Bu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Qo && fs(Qo, r) || (Qo = r, r = Qi(wc, "onSelect"), 0 < r.length && (t = new Fu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = jr)));
}
function Js(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Rr = { animationend: Js("Animation", "AnimationEnd"), animationiteration: Js("Animation", "AnimationIteration"), animationstart: Js("Animation", "AnimationStart"), transitionend: Js("Transition", "TransitionEnd") }, gl = {}, jg = {};
on && (jg = document.createElement("div").style, "AnimationEvent" in window || (delete Rr.animationend.animation, delete Rr.animationiteration.animation, delete Rr.animationstart.animation), "TransitionEvent" in window || delete Rr.transitionend.transition);
function Ma(e) {
  if (gl[e]) return gl[e];
  if (!Rr[e]) return e;
  var t = Rr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in jg) return gl[e] = t[n];
  return e;
}
var Rg = Ma("animationend"), Lg = Ma("animationiteration"), _g = Ma("animationstart"), Ig = Ma("transitionend"), Og = /* @__PURE__ */ new Map(), tp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Kn(e, t) {
  Og.set(e, t), wr(t, [e]);
}
for (var vl = 0; vl < tp.length; vl++) {
  var yl = tp[vl], xS = yl.toLowerCase(), wS = yl[0].toUpperCase() + yl.slice(1);
  Kn(xS, "on" + wS);
}
Kn(Rg, "onAnimationEnd");
Kn(Lg, "onAnimationIteration");
Kn(_g, "onAnimationStart");
Kn("dblclick", "onDoubleClick");
Kn("focusin", "onFocus");
Kn("focusout", "onBlur");
Kn(Ig, "onTransitionEnd");
to("onMouseEnter", ["mouseout", "mouseover"]);
to("onMouseLeave", ["mouseout", "mouseover"]);
to("onPointerEnter", ["pointerout", "pointerover"]);
to("onPointerLeave", ["pointerout", "pointerover"]);
wr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
wr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
wr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
wr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
wr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
wr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Bo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), SS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Bo));
function np(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, x1(r, t, void 0, e), e.currentTarget = null;
}
function Fg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var a = r[i], l = a.instance, c = a.currentTarget;
        if (a = a.listener, l !== s && o.isPropagationStopped()) break e;
        np(o, a, c), s = l;
      }
      else for (i = 0; i < r.length; i++) {
        if (a = r[i], l = a.instance, c = a.currentTarget, a = a.listener, l !== s && o.isPropagationStopped()) break e;
        np(o, a, c), s = l;
      }
    }
  }
  if (Hi) throw e = gc, Hi = !1, gc = null, e;
}
function ce(e, t) {
  var n = t[Tc];
  n === void 0 && (n = t[Tc] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Vg(t, e, 2, !1), n.add(r));
}
function xl(e, t, n) {
  var r = 0;
  t && (r |= 4), Vg(n, e, r, t);
}
var ei = "_reactListening" + Math.random().toString(36).slice(2);
function ps(e) {
  if (!e[ei]) {
    e[ei] = !0, Km.forEach(function(n) {
      n !== "selectionchange" && (SS.has(n) || xl(n, !1, e), xl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ei] || (t[ei] = !0, xl("selectionchange", !1, t));
  }
}
function Vg(e, t, n, r) {
  switch (bg(t)) {
    case 1:
      var o = _1;
      break;
    case 4:
      o = I1;
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
        if (i = or(a), i === null) return;
        if (l = i.tag, l === 5 || l === 6) {
          r = s = i;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  lg(function() {
    var c = s, d = ju(n), u = [];
    e: {
      var f = Og.get(e);
      if (f !== void 0) {
        var v = Fu, w = e;
        switch (e) {
          case "keypress":
            if (Pi(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = q1;
            break;
          case "focusin":
            w = "focus", v = pl;
            break;
          case "focusout":
            w = "blur", v = pl;
            break;
          case "beforeblur":
          case "afterblur":
            v = pl;
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
            v = Wf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = V1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = eS;
            break;
          case Rg:
          case Lg:
          case _g:
            v = $1;
            break;
          case Ig:
            v = nS;
            break;
          case "scroll":
            v = O1;
            break;
          case "wheel":
            v = oS;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = W1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Kf;
        }
        var m = (t & 4) !== 0, S = !m && e === "scroll", g = m ? f !== null ? f + "Capture" : null : f;
        m = [];
        for (var h = c, y; h !== null; ) {
          y = h;
          var b = y.stateNode;
          if (y.tag === 5 && b !== null && (y = b, g !== null && (b = as(h, g), b != null && m.push(hs(h, b, y)))), S) break;
          h = h.return;
        }
        0 < m.length && (f = new v(f, w, null, n, d), u.push({ event: f, listeners: m }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", f && n !== pc && (w = n.relatedTarget || n.fromElement) && (or(w) || w[sn])) break e;
        if ((v || f) && (f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window, v ? (w = n.relatedTarget || n.toElement, v = c, w = w ? or(w) : null, w !== null && (S = Sr(w), w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (v = null, w = c), v !== w)) {
          if (m = Wf, b = "onMouseLeave", g = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (m = Kf, b = "onPointerLeave", g = "onPointerEnter", h = "pointer"), S = v == null ? f : Lr(v), y = w == null ? f : Lr(w), f = new m(b, h + "leave", v, n, d), f.target = S, f.relatedTarget = y, b = null, or(d) === c && (m = new m(g, h + "enter", w, n, d), m.target = y, m.relatedTarget = S, b = m), S = b, v && w) t: {
            for (m = v, g = w, h = 0, y = m; y; y = kr(y)) h++;
            for (y = 0, b = g; b; b = kr(b)) y++;
            for (; 0 < h - y; ) m = kr(m), h--;
            for (; 0 < y - h; ) g = kr(g), y--;
            for (; h--; ) {
              if (m === g || g !== null && m === g.alternate) break t;
              m = kr(m), g = kr(g);
            }
            m = null;
          }
          else m = null;
          v !== null && rp(u, f, v, m, !1), w !== null && S !== null && rp(u, S, w, m, !0);
        }
      }
      e: {
        if (f = c ? Lr(c) : window, v = f.nodeName && f.nodeName.toLowerCase(), v === "select" || v === "input" && f.type === "file") var C = dS;
        else if (Xf(f)) if (Dg) C = mS;
        else {
          C = pS;
          var k = fS;
        }
        else (v = f.nodeName) && v.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = hS);
        if (C && (C = C(e, c))) {
          Pg(u, C, n, d);
          break e;
        }
        k && k(e, f, c), e === "focusout" && (k = f._wrapperState) && k.controlled && f.type === "number" && lc(f, "number", f.value);
      }
      switch (k = c ? Lr(c) : window, e) {
        case "focusin":
          (Xf(k) || k.contentEditable === "true") && (jr = k, wc = c, Qo = null);
          break;
        case "focusout":
          Qo = wc = jr = null;
          break;
        case "mousedown":
          Sc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Sc = !1, ep(u, n, d);
          break;
        case "selectionchange":
          if (yS) break;
        case "keydown":
        case "keyup":
          ep(u, n, d);
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
      else Ar ? Eg(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (kg && n.locale !== "ko" && (Ar || T !== "onCompositionStart" ? T === "onCompositionEnd" && Ar && (E = Cg()) : (Pn = d, Ou = "value" in Pn ? Pn.value : Pn.textContent, Ar = !0)), k = Qi(c, T), 0 < k.length && (T = new Hf(T, e, null, n, d), u.push({ event: T, listeners: k }), E ? T.data = E : (E = Tg(n), E !== null && (T.data = E)))), (E = iS ? aS(e, n) : lS(e, n)) && (c = Qi(c, "onBeforeInput"), 0 < c.length && (d = new Hf("onBeforeInput", "beforeinput", null, n, d), u.push({ event: d, listeners: c }), d.data = E));
    }
    Fg(u, t);
  });
}
function hs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Qi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, s = o.stateNode;
    o.tag === 5 && s !== null && (o = s, s = as(e, n), s != null && r.unshift(hs(e, s, o)), s = as(e, t), s != null && r.push(hs(e, s, o))), e = e.return;
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
function rp(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && c !== null && (a = c, o ? (l = as(n, s), l != null && i.unshift(hs(n, l, a))) : o || (l = as(n, s), l != null && i.push(hs(n, l, a)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var bS = /\r\n?/g, CS = /\u0000|\uFFFD/g;
function op(e) {
  return (typeof e == "string" ? e : "" + e).replace(bS, `
`).replace(CS, "");
}
function ti(e, t, n) {
  if (t = op(t), op(e) !== t && n) throw Error(A(425));
}
function qi() {
}
var bc = null, Cc = null;
function kc(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ec = typeof setTimeout == "function" ? setTimeout : void 0, kS = typeof clearTimeout == "function" ? clearTimeout : void 0, sp = typeof Promise == "function" ? Promise : void 0, ES = typeof queueMicrotask == "function" ? queueMicrotask : typeof sp < "u" ? function(e) {
  return sp.resolve(null).then(e).catch(TS);
} : Ec;
function TS(e) {
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
        e.removeChild(o), us(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  us(t);
}
function jn(e) {
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
function ip(e) {
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
var vo = Math.random().toString(36).slice(2), Ft = "__reactFiber$" + vo, ms = "__reactProps$" + vo, sn = "__reactContainer$" + vo, Tc = "__reactEvents$" + vo, PS = "__reactListeners$" + vo, DS = "__reactHandles$" + vo;
function or(e) {
  var t = e[Ft];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[sn] || n[Ft]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ip(e); e !== null; ) {
        if (n = e[Ft]) return n;
        e = ip(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function _s(e) {
  return e = e[Ft] || e[sn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Lr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function Aa(e) {
  return e[ms] || null;
}
var Pc = [], _r = -1;
function Gn(e) {
  return { current: e };
}
function ue(e) {
  0 > _r || (e.current = Pc[_r], Pc[_r] = null, _r--);
}
function ae(e, t) {
  _r++, Pc[_r] = e.current, e.current = t;
}
var Vn = {}, Ke = Gn(Vn), tt = Gn(!1), dr = Vn;
function no(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Vn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, s;
  for (s in n) o[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function nt(e) {
  return e = e.childContextTypes, e != null;
}
function Zi() {
  ue(tt), ue(Ke);
}
function ap(e, t, n) {
  if (Ke.current !== Vn) throw Error(A(168));
  ae(Ke, t), ae(tt, n);
}
function zg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(A(108, f1(e) || "Unknown", o));
  return xe({}, n, r);
}
function Ji(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Vn, dr = Ke.current, ae(Ke, e), ae(tt, tt.current), !0;
}
function lp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n ? (e = zg(e, t, dr), r.__reactInternalMemoizedMergedChildContext = e, ue(tt), ue(Ke), ae(Ke, e)) : ue(tt), ae(tt, n);
}
var qt = null, ja = !1, bl = !1;
function Bg(e) {
  qt === null ? qt = [e] : qt.push(e);
}
function NS(e) {
  ja = !0, Bg(e);
}
function Yn() {
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
      throw qt !== null && (qt = qt.slice(e + 1)), fg(Ru, Yn), o;
    } finally {
      ie = t, bl = !1;
    }
  }
  return null;
}
var Ir = [], Or = 0, ea = null, ta = 0, yt = [], xt = 0, fr = null, Zt = 1, Jt = "";
function er(e, t) {
  Ir[Or++] = ta, Ir[Or++] = ea, ea = e, ta = t;
}
function $g(e, t, n) {
  yt[xt++] = Zt, yt[xt++] = Jt, yt[xt++] = fr, fr = e;
  var r = Zt;
  e = Jt;
  var o = 32 - Mt(r) - 1;
  r &= ~(1 << o), n += 1;
  var s = 32 - Mt(t) + o;
  if (30 < s) {
    var i = o - o % 5;
    s = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Zt = 1 << 32 - Mt(t) + o | n << o | r, Jt = s + e;
  } else Zt = 1 << s | n << o | r, Jt = e;
}
function $u(e) {
  e.return !== null && (er(e, 1), $g(e, 1, 0));
}
function Uu(e) {
  for (; e === ea; ) ea = Ir[--Or], Ir[Or] = null, ta = Ir[--Or], Ir[Or] = null;
  for (; e === fr; ) fr = yt[--xt], yt[xt] = null, Jt = yt[--xt], yt[xt] = null, Zt = yt[--xt], yt[xt] = null;
}
var ct = null, lt = null, pe = !1, Nt = null;
function Ug(e, t) {
  var n = wt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function cp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ct = e, lt = jn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ct = e, lt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = fr !== null ? { id: Zt, overflow: Jt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = wt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ct = e, lt = null, !0) : !1;
    default:
      return !1;
  }
}
function Dc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Nc(e) {
  if (pe) {
    var t = lt;
    if (t) {
      var n = t;
      if (!cp(e, t)) {
        if (Dc(e)) throw Error(A(418));
        t = jn(n.nextSibling);
        var r = ct;
        t && cp(e, t) ? Ug(r, n) : (e.flags = e.flags & -4097 | 2, pe = !1, ct = e);
      }
    } else {
      if (Dc(e)) throw Error(A(418));
      e.flags = e.flags & -4097 | 2, pe = !1, ct = e;
    }
  }
}
function up(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ct = e;
}
function ni(e) {
  if (e !== ct) return !1;
  if (!pe) return up(e), pe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !kc(e.type, e.memoizedProps)), t && (t = lt)) {
    if (Dc(e)) throw Wg(), Error(A(418));
    for (; t; ) Ug(e, t), t = jn(t.nextSibling);
  }
  if (up(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              lt = jn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      lt = null;
    }
  } else lt = ct ? jn(e.stateNode.nextSibling) : null;
  return !0;
}
function Wg() {
  for (var e = lt; e; ) e = jn(e.nextSibling);
}
function ro() {
  lt = ct = null, pe = !1;
}
function Wu(e) {
  Nt === null ? Nt = [e] : Nt.push(e);
}
var MS = fn.ReactCurrentBatchConfig;
function jo(e, t, n) {
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
function dp(e) {
  var t = e._init;
  return t(e._payload);
}
function Hg(e) {
  function t(g, h) {
    if (e) {
      var y = g.deletions;
      y === null ? (g.deletions = [h], g.flags |= 16) : y.push(h);
    }
  }
  function n(g, h) {
    if (!e) return null;
    for (; h !== null; ) t(g, h), h = h.sibling;
    return null;
  }
  function r(g, h) {
    for (g = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? g.set(h.key, h) : g.set(h.index, h), h = h.sibling;
    return g;
  }
  function o(g, h) {
    return g = In(g, h), g.index = 0, g.sibling = null, g;
  }
  function s(g, h, y) {
    return g.index = y, e ? (y = g.alternate, y !== null ? (y = y.index, y < h ? (g.flags |= 2, h) : y) : (g.flags |= 2, h)) : (g.flags |= 1048576, h);
  }
  function i(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, h, y, b) {
    return h === null || h.tag !== 6 ? (h = Nl(y, g.mode, b), h.return = g, h) : (h = o(h, y), h.return = g, h);
  }
  function l(g, h, y, b) {
    var C = y.type;
    return C === Mr ? d(g, h, y.props.children, b, y.key) : h !== null && (h.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Cn && dp(C) === h.type) ? (b = o(h, y.props), b.ref = jo(g, h, y), b.return = g, b) : (b = Li(y.type, y.key, y.props, null, g.mode, b), b.ref = jo(g, h, y), b.return = g, b);
  }
  function c(g, h, y, b) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== y.containerInfo || h.stateNode.implementation !== y.implementation ? (h = Ml(y, g.mode, b), h.return = g, h) : (h = o(h, y.children || []), h.return = g, h);
  }
  function d(g, h, y, b, C) {
    return h === null || h.tag !== 7 ? (h = cr(y, g.mode, b, C), h.return = g, h) : (h = o(h, y), h.return = g, h);
  }
  function u(g, h, y) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = Nl("" + h, g.mode, y), h.return = g, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ks:
          return y = Li(h.type, h.key, h.props, null, g.mode, y), y.ref = jo(g, null, h), y.return = g, y;
        case Nr:
          return h = Ml(h, g.mode, y), h.return = g, h;
        case Cn:
          var b = h._init;
          return u(g, b(h._payload), y);
      }
      if (Vo(h) || Po(h)) return h = cr(h, g.mode, y, null), h.return = g, h;
      ri(g, h);
    }
    return null;
  }
  function f(g, h, y, b) {
    var C = h !== null ? h.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number") return C !== null ? null : a(g, h, "" + y, b);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ks:
          return y.key === C ? l(g, h, y, b) : null;
        case Nr:
          return y.key === C ? c(g, h, y, b) : null;
        case Cn:
          return C = y._init, f(
            g,
            h,
            C(y._payload),
            b
          );
      }
      if (Vo(y) || Po(y)) return C !== null ? null : d(g, h, y, b, null);
      ri(g, y);
    }
    return null;
  }
  function v(g, h, y, b, C) {
    if (typeof b == "string" && b !== "" || typeof b == "number") return g = g.get(y) || null, a(h, g, "" + b, C);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Ks:
          return g = g.get(b.key === null ? y : b.key) || null, l(h, g, b, C);
        case Nr:
          return g = g.get(b.key === null ? y : b.key) || null, c(h, g, b, C);
        case Cn:
          var k = b._init;
          return v(g, h, y, k(b._payload), C);
      }
      if (Vo(b) || Po(b)) return g = g.get(y) || null, d(h, g, b, C, null);
      ri(h, b);
    }
    return null;
  }
  function w(g, h, y, b) {
    for (var C = null, k = null, E = h, T = h = 0, j = null; E !== null && T < y.length; T++) {
      E.index > T ? (j = E, E = null) : j = E.sibling;
      var M = f(g, E, y[T], b);
      if (M === null) {
        E === null && (E = j);
        break;
      }
      e && E && M.alternate === null && t(g, E), h = s(M, h, T), k === null ? C = M : k.sibling = M, k = M, E = j;
    }
    if (T === y.length) return n(g, E), pe && er(g, T), C;
    if (E === null) {
      for (; T < y.length; T++) E = u(g, y[T], b), E !== null && (h = s(E, h, T), k === null ? C = E : k.sibling = E, k = E);
      return pe && er(g, T), C;
    }
    for (E = r(g, E); T < y.length; T++) j = v(E, g, T, y[T], b), j !== null && (e && j.alternate !== null && E.delete(j.key === null ? T : j.key), h = s(j, h, T), k === null ? C = j : k.sibling = j, k = j);
    return e && E.forEach(function(D) {
      return t(g, D);
    }), pe && er(g, T), C;
  }
  function m(g, h, y, b) {
    var C = Po(y);
    if (typeof C != "function") throw Error(A(150));
    if (y = C.call(y), y == null) throw Error(A(151));
    for (var k = C = null, E = h, T = h = 0, j = null, M = y.next(); E !== null && !M.done; T++, M = y.next()) {
      E.index > T ? (j = E, E = null) : j = E.sibling;
      var D = f(g, E, M.value, b);
      if (D === null) {
        E === null && (E = j);
        break;
      }
      e && E && D.alternate === null && t(g, E), h = s(D, h, T), k === null ? C = D : k.sibling = D, k = D, E = j;
    }
    if (M.done) return n(
      g,
      E
    ), pe && er(g, T), C;
    if (E === null) {
      for (; !M.done; T++, M = y.next()) M = u(g, M.value, b), M !== null && (h = s(M, h, T), k === null ? C = M : k.sibling = M, k = M);
      return pe && er(g, T), C;
    }
    for (E = r(g, E); !M.done; T++, M = y.next()) M = v(E, g, T, M.value, b), M !== null && (e && M.alternate !== null && E.delete(M.key === null ? T : M.key), h = s(M, h, T), k === null ? C = M : k.sibling = M, k = M);
    return e && E.forEach(function(N) {
      return t(g, N);
    }), pe && er(g, T), C;
  }
  function S(g, h, y, b) {
    if (typeof y == "object" && y !== null && y.type === Mr && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ks:
          e: {
            for (var C = y.key, k = h; k !== null; ) {
              if (k.key === C) {
                if (C = y.type, C === Mr) {
                  if (k.tag === 7) {
                    n(g, k.sibling), h = o(k, y.props.children), h.return = g, g = h;
                    break e;
                  }
                } else if (k.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Cn && dp(C) === k.type) {
                  n(g, k.sibling), h = o(k, y.props), h.ref = jo(g, k, y), h.return = g, g = h;
                  break e;
                }
                n(g, k);
                break;
              } else t(g, k);
              k = k.sibling;
            }
            y.type === Mr ? (h = cr(y.props.children, g.mode, b, y.key), h.return = g, g = h) : (b = Li(y.type, y.key, y.props, null, g.mode, b), b.ref = jo(g, h, y), b.return = g, g = b);
          }
          return i(g);
        case Nr:
          e: {
            for (k = y.key; h !== null; ) {
              if (h.key === k) if (h.tag === 4 && h.stateNode.containerInfo === y.containerInfo && h.stateNode.implementation === y.implementation) {
                n(g, h.sibling), h = o(h, y.children || []), h.return = g, g = h;
                break e;
              } else {
                n(g, h);
                break;
              }
              else t(g, h);
              h = h.sibling;
            }
            h = Ml(y, g.mode, b), h.return = g, g = h;
          }
          return i(g);
        case Cn:
          return k = y._init, S(g, h, k(y._payload), b);
      }
      if (Vo(y)) return w(g, h, y, b);
      if (Po(y)) return m(g, h, y, b);
      ri(g, y);
    }
    return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, h !== null && h.tag === 6 ? (n(g, h.sibling), h = o(h, y), h.return = g, g = h) : (n(g, h), h = Nl(y, g.mode, b), h.return = g, g = h), i(g)) : n(g, h);
  }
  return S;
}
var oo = Hg(!0), Kg = Hg(!1), na = Gn(null), ra = null, Fr = null, Hu = null;
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
  ra = e, Hu = Fr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (et = !0), e.firstContext = null);
}
function bt(e) {
  var t = e._currentValue;
  if (Hu !== e) if (e = { context: e, memoizedValue: t, next: null }, Fr === null) {
    if (ra === null) throw Error(A(308));
    Fr = e, ra.dependencies = { lanes: 0, firstContext: e };
  } else Fr = Fr.next = e;
  return t;
}
var sr = null;
function Yu(e) {
  sr === null ? sr = [e] : sr.push(e);
}
function Gg(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Yu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, an(e, r);
}
function an(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var kn = !1;
function Xu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Yg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function en(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Rn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, te & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, an(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Yu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, an(e, n);
}
function Di(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Lu(e, n);
  }
}
function fp(e, t) {
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
  kn = !1;
  var s = o.firstBaseUpdate, i = o.lastBaseUpdate, a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a, c = l.next;
    l.next = null, i === null ? s = c : i.next = c, i = l;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, a = d.lastBaseUpdate, a !== i && (a === null ? d.firstBaseUpdate = c : a.next = c, d.lastBaseUpdate = l));
  }
  if (s !== null) {
    var u = o.baseState;
    i = 0, d = c = l = null, a = s;
    do {
      var f = a.lane, v = a.eventTime;
      if ((r & f) === f) {
        d !== null && (d = d.next = {
          eventTime: v,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var w = e, m = a;
          switch (f = t, v = n, m.tag) {
            case 1:
              if (w = m.payload, typeof w == "function") {
                u = w.call(v, u, f);
                break e;
              }
              u = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = m.payload, f = typeof w == "function" ? w.call(v, u, f) : w, f == null) break e;
              u = xe({}, u, f);
              break e;
            case 2:
              kn = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [a] : f.push(a));
      } else v = { eventTime: v, lane: f, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, d === null ? (c = d = v, l = u) : d = d.next = v, i |= f;
      if (a = a.next, a === null) {
        if (a = o.shared.pending, a === null) break;
        f = a, a = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null;
      }
    } while (!0);
    if (d === null && (l = u), o.baseState = l, o.firstBaseUpdate = c, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        i |= o.lane, o = o.next;
      while (o !== t);
    } else s === null && (o.shared.lanes = 0);
    hr |= i, e.lanes = i, e.memoizedState = u;
  }
}
function pp(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(A(191, o));
      o.call(r);
    }
  }
}
var Is = {}, Ut = Gn(Is), gs = Gn(Is), vs = Gn(Is);
function ir(e) {
  if (e === Is) throw Error(A(174));
  return e;
}
function Qu(e, t) {
  switch (ae(vs, t), ae(gs, e), ae(Ut, Is), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : uc(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = uc(t, e);
  }
  ue(Ut), ae(Ut, t);
}
function so() {
  ue(Ut), ue(gs), ue(vs);
}
function Xg(e) {
  ir(vs.current);
  var t = ir(Ut.current), n = uc(t, e.type);
  t !== n && (ae(gs, e), ae(Ut, n));
}
function qu(e) {
  gs.current === e && (ue(Ut), ue(gs));
}
var ge = Gn(0);
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
var Ni = fn.ReactCurrentDispatcher, kl = fn.ReactCurrentBatchConfig, pr = 0, ye = null, Me = null, Re = null, ia = !1, qo = !1, ys = 0, AS = 0;
function Be() {
  throw Error(A(321));
}
function Ju(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!jt(e[n], t[n])) return !1;
  return !0;
}
function ed(e, t, n, r, o, s) {
  if (pr = s, ye = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ni.current = e === null || e.memoizedState === null ? _S : IS, e = n(r, o), qo) {
    s = 0;
    do {
      if (qo = !1, ys = 0, 25 <= s) throw Error(A(301));
      s += 1, Re = Me = null, t.updateQueue = null, Ni.current = OS, e = n(r, o);
    } while (qo);
  }
  if (Ni.current = aa, t = Me !== null && Me.next !== null, pr = 0, Re = Me = ye = null, ia = !1, t) throw Error(A(300));
  return e;
}
function td() {
  var e = ys !== 0;
  return ys = 0, e;
}
function Ot() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Re === null ? ye.memoizedState = Re = e : Re = Re.next = e, Re;
}
function Ct() {
  if (Me === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Me.next;
  var t = Re === null ? ye.memoizedState : Re.next;
  if (t !== null) Re = t, Me = e;
  else {
    if (e === null) throw Error(A(310));
    Me = e, e = { memoizedState: Me.memoizedState, baseState: Me.baseState, baseQueue: Me.baseQueue, queue: Me.queue, next: null }, Re === null ? ye.memoizedState = Re = e : Re = Re.next = e;
  }
  return Re;
}
function xs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function El(e) {
  var t = Ct(), n = t.queue;
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
      var d = c.lane;
      if ((pr & d) === d) l !== null && (l = l.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var u = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        l === null ? (a = l = u, i = r) : l = l.next = u, ye.lanes |= d, hr |= d;
      }
      c = c.next;
    } while (c !== null && c !== s);
    l === null ? i = r : l.next = a, jt(r, t.memoizedState) || (et = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      s = o.lane, ye.lanes |= s, hr |= s, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Tl(e) {
  var t = Ct(), n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      s = e(s, i.action), i = i.next;
    while (i !== o);
    jt(s, t.memoizedState) || (et = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function Qg() {
}
function qg(e, t) {
  var n = ye, r = Ct(), o = t(), s = !jt(r.memoizedState, o);
  if (s && (r.memoizedState = o, et = !0), r = r.queue, nd(ev.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || Re !== null && Re.memoizedState.tag & 1) {
    if (n.flags |= 2048, ws(9, Jg.bind(null, n, r, o, t), void 0, null), Le === null) throw Error(A(349));
    pr & 30 || Zg(n, t, o);
  }
  return o;
}
function Zg(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ye.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ye.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Jg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, tv(t) && nv(e);
}
function ev(e, t, n) {
  return n(function() {
    tv(t) && nv(e);
  });
}
function tv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !jt(e, n);
  } catch {
    return !0;
  }
}
function nv(e) {
  var t = an(e, 1);
  t !== null && At(t, e, 1, -1);
}
function hp(e) {
  var t = Ot();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: xs, lastRenderedState: e }, t.queue = e, e = e.dispatch = LS.bind(null, ye, e), [t.memoizedState, e];
}
function ws(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ye.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ye.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function rv() {
  return Ct().memoizedState;
}
function Mi(e, t, n, r) {
  var o = Ot();
  ye.flags |= e, o.memoizedState = ws(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ra(e, t, n, r) {
  var o = Ct();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Me !== null) {
    var i = Me.memoizedState;
    if (s = i.destroy, r !== null && Ju(r, i.deps)) {
      o.memoizedState = ws(t, n, s, r);
      return;
    }
  }
  ye.flags |= e, o.memoizedState = ws(1 | t, n, s, r);
}
function mp(e, t) {
  return Mi(8390656, 8, e, t);
}
function nd(e, t) {
  return Ra(2048, 8, e, t);
}
function ov(e, t) {
  return Ra(4, 2, e, t);
}
function sv(e, t) {
  return Ra(4, 4, e, t);
}
function iv(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function av(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ra(4, 4, iv.bind(null, t, e), n);
}
function rd() {
}
function lv(e, t) {
  var n = Ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ju(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function cv(e, t) {
  var n = Ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ju(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function uv(e, t, n) {
  return pr & 21 ? (jt(n, t) || (n = mg(), ye.lanes |= n, hr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, et = !0), e.memoizedState = n);
}
function jS(e, t) {
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
function dv() {
  return Ct().memoizedState;
}
function RS(e, t, n) {
  var r = _n(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, fv(e)) pv(t, n);
  else if (n = Gg(e, t, n, r), n !== null) {
    var o = Qe();
    At(n, e, r, o), hv(n, t, r);
  }
}
function LS(e, t, n) {
  var r = _n(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (fv(e)) pv(t, o);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var i = t.lastRenderedState, a = s(i, n);
      if (o.hasEagerState = !0, o.eagerState = a, jt(a, i)) {
        var l = t.interleaved;
        l === null ? (o.next = o, Yu(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Gg(e, t, o, r), n !== null && (o = Qe(), At(n, e, r, o), hv(n, t, r));
  }
}
function fv(e) {
  var t = e.alternate;
  return e === ye || t !== null && t === ye;
}
function pv(e, t) {
  qo = ia = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function hv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Lu(e, n);
  }
}
var aa = { readContext: bt, useCallback: Be, useContext: Be, useEffect: Be, useImperativeHandle: Be, useInsertionEffect: Be, useLayoutEffect: Be, useMemo: Be, useReducer: Be, useRef: Be, useState: Be, useDebugValue: Be, useDeferredValue: Be, useTransition: Be, useMutableSource: Be, useSyncExternalStore: Be, useId: Be, unstable_isNewReconciler: !1 }, _S = { readContext: bt, useCallback: function(e, t) {
  return Ot().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: bt, useEffect: mp, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Mi(
    4194308,
    4,
    iv.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Mi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Mi(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ot();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ot();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = RS.bind(null, ye, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ot();
  return e = { current: e }, t.memoizedState = e;
}, useState: hp, useDebugValue: rd, useDeferredValue: function(e) {
  return Ot().memoizedState = e;
}, useTransition: function() {
  var e = hp(!1), t = e[0];
  return e = jS.bind(null, e[1]), Ot().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ye, o = Ot();
  if (pe) {
    if (n === void 0) throw Error(A(407));
    n = n();
  } else {
    if (n = t(), Le === null) throw Error(A(349));
    pr & 30 || Zg(r, t, n);
  }
  o.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return o.queue = s, mp(ev.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, ws(9, Jg.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = Ot(), t = Le.identifierPrefix;
  if (pe) {
    var n = Jt, r = Zt;
    n = (r & ~(1 << 32 - Mt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ys++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = AS++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, IS = {
  readContext: bt,
  useCallback: lv,
  useContext: bt,
  useEffect: nd,
  useImperativeHandle: av,
  useInsertionEffect: ov,
  useLayoutEffect: sv,
  useMemo: cv,
  useReducer: El,
  useRef: rv,
  useState: function() {
    return El(xs);
  },
  useDebugValue: rd,
  useDeferredValue: function(e) {
    var t = Ct();
    return uv(t, Me.memoizedState, e);
  },
  useTransition: function() {
    var e = El(xs)[0], t = Ct().memoizedState;
    return [e, t];
  },
  useMutableSource: Qg,
  useSyncExternalStore: qg,
  useId: dv,
  unstable_isNewReconciler: !1
}, OS = { readContext: bt, useCallback: lv, useContext: bt, useEffect: nd, useImperativeHandle: av, useInsertionEffect: ov, useLayoutEffect: sv, useMemo: cv, useReducer: Tl, useRef: rv, useState: function() {
  return Tl(xs);
}, useDebugValue: rd, useDeferredValue: function(e) {
  var t = Ct();
  return Me === null ? t.memoizedState = e : uv(t, Me.memoizedState, e);
}, useTransition: function() {
  var e = Tl(xs)[0], t = Ct().memoizedState;
  return [e, t];
}, useMutableSource: Qg, useSyncExternalStore: qg, useId: dv, unstable_isNewReconciler: !1 };
function Pt(e, t) {
  if (e && e.defaultProps) {
    t = xe({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ac(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : xe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var La = { isMounted: function(e) {
  return (e = e._reactInternals) ? Sr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qe(), o = _n(e), s = en(r, o);
  s.payload = t, n != null && (s.callback = n), t = Rn(e, s, o), t !== null && (At(t, e, o, r), Di(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qe(), o = _n(e), s = en(r, o);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Rn(e, s, o), t !== null && (At(t, e, o, r), Di(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Qe(), r = _n(e), o = en(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Rn(e, o, r), t !== null && (At(t, e, r, n), Di(t, e, r));
} };
function gp(e, t, n, r, o, s, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !fs(n, r) || !fs(o, s) : !0;
}
function mv(e, t, n) {
  var r = !1, o = Vn, s = t.contextType;
  return typeof s == "object" && s !== null ? s = bt(s) : (o = nt(t) ? dr : Ke.current, r = t.contextTypes, s = (r = r != null) ? no(e, o) : Vn), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = La, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function vp(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && La.enqueueReplaceState(t, t.state, null);
}
function jc(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Xu(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? o.context = bt(s) : (s = nt(t) ? dr : Ke.current, o.context = no(e, s)), o.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Ac(e, t, s, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && La.enqueueReplaceState(o, o.state, null), oa(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function io(e, t) {
  try {
    var n = "", r = t;
    do
      n += d1(r), r = r.return;
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
var FS = typeof WeakMap == "function" ? WeakMap : Map;
function gv(e, t, n) {
  n = en(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ca || (ca = !0, Uc = r), Rc(e, t);
  }, n;
}
function vv(e, t, n) {
  n = en(-1, n), n.tag = 3;
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
    Rc(e, t), typeof r != "function" && (Ln === null ? Ln = /* @__PURE__ */ new Set([this]) : Ln.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function yp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new FS();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = ZS.bind(null, e, t, n), t.then(e, e));
}
function xp(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function wp(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = en(-1, 1), t.tag = 2, Rn(n, t, 1))), n.lanes |= 1), e);
}
var VS = fn.ReactCurrentOwner, et = !1;
function Xe(e, t, n, r) {
  t.child = e === null ? Kg(t, null, n, r) : oo(t, e.child, n, r);
}
function Sp(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return Qr(t, o), r = ed(e, t, n, r, s, o), n = td(), e !== null && !et ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, ln(e, t, o)) : (pe && n && $u(t), t.flags |= 1, Xe(e, t, r, o), t.child);
}
function bp(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !dd(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, yv(e, t, s, r, o)) : (e = Li(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & o)) {
    var i = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : fs, n(i, r) && e.ref === t.ref) return ln(e, t, o);
  }
  return t.flags |= 1, e = In(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function yv(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (fs(s, r) && e.ref === t.ref) if (et = !1, t.pendingProps = r = s, (e.lanes & o) !== 0) e.flags & 131072 && (et = !0);
    else return t.lanes = e.lanes, ln(e, t, o);
  }
  return Lc(e, t, n, r, o);
}
function xv(e, t, n) {
  var r = t.pendingProps, o = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ae(zr, it), it |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ae(zr, it), it |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, ae(zr, it), it |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, ae(zr, it), it |= r;
  return Xe(e, t, o, n), t.child;
}
function wv(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Lc(e, t, n, r, o) {
  var s = nt(n) ? dr : Ke.current;
  return s = no(t, s), Qr(t, o), n = ed(e, t, n, r, s, o), r = td(), e !== null && !et ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, ln(e, t, o)) : (pe && r && $u(t), t.flags |= 1, Xe(e, t, n, o), t.child);
}
function Cp(e, t, n, r, o) {
  if (nt(n)) {
    var s = !0;
    Ji(t);
  } else s = !1;
  if (Qr(t, o), t.stateNode === null) Ai(e, t), mv(t, n, r), jc(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, a = t.memoizedProps;
    i.props = a;
    var l = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = bt(c) : (c = nt(n) ? dr : Ke.current, c = no(t, c));
    var d = n.getDerivedStateFromProps, u = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    u || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || l !== c) && vp(t, i, r, c), kn = !1;
    var f = t.memoizedState;
    i.state = f, oa(t, r, i, o), l = t.memoizedState, a !== r || f !== l || tt.current || kn ? (typeof d == "function" && (Ac(t, n, d, r), l = t.memoizedState), (a = kn || gp(t, n, a, r, f, l, c)) ? (u || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), i.props = r, i.state = l, i.context = c, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Yg(e, t), a = t.memoizedProps, c = t.type === t.elementType ? a : Pt(t.type, a), i.props = c, u = t.pendingProps, f = i.context, l = n.contextType, typeof l == "object" && l !== null ? l = bt(l) : (l = nt(n) ? dr : Ke.current, l = no(t, l));
    var v = n.getDerivedStateFromProps;
    (d = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== u || f !== l) && vp(t, i, r, l), kn = !1, f = t.memoizedState, i.state = f, oa(t, r, i, o);
    var w = t.memoizedState;
    a !== u || f !== w || tt.current || kn ? (typeof v == "function" && (Ac(t, n, v, r), w = t.memoizedState), (c = kn || gp(t, n, c, r, f, w, l) || !1) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, l), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, l)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = l, r = c) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return _c(e, t, n, r, s, o);
}
function _c(e, t, n, r, o, s) {
  wv(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && lp(t, n, !1), ln(e, t, s);
  r = t.stateNode, VS.current = t;
  var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = oo(t, e.child, null, s), t.child = oo(t, null, a, s)) : Xe(e, t, a, s), t.memoizedState = r.state, o && lp(t, n, !0), t.child;
}
function Sv(e) {
  var t = e.stateNode;
  t.pendingContext ? ap(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ap(e, t.context, !1), Qu(e, t.containerInfo);
}
function kp(e, t, n, r, o) {
  return ro(), Wu(o), t.flags |= 256, Xe(e, t, n, r), t.child;
}
var Ic = { dehydrated: null, treeContext: null, retryLane: 0 };
function Oc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function bv(e, t, n) {
  var r = t.pendingProps, o = ge.current, s = !1, i = (t.flags & 128) !== 0, a;
  if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ae(ge, o & 1), e === null)
    return Nc(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, i = { mode: "hidden", children: i }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = i) : s = Oa(i, r, 0, null), e = cr(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Oc(n), t.memoizedState = Ic, e) : od(t, i));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return zS(e, t, i, r, a, o, n);
  if (s) {
    s = r.fallback, i = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = In(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? s = In(a, s) : (s = cr(s, i, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, i = e.child.memoizedState, i = i === null ? Oc(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, s.memoizedState = i, s.childLanes = e.childLanes & ~n, t.memoizedState = Ic, r;
  }
  return s = e.child, e = s.sibling, r = In(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function od(e, t) {
  return t = Oa({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function oi(e, t, n, r) {
  return r !== null && Wu(r), oo(t, e.child, null, n), e = od(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function zS(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Pl(Error(A(422))), oi(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, o = t.mode, r = Oa({ mode: "visible", children: r.children }, o, 0, null), s = cr(s, o, i, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && oo(t, e.child, null, i), t.child.memoizedState = Oc(i), t.memoizedState = Ic, s);
  if (!(t.mode & 1)) return oi(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
    return r = a, s = Error(A(419)), r = Pl(s, r, void 0), oi(e, t, i, r);
  }
  if (a = (i & e.childLanes) !== 0, et || a) {
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
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== s.retryLane && (s.retryLane = o, an(e, o), At(r, e, o, -1));
    }
    return ud(), r = Pl(Error(A(421))), oi(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = JS.bind(null, e), o._reactRetry = t, null) : (e = s.treeContext, lt = jn(o.nextSibling), ct = t, pe = !0, Nt = null, e !== null && (yt[xt++] = Zt, yt[xt++] = Jt, yt[xt++] = fr, Zt = e.id, Jt = e.overflow, fr = t), t = od(t, r.children), t.flags |= 4096, t);
}
function Ep(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Mc(e.return, t, n);
}
function Dl(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = o);
}
function Cv(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, s = r.tail;
  if (Xe(e, t, r.children, n), r = ge.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ep(e, n, t);
      else if (e.tag === 19) Ep(e, n, t);
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
  if (ae(ge, r), !(t.mode & 1)) t.memoizedState = null;
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
function ln(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), hr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (e = t.child, n = In(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = In(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function BS(e, t, n) {
  switch (t.tag) {
    case 3:
      Sv(t), ro();
      break;
    case 5:
      Xg(t);
      break;
    case 1:
      nt(t.type) && Ji(t);
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
        return r.dehydrated !== null ? (ae(ge, ge.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? bv(e, t, n) : (ae(ge, ge.current & 1), e = ln(e, t, n), e !== null ? e.sibling : null);
      ae(ge, ge.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Cv(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ae(ge, ge.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, xv(e, t, n);
  }
  return ln(e, t, n);
}
var kv, Fc, Ev, Tv;
kv = function(e, t) {
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
Ev = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, ir(Ut.current);
    var s = null;
    switch (n) {
      case "input":
        o = ic(e, o), r = ic(e, r), s = [];
        break;
      case "select":
        o = xe({}, o, { value: void 0 }), r = xe({}, r, { value: void 0 }), s = [];
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
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (ss.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (a = o != null ? o[c] : void 0, r.hasOwnProperty(c) && l !== a && (l != null || a != null)) if (c === "style") if (a) {
        for (i in a) !a.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in l) l.hasOwnProperty(i) && a[i] !== l[i] && (n || (n = {}), n[i] = l[i]);
      } else n || (s || (s = []), s.push(
        c,
        n
      )), n = l;
      else c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (ss.hasOwnProperty(c) ? (l != null && c === "onScroll" && ce("scroll", e), s || a === l || (s = [])) : (s = s || []).push(c, l));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Tv = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ro(e, t) {
  if (!pe) switch (e.tailMode) {
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
function $e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function $S(e, t, n) {
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
      return $e(t), null;
    case 1:
      return nt(t.type) && Zi(), $e(t), null;
    case 3:
      return r = t.stateNode, so(), ue(tt), ue(Ke), Zu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ni(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Nt !== null && (Kc(Nt), Nt = null))), Fc(e, t), $e(t), null;
    case 5:
      qu(t);
      var o = ir(vs.current);
      if (n = t.type, e !== null && t.stateNode != null) Ev(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return $e(t), null;
        }
        if (e = ir(Ut.current), ni(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[Ft] = t, r[ms] = s, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < Bo.length; o++) ce(Bo[o], r);
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
              Lf(r, s), ce("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, ce("invalid", r);
              break;
            case "textarea":
              If(r, s), ce("invalid", r);
          }
          dc(n, s), o = null;
          for (var i in s) if (s.hasOwnProperty(i)) {
            var a = s[i];
            i === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && ti(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && ti(
              r.textContent,
              a,
              e
            ), o = ["children", "" + a]) : ss.hasOwnProperty(i) && a != null && i === "onScroll" && ce("scroll", r);
          }
          switch (n) {
            case "input":
              Gs(r), _f(r, s, !0);
              break;
            case "textarea":
              Gs(r), Of(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = qi);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = eg(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ft] = t, e[ms] = r, kv(e, t, !1, !1), t.stateNode = e;
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
                for (o = 0; o < Bo.length; o++) ce(Bo[o], e);
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
                Lf(e, r), o = ic(e, r), ce("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = xe({}, r, { value: void 0 }), ce("invalid", e);
                break;
              case "textarea":
                If(e, r), o = cc(e, r), ce("invalid", e);
                break;
              default:
                o = r;
            }
            dc(n, o), a = o;
            for (s in a) if (a.hasOwnProperty(s)) {
              var l = a[s];
              s === "style" ? rg(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && tg(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && is(e, l) : typeof l == "number" && is(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (ss.hasOwnProperty(s) ? l != null && s === "onScroll" && ce("scroll", e) : l != null && Du(e, s, l, i));
            }
            switch (n) {
              case "input":
                Gs(e), _f(e, r, !1);
                break;
              case "textarea":
                Gs(e), Of(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Fn(r.value));
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
      return $e(t), null;
    case 6:
      if (e && t.stateNode != null) Tv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (n = ir(vs.current), ir(Ut.current), ni(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ft] = t, (s = r.nodeValue !== n) && (e = ct, e !== null)) switch (e.tag) {
            case 3:
              ti(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ti(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ft] = t, t.stateNode = r;
      }
      return $e(t), null;
    case 13:
      if (ue(ge), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (pe && lt !== null && t.mode & 1 && !(t.flags & 128)) Wg(), ro(), t.flags |= 98560, s = !1;
        else if (s = ni(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(A(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(A(317));
            s[Ft] = t;
          } else ro(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          $e(t), s = !1;
        } else Nt !== null && (Kc(Nt), Nt = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ge.current & 1 ? Ae === 0 && (Ae = 3) : ud())), t.updateQueue !== null && (t.flags |= 4), $e(t), null);
    case 4:
      return so(), Fc(e, t), e === null && ps(t.stateNode.containerInfo), $e(t), null;
    case 10:
      return Gu(t.type._context), $e(t), null;
    case 17:
      return nt(t.type) && Zi(), $e(t), null;
    case 19:
      if (ue(ge), s = t.memoizedState, s === null) return $e(t), null;
      if (r = (t.flags & 128) !== 0, i = s.rendering, i === null) if (r) Ro(s, !1);
      else {
        if (Ae !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = sa(e), i !== null) {
            for (t.flags |= 128, Ro(s, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, i = s.alternate, i === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = i.childLanes, s.lanes = i.lanes, s.child = i.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = i.memoizedProps, s.memoizedState = i.memoizedState, s.updateQueue = i.updateQueue, s.type = i.type, e = i.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ae(ge, ge.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && Te() > ao && (t.flags |= 128, r = !0, Ro(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = sa(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ro(s, !0), s.tail === null && s.tailMode === "hidden" && !i.alternate && !pe) return $e(t), null;
        } else 2 * Te() - s.renderingStartTime > ao && n !== 1073741824 && (t.flags |= 128, r = !0, Ro(s, !1), t.lanes = 4194304);
        s.isBackwards ? (i.sibling = t.child, t.child = i) : (n = s.last, n !== null ? n.sibling = i : t.child = i, s.last = i);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = Te(), t.sibling = null, n = ge.current, ae(ge, r ? n & 1 | 2 : n & 1), t) : ($e(t), null);
    case 22:
    case 23:
      return cd(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? it & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function US(e, t) {
  switch (Uu(t), t.tag) {
    case 1:
      return nt(t.type) && Zi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return so(), ue(tt), ue(Ke), Zu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return qu(t), null;
    case 13:
      if (ue(ge), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(A(340));
        ro();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ue(ge), null;
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
var si = !1, We = !1, WS = typeof WeakSet == "function" ? WeakSet : Set, B = null;
function Vr(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Se(e, t, r);
  }
  else n.current = null;
}
function Vc(e, t, n) {
  try {
    n();
  } catch (r) {
    Se(e, t, r);
  }
}
var Tp = !1;
function HS(e, t) {
  if (bc = Yi, e = Ag(), Bu(e)) {
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
        var i = 0, a = -1, l = -1, c = 0, d = 0, u = e, f = null;
        t: for (; ; ) {
          for (var v; u !== n || o !== 0 && u.nodeType !== 3 || (a = i + o), u !== s || r !== 0 && u.nodeType !== 3 || (l = i + r), u.nodeType === 3 && (i += u.nodeValue.length), (v = u.firstChild) !== null; )
            f = u, u = v;
          for (; ; ) {
            if (u === e) break t;
            if (f === n && ++c === o && (a = i), f === s && ++d === r && (l = i), (v = u.nextSibling) !== null) break;
            u = f, f = u.parentNode;
          }
          u = v;
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
            var m = w.memoizedProps, S = w.memoizedState, g = t.stateNode, h = g.getSnapshotBeforeUpdate(t.elementType === t.type ? m : Pt(t.type, m), S);
            g.__reactInternalSnapshotBeforeUpdate = h;
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
      Se(t, t.return, b);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, B = e;
      break;
    }
    B = t.return;
  }
  return w = Tp, Tp = !1, w;
}
function Zo(e, t, n) {
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
function Pv(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Pv(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ft], delete t[ms], delete t[Tc], delete t[PS], delete t[DS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Dv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Pp(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Dv(e.return)) return null;
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
var Ie = null, Dt = !1;
function vn(e, t, n) {
  for (n = n.child; n !== null; ) Nv(e, t, n), n = n.sibling;
}
function Nv(e, t, n) {
  if ($t && typeof $t.onCommitFiberUnmount == "function") try {
    $t.onCommitFiberUnmount(Pa, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      We || Vr(n, t);
    case 6:
      var r = Ie, o = Dt;
      Ie = null, vn(e, t, n), Ie = r, Dt = o, Ie !== null && (Dt ? (e = Ie, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ie.removeChild(n.stateNode));
      break;
    case 18:
      Ie !== null && (Dt ? (e = Ie, n = n.stateNode, e.nodeType === 8 ? Sl(e.parentNode, n) : e.nodeType === 1 && Sl(e, n), us(e)) : Sl(Ie, n.stateNode));
      break;
    case 4:
      r = Ie, o = Dt, Ie = n.stateNode.containerInfo, Dt = !0, vn(e, t, n), Ie = r, Dt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!We && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var s = o, i = s.destroy;
          s = s.tag, i !== void 0 && (s & 2 || s & 4) && Vc(n, t, i), o = o.next;
        } while (o !== r);
      }
      vn(e, t, n);
      break;
    case 1:
      if (!We && (Vr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        Se(n, t, a);
      }
      vn(e, t, n);
      break;
    case 21:
      vn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (We = (r = We) || n.memoizedState !== null, vn(e, t, n), We = r) : vn(e, t, n);
      break;
    default:
      vn(e, t, n);
  }
}
function Dp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new WS()), t.forEach(function(r) {
      var o = eb.bind(null, e, r);
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
            Ie = a.stateNode, Dt = !1;
            break e;
          case 3:
            Ie = a.stateNode.containerInfo, Dt = !0;
            break e;
          case 4:
            Ie = a.stateNode.containerInfo, Dt = !0;
            break e;
        }
        a = a.return;
      }
      if (Ie === null) throw Error(A(160));
      Nv(s, i, o), Ie = null, Dt = !1;
      var l = o.alternate;
      l !== null && (l.return = null), o.return = null;
    } catch (c) {
      Se(o, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Mv(t, e), t = t.sibling;
}
function Mv(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (kt(t, e), It(e), r & 4) {
        try {
          Zo(3, e, e.return), _a(3, e);
        } catch (m) {
          Se(e, e.return, m);
        }
        try {
          Zo(5, e, e.return);
        } catch (m) {
          Se(e, e.return, m);
        }
      }
      break;
    case 1:
      kt(t, e), It(e), r & 512 && n !== null && Vr(n, n.return);
      break;
    case 5:
      if (kt(t, e), It(e), r & 512 && n !== null && Vr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          is(o, "");
        } catch (m) {
          Se(e, e.return, m);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var s = e.memoizedProps, i = n !== null ? n.memoizedProps : s, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && s.type === "radio" && s.name != null && Zm(o, s), fc(a, i);
          var c = fc(a, s);
          for (i = 0; i < l.length; i += 2) {
            var d = l[i], u = l[i + 1];
            d === "style" ? rg(o, u) : d === "dangerouslySetInnerHTML" ? tg(o, u) : d === "children" ? is(o, u) : Du(o, d, u, c);
          }
          switch (a) {
            case "input":
              ac(o, s);
              break;
            case "textarea":
              Jm(o, s);
              break;
            case "select":
              var f = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!s.multiple;
              var v = s.value;
              v != null ? Kr(o, !!s.multiple, v, !1) : f !== !!s.multiple && (s.defaultValue != null ? Kr(
                o,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : Kr(o, !!s.multiple, s.multiple ? [] : "", !1));
          }
          o[ms] = s;
        } catch (m) {
          Se(e, e.return, m);
        }
      }
      break;
    case 6:
      if (kt(t, e), It(e), r & 4) {
        if (e.stateNode === null) throw Error(A(162));
        o = e.stateNode, s = e.memoizedProps;
        try {
          o.nodeValue = s;
        } catch (m) {
          Se(e, e.return, m);
        }
      }
      break;
    case 3:
      if (kt(t, e), It(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        us(t.containerInfo);
      } catch (m) {
        Se(e, e.return, m);
      }
      break;
    case 4:
      kt(t, e), It(e);
      break;
    case 13:
      kt(t, e), It(e), o = e.child, o.flags & 8192 && (s = o.memoizedState !== null, o.stateNode.isHidden = s, !s || o.alternate !== null && o.alternate.memoizedState !== null || (ad = Te())), r & 4 && Dp(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (We = (c = We) || d, kt(t, e), We = c) : kt(t, e), It(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !d && e.mode & 1) for (B = e, d = e.child; d !== null; ) {
          for (u = B = d; B !== null; ) {
            switch (f = B, v = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Zo(4, f, f.return);
                break;
              case 1:
                Vr(f, f.return);
                var w = f.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (m) {
                    Se(r, n, m);
                  }
                }
                break;
              case 5:
                Vr(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  Mp(u);
                  continue;
                }
            }
            v !== null ? (v.return = f, B = v) : Mp(u);
          }
          d = d.sibling;
        }
        e: for (d = null, u = e; ; ) {
          if (u.tag === 5) {
            if (d === null) {
              d = u;
              try {
                o = u.stateNode, c ? (s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = u.stateNode, l = u.memoizedProps.style, i = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = ng("display", i));
              } catch (m) {
                Se(e, e.return, m);
              }
            }
          } else if (u.tag === 6) {
            if (d === null) try {
              u.stateNode.nodeValue = c ? "" : u.memoizedProps;
            } catch (m) {
              Se(e, e.return, m);
            }
          } else if ((u.tag !== 22 && u.tag !== 23 || u.memoizedState === null || u === e) && u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
          if (u === e) break e;
          for (; u.sibling === null; ) {
            if (u.return === null || u.return === e) break e;
            d === u && (d = null), u = u.return;
          }
          d === u && (d = null), u.sibling.return = u.return, u = u.sibling;
        }
      }
      break;
    case 19:
      kt(t, e), It(e), r & 4 && Dp(e);
      break;
    case 21:
      break;
    default:
      kt(
        t,
        e
      ), It(e);
  }
}
function It(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Dv(n)) {
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
          r.flags & 32 && (is(o, ""), r.flags &= -33);
          var s = Pp(e);
          $c(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, a = Pp(e);
          Bc(e, a, i);
          break;
        default:
          throw Error(A(161));
      }
    } catch (l) {
      Se(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function KS(e, t, n) {
  B = e, Av(e);
}
function Av(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var o = B, s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || si;
      if (!i) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || We;
        a = si;
        var c = We;
        if (si = i, (We = l) && !c) for (B = o; B !== null; ) i = B, l = i.child, i.tag === 22 && i.memoizedState !== null ? Ap(o) : l !== null ? (l.return = i, B = l) : Ap(o);
        for (; s !== null; ) B = s, Av(s), s = s.sibling;
        B = o, si = a, We = c;
      }
      Np(e);
    } else o.subtreeFlags & 8772 && s !== null ? (s.return = o, B = s) : Np(e);
  }
}
function Np(e) {
  for (; B !== null; ) {
    var t = B;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            We || _a(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !We) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Pt(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && pp(t, s, r);
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
              pp(t, i, n);
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
                var d = c.memoizedState;
                if (d !== null) {
                  var u = d.dehydrated;
                  u !== null && us(u);
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
        We || t.flags & 512 && zc(t);
      } catch (f) {
        Se(t, t.return, f);
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
function Mp(e) {
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
function Ap(e) {
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
            Se(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Se(t, o, l);
            }
          }
          var s = t.return;
          try {
            zc(t);
          } catch (l) {
            Se(t, s, l);
          }
          break;
        case 5:
          var i = t.return;
          try {
            zc(t);
          } catch (l) {
            Se(t, i, l);
          }
      }
    } catch (l) {
      Se(t, t.return, l);
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
var GS = Math.ceil, la = fn.ReactCurrentDispatcher, sd = fn.ReactCurrentOwner, St = fn.ReactCurrentBatchConfig, te = 0, Le = null, Ne = null, Fe = 0, it = 0, zr = Gn(0), Ae = 0, Ss = null, hr = 0, Ia = 0, id = 0, Jo = null, Je = null, ad = 0, ao = 1 / 0, Qt = null, ca = !1, Uc = null, Ln = null, ii = !1, Dn = null, ua = 0, es = 0, Wc = null, ji = -1, Ri = 0;
function Qe() {
  return te & 6 ? Te() : ji !== -1 ? ji : ji = Te();
}
function _n(e) {
  return e.mode & 1 ? te & 2 && Fe !== 0 ? Fe & -Fe : MS.transition !== null ? (Ri === 0 && (Ri = mg()), Ri) : (e = ie, e !== 0 || (e = window.event, e = e === void 0 ? 16 : bg(e.type)), e) : 1;
}
function At(e, t, n, r) {
  if (50 < es) throw es = 0, Wc = null, Error(A(185));
  Rs(e, n, r), (!(te & 2) || e !== Le) && (e === Le && (!(te & 2) && (Ia |= n), Ae === 4 && Tn(e, Fe)), rt(e, r), n === 1 && te === 0 && !(t.mode & 1) && (ao = Te() + 500, ja && Yn()));
}
function rt(e, t) {
  var n = e.callbackNode;
  M1(e, t);
  var r = Gi(e, e === Le ? Fe : 0);
  if (r === 0) n !== null && zf(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && zf(n), t === 1) e.tag === 0 ? NS(jp.bind(null, e)) : Bg(jp.bind(null, e)), ES(function() {
      !(te & 6) && Yn();
    }), n = null;
    else {
      switch (gg(r)) {
        case 1:
          n = Ru;
          break;
        case 4:
          n = pg;
          break;
        case 16:
          n = Ki;
          break;
        case 536870912:
          n = hg;
          break;
        default:
          n = Ki;
      }
      n = Vv(n, jv.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function jv(e, t) {
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
    var s = Lv();
    (Le !== e || Fe !== t) && (Qt = null, ao = Te() + 500, lr(e, t));
    do
      try {
        QS();
        break;
      } catch (a) {
        Rv(e, a);
      }
    while (!0);
    Ku(), la.current = s, te = o, Ne !== null ? t = 0 : (Le = null, Fe = 0, t = Ae);
  }
  if (t !== 0) {
    if (t === 2 && (o = vc(e), o !== 0 && (r = o, t = Hc(e, o))), t === 1) throw n = Ss, lr(e, 0), Tn(e, r), rt(e, Te()), n;
    if (t === 6) Tn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !YS(o) && (t = da(e, r), t === 2 && (s = vc(e), s !== 0 && (r = s, t = Hc(e, s))), t === 1)) throw n = Ss, lr(e, 0), Tn(e, r), rt(e, Te()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          tr(e, Je, Qt);
          break;
        case 3:
          if (Tn(e, r), (r & 130023424) === r && (t = ad + 500 - Te(), 10 < t)) {
            if (Gi(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Qe(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Ec(tr.bind(null, e, Je, Qt), t);
            break;
          }
          tr(e, Je, Qt);
          break;
        case 4:
          if (Tn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Mt(r);
            s = 1 << i, i = t[i], i > o && (o = i), r &= ~s;
          }
          if (r = o, r = Te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * GS(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ec(tr.bind(null, e, Je, Qt), r);
            break;
          }
          tr(e, Je, Qt);
          break;
        case 5:
          tr(e, Je, Qt);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return rt(e, Te()), e.callbackNode === n ? jv.bind(null, e) : null;
}
function Hc(e, t) {
  var n = Jo;
  return e.current.memoizedState.isDehydrated && (lr(e, t).flags |= 256), e = da(e, t), e !== 2 && (t = Je, Je = n, t !== null && Kc(t)), e;
}
function Kc(e) {
  Je === null ? Je = e : Je.push.apply(Je, e);
}
function YS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], s = o.getSnapshot;
        o = o.value;
        try {
          if (!jt(s(), o)) return !1;
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
function Tn(e, t) {
  for (t &= ~id, t &= ~Ia, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Mt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function jp(e) {
  if (te & 6) throw Error(A(327));
  qr();
  var t = Gi(e, 0);
  if (!(t & 1)) return rt(e, Te()), null;
  var n = da(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = vc(e);
    r !== 0 && (t = r, n = Hc(e, r));
  }
  if (n === 1) throw n = Ss, lr(e, 0), Tn(e, t), rt(e, Te()), n;
  if (n === 6) throw Error(A(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, tr(e, Je, Qt), rt(e, Te()), null;
}
function ld(e, t) {
  var n = te;
  te |= 1;
  try {
    return e(t);
  } finally {
    te = n, te === 0 && (ao = Te() + 500, ja && Yn());
  }
}
function mr(e) {
  Dn !== null && Dn.tag === 0 && !(te & 6) && qr();
  var t = te;
  te |= 1;
  var n = St.transition, r = ie;
  try {
    if (St.transition = null, ie = 1, e) return e();
  } finally {
    ie = r, St.transition = n, te = t, !(te & 6) && Yn();
  }
}
function cd() {
  it = zr.current, ue(zr);
}
function lr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, kS(n)), Ne !== null) for (n = Ne.return; n !== null; ) {
    var r = n;
    switch (Uu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Zi();
        break;
      case 3:
        so(), ue(tt), ue(Ke), Zu();
        break;
      case 5:
        qu(r);
        break;
      case 4:
        so();
        break;
      case 13:
        ue(ge);
        break;
      case 19:
        ue(ge);
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
  if (Le = e, Ne = e = In(e.current, null), Fe = it = t, Ae = 0, Ss = null, id = Ia = hr = 0, Je = Jo = null, sr !== null) {
    for (t = 0; t < sr.length; t++) if (n = sr[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, s = n.pending;
      if (s !== null) {
        var i = s.next;
        s.next = o, r.next = i;
      }
      n.pending = r;
    }
    sr = null;
  }
  return e;
}
function Rv(e, t) {
  do {
    var n = Ne;
    try {
      if (Ku(), Ni.current = aa, ia) {
        for (var r = ye.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        ia = !1;
      }
      if (pr = 0, Re = Me = ye = null, qo = !1, ys = 0, sd.current = null, n === null || n.return === null) {
        Ae = 1, Ss = t, Ne = null;
        break;
      }
      e: {
        var s = e, i = n.return, a = n, l = t;
        if (t = Fe, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var c = l, d = a, u = d.tag;
          if (!(d.mode & 1) && (u === 0 || u === 11 || u === 15)) {
            var f = d.alternate;
            f ? (d.updateQueue = f.updateQueue, d.memoizedState = f.memoizedState, d.lanes = f.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var v = xp(i);
          if (v !== null) {
            v.flags &= -257, wp(v, i, a, s, t), v.mode & 1 && yp(s, c, t), t = v, l = c;
            var w = t.updateQueue;
            if (w === null) {
              var m = /* @__PURE__ */ new Set();
              m.add(l), t.updateQueue = m;
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              yp(s, c, t), ud();
              break e;
            }
            l = Error(A(426));
          }
        } else if (pe && a.mode & 1) {
          var S = xp(i);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), wp(S, i, a, s, t), Wu(io(l, a));
            break e;
          }
        }
        s = l = io(l, a), Ae !== 4 && (Ae = 2), Jo === null ? Jo = [s] : Jo.push(s), s = i;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var g = gv(s, l, t);
              fp(s, g);
              break e;
            case 1:
              a = l;
              var h = s.type, y = s.stateNode;
              if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Ln === null || !Ln.has(y)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var b = vv(s, a, t);
                fp(s, b);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Iv(n);
    } catch (C) {
      t = C, Ne === n && n !== null && (Ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Lv() {
  var e = la.current;
  return la.current = aa, e === null ? aa : e;
}
function ud() {
  (Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4), Le === null || !(hr & 268435455) && !(Ia & 268435455) || Tn(Le, Fe);
}
function da(e, t) {
  var n = te;
  te |= 2;
  var r = Lv();
  (Le !== e || Fe !== t) && (Qt = null, lr(e, t));
  do
    try {
      XS();
      break;
    } catch (o) {
      Rv(e, o);
    }
  while (!0);
  if (Ku(), te = n, la.current = r, Ne !== null) throw Error(A(261));
  return Le = null, Fe = 0, Ae;
}
function XS() {
  for (; Ne !== null; ) _v(Ne);
}
function QS() {
  for (; Ne !== null && !S1(); ) _v(Ne);
}
function _v(e) {
  var t = Fv(e.alternate, e, it);
  e.memoizedProps = e.pendingProps, t === null ? Iv(e) : Ne = t, sd.current = null;
}
function Iv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = US(n, t), n !== null) {
        n.flags &= 32767, Ne = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ae = 6, Ne = null;
        return;
      }
    } else if (n = $S(n, t, it), n !== null) {
      Ne = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ne = t;
      return;
    }
    Ne = t = e;
  } while (t !== null);
  Ae === 0 && (Ae = 5);
}
function tr(e, t, n) {
  var r = ie, o = St.transition;
  try {
    St.transition = null, ie = 1, qS(e, t, n, r);
  } finally {
    St.transition = o, ie = r;
  }
  return null;
}
function qS(e, t, n, r) {
  do
    qr();
  while (Dn !== null);
  if (te & 6) throw Error(A(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(A(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (A1(e, s), e === Le && (Ne = Le = null, Fe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ii || (ii = !0, Vv(Ki, function() {
    return qr(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = St.transition, St.transition = null;
    var i = ie;
    ie = 1;
    var a = te;
    te |= 4, sd.current = null, HS(e, n), Mv(n, e), vS(Cc), Yi = !!bc, Cc = bc = null, e.current = n, KS(n), b1(), te = a, ie = i, St.transition = s;
  } else e.current = n;
  if (ii && (ii = !1, Dn = e, ua = o), s = e.pendingLanes, s === 0 && (Ln = null), E1(n.stateNode), rt(e, Te()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ca) throw ca = !1, e = Uc, Uc = null, e;
  return ua & 1 && e.tag !== 0 && qr(), s = e.pendingLanes, s & 1 ? e === Wc ? es++ : (es = 0, Wc = e) : es = 0, Yn(), null;
}
function qr() {
  if (Dn !== null) {
    var e = gg(ua), t = St.transition, n = ie;
    try {
      if (St.transition = null, ie = 16 > e ? 16 : e, Dn === null) var r = !1;
      else {
        if (e = Dn, Dn = null, ua = 0, te & 6) throw Error(A(331));
        var o = te;
        for (te |= 4, B = e.current; B !== null; ) {
          var s = B, i = s.child;
          if (B.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (B = c; B !== null; ) {
                  var d = B;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zo(8, d, s);
                  }
                  var u = d.child;
                  if (u !== null) u.return = d, B = u;
                  else for (; B !== null; ) {
                    d = B;
                    var f = d.sibling, v = d.return;
                    if (Pv(d), d === c) {
                      B = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = v, B = f;
                      break;
                    }
                    B = v;
                  }
                }
              }
              var w = s.alternate;
              if (w !== null) {
                var m = w.child;
                if (m !== null) {
                  w.child = null;
                  do {
                    var S = m.sibling;
                    m.sibling = null, m = S;
                  } while (m !== null);
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
                Zo(9, s, s.return);
            }
            var g = s.sibling;
            if (g !== null) {
              g.return = s.return, B = g;
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
              Se(a, a.return, C);
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
        if (te = o, Yn(), $t && typeof $t.onPostCommitFiberRoot == "function") try {
          $t.onPostCommitFiberRoot(Pa, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ie = n, St.transition = t;
    }
  }
  return !1;
}
function Rp(e, t, n) {
  t = io(n, t), t = gv(e, t, 1), e = Rn(e, t, 1), t = Qe(), e !== null && (Rs(e, 1, t), rt(e, t));
}
function Se(e, t, n) {
  if (e.tag === 3) Rp(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Rp(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ln === null || !Ln.has(r))) {
        e = io(n, e), e = vv(t, e, 1), t = Rn(t, e, 1), e = Qe(), t !== null && (Rs(t, 1, e), rt(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function ZS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Qe(), e.pingedLanes |= e.suspendedLanes & n, Le === e && (Fe & n) === n && (Ae === 4 || Ae === 3 && (Fe & 130023424) === Fe && 500 > Te() - ad ? lr(e, 0) : id |= n), rt(e, t);
}
function Ov(e, t) {
  t === 0 && (e.mode & 1 ? (t = Qs, Qs <<= 1, !(Qs & 130023424) && (Qs = 4194304)) : t = 1);
  var n = Qe();
  e = an(e, t), e !== null && (Rs(e, t, n), rt(e, n));
}
function JS(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Ov(e, n);
}
function eb(e, t) {
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
  r !== null && r.delete(t), Ov(e, n);
}
var Fv;
Fv = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || tt.current) et = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return et = !1, BS(e, t, n);
    et = !!(e.flags & 131072);
  }
  else et = !1, pe && t.flags & 1048576 && $g(t, ta, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ai(e, t), e = t.pendingProps;
      var o = no(t, Ke.current);
      Qr(t, n), o = ed(null, t, r, e, o, n);
      var s = td();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, nt(r) ? (s = !0, Ji(t)) : s = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Xu(t), o.updater = La, t.stateNode = o, o._reactInternals = t, jc(t, r, e, n), t = _c(null, t, r, !0, s, n)) : (t.tag = 0, pe && s && $u(t), Xe(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ai(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = nb(r), e = Pt(r, e), o) {
          case 0:
            t = Lc(null, t, r, e, n);
            break e;
          case 1:
            t = Cp(null, t, r, e, n);
            break e;
          case 11:
            t = Sp(null, t, r, e, n);
            break e;
          case 14:
            t = bp(null, t, r, Pt(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Pt(r, o), Lc(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Pt(r, o), Cp(e, t, r, o, n);
    case 3:
      e: {
        if (Sv(t), e === null) throw Error(A(387));
        r = t.pendingProps, s = t.memoizedState, o = s.element, Yg(e, t), oa(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          o = io(Error(A(423)), t), t = kp(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = io(Error(A(424)), t), t = kp(e, t, r, n, o);
          break e;
        } else for (lt = jn(t.stateNode.containerInfo.firstChild), ct = t, pe = !0, Nt = null, n = Kg(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ro(), r === o) {
            t = ln(e, t, n);
            break e;
          }
          Xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Xg(t), e === null && Nc(t), r = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, i = o.children, kc(r, o) ? i = null : s !== null && kc(r, s) && (t.flags |= 32), wv(e, t), Xe(e, t, i, n), t.child;
    case 6:
      return e === null && Nc(t), null;
    case 13:
      return bv(e, t, n);
    case 4:
      return Qu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = oo(t, null, r, n) : Xe(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Pt(r, o), Sp(e, t, r, o, n);
    case 7:
      return Xe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Xe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Xe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, s = t.memoizedProps, i = o.value, ae(na, r._currentValue), r._currentValue = i, s !== null) if (jt(s.value, i)) {
          if (s.children === o.children && !tt.current) {
            t = ln(e, t, n);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var a = s.dependencies;
          if (a !== null) {
            i = s.child;
            for (var l = a.firstContext; l !== null; ) {
              if (l.context === r) {
                if (s.tag === 1) {
                  l = en(-1, n & -n), l.tag = 2;
                  var c = s.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var d = c.pending;
                    d === null ? l.next = l : (l.next = d.next, d.next = l), c.pending = l;
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
        Xe(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Qr(t, n), o = bt(o), r = r(o), t.flags |= 1, Xe(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Pt(r, t.pendingProps), o = Pt(r.type, o), bp(e, t, r, o, n);
    case 15:
      return yv(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Pt(r, o), Ai(e, t), t.tag = 1, nt(r) ? (e = !0, Ji(t)) : e = !1, Qr(t, n), mv(t, r, o), jc(t, r, o, n), _c(null, t, r, !0, e, n);
    case 19:
      return Cv(e, t, n);
    case 22:
      return xv(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function Vv(e, t) {
  return fg(e, t);
}
function tb(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function wt(e, t, n, r) {
  return new tb(e, t, n, r);
}
function dd(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function nb(e) {
  if (typeof e == "function") return dd(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Mu) return 11;
    if (e === Au) return 14;
  }
  return 2;
}
function In(e, t) {
  var n = e.alternate;
  return n === null ? (n = wt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Li(e, t, n, r, o, s) {
  var i = 2;
  if (r = e, typeof e == "function") dd(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Mr:
      return cr(n.children, o, s, t);
    case Nu:
      i = 8, o |= 8;
      break;
    case nc:
      return e = wt(12, n, t, o | 2), e.elementType = nc, e.lanes = s, e;
    case rc:
      return e = wt(13, n, t, o), e.elementType = rc, e.lanes = s, e;
    case oc:
      return e = wt(19, n, t, o), e.elementType = oc, e.lanes = s, e;
    case Xm:
      return Oa(n, o, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Gm:
          i = 10;
          break e;
        case Ym:
          i = 9;
          break e;
        case Mu:
          i = 11;
          break e;
        case Au:
          i = 14;
          break e;
        case Cn:
          i = 16, r = null;
          break e;
      }
      throw Error(A(130, e == null ? e : typeof e, ""));
  }
  return t = wt(i, n, t, o), t.elementType = e, t.type = r, t.lanes = s, t;
}
function cr(e, t, n, r) {
  return e = wt(7, e, r, t), e.lanes = n, e;
}
function Oa(e, t, n, r) {
  return e = wt(22, e, r, t), e.elementType = Xm, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Nl(e, t, n) {
  return e = wt(6, e, null, t), e.lanes = n, e;
}
function Ml(e, t, n) {
  return t = wt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function rb(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ul(0), this.expirationTimes = ul(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ul(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function fd(e, t, n, r, o, s, i, a, l) {
  return e = new rb(e, t, n, a, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = wt(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Xu(s), e;
}
function ob(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Nr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function zv(e) {
  if (!e) return Vn;
  e = e._reactInternals;
  e: {
    if (Sr(e) !== e || e.tag !== 1) throw Error(A(170));
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
    if (nt(n)) return zg(e, n, t);
  }
  return t;
}
function Bv(e, t, n, r, o, s, i, a, l) {
  return e = fd(n, r, !0, e, o, s, i, a, l), e.context = zv(null), n = e.current, r = Qe(), o = _n(n), s = en(r, o), s.callback = t ?? null, Rn(n, s, o), e.current.lanes = o, Rs(e, o, r), rt(e, r), e;
}
function Fa(e, t, n, r) {
  var o = t.current, s = Qe(), i = _n(o);
  return n = zv(n), t.context === null ? t.context = n : t.pendingContext = n, t = en(s, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Rn(o, t, i), e !== null && (At(e, o, i, s), Di(e, o, i)), i;
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
function Lp(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function pd(e, t) {
  Lp(e, t), (e = e.alternate) && Lp(e, t);
}
function sb() {
  return null;
}
var $v = typeof reportError == "function" ? reportError : function(e) {
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
    mr(function() {
      Fa(null, e, null, null);
    }), t[sn] = null;
  }
};
function Va(e) {
  this._internalRoot = e;
}
Va.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = xg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < En.length && t !== 0 && t < En[n].priority; n++) ;
    En.splice(n, 0, e), n === 0 && Sg(e);
  }
};
function md(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function za(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function _p() {
}
function ib(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var c = fa(i);
        s.call(c);
      };
    }
    var i = Bv(t, r, e, 0, null, !1, !1, "", _p);
    return e._reactRootContainer = i, e[sn] = i.current, ps(e.nodeType === 8 ? e.parentNode : e), mr(), i;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var c = fa(l);
      a.call(c);
    };
  }
  var l = fd(e, 0, !1, null, null, !1, !1, "", _p);
  return e._reactRootContainer = l, e[sn] = l.current, ps(e.nodeType === 8 ? e.parentNode : e), mr(function() {
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
  } else i = ib(n, t, e, o, r);
  return fa(i);
}
vg = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = zo(t.pendingLanes);
        n !== 0 && (Lu(t, n | 1), rt(t, Te()), !(te & 6) && (ao = Te() + 500, Yn()));
      }
      break;
    case 13:
      mr(function() {
        var r = an(e, 1);
        if (r !== null) {
          var o = Qe();
          At(r, e, 1, o);
        }
      }), pd(e, 1);
  }
};
_u = function(e) {
  if (e.tag === 13) {
    var t = an(e, 134217728);
    if (t !== null) {
      var n = Qe();
      At(t, e, 134217728, n);
    }
    pd(e, 134217728);
  }
};
yg = function(e) {
  if (e.tag === 13) {
    var t = _n(e), n = an(e, t);
    if (n !== null) {
      var r = Qe();
      At(n, e, t, r);
    }
    pd(e, t);
  }
};
xg = function() {
  return ie;
};
wg = function(e, t) {
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
            qm(r), ac(r, o);
          }
        }
      }
      break;
    case "textarea":
      Jm(e, n);
      break;
    case "select":
      t = n.value, t != null && Kr(e, !!n.multiple, t, !1);
  }
};
ig = ld;
ag = mr;
var ab = { usingClientEntryPoint: !1, Events: [_s, Lr, Aa, og, sg, ld] }, Lo = { findFiberByHostInstance: or, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, lb = { bundleType: Lo.bundleType, version: Lo.version, rendererPackageName: Lo.rendererPackageName, rendererConfig: Lo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: fn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = ug(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Lo.findFiberByHostInstance || sb, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ai.isDisabled && ai.supportsFiber) try {
    Pa = ai.inject(lb), $t = ai;
  } catch {
  }
}
ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ab;
ht.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!md(t)) throw Error(A(200));
  return ob(e, t, null, n);
};
ht.createRoot = function(e, t) {
  if (!md(e)) throw Error(A(299));
  var n = !1, r = "", o = $v;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = fd(e, 1, !1, null, null, n, !1, r, o), e[sn] = t.current, ps(e.nodeType === 8 ? e.parentNode : e), new hd(t);
};
ht.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e)));
  return e = ug(t), e = e === null ? null : e.stateNode, e;
};
ht.flushSync = function(e) {
  return mr(e);
};
ht.hydrate = function(e, t, n) {
  if (!za(t)) throw Error(A(200));
  return Ba(null, e, t, !0, n);
};
ht.hydrateRoot = function(e, t, n) {
  if (!md(e)) throw Error(A(405));
  var r = n != null && n.hydratedSources || null, o = !1, s = "", i = $v;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Bv(t, null, e, 1, n ?? null, o, !1, s, i), e[sn] = t.current, ps(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Va(t);
};
ht.render = function(e, t, n) {
  if (!za(t)) throw Error(A(200));
  return Ba(null, e, t, !1, n);
};
ht.unmountComponentAtNode = function(e) {
  if (!za(e)) throw Error(A(40));
  return e._reactRootContainer ? (mr(function() {
    Ba(null, null, e, !1, function() {
      e._reactRootContainer = null, e[sn] = null;
    });
  }), !0) : !1;
};
ht.unstable_batchedUpdates = ld;
ht.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!za(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return Ba(e, t, n, !1, r);
};
ht.version = "18.3.1-next-f1338f8080-20240426";
function Uv() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uv);
    } catch (e) {
      console.error(e);
    }
}
Uv(), Um.exports = ht;
var yo = Um.exports;
const cb = /* @__PURE__ */ Mm(yo);
var $a, Ip = yo;
$a = Ip.createRoot, Ip.hydrateRoot;
function Wv(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Wv(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ub() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Wv(e)) && (r && (r += " "), r += t);
  return r;
}
const gd = "-", db = (e) => {
  const t = pb(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(gd);
      return a[0] === "" && a.length !== 1 && a.shift(), Hv(a, t) || fb(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const l = n[i] || [];
      return a && r[i] ? [...l, ...r[i]] : l;
    }
  };
}, Hv = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Hv(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(gd);
  return (i = t.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : i.classGroupId;
}, Op = /^\[(.+)\]$/, fb = (e) => {
  if (Op.test(e)) {
    const t = Op.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, pb = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return mb(Object.entries(e.classGroups), n).forEach(([s, i]) => {
    Gc(i, r, s, t);
  }), r;
}, Gc = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Fp(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (hb(o)) {
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
      Gc(i, Fp(t, s), n, r);
    });
  });
}, Fp = (e, t) => {
  let n = e;
  return t.split(gd).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, hb = (e) => e.isThemeGetter, mb = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a])) : s);
  return [n, o];
}) : e, gb = (e) => {
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
}, Kv = "!", vb = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], s = t.length, i = (a) => {
    const l = [];
    let c = 0, d = 0, u;
    for (let S = 0; S < a.length; S++) {
      let g = a[S];
      if (c === 0) {
        if (g === o && (r || a.slice(S, S + s) === t)) {
          l.push(a.slice(d, S)), d = S + s;
          continue;
        }
        if (g === "/") {
          u = S;
          continue;
        }
      }
      g === "[" ? c++ : g === "]" && c--;
    }
    const f = l.length === 0 ? a : a.substring(d), v = f.startsWith(Kv), w = v ? f.substring(1) : f, m = u && u > d ? u - d : void 0;
    return {
      modifiers: l,
      hasImportantModifier: v,
      baseClassName: w,
      maybePostfixModifierPosition: m
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
}, xb = (e) => ({
  cache: gb(e.cacheSize),
  parseClassName: vb(e),
  ...db(e)
}), wb = /\s+/, Sb = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, s = [], i = e.trim().split(wb);
  let a = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const c = i[l], {
      modifiers: d,
      hasImportantModifier: u,
      baseClassName: f,
      maybePostfixModifierPosition: v
    } = n(c);
    let w = !!v, m = r(w ? f.substring(0, v) : f);
    if (!m) {
      if (!w) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (m = r(f), !m) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      w = !1;
    }
    const S = yb(d).join(":"), g = u ? S + Kv : S, h = g + m;
    if (s.includes(h))
      continue;
    s.push(h);
    const y = o(m, w);
    for (let b = 0; b < y.length; ++b) {
      const C = y[b];
      s.push(g + C);
    }
    a = c + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function bb() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Gv(t)) && (r && (r += " "), r += n);
  return r;
}
const Gv = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Gv(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Cb(e, ...t) {
  let n, r, o, s = i;
  function i(l) {
    const c = t.reduce((d, u) => u(d), e());
    return n = xb(c), r = n.cache.get, o = n.cache.set, s = a, a(l);
  }
  function a(l) {
    const c = r(l);
    if (c)
      return c;
    const d = Sb(l, n);
    return o(l, d), d;
  }
  return function() {
    return s(bb.apply(null, arguments));
  };
}
const le = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Yv = /^\[(?:([a-z-]+):)?(.+)\]$/i, kb = /^\d+\/\d+$/, Eb = /* @__PURE__ */ new Set(["px", "full", "screen"]), Tb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Pb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Db = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Nb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Mb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Xt = (e) => Zr(e) || Eb.has(e) || kb.test(e), yn = (e) => xo(e, "length", Fb), Zr = (e) => !!e && !Number.isNaN(Number(e)), Al = (e) => xo(e, "number", Zr), _o = (e) => !!e && Number.isInteger(Number(e)), Ab = (e) => e.endsWith("%") && Zr(e.slice(0, -1)), X = (e) => Yv.test(e), xn = (e) => Tb.test(e), jb = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Rb = (e) => xo(e, jb, Xv), Lb = (e) => xo(e, "position", Xv), _b = /* @__PURE__ */ new Set(["image", "url"]), Ib = (e) => xo(e, _b, zb), Ob = (e) => xo(e, "", Vb), Io = () => !0, xo = (e, t, n) => {
  const r = Yv.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, Fb = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Pb.test(e) && !Db.test(e)
), Xv = () => !1, Vb = (e) => Nb.test(e), zb = (e) => Mb.test(e), Bb = () => {
  const e = le("colors"), t = le("spacing"), n = le("blur"), r = le("brightness"), o = le("borderColor"), s = le("borderRadius"), i = le("borderSpacing"), a = le("borderWidth"), l = le("contrast"), c = le("grayscale"), d = le("hueRotate"), u = le("invert"), f = le("gap"), v = le("gradientColorStops"), w = le("gradientColorStopPositions"), m = le("inset"), S = le("margin"), g = le("opacity"), h = le("padding"), y = le("saturate"), b = le("scale"), C = le("sepia"), k = le("skew"), E = le("space"), T = le("translate"), j = () => ["auto", "contain", "none"], M = () => ["auto", "hidden", "clip", "visible", "scroll"], D = () => ["auto", X, t], N = () => [X, t], O = () => ["", Xt, yn], $ = () => ["auto", Zr, X], W = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], R = () => ["solid", "dashed", "dotted", "double", "none"], U = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], _ = () => ["", "0", X], F = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Y = () => [Zr, X];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Io],
      spacing: [Xt, yn],
      blur: ["none", "", xn, X],
      brightness: Y(),
      borderColor: [e],
      borderRadius: ["none", "", "full", xn, X],
      borderSpacing: N(),
      borderWidth: O(),
      contrast: Y(),
      grayscale: _(),
      hueRotate: Y(),
      invert: _(),
      gap: N(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ab, yn],
      inset: D(),
      margin: D(),
      opacity: Y(),
      padding: N(),
      saturate: Y(),
      scale: Y(),
      sepia: _(),
      skew: Y(),
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
        columns: [xn]
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
        object: [...W(), X]
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
        z: ["auto", _o, X]
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
        grow: _()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: _()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", _o, X]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Io]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", _o, X]
        }, X]
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
        "grid-rows": [Io]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [_o, X]
        }, X]
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
          screen: [xn]
        }, xn]
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
        text: ["base", xn, yn]
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
        font: [Io]
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
        decoration: [...R(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Xt, yn]
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
        bg: [...W(), Lb]
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
        bg: ["auto", "cover", "contain", Rb]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Ib]
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
        from: [v]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [v]
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
        border: [...R(), "hidden"]
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
        divide: R()
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
        outline: ["", ...R()]
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
        outline: [Xt, yn]
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
        "ring-offset": [Xt, yn]
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
        shadow: ["", "inner", "none", xn, Ob]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Io]
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
        "mix-blend": [...U(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": U()
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
        "drop-shadow": ["", "none", xn, X]
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
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [u]
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
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [u]
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
        duration: Y()
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
        delay: Y()
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
        rotate: [_o, X]
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
        stroke: [Xt, yn, Al]
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
}, $b = /* @__PURE__ */ Cb(Bb);
function be(...e) {
  return $b(ub(e));
}
function vd({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card",
      className: be(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        e
      ),
      ...t
    }
  );
}
function Qv({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: be("px-6", e),
      ...t
    }
  );
}
function Ub({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: be("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
const tn = x.forwardRef(
  ({ className: e, variant: t = "default", size: n = "default", ...r }, o) => /* @__PURE__ */ p.jsx(
    "button",
    {
      className: be(
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
tn.displayName = "Button";
function Vp(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function ee(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Wb(e, t) {
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
    const c = (u) => {
      var g;
      const { scope: f, children: v, ...w } = u, m = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a, S = x.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ p.jsx(m.Provider, { value: S, children: v });
    };
    c.displayName = s + "Provider";
    function d(u, f) {
      var m;
      const v = ((m = f == null ? void 0 : f[e]) == null ? void 0 : m[l]) || a, w = x.useContext(v);
      if (w) return w;
      if (i !== void 0) return i;
      throw new Error(`\`${u}\` must be used within \`${s}\``);
    }
    return [c, d];
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
  return o.scopeName = e, [r, Hb(o, ...t)];
}
function Hb(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = r.reduce((a, { useScope: l, scopeName: c }) => {
        const u = l(s)[`__scope${c}`];
        return { ...a, ...u };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function zp(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function qv(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = zp(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : zp(e[o], null);
        }
      };
  };
}
function Ce(...e) {
  return x.useCallback(qv(...e), e);
}
// @__NO_SIDE_EFFECTS__
function bs(e) {
  const t = /* @__PURE__ */ Kb(e), n = x.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = x.Children.toArray(s), l = a.find(Yb);
    if (l) {
      const c = l.props.children, d = a.map((u) => u === l ? x.Children.count(c) > 1 ? x.Children.only(null) : x.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: x.isValidElement(c) ? x.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Kb(e) {
  const t = x.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (x.isValidElement(o)) {
      const i = Qb(o), a = Xb(s, o.props);
      return o.type !== x.Fragment && (a.ref = r ? qv(r, i) : i), x.cloneElement(o, a);
    }
    return x.Children.count(o) > 1 ? x.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Gb = Symbol("radix.slottable");
function Yb(e) {
  return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Gb;
}
function Xb(e, t) {
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
function Qb(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Zv(e) {
  const t = e + "CollectionProvider", [n, r] = wo(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (m) => {
    const { scope: S, children: g } = m, h = G.useRef(null), y = G.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p.jsx(o, { scope: S, itemMap: y, collectionRef: h, children: g });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ bs(a), c = G.forwardRef(
    (m, S) => {
      const { scope: g, children: h } = m, y = s(a, g), b = Ce(S, y.collectionRef);
      return /* @__PURE__ */ p.jsx(l, { ref: b, children: h });
    }
  );
  c.displayName = a;
  const d = e + "CollectionItemSlot", u = "data-radix-collection-item", f = /* @__PURE__ */ bs(d), v = G.forwardRef(
    (m, S) => {
      const { scope: g, children: h, ...y } = m, b = G.useRef(null), C = Ce(S, b), k = s(d, g);
      return G.useEffect(() => (k.itemMap.set(b, { ref: b, ...y }), () => void k.itemMap.delete(b))), /* @__PURE__ */ p.jsx(f, { [u]: "", ref: C, children: h });
    }
  );
  v.displayName = d;
  function w(m) {
    const S = s(e + "CollectionConsumer", m);
    return G.useCallback(() => {
      const h = S.collectionRef.current;
      if (!h) return [];
      const y = Array.from(h.querySelectorAll(`[${u}]`));
      return Array.from(S.itemMap.values()).sort(
        (k, E) => y.indexOf(k.ref.current) - y.indexOf(E.ref.current)
      );
    }, [S.collectionRef, S.itemMap]);
  }
  return [
    { Provider: i, Slot: c, ItemSlot: v },
    w,
    r
  ];
}
var qb = x.createContext(void 0);
function yd(e) {
  const t = x.useContext(qb);
  return e || t || "ltr";
}
var Zb = [
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
], se = Zb.reduce((e, t) => {
  const n = /* @__PURE__ */ bs(`Primitive.${t}`), r = x.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Jb(e, t) {
  e && yo.flushSync(() => e.dispatchEvent(t));
}
function zn(e) {
  const t = x.useRef(e);
  return x.useEffect(() => {
    t.current = e;
  }), x.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function eC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = zn(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var tC = "DismissableLayer", Yc = "dismissableLayer.update", nC = "dismissableLayer.pointerDownOutside", rC = "dismissableLayer.focusOutside", Bp, Jv = x.createContext({
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
    } = e, c = x.useContext(Jv), [d, u] = x.useState(null), f = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = x.useState({}), w = Ce(t, (E) => u(E)), m = Array.from(c.layers), [S] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), g = m.indexOf(S), h = d ? m.indexOf(d) : -1, y = c.layersWithOutsidePointerEventsDisabled.size > 0, b = h >= g, C = iC((E) => {
      const T = E.target, j = [...c.branches].some((M) => M.contains(T));
      !b || j || (o == null || o(E), i == null || i(E), E.defaultPrevented || a == null || a());
    }, f), k = aC((E) => {
      const T = E.target;
      [...c.branches].some((M) => M.contains(T)) || (s == null || s(E), i == null || i(E), E.defaultPrevented || a == null || a());
    }, f);
    return eC((E) => {
      h === c.layers.size - 1 && (r == null || r(E), !E.defaultPrevented && a && (E.preventDefault(), a()));
    }, f), x.useEffect(() => {
      if (d)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Bp = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), $p(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Bp);
        };
    }, [d, f, n, c]), x.useEffect(() => () => {
      d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), $p());
    }, [d, c]), x.useEffect(() => {
      const E = () => v({});
      return document.addEventListener(Yc, E), () => document.removeEventListener(Yc, E);
    }, []), /* @__PURE__ */ p.jsx(
      se.div,
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
xd.displayName = tC;
var oC = "DismissableLayerBranch", sC = x.forwardRef((e, t) => {
  const n = x.useContext(Jv), r = x.useRef(null), o = Ce(t, r);
  return x.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ p.jsx(se.div, { ...e, ref: o });
});
sC.displayName = oC;
function iC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = zn(e), r = x.useRef(!1), o = x.useRef(() => {
  });
  return x.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          ey(
            nC,
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
function aC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = zn(e), r = x.useRef(!1);
  return x.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && ey(rC, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function $p() {
  const e = new CustomEvent(Yc);
  document.dispatchEvent(e);
}
function ey(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Jb(o, s) : o.dispatchEvent(s);
}
var jl = 0;
function ty() {
  x.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Up()), document.body.insertAdjacentElement("beforeend", e[1] ?? Up()), jl++, () => {
      jl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), jl--;
    };
  }, []);
}
function Up() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Rl = "focusScope.autoFocusOnMount", Ll = "focusScope.autoFocusOnUnmount", Wp = { bubbles: !1, cancelable: !0 }, lC = "FocusScope", wd = x.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = x.useState(null), c = zn(o), d = zn(s), u = x.useRef(null), f = Ce(t, (m) => l(m)), v = x.useRef({
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
      let m = function(y) {
        if (v.paused || !a) return;
        const b = y.target;
        a.contains(b) ? u.current = b : Sn(u.current, { select: !0 });
      }, S = function(y) {
        if (v.paused || !a) return;
        const b = y.relatedTarget;
        b !== null && (a.contains(b) || Sn(u.current, { select: !0 }));
      }, g = function(y) {
        if (document.activeElement === document.body)
          for (const C of y)
            C.removedNodes.length > 0 && Sn(a);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", S);
      const h = new MutationObserver(g);
      return a && h.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", S), h.disconnect();
      };
    }
  }, [r, a, v.paused]), x.useEffect(() => {
    if (a) {
      Kp.add(v);
      const m = document.activeElement;
      if (!a.contains(m)) {
        const g = new CustomEvent(Rl, Wp);
        a.addEventListener(Rl, c), a.dispatchEvent(g), g.defaultPrevented || (cC(hC(ny(a)), { select: !0 }), document.activeElement === m && Sn(a));
      }
      return () => {
        a.removeEventListener(Rl, c), setTimeout(() => {
          const g = new CustomEvent(Ll, Wp);
          a.addEventListener(Ll, d), a.dispatchEvent(g), g.defaultPrevented || Sn(m ?? document.body, { select: !0 }), a.removeEventListener(Ll, d), Kp.remove(v);
        }, 0);
      };
    }
  }, [a, c, d, v]);
  const w = x.useCallback(
    (m) => {
      if (!n && !r || v.paused) return;
      const S = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, g = document.activeElement;
      if (S && g) {
        const h = m.currentTarget, [y, b] = uC(h);
        y && b ? !m.shiftKey && g === b ? (m.preventDefault(), n && Sn(y, { select: !0 })) : m.shiftKey && g === y && (m.preventDefault(), n && Sn(b, { select: !0 })) : g === h && m.preventDefault();
      }
    },
    [n, r, v.paused]
  );
  return /* @__PURE__ */ p.jsx(se.div, { tabIndex: -1, ...i, ref: f, onKeyDown: w });
});
wd.displayName = lC;
function cC(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Sn(r, { select: t }), document.activeElement !== n) return;
}
function uC(e) {
  const t = ny(e), n = Hp(t, e), r = Hp(t.reverse(), e);
  return [n, r];
}
function ny(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Hp(e, t) {
  for (const n of e)
    if (!dC(n, { upTo: t })) return n;
}
function dC(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function fC(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Sn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && fC(e) && t && e.select();
  }
}
var Kp = pC();
function pC() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Gp(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Gp(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Gp(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function hC(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ge = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {
}, mC = Bm[" useId ".trim().toString()] || (() => {
}), gC = 0;
function On(e) {
  const [t, n] = x.useState(mC());
  return Ge(() => {
    n((r) => r ?? String(gC++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const vC = ["top", "right", "bottom", "left"], Bn = Math.min, at = Math.max, pa = Math.round, li = Math.floor, Wt = (e) => ({
  x: e,
  y: e
}), yC = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, xC = {
  start: "end",
  end: "start"
};
function Xc(e, t, n) {
  return at(e, Bn(t, n));
}
function cn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function un(e) {
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
const wC = /* @__PURE__ */ new Set(["top", "bottom"]);
function zt(e) {
  return wC.has(un(e)) ? "y" : "x";
}
function Cd(e) {
  return Sd(zt(e));
}
function SC(e, t, n) {
  n === void 0 && (n = !1);
  const r = So(e), o = Cd(e), s = bd(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = ha(i)), [i, ha(i)];
}
function bC(e) {
  const t = ha(e);
  return [Qc(e), t, Qc(t)];
}
function Qc(e) {
  return e.replace(/start|end/g, (t) => xC[t]);
}
const Yp = ["left", "right"], Xp = ["right", "left"], CC = ["top", "bottom"], kC = ["bottom", "top"];
function EC(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Xp : Yp : t ? Yp : Xp;
    case "left":
    case "right":
      return t ? CC : kC;
    default:
      return [];
  }
}
function TC(e, t, n, r) {
  const o = So(e);
  let s = EC(un(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Qc)))), s;
}
function ha(e) {
  return e.replace(/left|right|bottom|top/g, (t) => yC[t]);
}
function PC(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ry(e) {
  return typeof e != "number" ? PC(e) : {
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
function Qp(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = zt(t), i = Cd(t), a = bd(i), l = un(t), c = s === "y", d = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let v;
  switch (l) {
    case "top":
      v = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      v = {
        x: r.x + r.width,
        y: u
      };
      break;
    case "left":
      v = {
        x: r.x - o.width,
        y: u
      };
      break;
    default:
      v = {
        x: r.x,
        y: r.y
      };
  }
  switch (So(t)) {
    case "start":
      v[i] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      v[i] += f * (n && c ? -1 : 1);
      break;
  }
  return v;
}
const DC = async (e, t, n) => {
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
    x: d,
    y: u
  } = Qp(c, r, l), f = r, v = {}, w = 0;
  for (let m = 0; m < a.length; m++) {
    const {
      name: S,
      fn: g
    } = a[m], {
      x: h,
      y,
      data: b,
      reset: C
    } = await g({
      x: d,
      y: u,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: v,
      rects: c,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = h ?? d, u = y ?? u, v = {
      ...v,
      [S]: {
        ...v[S],
        ...b
      }
    }, C && w <= 50 && (w++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (c = C.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: d,
      y: u
    } = Qp(c, f, l)), m = -1);
  }
  return {
    x: d,
    y: u,
    placement: f,
    strategy: o,
    middlewareData: v
  };
};
async function Cs(e, t) {
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
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: f = !1,
    padding: v = 0
  } = cn(t, e), w = ry(v), S = a[f ? u === "floating" ? "reference" : "floating" : u], g = ma(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(S))) == null || n ? S : S.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), h = u === "floating" ? {
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
    top: (g.top - C.top + w.top) / b.y,
    bottom: (C.bottom - g.bottom + w.bottom) / b.y,
    left: (g.left - C.left + w.left) / b.x,
    right: (C.right - g.right + w.right) / b.x
  };
}
const NC = (e) => ({
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
      padding: d = 0
    } = cn(e, t) || {};
    if (c == null)
      return {};
    const u = ry(d), f = {
      x: n,
      y: r
    }, v = Cd(o), w = bd(v), m = await i.getDimensions(c), S = v === "y", g = S ? "top" : "left", h = S ? "bottom" : "right", y = S ? "clientHeight" : "clientWidth", b = s.reference[w] + s.reference[v] - f[v] - s.floating[w], C = f[v] - s.reference[v], k = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let E = k ? k[y] : 0;
    (!E || !await (i.isElement == null ? void 0 : i.isElement(k))) && (E = a.floating[y] || s.floating[w]);
    const T = b / 2 - C / 2, j = E / 2 - m[w] / 2 - 1, M = Bn(u[g], j), D = Bn(u[h], j), N = M, O = E - m[w] - D, $ = E / 2 - m[w] / 2 + T, W = Xc(N, $, O), R = !l.arrow && So(o) != null && $ !== W && s.reference[w] / 2 - ($ < N ? M : D) - m[w] / 2 < 0, U = R ? $ < N ? $ - N : $ - O : 0;
    return {
      [v]: f[v] + U,
      data: {
        [v]: W,
        centerOffset: $ - W - U,
        ...R && {
          alignmentOffset: U
        }
      },
      reset: R
    };
  }
}), MC = function(e) {
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
        mainAxis: d = !0,
        crossAxis: u = !0,
        fallbackPlacements: f,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: m = !0,
        ...S
      } = cn(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const g = un(o), h = zt(a), y = un(a) === a, b = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), C = f || (y || !m ? [ha(a)] : bC(a)), k = w !== "none";
      !f && k && C.push(...TC(a, m, w, b));
      const E = [a, ...C], T = await Cs(t, S), j = [];
      let M = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (d && j.push(T[g]), u) {
        const $ = SC(o, i, b);
        j.push(T[$[0]], T[$[1]]);
      }
      if (M = [...M, {
        placement: o,
        overflows: j
      }], !j.every(($) => $ <= 0)) {
        var D, N;
        const $ = (((D = s.flip) == null ? void 0 : D.index) || 0) + 1, W = E[$];
        if (W && (!(u === "alignment" ? h !== zt(W) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        M.every((P) => zt(P.placement) === h ? P.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: M
            },
            reset: {
              placement: W
            }
          };
        let R = (N = M.filter((U) => U.overflows[0] <= 0).sort((U, P) => U.overflows[1] - P.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!R)
          switch (v) {
            case "bestFit": {
              var O;
              const U = (O = M.filter((P) => {
                if (k) {
                  const _ = zt(P.placement);
                  return _ === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  _ === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((_) => _ > 0).reduce((_, F) => _ + F, 0)]).sort((P, _) => P[1] - _[1])[0]) == null ? void 0 : O[0];
              U && (R = U);
              break;
            }
            case "initialPlacement":
              R = a;
              break;
          }
        if (o !== R)
          return {
            reset: {
              placement: R
            }
          };
      }
      return {};
    }
  };
};
function qp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Zp(e) {
  return vC.some((t) => e[t] >= 0);
}
const AC = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = cn(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await Cs(t, {
            ...o,
            elementContext: "reference"
          }), i = qp(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Zp(i)
            }
          };
        }
        case "escaped": {
          const s = await Cs(t, {
            ...o,
            altBoundary: !0
          }), i = qp(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Zp(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, oy = /* @__PURE__ */ new Set(["left", "top"]);
async function jC(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = un(n), a = So(n), l = zt(n) === "y", c = oy.has(i) ? -1 : 1, d = s && l ? -1 : 1, u = cn(t, e);
  let {
    mainAxis: f,
    crossAxis: v,
    alignmentAxis: w
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return a && typeof w == "number" && (v = a === "end" ? w * -1 : w), l ? {
    x: v * d,
    y: f * c
  } : {
    x: f * c,
    y: v * d
  };
}
const RC = function(e) {
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
      } = t, l = await jC(t, e);
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
}, LC = function(e) {
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
              y: h
            } = S;
            return {
              x: g,
              y: h
            };
          }
        },
        ...l
      } = cn(e, t), c = {
        x: n,
        y: r
      }, d = await Cs(t, l), u = zt(un(o)), f = Sd(u);
      let v = c[f], w = c[u];
      if (s) {
        const S = f === "y" ? "top" : "left", g = f === "y" ? "bottom" : "right", h = v + d[S], y = v - d[g];
        v = Xc(h, v, y);
      }
      if (i) {
        const S = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", h = w + d[S], y = w - d[g];
        w = Xc(h, w, y);
      }
      const m = a.fn({
        ...t,
        [f]: v,
        [u]: w
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r,
          enabled: {
            [f]: s,
            [u]: i
          }
        }
      };
    }
  };
}, _C = function(e) {
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
      } = cn(e, t), d = {
        x: n,
        y: r
      }, u = zt(o), f = Sd(u);
      let v = d[f], w = d[u];
      const m = cn(a, t), S = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (l) {
        const y = f === "y" ? "height" : "width", b = s.reference[f] - s.floating[y] + S.mainAxis, C = s.reference[f] + s.reference[y] - S.mainAxis;
        v < b ? v = b : v > C && (v = C);
      }
      if (c) {
        var g, h;
        const y = f === "y" ? "width" : "height", b = oy.has(un(o)), C = s.reference[u] - s.floating[y] + (b && ((g = i.offset) == null ? void 0 : g[u]) || 0) + (b ? 0 : S.crossAxis), k = s.reference[u] + s.reference[y] + (b ? 0 : ((h = i.offset) == null ? void 0 : h[u]) || 0) - (b ? S.crossAxis : 0);
        w < C ? w = C : w > k && (w = k);
      }
      return {
        [f]: v,
        [u]: w
      };
    }
  };
}, IC = function(e) {
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
      } = cn(e, t), d = await Cs(t, c), u = un(o), f = So(o), v = zt(o) === "y", {
        width: w,
        height: m
      } = s.floating;
      let S, g;
      u === "top" || u === "bottom" ? (S = u, g = f === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = u, S = f === "end" ? "top" : "bottom");
      const h = m - d.top - d.bottom, y = w - d.left - d.right, b = Bn(m - d[S], h), C = Bn(w - d[g], y), k = !t.middlewareData.shift;
      let E = b, T = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = y), (r = t.middlewareData.shift) != null && r.enabled.y && (E = h), k && !f) {
        const M = at(d.left, 0), D = at(d.right, 0), N = at(d.top, 0), O = at(d.bottom, 0);
        v ? T = w - 2 * (M !== 0 || D !== 0 ? M + D : at(d.left, d.right)) : E = m - 2 * (N !== 0 || O !== 0 ? N + O : at(d.top, d.bottom));
      }
      await l({
        ...t,
        availableWidth: T,
        availableHeight: E
      });
      const j = await i.getDimensions(a.floating);
      return w !== j.width || m !== j.height ? {
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
  return sy(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ut(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Yt(e) {
  var t;
  return (t = (sy(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function sy(e) {
  return Ua() ? e instanceof Node || e instanceof ut(e).Node : !1;
}
function Rt(e) {
  return Ua() ? e instanceof Element || e instanceof ut(e).Element : !1;
}
function Gt(e) {
  return Ua() ? e instanceof HTMLElement || e instanceof ut(e).HTMLElement : !1;
}
function Jp(e) {
  return !Ua() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ut(e).ShadowRoot;
}
const OC = /* @__PURE__ */ new Set(["inline", "contents"]);
function Os(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Lt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !OC.has(o);
}
const FC = /* @__PURE__ */ new Set(["table", "td", "th"]);
function VC(e) {
  return FC.has(bo(e));
}
const zC = [":popover-open", ":modal"];
function Wa(e) {
  return zC.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const BC = ["transform", "translate", "scale", "rotate", "perspective"], $C = ["transform", "translate", "scale", "rotate", "perspective", "filter"], UC = ["paint", "layout", "strict", "content"];
function kd(e) {
  const t = Ed(), n = Rt(e) ? Lt(e) : e;
  return BC.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || $C.some((r) => (n.willChange || "").includes(r)) || UC.some((r) => (n.contain || "").includes(r));
}
function WC(e) {
  let t = $n(e);
  for (; Gt(t) && !lo(t); ) {
    if (kd(t))
      return t;
    if (Wa(t))
      return null;
    t = $n(t);
  }
  return null;
}
function Ed() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const HC = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function lo(e) {
  return HC.has(bo(e));
}
function Lt(e) {
  return ut(e).getComputedStyle(e);
}
function Ha(e) {
  return Rt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function $n(e) {
  if (bo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Jp(e) && e.host || // Fallback.
    Yt(e)
  );
  return Jp(t) ? t.host : t;
}
function iy(e) {
  const t = $n(e);
  return lo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Gt(t) && Os(t) ? t : iy(t);
}
function ks(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = iy(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = ut(o);
  if (s) {
    const a = qc(i);
    return t.concat(i, i.visualViewport || [], Os(o) ? o : [], a && n ? ks(a) : []);
  }
  return t.concat(o, ks(o, [], n));
}
function qc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ay(e) {
  const t = Lt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Gt(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = pa(n) !== s || pa(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function Td(e) {
  return Rt(e) ? e : e.contextElement;
}
function Jr(e) {
  const t = Td(e);
  if (!Gt(t))
    return Wt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = ay(t);
  let i = (s ? pa(n.width) : n.width) / r, a = (s ? pa(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const KC = /* @__PURE__ */ Wt(0);
function ly(e) {
  const t = ut(e);
  return !Ed() || !t.visualViewport ? KC : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function GC(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ut(e) ? !1 : t;
}
function gr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = Td(e);
  let i = Wt(1);
  t && (r ? Rt(r) && (i = Jr(r)) : i = Jr(e));
  const a = GC(s, n, r) ? ly(s) : Wt(0);
  let l = (o.left + a.x) / i.x, c = (o.top + a.y) / i.y, d = o.width / i.x, u = o.height / i.y;
  if (s) {
    const f = ut(s), v = r && Rt(r) ? ut(r) : r;
    let w = f, m = qc(w);
    for (; m && r && v !== w; ) {
      const S = Jr(m), g = m.getBoundingClientRect(), h = Lt(m), y = g.left + (m.clientLeft + parseFloat(h.paddingLeft)) * S.x, b = g.top + (m.clientTop + parseFloat(h.paddingTop)) * S.y;
      l *= S.x, c *= S.y, d *= S.x, u *= S.y, l += y, c += b, w = ut(m), m = qc(w);
    }
  }
  return ma({
    width: d,
    height: u,
    x: l,
    y: c
  });
}
function Pd(e, t) {
  const n = Ha(e).scrollLeft;
  return t ? t.left + n : gr(Yt(e)).left + n;
}
function cy(e, t, n) {
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
function YC(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = Yt(r), a = t ? Wa(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Wt(1);
  const d = Wt(0), u = Gt(r);
  if ((u || !u && !s) && ((bo(r) !== "body" || Os(i)) && (l = Ha(r)), Gt(r))) {
    const v = gr(r);
    c = Jr(r), d.x = v.x + r.clientLeft, d.y = v.y + r.clientTop;
  }
  const f = i && !u && !s ? cy(i, l, !0) : Wt(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + f.y
  };
}
function XC(e) {
  return Array.from(e.getClientRects());
}
function QC(e) {
  const t = Yt(e), n = Ha(e), r = e.ownerDocument.body, o = at(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = at(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Pd(e);
  const a = -n.scrollTop;
  return Lt(r).direction === "rtl" && (i += at(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
function qC(e, t) {
  const n = ut(e), r = Yt(e), o = n.visualViewport;
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
const ZC = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function JC(e, t) {
  const n = gr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = Gt(e) ? Jr(e) : Wt(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, c = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: c
  };
}
function eh(e, t, n) {
  let r;
  if (t === "viewport")
    r = qC(e, n);
  else if (t === "document")
    r = QC(Yt(e));
  else if (Rt(t))
    r = JC(t, n);
  else {
    const o = ly(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ma(r);
}
function uy(e, t) {
  const n = $n(e);
  return n === t || !Rt(n) || lo(n) ? !1 : Lt(n).position === "fixed" || uy(n, t);
}
function ek(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ks(e, [], !1).filter((a) => Rt(a) && bo(a) !== "body"), o = null;
  const s = Lt(e).position === "fixed";
  let i = s ? $n(e) : e;
  for (; Rt(i) && !lo(i); ) {
    const a = Lt(i), l = kd(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && ZC.has(o.position) || Os(i) && !l && uy(e, i)) ? r = r.filter((d) => d !== i) : o = a, i = $n(i);
  }
  return t.set(e, r), r;
}
function tk(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Wa(t) ? [] : ek(t, this._c) : [].concat(n), r], a = i[0], l = i.reduce((c, d) => {
    const u = eh(t, d, o);
    return c.top = at(u.top, c.top), c.right = Bn(u.right, c.right), c.bottom = Bn(u.bottom, c.bottom), c.left = at(u.left, c.left), c;
  }, eh(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function nk(e) {
  const {
    width: t,
    height: n
  } = ay(e);
  return {
    width: t,
    height: n
  };
}
function rk(e, t, n) {
  const r = Gt(t), o = Yt(t), s = n === "fixed", i = gr(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Wt(0);
  function c() {
    l.x = Pd(o);
  }
  if (r || !r && !s)
    if ((bo(t) !== "body" || Os(o)) && (a = Ha(t)), r) {
      const v = gr(t, !0, s, t);
      l.x = v.x + t.clientLeft, l.y = v.y + t.clientTop;
    } else o && c();
  s && !r && o && c();
  const d = o && !r && !s ? cy(o, a) : Wt(0), u = i.left + a.scrollLeft - l.x - d.x, f = i.top + a.scrollTop - l.y - d.y;
  return {
    x: u,
    y: f,
    width: i.width,
    height: i.height
  };
}
function _l(e) {
  return Lt(e).position === "static";
}
function th(e, t) {
  if (!Gt(e) || Lt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Yt(e) === n && (n = n.ownerDocument.body), n;
}
function dy(e, t) {
  const n = ut(e);
  if (Wa(e))
    return n;
  if (!Gt(e)) {
    let o = $n(e);
    for (; o && !lo(o); ) {
      if (Rt(o) && !_l(o))
        return o;
      o = $n(o);
    }
    return n;
  }
  let r = th(e, t);
  for (; r && VC(r) && _l(r); )
    r = th(r, t);
  return r && lo(r) && _l(r) && !kd(r) ? n : r || WC(e) || n;
}
const ok = async function(e) {
  const t = this.getOffsetParent || dy, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: rk(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function sk(e) {
  return Lt(e).direction === "rtl";
}
const ik = {
  convertOffsetParentRelativeRectToViewportRelativeRect: YC,
  getDocumentElement: Yt,
  getClippingRect: tk,
  getOffsetParent: dy,
  getElementRects: ok,
  getClientRects: XC,
  getDimensions: nk,
  getScale: Jr,
  isElement: Rt,
  isRTL: sk
};
function fy(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ak(e, t) {
  let n = null, r;
  const o = Yt(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const c = e.getBoundingClientRect(), {
      left: d,
      top: u,
      width: f,
      height: v
    } = c;
    if (a || t(), !f || !v)
      return;
    const w = li(u), m = li(o.clientWidth - (d + f)), S = li(o.clientHeight - (u + v)), g = li(d), y = {
      rootMargin: -w + "px " + -m + "px " + -S + "px " + -g + "px",
      threshold: at(0, Bn(1, l)) || 1
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
      E === 1 && !fy(c, e.getBoundingClientRect()) && i(), b = !1;
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
function lk(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = Td(e), d = o || s ? [...c ? ks(c) : [], ...ks(t)] : [];
  d.forEach((g) => {
    o && g.addEventListener("scroll", n, {
      passive: !0
    }), s && g.addEventListener("resize", n);
  });
  const u = c && a ? ak(c, n) : null;
  let f = -1, v = null;
  i && (v = new ResizeObserver((g) => {
    let [h] = g;
    h && h.target === c && v && (v.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var y;
      (y = v) == null || y.observe(t);
    })), n();
  }), c && !l && v.observe(c), v.observe(t));
  let w, m = l ? gr(e) : null;
  l && S();
  function S() {
    const g = gr(e);
    m && !fy(m, g) && n(), m = g, w = requestAnimationFrame(S);
  }
  return n(), () => {
    var g;
    d.forEach((h) => {
      o && h.removeEventListener("scroll", n), s && h.removeEventListener("resize", n);
    }), u == null || u(), (g = v) == null || g.disconnect(), v = null, l && cancelAnimationFrame(w);
  };
}
const ck = RC, uk = LC, dk = MC, fk = IC, pk = AC, nh = NC, hk = _C, mk = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: ik,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return DC(e, t, {
    ...o,
    platform: s
  });
};
var gk = typeof document < "u", vk = function() {
}, _i = gk ? x.useLayoutEffect : vk;
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
function py(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function rh(e, t) {
  const n = py(e);
  return Math.round(t * n) / n;
}
function Il(e) {
  const t = x.useRef(e);
  return _i(() => {
    t.current = e;
  }), t;
}
function yk(e) {
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
  } = e, [d, u] = x.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, v] = x.useState(r);
  ga(f, r) || v(r);
  const [w, m] = x.useState(null), [S, g] = x.useState(null), h = x.useCallback((P) => {
    P !== k.current && (k.current = P, m(P));
  }, []), y = x.useCallback((P) => {
    P !== E.current && (E.current = P, g(P));
  }, []), b = s || w, C = i || S, k = x.useRef(null), E = x.useRef(null), T = x.useRef(d), j = l != null, M = Il(l), D = Il(o), N = Il(c), O = x.useCallback(() => {
    if (!k.current || !E.current)
      return;
    const P = {
      placement: t,
      strategy: n,
      middleware: f
    };
    D.current && (P.platform = D.current), mk(k.current, E.current, P).then((_) => {
      const F = {
        ..._,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: N.current !== !1
      };
      $.current && !ga(T.current, F) && (T.current = F, yo.flushSync(() => {
        u(F);
      }));
    });
  }, [f, t, n, D, N]);
  _i(() => {
    c === !1 && T.current.isPositioned && (T.current.isPositioned = !1, u((P) => ({
      ...P,
      isPositioned: !1
    })));
  }, [c]);
  const $ = x.useRef(!1);
  _i(() => ($.current = !0, () => {
    $.current = !1;
  }), []), _i(() => {
    if (b && (k.current = b), C && (E.current = C), b && C) {
      if (M.current)
        return M.current(b, C, O);
      O();
    }
  }, [b, C, O, M, j]);
  const W = x.useMemo(() => ({
    reference: k,
    floating: E,
    setReference: h,
    setFloating: y
  }), [h, y]), R = x.useMemo(() => ({
    reference: b,
    floating: C
  }), [b, C]), U = x.useMemo(() => {
    const P = {
      position: n,
      left: 0,
      top: 0
    };
    if (!R.floating)
      return P;
    const _ = rh(R.floating, d.x), F = rh(R.floating, d.y);
    return a ? {
      ...P,
      transform: "translate(" + _ + "px, " + F + "px)",
      ...py(R.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: _,
      top: F
    };
  }, [n, a, R.floating, d.x, d.y]);
  return x.useMemo(() => ({
    ...d,
    update: O,
    refs: W,
    elements: R,
    floatingStyles: U
  }), [d, O, W, R, U]);
}
const xk = (e) => {
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
      return r && t(r) ? r.current != null ? nh({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? nh({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, wk = (e, t) => ({
  ...ck(e),
  options: [e, t]
}), Sk = (e, t) => ({
  ...uk(e),
  options: [e, t]
}), bk = (e, t) => ({
  ...hk(e),
  options: [e, t]
}), Ck = (e, t) => ({
  ...dk(e),
  options: [e, t]
}), kk = (e, t) => ({
  ...fk(e),
  options: [e, t]
}), Ek = (e, t) => ({
  ...pk(e),
  options: [e, t]
}), Tk = (e, t) => ({
  ...xk(e),
  options: [e, t]
});
var Pk = "Arrow", hy = x.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ p.jsx(
    se.svg,
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
hy.displayName = Pk;
var Dk = hy;
function Nk(e) {
  const [t, n] = x.useState(void 0);
  return Ge(() => {
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
var Dd = "Popper", [my, gy] = wo(Dd), [Mk, vy] = my(Dd), yy = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = x.useState(null);
  return /* @__PURE__ */ p.jsx(Mk, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
yy.displayName = Dd;
var xy = "PopperAnchor", wy = x.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = vy(xy, n), i = x.useRef(null), a = Ce(t, i), l = x.useRef(null);
    return x.useEffect(() => {
      const c = l.current;
      l.current = (r == null ? void 0 : r.current) || i.current, c !== l.current && s.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ p.jsx(se.div, { ...o, ref: a });
  }
);
wy.displayName = xy;
var Nd = "PopperContent", [Ak, jk] = my(Nd), Sy = x.forwardRef(
  (e, t) => {
    var H, re, fe, z, I, V;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: i = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: d = 0,
      sticky: u = "partial",
      hideWhenDetached: f = !1,
      updatePositionStrategy: v = "optimized",
      onPlaced: w,
      ...m
    } = e, S = vy(Nd, n), [g, h] = x.useState(null), y = Ce(t, (q) => h(q)), [b, C] = x.useState(null), k = Nk(b), E = (k == null ? void 0 : k.width) ?? 0, T = (k == null ? void 0 : k.height) ?? 0, j = r + (s !== "center" ? "-" + s : ""), M = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, D = Array.isArray(c) ? c : [c], N = D.length > 0, O = {
      padding: M,
      boundary: D.filter(Lk),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: N
    }, { refs: $, floatingStyles: W, placement: R, isPositioned: U, middlewareData: P } = yk({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: j,
      whileElementsMounted: (...q) => lk(...q, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: S.anchor
      },
      middleware: [
        wk({ mainAxis: o + T, alignmentAxis: i }),
        l && Sk({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? bk() : void 0,
          ...O
        }),
        l && Ck({ ...O }),
        kk({
          ...O,
          apply: ({ elements: q, rects: Q, availableWidth: he, availableHeight: je }) => {
            const { width: ot, height: st } = Q.reference, pn = q.floating.style;
            pn.setProperty("--radix-popper-available-width", `${he}px`), pn.setProperty("--radix-popper-available-height", `${je}px`), pn.setProperty("--radix-popper-anchor-width", `${ot}px`), pn.setProperty("--radix-popper-anchor-height", `${st}px`);
          }
        }),
        b && Tk({ element: b, padding: a }),
        _k({ arrowWidth: E, arrowHeight: T }),
        f && Ek({ strategy: "referenceHidden", ...O })
      ]
    }), [_, F] = ky(R), Y = zn(w);
    Ge(() => {
      U && (Y == null || Y());
    }, [U, Y]);
    const ne = (H = P.arrow) == null ? void 0 : H.x, ze = (re = P.arrow) == null ? void 0 : re.y, ke = ((fe = P.arrow) == null ? void 0 : fe.centerOffset) !== 0, [Ye, Pe] = x.useState();
    return Ge(() => {
      g && Pe(window.getComputedStyle(g).zIndex);
    }, [g]), /* @__PURE__ */ p.jsx(
      "div",
      {
        ref: $.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...W,
          transform: U ? W.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Ye,
          "--radix-popper-transform-origin": [
            (z = P.transformOrigin) == null ? void 0 : z.x,
            (I = P.transformOrigin) == null ? void 0 : I.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((V = P.hide) == null ? void 0 : V.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ p.jsx(
          Ak,
          {
            scope: n,
            placedSide: _,
            onArrowChange: C,
            arrowX: ne,
            arrowY: ze,
            shouldHideArrow: ke,
            children: /* @__PURE__ */ p.jsx(
              se.div,
              {
                "data-side": _,
                "data-align": F,
                ...m,
                ref: y,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: U ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Sy.displayName = Nd;
var by = "PopperArrow", Rk = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Cy = x.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = jk(by, r), i = Rk[s.placedSide];
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
          Dk,
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
Cy.displayName = by;
function Lk(e) {
  return e !== null;
}
var _k = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var S, g, h;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((S = o.arrow) == null ? void 0 : S.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [c, d] = ky(n), u = { start: "0%", center: "50%", end: "100%" }[d], f = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + a / 2, v = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + l / 2;
    let w = "", m = "";
    return c === "bottom" ? (w = i ? u : `${f}px`, m = `${-l}px`) : c === "top" ? (w = i ? u : `${f}px`, m = `${r.floating.height + l}px`) : c === "right" ? (w = `${-l}px`, m = i ? u : `${v}px`) : c === "left" && (w = `${r.floating.width + l}px`, m = i ? u : `${v}px`), { data: { x: w, y: m } };
  }
});
function ky(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Ik = yy, Ok = wy, Fk = Sy, Vk = Cy, zk = "Portal", Md = x.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, s] = x.useState(!1);
  Ge(() => s(!0), []);
  const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return i ? cb.createPortal(/* @__PURE__ */ p.jsx(se.div, { ...r, ref: t }), i) : null;
});
Md.displayName = zk;
var Bk = Bm[" useInsertionEffect ".trim().toString()] || Ge;
function Es({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, i] = $k({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o;
  {
    const d = x.useRef(e !== void 0);
    x.useEffect(() => {
      const u = d.current;
      u !== a && console.warn(
        `${r} is changing from ${u ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = a;
    }, [a, r]);
  }
  const c = x.useCallback(
    (d) => {
      var u;
      if (a) {
        const f = Uk(d) ? d(e) : d;
        f !== e && ((u = i.current) == null || u.call(i, f));
      } else
        s(d);
    },
    [a, e, s, i]
  );
  return [l, c];
}
function $k({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = x.useState(e), o = x.useRef(n), s = x.useRef(t);
  return Bk(() => {
    s.current = t;
  }, [t]), x.useEffect(() => {
    var i;
    o.current !== n && ((i = s.current) == null || i.call(s, n), o.current = n);
  }, [n, o]), [n, r, s];
}
function Uk(e) {
  return typeof e == "function";
}
function Wk(e) {
  const t = x.useRef({ value: e, previous: e });
  return x.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Ey = Object.freeze({
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
}), Hk = "VisuallyHidden", Kk = x.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(
    se.span,
    {
      ...e,
      ref: t,
      style: { ...Ey, ...e.style }
    }
  )
);
Kk.displayName = Hk;
var Gk = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Er = /* @__PURE__ */ new WeakMap(), ci = /* @__PURE__ */ new WeakMap(), ui = {}, Ol = 0, Ty = function(e) {
  return e && (e.host || Ty(e.parentNode));
}, Yk = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ty(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Xk = function(e, t, n, r) {
  var o = Yk(t, Array.isArray(e) ? e : [e]);
  ui[n] || (ui[n] = /* @__PURE__ */ new WeakMap());
  var s = ui[n], i = [], a = /* @__PURE__ */ new Set(), l = new Set(o), c = function(u) {
    !u || a.has(u) || (a.add(u), c(u.parentNode));
  };
  o.forEach(c);
  var d = function(u) {
    !u || l.has(u) || Array.prototype.forEach.call(u.children, function(f) {
      if (a.has(f))
        d(f);
      else
        try {
          var v = f.getAttribute(r), w = v !== null && v !== "false", m = (Er.get(f) || 0) + 1, S = (s.get(f) || 0) + 1;
          Er.set(f, m), s.set(f, S), i.push(f), m === 1 && w && ci.set(f, !0), S === 1 && f.setAttribute(n, "true"), w || f.setAttribute(r, "true");
        } catch (g) {
          console.error("aria-hidden: cannot operate on ", f, g);
        }
    });
  };
  return d(t), a.clear(), Ol++, function() {
    i.forEach(function(u) {
      var f = Er.get(u) - 1, v = s.get(u) - 1;
      Er.set(u, f), s.set(u, v), f || (ci.has(u) || u.removeAttribute(r), ci.delete(u)), v || u.removeAttribute(n);
    }), Ol--, Ol || (Er = /* @__PURE__ */ new WeakMap(), Er = /* @__PURE__ */ new WeakMap(), ci = /* @__PURE__ */ new WeakMap(), ui = {});
  };
}, Py = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Gk(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Xk(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Vt = function() {
  return Vt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Vt.apply(this, arguments);
};
function Dy(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Qk(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Ii = "right-scroll-bar-position", Oi = "width-before-scroll-bar", qk = "with-scroll-bars-hidden", Zk = "--removed-body-scroll-bar-size";
function Fl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Jk(e, t) {
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
var eE = typeof window < "u" ? x.useLayoutEffect : x.useEffect, oh = /* @__PURE__ */ new WeakMap();
function tE(e, t) {
  var n = Jk(null, function(r) {
    return e.forEach(function(o) {
      return Fl(o, r);
    });
  });
  return eE(function() {
    var r = oh.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || Fl(a, null);
      }), s.forEach(function(a) {
        o.has(a) || Fl(a, i);
      });
    }
    oh.set(n, e);
  }, [e]), n;
}
function nE(e) {
  return e;
}
function rE(e, t) {
  t === void 0 && (t = nE);
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
        var d = i;
        i = [], d.forEach(s);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(d) {
          i.push(d), c();
        },
        filter: function(d) {
          return i = i.filter(d), n;
        }
      };
    }
  };
  return o;
}
function oE(e) {
  e === void 0 && (e = {});
  var t = rE(null);
  return t.options = Vt({ async: !0, ssr: !1 }, e), t;
}
var Ny = function(e) {
  var t = e.sideCar, n = Dy(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return x.createElement(r, Vt({}, n));
};
Ny.isSideCarExport = !0;
function sE(e, t) {
  return e.useMedium(t), Ny;
}
var My = oE(), Vl = function() {
}, Ka = x.forwardRef(function(e, t) {
  var n = x.useRef(null), r = x.useState({
    onScrollCapture: Vl,
    onWheelCapture: Vl,
    onTouchMoveCapture: Vl
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, d = e.enabled, u = e.shards, f = e.sideCar, v = e.noRelative, w = e.noIsolation, m = e.inert, S = e.allowPinchZoom, g = e.as, h = g === void 0 ? "div" : g, y = e.gapMode, b = Dy(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = f, k = tE([n, t]), E = Vt(Vt({}, b), o);
  return x.createElement(
    x.Fragment,
    null,
    d && x.createElement(C, { sideCar: My, removeScrollBar: c, shards: u, noRelative: v, noIsolation: w, inert: m, setCallbacks: s, allowPinchZoom: !!S, lockRef: n, gapMode: y }),
    i ? x.cloneElement(x.Children.only(a), Vt(Vt({}, E), { ref: k })) : x.createElement(h, Vt({}, E, { className: l, ref: k }), a)
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
var iE = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function aE() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = iE();
  return t && e.setAttribute("nonce", t), e;
}
function lE(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function cE(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var uE = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = aE()) && (lE(t, n), cE(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, dE = function() {
  var e = uE();
  return function(t, n) {
    x.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ay = function() {
  var e = dE(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, fE = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, zl = function(e) {
  return parseInt(e || "", 10) || 0;
}, pE = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [zl(n), zl(r), zl(o)];
}, hE = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return fE;
  var t = pE(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, mE = Ay(), eo = "data-scroll-locked", gE = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(qk, ` {
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
    `).concat(Zk, ": ").concat(a, `px;
  }
`);
}, sh = function() {
  var e = parseInt(document.body.getAttribute(eo) || "0", 10);
  return isFinite(e) ? e : 0;
}, vE = function() {
  x.useEffect(function() {
    return document.body.setAttribute(eo, (sh() + 1).toString()), function() {
      var e = sh() - 1;
      e <= 0 ? document.body.removeAttribute(eo) : document.body.setAttribute(eo, e.toString());
    };
  }, []);
}, yE = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  vE();
  var s = x.useMemo(function() {
    return hE(o);
  }, [o]);
  return x.createElement(mE, { styles: gE(s, !t, o, n ? "" : "!important") });
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
var Tr = Zc ? { passive: !1 } : !1, xE = function(e) {
  return e.tagName === "TEXTAREA";
}, jy = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !xE(e) && n[t] === "visible")
  );
}, wE = function(e) {
  return jy(e, "overflowY");
}, SE = function(e) {
  return jy(e, "overflowX");
}, ih = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Ry(e, r);
    if (o) {
      var s = Ly(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, bE = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, CE = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ry = function(e, t) {
  return e === "v" ? wE(t) : SE(t);
}, Ly = function(e, t) {
  return e === "v" ? bE(t) : CE(t);
}, kE = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, EE = function(e, t, n, r, o) {
  var s = kE(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, l = t.contains(a), c = !1, d = i > 0, u = 0, f = 0;
  do {
    if (!a)
      break;
    var v = Ly(e, a), w = v[0], m = v[1], S = v[2], g = m - S - s * w;
    (w || g) && Ry(e, a) && (u += g, f += w);
    var h = a.parentNode;
    a = h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h.host : h;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (d && Math.abs(u) < 1 || !d && Math.abs(f) < 1) && (c = !0), c;
}, fi = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ah = function(e) {
  return [e.deltaX, e.deltaY];
}, lh = function(e) {
  return e && "current" in e ? e.current : e;
}, TE = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, PE = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, DE = 0, Pr = [];
function NE(e) {
  var t = x.useRef([]), n = x.useRef([0, 0]), r = x.useRef(), o = x.useState(DE++)[0], s = x.useState(Ay)[0], i = x.useRef(e);
  x.useEffect(function() {
    i.current = e;
  }, [e]), x.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = Qk([e.lockRef.current], (e.shards || []).map(lh), !0).filter(Boolean);
      return m.forEach(function(S) {
        return S.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(S) {
          return S.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = x.useCallback(function(m, S) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !i.current.allowPinchZoom;
    var g = fi(m), h = n.current, y = "deltaX" in m ? m.deltaX : h[0] - g[0], b = "deltaY" in m ? m.deltaY : h[1] - g[1], C, k = m.target, E = Math.abs(y) > Math.abs(b) ? "h" : "v";
    if ("touches" in m && E === "h" && k.type === "range")
      return !1;
    var T = ih(E, k);
    if (!T)
      return !0;
    if (T ? C = E : (C = E === "v" ? "h" : "v", T = ih(E, k)), !T)
      return !1;
    if (!r.current && "changedTouches" in m && (y || b) && (r.current = C), !C)
      return !0;
    var j = r.current || C;
    return EE(j, S, m, j === "h" ? y : b);
  }, []), l = x.useCallback(function(m) {
    var S = m;
    if (!(!Pr.length || Pr[Pr.length - 1] !== s)) {
      var g = "deltaY" in S ? ah(S) : fi(S), h = t.current.filter(function(C) {
        return C.name === S.type && (C.target === S.target || S.target === C.shadowParent) && TE(C.delta, g);
      })[0];
      if (h && h.should) {
        S.cancelable && S.preventDefault();
        return;
      }
      if (!h) {
        var y = (i.current.shards || []).map(lh).filter(Boolean).filter(function(C) {
          return C.contains(S.target);
        }), b = y.length > 0 ? a(S, y[0]) : !i.current.noIsolation;
        b && S.cancelable && S.preventDefault();
      }
    }
  }, []), c = x.useCallback(function(m, S, g, h) {
    var y = { name: m, delta: S, target: g, should: h, shadowParent: ME(g) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(b) {
        return b !== y;
      });
    }, 1);
  }, []), d = x.useCallback(function(m) {
    n.current = fi(m), r.current = void 0;
  }, []), u = x.useCallback(function(m) {
    c(m.type, ah(m), m.target, a(m, e.lockRef.current));
  }, []), f = x.useCallback(function(m) {
    c(m.type, fi(m), m.target, a(m, e.lockRef.current));
  }, []);
  x.useEffect(function() {
    return Pr.push(s), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, Tr), document.addEventListener("touchmove", l, Tr), document.addEventListener("touchstart", d, Tr), function() {
      Pr = Pr.filter(function(m) {
        return m !== s;
      }), document.removeEventListener("wheel", l, Tr), document.removeEventListener("touchmove", l, Tr), document.removeEventListener("touchstart", d, Tr);
    };
  }, []);
  var v = e.removeScrollBar, w = e.inert;
  return x.createElement(
    x.Fragment,
    null,
    w ? x.createElement(s, { styles: PE(o) }) : null,
    v ? x.createElement(yE, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function ME(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const AE = sE(My, NE);
var Ad = x.forwardRef(function(e, t) {
  return x.createElement(Ka, Vt({}, e, { ref: t, sideCar: AE }));
});
Ad.classNames = Ka.classNames;
var jE = [" ", "Enter", "ArrowUp", "ArrowDown"], RE = [" ", "Enter"], vr = "Select", [Ga, Ya, LE] = Zv(vr), [Co, Y2] = wo(vr, [
  LE,
  gy
]), Xa = gy(), [_E, Xn] = Co(vr), [IE, OE] = Co(vr), _y = (e) => {
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
    name: d,
    autoComplete: u,
    disabled: f,
    required: v,
    form: w
  } = e, m = Xa(t), [S, g] = x.useState(null), [h, y] = x.useState(null), [b, C] = x.useState(!1), k = yd(c), [E, T] = Es({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: vr
  }), [j, M] = Es({
    prop: i,
    defaultProp: a,
    onChange: l,
    caller: vr
  }), D = x.useRef(null), N = S ? w || !!S.closest("form") : !0, [O, $] = x.useState(/* @__PURE__ */ new Set()), W = Array.from(O).map((R) => R.props.value).join(";");
  return /* @__PURE__ */ p.jsx(Ik, { ...m, children: /* @__PURE__ */ p.jsxs(
    _E,
    {
      required: v,
      scope: t,
      trigger: S,
      onTriggerChange: g,
      valueNode: h,
      onValueNodeChange: y,
      valueNodeHasChildren: b,
      onValueNodeHasChildrenChange: C,
      contentId: On(),
      value: j,
      onValueChange: M,
      open: E,
      onOpenChange: T,
      dir: k,
      triggerPointerDownPosRef: D,
      disabled: f,
      children: [
        /* @__PURE__ */ p.jsx(Ga.Provider, { scope: t, children: /* @__PURE__ */ p.jsx(
          IE,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: x.useCallback((R) => {
              $((U) => new Set(U).add(R));
            }, []),
            onNativeOptionRemove: x.useCallback((R) => {
              $((U) => {
                const P = new Set(U);
                return P.delete(R), P;
              });
            }, []),
            children: n
          }
        ) }),
        N ? /* @__PURE__ */ p.jsxs(
          r0,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: d,
            autoComplete: u,
            value: j,
            onChange: (R) => M(R.target.value),
            disabled: f,
            form: w,
            children: [
              j === void 0 ? /* @__PURE__ */ p.jsx("option", { value: "" }) : null,
              Array.from(O)
            ]
          },
          W
        ) : null
      ]
    }
  ) });
};
_y.displayName = vr;
var Iy = "SelectTrigger", Oy = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = Xa(n), i = Xn(Iy, n), a = i.disabled || r, l = Ce(t, i.onTriggerChange), c = Ya(n), d = x.useRef("touch"), [u, f, v] = s0((m) => {
      const S = c().filter((y) => !y.disabled), g = S.find((y) => y.value === i.value), h = i0(S, m, g);
      h !== void 0 && i.onValueChange(h.value);
    }), w = (m) => {
      a || (i.onOpenChange(!0), v()), m && (i.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      });
    };
    return /* @__PURE__ */ p.jsx(Ok, { asChild: !0, ...s, children: /* @__PURE__ */ p.jsx(
      se.button,
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
        "data-placeholder": o0(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: ee(o.onClick, (m) => {
          m.currentTarget.focus(), d.current !== "mouse" && w(m);
        }),
        onPointerDown: ee(o.onPointerDown, (m) => {
          d.current = m.pointerType;
          const S = m.target;
          S.hasPointerCapture(m.pointerId) && S.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && m.pointerType === "mouse" && (w(m), m.preventDefault());
        }),
        onKeyDown: ee(o.onKeyDown, (m) => {
          const S = u.current !== "";
          !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && f(m.key), !(S && m.key === " ") && jE.includes(m.key) && (w(), m.preventDefault());
        })
      }
    ) });
  }
);
Oy.displayName = Iy;
var Fy = "SelectValue", Vy = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: i = "", ...a } = e, l = Xn(Fy, n), { onValueNodeHasChildrenChange: c } = l, d = s !== void 0, u = Ce(t, l.onValueNodeChange);
    return Ge(() => {
      c(d);
    }, [c, d]), /* @__PURE__ */ p.jsx(
      se.span,
      {
        ...a,
        ref: u,
        style: { pointerEvents: "none" },
        children: o0(l.value) ? /* @__PURE__ */ p.jsx(p.Fragment, { children: i }) : s
      }
    );
  }
);
Vy.displayName = Fy;
var FE = "SelectIcon", zy = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ p.jsx(se.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
zy.displayName = FE;
var VE = "SelectPortal", By = (e) => /* @__PURE__ */ p.jsx(Md, { asChild: !0, ...e });
By.displayName = VE;
var yr = "SelectContent", $y = x.forwardRef(
  (e, t) => {
    const n = Xn(yr, e.__scopeSelect), [r, o] = x.useState();
    if (Ge(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? yo.createPortal(
        /* @__PURE__ */ p.jsx(Uy, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx(Ga.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ p.jsx(Wy, { ...e, ref: t });
  }
);
$y.displayName = yr;
var Et = 10, [Uy, Qn] = Co(yr), zE = "SelectContentImpl", BE = /* @__PURE__ */ bs("SelectContent.RemoveScroll"), Wy = x.forwardRef(
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
      alignOffset: d,
      arrowPadding: u,
      collisionBoundary: f,
      collisionPadding: v,
      sticky: w,
      hideWhenDetached: m,
      avoidCollisions: S,
      //
      ...g
    } = e, h = Xn(yr, n), [y, b] = x.useState(null), [C, k] = x.useState(null), E = Ce(t, (H) => b(H)), [T, j] = x.useState(null), [M, D] = x.useState(
      null
    ), N = Ya(n), [O, $] = x.useState(!1), W = x.useRef(!1);
    x.useEffect(() => {
      if (y) return Py(y);
    }, [y]), ty();
    const R = x.useCallback(
      (H) => {
        const [re, ...fe] = N().map((V) => V.ref.current), [z] = fe.slice(-1), I = document.activeElement;
        for (const V of H)
          if (V === I || (V == null || V.scrollIntoView({ block: "nearest" }), V === re && C && (C.scrollTop = 0), V === z && C && (C.scrollTop = C.scrollHeight), V == null || V.focus(), document.activeElement !== I)) return;
      },
      [N, C]
    ), U = x.useCallback(
      () => R([T, y]),
      [R, T, y]
    );
    x.useEffect(() => {
      O && U();
    }, [O, U]);
    const { onOpenChange: P, triggerPointerDownPosRef: _ } = h;
    x.useEffect(() => {
      if (y) {
        let H = { x: 0, y: 0 };
        const re = (z) => {
          var I, V;
          H = {
            x: Math.abs(Math.round(z.pageX) - (((I = _.current) == null ? void 0 : I.x) ?? 0)),
            y: Math.abs(Math.round(z.pageY) - (((V = _.current) == null ? void 0 : V.y) ?? 0))
          };
        }, fe = (z) => {
          H.x <= 10 && H.y <= 10 ? z.preventDefault() : y.contains(z.target) || P(!1), document.removeEventListener("pointermove", re), _.current = null;
        };
        return _.current !== null && (document.addEventListener("pointermove", re), document.addEventListener("pointerup", fe, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", re), document.removeEventListener("pointerup", fe, { capture: !0 });
        };
      }
    }, [y, P, _]), x.useEffect(() => {
      const H = () => P(!1);
      return window.addEventListener("blur", H), window.addEventListener("resize", H), () => {
        window.removeEventListener("blur", H), window.removeEventListener("resize", H);
      };
    }, [P]);
    const [F, Y] = s0((H) => {
      const re = N().filter((I) => !I.disabled), fe = re.find((I) => I.ref.current === document.activeElement), z = i0(re, H, fe);
      z && setTimeout(() => z.ref.current.focus());
    }), ne = x.useCallback(
      (H, re, fe) => {
        const z = !W.current && !fe;
        (h.value !== void 0 && h.value === re || z) && (j(H), z && (W.current = !0));
      },
      [h.value]
    ), ze = x.useCallback(() => y == null ? void 0 : y.focus(), [y]), ke = x.useCallback(
      (H, re, fe) => {
        const z = !W.current && !fe;
        (h.value !== void 0 && h.value === re || z) && D(H);
      },
      [h.value]
    ), Ye = r === "popper" ? Jc : Hy, Pe = Ye === Jc ? {
      side: a,
      sideOffset: l,
      align: c,
      alignOffset: d,
      arrowPadding: u,
      collisionBoundary: f,
      collisionPadding: v,
      sticky: w,
      hideWhenDetached: m,
      avoidCollisions: S
    } : {};
    return /* @__PURE__ */ p.jsx(
      Uy,
      {
        scope: n,
        content: y,
        viewport: C,
        onViewportChange: k,
        itemRefCallback: ne,
        selectedItem: T,
        onItemLeave: ze,
        itemTextRefCallback: ke,
        focusSelectedItem: U,
        selectedItemText: M,
        position: r,
        isPositioned: O,
        searchRef: F,
        children: /* @__PURE__ */ p.jsx(Ad, { as: BE, allowPinchZoom: !0, children: /* @__PURE__ */ p.jsx(
          wd,
          {
            asChild: !0,
            trapped: h.open,
            onMountAutoFocus: (H) => {
              H.preventDefault();
            },
            onUnmountAutoFocus: ee(o, (H) => {
              var re;
              (re = h.trigger) == null || re.focus({ preventScroll: !0 }), H.preventDefault();
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
                  Ye,
                  {
                    role: "listbox",
                    id: h.contentId,
                    "data-state": h.open ? "open" : "closed",
                    dir: h.dir,
                    onContextMenu: (H) => H.preventDefault(),
                    ...g,
                    ...Pe,
                    onPlaced: () => $(!0),
                    ref: E,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...g.style
                    },
                    onKeyDown: ee(g.onKeyDown, (H) => {
                      const re = H.ctrlKey || H.altKey || H.metaKey;
                      if (H.key === "Tab" && H.preventDefault(), !re && H.key.length === 1 && Y(H.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(H.key)) {
                        let z = N().filter((I) => !I.disabled).map((I) => I.ref.current);
                        if (["ArrowUp", "End"].includes(H.key) && (z = z.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(H.key)) {
                          const I = H.target, V = z.indexOf(I);
                          z = z.slice(V + 1);
                        }
                        setTimeout(() => R(z)), H.preventDefault();
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
Wy.displayName = zE;
var $E = "SelectItemAlignedPosition", Hy = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = Xn(yr, n), i = Qn(yr, n), [a, l] = x.useState(null), [c, d] = x.useState(null), u = Ce(t, (E) => d(E)), f = Ya(n), v = x.useRef(!1), w = x.useRef(!0), { viewport: m, selectedItem: S, selectedItemText: g, focusSelectedItem: h } = i, y = x.useCallback(() => {
    if (s.trigger && s.valueNode && a && c && m && S && g) {
      const E = s.trigger.getBoundingClientRect(), T = c.getBoundingClientRect(), j = s.valueNode.getBoundingClientRect(), M = g.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const I = M.left - T.left, V = j.left - I, q = E.left - V, Q = E.width + q, he = Math.max(Q, T.width), je = window.innerWidth - Et, ot = Vp(V, [
          Et,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Et, je - he)
        ]);
        a.style.minWidth = Q + "px", a.style.left = ot + "px";
      } else {
        const I = T.right - M.right, V = window.innerWidth - j.right - I, q = window.innerWidth - E.right - V, Q = E.width + q, he = Math.max(Q, T.width), je = window.innerWidth - Et, ot = Vp(V, [
          Et,
          Math.max(Et, je - he)
        ]);
        a.style.minWidth = Q + "px", a.style.right = ot + "px";
      }
      const D = f(), N = window.innerHeight - Et * 2, O = m.scrollHeight, $ = window.getComputedStyle(c), W = parseInt($.borderTopWidth, 10), R = parseInt($.paddingTop, 10), U = parseInt($.borderBottomWidth, 10), P = parseInt($.paddingBottom, 10), _ = W + R + O + P + U, F = Math.min(S.offsetHeight * 5, _), Y = window.getComputedStyle(m), ne = parseInt(Y.paddingTop, 10), ze = parseInt(Y.paddingBottom, 10), ke = E.top + E.height / 2 - Et, Ye = N - ke, Pe = S.offsetHeight / 2, H = S.offsetTop + Pe, re = W + R + H, fe = _ - re;
      if (re <= ke) {
        const I = D.length > 0 && S === D[D.length - 1].ref.current;
        a.style.bottom = "0px";
        const V = c.clientHeight - m.offsetTop - m.offsetHeight, q = Math.max(
          Ye,
          Pe + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (I ? ze : 0) + V + U
        ), Q = re + q;
        a.style.height = Q + "px";
      } else {
        const I = D.length > 0 && S === D[0].ref.current;
        a.style.top = "0px";
        const q = Math.max(
          ke,
          W + m.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (I ? ne : 0) + Pe
        ) + fe;
        a.style.height = q + "px", m.scrollTop = re - ke + m.offsetTop;
      }
      a.style.margin = `${Et}px 0`, a.style.minHeight = F + "px", a.style.maxHeight = N + "px", r == null || r(), requestAnimationFrame(() => v.current = !0);
    }
  }, [
    f,
    s.trigger,
    s.valueNode,
    a,
    c,
    m,
    S,
    g,
    s.dir,
    r
  ]);
  Ge(() => y(), [y]);
  const [b, C] = x.useState();
  Ge(() => {
    c && C(window.getComputedStyle(c).zIndex);
  }, [c]);
  const k = x.useCallback(
    (E) => {
      E && w.current === !0 && (y(), h == null || h(), w.current = !1);
    },
    [y, h]
  );
  return /* @__PURE__ */ p.jsx(
    WE,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: v,
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
            se.div,
            {
              ...o,
              ref: u,
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
Hy.displayName = $E;
var UE = "SelectPopperPosition", Jc = x.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Et,
    ...s
  } = e, i = Xa(n);
  return /* @__PURE__ */ p.jsx(
    Fk,
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
Jc.displayName = UE;
var [WE, jd] = Co(yr, {}), eu = "SelectViewport", Ky = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = Qn(eu, n), i = jd(eu, n), a = Ce(t, s.onViewportChange), l = x.useRef(0);
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
        se.div,
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
            const d = c.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: f } = i;
            if (f != null && f.current && u) {
              const v = Math.abs(l.current - d.scrollTop);
              if (v > 0) {
                const w = window.innerHeight - Et * 2, m = parseFloat(u.style.minHeight), S = parseFloat(u.style.height), g = Math.max(m, S);
                if (g < w) {
                  const h = g + v, y = Math.min(w, h), b = h - y;
                  u.style.height = y + "px", u.style.bottom === "0px" && (d.scrollTop = b > 0 ? b : 0, u.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = d.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Ky.displayName = eu;
var Gy = "SelectGroup", [HE, KE] = Co(Gy), GE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = On();
    return /* @__PURE__ */ p.jsx(HE, { scope: n, id: o, children: /* @__PURE__ */ p.jsx(se.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
GE.displayName = Gy;
var Yy = "SelectLabel", YE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = KE(Yy, n);
    return /* @__PURE__ */ p.jsx(se.div, { id: o.id, ...r, ref: t });
  }
);
YE.displayName = Yy;
var va = "SelectItem", [XE, Xy] = Co(va), Qy = x.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...i
    } = e, a = Xn(va, n), l = Qn(va, n), c = a.value === r, [d, u] = x.useState(s ?? ""), [f, v] = x.useState(!1), w = Ce(
      t,
      (h) => {
        var y;
        return (y = l.itemRefCallback) == null ? void 0 : y.call(l, h, r, o);
      }
    ), m = On(), S = x.useRef("touch"), g = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ p.jsx(
      XE,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: m,
        isSelected: c,
        onItemTextChange: x.useCallback((h) => {
          u((y) => y || ((h == null ? void 0 : h.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ p.jsx(
          Ga.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: d,
            children: /* @__PURE__ */ p.jsx(
              se.div,
              {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": c && f,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: w,
                onFocus: ee(i.onFocus, () => v(!0)),
                onBlur: ee(i.onBlur, () => v(!1)),
                onClick: ee(i.onClick, () => {
                  S.current !== "mouse" && g();
                }),
                onPointerUp: ee(i.onPointerUp, () => {
                  S.current === "mouse" && g();
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
                  ((b = l.searchRef) == null ? void 0 : b.current) !== "" && h.key === " " || (RE.includes(h.key) && g(), h.key === " " && h.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Qy.displayName = va;
var $o = "SelectItemText", qy = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, i = Xn($o, n), a = Qn($o, n), l = Xy($o, n), c = OE($o, n), [d, u] = x.useState(null), f = Ce(
      t,
      (g) => u(g),
      l.onItemTextChange,
      (g) => {
        var h;
        return (h = a.itemTextRefCallback) == null ? void 0 : h.call(a, g, l.value, l.disabled);
      }
    ), v = d == null ? void 0 : d.textContent, w = x.useMemo(
      () => /* @__PURE__ */ p.jsx("option", { value: l.value, disabled: l.disabled, children: v }, l.value),
      [l.disabled, l.value, v]
    ), { onNativeOptionAdd: m, onNativeOptionRemove: S } = c;
    return Ge(() => (m(w), () => S(w)), [m, S, w]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(se.span, { id: l.textId, ...s, ref: f }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? yo.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
qy.displayName = $o;
var Zy = "SelectItemIndicator", Jy = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Xy(Zy, n).isSelected ? /* @__PURE__ */ p.jsx(se.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Jy.displayName = Zy;
var tu = "SelectScrollUpButton", e0 = x.forwardRef((e, t) => {
  const n = Qn(tu, e.__scopeSelect), r = jd(tu, e.__scopeSelect), [o, s] = x.useState(!1), i = Ce(t, r.onScrollButtonChange);
  return Ge(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollTop > 0;
        s(c);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    n0,
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
e0.displayName = tu;
var nu = "SelectScrollDownButton", t0 = x.forwardRef((e, t) => {
  const n = Qn(nu, e.__scopeSelect), r = jd(nu, e.__scopeSelect), [o, s] = x.useState(!1), i = Ce(t, r.onScrollButtonChange);
  return Ge(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const c = l.scrollHeight - l.clientHeight, d = Math.ceil(l.scrollTop) < c;
        s(d);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    n0,
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
t0.displayName = nu;
var n0 = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = Qn("SelectScrollButton", n), i = x.useRef(null), a = Ya(n), l = x.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return x.useEffect(() => () => l(), [l]), Ge(() => {
    var d;
    const c = a().find((u) => u.ref.current === document.activeElement);
    (d = c == null ? void 0 : c.ref.current) == null || d.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ p.jsx(
    se.div,
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
}), QE = "SelectSeparator", qE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ p.jsx(se.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
qE.displayName = QE;
var ru = "SelectArrow", ZE = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Xa(n), s = Xn(ru, n), i = Qn(ru, n);
    return s.open && i.position === "popper" ? /* @__PURE__ */ p.jsx(Vk, { ...o, ...r, ref: t }) : null;
  }
);
ZE.displayName = ru;
var JE = "SelectBubbleInput", r0 = x.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = x.useRef(null), s = Ce(r, o), i = Wk(t);
    return x.useEffect(() => {
      const a = o.current;
      if (!a) return;
      const l = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (i !== t && d) {
        const u = new Event("change", { bubbles: !0 });
        d.call(a, t), a.dispatchEvent(u);
      }
    }, [i, t]), /* @__PURE__ */ p.jsx(
      se.select,
      {
        ...n,
        style: { ...Ey, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
r0.displayName = JE;
function o0(e) {
  return e === "" || e === void 0;
}
function s0(e) {
  const t = zn(e), n = x.useRef(""), r = x.useRef(0), o = x.useCallback(
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
function i0(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = eT(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const l = i.find(
    (c) => c.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function eT(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var tT = _y, nT = Oy, rT = Vy, oT = zy, sT = By, iT = $y, aT = Ky, lT = Qy, cT = qy, uT = Jy, dT = e0, fT = t0;
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pT = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), a0 = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var hT = {
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
const mT = x.forwardRef(
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
      ...hT,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: a0("lucide", o),
      ...a
    },
    [
      ...i.map(([c, d]) => x.createElement(c, d)),
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
    ({ className: r, ...o }, s) => x.createElement(mT, {
      ref: s,
      iconNode: t,
      className: a0(`lucide-${pT(e)}`, r),
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
const l0 = _e("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c0 = _e("ArrowRight", [
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
const gT = _e("Building", [
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
const Ts = _e("CalendarDays", [
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
const vT = _e("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
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
const u0 = _e("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d0 = _e("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f0 = _e("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
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
const yT = _e("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xT = _e("ExternalLink", [
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
const ch = _e("List", [
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
const Fs = _e("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wT = _e("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function pi({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(tT, { "data-slot": "select", ...e });
}
function uh({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(rT, { "data-slot": "select-value", ...e });
}
function hi({
  className: e,
  size: t = "default",
  children: n,
  ...r
}) {
  return /* @__PURE__ */ p.jsxs(
    nT,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: be(
        "data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive flex w-fit items-center justify-between gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ p.jsx(oT, { asChild: !0, children: /* @__PURE__ */ p.jsx(Rd, { className: "size-4 opacity-50" }) })
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
  return /* @__PURE__ */ p.jsx(sT, { children: /* @__PURE__ */ p.jsxs(
    iT,
    {
      "data-slot": "select-content",
      className: be(
        "bg-card text-foreground border border-border data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-[9999] max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      ...r,
      children: [
        /* @__PURE__ */ p.jsx(ST, {}),
        /* @__PURE__ */ p.jsx(
          aT,
          {
            className: be(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ p.jsx(bT, {})
      ]
    }
  ) });
}
function wn({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ p.jsxs(
    lT,
    {
      "data-slot": "select-item",
      className: be(
        "focus:bg-muted focus:text-foreground hover:bg-muted/80 text-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ p.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ p.jsx(uT, { children: /* @__PURE__ */ p.jsx(vT, { className: "size-4" }) }) }),
        /* @__PURE__ */ p.jsx(cT, { children: t })
      ]
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
      "data-slot": "select-scroll-up-button",
      className: be(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p.jsx(f0, { className: "size-4" })
    }
  );
}
function bT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    fT,
    {
      "data-slot": "select-scroll-down-button",
      className: be(
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
      className: be(
        "flex h-10 w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        e
      ),
      ref: r,
      ...n
    }
  )
);
ou.displayName = "Input";
var Bl = "rovingFocusGroup.onEntryFocus", CT = { bubbles: !1, cancelable: !0 }, Vs = "RovingFocusGroup", [su, p0, kT] = Zv(Vs), [ET, h0] = wo(
  Vs,
  [kT]
), [TT, PT] = ET(Vs), m0 = x.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(su.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(su.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(DT, { ...e, ref: t }) }) })
);
m0.displayName = Vs;
var DT = x.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: s,
    currentTabStopId: i,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: l,
    onEntryFocus: c,
    preventScrollOnEntryFocus: d = !1,
    ...u
  } = e, f = x.useRef(null), v = Ce(t, f), w = yd(s), [m, S] = Es({
    prop: i,
    defaultProp: a ?? null,
    onChange: l,
    caller: Vs
  }), [g, h] = x.useState(!1), y = zn(c), b = p0(n), C = x.useRef(!1), [k, E] = x.useState(0);
  return x.useEffect(() => {
    const T = f.current;
    if (T)
      return T.addEventListener(Bl, y), () => T.removeEventListener(Bl, y);
  }, [y]), /* @__PURE__ */ p.jsx(
    TT,
    {
      scope: n,
      orientation: r,
      dir: w,
      loop: o,
      currentTabStopId: m,
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
        se.div,
        {
          tabIndex: g || k === 0 ? -1 : 0,
          "data-orientation": r,
          ...u,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: ee(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: ee(e.onFocus, (T) => {
            const j = !C.current;
            if (T.target === T.currentTarget && j && !g) {
              const M = new CustomEvent(Bl, CT);
              if (T.currentTarget.dispatchEvent(M), !M.defaultPrevented) {
                const D = b().filter((R) => R.focusable), N = D.find((R) => R.active), O = D.find((R) => R.id === m), W = [N, O, ...D].filter(
                  Boolean
                ).map((R) => R.ref.current);
                y0(W, d);
              }
            }
            C.current = !1;
          }),
          onBlur: ee(e.onBlur, () => h(!1))
        }
      )
    }
  );
}), g0 = "RovingFocusGroupItem", v0 = x.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: i,
      ...a
    } = e, l = On(), c = s || l, d = PT(g0, n), u = d.currentTabStopId === c, f = p0(n), { onFocusableItemAdd: v, onFocusableItemRemove: w, currentTabStopId: m } = d;
    return x.useEffect(() => {
      if (r)
        return v(), () => w();
    }, [r, v, w]), /* @__PURE__ */ p.jsx(
      su.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ p.jsx(
          se.span,
          {
            tabIndex: u ? 0 : -1,
            "data-orientation": d.orientation,
            ...a,
            ref: t,
            onMouseDown: ee(e.onMouseDown, (S) => {
              r ? d.onItemFocus(c) : S.preventDefault();
            }),
            onFocus: ee(e.onFocus, () => d.onItemFocus(c)),
            onKeyDown: ee(e.onKeyDown, (S) => {
              if (S.key === "Tab" && S.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (S.target !== S.currentTarget) return;
              const g = AT(S, d.orientation, d.dir);
              if (g !== void 0) {
                if (S.metaKey || S.ctrlKey || S.altKey || S.shiftKey) return;
                S.preventDefault();
                let y = f().filter((b) => b.focusable).map((b) => b.ref.current);
                if (g === "last") y.reverse();
                else if (g === "prev" || g === "next") {
                  g === "prev" && y.reverse();
                  const b = y.indexOf(S.currentTarget);
                  y = d.loop ? jT(y, b + 1) : y.slice(b + 1);
                }
                setTimeout(() => y0(y));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: u, hasTabStop: m != null }) : i
          }
        )
      }
    );
  }
);
v0.displayName = g0;
var NT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function MT(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function AT(e, t, n) {
  const r = MT(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return NT[r];
}
function y0(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function jT(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var RT = m0, LT = v0;
function _T(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var zs = (e) => {
  const { present: t, children: n } = e, r = IT(t), o = typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n), s = Ce(r.ref, OT(o));
  return typeof n == "function" || r.isPresent ? x.cloneElement(o, { ref: s }) : null;
};
zs.displayName = "Presence";
function IT(e) {
  const [t, n] = x.useState(), r = x.useRef(null), o = x.useRef(e), s = x.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = _T(i, {
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
  }, [a]), Ge(() => {
    const c = r.current, d = o.current;
    if (d !== e) {
      const f = s.current, v = gi(c);
      e ? l("MOUNT") : v === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(d && f !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Ge(() => {
    if (t) {
      let c;
      const d = t.ownerDocument.defaultView ?? window, u = (v) => {
        const m = gi(r.current).includes(CSS.escape(v.animationName));
        if (v.target === t && m && (l("ANIMATION_END"), !o.current)) {
          const S = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S);
          });
        }
      }, f = (v) => {
        v.target === t && (s.current = gi(r.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        d.clearTimeout(c), t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
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
function OT(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var qa = "Tabs", [FT, X2] = wo(qa, [
  h0
]), x0 = h0(), [VT, Ld] = FT(qa), w0 = x.forwardRef(
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
    } = e, d = yd(a), [u, f] = Es({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: qa
    });
    return /* @__PURE__ */ p.jsx(
      VT,
      {
        scope: n,
        baseId: On(),
        value: u,
        onValueChange: f,
        orientation: i,
        dir: d,
        activationMode: l,
        children: /* @__PURE__ */ p.jsx(
          se.div,
          {
            dir: d,
            "data-orientation": i,
            ...c,
            ref: t
          }
        )
      }
    );
  }
);
w0.displayName = qa;
var S0 = "TabsList", b0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = Ld(S0, n), i = x0(n);
    return /* @__PURE__ */ p.jsx(
      RT,
      {
        asChild: !0,
        ...i,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ p.jsx(
          se.div,
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
b0.displayName = S0;
var C0 = "TabsTrigger", k0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, i = Ld(C0, n), a = x0(n), l = P0(i.baseId, r), c = D0(i.baseId, r), d = r === i.value;
    return /* @__PURE__ */ p.jsx(
      LT,
      {
        asChild: !0,
        ...a,
        focusable: !o,
        active: d,
        children: /* @__PURE__ */ p.jsx(
          se.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": d,
            "aria-controls": c,
            "data-state": d ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: l,
            ...s,
            ref: t,
            onMouseDown: ee(e.onMouseDown, (u) => {
              !o && u.button === 0 && u.ctrlKey === !1 ? i.onValueChange(r) : u.preventDefault();
            }),
            onKeyDown: ee(e.onKeyDown, (u) => {
              [" ", "Enter"].includes(u.key) && i.onValueChange(r);
            }),
            onFocus: ee(e.onFocus, () => {
              const u = i.activationMode !== "manual";
              !d && !o && u && i.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
k0.displayName = C0;
var E0 = "TabsContent", T0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...i } = e, a = Ld(E0, n), l = P0(a.baseId, r), c = D0(a.baseId, r), d = r === a.value, u = x.useRef(d);
    return x.useEffect(() => {
      const f = requestAnimationFrame(() => u.current = !1);
      return () => cancelAnimationFrame(f);
    }, []), /* @__PURE__ */ p.jsx(zs, { present: o || d, children: ({ present: f }) => /* @__PURE__ */ p.jsx(
      se.div,
      {
        "data-state": d ? "active" : "inactive",
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
          animationDuration: u.current ? "0s" : void 0
        },
        children: f && s
      }
    ) });
  }
);
T0.displayName = E0;
function P0(e, t) {
  return `${e}-trigger-${t}`;
}
function D0(e, t) {
  return `${e}-content-${t}`;
}
var zT = w0, BT = b0, $T = k0, UT = T0;
function WT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    zT,
    {
      "data-slot": "tabs",
      className: be("flex flex-col gap-2", e),
      ...t
    }
  );
}
function dh({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    BT,
    {
      "data-slot": "tabs-list",
      className: be(
        "inline-flex w-fit items-center justify-center rounded-lg h-9 bg-muted/60 dark:bg-transparent p-1 text-muted-foreground border border-transparent dark:border-border/40",
        e
      ),
      ...t
    }
  );
}
function Zn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    $T,
    {
      "data-slot": "tabs-trigger",
      className: be(
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
    UT,
    {
      "data-slot": "tabs-content",
      className: be("flex-1 outline-none", e),
      ...t
    }
  );
}
const HT = (e, t) => {
  const n = [];
  if (!e || !t) {
    const i = /* @__PURE__ */ new Date(), a = i.getFullYear(), l = i.getMonth();
    return fh(a, l);
  }
  const r = new Date(e), o = new Date(t);
  let s = new Date(r.getFullYear(), r.getMonth(), 1);
  for (; s <= o; ) {
    const i = fh(s.getFullYear(), s.getMonth());
    n.push(...i), s.setMonth(s.getMonth() + 1);
  }
  return n;
}, fh = (e, t) => {
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
}, KT = (e) => {
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
function GT(e = {}) {
  const [t, n] = x.useState(!0);
  x.useEffect(() => {
    const i = setTimeout(() => {
      n(!1);
    }, 500);
    return () => clearTimeout(i);
  }, [e.start_date, e.end_date]);
  const r = G.useMemo(() => HT(e.start_date, e.end_date), [e.start_date, e.end_date]), o = G.useMemo(() => KT(r), [r]), s = G.useMemo(() => {
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
class YT {
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
      Object.entries(t).forEach(([u, f]) => {
        f != null && f !== "" && o.append(u, f.toString());
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
        const u = await c.text();
        throw new Error(`HTTP error! status: ${c.status}, response: ${u}`);
      }
      const d = await c.json();
      return this.setCache(n, d), d;
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
const Dr = new YT(), XT = [
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
], ph = (e) => {
  if (!e || typeof e != "object")
    return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    XT.includes(r) && (t[n] = r);
  }), t;
};
function N0(e = {}) {
  const [t, n] = x.useState([]), [r, o] = x.useState({}), [s, i] = x.useState({}), [a, l] = x.useState(!0), [c, d] = x.useState(!1), [u, f] = x.useState(null), [v, w] = x.useState(0), [m, S] = x.useState(0), [g, h] = x.useState(e), [y, b] = x.useState(), C = x.useRef(""), k = x.useRef(!0);
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
      const N = await Dr.fetchEvents(g);
      if ((D = N.performance) != null && D.server_processed) {
        const O = N.events.map(($) => ({
          ...$,
          startDate: new Date($.startDate),
          endDate: new Date($.endDate)
        }));
        n(O), o(N.eventMetadata || {}), i(ph(N.categoryMappings)), w(N.total), S(N.pages), b(N.pagination);
      } else {
        const O = [], $ = {};
        N.events.forEach((W) => {
          const R = Dr.transformWordPressEventToEvent(W), U = Dr.transformWordPressEventToMetadata(W);
          O.push(R), $[R.id] = U;
        }), n(O), o($), w(N.total), S(N.pages), b(N.pagination);
      }
    } catch (N) {
      console.error("Error fetching events:", N), n([]), o({}), i({}), w(0), S(0), f(N instanceof Error ? N.message : "Failed to load events");
    } finally {
      l(!1);
    }
  }, [JSON.stringify(g)]);
  x.useEffect(() => {
    E();
  }, [E]);
  const T = x.useCallback(() => {
    E();
  }, [E]), j = x.useCallback(async () => {
    var D;
    if (!(!(y != null && y.hasMore) || c))
      try {
        d(!0), f(null);
        const N = {
          ...g,
          page: y.nextPage || (g.page || 1) + 1
        }, O = await Dr.fetchEvents(N);
        if ((D = O.performance) != null && D.server_processed) {
          const $ = O.events.map((W) => ({
            ...W,
            startDate: new Date(W.startDate),
            endDate: new Date(W.endDate)
          }));
          n((W) => [...W, ...$]), o((W) => ({ ...W, ...O.eventMetadata || {} })), i((W) => ({
            ...W,
            ...ph(O.categoryMappings)
          })), b(O.pagination);
        } else {
          const $ = [], W = {};
          O.events.forEach((R) => {
            const U = Dr.transformWordPressEventToEvent(R), P = Dr.transformWordPressEventToMetadata(R);
            $.push(U), W[U.id] = P;
          }), n((R) => [...R, ...$]), o((R) => ({ ...R, ...W })), b(O.pagination);
        }
      } catch (N) {
        console.error("Error loading more events:", N), f(N instanceof Error ? N.message : "Failed to load more events");
      } finally {
        d(!1);
      }
  }, [JSON.stringify(g), JSON.stringify(y), c]), M = x.useCallback((D) => {
    h((N) => ({ ...N, ...D }));
  }, []);
  return {
    events: t,
    eventMetadata: r,
    loading: a,
    error: u,
    total: v,
    pages: m,
    refetch: T,
    setFilters: M,
    hasMore: (y == null ? void 0 : y.hasMore) || !1,
    loadMore: j,
    loadingMore: c,
    pagination: y,
    categoryMappings: s
  };
}
const QT = {
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
function qT() {
  const [e, t] = x.useState([]), [n, r] = x.useState(!0), [o, s] = x.useState(null);
  return x.useEffect(() => {
    (async () => {
      try {
        r(!0);
        const a = await QT.getAll();
        t(a), s(null);
      } catch {
        s("Failed to load organizations");
      } finally {
        r(!1);
      }
    })();
  }, []), { organizations: e, loading: n, error: o };
}
function M0() {
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
          const u = await fetch("/wp-json/unbc-events/v1/category-config");
          if (u.ok) {
            const f = await u.json();
            Object.entries(f).forEach(([v, w]) => {
              typeof w == "string" ? c[v] = w : w && typeof w == "object" && "variant" in w && w.variant && (c[v] = w.variant);
            });
          }
        } catch (u) {
          console.warn("Error fetching category color config:", u);
        }
        const d = l.map((u) => ({
          id: u.id,
          name: u.name,
          slug: u.slug,
          count: u.count,
          variant: c[u.slug] || "default"
        }));
        t(d);
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
function ZT() {
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
var Za = "Dialog", [A0, Q2] = wo(Za), [JT, _t] = A0(Za), j0 = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !0
  } = e, a = x.useRef(null), l = x.useRef(null), [c, d] = Es({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Za
  });
  return /* @__PURE__ */ p.jsx(
    JT,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: On(),
      titleId: On(),
      descriptionId: On(),
      open: c,
      onOpenChange: d,
      onOpenToggle: x.useCallback(() => d((u) => !u), [d]),
      modal: i,
      children: n
    }
  );
};
j0.displayName = Za;
var R0 = "DialogTrigger", eP = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = _t(R0, n), s = Ce(t, o.triggerRef);
    return /* @__PURE__ */ p.jsx(
      se.button,
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
eP.displayName = R0;
var _d = "DialogPortal", [tP, L0] = A0(_d, {
  forceMount: void 0
}), _0 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = _t(_d, t);
  return /* @__PURE__ */ p.jsx(tP, { scope: t, forceMount: n, children: x.Children.map(r, (i) => /* @__PURE__ */ p.jsx(zs, { present: n || s.open, children: /* @__PURE__ */ p.jsx(Md, { asChild: !0, container: o, children: i }) })) });
};
_0.displayName = _d;
var ya = "DialogOverlay", I0 = x.forwardRef(
  (e, t) => {
    const n = L0(ya, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = _t(ya, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ p.jsx(zs, { present: r || s.open, children: /* @__PURE__ */ p.jsx(rP, { ...o, ref: t }) }) : null;
  }
);
I0.displayName = ya;
var nP = /* @__PURE__ */ bs("DialogOverlay.RemoveScroll"), rP = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = _t(ya, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p.jsx(Ad, { as: nP, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ p.jsx(
        se.div,
        {
          "data-state": Od(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), xr = "DialogContent", O0 = x.forwardRef(
  (e, t) => {
    const n = L0(xr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = _t(xr, e.__scopeDialog);
    return /* @__PURE__ */ p.jsx(zs, { present: r || s.open, children: s.modal ? /* @__PURE__ */ p.jsx(oP, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(sP, { ...o, ref: t }) });
  }
);
O0.displayName = xr;
var oP = x.forwardRef(
  (e, t) => {
    const n = _t(xr, e.__scopeDialog), r = x.useRef(null), o = Ce(t, n.contentRef, r);
    return x.useEffect(() => {
      const s = r.current;
      if (s) return Py(s);
    }, []), /* @__PURE__ */ p.jsx(
      F0,
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
), sP = x.forwardRef(
  (e, t) => {
    const n = _t(xr, e.__scopeDialog), r = x.useRef(!1), o = x.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      F0,
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
), F0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = _t(xr, n), l = x.useRef(null), c = Ce(t, l);
    return ty(), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
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
        /* @__PURE__ */ p.jsx(iP, { titleId: a.titleId }),
        /* @__PURE__ */ p.jsx(lP, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), Id = "DialogTitle", V0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = _t(Id, n);
    return /* @__PURE__ */ p.jsx(se.h2, { id: o.titleId, ...r, ref: t });
  }
);
V0.displayName = Id;
var z0 = "DialogDescription", B0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = _t(z0, n);
    return /* @__PURE__ */ p.jsx(se.p, { id: o.descriptionId, ...r, ref: t });
  }
);
B0.displayName = z0;
var $0 = "DialogClose", U0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = _t($0, n);
    return /* @__PURE__ */ p.jsx(
      se.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: ee(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
U0.displayName = $0;
function Od(e) {
  return e ? "open" : "closed";
}
var W0 = "DialogTitleWarning", [q2, H0] = Wb(W0, {
  contentName: xr,
  titleName: Id,
  docsSlug: "dialog"
}), iP = ({ titleId: e }) => {
  const t = H0(W0), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return x.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, aP = "DialogDescriptionWarning", lP = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${H0(aP).contentName}}.`;
  return x.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, cP = j0, uP = _0, K0 = I0, G0 = O0, Y0 = V0, X0 = B0, dP = U0;
const fP = cP, pP = uP, Q0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  K0,
  {
    ref: n,
    className: be(
      "fixed inset-0 z-[99999] bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Q0.displayName = K0.displayName;
const q0 = x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.jsxs(pP, { children: [
  /* @__PURE__ */ p.jsx(Q0, {}),
  /* @__PURE__ */ p.jsxs(
    G0,
    {
      ref: r,
      className: be(
        "fixed left-[50%] top-[50%] z-[99999] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-card text-foreground p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ p.jsxs(dP, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-all duration-200 hover:opacity-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 p-1", children: [
          /* @__PURE__ */ p.jsx(wT, { className: "h-4 w-4" }),
          /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
q0.displayName = G0.displayName;
const Z0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  "div",
  {
    className: be(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Z0.displayName = "DialogHeader";
const J0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  "div",
  {
    className: be(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
J0.displayName = "DialogFooter";
const ex = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  Y0,
  {
    ref: n,
    className: be(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
ex.displayName = Y0.displayName;
const tx = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  X0,
  {
    ref: n,
    className: be("text-sm text-muted-foreground", e),
    ...t
  }
));
tx.displayName = X0.displayName;
function uo({
  className: e,
  variant: t = "default",
  size: n = "default",
  ...r
}) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      className: be(
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
function nx({ event: e, eventMetadata: t, open: n, onOpenChange: r, showCost: o = !0 }) {
  const [s, i] = G.useState(!1);
  if (G.useEffect(() => {
    var u;
    e && ((u = t[e.id]) != null && u.website) && console.log("Event website URL:", t[e.id].website);
  }, [e, t]), !e) return null;
  const a = t[e.id], l = (u, f = 180) => {
    if (!u || u.length <= f) return u;
    const v = u.substring(0, f), w = v.lastIndexOf("."), m = v.lastIndexOf(" "), S = w > f - 50 ? w + 1 : m;
    return u.substring(0, S > 0 ? S : f).trim();
  }, c = (u) => {
    const f = e.startDate, v = e.endDate || new Date(f.getTime() + 60 * 60 * 1e3), w = (m) => m.toISOString().replace(/-|:|\.\d\d\d/g, "");
    switch (u) {
      case "google":
        const m = new URL("https://calendar.google.com/calendar/render");
        return m.searchParams.append("action", "TEMPLATE"), m.searchParams.append("text", e.title), m.searchParams.append("dates", `${w(f)}/${w(v)}`), m.searchParams.append("details", e.description || ""), a != null && a.location && m.searchParams.append("location", a.location), m.toString();
      case "outlook":
      case "apple":
        const S = [
          "BEGIN:VCALENDAR",
          "VERSION:2.0",
          "PRODID:-//UNBC Calendar//Events//EN",
          "METHOD:PUBLISH",
          "BEGIN:VEVENT",
          `UID:${e.id}@unbc-calendar`,
          `DTSTART:${w(f)}`,
          `DTEND:${w(v)}`,
          `SUMMARY:${e.title}`,
          `DESCRIPTION:${e.description || ""}`,
          a != null && a.location ? `LOCATION:${a.location}` : "",
          a != null && a.website ? `URL:${a.website}` : "",
          `ORGANIZER;CN=${(a == null ? void 0 : a.organization) || "Over the Edge"}:MAILTO:ote@unbc.ca`,
          "STATUS:CONFIRMED",
          "END:VEVENT",
          "END:VCALENDAR"
        ].filter((g) => g).join(`
`);
        return `data:text/calendar;charset=utf8,${encodeURIComponent(S)}`;
    }
  }, d = {
    clubs: "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary",
    unbc: "bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary",
    organizations: "bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive",
    sports: "bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent"
  };
  return /* @__PURE__ */ p.jsx(fP, { open: n, onOpenChange: r, children: /* @__PURE__ */ p.jsxs(q0, { className: "max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto overflow-x-hidden bg-card border border-border sm:w-full p-4 sm:p-6", children: [
    /* @__PURE__ */ p.jsxs(Z0, { children: [
      /* @__PURE__ */ p.jsx(ex, { className: "text-xl text-foreground", children: e.title }),
      e.description && /* @__PURE__ */ p.jsxs("div", { className: "mt-2", children: [
        /* @__PURE__ */ p.jsx(tx, { className: `text-muted-foreground leading-relaxed break-words ${s ? "max-h-[40vh] overflow-y-auto pr-2" : ""}`, children: s ? e.description : l(e.description) }),
        e.description.length > 180 && /* @__PURE__ */ p.jsx(
          "button",
          {
            onClick: () => i(!s),
            className: "inline-flex items-center gap-1 mt-3 px-3 py-2 text-sm text-primary hover:text-primary/80 hover:bg-primary/10 active:bg-primary/20 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
            children: s ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
              "Show less",
              /* @__PURE__ */ p.jsx(f0, { className: "h-4 w-4" })
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
        /* @__PURE__ */ p.jsxs("div", { className: "space-y-1 text-foreground", children: [
          /* @__PURE__ */ p.jsx("div", { className: "font-medium", children: e.startDate.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          }) }),
          /* @__PURE__ */ p.jsxs("div", { className: "text-muted-foreground text-sm", children: [
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
      a && /* @__PURE__ */ p.jsxs("div", { className: "space-y-2 text-sm text-foreground", children: [
        a.location && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsx(Fs, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ p.jsx("span", { children: a.location })
        ] }),
        a.organization && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsx(Qa, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ p.jsx("span", { children: a.organization })
        ] }),
        o && a.cost && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsx(yT, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ p.jsx("span", { children: a.cost })
        ] }),
        a.website && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsx(xT, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ p.jsx(
            "a",
            {
              href: a.website,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-block text-primary hover:text-primary/80 hover:underline transition-colors break-all cursor-pointer",
              style: { pointerEvents: "auto", position: "relative", zIndex: 10 },
              children: "Event Website"
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 pt-1", children: [
          a.category && /* @__PURE__ */ p.jsx(uo, { className: d[a.category] || "bg-muted text-foreground", children: a.category.charAt(0).toUpperCase() + a.category.slice(1) }),
          a.registrationRequired && /* @__PURE__ */ p.jsx(uo, { variant: "outline", className: "border-border text-foreground", children: "Registration Required" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsxs(J0, { className: "flex-col sm:flex-col gap-2", children: [
      /* @__PURE__ */ p.jsx("div", { className: "text-sm text-muted-foreground mb-2", children: "Add to your calendar:" }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex gap-2 w-full", children: [
        /* @__PURE__ */ p.jsxs(
          tn,
          {
            variant: "outline",
            className: "flex-1 border-border bg-card text-foreground hover:bg-muted text-xs sm:text-sm",
            onClick: () => window.open(c("google"), "_blank"),
            children: [
              /* @__PURE__ */ p.jsx(Fi, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Google"
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          tn,
          {
            variant: "outline",
            className: "flex-1 border-border bg-card text-foreground hover:bg-muted text-xs sm:text-sm",
            onClick: () => {
              const u = c("outlook"), f = document.createElement("a");
              f.href = u, f.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, f.click();
            },
            children: [
              /* @__PURE__ */ p.jsx(Fi, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Outlook"
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          tn,
          {
            variant: "outline",
            className: "flex-1 border-border bg-card text-foreground hover:bg-muted text-xs sm:text-sm",
            onClick: () => {
              const u = c("apple"), f = document.createElement("a");
              f.href = u, f.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, f.click();
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
class hP extends x.Component {
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
function mP({ children: e, isPresent: t }) {
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
    const d = document.createElement("style");
    return s && (d.nonce = s), document.head.appendChild(d), d.sheet && d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `), () => {
      document.head.removeChild(d);
    };
  }, [t]), p.jsx(hP, { isPresent: t, childRef: r, sizeRef: o, children: x.cloneElement(e, { ref: r }) });
}
const gP = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: i }) => {
  const a = Vd(vP), l = x.useId(), c = x.useCallback((u) => {
    a.set(u, !0);
    for (const f of a.values())
      if (!f)
        return;
    r && r();
  }, [a, r]), d = x.useMemo(
    () => ({
      id: l,
      initial: t,
      isPresent: n,
      custom: o,
      onExitComplete: c,
      register: (u) => (a.set(u, !1), () => a.delete(u))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    s ? [Math.random(), c] : [n, c]
  );
  return x.useMemo(() => {
    a.forEach((u, f) => a.set(f, !1));
  }, [n]), x.useEffect(() => {
    !n && !a.size && r && r();
  }, [n]), i === "popLayout" && (e = p.jsx(mP, { isPresent: n, children: e })), p.jsx(Ja.Provider, { value: d, children: e });
};
function vP() {
  return /* @__PURE__ */ new Map();
}
function rx(e = !0) {
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
function hh(e) {
  const t = [];
  return x.Children.forEach(e, (n) => {
    x.isValidElement(n) && t.push(n);
  }), t;
}
const Bd = typeof window < "u", ox = Bd ? x.useLayoutEffect : x.useEffect, mh = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: o = !0, mode: s = "sync", propagate: i = !1 }) => {
  const [a, l] = rx(i), c = x.useMemo(() => hh(e), [e]), d = i && !a ? [] : c.map(yi), u = x.useRef(!0), f = x.useRef(c), v = Vd(() => /* @__PURE__ */ new Map()), [w, m] = x.useState(c), [S, g] = x.useState(c);
  ox(() => {
    u.current = !1, f.current = c;
    for (let b = 0; b < S.length; b++) {
      const C = yi(S[b]);
      d.includes(C) ? v.delete(C) : v.get(C) !== !0 && v.set(C, !1);
    }
  }, [S, d.length, d.join("-")]);
  const h = [];
  if (c !== w) {
    let b = [...c];
    for (let C = 0; C < S.length; C++) {
      const k = S[C], E = yi(k);
      d.includes(E) || (b.splice(C, 0, k), h.push(k));
    }
    s === "wait" && h.length && (b = h), g(hh(b)), m(c);
    return;
  }
  const { forceRender: y } = x.useContext(Fd);
  return p.jsx(p.Fragment, { children: S.map((b) => {
    const C = yi(b), k = i && !a ? !1 : c === S || d.includes(C), E = () => {
      if (v.has(C))
        v.set(C, !0);
      else
        return;
      let T = !0;
      v.forEach((j) => {
        j || (T = !1);
      }), T && (y == null || y(), g(f.current), i && (l == null || l()), r && r());
    };
    return p.jsx(gP, { isPresent: k, initial: !u.current || n ? void 0 : !1, custom: k ? void 0 : t, presenceAffectsLayout: o, mode: s, onExitComplete: k ? void 0 : E, children: b }, C);
  }) });
}, dt = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let sx = dt;
// @__NO_SIDE_EFFECTS__
function $d(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const fo = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, nn = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, rn = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, yP = {
  useManualTiming: !1
};
function xP(e) {
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
    schedule: (c, d = !1, u = !1) => {
      const v = u && r ? t : n;
      return d && s.add(c), v.has(c) || v.add(c), c;
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
], wP = 40;
function ix(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = () => n = !0, i = xi.reduce((g, h) => (g[h] = xP(s), g), {}), { read: a, resolveKeyframes: l, update: c, preRender: d, render: u, postRender: f } = i, v = () => {
    const g = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(g - o.timestamp, wP), 1), o.timestamp = g, o.isProcessing = !0, a.process(o), l.process(o), c.process(o), d.process(o), u.process(o), f.process(o), o.isProcessing = !1, n && t && (r = !1, e(v));
  }, w = () => {
    n = !0, r = !0, o.isProcessing || e(v);
  };
  return { schedule: xi.reduce((g, h) => {
    const y = i[h];
    return g[h] = (b, C = !1, k = !1) => (n || w(), y.schedule(b, C, k)), g;
  }, {}), cancel: (g) => {
    for (let h = 0; h < xi.length; h++)
      i[xi[h]].cancel(g);
  }, state: o, steps: i };
}
const { schedule: de, cancel: Un, state: Oe, steps: $l } = ix(typeof requestAnimationFrame < "u" ? requestAnimationFrame : dt, !0), ax = x.createContext({ strict: !1 }), gh = {
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
for (const e in gh)
  po[e] = {
    isEnabled: (t) => gh[e].some((n) => !!t[n])
  };
function SP(e) {
  for (const t in e)
    po[t] = {
      ...po[t],
      ...e[t]
    };
}
const bP = /* @__PURE__ */ new Set([
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
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || bP.has(e);
}
let lx = (e) => !xa(e);
function CP(e) {
  e && (lx = (t) => t.startsWith("on") ? !xa(t) : e(t));
}
try {
  CP(require("@emotion/is-prop-valid").default);
} catch {
}
function kP(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (lx(o) || n === !0 && xa(o) || !t && !xa(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function EP(e) {
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
function Ps(e) {
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
  return tl(e.animate) || Wd.some((t) => Ps(e[t]));
}
function cx(e) {
  return !!(nl(e) || e.variants);
}
function TP(e, t) {
  if (nl(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Ps(n) ? n : void 0,
      animate: Ps(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function PP(e) {
  const { initial: t, animate: n } = TP(e, x.useContext(el));
  return x.useMemo(() => ({ initial: t, animate: n }), [vh(t), vh(n)]);
}
function vh(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const DP = Symbol.for("motionComponentSymbol");
function Br(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function NP(e, t, n) {
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
const Hd = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), MP = "framerAppearId", ux = "data-" + Hd(MP), { schedule: Kd } = ix(queueMicrotask, !1), dx = x.createContext({});
function AP(e, t, n, r, o) {
  var s, i;
  const { visualElement: a } = x.useContext(el), l = x.useContext(ax), c = x.useContext(Ja), d = x.useContext(zd).reducedMotion, u = x.useRef(null);
  r = r || l.renderer, !u.current && r && (u.current = r(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: d
  }));
  const f = u.current, v = x.useContext(dx);
  f && !f.projection && o && (f.type === "html" || f.type === "svg") && jP(u.current, n, o, v);
  const w = x.useRef(!1);
  x.useInsertionEffect(() => {
    f && w.current && f.update(n, c);
  });
  const m = n[ux], S = x.useRef(!!m && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, m)) && ((i = window.MotionHasOptimisedAnimation) === null || i === void 0 ? void 0 : i.call(window, m)));
  return ox(() => {
    f && (w.current = !0, window.MotionIsMounted = !0, f.updateFeatures(), Kd.render(f.render), S.current && f.animationState && f.animationState.animateChanges());
  }), x.useEffect(() => {
    f && (!S.current && f.animationState && f.animationState.animateChanges(), S.current && (queueMicrotask(() => {
      var g;
      (g = window.MotionHandoffMarkAsComplete) === null || g === void 0 || g.call(window, m);
    }), S.current = !1));
  }), f;
}
function jP(e, t, n, r) {
  const { layoutId: o, layout: s, drag: i, dragConstraints: a, layoutScroll: l, layoutRoot: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : fx(e.parent)), e.projection.setOptions({
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
function fx(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : fx(e.parent);
}
function RP({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  var s, i;
  e && SP(e);
  function a(c, d) {
    let u;
    const f = {
      ...x.useContext(zd),
      ...c,
      layoutId: LP(c)
    }, { isStatic: v } = f, w = PP(c), m = r(c, v);
    if (!v && Bd) {
      _P();
      const S = IP(f);
      u = S.MeasureLayout, w.visualElement = AP(o, m, f, t, S.ProjectionNode);
    }
    return p.jsxs(el.Provider, { value: w, children: [u && w.visualElement ? p.jsx(u, { visualElement: w.visualElement, ...f }) : null, n(o, c, NP(m, w.visualElement, d), m, v, w.visualElement)] });
  }
  a.displayName = `motion.${typeof o == "string" ? o : `create(${(i = (s = o.displayName) !== null && s !== void 0 ? s : o.name) !== null && i !== void 0 ? i : ""})`}`;
  const l = x.forwardRef(a);
  return l[DP] = o, l;
}
function LP({ layoutId: e }) {
  const t = x.useContext(Fd).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function _P(e, t) {
  x.useContext(ax).strict;
}
function IP(e) {
  const { drag: t, layout: n } = po;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const OP = [
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
      !!(OP.indexOf(e) > -1 || /**
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
function Yd(e, t, n, r) {
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
const iu = (e) => Array.isArray(e), FP = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), VP = (e) => iu(e) ? e[e.length - 1] || 0 : e, He = (e) => !!(e && e.getVelocity);
function zi(e) {
  const t = He(e) ? e.get() : e;
  return FP(t) ? t.toValue() : t;
}
function zP({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, o, s) {
  const i = {
    latestValues: BP(r, o, s, e),
    renderState: t()
  };
  return n && (i.onMount = (a) => n({ props: r, current: a, ...i }), i.onUpdate = (a) => n(a)), i;
}
const px = (e) => (t, n) => {
  const r = x.useContext(el), o = x.useContext(Ja), s = () => zP(e, t, r, o);
  return n ? s() : Vd(s);
};
function BP(e, t, n, r) {
  const o = {}, s = r(e, {});
  for (const f in s)
    o[f] = zi(s[f]);
  let { initial: i, animate: a } = e;
  const l = nl(e), c = cx(e);
  t && c && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || i === !1;
  const u = d ? a : i;
  if (u && typeof u != "boolean" && !tl(u)) {
    const f = Array.isArray(u) ? u : [u];
    for (let v = 0; v < f.length; v++) {
      const w = Yd(e, f[v]);
      if (w) {
        const { transitionEnd: m, transition: S, ...g } = w;
        for (const h in g) {
          let y = g[h];
          if (Array.isArray(y)) {
            const b = d ? y.length - 1 : 0;
            y = y[b];
          }
          y !== null && (o[h] = y);
        }
        for (const h in m)
          o[h] = m[h];
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
], br = new Set(ko), hx = (e) => (t) => typeof t == "string" && t.startsWith(e), mx = /* @__PURE__ */ hx("--"), $P = /* @__PURE__ */ hx("var(--"), Xd = (e) => $P(e) ? UP.test(e.split("/*")[0].trim()) : !1, UP = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, gx = (e, t) => t && typeof e == "number" ? t.transform(e) : e, dn = (e, t, n) => n > t ? t : n < e ? e : n, Eo = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Ds = {
  ...Eo,
  transform: (e) => dn(0, 1, e)
}, wi = {
  ...Eo,
  default: 1
}, Bs = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), bn = /* @__PURE__ */ Bs("deg"), Ht = /* @__PURE__ */ Bs("%"), K = /* @__PURE__ */ Bs("px"), WP = /* @__PURE__ */ Bs("vh"), HP = /* @__PURE__ */ Bs("vw"), xh = {
  ...Ht,
  parse: (e) => Ht.parse(e) / 100,
  transform: (e) => Ht.transform(e * 100)
}, KP = {
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
}, GP = {
  rotate: bn,
  rotateX: bn,
  rotateY: bn,
  rotateZ: bn,
  scale: wi,
  scaleX: wi,
  scaleY: wi,
  scaleZ: wi,
  skew: bn,
  skewX: bn,
  skewY: bn,
  distance: K,
  translateX: K,
  translateY: K,
  translateZ: K,
  x: K,
  y: K,
  z: K,
  perspective: K,
  transformPerspective: K,
  opacity: Ds,
  originX: xh,
  originY: xh,
  originZ: K
}, wh = {
  ...Eo,
  transform: Math.round
}, Qd = {
  ...KP,
  ...GP,
  zIndex: wh,
  size: K,
  // SVG
  fillOpacity: Ds,
  strokeOpacity: Ds,
  numOctaves: wh
}, YP = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, XP = ko.length;
function QP(e, t, n) {
  let r = "", o = !0;
  for (let s = 0; s < XP; s++) {
    const i = ko[s], a = e[i];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (i.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const c = gx(a, Qd[i]);
      if (!l) {
        o = !1;
        const d = YP[i] || i;
        r += `${d}(${c}) `;
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
    if (br.has(l)) {
      i = !0;
      continue;
    } else if (mx(l)) {
      o[l] = c;
      continue;
    } else {
      const d = gx(c, Qd[l]);
      l.startsWith("origin") ? (a = !0, s[l] = d) : r[l] = d;
    }
  }
  if (t.transform || (i || n ? r.transform = QP(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: c = "50%", originZ: d = 0 } = s;
    r.transformOrigin = `${l} ${c} ${d}`;
  }
}
const qP = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, ZP = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function JP(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const s = o ? qP : ZP;
  e[s.offset] = K.transform(-r);
  const i = K.transform(t), a = K.transform(n);
  e[s.array] = `${i} ${a}`;
}
function Sh(e, t, n) {
  return typeof e == "string" ? e : K.transform(t + n * e);
}
function eD(e, t, n) {
  const r = Sh(t, e.x, e.width), o = Sh(n, e.y, e.height);
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
}, d, u) {
  if (qd(e, c, u), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: f, style: v, dimensions: w } = e;
  f.transform && (w && (v.transform = f.transform), delete f.transform), w && (o !== void 0 || s !== void 0 || v.transform) && (v.transformOrigin = eD(w, o !== void 0 ? o : 0.5, s !== void 0 ? s : 0.5)), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), r !== void 0 && (f.scale = r), i !== void 0 && JP(f, i, a, l, !1);
}
const Jd = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), vx = () => ({
  ...Jd(),
  attrs: {}
}), ef = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function yx(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
const xx = /* @__PURE__ */ new Set([
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
function wx(e, t, n, r) {
  yx(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(xx.has(o) ? o : Hd(o), t.attrs[o]);
}
const wa = {};
function tD(e) {
  Object.assign(wa, e);
}
function Sx(e, { layout: t, layoutId: n }) {
  return br.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!wa[e] || e === "opacity");
}
function tf(e, t, n) {
  var r;
  const { style: o } = e, s = {};
  for (const i in o)
    (He(o[i]) || t.style && He(t.style[i]) || Sx(i, e) || ((r = n == null ? void 0 : n.getValue(i)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[i] = o[i]);
  return s;
}
function bx(e, t, n) {
  const r = tf(e, t, n);
  for (const o in e)
    if (He(e[o]) || He(t[o])) {
      const s = ko.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[s] = e[o];
    }
  return r;
}
function nD(e, t) {
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
const bh = ["x", "y", "width", "height", "cx", "cy", "r"], rD = {
  useVisualState: px({
    scrapeMotionValuesFromProps: bx,
    createRenderState: vx,
    onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: o }) => {
      if (!n)
        return;
      let s = !!e.drag;
      if (!s) {
        for (const a in o)
          if (br.has(a)) {
            s = !0;
            break;
          }
      }
      if (!s)
        return;
      let i = !t;
      if (t)
        for (let a = 0; a < bh.length; a++) {
          const l = bh[a];
          e[l] !== t[l] && (i = !0);
        }
      i && de.read(() => {
        nD(n, r), de.render(() => {
          Zd(r, o, ef(n.tagName), e.transformTemplate), wx(n, r);
        });
      });
    }
  })
}, oD = {
  useVisualState: px({
    scrapeMotionValuesFromProps: tf,
    createRenderState: Jd
  })
};
function Cx(e, t, n) {
  for (const r in t)
    !He(t[r]) && !Sx(r, n) && (e[r] = t[r]);
}
function sD({ transformTemplate: e }, t) {
  return x.useMemo(() => {
    const n = Jd();
    return qd(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function iD(e, t) {
  const n = e.style || {}, r = {};
  return Cx(r, n, e), Object.assign(r, sD(e, t)), r;
}
function aD(e, t) {
  const n = {}, r = iD(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function lD(e, t, n, r) {
  const o = x.useMemo(() => {
    const s = vx();
    return Zd(s, t, ef(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    Cx(s, e.style, e), o.style = { ...s, ...o.style };
  }
  return o;
}
function cD(e = !1) {
  return (n, r, o, { latestValues: s }, i) => {
    const l = (Gd(n) ? lD : aD)(r, s, i, n), c = kP(r, typeof n == "string", e), d = n !== x.Fragment ? { ...c, ...l, ref: o } : {}, { children: u } = r, f = x.useMemo(() => He(u) ? u.get() : u, [u]);
    return x.createElement(n, {
      ...d,
      children: f
    });
  };
}
function uD(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const i = {
      ...Gd(r) ? rD : oD,
      preloadedFeatures: e,
      useRender: cD(o),
      createVisualElement: t,
      Component: r
    };
    return RP(i);
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
function rl(e, t, n) {
  const r = e.getProps();
  return Yd(r, t, n !== void 0 ? n : r.custom, e);
}
const dD = /* @__PURE__ */ $d(() => window.ScrollTimeline !== void 0);
class fD {
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
      if (dD() && o.attachTimeline)
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
class pD extends fD {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function nf(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const au = 2e4;
function Ex(e) {
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
function Ch(e, t) {
  e.timeline = t, e.onfinish = null;
}
const of = (e) => Array.isArray(e) && typeof e[0] == "number", hD = {
  linearEasing: void 0
};
function mD(e, t) {
  const n = /* @__PURE__ */ $d(e);
  return () => {
    var r;
    return (r = hD[t]) !== null && r !== void 0 ? r : n();
  };
}
const Sa = /* @__PURE__ */ mD(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Tx = (e, t, n = 10) => {
  let r = "";
  const o = Math.max(Math.round(t / n), 2);
  for (let s = 0; s < o; s++)
    r += e(/* @__PURE__ */ fo(0, o - 1, s)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function Px(e) {
  return !!(typeof e == "function" && Sa() || !e || typeof e == "string" && (e in lu || Sa()) || of(e) || Array.isArray(e) && e.every(Px));
}
const Uo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, lu = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Uo([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Uo([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Uo([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Uo([0.33, 1.53, 0.69, 0.99])
};
function Dx(e, t) {
  if (e)
    return typeof e == "function" && Sa() ? Tx(e, t) : of(e) ? Uo(e) : Array.isArray(e) ? e.map((n) => Dx(n, t) || lu.easeOut) : lu[e];
}
const Tt = {
  x: !1,
  y: !1
};
function Nx() {
  return Tt.x || Tt.y;
}
function gD(e, t, n) {
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
function Mx(e, t) {
  const n = gD(e), r = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, o, () => r.abort()];
}
function kh(e) {
  return (t) => {
    t.pointerType === "touch" || Nx() || e(t);
  };
}
function vD(e, t, n = {}) {
  const [r, o, s] = Mx(e, n), i = kh((a) => {
    const { target: l } = a, c = t(a);
    if (typeof c != "function" || !l)
      return;
    const d = kh((u) => {
      c(u), l.removeEventListener("pointerleave", d);
    });
    l.addEventListener("pointerleave", d, o);
  });
  return r.forEach((a) => {
    a.addEventListener("pointerenter", i, o);
  }), s;
}
const Ax = (e, t) => t ? e === t ? !0 : Ax(e, t.parentElement) : !1, sf = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, yD = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function xD(e) {
  return yD.has(e.tagName) || e.tabIndex !== -1;
}
const Wo = /* @__PURE__ */ new WeakSet();
function Eh(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Ul(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const wD = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = Eh(() => {
    if (Wo.has(n))
      return;
    Ul(n, "down");
    const o = Eh(() => {
      Ul(n, "up");
    }), s = () => Ul(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Th(e) {
  return sf(e) && !Nx();
}
function SD(e, t, n = {}) {
  const [r, o, s] = Mx(e, n), i = (a) => {
    const l = a.currentTarget;
    if (!Th(a) || Wo.has(l))
      return;
    Wo.add(l);
    const c = t(a), d = (v, w) => {
      window.removeEventListener("pointerup", u), window.removeEventListener("pointercancel", f), !(!Th(v) || !Wo.has(l)) && (Wo.delete(l), typeof c == "function" && c(v, { success: w }));
    }, u = (v) => {
      d(v, n.useGlobalTarget || Ax(l, v.target));
    }, f = (v) => {
      d(v, !1);
    };
    window.addEventListener("pointerup", u, o), window.addEventListener("pointercancel", f, o);
  };
  return r.forEach((a) => {
    !xD(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", i, o), a.addEventListener("focus", (c) => wD(c, o), o);
  }), s;
}
function bD(e) {
  return e === "x" || e === "y" ? Tt[e] ? null : (Tt[e] = !0, () => {
    Tt[e] = !1;
  }) : Tt.x || Tt.y ? null : (Tt.x = Tt.y = !0, () => {
    Tt.x = Tt.y = !1;
  });
}
const jx = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...ko
]);
let Bi;
function CD() {
  Bi = void 0;
}
const Kt = {
  now: () => (Bi === void 0 && Kt.set(Oe.isProcessing || yP.useManualTiming ? Oe.timestamp : performance.now()), Bi),
  set: (e) => {
    Bi = e, queueMicrotask(CD);
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
function Rx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Ph = 30, kD = (e) => !isNaN(parseFloat(e));
class ED {
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
      const s = Kt.now();
      this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Kt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = kD(this.current));
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
    const t = Kt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Ph)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Ph);
    return Rx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function Ns(e, t) {
  return new ED(e, t);
}
function TD(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ns(n));
}
function PD(e, t) {
  const n = rl(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const i in s) {
    const a = VP(s[i]);
    TD(e, i, a);
  }
}
function DD(e) {
  return !!(He(e) && e.add);
}
function cu(e, t) {
  const n = e.getValue("willChange");
  if (DD(n))
    return n.add(t);
}
function Lx(e) {
  return e.props[ux];
}
const _x = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, ND = 1e-7, MD = 12;
function AD(e, t, n, r, o) {
  let s, i, a = 0;
  do
    i = t + (n - t) / 2, s = _x(i, r, o) - e, s > 0 ? n = i : t = i;
  while (Math.abs(s) > ND && ++a < MD);
  return i;
}
function $s(e, t, n, r) {
  if (e === t && n === r)
    return dt;
  const o = (s) => AD(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : _x(o(s), t, r);
}
const Ix = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Ox = (e) => (t) => 1 - e(1 - t), Fx = /* @__PURE__ */ $s(0.33, 1.53, 0.69, 0.99), uf = /* @__PURE__ */ Ox(Fx), Vx = /* @__PURE__ */ Ix(uf), zx = (e) => (e *= 2) < 1 ? 0.5 * uf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), df = (e) => 1 - Math.sin(Math.acos(e)), Bx = Ox(df), $x = Ix(df), Ux = (e) => /^0[^.\s]+$/u.test(e);
function jD(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Ux(e) : !0;
}
const ts = (e) => Math.round(e * 1e5) / 1e5, ff = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function RD(e) {
  return e == null;
}
const LD = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, pf = (e, t) => (n) => !!(typeof n == "string" && LD.test(n) && n.startsWith(e) || t && !RD(n) && Object.prototype.hasOwnProperty.call(n, t)), Wx = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, s, i, a] = r.match(ff);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, _D = (e) => dn(0, 255, e), Wl = {
  ...Eo,
  transform: (e) => Math.round(_D(e))
}, ar = {
  test: /* @__PURE__ */ pf("rgb", "red"),
  parse: /* @__PURE__ */ Wx("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Wl.transform(e) + ", " + Wl.transform(t) + ", " + Wl.transform(n) + ", " + ts(Ds.transform(r)) + ")"
};
function ID(e) {
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
  parse: ID,
  transform: ar.transform
}, $r = {
  test: /* @__PURE__ */ pf("hsl", "hue"),
  parse: /* @__PURE__ */ Wx("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Ht.transform(ts(t)) + ", " + Ht.transform(ts(n)) + ", " + ts(Ds.transform(r)) + ")"
}, Ue = {
  test: (e) => ar.test(e) || uu.test(e) || $r.test(e),
  parse: (e) => ar.test(e) ? ar.parse(e) : $r.test(e) ? $r.parse(e) : uu.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? ar.transform(e) : $r.transform(e)
}, OD = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function FD(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(ff)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(OD)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Hx = "number", Kx = "color", VD = "var", zD = "var(", Dh = "${}", BD = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ms(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let s = 0;
  const a = t.replace(BD, (l) => (Ue.test(l) ? (r.color.push(s), o.push(Kx), n.push(Ue.parse(l))) : l.startsWith(zD) ? (r.var.push(s), o.push(VD), n.push(l)) : (r.number.push(s), o.push(Hx), n.push(parseFloat(l))), ++s, Dh)).split(Dh);
  return { values: n, split: a, indexes: r, types: o };
}
function Gx(e) {
  return Ms(e).values;
}
function Yx(e) {
  const { split: t, types: n } = Ms(e), r = t.length;
  return (o) => {
    let s = "";
    for (let i = 0; i < r; i++)
      if (s += t[i], o[i] !== void 0) {
        const a = n[i];
        a === Hx ? s += ts(o[i]) : a === Kx ? s += Ue.transform(o[i]) : s += o[i];
      }
    return s;
  };
}
const $D = (e) => typeof e == "number" ? 0 : e;
function UD(e) {
  const t = Gx(e);
  return Yx(e)(t.map($D));
}
const Wn = {
  test: FD,
  parse: Gx,
  createTransformer: Yx,
  getAnimatableNone: UD
}, WD = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function HD(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(ff) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let s = WD.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + o + ")";
}
const KD = /\b([a-z-]*)\(.*?\)/gu, du = {
  ...Wn,
  getAnimatableNone: (e) => {
    const t = e.match(KD);
    return t ? t.map(HD).join(" ") : e;
  }
}, GD = {
  ...Qd,
  // Color props
  color: Ue,
  backgroundColor: Ue,
  outlineColor: Ue,
  fill: Ue,
  stroke: Ue,
  // Border props
  borderColor: Ue,
  borderTopColor: Ue,
  borderRightColor: Ue,
  borderBottomColor: Ue,
  borderLeftColor: Ue,
  filter: du,
  WebkitFilter: du
}, hf = (e) => GD[e];
function Xx(e, t) {
  let n = hf(e);
  return n !== du && (n = Wn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const YD = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function XD(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const s = e[r];
    typeof s == "string" && !YD.has(s) && Ms(s).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const s of t)
      e[s] = Xx(n, o);
}
const Nh = (e) => e === Eo || e === K, Mh = (e, t) => parseFloat(e.split(", ")[t]), Ah = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/u);
  if (o)
    return Mh(o[1], t);
  {
    const s = r.match(/^matrix\((.+)\)$/u);
    return s ? Mh(s[1], e) : 0;
  }
}, QD = /* @__PURE__ */ new Set(["x", "y", "z"]), qD = ko.filter((e) => !QD.has(e));
function ZD(e) {
  const t = [];
  return qD.forEach((n) => {
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
  x: Ah(4, 13),
  y: Ah(5, 14)
};
ho.translateX = ho.x;
ho.translateY = ho.y;
const ur = /* @__PURE__ */ new Set();
let fu = !1, pu = !1;
function Qx() {
  if (pu) {
    const e = Array.from(ur).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = ZD(r);
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
  pu = !1, fu = !1, ur.forEach((e) => e.complete()), ur.clear();
}
function qx() {
  ur.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (pu = !0);
  });
}
function JD() {
  qx(), Qx();
}
class mf {
  constructor(t, n, r, o, s, i = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = s, this.isAsync = i;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (ur.add(this), fu || (fu = !0, de.read(qx), de.resolveKeyframes(Qx))) : (this.readKeyframes(), this.complete());
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), ur.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, ur.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Zx = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), eN = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function tN(e) {
  const t = eN.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function Jx(e, t, n = 1) {
  const [r, o] = tN(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const i = s.trim();
    return Zx(i) ? parseFloat(i) : i;
  }
  return Xd(o) ? Jx(o, t, n + 1) : o;
}
const ew = (e) => (t) => t.test(e), nN = {
  test: (e) => e === "auto",
  parse: (e) => e
}, tw = [Eo, K, Ht, bn, HP, WP, nN], jh = (e) => tw.find(ew(e));
class nw extends mf {
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
        const d = Jx(c, n.current);
        d !== void 0 && (t[l] = d), l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !jx.has(r) || t.length !== 2)
      return;
    const [o, s] = t, i = jh(o), a = jh(s);
    if (i !== a)
      if (Nh(i) && Nh(a))
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
      jD(t[o]) && r.push(o);
    r.length && XD(t, r, n);
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
const Rh = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Wn.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function rN(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function oN(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const s = e[e.length - 1], i = Rh(o, t), a = Rh(s, t);
  return !i || !a ? !1 : rN(e) || (n === "spring" || rf(n)) && r;
}
const sN = (e) => e !== null;
function ol(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(sN), s = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !s || r === void 0 ? o[s] : r;
}
const iN = 40;
class rw {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: i = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Kt.now(), this.options = {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > iN ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && JD(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = Kt.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: o, velocity: s, delay: i, onComplete: a, onUpdate: l, isGenerator: c } = this.options;
    if (!c && !oN(t, r, o, s))
      if (i)
        this.options.duration = 0;
      else {
        l && l(ol(t, this.options, n)), a && a(), this.resolveFinishedPromise();
        return;
      }
    const d = this.initPlayback(t, n);
    d !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: n,
      ...d
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
const ve = (e, t, n) => e + (t - e) * n;
function Hl(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function aN({ hue: e, saturation: t, lightness: n, alpha: r }) {
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
}, lN = [uu, ar, $r], cN = (e) => lN.find((t) => t.test(e));
function Lh(e) {
  const t = cN(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === $r && (n = aN(n)), n;
}
const _h = (e, t) => {
  const n = Lh(e), r = Lh(t);
  if (!n || !r)
    return ba(e, t);
  const o = { ...n };
  return (s) => (o.red = Kl(n.red, r.red, s), o.green = Kl(n.green, r.green, s), o.blue = Kl(n.blue, r.blue, s), o.alpha = ve(n.alpha, r.alpha, s), ar.transform(o));
}, uN = (e, t) => (n) => t(e(n)), Us = (...e) => e.reduce(uN), hu = /* @__PURE__ */ new Set(["none", "hidden"]);
function dN(e, t) {
  return hu.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function fN(e, t) {
  return (n) => ve(e, t, n);
}
function gf(e) {
  return typeof e == "number" ? fN : typeof e == "string" ? Xd(e) ? ba : Ue.test(e) ? _h : mN : Array.isArray(e) ? ow : typeof e == "object" ? Ue.test(e) ? _h : pN : ba;
}
function ow(e, t) {
  const n = [...e], r = n.length, o = e.map((s, i) => gf(s)(s, t[i]));
  return (s) => {
    for (let i = 0; i < r; i++)
      n[i] = o[i](s);
    return n;
  };
}
function pN(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = gf(e[o])(e[o], t[o]));
  return (o) => {
    for (const s in r)
      n[s] = r[s](o);
    return n;
  };
}
function hN(e, t) {
  var n;
  const r = [], o = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const i = t.types[s], a = e.indexes[i][o[i]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    r[s] = l, o[i]++;
  }
  return r;
}
const mN = (e, t) => {
  const n = Wn.createTransformer(t), r = Ms(e), o = Ms(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? hu.has(e) && !o.values.length || hu.has(t) && !r.values.length ? dN(e, t) : Us(ow(hN(r, o), o.values), n) : ba(e, t);
};
function sw(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? ve(e, t, n) : gf(e)(e, t);
}
const gN = 5;
function iw(e, t, n) {
  const r = Math.max(t - gN, 0);
  return Rx(n - e(r), t - r);
}
const we = {
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
function vN({ duration: e = we.duration, bounce: t = we.bounce, velocity: n = we.velocity, mass: r = we.mass }) {
  let o, s, i = 1 - t;
  i = dn(we.minDamping, we.maxDamping, i), e = dn(we.minDuration, we.maxDuration, /* @__PURE__ */ rn(e)), i < 1 ? (o = (c) => {
    const d = c * i, u = d * e, f = d - n, v = mu(c, i), w = Math.exp(-u);
    return Gl - f / v * w;
  }, s = (c) => {
    const u = c * i * e, f = u * n + n, v = Math.pow(i, 2) * Math.pow(c, 2) * e, w = Math.exp(-u), m = mu(Math.pow(c, 2), i);
    return (-o(c) + Gl > 0 ? -1 : 1) * ((f - v) * w) / m;
  }) : (o = (c) => {
    const d = Math.exp(-c * e), u = (c - n) * e + 1;
    return -Gl + d * u;
  }, s = (c) => {
    const d = Math.exp(-c * e), u = (n - c) * (e * e);
    return d * u;
  });
  const a = 5 / e, l = xN(o, s, a);
  if (e = /* @__PURE__ */ nn(e), isNaN(l))
    return {
      stiffness: we.stiffness,
      damping: we.damping,
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
function xN(e, t, n) {
  let r = n;
  for (let o = 1; o < yN; o++)
    r = r - e(r) / t(r);
  return r;
}
function mu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const wN = ["duration", "bounce"], SN = ["stiffness", "damping", "mass"];
function Ih(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function bN(e) {
  let t = {
    velocity: we.velocity,
    stiffness: we.stiffness,
    damping: we.damping,
    mass: we.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Ih(e, SN) && Ih(e, wN))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, s = 2 * dn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: we.mass,
        stiffness: o,
        damping: s
      };
    } else {
      const n = vN(e);
      t = {
        ...t,
        ...n,
        mass: we.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function aw(e = we.visualDuration, t = we.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: o } = n;
  const s = n.keyframes[0], i = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: s }, { stiffness: l, damping: c, mass: d, duration: u, velocity: f, isResolvedFromDuration: v } = bN({
    ...n,
    velocity: -/* @__PURE__ */ rn(n.velocity || 0)
  }), w = f || 0, m = c / (2 * Math.sqrt(l * d)), S = i - s, g = /* @__PURE__ */ rn(Math.sqrt(l / d)), h = Math.abs(S) < 5;
  r || (r = h ? we.restSpeed.granular : we.restSpeed.default), o || (o = h ? we.restDelta.granular : we.restDelta.default);
  let y;
  if (m < 1) {
    const C = mu(g, m);
    y = (k) => {
      const E = Math.exp(-m * g * k);
      return i - E * ((w + m * g * S) / C * Math.sin(C * k) + S * Math.cos(C * k));
    };
  } else if (m === 1)
    y = (C) => i - Math.exp(-g * C) * (S + (w + g * S) * C);
  else {
    const C = g * Math.sqrt(m * m - 1);
    y = (k) => {
      const E = Math.exp(-m * g * k), T = Math.min(C * k, 300);
      return i - E * ((w + m * g * S) * Math.sinh(T) + C * S * Math.cosh(T)) / C;
    };
  }
  const b = {
    calculatedDuration: v && u || null,
    next: (C) => {
      const k = y(C);
      if (v)
        a.done = C >= u;
      else {
        let E = 0;
        m < 1 && (E = C === 0 ? /* @__PURE__ */ nn(w) : iw(y, C, k));
        const T = Math.abs(E) <= r, j = Math.abs(i - k) <= o;
        a.done = T && j;
      }
      return a.value = a.done ? i : k, a;
    },
    toString: () => {
      const C = Math.min(Ex(b), au), k = Tx((E) => b.next(C * E).value, C, 30);
      return C + "ms " + k;
    }
  };
  return b;
}
function Oh({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: s = 500, modifyTarget: i, min: a, max: l, restDelta: c = 0.5, restSpeed: d }) {
  const u = e[0], f = {
    done: !1,
    value: u
  }, v = (T) => a !== void 0 && T < a || l !== void 0 && T > l, w = (T) => a === void 0 ? l : l === void 0 || Math.abs(a - T) < Math.abs(l - T) ? a : l;
  let m = n * t;
  const S = u + m, g = i === void 0 ? S : i(S);
  g !== S && (m = g - u);
  const h = (T) => -m * Math.exp(-T / r), y = (T) => g + h(T), b = (T) => {
    const j = h(T), M = y(T);
    f.done = Math.abs(j) <= c, f.value = f.done ? g : M;
  };
  let C, k;
  const E = (T) => {
    v(f.value) && (C = T, k = aw({
      keyframes: [f.value, w(f.value)],
      velocity: iw(y, T, f.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: s,
      restDelta: c,
      restSpeed: d
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
const CN = /* @__PURE__ */ $s(0.42, 0, 1, 1), kN = /* @__PURE__ */ $s(0, 0, 0.58, 1), lw = /* @__PURE__ */ $s(0.42, 0, 0.58, 1), EN = (e) => Array.isArray(e) && typeof e[0] != "number", TN = {
  linear: dt,
  easeIn: CN,
  easeInOut: lw,
  easeOut: kN,
  circIn: df,
  circInOut: $x,
  circOut: Bx,
  backIn: uf,
  backInOut: Vx,
  backOut: Fx,
  anticipate: zx
}, Fh = (e) => {
  if (of(e)) {
    sx(e.length === 4);
    const [t, n, r, o] = e;
    return $s(t, n, r, o);
  } else if (typeof e == "string")
    return TN[e];
  return e;
};
function PN(e, t, n) {
  const r = [], o = n || sw, s = e.length - 1;
  for (let i = 0; i < s; i++) {
    let a = o(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] || dt : t;
      a = Us(l, a);
    }
    r.push(a);
  }
  return r;
}
function DN(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const s = e.length;
  if (sx(s === t.length), s === 1)
    return () => t[0];
  if (s === 2 && t[0] === t[1])
    return () => t[1];
  const i = e[0] === e[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = PN(t, r, o), l = a.length, c = (d) => {
    if (i && d < e[0])
      return t[0];
    let u = 0;
    if (l > 1)
      for (; u < e.length - 2 && !(d < e[u + 1]); u++)
        ;
    const f = /* @__PURE__ */ fo(e[u], e[u + 1], d);
    return a[u](f);
  };
  return n ? (d) => c(dn(e[0], e[s - 1], d)) : c;
}
function NN(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ fo(0, t, r);
    e.push(ve(n, 1, o));
  }
}
function MN(e) {
  const t = [0];
  return NN(t, e.length - 1), t;
}
function AN(e, t) {
  return e.map((n) => n * t);
}
function jN(e, t) {
  return e.map(() => t || lw).splice(0, e.length - 1);
}
function Ca({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = EN(r) ? r.map(Fh) : Fh(r), s = {
    done: !1,
    value: t[0]
  }, i = AN(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : MN(t),
    e
  ), a = DN(i, t, {
    ease: Array.isArray(o) ? o : jN(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (s.value = a(l), s.done = l >= e, s)
  };
}
const RN = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => de.update(t, !0),
    stop: () => Un(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Oe.isProcessing ? Oe.timestamp : Kt.now()
  };
}, LN = {
  decay: Oh,
  inertia: Oh,
  tween: Ca,
  keyframes: Ca,
  spring: aw
}, _N = (e) => e / 100;
class vf extends rw {
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
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: s, velocity: i = 0 } = this.options, a = rf(n) ? n : LN[n] || Ca;
    let l, c;
    a !== Ca && typeof t[0] != "number" && (l = Us(_N, sw(t[0], t[1])), t = [0, 100]);
    const d = a({ ...this.options, keyframes: t });
    s === "mirror" && (c = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -i
    })), d.calculatedDuration === null && (d.calculatedDuration = Ex(d));
    const { calculatedDuration: u } = d, f = u + o, v = f * (r + 1) - o;
    return {
      generator: d,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
      calculatedDuration: u,
      resolvedDuration: f,
      totalDuration: v
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
    const { finalKeyframe: o, generator: s, mirroredGenerator: i, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: c, totalDuration: d, resolvedDuration: u } = r;
    if (this.startTime === null)
      return s.next(0);
    const { delay: f, repeat: v, repeatType: w, repeatDelay: m, onUpdate: S } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - d / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const g = this.currentTime - f * (this.speed >= 0 ? 1 : -1), h = this.speed >= 0 ? g < 0 : g > d;
    this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = d);
    let y = this.currentTime, b = s;
    if (v) {
      const T = Math.min(this.currentTime, d) / u;
      let j = Math.floor(T), M = T % 1;
      !M && T >= 1 && (M = 1), M === 1 && j--, j = Math.min(j, v + 1), !!(j % 2) && (w === "reverse" ? (M = 1 - M, m && (M -= m / u)) : w === "mirror" && (b = i)), y = dn(0, 1, M) * u;
    }
    const C = h ? { done: !1, value: l[0] } : b.next(y);
    a && (C.value = a(C.value));
    let { done: k } = C;
    !h && c !== null && (k = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
    const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && k);
    return E && o !== void 0 && (C.value = ol(l, this.options, o)), S && S(C.value), E && this.finish(), C;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? /* @__PURE__ */ rn(t.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ rn(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ nn(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ rn(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = RN, onPlay: n, startTime: r } = this.options;
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
const IN = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function ON(e, t, n, { delay: r = 0, duration: o = 300, repeat: s = 0, repeatType: i = "loop", ease: a = "easeInOut", times: l } = {}) {
  const c = { [t]: n };
  l && (c.offset = l);
  const d = Dx(a, o);
  return Array.isArray(d) && (c.easing = d), e.animate(c, {
    delay: r,
    duration: o,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const FN = /* @__PURE__ */ $d(() => Object.hasOwnProperty.call(Element.prototype, "animate")), ka = 10, VN = 2e4;
function zN(e) {
  return rf(e.type) || e.type === "spring" || !Px(e.ease);
}
function BN(e, t) {
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
  for (; !r.done && s < VN; )
    r = n.sample(s), o.push(r.value), s += ka;
  return {
    times: void 0,
    keyframes: o,
    duration: s - ka,
    ease: "linear"
  };
}
const cw = {
  anticipate: zx,
  backInOut: Vx,
  circInOut: $x
};
function $N(e) {
  return e in cw;
}
class Vh extends rw {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options;
    this.resolver = new nw(s, (i, a) => this.onKeyframesResolved(i, a), n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: r = 300, times: o, ease: s, type: i, motionValue: a, name: l, startTime: c } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof s == "string" && Sa() && $N(s) && (s = cw[s]), zN(this.options)) {
      const { onComplete: u, onUpdate: f, motionValue: v, element: w, ...m } = this.options, S = BN(t, m);
      t = S.keyframes, t.length === 1 && (t[1] = t[0]), r = S.duration, o = S.times, s = S.ease, i = "keyframes";
    }
    const d = ON(a.owner.current, l, t, { ...this.options, duration: r, times: o, ease: s });
    return d.startTime = c ?? this.calcStartTime(), this.pendingTimeline ? (Ch(d, this.pendingTimeline), this.pendingTimeline = void 0) : d.onfinish = () => {
      const { onComplete: u } = this.options;
      a.set(ol(t, this.options, n)), u && u(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: d,
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
    return /* @__PURE__ */ rn(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return /* @__PURE__ */ rn(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = /* @__PURE__ */ nn(t);
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
        return dt;
      const { animation: r } = n;
      Ch(r, t);
    }
    return dt;
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
      const { motionValue: c, onUpdate: d, onComplete: u, element: f, ...v } = this.options, w = new vf({
        ...v,
        keyframes: r,
        duration: o,
        type: s,
        ease: i,
        times: a,
        isGenerator: !0
      }), m = /* @__PURE__ */ nn(this.time);
      c.setWithVelocity(w.sample(m - ka).value, w.sample(m).value, ka);
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
    return FN() && r && IN.has(r) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !c && !o && s !== "mirror" && i !== 0 && a !== "inertia";
  }
}
const UN = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, WN = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), HN = {
  type: "keyframes",
  duration: 0.8
}, KN = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, GN = (e, { keyframes: t }) => t.length > 2 ? HN : br.has(e) ? e.startsWith("scale") ? WN(t[1]) : UN : KN;
function YN({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: a, from: l, elapsed: c, ...d }) {
  return !!Object.keys(d).length;
}
const yf = (e, t, n, r = {}, o, s) => (i) => {
  const a = nf(r, e) || {}, l = a.delay || r.delay || 0;
  let { elapsed: c = 0 } = r;
  c = c - /* @__PURE__ */ nn(l);
  let d = {
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
  YN(a) || (d = {
    ...d,
    ...GN(e, d)
  }), d.duration && (d.duration = /* @__PURE__ */ nn(d.duration)), d.repeatDelay && (d.repeatDelay = /* @__PURE__ */ nn(d.repeatDelay)), d.from !== void 0 && (d.keyframes[0] = d.from);
  let u = !1;
  if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (d.duration = 0, d.delay === 0 && (u = !0)), u && !s && t.get() !== void 0) {
    const f = ol(d.keyframes, a);
    if (f !== void 0)
      return de.update(() => {
        d.onUpdate(f), d.onComplete();
      }), new pD([]);
  }
  return !s && Vh.supports(d) ? new Vh(d) : new vf(d);
};
function XN({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function uw(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var s;
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (i = r);
  const c = [], d = o && e.animationState && e.animationState.getState()[o];
  for (const u in l) {
    const f = e.getValue(u, (s = e.latestValues[u]) !== null && s !== void 0 ? s : null), v = l[u];
    if (v === void 0 || d && XN(d, u))
      continue;
    const w = {
      delay: n,
      ...nf(i || {}, u)
    };
    let m = !1;
    if (window.MotionHandoffAnimation) {
      const g = Lx(e);
      if (g) {
        const h = window.MotionHandoffAnimation(g, u, de);
        h !== null && (w.startTime = h, m = !0);
      }
    }
    cu(e, u), f.start(yf(u, f, v, e.shouldReduceMotion && jx.has(u) ? { type: !1 } : w, e, m));
    const S = f.animation;
    S && c.push(S);
  }
  return a && Promise.all(c).then(() => {
    de.update(() => {
      a && PD(e, a);
    });
  }), c;
}
function gu(e, t, n = {}) {
  var r;
  const o = rl(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = o ? () => Promise.all(uw(e, o, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: d = 0, staggerChildren: u, staggerDirection: f } = s;
    return QN(e, t, d + c, u, f, n);
  } : () => Promise.resolve(), { when: l } = s;
  if (l) {
    const [c, d] = l === "beforeChildren" ? [i, a] : [a, i];
    return c().then(() => d());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function QN(e, t, n = 0, r = 0, o = 1, s) {
  const i = [], a = (e.variantChildren.size - 1) * r, l = o === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return Array.from(e.variantChildren).sort(qN).forEach((c, d) => {
    c.notify("AnimationStart", t), i.push(gu(c, t, {
      ...s,
      delay: n + l(d)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function qN(e, t) {
  return e.sortNodePosition(t);
}
function ZN(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((s) => gu(e, s, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = gu(e, t, n);
  else {
    const o = typeof t == "function" ? rl(e, t, n.custom) : t;
    r = Promise.all(uw(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const JN = Wd.length;
function dw(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? dw(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < JN; n++) {
    const r = Wd[n], o = e.props[r];
    (Ps(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const eM = [...Ud].reverse(), tM = Ud.length;
function nM(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => ZN(e, n, r)));
}
function rM(e) {
  let t = nM(e), n = zh(), r = !0;
  const o = (l) => (c, d) => {
    var u;
    const f = rl(e, d, l === "exit" ? (u = e.presenceContext) === null || u === void 0 ? void 0 : u.custom : void 0);
    if (f) {
      const { transition: v, transitionEnd: w, ...m } = f;
      c = { ...c, ...m, ...w };
    }
    return c;
  };
  function s(l) {
    t = l(e);
  }
  function i(l) {
    const { props: c } = e, d = dw(e.parent) || {}, u = [], f = /* @__PURE__ */ new Set();
    let v = {}, w = 1 / 0;
    for (let S = 0; S < tM; S++) {
      const g = eM[S], h = n[g], y = c[g] !== void 0 ? c[g] : d[g], b = Ps(y), C = g === l ? h.isActive : null;
      C === !1 && (w = S);
      let k = y === d[g] && y !== c[g] && b;
      if (k && r && e.manuallyAnimateOnMount && (k = !1), h.protectedKeys = { ...v }, // If it isn't active and hasn't *just* been set as inactive
      !h.isActive && C === null || // If we didn't and don't have any defined prop for this animation type
      !y && !h.prevProp || // Or if the prop doesn't define an animation
      tl(y) || typeof y == "boolean")
        continue;
      const E = oM(h.prevProp, y);
      let T = E || // If we're making this variant active, we want to always make it active
      g === l && h.isActive && !k && b || // If we removed a higher-priority variant (i is in reverse order)
      S > w && b, j = !1;
      const M = Array.isArray(y) ? y : [y];
      let D = M.reduce(o(g), {});
      C === !1 && (D = {});
      const { prevResolvedValues: N = {} } = h, O = {
        ...N,
        ...D
      }, $ = (U) => {
        T = !0, f.has(U) && (j = !0, f.delete(U)), h.needsAnimating[U] = !0;
        const P = e.getValue(U);
        P && (P.liveStyle = !1);
      };
      for (const U in O) {
        const P = D[U], _ = N[U];
        if (v.hasOwnProperty(U))
          continue;
        let F = !1;
        iu(P) && iu(_) ? F = !kx(P, _) : F = P !== _, F ? P != null ? $(U) : f.add(U) : P !== void 0 && f.has(U) ? $(U) : h.protectedKeys[U] = !0;
      }
      h.prevProp = y, h.prevResolvedValues = D, h.isActive && (v = { ...v, ...D }), r && e.blockInitialAnimation && (T = !1), T && (!(k && E) || j) && u.push(...M.map((U) => ({
        animation: U,
        options: { type: g }
      })));
    }
    if (f.size) {
      const S = {};
      f.forEach((g) => {
        const h = e.getBaseTarget(g), y = e.getValue(g);
        y && (y.liveStyle = !0), S[g] = h ?? null;
      }), u.push({ animation: S });
    }
    let m = !!u.length;
    return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (m = !1), r = !1, m ? t(u) : Promise.resolve();
  }
  function a(l, c) {
    var d;
    if (n[l].isActive === c)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((f) => {
      var v;
      return (v = f.animationState) === null || v === void 0 ? void 0 : v.setActive(l, c);
    }), n[l].isActive = c;
    const u = i(l);
    for (const f in n)
      n[f].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: i,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      n = zh(), r = !0;
    }
  };
}
function oM(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !kx(t, e) : !1;
}
function Jn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function zh() {
  return {
    animate: Jn(!0),
    whileInView: Jn(),
    whileHover: Jn(),
    whileTap: Jn(),
    whileDrag: Jn(),
    whileFocus: Jn(),
    exit: Jn()
  };
}
class qn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class sM extends qn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = rM(t));
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
let iM = 0;
class aM extends qn {
  constructor() {
    super(...arguments), this.id = iM++;
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
const lM = {
  animation: {
    Feature: sM
  },
  exit: {
    Feature: aM
  }
};
function As(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Ws(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const cM = (e) => (t) => sf(t) && e(t, Ws(t));
function ns(e, t, n, r) {
  return As(e, t, cM(n), r);
}
const Bh = (e, t) => Math.abs(e - t);
function uM(e, t) {
  const n = Bh(e.x, t.x), r = Bh(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class fw {
  constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: s = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const u = Xl(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, v = uM(u.offset, { x: 0, y: 0 }) >= 3;
      if (!f && !v)
        return;
      const { point: w } = u, { timestamp: m } = Oe;
      this.history.push({ ...w, timestamp: m });
      const { onStart: S, onMove: g } = this.handlers;
      f || (S && S(this.lastMoveEvent, u), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, u);
    }, this.handlePointerMove = (u, f) => {
      this.lastMoveEvent = u, this.lastMoveEventInfo = Yl(f, this.transformPagePoint), de.update(this.updatePoint, !0);
    }, this.handlePointerUp = (u, f) => {
      this.end();
      const { onEnd: v, onSessionEnd: w, resumeAnimation: m } = this.handlers;
      if (this.dragSnapToOrigin && m && m(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const S = Xl(u.type === "pointercancel" ? this.lastMoveEventInfo : Yl(f, this.transformPagePoint), this.history);
      this.startEvent && v && v(u, S), w && w(u, S);
    }, !sf(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = Ws(t), a = Yl(i, this.transformPagePoint), { point: l } = a, { timestamp: c } = Oe;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: d } = n;
    d && d(t, Xl(a, this.history)), this.removeListeners = Us(ns(this.contextWindow, "pointermove", this.handlePointerMove), ns(this.contextWindow, "pointerup", this.handlePointerUp), ns(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Un(this.updatePoint);
  }
}
function Yl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function $h(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Xl({ point: e }, t) {
  return {
    point: e,
    delta: $h(e, pw(t)),
    offset: $h(e, dM(t)),
    velocity: fM(t, 0.1)
  };
}
function dM(e) {
  return e[0];
}
function pw(e) {
  return e[e.length - 1];
}
function fM(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = pw(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > /* @__PURE__ */ nn(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = /* @__PURE__ */ rn(o.timestamp - r.timestamp);
  if (s === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - r.x) / s,
    y: (o.y - r.y) / s
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
const hw = 1e-4, pM = 1 - hw, hM = 1 + hw, mw = 0.01, mM = 0 - mw, gM = 0 + mw;
function pt(e) {
  return e.max - e.min;
}
function vM(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Uh(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = ve(t.min, t.max, e.origin), e.scale = pt(n) / pt(t), e.translate = ve(n.min, n.max, e.origin) - e.originPoint, (e.scale >= pM && e.scale <= hM || isNaN(e.scale)) && (e.scale = 1), (e.translate >= mM && e.translate <= gM || isNaN(e.translate)) && (e.translate = 0);
}
function rs(e, t, n, r) {
  Uh(e.x, t.x, n.x, r ? r.originX : void 0), Uh(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Wh(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + pt(t);
}
function yM(e, t, n) {
  Wh(e.x, t.x, n.x), Wh(e.y, t.y, n.y);
}
function Hh(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + pt(t);
}
function os(e, t, n) {
  Hh(e.x, t.x, n.x), Hh(e.y, t.y, n.y);
}
function xM(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? ve(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ve(n, e, r.max) : Math.min(e, n)), e;
}
function Kh(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function wM(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Kh(e.x, n, o),
    y: Kh(e.y, t, r)
  };
}
function Gh(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function SM(e, t) {
  return {
    x: Gh(e.x, t.x),
    y: Gh(e.y, t.y)
  };
}
function bM(e, t) {
  let n = 0.5;
  const r = pt(e), o = pt(t);
  return o > r ? n = /* @__PURE__ */ fo(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ fo(e.min, e.max - o, t.min)), dn(0, 1, n);
}
function CM(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const vu = 0.35;
function kM(e = vu) {
  return e === !1 ? e = 0 : e === !0 && (e = vu), {
    x: Yh(e, "left", "right"),
    y: Yh(e, "top", "bottom")
  };
}
function Yh(e, t, n) {
  return {
    min: Xh(e, t),
    max: Xh(e, n)
  };
}
function Xh(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Qh = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Ur = () => ({
  x: Qh(),
  y: Qh()
}), qh = () => ({ min: 0, max: 0 }), Ee = () => ({
  x: qh(),
  y: qh()
});
function vt(e) {
  return [e("x"), e("y")];
}
function gw({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function EM({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function TM(e, t) {
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
function nr(e) {
  return yu(e) || vw(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function vw(e) {
  return Zh(e.x) || Zh(e.y);
}
function Zh(e) {
  return e && e !== "0%";
}
function Ea(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Jh(e, t, n, r, o) {
  return o !== void 0 && (e = Ea(e, o, r)), Ea(e, n, r) + t;
}
function xu(e, t = 0, n = 1, r, o) {
  e.min = Jh(e.min, t, n, r, o), e.max = Jh(e.max, t, n, r, o);
}
function yw(e, { x: t, y: n }) {
  xu(e.x, t.translate, t.scale, t.originPoint), xu(e.y, n.translate, n.scale, n.originPoint);
}
const em = 0.999999999999, tm = 1.0000000000001;
function PM(e, t, n, r = !1) {
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
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, yw(e, i)), r && nr(s.latestValues) && Hr(e, s.latestValues));
  }
  t.x < tm && t.x > em && (t.x = 1), t.y < tm && t.y > em && (t.y = 1);
}
function Wr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function nm(e, t, n, r, o = 0.5) {
  const s = ve(e.min, e.max, o);
  xu(e, t, n, s, r);
}
function Hr(e, t) {
  nm(e.x, t.x, t.scaleX, t.scale, t.originX), nm(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function xw(e, t) {
  return gw(TM(e.getBoundingClientRect(), t));
}
function DM(e, t, n) {
  const r = xw(e, n), { scroll: o } = t;
  return o && (Wr(r.x, o.offset.x), Wr(r.y, o.offset.y)), r;
}
const ww = ({ current: e }) => e ? e.ownerDocument.defaultView : null, NM = /* @__PURE__ */ new WeakMap();
class MM {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ee(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (d) => {
      const { dragSnapToOrigin: u } = this.getProps();
      u ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Ws(d).point);
    }, s = (d, u) => {
      const { drag: f, dragPropagation: v, onDragStart: w } = this.getProps();
      if (f && !v && (this.openDragLock && this.openDragLock(), this.openDragLock = bD(f), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), vt((S) => {
        let g = this.getAxisMotionValue(S).get() || 0;
        if (Ht.test(g)) {
          const { projection: h } = this.visualElement;
          if (h && h.layout) {
            const y = h.layout.layoutBox[S];
            y && (g = pt(y) * (parseFloat(g) / 100));
          }
        }
        this.originPoint[S] = g;
      }), w && de.postRender(() => w(d, u)), cu(this.visualElement, "transform");
      const { animationState: m } = this.visualElement;
      m && m.setActive("whileDrag", !0);
    }, i = (d, u) => {
      const { dragPropagation: f, dragDirectionLock: v, onDirectionLock: w, onDrag: m } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: S } = u;
      if (v && this.currentDirection === null) {
        this.currentDirection = AM(S), this.currentDirection !== null && w && w(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, S), this.updateAxis("y", u.point, S), this.visualElement.render(), m && m(d, u);
    }, a = (d, u) => this.stop(d, u), l = () => vt((d) => {
      var u;
      return this.getAnimationState(d) === "paused" && ((u = this.getAxisMotionValue(d).animation) === null || u === void 0 ? void 0 : u.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new fw(t, {
      onSessionStart: o,
      onStart: s,
      onMove: i,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      contextWindow: ww(this.visualElement)
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
    this.constraints && this.constraints[t] && (i = xM(i, this.constraints[t], this.elastic[t])), s.set(i);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, s = this.constraints;
    n && Br(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = wM(o.layoutBox, n) : this.constraints = !1, this.elastic = kM(r), s !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && vt((i) => {
      this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = CM(o.layoutBox[i], this.constraints[i]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Br(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const s = DM(r, o.root, this.visualElement.getTransformPagePoint());
    let i = SM(o.layout.layoutBox, s);
    if (n) {
      const a = n(EM(i));
      this.hasMutatedConstraints = !!a, a && (i = gw(a));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = vt((d) => {
      if (!Si(d, n, this.currentDirection))
        return;
      let u = l && l[d] || {};
      i && (u = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, v = o ? 40 : 1e7, w = {
        type: "inertia",
        velocity: r ? t[d] : 0,
        bounceStiffness: f,
        bounceDamping: v,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...u
      };
      return this.startAxisValueAnimation(d, w);
    });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return cu(this.visualElement, t), r.start(yf(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    vt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    vt((t) => {
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
    vt((n) => {
      const { drag: r } = this.getProps();
      if (!Si(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, s = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: i, max: a } = o.layout.layoutBox[n];
        s.set(t[n] - ve(i, a, 0.5));
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
    vt((i) => {
      const a = this.getAxisMotionValue(i);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[i] = bM({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), vt((i) => {
      if (!Si(i, t, null))
        return;
      const a = this.getAxisMotionValue(i), { min: l, max: c } = this.constraints[i];
      a.set(ve(l, c, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    NM.set(this.visualElement, this);
    const t = this.visualElement.current, n = ns(t, "pointerdown", (l) => {
      const { drag: c, dragListener: d = !0 } = this.getProps();
      c && d && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Br(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, s = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), de.read(r);
    const i = As(window, "resize", () => this.scalePositionWithinConstraints()), a = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (vt((d) => {
        const u = this.getAxisMotionValue(d);
        u && (this.originPoint[d] += l[d].translate, u.set(u.get() + l[d].translate));
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
function AM(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class jM extends qn {
  constructor(t) {
    super(t), this.removeGroupControls = dt, this.removeListeners = dt, this.controls = new MM(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || dt;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const rm = (e) => (t, n) => {
  e && de.postRender(() => e(t, n));
};
class RM extends qn {
  constructor() {
    super(...arguments), this.removePointerDownListener = dt;
  }
  onPointerDown(t) {
    this.session = new fw(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: ww(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: rm(t),
      onStart: rm(n),
      onMove: r,
      onEnd: (s, i) => {
        delete this.session, o && de.postRender(() => o(s, i));
      }
    };
  }
  mount() {
    this.removePointerDownListener = ns(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
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
function om(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Oo = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (K.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = om(e, t.target.x), r = om(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, LM = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = Wn.parse(e);
    if (o.length > 5)
      return r;
    const s = Wn.createTransformer(e), i = typeof o[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + i] /= a, o[1 + i] /= l;
    const c = ve(a, l, 0.5);
    return typeof o[2 + i] == "number" && (o[2 + i] /= c), typeof o[3 + i] == "number" && (o[3 + i] /= c), s(o);
  }
};
class _M extends x.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: s } = t;
    tD(IM), s && (n.group && n.group.add(s), r && r.register && o && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
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
function Sw(e) {
  const [t, n] = rx(), r = x.useContext(Fd);
  return p.jsx(_M, { ...e, layoutGroup: r, switchLayoutGroup: x.useContext(dx), isPresent: t, safeToRemove: n });
}
const IM = {
  borderRadius: {
    ...Oo,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Oo,
  borderTopRightRadius: Oo,
  borderBottomLeftRadius: Oo,
  borderBottomRightRadius: Oo,
  boxShadow: LM
};
function OM(e, t, n) {
  const r = He(e) ? e : Ns(e);
  return r.start(yf("", r, t, n)), r.animation;
}
function FM(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const VM = (e, t) => e.depth - t.depth;
class zM {
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
    this.isDirty && this.children.sort(VM), this.isDirty = !1, this.children.forEach(t);
  }
}
function BM(e, t) {
  const n = Kt.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= t && (Un(r), e(s - t));
  };
  return de.read(r, !0), () => Un(r);
}
const bw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], $M = bw.length, sm = (e) => typeof e == "string" ? parseFloat(e) : e, im = (e) => typeof e == "number" || K.test(e);
function UM(e, t, n, r, o, s) {
  o ? (e.opacity = ve(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    WM(r)
  ), e.opacityExit = ve(t.opacity !== void 0 ? t.opacity : 1, 0, HM(r))) : s && (e.opacity = ve(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < $M; i++) {
    const a = `border${bw[i]}Radius`;
    let l = am(t, a), c = am(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || im(l) === im(c) ? (e[a] = Math.max(ve(sm(l), sm(c), r), 0), (Ht.test(c) || Ht.test(l)) && (e[a] += "%")) : e[a] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = ve(t.rotate || 0, n.rotate || 0, r));
}
function am(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const WM = /* @__PURE__ */ Cw(0, 0.5, Bx), HM = /* @__PURE__ */ Cw(0.5, 0.95, dt);
function Cw(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ fo(e, t, r));
}
function lm(e, t) {
  e.min = t.min, e.max = t.max;
}
function gt(e, t) {
  lm(e.x, t.x), lm(e.y, t.y);
}
function cm(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function um(e, t, n, r, o) {
  return e -= t, e = Ea(e, 1 / n, r), o !== void 0 && (e = Ea(e, 1 / o, r)), e;
}
function KM(e, t = 0, n = 1, r = 0.5, o, s = e, i = e) {
  if (Ht.test(t) && (t = parseFloat(t), t = ve(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let a = ve(s.min, s.max, r);
  e === s && (a -= t), e.min = um(e.min, t, n, a, o), e.max = um(e.max, t, n, a, o);
}
function dm(e, t, [n, r, o], s, i) {
  KM(e, t[n], t[r], t[o], t.scale, s, i);
}
const GM = ["x", "scaleX", "originX"], YM = ["y", "scaleY", "originY"];
function fm(e, t, n, r) {
  dm(e.x, t, GM, n ? n.x : void 0, r ? r.x : void 0), dm(e.y, t, YM, n ? n.y : void 0, r ? r.y : void 0);
}
function pm(e) {
  return e.translate === 0 && e.scale === 1;
}
function kw(e) {
  return pm(e.x) && pm(e.y);
}
function hm(e, t) {
  return e.min === t.min && e.max === t.max;
}
function XM(e, t) {
  return hm(e.x, t.x) && hm(e.y, t.y);
}
function mm(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Ew(e, t) {
  return mm(e.x, t.x) && mm(e.y, t.y);
}
function gm(e) {
  return pt(e.x) / pt(e.y);
}
function vm(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class QM {
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
function qM(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, s = e.y.translate / t.y, i = (n == null ? void 0 : n.z) || 0;
  if ((o || s || i) && (r = `translate3d(${o}px, ${s}px, ${i}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: c, rotate: d, rotateX: u, rotateY: f, skewX: v, skewY: w } = n;
    c && (r = `perspective(${c}px) ${r}`), d && (r += `rotate(${d}deg) `), u && (r += `rotateX(${u}deg) `), f && (r += `rotateY(${f}deg) `), v && (r += `skewX(${v}deg) `), w && (r += `skewY(${w}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const rr = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, Ho = typeof window < "u" && window.MotionDebug !== void 0, ql = ["", "X", "Y", "Z"], ZM = { visibility: "hidden" }, ym = 1e3;
let JM = 0;
function Zl(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Tw(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Lx(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", de, !(o || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Tw(r);
}
function Pw({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(i = {}, a = t == null ? void 0 : t()) {
      this.id = JM++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Ho && (rr.totalNodes = rr.resolvedTargetDeltas = rr.recalculatedProjection = 0), this.nodes.forEach(n2), this.nodes.forEach(a2), this.nodes.forEach(l2), this.nodes.forEach(r2), Ho && window.MotionDebug.record(rr);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new zM());
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
      this.isSVG = FM(i), this.instance = i;
      const { layoutId: l, layout: c, visualElement: d } = this.options;
      if (d && !d.current && d.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || l) && (this.isLayoutDirty = !0), e) {
        let u;
        const f = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, u && u(), u = BM(f, 250), $i.hasAnimatedSinceResize && ($i.hasAnimatedSinceResize = !1, this.nodes.forEach(wm));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && d && (l || c) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: f, hasRelativeTargetChanged: v, layout: w }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const m = this.options.transition || d.getDefaultTransition() || p2, { onLayoutAnimationStart: S, onLayoutAnimationComplete: g } = d.getProps(), h = !this.targetLayout || !Ew(this.targetLayout, w) || v, y = !f && v;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || y || f && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(u, y);
          const b = {
            ...nf(m, "layout"),
            onPlay: S,
            onComplete: g
          };
          (d.shouldReduceMotion || this.options.layoutRoot) && (b.delay = 0, b.type = !1), this.startAnimation(b);
        } else
          f || wm(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = w;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Un(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(c2), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Tw(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const u = this.path[d];
        u.shouldResetTransform = !0, u.updateScroll("snapshot"), u.options.layoutRoot && u.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), i && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(xm);
        return;
      }
      this.isUpdating || this.nodes.forEach(s2), this.isUpdating = !1, this.nodes.forEach(i2), this.nodes.forEach(e2), this.nodes.forEach(t2), this.clearAllSnapshots();
      const a = Kt.now();
      Oe.delta = dn(0, 1e3 / 60, a - Oe.timestamp), Oe.timestamp = a, Oe.isProcessing = !0, $l.update.process(Oe), $l.preRender.process(Oe), $l.render.process(Oe), Oe.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Kd.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(o2), this.sharedNodes.forEach(u2);
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
      this.layout = this.measure(!1), this.layoutCorrected = Ee(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !kw(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, d = c !== this.prevTransformTemplateValue;
      i && (a || nr(this.latestValues) || d) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return i && (l = this.removeTransform(l)), h2(l), {
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
        return Ee();
      const l = a.measureViewportBox();
      if (!(((i = this.scroll) === null || i === void 0 ? void 0 : i.wasRoot) || this.path.some(m2))) {
        const { scroll: d } = this.root;
        d && (Wr(l.x, d.offset.x), Wr(l.y, d.offset.y));
      }
      return l;
    }
    removeElementScroll(i) {
      var a;
      const l = Ee();
      if (gt(l, i), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c], { scroll: u, options: f } = d;
        d !== this.root && u && f.layoutScroll && (u.wasRoot && gt(l, i), Wr(l.x, u.offset.x), Wr(l.y, u.offset.y));
      }
      return l;
    }
    applyTransform(i, a = !1) {
      const l = Ee();
      gt(l, i);
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        !a && d.options.layoutScroll && d.scroll && d !== d.root && Hr(l, {
          x: -d.scroll.offset.x,
          y: -d.scroll.offset.y
        }), nr(d.latestValues) && Hr(l, d.latestValues);
      }
      return nr(this.latestValues) && Hr(l, this.latestValues), l;
    }
    removeTransform(i) {
      const a = Ee();
      gt(a, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !nr(c.latestValues))
          continue;
        yu(c.latestValues) && c.updateSnapshot();
        const d = Ee(), u = c.measurePageBox();
        gt(d, u), fm(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, d);
      }
      return nr(this.latestValues) && fm(a, this.latestValues), a;
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
      const { layout: u, layoutId: f } = this.options;
      if (!(!this.layout || !(u || f))) {
        if (this.resolvedRelativeTargetAt = Oe.timestamp, !this.targetDelta && !this.relativeTarget) {
          const v = this.getClosestProjectingParent();
          v && v.layout && this.animationProgress !== 1 ? (this.relativeParent = v, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ee(), this.relativeTargetOrigin = Ee(), os(this.relativeTargetOrigin, this.layout.layoutBox, v.layout.layoutBox), gt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Ee(), this.targetWithTransforms = Ee()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), yM(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : gt(this.target, this.layout.layoutBox), yw(this.target, this.targetDelta)) : gt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const v = this.getClosestProjectingParent();
            v && !!v.resumingFrom == !!this.resumingFrom && !v.options.layoutScroll && v.target && this.animationProgress !== 1 ? (this.relativeParent = v, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ee(), this.relativeTargetOrigin = Ee(), os(this.relativeTargetOrigin, this.target, v.target), gt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Ho && rr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || yu(this.parent.latestValues) || vw(this.parent.latestValues)))
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
      const { layout: d, layoutId: u } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(d || u))
        return;
      gt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, v = this.treeScale.y;
      PM(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = Ee());
      const { target: w } = a;
      if (!w) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (cm(this.prevProjectionDelta.x, this.projectionDelta.x), cm(this.prevProjectionDelta.y, this.projectionDelta.y)), rs(this.projectionDelta, this.layoutCorrected, w, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== v || !vm(this.projectionDelta.x, this.prevProjectionDelta.x) || !vm(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", w)), Ho && rr.recalculatedProjection++;
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
      const l = this.snapshot, c = l ? l.latestValues : {}, d = { ...this.latestValues }, u = Ur();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = Ee(), v = l ? l.source : void 0, w = this.layout ? this.layout.source : void 0, m = v !== w, S = this.getStack(), g = !S || S.members.length <= 1, h = !!(m && !g && this.options.crossfade === !0 && !this.path.some(f2));
      this.animationProgress = 0;
      let y;
      this.mixTargetDelta = (b) => {
        const C = b / 1e3;
        Sm(u.x, i.x, C), Sm(u.y, i.y, C), this.setTargetDelta(u), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (os(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), d2(this.relativeTarget, this.relativeTargetOrigin, f, C), y && XM(this.relativeTarget, y) && (this.isProjectionDirty = !1), y || (y = Ee()), gt(y, this.relativeTarget)), m && (this.animationValues = d, UM(d, c, this.latestValues, C, h, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Un(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = de.update(() => {
        $i.hasAnimatedSinceResize = !0, this.currentAnimation = OM(0, ym, {
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
      let { targetWithTransforms: a, target: l, layout: c, latestValues: d } = i;
      if (!(!a || !l || !c)) {
        if (this !== i && this.layout && c && Dw(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || Ee();
          const u = pt(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + u;
          const f = pt(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + f;
        }
        gt(a, l), Hr(a, d), rs(this.projectionDeltaWithTransform, this.layoutCorrected, a, d);
      }
    }
    registerSharedNode(i, a) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new QM()), this.sharedNodes.get(i).add(a);
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
      for (let d = 0; d < ql.length; d++)
        Zl(`rotate${ql[d]}`, i, c, this.animationValues), Zl(`skew${ql[d]}`, i, c, this.animationValues);
      i.render();
      for (const d in c)
        i.setStaticValue(d, c[d]), this.animationValues && (this.animationValues[d] = c[d]);
      i.scheduleRender();
    }
    getProjectionStyles(i) {
      var a, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return ZM;
      const c = {
        visibility: ""
      }, d = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = zi(i == null ? void 0 : i.pointerEvents) || "", c.transform = d ? d(this.latestValues, "") : "none", c;
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        const m = {};
        return this.options.layoutId && (m.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, m.pointerEvents = zi(i == null ? void 0 : i.pointerEvents) || ""), this.hasProjected && !nr(this.latestValues) && (m.transform = d ? d({}, "") : "none", this.hasProjected = !1), m;
      }
      const f = u.animationValues || u.latestValues;
      this.applyTransformsToTarget(), c.transform = qM(this.projectionDeltaWithTransform, this.treeScale, f), d && (c.transform = d(f, c.transform));
      const { x: v, y: w } = this.projectionDelta;
      c.transformOrigin = `${v.origin * 100}% ${w.origin * 100}% 0`, u.animationValues ? c.opacity = u === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : c.opacity = u === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const m in wa) {
        if (f[m] === void 0)
          continue;
        const { correct: S, applyTo: g } = wa[m], h = c.transform === "none" ? f[m] : S(f[m], u);
        if (g) {
          const y = g.length;
          for (let b = 0; b < y; b++)
            c[g[b]] = h;
        } else
          c[m] = h;
      }
      return this.options.layoutId && (c.pointerEvents = u === this ? zi(i == null ? void 0 : i.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var a;
        return (a = i.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(xm), this.root.sharedNodes.clear();
    }
  };
}
function e2(e) {
  e.updateLayout();
}
function t2(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: s } = e.options, i = n.source !== e.layout.source;
    s === "size" ? vt((u) => {
      const f = i ? n.measuredBox[u] : n.layoutBox[u], v = pt(f);
      f.min = r[u].min, f.max = f.min + v;
    }) : Dw(s, n.layoutBox, r) && vt((u) => {
      const f = i ? n.measuredBox[u] : n.layoutBox[u], v = pt(r[u]);
      f.max = f.min + v, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[u].max = e.relativeTarget[u].min + v);
    });
    const a = Ur();
    rs(a, r, n.layoutBox);
    const l = Ur();
    i ? rs(l, e.applyTransform(o, !0), n.measuredBox) : rs(l, r, n.layoutBox);
    const c = !kw(a);
    let d = !1;
    if (!e.resumeFrom) {
      const u = e.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: f, layout: v } = u;
        if (f && v) {
          const w = Ee();
          os(w, n.layoutBox, f.layoutBox);
          const m = Ee();
          os(m, r, v.layoutBox), Ew(w, m) || (d = !0), u.options.layoutRoot && (e.relativeTarget = m, e.relativeTargetOrigin = w, e.relativeParent = u);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: d
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function n2(e) {
  Ho && rr.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function r2(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function o2(e) {
  e.clearSnapshot();
}
function xm(e) {
  e.clearMeasurements();
}
function s2(e) {
  e.isLayoutDirty = !1;
}
function i2(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function wm(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function a2(e) {
  e.resolveTargetDelta();
}
function l2(e) {
  e.calcProjection();
}
function c2(e) {
  e.resetSkewAndRotation();
}
function u2(e) {
  e.removeLeadSnapshot();
}
function Sm(e, t, n) {
  e.translate = ve(t.translate, 0, n), e.scale = ve(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function bm(e, t, n, r) {
  e.min = ve(t.min, n.min, r), e.max = ve(t.max, n.max, r);
}
function d2(e, t, n, r) {
  bm(e.x, t.x, n.x, r), bm(e.y, t.y, n.y, r);
}
function f2(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const p2 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Cm = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), km = Cm("applewebkit/") && !Cm("chrome/") ? Math.round : dt;
function Em(e) {
  e.min = km(e.min), e.max = km(e.max);
}
function h2(e) {
  Em(e.x), Em(e.y);
}
function Dw(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !vM(gm(t), gm(n), 0.2);
}
function m2(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const g2 = Pw({
  attachResizeListener: (e, t) => As(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Jl = {
  current: void 0
}, Nw = Pw({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Jl.current) {
      const e = new g2({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Jl.current = e;
    }
    return Jl.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), v2 = {
  pan: {
    Feature: RM
  },
  drag: {
    Feature: jM,
    ProjectionNode: Nw,
    MeasureLayout: Sw
  }
};
function Tm(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, s = r[o];
  s && de.postRender(() => s(t, Ws(t)));
}
class y2 extends qn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = vD(t, (n) => (Tm(this.node, n, "Start"), (r) => Tm(this.node, r, "End"))));
  }
  unmount() {
  }
}
class x2 extends qn {
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
    this.unmount = Us(As(this.node.current, "focus", () => this.onFocus()), As(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Pm(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n), s = r[o];
  s && de.postRender(() => s(t, Ws(t)));
}
class w2 extends qn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = SD(t, (n) => (Pm(this.node, n, "Start"), (r, { success: o }) => Pm(this.node, r, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const wu = /* @__PURE__ */ new WeakMap(), ec = /* @__PURE__ */ new WeakMap(), S2 = (e) => {
  const t = wu.get(e.target);
  t && t(e);
}, b2 = (e) => {
  e.forEach(S2);
};
function C2({ root: e, ...t }) {
  const n = e || document;
  ec.has(n) || ec.set(n, {});
  const r = ec.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(b2, { root: e, ...t })), r[o];
}
function k2(e, t, n) {
  const r = C2(t);
  return wu.set(e, n), r.observe(e), () => {
    wu.delete(e), r.unobserve(e);
  };
}
const E2 = {
  some: 0,
  all: 1
};
class T2 extends qn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: s } = t, i = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : E2[o]
    }, a = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, s && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: d, onViewportLeave: u } = this.node.getProps(), f = c ? d : u;
      f && f(l);
    };
    return k2(this.node.current, i, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(P2(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function P2({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const D2 = {
  inView: {
    Feature: T2
  },
  tap: {
    Feature: w2
  },
  focus: {
    Feature: x2
  },
  hover: {
    Feature: y2
  }
}, N2 = {
  layout: {
    ProjectionNode: Nw,
    MeasureLayout: Sw
  }
}, Su = { current: null }, Mw = { current: !1 };
function M2() {
  if (Mw.current = !0, !!Bd)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Su.current = e.matches;
      e.addListener(t), t();
    } else
      Su.current = !1;
}
const A2 = [...tw, Ue, Wn], j2 = (e) => A2.find(ew(e)), Dm = /* @__PURE__ */ new WeakMap();
function R2(e, t, n) {
  for (const r in t) {
    const o = t[r], s = n[r];
    if (He(o))
      e.addValue(r, o);
    else if (He(s))
      e.addValue(r, Ns(o, { owner: e }));
    else if (s !== o)
      if (e.hasValue(r)) {
        const i = e.getValue(r);
        i.liveStyle === !0 ? i.jump(o) : i.hasAnimated || i.set(o);
      } else {
        const i = e.getStaticValue(r);
        e.addValue(r, Ns(i !== void 0 ? i : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const Nm = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class L2 {
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
      const v = Kt.now();
      this.renderScheduledAt < v && (this.renderScheduledAt = v, de.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: c, onUpdate: d } = i;
    this.onUpdate = d, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.blockInitialAnimation = !!s, this.isControllingVariants = nl(n), this.isVariantNode = cx(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const v in f) {
      const w = f[v];
      l[v] !== void 0 && He(w) && w.set(l[v], !1);
    }
  }
  mount(t) {
    this.current = t, Dm.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Mw.current || M2(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Su.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Dm.delete(this.current), this.projection && this.projection.unmount(), Un(this.notifyUpdate), Un(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const r = br.has(t), o = n.on("change", (a) => {
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ee();
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
    for (let r = 0; r < Nm.length; r++) {
      const o = Nm[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const s = "on" + o, i = t[s];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = R2(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return r === void 0 && n !== void 0 && (r = Ns(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return o != null && (typeof o == "string" && (Zx(o) || Ux(o)) ? o = parseFloat(o) : !j2(o) && Wn.test(n) && (o = Xx(t, n)), this.setBaseTarget(t, He(o) ? o.get() : o)), He(o) ? o.get() : o;
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
    return s !== void 0 && !He(s) ? s : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new cf()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Aw extends L2 {
  constructor() {
    super(...arguments), this.KeyframeResolver = nw;
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
    He(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function _2(e) {
  return window.getComputedStyle(e);
}
class I2 extends Aw {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = yx;
  }
  readValueFromInstance(t, n) {
    if (br.has(n)) {
      const r = hf(n);
      return r && r.default || 0;
    } else {
      const r = _2(t), o = (mx(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return xw(t, n);
  }
  build(t, n, r) {
    qd(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return tf(t, n, r);
  }
}
class O2 extends Aw {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ee;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (br.has(n)) {
      const r = hf(n);
      return r && r.default || 0;
    }
    return n = xx.has(n) ? n : Hd(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return bx(t, n, r);
  }
  build(t, n, r) {
    Zd(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    wx(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = ef(t.tagName), super.mount(t);
  }
}
const F2 = (e, t) => Gd(e) ? new O2(t) : new I2(t, {
  allowProjection: e !== x.Fragment
}), V2 = /* @__PURE__ */ uD({
  ...lM,
  ...D2,
  ...v2,
  ...N2
}, F2), bi = /* @__PURE__ */ EP(V2);
function Bt(e = "default") {
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
function jw(e = "default") {
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
function Hn(e, t = {}) {
  return e && t[e] ? t[e] : "default";
}
function Rw(e) {
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
  const [c, d] = x.useState(/* @__PURE__ */ new Date()), u = i || c, [f, v] = x.useState(0), [w, m] = x.useState(null), [S, g] = x.useState(null), [h, y] = x.useState(null), b = a === "popover", C = a === "dropdown", k = a === "sidebar", E = (z, I) => {
    const V = new Date(I, z + 1, 0).getDate();
    return Array.from({ length: V }, (q, Q) => ({ day: Q + 1 }));
  }, T = (z, I) => e.filter((q) => {
    const Q = new Date(q.startDate);
    return Q.getDate() === z && Q.getMonth() === I.getMonth() && Q.getFullYear() === I.getFullYear();
  }), j = (z) => z.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  });
  G.useEffect(() => {
    if (!k || h && h.getFullYear() === u.getFullYear() && h.getMonth() === u.getMonth())
      return;
    const I = /* @__PURE__ */ new Date();
    let V;
    if (I.getFullYear() === u.getFullYear() && I.getMonth() === u.getMonth())
      V = I.getDate();
    else {
      const q = e.map((Q) => new Date(Q.startDate)).filter((Q) => Q.getFullYear() === u.getFullYear() && Q.getMonth() === u.getMonth()).sort((Q, he) => Q.getTime() - he.getTime());
      V = q.length > 0 ? q[0].getDate() : 1;
    }
    y(new Date(u.getFullYear(), u.getMonth(), V));
  }, [k, u, e, h]), G.useEffect(() => {
    C || g(null);
  }, [C, u]);
  const M = () => {
    v(-1);
    const z = new Date(u.getFullYear(), u.getMonth() - 1, 1);
    i || d(z), s == null || s(z);
  }, D = () => {
    v(1);
    const z = new Date(u.getFullYear(), u.getMonth() + 1, 1);
    i || d(z), s == null || s(z);
  }, N = E(u.getMonth(), u.getFullYear()), O = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], W = new Date(u.getFullYear(), u.getMonth(), 1).getDay(), R = new Date(u.getFullYear(), u.getMonth() - 1, 1), U = new Date(R.getFullYear(), R.getMonth() + 1, 0).getDate(), P = ({ events: z }) => {
    const I = z.reduce((V, q) => {
      const Q = t[q.id], he = (Q == null ? void 0 : Q.category) || "uncategorized";
      return V[he] || (V[he] = []), V[he].push(q), V;
    }, {});
    return /* @__PURE__ */ p.jsx("div", { className: "flex flex-wrap gap-1", children: Object.entries(I).map(([V, q]) => {
      const Q = Hn(V === "uncategorized" ? null : V, n), he = Bt(Q);
      return /* @__PURE__ */ p.jsx(
        "div",
        {
          className: `${he} text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium shadow-sm`,
          title: `${q.length} ${V} event${q.length > 1 ? "s" : ""}: ${q.map((je) => je.title).join(", ")}`,
          children: q.length
        },
        V
      );
    }) });
  }, _ = (z) => z.map((I) => {
    const V = t[I.id], q = Hn(V == null ? void 0 : V.category, n), he = Bt(q).replace("bg-", "after:bg-"), je = new Date(I.startDate), ot = new Date(I.endDate), st = !Number.isNaN(je.getTime()) && !Number.isNaN(ot.getTime()), pn = st && je.getTime() === ot.getTime(), To = st ? `${j(je)}${pn ? "" : ` - ${j(ot)}`}` : null;
    return /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: `bg-card dark:bg-card relative rounded-md p-2 pl-6 text-xs text-left w-full after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-muted dark:hover:bg-muted transition-colors border border-gray-200 dark:border-border shadow-sm ${he}`,
        onClick: (hn) => {
          hn.stopPropagation(), o == null || o(I);
        },
        children: [
          /* @__PURE__ */ p.jsx("div", { className: "font-medium text-[13px] text-gray-900 dark:text-foreground leading-tight", children: I.title }),
          To && /* @__PURE__ */ p.jsx("div", { className: "mt-0.5 text-[11px] text-gray-900 dark:text-foreground", children: To })
        ]
      },
      I.id
    );
  }), F = G.useMemo(() => new Date(u.getFullYear(), u.getMonth(), 1), [u]), Y = !!(k && h && h.getFullYear() === u.getFullYear() && h.getMonth() === u.getMonth()), ne = k && Y && h ? h : F, ze = ne.getDate(), ke = ne, Ye = k ? T(ze, u) : [], Pe = ke.toLocaleDateString("en-US", {
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
            u.toLocaleString("default", { month: "long" }),
            " ",
            u.getFullYear()
          ]
        },
        u.getMonth()
      ),
      /* @__PURE__ */ p.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ p.jsxs(tn, { variant: "outline", onClick: M, className: "gap-2", children: [
          /* @__PURE__ */ p.jsx(l0, { className: "h-4 w-4" }),
          "Prev"
        ] }),
        /* @__PURE__ */ p.jsxs(tn, { variant: "outline", onClick: D, className: "gap-2", children: [
          "Next",
          /* @__PURE__ */ p.jsx(c0, { className: "h-4 w-4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-7 gap-1 sm:gap-2 mb-4", children: O.map((z, I) => /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "text-left py-2 text-lg tracking-tighter font-medium text-gray-900 dark:text-foreground",
        children: z
      },
      I
    )) }),
    /* @__PURE__ */ p.jsx(mh, { initial: !1, custom: f, mode: "wait", children: /* @__PURE__ */ p.jsxs(
      bi.div,
      {
        custom: f,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        className: "grid grid-cols-7 gap-1 sm:gap-2",
        children: [
          Array.from({ length: W }).map((z, I) => /* @__PURE__ */ p.jsx("div", { className: "h-[150px] opacity-50 p-4", children: /* @__PURE__ */ p.jsx("div", { className: "font-semibold relative text-3xl mb-1 text-gray-400 dark:text-neutral-500", children: U - W + I + 1 }) }, `offset-${I}`)),
          N.map((z) => {
            const I = T(z.day, u), V = (/* @__PURE__ */ new Date()).getDate() === z.day && (/* @__PURE__ */ new Date()).getMonth() === u.getMonth() && (/* @__PURE__ */ new Date()).getFullYear() === u.getFullYear(), Q = (W + z.day - 1) % 7 >= 5, he = k && Y && ze === z.day;
            return /* @__PURE__ */ p.jsxs(
              bi.div,
              {
                className: "hover:z-50 border-none h-[150px] rounded group flex flex-col relative",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -20 },
                transition: { duration: 0.3 },
                onMouseEnter: () => {
                  b && m(z.day);
                },
                onMouseLeave: () => {
                  b && m(null);
                },
                children: [
                  /* @__PURE__ */ p.jsxs(
                    vd,
                    {
                      className: `bg-white dark:bg-card border border-gray-200 dark:border-border shadow-md overflow-hidden relative flex p-4 h-full transition-shadow day-card ${I.length > 0 ? "cursor-pointer hover:shadow-lg hover:bg-muted dark:hover:bg-muted" : "cursor-default"} ${V ? "!border-red-500 !border-2" : ""} ${he && !V ? "ring-2 ring-blue-500 dark:ring-primary" : ""}`,
                      onClick: I.length > 0 ? () => {
                        k && y(new Date(u.getFullYear(), u.getMonth(), z.day)), r == null || r(new Date(u.getFullYear(), u.getMonth(), z.day));
                      } : void 0,
                      children: [
                        /* @__PURE__ */ p.jsx("div", { className: `font-semibold relative text-3xl mb-1 ${I.length > 0 ? "text-gray-900 dark:text-foreground" : "text-gray-500 dark:text-muted-foreground"}`, children: z.day }),
                        /* @__PURE__ */ p.jsxs("div", { className: "flex-grow flex flex-col gap-2 w-full", children: [
                          /* @__PURE__ */ p.jsx(mh, { mode: "wait", children: (I == null ? void 0 : I.length) > 0 && /* @__PURE__ */ p.jsx(
                            bi.div,
                            {
                              initial: { opacity: 0, y: 20 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: -20 },
                              transition: { duration: 0.3 },
                              children: /* @__PURE__ */ p.jsx(P, { events: I })
                            },
                            I[0].id
                          ) }),
                          C && I.length > 0 && /* @__PURE__ */ p.jsxs("div", { className: "mt-auto", children: [
                            /* @__PURE__ */ p.jsxs(
                              "button",
                              {
                                type: "button",
                                className: "w-full flex items-center justify-between gap-2 rounded-md bg-muted/70 dark:bg-muted px-2 py-1 text-xs font-medium text-foreground transition-colors hover:bg-muted",
                                onClick: (je) => {
                                  je.stopPropagation(), g((ot) => ot === z.day ? null : z.day);
                                },
                                children: [
                                  /* @__PURE__ */ p.jsx("span", { children: S === z.day ? "Hide events" : "Show events" }),
                                  /* @__PURE__ */ p.jsx(
                                    "svg",
                                    {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      className: `h-3 w-3 transition-transform ${S === z.day ? "rotate-180" : ""}`,
                                      fill: "none",
                                      children: /* @__PURE__ */ p.jsx("polyline", { points: "6 9 12 15 18 9" })
                                    }
                                  )
                                ]
                              }
                            ),
                            S === z.day && /* @__PURE__ */ p.jsx("div", { className: "mt-2 space-y-1.5", children: _(I) })
                          ] })
                        ] })
                      ]
                    }
                  ),
                  b && w === z.day && I.length > 0 && /* @__PURE__ */ p.jsxs(
                    "div",
                    {
                      className: `absolute top-full z-50 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg shadow-lg p-3 w-80 ${Q ? "right-0" : "left-0"}`,
                      onMouseEnter: () => {
                        b && m(z.day);
                      },
                      onMouseLeave: () => {
                        b && m(null);
                      },
                      children: [
                        /* @__PURE__ */ p.jsxs("div", { className: "text-sm font-semibold text-gray-900 dark:text-foreground mb-2", children: [
                          I.length,
                          " event",
                          I.length > 1 ? "s" : ""
                        ] }),
                        /* @__PURE__ */ p.jsx("div", { className: "space-y-1.5", children: _(I) })
                      ]
                    }
                  )
                ]
              },
              z.day
            );
          }),
          (() => {
            const I = (W + N.length) % 7, V = I === 0 ? 0 : 7 - I;
            return Array.from({ length: V }).map((q, Q) => /* @__PURE__ */ p.jsx("div", { className: "h-[150px] opacity-50 p-4", children: /* @__PURE__ */ p.jsx("div", { className: "font-semibold relative text-3xl mb-1 text-gray-400 dark:text-neutral-500", children: Q + 1 }) }, `next-${Q}`));
          })()
        ]
      },
      `${u.getFullYear()}-${u.getMonth()}`
    ) })
  ] }), re = /* @__PURE__ */ p.jsx("div", { className: k ? "flex-1" : void 0, children: k ? /* @__PURE__ */ p.jsx("div", { className: "rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-card shadow-sm p-4 lg:p-6", children: H }) : H }), fe = k ? /* @__PURE__ */ p.jsx("aside", { className: "md:w-72 w-full md:flex-shrink-0", children: /* @__PURE__ */ p.jsxs("div", { className: "rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-card shadow-md p-4", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ p.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-500 dark:text-muted-foreground", children: "Selected Day" }),
      /* @__PURE__ */ p.jsx("div", { className: "text-base font-semibold text-gray-900 dark:text-foreground", children: Pe })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "mt-3 space-y-1.5", children: Ye.length > 0 ? _(Ye) : /* @__PURE__ */ p.jsx("div", { className: "rounded-md border border-dashed border-gray-200 dark:border-border bg-gray-50 dark:bg-card px-3 py-4 text-xs text-gray-600 dark:text-muted-foreground", children: "No events scheduled for this day." }) })
  ] }) }) : null;
  return /* @__PURE__ */ p.jsxs("div", { className: k ? "flex flex-col gap-6 md:flex-row md:items-start" : "", children: [
    k && l === "left" && fe,
    re,
    k && l === "right" && fe
  ] });
}
function B2({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r }) {
  const [o, s] = G.useState(/* @__PURE__ */ new Date()), a = ((f) => {
    const v = new Date(f);
    return v.setDate(f.getDate() - f.getDay()), Array.from({ length: 7 }, (w, m) => {
      const S = new Date(v);
      return S.setDate(v.getDate() + m), S;
    });
  })(o), l = Array.from({ length: 24 }, (f, v) => v), c = (f) => e.filter((v) => v.startDate.toDateString() === f.toDateString()), d = (f) => {
    const v = new Date(o);
    v.setDate(o.getDate() + (f === "next" ? 7 : -7)), s(v);
  }, u = (f, v, w) => {
    const m = f.startDate.getHours(), S = f.startDate.getMinutes(), g = f.endDate ? f.endDate.getHours() : m + 1, h = f.endDate ? f.endDate.getMinutes() : 0, y = m + S / 60, b = g + h / 60, C = b - y, k = v.filter((D) => {
      if (D.id === f.id) return !0;
      if (D.startDate.toDateString() !== f.startDate.toDateString())
        return !1;
      const N = D.startDate.getHours() + D.startDate.getMinutes() / 60, O = (D.endDate ? D.endDate.getHours() : D.startDate.getHours() + 1) + (D.endDate ? D.endDate.getMinutes() / 60 : 0);
      return y < O && b > N;
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
          onClick: () => d("prev"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ p.jsx(u0, { className: "h-5 w-5" })
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
          onClick: () => d("next"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ p.jsx(d0, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-8 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700", children: [
        /* @__PURE__ */ p.jsx("div", { className: "p-3 text-xs font-medium text-gray-500 dark:text-gray-400 border-r border-gray-200 dark:border-gray-600", children: "Time" }),
        a.map((f, v) => /* @__PURE__ */ p.jsxs("div", { className: "p-3 text-center border-r border-gray-200 dark:border-gray-600 last:border-r-0", children: [
          /* @__PURE__ */ p.jsx("div", { className: "text-xs font-medium text-gray-500 dark:text-gray-400", children: f.toLocaleDateString("en-US", { weekday: "short" }) }),
          /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-gray-900 dark:text-gray-100", children: f.getDate() })
        ] }, v))
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-8 relative", children: [
        /* @__PURE__ */ p.jsx("div", { className: "border-r border-gray-200 dark:border-gray-600", children: l.map((f) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] p-2 text-xs text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600 flex items-start", children: f === 0 ? "12 AM" : f === 12 ? "12 PM" : f > 12 ? `${f - 12} PM` : `${f} AM` }, f)) }),
        a.map((f, v) => {
          const w = c(f);
          return /* @__PURE__ */ p.jsxs("div", { className: "relative border-r border-gray-200 dark:border-gray-600 last:border-r-0", children: [
            l.map((m) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] border-b border-gray-200 dark:border-gray-600" }, m)),
            w.map((m, S) => {
              const g = t[m.id], h = Hn(g == null ? void 0 : g.category, n), y = jw(h), b = u(m, w);
              return /* @__PURE__ */ p.jsxs(
                "div",
                {
                  className: `absolute ${y} border rounded p-2 text-sm z-20 overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow event-card`,
                  style: {
                    ...b,
                    margin: "1px"
                  },
                  onClick: (C) => {
                    C.stopPropagation(), r == null || r(m);
                  },
                  children: [
                    /* @__PURE__ */ p.jsx("div", { className: "font-medium leading-tight truncate text-sm", children: m.title }),
                    /* @__PURE__ */ p.jsx("div", { className: "text-xs opacity-75 leading-tight", children: m.startDate.toLocaleTimeString("en-US", {
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
                m.id
              );
            })
          ] }, v);
        })
      ] })
    ] })
  ] });
}
function $2({ events: e, eventMetadata: t, categoryMappings: n, initialDate: r, onEventClick: o }) {
  const [s, i] = G.useState(r || /* @__PURE__ */ new Date());
  G.useEffect(() => {
    r && i(r);
  }, [r]);
  const a = Array.from({ length: 24 }, (f, v) => v), l = () => e.filter((f) => f.startDate.toDateString() === s.toDateString()), c = (f) => {
    const v = new Date(s);
    v.setDate(s.getDate() + (f === "next" ? 1 : -1)), i(v);
  }, d = (f, v, w) => {
    const m = f.startDate.getHours(), S = f.startDate.getMinutes(), g = f.endDate ? f.endDate.getHours() : m + 1, h = f.endDate ? f.endDate.getMinutes() : 0, y = m + S / 60, b = g + h / 60, C = b - y, k = v.filter((D) => {
      if (D.id === f.id) return !0;
      const N = D.startDate.getHours() + D.startDate.getMinutes() / 60, O = (D.endDate ? D.endDate.getHours() : D.startDate.getHours() + 1) + (D.endDate ? D.endDate.getMinutes() / 60 : 0);
      return y < O && b > N;
    }), E = k.length, T = k.findIndex((D) => D.id === f.id), j = E > 1 ? 100 / E : 100, M = E > 1 ? T * j : 0;
    return {
      top: `${y * 80}px`,
      // 80px per hour for day view
      height: `${C * 80}px`,
      // Accurate height based on actual duration
      left: `${M}%`,
      width: `${j}%`
    };
  }, u = l();
  return /* @__PURE__ */ p.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ p.jsx(
        "button",
        {
          onClick: () => c("prev"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ p.jsx(u0, { className: "h-5 w-5" })
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
          children: /* @__PURE__ */ p.jsx(d0, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden", children: /* @__PURE__ */ p.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ p.jsx("div", { className: "w-20 border-r border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700", children: a.map((f) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] p-3 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600 flex items-start", children: f === 0 ? "12 AM" : f === 12 ? "12 PM" : f > 12 ? `${f - 12} PM` : `${f} AM` }, f)) }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex-1 relative", children: [
        a.map((f) => /* @__PURE__ */ p.jsx("div", { className: "h-[80px] border-b border-gray-200 dark:border-gray-600" }, f)),
        u.map((f, v) => {
          const w = t[f.id], m = Hn(w == null ? void 0 : w.category, n), S = jw(m), g = d(f, u);
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `absolute ${S} border rounded-lg p-2 text-sm z-20 overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow event-card`,
              style: {
                ...g,
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
                    /* @__PURE__ */ p.jsx(Fs, { className: "h-2.5 w-2.5" }),
                    /* @__PURE__ */ p.jsx("span", { className: "truncate", children: w.location })
                  ] }),
                  w.organization && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ p.jsx(gT, { className: "h-2.5 w-2.5" }),
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
  const [i, a] = G.useState(/* @__PURE__ */ new Date()), [l, c] = G.useState(/* @__PURE__ */ new Date()), d = s || l, u = () => {
    const D = new Date(d.getFullYear(), d.getMonth() - 1, 1);
    s || c(D), o == null || o(D);
  }, f = () => {
    const D = new Date(d.getFullYear(), d.getMonth() + 1, 1);
    s || c(D), o == null || o(D);
  }, v = (D) => D.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), w = () => i ? e.filter((D) => {
    const N = new Date(D.startDate);
    return N.getDate() === i.getDate() && N.getMonth() === i.getMonth() && N.getFullYear() === i.getFullYear();
  }) : [], m = (D) => e.some((N) => {
    const O = new Date(N.startDate);
    return O.getDate() === D.getDate() && O.getMonth() === D.getMonth() && O.getFullYear() === D.getFullYear();
  }), S = w(), g = d.getFullYear(), h = d.getMonth(), y = new Date(g, h, 1), b = new Date(y);
  b.setDate(b.getDate() - y.getDay());
  const C = [], k = new Date(b), E = new Date(g, h + 1, 0).getDate(), T = y.getDay() + E, M = Math.ceil(T / 7) * 7;
  for (let D = 0; D < M; D++)
    C.push(new Date(k)), k.setDate(k.getDate() + 1);
  return /* @__PURE__ */ p.jsxs(vd, { className: "w-full py-4 mobile-calendar bg-white dark:bg-card border-gray-200 dark:border-border", children: [
    /* @__PURE__ */ p.jsxs(Qv, { className: "px-4", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between mb-4 gap-2", children: [
        /* @__PURE__ */ p.jsxs(
          tn,
          {
            variant: "outline",
            size: "sm",
            onClick: u,
            className: "flex-shrink-0",
            children: [
              /* @__PURE__ */ p.jsx(l0, { className: "h-4 w-4" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Prev" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsx("h3", { className: "text-base sm:text-lg font-semibold text-gray-900 dark:text-foreground text-center flex-1 min-w-0 truncate", children: d.toLocaleDateString("en-US", { month: "long", year: "numeric" }) }),
        /* @__PURE__ */ p.jsxs(
          tn,
          {
            variant: "outline",
            size: "sm",
            onClick: f,
            className: "flex-shrink-0",
            children: [
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Next" }),
              /* @__PURE__ */ p.jsx(c0, { className: "h-4 w-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-7 gap-1 mb-4", children: [
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((D) => /* @__PURE__ */ p.jsx("div", { className: "text-center text-sm font-medium py-2 text-gray-900 dark:text-foreground", children: D }, D)),
        C.map((D, N) => {
          const O = D.getMonth() === h, $ = i && D.getDate() === i.getDate() && D.getMonth() === i.getMonth() && D.getFullYear() === i.getFullYear(), W = D.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), R = m(D);
          return /* @__PURE__ */ p.jsxs(
            "button",
            {
              onClick: () => a(D),
              className: `
                  p-2 text-sm rounded transition-colors relative focus:outline-none
                  ${O ? "text-gray-900 dark:text-foreground" : "text-gray-500 dark:text-muted-foreground"}
                  ${$ ? "bg-blue-500 dark:bg-primary text-white dark:text-primary-foreground hover:bg-blue-600 dark:hover:bg-primary/90" : "hover:bg-gray-100 dark:hover:bg-muted"}
                  ${W && !$ ? "bg-gray-200 dark:bg-muted font-semibold" : ""}
                `,
              children: [
                D.getDate(),
                R && /* @__PURE__ */ p.jsx(
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
    /* @__PURE__ */ p.jsxs(Ub, { className: "flex flex-col items-start gap-3 border-t border-gray-200 dark:border-border px-4 !pt-4", children: [
      /* @__PURE__ */ p.jsx("div", { className: "flex w-full items-center justify-between px-1", children: /* @__PURE__ */ p.jsx("div", { className: "text-sm font-medium text-gray-900 dark:text-foreground", children: i == null ? void 0 : i.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }) }) }),
      /* @__PURE__ */ p.jsx("div", { className: "flex w-full flex-col gap-2", children: S.length === 0 ? /* @__PURE__ */ p.jsx("div", { className: "text-sm text-gray-500 dark:text-muted-foreground text-center py-4", children: "No events on this day" }) : S.map((D) => {
        const N = t[D.id], O = Hn(N == null ? void 0 : N.category, n), W = Bt(O).replace("bg-", "after:bg-");
        return /* @__PURE__ */ p.jsxs(
          "button",
          {
            className: `bg-card dark:bg-card relative rounded-md p-2 pl-6 text-sm text-left w-full after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-muted dark:hover:bg-muted transition-colors focus:outline-none border border-gray-200 dark:border-border ${W}`,
            onClick: () => r == null ? void 0 : r(D),
            children: [
              /* @__PURE__ */ p.jsx("div", { className: "font-medium text-gray-900 dark:text-foreground", children: D.title }),
              /* @__PURE__ */ p.jsxs("div", { className: "text-muted-foreground dark:text-muted-foreground text-xs", children: [
                v(D.startDate),
                " - ",
                v(D.endDate),
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
function W2({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onLoadMore: o, hasMore: s, loading: i, showCost: a = !0 }) {
  const l = (v) => v.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), c = /* @__PURE__ */ new Date();
  c.setHours(0, 0, 0, 0);
  const u = [...e.filter((v) => {
    const w = new Date(v.startDate);
    return w.setHours(0, 0, 0, 0), w >= c;
  })].sort((v, w) => v.startDate.getTime() - w.startDate.getTime()), f = u.reduce((v, w) => {
    const m = w.startDate.toDateString();
    return v[m] || (v[m] = []), v[m].push(w), v;
  }, {});
  return /* @__PURE__ */ p.jsxs("div", { className: "space-y-6", children: [
    u.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-12 text-muted-foreground", children: [
      /* @__PURE__ */ p.jsx(Ts, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
      /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-medium mb-2", children: "No events found" }),
      /* @__PURE__ */ p.jsx("p", { children: "Try adjusting your filters to see more events." })
    ] }) : Object.entries(f).map(([v, w]) => {
      const m = new Date(v), S = m.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), g = m.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let h;
      return S ? h = "Today" : g ? h = "Tomorrow" : h = m.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }), /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-foreground", children: h }),
          /* @__PURE__ */ p.jsx("div", { className: "flex-1 h-px bg-border" }),
          /* @__PURE__ */ p.jsxs("span", { className: "text-xs font-semibold text-gray-900 dark:text-muted-foreground bg-gray-50 dark:bg-muted px-2 py-0.5 rounded-full border border-gray-200 dark:border-border", children: [
            w.length,
            " event",
            w.length > 1 ? "s" : ""
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: w.map((y) => {
          const b = t[y.id], C = Hn(b == null ? void 0 : b.category, n), E = Bt(C).replace("bg-", "after:bg-");
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `bg-card dark:bg-card relative rounded-md p-3 pl-6 text-sm border border-gray-200 dark:border-border shadow-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-muted dark:hover:bg-muted transition-colors ${E}`,
              onClick: () => r == null ? void 0 : r(y),
              children: [
                /* @__PURE__ */ p.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ p.jsxs("div", { className: "flex-grow min-w-0", children: [
                    /* @__PURE__ */ p.jsx("div", { className: "font-medium text-gray-900 dark:text-foreground mb-2", children: y.title }),
                    /* @__PURE__ */ p.jsxs("div", { className: "space-y-1 text-xs text-gray-900 dark:text-foreground", children: [
                      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(co, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsxs("span", { children: [
                          l(y.startDate),
                          " - ",
                          l(y.endDate)
                        ] })
                      ] }),
                      (b == null ? void 0 : b.location) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(Fs, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: b.location })
                      ] }),
                      (b == null ? void 0 : b.organization) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(Qa, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: b.organization })
                      ] })
                    ] })
                  ] }),
                  a && b && b.cost && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: b.cost })
                ] }),
                (b == null ? void 0 : b.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-2", children: /* @__PURE__ */ p.jsx(uo, { variant: "outline", size: "sm", children: "Registration Required" }) })
              ]
            },
            y.id
          );
        }) })
      ] }, v);
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
function H2({ events: e, eventMetadata: t, categoryMappings: n, onEventClick: r, onLoadMore: o, hasMore: s, loading: i, showCost: a = !0 }) {
  const l = (v) => v.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), c = /* @__PURE__ */ new Date();
  c.setHours(0, 0, 0, 0);
  const u = [...e.filter((v) => {
    const w = new Date(v.startDate);
    return w.setHours(0, 0, 0, 0), w >= c;
  })].sort((v, w) => v.startDate.getTime() - w.startDate.getTime()), f = u.reduce((v, w) => {
    const m = w.startDate.toDateString();
    return v[m] || (v[m] = []), v[m].push(w), v;
  }, {});
  return /* @__PURE__ */ p.jsxs("div", { className: "space-y-6", children: [
    u.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-12 text-muted-foreground", children: [
      /* @__PURE__ */ p.jsx(Ts, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
      /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-medium mb-2", children: "No events found" }),
      /* @__PURE__ */ p.jsx("p", { children: "Try adjusting your filters to see more events." })
    ] }) : Object.entries(f).map(([v, w]) => {
      const m = new Date(v), S = m.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), g = m.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let h;
      return S ? h = "Today" : g ? h = "Tomorrow" : h = m.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }), /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsx("h3", { className: "text-base font-semibold text-gray-900 dark:text-foreground", children: h }),
          /* @__PURE__ */ p.jsx("div", { className: "flex-1 h-px bg-border" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-xs font-semibold text-gray-900 dark:text-muted-foreground bg-gray-50 dark:bg-muted px-2 py-0.5 rounded-full border border-gray-200 dark:border-border", children: w.length })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: w.map((y) => {
          const b = t[y.id], C = Hn(b == null ? void 0 : b.category, n), E = Bt(C).replace("bg-", "after:bg-");
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `bg-card dark:bg-card relative rounded-md p-3 pl-6 text-sm border border-gray-200 dark:border-border shadow-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-muted dark:hover:bg-muted transition-colors ${E}`,
              onClick: () => r == null ? void 0 : r(y),
              children: [
                /* @__PURE__ */ p.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ p.jsxs("div", { className: "flex-grow min-w-0", children: [
                    /* @__PURE__ */ p.jsx("div", { className: "font-medium text-gray-900 dark:text-foreground mb-2", children: y.title }),
                    /* @__PURE__ */ p.jsxs("div", { className: "space-y-1 text-xs text-gray-900 dark:text-foreground", children: [
                      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(co, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsxs("span", { children: [
                          l(y.startDate),
                          " - ",
                          l(y.endDate)
                        ] })
                      ] }),
                      (b == null ? void 0 : b.location) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(Fs, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: b.location })
                      ] }),
                      (b == null ? void 0 : b.organization) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(Qa, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: b.organization })
                      ] })
                    ] })
                  ] }),
                  a && b && b.cost && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: b.cost })
                ] }),
                (b == null ? void 0 : b.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-2", children: /* @__PURE__ */ p.jsx(uo, { variant: "outline", size: "sm", children: "Registration Required" }) })
              ]
            },
            y.id
          );
        }) })
      ] }, v);
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
  showCost: s = !0,
  eventSortOrder: i = "asc",
  initialMonthDisplayMode: a = "popover",
  initialMonthSidebarPosition: l = "right"
} = {}) {
  var Cf, kf, Ef, Tf;
  const [c, d] = x.useState(e), [u, f] = x.useState(/* @__PURE__ */ new Date()), [v, w] = x.useState(/* @__PURE__ */ new Date()), [m, S] = x.useState(null), [g, h] = x.useState(!1), [y, b] = x.useState(!1), [C, k] = x.useState(a), [E, T] = x.useState(l), j = C === "sidebar", [M, D] = x.useState(30), [N, O] = x.useState(30), [$, W] = x.useState(15);
  G.useEffect(() => {
    const L = document.querySelector(".unbc-calendar-container");
    if (L) {
      const oe = parseInt(L.getAttribute("data-list-initial-items") || "30"), me = parseInt(L.getAttribute("data-list-load-more-count") || "15");
      O(oe), W(me), D(oe);
      const J = L.getAttribute("data-month-display-mode");
      (J === "popover" || J === "dropdown" || J === "sidebar") && k(J);
      const De = L.getAttribute("data-month-sidebar-position");
      (De === "left" || De === "right") && T(De);
    }
  }, []), G.useEffect(() => {
    k(a);
  }, [a]), G.useEffect(() => {
    T(l);
  }, [l]), G.useEffect(() => {
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
  }, []), G.useEffect(() => {
    let L;
    const oe = () => {
      var De;
      const J = (
        // Priority 1: Explicit theme attributes
        document.documentElement.hasAttribute("data-theme") && document.documentElement.getAttribute("data-theme") === "dark" || document.documentElement.hasAttribute("data-color-scheme") && document.documentElement.getAttribute("data-color-scheme") === "dark" || // Priority 2: Theme classes on body or html
        document.body.classList.contains("dark") || document.documentElement.classList.contains("is-dark-theme") || document.body.classList.contains("is-dark-theme") || // Priority 3: Computed styles
        ((De = getComputedStyle(document.documentElement).getPropertyValue("--wp--preset--color--background")) == null ? void 0 : De.includes("0, 0, 0")) || getComputedStyle(document.body).backgroundColor === "rgb(0, 0, 0)" || // Priority 4: System preference (lowest priority)
        !document.documentElement.hasAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches
      );
      b(J), L && L.disconnect(), J ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"), L && (L.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-theme", "data-color-scheme"] }), L.observe(document.body, { attributes: !0, attributeFilter: ["class"] }));
    };
    oe(), L = new MutationObserver(oe), L.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-theme", "data-color-scheme"] }), L.observe(document.body, { attributes: !0, attributeFilter: ["class"] });
    const me = window.matchMedia("(prefers-color-scheme: dark)");
    return me.addEventListener("change", oe), () => {
      L.disconnect(), me.removeEventListener("change", oe);
    };
  }, []);
  const [R, U] = x.useState("all"), [P, _] = x.useState("all"), [F, Y] = x.useState(""), [ne, ze] = x.useState(""), ke = G.useMemo(() => {
    const L = new Date(v.getTime()), oe = L.getFullYear(), me = L.getMonth(), J = new Date(oe, me, 1), De = new Date(oe, me + 1, 0);
    return {
      per_page: 500,
      start_date: J.toISOString().split("T")[0],
      end_date: De.toISOString().split("T")[0],
      year: oe,
      month: me + 1,
      // Calendar Plus uses 1-based months
      category: R === "all" ? "" : R
      // Don't send search to API - handle client-side only for better UX
    };
  }, [v, R]);
  GT(ke);
  const Ye = N0(ke), Pe = qT(), H = M0(), re = ZT();
  G.useEffect(() => {
    const L = setTimeout(() => {
      Y(ne);
    }, 300);
    return () => clearTimeout(L);
  }, [ne]);
  const fe = G.useMemo(() => {
    var L;
    return ((L = re.config) == null ? void 0 : L.categoriesWithOrganizations) || [];
  }, [re.config]);
  G.useEffect(() => {
    !fe.includes(R) && R !== "all" && _("all");
  }, [R, fe]);
  const z = Ye, {
    events: I,
    eventMetadata: V,
    loading: q,
    error: Q,
    categoryMappings: he
  } = z, je = Pe.organizations, ot = Pe.loading, { categories: st, loading: pn } = H, To = G.useMemo(
    () => Rw(st),
    [st]
  ), hn = G.useMemo(() => he && Object.keys(he).length > 0 ? he : To, [he, To]), xf = G.useMemo(() => {
    const L = /* @__PURE__ */ new Map();
    return je.forEach((oe) => {
      L.set(oe.id.toString(), oe.title.rendered);
    }), L;
  }, [je]), wf = G.useCallback((L, oe) => {
    var De, gn;
    const me = V[L.id];
    if (!me) return !1;
    const J = (gn = (De = re.config) == null ? void 0 : De.categoryRelationships) == null ? void 0 : gn[oe];
    return J ? J.includes(me.category) : me.category === oe;
  }, [V, re.config]), mn = G.useMemo(() => {
    let L = I;
    if (c === "list") {
      const oe = /* @__PURE__ */ new Date();
      oe.setHours(0, 0, 0, 0), L = L.filter((me) => {
        const J = new Date(me.startDate);
        return J.setHours(0, 0, 0, 0), J >= oe;
      }), L = L.sort((me, J) => {
        const De = me.startDate.getTime(), gn = J.startDate.getTime();
        return i === "asc" ? De - gn : gn - De;
      });
    } else
      L = L.sort((oe, me) => {
        const J = oe.startDate.getTime(), De = me.startDate.getTime();
        return i === "asc" ? J - De : De - J;
      });
    if (R !== "all" && (L = L.filter((oe) => wf(oe, R))), P !== "all") {
      const oe = xf.get(P);
      L = L.filter((me) => {
        const J = V[me.id];
        return oe && (J == null ? void 0 : J.organization) === oe;
      });
    }
    if (F) {
      const oe = F.toLowerCase();
      L = L.filter((me) => {
        var De, gn, Pf;
        const J = V[me.id];
        return me.title.toLowerCase().includes(oe) || ((De = J == null ? void 0 : J.description) == null ? void 0 : De.toLowerCase().includes(oe)) || ((gn = J == null ? void 0 : J.location) == null ? void 0 : gn.toLowerCase().includes(oe)) || ((Pf = J == null ? void 0 : J.organization) == null ? void 0 : Pf.toLowerCase().includes(oe));
      });
    }
    return L;
  }, [I, V, R, P, F, xf, c, wf, i]), _w = G.useCallback((L) => {
    f(L), j || (o ? d("day") : r && d("week"));
  }, [j, o, r]), Sf = G.useCallback((L) => {
    w(L);
  }, []), Cr = G.useCallback((L) => {
    S(L), h(!0);
  }, []), bf = G.useCallback(() => {
    D((L) => L + $);
  }, [$]);
  G.useEffect(() => {
    !r && c === "week" ? d(o ? "day" : "month") : !o && c === "day" && d(r ? "week" : "month");
  }, [r, o, c, d]);
  const Iw = `rounded-lg unbc-calendar-view ${c === "month" && j ? "bg-transparent dark:bg-transparent border border-transparent shadow-none" : "bg-card border border-border shadow-sm"}`;
  return G.useEffect(() => {
    c === "list" && D(N);
  }, [c, R, P, F, N]), (q || ot || pn) && (!I || I.length === 0) ? /* @__PURE__ */ p.jsx("div", { className: "w-full flex items-center justify-center py-12", children: /* @__PURE__ */ p.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ p.jsx(Vi, { className: "h-8 w-8 animate-spin mx-auto mb-4" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-muted-foreground", children: "Loading calendar..." })
  ] }) }) : Q ? /* @__PURE__ */ p.jsx("div", { className: "w-full py-12", children: /* @__PURE__ */ p.jsx(vd, { className: "max-w-md mx-auto", children: /* @__PURE__ */ p.jsxs(Qv, { className: "pt-6 text-center", children: [
    /* @__PURE__ */ p.jsxs("p", { className: "text-red-600 mb-4", children: [
      "Error loading events: ",
      Q
    ] }),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        onClick: () => window.location.reload(),
        className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
        children: "Retry"
      }
    )
  ] }) }) }) : /* @__PURE__ */ p.jsxs("div", { id: "unbc-calendar-react-component", "data-calendar-isolated": "true", className: `w-full space-y-6 ${y ? "dark" : ""}`, children: [
    /* @__PURE__ */ p.jsx("div", { className: Iw, children: /* @__PURE__ */ p.jsxs(WT, { value: c, onValueChange: d, className: "w-full", children: [
      /* @__PURE__ */ p.jsx("div", { className: "hidden md:block p-6 pb-0", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsxs(pi, { value: R, onValueChange: U, children: [
            /* @__PURE__ */ p.jsx(hi, { className: "w-40 border border-border bg-card text-foreground", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${R === "all" ? "bg-muted-foreground" : Bt(((Cf = st.find((L) => L.slug === R)) == null ? void 0 : Cf.variant) || "default")}` }),
              /* @__PURE__ */ p.jsx("span", { children: R === "all" ? "All Categories" : ((kf = st.find((L) => L.slug === R)) == null ? void 0 : kf.name) || "All Categories" })
            ] }) }),
            /* @__PURE__ */ p.jsxs(mi, { className: "bg-card border border-border z-[9999] shadow-lg", children: [
              /* @__PURE__ */ p.jsx(wn, { value: "all", className: "text-foreground hover:bg-muted focus:bg-muted focus:outline-none", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                /* @__PURE__ */ p.jsx("span", { className: "w-3 h-3 rounded-full flex-shrink-0 bg-muted-foreground" }),
                /* @__PURE__ */ p.jsx("span", { children: "All" })
              ] }) }),
              st.map((L) => /* @__PURE__ */ p.jsx(
                wn,
                {
                  value: L.slug,
                  className: "text-foreground hover:bg-muted focus:bg-muted focus:outline-none",
                  children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                    /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${Bt(L.variant || "default")}` }),
                    /* @__PURE__ */ p.jsx("span", { children: L.name })
                  ] })
                },
                L.id
              ))
            ] })
          ] }),
          fe.includes(R) && /* @__PURE__ */ p.jsxs(pi, { value: P, onValueChange: _, children: [
            /* @__PURE__ */ p.jsx(hi, { className: "w-44 border border-border bg-card text-foreground [&>span]:truncate [&>span]:block", children: /* @__PURE__ */ p.jsx(uh, { placeholder: "All Organizations" }) }),
            /* @__PURE__ */ p.jsxs(mi, { className: "bg-card border border-border max-h-[200px] overflow-y-auto", children: [
              /* @__PURE__ */ p.jsx(wn, { value: "all", className: "text-foreground focus:bg-muted", children: "All Organizations" }),
              je.map((L) => /* @__PURE__ */ p.jsx(
                wn,
                {
                  value: L.id.toString(),
                  className: "text-foreground focus:bg-muted",
                  children: L.title.rendered
                },
                L.id
              ))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ p.jsxs(dh, { className: "h-9 bg-muted dark:bg-background/50 border border-transparent dark:border-border/40 p-1", children: [
          o && /* @__PURE__ */ p.jsxs(Zn, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm", children: [
            /* @__PURE__ */ p.jsx(co, { className: "h-3 w-3" }),
            "Day"
          ] }),
          r && /* @__PURE__ */ p.jsxs(Zn, { value: "week", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm", children: [
            /* @__PURE__ */ p.jsx(Fi, { className: "h-3 w-3" }),
            "Week"
          ] }),
          /* @__PURE__ */ p.jsxs(Zn, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm", children: [
            /* @__PURE__ */ p.jsx(Ts, { className: "h-3 w-3" }),
            "Month"
          ] }),
          /* @__PURE__ */ p.jsxs(Zn, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm", children: [
            /* @__PURE__ */ p.jsx(ch, { className: "h-3 w-3" }),
            "List"
          ] })
        ] }) }),
        /* @__PURE__ */ p.jsxs("div", { className: "flex-shrink-0 flex items-center gap-2", children: [
          q && I && I.length > 0 && /* @__PURE__ */ p.jsx(Vi, { className: "h-4 w-4 animate-spin text-muted-foreground" }),
          /* @__PURE__ */ p.jsx(
            ou,
            {
              placeholder: "Search events...",
              value: ne,
              onChange: (L) => ze(L.target.value),
              className: "w-40 border border-border bg-card text-foreground placeholder:text-muted-foreground"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "md:hidden", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "px-4 py-4 flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ p.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ p.jsxs(pi, { value: R, onValueChange: U, children: [
            /* @__PURE__ */ p.jsx(hi, { className: "w-auto min-w-[60px] h-9 px-2 border border-border bg-card text-foreground", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${R === "all" ? "bg-muted-foreground" : Bt(((Ef = st.find((L) => L.slug === R)) == null ? void 0 : Ef.variant) || "default")}` }),
              /* @__PURE__ */ p.jsx("span", { className: "text-xs truncate max-w-[60px]", children: R === "all" ? "All" : ((Tf = st.find((L) => L.slug === R)) == null ? void 0 : Tf.name) || "All" })
            ] }) }),
            /* @__PURE__ */ p.jsxs(mi, { className: "bg-card border border-border z-[9999]", children: [
              /* @__PURE__ */ p.jsx(wn, { value: "all", className: "text-foreground focus:bg-muted", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                /* @__PURE__ */ p.jsx("span", { className: "w-3 h-3 rounded-full flex-shrink-0 bg-muted-foreground" }),
                /* @__PURE__ */ p.jsx("span", { children: "All" })
              ] }) }),
              st.map((L) => /* @__PURE__ */ p.jsx(
                wn,
                {
                  value: L.slug,
                  className: "text-foreground focus:bg-muted",
                  children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                    /* @__PURE__ */ p.jsx("span", { className: `w-3 h-3 rounded-full flex-shrink-0 ${Bt(L.variant || "default")}` }),
                    /* @__PURE__ */ p.jsx("span", { children: L.name })
                  ] })
                },
                L.id
              ))
            ] })
          ] }) }),
          /* @__PURE__ */ p.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ p.jsxs(dh, { className: "h-9 bg-muted dark:bg-background/50 border border-transparent dark:border-border/40 p-1", children: [
            o && /* @__PURE__ */ p.jsxs(Zn, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm flex-1", children: [
              /* @__PURE__ */ p.jsx(co, { className: "h-3 w-3" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Day" })
            ] }),
            /* @__PURE__ */ p.jsxs(Zn, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm flex-1", children: [
              /* @__PURE__ */ p.jsx(Ts, { className: "h-3 w-3" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "Month" })
            ] }),
            /* @__PURE__ */ p.jsxs(Zn, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-card dark:data-[state=active]:bg-accent data-[state=active]:shadow-sm flex-1", children: [
              /* @__PURE__ */ p.jsx(ch, { className: "h-3 w-3" }),
              /* @__PURE__ */ p.jsx("span", { className: "hidden xs:inline", children: "List" })
            ] })
          ] }) }),
          /* @__PURE__ */ p.jsxs("div", { className: "flex-shrink-0 flex items-center gap-2", children: [
            q && I && I.length > 0 && /* @__PURE__ */ p.jsx(Vi, { className: "h-4 w-4 animate-spin text-muted-foreground" }),
            /* @__PURE__ */ p.jsx(
              tn,
              {
                variant: "outline",
                size: "sm",
                className: "h-9 px-2 border border-border bg-card hover:bg-muted",
                onClick: () => {
                  const L = document.querySelector(".mobile-search-input");
                  L && (L.style.display = L.style.display === "none" ? "block" : "none", L.style.display !== "none" && L.focus());
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
            value: ne,
            onChange: (L) => ze(L.target.value),
            className: "mobile-search-input w-full h-9 border border-border bg-card text-foreground placeholder:text-muted-foreground",
            style: { display: "none" }
          }
        ) }),
        fe.includes(R) && /* @__PURE__ */ p.jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ p.jsxs(pi, { value: P, onValueChange: _, children: [
          /* @__PURE__ */ p.jsx(hi, { className: "w-full h-9 border border-border bg-card text-foreground", children: /* @__PURE__ */ p.jsx(uh, { placeholder: "All Organizations", className: "truncate" }) }),
          /* @__PURE__ */ p.jsxs(mi, { className: "bg-card border border-border max-h-[200px] overflow-y-auto", children: [
            /* @__PURE__ */ p.jsx(wn, { value: "all", className: "text-foreground focus:bg-muted", children: "All Organizations" }),
            je.map((L) => /* @__PURE__ */ p.jsx(
              wn,
              {
                value: L.id.toString(),
                className: "text-foreground focus:bg-muted",
                children: L.title.rendered
              },
              L.id
            ))
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ p.jsxs(vi, { value: "month", className: "px-6 pb-6 md:p-6", children: [
        /* @__PURE__ */ p.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ p.jsx(
          z2,
          {
            events: mn,
            eventMetadata: V,
            categoryMappings: hn,
            onDateClick: _w,
            onEventClick: Cr,
            onMonthChange: Sf,
            currentDate: v,
            displayMode: C,
            sidebarPosition: E
          }
        ) }),
        /* @__PURE__ */ p.jsx("div", { className: "block md:hidden mobile-calendar", children: /* @__PURE__ */ p.jsx(
          U2,
          {
            events: mn,
            eventMetadata: V,
            categoryMappings: hn,
            onEventClick: Cr,
            onMonthChange: Sf,
            currentDate: v
          }
        ) })
      ] }),
      r && /* @__PURE__ */ p.jsx(vi, { value: "week", className: "px-6 pb-6 md:p-6", children: /* @__PURE__ */ p.jsx(
        B2,
        {
          events: mn,
          eventMetadata: V,
          categoryMappings: hn,
          onEventClick: Cr
        }
      ) }),
      o && /* @__PURE__ */ p.jsx(vi, { value: "day", className: "px-6 pb-6 md:p-6", children: /* @__PURE__ */ p.jsx(
        $2,
        {
          events: mn,
          eventMetadata: V,
          categoryMappings: hn,
          initialDate: u,
          onEventClick: Cr
        }
      ) }),
      /* @__PURE__ */ p.jsxs(vi, { value: "list", className: "px-6 pb-6 md:p-6", children: [
        /* @__PURE__ */ p.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ p.jsx(
          W2,
          {
            events: mn.slice(0, M),
            eventMetadata: V,
            categoryMappings: hn,
            onEventClick: Cr,
            onLoadMore: bf,
            hasMore: mn.length > M,
            loading: q,
            showCost: s
          }
        ) }),
        /* @__PURE__ */ p.jsx("div", { className: "block md:hidden", children: /* @__PURE__ */ p.jsx(
          H2,
          {
            events: mn.slice(0, M),
            eventMetadata: V,
            categoryMappings: hn,
            onEventClick: Cr,
            onLoadMore: bf,
            hasMore: mn.length > M,
            loading: q,
            showCost: s
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsx(
      nx,
      {
        event: m,
        eventMetadata: V,
        open: g,
        onOpenChange: h,
        showCost: s
      }
    )
  ] });
}
function G2({
  events: e,
  eventMetadata: t,
  categoryMappings: n = {},
  organizationId: r,
  organizationName: o,
  limit: s,
  showPastEvents: i = !1,
  onEventClick: a
}) {
  const l = (u) => u.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), { filteredEvents: c, eventsByDate: d } = G.useMemo(() => {
    let u = e;
    const f = /* @__PURE__ */ new Date();
    (r || o) && (u = u.filter((w) => {
      var S;
      const m = t[w.id];
      return o ? (m == null ? void 0 : m.organization) === o : r ? ((S = m == null ? void 0 : m.organization_id) == null ? void 0 : S.toString()) === r : !0;
    })), i || (u = u.filter((w) => w.startDate >= f)), u.sort((w, m) => w.startDate.getTime() - m.startDate.getTime()), s && s > 0 && (u = u.slice(0, s));
    const v = u.reduce((w, m) => {
      const S = m.startDate.toDateString();
      return w[S] || (w[S] = []), w[S].push(m), w;
    }, {});
    return { filteredEvents: u, eventsByDate: v };
  }, [e, t, r, o, s, i]);
  return c.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-8 text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ p.jsx(Ts, { className: "mx-auto h-8 w-8 mb-3 opacity-50" }),
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
    Object.entries(d).map(([u, f]) => {
      const v = new Date(u), w = v.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), m = v.toDateString() === new Date(Date.now() + 864e5).toDateString();
      let S;
      return w ? S = "Today" : m ? S = "Tomorrow" : S = v.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }), /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-foreground", children: S }),
          /* @__PURE__ */ p.jsx("div", { className: "flex-1 h-px bg-border" }),
          /* @__PURE__ */ p.jsxs("span", { className: "text-xs font-semibold text-gray-900 dark:text-muted-foreground bg-gray-50 dark:bg-muted px-2 py-0.5 rounded-full border border-gray-200 dark:border-border", children: [
            f.length,
            " event",
            f.length > 1 ? "s" : ""
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: f.map((g) => {
          const h = t[g.id], y = Hn(h == null ? void 0 : h.category, n), C = Bt(y).replace("bg-", "after:bg-");
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              className: `bg-card dark:bg-card relative rounded-md p-3 pl-6 text-sm border border-gray-200 dark:border-border shadow-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-muted dark:hover:bg-muted transition-colors ${C}`,
              onClick: () => a == null ? void 0 : a(g),
              children: [
                /* @__PURE__ */ p.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ p.jsxs("div", { className: "flex-grow min-w-0", children: [
                    /* @__PURE__ */ p.jsx("div", { className: "font-medium text-gray-900 dark:text-foreground mb-2", children: g.title }),
                    /* @__PURE__ */ p.jsxs("div", { className: "space-y-1 text-xs text-gray-900 dark:text-foreground", children: [
                      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(co, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsxs("span", { children: [
                          l(g.startDate),
                          " - ",
                          l(g.endDate)
                        ] })
                      ] }),
                      (h == null ? void 0 : h.location) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(Fs, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: h.location })
                      ] }),
                      !o && (h == null ? void 0 : h.organization) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(Qa, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: h.organization })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col items-end gap-2 flex-shrink-0 ml-4", children: [
                    (h == null ? void 0 : h.cost) && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400", children: h.cost }),
                    (h == null ? void 0 : h.category) && /* @__PURE__ */ p.jsx(uo, { variant: "secondary", size: "sm", className: "text-xs capitalize", children: h.category })
                  ] })
                ] }),
                (h == null ? void 0 : h.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-2", children: /* @__PURE__ */ p.jsx(uo, { variant: "outline", size: "sm", children: "Registration Required" }) })
              ]
            },
            g.id
          );
        }) })
      ] }, u);
    })
  ] });
}
function Lw({
  organizationId: e,
  organizationName: t,
  limit: n = 5,
  showPastEvents: r = !1
}) {
  const [o, s] = x.useState(null), [i, a] = x.useState(!1), {
    events: l,
    eventMetadata: c,
    loading: d,
    error: u,
    categoryMappings: f
  } = N0({
    view: "list",
    // Use list view for organization pages
    organization: e
    // Filter by organization
  }), { categories: v } = M0(), w = G.useMemo(
    () => Rw(v),
    [v]
  ), m = G.useMemo(() => f && Object.keys(f).length > 0 ? f : w, [f, w]), S = (g) => {
    s(g), a(!0);
  };
  return d ? /* @__PURE__ */ p.jsx("div", { className: "w-full flex items-center justify-center py-8", children: /* @__PURE__ */ p.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ p.jsx(Vi, { className: "h-6 w-6 animate-spin mx-auto mb-2" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-gray-600 text-sm", children: "Loading events..." })
  ] }) }) : u ? /* @__PURE__ */ p.jsx("div", { className: "w-full py-8", children: /* @__PURE__ */ p.jsx("div", { className: "max-w-md mx-auto bg-red-50 border border-red-200 rounded-lg p-4", children: /* @__PURE__ */ p.jsxs("p", { className: "text-red-600 text-sm", children: [
    "Error loading events: ",
    u
  ] }) }) }) : /* @__PURE__ */ p.jsxs("div", { className: "unbc-organization-events", children: [
    /* @__PURE__ */ p.jsx(
      G2,
      {
        events: l,
        eventMetadata: c,
        categoryMappings: m,
        organizationId: e,
        organizationName: t,
        limit: n,
        showPastEvents: r,
        onEventClick: S
      }
    ),
    /* @__PURE__ */ p.jsx(
      nx,
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
  const n = $a(t), r = t.dataset.view || "month", o = t.dataset.categoryFilter || "all", s = t.dataset.organizationFilter || "all", i = t.dataset.showWeekView !== "false", a = t.dataset.showDayView !== "false", l = t.dataset.showCost !== "false", c = t.dataset.eventSortOrder || "asc", d = t.dataset.monthDisplayMode || "popover", u = t.dataset.monthSidebarPosition || "right";
  n.render(
    /* @__PURE__ */ p.jsx(G.StrictMode, { children: /* @__PURE__ */ p.jsx(
      K2,
      {
        initialView: r,
        initialCategoryFilter: o,
        initialOrganizationFilter: s,
        showWeekView: i,
        showDayView: a,
        showCost: l,
        eventSortOrder: c,
        initialMonthDisplayMode: d,
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
    /* @__PURE__ */ p.jsx(G.StrictMode, { children: /* @__PURE__ */ p.jsx(
      Lw,
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
    /* @__PURE__ */ p.jsx(G.StrictMode, { children: /* @__PURE__ */ p.jsx(
      Lw,
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
