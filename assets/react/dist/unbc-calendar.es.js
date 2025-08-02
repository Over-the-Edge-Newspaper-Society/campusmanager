function iw(e, t) {
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
function sm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var im = { exports: {} }, fa = {}, am = { exports: {} }, W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xs = Symbol.for("react.element"), aw = Symbol.for("react.portal"), lw = Symbol.for("react.fragment"), uw = Symbol.for("react.strict_mode"), cw = Symbol.for("react.profiler"), dw = Symbol.for("react.provider"), fw = Symbol.for("react.context"), pw = Symbol.for("react.forward_ref"), hw = Symbol.for("react.suspense"), mw = Symbol.for("react.memo"), gw = Symbol.for("react.lazy"), of = Symbol.iterator;
function yw(e) {
  return e === null || typeof e != "object" ? null : (e = of && e[of] || e["@@iterator"], typeof e == "function" ? e : null);
}
var lm = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, um = Object.assign, cm = {};
function eo(e, t, n) {
  this.props = e, this.context = t, this.refs = cm, this.updater = n || lm;
}
eo.prototype.isReactComponent = {};
eo.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
eo.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function dm() {
}
dm.prototype = eo.prototype;
function lc(e, t, n) {
  this.props = e, this.context = t, this.refs = cm, this.updater = n || lm;
}
var uc = lc.prototype = new dm();
uc.constructor = lc;
um(uc, eo.prototype);
uc.isPureReactComponent = !0;
var sf = Array.isArray, fm = Object.prototype.hasOwnProperty, cc = { current: null }, pm = { key: !0, ref: !0, __self: !0, __source: !0 };
function hm(e, t, n) {
  var r, o = {}, s = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (s = "" + t.key), t) fm.call(t, r) && !pm.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: xs, type: e, key: s, ref: i, props: o, _owner: cc.current };
}
function vw(e, t) {
  return { $$typeof: xs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function dc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xs;
}
function xw(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var af = /\/+/g;
function Ua(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? xw("" + e.key) : t.toString(36);
}
function di(e, t, n, r, o) {
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
        case aw:
          i = !0;
      }
  }
  if (i) return i = e, o = o(i), e = r === "" ? "." + Ua(i, 0) : r, sf(o) ? (n = "", e != null && (n = e.replace(af, "$&/") + "/"), di(o, t, n, "", function(u) {
    return u;
  })) : o != null && (dc(o) && (o = vw(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(af, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", sf(e)) for (var a = 0; a < e.length; a++) {
    s = e[a];
    var l = r + Ua(s, a);
    i += di(s, t, n, l, o);
  }
  else if (l = yw(e), typeof l == "function") for (e = l.call(e), a = 0; !(s = e.next()).done; ) s = s.value, l = r + Ua(s, a++), i += di(s, t, n, l, o);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Ms(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return di(e, r, "", "", function(s) {
    return t.call(n, s, o++);
  }), r;
}
function ww(e) {
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
var Ue = { current: null }, fi = { transition: null }, Sw = { ReactCurrentDispatcher: Ue, ReactCurrentBatchConfig: fi, ReactCurrentOwner: cc };
function mm() {
  throw Error("act(...) is not supported in production builds of React.");
}
W.Children = { map: Ms, forEach: function(e, t, n) {
  Ms(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Ms(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Ms(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!dc(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
W.Component = eo;
W.Fragment = lw;
W.Profiler = cw;
W.PureComponent = lc;
W.StrictMode = uw;
W.Suspense = hw;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sw;
W.act = mm;
W.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = um({}, e.props), o = e.key, s = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, i = cc.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) fm.call(t, l) && !pm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
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
  return e = { $$typeof: fw, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: dw, _context: e }, e.Consumer = e;
};
W.createElement = hm;
W.createFactory = function(e) {
  var t = hm.bind(null, e);
  return t.type = e, t;
};
W.createRef = function() {
  return { current: null };
};
W.forwardRef = function(e) {
  return { $$typeof: pw, render: e };
};
W.isValidElement = dc;
W.lazy = function(e) {
  return { $$typeof: gw, _payload: { _status: -1, _result: e }, _init: ww };
};
W.memo = function(e, t) {
  return { $$typeof: mw, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function(e) {
  var t = fi.transition;
  fi.transition = {};
  try {
    e();
  } finally {
    fi.transition = t;
  }
};
W.unstable_act = mm;
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
am.exports = W;
var x = am.exports;
const be = /* @__PURE__ */ sm(x), gm = /* @__PURE__ */ iw({
  __proto__: null,
  default: be
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
var kw = x, Cw = Symbol.for("react.element"), bw = Symbol.for("react.fragment"), Pw = Object.prototype.hasOwnProperty, Tw = kw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ew = { key: !0, ref: !0, __self: !0, __source: !0 };
function ym(e, t, n) {
  var r, o = {}, s = null, i = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Pw.call(t, r) && !Ew.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Cw, type: e, key: s, ref: i, props: o, _owner: Tw.current };
}
fa.Fragment = bw;
fa.jsx = ym;
fa.jsxs = ym;
im.exports = fa;
var h = im.exports, vm = { exports: {} }, st = {}, xm = { exports: {} }, wm = {};
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
  function t(E, M) {
    var _ = E.length;
    E.push(M);
    e: for (; 0 < _; ) {
      var $ = _ - 1 >>> 1, ae = E[$];
      if (0 < o(ae, M)) E[$] = M, E[_] = ae, _ = $;
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var M = E[0], _ = E.pop();
    if (_ !== M) {
      E[0] = _;
      e: for (var $ = 0, ae = E.length, Et = ae >>> 1; $ < Et; ) {
        var Re = 2 * ($ + 1) - 1, Dt = E[Re], ze = Re + 1, V = E[ze];
        if (0 > o(Dt, _)) ze < ae && 0 > o(V, Dt) ? (E[$] = V, E[ze] = _, $ = ze) : (E[$] = Dt, E[Re] = _, $ = Re);
        else if (ze < ae && 0 > o(V, _)) E[$] = V, E[ze] = _, $ = ze;
        else break e;
      }
    }
    return M;
  }
  function o(E, M) {
    var _ = E.sortIndex - M.sortIndex;
    return _ !== 0 ? _ : E.id - M.id;
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
  var l = [], u = [], c = 1, d = null, f = 3, m = !1, w = !1, y = !1, S = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(E) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u);
      else if (M.startTime <= E) r(u), M.sortIndex = M.expirationTime, t(l, M);
      else break;
      M = n(u);
    }
  }
  function k(E) {
    if (y = !1, v(E), !w) if (n(l) !== null) w = !0, I(C);
    else {
      var M = n(u);
      M !== null && O(k, M.startTime - E);
    }
  }
  function C(E, M) {
    w = !1, y && (y = !1, g(T), T = -1), m = !0;
    var _ = f;
    try {
      for (v(M), d = n(l); d !== null && (!(d.expirationTime > M) || E && !j()); ) {
        var $ = d.callback;
        if (typeof $ == "function") {
          d.callback = null, f = d.priorityLevel;
          var ae = $(d.expirationTime <= M);
          M = e.unstable_now(), typeof ae == "function" ? d.callback = ae : d === n(l) && r(l), v(M);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Et = !0;
      else {
        var Re = n(u);
        Re !== null && O(k, Re.startTime - M), Et = !1;
      }
      return Et;
    } finally {
      d = null, f = _, m = !1;
    }
  }
  var b = !1, P = null, T = -1, N = 5, D = -1;
  function j() {
    return !(e.unstable_now() - D < N);
  }
  function R() {
    if (P !== null) {
      var E = e.unstable_now();
      D = E;
      var M = !0;
      try {
        M = P(!0, E);
      } finally {
        M ? z() : (b = !1, P = null);
      }
    } else b = !1;
  }
  var z;
  if (typeof p == "function") z = function() {
    p(R);
  };
  else if (typeof MessageChannel < "u") {
    var B = new MessageChannel(), Y = B.port2;
    B.port1.onmessage = R, z = function() {
      Y.postMessage(null);
    };
  } else z = function() {
    S(R, 0);
  };
  function I(E) {
    P = E, b || (b = !0, z());
  }
  function O(E, M) {
    T = S(function() {
      E(e.unstable_now());
    }, M);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
    E.callback = null;
  }, e.unstable_continueExecution = function() {
    w || m || (w = !0, I(C));
  }, e.unstable_forceFrameRate = function(E) {
    0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < E ? Math.floor(1e3 / E) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(E) {
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
      return E();
    } finally {
      f = _;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(E, M) {
    switch (E) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        E = 3;
    }
    var _ = f;
    f = E;
    try {
      return M();
    } finally {
      f = _;
    }
  }, e.unstable_scheduleCallback = function(E, M, _) {
    var $ = e.unstable_now();
    switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? $ + _ : $) : _ = $, E) {
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
    return ae = _ + ae, E = { id: c++, callback: M, priorityLevel: E, startTime: _, expirationTime: ae, sortIndex: -1 }, _ > $ ? (E.sortIndex = _, t(u, E), n(l) === null && E === n(u) && (y ? (g(T), T = -1) : y = !0, O(k, _ - $))) : (E.sortIndex = ae, t(l, E), w || m || (w = !0, I(C))), E;
  }, e.unstable_shouldYield = j, e.unstable_wrapCallback = function(E) {
    var M = f;
    return function() {
      var _ = f;
      f = M;
      try {
        return E.apply(this, arguments);
      } finally {
        f = _;
      }
    };
  };
})(wm);
xm.exports = wm;
var Dw = xm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nw = x, rt = Dw;
function A(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Sm = /* @__PURE__ */ new Set(), Go = {};
function ur(e, t) {
  $r(e, t), $r(e + "Capture", t);
}
function $r(e, t) {
  for (Go[e] = t, e = 0; e < t.length; e++) Sm.add(t[e]);
}
var Qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Bl = Object.prototype.hasOwnProperty, Aw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, lf = {}, uf = {};
function Rw(e) {
  return Bl.call(uf, e) ? !0 : Bl.call(lf, e) ? !1 : Aw.test(e) ? uf[e] = !0 : (lf[e] = !0, !1);
}
function Mw(e, t, n, r) {
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
function jw(e, t, n, r) {
  if (t === null || typeof t > "u" || Mw(e, t, n, r)) return !0;
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
var fc = /[\-:]([a-z])/g;
function pc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    fc,
    pc
  );
  Ne[t] = new We(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(fc, pc);
  Ne[t] = new We(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(fc, pc);
  Ne[t] = new We(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ne[e] = new We(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new We("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ne[e] = new We(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function hc(e, t, n, r) {
  var o = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (jw(t, n, o, r) && (n = null), r || o === null ? Rw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rn = Nw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, js = Symbol.for("react.element"), gr = Symbol.for("react.portal"), yr = Symbol.for("react.fragment"), mc = Symbol.for("react.strict_mode"), $l = Symbol.for("react.profiler"), km = Symbol.for("react.provider"), Cm = Symbol.for("react.context"), gc = Symbol.for("react.forward_ref"), Ul = Symbol.for("react.suspense"), Wl = Symbol.for("react.suspense_list"), yc = Symbol.for("react.memo"), cn = Symbol.for("react.lazy"), bm = Symbol.for("react.offscreen"), cf = Symbol.iterator;
function mo(e) {
  return e === null || typeof e != "object" ? null : (e = cf && e[cf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var fe = Object.assign, Wa;
function To(e) {
  if (Wa === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Wa = t && t[1] || "";
  }
  return `
` + Wa + e;
}
var Ha = !1;
function Ka(e, t) {
  if (!e || Ha) return "";
  Ha = !0;
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
    Ha = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? To(e) : "";
}
function Lw(e) {
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
      return e = Ka(e.type, !1), e;
    case 11:
      return e = Ka(e.type.render, !1), e;
    case 1:
      return e = Ka(e.type, !0), e;
    default:
      return "";
  }
}
function Hl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case yr:
      return "Fragment";
    case gr:
      return "Portal";
    case $l:
      return "Profiler";
    case mc:
      return "StrictMode";
    case Ul:
      return "Suspense";
    case Wl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Cm:
      return (e.displayName || "Context") + ".Consumer";
    case km:
      return (e._context.displayName || "Context") + ".Provider";
    case gc:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case yc:
      return t = e.displayName || null, t !== null ? t : Hl(e.type) || "Memo";
    case cn:
      t = e._payload, e = e._init;
      try {
        return Hl(e(t));
      } catch {
      }
  }
  return null;
}
function _w(e) {
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
      return Hl(t);
    case 8:
      return t === mc ? "StrictMode" : "Mode";
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
function Pm(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Iw(e) {
  var t = Pm(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Ls(e) {
  e._valueTracker || (e._valueTracker = Iw(e));
}
function Tm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Pm(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ni(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Kl(e, t) {
  var n = t.checked;
  return fe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function df(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Dn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Em(e, t) {
  t = t.checked, t != null && hc(e, "checked", t, !1);
}
function Gl(e, t) {
  Em(e, t);
  var n = Dn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Yl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Yl(e, t.type, Dn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ff(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Yl(e, t, n) {
  (t !== "number" || Ni(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Eo = Array.isArray;
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
function Xl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return fe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function pf(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(A(92));
      if (Eo(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Dn(n) };
}
function Dm(e, t) {
  var n = Dn(t.value), r = Dn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function hf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Nm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ql(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Nm(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var _s, Am = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (_s = _s || document.createElement("div"), _s.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = _s.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
}, Ow = ["Webkit", "ms", "Moz", "O"];
Object.keys(Lo).forEach(function(e) {
  Ow.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Lo[t] = Lo[e];
  });
});
function Rm(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Lo.hasOwnProperty(e) && Lo[e] ? ("" + t).trim() : t + "px";
}
function Mm(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Rm(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Fw = fe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Zl(e, t) {
  if (t) {
    if (Fw[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function ql(e, t) {
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
var Jl = null;
function vc(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var eu = null, Lr = null, _r = null;
function mf(e) {
  if (e = ks(e)) {
    if (typeof eu != "function") throw Error(A(280));
    var t = e.stateNode;
    t && (t = ya(t), eu(e.stateNode, e.type, t));
  }
}
function jm(e) {
  Lr ? _r ? _r.push(e) : _r = [e] : Lr = e;
}
function Lm() {
  if (Lr) {
    var e = Lr, t = _r;
    if (_r = Lr = null, mf(e), t) for (e = 0; e < t.length; e++) mf(t[e]);
  }
}
function _m(e, t) {
  return e(t);
}
function Im() {
}
var Ga = !1;
function Om(e, t, n) {
  if (Ga) return e(t, n);
  Ga = !0;
  try {
    return _m(e, t, n);
  } finally {
    Ga = !1, (Lr !== null || _r !== null) && (Im(), Lm());
  }
}
function Xo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ya(n);
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
var tu = !1;
if (Qt) try {
  var go = {};
  Object.defineProperty(go, "passive", { get: function() {
    tu = !0;
  } }), window.addEventListener("test", go, go), window.removeEventListener("test", go, go);
} catch {
  tu = !1;
}
function Vw(e, t, n, r, o, s, i, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var _o = !1, Ai = null, Ri = !1, nu = null, zw = { onError: function(e) {
  _o = !0, Ai = e;
} };
function Bw(e, t, n, r, o, s, i, a, l) {
  _o = !1, Ai = null, Vw.apply(zw, arguments);
}
function $w(e, t, n, r, o, s, i, a, l) {
  if (Bw.apply(this, arguments), _o) {
    if (_o) {
      var u = Ai;
      _o = !1, Ai = null;
    } else throw Error(A(198));
    Ri || (Ri = !0, nu = u);
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
function Fm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function gf(e) {
  if (cr(e) !== e) throw Error(A(188));
}
function Uw(e) {
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
        if (s === n) return gf(o), e;
        if (s === r) return gf(o), t;
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
function Vm(e) {
  return e = Uw(e), e !== null ? zm(e) : null;
}
function zm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = zm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Bm = rt.unstable_scheduleCallback, yf = rt.unstable_cancelCallback, Ww = rt.unstable_shouldYield, Hw = rt.unstable_requestPaint, xe = rt.unstable_now, Kw = rt.unstable_getCurrentPriorityLevel, xc = rt.unstable_ImmediatePriority, $m = rt.unstable_UserBlockingPriority, Mi = rt.unstable_NormalPriority, Gw = rt.unstable_LowPriority, Um = rt.unstable_IdlePriority, pa = null, _t = null;
function Yw(e) {
  if (_t && typeof _t.onCommitFiberRoot == "function") try {
    _t.onCommitFiberRoot(pa, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var St = Math.clz32 ? Math.clz32 : Zw, Xw = Math.log, Qw = Math.LN2;
function Zw(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Xw(e) / Qw | 0) | 0;
}
var Is = 64, Os = 4194304;
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
function ji(e, t) {
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
function qw(e, t) {
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
function Jw(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var i = 31 - St(s), a = 1 << i, l = o[i];
    l === -1 ? (!(a & n) || a & r) && (o[i] = qw(a, t)) : l <= t && (e.expiredLanes |= a), s &= ~a;
  }
}
function ru(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Wm() {
  var e = Is;
  return Is <<= 1, !(Is & 4194240) && (Is = 64), e;
}
function Ya(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ws(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - St(t), e[t] = n;
}
function e1(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - St(n), s = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~s;
  }
}
function wc(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - St(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Z = 0;
function Hm(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Km, Sc, Gm, Ym, Xm, ou = !1, Fs = [], vn = null, xn = null, wn = null, Qo = /* @__PURE__ */ new Map(), Zo = /* @__PURE__ */ new Map(), pn = [], t1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function vf(e, t) {
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
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [o] }, t !== null && (t = ks(t), t !== null && Sc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function n1(e, t, n, r, o) {
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
function Qm(e) {
  var t = Gn(e.target);
  if (t !== null) {
    var n = cr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Fm(n), t !== null) {
          e.blockedOn = t, Xm(e.priority, function() {
            Gm(n);
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
function pi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = su(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Jl = r, n.target.dispatchEvent(r), Jl = null;
    } else return t = ks(n), t !== null && Sc(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function xf(e, t, n) {
  pi(e) && n.delete(t);
}
function r1() {
  ou = !1, vn !== null && pi(vn) && (vn = null), xn !== null && pi(xn) && (xn = null), wn !== null && pi(wn) && (wn = null), Qo.forEach(xf), Zo.forEach(xf);
}
function vo(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ou || (ou = !0, rt.unstable_scheduleCallback(rt.unstable_NormalPriority, r1)));
}
function qo(e) {
  function t(o) {
    return vo(o, e);
  }
  if (0 < Fs.length) {
    vo(Fs[0], e);
    for (var n = 1; n < Fs.length; n++) {
      var r = Fs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (vn !== null && vo(vn, e), xn !== null && vo(xn, e), wn !== null && vo(wn, e), Qo.forEach(t), Zo.forEach(t), n = 0; n < pn.length; n++) r = pn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pn.length && (n = pn[0], n.blockedOn === null); ) Qm(n), n.blockedOn === null && pn.shift();
}
var Ir = rn.ReactCurrentBatchConfig, Li = !0;
function o1(e, t, n, r) {
  var o = Z, s = Ir.transition;
  Ir.transition = null;
  try {
    Z = 1, kc(e, t, n, r);
  } finally {
    Z = o, Ir.transition = s;
  }
}
function s1(e, t, n, r) {
  var o = Z, s = Ir.transition;
  Ir.transition = null;
  try {
    Z = 4, kc(e, t, n, r);
  } finally {
    Z = o, Ir.transition = s;
  }
}
function kc(e, t, n, r) {
  if (Li) {
    var o = su(e, t, n, r);
    if (o === null) ol(e, t, r, _i, n), vf(e, r);
    else if (n1(o, e, t, n, r)) r.stopPropagation();
    else if (vf(e, r), t & 4 && -1 < t1.indexOf(e)) {
      for (; o !== null; ) {
        var s = ks(o);
        if (s !== null && Km(s), s = su(e, t, n, r), s === null && ol(e, t, r, _i, n), s === o) break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else ol(e, t, r, null, n);
  }
}
var _i = null;
function su(e, t, n, r) {
  if (_i = null, e = vc(r), e = Gn(e), e !== null) if (t = cr(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Fm(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return _i = e, null;
}
function Zm(e) {
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
      switch (Kw()) {
        case xc:
          return 1;
        case $m:
          return 4;
        case Mi:
        case Gw:
          return 16;
        case Um:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var gn = null, Cc = null, hi = null;
function qm() {
  if (hi) return hi;
  var e, t = Cc, n = t.length, r, o = "value" in gn ? gn.value : gn.textContent, s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++) ;
  return hi = o.slice(e, 1 < r ? 1 - r : void 0);
}
function mi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Vs() {
  return !0;
}
function wf() {
  return !1;
}
function it(e) {
  function t(n, r, o, s, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = s, this.target = i, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(s) : s[a]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Vs : wf, this.isPropagationStopped = wf, this;
  }
  return fe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Vs);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Vs);
  }, persist: function() {
  }, isPersistent: Vs }), t;
}
var to = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, bc = it(to), Ss = fe({}, to, { view: 0, detail: 0 }), i1 = it(Ss), Xa, Qa, xo, ha = fe({}, Ss, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Pc, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== xo && (xo && e.type === "mousemove" ? (Xa = e.screenX - xo.screenX, Qa = e.screenY - xo.screenY) : Qa = Xa = 0, xo = e), Xa);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Qa;
} }), Sf = it(ha), a1 = fe({}, ha, { dataTransfer: 0 }), l1 = it(a1), u1 = fe({}, Ss, { relatedTarget: 0 }), Za = it(u1), c1 = fe({}, to, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), d1 = it(c1), f1 = fe({}, to, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), p1 = it(f1), h1 = fe({}, to, { data: 0 }), kf = it(h1), m1 = {
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
}, g1 = {
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
}, y1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function v1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = y1[e]) ? !!t[e] : !1;
}
function Pc() {
  return v1;
}
var x1 = fe({}, Ss, { key: function(e) {
  if (e.key) {
    var t = m1[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = mi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? g1[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Pc, charCode: function(e) {
  return e.type === "keypress" ? mi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? mi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), w1 = it(x1), S1 = fe({}, ha, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Cf = it(S1), k1 = fe({}, Ss, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Pc }), C1 = it(k1), b1 = fe({}, to, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), P1 = it(b1), T1 = fe({}, ha, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), E1 = it(T1), D1 = [9, 13, 27, 32], Tc = Qt && "CompositionEvent" in window, Io = null;
Qt && "documentMode" in document && (Io = document.documentMode);
var N1 = Qt && "TextEvent" in window && !Io, Jm = Qt && (!Tc || Io && 8 < Io && 11 >= Io), bf = " ", Pf = !1;
function eg(e, t) {
  switch (e) {
    case "keyup":
      return D1.indexOf(t.keyCode) !== -1;
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
function tg(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var vr = !1;
function A1(e, t) {
  switch (e) {
    case "compositionend":
      return tg(t);
    case "keypress":
      return t.which !== 32 ? null : (Pf = !0, bf);
    case "textInput":
      return e = t.data, e === bf && Pf ? null : e;
    default:
      return null;
  }
}
function R1(e, t) {
  if (vr) return e === "compositionend" || !Tc && eg(e, t) ? (e = qm(), hi = Cc = gn = null, vr = !1, e) : null;
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
      return Jm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var M1 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Tf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!M1[e.type] : t === "textarea";
}
function ng(e, t, n, r) {
  jm(r), t = Ii(t, "onChange"), 0 < t.length && (n = new bc("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Oo = null, Jo = null;
function j1(e) {
  pg(e, 0);
}
function ma(e) {
  var t = Sr(e);
  if (Tm(t)) return e;
}
function L1(e, t) {
  if (e === "change") return t;
}
var rg = !1;
if (Qt) {
  var qa;
  if (Qt) {
    var Ja = "oninput" in document;
    if (!Ja) {
      var Ef = document.createElement("div");
      Ef.setAttribute("oninput", "return;"), Ja = typeof Ef.oninput == "function";
    }
    qa = Ja;
  } else qa = !1;
  rg = qa && (!document.documentMode || 9 < document.documentMode);
}
function Df() {
  Oo && (Oo.detachEvent("onpropertychange", og), Jo = Oo = null);
}
function og(e) {
  if (e.propertyName === "value" && ma(Jo)) {
    var t = [];
    ng(t, Jo, e, vc(e)), Om(j1, t);
  }
}
function _1(e, t, n) {
  e === "focusin" ? (Df(), Oo = t, Jo = n, Oo.attachEvent("onpropertychange", og)) : e === "focusout" && Df();
}
function I1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ma(Jo);
}
function O1(e, t) {
  if (e === "click") return ma(t);
}
function F1(e, t) {
  if (e === "input" || e === "change") return ma(t);
}
function V1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ct = typeof Object.is == "function" ? Object.is : V1;
function es(e, t) {
  if (Ct(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Bl.call(t, o) || !Ct(e[o], t[o])) return !1;
  }
  return !0;
}
function Nf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Af(e, t) {
  var n = Nf(e);
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
    n = Nf(n);
  }
}
function sg(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? sg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ig() {
  for (var e = window, t = Ni(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ni(e.document);
  }
  return t;
}
function Ec(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function z1(e) {
  var t = ig(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && sg(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ec(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, s = Math.min(r.start, o);
        r = r.end === void 0 ? s : Math.min(r.end, o), !e.extend && s > r && (o = r, r = s, s = o), o = Af(n, s);
        var i = Af(
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
var B1 = Qt && "documentMode" in document && 11 >= document.documentMode, xr = null, iu = null, Fo = null, au = !1;
function Rf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  au || xr == null || xr !== Ni(r) || (r = xr, "selectionStart" in r && Ec(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Fo && es(Fo, r) || (Fo = r, r = Ii(iu, "onSelect"), 0 < r.length && (t = new bc("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = xr)));
}
function zs(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var wr = { animationend: zs("Animation", "AnimationEnd"), animationiteration: zs("Animation", "AnimationIteration"), animationstart: zs("Animation", "AnimationStart"), transitionend: zs("Transition", "TransitionEnd") }, el = {}, ag = {};
Qt && (ag = document.createElement("div").style, "AnimationEvent" in window || (delete wr.animationend.animation, delete wr.animationiteration.animation, delete wr.animationstart.animation), "TransitionEvent" in window || delete wr.transitionend.transition);
function ga(e) {
  if (el[e]) return el[e];
  if (!wr[e]) return e;
  var t = wr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ag) return el[e] = t[n];
  return e;
}
var lg = ga("animationend"), ug = ga("animationiteration"), cg = ga("animationstart"), dg = ga("transitionend"), fg = /* @__PURE__ */ new Map(), Mf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function _n(e, t) {
  fg.set(e, t), ur(t, [e]);
}
for (var tl = 0; tl < Mf.length; tl++) {
  var nl = Mf[tl], $1 = nl.toLowerCase(), U1 = nl[0].toUpperCase() + nl.slice(1);
  _n($1, "on" + U1);
}
_n(lg, "onAnimationEnd");
_n(ug, "onAnimationIteration");
_n(cg, "onAnimationStart");
_n("dblclick", "onDoubleClick");
_n("focusin", "onFocus");
_n("focusout", "onBlur");
_n(dg, "onTransitionEnd");
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
var No = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), W1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(No));
function jf(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, $w(r, t, void 0, e), e.currentTarget = null;
}
function pg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var a = r[i], l = a.instance, u = a.currentTarget;
        if (a = a.listener, l !== s && o.isPropagationStopped()) break e;
        jf(o, a, u), s = l;
      }
      else for (i = 0; i < r.length; i++) {
        if (a = r[i], l = a.instance, u = a.currentTarget, a = a.listener, l !== s && o.isPropagationStopped()) break e;
        jf(o, a, u), s = l;
      }
    }
  }
  if (Ri) throw e = nu, Ri = !1, nu = null, e;
}
function oe(e, t) {
  var n = t[fu];
  n === void 0 && (n = t[fu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (hg(t, e, 2, !1), n.add(r));
}
function rl(e, t, n) {
  var r = 0;
  t && (r |= 4), hg(n, e, r, t);
}
var Bs = "_reactListening" + Math.random().toString(36).slice(2);
function ts(e) {
  if (!e[Bs]) {
    e[Bs] = !0, Sm.forEach(function(n) {
      n !== "selectionchange" && (W1.has(n) || rl(n, !1, e), rl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Bs] || (t[Bs] = !0, rl("selectionchange", !1, t));
  }
}
function hg(e, t, n, r) {
  switch (Zm(t)) {
    case 1:
      var o = o1;
      break;
    case 4:
      o = s1;
      break;
    default:
      o = kc;
  }
  n = o.bind(null, t, n, e), o = void 0, !tu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function ol(e, t, n, r, o) {
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
  Om(function() {
    var u = s, c = vc(n), d = [];
    e: {
      var f = fg.get(e);
      if (f !== void 0) {
        var m = bc, w = e;
        switch (e) {
          case "keypress":
            if (mi(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = w1;
            break;
          case "focusin":
            w = "focus", m = Za;
            break;
          case "focusout":
            w = "blur", m = Za;
            break;
          case "beforeblur":
          case "afterblur":
            m = Za;
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
            m = Sf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = l1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = C1;
            break;
          case lg:
          case ug:
          case cg:
            m = d1;
            break;
          case dg:
            m = P1;
            break;
          case "scroll":
            m = i1;
            break;
          case "wheel":
            m = E1;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = p1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Cf;
        }
        var y = (t & 4) !== 0, S = !y && e === "scroll", g = y ? f !== null ? f + "Capture" : null : f;
        y = [];
        for (var p = u, v; p !== null; ) {
          v = p;
          var k = v.stateNode;
          if (v.tag === 5 && k !== null && (v = k, g !== null && (k = Xo(p, g), k != null && y.push(ns(p, k, v)))), S) break;
          p = p.return;
        }
        0 < y.length && (f = new m(f, w, null, n, c), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", f && n !== Jl && (w = n.relatedTarget || n.fromElement) && (Gn(w) || w[Zt])) break e;
        if ((m || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, m ? (w = n.relatedTarget || n.toElement, m = u, w = w ? Gn(w) : null, w !== null && (S = cr(w), w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (m = null, w = u), m !== w)) {
          if (y = Sf, k = "onMouseLeave", g = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (y = Cf, k = "onPointerLeave", g = "onPointerEnter", p = "pointer"), S = m == null ? f : Sr(m), v = w == null ? f : Sr(w), f = new y(k, p + "leave", m, n, c), f.target = S, f.relatedTarget = v, k = null, Gn(c) === u && (y = new y(g, p + "enter", w, n, c), y.target = v, y.relatedTarget = S, k = y), S = k, m && w) t: {
            for (y = m, g = w, p = 0, v = y; v; v = fr(v)) p++;
            for (v = 0, k = g; k; k = fr(k)) v++;
            for (; 0 < p - v; ) y = fr(y), p--;
            for (; 0 < v - p; ) g = fr(g), v--;
            for (; p--; ) {
              if (y === g || g !== null && y === g.alternate) break t;
              y = fr(y), g = fr(g);
            }
            y = null;
          }
          else y = null;
          m !== null && Lf(d, f, m, y, !1), w !== null && S !== null && Lf(d, S, w, y, !0);
        }
      }
      e: {
        if (f = u ? Sr(u) : window, m = f.nodeName && f.nodeName.toLowerCase(), m === "select" || m === "input" && f.type === "file") var C = L1;
        else if (Tf(f)) if (rg) C = F1;
        else {
          C = I1;
          var b = _1;
        }
        else (m = f.nodeName) && m.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = O1);
        if (C && (C = C(e, u))) {
          ng(d, C, n, c);
          break e;
        }
        b && b(e, f, u), e === "focusout" && (b = f._wrapperState) && b.controlled && f.type === "number" && Yl(f, "number", f.value);
      }
      switch (b = u ? Sr(u) : window, e) {
        case "focusin":
          (Tf(b) || b.contentEditable === "true") && (xr = b, iu = u, Fo = null);
          break;
        case "focusout":
          Fo = iu = xr = null;
          break;
        case "mousedown":
          au = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          au = !1, Rf(d, n, c);
          break;
        case "selectionchange":
          if (B1) break;
        case "keydown":
        case "keyup":
          Rf(d, n, c);
      }
      var P;
      if (Tc) e: {
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
      else vr ? eg(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Jm && n.locale !== "ko" && (vr || T !== "onCompositionStart" ? T === "onCompositionEnd" && vr && (P = qm()) : (gn = c, Cc = "value" in gn ? gn.value : gn.textContent, vr = !0)), b = Ii(u, T), 0 < b.length && (T = new kf(T, e, null, n, c), d.push({ event: T, listeners: b }), P ? T.data = P : (P = tg(n), P !== null && (T.data = P)))), (P = N1 ? A1(e, n) : R1(e, n)) && (u = Ii(u, "onBeforeInput"), 0 < u.length && (c = new kf("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = P));
    }
    pg(d, t);
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
function Lf(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && u !== null && (a = u, o ? (l = Xo(n, s), l != null && i.unshift(ns(n, l, a))) : o || (l = Xo(n, s), l != null && i.push(ns(n, l, a)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var H1 = /\r\n?/g, K1 = /\u0000|\uFFFD/g;
function _f(e) {
  return (typeof e == "string" ? e : "" + e).replace(H1, `
`).replace(K1, "");
}
function $s(e, t, n) {
  if (t = _f(t), _f(e) !== t && n) throw Error(A(425));
}
function Oi() {
}
var lu = null, uu = null;
function cu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var du = typeof setTimeout == "function" ? setTimeout : void 0, G1 = typeof clearTimeout == "function" ? clearTimeout : void 0, If = typeof Promise == "function" ? Promise : void 0, Y1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof If < "u" ? function(e) {
  return If.resolve(null).then(e).catch(X1);
} : du;
function X1(e) {
  setTimeout(function() {
    throw e;
  });
}
function sl(e, t) {
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
function Of(e) {
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
var no = Math.random().toString(36).slice(2), Mt = "__reactFiber$" + no, rs = "__reactProps$" + no, Zt = "__reactContainer$" + no, fu = "__reactEvents$" + no, Q1 = "__reactListeners$" + no, Z1 = "__reactHandles$" + no;
function Gn(e) {
  var t = e[Mt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Zt] || n[Mt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Of(e); e !== null; ) {
        if (n = e[Mt]) return n;
        e = Of(e);
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
function ya(e) {
  return e[rs] || null;
}
var pu = [], kr = -1;
function In(e) {
  return { current: e };
}
function se(e) {
  0 > kr || (e.current = pu[kr], pu[kr] = null, kr--);
}
function te(e, t) {
  kr++, pu[kr] = e.current, e.current = t;
}
var Nn = {}, Fe = In(Nn), Ge = In(!1), er = Nn;
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
function Fi() {
  se(Ge), se(Fe);
}
function Ff(e, t, n) {
  if (Fe.current !== Nn) throw Error(A(168));
  te(Fe, t), te(Ge, n);
}
function mg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(A(108, _w(e) || "Unknown", o));
  return fe({}, n, r);
}
function Vi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Nn, er = Fe.current, te(Fe, e), te(Ge, Ge.current), !0;
}
function Vf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n ? (e = mg(e, t, er), r.__reactInternalMemoizedMergedChildContext = e, se(Ge), se(Fe), te(Fe, e)) : se(Ge), te(Ge, n);
}
var Wt = null, va = !1, il = !1;
function gg(e) {
  Wt === null ? Wt = [e] : Wt.push(e);
}
function q1(e) {
  va = !0, gg(e);
}
function On() {
  if (!il && Wt !== null) {
    il = !0;
    var e = 0, t = Z;
    try {
      var n = Wt;
      for (Z = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Wt = null, va = !1;
    } catch (o) {
      throw Wt !== null && (Wt = Wt.slice(e + 1)), Bm(xc, On), o;
    } finally {
      Z = t, il = !1;
    }
  }
  return null;
}
var Cr = [], br = 0, zi = null, Bi = 0, ut = [], ct = 0, tr = null, Ht = 1, Kt = "";
function Un(e, t) {
  Cr[br++] = Bi, Cr[br++] = zi, zi = e, Bi = t;
}
function yg(e, t, n) {
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
function Dc(e) {
  e.return !== null && (Un(e, 1), yg(e, 1, 0));
}
function Nc(e) {
  for (; e === zi; ) zi = Cr[--br], Cr[br] = null, Bi = Cr[--br], Cr[br] = null;
  for (; e === tr; ) tr = ut[--ct], ut[ct] = null, Kt = ut[--ct], ut[ct] = null, Ht = ut[--ct], ut[ct] = null;
}
var et = null, Je = null, le = !1, wt = null;
function vg(e, t) {
  var n = dt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function zf(e, t) {
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
function hu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function mu(e) {
  if (le) {
    var t = Je;
    if (t) {
      var n = t;
      if (!zf(e, t)) {
        if (hu(e)) throw Error(A(418));
        t = Sn(n.nextSibling);
        var r = et;
        t && zf(e, t) ? vg(r, n) : (e.flags = e.flags & -4097 | 2, le = !1, et = e);
      }
    } else {
      if (hu(e)) throw Error(A(418));
      e.flags = e.flags & -4097 | 2, le = !1, et = e;
    }
  }
}
function Bf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  et = e;
}
function Us(e) {
  if (e !== et) return !1;
  if (!le) return Bf(e), le = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !cu(e.type, e.memoizedProps)), t && (t = Je)) {
    if (hu(e)) throw xg(), Error(A(418));
    for (; t; ) vg(e, t), t = Sn(t.nextSibling);
  }
  if (Bf(e), e.tag === 13) {
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
function xg() {
  for (var e = Je; e; ) e = Sn(e.nextSibling);
}
function Wr() {
  Je = et = null, le = !1;
}
function Ac(e) {
  wt === null ? wt = [e] : wt.push(e);
}
var J1 = rn.ReactCurrentBatchConfig;
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
function Ws(e, t) {
  throw e = Object.prototype.toString.call(t), Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function $f(e) {
  var t = e._init;
  return t(e._payload);
}
function wg(e) {
  function t(g, p) {
    if (e) {
      var v = g.deletions;
      v === null ? (g.deletions = [p], g.flags |= 16) : v.push(p);
    }
  }
  function n(g, p) {
    if (!e) return null;
    for (; p !== null; ) t(g, p), p = p.sibling;
    return null;
  }
  function r(g, p) {
    for (g = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? g.set(p.key, p) : g.set(p.index, p), p = p.sibling;
    return g;
  }
  function o(g, p) {
    return g = Pn(g, p), g.index = 0, g.sibling = null, g;
  }
  function s(g, p, v) {
    return g.index = v, e ? (v = g.alternate, v !== null ? (v = v.index, v < p ? (g.flags |= 2, p) : v) : (g.flags |= 2, p)) : (g.flags |= 1048576, p);
  }
  function i(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, p, v, k) {
    return p === null || p.tag !== 6 ? (p = pl(v, g.mode, k), p.return = g, p) : (p = o(p, v), p.return = g, p);
  }
  function l(g, p, v, k) {
    var C = v.type;
    return C === yr ? c(g, p, v.props.children, k, v.key) : p !== null && (p.elementType === C || typeof C == "object" && C !== null && C.$$typeof === cn && $f(C) === p.type) ? (k = o(p, v.props), k.ref = wo(g, p, v), k.return = g, k) : (k = ki(v.type, v.key, v.props, null, g.mode, k), k.ref = wo(g, p, v), k.return = g, k);
  }
  function u(g, p, v, k) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== v.containerInfo || p.stateNode.implementation !== v.implementation ? (p = hl(v, g.mode, k), p.return = g, p) : (p = o(p, v.children || []), p.return = g, p);
  }
  function c(g, p, v, k, C) {
    return p === null || p.tag !== 7 ? (p = qn(v, g.mode, k, C), p.return = g, p) : (p = o(p, v), p.return = g, p);
  }
  function d(g, p, v) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return p = pl("" + p, g.mode, v), p.return = g, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case js:
          return v = ki(p.type, p.key, p.props, null, g.mode, v), v.ref = wo(g, null, p), v.return = g, v;
        case gr:
          return p = hl(p, g.mode, v), p.return = g, p;
        case cn:
          var k = p._init;
          return d(g, k(p._payload), v);
      }
      if (Eo(p) || mo(p)) return p = qn(p, g.mode, v, null), p.return = g, p;
      Ws(g, p);
    }
    return null;
  }
  function f(g, p, v, k) {
    var C = p !== null ? p.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number") return C !== null ? null : a(g, p, "" + v, k);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case js:
          return v.key === C ? l(g, p, v, k) : null;
        case gr:
          return v.key === C ? u(g, p, v, k) : null;
        case cn:
          return C = v._init, f(
            g,
            p,
            C(v._payload),
            k
          );
      }
      if (Eo(v) || mo(v)) return C !== null ? null : c(g, p, v, k, null);
      Ws(g, v);
    }
    return null;
  }
  function m(g, p, v, k, C) {
    if (typeof k == "string" && k !== "" || typeof k == "number") return g = g.get(v) || null, a(p, g, "" + k, C);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case js:
          return g = g.get(k.key === null ? v : k.key) || null, l(p, g, k, C);
        case gr:
          return g = g.get(k.key === null ? v : k.key) || null, u(p, g, k, C);
        case cn:
          var b = k._init;
          return m(g, p, v, b(k._payload), C);
      }
      if (Eo(k) || mo(k)) return g = g.get(v) || null, c(p, g, k, C, null);
      Ws(p, k);
    }
    return null;
  }
  function w(g, p, v, k) {
    for (var C = null, b = null, P = p, T = p = 0, N = null; P !== null && T < v.length; T++) {
      P.index > T ? (N = P, P = null) : N = P.sibling;
      var D = f(g, P, v[T], k);
      if (D === null) {
        P === null && (P = N);
        break;
      }
      e && P && D.alternate === null && t(g, P), p = s(D, p, T), b === null ? C = D : b.sibling = D, b = D, P = N;
    }
    if (T === v.length) return n(g, P), le && Un(g, T), C;
    if (P === null) {
      for (; T < v.length; T++) P = d(g, v[T], k), P !== null && (p = s(P, p, T), b === null ? C = P : b.sibling = P, b = P);
      return le && Un(g, T), C;
    }
    for (P = r(g, P); T < v.length; T++) N = m(P, g, T, v[T], k), N !== null && (e && N.alternate !== null && P.delete(N.key === null ? T : N.key), p = s(N, p, T), b === null ? C = N : b.sibling = N, b = N);
    return e && P.forEach(function(j) {
      return t(g, j);
    }), le && Un(g, T), C;
  }
  function y(g, p, v, k) {
    var C = mo(v);
    if (typeof C != "function") throw Error(A(150));
    if (v = C.call(v), v == null) throw Error(A(151));
    for (var b = C = null, P = p, T = p = 0, N = null, D = v.next(); P !== null && !D.done; T++, D = v.next()) {
      P.index > T ? (N = P, P = null) : N = P.sibling;
      var j = f(g, P, D.value, k);
      if (j === null) {
        P === null && (P = N);
        break;
      }
      e && P && j.alternate === null && t(g, P), p = s(j, p, T), b === null ? C = j : b.sibling = j, b = j, P = N;
    }
    if (D.done) return n(
      g,
      P
    ), le && Un(g, T), C;
    if (P === null) {
      for (; !D.done; T++, D = v.next()) D = d(g, D.value, k), D !== null && (p = s(D, p, T), b === null ? C = D : b.sibling = D, b = D);
      return le && Un(g, T), C;
    }
    for (P = r(g, P); !D.done; T++, D = v.next()) D = m(P, g, T, D.value, k), D !== null && (e && D.alternate !== null && P.delete(D.key === null ? T : D.key), p = s(D, p, T), b === null ? C = D : b.sibling = D, b = D);
    return e && P.forEach(function(R) {
      return t(g, R);
    }), le && Un(g, T), C;
  }
  function S(g, p, v, k) {
    if (typeof v == "object" && v !== null && v.type === yr && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case js:
          e: {
            for (var C = v.key, b = p; b !== null; ) {
              if (b.key === C) {
                if (C = v.type, C === yr) {
                  if (b.tag === 7) {
                    n(g, b.sibling), p = o(b, v.props.children), p.return = g, g = p;
                    break e;
                  }
                } else if (b.elementType === C || typeof C == "object" && C !== null && C.$$typeof === cn && $f(C) === b.type) {
                  n(g, b.sibling), p = o(b, v.props), p.ref = wo(g, b, v), p.return = g, g = p;
                  break e;
                }
                n(g, b);
                break;
              } else t(g, b);
              b = b.sibling;
            }
            v.type === yr ? (p = qn(v.props.children, g.mode, k, v.key), p.return = g, g = p) : (k = ki(v.type, v.key, v.props, null, g.mode, k), k.ref = wo(g, p, v), k.return = g, g = k);
          }
          return i(g);
        case gr:
          e: {
            for (b = v.key; p !== null; ) {
              if (p.key === b) if (p.tag === 4 && p.stateNode.containerInfo === v.containerInfo && p.stateNode.implementation === v.implementation) {
                n(g, p.sibling), p = o(p, v.children || []), p.return = g, g = p;
                break e;
              } else {
                n(g, p);
                break;
              }
              else t(g, p);
              p = p.sibling;
            }
            p = hl(v, g.mode, k), p.return = g, g = p;
          }
          return i(g);
        case cn:
          return b = v._init, S(g, p, b(v._payload), k);
      }
      if (Eo(v)) return w(g, p, v, k);
      if (mo(v)) return y(g, p, v, k);
      Ws(g, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, p !== null && p.tag === 6 ? (n(g, p.sibling), p = o(p, v), p.return = g, g = p) : (n(g, p), p = pl(v, g.mode, k), p.return = g, g = p), i(g)) : n(g, p);
  }
  return S;
}
var Hr = wg(!0), Sg = wg(!1), $i = In(null), Ui = null, Pr = null, Rc = null;
function Mc() {
  Rc = Pr = Ui = null;
}
function jc(e) {
  var t = $i.current;
  se($i), e._currentValue = t;
}
function gu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Or(e, t) {
  Ui = e, Rc = Pr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ke = !0), e.firstContext = null);
}
function pt(e) {
  var t = e._currentValue;
  if (Rc !== e) if (e = { context: e, memoizedValue: t, next: null }, Pr === null) {
    if (Ui === null) throw Error(A(308));
    Pr = e, Ui.dependencies = { lanes: 0, firstContext: e };
  } else Pr = Pr.next = e;
  return t;
}
var Yn = null;
function Lc(e) {
  Yn === null ? Yn = [e] : Yn.push(e);
}
function kg(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Lc(t)) : (n.next = o.next, o.next = n), t.interleaved = n, qt(e, r);
}
function qt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var dn = !1;
function _c(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Cg(e, t) {
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
  return o = r.interleaved, o === null ? (t.next = t, Lc(r)) : (t.next = o.next, o.next = t), r.interleaved = t, qt(e, n);
}
function gi(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, wc(e, n);
  }
}
function Uf(e, t) {
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
function Wi(e, t, n, r) {
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
      var f = a.lane, m = a.eventTime;
      if ((r & f) === f) {
        c !== null && (c = c.next = {
          eventTime: m,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var w = e, y = a;
          switch (f = t, m = n, y.tag) {
            case 1:
              if (w = y.payload, typeof w == "function") {
                d = w.call(m, d, f);
                break e;
              }
              d = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = y.payload, f = typeof w == "function" ? w.call(m, d, f) : w, f == null) break e;
              d = fe({}, d, f);
              break e;
            case 2:
              dn = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [a] : f.push(a));
      } else m = { eventTime: m, lane: f, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = m, l = d) : c = c.next = m, i |= f;
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
function Wf(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(A(191, o));
      o.call(r);
    }
  }
}
var Cs = {}, It = In(Cs), os = In(Cs), ss = In(Cs);
function Xn(e) {
  if (e === Cs) throw Error(A(174));
  return e;
}
function Ic(e, t) {
  switch (te(ss, t), te(os, e), te(It, Cs), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ql(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ql(t, e);
  }
  se(It), te(It, t);
}
function Kr() {
  se(It), se(os), se(ss);
}
function bg(e) {
  Xn(ss.current);
  var t = Xn(It.current), n = Ql(t, e.type);
  t !== n && (te(os, e), te(It, n));
}
function Oc(e) {
  os.current === e && (se(It), se(os));
}
var ue = In(0);
function Hi(e) {
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
var al = [];
function Fc() {
  for (var e = 0; e < al.length; e++) al[e]._workInProgressVersionPrimary = null;
  al.length = 0;
}
var yi = rn.ReactCurrentDispatcher, ll = rn.ReactCurrentBatchConfig, nr = 0, de = null, Se = null, Ce = null, Ki = !1, Vo = !1, is = 0, eS = 0;
function je() {
  throw Error(A(321));
}
function Vc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ct(e[n], t[n])) return !1;
  return !0;
}
function zc(e, t, n, r, o, s) {
  if (nr = s, de = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, yi.current = e === null || e.memoizedState === null ? oS : sS, e = n(r, o), Vo) {
    s = 0;
    do {
      if (Vo = !1, is = 0, 25 <= s) throw Error(A(301));
      s += 1, Ce = Se = null, t.updateQueue = null, yi.current = iS, e = n(r, o);
    } while (Vo);
  }
  if (yi.current = Gi, t = Se !== null && Se.next !== null, nr = 0, Ce = Se = de = null, Ki = !1, t) throw Error(A(300));
  return e;
}
function Bc() {
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
function ul(e) {
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
    l === null ? i = r : l.next = a, Ct(r, t.memoizedState) || (Ke = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      s = o.lane, de.lanes |= s, rr |= s, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function cl(e) {
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
    Ct(s, t.memoizedState) || (Ke = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function Pg() {
}
function Tg(e, t) {
  var n = de, r = ht(), o = t(), s = !Ct(r.memoizedState, o);
  if (s && (r.memoizedState = o, Ke = !0), r = r.queue, $c(Ng.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || Ce !== null && Ce.memoizedState.tag & 1) {
    if (n.flags |= 2048, ls(9, Dg.bind(null, n, r, o, t), void 0, null), Pe === null) throw Error(A(349));
    nr & 30 || Eg(n, t, o);
  }
  return o;
}
function Eg(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = de.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, de.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Dg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Ag(t) && Rg(e);
}
function Ng(e, t, n) {
  return n(function() {
    Ag(t) && Rg(e);
  });
}
function Ag(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ct(e, n);
  } catch {
    return !0;
  }
}
function Rg(e) {
  var t = qt(e, 1);
  t !== null && kt(t, e, 1, -1);
}
function Hf(e) {
  var t = Rt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: as, lastRenderedState: e }, t.queue = e, e = e.dispatch = rS.bind(null, de, e), [t.memoizedState, e];
}
function ls(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = de.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, de.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Mg() {
  return ht().memoizedState;
}
function vi(e, t, n, r) {
  var o = Rt();
  de.flags |= e, o.memoizedState = ls(1 | t, n, void 0, r === void 0 ? null : r);
}
function xa(e, t, n, r) {
  var o = ht();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Se !== null) {
    var i = Se.memoizedState;
    if (s = i.destroy, r !== null && Vc(r, i.deps)) {
      o.memoizedState = ls(t, n, s, r);
      return;
    }
  }
  de.flags |= e, o.memoizedState = ls(1 | t, n, s, r);
}
function Kf(e, t) {
  return vi(8390656, 8, e, t);
}
function $c(e, t) {
  return xa(2048, 8, e, t);
}
function jg(e, t) {
  return xa(4, 2, e, t);
}
function Lg(e, t) {
  return xa(4, 4, e, t);
}
function _g(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ig(e, t, n) {
  return n = n != null ? n.concat([e]) : null, xa(4, 4, _g.bind(null, t, e), n);
}
function Uc() {
}
function Og(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Vc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Fg(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Vc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Vg(e, t, n) {
  return nr & 21 ? (Ct(n, t) || (n = Wm(), de.lanes |= n, rr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ke = !0), e.memoizedState = n);
}
function tS(e, t) {
  var n = Z;
  Z = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ll.transition;
  ll.transition = {};
  try {
    e(!1), t();
  } finally {
    Z = n, ll.transition = r;
  }
}
function zg() {
  return ht().memoizedState;
}
function nS(e, t, n) {
  var r = bn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Bg(e)) $g(t, n);
  else if (n = kg(e, t, n, r), n !== null) {
    var o = $e();
    kt(n, e, r, o), Ug(n, t, r);
  }
}
function rS(e, t, n) {
  var r = bn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Bg(e)) $g(t, o);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var i = t.lastRenderedState, a = s(i, n);
      if (o.hasEagerState = !0, o.eagerState = a, Ct(a, i)) {
        var l = t.interleaved;
        l === null ? (o.next = o, Lc(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = kg(e, t, o, r), n !== null && (o = $e(), kt(n, e, r, o), Ug(n, t, r));
  }
}
function Bg(e) {
  var t = e.alternate;
  return e === de || t !== null && t === de;
}
function $g(e, t) {
  Vo = Ki = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ug(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, wc(e, n);
  }
}
var Gi = { readContext: pt, useCallback: je, useContext: je, useEffect: je, useImperativeHandle: je, useInsertionEffect: je, useLayoutEffect: je, useMemo: je, useReducer: je, useRef: je, useState: je, useDebugValue: je, useDeferredValue: je, useTransition: je, useMutableSource: je, useSyncExternalStore: je, useId: je, unstable_isNewReconciler: !1 }, oS = { readContext: pt, useCallback: function(e, t) {
  return Rt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: pt, useEffect: Kf, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, vi(
    4194308,
    4,
    _g.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return vi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return vi(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Rt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Rt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = nS.bind(null, de, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Rt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Hf, useDebugValue: Uc, useDeferredValue: function(e) {
  return Rt().memoizedState = e;
}, useTransition: function() {
  var e = Hf(!1), t = e[0];
  return e = tS.bind(null, e[1]), Rt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = de, o = Rt();
  if (le) {
    if (n === void 0) throw Error(A(407));
    n = n();
  } else {
    if (n = t(), Pe === null) throw Error(A(349));
    nr & 30 || Eg(r, t, n);
  }
  o.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return o.queue = s, Kf(Ng.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, ls(9, Dg.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = Rt(), t = Pe.identifierPrefix;
  if (le) {
    var n = Kt, r = Ht;
    n = (r & ~(1 << 32 - St(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = is++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = eS++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, sS = {
  readContext: pt,
  useCallback: Og,
  useContext: pt,
  useEffect: $c,
  useImperativeHandle: Ig,
  useInsertionEffect: jg,
  useLayoutEffect: Lg,
  useMemo: Fg,
  useReducer: ul,
  useRef: Mg,
  useState: function() {
    return ul(as);
  },
  useDebugValue: Uc,
  useDeferredValue: function(e) {
    var t = ht();
    return Vg(t, Se.memoizedState, e);
  },
  useTransition: function() {
    var e = ul(as)[0], t = ht().memoizedState;
    return [e, t];
  },
  useMutableSource: Pg,
  useSyncExternalStore: Tg,
  useId: zg,
  unstable_isNewReconciler: !1
}, iS = { readContext: pt, useCallback: Og, useContext: pt, useEffect: $c, useImperativeHandle: Ig, useInsertionEffect: jg, useLayoutEffect: Lg, useMemo: Fg, useReducer: cl, useRef: Mg, useState: function() {
  return cl(as);
}, useDebugValue: Uc, useDeferredValue: function(e) {
  var t = ht();
  return Se === null ? t.memoizedState = e : Vg(t, Se.memoizedState, e);
}, useTransition: function() {
  var e = cl(as)[0], t = ht().memoizedState;
  return [e, t];
}, useMutableSource: Pg, useSyncExternalStore: Tg, useId: zg, unstable_isNewReconciler: !1 };
function vt(e, t) {
  if (e && e.defaultProps) {
    t = fe({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function yu(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : fe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var wa = { isMounted: function(e) {
  return (e = e._reactInternals) ? cr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), o = bn(e), s = Gt(r, o);
  s.payload = t, n != null && (s.callback = n), t = kn(e, s, o), t !== null && (kt(t, e, o, r), gi(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), o = bn(e), s = Gt(r, o);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = kn(e, s, o), t !== null && (kt(t, e, o, r), gi(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = $e(), r = bn(e), o = Gt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = kn(e, o, r), t !== null && (kt(t, e, r, n), gi(t, e, r));
} };
function Gf(e, t, n, r, o, s, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !es(n, r) || !es(o, s) : !0;
}
function Wg(e, t, n) {
  var r = !1, o = Nn, s = t.contextType;
  return typeof s == "object" && s !== null ? s = pt(s) : (o = Ye(t) ? er : Fe.current, r = t.contextTypes, s = (r = r != null) ? Ur(e, o) : Nn), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = wa, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function Yf(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && wa.enqueueReplaceState(t, t.state, null);
}
function vu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, _c(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? o.context = pt(s) : (s = Ye(t) ? er : Fe.current, o.context = Ur(e, s)), o.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (yu(e, t, s, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && wa.enqueueReplaceState(o, o.state, null), Wi(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Gr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Lw(r), r = r.return;
    while (r);
    var o = n;
  } catch (s) {
    o = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function dl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var aS = typeof WeakMap == "function" ? WeakMap : Map;
function Hg(e, t, n) {
  n = Gt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Xi || (Xi = !0, Nu = r), xu(e, t);
  }, n;
}
function Kg(e, t, n) {
  n = Gt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      xu(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    xu(e, t), typeof r != "function" && (Cn === null ? Cn = /* @__PURE__ */ new Set([this]) : Cn.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Xf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new aS();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = SS.bind(null, e, t, n), t.then(e, e));
}
function Qf(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Zf(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Gt(-1, 1), t.tag = 2, kn(n, t, 1))), n.lanes |= 1), e);
}
var lS = rn.ReactCurrentOwner, Ke = !1;
function Be(e, t, n, r) {
  t.child = e === null ? Sg(t, null, n, r) : Hr(t, e.child, n, r);
}
function qf(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return Or(t, o), r = zc(e, t, n, r, s, o), n = Bc(), e !== null && !Ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Jt(e, t, o)) : (le && n && Dc(t), t.flags |= 1, Be(e, t, r, o), t.child);
}
function Jf(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !Zc(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, Gg(e, t, s, r, o)) : (e = ki(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & o)) {
    var i = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : es, n(i, r) && e.ref === t.ref) return Jt(e, t, o);
  }
  return t.flags |= 1, e = Pn(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Gg(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (es(s, r) && e.ref === t.ref) if (Ke = !1, t.pendingProps = r = s, (e.lanes & o) !== 0) e.flags & 131072 && (Ke = !0);
    else return t.lanes = e.lanes, Jt(e, t, o);
  }
  return wu(e, t, n, r, o);
}
function Yg(e, t, n) {
  var r = t.pendingProps, o = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, te(Er, Ze), Ze |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, te(Er, Ze), Ze |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, te(Er, Ze), Ze |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, te(Er, Ze), Ze |= r;
  return Be(e, t, o, n), t.child;
}
function Xg(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function wu(e, t, n, r, o) {
  var s = Ye(n) ? er : Fe.current;
  return s = Ur(t, s), Or(t, o), n = zc(e, t, n, r, s, o), r = Bc(), e !== null && !Ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Jt(e, t, o)) : (le && r && Dc(t), t.flags |= 1, Be(e, t, n, o), t.child);
}
function ep(e, t, n, r, o) {
  if (Ye(n)) {
    var s = !0;
    Vi(t);
  } else s = !1;
  if (Or(t, o), t.stateNode === null) xi(e, t), Wg(t, n, r), vu(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, a = t.memoizedProps;
    i.props = a;
    var l = i.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = pt(u) : (u = Ye(n) ? er : Fe.current, u = Ur(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || l !== u) && Yf(t, i, r, u), dn = !1;
    var f = t.memoizedState;
    i.state = f, Wi(t, r, i, o), l = t.memoizedState, a !== r || f !== l || Ge.current || dn ? (typeof c == "function" && (yu(t, n, c, r), l = t.memoizedState), (a = dn || Gf(t, n, a, r, f, l, u)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), i.props = r, i.state = l, i.context = u, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Cg(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : vt(t.type, a), i.props = u, d = t.pendingProps, f = i.context, l = n.contextType, typeof l == "object" && l !== null ? l = pt(l) : (l = Ye(n) ? er : Fe.current, l = Ur(t, l));
    var m = n.getDerivedStateFromProps;
    (c = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== d || f !== l) && Yf(t, i, r, l), dn = !1, f = t.memoizedState, i.state = f, Wi(t, r, i, o);
    var w = t.memoizedState;
    a !== d || f !== w || Ge.current || dn ? (typeof m == "function" && (yu(t, n, m, r), w = t.memoizedState), (u = dn || Gf(t, n, u, r, f, w, l) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, l), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, l)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = l, r = u) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Su(e, t, n, r, s, o);
}
function Su(e, t, n, r, o, s) {
  Xg(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Vf(t, n, !1), Jt(e, t, s);
  r = t.stateNode, lS.current = t;
  var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Hr(t, e.child, null, s), t.child = Hr(t, null, a, s)) : Be(e, t, a, s), t.memoizedState = r.state, o && Vf(t, n, !0), t.child;
}
function Qg(e) {
  var t = e.stateNode;
  t.pendingContext ? Ff(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ff(e, t.context, !1), Ic(e, t.containerInfo);
}
function tp(e, t, n, r, o) {
  return Wr(), Ac(o), t.flags |= 256, Be(e, t, n, r), t.child;
}
var ku = { dehydrated: null, treeContext: null, retryLane: 0 };
function Cu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Zg(e, t, n) {
  var r = t.pendingProps, o = ue.current, s = !1, i = (t.flags & 128) !== 0, a;
  if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), te(ue, o & 1), e === null)
    return mu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, i = { mode: "hidden", children: i }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = i) : s = Ca(i, r, 0, null), e = qn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Cu(n), t.memoizedState = ku, e) : Wc(t, i));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return uS(e, t, i, r, a, o, n);
  if (s) {
    s = r.fallback, i = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Pn(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? s = Pn(a, s) : (s = qn(s, i, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, i = e.child.memoizedState, i = i === null ? Cu(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, s.memoizedState = i, s.childLanes = e.childLanes & ~n, t.memoizedState = ku, r;
  }
  return s = e.child, e = s.sibling, r = Pn(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Wc(e, t) {
  return t = Ca({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Hs(e, t, n, r) {
  return r !== null && Ac(r), Hr(t, e.child, null, n), e = Wc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function uS(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = dl(Error(A(422))), Hs(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, o = t.mode, r = Ca({ mode: "visible", children: r.children }, o, 0, null), s = qn(s, o, i, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Hr(t, e.child, null, i), t.child.memoizedState = Cu(i), t.memoizedState = ku, s);
  if (!(t.mode & 1)) return Hs(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
    return r = a, s = Error(A(419)), r = dl(s, r, void 0), Hs(e, t, i, r);
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
    return Qc(), r = dl(Error(A(421))), Hs(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = kS.bind(null, e), o._reactRetry = t, null) : (e = s.treeContext, Je = Sn(o.nextSibling), et = t, le = !0, wt = null, e !== null && (ut[ct++] = Ht, ut[ct++] = Kt, ut[ct++] = tr, Ht = e.id, Kt = e.overflow, tr = t), t = Wc(t, r.children), t.flags |= 4096, t);
}
function np(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), gu(e.return, t, n);
}
function fl(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = o);
}
function qg(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, s = r.tail;
  if (Be(e, t, r.children, n), r = ue.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && np(e, n, t);
      else if (e.tag === 19) np(e, n, t);
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
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Hi(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), fl(t, !1, o, n, s);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Hi(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      fl(t, !0, n, null, s);
      break;
    case "together":
      fl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function xi(e, t) {
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
function cS(e, t, n) {
  switch (t.tag) {
    case 3:
      Qg(t), Wr();
      break;
    case 5:
      bg(t);
      break;
    case 1:
      Ye(t.type) && Vi(t);
      break;
    case 4:
      Ic(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      te($i, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (te(ue, ue.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Zg(e, t, n) : (te(ue, ue.current & 1), e = Jt(e, t, n), e !== null ? e.sibling : null);
      te(ue, ue.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return qg(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), te(ue, ue.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Yg(e, t, n);
  }
  return Jt(e, t, n);
}
var Jg, bu, ey, ty;
Jg = function(e, t) {
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
bu = function() {
};
ey = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Xn(It.current);
    var s = null;
    switch (n) {
      case "input":
        o = Kl(e, o), r = Kl(e, r), s = [];
        break;
      case "select":
        o = fe({}, o, { value: void 0 }), r = fe({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        o = Xl(e, o), r = Xl(e, r), s = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Oi);
    }
    Zl(n, r);
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
ty = function(e, t, n, r) {
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
function dS(e, t, n) {
  var r = t.pendingProps;
  switch (Nc(t), t.tag) {
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
      return Ye(t.type) && Fi(), Le(t), null;
    case 3:
      return r = t.stateNode, Kr(), se(Ge), se(Fe), Fc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Us(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, wt !== null && (Mu(wt), wt = null))), bu(e, t), Le(t), null;
    case 5:
      Oc(t);
      var o = Xn(ss.current);
      if (n = t.type, e !== null && t.stateNode != null) ey(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return Le(t), null;
        }
        if (e = Xn(It.current), Us(t)) {
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
              df(r, s), oe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, oe("invalid", r);
              break;
            case "textarea":
              pf(r, s), oe("invalid", r);
          }
          Zl(n, s), o = null;
          for (var i in s) if (s.hasOwnProperty(i)) {
            var a = s[i];
            i === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && $s(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && $s(
              r.textContent,
              a,
              e
            ), o = ["children", "" + a]) : Go.hasOwnProperty(i) && a != null && i === "onScroll" && oe("scroll", r);
          }
          switch (n) {
            case "input":
              Ls(r), ff(r, s, !0);
              break;
            case "textarea":
              Ls(r), hf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Oi);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Nm(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Mt] = t, e[rs] = r, Jg(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = ql(n, r), n) {
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
                df(e, r), o = Kl(e, r), oe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = fe({}, r, { value: void 0 }), oe("invalid", e);
                break;
              case "textarea":
                pf(e, r), o = Xl(e, r), oe("invalid", e);
                break;
              default:
                o = r;
            }
            Zl(n, o), a = o;
            for (s in a) if (a.hasOwnProperty(s)) {
              var l = a[s];
              s === "style" ? Mm(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Am(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Yo(e, l) : typeof l == "number" && Yo(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Go.hasOwnProperty(s) ? l != null && s === "onScroll" && oe("scroll", e) : l != null && hc(e, s, l, i));
            }
            switch (n) {
              case "input":
                Ls(e), ff(e, r, !1);
                break;
              case "textarea":
                Ls(e), hf(e);
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
                typeof o.onClick == "function" && (e.onclick = Oi);
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
      if (e && t.stateNode != null) ty(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (n = Xn(ss.current), Xn(It.current), Us(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Mt] = t, (s = r.nodeValue !== n) && (e = et, e !== null)) switch (e.tag) {
            case 3:
              $s(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && $s(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Mt] = t, t.stateNode = r;
      }
      return Le(t), null;
    case 13:
      if (se(ue), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (le && Je !== null && t.mode & 1 && !(t.flags & 128)) xg(), Wr(), t.flags |= 98560, s = !1;
        else if (s = Us(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(A(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(A(317));
            s[Mt] = t;
          } else Wr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Le(t), s = !1;
        } else wt !== null && (Mu(wt), wt = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ue.current & 1 ? ke === 0 && (ke = 3) : Qc())), t.updateQueue !== null && (t.flags |= 4), Le(t), null);
    case 4:
      return Kr(), bu(e, t), e === null && ts(t.stateNode.containerInfo), Le(t), null;
    case 10:
      return jc(t.type._context), Le(t), null;
    case 17:
      return Ye(t.type) && Fi(), Le(t), null;
    case 19:
      if (se(ue), s = t.memoizedState, s === null) return Le(t), null;
      if (r = (t.flags & 128) !== 0, i = s.rendering, i === null) if (r) So(s, !1);
      else {
        if (ke !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = Hi(e), i !== null) {
            for (t.flags |= 128, So(s, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, i = s.alternate, i === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = i.childLanes, s.lanes = i.lanes, s.child = i.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = i.memoizedProps, s.memoizedState = i.memoizedState, s.updateQueue = i.updateQueue, s.type = i.type, e = i.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return te(ue, ue.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && xe() > Yr && (t.flags |= 128, r = !0, So(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Hi(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), So(s, !0), s.tail === null && s.tailMode === "hidden" && !i.alternate && !le) return Le(t), null;
        } else 2 * xe() - s.renderingStartTime > Yr && n !== 1073741824 && (t.flags |= 128, r = !0, So(s, !1), t.lanes = 4194304);
        s.isBackwards ? (i.sibling = t.child, t.child = i) : (n = s.last, n !== null ? n.sibling = i : t.child = i, s.last = i);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = xe(), t.sibling = null, n = ue.current, te(ue, r ? n & 1 | 2 : n & 1), t) : (Le(t), null);
    case 22:
    case 23:
      return Xc(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ze & 1073741824 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Le(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function fS(e, t) {
  switch (Nc(t), t.tag) {
    case 1:
      return Ye(t.type) && Fi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Kr(), se(Ge), se(Fe), Fc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Oc(t), null;
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
      return jc(t.type._context), null;
    case 22:
    case 23:
      return Xc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ks = !1, Ie = !1, pS = typeof WeakSet == "function" ? WeakSet : Set, L = null;
function Tr(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    me(e, t, r);
  }
  else n.current = null;
}
function Pu(e, t, n) {
  try {
    n();
  } catch (r) {
    me(e, t, r);
  }
}
var rp = !1;
function hS(e, t) {
  if (lu = Li, e = ig(), Ec(e)) {
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
          for (var m; d !== n || o !== 0 && d.nodeType !== 3 || (a = i + o), d !== s || r !== 0 && d.nodeType !== 3 || (l = i + r), d.nodeType === 3 && (i += d.nodeValue.length), (m = d.firstChild) !== null; )
            f = d, d = m;
          for (; ; ) {
            if (d === e) break t;
            if (f === n && ++u === o && (a = i), f === s && ++c === r && (l = i), (m = d.nextSibling) !== null) break;
            d = f, f = d.parentNode;
          }
          d = m;
        }
        n = a === -1 || l === -1 ? null : { start: a, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (uu = { focusedElem: e, selectionRange: n }, Li = !1, L = t; L !== null; ) if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
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
            var y = w.memoizedProps, S = w.memoizedState, g = t.stateNode, p = g.getSnapshotBeforeUpdate(t.elementType === t.type ? y : vt(t.type, y), S);
            g.__reactInternalSnapshotBeforeUpdate = p;
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
  return w = rp, rp = !1, w;
}
function zo(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        o.destroy = void 0, s !== void 0 && Pu(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Sa(e, t) {
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
function Tu(e) {
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
function ny(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ny(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Mt], delete t[rs], delete t[fu], delete t[Q1], delete t[Z1])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ry(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function op(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || ry(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Eu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Oi));
  else if (r !== 4 && (e = e.child, e !== null)) for (Eu(e, t, n), e = e.sibling; e !== null; ) Eu(e, t, n), e = e.sibling;
}
function Du(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Du(e, t, n), e = e.sibling; e !== null; ) Du(e, t, n), e = e.sibling;
}
var Te = null, xt = !1;
function on(e, t, n) {
  for (n = n.child; n !== null; ) oy(e, t, n), n = n.sibling;
}
function oy(e, t, n) {
  if (_t && typeof _t.onCommitFiberUnmount == "function") try {
    _t.onCommitFiberUnmount(pa, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ie || Tr(n, t);
    case 6:
      var r = Te, o = xt;
      Te = null, on(e, t, n), Te = r, xt = o, Te !== null && (xt ? (e = Te, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Te.removeChild(n.stateNode));
      break;
    case 18:
      Te !== null && (xt ? (e = Te, n = n.stateNode, e.nodeType === 8 ? sl(e.parentNode, n) : e.nodeType === 1 && sl(e, n), qo(e)) : sl(Te, n.stateNode));
      break;
    case 4:
      r = Te, o = xt, Te = n.stateNode.containerInfo, xt = !0, on(e, t, n), Te = r, xt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ie && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var s = o, i = s.destroy;
          s = s.tag, i !== void 0 && (s & 2 || s & 4) && Pu(n, t, i), o = o.next;
        } while (o !== r);
      }
      on(e, t, n);
      break;
    case 1:
      if (!Ie && (Tr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
      n.mode & 1 ? (Ie = (r = Ie) || n.memoizedState !== null, on(e, t, n), Ie = r) : on(e, t, n);
      break;
    default:
      on(e, t, n);
  }
}
function sp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new pS()), t.forEach(function(r) {
      var o = CS.bind(null, e, r);
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
            Te = a.stateNode, xt = !1;
            break e;
          case 3:
            Te = a.stateNode.containerInfo, xt = !0;
            break e;
          case 4:
            Te = a.stateNode.containerInfo, xt = !0;
            break e;
        }
        a = a.return;
      }
      if (Te === null) throw Error(A(160));
      oy(s, i, o), Te = null, xt = !1;
      var l = o.alternate;
      l !== null && (l.return = null), o.return = null;
    } catch (u) {
      me(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) sy(t, e), t = t.sibling;
}
function sy(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (mt(t, e), At(e), r & 4) {
        try {
          zo(3, e, e.return), Sa(3, e);
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
      mt(t, e), At(e), r & 512 && n !== null && Tr(n, n.return);
      break;
    case 5:
      if (mt(t, e), At(e), r & 512 && n !== null && Tr(n, n.return), e.flags & 32) {
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
          a === "input" && s.type === "radio" && s.name != null && Em(o, s), ql(a, i);
          var u = ql(a, s);
          for (i = 0; i < l.length; i += 2) {
            var c = l[i], d = l[i + 1];
            c === "style" ? Mm(o, d) : c === "dangerouslySetInnerHTML" ? Am(o, d) : c === "children" ? Yo(o, d) : hc(o, c, d, u);
          }
          switch (a) {
            case "input":
              Gl(o, s);
              break;
            case "textarea":
              Dm(o, s);
              break;
            case "select":
              var f = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!s.multiple;
              var m = s.value;
              m != null ? jr(o, !!s.multiple, m, !1) : f !== !!s.multiple && (s.defaultValue != null ? jr(
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
      mt(t, e), At(e), o = e.child, o.flags & 8192 && (s = o.memoizedState !== null, o.stateNode.isHidden = s, !s || o.alternate !== null && o.alternate.memoizedState !== null || (Gc = xe())), r & 4 && sp(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ie = (u = Ie) || c, mt(t, e), Ie = u) : mt(t, e), At(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (L = e, c = e.child; c !== null; ) {
          for (d = L = c; L !== null; ) {
            switch (f = L, m = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                zo(4, f, f.return);
                break;
              case 1:
                Tr(f, f.return);
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
                Tr(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  ap(d);
                  continue;
                }
            }
            m !== null ? (m.return = f, L = m) : ap(d);
          }
          c = c.sibling;
        }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                o = d.stateNode, u ? (s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, i = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Rm("display", i));
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
      mt(t, e), At(e), r & 4 && sp(e);
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
          if (ry(n)) {
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
          var s = op(e);
          Du(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, a = op(e);
          Eu(e, a, i);
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
function mS(e, t, n) {
  L = e, iy(e);
}
function iy(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var o = L, s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Ks;
      if (!i) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || Ie;
        a = Ks;
        var u = Ie;
        if (Ks = i, (Ie = l) && !u) for (L = o; L !== null; ) i = L, l = i.child, i.tag === 22 && i.memoizedState !== null ? lp(o) : l !== null ? (l.return = i, L = l) : lp(o);
        for (; s !== null; ) L = s, iy(s), s = s.sibling;
        L = o, Ks = a, Ie = u;
      }
      ip(e);
    } else o.subtreeFlags & 8772 && s !== null ? (s.return = o, L = s) : ip(e);
  }
}
function ip(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ie || Sa(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ie) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : vt(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && Wf(t, s, r);
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
              Wf(t, i, n);
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
        Ie || t.flags & 512 && Tu(t);
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
function ap(e) {
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
function lp(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Sa(4, t);
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
            Tu(t);
          } catch (l) {
            me(t, s, l);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Tu(t);
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
var gS = Math.ceil, Yi = rn.ReactCurrentDispatcher, Hc = rn.ReactCurrentOwner, ft = rn.ReactCurrentBatchConfig, X = 0, Pe = null, we = null, De = 0, Ze = 0, Er = In(0), ke = 0, us = null, rr = 0, ka = 0, Kc = 0, Bo = null, He = null, Gc = 0, Yr = 1 / 0, Ut = null, Xi = !1, Nu = null, Cn = null, Gs = !1, yn = null, Qi = 0, $o = 0, Au = null, wi = -1, Si = 0;
function $e() {
  return X & 6 ? xe() : wi !== -1 ? wi : wi = xe();
}
function bn(e) {
  return e.mode & 1 ? X & 2 && De !== 0 ? De & -De : J1.transition !== null ? (Si === 0 && (Si = Wm()), Si) : (e = Z, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Zm(e.type)), e) : 1;
}
function kt(e, t, n, r) {
  if (50 < $o) throw $o = 0, Au = null, Error(A(185));
  ws(e, n, r), (!(X & 2) || e !== Pe) && (e === Pe && (!(X & 2) && (ka |= n), ke === 4 && hn(e, De)), Xe(e, r), n === 1 && X === 0 && !(t.mode & 1) && (Yr = xe() + 500, va && On()));
}
function Xe(e, t) {
  var n = e.callbackNode;
  Jw(e, t);
  var r = ji(e, e === Pe ? De : 0);
  if (r === 0) n !== null && yf(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && yf(n), t === 1) e.tag === 0 ? q1(up.bind(null, e)) : gg(up.bind(null, e)), Y1(function() {
      !(X & 6) && On();
    }), n = null;
    else {
      switch (Hm(r)) {
        case 1:
          n = xc;
          break;
        case 4:
          n = $m;
          break;
        case 16:
          n = Mi;
          break;
        case 536870912:
          n = Um;
          break;
        default:
          n = Mi;
      }
      n = hy(n, ay.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ay(e, t) {
  if (wi = -1, Si = 0, X & 6) throw Error(A(327));
  var n = e.callbackNode;
  if (Fr() && e.callbackNode !== n) return null;
  var r = ji(e, e === Pe ? De : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Zi(e, r);
  else {
    t = r;
    var o = X;
    X |= 2;
    var s = uy();
    (Pe !== e || De !== t) && (Ut = null, Yr = xe() + 500, Zn(e, t));
    do
      try {
        xS();
        break;
      } catch (a) {
        ly(e, a);
      }
    while (!0);
    Mc(), Yi.current = s, X = o, we !== null ? t = 0 : (Pe = null, De = 0, t = ke);
  }
  if (t !== 0) {
    if (t === 2 && (o = ru(e), o !== 0 && (r = o, t = Ru(e, o))), t === 1) throw n = us, Zn(e, 0), hn(e, r), Xe(e, xe()), n;
    if (t === 6) hn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !yS(o) && (t = Zi(e, r), t === 2 && (s = ru(e), s !== 0 && (r = s, t = Ru(e, s))), t === 1)) throw n = us, Zn(e, 0), hn(e, r), Xe(e, xe()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          Wn(e, He, Ut);
          break;
        case 3:
          if (hn(e, r), (r & 130023424) === r && (t = Gc + 500 - xe(), 10 < t)) {
            if (ji(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              $e(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = du(Wn.bind(null, e, He, Ut), t);
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
          if (r = o, r = xe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * gS(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = du(Wn.bind(null, e, He, Ut), r);
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
  return Xe(e, xe()), e.callbackNode === n ? ay.bind(null, e) : null;
}
function Ru(e, t) {
  var n = Bo;
  return e.current.memoizedState.isDehydrated && (Zn(e, t).flags |= 256), e = Zi(e, t), e !== 2 && (t = He, He = n, t !== null && Mu(t)), e;
}
function Mu(e) {
  He === null ? He = e : He.push.apply(He, e);
}
function yS(e) {
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
  for (t &= ~Kc, t &= ~ka, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - St(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function up(e) {
  if (X & 6) throw Error(A(327));
  Fr();
  var t = ji(e, 0);
  if (!(t & 1)) return Xe(e, xe()), null;
  var n = Zi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ru(e);
    r !== 0 && (t = r, n = Ru(e, r));
  }
  if (n === 1) throw n = us, Zn(e, 0), hn(e, t), Xe(e, xe()), n;
  if (n === 6) throw Error(A(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Wn(e, He, Ut), Xe(e, xe()), null;
}
function Yc(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    X = n, X === 0 && (Yr = xe() + 500, va && On());
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
    Z = r, ft.transition = n, X = t, !(X & 6) && On();
  }
}
function Xc() {
  Ze = Er.current, se(Er);
}
function Zn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, G1(n)), we !== null) for (n = we.return; n !== null; ) {
    var r = n;
    switch (Nc(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Fi();
        break;
      case 3:
        Kr(), se(Ge), se(Fe), Fc();
        break;
      case 5:
        Oc(r);
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
        jc(r.type._context);
        break;
      case 22:
      case 23:
        Xc();
    }
    n = n.return;
  }
  if (Pe = e, we = e = Pn(e.current, null), De = Ze = t, ke = 0, us = null, Kc = ka = rr = 0, He = Bo = null, Yn !== null) {
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
function ly(e, t) {
  do {
    var n = we;
    try {
      if (Mc(), yi.current = Gi, Ki) {
        for (var r = de.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Ki = !1;
      }
      if (nr = 0, Ce = Se = de = null, Vo = !1, is = 0, Hc.current = null, n === null || n.return === null) {
        ke = 1, us = t, we = null;
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
          var m = Qf(i);
          if (m !== null) {
            m.flags &= -257, Zf(m, i, a, s, t), m.mode & 1 && Xf(s, u, t), t = m, l = u;
            var w = t.updateQueue;
            if (w === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(l), t.updateQueue = y;
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Xf(s, u, t), Qc();
              break e;
            }
            l = Error(A(426));
          }
        } else if (le && a.mode & 1) {
          var S = Qf(i);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), Zf(S, i, a, s, t), Ac(Gr(l, a));
            break e;
          }
        }
        s = l = Gr(l, a), ke !== 4 && (ke = 2), Bo === null ? Bo = [s] : Bo.push(s), s = i;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var g = Hg(s, l, t);
              Uf(s, g);
              break e;
            case 1:
              a = l;
              var p = s.type, v = s.stateNode;
              if (!(s.flags & 128) && (typeof p.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Cn === null || !Cn.has(v)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var k = Kg(s, a, t);
                Uf(s, k);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      dy(n);
    } catch (C) {
      t = C, we === n && n !== null && (we = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function uy() {
  var e = Yi.current;
  return Yi.current = Gi, e === null ? Gi : e;
}
function Qc() {
  (ke === 0 || ke === 3 || ke === 2) && (ke = 4), Pe === null || !(rr & 268435455) && !(ka & 268435455) || hn(Pe, De);
}
function Zi(e, t) {
  var n = X;
  X |= 2;
  var r = uy();
  (Pe !== e || De !== t) && (Ut = null, Zn(e, t));
  do
    try {
      vS();
      break;
    } catch (o) {
      ly(e, o);
    }
  while (!0);
  if (Mc(), X = n, Yi.current = r, we !== null) throw Error(A(261));
  return Pe = null, De = 0, ke;
}
function vS() {
  for (; we !== null; ) cy(we);
}
function xS() {
  for (; we !== null && !Ww(); ) cy(we);
}
function cy(e) {
  var t = py(e.alternate, e, Ze);
  e.memoizedProps = e.pendingProps, t === null ? dy(e) : we = t, Hc.current = null;
}
function dy(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = fS(n, t), n !== null) {
        n.flags &= 32767, we = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ke = 6, we = null;
        return;
      }
    } else if (n = dS(n, t, Ze), n !== null) {
      we = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      we = t;
      return;
    }
    we = t = e;
  } while (t !== null);
  ke === 0 && (ke = 5);
}
function Wn(e, t, n) {
  var r = Z, o = ft.transition;
  try {
    ft.transition = null, Z = 1, wS(e, t, n, r);
  } finally {
    ft.transition = o, Z = r;
  }
  return null;
}
function wS(e, t, n, r) {
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
  if (e1(e, s), e === Pe && (we = Pe = null, De = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Gs || (Gs = !0, hy(Mi, function() {
    return Fr(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = ft.transition, ft.transition = null;
    var i = Z;
    Z = 1;
    var a = X;
    X |= 4, Hc.current = null, hS(e, n), sy(n, e), z1(uu), Li = !!lu, uu = lu = null, e.current = n, mS(n), Hw(), X = a, Z = i, ft.transition = s;
  } else e.current = n;
  if (Gs && (Gs = !1, yn = e, Qi = o), s = e.pendingLanes, s === 0 && (Cn = null), Yw(n.stateNode), Xe(e, xe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Xi) throw Xi = !1, e = Nu, Nu = null, e;
  return Qi & 1 && e.tag !== 0 && Fr(), s = e.pendingLanes, s & 1 ? e === Au ? $o++ : ($o = 0, Au = e) : $o = 0, On(), null;
}
function Fr() {
  if (yn !== null) {
    var e = Hm(Qi), t = ft.transition, n = Z;
    try {
      if (ft.transition = null, Z = 16 > e ? 16 : e, yn === null) var r = !1;
      else {
        if (e = yn, yn = null, Qi = 0, X & 6) throw Error(A(331));
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
                    var f = c.sibling, m = c.return;
                    if (ny(c), c === u) {
                      L = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = m, L = f;
                      break;
                    }
                    L = m;
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
        var p = e.current;
        for (L = p; L !== null; ) {
          i = L;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) v.return = i, L = v;
          else e: for (i = p; L !== null; ) {
            if (a = L, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  Sa(9, a);
              }
            } catch (C) {
              me(a, a.return, C);
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
        if (X = o, On(), _t && typeof _t.onPostCommitFiberRoot == "function") try {
          _t.onPostCommitFiberRoot(pa, e);
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
function cp(e, t, n) {
  t = Gr(n, t), t = Hg(e, t, 1), e = kn(e, t, 1), t = $e(), e !== null && (ws(e, 1, t), Xe(e, t));
}
function me(e, t, n) {
  if (e.tag === 3) cp(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      cp(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Cn === null || !Cn.has(r))) {
        e = Gr(n, e), e = Kg(t, e, 1), t = kn(t, e, 1), e = $e(), t !== null && (ws(t, 1, e), Xe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function SS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = $e(), e.pingedLanes |= e.suspendedLanes & n, Pe === e && (De & n) === n && (ke === 4 || ke === 3 && (De & 130023424) === De && 500 > xe() - Gc ? Zn(e, 0) : Kc |= n), Xe(e, t);
}
function fy(e, t) {
  t === 0 && (e.mode & 1 ? (t = Os, Os <<= 1, !(Os & 130023424) && (Os = 4194304)) : t = 1);
  var n = $e();
  e = qt(e, t), e !== null && (ws(e, t, n), Xe(e, n));
}
function kS(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), fy(e, n);
}
function CS(e, t) {
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
  r !== null && r.delete(t), fy(e, n);
}
var py;
py = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ge.current) Ke = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ke = !1, cS(e, t, n);
    Ke = !!(e.flags & 131072);
  }
  else Ke = !1, le && t.flags & 1048576 && yg(t, Bi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      xi(e, t), e = t.pendingProps;
      var o = Ur(t, Fe.current);
      Or(t, n), o = zc(null, t, r, e, o, n);
      var s = Bc();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ye(r) ? (s = !0, Vi(t)) : s = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, _c(t), o.updater = wa, t.stateNode = o, o._reactInternals = t, vu(t, r, e, n), t = Su(null, t, r, !0, s, n)) : (t.tag = 0, le && s && Dc(t), Be(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (xi(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = PS(r), e = vt(r, e), o) {
          case 0:
            t = wu(null, t, r, e, n);
            break e;
          case 1:
            t = ep(null, t, r, e, n);
            break e;
          case 11:
            t = qf(null, t, r, e, n);
            break e;
          case 14:
            t = Jf(null, t, r, vt(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : vt(r, o), wu(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : vt(r, o), ep(e, t, r, o, n);
    case 3:
      e: {
        if (Qg(t), e === null) throw Error(A(387));
        r = t.pendingProps, s = t.memoizedState, o = s.element, Cg(e, t), Wi(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          o = Gr(Error(A(423)), t), t = tp(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Gr(Error(A(424)), t), t = tp(e, t, r, n, o);
          break e;
        } else for (Je = Sn(t.stateNode.containerInfo.firstChild), et = t, le = !0, wt = null, n = Sg(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
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
      return bg(t), e === null && mu(t), r = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, i = o.children, cu(r, o) ? i = null : s !== null && cu(r, s) && (t.flags |= 32), Xg(e, t), Be(e, t, i, n), t.child;
    case 6:
      return e === null && mu(t), null;
    case 13:
      return Zg(e, t, n);
    case 4:
      return Ic(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Hr(t, null, r, n) : Be(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : vt(r, o), qf(e, t, r, o, n);
    case 7:
      return Be(e, t, t.pendingProps, n), t.child;
    case 8:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, s = t.memoizedProps, i = o.value, te($i, r._currentValue), r._currentValue = i, s !== null) if (Ct(s.value, i)) {
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
                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), gu(
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
            i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), gu(i, n, t), i = s.sibling;
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
      return o = t.type, r = t.pendingProps.children, Or(t, n), o = pt(o), r = r(o), t.flags |= 1, Be(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = vt(r, t.pendingProps), o = vt(r.type, o), Jf(e, t, r, o, n);
    case 15:
      return Gg(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : vt(r, o), xi(e, t), t.tag = 1, Ye(r) ? (e = !0, Vi(t)) : e = !1, Or(t, n), Wg(t, r, o), vu(t, r, o, n), Su(null, t, r, !0, e, n);
    case 19:
      return qg(e, t, n);
    case 22:
      return Yg(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function hy(e, t) {
  return Bm(e, t);
}
function bS(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function dt(e, t, n, r) {
  return new bS(e, t, n, r);
}
function Zc(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function PS(e) {
  if (typeof e == "function") return Zc(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === gc) return 11;
    if (e === yc) return 14;
  }
  return 2;
}
function Pn(e, t) {
  var n = e.alternate;
  return n === null ? (n = dt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ki(e, t, n, r, o, s) {
  var i = 2;
  if (r = e, typeof e == "function") Zc(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case yr:
      return qn(n.children, o, s, t);
    case mc:
      i = 8, o |= 8;
      break;
    case $l:
      return e = dt(12, n, t, o | 2), e.elementType = $l, e.lanes = s, e;
    case Ul:
      return e = dt(13, n, t, o), e.elementType = Ul, e.lanes = s, e;
    case Wl:
      return e = dt(19, n, t, o), e.elementType = Wl, e.lanes = s, e;
    case bm:
      return Ca(n, o, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case km:
          i = 10;
          break e;
        case Cm:
          i = 9;
          break e;
        case gc:
          i = 11;
          break e;
        case yc:
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
  return e = dt(22, e, r, t), e.elementType = bm, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function pl(e, t, n) {
  return e = dt(6, e, null, t), e.lanes = n, e;
}
function hl(e, t, n) {
  return t = dt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function TS(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ya(0), this.expirationTimes = Ya(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ya(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function qc(e, t, n, r, o, s, i, a, l) {
  return e = new TS(e, t, n, a, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = dt(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _c(s), e;
}
function ES(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: gr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function my(e) {
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
    if (Ye(n)) return mg(e, n, t);
  }
  return t;
}
function gy(e, t, n, r, o, s, i, a, l) {
  return e = qc(n, r, !0, e, o, s, i, a, l), e.context = my(null), n = e.current, r = $e(), o = bn(n), s = Gt(r, o), s.callback = t ?? null, kn(n, s, o), e.current.lanes = o, ws(e, o, r), Xe(e, r), e;
}
function ba(e, t, n, r) {
  var o = t.current, s = $e(), i = bn(o);
  return n = my(n), t.context === null ? t.context = n : t.pendingContext = n, t = Gt(s, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = kn(o, t, i), e !== null && (kt(e, o, i, s), gi(e, o, i)), i;
}
function qi(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function dp(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Jc(e, t) {
  dp(e, t), (e = e.alternate) && dp(e, t);
}
function DS() {
  return null;
}
var yy = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ed(e) {
  this._internalRoot = e;
}
Pa.prototype.render = ed.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  ba(e, t, null, null);
};
Pa.prototype.unmount = ed.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    or(function() {
      ba(null, e, null, null);
    }), t[Zt] = null;
  }
};
function Pa(e) {
  this._internalRoot = e;
}
Pa.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ym();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pn.length && t !== 0 && t < pn[n].priority; n++) ;
    pn.splice(n, 0, e), n === 0 && Qm(e);
  }
};
function td(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ta(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function fp() {
}
function NS(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var u = qi(i);
        s.call(u);
      };
    }
    var i = gy(t, r, e, 0, null, !1, !1, "", fp);
    return e._reactRootContainer = i, e[Zt] = i.current, ts(e.nodeType === 8 ? e.parentNode : e), or(), i;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = qi(l);
      a.call(u);
    };
  }
  var l = qc(e, 0, !1, null, null, !1, !1, "", fp);
  return e._reactRootContainer = l, e[Zt] = l.current, ts(e.nodeType === 8 ? e.parentNode : e), or(function() {
    ba(t, l, n, r);
  }), l;
}
function Ea(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = qi(i);
        a.call(l);
      };
    }
    ba(t, i, e, o);
  } else i = NS(n, t, e, o, r);
  return qi(i);
}
Km = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Do(t.pendingLanes);
        n !== 0 && (wc(t, n | 1), Xe(t, xe()), !(X & 6) && (Yr = xe() + 500, On()));
      }
      break;
    case 13:
      or(function() {
        var r = qt(e, 1);
        if (r !== null) {
          var o = $e();
          kt(r, e, 1, o);
        }
      }), Jc(e, 1);
  }
};
Sc = function(e) {
  if (e.tag === 13) {
    var t = qt(e, 134217728);
    if (t !== null) {
      var n = $e();
      kt(t, e, 134217728, n);
    }
    Jc(e, 134217728);
  }
};
Gm = function(e) {
  if (e.tag === 13) {
    var t = bn(e), n = qt(e, t);
    if (n !== null) {
      var r = $e();
      kt(n, e, t, r);
    }
    Jc(e, t);
  }
};
Ym = function() {
  return Z;
};
Xm = function(e, t) {
  var n = Z;
  try {
    return Z = e, t();
  } finally {
    Z = n;
  }
};
eu = function(e, t, n) {
  switch (t) {
    case "input":
      if (Gl(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ya(r);
            if (!o) throw Error(A(90));
            Tm(r), Gl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Dm(e, n);
      break;
    case "select":
      t = n.value, t != null && jr(e, !!n.multiple, t, !1);
  }
};
_m = Yc;
Im = or;
var AS = { usingClientEntryPoint: !1, Events: [ks, Sr, ya, jm, Lm, Yc] }, ko = { findFiberByHostInstance: Gn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, RS = { bundleType: ko.bundleType, version: ko.version, rendererPackageName: ko.rendererPackageName, rendererConfig: ko.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: rn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Vm(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ko.findFiberByHostInstance || DS, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ys = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ys.isDisabled && Ys.supportsFiber) try {
    pa = Ys.inject(RS), _t = Ys;
  } catch {
  }
}
st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = AS;
st.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!td(t)) throw Error(A(200));
  return ES(e, t, null, n);
};
st.createRoot = function(e, t) {
  if (!td(e)) throw Error(A(299));
  var n = !1, r = "", o = yy;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = qc(e, 1, !1, null, null, n, !1, r, o), e[Zt] = t.current, ts(e.nodeType === 8 ? e.parentNode : e), new ed(t);
};
st.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e)));
  return e = Vm(t), e = e === null ? null : e.stateNode, e;
};
st.flushSync = function(e) {
  return or(e);
};
st.hydrate = function(e, t, n) {
  if (!Ta(t)) throw Error(A(200));
  return Ea(null, e, t, !0, n);
};
st.hydrateRoot = function(e, t, n) {
  if (!td(e)) throw Error(A(405));
  var r = n != null && n.hydratedSources || null, o = !1, s = "", i = yy;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = gy(t, null, e, 1, n ?? null, o, !1, s, i), e[Zt] = t.current, ts(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Pa(t);
};
st.render = function(e, t, n) {
  if (!Ta(t)) throw Error(A(200));
  return Ea(null, e, t, !1, n);
};
st.unmountComponentAtNode = function(e) {
  if (!Ta(e)) throw Error(A(40));
  return e._reactRootContainer ? (or(function() {
    Ea(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Zt] = null;
    });
  }), !0) : !1;
};
st.unstable_batchedUpdates = Yc;
st.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ta(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return Ea(e, t, n, !1, r);
};
st.version = "18.3.1-next-f1338f8080-20240426";
function vy() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vy);
    } catch (e) {
      console.error(e);
    }
}
vy(), vm.exports = st;
var ro = vm.exports;
const MS = /* @__PURE__ */ sm(ro);
var nd, pp = ro;
nd = pp.createRoot, pp.hydrateRoot;
function xy(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = xy(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function jS() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = xy(e)) && (r && (r += " "), r += t);
  return r;
}
const rd = "-", LS = (e) => {
  const t = IS(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(rd);
      return a[0] === "" && a.length !== 1 && a.shift(), wy(a, t) || _S(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const l = n[i] || [];
      return a && r[i] ? [...l, ...r[i]] : l;
    }
  };
}, wy = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? wy(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(rd);
  return (i = t.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : i.classGroupId;
}, hp = /^\[(.+)\]$/, _S = (e) => {
  if (hp.test(e)) {
    const t = hp.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, IS = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return FS(Object.entries(e.classGroups), n).forEach(([s, i]) => {
    ju(i, r, s, t);
  }), r;
}, ju = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : mp(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (OS(o)) {
        ju(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      ju(i, mp(t, s), n, r);
    });
  });
}, mp = (e, t) => {
  let n = e;
  return t.split(rd).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, OS = (e) => e.isThemeGetter, FS = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a])) : s);
  return [n, o];
}) : e, VS = (e) => {
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
}, Sy = "!", zS = (e) => {
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
    const f = l.length === 0 ? a : a.substring(c), m = f.startsWith(Sy), w = m ? f.substring(1) : f, y = d && d > c ? d - c : void 0;
    return {
      modifiers: l,
      hasImportantModifier: m,
      baseClassName: w,
      maybePostfixModifierPosition: y
    };
  };
  return n ? (a) => n({
    className: a,
    parseClassName: i
  }) : i;
}, BS = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, $S = (e) => ({
  cache: VS(e.cacheSize),
  parseClassName: zS(e),
  ...LS(e)
}), US = /\s+/, WS = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, s = [], i = e.trim().split(US);
  let a = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const u = i[l], {
      modifiers: c,
      hasImportantModifier: d,
      baseClassName: f,
      maybePostfixModifierPosition: m
    } = n(u);
    let w = !!m, y = r(w ? f.substring(0, m) : f);
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
    const S = BS(c).join(":"), g = d ? S + Sy : S, p = g + y;
    if (s.includes(p))
      continue;
    s.push(p);
    const v = o(y, w);
    for (let k = 0; k < v.length; ++k) {
      const C = v[k];
      s.push(g + C);
    }
    a = u + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function HS() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = ky(t)) && (r && (r += " "), r += n);
  return r;
}
const ky = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = ky(e[r])) && (n && (n += " "), n += t);
  return n;
};
function KS(e, ...t) {
  let n, r, o, s = i;
  function i(l) {
    const u = t.reduce((c, d) => d(c), e());
    return n = $S(u), r = n.cache.get, o = n.cache.set, s = a, a(l);
  }
  function a(l) {
    const u = r(l);
    if (u)
      return u;
    const c = WS(l, n);
    return o(l, c), c;
  }
  return function() {
    return s(HS.apply(null, arguments));
  };
}
const re = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Cy = /^\[(?:([a-z-]+):)?(.+)\]$/i, GS = /^\d+\/\d+$/, YS = /* @__PURE__ */ new Set(["px", "full", "screen"]), XS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, QS = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ZS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, qS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, JS = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, $t = (e) => Vr(e) || YS.has(e) || GS.test(e), sn = (e) => oo(e, "length", ak), Vr = (e) => !!e && !Number.isNaN(Number(e)), ml = (e) => oo(e, "number", Vr), Co = (e) => !!e && Number.isInteger(Number(e)), ek = (e) => e.endsWith("%") && Vr(e.slice(0, -1)), U = (e) => Cy.test(e), an = (e) => XS.test(e), tk = /* @__PURE__ */ new Set(["length", "size", "percentage"]), nk = (e) => oo(e, tk, by), rk = (e) => oo(e, "position", by), ok = /* @__PURE__ */ new Set(["image", "url"]), sk = (e) => oo(e, ok, uk), ik = (e) => oo(e, "", lk), bo = () => !0, oo = (e, t, n) => {
  const r = Cy.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, ak = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  QS.test(e) && !ZS.test(e)
), by = () => !1, lk = (e) => qS.test(e), uk = (e) => JS.test(e), ck = () => {
  const e = re("colors"), t = re("spacing"), n = re("blur"), r = re("brightness"), o = re("borderColor"), s = re("borderRadius"), i = re("borderSpacing"), a = re("borderWidth"), l = re("contrast"), u = re("grayscale"), c = re("hueRotate"), d = re("invert"), f = re("gap"), m = re("gradientColorStops"), w = re("gradientColorStopPositions"), y = re("inset"), S = re("margin"), g = re("opacity"), p = re("padding"), v = re("saturate"), k = re("scale"), C = re("sepia"), b = re("skew"), P = re("space"), T = re("translate"), N = () => ["auto", "contain", "none"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", U, t], R = () => [U, t], z = () => ["", $t, sn], B = () => ["auto", Vr, U], Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], I = () => ["solid", "dashed", "dotted", "double", "none"], O = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], E = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], M = () => ["", "0", U], _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], $ = () => [Vr, U];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [bo],
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
      gradientColorStopPositions: [ek, sn],
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
        z: ["auto", Co, U]
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
        order: ["first", "last", "none", Co, U]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [bo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Co, U]
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
        "grid-rows": [bo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Co, U]
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
        justify: ["normal", ...E()]
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
        content: ["normal", ...E(), "baseline"]
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
        "place-content": [...E(), "baseline"]
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
        p: [p]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [p]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [p]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [p]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [p]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [p]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [p]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [p]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [p]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ml]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [bo]
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
        "line-clamp": ["none", Vr, ml]
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
        decoration: [...I(), "wavy"]
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
        bg: [...Y(), rk]
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
        bg: ["auto", "cover", "contain", nk]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, sk]
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
        from: [m]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [m]
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
        "divide-opacity": [g]
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
        shadow: ["", "inner", "none", an, ik]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [bo]
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
        rotate: [Co, U]
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
        "skew-x": [b]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [b]
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
        stroke: [$t, sn, ml]
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
}, dk = /* @__PURE__ */ KS(ck);
function ge(...e) {
  return dk(jS(e));
}
function od({ className: e, ...t }) {
  return /* @__PURE__ */ h.jsx(
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
function Py({ className: e, ...t }) {
  return /* @__PURE__ */ h.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: ge("px-6", e),
      ...t
    }
  );
}
function fk({ className: e, ...t }) {
  return /* @__PURE__ */ h.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: ge("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
function gp(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function G(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function pk(e, t) {
  const n = x.createContext(t), r = (s) => {
    const { children: i, ...a } = s, l = x.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ h.jsx(n.Provider, { value: l, children: i });
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
      const { scope: f, children: m, ...w } = d, y = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a, S = x.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ h.jsx(y.Provider, { value: S, children: m });
    };
    u.displayName = s + "Provider";
    function c(d, f) {
      var y;
      const m = ((y = f == null ? void 0 : f[e]) == null ? void 0 : y[l]) || a, w = x.useContext(m);
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
  return o.scopeName = e, [r, hk(o, ...t)];
}
function hk(...e) {
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
function yp(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Ty(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = yp(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : yp(e[o], null);
        }
      };
  };
}
function ye(...e) {
  return x.useCallback(Ty(...e), e);
}
// @__NO_SIDE_EFFECTS__
function cs(e) {
  const t = /* @__PURE__ */ mk(e), n = x.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = x.Children.toArray(s), l = a.find(yk);
    if (l) {
      const u = l.props.children, c = a.map((d) => d === l ? x.Children.count(u) > 1 ? x.Children.only(null) : x.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ h.jsx(t, { ...i, ref: o, children: x.isValidElement(u) ? x.cloneElement(u, void 0, c) : null });
    }
    return /* @__PURE__ */ h.jsx(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function mk(e) {
  const t = x.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (x.isValidElement(o)) {
      const i = xk(o), a = vk(s, o.props);
      return o.type !== x.Fragment && (a.ref = r ? Ty(r, i) : i), x.cloneElement(o, a);
    }
    return x.Children.count(o) > 1 ? x.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var gk = Symbol("radix.slottable");
function yk(e) {
  return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === gk;
}
function vk(e, t) {
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
function xk(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Ey(e) {
  const t = e + "CollectionProvider", [n, r] = so(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (y) => {
    const { scope: S, children: g } = y, p = be.useRef(null), v = be.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ h.jsx(o, { scope: S, itemMap: v, collectionRef: p, children: g });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ cs(a), u = be.forwardRef(
    (y, S) => {
      const { scope: g, children: p } = y, v = s(a, g), k = ye(S, v.collectionRef);
      return /* @__PURE__ */ h.jsx(l, { ref: k, children: p });
    }
  );
  u.displayName = a;
  const c = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ cs(c), m = be.forwardRef(
    (y, S) => {
      const { scope: g, children: p, ...v } = y, k = be.useRef(null), C = ye(S, k), b = s(c, g);
      return be.useEffect(() => (b.itemMap.set(k, { ref: k, ...v }), () => void b.itemMap.delete(k))), /* @__PURE__ */ h.jsx(f, { [d]: "", ref: C, children: p });
    }
  );
  m.displayName = c;
  function w(y) {
    const S = s(e + "CollectionConsumer", y);
    return be.useCallback(() => {
      const p = S.collectionRef.current;
      if (!p) return [];
      const v = Array.from(p.querySelectorAll(`[${d}]`));
      return Array.from(S.itemMap.values()).sort(
        (b, P) => v.indexOf(b.ref.current) - v.indexOf(P.ref.current)
      );
    }, [S.collectionRef, S.itemMap]);
  }
  return [
    { Provider: i, Slot: u, ItemSlot: m },
    w,
    r
  ];
}
var wk = x.createContext(void 0);
function sd(e) {
  const t = x.useContext(wk);
  return e || t || "ltr";
}
var Sk = [
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
], Q = Sk.reduce((e, t) => {
  const n = /* @__PURE__ */ cs(`Primitive.${t}`), r = x.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ h.jsx(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function kk(e, t) {
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
function Ck(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = An(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var bk = "DismissableLayer", Lu = "dismissableLayer.update", Pk = "dismissableLayer.pointerDownOutside", Tk = "dismissableLayer.focusOutside", vp, Dy = x.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), id = x.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...l
    } = e, u = x.useContext(Dy), [c, d] = x.useState(null), f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, m] = x.useState({}), w = ye(t, (P) => d(P)), y = Array.from(u.layers), [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), g = y.indexOf(S), p = c ? y.indexOf(c) : -1, v = u.layersWithOutsidePointerEventsDisabled.size > 0, k = p >= g, C = Nk((P) => {
      const T = P.target, N = [...u.branches].some((D) => D.contains(T));
      !k || N || (o == null || o(P), i == null || i(P), P.defaultPrevented || a == null || a());
    }, f), b = Ak((P) => {
      const T = P.target;
      [...u.branches].some((D) => D.contains(T)) || (s == null || s(P), i == null || i(P), P.defaultPrevented || a == null || a());
    }, f);
    return Ck((P) => {
      p === u.layers.size - 1 && (r == null || r(P), !P.defaultPrevented && a && (P.preventDefault(), a()));
    }, f), x.useEffect(() => {
      if (c)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (vp = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), xp(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = vp);
        };
    }, [c, f, n, u]), x.useEffect(() => () => {
      c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), xp());
    }, [c, u]), x.useEffect(() => {
      const P = () => m({});
      return document.addEventListener(Lu, P), () => document.removeEventListener(Lu, P);
    }, []), /* @__PURE__ */ h.jsx(
      Q.div,
      {
        ...l,
        ref: w,
        style: {
          pointerEvents: v ? k ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: G(e.onFocusCapture, b.onFocusCapture),
        onBlurCapture: G(e.onBlurCapture, b.onBlurCapture),
        onPointerDownCapture: G(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
id.displayName = bk;
var Ek = "DismissableLayerBranch", Dk = x.forwardRef((e, t) => {
  const n = x.useContext(Dy), r = x.useRef(null), o = ye(t, r);
  return x.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ h.jsx(Q.div, { ...e, ref: o });
});
Dk.displayName = Ek;
function Nk(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = An(e), r = x.useRef(!1), o = x.useRef(() => {
  });
  return x.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          Ny(
            Pk,
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
function Ak(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = An(e), r = x.useRef(!1);
  return x.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && Ny(Tk, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function xp() {
  const e = new CustomEvent(Lu);
  document.dispatchEvent(e);
}
function Ny(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? kk(o, s) : o.dispatchEvent(s);
}
var gl = 0;
function Ay() {
  x.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? wp()), document.body.insertAdjacentElement("beforeend", e[1] ?? wp()), gl++, () => {
      gl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), gl--;
    };
  }, []);
}
function wp() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var yl = "focusScope.autoFocusOnMount", vl = "focusScope.autoFocusOnUnmount", Sp = { bubbles: !1, cancelable: !0 }, Rk = "FocusScope", ad = x.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = x.useState(null), u = An(o), c = An(s), d = x.useRef(null), f = ye(t, (y) => l(y)), m = x.useRef({
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
        if (m.paused || !a) return;
        const k = v.target;
        a.contains(k) ? d.current = k : ln(d.current, { select: !0 });
      }, S = function(v) {
        if (m.paused || !a) return;
        const k = v.relatedTarget;
        k !== null && (a.contains(k) || ln(d.current, { select: !0 }));
      }, g = function(v) {
        if (document.activeElement === document.body)
          for (const C of v)
            C.removedNodes.length > 0 && ln(a);
      };
      document.addEventListener("focusin", y), document.addEventListener("focusout", S);
      const p = new MutationObserver(g);
      return a && p.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", S), p.disconnect();
      };
    }
  }, [r, a, m.paused]), x.useEffect(() => {
    if (a) {
      Cp.add(m);
      const y = document.activeElement;
      if (!a.contains(y)) {
        const g = new CustomEvent(yl, Sp);
        a.addEventListener(yl, u), a.dispatchEvent(g), g.defaultPrevented || (Mk(Ok(Ry(a)), { select: !0 }), document.activeElement === y && ln(a));
      }
      return () => {
        a.removeEventListener(yl, u), setTimeout(() => {
          const g = new CustomEvent(vl, Sp);
          a.addEventListener(vl, c), a.dispatchEvent(g), g.defaultPrevented || ln(y ?? document.body, { select: !0 }), a.removeEventListener(vl, c), Cp.remove(m);
        }, 0);
      };
    }
  }, [a, u, c, m]);
  const w = x.useCallback(
    (y) => {
      if (!n && !r || m.paused) return;
      const S = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, g = document.activeElement;
      if (S && g) {
        const p = y.currentTarget, [v, k] = jk(p);
        v && k ? !y.shiftKey && g === k ? (y.preventDefault(), n && ln(v, { select: !0 })) : y.shiftKey && g === v && (y.preventDefault(), n && ln(k, { select: !0 })) : g === p && y.preventDefault();
      }
    },
    [n, r, m.paused]
  );
  return /* @__PURE__ */ h.jsx(Q.div, { tabIndex: -1, ...i, ref: f, onKeyDown: w });
});
ad.displayName = Rk;
function Mk(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ln(r, { select: t }), document.activeElement !== n) return;
}
function jk(e) {
  const t = Ry(e), n = kp(t, e), r = kp(t.reverse(), e);
  return [n, r];
}
function Ry(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function kp(e, t) {
  for (const n of e)
    if (!Lk(n, { upTo: t })) return n;
}
function Lk(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function _k(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ln(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && _k(e) && t && e.select();
  }
}
var Cp = Ik();
function Ik() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = bp(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = bp(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function bp(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ok(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ve = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {
}, Fk = gm[" useId ".trim().toString()] || (() => {
}), Vk = 0;
function Tn(e) {
  const [t, n] = x.useState(Fk());
  return Ve(() => {
    n((r) => r ?? String(Vk++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const zk = ["top", "right", "bottom", "left"], Rn = Math.min, qe = Math.max, Ji = Math.round, Xs = Math.floor, Ot = (e) => ({
  x: e,
  y: e
}), Bk = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, $k = {
  start: "end",
  end: "start"
};
function _u(e, t, n) {
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
function ld(e) {
  return e === "x" ? "y" : "x";
}
function ud(e) {
  return e === "y" ? "height" : "width";
}
const Uk = /* @__PURE__ */ new Set(["top", "bottom"]);
function Lt(e) {
  return Uk.has(tn(e)) ? "y" : "x";
}
function cd(e) {
  return ld(Lt(e));
}
function Wk(e, t, n) {
  n === void 0 && (n = !1);
  const r = io(e), o = cd(e), s = ud(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = ea(i)), [i, ea(i)];
}
function Hk(e) {
  const t = ea(e);
  return [Iu(e), t, Iu(t)];
}
function Iu(e) {
  return e.replace(/start|end/g, (t) => $k[t]);
}
const Pp = ["left", "right"], Tp = ["right", "left"], Kk = ["top", "bottom"], Gk = ["bottom", "top"];
function Yk(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Tp : Pp : t ? Pp : Tp;
    case "left":
    case "right":
      return t ? Kk : Gk;
    default:
      return [];
  }
}
function Xk(e, t, n, r) {
  const o = io(e);
  let s = Yk(tn(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Iu)))), s;
}
function ea(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Bk[t]);
}
function Qk(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function My(e) {
  return typeof e != "number" ? Qk(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ta(e) {
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
function Ep(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = Lt(t), i = cd(t), a = ud(i), l = tn(t), u = s === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let m;
  switch (l) {
    case "top":
      m = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (io(t)) {
    case "start":
      m[i] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      m[i] += f * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const Zk = async (e, t, n) => {
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
  } = Ep(u, r, l), f = r, m = {}, w = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: S,
      fn: g
    } = a[y], {
      x: p,
      y: v,
      data: k,
      reset: C
    } = await g({
      x: c,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: m,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = p ?? c, d = v ?? d, m = {
      ...m,
      [S]: {
        ...m[S],
        ...k
      }
    }, C && w <= 50 && (w++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (u = C.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: c,
      y: d
    } = Ep(u, f, l)), y = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: m
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
    padding: m = 0
  } = en(t, e), w = My(m), S = a[f ? d === "floating" ? "reference" : "floating" : d], g = ta(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(S))) == null || n ? S : S.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), p = d === "floating" ? {
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
  }, C = ta(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: p,
    offsetParent: v,
    strategy: l
  }) : p);
  return {
    top: (g.top - C.top + w.top) / k.y,
    bottom: (C.bottom - g.bottom + w.bottom) / k.y,
    left: (g.left - C.left + w.left) / k.x,
    right: (C.right - g.right + w.right) / k.x
  };
}
const qk = (e) => ({
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
    const d = My(c), f = {
      x: n,
      y: r
    }, m = cd(o), w = ud(m), y = await i.getDimensions(u), S = m === "y", g = S ? "top" : "left", p = S ? "bottom" : "right", v = S ? "clientHeight" : "clientWidth", k = s.reference[w] + s.reference[m] - f[m] - s.floating[w], C = f[m] - s.reference[m], b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let P = b ? b[v] : 0;
    (!P || !await (i.isElement == null ? void 0 : i.isElement(b))) && (P = a.floating[v] || s.floating[w]);
    const T = k / 2 - C / 2, N = P / 2 - y[w] / 2 - 1, D = Rn(d[g], N), j = Rn(d[p], N), R = D, z = P - y[w] - j, B = P / 2 - y[w] / 2 + T, Y = _u(R, B, z), I = !l.arrow && io(o) != null && B !== Y && s.reference[w] / 2 - (B < R ? D : j) - y[w] / 2 < 0, O = I ? B < R ? B - R : B - z : 0;
    return {
      [m]: f[m] + O,
      data: {
        [m]: Y,
        centerOffset: B - Y - O,
        ...I && {
          alignmentOffset: O
        }
      },
      reset: I
    };
  }
}), Jk = function(e) {
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
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: y = !0,
        ...S
      } = en(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const g = tn(o), p = Lt(a), v = tn(a) === a, k = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), C = f || (v || !y ? [ea(a)] : Hk(a)), b = w !== "none";
      !f && b && C.push(...Xk(a, y, w, k));
      const P = [a, ...C], T = await ds(t, S), N = [];
      let D = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (c && N.push(T[g]), d) {
        const B = Wk(o, i, k);
        N.push(T[B[0]], T[B[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: N
      }], !N.every((B) => B <= 0)) {
        var j, R;
        const B = (((j = s.flip) == null ? void 0 : j.index) || 0) + 1, Y = P[B];
        if (Y && (!(d === "alignment" ? p !== Lt(Y) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        D.every((E) => Lt(E.placement) === p ? E.overflows[0] > 0 : !0)))
          return {
            data: {
              index: B,
              overflows: D
            },
            reset: {
              placement: Y
            }
          };
        let I = (R = D.filter((O) => O.overflows[0] <= 0).sort((O, E) => O.overflows[1] - E.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!I)
          switch (m) {
            case "bestFit": {
              var z;
              const O = (z = D.filter((E) => {
                if (b) {
                  const M = Lt(E.placement);
                  return M === p || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((E) => [E.placement, E.overflows.filter((M) => M > 0).reduce((M, _) => M + _, 0)]).sort((E, M) => E[1] - M[1])[0]) == null ? void 0 : z[0];
              O && (I = O);
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
function Dp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Np(e) {
  return zk.some((t) => e[t] >= 0);
}
const eC = function(e) {
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
          }), i = Dp(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Np(i)
            }
          };
        }
        case "escaped": {
          const s = await ds(t, {
            ...o,
            altBoundary: !0
          }), i = Dp(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Np(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, jy = /* @__PURE__ */ new Set(["left", "top"]);
async function tC(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = tn(n), a = io(n), l = Lt(n) === "y", u = jy.has(i) ? -1 : 1, c = s && l ? -1 : 1, d = en(t, e);
  let {
    mainAxis: f,
    crossAxis: m,
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
  return a && typeof w == "number" && (m = a === "end" ? w * -1 : w), l ? {
    x: m * c,
    y: f * u
  } : {
    x: f * u,
    y: m * c
  };
}
const nC = function(e) {
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
      } = t, l = await tC(t, e);
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
}, rC = function(e) {
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
              y: p
            } = S;
            return {
              x: g,
              y: p
            };
          }
        },
        ...l
      } = en(e, t), u = {
        x: n,
        y: r
      }, c = await ds(t, l), d = Lt(tn(o)), f = ld(d);
      let m = u[f], w = u[d];
      if (s) {
        const S = f === "y" ? "top" : "left", g = f === "y" ? "bottom" : "right", p = m + c[S], v = m - c[g];
        m = _u(p, m, v);
      }
      if (i) {
        const S = d === "y" ? "top" : "left", g = d === "y" ? "bottom" : "right", p = w + c[S], v = w - c[g];
        w = _u(p, w, v);
      }
      const y = a.fn({
        ...t,
        [f]: m,
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
}, oC = function(e) {
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
      }, d = Lt(o), f = ld(d);
      let m = c[f], w = c[d];
      const y = en(a, t), S = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (l) {
        const v = f === "y" ? "height" : "width", k = s.reference[f] - s.floating[v] + S.mainAxis, C = s.reference[f] + s.reference[v] - S.mainAxis;
        m < k ? m = k : m > C && (m = C);
      }
      if (u) {
        var g, p;
        const v = f === "y" ? "width" : "height", k = jy.has(tn(o)), C = s.reference[d] - s.floating[v] + (k && ((g = i.offset) == null ? void 0 : g[d]) || 0) + (k ? 0 : S.crossAxis), b = s.reference[d] + s.reference[v] + (k ? 0 : ((p = i.offset) == null ? void 0 : p[d]) || 0) - (k ? S.crossAxis : 0);
        w < C ? w = C : w > b && (w = b);
      }
      return {
        [f]: m,
        [d]: w
      };
    }
  };
}, sC = function(e) {
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
      } = en(e, t), c = await ds(t, u), d = tn(o), f = io(o), m = Lt(o) === "y", {
        width: w,
        height: y
      } = s.floating;
      let S, g;
      d === "top" || d === "bottom" ? (S = d, g = f === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = d, S = f === "end" ? "top" : "bottom");
      const p = y - c.top - c.bottom, v = w - c.left - c.right, k = Rn(y - c[S], p), C = Rn(w - c[g], v), b = !t.middlewareData.shift;
      let P = k, T = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = v), (r = t.middlewareData.shift) != null && r.enabled.y && (P = p), b && !f) {
        const D = qe(c.left, 0), j = qe(c.right, 0), R = qe(c.top, 0), z = qe(c.bottom, 0);
        m ? T = w - 2 * (D !== 0 || j !== 0 ? D + j : qe(c.left, c.right)) : P = y - 2 * (R !== 0 || z !== 0 ? R + z : qe(c.top, c.bottom));
      }
      await l({
        ...t,
        availableWidth: T,
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
function Da() {
  return typeof window < "u";
}
function ao(e) {
  return Ly(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function tt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Bt(e) {
  var t;
  return (t = (Ly(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ly(e) {
  return Da() ? e instanceof Node || e instanceof tt(e).Node : !1;
}
function bt(e) {
  return Da() ? e instanceof Element || e instanceof tt(e).Element : !1;
}
function zt(e) {
  return Da() ? e instanceof HTMLElement || e instanceof tt(e).HTMLElement : !1;
}
function Ap(e) {
  return !Da() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof tt(e).ShadowRoot;
}
const iC = /* @__PURE__ */ new Set(["inline", "contents"]);
function bs(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Pt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !iC.has(o);
}
const aC = /* @__PURE__ */ new Set(["table", "td", "th"]);
function lC(e) {
  return aC.has(ao(e));
}
const uC = [":popover-open", ":modal"];
function Na(e) {
  return uC.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const cC = ["transform", "translate", "scale", "rotate", "perspective"], dC = ["transform", "translate", "scale", "rotate", "perspective", "filter"], fC = ["paint", "layout", "strict", "content"];
function dd(e) {
  const t = fd(), n = bt(e) ? Pt(e) : e;
  return cC.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || dC.some((r) => (n.willChange || "").includes(r)) || fC.some((r) => (n.contain || "").includes(r));
}
function pC(e) {
  let t = Mn(e);
  for (; zt(t) && !Xr(t); ) {
    if (dd(t))
      return t;
    if (Na(t))
      return null;
    t = Mn(t);
  }
  return null;
}
function fd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const hC = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Xr(e) {
  return hC.has(ao(e));
}
function Pt(e) {
  return tt(e).getComputedStyle(e);
}
function Aa(e) {
  return bt(e) ? {
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
    Ap(e) && e.host || // Fallback.
    Bt(e)
  );
  return Ap(t) ? t.host : t;
}
function _y(e) {
  const t = Mn(e);
  return Xr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : zt(t) && bs(t) ? t : _y(t);
}
function fs(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = _y(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = tt(o);
  if (s) {
    const a = Ou(i);
    return t.concat(i, i.visualViewport || [], bs(o) ? o : [], a && n ? fs(a) : []);
  }
  return t.concat(o, fs(o, [], n));
}
function Ou(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Iy(e) {
  const t = Pt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = zt(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = Ji(n) !== s || Ji(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function pd(e) {
  return bt(e) ? e : e.contextElement;
}
function zr(e) {
  const t = pd(e);
  if (!zt(t))
    return Ot(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Iy(t);
  let i = (s ? Ji(n.width) : n.width) / r, a = (s ? Ji(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const mC = /* @__PURE__ */ Ot(0);
function Oy(e) {
  const t = tt(e);
  return !fd() || !t.visualViewport ? mC : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function gC(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== tt(e) ? !1 : t;
}
function sr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = pd(e);
  let i = Ot(1);
  t && (r ? bt(r) && (i = zr(r)) : i = zr(e));
  const a = gC(s, n, r) ? Oy(s) : Ot(0);
  let l = (o.left + a.x) / i.x, u = (o.top + a.y) / i.y, c = o.width / i.x, d = o.height / i.y;
  if (s) {
    const f = tt(s), m = r && bt(r) ? tt(r) : r;
    let w = f, y = Ou(w);
    for (; y && r && m !== w; ) {
      const S = zr(y), g = y.getBoundingClientRect(), p = Pt(y), v = g.left + (y.clientLeft + parseFloat(p.paddingLeft)) * S.x, k = g.top + (y.clientTop + parseFloat(p.paddingTop)) * S.y;
      l *= S.x, u *= S.y, c *= S.x, d *= S.y, l += v, u += k, w = tt(y), y = Ou(w);
    }
  }
  return ta({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function hd(e, t) {
  const n = Aa(e).scrollLeft;
  return t ? t.left + n : sr(Bt(e)).left + n;
}
function Fy(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    hd(e, r)
  )), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function yC(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = Bt(r), a = t ? Na(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ot(1);
  const c = Ot(0), d = zt(r);
  if ((d || !d && !s) && ((ao(r) !== "body" || bs(i)) && (l = Aa(r)), zt(r))) {
    const m = sr(r);
    u = zr(r), c.x = m.x + r.clientLeft, c.y = m.y + r.clientTop;
  }
  const f = i && !d && !s ? Fy(i, l, !0) : Ot(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function vC(e) {
  return Array.from(e.getClientRects());
}
function xC(e) {
  const t = Bt(e), n = Aa(e), r = e.ownerDocument.body, o = qe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = qe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + hd(e);
  const a = -n.scrollTop;
  return Pt(r).direction === "rtl" && (i += qe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
function wC(e, t) {
  const n = tt(e), r = Bt(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const u = fd();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
const SC = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function kC(e, t) {
  const n = sr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = zt(e) ? zr(e) : Ot(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, u = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: u
  };
}
function Rp(e, t, n) {
  let r;
  if (t === "viewport")
    r = wC(e, n);
  else if (t === "document")
    r = xC(Bt(e));
  else if (bt(t))
    r = kC(t, n);
  else {
    const o = Oy(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ta(r);
}
function Vy(e, t) {
  const n = Mn(e);
  return n === t || !bt(n) || Xr(n) ? !1 : Pt(n).position === "fixed" || Vy(n, t);
}
function CC(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = fs(e, [], !1).filter((a) => bt(a) && ao(a) !== "body"), o = null;
  const s = Pt(e).position === "fixed";
  let i = s ? Mn(e) : e;
  for (; bt(i) && !Xr(i); ) {
    const a = Pt(i), l = dd(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && SC.has(o.position) || bs(i) && !l && Vy(e, i)) ? r = r.filter((c) => c !== i) : o = a, i = Mn(i);
  }
  return t.set(e, r), r;
}
function bC(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Na(t) ? [] : CC(t, this._c) : [].concat(n), r], a = i[0], l = i.reduce((u, c) => {
    const d = Rp(t, c, o);
    return u.top = qe(d.top, u.top), u.right = Rn(d.right, u.right), u.bottom = Rn(d.bottom, u.bottom), u.left = qe(d.left, u.left), u;
  }, Rp(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function PC(e) {
  const {
    width: t,
    height: n
  } = Iy(e);
  return {
    width: t,
    height: n
  };
}
function TC(e, t, n) {
  const r = zt(t), o = Bt(t), s = n === "fixed", i = sr(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ot(0);
  function u() {
    l.x = hd(o);
  }
  if (r || !r && !s)
    if ((ao(t) !== "body" || bs(o)) && (a = Aa(t)), r) {
      const m = sr(t, !0, s, t);
      l.x = m.x + t.clientLeft, l.y = m.y + t.clientTop;
    } else o && u();
  s && !r && o && u();
  const c = o && !r && !s ? Fy(o, a) : Ot(0), d = i.left + a.scrollLeft - l.x - c.x, f = i.top + a.scrollTop - l.y - c.y;
  return {
    x: d,
    y: f,
    width: i.width,
    height: i.height
  };
}
function xl(e) {
  return Pt(e).position === "static";
}
function Mp(e, t) {
  if (!zt(e) || Pt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Bt(e) === n && (n = n.ownerDocument.body), n;
}
function zy(e, t) {
  const n = tt(e);
  if (Na(e))
    return n;
  if (!zt(e)) {
    let o = Mn(e);
    for (; o && !Xr(o); ) {
      if (bt(o) && !xl(o))
        return o;
      o = Mn(o);
    }
    return n;
  }
  let r = Mp(e, t);
  for (; r && lC(r) && xl(r); )
    r = Mp(r, t);
  return r && Xr(r) && xl(r) && !dd(r) ? n : r || pC(e) || n;
}
const EC = async function(e) {
  const t = this.getOffsetParent || zy, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: TC(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function DC(e) {
  return Pt(e).direction === "rtl";
}
const NC = {
  convertOffsetParentRelativeRectToViewportRelativeRect: yC,
  getDocumentElement: Bt,
  getClippingRect: bC,
  getOffsetParent: zy,
  getElementRects: EC,
  getClientRects: vC,
  getDimensions: PC,
  getScale: zr,
  isElement: bt,
  isRTL: DC
};
function By(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function AC(e, t) {
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
      height: m
    } = u;
    if (a || t(), !f || !m)
      return;
    const w = Xs(d), y = Xs(o.clientWidth - (c + f)), S = Xs(o.clientHeight - (d + m)), g = Xs(c), v = {
      rootMargin: -w + "px " + -y + "px " + -S + "px " + -g + "px",
      threshold: qe(0, Rn(1, l)) || 1
    };
    let k = !0;
    function C(b) {
      const P = b[0].intersectionRatio;
      if (P !== l) {
        if (!k)
          return i();
        P ? i(!1, P) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      P === 1 && !By(u, e.getBoundingClientRect()) && i(), k = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...v,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, v);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function RC(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = pd(e), c = o || s ? [...u ? fs(u) : [], ...fs(t)] : [];
  c.forEach((g) => {
    o && g.addEventListener("scroll", n, {
      passive: !0
    }), s && g.addEventListener("resize", n);
  });
  const d = u && a ? AC(u, n) : null;
  let f = -1, m = null;
  i && (m = new ResizeObserver((g) => {
    let [p] = g;
    p && p.target === u && m && (m.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var v;
      (v = m) == null || v.observe(t);
    })), n();
  }), u && !l && m.observe(u), m.observe(t));
  let w, y = l ? sr(e) : null;
  l && S();
  function S() {
    const g = sr(e);
    y && !By(y, g) && n(), y = g, w = requestAnimationFrame(S);
  }
  return n(), () => {
    var g;
    c.forEach((p) => {
      o && p.removeEventListener("scroll", n), s && p.removeEventListener("resize", n);
    }), d == null || d(), (g = m) == null || g.disconnect(), m = null, l && cancelAnimationFrame(w);
  };
}
const MC = nC, jC = rC, LC = Jk, _C = sC, IC = eC, jp = qk, OC = oC, FC = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: NC,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Zk(e, t, {
    ...o,
    platform: s
  });
};
var VC = typeof document < "u", zC = function() {
}, Ci = VC ? x.useLayoutEffect : zC;
function na(e, t) {
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
        if (!na(e[r], t[r]))
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
      if (!(s === "_owner" && e.$$typeof) && !na(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function $y(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Lp(e, t) {
  const n = $y(e);
  return Math.round(t * n) / n;
}
function wl(e) {
  const t = x.useRef(e);
  return Ci(() => {
    t.current = e;
  }), t;
}
function BC(e) {
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
  }), [f, m] = x.useState(r);
  na(f, r) || m(r);
  const [w, y] = x.useState(null), [S, g] = x.useState(null), p = x.useCallback((E) => {
    E !== b.current && (b.current = E, y(E));
  }, []), v = x.useCallback((E) => {
    E !== P.current && (P.current = E, g(E));
  }, []), k = s || w, C = i || S, b = x.useRef(null), P = x.useRef(null), T = x.useRef(c), N = l != null, D = wl(l), j = wl(o), R = wl(u), z = x.useCallback(() => {
    if (!b.current || !P.current)
      return;
    const E = {
      placement: t,
      strategy: n,
      middleware: f
    };
    j.current && (E.platform = j.current), FC(b.current, P.current, E).then((M) => {
      const _ = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: R.current !== !1
      };
      B.current && !na(T.current, _) && (T.current = _, ro.flushSync(() => {
        d(_);
      }));
    });
  }, [f, t, n, j, R]);
  Ci(() => {
    u === !1 && T.current.isPositioned && (T.current.isPositioned = !1, d((E) => ({
      ...E,
      isPositioned: !1
    })));
  }, [u]);
  const B = x.useRef(!1);
  Ci(() => (B.current = !0, () => {
    B.current = !1;
  }), []), Ci(() => {
    if (k && (b.current = k), C && (P.current = C), k && C) {
      if (D.current)
        return D.current(k, C, z);
      z();
    }
  }, [k, C, z, D, N]);
  const Y = x.useMemo(() => ({
    reference: b,
    floating: P,
    setReference: p,
    setFloating: v
  }), [p, v]), I = x.useMemo(() => ({
    reference: k,
    floating: C
  }), [k, C]), O = x.useMemo(() => {
    const E = {
      position: n,
      left: 0,
      top: 0
    };
    if (!I.floating)
      return E;
    const M = Lp(I.floating, c.x), _ = Lp(I.floating, c.y);
    return a ? {
      ...E,
      transform: "translate(" + M + "px, " + _ + "px)",
      ...$y(I.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: M,
      top: _
    };
  }, [n, a, I.floating, c.x, c.y]);
  return x.useMemo(() => ({
    ...c,
    update: z,
    refs: Y,
    elements: I,
    floatingStyles: O
  }), [c, z, Y, I, O]);
}
const $C = (e) => {
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
      return r && t(r) ? r.current != null ? jp({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? jp({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, UC = (e, t) => ({
  ...MC(e),
  options: [e, t]
}), WC = (e, t) => ({
  ...jC(e),
  options: [e, t]
}), HC = (e, t) => ({
  ...OC(e),
  options: [e, t]
}), KC = (e, t) => ({
  ...LC(e),
  options: [e, t]
}), GC = (e, t) => ({
  ..._C(e),
  options: [e, t]
}), YC = (e, t) => ({
  ...IC(e),
  options: [e, t]
}), XC = (e, t) => ({
  ...$C(e),
  options: [e, t]
});
var QC = "Arrow", Uy = x.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ h.jsx(
    Q.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ h.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Uy.displayName = QC;
var ZC = Uy;
function qC(e) {
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
var md = "Popper", [Wy, Hy] = so(md), [JC, Ky] = Wy(md), Gy = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = x.useState(null);
  return /* @__PURE__ */ h.jsx(JC, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Gy.displayName = md;
var Yy = "PopperAnchor", Xy = x.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = Ky(Yy, n), i = x.useRef(null), a = ye(t, i);
    return x.useEffect(() => {
      s.onAnchorChange((r == null ? void 0 : r.current) || i.current);
    }), r ? null : /* @__PURE__ */ h.jsx(Q.div, { ...o, ref: a });
  }
);
Xy.displayName = Yy;
var gd = "PopperContent", [eb, tb] = Wy(gd), Qy = x.forwardRef(
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
      updatePositionStrategy: m = "optimized",
      onPlaced: w,
      ...y
    } = e, S = Ky(gd, n), [g, p] = x.useState(null), v = ye(t, (Qe) => p(Qe)), [k, C] = x.useState(null), b = qC(k), P = (b == null ? void 0 : b.width) ?? 0, T = (b == null ? void 0 : b.height) ?? 0, N = r + (s !== "center" ? "-" + s : ""), D = typeof c == "number" ? c : { top: 0, right: 0, bottom: 0, left: 0, ...c }, j = Array.isArray(u) ? u : [u], R = j.length > 0, z = {
      padding: D,
      boundary: j.filter(rb),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: R
    }, { refs: B, floatingStyles: Y, placement: I, isPositioned: O, middlewareData: E } = BC({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: N,
      whileElementsMounted: (...Qe) => RC(...Qe, {
        animationFrame: m === "always"
      }),
      elements: {
        reference: S.anchor
      },
      middleware: [
        UC({ mainAxis: o + T, alignmentAxis: i }),
        l && WC({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? HC() : void 0,
          ...z
        }),
        l && KC({ ...z }),
        GC({
          ...z,
          apply: ({ elements: Qe, rects: Nt, availableWidth: fo, availableHeight: po }) => {
            const { width: ho, height: sw } = Nt.reference, Rs = Qe.floating.style;
            Rs.setProperty("--radix-popper-available-width", `${fo}px`), Rs.setProperty("--radix-popper-available-height", `${po}px`), Rs.setProperty("--radix-popper-anchor-width", `${ho}px`), Rs.setProperty("--radix-popper-anchor-height", `${sw}px`);
          }
        }),
        k && XC({ element: k, padding: a }),
        ob({ arrowWidth: P, arrowHeight: T }),
        f && YC({ strategy: "referenceHidden", ...z })
      ]
    }), [M, _] = Jy(I), $ = An(w);
    Ve(() => {
      O && ($ == null || $());
    }, [O, $]);
    const ae = (V = E.arrow) == null ? void 0 : V.x, Et = (ne = E.arrow) == null ? void 0 : ne.y, Re = ((Me = E.arrow) == null ? void 0 : Me.centerOffset) !== 0, [Dt, ze] = x.useState();
    return Ve(() => {
      g && ze(window.getComputedStyle(g).zIndex);
    }, [g]), /* @__PURE__ */ h.jsx(
      "div",
      {
        ref: B.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Y,
          transform: O ? Y.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Dt,
          "--radix-popper-transform-origin": [
            (ee = E.transformOrigin) == null ? void 0 : ee.x,
            (q = E.transformOrigin) == null ? void 0 : q.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((J = E.hide) == null ? void 0 : J.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ h.jsx(
          eb,
          {
            scope: n,
            placedSide: M,
            onArrowChange: C,
            arrowX: ae,
            arrowY: Et,
            shouldHideArrow: Re,
            children: /* @__PURE__ */ h.jsx(
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
Qy.displayName = gd;
var Zy = "PopperArrow", nb = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, qy = x.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = tb(Zy, r), i = nb[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ h.jsx(
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
        children: /* @__PURE__ */ h.jsx(
          ZC,
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
qy.displayName = Zy;
function rb(e) {
  return e !== null;
}
var ob = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var S, g, p;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((S = o.arrow) == null ? void 0 : S.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, c] = Jy(n), d = { start: "0%", center: "50%", end: "100%" }[c], f = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + a / 2, m = (((p = o.arrow) == null ? void 0 : p.y) ?? 0) + l / 2;
    let w = "", y = "";
    return u === "bottom" ? (w = i ? d : `${f}px`, y = `${-l}px`) : u === "top" ? (w = i ? d : `${f}px`, y = `${r.floating.height + l}px`) : u === "right" ? (w = `${-l}px`, y = i ? d : `${m}px`) : u === "left" && (w = `${r.floating.width + l}px`, y = i ? d : `${m}px`), { data: { x: w, y } };
  }
});
function Jy(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var sb = Gy, ib = Xy, ab = Qy, lb = qy, ub = "Portal", yd = x.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, s] = x.useState(!1);
  Ve(() => s(!0), []);
  const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return i ? MS.createPortal(/* @__PURE__ */ h.jsx(Q.div, { ...r, ref: t }), i) : null;
});
yd.displayName = ub;
var cb = gm[" useInsertionEffect ".trim().toString()] || Ve;
function ps({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, i] = db({
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
        const f = fb(c) ? c(e) : c;
        f !== e && ((d = i.current) == null || d.call(i, f));
      } else
        s(c);
    },
    [a, e, s, i]
  );
  return [l, u];
}
function db({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = x.useState(e), o = x.useRef(n), s = x.useRef(t);
  return cb(() => {
    s.current = t;
  }, [t]), x.useEffect(() => {
    var i;
    o.current !== n && ((i = s.current) == null || i.call(s, n), o.current = n);
  }, [n, o]), [n, r, s];
}
function fb(e) {
  return typeof e == "function";
}
function pb(e) {
  const t = x.useRef({ value: e, previous: e });
  return x.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var ev = Object.freeze({
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
}), hb = "VisuallyHidden", mb = x.forwardRef(
  (e, t) => /* @__PURE__ */ h.jsx(
    Q.span,
    {
      ...e,
      ref: t,
      style: { ...ev, ...e.style }
    }
  )
);
mb.displayName = hb;
var gb = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, pr = /* @__PURE__ */ new WeakMap(), Qs = /* @__PURE__ */ new WeakMap(), Zs = {}, Sl = 0, tv = function(e) {
  return e && (e.host || tv(e.parentNode));
}, yb = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = tv(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, vb = function(e, t, n, r) {
  var o = yb(t, Array.isArray(e) ? e : [e]);
  Zs[n] || (Zs[n] = /* @__PURE__ */ new WeakMap());
  var s = Zs[n], i = [], a = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || a.has(d) || (a.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (a.has(f))
        c(f);
      else
        try {
          var m = f.getAttribute(r), w = m !== null && m !== "false", y = (pr.get(f) || 0) + 1, S = (s.get(f) || 0) + 1;
          pr.set(f, y), s.set(f, S), i.push(f), y === 1 && w && Qs.set(f, !0), S === 1 && f.setAttribute(n, "true"), w || f.setAttribute(r, "true");
        } catch (g) {
          console.error("aria-hidden: cannot operate on ", f, g);
        }
    });
  };
  return c(t), a.clear(), Sl++, function() {
    i.forEach(function(d) {
      var f = pr.get(d) - 1, m = s.get(d) - 1;
      pr.set(d, f), s.set(d, m), f || (Qs.has(d) || d.removeAttribute(r), Qs.delete(d)), m || d.removeAttribute(n);
    }), Sl--, Sl || (pr = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap(), Qs = /* @__PURE__ */ new WeakMap(), Zs = {});
  };
}, nv = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = gb(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), vb(r, o, n, "aria-hidden")) : function() {
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
function rv(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function xb(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var bi = "right-scroll-bar-position", Pi = "width-before-scroll-bar", wb = "with-scroll-bars-hidden", Sb = "--removed-body-scroll-bar-size";
function kl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function kb(e, t) {
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
var Cb = typeof window < "u" ? x.useLayoutEffect : x.useEffect, _p = /* @__PURE__ */ new WeakMap();
function bb(e, t) {
  var n = kb(null, function(r) {
    return e.forEach(function(o) {
      return kl(o, r);
    });
  });
  return Cb(function() {
    var r = _p.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || kl(a, null);
      }), s.forEach(function(a) {
        o.has(a) || kl(a, i);
      });
    }
    _p.set(n, e);
  }, [e]), n;
}
function Pb(e) {
  return e;
}
function Tb(e, t) {
  t === void 0 && (t = Pb);
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
function Eb(e) {
  e === void 0 && (e = {});
  var t = Tb(null);
  return t.options = jt({ async: !0, ssr: !1 }, e), t;
}
var ov = function(e) {
  var t = e.sideCar, n = rv(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return x.createElement(r, jt({}, n));
};
ov.isSideCarExport = !0;
function Db(e, t) {
  return e.useMedium(t), ov;
}
var sv = Eb(), Cl = function() {
}, Ra = x.forwardRef(function(e, t) {
  var n = x.useRef(null), r = x.useState({
    onScrollCapture: Cl,
    onWheelCapture: Cl,
    onTouchMoveCapture: Cl
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, m = e.noRelative, w = e.noIsolation, y = e.inert, S = e.allowPinchZoom, g = e.as, p = g === void 0 ? "div" : g, v = e.gapMode, k = rv(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = f, b = bb([n, t]), P = jt(jt({}, k), o);
  return x.createElement(
    x.Fragment,
    null,
    c && x.createElement(C, { sideCar: sv, removeScrollBar: u, shards: d, noRelative: m, noIsolation: w, inert: y, setCallbacks: s, allowPinchZoom: !!S, lockRef: n, gapMode: v }),
    i ? x.cloneElement(x.Children.only(a), jt(jt({}, P), { ref: b })) : x.createElement(p, jt({}, P, { className: l, ref: b }), a)
  );
});
Ra.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ra.classNames = {
  fullWidth: Pi,
  zeroRight: bi
};
var Nb = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Ab() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Nb();
  return t && e.setAttribute("nonce", t), e;
}
function Rb(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Mb(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var jb = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Ab()) && (Rb(t, n), Mb(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Lb = function() {
  var e = jb();
  return function(t, n) {
    x.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, iv = function() {
  var e = Lb(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, _b = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, bl = function(e) {
  return parseInt(e || "", 10) || 0;
}, Ib = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [bl(n), bl(r), bl(o)];
}, Ob = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return _b;
  var t = Ib(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Fb = iv(), Br = "data-scroll-locked", Vb = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(wb, ` {
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
  
  .`).concat(bi, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Pi, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(bi, " .").concat(bi, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Pi, " .").concat(Pi, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Br, `] {
    `).concat(Sb, ": ").concat(a, `px;
  }
`);
}, Ip = function() {
  var e = parseInt(document.body.getAttribute(Br) || "0", 10);
  return isFinite(e) ? e : 0;
}, zb = function() {
  x.useEffect(function() {
    return document.body.setAttribute(Br, (Ip() + 1).toString()), function() {
      var e = Ip() - 1;
      e <= 0 ? document.body.removeAttribute(Br) : document.body.setAttribute(Br, e.toString());
    };
  }, []);
}, Bb = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  zb();
  var s = x.useMemo(function() {
    return Ob(o);
  }, [o]);
  return x.createElement(Fb, { styles: Vb(s, !t, o, n ? "" : "!important") });
}, Fu = !1;
if (typeof window < "u")
  try {
    var qs = Object.defineProperty({}, "passive", {
      get: function() {
        return Fu = !0, !0;
      }
    });
    window.addEventListener("test", qs, qs), window.removeEventListener("test", qs, qs);
  } catch {
    Fu = !1;
  }
var hr = Fu ? { passive: !1 } : !1, $b = function(e) {
  return e.tagName === "TEXTAREA";
}, av = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !$b(e) && n[t] === "visible")
  );
}, Ub = function(e) {
  return av(e, "overflowY");
}, Wb = function(e) {
  return av(e, "overflowX");
}, Op = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = lv(e, r);
    if (o) {
      var s = uv(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Hb = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Kb = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, lv = function(e, t) {
  return e === "v" ? Ub(t) : Wb(t);
}, uv = function(e, t) {
  return e === "v" ? Hb(t) : Kb(t);
}, Gb = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Yb = function(e, t, n, r, o) {
  var s = Gb(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, l = t.contains(a), u = !1, c = i > 0, d = 0, f = 0;
  do {
    if (!a)
      break;
    var m = uv(e, a), w = m[0], y = m[1], S = m[2], g = y - S - s * w;
    (w || g) && lv(e, a) && (d += g, f += w);
    var p = a.parentNode;
    a = p && p.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? p.host : p;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (c && Math.abs(d) < 1 || !c && Math.abs(f) < 1) && (u = !0), u;
}, Js = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Fp = function(e) {
  return [e.deltaX, e.deltaY];
}, Vp = function(e) {
  return e && "current" in e ? e.current : e;
}, Xb = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Qb = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Zb = 0, mr = [];
function qb(e) {
  var t = x.useRef([]), n = x.useRef([0, 0]), r = x.useRef(), o = x.useState(Zb++)[0], s = x.useState(iv)[0], i = x.useRef(e);
  x.useEffect(function() {
    i.current = e;
  }, [e]), x.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var y = xb([e.lockRef.current], (e.shards || []).map(Vp), !0).filter(Boolean);
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
    var g = Js(y), p = n.current, v = "deltaX" in y ? y.deltaX : p[0] - g[0], k = "deltaY" in y ? y.deltaY : p[1] - g[1], C, b = y.target, P = Math.abs(v) > Math.abs(k) ? "h" : "v";
    if ("touches" in y && P === "h" && b.type === "range")
      return !1;
    var T = Op(P, b);
    if (!T)
      return !0;
    if (T ? C = P : (C = P === "v" ? "h" : "v", T = Op(P, b)), !T)
      return !1;
    if (!r.current && "changedTouches" in y && (v || k) && (r.current = C), !C)
      return !0;
    var N = r.current || C;
    return Yb(N, S, y, N === "h" ? v : k);
  }, []), l = x.useCallback(function(y) {
    var S = y;
    if (!(!mr.length || mr[mr.length - 1] !== s)) {
      var g = "deltaY" in S ? Fp(S) : Js(S), p = t.current.filter(function(C) {
        return C.name === S.type && (C.target === S.target || S.target === C.shadowParent) && Xb(C.delta, g);
      })[0];
      if (p && p.should) {
        S.cancelable && S.preventDefault();
        return;
      }
      if (!p) {
        var v = (i.current.shards || []).map(Vp).filter(Boolean).filter(function(C) {
          return C.contains(S.target);
        }), k = v.length > 0 ? a(S, v[0]) : !i.current.noIsolation;
        k && S.cancelable && S.preventDefault();
      }
    }
  }, []), u = x.useCallback(function(y, S, g, p) {
    var v = { name: y, delta: S, target: g, should: p, shadowParent: Jb(g) };
    t.current.push(v), setTimeout(function() {
      t.current = t.current.filter(function(k) {
        return k !== v;
      });
    }, 1);
  }, []), c = x.useCallback(function(y) {
    n.current = Js(y), r.current = void 0;
  }, []), d = x.useCallback(function(y) {
    u(y.type, Fp(y), y.target, a(y, e.lockRef.current));
  }, []), f = x.useCallback(function(y) {
    u(y.type, Js(y), y.target, a(y, e.lockRef.current));
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
  var m = e.removeScrollBar, w = e.inert;
  return x.createElement(
    x.Fragment,
    null,
    w ? x.createElement(s, { styles: Qb(o) }) : null,
    m ? x.createElement(Bb, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Jb(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const eP = Db(sv, qb);
var vd = x.forwardRef(function(e, t) {
  return x.createElement(Ra, jt({}, e, { ref: t, sideCar: eP }));
});
vd.classNames = Ra.classNames;
var tP = [" ", "Enter", "ArrowUp", "ArrowDown"], nP = [" ", "Enter"], ir = "Select", [Ma, ja, rP] = Ey(ir), [lo, vR] = so(ir, [
  rP,
  Hy
]), La = Hy(), [oP, Fn] = lo(ir), [sP, iP] = lo(ir), cv = (e) => {
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
    required: m,
    form: w
  } = e, y = La(t), [S, g] = x.useState(null), [p, v] = x.useState(null), [k, C] = x.useState(!1), b = sd(u), [P, T] = ps({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: ir
  }), [N, D] = ps({
    prop: i,
    defaultProp: a,
    onChange: l,
    caller: ir
  }), j = x.useRef(null), R = S ? w || !!S.closest("form") : !0, [z, B] = x.useState(/* @__PURE__ */ new Set()), Y = Array.from(z).map((I) => I.props.value).join(";");
  return /* @__PURE__ */ h.jsx(sb, { ...y, children: /* @__PURE__ */ h.jsxs(
    oP,
    {
      required: m,
      scope: t,
      trigger: S,
      onTriggerChange: g,
      valueNode: p,
      onValueNodeChange: v,
      valueNodeHasChildren: k,
      onValueNodeHasChildrenChange: C,
      contentId: Tn(),
      value: N,
      onValueChange: D,
      open: P,
      onOpenChange: T,
      dir: b,
      triggerPointerDownPosRef: j,
      disabled: f,
      children: [
        /* @__PURE__ */ h.jsx(Ma.Provider, { scope: t, children: /* @__PURE__ */ h.jsx(
          sP,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: x.useCallback((I) => {
              B((O) => new Set(O).add(I));
            }, []),
            onNativeOptionRemove: x.useCallback((I) => {
              B((O) => {
                const E = new Set(O);
                return E.delete(I), E;
              });
            }, []),
            children: n
          }
        ) }),
        R ? /* @__PURE__ */ h.jsxs(
          Mv,
          {
            "aria-hidden": !0,
            required: m,
            tabIndex: -1,
            name: c,
            autoComplete: d,
            value: N,
            onChange: (I) => D(I.target.value),
            disabled: f,
            form: w,
            children: [
              N === void 0 ? /* @__PURE__ */ h.jsx("option", { value: "" }) : null,
              Array.from(z)
            ]
          },
          Y
        ) : null
      ]
    }
  ) });
};
cv.displayName = ir;
var dv = "SelectTrigger", fv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = La(n), i = Fn(dv, n), a = i.disabled || r, l = ye(t, i.onTriggerChange), u = ja(n), c = x.useRef("touch"), [d, f, m] = Lv((y) => {
      const S = u().filter((v) => !v.disabled), g = S.find((v) => v.value === i.value), p = _v(S, y, g);
      p !== void 0 && i.onValueChange(p.value);
    }), w = (y) => {
      a || (i.onOpenChange(!0), m()), y && (i.triggerPointerDownPosRef.current = {
        x: Math.round(y.pageX),
        y: Math.round(y.pageY)
      });
    };
    return /* @__PURE__ */ h.jsx(ib, { asChild: !0, ...s, children: /* @__PURE__ */ h.jsx(
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
        "data-placeholder": jv(i.value) ? "" : void 0,
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
          !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && f(y.key), !(S && y.key === " ") && tP.includes(y.key) && (w(), y.preventDefault());
        })
      }
    ) });
  }
);
fv.displayName = dv;
var pv = "SelectValue", hv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: i = "", ...a } = e, l = Fn(pv, n), { onValueNodeHasChildrenChange: u } = l, c = s !== void 0, d = ye(t, l.onValueNodeChange);
    return Ve(() => {
      u(c);
    }, [u, c]), /* @__PURE__ */ h.jsx(
      Q.span,
      {
        ...a,
        ref: d,
        style: { pointerEvents: "none" },
        children: jv(l.value) ? /* @__PURE__ */ h.jsx(h.Fragment, { children: i }) : s
      }
    );
  }
);
hv.displayName = pv;
var aP = "SelectIcon", mv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ h.jsx(Q.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
mv.displayName = aP;
var lP = "SelectPortal", gv = (e) => /* @__PURE__ */ h.jsx(yd, { asChild: !0, ...e });
gv.displayName = lP;
var ar = "SelectContent", yv = x.forwardRef(
  (e, t) => {
    const n = Fn(ar, e.__scopeSelect), [r, o] = x.useState();
    if (Ve(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? ro.createPortal(
        /* @__PURE__ */ h.jsx(vv, { scope: e.__scopeSelect, children: /* @__PURE__ */ h.jsx(Ma.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ h.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ h.jsx(xv, { ...e, ref: t });
  }
);
yv.displayName = ar;
var gt = 10, [vv, Vn] = lo(ar), uP = "SelectContentImpl", cP = /* @__PURE__ */ cs("SelectContent.RemoveScroll"), xv = x.forwardRef(
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
      collisionPadding: m,
      sticky: w,
      hideWhenDetached: y,
      avoidCollisions: S,
      //
      ...g
    } = e, p = Fn(ar, n), [v, k] = x.useState(null), [C, b] = x.useState(null), P = ye(t, (V) => k(V)), [T, N] = x.useState(null), [D, j] = x.useState(
      null
    ), R = ja(n), [z, B] = x.useState(!1), Y = x.useRef(!1);
    x.useEffect(() => {
      if (v) return nv(v);
    }, [v]), Ay();
    const I = x.useCallback(
      (V) => {
        const [ne, ...Me] = R().map((J) => J.ref.current), [ee] = Me.slice(-1), q = document.activeElement;
        for (const J of V)
          if (J === q || (J == null || J.scrollIntoView({ block: "nearest" }), J === ne && C && (C.scrollTop = 0), J === ee && C && (C.scrollTop = C.scrollHeight), J == null || J.focus(), document.activeElement !== q)) return;
      },
      [R, C]
    ), O = x.useCallback(
      () => I([T, v]),
      [I, T, v]
    );
    x.useEffect(() => {
      z && O();
    }, [z, O]);
    const { onOpenChange: E, triggerPointerDownPosRef: M } = p;
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
          V.x <= 10 && V.y <= 10 ? ee.preventDefault() : v.contains(ee.target) || E(!1), document.removeEventListener("pointermove", ne), M.current = null;
        };
        return M.current !== null && (document.addEventListener("pointermove", ne), document.addEventListener("pointerup", Me, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", ne), document.removeEventListener("pointerup", Me, { capture: !0 });
        };
      }
    }, [v, E, M]), x.useEffect(() => {
      const V = () => E(!1);
      return window.addEventListener("blur", V), window.addEventListener("resize", V), () => {
        window.removeEventListener("blur", V), window.removeEventListener("resize", V);
      };
    }, [E]);
    const [_, $] = Lv((V) => {
      const ne = R().filter((q) => !q.disabled), Me = ne.find((q) => q.ref.current === document.activeElement), ee = _v(ne, V, Me);
      ee && setTimeout(() => ee.ref.current.focus());
    }), ae = x.useCallback(
      (V, ne, Me) => {
        const ee = !Y.current && !Me;
        (p.value !== void 0 && p.value === ne || ee) && (N(V), ee && (Y.current = !0));
      },
      [p.value]
    ), Et = x.useCallback(() => v == null ? void 0 : v.focus(), [v]), Re = x.useCallback(
      (V, ne, Me) => {
        const ee = !Y.current && !Me;
        (p.value !== void 0 && p.value === ne || ee) && j(V);
      },
      [p.value]
    ), Dt = r === "popper" ? Vu : wv, ze = Dt === Vu ? {
      side: a,
      sideOffset: l,
      align: u,
      alignOffset: c,
      arrowPadding: d,
      collisionBoundary: f,
      collisionPadding: m,
      sticky: w,
      hideWhenDetached: y,
      avoidCollisions: S
    } : {};
    return /* @__PURE__ */ h.jsx(
      vv,
      {
        scope: n,
        content: v,
        viewport: C,
        onViewportChange: b,
        itemRefCallback: ae,
        selectedItem: T,
        onItemLeave: Et,
        itemTextRefCallback: Re,
        focusSelectedItem: O,
        selectedItemText: D,
        position: r,
        isPositioned: z,
        searchRef: _,
        children: /* @__PURE__ */ h.jsx(vd, { as: cP, allowPinchZoom: !0, children: /* @__PURE__ */ h.jsx(
          ad,
          {
            asChild: !0,
            trapped: p.open,
            onMountAutoFocus: (V) => {
              V.preventDefault();
            },
            onUnmountAutoFocus: G(o, (V) => {
              var ne;
              (ne = p.trigger) == null || ne.focus({ preventScroll: !0 }), V.preventDefault();
            }),
            children: /* @__PURE__ */ h.jsx(
              id,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: (V) => V.preventDefault(),
                onDismiss: () => p.onOpenChange(!1),
                children: /* @__PURE__ */ h.jsx(
                  Dt,
                  {
                    role: "listbox",
                    id: p.contentId,
                    "data-state": p.open ? "open" : "closed",
                    dir: p.dir,
                    onContextMenu: (V) => V.preventDefault(),
                    ...g,
                    ...ze,
                    onPlaced: () => B(!0),
                    ref: P,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...g.style
                    },
                    onKeyDown: G(g.onKeyDown, (V) => {
                      const ne = V.ctrlKey || V.altKey || V.metaKey;
                      if (V.key === "Tab" && V.preventDefault(), !ne && V.key.length === 1 && $(V.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(V.key)) {
                        let ee = R().filter((q) => !q.disabled).map((q) => q.ref.current);
                        if (["ArrowUp", "End"].includes(V.key) && (ee = ee.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(V.key)) {
                          const q = V.target, J = ee.indexOf(q);
                          ee = ee.slice(J + 1);
                        }
                        setTimeout(() => I(ee)), V.preventDefault();
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
xv.displayName = uP;
var dP = "SelectItemAlignedPosition", wv = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = Fn(ar, n), i = Vn(ar, n), [a, l] = x.useState(null), [u, c] = x.useState(null), d = ye(t, (P) => c(P)), f = ja(n), m = x.useRef(!1), w = x.useRef(!0), { viewport: y, selectedItem: S, selectedItemText: g, focusSelectedItem: p } = i, v = x.useCallback(() => {
    if (s.trigger && s.valueNode && a && u && y && S && g) {
      const P = s.trigger.getBoundingClientRect(), T = u.getBoundingClientRect(), N = s.valueNode.getBoundingClientRect(), D = g.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const q = D.left - T.left, J = N.left - q, Qe = P.left - J, Nt = P.width + Qe, fo = Math.max(Nt, T.width), po = window.innerWidth - gt, ho = gp(J, [
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
        const q = T.right - D.right, J = window.innerWidth - N.right - q, Qe = window.innerWidth - P.right - J, Nt = P.width + Qe, fo = Math.max(Nt, T.width), po = window.innerWidth - gt, ho = gp(J, [
          gt,
          Math.max(gt, po - fo)
        ]);
        a.style.minWidth = Nt + "px", a.style.right = ho + "px";
      }
      const j = f(), R = window.innerHeight - gt * 2, z = y.scrollHeight, B = window.getComputedStyle(u), Y = parseInt(B.borderTopWidth, 10), I = parseInt(B.paddingTop, 10), O = parseInt(B.borderBottomWidth, 10), E = parseInt(B.paddingBottom, 10), M = Y + I + z + E + O, _ = Math.min(S.offsetHeight * 5, M), $ = window.getComputedStyle(y), ae = parseInt($.paddingTop, 10), Et = parseInt($.paddingBottom, 10), Re = P.top + P.height / 2 - gt, Dt = R - Re, ze = S.offsetHeight / 2, V = S.offsetTop + ze, ne = Y + I + V, Me = M - ne;
      if (ne <= Re) {
        const q = j.length > 0 && S === j[j.length - 1].ref.current;
        a.style.bottom = "0px";
        const J = u.clientHeight - y.offsetTop - y.offsetHeight, Qe = Math.max(
          Dt,
          ze + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (q ? Et : 0) + J + O
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
      a.style.margin = `${gt}px 0`, a.style.minHeight = _ + "px", a.style.maxHeight = R + "px", r == null || r(), requestAnimationFrame(() => m.current = !0);
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
  Ve(() => v(), [v]);
  const [k, C] = x.useState();
  Ve(() => {
    u && C(window.getComputedStyle(u).zIndex);
  }, [u]);
  const b = x.useCallback(
    (P) => {
      P && w.current === !0 && (v(), p == null || p(), w.current = !1);
    },
    [v, p]
  );
  return /* @__PURE__ */ h.jsx(
    pP,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: m,
      onScrollButtonChange: b,
      children: /* @__PURE__ */ h.jsx(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: k
          },
          children: /* @__PURE__ */ h.jsx(
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
wv.displayName = dP;
var fP = "SelectPopperPosition", Vu = x.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = gt,
    ...s
  } = e, i = La(n);
  return /* @__PURE__ */ h.jsx(
    ab,
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
Vu.displayName = fP;
var [pP, xd] = lo(ar, {}), zu = "SelectViewport", Sv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = Vn(zu, n), i = xd(zu, n), a = ye(t, s.onViewportChange), l = x.useRef(0);
    return /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
      /* @__PURE__ */ h.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ h.jsx(Ma.Slot, { scope: n, children: /* @__PURE__ */ h.jsx(
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
              const m = Math.abs(l.current - c.scrollTop);
              if (m > 0) {
                const w = window.innerHeight - gt * 2, y = parseFloat(d.style.minHeight), S = parseFloat(d.style.height), g = Math.max(y, S);
                if (g < w) {
                  const p = g + m, v = Math.min(w, p), k = p - v;
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
Sv.displayName = zu;
var kv = "SelectGroup", [hP, mP] = lo(kv), gP = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Tn();
    return /* @__PURE__ */ h.jsx(hP, { scope: n, id: o, children: /* @__PURE__ */ h.jsx(Q.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
gP.displayName = kv;
var Cv = "SelectLabel", yP = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = mP(Cv, n);
    return /* @__PURE__ */ h.jsx(Q.div, { id: o.id, ...r, ref: t });
  }
);
yP.displayName = Cv;
var ra = "SelectItem", [vP, bv] = lo(ra), Pv = x.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...i
    } = e, a = Fn(ra, n), l = Vn(ra, n), u = a.value === r, [c, d] = x.useState(s ?? ""), [f, m] = x.useState(!1), w = ye(
      t,
      (p) => {
        var v;
        return (v = l.itemRefCallback) == null ? void 0 : v.call(l, p, r, o);
      }
    ), y = Tn(), S = x.useRef("touch"), g = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ h.jsx(
      vP,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: y,
        isSelected: u,
        onItemTextChange: x.useCallback((p) => {
          d((v) => v || ((p == null ? void 0 : p.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ h.jsx(
          Ma.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: c,
            children: /* @__PURE__ */ h.jsx(
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
                onFocus: G(i.onFocus, () => m(!0)),
                onBlur: G(i.onBlur, () => m(!1)),
                onClick: G(i.onClick, () => {
                  S.current !== "mouse" && g();
                }),
                onPointerUp: G(i.onPointerUp, () => {
                  S.current === "mouse" && g();
                }),
                onPointerDown: G(i.onPointerDown, (p) => {
                  S.current = p.pointerType;
                }),
                onPointerMove: G(i.onPointerMove, (p) => {
                  var v;
                  S.current = p.pointerType, o ? (v = l.onItemLeave) == null || v.call(l) : S.current === "mouse" && p.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: G(i.onPointerLeave, (p) => {
                  var v;
                  p.currentTarget === document.activeElement && ((v = l.onItemLeave) == null || v.call(l));
                }),
                onKeyDown: G(i.onKeyDown, (p) => {
                  var k;
                  ((k = l.searchRef) == null ? void 0 : k.current) !== "" && p.key === " " || (nP.includes(p.key) && g(), p.key === " " && p.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Pv.displayName = ra;
var Ao = "SelectItemText", Tv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, i = Fn(Ao, n), a = Vn(Ao, n), l = bv(Ao, n), u = iP(Ao, n), [c, d] = x.useState(null), f = ye(
      t,
      (g) => d(g),
      l.onItemTextChange,
      (g) => {
        var p;
        return (p = a.itemTextRefCallback) == null ? void 0 : p.call(a, g, l.value, l.disabled);
      }
    ), m = c == null ? void 0 : c.textContent, w = x.useMemo(
      () => /* @__PURE__ */ h.jsx("option", { value: l.value, disabled: l.disabled, children: m }, l.value),
      [l.disabled, l.value, m]
    ), { onNativeOptionAdd: y, onNativeOptionRemove: S } = u;
    return Ve(() => (y(w), () => S(w)), [y, S, w]), /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
      /* @__PURE__ */ h.jsx(Q.span, { id: l.textId, ...s, ref: f }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? ro.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
Tv.displayName = Ao;
var Ev = "SelectItemIndicator", Dv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return bv(Ev, n).isSelected ? /* @__PURE__ */ h.jsx(Q.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Dv.displayName = Ev;
var Bu = "SelectScrollUpButton", Nv = x.forwardRef((e, t) => {
  const n = Vn(Bu, e.__scopeSelect), r = xd(Bu, e.__scopeSelect), [o, s] = x.useState(!1), i = ye(t, r.onScrollButtonChange);
  return Ve(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = l.scrollTop > 0;
        s(u);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ h.jsx(
    Rv,
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
Nv.displayName = Bu;
var $u = "SelectScrollDownButton", Av = x.forwardRef((e, t) => {
  const n = Vn($u, e.__scopeSelect), r = xd($u, e.__scopeSelect), [o, s] = x.useState(!1), i = ye(t, r.onScrollButtonChange);
  return Ve(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = l.scrollHeight - l.clientHeight, c = Math.ceil(l.scrollTop) < u;
        s(c);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ h.jsx(
    Rv,
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
Av.displayName = $u;
var Rv = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = Vn("SelectScrollButton", n), i = x.useRef(null), a = ja(n), l = x.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return x.useEffect(() => () => l(), [l]), Ve(() => {
    var c;
    const u = a().find((d) => d.ref.current === document.activeElement);
    (c = u == null ? void 0 : u.ref.current) == null || c.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ h.jsx(
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
}), xP = "SelectSeparator", wP = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ h.jsx(Q.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
wP.displayName = xP;
var Uu = "SelectArrow", SP = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = La(n), s = Fn(Uu, n), i = Vn(Uu, n);
    return s.open && i.position === "popper" ? /* @__PURE__ */ h.jsx(lb, { ...o, ...r, ref: t }) : null;
  }
);
SP.displayName = Uu;
var kP = "SelectBubbleInput", Mv = x.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = x.useRef(null), s = ye(r, o), i = pb(t);
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
    }, [i, t]), /* @__PURE__ */ h.jsx(
      Q.select,
      {
        ...n,
        style: { ...ev, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
Mv.displayName = kP;
function jv(e) {
  return e === "" || e === void 0;
}
function Lv(e) {
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
function _v(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = CP(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function CP(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var bP = cv, PP = fv, TP = hv, EP = mv, DP = gv, NP = yv, AP = Sv, RP = Pv, MP = Tv, jP = Dv, LP = Nv, _P = Av;
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IP = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Iv = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var OP = {
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
const FP = x.forwardRef(
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
      ...OP,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Iv("lucide", o),
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
    ({ className: r, ...o }, s) => x.createElement(FP, {
      ref: s,
      iconNode: t,
      className: Iv(`lucide-${IP(e)}`, r),
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
const Ov = Ae("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fv = Ae("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const VP = Ae("Building2", [
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
const zP = Ae("Building", [
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
const Pl = Ae("Calendar", [
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
const BP = Ae("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vv = Ae("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zv = Ae("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bv = Ae("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $P = Ae("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UP = Ae("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WP = Ae("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zp = Ae("List", [
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
const HP = Ae("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $v = Ae("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KP = Ae("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function ei({
  ...e
}) {
  return /* @__PURE__ */ h.jsx(bP, { "data-slot": "select", ...e });
}
function ti({
  ...e
}) {
  return /* @__PURE__ */ h.jsx(TP, { "data-slot": "select-value", ...e });
}
function ni({
  className: e,
  size: t = "default",
  children: n,
  ...r
}) {
  return /* @__PURE__ */ h.jsxs(
    PP,
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
        /* @__PURE__ */ h.jsx(EP, { asChild: !0, children: /* @__PURE__ */ h.jsx(Vv, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function ri({
  className: e,
  children: t,
  position: n = "popper",
  ...r
}) {
  return /* @__PURE__ */ h.jsx(DP, { children: /* @__PURE__ */ h.jsxs(
    NP,
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
        /* @__PURE__ */ h.jsx(GP, {}),
        /* @__PURE__ */ h.jsx(
          AP,
          {
            className: ge(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ h.jsx(YP, {})
      ]
    }
  ) });
}
function pe({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ h.jsxs(
    RP,
    {
      "data-slot": "select-item",
      className: ge(
        "focus:bg-gray-100 focus:text-gray-900 hover:bg-gray-50 text-gray-900 relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ h.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ h.jsx(jP, { children: /* @__PURE__ */ h.jsx(BP, { className: "size-4" }) }) }),
        /* @__PURE__ */ h.jsx(MP, { children: t })
      ]
    }
  );
}
function GP({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ h.jsx(
    LP,
    {
      "data-slot": "select-scroll-up-button",
      className: ge(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ h.jsx($P, { className: "size-4" })
    }
  );
}
function YP({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ h.jsx(
    _P,
    {
      "data-slot": "select-scroll-down-button",
      className: ge(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ h.jsx(Vv, { className: "size-4" })
    }
  );
}
const Wu = x.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ h.jsx(
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
Wu.displayName = "Input";
var Tl = "rovingFocusGroup.onEntryFocus", XP = { bubbles: !1, cancelable: !0 }, Ps = "RovingFocusGroup", [Hu, Uv, QP] = Ey(Ps), [ZP, Wv] = so(
  Ps,
  [QP]
), [qP, JP] = ZP(Ps), Hv = x.forwardRef(
  (e, t) => /* @__PURE__ */ h.jsx(Hu.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ h.jsx(Hu.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ h.jsx(eT, { ...e, ref: t }) }) })
);
Hv.displayName = Ps;
var eT = x.forwardRef((e, t) => {
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
  } = e, f = x.useRef(null), m = ye(t, f), w = sd(s), [y, S] = ps({
    prop: i,
    defaultProp: a ?? null,
    onChange: l,
    caller: Ps
  }), [g, p] = x.useState(!1), v = An(u), k = Uv(n), C = x.useRef(!1), [b, P] = x.useState(0);
  return x.useEffect(() => {
    const T = f.current;
    if (T)
      return T.addEventListener(Tl, v), () => T.removeEventListener(Tl, v);
  }, [v]), /* @__PURE__ */ h.jsx(
    qP,
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
      onItemShiftTab: x.useCallback(() => p(!0), []),
      onFocusableItemAdd: x.useCallback(
        () => P((T) => T + 1),
        []
      ),
      onFocusableItemRemove: x.useCallback(
        () => P((T) => T - 1),
        []
      ),
      children: /* @__PURE__ */ h.jsx(
        Q.div,
        {
          tabIndex: g || b === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: m,
          style: { outline: "none", ...e.style },
          onMouseDown: G(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: G(e.onFocus, (T) => {
            const N = !C.current;
            if (T.target === T.currentTarget && N && !g) {
              const D = new CustomEvent(Tl, XP);
              if (T.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                const j = k().filter((I) => I.focusable), R = j.find((I) => I.active), z = j.find((I) => I.id === y), Y = [R, z, ...j].filter(
                  Boolean
                ).map((I) => I.ref.current);
                Yv(Y, c);
              }
            }
            C.current = !1;
          }),
          onBlur: G(e.onBlur, () => p(!1))
        }
      )
    }
  );
}), Kv = "RovingFocusGroupItem", Gv = x.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: i,
      ...a
    } = e, l = Tn(), u = s || l, c = JP(Kv, n), d = c.currentTabStopId === u, f = Uv(n), { onFocusableItemAdd: m, onFocusableItemRemove: w, currentTabStopId: y } = c;
    return x.useEffect(() => {
      if (r)
        return m(), () => w();
    }, [r, m, w]), /* @__PURE__ */ h.jsx(
      Hu.ItemSlot,
      {
        scope: n,
        id: u,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ h.jsx(
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
              const g = rT(S, c.orientation, c.dir);
              if (g !== void 0) {
                if (S.metaKey || S.ctrlKey || S.altKey || S.shiftKey) return;
                S.preventDefault();
                let v = f().filter((k) => k.focusable).map((k) => k.ref.current);
                if (g === "last") v.reverse();
                else if (g === "prev" || g === "next") {
                  g === "prev" && v.reverse();
                  const k = v.indexOf(S.currentTarget);
                  v = c.loop ? oT(v, k + 1) : v.slice(k + 1);
                }
                setTimeout(() => Yv(v));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: d, hasTabStop: y != null }) : i
          }
        )
      }
    );
  }
);
Gv.displayName = Kv;
var tT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function nT(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function rT(e, t, n) {
  const r = nT(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return tT[r];
}
function Yv(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function oT(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var sT = Hv, iT = Gv;
function aT(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var Ts = (e) => {
  const { present: t, children: n } = e, r = lT(t), o = typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n), s = ye(r.ref, uT(o));
  return typeof n == "function" || r.isPresent ? x.cloneElement(o, { ref: s }) : null;
};
Ts.displayName = "Presence";
function lT(e) {
  const [t, n] = x.useState(), r = x.useRef(null), o = x.useRef(e), s = x.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = aT(i, {
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
    const u = oi(r.current);
    s.current = a === "mounted" ? u : "none";
  }, [a]), Ve(() => {
    const u = r.current, c = o.current;
    if (c !== e) {
      const f = s.current, m = oi(u);
      e ? l("MOUNT") : m === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Ve(() => {
    if (t) {
      let u;
      const c = t.ownerDocument.defaultView ?? window, d = (m) => {
        const y = oi(r.current).includes(m.animationName);
        if (m.target === t && y && (l("ANIMATION_END"), !o.current)) {
          const S = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = c.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S);
          });
        }
      }, f = (m) => {
        m.target === t && (s.current = oi(r.current));
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
function oi(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function uT(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var _a = "Tabs", [cT, xR] = so(_a, [
  Wv
]), Xv = Wv(), [dT, wd] = cT(_a), Qv = x.forwardRef(
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
    } = e, c = sd(a), [d, f] = ps({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: _a
    });
    return /* @__PURE__ */ h.jsx(
      dT,
      {
        scope: n,
        baseId: Tn(),
        value: d,
        onValueChange: f,
        orientation: i,
        dir: c,
        activationMode: l,
        children: /* @__PURE__ */ h.jsx(
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
Qv.displayName = _a;
var Zv = "TabsList", qv = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = wd(Zv, n), i = Xv(n);
    return /* @__PURE__ */ h.jsx(
      sT,
      {
        asChild: !0,
        ...i,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ h.jsx(
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
qv.displayName = Zv;
var Jv = "TabsTrigger", e0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, i = wd(Jv, n), a = Xv(n), l = r0(i.baseId, r), u = o0(i.baseId, r), c = r === i.value;
    return /* @__PURE__ */ h.jsx(
      iT,
      {
        asChild: !0,
        ...a,
        focusable: !o,
        active: c,
        children: /* @__PURE__ */ h.jsx(
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
e0.displayName = Jv;
var t0 = "TabsContent", n0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...i } = e, a = wd(t0, n), l = r0(a.baseId, r), u = o0(a.baseId, r), c = r === a.value, d = x.useRef(c);
    return x.useEffect(() => {
      const f = requestAnimationFrame(() => d.current = !1);
      return () => cancelAnimationFrame(f);
    }, []), /* @__PURE__ */ h.jsx(Ts, { present: o || c, children: ({ present: f }) => /* @__PURE__ */ h.jsx(
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
n0.displayName = t0;
function r0(e, t) {
  return `${e}-trigger-${t}`;
}
function o0(e, t) {
  return `${e}-content-${t}`;
}
var fT = Qv, pT = qv, hT = e0, mT = n0;
function gT({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ h.jsx(
    fT,
    {
      "data-slot": "tabs",
      className: ge("flex flex-col gap-2", e),
      ...t
    }
  );
}
function Bp({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ h.jsx(
    pT,
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
  return /* @__PURE__ */ h.jsx(
    hT,
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
function si({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ h.jsx(
    mT,
    {
      "data-slot": "tabs-content",
      className: ge("flex-1 outline-none", e),
      ...t
    }
  );
}
class yT {
  constructor() {
    this.baseUrl = "/wp-json/unbc-events/v1";
  }
  async fetchEvents(t = {}) {
    try {
      const n = new URLSearchParams();
      Object.entries(t).forEach(([s, i]) => {
        i != null && i !== "" && n.append(s, i.toString());
      });
      const r = `${this.baseUrl}/events${n.toString() ? "?" + n.toString() : ""}`, o = await fetch(r);
      if (!o.ok)
        throw new Error(`HTTP error! status: ${o.status}`);
      return await o.json();
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
const El = new yT(), fn = /* @__PURE__ */ new Date(), H = fn.getMonth(), K = fn.getFullYear(), $p = [
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
function vT(e = {}) {
  const [t, n] = x.useState([]), [r, o] = x.useState({}), [s, i] = x.useState(!0), [a, l] = x.useState(null), [u, c] = x.useState(0), [d, f] = x.useState(0), [m, w] = x.useState(e), y = x.useCallback(async () => {
    try {
      i(!0), l(null);
      const p = await El.fetchEvents(m), v = [], k = {};
      p.events.forEach((C) => {
        const b = El.transformWordPressEventToEvent(C), P = El.transformWordPressEventToMetadata(C);
        v.push(b), k[b.id] = P;
      }), n(v), o(k), c(p.total), f(p.pages);
    } catch (p) {
      console.warn("Failed to fetch from WordPress, using static data:", p), n($p), o(r), c($p.length), f(1), l("Using static data - WordPress connection failed");
    } finally {
      i(!1);
    }
  }, [m]);
  x.useEffect(() => {
    y();
  }, [y]);
  const S = x.useCallback(() => {
    y();
  }, [y]), g = x.useCallback((p) => {
    w((v) => ({ ...v, ...p }));
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
const xT = {
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
function wT() {
  const [e, t] = x.useState([]), [n, r] = x.useState(!0), [o, s] = x.useState(null);
  return x.useEffect(() => {
    (async () => {
      try {
        r(!0);
        const a = await xT.getAll();
        t(a), s(null);
      } catch (a) {
        s("Failed to load organizations"), console.error("Error fetching organizations:", a);
      } finally {
        r(!1);
      }
    })();
  }, []), { organizations: e, loading: n, error: o };
}
var Ia = "Dialog", [s0, wR] = so(Ia), [ST, Tt] = s0(Ia), i0 = (e) => {
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
    caller: Ia
  });
  return /* @__PURE__ */ h.jsx(
    ST,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: Tn(),
      titleId: Tn(),
      descriptionId: Tn(),
      open: u,
      onOpenChange: c,
      onOpenToggle: x.useCallback(() => c((d) => !d), [c]),
      modal: i,
      children: n
    }
  );
};
i0.displayName = Ia;
var a0 = "DialogTrigger", kT = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Tt(a0, n), s = ye(t, o.triggerRef);
    return /* @__PURE__ */ h.jsx(
      Q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Cd(o.open),
        ...r,
        ref: s,
        onClick: G(e.onClick, o.onOpenToggle)
      }
    );
  }
);
kT.displayName = a0;
var Sd = "DialogPortal", [CT, l0] = s0(Sd, {
  forceMount: void 0
}), u0 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = Tt(Sd, t);
  return /* @__PURE__ */ h.jsx(CT, { scope: t, forceMount: n, children: x.Children.map(r, (i) => /* @__PURE__ */ h.jsx(Ts, { present: n || s.open, children: /* @__PURE__ */ h.jsx(yd, { asChild: !0, container: o, children: i }) })) });
};
u0.displayName = Sd;
var oa = "DialogOverlay", c0 = x.forwardRef(
  (e, t) => {
    const n = l0(oa, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Tt(oa, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ h.jsx(Ts, { present: r || s.open, children: /* @__PURE__ */ h.jsx(PT, { ...o, ref: t }) }) : null;
  }
);
c0.displayName = oa;
var bT = /* @__PURE__ */ cs("DialogOverlay.RemoveScroll"), PT = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Tt(oa, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ h.jsx(vd, { as: bT, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ h.jsx(
        Q.div,
        {
          "data-state": Cd(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), lr = "DialogContent", d0 = x.forwardRef(
  (e, t) => {
    const n = l0(lr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Tt(lr, e.__scopeDialog);
    return /* @__PURE__ */ h.jsx(Ts, { present: r || s.open, children: s.modal ? /* @__PURE__ */ h.jsx(TT, { ...o, ref: t }) : /* @__PURE__ */ h.jsx(ET, { ...o, ref: t }) });
  }
);
d0.displayName = lr;
var TT = x.forwardRef(
  (e, t) => {
    const n = Tt(lr, e.__scopeDialog), r = x.useRef(null), o = ye(t, n.contentRef, r);
    return x.useEffect(() => {
      const s = r.current;
      if (s) return nv(s);
    }, []), /* @__PURE__ */ h.jsx(
      f0,
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
), ET = x.forwardRef(
  (e, t) => {
    const n = Tt(lr, e.__scopeDialog), r = x.useRef(!1), o = x.useRef(!1);
    return /* @__PURE__ */ h.jsx(
      f0,
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
), f0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = Tt(lr, n), l = x.useRef(null), u = ye(t, l);
    return Ay(), /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
      /* @__PURE__ */ h.jsx(
        ad,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ h.jsx(
            id,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": Cd(a.open),
              ...i,
              ref: u,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
        /* @__PURE__ */ h.jsx(DT, { titleId: a.titleId }),
        /* @__PURE__ */ h.jsx(AT, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), kd = "DialogTitle", p0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Tt(kd, n);
    return /* @__PURE__ */ h.jsx(Q.h2, { id: o.titleId, ...r, ref: t });
  }
);
p0.displayName = kd;
var h0 = "DialogDescription", m0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Tt(h0, n);
    return /* @__PURE__ */ h.jsx(Q.p, { id: o.descriptionId, ...r, ref: t });
  }
);
m0.displayName = h0;
var g0 = "DialogClose", y0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Tt(g0, n);
    return /* @__PURE__ */ h.jsx(
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
y0.displayName = g0;
function Cd(e) {
  return e ? "open" : "closed";
}
var v0 = "DialogTitleWarning", [SR, x0] = pk(v0, {
  contentName: lr,
  titleName: kd,
  docsSlug: "dialog"
}), DT = ({ titleId: e }) => {
  const t = x0(v0), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return x.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, NT = "DialogDescriptionWarning", AT = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${x0(NT).contentName}}.`;
  return x.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, RT = i0, MT = u0, w0 = c0, S0 = d0, k0 = p0, C0 = m0, jT = y0;
const LT = RT, _T = MT, b0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  w0,
  {
    ref: n,
    className: ge(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
b0.displayName = w0.displayName;
const P0 = x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.jsxs(_T, { children: [
  /* @__PURE__ */ h.jsx(b0, {}),
  /* @__PURE__ */ h.jsxs(
    S0,
    {
      ref: r,
      className: ge(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ h.jsxs(jT, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ h.jsx(KP, { className: "h-4 w-4" }),
          /* @__PURE__ */ h.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
P0.displayName = S0.displayName;
const T0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ h.jsx(
  "div",
  {
    className: ge(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
T0.displayName = "DialogHeader";
const E0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ h.jsx(
  "div",
  {
    className: ge(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
E0.displayName = "DialogFooter";
const D0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  k0,
  {
    ref: n,
    className: ge(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
D0.displayName = k0.displayName;
const N0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  C0,
  {
    ref: n,
    className: ge("text-sm text-muted-foreground", e),
    ...t
  }
));
N0.displayName = C0.displayName;
const En = x.forwardRef(
  ({ className: e, variant: t = "default", size: n = "default", ...r }, o) => /* @__PURE__ */ h.jsx(
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
En.displayName = "Button";
function Qr({
  className: e,
  variant: t = "default",
  size: n = "default",
  ...r
}) {
  return /* @__PURE__ */ h.jsx(
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
function IT({ event: e, eventMetadata: t, open: n, onOpenChange: r }) {
  if (!e) return null;
  const o = t[e.id], s = (a) => {
    const l = e.startDate, u = e.endDate || new Date(l.getTime() + 60 * 60 * 1e3), c = (f) => f.toISOString().replace(/-|:|\.\d\d\d/g, ""), d = (f) => f.toISOString();
    switch (a) {
      case "google":
        const f = new URL("https://calendar.google.com/calendar/render");
        return f.searchParams.append("action", "TEMPLATE"), f.searchParams.append("text", e.title), f.searchParams.append("dates", `${c(l)}/${c(u)}`), f.searchParams.append("details", e.description || ""), o != null && o.location && f.searchParams.append("location", o.location), f.toString();
      case "outlook":
        const m = new URL("https://outlook.live.com/calendar/0/deeplink/compose");
        return m.searchParams.append("subject", e.title), m.searchParams.append("body", e.description || ""), m.searchParams.append("startdt", d(l)), m.searchParams.append("enddt", d(u)), o != null && o.location && m.searchParams.append("location", o.location), m.toString();
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
  return /* @__PURE__ */ h.jsx(LT, { open: n, onOpenChange: r, children: /* @__PURE__ */ h.jsxs(P0, { className: "max-w-md bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700", children: [
    /* @__PURE__ */ h.jsxs(T0, { children: [
      /* @__PURE__ */ h.jsx(D0, { className: "text-xl text-gray-900 dark:text-gray-100", children: e.title }),
      /* @__PURE__ */ h.jsx(N0, { className: "mt-2 text-gray-600 dark:text-gray-400", children: e.description })
    ] }),
    /* @__PURE__ */ h.jsx("div", { className: "space-y-4 my-4", children: /* @__PURE__ */ h.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
        /* @__PURE__ */ h.jsx(UP, { className: "h-4 w-4 text-gray-500 dark:text-gray-400" }),
        /* @__PURE__ */ h.jsxs("div", { children: [
          /* @__PURE__ */ h.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100", children: e.startDate.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          }) }),
          /* @__PURE__ */ h.jsxs("div", { className: "text-gray-600 dark:text-gray-400", children: [
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
      o && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
        /* @__PURE__ */ h.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ h.jsx($v, { className: "h-4 w-4 text-gray-500 dark:text-gray-400" }),
          /* @__PURE__ */ h.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: o.location })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ h.jsx(VP, { className: "h-4 w-4 text-gray-500 dark:text-gray-400" }),
          /* @__PURE__ */ h.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: o.organization })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ h.jsx(WP, { className: "h-4 w-4 text-gray-500 dark:text-gray-400" }),
          /* @__PURE__ */ h.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: o.cost })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ h.jsx(Qr, { className: i[o.category] || "bg-gray-100 text-gray-800", children: o.category.charAt(0).toUpperCase() + o.category.slice(1) }),
          o.registrationRequired && /* @__PURE__ */ h.jsx(Qr, { variant: "outline", className: "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300", children: "Registration Required" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ h.jsxs(E0, { className: "flex-col sm:flex-col gap-2", children: [
      /* @__PURE__ */ h.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400 mb-2", children: "Add to your calendar:" }),
      /* @__PURE__ */ h.jsxs("div", { className: "flex gap-2 w-full", children: [
        /* @__PURE__ */ h.jsxs(
          En,
          {
            variant: "outline",
            className: "flex-1",
            onClick: () => window.open(s("google"), "_blank"),
            children: [
              /* @__PURE__ */ h.jsx(Pl, { className: "h-4 w-4 mr-2" }),
              "Google"
            ]
          }
        ),
        /* @__PURE__ */ h.jsxs(
          En,
          {
            variant: "outline",
            className: "flex-1",
            onClick: () => window.open(s("outlook"), "_blank"),
            children: [
              /* @__PURE__ */ h.jsx(Pl, { className: "h-4 w-4 mr-2" }),
              "Outlook"
            ]
          }
        ),
        /* @__PURE__ */ h.jsxs(
          En,
          {
            variant: "outline",
            className: "flex-1",
            onClick: () => {
              const a = s("apple"), l = document.createElement("a");
              l.href = a, l.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, l.click();
            },
            children: [
              /* @__PURE__ */ h.jsx(Pl, { className: "h-4 w-4 mr-2" }),
              "Apple"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
const bd = x.createContext({});
function Pd(e) {
  const t = x.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Oa = x.createContext(null), Td = x.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class OT extends x.Component {
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
function FT({ children: e, isPresent: t }) {
  const n = x.useId(), r = x.useRef(null), o = x.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: s } = x.useContext(Td);
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
  }, [t]), h.jsx(OT, { isPresent: t, childRef: r, sizeRef: o, children: x.cloneElement(e, { ref: r }) });
}
const VT = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: i }) => {
  const a = Pd(zT), l = x.useId(), u = x.useCallback((d) => {
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
  }, [n]), i === "popLayout" && (e = h.jsx(FT, { isPresent: n, children: e })), h.jsx(Oa.Provider, { value: c, children: e });
};
function zT() {
  return /* @__PURE__ */ new Map();
}
function A0(e = !0) {
  const t = x.useContext(Oa);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t, s = x.useId();
  x.useEffect(() => {
    e && o(s);
  }, [e]);
  const i = x.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, i] : [!0];
}
const ii = (e) => e.key || "";
function Up(e) {
  const t = [];
  return x.Children.forEach(e, (n) => {
    x.isValidElement(n) && t.push(n);
  }), t;
}
const Ed = typeof window < "u", R0 = Ed ? x.useLayoutEffect : x.useEffect, Wp = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: o = !0, mode: s = "sync", propagate: i = !1 }) => {
  const [a, l] = A0(i), u = x.useMemo(() => Up(e), [e]), c = i && !a ? [] : u.map(ii), d = x.useRef(!0), f = x.useRef(u), m = Pd(() => /* @__PURE__ */ new Map()), [w, y] = x.useState(u), [S, g] = x.useState(u);
  R0(() => {
    d.current = !1, f.current = u;
    for (let k = 0; k < S.length; k++) {
      const C = ii(S[k]);
      c.includes(C) ? m.delete(C) : m.get(C) !== !0 && m.set(C, !1);
    }
  }, [S, c.length, c.join("-")]);
  const p = [];
  if (u !== w) {
    let k = [...u];
    for (let C = 0; C < S.length; C++) {
      const b = S[C], P = ii(b);
      c.includes(P) || (k.splice(C, 0, b), p.push(b));
    }
    s === "wait" && p.length && (k = p), g(Up(k)), y(u);
    return;
  }
  const { forceRender: v } = x.useContext(bd);
  return h.jsx(h.Fragment, { children: S.map((k) => {
    const C = ii(k), b = i && !a ? !1 : u === S || c.includes(C), P = () => {
      if (m.has(C))
        m.set(C, !0);
      else
        return;
      let T = !0;
      m.forEach((N) => {
        N || (T = !1);
      }), T && (v == null || v(), g(f.current), i && (l == null || l()), r && r());
    };
    return h.jsx(VT, { isPresent: b, initial: !d.current || n ? void 0 : !1, custom: b ? void 0 : t, presenceAffectsLayout: o, mode: s, onExitComplete: b ? void 0 : P, children: k }, C);
  }) });
}, nt = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let M0 = nt;
// @__NO_SIDE_EFFECTS__
function Dd(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Zr = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Yt = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, Xt = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, BT = {
  useManualTiming: !1
};
function $T(e) {
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
      const m = d && r ? t : n;
      return c && s.add(u), m.has(u) || m.add(u), u;
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
const ai = [
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
], UT = 40;
function j0(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = () => n = !0, i = ai.reduce((g, p) => (g[p] = $T(s), g), {}), { read: a, resolveKeyframes: l, update: u, preRender: c, render: d, postRender: f } = i, m = () => {
    const g = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(g - o.timestamp, UT), 1), o.timestamp = g, o.isProcessing = !0, a.process(o), l.process(o), u.process(o), c.process(o), d.process(o), f.process(o), o.isProcessing = !1, n && t && (r = !1, e(m));
  }, w = () => {
    n = !0, r = !0, o.isProcessing || e(m);
  };
  return { schedule: ai.reduce((g, p) => {
    const v = i[p];
    return g[p] = (k, C = !1, b = !1) => (n || w(), v.schedule(k, C, b)), g;
  }, {}), cancel: (g) => {
    for (let p = 0; p < ai.length; p++)
      i[ai[p]].cancel(g);
  }, state: o, steps: i };
}
const { schedule: ie, cancel: jn, state: Ee, steps: Dl } = j0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : nt, !0), L0 = x.createContext({ strict: !1 }), Hp = {
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
for (const e in Hp)
  qr[e] = {
    isEnabled: (t) => Hp[e].some((n) => !!t[n])
  };
function WT(e) {
  for (const t in e)
    qr[t] = {
      ...qr[t],
      ...e[t]
    };
}
const HT = /* @__PURE__ */ new Set([
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
function sa(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || HT.has(e);
}
let _0 = (e) => !sa(e);
function KT(e) {
  e && (_0 = (t) => t.startsWith("on") ? !sa(t) : e(t));
}
try {
  KT(require("@emotion/is-prop-valid").default);
} catch {
}
function GT(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (_0(o) || n === !0 && sa(o) || !t && !sa(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function YT(e) {
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
const Fa = x.createContext({});
function hs(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Va(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Nd = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Ad = ["initial", ...Nd];
function za(e) {
  return Va(e.animate) || Ad.some((t) => hs(e[t]));
}
function I0(e) {
  return !!(za(e) || e.variants);
}
function XT(e, t) {
  if (za(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || hs(n) ? n : void 0,
      animate: hs(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function QT(e) {
  const { initial: t, animate: n } = XT(e, x.useContext(Fa));
  return x.useMemo(() => ({ initial: t, animate: n }), [Kp(t), Kp(n)]);
}
function Kp(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const ZT = Symbol.for("motionComponentSymbol");
function Dr(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function qT(e, t, n) {
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
const Rd = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), JT = "framerAppearId", O0 = "data-" + Rd(JT), { schedule: Md } = j0(queueMicrotask, !1), F0 = x.createContext({});
function eE(e, t, n, r, o) {
  var s, i;
  const { visualElement: a } = x.useContext(Fa), l = x.useContext(L0), u = x.useContext(Oa), c = x.useContext(Td).reducedMotion, d = x.useRef(null);
  r = r || l.renderer, !d.current && r && (d.current = r(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: u,
    blockInitialAnimation: u ? u.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const f = d.current, m = x.useContext(F0);
  f && !f.projection && o && (f.type === "html" || f.type === "svg") && tE(d.current, n, o, m);
  const w = x.useRef(!1);
  x.useInsertionEffect(() => {
    f && w.current && f.update(n, u);
  });
  const y = n[O0], S = x.useRef(!!y && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, y)) && ((i = window.MotionHasOptimisedAnimation) === null || i === void 0 ? void 0 : i.call(window, y)));
  return R0(() => {
    f && (w.current = !0, window.MotionIsMounted = !0, f.updateFeatures(), Md.render(f.render), S.current && f.animationState && f.animationState.animateChanges());
  }), x.useEffect(() => {
    f && (!S.current && f.animationState && f.animationState.animateChanges(), S.current && (queueMicrotask(() => {
      var g;
      (g = window.MotionHandoffMarkAsComplete) === null || g === void 0 || g.call(window, y);
    }), S.current = !1));
  }), f;
}
function tE(e, t, n, r) {
  const { layoutId: o, layout: s, drag: i, dragConstraints: a, layoutScroll: l, layoutRoot: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : V0(e.parent)), e.projection.setOptions({
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
function V0(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : V0(e.parent);
}
function nE({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  var s, i;
  e && WT(e);
  function a(u, c) {
    let d;
    const f = {
      ...x.useContext(Td),
      ...u,
      layoutId: rE(u)
    }, { isStatic: m } = f, w = QT(u), y = r(u, m);
    if (!m && Ed) {
      oE();
      const S = sE(f);
      d = S.MeasureLayout, w.visualElement = eE(o, y, f, t, S.ProjectionNode);
    }
    return h.jsxs(Fa.Provider, { value: w, children: [d && w.visualElement ? h.jsx(d, { visualElement: w.visualElement, ...f }) : null, n(o, u, qT(y, w.visualElement, c), y, m, w.visualElement)] });
  }
  a.displayName = `motion.${typeof o == "string" ? o : `create(${(i = (s = o.displayName) !== null && s !== void 0 ? s : o.name) !== null && i !== void 0 ? i : ""})`}`;
  const l = x.forwardRef(a);
  return l[ZT] = o, l;
}
function rE({ layoutId: e }) {
  const t = x.useContext(bd).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function oE(e, t) {
  x.useContext(L0).strict;
}
function sE(e) {
  const { drag: t, layout: n } = qr;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const iE = [
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
function jd(e) {
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
      !!(iE.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function Gp(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Ld(e, t, n, r) {
  if (typeof t == "function") {
    const [o, s] = Gp(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, s] = Gp(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  return t;
}
const Ku = (e) => Array.isArray(e), aE = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), lE = (e) => Ku(e) ? e[e.length - 1] || 0 : e, Oe = (e) => !!(e && e.getVelocity);
function Ti(e) {
  const t = Oe(e) ? e.get() : e;
  return aE(t) ? t.toValue() : t;
}
function uE({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, o, s) {
  const i = {
    latestValues: cE(r, o, s, e),
    renderState: t()
  };
  return n && (i.onMount = (a) => n({ props: r, current: a, ...i }), i.onUpdate = (a) => n(a)), i;
}
const z0 = (e) => (t, n) => {
  const r = x.useContext(Fa), o = x.useContext(Oa), s = () => uE(e, t, r, o);
  return n ? s() : Pd(s);
};
function cE(e, t, n, r) {
  const o = {}, s = r(e, {});
  for (const f in s)
    o[f] = Ti(s[f]);
  let { initial: i, animate: a } = e;
  const l = za(e), u = I0(e);
  t && u && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || i === !1;
  const d = c ? a : i;
  if (d && typeof d != "boolean" && !Va(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let m = 0; m < f.length; m++) {
      const w = Ld(e, f[m]);
      if (w) {
        const { transitionEnd: y, transition: S, ...g } = w;
        for (const p in g) {
          let v = g[p];
          if (Array.isArray(v)) {
            const k = c ? v.length - 1 : 0;
            v = v[k];
          }
          v !== null && (o[p] = v);
        }
        for (const p in y)
          o[p] = y[p];
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
], dr = new Set(uo), B0 = (e) => (t) => typeof t == "string" && t.startsWith(e), $0 = /* @__PURE__ */ B0("--"), dE = /* @__PURE__ */ B0("var(--"), _d = (e) => dE(e) ? fE.test(e.split("/*")[0].trim()) : !1, fE = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, U0 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, nn = (e, t, n) => n > t ? t : n < e ? e : n, co = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, ms = {
  ...co,
  transform: (e) => nn(0, 1, e)
}, li = {
  ...co,
  default: 1
}, Es = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), un = /* @__PURE__ */ Es("deg"), Ft = /* @__PURE__ */ Es("%"), F = /* @__PURE__ */ Es("px"), pE = /* @__PURE__ */ Es("vh"), hE = /* @__PURE__ */ Es("vw"), Yp = {
  ...Ft,
  parse: (e) => Ft.parse(e) / 100,
  transform: (e) => Ft.transform(e * 100)
}, mE = {
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
}, gE = {
  rotate: un,
  rotateX: un,
  rotateY: un,
  rotateZ: un,
  scale: li,
  scaleX: li,
  scaleY: li,
  scaleZ: li,
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
  originX: Yp,
  originY: Yp,
  originZ: F
}, Xp = {
  ...co,
  transform: Math.round
}, Id = {
  ...mE,
  ...gE,
  zIndex: Xp,
  size: F,
  // SVG
  fillOpacity: ms,
  strokeOpacity: ms,
  numOctaves: Xp
}, yE = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, vE = uo.length;
function xE(e, t, n) {
  let r = "", o = !0;
  for (let s = 0; s < vE; s++) {
    const i = uo[s], a = e[i];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (i.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = U0(a, Id[i]);
      if (!l) {
        o = !1;
        const c = yE[i] || i;
        r += `${c}(${u}) `;
      }
      n && (t[i] = u);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function Od(e, t, n) {
  const { style: r, vars: o, transformOrigin: s } = e;
  let i = !1, a = !1;
  for (const l in t) {
    const u = t[l];
    if (dr.has(l)) {
      i = !0;
      continue;
    } else if ($0(l)) {
      o[l] = u;
      continue;
    } else {
      const c = U0(u, Id[l]);
      l.startsWith("origin") ? (a = !0, s[l] = c) : r[l] = c;
    }
  }
  if (t.transform || (i || n ? r.transform = xE(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const wE = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, SE = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function kE(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const s = o ? wE : SE;
  e[s.offset] = F.transform(-r);
  const i = F.transform(t), a = F.transform(n);
  e[s.array] = `${i} ${a}`;
}
function Qp(e, t, n) {
  return typeof e == "string" ? e : F.transform(t + n * e);
}
function CE(e, t, n) {
  const r = Qp(t, e.x, e.width), o = Qp(n, e.y, e.height);
  return `${r} ${o}`;
}
function Fd(e, {
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
  if (Od(e, u, d), c) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: f, style: m, dimensions: w } = e;
  f.transform && (w && (m.transform = f.transform), delete f.transform), w && (o !== void 0 || s !== void 0 || m.transform) && (m.transformOrigin = CE(w, o !== void 0 ? o : 0.5, s !== void 0 ? s : 0.5)), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), r !== void 0 && (f.scale = r), i !== void 0 && kE(f, i, a, l, !1);
}
const Vd = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), W0 = () => ({
  ...Vd(),
  attrs: {}
}), zd = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function H0(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
const K0 = /* @__PURE__ */ new Set([
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
function G0(e, t, n, r) {
  H0(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(K0.has(o) ? o : Rd(o), t.attrs[o]);
}
const ia = {};
function bE(e) {
  Object.assign(ia, e);
}
function Y0(e, { layout: t, layoutId: n }) {
  return dr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!ia[e] || e === "opacity");
}
function Bd(e, t, n) {
  var r;
  const { style: o } = e, s = {};
  for (const i in o)
    (Oe(o[i]) || t.style && Oe(t.style[i]) || Y0(i, e) || ((r = n == null ? void 0 : n.getValue(i)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[i] = o[i]);
  return s;
}
function X0(e, t, n) {
  const r = Bd(e, t, n);
  for (const o in e)
    if (Oe(e[o]) || Oe(t[o])) {
      const s = uo.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[s] = e[o];
    }
  return r;
}
function PE(e, t) {
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
const Zp = ["x", "y", "width", "height", "cx", "cy", "r"], TE = {
  useVisualState: z0({
    scrapeMotionValuesFromProps: X0,
    createRenderState: W0,
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
        for (let a = 0; a < Zp.length; a++) {
          const l = Zp[a];
          e[l] !== t[l] && (i = !0);
        }
      i && ie.read(() => {
        PE(n, r), ie.render(() => {
          Fd(r, o, zd(n.tagName), e.transformTemplate), G0(n, r);
        });
      });
    }
  })
}, EE = {
  useVisualState: z0({
    scrapeMotionValuesFromProps: Bd,
    createRenderState: Vd
  })
};
function Q0(e, t, n) {
  for (const r in t)
    !Oe(t[r]) && !Y0(r, n) && (e[r] = t[r]);
}
function DE({ transformTemplate: e }, t) {
  return x.useMemo(() => {
    const n = Vd();
    return Od(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function NE(e, t) {
  const n = e.style || {}, r = {};
  return Q0(r, n, e), Object.assign(r, DE(e, t)), r;
}
function AE(e, t) {
  const n = {}, r = NE(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function RE(e, t, n, r) {
  const o = x.useMemo(() => {
    const s = W0();
    return Fd(s, t, zd(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    Q0(s, e.style, e), o.style = { ...s, ...o.style };
  }
  return o;
}
function ME(e = !1) {
  return (n, r, o, { latestValues: s }, i) => {
    const l = (jd(n) ? RE : AE)(r, s, i, n), u = GT(r, typeof n == "string", e), c = n !== x.Fragment ? { ...u, ...l, ref: o } : {}, { children: d } = r, f = x.useMemo(() => Oe(d) ? d.get() : d, [d]);
    return x.createElement(n, {
      ...c,
      children: f
    });
  };
}
function jE(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const i = {
      ...jd(r) ? TE : EE,
      preloadedFeatures: e,
      useRender: ME(o),
      createVisualElement: t,
      Component: r
    };
    return nE(i);
  };
}
function Z0(e, t) {
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
function Ba(e, t, n) {
  const r = e.getProps();
  return Ld(r, t, n !== void 0 ? n : r.custom, e);
}
const LE = /* @__PURE__ */ Dd(() => window.ScrollTimeline !== void 0);
class _E {
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
      if (LE() && o.attachTimeline)
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
class IE extends _E {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function $d(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Gu = 2e4;
function q0(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Gu; )
    t += n, r = e.next(t);
  return t >= Gu ? 1 / 0 : t;
}
function Ud(e) {
  return typeof e == "function";
}
function qp(e, t) {
  e.timeline = t, e.onfinish = null;
}
const Wd = (e) => Array.isArray(e) && typeof e[0] == "number", OE = {
  linearEasing: void 0
};
function FE(e, t) {
  const n = /* @__PURE__ */ Dd(e);
  return () => {
    var r;
    return (r = OE[t]) !== null && r !== void 0 ? r : n();
  };
}
const aa = /* @__PURE__ */ FE(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), J0 = (e, t, n = 10) => {
  let r = "";
  const o = Math.max(Math.round(t / n), 2);
  for (let s = 0; s < o; s++)
    r += e(/* @__PURE__ */ Zr(0, o - 1, s)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function ex(e) {
  return !!(typeof e == "function" && aa() || !e || typeof e == "string" && (e in Yu || aa()) || Wd(e) || Array.isArray(e) && e.every(ex));
}
const Ro = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Yu = {
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
function tx(e, t) {
  if (e)
    return typeof e == "function" && aa() ? J0(e, t) : Wd(e) ? Ro(e) : Array.isArray(e) ? e.map((n) => tx(n, t) || Yu.easeOut) : Yu[e];
}
const yt = {
  x: !1,
  y: !1
};
function nx() {
  return yt.x || yt.y;
}
function VE(e, t, n) {
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
function rx(e, t) {
  const n = VE(e), r = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, o, () => r.abort()];
}
function Jp(e) {
  return (t) => {
    t.pointerType === "touch" || nx() || e(t);
  };
}
function zE(e, t, n = {}) {
  const [r, o, s] = rx(e, n), i = Jp((a) => {
    const { target: l } = a, u = t(a);
    if (typeof u != "function" || !l)
      return;
    const c = Jp((d) => {
      u(d), l.removeEventListener("pointerleave", c);
    });
    l.addEventListener("pointerleave", c, o);
  });
  return r.forEach((a) => {
    a.addEventListener("pointerenter", i, o);
  }), s;
}
const ox = (e, t) => t ? e === t ? !0 : ox(e, t.parentElement) : !1, Hd = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, BE = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function $E(e) {
  return BE.has(e.tagName) || e.tabIndex !== -1;
}
const Mo = /* @__PURE__ */ new WeakSet();
function eh(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Nl(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const UE = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = eh(() => {
    if (Mo.has(n))
      return;
    Nl(n, "down");
    const o = eh(() => {
      Nl(n, "up");
    }), s = () => Nl(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function th(e) {
  return Hd(e) && !nx();
}
function WE(e, t, n = {}) {
  const [r, o, s] = rx(e, n), i = (a) => {
    const l = a.currentTarget;
    if (!th(a) || Mo.has(l))
      return;
    Mo.add(l);
    const u = t(a), c = (m, w) => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", f), !(!th(m) || !Mo.has(l)) && (Mo.delete(l), typeof u == "function" && u(m, { success: w }));
    }, d = (m) => {
      c(m, n.useGlobalTarget || ox(l, m.target));
    }, f = (m) => {
      c(m, !1);
    };
    window.addEventListener("pointerup", d, o), window.addEventListener("pointercancel", f, o);
  };
  return r.forEach((a) => {
    !$E(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", i, o), a.addEventListener("focus", (u) => UE(u, o), o);
  }), s;
}
function HE(e) {
  return e === "x" || e === "y" ? yt[e] ? null : (yt[e] = !0, () => {
    yt[e] = !1;
  }) : yt.x || yt.y ? null : (yt.x = yt.y = !0, () => {
    yt.x = yt.y = !1;
  });
}
const sx = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...uo
]);
let Ei;
function KE() {
  Ei = void 0;
}
const Vt = {
  now: () => (Ei === void 0 && Vt.set(Ee.isProcessing || BT.useManualTiming ? Ee.timestamp : performance.now()), Ei),
  set: (e) => {
    Ei = e, queueMicrotask(KE);
  }
};
function Kd(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Gd(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Yd {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Kd(this.subscriptions, t), () => Gd(this.subscriptions, t);
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
function ix(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const nh = 30, GE = (e) => !isNaN(parseFloat(e));
class YE {
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
    this.current = t, this.updatedAt = Vt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = GE(this.current));
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
    this.events[t] || (this.events[t] = new Yd());
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
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > nh)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, nh);
    return ix(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
  return new YE(e, t);
}
function XE(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, gs(n));
}
function QE(e, t) {
  const n = Ba(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const i in s) {
    const a = lE(s[i]);
    XE(e, i, a);
  }
}
function ZE(e) {
  return !!(Oe(e) && e.add);
}
function Xu(e, t) {
  const n = e.getValue("willChange");
  if (ZE(n))
    return n.add(t);
}
function ax(e) {
  return e.props[O0];
}
const lx = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, qE = 1e-7, JE = 12;
function eD(e, t, n, r, o) {
  let s, i, a = 0;
  do
    i = t + (n - t) / 2, s = lx(i, r, o) - e, s > 0 ? n = i : t = i;
  while (Math.abs(s) > qE && ++a < JE);
  return i;
}
function Ds(e, t, n, r) {
  if (e === t && n === r)
    return nt;
  const o = (s) => eD(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : lx(o(s), t, r);
}
const ux = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, cx = (e) => (t) => 1 - e(1 - t), dx = /* @__PURE__ */ Ds(0.33, 1.53, 0.69, 0.99), Xd = /* @__PURE__ */ cx(dx), fx = /* @__PURE__ */ ux(Xd), px = (e) => (e *= 2) < 1 ? 0.5 * Xd(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Qd = (e) => 1 - Math.sin(Math.acos(e)), hx = cx(Qd), mx = ux(Qd), gx = (e) => /^0[^.\s]+$/u.test(e);
function tD(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || gx(e) : !0;
}
const Uo = (e) => Math.round(e * 1e5) / 1e5, Zd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function nD(e) {
  return e == null;
}
const rD = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, qd = (e, t) => (n) => !!(typeof n == "string" && rD.test(n) && n.startsWith(e) || t && !nD(n) && Object.prototype.hasOwnProperty.call(n, t)), yx = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, s, i, a] = r.match(Zd);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, oD = (e) => nn(0, 255, e), Al = {
  ...co,
  transform: (e) => Math.round(oD(e))
}, Qn = {
  test: /* @__PURE__ */ qd("rgb", "red"),
  parse: /* @__PURE__ */ yx("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Al.transform(e) + ", " + Al.transform(t) + ", " + Al.transform(n) + ", " + Uo(ms.transform(r)) + ")"
};
function sD(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Qu = {
  test: /* @__PURE__ */ qd("#"),
  parse: sD,
  transform: Qn.transform
}, Nr = {
  test: /* @__PURE__ */ qd("hsl", "hue"),
  parse: /* @__PURE__ */ yx("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Ft.transform(Uo(t)) + ", " + Ft.transform(Uo(n)) + ", " + Uo(ms.transform(r)) + ")"
}, _e = {
  test: (e) => Qn.test(e) || Qu.test(e) || Nr.test(e),
  parse: (e) => Qn.test(e) ? Qn.parse(e) : Nr.test(e) ? Nr.parse(e) : Qu.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Qn.transform(e) : Nr.transform(e)
}, iD = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function aD(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(Zd)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(iD)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const vx = "number", xx = "color", lD = "var", uD = "var(", rh = "${}", cD = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ys(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let s = 0;
  const a = t.replace(cD, (l) => (_e.test(l) ? (r.color.push(s), o.push(xx), n.push(_e.parse(l))) : l.startsWith(uD) ? (r.var.push(s), o.push(lD), n.push(l)) : (r.number.push(s), o.push(vx), n.push(parseFloat(l))), ++s, rh)).split(rh);
  return { values: n, split: a, indexes: r, types: o };
}
function wx(e) {
  return ys(e).values;
}
function Sx(e) {
  const { split: t, types: n } = ys(e), r = t.length;
  return (o) => {
    let s = "";
    for (let i = 0; i < r; i++)
      if (s += t[i], o[i] !== void 0) {
        const a = n[i];
        a === vx ? s += Uo(o[i]) : a === xx ? s += _e.transform(o[i]) : s += o[i];
      }
    return s;
  };
}
const dD = (e) => typeof e == "number" ? 0 : e;
function fD(e) {
  const t = wx(e);
  return Sx(e)(t.map(dD));
}
const Ln = {
  test: aD,
  parse: wx,
  createTransformer: Sx,
  getAnimatableNone: fD
}, pD = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function hD(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(Zd) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let s = pD.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + o + ")";
}
const mD = /\b([a-z-]*)\(.*?\)/gu, Zu = {
  ...Ln,
  getAnimatableNone: (e) => {
    const t = e.match(mD);
    return t ? t.map(hD).join(" ") : e;
  }
}, gD = {
  ...Id,
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
  filter: Zu,
  WebkitFilter: Zu
}, Jd = (e) => gD[e];
function kx(e, t) {
  let n = Jd(e);
  return n !== Zu && (n = Ln), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const yD = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function vD(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const s = e[r];
    typeof s == "string" && !yD.has(s) && ys(s).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const s of t)
      e[s] = kx(n, o);
}
const oh = (e) => e === co || e === F, sh = (e, t) => parseFloat(e.split(", ")[t]), ih = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/u);
  if (o)
    return sh(o[1], t);
  {
    const s = r.match(/^matrix\((.+)\)$/u);
    return s ? sh(s[1], e) : 0;
  }
}, xD = /* @__PURE__ */ new Set(["x", "y", "z"]), wD = uo.filter((e) => !xD.has(e));
function SD(e) {
  const t = [];
  return wD.forEach((n) => {
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
  x: ih(4, 13),
  y: ih(5, 14)
};
Jr.translateX = Jr.x;
Jr.translateY = Jr.y;
const Jn = /* @__PURE__ */ new Set();
let qu = !1, Ju = !1;
function Cx() {
  if (Ju) {
    const e = Array.from(Jn).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = SD(r);
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
  Ju = !1, qu = !1, Jn.forEach((e) => e.complete()), Jn.clear();
}
function bx() {
  Jn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Ju = !0);
  });
}
function kD() {
  bx(), Cx();
}
class ef {
  constructor(t, n, r, o, s, i = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = s, this.isAsync = i;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Jn.add(this), qu || (qu = !0, ie.read(bx), ie.resolveKeyframes(Cx))) : (this.readKeyframes(), this.complete());
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
const Px = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), CD = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function bD(e) {
  const t = CD.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function Tx(e, t, n = 1) {
  const [r, o] = bD(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const i = s.trim();
    return Px(i) ? parseFloat(i) : i;
  }
  return _d(o) ? Tx(o, t, n + 1) : o;
}
const Ex = (e) => (t) => t.test(e), PD = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Dx = [co, F, Ft, un, hE, pE, PD], ah = (e) => Dx.find(Ex(e));
class Nx extends ef {
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
      if (typeof u == "string" && (u = u.trim(), _d(u))) {
        const c = Tx(u, n.current);
        c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !sx.has(r) || t.length !== 2)
      return;
    const [o, s] = t, i = ah(o), a = ah(s);
    if (i !== a)
      if (oh(i) && oh(a))
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
      tD(t[o]) && r.push(o);
    r.length && vD(t, r, n);
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
const lh = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
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
function ED(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const s = e[e.length - 1], i = lh(o, t), a = lh(s, t);
  return !i || !a ? !1 : TD(e) || (n === "spring" || Ud(n)) && r;
}
const DD = (e) => e !== null;
function $a(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(DD), s = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !s || r === void 0 ? o[s] : r;
}
const ND = 40;
class Ax {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > ND ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && kD(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = Vt.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: o, velocity: s, delay: i, onComplete: a, onUpdate: l, isGenerator: u } = this.options;
    if (!u && !ED(t, r, o, s))
      if (i)
        this.options.duration = 0;
      else {
        l && l($a(t, this.options, n)), a && a(), this.resolveFinishedPromise();
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
function Rl(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function AD({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, s = 0, i = 0;
  if (!t)
    o = s = i = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    o = Rl(l, a, e + 1 / 3), s = Rl(l, a, e), i = Rl(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(s * 255),
    blue: Math.round(i * 255),
    alpha: r
  };
}
function la(e, t) {
  return (n) => n > 0 ? t : e;
}
const Ml = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, RD = [Qu, Qn, Nr], MD = (e) => RD.find((t) => t.test(e));
function uh(e) {
  const t = MD(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === Nr && (n = AD(n)), n;
}
const ch = (e, t) => {
  const n = uh(e), r = uh(t);
  if (!n || !r)
    return la(e, t);
  const o = { ...n };
  return (s) => (o.red = Ml(n.red, r.red, s), o.green = Ml(n.green, r.green, s), o.blue = Ml(n.blue, r.blue, s), o.alpha = ce(n.alpha, r.alpha, s), Qn.transform(o));
}, jD = (e, t) => (n) => t(e(n)), Ns = (...e) => e.reduce(jD), ec = /* @__PURE__ */ new Set(["none", "hidden"]);
function LD(e, t) {
  return ec.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function _D(e, t) {
  return (n) => ce(e, t, n);
}
function tf(e) {
  return typeof e == "number" ? _D : typeof e == "string" ? _d(e) ? la : _e.test(e) ? ch : FD : Array.isArray(e) ? Rx : typeof e == "object" ? _e.test(e) ? ch : ID : la;
}
function Rx(e, t) {
  const n = [...e], r = n.length, o = e.map((s, i) => tf(s)(s, t[i]));
  return (s) => {
    for (let i = 0; i < r; i++)
      n[i] = o[i](s);
    return n;
  };
}
function ID(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = tf(e[o])(e[o], t[o]));
  return (o) => {
    for (const s in r)
      n[s] = r[s](o);
    return n;
  };
}
function OD(e, t) {
  var n;
  const r = [], o = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const i = t.types[s], a = e.indexes[i][o[i]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    r[s] = l, o[i]++;
  }
  return r;
}
const FD = (e, t) => {
  const n = Ln.createTransformer(t), r = ys(e), o = ys(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? ec.has(e) && !o.values.length || ec.has(t) && !r.values.length ? LD(e, t) : Ns(Rx(OD(r, o), o.values), n) : la(e, t);
};
function Mx(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? ce(e, t, n) : tf(e)(e, t);
}
const VD = 5;
function jx(e, t, n) {
  const r = Math.max(t - VD, 0);
  return ix(n - e(r), t - r);
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
}, jl = 1e-3;
function zD({ duration: e = he.duration, bounce: t = he.bounce, velocity: n = he.velocity, mass: r = he.mass }) {
  let o, s, i = 1 - t;
  i = nn(he.minDamping, he.maxDamping, i), e = nn(he.minDuration, he.maxDuration, /* @__PURE__ */ Xt(e)), i < 1 ? (o = (u) => {
    const c = u * i, d = c * e, f = c - n, m = tc(u, i), w = Math.exp(-d);
    return jl - f / m * w;
  }, s = (u) => {
    const d = u * i * e, f = d * n + n, m = Math.pow(i, 2) * Math.pow(u, 2) * e, w = Math.exp(-d), y = tc(Math.pow(u, 2), i);
    return (-o(u) + jl > 0 ? -1 : 1) * ((f - m) * w) / y;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - n) * e + 1;
    return -jl + c * d;
  }, s = (u) => {
    const c = Math.exp(-u * e), d = (n - u) * (e * e);
    return c * d;
  });
  const a = 5 / e, l = $D(o, s, a);
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
const BD = 12;
function $D(e, t, n) {
  let r = n;
  for (let o = 1; o < BD; o++)
    r = r - e(r) / t(r);
  return r;
}
function tc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const UD = ["duration", "bounce"], WD = ["stiffness", "damping", "mass"];
function dh(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function HD(e) {
  let t = {
    velocity: he.velocity,
    stiffness: he.stiffness,
    damping: he.damping,
    mass: he.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!dh(e, WD) && dh(e, UD))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, s = 2 * nn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: he.mass,
        stiffness: o,
        damping: s
      };
    } else {
      const n = zD(e);
      t = {
        ...t,
        ...n,
        mass: he.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Lx(e = he.visualDuration, t = he.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: o } = n;
  const s = n.keyframes[0], i = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: s }, { stiffness: l, damping: u, mass: c, duration: d, velocity: f, isResolvedFromDuration: m } = HD({
    ...n,
    velocity: -/* @__PURE__ */ Xt(n.velocity || 0)
  }), w = f || 0, y = u / (2 * Math.sqrt(l * c)), S = i - s, g = /* @__PURE__ */ Xt(Math.sqrt(l / c)), p = Math.abs(S) < 5;
  r || (r = p ? he.restSpeed.granular : he.restSpeed.default), o || (o = p ? he.restDelta.granular : he.restDelta.default);
  let v;
  if (y < 1) {
    const C = tc(g, y);
    v = (b) => {
      const P = Math.exp(-y * g * b);
      return i - P * ((w + y * g * S) / C * Math.sin(C * b) + S * Math.cos(C * b));
    };
  } else if (y === 1)
    v = (C) => i - Math.exp(-g * C) * (S + (w + g * S) * C);
  else {
    const C = g * Math.sqrt(y * y - 1);
    v = (b) => {
      const P = Math.exp(-y * g * b), T = Math.min(C * b, 300);
      return i - P * ((w + y * g * S) * Math.sinh(T) + C * S * Math.cosh(T)) / C;
    };
  }
  const k = {
    calculatedDuration: m && d || null,
    next: (C) => {
      const b = v(C);
      if (m)
        a.done = C >= d;
      else {
        let P = 0;
        y < 1 && (P = C === 0 ? /* @__PURE__ */ Yt(w) : jx(v, C, b));
        const T = Math.abs(P) <= r, N = Math.abs(i - b) <= o;
        a.done = T && N;
      }
      return a.value = a.done ? i : b, a;
    },
    toString: () => {
      const C = Math.min(q0(k), Gu), b = J0((P) => k.next(C * P).value, C, 30);
      return C + "ms " + b;
    }
  };
  return k;
}
function fh({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: s = 500, modifyTarget: i, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, m = (T) => a !== void 0 && T < a || l !== void 0 && T > l, w = (T) => a === void 0 ? l : l === void 0 || Math.abs(a - T) < Math.abs(l - T) ? a : l;
  let y = n * t;
  const S = d + y, g = i === void 0 ? S : i(S);
  g !== S && (y = g - d);
  const p = (T) => -y * Math.exp(-T / r), v = (T) => g + p(T), k = (T) => {
    const N = p(T), D = v(T);
    f.done = Math.abs(N) <= u, f.value = f.done ? g : D;
  };
  let C, b;
  const P = (T) => {
    m(f.value) && (C = T, b = Lx({
      keyframes: [f.value, w(f.value)],
      velocity: jx(v, T, f.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: s,
      restDelta: u,
      restSpeed: c
    }));
  };
  return P(0), {
    calculatedDuration: null,
    next: (T) => {
      let N = !1;
      return !b && C === void 0 && (N = !0, k(T), P(T)), C !== void 0 && T >= C ? b.next(T - C) : (!N && k(T), f);
    }
  };
}
const KD = /* @__PURE__ */ Ds(0.42, 0, 1, 1), GD = /* @__PURE__ */ Ds(0, 0, 0.58, 1), _x = /* @__PURE__ */ Ds(0.42, 0, 0.58, 1), YD = (e) => Array.isArray(e) && typeof e[0] != "number", XD = {
  linear: nt,
  easeIn: KD,
  easeInOut: _x,
  easeOut: GD,
  circIn: Qd,
  circInOut: mx,
  circOut: hx,
  backIn: Xd,
  backInOut: fx,
  backOut: dx,
  anticipate: px
}, ph = (e) => {
  if (Wd(e)) {
    M0(e.length === 4);
    const [t, n, r, o] = e;
    return Ds(t, n, r, o);
  } else if (typeof e == "string")
    return XD[e];
  return e;
};
function QD(e, t, n) {
  const r = [], o = n || Mx, s = e.length - 1;
  for (let i = 0; i < s; i++) {
    let a = o(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] || nt : t;
      a = Ns(l, a);
    }
    r.push(a);
  }
  return r;
}
function ZD(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const s = e.length;
  if (M0(s === t.length), s === 1)
    return () => t[0];
  if (s === 2 && t[0] === t[1])
    return () => t[1];
  const i = e[0] === e[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = QD(t, r, o), l = a.length, u = (c) => {
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
function qD(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ Zr(0, t, r);
    e.push(ce(n, 1, o));
  }
}
function JD(e) {
  const t = [0];
  return qD(t, e.length - 1), t;
}
function eN(e, t) {
  return e.map((n) => n * t);
}
function tN(e, t) {
  return e.map(() => t || _x).splice(0, e.length - 1);
}
function ua({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = YD(r) ? r.map(ph) : ph(r), s = {
    done: !1,
    value: t[0]
  }, i = eN(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : JD(t),
    e
  ), a = ZD(i, t, {
    ease: Array.isArray(o) ? o : tN(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (s.value = a(l), s.done = l >= e, s)
  };
}
const nN = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => ie.update(t, !0),
    stop: () => jn(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Ee.isProcessing ? Ee.timestamp : Vt.now()
  };
}, rN = {
  decay: fh,
  inertia: fh,
  tween: ua,
  keyframes: ua,
  spring: Lx
}, oN = (e) => e / 100;
class nf extends Ax {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options, i = (o == null ? void 0 : o.KeyframeResolver) || ef, a = (l, u) => this.onKeyframesResolved(l, u);
    this.resolver = new i(s, a, n, r, o), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: s, velocity: i = 0 } = this.options, a = Ud(n) ? n : rN[n] || ua;
    let l, u;
    a !== ua && typeof t[0] != "number" && (l = Ns(oN, Mx(t[0], t[1])), t = [0, 100]);
    const c = a({ ...this.options, keyframes: t });
    s === "mirror" && (u = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -i
    })), c.calculatedDuration === null && (c.calculatedDuration = q0(c));
    const { calculatedDuration: d } = c, f = d + o, m = f * (r + 1) - o;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: m
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
    const { finalKeyframe: o, generator: s, mirroredGenerator: i, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: u, totalDuration: c, resolvedDuration: d } = r;
    if (this.startTime === null)
      return s.next(0);
    const { delay: f, repeat: m, repeatType: w, repeatDelay: y, onUpdate: S } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const g = this.currentTime - f * (this.speed >= 0 ? 1 : -1), p = this.speed >= 0 ? g < 0 : g > c;
    this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let v = this.currentTime, k = s;
    if (m) {
      const T = Math.min(this.currentTime, c) / d;
      let N = Math.floor(T), D = T % 1;
      !D && T >= 1 && (D = 1), D === 1 && N--, N = Math.min(N, m + 1), !!(N % 2) && (w === "reverse" ? (D = 1 - D, y && (D -= y / d)) : w === "mirror" && (k = i)), v = nn(0, 1, D) * d;
    }
    const C = p ? { done: !1, value: l[0] } : k.next(v);
    a && (C.value = a(C.value));
    let { done: b } = C;
    !p && u !== null && (b = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const P = this.holdTime === null && (this.state === "finished" || this.state === "running" && b);
    return P && o !== void 0 && (C.value = $a(l, this.options, o)), S && S(C.value), P && this.finish(), C;
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
    const { driver: t = nN, onPlay: n, startTime: r } = this.options;
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
const sN = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function iN(e, t, n, { delay: r = 0, duration: o = 300, repeat: s = 0, repeatType: i = "loop", ease: a = "easeInOut", times: l } = {}) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = tx(a, o);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: r,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const aN = /* @__PURE__ */ Dd(() => Object.hasOwnProperty.call(Element.prototype, "animate")), ca = 10, lN = 2e4;
function uN(e) {
  return Ud(e.type) || e.type === "spring" || !ex(e.ease);
}
function cN(e, t) {
  const n = new nf({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let s = 0;
  for (; !r.done && s < lN; )
    r = n.sample(s), o.push(r.value), s += ca;
  return {
    times: void 0,
    keyframes: o,
    duration: s - ca,
    ease: "linear"
  };
}
const Ix = {
  anticipate: px,
  backInOut: fx,
  circInOut: mx
};
function dN(e) {
  return e in Ix;
}
class hh extends Ax {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options;
    this.resolver = new Nx(s, (i, a) => this.onKeyframesResolved(i, a), n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: r = 300, times: o, ease: s, type: i, motionValue: a, name: l, startTime: u } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof s == "string" && aa() && dN(s) && (s = Ix[s]), uN(this.options)) {
      const { onComplete: d, onUpdate: f, motionValue: m, element: w, ...y } = this.options, S = cN(t, y);
      t = S.keyframes, t.length === 1 && (t[1] = t[0]), r = S.duration, o = S.times, s = S.ease, i = "keyframes";
    }
    const c = iN(a.owner.current, l, t, { ...this.options, duration: r, times: o, ease: s });
    return c.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (qp(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
      const { onComplete: d } = this.options;
      a.set($a(t, this.options, n)), d && d(), this.cancel(), this.resolveFinishedPromise();
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
      qp(r, t);
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
      const { motionValue: u, onUpdate: c, onComplete: d, element: f, ...m } = this.options, w = new nf({
        ...m,
        keyframes: r,
        duration: o,
        type: s,
        ease: i,
        times: a,
        isGenerator: !0
      }), y = /* @__PURE__ */ Yt(this.time);
      u.setWithVelocity(w.sample(y - ca).value, w.sample(y).value, ca);
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
    return aN() && r && sN.has(r) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !u && !o && s !== "mirror" && i !== 0 && a !== "inertia";
  }
}
const fN = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, pN = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), hN = {
  type: "keyframes",
  duration: 0.8
}, mN = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, gN = (e, { keyframes: t }) => t.length > 2 ? hN : dr.has(e) ? e.startsWith("scale") ? pN(t[1]) : fN : mN;
function yN({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const rf = (e, t, n, r = {}, o, s) => (i) => {
  const a = $d(r, e) || {}, l = a.delay || r.delay || 0;
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
  yN(a) || (c = {
    ...c,
    ...gN(e, c)
  }), c.duration && (c.duration = /* @__PURE__ */ Yt(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ Yt(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let d = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (d = !0)), d && !s && t.get() !== void 0) {
    const f = $a(c.keyframes, a);
    if (f !== void 0)
      return ie.update(() => {
        c.onUpdate(f), c.onComplete();
      }), new IE([]);
  }
  return !s && hh.supports(c) ? new hh(c) : new nf(c);
};
function vN({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Ox(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var s;
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (i = r);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in l) {
    const f = e.getValue(d, (s = e.latestValues[d]) !== null && s !== void 0 ? s : null), m = l[d];
    if (m === void 0 || c && vN(c, d))
      continue;
    const w = {
      delay: n,
      ...$d(i || {}, d)
    };
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const g = ax(e);
      if (g) {
        const p = window.MotionHandoffAnimation(g, d, ie);
        p !== null && (w.startTime = p, y = !0);
      }
    }
    Xu(e, d), f.start(rf(d, f, m, e.shouldReduceMotion && sx.has(d) ? { type: !1 } : w, e, y));
    const S = f.animation;
    S && u.push(S);
  }
  return a && Promise.all(u).then(() => {
    ie.update(() => {
      a && QE(e, a);
    });
  }), u;
}
function nc(e, t, n = {}) {
  var r;
  const o = Ba(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = o ? () => Promise.all(Ox(e, o, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: d, staggerDirection: f } = s;
    return xN(e, t, c + u, d, f, n);
  } : () => Promise.resolve(), { when: l } = s;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [i, a] : [a, i];
    return u().then(() => c());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function xN(e, t, n = 0, r = 0, o = 1, s) {
  const i = [], a = (e.variantChildren.size - 1) * r, l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return Array.from(e.variantChildren).sort(wN).forEach((u, c) => {
    u.notify("AnimationStart", t), i.push(nc(u, t, {
      ...s,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function wN(e, t) {
  return e.sortNodePosition(t);
}
function SN(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((s) => nc(e, s, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = nc(e, t, n);
  else {
    const o = typeof t == "function" ? Ba(e, t, n.custom) : t;
    r = Promise.all(Ox(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const kN = Ad.length;
function Fx(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Fx(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < kN; n++) {
    const r = Ad[n], o = e.props[r];
    (hs(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const CN = [...Nd].reverse(), bN = Nd.length;
function PN(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => SN(e, n, r)));
}
function TN(e) {
  let t = PN(e), n = mh(), r = !0;
  const o = (l) => (u, c) => {
    var d;
    const f = Ba(e, c, l === "exit" ? (d = e.presenceContext) === null || d === void 0 ? void 0 : d.custom : void 0);
    if (f) {
      const { transition: m, transitionEnd: w, ...y } = f;
      u = { ...u, ...y, ...w };
    }
    return u;
  };
  function s(l) {
    t = l(e);
  }
  function i(l) {
    const { props: u } = e, c = Fx(e.parent) || {}, d = [], f = /* @__PURE__ */ new Set();
    let m = {}, w = 1 / 0;
    for (let S = 0; S < bN; S++) {
      const g = CN[S], p = n[g], v = u[g] !== void 0 ? u[g] : c[g], k = hs(v), C = g === l ? p.isActive : null;
      C === !1 && (w = S);
      let b = v === c[g] && v !== u[g] && k;
      if (b && r && e.manuallyAnimateOnMount && (b = !1), p.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !p.isActive && C === null || // If we didn't and don't have any defined prop for this animation type
      !v && !p.prevProp || // Or if the prop doesn't define an animation
      Va(v) || typeof v == "boolean")
        continue;
      const P = EN(p.prevProp, v);
      let T = P || // If we're making this variant active, we want to always make it active
      g === l && p.isActive && !b && k || // If we removed a higher-priority variant (i is in reverse order)
      S > w && k, N = !1;
      const D = Array.isArray(v) ? v : [v];
      let j = D.reduce(o(g), {});
      C === !1 && (j = {});
      const { prevResolvedValues: R = {} } = p, z = {
        ...R,
        ...j
      }, B = (O) => {
        T = !0, f.has(O) && (N = !0, f.delete(O)), p.needsAnimating[O] = !0;
        const E = e.getValue(O);
        E && (E.liveStyle = !1);
      };
      for (const O in z) {
        const E = j[O], M = R[O];
        if (m.hasOwnProperty(O))
          continue;
        let _ = !1;
        Ku(E) && Ku(M) ? _ = !Z0(E, M) : _ = E !== M, _ ? E != null ? B(O) : f.add(O) : E !== void 0 && f.has(O) ? B(O) : p.protectedKeys[O] = !0;
      }
      p.prevProp = v, p.prevResolvedValues = j, p.isActive && (m = { ...m, ...j }), r && e.blockInitialAnimation && (T = !1), T && (!(b && P) || N) && d.push(...D.map((O) => ({
        animation: O,
        options: { type: g }
      })));
    }
    if (f.size) {
      const S = {};
      f.forEach((g) => {
        const p = e.getBaseTarget(g), v = e.getValue(g);
        v && (v.liveStyle = !0), S[g] = p ?? null;
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
      var m;
      return (m = f.animationState) === null || m === void 0 ? void 0 : m.setActive(l, u);
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
      n = mh(), r = !0;
    }
  };
}
function EN(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Z0(t, e) : !1;
}
function $n(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function mh() {
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
class DN extends zn {
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
    Va(t) && (this.unmountControls = t.subscribe(this.node));
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
let NN = 0;
class AN extends zn {
  constructor() {
    super(...arguments), this.id = NN++;
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
const RN = {
  animation: {
    Feature: DN
  },
  exit: {
    Feature: AN
  }
};
function vs(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function As(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const MN = (e) => (t) => Hd(t) && e(t, As(t));
function Wo(e, t, n, r) {
  return vs(e, t, MN(n), r);
}
const gh = (e, t) => Math.abs(e - t);
function jN(e, t) {
  const n = gh(e.x, t.x), r = gh(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Vx {
  constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: s = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const d = _l(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, m = jN(d.offset, { x: 0, y: 0 }) >= 3;
      if (!f && !m)
        return;
      const { point: w } = d, { timestamp: y } = Ee;
      this.history.push({ ...w, timestamp: y });
      const { onStart: S, onMove: g } = this.handlers;
      f || (S && S(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, d);
    }, this.handlePointerMove = (d, f) => {
      this.lastMoveEvent = d, this.lastMoveEventInfo = Ll(f, this.transformPagePoint), ie.update(this.updatePoint, !0);
    }, this.handlePointerUp = (d, f) => {
      this.end();
      const { onEnd: m, onSessionEnd: w, resumeAnimation: y } = this.handlers;
      if (this.dragSnapToOrigin && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const S = _l(d.type === "pointercancel" ? this.lastMoveEventInfo : Ll(f, this.transformPagePoint), this.history);
      this.startEvent && m && m(d, S), w && w(d, S);
    }, !Hd(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = As(t), a = Ll(i, this.transformPagePoint), { point: l } = a, { timestamp: u } = Ee;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, _l(a, this.history)), this.removeListeners = Ns(Wo(this.contextWindow, "pointermove", this.handlePointerMove), Wo(this.contextWindow, "pointerup", this.handlePointerUp), Wo(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), jn(this.updatePoint);
  }
}
function Ll(e, t) {
  return t ? { point: t(e.point) } : e;
}
function yh(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function _l({ point: e }, t) {
  return {
    point: e,
    delta: yh(e, zx(t)),
    offset: yh(e, LN(t)),
    velocity: _N(t, 0.1)
  };
}
function LN(e) {
  return e[0];
}
function zx(e) {
  return e[e.length - 1];
}
function _N(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = zx(e);
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
const Bx = 1e-4, IN = 1 - Bx, ON = 1 + Bx, $x = 0.01, FN = 0 - $x, VN = 0 + $x;
function ot(e) {
  return e.max - e.min;
}
function zN(e, t, n) {
  return Math.abs(e - t) <= n;
}
function vh(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = ce(t.min, t.max, e.origin), e.scale = ot(n) / ot(t), e.translate = ce(n.min, n.max, e.origin) - e.originPoint, (e.scale >= IN && e.scale <= ON || isNaN(e.scale)) && (e.scale = 1), (e.translate >= FN && e.translate <= VN || isNaN(e.translate)) && (e.translate = 0);
}
function Ho(e, t, n, r) {
  vh(e.x, t.x, n.x, r ? r.originX : void 0), vh(e.y, t.y, n.y, r ? r.originY : void 0);
}
function xh(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + ot(t);
}
function BN(e, t, n) {
  xh(e.x, t.x, n.x), xh(e.y, t.y, n.y);
}
function wh(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + ot(t);
}
function Ko(e, t, n) {
  wh(e.x, t.x, n.x), wh(e.y, t.y, n.y);
}
function $N(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? ce(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ce(n, e, r.max) : Math.min(e, n)), e;
}
function Sh(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function UN(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Sh(e.x, n, o),
    y: Sh(e.y, t, r)
  };
}
function kh(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function WN(e, t) {
  return {
    x: kh(e.x, t.x),
    y: kh(e.y, t.y)
  };
}
function HN(e, t) {
  let n = 0.5;
  const r = ot(e), o = ot(t);
  return o > r ? n = /* @__PURE__ */ Zr(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ Zr(e.min, e.max - o, t.min)), nn(0, 1, n);
}
function KN(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const rc = 0.35;
function GN(e = rc) {
  return e === !1 ? e = 0 : e === !0 && (e = rc), {
    x: Ch(e, "left", "right"),
    y: Ch(e, "top", "bottom")
  };
}
function Ch(e, t, n) {
  return {
    min: bh(e, t),
    max: bh(e, n)
  };
}
function bh(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Ph = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Ar = () => ({
  x: Ph(),
  y: Ph()
}), Th = () => ({ min: 0, max: 0 }), ve = () => ({
  x: Th(),
  y: Th()
});
function lt(e) {
  return [e("x"), e("y")];
}
function Ux({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function YN({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function XN(e, t) {
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
function Il(e) {
  return e === void 0 || e === 1;
}
function oc({ scale: e, scaleX: t, scaleY: n }) {
  return !Il(e) || !Il(t) || !Il(n);
}
function Hn(e) {
  return oc(e) || Wx(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Wx(e) {
  return Eh(e.x) || Eh(e.y);
}
function Eh(e) {
  return e && e !== "0%";
}
function da(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Dh(e, t, n, r, o) {
  return o !== void 0 && (e = da(e, o, r)), da(e, n, r) + t;
}
function sc(e, t = 0, n = 1, r, o) {
  e.min = Dh(e.min, t, n, r, o), e.max = Dh(e.max, t, n, r, o);
}
function Hx(e, { x: t, y: n }) {
  sc(e.x, t.translate, t.scale, t.originPoint), sc(e.y, n.translate, n.scale, n.originPoint);
}
const Nh = 0.999999999999, Ah = 1.0000000000001;
function QN(e, t, n, r = !1) {
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
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, Hx(e, i)), r && Hn(s.latestValues) && Mr(e, s.latestValues));
  }
  t.x < Ah && t.x > Nh && (t.x = 1), t.y < Ah && t.y > Nh && (t.y = 1);
}
function Rr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Rh(e, t, n, r, o = 0.5) {
  const s = ce(e.min, e.max, o);
  sc(e, t, n, s, r);
}
function Mr(e, t) {
  Rh(e.x, t.x, t.scaleX, t.scale, t.originX), Rh(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Kx(e, t) {
  return Ux(XN(e.getBoundingClientRect(), t));
}
function ZN(e, t, n) {
  const r = Kx(e, n), { scroll: o } = t;
  return o && (Rr(r.x, o.offset.x), Rr(r.y, o.offset.y)), r;
}
const Gx = ({ current: e }) => e ? e.ownerDocument.defaultView : null, qN = /* @__PURE__ */ new WeakMap();
class JN {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ve(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (c) => {
      const { dragSnapToOrigin: d } = this.getProps();
      d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(As(c).point);
    }, s = (c, d) => {
      const { drag: f, dragPropagation: m, onDragStart: w } = this.getProps();
      if (f && !m && (this.openDragLock && this.openDragLock(), this.openDragLock = HE(f), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), lt((S) => {
        let g = this.getAxisMotionValue(S).get() || 0;
        if (Ft.test(g)) {
          const { projection: p } = this.visualElement;
          if (p && p.layout) {
            const v = p.layout.layoutBox[S];
            v && (g = ot(v) * (parseFloat(g) / 100));
          }
        }
        this.originPoint[S] = g;
      }), w && ie.postRender(() => w(c, d)), Xu(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, i = (c, d) => {
      const { dragPropagation: f, dragDirectionLock: m, onDirectionLock: w, onDrag: y } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: S } = d;
      if (m && this.currentDirection === null) {
        this.currentDirection = eA(S), this.currentDirection !== null && w && w(this.currentDirection);
        return;
      }
      this.updateAxis("x", d.point, S), this.updateAxis("y", d.point, S), this.visualElement.render(), y && y(c, d);
    }, a = (c, d) => this.stop(c, d), l = () => lt((c) => {
      var d;
      return this.getAnimationState(c) === "paused" && ((d = this.getAxisMotionValue(c).animation) === null || d === void 0 ? void 0 : d.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Vx(t, {
      onSessionStart: o,
      onStart: s,
      onMove: i,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: Gx(this.visualElement)
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
    if (!r || !ui(t, o, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (i = $N(i, this.constraints[t], this.elastic[t])), s.set(i);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, s = this.constraints;
    n && Dr(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = UN(o.layoutBox, n) : this.constraints = !1, this.elastic = GN(r), s !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && lt((i) => {
      this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = KN(o.layoutBox[i], this.constraints[i]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Dr(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const s = ZN(r, o.root, this.visualElement.getTransformPagePoint());
    let i = WN(o.layout.layoutBox, s);
    if (n) {
      const a = n(YN(i));
      this.hasMutatedConstraints = !!a, a && (i = Ux(a));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = lt((c) => {
      if (!ui(c, n, this.currentDirection))
        return;
      let d = l && l[c] || {};
      i && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, m = o ? 40 : 1e7, w = {
        type: "inertia",
        velocity: r ? t[c] : 0,
        bounceStiffness: f,
        bounceDamping: m,
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
    return Xu(this.visualElement, t), r.start(rf(t, r, 0, n, this.visualElement, !1));
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
      if (!ui(n, r, this.currentDirection))
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
        o[i] = HN({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), lt((i) => {
      if (!ui(i, t, null))
        return;
      const a = this.getAxisMotionValue(i), { min: l, max: u } = this.constraints[i];
      a.set(ce(l, u, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    qN.set(this.visualElement, this);
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
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: s = !1, dragElastic: i = rc, dragMomentum: a = !0 } = t;
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
function ui(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function eA(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class tA extends zn {
  constructor(t) {
    super(t), this.removeGroupControls = nt, this.removeListeners = nt, this.controls = new JN(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || nt;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Mh = (e) => (t, n) => {
  e && ie.postRender(() => e(t, n));
};
class nA extends zn {
  constructor() {
    super(...arguments), this.removePointerDownListener = nt;
  }
  onPointerDown(t) {
    this.session = new Vx(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Gx(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Mh(t),
      onStart: Mh(n),
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
const Di = {
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
function jh(e, t) {
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
    const n = jh(e, t.target.x), r = jh(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, rA = {
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
class oA extends x.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: s } = t;
    bE(sA), s && (n.group && n.group.add(s), r && r.register && o && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), Di.hasEverUpdated = !0;
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
    t && (t.root.didUpdate(), Md.postRender(() => {
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
function Yx(e) {
  const [t, n] = A0(), r = x.useContext(bd);
  return h.jsx(oA, { ...e, layoutGroup: r, switchLayoutGroup: x.useContext(F0), isPresent: t, safeToRemove: n });
}
const sA = {
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
  boxShadow: rA
};
function iA(e, t, n) {
  const r = Oe(e) ? e : gs(e);
  return r.start(rf("", r, t, n)), r.animation;
}
function aA(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const lA = (e, t) => e.depth - t.depth;
class uA {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Kd(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Gd(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(lA), this.isDirty = !1, this.children.forEach(t);
  }
}
function cA(e, t) {
  const n = Vt.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= t && (jn(r), e(s - t));
  };
  return ie.read(r, !0), () => jn(r);
}
const Xx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], dA = Xx.length, Lh = (e) => typeof e == "string" ? parseFloat(e) : e, _h = (e) => typeof e == "number" || F.test(e);
function fA(e, t, n, r, o, s) {
  o ? (e.opacity = ce(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    pA(r)
  ), e.opacityExit = ce(t.opacity !== void 0 ? t.opacity : 1, 0, hA(r))) : s && (e.opacity = ce(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < dA; i++) {
    const a = `border${Xx[i]}Radius`;
    let l = Ih(t, a), u = Ih(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || _h(l) === _h(u) ? (e[a] = Math.max(ce(Lh(l), Lh(u), r), 0), (Ft.test(u) || Ft.test(l)) && (e[a] += "%")) : e[a] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = ce(t.rotate || 0, n.rotate || 0, r));
}
function Ih(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const pA = /* @__PURE__ */ Qx(0, 0.5, hx), hA = /* @__PURE__ */ Qx(0.5, 0.95, nt);
function Qx(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Zr(e, t, r));
}
function Oh(e, t) {
  e.min = t.min, e.max = t.max;
}
function at(e, t) {
  Oh(e.x, t.x), Oh(e.y, t.y);
}
function Fh(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Vh(e, t, n, r, o) {
  return e -= t, e = da(e, 1 / n, r), o !== void 0 && (e = da(e, 1 / o, r)), e;
}
function mA(e, t = 0, n = 1, r = 0.5, o, s = e, i = e) {
  if (Ft.test(t) && (t = parseFloat(t), t = ce(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let a = ce(s.min, s.max, r);
  e === s && (a -= t), e.min = Vh(e.min, t, n, a, o), e.max = Vh(e.max, t, n, a, o);
}
function zh(e, t, [n, r, o], s, i) {
  mA(e, t[n], t[r], t[o], t.scale, s, i);
}
const gA = ["x", "scaleX", "originX"], yA = ["y", "scaleY", "originY"];
function Bh(e, t, n, r) {
  zh(e.x, t, gA, n ? n.x : void 0, r ? r.x : void 0), zh(e.y, t, yA, n ? n.y : void 0, r ? r.y : void 0);
}
function $h(e) {
  return e.translate === 0 && e.scale === 1;
}
function Zx(e) {
  return $h(e.x) && $h(e.y);
}
function Uh(e, t) {
  return e.min === t.min && e.max === t.max;
}
function vA(e, t) {
  return Uh(e.x, t.x) && Uh(e.y, t.y);
}
function Wh(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function qx(e, t) {
  return Wh(e.x, t.x) && Wh(e.y, t.y);
}
function Hh(e) {
  return ot(e.x) / ot(e.y);
}
function Kh(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class xA {
  constructor() {
    this.members = [];
  }
  add(t) {
    Kd(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Gd(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function wA(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, s = e.y.translate / t.y, i = (n == null ? void 0 : n.z) || 0;
  if ((o || s || i) && (r = `translate3d(${o}px, ${s}px, ${i}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: d, rotateY: f, skewX: m, skewY: w } = n;
    u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), d && (r += `rotateX(${d}deg) `), f && (r += `rotateY(${f}deg) `), m && (r += `skewX(${m}deg) `), w && (r += `skewY(${w}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Kn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, jo = typeof window < "u" && window.MotionDebug !== void 0, Ol = ["", "X", "Y", "Z"], SA = { visibility: "hidden" }, Gh = 1e3;
let kA = 0;
function Fl(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Jx(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = ax(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ie, !(o || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Jx(r);
}
function ew({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(i = {}, a = t == null ? void 0 : t()) {
      this.id = kA++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, jo && (Kn.totalNodes = Kn.resolvedTargetDeltas = Kn.recalculatedProjection = 0), this.nodes.forEach(PA), this.nodes.forEach(AA), this.nodes.forEach(RA), this.nodes.forEach(TA), jo && window.MotionDebug.record(Kn);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new uA());
    }
    addEventListener(i, a) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new Yd()), this.eventHandlers.get(i).add(a);
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
      this.isSVG = aA(i), this.instance = i;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = cA(f, 250), Di.hasAnimatedSinceResize && (Di.hasAnimatedSinceResize = !1, this.nodes.forEach(Xh));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: m, layout: w }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || c.getDefaultTransition() || IA, { onLayoutAnimationStart: S, onLayoutAnimationComplete: g } = c.getProps(), p = !this.targetLayout || !qx(this.targetLayout, w) || m, v = !f && m;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || v || f && (p || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, v);
          const k = {
            ...$d(y, "layout"),
            onPlay: S,
            onComplete: g
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (k.delay = 0, k.type = !1), this.startAnimation(k);
        } else
          f || Xh(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(MA), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Jx(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Yh);
        return;
      }
      this.isUpdating || this.nodes.forEach(DA), this.isUpdating = !1, this.nodes.forEach(NA), this.nodes.forEach(CA), this.nodes.forEach(bA), this.clearAllSnapshots();
      const a = Vt.now();
      Ee.delta = nn(0, 1e3 / 60, a - Ee.timestamp), Ee.timestamp = a, Ee.isProcessing = !0, Dl.update.process(Ee), Dl.preRender.process(Ee), Dl.render.process(Ee), Ee.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Md.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(EA), this.sharedNodes.forEach(jA);
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
      const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Zx(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      i && (a || Hn(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return i && (l = this.removeTransform(l)), OA(l), {
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
      if (!(((i = this.scroll) === null || i === void 0 ? void 0 : i.wasRoot) || this.path.some(FA))) {
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
        oc(u.latestValues) && u.updateSnapshot();
        const c = ve(), d = u.measurePageBox();
        at(c, d), Bh(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Hn(this.latestValues) && Bh(a, this.latestValues), a;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ee.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
        if (this.resolvedRelativeTargetAt = Ee.timestamp, !this.targetDelta && !this.relativeTarget) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ve(), this.relativeTargetOrigin = ve(), Ko(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox), at(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = ve(), this.targetWithTransforms = ve()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), BN(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : at(this.target, this.layout.layoutBox), Hx(this.target, this.targetDelta)) : at(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ve(), this.relativeTargetOrigin = ve(), Ko(this.relativeTargetOrigin, this.target, m.target), at(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          jo && Kn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || oc(this.parent.latestValues) || Wx(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var i;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let u = !0;
      if ((this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === Ee.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d))
        return;
      at(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, m = this.treeScale.y;
      QN(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = ve());
      const { target: w } = a;
      if (!w) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Fh(this.prevProjectionDelta.x, this.projectionDelta.x), Fh(this.prevProjectionDelta.y, this.projectionDelta.y)), Ho(this.projectionDelta, this.layoutCorrected, w, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== m || !Kh(this.projectionDelta.x, this.prevProjectionDelta.x) || !Kh(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", w)), jo && Kn.recalculatedProjection++;
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
      const f = ve(), m = l ? l.source : void 0, w = this.layout ? this.layout.source : void 0, y = m !== w, S = this.getStack(), g = !S || S.members.length <= 1, p = !!(y && !g && this.options.crossfade === !0 && !this.path.some(_A));
      this.animationProgress = 0;
      let v;
      this.mixTargetDelta = (k) => {
        const C = k / 1e3;
        Qh(d.x, i.x, C), Qh(d.y, i.y, C), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ko(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), LA(this.relativeTarget, this.relativeTargetOrigin, f, C), v && vA(this.relativeTarget, v) && (this.isProjectionDirty = !1), v || (v = ve()), at(v, this.relativeTarget)), y && (this.animationValues = c, fA(c, u, this.latestValues, C, p, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (jn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ie.update(() => {
        Di.hasAnimatedSinceResize = !0, this.currentAnimation = iA(0, Gh, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Gh), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = i;
      if (!(!a || !l || !u)) {
        if (this !== i && this.layout && u && tw(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
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
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new xA()), this.sharedNodes.get(i).add(a);
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
      l.z && Fl("z", i, u, this.animationValues);
      for (let c = 0; c < Ol.length; c++)
        Fl(`rotate${Ol[c]}`, i, u, this.animationValues), Fl(`skew${Ol[c]}`, i, u, this.animationValues);
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
        return SA;
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
      this.applyTransformsToTarget(), u.transform = wA(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: m, y: w } = this.projectionDelta;
      u.transformOrigin = `${m.origin * 100}% ${w.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const y in ia) {
        if (f[y] === void 0)
          continue;
        const { correct: S, applyTo: g } = ia[y], p = u.transform === "none" ? f[y] : S(f[y], d);
        if (g) {
          const v = g.length;
          for (let k = 0; k < v; k++)
            u[g[k]] = p;
        } else
          u[y] = p;
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
      }), this.root.nodes.forEach(Yh), this.root.sharedNodes.clear();
    }
  };
}
function CA(e) {
  e.updateLayout();
}
function bA(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: s } = e.options, i = n.source !== e.layout.source;
    s === "size" ? lt((d) => {
      const f = i ? n.measuredBox[d] : n.layoutBox[d], m = ot(f);
      f.min = r[d].min, f.max = f.min + m;
    }) : tw(s, n.layoutBox, r) && lt((d) => {
      const f = i ? n.measuredBox[d] : n.layoutBox[d], m = ot(r[d]);
      f.max = f.min + m, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + m);
    });
    const a = Ar();
    Ho(a, r, n.layoutBox);
    const l = Ar();
    i ? Ho(l, e.applyTransform(o, !0), n.measuredBox) : Ho(l, r, n.layoutBox);
    const u = !Zx(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: m } = d;
        if (f && m) {
          const w = ve();
          Ko(w, n.layoutBox, f.layoutBox);
          const y = ve();
          Ko(y, r, m.layoutBox), qx(w, y) || (c = !0), d.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = w, e.relativeParent = d);
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
function PA(e) {
  jo && Kn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function TA(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function EA(e) {
  e.clearSnapshot();
}
function Yh(e) {
  e.clearMeasurements();
}
function DA(e) {
  e.isLayoutDirty = !1;
}
function NA(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Xh(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function AA(e) {
  e.resolveTargetDelta();
}
function RA(e) {
  e.calcProjection();
}
function MA(e) {
  e.resetSkewAndRotation();
}
function jA(e) {
  e.removeLeadSnapshot();
}
function Qh(e, t, n) {
  e.translate = ce(t.translate, 0, n), e.scale = ce(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Zh(e, t, n, r) {
  e.min = ce(t.min, n.min, r), e.max = ce(t.max, n.max, r);
}
function LA(e, t, n, r) {
  Zh(e.x, t.x, n.x, r), Zh(e.y, t.y, n.y, r);
}
function _A(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const IA = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, qh = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Jh = qh("applewebkit/") && !qh("chrome/") ? Math.round : nt;
function em(e) {
  e.min = Jh(e.min), e.max = Jh(e.max);
}
function OA(e) {
  em(e.x), em(e.y);
}
function tw(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !zN(Hh(t), Hh(n), 0.2);
}
function FA(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const VA = ew({
  attachResizeListener: (e, t) => vs(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Vl = {
  current: void 0
}, nw = ew({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Vl.current) {
      const e = new VA({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Vl.current = e;
    }
    return Vl.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), zA = {
  pan: {
    Feature: nA
  },
  drag: {
    Feature: tA,
    ProjectionNode: nw,
    MeasureLayout: Yx
  }
};
function tm(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, s = r[o];
  s && ie.postRender(() => s(t, As(t)));
}
class BA extends zn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = zE(t, (n) => (tm(this.node, n, "Start"), (r) => tm(this.node, r, "End"))));
  }
  unmount() {
  }
}
class $A extends zn {
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
    this.unmount = Ns(vs(this.node.current, "focus", () => this.onFocus()), vs(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function nm(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n), s = r[o];
  s && ie.postRender(() => s(t, As(t)));
}
class UA extends zn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = WE(t, (n) => (nm(this.node, n, "Start"), (r, { success: o }) => nm(this.node, r, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const ic = /* @__PURE__ */ new WeakMap(), zl = /* @__PURE__ */ new WeakMap(), WA = (e) => {
  const t = ic.get(e.target);
  t && t(e);
}, HA = (e) => {
  e.forEach(WA);
};
function KA({ root: e, ...t }) {
  const n = e || document;
  zl.has(n) || zl.set(n, {});
  const r = zl.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(HA, { root: e, ...t })), r[o];
}
function GA(e, t, n) {
  const r = KA(t);
  return ic.set(e, n), r.observe(e), () => {
    ic.delete(e), r.unobserve(e);
  };
}
const YA = {
  some: 0,
  all: 1
};
class XA extends zn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: s } = t, i = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : YA[o]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return GA(this.node.current, i, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(QA(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function QA({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const ZA = {
  inView: {
    Feature: XA
  },
  tap: {
    Feature: UA
  },
  focus: {
    Feature: $A
  },
  hover: {
    Feature: BA
  }
}, qA = {
  layout: {
    ProjectionNode: nw,
    MeasureLayout: Yx
  }
}, ac = { current: null }, rw = { current: !1 };
function JA() {
  if (rw.current = !0, !!Ed)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => ac.current = e.matches;
      e.addListener(t), t();
    } else
      ac.current = !1;
}
const eR = [...Dx, _e, Ln], tR = (e) => eR.find(Ex(e)), rm = /* @__PURE__ */ new WeakMap();
function nR(e, t, n) {
  for (const r in t) {
    const o = t[r], s = n[r];
    if (Oe(o))
      e.addValue(r, o);
    else if (Oe(s))
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
const om = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class rR {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = ef, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const m = Vt.now();
      this.renderScheduledAt < m && (this.renderScheduledAt = m, ie.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u, onUpdate: c } = i;
    this.onUpdate = c, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.blockInitialAnimation = !!s, this.isControllingVariants = za(n), this.isVariantNode = I0(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const m in f) {
      const w = f[m];
      l[m] !== void 0 && Oe(w) && w.set(l[m], !1);
    }
  }
  mount(t) {
    this.current = t, rm.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), rw.current || JA(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : ac.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    rm.delete(this.current), this.projection && this.projection.unmount(), jn(this.notifyUpdate), jn(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    for (let r = 0; r < om.length; r++) {
      const o = om[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const s = "on" + o, i = t[s];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = nR(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return o != null && (typeof o == "string" && (Px(o) || gx(o)) ? o = parseFloat(o) : !tR(o) && Ln.test(n) && (o = kx(t, n)), this.setBaseTarget(t, Oe(o) ? o.get() : o)), Oe(o) ? o.get() : o;
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
      const i = Ld(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      i && (o = i[t]);
    }
    if (r && o !== void 0)
      return o;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !Oe(s) ? s : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Yd()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class ow extends rR {
  constructor() {
    super(...arguments), this.KeyframeResolver = Nx;
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
function oR(e) {
  return window.getComputedStyle(e);
}
class sR extends ow {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = H0;
  }
  readValueFromInstance(t, n) {
    if (dr.has(n)) {
      const r = Jd(n);
      return r && r.default || 0;
    } else {
      const r = oR(t), o = ($0(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Kx(t, n);
  }
  build(t, n, r) {
    Od(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Bd(t, n, r);
  }
}
class iR extends ow {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ve;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (dr.has(n)) {
      const r = Jd(n);
      return r && r.default || 0;
    }
    return n = K0.has(n) ? n : Rd(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return X0(t, n, r);
  }
  build(t, n, r) {
    Fd(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    G0(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = zd(t.tagName), super.mount(t);
  }
}
const aR = (e, t) => jd(e) ? new iR(t) : new sR(t, {
  allowProjection: e !== x.Fragment
}), lR = /* @__PURE__ */ jE({
  ...RN,
  ...ZA,
  ...zA,
  ...qA
}, aR), ci = /* @__PURE__ */ YT(lR);
function uR({ events: e, eventMetadata: t, onDateClick: n, onEventClick: r }) {
  const [o, s] = x.useState(/* @__PURE__ */ new Date()), [i, a] = x.useState(0), [l, u] = x.useState(null), c = (b, P) => {
    const T = new Date(P, b + 1, 0).getDate();
    return Array.from({ length: T }, (N, D) => ({ day: D + 1 }));
  }, d = (b, P) => e.filter((T) => {
    const N = new Date(T.startDate);
    return N.getDate() === b && N.getMonth() === P.getMonth() && N.getFullYear() === P.getFullYear();
  }), f = (b) => b.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), m = () => {
    a(-1);
    const b = new Date(o.getFullYear(), o.getMonth() - 1, 1);
    s(b);
  }, w = () => {
    a(1);
    const b = new Date(o.getFullYear(), o.getMonth() + 1, 1);
    s(b);
  }, y = c(o.getMonth(), o.getFullYear()), S = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], p = new Date(o.getFullYear(), o.getMonth(), 1).getDay(), v = new Date(o.getFullYear(), o.getMonth() - 1, 1), k = new Date(v.getFullYear(), v.getMonth() + 1, 0).getDate(), C = ({ events: b }) => {
    const P = {
      academic: "bg-green-500",
      social: "bg-orange-500",
      cultural: "bg-purple-500",
      sports: "bg-red-500",
      professional: "bg-teal-500",
      wellness: "bg-blue-500",
      volunteer: "bg-yellow-500",
      arts: "bg-pink-500"
    }, T = b.reduce((N, D) => {
      const j = t[D.id], R = (j == null ? void 0 : j.category) || "other";
      return N[R] || (N[R] = []), N[R].push(D), N;
    }, {});
    return /* @__PURE__ */ h.jsx("div", { className: "flex flex-wrap gap-1", children: Object.entries(T).map(([N, D]) => {
      const j = P[N] || "bg-gray-500";
      return /* @__PURE__ */ h.jsx(
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
  return /* @__PURE__ */ h.jsxs("div", { children: [
    /* @__PURE__ */ h.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4", children: [
      /* @__PURE__ */ h.jsxs(
        ci.h2,
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
      /* @__PURE__ */ h.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ h.jsxs(En, { variant: "outline", onClick: m, className: "gap-2", children: [
          /* @__PURE__ */ h.jsx(Ov, { className: "h-4 w-4" }),
          "Prev"
        ] }),
        /* @__PURE__ */ h.jsxs(En, { variant: "outline", onClick: w, className: "gap-2", children: [
          "Next",
          /* @__PURE__ */ h.jsx(Fv, { className: "h-4 w-4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ h.jsx(Wp, { initial: !1, custom: i, mode: "wait", children: /* @__PURE__ */ h.jsxs(
      ci.div,
      {
        custom: i,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        className: "grid grid-cols-7 gap-1 sm:gap-2",
        children: [
          S.map((b, P) => /* @__PURE__ */ h.jsx(
            "div",
            {
              className: "text-left my-8 text-4xl tracking-tighter font-medium text-gray-900 dark:text-gray-100",
              children: b
            },
            P
          )),
          Array.from({ length: p }).map((b, P) => /* @__PURE__ */ h.jsx("div", { className: "h-[150px] opacity-50", children: /* @__PURE__ */ h.jsx("div", { className: "font-semibold relative text-3xl mb-1 text-gray-400 dark:text-gray-500", children: k - p + P + 1 }) }, `offset-${P}`)),
          y.map((b, P) => {
            const T = d(b.day, o), N = (/* @__PURE__ */ new Date()).getDate() === b.day && (/* @__PURE__ */ new Date()).getMonth() === o.getMonth() && (/* @__PURE__ */ new Date()).getFullYear() === o.getFullYear(), j = (p + b.day - 1) % 7 >= 5;
            return /* @__PURE__ */ h.jsxs(
              ci.div,
              {
                className: "hover:z-50 border-none h-[150px] rounded group flex flex-col relative",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -20 },
                transition: { duration: 0.3 },
                onMouseEnter: () => u(b.day),
                onMouseLeave: () => u(null),
                children: [
                  /* @__PURE__ */ h.jsxs(
                    od,
                    {
                      className: `shadow-md overflow-hidden relative flex p-4 border h-full transition-shadow day-card ${T.length > 0 ? "cursor-pointer hover:shadow-lg" : "cursor-default"}`,
                      onClick: T.length > 0 ? () => n == null ? void 0 : n(new Date(o.getFullYear(), o.getMonth(), b.day)) : void 0,
                      children: [
                        /* @__PURE__ */ h.jsx("div", { className: `font-semibold relative text-3xl mb-1 ${T.length > 0 ? "text-gray-900 dark:text-gray-100" : "text-gray-500 dark:text-gray-400"} ${N ? "text-secondary-500" : ""}`, children: b.day }),
                        /* @__PURE__ */ h.jsx("div", { className: "flex-grow flex flex-col gap-2 w-full", children: /* @__PURE__ */ h.jsx(Wp, { mode: "wait", children: (T == null ? void 0 : T.length) > 0 && /* @__PURE__ */ h.jsx(
                          ci.div,
                          {
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0, y: -20 },
                            transition: { duration: 0.3 },
                            children: /* @__PURE__ */ h.jsx(C, { events: T })
                          },
                          T[0].id
                        ) }) })
                      ]
                    }
                  ),
                  l === b.day && T.length > 0 && /* @__PURE__ */ h.jsxs(
                    "div",
                    {
                      className: `absolute top-full z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3 w-80 ${j ? "right-0" : "left-0"}`,
                      onMouseEnter: () => u(b.day),
                      onMouseLeave: () => u(null),
                      children: [
                        /* @__PURE__ */ h.jsxs("div", { className: "text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2", children: [
                          T.length,
                          " event",
                          T.length > 1 ? "s" : ""
                        ] }),
                        /* @__PURE__ */ h.jsx("div", { className: "space-y-2", children: T.map((R) => {
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
                          return /* @__PURE__ */ h.jsxs(
                            "div",
                            {
                              className: "flex items-start gap-2 p-1 -m-1 rounded cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
                              onClick: (I) => {
                                I.stopPropagation(), r == null || r(R);
                              },
                              children: [
                                /* @__PURE__ */ h.jsx("div", { className: `w-2 h-2 rounded-full ${Y} flex-shrink-0 mt-1.5` }),
                                /* @__PURE__ */ h.jsxs("div", { className: "flex-1 min-w-0", children: [
                                  /* @__PURE__ */ h.jsx("div", { className: "font-medium text-sm text-gray-800 dark:text-gray-200 leading-tight", children: R.title }),
                                  /* @__PURE__ */ h.jsx("div", { className: "text-xs text-gray-600 dark:text-gray-400 mt-0.5", children: f(R.startDate) })
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
              b.day
            );
          })
        ]
      },
      `${o.getFullYear()}-${o.getMonth()}`
    ) })
  ] });
}
function cR({ events: e, eventMetadata: t, onEventClick: n }) {
  const [r, o] = be.useState(/* @__PURE__ */ new Date()), i = ((d) => {
    const f = new Date(d);
    return f.setDate(d.getDate() - d.getDay()), Array.from({ length: 7 }, (m, w) => {
      const y = new Date(f);
      return y.setDate(f.getDate() + w), y;
    });
  })(r), a = Array.from({ length: 24 }, (d, f) => f), l = (d) => e.filter((f) => f.startDate.toDateString() === d.toDateString()), u = (d) => {
    const f = new Date(r);
    f.setDate(r.getDate() + (d === "next" ? 7 : -7)), o(f);
  }, c = (d, f, m) => {
    const w = d.startDate.getHours(), y = d.startDate.getMinutes(), S = d.endDate ? d.endDate.getHours() : w + 1, g = d.endDate ? d.endDate.getMinutes() : 0, p = w + y / 60, v = S + g / 60, k = v - p, C = f.filter((D) => {
      if (D.id === d.id) return !0;
      if (D.startDate.toDateString() !== d.startDate.toDateString())
        return !1;
      const j = D.startDate.getHours() + D.startDate.getMinutes() / 60, R = (D.endDate ? D.endDate.getHours() : D.startDate.getHours() + 1) + (D.endDate ? D.endDate.getMinutes() / 60 : 0);
      return p < R && v > j;
    }), b = C.length, P = C.findIndex((D) => D.id === d.id), T = b > 1 ? 100 / b : 100, N = b > 1 ? P * T : 0;
    return {
      top: `${p * 80}px`,
      // 80px per hour for better readability
      height: `${k * 80}px`,
      // Accurate height based on actual duration
      left: `${N}%`,
      width: `${T}%`
    };
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ h.jsx(
        "button",
        {
          onClick: () => u("prev"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ h.jsx(zv, { className: "h-5 w-5" })
        }
      ),
      /* @__PURE__ */ h.jsxs("h2", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: [
        i[0].toLocaleDateString("en-US", { month: "long", day: "numeric" }),
        " - ",
        i[6].toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
      ] }),
      /* @__PURE__ */ h.jsx(
        "button",
        {
          onClick: () => u("next"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ h.jsx(Bv, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "grid grid-cols-8 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700", children: [
        /* @__PURE__ */ h.jsx("div", { className: "p-3 text-xs font-medium text-gray-500 dark:text-gray-400 border-r border-gray-200 dark:border-gray-600", children: "Time" }),
        i.map((d, f) => /* @__PURE__ */ h.jsxs("div", { className: "p-3 text-center border-r border-gray-200 dark:border-gray-600 last:border-r-0", children: [
          /* @__PURE__ */ h.jsx("div", { className: "text-xs font-medium text-gray-500 dark:text-gray-400", children: d.toLocaleDateString("en-US", { weekday: "short" }) }),
          /* @__PURE__ */ h.jsx("div", { className: "text-sm font-semibold text-gray-900 dark:text-gray-100", children: d.getDate() })
        ] }, f))
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "grid grid-cols-8 relative", children: [
        /* @__PURE__ */ h.jsx("div", { className: "border-r border-gray-200 dark:border-gray-600", children: a.map((d) => /* @__PURE__ */ h.jsx("div", { className: "h-[80px] p-2 text-xs text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600 flex items-start", children: d === 0 ? "12 AM" : d === 12 ? "12 PM" : d > 12 ? `${d - 12} PM` : `${d} AM` }, d)) }),
        i.map((d, f) => {
          const m = l(d);
          return /* @__PURE__ */ h.jsxs("div", { className: "relative border-r border-gray-200 dark:border-gray-600 last:border-r-0", children: [
            a.map((w) => /* @__PURE__ */ h.jsx("div", { className: "h-[80px] border-b border-gray-200 dark:border-gray-600" }, w)),
            m.map((w, y) => {
              const S = t[w.id], p = S ? {
                academic: "bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 border-green-200 dark:border-green-700",
                social: "bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-100 border-orange-200 dark:border-orange-700",
                cultural: "bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100 border-purple-200 dark:border-purple-700",
                sports: "bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100 border-red-200 dark:border-red-700",
                professional: "bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-100 border-teal-200 dark:border-teal-700",
                wellness: "bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 border-blue-200 dark:border-blue-700",
                volunteer: "bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100 border-yellow-200 dark:border-yellow-700",
                arts: "bg-pink-100 dark:bg-pink-800 text-pink-800 dark:text-pink-100 border-pink-200 dark:border-pink-700"
              }[S.category] : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-600", v = c(w, m);
              return /* @__PURE__ */ h.jsxs(
                "div",
                {
                  className: `absolute ${p} border rounded p-2 text-sm z-20 overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow event-card`,
                  style: {
                    ...v,
                    margin: "1px"
                  },
                  onClick: (k) => {
                    k.stopPropagation(), n == null || n(w);
                  },
                  children: [
                    /* @__PURE__ */ h.jsx("div", { className: "font-medium leading-tight truncate text-sm", children: w.title }),
                    /* @__PURE__ */ h.jsx("div", { className: "text-xs opacity-75 leading-tight", children: w.startDate.toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: !0
                    }) }),
                    S && /* @__PURE__ */ h.jsxs("div", { className: "text-xs leading-tight", children: [
                      /* @__PURE__ */ h.jsx("div", { className: "truncate", children: S.location }),
                      S.organization && /* @__PURE__ */ h.jsx("div", { className: "truncate opacity-75", children: S.organization })
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
function dR({ events: e, eventMetadata: t, initialDate: n, onEventClick: r }) {
  const [o, s] = be.useState(n || /* @__PURE__ */ new Date());
  be.useEffect(() => {
    n && s(n);
  }, [n]);
  const i = Array.from({ length: 24 }, (f, m) => m), a = () => e.filter((f) => f.startDate.toDateString() === o.toDateString()), l = (f) => {
    const m = new Date(o);
    m.setDate(o.getDate() + (f === "next" ? 1 : -1)), s(m);
  }, u = (f, m, w) => {
    const y = f.startDate.getHours(), S = f.startDate.getMinutes(), g = f.endDate ? f.endDate.getHours() : y + 1, p = f.endDate ? f.endDate.getMinutes() : 0, v = y + S / 60, k = g + p / 60, C = k - v, b = m.filter((j) => {
      if (j.id === f.id) return !0;
      const R = j.startDate.getHours() + j.startDate.getMinutes() / 60, z = (j.endDate ? j.endDate.getHours() : j.startDate.getHours() + 1) + (j.endDate ? j.endDate.getMinutes() / 60 : 0);
      return v < z && k > R;
    }), P = b.length, T = b.findIndex((j) => j.id === f.id), N = P > 1 ? 100 / P : 100, D = P > 1 ? T * N : 0;
    return {
      top: `${v * 80}px`,
      // 80px per hour for day view
      height: `${C * 80}px`,
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
  return /* @__PURE__ */ h.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ h.jsx(
        "button",
        {
          onClick: () => l("prev"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ h.jsx(zv, { className: "h-5 w-5" })
        }
      ),
      /* @__PURE__ */ h.jsx("h2", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: o.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }) }),
      /* @__PURE__ */ h.jsx(
        "button",
        {
          onClick: () => l("next"),
          className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300",
          children: /* @__PURE__ */ h.jsx(Bv, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ h.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden", children: /* @__PURE__ */ h.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ h.jsx("div", { className: "w-20 border-r border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700", children: i.map((f) => /* @__PURE__ */ h.jsx("div", { className: "h-[80px] p-3 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600 flex items-start", children: f === 0 ? "12 AM" : f === 12 ? "12 PM" : f > 12 ? `${f - 12} PM` : `${f} AM` }, f)) }),
      /* @__PURE__ */ h.jsxs("div", { className: "flex-1 relative", children: [
        i.map((f) => /* @__PURE__ */ h.jsx("div", { className: "h-[80px] border-b border-gray-200 dark:border-gray-600" }, f)),
        c.map((f, m) => {
          const w = t[f.id], y = w ? d[w.category] : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-600", S = u(f, c);
          return /* @__PURE__ */ h.jsxs(
            "div",
            {
              className: `absolute ${y} border rounded-lg p-2 text-sm z-20 overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow event-card`,
              style: {
                ...S,
                margin: "2px"
              },
              onClick: (g) => {
                g.stopPropagation(), r == null || r(f);
              },
              children: [
                /* @__PURE__ */ h.jsx("div", { className: "font-semibold leading-tight truncate", children: f.title }),
                /* @__PURE__ */ h.jsxs("div", { className: "text-xs opacity-75 leading-tight", children: [
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
                w && /* @__PURE__ */ h.jsxs("div", { className: "text-xs leading-tight", children: [
                  /* @__PURE__ */ h.jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ h.jsx($v, { className: "h-2.5 w-2.5" }),
                    /* @__PURE__ */ h.jsx("span", { className: "truncate", children: w.location })
                  ] }),
                  w.organization && /* @__PURE__ */ h.jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ h.jsx(zP, { className: "h-2.5 w-2.5" }),
                    /* @__PURE__ */ h.jsx("span", { className: "truncate opacity-75", children: w.organization })
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
function fR({ events: e, eventMetadata: t, onEventClick: n }) {
  const [r, o] = be.useState(/* @__PURE__ */ new Date()), [s, i] = be.useState(/* @__PURE__ */ new Date()), a = () => {
    i((p) => new Date(p.getFullYear(), p.getMonth() - 1, 1));
  }, l = () => {
    i((p) => new Date(p.getFullYear(), p.getMonth() + 1, 1));
  }, u = (p) => p.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), d = r ? e.filter((p) => {
    const v = new Date(p.startDate);
    return v.getDate() === r.getDate() && v.getMonth() === r.getMonth() && v.getFullYear() === r.getFullYear();
  }) : [], f = s.getFullYear(), m = s.getMonth(), w = new Date(f, m, 1), y = new Date(w);
  y.setDate(y.getDate() - w.getDay());
  const S = [], g = new Date(y);
  for (let p = 0; p < 42; p++)
    S.push(new Date(g)), g.setDate(g.getDate() + 1);
  return /* @__PURE__ */ h.jsxs(od, { className: "w-full py-4 mobile-calendar", children: [
    /* @__PURE__ */ h.jsxs(Py, { className: "px-4", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ h.jsxs(
          En,
          {
            variant: "outline",
            size: "sm",
            onClick: a,
            children: [
              /* @__PURE__ */ h.jsx(Ov, { className: "h-4 w-4" }),
              "Prev"
            ]
          }
        ),
        /* @__PURE__ */ h.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: s.toLocaleDateString("en-US", { month: "long", year: "numeric" }) }),
        /* @__PURE__ */ h.jsxs(
          En,
          {
            variant: "outline",
            size: "sm",
            onClick: l,
            children: [
              "Next",
              /* @__PURE__ */ h.jsx(Fv, { className: "h-4 w-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "grid grid-cols-7 gap-1 mb-4", children: [
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((p) => /* @__PURE__ */ h.jsx("div", { className: "text-center text-sm font-medium py-2 text-gray-600 dark:text-gray-400", children: p }, p)),
        S.map((p, v) => {
          const k = p.getMonth() === m, C = r && p.getDate() === r.getDate() && p.getMonth() === r.getMonth() && p.getFullYear() === r.getFullYear(), b = p.toDateString() === (/* @__PURE__ */ new Date()).toDateString();
          return /* @__PURE__ */ h.jsx(
            "button",
            {
              onClick: () => o(p),
              className: `
                  p-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors
                  ${k ? "text-gray-900 dark:text-gray-100" : "text-gray-400 dark:text-gray-500"}
                  ${C ? "bg-blue-500 text-white hover:bg-blue-600" : ""}
                  ${b && !C ? "bg-gray-200 dark:bg-gray-700 font-semibold" : ""}
                `,
              children: p.getDate()
            },
            v
          );
        })
      ] })
    ] }),
    /* @__PURE__ */ h.jsxs(fk, { className: "flex flex-col items-start gap-3 border-t px-4 !pt-4", children: [
      /* @__PURE__ */ h.jsx("div", { className: "flex w-full items-center justify-between px-1", children: /* @__PURE__ */ h.jsx("div", { className: "text-sm font-medium text-gray-900 dark:text-gray-100", children: r == null ? void 0 : r.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }) }) }),
      /* @__PURE__ */ h.jsx("div", { className: "flex w-full flex-col gap-2", children: d.length === 0 ? /* @__PURE__ */ h.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400 text-center py-4", children: "No events on this day" }) : d.map((p) => {
        const v = t[p.id], C = v ? {
          academic: "after:bg-green-500",
          social: "after:bg-orange-500",
          cultural: "after:bg-purple-500",
          sports: "after:bg-red-500",
          professional: "after:bg-teal-500",
          wellness: "after:bg-blue-500",
          volunteer: "after:bg-yellow-500",
          arts: "after:bg-pink-500"
        }[v.category] : "after:bg-gray-500";
        return /* @__PURE__ */ h.jsxs(
          "button",
          {
            className: `bg-muted dark:bg-gray-700 relative rounded-md p-2 pl-6 text-sm text-left w-full after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors ${C}`,
            onClick: () => n == null ? void 0 : n(p),
            children: [
              /* @__PURE__ */ h.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100", children: p.title }),
              /* @__PURE__ */ h.jsxs("div", { className: "text-muted-foreground dark:text-gray-400 text-xs", children: [
                u(p.startDate),
                " - ",
                u(p.endDate),
                v && ` • ${v.location}`
              ] })
            ]
          },
          p.id
        );
      }) })
    ] })
  ] });
}
function pR({ events: e, eventMetadata: t, onEventClick: n }) {
  const r = (i) => i.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), o = [...e].sort((i, a) => i.startDate.getTime() - a.startDate.getTime()), s = o.reduce((i, a) => {
    const l = a.startDate.toDateString();
    return i[l] || (i[l] = []), i[l].push(a), i;
  }, {});
  return /* @__PURE__ */ h.jsx("div", { className: "space-y-6", children: o.length === 0 ? /* @__PURE__ */ h.jsxs("div", { className: "text-center py-12 text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ h.jsx(mn, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
    /* @__PURE__ */ h.jsx("h3", { className: "text-lg font-medium mb-2", children: "No events found" }),
    /* @__PURE__ */ h.jsx("p", { children: "Try adjusting your filters to see more events." })
  ] }) : Object.entries(s).map(([i, a]) => {
    const l = new Date(i), u = l.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), c = l.toDateString() === new Date(Date.now() + 864e5).toDateString();
    let d = l.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    });
    return u ? d = `Today, ${d}` : c && (d = `Tomorrow, ${d}`), /* @__PURE__ */ h.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ h.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: d }),
        /* @__PURE__ */ h.jsx("div", { className: "flex-1 h-px bg-gray-200 dark:bg-gray-600" }),
        /* @__PURE__ */ h.jsxs("span", { className: "text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full", children: [
          a.length,
          " event",
          a.length > 1 ? "s" : ""
        ] })
      ] }),
      /* @__PURE__ */ h.jsx("div", { className: "space-y-2", children: a.map((f) => {
        const m = t[f.id], y = m ? {
          academic: "after:bg-green-500",
          social: "after:bg-orange-500",
          cultural: "after:bg-purple-500",
          sports: "after:bg-red-500",
          professional: "after:bg-teal-500",
          wellness: "after:bg-blue-500",
          volunteer: "after:bg-yellow-500",
          arts: "after:bg-pink-500"
        }[m.category] : "after:bg-gray-500";
        return /* @__PURE__ */ h.jsxs(
          "div",
          {
            className: `bg-muted dark:bg-gray-700 relative rounded-md p-3 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors ${y}`,
            onClick: () => n == null ? void 0 : n(f),
            children: [
              /* @__PURE__ */ h.jsxs("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ h.jsxs("div", { className: "flex-grow min-w-0", children: [
                  /* @__PURE__ */ h.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100", children: f.title }),
                  /* @__PURE__ */ h.jsxs("div", { className: "text-muted-foreground dark:text-gray-400 text-xs mt-1", children: [
                    r(f.startDate),
                    " - ",
                    r(f.endDate)
                  ] }),
                  m && /* @__PURE__ */ h.jsx("div", { className: "text-muted-foreground dark:text-gray-400 text-xs mt-1", children: m.location }),
                  m && /* @__PURE__ */ h.jsx("div", { className: "text-muted-foreground dark:text-gray-400 text-xs mt-1", children: m.organization })
                ] }),
                m && /* @__PURE__ */ h.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: m.cost })
              ] }),
              (m == null ? void 0 : m.registrationRequired) && /* @__PURE__ */ h.jsx("div", { className: "mt-2", children: /* @__PURE__ */ h.jsx(Qr, { variant: "outline", size: "sm", children: "Registration Required" }) })
            ]
          },
          f.id
        );
      }) })
    ] }, i);
  }) });
}
function hR({ events: e, eventMetadata: t, onEventClick: n }) {
  const r = (i) => i.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), o = [...e].sort((i, a) => i.startDate.getTime() - a.startDate.getTime()), s = o.reduce((i, a) => {
    const l = a.startDate.toDateString();
    return i[l] || (i[l] = []), i[l].push(a), i;
  }, {});
  return /* @__PURE__ */ h.jsx("div", { className: "space-y-6", children: o.length === 0 ? /* @__PURE__ */ h.jsxs("div", { className: "text-center py-12 text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ h.jsx(mn, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
    /* @__PURE__ */ h.jsx("h3", { className: "text-lg font-medium mb-2", children: "No events found" }),
    /* @__PURE__ */ h.jsx("p", { children: "Try adjusting your filters to see more events." })
  ] }) : Object.entries(s).map(([i, a]) => {
    const l = new Date(i), u = l.toDateString() === (/* @__PURE__ */ new Date()).toDateString(), c = l.toDateString() === new Date(Date.now() + 864e5).toDateString();
    let d = l.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    });
    return u ? d = `Today, ${d}` : c && (d = `Tomorrow, ${d}`), /* @__PURE__ */ h.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ h.jsx("h3", { className: "text-base font-semibold text-gray-900 dark:text-gray-100", children: d }),
        /* @__PURE__ */ h.jsx("div", { className: "flex-1 h-px bg-gray-200 dark:bg-gray-600" }),
        /* @__PURE__ */ h.jsx("span", { className: "text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full", children: a.length })
      ] }),
      /* @__PURE__ */ h.jsx("div", { className: "space-y-2", children: a.map((f) => {
        const m = t[f.id], y = m ? {
          academic: "after:bg-green-500",
          social: "after:bg-orange-500",
          cultural: "after:bg-purple-500",
          sports: "after:bg-red-500",
          professional: "after:bg-teal-500",
          wellness: "after:bg-blue-500",
          volunteer: "after:bg-yellow-500",
          arts: "after:bg-pink-500"
        }[m.category] : "after:bg-gray-500";
        return /* @__PURE__ */ h.jsxs(
          "div",
          {
            className: `bg-muted dark:bg-gray-700 relative rounded-md p-3 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors ${y}`,
            onClick: () => n == null ? void 0 : n(f),
            children: [
              /* @__PURE__ */ h.jsxs("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ h.jsxs("div", { className: "flex-grow min-w-0", children: [
                  /* @__PURE__ */ h.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100", children: f.title }),
                  /* @__PURE__ */ h.jsxs("div", { className: "text-muted-foreground dark:text-gray-400 text-xs mt-1", children: [
                    r(f.startDate),
                    " - ",
                    r(f.endDate)
                  ] }),
                  m && /* @__PURE__ */ h.jsx("div", { className: "text-muted-foreground dark:text-gray-400 text-xs mt-1", children: m.location }),
                  m && /* @__PURE__ */ h.jsx("div", { className: "text-muted-foreground dark:text-gray-400 text-xs mt-1", children: m.organization })
                ] }),
                m && /* @__PURE__ */ h.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: m.cost })
              ] }),
              (m == null ? void 0 : m.registrationRequired) && /* @__PURE__ */ h.jsx("div", { className: "mt-2", children: /* @__PURE__ */ h.jsx(Qr, { variant: "outline", size: "sm", children: "Registration Required" }) })
            ]
          },
          f.id
        );
      }) })
    ] }, i);
  }) });
}
function mR() {
  const [e, t] = x.useState("month"), [n, r] = x.useState(/* @__PURE__ */ new Date()), [o, s] = x.useState(null), [i, a] = x.useState(!1);
  be.useEffect(() => {
    const b = document.createElement("style");
    return b.textContent = `
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
    `, document.head.appendChild(b), () => {
      document.head.removeChild(b);
    };
  }, []);
  const [l, u] = x.useState("all"), [c, d] = x.useState("all"), [f, m] = x.useState(""), {
    events: w,
    eventMetadata: y,
    loading: S,
    error: g
  } = vT({
    per_page: 1e3
    // Get all events
  }), { organizations: p } = wT(), v = be.useMemo(() => {
    let b = w;
    if (l !== "all" && (b = b.filter((P) => {
      var N;
      const T = y[P.id];
      return (N = T == null ? void 0 : T.categories) == null ? void 0 : N.some((D) => D.slug === l);
    })), c !== "all" && (b = b.filter((P) => {
      const T = y[P.id], N = p.find((D) => D.id.toString() === c);
      return N && (T == null ? void 0 : T.organization) === N.title.rendered;
    })), f) {
      const P = f.toLowerCase();
      b = b.filter((T) => {
        var D, j, R;
        const N = y[T.id];
        return T.title.toLowerCase().includes(P) || ((D = N == null ? void 0 : N.description) == null ? void 0 : D.toLowerCase().includes(P)) || ((j = N == null ? void 0 : N.location) == null ? void 0 : j.toLowerCase().includes(P)) || ((R = N == null ? void 0 : N.organization) == null ? void 0 : R.toLowerCase().includes(P));
      });
    }
    return b;
  }, [w, y, l, c, f, p]), k = (b) => {
    r(b), t("day");
  }, C = (b) => {
    s(b), a(!0);
  };
  return S ? /* @__PURE__ */ h.jsx("div", { className: "w-full flex items-center justify-center py-12", children: /* @__PURE__ */ h.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ h.jsx(HP, { className: "h-8 w-8 animate-spin mx-auto mb-4" }),
    /* @__PURE__ */ h.jsx("p", { className: "text-gray-600", children: "Loading events..." })
  ] }) }) : g ? /* @__PURE__ */ h.jsx("div", { className: "w-full py-12", children: /* @__PURE__ */ h.jsx(od, { className: "max-w-md mx-auto", children: /* @__PURE__ */ h.jsxs(Py, { className: "pt-6 text-center", children: [
    /* @__PURE__ */ h.jsxs("p", { className: "text-red-600 mb-4", children: [
      "Error loading events: ",
      g
    ] }),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        onClick: () => window.location.reload(),
        className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
        children: "Retry"
      }
    )
  ] }) }) }) : /* @__PURE__ */ h.jsxs("div", { className: "w-full space-y-6", children: [
    /* @__PURE__ */ h.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm unbc-calendar-view", children: /* @__PURE__ */ h.jsxs(gT, { value: e, onValueChange: t, className: "w-full", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "hidden md:flex p-6 pb-0 justify-between items-start gap-6", children: [
        /* @__PURE__ */ h.jsxs(Bp, { className: "h-9 bg-gray-100 dark:bg-gray-700 p-1", children: [
          /* @__PURE__ */ h.jsxs(Bn, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ h.jsx(mn, { className: "h-3 w-3" }),
            "Day"
          ] }),
          /* @__PURE__ */ h.jsxs(Bn, { value: "week", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ h.jsx(mn, { className: "h-3 w-3" }),
            "Week"
          ] }),
          /* @__PURE__ */ h.jsxs(Bn, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ h.jsx(mn, { className: "h-3 w-3" }),
            "Month"
          ] }),
          /* @__PURE__ */ h.jsxs(Bn, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ h.jsx(zp, { className: "h-3 w-3" }),
            "List"
          ] })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ h.jsxs(ei, { onValueChange: u, children: [
            /* @__PURE__ */ h.jsx(ni, { className: "w-40 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ h.jsx(ti, { placeholder: "All Categories" }) }),
            /* @__PURE__ */ h.jsxs(ri, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600", children: [
              /* @__PURE__ */ h.jsx(pe, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Categories" }),
              /* @__PURE__ */ h.jsx(pe, { value: "academic", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Academic" }),
              /* @__PURE__ */ h.jsx(pe, { value: "arts", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Arts & Creative" }),
              /* @__PURE__ */ h.jsx(pe, { value: "cultural", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Cultural" }),
              /* @__PURE__ */ h.jsx(pe, { value: "professional", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Professional" }),
              /* @__PURE__ */ h.jsx(pe, { value: "social", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Social" }),
              /* @__PURE__ */ h.jsx(pe, { value: "sports", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Sports & Recreation" }),
              /* @__PURE__ */ h.jsx(pe, { value: "volunteer", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Volunteer" }),
              /* @__PURE__ */ h.jsx(pe, { value: "wellness", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Health & Wellness" })
            ] })
          ] }),
          /* @__PURE__ */ h.jsxs(ei, { value: c, onValueChange: d, children: [
            /* @__PURE__ */ h.jsx(ni, { className: "w-44 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 [&>span]:truncate [&>span]:block", children: /* @__PURE__ */ h.jsx(ti, { placeholder: "All Organizations" }) }),
            /* @__PURE__ */ h.jsxs(ri, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 max-h-[200px] overflow-y-auto", children: [
              /* @__PURE__ */ h.jsx(pe, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Organizations" }),
              p.map((b) => /* @__PURE__ */ h.jsx(
                pe,
                {
                  value: b.id.toString(),
                  className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600",
                  children: b.title.rendered
                },
                b.id
              ))
            ] })
          ] }),
          /* @__PURE__ */ h.jsx(
            Wu,
            {
              placeholder: "Search events...",
              onChange: (b) => m(b.target.value),
              className: "w-40 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "md:hidden", children: [
        /* @__PURE__ */ h.jsx("div", { className: "p-6 pb-0 flex justify-center", children: /* @__PURE__ */ h.jsxs(Bp, { className: "h-9 bg-gray-100 dark:bg-gray-700 p-1", children: [
          /* @__PURE__ */ h.jsxs(Bn, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ h.jsx(mn, { className: "h-3 w-3" }),
            "Day"
          ] }),
          /* @__PURE__ */ h.jsxs(Bn, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ h.jsx(mn, { className: "h-3 w-3" }),
            "Month"
          ] }),
          /* @__PURE__ */ h.jsxs(Bn, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ h.jsx(zp, { className: "h-3 w-3" }),
            "List"
          ] })
        ] }) }),
        /* @__PURE__ */ h.jsxs("div", { className: "p-6 pt-4 space-y-3", children: [
          /* @__PURE__ */ h.jsxs(ei, { onValueChange: u, children: [
            /* @__PURE__ */ h.jsx(ni, { className: "border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ h.jsx(ti, { placeholder: "All Categories" }) }),
            /* @__PURE__ */ h.jsxs(ri, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600", children: [
              /* @__PURE__ */ h.jsx(pe, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Categories" }),
              /* @__PURE__ */ h.jsx(pe, { value: "academic", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Academic" }),
              /* @__PURE__ */ h.jsx(pe, { value: "arts", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Arts & Creative" }),
              /* @__PURE__ */ h.jsx(pe, { value: "cultural", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Cultural" }),
              /* @__PURE__ */ h.jsx(pe, { value: "professional", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Professional" }),
              /* @__PURE__ */ h.jsx(pe, { value: "social", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Social" }),
              /* @__PURE__ */ h.jsx(pe, { value: "sports", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Sports & Recreation" }),
              /* @__PURE__ */ h.jsx(pe, { value: "volunteer", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Volunteer" }),
              /* @__PURE__ */ h.jsx(pe, { value: "wellness", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Health & Wellness" })
            ] })
          ] }),
          /* @__PURE__ */ h.jsxs(ei, { value: c, onValueChange: d, children: [
            /* @__PURE__ */ h.jsx(ni, { className: "border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ h.jsx(ti, { placeholder: "All Organizations", className: "truncate" }) }),
            /* @__PURE__ */ h.jsxs(ri, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 max-h-[200px] overflow-y-auto", children: [
              /* @__PURE__ */ h.jsx(pe, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Organizations" }),
              p.map((b) => /* @__PURE__ */ h.jsx(
                pe,
                {
                  value: b.id.toString(),
                  className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600",
                  children: b.title.rendered
                },
                b.id
              ))
            ] })
          ] }),
          /* @__PURE__ */ h.jsx(
            Wu,
            {
              placeholder: "Search events...",
              onChange: (b) => m(b.target.value),
              className: "border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ h.jsxs(si, { value: "month", className: "p-6 pt-4", children: [
        /* @__PURE__ */ h.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ h.jsx(
          uR,
          {
            events: v,
            eventMetadata: y,
            onDateClick: k,
            onEventClick: C
          }
        ) }),
        /* @__PURE__ */ h.jsx("div", { className: "block md:hidden mobile-calendar", children: /* @__PURE__ */ h.jsx(
          fR,
          {
            events: v,
            eventMetadata: y,
            onEventClick: C
          }
        ) })
      ] }),
      /* @__PURE__ */ h.jsx(si, { value: "week", className: "p-6 pt-4", children: /* @__PURE__ */ h.jsx(
        cR,
        {
          events: v,
          eventMetadata: y,
          onEventClick: C
        }
      ) }),
      /* @__PURE__ */ h.jsx(si, { value: "day", className: "p-6 pt-4", children: /* @__PURE__ */ h.jsx(
        dR,
        {
          events: v,
          eventMetadata: y,
          initialDate: n,
          onEventClick: C
        }
      ) }),
      /* @__PURE__ */ h.jsxs(si, { value: "list", className: "p-6 pt-4", children: [
        /* @__PURE__ */ h.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ h.jsx(pR, { events: v, eventMetadata: y, onEventClick: C }) }),
        /* @__PURE__ */ h.jsx("div", { className: "block md:hidden", children: /* @__PURE__ */ h.jsx(hR, { events: v, eventMetadata: y, onEventClick: C }) })
      ] })
    ] }) }),
    /* @__PURE__ */ h.jsx(
      IT,
      {
        event: o,
        eventMetadata: y,
        open: i,
        onOpenChange: a
      }
    )
  ] });
}
function gR({
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
  }), l = (c) => c.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  }), u = be.useMemo(() => {
    let c = e;
    const d = /* @__PURE__ */ new Date();
    return (n || r) && (c = c.filter((f) => {
      var w;
      const m = t[f.id];
      return n ? ((w = m == null ? void 0 : m.organization_id) == null ? void 0 : w.toString()) === n : r ? (m == null ? void 0 : m.organization) === r : !0;
    })), s || (c = c.filter((f) => f.startDate >= d)), c.sort((f, m) => f.startDate.getTime() - m.startDate.getTime()), o && o > 0 && (c = c.slice(0, o)), c;
  }, [e, t, n, r, o, s]);
  return u.length === 0 ? /* @__PURE__ */ h.jsxs("div", { className: "text-center py-8 text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ h.jsx(mn, { className: "mx-auto h-8 w-8 mb-3 opacity-50" }),
    /* @__PURE__ */ h.jsx("h3", { className: "text-base font-medium mb-1", children: "No upcoming events" }),
    /* @__PURE__ */ h.jsx("p", { className: "text-sm", children: r ? `${r} has no upcoming events.` : "No events found for this organization." })
  ] }) : /* @__PURE__ */ h.jsxs("div", { className: "space-y-3", children: [
    r && /* @__PURE__ */ h.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ h.jsxs("h3", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: [
        r,
        " Events"
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
        u.length,
        " upcoming event",
        u.length !== 1 ? "s" : ""
      ] })
    ] }),
    u.map((c) => {
      const d = t[c.id], m = d ? {
        academic: "after:bg-green-500",
        social: "after:bg-orange-500",
        cultural: "after:bg-purple-500",
        sports: "after:bg-red-500",
        professional: "after:bg-teal-500",
        wellness: "after:bg-blue-500",
        volunteer: "after:bg-yellow-500",
        arts: "after:bg-pink-500"
      }[d.category] : "after:bg-gray-500";
      return /* @__PURE__ */ h.jsxs(
        "div",
        {
          className: `bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 relative rounded-lg p-4 pl-6 hover:shadow-md transition-all cursor-pointer after:absolute after:inset-y-3 after:left-3 after:w-1 after:rounded-full ${m}`,
          onClick: () => i == null ? void 0 : i(c),
          children: [
            /* @__PURE__ */ h.jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ h.jsxs("div", { className: "flex-grow min-w-0", children: [
                /* @__PURE__ */ h.jsx("div", { className: "font-semibold text-gray-900 dark:text-gray-100 mb-1", children: c.title }),
                /* @__PURE__ */ h.jsxs("div", { className: "flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2", children: [
                  /* @__PURE__ */ h.jsx("span", { className: "font-medium", children: l(c.startDate) }),
                  /* @__PURE__ */ h.jsxs("span", { children: [
                    a(c.startDate),
                    " - ",
                    a(c.endDate)
                  ] })
                ] }),
                d && /* @__PURE__ */ h.jsxs("div", { className: "space-y-1 text-sm text-gray-600 dark:text-gray-400", children: [
                  d.location && /* @__PURE__ */ h.jsxs("div", { children: [
                    "📍 ",
                    d.location
                  ] }),
                  !r && d.organization && /* @__PURE__ */ h.jsxs("div", { children: [
                    "🏢 ",
                    d.organization
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ h.jsxs("div", { className: "flex flex-col items-end gap-2 flex-shrink-0 ml-4", children: [
                (d == null ? void 0 : d.cost) && /* @__PURE__ */ h.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400", children: d.cost }),
                (d == null ? void 0 : d.category) && /* @__PURE__ */ h.jsx(Qr, { variant: "secondary", size: "sm", className: "text-xs", children: d.category.charAt(0).toUpperCase() + d.category.slice(1) })
              ] })
            ] }),
            (d == null ? void 0 : d.registrationRequired) && /* @__PURE__ */ h.jsx("div", { className: "mt-3 pt-2 border-t border-gray-100 dark:border-gray-700", children: /* @__PURE__ */ h.jsx(Qr, { variant: "outline", size: "sm", children: "📝 Registration Required" }) })
          ]
        },
        c.id
      );
    })
  ] });
}
window.renderUNBCCalendar = function(e) {
  const t = document.getElementById(e);
  if (!t) {
    console.error("Calendar container not found:", e);
    return;
  }
  const n = nd(t);
  t.dataset.view, t.dataset.categoryFilter, t.dataset.organizationFilter, n.render(
    /* @__PURE__ */ h.jsx(be.StrictMode, { children: /* @__PURE__ */ h.jsx(mR, {}) })
  );
};
window.renderUNBCEventsList = function(e) {
  const t = document.getElementById(e);
  if (!t) {
    console.error("Events list container not found:", e);
    return;
  }
  const n = nd(t), r = t.dataset.organizationId || "", o = t.dataset.organizationName || "", s = parseInt(t.dataset.limit) || 5, i = t.dataset.showPast === "true";
  n.render(
    /* @__PURE__ */ h.jsx(be.StrictMode, { children: /* @__PURE__ */ h.jsx(
      yR,
      {
        organizationId: r,
        organizationName: o,
        limit: s,
        showPastEvents: i
      }
    ) })
  );
};
function yR({ organizationId: e, organizationName: t, limit: n, showPastEvents: r }) {
  return /* @__PURE__ */ h.jsx(
    gR,
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
  document.querySelectorAll('[data-component="calendar"]').forEach((n) => {
    n.id && window.renderUNBCCalendar(n.id);
  }), document.querySelectorAll('[data-component="events-list"]').forEach((n) => {
    n.id && window.renderUNBCEventsList(n.id);
  });
});
